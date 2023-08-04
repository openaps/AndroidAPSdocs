# Problembehandlung

Informationen zur Behebung von Problemen findest Du auf vielen Seiten im Wiki. Auf dieser Seite sind Links zu den entsprechenden Abschnitten zusammengetragen, so dass Du schneller eine Lösung für Dein Problem finden kannst.

Weitere nützliche Informationen findest Du auch in den `FAQ <../Getting-Started/FAQ.md>` _ (Frequently asked questions - häufig gestellte Fragen).

## AndroidAPS app

### Erstellen & Update

* [Verlorener Keystore](troubleshooting_androidstudio-lost-keystore)
* [Fehlerbehebung Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.md)

### Einstellungen
* [Profile](Profiles-troubleshooting-profile-errors)

  !['Fehler: Basal ist nicht auf Stunden ausgerichtet'](../images/Screen_DifferentPump.png)

* [Daten kommen von einer anderen Pumpe.](../Installing-AndroidAPS/update3_0.html#failure-message-data-from-different-pump)

  ![Fehlermeldung: Daten aus verschiedenen Pumpen](../images/BasalNotAlignedToHours2.png)

* [Nightscout-Client (NSClient)](../Usage/Troubleshooting-NSClient.html)

### Nutzung
* [Fehlerhafte Kohlenhydrat-Werte (COB)](COB-calculation-detection-of-wrong-cob-values)

   ![Fehler: Langsame KH-Aufnahme](../images/Calculator_SlowCarbAbsorption.png)

* [SMS-Befehle](SMS-Commands-troubleshooting)

### Häufige Bluetooth-Verbindungsprobleme

Der Fehler kann bei verschiedenen Insulinpumpen auftreten. Außer AAPS von jeder Batterieoptimierung auszuschließen, kannst Du auch die Bluetooth-App des Systems von der Batterieoptimierung ausschließen. In einigen Fällen hilft das. Je nach verwendetem Smartphone findet sich die Bluetooth-App an anderen Stellen.

Hier sind Beispiele wie, Du die Einstellungen auf einzelnen Android-Smartphones findest.


#### Pixel Smartphones (unverändertes Android)

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


#### Samsung Smartphones

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

* [Allgemein](GeneralCGMRecommendation-troubleshooting)
* [Dexcom G6](DexcomG6-troubleshooting-g6)
* [Libre 3](Libre3-experiences-and-troubleshooting)
* [Libre 2](Libre2-experiences-and-troubleshooting)
* [xDrip - fehlende CGM Daten](xdrip-identify-receiver)
* [xDrip - Dexcom Problembehandlung](xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

## Pumpen

* [Dana RS](DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo allgemein](Accu-Chek-Combo-Tips-for-Basic-usage)
* [Accu-Chek Combo + Ruffy](Accu-Chek-Combo-Pump-why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

## Smartphones

* [Unihertz Jelly](../Usage/jelly.md)
* [Huawei Bluetooth & Optimierung der Akkulaufzeit](../Usage/huawei.md)

## Smartwatches

* [Fehlerbehebung der Wear App](Watchfaces-troubleshooting-the-wear-app)
* [Sony Smartwatch 3](../Usage/SonySW3.md)
