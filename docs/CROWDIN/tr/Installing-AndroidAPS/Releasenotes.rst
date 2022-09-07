Sürüm notları
**************************************************
Lütfen `güncelleme kılavuzundaki <../Installing-AndroidAPS/Update-to-new-version.html>`_ talimatlarını takip edin. Güncelleme kılavuzunda güncelleme yaparken en sık karşılaşılan zorlukları ele alan bir sorun giderme bölümü de bulabilirsiniz.

Yeni bir güncelleme çıkar çıkmaz aşağıdaki bilgileri alacaksınız:

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Güncelleme bilgisi

O zaman güncellemek için 60 gününüz var. Bu 60 gün içinde güncelleme yapmazsanız, AAPS, `Görev 6 <../Usage/Objectives.html>`_ da olduğu gibi LGS'ye (Düşük glikoz süspansiyonuna - bkz. `sözlük <../Getting-Started/Glossary.html>`_) geri dönecektir.

30 gün daha güncelleme yapmazsanız (yeni yayın tarihinden 90 gün sonra) AAPS, Açık Döngüye geçecektir.

Lütfen bu değişikliğin sizi rahatsız etmeyi amaçlamadığını, ancak güvenlik nedenlerinden kaynaklandığını anlayın. AndroidAPS'nin yeni sürümleri yalnızca yeni özellikler sağlamakla kalmaz, aynı zamanda önemli güvenlik düzeltmeleri de sağlar. Bu nedenle, her kullanıcının mümkün olan en kısa sürede güncelleme yapması gerekir.. Ne yazık ki hala çok eski sürümlerden hata raporları var. Bu nedenle bu uyarı, her bir kullanıcı ve genel DIY topluluğu için güvenliği artırma girişimidir. Anlayışınız için teşekkür ederiz.

Android sürümü ve AAPS sürümü
====================================
Akıllı telefonunuz Android 9'dan daha eski bir Android Sürümü kullanıyorsa, en az Android 9 gerektirdiğinden AAPS v3 ve sonraki sürümleri kullanamazsınız.

Daha eski Android'e sahip kullanıcıların AAPS'nin eski sürümünü kullanmasına izin vermek için, yalnızca sürüm doğrulamasını değiştiren yeni sürümler gönderildi. Başka hiçbir iyileştirme dahil değildir.

Android 9 ve üstü
------------------------------------
* En son AAPS sürümünü kullanın
* AAPS Kodunu https://github.com/nightscout/AndroidAPS adresinden indirin

Android 8
------------------------------------
* AAPS **2.8.2.1** sürümünü kullanın
* AAPS Kodunu https://github.com/nightscout/AndroidAPS adresinden 2.8.2.1 şubesinden indirin

Android 7
------------------------------------
* AAPS **2.6.2** sürümünü kullanın
* AAPS Kodunu https://github.com/nightscout/AndroidAPS adresi 2.6.2 şubesinden indirin

Sürüm 3.1.0
================
Yayınlanma tarihi: 19-07-2022

Önemli ipuçları
----------------------
* güncellemeden sonra Wear uygulamasını kaldırın ve yeni sürümü yükleyin
* Omnipod kullanıcıları: pod değişikliğinde güncelleme !!!

Değişiklikler
----------------------
* 3.0 sürümündeki sorunlar düzeltildi
* uygulama donması düzeltildi @MilosKozak
* DASH sürücüsü düzeltildi @avereha
* Dana sürücüsü düzeltildi @MilosKozak
* büyük kullanıcı arayüzü iyileştirmesi, temizleme ve birleştirme, malzeme tasarımına geçiş, stiller, beyaz tema, yeni simgeler. @Andries-Smit @MilosKozak @osodebailar @Philoul
* widget @MilosKozak
* Aidex CGM desteği @andyrozman @markvader (Sadece pompa kontrolü)
* `Wear OS Saat kutucukları <../Configuration/Configuration/Watchfaces.htmll#wear-os-tiles>`, çeviriler @Andries-Smit
* Wear kodu yeniden düzenlendi. Artık geriye dönük uyumlu değil @MilosKozak
* a11y iyileştirmeleri @Andries-Smit
* yeni koruma seçeneği PIN @Andries-Smit
* menüde grafik ölçeğine izin verme @MilosKozak
* daha fazla istatistik seçeneği @MilosKozak
* VirtualPump lehine MDI eklentisi kaldırıldı
* yeni otomasyon eylemi: StopProcessing (kurallara göre)

