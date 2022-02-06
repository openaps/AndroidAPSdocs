# Konfigurations-Generator

Abhängig von Deinen Einstellungen kannst Du den Konfigurationsgenerator über eine Registerkarte am oberen Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open_AAPS30.png)

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links (A) aktivieren die gewählte Funktion, die Auswahlfelder rechts (C) legen fest, ob die Funktion als Tab (E) angezeigt wird oder nicht. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar.

Falls zusätzliche Einstellungen innerhalb der Funktion möglich sind, können sie über das Zahnrad (B) aufgerufen werden.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü (F) oben rechts am Bildschirm und wähle "Einrichtungsassistent", um diesen zu starten.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder_AAPS30.png)

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH_AAPS30.png)

## Profile

* Wähle das Basal-Profil aus, das du benutzen möchtest. Siehe Seite [Profile](../Usage/Profiles.md) für weitere Informationen zu den Einstellungen.
* Ab AndroidAPS 3.0 kann das Nightscout Profil nicht mehr verwendet werden, aber lokale Profile können mit NS synchronisiert werden.

### Lokales Profil

Das lokale Profil nutzt das Profil, das in der Pumpe manuell erfasst wurde. Sobald "Lokales Profil" ausgewählt ist, erscheint ein weiterer Tab, in dem die aus der Pumpe ausgelesenen Profildaten bei Bedarf angepasst werden können. Beim nächsten Profil Wechsel werden sie an die Pumpe übertragen und in deren Profil 1 gespeichert. Diese Einstellung wird empfohlen, da keine Internetverbindung erforderlich ist.

Deine lokalen Profile werden mit den [Einstellungen exportiert](../Usage/ExportImportSettings.rst). Stelle also sicher, dass Du immer ein Backup an einem sicheren Ort hast.

![Local Profile settings](../images/LocalProfile_Settings.png)

Schaltflächen:

* grünes Plus: hinzufügen
* rotes X: löschen
* blauer Pfeil: duplizieren

Achte darauf, dass Du das richtige Profil anpasst, wenn Du Änderungen vornimmst. Beim Wechsel zum Profil-Tab wird nicht immer das aktuell genutzte Profil angezeigt. Wenn Du z.B. einen Profilwechsel über den Startbildschirm durchgeführt hast, wird ggf. im Profil-Tab ein anderes Profil angezeigt.

#### Clone profile switch

Aus einem Profilwechsel kannst Du ganz einfach ein neues lokales Profil erstellen. Zeitverschiebung und Prozentsatz des Profilwechsels werden in das neue lokale Profil übernommen.

1. Klicke auf das 3-Punkte-Menü in der oberen rechten Ecke.
2. Wähle "Behandlungen" aus.
3. Drücke das Sternsymbol um auf die Seite des Profilwechsels zuzugreifen.
4. Wähle den gewünschten Profilwechsel und drücke "Clone".
5. Das neue lokale Profil kannst Du im Tab "Lokales Profil" (LP) oder über das Hamburger-Menü bearbeiten.

![Clone profile switch](../images/LocalProfile_ClonePS_AAPS30.png)

#### Lokale Profile zu Nightscout hochladen

