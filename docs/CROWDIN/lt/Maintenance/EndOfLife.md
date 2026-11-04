# Versijų galiojimo pabaiga

Net jei dabartinė AAPS sistema veikia būtent taip, kaip norite, atnaujinti vis tiek verta. Naujos versijos turi saugos ir klaidų pataisymų, kurių galite nepastebėti, kol jie neprireiks. Jos išlaiko suderinamumą su naujomis telefono OS versijomis, NGJ programėlėmis, pompų programine įranga ir Nightscout pakeitimais. Jose yra algoritmo patobulinimų ir funkcijų, kurias išbandė platesnė bendruomenė. Be to, taip naudojate vis dar palaikomą versiją, o kiti gali jums padėti šalinti triktis. Kai kurios ankstesnės AAPS versijos sąmoningai neturi galiojimo pabaigos datos, kad galėtų toliau veikti senesnėse Android versijose. Todėl tai, kad negaunate įspėjimo apie galiojimo pabaigą, nereiškia, kad jūsų versija vis dar nauja ar palaikoma.

Kiekviena AAPS versija gali turėti galiojimo pabaigos datą. Po šios datos AAPS gali [apriboti ciklą](#version-enforcement). AAPS jus įspėja prieš baigiantis versijos galiojimui. Suplanuokite atnaujinimą iki galiojimo pabaigos datos ir vadovaukitės [atnaujinimo instrukcija](UpdateToNewVersion.md).

## Kaip naudotis šiuo puslapiu

1. AAPS atidarykite **meniu** (☰) viršuje kairėje ir pasirinkite **Apie**. Ten matysite savo AAPS versiją.
2. Raskite tą pačią versiją pirmoje lentelėje žemiau. Šalia jos perskaitykite galiojimo pabaigos datą. Datos rašomos formatu **metai-mėnuo-diena**. Pavyzdžiui, `2026-10-30` reiškia 2026 m. spalio 30 d.
3. Prieš atnaujindami perskaitykite [versijų pastabas](ReleaseNotes.md) ir [atnaujinimo instrukciją](UpdateToNewVersion.md). Kurią versiją galite naudoti, priklauso ir nuo jūsų telefono Android versijos.

Lentelėje nurodyta ne kiekvienos AAPS versijos galiojimo pabaigos data. Jei jūsų versijos nėra, jos galiojimo pabaigos data gali būti dar nenustatyta. Tai nereiškia, kad ji bus palaikoma visada.

## AAPS versijų galiojimo pabaigos datos

<div id="aaps-eol-status" role="status" aria-live="polite">Įkeliami AAPS versijų duomenys…</div>
<noscript>
  Įjunkite JavaScript, kad matytumėte lenteles.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">AAPS versija</th><th scope="col">Galiojimo pabaiga</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Android API lygiai

Android kiekvienai sistemos versijai suteikia **API lygį** – tai skaičius, kurį naudoja programėlės. Pavyzdžiui, API lygis 30 yra Android 11. Toliau esančioje lentelėje naudojami API lygiai iš AAPS versijų duomenų. Kiekvienoje eilutėje nurodyta AAPS versija, kuri duomenyse pateikta tam API lygiui. Tai nėra pilnas versijų, kurias galite įdiegti, sąrašas.

To choose an AAPS version for your phone, use the [Android version guidance in the Release Notes](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Android API lygis</th><th scope="col">Nurodyta AAPS versija</th></tr></thead>
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
    status.textContent = 'Could not load AAPS version data. Bandykite vėliau.';
  }
});
</script>
```
