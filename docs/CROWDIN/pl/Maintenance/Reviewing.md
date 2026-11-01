# Przegląd danych

## Przegląd historii AAPS

**AAPS** przechowuje całą Twoją historię (**BG**, leczenie, bazę, cele, **Zmiana profilu**, …) w lokalnej bazie danych na telefonie. Ta baza danych nie jest częścią [eksportu ustawień](../Maintenance/ExportImportSettings.md). Możesz ją przeglądać w samym **AAPS** za pomocą ekranu **Przegląd historii** i ekranu **Statystyki** opisanego poniżej. Do długoterminowych przeglądów i raportów wysyłaj dane do [Nightscout](../SettingUpAaps/Nightscout.md) lub [Tidepool](../SettingUpAaps/Tidepool.md).

Historię **AAPS** możesz przeglądać w **Przeglądzie historii**: otwórz **menu** (☰) i wybierz **Przegląd historii**.

![Przegląd historii](../images/v4/Screens/history_browser.png)

- Dotknij **karty z datą**, aby wybrać dzień, który chcesz przejrzeć.
- Wykresy otwierają się pomniejszone i pokazują **cały wybrany dzień**. Rozsuń dwa palce, aby powiększyć część wykresu.
- Użyj strzałek **<** i **>**, aby przejść o jeden dzień do tyłu lub do przodu, oraz **Teraz**, aby wrócić do bieżącego dnia.
- Wykresy pokazują te same dane co wykresy na ekranie głównym (BG, leczenie, baza, IOB, COB, aktywność, odchylenia...).

(reviewing-statistics)=
## Statystyki AAPS

**AAPS** pokazuje podstawowe statystyki do monitorowania.

