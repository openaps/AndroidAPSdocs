
# Sürüm notları

Please follow the instructions in the [update manual](UpdateToNewVersion). The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

You will receive the information as soon as a new update is available. If you do not update until expiration date **AAPS** will switch to Open Loop.

![Update info](../images/AAPS_LoopDisable90days.png)

This prompt is important, should not be ignored and is not intended to bug you. New versions of **AAPS** do not only provide new features but also important safety fixes. Therefore it is necessary that every **AAPS** user updates to the latest version a.s.a.p. Unfortunately there are still bug reports from very old versions so this an effort to try to improve the safety for each **AAPS** user and the DIY community. Thank you for your understanding.

```{admonition} First version of **AAPS**
:class: not

İlk test sürümü 2015'te başladı. 2016 yılında ilk sürüm yayımlandı.

The chronology of these releases is not available at the moment but as this question is asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Android sürümü ve AAPS sürümü

If your smartphone uses an Android Version older than Android 11 you will not be able to use AAPS v3.3 and up as it requires at least Android 11.

Daha eski Android'e sahip kullanıcıların AAPS'nin eski sürümünü kullanmasına izin vermek için, yalnızca sürüm doğrulamasını değiştiren yeni sürümler gönderildi. Başka hiçbir iyileştirme dahil değildir.

### Android 11 and up

- En son AAPS sürümünü kullanın
- AAPS Kodunu <https://github.com/nightscout/AndroidAPS> adresinden indirin

### Android 9,10

- Use AAPS version **3.2.0.4**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 3.2.0.4

### Android 8

- AAPS **2.8.2.1** sürümünü kullanın
- AAPS Kodunu <https://github.com/nightscout/AndroidAPS> 2.8.2.1 şubesinden indirin

### Android 7

- AAPS **2.6.2** sürümünü kullanın
- AAPS kodunu <https://github.com/nightscout/AndroidAPS> 2.6.2 şubesinden indirin

## WearOS versiyonu

- AAPS requires at least WearOS API level 28 (Android 9)

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version3321)=

## Version 3.3.2.1

Release date: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Fix mmol-mgdl conversion
- Fix wrong time selection in dialogs in some timezones
- Fix reading keys in simple mode
- Fix missed predictions on wear
- Improved ConfigBuilder
- Improved NSCv3 full sync

(version3300)=

## Version 3.3.2.0

Release date: 27-03-2025

### How to upgrade

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

### Starting this version, notification and version enforcement has been simplified and softed and works following way:
*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  You'll receive warning/notifications less often:
   - 28+ days remaining: every 7 days
   - 27-14 days remaining: every 3 days
   - then once a day
   - Notification will be generated after noon to not bother you during nights
* There are only 2 kinds of notification
   - New version available (has no effect on AAPS)
   - Application is expiring on some date in the future (still no effect on AAPS) / has expired (AAPS will turn into LGS mode)

### News

* SMS RESTART command @MilosKozak
* Watch Profile switch parameters @olorinmaia
* Dark mode AAPS V2 watchface @olorinmaia
* G7 data exchange improvements @olorinmaia
* Widget configuration @MilosKozak
* Radiobuttons UI improvements @olorinmaia
* Automation: position choosing from map @MilosKozak
* Version visible on main screens @MilosKozak
* Compilation with existing git system in enforced (no zip downloads)
* Show version on main screen @MilosKozak
* Tidepool upload improvements @ConstantinMatheis

### Bug fixes

* Dash unbonding fix @Andreas
* Garmin fixes @robertbuessow @suside
* Fix of IOB displaying in dialogs @olorinmaia
* Objectives spelling and validation improvements @MilosKozak
* Fixed rendering of emulated TBRs @MilosKozak
* Fixed bypassing security @tdrkDev

## Version 3.3.1.3

Release date: 21-01-2025

### Bug fixes

* Dash: bonding is optional (default off) @MilosKozak
* Equil: fixed bolud 10+U, alarm improvements @EquilHack
* Garmin: watch improvements @swissalpine
* Watch improvements @olorinmaia
* Control loop status from watch @tdrkDev
* Stability improvements

*  **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**

## Version 3.3.1.2

Release date: 15-01-2025

### How to upgrade

* [Android Studio version called "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. **This is not the same as plain "Ladybug".** If you already built a 3.3.x version, you need to upgrade Android Studio again.

### Bug fixes

* Dash: use bonding on Android 15+
* Restored Dexcom button on Overview
* Equil: allowed remove non working pump
* Warn when DynISF Adjustment Factor is zero
* NSCv3: resolve websocket communication on phones with slightly different time
* SMS Commands: fix OneTimePassword. **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**
* Fix issue where some preferences could not be edited anymore.
* Fix reset of master password with virtual pump.
* Fixed import of large settings backup files.

## Version 3.3.1.0

Release date: 06-01-2025

### UI changes

* [Added colors to differentiate between AAPSClient and AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Improved Users actions layout and icons

### Other functionalities

* New automation trigger : [steps count](#screen-heart-rate-steps) @Roman Rihter
* Allow to receive everything on NSCv3 full sync (including data previously not synced such as TBR) @MilosKozak
* NSClient v3 : make Announcement work (_i.e._ from AAPSClient to AAPS) @MilosKozak

### Technical changes & bug fixes

* Fix Insight crash @philoul
* Fix creation of extra-numerous deviceStatus entries in Nightscout @MilosKozak
* Fix carbs absorption @MilosKozak
* Fixed color of RadioButtons & CheckBoxes @MilosKozak
* Fixed bug in DynISF percentage migration @MilosKozak
* Resolved misplaced DynISF notification @MilosKozak
* Fixed bug in watchfaces @philoul

## Version 3.3.0.0

Release date: 29-12-2024

### Main features

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behaviour:
  * **Profile Switch** and **Profile Percentage** is now taken into account for **Dynamic ISF** in respect of dynamic sensitivity strengthness
  * The average **ISF** of the last 24h is calculated and this value is used for bolus wizard and **COB** calculation. **Profile ISF** value is not used at all (except fallback when history data is not available)
  * DynamicISF documentation page has been rewritten. Please read the important section [Things to consider when activating Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users
  * Note : Requires latest version of xDrip+ or Juggluco.
* New **Automation** triggers
* Unattended settings exports

### How to upgrade

* Before upgrading:
  * **<span style="color:red">This version requires Google Android 11.0 or above</span>**. Check your phone version before attempting to update.
  * If you use the “old” Combo driver with ruffy device, migrate to the [native Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) before update
  * You will lose your [additional graphs](#AapsScreens-section-g-additional-graphs) on the HomeScreen during upgrade: make a manual note of your current configuration if needed, so that you can recreate them after upgrade.
  * The [Bluetooth connectivity issues some people encounter on Android 15](../Getting-Started/Phones.md) are **NOT** solved by this release (this is an Android issue, not **AAPS**). A fix is available in 3.3.1.2.
  * The BYODA button on the homescreen is no longer available due to Android limitations. This is fixed in 3.3.1.2.
* Update instructions: follow the [Update to a new version](../Maintenance/UpdateToNewVersion.md) guide.
  * [Android Studio version called "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already have an older version of Android Studio installed, you may need to <span style="color:red">configure the JVM version to 21</span>. See [Troubleshooting Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tip - if you do not want to lose your **AAPS** history ALWAYS do an UPDATE and NOT an UNINSTALL/INSTALL. As a precaution, back up your current **AAPS** settings and old APK to revert to an old version should anything go wrong.
* After upgrading:
  * Set the new [“AAPS directory” setting](#preferences-maintenance-logdirectory), in the Maintenance tab.

### Detailed changes

#### CGMs and Pumps

* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users @MilosKozak
* [Medtrum driver](../CompatiblePumps/MedtrumNano.md) improvements @jbr77rr
  * Communication improvements, including new setting to workaround problems on some smartphones
  * Show reservoir level at start of activation
  * Fix bug where activation returns to start and user cannot finish the activation
  * Feedback for sync status and other clarifications
* New supported pump : [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* New supported CGMs : [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer and [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight driver rewritten to kotlin @Philoul
* Removed old ruffy dependent Combo driver

#### UI changes

* [Simple mode](#preferences-simple-mode) activated by default on fresh install @MilosKozak
* New [QuickWizard](#Preferences-quick-wizard) options @radicalb
  * The QuickWizard now uses the same logic for bolus calculation and display as the calculator. You can now use the “carb time” field in QuickWizard  to pre-bolus.
* New [graph scale menu](#aaps-screens-main-graph); [additional graphs menu](#AapsScreens-activate-optional-information) UI improvements @Philoul
* [ConfigBuilder layout improvement](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sections are now collapsed by default. Use arrow to expand.
* Variable sensitivity visible in AAPSClient
* BolusWizard UI improvements @kenzo44
* Fix text display in pump tabs when using light theme @jbr77rr

#### Other functionalities

* [Unattended settings exports](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* New [Automation trigger](#automations-automation-triggers) @vanelsberg
  * Pod Activation (patch pump only)
* New [Automation triggers](#automations-automation-triggers) @jbr77rr
  * Cannula age, Insulin age, Battery age, Sensor age, Reservoir level, Pump battery level
* Allowing negative carbs entry @MilosKozak
* New Parameter [“AAPS directory”](#preferences-maintenance-settings) to choose a storage directory different from the default one.
* Allow for [insulin records when pump suspended](#aaps-screens-buttons-insulin) @jbr77rr
* Updated [Objective 2](#objectives-objective2) @MilosKozak
  * Check that master password is set and known
* Random carbs in test mode @MilosKozak
* Fixed bug in TDD calculation @MilosKozak
* SMS Commands : allow to [**not** send SMS for profile change](#sms-commands-too-many-messages) coming from NS @MilosKozak

#### Akıllı saatler

* wear and watchfaces improvement @Philoul @MilosKozak @olorinmaia
* Watch tiles from Automation actions @Philoul
* Combined watchfaces from AAPS, AAPSClient and AAPSClient2 to monitor more patients @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technical changes

* [log files location change](#Accessing-logfiles-accessing-logfiles)
* new internal modules structure @MilosKozak
* split persistence layer from main code @MilosKozak
* build files rewritten to kts @MilosKozak
* algorithms rewritten to kotlin for better performance @MilosKozak
* tons of new unit tests @MilosKozak and others
* more code converted to kotlin @MilosKozak
* new preferences management, xml \-\> kotlin @MilosKozak
* new CI configuration, run CI on own servers @MilosKozak
* libraries updated to latest version, toml @MilosKozak
* migration to kotlin 2.0, java 21 @MilosKozak

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release date: 27-02-2024

This version is the last one supporting Android 10. If you cannot upgrade to Android 11, [update AAPS to 3.2.0.4](#update-aaps-3204).

### Değişiklikler

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

(version3200)=

## Version 3.2.0.0 dedicated to @Philoul

Release date: 23-10-2023

### Önemli ipuçları

- NS 15 is required
- NS v3 eklentisinde websockets kullanırken, NS UI (artı düğmesi) aracılığıyla girilen işlemler ve v1 API kullanan diğer uygulamalar AAPS'e gönderilmez. Bu, NS'nin gelecekteki sürümünde düzeltilecektir. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internally. Aynısı AAPS ve AAPSClient'in kendisi için de geçerlidir.
- Websockets in v3 plugin work in a similar manner as v1 plugin. AAPS, etkinleştirilmiş web yuvaları olmadan, NS'den düzenli olarak indirmeleri planlar ve bu, NS kalıcı olarak bağlı olmadığı için daha düşük güç tüketir. On the opposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- Cgm kaynağı olarak xdrip kullanıyorsanız, dahili değişiklikler nedeniyle güncellemeden sonra tekrar seçmelisiniz.
- Tidepool, ilk görevi geçmek için NS yerine kullanılabilir
- xDrip+'a gönderirseniz, xDrip senkronizasyon eklentisini yapılandırmanız gerekir. In order to receive BGs from AAPS in xDrip, “xDrip+ Sync Follower” must be selected as source
- ComboV2 sürücüsüne geçmek istiyorsanız, Ruffy'nin kaldırılması ve pompanın AAPS ile yeniden eşleştirilmesi gerekir.
- In order to use DynISF plugin you have to start Objective 11 (all previous must be in finished state to allow start of 11)


### Değişiklikler

- EOPatch2 / GlucomenDay pompa sürücüsü @jungsomyeonggithub @MilosKozak
- ComboV2 pompa sürücüsü (Ruffy'ye gerek yok) @dv1
- Medtrum Nano sürücüsü @jbr7rr
- Kore DanaI desteği @MilosKozak
- Glunovo CGM desteği @christinadamianou
- G7 desteği @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 eklentisi @MilosKozak
- Tidepool desteği @MilosKozak
- Yumuşatma eklentisi @MilosKozak, @justmara, Üstel yumuşatma @nichi (Tsunami), Ortalama yumuşatma @jbr7rr
- DynamicISF plugin @Chris Wilson, @tim2000s
- Garmin watchface & HeartRate support @buessow
- New logo @thiagomsoares
- New watchface @Philoul
- 3.1 sürümündeki tonlarca sorun düzeltildi
- daha fazla yere not eklenmesine izin verme @Sergey Zorchenko
- UI fixes @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- yeni SMS komutları LOOP LGS/CLOSED @pzadroga
- wear çevirileri @Andries-Smit
- xdrip iletişimi @MilosKozak ayrı modülüne taşındı
- dahili değişiklikler: güncellenmiş kütüphane sürümleri, rx3 geçişi, yeni modül yapısı @MilosKozak
- Diaconn sürücü düzeltmeleri @miyeongkim
- more database maintenance options @MilosKozak
- AAPSClient ana telefon elektriğe takılıysa bilgi verir @MilosKozak
- Bolus sihirbazında değişiklik. CGM mevcut değilse, yüzde göz ardı edilir (yani %100 kullanılır)
- migration to kts build system @MilosKozak
- improved CI integration @MilosKozak @buessow
- tests cleanup @ryanhaining @MilosKozak
- new 110k+ lines of code, changed 240k lines, 6884 changed files

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Important comments on using v3 versus v1 API for Nightscout with AAPS

v1 is the old protocol used for exchanging data between NS web site and NS server. It has many limitations
- v1 sends only 2 days of data
- v1 send all 2 days data on every reconnection
- using websockets is mandatory = permanent connection, more battery compsumption
- during frequent disconnects to NS connection is paused for 15 minutes to prevent high data usage

v3 is new protocol. More safe and efficient
- while using tokens you can better define access rights
- protocol is more efficient on both sides (AAPS & NS)
- It can read up to 3 months of data from NS
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power compsumption, but slower updates ie. minutes)
- NSClient is not paused on disconnections

LIMITATIONS
- NS 15 must be used with AAPS 3.2
- v3 doesn't see updates done by v1 protocol (probably it will be resolved in some future version of NS)
- in opposite because of old uneffective method of tracking changes v1 see changes done by v3
- remember NS still uses v1 internally so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient on SMS if you want enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preferred because of efficiency
- using websockets or not using with v3 depends on your preference
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

(version3100)=

## Sürüm 3.1.0

Yayınlanma tarihi: 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Önemli ipuçları

- güncellemeden sonra Wear uygulamasını kaldırın ve yeni sürümü yükleyin
- Omnipod kullanıcıları: pod değişikliğinde güncelleme !!!

### Değişiklikler

- 3.0 sürümündeki sorunlar düzeltildi
- uygulama donması düzeltildi @MilosKozak
- DASH sürücüsü düzeltildi @avereha
- Dana sürücüsü düzeltildi @MilosKozak
- büyük kullanıcı arayüzü iyileştirmesi, temizleme ve birleştirme, malzeme tasarımına geçiş, stiller, beyaz tema, yeni simgeler. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- Aidex CGM desteği @andyrozman @markvader (Sadece pompa kontrolü)
- Watch [Wear OS tiles](#WearOsSmartwatch-wear-os-tiles), translations @Andries-Smit
- Wear kodu yeniden düzenlendi. Artık geriye dönük uyumlu değil @MilosKozak
- a11y iyileştirmeleri @Andries-Smit
- yeni koruma seçeneği PIN @Andries-Smit
- menüde grafik ölçeğine izin verme @MilosKozak
- daha fazla istatistik seçeneği @MilosKozak
- VirtualPump lehine MDI eklentisi kaldırıldı
- yeni otomasyon eylemi: StopProcessing (kurallara göre)

## Sürüm 3.0.0

Yayınlanma tarihi: 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Önemli ipuçları

- **Minimum Android sürümü artık 9.0'dır.**
- **Veriler yeni veritabanına taşınmaz.** Şikayet etmeyin, bu çok büyük bir değişikliktir, bundan dolayı mümkün değildir. Böylece güncellemeden sonra Aktif İnsülin, Aktif Karbonhidrat, tedaviler vb. temizlenecektir. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB. Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.
- AAPS ve NSClient'in aynı sürümünü kullanın

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Maintenance/Update3_0.md).

### Hazırlık adımları

**Güncellemeden en az iki gün önce:**

- Nightscout'ta Dexcom bridge'ı devre dışı bırakın
- Toplayıcı olarak G5/G6 ve xDrip kullanıyorsanız, xDrip'i 14 Ocak 2022'den daha yeni bir sürüme güncellemeniz gerekir
- G5/G6 kullanıyorsanız, toplayıcı olarak BYODA'ya geçiş yapıyorsanız, geri yumuşatmadan "back-smoothing" yararlanmanız önerilir (xDrip'i başka amaçlar için de kullanabilirsiniz, xDrip BYODA'dan veri alabilir)

### Değişiklikler

- 100k satır değişti, 105k satır yeni kod

- [Omnipod DASH support](../CompatiblePumps/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 desteği](../CompatiblePumps/DiaconnG8.md)

- Glunovo desteği

- Dahili veritabanı Room'a yükseltildi @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Kotlin'e yeniden yazılan birçok kod @MilosKozak

- Pompa sürücüleri için yeni dahili arayüz

- NSClient, daha iyi senkronizasyon ve daha ayrıntılı özelleştirme için yeniden yazıldı @MilosKozak

  - NS'den kayıt silmeye izin verilmez (yalnızca NSClient aracılığıyla geçersiz kılma)
  - NS'den kayıt değişikliğine izin verilmez
  - Mühendislik modu olmadan kullanılabilen senkronizasyon ayarı (ebeveynler için)
  - Verileri yeniden senkronize etme yeteneği

- Profil anahtarı davranış değişikliği. Artık Profil Anahtarı *(kullanıcının istediği bir şey)* ve Profil değişikliği *(değişim pompa tarafından yapıldığında)* arasında ayrım yapılıyor @MilosKozak @Tebbe

- Profil anahtarının oluşturulması sırasında aktivite geçici hedefi başlatabilirsiniz @MilosKozak

- NSProfili gitti, sadece yerel profil kullanılabilir. Local profile can be [synced to NS](#Update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](#Update3_0-reset-master-password) @MilosKozak

- Kullanıcı eylemleri izleme @Philoul

- Yeni otomasyon TempTargetValue tetikleyicisi @Philoul

- Yeni otomasyon Bakım Portalı eylemi @Philoul

- Karbonhidrat İletişim Kutusuna Bolus hatırlatıcısı ekleyin @Philoul

- Bolus Sihirbazı iyileştirmesi

- UI (Kullanıcı arayüzü) iyileştirmeleri @MilosKozak

- Otomasyonlar için yeni kullanıcı butonları @MilosKozak

- Yeni otomasyon düzeni @MilosKozak

- Geçmiş tarayıcısı güncellendi ve düzeltildi @MilosKozak

- Görev 9 kaldırıldı @MilosKozak

- Kararsız CGM verileriyle ilişkili hata giderildi @MilosKozak

- DanaR ve DanaRS iletişim iyileştirmesi @MilosKozak

- CircleCI entegrasyonu @MilosKozak

- Dosya konumu değişikliği:

  - /AAPS/extra (engineering mode)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Sürüm 2.8.2

Yayınlanma tarihi: 23-01-2021

- Please see also [important hints for version 2.8.1.1](#version-2811) below.

### Değişiklikler

- kararlılık iyileştirmeleri
- Android 8+ için daha fazla ince ayar
- geliştirilmiş simgeler
- akıllı saat iyileştirmeleri
- NSClient düzeltmeleri
- Bolus danışmanı artık Pumpcontrol ve NSClient ile çalışıyor

## Sürüm 2.8.1.1

Yayınlanma tarihi: 12-01-2021

(important-hints-2-8-1-1)=
### Önemli ipuçları

- **NS_UPLOAD_ONLY** seçeneği, tüm 2.8.1 kullanıcıları için zorunlu olarak AÇIK duruma getirildi.
- GH, karbonhidrat veya profil değişimi için NSClient kullanıyorsanız, AAPS'de bunu kapatmanız gerekir, ancak **yalnızca senkronizasyonunuz iyi çalışıyorsa** (yani, GH, GBO vb.'nin kendi kendini değiştirmesi gibi istenmeyen veri değişikliklerini görmezsiniz).
- DİKKAT: Başka uygulama tanıtıcı tedavileriniz varsa bunu YAPMAYIN (xDrip yayın/yükleme/eşitleme... gibi)
- NS_UPLOAD_ONLY, yalnızca mühendislik modu etkinleştirildiğinde kapatılabilir.

### Majör değişiklikler

- RileyLink, Omnipod ve MDT pompa iyileştirmeleri ve düzeltmeleri
- NS_UPLOAD_ONLY zorunlu
- SMB & Dexcom uyg. için düzeltmeler
- saat arayüzü düzeltmeleri
- kilitlenme raporlaması iyileştirildi
- gradle reverted to allow direct watchface installation
- otomasyon düzeltmeleri
- RS sürücüsü iyileştirmesi
- çeşitli çökme düzelmeleri
- Kullanıcı arayüzü düzeltmeleri ve iyileştirmeler
- yeni çeviriler

(Releasenotes-version-2-8-0)=
## Sürüm 2.8.0

Yayınlanma tarihi: 01-01-2021

### Önemli ipuçları

- **Minimum Android sürümü şu anda 8.0'dır.** Daha eski Android sürümleri için eski depodan 2.6.1.4'ü kullanmaya devam edebilirsiniz.
- [Objectives have changed.](#objectives-objective3) **Finish not completed objectives before update.**
- Depo konumu hâlâ <https://github.com/nightscout/AndroidAPS>'de. If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../SettingUpAaps/BuildingAaps.md).
- Apk'yi oluşturmak için lütfen [Android Studio sürüm 4.1.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- [Omnipod Eros support](../CompatiblePumps/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](#Preferences-quick-wizard) & [eating reminder](#AapsScreens-section-j) @MilosKozak
- New watchface @rICTx-T1D
- Dana RS bağlantı iyileştirmeleri @MilosKozak
- Dexcom yerel uygulaması için SMB'deki "Değiştirilmemiş CGM değerleri" davranışı kaldırıldı
- New [Low Resolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Yeni NSClient tablet düzeni @MilosKozak
- NSClient transfer insulin, sensitivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../SettingUpAaps/Preferences.md) @Brian Quinion
- Yeni pompa simgeleri @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](#Config-Builder-lyumjev)
- Kurulum sihirbazı iyileştirmeleri @MilosKozak
- Güvenlik iyileştirmeleri @dlvoy
- Çeşitli iyileştirmeler ve düzeltmeler @AdrianLxM @Philoul @swissalpine @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Sürüm 2.7.0

Yayınlanma tarihi: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Maintenance/Update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start objective 11. Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

### Başlıca yeni özellikler

- bağımlılık enjeksiyonunun dahili kullanımı, kitaplık güncellemeleri, kotline yeniden kod yazımı @MilosKozak @AdrianLxM
- Dana pompaları için modüllerin kullanılması @MilosKozak
- [new layout, layout selection](../DailyLifeWithAaps/AapsScreens.md) @MilosKozak
- new [status lights layout](#Preferences-status-lights) @MilosKozak
- [multiple graphs support](#AapsScreens-activate-optional-information) @MilosKozak
- [Profile helper](../SettingUpAaps/YourAapsProfile.md) @MilosKozak
- visualization of [dynamic target adjustment](#AapsScreens-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../SettingUpAaps/Preferences.md) @MilosKozak
- SMB algoritması güncellemesi @Tornado-Tim
- [Low glucose suspend mode](#Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](#key-aaps-features-minimal-carbs-required-for-suggestion) @twain47 @Tornado-Tim
- Bakım portalı kaldırıldı (Eylemlere taşındı) @MilosKozak
- [new encrypted backup format](ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../RemoteFeatures/SMSCommands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](#SMSCommands-commands) commands @Lexsus
- Dana pompalarında küçük bazallar için destek @Mackwe
- küçük Insight düzeltmeleri @TebbeUbben @MilosKozak
- ["Default language" option](#Preferences-general) @MilosKozak
- vektör simgeleri @Philoul
- [set neutral temps for MDT pump](#MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- Geçmiş tarayıcı geliştirmeleri @MilosKozak
- OpenAPS MA algoritması kaldırıldı @Tornado-Tim
- Oref0 duyarlılığı kaldırıldı @Tornado-Tim
- [Biometric or password protection](#Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../DailyLifeWithAaps/Automations.md) @PoweRGbg
- [Open Humans uploader](../SupportingAaps/OpenHumans.md) @TebbeUbben @AdrianLxM
- Yeni dokümantasyon @Achim

(Releasenotes-version-2-6-1-4)=
## Sürüm 2.6.1.4

Yayınlanma tarihi: 04-05-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- Insight: Ürün yazılımı sürüm 3 için bolusta titreşimi devre dışı bırakın - ikinci deneme
- Aksi takdirde 2.6.1.3 ile aynıdır. Güncelleme isteğe bağlıdır.

## Sürüm 2.6.1.3

Yayınlanma tarihi: 03-05-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- Insight: Ürün yazılımı sürüm 3 için bolusta titreşimi devre dışı bırakın
- Aksi takdirde 2.6.1.2 ile aynıdır. Güncelleme isteğe bağlıdır.

## Sürüm 2.6.1.2

Yayınlanma tarihi: 19-04-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- Insight hizmetindeki kilitlenme düzeltmesi
- Aksi takdirde 2.6.1.1 ile aynıdır. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

## Sürüm 2.6.1.1

Yayınlanma tarihi: 06-04-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- Combo pompa kullanırken SMS CARBS komut sorununu çözer
- Aksi takdirde 2.6.1 ile aynıdır. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

## Sürüm 2.6.1

Yayınlanma tarihi: 21-03-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- NSClient ayarlarında yalnızca `https://` girişine izin verir
- Fixed [BGI](../UsefulLinks/Glossary.md) displaying bug on watches
- Ufak kullanıcı arayüzü hataları düzeltildi
- Insight çökme hataları düzeltildi
- Combo pompadaki gelecekteki karbonhidratlar düzeltildi
- Fixed LocalProfile -> NS sync
- Insight uyarıları iyileştirmeleri
- Pompa geçmişinden bolus algılaması iyileştirildi
- NSClient bağlantı ayarları (wifi, şarj) düzeltildi
- Kalibrasyonların xDrip'e gönderilmesi düzeltildi

