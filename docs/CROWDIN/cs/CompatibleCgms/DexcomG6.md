# Dexcom G6 a ONE

## Nejdříve základy

-   Obecná doporučení pro hygienu CGM a zavádění senzoru najdete [zde](../CompatibleCgms/GeneralCGMRecommendation.md).

## Obecné rady pro smyčku s G6 a ONE

- Novější vysílače se nazývají Firefly. Senzory nelze restartovat bez odebrání vysílače, který sám resetovat nelze, a navíc negenerují surová data.

- Pokud senzory restartujete, buďte připraveni kalibrovat a sledujte odchylky.

- Nastřelení senzoru G6/ONE s předstihem (pre-soak) při tovární kalibraci pravděpodobně povede k odchylkám v hodnotách. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.

Více si přečtěte v [článku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který publikoval Tim Street na [www.diabettech.com](https://www.diabettech.com).

## Pokud používáte G6 nebo ONE s xDrip

- Pokud ještě nemáte xDrip nastavený, stáhněte si [xDrip](https://github.com/NightscoutFoundation/xDrip) a upravte jeho nastavení podle stránky [Nastavení xDrip](../CompatibleCgms/xDrip.md).
- Vyberte xDrip v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).
- Vysílače Dexcom G6 a ONE mohou být současně spojeny s přijímačem Dexcom (nebo místo něj s pumpou t:slim) a s jednou aplikací v telefonu.
- Když používáte xDrip jako přijímač, nejdříve odinstalujte aplikaci Dexcom. **Nemůžete mít s vysílačem spojený xDrip a aplikaci Dexcom současně!**
- Pokud potřebujete Clarity a chcete využít alarmy xDrip, použijte [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (jen G6) s místním vysíláním do xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip se současnými vysílači vždy používá [nativní algoritmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) vysílače; není důvod ho vypínat. [Preventivní restarty](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) fungují jen se starými vysílači (firmware 1.6.5.25 nebo starší), kde jsou potřeba, aby se senzor nezastavil po 10 dnech; novější vysílače (Firefly) je ignorují. Než se o restart pokusíte, přečtěte si [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Vše, co se týká samotného senzoru a vysílače, je popsáno na [stránce xDrip pro Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Pokud chcete použít G6 s vlastní vytvořenou upravenou Dexcom aplikací

```{admonition} Old app version
:class: warning
Dexcom BYODA je nyní velmi stará verze aplikace a nelze ji aktualizovat.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podporuje místní vysílání do AAPS a/nebo xDrip

-   Tato aplikace vám umožní používat vysílač Dexcom G6 s libovolným telefonem s Androidem.
-   Odinstalujte originální aplikaci Dexcom nebo upravenou aplikaci Dexcom, pokud jste některou z nich dříve používali (aktuálně běžící senzor **nezastavujte**)
-   Nainstalujte stažený soubor apk
-   V upravené aplikaci zadejte kód senzoru a sériové číslo vysílače.
-   V nastavení telefonu jděte do Aplikace > Dexcom G6 > Oprávnění > Další oprávnění a stiskněte „Access Dexcom app“.
-   Po krátké době by BYODA měla zachytit signál vysílače.

### Nastavení pro AAPS

-   Vyberte **BYODA** v [**Konfigurace → Zdroj glykémie**](#Config-Builder-bg-source).

-   Pokud nedostáváte žádné hodnoty, vyberte jakýkoli jiný zdroj dat a pak znovu vyberte **BYODA**, aby se znovu zobrazila žádost o oprávnění, která propojí AAPS a vysílání z BYODA.

### Nastavení xDrip

-   Jako zdroj dat vyberte '640G/Eversense'.
-   Abyste dostávali hodnoty, musíte v xDrip provést příkaz „start sensor“. Toto neovlivní aktuální senzor ovládaný vaší upravenou Dexcom aplikací.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. Její oznámení musí zůstat viditelná: neztlumujte je ani je neskrývejte.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfigurace v AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Pak se vraťte na obrazovku přístupu k oznámením a přístup povolte.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Řešení problémů s G6 a ONE

### Řešení problémů specifických pro Dexcom G6/ONE

-   Sjeďte dolů k části **Troubleshooting** [zde](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Obecné řešení problémů

Obecné řešení problémů s CGM najdete [zde](#general-cgm-troubleshooting).

### Nový vysílač se spuštěným senzorem

Pokud se stane, že budete měnit vysílač na spuštěném senzoru, pokuste se odejmout vysílač, aniž byste poškodili samotný senzor. Video najdete [zde](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Pokud místo toho zvolíte [toto řešení](https://youtu.be/tx-kTsrkNUM), musíte dávat pozor, abyste proužkem [nepoškodili kontakty senzoru](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
