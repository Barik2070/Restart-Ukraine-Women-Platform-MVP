# План інтеграції `application.html` з Google Sheets

## Поточний стан

`application.html` містить трикрокову HTML-анкету з демо-поведінкою. Зараз форма не надсилає дані назовні: у `app.js` submit-подія зупиняється через `preventDefault()`, після чого користувач бачить локальне повідомлення про демо-результат. У тексті форми також прямо зазначено, що дані не надсилаються і не зберігаються до підключення CRM.

Поточні `name`-атрибути у формі коротші за майбутні CRM-поля:

| CRM-поле | Поточне поле в `application.html` |
| --- | --- |
| `name` | `name` |
| `email` | `email` |
| `phoneTelegram` | `phone` |
| `country` | `location` |
| `plansToReturn` | `return_plan` |
| `returnTimeline` | `return_time` |
| `returnRegion` | `region` |
| `professionalExperience` | `experience` |
| `mainNeed` | `need` |
| `interestedTrack` | `track` |
| `digitalSkillsLevel` | `digital` |
| `aiExperience` | `ai_experience` |
| `needsConsultation` | `consultation` |
| `consent` | `consent` |

На етапі інтеграції можна або перейменувати `name`-атрибути у HTML під CRM-поля, або залишити поточну розмітку й зробити мапінг у JavaScript.

## Поля форми

Цільовий набір полів для запису у вкладку `Participants`:

- `name`;
- `email`;
- `phoneTelegram`;
- `country`;
- `plansToReturn`;
- `returnTimeline`;
- `returnRegion`;
- `professionalExperience`;
- `mainNeed`;
- `interestedTrack`;
- `digitalSkillsLevel`;
- `aiExperience`;
- `needsConsultation`;
- `consent`.

Додатково під час запису потрібно додавати:

- `timestamp` - дата й час надсилання;
- `recommendedTrack` - рекомендований маршрут;
- `status` - початковий CRM-статус, наприклад `new`.

## Варіант A - простий: Google Forms

### Схема

1. Створити Google Form з тими самими питаннями, що й анкета на сайті.
2. Підключити відповіді Google Form до Google Sheets.
3. На `application.html` додати кнопку на зовнішню форму або вставити Google Form через `iframe`.
4. Дані автоматично потрапляють у Google Sheets без власного backend і без Apps Script.

### Переваги

- Найшвидший запуск: не потрібно писати код інтеграції.
- Google Forms сам обробляє валідацію, доступність, мобільний вигляд і запис відповідей.
- Відповіді автоматично зберігаються в Google Sheets.
- Менше технічних ризиків для першої перевірки попиту або донорської демонстрації.

### Недоліки

- Користувацький досвід відрізняється від дизайну MVP.
- `iframe` може виглядати менш цілісно на мобільних пристроях.
- Складніше показати власний success message у стилі сайту.
- Базову логіку `Recommended Track` доведеться робити окремо: формулами в Google Sheets, Apps Script після submit або вручну.
- Менше контролю над аналітикою, станами кнопок і UX-переходами.

### Коли використовувати

Варіант A варто використовувати, якщо потрібно дуже швидко запустити збір заявок, перевірити структуру анкети або провести перший пілот без розробки. Це добрий тимчасовий варіант до повної інтеграції HTML-форми.

## Варіант B - рекомендований для MVP: HTML-форма + Google Apps Script

### Схема

1. Залишити анкету всередині `application.html`.
2. Створити Google Sheet з вкладкою `Participants`.
3. Додати Google Apps Script Web App, який приймає `POST`-запит.
4. JavaScript на сайті збирає дані форми, визначає `recommendedTrack` і надсилає JSON на endpoint:

```text
GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
```

5. Apps Script записує рядок у `Participants` і повертає JSON-відповідь.
6. Сайт показує success message, error message і loading state.

### Переваги

- Форма залишається частиною UX і дизайну MVP.
- Можна контролювати тексти, валідацію, стани завантаження і повідомлення після submit.
- `recommendedTrack` можна показати користувачці одразу після надсилання.
- Google Sheets лишається простим CRM-сховищем без окремого backend.
- Інтеграцію легко демонструвати партнерам: сайт виглядає як цілісний продукт, а команда отримує структуровані заявки.

### Недоліки

- Потрібне налаштування Apps Script і deployment як Web App.
- Потрібно уважно перевірити CORS/режим запиту, права доступу і формат відповіді.
- Google Apps Script має квоти й не є повноцінним production-backend.
- URL Web App не має вважатися секретом, тому не можна покладатися лише на його прихованість.

### Ризики

