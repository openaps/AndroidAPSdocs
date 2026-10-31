# Koniec wsparcia

Nawet jeśli Twój obecny system AAPS działa dokładnie tak, jak chcesz, aktualizacja i tak się opłaca. Nowe wersje przynoszą poprawki bezpieczeństwa i błędów, których możesz nie zauważyć, dopóki nie staną się ważne. Zachowują zgodność z nowymi wersjami systemu telefonu, aplikacjami CGM, oprogramowaniem pomp i zmianami w Nightscout. Dodają ulepszenia algorytmu i funkcje sprawdzone przez szerszą społeczność. Dzięki nim zostajesz na wersji, która jest nadal wspierana i przy której inni naprawdę mogą Ci pomóc w rozwiązywaniu problemów. Niektóre starsze wersje AAPS celowo nie mają daty wygaśnięcia, aby mogły dalej działać na starszych wersjach Androida. Dlatego brak ostrzeżenia o wygaśnięciu nie oznacza, że Twoja wersja jest nadal aktualna lub wspierana.

Każda wersja AAPS może mieć datę końca wsparcia. Po tej dacie AAPS może [ograniczyć pętlę](#version-enforcement). AAPS ostrzega Cię, zanim wersja wygaśnie. Zaplanuj aktualizację przed datą końca wsparcia i postępuj według [instrukcji aktualizacji](UpdateToNewVersion.md).

## Jak korzystać z tej strony

1. W AAPS otwórz **menu** (☰) w lewym górnym rogu i wybierz **O aplikacji**. Zobaczysz tam swoją wersję AAPS.
2. Znajdź tę samą wersję w pierwszej tabeli poniżej. Odczytaj datę końca wsparcia obok niej. Daty są zapisane jako **rok-miesiąc-dzień**. Na przykład `2026-10-30` oznacza 30 października 2026.
3. Przed aktualizacją przeczytaj [Informacje o wersji](ReleaseNotes.md) oraz [instrukcję aktualizacji](UpdateToNewVersion.md). To, której wersji możesz używać, zależy też od wersji Androida w Twoim telefonie.

Tabela nie pokazuje daty końca wsparcia dla każdej wersji AAPS. Jeśli Twojej wersji brakuje, jej data końca wsparcia mogła jeszcze nie zostać ustalona. To nie znaczy, że będzie wspierana zawsze.

## Daty końca wsparcia wersji AAPS

<div id="aaps-eol-status" role="status" aria-live="polite">Wczytywanie danych o wersjach AAPS…</div>
<noscript>
  Włącz JavaScript, aby zobaczyć tabele.
</noscript>

<div id="aaps-eol-versions" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Wersja AAPS</th><th scope="col">Data końca wsparcia</th></tr></thead>
    <tbody></tbody>
  </table>
</div>

## Poziomy API Androida

Android nadaje każdej wersji systemu **poziom API**. Jest to liczba, której używają aplikacje. Na przykład poziom API 30 to Android 11. Tabela poniżej używa poziomów API z danych o wersjach AAPS. Wersja AAPS w każdym wierszu to wartość podana dla pokazanego poziomu API. To nie jest pełna lista wersji, które możesz zainstalować.

Aby wybrać wersję AAPS dla swojego telefonu, skorzystaj ze [wskazówek dotyczących wersji Androida w Informacjach o wersji](#maintenance-android-version-aaps-version). Jeśli dla danego poziomu API nie podano żadnej wersji AAPS, w tabeli jest napisane „Brak na liście”.

<div id="aaps-eol-android" class="wy-table-responsive" hidden>
  <table>
    <thead><tr><th scope="col">Poziom API Androida</th><th scope="col">Podana wersja AAPS</th></tr></thead>
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
      typeof entry.supported === 'string' && entry.supported ? entry.supported : 'Brak na liście'
    ]));
    status.remove();
  } catch {
    status.textContent = 'Nie można wczytać danych o wersjach AAPS. Spróbuj ponownie później.';
  }
});
</script>
```
