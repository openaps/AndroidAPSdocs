# Fi del suport

Encara que el vostre sistema AAPS actual funcioni exactament com voleu, val la pena actualitzar. Les versions noves porten correccions de seguretat i d'errors que potser no notareu fins que siguin importants. També mantenen la compatibilitat amb les noves versions del sistema operatiu del telèfon, les aplicacions de CGM, el firmware de les bombes i els canvis de Nightscout. Afegeixen millores de l'algoritme i funcions que la comunitat ja ha provat. I us asseguren que feu servir una versió que encara té suport i amb la qual altres persones us poden ajudar a resoldre problemes. Algunes versions anteriors d'AAPS no tenen data de caducitat a propòsit, perquè puguin continuar funcionant en versions antigues d'Android. Per tant, que no aparegui cap avís de caducitat no vol dir que la vostra versió estigui al dia o que encara tingui suport.

Cada versió d'AAPS pot tenir una data de fi. Després d'aquesta data, AAPS pot [limitar el llaç](#version-enforcement). AAPS us avisa abans que una versió caduqui. Planifiqueu l'actualització abans de la data de fi i seguiu la [guia d'actualització](UpdateToNewVersion.md).

## Com fer servir aquesta pàgina

1. A AAPS, obriu el **menú** (☰) a la part superior esquerra i trieu **Quant a**. Hi veureu la vostra versió d'AAPS.
2. Cerqueu la mateixa versió a la primera taula de sota. Llegiu la data de fi que hi ha al costat. Les dates s'escriuen com a **any-mes-dia**. Per exemple, `2026-10-30` vol dir el 30 d'octubre de 2026.
3. Abans d'actualitzar, consulteu les [Notes de la versió](ReleaseNotes.md) i la [guia d'actualització](UpdateToNewVersion.md). La versió que podeu fer servir també depèn de la versió d'Android del vostre telèfon.

La taula no mostra una data de fi per a totes les versions d'AAPS. Si la vostra versió no hi és, potser encara no se n'ha fixat la data de fi. Això no vol dir que tingui suport per sempre.

## Dates de fi de les versions d'AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Carregant les dades de les versions d'AAPS…</div>
<noscript>
  Activeu JavaScript per veure les taules.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Versió d'AAPS</th><th scope="col">Data de fi</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Nivells d'API d'Android

Android assigna a cada versió del sistema un **nivell d'API**, un número que fan servir les aplicacions. Per exemple, el nivell d'API 30 és Android 11. La taula de sota fa servir els nivells d'API de les dades de versions d'AAPS. La versió d'AAPS de cada fila és el valor indicat per al nivell d'API que es mostra. Aquesta no és una llista completa de les versions que podeu instal·lar.

Per triar una versió d'AAPS per al vostre telèfon, feu servir les [indicacions sobre la versió d'Android a les Notes de la versió](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Nivell d'API d'Android</th><th scope="col">Versió d'AAPS indicada</th></tr></thead>
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
      : list.length === 2 ? `${list[0]} i ${list[1]}`
      : `${list[0]} a ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'No es poden carregar les dades de les versions AAPS. Torneu-ho a provar més tard.';
  }
});
</script>
```
