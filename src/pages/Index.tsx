import { useState } from "react";
import Icon from "@/components/ui/icon";

const TEAL = "#256569";
const TEAL_DARK = "#1a4a4d";
const TEAL_BG = "#256569";

const LOGO_URL = "https://cdn.poehali.dev/projects/e9e0bb1f-da1b-440a-a5db-876709c17cc2/bucket/12f68e51-ba6e-46f4-b8ec-093bf3ab2a36.jpg";

const LogoFull = () => (
  <img src={LOGO_URL} alt="Финансовый университет" style={{ height: "44px", width: "auto", objectFit: "contain" }} />
);

const LOGO_WHITE_URL = "https://cdn.poehali.dev/projects/e9e0bb1f-da1b-440a-a5db-876709c17cc2/bucket/eb6249ec-1c78-4fba-ae0d-99de9cceed66.png";

const LogoWhite = ({ height = 56 }: { height?: number }) => (
  <img
    src={LOGO_WHITE_URL}
    alt="Финансовый университет"
    style={{ height: `${height}px`, width: "auto", objectFit: "contain" }}
  />
);

// Перевод кегля PowerPoint (pt) в px внутри слайда-превью шириной ~780px (4:3 = 960pt)
const pt = (size: number) => `${(size * 780) / 960}px`;

const ArrowTitle = ({ title }: { title: string }) => (
  <div className="flex items-center mb-7">
    <div
      className="relative flex items-center text-white"
      style={{
        background: TEAL_BG,
        clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: pt(44),
        letterSpacing: "0.3px",
        padding: `${pt(14)} ${pt(40)} ${pt(14)} ${pt(28)}`,
        minWidth: pt(620),
      }}
    >
      {title}
    </div>
  </div>
);

const SlideWrapper = ({ children, white = true }: { children: React.ReactNode; white?: boolean }) => (
  <div
    className="relative w-full overflow-hidden"
    style={{
      aspectRatio: "4/3",
      background: white ? "#ffffff" : TEAL_BG,
      fontFamily: "Montserrat, sans-serif",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
    }}
  >
    {children}
  </div>
);

// Слайд 1 — Титульный
const Slide1 = () => (
  <SlideWrapper white={false}>
    <div className="absolute inset-0 flex flex-col" style={{ color: "white", padding: "5% 7%" }}>
      {/* Шапка */}
      <div className="flex items-start justify-between mb-2">
        <LogoWhite height={56} />
        <div style={{ textAlign: "center", fontSize: pt(13), lineHeight: 1.5, opacity: 0.9, maxWidth: "360px" }}>
          <div style={{ fontWeight: 600 }}>«Финансовый университет при Правительстве РФ»</div>
          <div style={{ marginTop: "6px", fontWeight: 600 }}>Самарский финансово-экономический колледж</div>
        </div>
      </div>

      {/* Главный заголовок */}
      <div className="flex-1 flex items-center justify-center">
        <div style={{ textAlign: "center", fontWeight: 700, fontSize: pt(46), lineHeight: 1.35, letterSpacing: "0.5px", maxWidth: "88%" }}>
          СРАВНЕНИЕ МОБИЛЬНЫХ ПРИЛОЖЕНИЙ БАНКОВ
        </div>
      </div>

      {/* Подпись */}
      <div style={{ textAlign: "right", fontSize: pt(20), lineHeight: 1.7, fontWeight: 600 }}>
        <div>Выполнил: Кочетков А. Н., группа 514</div>
        <div>Руководитель: Гапонцева Т. И.</div>
      </div>
      <div style={{ textAlign: "center", fontWeight: 700, fontSize: pt(22), marginTop: "12px" }}>
        Самара 2026
      </div>
    </div>
  </SlideWrapper>
);

