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