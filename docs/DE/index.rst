Was ist AndroidAPS?
==============================================

Ziele
~~~~~~~~~~~~~~
Die Ziele, die zur Entstehung führten:

- App mit „modularer Basis“, es soll leicht sein, neue Module hinzuzufügen
- Eine App, bei der es bei der Erstellung möglich ist zu entscheiden, welche Funktionen die App später hat (Wear Control, NsClient)
- Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
- Eine App, die die Funktionen eines APS visualisiert (Parameter, Ergebnis und Umsetzung)
- Die Möglichkeit, andere Algorithmen zu verwenden
- Eine „Virtuelle Pumpe“, mit der man „herumspielen“ kann, bevor man startet
- Eine App mit enger Nightscout-Integration
- Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen
- Eine App, die alles enthält, um mit dem Diabetes klar zu kommen (APS+Nightscout)

Was man benötigt
~~~~~~~~~~~~~~
- Android Smartphone (5.0 oder neuer)
- xDrip/xDrip+, oder Glimp, oder 600SeriesAndroidUploader
- AndroidAPS
- Nightscout 0.10.0, oder aktueller
- DanaR / DanaRS / Akku Chek Combo Insulinpumpe (in Zukunft auch die Insight)
- Ein CGM (Dexcom G4/G5/G6, Freestyle Libre, Eversense oder Medtronic Guardian)

Sicherheitshinweise
~~~~~~~~~~~~
AndroidAPS ist nur ein Programm zur Unterstützung deiner Diabetestherapie, nicht um den Diabetes zu vergessen!
Vertraue niemals blind auf ein Gerät bei der Anpassung der Dosierung. Kontrolliere die Ergebnisse und verstehe, wie der Algorithmus auf diese kommt.

Dein Smartphone, welches die Pumpe kontrolliert, sollte ausschließlich für diese Aufgabe verwendet werden, installiere keine Apps, um die Gefahr von Trojanern zu minimieren.

Installiere regelmäßig alle Sicherheitsupdates, damit du vor Angriffen bestmöglich geschützt bist!

Screenshots
~~~~~~~~~~~~


Glossar
~~~~~~~~~~~~
Für das meiste "Looper Vokabular" gehe zu: https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html

Einige AndroidAPS spezifische Bezeichnungen:

* [[Circadian Percentage Profil_de]] - ändert dein Basisprofil anhand der eingestellten Zeit oder prozentual.
* Dev (im Homescreen) - Deviation, zeigt an um wie viel Einheiten sich der tatsächliche Anstieg/Senkung des BZ, gegenüber des vorhergesagten Wertes (durch OpenAPS und eingegebener Daten) unterscheidet.


Voraussetzungen
===============

Insulinpumpe
++++++++++++

Insulinarten
++++++++++++

BZ-Quelle (CGM/FGM)
++++++++++++

Android Smartphone
++++++++++++

Android Smartwatch (optional)
++++++++++++
In AndroidAPS ist es möglich, dass man die Pumpe über Android Wear Uhren kontrolliert. Um diese Möglichkeit zu nutzen, musst du beim [kompilieren der App](https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de) die Build Variante "fullWearcontrolRelease" wählen. In AndroidAPS, im Config Builder, musst du dann noch enable Wear aktivieren. Es gibt verschiedene Watchfaces zum auswählen, enthalten sind durchschnittliches Delta, IOB, zur Zeit aktive Temp.Basalrate, das Basalprofil, und deine BZ Werte. Du kannst die AndroidAPS Watch App, auch verwenden, um ein Temp Target zu setzen, Bolus ab zu geben, den Bolus Wizard verwenden, Infusionset füllen, und den Status vom Loop und der Pumpe kontrollieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden bestätigt in dem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen, und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten, oder die deines Kindes/Verwandten, auf der Uhr sehen möchtest, kannst du, auch einfach nur die Watch APK kompilieren. Um nur die Watch APK zu kompilieren folge der [Anleitung](https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de), und wähle die Build Variante "nsclientWearRelease".

Pebble Nutzer können das [Urchin watchface](https://github.com/mddub/urchin-cgm) benutzen um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um, z.B. IOB, aktiver temp. Basalrate und Vorhersage, anzeigen zu lassen. Falls du open loopst kannst du [IFTTT](https://ifttt.com/) benutzen um ein kleines Programm erstellen, welches bestimmt, wenn eine Benachrichtigungen von AndroidAPS kommt, eine SMS oder Benachrichtigung anzeigt.

Nightscout-Website
++++++++++++
Es wird vorausgesetzt, dass du bereits eine eigene Nightscout Seite eingerichtet hast, falls nicht folge [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku), um eine ausführliche Anleitung zur Einrichtung zu erhalten. Bei der unteren Anleitung findest du die Einstellungen die du zusätzlich noch ändern musst.
* Gehe zu https://portal.azure.com/ oder https://herokuapp.com/

* Wähle deinen App Namen.

* Drücke settings (azure), oder Settings > "Reveal Config Variables (heroku)

* Füge die Variablen hinzu oder ändere sie wie folgt:
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true` (HEROKU: 'on')
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged:
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26`

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/nightscout1.png]]

