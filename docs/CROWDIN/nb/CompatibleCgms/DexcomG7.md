# Dexcom G7, ONE+ og Stelo


## Grunnleggende først

Merk at G7-, ONE+- og Stelo-systemene, i motsetning til G6, ikke jevner ut verdiene, verken i appen eller i mottakeren. Mer om dette finner du [her](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Les anbefalingene for [utjevningsmetode](../CompatibleCgms/SmoothingBloodGlucoseData.md) for Dexcom G7/ONE+/Stelo
```

## 1. xDrip (direkte tilkobling til G7, ONE+ eller Stelo)

- xDrip kobler seg til sensoren selv: Avinstaller Dexcom-appen, siden bare én app kan være koblet til sensoren. Hvis du vil beholde Dexcom-appen, bruk [xDrip som hjelpeapp (Companion App)](#DexcomG7-xdrip-companion-app) i stedet.
- Følg instruksjonene her: [xDrip G7, ONE+ og Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). En ny xDrip-versjon kreves – se den lenkede siden for laveste versjon.
- Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).

- Juster xDrip-innstillingene etter forklaringene på siden med xDrip-innstillinger: [xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (bare G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA er nå en svært gammel versjon av appen og kan ikke oppdateres. Ikke tilgjengelig for ONE+ eller Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) støtter lokal kringkasting til AAPS

-   Denne appen lar deg bruke Dexcom G7 med en hvilken som helst Android-smarttelefon.
-   Avinstaller den opprinnelige Dexcom-appen
-   Installer den nedlastede apk-filen
-   Skriv inn sensorkoden i den modifiserte appen
-   Etter kort tid bør BYODA fange opp signalet fra sensoren.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip som hjelpeapp – Companion App (G7, ONE+ og Stelo)

Den offisielle Dexcom-appen forblir koblet til sensoren. xDrip leser blodsukkerverdiene fra varslingene til Dexcom-appen og sender dem til **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Lese varslingene fra Dexcom-appen

- Behold Dexcom-appen installert og koblet til sensoren. Varslingene fra appen må være synlige: Ikke demp eller skjul dem.
- Last ned og installer [xDrip](https://github.com/NightscoutFoundation/xDrip). Bruk samme blodsukkerenhet i xDrip som i Dexcom-appen.
- I xDrip går du til **Settings** > **Hardware Data Source** og velger **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip ber om tillatelse til å lese varslinger. Trykk på **OK**, velg så **xDrip** i listen og slå på **Tillat tilgang til varsler**.

  ![Listen over varslingstilgang](../images/xDrip_Companion_NotificationAccess1.png)

- Hvis **Tillat tilgang til varsler** er nedtonet (*Styrt av begrenset innstilling*), blokkerer Android det fordi xDrip ikke ble installert fra Play Store:

  ![Varslingstilgang styrt av begrenset innstilling](../images/xDrip_Companion_Restricted.png)

  Åpne appinfo for xDrip (trykk og hold på xDrip-ikonet > **Appinfo**), trykk på menyen med tre prikker øverst til høyre og velg **Tillat begrensede innstillinger**. Gå så tilbake til skjermen for varslingstilgang og tillat den.

  ![Appinfo: Tillat begrensede innstillinger](../images/xDrip_Companion_AllowRestricted.png)

  ![Varslingstilgang tillatt for xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Målingene vises i xDrip når Dexcom-appen viser en ny verdi. Hvis ingenting vises, kan det hende du må starte en sensor i xDrip: Dette påvirker ikke den virkelige sensoren. Stelo gir en måling hvert 15. minutt i denne modusen.

### Companion Bluetooth (G7)

Når Dexcom-appen er koblet til en G7-sensor, kan xDrip også lytte til målingene som sensoren sender til Dexcom-appen over Bluetooth. xDrip kobler seg ikke sammen med sensoren, og du trenger ikke skrive inn sensorkoden: Dexcom-appen beholder kontrollen.

Med **Companion Bluetooth** får xDrip nøyaktig tid og trend for hver måling fra sensoren, i stedet for tidspunktet da varslingen kom, og fyller inn hull fra når telefonen var utenfor rekkevidde (backfill).

- I xDrip går du til **Settings** > **Less common settings** > **Bluetooth Settings** og slår på **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Dette fungerer ikke på alle telefoner og Android-versjoner. Slå det av hvis du ser problemer.
- Hvis en gammel Dexcom-sensor fortsatt ligger i telefonens Bluetooth-liste, kan xDrip komme til å lytte til feil sensor: Gå til Android **Innstillinger** > **Tilkoblede enheter** og glem sensorer du ikke bruker lenger.
- Companion Bluetooth er laget for G7. Med ONE+ og Stelo må du bruke varslingene.

### Konfigurasjon i AAPS

- Velg xDrip i [**Konfigurasjon → BS-kilde**](#Config-Builder-bg-source).
- Juster xDrip-innstillingene etter forklaringene på siden med xDrip-innstillinger: [xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 og ONE+)

Versjon 9.0 eller nyere kreves

- Deaktiver appen som tidligere var koblet til sensoren: Avinstaller appen eller bruk «Tvungen stopp» (Force Stop). Slå av tillatelsen «Enheter i nærheten» (Nearby Devices) i appens innstillinger. Begrens appens batteribruk.

- Glem sensoren i Bluetooth-innstillingene: Finn sensoren under sammenkoblede enheter i Android-innstillingene og velg «Glem». Navnet på Dexcom G7-sensorer begynner med DXCM.

- Unngå forstyrrelser fra andre sensorer: Hold gamle Dexcom-sensorer utenfor Bluetooth-rekkevidde.

- Koble G7-sensoren til Juggluco: Åpne Juggluco → Left menu (venstre meny) → Photo (bilde). Skann datamatrisekoden på applikatoren til G7-sensoren. Vent i opptil 5 minutter til Juggluco finner sensoren.

- Krav for sammenkobling: Godta å koble sensoren sammen med Juggluco. Pass på at skjermen ikke er låst under sammenkoblingen. Hvis sammenkoblingen mislykkes, vent 5 minutter før du prøver igjen.

- Unntak: Wear OS-klokker kan koble seg sammen uten at du trykker på en godta-knapp.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

Den offisielle Dexcom-appen forblir koblet til sensoren. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

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

- Behold Dexcom-appen installert og koblet til sensoren.
- Make sure the Dexcom app shows the current glucose value in its notification. Varslingene fra appen må være synlige: Ikke demp eller skjul dem.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfigurasjon i AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Gå så tilbake til skjermen for varslingstilgang og tillat den.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
