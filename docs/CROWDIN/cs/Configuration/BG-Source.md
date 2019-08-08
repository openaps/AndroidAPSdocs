# Obecná doporučení ohledně CGM

## Opatření při používání CGM

Ať už používáte kterýkoli systém CGM, pokud chcete používat kalibraci z krve, je třeba dodržovat několik velmi jednoduchých pravidel, bez ohledu na to, zda používáte nebo nepoužíváte DIY software CGM nebo oficiální aplikace.

* Ujistěte se, že máte čisté ruce i používaná zařízení.
* Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
* Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá). 
* Kalibrujte dostatečně často – pokud používáte oficiální aplikace, budete na to v pravidelných intervalech upozorněni. Pro DIY systémy to nemusí platit a měli byste být opatrní, pokud byste pokračovali v používání CGM bez kalibrací.
* Je-li to možné, kalibrujte jak pomocí nižších hodnot (4–5 mmol/l), tak také pomocí vyšších (7–9 mmol/l). CGM tak bude mít lepší rozsah referenčních hodnot.

# Zdroj glykémie (BG source)

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
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Nastavení aplikace xDrip+ včetně snímků obrazovky viz [stránka s nastavením xDrip+](../Configuration/xdrip.md)

### Pokud používáte Glimp…  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci Glimp a postupujte podle instrukcí v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Glimp.

## Pro uživatele Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Varování: odinstalováním staré aplikace přijdete o své místní historické údaje starší než jeden týden!**

Chcete-li dostat svá data do AndroidAPS, musíte nainstalovat aplikaci [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) a povolit „Odesílání do AAPS a xDrip“ v aplikaci ESEL a na kartě [Konfigurace](../Configuration/Config-Builder.md) v AndroidAPS vybrat jako zdroj glykémií možnost „MM640g“. Vzhledem k tomu, že data glykémií z Eversense někdy mohou obsahovat velký šum, je dobré povolit „Vyhlazování dat“ v aplikaci ESEL, což je lepším řešením než povolení možnosti „Vždy používat krátkodobý průměrný rozdíl glykémií místo rozdílu posledních 2 hodnot“ v AAPS.

Další pokyny k používání aplikace xDrip se systémem Eversense najdete [zde](https://github.com/BernhardRo/Esel/tree/master/apk).

## Pro uživatele MM640g nebo MM630g  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) a postupujte podle pokynů uvedených v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* V aplikaci 600 Series Uploader přejděte na Nastavení > Odesílat do xdrip+ a zvolte ON (zaškrtněte).
* Na kartě Konfigurace (nastavení AndroidAPS) vyberte MM640g.

## Pro uživatele PocTech CT-100  


* Nainstalujte aplikaci PocTech
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte aplikaci PocTech.

## Pro uživatele ostatních CGM nahrávaných do Nightscoutu  


Pokud máte nějaký jiný systém CGM, který odesílá data do [Nightscoutu](http://www.nightscout.info), pak  


* V nastavení AndroidAPS zadejte svojí Nightscout adresu a API secret.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte NSClient.