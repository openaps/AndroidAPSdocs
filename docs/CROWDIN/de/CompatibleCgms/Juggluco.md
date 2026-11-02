# Juggluco Einstellungen

Sofern noch nicht eingerichtet, lade als erstes [Juggluco](https://www.juggluco.nl/Juggluco/download.html) herunter.

Um Deinen Sensor zu verbinden, führe diese [Einzelschritte](https://www.juggluco.nl/Jugglucohelp/introhelp.html) durch.

## Grundlegende Einstellungen für alle CGM-Systeme

### Nightscout Upload ausschalten

Neben AAPS sollte keine andere App Daten (Glukosewerte und Behandlungen) zu Nightscout hochladen.

Deaktiviere in Juggluco jeden aktiven Nightscout-Uploader.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco zu AAPS

Juggluco kann Glukosewerte direkt an AAPS senden. Nutzt Du einen [vertrauenswürdigen Sensor](#GettingStarted-TrustedBGSource), kann die Option „SMB immer aktivieren“ eingeschaltet werden.

Die Sensoren Libre 2/2+/3/3+ senden jede Minute Messwerte an AAPS. Die Neuberechnungen in AAPS erfolgen dennoch nicht minütlich.

Aktiviere in Juggluco den xDrip+-Broadcast (nicht „Patched Libre“ aktivieren), bestätige und speicher die AAPS-Paketinformationen. Wähle xDrip in AAPS als BZ-Quelle aus.

Stelle sicher, dass eine ausreichende [Glättung](./SmoothingBloodGlucoseData.md) der Werte in AAPS erfolgt.

![Juggluco zu AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco zu xDrip

Juggluco kann Glukosewerte an xDrip schicken, die von da aus dann an AAPS gesendet werden.

Aktiviere in Juggluco „Patched Libre“ (xDrip+-Broadcast nicht aktivieren), bestätige und speicher die Dexdrip-Paketinformationen. Wähle xDrip in AAPS als BZ-Quelle aus.

Stelle bei Bedarf sicher, dass in AAPS eine ausreichende [Glättung](./SmoothingBloodGlucoseData.md) der Werte erfolgt. Bei einem Libre 2/2+/3/3+ Sensor mittelt xDrip die minütlichen Messwerte zu 5-Minuten-Werten und [glättet](#libre2-value-smoothing-raw-values) sie außerdem.

![Juggluco zu xDrip](../images/juggluco/Juggluco-xDrip+.png)
