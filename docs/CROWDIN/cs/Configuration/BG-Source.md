# Zdroj glykémie

## Pro uživatele Dexcom  


### Pokud používáte G5 nebo G6 s aplikací xdrip+  


* Není-li xDrip již nastaven, pak stáhněte [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V Xdripu vyberte nastavení -> Inter-app settings - > Lokální odesílání dat a vyberte zapnout.
* V Xdripu vyberte nastavení -> Inter-app settings - > Accept Treatments a vyberte vypnout.
* Pokud chcete aby AndroidAPS bylo schopné kalibrovat, tak v xdrip vyberte nastavení -> Inter-app settings -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v Xdrip nastavení položku -> méně časté nastavení -> Advanced Calibration.
* Vyberte xdrip v ConfigBuilder (nastavení v AndroidAPS).

### Pokud používáte G5 nebo G6 s upravenou aplikací Dexcom  


* Stáhněte si apk z <https://github.com/dexcomapp/dexcomapp>, kde si vyberete verzi dle potřeby (mg/dl nebo mmol/l, G5 nebo G6).
* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený apk
* Spusťte senzor
* Vyberte aplikaci DexcomG5 (upravenou) v Konfiguraci.

### Pokud používáte G4 pomocí OTG kabelu ('tradiční' Nightscout)  


* Pokud jste tak ještě neučinili, stáhněte si Nightscout Uploader aplikaci z obchodu Play a postupujte podle pokynů na [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* V nastavení AndroidAPS zadejte Nightscout adresu a API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.

## Pro uživatele Libre s Bluetooth čtečkou  


Abyste mohli používat Libre jako CGM senzor, který získává nové hodnoty glykémie každých 5 minut, je potřeba nejprve koupit NFC-Bluetooth adaptér, např.:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### Pokud používáte xdrip…  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci xDrip a postupujte podle pokynů v části [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) nebo [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Hardware](https://bluetoolz.de/wordpress/)).
* V xDripu vyberte nastavení -> Komunikace mezi aplikacemi - > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte nastavení -> Komunikace mezi aplikacemi - > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte nastavení -> Komunikace mezi aplikacemi -> Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení -> Méně častá nastavení -> Rozšířené kalibrace.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Pro nativní režim G5 v xDripu vyberte Nastavení > Nahrávání do cloudu > Nahrávání před API (REST) > Extra options > Append source info to device a vyberte zapnout.

### Pokud používáte Glimp…  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci Glimp a postupujte podle instrukcí v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Glimp.

## Pro uživatele Eversense  


Nejjednodušší způsob, jak používat Eversense s AndroidAPS, je nainstalovat upravenou [aplikaci Eversense](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (nejdříve musíte odinstalovat tu originální).

**Varování: odinstalováním staré aplikace se vaše místní historické údaje starší než jeden týden ztratí!**

Chcete-li dostat svá data do AndroidAPS, musíte nainstalovat aplikaci [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) a povolit „Odesílání do AAPS a xDrip“ v aplikaci ESEL a na kartě [Konfigurace](../Configuration/Config-Builder.md) v AndroidAPS vybrat jako zdroj glykémií možnost „MM640g“. Vzhledem k tomu, že data glykémií z Eversense někdy mohou obsahovat velký šum, je dobré povolit „Vyhlazování dat“ v aplikaci ESEL, což je lepším řešením než povolení možnosti „Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot“ v AAPS.

Další pokyny k používání aplikace xDrip se systémem Eversense najdete [zde](https://github.com/BernhardRo/Esel/tree/master/apk).

## Pro uživatele MM640g nebo MM630g  


* Pokud jste tak ještě neučinili, stáhněte si aplikaci [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) a postupujte podle pokynů uvedených v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* V aplikaci 600 Series Uploader přejděte na Nastavení > Odesílat do xdrip+ a zvolte ON (zaškrtněte).
* Na kartě Konfigurace (nastavení AndroidAPS) vyberte MM640g.

## Pro uživatele PocTech CT-100  


* Nainstalujte aplikaci PocTech
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte aplikaci PocTech.

## Pro uživatele ostatních CGM nahrávaných do Nightscoutu  


Pokud máte nějaké jiné CGM, které odesílá data do [Nightscoutu](http://www.nightscout.info), pak  


* V nastavení AndroidAPS zadejte Nightscout adresu a API secret.
* Vyberte NSClient v Konfiguraci AndroidAPS.

# Obecná doporučení ohledně CGM

## Opatření při používání CGM

Ať už používáte kterýkoli systém CGM, pokud chcete používat kalibraci z krve, je třeba dodržovat několik velmi jednoduchých pravidel, bez ohledu na to, zda používáte nebo nepoužíváte DIY software CGM nebo oficiální aplikace.

* Ujistěte se, že máte čisté ruce i používaná zařízení.
* Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
* Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá) 
* Kalibrujte dostatečně často – pokud používáte oficiální aplikace, budete na to v pravidelných intervalech upozorněni. Pro DIY systémy to nemusí platit a měli byste být opatrní, pokud byste pokračovali v používání CGM bez kalibrací.
* Je-li to možné, kalibrujte jak pomocí nižších hodnot (4–5 mmol/l), tak také pomocí vyšších (7–9 mmol/l). CGM tak bude mít lepší rozsah referenčních hodnot.

## Dexcom G6 a DIY systémy

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech:

* If you are using the native data with the calibration code in xDrip or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](http://www.diabettech.com).