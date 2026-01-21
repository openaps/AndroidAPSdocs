# Juggluco Einstellungen

Sofern noch nicht eingerichtet, lade als erstes [Juggluco](https://www.juggluco.nl/Juggluco/download.html) herunter.

Um Deinen Sensor zu verbinden, führe diese [Einzelschritte](https://www.juggluco.nl/Jugglucohelp/introhelp.html) durch.

## Grundlegende Einstellungen für alle CGM-Systeme

### Nightscout Upload ausschalten

Ab der AAPS-Version 3.2, sollte neben AAPS keine andere App Daten (Glukosewerte und Behandlungsdaten) zu Nightscout hochladen.

Deaktiviere in Juggluco jeden aktiven Nightscout-Uploader.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco zu AAPS

Juggluco kann Glukosewerte direkt an AAPS senden. Nutzt Du einen [vertrauenswürdigen Sensor](#GettingStarted-TrustedBGSource), kann die Option „SMB immer aktivieren“ eingeschaltet werden.

Die Sensoren Libre 2/2+/3/3+ senden jede Minute Messwerte an AAPS. Die Neuberechnungen in AAPS erfolgen dennoch nicht minütlich.

Aktiviere in Juggluco den xDrip+-Broadcast (nicht „Patched Libre“ aktivieren), bestätige und speicher die AAPS-Paketinformationen. Wähle xDrip+ in AAPS als BZ-Quelle aus.

Stelle sicher, dass eine ausreichende [Glättung](./SmoothingBloodGlucoseData.md) der Werte in AAPS erfolgt.

![Juggluco zu AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco zu xDrip+

Juggluco kann Glukosewerte an xDrip+ schicken, die von da aus dann an AAPS gesendet werden.

Aktiviere in Juggluco „Patched Libre“ (xDrip+-Broadcast nicht aktivieren), bestätige und speicher die Dexdrip-Paketinformationen. Wähle xDrip+ in AAPS als BZ-Quelle aus.

Wenn nötig, sorge in AAPS für eine ausreichende [Glättung](./SmoothingBloodGlucoseData.md). Nutzt Du die Sensoren Libre 2/2+/3/3+, wird xDrip+ die minütlichen Glukosewerte auf 5 Minuten mitteln und auch [glätten](#libre2-value-smoothing-raw-values).

![Juggluco zu xDrip+](../images/juggluco/Juggluco-xDrip+.png)
