# Konfiguration (Konfigurations-Generator)

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## Insulin

![Insulintyp](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### Unterschiede der Insulintypen

* Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' und 'Free-Peak Oref' haben einen exponentiellen Verlauf.
* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Das Profil Free-Peak erlaubt, nicht nur die Insulinwirkdauer (DIA), sondern auch den Zeitpunkt der maximalen Insulinwirkung individuell festzulegen. Es sollte nur von erfahrenen Anwendern genutzt werden, die die Auswirkungen dieser Einstellungen kennen. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

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

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Konfigurations-Generator - BZ-Quelle](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* [Glunovo App](https://infinovo.com/) für Glunovo CGM System
* Zufalls-BZ: Generiert zufällige Blutzuckerdaten (nur im Demo-Modus)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Wähle die von dir genutzte Pumpe. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Konfigurationsgenerator - Pumpe wählen](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* Dana Rv2 (DanaR mit inoffiziellem Firmware Upgrade)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Sensitivitätserkennung

Hier kannst Du auswählen, mit welchem Algorithmus AAPS die Insulinempfindlichkeit berechnen soll. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Bei der Empfindlichkeitserkennung werden historische Daten "on the go" analysiert und Anpassungen vorgenommen, falls der Algorithmus feststellt, dass du sensibler oder weniger empfindlich auf das Insulin reagierst als üblich. Mehr Details zum Sensitivitäts Algorithmus findest du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). Die berechnete Insulinempfindlichkeit kannst du verfolgen, indem du auf der Startseite im Auswahlmenü der angezeigten Kurven “Sensitivität” auswählst. Die weiße Linie zeigt dir das graphisch an. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. So lange Du dieses Ziel (objective) noch nicht erreicht hast, wird der Autosens-Prozentsatz bzw. die Autosens-Kurve nur zu Deiner Information angezeigt. AAPS nimmt keine Änderungen vor.

### Resorptions-Einstellungen

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Im Prinzip ist es eine Notlauffunktion.

(Config-Builder-aps)=

## APS

Wähle den gewünschten APS-Algorithmus für Therapie-Anpassungen. Die Details zum ausgewählten Algorithmus findest du im Reiter OpenAPS (OPAS).

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Loop

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Dies soll dich sicher durch die Einrichtung eines Closed Loop Systems führen. Das garantiert, dass du alles korrekt eingestellt hast und auch verstehst, was das System genau macht. Nur so kannst du dem System vertrauen.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Synchronisierung

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## Behandlungen

Der Reiter Behandlungen (BEH) zeigt Dir die zu Nightscout hochgeladenen Behandlungen. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Übersicht

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### Zeige Feld für Notizen in den Behandlungsdialogen

Hier kannst Du das Notizfeld für die Behandlungsdialoge (Bolus-Rechner, Insulin, Kohlenhydrate) ein- oder ausschalten.

#### Statusanzeige

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Bei Überschreiten der Warnschwelle werden die Werte gelb angezeigt. Ab der kritischen Warnschwelle werden die Werte rot angezeigt.

#### Erweiterte Einstellungen

**Abgabe nur eines Teils der vom Bolus-Rechner ermittelten Insulinmenge**: Viele Anwender geben bei der Nutzung von SMB nicht mehr 100% der vom Bolus-Rechner ermittelten Insulinmenge ab. Stattdessen geben Sie nur einen Teil (z.B. 75%) ab und lassen SMB und UAM ("nicht angemeldete Mahlzeiten") den Rest erledigen. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. Wenn Du z.B. 75% einstellst und eigentlich 10 IE bolen solltest, wird der Bolus-Rechner nur einen Mahlzeitenbolus von 7,5 IE vorschlagen.

**Aktivierung des Superbolus im Bolus-Rechner.** (Das ist etwas anderes als ein *Super Micro Bolus*!): Verwende den Superbolus mit Vorsicht und vor allem nicht, bevor Du wirklich verstanden hast, wie er funktioniert. Im Wesentlichen wird das Basalinsulin der nächsten zwei Stunden zum Bolus hinzugefügt und die Basalrate für zwei Stunden auf null gesetzt. **AAPS Loop-Funktionen werden deaktiviert - also mit Vorsicht verwenden! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Aktionen

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### Automatisierung

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### SMS Kommunikator

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Essen

Zeigt die im Nahrungsmittel-Editor erfassten Einträge an. Weitere Informationen zur Einrichtung der Nahrungsmitteldatenbank findest Du im [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Note: Entries cannot be used in the **AAPS** calculator. (reine Anzeigefunktion)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). In den Einstellungen (Zahnradsymbol) kannst Du die Variablen festlegen, die bei der Berechnung eines über die Uhr gegebenen Bolus berücksichtigt werden sollen (z.B. 15'-Trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear-Einstellungen](../images/ConfBuild_Wear.png)

Über den Wear Tab oder das Hamburger Menü (oben links, falls der Wear Tab nicht angezeigt wird) kannst Du

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### Wartung

Access this tab to export / import settings.

### Konfiguration (Konfigurations-Generator)

This current tab.