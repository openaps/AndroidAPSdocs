# Dexcom G6 en ONE

## Algemeen

-   Volg de algemene aanbevelingen voor CGM-hygiëne en het plaatsen van de sensor [hier](../CompatibleCgms/GeneralCGMRecommendation.md).

## Algemene tips voor loopen met G6 en ONE

- Recente zenders heten Firefly. Sensoren kunnen niet opnieuw gestart worden zonder de zender te verwijderen. De zender zelf kan niet gereset worden. Deze zenders maken ook geen ruwe data.

- Als je sensoren opnieuw start, zorg dan dat je klaar bent om te kalibreren en let goed op afwijkingen.

- Pre-soaken van de G6/ONE met fabriekskalibratie geeft waarschijnlijk afwijkende resultaten. Wanneer je Pre-soakt is het waarschijnlijk het beste om de sensor te kalibreren.

Lees meer in het [artikel](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) van Tim Street op [www.diabettech.com](https://www.diabettech.com).

## Wanneer je de G6 of ONE gebruikt met xDrip

- Als je dat nog niet gedaan hebt: download [xDrip](https://github.com/NightscoutFoundation/xDrip) en pas de instellingen aan volgens de [pagina met xDrip-instellingen](../CompatibleCgms/xDrip.md).
- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
- De zenders van de Dexcom G6 en ONE kunnen tegelijk verbonden zijn met de Dexcom-ontvanger (of de t:slim-pomp) en met één app op je telefoon.
- Als je xDrip als ontvanger gebruikt, verwijder dan eerst de Dexcom-app. **Je kunt xDrip en de Dexcom-app niet tegelijk met de zender verbinden!**
- Als je Clarity nodig hebt en ook de alarmen van xDrip wilt gebruiken, gebruik dan de [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (alleen G6) met lokale broadcast naar xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- Met de huidige zenders gebruikt xDrip altijd het [eigen algoritme van de zender](https://navid200.github.io/xDrip/docs/Native-Algorithm.html); er is geen reden om dit uit te zetten. [Preventieve herstarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) werken alleen bij oude zenders (firmware 1.6.5.25 of ouder). Daar zijn ze nodig om te voorkomen dat de sensor na 10 dagen stopt. Recente (Firefly) zenders negeren ze. Lees [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) voordat je een herstart probeert.
- Alles over de sensor en de zender zelf staat op de [xDrip Dexcom-pagina](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Wanneer je de G6 gebruikt met de Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA is nu een zeer oude versie van de app en kan niet bijgewerkt worden.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) ondersteunt lokale broadcast naar AAPS en/of xDrip

-   Met deze app kun je jouw Dexcom G6 gebruiken met elke Android smartphone.
-   Verwijder de originele Dexcom-app of de aangepaste Dexcom-app als je een van die apps eerder gebruikte (**stop niet** de sensor die nu loopt)
-   Installeer de gedownloade apk
-   Voer de sensorcode en het serienummer van de zender in de aangepaste app in.
-   Ga in de instellingen van de telefoon naar apps > Dexcom G6 > machtigingen > extra machtigingen en tik op 'Access Dexcom app'.
-   After a short time BYODA should pick up the transmitter signal.

### Instellingen voor AAPS

-   Selecteer **BYODA** in [**Configuratie → BG bron**](#Config-Builder-bg-source).

-   Als je geen waarden ontvangt, selecteer dan een andere gegevensbron en selecteer daarna opnieuw **BYODA**. Dan vraagt AAPS om de machtigingen om de verbinding tussen AAPS en de BYODA-broadcast te maken.

### Instellingen voor xDrip

-   Selecteer '640G/Eversense' als gegevensbron.
-   Het commando 'start sensor' moet in xDrip uitgevoerd worden om waarden te ontvangen. Dit heeft geen invloed op je huidige sensor, die door de Build Your Own Dexcom App wordt bestuurd.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. De notificaties moeten zichtbaar blijven: zet ze niet op stil en verberg ze niet.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuratie in AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Ga dan terug naar het scherm voor toegang tot meldingen en sta de toegang toe.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Probleemoplossing G6 en ONE

### Probleemoplossing specifiek voor Dexcom G6/ONE

-   Scrol omlaag naar **Troubleshooting** [hier](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Algemene probleemoplossing

Algemene probleemoplossing voor CGM's vind je [hier](#general-cgm-troubleshooting).

### Nieuwe zender met lopende sensor

Als je de zender wilt wisselen tijdens een lopende sensorsessie, kun je proberen de zender te verwijderen zonder de sensorhouder te beschadigen. Een video vind je [hier](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Als je in plaats daarvan kiest voor [deze oplossing](https://youtu.be/tx-kTsrkNUM), moet je voorzichtig zijn om met de strip de [contacten van de sensor niet te beschadigen](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
