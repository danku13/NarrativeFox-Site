#!/usr/bin/env node
/*
  Автолинтер стоп-листов NarrativeFox (правила сборки, раздел 8).
  Запускается перед каждой сборкой: npm run build / bun run build.

  Проверяет исходники сайта (без стоковых ui-компонентов):
  1. Символы длинного и среднего тире: запрещены везде.
  2. Запрещённое слово входа («интервью»): запрещено везде.
  3. Обещания результата без человека и хайп: запрещены везде.
  4. Цена сервиса: запрещены старые ценовые формулировки пилота.
     Денежные упоминания допускаются только как рыночные ориентиры:
     «230 тысяч ₽» и постатейная смета штата в business-content.ts.
  5. Стоп-лист общих секций: действует в src/lib/content/shared.ts.
  6. Сегмент «Блогеры и авторы»: без формулировок «пишет за вас».
  7. Санити-чек: опорная фраза присутствует в базе.
*/

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src/app", "src/components/landing", "src/lib/content"];
const SKIP_DIRS = new Set(["node_modules", ".next", "ui"]);
const EXTENSIONS = new Set([".ts", ".tsx"]);

const GLOBAL_BAN_CHARS = [
  { char: "\u2014", label: "длинное тире (—)" },
  { char: "\u2013", label: "среднее тире (–)" },
];

const GLOBAL_BAN_WORDS = [
  "интервью",
  "на автопилоте",
  "без вашего участия",
  "всё само",
  "заменит маркетолога",
  "революцион",
  "магия",
  "идеальн",
  "мгновенно",
];

/* Старая цена пилота: запрещена с версии v3.0. */
const GLOBAL_BAN_PATTERNS = [
  { re: /15[-\u2013\u2014]30\s+тысяч/iu, label: "старая цена пилота: 15-30 тысяч" },
  { re: /от\s+15\s+до\s+30\s+тысяч/iu, label: "старая цена пилота: от 15 до 30 тысяч" },
  { re: /1[05]\s?000\s*(₽|руб)/iu, label: "старая цена пилота цифрами" },
];

/* Денежные ориентиры: «тысяч ₽» допустимо только после 230. */
const MONEY_THOUSAND = /(\d+)\s+тысяч\s+₽/gu;
/* Короткая форма «тыс ₽»: только в постатейной смете бизнес-контура. */
const MONEY_SHORT = /\d+\s+тыс\s+₽/gu;
const SHORT_MONEY_ALLOWED_FILES = new Set([
  "src/lib/content/business-content.ts",
]);

/* Стоп-лист общих секций (8.2): только для shared.ts. */
const SHARED_BAN_WORDS = [
  "B2B",
  "отдел",
  "заказчик",
  "воронка",
  "лид",
  "сделка",
  "клиентский кейс",
];

const BLOGGER_BAN = [/пишет\s+за\s+вас/iu, /пишем\s+за\s+вас/iu];

const ANCHOR_PHRASE = "Ничего не выходит без вашего утверждения";

const errors = [];
const warnings = [];

function listFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...listFiles(full));
    } else if (EXTENSIONS.has(entry.slice(entry.lastIndexOf(".")))) {
      out.push(full);
    }
  }
  return out;
}

/* Граница слова для кириллицы: \b в JS не работает с русскими буквами. */
function hasWord(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^\\p{L}\\p{N}_])${escaped}([^\\p{L}\\p{N}_]|$)`, "iu");
  return re.test(text);
}

function report(file, line, label, excerpt) {
  errors.push(`  ${file}:${line}  ${label}\n    ${excerpt.slice(0, 90)}`);
}

const files = [];
for (const dir of SCAN_DIRS) {
  try {
    files.push(...listFiles(join(ROOT, dir)));
  } catch {
    warnings.push(`Каталог не найден, пропускаю: ${dir}`);
  }
}

for (const file of files) {
  const rel = relative(ROOT, file).split("\\").join("/");
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const isShared = rel === "src/lib/content/shared.ts";
  const allowsShortMoney = SHORT_MONEY_ALLOWED_FILES.has(rel);

  lines.forEach((line, i) => {
    const lineNo = i + 1;

    for (const { char, label } of GLOBAL_BAN_CHARS) {
      const at = line.indexOf(char);
      if (at !== -1) {
        report(rel, lineNo, label, line.trim());
      }
    }

    const lower = line.toLowerCase();
    for (const word of GLOBAL_BAN_WORDS) {
      if (lower.includes(word.toLowerCase())) {
        report(rel, lineNo, `запрещённое слово: «${word}»`, line.trim());
      }
    }

    for (const { re, label } of GLOBAL_BAN_PATTERNS) {
      if (re.test(line)) {
        report(rel, lineNo, label, line.trim());
      }
    }

    for (const match of line.matchAll(MONEY_THOUSAND)) {
      const amount = Number(match[1]);
      if (amount !== 230) {
        report(
          rel,
          lineNo,
          `денежная сумма вне ориентира штатной альтернативы: ${match[0]}`,
          line.trim()
        );
      }
    }

    if (!allowsShortMoney) {
      for (const match of line.matchAll(MONEY_SHORT)) {
        report(rel, lineNo, `короткая денежная форма вне сметы бизнес-контура: ${match[0]}`, line.trim());
      }
    }

    if (isShared) {
      for (const word of SHARED_BAN_WORDS) {
        if (hasWord(line, word) || (word === "B2B" && line.includes("B2B"))) {
          report(rel, lineNo, `стоп-лист общих секций: «${word}»`, line.trim());
        }
      }
    }

    for (const re of BLOGGER_BAN) {
      if (re.test(line)) {
        report(rel, lineNo, "запрещённая формулировка про «пишет за вас»", line.trim());
      }
    }
  });
}

/* Санити-чек: опорная фраза жива в базе. */
{
  const sharedPath = join(ROOT, "src/lib/content/shared.ts");
  try {
    const shared = readFileSync(sharedPath, "utf8");
    if (!shared.includes(ANCHOR_PHRASE)) {
      errors.push(
        `  src/lib/content/shared.ts  опорная фраза «${ANCHOR_PHRASE}» не найдена в базе`
      );
    }
  } catch {
    warnings.push("shared.ts не найден: санити-чек опорной фразы пропущен");
  }
}

if (warnings.length) {
  console.warn("Предупреждения линтера:");
  for (const w of warnings) console.warn(`  ${w}`);
}

if (errors.length) {
  console.error(`\nЛинтер контента: найдено нарушений: ${errors.length}\n`);
  for (const e of errors) console.error(e);
  console.error(
    "\nПравила: раздел 8 сборочного документа. Тире заменяются двоеточием или запятой," +
      " вход описывается словами «голосовые, заметки, документы, таблицы»," +
      " цена сервиса не указывается.\n"
  );
  process.exit(1);
}

console.log(`Линтер контента: чисто. Проверено файлов: ${files.length}`);