* Drücke Speichern.

PC-Software
++++++++++++
        
Diabetes-Therapiedaten
++++++++++++

AndroidAPS installieren
==============

Android Studio installieren
~~~~~~~~~~~~
https://developer.android.com/studio/install.html

AndroidAPS-App erstellen
~~~~~~~~~~~~
* Downloade das [AndroidAPS repository](https://github.com/MilosKozak/AndroidAPS) und extrahiere den Ordner.

* Öffne Android Studio und wähle 'Open an existing Android Studio project', dazu wähle den Speicherort des Repository's.

* Klicke auf BuildVariants unten links in Android Studio, hier gibt es verschiedene Arten (Build types) zum auswählen.


[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/fullwearcontrolrelease.png]] 

* Wähle den build type, den du kompilieren möchtest. Die verschiedenen Optionen sind hier unten beschrieben, wir empfehlen für die standard AndroidAPS App (**fullWearcontrolRelease**) oder für die elterliche Loop Kontrolle (**nsclientWearRelease**).
    * **full - full app**
    * **nsclient** - Downloadet die Behandlungen von NS und uploadet Careportal Eintragungen (keine Möglichkeit zum Loopen, nur für die Kontrolle von wo anders)_
    * openloop - nur der OpenAPS Teil der App (keine Pumpentreiber)
    * pumpcontrol - nur die Möglichkeit die Dana R von der App aus zu bedienen (kein Loop, nur für z.B. Bolus)<br><br>

    * Nowear - nur die App für das Handy, ohne App für die Smartwatch
    * _Wear - mit Android Wear Smartwatch App zum visualisieren auf der Smartwatch_
    * **Wearcontrol - mit Smartwatch App zum Kontrollieren der Pumpe (z.B. Bolus von der Uhr)**<br><br>

    * _**Release - sollte man immer nehmen**_
    * Debug - nur für die Programmierer um Fehler zu finden

* Gehe zum Build Menu und klicke auf Generate Signed APK

* Setze einen Key und ein Passwort, falls das dein Erstes mal ist, dann klicke auf Create new, oder fülle die Angaben für deinen Bestehenden Key aus.  Für mehr Informationen über den Key gehe bitte zu [https://developer.android.com/studio/publish/app-signing.html#generate-key](https://developer.android.com/studio/publish/app-signing.html#generate-key)

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png]]

*   Wähle den gleichen Build Typ wie vorher, wähle mind. V1 (Jar Signature) und drücke Finish. 

[[https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK%20select%20buildtype%20v1.png]]

* Bitte warte eine Weile bis die APK fertig gestellt ist. Du bekommst eine Benachrichtigung.

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png]]

* Klicke auf 'Show in Explorer'. Hier findest du die APK, manchmal kann es ein bisschen dauern bis sie angezeigt wird.

* Kopiere die APK mit dem selben Namen, wie den des Build Types auf dein Handy und installiere sie. Falls AndroidAPS sich nicht installieren lässt und du eine ältere Version installiert hast, die mit einem anderen Schlüssel signiert wurde, solltest du diese zuerst (**DAVOR EINSTELLUNGEN UNBEDINGT SICHERN -> export settings**) deinstallieren.

Master-Version
++++++++++++

Entwicklungs-Version (dev)
++++++++++++

Update auf neue Version
++++++++++++
# Installiere git (falls du es noch nicht hast)
* jede git Version sollte funktionieren. Zum Beispiel https://git-scm.com/download/win
* Wähle den Ordner wo git.exe ist: File - Settings - Version Control - Git
![](images/git.png)

# Wähle "branch"
* Falls du "branch" wechseln willst, wähle eine andere "branch" vom Reiter: master (aktuellste, getestete Version), oder dev (Entwicklungsversion)

![](images/branchintray.png)

dann checke aus

![](images/checkout.png)

# Branchupdate von Github
* Drücke Ctrl+T, wähle Merge method und drücke OK

![](images/merge.png)

Auf dem Reiter siehst du eine grüne Nachricht "updated project"

# Upload auf das Handy
* Verbinde das Handy
* Drücke den "Play" Knop oben in der Leiste
![](images/play.png)

* Wähle das verbundene Handy und drücke OK

![](images/connectedphone.png)




AndroidAPS einrichten
==============

