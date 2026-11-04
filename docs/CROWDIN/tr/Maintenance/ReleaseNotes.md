
# Sürüm notları

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Yeni bir sürüme güncellemek için lütfen [güncelleme kılavuzundaki](UpdateToNewVersion.md) talimatları izleyin. Sorun giderme bölümü, güncelleme kılavuzu sayfasında **AAPS** güncellenirken en sık karşılaşılan zorlukları da ele alır.

```{admonition} Upgrading from AAPS v3?
:class: tip
Önemli davranış değişiklikleri (taşınan, yeniden adlandırılan veya kaldırılan özellikler) için [AAPS v4'te neler değişti](V4Changes.md) sayfasına bakın.
```

Yeni bir güncelleme olduğunda bunun gibi bir bildirim alırsınız:

![Güncelleme bilgisi](../images/AAPS_LoopDisable90days.png)

Son kullanma tarihine kadar güncellemezseniz **AAPS** Açık Döngü'ye geçer.

AAPS sürümlerinin bitiş tarihleri için [Kullanım ömrünün sonu](EndOfLife.md) sayfasına bakın.

**Bildirimi göz ardı etmeyin.** **AAPS**'in yeni sürümleri önemli güvenlik düzeltmeleri içerir. Bu nedenle her **AAPS** kullanıcısı en kısa sürede en son sürüme güncellemelidir. Bu, her **AAPS** kullanıcısının ve DIY topluluğunun güvenliğini artırmaya yönelik bir çabadır. Anlayışınız için teşekkür ederiz.

(maintenance-android-version-aaps-version)=

## Android sürümü ve AAPS sürümü

Akıllı telefonunuz Android 12'den eski bir Android sürümü kullanıyorsa AAPS v3.4 ve üstünü kullanamazsınız, çünkü bu sürümler en az Android 12 gerektirir.

Daha eski Android'e sahip kullanıcıların AAPS'in eski bir sürümünü kullanabilmesi için, yalnızca sürüm doğrulamasını değiştiren yeni sürümler yayınlandı. Başka hiçbir iyileştirme dahil değildir.

Aşağıdaki tabloda Android sürümünüzü bulun ve buna uyan **AAPS** sürümünü kullanın. Kod, gösterilen dal kullanılarak <https://github.com/nightscout/AndroidAPS> adresinden indirilir.

