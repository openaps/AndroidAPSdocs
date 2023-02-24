(Releasenotes-release-notes)=
# Sürüm notları

Lütfen [güncelleme kılavuzundaki](../Installing-AndroidAPS/Update-to-new-version.md) talimatları izleyin. Güncelleme kılavuzunda güncelleme yaparken en sık karşılaşılan zorlukları ele alan bir sorun giderme bölümü de bulabilirsiniz.

Yeni bir güncelleme çıkar çıkmaz aşağıdaki bilgileri alacaksınız:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Güncelleme bilgisi
```

O zaman güncellemek için 60 gününüz var. Bu 60 gün içinde güncelleme yapmazsanız AAPS, [görev 6](../Usage/Objectives.html) daki gibi LGS'ye geri döner (düşük glikoz askıya alma - [sözlüğe](../Getting-Started/Glossary.md) bakın).

30 gün daha güncelleme yapmazsanız (yeni yayın tarihinden 90 gün sonra) AAPS, Açık Döngüye geçecektir.

Lütfen bu değişikliğin sizi rahatsız etmeyi amaçlamadığını, ancak güvenlik nedenlerinden kaynaklandığını anlayın. AndroidAPS'nin yeni sürümleri yalnızca yeni özellikler sağlamakla kalmaz, aynı zamanda önemli güvenlik düzeltmeleri de sağlar. Bu nedenle, her kullanıcının mümkün olan en kısa sürede güncelleme yapması gerekir.. Ne yazık ki hala çok eski sürümlerden hata raporları var. Bu nedenle bu uyarı, her bir kullanıcı ve genel DIY topluluğu için güvenliği artırma girişimidir. Anlayışınız için teşekkür ederiz.

```{admonition} First version of AndroidAPS
:class: not

İlk test sürümü 2015'te başladı. 2016 yılında ilk sürüm yayımlandı.

Bu yayımların kronolojisi şu anda mevcut değil, ancak bu sorular birçok kez sorulduğu için burada dokümante ediyoruz.

