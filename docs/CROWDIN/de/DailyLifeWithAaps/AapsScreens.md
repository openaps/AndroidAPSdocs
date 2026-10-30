# AAPS-Bildschirme

```{contents}
:backlinks: entry
:depth: 2
```

(the-homescreen)= (AapsScreens-the-homescreen)=

## The main screen

![Main screen](../images/Home_Homescreen.png)

Wenn Du **AAPS** öffnest, ist dies die erste Ansicht. Sie enthält die meisten der täglich benötigten Informationen.

### Section A - Top bar

* The **menu** (☰) on the left opens the navigation drawer with **Treatments history**, **History browser**, **Statistics**, **Profile helper**, **Maintenance**, **Setup Wizard**, **Configuration** and more.
* The **search bar** finds settings, dialogs and documentation — just start typing (see [Global search](../DailyLifeWithAaps/GlobalSearch.md)).
* The **Settings** (gear) icon on the right opens all [settings](../SettingUpAaps/Preferences.md).

(aaps-screens-profile--target)=

### Section B - Status block

#### Aktueller Blutzucker

The latest blood glucose reading from your CGM is shown in the big circle on the left, together with the difference to the previous reading (delta) and the age of the reading.

Die Farbe des Glukosewertes zeigt wie sich der Wert zum definierten [Zielbereich](#Preferences-range-for-visualization) verhält.

* green = in range
* red = below range
* yellow = above range

![BG circle in range, green](../images/Home_Delta.png) ![BG circle above range, yellow](../images/Home_Delta_high.png) ![BG circle below range, red](../images/Home_Delta_low.png)

(loop-status)= (AapsScreens-loop-status)=

#### Loop Status

![Loop Status](../images/Home2020_LoopStatus.png)

Next to the BG circle, an icon shows the running mode of the loop (from top to bottom in the picture):

1. Grüner Kreis = [Closed Loop](#KeyAapsFeatures-ClosedLoop), Loop läuft
2. Violetter Kreis mit gepunkteter Linie = [Low Glucose Suspend (LGS)](#KeyAapsFeatures-LGS) (dt. Abschalten vor Niedrig)
3. Blauer Kreis mit gepunkteter Linie = [Open Loop](#KeyAapsFeatures-OpenLoop)
4. Red circle with cross = loop disabled (not working permanently)
5. Red pause icon = loop suspended (temporarily paused but basal insulin will be given) - remaining time is shown next to the icon
6. Grey circle with plug = pump disconnected (temporarily no insulin dosage at all) - remaining time is shown next to the icon

Press the icon to open the Loop dialog. The dialog's content depends on the current state:

* While the loop is **running** (closed, open or LGS), you can switch the running mode (Closed Loop, Low Glucose Suspend, Open Loop or Disable loop), **suspend** the loop or **disconnect** the pump for a chosen duration.
* While the loop is **disabled**, you can re-enable it by selecting a running mode, or disconnect the pump.
* While the loop is **suspended**, you can **resume** it, disconnect the pump, or pick a new duration under **Suspend loop** to extend the suspension.
* While the pump is **disconnected**, you can **reconnect** the pump, or pick a new duration under **Disconnect pump** to extend the disconnection.

When you extend a suspension or a disconnection, the new duration **starts from now**: it replaces the remaining time, it is not added to it. You do not have to resume or reconnect first.

The dialog while the loop is running in closed loop:

![Loop dialog in closed loop](../images/loop/loop_dialog_closed_loop.png)

The dialog while the loop is suspended, with **Resume** and the durations to extend the suspension:

![Loop dialog while the loop is suspended](../images/loop/loop_dialog_suspended.png)

The dialog while the pump is disconnected, with **Reconnect Pump** and the durations to extend the disconnection:

![Loop dialog while the pump is disconnected](../images/loop/loop_dialog_disconnected.png)

The dialog in Low Glucose Suspend, in open loop and while the loop is disabled only differs in the running modes it offers:

![Loop dialog in Low Glucose Suspend](../images/loop/loop_dialog_lgs.png)

![Loop dialog in open loop](../images/loop/loop_dialog_open_loop.png)

![Loop dialog while the loop is disabled](../images/loop/loop_dialog_disabled.png)

This is how the main screen looks in each mode. The color band at the top of the graph changes at the time of the switch.

Low Glucose Suspend:

![Main screen in Low Glucose Suspend](../images/main/main_screen_loop_lgs.png)

Open loop:

![Main screen in open loop](../images/main/main_screen_loop_open.png)

Loop disabled:

![Main screen with the loop disabled](../images/main/main_screen_loop_disabled.png)

Loop suspended — the remaining time is shown next to the icon:

![Main screen with the loop suspended](../images/main/main_screen_loop_suspended.png)

Pump disconnected — the remaining time is shown next to the icon. The treatment buttons stay in the QuickLaunch toolbar, so you can still record insulin given with a pen or carbs:

![Main screen with the pump disconnected](../images/main/main_screen_pump_disconnected.png)

A validation is required after each selection.

```{admonition} Alarm: the pump did not accept the zero temp basal :class: warning While the pump is disconnected, **AAPS** keeps a zero temporary basal on the pump and sets it again if it is missing. If this still fails after 10 minutes, **AAPS** raises an urgent alarm: *"The pump did not accept the zero temp basal. It may still be giving basal insulin. Check the pump."* The alarm repeats every 15 minutes until the zero temporary basal is set or the disconnection ends. If you see it, check your pump: it may be delivering basal insulin although **AAPS** shows it as disconnected.

    <br />Note: the modes offered depend on your progress in the [Objectives](../SettingUpAaps/CompletingTheObjectives.md) — Closed Loop and LGS only become available as you complete them.
    
    (aaps-screens-bg-warning-sign)=
    #### BG warning sign
    
    If **AAPS** detects a problem with the BG readings it receives, a shortcut to your BG source (named after it, for example **xDrip+ BG**) appears in the bottom bar of the main screen, with a red warning badge. Tap it to open the [BG source screen](#aaps-screens-bg-source).
    
    ##### Duplicate BG data
    
    The red warning sign is signaling you to get active immediately: You are receiving **duplicate BG data**, which prevents the loop from doing its work right. **AAPS** cannot calculate your BG trend reliably from duplicated readings, so it stops correcting.
    
    If your loop was closed, **AAPS** switches it to [Low Glucose Suspend (LGS)](#KeyAapsFeatures-LGS) mode: the loop icon turns purple.
    
      ![Duplicate BG data: LGS loop icon and the BG source shortcut with a red warning badge](../images/bg_warn_red.png)
    
    Press the loop icon: the **Constraints** card at the top tells you why: "BgQualityCheck: LGS mode due to doubled values in BG source".
    
      ![Running mode dialog: LGS due to doubled values](../images/main/bg_doubled_constraint.png)
    
    ```{admonition} Your loop is running in Low Glucose Suspend
    :class: note
    Your loop keeps running, but only to protect you against lows: **AAPS** can still reduce or suspend your basal, and it will not give any correction insulin until you solve this issue !
    

Du musst herausfinden, warum Du doppelte Glukosewert-Daten erhältst:

* Ist die Dexcom-Bridge auf Deiner Nightscout-Seite aktiviert? Deaktiviere die Bridge, indem Du in das Administrations-Menü Deiner Nightscout-Instanz gehst, bearbeite die „enable“-Variable und entferne dort den „bridge“-Teil. (Details zu heroku [findest Du hier](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Laden mehrere Quellen Deine Glukosewerte zu Nightscout hoch? If you use the BYODA app, enable the upload in **AAPS** but do not enable it in xDrip, if you use that.
* Hast du Follower, die Deine Glukosewerte erhalten und die diese auch wieder auf deine NS-Seite hochladen?
* Last resort: In [NSClient settings](#Preferences-nsclient), select the Synchronization settings and disable the "Receive CGM data from NS" option.

To remove the warning immediately and get your loop correcting again, delete the duplicate entries from the BG source screen: tap the shortcut in the bottom bar. The duplicate reading is highlighted in red. Long press a reading to start selecting, tick the duplicates and tap the trash icon at the top right.

![BG source screen: duplicates selected for deletion](../images/main/bg_source_delete_duplicates.png)

Wenn es jedoch viele Duplikate gibt, könnte es einfacher sein,

* [Sichere Deine Einstellungen](../Maintenance/ExportImportSettings.md),
* setze deine Datenbank im Wartungsmenü zurück und
* [importiere Deine Einstellungen](../Maintenance/ExportImportSettings.md) erneut

    {admonition} Switch back to Closed Loop yourself
    :class: important
    **AAPS** does not return to **Closed Loop** on its own once the duplicates are gone. Press the loop icon on the main screen and select **Closed Loop** again.

##### Flat BG data

With some BG sources (Libre 1, AiDEX, Glutec, Medtronic and sources that do not report their sensor type), **AAPS** also checks for readings that do not change: if your BG has changed by less than 2 mg/dL (0.1 mmol/L) for 45 minutes, the data is considered wrong. The BG source shortcut then shows a red flat-trend badge, and the loop stops any high temporary basal and gives no correction insulin until the readings change again. Check your sensor and the app that sends the readings.

##### Irregular BG data

When readings arrive at irregular intervals or some are missing, **AAPS** recalculates 5-minute values from the readings it has. This happens for example after a sensor change, or with Libre sensors, whose timing slips a minute or two every few hours. The loop keeps working and you do not have to take any action. **AAPS** 4 no longer shows a yellow warning sign for this.

#### Aktuelles Profil

The current profile is displayed next to the star icon.

Tap the profile name to open the [Profile screen](#aaps-screens-profile), where you can view the profile details and [switch between different profiles](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

To **change the profile percentage** (and its duration), tap the profile name, then tap the round **▶** (Activate) button at the bottom right of the Profile screen. In **AAPS** 3.x this screen opened with a long press on the profile name; in **AAPS** 4 a long press does nothing. Step by step: [Change the Profile Percentage](#ProfileSwitch-change-percentage).

![Profile with an active profile switch](../images/Home2020_ProfileSwitch.png)

1. Normale Anzeige mit einer Standardprofil-Aktivierung.
2. Profile switch with a specific percentage of 90% and a remaining duration of 9 minutes — the profile name turns yellow while a temporary profile switch is running.
3. Profile switch with a time shift of 1 hour and a remaining duration of 9 minutes.

#### Ziel

![Verbleibende Dauer des temporären Ziels](../images/Home2020_TT.png)

The current target blood glucose level is displayed below the profile name.

Short press the target to open the **[Temporary Target](../DailyLifeWithAaps/TempTargets.md)** screen.

1. Regular display: the target range defined in your profile.
2. If a temp target is set, the target turns yellow/orange with the icon of the used preset, and the remaining time in minutes is shown in brackets.

(AapsScreens-visualization-of-dynamic-target-adjustment)=

#### Anzeige der dynamischen Ziel-Anpassung

Wenn Du den [SMB-Algorithmus](#Config-Builder-aps) und [Autosens](#Open-APS-features-autosens) nutzt, kann **AAPS** Dein Ziel dynamisch auf Basis Deiner Insulin-Empfindlichkeit anpassen.

Enable either one or both of the following options in [OpenAPS SMB settings](#Preferences-openaps-smb-settings):

* "Sensitivity raises target" and/or
* "Resistance lowers target"

If **AAPS** detects resistance or sensitivity, the target will change from what is set from profile, and the displayed target changes color to indicate the adjustment.

(aaps-screens-iob-cob-basal-sens)=

#### IOB, COB, basal and sensitivity

![IOB, COB, basal and sensitivity](../images/Home2020_TBR.png)

1. **Syringe**: insulin on board (IOB) - amount of active insulin inside your body  
    The insulin on board figure would be zero if just your standard basal was running and there was no insulin remaining from previous boluses. 
    * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
    * Press the chip to see the split of bolus and basal insulin (first dialog in the picture — here with a negative IOB after a period of reduced basal)
2. **Grain**: [carbs on board (COB)](../DailyLifeWithAaps/CobCalculation.md) - yet unabsorbed carbs you have eaten before
3. The teal button on the right reflects the **current basal delivery**: a flat line when the profile basal is running, a changed icon while a temporary basal rate is active
4. The **percentage row** shows the current sensitivity ([Autosens](#Open-APS-features-autosens) / [DynamicISF](../DailyLifeWithAaps/DynamicISF.md)). When the loop changes your ISF, the row also shows the profile ISF, an arrow and the ISF the loop uses now, for example "80% 2.0 ↗ 2.5". Press it to see the Autosens value and the effective ISF (second dialog in the picture). If the loop works with a different value than the last Autosens result (for example because a temp target changes your sensitivity), the dialog also shows that value as **Autosens in algorithm**. When Autosens is off, the loop keeps your profile ISF and no effective ISF is shown.

The IOB dialog, opened by pressing the IOB chip:

![IOB dialog with bolus IOB and basal IOB](../images/main/main_chip_iob.png)

Press the teal button to see the temporary basal rate that is running, when it started and how long it has been running:

![Temp basal dialog](../images/main/main_chip_temp_basal.png)

(aaps-screens-carbs-required)=

#### Kohlenhydrat-Vorschlag

![Carbs required shown in the COB chip](../images/main/main_screen_carbs_required.png)

Wenn der Algorithmus erkennt, dass Du etwas essen solltest, damit Dein BZ nicht zu tief fällt, wird die Menge der empfohlenen Kohlenhydrate angezeigt.

Dies ist der Fall, wenn der Algorithmus davon ausgeht, dass ein Absenken der Basalrate auf Null nicht ausreicht und Du daher Kohlenhydrate zu Dir nehmen solltest.

Diese Benachrichtigungen des Kohlenhydrat-Vorschlags sind deutlich ausgeklügelter als die Berechnungen des Bolusrechners. You might see a carbs suggestion while the bolus calculator does not show missing carbs.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

### Section C - Status row

![Status row](../images/Home2020_StatusLights.png)

The status row gives a visual warning for

* Kanülenalter
* Insulin age (days reservoir is used) and reservoir level (units)
* Sensoralter
* Pump battery age and level (%)

Bei Überschreitung der Warnschwelle werden die Werte gelb angezeigt.

Wenn die kritische Schwelle überschritten wird, werden die Werte rot angezeigt.

Thresholds can be changed via the small **Settings** icon shown when the status row is **expanded** (chevron on the right) — see [Status lights](#Preferences-status-lights).

The expanded status panel also has a button at the end of some rows to record a change, which resets the corresponding age: **Add** on the **Sensor** row records a sensor insertion. If your pump supports it, **Prime/Fill** appears on the **Cannula** (or **Patch pump**) and **Insulin** rows, and **Add** on the **Pump battery** row.

![Expanded status panel with Prime/Fill on the Cannula and Insulin rows and Add on the Sensor and Pump battery rows](../images/main/main_status_row_expanded.png)

Abhängig von der verwendeten Pumpe, kann es sein, dass Du nicht alle diese Symbole angezeigt bekommst.

(screens-sensor-level-battery)=

#### Sensor Level (Batterie)

Verfügbar für CGM-Systeme mit zusätzlichem Transmitter wie z.B. MiaoMiao 2. (Technically sensor has to send battery level information to xDrip.)

Thresholds can be set in [Status lights](#Preferences-status-lights).

(aaps-screens-main-graph)=

### Section D - Main graph

![Main graph](../images/main/main_graph.png)

Die Grafik zeigt Deinen Blutzucker (BZ), so wie er von Deinem Sensor (CGM) gemessen wurde.

Use scroll and pinch-zoom gestures on the graph to change the visible time frame.

Der grüne Bereich spiegelt den Zielbereich wider.

Diese Informationen werden auch in diesem Graph angezeigt:

* Manual boluses: blue triangle just above the BG curve, pointing down at the reading of that moment, with the insulin amount
* Carbs entries: orange triangle just below the BG curve, pointing up at the reading, with the carb amount. A meal entered with its bolus looks like one marker, split by the reading.
* The triangles come in three sizes (small, medium, large), following the amount compared with the largest of the day. If there is no BG reading at that time (sensor gap), the triangle is drawn at the bottom of the graph.
* BG checks and calibrations: drawn at their own measured value, so you can compare them with the sensor curve
* Ziel, entweder so wie es im Profil hinterlegt ist oder wie es durch temporäre Ziele angepasst wurde: grüne Linie
* Profile switches: star icons at the top of the graph
* Loop status: color band at the top of the graph when the [running mode](#AapsScreens-loop-status) is anything else than closed loop: blue = open loop, purple = LGS, red = loop disabled, yellow = loop suspended, grey = pump disconnected, orange = superbolus (in the screenshot: purple, then yellow). The history of these changes is listed in [Running mode](#AapsScreens-running-mode)
* [SMBs](#Open-APS-features-super-micro-bolus-smb) are not drawn on the BG graph (there would be one every few minutes): they are shown on the [IOB graph](#aaps-screens-iob).

Tap a **BG check** in the graph to see its value, and its note if you wrote one.

(aaps-screens-graph-press-and-hold)=

#### See the values at a given time

**Press and hold** the BG graph for a moment to see the values at one reading. A dot marks the nearest reading, a dashed line is drawn at that time in all the graphs, and a pop-up at the top of the graph shows:

* the time and the BG value
* IOB, COB (only when it is above 0 g) and the basal rate at that time — the basal icon shows whether a temporary basal rate was running, as on the main screen
* any bolus, SMB or carbs at that time, with the same triangles as in the graphs

Keep your finger on the screen and move it left or right to go from one reading to the next. You feel a light tick at each reading, and the graph does not scroll while you do this. The pop-up stays for 2 seconds after you lift your finger.

This works the same way on the [additional graphs](#aaps-screens-additional-graphs) below the BG graph (IOB, COB...): press and hold any of them.

![Press and hold the BG graph: the pop-up shows time, BG, IOB and basal](../images/main/graph_press_and_hold.png)

(AapsScreens-activate-optional-information)=

#### Aktiviere optionale Informationen

Press the **pencil** icon in the top-right corner of the graph to open the graph settings:

![Main graph setting](../images/Home2020_MainGraphSetting.png)

* **Graph height** adjusts how tall the graph is drawn.
* **ACT** overlays the insulin activity curve: a solid yellow-green line <span style="background:#141218;color:#D3F166;padding:0 0.3em;border:1px solid #141218;border-radius:4px">━━━━</span> (not to be confused with the dotted yellow UAM prediction)
* **PRED** overlays the [prediction lines](#aaps-screens-prediction-lines) (see below)

(aaps-screens-prediction-lines)=

#### Vorhersage Kurven

When **PRED** is on, AAPS draws its predictions as **dotted lines** to the right of the "now" line. Each prediction has its own color. The dark theme uses lighter shades of the same colors, and a line inside the green target range can look slightly greener.

| Line                   | Light theme                                                                                                                       | Dark theme                                                                                                                         | What it predicts            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **IOB** (blue)         | <span style="background:#FFFFFF;color:#1E88E5;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#64B5F6;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | insulin only                |
| **COB** (orange)       | <span style="background:#FFFFFF;color:#FB8C00;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#FFB74D;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | carbs on board              |
| **UAM** (yellow)       | <span style="background:#FFFFFF;color:#C9BD60;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#E6D39A;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | unannounced meal            |
| **ZT** (cyan)          | <span style="background:#FFFFFF;color:#00D2D2;padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span>             | <span style="background:#141218;color:#4DD4D4;padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span>              | zero-temp (insulin stopped) |
| **aCOB** (pale orange) | <span style="background:#FFFFFF;color:rgba(251,140,0,0.5);padding:0 0.3em;border:1px solid #CCCCCC;border-radius:4px">●●●●</span> | <span style="background:#141218;color:rgba(255,183,77,0.5);padding:0 0.3em;border:1px solid #141218;border-radius:4px">●●●●</span> | older AMA algorithm only    |

When two predictions give the same values, their dots overlap and you only see one of the colors (for example, UAM on top of IOB when BG is flat).

* **COB** line (orange): [carbs on board](CobCalculation) (orange is used throughout AAPS for COB and carbs)
    
    Die Prognosekurve zeigt, wohin sich der Glukosewert (nicht die COB selbst!) auf der Grundlage der aktuellen **Profil**-Einstellungen und unter der Annahme, dass die Abweichungen aufgrund der Kohlenhydratresorption konstant bleiben, entwickeln wird. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **IOB** line (blue): insulin on board (blue is used throughout AAPS for IOB and insulin)
    
    Die Prognoselinie zeigt, was passieren würde, wenn nur der Einfluss des Insulins berücksichtigt wird. Zum Beispiel, wenn Du Insulin abgegeben hast und dann keine Kohlenhydrate zu Dir genommen hast.

* **ZT** line (cyan): zero-temp (predicted BG if temporary basal rate at 0% would be set)
    
    Die Prognoselinie (Vorhersagelinie) zeigt, wie sich der Glukosewert-Verlauf ändern würde, wenn die Pumpe die Insulinabgabe komplett stoppen würde (0 % TBR). The line stops once it rises above your target.
    
    *Diese Zeile ist nur zu sehen, wenn der [SMB](#Config-Builder-aps)-Algorithmus genutzt wird.*

* **UAM** line (yellow): [unannounced meals](#SensitivityDetectionAndCob-sensitivity-oref1)
    
    Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Die Prognoselinie ähnelt der **orangenen COB-Linie**, geht aber davon aus, dass die Abweichungen mit konstanter Rate abnehmen werden (durch Verlängerung der aktuellen Reduktionsrate).
    
    *This line appears only when the [SMB](#Config-Builder-aps) algorithm is used, **Enable UAM** is on in the OpenAPS SMB settings, and BG is rising more than insulin alone explains.*

* **aCOB** line (pale, see-through orange): accelerated carbohydrate absorption
    
    Similar to COB, but assuming a static 10 mg/dL/5m (-0.555 mmol/L/5m) carb absorption rate. Veraltet und nur begrenzt nützlich.
    
    *Diese Linie ist nur sichtbar, wenn der ältere [AMA](#Config-Builder-aps)-Algorithmus genutzt wird.*

Deine tatsächliche BZ-Kurve wird normalerweise in der Mitte dieser Prognoselinien oder in der Nähe der Linie, die Annahmen macht, die Deiner Situation am nächsten kommen, liegen.

(aaps-screens-how-predictions-become-a-dosing-decision)=

#### How AAPS turns predictions into a dosing decision

AAPS doesn't dose insulin based on your current BG alone — every loop cycle (roughly every 5 minutes) it looks at all of the prediction lines above together and works out the safest course of action.

The core rule is **safety first**: if *any* prediction line, in any time frame, dips below your low safety threshold, AAPS issues a zero-temp (0% temporary basal rate) and withholds further insulin, even if your current BG is high. Only once every prediction line stays above that threshold will AAPS consider giving more insulin.

When it is safe to give more insulin, AAPS looks at where BG is ultimately predicted to end up (the **eventual BG**) across the blended predictions, and works out how much correction is needed to bring that eventual BG back to target — delivered either as an increased temporary basal rate, or (if the oref1/[SMB](#Open-APS-features-super-micro-bolus-smb) algorithm is enabled) as a small immediate bolus. If BG is high now but is already trending down enough on its own, AAPS will hold off, or may even reduce the basal rate, rather than add insulin that would only push a later low even lower.

For worked examples of this decision logic with real screenshots, see the [dosing scenarios in the Clinician's guide](#clinicianguide-dosing-scenarios) — they were written for a clinician audience but apply to any AAPS user.

*For the full technical treatment of how these predictions and the resulting dosing decision are calculated, see [OpenAPS's determine-basal documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html).*

#### Basal

Die **durchgezogene blaue** Kurve zeigt die Basalabgabe Deiner Pumpe an und spiegelt die tatsächliche Abgabe über die Zeit wider.

Die **gepunktete blaue** Kurve zeigt, was die Basalrate wäre, wenn es keine temporären basalen Anpassungen (TBRs) gäbe.

Die dunkelblaue Fläche unter der Kurve, zeigt, dass die Standard-Basalrate abgegeben wird. Wird die Basalrate vorübergehend angepasst (erhöht oder verringert), wird die Fläche unter der Kurve hellblau angezeigt.

#### Aktivität

Die **dünne gelbe** Linie zeigt die Insulinaktivität.

Sie basiert auf dem erwarteten Rückgang des BZ gemäß aktivem Insulin. Weitere Faktoren (wie z.B. Kohlenhydrate) werden NICHT berücksichtigt.

(AapsScreens-section-g-additional-graphs)= (aaps-screens-additional-graphs)=

### Section E - Additional graphs

You can activate additional graphs below the main graph. When in [Simple Mode](#preferences-simple-mode), additional graphs are preset and cannot be changed. Wenn Du eine eigene Konfiguration in den zusätzlichen Diagrammen nutzen möchtest, deaktiviere zuerst den **Einfachen Modus**.

The additional graphs follow the main graph: when you scroll or zoom the BG graph, they move with it. A sideways drag on an additional graph also scrolls all the graphs. They have no time labels of their own — read the time on the BG graph.

To configure an additional graph, press the **pencil** icon in its top-right corner:

![Einstellung weiterer Diagramme](../images/Home2020_AdditionalGraphSetting.png)

Select the chips corresponding to the data you want to see on this graph; the **Remove** button deletes the graph.

To create one more graph, press **Add graph** below the last graph and select its chips in the same way:

![Add graph](../images/main/graph_add.png)

The new graph is added below the others — here a second additional graph with **SENS%** and **DEV**:

![Main screen with a second additional graph](../images/main/main_screen_additional_graph.png)

Viele kommen mit der folgenden Konfiguration zusätzlicher Diagramme gut zurecht:

* Diagramm 1 mit „Aktives Insulin“, „Aktive Kohlenhydrate“, „Sensitivität“
* Diagramm 2 mit „Abweichungen“ und „Blutzuckerwirkung“.

#### Absolute insulin (ABS)

Aktives Insulin einschließlich Boli **und Basal**.

(aaps-screens-iob)=

#### Insulin on board (IOB)

Zeigt das Insulin, das an Bord ist (= aktives Insulin im Körper). Es enthält Insulin aus Bolus und temporärem Basal (** schließt aber Basalraten aus deinem Profil aus**).

Wenn es während der Insulinwirkdauer (DIA) keine [SMBs](#Open-APS-features-super-micro-bolus-smb), keine Boli und keine TBRs gäbe, wäre der Wert hier Null.

SMBs are shown on this graph as blue triangles, in three sizes following the amount compared with the largest SMB of the day.

Wenn Du längere Zeit keinen verbleibenden Bolus und keine oder nur eine niedrige Basalrate hattest, kann IOB kann negativ sein.

Decaying depends on your [DIA and insulin type settings](#Config-Builder-insulin-dia).

#### Carbs On Board (COB)

Zeigt die Kohlenhydrate, die Du an Bord hast (= aktive, noch nicht resorbierte Kohlenhydrate in Deinem Körper).

Der Abbau hängt davon ab, was der [Algorithmus anhand der Glukosewert-Abweichungen](../DailyLifeWithAaps/CobCalculation.md) erkennt.

Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger).

#### Sensitivity change (SENS%)

Zeigt die Empfindlichkeit (Sensitivität) an, die [Autosens](#Open-APS-features-autosens) erkannt hat.

Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.

Hinweis: Du musst im [Ziel 8](#objectives-objective8) sein, um durch die Empfindlichkeitserkennung [Autosens](#Open-APS-features-autosens) die abzugebende Insulinmenge automatisch anpassen zu lassen. Vor dem Erreichen dieses Ziels wird die Linie in Deiner Diagramm nur zur Information angezeigt.

### Variable sensitivity (VSENS)

Zeigt die Empfindlichkeit an, so wie sie der [dynamische ISF](../DailyLifeWithAaps/DynamicISF.md) berechnet hat. Sie wird nur angezeigt, wenn diese Funktion genutzt wird.

(screen-heart-rate-steps)=

#### Heart rate (HR) & Steps

Diese Informationen sind möglicherweise dann verfügbar, wenn Du eine [Wear Smartwatch](../WearOS/WearOsSmartwatch.md) verwendest. Aktiviere sie in der **AAPS**-Wear-App und erteile die Berechtigung für den Zugriff auf die Gesundheitsdaten.

#### Deviations (DEV)

* **Graue** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten.
* **Grüne** Balken zeigen, dass der Glukosewert höher ist, als der Algorithmus es erwartet. Grüne Balken werden genutzt, um die Resistenz in [Autosens](#Open-APS-features-autosens) zu erhöhen.
* **Rote** Balken zeigen, dass der Glukosewert niedriger ist, als der Algorithmus es erwartet. Rote Balken werden genutzt, um die Empfindlichkeit in [Autosens](#Open-APS-features-autosens) zu erhöhen.
* **Gelbe** Balken zeigen eine Abweichung aufgrund von UAM an.
* **Schwarze** Balken zeigen kleine Abweichungen, die bei der Berechnung der Sensitivität nicht berücksichtigt werden.

#### Blood Glucose Impact (-BGI)

Diese Linie zeigt den Grad an, in dem der Glukosewert nur aufgrund der Insulinaktivität steigen oder fallen sollte.

![Deviations and BGI](../images/main/graph_dev_bgi.png)

Es ergibt eine gute Kombination diese Linie zusammen mit den Balken für Abweichungen anzuzeigen. Beide haben die gleiche Skala, die für die anderen optionalen Daten eine andere ist. Daher sollten sie, wie unten dargestellt, in einem separaten Diagramm gezeigt werden. Die Linie der Blutzuckerwirkung (BGI) mit den Balken der Abweichungen zu vergleichen, ist ein weiterer Weg zu verstehen, wie und warum **Glukosewerte** schwanken. Here, at the time marked **1**, the Deviation bars are well above the BGI line: BG rises more than insulin activity alone explains (for example after carbs). At the time marked **2**, the Deviation bars are below zero (red): BG is lower than the algorithm expected.

### Section F - QuickLaunch toolbar

![QuickLaunch toolbar](../images/Home2020_Buttons.png)

The floating toolbar at the bottom of the screen holds your **[QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md)** actions. The small **gear** opens the QuickLaunch configuration where you choose which buttons are shown (treatments, careportal entries, CGM actions, the screens of the **Manage** sheet, [Quick Wizard](../DailyLifeWithAaps/QuickWizards.md) buttons, [Scenes](../DailyLifeWithAaps/Scenes.md) and more).

A typical configuration is shown above: **Insulin**, **Carbs** and the **Bolus wizard**.

While the pump is **disconnected**, the treatment buttons stay in the toolbar, for example to record insulin given with a pen (see [Insulin](#aaps-screens-buttons-insulin) below). The same actions are also available in the [Treatments sheet](#aaps-screens-treatments-sheet) of the bottom navigation.

(aaps-screens-buttons-insulin)=

#### Insulin

![Insulin dialog](../images/Home2020_ButtonInsulin.png)

Um einen Bolus abzugeben, ohne den [Bolus-Rechner](#aaps-screens-bolus-wizard) zu nutzen.

By enabling **Start Eating soon TT**, you can automatically start your [eating soon temp target](#TempTargets-eating-soon-temp-target).

If you do not want to bolus through the pump but record an insulin amount (i.e. insulin given by pen) enable "**Bolus will be recorded only**". An additional **Time** row, set to **Now**, lets you record an insulin injection made in the past: use **-** / **+** to change it, or tap the chevron to type the minutes or pick a date and time.

![The Time row, folded](../images/v4/Screens/insulin_dialog_record_only_time.png) ![The Time row, opened with the chevron](../images/v4/Screens/insulin_dialog_time_open.png)

You can use the **+0.5 / +1.0 / +2.0** buttons to quickly increase the insulin quantity. The increment values can be changed in the [Bolus wizard settings](#Preferences-deliver-this-part-of-bolus-wizard-result).

The insulin dialog can be used when the pump is suspended or disconnected as well, e.g. to record insulin injected with a pen. In this case, "**Bolus will be recorded only**" is forced on (shown in red) and additional fields appear to select the insulin type and a **Time** offset for an injection made in the past:

![Insulin dialog with pump disconnected](../images/main/insulin_dialog_pump_disconnected.png)

#### Kohlenhydrate

![Carbs dialog](../images/Home2020_ButtonCarbs.png)

Kohlenhydrate ohne Bolus dokumentieren.

Certain [pre-set temporary targets](#TempTargets-hypo-temp-target) (Hypo, Eating soon, Activity) can be started directly with the switches on top.

**Carb time**: When will you / have you been eating carbs.

**Duration**: To be used for ["extended carbs"](ExtendedCarbs). This row is folded, so that you do not type the grams into it by mistake: use **-** / **+** to change it, or tap the chevron to open it and type a value.

You can use the **+5 / +10 / +20** buttons to quickly increase the carb amount.

#### Quick Wizard

Easily enter amount of carbs and set calculation basics with a single pre-configured button.

Details are set up in [Quick Wizard](../DailyLifeWithAaps/QuickWizards.md).

(aaps-screens-treatments-sheet)=

### Section G - Bottom navigation

The bottom navigation bar gives access to:

* **Treatments** — a quick-actions sheet with your treatment actions:
    
    ![Treatments sheet](../images/v4/Screens/treatments_sheet.png)

* **Scenes** — shown only when you have at least one [scene](../DailyLifeWithAaps/Scenes.md) or an **Automation** rule marked as **User action**. It opens a sheet from which you can start them; a badge shows how many you can start right now. The **pencil** at the top of the sheet opens **Manage → Scenes**.

* **Manage** — the hub for everything you manage in **AAPS**: Profile, Insulin settings, Temp Target, QuickWizard, Scenes, Automation, Food, Site Rotation, Pump and Authorized clients. Below them are device and basal actions such as Sensor Insert and Temp Basal. Some items only appear when they apply to your setup — for example Prime/Fill and battery change depend on your pump, and Temp Basal, Extended Bolus and the Careportal entries are hidden in [Simple Mode](#preferences-simple-mode):
    
    ![Manage sheet](../images/v4/Screens/manage_sheet.png)

* **Objectives** — your progress through the [Objectives](../SettingUpAaps/CompletingTheObjectives.md); a badge shows how many are completed. This item disappears once all objectives are finished, and is not present on **AAPSClient**.

(aaps-screens-notifications)=

#### Benachrichtigungen

A **notification bubble** may appear above the bottom bar, on the right. It collects the active notifications of **AAPS**; the small number shows how many there are. Its color follows the most important one: red for an urgent message, green for a simple information.

![Main screen with the notification bubble](../images/main/main_screen_notification_bubble.png)

Tap the bubble to open the **Notification** panel. Each message shows the time it was raised. Press **Dismiss** below a message to remove it; some messages have another button instead, to take you to the setting that needs your attention.

![Notification panel with one message and its Dismiss button](../images/main/notification_panel.png)

![Notification panel](../images/main/main_notification_panel.png)

(bolus-wizard)= (aaps-screens-bolus-wizard)=

## Bolus-Rechner

![Bolus-Rechner](../images/Home2020_BolusWizard_v2.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

### Abschnitt I

The **Calculation** header shows the calculated bolus. Falls IOB (Insulin on bord) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.

The bolus calculator can be used whatever your current **BG**, including when it is too high or too low. If **BG** is above target, a correction is added to the meal bolus. If **BG** is below target, the bolus is reduced and, if the insulin already on board is more than needed, the calculator tells you how many carbs are still required instead of proposing insulin.

The icon row below the header shows which inputs enter the calculation (BG, trend, IOB, temporary target, COB). Pressing an icon enables / disables this entry from the calculation; the **(i)** icon shows the detailed numbers behind the calculation.

#### Kombinationen von COB und IOB und deren Bedeutung

* For safety reasons, the IOB input cannot be disabled when COB is enabled as you might run the risk of too much insulin as **AAPS** is not accounting for what’s already given.
* If you enable COB and IOB, unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you enable IOB without COB, **AAPS** takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **disable all inputs**. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.
* For safety reasons, a **temporary target** is only included in the calculation if you enable its input manually.

(AapsScreens-section-j)=

### Section J - Entry fields

In the **Carbs** field, you add your estimate of the amount of carbs, **in grams**, that you want to bolus for; the **+** buttons below it add carbs quickly. **AAPS** only works with grams: if you count in bread units or exchanges (*e.g.* DAFNE "CHO" exchanges), convert them to grams before entering them. See the [note about bread units](#your-aaps-profile-insulin-to-carbs-ratio) on the profile page.

#### Carbs type: bread, cake or pizza

Below the **Carbs** field, the **Bread**, **Cake** and **Pizza** buttons tell **AAPS** how fast the meal is absorbed. With **Cake** and **Pizza**, the bolus covers only a part of the carbs now and the rest is added later as eCarbs. See [Carbs type: bread, cake or pizza](#AapsScreens-carbs-type) on the Extended carbs page for the percentages and timing.

The **Correction** row is if you want to modify the end dosage for some reason.

Only the **Carbs** field is always open. The other rows (**Correction**, **Carb time**, **BG** and **Use percentage**) are folded: they show their value with **-** / **+** buttons, so you can change it in small steps. Tap the chevron to open a row and type a value, and tap it again to close the row. This avoids typing grams into the **Correction** field by mistake.

![Folded rows in the bolus wizard](../images/v4/Screens/bolus_wizard_bottom.png)

Tap anywhere on the **Profile** row to open the list of your profiles, then tap a name to use that profile for this calculation.

![The list of profiles in the bolus wizard](../images/v4/Screens/bolus_wizard_profile_list.png)

Das Feld „**KH-Zeit**“ ist für einen Spritz-Ess-Abstand gedacht, so dass Du dem System mitteilen kannst, dass die Kohlenhydrate erst später gegessen werden. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohelnhydrate also schon zu Dir genommen hast.

**Set alarm** (eating reminder): when a carb time in the future is entered, a "**Set alarm**" switch appears so that you are reminded at the given time, when to eat the carbs you have input into **AAPS**:

![Set alarm for future carbs](../images/Home2021_BolusWizard_EatingReminder.png)

The reminder rings as an **AAPS** alarm. It does not create a timer in your phone's clock app, and it also works when the bolus was entered from **AAPSClient** while **AAPS** was running in the background.

The **BG** field is normally already populated with the latest reading from your CGM. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. When the reading is recent, the **BG** row stays folded.

The result button at the bottom shows the proposed bolus; pressing it asks for confirmation before any insulin is delivered.

Good to know:

* If the calculated bolus is above your **[Maximum bolus](#Preferences-maximum-bolus)**, it is reduced to the max bolus, and the confirmation shows the warning "Bolus constraint applied". A [QuickWizard](../DailyLifeWithAaps/QuickWizards.md) is refused instead.
* When the bolus is only recorded (for example while the pump is disconnected), the "**Bolus will be recorded only**" warning stays at the top of the dialog, also when you scroll.
* A bolus you give by hand has priority over an [SMB](#Open-APS-features-super-micro-bolus-smb) that is waiting to be delivered: the SMB is dropped and the loop calculates again. If an SMB is being delivered right now, your bolus is refused with the message "An SMB is being delivered right now. Try again when it has finished." No insulin is given, and carbs entered with that bolus are not saved: wait a moment and enter them again.

(AapsScreens-wrong-cob-detection)=

#### Fehlerhafte Erkennung der aktiven Kohlenhydrate (COB)

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorption.png)

Wenn Du nach Verwendung des Bolus-Rechners, die oben gezeigte Warnung siehst, hat **AAPS** erkannt, dass die aktiven Kohlenhydrate (COB) möglicherweise falsch berechnet wurden. Wenn Du kurz nach einer vorangegangenen Mahlzeit (mit noch aktiven Kohlenhydraten) erneut einen Bolus abgeben willst, solltest Du Dir der Gefahr einer Überdosierung bewusst sein!

Für mehr Details, schaue bitte in den Hinweisen auf der Seite [Berechnung der aktiven Kohlenhydrate (COB)](#CobCalculation-detection-of-wrong-cob-values) nach.

Looking for the **Actions** tab of **AAPS** 3.x? Its functions moved to the main screen, the **Manage** sheet and the QuickLaunch toolbar: see [Where did the Actions tab go?](#screens-action-tab).

(aaps-screens-careportal)=

## Careportal entries

The ages and levels shown in the [status row](#screens-sensor-level-battery) (sensor, insulin, cannula, pump battery) are based on careportal entries: **Prime/Fill** (records pump site and insulin cartridge changes), **Sensor Insert** and **Pump Battery Change**.

You can record them from the expanded status panel on the main screen, from the **Manage** sheet, or with [QuickLaunch](../DailyLifeWithAaps/QuickLaunch.md) buttons.

**Prime/Fill** records a pump site change and/or an insulin cartridge change, and can deliver a prime amount:

![Prime/Fill dialog](../images/dialogs/prime_fill.png)

**Sensor Insert** and **Pump Battery Change** only ask for the time of the event:

![Sensor Insert dialog](../images/dialogs/sensor_insert.png)

![Pump Battery Change dialog](../images/dialogs/pump_battery_change.png) Exercise, announcement, question and note entries reflect the Nightscout careportal and are special forms of notes.

In the **Manage** sheet, scroll down and press **Careportal** to show these entries: **BG Check**, **Note**, **Exercise**, **Question** and **Announcement**.

![Careportal section of the Manage sheet](../images/v4/Screens/manage_sheet_careportal.png)

**BG Check**, **Question** and **Announcement** let you enter a glucose value (from a meter, the sensor or another source), a note and the time of the event. In **Question** and **Announcement**, the glucose row is folded and shows the meter type next to the value: if you change the value, the type changes from **Sensor** to **Meter**.

![Question with the folded glucose row](../images/dialogs/careportal_question.png)

![BG Check dialog](../images/dialogs/careportal_bg_check.png)

**Note** and **Exercise** let you enter a duration (a folded row: use **-** / **+**, or tap the chevron to type it), a note and the time of the event:

![Exercise dialog](../images/dialogs/careportal_exercise.png)

In all these dialogs (**Prime/Fill**, **Sensor Insert**, **Pump Battery Change** and the careportal entries), the time of the event uses the same **Time** row as the [insulin dialog](#aaps-screens-buttons-insulin) and the bolus wizard: use **-** / **+** to move the time in 5-minute steps (up to one week back and 12 hours ahead), or tap the chevron to pick any date and time.

## Wechsel der Setzstellen (Site Rotation)

**Manage → Site Rotation** records where each cannula and sensor was placed on a body map, so you can rotate your sites: see [Site Rotation](#Aapsscreens-site-rotation) on the Pumps and cannulas page.

**TDD** (total daily dose) and the basal/bolus ratio rule of thumb are explained with the [Statistics Insulin tab](#reviewing-tdd).

(AapsScreens-insulin-profile)=

## Insulin

![Insulin screen](../images/manage/insulin_profile.png)

**Manage → Insulin settings** shows and manages your insulin configurations. Each configuration is shown on a card with its **peak time** and **[DIA](#Config-Builder-insulin-dia)**; the one in use is marked **ACTIVE**. Below the card you see the activity curve. You can edit the nickname, peak and DIA of any configuration except the active one: to change the insulin you are using, [add a new configuration and activate it](#Config-Builder-insulin-change-active).

See [Duration of insulin action](#Config-Builder-insulin-dia) to learn more about what it is and how to set it.

## Status der Pumpe

![Virtual Pump status screen](../images/v4/Pumps/virtual_pump_screen.png)

**Manage → Pump** (or **Configuration → Pump → Open plugin**) shows the status of your pump: last connection, base basal rate, battery, reservoir...

* Die angezeigten Informationen hängen von Deinem Pumpenmodell ab.
* Zu den Details schaue bitte auf die [Pumpen-Seite](../Getting-Started/CompatiblePumps.md).

## Loop, AMA / SMB

**Configuration → Loop → Open plugin** (and **Configuration → APS → Open plugin**) show details about the algorithm's calculations and why **AAPS** acts the way it does: last run, the resulting request, and the constraints. The **Loop** screen lists only the constraints that actually limited the delivered temp basal rate or SMB (and why closed loop is not allowed, if that is the case); the **APS** screen lists every constraint that went into the calculation.

Die Berechnung erfolgt jedes Mal, wenn das System einen neuen CGM-Wert erhält.

For more details see the [APS section of the Configuration page](#Config-Builder-aps).

(aaps-screens-profile)=

## Profil

![Profil](../images/Screenshots_Profile.png)

**Manage → Profile** (or a tap on the profile name on the main screen) opens the Profile screen: your profiles as a swipeable card carousel, with buttons to add, edit, clone, delete and **activate** a profile.

Das Profil enthält Informationen zu Deinen individuellen Diabetes-Einstellungen. Die eigene Seite zum Thema **[Profil](../SettingUpAaps/YourAapsProfile.md)** enthält tiefergehende Informationen dazu.

## Automatisierung

![Automatisierung](../images/v4/Screens/automation_overview.png)

**Manage → Automation** lists your automation rules. Schaue Dir die [eigene Seite](../DailyLifeWithAaps/Automations.md) hierzu an.

## Nightscout-Client

![Nightscout-Client](../images/Screenshots_NSClient.png)

**Configuration → Communication → NSClientV3 → Open plugin** displays the status of the connection with your Nightscout site: URL, websocket status, queue and a log of the synchronization activity.

Settings can be changed in [NSClient settings](#Preferences-nsclient).

Für die Fehlerbehebung schlage auf der [dieser Seite](../GettingHelp/TroubleshootingNsClient.md) nach.

(aaps-screens-bg-source)=

## BG Source - xDrip, BYODA...

![BG Source screen](../images/Screenshots_BGSource.png)

**Configuration → BG Source → Open plugin** shows the history of CGM readings and offers the option to remove readings in case of failure (i.e. compression low) or duplicate readings.

## Treatments history

Open the **menu** (☰) and select **Treatments history** to view, check and correct everything **AAPS** has recorded: carbs and boluses, temp basals, temporary targets, profile switches, careportal entries, loop mode changes and user entries. See [Treatments history](#aaps-screens-treatments) on the Reviewing your data page.

## Historie

![History browser](../images/v4/Screens/history_browser.png)

Open the **menu** (☰) and select **History browser**.

Zeigt die **AAPS**-Historie (d. h. die historischen Verläufe) an. Siehe dazu auch [Deine Daten reviewen > AAPS-Historie](../Maintenance/Reviewing.md).

(aaps-screens-statistics)=

## Statistiken

![Statistiken](../images/v4/Screens/statistics.png)

Open the **menu** (☰) and select **Statistics**.

Gives you statistics about your Total Daily Dose, Time In Range, your glucose profile over the day (AGP) and your insulin cycle pattern, on four tabs. Siehe dazu auch [Deine Daten reviewen > AAPS-Statistiken](#reviewing-statistics).

(aaps-screens-profile-helper)=

## Profile Helper

Open the **menu** (☰) and select **Profile helper**.

![Profile helper](../images/screens/profile_helper.png)

The Profile helper lets you compare profiles and generate starting profiles for children. See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) — sections [Build a Profile from scratch for a kid](#your-aaps-profile-profile-from-scratch-for-a-kid) and [Compare two Profiles](#your-aaps-profile-compare-profiles).

(aaps-screens-widgets)=

## Home screen widgets

**AAPS** provides five widgets that you can add to your phone's home screen, to see your data without opening the app. See the dedicated page [Home screen widgets](../DailyLifeWithAaps/Widgets.md).

![AAPS widgets on the home screen](../images/widgets/home_widgets_full_circle_small.png)