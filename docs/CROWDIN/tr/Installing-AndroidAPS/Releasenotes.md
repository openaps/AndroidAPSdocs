(Releasenotes-release-notes)=
# Sürüm notları

Lütfen [güncelleme kılavuzundaki](../Installing-AndroidAPS/Update-to-new-version.md) talimatları izleyin. Güncelleme kılavuzunda güncelleme yaparken en sık karşılaşılan zorlukları ele alan bir sorun giderme bölümü de bulabilirsiniz.

Yeni bir güncelleme çıkar çıkmaz aşağıdaki bilgileri alacaksınız:

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Güncelleme bilgisi
```

O zaman güncellemek için 60 gününüz var. Bu 60 gün içinde güncelleme yapmazsanız AAPS, [görev 6](../Usage/Objectives.html) daki gibi LGS'ye geri döner (düşük glikoz askıya alma - [sözlüğe](../Getting-Started/Glossary.md) bakın).

30 gün daha güncelleme yapmazsanız (yeni yayın tarihinden 90 gün sonra) AAPS, Açık Döngüye geçecektir.

Lütfen bu değişikliğin sizi rahatsız etmeyi amaçlamadığını, ancak güvenlik nedenlerinden kaynaklandığını anlayın. AAPS'nin yeni sürümleri yalnızca yeni özellikler sağlamakla kalmaz, aynı zamanda önemli güvenlik düzeltmeleri de sağlar. Bu nedenle, her kullanıcının mümkün olan en kısa sürede güncelleme yapması gerekir.. Ne yazık ki hala çok eski sürümlerden hata raporları var. Bu nedenle bu uyarı, her bir kullanıcı ve genel DIY topluluğu için güvenliği artırma girişimidir. Anlayışınız için teşekkür ederiz.

```{admonition} First version of AAPS
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
- ComboV2 sürücüsüne geçmek istiyorsanız, Ruffy'nin kaldırılması ve pompanın AAPS ile yeniden eşleştirilmesi gerekir.


### Değişiklikler