// Слайд 2
const Slide2 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Актуальность темы" />
        <LogoFull />
      </div>
      <div style={{ fontSize: pt(34), lineHeight: 1.5, color: "#1a1a1a", paddingLeft: "6px", display: "flex", flexDirection: "column", gap: pt(22) }}>
        {[
          <span key="1">Мобильным банком пользуются <strong style={{ color: TEAL }}>более 70% россиян</strong></span>,
          "Высокая конкуренция — банки постоянно обновляют приложения",
          "Важно выбрать удобный и безопасный сервис",
          "Уход иностранных игроков, развитие RuStore",
        ].map((t, i) => (
          <div key={i} className="flex items-start gap-3">
            <span style={{ color: TEAL, fontWeight: 700 }}>▸</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>2</div>
  </SlideWrapper>
);

// Слайд 3
const Slide3 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Цель, объект, предмет, задачи" />
        <LogoFull />
      </div>
      <div style={{ fontSize: pt(32), lineHeight: 1.5, color: "#1a1a1a" }}>
        <div style={{ marginBottom: pt(16) }}>
          <span style={{ fontWeight: 700, color: TEAL }}>Цель: </span>
          сравнить приложения СберБанк, Т-Банк, ВТБ
        </div>
        <div style={{ marginBottom: pt(16) }}>
          <span style={{ fontWeight: 700, color: TEAL }}>Объект: </span>
          мобильные банковские приложения
        </div>
        <div style={{ fontWeight: 700, color: TEAL, marginBottom: pt(12) }}>Задачи:</div>
        <div style={{ display: "flex", flexDirection: "column", gap: pt(12) }}>
          {["Разработать критерии сравнения", "Провести оценку по балльной шкале", "Составить итоговый рейтинг"].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              <span style={{ background: TEAL, color: "white", borderRadius: "50%", width: pt(36), height: pt(36), display: "flex", alignItems: "center", justifyContent: "center", fontSize: pt(22), fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>3</div>
  </SlideWrapper>
);

// Слайд 4
const Slide4 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Критерии и методика" />
        <LogoFull />
      </div>
      <div style={{ fontSize: pt(28), color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: pt(20) }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: `${pt(12)} ${pt(18)}`, textAlign: "left", fontWeight: 700 }}>Критерий</th>
              <th style={{ padding: `${pt(12)} ${pt(18)}`, textAlign: "center", fontWeight: 700 }}>Балл</th>
            </tr>
          </thead>
          <tbody>
            {[["Функциональность", "25"], ["Юзабилити", "30"], ["Безопасность", "25"], ["Цифровой офис", "20"]].map(([c, b], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: `${pt(10)} ${pt(18)}`, borderBottom: "1px solid #e0eaea" }}>{c}</td>
                <td style={{ padding: `${pt(10)} ${pt(18)}`, textAlign: "center", borderBottom: "1px solid #e0eaea", fontWeight: 700, fontSize: pt(40), color: TEAL }}>{b}</td>
              </tr>
            ))}
            <tr style={{ background: TEAL, color: "white", fontWeight: 700 }}>
              <td style={{ padding: `${pt(12)} ${pt(18)}` }}>ИТОГО</td>
              <td style={{ padding: `${pt(12)} ${pt(18)}`, textAlign: "center", fontSize: pt(40) }}>100</td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", gap: pt(14), flexWrap: "wrap" }}>
          {[["90–100", "отлично"], ["75–89", "хорошо"], ["60–74", "удовл."]].map(([s, l], i) => (
            <span key={i} style={{ background: "#f5fafa", border: `1px solid ${TEAL}`, color: "#1a1a1a", padding: `${pt(8)} ${pt(16)}`, borderRadius: "4px", fontSize: pt(26) }}>
              <strong style={{ color: TEAL }}>{s}</strong> — {l}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>4</div>
  </SlideWrapper>
);

// Слайд 5
const Slide5 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Результаты анализа" />
        <LogoFull />
      </div>
      <div style={{ fontSize: pt(28), color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: pt(22) }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              {["Банк", "Функц.", "Юзаб.", "Безоп.", "Цифр.", "ИТОГО"].map((h, i) => (
                <th key={i} style={{ padding: `${pt(12)} ${pt(10)}`, textAlign: i === 0 ? "left" : "center", fontWeight: 700, fontSize: pt(26) }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["СберБанк", "24", "22", "24", "20", "90"], ["Т-Банк", "21", "28", "21", "19", "89"], ["ВТБ", "20", "25", "20", "18", "83"]].map(([bank, ...vals], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: `${pt(12)} ${pt(10)}`, borderBottom: "1px solid #e0eaea", fontWeight: 700 }}>{bank}</td>
                {vals.map((v, j) => {
                  const isTotal = j === vals.length - 1;
                  return (
                    <td key={j} style={{ padding: `${pt(12)} ${pt(10)}`, textAlign: "center", borderBottom: "1px solid #e0eaea", fontWeight: isTotal ? 700 : 400, color: isTotal ? TEAL : "inherit", fontSize: isTotal ? pt(40) : pt(28) }}>{v}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ fontSize: pt(30) }}>
          <span style={{ fontWeight: 700, color: TEAL }}>Лидер:</span> СберБанк — <strong style={{ color: TEAL }}>90</strong> баллов
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>5</div>
  </SlideWrapper>
);

// Слайд 6
const Slide6 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Сильные и слабые стороны" />
        <LogoFull />
      </div>
      <div style={{ fontSize: pt(26), color: "#1a1a1a", display: "flex", flexDirection: "column", gap: pt(16) }}>
        {[
          { name: "СберБанк", score: 90, pros: "Максимум функций и безопасности", cons: "Перегруженный интерфейс" },
          { name: "Т-Банк", score: 89, pros: "Лучшее юзабилити, кэшбэк", cons: "Ниже безопасность" },
          { name: "ВТБ", score: 83, pros: "Гибкая настройка виджетов", cons: "Отстаёт по функциональности" },
        ].map(({ name, score, pros, cons }, i) => (
          <div key={i} style={{ border: `1px solid ${TEAL}30`, borderLeft: `5px solid ${TEAL}`, padding: `${pt(14)} ${pt(20)}`, borderRadius: "4px", background: "#f9fefe", display: "flex", alignItems: "center", gap: pt(20) }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: pt(150) }}>
              <span style={{ fontWeight: 700, fontSize: pt(28), color: TEAL }}>{name}</span>
              <span style={{ fontWeight: 700, fontSize: pt(40), color: TEAL, lineHeight: 1 }}>{score}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex items-start gap-2" style={{ marginBottom: pt(6) }}><span style={{ color: "#2a9d2a", fontWeight: 700 }}>✓</span><span>{pros}</span></div>
              <div className="flex items-start gap-2"><span style={{ color: "#c0392b", fontWeight: 700 }}>✗</span><span>{cons}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>6</div>
  </SlideWrapper>
);

// Слайд 7
const Slide7 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Результаты опроса (25 чел.)" />
        <LogoFull />
      </div>
      <div style={{ color: "#1a1a1a" }}>
        <div style={{ display: "flex", gap: pt(20), marginBottom: pt(28) }}>
          {[["СберБанк", "36%"], ["Т-Банк", "36%"], ["ВТБ", "28%"]].map(([bank, pct], i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", border: `1px solid ${TEAL}40`, borderRadius: "6px", padding: `${pt(18)} ${pt(10)}`, background: "#f8fdfd" }}>
              <div style={{ fontWeight: 700, fontSize: pt(40), color: TEAL, lineHeight: 1 }}>{pct}</div>
              <div style={{ fontSize: pt(28), fontWeight: 600, marginTop: pt(8) }}>{bank}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: pt(32), lineHeight: 1.5, display: "flex", flexDirection: "column", gap: pt(16) }}>
          <div className="flex items-start gap-3"><span style={{ color: TEAL, fontWeight: 700 }}>▸</span><span>Опрошено <strong style={{ color: TEAL }}>25</strong> человек</span></div>
          <div className="flex items-start gap-3"><span style={{ color: TEAL, fontWeight: 700 }}>▸</span><span>Важнее всего — юзабилити и функциональность</span></div>
          <div className="flex items-start gap-3"><span style={{ color: TEAL, fontWeight: 700 }}>▸</span><span>Опрос совпал с балльным рейтингом</span></div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>7</div>
  </SlideWrapper>
);

// Слайд 8
const Slide8 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Выявленные проблемы" />
        <LogoFull />
      </div>
      <div style={{ color: "#1a1a1a", display: "flex", flexDirection: "column", gap: pt(28) }}>
        {[
          { num: "1", title: "Информационная перегрузка", desc: "Частые изменения интерфейса" },
          { num: "2", title: "Разный уровень безопасности", desc: "Т-Банк и ВТБ отстают от СберБанка" },
          { num: "3", title: "Фрагментация бизнес-функций", desc: "Отдельные приложения для бизнеса" },
          { num: "4", title: "Сложность возврата ошибочных переводов", desc: "Разный алгоритм у всех банков, у ВТБ — дольше всего" },
        ].map(({ num, title, desc }) => (
          <div key={num} className="flex items-start gap-4">
            <div style={{ background: TEAL, color: "white", borderRadius: "50%", width: pt(56), height: pt(56), display: "flex", alignItems: "center", justifyContent: "center", fontSize: pt(34), fontWeight: 700, flexShrink: 0 }}>{num}</div>
            <div>
              <div style={{ fontWeight: 700, color: TEAL, fontSize: pt(34), lineHeight: 1.2 }}>{title}</div>
              <div style={{ color: "#444", fontSize: pt(28), marginTop: pt(4) }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>8</div>
  </SlideWrapper>
);

// Слайд 9
const Slide9 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Тенденции развития" />
        <LogoFull />
      </div>
      <div style={{ color: "#1a1a1a", display: "grid", gridTemplateColumns: "1fr 1fr", gap: pt(22) }}>
        {[
          { title: "Экосистемный подход", desc: "Интеграция сервисов" },
          { title: "Персонализация", desc: "Лидер — ВТБ" },
          { title: "Биометрия", desc: "Становится стандартом" },
          { title: "Инклюзивность", desc: "Адаптация для людей с ОВЗ" },
        ].map(({ title, desc }, i) => (
          <div key={i} style={{ border: `1px solid ${TEAL}40`, borderLeft: `5px solid ${TEAL}`, padding: `${pt(22)} ${pt(24)}`, borderRadius: "4px", background: "#f8fdfd" }}>
            <div style={{ fontWeight: 700, color: TEAL, marginBottom: pt(8), fontSize: pt(32) }}>{title}</div>
            <div style={{ color: "#555", fontSize: pt(26), lineHeight: 1.3 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>9</div>
  </SlideWrapper>
);

// Слайд 10
const Slide10 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Рекомендации пользователям" />
        <LogoFull />
      </div>
      <div style={{ color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: `${pt(16)} ${pt(20)}`, textAlign: "left", fontWeight: 700, fontSize: pt(28) }}>Если важно...</th>
              <th style={{ padding: `${pt(16)} ${pt(20)}`, textAlign: "left", fontWeight: 700, fontSize: pt(28) }}>Банк</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Максимум функций и экосистема", "СберБанк"],
              ["Кэшбэк и удобство операций", "Т-Банк"],
              ["Доступность и настройка", "ВТБ"],
            ].map(([need, rec], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: `${pt(26)} ${pt(20)}`, borderBottom: "1px solid #e0eaea", lineHeight: 1.3, fontSize: pt(28) }}>{need}</td>
                <td style={{ padding: `${pt(26)} ${pt(20)}`, borderBottom: "1px solid #e0eaea", fontWeight: 700, color: TEAL, fontSize: pt(32) }}>{rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>10</div>
  </SlideWrapper>
);

// Слайд 11
const Slide11 = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6" style={{ paddingTop: "20px" }}>
      <div className="flex items-start justify-between mb-1">
        <ArrowTitle title="Общий вывод" />
        <LogoFull />
      </div>
      <div style={{ color: "#1a1a1a" }}>
        <div style={{ fontWeight: 700, color: TEAL, fontSize: pt(34), marginBottom: pt(16) }}>Итоговый рейтинг:</div>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: pt(26) }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: `${pt(14)} ${pt(18)}`, textAlign: "left", fontWeight: 700, fontSize: pt(28) }}>Место</th>
              <th style={{ padding: `${pt(14)} ${pt(18)}`, textAlign: "left", fontWeight: 700, fontSize: pt(28) }}>Банк</th>
              <th style={{ padding: `${pt(14)} ${pt(18)}`, textAlign: "center", fontWeight: 700, fontSize: pt(28) }}>Баллы</th>
            </tr>
          </thead>
          <tbody>
            {[["1 место", "СберБанк", "90"], ["2 место", "Т-Банк", "89"], ["3 место", "ВТБ", "83"]].map(([place, bank, score], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: `${pt(16)} ${pt(18)}`, borderBottom: "1px solid #e0eaea", fontSize: pt(30), fontWeight: 600 }}>{place}</td>
                <td style={{ padding: `${pt(16)} ${pt(18)}`, borderBottom: "1px solid #e0eaea", fontWeight: 600, fontSize: pt(30) }}>{bank}</td>
                <td style={{ padding: `${pt(16)} ${pt(18)}`, borderBottom: "1px solid #e0eaea", textAlign: "center", fontWeight: 700, color: TEAL, fontSize: pt(40) }}>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ borderLeft: `5px solid ${TEAL}`, paddingLeft: pt(18), lineHeight: 1.4, color: "#333", fontSize: pt(30) }}>
          <span style={{ fontWeight: 700, color: TEAL }}>Цель достигнута:</span> проведён сравнительный анализ приложений.
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>11</div>
  </SlideWrapper>
);

// Слайд 12
const Slide12 = () => (
  <SlideWrapper white={false}>
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: "white", padding: "0 6%" }}>
      <div style={{ fontWeight: 700, fontSize: "42px", letterSpacing: "1px", marginBottom: "20px", textAlign: "center" }}>
        Спасибо за внимание!
      </div>
      <div style={{ marginTop: "50px", fontSize: "14px", opacity: 0.65 }}>Кочетков Артём Николаевич · Группа 514 · Самара, 2026</div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>12</div>
  </SlideWrapper>
);

const SLIDES = [
  { label: "1. Титульный", Component: Slide1 },
  { label: "2. Актуальность", Component: Slide2 },
  { label: "3. Цель и задачи", Component: Slide3 },
  { label: "4. Критерии", Component: Slide4 },
  { label: "5. Результаты", Component: Slide5 },
  { label: "6. Сильные/слабые", Component: Slide6 },
  { label: "7. Опрос", Component: Slide7 },
  { label: "8. Проблемы", Component: Slide8 },
  { label: "9. Тенденции", Component: Slide9 },
  { label: "10. Рекомендации", Component: Slide10 },
  { label: "11. Вывод", Component: Slide11 },
  { label: "12. Финал", Component: Slide12 },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const { Component } = SLIDES[current];

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1));

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        background: "#f2f4f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Топ-бар */}
      <div style={{ background: TEAL_DARK, color: "white", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "0.5px" }}>
          Презентация · Финуниверситет · Кочетков А.Н.
        </div>
        <div style={{ fontSize: "12px", opacity: 0.8 }}>
          Слайд {current + 1} из {SLIDES.length}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, gap: 0 }}>
        {/* Боковая панель */}
        <div
          style={{
            width: "200px",
            background: "#e8edee",
            borderRight: "1px solid #cfd8d9",
            overflowY: "auto",
            padding: "12px 8px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                background: i === current ? TEAL : "white",
                color: i === current ? "white" : "#333",
                border: i === current ? "none" : "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px 8px",
                fontSize: "10px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: i === current ? 700 : 400,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Центральная область */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "32px 24px" }}>
          {/* Слайд */}
          <div style={{ width: "100%", maxWidth: "780px", boxShadow: "0 4px 32px rgba(0,0,0,0.18)", borderRadius: "4px" }}>
            <Component />
          </div>

          {/* Навигация */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "20px" }}>
            <button
              onClick={prev}
              disabled={current === 0}
              style={{
                background: current === 0 ? "#ccc" : TEAL,
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 20px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                cursor: current === 0 ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              ← Назад
            </button>
            <div style={{ display: "flex", gap: "5px" }}>
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === current ? TEAL : "#bbb",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current === SLIDES.length - 1}
              style={{
                background: current === SLIDES.length - 1 ? "#ccc" : TEAL,
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 20px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                cursor: current === SLIDES.length - 1 ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              Вперёд →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}