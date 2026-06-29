# Notion workspace для Restart Ukraine Women Platform

Цей документ описує структуру Notion workspace для ручного створення штабу проєкту Restart Ukraine Women Platform. Notion API не використовується, токени або інтеграційні ключі не потрібні.

Workspace має бути єдиним операційним центром для команди: тут зберігаються донорські матеріали, продуктова робота, контент, партнерські контакти, заявки учасниць, рішення зустрічей і грантовий pipeline. GitHub залишається тільки для коду, технічної документації та версій MVP.

## Рекомендована верхня структура

- `Project Home`
- `Donor Materials`
- `Product Backlog`
- `Content Base`
- `Partner CRM`
- `Participant CRM`
- `Meetings & Decisions`
- `Grant Pipeline`

## 1. Project Home

### Призначення сторінки

Головна сторінка штабу проєкту. Вона має швидко відповідати на питання: що ми будуємо, у якому стані MVP, хто за що відповідає, де ключові документи та що команда робить прямо зараз.

### Рекомендований тип Notion database

Звичайна сторінка з блоками, linked views на ключові бази та невеликою таблицею статусу. Для блоку "наступні дії" можна використати linked view з `Product Backlog`, відфільтрований за статусами `Planned` і `In progress`.

### Таблиця полів / блоків

| Поле / блок | Тип у Notion | Опис |
|---|---|---|
| Місія | Text / Callout | Коротке формулювання місії платформи. |
| MVP link | URL | Посилання на поточну версію MVP. |
| Статус | Select | Загальний статус: `Discovery`, `MVP`, `Pilot`, `Fundraising`, `Scaling`. |
| Ключові документи | Links / Relation | Посилання на презентацію, concept note, budget, roadmap, GitHub. |
| Відповідальні | People / Text | Власники напрямів: продукт, контент, донори, партнери, технічна частина. |
| Поточний фокус | Text / Callout | 1-3 пріоритети на поточний тиждень або спринт. |
| Наступні дії | Linked database | Витяг із `Product Backlog` або короткий список дій. |

### Приклади записів / блоків

| Блок | Приклад |
|---|---|
| Місія | Допомогти українкам, які повертаються або адаптуються після вимушеного переміщення, швидше знайти професійний трек, підтримку та практичні наступні кроки. |
| Статус | `MVP`: публічна версія сайту готова для демонстрації партнерам і донорам. |
| Поточний фокус | Підготувати donor room, зібрати перші партнерські контакти, описати процес обробки заявок учасниць. |

## 2. Donor Materials

### Призначення сторінки

Центральне місце для всіх матеріалів, які використовуються у комунікації з донорами, фондами, EU partners та стратегічними партнерами.

### Рекомендований тип Notion database

Table database з файлами, посиланнями, власниками та статусами готовності. Додатково варто створити views: `Ready to send`, `Needs update`, `By donor type`.

### Таблиця полів

| Поле / блок | Тип у Notion | Опис |
|---|---|---|
| Concept note | Files & media / URL | Файл або посилання на короткий опис проєкту. |
| Презентація | Files & media / URL | Pitch deck або Google Slides. |
| One-pager | Files & media / URL | Односторінковий документ для швидкого ознайомлення. |
| Budget | Files & media / URL | Бюджет або фінансова модель. |
| Листи до донорів | Files & media / Text | Шаблони outreach-листів. |
| FAQ для донорів | Text / Page | Відповіді на типові питання. |
| MVP link | URL | Посилання на MVP. |
| Status | Select | `Draft`, `Review`, `Ready`, `Needs update`. |
| Owner | Person / Text | Відповідальна людина. |
| Last update | Date | Дата останнього оновлення. |

### Приклади записів

| Матеріал | Status | Owner | Last update | Notes |
|---|---|---|---|---|
| Concept note v1 | `Review` | Donor lead | 2026-06-29 | Потрібно додати impact metrics і короткий бюджет. |
| One-pager for EU partners | `Draft` | Partnerships lead | 2026-06-29 | Фокус на адаптації, працевлаштуванні та поверненні. |
| MVP demo link | `Ready` | Product lead | 2026-06-29 | Використовувати в усіх outreach-листах. |

