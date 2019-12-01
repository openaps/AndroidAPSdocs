# Gebruiksvoorbeeld: Samsung S7, DanaR, Dexcom G5 en Sony Smartwatch

![Gebruiksvoorbeeld](../images/SampleSetup.png)

## Beschrijving

In dit voorbeeld is de Samsung Galaxy S7 het centrale onderdeel van de closed loop. Een aangepaste versie van de Dexcom App leest glucose waarden van de Dexcom G5 CGM. AndroidAPS wordt gebruikt om een DanaR insulinepomp (van de Koreaanse fabrikant SOOIL) aan te sturen via Bluetooth. Dit is alles wat nodig is om de closed loop te kunnen draaien.

Omdat de Dexcom App beperkte alarm opties heeft, wordt in dit voorbeeld ook de opensource-app xDrip+ gebruikt. Hierin worden naast de normale hoog / laag alarmen ook extra alarmen ingesteld, volgens individuele wensen van de gebruiker.

Optioneel kan een Android Wear-smartwatch jouw glucose- en AndroidAPS gegevens weergeven. In dit voorbeeld wordt de Sony Smartwatch 3 (SWR50) gebruikt. De smartwatch kan ook worden gebruikt om opdrachten te geven aan AndroidAPS (zoals bolussen voor een maaltijd).

Het systeem werkt offline. Dit betekent dat de smartphone geen internetverbinding nodig heeft om de loop te laten werken.

Wat wel is ingesteld in dit voorbeeld, is dat alle gegevens automatisch worden geupload naar Nightscout "in de cloud" wanneer de smartphone is verbonden met internet. Met Nightscout kun je alle gegevens terugkijken, en ook uitgebreide rapporten uitdraaien voor doktersbezoeken. Of actuele gegevens delen met anderen (handig voor ouders die real time willen meekijken met de closed loop van hun kind). Het is ook mogelijk om het uploaden van gegevens naar Nightscout alleen te laten gebeuren wanneer je smartphone een Wifi-verbinding heeft. Zo kun je besparen op data- en accuverbruik. Dit is een oplossing als je geen familieleden hebt die real time willen meekijken, maar als je wel gegevens wil terugkijken en rapportages in Nightscout wilt gebruiken.

## Benodigdheden

