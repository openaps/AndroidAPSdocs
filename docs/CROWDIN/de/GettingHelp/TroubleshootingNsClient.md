(Troubleshooting-NSClient-troubleshooting-nsclient)=

# NSClient-Fehlerbehebung

Der NSClient benötigt eine stabile Verbindung mit Nightscout. Instabile Verbindungen führen zu Synchronisationsfehlern und hoher Datennutzung.

Wenn Dir niemand auf Nightscout folgt, kannst Du den NSClient pausieren, um die Akkulaufzeit zu velängern oder Du kannst den NSClient so einstellen, dass er nur bei WLAN-Verbindung und/oder während des Ladevorgangs Daten hochlädt.

* Wie erkenne ich eine instabile Verbindung?

Öffne den NSClient-Bildschirm (**Konfiguration** > **Kommunikation** > **NSClientV3** > **Plugin öffnen**) und beobachte den **Status** und das Log. Mit aktivierten Websockets sollte der Status auf „connected“ bleiben, mit kaum Meldungen zu Neuverbindungen im Log. Wenn Du viele Wiederverbindungen siehst, liegt ein Problem vor.

* Neustart

Starte als ersten Schritt Nightscout und dann Dein Smartphone neu, um zu sehen, ob das Problem dauerhaft ist.

Wenn Dein Hightscout auf Heroku gehostet ist, kannst Du NS wie folgt neu starten: Melde Dich in Heroku an, klicke auf den Namen Deiner Nightscout App, klicke auf das 'More'- Menü und dann auf 'Restart all dynos'.

Für andere Hosts folge bitte der Dokumentation Deines Hosts.

* Probleme mit dem Smartphone

Android kann dein Smartphone in den Ruhezustand versetzen. Überprüfe, ob Du eine Ausnahme für AndroidAPS im Akku-Manager Deines Smartphones hast, damit die App die ganze Zeit im Hintergrund laufen kann.

Überprüfe den NSClient bei starkem Netzwerksignal (WLAN / mobile Daten).

Probiere ein anderes Smartphone aus.

* Nightscout

Falls Deine Nightscout-Seite bei Azure gehostet wird: Viele Nutzer haben eine Zunahme der Verbindungsprobleme nach dem Wechsel zu Heroku bemerkt.

Ein Workaround für Verbindungsprobleme in Azure ist, in den 'Application settings' das HTTP Protokoll auf 2.0 zu setzen und die 'Websockets' einzuschalten.

    {admonition} Remote-Steuerung braucht Websockets
    :class: important
    Websockets sind für die Remote-Steuerung über **AAPSClient** auf beiden Smartphones **Pflicht**. Wenn die Websocket-Verbindung immer wieder abbricht, funktioniert die Remote-Steuerung nicht. Die Datensynchronisierung funktioniert noch, aber langsamer. Dein Nightscout-Host muss Websockets unterstützen.

* Keine Blutzuckerwerte von Nightscout

Wenn sich **AAPS** korrekt mit Nightscout verbindet, die Glukosewerte aber als N/A angezeigt werden: Öffne in den [NSClientV3-Einstellungen](#Preferences-nsclient) den Bereich **Synchronisierung** und schalte **CGM Daten von NS empfangen** ein. Diese Option ist ausgeblendet, solange die Client-Steuerung eingeschaltet ist ([geschützter Modus](#client-master-control-hardened-mode)). Prüfe in diesem Fall, ob unter **Konfiguration** → **BZ-Quelle** **Nightscout-Client BZ** ausgewählt ist.

* Wenn Du immernoch eine Fehlermeldung bekommst...

Überprüfe die Datenbankgröße in MongoDB oder über das Plugin für die Datenbankgröße in Nightscout. Wenn Du die kostenfreie Version von MongoDB nutzt, ist die Datenbank bei 496 MB voll und muss bereinigt werden. [Folge dieser Anleitung von Nightscout, um die Größe Deiner Datenbank zu prüfen und Daten zu löschen](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Bevor Du Deine Datenbank bereinigst und Daten löschst, solltest Du Dir überlegen, diese vorher dem Open Humans Projekt für wissenschaftlich Studien zur Verfügung zu stellen - wenn Du dies noch nicht getan hast. Die Anleitung findest Du auf der [OpenHumans Konfigurationsseite](../SupportingAaps/OpenHumans.md).