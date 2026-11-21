# Configuració de Juggluco

Si encara no el teniu configurat, descarregueu [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Seguiu les [instruccions](https://www.juggluco.nl/Jugglucohelp/introhelp.html) per connectar el vostre sensor.

## Configuració bàsica per a tots els sistemes CGM

### Desactivar l'enviament a Nightscout

You shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Desactiveu a Juggluco qualsevol enviament actiu a Nightscout.

![Desactivar l'enviament a Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## De Juggluco a AAPS

Juggluco pot enviar la glucèmia directament a AAPS. Si feu servir un [sensor de confiança](#GettingStarted-TrustedBGSource), això permet tenir els SMB sempre activats.

Amb un sensor Libre 2/2+/3/3+, les lectures de cada minut s'envien a AAPS, però AAPS no fa un càlcul cada minut.

Activeu xDrip broadcast a Juggluco (no activeu Patched Libre), confirmeu i deseu la informació del paquet d'AAPS. Select the xDrip BG data source in AAPS.

Apliqueu un [suavitzat](./SmoothingBloodGlucoseData.md) suficient a AAPS.

![De Juggluco a AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco to xDrip

Juggluco can send blood glucose to xDrip which will then send them to AAPS.

Activeu Patched Libre a Juggluco (no activeu xDrip broadcast), confirmeu i deseu la informació del paquet de dexdrip. Select the xDrip BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco to xDrip](../images/juggluco/Juggluco-xDrip+.png)
