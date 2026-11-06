import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createHash } from "crypto";

/*
  Приём заявок с посадочной. Единственный защищённый канал связи.
  Антиспам без капчи: honeypot-поле + временная ловушка + лимит частоты.
*/

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const list = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) {
    hits.set(key, list);
    return true;
  }
  list.push(now);
  hits.set(key, list);
  return false;
}

function clientKey(req: NextRequest): string {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

const CONTOURS = ["gateway", "solo", "business"] as const;
const SEGMENTS = ["expert", "blogger", "b2b", "tech"] as const;
const ENTRY_POINTS = [
  "hero_cta",
  "case_want_same",
  "numbers_cta",
  "fit_passed_cta",
  "pilot_cta",
  "tariff_cta",
  "case_discuss_cta",
  "final_form",
  "sticky_header",
] as const;

function pickEnum<T extends readonly string[]>(
  value: unknown,
  allowed: T
): T[number] | undefined {
  return typeof value === "string" && (allowed as readonly string[]).includes(value)
    ? (value as T[number])
    : undefined;
}

export async function POST(req: NextRequest) {
  try {
    if (rateLimited(clientKey(req))) {
      return NextResponse.json(
        { ok: false, error: "Слишком много отправок. Попробуйте через минуту." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Некорректный запрос." },
        { status: 400 }
      );
    }

    const {
      name,
      contact,
      message,
      website,
      elapsedMs,
      contour,
      segment,
      entryPoint,
    } = body as Record<string, unknown>;

    // Honeypot: скрытое поле, которое люди не заполняют.
    if (typeof website === "string" && website.trim() !== "") {
      // Тихо принимаем, чтобы не подсказывать ботам, но не сохраняем.
      return NextResponse.json({ ok: true });
    }

    // Временная ловушка: форма закрыта быстрее 3 секунд.
    if (typeof elapsedMs !== "number" || elapsedMs < 3000) {
      return NextResponse.json(
        { ok: false, error: "Форма отправлена слишком быстро. Проверьте поля и попробуйте снова." },
        { status: 400 }
      );
    }

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanContact = typeof contact === "string" ? contact.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (cleanName.length < 2 || cleanName.length > 120) {
      return NextResponse.json(
        { ok: false, error: "Укажите имя (от 2 до 120 символов)." },
        { status: 400 }
      );
    }
    if (cleanContact.length < 3 || cleanContact.length > 200) {
      return NextResponse.json(
        { ok: false, error: "Укажите контакт для ответа: Telegram или email." },
        { status: 400 }
      );
    }
    if (cleanMessage.length < 20 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Расскажите о бизнесе: минимум 20 символов." },
        { status: 400 }
      );
    }

    /*
      Контекст воронки: макро-контур, роль и точка входа.
      До первого ответа видно, кто перед нами: мастер, который боится
      потерять личный тон, или фаундер, которому критична база фактов.
    */
    await db.lead.create({
      data: {
        name: cleanName,
        contact: cleanContact,
        message: cleanMessage,
        source: "landing",
        contour: pickEnum(contour, CONTOURS) ?? "gateway",
        segment: pickEnum(segment, SEGMENTS) ?? "",
        entryPoint: pickEnum(entryPoint, ENTRY_POINTS) ?? "final_form",
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 500 }
    );
  }
}