- Спам-заявки, якщо endpoint публічний. Для MVP варто додати мінімальний honeypot, обмеження частоти або ручну модерацію.
- Помилки мапінгу полів між HTML, JS і колонками Google Sheets.
- Зміни структури вкладки `Participants` можуть зламати порядок запису.
- Персональні дані потрібно обробляти лише після явної згоди `consent`.
- Якщо Apps Script повертає неочікувану відповідь або Google тимчасово блокує запит, користувачка має побачити зрозуміле повідомлення про помилку.

### Як налаштувати

1. Створити Google Sheet для CRM.
2. Додати вкладку `Participants`.
3. У першому рядку створити колонки:

| Колонка | Назва |
| --- | --- |
| A | Timestamp |
| B | Name |
| C | Email |
| D | Phone / Telegram |
| E | Country |
| F | Plans to Return |
| G | Return Timeline |
| H | Return Region |
| I | Professional Experience |
| J | Main Need |
| K | Interested Track |
| L | Digital Skills Level |
| M | AI Experience |
| N | Needs Consultation |
| O | Recommended Track |
| P | Consent |
| Q | Status |

4. У Google Sheet відкрити `Extensions` -> `Apps Script`.
5. Додати код `doPost(e)` з прикладу нижче.
6. Натиснути `Deploy` -> `New deployment` -> `Web app`.
7. Для MVP обрати виконання від імені власника таблиці, доступ - за потребою пілоту.
8. Скопіювати Web App URL.
9. У майбутній зміні `application.html`/`app.js` замінити placeholder:

```text
GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
```

10. Перевірити тестову заявку, коректність колонок, `recommendedTrack`, `consent` і success/error стани.

## Логіка `Recommended Track`

Базове правило для MVP:

- якщо `interestedTrack = auto` або `mainNeed` містить `робота` -> `Автомобільний сектор`;
- якщо `interestedTrack = business` або `mainNeed` містить `власна справа` -> `Мікробізнес і самозайнятість`;
- якщо `interestedTrack = agro` або `mainNeed` містить `агро` -> `Мале агровиробництво`;
- якщо `interestedTrack` або `mainNeed` містить `поки не знаю` -> `Діагностичний маршрут`.

У поточному `application.html` значення треків зберігаються як українські тексти (`Автомобільний сектор`, `Мікробізнес`, `Мале агровиробництво`, `Поки не знаю`). Тому в JS бажано або додати `value="auto|business|agro|unknown"` до `option`, або підтримати обидва формати: технічні value й українські текстові значення.

## Приклад Google Apps Script

```javascript
const PARTICIPANTS_SHEET_NAME = 'Participants';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');

    if (!payload.consent) {
      return jsonResponse({
        ok: false,
        error: 'CONSENT_REQUIRED',
        message: 'Потрібна згода на обробку персональних даних.'
      });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(PARTICIPANTS_SHEET_NAME);

    if (!sheet) {
      return jsonResponse({
        ok: false,
        error: 'SHEET_NOT_FOUND',
        message: 'Вкладку Participants не знайдено.'
      });
    }

    const timestamp = new Date();
    const recommendedTrack = payload.recommendedTrack || getRecommendedTrack(payload);

    sheet.appendRow([
      timestamp,
      payload.name || '',
      payload.email || '',
      payload.phoneTelegram || '',
      payload.country || '',
      payload.plansToReturn || '',
      payload.returnTimeline || '',
      payload.returnRegion || '',
      payload.professionalExperience || '',
      payload.mainNeed || '',
      payload.interestedTrack || '',
      payload.digitalSkillsLevel || '',
      payload.aiExperience || '',
      payload.needsConsultation || '',
      recommendedTrack,
      payload.consent === true ? 'yes' : 'no',
      'new'
    ]);

    return jsonResponse({
      ok: true,
      timestamp: timestamp.toISOString(),
      recommendedTrack: recommendedTrack
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: 'SERVER_ERROR',
      message: error.message
    });
  }
}

function getRecommendedTrack(payload) {
  const interestedTrack = normalize(payload.interestedTrack);
  const mainNeed = normalize(payload.mainNeed);

  if (
    interestedTrack === 'auto' ||
    interestedTrack.includes('автомоб') ||
    mainNeed.includes('робота')
  ) {
    return 'Автомобільний сектор';
  }

  if (
    interestedTrack === 'business' ||
    interestedTrack.includes('мікробізнес') ||
    interestedTrack.includes('бізнес') ||
    mainNeed.includes('власна справа')
  ) {
    return 'Мікробізнес і самозайнятість';
  }

  if (
    interestedTrack === 'agro' ||
    interestedTrack.includes('агро') ||
    mainNeed.includes('агро')
  ) {
    return 'Мале агровиробництво';
  }

  if (
    interestedTrack === 'unknown' ||
    interestedTrack.includes('поки не знаю') ||
    mainNeed.includes('поки не знаю')
  ) {
    return 'Діагностичний маршрут';
  }

  return 'Діагностичний маршрут';
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Приклад JS-коду для `application.html`

Цей приклад не потрібно підключати зараз. Він показує майбутню заміну демо-submit логіки у `app.js`.

```javascript
const GOOGLE_APPS_SCRIPT_ENDPOINT = 'GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

