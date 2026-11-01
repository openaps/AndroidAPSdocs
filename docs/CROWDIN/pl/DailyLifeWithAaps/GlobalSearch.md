(global-search)=
# Wyszukiwanie globalne

**AAPS** v4 ma pole **wyszukiwania globalnego** na górze ekranu głównego. Wpisz słowo, a wyszukiwanie przejrzy od razu całą aplikację — wtyczki, dialogi, ekrany ustawień, pojedyncze ustawienia — a jeśli masz internet, także **dokumentację AndroidAPS**. To najszybszy sposób, aby przejść do ustawienia lub ekranu bez pamiętania, gdzie się znajduje.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otwieranie wyszukiwania

Naciśnij pole **🔍 Szukaj** na górze **ekranu głównego** (obok menu ☰). Zacznij pisać, a wyniki pojawią się w trakcie pisania (po krótkiej przerwie), pogrupowane według kategorii:

![Wyniki wyszukiwania globalnego pogrupowane według kategorii](../images/v4/Search/search_results.png)

Wyczyść pole przyciskiem **✕** albo zamknij wyszukiwanie przyciskiem **Wstecz** urządzenia.

---

## Szukaj po angielsku *lub* w swoim języku

To warto wiedzieć: wyszukiwanie porównuje tekst **zarówno** w **wybranym języku**, **jak i** oryginalny tekst **angielski**.

- Jeśli Twoja aplikacja jest na przykład po niemiecku lub po czesku, możesz wpisać słowo **przetłumaczone** **lub** słowo **angielskie** — każde z nich znajdzie ustawienie.
- Najwyżej w wynikach jest dopasowanie do **przetłumaczonego** tytułu, potem do tytułu **angielskiego**, a potem do przetłumaczonych i angielskich **opisów**.
- Dopasowanie ignoruje **akcenty/znaki diakrytyczne** (więc *ů* pasuje do *u*, a *é* do *e*) i **nie rozróżnia wielkości liter**.

Dzięki temu poradnik lub wpis na forum napisany po angielsku nadal doprowadzi Cię do właściwego ustawienia, nawet gdy telefon pokazuje wszystko w Twoim języku.

---

## Co obejmuje wyszukiwanie

Wyniki są pogrupowane w te kategorie:

- **Wtyczki** — każda wtyczka widoczna w Twojej wersji aplikacji (te same, które są wymienione w [Konfiguracji](../SettingUpAaps/ConfigBuilder.md)). Każdy wiersz wtyczki ma swój **przełącznik włączania**, więc możesz włączyć lub wyłączyć wtyczkę prosto z wyników — naciśnięcie wiersza wyłączonej (przełączalnej) wtyczki włącza ją.
- **Dialogi** — ekrany leczenia/akcji i zarządzania (Kalkulator bolusa, Insulina, Bolus Przedłużony, Kalibracja, Cel tymczasowy, Profil, …). Ekrany, które nie dotyczą Twojej wersji aplikacji, są pomijane (na przykład *Sparuj z telefonem pacjenta* na urządzeniu pacjenta, *Autoryzowani opiekunowie* na urządzeniu opiekuna).
- **Kategorie ustawień** — **ekrany** ustawień i ich podekrany, zarówno wbudowane (Ogólne, Wygląd, Ochrona aplikacji, Alarmy, Konserwacja, …), jak i z wtyczek, oraz małe grupy ustawień otwierane z dialogów (przyciski Wypełnij, kroki przycisków Insulina/Węglowodany, progi wskaźników stanu, ustawienia kalkulatora, …).
- **Ustawienia** — każde **pojedyncze ustawienie**, które ma tytuł. Są one filtrowane według Twojej wersji/trybu, więc widzisz tylko ustawienia, które naprawdę mają zastosowanie (APS / NSClient / sterowanie pompą).
- **Dokumentacja** — strony z dokumentacji **AndroidAPS** online (zobacz poniżej).

```{admonition} Settings that belong to a disabled plugin
:class: note
Ustawienie, którego wtyczka jest obecnie **wyłączona**, nadal się pokazuje — **wyszarzone** i nieaktywne — z notatką *„Wtyczka … wyłączona”*, więc wiesz, że ustawienie istnieje i którą wtyczkę włączyć, aby do niego dojść.

![Wyszarzone ustawienie z wyłączonej wtyczki](../images/v4/Search/search_disabled_plugin.png)
```

---

## Wyniki z dokumentacji (online)

W czasie wyszukiwania lokalnego **AAPS** równolegle przeszukuje też oficjalną **dokumentację AndroidAPS** (na ReadTheDocs). Pasujące strony pojawiają się na dole w grupie **Dokumentacja**, każda z ikoną 📖, tytułem sekcji i krótkim fragmentem tekstu:

![Wyniki z dokumentacji (wiki) z fragmentami tekstu](../images/v4/Search/search_documentation.png)

- Jeśli dokumentacja jest przetłumaczona na język Twojej aplikacji, **AAPS** przeszukuje jednocześnie przetłumaczone strony i strony angielskie. Najpierw są strony w Twoim języku, potem strony angielskie, których jeszcze nie znaleziono.
- Naciśnięcie wyniku z dokumentacji otwiera tę stronę w **przeglądarce**.
- Wyszukiwanie w dokumentacji wymaga **internetu** — gdy jesteś offline, zamiast wyników widzisz notatkę *„Wyszukiwanie w dokumentacji wymaga połączenia z internetem”*, a wyniki lokalne (z aplikacji) nadal działają normalnie.

---

## Otwieranie wyniku

Naciśnij wynik, aby przejść prosto do niego:

- **Wtyczka** → otwiera tę wtyczkę.
- **Dialog** → otwiera ten ekran lub dialog.
- **Kategoria ustawień** → otwiera ten ekran ustawień.
- **Ustawienie** → otwiera ustawienie **na miejscu** (przewija do niego na jego ekranie).
- **Dokumentacja** → otwiera stronę w przeglądarce.

Opening settings and protected actions still respects your **[protection](#Preferences-protection)** (PIN/password), exactly as it would if you had navigated there by hand. Po wykonaniu akcji z wyniku możesz nacisnąć **Wstecz**, aby wrócić do wyników wyszukiwania.

---

## Skróty dla zaawansowanych

Dwa specjalne zapytania pokazują od razu całą kategorię:

- `%PLUGINS%` — pokazuje **wszystkie** wtyczki.
- `%DIALOGS%` — pokazuje **wszystkie** dialogi/ekrany akcji.

---

```{admonition} The index stays current
:class: note
Indeks wyszukiwania jest budowany przy pierwszym wyszukiwaniu i potem pozostaje gotowy. Jest automatycznie budowany ponownie, gdy **włączysz/wyłączysz wtyczkę** lub **zmienisz język aplikacji**, więc wyniki zawsze odpowiadają Twojej obecnej konfiguracji.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
