# AAPS-Bildschirme

```{contents}
:backlinks: entry
:depth: 2
```

(AapsScreens-the-homescreen)=

## The Homescreen

![Homescreen V2.7](../images/Home2020_Homescreen.png)

This is the first screen you will come across when you open **AAPS**, and it contains most of the information that you will need day to day.

### Section A - Tabs

* Navigate between the various **AAPS** modules.
* Alternatively you can change screens by swiping left or right.
* Displayed tabs can be selected in [config builder](#Config-Builder-tab-or-hamburger-menu).

### Section B - Profile & target

#### Current Profile

The current profile is displayed in the left bar.

Short press profile bar to view profile details. Long press profile bar to [switch between different profiles](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

1. Regular display with a standard profile activation.
2. Profile switch with a remaining duration of 59mn.
3. Profile switch with a specific percentage of 120%.
4. Profile switch with a specific percentage of 80% and a remaining duration of 59 mn.
5. Profile switch with a time shift of -1 hour.
6. Profile switch with a specific percentage of 120%, time shift of 1 hour, and a remaining duration of 59mn.

#### Target

![Temp target remaining duration](../images/Home2020_TT.png)

Current target blood glucose level is displayed in the right bar.

Short press target bar to set a **[Temporary Target](../DailyLifeWithAaps/TempTargets.md)**.

If a temp target is set, the bar turns yellow and the remaining time in minutes is shown in brackets.

(AapsScreens-visualization-of-dynamic-target-adjustment)=

#### Visualization of Dynamic target adjustment

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

When using the [SMB algorithm](#Config-Builder-aps) and [Autosens](#Open-APS-features-autosens) functionality, **AAPS** can dynamically adjust your target based on sensitivity.

Enable either one or both of the following options in [Preferences > OpenAPS SMB settings](#Preferences-openaps-smb-settings):

* "sensitivity raises target" and/or 
* "resistance lowers target" 

If **AAPS** detects resistance or sensitivity, the target will change from what is set from profile. When it alters the target glucose, the background will change to green.

(AapsScreens-section-c-bg-loop-status)=

### Section C - BG & loop status

#### Current blood glucose

The latest blood glucose reading from your CGM is shown on the left side.

The color of the BG value reflects the status to the defined [range](#Preferences-range-for-visualization).

* green = in range
* red = below range
* yellow = above range 

The greyish block in the middle shows minutes since last reading and changes since last reading, in the last 15 and 40 minutes.

(AapsScreens-loop-status)=

#### Loop status

![Loop status](../images/Home2020_LoopStatus.png)

On the right side, an icon shows the loop status:

1. Green circle = loop running
2. Green circle with dotted line = [low glucose suspend (LGS)](#objectives-objective6)
3. Red circled = loop disabled (not working permanently)
4. Yellow circle = loop suspended (temporarily paused but basal insulin will be given) - remaining time is shown below icon
5. Grey circle = pump disconnected (temporarily no insulin dosage at all) - remaining time is shown below icon
6. Orange circle = super bolus running - remaining time is shown below icon
7. Blue circle with dotted line = open loop

Short press or Long press the icon to open the Loop dialog to switch loop mode (Close, Low Glucose Suspend, Open or Disable), suspend / re-enable loop or disconnect / reconnect pump.

* If short press on Loop icon, a validation is required after selection in Loop Dialog
    
    ![Loop status menu](../images/Home2020_Loop_Dialog.png)

(aaps-screens-bg-warning-sign)=

#### BG warning sign

If for any reason, there are issues in the BG readings **AAPS** receives, you will get a warning signal beneath your BG number on the main screen.

##### Red warning sign: Duplicate BG data

The red warning sign is signaling you to get active immediately: You are receiving **duplicate BG data**, which does avoid the loop to do its work right. Therefore, your loop will be disabled until it is resolved.

    {admonition} Your loop is not running
    :class: note
    Your loop is not running until you solve this issue !

![Rotes BG-Warndreieck](../images/bg_warn_red.png)

Du musst herausfinden, warum Du doppelte Glukosewert-Daten erhältst:

* Is Dexcom bridge enabled on your Nightscout site? Disable the bridge by going to the administration panel of your Nightscout instance, edit the "enable" variable and remove the "bridge" part there. (Details zu heroku [findest Du hier](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Do multiple sources upload your BG to Nightscout? If you use the BYODA app, enable the upload in **AAPS** but do not enable it in xDrip+, if you use that.
* Do you have any followers that might receive your BG but do also upload it again to your Nightscout site?
* Last resort: In **AAPS**, go to [Preferences > NSClient](#Preferences-nsclient), select the sync settings and disable the "Accept CGM data from NS" option.

To remove the warning immediately and get to loop running again, you need to manually delete a couple of entries from the Dexcom/xDrip+ tab.

Wenn es jedoch viele Duplikate gibt, könnte es einfacher sein,

* [backup your settings](../Maintenance/ExportImportSettings.md),
* setze deine Datenbank im Wartungsmenü zurück und
* [import your settings](../Maintenance/ExportImportSettings.md) again

##### Gelbes Warndreieck

The yellow warning signal is indicating that your BG arrived in irregular time intervals or that some BGs are missing. When pressing the sign, the message indicates “Recalculated data used”.

![Gelbes BG-Warndreieck](../images/bg_warn_yellow.png)

Normalerweise musst Du in diesem Falle nichts tun. Der closed loop funktioniert weiter!

As a sensor change is interrupting the constant flow of BG data, a yellow warning sign after sensor change is normal and nothing to worry about.

Special note for Libre users:

* Alle Libre-Sensoren springen alle paar Stunden um ein oder zwei Minuten, was dazu führt, dass es nie zu einen perfekten Strom von regulären BG-Intervallen kommt.
* Also, jumpy readings interrupt the continuous flow.
* Therefore, the yellow warning sign will be 'always on' for Libre users.

*Note*: Up to 30h hours are taken into accord for **AAPS** calculations. Daher kann es auch nach der Lösung des zugrunde liegenden Problems bis zu 30 Stunden dauern, bis das gelbe Dreieck nach dem letzten unregelmäßigen Intervall verschwunden ist.

### Abschnitt D - IOB, COB, BR und AS

![Abschnitt D](../images/Home2020_TBR.png)

**Syringe**: insulin on board (IOB) - amount of active insulin inside your body

1. Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde.
    
    * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
    * Ein Klick auf das Symbol zeigt die Aufteilung von Bolus und Basal-Insulin.

2. **Grain**: [carbs on board (COB)](../DailyLifeWithAaps/CobCalculation.md) - yet unabsorbed carbs you have eaten before The icon pulses red if carbs are required (see [below](#aaps-screens-carbs-required))

3. **Purple line**: current basal rate. The icon changes to reflect temporary changes in basal rate (flat at 100%) 
    * Klicke auf das Icon um Details zur Basalrate und einer eventuellen temporären Basalrate (inkl. verbleibende Dauer) angezeigt zu bekommen.
4. **Arrows up & down**: indicating actual [Autosens](#Open-APS-features-autosens) status (enabled or disabled) and value is shown below icon

(aaps-screens-carbs-required)=

#### Kohlenhydrat-Vorschlag

![Kohlenhydrat-Vorschlag](../images/Home2020_CarbsRequired.png)

Wenn der Algorithmus erkennt, dass Du etwas essen solltest, damit Dein BZ nicht zu tief fällt, wird die Menge der empfohlenen Kohlenhydrate angezeigt.

This is when the oref algorithm thinks it can't rescue you by zero-temping, and you will need carbs to fix.

Diese Benachrichtigungen des Kohlenhydrat-Vorschlags sind deutlich ausgeklügelter als die Berechnungen des Bolusrechners. So kann es sein, dass Dir hier vorgeschlagen wird, etwas zu essen, obwohl der Bolus-Rechner keine fehlenden Kohlenhydrate anzeigt.

Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

### Abschnitt E - Status Lights

![Abschnitt E](../images/Home2020_StatusLights.png)

Status Lights geben eine optische Warnung für

* Kanülenalter
* Insulinalter (Tage Reservoirverwendung)
* Reservoirstand (Einheiten)
* Sensoralter
* Batteriealter und Ladezustand (%)

Bei Überschreitung der Warnschwelle werden die Werte gelb angezeigt.

Wenn die kritische Schwelle überschritten wird, werden die Werte rot angezeigt.

Settings can be changed in [Preferences > Overview > Status lights](#Preferences-status-lights).

Depending on the pump you use, you may not have all of these icons.

(aaps-screens-main-graph)=

### Abschnitt F - Hauptgrafik

![Abschnitt F](../images/Home2020_MainGraph.png)

The graph shows your blood glucose (BG) as read from your glucose monitor (CGM).

Notizen, die auf der Registerkarte "Aktion" eingegeben werden, wie z. B. die Kalibrierungen nach Messung am Finger, die Kohlenhydrat Einträge sowie die Profilwechsel werden hier angezeigt.

Long press on the graph to change the timescale. Du kannst zwischen 6, 12, 18 oder 24 Stunden wählen.

Der grüne Bereich spiegelt den Zielbereich wider.

Blue triangles show [SMB](#Open-APS-features-super-micro-bolus-smb) - if enabled in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings).

(AapsScreens-activate-optional-information)=

#### Aktiviere optionale Informationen

On the main graph, you can switch on these optional information:

* Predictions (Vorhersagen)
* Basal
* Aktivität - Insulin Aktivitätskurve

To show this information, click the triangle on the right side of the main graph. Für die Hauptgrafik stehen nur die drei Optionen oberhalb der Zeile "\---\---- Graph 1 \---\----" bereit.

![Main graph setting](../images/Home2020_MainGraphSetting.png)

(aaps-screens-prediction-lines)=

#### Vorhersage Kurven

* **Orange** line: [COB](CobCalculation) (color is used generally to represent COB and carbs)
    
    This prediction line shows where your BG (not where COB itself!) will go based on the current **Profile** settings, assuming that the deviations due to carb absorption remain constant. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **Dark blue** line: IOB (color is used generally to represent IOB and insulin)
    
    This prediction line shows what would happen under the influence of insulin only. For example if you dialed in some insulin and then didn’t eat any carbs.

* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
    
    This prediction line shows how the BG trajectory line would change if the pump stopped all insulin delivery (0% TBR).
    
    *This line appears only when the [SMB](#Config-Builder-aps) algorithm is used.*

* **Dark yellow** line: [UAM](#SensitivityDetectionAndCob-sensitivity-oref1) (un-announced meals)
    
    Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Prediction line is similar to the **orange COB line**, but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).
    
    *This line appears only when the [SMB](#Config-Builder-aps) algorithm is used.*

* **Dunkelorange** Linie: COB (beschleunigte Kohlenhydratabsorption)
    
    Ähnlich wie COB, aber unter Annahme einer festen Kohlenhydrat-Absorptionsrate von 10 mg/dL/5m (-0,555 mmol/l/5m). Veraltet und nur begrenzt nützlich.
    
    *This line appears only when the older [AMA](#Config-Builder-aps) algorithm is used.*

Deine tatsächliche BZ-Kurve wird normalerweise in der Mitte dieser Prognoselinien oder in der Nähe der Linie, die Annahmen macht, die Deiner Situation am nächsten kommen, liegen.

#### Basal

Die **durchgezogene blaue** Kurve zeigt die Basalabgabe Ihrer Pumpe an und spiegelt die tatsächliche Abgabe im Laufe der Zeit wider.

Die **gepunktete blaue** Kurve zeigt, was die Basalrate wäre, wenn es keine temporären basalen Anpassungen (TBRs) gäbe.

When the standard basal rate is given, the area under the curve is shown in dark blue. When the basal rate is temporarily adjusted (increased or decreased), the area under the curve is shown in light blue.

#### Aktivität

Die **dünne gelbe** Linie zeigt die Insulinaktivität.

Sie basiert auf dem erwarteten Rückgang des BZ gemäß aktivem Insulin. Weitere Faktoren (wie z.B. Kohlenhydrate) werden NICHT berücksichtigt.

(AapsScreens-section-g-additional-graphs)=

### Abschnitt G - zusätzliche Grafiken

Sie können bis zu vier zusätzliche Grafiken unterhalb der Hauptgrafik aktivieren.

To open settings for additional graphs click the triangle on the right side of the [main graph](#section-f---main-graph) and scroll down.

![Einstellung weiterer Diagramme](../images/Home2020_AdditionalGraphSetting.png)

To add another graph check the box on the left side of its name (i.e. \---\---- Graph 1 \---\----).

Most users find the following configuration of additional graphs to be adequate :

* Graph 1 with IOB, COB, Sensitivity
* Graph 2 with Deviations and BGI.

#### Gesamtinsulin

Aktives Insulin einschließlich Boli **und Basal**.

#### Aktives Insulin (IOB)

Zeigt das Insulin, das an Bord ist (= aktives Insulin im Körper). Es enthält Insulin aus Bolus und temporärem Basal (** schließt aber Basalraten aus deinem Profil aus**).

If there were no [SMBs](#Open-APS-features-super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.

Das IOB kann negativ sein, wenn Sie längere Zeit keinen verbleibenden Bolus und keine oder nur niedrige Basalrate hatten.

Decaying depends on your [DIA and insulin profile settings](../SettingUpAaps/YourAapsProfile.md).

#### Aktive Kohlenhydrate

Zeigt die Kohlenhydrate, die Sie an Bord haben (= aktive, noch nicht resorbierte Kohlenhydrate in Ihrem Körper).

Decaying depends on the [deviations the algorithm detects](../DailyLifeWithAaps/CobCalculation.md).

Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger).

#### Sensitivität

Shows the sensitivity that [Autosens](#Open-APS-features-autosens) has detected.

Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.

Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the line in your graph is displayed for information only.

#### Heart rate

This data may be available when using a [Garmin smartwatch](#Watchfaces-garmin).

#### Abweichungen

* **Grey** bars show a deviation due to carbs. 
* **Green** bars show that BG is higher than the algorithm expected it to be. Green bars are used to increase resistance in [Autosens](#Open-APS-features-autosens).
* **Red** bars show that BG is lower than the algorithm expected. Red bars are used to increase sensitivity in [Autosens](#Open-APS-features-autosens).
* **Yellow** bars show a deviation due to UAM.
* **Black** bars show small deviations not taken into account for sensitivity

#### Blood Glucose Impact

This line shows the degree to which BG ‘should’ rise or fall based on insulin activity alone.

![Buttons für den Homescreen](../images/Screenshots_DEV_BGI.png)

It is a good combination to display this line along with the Deviation bars. They share the same scale, but it is a different one than the other optional data, so it is a good idea to display them on a separate graph, as shown above. Comparing the BGI line and the Deviation bars is another way to understand how **BG** fluctuates. Here, at the time marked **1**, the Deviation bars are greater than the BGI line, indicating that BG is rising. Later, during the hours marked **2**, BGI and DEV are pretty much in line, indicating that BG is stable.

### Abschnitt H - Schaltflächen

![Buttons für den Homescreen](../images/Home2020_Buttons.png)

Buttons for Insulin, Carbs and Calculator are almost always visible. If the connection to the pump is lost, the insulin button will not be visible.

Other Buttons can be setup in [Preferences > Overview > Buttons](#Preferences-buttons).

About using the Insulin, Carbs and Calculator buttons : If enabled in the [Preferences > Overview](#Preferences-show-notes-field-in-treatments-dialogs), the **Notes** field allows you to enter text that will show on the main graph, and may be uploaded to Nightscout - depending on your settings for NS client.

#### Insulin

![Insulin-Button](../images/Home2020_ButtonInsulin.png)

To give a certain amount of insulin without using the [bolus calculator](#bolus-wizard).

By checking the box **Start eating soon TT**, you can automatically start your [eating soon temp target](#TempTargets-eating-soon-temp-target).

If you do not want to bolus through the pump but record an insulin amount (i.e. insulin given by pen) check the corresponding box. When checking this box, you get an additional field “Time offset”, that you can use to record an insulin injection made in the past.

You can use the buttons to quickly increase the insulin quantity. The increment values can be changed in the [Preferences > Overview > Buttons](#Preferences-buttons).

#### Kohlenhydrate

![Kohlenhydrat-Button](../images/Home2020_ButtonCarbs.png)

Kohlenhydrate ohne Bolus dokumentieren.

Certain [pre-set temporary targets](#TempTargets-hypo-temp-target) can be set directly by checking the box.

**Time offset**: When will you / have you been eaten carbs (in minutes).

**Duration**: To be used for ["extended carbs"](ExtendedCarbs)

You can use the buttons to quickly increase the carb amount. The increment values can be changed in the [Preferences > Overview > Buttons](#Preferences-buttons).

#### Bolus-Rechner

See Bolus Wizard [section below](#bolus-wizard).

#### Kalibrierungen

Sendet eine Kalibrierung an xDrip + oder öffnet den Dexcom Kalibrierungsdialog.

Must be activated in [Preferences > Overview > Buttons](#Preferences-buttons).

#### CGM

Öffnet xDrip+.

Back button returns to **AAPS**.

Must be activated in [Preferences > Overview > Buttons](#Preferences-buttons).

#### Quick Wizard

Einfache Eingabe von Kohlenhydraten und deren Berechnungsgrundlage.

Details are set up in [Preferences > Overview > QuickWizard settings](#Preferences-quick-wizard).

## Bolus-Rechner

![Bolus-Rechner](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus, this is where you will normally make it from.

### Abschnitt I

Zeigt den errechneten Bolus.

Falls IOB (Insulin on bord) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.

(AapsScreens-section-j)=

### Abschnitt J

Das Feld BZ (BG) ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer.

In the **Carbs** field, you add your estimate of the amount of carbs - or equivalent - that you want to bolus for.

The **Corr** field is if you want to modify the end dosage for some reason.

The **Carb time** field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohelnhydrate also schon zu Dir genommen hast.

**Eating reminder** : For carbs in the future, the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at the given time, when to eat the carbs you have input into **AAPS**.

![Bolus-Rechner mit Essenserinnerung](../images/Home2021_BolusWizard_EatingReminder.png)

### Abschnitt K

**Profile** allows you to select a different profile than the current one, to make the calculation for the insulin required. This profile selection applies only for the current bolus, it is not a profile change.

**Super Bolus** is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The option only shows when "Enable Superbolus in wizard" is set in the [Preferences > Overview > Advanced Settings](#Preferences-advanced-settings-overview). Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.

Weitere Informationen findest Du unter [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Abschnitt L

Details of the wizard's bolus calculation.

You can deselect any that you do not want to include, but you normally wouldn't want to.

For safety reasons the **TT box must be ticked manually**, if you want the bolus wizard to calculate based on an existing temporary target.

#### Kombinationen von COB und IOB und deren Bedeutung

* For safety reasons, the IOB box cannot be unticked when COB box is ticked as you might run the risk of too much insulin as **AAPS** is not accounting for what’s already given.
* If you tick COB and IOB, unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, **AAPS** takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
* Falls Du einen weiteren Bolus wegen **zusätzlichen Essens** kurz nach einem Mahlzeitenbolus abgeben willst (z.B. zusätzlicher Nachtisch), so kann es hilfreich sein, alle Häkchen rauszunehmen. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.

![BolusWizard with Details](../images/Home2021_BolusWizard_Details.png)

The box near the eye allows you to choose between the detailed view, with the numbers entering the calculation for each item, or the simple view with icons. Pressing on an icon will enable / disable this entry from the calculation.

(AapsScreens-wrong-cob-detection)=

#### Fehlerhafte Erkennung der aktiven Kohlenhydrate (COB)

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorption.png)

If you see the warning above after using bolus wizard, **AAPS** has detected that the calculated COB value may be wrong. So, if you want to bolus again after a previous meal with COB, you should be aware of overdosing!

For details, see the hints on [COB calculation page](#CobCalculation-detection-of-wrong-cob-values).

(screens-action-tab)=

## Aktionen Tab

![Aktionen Tab](../images/Home2021_Action.png)

### Aktionen - Abschnitt M

Button **[Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)** as an alternative to pressing the [current profile](#section-b---profile--target) on homescreen.

Button **[Temporary target](../DailyLifeWithAaps/TempTargets.md)** as an alternative to pressing the [current target](#section-b---profile--target) on homescreen.

Button zum Starten oder Abbrechen einer temporären Basalrate. Beachte, dass sich die Bezeichnung der Schaltfläche von "TBR" zu "Abbrechen X%" ändert, wenn eine temporäre Basalrate abgegeben wird.

Even though [extended boluses](#Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.

* Diese Option ist nur für Dana RS und Insight Pumpen verfügbar. 
    * Der Closed Loop wird automatisch gestoppt und für die Laufzeit des verzögerten Bolus zum Open Loop gewechselt.
    * Make sure to read the [details](../DailyLifeWithAaps/ExtendedCarbs.md) before using this option.

### Careporal - Abschnitt N

Displays information on:

* sensor age & level (battery percentage)
* insulin age & level (units)
* cannula age
* pump battery age & level (percentage

Less information will be shown if **low resolution skin** is used ([Preferences > General > Skin](#Preferences-skin)).

(screens-sensor-level-battery)=

#### Sensor Level (Batterie)

Works for CGM with an additional transmitter such as MiaoMiao 2. (Technisch gesehen muss der Sensor cat level Informationen an xDrip+ senden.)

Thresholds can be set in [Preferences > Overview > Status lights](#Preferences-status-lights).

### Careporal - Abschnitt O

BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal---section-n).

Mit dem Button 'Katheterwechsel' kannst Du sowohl einen Katheter- (Schlauch) als auch einen Kanülenwechsel (Nadel) aufzeichnen.

Abschnitt O spiegelt das Careportal aus Nightscout wider. Bewegung, Ankündigung und Frage sind daher spezielle Formen der Notiz.

### Tools - Abschnitt P

#### Historie

Allows you to ride back in **AAPS** [history](../Maintenance/Reviewing.md).

#### TDD

Total daily dose = Bolus + Basal pro Tag

Einige Ärzte nutzen, gerade für neue Pumpenbenutzer, ein Basal-Bolus-Verhältnis von 50:50.

Therefore, ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours).

Andere bevorzugen einen Anteil von 32% bis 37% des Basalinsulins (TBB) am Gesamtinsulin (TDD).

Wie die meisten Faustregeln gilt, dass dies nicht allgemeingültig ist. Hinweis: Bei dir und deinem Diabetes kann es ganz anders sein!

(AapsScreens-insulin-profile)=

## Insulinprofil

![Insulinprofil](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen in [config builder](#Config-Builder-insulin). The curves will vary based on the [DIA](#your-aaps-profile-duration-of-insulin-action) and the time to peak.

The **purple** line shows how much insulin remains after it has been injected as it decays with time and the **blue** line shows how active it is.

See [Your AAPS Profile > Duration of insulin action](#your-aaps-profile-duration-of-insulin-action) to learn more about what it is and how to set it.

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_PumpStatus.png)

* Verschiedene Informationen über den Status Deiner Pumpe. Die angezeigten Informationen hängen von Deinem Pumpenmodell ab.
* See [pumps page](../Getting-Started/CompatiblePumps.md) for details.

## Loop, AMA / SMB

These tabs show details about the algorithm's calculations and why **AAPS** acts the way it does.

Calculations are run each time the system gets a fresh reading from the CGM.

For more details see [APS section on config builder page](#Config-Builder-aps).

(aaps-screens-profile)=

## Profile

![Profile](../images/Screenshots_Profile.png)

Profile contains information on your individual diabetes settings, see the detailed **[Profile](../SettingUpAaps/YourAapsProfile.md)** page for more information.

## Automatisierung

See the dedicated page [here](../DailyLifeWithAaps/Automations.md).

## Nightscout-Client

![Nightscout-Client](../images/Screenshots_NSClient.png)

This page displays the status of the connection with your Nightscout site.

Settings can be changed in [Preferences > NS Client](#Preferences-nsclient).

For troubleshooting see this [page](../GettingHelp/TroubleshootingNsClient.md).

## BZ-Quelle - xDrip+, BYODA...

![BG Source tab - here Nightscout](../images/Screenshots_BGSource.png)

Depending on your BG source settings, this tab is named differently.

Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low) or duplicate readings.

(aaps-screens-treatments)=

## Behandlungen

This view can be accessed by pressing the 3 dots on the right of the menu, then Treatments. It is not possible to show it in the main menu through the Config Builder. In this view, you can view and alter the history of the following treatments:

* Bolus & carbs
* [Verzögerter Bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporäre Basalrate (TBR)
* [Temporäres Ziel](../DailyLifeWithAaps/TempTargets.md)
* [Profilwechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notes entered through action tab and notes in dialogues
* User entry: other notes that are not sent to Nightscout

In the last column, the data source for each line is displayed in blue. It can be :

* NS for Nightscout : the data comes from or has been recorded to Nightscout
* PH for Pump History : the data has been processed by the pump

(screens-bolus-carbs)=

### Bolus & carbs

![Kohlenhydrate & Bolus](../images/TreatmentsView1.png)

On this tab you can view the bolus and carbs log. Each bolus (line **1** and **4**) shows the remaining associated IOB next to the insulin amount. The origin of the bolus can be either :

* Meal (manually entered though the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, when using the SMB Functionality

The carbs (line **2**) are only stored in Nightscout. If you have used the [Bolus Wizard](#bolus-wizard) to calculate insulin dosage, you can press the “Calc” text (line **3**) to show the details of how the bolus was calculated.

Depending on the pump used, insulin and carbs can be shown in one single line, or will result in multiple lines: one for the calculation detail, one for the carbs, one for the bolus itself.

The treatment tab can be used to correct faulty carb entries (*i.e.* you over- or underestimated carbs). Note that it is not possible to edit an existing entry, you need to follow the following process:

1. Prüfe und merke Dir die aktuelle COB- und IOB-Menge, die auf dem Startbildschirm angezeigt wird.
2. Je nach Pumpenmodell werden die Kohlenhydrate entweder zusammen mit dem Insulin in einer Zeile oder als separater Eintrag (z.B. bei der Dana RS) angezeigt.
3. Remove the entry with the faulty carb amount. (Latest versions have trashcan icon in treatments screen. Press the trashcan icon, select the lines to remove, and then press the trashcan icon again to finalize.)
4. Stelle sicher, dass die KH erfolgreich gelöscht wurden, indem Du COB auf dem Startbildschirm überprüfst.
5. Mache das gleiche für IOB falls bei Dir im Tab 'Behandlungen' KH und Insulin zusammen in einer Zeile angezeigt werden.
    
    → If carbs are not removed as intended, and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Gib die korrekte Kohlenhydratmenge über den Kohlenhydrate-Button auf der Startseite ein und achte dabei auf die Auswahl des richtigen Zeitpunkts.

7. Falls bei Dir im Tab 'Behandlungen' KH und Insulin zusammen in einer Zeile angezeigt werden musst Du zusätzlich die Insulinmenge neu eingeben. Achte auch hier auf die Auswahl des richtigen Zeitpunkts und prüfe im Anschluss IOB auf dem Startbildschirm.

### Temp Basal

![Temp Basal](../images/TreatmentsView2.png)

The **temp basals** applied by the loop are shown here. When there is still an impact on the IOB for an entry, the information is shown in green. It can be:

* Positive IOB if the temp basal was higher than the one set in the Profile (line **2**)
* Negative IOB for a zero-temp or if the temp basal was lower than the one set in the Profile (line **1**)

Deleting the entries only affects your reports in Nightscout and will probably tamper your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend” : it happens when basal is not currently delivered. This is a normal situation when in the process of changing a pod, for example.

### Temporäres Ziel

![Temporäres Ziel](../images/TreatmentsView3.png)

The history of temporary targets can be seen here.

### Profile Switch

![Profile Switch](../images/TreatmentsView4.png)

The history of profile switches can be seen here. You may see multiple entries each time you switch profile : line **1**, stored in Nightscout but not in Pump History, corresponds to the request of a profile switch made by the user. Line **2**, stored both in NS and PH, correspond to the actual switch.

Deleting the entries only affects your reports in Nightscout and will never actually change the current profile.

You can use the **Clone** button shown on line **1** to make a copy of a **Profile Switch**. See [Your AAPS Profile > Manage your profiles](#your-aaps-profile-clone-profile-switch) for more information.

### Care portal

![Care portal](../images/TreatmentsView5.png)

This tab shows all notes and alerts recorded in Nightscout.

## Historie

This view can be accessed by pressing the 3 dots on the right of the menu, then History. It is not possible to put in the main menu through the Config Builder. It can also be accessed through a button at the bottom of the [Action tab](#action-tab).

Allows you to ride back in **AAPS** history. See the dedicated page [Reviewing your data > History Browser](../Maintenance/Reviewing.md).

## Statistics

This view can be accessed by pressing the 3 dots on the right of the menu, then Statistics. It is not possible to put in the main menu through the Config Builder.

Gives you statistics about your Time In Range and Total Daily Dose. See the dedicated page [Reviewing your data > Statistics](#reviewing-statistics).

(aaps-screens-profile-helper)=

## Profile Helper

This view can be accessed by pressing the 3 dots on the right of the menu, then Profile Helper. It is not possible to put in the main menu through the Config Builder. The Profile Helper can help you:

* [build a profile from scratch for a kid](#your-aaps-profile-profile-from-scratch-for-a-kid)
* [compare two profiles](#your-aaps-profile-compare-profiles)