# Döngü kullanıcıları için SSS

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

Hayır. AAPS için indirilebilir bir apk dosyası yoktur. You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. Nedeni ise:

AAPS, pompanızı kontrol etmek ve insülin vermek için kullanılır. Avrupa'daki mevcut düzenlemelere göre IIa veya IIb olarak sınıflandırılan tüm sistemler, çeşitli çalışmalar ve imzalar gerektiren düzenleyici onay (CE işareti) gerektiren tıbbi cihazlardır. Düzenlenmemiş bir cihazı dağıtmak yasa dışıdır. Dünyanın başka yerlerinde de benzer düzenlemeler var.

Bu düzenleme (bir şey karşılığında para almak anlamında) sadece satışla sınırlı olmayıp, her türlü dağıtım (hatta ücretsiz dağıtma) için de geçerlidir. Kendiniz için bir tıbbi cihaz oluşturmak, uygulamayı bu düzenlemeler dahilinde kullanmanın tek yoludur.

Bu yüzden apk'ler mevcut değildir.

(FAQ-how-to-begin)=

### How to begin?

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

Her şeyden önce, **döngülenebilir donanım bileşenleri almanız** gerekir:

* A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
* an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
* a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. Tüm öneriler, temel ihtiyaçlarınızın karşılandığını ve gördüğünüz herhangi bir tepe veya dip noktasının, bu nedenle bazı tek seferlik ayarlamalar (egzersiz, stres vb.) gerektiren diğer faktörlerin bir sonucu olduğunu varsayar. Kapalı döngünün güvenlik için yapabileceği ayarlamalar sınırlandırılmıştır ([OpenAPS Referans Tasarımında](https://openaps.org/reference-design/) izin verilen maksimum geçici bazal oranına bakın), bu izin verilen dozun temeldeki yanlış bir bazalı düzeltmek için boşa harcamak istemediğiniz anlamına gelir. Örneğin, yemekten önce genellikle düşük seviyeniz varsa, muhtemelen bazal oranınızın ayarlanması gerekir. You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Android Wear Smartwatches

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Disconnect pump

Duş almak, banyo yapmak, yüzmek, spor yapmak veya diğer etkinlikler için pompanızı çıkarırsanız, AAPS'e AİNS'i doğru tutmak için insülin verilmediğini bildirmelisiniz.

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### Recommendations not only based on one single CGM reading

Güvenlik için yapılan öneriler bir CGM okumasına değil, ortalama deltaya dayanmaktadır. Bu nedenle, bazı okumaları kaçırırsanız, AAPS'in tekrar döngüye girmesi, verileri geri aldıktan sonra biraz zaman alabilir.

#### Further readings

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### What emergency equipment is recommended to take with me?

İnsülin pompası tedavisi olan diğer tüm T1D'ler gibi aynı acil durum ekipmanına sahip olmalısınız. AAPS ile döngü kurarken, yanınızda veya yakınında aşağıdaki ek ekipmanın bulunması şiddetle tavsiye edilir:

* Akıllı telefonunuzu, saatinizi ve (gerekirse) BT okuyucusunu veya Link cihazını şarj etmek için pil takımı ve kablolar
* Pompa pilleri
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Birkaç eski dışa aktarma dosyasını saklayın.

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### How can I safely and securely attach the CGM/FGM?

Bantlayabilirsiniz. Yaygın CGM sistemleri için önceden delinmiş birkaç çeşit sensör bantları mevcuttur. (Google, eBay veya Amazon'da arama yapın). Bazı looper'lar daha ucuz standart kinesiyoloji bandı veya tıbbi rulo bant kullanır.

Siz bunu düzeltebilirsiniz. CGM/FGM'yi bir bantla sabitleyen üst kol bilezikleri de satın alabilirsiniz (Google, eBay veya Amazon'da arama yapın).

## APS algorithm

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

AMA algoritmasında, İES aslında 'insülin etkisinin süresi' anlamına gelmez. Eskiden İES'ine bağlanan bir parametreydi. Şimdi ise 'düzeltme bolusunun ne zaman biteceği' anlamına geliyor. AİNS'in hesaplanmasıyla ilgisi yoktur. OpenAPS SMB'de artık bu parametreye gerek yoktur.

## Other settings

### Nightscout settings

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". What can I do?

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### CGM settings

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pump

#### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. O zaman iletişim zorlaştığı için pili %25 oranında değiştirmek en iyisidir. Nightscout sitenizdeki PUMP_WARN_BATT_P değişkenini kullanarak pompa pili için uyarı alarmları ayarlayabilirsiniz. Pil ömrünü artırmanın püf noktaları şunları içerir:

* LCD'nin açık kaldığı süreyi azaltın (pompa ayarları menüsünde)
* arka ışığın açık kalma süresini kısaltın (pompa ayarları menüsünde)
* titreşim yerine bir bip sesiyle bildirim ayarlarını seçin (pompa ayarları menüsünden)
* yeniden doldurmak için yalnızca pompadaki düğmelere basın, tüm geçmişi, pil seviyesini ve rezervuar hacmini görüntülemek için AAPS'i kullanın.
* AAPS uygulaması, bazı telefonlarda enerji tasarrufu veya boş RAM için genellikle kapatılabilir. AAPS her başlatmada yeniden başlatıldığında, pompaya bir Bluetooth bağlantısı kurar ve mevcut bazal oranı ve bolus geçmişini yeniden okur. Bu pil tüketir. To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* üretim sürecinden kalan balmumu veya yağ izi kalmadığından emin olmak için pil kutuplarını alkolle temizleyin.
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. Pili ekranda %100 görünene kadar 2-3 kez çıkarıp yeniden takın veya pil anahtarını kullanarak pili kısa bir süre için her iki terminale birden uygulayarak takmadan önce kısa devre yapın.
* see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### What to do when taking a shower or bath?

Duş veya banyo yaparken pompayı çıkarabilirsiniz. Bu kısa süre için buna ihtiyacınız olmayabilir, ancak AİNS hesaplamalarının doğru olması için AAPS'e bağlantınızın kesildiğini söylemelisiniz. See [description above](#FAQ-disconnect-pump). The *Bathing* [scene](#scenes) template does this for you.

#### Work

İşinize bağlı olarak, iş günlerinde farklı tedavi faktörleri kullanmayı tercih edebilirsiniz. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. Örneğin, daha az zorlu bir işiniz varsa (örneğin, masada oturmak) %100'den yüksek bir profile veya tüm gün aktif ve ayaktaysanız %100'den az bir profile geçebilirsiniz. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, or if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### Leisure activities

(FAQ-sports)=

#### Sports

Döngü öncesi zamanlardan kalma eski spor alışkanlıklarınızı yeniden çalışmanız gerekiyor. Daha önce olduğu gibi sadece bir veya daha fazla spor karbonhidratı tüketirseniz, kapalı döngü sistemi bunları tanıyacak ve uygun şekilde düzeltecektir.

Böylece daha fazla aktif karbonhidrat olurdu, ancak aynı zamanda döngü, insülini verir ve etkisiz hale getirirdi.

Döngü yaparken şu adımları denemelisiniz:

* Make a [profile switch](#ProfileSwitch-change-percentage) < 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target. With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

Bu ayarlar için önce ve sonra çalıştırma önemlidir. Değişiklikleri spordan önce zamanında yapın ve kas dolgusunun etkisini göz önünde bulundurun.

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. Konum tabanlı otomasyon da bir fikir olabilir ancak ön işlemeyi zorlaştırır.

Profil değişikliğinin yüzdesi, aktivite geçici hedefinizin değeri ve değişiklikler için en iyi zaman bireyseldir. Sizin için doğru değeri arıyorsanız güvenli taraftan başlayın (daha düşük yüzde ve daha yüksek GH ile başlayın).

#### Sex

Pompayı 'özgür' olabilmek için kaldırabilirsiniz, ancak AAPS'e AİNS hesaplamalarının doğru olması için söylemelisiniz. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

Algoritma alkolden etkilenen KŞ'yi doğru bir şekilde tahmin edemediği için kapalı döngü modunda alkol içmek risklidir. AAPS'de aşağıdaki işlevleri kullanarak bunu tedavi etmek için kendi yönteminizi kontrol etmeniz gerekir:

* Kapalı döngü modunun devre dışı bırakılması ve diyabetin manuel olarak tedavi edilmesi veya
* gözetimsiz bir yemek nedeniyle döngüyü artıran AİNS'i önlemek için yüksek geçici hedefleri belirlemek ve bildirilmeyen Öğünleri (UAM)'yi devre dışı bırakmak veya
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

Alkol içerken, karbonhidrat yiyerek hipoglisemiyi manuel olarak önlemek için CGM'nize her zaman göz kulak olmalısınız.

#### Sleeping

##### How can I loop during the night without mobile and Wi-Fi radiation?

Birçok kullanıcı geceleri telefonu uçak moduna alıyor. If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. Cep telefonunuzda uçak modunu açın.
2. Uçak modu aktif olana kadar bekleyin.
3. Bluetooth'u açın.

Şu anda arama almıyorsunuz ve internete bağlı değilsiniz. Ama döngü hala çalışıyor.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### How to deal with time zone changes?

Dana R ve Dana R Korean ile hiçbir şey yapmanıza gerek yok. For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

Nightscout raporlarınızı (https://YOUR-NS-SITE.com/report) gösterebilir veya [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)'ı kontrol edebilirsiniz.

## Frequent questions on Discord and their answers...

### My problem is not listed here.

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### I have problems, errors building the app.

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Build error: file name too long

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

Android Studio'dan: Projeyi açıp GitHub'dan çektikten sonra "Gradle"ın senkronizasyon ve indekslemenin yapıldığından emin olun. Bir Yeniden Proje yapmadan önce Temiz bir Proje yürütün. Execute File->Invalidate Caches ardından Android Studio'yu tekrar başlatın.

(FAQ-running-dev-version)=

#### Alert: Running dev version. Closed loop is disabled

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). Herhangi bir dosya, doğru şekilde adlandırıldığı sürece iş görür.
2. Restart **AAPS** so that it finds the file.

İpucu: Mevcut bir günlük dosyasının bir kopyasını alın ve onu "engineering_mode" olarak yeniden adlandırın (not: dosya uzantısı olmayacak).

### Objectives

#### I'm stuck on an objective and need help.

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. Hangi seçenekleri seçtiğinizi (veya seçmediğinizi) ve nedenini söylemeyi unutmayın. İpuçları ve yardım alacaksınız ancak yanıtları bulmanız gerekecek.

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### Where can I find settings files?

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

UYARI: Parolanızı kesinlikle kaybetmeyin çünkü onsuz şifreli bir ayar dosyasını içe aktaramazsınız!

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

Bazı yeni görevler eklendi. Onları doğrulamanız gerekecek.

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS stops everyday around the same time.

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* "Temizleme" uygulamalarını (yani CCleaner vb.) kontrol edin ve bunları kaldırın.
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### How to configure battery savings?

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### Pump unreachable alerts several times a day or at night.

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

Bazı telefonlarda (RL/OL/Emalink...) Bluetooth bağlantısı kesilir.

Bazı cihazların da yanıt vermeyen bağlantıları da vardır (AAPS, bağlı olduklarını ancak bağlantıların pompaya ulaşamadığını veya komuta edemediğini söylüyor.)

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. Yeniden başlatmadan deneyebilirsiniz.
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### Remote control

(FAQ-aapsclient)=

#### Configuring and Using the AAPSClient remote app

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. Çok fazla çift KŞ varsa AAPS veritabanını sıfırlamanız gerekebilir. In this case, you'll also lose stats, IOB, COB, selected profile.

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

Sorunun olası kaynağı: xDrip ve/veya NS geri döngülü KŞ girdileridir.

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported during the Pod you are wearing now,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that the two phones never talk to the Pod at the same time.