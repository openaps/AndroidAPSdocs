(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient-Problembehebung

Der NSClient benötigt eine stabile Verbindung mit Nightscout. Instabile Verbindungen führen zu Synchronisationsfehlern und hoher Datennutzung.

Wenn Dir niemand auf Nightscout folgt, kannst Du den NSClient pausieren, um die Akkulaufzeit zu velängern oder Du kannst den NSClient so einstellen, dass er nur bei WLAN-Verbindung und/oder während des Ladevorgangs Daten hochlädt.

* Wie erkenne ich eine instabile Verbindung?

Wechsele zur Registerkarte NSClient in AAPS und prüfe das Protokoll. Normalerweise wird alle ~30s ein PING empfangen und es gibt kaum Hinweise auf Reconnections.. Wenn Du viele Wiederverbindungen siehst, liegt ein Problem vor.

Seit AndroidAPS Version 2.0 wird, wenn ein solches Verhalten erkannt wird, der NSClient für 15 Minuten pausiert und die Meldung "NSClient Fehlfunktion" auf dem Hauptbildschirm angezeigt.

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

Wenn AAPS sich korrekt mit Nightscout verbindet, aber Blutzuckerwerte als N/A anzeigt. Gehe zu NSCLIENT, drücke das 3-Punkt-Menü oben rechts, klicke auf NSClient Einstellungen -> Synchronisation aktivieren "Empfangen/Backfill CGM Daten".

* Wenn Du immernoch eine Fehlermeldung bekommst...

Überprüfe die Datenbankgröße in MongoDB oder über das Plugin für die Datenbankgröße in Nightscout. Wenn Du die kostenfreie Version von MongoDB nutzt, ist die Datenbank bei 496 MB voll und muss bereinigt werden. [Hier sind die Überprüfung der Datenbankgröße und deren Bereinigung beschrieben.](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Bevor Du Deine Datenbank bereinigst und Daten löschst, solltest Du Dir überlegen, diese vorher dem Open Humans Projekt für wissenschaftlich Studien zur Verfügung zu stellen - wenn Du dies noch nicht getan hast. Die Anleitung findest Du auf der [OpenHumans Konfigurationsseite](../SupportingAaps/OpenHumans.md).