# Zrzuty ekranów

## Ekran główny

![Ekran główny w wersji 2.1](../images/Screenshot_Home_screen_V2_1.png)

To jest pierwszy ekran, który zobaczysz po uruchomieniu AndroidAPS, zawiera on większość informacji, których będziesz codziennie potrzebować

** Sekcja A: ** umożliwia nawigację pomiędzy różnymi modułami AndroidAPS, przesuwając palcem w lewo lub w prawo.

** Sekcja B: ** Umożliwia zmianę statusu pętli (otwarta pętla, zamknięta pętla, pętla zawieszona, itp.), Podgląd bieżącego profilu, Podgląd bieżącego docelowego poziomu glikemii oraz ustawianie tymczasowego celu. Naciśnij dłużej dowolny przycisk, aby zmienić ustawienie. Np. Naciśnij ciemnoniebieski pasek celu w prawym górnym rogu ("5,5" na zrzucie ekranu), aby ustawić cel tymczasowy.

** Sekcja C: ** Najnowszy odczyt stężenia glukozy we krwi z CGM, jak dawno został odczytany, zmiana w ciągu ostatnich 15 i 40 minut, aktualna dawka bazowa - w tym dowolna tymczasowa dawka bazowa (TBR) zaprogramowana przez system, twoja insulina w organizmie (IOB) i węglowodany w organizmie (COB).

Opcjonalne [ kontrolki statusu ](../Configuration/Preferences.md) (CAN | INS | RES | SEN | BAT) dają wizualne ostrzeżenie o niskim poziomie zbiornika i akumulatora, a także o zaległej zmianie insuliny, kaniuli, sensora.

Ilość insuliny na pokładzie wynosiłaby zero, gdyby działała tylko twója standardowa baza i nie było insuliny z poprzednich bolusów. Liczby w nawiasach pokazują, ile składa się z insuliny pozostałej z poprzednich bolusów i ile insuliny pochodzi z dawki podstawowej i jej zmienności z powodu poprzednich TBR zaprogramowanych przez AAPS. Ten drugi składnik może być ujemny, jeśli ostatnio miały miejsce okresy obniżonej wartości dawki podstawowej (bazy).

** Sekcja D: ** Kliknij strzałkę po prawej stronie ekranu w sekcji D, aby wybrać informacje wyświetlane na poniższych wykresach.

** Sekcja E: ** Wykres przedstawiający stężenie glukozy we krwi (BG) wartości odczytane z monitora glukozy (CGM) pokazuje również powiadomienia Nightscout, takie jak kalibracje z "palca" i wpisy węglowodanów. Długie naciśnięcie na wykresie powoduje zmianę skali czasu. Możesz wybrać 6, 8, 12, 18 lub 24 godziny.

Rozszerzone linie pokazują przewidywane obliczenia BG i trendy - jeśli zostały wybrane.

* Orange line: COB (colour is used generally to represent COB and carbs)
* Dark blue line: IOB (colour is used generally to represent IOB and insulin)
* Light blue line: zero-temp
* Dark yellow line: UAM

Te linie pokazują różne przewidywania na podstawie aktualnej absorpcji węglowodanów (COB); tylko insuliny (IOB); pokazują, jak długo zajmie BG, aby wyrównać do/powyżej celu, jeśli odchylenia nagle ustaną, a do tego czasu mamy zerową bazę (zero-temp) i niezapowiedzianą detekcję posiłku, gdzie węglowodany są wykrywane, ale nie zostały wprowadzone do systemu przez użytkownika (UAM).

Stała niebieska linia pokazuje podstawową dawkę bazową dostarczaną przez Twoją pompę. Kropkowana niebieska linia pokazuje dawkę podstawową, jeśli nie byłoby tymczasowych zmian dawki bazowej (TBR), a stała niebieska linia jest rzeczywistą dostarczaną wartością w czasie.

** Sekcja F: ** jest także konfigurowalna za pomocą opcji w sekcji D. W tym przykładzie pokazujemy IoB (Insulina w organizmie) - jeśli nie było TBR i nie było żadnych bolusów, to wynosiłaby zero, czułość i odchylenie. SZARE paski pokazują odchylenie z powodu węglowodanów, ZIELONE, że BG jest wyższe niż algorytm oczekuje a CZERWONE, że jest niższe niż algorytm oczekuje.

** Sekcja G: ** umożliwia podawanie bolusa (zwykle do tego celu służy przycisk Kalkulator) i dodanie kalibracji CGM na podstawie pomiaru z palca.

## Kalkulator

![Kalkulator](../images/Screenshot_Bolus_calculator.png)

Kalkulator jest narzędziem, za pomocą którego zazwyczaj będziesz podawać bolusy.

** Sekcja A: ** to miejsce, gdzie podajesz informacje o bolusie, który podajesz. Pole BG jest zwykle wypełnione najnowszym odczytem z CGM. Jeśli nie masz działającego CGM to miejsce będzie puste. W polu węglowodanów należy dodać oszacowaną ilości węglowodanów - lub równoważną - na jaką chcesz podać bolusa. Pole CORR jest po to, abyś mógł z jakiegoś powodu zmodyfikować dawkę końcową, a pole CARB TIME służy do wstępnego podawania bolusa, dzięki niemu możesz powiedzieć systemowi, że wystąpi opóźnienie, zanim będzie można oczekiwać węglowodanów, lub że bolus będzie opóźniony. Możesz umieścić ujemną liczbę w tym polu, jeśli podajesz bolusa dla wcześniej zjedzonych węglowodanów.

SUPER BOLUS polega na tym, że dawka insuliny bazowej jak byłaby podana przez następne dwie godziny jest dodawana do aktualnego bolusa, a zero TBR jest podawane przez następne dwie godziny. Dzieje się to w celu podania dodatkowej insuliny. Pomysł polega na szybszym dostarczaniu insuliny i, miejmy nadzieję, zmniejszeniu wybicia.

** Sekcja B: ** pokazuje obliczoną dawkę bolusa. Jeśli ilość insuliny w organizmie przekracza już obliczoną dawkę, to wartość ta pokaże ilość wciąż potrzebnych węglowodanów.

** Sekcja C: ** pokazuje różne składowe, które zostały użyte do obliczenia bolusa. Możesz odznaczyć te pola, których nie chcesz uwzględnić w obliczeniach, jednak normalnie nie powinieneś tego robić.

### Combinations of COB and IOB and what they mean

<ul>
    <li>If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account</li>
    <li>If you tick COB without IOB you run the risk of too much insulin as AAPS is not accounting for what’s already given. </li>
    <li>If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
</ul>

If you bolus for additional food shortly after a meal bolus (i.e. additional desert) it can be helpful to untick all boxes. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

### Slow carb absorption

As of version 2.4, AAPS warns if slow carb absorption is detected. There will be an additional text on the confirmation screen after calculator usage. The risk is that COB would be overestimated and to much insulin might be given.

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

In this example 41% of time [min_5m_carbimpact](..//Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorption-settings) was used instead of value calculated from deviations.

In this case you should think about pressing "Cancel" and calculate again with COB unticked. If from your manual calculation you see the need for a correction bolus enter it manually. But be careful not to overdose!

## Profil insuliny

![Profil insuliny](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status pompy

![Status pompy](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Portal opieki

![Portal opieki](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a "Switch Profile" on your AndroidAPS rig to refresh the download. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for differenttimes of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## Kreator konfiguracji

![Config Builder](../images/Screenshot_config_builder.png)

This is where you will set up the configuraton of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Ustawienia i preferencje

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.