Sürüm 3.0.0
================
Yayınlanma tarihi: 31-01-2022

Önemli ipuçları
----------------------
* **Minimum Android sürümü artık 9.0'dır.**
* **Veriler yeni veritabanına taşınmaz.** Şikayet etmeyin, bu çok büyük bir değişikliktir, bundan dolayı mümkün değildir. Böylece güncellemeden sonra AİNS, AKRB, tedaviler vb. temizlenecektir. Yeni `profil değişimi <../Usage/Profiles.html>`_ oluşturmanız ve sıfır AİNS ve AKRB ile başlamanız gerekir. Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.
* AAPS ve NSClient'in aynı sürümünü kullanın

**** `Burada <../Installing-AndroidAPS/update3_0.html>`__ açıklandığı üzere 3.0'a güncelledikten sonra ayarları kontrol ettiğinizden ve tamamladığınızdan emin olun.

Hazırlık adımları
----------------------
**Güncellemeden en az iki gün önce:**

* Nightscout'ta Dexcom bridge'ı devre dışı bırakın
* Toplayıcı olarak G5/G6 ve xDrip kullanıyorsanız, xDrip'i 14 Ocak 2022'den daha yeni bir sürüme güncellemeniz gerekir
* G5/G6 kullanıyorsanız, toplayıcı olarak BYODA'ya geçiş yapıyorsanız, geri yumuşatmadan "back-smoothing" yararlanmanız önerilir (xDrip'i başka amaçlar için de kullanabilirsiniz, xDrip BYODA'dan veri alabilir)


Değişiklikler
----------------------
* 100k satır değişti, 105k satır yeni kod
* `Omnipod DASH desteği <../Configuration/OmnipodDASH.html>`_ @AdrianLxM @avereha @bartsopers @vanelsberg
* `Dana-i desteği <../Configuration/DanaRS-Insulin-Pump.html>`_ @MilosKozak
* `DiaconnG8 desteği <../Configuration/DiaconnG8.html>`_
* Glunovo desteği
* Dahili veritabanı Room'a yükseltildi @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman
* Kotlin'e yeniden yazılan birçok kod @MilosKozak
* Pompa sürücüleri için yeni dahili arayüz
* NSClient, daha iyi senkronizasyon ve daha ayrıntılı özelleştirme için yeniden yazıldı @MilosKozak

  * NS'den kayıt silmeye izin verilmez (yalnızca NSClient aracılığıyla geçersiz kılma)
  * NS'den kayıt değişikliğine izin verilmez
  * Mühendislik modu olmadan kullanılabilen senkronizasyon ayarı (ebeveynler için)
  * Verileri yeniden senkronize etme yeteneği

* Profil anahtarı davranış değişikliği. Artık Profil Anahtarı *(kullanıcının istediği bir şey)* ve Profil değişikliği *(değişiklik pompa tarafından yapıldığında)* arasında ayrım yapılır* @MilosKozak @Tebbe
* Profil anahtarının oluşturulması sırasında aktivite geçici hedefi başlatabilirsiniz @MilosKozak
* NSProfili gitti, sadece yerel profil kullanılabilir. Yerel profil `NS <../Installing-AndroidAPS/update3_0.html#nightscout-profile-cannot-be-pused>` ile senkronize edilebilir. @MilosKozak.
* Unutulan `ana şifre sıfırlama prosedürü <../Installing-AndroidAPS/update3_0.html#reset-master-password>`_ @MilosKozak
* Kullanıcı eylemleri izleme @Philoul
* Yeni otomasyon TempTargetValue tetikleyicisi @Philoul
* Yeni otomasyon Bakım Portalı eylemi @Philoul
* Karbonhidrat İletişim Kutusuna Bolus hatırlatıcısı ekleyin @Philoul
* Bolus Sihirbazı iyileştirmesi
* UI (Kullanıcı arayüzü) iyileştirmeleri @MilosKozak
* Otomasyonlar için yeni kullanıcı butonları @MilosKozak
* Yeni otomasyon düzeni @MilosKozak
* Geçmiş tarayıcısı güncellendi ve düzeltildi @MilosKozak
* Görev 9 kaldırıldı @MilosKozak
* Kararsız CGM verileriyle ilişkili hata giderildi @MilosKozak
* DanaR ve DanaRS iletişim iyileştirmesi @MilosKozak
* CircleCI entegrasyonu @MilosKozak
* Dosya konumu değişikliği:

   * /AAPS/extra (engineering mode)
   * /AAPS/logs /AAPS/exports
   * /AAPS/preferences

