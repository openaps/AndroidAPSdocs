# Fine del supporto

Even if your current AAPS system works exactly the way you like, upgrading is still worth it because newer releases bring safety fixes and bug corrections you may never notice until they matter, keep compatibility with new phone OS versions, CGM apps, pump firmware and Nightscout changes, add algorithm improvements and features that have been tested by the wider community, and ensure you stay on a version that is still supported and that others can actually help you troubleshoot. Some previous AAPS versions deliberately have no expiration date so they can keep working on older Android versions, so the lack of an expiration warning is not a sign that your version is still up to date or supported.

Ogni versione di AAPS può avere una data di fine. After this date, AAPS may [limit the loop](#version-enforcement). AAPS ti avvisa prima che una versione scada. Pianifica l'aggiornamento prima della data di fine e segui la [guida all'aggiornamento](UpdateToNewVersion.md).

## Come usare questa pagina

1. In AAPS apri il **menu** (☰) in alto a sinistra e scegli **Informazioni**. You will see your AAPS version there.
2. Find the same version in the first table below. Read the end date next to it. Dates are written as **year-month-day**. Per esempio, `2026-10-30` significa 30 ottobre 2026.
3. Check the [Release Notes](ReleaseNotes.md) and the [update guide](UpdateToNewVersion.md) before you update. The version you can use also depends on your phone's Android version.

La tabella non mostra una data di fine per ogni versione di AAPS. If your version is missing, its end date may not have been set yet. Questo non significa che sarà supportata per sempre.

## Date di fine delle versioni di AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Caricamento dei dati delle versioni di AAPS…</div>
<noscript>
  Attiva JavaScript per vedere le tabelle.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Versione di AAPS</th><th scope="col">Data di fine</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Livelli API di Android

Android assegna a ogni versione del sistema un **livello API**, cioè un numero usato dalle app. Per esempio, il livello API 30 corrisponde ad Android 11. La tabella qui sotto usa i livelli API presi dai dati delle versioni di AAPS. La versione di AAPS in ogni riga è il valore indicato per il livello API mostrato. This is not a full list of versions you can install.

Per scegliere la versione di AAPS adatta al tuo telefono, usa le [indicazioni sulle versioni di Android nelle Note di rilascio](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Livello API di Android</th><th scope="col">Versione di AAPS indicata</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. Riprova più tardi.';
  }
});
</script>
```
