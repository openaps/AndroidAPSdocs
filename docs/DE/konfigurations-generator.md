# Konfigurations-Generator

Im Reiter "Konfigurations-Generator" kannst du fast alle AAPS-Funktionen konfigurieren.

## Profil

Hier kannst du auswählen, von welcher Quelle AAPS dein Therapie-Profil mit den Basalraten, ISF und IC abrufen soll.

**DanaR**

Das in der **DanaR/DanaRS hinterlegte Profil** wird verwendet. Diese Auswahl dürfte selten sinnvoll sein, weil das Eingeben der Daten direkt in der Pumpe ein "Gefummel" ist. 

**Nightscout-Profil (empfohlen)**

Die auf deiner **Nightscout-Website unter https://[deine-nightscout-adresse]/profile hinterlegten Profile** werden synchronisiert. So kannst du komfortabel in Nightscout Profile (z.B. Arbeit, Daheim, Sport, Urlaub usw.) **anlegen**. Kurz nach dem Klick auf "Speichern" erscheinen sie bei bestehender Internetverbindung des Smartphones in AAPS. 

Um ein Profil aus Nightscout zu **aktivieren**, musst du einen **Profilwechsel** durchführen. Dazu im Homescreen von AAPS oben lange auf das derzeitige Profil drücken (graues Feld zwischen dem hellblauen "Open/Closed Loop"-Feld und dem dunkelblauen Zielbereich-Feld) > Profilwechsel > Profil auswählen > OK. AAPS schreibt nach dem Profilwechsel das gewählte Profil auch in die Pumpe, so dass es im Notfall ohne AAPS verfügbar ist und weiterläuft.

Auch ohne Internetverbindung bzw. ohne Verbindung zu Nightscout sind die Nightscout-Profile in AAPS verfügbar, wenn sie einmalig synchronisiert worden sind.

**Einfaches Profil**

Dieses Profil ermöglicht nur ein ganz simples Behandlungsschema mit **ganztägig jeweils nur einem Wert** für DIA, IC, ISF, Basalrate und Zielbereich. Eher zu Testzwecken zu verwenden, außer du hast über 24 Stunden dieselben Faktoren. Sobald "Einfaches Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die Profildaten eingeben kannst.

**Lokales Profil**

Hier wird zunächst das in der Pumpe hinterlegte Profil 1 ausgelesen (weitere Pumpen-Profile werden ignoriert). Sobald "Lokales Profil" ausgewählt ist, erscheint in AAPS ein neuer Reiter, wo du dann die aus der Pumpe ausgelesenen Profildaten ggf. verändern kannst. Mit dem nächsten Profilwechsel werden sie dann auf die Pumpe ins Profil 1 geschrieben.

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
Genauere Infos gibt es hier [Super Micro Boluses (SMB) on OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).

Um SMB verwenden zu können, musst du zuerst 28 Tage den Closed Loop verwendet haben, und darauf achten, dass dein APS ausfallen könnte.

Um SMB effektiv arbeiten zu lasssen, musst du deine Einstellungen anpassen. Da mit SMB der maxIOB nicht mehr durch die vom APS gegebenen Dosen berechnet wird, sondern alles IOB (auch deinen selbst gegebenen Essensbolus), ist der Wert für maxIOB höher, als das, was du von MA und AMA gewohnt bist. Ein guter Wert für den Anfang ist: 1 normaler Essensbolus + 3x höchste tägl. Basalrate. Jedoch sei dabei vorsichtig und adjustiere deine Einstellungen in kleinen Schritten.

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

**Sicherheitshinweise zur SMS-Steuerung**
        
* Wenn du diese Option verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

### Essen

### Wear

### xDrip+ Statuszeile (Uhr)

### Laufende Benachrichtigungen

### Nightscout-Client

### Konfigurations-Generator

