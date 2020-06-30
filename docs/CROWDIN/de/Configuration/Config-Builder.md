# Konfigurations-Generator

Abhängig von Deinen Einstellungen kannst Du den Konfigurationsgenerator über eine Registerkarte am oberen Bildschirmrand oder über das Hamburger-Menü öffnen.

![Konfigurations-Generator öffnen](../images/ConfBuild_Open.png)

Im Reiter “Konfigurations-Generator” (KONF) kannst du fast alle AAPS-Funktionen konfigurieren. Die Auswahlfelder links (A) aktivieren die gewählte Funktion, die Auswahlfelder rechts (C) legen fest, ob die Funktion als Tab (E) angezeigt wird oder nicht. Falls die rechte Box nicht aktiviert ist, sind die Funktionen über das Hamburger-Menü (D) oben links am Bildschirm erreichbar.

Falls zusätzliche Einstellungen innerhalb der Funktion möglich sind, können sie über das Zahnrad (B) aufgerufen werden.

**Erste Konfiguration:** Seit AAPS 2.0 führt dich ein Einrichtungsassistent durch die Einrichtung von AndroidAPS. Drücke das 3-Punkte-Menü (F) oben rechts am Bildschirm und wähle "Einrichtungsassistent", um diesen zu starten.

![Konfigurations-Generator - Checkboxen und Zahnrad](../images/ConfBuild_ConfigBuilder.png)

## Registerkarte (Tab) oder Hamburger-Menü

Mit der Checkbox unter dem Augensymbol entscheidest Du, wie Du den entsprechenden Programmabschnitt öffnest.

![Registerkarte (Tab) oder Hamburger-Menü](../images/ConfBuild_TabOrHH.png)

## Profile

Wähle das Basal-Profil aus, das du benutzen möchtest. Unter [Profile](../Usage/Profiles.md) findest du weitere Informationen zu den Einstellungen.

### Lokales Profil (empfohlen)

Das lokale Profil nutzt das Profil, das in der Pumpe manuell erfasst wurde. Sobald "Lokales Profil" ausgewählt ist, erscheint ein weiterer Tab, in dem die aus der Pumpe ausgelesenen Profildaten bei Bedarf angepasst werden können. Beim nächsten Profil Wechsel werden sie an die Pumpe übertragen und in deren Profil 1 gespeichert. Diese Einstellung wird empfohlen, da keine Internetverbindung erforderlich ist.

Deine lokalen Profile werden mit den [Einstellungen exportiert](../Usage/ExportImportSettings.rst). Stelle also sicher, dass Du immer ein Backup an einem sicheren Ort hast.

![Einstellungen lokales Profil](../images/LocalProfile_Settings.png)

Schaltflächen:

* grünes Plus: hinzufügen
* rotes X: löschen
* blauer Pfeil: duplizieren

If you make any changes to your profile, make sure, you are editing the correct profile. In profile tab there is not always shown the actual profile beeing used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Profilwechsel klonen

You can easily create a new local profile from a profile switch. In this case timeshift and percentage will be applied to the new local profile.

1. Gehe zum Tab Behandlungen (BEH).
2. Wähle Profilwechsel.
3. Drücke "Klonen".
4. Das neue lokale Profil kannst Du im Tab "Lokales Profil" (LP) oder über das Hamburger-Menü bearbeiten.

![Profilwechsel klonen](../images/LocalProfile_ClonePS.png)

If you want to switch from Nightscout profile to local profile just do a profile switch on your NS profile and clone the profile switch as described above.

#### Lokale Profile zu Nightscout hochladen

Local profiles can also be uploaded to Nightscout. The settings can be found in NS Client preferences.

![Upload local profile to NS](../images/LocalProfile_UploadNS2.png)

Have in mind, only the profile switches made over the profile tab are uploaded to nightscout. If you do a profile switch by using the profile button in the mainscreen, it will not be uploaded.

Advantage:

