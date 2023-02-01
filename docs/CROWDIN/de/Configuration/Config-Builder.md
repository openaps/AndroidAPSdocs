# Konfigurations-Generator

Abhängig von Deinen Einstellungen kannst Du den Konfigurationsgenerator über eine Registerkarte am oberen Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links (A) aktivieren die gewählte Funktion, die Auswahlfelder rechts (C) legen fest, ob die Funktion als Tab (E) angezeigt wird oder nicht. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar.

Falls zusätzliche Einstellungen innerhalb der Funktion möglich sind, können sie über das Zahnrad (B) aufgerufen werden.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü (F) oben rechts am Bildschirm und wähle "Einrichtungsassistent", um diesen zu starten.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(tab-or-hamburger-menu)=

## Registerkarte (Tab) oder Hamburger-Menü

With the checkbox under the eye symbol you can decide how to open the corresponding program section.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

(profile)=

## Profile

* Wähle das Basal-Profil aus, das du benutzen möchtest. Siehe Seite [Profile](../Usage/Profiles.md) für weitere Informationen zu den Einstellungen.
* Ab AAPS 3.0 können nur lokale Profile verwendet werden.

However, it is possible to synchronise a Nightscout profile into a local profile. To do this, however, it is important to clone the whole database record consisting of several profiles in the Nightscout editor. Please see the instructions below. This can be helpful if major changes to a more extensive profile can be entered more easily via the web interface, e.g. to manually copy data from a spreadsheet.

(local-profile)=

### Lokales Profil

Local profile uses the basal profile manually entered in phone. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. With the next profile switch they are then written to the pump in profile 1. This profile is recommended as it does not rely on internet connectivity.

Your local profiles are part of [exported settings](../Usage/ExportImportSettings.md). So make sure to have a backup in a safe place.

![Local Profile settings](../images/LocalProfile_Settings.png)

Buttons:

* grünes Plus: hinzufügen
* rotes X: löschen
* blauer Pfeil: duplizieren

If you make any changes to your profile, make sure, you are editing the correct profile. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Profilwechsel klonen

You can easily create a new local profile from a profile switch. In this case timeshift and percentage will be applied to the new local profile.

1. Klicke auf das 3-Punkte-Menü in der oberen rechten Ecke.
2. Wähle "Behandlungen" aus.
3. Drücke das Sternsymbol um auf die Seite des Profilwechsels zuzugreifen.
4. Wähle den gewünschten Profilwechsel und drücke "Clone".
5. Das neue lokale Profil kannst Du im Tab "Lokales Profil" (LP) oder über das Hamburger-Menü bearbeiten.

![Profilwechsel klonen](../images/LocalProfile_ClonePS_AAPS30.png)

(upload-local-profiles-to-nightscout)=

#### Lokale Profile zu Nightscout hochladen

