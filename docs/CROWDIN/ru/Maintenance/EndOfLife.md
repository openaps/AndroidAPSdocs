# Окончание поддержки

Даже если ваша система AAPS работает именно так, как вам нравится, обновляться все равно стоит. Новые версии содержат исправления безопасности и ошибок, которые вы можете не замечать, пока они не станут важны. Они сохраняют совместимость с новыми версиями ОС телефона, приложениями CGM, прошивками помп и изменениями в Nightscout. Они добавляют улучшения алгоритма и функции, которые проверило широкое сообщество. И они помогают оставаться на версии, которая еще поддерживается и с которой другие люди реально могут помочь вам решить проблемы. Некоторые старые версии AAPS специально не имеют даты окончания срока действия, чтобы они могли работать на старых версиях Android. Поэтому отсутствие предупреждения об окончании срока не означает, что ваша версия актуальна или еще поддерживается.

У каждой версии AAPS может быть дата окончания поддержки. После этой даты AAPS может [ограничить работу цикла](#version-enforcement). AAPS предупреждает вас до того, как срок действия версии закончится. Запланируйте обновление до этой даты и следуйте инструкции [Обновление до новой версии или ветки](UpdateToNewVersion.md).

## Как пользоваться этой страницей

1. В AAPS откройте **меню** (☰) слева вверху и выберите **О программе**. Там вы увидите вашу версию AAPS.
2. Найдите эту же версию в первой таблице ниже. Посмотрите дату окончания поддержки рядом с ней. Даты записаны в формате **год-месяц-день**. Например, `2026-10-30` означает 30 октября 2026 года.
3. Перед обновлением прочитайте [Примечания к изменениям в версиях](ReleaseNotes.md) и инструкцию [Обновление до новой версии или ветки](UpdateToNewVersion.md). Какую версию вы можете использовать, зависит также от версии Android на вашем телефоне.

В таблице указана дата окончания поддержки не для каждой версии AAPS. Если вашей версии нет в таблице, возможно, дата окончания поддержки для нее еще не назначена. Это не значит, что она будет поддерживаться всегда.

## Даты окончания поддержки версий AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Загрузка данных о версиях AAPS…</div>
<noscript>
  Включите JavaScript, чтобы увидеть таблицы.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Версия AAPS</th><th scope="col">Дата окончания поддержки</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Уровни API Android

Android присваивает каждой версии системы **уровень API** — это число, которое используют приложения. Например, уровень API 30 — это Android 11. В таблице ниже используются уровни API из данных о версиях AAPS. Версия AAPS в каждой строке — это значение, указанное для показанного уровня API. Это не полный список версий, которые можно установить.

Чтобы выбрать версию AAPS для вашего телефона, используйте [рекомендации по версиям Android в Примечаниях к изменениям в версиях](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Уровень API Android</th><th scope="col">Указанная версия AAPS</th></tr></thead>
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
      entry && Number.isInteger(entry.minAndroid) && Number.isInteger(entry.maxAndroid) &&
      typeof entry.supported === 'string' && entry.supported
    ).sort((a, b) => b.minAndroid - a.minAndroid);
    if (!versions.length && !android.length) throw new Error('No version data');

    // Merge neighbouring versions that share an end date and the same x.y.z prefix
    // (for example 3.2.0.0 to 3.2.0.3) into a single row.
    const groups = [];
    for (const entry of versions.slice().reverse()) {
      const prefix = entry.version.split('.').slice(0, 3).join('.');
      const last = groups[groups.length - 1];
      if (last && last.endDate === entry.endDate && last.prefix === prefix) {
        last.versions.push(entry.version);
      } else {
        groups.push({ prefix, endDate: entry.endDate, versions: [entry.version] });
      }
    }
    const label = list => list.length === 1 ? list[0]
      : list.length === 2 ? `${list[0]} и ${list[1]}`
      : `${list[0]} – ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'Не удалось загрузить данные о версиях AAPS. Повторите попытку позже.';
  }
});
</script>
```
