# Slut på support (End of life)

Även om ditt AAPS-system fungerar precis som du vill är det värt att uppgradera. Nya versioner innehåller säkerhetsfixar och buggrättningar som du kanske inte märker förrän de behövs. De behåller kompatibiliteten med nya versioner av telefonens operativsystem, CGM-appar, pumpens firmware och ändringar i Nightscout. De lägger till förbättringar i algoritmen och funktioner som har testats av en större community. Och du stannar på en version som fortfarande stöds och där andra faktiskt kan hjälpa dig med felsökning. Vissa tidigare versioner av AAPS har avsiktligt inget slutdatum, så att de kan fortsätta fungera på äldre Android-versioner. Att du inte får någon varning om slutdatum betyder alltså inte att din version är aktuell eller att den fortfarande stöds.

Varje version av AAPS kan ha ett slutdatum. Efter detta datum kan AAPS [begränsa loopen](#version-enforcement). AAPS varnar dig innan en version slutar gälla. Planera att uppdatera före slutdatumet och följ [guiden för uppdatering](UpdateToNewVersion.md).

## Så använder du den här sidan

1. Öppna **menyn** (☰) uppe till vänster i AAPS och välj **Om**. Där ser du din version av AAPS.
2. Leta upp samma version i den första tabellen nedan. Läs slutdatumet bredvid den. Datum skrivs som **år-månad-dag**. Till exempel betyder `2026-10-30` den 30 oktober 2026.
3. Läs [versionsinformationen](ReleaseNotes.md) och [guiden för uppdatering](UpdateToNewVersion.md) innan du uppdaterar. Vilken version du kan använda beror också på telefonens Android-version.

Tabellen visar inte ett slutdatum för varje version av AAPS. Om din version saknas har slutdatumet kanske inte bestämts än. Det betyder inte att den kommer att stödjas för alltid.

## Slutdatum för versioner av AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Läser in versionsdata för AAPS…</div>
<noscript>
  Slå på JavaScript för att se tabellerna.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Version av AAPS</th><th scope="col">Slutdatum</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## API-nivåer i Android

Android ger varje systemversion en **API-nivå**. Det är ett nummer som appar använder. Till exempel är API-nivå 30 samma som Android 11. Tabellen nedan använder API-nivåer från versionsdata för AAPS. Versionen av AAPS på varje rad är det värde som anges för den API-nivå som visas. Det här är inte en fullständig lista över versioner som du kan installera.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">API-nivå i Android</th><th scope="col">Angiven version av AAPS</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. Försök igen senare.';
  }
});
</script>
```
