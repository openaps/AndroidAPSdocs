**General CGM recommendations**

**CGM hygiene**

Whichever CGM system you are using, if you are going to use blood based calibration, then there are some very clear rules you should apply, whether or not you are using DIY CGM software or the official apps.

* Ujistěte se, že máte čisté ruce i používaná zařízení.
* Snažte se kalibrovat tehdy, když je vaše glykémie stabilní (rovná křivka po dobu 15–30 minut je obvykle dostatečná)
* Nekalibrujte, pokud se vaše glykémie pohybuje (stoupá nebo klesá). 
* Kalibrujte dostatečně často – pokud používáte oficiální aplikace, budete na to v pravidelných intervalech upozorněni. Pro DIY systémy to nemusí platit a měli byste být opatrní, pokud byste pokračovali v používání CGM bez kalibrací.
* Je-li to možné, kalibrujte jak pomocí nižších hodnot (4–5 mmol/l), tak také pomocí vyšších (7–9 mmol/l). CGM tak bude mít lepší rozsah referenčních hodnot.

# Zdroj glykémie (BG source)

## Smoothing blood glucose

AAPS funguje nejlépe, pokud údaje glykémií, které dostává, jsou nepřerušované a konzistentní. Některé funkce, jako je "Vždy povolit SMB" a "Povolit SMB po jídle" lze použít pouze s filtrovaným zdrojem glykémií.

### Dexcom G5 aplikace (upravená)

Používáte-li aplikaci upravenou aplikaci Dexcom G5 data jsou vyrovnaná a konsistentní. V tom případě nejsou žádná omezení v použití SMB.

### xDrip+ s Dexcom G5

Dostatečně plynulá data jsou doručena jedině v případě, že používáte xDrip G5 OB1 kolektor v nativním módu (OB1 collector in native mode).

### xDrip+ s Freestyle Libre

Při použití xDrip+ zdroje dat z Freestyle Libre nelze aktivovat funkce "Vždy povolit SMB" a "Povolit SMB po jídle" do SMB, protože hodnoty BG nejsou dostatečně vyrovnané. Existuje několik způsobů, jak snížit šum v BG datech.

**Smooth Sensor Noise.** v xDrip+ Nastavení > xDrip+ Nastavení zobrazení se ujistěte, že je Smooth Sensor Noise volba zapnutá. Tímto se xDrip+ pokusí vyhladit data s velkým šumem.

