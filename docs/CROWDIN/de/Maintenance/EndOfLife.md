# Supportende

Auch wenn Dein aktuelles AAPS genau so läuft, wie Du es möchtest, lohnt sich ein Update trotzdem. Neuere Versionen bringen Sicherheits- und Fehlerkorrekturen, die Dir vielleicht erst auffallen, wenn es darauf ankommt. Sie halten AAPS kompatibel mit neuen Android-Versionen, CGM-Apps, Pumpen-Firmware und Änderungen an Nightscout. Außerdem enthalten sie Verbesserungen am Algorithmus und neue Funktionen, die bereits von vielen in der Community getestet wurden. Und Du bleibst auf einer Version, die noch unterstützt wird und bei der Dir andere bei Problemen tatsächlich helfen können. Einige ältere AAPS-Versionen haben bewusst kein Ablaufdatum, damit sie auf älteren Android-Versionen weiter funktionieren. Fehlt eine Ablaufwarnung, heißt das also nicht, dass Deine Version aktuell ist oder noch unterstützt wird.

Jede AAPS-Version kann ein Enddatum haben. Nach diesem Datum kann AAPS den [Loop einschränken](#version-enforcement). AAPS warnt Dich, bevor eine Version abläuft. Plane das Update vor dem Enddatum ein und folge der Aktualisierungsanleitung.

## So nutzt Du diese Seite

1. Tippe in AAPS oben rechts auf die drei Punkte und wähle **Über**. Dort siehst Du Deine AAPS-Version.
2. Suche dieselbe Version in der ersten Tabelle unten. Daneben steht das Enddatum. Daten werden im Format **Jahr-Monat-Tag** angegeben. 2026-10-30 bedeutet zum Beispiel 30. Oktober 2026.
3. Lies vor dem Update die [Release Notes](ReleaseNotes.md) und die [Aktualisierungsanleitung](UpdateToNewVersion.md). Welche Version Du nutzen kannst, hängt auch von der Android-Version Deines Smartphones ab.

Die Tabelle zeigt nicht für jede AAPS-Version ein Enddatum. Fehlt Deine Version, wurde ihr Enddatum möglicherweise noch nicht festgelegt. Das heißt nicht, dass sie für immer unterstützt wird.

## Enddaten der AAPS-Versionen

<div id="aaps-eol-status" role="status" aria-live="polite">AAPS-Versionsdaten werden geladen …</div>
<noscript>
  Turn on JavaScript to see the tables.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS-Version</th><th scope="col">Enddatum</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android-API-Level

Android gibt jeder Systemversion ein **API-Level**. Das ist eine Nummer, die von Apps genutzt wird. API-Level 30 entspricht zum Beispiel Android 11. Die Tabelle unten nutzt die API-Level aus den AAPS-Versionsdaten. Die AAPS-Version in jeder Zeile ist der Wert, der für das jeweilige API-Level hinterlegt ist. Das ist keine vollständige Liste der Versionen, die Du installieren kannst.

Um eine AAPS-Version für Dein Smartphone auszuwählen, nutze die [Hinweise zur Android-Version in den Release Notes](#maintenance-android-version-aaps-version). Ist für ein API-Level keine AAPS-Version hinterlegt, steht in der Tabelle „Keine angegeben“.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android-API-Level</th><th scope="col">Aufgeführte AAPS-Version</th></tr></thead>
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
