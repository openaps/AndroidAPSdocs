(generaltroubleshooting)=

# **Problembehandlung**

Informationen zur Behebung von Problemen findest Du auf vielen Seiten im Wiki. Diese Seite enthält eine Link-Sammlung zur Lösung verschiedener bekannter Probleme. Diese Informationen können helfen, auch Dein Problem zu lösen.

Weitere nützliche Informationen können auch im [FAQ](../UsefulLinks/FAQ.md) stehen.

---

(generaltroubleshooting-aaps-app)=

## **AAPS-App**

### **Erstellen & Update**

* [Verlorener Keystore](#troubleshooting_androidstudio-lost-keystore)
* [Fehlerbehebung Android Studio](TroubleshootingAndroidStudio)

### **Installation**

Es kann sein, dass Google Play Protect ein Warnung anzeigt, dass die App unsicher ist, für eine ältere Android-Version erstellt wurde und nicht die neuesten Datenschutz-Schutzmaßnahmen enthält.

Ignoriere sie: Weitere Details, Trotzdem installieren.

![Google Play Protect warning](../images/troubleshooting/InstallGPP.png)

### **Einstellungen**
* Profil

  !['Fehler: Basal ist nicht auf Stunden ausgerichtet'](../images/Screen_DifferentPump.png)

* [Daten kommen von einer anderen Pumpe.](#update30-failure-message-data-from-different-pump)

  ![Fehlermeldung: Daten aus verschiedenen Pumpen](../images/BasalNotAlignedToHours2.png)

* [Nightscout-Client (NSClient)](../GettingHelp/TroubleshootingNsClient.md)

### **Nutzung**
* [Fehlerhafte Kohlenhydrat-Werte (COB)](#CobCalculation-detection-of-wrong-cob-values)

   ![Fehler: Langsame KH-Aufnahme](../images/Calculator_SlowCarbAbsorption.png)

* [SMS-Befehle](#SMSCommands-troubleshooting)

---

(generaltroubleshooting-bluetooth-related-issues)=


## **Bluetooth related issues**

For known issues with Bluetooth connections, dropouts of pump/pods, or activation and connection issues [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md)

---

(generaltroubleshooting-android-related-issues)=

## **Probleme rund um Android**

### **Akku-Optimierung**

Mit Android wurden standardmäßig aktivierte Energiespareinstellungen eingeführt. Diese Einstellungen stoppen oder pausieren nicht zwingend benötigte Anwendungen, um so die Akkulaufzeit zu verlängern.

Bei aktiver Akkuoptimierung ist es sehr wahrscheinlich, dass es zu Problemen mit **AAPS** und anderen unterstützenden Apps wie z. B. **xDrip+** kommt.

Damit **AAPS** und die anderen unterstützenden Apps permanent aktiv bleiben, ist es wichtig die Akkuoptimierung zu deaktivieren.

Abhängig vom Hersteller und dem Smartphone-Modell müssen Einstellungen möglicherweise an verschiedenen Stellen angepasst bzw. deaktiviert werden.

***HINWEIS:** Führe die folgenden Schritte durch, um die Akkuoptimierung (sofern vorhanden) für den Bluetooth-Dienst zu deaktivieren. Das gleiche Vorgehen kann auch für die Deaktivierung der Option für **AAPS** und andere Apps genutzt werden. Die Screenshots zeigen allderdings nur den Weg für den Bluetooth-Service.*

#### **Pixel Smartphones (unverändertes Android)**

* Gehe zu Einstellungen > Apps

  ![Android-Einstellungen > Apps](../images/troubleshooting/pixel/01_androidsettings.png)

* Wähle „alle Apps anzeigen“ aus.

  ![Alle Apps anzeigen](../images/troubleshooting/pixel/02_apps.png)

* Im Menü auf der rechten Seite wähle 'Systemanwendungen anzeigen'.

  ![Systemanwendungen anzeigen](../images/troubleshooting/pixel/03_allapps.png)

* Such nun nach der 'Bluetooth'-App.

  ![Bluetooth-App](../images/troubleshooting/pixel/03_bluetooth.png)

* Tippe unter 'Akkunutzung verwalten' auf 'Nicht optimiert'.

  ![Bluetooth Akku-Optimierung](../images/troubleshooting/pixel/04_btunrestricted.png)


#### **Samsung Smartphones**

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

#### **Huawei Smartphones**

Hier ist die Anleitung für [Huawei Bluetooth & Akkuoptimierung](../CompatiblePhones/Huawei.md)

---

(generaltroubleshooting-cgm)=

## **Kontinuierliche Glukosemessung (CGM)**

Nützliche Links zu Lösungsschritten bekannter CGM-Probleme.

* [Allgemein](#general-cgm-troubleshooting)
* [Dexcom G6](#DexcomG6-troubleshooting-g6)
* [Libre 3](#libre3-experiences-and-troubleshooting)
* [xDrip - fehlende CGM Daten](#xdrip-identify-receiver)
* [xDrip - Dexcom Problembehandlung](#xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)

---

(generaltroubleshooting-pumps)=

## **Pumpen**

Nützliche Links zu Lösungsschritten bekannter Pumpen-Probleme.

* [Dana RS](#DanaRS-Insulin-Pump-dana-rs-specific-errors)
* [Accu-Chek Combo allgemein](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md)
* [Accu-Chek Insight](#Accu-Chek-Insight-Pump-insight-specific-errors)
* [Medtronic + RileyLink](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)

---

(generaltroubleshooting-phones)=

## **Smartphones**

Nützliche Links zu Lösungsschritten bekannter Smartphone-Probleme.

* [Liste der getesteten Smartphone- und Geräte-Setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)
* [Unihertz Jelly](../CompatiblePhones/Jelly.md)
* [Huawei Bluetooth & Optimierung der Akkulaufzeit](../CompatiblePhones/Huawei.md)

(generaltroubleshooting-smartwatches)=

## Smartwatches

Nützliche Links zu Lösungsschritten bekannter Smartwatch-Probleme.

* [Fehlerbehebung der Wear App](#Watchfaces-troubleshooting-the-wear-app)
