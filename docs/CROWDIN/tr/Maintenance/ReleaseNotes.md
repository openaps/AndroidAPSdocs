(Releasenotes-release-notes)=
# Sürüm notları

Please follow the instructions in the [update manual](UpdateToNewVersion). Güncelleme kılavuzunda güncelleme yaparken en sık karşılaşılan zorlukları ele alan bir sorun giderme bölümü de bulabilirsiniz.

Yeni bir güncelleme çıkar çıkmaz aşağıdaki bilgileri alacaksınız:

![Update info](../images/AAPS_LoopLGS60days.png)



O zaman güncellemek için 60 gününüz var. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see [glossary](../UsefulLinks/Glossary.md)) as in [objective 6](#objectives-objective6).

30 gün daha güncelleme yapmazsanız (yeni yayın tarihinden 90 gün sonra) AAPS, Açık Döngüye geçecektir.

![Update info](../images/AAPS_LoopDisable90days.png)

Lütfen bu değişikliğin sizi rahatsız etmeyi amaçlamadığını, ancak güvenlik nedenlerinden kaynaklandığını anlayın. AAPS'nin yeni sürümleri yalnızca yeni özellikler sağlamakla kalmaz, aynı zamanda önemli güvenlik düzeltmeleri de sağlar. Bu nedenle, her kullanıcının mümkün olan en kısa sürede güncelleme yapması gerekir.. Ne yazık ki hala çok eski sürümlerden hata raporları var. Bu nedenle bu uyarı, her bir kullanıcı ve genel DIY topluluğu için güvenliği artırma girişimidir. Anlayışınız için teşekkür ederiz.

```{admonition} First version of AAPS
:class: not

İlk test sürümü 2015'te başladı. 2016 yılında ilk sürüm yayımlandı.

Bu yayımların kronolojisi şu anda mevcut değil, ancak bu sorular birçok kez sorulduğu için burada dokümante ediyoruz.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Android sürümü ve AAPS sürümü

Akıllı telefonunuz Android 9'dan daha eski bir Android Sürümü kullanıyorsa, en az Android 9 gerektirdiğinden AAPS v3 ve sonraki sürümleri kullanamazsınız.

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

(version3300)=
## Version 3.3.0.0

Version 3.3 is close ! Use the version switcher at the bottom right of your screen to see what's new.

![Open language menu](../images/documentation_language_menu.png)

(version3200)=
## Version 3.2.0.0 dedicated to @Philoul

Release date: 23-10-2023

### Önemli ipuçları

- NS 15 is required
- NS v3 eklentisinde websockets kullanırken, NS UI (artı düğmesi) aracılığıyla girilen işlemler ve v1 API kullanan diğer uygulamalar AAPS'e gönderilmez. Bu, NS'nin gelecekteki sürümünde düzeltilecektir. NS tamamen dahili olarak v3'e geçene kadar AAPS ve AAPSClient'te her zaman aynı istemciyi (v1 veya v3) kullanın. Aynısı AAPS ve AAPSClient'in kendisi için de geçerlidir.
- v3 eklentisindeki websockets, v1 eklentisine benzer şekilde çalışır. AAPS, etkinleştirilmiş web yuvaları olmadan, NS'den düzenli olarak indirmeleri planlar ve bu, NS kalıcı olarak bağlı olmadığı için daha düşük güç tüketir. Bu da karşı tarafta, veri alışverişinde gecikmeler anlamına gelir. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
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
- tests cleaup @ryanhaining @MilosKozak
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
- remember NS still uses v1 internaly so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient on SMS if you want enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preffered because of efficiency
- using websockets or not using with v3 depends on your preference
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

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
- doğrudan saat yüzü kurulumuna izin vermek için gradle geri alındı
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
- New [Low Ressolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Yeni NSClient tablet düzeni @MilosKozak
- NSClient insülin, hassasiyet ve ekran ayarlarını doğrudan ana AAPS'den aktarır @MilosKozak
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

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start [objective 11](#objectives-objective11). Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

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
  - Hedefler için Dikey NumberPicker

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
- NS'den gelen profili adları düzeltmesi (Johannes Mockenhaupt)
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
- [\_Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md) pump support
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
