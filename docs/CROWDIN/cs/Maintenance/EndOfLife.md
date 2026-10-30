# Konec podpory

I když váš současný systém AAPS funguje přesně tak, jak chcete, aktualizace se i tak vyplatí: nové verze přinášejí bezpečnostní opravy a opravy chyb, kterých si možná nevšimnete, dokud nebudou důležité; zachovávají kompatibilitu s novými verzemi systému telefonu, aplikacemi CGM, firmwarem pump a změnami v Nightscoutu; přidávají vylepšení algoritmu a funkce, které otestovala širší komunita; a zajistí, že zůstanete na verzi, která je stále podporovaná a se kterou vám ostatní dokážou pomoci při řešení problémů. Některé starší verze AAPS záměrně nemají datum konce platnosti, aby mohly dál fungovat na starších verzích Androidu, takže chybějící upozornění na konec platnosti neznamená, že je vaše verze stále aktuální nebo podporovaná.

Každá verze AAPS může mít datum konce podpory. Po tomto datu může AAPS [omezit smyčku](#version-enforcement). AAPS vás před koncem platnosti verze upozorní. Naplánujte si aktualizaci před tímto datem a postupujte podle [návodu na aktualizaci](UpdateToNewVersion.md).

## Jak používat tuto stránku

1. V AAPS otevřete **nabídku** (☰) vlevo nahoře a zvolte **O aplikaci**. Tam uvidíte svou verzi AAPS.
2. Najděte stejnou verzi v první tabulce níže. Přečtěte si datum konce podpory vedle ní. Data jsou zapsána ve formátu **rok-měsíc-den**. Například `2026-10-30` znamená 30. října 2026.
3. Před aktualizací si přečtěte [Poznámky k vydání](ReleaseNotes.md) a [návod na aktualizaci](UpdateToNewVersion.md). Verze, kterou můžete používat, závisí také na verzi Androidu ve vašem telefonu.

Tabulka neuvádí datum konce podpory pro každou verzi AAPS. Pokud vaše verze chybí, její datum konce podpory možná ještě nebylo stanoveno. To neznamená, že bude podporována navždy.

## Data konce podpory verzí AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Načítání dat o verzích AAPS…</div>
<noscript>
  Pro zobrazení tabulek zapněte JavaScript.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Verze AAPS</th><th scope="col">Datum konce podpory</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Úrovně API Androidu

Android přiřazuje každé verzi systému **úroveň API**, což je číslo, které používají aplikace. Například úroveň API 30 odpovídá Androidu 11. Tabulka níže používá úrovně API z dat o verzích AAPS. Verze AAPS v každém řádku je hodnota uvedená pro zobrazenou úroveň API. Nejde o úplný seznam verzí, které můžete nainstalovat.

Při výběru verze AAPS pro váš telefon použijte [doporučení k verzím Androidu v Poznámkách k vydání](#maintenance-android-version-aaps-version). Pokud pro úroveň API není uvedena žádná verze AAPS, tabulka zobrazí „None listed“ (žádná není uvedena).

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Úroveň API Androidu</th><th scope="col">Uvedená verze AAPS</th></tr></thead>
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
