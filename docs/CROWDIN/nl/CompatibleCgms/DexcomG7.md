# Dexcom G7, ONE+ en Stelo


## Vooraf belangrijk

Let op: de G7-, ONE+- en Stelo-systemen maken de waarden niet vloeiend, anders dan de G6. Dat geldt zowel voor de app als voor de ontvanger. Meer details hierover vind je [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Lees de suggesties voor de [methode voor vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md) die je kunt gebruiken voor Dexcom G7/ONE+/Stelo
```

## 1. xDrip (directe verbinding met G7, ONE+ of Stelo)

- xDrip maakt zelf verbinding met de sensor: verwijder de Dexcom-app, want maar één app kan met de sensor verbonden zijn. Wil je de Dexcom-app houden, gebruik dan de [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Volg de instructies hier: [xDrip G7, ONE+ en Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Je hebt een recente versie van xDrip nodig. Zie de gelinkte pagina voor de minimale versie.
- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).

- Pas de instellingen van xDrip aan volgens de uitleg op de pagina [xDrip-instellingen](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (alleen G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA is nu een zeer oude versie van de app en kan niet bijgewerkt worden. Niet beschikbaar voor ONE+ of Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) ondersteunt lokale broadcast naar AAPS

-   Met deze app kun je je Dexcom G7 gebruiken met elke Android-smartphone.
-   Verwijder de originele Dexcom-app
-   Installeer de gedownloade apk
-   Voer de sensorcode in de aangepaste (patched) app in
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ en Stelo)

De officiële Dexcom-app blijft met de sensor verbonden. xDrip leest de glucosewaarden uit de notificaties van de Dexcom-app en stuurt ze naar **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### De notificaties van de Dexcom-app lezen

- Houd de Dexcom-app geïnstalleerd en verbonden met de sensor. De notificaties moeten zichtbaar blijven: zet ze niet op stil en verberg ze niet.
- Download en installeer [xDrip](https://github.com/NightscoutFoundation/xDrip). Gebruik in xDrip dezelfde glucose-eenheden als in de Dexcom-app.
- Ga in xDrip naar **Settings** > **Hardware Data Source** en selecteer **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip vraagt toestemming om notificaties te lezen. Tik op **OK**, selecteer dan **xDrip** in de lijst en zet **Toegang tot meldingen toestaan** aan.

  ![Lijst met toegang tot meldingen](../images/xDrip_Companion_NotificationAccess1.png)

- Als **Toegang tot meldingen toestaan** grijs is (*Beheerd door beperkte instelling*), blokkeert Android dit omdat xDrip niet uit de Play Store is geïnstalleerd:

  ![Toegang tot meldingen beheerd door beperkte instelling](../images/xDrip_Companion_Restricted.png)

  Open de app-info van xDrip (druk lang op het xDrip-pictogram > **App-info**), tik rechtsboven op het menu met de drie puntjes en selecteer **Beperkte instellingen toestaan**. Ga dan terug naar het scherm voor toegang tot meldingen en sta de toegang toe.

  ![App-info: Beperkte instellingen toestaan](../images/xDrip_Companion_AllowRestricted.png)

  ![Toegang tot meldingen toegestaan voor xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Metingen verschijnen in xDrip als de Dexcom-app een nieuwe waarde toont. Verschijnt er niets, dan moet je misschien een sensor starten in xDrip: dit heeft geen effect op de echte sensor. Stelo geeft in deze modus elke 15 minuten een meting.

### Companion Bluetooth (G7)

Als de Dexcom-app met een G7-sensor verbonden is, kan xDrip ook meeluisteren naar de metingen die de sensor via Bluetooth naar de Dexcom-app stuurt. xDrip koppelt niet met de sensor en je hoeft de sensorcode niet in te voeren: de Dexcom-app houdt de controle.

Met **Companion Bluetooth** krijgt xDrip de exacte tijd en trend van elke meting van de sensor, in plaats van het moment waarop de notificatie verscheen. Ook vult xDrip gaten op als de telefoon buiten bereik was (backfill).

- Ga in xDrip naar **Settings** > **Less common settings** > **Bluetooth Settings** en zet **Companion Bluetooth** aan.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Dit werkt niet op alle telefoons en Android-versies. Zet het uit als je problemen ziet.
- Staat er nog een oude Dexcom-sensor in de Bluetooth-lijst van de telefoon, dan kan xDrip naar de verkeerde sensor luisteren: vergeet in Android **Instellingen** > **Verbonden apparaten** de sensoren die je niet meer gebruikt.
- Companion Bluetooth is gemaakt voor de G7. Vertrouw bij ONE+ en Stelo op de notificaties.

### Configuratie in AAPS

- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
- Pas de instellingen van xDrip aan volgens de uitleg op de pagina [xDrip-instellingen](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 en ONE+)

Versie 9.0+ nodig

- Schakel de app uit die eerder met de sensor verbonden was: verwijder de app of gebruik "Gedwongen stoppen". Zet de toestemming "Apparaten in de buurt" uit in de app-instellingen. Beperk het batterijgebruik van de app.

- Vergeet de sensor in de Bluetooth-instellingen: zoek in de Android-instellingen de sensor bij de gekoppelde apparaten en kies "Vergeten". De namen van Dexcom G7-sensoren beginnen met DXCM.

- Voorkom storing door andere sensoren: houd oude Dexcom-sensoren buiten het Bluetooth-bereik.

- Verbind de G7-sensor met Juggluco: open Juggluco → linker menu → Photo. Scan de datamatrix-code op de applicator van de G7-sensor. Wacht tot 5 minuten tot Juggluco de sensor vindt.

- Voorwaarden voor koppelen: ga akkoord met het koppelen van de sensor aan Juggluco. Zorg dat het scherm niet vergrendeld is tijdens het koppelen. Als het koppelen mislukt, wacht dan 5 minuten voordat je het opnieuw probeert.

- Uitzondering: Wear OS-horloges kunnen koppelen zonder op een akkoordknop te drukken.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

De officiële Dexcom-app blijft met de sensor verbonden. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

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

- Houd de Dexcom-app geïnstalleerd en verbonden met de sensor.
- Make sure the Dexcom app shows the current glucose value in its notification. De notificaties moeten zichtbaar blijven: zet ze niet op stil en verberg ze niet.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuratie in AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Ga dan terug naar het scherm voor toegang tot meldingen en sta de toegang toe.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
