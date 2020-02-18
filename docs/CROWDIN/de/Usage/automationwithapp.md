# Automatisierung mit Drittanbieter-App Android Automate

**Dieser Artikel wurde vor Erscheinen von AndroidAPS Version 2.5 geschrieben. Mittlerweile gibt es ein [automation plugin in AndroidAPS](./Automation.rst) selbst. Für einige ist dieser Artikel vielleicht dennoch nützlich, die Drittanbieter-App sollte jedochn nur von fortgeschrittenen Benutzern verwendet werden.**

Da AndroidAPS ein hybrides Closed-Loop-System ist, muss der Benutzer noch einige Informationen von Hand eingeben (z.B. Bewegung, Spritz-Ess-Abstand ("eating soon"), Chillen auf dem Sofa...). Häufig wiederkehrende manuelle Eingaben können über externe Tools wie Automate oder IFTTT automatisiert werden, um die AndroidAPS-Funktionen zu erweitern.

## Android Automate App

Mit der kostenlosen Android™ Anwendung Automate kannst du verschiedene Aufgaben auf deinem Smartphone automatisieren. Du kannst deine Automatisierungen mit Flowscharts erstellen, deinem Gerät Automatismen bei Bluetooth, WLAN, NFC erlauben oder Aktionen auslösen wie das Versenden von SMS, E-Mail basierend auf deinem Standort, der Tageszeit oder einem anderen „Trigger“. Du kannst fast alles auf deinem Gerät automatisieren, Automate unterstützt sogar Plug-Ins für Tasker und Locale.

Mit diesem Tool kannst du leicht Workflows erstellen, mit denen dein Diabetes basierend auf mehreren Bedingungen automatisch behandelt wird nach dem Prinzip "Wenn dies... und dies... aber nicht dies..., dann mache das... und das...". Es gibt Tausende von Möglichkeiten, die du konfigurieren kannst.

Bis jetzt ist es **notwendig, mit Nightscout Profilen**zu loopen, da Automate die Befehle über HTTP-Anfragen direkt in deiner Nightscout-Website ausführt, die sie anschließend mit deiner AndroidAPS-App synchronisiert.

**Offline Looping (direkte Kommunikation zwischen Automate und AnroidAPS-App) wird noch nicht unterstützt**, ist aber technisch möglich. Vielleicht wird es in Zukunft dafür eine Lösung geben. Wenn du einen Weg dazu gefunden hast, füge ihn bitte dieser Dokumentation hinzu oder kontaktiere einen Entwickler.

### Grundvoraussetzungen

#### Automate App

Lade Android Automate im Google Play Store oder unter <https://llamalab.com/automate/> herunter und installiere es auf demselben Smartphone wie AndroidAPS.

Tippe in Automate auf das Hamburger Menü am Bildschirm oben links > Settings > Wähle 'Run on system startup'. Dadurch werden deine Workflows automatisch nach dem Systemstart ausgeführt.

![Automate HTTP request](../images/automate-app2.png)

#### AndroidAPS

Tippe in AndroidAPS auf das Drei-Punkte-Menü am oberen rechten Bildschirmrand und gehe auf Einstellungen > Nightscout-Client > Verbindungs-Einstellungen > deaktiviere "Benutze nur WLAN-Verbindung" und "Nur während des Ladens", da automatische Behandlungen nur funktionieren, wenn AndroidAPS eine Verbindung zu Nightscout hat.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

In AndroidAPS, tap on 3 dots menu on the upper right screen and go to Preferences > NSClient > Advanced Settings > Uncheck 'NS upload only (disabled sync)' and 'No upload to NS'.

Be aware of the [security issues](../Installing-AndroidAPS/Nightscout#security-considerations) that might occure and be very careful if you are using an [Insight pump](../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps).

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Workflow-Beispiele

#### Beispiel 1: Wenn Aktivität (z.B. Gehen oder Laufen) erkannt wird, dann setze ein hohes TT. Und wenn die Aktivität endet, dann warte 20 Minuten und brich anschließend das TT ab

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bicycle present, then Automate will set a user specified high temporary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Hohes TT setzen
2. = Zurück zum normalen Ziel 20 Minuten nach dem Ende der Aktivität

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Der hohe TT-Wert (der obere und untere Wert sollten identisch sein)
* duration: Die Dauer des hohen TT (nach Zeitablauf wird der Loop auf das reguläre Profilziel zurückgehen, es sei denn, die Aktivität geht weiter). 
* secret: Deine API SHA1 Hash. Das ist NICHT dein API-Key! Du kannst deinen API-Key in das SHA1 Format konvertieren unter <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Beispiel 2: Wenn xDrip+ einen "BG hoch"-Alarm meldet, dann setze ein niedriges TT für ... Minuten.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temporary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for firing the trigger. It should be unmistakable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

Threshold: BG value that should fire the high alert.

Default Snooze: Insert the duration you are planning to set for your low TT here, as the alert will come up again and maybe extend the duration of the low TT.

![xDrip+ alert settings](../images/automate-xdrip2.png)

##### Automate

Secondly, download the Automate script <https://llamalab.com/automate/community/flows/27809>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: Der hohe TT-Wert (der obere und untere Wert sollten identisch sein)
* duration: Die Dauer des hohen TT (nach Zeitablauf wird der Loop auf das reguläre Profilziel zurückgehen, es sei denn, die Aktivität geht weiter). Es ist empfehlenswert, dass du hier dieselbe Dauer verwendest wie für "Standard snooze" in den Einstellungen der xDrip+Warnung
* secret: Deine API SHA1 Hash. Das ist NICHT dein API-Key! Du kannst deinen API-Key in das SHA1 Format konvertieren unter <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Beispiel 3: Kann von dir selbst hinzugefügt werden!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...