Konfigurations-Generator
~~~~~~~~~~~~~~

Profil
++++++++

Insulin
++++++++

BZ-Quelle
++++++++

Pumpe
++++++++

DanaR
""""""""""
* Gehe in der Pumpe zum Hauptmenü -> Einstellen -> **Anwendermenü** und Aktiviere "8. V Bolus"

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/danar1.png]]

* Gehe in der Pumpe zum Hauptmenü -> Einstellen -> **Suchen**

* Gehe auf dem Handy zu den **Bluetootheinstellungen** und suche Geräte in der Nähe. Wähle die Seriennummer deiner Dana und gebe das Passwort ein (Standard ist entweder 1234, oder 0000). Falls die Dana nicht aufscheind, starte das Handy neu und wechsle die Batterie der Dana, wiederhole anschließend diesen Schritt.

* Gehe in AAPS zum **Konfigurations-Generator** und wähle deine Dana Version (DanaR, DanaR Korean, DanaRv2, DanaRS).

* Klicke in AAPS auf **Einstellungen (3 Punkte rechts oben)**.

1. Wähle DanaR Bluetooth device, und wähle deine Seriennummer aus.
2. Wähle Pumpen Passwort, und gebe das Passwort ein (Standard ist entweder 1234, oder 0000).
3. Falls du willst, dass AAPS Basalraten über 200% einstellen kann, musst du "Benutze extended Bolus für hohe temp. Basal" aktivieren. Falls du diese Option nicht aktivierst, kann AAPS die BR nicht auf über 200% erhöhen.

* Gehe in der Pumpe zum **Arztmenü** (+, - und > gleichzeitig drücken, PIN 3022 eingeben) und setze folgende Einstellungen: Bolus Block = 0 (sonst funktioniert SMB später nicht richtig), Bolus = 0.1, Basal = 0.01, Max Basal = ca. dreifache Menge der höchsten einzelnen Basalrate/h, Max Bolus / Max Tag = individuell, aber nicht zu gering. Hier solltest du mind. die doppelte tägliche Insulingesamtmenge angeben (oder das 2,5fache).

Empfindlichkeitserkennung
++++++++

openAPS
++++++++

Loop
++++++++

Beschränkungen
++++++++
AndroidAPS hat eine Reihe an Zielsetzungen, die erfüllt werden müssen, um dich durch die Funktionen und Einstellungen des Loopens zu führen. Sie garantieren, dass du alles korrekt eingestellt hast und verstehst was das System genau macht, somit du ihm trauen kannst.

Wenn du auf ein anderes Handy umsteigst, kannst du deine Einstellungen und den Fortschritt exportieren. Bei den drei Punkten, oben rechts, wähle _Export Settings_, es wird eine Benachrichtigung erscheinen wo die Preferences Datei gespeichert wird (normalerweise im Hauptordner des internen Speichers). Beim neuen Handy musst du diese Datei, dann in den gleichen Pfad kopieren, und anschließend _Import Settings_ wählen. Es werden alle mögliche Einstellungen, auch die Sicherheitseinstellungen, und der Fortschritt in den Objectives gespeichert. Falls du das nicht machst gehen alle deine Einstellungen (bei Benutzung des Local Profiles, auch das Profil), und Fortschritte nicht verfügbar sein. Deshalb solltest du immer wieder mal eine Sicherheitskopie machen, dass du im Falle eines Verlustes, Beschädigung, etc. deine Daten nicht verlierst.
 
* **Objective 1:** Visualisierung und Konstrolle einrichten, und die Basalrate und Faktoren überprüfen
  * Wähle die richtige BZ-Quelle. Siehe [BZ-Quelle](https://github.com/MilosKozak/AndroidAPS/wiki/Blutzucker-Quelle_de) für Informationen.
  * Wähle deine Pumpe im ConfigBuilder (wähle Virtual Pump, wenn du eine Pumpe ohne Treiber für AAPS verwendest). Wenn du die Dana verwendest, versichere dich, dass du die [Dana R](https://github.com/MilosKozak/AndroidAPS/wiki/DanaR-Insulinpumpe_de) und [AAPS](https://github.com/MilosKozak/AndroidAPS/wiki/AndroidAPS_de) Anleitung gelesen, und richtig eingestellt hast.
  * Folge den Einstellungen zu [Nightscout](https://github.com/MilosKozak/AndroidAPS/wiki/Nightscout_de) um sicher zu stellen, dass du deine Daten erhältst und anzeigen lassen kannst.
<br><br>_Es könnte sein, dass du für den nächsten BZ warten musst, damit ihn AAPS erhält und akzeptiert._
 
* **Objective 2:** Start mit Open Loop
  * Wähle Open Loop, entweder in den Preferences, oder indem du den Loop Button drückst und hältst, dieser befindet sich links oben im Homescreen.
  * Aktiviere mindesten 20 vorgeschlagene temp. Basalraten manuell über einen Zeitraum von 7 Tagen (Falls du eine andere Pumpe verwendest, gebe die Vorschläge in der Pumpe ein und bestätige es in AAPS). Versichere dich, dass die Daten in AAPS und Nightscout angezeigt werden.
 
* **Objective 3:** Den Open Loop, mit seinen temp. Basal Empfehlungen, verstehen.
  *Versuche die Logik hinter den Empfehlungen zu verstehen indem du dir diese [Seite] (https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), die Vorhersagelinie in AAPS/Nightscout und die Ergebnisse im OpenAPS Tab ansiehst.
<br><br>_Stoppe hier, wenn du den Open Loop mit der virtuellen Pumpe verwendest._

* **Objective 4:** Mit dem closed Loop mit Hypoabschaltung starten
  * Wähle Closed Loop von den Preferences, oder indem du den Open Loop Button links oben im Homescreen drückst und hältst.
  * Setze deinen Zielbereich, um sicher zu gehen, ein wenig höher als üblich.
  * Sehe dir an wie die temp. Basalraten aktiv sind, indem du die blaue Linie auf der Homescreen Grafik, oder in Zahlen darüber kontrollierst.
  * Gehe sicher, dass deine Einstellungen korrekt sind, wenn du über 5 Tage keinen Unterzucker mehr behandeln musstest, sollten die Einstellungen in Ordnung sein. Im anderen Falle solltest du deine Faktoren noch einmal kontrollieren.
<br><br>_Das System ist auf einen maxIOB von 0 begrenzt, d.h. dass der Loop eine Hypo abfangen kann, aber keine Steigungen, das System kann die BR nur erhöhen wenn der IOB unter 0 liegt und dadurch auf 0 bringen.._
 
* **Objective 5:** Feineinstellung des closed Loops, max IOB über 0 erhöhen und schrittweise den Zielbereich verringern
  * Erhöhe dein maxIOB über 0 über einen Zeitraum von einem Tag, standardmäßig wird eine Einstellung auf 2 vorgeschlagen, aber du solltest dich langsam rauf arbeiten bis du weißt welche Einstellung für dich in Ordnung ist.
  * Wenn du dir mit deiner Einstellung sicher bist, verringere deinen Zielwert schrittweise auf deinen gewünschten Wert.
<br><br>Das System erlaubt dir den Zielbereich im Bereich von 60-180 zu setzen._
 
* **Objective 6:** Basalrate und Faktoren nachjustieren, falls erforderlich, und Auto-Sens Aktivierung
  * Du kannst [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) verwenden, um deine BR und Faktoren zu kontrollieren, oder einen altmodischen BR-Test machen.
  * Aktiviere [Auto-Sens](https://github.com/MilosKozak/AndroidAPS/wiki/Open-APS-features) über einen Zeitraum von 7 Tagen und kontrolliere die weiße Linie im Homescreen (Sen-Kästchen aktiviert), um zu sehen wie sich deine Sensitivität ändert, und kontrolliere regelmäßig im OpenAPS Tab wie AAPS deine BR und Faktoren ändert. Autosense beginnt erst 24 Stunden nach der Aktivierung zu wirken, damit genügend Daten vorhanden sind.
<br><br>_Vergiss nicht, dich in diese [Liste](http://bit.ly/nowlooping) einzutragen, wähle AAPS als deine DIY Software aus, falls du es noch nicht gemacht hast._
 
* **Objective 7:** Zusätzliche Funktionen für den alltäglichen Gebrauch aktivieren, wie Advanced Meal Assist (AMA)
  * Nun solltest du dich mit AAPS sicher fühlen und wissen, welche Einstellungen für deinen Diabetes am besten passen. Über einen Zeitraum von 14 Tagen kannst du zusätzliche Funktionen ausprobieren, welche dich noch mehr unterstützen.

Behandlungen
++++++++

Generell
++++++++

## SMS-Kommunikator
Wenn du diese Option verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code.

Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

Einstellungen
~~~~~~~~~~

Passwort für die Einstellungen
++++++++

Generell
++++++++

Übersicht
++++++++

Sicherheitseinstellungen
++++++++

Pumpen-Einstellungen
++++++++

Nightscout-Client
++++++++

Andere
++++++++

Daten Auswahl
--------

Wear-Einstellungen
--------

Tipps und Tricks
===========

Logfiles erhalten
~~~~~~~~~

Diabetes-Therapie tunen
~~~~~~~~~

Beispiel-Setups
~~~~~~~~~

Hilfe in der Community
=============
