# DanaR pomp

*Deze instructies zijn voor het instellen van de app en pomp, en gelden voor een DanaR. Visit [DanaRS Insulin Pump](./DanaRS-Insulin-Pump.md) if you have the DanaRS launched in 2017 instead.*

* In de pomp ga naar Main Menu > Setting > User Option
* Zet "8. Extended Bolus" aan.

![DanaR pomp](../images/danar1.png)

* Ga naar Main Menu > Setting > Discovery
* In je telefoon instellingen ga naar Bluetooth, scan voor nabijgelegen apparaten, selecteer het serienummer van jouw DanaR en voer jouw wachtwoord in (Standaard wachtwoord is 0000 of 1234). Als jouw telefoon de DanaR niet laat zien bij het scannen, herstart dan je telefoon en haal de DanaR batterij eruit, stop hem er weer in en herhaal deze twee stappen.

* In AAPS go to Config Builder and select the type of DanaR you have (DanaR, DanaR Korean, DanaRv2)

* Tik op de 3 stipjes in de rechter bovenhoek van het AAPS Overzicht-scherm. Kies Instellingen.
* Selecteer DanaR Bluetooth apparaat en tik op jouw DanaR serienummer.
* Selecteer Pomp wachtwoord en voer jouw wachtwoord in. (Standaardwachtwoord is 1234)
* If you want AAPS to allow basal rate above 200%, enable Use extended boluses for >200%. Dat betekent wel, dat je niet kunt loopen met hoge tijdelijke basaalstanden als je vertraagde maaltijdbolussen gebruikt.
* In Instellingen onder DanaR pomp instellingen kun je de standaard bolus snelheid wijzigen (12sec per 1E, 30sec per 1E of 60sec per 1E).
* Zet de stapgrootte voor basaal op 0,01 E/uur
* Set bolus step on pump to 0.1 U/h
* Activeer vertraagde bolussen op de pomp

## Wisselen van tijdzone met de DanaR

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).