# Problembehandlung

Informationen zur Behebung von Problemen findest Du auf vielen Seiten im Wiki. Auf dieser Seite sind Links zu den entsprechenden Abschnitten zusammengetragen, so dass Du schneller eine Lösung für Dein Problem finden kannst.

Weitere nützliche Informationen können auch im [FAQ](../UsefulLinks/FAQ.md) stehen.

## AAPS-App

### Erstellen & Update

* [Verlorener Keystore](#troubleshooting_androidstudio-lost-keystore)
* [Fehlerbehebung Android Studio](TroubleshootingAndroidStudio)

### Installation

Es kann sein, dass Google Play Protect ein Warnung anzeigt, dass die App unsicher ist, für eine ältere Android-Version erstellt wurde und nicht die neuesten Datenschutz-Schutzmaßnahmen enthält.

Ignoriere sie: Weitere Details, Trotzdem installieren.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### Einstellungen
* Profil

  !['Fehler: Basal ist nicht auf Stunden ausgerichtet'](../images/Screen_DifferentPump.png)

* [Daten kommen von einer anderen Pumpe.](#update30-failure-message-data-from-different-pump)

  ![Fehlermeldung: Daten aus verschiedenen Pumpen](../images/BasalNotAlignedToHours2.png)

* [Nightscout-Client (NSClient)](../GettingHelp/TroubleshootingNsClient.md)

### Nutzung
* [Fehlerhafte Kohlenhydrat-Werte (COB)](#CobCalculation-detection-of-wrong-cob-values)

   ![Fehler: Langsame KH-Aufnahme](../images/Calculator_SlowCarbAbsorption.png)

* [SMS-Befehle](#SMSCommands-troubleshooting)

### Frequent Bluetooth connection problems

#### Android 15

```{warning}
Developers are working on this issue impacting **AAPS** on some Samsung and Pixel phones.
```

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. If the phone runs Android 15, you can try to enable the following:

1) **Open preferences** by clicking the three-dot menu on the top right side of the home screen.


![Einstellungen öffnen](../images/Pref2020_Open2.png)

2. Scroll down and open the **Confirmation beeps** / **Advanced** submenu. Enable **Bond BT device on Android 15+**.

   ![BondBT](../images/troubleshooting/BondBT.png)

3. If the pump asks for a pairing request, accept it.

4. Restart your phone.

#### Battery optimization

Der Fehler kann bei verschiedenen Insulinpumpen auftreten. Apart from excluding AAPS from any battery optimization, you can also exclude the system Bluetooth app from battery optimization. In einigen Fällen hilft das. Depending on the phone you use, you will find the Bluetooth app differently.

Hier sind Beispiele wie, Du die Einstellungen auf einzelnen Android-Smartphones findest.


##### Pixel phones (stock Android)

* Gehe zu Einstellungen > Apps

  ![Android-Einstellungen > Apps](../images/troubleshooting/pixel/01_androidsettings.png)

* Wähle 'alle Apps anzeigen' aus.

  ![Alle Apps anzeigen](../images/troubleshooting/pixel/02_apps.png)

* Im Menü auf der rechten Seite wähle 'Systemanwendungen anzeigen'.

  ![Systemanwendungen anzeigen](../images/troubleshooting/pixel/03_allapps.png)

* Such nun nach der 'Bluetooth'-App.

  ![Bluetooth-App](../images/troubleshooting/pixel/03_bluetooth.png)

* Tippe unter 'Akkunutzung verwalten' auf 'Nicht optimiert'.

  ![Bluetooth Akku-Optimierung](../images/troubleshooting/pixel/04_btunrestricted.png)


##### Samsung Smartphones

* Gehe zu Einstellungen > Apps

* Klicke auf das 'Filtern und Sortieren'-Icon (1) und aktiviere 'Systemanwendungen anzeigen' (2).

  ![App-Filter](../images/troubleshooting/samsung/Samsung01_Apps.png)

  ![Systemanwendungen anzeigen](../images/troubleshooting/samsung/Samsung02_ShowSystemApps.png)

* Wähle jetzt die 'Bluetooth'-App aus, um die Einstellungen anzuzeigen.

  ![Bluetooth-App](../images/troubleshooting/samsung/Samsung03_BtApp.png)

* Tippe auf 'Akku'.

  ![Akku](../images/troubleshooting/samsung/Samsung04_Battery.png)

* Aktiviere 'Nicht eingeschränkt'.

  ![Nicht eingeschränkt](../images/troubleshooting/samsung/Samsung05_NotOptimized.png)


## CGM

* [Allgemein](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [Libre 2](#Libre2-experiences-and-troubleshooting)
* [xDrip - fehlende CGM Daten](#xdrip-identify-receiver)
* [xDrip - Dexcom Problembehandlung](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Pumpen

* [Dana RS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo allgemein](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Smartphones

* [Unihertz Jelly](../CompatiblePhones/Jelly.md)
* [Huawei Bluetooth & Optimierung der Akkulaufzeit](../CompatiblePhones/Huawei.md)

## Smartwatches

* [Fehlerbehebung der Wear App](#Watchfaces-troubleshooting-the-wear-app)
