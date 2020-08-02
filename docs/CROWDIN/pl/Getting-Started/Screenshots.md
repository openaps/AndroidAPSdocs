# Zrzuty ekranów AndroidAPS

## Ekran główny

![Ekran główny w wersji 2.5](../images/Screenshot_Home_screen_V2_5_1.png)

To jest pierwszy ekran, który zobaczysz po uruchomieniu AndroidAPS, zawiera on większość informacji, których będziesz codziennie potrzebować

### Sekcja A

* nawigacja pomiędzy różnymi modułami AndroidAPS, przesuwając palcem w lewo lub w prawo

### Sekcja B

* zmiana statusu pętli (otwarta pętla, pętla zamknięta, pętla zawieszania itp.)
* see your current profile and do a [profile switch](../Usage/Profiles.md)
* see your current target blood glucose level and set a [temporary target](../Usage/temptarget.md).

Naciśnij dłużej dowolny przycisk, aby zmienić ustawienie. I.e long press the target bar in the upper right ("100" in the screenshot above) to set a temp target.

### Sekcja C

* latest blood glucose reading from your CGM
* how long ago it was read
* changes in the last 15 and 40 minutes
* your current basal rate - including any temporary basal rate (TBR) programmed by the system
* insulin on board (IOB)
* carbs on board (COB)

Opcjonalne [ kontrolki statusu ](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) dają wizualne ostrzeżenie o niskim poziomie zbiornika i akumulatora, a także o zaległej zmianie insuliny, kaniuli, sensora.

Ilość insuliny na pokładzie wynosiłaby zero, gdyby działała tylko twója standardowa baza i nie było insuliny z poprzednich bolusów. Liczby w nawiasach pokazują, ile składa się z insuliny pozostałej z poprzednich bolusów i ile insuliny pochodzi z dawki podstawowej i jej zmienności z powodu poprzednich TBR zaprogramowanych przez AAPS. Ten drugi składnik może być ujemny, jeśli ostatnio wystąpiły okresy zmniejszonej dawki bazowej.

### Sekcja D

Kliknij strzałkę po prawej stronie ekranu w sekcji D, aby wybrać informacje wyświetlane na poniższych wykresach.

### Sekcja E

Is the graph showing your blood glucose (BG) as read from your glucose monitor (CGM) it also shows Nightscout notifications such as fingerstick calibrations, and carbs entries.

Długo naciśnij wykres, aby zmienić skalę czasu. You can choose 6, 8, 12, 18 or 24 hours.

The extended lines show the predicted BG calculations and trends - if you have it selected.

* **Orange** line: [COB](../Usage/COB-calculation.rst) (colour is used generally to represent COB and carbs)
   
   Prediction line shows where your BG (not where cob itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. This line only appears if there are known COB.

* **Dark blue** line: IOB (colour is used generally to represent IOB and insulin)
   
   Prediction line shows what would happen under the influence of insulin only. For example if you dialled in some insulin and then didn’t eat any carbs.

* **Light blue** line: zero-temp (predicted BG if temporary basal rate at 0% would be set)
   
   Prediction line shows how the IOB trajectory line would change if the pump stopped all insulin delivery (0% TBR).

* **Dark yellow** line: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (un-announced meals)
   
   Unannounced meals means that a significant increase in glucose levels due to meals, adrenaline or other influences is detected. Prediction line is similar to the ORANGE COB line but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

The **solid blue** line shows the basal delivery of your pump. The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs) and the solid blue line is the actual delivery over time.

The **thin yellow** line shows the activity of Insulin. It is based on the expected drop in BG of the insulin in your system if no other factors (like carbs) were present.

### Sekcja F

This section is also configurable using the options in section D.

* **Insulin On Board** (blue chart): It shows the insulin you have on board. If there were no TBRs, SMBs and no remaining boluses this would be zero. Decaying depends on your DIA and insulin profile settings. 
* **Carbs On Board** (orange chart): It shows the carbs you have on board. Decaying depends on the deviations the algorithm detects. If it detects a higher carb absorption than expected, insulin would be given and this will increase IOB (more or less, depending on your safety settings). 
* **Odchylenia**: 
   * **GREY** bars show a deviation due to carbs. 
   * **GREEN** bars show that BG is higher than the algorithm expected it to be. 
   * **RED** bars show that BG is lower than the algorithm expected.