const applicationForm = document.querySelector('.application-form');

if (applicationForm) {
  applicationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!applicationForm.checkValidity()) {
      applicationForm.reportValidity();
      return;
    }

    const submitButton = applicationForm.querySelector('[type="submit"]');
    const originalButtonText = submitButton.textContent;

    try {
      submitButton.disabled = true;
      submitButton.textContent = 'Надсилаємо...';
      setFormMessage('');

      const payload = collectApplicationData(applicationForm);
      payload.recommendedTrack = getRecommendedTrack(payload);

      const response = await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || 'Не вдалося надіслати анкету.');
      }

      showSuccessMessage(applicationForm, result.recommendedTrack);
    } catch (error) {
      setFormMessage(
        error.message || 'Сталася помилка. Спробуйте ще раз або напишіть нам напряму.',
        'error'
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}

function collectApplicationData(form) {
  const data = new FormData(form);

  return {
    name: data.get('name') || '',
    email: data.get('email') || '',
    phoneTelegram: data.get('phone') || '',
    country: data.get('location') || '',
    plansToReturn: data.get('return_plan') || '',
    returnTimeline: data.get('return_time') || '',
    returnRegion: data.get('region') || '',
    professionalExperience: data.get('experience') || '',
    mainNeed: data.get('need') || '',
    interestedTrack: data.get('track') || '',
    digitalSkillsLevel: data.get('digital') || '',
    aiExperience: data.get('ai_experience') || '',
    needsConsultation: data.get('consultation') || '',
    consent: data.get('consent') === 'on'
  };
}

function getRecommendedTrack(payload) {
  const interestedTrack = normalize(payload.interestedTrack);
  const mainNeed = normalize(payload.mainNeed);

  if (
    interestedTrack === 'auto' ||
    interestedTrack.includes('автомоб') ||
    mainNeed.includes('робота')
  ) {
    return 'Автомобільний сектор';
  }

  if (
    interestedTrack === 'business' ||
    interestedTrack.includes('мікробізнес') ||
    interestedTrack.includes('бізнес') ||
    mainNeed.includes('власна справа')
  ) {
    return 'Мікробізнес і самозайнятість';
  }

  if (
    interestedTrack === 'agro' ||
    interestedTrack.includes('агро') ||
    mainNeed.includes('агро')
  ) {
    return 'Мале агровиробництво';
  }

  if (
    interestedTrack === 'unknown' ||
    interestedTrack.includes('поки не знаю') ||
    mainNeed.includes('поки не знаю')
  ) {
    return 'Діагностичний маршрут';
  }

  return 'Діагностичний маршрут';
}

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function showSuccessMessage(form, recommendedTrack) {
  form.querySelectorAll('.form-step').forEach((step) => {
    step.classList.remove('active');
  });

  const progress = form.querySelector('.form-progress');
  const success = form.querySelector('.form-success');

  if (progress) {
    progress.style.display = 'none';
  }

  if (success) {
    const nameTarget = success.querySelector('b');
    const textTarget = success.querySelector('p');

    if (nameTarget) {
      nameTarget.textContent = form.elements.name.value;
    }

    if (textTarget) {
      textTarget.textContent =
        `Дякуємо! Анкету надіслано. Рекомендований маршрут: ${recommendedTrack}.`;
    }

    success.classList.add('show');
  }
}

function setFormMessage(message, type = 'info') {
  let messageElement = document.querySelector('.form-message');

  if (!messageElement) {
    messageElement = document.createElement('p');
    messageElement.className = 'form-message';
    applicationForm.appendChild(messageElement);
  }

  messageElement.textContent = message;
  messageElement.dataset.type = type;
}
```

## Рекомендація

Для MVP варто обрати Варіант B. Він зберігає поточну форму як частину продуктового досвіду, дозволяє показувати рекомендований маршрут на сайті й водночас не вимагає окремого backend. Варіант A можна залишити як швидкий fallback для пілоту або аварійний канал збору заявок, якщо Apps Script ще не готовий.

На цьому етапі реальний endpoint не підключається. У коді й документації використовується тільки placeholder:

```text
GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
```