Sürüm 2.8.2
================
Yayınlanma tarihi: 23-01-2021

* Lütfen aşağıdaki `2.8.1.1 sürümü için önemli ipuçlarına da bakın <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_.

Değişiklikler
----------------------
* kararlılık iyileştirmeleri
* Android 8+ için daha fazla ince ayar
* geliştirilmiş simgeler
* akıllı saat iyileştirmeleri
* NSClient düzeltmeleri
* Bolus danışmanı artık Pumpcontrol ve NSClient ile çalışıyor

Sürüm 2.8.1.1
================
Yayınlanma tarihi: 12-01-2021

Önemli ipuçları
----------------------
* Seçenek **NS_UPLOAD_ONLY**, tüm 2.8.1 kullanıcıları için AÇIK olmaya zorlanmıştır.
* GH, karbonhidrat veya profil değişimi girmek için NSClient kullanıyorsanız, bunu AAPS'de kapatmanız gerekir, ancak **yalnızca senkronizasyonunuz iyi çalışıyorsa** (örn. GH, GBO vb.'nin kendi kendine değişmesi istenmeyen veri değişikliklerini görmezsiniz).
* DİKKAT: Başka uygulama tanıtıcı tedavileriniz varsa bunu YAPMAYIN (xDrip yayın/yükleme/eşitleme... gibi)
* NS_UPLOAD_ONLY, yalnızca mühendislik modu etkinleştirildiğinde kapatılabilir.

Majör değişiklikler
----------------------
* RileyLink, Omnipod ve MDT pompa iyileştirmeleri ve düzeltmeleri
* NS_UPLOAD_ONLY zorunlu
* SMB & Dexcom uyg. için düzeltmeler
* saat arayüzü düzeltmeleri
* kilitlenme raporlaması iyileştirildi
* doğrudan saat yüzü kurulumuna izin vermek için gradle geri alındı
* otomasyon düzeltmeleri
* RS sürücüsü iyileştirmesi
* çeşitli çökme düzelmeleri
* Kullanıcı arayüzü düzeltmeleri ve iyileştirmeler
* Yeni çeviriler

Sürüm 2.8.0
================
Yayınlanma tarihi: 01-01-2021

Önemli ipuçları
----------------------
* **Minimum Android sürümü şu anda 8.0'dır.** Daha eski Android sürümleri için eski depodan 2.6.1.4'ü kullanmaya devam edebilirsiniz.
*`Görevler değişti. <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ **Güncellemeden önce tamamlanmayan görevleri tamamlayın.**
* Depo konumu hala https://github.com/nightscout/AndroidAPS üzerinde. Git'e aşina değilseniz, güncellemenin en kolay yolu AndroidAPS ile dizini kaldırmak ve `yeni bir klon <../Installing-AndroidAPS/Building-APK.html>` yapmaktır.
* Lütfen apk oluşturmak için `Android Studio 4.1.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
----------------------
* `Omnipod Eros desteği <../Configuration/OmnipodEros.html>`_ @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda ve @ps2 @itsmojo'ya özel teşekkür Omnipod için Loop sürücüsüne katılan diğer herkese ve GetRileyLink.org'dan @jlucasvt' a
* `bolus danışmanı <../Configuration/Preferences.html#bolus-advisor>`_ & `yeme hatırlatıcısı <../Getting-Started/Screenshots.html#eating-reminder>`_ @MilosKozak
* `Yeni saat arayüzü <../Configuration/Watchfaces.html#new-watchface-as-of-androidaps-2-8>`_ @rICTx-T1D
* Dana RS bağlantı iyileştirmeleri @MilosKozak
* Dexcom yerel uygulaması için SMB'deki "Değiştirilmemiş CGM değerleri" davranışı kaldırıldı
* Yeni `Düşük Çözünürlüklü Dış Görünüm <../Configuration/Preferences.html#skin>`_
* Yeni "Hamile" hasta tipi <../Usage/Open-APS-features.html#overview-of-hard-coding-limits>`_ @Brian Quinion
* Yeni NSClient tablet düzeni @MilosKozak
* NSClient insülin, hassasiyet ve ekran ayarlarını doğrudan ana AAPS'den aktarır @MilosKozak
* `Tercihler filtresi <../Configuration/Preferences.html>`_ @Brian Quinion
* Yeni pompa simgeleri @Rig22 @@teleriddler @osodebailar
* Yeni `insülin tipi Lyumjev <../Configuration/Config-Builder.html#lyumjev>`_
* Kurulum sihirbazı iyileştirmeleri @MilosKozak
* Güvenlik iyileştirmeleri @dlvoy
* Çeşitli iyileştirmeler ve düzeltmeler @AdrianLxM @Philoul @swissalpine @MilosKozak @Brian Quinion