Lokale Profile können auch zu Nightscout hochgeladen werden. Die Einstellungen sind in den [NSClient Einstellungen](../Configuration/Preferences#nightscout-client) zu finden.

![Upload local profile to NS](../images/LocalProfile_UploadNS_AASP30.png)

### Profil-Helfer

Der Profil-Helfer ermöglicht zwei Funktionen:

1. Finden eines Profils für Kinder
2. Vergleichen von zwei Profilen oder von Profilwechseln, um ein neues Profil zu klonen.

Details werden auf der separaten [Profil-Helfer-Seite](../Configuration/profilehelper.rst) erläutert.

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
* Im Abschnitt zu den Insulinprofilen auf [dieser Seite](../Getting-Started/Screenshots#insulin-profile) findest Du weitere Informationen dazu. 

### Unterschiede der Insulintypen

* Bei den Profilen 'Rapid-Acting', 'Ultra-Rapid' und 'Lyumjev' kannst du nur die Insulinwirkdauer (DIA) anpassen. Der Zeitpunkt der maximalen Insulinwirkung ist fest vorgegeben. 
* Das Profil Free-Peak erlaubt, nicht nur die Insulinwirkdauer (DIA), sondern auch den Zeitpunkt der maximalen Insulinwirkung individuell festzulegen. Es sollte nur von erfahrenen Anwendern genutzt werden, die die Auswirkungen dieser Einstellungen kennen. 
* Das [Kurvendiagramm](../Getting-Started/Screenshots#insulin-profile) unterstützt Dich dabei, die verschiedenen Kurven zu verstehen. 
* Wenn Du die Checkbox akivierst, wird das Diagramm als eigener Tab angezeigt, sonst ist es über das Hamburger-Menü links oben erreichbar.

#### Rapid-Acting Oref

![Insulin type Rapid-Acting Oref](../images/ConfBuild_Insulin_RAO.png)

* empfohlen für Humalog, Novolog und Novorapid
* DIA = at least 5.0h
* Wirkmaximum = 75 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Ultra-Rapid Oref

![Insulin type Ultra-Rapid Oref](../images/ConfBuild_Insulin_URO.png)

* empfohlen für FIASP
* DIA = at least 5.0h
* Wirkmaximum = 55 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Lyumjev

![Insulin type Lyumjev](../images/ConfBuild_Insulin_L.png)

* Spezielles Insulinprofil für Lyumjev
* DIA = at least 5.0h
* Wirkmaximum = 45 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

#### Free Peak Oref

![Insulin type Free Peak Oref](../images/ConfBuild_Insulin_FPO.png)

* Erlaubt das Wirkmaximum der Insulinaktivität individuell zu definieren. Klicke dazu auf das Zahnrad um erweiterte Einstellungen einzugeben.
* DIA wird automatisch auf 5 Stunden gesetzt, sofern von dir im Profil nichts anderes definiert wird.
* Dieses Profil wird dann empfohlen, wenn dein Insulintyp von den anderen Profilen nicht abgedeckt werden kann oder wenn eine Mischung verschiedener Insuline verwendet wird.

## BZ-Quelle

Hier kannst du auswählen, aus welcher Quelle AAPS die BZ-Werte empfangen soll. Weitere Informationen findest du auf der Seite [BZ-Quelle](BG-Source.rst).

![Config Builder BG source](../images/ConfBuild_BGSource_AAPS30.png)

* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0).
* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - Cannot be used as receiver for Dexcom G6 as of AAPS 3.0 (see [release notes](../Installing-AndroidAPS/Releasenotes.html?highlight=glunovo#important-hints) for details.
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)
* [Tomato App](http://tomato.cool/) for MiaoMiao device
* [Glunovo App](https://infinovo.com/) for Glunovo CGM system
* NSClient BG - not recommended as closed loop relies on mobile data / wifi coverage in this case. CGM data will only be received if there is an online connection to your NS site. Better use local broadcast from one of the other CGM data sources.
* Random BG: Generates random BG data (Demo mode only)

## Pumpe

Select the pump you are using.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS30.png)

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
    
    * For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.
    * [Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)

* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Omnipod Eros](OmnipodEros.rst)
* [Omnipod DASH](OmnipodDASH.md)
* [Medtronic](MedtronicPump.md)
* [Diaconn G8](DiaconnG8.rst)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

## Empfindlichkeitserkennung

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Resorptions-Einstellungen

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Im Prinzip ist es eine Notlauffunktion.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Loop

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Open Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Ziele (objectives - Lernprogramm)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Behandlungen

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

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
* CGM (opens xDrip+)
* Kalibrierung

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard-Einstellungen

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Vordefinierte temporäre Ziele

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Füll-/Vorfüll-Standardmengen

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Zielbereich für die Grafikanzeige

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Kurze Tab-Überschriften

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Zeige Feld für Notizen in den Behandlungsdialogen

Choose if you want to have a notes field when entering treatments or not.

#### Statusanzeige

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Erweiterte Einstellungen

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Aktionen

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatisierung

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS Kommunikator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Nightscout-Client

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Konfigurations-Generator

Use tab for config builder instead of hamburger menu.