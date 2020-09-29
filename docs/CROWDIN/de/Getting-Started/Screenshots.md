# AndroidAPS Bildschirme

## Die Startseite

![Startbildschirm v2.7](../images/Home2020_Homescreen.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

### Abschnitt A - Register

* Wechsele zwischen den verschiedenen AndroidAPS-Modulen.
* Alternativ kannst Du die Bildschirme wechseln, indem Du nach links oder rechts wischst.
* Anzuzeigende Registerkarten können im Konfigurations-Generator[ im Konfigurationsbuilder ](../Configuration/Config-Builder#registerkarte-tab-oder-hamburger-menu)ausgewählt werden.

### Abschnitt B - Profil & Ziel

#### Profile

    ![verbleibende Dauer Profil Wechsel](../images/Home2020_ProfileSwitch.png)
    

* Das aktuelle Profil wird in der linken Schaltfläche angezeigt.
* Schaltfläche Profil lange Drücken um Profildetails anzuzeigen oder um [zwischen verschiedenen Profilen zu wechseln](../Usage/Profiles#profilwechsel).
* Falls der Profilwechsel mit Angabe der Dauer durchgeführt wurde, wird die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Ziel

    ![Verbleibende Dauer temporäres Ziel](../images/Home2020_TT.png)
    

* Das aktuelle BZ-Ziel wird in der rechten Schaltfläche angezeigt.
* Schaltfläche Ziel lange drücken, um ein [temporäres Ziel ](../Usage/temptarget.md) festzulegen.
* Falls ein temporäres Ziel festgelegt ist, wird die Leiste gelb und die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Anzeige der dynamischen Ziel-Anpassung

    ![Darstellung der dynamischen Ziel-Anpassung](../images/Home2020_DynamicTargetAdjustment.png)
    

* AAPS kann das Ziel dynamisch anhand der Empfindlichkeit (Sensitivity) anpassen, wenn Du den SMB-Algorithmus verwendest.
* Enable either one or both of the [following options](../Configuration/Preferences#openaps-smb-settings) 
   * "Sensibilität erhöht den Zielwert" und/oder 
   * "resistenz senkt Zielwert" 
* Falls AAPS Resistenz oder Sensibilität erkennt, wird das aus dem Profil vorgegebene Ziel angepasst. 
* Falls das Ziel geändert wird, wechselt der Hintergrund der Zielschaltfläche nach grün.

### Abschnitt C - BZ & Loop-Status

#### Aktueller Blutzucker

* Der neueste Blutzuckerwert aus Deinem CGM wird auf der linken Seite angezeigt.
* Color of the BG value reflects the status to the defined [range](../Configuration/Preferences#range-for-visualization). 
   * grün = innerhalb des Bereichs
   * rot = unterhalb des Zielbereichs
   * gelb = oberhalb des Zielbereichs
* Der gräuliche Block in der Mitte zeigt die Minuten seit dem Empfang des letzten CGM-Werts an. Darunter findest die Veränderung der CGM-Werte zum vorangegangenen Wert, in den letzten 15 und 40 Minuten.

#### Loop Status

![Loop Status](../images/Home2020_LoopStatus.png)

* Ein neues Symbol zeigt den Status des Loops:
   
   * grüner Kreis = Loop läuft
   * grüner Kreis mit gepunkteter Linie = [Low Glucose Suspend (Reduzierung der Baslarate bei niedrigen Glukosewerten)](../Usage/Objectives#ziel-6-closed-loop-mit-abschaltung-bei-niedrigen-glukose-werten)
   * roter Kreis = Loop deaktiviert (dauerhaft)
   * gelber Kreis = Loop ausgesetzt (vorübergehend pausiert, aber Basalinsulin wird weiter abgegeben) - verbleibende Zeit wird unter dem Symbol angezeigt
   * grauer Kreis = Pumpe getrennt (vorübergehend gar keine Insulinabgabe) - verbleibende Zeit wird unter dem Symbol angezeigt
   * orangener Kreis = Superbolus läuft - verbleibende Zeit wird unterhalb des Symbols angezeigt
   * blauer Kreis mit gepunkteten Linien = Open Loop

* Ein langer Druck auf das Symbol, öffnet das Menü zum Deaktivieren, Unterbrechen und Reaktivieren des Loops sowie um die Pumpe zu trennen / wieder zu verbinden.
   
   ![Statusmenü Loop](../images/Home2020_LoopStatusMenu.png)

### Abschnitt D - IOB, COB, BR und AS

![Abschnitt D](../images/Home2020_TBR.png)

* Spritze: Insulin on Bord (IOB) - Menge des aktiven Insulins im Körper
   
   * Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. 
   * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
   * Ein Klick auf das Symbol zeigt die Aufteilung von Bolus und Basal-Insulin.

* Ähre: [Kohlenhydrate an Bord (COB)](../Usage/COB-calculation.rst) - noch nicht resorbierte Kohlenhydrate, die vorher gegessen wurden -> Symbol blinkt, falls Kohlenhydrate benötigt werden

* Violette Linie: Basalrate - Symbol ändert sich bei temporärer Änderung der Basalrate (flach bei 100%) 
   * Press the icon to see the base basal rate and details of any temp basal (including remaining duration)
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
   * Battery age and level (%)
* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* Settings can be made in [preferences](../Configuration/Preferences#status-lights).

### Section F - Main graph

![Abschnitt F](../images/Home2020_MainGraph.png)

* Graph shows your blood glucose (BG) as read from your glucose monitor (CGM). 
* Notes entered in action tab such as fingerstick calibrations and carbs entries as well as profile switches are shown here. 
* Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. You can choose 6, 12, 18 or 24 hours.
* The green area reflects your target range. It can be configured in [preferences](../Configuration/Preferences#range-for-visualization).
* Blue triangles show [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - if enabled in [preferences](.../Configuration/Preferences#openaps-smb-settings).
* Optional information:
   
   * Predictions (Vorhersagen)
   * Basal
   * Activity - insulin activity curve

#### Activate optional information

* Click the triangle on the right side of the main graph to select which information will be displayed in the main graph.
* For the main graph just the three options above the line "\---\---- Graph 1 \---\----" are available.
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Prediction lines

* **Orange** Linie: [COB](../Usage/COB-calculation.rst) (Farbe wird im Allgemeinen verwendet, um COB und Kohlenhydrate darzustellen)
   
   Prediction line shows where your BG (not where COB itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **Dunkelblau**: IOB (insulin on board - aktives Insulin) [Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.]
   
   Die Prognoselinie zeigt, was passieren würde, wenn nur der Einfluss des Insulins berücksichtigt wird. Zum Beispiel wenn Du Insulin gespritzt und dann keine Kohlenhydrate zu Dir genommen hast.

* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
   
   Die Prognoselinie zeigt, wie sich die IOB-Kurve ändern würde, wenn die Pumpe die Insulinabgabe komplett stoppen würde (0% TBR).

* **Dunkelgelbe** Zeile: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (nicht ankündigte Mahlzeiten)
   
   Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Die Prognoselinie ähnelt der ORANGE COB-Linie, geht aber davon aus, dass die Abweichungen mit konstanter Rate abnehmen werden (durch Verlängerung der aktuellen Reduktionsrate).

Deine tatsächliche BZ-Kurve wird normalerweise in der Mitte dieser Prognoselinien oder in der Nähe der Linie, die Annahmen macht, die Deiner Situation am nächsten kommen, liegen.

#### Basal

* A **solid blue** line shows the basal delivery of your pump and reflects the actual delivery over time.
* The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs).
* In times standard basal rate is given the area under the curve is shown in dark blue.
* When the basal rate is temporarily adjusted (increased or decreased) the area under the curve is shown in light blue.

#### Aktivität

* Die **dünne gelbe** Linie zeigt die Insulinaktivität. 
* Sie basiert auf dem erwarteten Rückgang des BZ gemäß aktivem Insulin. Weitere Faktoren (wie z.B. Kohlenhydrate) werden NICHT berücksichtigt.

### Section G - additional graphs

* You can activate up to four additional graphs below the main graph.
* To open settings for additional graphs click the triangle on the right side of the [main graph](../Getting-Started/Screenshots#section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* To add an additional graph check the box on the left side of its name (i.e. \---\---- Graph 1 \---\----).

#### Gesamtinsulin

* Active insulin including boluses **and basal**.

#### Insulin on board

* Shows the insulin you have on board (= active insulin in your body). It includes insulin from bolus and temporary basal (**but excludes basal rates set in your profile**).
* If there were no [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* IOB can be negative if you have no remaining bolus and zero/low temp for a longer time.
* Decaying depends on your [DIA and insulin profile settings](../Configuration/Config-Builder#local-profile-recommended). 

#### Aktive Kohlenhydrate

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* Der Abbau hängt davon ab, was der Algorithmus anhand der BZ-Abweichungen erkennt. 
* Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger). 

#### Abweichungen

* **GRAUE** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten. 
* **GRÜNE** Balken zeigen, dass der BZ höher ist als der Algorithmus es erwartet. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **ROTE** Balken zeigen, dass der BZ niedriger ist als der Algorithmus erwartet. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.

#### Sensitivität

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* Die Sensitivität ist die Berechnung der Insulinempfindlichkeit, die auf Grund von Bewegung, Hormonen etc. schwankt.

#### Aktivität

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* Der Wert ist umso höher, je näher Du Dich am Zeitpunkt des Insulin-Wirkmaximums befindest.
* Das bedeutet, er wird negativ, wenn das IOB abnimmt. 

#### Steigung der Abweichung

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are 'always on'. 
* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### Insulin

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](../Configuration/Screenhots#bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](../Configuration/Preferences#default-temp-targets).
* Wenn das Insulin nicht durch die Pumpe abgegeben werden soll, sondern Du die Insulinmenge nur erfassen willst (z.B. Insulin mit Spritze gegeben), aktiviere das entsprechende Kästchen.

#### Kohlenhydrate

![Kohlenhydrat-Button](../images/Home2020_ButtonCarbs.png)

* Kohlenhydrate ohne Bolus dokumentieren.
* Certain [pre-set temporary targets](../Configuration/Preferences#default-temp-targets) can be set directly by checking the box.
* Zeitverschiebung: Wann wirst Du/hast Du Kohlenhydrate gegessen (in Minuten).
* Dauer: Wird für ["eCarbs" verwendet](../Usage/Extended-Carbs.rst).
* Mit den Buttons können Sie schnell die Menge der Kohlenhydrate erhöhen.
* Notizen werden in Nightscout hochgeladen - abhängig von Deinen Einstellungen für den [NS-Client](../Configuration/Preferences#nightscout-client).

#### Bolus-Rechner

* Siehe [Details unten](../Configuration/Screenhots#bolus-wizard)

#### Kalibrierungen

* Sendet eine Kalibrierung an xDrip + oder öffnet den Dexcom Kalibrierungsdialog.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### CGM

* Öffnet xDrip+.
* Die Schaltfläche "Zurück" kehrt zu AAPS zurück.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### Quick Wizard

* Einfache Eingabe von Kohlenhydraten und deren Berechnungsgrundlage.
* Details werden in den [Einstellungen](../Configuration/Preferences#quick-wizard) eingerichtet.

## Bolus-Rechner

![Bolus-Rechner](../images/Home2020_BolusWizard.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

### Abschnitt I

* Das Feld BZ ist in der Regel mit dem letzten CGM-Wert vorbefüllt. Falls Du keine aktuellen CGM-Werte hast, ist das Feld leer. 
* Unter CARBS (Kohlenhydrate) trägst Du Deine Schätzung der Kohlenhydrate - oder deren Äquivalent - ein. 
* Das Korr-Feld wird benutzt, wenn Du die vorgeschlagene Dosis ändern möchtest.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Gib einen negativen Wert ein, wenn Du nach dem Essen spritzt, die Kohlenhydrate also schon zu Dir genommen hast.

### Abschnitt J

* Beim SUPER BOLUS wird das Basalinsulin der kommenden zwei Stunden zum berechneten Bolus addiert und die Basalrate für die kommenden zwei Stunden auf Null gesetzt, um das extra Insulin wieder heraus zu nehmen. 
* Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Zeigt den errechneten Bolus. 
* Falls IOB (Insulin on board) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.
* Notizen werden in Nightscout hochgeladen - abhängig von Deinen Einstellungen für den [NS-Client](../Configuration/Preferences#nightscout-client).

### Section L

* Details of wizard's bolus calculation.
* Du kannst einzelne davon abwählen, wenn du sie nicht berücksichtigen willst, dies wird aber die Ausnahme sein.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Kombinationen von COB und IOB und deren Bedeutung

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* Falls Du IOB ohne COB auswählst besteht das Risiko, dass zu wenig Insulin abgegeben wird, da der Anteil des IOB, der eigentlich für noch nicht komplett vom Körper aufgenommene Kohlenhydrate vorgesehen ist, von der neuen Insulinmenge abgezogen wird. Das kann auch zur "Fehlend x g" (fehlende Kohlenhydrate führen).
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. Dadurch wird die Insulinmenge nur auf Basis der neuen Kohlenhydrate berechnet.

#### Fehlerhafte Erkennung der aktiven Kohlenhydrate (COB)

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorbtion.png)

* Wenn Du nach Verwendung des Bolus-Assistenten die obige Warnung siehst, hat AAPS erkannt, dass aktiven Kohlenhydrate (COB) eventuell nicht korrekt berechnet werden konnten. 
* Wenn Du kurz nach einer vorangegangenen Mahlzeit erneut einen Bolus abgeben willst, solltest Du Dir der Gefahr einer Überdosierung bewusst sein! 
* Weitere Hinweise findest Du auf der Seite zur [Berechnung der aktiven Kohlenhydrate (COB)](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulin Profil

![Insulin Profil](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* Die LILA Linie zeigt an, wie viel Insulin nach der Injektion verbleibt und wie es im Zeitverlauf abnimmt. Die BLAUE Linie veranschaulicht die Aktivität des Insulins.
* The important thing to note is that the decay has a long tail. 
* Von der klassischen Pumpentherapie bist du es vermutlich gewohnt anzunehmen, dass das Insulin nach ca. 3 1/2 Stunden vollständig abgebaut ist. 
* Allerdings spielt der langsamere Abbau beim Loopen eine wichtige Rolle, da die Berechnungen deutlich präziser sind und sich diese geringen Mengen unter den rekursiven Berechnungen des AndroidAPS Algorithmus summieren.

Weitere Informationen zu den verschiedenen Insulintypen, ihren Aktivitätsprofilen und warum dies alles eine Rolle spielt findest du in diesem Artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Du solltest auch einen Blick in diesen exzellenten Blog-Artikel werfen: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Care Portal (Behandlungen)

Careportal hat die Funktionen repliziert, die auf der Nightscout-Webseite unter dem "+"-Symbol zu finden sind, das es erlaubt, Notizen hinzuzufügen.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Kohlenhydrat Korrektur

![Behandlung in einer oder zwei Zeilen](../images/Treatment_1or2_lines.png)

Der Behandlungs-Tab kann verwendet werden, um fehlerhafte Kohlenhydrat-Einträge zu korrigieren (z.B. wenn Du die KH-Menge über- oder unterschätzt hast).

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
   * Basalrate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](/Configuration/Config-Builder.md).

## Bolus

History of the following treatments:

* Bolus & carbs -> option to [remove entries](..Getting-Started/Screenshots#carb-correction) to correct history
* [Verzögerter Bolus](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Temporäres Ziel](../Usage/temptarget.md)
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