# Eversense

There are four different methods to access the readings from Eversense:

- ESEL en mode Companion
- ESEL en mode Patched (aplicació modificada)
- xDrip companion app
- Notification Reader (built into **AAPS**)

## ESEL

Obteniu i instal·leu l'[aplicació ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) seguint aquestes [instruccions](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- In ESEL, open the three dots menu (⋮) at the top right and select **Settings** (also available from the ☰ menu). In the settings:
  - Activeu "Send to AAPS and xDrip"
  - **Desactiveu** "Send to Nightscout"
  - Com que les dades de glucèmia d'Eversense poden ser sorolloses, es recomana activar "Smooth Data" a ESEL.

![ESEL Broadcast](../images/ESEL.png)

### Mode Companion

Llegeix les dades de les notificacions de l'aplicació Eversense (funciona amb l'aplicació Eversense normal, disponible des de la versió 3.0.1 d'ESEL).

1. Feu servir l'aplicació oficial Eversense de Google Play Store
   - Opcional, però necessari per recuperar les dades que falten (backfill): inicieu la sessió al vostre compte d'Eversense
   - A Sync, activeu Auto synchronization
2. Configuració d'ESEL:
   - Desactiveu l'opció "Get data from patched Eversense App"
   - Per recuperar les dades que falten (backfill): activeu "Fill missing data from eversensedms.com"
   - Com a adreça electrònica i contrasenya, introduïu les dades d'inici de sessió d'Eversense
3. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

### Aplicació Eversense modificada

 Necessita una versió modificada de l'aplicació Eversense (funciona totalment fora de línia, també la recuperació de dades que falten).

1. Desinstal·leu l'aplicació Eversense (Atenció: perdreu les vostres dades històriques locals de més d'una setmana!)

2. Instal·leu l'[aplicació Eversense modificada](https://cr4ck3d3v3r53n53.club) i feu-la servir com descriu el proveïdor

   - Obriu l'aplicació Eversense, inicieu la sessió, connecteu-vos al transmissor i feu-la servir com l'aplicació normal.

3. Configuració d'ESEL:

   - Activeu l'opció "Get data from patched Eversense App"



![ESEL Broadcast](../images/ESELpatch.png)

If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

## xDrip

xDrip can read notifications from the vendor app, like ESEL does. No es poden recuperar les dades que falten.

- Download and install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip “Companion App” must be selected.
- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).
- Ajusteu la configuració de xDrip segons les explicacions de la pàgina [Configuració de xDrip](../CompatibleCgms/xDrip.md).
- Activeu el [Suavitzat exponencial](../CompatibleCgms/SmoothingBloodGlucoseData.md) a AAPS.

## Lector de notificacions

**AAPS** can read the glucose values directly from the notifications posted by the official Eversense app, without any other app in between. No es poden recuperar les dades que falten.

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and grant **AAPS** access to notifications when asked.
- Make sure the Eversense app shows the current glucose value in its notification.

```{warning}
La freqüència de lectura dels valors de glucèmia no sempre és de 5 minuts i hi pot haver duplicats.
```