Sürüm 2.7.0
================
Yayınlanma tarihi: 24-09-2020

**** `Burada <../Installing-AndroidAPS/update2_7.html>`__ açıklandığı üzere 2.7'a güncelledikten sonra ayarları kontrol ettiğinizden ve tamamladığınızdan emin olun.

'Otomasyon özelliğini <../Usage/Automation.html>`_ kullanmaya devam etmek için en azından `Görev 11'i (sonraki sürümlerde görev 10!) <../Usage/Objectives.html#objective-10-automation>`_ başlamanız gerekir. (önceki tüm görevler tamamlanmalıdır, aksi takdirde Görev 11'e başlamak mümkün değildir). Örneğin, `Görev 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ içindeki sınavı henüz bitirmediyseniz, `görev 11'e başlamadan önce sınavı tamamlamanız gerekir. <../Usage/Objectives.html#objective-10-automation>`_. Bu, daha önce tamamladığınız diğer görevleri etkilemeyecektir. Tüm tamamlanmış görevler korunacaktır!

Başlıca yeni özellikler
----------------------
* bağımlılık enjeksiyonunun dahili kullanımı, kitaplık güncellemeleri, kotline yeniden kod yazımı @MilosKozak @AdrianLxM
* Dana pompaları için modüllerin kullanılması @MilosKozak
* `yeni düzen, düzen seçimi <../Getting-Started/Screenshots.html>`_ @MilosKozak
* yeni `durum ışıkları düzeni <../Configuration/Preferences.html#status-lights>`_ @MilosKozak
* `birden çok grafik desteği <../Getting-Started/Screenshots.html#section-f-main-graph>`_ @MilosKozak
* `Profil yardımcısı <../Configuration/profilehelper.html>`_ @MilosKozak
* `dinamik hedef ayarının görselleştirmesi <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* yeni `tercihler düzeni <../Configuration/Preferences.html>`_ @MilosKozak
* SMB algoritması güncellemesi @Tornado-Tim
* `Düşük glikoz süspansiyonu modu <../Configuration/Preferences.html#aps-mode>`_ @Tornado-Tim
* `karbonhidrat gerekli bildirimleri <../Configuration/Preferences.html#carb-required-notification>`_ @twain47 @Tornado-Tim
* Bakım portalı kaldırıldı (Eylemlere taşındı) @MilosKozak
* `yeni şifreli yedekleme formatı <../Usage/ExportImportSettings.html>`_ @dlvoy
* `yeni SMS TOTP kimlik doğrulaması <../Children/SMS-Commands.html>`_ @dlvoy
* `yeni SMS POMPAYA BAĞLANI, BAĞLANTIYI KES <../Children/SMS-Commands.html#commands>`_ komutları @Lexsus
* Dana pompalarında küçük bazallar için destek @Mackwe
* küçük Insight düzeltmeleri @TebbeUbben @MilosKozak
* `"Varsayılan dil" seçeneği <../Configuration/Preferences.html#general>`_ @MilosKozak
* vektör simgeleri @Philoul
* `MDT pompası için nötr geçici değerleri ayarlama <../Configuration/MedtronicPump.html#configuration-of-the-pump>`_ @Tornado-Tim
* Geçmiş tarayıcı geliştirmeleri @MilosKozak
* OpenAPS MA algoritması kaldırıldı @Tornado-Tim
* Oref0 duyarlılığı kaldırıldı @Tornado-Tim
* Bolus ayarları için `Biyometrik veya şifre koruması <../Configuration/Preferences.html#protection>`_ @MilosKozak
* `yeni otomasyon tetikleyicisi <../Usage/Automation.html>`_ @PoweRGbg
* `Open Humans yükleyici <../Configuration/OpenHumans.html>`_ @TebbeUbben @AdrianLxM
* Yeni dokümantasyon @Achim