1. Samsung Galaxy S7
    
    * Andere telefoons: zie [lijst van geteste telefoons en horloges](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

2. [DanaR](http://www.sooil.com/eng/product/) of DanaRS insulinepomp
    
    * Alternatieven: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * In de toekomst kunnen andere pompen ook beschikbaar komen, zie de lijst met [mogelijk toekomstige insulinepompen](Future-possible-Pump-Drivers.md).

3. [Dexcom G5](https://dexcom.com)
    
    * Alternatieven: zie lijst met mogelijke [BG bronnen](../Configuration/BG-Source.rst)

4. Optioneel: Sony Smartwatch 3 (SWR50)
    
    * Andere smartwatches: zie [lijst van geteste telefoons en horloges](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) (alleen horloges met Android Wear als besturingssysteem zijn geschikt)

## Nightscout instellen

Zie details onder [Nightscout instellen](../Installing-AndroidAPS/Nightscout.md)

## Computer: Android Studio installeren

De broncode van AAPS is vrij beschikbaar voor iedereen (ook wel 'opensource' genoemd). Om de app te kunnen bouwen vanuit de broncode, heb je Android Studio nodig op jouw computer, dit kan een Windows, Mac of Linux computer zijn. Zie de pagina met gedetailleerde instructies voor het [bouwen van de app](../Installing-AndroidAPS/Building-APK.md).

Het installeren van Android Studio kost wat tijd, wacht geduldig af terwijl de software de nodige updates downloadt.

## Smartphone instellen

![Smartphone](../images/SampleSetupSmartphone.png)

### Smartphone firmware controleren

* Menu > instellingen > telefoon info > software info: ten minste "Android-versie 7.0" (getest tot Android versie 8.0.0 Oreo - Samsung Experience versie 9.0) 
* Voor de firmware-update: menu > instellingen > software-update

### Toestaan dat apps uit onbekende bronnen worden geïnstalleerd

Menu > instellingen > apparaat beveiliging > onbekende bronnen > schuifregelaar naar rechts (= actief)

Om veiligheidsredenen moet je deze instelling weer terug op inactief zetten zodra je de installatie van alle apps die hier beschreven staan hebt afgerond.

### Bluetooth inschakelen

1. Menu > instellingen > verbindingen > Bluetooth > schuifregelaar naar rechts (= actief)
2. Menu > instellingen > verbindingen > locatie > schuifregelaar naar rechts (= actief)

Locatieservices (GPS) moet worden geactiveerd om Bluetooth goed te laten werken.

### Installeren van Dexcom App (aangepaste versie)

![Aangepaste Dexcom app](../images/SampleSetupDexApp.png)

De officiële Dexcom app uit de Google Play Store werkt niet omdat die geen glucosewaardes naar andere apps kan doorsturen. Daarom is er door mensen uit de doe-het-zelf looping community een aangepaste versie gemaakt. Deze aangepaste Dexcom app kan wel glucosewaardes naar AAPS sturen. Een ander voordeel is dat deze app met alle Android telefoons gebruikt kan worden, ook met telefoons die niet op de [Dexcom compatibiliteitslijst](https://www.dexcom.com/dexcom-international-compatibility) staan. Een mmol/l versie en een mg/dl versie van de aangepaste Dexcom app is te vinden op https://github.com/dexcomapp/dexcomapp?files=1.

Volg onderstaande stappen om de aangepaste app op je telefoon te krijgen:

1. Als je op dit moment de originele Dexcom app op je telefoon hebt: 
    * Sensor stoppen
    * App deinstalleren onder menu > instellingen > apps > Dexcom G5 Mobile > verwijderen
2. Download de aangepaste Dexcom app (let op dat je de juiste versie hebt, mmol/l of mg/dl): <https://github.com/dexcomapp/dexcomapp?files=1>
3. Installeer de aangepaste Dexcom app op je telefoon door op de gedownloade APK file te tikken
4. Open de aangepaste Dexcom app, activeer/calibreer de sensor volgens de gebruikelijke instructies en wacht totdat het opwarmen is afgerond.
5. Wacht totdat de eerste twee calibraties correct zijn ingevoerd, en de aangepaste Dexcom app actuele glucosewaardes laat zien. Open daarna het menu (= druk op de drie streepjes in de linker bovenhoek) en stel de alarmen als volgt in: 
    * Urgent laag `55 mg/dl` / `3.1mmol/l` (kan niet worden uitgeschakeld)
    * Laag `UIT`
    * Hoog `UIT`
    * Stijgend `UIT`
    * Dalend `UIT`
    * Signaalverlies `UIT`

## AndroidAPS installeren

1. Volg de instructies voor het [bouwen van de app](../Installing-AndroidAPS/Building-APK#generate-signed-apk)
2. [Overzetten](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) van de app naar telefoon
3. [AndroidAPS instellen](../Configuration/Config-Builder.md) met de setup wizard of handmatig
4. In dit voorbeeld gebruikten we (o.a.)

* BG Bron: `Dexcom G5 App (aangepast)` --Klik op het wieltje en activeer `upload BG gegevens naar NS` en `stuur BG data naar xDrip+` (Zie [BG bron](../Configuration/BG-Source.rst))

![G5 instellingen](../images/SampleSetupG5Settings.png)

* NS Client geactiveerd (Zie [NS Client](../Configuration/Config-Builder#ns-profile) en [Nightscout](../Installing-AndroidAPS/Nightscout.md))

## xDrip+ installeren

xDrip+ is een andere opensource-app die allerlei opties heeft voor glucosedata. In dit voorbeeld gebruiken we de app iets anders dan waar de ontwikkelaars hem oorspronkelijk voor geschreven hebben. Namelijk niet om glucosewaardes te ontvangen van de Dexcom G5, maar alleen om glucose-alarmen te geven, en voor het weergeven van een widget op het home-scherm van je telefoon. Deze widget laat je huidige glucosewaarde, en jouw glucosegrafiek zien. Met xDrip+ heb je veel meer opties om de alarmen in te stellen dan met de welke andere software dan ook (Dexcom, AAPS of Nightscout). Zo kun je iedere ringtone of mp3 kiezen als alarm, verschillende alarmen instellen afhankelijk van tijdstip op de dag/nacht etc.

1. Download de laatste stabiele versie van de xDrip+ app door deze link te openen op jouw smartphone <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - niet de versie van de Google Play Store!
2. Installeer xDrip+ door te tikken op het gedownloade APK-bestand.
3. Start xDrip+ en open naar het menu (= klik op de drie streepjes linksboven). Stel de volgende dingen in: 
    * Instellingen > Alarmen en waarschuwingen > Glucoseniveau Alert Lijst > stel nu de alerts in (hoog en laag) naar jouw voorkeuren. 
    * Bestaande alarmen kunnen worden gewijzigd door een lange druk op het alarm.
    * Instellingen > Alarmen en waarschuwingen > Calibratie alerts: UIT (omdat calibraties in ons voorbeeld via de aangepaste Dexcom app zullen gaan)
    * Instellingen > Hardware Data Source > 640G/EverSense
    * Instellingen > Inter-app settings > Accepteren Calibraties > `AAN`
    * Menu > Start Sensor (is alleen voor de vorm en heeft niets te maken met de G5 zelf. Dit is nodig omdat je anders steeds een foutmelding krijgt). 

Meer informatie over xDrip+ vind je hier [BG bron pagina](../Configuration/BG-Source.rst).

### Voorbeeld van alarm instellingen

Het "urgent laag alarm" (onder 55 mg/dl resp. 3,1 mmol) is een standaard alarm van de aangepaste Dexcom app dat niet kan worden uitgeschakeld.

![xDrip alarmen](../images/SampleSetupxDripWarning.png)

Tips voor tijdens vergaderingen / bioscoop etc..:

In situaties waar je je telefoon op stil hebt staan, zoals in de bioscoop kun je ook glucosealarmen op stil zetten. Als "Niet storen"-modus is geactiveerd in het telefoonmenu van de de Samsung Galaxy S7 (Menu > instellingen > geluiden en trillingen > niet storen: schuifregelaar naar rechts (= actieve)), dan zal je telefoon alleen trillen tijdens een urgent laag alarm, en dus geen geluid maken. Voor de andere alarmen die je via xDrip+ instelt, kun je per alarm instellen of je wilt dat de telefoon de "Niet storen"-modus negeert (wanneer je dit aanvinkt, dan maakt de telefoon maakt dus wel geluid). Laat het vinkje weg als je wilt dat de telefoon geen geluid maakt.

## Accubesparing uitschakelen

Ga op de Samsung Galaxy S7 naar Menu > instellingen > apparaat onderhoud > batterij > ongecontroleerde Apps > + apps toevoegen: Selecteer achtereenvolgens de apps AndroidAPS, Dexcom G5 Mobile, xDrip + en Android Wear (als smartwatch wordt gebruikt)

## Optioneel: Sony Smartwatch 3 (SWR50) instellen

Een Android Wear-smartwatch kan het leven met diabetes nog makkelijker maken. Het horloge kan van alles weergeven: de huidige glucosewaarde, de status van de loop etc. op jouw pols. De smartwatch kan ook worden gebruikt om opdrachten te geven aan AndroidAPS (zoals bolussen voor een maaltijd). Om dit te doen, tik tweemaal op de CGM-waarde van de AAPSv2 watchface. De batterij van de SWR50 gaat meestal een volledige dag mee totdat hij weer moet worden opgeladen (dezelfde lader als de Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Meer details over wat er wordt weergegeven op de watchface kun je [hier](../Configuration/Watchfaces.md) vinden.

* Installeer de app "Android Wear" op jouw smartphone via de Google Play Store en maak connectie met de smartwatch volgens de instructies die daar staan.
* Kies in het AAPS menu op je telefoon > Config Builder > Algemeen (aan de onderkant van de lijst) > Wear > activeren aan linker kant, klik op wiel-icoon aan rechter kant > Wear instellingen en activeer `besturingselementen van Watch`
* Op je smartwatch: druk lang op het display om jouw watchface te veranderen en selecteer `AAPSv2`
* Indien nodig beide apparaten opnieuw opstarten.

## Pomp instellen

Zie [DanaR pomp](../Configuration/DanaR-Insulin-Pump.md)