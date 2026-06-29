# Restart Ukraine Women Platform — CRM

Цей документ описує структуру Google Sheets workbook для MVP Restart Ukraine Women Platform. Таблиця призначена для обліку заявок учасниць, партнерів, донорів, консультацій, навчального прогресу, персональних планів та базового dashboard.

Реальну Google Sheet у межах цього документа створювати не потрібно. API keys, токени доступу, Apps Script URL або інші секрети не додаються.

Placeholder для майбутнього Google Apps Script endpoint:

```text
GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
```

## Workbook

Назва workbook:

```text
Restart Ukraine Women Platform — CRM
```

Рекомендовані вкладки:

- Participants
- Partners
- Donors
- Consultations
- Learning Progress
- Personal Plans
- Dashboard

## 1. Participants

Вкладка для зберігання заявок, профілю учасниць, статусу відбору та рекомендацій щодо треку.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор учасниці або заявки. |
| Created At | Дата та час створення запису. |
| Name | Ім'я учасниці. |
| Email | Email для комунікації. |
| Phone / Telegram | Телефон або Telegram. |
| Country | Поточна країна перебування. |
| Plans to Return | Чи планує повернення в Україну. |
| Return Timeline | Орієнтовний термін повернення. |
| Return Region | Область або громада повернення. |
| Professional Experience | Професійний досвід. |
| Main Need | Основна потреба учасниці. |
| Interested Track | Трек, який цікавить учасницю. |
| Digital Skills Level | Рівень цифрових навичок. |
| AI Experience | Досвід використання AI-інструментів. |
| Needs Consultation | Чи потрібна індивідуальна консультація. |
| Recommended Track | Рекомендований трек після первинного аналізу. |
| Status | CRM-статус учасниці. |
| Assigned Mentor | Закріплений ментор або консультант. |
| Notes | Внутрішні нотатки команди. |
| Consent | Підтвердження згоди на обробку даних. |

Рекомендовані значення для `Status`:

- new
- contacted
- selected
- waitlist
- active
- completed
- not eligible
- withdrawn

## 2. Partners

Вкладка для організацій, роботодавців, експертів, медіа, громад та інших партнерів.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор партнера. |
| Organization | Назва організації. |
| Type | Тип партнера. |
| Country | Країна. |
| Contact Person | Контактна особа. |
| Email | Email контактної особи. |
| Phone | Телефон. |
| Website | Сайт або сторінка організації. |
| Interest | Потенційна роль або інтерес до проєкту. |
| Status | Поточний статус комунікації. |
| Next Step | Наступна дія. |
| Last Contact Date | Дата останнього контакту. |
| Notes | Нотатки. |

Значення для `Type`:

- donor
- NGO
- employer
- community
- EU partner
- expert
- media
- other

Рекомендовані значення для `Status`:

- prospect
- contacted
- meeting scheduled
- active
- paused
- declined

## 3. Donors

Вкладка для донорських програм, грантових можливостей та потенційного фінансування.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор донорської можливості. |
| Donor Name | Назва донора або фонду. |
| Program | Назва програми або конкурсу. |
| Country / Region | Країна або регіон фокусу. |
| Funding Range | Діапазон фінансування. |
| Deadline | Дедлайн подачі. |
| Priorities | Пріоритети програми. |
| Fit Score | Оцінка відповідності проєкту, наприклад від 1 до 5. |
| Contact | Контакт або посилання на програму. |
| Status | Поточний статус роботи з можливістю. |
| Documents Sent | Які документи вже надіслано. |
| Next Action | Наступна дія. |
| Notes | Нотатки. |

Рекомендовані значення для `Status`:

- research
- relevant
- preparing
- submitted
- shortlisted
- awarded
- rejected
- closed

## 4. Consultations

Вкладка для фіксації індивідуальних консультацій учасниць.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор консультації. |
| Participant ID | Посилання на `Participants.ID`. |
| Date | Дата консультації. |
| Consultant | Консультант або експерт. |
| Type | Тип консультації. |
| Status | Статус консультації. |
| Result | Результат консультації. |
| Next Step | Наступний крок. |
| Notes | Нотатки. |

Значення для `Type`:

- career
- business
- agro
- AI
- psychological
- legal
- safety

Рекомендовані значення для `Status`:

- planned
- completed
- rescheduled
- cancelled
- no show

## 5. Learning Progress