Sürüm 2.6.1.4
================
Yayınlanma tarihi: 04-05-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
----------------------
* Insight: Ürün yazılımı sürüm 3 için bolusta titreşimi devre dışı bırakın - ikinci deneme
* Aksi takdirde 2.6.1.3 ile aynıdır. Güncelleme isteğe bağlıdır.

Sürüm 2.6.1.3
================
Yayınlanma tarihi: 03-05-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
------------------
* Insight: Ürün yazılımı sürüm 3 için bolusta titreşimi devre dışı bırakın
* Aksi takdirde 2.6.1.2 ile aynıdır. Güncelleme isteğe bağlıdır.

Sürüm 2.6.1.2
================
Yayınlanma tarihi: 19-04-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
------------------
* Insight hizmetindeki kilitlenme düzeltmesi
* Aksi takdirde 2.6.1.1 ile aynıdır. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

Sürüm 2.6.1.1
================
Yayınlanma tarihi: 06-04-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
------------------
* Combo pompa kullanırken SMS CARBS komut sorununu çözer
* Aksi takdirde 2.6.1 ile aynıdır. Bu hatadan etkilenmiyorsanız, yükseltme yapmanız gerekmez.

Sürüm 2.6.1
==============
Yayınlanma tarihi: 21-03-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
------------------
* NSClient ayarlarında yalnızca ``https://`` girişine izin verir
* Saatlerdeki `BGI <../Getting-Started/Glossary.html>`_ hatası düzeltildi
* Ufak kullanıcı arayüzü hataları düzeltildi
* Insight çökme hataları düzeltildi
* Combo pompadaki gelecekteki karbonhidratlar düzeltildi
* `Yerel Profil -> NS senkronizasyonu <../Configuration/Config-Builder.html#upload-local-profiles-to-nightscout>` düzeltildi
* Insight uyarıları iyileştirmeleri
* Pompa geçmişinden bolus algılaması iyileştirildi
* NSClient bağlantı ayarları (wifi, şarj) düzeltildi
* Kalibrasyonların xDrip'e gönderilmesi düzeltildi

Sürüm 2.6.0
==============
Yayınlanma tarihi: 29-02-2020

Lütfen apk oluşturmak için `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ veya daha yenisini kullanın.

Başlıca yeni özellikler
------------------
* Küçük tasarım değişiklikleri (başlangıç sayfası...)
* Bakım portalı sekmesi / menüsü kaldırıldı - daha fazla ayrıntı `burada <../Usage/CPbefore26.html>`__
* Yeni `Yerel Profil eklentisi <../Configuration/Config-Builder.html#local-profile>`_

  * Yerel profil 1'den fazla profil tutabilir
  * Profiller klonlanabilir ve düzenlenebilir
  * NS'ye profil yükleme yeteneği
  * Eski profil değişimleri Yerel Profil'de yeni profile kopyalanabilir (zaman kaydırma ve yüzde uygulanır)
  * Hedefler için Dikey NumberPicker
