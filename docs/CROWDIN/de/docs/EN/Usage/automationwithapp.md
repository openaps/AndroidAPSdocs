# Automatisierung mit Drittanbieter-App Android Automate

**Dieser Artikel wurde vor Erscheinen der AAPS Version 2.5 geschrieben. Mittlerweile gibt es ein [Automatsierungs-Modul in AAPS](./Automation.md) selbst. Für einige ist dieser Artikel vielleicht dennoch nützlich, die Drittanbieter-App sollte jedoch nur von fortgeschrittenen Benutzern verwendet werden.**

Da AAPS ein hybrides Closed-Loop-System ist, muss der Nutzende noch einige Informationen von Hand eingeben (z.B. Bewegung, Spritz-Ess-Abstand ("eating soon"), Chillen auf dem Sofa...). Häufig wiederkehrende manuelle Eingaben können über externe Tools wie Automate oder IFTTT automatisiert werden und erweitern damit die AAPS-Funktionen.

## Android Automate App

Mit der kostenlosen Android™ Anwendung Automate kannst du verschiedene Aufgaben auf deinem Smartphone automatisieren. Du kannst deine Automatisierungen mit Flowscharts erstellen, deinem Gerät Automatismen bei Bluetooth, WLAN, NFC erlauben oder Aktionen auslösen wie das Versenden von SMS, E-Mail basierend auf deinem Standort, der Tageszeit oder einem anderen „Trigger“. Du kannst fast alles auf deinem Gerät automatisieren, Automate unterstützt sogar Plug-Ins für Tasker und Locale.

Mit diesem Tool kannst du leicht Workflows erstellen, mit denen dein Diabetes basierend auf mehreren Bedingungen automatisch behandelt wird nach dem Prinzip "Wenn dies... und dies... aber nicht dies..., dann mache das... und das...". Es gibt Tausende von Möglichkeiten, die du konfigurieren kannst.

Bis jetzt ist es **notwendig, mit Nightscout Profilen**zu loopen, da Automate die Befehle über HTTP-Anfragen direkt in Deiner Nightscout-Website ausführt, die sie anschließend mit Deiner AAPS-App synchronisiert.

**Offline Looping (direkte Kommunikation zwischen Automate und AAPS-App) wird noch nicht unterstützt**, ist aber technisch möglich. Vielleicht wird es in Zukunft dafür eine Lösung geben. Wenn du einen Weg dazu gefunden hast, füge ihn bitte dieser Dokumentation hinzu oder kontaktiere einen Entwickler.

### Grundvoraussetzungen

#### Automate App

Lade Android Automate im Google Play Store oder unter <https://llamalab.com/automate/> herunter und installiere es auf demselben Smartphone wie AAPS.

Tippe in Automate auf das Hamburger Menü am Bildschirm oben links > Settings > Wähle 'Run on system startup'. Dadurch werden deine Workflows automatisch nach dem Systemstart ausgeführt.

![Automate HTTP request](../images/automate-app2.png)

#### AAPS

Tippe in AAPS auf das Drei-Punkte-Menü am oberen rechten Bildschirmrand und gehe auf Einstellungen > Nightscout-Client > Verbindungs-Einstellungen > deaktiviere "Benutze nur WLAN-Verbindung" und "Nur während des Ladens", da automatische Behandlungen nur funktionieren, wenn AAPS eine Verbindung zu Nightscout hat.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

Tippe in AAPS auf das Drei-Punkte-Menü am oberen rechten Bildschirmrand und gehe auf Einstellungen > Nightscout-Client > Erweiterte Einstellungen und deaktiviere 'Zu Nightscout nur hochladen (keine Synchronisation)' und 'kein Upload zu Nightscout'.

Beachte die [Sicherheitsüberlegungen](Nightscout-security-considerations) und sei besonders vorsichtig, wenn Du eine [Insight-Pumpe](Accu-Chek-Insight-Pump-settings-in-aaps) verwendest.

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Workflow-Beispiele

#### Beispiel 1: Wenn Aktivität (z.B. Gehen oder Laufen) erkannt wird, dann setze ein hohes TT. Und wenn die Aktivität endet, dann warte 20 Minuten und brich anschließend das TT ab

Dieser Workflow wird die Smartphone-Sensoren (Pedometer, Gravitationssensor...) überwachen, die das Aktivitätsverhalten erkennen. Wenn Aktivitäten wie Walken, Laufen oder Radfahren erkannt werden, setzt Automate ein benutzerdefiniertes hohes temporäres Ziel für die eingestellte Zeit. Wenn die Aktivität endet, erkennt das dein Smartphone, wartet 20 Minuten und setzt dann den Zielwert zurück auf den im Profil hinterlegten Standardwert.

