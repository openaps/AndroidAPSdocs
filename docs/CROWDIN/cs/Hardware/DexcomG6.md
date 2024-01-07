# Dexcom G6

## Základní nastavení

-   Postupujte podle obecných opatření při používání CGM a doporučení pro nastavení senzoru [zde](../Hardware/GeneralCGMRecommendation.md).
-   For G6 transmitters manufactured after fall/end of 2018 please make sure to use one of the [latest nightly built xDrip+ versions](https://github.com/NightscoutFoundation/xDrip/releases). Those transmitters have a new firmware and latest stable version of xDrip+ (2019/01/10) cannot deal with it.

## Obecné tipy pro použití smyčky s G6

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

-   Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip+ nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
-   Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci.
-   Jestliže senzory restartujete, udělejte to bez tovární kalibrace, aby byly výsledky 11 a 12 den co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
-   Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
-   Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si [kompletní článek](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) který sepsal Tim Street na adrese [www.diabettech.com](https://www.diabettech.com).

## Používáte-li G6 s aplikací xDrip+

-   Vysílač Dexcom G6 může být připojen současně k přijímači Dexcom (nebo pumpě t:slim) a zároveň k vašemu telefonu.
-   Pokud používáte xDrip+ jako přijímač, nejprve odinstalujte aplikaci Dexcom. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up then download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Nastavte xDrip+ podle popisu konfigurace na stránce \<../Configuration/xdrip.md>\`\_\_
-   Pokud AAPS nedostává hodnoty glykémie, když je telefon v režimu letadlo, použijte volbu 'Identify receiver' tak, jak je popsáno v [popisu nastavení xDrip+](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Pokud chcete použít G6 s vlastní vytvořenou upravenou Dexcom aplikací

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
-   Tato aplikace vám umožní používat vysílač Dexcom G6 s libovolným telefonem s Androidem.
-   Odinstalujte originální Dexcom aplikaci nebo upravenou Dexcom aplikaci, pokud jste již dříve používali kteroukoli z nich.
-   Nainstalujte stažený apk
-   Enter sensor code and transmitter serial no. in patched app.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   Po krátkém čase by BYODA měla zachytit signál vysílače. (If not you will have to stop sensor and start new one.)

### Settings for AAPS

-   V konfiguraci vyberte 'Dexcom aplikace (upravená)'.
-   Pokud neobdržíte žádné hodnoty, vyberte jiný zdroj dat, následně opět vyberte 'Dexcom aplikace (upravená)', abyste spustili proces získání oprávnění pro navázání lokálního spojení mezi AAPS a upravenou Dexcom aplikací.

### Nastavení pro xDrip+

-   Jako zdroj dat vyberte '640G/Eversense'.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Poradce při potížích s G6

### Dexcom G6 konkrétní řešení problémů

-   Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
-   Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
-   xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
-   Wait at least 15 min. between stopping and starting a sensor.
-   Nepoužívejte zadání dřívějšího času. Answer question "Did you insert it today?" always with "Yes, today".
-   Nepovolujte "restartování senzoru" při nastavení nového senzoru
-   Nespuštějte nový senzor dokud nejsou zobrazeny následující informace na obrazovce > Stav G5/G6-> PhoneServiceState:
    -   Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
    -   Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

### Obecné řešení problémů

General Troubleshoothing for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### Nový vysílač se spuštěným senzorem

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM>.
