# End of life

Even if your current AAPS system works exactly the way you like, upgrading is still worth it because newer releases bring safety fixes and bug corrections you may never notice until they matter, keep compatibility with new phone OS versions, CGM apps, pump firmware and Nightscout changes, add algorithm improvements and features that have been tested by the wider community, and ensure you stay on a version that is still supported and that others can actually help you troubleshoot. Some previous AAPS versions deliberately have no expiration date so they can keep working on older Android versions, so the lack of an expiration warning is not a sign that your version is still up to date or supported.

Each AAPS version can have an end date. După această dată, AAPS poate [limita bucla](#version-enforcement). AAPS vă avertizează înainte ca o versiune să expire. Plan to update before the end date, and follow the [update guide](UpdateToNewVersion.md).

## How to use this page

1. În AAPS, deschideți **meniul** (☰) din stânga sus și alegeți **Despre**. You will see your AAPS version there.
2. Find the same version in the first table below. Read the end date next to it. Datele sunt scrise în formatul **an-lună-zi**. De exemplu, `2026-10-30` înseamnă 30 octombrie 2026.
3. Check the [Release Notes](ReleaseNotes.md) and the [update guide](UpdateToNewVersion.md) before you update. Versiunea pe care o puteți folosi depinde și de versiunea Android a telefonului dumneavoastră.

The table does not show an end date for every AAPS version. If your version is missing, its end date may not have been set yet. This does not mean it will be supported forever.

## AAPS version end dates

<div id="aaps-eol-status" role="status" aria-live="polite">Loading AAPS version data…</div>
<noscript>
  Activați JavaScript pentru a vedea tabelele.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS version</th><th scope="col">End date</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Nivelurile API Android

Android gives each system version an **API level**, which is a number used by apps. De exemplu, nivelul API 30 este Android 11. The table below uses API levels from AAPS version data. Versiunea AAPS din fiecare rând este valoarea listată pentru nivelul API afișat. Aceasta nu este o listă completă a versiunilor pe care le puteți instala.

Pentru a alege o versiune AAPS potrivită telefonului dumneavoastră, folosiți [indicațiile despre versiunea Android din Notele de lansare](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API level</th><th scope="col">AAPS version listed</th></tr></thead>
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
      : list.length === 2 ? `${list[0]} and ${list[1]}`
      : `${list[0]} to ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'Could not load AAPS version data. Please try again later.';
  }
});
</script>
```
