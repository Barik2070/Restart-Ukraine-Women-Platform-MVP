# AUDIT REPORT — Restart Ukraine Women Platform

Дата аудиту: 2026-06-29

MVP URL: https://barik2070.github.io/Restart-Ukraine-Women-Platform/index.html

## 1. Поточний стан MVP

Проєкт є статичним MVP для GitHub Pages: 19 HTML-сторінок, 1 CSS-файл, 1 JS-файл, папки `assets/`, `docs/`, `crm/`, а також робочі Markdown-документи.

Основні файли:

- `index.html` — головна сторінка MVP.
- `application.html` — анкета.
- `styles.css` — основні стилі.
- `app.js` — мобільне меню, кроки анкети, demo-dialog програм.
- `assets/logo.png`, `assets/hero-woman.svg`, `assets/brand-concept.png` — наявні візуальні assets.
- `docs/FORM_INTEGRATION.md`, `crm/GOOGLE_SHEETS_CRM.md` — документація для майбутньої інтеграції форми/CRM.

GitHub Pages перевірено мережевим запитом: URL відповідає `200 OK`, title: `Restart Ukraine Women — Повернення з планом`. Deployment не виглядає зламаним.

Локально є папка `.git`, але команда `git status --short` з поточного каталогу повернула `fatal: not a git repository`. Це не ламає опублікований MVP, але вказує на проблему локального checkout/worktree або способу відкриття папки.

## 2. Існуючі сторінки

У корені репозиторію знайдено такі HTML-сторінки:

- `index.html`
- `about.html`
- `methodology.html`
- `programs.html`
- `auto.html`
- `business.html`
- `agro.html`
- `ai.html`
- `application.html`
- `partners.html`
- `contacts.html`
- `privacy.html`
- `dashboard.html`
- `telegram.html`
- `track-auto.html`
- `track-business.html`
- `track-agro.html`
- `moodboard.html`
- `ui-kit.html`

Сторінки покривають основний MVP: головна, анкета, програми, напрями, методологія, партнери, контакти, privacy, AI-модуль, прототипи dashboard/Telegram/UI-kit/moodboard.

## 3. Відсутні сторінки

Критично відсутніх сторінок для базового MVP не знайдено: `index.html`, `application.html` і `privacy.html` існують.

Сторінки, які бажано додати перед ширшим запуском:

- `thank-you.html` або `success.html` — окрема сторінка після заповнення анкети, особливо після підключення CRM.
- `404.html` — кастомна сторінка помилки для GitHub Pages.
- `terms.html` — умови користування платформою.
- Окрема сторінка або блок з деталізованою згодою на обробку персональних даних, якщо анкета почне реально передавати дані в CRM.

## 4. Проблеми з навігацією

Перевірка локальних `href` і `src` не виявила битих внутрішніх посилань на файли або assets.

Перевірка локальних anchor-посилань також не виявила відсутніх `id` для `#...`-посилань.

Посилання на `ai.html` присутні як навігація до AI-модуля, але не знайдено ознак, що `ai.html` використовується як головна сторінка MVP. Головне MVP-посилання у footer/documentation веде на:

`https://barik2070.github.io/Restart-Ukraine-Women-Platform/index.html`

Особливість: на всіх HTML-сторінках `canonical` і `og:url` вказують на головну `index.html`. Це відповідає вимозі про головне посилання на MVP, але з SEO-погляду для підсторінок краще мати власні canonical/OG URL.

## 5. Проблеми з CTA

CTA на анкету перевірено через посилання на `application.html`.

Знайдено CTA/посилання на `application.html` на всіх HTML-сторінках:

- `index.html` — 7 посилань.
- `programs.html` — 6 посилань.
- `auto.html`, `business.html`, `agro.html` — по 4 посилання.
- `ai.html`, `methodology.html`, `privacy.html`, `track-auto.html`, `track-business.html`, `track-agro.html` — по 3 посилання.
- `about.html`, `application.html`, `contacts.html` — по 2 посилання.
- `dashboard.html`, `moodboard.html`, `partners.html`, `telegram.html`, `ui-kit.html` — по 1 посиланню.

Критичних проблем з CTA не знайдено: CTA “Пройти анкету” та споріднені CTA ведуть на `application.html`.

Окремо: частина CTA формується динамічно в `app.js` у dialog програм і також веде на `application.html`.

