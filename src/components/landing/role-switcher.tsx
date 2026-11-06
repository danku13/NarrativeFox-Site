"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { RoleKey } from "@/lib/content/types";

/*
  Переключатель роли внутри контура (/solo и /business).
  Выбор: состояние страницы + память на время посещения (localStorage)
  + событие в аналитику. Параметр role в URL нужен рекламным ссылкам:
  он читается один раз на сервере и становится начальной ролью.
*/

interface RoleState {
  role: RoleKey;
  setRole: (role: RoleKey) => void;
}

const RoleContext = createContext<RoleState | null>(null);

export function RoleProvider({
  initialRole,
  storageKey,
  contour,
  children,
}: {
  initialRole: RoleKey;
  storageKey: string;
  contour: "solo" | "business";
  children: React.ReactNode;
}) {
  const [role, setRoleState] = useState<RoleKey>(initialRole);

  // Память выбора на время посещения: подтягиваем после монтирования,
  // чтобы не было расхождения гидратации.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as { role?: RoleKey };
        if (parsed && typeof parsed.role === "string") {
          setRoleState(parsed.role as RoleKey);
        }
      }
    } catch {
      // localStorage недоступен: просто работаем без памяти
    }
  }, [storageKey]);

  function setRole(next: RoleKey) {
    setRoleState(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ role: next }));
    } catch {
      // без памяти тоже работоспособно
    }
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer?.push({ event: "nf_role_switch", contour, role: next });
  }

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole(): RoleState {
  const ctx = useContext(RoleContext);
  if (!ctx) {
    throw new Error("useRole вызван вне RoleProvider");
  }
  return ctx;
}

export function RoleChips({
  items,
  caption,
  className,
}: {
  items: { key: RoleKey; label: string }[];
  caption?: string;
  className?: string;
}) {
  const { role, setRole } = useRole();
  return (
    <div className={cn("mt-8", className)}>
      <div
        role="tablist"
        aria-label="Выберите ближайший профиль"
        className="inline-flex flex-wrap gap-2 rounded-full border border-stone-200 bg-stone-50 p-1.5"
      >
        {items.map((item) => {
          const active = item.key === role;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setRole(item.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-stone-900 text-white"
                  : "text-stone-600 hover:bg-white hover:text-stone-900"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {caption ? (
        <p className="mt-3 text-xs leading-relaxed text-stone-500">{caption}</p>
      ) : null}
    </div>
  );
}
