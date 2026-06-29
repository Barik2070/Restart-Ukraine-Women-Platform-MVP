# PROJECT_STRUCTURE

Цей документ описує рекомендовану структуру репозиторію для MVP Restart Ukraine Women Platform.

Важливо: поточну структуру не потрібно ламати або реорганізовувати без окремого рішення. Якщо потрібні нові директорії, їх варто додавати поступово й тільки під реальні матеріали.

## Поточний принцип

Репозиторій залишається простим статичним сайтом для GitHub Pages:

- HTML-сторінки лежать у корені;
- спільні стилі підключаються зі `styles.css`;
- базова інтерактивність підключається з `app.js`;
- медіа й бренд-матеріали зберігаються в `assets/`;
- проєктна документація зберігається в markdown-файлах і тематичних папках.

## Рекомендована структура

```text
/
├── index.html
├── about.html
├── programs.html
├── ai.html
├── partners.html
├── application.html
├── methodology.html
├── privacy.html
├── auto.html
├── business.html
├── agro.html
├── dashboard.html
├── telegram.html
├── styles.css
├── app.js
├── assets/
├── css/
├── js/
├── docs/
├── crm/
├── design/
├── presentations/
├── README.md
├── ROADMAP.md
├── BACKLOG.md
└── PROJECT_STRUCTURE.md
```

## Root HTML Pages

Кореневі HTML-файли — це публічні сторінки, які GitHub Pages може відкривати напряму.

Поточні ключові сторінки:

- `index.html` — головна сторінка.
- `about.html` — про платформу.
- `programs.html` — програми.
- `ai.html` — AI-модуль.
- `partners.html` — партнери й донори.
- `application.html` — анкета учасниці.

Додаткові або розширювальні сторінки:

- `methodology.html` — методологія.
- `privacy.html` — приватність і персональні дані.
- `auto.html` — напрям авто.
- `business.html` — напрям бізнес.
- `agro.html` — напрям агро.
- `dashboard.html` — KPI / dashboard.
- `telegram.html` — Telegram-бот або сценарії підтримки.

## assets

`assets/` — місце для зображень, логотипів, іконок, соціальних preview та інших статичних медіа.

Приклади:

- `assets/logo.png`
- `assets/hero-woman.svg`
- `assets/brand-concept.png`
- майбутній `assets/favicon.ico`
- майбутній `assets/og-image.png`

## css

`css/` — рекомендована папка для майбутнього розділення стилів, якщо `styles.css` стане занадто великим.

Поточний стан: стилі залишаються в `styles.css` у корені. Не потрібно переносити їх без окремого рішення, щоб не зламати GitHub Pages і підключення в HTML.

Можлива майбутня структура:

```text
css/
├── base.css
├── layout.css
├── components.css
└── pages.css
```

## js

`js/` — рекомендована папка для майбутнього розділення JavaScript.

Поточний стан: базова логіка залишається в `app.js` у корені.

Можлива майбутня структура:

```text
js/
├── app.js
├── form.js
├── crm.js
└── analytics.js
```

## docs

`docs/` — робоча документація для операційної системи MVP.

Поточні приклади:

- `docs/NOTION_SYSTEM.md`
- `docs/FIGMA_SYSTEM.md`
- `docs/FORM_INTEGRATION.md`

Сюди можна додавати інструкції для команди, донорські notes, процеси рев'ю, сценарії підтримки та методологічні матеріали.

## crm

`crm/` — документація та шаблони для збору заявок і CRM-процесу.

Поточний приклад:

- `crm/GOOGLE_SHEETS_CRM.md`

У цю папку можна додати опис статусів заявок, правила обробки даних, шаблони weekly review. Не зберігати персональні дані учасниць у репозиторії.

## design

`design/` — рекомендована папка для дизайн-системи, handoff-файлів і посилань на Figma.

Поки що можна залишити дизайн-документи в корені або `docs/`, якщо так зручніше команді. Створювати `design/` варто тоді, коли з'являться окремі дизайн-матеріали.

Можливий вміст:

- Figma handoff notes.
- UI inventory.
- Brand assets checklist.
- Компонентна карта сторінок.

## presentations

`presentations/` — рекомендована папка для donor deck, PDF-презентацій і one-pager матеріалів.

Можливий вміст:

- `restart-ukraine-women-platform-deck.pdf`
- `donor-one-pager-en.pdf`
- `partner-offer.pdf`

Не додавати приватні або непублічні донорські документи без погодження.

## Правило реорганізації

Якщо структура змінюється:

- спочатку описати зміну в `BACKLOG.md` або `ROADMAP.md`;
- перевірити всі HTML-посилання після зміни шляхів;
- не переносити файли, якщо достатньо додати документаційну рекомендацію;
- після зміни перевірити GitHub Pages URL.