Вкладка для відстеження проходження навчальних треків і модулів.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор запису прогресу. |
| Participant ID | Посилання на `Participants.ID`. |
| Track | Навчальний трек. |
| Module | Назва або номер модуля. |
| Status | Статус проходження модуля. |
| Completion Date | Дата завершення. |
| Homework | Статус або посилання на домашнє завдання. |
| Mentor Comment | Коментар ментора. |

Рекомендовані значення для `Status`:

- not started
- in progress
- completed
- needs support

## 6. Personal Plans

Вкладка для персональних 30/60/90-денних планів учасниць.

Колонки:

| Column | Description |
| --- | --- |
| ID | Унікальний ідентифікатор персонального плану. |
| Participant ID | Посилання на `Participants.ID`. |
| Track | Трек учасниці. |
| 30 Day Goal | Ціль на 30 днів. |
| 60 Day Goal | Ціль на 60 днів. |
| 90 Day Goal | Ціль на 90 днів. |
| First Economic Action | Перша економічна дія. |
| Risks | Основні ризики. |
| Support Needed | Необхідна підтримка. |
| Status | Статус плану. |

Рекомендовані значення для `Status`:

- draft
- approved
- active
- completed
- needs revision

## 7. Dashboard

Вкладка `Dashboard` має збирати ключові показники з інших вкладок. Рекомендовано розділити dashboard на блоки: загальні KPI, розподіл учасниць, консультації, навчальний прогрес, персональні плани та mini-grant candidates.

KPI:

- total applications;
- selected participants;
- participants by country;
- participants by track;
- participants by status;
- consultations completed;
- modules completed;
- personal plans created;
- first economic actions;
- potential mini-grant candidates.

## Приклади Google Sheets формул

Формули нижче припускають, що у вкладках використовується структура колонок із цього документа, а дані починаються з другого рядка.

### Total participants

Кількість усіх записів учасниць:

```text
=COUNTA(Participants!A2:A)
```

### Count by track

Кількість учасниць за конкретним треком, де `A2` на Dashboard містить назву треку:

```text
=COUNTIF(Participants!M2:M,A2)
```

Кількість учасниць за рекомендованим треком:

```text
=COUNTIF(Participants!P2:P,A2)
```

### Count by country

Кількість учасниць за країною, де `A2` на Dashboard містить назву країни:

```text
=COUNTIF(Participants!F2:F,A2)
```

### Count by status

Кількість учасниць за статусом, де `A2` на Dashboard містить статус:

```text
=COUNTIF(Participants!Q2:Q,A2)
```

### Completion rate

Частка завершених навчальних модулів:

```text
=IFERROR(COUNTIF('Learning Progress'!E2:E,"completed")/COUNTA('Learning Progress'!A2:A),0)
```

Формат клітинки: Percent.

### Consultations count

Кількість завершених консультацій:

```text
=COUNTIF(Consultations!F2:F,"completed")
```

Кількість консультацій за типом, де `A2` на Dashboard містить тип консультації:

```text
=COUNTIF(Consultations!E2:E,A2)
```

### Personal plans count

Кількість створених персональних планів:

```text
=COUNTA('Personal Plans'!A2:A)
```

Кількість затверджених або активних персональних планів:

```text
=COUNTIF('Personal Plans'!J2:J,"approved")+COUNTIF('Personal Plans'!J2:J,"active")
```

### Selected participants

Кількість відібраних учасниць:

```text
=COUNTIF(Participants!Q2:Q,"selected")
```

### Modules completed

Кількість завершених модулів:

```text
=COUNTIF('Learning Progress'!E2:E,"completed")
```

### First economic actions

Кількість персональних планів, у яких заповнено першу економічну дію:

```text
=COUNTIF('Personal Plans'!G2:G,"<>")
```

### Potential mini-grant candidates

Приклад підрахунку потенційних кандидаток на мінігрант: учасниця має активний або завершений персональний план і заповнену першу економічну дію.

```text
=COUNTIFS('Personal Plans'!J2:J,"active",'Personal Plans'!G2:G,"<>")+COUNTIFS('Personal Plans'!J2:J,"completed",'Personal Plans'!G2:G,"<>")
```

## Рекомендації щодо роботи з workbook

- Використовувати `ID` як стабільний ключ між вкладками.
- Для колонок `Type`, `Status`, `Track`, `Country` бажано налаштувати data validation.
- Не зберігати в таблиці паролі, API keys, приватні токени або зайві персональні дані.
- Доступ до workbook надавати лише членам команди, яким потрібна робота з CRM.
- Перед інтеграцією з формами або Apps Script створити копію таблиці для тестування.
