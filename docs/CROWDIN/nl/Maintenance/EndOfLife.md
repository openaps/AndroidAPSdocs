# Einde van de ondersteuning

Ook als je huidige AAPS precies werkt zoals jij wilt, is bijwerken toch de moeite waard. Nieuwe versies brengen veiligheidsfixes en foutcorrecties die je misschien pas merkt als het ertoe doet. Ze blijven werken met nieuwe versies van het telefoonbesturingssysteem, CGM-apps, pompfirmware en wijzigingen in Nightscout. Ze voegen verbeteringen aan het algoritme en functies toe die door de bredere gemeenschap getest zijn. En je blijft op een versie die nog ondersteund wordt, zodat anderen je echt kunnen helpen bij problemen. Sommige oudere AAPS-versies hebben bewust geen vervaldatum, zodat ze kunnen blijven werken op oudere Android-versies. Als je geen waarschuwing over het verlopen krijgt, betekent dat dus niet dat je versie nog actueel is of nog ondersteund wordt.

Elke AAPS-versie kan een einddatum hebben. Na deze datum kan AAPS [de loop beperken](#version-enforcement). AAPS waarschuwt je voordat een versie verloopt. Plan je update vóór de einddatum en volg de [handleiding voor bijwerken](UpdateToNewVersion.md).

## Hoe gebruik je deze pagina

1. Open in AAPS het **Menu** (☰) linksboven en kies **Over**. Daar zie je je AAPS-versie.
2. Zoek dezelfde versie in de eerste tabel hieronder. Lees de einddatum ernaast. Datums staan in de vorm **jaar-maand-dag**. Bijvoorbeeld: `2026-10-30` betekent 30 oktober 2026.
3. Lees de [Release notes](ReleaseNotes.md) en de [handleiding voor bijwerken](UpdateToNewVersion.md) voordat je bijwerkt. Welke versie je kunt gebruiken, hangt ook af van de Android-versie van je telefoon.

De tabel toont niet voor elke AAPS-versie een einddatum. Als je versie ontbreekt, is de einddatum misschien nog niet vastgesteld. Dit betekent niet dat de versie altijd ondersteund blijft.

## Einddatums van AAPS-versies

<div id="aaps-eol-status" role="status" aria-live="polite">AAPS-versiegegevens worden geladen…</div>
<noscript>
  Zet JavaScript aan om de tabellen te zien.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS-versie</th><th scope="col">Einddatum</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API-levels

Android geeft elke systeemversie een **API-level**. Dat is een nummer dat apps gebruiken. Bijvoorbeeld: API-level 30 is Android 11. De tabel hieronder gebruikt API-levels uit de AAPS-versiegegevens. De AAPS-versie in elke rij is de waarde die voor het getoonde API-level vermeld staat. Dit is geen volledige lijst van versies die je kunt installeren.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API-level</th><th scope="col">Vermelde AAPS-versie</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. Probeer het later opnieuw.';
  }
});
</script>
```
