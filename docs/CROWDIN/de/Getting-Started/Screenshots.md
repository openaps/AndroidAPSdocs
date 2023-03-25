# AndroidAPS Bildschirme

## Die Startseite

![Startbildschirm v2.7](../images/Home2020_Homescreen.png)

Wenn du AndroidAPS öffnest, ist dies der erste Bildschirm. Er enthält die meisten der Informationen, die du tagtäglich benötigst.

### Abschnitt A - Register

* Wechsele zwischen den verschiedenen AndroidAPS-Modulen.
* Alternativ kannst Du die Bildschirme wechseln, indem Du nach links oder rechts wischst.
* Anzuzeigende Tabs können unter [KONFIGURATION](Config-Builder-tab-or-hamburger-menu) ausgewählt werden.

(Screenshots-section-b-profile-target)=

### Abschnitt B - Profil & Ziel

#### Aktuelles Profil

![Verbleibende Dauer des Profilwechsels](../images/Home2020_ProfileSwitch.png)

* Das aktuelle Profil wird in der linken Schaltfläche angezeigt.
* Drücke kurz auf die Profil-Schaltfläche, für die Anzeige der Profildetails.
* Drücke lange auf die Profilschaltfläche, um [zwischen verschiedenen Profilen zu wechseln](Profiles-profile-switch).
* Falls der Profilwechsel mit Angabe der Dauer durchgeführt wurde, wird die verbleibende Zeit in Minuten in Klammern angezeigt.

#### Ziel

![Verbleibende Dauer des temporären Ziels](../images/Home2020_TT.png)

* Das aktuelle BZ-Ziel wird in der rechten Schaltfläche angezeigt.
* Drücke kurz auf die Zielwert-Schaltfläche, um ein [temporäres Ziel](../Usage/temptarget.md) zu setzen.
* Falls ein temporäres Ziel festgelegt ist, wird die Leiste gelb und die verbleibende Zeit in Minuten in Klammern angezeigt.

(Screenshots-visualization-of-dynamic-target-adjustment)=

#### Anzeige der dynamischen Ziel-Anpassung