## 3. Product Backlog

### Призначення сторінки

Єдина база задач для продукту, контенту, операційної роботи та підготовки до fundraising. Усі нові ідеї спочатку потрапляють сюди, а потім пріоритизуються.

### Рекомендований тип Notion database

Table database з додатковими views: `Board by status`, `High priority`, `This week`, `Blocked`.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Task | Title | Назва задачі. |
| Category | Select | `Product`, `Content`, `Donor`, `Partner`, `Research`, `Technical`, `Operations`. |
| Priority | Select | `High`, `Medium`, `Low`. |
| Status | Select | `Inbox`, `Planned`, `In progress`, `Review`, `Done`, `Blocked`. |
| Owner | Person / Text | Відповідальний. |
| Deadline | Date | Дедлайн або цільова дата. |
| Notes | Text | Контекст, посилання, критерії готовності. |

### Приклади записів

| Task | Category | Priority | Status | Owner | Deadline | Notes |
|---|---|---|---|---|---|---|
| Оновити donor FAQ | `Donor` | `High` | `Planned` | Donor lead | 2026-07-03 | Додати питання про sustainability та impact. |
| Додати приклади 30-90 day plans | `Content` | `Medium` | `Inbox` | Content lead | 2026-07-08 | Потрібні приклади для auto, agro, AI/business треків. |
| Перевірити мобільну версію MVP | `Technical` | `High` | `In progress` | Product lead | 2026-07-01 | Зафіксувати проблеми в GitHub або технічному backlog. |

## 4. Content Base

### Призначення сторінки

База всього текстового та структурного контенту платформи: сторінки MVP, секції, методологія, FAQ, тексти для заявок, donor copy та матеріали для учасниць.

### Рекомендований тип Notion database

Table database або Board by status. Для редакційної роботи зручно мати views: `Website content`, `Donor content`, `Needs review`, `Published`.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Page / section | Title | Назва сторінки або секції. |
| Content type | Select | `Website`, `Donor`, `FAQ`, `Email`, `Methodology`, `CRM template`. |
| Status | Select | `Idea`, `Draft`, `Review`, `Approved`, `Published`, `Needs update`. |
| Owner | Person / Text | Відповідальний за текст. |
| Last update | Date | Дата останньої зміни. |
| Text draft | Text / Page body | Чернетка тексту або посилання на документ. |
| Notes | Text | Коментарі, правки, джерела. |

### Приклади записів

| Page / section | Content type | Status | Owner | Last update | Notes |
|---|---|---|---|---|---|
| Головна сторінка MVP | `Website` | `Published` | Content lead | 2026-06-29 | Зберігати актуальну версію value proposition. |
| FAQ для учасниць | `FAQ` | `Draft` | Program lead | 2026-06-29 | Додати питання про консультацію та менторство. |
| Donor outreach email | `Email` | `Review` | Donor lead | 2026-06-29 | Підготувати коротку та розширену версії. |

## 5. Partner CRM

### Призначення сторінки

База організацій і контактів, з якими команда будує партнерства: донори, NGO, роботодавці, спільноти, EU partners, експерти та потенційні ментори.

### Рекомендований тип Notion database

Table database з views: `By type`, `By country`, `Active conversations`, `Follow-up this week`.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Organization | Title | Назва організації. |
| Type | Select | `Donor`, `NGO`, `Employer`, `Community`, `EU partner`, `Expert`. |
| Country | Select / Text | Країна організації або основного контакту. |
| Contact person | Text | Ім'я контактної особи. |
| Email | Email | Контактний email. |
| Website | URL | Сайт організації. |
| Interest | Multi-select / Text | Потенційний інтерес: funding, mentors, jobs, outreach, methodology. |
| Status | Select | `Prospect`, `Contacted`, `Meeting planned`, `Active`, `Paused`, `Rejected`. |
| Next step | Text | Наступна дія. |
| Last contact date | Date | Дата останнього контакту. |
| Notes | Text | Контекст, домовленості, історія контакту. |

### Приклади записів

