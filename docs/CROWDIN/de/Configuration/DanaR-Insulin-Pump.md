# DanaR Pump

*Diese Anleitung beschreibt die Konfiguration der App und deiner Pumpe, wenn du die DanaR nutzt. Gehe zu [DanaRS](./DanaRS-Insulin-Pump), falls du die DanaRS (Markteinführung 2017) verwendest.*

* In the pump go to Main Menu > Setting > User Option
* Gehe zu “8. Extended Bolus"

![DanaR pump](../images/danar1.png)

* Go to Main Menu > Setting > Discovery
* Gehe auf dem Handy zu den Bluetootheinstellungen und suche Geräte in der Nähe. Wähle die Seriennummer deiner Dana und gebe das Passwort ein (Standard ist entweder 1234 oder 0000). Falls die Dana nicht angezeigt wird, starte das Handy neu und wechsle die Batterie der Dana. Wiederhole anschließend diesen Schritt.

* In AndroidAPS go to Config Builder and select the type of DanaR you have (DanaR, DanaR Korean, DanaRv2)

* Rufe in AAPS das Drei-Punkte-Menü auf. Drücke auf Einstellungen.
* Drücke auf "DanaR Bluetooth Gerät" und wähle deine Seriennummer aus.
* Wähle "Pumpen-Passwort" und gib das Passwort ein. (Default password is 1234)
* Falls du willst, dass Aaps Basalraten über 200% einstellen kann, musst du “Benutze verlängerten Bolus für hohe temp. Basalraten” aktivieren. Das bedeutet aber, dass während eines verlängerten Mahlzeitenbolus nicht mit hohen temporären Basalraten loopen kannst.
* In Preferences under DanaR pump settings you can change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).
* Set basal step on pump to 0.01 U/h
* Enable extended boluses on pump