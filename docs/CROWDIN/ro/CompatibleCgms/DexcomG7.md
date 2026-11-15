# Dexcom G7, ONE+ și Stelo


## Elemente fundamentale în avans

Noteworthy is the fact that the G7, ONE+ and Stelo systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. Mai multe detalii despre acest lucru [aici](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Citiți [metoda de filtrare](../CompatibleCgms/SmoothingBloodGlucoseData.md) sugestiile pentru Dexcom G7/ONE+/Stelo
```

## 1. xDrip (conexiune directă la G7, ONE+ sau Stelo)

- xDrip connects to the sensor itself: uninstall the Dexcom app, as only one app can connect to the sensor. Pentru a păstra aplicația Dexcom, folosiți în schimb [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Urmați instrucțiunile de aici: [xDrip G7, ONE+ și Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). A recent xDrip release is required — see the linked page for the minimum version.
- Selectați xDrip în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).

- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (doar G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA este acum o versiune foarte veche a aplicației și nu poate fi actualizată. Not available for ONE+ or Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permite transmisia locală către AAPS

-   Această aplicație vă permite să utilizați Dexcom G7 cu orice smartphone Android.
-   Dezinstalați aplicația Dexcom originală
-   Instalați apk-ul descărcat
-   Introduceți codul senzorului în aplicația modificată
-   După scurt timp, BYODA ar trebui să recepționeze semnalul senzorului.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ și Stelo)

Aplicația oficială Dexcom rămâne conectată la senzor. xDrip reads the glucose values from the notifications of the Dexcom app and sends them to **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Citirea notificărilor aplicației Dexcom

- Păstrați aplicația Dexcom instalată și conectată la senzor. Its notifications must stay visible: do not silence or hide them.
- Descărcați și instalați [xDrip](https://github.com/NightscoutFoundation/xDrip). Folosiți în xDrip aceleași unități de glicemie ca în aplicația Dexcom.
- În xDrip, mergeți la **Settings** > **Hardware Data Source** și selectați **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip cere permisiunea de a citi notificările. Tap **OK**, then select **xDrip** in the list and turn on **Allow notification access**.

  ![Notification access list](../images/xDrip_Companion_NotificationAccess1.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because xDrip was not installed from the Play Store:

  ![Notification access controlled by restricted setting](../images/xDrip_Companion_Restricted.png)

  Open the xDrip app info (long press the xDrip icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.

  ![App info: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![Notification access allowed for xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Readings appear in xDrip when the Dexcom app shows a new value. If nothing appears, you may need to start a sensor in xDrip: this has no effect on the real sensor. Stelo gives a reading every 15 minutes in this mode.

### Companion Bluetooth (G7)

When the Dexcom app is connected to a G7 sensor, xDrip can also listen to the readings the sensor sends to the Dexcom app over Bluetooth. xDrip does not pair with the sensor and you do not need to enter the sensor code: the Dexcom app stays in control.

With **Companion Bluetooth**, xDrip gets the exact time and trend of each reading from the sensor, instead of the time the notification appeared, and fills gaps when the phone was out of range (backfill).

- În xDrip, mergeți la **Settings** > **Less common settings** > **Bluetooth Settings** și activați **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- This does not work on all phones and Android versions. Disable it if you see problems.
- If an old Dexcom sensor is still in the phone's Bluetooth list, xDrip might listen to the wrong one: in Android **Settings** > **Connected devices**, forget sensors you no longer use.
- Companion Bluetooth is made for the G7. With ONE+ and Stelo, rely on notifications.

### Configurarea în AAPS

- Selectați xDrip în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).
- Adjust the xDrip settings according to the explanations on the xDrip settings page [xDrip settings](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 și ONE+)

Versiunea 9.0+ necesară

- Dezactivați aplicația conectată anterior la senzor: Dezinstalați aplicația sau utilizați "Oprire forțată". Dezactivați permisiunea "Dispozitive apropiate" în setările aplicației. Restricționați utilizarea bateriei de către aplicație.

- Uitați senzorul în setările Bluetooth: În setările Android, găsiți senzorul în dispozitivele asociate și selectați "Uitați". Numele senzorilor Dexcom G7 încep cu DXCM.

- Evitați interferențele ale altor senzori: Păstrați senzorii Dexcom vechi în afara razei Bluetooth.

- Conectați senzorul G7 la Juggluco: Deschide Juggluco → Meniul Stânga → Foto. Scanați matricea de date de pe aplicatorul G7 al senzorului. Așteptați până la 5 minute pentru ca Juggluco să găsească senzorul.

- Cerințe de asociere: Acceptați împerecherea senzorului cu Juggluco. Asigurați-vă că ecranul nu este blocat în timpul asocierii. Dacă asocierea eșuează, așteptați 5 minute înainte de a încerca din nou.

- Excepție: Ceasurile cu Wear OS se pot asocia fără a apăsa un buton de acceptare.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

Aplicația oficială Dexcom rămâne conectată la senzor. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

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

- Păstrați aplicația Dexcom instalată și conectată la senzor.
- Make sure the Dexcom app shows the current glucose value in its notification. Its notifications must stay visible: do not silence or hide them.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configurarea în AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