```

## Android sürümü ve AAPS sürümü

Akıllı telefonunuz Android 9'dan daha eski bir Android Sürümü kullanıyorsa, en az Android 9 gerektirdiğinden AAPS v3 ve sonraki sürümleri kullanamazsınız.

Daha eski Android'e sahip kullanıcıların AAPS'nin eski sürümünü kullanmasına izin vermek için, yalnızca sürüm doğrulamasını değiştiren yeni sürümler gönderildi. Başka hiçbir iyileştirme dahil değildir.

### Android 9 ve üstü

- En son AAPS sürümünü kullanın
- AAPS Kodunu <https://github.com/nightscout/AndroidAPS> adresinden indirin

### Android 8

- AAPS **2.8.2.1** sürümünü kullanın
- AAPS Kodunu <https://github.com/nightscout/AndroidAPS> 2.8.2.1 şubesinden indirin

### Android 7

- AAPS **2.6.2** sürümünü kullanın
- AAPS kodunu <https://github.com/nightscout/AndroidAPS> 2.6.2 şubesinden indirin

## Sürüm 3.2.0

Yayınlanma tarihi: XX-XX-2023

### Önemli ipuçları

- NS 15 gereklidir. Şu anda NS ana deposunun "dev" şubesi
- NS v3 eklentisinde websockets kullanırken, NS UI (artı düğmesi) aracılığıyla girilen işlemler ve v1 API kullanan diğer uygulamalar AAPS'e gönderilmez. Bu, NS'nin gelecekteki sürümünde düzeltilecektir.
- v3 eklentisindeki websockets, v1 eklentisine benzer şekilde çalışır. AAPS, etkinleştirilmiş web yuvaları olmadan, NS'den düzenli olarak indirmeleri planlar ve bu, NS kalıcı olarak bağlı olmadığı için daha düşük güç tüketir. Bu da karşı tarafta, veri alışverişinde gecikmeler anlamına gelir.
- Cgm kaynağı olarak xdrip kullanıyorsanız, dahili değişiklikler nedeniyle güncellemeden sonra tekrar seçmelisiniz.
- Tidepool, ilk görevi geçmek için NS yerine kullanılabilir
- xDrip+'a gönderirseniz, xDrip senkronizasyon eklentisini yapılandırmanız gerekir. AAPS'den xDrip'te KŞ almak için "xDrip+ Sync Follower" kaynağı seçilmelidir.


### Değişiklikler

- EOPatch2 / GlucomenDay pompa sürücüsü @jungsomyeonggithub @MilosKozak
- ComboV2 pompa sürücüsü (Ruffy'ye gerek yok) @dv1
- Glunovo CGM desteği @christinadamianou
- G7 desteği @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 eklentisi @MilosKozak
- Tidepool desteği @MilosKozak
- Yumuşatma eklentisi @MilosKozak @justmara, Tsunami projesinden esinlenmiştir, @jbr7rr
- 3.1 sürümündeki tonlarca sorun düzeltildi
- daha fazla yere not eklenmesine izin verme @Sergey Zorchenko
- UI düzeltmeleri @MilosKozak @osodebailar @Andries-Smit @yodax @philhoul @dv1 @paravoid
- yeni SMS komutları LOOP LGS/CLOSED @pzadroga
- wear çevirileri @Andries-Smit
- xdrip iletişimi @MilosKozak ayrı modülüne taşındı
- dahili değişiklikler: güncellenmiş kütüphane sürümleri, rx3 geçişi, yeni modül yapısı @MilosKozak
- Diaconn sürücü düzeltmeleri @miyeongkim
- AAPSClient ana telefon elektriğe takılıysa bilgi verir @MilosKozak
- 125 binden fazla yeni kod satırı, 150 bin satır değiştirildi

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
- `Wear OS saat kutucukları <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, çevirileri @Andries-Smit
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
- **Veriler yeni veritabanına taşınmaz.** Şikayet etmeyin, bu çok büyük bir değişikliktir, bundan dolayı mümkün değildir. Böylece güncellemeden sonra Aktif İnsülin, Aktif Karbonhidrat, tedaviler vb. temizlenecektir. Yeni [profil ](../Usage/Profiles.md) oluşturmanız ve yeni Aktif İnsülin ve Aktif Karbonhidrat değerleri ile başlamanız gerekir. Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.
- AAPS ve NSClient'in aynı sürümünü kullanın

**3.0'a güncelledikten sonra** [burada](../Installing-AndroidAPS/update3_0.md) açıklandığı gibi ayarları kontrol ettiğinizden ve düzenlediğinizden emin olun.

### Hazırlık adımları

**Güncellemeden en az iki gün önce:**

- Nightscout'ta Dexcom bridge'ı devre dışı bırakın
- Toplayıcı olarak G5/G6 ve xDrip kullanıyorsanız, xDrip'i 14 Ocak 2022'den daha yeni bir sürüme güncellemeniz gerekir
- G5/G6 kullanıyorsanız, toplayıcı olarak BYODA'ya geçiş yapıyorsanız, geri yumuşatmadan "back-smoothing" yararlanmanız önerilir (xDrip'i başka amaçlar için de kullanabilirsiniz, xDrip BYODA'dan veri alabilir)

### Değişiklikler

- 100k satır değişti, 105k satır yeni kod

