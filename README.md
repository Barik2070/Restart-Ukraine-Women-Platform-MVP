# Restart Ukraine Women Platform

**Restart Ukraine Women Platform** — цифрова платформа професійного повернення та економічної адаптації українок.

Основний меседж MVP: **"Повернення в Україну з планом"**.

MVP link: https://barik2070.github.io/Restart-Ukraine-Women-Platform/index.html

## Ціль платформи

Допомогти українкам, які планують повернення в Україну або вже повернулися, перейти від невизначеності до практичного маршруту дій: обрати професійний напрям, подати заявку, отримати рекомендації, пройти навчальний трек і підготуватися до економічної адаптації.

## Цільова аудиторія

- Українки за кордоном, які розглядають повернення в Україну.
- Українки, які вже повернулися й потребують професійної переорієнтації.
- Внутрішньо переміщені жінки, які шукають новий економічний старт.
- Партнери, донори, освітні організації та роботодавці, які підтримують жіночу зайнятість і відновлення України.

## Ключові сторінки MVP

- `index.html` — головна сторінка.
- `about.html` — сторінка "Про платформу".
- `programs.html` — сторінка "Програми".
- `ai.html` — AI-модуль.
- `partners.html` — сторінка партнерів і донорів.
- `application.html` — анкета учасниці.

Додаткові сторінки, які можуть використовуватися в розвитку MVP: `methodology.html`, `privacy.html`, `auto.html`, `business.html`, `agro.html`, `dashboard.html`, `telegram.html`.

## Як запустити локально

Це статичний HTML/CSS/JS сайт без backend-залежностей.

1. Склонуйте або відкрийте репозиторій локально.
2. Відкрийте файл `index.html` у браузері.
3. Для перевірки повної навігації переходьте між HTML-сторінками з кореня репозиторію.

За потреби можна запустити простий локальний сервер з кореня проєкту:

```bash
python -m http.server 8000
```

Після цього сайт буде доступний за адресою `http://localhost:8000/`.

## Як працює GitHub Pages

GitHub Pages публікує статичні файли з репозиторію. Для цього MVP головна сторінка розташована в корені як `index.html`, тому GitHub Pages відкриває її як стартову сторінку сайту.

Поточний публічний URL:

https://barik2070.github.io/Restart-Ukraine-Women-Platform/index.html

Перед публікацією варто перевіряти:

- що всі внутрішні посилання ведуть на наявні `.html` файли;
- що шляхи до `styles.css`, `app.js` і файлів з `assets/` відносні;
- що в репозиторії немає приватних токенів, API keys або персональних даних;
- що сторінка анкети не передає дані в неперевірений endpoint.

## Правила внесення змін

- Не змінювати дизайн і структуру сайту без окремого рішення команди.
- Не додавати backend або сторонні сервіси як обов'язкову залежність без погодження.
- Не комітити API keys, токени, приватні URL, персональні дані учасниць або донорські документи з обмеженим доступом.
- Усі CTA на заявку мають вести на `application.html`.
- Для CRM-інтеграції використовувати placeholder `GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`, доки не буде затверджений робочий endpoint.
- Великі структурні зміни спочатку описувати в `ROADMAP.md`, `BACKLOG.md` або `PROJECT_STRUCTURE.md`.

## Проєктні placeholders

- Notion: `NOTION_PROJECT_HOME_URL_HERE`
- Figma: `FIGMA_DESIGN_SYSTEM_URL_HERE`
- Google Sheets CRM: `GOOGLE_SHEETS_CRM_URL_HERE`
- Google Apps Script endpoint: `GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

## Робочі документи

- [ROADMAP.md](ROADMAP.md)
- [BACKLOG.md](BACKLOG.md)
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- [docs/NOTION_SYSTEM.md](docs/NOTION_SYSTEM.md)
- [docs/FIGMA_SYSTEM.md](docs/FIGMA_SYSTEM.md)
- [crm/GOOGLE_SHEETS_CRM.md](crm/GOOGLE_SHEETS_CRM.md)
