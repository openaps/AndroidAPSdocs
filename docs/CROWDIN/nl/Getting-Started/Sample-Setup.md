# Gebruiksvoorbeeld: Samsung S7, DanaRS, Dexcom G6 en Sony Smartwatch

![Gebruiksvoorbeeld](../images/SampleSetup.png)

## Beschrijving

In dit voorbeeld is de Samsung Galaxy S7 het centrale onderdeel van de closed loop. Een aangepaste versie van de Dexcom App leest glucose waarden van de Dexcom G6 CGM. AndroidAPS wordt gebruikt om een DanaR insulinepomp (van de Koreaanse fabrikant SOOIL) aan te sturen via Bluetooth. Dit is alles wat nodig is om de closed loop te kunnen draaien.

Omdat de Dexcom App beperkte alarm opties heeft, wordt in dit voorbeeld ook de opensource-app xDrip+ gebruikt. Hierin worden naast de normale hoog / laag alarmen ook extra alarmen ingesteld, volgens individuele wensen van de gebruiker.

Optioneel kan een Android Wear-smartwatch jouw glucose- en AndroidAPS gegevens weergeven. In dit voorbeeld wordt de Sony Smartwatch 3 (SWR50) gebruikt. De smartwatch kan ook worden gebruikt om opdrachten te geven aan AndroidAPS (zoals bolussen voor een maaltijd).

Het systeem werkt offline. Dit betekent dat de smartphone geen internetverbinding nodig heeft om de loop te laten werken.

Wat wel is ingesteld in dit voorbeeld, is dat alle gegevens automatisch worden geupload naar Nightscout "in de cloud" wanneer de smartphone is verbonden met internet. Met Nightscout kun je alle gegevens terugkijken, en ook uitgebreide rapporten uitdraaien voor doktersbezoeken. Of actuele gegevens delen met anderen (handig voor ouders die real time willen meekijken met de closed loop van hun kind). Het is ook mogelijk om het uploaden van gegevens naar Nightscout alleen te laten gebeuren wanneer je smartphone een Wifi-verbinding heeft. Zo kun je besparen op data- en accuverbruik. Dit is een oplossing als je geen familieleden hebt die real time willen meekijken, maar als je wel gegevens wil terugkijken en rapportages in Nightscout wilt gebruiken.

## Benodigdheden

1. Samsung Galaxy S7
    
    * Andere telefoons: zie [lijst van geteste telefoons en horloges](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) voor AndroidAPS

