# Kraj podrške

Čak i ako vaš trenutni sustav AAPS radi točno onako kako želite, ažuriranje se ipak isplati. Novija izdanja donose sigurnosne ispravke i ispravke grešaka koje možda nećete primijetiti sve dok ne postanu važne. Ona održavaju kompatibilnost s novim verzijama operacijskog sustava telefona, CGM aplikacijama, firmwareom pumpe i promjenama u Nightscoutu. Dodaju poboljšanja algoritma i značajke koje je testirala šira zajednica. I osiguravaju da ostanete na verziji koja je još podržana i za koju vam drugi stvarno mogu pomoći u rješavanju problema. Neke starije verzije AAPS-a namjerno nemaju datum isteka, kako bi mogle i dalje raditi na starijim verzijama Androida. Zato to što nema upozorenja o isteku nije znak da je vaša verzija još uvijek aktualna ili podržana.

Svaka verzija AAPS-a može imati datum završetka. Nakon tog datuma AAPS može [ograničiti petlju](#version-enforcement). AAPS vas upozori prije nego što verzija istekne. Planirajte ažuriranje prije datuma završetka i slijedite [vodič za ažuriranje](UpdateToNewVersion.md).

## Kako koristiti ovu stranicu

1. U AAPS-u otvorite **izbornik** (☰) gore lijevo i odaberite **O aplikaciji**. Tamo ćete vidjeti svoju verziju AAPS-a.
2. Pronađite istu verziju u prvoj tablici ispod. Pročitajte datum završetka pokraj nje. Datumi su napisani kao **godina-mjesec-dan**. Na primjer, `2026-10-30` znači 30. listopada 2026.
3. Prije ažuriranja pročitajte [Bilješke o izdanju](ReleaseNotes.md) i [vodič za ažuriranje](UpdateToNewVersion.md). Verzija koju možete koristiti ovisi i o verziji Androida na vašem telefonu.

Tablica ne prikazuje datum završetka za svaku verziju AAPS-a. Ako vaše verzije nema, njezin datum završetka možda još nije određen. To ne znači da će biti podržana zauvijek.

## Datumi završetka verzija AAPS-a

<div id="aaps-eol-status" role="status" aria-live="polite">Učitavanje podataka o verzijama AAPS-a…</div>
<noscript>
  Uključite JavaScript da biste vidjeli tablice.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Verzija AAPS-a</th><th scope="col">Datum završetka</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Razine Android API-ja

Android svakoj verziji sustava daje **razinu API-ja**. To je broj koji koriste aplikacije. Na primjer, razina API-ja 30 je Android 11. Tablica ispod koristi razine API-ja iz podataka o verzijama AAPS-a. Verzija AAPS-a u svakom retku je vrijednost navedena za prikazanu razinu API-ja. Ovo nije potpuni popis verzija koje možete instalirati.

Za odabir verzije AAPS-a za vaš telefon koristite [upute o verzijama Androida u Bilješkama o izdanju](#maintenance-android-version-aaps-version).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Razina Android API-ja</th><th scope="col">Navedena verzija AAPS-a</th></tr></thead>
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
      : `${list[0]} do ${list[list.length - 1]}`;
    showRows('aaps-eol-versions', groups.reverse().map(g => [label(g.versions), g.endDate]));
    showRows('aaps-eol-android', android.map(entry => [
      entry.minAndroid === entry.maxAndroid
        ? String(entry.minAndroid) : `${entry.minAndroid}–${entry.maxAndroid}`,
      entry.supported
    ]));
    status.remove();
  } catch {
    status.textContent = 'Nije moguće učitati podatke o verzijama AAPS-a. Pokušajte ponovno kasnije.';
  }
});
</script>
```
