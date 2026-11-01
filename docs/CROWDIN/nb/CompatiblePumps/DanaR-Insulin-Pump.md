# DanaR

*Disse instruksjonene gjelder oppsett av appen og pumpen din hvis du har en DanaR. Gå til [DanaRS, Dana-i og Dana-i2](./DanaRS-Insulin-Pump.md) hvis du i stedet har DanaRS som ble lansert i 2017.*

## Pumpefunksjoner med AAPS

* Kommuniserer med **AAPS** over telefonens innebygde Bluetooth, uten en ekstra kommunikasjonsenhet.
* Tidssonebytte og sommertid krever ingen spesielle tiltak, siden pumpen ikke bruker sin egen historikk.

## Oppsett

* På pumpen går du til Main Menu > Setting > User Option
* Slå på «8. Extended Bolus»

![DanaR-pumpe](../images/danar1.png)

* Gå til Main Menu > Setting > Discovery
* I telefonens innstillinger går du til Bluetooth, søker etter enheter i nærheten, velger serienummeret til din DanaR og skriver inn passordet (passordet for sammenkobling er 0000). Hvis DanaR ikke vises i søket, starter du telefonen på nytt, tar batteriet ut av DanaR, setter det inn igjen og gjør disse to stegene om igjen.

* I **AAPS** åpner du **menyen** (☰) øverst til venstre, går til **Konfigurasjon** > **Pumpe** og velger den typen DanaR du har (**DanaR**, **DanaR Koreansk** eller **DanaRv2**).
  
  ![Konfigurasjon > Pumpe med DanaR-pluginene](../images/v4/Configuration/configuration_pump_list_1.png)

* Åpne pumpeskjermen: trykk på **Åpne plugin** på DanaR-kortet (eller gå til **Administrer** > **Pumpe**).

* Trykk på **Sammenkobling**. På sammenkoblingsskjermen: 
  * Skriv inn pumpepassordet ditt under **Pumpepassord** (standardpassordet er 1234).
  * Under **Velg sammenkoblet enhet** trykker du på serienummeret til din DanaR. Hvis listen er tom, trykker du på **Åpne Bluetooth-innstillinger** og kobler pumpen sammen med telefonen først (se steget ovenfor). Når du kommer tilbake til **AAPS**, vises pumpen i listen. Hvis den ikke gjør det, trykker du på oppdater-ikonet.
  * Trykk på **Sammenkobling**. **AAPS** kobler til pumpen og kontrollerer passordet.
* For å endre driverinnstillingene trykker du på **Innstillinger** på DanaR-kortet i **Konfigurasjon** > **Pumpe**: 
  * **Bolushastighet** (DanaR og DanaRv2): endre standard bolushastighet (12 s/E, 30 s/E eller 60 s/E).
  * **Bruk forlenget bolus for >200%** (DanaR og DanaR Koreansk): slå på dette hvis du vil at **AAPS** skal tillate en basaldose over 200 %. Merk at dette betyr at du ikke kan loope med høye midlertidige basaler mens du bruker forlenget bolus til mat.
* Sett basaltrinnet på pumpen til 0,01 E/t
* Sett bolustrinnet på pumpen til 0,1 E. **AAPS** leser bolustrinnet fra pumpen og bruker det for hver bolus.
* Aktiver forlenget bolus på pumpen

## Tidssonebytte med Dana R-pumpe

For informasjon om reiser på tvers av tidssoner, se avsnittet [Tidssonebytte med pumper](#timezone-traveling-danarv2-danars).

## Hvor du kan få hjelp

Utviklingen av DanaR-driveren gjøres av fellesskapet på **frivillig** basis. Før du ber om hjelp, bør du:

1. **Lese** det aktuelle avsnittet i denne dokumentasjonen for å se hvordan funksjonen er ment å virke.
2. **Spørre** i kanalen *#AAPS* på [Discord](https://discord.gg/4fQUWHZ4Mw), eller i en av de andre [fellesskapskanalene](../GettingHelp/WhereCanIGetHelp.md).
3. **Rapportere en feil** ved å søke i [eksisterende saker](https://github.com/nightscout/AndroidAPS/issues); hvis din ikke er der, åpne en [ny sak](https://github.com/nightscout/AndroidAPS/issues) og legg ved [loggfilene](../GettingHelp/AccessingLogFiles.md) dine.

Når du ber om hjelp, ta med telefonens merke og modell, Android-versjon, **AAPS**-versjon og en enkel beskrivelse av problemet (hva som ble endret, når det sist virket).