- EOPatch2 / GlucomenDay pompa sürücüsü @jungsomyeonggithub @MilosKozak
- ComboV2 pompa sürücüsü (Ruffy'ye gerek yok) @dv1
- Kore DanaI desteği @MilosKozak
- Glunovo CGM desteği @christinadamianou
- G7 desteği @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 eklentisi @MilosKozak
- Tidepool desteği @MilosKozak
- Yumuşatma eklentisi @MilosKozak, @justmara, Üstel yumuşatma @nichi (Tsunami), Ortalama yumuşatma @jbr7rr
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
- [Görevler değişti.](Objectives-objective-3-prove-your-knowledge) **Tamamlanmayan görevleri güncellemeden önce tamamlayın.**
- Depo konumu hâlâ <https://github.com/nightscout/AndroidAPS>'de. Git'e aşina değilseniz, güncellemenin en kolay yolu, AAPS dizini kaldırmak ve [yeni bir klon](../Installing-AndroidAPS/Building-APK.md) oluşturmaktır.
- Apk'yi oluşturmak için lütfen [Android Studio sürüm 4.1.1](https://developer.android.com/studio/) veya daha yenisini kullanın.

### Başlıca yeni özellikler

- [Omnipod Eros desteği](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda ve @ps2 @itsmojo'ya özel teşekkür Omnipod için Loop sürücüsüne katılan diğer herkese ve GetRileyLink.org'dan @jlucasvt' a
- [bolus danışmanı](Preferences-bolus-advisor) & [yemek hatırlatıcısı](Screenshots-eating-reminder) @MilosKozak
- [Yeni saat arayüzü](Watchfaces-new-watchface-as-of-AAPS-2-8) @rICTx-T1D
- Dana RS bağlantı iyileştirmeleri @MilosKozak
- Dexcom yerel uygulaması için SMB'deki "Değiştirilmemiş CGM değerleri" davranışı kaldırıldı
- Yeni [Düşük Çözünürlüklü Dış Görünüm](Preferences-skin)
- Yeni ["Hamile" hasta türü](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Yeni NSClient tablet düzeni @MilosKozak
- NSClient insülin, hassasiyet ve ekran ayarlarını doğrudan ana AAPS'den aktarır @MilosKozak
- [Tercih filtresi](../Configuration/Preferences.md) @Brian Quinion
- Yeni pompa simgeleri @Rig22 @@teleriddler @osodebailar
- Yeni [insülin tipi Lyumjev](Config-Builder-lyumjev)
- Kurulum sihirbazı iyileştirmeleri @MilosKozak
- Güvenlik iyileştirmeleri @dlvoy
- Çeşitli iyileştirmeler ve düzeltmeler @AdrianLxM @Philoul @swissalpine @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Sürüm 2.7.0

Yayınlanma tarihi: 24-09-2020

**2.7'a güncelledikten sonra** [burada](../Installing-AndroidAPS/update2_7.md) açıklandığı gibi ayarları kontrol ettiğinizden ve düzenlediğinizden emin olun.

[Otomasyon özelliğini](../Usage/Automation.md) kullanmaya devam etmek için en azından [görev 11'i (sonraki sürümlerde görev 10!)](Objectives-objective-10-automation) başlatmanız gerekir (önceki tüm hedeflerin tamamlanması gerekir, aksi takdirde görev 11'i başlatmak mümkün değildir). Örneğin, [3. görev](Objectives-objective-3-prove-your-knowledge)'deki sınavı henüz bitirmediyseniz, [11. göreve](Objectives-objective-10-automation) başlayabilmek için sınavı tamamlamanız gerekir. Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

### Başlıca yeni özellikler

- bağımlılık enjeksiyonunun dahili kullanımı, kitaplık güncellemeleri, kotline yeniden kod yazımı @MilosKozak @AdrianLxM
- Dana pompaları için modüllerin kullanılması @MilosKozak
- [yeni düzen, düzen seçimi](../Getting-Started/Screenshots.md) @MilosKozak
- yeni [durum ışıkları düzeni](Preferences-status-lights) @MilosKozak
- [çoklu grafik desteği](Screenshots-section-f-main-graph) @MilosKozak
- [Profil yardımcısı](../Configuration/profilehelper.md) @MilosKozak
- [dinamik hedef ayarının](Screenshots-visualization-of-dynamic-target-adjustment) görselleştirilmesi @Tornado-Tim
- yeni [tercihler düzeni](../Configuration/Preferences.md) @MilosKozak
- SMB algoritması güncellemesi @Tornado-Tim
- [Düşük glikoz askıya alma modu](Preferences-aps-mode) @Tornado-Tim
- [karbonhidrat gerekli bildirimleri](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- Bakım portalı kaldırıldı (Eylemlere taşındı) @MilosKozak
- [yeni şifreli yedekleme biçimi](../Usage/ExportImportSettings.md) @dlvoy
- [yeni SMS TOTP kimlik doğrulaması](../Children/SMS-Commands.md) @dlvoy
- [yeni SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) komutları @Lexsus
- Dana pompalarında küçük bazallar için destek @Mackwe
- küçük Insight düzeltmeleri @TebbeUbben @MilosKozak
- ["Varsayılan dil" seçeneği](Preferences-general) @MilosKozak
- vektör simgeleri @Philoul
- [MDT pompası için nötr geçicileri ayarlayın](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- Geçmiş tarayıcı geliştirmeleri @MilosKozak
- OpenAPS MA algoritması kaldırıldı @Tornado-Tim
- Oref0 duyarlılığı kaldırıldı @Tornado-Tim
- Ayarlar için [biyometrik veya parola koruması](Preferences-protection), bolus @MilosKozak
- [yeni otomasyon tetikleyicisi](../Usage/Automation.md) @PowerRGbg
- [Open Humans yükleyici](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
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
- Saatlerdeki [BGI](../Getting-Started/Glossary.md) hatası düzeltildi
- Ufak kullanıcı arayüzü hataları düzeltildi
- Insight çökme hataları düzeltildi
- Combo pompadaki gelecekteki karbonhidratlar düzeltildi
- Sabit [Yerel Profil -> NS senkronizasyonu](Config-Builder-upload-local-profiles-to-nightscout)
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

- Bakım portalı sekmesi / menüsü kaldırıldı - daha fazla ayrıntı [burada](../Usage/CPbefore26.md)

- Yeni [Yerel Profil eklentisi](Config-Builder-local-profile)

  - Yerel profil 1'den fazla profil tutabilir
  - Profiller klonlanabilir ve düzenlenebilir
  - NS'ye profil yükleme yeteneği
  - Eski profil değişimleri Yerel Profil'de yeni profile kopyalanabilir (zaman kaydırma ve yüzde uygulanır)
  - Hedefler için Dikey NumberPicker

- Basit profil kaldırıldı

- [Yayma bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) özelliği - kapalı döngü devre dışı bırakılacak

- MDT eklentisi: Yinelenen girişlerle ilgili hata düzeltildi

- Birimler profilde belirtilmemiş ancak genel ayarlardır

- Başlangıç sihirbazına yeni ayarlar eklendi

- Farklı kullanıcı arayüzü ve dahili iyileştirmeler

- [Wear komplikasyonları](../Configuration/Watchfaces.md)

- Yeni [SMS komutları](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Dil desteği düzeltildi

- Görevler: [Geri dönmeye izin ver](Objectives-go-back-in-objectives), Zaman getirme iletişim kutusu

- Otomasyon: [sıralamaya izin ver](Automation-sort-automation-rules)

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
