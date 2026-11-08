# Dexcom G7, ONE+ e Stelo


## Fundamental in advance

Noteworthy is the fact that the G7, ONE+ and Stelo systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. More details about this [here](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Read [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) suggestions to use for Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direct connection to G7, ONE+ or Stelo)

- xDrip connects to the sensor itself: uninstall the Dexcom app, as only one app can connect to the sensor. To keep the Dexcom app, use [xDrip Companion App](#DexcomG7-xdrip-companion-app) instead.
- Segui le istruzioni qui: [xDrip G7, ONE+ e Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). A recent xDrip release is required — see the linked page for the minimum version.
- Seleziona xDrip in [**Configurazione → Sorgente Glicemia**](#Config-Builder-bg-source).

- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (solo G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA is now a very old version of the app and cannot be updated. Non disponibile per ONE+ o Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS

-   Questa app ti permette di usare il tuo Dexcom G7 con qualsiasi smartphone Android.
-   Disinstalla l'app Dexcom originale
-   Installa l'apk scaricato
-   Inserisci il codice del sensore nell'app modificata
-   Dopo poco tempo BYODA dovrebbe ricevere il segnale del sensore.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ e Stelo)

The official Dexcom app stays connected to the sensor. xDrip reads the glucose values from the notifications of the Dexcom app and sends them to **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Leggere le notifiche dell'app Dexcom

- Tieni l'app Dexcom installata e collegata al sensore. Le sue notifiche devono restare visibili: non silenziarle e non nasconderle.
- Scarica e installa [xDrip](https://github.com/NightscoutFoundation/xDrip). Use the same glucose units in xDrip as in the Dexcom app.
- In xDrip vai su **Settings** > **Hardware Data Source** e seleziona **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip chiede l'autorizzazione a leggere le notifiche. Tap **OK**, then select **xDrip** in the list and turn on **Allow notification access**.

  ![Elenco dell'accesso alle notifiche](../images/xDrip_Companion_NotificationAccess1.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because xDrip was not installed from the Play Store:

  ![Accesso alle notifiche controllato da un'impostazione con restrizioni](../images/xDrip_Companion_Restricted.png)

  Open the xDrip app info (long press the xDrip icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Poi torna alla schermata dell'accesso alle notifiche e consentilo.

  ![App info: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![Accesso alle notifiche consentito per xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Le letture compaiono in xDrip quando l'app Dexcom mostra un nuovo valore. Se non compare nulla, potresti dover avviare un sensore in xDrip: questo non ha effetto sul sensore reale. In questa modalità Stelo dà una lettura ogni 15 minuti.

### Companion Bluetooth (G7)

When the Dexcom app is connected to a G7 sensor, xDrip can also listen to the readings the sensor sends to the Dexcom app over Bluetooth. xDrip does not pair with the sensor and you do not need to enter the sensor code: the Dexcom app stays in control.

With **Companion Bluetooth**, xDrip gets the exact time and trend of each reading from the sensor, instead of the time the notification appeared, and fills gaps when the phone was out of range (backfill).

- In xDrip vai su **Settings** > **Less common settings** > **Bluetooth Settings** e attiva **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- This does not work on all phones and Android versions. Disable it if you see problems.
- If an old Dexcom sensor is still in the phone's Bluetooth list, xDrip might listen to the wrong one: in Android **Settings** > **Connected devices**, forget sensors you no longer use.
- Companion Bluetooth is made for the G7. With ONE+ and Stelo, rely on notifications.

### Configurazione in AAPS

- Seleziona xDrip in [**Configurazione → Sorgente Glicemia**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 e ONE+)

Version 9.0+ required

- Disable the app previously connected to the sensor: Uninstall the app or use "Force Stop." Disattiva l'autorizzazione "Dispositivi nelle vicinanze" nelle impostazioni dell'app. Restrict the app's battery usage.

- Forget the sensor in Bluetooth settings: In Android settings, find the sensor in bonded devices and select "Forget." I nomi dei sensori Dexcom G7 iniziano con DXCM.

- Avoid interference from other sensors: Keep old Dexcom sensors out of Bluetooth range.

- Collega il sensore G7 a Juggluco: apri Juggluco → menu a sinistra → Photo. Scan the data matrix on the G7 sensor's applicator. Wait up to 5 minutes for Juggluco to find the sensor.

- Pairing requirements: Agree to pair the sensor with Juggluco. Ensure the screen isn’t locked during pairing. If pairing fails, wait 5 minutes before trying again.

- Exception: Wear OS watches can bond without pressing an agree button.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

The official Dexcom app stays connected to the sensor. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

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

- Tieni l'app Dexcom installata e collegata al sensore.
- Make sure the Dexcom app shows the current glucose value in its notification. Le sue notifiche devono restare visibili: non silenziarle e non nasconderle.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configurazione in AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Poi torna alla schermata dell'accesso alle notifiche e consentilo.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
