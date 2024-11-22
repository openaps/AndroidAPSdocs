# Konfigürasyon ayarları

Depending on your settings you can open Config Builder through a tab at the top of **AAPS**' screen or through the hamburger menu.

![Konfigürasyon ayarlarını açmak](../images/ConfBuild_Open_AAPS30.png)

The **Config Builder** is the tab where you turn the modular features on and off. In the picture below, the boxes on the left-hand side (A) allow you to select which modules you want activated, the boxes on the right-hand side (C) allow you to view these as a tab (E) in **AAPS**. In case the right box is not activated, you can reach the function by using the hamburger menu (D) on the top left of the screen. See [Tab or hamburger menu](#tab-or-hamburger-menu) below.

When there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

![Konfigürasyon ayarları kutusu ve dişli çark](../images/ConfBuild_ConfigBuilder_AAPS30.png)

(Config-Builder-tab-or-hamburger-menu)=

## Sekme veya hamburger menüsü

Göz simgesinin altındaki onay kutusu ile ilgili program bölümünün nasıl açılacağına karar verebilirsiniz.

![Sekme veya hamburger menüsü](../images/ConfBuild_TabOrHH_AAPS30.png)

```{contents}
:backlinks: entry
:depth: 2
```

## Profile

This module can not be disabled as it is a core part of **AAPS**.

* See [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) for a basic understanding of what goes inside your **Profile**.
* See [AAPS Screens > Profile](#aaps-screens-profile) for more information about managing your **Profiles**.

(Config-Builder-insulin)=

## İnsülin

![İnsülin Tipi](../images/ConfBuild_Insulin_AAPS30.png)

Select the type of insulin you are using.

More information to understand the Insulin Profile as shown in **AAPS** [here](#AapsScreens-insulin-profile).

### İnsülin tipi farklılıkları

* 'Hızlı Etkili Oref', Ultra Hızlı Oref', 'Lyumjev' ve 'Serbest Tepe Oref' seçeneklerinin tümü üstel bir şekle sahiptir.
* 'Hızlı Etkili', 'Ultra Hızlı' ve 'Lyumjev' için İES, kendiniz ayarlayabileceğiniz tek değişkendir ve zirve zamanı sabittir. 
* Free-Peak (serbest-zirve), hem İES'i hem de zirveye ulaşma süresini ayarlamanıza olanak tanır fakat yalnızca bu ayarların etkilerini bilen ileri düzey kullanıcılar tarafından kullanılmalıdır. 
* The [insulin curve graph](#AapsScreens-insulin-profile) helps you to understand the different curves.

#### Hızlı etkili Oref

![İnsülin tipi Hızlı Etkili Oref](../images/ConfBuild_Insulin_RAO.png)

* Humalog, Novolog ve Novorapid için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 75 dakika sonra (sabit, ayarlanabilir değil)

#### Ultra Hızlı Oref

![İnsülin tipi Ultra Hızlı Oref](../images/ConfBuild_Insulin_URO.png)

* FIASP için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 55 dakika sonra (sabit, ayarlanabilir değil)

(Config-Builder-lyumjev)=

#### Lyumjev

![İnsülin tipi Lyumjev](../images/ConfBuild_Insulin_L.png)

* Lyumjev için özel insülin profili
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 45 dakika sonra (sabit, ayarlanabilir değil)

#### Serbest Zirve Oref

![İnsülin tipi Serbest Tepe Oref](../images/ConfBuild_Insulin_FPO.png)

* Serbest zirve Oref "Free Peak 0ref" profili ile zirve zamanını kendiniz girebilirsiniz. Bunu yapmak için gelişmiş ayarlarda dişli çarka tıklayın.
* Profilde daha yüksek belirtilmemişse, İES otomatik olarak 5 saate ayarlanır.
* Bu etki profili, desteklenmeyen bir insülin veya farklı insülinlerin bir karışımı kullanılıyorsa önerilir.

(Config-Builder-bg-source)=

## KŞ kaynağı

Select the blood glucose source you are using. See [BG Source](../Getting-Started/CompatiblesCgms.md) page for more setup information.

![Konfigürasyon ayarları KŞ kaynağı](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) - only if you know what you are doing, see [BG Source](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* [Glimp](#libre1-using-glimp) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* [Tomato App](#libre1-using-tomato) for MiaoMiao device
* Glunovo CGM sistemi için [Glunovo Uygulaması](https://infinovo.com/)
* Rastgele KŞ: Rastgele KŞ verisi oluşturur (Yalnızca Demo modu)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Kullanmakta olduğunuz pompayı seçin. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Konfigürasyon ayarları Pompa seçimi](../images/ConfBuild_Pump_AAPS32.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Kore (yerli DanaR pompası için)
* Dana Rv2 (resmi olmayan ürün yazılımı yükseltmesine sahip DanaR pompası)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* Accu Chek Combo 
  * [Driver using Ruffy](../CompatiblePumps/Accu-Chek-Combo-Pump.md) (requires ruffy installation)
  * [Driver with no additional requirement](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md), added in [AAPS v.3.2](#version3200)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Duyarlılık algılaması

Duyarlılık algılama türünü seçin. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Bu, hareket halindeyken geçmiş verileri analiz edecek ve insüline normalden daha duyarlı (veya tersine, daha dirençli) tepki verdiğinizi fark ederse ayarlamalar yapacaktır. Duyarlılık algoritması hakkında daha fazla ayrıntıyı [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html)nda bulabilirsiniz.

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). Grafiklerde duyarlılık işaretlenerek beyaz çizgide duyarlılığınızı ana ekranda görüntüleyebilirsiniz. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Bu hedefe ulaşmadan önce, Otoduyarlılık yüzdesi veya grafiğinizdeki çizgi yalnızca bilgi amaçlı görüntülenir.

### Emilim ayarları

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Temel olarak bir ön güvenliktir.

(Config-Builder-aps)=

## APS (YPS)

Terapi ayarlamaları için istenen APS algoritmasını seçin. OpenAPS(OAPS) sekmesinde seçilen algoritmanın aktif detayını görüntüleyebilirsiniz.

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Döngü

This module should not be disabled as it is a core part of **AAPS**.

## Constraints

### Objectives

**AAPS** has a learning program (a series of objectives) that you have to fulfill step by step. Bunun amacı, güvenli bir şekilde kapalı döngü sistemi kurmak için size rehberlik etmektir. Her şeyi doğru bir şekilde kurmanızı ve sistemin tam olarak ne yaptığını anlamanızı garanti eder. Sisteme güvenmenizin tek yolu bu.

See [Objectives](../SettingUpAaps/CompletingTheObjectives.md) page for more information.

## Synchronization

In this section, you can choose if/where you want **AAPS** to send your data to.

### NSClient or NSClientV3

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md) and/or for [remote monitoring](../RemoteFeatures/RemoteMonitoring.md), [remote control](../RemoteFeatures/RemoteControl.md).

See [Synchronization with the reporting server](#SetupWizard-synchronization-with-the-reporting-server-and-more) to help you choose between NSClient (v1) and NSClientV3.

### Tidepool

Can be used as a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

See [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Used to **send** data such as treatments to xDrip+.

### Open Humans

See [Open Humans](../SupportingAaps/OpenHumans.md).

### Wear

Monitor and control **AAPS** using your Android WearOS watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Broadcast data to Samsung's G-Watch Wear App (Tizen OS).

### Garmin

Connection to Garmin device (Fenix, Edge...)

## Tedaviler

Tedaviler (TEDAVİ) sekmesine bakarsanız, nightcout'a yüklenen tedavileri görebilirsiniz. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](#screens-bolus-carbs).

## General

### Genel Bakış

This is the [main screen](#AapsScreens-the-homescreen) of **AAPS** and can not be disabled.

#### Tedavi diyaloglarında not alanını göster

Tedavileri girerken bir not alanı isterseniz bu seçeneği işaretleyin.

#### Durum ışıkları

Choose if you want to have [status lights](#Preferences-status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Uyarı seviyesine ulaşıldığında durum ışığının rengi sarıya döner. Kritik seviyeye ulaştığında kırmızı renkte görünecektir.

#### Gelişmiş Ayarlar

**Bolus sihirbazı sonucunun bu kadarını iletin**: SMB kullanırken, birçok kişi ihtiyaç duyulan insülinin %100'ünü yemek bolusu olarak iletmez, sadece bir kısmını (örn. %75) gönderir ve SMB, UAM ile (Bildirilmemiş yemek algılama) gerisini halleder. In this setting, you can choose a default value for the percentage the bolus wizard should calculate with. Bu ayar %75 ise ve 10ü bolus yapmanız gerekiyorsa, bolus sihirbazı yalnızca 7,5 ünitelik bir öğün bolusu önerecektir.

**Sihirbazda süper bolus işlevini etkinleştirin** (*süper mikro bolustan* farklıdır!): Dikkatli kullanın ve gerçekte ne işe yaradığını öğrenene kadar etkinleştirmeyin. Temel olarak, sonraki iki saat için bazal bolusa eklenir ve iki saatlik sıfır geçici bazal etkinleştirilir. **AAPS döngü işlevleri devre dışı bırakılacak - bu nedenle dikkatli kullanın! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Eylemler

A tab offering multiple buttons to take [actions](#screens-action-tab) in **AAPS**.

### Otomasyon

A tab for managing your [Automations](../DailyLifeWithAaps/Automations.md), starting at [Objective 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### SMS Kominikatör

Allows remote caregivers to control some **AAPS** features via SMS, see [SMS Commands](../RemoteFeatures/SMSCommands.md) for more setup information.

### Yiyecek

Nightscout gıda veritabanında tanımlanan yemek ön ayarlarını görüntüler, daha fazla kurulum bilgisi için [Nightscout Beni Oku](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)'ya bakın.

Note: Entries cannot be used in the **AAPS** calculator. (Sadece Görüntülenir)

(Config-Builder-wear)=

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../WearOS/WearOsSmartwatch.md)). Saatinizden verilen bolusu hesaplarken hangi değişkenlerin dikkate alınması gerektiğini belirlemek için ayarları (dişli çark) kullanın (15dk trend, AKARB., KŞ vb..).

Saatinizden bolus vs. göndermek istiyorsanız "Wear ayarları" içinde "Saat tarafından kontrol"u etkinleştirmeniz gerekir.

![Wear ayarları](../images/ConfBuild_Wear.png)

Wear sekmesi veya hamburger menüsünden (sekme görüntülenmiyorsa ekranın sol üst kısmında)

* Tüm verileri yeniden gönder. Saat bir süredir bağlı değilse ve bilgileri saate göndermek istiyorsanız yardımcı olabilir.
* Telefonunuzu kullanarak Ayarları doğrudan saatinizde açar.

### Bakım

Access this tab to export / import settings.

### Konfigürasyon ayarları

This current tab.