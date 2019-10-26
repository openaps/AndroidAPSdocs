# Zrzuty ekranów AndroidAPS

## Ekran główny

![Ekran główny w wersji 2.1](../images/Screenshot_Home_screen_V2_1.png)

To jest pierwszy ekran, który zobaczysz po uruchomieniu AndroidAPS, zawiera on większość informacji, których będziesz codziennie potrzebować

### Sekcja A

* nawigacja pomiędzy różnymi modułami AndroidAPS, przesuwając palcem w lewo lub w prawo

### Sekcja B

* change the loop status (open loop, closed loop, suspend loop etc)
* see your current profile and do a [profile switch](../Usage/Profiles.md)
* see your current target blood glucose level and set a [temporary target](../Usage/temptarget.md).

Naciśnij dłużej dowolny przycisk, aby zmienić ustawienie. I.e long press the target bar in the upper right ("110" in the screenshot above) to set a temp target.

### Sekcja C

* latest blood glucose reading from your CGM
* how long ago it was read
* changes in the last 15 and 40 minutes
* your current basal rate - including any temporary basal rate (TBR) programmed by the system
* insulin on board (IOB)
* carbs on board (COB)

The optional [status lights](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) give a visual warning for low reservoir and battery level as well as overdue site change.

Ilość insuliny na pokładzie wynosiłaby zero, gdyby działała tylko twója standardowa baza i nie było insuliny z poprzednich bolusów. The figures in brackets show how much consists of insulin remaining from previous boluses and how much is a basal variation due to previous TBRs programmed by AAPS. This second component may be negative if there have recently been periods of reduced basal.

### Sekcja D

Click the arrow on the right side of the screen in section D to select which information is displayed on the charts below.

### Sekcja E

Is the graph showing your blood glucose (BG) as read from your glucose monitor (CGM) it also shows Nightscout notifications such as fingerstick calibrations, and carbs entries.

Długo naciśnij wykres, aby zmienić skalę czasu. You can choose 6, 8, 12, 18 or 24 hours.

The extended lines show the predicted BG calculations and trends - if you have it selected.

* Orange line: COB (colour is used generally to represent COB and carbs)
* Dark blue line: IOB (colour is used generally to represent IOB and insulin)
* Light blue line: zero-temp
* Dark yellow line: UAM

Te linie pokazują różne przewidywania na podstawie aktualnej absorpcji węglowodanów (COB); tylko insuliny (IOB); pokazują, jak długo zajmie BG, aby wyrównać do/powyżej celu, jeśli odchylenia nagle ustaną, a do tego czasu mamy zerową bazę (zero-temp) i niezapowiedzianą detekcję posiłku, gdzie węglowodany są wykrywane, ale nie zostały wprowadzone do systemu przez użytkownika (UAM).

Stała niebieska linia pokazuje podstawową dawkę bazową dostarczaną przez Twoją pompę. Kropkowana niebieska linia pokazuje dawkę podstawową, jeśli nie byłoby tymczasowych zmian dawki bazowej (TBR), a stała niebieska linia jest rzeczywistą dostarczaną wartością w czasie.

### Sekcja F

This section also configurable using the options in section D. In this example we are showing the IoB (Insulin on Board) - if there were no TBRs and no remaining boluses this would be zero, the sensitivity, and the deviation. SZARE paski pokazują odchylenie z powodu węglowodanów, ZIELONE, że BG jest wyższe niż algorytm oczekuje a CZERWONE, że jest niższe niż algorytm oczekuje.

### Section G