* **Sensitivity** (white line): It shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. Sensitivity is a calculation of sensitivity to insulin as a result of exercise, hormones etc.
* **Activity** (yellow line): It shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). The value is higher for insulin closer to peak time. It would mean to be negative when IOB is decreasing. 

### Section G

Enables you to administer a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration. Also a Quick Wizard button would be displayed here if configured in [Config Builder](../Configuration/Config-Builder#quickwizard-settings).

## Kalkulator

![Kalkulator](../images/Screenshot_Bolus_calculator.png)

Kalkulator jest narzędziem, za pomocą którego zazwyczaj będziesz podawać bolusy.

### Section H

contains is where you input the information about the bolus that you want. Pole BG jest zwykle wypełnione najnowszym odczytem z CGM. Jeśli nie masz działającego CGM to miejsce będzie puste. W polu węglowodanów należy dodać oszacowaną ilości węglowodanów - lub równoważną - na jaką chcesz podać bolusa. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Możesz umieścić ujemną liczbę w tym polu, jeśli podajesz bolusa dla wcześniej zjedzonych węglowodanów.

SUPER BOLUS polega na tym, że dawka insuliny bazowej jak byłaby podana przez następne dwie godziny jest dodawana do aktualnego bolusa, a zero TBR jest podawane przez następne dwie godziny. Dzieje się to w celu podania dodatkowej insuliny. Pomysł polega na szybszym dostarczaniu insuliny i, miejmy nadzieję, zmniejszeniu wybicia.

### Section I

shows the calculated bolus. Jeśli ilość insuliny w organizmie przekracza już obliczoną dawkę, to wartość ta pokaże ilość wciąż potrzebnych węglowodanów.

### Section J

shows the various elements that have been used to calculate the bolus. Możesz odznaczyć te pola, których nie chcesz uwzględnić w obliczeniach, jednak normalnie nie powinieneś tego robić.

### Kombinacje COB i IOB i co one oznaczają

<ul>
    <li>Jeśli zaznaczysz COB i IOB niewchłonięte węglowodany, które nie są już pokryte insuliną + cała insulina dostarczona jako TBR lub SMB zostanie wzięta pod uwagę</li>
    <li>Jeśli zaznaczysz COB bez IOB, ryzykujesz zbyt dużą ilością insuliny, ponieważ AAPS nie bierze pod uwagę tego, co już zostało podane. </li>
    <li>Jeśli zaznaczysz IOB bez COB, AAPS bierze pod uwagę już dostarczoną insulinę, ale nie pokryje tego przed jakimkolwiek węglowodanem, który jeszcze zostanie wchłonięty. Prowadzi to do ogłoszenia „brakujących węglowodanów”.
</ul>

Jeśli po bolusie na posiłek pojawi się dodatkowy pokarm (np. dodatkowy deser), pomocne może być odznaczenie wszystkich pól. W ten sposób dodawane są tylko nowe węglowodany, ponieważ główny posiłek niekoniecznie zostanie wchłonięty, więc IOB nie będzie dokładnie pasował do COB wkrótce po bolusie posiłkowym.

### Wrong COB detection

![Powolne wchłanianie węglowodanów](../images/Calculator_SlowCarbAbsorbtion.png)

If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Profil insuliny

![Profil insuliny](../images/Screenshot_insulin_profile.png)

Pokazuje profil aktywności insuliny, którą wybrałeś. Linia FIOLETOWA pokazuje ile insuliny pozostaje po wstrzyknięciu, ponieważ z czasem insulina się rozkłada, a linia NIEBIESKA pokazuje aktywność insuliny.

Zwykle używasz jednego z profili Oref - ważne jest, aby pamiętać, że rozkład insuliny ma długi "ogon". Jeśli używałeś wcześniej pompy tradycyjnie to, prawdopodobnie przywykłeś do założenia, że insulina rozpada się przez około 3,5 godziny. Jednakże, w przypadku pętli ten długi ogon ma znaczenie a obliczenia są znacznie dokładniejsze, te małe ilości sumują się, gdy są poddawane rekursywnym obliczeniom w algorytmie AndroidAPS.

Aby uzyskać więcej szczegółów na temat różnych rodzajów insuliny, ich profili aktywności i wyjaśnienia dlaczego wszystko to ma znaczenie, możesz przeczytać artykuł na ten temat tutaj [ Zrozumienie nowych krzywych IOB na podstawie krzywych aktywności wykładniczej ](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Możesz przeczytać również świetny artykuł na ten temat na blogu: [Dlaczego regularnie mylimy się z czasem działania insuliny (DIA) i dlaczego to ma znaczenie...](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

I jeszcze więcej na: [Wykładnicze krzywe insuliny + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status pompy

![Status pompy](../images/Screenshot_pump_Combo.png)

Tutaj widzimy status pompy insulinowej - w tym przypadku Accu-Chek Combo. The information displayed is self-explanatory. Dłuższe naciśnięcie przycisku HISTORY odczyta dane z historii pompy, w tym profil bazowy. Pamiętaj jednak, że tylko jeden profil podstawowy jest obsługiwany przez pompę Combo.

## Portal opieki

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Carb correction

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
   
   ![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

3. Remove the entry with the faulty carb amount.

4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Loop, MA, AMA, SMB

Zazwyczaj nie musisz się o to martwić, tutaj pokazywane są wyniki algorytmu OpenAPS, który uruchamia się za każdym razem, gdy system otrzymuje nowy odczyt z CGM. Są one omówione w innych miejscach.

## Profil

![Profil](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configurations. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nightscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Dane takie jak profil bazowy (baza) zostaną następnie automatycznie zmienione w twojej pompie.

** DIA: ** oznacza czas działania insuliny i zostało to omówione powyżej w sekcji dotyczącej profili insulinowych.

** IC: ** współczynnik insuliny do węglowodanów. Ten profil ma wiele różnych wartości ustawionych dla różnych pór dnia.

** ISF: ** to współczynnik wrażliwości na insulinę - ilość, o którą jedna jednostka insuliny obniży stężenie glukozy we krwi przy założeniu, że nic innego się nie zmieni.

** Baza: ** jest profilem bazowym zaprogramowanym w pompie.

** Target: ** to wartość docelowa poziomu stężenia glukozy we krwi, która przez cały czas ma być ustawiana. You can set different levels for different times of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Terapia, xDrip, NSClient

Są to po prostu dzienniki terapii (bolusy i węglowodany), wiadomości z xDrip i wiadomości wysyłane do Nightscout za pośrednictwem wbudowanego klienta Nightscout. Zazwyczaj nie musisz się tu o nic martwić, chyba że wystąpi jakiś problem.

## Kreator konfiguracji

![Kreator konfiguracji](../images/Screenshot_config_builder.png)

This is where you will set up the configuration of your AndroidAPS rig. Ten zrzut ekranu prezentuje typową platformę wykorzystującą pompę Combo, CGM Dexcom G5 zarządzany poprzez xDrip+, działający z insuliną NovoRapid z profilem Oref i podłączony do serwera opartego na chmurze Nightscout.

Pole wyboru po prawej stronie określa, czy dany moduł będzie wyświetlany na górnym pasku menu (patrz sekcja A na ekranie głównym), a symbol małego kółka zębatego umożliwia dostęp do ustawień tego modułu, jeśli takie istnieją.

## Ustawienia i preferencje

W prawym górnym rogu paska nawigacyjnego znajdują się trzy małe pionowe kropki. Naciśnięcie tego klawisza powoduje przejście do preferencji aplikacji, przeglądarki historii, kreatora konfiguracji, informacji o aplikacji i przycisku wyjścia, który zamyka APAPS.