- [Omnipod DASH desteği](../Configuration/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i desteği](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [DiaconnG8 desteği](../Configuration/DiaconnG8.md)

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

- NSProfili gitti, sadece yerel profil kullanılabilir. Yerel profil [NS ile senkronize edilebilir](update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Unutulan [ana şifre sıfırlama prosedürü](update3_0-reset-master-password) @MilosKozak

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

- Lütfen ayrıca aşağıdaki [2.8.1.1 sürümü için önemli ipuçlarına](Releasenotes-important-hints-2-8-1-1) bakın.

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
- fix for SMB & Dexcom app
- watchface fixes
- crash reporting improved
- gradle reverted to allow direct watchface instalation
- automation fixes
- RS driver improvement
- various crashes fixed
- UI fixes and improvements
- new translations

(Releasenotes-version-2-8-0)=
## Sürüm 2.8.0

Yayınlanma tarihi: 01-01-2021

### Önemli ipuçları

- **Minimum Android version is 8.0 now.** For older Android versions you can still use 2.6.1.4 from old repo.
- [Objectives have changed.](Objectives-objective-3-prove-your-knowledge) **Finish not completed objectives before update.**
- Repository location still on <https://github.com/nightscout/AndroidAPS> . Git'e aşina değilseniz, güncellemenin en kolay yolu, AndroidAPS dizini kaldırmak ve [yeni bir klon](../Installing-AndroidAPS/Building-APK.md) oluşturmaktır.
- Please use [Android Studio 4.1.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- [Omnipod Eros support](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](Preferences-bolus-advisor) & [eating reminder](Screenshots-eating-reminder) @MilosKozak
- [New watchface](Watchfaces-new-watchface-as-of-androidaps-2-8) @rICTx-T1D
- Dana RS connection improvements @MilosKozak
- Removed "Unchanged CGM values" behavior in SMB for Dexcom native app
- New [Low Ressolution Skin](Preferences-skin)
- New ["Pregnant" patient type](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- New NSClient tablet layout @MilosKozak
- NSClient transfer insulin, senstivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../Configuration/Preferences.md) @Brian Quinion
- New pump icons @Rig22 @@teleriddler @osodebailar
- New [insulin type Lyumjev](Config-Builder-lyumjev)
- SetupWizard improvements @MilosKozak
- Security improvements @dlvoy
- Various improvements and fixes @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Sürüm 2.7.0

Yayınlanma tarihi: 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](Objectives-objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation). Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

### Başlıca yeni özellikler

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- using modules for Dana pumps @MilosKozak
- [new layout, layout selection](../Getting-Started/Screenshots.md) @MilosKozak
- new [status lights layout](Preferences-status-lights) @MilosKozak
- [multiple graphs support](Screenshots-section-f-main-graph) @MilosKozak
- [Profile helper](../Configuration/profilehelper.md) @MilosKozak
- visualization of [dynamic target adjustment](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../Configuration/Preferences.md) @MilosKozak
- SMB algorithm update @Tornado-Tim
- [Low glucose suspend mode](Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [new encrypted backup format](../Usage/ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../Children/SMS-Commands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) commands @Lexsus
- better support for tiny basals on Dana pumps @Mackwe
- small Insight fixes @TebbeUbben @MilosKozak
- ["Default language" option](Preferences-general) @MilosKozak
- vector icons @Philoul
- [set neutral temps for MDT pump](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Sürüm 2.6.1.4

Yayınlanma tarihi: 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. Güncelleme isteğe bağlıdır.

## Sürüm 2.6.1.3

Yayınlanma tarihi: 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. Güncelleme isteğe bağlıdır.

## Sürüm 2.6.1.2

Yayınlanma tarihi: 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

## Sürüm 2.6.1.1

Yayınlanma tarihi: 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

## Sürüm 2.6.1

Yayınlanma tarihi: 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../Getting-Started/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed [LocalProfile -> NS sync](Config-Builder-upload-local-profiles-to-nightscout)
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(Releasenotes-version-2-6-0)=
## Sürüm 2.6.0

Yayınlanma tarihi: 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Başlıca yeni özellikler

- Small design changes (startpage...)

- Careportal tab / menu removed - more details [here](../Usage/CPbefore26.md)

- Yeni [Yerel Profil eklentisi](Config-Builder-local-profile)

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Veritical NumberPicker for targets

- SimpleProfile is removed

- [Yayma bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) özelliği - kapalı döngü devre dışı bırakılacak

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [Wear komplikasyonları](../Configuration/Watchfaces.md)

- New [SMS commands](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](Objectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](Automation-sort-automation-rules)

- Otomasyon: devre dışı bırakılmış döngüde çalışan otomasyon hatası düzeltildi

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Sürüm 2.5.1

Yayınlanma tarihi: 31-10-2019

Lütfen [sürüm 2.5.0](Releasenotes-version-2-5-0) için listelenen [önemli notlara](Releasenotes-important-notes-2-5-0) ve [sınırlamalara](Releasenotes-is-this-update-for-me-currently-is-not-supported) dikkat edin. \* Ağ durumu alıcısında birçok kişinin çökmesine neden olan bir hata düzeltildi (kritik değil ama yeniden hesaplamada çok fazla enerji israfına neden oluyor). \* Güncelleme bildirimini tetiklemeden küçük güncellemelerin yapılmasına izin verecek yeni sürüm.

(Releasenotes-version-2-5-0)=
## Sürüm 2.5.0

Yayınlanma tarihi: 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Önemli notlar

- [Apk'yı oluşturmak](../Installing-AndroidAPS/Building-APK.md) veya [güncellemek](../Installing-AndroidAPS/Update-to-new-version.html) için lütfen [Android Studio Sürüm 3.5.1](https://developer.android.com/studio/) veya daha yenisini kullanın.
- xDrip kullanıyorsanız [alıcıyı tanımlayın](xdrip-identify-receiver) ayarlı olmalıdır.
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
- Eski [Medtronic pompaları](../Configuration/MedtronicPump.md) desteği (RileyLink gerekir)
- Yeni [Otomasyon eklentisi](../Usage/Automation.md)
- Bolus sihirbazı hesaplamasından [yalnızca bolus kısmına](Preferences-advanced-settings-overview) izin ver
- İnsülin aktivitesi oluşturma
- AİNS tahminlerini otoduyarlılık sonucuna göre ayarlama
- Yamalı Dexcom apk'leri için yeni destek ([2.4 klasörü ](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- İmza doğrulayıcı
- OpenAPS kullanıcıları için hedeflerin atlanmasına izin ver
- Yeni [görevler](../Usage/Objectives.md) - sınav, başvuru yönetimi (En az "Açık döngüden başlama" görevine başladıysanız önceki sürümlerde sınav isteğe bağlıdır.)
- Dana sürücülerinde yanlış zaman farkının bildirildiği hata düzeltildi
- [SMS Kominikatör](../Children/SMS-Commands.md)'deki hata düzeltildi

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

- [DST düzeltmesi](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear güncellemesi
- [SMS eklentisi](../Children/SMS-Commands.md) güncellemesi
- Görevlere geri dönüş.
- Telefon hafızası doluysa döngüyü durdur

## Sürüm 2.1

Yayınlanma tarihi: 03-03-2019

### Başlıca yeni özellikler

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) desteği (Tebbe Ubben ve JamOrHam tarafından)
- Ana ekranda durum ışıkları (Nico Schmitz)
- Yaz saati uygulaması yardımcısı (Roumen Georgiev)
- NS'den gelen profili adları düzeltmesi (Johannes Mockenhaupt)
- Kullanıcı arayüzü blokaj düzeltmesi (Johannes Mockenhaupt)
- Güncellenmiş G5 uygulaması desteği (Tebbe Ubben ve Milos Kozak)
- G6, Poctech, Tomato, Eversense KŞ kaynağı desteği (Tebbe Ubben ve Milos Kozak)
- Tercihlerden SMB'nin devre dışı bırakılması düzeltmesi (Johannes Mockenhaupt)

### Diğer

- Varsayılan olmayan `smbmaxminutes` değeri kullanıyorsanız, bu değeri tekrar ayarlamanız gerekir

## Sürüm 2.0

Yayınlanma tarihi: 03-11-2018

### Başlıca yeni özellikler

- oref1/SMB desteği ([oref1 dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) SMB'den ne bekleyeceğinizi, nasıl davranacağını, neyi başarabileceğini ve sorunsuz çalışabilmesi için nasıl kullanacağını öğrenmek için dokümantasyonu mutlaka okuyun.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pompa desteği
- Kurulum sihirbazı: AndroidAPS'i kurma sürecinde size rehberlik eder

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### AMA'dan SMB'ye geçerken yapılacak ayarlar

- SMB'lerin etkinleştirilmesi için Görev 10'a başlanılmalıdır (SMB sekmesi genellikle hangi kısıtlamaların geçerli olduğunu gösterir)

- maxAİNS artık yalnızca bazal değil, tüm_ AİNS'i içeriyor. Diğer bir deyişle, bir yemek için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, AİNS 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez.

- min_5m_carbimpact varsayılanı, AMA'dan SMB'ye geçerken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir

- AndroidAPS 2.0 apk oluştururken dikkat edin: İsteğe bağlı yapılandırma, Android Gradle eklentisinin mevcut sürümü tarafından desteklenmiyor! Derlemeniz "isteğe bağlı yapılandırma" ile ilgili bir hatayla başarısız olursa, aşağıdakileri yapabilirsiniz:

  - Dosya > Ayarlar'a tıklayarak Tercihler penceresini açın. (Mac'te, Android Studio > Tercihler).
  - Sol bölmede, "Build, Execution, Deployment > Compiler" Oluştur, Yürüt, Dağıt > Derleyici'ye tıklayın.
  - Yapılandır onay kutusunun işaretini kaldırın.
  - Uygula veya Tamam'a tıklayın.

(Releasenotes-overview-tab)=
### Genel bakış sekmesi

- Üst şerit, döngüyü askıya alma/devre dışı bırakma, profili görüntüleme/ayarlama ve geçici hedefleri (GH) başlatma/durdurma erişimi sağlar. GH'ler, tercihlerde ayarlanan varsayılanları kullanır. Yeni Hypo GH seçeneği, döngünün karbonhidratları çok agresif aşırı düzeltmesini önlemek için yüksek geçici bir GH'dir.
- Tedavi butonları: eski tedavi butonu hala kullanılabilir, ancak varsayılan olarak gizlidir. Butonların görünürlüğü artık yapılandırılabilir. Yeni insülin butonu, yeni karbonhidrat butonu ([eCarbs/yayma karbonhidrat](../Usage/Extended-Carbs.md) dahil)
- [Renkli tahmin çizgileri](../Getting-Started/Screenshots-prediction-lines)
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

### Diğer

- Uygulama artık tüm eklentileri göstermek için çekmeceyi kullanıyor; konfigürasyon ayarlarında görünür olarak seçilen eklentiler üstte sekmeler olarak gösterilir (favoriler)
- Konfigürasyon ayarları ve Görevler sekmeleri için elden geçirme, açıklamalar ekleme
- Yeni uygulama simgesi
- Çok sayıda iyileştirme ve hata düzeltmesi
- Pompaya daha uzun süre ulaşılamazsa (örn. boşalmış pompa pili) ve kaçırılan kan şekeri ölçümleri (ayarlarda *Yerel uyarılar*'a bakın) durumunda Nightscout'tan bağımsız uyarılar
- Ekranı açık tutma seçeneği
- Bildirimi Android bildirimi olarak gösterme seçeneği
- Gelişmiş filtreleme (SMB'yi ve yemeklerden 6 saat sonra her zaman etkinleştirmeyi sağlayan), yamalı Dexcom uygulaması veya KŞ kaynağı olarak Xdripte G5 yerel modu ile desteklenir.
