# Všeobecné odporúčania pre CGM

## Hygiena pri používaní CGM

Bez ohľadu na to, aký systém CGM používate, ak budete kalibrovať pomocou krvi, mali by ste dodržiavať niekoľko veľmi jasných pravidiel – či už používate DIY softvér pre CGM, alebo oficiálne aplikácie.

-   Uistite sa, že máte čisté ruky aj pomôcky.
-   Snažte sa kalibrovať, keď máte sériu bodov s vodorovnou šípkou (zvyčajne stačí 15–30 minút)
-   Nekalibrujte, keď glykémia stúpa alebo klesá.
-   Robte „dostatok“ kalibrácií – oficiálne aplikácie vás vyzvú na kontrolu raz alebo dvakrát denne. DIY systémy vás vyzvať nemusia a mali by ste byť opatrní, ak pokračujete bez kalibrácií.
-   Pri senzoroch, ktoré kalibráciu nevyžadujú alebo ju nedovoľujú, si aspoň raz denne skontrolujte skutočnú glykémiu z krvi. AAPS bude len taký bezpečný, aké spoľahlivé sú hodnoty z vášho senzora.
-   Ak je to možné, kalibrujte niektorými hodnotami v nižšom rozsahu (4–5 mmol/l alebo 72–90 mg/dl) a niektorými na mierne vyššej úrovni (7–9 mmol/l alebo 126–160 mg/dl), pretože to poskytne lepší rozsah pre kalibráciu bodu a sklonu.

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

Vek senzora sa zobrazuje v riadku **Senzor** v paneli stavu na hlavnej obrazovke (rozbalíte ho ťuknutím na šípku). Záporný vek vznikne, ak je buď dvojitý [záznam v Starostlivosti](#aaps-screens-careportal) „Zavedenie senzora“, alebo zavedenie senzora s nesprávnym dátumom. Otvorte **História ošetrení** (ponuka ☰), vyberte kartu **Starostlivosť** a odstráňte nesprávny záznam.