**Smooth Sensor Noise (Ultrasensitive).** Jestliže v xDrip+ stále vidíte data s velkým šumem, můžete použít agresivnější vyhlazování použitím nastavení Smooth Sensor Noise (Ultrasensitive). Tímto se xDrip+ pokusí použít vyhlazování i pro velmi nízké hodnoty detekovaného šumu. To provedete tak, že nejprve [povolíte Engineering mode v xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Pak jděte v xDrip+ do Nastavení > Nastavení zobrazení a zapněte Smooth Sensor Noise (Ultrasensitive).

## Pro uživatele Dexcom

### Dexcom G6: General hints for looping

See [Dexcom G6 page](../Configuration/Dexcom.md) for details on setting Dexcom G6 sensor and solutions for common difficulties with Dexcom G6.

Použití G6 může být o něco složitější, než se na první pohled zdá. Abyste ho mohli používat bezpečně, je třeba vědět o několika skutečnostech:

* Pokud používáte nativní data s kalibračním algoritmem aplikace xDrip nebo Spike, nejbezpečnější postup je zakázat preemptivní restartování senzoru.
* Pokud musíte preemptivní restarty používat, pak se ujistěte, že senzor zavádíte v takovou denní dobu, kdy můžete sledovat změny a v případě potřeby provést kalibraci. 
* Jestliže senzory restartujete, buď použijte tovární kalibraci, aby byly výsledky v den 11 a 12 co nejbezpečnější, nebo buďte připraveni provést kalibrace a sledujte odchylku.
* Nastřelení senzoru G6 předem v kombinaci s tovární kalibrací pravděpodobně povede k odchylkám ve výsledcích měření. Jestliže nastřelujete senzor s předstihem, pak jej pravděpodobně v zájmu co nejlepších výsledků bude nutné zkalibrovat.
* Jestliže nechcete sledovat změny, ke kterým může docházet, možná bude lepší přepnout na režim bez továrních kalibrací a používat systém jako G5.

Chcete-li se dozvědět další informace o podrobnostech a důvodech pro tato doporučení, přečtěte si [kompletní článek](http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/), který sepsal Tim Street na adrese [www.diabettech.com](http://www.diabettech.com).

### If using G6 with xdrip+

* Pokud jste tak dosud neučinili, stáhněte si [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů v části Nightscout ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Upravte nastavení aplikace xDrip+ podle [Stránka s nastavením xDrip+](../Configuration/xdrip.md)
* Pokud AAPS nedostává hodnoty glykémií, když telefon je režimu letadlo, použijte funkci `Identify receiver` jak se popisuje na [stánce nastavení xDrip+](../Configuration/xdrip.md).

### If using G5 with xdrip+

* Pokud jste tak dosud neučinili, stáhněte si aplikaci [xdrip](https://github.com/NightscoutFoundation/xDrip) a postupujte podle pokynů na Nightscoutu ([G4 bez share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 s share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Pokud AAPS nedostává hodnoty glykémií, když telefon je režimu letadlo, použijte funkci `Identify receiver` jak se popisuje na [stánce nastavení xDrip+](../Configuration/xdrip.md).

### If using G5 or G6 with patched Dexcom app

* Stáhněte si apk z <https://github.com/dexcomapp/dexcomapp>, kde si vyberete verzi dle potřeby (mg/dl nebo mmol/l, G5 nebo G6).
* Zastavte senzor a odinstalujte původní aplikaci Dexcom, pokud jste tak ještě neučinili.
* Nainstalujte stažený soubor apk
* Spusťte senzor
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte upravenou aplikaci DexcomG5.

### If using G4 with OTG cable ('traditional' Nightscout)…  


* Pokud jste tak ještě neučinili, stáhněte si aplikaci Nightscout Uploader z Google Play a postupujte podle pokynů v části [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* V nastavení AndroidAPS zadejte svojí Nightscout adresu a API secret.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte NSClient.

## Pro uživatele Libre s Bluetooth čtečkou  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) jako nástroj pro odečítání <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci xDrip a postupujte podle pokynů v části [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) nebo [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en) ([Hardware](https://bluetoolz.de/wordpress/)).
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Lokální odesílání dat a vyberte zapnout.
* V xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Přijímat ošetření a vyberte vypnout.
* Pokud chcete, aby bylo možné přes AndroidAPS kalibrovat senzor, tak v xDripu vyberte Nastavení > Komunikace mezi aplikacemi > Accept Calibrations a vyberte zapnout. Můžete také zkontrolovat v xDripu nastavení v částí Nastavení > Méně častá nastavení > Rozšířené kalibrace.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte xdrip.
* Nastavení aplikace xDrip+ včetně snímků obrazovky viz [stránka s nastavením xDrip+](../Configuration/xdrip.md)
* Pokud AAPS nedostává hodnoty glykémií, když telefon je režimu letadlo, použijte funkci `Identify receiver` jak se popisuje na [stánce nastavení xDrip+](../Configuration/xdrip.md).

### If using Glimp...  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci Glimp a postupujte podle instrukcí v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte Glimp.

## Pro uživatele Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/eversense_cgm_v1.0.409_com.senseonics.gen12androidapp-patched.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple delta" in AAPS.

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## Pro uživatele MM640g nebo MM630g  


* Pokud jste tak dosud neučinili, stáhněte si aplikaci [600SeriesAndroidUploader](http://pazaan.github.io/600SeriesAndroidUploader/) a postupujte podle pokynů uvedených v části [Nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* V aplikaci 600 Series Uploader přejděte na Nastavení > Odesílat do xdrip+ a zvolte ON (zaškrtněte).
* Na kartě Konfigurace (nastavení AndroidAPS) vyberte MM640g.

## Pro uživatele PocTech CT-100  


* Nainstalujte aplikaci PocTech
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte aplikaci PocTech.

## Pro uživatele ostatních CGM nahrávaných do Nightscoutu  


If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* V nastavení AndroidAPS zadejte svojí Nightscout adresu a API secret.
* Na kartě Konfigurace (nastavení v AndroidAPS) vyberte NSClient.