Większość wartości opiera się na [zaleceniach](https://diabetesjournals.org/care/article/46/Supplement_1/S97/148053/6-Glycemic-Targets-Standards-of-Care-in-Diabetes) ADA 2023.

Aby je otworzyć, otwórz **menu** (☰) i wybierz **Statystyki**.

![Menu z pozycją Statystyki](../images/Maintenance/statistics.png)

Ekran **Statystyki** ma cztery karty: **Insulina**, **Czas w zakresie**, **Glukoza** i **Cykl**. Dotknij karty albo przesuń palcem w lewo lub w prawo, aby przechodzić między nimi.

(reviewing-tdd)=
### Karta Insulina: Dawka Dobowa Insuliny

Karta **Dawka Dobowa Insuliny** pokazuje jeden wiersz na każdy poprzedni dzień (maksymalnie tydzień), dla którego **AAPS** ma dane o insulinie, potem ich **Średnia**, a na końcu **Dzisiaj** (do tej chwili). Zaraz po instalacji **AAPS** widać tylko wiersz **Dzisiaj**. Kolumny to:

- **Baza**: tylko insulina bazowa.
- **Bolus**: suma bolusów i SMB.
- **TDD Całkowita**: całkowita dobowa dawka insuliny (**TDD**), suma insuliny z bolusów i bazy podanej w ciągu dnia.
- **Węglowodany**: wpisane węglowodany i eCarbs.

Sekcja **TDD** jest obliczana po otwarciu strony, co trwa kilka sekund. Dotknij **Przelicz**, aby obliczyć ją ponownie.

![Statystyki: karta Insulina z dawką dobową insuliny](../images/Maintenance/statistics2.png)

**TDD** to insulina z bolusów plus insulina bazowa na dobę. Niektórzy lekarze stosują – zwłaszcza u osób, które zaczynają z pompą – proporcję baza-bolus 50:50: całkowita dawka bazowa (**TBB**, suma dawek bazowych w ciągu 24 godzin) powinna wtedy wynosić około połowy TDD. Inni wolą TBB na poziomie 32–37% TDD.

Jak większość prostych zasad, ta też ma ograniczoną wartość w praktyce. Twoja cukrzyca może być inna!

### Karta Czas w zakresie

Czas w zakresie (**TIR**): 70–180 mg/dl lub 3,9–10 mmol/l.

Dane **TIR** są dostępne dla 7 i 30 dni, zależnie od ilości danych w bazie danych **AAPS**.

Poniżej są dostępne statystyki czasu w wąskim zakresie (TITR) 70–140 mg/dl lub 3,9–7,8 mmol/l (ekran pokazuje ten zakres jako 70-141).

**Omów cele ze swoim diabetologiem**

Twoja cukrzyca może być inna. Wszystkie proponowane cele omów ze swoim diabetologiem lub zespołem diabetologicznym. If used correctly, AAPS’ statistics can be an effective tool to follow __BG__ trends and monitor progress.

![Statystyki](../images/Maintenance/statistics3.png)

Niżej karta **Dexcom TIR** pokazuje szczegółowe statystyki **TIR** z 14 dni.

**SD**: odchylenie standardowe, [wskaźnik](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3125941/) zmienności BG (najwyższa wartość = najgorsza).

HbA1c: szacowana wartość hemoglobiny glikowanej, obliczona ze średniej z pomiarów CGM. To wartość orientacyjna, która może się różnić od wyniku HbA1c z badania krwi.

![Statystyki](../images/Maintenance/statistics4.png)

(reviewing-statistics-agp)=
### Karta Glukoza: ambulatoryjny profil glukozy (AGP)

**Ambulatoryjny profil glukozy** (**AGP**) pokazuje, jak zwykle zmienia się Twoja glukoza w ciągu dnia. Wybierz okres przyciskami u góry: **Dzisiaj**, **24h**, **7d**, **30d** lub **90d**.

- **Wykres**: jeden dzień od północy do północy. Linia to **Mediana** (połowa Twoich odczytów o tej godzinie była niższa, połowa wyższa). Wokół niej jedno pasmo obejmuje środkową połowę odczytów (**25–75%**), a szersze pasmo większość z nich (**10–90%**). Wąskie pasmo oznacza, że o tej godzinie glukoza jest podobna każdego dnia. Linie przerywane pokazują Twój **Znacznik NISKI**, 140 mg/dl (7,8 mmol/l) i Twój **Znacznik WYSOKI**.
- **Przegląd glikemii**: czas w Twoim zakresie, w wąskim zakresie (70–140 mg/dl lub 3,9–7,8 mmol/l), powyżej i poniżej Twojego zakresu, a potem Twoja **Średnia** i **Mediana** glukozy. Twój zakres to **Znacznik NISKI** i **Znacznik WYSOKI** ustawione w [Zakres do wizualizacji (na wykresie)](#Preferences-range-for-visualization).
- **eA1c** i **GMI**: dwie wartości szacunkowe HbA1c obliczone z Twoich odczytów CGM. Tak jak HbA1c powyżej, mogą się różnić od wyników HbA1c z badania krwi.
- **SD** (odchylenie standardowe) i **CV** (współczynnik zmienności): jak bardzo zmienia się Twoja glukoza. Niższa wartość oznacza bardziej stabilną glukozę.
- **Dni**: z ilu dni danych CGM skorzystano.

![Statystyki: karta Glukoza z wykresem AGP](../images/Maintenance/statistics_agp.png) ![Statystyki: przegląd glikemii i wskaźniki glukozy](../images/Maintenance/statistics_agp2.png)

Pod AGP karta **Pentagon glukozy (CGP)** rysuje pięć miar Twojej glukozy z ostatnich 14 dni jako pięciokąt. Mniejszy pięciokąt oznacza lepszą kontrolę glukozy.

![Statystyki: Pentagon glukozy](../images/Maintenance/statistics_cgp.png)

### Karta Cykl: Wzorce cykli TDD

**Wzorce cykli TDD** nakładają na siebie Twoje dobowe sumy insuliny w cyklach 28-dniowych, aby pomóc Ci zauważyć powtarzające się wzorce. Każdy cykl jest rysowany jako linia (**Pojedyncze cykle**), razem z ich średnią.

- **Surowe TDD** / **Oczyszczone TDD**: wybierz dawkę dobową w takiej postaci, w jakiej została podana, albo TDD minus insulina na posiłki.
- **Przesunięcie cyklu**: przesuwa początek cyklu (od 0 do 27 dni).

Potrzeba co najmniej 56 dni danych (2 cykle). Przy mniejszej ilości danych karta pokazuje **Za mało danych (potrzeba co najmniej 56 dni dla 2 cykli).** Wzorzec jest obliczany dopiero po otwarciu karty **Cykl**, bo odczytuje dane z 168 dni.

(aaps-screens-treatments)=
## Historia leczenia

Otwórz **menu** (☰) w lewym górnym rogu ekranu głównego i wybierz **Historia leczenia**. Tutaj możesz przeglądać i zmieniać historię następujących rodzajów leczenia, każdy na osobnej karcie (przesuń rząd kart, aby zobaczyć wszystkie):

* Węglowodany i bolus
* [Bolus Przedłużony](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Baza tymczasowa
* [Cel tymczasowy (TT)](../DailyLifeWithAaps/TempTargets.md)
* [Zmiana profilu](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Portal opieki: notatki i wpisy portalu opieki
* Tryb pracy: historia stanu pętli
* Wpis użytkownika: inne notatki, które nie są wysyłane do Nightscout

Na końcu każdego wiersza małe ikony pokazują, skąd pochodzą dane lub dokąd zostały wysłane:
* Ikona **Nightscout** (logo Nightscout): dane pochodzą z Nightscout lub zostały w nim zapisane
* Ikona **Pompa**: dane pochodzą z historii pompy (pompa je przetworzyła)
* Ikona **kosza**: wpis został usunięty (widać ją tylko wtedy, gdy wyświetlasz usunięte wpisy ikoną **oka** w prawym górnym rogu)

(screens-bolus-carbs)=
### Węglowodany i bolus

![Węglowodany i bolus](../images/TreatmentsView1.png)

Na tej karcie widzisz dziennik bolusów i węglowodanów. Przy każdym bolusie (wiersz **1**) obok ilości insuliny widać pozostałą związaną z nim IOB. Bolus może pochodzić z:
* Meal (manually entered through the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, gdy używasz funkcji SMB

Wpisy węglowodanów (wiersz **2**) są pokazane z ilością w gramach.

Jeśli dawka insuliny została obliczona [Kalkulatorem bolusa](#aaps-screens-bolus-wizard), możesz nacisnąć tekst „Kalk” w wierszu bolusa, aby zobaczyć szczegóły obliczenia.

Zależnie od pompy insulina i węglowodany mogą być pokazane w jednym wierszu albo w kilku wierszach: jeden ze szczegółami obliczenia, jeden z węglowodanami, jeden z samym bolusem.

Historii leczenia możesz użyć, aby poprawić błędne wpisy węglowodanów (_np._ gdy przeszacowałeś lub niedoszacowałeś węglowodany). Pamiętaj, że nie da się edytować istniejącego wpisu. Musisz postąpić tak:

1. Sprawdź i zapamiętaj aktualne COB i IOB na ekranie głównym.
2. Zależnie od pompy węglowodany mogą być pokazane razem z insuliną w jednym wierszu albo jako osobny wpis (np. w Dana RS).
3. Usuń wpis z błędną ilością węglowodanów: naciśnij ikonę kosza, zaznacz wiersze do usunięcia, a potem naciśnij ikonę kosza jeszcze raz, aby zakończyć.
4. Upewnij się, że węglowodany zostały usunięte – ponownie sprawdź COB na ekranie głównym.
5. Zrób to samo dla IOB, jeśli jest tylko jeden wiersz z węglowodanami i insuliną.

   → Jeśli węglowodany nie zostaną usunięte zgodnie z zamiarem, a dodasz kolejne węglowodany, jak opisano tutaj (6.), COB będzie za wysokie, co może prowadzić do podania za dużej ilości insuliny.

6. Wpisz ponownie prawidłową ilość węglowodanów (**Leczenie → Węglowodany** na dolnym pasku nawigacji albo przycisk **Węglowodany** na pasku [QuickLaunch](#quicklaunch)) i ustaw prawidłowy czas zdarzenia.
7. Jeśli jest tylko jeden wiersz z węglowodanami i insuliną, musisz dodać także ilość insuliny. Ustaw prawidłowy czas zdarzenia i po zatwierdzeniu nowego wpisu sprawdź IOB na ekranie głównym.

### Baza tymczasowa

![Baza tymczasowa](../images/TreatmentsView2.png)

Tutaj widać **bazy tymczasowe** ustawione przez pętlę. Gdy wpis nadal wpływa na IOB, informacja o tym jest pokazana obok dawki (wiersz **1**). Może to być:
* Dodatnia IOB, jeśli baza tymczasowa była wyższa niż ustawiona w profilu
* Ujemna IOB przy zerowej bazie tymczasowej (jak w wierszu **1**) albo jeśli baza tymczasowa była niższa niż ustawiona w profilu

Deleting the entries only affects your reports in Nightscout and will probably distort your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend”: it happens when basal is not currently delivered. To normalna sytuacja, na przykład podczas wymiany poda.

### Cel tymczasowy (TT)

![Cel tymczasowy (TT)](../images/TreatmentsView3.png)

Tutaj widać historię celów tymczasowych.

### Zmiana profilu

![Zmiana profilu](../images/TreatmentsView4.png)

Tutaj widać historię zmian profilu. Przy każdej zmianie profilu możesz zobaczyć kilka wpisów: wiersz **1**, zapisany zarówno w NS, jak i w historii pompy, odpowiada faktycznej zmianie. Wiersz **2**, zapisany w Nightscout, ale nie w historii pompy, odpowiada żądaniu zmiany profilu wysłanemu przez użytkownika.

Usunięcie wpisów zmienia tylko Twoje raporty w Nightscout i nigdy nie zmieni aktualnego profilu.

Przyciskiem **Sklonuj** w wierszu **2** możesz utworzyć kopię **Zmiany profilu**. Więcej informacji znajdziesz w [Twój profil AAPS > Zarządzanie profilami](#your-aaps-profile-clone-profile-switch).

### Portal opieki

![Portal opieki](../images/TreatmentsView5.png)

Ta karta pokazuje wszystkie notatki i wpisy portalu opieki zapisane w Nightscout.

(AapsScreens-running-mode)= (aaps-screens-running-mode)=
### Tryb pracy

![Tryb pracy](../images/TreatmentsView6.png)

This tab shows the history of [loop status](#AapsScreens-loop-status) changes: open, closed, LGS, suspend, disconnect.

### Wpis użytkownika

![Wpis użytkownika](../images/screens/treatments_user_entry.png)

Ta karta pokazuje działania wykonane w **AAPS** przez użytkownika lub przez **Automatyzację** (zmiany trybu pętli, zmiany profilu, leczenie, eksport ustawień...). Te wpisy nie są wysyłane do Nightscout.

------

## Czym różni się Nightscout od Tidepool?

Nightscout może przechowywać dane **AAPS** i ma wiele [narzędzi do raportów](https://nightscout.github.io/nightscout/reports/).

Tidepool natomiast pozwala [przeglądać dane](https://www.tidepool.org/viewing-your-data) i [łatwo udostępniać je zespołowi diabetologicznemu](https://www.tidepool.org/providers/how-it-works#tidepool-data-platform).