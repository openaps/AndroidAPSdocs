# Juggluco settings

If not already set up, then download [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Segui le [istruzioni](https://www.juggluco.nl/Jugglucohelp/introhelp.html) per collegare il tuo sensore.

## Impostazioni di base per tutti i sistemi CGM

### Disable Nightscout uploader

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Disable any active uploader to Nightscout in Juggluco.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Da Juggluco ad AAPS

Juggluco can send blood glucose directly to AAPS, enabling SMBs always if you are using a [trusted sensor](#GettingStarted-TrustedBGSource).

When using a Libre 2/2+/3/3+ sensor, minute-by-minute readings will be sent to AAPS but will not trigger minute-by-minute calculations in AAPS.

Enable xDrip broadcast in Juggluco (do not enable Patched Libre), confirm and save the AAPS package information. Select the xDrip BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS.

![Da Juggluco ad AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Da Juggluco a xDrip

Juggluco può inviare la glicemia a xDrip, che poi la invia ad AAPS.

Enable Patched Libre in Juggluco (do not enable xDrip broadcast), confirm and save the dexdrip package information. Select the xDrip BG data source in AAPS.

Se serve, applica uno [smoothing](./SmoothingBloodGlucoseData.md) sufficiente in AAPS. Con un sensore Libre 2/2+/3/3+, xDrip fa la media delle letture di ogni minuto per ottenere letture ogni 5 minuti e [applica anche uno smoothing](#libre2-value-smoothing-raw-values).

![Da Juggluco a xDrip](../images/juggluco/Juggluco-xDrip+.png)
