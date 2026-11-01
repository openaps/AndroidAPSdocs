# Кінець підтримки

Навіть якщо ваша система AAPS працює саме так, як вам подобається, оновлюватися все одно варто. Нові випуски приносять виправлення безпеки та помилок, яких ви можете не помічати, поки вони не стануть важливими. Вони зберігають сумісність з новими версіями ОС телефону, застосунками CGM, прошивками помп і змінами в Nightscout. Вони додають покращення алгоритму та функції, які перевірила ширша спільнота. І вони гарантують, що ви користуєтеся версією, яку ще підтримують і з якою інші люди справді можуть допомогти вам у разі проблем. Деякі попередні версії AAPS навмисно не мають дати завершення, щоб вони могли працювати на старих версіях Android. Тому якщо попередження про завершення немає, це не означає, що ваша версія актуальна або ще підтримується.

Кожна версія AAPS може мати дату завершення. Після цієї дати AAPS може [обмежити петлю](#version-enforcement). AAPS попереджає вас, перш ніж термін дії версії закінчиться. Плануйте оновлення до дати завершення та дотримуйтеся [інструкції з оновлення](UpdateToNewVersion.md).

## Як користуватися цією сторінкою

1. В AAPS відкрийте **Меню** (☰) зліва вгорі та виберіть **Про застосунок**. Там ви побачите вашу версію AAPS.
2. Знайдіть цю саму версію в першій таблиці нижче. Подивіться дату завершення поруч із нею. Дати записано у форматі **рік-місяць-день**. Наприклад, `2026-10-30` означає 30 жовтня 2026 року.
3. Перед оновленням перегляньте [Примітки до випуску](ReleaseNotes.md) та [інструкцію з оновлення](UpdateToNewVersion.md). Версія, яку ви можете використовувати, залежить також від версії Android на вашому телефоні.

Таблиця показує дату завершення не для кожної версії AAPS. Якщо вашої версії немає, можливо, її дату завершення ще не встановлено. Це не означає, що її підтримуватимуть завжди.

## Дати завершення версій AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Завантаження даних про версії AAPS…</div>
<noscript>
  Увімкніть JavaScript, щоб побачити таблиці.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Версія AAPS</th><th scope="col">Дата завершення</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Рівні API Android

Android дає кожній версії системи **рівень API** — це число, яке використовують застосунки. Наприклад, рівень API 30 — це Android 11. Таблиця нижче використовує рівні API з даних про версії AAPS. Версія AAPS у кожному рядку — це значення, вказане для показаного рівня API. Це не повний список версій, які ви можете встановити.

Щоб вибрати версію AAPS для вашого телефону, скористайтеся [порадами щодо версій Android у Примітках до випуску](#maintenance-android-version-aaps-version). Якщо для рівня API не вказано жодної версії AAPS, у таблиці написано “None listed” (немає даних).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Рівень API Android</th><th scope="col">Вказана версія AAPS</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

```{raw} html

<script>
document.addEventListener('DOMContentLoaded', async () => {
  const status = document.getElementById('aaps-eol-status');
  if (!status) return;

  function showRows(id, rows) {
    const container = document.getElementById(id);
    const body = container.querySelector('tbody');
    for (const values of rows) {
      const row = body.insertRow();
      for (const value of values) row.insertCell().textContent = value;
    }
    container.hidden = rows.length === 0;
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/nightscout/AndroidAPS/refs/heads/versions/definition.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Invalid version data');

    const versions = data.filter(entry =>
      entry && typeof entry.version === 'string' &&
      typeof entry.endDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(entry.endDate)
    ).sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
    const android = data.filter(entry =>
      entry && Number.isInteger(entry.minAndroid) && Number.isInteger(entry.maxAndroid)
    ).sort((a, b) => b.minAndroid - a.minAndroid);
    if (!versions.length && !android.length) throw new Error('No version data');

    showRows('aaps-eol-versions', versions.map(entry => [entry.version, entry.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'None listed'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Could not load AAPS version data. Please try again later.';
  }
});
</script>
```