(Releasenotes-version-2-6-0)=
## Sürüm 2.6.0

Yayınlanma tarihi: 29-02-2020

Apk'yi oluşturmak için lütfen [Android Studio sürüm 3.6.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- Küçük tasarım değişiklikleri (başlangıç sayfası...)

- Careportal tab / menu removed

- New Local Profile plugin

  - Yerel profil 1'den fazla profil tutabilir
  - Profiller klonlanabilir ve düzenlenebilir
  - NS'ye profil yükleme yeteneği
  - Eski profil değişimleri Yerel Profil'de yeni profile kopyalanabilir (zaman kaydırma ve yüzde uygulanır)
  - Vertical NumberPicker for targets

- Basit profil kaldırıldı

- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- MDT eklentisi: Yinelenen girişlerle ilgili hata düzeltildi

- Birimler profilde belirtilmemiş ancak genel ayarlardır

- Başlangıç sihirbazına yeni ayarlar eklendi

- Farklı kullanıcı arayüzü ve dahili iyileştirmeler

- [Wear komplikasyonları](../WearOS/WearOsSmartwatch.md)

- New [SMS commands](../RemoteFeatures/SMSCommands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Dil desteği düzeltildi

- Objectives: [Allow to go back](#CompletingTheObjectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](#Automations-the-order-of-the-automations-in-the-list-matters)

- Otomasyon: devre dışı bırakılmış döngüde çalışan otomasyon hatası düzeltildi

- Combo için yeni durum satırı

- GlikozDurumu iyileştirme

- Geçici Hedef NS senkronizasyonu düzeltildi

- Yeni istatistik etkinliği

- Açık döngü modunda yayma bolusa izin ver

- Android 10 alarm desteği

- Tonlarca yeni çeviri

## Sürüm 2.5.1

Yayınlanma tarihi: 31-10-2019

Please note the [important notes](#Releasenotes-version-2-5-0) and [limitations](#Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](#Releasenotes-version-2-5-0). \* Ağ durumu alıcısında birçok kişinin çökmesine neden olan bir hata düzeltildi (kritik değil ama yeniden hesaplamada çok fazla enerji israfına neden oluyor). \* Güncelleme bildirimini tetiklemeden küçük güncellemelerin yapılmasına izin verecek yeni sürüm.

(Releasenotes-version-2-5-0)=
## Sürüm 2.5.0

Yayınlanma tarihi: 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Önemli notlar

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../SettingUpAaps/BuildingAaps.md) or [update](UpdateToNewVersion).
- If you are using xDrip [identify receiver](#xdrip-identify-receiver) must be set.
- Yamalı Dexcom uygulamasıyla Dexcom G6 kullanıyorsanız, [2.4 klasöründeki ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4) sürümüne ihtiyacınız olacaktır.
- Glimp, 4.15.57 ve daha yeni sürümlerde desteklenmektedir.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Bu güncelleme benim için mi? Şu anda DESTEKLENMİYOR

- Android 5 ve altı
- Poctech
- 600SerisiYükleyici
- 2.3 dizininden Yamalı Dexcom

### Başlıca yeni özellikler

- Dahili TargetSDK 28 (Android 9) olarak değiştirilmesi, jetpack desteği
- RxJava2, Okhttp3, Retrofit desteği
- Old [Medtronic pumps](../CompatiblePumps/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../DailyLifeWithAaps/Automations.md)
- Allow to [bolus only part](#Preferences-advanced-settings-overview) from bolus wizard calculation
- İnsülin aktivitesi oluşturma
- AİNS tahminlerini otoduyarlılık sonucuna göre ayarlama
- Yamalı Dexcom apk'leri için yeni destek ([2.4 klasörü ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- İmza doğrulayıcı
- OpenAPS kullanıcıları için hedeflerin atlanmasına izin ver
- New [objectives](../SettingUpAaps/CompletingTheObjectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Dana sürücülerinde yanlış zaman farkının bildirildiği hata düzeltildi
- Fixed bug in [SMS communicator](../RemoteFeatures/SMSCommands.md)

## Sürüm 2.3

Yayınlanma tarihi: 25-04-2019

### Başlıca yeni özellikler

- Insight için önemli güvenlik düzeltmesi (Insight kullanıyorsanız gerçekten önemlidir!)
- Geçmiş-Tarayıcısı düzeltmesi
- Delta hesaplaması düzeltmesi
- Dil güncellemeleri
- GIT'i kontrol etme ve kademeli yükseltme konusunda uyarı
- Birçok otomatik test
- AlarmSound Hizmetindeki olası çökmeyi düzeltme (teşekkürler @lee-b!)
- KŞ verilerinin yayını düzeltildi (şimdi SMS izninden bağımsız çalışıyor!)
- Yeni Sürüm Denetleyicisi

## Sürüm 2.2.2

Yayınlanma tarihi: 07-04-2019

### Başlıca yeni özellikler

- Otoduyarlılık düzeltmesi: GH hedefi yükseltme/düşürme devre dışı bırakma
- Yeni çeviriler
- Insight sürücü düzeltmesi
- SMS eklentisi düzeltmesi

## Sürüm 2.2

Yayın tarihi: 29-03-2019

### Başlıca yeni özellikler

- [DST düzeltmesi](#time-adjustment-daylight-savings-time-dst)
- Wear güncellemesi
- [SMS plugin](../RemoteFeatures/SMSCommands.md) update
- Görevlere geri dönüş.
- Telefon hafızası doluysa döngüyü durdur

## Sürüm 2.1

Yayınlanma tarihi: 03-03-2019

### Başlıca yeni özellikler

- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Ana ekranda durum ışıkları (Nico Schmitz)
- Yaz saati uygulaması yardımcısı (Roumen Georgiev)
- Fix processing profile names coming from NS (Johannes Mockenhaupt)
- Kullanıcı arayüzü blokaj düzeltmesi (Johannes Mockenhaupt)
- Güncellenmiş G5 uygulaması desteği (Tebbe Ubben ve Milos Kozak)
- G6, Poctech, Tomato, Eversense KŞ kaynağı desteği (Tebbe Ubben ve Milos Kozak)
- Tercihlerden SMB'nin devre dışı bırakılması düzeltmesi (Johannes Mockenhaupt)

### Misc

- Varsayılan olmayan `smbmaxminutes` değeri kullanıyorsanız, bu değeri tekrar ayarlamanız gerekir

## Sürüm 2.0

Yayınlanma tarihi: 03-11-2018

### Başlıca yeni özellikler

- oref1/SMB desteği ([oref1 dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) SMB'den ne bekleyeceğinizi, nasıl davranacağını, neyi başarabileceğini ve sorunsuz çalışabilmesi için nasıl kullanacağını öğrenmek için dokümantasyonu mutlaka okuyun.
- Accu-Chek Combo pump support
- Kurulum sihirbazı: AAPS'i kurma sürecinde size rehberlik eder

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### AMA'dan SMB'ye geçerken yapılacak ayarlar

- SMB'lerin etkinleştirilmesi için Görev 10'a başlanılmalıdır (SMB sekmesi genellikle hangi kısıtlamaların geçerli olduğunu gösterir)

- maxAİNS artık yalnızca bazal değil, tüm_ AİNS'i içeriyor. Diğer bir deyişle, bir yemek için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, AİNS 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez.

- min_5m_carbimpact varsayılanı, AMA'dan SMB'ye geçerken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir

- AAPS 2.0 apk oluştururken dikkat edin: İsteğe bağlı yapılandırma, Android Gradle eklentisinin mevcut sürümü tarafından desteklenmiyor! Derlemeniz "isteğe bağlı yapılandırma" ile ilgili bir hatayla başarısız olursa, aşağıdakileri yapabilirsiniz:

  - Dosya > Ayarlar'a tıklayarak Tercihler penceresini açın. (Mac'te, Android Studio > Tercihler).
  - Sol bölmede, "Build, Execution, Deployment > Compiler" Oluştur, Yürüt, Dağıt > Derleyici'ye tıklayın.
  - Yapılandır onay kutusunun işaretini kaldırın.
  - Uygula veya Tamam'a tıklayın.

(Releasenotes-overview-tab)=
### Genel bakış sekmesi

- Üst şerit, döngüyü askıya alma/devre dışı bırakma, profili görüntüleme/ayarlama ve geçici hedefleri (GH) başlatma/durdurma erişimi sağlar. GH'ler, tercihlerde ayarlanan varsayılanları kullanır. Yeni Hypo GH seçeneği, döngünün karbonhidratları çok agresif aşırı düzeltmesini önlemek için yüksek geçici bir GH'dir.
- Tedavi butonları: eski tedavi butonu hala kullanılabilir, ancak varsayılan olarak gizlidir. Butonların görünürlüğü artık yapılandırılabilir. New insulin button, new carbs button (including [eCarbs/extended carbs](../DailyLifeWithAaps/ExtendedCarbs.md))
- [Renkli tahmin çizgileri](#aaps-screens-prediction-lines)
- NS'ye yüklenen insülin/karbonhidrat/hesap makinesi/hazırlama+doldurma iletişim kutularında bir not alanı gösterme seçeneği
- Güncellenmiş hazırlama/doldurma iletişim kutusu, set değişikliği ve kartuş değişikliği için hazırlamaya ve bakım portalı girişleri oluşturmaya olanak tanır

### Saat

- Ayrı yapı varyantı düştü, şimdi düzenli tam yapıya dahil edildi. Saatten bolus kontrollerini kullanmak için telefonda bu ayarı etkinleştirin
- Sihirbaz artık sadece karbonhidrat istiyor (ve saat ayarlarında etkinleştirilmişse yüzde). Hesaplamaya hangi parametrelerin dahil olduğu telefondaki ayarlarda yapılandırılabilir
- onaylar ve bilgi diyalogları artık wear 2.0'da da çalışıyor
- yKarb menü girişi eklendi

### Yeni eklentiler

- KŞ kaynağı olarak PocTech uygulaması
- KŞ kaynağı olarak Dexcom yamalı uygulama
- oref1 duyarlılık eklentisi

### Misc

- Uygulama artık tüm eklentileri göstermek için çekmeceyi kullanıyor; konfigürasyon ayarlarında görünür olarak seçilen eklentiler üstte sekmeler olarak gösterilir (favoriler)
- Konfigürasyon ayarları ve Görevler sekmeleri için elden geçirme, açıklamalar ekleme
- Yeni uygulama simgesi
- Çok sayıda iyileştirme ve hata düzeltmesi
- Pompaya daha uzun süre ulaşılamazsa (örn. boşalmış pompa pili) ve kaçırılan kan şekeri ölçümleri (ayarlarda *Yerel uyarılar*'a bakın) durumunda Nightscout'tan bağımsız uyarılar
- Ekranı açık tutma seçeneği
- Bildirimi Android bildirimi olarak gösterme seçeneği
- Gelişmiş filtreleme (SMB'yi ve yemeklerden 6 saat sonra her zaman etkinleştirmeyi sağlayan), yamalı Dexcom uygulaması veya KŞ kaynağı olarak Xdripte G5 yerel modu ile desteklenir.