Enables you to administer a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration. Also a Quick Wizzard button would be displayed here if configured in [Config Builder](../Configuration/Config-Builder#quickwizard-settings).

## Kalkulator

![Kalkulator](../images/Screenshot_Bolus_calculator.png)

Kiedy chcesz podać bolus na posiłek, to jest to miejsce, z którego zwykle będziesz to robił.

### Sekcja A

contains is where you input the information about the bolus that you want. The BG field is normally already populated with the latest reading from your CGM. Jeśli nie masz działającego CGM to miejsce będzie puste. W polu węglowodanów należy dodać oszacowaną ilości węglowodanów - lub równoważną - na jaką chcesz podać bolusa. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected and the bolus will be delayed. Możesz umieścić ujemną liczbę w tym polu, jeśli podajesz bolusa dla wcześniej zjedzonych węglowodanów.

SUPER BOLUS polega na tym, że dawka insuliny bazowej jak byłaby podana przez następne dwie godziny jest dodawana do aktualnego bolusa, a zero TBR jest podawane przez następne dwie godziny. Dzieje się to w celu podania dodatkowej insuliny. Pomysł polega na szybszym dostarczaniu insuliny i, miejmy nadzieję, zmniejszeniu wybicia.

### Sekcja B

shows the calculated bolus. Jeśli ilość insuliny w organizmie przekracza już obliczoną dawkę, to wartość ta pokaże ilość wciąż potrzebnych węglowodanów.

### Sekcja C

shows the various elements that have been used to calculate the bolus. Możesz odznaczyć te, których nie chcesz uwzględnić, jednak normalnie nie powinieneś tego chcieć.

### Kombinacje COB i IOB i co one oznaczają

<ul>
    <li>Jeśli zaznaczysz COB i IOB niewchłonięte węglowodany, które nie są już pokryte insuliną + cała insulina dostarczona jako TBR lub SMB zostanie wzięta pod uwagę</li>
    <li>Jeśli zaznaczysz COB bez IOB, ryzykujesz zbyt dużą ilością insuliny, ponieważ AAPS nie bierze pod uwagę tego, co już zostało podane. </li>
    <li>Jeśli zaznaczysz IOB bez COB, AAPS bierze pod uwagę już dostarczoną insulinę, ale nie pokryje tego przed jakimkolwiek węglowodanem, który jeszcze zostanie wchłonięty. Prowadzi to do ogłoszenia „brakujących węglowodanów”.
</ul>

Jeśli po bolusie na posiłek pojawi się dodatkowy pokarm (np. dodatkowy deser), pomocne może być odznaczenie wszystkich pól. W ten sposób dodawane są tylko nowe węglowodany, ponieważ główny posiłek niekoniecznie zostanie wchłonięty, więc IOB nie będzie dokładnie pasował do COB wkrótce po bolusie posiłkowym.

### Wrong COB detection

![Powolne wchłanianie węglowodanów](../images/Calculator_SlowCarbAbsorbtion.png)

If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. So if you want to bolus again after a previous meal with COB you should be aware of overdosing! For details see the hints on [COB calculation page](../Usage/COB-calculation.html#detection-of-wrong-cob-values).

## Profil insuliny

![Profil insuliny](../images/Screenshot_insulin_profile.png)

Pokazuje profil aktywności insuliny, którą wybrałeś. Linia FIOLETOWA pokazuje ile insuliny pozostaje po wstrzyknięciu, ponieważ z czasem insulina się rozkłada, a linia NIEBIESKA pokazuje aktywność insuliny.

Zwykle używasz jednego z profili Oref - ważne jest, aby pamiętać, że rozkład insuliny ma długi "ogon". Jeśli używałeś wcześniej pompy tradycyjnie to, prawdopodobnie przywykłeś do założenia, że insulina rozpada się przez około 3,5 godziny. Jednakże, w przypadku pętli ten długi "ogon" ma znaczenie a obliczenia są znacznie dokładniejsze, te małe ilości sumują się, gdy są poddawane rekursywnym obliczeniom w algorytmie AndroidAPS.

Aby uzyskać więcej szczegółów na temat różnych rodzajów insuliny, ich profili aktywności i wyjaśnienia dlaczego wszystko to ma znaczenie, możesz przeczytać artykuł na ten temat tutaj [ Zrozumienie nowych krzywych IOB na podstawie krzywych aktywności wykładniczej ](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Możesz przeczytać również świetny artykuł na ten temat na blogu: [Dlaczego regularnie mylimy się z czasem działania insuliny (DIA) i dlaczego to ma znaczenie...](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

I jeszcze więcej na: [Wykładnicze krzywe insuliny + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status pompy

![Status pompy](../images/Screenshot_pump_Combo.png)

Tutaj widzimy status pompy insulinowej - w tym przypadku Accu-Chek Combo. Wyświetlane informacje są oczywiste. Dłuższe naciśnięcie przycisku HISTORY odczyta dane z historii pompy, w tym profil bazowy. Pamiętaj jednak, że tylko jeden profil podstawowy jest obsługiwany przez pompę Combo.

## Portal opieki

![Portal opieki](../images/Screenshot_care_portal.png)

To powtórzenie funkcji dostępnych na ekranie Nightscout pod symbolem "+", które umożliwiają dodawanie notatek do twoich rejestrów. Funkcje takie jak wprowadzenie kiedy zmieniono wkłucie czy zbiornik z insuliną powinny być oczywiste. ALE ta sekcja nie wydaje żadnych poleceń twojej pompie. Jeśli więc dodasz bolus za pomocą tego ekranu, po prostu zanotujesz to w swoim rejestrze Nightscout, ale pompa nie będzie instruowana, aby podać bolus.

## Loop, MA, AMA, SMB

Zazwyczaj nie musisz się o to martwić, tutaj pokazywane są wyniki algorytmu OpenAPS, który uruchamia się za każdym razem, gdy system otrzymuje nowy odczyt z CGM. Są one omówione w innych miejscach.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS można uruchomić przy użyciu różnych konfiguracji profilu. Zazwyczaj - tak jak tu pokazano - profil Nightscout zostaje pobrany za pomocą wbudowanego klienta Nighscout i jest on wyświetlany tutaj w formie tylko do odczytu. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Dane takie jak profil bazowy (baza) zostaną następnie automatycznie zmienione w twojej pompie.

** DIA: ** oznacza czas działania insuliny i zostało to omówione powyżej w sekcji dotyczącej profili insulinowych.

** IC: ** współczynnik insuliny do węglowodanów. Ten profil ma wiele różnych wartości ustawionych dla różnych pór dnia.

** ISF: ** to współczynnik wrażliwości na insulinę - ilość, o którą jedna jednostka insuliny obniży stężenie glukozy we krwi przy założeniu, że nic innego się nie zmieni.

**Basal:** is the basal profile programmed into your pump.

** Target: ** to wartość docelowa poziomu stężenia glukozy we krwi, która przez cały czas ma być ustawiana. Jeśli chcesz, możesz ustawić różne poziomy dla różnych okresów dnia. Możesz także ustawić górny i dolny zakres, tak aby system zaczął dokonywać zmian tylko wtedy, gdy przewidywana wartość stężenia glukozy we krwi wychodzi poza ten przedział. Jeśli to zrobisz, wtedy system będzie reagował wolniej i jest mało prawdopodobne, aby osiągnąć stabilne stężenie cukru we krwi.

## Terapia, xDrip, NSClient

Są to po prostu dzienniki terapii (bolusy i węglowodany), wiadomości z xDrip i wiadomości wysyłane do Nightscout za pośrednictwem wbudowanego klienta Nightscout. Zazwyczaj nie musisz się tu o nic martwić, chyba że wystąpi jakiś problem.

## Kreator konfiguracji

![Kreator konfiguracji](../images/Screenshot_config_builder.png)

To miejsce gdzie przygotujesz konfigurację aplikacji AndroidAPS i urządzeń. Ten zrzut ekranu prezentuje typową platformę wykorzystującą pompę Combo, CGM Dexcom G5 zarządzany poprzez xDrip+, działający z insuliną NovoRapid z profilem Oref i podłączony do serwera opartego na chmurze Nightscout.

Pole wyboru po prawej stronie określa, czy dany moduł będzie wyświetlany na górnym pasku menu (patrz sekcja A na ekranie głównym), a symbol małego kółka zębatego umożliwia dostęp do ustawień tego modułu, jeśli takie istnieją.

## Ustawienia i preferencje

W prawym górnym rogu paska nawigacyjnego znajdują się trzy małe pionowe kropki. Naciśnięcie tego klawisza powoduje przejście do preferencji aplikacji, przeglądarki historii, kreatora konfiguracji, informacji o aplikacji i przycisku wyjścia, który zamyka APAPS.