Lade das Automate script herunter <https://llamalab.com/automate/community/flows/27808>herunter.

Bearbeite den "Sling", indem du auf das Stift-Symbol tippst > Flowchart

![Automate sling](../images/automate-app3.png)

Passe den Workflow nach deinen Wünschen wie folgt an:

![Automate sling](../images/automate-app6.png)

1. = Hohes TT setzen
2. = Zurück zum normalen Ziel 20 Minuten nach dem Ende der Aktivität

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request-URL: Deine NS-URL mit der Endung "/api/v1/treatments.json" (z.B. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Der hohe TT-Wert (der obere und untere Wert sollten identisch sein)
* duration: Die Dauer des hohen TT (nach Zeitablauf wird der Loop auf das reguläre Profilziel zurückgehen, es sei denn, die Aktivität geht weiter). 
* secret: Deine API SHA1 Hash. Das ist NICHT dein API-Key! Du kannst deinen API-Key in das SHA1 Format konvertieren unter <http://www.sha1-online.com/>

Save: Tippe auf "Done" und auf den Haken

Workflow starten: Tippe auf die Play-Taste

#### Beispiel 2: Wenn xDrip+ einen "BG hoch"-Alarm meldet, dann setze ein niedriges TT für ... Minuten.

Dieser Workflow wird die xDrip+ Benachrichtigungen überwachen. Wenn xDrip+ einen nutzerspezifischen "BG hoch"-Alarm ausgelöst hat, dann setzt Automate für die angegebene Zeit ein benutzerdefiniertes niedriges temporäres Ziel. Nach Zeitablauf wird ggf. eine erneute Warnung die Dauer des niedrigen TT verlängern.

##### xDrip+

Erstens musst du in xDrip+ eine "BG-hoch"-Warnung wie folgt einrichten:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Achtung!) Dieser Name ist für das Auslösen des Triggers unerlässlich. Er sollte einzigartig und nicht mit anderen Warnnamen vergleichbar sein. Beispiel: "180alarm" sollte nicht neben "80alarm" existieren.

Threshold: BG-Wert, der den hohen Alarm auslösen soll.

Default Snooze: Gib hier an, für wie lange du das niedrige temporäre Ziel setzen wirst, da die Warnung sonst erneut auftauchen wird und dann die Dauer des niedrigen temporären Ziels verlängert.

![xDrip+ alert settings](../images/automate-xdrip2.png)

##### Automate

Zweiens, downloade das Automate script <https://llamalab.com/automate/community/flows/27809>.

Bearbeite den "Sling", indem du auf das Stift-Symbol tippst > Flowchart

![Automate sling](../images/automate-app3.png)

Passe den Workflow nach deinen Wünschen wie folgt an:

Unter "Notification posted?" musst du als "TITLE" den Namen derjenigen xDrip+ Warnung eingeben, die den Trigger auslösen soll. Am Wortanfang und am Wortende musst du als Variable einen * hinzufügen.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request-URL: Deine NS-URL mit der Endung "/api/v1/treatments.json" (z.B. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Der hohe TT-Wert (der obere und untere Wert sollten identisch sein)
* duration: Die Dauer des hohen TT (nach Zeitablauf wird der Loop auf das reguläre Profilziel zurückgehen, es sei denn, die Aktivität geht weiter). Es ist empfehlenswert, dass du hier dieselbe Dauer verwendest wie für "Standard snooze" in den Einstellungen der xDrip+Warnung
* secret: Deine API SHA1 Hash. Das ist NICHT dein API-Key! Du kannst deinen API-Key in das SHA1 Format konvertieren unter <http://www.sha1-online.com/>

Save: Tippe auf "Done" und auf den Haken

Workflow starten: Tippe auf die Play-Taste

#### Beispiel 3: Kann von dir selbst hinzugefügt werden!!!

Bitte ergänze weitere Workflows, indem Du die .flo-Datei in die Automate-Community hochlädst (unter dem Stichwort 'Nightscout') und beschreibe sie hier, indem Du einen [Pull Request auf das AndroidAPSDocs Repository](../make-a-PR.md) machst.

## If this, then that (IFTTT)

Zögere nicht, mit einem PR ein Tutorial hierfür hinzuzufügen...