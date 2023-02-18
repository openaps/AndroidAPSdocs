# AndroidAPS Bildschirme

## Die Startseite

![Startbildschirm v2.7](../images/Home2020_Homescreen.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

### Abschnitt A - Register

* Wechsele zwischen den verschiedenen AndroidAPS-Modulen.
* Alternativ kannst Du die Bildschirme wechseln, indem Du nach links oder rechts wischst.
* Displayed tabs can be selected in [config builder](Config-Builder-tab-or-hamburger-menu).

(Screenshots-section-b-profile-target)=

### Abschnitt B - Profil & Ziel

#### Aktuelles Profil

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* Das aktuelle Profil wird in der linken Schaltfläche angezeigt.
* Drücke kurz auf die Profil-Schaltfläche, für die Anzeige der Profildetails.
* Long press profile bar to [switch between different profiles](Profiles-profile-switch).
* Falls der Profilwechsel mit Angabe der Dauer durchgeführt wurde, wird die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Ziel

![Temp target remaining duration](../images/Home2020_TT.png)

* Das aktuelle BZ-Ziel wird in der rechten Schaltfläche angezeigt.
* Drücke kurz auf die Zielwert-Schaltfläche, um ein [temporäres Ziel](../Usage/temptarget.md) zu setzen.
* Falls ein temporäres Ziel festgelegt ist, wird die Leiste gelb und die verbleibende Zeit in Minuten in Klammern angezeigt.

(Screenshots-visualization-of-dynamic-target-adjustment)=

#### Anzeige der dynamischen Ziel-Anpassung

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS kann das Ziel dynamisch anhand der Empfindlichkeit (Sensitivity) anpassen, wenn Du den SMB-Algorithmus verwendest.
* Enable either one or both of the [following options](Preferences-openaps-smb-settings) 
   * "Sensibilität erhöht den Zielwert" und/oder 
   * "Resistenz senkt Zielwert" 
* Falls AAPS Resistenz oder Sensibilität erkennt, wird das aus dem Profil vorgegebene Ziel angepasst. 
* Falls das Ziel geändert wird, wechselt der Hintergrund der Zielschaltfläche nach grün.

### Abschnitt C - BZ & Loop-Status

#### Aktueller Blutzucker

* Der neueste Blutzuckerwert aus Deinem CGM wird auf der linken Seite angezeigt.
* Color of the BG value reflects the status to the defined [range](Preferences-range-for-visualization). 
   * grün = innerhalb des Bereichs
   * rot = unterhalb des Zielbereichs
   * gelb = oberhalb des Zielbereichs
* Der gräuliche Block in der Mitte zeigt die Minuten seit dem Empfang des letzten CGM-Werts an. Darunter findest die Veränderung der CGM-Werte zum vorangegangenen Wert, in den letzten 15 und 40 Minuten.

(Screenshots-loop-status)=

#### Loop Status

![Loop Status](../images/Home2020_LoopStatus.png)

* Ein neues Symbol zeigt den Status des Loops:
   
   * grüner Kreis = Loop läuft
   * green circle with dotted line = [low glucose suspend (LGS)](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * roter Kreis = Loop deaktiviert (dauerhaft)
   * gelber Kreis = Loop ausgesetzt (vorübergehend pausiert, aber Basalinsulin wird weiter abgegeben) - verbleibende Zeit wird unter dem Symbol angezeigt
   * grauer Kreis = Pumpe getrennt (vorübergehend gar keine Insulinabgabe) - verbleibende Zeit wird unter dem Symbol angezeigt
   * orangener Kreis = Superbolus läuft - verbleibende Zeit wird unterhalb des Symbols angezeigt
   * blauer Kreis mit gepunkteten Linien = Open Loop

* Drücke kurz oder lang auf das Icon um den Dialog zum Wechsel des Loop-Modus (Close loop, Low Glucose Suspend [Reduzierung der Basalrate bei niedrigen Glukosewerten], Open Loop, Abschalten), zum Pausieren / wieder Einschalten des Loop oder zum Trennen / erneuten Verbinden der Pumpe.
   
   * Wenn Du kurz drückst, muss die Auswahl im Loop-Dialog zusätzlich bestätigt werden.
   
   ![Statusmenü Loop](../images/Home2020_Loop_Dialog.png)

(Screenshots-bg-warning-sign)=

#### BG Warnzeichen

Beginnend mit Android 3.0 erhälst Du möglicherweise ein dreieckiges Warnsignal neben der BG-Ziffer, links auf dem Hauptbildschirm.

*Note*: Up to 30h hours are taken into accord for AAPS calculations. So even after you solved the origin problem, it can take about 30 hours for the yellow triangle to disappear after the last irregular interval occurred.

To remove it immediately you need to manually delete a couple of entries from the Dexcom/xDrip+ tab.

However, when there are a lot of duplicates, it might be easier to

* [backup your settings](../Usage/ExportImportSettings.md),
* setze deine Datenbank im Wartungsmenü zurück und
* [import your settings](../Usage/ExportImportSettings.md) again

##### Rotes Warndreieck: Doppelte BG-Daten

The red warning sign is signaling you to get active immediately: You are receiving duplicate BG data, which does avoid the loop to do its work right. Therefore your loop will be disabled until it is resolved.

![Rotes BG-Warndreieck](../images/bg_warn_red.png)

You need to find out why you get duplicate BGs:

* Ist Dexcom Bridge auf deiner NS-Seite aktiviert? Deaktiviere die Dexcom Bridge, indem Du zu heroku (oder einem anderen Hosting-Provider) gehst, dort die "enable" Variable bearbeitest und den "bridge" Teil dort entfernst. (Details zu heroku [findest Du hier](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Laden mehrere Quellen deine BG zu NS hoch? Wenn Du die BYODA-App verwendest, aktiviere den Upload in AAPS, aber aktiviere ihn nicht in xDrip+, falls das der Fall ist.
* Hast du Follower die deine BG erhalten und die diese auch wieder auf deine NS-Seite hochladen?
* Letzter Ausweg: In AAPS in den NS Client Einstellungen die Sync-Einstellungen auswählen und die Option "CGM Daten von NS akzeptieren" deaktivieren.

##### Gelbes Warndreieck

* Das gelbe Warnsignal weist darauf hin, dass BG-Daten in unregelmäßigen Zeitintervallen angekommen sind oder einige BGs fehlen.
   
   ![Gelbes BG-Warndreieck](../images/bg_warn_yellow.png)

* Normalerweise musst Du in diesem Falle nichts tun. Der closed loop funktioniert weiter!

* Da ein Sensorwechsel den konstanten Fluss der BG-Daten unterbricht, ist ein gelbes Warndreieck nach dem Wechsel des Sensors normal und es gibt nichts zu befürchten.
* Spezieller Hinweis für Libre-Nutzer:
   
   * Alle Libre-Sensoren springen alle paar Stunden um ein oder zwei Minuten, was dazu führt, dass es nie zu einen perfekten Strom von regulären BG-Intervallen kommt.
   * Auch sprunghafte Änderungen der Messwerte unterbrechen den kontinuierlichen Datenstrom.
   * Daher bleibt das gelbe Warndreieck für Libre-Nutzer immer sichtbar.

### Abschnitt D - IOB, COB, BR und AS

![Section D](../images/Home2020_TBR.png)

* Spritze: Insulin on Bord (IOB) - Menge des aktiven Insulins im Körper
   
   * Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. 
   * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
   * Ein Klick auf das Symbol zeigt die Aufteilung von Bolus und Basal-Insulin.

* Grain: [carbs on board (COB)](../Usage/COB-calculation.md) - yet unabsorbed carbs you have eaten before -> icon pulses if carbs are required

* Violette Linie: Basalrate - Symbol ändert sich bei temporärer Änderung der Basalrate (flach bei 100%) 
   * Klicke auf das Icon um Details zur Basalrate und einer eventuellen temporären Basalrate (inkl. verbleibende Dauer) angezeigt zu bekommen.
* Arrows up & down: indicating actual [autosens](Open-APS-features-autosens) status (enabled or disabled) and value is shown below icon

#### Kohlenhydrat-Vorschlag

![Kohlenhydrat-Vorschlag](../images/Home2020_CarbsRequired.png)

* Wenn der Algorithmus erkennt, dass Du etwas essen solltest, damit Dein BZ nicht zu tief fällt, wird die Menge der empfohlenen Kohlenhydrate angezeigt.
* Dies ist der Fall, wenn der Algorithmus davon ausgeht, dass ein Absenken der Basalrate auf Null nicht ausreicht und Du daher Kohlenhydrate zu Dir nehmen solltest.
* Diese Benachrichtigungen des Kohlenhydrat-Vorschlags sind deutlich ausgeklügelter als die Berechnungen des Bolusrechners. So kann es sein, dass Dir hier vorgeschlagen wird, etwas zu essen, obwohl der Bolus-Rechner keine fehlenden Kohlenhydrate anzeigt.
* Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

### Abschnitt E - Status Lights

![Section E](../images/Home2020_StatusLights.png)

* Status Lights geben eine optische Warnung für 
   * Kanülenalter
   * Insulinalter (Tage Reservoirverwendung)
   * Reservoirstand (Einheiten)
   * Sensoralter
   * Batteriealter und Ladezustand (%)
* Bei Überschreitung der Warnschwelle werden die Werte gelb angezeigt.
* Wenn die kritische Schwelle überschritten wird, werden die Werte rot angezeigt.
* Settings can be made in [preferences](Preferences-status-lights).

(Screenshots-section-f-main-graph)=

### Abschnitt F - Hauptgrafik

![Section F](../images/Home2020_MainGraph.png)

* Grafik zeigt Ihren Blutzuckerspiegel (BZ) wie von Ihrem Glukose-Monitor (CGM) gemessen. 
* Notizen, die auf der Registerkarte "Aktion" eingegeben werden, wie z. B. die Kalibrierungen nach Messung am Finger, die Kohlenhydrat Einträge sowie die Profilwechsel werden hier angezeigt. 
* Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 12, 18 oder 24 Stunden wählen.
* Der grüne Bereich spiegelt den Zielbereich wider. It can be configured in [preferences](Preferences-range-for-visualization).
* Blue triangles show [SMB](Open-APS-features-super-micro-bolus-smb) - if enabled in [preferences](Preferences-openaps-smb-settings).
* Optionale Informationen:
   
   * Predictions (Vorhersagen)
   * Basal
   * Aktivität - Insulin Aktivitätskurve

#### Aktiviere optionale Informationen

* Klicken Sie auf das Dreieck auf der rechten Seite des Hauptgraphen um auszuwählen, welche Informationen in der Hauptgrafik angezeigt werden.
* Für die Hauptgrafik stehen nur die drei Optionen oberhalb der Zeile "\---\---- Graph 1 \---\----" bereit.
   
   ![Einstellungen des Hauptdiagramms](../images/Home2020_MainGraphSetting.png)

(Screenshots-prediction-lines)=

#### Vorhersage Kurven

* **Orange** line: [COB](../Usage/COB-calculation.md) (colour is used generally to represent COB and carbs)
   
   Die Prognosekurve zeigt, wohin sich der BZ (nicht die COB selbst!) auf der Grundlage der aktuellen Pumpeneinstellungen und unter der Annahme, dass die Abweichungen aufgrund der Kohlenhydratresorption konstant bleiben, entwickeln wird. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **Dunkelblau**: IOB (insulin on board - aktives Insulin) [Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.]
   
   Die Prognoselinie zeigt, was passieren würde, wenn nur der Einfluss des Insulins berücksichtigt wird. Zum Beispiel wenn Du Insulin gespritzt und dann keine Kohlenhydrate zu Dir genommen hast.

* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
   
   Die Prognoselinie zeigt, wie sich die IOB-Kurve ändern würde, wenn die Pumpe die Insulinabgabe komplett stoppen würde (0% TBR).
   
   *This line appears only when the [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

* **Dark yellow** line: [UAM](Sensitivity-detection-and-COB-sensitivity-oref1) (un-announced meals)
   
   Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Die Prognoselinie ähnelt der ORANGE COB-Linie, geht aber davon aus, dass die Abweichungen mit konstanter Rate abnehmen werden (durch Verlängerung der aktuellen Reduktionsrate).
   
   *This line appears only when the [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

* **Dark orange** line: aCOB (accelerated carbohydrate absorption)
   
   Similar to COB, but assuming a static 10 mg/dL/5m (-0.555 mmol/l/5m) carb absorption rate. Deprecated and of limited usefulness.
   
   *This line appears only when the older [AMA](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

#### Basal

* Die **durchgezogene blaue** Kurve zeigt die Basalabgabe Ihrer Pumpe an und spiegelt die tatsächliche Abgabe im Laufe der Zeit wider.
* Die **gepunktete blaue** Kurve zeigt, was die Basalrate wäre, wenn es keine temporären basalen Anpassungen (TBRs) gäbe.
* In Zeiten der Standardbasalrate wird die Fläche unter der Kurve in dunkelblau dargestellt.
* Wird die Basalrate vorübergehend angepasst (erhöht oder verringert), wird die Fläche unter der Kurve in hellblau angezeigt.

#### Aktivität

* Die **dünne gelbe** Linie zeigt die Insulinaktivität. 
* Sie basiert auf dem erwarteten Rückgang des BZ gemäß aktivem Insulin. Weitere Faktoren (wie z.B. Kohlenhydrate) werden NICHT berücksichtigt.

### Abschnitt G - zusätzliche Grafiken

* Sie können bis zu vier zusätzliche Grafiken unterhalb der Hauptgrafik aktivieren.
* To open settings for additional graphs click the triangle on the right side of the [main graph](Screenshots-section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* Um ein zusätzliches Diagramm hinzuzufügen, markieren Sie das Kästchen auf der linken Seite des Namens (d. h. \---\---- Graph 1 \---\----).

#### Gesamtinsulin

* Aktives Insulin einschließlich Boli **und Basal**.

#### Aktives Insulin (IOB)

* Zeigt das Insulin, das an Bord ist (= aktives Insulin im Körper). Es enthält Insulin aus Bolus und temporärem Basal (** schließt aber Basalraten aus deinem Profil aus**).
* If there were no [SMBs](Open-APS-features-super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* Das IOB kann negativ sein, wenn Sie längere Zeit keinen verbleibenden Bolus und keine oder nur niedrige Basalrate hatten.
* Decaying depends on your [DIA and insulin profile settings](Config-Builder-local-profile). 

#### Aktive Kohlenhydrate

* Zeigt die Kohlenhydrate, die Sie an Bord haben (= aktive, noch nicht resorbierte Kohlenhydrate in Ihrem Körper). 
* Der Abbau hängt davon ab, was der Algorithmus anhand der BZ-Abweichungen erkennt. 
* Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger). 

#### Abweichungen

* **GRAUE** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten. 
* **GRÜNE** Balken zeigen, dass der BZ höher ist als der Algorithmus es erwartet. Green bars are used to increase resistance in [Autosens](Open-APS-features-autosens).
* **ROTE** Balken zeigen, dass der BZ niedriger ist als der Algorithmus erwartet. Red bars are used to increase sensitivity in [Autosens](Open-APS-features-autosens).
* **GELB** Balken zeigen eine Abweichung aufgrund von UAM an.
* **SCHWARZE** Balken zeigen kleine Abweichungen, die bei der Berechnung der Sensitivität nicht berücksichtigt werden.

#### Sensitivität

* Shows the sensitivity that [Autosens](Open-APS-features-autosens) has detected. 
* Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.

#### Aktivität

* Zeigt die Aktivität von Insulin, berechnet aus Deinem Insulinprofil (es ist nicht die 1.Ableitung von IOB). 
* Der Wert ist umso höher, je näher Du Dich am Zeitpunkt des Insulin-Wirkmaximums befindest.
* Das bedeutet, er wird negativ, wenn das IOB abnimmt. 

#### Steigung der Abweichung

* Interner Wert, der im Algorithmus verwendet wird.

### Abschnitt H - Schaltflächen

![Homescreen buttons](../images/Home2020_Buttons.png)

* Schaltflächen für Insulin, Kohlenhydrate und Bolus-Rechner sind "immer an".
   
   * Wenn die Verbindung zur Pumpe unterbrochen ist, ist die Schaltfläche 'Insulin' nicht sichtbar.

* Other Buttons have to be setup in [preferences]Preferences-buttons).

#### Insulin

![Insulin button](../images/Home2020_ButtonInsulin.png)

* Um eine bestimmte Menge Insulin zu geben, ohne den [Bolus Rechner](#bolus-rechner) zu verwenden.
* By checking the box you can automatically start your [eating soon temp target](Preferences-default-temp-targets).
* Wenn das Insulin nicht durch die Pumpe abgegeben werden soll, sondern Du die Insulinmenge nur erfassen willst (z.B. Insulin mit Spritze gegeben), aktiviere das entsprechende Kästchen.

#### Kohlenhydrate

![Carbs button](../images/Home2020_ButtonCarbs.png)

* Kohlenhydrate ohne Bolus dokumentieren.
* Certain [pre-set temporary targets](Preferences-default-temp-targets) can be set directly by checking the box.
* Zeitverschiebung: Wann wirst Du/hast Du Kohlenhydrate gegessen (in Minuten).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.md)
* Mit den Buttons können Sie schnell die Menge der Kohlenhydrate erhöhen.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](Preferences-nsclient).

#### Bolus-Rechner

* Siehe Bolus Wizard [Abschnitt unter](#bolus-rechner)

#### Kalibrierungen

* Sendet eine Kalibrierung an xDrip + oder öffnet den Dexcom Kalibrierungsdialog.
* Must be activated in [preferences](Preferences-buttons).

#### CGM

* Öffnet xDrip+.
* Die Schaltfläche "Zurück" kehrt zu AAPS zurück.
* Must be activated in [preferences](Preferences-buttons).

#### Quick Wizard

* Einfache Eingabe von Kohlenhydraten und deren Berechnungsgrundlage.
* Details are setup in [preferences](Preferences-quick-wizard).

(Screenshots-bolus-wizard)=

## Bolus-Rechner

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus this is where you will normally make it from.

### Abschnitt I

* Das Feld BZ (BG) ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. 
* Unter CARBS (Kohlenhydrate) trägst Du Deine Schätzung der Kohlenhydrate - oder deren Äquivalent - ein. 
* Das Korr-Feld (CORR) wird benutzt, wenn Du die vorgeschlagene Dosis ändern möchtest.
* Das Feld KH-Zeit (CARB TIME) ist für einen Spritz-Ess-Abstand gedacht, so dass Du dem System mitteilen kannst, dass die Kohlenhydrate erst später gegessen werden. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohelnhydrate also schon zu Dir genommen hast.

(Screenshots-eating-reminder)=

#### Essens-Erinnerung

* Falls du einen Spritz-Ess-Abstand verwendest, kannst Du die Alarmfunktion verwenden. (Diese wird bei der Eingabe von Kohlenhydraten in der Zukunft automatisch aktiviert.) Du wirst dann nach Ablauf der eingebenen Zeit ans Essen erinnert.
   
   ![Bolus-Rechner mit Essenserinnerung](../images/Home2021_BolusWizard_EatingReminder.png)

### Abschnitt J

* Beim SUPER BOLUS wird das Basalinsulin der kommenden zwei Stunden zum berechneten Bolus addiert und die Basalrate für die kommenden zwei Stunden auf Null gesetzt, um das extra Insulin wieder heraus zu nehmen. The option only shows when "Enable [superbolus](Preferences-superbolus) in wizard" is set in the [preferences overview](Preferences-overview).
* Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.
* Weitere Informationen findest Du unter [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Abschnitt K

* Zeigt den errechneten Bolus. 
* Falls IOB (Insulin on bord) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](Preferences-nsclient).

### Abschnitt L

* Details zum Bolus-Rechner.
* Du kannst einzelne davon abwählen, wenn du sie ncht berücksichtigen willst, dies wird aber die Ausnahme sein.
* Aus Sicherheitsgründen muss das Feld **TT manuell aktiviert werden**, wenn der Bolus-Rechner ein vorhandenes temporäres Ziel berücksichtigen soll.

#### Kombinationen von COB und IOB und deren Bedeutung

* Aus Sicherheitsgründen kann die IOB Box nicht deaktiviert werden, wenn die COB Box aktiv ist. Sonst bestünde das Risiko, dass bereits im Körper befindliches Insulin nicht berücksichtigt und daher zu viel Insulin abgegeben würde.
* Wenn Du COB und IOB aktivierst, werden noch nicht resorbierte Kohlenhydrate, die nicht bereits mit Insulin abgedeckt sind, sowie alles Insulin, das als TBR oder SMB geliefert wurde, berücksichtigt.
* Falls Du IOB ohne COB auswählst besteht das Risiko, dass zu wenig Insulin abgegeben wird, da der Anteil des IOB, der eigentlich für noch nicht komplett vom Körper aufgenommene Kohlenhydrate vorgesehen ist, von der neuen Insulinmenge abgezogen wird. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
* Falls Du einen weiteren Bolus wegen **zusätzlichen Essens** kurz nach einem Mahlzeitenbolus abgeben willst (z.B. zusätzlicher Nachtisch), so kann es hilfreich sein, alle Häkchen rauszunehmen. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.

(Screenshots-wrong-cob-detection)=

#### Fehlerhafte Erkennung der aktiven Kohlenhydrate (COB)

![Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

* Wenn Du nach Verwendung des Bolus-Assistenten die obige Warnung siehst, hat AAPS erkannt, dass aktiven Kohlenhydrate (COB) eventuell nicht korrekt berechnet werden konnten. 
* Wenn Du kurz nach einer vorangegangenen Mahlzeit erneut einen Bolus abgeben willst, solltest Du Dir der Gefahr einer Überdosierung bewusst sein! 
* For details see the hints on [COB calculation page](COB-calculation-detection-of-wrong-cob-values).

(Screenshots-action-tab)=

## Aktionen Tab

![Actions tab](../images/Home2021_Action.png)

### Aktionen - Abschnitt M

* Button [profile switch](Profiles-profile-switch) as an alternative to pressing the [current profile](Screenshots-section-b-profile-target) on homescreen.
* Button [temporary target](temptarget-temp-targets) as an alternative to pressing the [current target](Screenshots-section-b-profile-target) on homescreen.
* Button zum Starten oder Abbrechen einer temporären Basalrate. Beachte, dass sich die Bezeichnung der Schaltfläche von "TBR" zu "Abbrechen X%" ändert, wenn eine temporäre Basalrate abgegeben wird.
* Even though [extended boluses](Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * Diese Option ist nur für Dana RS und Insight Pumpen verfügbar. 
   * Der Closed Loop wird automatisch gestoppt und für die Laufzeit des verzögerten Bolus zum Open Loop gewechselt.
   * Make sure to read the [details](../Usage/Extended-Carbs.md) before using this option.

### Careporal - Abschnitt N

* Zeigt Informationen zu
   
   * Sensoralter & -level (Batterieladestand in %)
   * Insulinalter & Reservoirstand (Einheiten)
   * Kanülenalter
   * Alter & Ladestand (in %) der Pumpenbatterie

* Less information will be shown if [low resolution skin](Preferences-skin) is used.

(Screenshots-sensor-level-battery)=

#### Sensor Level (Batterie)

* Benötigt xDrip+ Nightly Build vom 10.12.2020 oder neuer.
* Verfügbar für CGM-Systeme mit zusätzlichem Transmitter wie z.B. MiaoMiao 2. (Technisch gesehen muss der Sensor cat level Informationen an xDrip+ senden.)
* Thresholds can be set in [preferences](Preferences-status-lights).
* Wenn der Batterieladestand des Sensors und des Smartphones identisch sind, ist die xDrip+ Version wahrscheinlich zu alt und benötigt ein Update.
   
   ![Batterieladestand Sensor und Smartphone stimmen überein](../images/Home2021_ActionSensorBat.png)

### Careporal - Abschnitt O

* BZ-Test, Katheterwechsel, CGM-Sensor setzen, Pumpenbatterie-Wechsel sind die Grundlage für die in [Abschnitt N](#careportal-abschnitt-n) angezeigten Daten.
* Mit dem Button 'Katheterwechsel' kannst Du sowohl einen Katheter- (Schlauch) als auch einen Kanülenwechsel (Nadel) aufzeichnen.
* Abschnitt O spiegelt das Careportal aus Nightscout wider. Bewegung, Ankündigung und Frage sind daher spezielle Formen der Notiz.

### Tools - Abschnitt P

#### Historie

* Ermöglicht dir, durch deine AAPS Historie zu blättern.

#### TDD

* Total daily dose = Bolus + Basal pro Tag
* Einige Ärzte nutzen, gerade für neue Pumpenbenutzer, ein Basal-Bolus-Verhältnis von 50:50. 
* Daher wird das Verhältnis als TDD / 2 * TBB (Total base basal = Summe der Basalrate innerhalb von 24 Stunden) berechnet. 
* Andere bevorzugen einen Anteil von 32% bis 37% des Basalinsulins (TBB) am Gesamtinsulin (TDD). 
* Wie die meisten Faustregeln gilt, dass dies nicht allgemeingültig ist. Hinweis: Bei dir und deinem Diabetes kann es ganz anders sein!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

(Screenshots-insulin-profile))=

## Insulin Profil

![Insulin Profil](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](Config-Builder-insulin). 
* Die LILA Linie zeigt an, wie viel Insulin nach der Injektion verbleibt und wie es im Zeitverlauf abnimmt. Die BLAUE Linie veranschaulicht die Aktivität des Insulins.
* Wichtig zu beachten ist, dass der Ablauf deutlich länger dauert, als gemein hin angenommen. 
* Von der klassischen umpentherapie bist du es wahrscheinlich gewohnt anzunehmen, dass das Insulin nach ca. 3 1/2 Stunden vollständig abgebaut ist. 
* Allerdings spielt der langsamere Abbau beim Loopen eine wichtige Rolle da die Berechnungen deutlich präziser sind und sich diese geringen Mengen unter den rekursiven Berechnungen des AndroidAPS Algorithmus summieren.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_PumpStatus.png)

* Verschiedene Informationen über den Status Deiner Pumpe. Die angezeigten Informationen hängen von Deinem Pumpenmodell ab.
* Weitere Informationen findest Du auf der [Pumpen Seite](../Hardware/pumps.md).

## Careportal (Behandlungen)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Kohlenhydrat-Berechnung überprüfen

![Review carb calculation on t tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](Screenshots-bolus-wizard) to calculate insulin dosage you can review this calculation later on ts tab.
* Klicke einfach auf den grünen Text 'Berech.'. (Depending on pump used insulin and carbs can also be shown in one single line in ts.)

(Screenshots-carb-correction)=

### Kohlenhydrat Korrektur

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Prüfe und merke Dir die aktuelle COB- und IOB-Menge, die auf dem Startbildschirm angezeigt wird.
2. Je nach Pumpenmodell werden die Kohlenhydrate entweder zusammen mit dem Insulin in einer Zeile oder als separater Eintrag (z.B. bei der Dana RS) angezeigt.
3. Lösche den Eintrag mit der fehlerhaften KH-Menge.
4. Stelle sicher, dass die KH erfolgreich gelöscht wurden, indem Du COB auf dem Startbildschirm überprüfst.
5. Mache das gleiche für IOB falls bei Dir im Tab 'Behandlungen' KH und Insulin zusammen in einer Zeile angezeigt werden.
   
   -> Falls die KH nicht wie vorgesehen gelöscht werden und Du dennoch zusätzliche Kohlenhydrate eingibst, wird mit einem zu hohen COB gerechnet und dies kann zu überhöhter Insulinabgabe führen.

6. Gib die korrekte Kohlenhydratmenge über den Kohlenhydrate-Button auf der Startseite ein und achte dabei auf die Auswahl des richtigen Zeitpunkts.

7. Falls bei Dir im Tab 'Behandlungen' KH und Insulin zusammen in einer Zeile angezeigt werden musst Du zusätzlich die Insulinmenge neu eingeben. Achte auch hier auf die Auswahl des richtigen Zeitpunkts und prüfe im Anschluss IOB auf dem Startbildschirm.

## Loop, AMA / SMB

* Diese Registerkarten enthalten Details zu den Berechnungen des Algorithmus und erklären, warum AAPS so und nicht anders gerechnet hat.
* Die Berechnung erfolgt jedes Mal, wenn das System einen neuen Wert vom CGM erhält.
* For more details see [APS section on config builder page](Config-Builder-aps).

## Profile

![Profile](../images/Screenshots_Profile.png)

* Das Profil enthält Informationen zu Deinen individuellen Diabetes-Einstellungen:
   
   * DIA (Insulinwirkdauer)
   * IC: Insulin zu Kohlenhydrat-Verhältnis ("BE-Faktor")
   * ISF: Insulin Sensitivitäts-Faktor ("Korrektur-Faktor")
   * Basalrate
   * BZ-Ziel: Wert, den die AAPS-Berechnungen anstreben sollen

* As of version 3.0 only [local profile](Config-Builder-local-profile) is possible. Das lokale Profil kann auf Deinem Smartphone bearbeitet und mit Deiner Nightscout-Seite synchronisiert werden.

(Screenshots-treatment)=

## Bolus

History of the following treatments:

* Bolus & carbs -> option to [remove entries](Screenshots-carb-correction) to correct history
* [Verzögerter Bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporäre Basalrate (TBR)
* [Temporäres Ziel](../Usage/temptarget.md)
* [Profilwechsel](../Usage/Profiles.md)
* [Careportal](CPbefore26-careportal-discontinued) - notes entered through action tab and notes in dialogues

## BZ-Quelle - xDrip+, BYODA...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Abhängig von Deiner BZ-Quelle wird diese Registerkarte unterschiedlich benannt.
* Zeigt die Historie der CGM Messungen an und bietet die Möglichkeit, Einträge im Fehlerfall zu entfernen (z.B. Niedrigwerte wegen Kompression).

## Nightscout-Client

![Nightscout-Client](../images/Screenshots_NSClient.png)

* Zeigt den Status der Verbindung mit Deiner Nightscout Seite an.
* Settings are made in [preferences](Preferences-nsclient). Du kannst den entsprechenden Abschnitt öffnen, indem Du auf das Zahnrad auf der rechten oberen Seite des Bildschirms klickst.
* Hinweise zur Fehlersuche findest Du auf [dieser Seite](../Usage/Troubleshooting-NSClient.md).