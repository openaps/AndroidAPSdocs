# Край на поддръжката

Дори ако сегашната ви система с AAPS работи точно както искате, актуализирането пак си струва, защото новите версии носят поправки за безопасност и на грешки, които може да не забележите, докато не станат важни; запазват съвместимостта с нови версии на операционната система на телефона, приложенията за CGM, фърмуера на помпите и промените в Nightscout; добавят подобрения в алгоритъма и функции, тествани от по-широката общност; и гарантират, че сте на версия, която все още се поддържа и при която другите наистина могат да ви помогнат да отстраните проблеми. Някои по-стари версии на AAPS нарочно нямат крайна дата, за да могат да продължат да работят на по-стари версии на Android, така че липсата на предупреждение за изтичане не означава, че вашата версия е актуална или че все още се поддържа.

Всяка версия на AAPS може да има крайна дата. След тази дата AAPS може да [ограничи кръга](#version-enforcement). AAPS ви предупреждава, преди дадена версия да изтече. Планирайте да актуализирате преди крайната дата и следвайте [ръководството за актуализиране](UpdateToNewVersion.md).

## Как да използвате тази страница

1. В AAPS отворете **меню** (☰) горе вляво и изберете **За приложението**. Там ще видите вашата версия на AAPS.
2. Намерете същата версия в първата таблица по-долу. Прочетете крайната дата до нея. Датите са записани като **година-месец-ден**. Например `2026-10-30` означава 30 октомври 2026 г.
3. Прегледайте [бележките към версиите](ReleaseNotes.md) и [ръководството за актуализиране](UpdateToNewVersion.md), преди да актуализирате. Версията, която можете да използвате, зависи и от версията на Android на телефона ви.

Таблицата не показва крайна дата за всяка версия на AAPS. Ако вашата версия липсва, може крайната ѝ дата още да не е определена. Това не означава, че тя ще се поддържа завинаги.

## Крайни дати на версиите на AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Зареждане на данните за версиите на AAPS…</div>
<noscript>
  Включете JavaScript, за да видите таблиците.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Версия на AAPS</th><th scope="col">Крайна дата</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Нива на API на Android

Android дава на всяка версия на системата **ниво на API** (API level) – число, което се използва от приложенията. Например ниво на API 30 е Android 11. Таблицата по-долу използва нивата на API от данните за версиите на AAPS. Версията на AAPS във всеки ред е стойността, посочена за показаното ниво на API. Това не е пълен списък на версиите, които можете да инсталирате.

За да изберете версия на AAPS за телефона си, използвайте [указанията за версията на Android в бележките към версиите](#maintenance-android-version-aaps-version). Ако за някое ниво на API няма посочена версия на AAPS, в таблицата пише „None listed“ (няма посочена).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Ниво на API на Android</th><th scope="col">Посочена версия на AAPS</th></tr></thead>
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