* Basit profil kaldırıldı
* `Yayma bolus <../Usage/Extended-Carbs.html#extended-bolus-and-switch-to-open-loop-dana-and-insight-pompa-only>`_ özelliği - kapalı döngü devre dışı bırakılacak
* MDT eklentisi: Yinelenen girişlerle ilgili hata düzeltildi
* Birimler profilde belirtilmemiş ancak genel ayarlardır
* Başlangıç sihirbazına yeni ayarlar eklendi
* Farklı kullanıcı arayüzü ve dahili iyileştirmeler
* `Wear komplikasyonları <../Configuration/Watchfaces.html>`_
* Yeni `SMS komutları <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Dil desteği düzeltildi
* Görevler: `Geri gitmeye izin ver <../Usage/Objectives.html#go-back-in-objectives>`_, Zaman getirme iletişim kutusu
* Otomasyon: `sıralamaya izin ver <../Usage/Automation.html#sort-automation-rules>`_
* Otomasyon: devre dışı bırakılmış döngüde çalışan otomasyon hatası düzeltildi
* Combo için yeni durum satırı
* GlikozDurumu iyileştirme
* Geçici Hedef NS senkronizasyonu düzeltildi
* Yeni istatistik etkinliği
* Açık döngü modunda yayma bolusa izin ver
* Android 10 alarm desteği
* Tonlarca yeni çeviri

Sürüm 2.5.1
==================================================
Yayınlanma tarihi: 31-10-2019

Lütfen `sürüm 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`__ için listelenen `önemli notlara <../Installing-AndroidAPS/Releasenotes.html#important-notes-2-5-0>`_ ve `sınırlamalara <../Installing-AndroidAPS/Releasenotes.html#is-this-update-for-me-currently-is-not-supported>`_ dikkat edin.
* Ağ durumu alıcısında birçok kişinin çökmesine neden olan bir hata düzeltildi (kritik değil ama yeniden hesaplamada çok fazla enerji israfına neden oluyor).
* Güncelleme bildirimini tetiklemeden küçük güncellemelerin yapılmasına izin verecek yeni sürüm.

Sürüm 2.5.0
==================================================
Yayınlanma tarihi: 26-10-2019

.. _önemli-notlar-2-5-0:

Önemli notlar
--------------------------------------------------
* Lütfen `apk oluşturmak <../Installing-AndroidAPS/Building-APK.html>` için `Android Studio Sürüm 3.5.1 <https://developer.android.com/studio/>`_ kullanın veya `güncelleme <../Installing-AndroidAPS/Update-to-new-version.html>`_ yapın.
* xDrip kullanıyorsanız `alıcıyı tanımla <../Configuration/xdrip.html#identify-receiver>`_ ayarlanmalıdır.
* Yamalı Dexcom uygulamasıyla Dexcom G6 kullanıyorsanız, `2.4 klasöründeki <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_ sürümüne ihtiyacınız olacaktır.
* Glimp, 4.15.57 ve daha yeni sürümlerde desteklenmektedir.

Bu güncelleme benim için mi? Şu anda DESTEKLENMİYOR
--------------------------------------------------
* Android 5 ve altı
* Poctech
* 600SerisiYükleyici
* 2.3 dizininden Yamalı Dexcom

Başlıca yeni özellikler
--------------------------------------------------
* Dahili TargetSDK 28 (Android 9) olarak değiştirilmesi, jetpack desteği
* RxJava2, Okhttp3, Retrofit desteği
* Eski `Medtronic pompaları <../Configuration/MedtronicPump.html>`_ desteği (RileyLink gerekir)
* Yeni `Otomasyon eklentisi <../Usage/Automation.html>`_
* Bolus sihirbazı hesaplamasından `sadece bolus parçasına <../Configuration/Preferences.html#advanced-settings-overview>`_ izin ver
* İnsülin aktivitesi oluşturma
* AİNS tahminlerini otoduyarlılık sonucuna göre ayarlama
* Yamalı Dexcom apk'leri için yeni destek (`2.4 klasörü <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* İmza doğrulayıcı
* OpenAPS kullanıcıları için hedeflerin atlanmasına izin ver
* Yeni `görevler <../Usage/Objectives.html>`_ - sınav, uygulama yönetimi
  (Önceki sürümlerde "Açık döngüde başlama" görevini tamamladıysanız sınav isteğe bağlıdır.)
