# Konfiguration (Konfigurations-Generator)

Abhängig von Deinen Einstellungen kannst Du die Konfiguration (engl. Config Builder) über eine Registerkarte am oberen **AAPS**-Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

Im **Konfiguration**-Tab kannst Du modular einzelne Funktionen ein- und ausschalten. Im Bild unten kannst Du mit den Kästchen auf der linken Seite (A) auswählen, welche Module Du aktivieren möchtest. Standardmäßig werden beim Öffnen der Konfiguration nur die aktiven Module angezeigt. Klicke auf den Pfeil (G), um alle verfügbaren Optionen anzuzeigen. Mit den Kästchen auf der rechten Seite (C) kannst Du die aktiven Module als Tab (E) in **AAPS** ansehen. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar. Mehr dazu findest Du im Abschnitt [Tab oder Hamburger-Menü](#tab-or-hamburger-menu) unten.

Falls es innerhalb einer Funktion zusätzliche Einstellmöglichkeiten geben sollte, können diese über das Zahnrad (B) aufgerufen werden.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

(ConfigBuilder_Profile)=

## Profil

Dieses Modul kann nicht deaktiviert werden, da es ein zentraler Bestandteil von **AAPS** ist.

Im Abschnitt [Dein AAPS-Profil](../SettingUpAaps/YourAapsProfile.md) bekommst Du ein Basisverständnis dafür, was in Deinem **Profil** geschieht.

(Config-Builder-insulin)=

## Insulin

![Insulintyp](../images/ConfBuild_Insulin_AAPS30.png)

Wähle hier den von Dir genutzten Insulintyp aus.

Weitergehende Informationen zum Verständnis des Insulin-Profils, wie es in **AAPS** dargestellt ist, findest Du [hier](#AapsScreens-insulin-profile).

### Unterschiede der Insulintypen

* Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' und 'Free-Peak Oref' haben einen exponentiellen Verlauf.
* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Free-Peak erlaubt es Ihnen, sowohl die DIA als auch die Zeit auf den Höhepunkt anzupassen und darf nur von fortgeschrittenen Benutzern verwendet werden, die die Auswirkungen dieser Einstellungen kennen. 
* Die [Darstellung der Insulinkurven](#AapsScreens-insulin-profile) hilft, die verschiedenen Kurven zu verstehen.

#### Rapid-Acting Oref

![Insulintyp Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* empfohlen für Humalog, Novolog und Novorapid
* DIA = mindestens 5 Stunden
* Wirkmaximum = 75 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Ultra-Rapid Oref

![Insulintyp Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* empfohlen für FIASP
* DIA = mindestens 5 Stunden
* Wirkmaximum = 55 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

(Config-Builder-lyumjev)=

#### Lyumjev

![Insulintyp Lyumjev](../images/ConfBuild_Insulin_L.png)

* Spezielles Insulinprofil für Lyumjev
* DIA = mindestens 5 Stunden
* Wirkmaximum = 45 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Free Peak Oref

![Insulintyp Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Erlaubt das Wirkmaximum der Insulinaktivität individuell zu definieren. Klicke dazu auf das Zahnrad um erweiterte Einstellungen einzugeben.
* DIA wird automatisch auf 5 Stunden gesetzt, sofern von dir im Profil nichts anderes definiert wird.
* Dieses Profil wird dann empfohlen, wenn dein Insulintyp von den anderen Profilen nicht abgedeckt werden kann oder wenn eine Mischung verschiedener Insuline verwendet wird.

(Config-Builder-bg-source)=

## BZ-Quelle

Wähle hier die von Dir genutzte Glukosewert-Quelle aus. Weitergehende Informationen zum Setup findest Du auf der Seite [BZ-Quelle](../Getting-Started/CompatiblesCgms.md).

![Konfigurations-Generator - BZ-Quelle](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [Nightscout-Client BZ](../CompatibleCgms/CgmNightscoutUpload.md) - nur wenn Du genau weißt, was Du tust, siehe [BZ-Quelle](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - es werden nur Versionen 4.15.57 und neuer unterstützt
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato (MiaoMiao)](#libre1-using-tomato) für MiaoMiao-Geräte
* [Glunovo-App](https://infinovo.com/) für ein Glunovo-CGM-System
* [Ottai](../CompatibleCgms/OttaiM8.md)
* [Syai Tag](../CompatibleCgms/SyaiTagX1.md)
* Zufalls-BZ: Generiert zufällige Blutzuckerdaten (nur im Demo-Modus)

## Glättung

![Glättung](../images/ConfBuild_Smoothing.png)

Schaue hierzu in den Abschnitt [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pumpe

Wähle die von dir genutzte Pumpe. Weiterführende Information zur Konfiguration findest Du auf der Seite [Kompatible Pumpen](../Getting-Started/CompatiblePumps.md).

![Konfigurationsgenerator - Pumpe wählen](../images/ConfBuild_Pump_AAPS33.png) ![Konfigurationsgenerator - Pumpe wählen](../images/ConfBuild_Pump_AAPS33-2.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* Dana Rv2 (DanaR mit inoffiziellem Firmware Upgrade)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod für [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash für [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* Virtuelle Pumpe: Open Loop - **AAPS** macht ausschließlich Vorschläge 
  * während Deiner ersten Schritte mit **AAPS** in den ersten [Zielen](../SettingUpAaps/CompletingTheObjectives.md)
  * für Pumpen, die noch nicht kompatibel sind

## Sensitivitätserkennung

Hier kannst du auswählen, nach welchem Algorythmus AAPS die Insulinempfindlichkeit berechnen soll. Mehr zu den einzelnen Designs kannst Du [hier nachlesen](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Bei der Empfindlichkeitserkennung werden historische Daten "on the go" analysiert und Anpassungen vorgenommen, falls der Algorithmus feststellt, dass du sensibler oder weniger empfindlich auf das Insulin reagierst als üblich. Weitere Details zum Algorithmus findest Du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Die Sensitivität (Empfindlichkeit) kannst Du auf der Übersicht in einem [zusätzlichen Graphen](#AapsScreens-section-g-additional-graphs) erkennen. Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf der Startseite im Auswahlmenü der angezeigten Kurven “Sensitivität” auswählst. Die weiße Linie zeigt dir das graphisch an. Hinweis: Du musst im [Ziel 8](#objectives-objective8) sein, um durch die Empfindlichkeitserkennung [Autosens](#Open-APS-features-autosens) die abzugebende Insulinmenge automatisch anpassen zu lassen. So lange Du diese Ziel (objective) noch nicht erreicht hast, wird der Autosens-Prozentsatz bzw. die Autosens-Kurve nur zu Deiner Information angezeigt. AAPS nimmt keine Änderungen vor.

### Resorptions-Einstellungen

Wenn Du Oref1 mit **SMB** nutzt, musst Du **min_5m_carbimpact** auf 8 ändern. Dieser Wert wird nur dann verwendet, wenn keine **CGM**-Werte empfangen werden oder körperliche Aktivitäten den Glukosewert-Anstieg „kompensieren“, den **AAPS** normalerweise zur Berechnung des Kohlenhydratabbaus verwendet. So lange der [Kohlenhydratabbau](../DailyLifeWithAaps/CobCalculation.md) nicht dynamisch aus den Veränderungen des Glukosewerts ermittelt werden kann, wird ein Standardwert für den Abbau angesetzt. Im Prinzip ist es eine Notlauffunktion.

(Config-Builder-aps)=

## APS

Wähle den gewünschten APS-Algorithmus für Therapie-Anpassungen. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OPAS).

* OpenAPS AMA 
  * Advanced-Meal-Assistent: älterer, nicht mehr empfohlener, Algorithmus.
  * Kurz gesagt: Der Vorteil ist, dass das System schneller mit einer Erhöhung der Basalrate reagieren kann, nachdem Du einen Mahlzeitenbolus abgegeben hast.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: der neueste Algorithmus, der für alle empfohlen wird.
  * Im Gegensatz zu AMA arbeitet SMB nicht so stark mit temporären Basalraten, sondern hauptsächlich mit **kleinen Super-Mikro-Boli**.
  * Hinweis : Es wird empfohlen, diesen Algorithmus von Anfang an zu verwenden, auch wenn dieser bis zum [Ziel 9](#objectives-objective9) keine SMB abgeben kann.

Beim Wechsel von AMA auf den SMB-Algorithmus, muss der *min_5m_carbimpact*-Wert manuell auf **8** (Standardwert für SMB) in [Einstellungen > Resorptions-Einstellungen](../SettingUpAaps/Preferences.md) geändert werden.

## Loop

Dieses Modul kann nicht deaktiviert werden, da es ein zentraler Bestandteil von **AAPS** ist.

## Beschränkungen

### Objectives (Ziele)

**AAPS** hat ein Lernprogramm (mit einer Reihe von Zwischenzielen, die Du nacheinander abschließen musst). Dies soll dich sicher durch die Einrichtung eines Closed Loop Systems führen. Das garantiert, dass du alles korrekt eingestellt hast und auch verstehst, was das System genau macht. Nur so kannst du dem System vertrauen.

Weitere Informationen findest Du auf der Seite [Ziele (Objectives)](../SettingUpAaps/CompletingTheObjectives.md).

## Synchronisierung

In diesem Abschnitt kannst Du einstellen, ob und wenn ja wohin **AAPS** Deine Daten senden darf.

### Nightscout-Client oder NSClientV3

Kann als [Server zur Erzeugung von Berichten](../SettingUpAaps/SettingUpTheReportingServer.md) verwendet werden und/oder zur [Remoteüberwachung](../RemoteFeatures/RemoteMonitoring.md), [Remotesteuerung](../RemoteFeatures/RemoteControl.md).

Der Abschnitt [Synchronisierung mit dem Berichtsserver](#SetupWizard-synchronization-with-the-reporting-server-and-more) hilft Dir, Dich zwischen dem Nightscout-Client (v1) und NSClientV3 zu entscheiden.

### Tidepool

Kann als [-Server für die Erstellung von Berichten](../SettingUpAaps/SettingUpTheReportingServer.md) genutzt werden.

Vgl. hierzu [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip+

Wird zum **Senden** von Daten wie z.B. den Behandlungen an xDrip+ verwendet.

### Open Humans

Schau Dir hierzu den Abschnitt [Open Humans](../SupportingAaps/OpenHumans.md) an.

### Wear

Auf einer Android Wear Smartwatch können die Daten von **AAPS** angezeigt und einige Funktionen gesteuert werden. Details dazu findest Du auf der Seite [AAPS-Ziffferblätter](../WearOS/WearOsSmartwatch.md).

### Samsung Tizen

Datenübertragung an Samsungs G-Watch Wear App (Tizen OS).

### Garmin

Verbindung zu einem Garmin-Gerät (Fenix, Edge, …)

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt dir die Behandlungen an, die zu Nightscout hochgeladen wurden. Falls Du einen Eintrag editieren oder löschen willst (z.B. weil Du weniger Kohlenhydrate gegessen hast, als erwartet) - wähle „Löschen“ und trage den neuen Wert mit Hilfe des [Buttons Kohlenhydrate auf dem Startbildschirm](#screens-bolus-carbs) ein.

## Allgemein

### Übersicht

Das ist **AAPS**es [zentraler Bildschirm](#AapsScreens-the-homescreen) und kann nicht deaktiviert werden.

#### Zeige Feld für Notizen in den Behandlungsdialogen

Hier kannst Du das Notizfeld für die Behandlungsdialoge (Bolus-Rechner, Insulin, Kohlenhydrate) ein- oder ausschalten.

#### Statusanzeige

Aktiviere wenn gewünscht die [Statusanzeige](#Preferences-status-lights) für eine Übersicht zu Batterie-, Kanülen-, Insulin- und Sensoralter sowie Batterie- und Reservoirstand. Bei Überschreiten der Warnschwelle werden die Werte gelb angezeigt. Ab der kritischen Warnschwelle werden die Werte rot angezeigt.

#### Erweiterte Einstellungen

**Abgabe nur eines Teils der vom Bolus-Rechner ermittelten Insulinmenge**: Viele Anwender geben bei der Nutzung von SMB nicht mehr 100% der vom Bolus-Rechner ermittelten Insulinmenge ab. Stattdessen geben Sie nur einen Teil (z.B. 75%) ab und lassen SMB und UAM ("nicht angemeldete Mahlzeiten") den Rest erledigen. In dieser Einstellung kannst Du einen Standard-Prozentsatz festlegen, mit dem der Bolus-Rechner arbeiten soll. Wenn Du z.B. 75% einstellst und eigentlich 10 IE bolen solltest, wird der Bolus-Rechner nur einen Mahlzeitenbolus von 7,5 IE vorschlagen.

**Aktivierung des Superbolus im Bolus-Rechner.** (Das ist etwas anderes als ein *Super Micro Bolus*!): Verwende den Superbolus mit Vorsicht und vor allem nicht, bevor Du wirklich verstanden hast, wie er funktioniert. Im Wesentlichen wird das Basalinsulin der nächsten zwei Stunden zum Bolus hinzugefügt und die Basalrate für zwei Stunden auf null gesetzt. **AAPS Loop-Funktionen werden deaktiviert - also mit Vorsicht verwenden! Wenn Du SMB-AAPS Looping-Funktionen nutzt, werden diese, wie in der Einstellung [„SMB Basal-Limitin Minuten“](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to) hinterlegt, deaktiviert. Wenn Du keine SMB-Looping-Funktionen verwendest, werden diese für zwei Stunden deaktiviert.** Details zum Superbolus findest Du [hier](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Aktionen

Ein Tab mit mehreren Schaltflächen, um [Aktionen](#screens-action-tab) in **AAPS** auszuführen.

### Automatisierung

Eine Registerkarte zur Verwaltung Deiner [Automationen](../DailyLifeWithAaps/Automations.md). Ab [Ziel 10](#objectives-objective10) verfügbar.

(Config-Builder-sms-communicator)=

### SMS Kommunikator

Der SMS-Kommunikator erlaubt die Remotesteuerung einiger **AAPS**-Funktionen via SMS. Weitere Informationen zum Setup findest Du auf der Seite [SMS-Befehle](../RemoteFeatures/SMSCommands.md).

### Essen

Zeigt die Essensvorlagen aus Nightscout an, siehe [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) für weitere Setup-Informationen.

Hinweis: Die Einträge können nicht im **AAPS**-Bolus-Rechner verwendet werden. (reine Anzeigefunktion)

(Config-Builder-wear)=

### Wear

Auf einer Android Wear Smartwatch können die Daten von AAPS angezeigt und einige Funktionen gesteuert werden (siehe [Seite AAPS Watchfaces](../WearOS/WearOsSmartwatch.md)). In den Einstellungen (Zahnradsymbol) kannst du die Variablen festlegen, die bei der Berechnung eines über die Uhr gegebenen Bolus berücksichtigt werden sollen (z.B. 15'-Trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear-Einstellungen](../images/ConfBuild_Wear.png)

Über den Wear Tab oder das Hamburger Menü (oben links, falls der Wear Tab nicht angezeigt wird) kannst du

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### Wartung

Gehe auf diesen Reiter, wenn Du Deine Einstellungen ex- oder importieren möchtest.

### Konfiguration (Konfigurations-Generator)

Diese aktuelle Registerkarte.