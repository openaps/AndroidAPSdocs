# AndroidAPS Bildschirme

## Die Startseite

![Startbildschirm v2.7](../images/Home2020_Homescreen.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

### Abschnitt A - Register

* Wechsele zwischen den verschiedenen AndroidAPS-Modulen.
* Alternativ kannst Du die Bildschirme wechseln, indem Du nach links oder rechts wischst.
* Anzuzeigende Registerkarten können im [Konfigurations-Generator](../Configuration/Config-Builder#registerkarte-tab-oder-hamburger-menu) ausgewählt werden.

### Abschnitt B - Profil & Ziel

#### Aktuelles Profil

![Verbleibende Dauer des Profilwechsels](../images/Home2020_ProfileSwitch.png)

* Das aktuelle Profil wird in der linken Schaltfläche angezeigt.
* Drücke kurz auf die Profil-Schaltfläche, für die Anzeige der Profildetails.
* Drücke lange auf die Profilschaltfläche, um [zwischen verschiedenen Profilen zu wechseln](../Usage/Profiles#profilwechsel).
* Falls der Profilwechsel mit Angabe der Dauer durchgeführt wurde, wird die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Ziel

![Verbleibende Dauer des temporären Ziels](../images/Home2020_TT.png)

* Das aktuelle BZ-Ziel wird in der rechten Schaltfläche angezeigt.
* Drücke kurz auf die Zielwert-Schaltfläche, um ein [temporäres Ziel](../Usage/temptarget.md) zu setzen.
* Falls ein temporäres Ziel festgelegt ist, wird die Leiste gelb und die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Anzeige der dynamischen Ziel-Anpassung

![Anzeige der dynamischen Ziel-Anpassung](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS kann das Ziel dynamisch anhand der Empfindlichkeit (Sensitivity) anpassen, wenn Du den SMB-Algorithmus verwendest.
* Aktiviere entweder eine oder beide der [folgenden Optionen](../Configuration/Preferences#openaps-smb-einstellungen) 
   * "Sensibilität erhöht den Zielwert" und/oder 
   * "Resistenz senkt Zielwert" 
* Falls AAPS Resistenz oder Sensibilität erkennt, wird das aus dem Profil vorgegebene Ziel angepasst. 
* Falls das Ziel geändert wird, wechselt der Hintergrund der Zielschaltfläche nach grün.

### Abschnitt C - BZ & Loop-Status

#### Aktueller Blutzucker

* Der neueste Blutzuckerwert aus Deinem CGM wird auf der linken Seite angezeigt.
* Die Farbe des BZ-Wertes spiegelt den Status im definierten [Bereich](../Configuration/Preferences#zielbereich fur-die-grafikanzeige) wider. 
   * grün = innerhalb des Bereichs
   * rot = unterhalb des Zielbereichs
   * gelb = oberhalb des Zielbereichs
* Der gräuliche Block in der Mitte zeigt die Minuten seit dem Empfang des letzten CGM-Werts an. Darunter findest die Veränderung der CGM-Werte zum vorangegangenen Wert, in den letzten 15 und 40 Minuten.

#### Loop Status

![Loop Status](../images/Home2020_LoopStatus.png)

* Ein neues Symbol zeigt den Status des Loops:
   
   * grüner Kreis = Loop läuft
   * grüner Kreis mit gepunkteter Linie = [Low Glucose Suspend (Reduzierung der Basalrate bei niedrigen Glukosewerten)](../Usage/Objectives#ziel-6-closed-loop-mit-abschaltung-bei-niedrigen-glukose-werten)
   * roter Kreis = Loop deaktiviert (dauerhaft)
   * gelber Kreis = Loop ausgesetzt (vorübergehend pausiert, aber Basalinsulin wird weiter abgegeben) - verbleibende Zeit wird unter dem Symbol angezeigt
   * grauer Kreis = Pumpe getrennt (vorübergehend gar keine Insulinabgabe) - verbleibende Zeit wird unter dem Symbol angezeigt
   * orangener Kreis = Superbolus läuft - verbleibende Zeit wird unterhalb des Symbols angezeigt
   * blauer Kreis mit gepunkteten Linien = Open Loop

* Drücke kurz oder lang auf das Icon um den Dialog zum Wechsel des Loop-Modus (Close loop, Low Glucose Suspend [Reduzierung der Basalrate bei niedrigen Glukosewerten], Open Loop, Abschalten), zum Pausieren / wieder Einschalten des Loop oder zum Trennen / erneuten Verbinden der Pumpe.
   
   * Wenn Du kurz drückst, muss die Auswahl im Loop-Dialog zusätzlich bestätigt werden.
   
   ![Statusmenü Loop](../images/Home2020_Loop_Dialog.png)

### Abschnitt D - IOB, COB, BR und AS

![Abschnitt D](../images/Home2020_TBR.png)

* Spritze: Insulin on Bord (IOB) - Menge des aktiven Insulins im Körper
   
   * Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. 
   * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
   * Ein Klick auf das Symbol zeigt die Aufteilung von Bolus und Basal-Insulin.

* Ähre: [Kohlenhydrate an Bord (COB)](../Usage/COB-calculation.rst) - noch nicht resorbierte Kohlenhydrate, die vorher gegessen wurden -> Symbol blinkt, falls Kohlenhydrate benötigt werden

* Violette Linie: Basalrate - Symbol ändert sich bei temporärer Änderung der Basalrate (flach bei 100%) 
   * Klicke auf das Icon um Details zur Basalrate und einer eventuellen temporären Basalrate (inkl. verbleibende Dauer) angezeigt zu bekommen.
* Pfeile nach oben & unten: zeigen den aktuellen [Autosens](../Usage/Open-APS-features#autosens) Status (aktiviert oder deaktiviert) an. Der Wert wird unterhalb des Symbols angezeigt.

#### Kohlenhydrat-Vorschlag

![Kohlenhydrat-Vorschlag](../images/Home2020_CarbsRequired.png)

* Wenn der Algorithmus erkennt, dass Du etwas essen solltest, damit Dein BZ nicht zu tief fällt, wird die Menge der empfohlenen Kohlenhydrate angezeigt.
* Dies ist der Fall, wenn der Algorithmus davon ausgeht, dass ein Absenken der Basalrate auf Null nicht ausreicht und Du daher Kohlenhydrate zu Dir nehmen solltest.
* Diese Benachrichtigungen des Kohlenhydrat-Vorschlags sind deutlich ausgeklügelter als die Berechnungen des Bolusrechners. So kann es sein, dass Dir hier vorgeschlagen wird, etwas zu essen, obwohl der Bolus-Rechner keine fehlenden Kohlenhydrate anzeigt.
* Auf Wunsch können die Kohlenhydrat-Vorschläge an Nightscout gesandt werden. In diesem Fall wird eine Ankündigung angezeigt und verteilt.

### Abschnitt E - Status Lights

![Abschnitt E](../images/Home2020_StatusLights.png)

* Status Lights geben eine optische Warnung für 
   * Kanülenalter
   * Insulinalter (Tage Reservoirverwendung)
   * Reservoirstand (Einheiten)
   * Sensoralter
   * Batteriealter und Ladezustand (%)
* Bei Überschreitung der Warnschwelle werden die Werte gelb angezeigt.
* Wenn die kritische Schwelle überschritten wird, werden die Werte rot angezeigt.
* Die Einstellungen sind in den [NSClient Einstellungen](../Configuration/Preferences#statusanzeige) zu finden.

### Abschnitt F - Hauptgrafik

![Abschnitt F](../images/Home2020_MainGraph.png)

* Grafik zeigt Ihren Blutzuckerspiegel (BZ) wie von Ihrem Glukose-Monitor (CGM) gemessen. 
* Notizen, die auf der Registerkarte "Aktion" eingegeben werden, wie z. B. die Kalibrierungen nach Messung am Finger, die Kohlenhydrat Einträge sowie die Profilwechsel werden hier angezeigt. 
* Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 12, 18 oder 24 Stunden wählen.
* Der grüne Bereich spiegelt den Zielbereich wider. Er kann in [Einstellungen](../Configuration/Preferences#zielbereich-fur-die-grafikanzeige) konfiguriert werden.
* Blaue Dreiecke zeigen [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - falls in [Einstellungen](../Configuration/Preferences#openaps-smb-einstellungen) aktiviert.
* Optionale Informationen:
   
   * Predictions (Vorhersagen)
   * Basal
   * Aktivität - Insulin Aktivitätskurve

#### Aktiviere optionale Informationen

* Klicken Sie auf das Dreieck auf der rechten Seite des Hauptgraphen um auszuwählen, welche Informationen in der Hauptgrafik angezeigt werden.
* Für die Hauptgrafik stehen nur die drei Optionen oberhalb der Zeile "\---\---- Graph 1 \---\----" bereit.
   
   ![Einstellungen des Hauptdiagramms](../images/Home2020_MainGraphSetting.png)

#### Vorhersage Kurven

* **Orange** Linie: [COB](../Usage/COB-calculation.rst) (Farbe wird im Allgemeinen verwendet, um COB und Kohlenhydrate darzustellen)
   
   Die Prognosekurve zeigt, wohin sich der BZ (nicht die COB selbst!) auf der Grundlage der aktuellen Pumpeneinstellungen und unter der Annahme, dass die Abweichungen aufgrund der Kohlenhydratresorption konstant bleiben, entwickeln wird. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **Dunkelblau**: IOB (insulin on board - aktives Insulin) [Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.]
   
   Die Prognoselinie zeigt, was passieren würde, wenn nur der Einfluss des Insulins berücksichtigt wird. Zum Beispiel wenn Du Insulin gespritzt und dann keine Kohlenhydrate zu Dir genommen hast.

* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
   
   Die Prognoselinie zeigt, wie sich die IOB-Kurve ändern würde, wenn die Pumpe die Insulinabgabe komplett stoppen würde (0% TBR).

* **Dunkelgelbe** Zeile: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivitat-oref1) (nicht ankündigte Mahlzeiten)
   
   Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Die Prognoselinie ähnelt der ORANGE COB-Linie, geht aber davon aus, dass die Abweichungen mit konstanter Rate abnehmen werden (durch Verlängerung der aktuellen Reduktionsrate).

Deine tatsächliche BZ-Kurve wird normalerweise in der Mitte dieser Prognoselinien oder in der Nähe der Linie, die Annahmen macht, die Deiner Situation am nächsten kommen, liegen.

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
* Um die Einstellungen für zusätzliche Graphen zu öffnen, klicken Sie auf das Dreieck auf der rechten Seite der [Hauptgrafik](../Getting-Started/Screenshots#abschnitt-f-hauptgrafik) und scrollen nach unten.

![Einstellung weiterer Diagramme](../images/Home2020_AdditionalGraphSetting.png)

* Um ein zusätzliches Diagramm hinzuzufügen, markieren Sie das Kästchen auf der linken Seite des Namens (d. h. \---\---- Graph 1 \---\----).

#### Gesamtinsulin

* Aktives Insulin einschließlich Boli **und Basal**.

#### Aktives Insulin (IOB)

* Zeigt das Insulin, das an Bord ist (= aktives Insulin im Körper). Es enthält Insulin aus Bolus und temporärem Basal (** schließt aber Basalraten aus deinem Profil aus**).
* Wenn es keine [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), keine Boli und keine TBR während der DIA-Zeit gäbe, wäre dies Null.
* Das IOB kann negativ sein, wenn Sie längere Zeit keinen verbleibenden Bolus und keine oder nur niedrige Basalrate hatten.
* Das Abklingverhalten hängt von den Einstellungen des DIA [und den Einstellungen im Insulinprofil](../Configuration/Config-Builder#lokales-profil-empfohlen) ab. 

#### Aktive Kohlenhydrate

* Zeigt die Kohlenhydrate, die Sie an Bord haben (= aktive, noch nicht resorbierte Kohlenhydrate in Ihrem Körper). 
* Der Abbau hängt davon ab, was der Algorithmus anhand der BZ-Abweichungen erkennt. 
* Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger). 

#### Abweichungen

* **GRAUE** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten. 
* **GRÜNE** Balken zeigen, dass der BZ höher ist als der Algorithmus es erwartet. Grüne Balken werden verwendet, um die Resistenz in [Autosens](../Usage/Open-APS-features#autosens) zu erhöhen.
* **ROTE** Balken zeigen, dass der BZ niedriger ist als der Algorithmus erwartet. Rote Balken werden verwendet, um die Sensitivität in [Autosens](../Usage/Open-APS-features#autosens) zu erhöhen.
* **GELB** Balken zeigen eine Abweichung aufgrund von UAM an.
* **SCHWARZE** Balken zeigen kleine Abweichungen, die bei der Berechnung der Sensitivität nicht berücksichtigt werden.

#### Sensitivität

* Zeigt die Sensitivität an, die von [Autosens](../Usage/Open-APS-features#autosens) ermittelt wurde. 
* Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.

#### Aktivität

* Zeigt die Aktivität von Insulin, berechnet aus Deinem Insulinprofil (es ist nicht die 1.Ableitung von IOB). 
* Der Wert ist umso höher, je näher Du Dich am Zeitpunkt des Insulin-Wirkmaximums befindest.
* Das bedeutet, er wird negativ, wenn das IOB abnimmt. 

#### Steigung der Abweichung

* Interner Wert, der im Algorithmus verwendet wird.

### Abschnitt H - Schaltflächen

![Buttons für den Homescreen](../images/Home2020_Buttons.png)

* Schaltflächen für Insulin, Kohlenhydrate und Bolus-Rechner sind "immer an". 
* Andere Schaltflächen müssen in den [Einstellungen ](../Configuration/Preferences#schaltflachen) konfiguriert werden.

#### Insulin

![Insulin-Button](../images/Home2020_ButtonInsulin.png)

* Um eine bestimmte Menge Insulin zu geben, ohne den [Bolus Rechner](../Getting-Started/Screenhots#bolus-rechner) zu verwenden.
* Durch Aktivieren des Kästchens können Sie automatisch Ihr [temporäres Ziel für bald Essen](../Configuration/Preferences#vordefinierte-temporare-ziele) starten.
* Wenn das Insulin nicht durch die Pumpe abgegeben werden soll, sondern Du die Insulinmenge nur erfassen willst (z.B. Insulin mit Spritze gegeben), aktiviere das entsprechende Kästchen.

#### Kohlenhydrate

![Kohlenhydrat-Button](../images/Home2020_ButtonCarbs.png)

* Kohlenhydrate ohne Bolus dokumentieren.
* Bestimmte [vordefinierte temporäre Ziele](../Configuration/Preferences#vordefinierte-temporare-ziele) können direkt durch Aktivieren des Kästchens gesetzt werden.
* Zeitverschiebung: Wann wirst Du/hast Du Kohlenhydrate gegessen (in Minuten).
* Dauer: Wird für ["eCarbs" verwendet](../Usage/Extended-Carbs.rst).
* Mit den Buttons können Sie schnell die Menge der Kohlenhydrate erhöhen.
* Notizen werden in Nightscout hochgeladen - abhängig von Deinen Einstellungen für den [NS-Client](../Configuration/Preferences#nightscout-client).

#### Bolus-Rechner

* See Bolus Wizard [section below](../Configuration/Screenhots#bolus-wizard)

#### Kalibrierungen

* Sendet eine Kalibrierung an xDrip + oder öffnet den Dexcom Kalibrierungsdialog.
* Muss in den [Einstellungen](../Configuration/Preferences#schaltflachen) aktiviert sein.

#### CGM

* Öffnet xDrip+.
* Die Schaltfläche "Zurück" kehrt zu AAPS zurück.
* Muss in den [Einstellungen](../Configuration/Preferences#schaltflachen) aktiviert sein.

#### Quick Wizard

* Einfache Eingabe von Kohlenhydraten und deren Berechnungsgrundlage.
* Details werden in den [Einstellungen](../Configuration/Preferences#quick-wizard) eingerichtet.

## Bolus-Rechner

![Bolus-Rechner](../images/Home2020_BolusWizard_v2.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

### Abschnitt I

* Das Feld BZ (BG) ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. 
* Unter CARBS (Kohlenhydrate) trägst Du Deine Schätzung der Kohlenhydrate - oder deren Äquivalent - ein. 
* Das Korr-Feld (CORR) wird benutzt, wenn Du die vorgeschlagene Dosis ändern möchtest.
* Das Feld KH-Zeit (CARB TIME) ist für einen Spritz-Ess-Abstand gedacht, so dass Du dem System mitteilen kannst, dass die Kohlenhydrate erst später gegessen werden. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohlenhydrate also schon zu Dir genommen hast.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](..images/Home2021_BolusWizard_EatingReminder.png)

### Abschnitt J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. 
* The idea is to deliver the insulin sooner and hopefully reduce spikes.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Abschnitt K

* Shows the calculated bolus. 
* If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.
* Notizen werden in Nightscout hochgeladen - abhängig von Deinen Einstellungen für den [NS-Client](../Configuration/Preferences#nightscout-client).

### Abschnitt L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinations of COB and IOB and what they mean

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Wrong COB detection

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorbtion.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Aktionen Tab](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#id1) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#id1) before using this option.

### Careporal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * canula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

### Careporal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section = reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS hsitory.

#### TDD

* Total daily dose = bolus + basal per day
* Einige Ärzte nutzen, gerade für neue Pumpenbenutzer, ein Basal-Bolus-Verhältnis von 50:50. 
* Daher wird das Verhältnis als TDD / 2 * TBB (Total base basal = Summe der Basalrate innerhalb von 24 Stunden) berechnet. 
* Andere bevorzugen einen Anteil von 32% bis 37% des Basalinsulins (TBB) am Gesamtinsulin (TDD). 
* Wie bei den meisten Faustregeln gilt, dass dies nicht allgemeingültig ist. Hinweis: Bei dir und deinem Diabetes kann es ganz anders sein!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Care Portal

Careportal hat die Funktionen repliziert, die auf der Nightscout-Webseite unter dem "+"-Symbol zu finden sind, das es erlaubt, Notizen hinzuzufügen.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

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

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Profile

![Profile](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Treatment

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Verzögerter Bolus](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
* [Profilwechsel](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip, Dexcom App (pateched)...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differntly.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## Nightscout-Client

![Nightscout-Client](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).