* Dana* sürücülerinde yanlış zaman farkının bildirildiği hata düzeltildi
* `SMS Kominikatör <../Children/SMS-Commands.html>`` içindeki hata düzeltildi

Sürüm 2.3
==================================================
Yayınlanma tarihi: 25-04-2019

Başlıca yeni özellikler
--------------------------------------------------
* Insight için önemli güvenlik düzeltmesi (Insight kullanıyorsanız gerçekten önemlidir!)
* Geçmiş-Tarayıcısı düzeltmesi
* Delta hesaplaması düzeltmesi
* Dil güncellemeleri
* GIT'i kontrol etme ve kademeli yükseltme konusunda uyarı
* Birçok otomatik test
* AlarmSound Hizmetindeki olası çökmeyi düzeltme (teşekkürler @lee-b!)
* KŞ verilerinin yayını düzeltildi (şimdi SMS izninden bağımsız çalışıyor!)
* Yeni Sürüm Denetleyicisi


Sürüm 2.2.2
==================================================
Yayınlanma tarihi: 07-04-2019

Başlıca yeni özellikler
--------------------------------------------------
* Otoduyarlılık düzeltmesi: GH hedefi yükseltme/düşürme devre dışı bırakma
* Yeni çeviriler
* Insight sürücü düzeltmesi
* SMS eklentisi düzeltmesi


Sürüm 2.2
==================================================
Yayın tarihi: 29-03-2019

Başlıca yeni özellikler
--------------------------------------------------
* `DST düzeltmesi <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Wear güncellemesi
* `SMS eklenti <../Children/SMS-Commands.html>`_ güncellemesi
* Görevlere geri dönüş.
* Telefon hafızası doluysa döngüyü durdur


Sürüm 2.1
==================================================
Yayınlanma tarihi: 03-03-2019

Başlıca yeni özellikler
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ desteği (Tebbe Ubben ve JamOrHam tarafından)
* Ana ekranda durum ışıkları (Nico Schmitz)
* Yaz saati uygulaması yardımcısı (Roumen Georgiev)
* NS'den gelen profili adları düzeltmesi (Johannes Mockenhaupt)
* Kullanıcı arayüzü blokaj düzeltmesi (Johannes Mockenhaupt)
* Güncellenmiş G5 uygulaması desteği (Tebbe Ubben ve Milos Kozak)
* G6, Poctech, Tomato, Eversense KŞ kaynağı desteği (Tebbe Ubben ve Milos Kozak)
* Tercihlerden SMB'nin devre dışı bırakılması düzeltmesi (Johannes Mockenhaupt)

Diğer
--------------------------------------------------
* Varsayılan olmayan ``smbmaxminutes`` değeri kullanıyorsanız, bu değeri tekrar ayarlamanız gerekir.


Sürüm 2.0
==================================================
Yayınlanma tarihi: 03-11-2018

