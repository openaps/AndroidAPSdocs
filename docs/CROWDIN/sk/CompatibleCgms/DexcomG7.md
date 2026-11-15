# Dexcom G7, ONE+ a Stelo


## Základné informácie vopred

Je dôležité vedieť, že systémy G7, ONE+ a Stelo na rozdiel od G6 hodnoty nevyhladzujú, ani v aplikácii, ani v prijímači. Viac podrobností nájdete [tu](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Prečítajte si odporúčania v časti [Vyhladzovanie údajov glykémie](../CompatibleCgms/SmoothingBloodGlucoseData.md), ktoré použiť pre Dexcom G7/ONE+/Stelo
```

## 1. xDrip (priame pripojenie k G7, ONE+ alebo Stelo)

- xDrip sa pripája priamo k senzoru: odinštalujte aplikáciu Dexcom, pretože k senzoru sa môže pripojiť iba jedna aplikácia. Ak si chcete ponechať aplikáciu Dexcom, použite namiesto toho [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Postupujte podľa pokynov tu: [xDrip G7, ONE+ a Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Vyžaduje sa novšie vydanie xDrip – minimálnu verziu nájdete na odkazovanej stránke.
- Vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).

- Upravte nastavenia xDrip podľa vysvetlení na stránke [Nastavenia xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (iba G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA je teraz veľmi stará verzia aplikácie a nedá sa aktualizovať. Nie je dostupné pre ONE+ ani Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) podporuje lokálne vysielanie do AAPS

-   Táto aplikácia vám umožní používať Dexcom G7 s akýmkoľvek smartfónom s Androidom.
-   Odinštalujte pôvodnú aplikáciu Dexcom
-   Nainštalujte stiahnutý súbor apk
-   Zadajte kód senzora v upravenej aplikácii
-   Po krátkom čase by BYODA mala zachytiť signál senzora.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ a Stelo)

Oficiálna aplikácia Dexcom zostáva pripojená k senzoru. xDrip číta hodnoty glykémie z notifikácií aplikácie Dexcom a posiela ich do **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** does not consider xDrip in Companion App mode a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs are not allowed all the time.

To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG7-notification-reader).
```

### Čítanie notifikácií aplikácie Dexcom

- Aplikáciu Dexcom nechajte nainštalovanú a pripojenú k senzoru. Jej notifikácie musia zostať viditeľné: nestíšte ich ani ich neskrývajte.
- Stiahnite a nainštalujte [xDrip](https://github.com/NightscoutFoundation/xDrip). V xDrip používajte rovnaké jednotky glykémie ako v aplikácii Dexcom.
- V xDrip choďte do **Settings** > **Hardware Data Source** a vyberte **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip požiada o povolenie čítať notifikácie. Ťuknite na **OK**, potom v zozname vyberte **xDrip** a zapnite **Povoliť prístup k upozorneniam** (Allow notification access).

  ![Zoznam prístupu k upozorneniam](../images/xDrip_Companion_NotificationAccess1.png)

- Ak je **Povoliť prístup k upozorneniam** sivé (*Ovládané obmedzeným nastavením* – Controlled by Restricted Setting), Android ho blokuje, pretože xDrip nebol nainštalovaný z Obchodu Play:

  ![Prístup k upozorneniam ovládaný obmedzeným nastavením](../images/xDrip_Companion_Restricted.png)

  Otvorte informácie o aplikácii xDrip (dlho podržte ikonu xDrip > **Informácie o aplikácii**), ťuknite na ponuku s tromi bodkami vpravo hore a vyberte **Povoliť obmedzené nastavenia** (Allow restricted settings). Potom sa vráťte na obrazovku prístupu k upozorneniam a povoľte ho.

  ![Informácie o aplikácii: Povoliť obmedzené nastavenia](../images/xDrip_Companion_AllowRestricted.png)

  ![Prístup k upozorneniam povolený pre xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Hodnoty sa v xDrip objavia, keď aplikácia Dexcom zobrazí novú hodnotu. Ak sa nič nezobrazí, možno budete musieť spustiť senzor v xDrip: na skutočný senzor to nemá žiadny vplyv. Stelo v tomto režime poskytuje hodnotu každých 15 minút.

### Companion Bluetooth (G7)

Keď je aplikácia Dexcom pripojená k senzoru G7, xDrip môže tiež počúvať hodnoty, ktoré senzor posiela aplikácii Dexcom cez Bluetooth. xDrip sa so senzorom nepáruje a nemusíte zadávať kód senzora: aplikácia Dexcom zostáva pod kontrolou.

S **Companion Bluetooth** dostáva xDrip zo senzora presný čas a trend každej hodnoty namiesto času, keď sa objavila notifikácia, a dopĺňa medzery, keď bol telefón mimo dosahu (backfill).

- V xDrip choďte do **Settings** > **Less common settings** > **Bluetooth Settings** a zapnite **Companion Bluetooth**.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Nefunguje to na všetkých telefónoch a verziách Androidu. Ak uvidíte problémy, vypnite to.
- Ak je v zozname Bluetooth v telefóne stále starý senzor Dexcom, xDrip môže počúvať nesprávny senzor: v Androide v **Nastavenia** > **Pripojené zariadenia** odstráňte senzory, ktoré už nepoužívate.
- Companion Bluetooth je určené pre G7. Pri ONE+ a Stelo sa spoliehajte na notifikácie.

### Konfigurácia v AAPS

- Vyberte xDrip v [**Konfigurácia → Zdroj glykémie**](#Config-Builder-bg-source).
- Upravte nastavenia xDrip podľa vysvetlení na stránke [Nastavenia xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 a ONE+)

Vyžaduje sa verzia 9.0+

- Vypnite aplikáciu, ktorá bola predtým pripojená k senzoru: odinštalujte ju alebo použite „Vynútiť zastavenie“ (Force Stop). V nastaveniach aplikácie vypnite povolenie „Zariadenia v okolí“ (Nearby Devices). Obmedzte využitie batérie aplikáciou.

- Odstráňte senzor v nastaveniach Bluetooth: v nastaveniach Androidu nájdite senzor medzi spárovanými zariadeniami a zvoľte „Zabudnúť“ (Forget). Názvy senzorov Dexcom G7 začínajú na DXCM.

- Zabráňte rušeniu inými senzormi: staré senzory Dexcom držte mimo dosahu Bluetooth.

- Pripojte senzor G7 k Juggluco: otvorte Juggluco → ľavá ponuka → Photo. Naskenujte dátovú maticu (data matrix) na aplikátore senzora G7. Počkajte až 5 minút, kým Juggluco nájde senzor.

- Podmienky párovania: súhlaste so spárovaním senzora s Juggluco. Počas párovania nesmie byť obrazovka zamknutá. Ak párovanie zlyhá, počkajte 5 minút a skúste to znova.

- Výnimka: hodinky s Wear OS sa môžu spárovať bez stlačenia tlačidla súhlasu.

(DexcomG7-notification-reader)=

## 5. Notification Reader (G7, ONE+ and Stelo)

Oficiálna aplikácia Dexcom zostáva pripojená k senzoru. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

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

- Aplikáciu Dexcom nechajte nainštalovanú a pripojenú k senzoru.
- Make sure the Dexcom app shows the current glucose value in its notification. Jej notifikácie musia zostať viditeľné: nestíšte ich ani ich neskrývajte.
- Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Konfigurácia v AAPS

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

  ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

- Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

  ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

- Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

  ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

  Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

  ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

- If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Potom sa vráťte na obrazovku prístupu k upozorneniam a povoľte ho.
- Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```
