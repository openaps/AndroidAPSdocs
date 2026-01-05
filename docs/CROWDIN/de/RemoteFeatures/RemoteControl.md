# AAPS remote steuern
Es gibt vier sehr wirkungsvolle Wege, **AAPS** remote zu steuern:

1) [SMS commands](#RemoteControl_SMS-Commands) (follower phone can be either Android or iOS), 2) [AAPSClient](#RemoteControl_aapsclient) (follower phone is Android) 3) [Nightscout](#RemoteControl_nightscout) (Android, iOS or other computer/device).  
4) [Smartwatches](#RemoteControl_smartwatches) (Android)

Die ersten drei sind meist für Pflegende/Eltern geeignet und Smartwatches sind **zusätzlich** für Erwachsene mit Diabetes sehr hilfreich.

![grafik](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) SMS-Befehle

Hierzu gibt es die gesonderte Seite [SMS-Befehle](../RemoteFeatures/SMSCommands.md).

(RemoteControl_aapsclient)=
## 2) AAPSClient

Der **AAPSClient** sieht **AAPS** sehr ähnlich, und stellt den Eltern/Betreuenden einen Reiter zur Verfügung, auf dem Aktionen remote in **AAPS** ausgeführt werden können:

![NSCLIENT_ 2024-05-17 134512](../images/remote_control_and_following/AAPSClient_main_view.png)

### Über den AAPSClient und AAPSClient2

Es gibt 2 Versionen der APK, die installiert werden können: **AAPSClient** & **AAPSClient2**. Der kleine aber feine Unterschied zwischen den Versionen wird unten erklärt.

Sollte die Notwendigkeit bestehen, ein weiteres AAPS-Smartphone (eines anderen Patienten mit einem Nightscout-Konto) zu steuern, ist eine weitere Kopie des **AAPSClient** notwendig. Hierzu muss dann der **AAPSClient2** zusätzlich zum **AAPSClient** installiert werden. Durch den **AAPSClient 2** ist es möglich, dass eine betreuende Person die **AAPSClient** apk zweimal auf dem Follower-Smartphone installieren kann und so den Daten von zwei Patienten gleichzeitig folgen kann.

Um die beiden Apps unterscheiden zu können, haben einige Elemente der App andere Hintergrundfarben: gelb für **AAPSClient**, blau für **AAPSClient2**. Die sich unterscheidenden Elemente sind das App-Symbol, das Widget und der **AAPS**-Statusbereich in der App selbst. <br/> Hinweis : Die Transparenz des Widget-Hintergrunds ist anpassbar.

![AAPSClient_and_AAPSClient2.png](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### Herunterladen und Installieren

**AAPSClient** kann auf einem einzigen Smartphone oder mehreren Follower-Smartphones installiert werden (z.B. auf das Follower-Smartphone des ersten Elternteils und des zweiten Elternteils), um so beiden die Möglichkeit zu geben das zugehörige **AAPS**-Master-Smartphone remote zu steuern.

Um den **AAPSClient** herunterzuladen, navigiere zum [GitHub-Repository](https://github.com/nightscout/AndroidAPS/releases/) und klicke auf das Element **„app-AAPSClient-release_x.x.x.x“** (die im Screenshot unten gezeigte Version kann eventuell älter sein):

![grafik](../images/remote_control_and_following/AAPSClient_download_02.png)

Gehe dann in Deinen _Downloads_-Ordner auf Deinem Computer. Unter Windows zeigt -downloads- das rechte Menüband an:

![grafik](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Nach dem Herunterladen klicke auf _im Ordner anzeigen_, um die Datei dort zu finden.

Die **AAPSClient** apk kann nun entweder:

Mit einem USB-Kabel auf das Follower-Smartphone übertragen werden, oder in einen Google-Drive Ordner gezogen werden und dann auf das Follower-Smartphone durch klicken auf app-"AAPSClient-release-"-Datei gebracht werden.

Sollten Du **AAPS** für Dich selbst und den **AAPSClient** zum Folgen anderer Personen benötigen, musst Du den **AAPSClient** selbst erstellen und kannst ihn nicht, wie oben beschrieben, aus dem Github-Repository herunterzuladen. Der Grund dafür ist, dass mit unterschiedlichen Schlüsseln signierte Apps (**AAPS** und **AAPSClient**) nicht auf dem gleichen Smartphone installiert werden können. <br/> Um den **AAPSClient** selbst zu erstellen, folge dem Prozess eines [herkömmlichen AAPS Builds](../SettingUpAaps/BuildingAaps.md). An der Stelle **Generate signed App Bundle or APK**, wählst Du anstelle von **fullRelease** in diesem Fall **aapsclientRelease** aus.

### Synchronisierung - AAPSClient und AAPS einrichten (für Version 3.2.0.0 und höher)

Sobald die __AAPSClient__-APK auf dem Follower-Smartphone installiert ist, muss dafür gesorgt werden, dass die „Einstellungen“ in der KONFIGURATION mit denen für __AAPS__ mit Nightscout 15 abgeglichen sind (siehe Versionshinweise [hier](../Maintenance/UpdateToNewVersion)). Das folgende Beispiel bietet Hilfestellung bei den Synchronisierungs-Einstellungen für NSClient und NSClientV3 im Zusammenspiel mit Nightscout 15. Es gibt daneben auch noch andere __AAPS__-Optionen (z.B. xDrip+).

Innerhalb des Abschnitts 'Synchronisierung' in der 'KONFIGURATION' kannst Du Dich für verschiedene Synchronisierungsoptionen sowohl für __AAPS__ als auch das Follower-Smartphone entscheiden:

- Option 1: Nightscout-Client (auch unter 'v1' bekannt) - der die Daten des Benutzenden mit Nightscout synchronisiert; oder

- Option 2: NSClientV3 (auch als „v3“ bezeichnet) - das die Daten mithilfe der v3-API mit Nightscout synchronisiert.

![AAPS1_Screenshot 2024-05-17 133502](../images/4bdfed7e-3b2f-4fe8-b6db-6fcf0e5c7d98.png)

Du musst sicherstellen, dass __beide__ Smartphones (AAPS und AAPS-Client) die gleiche Synchronisierungs-Option nutzen (v1 oder v3):

Option 1: v1 (Nightscout-Client) für beide Smartphones:

- Gib Deine Nightscout-URL ein

- Gib Dein Nightscout API-Key (API secret) ein

Option 2: v3 für beide Smartphones:

- Gib Deine Nightscout-URL in den NSClientV3-Einstellungen ein

- Gib Dein NS-Zugangstoken in der KONFIGURATION ein. Bitte folge den Hinweisen [hier](https://nightscout.github.io/nightscout/security/#create-a-token)

Wenn Du die optionale Funktion 'Mit Websockets verbinden' auswählst, achte darauf, dass dies sowohl für das __AAPS__-Smartphone als auch für das __AAPSClient__-Smartphone aktiviert bzw. deaktiviert ist. Das Aktivieren der Websockets in __AAPS__ und nicht im __AAPSClient__ (und auch umgekehrt) wird nur dazu führen, dass __AAPS__ nicht richtig funktioniert. Durch das Aktivieren der Websockets wird eine schnellere Synchronisierung mit Nightscout ermöglicht. Das kann zu einem höheren Akkuverbrauch des Smartphones führen.

![WB2_Screenshot 2024-05-17 140548](../images/d9a7dc5-b3ea-4bf3-9286-313f329b1966.png)


Achte darauf, dass sowohl der __AAPSClient__ als auch __AAPS__ auf dem Reiter „NSClient“ für jedes der Smartphones „verbunden“ anzeigt und dass bei Auswahl eines „Profilwechsel“ oder „Temporäres Ziel“ im  __AAPSClient__ dieses auch in __AAPS__ korrekt aktiviert wird.

Achte auch darauf, dass Kohlenhydrat-Eingaben, sowohl im __AAPSClient__ als auch in __AAPS__ unter 'Behandlungen" erscheinen. Passiert das nicht, ist das ein Hinweis darauf, dass die Einstellungen nicht richtig sind.

### Das 'NS access token'-Konfigurationsproblem beheben

Die genaue Konfiguration des 'NS Access Token' kann davon abhängig sein, ob Du einen Nightscout-Anbieter als Bezahldienst (paid service) nutzt oder nicht.

Wenn Du Probleme mit **AAPS** v3 hast ('NS Access Token' wird nicht akzeptiert) und Du für Deine Nightscout-Seite bezahlst, solltest Du zuerst diesen Anbieter um Hilfestellung beim Lösen des NS Access Token Problems bitten. In allen anderen Fällen wende Dich an die **AAPS**-Gruppe. Bitte prüfe im Vorfeld, ob Du die [hier](https://nightscout.github.io/nightscout/security/#create-a-token) beschriebene Anleitung genau durchgegangen bist.

### AAPSClient-Funktionen sind unter anderem:

| Tab / Hamburger      | Funktionalitäten                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Aktionen**-Tab     | - Profile Switch <br>- Loop Status change <br>- Temp Target<br>- BG Check<br>- CGM Sensor Insert<br>- Note<br>- Exercise<br>- Announcement<br>- Question?<br>- History Browser |
| **Nahrung**-Tab      |                                                                                                                                                                                                                                      |
| **Behandlungen**-Tab | - Prüfen der durchgeführten Behandlungen inkl. des Insulins und der eingegebenen Kohlenhydrate                                                                                                                                       |
| **Wartung**-Tab      | - Einstellungen ex- und importieren                                                                                                                                                                                                  |
| **Profil**-Tab       | - Neues Profil erstellen<br>- Profilwechsel                                                                                                                                                                                    |

Mit dem **AAPSClient** kann das Elternteil/Betreuende einen Großteil der Anpassungen direkt in **AAPS** (Ausnahme: Bolusabgabe) über das Mobilfunknetz oder Internet remote vornehmen. Die wichtigsten Vorteile des **AAPSClient** sind die Geschwindigkeit und Einfachheit mit der Eltern/Betreuende **AAPS** remote steuern können. Der __AAPSClient__ _kann_ deutlich schneller als die Eingabe von zu authentifizierenden SMS-Befehlen sein. Befehle, die im **AAPSClient** eingegeben werden, werden nach Nightscout hochgeladen. In order for the actions taken in **AAPSClient** to be actually actioned in **AAPS**, the NSClient settings must allow to receive such orders. See the [Synchronization section of NSClient preferences](#Preferences-nsclient-synchronization).



Eine Remote-Steuerung über die **AAPSClient**-App wird nur dann empfohlen, wenn Deine Synchronisation gut funktioniert (_d. h._ Du hast keine unerwünschten Datenänderungen wie z. B. eigenständige Änderungen von TT, TBR usw.) siehe [Versionshinweise für Version 2.8.1.1](#important-hints-2-8-1-1) für weitere Details.

### AAPSClient mit Smartwatch-Optionen

Eine Smartwatch kann sehr nützlich sein, um bei Kindern **AAPS** zu managen. Es sind einige verschiedene Konfigurationen möglich. Auf einer kompatiblen Smartwatch kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) installiert werden, die mit der AAPSClient-App auf dem Eltern-Smartphone verbunden wird. Damit können der aktuelle Glukosewert und der Loop-Status angezeigt werden. Zusätzlich können dann KH-Einträge vorgenommen werden und auch temporäre Ziele und Profiländerungen aktiviert werden. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich. [Hier](#4-smartwatches) kannst Du mehr über Smartwatches erfahren.

(RemoteControl_nightscout)=
## 3) Nightscout

Genauso wie es Nightscout als einen Server "in der Cloud" gibt, gibt es auch eine dedizierte **Nightscout**-App, die über den App Store direkt auf Dein iPhone heruntergeladen werden kann. Wenn Du ein Android-Follower-Smartphone hast es gibt keine spezielle Nightscout-App. Du nutzt in diesem Fall am Besten den [**AAPSClient**](#2-aapsclient). Wenn Du nur folgen möchtest und keine Behandlungen eingeben musst, kannst Du auch die [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch)-App aus dem Play Store herunterladen und installieren.

Sobald Du die **Nightscout**-App auf Deinem iPhone installiert hast, öffne die App, folge den Anweisungen für die Einrichtung und gib Deine Nightscout-Adresse (siehe links unten) ein. Je nach Anbieter bei dem Deine Nightscout-Seite läuft, kann es etwas anders aussehen. (_z. B._ http://deineadresse.herokuapp.com). Gib dann Dein Nightscout API secret (Passwort) ein (siehe rechts unten). Wenn Du nicht nach Deinem API-Passwort gefragt wirst, klickst Du oben in der App auf das Schloss-Symbol und gibst es dann ein:

![grafik](../images/remote-control-24.png)

Weitere Informationen zur Einrichtung findest Du direkt bei [Nightscout](https://nightscout.github.io/nightscout/discover/)

Wenn Du Dich das erste Mal einloggst, wirst Du noch eine sehr einfach gestaltete Ansicht sehen. Passe die Anzeige an, indem Du das „Hamburger“-Menü oben rechts auswählst und nach unten scrollst:

![grafik](../images/remote-control-25.png)

Scrolle bis zu den „Einstellungen“ herunter. Die Darstellung der Glukosewerte erfolgt standardmäßig "logaritmisch". Das kannst Du unter "Skalierung" auf "Linear" ändern. Um das Basal der Pumpe einzublenden, ändere unter dem Abschnitt "Basalraten-Darstellung" den Wert auf "Standard“.

![grafik](../images/remote-control-25b.png)

Wähle Deine gewünschten Optionen aus. Deaktiviere die Alarme, wenn Du für die Alarmierung andere Apps nutzt.

![grafik](../images/remote-control-26.png)

Scrolle weiter herunter bis zum Abschnitt "Zeige Plugins".

Wichtig ist, dass dort “Behandlungs-Portal” ausgewählt ist. In diesem Abschnitt kannst Du einige andere Metriken zusätzlich auswählen, von denen Aktives Insulin, Behandlungs-Portal, Pumpe, Kanülenalter, Insulin-Alter, Basalraten-Profil, und OpenAPS am nützlichsten sind.

Wichtig ist, dass Du nach Deinen Änderungen unten auf "Speichern“ klickst, damit diese Änderungen wirksam werden.

![grafik](../images/remote-control-27.png)

Nach dem Drücken von „Speichern“ wird die App zum Hauptbildschirm der Nightscout-App zurückkehren. Es sollte ungefähr so aussehen:

1. Aktueller Glukosewert
2. Informationen zum AAPS-Systemstatus - Tippe auf die einzelnen Registerkarten des Bildschirms, um mehr Details anzuzeigen. Lösche bzw. füge mit dem Hamburger-Menü die anzuzeigenden Informationen hinzu.
3. Glukoseverlauf mit den entsprechenden Behandlungen (Kohlenhydrate, Boli) wird angezeigt
4. Längerfristiger Glukoseverlauf
5. „Hamburger“-Menü zum Einstellen der Anzeigeoptionen, Erstellung von Berichten, Bearbeitung von Profilen und den Nightscout Admin-Tools
6. „**+**“-Menü für die Eingabe von Behandlungen und Übertragung an AAPS.
7. Ändern des Anzeige-Zeitraums
8. Basalrate (basales Insulinprofil)
9. Grüne Linie = historische Glukosewerte Blaue Linien = prognostizierte Glukosewerte

![grafik](../images/remote-control-28.png)

Schauen wir uns das obere linke Menü der Nightscout-App etwas genauer an:

1. Behandlungen rückwirkend ändern
2. Alarme ein-/ausschalten
3. Hamburger - für Einstellungen
4. Behandlungen - Behandlung eingeben - zum Übertragen der Änderungen an AAPS

![nightscout top bar](../images/remote-control-29.png)

Es gibt auf diesem Bildschirm eine Vielzahl an Statusinformationen des **AAPS**-Systems in den grauen Tabs (und noch mehr Informationen werden angezeigt, wenn Du auf die Tabs tippst):

1. 5 Minuten Glukosetrend
2. Bolus-Assistenten-Vorschau (BWP)
3. Tippe auf „Basal“, um Dein aktuelles Profil und Deine Basal-Informationen zu sehen
4. Zeit seit dem letzten CGM-Messwert in AAPS
5. **Pumpe**: Insulin, Batterie % und wann sie sich das letzte Mal mit AAPS verbunden hat
6. Zeit seit der letzten Aktualisierung von AAPS - wenn es länger als 5 Minuten her ist, kann es auf ein Verbindungsproblem zwischen dem AAPS-Smartphone und der Pumpe/CGM hindeuten
7. Drücke auf IOB, um die Verteilung zwischen von Basal- und Bolusinsulin zu sehen
8. Alter des Insulins im Reservoir
9. Kanülenalter
10. Akkustand des AAPS-Smartphones
11. Größe Deiner Datenbank. Wenn diese zu voll wird (nur DIY Nightscout - bei gehosteten Diensten einfach ignorieren), können Verbindungsprobleme auftreten. Du kannst die Größe durch Datenlöschungen im Admin-Tool-Menü reduzieren (über das Hamburger-Menü).

![grafik](../images/remote-control-30.png)

![grafik](../images/remote-control-31.png)

Tippe auf „Aktualisieren“ am unteren Ende der Seite, um das Popup zu schließen.

### Behandlungen über die Nightscout-App an AAPS senden

Um das Senden von Behandlungsdaten aus der **Nightscout**-App an das **AAPS** des Haupt-Smartphones (Master) zu ermöglichen, gehe auf dem **AAPS**-Hauptbildschirm in den Reiter **AAPSClient**. Öffne oben rechts das 3-Punkte-Menü und öffnen dort AAPSClient-Einstellungen – Synchronisierung und wähle die entsprechende Option aus. Aktiviere die Option, damit die verschiedenen Befehle (Temporäre Ziele etc.) empfangen werden können und auch um Profile zwischen Geräten synchronisieren zu können. Wenn es den Anschein haben sollte, dass die Synchronisierung nicht erfolgt, gehe auf den AAPSClient-Reiter und wähle im 3-Punkte-Menü "Vollständige Synchronisation" und warte einige Minuten ab.

Nightscout auf Deinem iPhone hat den vollen Funktionsumfang, wie es auch Nightscout auf Deinem PC hat. Es erlaubt Dir, viele Befehle an **AAPS**zu schicken, aber es erlaubt Dir nicht, einen Bolus abzugeben.

### Negatives Insulin löschen, um wiederholte Hypos zu vermeiden

Auch wenn Du keinen eigentlichen Bolus abgeben kannst, kannst Du eine Insulingabe durch Nightscout als Korrekturbolus "ankündigen". Weil AAPS ab diesem Zeitpunkt diesen Fake-Bolus berücksichtigt, führt die faktisch dazu, dass AAPS _weniger aggressiv_ reagiert. Das kann, wenn Dein Profil (z. B. wg. sportlicher Aktivität) zu stark war, helfen, um negatives Insulin auszugleichen und so niedrige Werte zu verhindern. Falls Dein **Nighscout**-Setup davon abweichen sollte, solltest Du das mit dem **AAPS**-Smartphone in Deiner Nähe genau prüfen.

![24-10-23, cancel negative insulin NS](../images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


Einige der hilfreichsten **Nightscout**-Befehle sind in der unten stehenden Tabelle beschrieben.

#### Nightscout Befehls-Tabelle

| Häufig verwendete Behandlungen                             | Funktion und Anwendungsbeispiel                                                                                                                                                                                                                                           |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Korrektur-Bolus**                                        | Hiermit kannst Du Insulin ankündigen, **aber <u>keinen Bolus</u>** abgeben. <br>Das hilft beim Ausgleichen negativen IOBs, um eine Hypo, <br>z. B. aufgrund eines zu starken Profils mitten in der Nacht, zu vermeiden.                                       |
| **Kohlenhydrat-Korrektur**                                 | Kohlenhydrate sofort ankündigen                                                                                                                                                                                                                                           |
| **Temporäres Ziel**<br>**Temporäres Ziel abbrechen** | Erlaubt das Setzen und Abbrechen von temporären Zielen.<br>Beachte, dass das Abbrechen nicht immer funktioniert<br>. In diesem Fall kannst Du für einen kurzen Zeitraum (2 Min.) ein neues Ziel setzen, das danach wieder auf das normale Ziel „zurückfällt“. |
| **Profilwechsel**                                          | Ermöglicht Dir, das aktive Profil zu überprüfen <br>und auf ein anderes Profil zu wechseln, entweder permanent <br>oder für eine definierte Zeitspanne (in Minuten).                                                                                          |



| Seltener verwendete Befehle                                                                                                          | Funktion und Anwendungsbeispiel                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BG-Messung**                                                                                                                       | Sendet einen BZ-Test an AAPS.                                                                                                                                                                             |
| **Snack-Bolus**<br>**Mahlzeiten-Bolus**<br>**Verzögerter Bolus**                                                         | Kann Kohlenhydrate (plus Proteine und Fette)<br> von 60 Minuten in der Vergangenheit bis 60 Minuten in der Zukunft ankündigen.<br>Combo-Bolus erlaubt gleichzeitig auch Insulin anzukündigen. |
| **Ankündigung**<br>**Bemerkung**<br>**Frage**<br>**Bewegung**<br>**Open APS Offline**<br>**DAD Alarm** | Fügt die entsprechenden Informationen hinzu.                                                                                                                                                              |
| **Pumpen-Katheter-Wechsel**<br>**Pumpenbatterie wechseln**<br>**Insulin-Ampullenwechsel**                                | Vermerkt diese Pumpen-Änderungen.                                                                                                                                                                         |
| **CGM Sensor Start**<br>**CGM Sensor Wechsel**<br>**CGM Sensor Stopp**                                                   | Vermerkt diese Sensor-Änderungen.                                                                                                                                                                         |
| **Start temporäre Basalrate**<br>**Ende temporäre Basalrate**                                                                  | Am nützlichsten im Open Loop.                                                                                                                                                                             |

Mehr zu den **Nightscout**-Optionen kannst Du [hier](https://nightscout.github.io/) nachlesen

### Tipps, um das Beste aus der Nightscout-App herauszuholen

1). Wenn Du auf einer Seite "hängenbleibst" und zum Hauptbildschirm zurückkehren möchtest, klicke einfach auf „Aktualisieren“ (unten in der Mitte). Das bringt Dich zurück auf den **Nightscout**-Startbildschirm mit der Anzeige der Glukosewerte.

Wenn Du das aktuell auf dem Smartphone laufende Profil sehen möchtest, drücke auf die verschiedenen Symbole oberhalb des Diagramms. Zusatzinformationen (Mahlzeitenfaktoren, Insulin-Empfindlichkeit und Zeitzone etc.) erhältst Du, indem Du auf "Basal“ drückst und hinter "OpenAPS“ sind Informationen zum Profil und das aktuelle Ziel etc. anzeigbar. Der Ladezustand sowohl des Smartphone-Akkus, als auch der Pumpen-Batterie können ebenfalls angezeigt werden. BWP zeigt die Vorhersage des Algorithmus zur voraussichtlichen Entwicklung des aktiven Insulins (IOB) und der aktiven Kohlenhydrate (COB).

#### Andere Menü-Symbole: Was bedeutet der Stift (bearbeiten)?

Du kannst Bleistift (technisch) verwenden, um Bolus- oder Korrekturbehandlungen der letzten 48 Stunden zu verschieben oder zu löschen.

Mehr Details dazu findest Du [hier](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Obwohl dies potenziell nützlich sein könnte, um angekündigte (aber nicht gebolte) Kohlenhydrate zu löschen, funktioniert es in der Praxis derzeit nicht gut mit **AAPS** und wir empfehlen diese Änderungen direkt über die **AAPS**-App vorzunehmen.

(RemoteControl_smartwatches)=
## 4) Smartwatches

### Option 1) AAPS von einer Wear-OS-Smartwatch aus steuern

![Wear Remote 1](../images/Wear_Remote1.png)

Sobald Du [**AAPS** auf Deiner Smartwatch fertig eingerichtet hast](../WearOS/BuildingAapsWearOS.md), findest Du ausführliche Informationen zu den Smartwatch-Zifferblättern und den jeweiligen Funktionen in [Wear AAPS auf einer Smartwatch nutzen](../WearOS/WearOsSmartwatch.md).

Als kurze Übersicht: Die folgenden Funktionen können von der Smartwatch aus gestartet werden:

* temporäres Ziel setzen

* Bolusrechner verwenden (Welche Variablen bei der Berechnung berücksichtigt werden, lässt sich in den Einstellungen auf dem Smartphone festlegen.)

* eCarbs eintragen

* Bolus (Insulin + Kohlenhydrate) abgeben

* Uhreinstellungen

* Status

* Pumpenstatus überprüfen

* Loop-Status überprüfen

* Profil prüfen und ändern, CPP (Circadian Percentage Profile = Zeitverschiebung + Prozentsatz)

* TDD (Total daily dose = Bolus + Basal pro Tag) anzeigen

* Remote-Bolus, wenn das Kind und die betreuende Person an verschiedenen Orten sind (dies ist möglich, wenn die **AAPS**-Smartwatch und das **AAPS**-Smartphone mit dem WLAN verbunden sind)

#### Kommunikation eines Betreuenden zur Smartwatch über andere Apps (wie WhatsApp)

Es können zusätzliche Apps (z. B. WhatsApp) für den Nachrichtenaustausch zwischen Eltern und Kindern auf der Smartwatch installiert werden. Es ist wichtig, dass dem Smartphone nur EIN Google-Konto zugeordnet ist, da die Smartwatch sonst die Daten nicht rüberbringen kann. Du musst 13 oder älter sein, um ein Samsung-Konto zu haben. Das Geburtsdatum muss in der eMail-Adresse hinterlegt sein, die auf dem Android-Smartphone verwendet wird.

Ein Video, das das WhatsApp-Setup für das Senden von Nachrichten auf der Galaxy 4 Smartwatch zeigt, findest Du [hier](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/). Über WhatsApp kannst Du nicht den vollen Funktionsumfang nutzen.

Durch Anpassungen sowohl in der **Galaxy Wearable**-App auf dem **AAPS**-Smartphone als auch auf der Smartwatch, können WhatsApp-Nachrichten mit einem leichten Vibrieren signalisiert und auf dem bestehenden Zifferblatt gezeigt werden.

### Option 2) **AAPS** auf der Smartwatch steuert **AAPS** auf dem Smartphone

Ähnlich wie mit einem Follower-Smartphone auf dem der AAPSClient, Nightscout oder SMS-Befehle laufen (Link zu Abschnitten) kann eine Smartwatch genutzt werden, um **AAPS** remote zu steuern und vollständige Profildaten bereitzustellen. Ein entscheidender Unterschied liegt darin, dass die Smartwatch sich mit dem **AAPS**-Smartphone über Bluetooth verbindet und keinen Authentifizierungscode benötigt. Eine Nebenbemerkung: Wenn sowohl die Smartwatch als auch das **AAPS**-Smartphone über Bluetooth verbunden sind und sich auch in einem WLAN/Mobilfunknetz befinden, wird die Smartwatch auch mit dem **AAPS**-Smartphone kommunizieren. Das erweitert die Kommunikationsmöglichkeiten. Hier reden wir von einer Remote-Bolusabgabe in einer Situation in der die betreuende Person mit der **AAPS**-Smartwatch und das Kind (mit dem **AAPS**-Smartphone) an verschiedenen Orten sind. Das hilft z.B., wenn das Kind in der Schule ist.

Eine Smartwatch zur Remote-Steuerung ist verschiedensten Situationen komfortabel:

a)  **AAPSClient**/Nightscout/**SMS**-Befehle funktionieren nicht oder

b) der Nutzende möchte die Eingabe eines Authentifizierungscode vermeiden (wie es bei der Dateneingabe, dem Setzen eines temporären Ziels oder der Kohlenhydrateingabe über das Follower-Smartphone notwendig ist).

Um **AAPS** steuern zu können, muss auf der Smartwatch **Android Wear** Software (idealerweise 10 oder höher) laufen. Bitte prüfe die technischen Spezifikationen der Smartwatch und schau Dir auch die Seite [Smartphones](../Getting-Started/Phones.md) dazu an. Wenn Du Dir nicht sicher sein solltest, frage einfach in den **AAPS**  Facobook/Discord Gruppen nach.

Eine detaillierte Schritt-für-Schritt Anleitung für die **AAPS**-Einrichtung auf der Samsung Galaxy Watch 4 (40mm) findest Du weiter unten. Die [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0)-Smartwatch ist ebenfalls gerne gewählt. Füge gerne andere Smartwatches und Deine damit gemachten Kompatibilitäts-Erfahrungen in der Dokumentation und [verbessere die Dokumentation](../SupportingAaps/HowToEditTheDocs.md), damit die gesamte **AAPS**-Community davon profitieren kann.

### Option 3) **AAPS** auf dem Smartphone wird über AAPS auf der Smartwatch gesteuert

![Wear Remote 2](../images/Wear_Remote2.png)

Die notwendige Smartwatch-Software (**AAPSClient** Wear APK) kann direkt von [Github](https://github.com/nightscout/AndroidAPS/releases/) heruntergeladen werden.

Um die Software herunterzuladen, klicke auf die benötigte App (in diesem Screenshot, würden sowohl **wear-aapsclient-release_3.2.0.1** und auch **wear-aapsclient2-release_3.2.0.1** funktionieren; es gibt zwei Versionen, falls eine zweite Kopie für eine zweite Betreuenden-Smartwatch benötigt wird):

![grafik](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Dann "Speichern unter" und speichere die Datei an einem Ort Deiner Wahl auf Deinem Computer:


![grafik](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






Die **AAPSClient** Wear APK wird genauso auf die Smartwatch gebracht (übertragen und sideloading), wie es im Abschnitt [Übertragen der Wear-App auf Dein AAPS Smartphone](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone) für die die **AAPS** Wear App beschrieben ist.  









