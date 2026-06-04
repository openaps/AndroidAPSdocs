# CareSens

Es gibt verschiedene Möglichkeiten, die CareSens Daten mit **AAPS** zu nutzen:

- xDrip+
- Juggluco

**Hinweis:** Die Sens365 Follower-App wird für eine Verbindung zu AAPS nicht benötigt.

## 1. xDrip+

1. Installiere und richte die offizielle CareSens-App ein.
2. Gehe in der CareSens-App zu den Einstellungen -> Verwalten von Daten und Verbindungen -> und aktiviere den xDrip+-Schalter. Du kannst, wenn Du willst, die Datenverbindungen zu CareLevo, DIA:CONN, CloudLoop, etc. unter „Andere“ deaktivieren.

![CareSens App Data Connections](../images/eversenseapp-dataconnections.png)


2. Installiere xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. Gehe in xDrip+ zu den Einstellungen -> Datenquelle, wähle dort `Companion App` aus.
4. Wähle in **AAPS** xDrip+ unter [KONFIGURATION, BG Source](#Config-Builder-bg-source).


## 2. Juggluco

1. Installiere die Juggluco-App.
2. Öffne in Juggluco das linke Menü und wähle dort `Foto`
3. Scanne den QR-Code von der Sensor-Verpackung.
4. Schalte im linken Menü -> Einstellungen -> Datenaustausch den xDrip-Broadcast ein.
5. Wähle in **AAPS** xDrip+ unter [KONFIGURATION, BG Source](#Config-Builder-bg-source).