| Organization | Type | Country | Contact person | Interest | Status | Next step | Last contact date |
|---|---|---|---|---|---|---|---|
| EU Skills Fund | `Donor` | Belgium | TBD | Funding, EU scaling | `Prospect` | Знайти релевантну програму та контакт | 2026-06-29 |
| Ukrainian Women Network | `Community` | Poland | TBD | Outreach, participants | `Contacted` | Надіслати one-pager | 2026-06-29 |
| Auto Service Academy | `Employer` | Ukraine | TBD | Jobs, mentors | `Meeting planned` | Узгодити 30-хвилинну зустріч | 2026-07-02 |

## 6. Participant CRM

### Призначення сторінки

База заявок і супроводу учасниць. Тут команда бачить профіль учасниці, її часовий горизонт повернення або адаптації, рекомендований трек, потребу в консультації та стан 30-90 day plan.

### Рекомендований тип Notion database

Table database з views: `New applications`, `Needs consultation`, `By selected track`, `Active 30-90 day plans`. Для персональних даних потрібно обмежити доступ лише команді, яка працює з учасницями.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Participant ID | Title | Унікальний ID замість публічного використання повного імені. |
| Name | Text | Ім'я учасниці, якщо зберігання дозволене політикою проєкту. |
| Country | Select / Text | Поточна країна перебування. |
| Return timeline | Select | `Already in Ukraine`, `0-3 months`, `3-6 months`, `6+ months`, `Not sure`. |
| Selected track | Select | Трек, який обрала учасниця. |
| Recommended track | Select | Трек, рекомендований після аналізу заявки. |
| Status | Select | `New`, `Review`, `Consultation needed`, `Matched`, `Active`, `Completed`, `Paused`. |
| Consultation needed | Checkbox | Чи потрібна індивідуальна консультація. |
| Assigned mentor | Person / Text | Ментор або консультант. |
| 30-90 day plan status | Select | `Not started`, `Draft`, `Approved`, `In progress`, `Completed`. |
| Notes | Text | Коментарі, ризики, наступні кроки. |

### Приклади записів

| Participant ID | Name | Country | Return timeline | Selected track | Recommended track | Status | Consultation needed | 30-90 day plan status |
|---|---|---|---|---|---|---|---|---|
| RUWP-001 | Олена | Germany | `3-6 months` | Auto | Auto | `Consultation needed` | Yes | `Not started` |
| RUWP-002 | Марія | Poland | `0-3 months` | Business | Business | `Review` | No | `Draft` |
| RUWP-003 | Ірина | Ukraine | `Already in Ukraine` | Agro | Agro | `Active` | Yes | `In progress` |

## 7. Meetings & Decisions

### Призначення сторінки

Журнал зустрічей, рішень і action items. Сторінка потрібна, щоб команда не втрачала домовленості та могла швидко відновити контекст.

### Рекомендований тип Notion database

Table database з views: `Recent decisions`, `Open action items`, `By owner`. Кожен запис може бути окремою сторінкою з нотатками зустрічі.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Date | Date | Дата зустрічі або рішення. |
| Meeting topic | Title | Тема зустрічі. |
| Participants | People / Text | Учасники. |
| Decisions | Text | Зафіксовані рішення. |
| Action items | Text / Relation | Наступні дії, за потреби пов'язані з `Product Backlog`. |
| Owner | Person / Text | Власник виконання. |
| Deadline | Date | Дедлайн для action items. |

### Приклади записів

| Date | Meeting topic | Participants | Decisions | Action items | Owner | Deadline |
|---|---|---|---|---|---|---|
| 2026-06-29 | MVP readiness review | Product, Content | MVP можна використовувати для donor demo. | Оновити donor materials і FAQ. | Donor lead | 2026-07-03 |
| 2026-07-01 | Partner outreach planning | Partnerships, Program | Перший фокус: NGO та community partners у Польщі й Німеччині. | Створити список 20 контактів. | Partnerships lead | 2026-07-05 |
| 2026-07-03 | Participant flow review | Program, Product | Заявки мають потрапляти в Participant CRM з ручною перевіркою. | Описати triage-процес. | Program lead | 2026-07-06 |

## 8. Grant Pipeline

### Призначення сторінки