Local profiles can also be uploaded to Nightscout. The settings can be found in [NSClient preferences](../Configuration/Preferences.md#nsclient).

![Upload local profile to NS](../images/LocalProfile_UploadNS_AASP30.png)

#### Profil im Nighscout Profil-Editor ändern

You can synchronoze changes to the profile in the Nighscout profile editor to local profiles. The settings can be found in [NSClient preferences](../Configuration/Preferences.md#nsclient).

It is necessary to clone the actual active entire Nightscout database records for the profiles and not just a profile with the blue arrow! The new database records then carries the current date and can be activated via the tab "local profile".

![Clone database records](../images/Nightscout_Profile_Editor.PNG)

### Profil-Helfer

Profile helper offers two functions:

1. Finden eines Profils für Kinder
2. Vergleichen von zwei Profilen oder von Profilwechseln, um ein neues Profil zu klonen.

Details are explained on the separate [profile helper page](../Configuration/profilehelper.md).

(insulin)=

## Insulin

![Insulin type](../images/ConfBuild_Insulin_AAPS30.png)

* Hier musst du auswählen, welchen Insulintyp du verwendest.
* Die Oref Optionen 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' und 'Free-Peak Oref' haben einen exponentiellen Verlauf. Mehr Informationen dazu finden sich in den [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Diese Kurven variieren basierend auf der DIA (Insulinwirkdauer) und dem zeitlichen Abstand zum Wirkmaximum.
    
    * Die LILA Line zeigt, wie viel **Insulin nach einer Injektion verbleibt** und wie es im Zeitverlauf abgebaut wird.
    * Die BLAUE Line zeigt, **wie aktiv** das Insulin ist.

### DIA

* Die Insulinwirkdauer (DIA) ist nicht für jeden gleich. Daher musst Du es selbst für Dich austesten. 
* Unter fünf Stunden darf der Wert aber nicht liegen.
* Für viele Menschen mit Diabetes, die ultra-schnell wirkende Insuline wie Fiasp nutzen, gibt es 3 - 4 Stunden nach der Insulingabe nahezu keinen spürbaren Effekt mehr, auch wenn dann rechnerisch noch 0.0xx Einheiten vorhanden sind. Die verbleibende Menge kann aber bei Sport und anderen Aktivitäten doch noch einen Einfluss haben. Daher nutzt AAPS eine minimale Wirkdauer von 5 Stunden.
* You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots.md#insulin-profile) page.

### Unterschiede der Insulintypen

* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Das Profil Free-Peak erlaubt, nicht nur die Insulinwirkdauer (DIA), sondern auch den Zeitpunkt der maximalen Insulinwirkung individuell festzulegen. Es sollte nur von erfahrenen Anwendern genutzt werden, die die Auswirkungen dieser Einstellungen kennen. 
* The [insulin curve graph](../Getting-Started/Screenshots.md#insulin-profile) helps you to understand the different curves.
* Wenn Du die Checkbox akivierst, wird das Diagramm als eigener Tab angezeigt, sonst ist es über das Hamburger-Menü links oben erreichbar.

#### Rapid-Acting Oref

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* empfohlen für Humalog, Novolog und Novorapid
* DIA = mindestens 5 Stunden
* Wirkmaximum = 75 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Ultra-Rapid Oref

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* empfohlen für FIASP
* DIA = mindestens 5 Stunden
* Wirkmaximum = 55 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

(lyumjev)=

#### Lyumjev

![Insulin type Lyumjev](../images/ConfBuild_Insulin_L.png)

* Spezielles Insulinprofil für Lyumjev
* DIA = mindestens 5 Stunden
* Wirkmaximum = 45 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Free Peak Oref

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Erlaubt das Wirkmaximum der Insulinaktivität individuell zu definieren. Klicke dazu auf das Zahnrad um erweiterte Einstellungen einzugeben.
* DIA wird automatisch auf 5 Stunden gesetzt, sofern von dir im Profil nichts anderes definiert wird.
* Dieses Profil wird dann empfohlen, wenn dein Insulintyp von den anderen Profilen nicht abgedeckt werden kann oder wenn eine Mischung verschiedener Insuline verwendet wird.

(bg-source)=

## BZ-Quelle

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

![Config Builder BG source](../images/ConfBuild_BGSource_AAPS30.png)

* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) - Wähle zusätzlich in den Einstellungen “Sende BZ-Werte zu xDrip+”, wenn du die xDrip+ Alarme nutzen willst.
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Cannot be used as receiver for Dexcom G6 as of AAPS 3.0 (see [release notes](../Installing-AndroidAPS/Releasenotes.md#important-hints-3-0-0) for details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - nur Version 4.15.57 und neuer werden unterstützt
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) für MiaoMiao Geräte
* [Glunovo App](https://infinovo.com/) für Glunovo CGM System
* NSClient BG - nicht empfohlen, da der Closed Loop in diesem Fall von der Verfügbarkeit mobiler Daten bzw. eines WLAN abhängt. CGM-Daten werden nur dann empfangen, wenn eine Online-Verbindung zu Deiner Nightscout-Website besteht. Nutze lieber lokale Broadcasts aus einer der anderen CGM-Datenquellen.
* Zufalls-BZ: Generiert zufällige Blutzuckerdaten (nur im Demo-Modus)

(pump)=

## Pumpe

Select the pump you are using.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* Dana Rv2 (DanaR mit inoffiziellem Firmware Upgrade)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * Wenn Du eine Dana-Pumpe nutzt, kannst Du in den **erweiterten Einstellungen** den Bluetooth Watchdog aktivieren, falls dies notwendig sein sollte. Er deaktiviert Bluetooth für eine Sekunde, falls keine Verbindung zur Pumpe möglich ist. Dies kann helfen, falls bei deinem Smartphone Probleme mit der Bluetooth-Verbindung auftreten.
    * Das [Passwort für die Dana RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) muss korrekt eingegeben werden. Das Passwort wurde in früheren Versionen nicht überprüft.

* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo ](Accu-Chek-Combo-Pump.md) (erfordert Installation von Ruffy)
* [Omnipod Eros](OmnipodEros.md)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.md)
* ICT (für OpenLoop mit ICT, AAPS macht nur Behandlungsvorschläge, die du dann selbst mit dem Pen umsetzen musst)
* Virtuelle Pumpe (für OpenLoop mit nicht unterstützten Pumpen, AAPS macht nur Behandlungsvorschläge, die du dann selbst in deiner Pumpe umsetzen musst)

## Empfindlichkeitserkennung

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives.md#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

(absorption-settings)=

### Resorptions-Einstellungen

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.md) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(aps)=

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist [fortgeschrittener Mahlzeitenassistent], Stand des Algorithmus 2017) In einfachen Worten: Wenn Du die Kohlenhydrate verlässlich eingibst, kann das System nach einem Mahlzeitenbolus schneller auf BZ-Anstiege reagieren und z.B. eine höhere Basalrate abgeben.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 9](../Usage/Objectives.md#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Wechsel zwischen Open Loop, Closed Loop und Unterbrechung bei niedrigen BZ (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

(open-loop)=

### Open Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und macht dir bei Bedarf Behandlungsvorschläge, wie du deine Therapie anpassen solltest. 
* Die Vorschläge werden nicht automatisch (wie im Closed Loop) ausgeführt, sondern müssen manuell in die Pumpe eingegeben werden. Wenn Du eine kompatible Pumpe (Dana R/RS oder Accu Chek Combo) verwendest, kann dies auch über eine Schaltfläche in AndroidAPS geschehen. 
* Diese Option ist zum Kennenlernen der Funktionsweise gedacht oder falls du eine nicht unterstützte Pumpe verwendest.

(closed-loop)=

### Closed Loop

* AAPS wertet laufend alle verfügbaren Daten (IOB, COB, BZ-Wert) aus und passt die Behandlung bei Bedarf automatisch (also ohne weiteren Eingriff durch dich) an, um den eingestellten Zielbereich oder Zielwert zu erreichen (Bolusabgabe, temporäre Basalrate, Insulinabschaltung zur Hypovermeidung etc.). 
* Der Closed Loop arbeitet im Rahmen zahlreicher Sicherheitsgrenzen, die du individuell einstellen kannst.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives.md#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Hinweis: Im Closed Loop wird ein Zielwert statt einem Zielbereich empfohlen (also z.B. 100 mg/dl statt 90 - 130 mg/dl bzw. 5,5 mmol statt 5,0 - 7,0 mmol).

### Abschalten des Basalrate bei niedrigen Werten (Low Glucose Suspend - LGS)

* maxIOB wird auf null gesetzt
* Das bedeutet, wenn der Blutzuckerspiegel sinkt, kann AAPS die Basalrate automatisch reduzieren.
* Aber wenn der Blutzuckerspiegel steigt, wird keine automatische Korrektur vorgenommen. Deine Basalrate bleibt die gleiche wie in Deinem ausgewählten Profil.
* Nur wenn das Basal-IOB negativ ist (wegen einer vorangegangenen Abschaltung der Basalrate bei niedrigen Werten) wird zusätzliches Insulin abgegeben, um den BZ zu senken.

### Minimaler Wert zur Anfrage einer Änderung

* Im Open Loop erhälst Du jedes Mal eine Benachrichtigung, wenn AAPS empfiehlt, die Basalrate anzupassen. 
* Um die Anzahl der Benachrichtigungen zu reduzieren, kannst Du entweder einen breiteren BZ-Zielbereich verwenden oder den Prozentsatz des minimalen Werts zur Anfrage einer Änderung erhöhen.
* Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

## Ziele (objectives - Lernprogramm)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.md) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.md) page for more information.

## Behandlungen

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots.md#carb-correction).

## Allgemein

### Übersicht

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Bildschirm aktiv lassen

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Schaltflächen

Define which Buttons are shown on the home screen.

* Behandlungen
* Bolus-Rechner
* Insulin
* Kohlenhydrate
* CGM (öffnet xDrip+)
* Kalibrierung

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard-Einstellungen

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Vordefinierte temporäre Ziele

Choose default temp-targets (duration and target). Preset values are:

* Bald essen: Zielwert 72 mg/dl / 4.0 mmol/l, Dauer 45 min
* Aktivität: Zielwert 140 mg/dl / 7.8 mmol/l, Dauer 90 min
* Hypo: Zielwert 125 mg/dl / 6.9 mmol/l, Dauer 45 min

#### Füll-/Vorfüll-Standardmengen

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Zielbereich für die Grafikanzeige

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Kurze Tab-Überschriften

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Zeige Feld für Notizen in den Behandlungsdialogen

Choose if you want to have a notes field when entering treatments or not.

#### Statusanzeige

Choose if you want to have [status lights](../Configuration/Preferences.md#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Erweiterte Einstellungen

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features.md#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(actions)=

### Aktionen

* Einige Schaltflächen, um auf häufig verwendete Funktionen zugreifen zu können.
* See [AAPS screenshots](../Getting-Started/Screenshots.md#action-tab) for details.

### Automatisierung

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.md).

(sms-communicator)=

### SMS Kommunikator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.md) for more setup information.

### Essen

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

(wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### xDrip+ Statuszeile (Uhr)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Nightscout-Client

* Ns-Client Synchronisierung deiner AndroidAPS-Daten mit Nightscout einrichten.
* Settings in [preferences](../Configuration/Preferences.md#nsclient) can be opened by clicking the cog wheel.

### Wartung

Email and number of logs to be send. Normally no change necessary.

### Konfigurations-Generator

Use tab for config builder instead of hamburger menu.