Başlıca yeni özellikler
--------------------------------------------------
* oref1/SMB desteği (`oref1 dokümantasyonu <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) SMB'den ne bekleyeceğinizi, nasıl davranacağını, neyi başarabileceğini ve sorunsuz çalışabilmesi için nasıl kullanacağını öğrenmek için dokümantasyonu mutlaka okuyun.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pompa desteği
* Kurulum sihirbazı: AndroidAPS'i kurma sürecinde size rehberlik eder

AMA'dan SMB'ye geçerken yapılacak ayarlar
--------------------------------------------------
* SMB'lerin etkinleştirilmesi için Görev 10'a başlanılmalıdır (SMB sekmesi genellikle hangi kısıtlamaların geçerli olduğunu gösterir)
* maxAİNS artık yalnızca bazal değil, tüm_ AİNS'i içeriyor. Diğer bir deyişle, bir yemek için 8 Ü bolus verilirse ve maksAİNS 7 Ü ise, AİNS 7 Ü'nin altına düşene kadar hiçbir SMB iletilmez.
* min_5m_carbimpact varsayılanı, AMA'dan SMB'ye geçerken 3'ten 8'e değiştirildi. AMA'dan SMB'ye yükseltme yapıyorsanız, bunu manuel olarak değiştirmeniz gerekir
* AndroidAPS 2.0 apk oluştururken dikkat edin: İsteğe bağlı yapılandırma, Android Gradle eklentisinin mevcut sürümü tarafından desteklenmiyor! Derlemeniz "isteğe bağlı yapılandırma" ile ilgili bir hatayla başarısız olursa, aşağıdakileri yapabilirsiniz:

  * Dosya > Ayarlar'a tıklayarak Tercihler penceresini açın. (Mac'te, Android Studio > Tercihler)
  * Sol bölmede, "Build, Execution, Deployment > Compiler" Oluştur, Yürüt, Dağıt > Derleyici'ye tıklayın.
  * Yapılandır onay kutusunun işaretini kaldırın.
  * Uygula veya Tamam'a tıklayın.

Genel bakış sekmesi
--------------------------------------------------
* Üst şerit, döngüyü askıya alma/devre dışı bırakma, profili görüntüleme/ayarlama ve geçici hedefleri (GH) başlatma/durdurma erişimi sağlar. GH'ler, tercihlerde ayarlanan varsayılanları kullanır. Yeni Hypo GH seçeneği, döngünün karbonhidratları çok agresif aşırı düzeltmesini önlemek için yüksek geçici bir GH'dir.
* Tedavi butonları: eski tedavi butonu hala kullanılabilir, ancak varsayılan olarak gizlidir. Butonların görünürlüğü artık yapılandırılabilir. Yeni insülin butonu, yeni karbonhidrat butonu (`yKarb/yayma karbonhidratlar <../Usage/Extended-Carbs.html>`_ dahil)
* `Renkli tahmin satırları <../Getting-Started/Screenshots.html#prediction-lines>`_
* NS'ye yüklenen insülin/karbonhidrat/hesap makinesi/hazırlama+doldurma iletişim kutularında bir not alanı gösterme seçeneği
* Güncellenmiş hazırlama/doldurma iletişim kutusu, set değişikliği ve kartuş değişikliği için hazırlamaya ve bakım portalı girişleri oluşturmaya olanak tanır

Saat
--------------------------------------------------
* Ayrı yapı varyantı düştü, şimdi düzenli tam yapıya dahil edildi. Saatten bolus kontrollerini kullanmak için telefonda bu ayarı etkinleştirin
* Sihirbaz artık sadece karbonhidrat istiyor (ve saat ayarlarında etkinleştirilmişse yüzde). Hesaplamaya hangi parametrelerin dahil olduğu telefondaki ayarlarda yapılandırılabilir
* onaylar ve bilgi diyalogları artık wear 2.0'da da çalışıyor
* yKarb menü girişi eklendi

Yeni eklentiler
--------------------------------------------------
* KŞ kaynağı olarak PocTech uygulaması
* KŞ kaynağı olarak Dexcom yamalı uygulama
* oref1 duyarlılık eklentisi

Diğer
--------------------------------------------------
* Uygulama artık tüm eklentileri göstermek için çekmeceyi kullanıyor; konfigürasyon ayarlarında görünür olarak seçilen eklentiler üstte sekmeler olarak gösterilir (favoriler)
* Konfigürasyon ayarları ve Görevler sekmeleri için elden geçirme, açıklamalar ekleme
* Yeni uygulama simgesi
* Çok sayıda iyileştirme ve hata düzeltmesi
* Pompaya uzun süre ulaşılamadığında Nightscout'tan bağımsız uyarılar örn. bitmiş pompa pili ve kaçırılan KŞ değerleri (ayarlarda *Yerel uyarılar* bölümüne bakın)
* Ekranı açık tutma seçeneği
* Bildirimi Android bildirimi olarak gösterme seçeneği
* Gelişmiş filtreleme (SMB'yi ve yemeklerden 6 saat sonra her zaman etkinleştirmeyi sağlayan), yamalı Dexcom uygulaması veya KŞ kaynağı olarak Xdripte G5 yerel modu ile desteklenir.
