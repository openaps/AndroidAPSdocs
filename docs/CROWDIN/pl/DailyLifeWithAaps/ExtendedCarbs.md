(Extended-Carbs-extended-carbs-ecarbs)=
# Przedłużone węglowodany / „eCarbs”

## Czym są eCarbs i kiedy są przydatne?

W zwykłej terapii pompą bolusy przedłużone dobrze sprawdzają się przy posiłkach tłustych lub innych wolno wchłanianych posiłkach, które podnoszą glikemię dłużej, niż działa insulina. W pętli bolusy przedłużone nie mają jednak większego sensu (i sprawiają problemy techniczne), bo są w zasadzie stałą, wysoką bazą tymczasową. To jest sprzeczne z tym, jak działa pętla, czyli z dynamicznym dostosowywaniem dawki bazowej. Szczegóły znajdziesz poniżej w części [bolus przedłużony](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment).

Potrzeba obsługi takich posiłków jednak nadal istnieje. Dlatego AAPS obsługuje tak zwane przedłużone węglowodany, czyli eCarbs.

eCarbs to węglowodany rozłożone na kilka godzin. Przy zwykłych posiłkach, w których jest więcej węglowodanów niż tłuszczu/białka, zwykle wystarczy wpisać węglowodany od razu (i w razie potrzeby zmniejszyć pierwszy bolus), aby uniknąć zbyt wczesnego podania insuliny.  Przy posiłkach wolniej wchłanianych, gdy wpisanie wszystkich węglowodanów od razu daje zbyt dużo IOB z SMB, możesz użyć eCarbs. Pozwalają one dokładniej odwzorować, jak węglowodany (i równoważniki węglowodanów, które wpisujesz dla innych makroskładników) są wchłaniane i jak wpływają na glikemię. Dzięki tej informacji pętla może podawać SMB bardziej stopniowo, aby pokryć te węglowodany. Można to traktować jak dynamiczny bolus przedłużony (powinno to działać także bez SMB, ale zapewne mniej skutecznie).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Jak używać eCarbs

Aby wpisać eCarbs, otwórz okno **Węglowodany** (**Leczenie** → **Węglowodany**), wpisz łączną ilość węglowodanów, ustaw **Czas trwania** i opcjonalnie przesuń początek za pomocą **Czas węglowodanów** (*liczby poniżej to tylko przykłady, musisz wypróbować własne wartości, aby uzyskać zadowalającą reakcję glikemii w swoich sytuacjach*):

![Wpisz węglowodany](../images/eCarbs_Dialog.png)

