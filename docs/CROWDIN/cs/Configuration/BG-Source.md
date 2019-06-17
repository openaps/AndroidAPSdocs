# Obecná doporučení ohledně CGM

## Opatření při používání CGM

Ať už používáte kterýkoli systém CGM, pokud chcete používat kalibraci z krve, je třeba dodržovat několik velmi jednoduchých pravidel, bez ohledu na to, zda používáte nebo nepoužíváte DIY software CGM nebo oficiální aplikace.

* Ujistěte se, že máte čisté ruce i používaná zařízení.
* Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
* Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá). 
* Kalibrujte dostatečně často – pokud používáte oficiální aplikace, budete na to v pravidelných intervalech upozorněni. Pro DIY systémy to nemusí platit a měli byste být opatrní, pokud byste pokračovali v používání CGM bez kalibrací.
* Je-li to možné, kalibrujte jak pomocí nižších hodnot (4–5 mmol/l), tak také pomocí vyšších (7–9 mmol/l). CGM tak bude mít lepší rozsah referenčních hodnot.

# Zdroj glykémie

## Pro uživatele Dexcom

### Dexcom G6: Obecné tipy pro používání smyčky

Viz [stránku Dexcom G6](../Configuration/Dexcom.md), kde najdete podrobnosti týkající se nastavení senzoru Dexcom G6 a řešení častých potíží s Dexcom G6.

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech:

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, buď použijte tovární kalibraci, aby byly výsledky v den 11 a 12 co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si [kompletní článek](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který sepsal Tim Street na adrese [www.diabettech.com](http://www.diabettech.com).

### Pokud používáte G6 aplikací xdrip+

* Pokud jste tak dosud neučinili, stáhněte si [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů v části Nightscout ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Upravte nastavení aplikace xDrip+ podle [Stránka s nastavením xDrip+](../Configuration/xdrip.md)

### Pokud používáte G5 s aplikací xdrip+

* Pokud jste tak dosud neučinili, stáhněte si aplikaci [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.

### Pokud používáte G5 nebo G6 s upravenou aplikací Dexcom  


* Stáhněte si apk z <https://github.com/dexcomapp/dexcomapp>, kde si vyberete verzi dle potřeby (mg/dl nebo mmol/l, G5 nebo G6).
* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený soubor apk
* Spusťte senzor
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte upravenou aplikaci DexcomG5.

### Pokud používáte G4 s OTG kabelem („tradiční“ Nightscout)…  


* Pokud jste tak ještě neučinili, stáhněte si aplikaci Nightscout Uploader z Google Play a postupujte podle pokynů v části [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* V nastavení AndroidAPS zadejte svojí Nightscout adresu a API secret.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte NSClient.

## Pro uživatele Libre s Bluetooth čtečkou  


Abyste mohli používat Libre jako CGM senzor, který získává nové hodnoty glykémie každých 5 minut, je potřeba nejprve koupit NFC-Bluetooth adaptér, např.:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) jako nástroj pro odečítání <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Pokud používáte xdrip…  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci xDrip a postupujte podle pokynů v části [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) nebo [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Hardware](https://bluetoolz.de/wordpress/)).
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* For settings in xDrip+ with screenshots see [xDrip+ settings page](../Configuration/xdrip.md)

### If using Glimp...  


* If not already set up then download Glimp and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

## For users of PocTech CT-100  


* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

## For users of other CGM uploaded to Nightscout  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* In AndroidAPS Preferences enter your Nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).