* Keine Internetverbindung erforderlich, um die Profileinstellungen zu ändern.
* Profilwechsel können direkt auf dem Smartphone vorgenommen werden.
* neues Profil kann über den Profilwechsel erstellt werden
* lokale Profile können zu Nightscout hochgeladen werden

Disadvantage:

* kein(e)

### Nightscout-Profil

NS Profile uses the profiles you have saved on your Nightscout site (https://[yournightscoutsiteaddress]/profile). You can use the [Profile Switch](../Usage/Profiles.md) to change which of those profiles is active, this writes the profile to the pump in case of AndroidAPS failure. This allows you to easily create multiple profiles in Nightscout (i.e.. work, home, sports, holidays, etc.). Shortly after clicking on "Save" they will be transferred to AAPS if your smartphone is online. Even without an Internet connection or without a connection to Nightscout, the Nightscout profiles are available in AAPS once they have been synchronized.

Do a **profile switch** to activate a profile from Nightscout. Press and hold the current profile in the AAPS homescreen at the top (grey field between the light blue "Open/Closed Loop" field and the dark blue target area field) > Profile switch > Select profile > OK. AAPS also writes the selected profile into the pump after the profile change, so that it is available without AAPS in an emergency and continues to run.

Advantage:

* Mehrere Profile
* einfach per PC oder Tablet zu bearbeiten

Disadvantage:

* Keine lokalen Änderungen an den Profileinstellungen möglich.
* Profilwechsel nicht direkt auf dem Smartphone möglich.

## Insulin

Select the type of insulin curve you are using. The options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak.

The DIA is not the same for each person. That's why you have to test it for yourself. But it must always be at least 5 hours. You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page.

For Rapid-Acting and Ultra-Rapid, the DIA is the only variable you can adjust by yourself, the time to peak is fixed. Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings.

The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

### Rapid-Acting Oref

* empfohlen für Humalog, Novolog und Novorapid
* DIA = mindestens 5 Stunden
* Wirkdauermaximum = 75 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

### Ultra-Rapid Oref

* empfohlen für FIASP
* DIA = mindestens 5 Stunden
* Wirkdauermaximum = 55 Minuten nach Insulingabe (fest eingestellt, nicht anpassbar)

For a lot of people there is practically no noticeable effect of FIASP after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.

![Config Builder Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free Peak Oref

With the "Free Peak 0ref" profile you can individually enter the peak time. The DIA is automatically set to 5 hours if it is not specified higher in the profile.

This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## BZ-Quelle

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Nightscout-Client BZ
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - nur Version 4.15.57 und neuer werden unterstützt
* [gepatchte Dexcom App](https://github.com/dexcomapp/dexcomapp/) - Wähle zusätzlich in den Einstellungen "Sende BZ-Werte zu xDrip+", wenn du die xDrip+ Alarme nutzen willst. 
    
    ![Konfigurations-Generator - BZ-Quelle](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

## Pumpe

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* DanaR Korean (koreanische Version der DanaR)
* DanaRv2 (DanaR mit Firmware Upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Combo ](Accu-Chek-Combo-Pump.md) (erfordert Installation von Ruffy)
* ICT (für OpenLoop mit ICT, AAPS macht nur Behandlungsvorschläge, die du dann selbst mit dem Pen umsetzen musst)
* Virtuelle Pumpe (für OpenLoop mit nicht unterstützten Pumpen, AAPS macht nur Behandlungsvorschläge, die du dann selbst in deiner Pumpe umsetzen musst)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

## Empfindlichkeitserkennung

Select the type of sensitivity detection. This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features.html#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Resorptions-Einstellungen

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS MA (meal assist, Algorithmus aus 2016)
* OpenAPS AMA (advanced meal assist, Algorithmus aus 2017)  
    Details zu OpenAPS AMA findest Du in der [OpenAPS Dokumentation](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Einfach ausgedrückt profitierst Du von schnelleren AAPS-Korrekturen nach einem Mahlzeitenbolus, wenn du die Menge der Kohlenhydrate korrekt angegeben hast.  
    Hinweis: OpenAPS AMA steht ab dem [9. Ziel](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) (objective 9) zur Verfügung.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, aktuellster Algorithmus für erfahrene Anwender  
    Hinweis: OpenAPS SMB steht ab dem [10. Ziel](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) (objective 10) zur Verfügung und min_5m_carbimpact muss auf 8 eingestellt werden (Konfigurations-Generator > Sensitivitätserkennung > Sensitivität Oref1 Einstellungen).

## Loop

Define whether you want to allow AAPS automatic controls or not.

### Open Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). The Closed Loop works within numerous safety limits, which you can be set individually. Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.

## Ziele (objectives - Lernprogramm)

AndroidAPS has a number of objectives that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

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

#### Erweiterte Einstellungen

Enable super bolus functionality in wizard. Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Aktionen

Some buttons to quickly access common features:

* Profilwechsel (Profil Switch - weitere Informationen dazu siehe Seite [Profile](../Usage/Profiles.md))
* Temporäres Ziel
* Temporäre Basalrate starten / Basalrate
* Verzögerter Bolus (nur für DanaR/RS und Combo)
* Tagebucheinträge
    
    * BZ Test
    * Katheterwechsel - Katheter- und Reservoirwechsel dokumentieren, Katheter und Kanüle füllen
    * CGM-Sensor setzen
    * Pumpenbatterie Wechsel
    * Notiz
    * Bewegung
* Anzeige des Alters von Sensor, Kanüle und Pumpenbatterie
* Historie
* TDD (Total daily dose = Bolus + Basal pro Tag)

Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). Others prefer range of 32% to 37% of TDD for TBB. Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Actions tab](../images/ConfBuild_ConfBuild_Actions_b.png)

### SMS-Kommunikator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Essen

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Wenn Du Deinen Loop von der Uhr aus steuern willst (z.B. Bolus abgeben), aktiviere "Steuerung durch die Uhr".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Alle Daten erneut senden. Dies kann hilfreich sein, wenn die Uhr längere Zeit außer Reichweite war und du die Informationen an die Uhr pushen willst.
* Über das Smartphone die Einstellungen auf der Uhr öffnen.

### xDrip+ Statuszeile (Uhr)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### Dauer-Benachrichtigung

Displays a summary of current BG, delta, active TBR%, active basal u/h and profile, IOB and split into bolus IOB and basal IOB on the phones's dropdown screen and phone's lock screen.

![AAPS widget](../images/ConfBuild_Widget.png)

### Nightscout-Client

Setup sync of your AndroidAPS data with Nightscout.

If **Log app start to NS** is activated each AndroidAPS will be visible in Nightscout. Might be useful to detect problems with the app (i.e. battery optimization not disabled for AAPS) but can flood the Nightscout graph with entries.

#### Alarm-Optionen

Activate/deactivate AndroidAPS alarms

![Alarm-Optionen](../images/ConfBuild_NSClient_Alarms.png)

#### Verbindungseinstellungen

Offline looping, disable roaming...

If you want to use only a specific WiFi network you can enter its **WiFi SSID **. Several SSIDs can be separated by semicolon. To delete all SSIDs enter a blank space in the field.

![Nightscout connection settings](../images/ConfBuild_ConnectionSettings.png)

#### Erweiterte Einstellungen

* Lade fehlende Blutzuckerwerte automatisch aus Nightscout nach.
* Ankündigungen aus Fehlern generieren Erstelle Nightscout-Einträge für Fehler-Dialoge und lokale Alarme. Sie werden auch im Careportal im Bereich Behandlungen angezeigt,
* Aktiviere Broadcasts für andere Apps (z. B. xDrip+)
* Zu Nightscout nur hochladen (keine Synchronisierung)
* Kein Upload zu Nightscout
* Verwende absolute statt prozentuale Basalraten -> Muss aktiviert sein, wenn du [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) nutzen willst.

![Nightscout advanced settings](../images/ConfBuild_NSClient_Advanced.png)

### Wartung

Email and number of logs to be send. Normally no change necessary.

### Konfigurations-Generator

Use tab for config builder instead of hamburger menu.