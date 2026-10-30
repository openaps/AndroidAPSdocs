(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient-Problembehebung

Der NSClient benötigt eine stabile Verbindung mit Nightscout. Instabile Verbindungen führen zu Synchronisationsfehlern und hoher Datennutzung.

Wenn Dir niemand auf Nightscout folgt, kannst Du den NSClient pausieren, um die Akkulaufzeit zu velängern oder Du kannst den NSClient so einstellen, dass er nur bei WLAN-Verbindung und/oder während des Ladevorgangs Daten hochlädt.

* Wie erkenne ich eine instabile Verbindung?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Wenn Du viele Wiederverbindungen siehst, liegt ein Problem vor.

* Neustart

Als erste Schritte solltest Du sowohl Nightscout als auch das Smartphone neu starten um zu sehen, ob der Fehler weiter besteht.

Wenn Dein Hightscout auf Heroku gehostet ist, kannst Du NS wie folgt neu starten: Melde Dich in Heroku an, klicke auf den Namen Deiner Nightscout App, klicke auf das 'More'- Menü und dann auf 'Restart all dynos'.

Für andere Hosts folge bitte der Dokumentation Deines Hosts.

* Probleme mit dem Smartphone

Android kann dein Smartphone in den Ruhezustand versetzen. Überprüfe, ob Du eine Ausnahme für AndroidAPS im Akku-Manager Deines Smartphones hast, damit die App die ganze Zeit im Hintergrund laufen kann.

Überprüfe den NSClient bei starkem Netzwerksignal (WLAN / mobile Daten).

Probiere ein anderes Smartphone aus.

* Nightscout

Falls Deine Nightscout-Seite bei Azure gehostet wird: Viele Nutzer haben eine Zunahme der Verbindungsprobleme nach dem Wechsel zu Heroku bemerkt.

Ein Workaround für Verbindungsprobleme in Azure ist, in den 'Application settings' das HTTP Protokoll auf 2.0 zu setzen und die 'Websockets' einzuschalten.

* Keine Blutzuckerwerte von Nightscout

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Wenn Du immernoch eine Fehlermeldung bekommst...

Überprüfe die Datenbankgröße in MongoDB oder über das Plugin für die Datenbankgröße in Nightscout. Wenn Du die kostenfreie Version von MongoDB nutzt, ist die Datenbank bei 496 MB voll und muss bereinigt werden. [Hier sind die Überprüfung der Datenbankgröße und deren Bereinigung beschrieben.](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Bevor Du Deine Datenbank bereinigst und Daten löschst, solltest Du Dir überlegen, diese vorher dem Open Humans Projekt für wissenschaftlich Studien zur Verfügung zu stellen - wenn Du dies noch nicht getan hast. Die Anleitung findest Du auf der [OpenHumans Konfigurationsseite](../SupportingAaps/OpenHumans.md).