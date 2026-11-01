# DanaR

*Deze instructies zijn voor het instellen van de app en pomp, en gelden voor een DanaR. Ga naar [DanaRS insulinepomp](./DanaRS-Insulin-Pump.md) als je in plaats daarvan de DanaRS hebt, die in 2017 is uitgebracht.*

## Mogelijkheden van de pomp met AAPS

* Communiceert met **AAPS** via de eigen Bluetooth van je telefoon, zonder extra communicatieapparaat.
* Wisselingen van tijdzone en zomer-/wintertijd vragen geen speciale actie, omdat de pomp zijn eigen geschiedenis niet gebruikt.

## Instellen

* In de pomp ga naar Main Menu > Setting > User Option
* Zet "8. Extended Bolus" aan.

![DanaR pomp](../images/danar1.png)

* Ga naar Main Menu > Setting > Discovery
* In phone settings go to Bluetooth, scan for nearby devices, select your DanaR serial number and input your password (Pairing password is 0000). Als jouw telefoon de DanaR niet laat zien bij het scannen, herstart dan je telefoon en haal de DanaR batterij eruit, stop hem er weer in en herhaal deze twee stappen.

* Open in **AAPS** het **menu** (☰) linksboven, ga naar **Configuratie** > **Pomp** en selecteer het type DanaR dat je hebt (**DanaR**, **DanaR Koreaans** of **DanaRv2**).
  
  ![Configuratie > Pomp met de DanaR plugins](../images/v4/Configuration/configuration_pump_list_1.png)

* Open het pompscherm: tik op **Plug-in openen** op de DanaR-kaart (of ga naar **Beheren** > **Pomp**).

* Tik op **Koppelen**. Op het koppelscherm: 
  * Voer je pompwachtwoord in onder **Pomp wachtwoord** (het standaardwachtwoord is 1234).
  * Tik onder **Selecteer het gekoppelde apparaat** op het serienummer van je DanaR. Als de lijst leeg is, tik dan op **Bluetooth instellingen openen** en koppel eerst de pomp met je telefoon (zie de stap hierboven). Als je terugkomt in **AAPS**, staat de pomp in de lijst. Als dat niet zo is, tik dan op het vernieuwicoon.
  * Tik op **Koppelen**. **AAPS** maakt verbinding met de pomp en controleert het wachtwoord.
* Om de instellingen van de driver te wijzigen, tik je op **Instellingen** op de DanaR-kaart in **Configuratie** > **Pomp**: 
  * **Bolussnelheid** (DanaR en DanaRv2): wijzig de standaard bolussnelheid (12 s/E, 30 s/E of 60 s/E).
  * **Gebruik vertraagde bolussen voor >200%** (DanaR en DanaR Koreaans): zet dit aan als je wilt dat **AAPS** een basaalstand boven 200% toestaat. Let op: dit betekent dat je niet kunt loopen met hoge TBR's terwijl je vertraagde bolussen voor eten gebruikt.
* Zet de stapgrootte voor basaal op 0,01 E/u
* Zet de bolusstap op de pomp op 0,1 E. **AAPS** leest de bolusstap uit de pomp en gebruikt die voor elke bolus.
* Activeer vertraagde bolussen op de pomp

## Wisselen van tijdzone met de DanaR

Informatie over reizen door tijdzones vind je in de sectie [Wisselen van tijdzone met pompen](#timezone-traveling-danarv2-danars).

## Waar je hulp kunt krijgen

De ontwikkeling van de DanaR driver wordt door de community gedaan, op **vrijwillige** basis. Doe het volgende voordat je om hulp vraagt:

1. **Lees** het betreffende deel van deze documentatie om te controleren hoe de functie hoort te werken.
2. **Vraag** het op het kanaal *#AAPS* op [Discord](https://discord.gg/4fQUWHZ4Mw), of in een van de andere [community kanalen](../GettingHelp/WhereCanIGetHelp.md).
3. **Meld een bug**: zoek eerst in de [bestaande issues](https://github.com/nightscout/AndroidAPS/issues). Staat jouw probleem er niet bij, open dan een [nieuwe issue](https://github.com/nightscout/AndroidAPS/issues) en voeg je [logbestanden](../GettingHelp/AccessingLogFiles.md) toe.

Beschrijf als je om hulp vraagt: merk en model van je telefoon, Android versie, **AAPS** versie, en een duidelijke beschrijving van het probleem in gewone taal (wat er is veranderd, wanneer het voor het laatst werkte).