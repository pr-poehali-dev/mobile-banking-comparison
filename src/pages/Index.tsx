import { useState } from "react";
import Icon from "@/components/ui/icon";

const TEAL = "#2d7d7d";
const TEAL_DARK = "#1f5c5c";
const TEAL_BG = "#2d7d7d";

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

const ArrowTitle = ({ title, bold = false }: { title: string; bold?: boolean }) => (
  <div className="flex items-center mb-6">
    <div
      className="relative flex items-center px-6 py-2.5 text-white"
      style={{
        background: TEAL_BG,
        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: bold ? 700 : 600,
        fontSize: "17px",
        letterSpacing: "0.3px",
        minWidth: "260px",
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
        <div style={{ textAlign: "center", fontSize: "9px", lineHeight: 1.6, opacity: 0.9, maxWidth: "340px" }}>
          <div>Федеральное государственное образовательное бюджетное</div>
          <div>учреждение высшего образования</div>
          <div style={{ fontWeight: 600 }}>«Финансовый университет при Правительстве Российской Федерации»</div>
          <div style={{ fontWeight: 600 }}>(Финуниверситет)</div>
          <div style={{ marginTop: "6px", fontWeight: 600 }}>Самарский финансово-экономический колледж</div>
          <div style={{ fontWeight: 600 }}>(Самарский филиал Финуниверситета)</div>
        </div>
      </div>

      {/* Главный заголовок */}
      <div className="flex-1 flex items-center justify-center">
        <div style={{ textAlign: "center", fontWeight: 700, fontSize: "22px", lineHeight: 1.4, letterSpacing: "0.5px", maxWidth: "82%" }}>
          ТЕМА «СРАВНЕНИЕ МОБИЛЬНЫХ ПРИЛОЖЕНИЙ БАНКОВ»
        </div>
      </div>

      {/* Подпись */}
      <div style={{ textAlign: "right", fontSize: "11px", lineHeight: 1.8, fontWeight: 600 }}>
        <div>Выполнил: студент группы 514</div>
        <div>Специальности 38.02.07</div>
        <div>Кочетков Артём Николаевич</div>
        <div>Руководитель: Гапонцева Татьяна Ивановна</div>
      </div>
      <div style={{ textAlign: "center", fontWeight: 700, fontSize: "12px", marginTop: "10px" }}>
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
      <div style={{ fontSize: "12px", lineHeight: 1.8, color: "#1a1a1a", paddingLeft: "4px" }}>
        <div className="flex items-start gap-2 mb-2">
          <span style={{ color: TEAL, fontWeight: 700, marginTop: "1px" }}>▸</span>
          <span>Мобильным банком пользуются <strong>более 70% россиян</strong></span>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <span style={{ color: TEAL, fontWeight: 700, marginTop: "1px" }}>▸</span>
          <span>Высокая конкуренция → банки постоянно обновляют приложения</span>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <span style={{ color: TEAL, fontWeight: 700, marginTop: "1px" }}>▸</span>
          <span>Пользователю необходимо выбирать удобный и безопасный сервис</span>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <span style={{ color: TEAL, fontWeight: 700, marginTop: "1px" }}>▸</span>
          <span>Изменения на рынке РФ: уход иностранных игроков, развитие RuStore, новые требования к безопасности</span>
        </div>
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
      <div style={{ fontSize: "11.5px", lineHeight: 1.75, color: "#1a1a1a" }}>
        <div className="mb-3">
          <span style={{ fontWeight: 700, color: TEAL }}>Цель: </span>
          сравнить мобильные приложения СберБанк, Т-Банк, ВТБ
        </div>
        <div className="mb-1">
          <span style={{ fontWeight: 700, color: TEAL }}>Объект: </span>
          мобильные банковские приложения
        </div>
        <div className="mb-3">
          <span style={{ fontWeight: 700, color: TEAL }}>Предмет: </span>
          функциональные и пользовательские характеристики
        </div>
        <div style={{ fontWeight: 700, color: TEAL, marginBottom: "6px" }}>Задачи:</div>
        {["Уточнить понятие мобильного банкинга", "Разработать критерии сравнения", "Провести сравнение по балльной шкале", "Составить рейтинг"].map((t, i) => (
          <div key={i} className="flex items-start gap-2 mb-1.5">
            <span style={{ background: TEAL, color: "white", borderRadius: "50%", width: "18px", height: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>{i + 1}</span>
            <span>{t}</span>
          </div>
        ))}
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
      <div style={{ fontSize: "11px", color: "#1a1a1a" }}>
        <table style={{ width: "55%", borderCollapse: "collapse", marginBottom: "14px" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: "6px 10px", textAlign: "left", fontWeight: 700, fontSize: "11px" }}>Критерий</th>
              <th style={{ padding: "6px 10px", textAlign: "center", fontWeight: 700, fontSize: "11px" }}>Макс. балл</th>
            </tr>
          </thead>
          <tbody>
            {[["Функциональность", "25"], ["Юзабилити", "30"], ["Безопасность", "25"], ["Цифровой офис", "20"]].map(([c, b], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: "5px 10px", borderBottom: "1px solid #e0eaea" }}>{c}</td>
                <td style={{ padding: "5px 10px", textAlign: "center", borderBottom: "1px solid #e0eaea" }}>{b}</td>
              </tr>
            ))}
            <tr style={{ background: TEAL, color: "white", fontWeight: 700 }}>
              <td style={{ padding: "6px 10px" }}>ИТОГО</td>
              <td style={{ padding: "6px 10px", textAlign: "center" }}>100</td>
            </tr>
          </tbody>
        </table>
        <div style={{ fontWeight: 700, color: TEAL, marginBottom: "6px" }}>Шкала оценки:</div>
        {[["90–100 баллов", "отлично"], ["75–89 баллов", "хорошо"], ["60–74 балла", "удовлетворительно"]].map(([s, l], i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5">
            <span style={{ background: TEAL, color: "white", padding: "1px 8px", borderRadius: "3px", fontSize: "10px", fontWeight: 600 }}>{s}</span>
            <span>— {l}</span>
          </div>
        ))}
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
      <div style={{ fontSize: "11px", color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "14px" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              {["Банк", "Функц.", "Юзаб.", "Безоп.", "Цифр. офис", "ИТОГО"].map((h, i) => (
                <th key={i} style={{ padding: "6px 8px", textAlign: i === 0 ? "left" : "center", fontWeight: 700, fontSize: "10.5px" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["СберБанк Онлайн", "24", "22", "24", "20", "90"], ["Т-Банк", "21", "28", "21", "19", "89"], ["ВТБ Онлайн", "20", "25", "20", "18", "83"]].map(([bank, ...vals], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: "5px 8px", borderBottom: "1px solid #e0eaea", fontWeight: 600 }}>{bank}</td>
                {vals.map((v, j) => (
                  <td key={j} style={{ padding: "5px 8px", textAlign: "center", borderBottom: "1px solid #e0eaea", fontWeight: j === vals.length - 1 ? 700 : 400, color: j === vals.length - 1 ? TEAL : "inherit" }}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-6" style={{ fontSize: "11.5px" }}>
          <div><span style={{ fontWeight: 700, color: TEAL }}>Лидер:</span> СберБанк (90 баллов)</div>
          <div><span style={{ fontWeight: 700, color: TEAL }}>Отрыв минимальный:</span> Т-Банк (89 баллов)</div>
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
      <div style={{ fontSize: "10.5px", color: "#1a1a1a", display: "flex", flexDirection: "column", gap: "8px" }}>
        {[
          { name: "СберБанк Онлайн", score: 90, pros: "Максимальная функциональность, безопасность, доступ к Госуслугам", cons: "Перегруженный интерфейс, частые изменения" },
          { name: "Т-Банк", score: 89, pros: "Лучшее юзабилити, кэшбэк, минимум шагов для операций", cons: "Ниже баллы по безопасности и функциональности" },
          { name: "ВТБ Онлайн", score: 83, pros: "Гибкая настройка виджетов, лидер по доступности", cons: "Отстаёт по функциональности и безопасности" },
        ].map(({ name, score, pros, cons }, i) => (
          <div key={i} style={{ border: `1px solid ${TEAL}30`, borderLeft: `3px solid ${TEAL}`, padding: "8px 10px", borderRadius: "3px", background: "#f9fefe" }}>
            <div style={{ fontWeight: 700, fontSize: "12px", color: TEAL, marginBottom: "4px" }}>{name} <span style={{ background: TEAL, color: "white", borderRadius: "3px", padding: "1px 6px", fontSize: "10px", marginLeft: "6px" }}>{score} б.</span></div>
            <div className="flex items-start gap-1.5 mb-1"><span style={{ color: "#2a9d2a", fontWeight: 700 }}>✓</span><span>{pros}</span></div>
            <div className="flex items-start gap-1.5"><span style={{ color: "#c0392b", fontWeight: 700 }}>✗</span><span>{cons}</span></div>
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
      <div style={{ fontSize: "10.5px", color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "10px" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              {["Банк", "Пользов.", "Безопасн.", "Юзабил.", "Функц.", "Цифр. офис"].map((h, i) => (
                <th key={i} style={{ padding: "5px 7px", textAlign: i === 0 ? "left" : "center", fontSize: "10px", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[["СберБанк", "9", "7", "5", "8", "6"], ["Т-Банк", "9", "5", "8", "6", "5"], ["ВТБ", "7", "4", "5", "4", "3"]].map(([bank, ...vals], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: "4px 7px", borderBottom: "1px solid #e0eaea", fontWeight: 600 }}>{bank}</td>
                {vals.map((v, j) => <td key={j} style={{ padding: "4px 7px", textAlign: "center", borderBottom: "1px solid #e0eaea" }}>{v}</td>)}
              </tr>
            ))}
            <tr style={{ background: TEAL + "22", fontWeight: 700 }}>
              <td style={{ padding: "4px 7px" }}>ИТОГО</td>
              {["25", "16", "18", "18", "14"].map((v, i) => <td key={i} style={{ padding: "4px 7px", textAlign: "center" }}>{v}</td>)}
            </tr>
          </tbody>
        </table>
        <div style={{ fontSize: "9.5px", fontStyle: "italic", color: "#666", marginBottom: "8px" }}>* Каждый респондент мог выбрать несколько критериев</div>
        <div style={{ fontWeight: 700, color: TEAL, marginBottom: "4px" }}>Вывод:</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-start gap-1.5"><span style={{ color: TEAL }}>▸</span><span>СберБанк и Т-Банк — самые популярные (по 36%)</span></div>
          <div className="flex items-start gap-1.5"><span style={{ color: TEAL }}>▸</span><span>Функциональность и юзабилити — важнейшие критерии (по 18 выборов)</span></div>
          <div className="flex items-start gap-1.5"><span style={{ color: TEAL }}>▸</span><span>Результаты опроса коррелируют с балльным рейтингом</span></div>
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
      <div style={{ fontSize: "11.5px", color: "#1a1a1a", display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          { num: "1", title: "Информационная перегрузка", desc: "Особенно у СберБанка, частые изменения интерфейса" },
          { num: "2", title: "Разный уровень безопасности", desc: "Т-Банк и ВТБ отстают от СберБанка" },
          { num: "3", title: "Фрагментация бизнес-функционала", desc: "У Т-Банка и ВТБ отдельные приложения для бизнеса" },
        ].map(({ num, title, desc }) => (
          <div key={num} className="flex items-start gap-3">
            <div style={{ background: TEAL, color: "white", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>{num}</div>
            <div>
              <div style={{ fontWeight: 700, color: TEAL, marginBottom: "2px" }}>{title}</div>
              <div style={{ color: "#444" }}>→ {desc}</div>
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
      <div style={{ fontSize: "11.5px", color: "#1a1a1a", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        {[
          { icon: "🔗", title: "Экосистемный подход", desc: "Интеграция нефинансовых сервисов" },
          { icon: "🎯", title: "Персонализация", desc: "Лидер — ВТБ" },
          { icon: "🔐", title: "Биометрическая идентификация", desc: "Становится стандартом отрасли" },
          { icon: "♿", title: "Инклюзивность", desc: "Адаптация для людей с ОВЗ" },
        ].map(({ icon, title, desc }, i) => (
          <div key={i} style={{ border: `1px solid ${TEAL}40`, padding: "12px", borderRadius: "4px", background: "#f8fdfd" }}>
            <div style={{ fontSize: "22px", marginBottom: "6px" }}>{icon}</div>
            <div style={{ fontWeight: 700, color: TEAL, marginBottom: "3px", fontSize: "11px" }}>{title}</div>
            <div style={{ color: "#555", fontSize: "10.5px" }}>{desc}</div>
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
      <div style={{ fontSize: "11px", color: "#1a1a1a" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: 700, fontSize: "11px" }}>Если вам важно...</th>
              <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: 700, fontSize: "11px" }}>Рекомендуемый банк</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Максимальная функциональность и экосистема", "🟢 СберБанк"],
              ["Кэшбэк и удобство повседневных операций", "🟡 Т-Банк"],
              ["Доступность и настройка интерфейса", "🔵 ВТБ"],
            ].map(([need, rec], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e0eaea", lineHeight: 1.5 }}>{need}</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid #e0eaea", fontWeight: 700, color: TEAL }}>{rec}</td>
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
      <div style={{ fontSize: "11px", color: "#1a1a1a" }}>
        <div style={{ fontWeight: 700, color: TEAL, fontSize: "12px", marginBottom: "10px" }}>Итоговый рейтинг:</div>
        <table style={{ width: "70%", borderCollapse: "collapse", marginBottom: "16px" }}>
          <thead>
            <tr style={{ background: TEAL, color: "white" }}>
              <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: 700 }}>Место</th>
              <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: 700 }}>Банк</th>
              <th style={{ padding: "7px 12px", textAlign: "center", fontWeight: 700 }}>Баллы</th>
            </tr>
          </thead>
          <tbody>
            {[["🥇 1 место", "СберБанк", "90"], ["🥈 2 место", "Т-Банк", "89"], ["🥉 3 место", "ВТБ", "83"]].map(([place, bank, score], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#f5fafa" : "white" }}>
                <td style={{ padding: "8px 12px", borderBottom: "1px solid #e0eaea", fontSize: "13px" }}>{place}</td>
                <td style={{ padding: "8px 12px", borderBottom: "1px solid #e0eaea", fontWeight: 600 }}>{bank}</td>
                <td style={{ padding: "8px 12px", borderBottom: "1px solid #e0eaea", textAlign: "center", fontWeight: 700, color: TEAL, fontSize: "14px" }}>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: "12px", lineHeight: 1.7, color: "#333" }}>
          <span style={{ fontWeight: 700 }}>Цель достигнута:</span> проведён сравнительный анализ, выявлены сильные и слабые стороны каждого приложения.
        </div>
      </div>
    </div>
    <div className="absolute bottom-3 right-4" style={{ fontSize: "9px", color: "#bbb" }}>11</div>
  </SlideWrapper>
);

// Слайд 12
const Slide12 = () => (
  <SlideWrapper white={false}>
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: "white" }}>
      <div style={{ fontSize: "32px", marginBottom: "20px", opacity: 0.9 }}>🙏</div>
      <div style={{ fontWeight: 700, fontSize: "26px", letterSpacing: "1px", marginBottom: "14px", textAlign: "center" }}>
        Спасибо за внимание!
      </div>
      <div style={{ fontSize: "13px", opacity: 0.85, fontWeight: 500 }}>Вопросы к выступающему</div>
      <div style={{ marginTop: "40px", fontSize: "10px", opacity: 0.6 }}>Кочетков Артём Николаевич · Группа 514 · Самара, 2026</div>
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