# Dexcom G6 și ONE

## Elemente de bază

-   Urmați recomandarea generală privind igiena și setarea senzorului de glicemie [aici](../CompatibleCgms/GeneralCGMRecommendation.md).

## Sugestii generale pentru buclă cu G6 și ONE

- Transmițătorii recenți se numesc Firefly. Senzorii nu pot fi reporniți fără a scoate transmițătorul, acesta nu se poate reseta, și nici nu generează date neprelucrate.

- Dacă reporniți senzorii, asigurați-vă că sunteți pregătit să îi calibrați și să urmăriți cu atenție variațiile.

- Preîmbibarea G6/ONE cu calibrarea din fabrică e probabil să determine variații ale rezultatelor. Dacă faceți preinserare, atunci pentru a obține cele mai bune rezultate, probabil că va trebui să calibrați senzorul.

Citiți mai multe in [articolul](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicat de către Tim Street la [www.diabettech.com](https://www.diabettech.com).

## Dacă utilizați G6 sau ONE cu xDrip

- Dacă nu este deja configurat, descărcați [xDrip](https://github.com/NightscoutFoundation/xDrip) și ajustați setările urmând [pagina de setări xDrip](../CompatibleCgms/xDrip.md).
- Selectați xDrip în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).
- Transmițătorii G6 și ONE pot fi conectați simultan la receptorul Dexcom (sau alternativ la pompa t:slim) și la o aplicație de pe telefonul dumneavoastră.
- Când folosiți xDrip ca receptor, dezinstalați mai întâi aplicația Dexcom. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Dacă utilizați G6 cu construită cu Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA este acum o versiune foarte veche a aplicației și nu poate fi actualizată.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permite transmisia locală către AAPS și/sau xDrip

-   Această aplicație vă permite să folosiți senzorul Dexcom G6 cu orice telefon inteligent Android.
-   Dezinstalați aplicația Dexcom originală sau aplicația Dexcom modificată dacă ați folosit anterior una dintre aceste aplicații (**nu opriți** senzorul care rulează în prezent)
-   Instalați apk-ul descărcat
-   Introduceți codul senzorului și numărul de serie al transmițătorului în aplicația modificată.
-   În setările telefonului mergeți la aplicații > Dexcom G6 > permisiuni > permisiuni suplimentare și apăsați pe 'Acces aplicație Dexcom'.
-   După scurt timp, BYODA ar trebui să recepționeze semnalul transmițătorului.

### Setări pentru AAPS

-   Selectați **BYODA** în [**Configurație → Sursă glicemie**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Setări pentru xDrip

-   Selectați '640G/Eversense' ca sursă de date.
-   Command 'start sensor' must be performed in xDrip in order to receive values. Acest lucru nu vă va afecta senzorul actual controlat de Build Your Own Dexcom App.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. Its notifications must stay visible: do not silence or hide them.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configurarea în AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Then go back to the notification access screen and allow it.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Depanare pentru G6 și ONE

### Depanare specifică Dexcom G6/ONE

-   Derulați în jos până la **Depanare** [aici](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Depanare generală

Depanarea generală pentru CGM se găsește [aici](#general-cgm-troubleshooting).

### Transmițător nou cu senzor în funcțiune

Dacă se întâmplă să schimbați transmițătorul în timpul unei sesiuni de senzor care funcționează, ați putea încerca să înlăturați transmițătorul fără a deteriora senzorul. Un videoclip poate fi găsit [aici](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Dacă optați pentru [această soluție](https://youtu.be/tx-kTsrkNUM) în schimb, trebuie să aveți grijă să evitați [deteriorarea contactelor senzorului](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) cu bandeleta.
