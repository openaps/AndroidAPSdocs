(quickwizards)=
# Szybki kalkulator (bolusy jednym dotknięciem)

**Szybki kalkulator** to zapisany przycisk do szybkiego użycia dla posiłku lub sytuacji, która często się powtarza. Zawiera stałą ilość **węglowodanów** (i sposób dawkowania dla nich). Dzięki temu podasz bolus — albo tylko zapiszesz węglowodany — jednym dotknięciem i potwierdzeniem, bez otwierania za każdym razem pełnego kalkulatora bolusa.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Otwieranie szybkiego kalkulatora

Otwórz ekran **Zarządzaj** (dolny pasek nawigacji) i wybierz **Szybki kalkulator** (*„Zarządzaj ustawieniami szybkiego kalkulatora”*).

---

## Zarządzanie szybkimi kalkulatorami

Twoje szybkie kalkulatory są pokazane jako **karuzela kart, którą przewijasz palcem** (każda karta pokazuje tekst przycisku, węglowodany i zakres czasu ważności). Edytor poniżej ustawia **wybrany** szybki kalkulator. Dolny pasek akcji ma przyciski **➕ dodaj**, **⧉ sklonuj**, **🗑️ usuń** oraz przycisk **▶**, który uruchamia wybrany szybki kalkulator.

![Edytor szybkiego kalkulatora — tryb, węglowodany, czas węglowodanów i zakres czasu ważności](../images/v4/QuickWizard/quickwizard_editor.png)

Główne pola edytora to:

