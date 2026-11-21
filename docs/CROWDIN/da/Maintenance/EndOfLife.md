# Ophør af support

Selv om dit nuværende AAPS-system virker præcis, som du vil have det, er det stadig værd at opgradere. Nyere versioner giver sikkerhedsrettelser og fejlrettelser, som du måske aldrig lægger mærke til, før de betyder noget. De holder systemet kompatibelt med nye versioner af telefonens styresystem, CGM-apps, pumpefirmware og ændringer i Nightscout. De tilføjer forbedringer af algoritmen og funktioner, der er testet af et stort fællesskab. Og de sikrer, at du bliver på en version, som stadig er understøttet, og hvor andre faktisk kan hjælpe dig med fejlfinding. Nogle tidligere AAPS-versioner har med vilje ingen udløbsdato, så de kan blive ved med at virke på ældre Android-versioner. Når der ikke kommer en advarsel om udløb, er det derfor ikke et tegn på, at din version stadig er opdateret eller understøttet.

Hver AAPS-version kan have en slutdato. Efter denne dato kan AAPS [begrænse loopet](#version-enforcement). AAPS advarer dig, før en version udløber. Planlæg at opdatere før slutdatoen, og følg [vejledningen til opdatering](UpdateToNewVersion.md).

## Sådan bruger du denne side

1. Åbn **menuen** (☰) øverst til venstre i AAPS, og vælg **Om**. Der kan du se din AAPS-version.
2. Find den samme version i den første tabel nedenfor. Læs slutdatoen ved siden af den. Datoer er skrevet som **år-måned-dag**. For eksempel betyder `2026-10-30` den 30. oktober 2026.
3. Læs [Udgivelsesnoter](ReleaseNotes.md) og [vejledningen til opdatering](UpdateToNewVersion.md), før du opdaterer. Hvilken version du kan bruge, afhænger også af telefonens Android-version.

Tabellen viser ikke en slutdato for alle AAPS-versioner. Hvis din version mangler, er dens slutdato måske ikke fastsat endnu. Det betyder ikke, at den bliver understøttet for altid.

## Slutdatoer for AAPS-versioner

<div id="aaps-eol-status" role="status" aria-live="polite">Indlæser data om AAPS-versioner…</div>
<noscript>
  Slå JavaScript til for at se tabellerne.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS-version</th><th scope="col">Slutdato</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API-niveauer

Android giver hver systemversion et **API-niveau**, som er et tal, apps bruger. For eksempel er API-niveau 30 Android 11. Tabellen nedenfor bruger API-niveauer fra AAPS' versionsdata. AAPS-versionen i hver række er den værdi, der står for det viste API-niveau. Dette er ikke en komplet liste over de versioner, du kan installere.

Brug [vejledningen om Android-versioner i Udgivelsesnoter](#maintenance-android-version-aaps-version) for at vælge en AAPS-version til din telefon.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API-niveau</th><th scope="col">Angivet AAPS-version</th></tr></thead>
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
      : list.length === 2 ? `${list[0]} og ${list[1]}`
      : `${list[0]} til ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'Kunne ikke indlæse data om AAPS-versioner. Prøv igen senere.';
  }
});
</script>
```
