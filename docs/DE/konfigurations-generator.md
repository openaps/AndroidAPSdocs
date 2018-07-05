# Konfigurations-Generator

## Profil

Seit der Version 1.5 hat sich die Funktion der Profile geändert.

Bis Version 1.46 waren die Profiländerungen sofort übernommen.

AAPS kann immer noch nach der alten Funktion funktionieren, bis du ein "Profile switch" mit einer Dauer von null (später erklärt) einstellst. Wenn man das macht, beginnt AAPS die Historie der Profile zu verfolgen, und jede neue Profiländerung benötigt ein neues "Profile switch" Event, auch wenn du das Profil in Nightscout änderst. Das geupdatete Profil wird sofort an AAPS gesendet, aber du musst ein "Profile switch" Event eingeben um die Änderungen verwenden zu können.
Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch".

Falls du einen "Profile switch" mit einer Dauer einstellst, wird nach Ablauf auf das letzte Profil zurück gegriffen.

Falls du ein lokales Profil in AAPS verwendest (CPP, Simple, Local), musst du nur die Taste im Plugin drücken, diese stellt den "Profile switch" automatisch richtig ein.

Diese Funktion ermöglicht genauere Kalkulationen über die Vergangenheit, indem die gewechselten Profile berücksichtigt werden.

Im closed Loop Modus wird empfohlen "Sync Profile in Pump" zu aktivieren.

## Insulin

### Rapid-Acting Oref

### Ultra-Rapid Oref

### Free Peak Oref
Bei dem Profil "Free Peak 0ref" für Fiasp, kann eingegeben werden, wann die höchste Wirkdauer erreicht wird.

Der DIA wird dabei automatisch auf 5 Stunden gestellt, wenn er selbst nicht höher angegeben wurde im Profil.

Die folgende Erklärung ist leider auf Englisch, aber bei den Grafiken wird es noch mal deutlich.

http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/

![DIA Erklärung von diabettech.com](https://i1.wp.com/www.diabettech.com/wp-content/uploads/2017/07/DIA-Clamp.jpg?w=892)
<small>(Quelle: diabettech.com)</small>

Bei vielen ist nach 3-4 Stunden praktisch keine merkbare Wirkung vom Fiasp mehr da, aber immer noch 0,0xx Einheiten vorhanden. Diese können dann z.B. bei Sport sich doch noch bemerkbar machen.

Daher verwendet AndroidAPS Minimum 5h als DIA.

## BZ-Quelle
    
## Pumpe
    
## Empfindlichkeitserkennung

### Sensitivität Oref0

### Sensitivität AAPS

### Durchschnittliche Sensitivität

## OpenAPS

### MA

### AMA
Manche Funktionen in AndroidAPS sind vom OpenAPS oref0 Code, deswegen lies dir die OpenAPS Anleitung ebenso durch:
* [Advanced Meal Assist (AMA)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama) nachdem du dir einen Bolus gegeben hast, kann das System schneller eine höhere temp. Basalrate wählen, vorausgesetzt du gibst die Kohlenhydrate verlässlich ein. Aktiviere die Option im Config Builder Reiter, jedoch musst du das siebte Ziel abgeschlossen haben, um AMA verwenden zu können.
* [Autosens](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode) analysiert historische Daten und macht Anpassungen, wenn es bemerkt, dass die Sensitivität gestiegen/gesunken ist. Aktiviere es im Preferences Menü, dafür musst du das sechste Ziel abgeschlossen haben.
* [Temporary Targets/temporäre Ziele (Eating Soon and Activity Mode)](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#eating-soon-and-activity-mode-temporary-targets) temporäre Ziele (Temp Targets) sind ideal wenn du möchtest, dass der Loop auf einen anderen BZ Wert korrigiert, z.B. beim Sport (höheres Ziel), oder wenn du essen willst (niedrigeres Ziel -> BZ steigt nach dem Essen nicht so stark). Man kann die Temp Targets entweder über die Uhr, im Actions Reiter, oder indem man im Overview Reiter auf das aktuelle Ziel länger drückt. Im Overview Reiter wird das Standard Ziel blau dargestellt, und das temporäre grün.

### SMB


## Loop
    
## Beschränkungen
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
  
## Behandlungen
    
## Generell

### Übersicht

### Aktionen

### Careportal

### SMS-Kommunikator
Gehe in deinen Einstellungen im  Android-Telefon zu Apps > AndroidAPS > Berechtigungen und aktiviere dort SMS.

In AndroidAPS gehe zu Preferences > SMS Communicator und trage die Telefonnummer(n) ein, die dazu berechtigt werden soll(en), Kommandos an AndroidAPS senden zu dürfen. ‚Allow remote commands via SMS' muss außerdem aktiviert warden.

Sende von einem der berechtigten Telefone eine SMS an das Android-Handy, auf de AndroidAPS installiert ist. Sende dazu einen der folgenden **fettgedruckten** Kommandos und das Handy wird mit einer Erfolgsmittelung oder dem angeforderten Status antworten. 

* BG: Letzter Blutzucker 125 vor 4min, Delta: -12mg/dl, IOB: 0.20E (Bolus: 0.10E Basal: 0.10E)
* LOOP STOP/DISABLE: Das „Loopen“ wurde deaktiviert
* LOOP START/ENABLE: Das „Loopen“ wurde aktiviert.
* LOOP STATUS: Das „Loopen“ ist deaktiviert / Das „Loopen“ ist aktiviert / Pausiert (10 min)
* LOOP SUSPEND 20: Das „Loopen“ wird für 20 Minuten unterbrochen. 
* LOOP RESUME: Das „Loopen“ fortsetzen
* TREATMENTS REFRESH: Geräte aktualisieren 1 Empfänger
* NSCLIENT RESTART: NSCLIENT restarten 1 Empfänger
* DANAR: Letzte Verbindung: vor 1 Min. Temp: 0.00E/h @11:38 5/30min IOB: 0.5E Reserv: 34E Batt: 100
* BASAL STOP/CANCEL: Um die temporäre Basalrate zu stoppen, antworte mit dem Code EmF
* BASAL 0.3: Um eine Basalrate von 0.3E/h zu starten, antworte mit Code Swe, Ferngesteuerte Basalraten-Einstellungen sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* BOLUS 1.2: Um einen Bolus vo 1.2E abzugeben, antworte mit Code Rrt, Ferngesteuerte Boli sind nicht erlaubt (wenn ferngesteuerte Kommandos nicht erlaubt sind)
* CAL 126: Um Kalibrierungswert von 126 zu senden, antworte mit Code Rrt, Kalibrierung gesendet (wenn xSrip installiert ist. Kallibrierungen zu akzeptieren, muss in xDrip+ aktiviert sein)

### Essen

### Wear

### xDrip+ Statuszeile (Uhr)

### Laufende Benachrichtigungen

### Nightscout-Client

### Konfigurations-Generator

