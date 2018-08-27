# NSClient-Problembehebung

Der NSClient benötigt eine stabile Verbindung mit Nightscout. Instabile Verbindungen führen zu Synchronisationsfehlern und hoher Datennutzung.

Wenn dir niemand auf Nightscout folgt, kannst du den NSClient pausieren, um (viel) Batterielaufzeit zu sparen oder die Verbindung nur bei WLAN und während des Ladens aktivieren.

* Wie erkenne ich eine instabile Verbindung?

Wechsele zur Registerkarte NSClient in AAPS und prüfe das Protokoll. Pings alle ~30 Sekunden und fast keine Nachrichten zur Wiederverbindung sind häufig ein Zeichen für instabile Verbindungen. Wenn Du viele Wiederverbindungen siehst, liegt ein Problem vor. Ab AAPS-Version 2.0 werden solche Probleme erkannt, der NSClient wird für 15 Minuten pausiert und eine Meldung "Fehlfunktion NSClient" im Startbildschirm angezeigt.

* Neustart

Als erste Schritte solltest du sowohl Nightscout als auch das Smartphone neu starten um zu sehen, ob der Fehler weiter besteht.

* Probleme mit dem Smartphone

Android kann dein Smartphone in den Ruhezustand versetzen. Prüfe, ob du in der Energieüberwachung für AndroidAPS eine Ausnahme eingerichtet hast, damit AAPS immer im Hintergrund ausgeführt wird. Prüfe die Verbidnung nochmals bei sehr guter mobiler Datenverbindung. Probiere ein anderes Smartphone aus.

* Nightscout

Falls du Azure nutzt: Vielen hat ein Wechsel zu Heroku geholfen. Als Workaround für Azure wurde kürzlich empfohlen, in den Application settings das HTTP Protokoll auf 2.0 und Websockets auf ON zu setzen

* If you still get an error...

Check the size of your database in mLab. 496MB means it is full and needs to be compacted. [Follow these OpenAPS instructions for checking the size of your database](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). If compacting does not work, you should consider donating your AndroidAPS data to the Data Commons (for research) before deleting any data collections. There are [instructions in the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) for how to accomplish this.