# Juggluco settings

If not already set up, then download [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Follow the [instructions](https://www.juggluco.nl/Jugglucohelp/introhelp.html) to connect your sensor.

## Basic settings for all CGM systems

### Disable Nightscout uploader

אין לאפשר לאף אפליקציה אחרת להעלות נתונים (ערכי סוכר וטיפולים) ל־Nightscout.

Disable any active uploader to Nightscout in Juggluco.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco to AAPS

Juggluco can send blood glucose directly to AAPS, enabling SMBs always if you are using a [trusted sensor](#GettingStarted-TrustedBGSource).

When using a Libre 2/2+/3/3+ sensor, minute-by-minute readings will be sent to AAPS but will not trigger minute-by-minute calculations in AAPS.

Enable xDrip broadcast in Juggluco (do not enable Patched Libre), confirm and save the AAPS package information. בחרו ב־AAPS את xDrip כמקור ערכי הסוכר.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS.

![Juggluco to AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## מ־Juggluco ל־xDrip

Juggluco יכול לשלוח ערכי סוכר ל־xDrip, ו־xDrip ישלח אותם ל־AAPS.

Enable Patched Libre in Juggluco (do not enable xDrip broadcast), confirm and save the dexdrip package information. בחרו ב־AAPS את xDrip כמקור ערכי הסוכר.

במידת הצורך, החילו [החלקה](./SmoothingBloodGlucoseData.md) מספקת ב־AAPS. בשימוש בחיישן Libre 2/2+/3/3+, xDrip ממצע את הקריאות מדי דקה לקריאות של 5 דקות ו[גם מחליק](#libre2-value-smoothing-raw-values) אותן.

![מ־Juggluco ל־xDrip](../images/juggluco/Juggluco-xDrip+.png)
