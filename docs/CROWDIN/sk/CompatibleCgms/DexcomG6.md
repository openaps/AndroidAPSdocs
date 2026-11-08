# Dexcom G6 a ONE

## Najprv základy

-   Riaďte sa všeobecnými odporúčaniami pre hygienu CGM a zavádzanie senzora [tu](../CompatibleCgms/GeneralCGMRecommendation.md).

## Všeobecné rady pre používanie okruhu s G6 a ONE

- Novšie vysielače sa volajú Firefly. Senzory sa nedajú reštartovať bez vybratia vysielača, ktorý sám nemožno resetovať, a tieto vysielače ani neposkytujú surové (raw) dáta.

- Ak senzory reštartujete, buďte pripravení kalibrovať a sledujte odchýlky.

- Zavedenie G6/ONE s továrenskou kalibráciou vopred (pre-soak) pravdepodobne povedie ku kolísaniu výsledkov. Ak senzor zavádzate vopred (pre-soak), na dosiahnutie najlepších výsledkov ho pravdepodobne budete musieť kalibrovať.

Viac sa dočítate v [článku](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), ktorý publikoval Tim Street na [www.diabettech.com](https://www.diabettech.com).

## Ak používate G6 alebo ONE s xDrip

- Ak ho ešte nemáte, stiahnite si [xDrip](https://github.com/NightscoutFoundation/xDrip) a upravte jeho nastavenia podľa stránky [Nastavenia xDrip](../CompatibleCgms/xDrip.md).
- Vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).
- Vysielače Dexcom G6 a ONE môžu byť súčasne pripojené k prijímaču Dexcom (alebo k pumpe t:slim) a k jednej aplikácii v telefóne.
- Keď používate xDrip ako prijímač, najprv odinštalujte aplikáciu Dexcom. **Nemôžete naraz pripojiť xDrip aj aplikáciu Dexcom k vysielaču!**
- Ak potrebujete Clarity a chcete využívať alarmy xDrip, použite [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (iba G6) s lokálnym vysielaním do xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- Pri súčasných vysielačoch xDrip vždy používa [natívny algoritmus](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) vysielača; nie je dôvod ho vypínať. [Preventívne reštarty](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) fungujú iba so starými vysielačmi (firmvér 1.6.5.25 alebo starší), kde sú potrebné, aby sa senzor nezastavil po 10 dňoch; novšie vysielače (Firefly) ich ignorujú. Pred akýmkoľvek reštartom si pozrite [Reštart senzora](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html).
- Všetko, čo sa týka samotného senzora a vysielača, je popísané na [stránke xDrip pre Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Ak používate G6 s aplikáciou Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA je teraz veľmi stará verzia aplikácie a nedá sa aktualizovať.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podporuje lokálne vysielanie do AAPS a/alebo xDrip

-   Táto aplikácia vám umožní používať Dexcom G6 s akýmkoľvek smartfónom s Androidom.
-   Odinštalujte pôvodnú aplikáciu Dexcom alebo upravenú aplikáciu Dexcom, ak ste niektorú z nich predtým používali (aktuálne bežiaci senzor **nezastavujte**)
-   Nainštalujte stiahnutý súbor apk
-   V upravenej aplikácii zadajte kód senzora a sériové číslo vysielača.
-   V nastaveniach telefónu choďte do aplikácie > Dexcom G6 > povolenia > ďalšie povolenia a stlačte 'Access Dexcom app'.
-   Po krátkom čase by BYODA mala zachytiť signál vysielača.

### Nastavenia pre AAPS

-   Vyberte **BYODA** v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).

-   Ak nedostávate žiadne hodnoty, vyberte akýkoľvek iný zdroj dát a potom znova vyberte **BYODA**, aby sa znova vyžiadali povolenia na vytvorenie spojenia medzi AAPS a vysielaním BYODA.

### Nastavenia pre xDrip

-   Ako zdroj dát vyberte '640G/Eversense'.
-   Aby ste dostávali hodnoty, musíte v xDrip vykonať príkaz 'start sensor'. Nebude to mať vplyv na váš aktuálny senzor, ktorý ovláda Build Your Own Dexcom App.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. Jej notifikácie musia zostať viditeľné: nestíšte ich ani ich neskrývajte.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfigurácia v AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Potom sa vráťte na obrazovku prístupu k upozorneniam a povoľte ho.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Riešenie problémov s G6 a ONE

### Riešenie problémov špecifických pre Dexcom G6/ONE

-   Posuňte sa nadol na časť **Troubleshooting** [tu](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Všeobecné riešenie problémov

Všeobecné riešenie problémov s CGM nájdete [tu](#general-cgm-troubleshooting).

### Nový vysielač s bežiacim senzorom

Ak potrebujete vymeniť vysielač počas bežiacej relácie senzora, môžete skúsiť vysielač vybrať bez poškodenia držiaka senzora. Video nájdete [tu](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Ak sa namiesto toho rozhodnete pre [toto riešenie](https://youtu.be/tx-kTsrkNUM), musíte dávať pozor, aby ste pásikom [nepoškodili kontakty senzora](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html).
