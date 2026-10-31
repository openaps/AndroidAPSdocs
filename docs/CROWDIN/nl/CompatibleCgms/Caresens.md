# CareSens

Er zijn verschillende manieren om CareSens-gegevens met **AAPS** te gebruiken:

- xDrip
- Juggluco

**Notitie:** Je hebt de Sens365 follower-app niet nodig om met AAPS te verbinden.

## 1. xDrip

1. Installeer de officiële CareSens-app en stel deze in.
2. Ga in de CareSens-app naar instellingen -> Manage Data and Connections -> zet de schakelaar xDrip aan. Zet desgewenst de gegevensverbindingen naar CareLevo, DIA:CONN, CloudLoop enz. uit onder "others".

![Gegevensverbindingen in de CareSens-app](../images/eversenseapp-dataconnections.png)


2. Installeer xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip).
3. Ga in xDrip naar instellingen -> hardware-gegevensbron en kies `Companion App` als gegevensbron.
4. Selecteer in **AAPS** xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).


## 2. Juggluco

1. Installeer de Juggluco-app.
2. Open in Juggluco het linkermenu en kies `Photo`
3. Scan de QR-code op de verpakking van de sensor.
4. Zorg in het linkermenu -> settings -> exchange data dat xDrip broadcast aan staat.
5. Selecteer in **AAPS** xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
