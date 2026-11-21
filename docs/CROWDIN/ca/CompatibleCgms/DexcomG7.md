# Dexcom G7, ONE+ i Stelo


## Coses fonamentals abans de començar

Cal destacar que els sistemes G7, ONE+ i Stelo, a diferència del G6, no suavitzen els valors, ni a l'aplicació ni al receptor. Més detalls sobre això [aquí](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Llegiu els suggeriments de [mètode de suavitzat](../CompatibleCgms/SmoothingBloodGlucoseData.md) per fer servir amb Dexcom G7/ONE+/Stelo
```

## 1. xDrip (connexió directa amb G7, ONE+ o Stelo)

- xDrip es connecta directament al sensor: desinstal·leu l'aplicació de Dexcom, perquè només una aplicació es pot connectar al sensor. Si voleu mantenir l'aplicació de Dexcom, feu servir l'[xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Seguiu les instruccions d'aquí: [xDrip G7, ONE+ i Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Cal una versió recent de xDrip: vegeu la pàgina enllaçada per saber la versió mínima.
- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).

- Ajusteu la configuració de xDrip segons les explicacions de la pàgina [Configuració de xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (només G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA ara és una versió molt antiga de l'aplicació i no es pot actualitzar. No està disponible per a ONE+ ni Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) admet l'enviament local (broadcast) a AAPS

-   Aquesta aplicació us permet fer servir el Dexcom G7 amb qualsevol telèfon Android.
-   Desinstal·leu l'aplicació original de Dexcom
-   Instal·leu l'apk descarregat
-   Introduïu el codi del sensor a l'aplicació modificada
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ i Stelo)

L'aplicació oficial de Dexcom continua connectada al sensor. xDrip llegeix els valors de glucèmia de les notificacions de l'aplicació de Dexcom i els envia a **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Llegir les notificacions de l'aplicació de Dexcom

- Mantingueu l'aplicació de Dexcom instal·lada i connectada al sensor. Les seves notificacions han de continuar visibles: no les silencieu ni les amagueu.
- Descarregueu i instal·leu [xDrip](https://github.com/NightscoutFoundation/xDrip). Feu servir a xDrip les mateixes unitats de glucèmia que a l'aplicació de Dexcom.
- A xDrip, aneu a **Settings** > **Hardware Data Source** i seleccioneu **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip demana permís per llegir les notificacions. Premeu **OK**, després seleccioneu **xDrip** a la llista i activeu **Permet l'accés a les notificacions**.

  ![Llista d'accés a les notificacions](../images/xDrip_Companion_NotificationAccess1.png)

- Si **Permet l'accés a les notificacions** apareix en gris (*Controlat per una configuració restringida* (Controlled by Restricted Setting)), Android el bloqueja perquè xDrip no s'ha instal·lat des de Play Store:

  ![Accés a les notificacions controlat per una configuració restringida](../images/xDrip_Companion_Restricted.png)

  Obriu la informació de l'aplicació xDrip (manteniu premuda la icona de xDrip > **Informació de l'aplicació**), premeu el menú de tres punts a la part superior dreta i seleccioneu **Permet la configuració restringida**. Després torneu a la pantalla d'accés a les notificacions i permeteu-lo.

  ![Informació de l'aplicació: Permet la configuració restringida](../images/xDrip_Companion_AllowRestricted.png)

  ![Accés a les notificacions permès per a xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Les lectures apareixen a xDrip quan l'aplicació de Dexcom mostra un valor nou. Si no apareix res, potser haureu d'iniciar un sensor a xDrip: això no afecta el sensor real. En aquest mode, Stelo dona una lectura cada 15 minuts.

### Companion Bluetooth (G7)

Quan l'aplicació de Dexcom està connectada a un sensor G7, xDrip també pot escoltar per Bluetooth les lectures que el sensor envia a l'aplicació de Dexcom. xDrip no s'emparella amb el sensor i no cal introduir el codi del sensor: l'aplicació de Dexcom continua tenint el control.

Amb **Companion Bluetooth**, xDrip obté del sensor l'hora exacta i la tendència de cada lectura, en lloc de l'hora en què va aparèixer la notificació, i omple els buits de quan el telèfon era fora d'abast (backfill).

- A xDrip, aneu a **Settings** > **Less common settings** > **Bluetooth Settings** i activeu **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Això no funciona a tots els telèfons ni a totes les versions d'Android. Desactiveu-ho si veieu problemes.
- Si un sensor Dexcom antic encara és a la llista de Bluetooth del telèfon, xDrip podria escoltar el sensor equivocat: a **Configuració** > **Dispositius connectats** d'Android, oblideu els sensors que ja no feu servir.
- Companion Bluetooth està fet per al G7. Amb ONE+ i Stelo, feu servir les notificacions.

### Configuració a AAPS

- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).
- Ajusteu la configuració de xDrip segons les explicacions de la pàgina [Configuració de xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 i ONE+)

Cal la versió 9.0 o posterior

- Desactiveu l'aplicació que estava connectada abans al sensor: desinstal·leu l'aplicació o feu servir «Força l'aturada». Desactiveu el permís «Dispositius propers» a la configuració de l'aplicació. Restringiu l'ús de la bateria de l'aplicació.

- Oblideu el sensor a la configuració del Bluetooth: a la configuració d'Android, cerqueu el sensor als dispositius vinculats i seleccioneu «Oblida». Els noms dels sensors Dexcom G7 comencen per DXCM.

- Eviteu interferències d'altres sensors: mantingueu els sensors Dexcom antics fora de l'abast del Bluetooth.

- Connecteu el sensor G7 a Juggluco: obriu Juggluco → menú esquerre → Photo. Escanegeu el codi data matrix de l'aplicador del sensor G7. Espereu fins a 5 minuts que Juggluco trobi el sensor.

- Requisits per a l'emparellament: accepteu emparellar el sensor amb Juggluco. Assegureu-vos que la pantalla no estigui bloquejada durant l'emparellament. Si l'emparellament falla, espereu 5 minuts abans de tornar-ho a provar.

- Excepció: els rellotges Wear OS es poden vincular sense prémer cap botó d'acceptar.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

L'aplicació oficial de Dexcom continua connectada al sensor. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G7, ONE+ and Stelo apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to the other methods on this page, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.
- Stelo gives a reading every 15 minutes.

### Set up the Dexcom app

- Mantingueu l'aplicació de Dexcom instal·lada i connectada al sensor.
- Make sure the Dexcom app shows the current glucose value in its notification. Les seves notificacions han de continuar visibles: no les silencieu ni les amagueu.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuració a AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Després torneu a la pantalla d'accés a les notificacions i permeteu-lo.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