- **Tekst przycisku** — napis pokazany na przycisku.
- **Węglowodany** i **Czas węglowodanów** — ilość węglowodanów i ich przesunięcie w czasie.
- **Zakres czasu ważności** — zobacz [Ważność](#quickwizard_validity).
- **Opcje kalkulatora** i **Wybór urządzenia** — zobacz poniżej.

---

## Trzy tryby

Przełącznik na górze edytora — **Kreator / Insulina / Węglowodany** — decyduje, **co robi przycisk** po dotknięciu:

- **Kreator** — uruchamia pełny **kalkulator bolusa** dla ustawionych węglowodanów i używa Twoich aktualnych wartości **BG, IOB, COB i trendu** (zgodnie z *Opcjami kalkulatora* poniżej). Podaje *obliczony* bolus i zapisuje węglowodany. To jest klasyczny szybki kalkulator.
- **Insulina** — podaje **stałą, ustawioną przez Ciebie dawkę insuliny** — bez obliczeń.
- **Węglowodany** — zapisuje **tylko ustawione węglowodany**, **bez bolusa**.

---

## Opcje kalkulatora (tryb Kreator)

Dla przycisku w trybie **Kreator** wybierasz, których danych używają obliczenia:

- **Użyj BG**, **Użyj COB**, **Użyj IOB** (z opcją *Tylko dodatnie wartości IoB*), **Użyj trendu** (*Każdego / Tylko rosnącego / Tylko malejącego*), **Użyj celu tymczasowego**, **Użyj alarmu**.
- **Procent bolusa** — zmienia obliczony bolus o podany procent.
- **Dodaj eCarbs** — dodatkowo planuje rozłożone węglowodany (eCarbs).

![Opcje kalkulatora, procent bolusa i wybór urządzenia](../images/v4/QuickWizard/quickwizard_options.png)

---

## Ważność — kiedy przycisk się pojawia

(quickwizard_validity)= **Zakres czasu ważności** (*Od / Do*) określa, **kiedy** szybki kalkulator jest widoczny i można go użyć. Przycisk ustawiony na przykład na **06:00–10:00** pojawia się tylko rano. Dzięki temu szybki kalkulator *Śniadanie* nie zaśmieca ekranu przy kolacji (i nie zostanie dotknięty przez pomyłkę). Poza swoim oknem czasu przycisk jest ukryty w panelu **Leczenie** i na [pasku QuickLaunch](QuickLaunch.md). Przycisk na pasku nie jest usuwany: wraca, gdy okno czasu znowu się otworzy.

Gdy zakres czasu ważności jest krótszy niż 4 godziny, przycisk jest też ukryty przez 30 minut po użyciu. Dzięki temu ten sam posiłek nie zostanie wpisany dwa razy przez pomyłkę.

---

## Miejsca uruchamiania — gdzie go używasz

Przełączniki **Wybór urządzenia** decydują, gdzie pojawia się każdy szybki kalkulator:

- **Pokaż na telefonie** — pojawia się w **panelu [Leczenie](../Maintenance/V4Changes.md)** (obliczona dawka jest pokazana od razu na przycisku). Szybki kalkulator pokazany na telefonie można też **przypiąć jako przycisk szybkiej akcji na ekranie głównym**: otwórz *Konfiguracja szybkich akcji* (⚙ na pasku [QuickLaunch](QuickLaunch.md)) i dodaj go z kategorii **Szybki kalkulator**.
- **Pokaż na zegarku** — pojawia się na **kafelku Szybki kalkulator w Wear OS** (przewiń do niego w karuzeli kafelków zegarka, a potem dotknij przycisku, aby go uruchomić — tak samo jak [kafelek Scena](#scenes-from-watch)).

```{admonition} Don't see Device Selection?
:class: note
Sekcja **Wybór urządzenia** pojawia się w edytorze tylko wtedy, gdy wtyczka **Wear** jest włączona, a jej ustawienie **Sterowanie z zegarka** jest włączone. Bez tego każdy szybki kalkulator jest po prostu pokazany na telefonie.
```

Na telefonie szybkie kalkulatory pojawiają się na górze dolnego panelu **Leczenie**:

![Szybkie kalkulatory (na górze) w otwartym dolnym panelu Leczenie](../images/v4/QuickWizard/quickwizard_in_treatments.png)

…oraz jako przycisk szybkiej akcji na ekranie głównym:

![Przycisk szybkiej akcji Szybki kalkulator na ekranie głównym](../images/v4/QuickWizard/quickwizard_overview.png)

![Kafelek Szybki kalkulator na zegarku z Wear OS](../images/v4/QuickWizard/quickwizard_watch_tile.png)

Sparowane **urządzenie opiekuna** (**AAPSClient**) też może uruchomić szybki kalkulator — **urządzenie pacjenta** oblicza i podaje dawkę (zobacz [Sterowanie Master ↔ Client](../RemoteFeatures/ClientMasterControl.md)).

Bez względu na to, skąd go uruchomisz, dotknięcie szybkiego kalkulatora zawsze pokazuje **potwierdzenie**, zanim cokolwiek zostanie podane (przy uruchomieniu z urządzenia opiekuna lub zegarka jest to potwierdzenie przygotowane przez urządzenie pacjenta).

Szybki kalkulator jest odrzucany, gdy jego dawka jest większa niż Twój maksymalny bolus albo gdy jego węglowodany lub eCarbs są większe niż Twój limit węglowodanów (na przykład po obniżeniu limitu). Gdy węglowodany przekraczają limit, przycisk w panelu **Leczenie** jest nieaktywny. Zmień szybki kalkulator albo limit.

---

## Dodawanie i usuwanie

- **➕ Dodaj** — tworzy nowy szybki kalkulator.
- **⧉ Sklonuj** — tworzy kopię istniejącego jako punkt startowy.
- **🗑️ Usuń** — usuwa szybki kalkulator.

Gdy masz dwa lub więcej szybkich kalkulatorów, możesz też zmienić ich kolejność w karuzeli: dotknij ikony **Zmień kolejność** (⇅) na górnym pasku, przesuwaj kartę ze środka **przyciskami ◀ / ▶**, a potem potwierdź **✓**. (Przyciski wyglądają tak samo jak przy [zmianie kolejności profili](ProfileSwitch-ProfilePercentage.md)).

Szybkie kalkulatory są częścią synchronizowanej konfiguracji, więc są wspólne dla urządzenia pacjenta i sparowanych urządzeń opiekuna.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quickwizard_editor.png   (Manage → QuickWizard: carousel, mode, carbs, carb time, valid time range)
       - quickwizard_options.png  (Calculator Options, Bolus percentage, Device Selection)
       - quickwizard_overview.png (the QuickWizard quick-action button on the overview)
       - quickwizard_watch_tile.png (the Wear OS QuickWizard tile)
     No QuickWizard was actually run (no bolus delivered).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
