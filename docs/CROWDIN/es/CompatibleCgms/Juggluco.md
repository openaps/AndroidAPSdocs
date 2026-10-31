# Ajustes de Juggluco

Si aún no lo tienes configurado, descarga [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Sigue las [instrucciones](https://www.juggluco.nl/Jugglucohelp/introhelp.html) para conectar tu sensor.

## Ajustes básicos para todos los sistemas MCG

### Desactivar la subida a Nightscout

No debes dejar que ninguna otra app suba datos (glucosa y tratamientos) a Nightscout.

Desactiva en Juggluco cualquier subida activa a Nightscout.

![Desactivar la subida a Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## De Juggluco a AAPS

Juggluco puede enviar la glucosa directamente a AAPS, lo que permite usar SMB siempre si usas un [sensor de confianza](#GettingStarted-TrustedBGSource).

Con un sensor Libre 2/2+/3/3+, se envían lecturas cada minuto a AAPS, pero no provocan cálculos cada minuto en AAPS.

Activa xDrip broadcast en Juggluco (no actives Patched Libre), confirma y guarda la información del paquete de AAPS. Selecciona xDrip como fuente de datos de glucosa en AAPS.

Aplica un [suavizado](./SmoothingBloodGlucoseData.md) suficiente en AAPS.

![De Juggluco a AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## De Juggluco a xDrip

Juggluco puede enviar la glucosa a xDrip, que luego la envía a AAPS.

Activa Patched Libre en Juggluco (no actives xDrip broadcast), confirma y guarda la información del paquete de dexdrip. Selecciona xDrip como fuente de datos de glucosa en AAPS.

Aplica un [suavizado](./SmoothingBloodGlucoseData.md) suficiente en AAPS si es necesario. Con un sensor Libre 2/2+/3/3+, xDrip hace la media de las lecturas de cada minuto para obtener lecturas cada 5 minutos y [también las suaviza](#libre2-value-smoothing-raw-values).

![De Juggluco a xDrip](../images/juggluco/Juggluco-xDrip+.png)
