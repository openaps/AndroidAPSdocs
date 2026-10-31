# Koniec podpory

Aj keď váš súčasný systém AAPS funguje presne tak, ako chcete, aktualizácia sa oplatí. Novšie vydania prinášajú bezpečnostné opravy a opravy chýb, ktoré si možno nevšimnete, kým nebudú dôležité. Udržiavajú kompatibilitu s novými verziami operačného systému telefónu, aplikáciami CGM, firmvérom púmp a zmenami v Nightscoute. Pridávajú vylepšenia algoritmu a funkcie, ktoré otestovala širšia komunita. A zaistia, že zostanete na verzii, ktorá je stále podporovaná a pri ktorej vám ostatní naozaj vedia pomôcť s riešením problémov. Niektoré staršie verzie AAPS zámerne nemajú dátum vypršania platnosti, aby mohli fungovať na starších verziách Androidu. Ak teda nevidíte upozornenie na vypršanie platnosti, neznamená to, že je vaša verzia stále aktuálna alebo podporovaná.

Každá verzia AAPS môže mať dátum ukončenia podpory. Po tomto dátume môže AAPS [obmedziť okruh](#version-enforcement). AAPS vás upozorní ešte predtým, ako platnosť verzie vyprší. Naplánujte si aktualizáciu pred dátumom ukončenia a postupujte podľa [návodu na aktualizáciu](UpdateToNewVersion.md).

## Ako používať túto stránku

1. V AAPS otvorte **ponuku** (☰) vľavo hore a vyberte **O aplikácii**. Tam uvidíte svoju verziu AAPS.
2. Nájdite rovnakú verziu v prvej tabuľke nižšie. Prečítajte si dátum ukončenia vedľa nej. Dátumy sú uvedené vo formáte **rok-mesiac-deň**. Napríklad `2026-10-30` znamená 30. októbra 2026.
3. Pred aktualizáciou si prečítajte [poznámky k vydaniu](ReleaseNotes.md) a [návod na aktualizáciu](UpdateToNewVersion.md). Verzia, ktorú môžete používať, závisí aj od verzie Androidu vo vašom telefóne.

Tabuľka neuvádza dátum ukončenia pre každú verziu AAPS. Ak vaša verzia chýba, jej dátum ukončenia možno ešte nebol stanovený. To neznamená, že bude podporovaná navždy.

## Dátumy ukončenia podpory verzií AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Načítavajú sa údaje o verziách AAPS…</div>
<noscript>
  Ak chcete vidieť tabuľky, zapnite JavaScript.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Verzia AAPS</th><th scope="col">Dátum ukončenia</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Úrovne API Androidu

Android priraďuje každej verzii systému **úroveň API**, čo je číslo, ktoré používajú aplikácie. Napríklad úroveň API 30 je Android 11. Tabuľka nižšie používa úrovne API z údajov o verziách AAPS. Verzia AAPS v každom riadku je hodnota uvedená pre zobrazenú úroveň API. Toto nie je úplný zoznam verzií, ktoré môžete nainštalovať.

Ak chcete vybrať verziu AAPS pre svoj telefón, použite [odporúčania pre verzie Androidu v poznámkach k vydaniu](#maintenance-android-version-aaps-version). Ak pre úroveň API nie je uvedená žiadna verzia AAPS, v tabuľke je „None listed“ (žiadna uvedená).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Úroveň API Androidu</th><th scope="col">Uvedená verzia AAPS</th></tr></thead>
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