Операційна база для пошуку, оцінки та подання грантових можливостей. Вона допомагає бачити дедлайни, fit score, потрібні документи й наступні дії.

### Рекомендований тип Notion database

Table database з views: `Upcoming deadlines`, `High fit`, `In preparation`, `Submitted`, `Rejected / archived`.

### Таблиця полів

| Поле | Тип у Notion | Опис |
|---|---|---|
| Donor | Title / Relation | Назва донора; можна пов'язати з `Partner CRM`. |
| Program | Text | Назва грантової програми. |
| Deadline | Date | Кінцевий термін подання. |
| Funding amount | Number / Text | Доступна або запитувана сума. |
| Fit score | Number / Select | Оцінка відповідності, наприклад 1-5. |
| Status | Select | `Research`, `Fit check`, `Preparing`, `Submitted`, `Interview`, `Won`, `Rejected`, `Archived`. |
| Required documents | Multi-select / Text | Concept note, budget, pitch deck, letters, registration docs. |
| Next action | Text | Найближча дія. |
| Owner | Person / Text | Відповідальний. |

### Приклади записів

| Donor | Program | Deadline | Funding amount | Fit score | Status | Required documents | Next action | Owner |
|---|---|---|---|---|---|---|---|---|
| EU Skills Fund | Women Return to Work Pilot | 2026-08-15 | EUR 50,000-100,000 | 5 | `Fit check` | Concept note, budget, pitch deck | Перевірити eligibility criteria | Donor lead |
| Local Integration Foundation | Community Resilience Grants | 2026-07-30 | EUR 20,000 | 4 | `Preparing` | One-pager, budget, partner letter | Підготувати budget narrative | Finance lead |
| Corporate CSR Partner | Employment Pathways Support | 2026-09-01 | TBD | 3 | `Research` | Pitch deck, MVP link | Знайти контакт CSR manager | Partnerships lead |

## Як працює система

1. Ідея або задача потрапляє в `Product Backlog`.
   Усі нові ініціативи, правки, ризики та операційні задачі спочатку додаються як `Inbox`. Після короткого triage команда визначає категорію, пріоритет, власника, дедлайн і статус.

2. Контент ведеться в `Content Base`.
   Усі тексти для MVP, donor materials, FAQ, листів і методології мають окремі записи. Коли контент затверджено, відповідальна людина переносить його в сайт, презентацію або донорський документ.

3. Донори ведуться в `Grant Pipeline` і `Partner CRM`.
   `Grant Pipeline` відповідає за конкретні грантові можливості, дедлайни та документи. `Partner CRM` зберігає організації, контактних осіб, історію комунікації та наступні кроки.

4. Заявки учасниць потрапляють у `Participant CRM`.
   Кожна заявка отримує `Participant ID`, статус і первинний трек. Якщо потрібна консультація, вмикається `Consultation needed`, призначається ментор або консультант і створюється 30-90 day plan.

5. Рішення фіксуються в `Meetings & Decisions`.
   Після кожної важливої зустрічі команда записує дату, тему, учасників, рішення, action items, власника й дедлайн. Якщо action item потребує виконання, він також дублюється або пов'язується із `Product Backlog`.

6. GitHub використовується тільки для коду і технічної документації.
   GitHub не замінює Notion як операційний штаб. У GitHub зберігаються HTML/CSS/JS, технічні README, audit/handoff документи та issues, пов'язані з розробкою. Донорська робота, CRM, зустрічі та контент-план ведуться в Notion.

## Рекомендації для ручного створення

1. Створити новий Notion workspace або окремий top-level page `Restart Ukraine Women Platform HQ`.
2. Додати в ньому сторінки зі списку "Рекомендована верхня структура".
3. Для кожної database створити поля з відповідної таблиці.
4. Додати приклади записів, щоб команда одразу бачила очікуваний формат.
5. Налаштувати views для щоденної роботи: `This week`, `Needs review`, `Upcoming deadlines`, `Needs consultation`.
6. Обмежити доступ до `Participant CRM`, якщо там зберігаються персональні дані.
7. Раз на тиждень проводити короткий review: оновити статуси, закрити завершені задачі, перевірити дедлайни грантів і зафіксувати нові рішення.