![Anzeige der dynamischen Ziel-Anpassung](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS kann das Ziel dynamisch anhand der Empfindlichkeit (Sensitivity) anpassen, wenn Du den SMB-Algorithmus verwendest.
* Aktiviere entweder eine oder beide der [folgenden Optionen](Preferences-openaps-smb-settings) 
   * "Sensibilität erhöht den Zielwert" und/oder 
   * "Resistenz senkt Zielwert" 
* Falls AAPS Resistenz oder Sensibilität erkennt, wird das aus dem Profil vorgegebene Ziel angepasst. 
* Falls das Ziel geändert wird, wechselt der Hintergrund der Zielschaltfläche nach grün.

### Abschnitt C - BZ & Loop-Status

#### Aktueller Blutzucker

* Der neueste Blutzuckerwert aus Deinem CGM wird auf der linken Seite angezeigt.
* Die Farbe des Glukosewertes spiegelt den Status im definierten [Bereich](Preferences-range-for-visualization) wider. 
   * grün = innerhalb des Bereichs
   * rot = unterhalb des Zielbereichs
   * gelb = oberhalb des Zielbereichs
* Der gräuliche Block in der Mitte zeigt die Minuten seit dem Empfang des letzten CGM-Werts an. Darunter findest die Veränderung der CGM-Werte zum vorangegangenen Wert, in den letzten 15 und 40 Minuten.

(Screenshots-loop-status)=

#### Loop Status

![Loop Status](../images/Home2020_LoopStatus.png)

* Ein neues Symbol zeigt den Status des Loops:
   
   * grüner Kreis = Loop läuft
   * grüner Kreis mit gepunkteter Linie = [Low Glucose Suspend (Reduzierung der Basalrate bei niedrigen Glukosewerten)](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
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

*Hinweis*: Für AAPS-Berechnungen werden bis zu 30 Stunden berücksichtigt. Daher kann es auch nach der Lösung des zugrunde liegenden Problems bis zu 30 Stunden dauern, bis das gelbe Dreieck nach dem letzten unregelmäßigen Intervall verschwunden ist.

Um es sofort zu entfernen, musst Du ein paar Einträge manuell aus der Registerkarte Dexcom/xDrip+ löschen.

Wenn es jedoch viele Duplikate gibt, könnte es einfacher sein,

* [sichere deine Einstellungen](../Usage/ExportImportSettings.md),
* setze deine Datenbank im Wartungsmenü zurück und
* [Importiere deine Einstellungen](../Usage/ExportImportSettings.md) erneut

##### Rotes Warndreieck: Doppelte BG-Daten

Das rote Warndreieck signalisiert, dass Du sofort aktiv werden solltest: Du erhältst doppelte BG-Daten, die den Loop daran hindern seine Arbeit richtig zu machen. Daher wird der Loop so lange deaktiviert, bis das Problem gelöst ist.

![Red BG warning](../images/bg_warn_red.png)

Du musst herausfinden, warum du doppelte BG-Daten erhältst:

* Ist Dexcom Bridge auf deiner NS-Seite aktiviert? Deaktiviere die Dexcom Bridge, indem Du zu heroku (oder einem anderen Hosting-Provider) gehst, dort die "enable" Variable bearbeitest und den "bridge" Teil dort entfernst. (Details zu heroku [findest Du hier](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Laden mehrere Quellen deine BG zu NS hoch? Wenn Du die BYODA-App verwendest, aktiviere den Upload in AAPS, aber aktiviere ihn nicht in xDrip+, falls das der Fall ist.
* Hast du Follower die deine BG erhalten und die diese auch wieder auf deine NS-Seite hochladen?
* Letzter Ausweg: In AAPS in den NS Client Einstellungen die Sync-Einstellungen auswählen und die Option "CGM Daten von NS akzeptieren" deaktivieren.

##### Gelbes Warndreieck

* Das gelbe Warnsignal weist darauf hin, dass BG-Daten in unregelmäßigen Zeitintervallen angekommen sind oder einige BGs fehlen.
   
   ![Yellow BG warning](../images/bg_warn_yellow.png)

* Normalerweise musst Du in diesem Falle nichts tun. Der closed loop funktioniert weiter!

* Da ein Sensorwechsel den konstanten Fluss der BG-Daten unterbricht, ist ein gelbes Warndreieck nach dem Wechsel des Sensors normal und es gibt nichts zu befürchten.
* Spezieller Hinweis für Libre-Nutzer:
   
   * Alle Libre-Sensoren springen alle paar Stunden um ein oder zwei Minuten, was dazu führt, dass es nie zu einen perfekten Strom von regulären BG-Intervallen kommt.
   * Auch sprunghafte Änderungen der Messwerte unterbrechen den kontinuierlichen Datenstrom.
   * Daher bleibt das gelbe Warndreieck für Libre-Nutzer immer sichtbar.

### Abschnitt D - IOB, COB, BR und AS

![Abschnitt D](../images/Home2020_TBR.png)

* Spritze: Insulin on Bord (IOB) - Menge des aktiven Insulins im Körper
   
   * Das Insulin on Board wäre Null, wenn nur deine Standardbasalrate liefe und kein Insulin aus einem früheren Bolus mehr wirken würde. 
   * IOB kann negativ sein, wenn zuvor die Basalrate reduziert worden ist.
   * Ein Klick auf das Symbol zeigt die Aufteilung von Bolus und Basal-Insulin.

* Ähre: [Kohlenhydrate an Bord (COB)](../Usage/COB-calculation.md) - noch nicht resorbierte Kohlenhydrate, die vorher gegessen wurden -> Symbol blinkt, falls Kohlenhydrate benötigt werden

* Violette Linie: Basalrate - Symbol ändert sich bei temporärer Änderung der Basalrate (flach bei 100%) 
   * Klicke auf das Icon um Details zur Basalrate und einer eventuellen temporären Basalrate (inkl. verbleibende Dauer) angezeigt zu bekommen.
* Pfeile nach oben & unten: zeigen den aktuellen [Autosens](Open-APS-features-autosens) Status (aktiviert oder deaktiviert) an. Der Wert wird unterhalb des Symbols angezeigt.

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
* Die Einstellungen sind in den [NSClient Einstellungen](Preferences-status-lights) zu finden.

(Screenshots-section-f-main-graph)=

### Abschnitt F - Hauptgrafik

![Abschnitt F](../images/Home2020_MainGraph.png)

* Grafik zeigt Ihren Blutzuckerspiegel (BZ) wie von Ihrem Glukose-Monitor (CGM) gemessen. 
* Notizen, die auf der Registerkarte "Aktion" eingegeben werden, wie z. B. die Kalibrierungen nach Messung am Finger, die Kohlenhydrat Einträge sowie die Profilwechsel werden hier angezeigt. 
* Wenn du den angezeigten Zeitraum verändern möchtest, drücke lange auf die Grafik. Du kannst zwischen 6, 12, 18 oder 24 Stunden wählen.
* Der grüne Bereich spiegelt den Zielbereich wider. Er kann in [Einstellungen](Preferences-range-for-visualization) konfiguriert werden.
* Blaue Dreiecke zeigen [SMB](Open-APS-features-super-micro-bolus-smb) - wenn aktiviert in [Einstellungen](Preferences-openaps-smb-settings).
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

* **Orange** Linie: [COB](../Usage/COB-calculation.md) (Farbe wird im Allgemeinen verwendet, um COB und Kohlenhydrate darzustellen)
   
   Die Prognosekurve zeigt, wohin sich der BZ (nicht die COB selbst!) auf der Grundlage der aktuellen Pumpeneinstellungen und unter der Annahme, dass die Abweichungen aufgrund der Kohlenhydratresorption konstant bleiben, entwickeln wird. Diese Linie erscheint nur, wenn es bekannte COB gibt.

* **Dunkelblau**: IOB (insulin on board - aktives Insulin) [Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.]
   
   Die Prognoselinie zeigt, was passieren würde, wenn nur der Einfluss des Insulins berücksichtigt wird. Zum Beispiel wenn Du Insulin gespritzt und dann keine Kohlenhydrate zu Dir genommen hast.

* **Hellblaue** Linie: zero-temp (BZ-Vorhersage bei Annahme, dass eine temporäre Basalrate mit 0% gesetzt wäre)
   
   Die Prognoselinie zeigt, wie sich die IOB-Kurve ändern würde, wenn die Pumpe die Insulinabgabe komplett stoppen würde (0% TBR).
   
   *Diese Linie erscheint nur, wenn der [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)-Algorithmus verwendet wird.*

* **Dunkelgelbe** Zeile: [UAM](Sensitivity-detection-and-COB-sensitivity-oref1) (nicht ankündigte Mahlzeiten)
   
   Unannounced meals (nicht angekündigte Mahlzeiten) bedeutet, dass ein signifikanter Anstieg des Glukosespiegels durch Mahlzeiten, Adrenalin oder andere Einflüsse festgestellt wird. Die Prognoselinie ähnelt der ORANGE COB-Linie, geht aber davon aus, dass die Abweichungen mit konstanter Rate abnehmen werden (durch Verlängerung der aktuellen Reduktionsrate).
   
   *Diese Linie erscheint nur, wenn der [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)-Algorithmus verwendet wird.*

* **Dunkelorange** Linie: aCOB (beschleunigte Kohlenhydratabsorption)
   
   Ähnlich wie COB, aber unter Annahme einer festen Kohlenhydrat-Absorptionsrate von 10 mg/dL/5m (-0,555 mmol/l/5m). Veraltet und nur begrenzt nützlich.
   
   *Diese Linie erscheint nur, wenn der [AMA](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)-Algorithmus verwendet wird.*

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
* Um die Einstellungen für zusätzliche Graphen zu öffnen, klicke auf das Dreieck auf der rechten Seite der [Hauptgrafik](Screenshots-section-f-main-graph) und scrolle nach unten.

![Einstellung weiterer Diagramme](../images/Home2020_AdditionalGraphSetting.png)

* Um ein zusätzliches Diagramm hinzuzufügen, markieren Sie das Kästchen auf der linken Seite des Namens (d. h. \---\---- Graph 1 \---\----).

#### Gesamtinsulin

* Aktives Insulin einschließlich Boli **und Basal**.

#### Aktives Insulin (IOB)

* Zeigt das Insulin, das an Bord ist (= aktives Insulin im Körper). Es enthält Insulin aus Bolus und temporärem Basal (** schließt aber Basalraten aus deinem Profil aus**).
* Wenn es keine [SMBs](Open-APS-features-super-micro-bolus-smb), keine Boli und keine TBR während der DIA-Zeit gäbe, wäre dies Null.
* Das IOB kann negativ sein, wenn Sie längere Zeit keinen verbleibenden Bolus und keine oder nur niedrige Basalrate hatten.
* Das Abklingverhalten hängt von den [Einstellungen zum Insulin und zum DIA im Profil](Config-Builder-local-profile) ab. 

#### Aktive Kohlenhydrate

* Zeigt die Kohlenhydrate, die Sie an Bord haben (= aktive, noch nicht resorbierte Kohlenhydrate in Ihrem Körper). 
* Der Abbau hängt davon ab, was der Algorithmus anhand der BZ-Abweichungen erkennt. 
* Falls der Kohlenhydratabbau höher ausfällt als erwartet, wird Insulin abgegeben und dies erhöht Dein IOB (je nach Deinen Sicherheitseinstellungen mehr oder weniger). 

#### Abweichungen

* **GRAUE** Balken zeigen eine Abweichung aufgrund von Kohlenhydraten. 
* **GRÜNE** Balken zeigen, dass der BZ höher ist als der Algorithmus es erwartet. Grüne Balken werden verwendet, um die Resistenz in [Autosens](Open-APS-features-autosens) zu erhöhen.
* **ROTE** Balken zeigen, dass der BZ niedriger ist als der Algorithmus erwartet. Rote Balken werden verwendet, um die Sensitivität in [Autosens](Open-APS-features-autosens) zu erhöhen.
* **GELB** Balken zeigen eine Abweichung aufgrund von UAM an.
* **SCHWARZE** Balken zeigen kleine Abweichungen, die bei der Berechnung der Sensitivität nicht berücksichtigt werden.

#### Sensitivität

* Zeigt die Sensitivität an, die von [Autosens](Open-APS-features-autosens) ermittelt wurde. 
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
   
   * Wenn die Verbindung zur Pumpe unterbrochen ist, ist die Schaltfläche 'Insulin' nicht sichtbar.

* Weiter Schaltflächen können unter [preferences]Einstellungen > Übersicht konfiguriert werden.

#### Insulin

![Insulin-Button](../images/Home2020_ButtonInsulin.png)

* Um einen Bolus abzugeben, ohne den [Bolus-Rechner](Screenshots-bolus-wizard) zu nutzen.
* Durch Aktivieren des Kästchens kannst Du automatisch Dein [Essens-TT](Preferences-default-temp-targets) ('bald essen') starten.
* Wenn das Insulin nicht durch die Pumpe abgegeben werden soll, sondern Du die Insulinmenge nur erfassen willst (z.B. Insulin mit Spritze gegeben), aktiviere das entsprechende Kästchen.

#### Kohlenhydrate

![Kohlenhydrat-Button](../images/Home2020_ButtonCarbs.png)

* Kohlenhydrate ohne Bolus dokumentieren.
* Bestimmte [vordefinierte temporäre Ziele](Preferences-default-temp-targets) (Bald essen, Aktivität und Hypo) können direkt durch Aktivieren des Kästchens gesetzt werden.
* Zeitverschiebung: Wann wirst Du/hast Du Kohlenhydrate gegessen (in Minuten).
* Dauer: Wird für ["eCarbs" verwendet](../Usage/Extended-Carbs.md).
* Mit den Buttons können Sie schnell die Menge der Kohlenhydrate erhöhen.
* Notizen werden in Abhängigkeit von Deinen Einstellungen im [NS-Client](Preferences-nsclient) nach Nightscout hochgeladen.

#### Bolus-Rechner

* Siehe Bolus Wizard [Abschnitt unten](Screenshots-bolus-wizard)

#### Kalibrierungen

* Sendet eine Kalibrierung an xDrip + oder öffnet den Dexcom Kalibrierungsdialog.
* Muss in den [Einstellungen](Preferences-buttons) aktiviert sein.

#### CGM

* Öffnet xDrip+.
* Die Schaltfläche "Zurück" kehrt zu AAPS zurück.
* Muss in den [Einstellungen](Preferences-buttons) aktiviert sein.

#### Quick Wizard

* Einfache Eingabe von Kohlenhydraten und deren Berechnungsgrundlage.
* Details werden in den [Einstellungen](Preferences-quick-wizard) eingerichtet.

(Screenshots-bolus-wizard)=

## Bolus-Rechner

![Bolus-Rechner](../images/Home2020_BolusWizard_v2.png)

Ein Mahlzeiten-Bolus wird normalerweise über den Bolus-Rechner abgegeben.

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

* Beim SUPER BOLUS wird das Basalinsulin der kommenden zwei Stunden zum berechneten Bolus addiert und die Basalrate für die kommenden zwei Stunden auf Null gesetzt, um das extra Insulin wieder heraus zu nehmen. Die Option ist nur verfügbar, wenn in den [Einstellungen der Übersicht](Preferences-overview) bei den erweiterten Einstellungen 'Aktiviere [ Superbolus](Preferences-superbolus) im Bolus-Rechner' aktiviert ist.
* Damit soll kurzfristig mehr Insulin zur Verfügung stehen und dadurch hoffentlich Spitzen vermieden werden.
* Weitere Informationen findest Du unter [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Abschnitt K

* Zeigt den errechneten Bolus. 
* Falls IOB (Insulin on bord) den berechneten Bolus bereits übersteigt, wird nur die Menge der fehlenden Kohlenhydrate angezeigt.
* Notizen werden in Abhängigkeit von Deinen Einstellungen im [NS-Client](Preferences-nsclient) nach Nightscout hochgeladen.

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

![Langsamer Kohlenhydrat-Abbau](../images/Calculator_SlowCarbAbsorption.png)

* Wenn Du nach Verwendung des Bolus-Assistenten die obige Warnung siehst, hat AAPS erkannt, dass aktiven Kohlenhydrate (COB) eventuell nicht korrekt berechnet werden konnten. 
* Wenn Du kurz nach einer vorangegangenen Mahlzeit erneut einen Bolus abgeben willst, solltest Du Dir der Gefahr einer Überdosierung bewusst sein! 
* Weitere Hinweise findest Du auf der Seite zur [Berechnung der aktiven Kohlenhydrate (COB)](COB-calculation-detection-of-wrong-cob-values).

(Screenshots-action-tab)=

## Aktionen Tab

![Aktionen Tab](../images/Home2021_Action.png)

### Aktionen - Abschnitt M

* Button [Profilwechsel](Profiles-profile-switch) als Alternative zum Klicken des [aktuellen Profils](Screenshots-section-b-profile-target) auf dem Startbildschirm.
* Button [Temporäres Ziel](temptarget-temp-targets) als Alternative zum Klicken des [aktuellen Ziels](Screenshots-section-b-profile-target) auf dem Startbildschirm.
* Button zum Starten oder Abbrechen einer temporären Basalrate. Beachte, dass sich die Bezeichnung der Schaltfläche von "TBR" zu "Abbrechen X%" ändert, wenn eine temporäre Basalrate abgegeben wird.
* Auch wenn [verzögerte Boli](Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) im Closed Loop nicht wirklich funktionieren, haben einige Nutzer nach einer Option gefragt, um verzögerte Boli dennoch verwenden zu können.
   
   * Diese Option ist nur für Dana RS und Insight Pumpen verfügbar. 
   * Der Closed Loop wird automatisch gestoppt und für die Laufzeit des verzögerten Bolus zum Open Loop gewechselt.
   * Lies vor Verwendung dieser Option unbedingt die [Details](../Usage/Extended-Carbs.md).

(Screenshots-careportal-section-n)=

### Careporal - Abschnitt N

* Zeigt Informationen zu
   
   * Sensoralter & -level (Batterieladestand in %)
   * Insulinalter & Reservoirstand (Einheiten)
   * Kanülenalter
   * Alter & Ladestand (in %) der Pumpenbatterie

* Weniger Informationen werden angezeigt, wenn [Skin](Preferences-skin) mit niedriger Auflösung verwendet wird.

(Screenshots-sensor-level-battery)=

#### Sensor Level (Batterie)

* Benötigt xDrip+ Nightly Build vom 10.12.2020 oder neuer.
* Verfügbar für CGM-Systeme mit zusätzlichem Transmitter wie z.B. MiaoMiao 2. (Technisch gesehen muss der Sensor cat level Informationen an xDrip+ senden.)
* Die Schwellwerte können in den [Einstellungen](Preferences-status-lights) gesetzt werden.
* Wenn der Batterieladestand des Sensors und des Smartphones identisch sind, ist die xDrip+ Version wahrscheinlich zu alt und benötigt ein Update.
   
   ![Batterieladestand Sensor und Smartphone stimmen überein](../images/Home2021_ActionSensorBat.png)

### Careporal - Abschnitt O

* BZ-Test, Katheterwechsel, CGM-Sensor gesetzt, Pumpenbatterie-Wechsel sind die Basis für die in [Abschnitt N](Screenshots-careportal-section-n) angezeigten Daten.
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

![Historie + TDD](../images/Home2021_Action_HB_TDD.png)

(Screenshots-insulin-profile))=

## Insulin Profil

![Insulin Profil](../images/Screenshot_insulin_profile.png)

* Dies zeigt das Aktivitätsprofil des Insulins, das Du im [Konfigurations-Generator](Config-Builder-insulin) ausgewählt hast. 
* Die LILA Linie zeigt an, wie viel Insulin nach der Injektion verbleibt und wie es im Zeitverlauf abnimmt. Die BLAUE Linie veranschaulicht die Aktivität des Insulins.
* Wichtig zu beachten ist, dass der Ablauf deutlich länger dauert, als gemein hin angenommen. 
* Von der klassischen umpentherapie bist du es wahrscheinlich gewohnt anzunehmen, dass das Insulin nach ca. 3 1/2 Stunden vollständig abgebaut ist. 
* Allerdings spielt der langsamere Abbau beim Loopen eine wichtige Rolle da die Berechnungen deutlich präziser sind und sich diese geringen Mengen unter den rekursiven Berechnungen des AndroidAPS Algorithmus summieren.

Für weitere Informationen zu den verschiedenen Insulintypen, ihren Aktivitätsprofilen und warum dies alles eine Rolle spielt, lies bitte diesen Artikel: [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).

Du solltest auch einen Blick in diesen exzellenten Blog-Artikel werfen: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Und noch mehr bei: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Status der Pumpe

![Status der Pumpe](../images/Screenshot_PumpStatus.png)

* Verschiedene Informationen über den Status Deiner Pumpe. Die angezeigten Informationen hängen von Deinem Pumpenmodell ab.
* Weitere Informationen findest Du auf der [Pumpen Seite](../Hardware/pumps.md).

## Careportal (Behandlungen)

Careportal hat die Funktionen repliziert, die auf der Nightscout-Webseite unter dem "+"-Symbol zu finden sind, das es erlaubt, Notizen hinzuzufügen.

### Kohlenhydrat-Berechnung überprüfen

![KH-Berechnung auf dem Tab "Behandlungen" überprüfen](../images/Screenshots_TreatCalc.png)

* Wenn Du den [Bolus-Rechner](Screenshots-bolus-wizard) verwendet hast, um den Bolus zu berechnen, kannst Du diese Berechnung später auf dem Tab Behandlungen überprüfen.
* Klicke einfach auf den grünen Text 'Berech.'. (Je nach Pumpe können Insulin und Kohlenhydrate auch in einer einzigen Zeile in Behandlungen gezeigt werden.)

(Screenshots-carb-correction)=

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

* Diese Registerkarten enthalten Details zu den Berechnungen des Algorithmus und erklären, warum AAPS so und nicht anders gerechnet hat.
* Die Berechnung erfolgt jedes Mal, wenn das System einen neuen Wert vom CGM erhält.
* Weitere Details findest Du im [APS-Abschnitt auf der Seite des Konfigurations-Generators](Config-Builder-aps).

## Profile

![Profile](../images/Screenshots_Profile.png)

* Das Profil enthält Informationen zu Deinen individuellen Diabetes-Einstellungen:
   
   * DIA (Insulinwirkdauer)
   * IC: Insulin zu Kohlenhydrat-Verhältnis ("BE-Faktor")
   * ISF: Insulin Sensitivitäts-Faktor ("Korrektur-Faktor")
   * Basalrate
   * BZ-Ziel: Wert, den die AAPS-Berechnungen anstreben sollen

* Ab Version 3.0 ist nur ein [lokales Profil](Config-Builder-local-profile) möglich. Das lokale Profil kann auf Deinem Smartphone bearbeitet und mit Deiner Nightscout-Seite synchronisiert werden.

(Screenshots-treatment)=

## Bolus

Historie der folgenden Behandlungen:

* Bolus & Kohlenhydrate -> Option zum [Entfernen von Einträgen](Screenshots-carb-correction) zur Korrektur der Historie
* [Verzögerter Bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporäre Basalrate (TBR)
* [Temporäres Ziel](../Usage/temptarget.md)
* [Profilwechsel](../Usage/Profiles.md)
* [Careportal](CPbefore26-careportal-discontinued) - Notizen, die über den Aktions-Tab oder Dialoge eingeben wurden

## BZ-Quelle - xDrip+, BYODA...

![Tab BZ-Quelle - hier xDrip+](../images/Screenshots_BGSource.png)

* Abhängig von Deiner BZ-Quelle wird diese Registerkarte unterschiedlich benannt.
* Zeigt die Historie der CGM Messungen an und bietet die Möglichkeit, Einträge im Fehlerfall zu entfernen (z.B. Niedrigwerte wegen Kompression).

## Nightscout-Client

![Nightscout-Client](../images/Screenshots_NSClient.png)

* Zeigt den Status der Verbindung mit Deiner Nightscout Seite an.
* Die Einstellungen werden in den [Einstellungen](Preferences-nsclient) gemacht. Du kannst den entsprechenden Abschnitt öffnen, indem Du auf das Zahnrad auf der rechten oberen Seite des Bildschirms klickst.
* Hinweise zur Fehlersuche findest Du auf [dieser Seite](../Usage/Troubleshooting-NSClient.md).