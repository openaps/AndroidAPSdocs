# Sluttdato for AAPS-versjoner

Selv om AAPS-systemet ditt fungerer akkurat slik du vil, er det likevel verdt å oppgradere: nyere utgaver har sikkerhetsrettinger og feilrettinger som du kanskje ikke merker før de betyr noe, de holder tritt med nye versjoner av telefonens operativsystem, CGM-apper, pumpefastvare og endringer i Nightscout, de gir forbedringer i algoritmen og funksjoner som er testet av et bredt fellesskap, og de sørger for at du bruker en versjon som fortsatt støttes, og som andre faktisk kan hjelpe deg med å feilsøke. Noen tidligere AAPS-versjoner har med vilje ingen utløpsdato, slik at de kan fortsette å fungere på eldre Android-versjoner. At du ikke får et utløpsvarsel, er derfor ikke et tegn på at versjonen din fortsatt er oppdatert eller støttet.

Hver AAPS-versjon kan ha en sluttdato. Etter denne datoen kan AAPS [begrense loopen](#version-enforcement). AAPS varsler deg før en versjon utløper. Planlegg å oppdatere før sluttdatoen, og følg [oppdateringsveiledningen](UpdateToNewVersion.md).

## Slik bruker du denne siden

1. I AAPS åpner du **menyen** (☰) øverst til venstre og velger **Om**. Der ser du AAPS-versjonen din.
2. Finn den samme versjonen i den første tabellen nedenfor. Les sluttdatoen ved siden av den. Datoer skrives som **år-måned-dag**. For eksempel betyr `2026-10-30` 30. oktober 2026.
3. Les [Versjonsnotater](ReleaseNotes.md) og [oppdateringsveiledningen](UpdateToNewVersion.md) før du oppdaterer. Hvilken versjon du kan bruke, avhenger også av Android-versjonen på telefonen din.

Tabellen viser ikke en sluttdato for alle AAPS-versjoner. Hvis versjonen din mangler, er sluttdatoen kanskje ikke satt ennå. Det betyr ikke at den vil bli støttet for alltid.

## Sluttdatoer for AAPS-versjoner

<div id="aaps-eol-status" role="status" aria-live="polite">Laster inn AAPS-versjonsdata …</div>
<noscript>
  Slå på JavaScript for å se tabellene.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS-versjon</th><th scope="col">Sluttdato</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API-nivåer

Android gir hver systemversjon et **API-nivå**, som er et tall apper bruker. For eksempel er API-nivå 30 Android 11. Tabellen nedenfor bruker API-nivåer fra AAPS-versjonsdataene. AAPS-versjonen i hver rad er verdien som er oppført for API-nivået som vises. Dette er ikke en fullstendig liste over versjoner du kan installere.

For å velge en AAPS-versjon til telefonen din, bruk [veiledningen om Android-versjoner i versjonsnotatene](#maintenance-android-version-aaps-version). Hvis ingen AAPS-versjon er oppført for et API-nivå, står det «Ingen oppført» i tabellen.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API-nivå</th><th scope="col">Oppført AAPS-versjon</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'Ingen oppført'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Kunne ikke laste inn AAPS-versjonsdata. Prøv igjen senere.';
  }
});
</script>
```
