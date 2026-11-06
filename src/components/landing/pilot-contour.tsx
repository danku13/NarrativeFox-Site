"use client";

import { useEffect, useState } from "react";

/*
  Статическая версия /pilot: параметр contour читается на клиенте.
  Секции приходят готовыми с сервера (слоты ниже), переключатель
  лишь выбирает, какой набор показать: тарифы B2C, экономику B2B
  или развилку по умолчанию для прямого входа.
*/

type PilotContour = "solo" | "business" | "all";

export function PilotContourView({
  solo,
  business,
  all,
  soloForm,
  businessForm,
  allForm,
  children,
}: {
  solo: React.ReactNode;
  business: React.ReactNode;
  all: React.ReactNode;
  soloForm: React.ReactNode;
  businessForm: React.ReactNode;
  allForm: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [contour, setContour] = useState<PilotContour>("all");

  useEffect(() => {
    try {
      const raw = new URLSearchParams(window.location.search).get("contour");
      if (raw === "solo" || raw === "business") {
        setContour(raw);
      }
    } catch {
      // без параметра показываем развилку: страница самодостаточна
    }
  }, []);

  const pricing =
    contour === "solo" ? solo : contour === "business" ? business : all;
  const form =
    contour === "solo" ? soloForm : contour === "business" ? businessForm : allForm;

  return (
    <>
      {pricing}
      {children}
      {form}
    </>
  );
}
