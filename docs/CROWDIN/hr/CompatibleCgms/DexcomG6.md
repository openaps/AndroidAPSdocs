# Dexcom G6 i ONE

## Najprije osnove

-   Slijedite opće preporuke za higijenu CGM-a i postavljanje senzora [ovdje](../CompatibleCgms/GeneralCGMRecommendation.md).

## Opći savjeti za korištenje petlje s G6 i ONE

- Novi odašiljači zovu se Firefly. Senzori se ne mogu ponovno pokrenuti bez uklanjanja odašiljača, a sam odašiljač ne može se resetirati; ti odašiljači također ne daju sirove podatke.

- Ako ponovno pokrećete senzore, budite spremni na kalibraciju i pratite odstupanja.

- Namakanje G6/ONE unaprijed (pre-soak) uz tvorničku kalibraciju vjerojatno će dati odstupanja u rezultatima. Ako senzor namačete unaprijed (pre-soak), za najbolje rezultate vjerojatno ćete ga morati kalibrirati.

Više pročitajte u [članku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) koji je objavio Tim Street na [www.diabettech.com](https://www.diabettech.com).

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Odaberite xDrip u [**Konfiguracija → Izvor GUK-a**](#Config-Builder-bg-source).
- Odašiljači Dexcom G6 i ONE mogu istodobno biti povezani s Dexcomovim prijemnikom (ili umjesto njega s pumpom t:slim) i s jednom aplikacijom na vašem telefonu.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Ako koristite G6 s aplikacijom Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA je sada vrlo stara verzija aplikacije i ne može se ažurirati.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   Ova aplikacija omogućuje korištenje vašeg Dexcoma G6 s bilo kojim Android pametnim telefonom.
-   Deinstalirajte originalnu aplikaciju Dexcom ili izmijenjenu aplikaciju Dexcom ako ste prije koristili jednu od njih (**nemojte zaustaviti** senzor koji trenutno radi)
-   Instalirajte preuzeti apk
-   U izmijenjenoj aplikaciji unesite kôd senzora i serijski broj odašiljača.
-   U postavkama telefona idite na aplikacije > Dexcom G6 > dopuštenja > dodatna dopuštenja i pritisnite 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Postavke za AAPS

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   Kao izvor podataka odaberite '640G/Eversense'.
-   Command 'start sensor' must be performed in xDrip in order to receive values. To neće utjecati na vaš trenutni senzor kojim upravlja Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Njezine obavijesti moraju ostati vidljive: nemojte ih utišati ni sakriti.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfiguracija u AAPS-u

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Zatim se vratite na zaslon pristupa obavijestima i dopustite ga.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Rješavanje problema s G6 i ONE

### Rješavanje problema specifičnih za Dexcom G6/ONE

-   Pomaknite se prema dolje do **Troubleshooting** (rješavanje problema) [ovdje](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Opće rješavanje problema

Opće rješavanje problema za CGM-ove možete pronaći [ovdje](#general-cgm-troubleshooting).

### Novi odašiljač sa senzorom koji već radi

Ako slučajno mijenjate odašiljač tijekom sesije senzora koji radi, možete pokušati ukloniti odašiljač bez oštećenja nosača senzora. Videozapis možete pronaći [ovdje](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Ako umjesto toga odaberete [ovo rješenje](https://youtu.be/tx-kTsrkNUM), morate paziti da trakom ne [oštetite kontakte senzora](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
