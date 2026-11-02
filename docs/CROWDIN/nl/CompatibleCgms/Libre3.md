# **Freestyle Libre 3** en 3+

De Freestyle Libre 3 (FSL3) heeft een speciale setup nodig om BG-waarden in AAPS te ontvangen. Er zijn twee manieren om waarden van de Freestyle Libre 3 (FSL3) in AAPS te krijgen.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

De methoden hieronder gebruiken de aparte app Juggluco. Deze methode gebruikt Juggluco om ruwe gegevens met een interval van 1 minuut van de sensor te ontvangen. Die worden dan doorgegeven aan xDrip of AAPS. Nieuwe sensoren kun je starten met de Libre 3 app of direct in Juggluco. De handleiding hieronder beschrijft hoe je een sensor start met de Juggluco app. Als de sensor is gestart terwijl je was ingelogd met een LibreView-account, kun je ook wisselen tussen Juggluco en de Libre 3 app als ontvanger.

Juggluco kan ook gegevens doorsturen naar LibreView om ze te delen met zorgverleners, als de sensor met de Libre 3 app is gestart.

In xDrip kun je de sensor kalibreren in het bereik van -40 mg/dl tot +20 mg/dl (-2,2 mmol/l tot +1,1 mmol/l), om verschillen tussen een vingerprikmeting en de sensorwaarden op te vangen.

## Methode 1: 1-minuutwaarden direct gebruiken
**AAPS** is gemaakt voor waarden met een interval van 5 minuten. Daarom heeft het verwerken van 1-minuutwaarden soms beperkingen.

Zie [hier](#juggluco-to-aaps).


## Methode 2: 1-minuutwaarden via xDrip omzetten naar 5-minuutwaarden
Deze methode gebruikt Juggluco om ruwe gegevens met een interval van 1 minuut van de sensor te ontvangen. Die worden doorgegeven aan xDrip, dat ze vloeiend maakt tot gegevens met een interval van 5 minuten en die doorgeeft aan AAPS.

### Stap 1: Juggluco instellen
Download en installeer de Juggluco app via [deze link](https://www.juggluco.nl/Juggluco/download.html). Volg de instructies [op deze pagina](https://www.juggluco.nl/Juggluco/libre3/)

Zorg dat je de glucosewaarden naar xDrip stuurt: in de instellingen van Juggluco kun je instellen dat Juggluco zijn glucosewaarden naar andere apps stuurt. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Stap 2: xDrip instellen

De bloedglucosewaarden worden ontvangen door de xDrip app op de smartphone.

- Als dat nog niet is gedaan, download dan [xDrip](https://github.com/NightscoutFoundation/xDrip) en volg de instructies op de [pagina met xDrip-instellingen](../CompatibleCgms/xDrip.md).
- Kies in xDrip "Libre2 (patched app)" als gegevensbron.
- Vul zo nodig "BgReading:d,xdrip libre_receiver:v" in onder Less Common Settings → Extra Logging Settings → Extra tags for logging. Dit logt extra foutmeldingen voor het oplossen van problemen.

![xDrip LibreLink-logging](../images/Libre2_Tags.png)

- Technisch gezien wordt de actuele bloedglucosewaarde elke minuut naar xDrip gestuurd. Een filter met gewogen gemiddelde berekent standaard een afgevlakte waarde over de laatste 25 minuten. Je kunt deze periode wijzigen in het menu NFC Scan features.

  → Hamburgermenu → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip geavanceerde instellingen Libre 2 & ruwe waarden](../images/xDrip_Libre3_Smooth.png)



### Stap 3: Sensor starten in xDrip

Start in xDrip de sensor met "Start Sensor" en "not today". Je hoeft de telefoon niet tegen de sensor te houden. "Start Sensor" start in feite geen enkele Libre 3 sensor fysiek en maakt ook op geen enkele manier contact met de sensor. Dit is alleen om xDrip te laten weten dat een nieuwe sensor bloedglucosewaarden levert. Voer zo mogelijk twee met bloed gemeten waarden in voor de eerste kalibratie. Nu zouden de bloedglucosewaarden elke 5 minuten in xDrip te zien moeten zijn. Overgeslagen waarden, bijvoorbeeld omdat je te ver van je telefoon was, worden niet achteraf aangevuld.

Wacht minstens 15–20 minuten als er nog steeds geen gegevens zijn.

Na een sensorwissel herkent xDrip automatisch de nieuwe sensor en wist het alle kalibratiegegevens. Je kunt je bloedglucose controleren na de activering en een nieuwe eerste kalibratie doen.

### Stap 4: AAPS instellen

- Zie [hier](#juggluco-to-xdrip) en kom daarna terug.

- Als **AAPS** geen BG-waarden ontvangt als de telefoon in vliegtuigmodus staat, gebruik dan "Identify receiver"
- Zet het vloeiend maken uit (dat doet xDrip al)

## Volgende sensorwissels

1. Open Juggluco en noteer het serienummer van de huidige sensor

![Libre serienummer](../images/libre3/step_13.jpg)

2. Scan nu gewoon je nieuwe sensor met de NFC-lezer van je telefoon. Juggluco toont een melding als het proces goed is gestart.
3. Als je klaar bent om de oude sensor te deactiveren, open dan het Juggluco-menu door ergens in de lege ruimte linksboven in het scherm te tikken.
4. Selecteer de verlopen sensor en tik op "Terminate"

![Sensor beëindigen](../images/libre3/step_14.jpg)

Let op: als twee sensoren actief zijn, stuurt Juggluco de nieuwste waarde van een van beide sensoren naar xDrip. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Als je de verkeerde sensor beëindigt, kun je die weer activeren door de sensor gewoon te scannen.

## Sensor wisselen tussen de Libre 3 app en de Juggluco app

Als de sensor is gestart terwijl je was ingelogd met een LibreView-account, kun je ook wisselen tussen Juggluco en de Libre 3 app als ontvanger. Daarvoor zijn de volgende stappen nodig:

1. Installeer de Libre 3 app uit de Google Play Store
2. Stel de Libre 3 app in met het LibreView-account waarmee de sensor is geactiveerd.
3. Forceer het stoppen van de Juggluco app in de Android-instellingen.
4. Tik in het Libre 3 menu op "Start Sensor", kies "Yes", "Next" en scan je sensor.
5. Na enkele minuten zouden de BG-waarden zichtbaar moeten zijn in de Libre 3 app.

Om van de Libre 3 app naar Juggluco te wisselen, moet je het stoppen van de Libre 3 app forceren via de Android-instellingen en dan verdergaan met stap 1 & 2.

(libre3-experiences-and-troubleshooting)=
## Problemen oplossen en andere tips

### Problemen oplossen met de verbinding Libre3 -> Juggluco

- Zorg dat je een recente versie van de Juggluco app gebruikt
- Controleer je instellingen volgens deze handleiding
- Soms moet je het stoppen van de Libre 3 app en van Juggluco forceren en ze opnieuw starten.
- Zet Bluetooth uit en weer aan
- Wacht even of probeer Juggluco te sluiten
- Oudere versies van Juggluco (lager dan 2.9.6) sturen latere gegevens van de Libre3 sensor niet door naar verbonden apparaten (bijv. Juggluco op Wear OS). Misschien moet je op "Resend data" tikken in de gepatchte Libre3 app (Juggluco-menu).

### Meer hulp

Originele instructies: [website van jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