eCarbs na ekranie głównym: liczba w nawiasie w polu **COB** pokazuje węglowodany, które mają jeszcze nadejść, a wykres **COB** pokazuje każdy przyszły wpis eCarbs jako pomarańczowy znacznik. Jeśli nie widzisz wykresu **COB**, dodaj go przyciskiem **Dodaj wykres** pod wykresami (zobacz [Ekrany AAPS](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs w polu COB i na wykresie COB](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Typ węglowodanów w Kalkulatorze bolusa: pieczywo, ciasto lub pizza

W [Kalkulatorze bolusa](#aaps-screens-bolus-wizard) trzy przyciski pod polem **Węglowodany** pozwalają wybrać, jak szybko wchłania się Twój posiłek. Wybierz jeden z nich przed potwierdzeniem. W zależności od typu **AAPS** traktuje część wpisanych węglowodanów jako zwykłe węglowodany, a przy wolno wchłanianych, sycących posiłkach dodaje później [przedłużone węglowodany („eCarbs”)](#Extended-Carbs-extended-carbs-ecarbs). Naciśnij ikonę **(i)** obok przycisków, aby zobaczyć typowe produkty dla wybranego typu i to, co ten typ robi z Twoimi węglowodanami.

| Typ                      | Typowe produkty (jak w aplikacji)                                                                                            | Węglowodany teraz, użyte do bolusa | Dodane eCarbs                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------ |
| **Pieczywo** (domyślnie) | Pieczywo, wytrawne wypieki, jogurt, owoce, ziemniaki, ryż, płatki owsiane, warzywa                                           | 100%                               | Brak                                                   |
| **Ciasto**               | Pierogi, makaron, kuchnia azjatycka bogata w węglowodany i tłuszcze, słodkie i drożdżowe wypieki, płatki zbożowe, miód, dżem | 90%                                | 20%, początek 60 minut później, rozłożone na 2 godziny |
| **Pizza**                | Lasagne, pizza, hamburgery, frytki, pieczone ziemniaki, chipsy                                                               | 80%                                | 35%, początek 60 minut później, rozłożone na 3 godziny |

**Przykład**: wpisujesz 100 g i wybierasz **Pizza**. Bolus jest obliczany dla 80 g, zapisanych teraz. 35 g eCarbs zaczyna się 1 godzinę później i jest rozłożone na 3 godziny.

Warto wiedzieć:
* To nie jest zwykły podział: przy typach **Ciasto** i **Pizza** zapisane węglowodany dają w sumie **więcej, niż wpisałeś** (110% i 115%). Nadwyżka jest tylko w eCarbs.
* Bolus pokrywa tylko węglowodany zjedzone teraz. **AAPS** nie podaje bolusa z góry na eCarbs: pętla uwzględnia je, gdy się zaczną, tak jak wszystkie inne [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* Jeśli ustawisz **Czas węglowodanów**, eCarbs zaczynają się 60 minut po tym czasie.
* Okno potwierdzenia pokazuje eCarbs w osobnym wierszu, _np._ „eCarbs 35 g / 3 h (+60 min)”.
* Gramy są zaokrąglane w dół do liczb całkowitych.
* Procenty, opóźnienia i czasy trwania są stałe; nie można ich zmienić w ustawieniach.
* Wybór nie jest zapamiętywany: kalkulator za każdym razem otwiera się z wybranym typem **Pieczywo**.

______________________________________________________________________

Sposób obsługi tłuszczu i białka za pomocą tej funkcji opisano tutaj: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Zalecana konfiguracja, przykładowy scenariusz i ważne uwagi

Zalecana konfiguracja to wtyczka APS OpenAPS SMB z włączonymi SMB oraz z włączonym ustawieniem *Włącz SMB z COB*.

Przykładowo przy pizzy możesz podać (częściowy) bolus od razu przez *Kalkulator bolusa*, a potem w oknie *Węglowodany* wpisać pozostałe węglowodany z czasem trwania 4–6 godzin, z początkiem po 1 lub 2 godzinach.

Szybciej będzie, jeśli *Kalkulator bolusa* doda eCarbs za Ciebie: wybierz [typ węglowodanów](#AapsScreens-carbs-type) **Ciasto** lub **Pizza** pod polem **Węglowodany** (zobacz powyżej). Ilości i czasy są stałe, więc jeśli chcesz inne wartości, użyj okna *Węglowodany*.

**Ważne uwagi:** Oczywiście musisz sam sprawdzić, jakie konkretne wartości działają u Ciebie. Możesz też ostrożnie zmienić ustawienie *Maks. minut bazy dostarczone jako SMB*, aby algorytm był bardziej lub mniej agresywny. Przy posiłkach z małą ilością węglowodanów i dużą ilością tłuszczu/białka może wystarczyć użycie samych eCarbs, bez ręcznych bolusów (zobacz wpis na blogu powyżej). Gdy eCarbs są tworzone, powstaje też notatka w Portalu opieki, która zapisuje wszystkie wpisane dane. Dzięki temu łatwiej jest krok po kroku poprawiać swoje wartości.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Bolus przedłużony i dlaczego nie działa w zamkniętej pętli?

Jak wspomniano powyżej, bolusy przedłużone lub wielofalowe nie działają dobrze w zamkniętej pętli. [See below](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bolus przedłużony i przejście na otwartą pętlę - tylko pompy Dana i Insight

Niektórzy prosili o możliwość używania bolusa przedłużonego w AAPS mimo to, bo chcieli leczyć niektóre posiłki tak, jak są przyzwyczajeni.

Dlatego **AAPS** oferuje bolus przedłużony użytkownikom pomp Dana i Insight: otwórz **Zarządzaj** i wybierz **Bolus Przedłużony**.

**AAPS** najpierw ostrzega, że zamknięta pętla zostanie zatrzymana na czas trwania bolusa przedłużonego. Naciśnij **OK**, aby kontynuować:

![Ostrzeżenie: bolus przedłużony zatrzymuje tryb zamkniętej pętli](../images/extended_bolus_stops_loop.png)

Wpisz ilość **Insulina** i **Czas trwania**, potem naciśnij przycisk potwierdzenia na dole i **OK**:

![Okno bolusa przedłużonego z 2 U na 60 minut](../images/extended_bolus_dialog.png)

W pompie Insight bolus przedłużony *nie jest dostępny*, jeśli używasz [emulacji TBR](#Accu-Chek-Insight-Pump-settings-in-aaps).

Gdy trwa bolus przedłużony, pętla działa w trybie **Otwarta pętla** (zmienia się ikona pętli na ekranie głównym). Zamknięta pętla włącza się znowu automatycznie, gdy bolus przedłużony się skończy:

![Ikona otwartej pętli na ekranie głównym, gdy trwa bolus przedłużony](../images/extended_bolus_main_screen.png)

Menu **Zarządzaj** pokazuje przycisk **Anuluj** z dawką oraz czasem, który minął / całkowitym czasem (na przykład **Anuluj 2,00 U/h 1/60'**). Naciśnij go, aby wcześniej zatrzymać bolus przedłużony:

![Przycisk Anuluj trwającego bolusa przedłużonego w menu Zarządzaj](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Dlaczego bolusy przedłużone nie działają w zamkniętej pętli

1. Pętla ustala, że teraz należy podawać 1,55 U/h. Dla algorytmu nie ma znaczenia, czy zostanie to podane jako bolus przedłużony, czy jako TBR. W rzeczywistości niektóre pompy używają do tego bolusa przedłużonego. Co ma się wtedy stać? Większość sterowników pomp zatrzymuje wtedy bolus przedłużony -> Nie trzeba było go nawet uruchamiać.

2. Gdyby bolus przedłużony był danymi wejściowymi, co powinno się stać w modelu?

   1. Czy powinien być uznany za neutralny razem z dawką bazową (BR) i pętla powinna na nim działać? Czy wtedy pętla powinna też móc zmniejszyć bolus, jeśli na przykład glikemia spada za nisko i cała „neutralna” insulina zostaje odebrana?
   2. Czy bolus przedłużony powinien być po prostu dodany? Czy pętla powinna po prostu działać dalej? Nawet przy najgorszej hipoglikemii? Nie uważam, że to dobre rozwiązanie: hipoglikemia jest przewidziana, ale nie wolno jej zapobiec?

3. IOB, które buduje bolus przedłużony, pojawia się po 5 minutach przy następnym przebiegu pętli. W związku z tym pętla podałaby mniej bazy. Więc niewiele się zmienia... poza tym, że tracisz możliwość uniknięcia hipoglikemii.
