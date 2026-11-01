(widgets)=
# Widżety na ekranie głównym

**AAPS** ma widżety, które możesz dodać do ekranu głównego telefonu. Widżet pokazuje Twoje aktualne dane bez otwierania aplikacji. Dotknij widżetu, aby otworzyć **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Dostępne widżety

Dostępnych jest pięć widżetów. Znajdziesz je pod nazwą **AAPS** na liście widżetów Androida:

![Widżety AAPS na liście widżetów Androida](../images/widgets/widget_picker_aaps.png)

| Widżet                               | Rozmiar domyślny | Co pokazuje                                                                                                                                                                                                                                                |
| ------------------------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Widżet AAPS**                      | 5 × 2            | The status block of the main screen: BG with trend and delta, the loop mode as an icon beside the profile name, target, sensitivity (shown as on the main screen), IOB and COB. The texts shrink to fit the size you give the widget instead of being cut. |
| **Koło glikemii AAPS**               | 2 × 2            | Koło BG z ekranu głównego: pierścień w kolorze BG, łuk trendu, delta, wartość BG i czas od ostatniego odczytu.                                                                                                                                             |
| **Mały widżet AAPS**                 | 2 × 2            | Nazwa profilu, BG ze strzałką trendu, czas od ostatniego odczytu, delta, IOB i COB.                                                                                                                                                                        |
| **AAPS BG + IOB + COB (kompaktowy)** | 4 × 1            | Jedna linia z BG i strzałką trendu, IOB i COB.                                                                                                                                                                                                             |
| **Wykres BG AAPS**                   | 3 × 1            | Wartość BG z małym wykresem ostatnich odczytów.                                                                                                                                                                                                            |

**Widżet AAPS**, **koło glikemii** i widżet **Mały** na ekranie głównym:

![Widżet AAPS, koło glikemii i mały widżet na ekranie głównym](../images/widgets/home_widgets_full_circle_small.png)

Widżet **kompaktowy** i widżet **Wykres BG**:

![Widżet kompaktowy i widżet Wykres BG na ekranie głównym](../images/widgets/home_widgets_compact_graph.png)

Wartości BG mają te same kolory co w **AAPS**: zielony w zakresie, żółty powyżej zakresu, czerwony poniżej zakresu.

---

## Dodawanie widżetu

Dokładne kroki zależą od Twojego telefonu i jego launchera (ekranu startowego). Na większości telefonów:

1. Przytrzymaj puste miejsce na ekranie głównym i wybierz **Widżety**.

   ![Lista widżetów](../images/widgets/widget_picker_list.png)

2. Otwórz **AAPS** na liście i dotknij wybranego widżetu.
3. Naciśnij **Dodaj** (albo przeciągnij widżet w wybrane miejsce).

   ![Przycisk Dodaj pod wybranym widżetem](../images/widgets/widget_picker_add_button.png)

Widżet zostanie umieszczony na ekranie głównym. Zaraz po dodaniu widżet ma uchwyty: przeciągnij uchwyt, aby **zmienić rozmiar** widżetu, albo przeciągnij widżet, aby go przesunąć. Rozmiar koła glikemii można dowolnie zmieniać.

![Właśnie dodany widżet z uchwytami do zmiany rozmiaru i przyciskiem ustawień](../images/widgets/widget_glucose_circle_added.png)

Jeśli strona ekranu głównego jest pełna, telefon umieści widżet na nowej stronie.

---

## Konfiguracja widżetu

Dotknij przycisku z **ołówkiem**, który widać na widżecie zaraz po jego dodaniu. Później przytrzymaj widżet, aby znowu zobaczyć uchwyty i ołówek.

Okno **Konfiguracja widżetu** ma dwa ustawienia:

- **Skonfiguruj przezroczystość** — jak bardzo nieprzezroczyste jest tło widżetu. Przy niskiej wartości widać przez nie tapetę.
- **Użyj czarnego koloru** — użyj czarnego tła zamiast domyślnego.

![Konfiguracja widżetu](../images/widgets/widget_configuration.png)

Każdy widżet ma własną konfigurację.

---

## Dobrze wiedzieć

- Widżet tylko **wyświetla** dane. Z widżetu nie możesz podać bolusa ani niczego zmienić.
- Widżet jest odświeżany przez **AAPS**. Jeśli **AAPS** nie działa albo Android ogranicza jego pracę w tle, widżet może pokazywać stare dane. Sprawdź czas od ostatniego odczytu i upewnij się, że **AAPS** jest wyłączony z [optymalizacji baterii](#SetupWizard-StoragePermission).
- W **AAPSClient**, **AAPSClient2** i **AAPSClient3** tło widżetu jest żółte, niebieskie lub zielone, aby można było odróżnić te aplikacje. Jeśli kolor jest słabo widoczny, zwiększ nieprzezroczystość w konfiguracji widżetu. Zobacz [Informacje o AAPSClient, AAPSClient2 i AAPSClient3](#remotecontrol-aapsclient-versions).
