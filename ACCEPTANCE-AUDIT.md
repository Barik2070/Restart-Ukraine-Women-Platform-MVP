# Acceptance audit — Restart Ukraine Women MVP

Дата аудиту: 24 червня 2026.

## Доведено локальними артефактами

| Вимога | Авторитетний доказ | Статус |
|---|---|---|
| Moodboard і бренд-концепція | `moodboard.html`, `assets/brand-concept.png` | Виконано |
| Логотип і палітра | `assets/logo.png`, `ui-kit.html` | Виконано |
| Типографіка і компоненти | `styles.css`, `ui-kit.html`, `DESIGN-GUIDE.md` | Виконано |
| Головна сторінка з усіма обов’язковими блоками | `index.html` | Виконано |
| Про платформу | `about.html` | Виконано |
| Сторінка програм | `programs.html` | Виконано |
| Три окремі навчальні треки | `track-auto.html`, `track-business.html`, `track-agro.html` | Виконано |
| AI-модуль | `ai.html` | Виконано |
| Партнерам і донорам, KPI | `partners.html` | Виконано |
| Анкета з 14 групами полів і success state | `application.html`, `app.js` | Виконано |
| Особистий кабінет / навчальна зона | `dashboard.html` | Виконано |
| UX Telegram-бота | `telegram.html` | Виконано |
| Контакти | `contacts.html` | Виконано |
| UI-kit і design guide | `ui-kit.html`, `DESIGN-GUIDE.md` | Виконано |
| Адаптивні правила | Browser QA на GitHub Pages: desktop 1440 px і mobile 375 px | Виконано |
| Reduced motion та клавіатурний skip-link | `styles.css`, `index.html` | Реалізовано в коді |
| Внутрішня цілісність | автоматична перевірка всіх локальних `href/src` | Виконано |
| Мобільне меню | Browser QA на viewport 375 px | Виконано |
| Modal навчальної програми | Browser QA: відкрито «Автомобільний сектор» | Виконано |
| Трикрокова анкета і success state | Browser QA з тестовими даними на опублікованому сайті | Виконано |
| Публікація | `https://barik2070.github.io/Restart-Ukraine-Women-Platform/`, GitHub Actions run `28039994690` | Виконано |

## Зовнішні артефакти та перевірки

| Вимога | Чому доказ недостатній | Що потрібно |
|---|---|---|
| Tablet 768 px та laptop 1280 px | Browser QA на GitHub Pages: обидва viewport-и перевірені, tablet-навігація веде на сторінку програм | Виконано |
| Figma Make інтерактивний прототип | `https://www.figma.com/make/b3y3bTYMCAVINZUKB8w6F8/Restart-Ukraine-Women-Platform` — Version 4, 12 сторінок, 6 code files; desktop/mobile preview, навігація, 14 груп анкети та success state перевірені | Виконано як Figma Make |
| Публікація Figma Make | `https://posts-panda-92111585.figma.site/` — публічний URL відкрито й перевірено; підтверджені факти присутні, непідтверджені дані відсутні | Виконано |
| Фактологічна чистота Figma Make | Version 3 видаляє непідтверджені статистики, hotline і названих партнерів; залишає 100–150 учасниць, 6 місяців, 3 треки, план 30–90 днів і нейтральні категорії партнерів | Виконано |
| Чесний демо-стан анкети Figma Make | Version 4 прямо повідомляє, що дані не надсилаються і не зберігаються до підключення CRM | Виконано |
| Класичний Figma Design-файл | `https://www.figma.com/design/zPflkGlDKz4acoSV3FUAVn/Restart-Ukraine-Women-Platform-%E2%80%94-Editable-Design` — окремі сторінки `Website — Desktop` та `UI Kit & Moodboard`, імпортовані як редаговані Auto Layout frames/layers | Виконано як редагований handoff; нативна component library може бути деталізована окремо |

## Дані, яких ще немає у вихідних матеріалах

| Вимога | Поточний безпечний стан | Що потрібно для продуктового запуску |
|---|---|---|
| Реальні контактні адреси | На сайті показано «Контакт уточнюється»; вигадані адреси видалено | Надати підтверджені email/Telegram |
| Фактичне надсилання анкети | Success state прямо позначено як демонстраційний; дані не надсилаються і не зберігаються | Надати endpoint або CRM-інтеграцію та політику приватності |

## Висновок

UX/UI-прототип, названі MVP-екрани, публікація, browser-сценарії, Figma Make Version 4 і редагований Figma Design-файл підтверджені. Публічний сайт очищено від непідтверджених KPI, вигаданих контактів і неправдивого повідомлення про надсилання анкети. Для продуктового запуску ще потрібні лише підтверджені контакти, CRM/backend і політика приватності; це не можна достовірно вигадати в дизайні.
