# Všeobecné odporúčania pre CGM

## Hygiena pri používaní CGM

Bez ohľadu na to, aký systém CGM používate, ak budete kalibrovať pomocou krvi, mali by ste dodržiavať niekoľko veľmi jasných pravidiel – či už používate DIY softvér pre CGM, alebo oficiálne aplikácie.

-   Uistite sa, že máte čisté ruky aj pomôcky.
-   Snažte sa kalibrovať, keď máte sériu bodov s vodorovnou šípkou (zvyčajne stačí 15–30 minút)
-   Nekalibrujte, keď glykémia stúpa alebo klesá.
-   Robte „dostatok“ kalibrácií – oficiálne aplikácie vás vyzvú na kontrolu raz alebo dvakrát denne. DIY systémy vás vyzvať nemusia a mali by ste byť opatrní, ak pokračujete bez kalibrácií.
-   Pri senzoroch, ktoré kalibráciu nevyžadujú alebo ju nedovoľujú, si aspoň raz denne skontrolujte skutočnú glykémiu z krvi. AAPS bude len taký bezpečný, aké spoľahlivé sú hodnoty z vášho senzora.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Zavedenie senzora (G6)

Pri zavádzaní senzora sa odporúča netlačiť zavádzač príliš silno, aby ste predišli krvácaniu. Kontakty senzora by nemali prísť do kontaktu s krvou.

Po zavedení senzora môžete vysielač zacvaknúť do držiaka senzora. Pozor! Najprv ho zacvaknite na hranatej strane a potom zatlačte okrúhlu stranu.

(general-cgm-troubleshooting)=
## Riešenie problémov

### Problémy so spojením

Spojenie Bluetooth môže rušiť iné blízke zariadenie Bluetooth, napríklad glukomer, slúchadlá, tablet alebo kuchynské spotrebiče ako mikrovlnná rúra či sklokeramická varná doska. V tomto prípade xDrip nezobrazuje žiadne hodnoty glykémie. Keď sa spojenie Bluetooth obnoví, chýbajúce dáta sa doplnia.

### Chyby senzora

Ak sa chyby senzora opakujú, skúste senzor zaviesť na iné miesto na tele. Kontakty senzora by nemali prísť do kontaktu s krvou.

„Chybu senzora“ (Sensor Error) často vyrieši, ak hneď niečo vypijete a pomasírujete okolie senzora!

### Skákajúce hodnoty

Môžete skúsiť zmeniť nastavenia blokovania šumu v xDrip (Settings - Inter-App Settings - Noise Blocking), napr. „Block Very High noise and worse“. Pozrite aj [Vyhladzovanie údajov glykémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Záporný vek senzora

![Vek senzora v riadku Senzor v rozbalenom paneli stavu](../images/main/main_status_row_expanded.png)

Vek senzora sa zobrazuje v riadku **Senzor** v paneli stavu na hlavnej obrazovke (rozbalíte ho ťuknutím na šípku). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Otvorte **História ošetrení** (ponuka ☰), vyberte kartu **Starostlivosť** a odstráňte nesprávny záznam.