2. [DanaRS](http://www.sooil.com/eng/product/)
    
    * Alternatieven: 
    * [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
    * [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
    * [DanaR](../Configuration/DanaR-Insulin-Pump.md)
    * [Bepaalde oude modellen Medtronic pompen (extra nodig: RileyLink/Gnarl hardware, Android telefoon met Bluetooth Low Energy/BLE-chipset)](../Configuration/MedtronicPump.md)
    * In de toekomst kunnen andere pompen ook beschikbaar komen, zie de lijst met [mogelijk toekomstige insulinepompen](Future-possible-Pump-Drivers.md).

3. [Dexcom G6](https://dexcom.com)
    
    * Alternatives: see list of possible [BG sources](../Configuration/BG-Source.md)

4. Optioneel: Sony Smartwatch 3 (SWR50)
    
    * Alternatieven: Alle [horloges met Google Wear OS](https://wearos.google.com/intl/de_de/#find-your-watch) zouden prima moeten werken, voor details zie [lijst van geteste telefoons en horloges](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) voor AndroidAPS (OS moet Android Wear zijn)

## Nightscout instellen

Zie details onder [Nightscout instellen](../Installing-AndroidAPS/Nightscout.md)

## Computer: Android Studio installeren

De broncode van AAPS is vrij beschikbaar voor iedereen (ook wel 'opensource' genoemd). Om de app te kunnen bouwen vanuit de broncode, heb je Android Studio nodig op jouw computer, dit kan een Windows, Mac of Linux computer zijn. Zie de pagina met gedetailleerde instructies voor het [bouwen van de app](../Installing-AndroidAPS/Building-APK.md).

Het installeren van Android Studio kost wat tijd, wacht geduldig af terwijl de software de nodige updates downloadt.

## Smartphone instellen

![Smartphone](../images/SampleSetupSmartphone.png)

### Smartphone firmware controleren

* Menu > instellingen > telefoon info > software info: ten minste "Android-versie 8.0" (getest tot Android versie 8.0.0 Oreo - Samsung Experience versie 9.0) 
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

De officiële Dexcom app uit de Google Play Store werkt niet omdat die geen glucosewaardes naar andere apps kan doorsturen. Daarom is er door mensen uit de doe-het-zelf looping community een aangepaste versie gemaakt. Deze aangepaste Dexcom app kan wel glucosewaardes naar AAPS sturen. Een ander voordeel is dat deze app met alle Android telefoons gebruikt kan worden, ook met telefoons die niet op de [Dexcom compatibiliteitslijst](https://www.dexcom.com/dexcom-international-compatibility) staan.

To do this perform the following steps on your smartphone:

1. Als je op dit moment de originele Dexcom app op je telefoon hebt: 
    * Sensor stoppen
    * App deinstalleren onder menu > instellingen > apps > Dexcom G6 Mobile > verwijderen
2. Download and install the [BYODA Dexcom ap](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app)
3. Start modified Dexcom G6 app, activate/calibrate the sensor according to the given instructions and wait until the warm-up phase is finished.
4. Once the modified Dexcom app shows actual glucose value, setup the warnings (hamburger menu on top left side of the screen) as follows: 
    * Urgent low `55mg/dl` / `3.1mmol/l` (cannot be disabled)
    * Low `OFF`
    * High `OFF`
    * Rise rate `OFF`
    * Fall rate `OFF`
    * Signal loss `OFF`

## AndroidAPS installeren

1. Follow the instructions to [build the APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)
2. [Transfer](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) the generated APK to your phone
3. [AndroidAPS instellen](../Configuration/Config-Builder.md) met de setup wizard of handmatig
4. In dit voorbeeld gebruikten we (o.a.)

* BG source: `Dexcom G6 App (patched)` -- click cock-wheel and activate `Upload BG data to NS` and `Send BG data to xDrip+` (see [BG source](../Configuration/BG-Source.md))

![G5 Settings](../images/SampleSetupG5Settings.png)

* NS Client activated (see [Nightscout setup](../Installing-AndroidAPS/Nightscout.md))

## xDrip+ installeren

xDrip+ is another mature open source app that offers countless possibilities. In this setup, contrary to what the developers first wrote the app for, xDrip+ is not used to collect glucose data from the Dexcom G6, but only to output alarms and to display the current glucose value including the curve on the Android home screen in the widget. With xDrip+ the alarms can be set much more individually than with the Dexcom software, AAPS or Nightscout (no limitation in the selection of sounds, different alarms depending on day/night time etc.).

1. Download de laatste stabiele versie van de xDrip+ app door deze link te openen op jouw smartphone <https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk> - niet de versie van de Google Play Store!
2. Installeer xDrip+ door te tikken op het gedownloade APK-bestand.
3. Start xDrip+ en open naar het menu (= klik op de drie streepjes linksboven). Stel de volgende dingen in: 
    * Instellingen > Alarmen en waarschuwingen > Glucoseniveau Alert Lijst > stel nu de alerts in (hoog en laag) naar jouw voorkeuren.
    * Bestaande alarmen kunnen worden gewijzigd door een lange druk op het alarm.
    * Instellingen > Alarmen en waarschuwingen > Calibratie alerts: UIT (omdat calibraties in ons voorbeeld via de aangepaste Dexcom app zullen gaan)
    * Instellingen > Hardware Data Source > 640G/EverSense
    * Instellingen > Inter-app settings > Accepteren Calibraties > `AAN`
    * Menu > Start Sensor (is alleen voor de vorm en heeft niets te maken met de G6 zelf. Dit is nodig omdat je anders steeds een foutmelding krijgt). 

For more information about xDrip+, see here [BG source page](../Configuration/BG-Source.md).

### Voorbeeld van alarm instellingen

The "Urgent low alarm" (below 55 mg/dl resp. 3,1 mmol) is a standard alarm from the modified Dexcom app that cannot be disabled.

![xDrip alarms](../images/SampleSetupxDripWarning.png)

Tip for meetings / church visits / cinema etc..:

If "Do not disturb" mode is activated in the Samsung Galaxy S7 (Menu > Settings > Sounds and vibration > Do not disturb: slider to right side (= active)), the phone only vibrates during urgent low alarm and does not issue an acoustic warning. For the other alarms set up via xDrip+ you can select whether the silent mode should be ignored (acoustic sound played) or not.

## Accubesparing uitschakelen

On your Samsung Galaxy S7 go to Menu > Settings > Device Maintenance > Battery > Unmonitored Apps > + Add apps: Select the apps AndroidAPS, Dexcom G6 Mobile, xDrip+ and Android Wear (if smartwatch is used) one after the other

## Optioneel: Sony Smartwatch 3 (SWR50) instellen

With an Android Wear smartwatch life with diabetes can be made even more inconspicuous. The watch can be used to display the current glucose level, the status of the loop etc. on the wrist. De smartwatch kan ook worden gebruikt om opdrachten te geven aan AndroidAPS (zoals bolussen voor een maaltijd). To do this, double tap the CGM value of the AAPSv2 watchface. The SWR50 usually runs for a full day until the battery needs to be recharged (same charger as the Samsung Galaxy S7: microUSB).

![Smartwatch](../images/SampleSetupSmartwatch.png)

Details about the information displayed on the watchface can be found [here](../Configuration/Watchfaces.md).

* Installeer de app "Android Wear" op jouw smartphone via de Google Play Store en maak connectie met de smartwatch volgens de instructies die daar staan.
* Kies in het AAPS menu op je telefoon > Config Builder > Algemeen (aan de onderkant van de lijst) > Wear > activeren aan linker kant, klik op wiel-icoon aan rechter kant > Wear instellingen en activeer `besturingselementen van Watch`
* Op je smartwatch: druk lang op het display om jouw watchface te veranderen en selecteer `AAPSv2`
* Indien nodig beide apparaten opnieuw opstarten.

## Pomp instellen

see [Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md)