| Android sürümünüz | Kullanılacak AAPS sürümü | İndirilecek dal                                                  |
| ----------------- | ------------------------ | ---------------------------------------------------------------- |
| Android 12 and up | En son sürüm             | [master](https://github.com/nightscout/AndroidAPS) (varsayılan)  |
| Android 11        | **3.3.2.1**              | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10     | **3.2.0.4**              | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8         | **2.8.2.1**              | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7         | **2.6.2**                | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS sürümü

- AAPS, WearOS 3.0, 3.2 veya 3.5 (Android 11, API seviyesi 30) ya da daha yenisini gerektirir. WearOS 2 saatler desteklenmez.

```{tip}
WearOS 5, API seviyesi 34 (Android 14) [sınırlamalara](#BuildingAapsWearOs-WearOS5) sahiptir.
```

Başlıklı sürümler, her Android sürümü için en son yayınlanan sürümlerdir (yukarıdaki tabloya bakın). Diğer sürümler bunların arasında, notlarıyla veya GitHub'daki notlarına bir bağlantıyla yer alır.

(latestrelease)=

(version400)=

## Sürüm 4.0.0

Yayınlanma tarihi: 31-10-2026

**Yeni özellikler**

- Yeni kullanıcı arayüzü: telefon uygulaması Jetpack Compose ile yeniden oluşturuldu @MilosKozak
- [Genel arama](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Kotlin Multiplatform geçişi; Windows, Mac, Linux masaüstü ve iOS için istemci @MilosKozak
- [Senaryolar](../DailyLifeWithAaps/Scenes.md): bir dizi eylemi kaydedin ve birlikte çalıştırın @MilosKozak
- [Ana birim ↔ İstemci kontrolü](../RemoteFeatures/ClientMasterControl.md): istemci telefondan ana birime komut gönderme @MilosKozak
  - [İstemci rolleri](#client-master-control-roles): her istemci için Salt okunur, Yemekler, Bakıcı veya Yönetici @MilosKozak
  - [Güçlendirilmiş mod](#client-master-control-hardened-mode): istemci denetimi açıkken ana birim yalnızca eşleştirilmiş istemcilerden gelen değişiklikleri kabul eder @MilosKozak
  - İstemcide Nightscout'u da ayarlayan bir QR kod ile veya bir PIN ile eşleştirme; eşleştirme sırrı eşleştirmeden hemen sonra değiştirilir @MilosKozak
  - Her istemci için yalnızca istemcinin ihtiyaç duyduğu haklara sahip [kendi Nightscout belirteci](#client-master-control-own-token) @MilosKozak
- Pompalar, sihirbaz ve profiller genelinde [İnsülin Konsantrasyonu](../AdvancedOptions/InsulinConcentration.md) desteği (U200, U500) @Philoul @MilosKozak
- İnsülin yönetimi: insülin kataloğu, takma adlar, profilde ve sihirbazda seçim @Philoul
- Kalibrasyon eklentisi @MilosKozak
- [Yumuşatma](../CompatibleCgms/SmoothingBloodGlucoseData.md): Unscented Kalman Filtresi (UKF) @piecycle
- Yeni [otomasyon eylemleri](#automations-automation-action): **Yumuşatmayı değiştir** @olorinmaia ve **Senaryoyu çalıştır**, **etkinleştir** veya **devre dışı bırak** @MilosKozak
- [Bölge Rotasyonu](#Aapsscreens-site-rotation): infüzyon bölgelerini takip edin ve değiştirin @Philoul @MilosKozak
- [OtoAyar](../AdvancedOptions/Autotune.md) yeniden düzenlendi @Philoul
- Yeni [widget'lar](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Erişilebilirlik: telefon uygulaması ekran okuyucuyla çalışır - adlandırılmış kontroller, sesli durum, grafik açıklamaları ve göz atmak için başlıklar @MilosKozak
- [Ayarları içe aktarma](../Maintenance/ExportImportSettings.md): pompa ayarlarını koruyabilir @MilosKozak
- Kalıcı bildirim, Samsung Now bar desteği ve delta ile Android canlı güncellemelerini kullanır @premnirmal
- KŞ grafiği: genel bakıştaki her grafikte bir ölçümün değerlerini görmek için [basılı tutun](#aaps-screens-graph-press-and-hold) @t1dude @olorinmaia
- Performans iyileştirmeleri @MilosKozak
- Bolus sihirbazında otomatik yKarb @MilosKozak

**Yeni cihazlar**

- **CareLevo**: yeni [pompa sürücüsü](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: destek @MilosKozak
- **Instara**: yeni CGM kaynağı @leohunt

**Pompa sürücüsü iyileştirmeleri**

- Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn ve Equil için pompa genel bakış ekranları yeniden oluşturuldu @MilosKozak
- **Omnipod DASH**: PDM tarzı Ref kodları ve okunabilir hata açıklamaları, kayma (drift) telafisi her zaman açık, daha iyi bolus türü raporlama @nl-ruud
- **Omnipod**: Dash ve Eros için kesin bitiş tarihi @mcnelson
- **DanaR, RS**: test için pompa emülatörü @MilosKozak
- **Equil**: test için pompa emülatörü @MilosKozak
- Birçok pompa ve döngü düzeltmesi @MilosKozak ve diğerleri

**Wear OS**

- [Saat uygulaması](../WearOS/WearOsSmartwatch.md) Compose ile yeniden oluşturuldu, yeni paneller ve komplikasyonlar, Wear OS 6+ üzerinde otomatik saat arayüzü yükleme (Watch Face Push) @olorinmaia @Philoul
- CustomWatchface, WFF'ye özel bir saat arayüzü ile WearOS 6.0 (GW7, GW8, GW9...) için kullanılabilir @Philoul @olorinmaia
- CustomWatchface artık özelleştirebileceğiniz 5 komplikasyon yeri içerebilir (yeni özellik yalnızca eski saatlerde kullanılabilir) @Philoul
- Yeni [AAPS komplikasyonlarına dayalı WFF saat arayüzü](#wearos-complications-watchface-setup) @olorinmaia
- Bolus sihirbazı ve Hızlı Asistan sonucunda düzeltmeler @olorinmaia
- Ana menüde yeni KŞ grafiği ve Çalışma modu etkinliği @olorinmaia
- Bolus sihirbazı: telefondaki sihirbaz gibi karbonhidratları bölen [öğün türü](#WearOsSmartwatch-wizard-meal-type) sayfası ve saatte *yemek vakti* hatırlatıcısıyla [karbonhidrat zamanı](#WearOsSmartwatch-wizard-carb-time) @olorinmaia
- [Saatte telefon alarmları](#WearOsSmartwatch-phone-alarms): saat alarmı gösterir ve Sessize al ile 5 dk sessiz seçeneklerini sunar @olorinmaia

**Oluşturma**

- Etiket/dal oluşturmaları için CI iş akışları, JDK sürüm eşleştirmesi @Angus-repo

**Katkıda bulunanlar**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Tam değişiklik listesi: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## Sürüm 3.4.2.6

- Equil: kararlılık iyileştirildi @MilosKozak

---

(version3425)=

**Sürüm 3.4.2.5**

- Equil yarış durumu (race condition) düzeltmesi @MilosKozak

---

(version3424)=

**Sürüm 3.4.2.4**

- Equil düzeltmeleri @MilosKozak
- NS profil senkronizasyonu düzeltmesi @MilosKozak

---

(version3423)=

**Sürüm 3.4.2.3**

- Dash: kayma (drift) çözümü @nl-ruud
- NSClientV3: yeniden bağlandıktan sonraki veri boşluğu düzeltildi @MilosKozak
- Otomasyon: seri durumdan çıkarma (deserialization) düzeltildi @MilosKozak
- Equil: pil raporu düzeltildi @MilosKozak
- İş akışı temizliği @vanelsberg
- Equil: hatadan kurtarma iyileştirildi @MilosKozak
- DanaRS: yerel (domestic) pompa iletişimi düzeltildi @MilosKozak
- Insight: GBO senkronizasyonu düzeltildi @MilosKozak
- Dash: etkinleştirme hatası düzeltildi @nl-ruud

---

(version3422)=

**Sürüm 3.4.2.2**

- Equil ve Medtronic sorunları düzeltildi
- Medtrum güvenliği iyileştirildi

---

(version3421)=

**Sürüm 3.4.2.1**

- Equil: eşleştirme ve ilerleme iletişim kutusu düzeltildi @MilosKozak

---

(version3420)=

**Sürüm 3.4.2.0**

Yayınlanma tarihi: 02-04-2026

- Equil: farklı modeller için direnç düzeltildi @hhfcvmars
- Tidepool: oturum düzeltildi @MilosKozak
- Medtrum: çift doldurma engellenerek etkinleştirme akışı düzeltildi @MilosKozak
- AKRB: AKRB hesaplaması düzeltildi (tehlikeli bir uç durumu kapsar) @MilosKozak

---

(version3410)=

**Sürüm 3.4.1.0**

Yayınlanma tarihi: 08-03-2026

**Çekirdek**

- Yaz saati (DST) işleme düzeltildi @MilosKozak
- Normal hedefin tanınması iyileştirildi ve birleştirildi (mgdl > 99, mmol > 5.5) @MilosKozak
- SMS: RESTART PIN ile korunur @MilosKozak
- Bakım: yanlış dizin seçilirse uyarı @MilosKozak

**Pompa sürücüsü iyileştirmeleri**

- **Omnipod DASH**: BLE sürücü kodu omnipod/common modülüne taşındı @jwoglom
- **Omnipod DASH**: bağlantı durumunu düzeltme denemesi @MilosKozak
- **Omnipod**: Pod israfını önlemek için Pod etkinleştirmeden önce profil doğrulanır (#4534) @brianV
- **Medtronic**: ayarlar iletişim kutusunda aynı kodlama türünün gösterilmesi düzeltildi @mifi100
- **Medtronic**: ortak pompa sınıfları hazırlandı (Tandem hazırlığı) @andy-rozman
- **RileyLink**: kodlama düzeltmesi (#4519) @mifi100
- **Equil**: seri numarası önekine göre insülin pompası uyumluluğu genişletildi (#4510) @hhfcvmars
- **Equil**: günlük kaydı eklendi @MilosKozak
- **Diaconn G8**: günlük senkronizasyon hatası düzeltildi ve üretici yazılımı 3.58+ desteği eklendi @miyeongkim
- **Diaconn**: GBO süresi birim dönüşümü düzeltildi @miyeongkim
- **Diaconn**: geçmiş senkronizasyonu için commandQueue.loadEvents() kullanılır @miyeongkim
- Döngü askıya alınmışken ama pompa kullanılabilir durumdayken insülin iletimine izin verilir @cschuijt

**Bulut / Yedekleme**

- Google Drive'a yedekleme eklendi @Angus-repo
- Bulut depolama hata durumu değiştiğinde arayüz bilgilendirilir @Angus-repo
- Yerel ve bulut depolama aynı anda kullanılabilir @Angus-repo

**Tidepool**

- Tidepool OAuth2 geçişi iyileştirildi @MilosKozak
- Tidepool'un süresiz BLOCKED durumu düzeltildi, boş SSID'lerin reddedilmesi düzeltildi @michaeln-synapse

**NSClient**

- NSCv3: yeniden bağlanma iyileştirildi @MilosKozak

**Wear OS**

- Hesaplamada AİNS kullanılıyorsa sihirbaz sonucunda yeni AİNS gösterilir @olorinmaia
- Toplam miktar ile Wear BolusProgress düzeltildi @Philoul

**Arayüz**

- Bölge Rotasyonu için ic_none simgesi iyileştirildi @Philoul
- Bölge rotasyonundaki pompa yönetimi ayarının kullanılmaması düzeltildi @samfundev

**Katkıda bulunanlar**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**Sürüm 3.4.0.0**

Yayınlanma tarihi: 31-12-2025

**Yükseltmeden önce:**

* Bu sürüm Google Android 12.0 veya üstünü gerektirir. Güncellemeyi denemeden önce telefonunuzun sürümünü kontrol edin.
* En son Android Studio'ya güncelleyin veya daha iyisi, tarayıcı ile oluşturmayı kullanın.

**Yeni özellikler**

* Çalışma modu @MilosKozak
  * Tedavi sekmelerinde [döngü durumu geçmişi](#AapsScreens-running-mode) gösterilir
  * [AAPSClient'tan döngü durumu](#RemoteControl_aapsclient) gösterilir ve değiştirilebilir.<br>NOT: [NSClient > Senkronizasyon > NS'den çalışma modunu al](#Preferences-nsclient-synchronization) ayarı gerekir
* [Yeni CGM'ler](../Getting-Started/CompatiblesCgms.md) : Glunovo, Intelligo, Sinocare
* [Bölge Rotasyonu](#Aapsscreens-site-rotation) desteği @Philoul
* Yeni [otomasyon eylemi](#automations-automation-action) : SMB'leri etkinleştirme veya devre dışı bırakma @MilosKozak
* Syai CGM [güvenilir kaynaktır](#GettingStarted-TrustedBGSource) ve gelişmiş filtrelemeyi destekler @MilosKozak

**Wear OS iyileştirmeleri**

* pil kullanımı büyük ölçüde azaltıldı @MilosKozak
* arayüz iyileştirmeleri ve düzeltmeleri @olorinmaia
* kod, kütüphanelerin güncel düzeyine uyacak şekilde neredeyse tamamen yeniden yazıldı (önceden WearOS 2) @MilosKozak
* genişletilmiş veriler için 2 yeni komplikasyon @Philoul
* DataStore ile modern komplikasyon sağlayıcısına geçildi @MilosKozak

**Bellek sızıntısı düzeltmeleri**

* Koddaki bellek sızıntıları düzeltildi @MilosKozak
* Firebase Crashlytics'e LeakCanary bellek sızıntısı raporlaması eklendi @MilosKozak

**Pompa sürücüsü iyileştirmeleri**

* **DanaI**: bağlantı kopma sorunları düzeltildi @MilosKozak
* **RileyLink**: gecikmeler en aza indirilerek iletişim hızlandırıldı @mifi100
* **Medtrum**: patch etkinleştirme zamanı ve yaş gösterimi eklendi @vanelsberg, şifre büyük harf düzeltmesi @MilosKozak
* **Combo**: testlerdeki yarış durumları (race conditions) düzeltildi @MilosKozak @dv1
* **Equil**: bağlantı iyileştirildi, pil kullanımı azaltıldı @MilosKozak

**Nightscout senkronizasyonu**

* NS hatasında yinelenen kayıtların ayıklanması iyileştirildi @MilosKozak

**Arayüz/kullanıcı deneyimi iyileştirmeleri**

* çeşitli iyileştirmeler @MilosKozak @Philoul @olorinmaia

**Otomasyon**

* Yeni SMB kontrol eylemi - otomasyonla SMB'yi etkinleştirme/devre dışı bırakma @MilosKozak

**Testler**

* Equil, Eopatch, Dana ve Medtronic pompaları için kapsamlı birim testleri eklendi @MilosKozak
* Birçok modülde test kararlılığı ve kapsamı iyileştirildi @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (yeni Tidepool kimlik doğrulaması desteği) @MilosKozak

---

(version3321)=

## Version 3.3.2.1

Release date: 13-08-2025

- Android 16'da Omnipod Bluetooth bağlantısı düzeltildi
- CI süreci (Tarayıcıda oluşturma)
- mmol-mgdl dönüşümü düzeltildi
- Bazı saat dilimlerinde iletişim kutularında yanlış zaman seçimi düzeltildi
- Basit modda anahtarların okunması düzeltildi
- Wear'da eksik tahminler düzeltildi
- Konfigürasyon iyileştirildi
- NSCv3 tam senkronizasyonu iyileştirildi

---

(version3300)=

**Version 3.3.2.0**

Release date: 27-03-2025

**Nasıl yükseltilir**

* Bu sürümü oluşturmak için ["Meerkat" adlı Android Studio sürümü](#Building-APK-recommended-specification-of-computer-for-building-apk-file) veya üstü gerekir. Daha önce bir 3.3.x sürümü oluşturduysanız Android Studio'yu yeniden yükseltmeniz gerekir.

(version-enforcement)=

**Bu sürümden itibaren bildirim ve sürüm zorunluluğu basitleştirildi, yumuşatıldı ve şu şekilde çalışır:**

*  Cihaz çevrimdışıyken (internet bağlantısı yoksa) süre dolmaz. Bu, artık 60 ve 90 günlük ek süreler olmadığı anlamına gelir.
*  Süre dolduktan sonra LGS modu zorunlu olur
*  Uyarıları/bildirimleri daha seyrek alacaksınız:
   - 28+ gün kaldıysa: 7 günde bir
   - 27-14 gün kaldıysa: 3 günde bir
   - sonra günde bir kez
   - Gece sizi rahatsız etmemek için bildirim öğleden sonra oluşturulur
* Yalnızca 2 tür bildirim vardır
   - Yeni sürüm mevcut (AAPS üzerinde etkisi yoktur)
   - Uygulamanın süresi gelecekte bir tarihte dolacak (yine AAPS üzerinde etkisi yoktur) / süresi doldu (AAPS LGS moduna geçer)

**Yenilikler**

* SMS RESTART komutu @MilosKozak
* Saatte profil değişimi parametreleri @olorinmaia
* Karanlık mod AAPS V2 saat arayüzü @olorinmaia
* G7 veri alışverişi iyileştirmeleri @olorinmaia
* Widget yapılandırması @MilosKozak
* Radyo düğmeleri arayüz iyileştirmeleri @olorinmaia
* Otomasyon: konumu haritadan seçme @MilosKozak
* Sürüm ana ekranlarda görünür @MilosKozak
* Mevcut git sistemiyle derleme zorunludur (zip indirme yok)
* Sürüm ana ekranda gösterilir @MilosKozak
* Tidepool yükleme iyileştirmeleri @ConstantinMatheis

**Hata düzeltmeleri**

* Dash bağ (bonding) kaldırma düzeltmesi @Andreas
* Garmin düzeltmeleri @robertbuessow @suside
* İletişim kutularında AİNS gösterimi düzeltildi @olorinmaia
* Görevlerde yazım ve doğrulama iyileştirmeleri @MilosKozak
* Öykünülen (emulated) GBO'ların çizimi düzeltildi @MilosKozak
* Güvenliğin atlatılması sorunu düzeltildi @tdrkDev

---

**Sürüm 3.3.1.3**

Yayınlanma tarihi: 21-01-2025

**Hata düzeltmeleri**

* Dash: bağ (bonding) isteğe bağlıdır (varsayılan kapalı) @MilosKozak
* Equil: 10+ Ü bolus düzeltildi, alarm iyileştirmeleri @EquilHack
* Garmin: saat iyileştirmeleri @swissalpine
* Saat iyileştirmeleri @olorinmaia
* Döngü durumunu saatten kontrol etme @tdrkDev
* Kararlılık iyileştirmeleri

*  **Yeni bir [Authenticator kurulumu](#sms-commands-authenticator-setup) gerekebilir.**

---

**Sürüm 3.3.1.2**

Yayınlanma tarihi: 15-01-2025

**Nasıl yükseltilir**

* Bu sürümü oluşturmak için ["Ladybug Feature Drop" adlı Android Studio sürümü](#Building-APK-recommended-specification-of-computer-for-building-apk-file) veya üstü gerekir. **Bu, düz "Ladybug" ile aynı değildir.** Daha önce bir 3.3.x sürümü oluşturduysanız Android Studio'yu yeniden yükseltmeniz gerekir.

**Hata düzeltmeleri**

* Dash: Android 15+ üzerinde bağ (bonding) kullanılır
* Genel bakış ekranındaki Dexcom düğmesi geri getirildi
* Equil: çalışmayan pompanın kaldırılmasına izin verildi
* DynISF Ayarlama Faktörü sıfır olduğunda uyarı verilir
* NSCv3: saati biraz farklı olan telefonlarda websocket iletişimi düzeltildi
* SMS komutları: OneTimePassword düzeltildi. **Yeni bir [Authenticator kurulumu](#sms-commands-authenticator-setup) gerekebilir.**
* Bazı tercihlerin artık düzenlenememesi sorunu düzeltildi.
* Sanal pompa ile ana parolanın sıfırlanması düzeltildi.
* Büyük ayar yedekleme dosyalarının içe aktarılması düzeltildi.

---

**Sürüm 3.3.1.0**

Yayınlanma tarihi: 06-01-2025

**Arayüz değişiklikleri**

* [AAPSClient ile AAPSClient2'yi ayırt etmek için renkler eklendi](#RemoteControl_aapsclient) @MilosKozak
* Kullanıcı eylemleri düzeni ve simgeleri iyileştirildi

**Diğer işlevler**

* Yeni otomasyon tetikleyicisi : [adım sayısı](#screen-heart-rate-steps) @Roman Rihter
* NSCv3 tam senkronizasyonunda her şeyin alınmasına izin verilir (GBO gibi önceden senkronize edilmeyen veriler dahil) @MilosKozak
* NSClient v3 : Duyuru çalışır hale getirildi (_ör._ AAPSClient'tan AAPS'e) @MilosKozak

**Teknik değişiklikler & hata düzeltmeleri**

* Insight çökmesi düzeltildi @philoul
* Nightscout'ta aşırı sayıda deviceStatus kaydı oluşturulması düzeltildi @MilosKozak
* Karbonhidrat emilimi düzeltildi @MilosKozak
* Radyo düğmeleri & onay kutularının rengi düzeltildi @MilosKozak
* DynISF yüzde geçişindeki hata düzeltildi @MilosKozak
* Yanlış yerde gösterilen DynISF bildirimi düzeltildi @MilosKozak
* Saat arayüzlerindeki hata düzeltildi @philoul

---

**Sürüm 3.3.0.0**

Yayınlanma tarihi: 29-12-2024

**Ana özellikler**

* **[Dinamik İDF](../DailyLifeWithAaps/DynamicISF.md)** özelliği artık ayrı bir eklenti değildir; artık [OpenAPS SMB](#Config-Builder-aps) eklentisinin bir seçeneğidir ve davranışında bazı değişiklikler vardır:
  * **Profil Değişimi** ve **Profil yüzdesi**, dinamik duyarlılığın gücü açısından artık **Dinamik İDF** için dikkate alınır
  * Son 24 saatin ortalama **İDF** değeri hesaplanır ve bu değer bolus sihirbazı ve **AKRB** hesaplaması için kullanılır. **Profil İDF** değeri hiç kullanılmaz (geçmiş veri yokken yedek değer olarak kullanılması dışında)
  * DynamicISF dokümantasyon sayfası yeniden yazıldı. Lütfen [Dinamik İDF'yi etkinleştirirken dikkate alınması gerekenler](#dyn-isf-things-to-consider-when-activating-dynamicisf) önemli bölümünü okuyun.
* FreeStyle Libre 2 ve Libre 3 kullanıcıları için [“SMB her zaman” ve “karbonhidrattan sonra SMB” etkinleştirme](#Open-APS-features-enable-smb-always)
  * Not : xDrip+ veya Juggluco'nun en son sürümünü gerektirir.
* Yeni **Otomasyon** tetikleyicileri
* Gözetimsiz ayar dışa aktarımları

**Nasıl yükseltilir**

* Yükseltmeden önce:
  * **<span style="color:red">Bu sürüm Google Android 11.0 veya üstünü gerektirir</span>**. Güncellemeyi denemeden önce telefonunuzun sürümünü kontrol edin.
  * Ruffy cihazıyla “eski” Combo sürücüsünü kullanıyorsanız, güncellemeden önce [yerel Combo sürücüsüne](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) geçin
  * Yükseltme sırasında ana ekrandaki [ek grafiklerinizi](#AapsScreens-section-g-additional-graphs) kaybedersiniz: gerekirse mevcut yapılandırmanızı not edin, böylece yükseltmeden sonra yeniden oluşturabilirsiniz.
  * Bazı kişilerin Android 15'te karşılaştığı [Bluetooth bağlantı sorunları](../Getting-Started/Phones.md) bu sürümle **ÇÖZÜLMEMİŞTİR** (bu bir Android sorunudur, **AAPS** sorunu değildir). 3.3.1.2'de bir düzeltme mevcuttur.
  * Ana ekrandaki BYODA düğmesi, Android sınırlamaları nedeniyle artık kullanılamıyor. Bu, 3.3.1.2'de düzeltildi.
* Güncelleme talimatları: [Yeni bir sürüme güncelleme](../Maintenance/UpdateToNewVersion.md) kılavuzunu izleyin.
  * Bu sürümü oluşturmak için ["Ladybug" adlı Android Studio sürümü](#Building-APK-recommended-specification-of-computer-for-building-apk-file) veya üstü gerekir. Android Studio'nun daha eski bir sürümü zaten yüklüyse, <span style="color:red">JVM sürümünü 21 olarak yapılandırmanız</span> gerekebilir. Bkz. [Android Studio'da Sorun Giderme > Uyumsuz Gradle JVM](#incompatible-gradle-jvm).
  * İpucu - **AAPS** geçmişinizi kaybetmek istemiyorsanız HER ZAMAN GÜNCELLEME yapın, KALDIRMA/YÜKLEME yapmayın. Önlem olarak, bir şeyler ters giderse eski bir sürüme dönebilmek için mevcut **AAPS** ayarlarınızı ve eski APK'yı yedekleyin.
* Yükseltmeden sonra:
  * Bakım sekmesinde yeni [“AAPS dizini” ayarını](#preferences-maintenance-logdirectory) yapın.

**Ayrıntılı değişiklikler**

**CGM'ler ve pompalar**

* FreeStyle Libre 2 ve Libre 3 kullanıcıları için [“SMB her zaman” ve “karbonhidrattan sonra SMB” etkinleştirme](#Open-APS-features-enable-smb-always) @MilosKozak
* [Medtrum sürücüsü](../CompatiblePumps/MedtrumNano.md) iyileştirmeleri @jbr77rr
  * Bazı akıllı telefonlardaki sorunları aşmak için yeni bir ayar dahil, iletişim iyileştirmeleri
  * Etkinleştirme başlangıcında rezervuar seviyesi gösterilir
  * Etkinleştirmenin başa dönmesi ve kullanıcının etkinleştirmeyi bitirememesi hatası düzeltildi
  * Senkronizasyon durumu için geri bildirim ve diğer açıklamalar
* Yeni desteklenen pompa : [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Yeni desteklenen CGM'ler : [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer ve [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight sürücüsü kotlin ile yeniden yazıldı @Philoul
* Eski, ruffy'ye bağlı Combo sürücüsü kaldırıldı

**Arayüz değişiklikleri**

* Yeni kurulumda [Basit mod](#preferences-simple-mode) varsayılan olarak etkindir @MilosKozak
* Yeni [Hızlı Asistan](#Preferences-quick-wizard) seçenekleri @radicalb
  * Hızlı Asistan artık bolus hesaplaması ve gösterimi için hesaplayıcıyla aynı mantığı kullanır. Ön bolus için artık Hızlı Asistan'daki “karbonhidrat zamanı” alanını kullanabilirsiniz.
* Yeni [grafik ölçeği menüsü](#aaps-screens-main-graph); [ek grafikler menüsü](#AapsScreens-activate-optional-information) arayüz iyileştirmeleri @Philoul
* [Konfigürasyon düzeni iyileştirmesi](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Bölümler artık varsayılan olarak daraltılmıştır. Genişletmek için oku kullanın.
* Değişken duyarlılık AAPSClient'ta görünür
* Bolus sihirbazı arayüz iyileştirmeleri @kenzo44
* Açık tema kullanılırken pompa sekmelerindeki metin gösterimi düzeltildi @jbr77rr

**Diğer işlevler**

* [Gözetimsiz ayar dışa aktarımları](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Yeni [Otomasyon tetikleyicisi](#automations-automation-triggers) @vanelsberg
  * Pod aktivasyonu (yalnızca patch pompa)
* Yeni [Otomasyon tetikleyicileri](#automations-automation-triggers) @jbr77rr
  * Kanül yaşı, İnsülin yaşı, Pil yaşı, Sensör yaşı, Rezervuar seviyesi, Pompa pil seviyesi
* Negatif karbonhidrat girişine izin verilir @MilosKozak
* Varsayılandan farklı bir depolama dizini seçmek için yeni parametre [“AAPS dizini”](#preferences-maintenance-settings).
* [Pompa askıdayken insülin kaydına](#aaps-screens-buttons-insulin) izin verilir @jbr77rr
* [2. görev](#objectives-objective2) güncellendi @MilosKozak
  * Ana parolanın ayarlandığı ve bilindiği kontrol edilir
* Test modunda rastgele karbonhidrat @MilosKozak
* GTD hesaplamasındaki hata düzeltildi @MilosKozak
* SMS komutları : NS'den gelen [profil değişikliği için SMS **gönderilmemesine**](#sms-commands-too-many-messages) izin verilir @MilosKozak

**Akıllı saatler**

* wear ve saat arayüzü iyileştirmeleri @Philoul @MilosKozak @olorinmaia
* Otomasyon eylemlerinden saat kutucukları @Philoul
* Daha fazla hastayı izlemek için AAPS, AAPSClient ve AAPSClient2'den birleştirilmiş saat arayüzleri @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**Teknik değişiklikler**

* [günlük dosyalarının konumu değişti](#Accessing-logfiles-accessing-logfiles)
* yeni iç modül yapısı @MilosKozak
* kalıcılık katmanı ana koddan ayrıldı @MilosKozak
* derleme dosyaları kts olarak yeniden yazıldı @MilosKozak
* algoritmalar daha iyi performans için kotlin ile yeniden yazıldı @MilosKozak
* tonlarca yeni birim testi @MilosKozak ve diğerleri
* daha fazla kod kotlin'e dönüştürüldü @MilosKozak
* yeni tercih yönetimi, xml \-\> kotlin @MilosKozak
* yeni CI yapılandırması, CI kendi sunucularımızda çalışır @MilosKozak
* kütüphaneler en son sürüme güncellendi, toml @MilosKozak
* kotlin 2.0, java 21'e geçiş @MilosKozak

---

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release date: 27-02-2024

Bu sürüm, Android 10'u destekleyen son sürümdür. Android 11'e yükseltemiyorsanız [AAPS'i 3.2.0.4 sürümüne güncelleyin](#update-aaps-3204).

**Değişiklikler**

- xDrip G7 desteği
- Medtrum düzeltmeleri
- Otomasyon simgesi düzeltmesi
- 1. görevi geçme düzeltmesi

---

(version3200)=

**Sürüm 3.2.0.0, @Philoul'a ithaf edilmiştir**

Yayınlanma tarihi: 23-10-2023

**Önemli ipuçları**

- NS 15 gereklidir
- NS v3 eklentisinde websockets kullanırken, NS UI (artı düğmesi) aracılığıyla girilen işlemler ve v1 API kullanan diğer uygulamalar AAPS'e gönderilmez. Bu, NS'nin gelecekteki sürümünde düzeltilecektir. NS dahili olarak tamamen v3'e geçene kadar AAPS'te ve AAPSClient'ta her zaman aynı istemciyi (v1 veya v3) kullanın. Aynısı AAPS ve AAPSClient'in kendisi için de geçerlidir.
- v3 eklentisindeki websocket'ler, v1 eklentisine benzer şekilde çalışır. AAPS, etkinleştirilmiş web yuvaları olmadan, NS'den düzenli olarak indirmeleri planlar ve bu, NS kalıcı olarak bağlı olmadığı için daha düşük güç tüketir. Öte yandan bu, veri alışverişinde gecikme anlamına gelir. Kullanmadan önce lütfen geliştirici ekibin önemli yorumlarını [buradan](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) okuyun!
- Cgm kaynağı olarak xdrip kullanıyorsanız, dahili değişiklikler nedeniyle güncellemeden sonra tekrar seçmelisiniz.
- Tidepool, ilk görevi geçmek için NS yerine kullanılabilir
- xDrip+'a gönderirseniz, xDrip senkronizasyon eklentisini yapılandırmanız gerekir. xDrip'te AAPS'ten KŞ almak için kaynak olarak “xDrip+ Sync Follower” seçilmelidir
- ComboV2 sürücüsüne geçmek istiyorsanız, Ruffy'nin kaldırılması ve pompanın AAPS ile yeniden eşleştirilmesi gerekir.
- DynISF eklentisini kullanmak için 11. görevi başlatmanız gerekir (11. görevin başlatılabilmesi için önceki tüm görevler bitmiş olmalıdır)

**Değişiklikler**

- EOPatch2 / GlucomenDay pompa sürücüsü @jungsomyeonggithub @MilosKozak
- ComboV2 pompa sürücüsü (Ruffy'ye gerek yok) @dv1
- Medtrum Nano sürücüsü @jbr7rr
- Kore DanaI desteği @MilosKozak
- Glunovo CGM desteği @christinadamianou
- G7 desteği @MilosKozak @rICTx-T1D @khskekec
- NSClient v3 eklentisi @MilosKozak
- Tidepool desteği @MilosKozak
- Yumuşatma eklentisi @MilosKozak, @justmara, Üstel yumuşatma @nichi (Tsunami), Ortalama yumuşatma @jbr7rr
- DynamicISF eklentisi @Chris Wilson, @tim2000s
- Garmin saat arayüzü & kalp atış hızı desteği @buessow
- Yeni logo @thiagomsoares
- Yeni saat arayüzü @Philoul
- 3.1 sürümündeki tonlarca sorun düzeltildi
- daha fazla yere not eklenmesine izin verme @Sergey Zorchenko
- Arayüz düzeltmeleri @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- yeni SMS komutları LOOP LGS/CLOSED @pzadroga
- wear çevirileri @Andries-Smit
- xdrip iletişimi @MilosKozak ayrı modülüne taşındı
- dahili değişiklikler: güncellenmiş kütüphane sürümleri, rx3 geçişi, yeni modül yapısı @MilosKozak
- Diaconn sürücü düzeltmeleri @miyeongkim
- daha fazla veritabanı bakım seçeneği @MilosKozak
- AAPSClient ana telefon elektriğe takılıysa bilgi verir @MilosKozak
- Bolus sihirbazında değişiklik. CGM mevcut değilse, yüzde göz ardı edilir (yani %100 kullanılır)
- kts derleme sistemine geçiş @MilosKozak
- CI entegrasyonu iyileştirildi @MilosKozak @buessow
- test temizliği @ryanhaining @MilosKozak
- 110 binden fazla yeni kod satırı, 240 bin satır değişti, 6884 dosya değişti

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **AAPS ile Nightscout için v1 yerine v3 API kullanımı hakkında önemli yorumlar**

v1, NS web sitesi ile NS sunucusu arasında veri alışverişi için kullanılan eski protokoldür. Birçok sınırlaması vardır
- v1 yalnızca 2 günlük veri gönderir
- v1 her yeniden bağlantıda 2 günlük verinin tamamını gönderir
- websocket kullanmak zorunludur = kalıcı bağlantı, daha fazla pil tüketimi
- NS bağlantısı sık koptuğunda, yüksek veri kullanımını önlemek için bağlantı 15 dakika duraklatılır

v3 yeni protokoldür. Daha güvenli ve verimli
- token kullanırken erişim haklarını daha iyi tanımlayabilirsiniz
- protokol her iki tarafta da (AAPS & NS) daha verimlidir
- NS'den 3 aya kadar veri okuyabilir
- her cihazda websocket kullanıp kullanmamayı seçebilirsiniz (kullanmak daha hızlı güncelleme, kullanmamak daha düşük güç tüketimi ama daha yavaş güncelleme, yani dakikalar demektir)
- NSClient bağlantı koptuğunda duraklatılmaz

SINIRLAMALAR
- AAPS 3.2 ile NS 15 kullanılmalıdır
- v3, v1 protokolüyle yapılan güncellemeleri görmez (muhtemelen NS'nin gelecekteki bir sürümünde çözülecektir)
- ters yönde ise, değişiklikleri izlemenin eski ve verimsiz yöntemi nedeniyle v1, v3 ile yapılan değişiklikleri görür
- NS'nin şimdilik dahili olarak hâlâ v1 kullandığını unutmayın; bu nedenle v3 kullanıyorsanız NS web arayüzünden veri girmek mümkün değildir. Uzaktan veri girmek istiyorsanız AAPSClient veya SMS kullanmalısınız

ÖNERİLEN AYAR
- yukarıdakilerin hepsi nedeniyle yalnızca bir yöntem seçmeli ve bunu tüm cihazlarda kullanmalısınız (bu yazının yazıldığı sırada diğer tüm yükleyicilerin v1 kullandığını unutmayın). v3'e geçmeye karar verirseniz, AAPS'te ve tüm AAPSClient'larda v3'ü seçin
- v3, verimliliği nedeniyle tercih edilir
- v3 ile websocket kullanıp kullanmamak tercihinize bağlıdır
- AAPS'in tüm verileri toplamasına ve ardından tek yükleyici olarak NS'ye yüklemesine izin vermeniz ŞİDDETLE önerilir. Diğer tüm cihazlar/uygulamalar NS'den yalnızca okuma yapmalıdır. Böylece çakışmaları ve senkronizasyon hatalarını önlersiniz. Bu, KŞ verilerini Dexcom Share bağlayıcısı vb. ile NS'ye almak için de geçerlidir

---

(version3100)=

**Sürüm 3.1.0**

Yayınlanma tarihi: 19-07-2022

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**Sürüm 3.0.0**

Yayınlanma tarihi: 31-01-2022

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## Sürüm 2.8.2.1

Yayınlanma tarihi: 05-10-2021

Bu sürüm, Android 8'i destekleyen son sürümdür. [Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Sürüm 2.8.2**

Yayınlanma tarihi: 23-01-2021

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**Sürüm 2.8.1.1**

Yayınlanma tarihi: 12-01-2021

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**Sürüm 2.8.0**

Yayınlanma tarihi: 01-01-2021

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**Sürüm 2.7.0**

Yayınlanma tarihi: 24-09-2020

[Sürüm notları](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**Sürüm 2.6.1.4**

Yayınlanma tarihi: 04-05-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**Sürüm 2.6.1.3**

Yayınlanma tarihi: 03-05-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**Sürüm 2.6.1.2**

Yayınlanma tarihi: 19-04-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**Sürüm 2.6.1.1**

Yayınlanma tarihi: 06-04-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**Sürüm 2.6.1**

Yayınlanma tarihi: 21-03-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**Sürüm 2.6.0**

Yayınlanma tarihi: 29-02-2020

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**Sürüm 2.5.1**

Yayınlanma tarihi: 31-10-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**Sürüm 2.5.0**

Yayınlanma tarihi: 26-10-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**Sürüm 2.3**

Yayınlanma tarihi: 25-04-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**Sürüm 2.2.2**

Yayınlanma tarihi: 07-04-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**Sürüm 2.2**

Yayın tarihi: 29-03-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**Sürüm 2.1**

Yayınlanma tarihi: 03-03-2019

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**Sürüm 2.0**

Yayınlanma tarihi: 03-11-2018

[Sürüm notları](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

İlk test sürümü 2015'te başladı ve ilk sürüm 2016'da yayınlandı.

Bu sürümlerin tam kronolojisi şu anda mevcut değil, ancak bu soru birkaç kez sorulduğu için burada belgeliyoruz.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