## 6. SEO / Open Graph / favicon

SEO meta tags:

- На всіх 19 HTML-сторінках є `meta name="description"`.
- На всіх 19 HTML-сторінках є `meta name="viewport"`.
- На всіх 19 HTML-сторінках є `link rel="canonical"`.

Open Graph / social:

- На всіх 19 HTML-сторінках є Open Graph tags.
- На всіх 19 HTML-сторінках є `twitter:card`.
- `og:image` вказує на `assets/brand-concept.png`.

Проблеми:

- Favicon відсутній: не знайдено `favicon.ico`, `.ico`, `site.webmanifest`, `apple-touch-icon*` або HTML-посилань `rel="icon"`.
- Canonical і `og:url` у всіх сторінок однакові та ведуть на `index.html`. Для MVP це допустимо, але для коректного SEO підсторінок варто зробити URL сторінок унікальними.
- У локальному PowerShell-виводі частина українського тексту відображалась як mojibake. Потрібна окрема перевірка кодування файлів у браузері/редакторі, щоб упевнитися, що live-версія всюди показує український текст коректно.

## 7. Privacy / consent

`privacy.html` існує.

Анкета в `application.html` має required-checkbox `name="consent"` для згоди на обробку персональних даних.

Також у формі є повідомлення, що дані в демонстраційному режимі не надсилаються і не зберігаються, а для запуску потрібне підключення CRM.

Проблеми/ризики:

- Текст згоди короткий і прив'язаний до майбутнього підключення захищеної системи. Перед реальним збором даних потрібен юридично вивірений текст: хто контролер даних, які дані збираються, мета, строк зберігання, права користувачки, контакти для відкликання згоди.
- Варто додати пряме посилання на `privacy.html` біля checkbox згоди в анкеті.

## 8. Мобільна версія

У `styles.css` є responsive rules:

- `@media(max-width:980px)` для навігації, грідів, dashboard/layout.
- `@media(max-width:640px)` для компактних мобільних екранів.
- `@media(prefers-reduced-motion:reduce)` для зменшення анімацій.

У `app.js` є логіка мобільного меню: toggle `.main-nav.open`, `aria-expanded`, закриття меню після кліку по навігаційному посиланню.

Критичних статичних ознак зламаної мобільної версії не знайдено.

Ризики:

- Не проводилась візуальна перевірка через Playwright/screenshot у мобільних viewport у межах цього аудиту.
- Частина сторінок має inline `style` attributes (`ai.html`, `application.html`, `dashboard.html`, `telegram.html`, `ui-kit.html`). Це не обов'язково ламає мобільну версію, але ускладнює підтримку.

## 9. Критичні правки

1. Додати favicon і підключити його в усіх HTML-сторінках.
2. Перед реальним збором заявок оновити consent: повний юридичний текст + посилання на `privacy.html` біля checkbox.
3. Перевірити локальний Git-стан: `.git` присутній, але `git status` не працює з поточного каталогу.
4. Провести браузерну перевірку кодування українського тексту на live GitHub Pages і локально.

## 10. Бажані правки

1. Додати `404.html` для GitHub Pages.
2. Додати `thank-you.html` або redirect/стан успішної відправки після майбутньої CRM-інтеграції.
3. Додати `terms.html`.
4. Зробити canonical і `og:url` унікальними для кожної публічної сторінки.
5. Зменшити inline styles у прототипних сторінках і перенести їх у `styles.css`.
6. Провести mobile QA у viewport 360px, 390px, 768px, 1024px.
7. Додати просту deployment-документацію: source branch/folder GitHub Pages, очікуваний production URL, checklist перед публікацією.

## 11. Рекомендований план наступних дій

1. Додати favicon-пакет: `favicon.ico`, PNG icons, `site.webmanifest`, `apple-touch-icon`.
2. Оновити consent-блок в анкеті та додати посилання на `privacy.html`.
3. Додати `404.html` і `thank-you.html`.
4. Вирівняти SEO для підсторінок: canonical, `og:url`, titles/descriptions для кожної сторінки.
5. Запустити мобільний візуальний QA і виправити можливі overlap/overflow проблеми.
6. Перевірити локальний Git checkout або повторно клонувати репозиторій у чисту папку.
7. Після правок повторити аудит внутрішніх посилань, CTA, privacy/consent і GitHub Pages deployment.
