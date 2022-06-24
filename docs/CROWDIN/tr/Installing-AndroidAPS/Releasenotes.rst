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
Akıllı telefonunuz Android 9'dan daha eski bir Android Sürümü kullanıyorsa, en az Android 9 gerektirdiğinden AAPS 3.0.0 ve sonraki sürümleri kullanamazsınız.

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
Yayınlanma tarihi: XX-XX-2022

Önemli ipuçları
----------------------
* güncellemeden sonra Wear uygulamasını kaldırın ve yeni sürümü yükleyin
* Omnipod kullanıcıları: pod değişikliğinde güncelleme

Değişiklikler
----------------------
* 3.0 sürümündeki sorunlar düzeltildi
* uygulama donması düzeltildi @MilosKozak
* DASH sürücüsü düzeltildi @avereha
* Dana sürücüsü düzeltildi @MilosKozak
* büyük kullanıcı arayüzü iyileştirmesi, temizleme ve birleştirme, malzeme tasarımına geçiş, stiller, beyaz tema, yeni simgeler. @Andries-Smit @MilosKozak @osodebailar @Philoul
* widget @MilosKozak
* Aidex CGM desteği @markvader @andyrozman (Sadece pompa kontrolü)
* Wear kodları, çeviriler @Andries-Smith
* Wear kodu yeniden düzenlendi. Artık geriye dönük uyumlu değil @MilosKozak
* a11y iyileştirmeleri @Andries-Smith
* yeni koruma seçeneği PIN @Andries-Smit
* menüde grafik ölçeğine izin verme @MilosKozak
* daha fazla istatistik seçeneği @MilosKozak
* VirtualPump lehine MDI eklentisi kaldırıldı

Sürüm 3.0.0
================
Yayınlanma tarihi: 31-01-2022

Önemli ipuçları
----------------------
* **Minimum Android sürümü artık 9.0'dır.**
* **Veriler yeni veritabanına taşınmaz.** Şikayet etmeyin, bu çok büyük bir değişikliktir, bundan dolayı mümkün değildir. Böylece güncellemeden sonra IOB, COB, tedaviler vb. temizlenecektir. Yeni `profil değişimi <../Usage/Profiles.html>`_ oluşturmanız ve sıfır IOB ve COB ile başlamanız gerekir. Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.
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
* IOB tahminlerini otoduyarlılık sonucuna göre ayarlama
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
* `DST fix <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Wear Update
* `SMS plugin <../Children/SMS-Commands.html>`_ update
* Go back in objectives.
* Stop loop if phone disk is full


Sürüm 2.1
==================================================
Release date: 03-03-2019

Başlıca yeni özellikler
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Status lights on main screen (Nico Schmitz)
* Daylight saving time helper (Roumen Georgiev)
* Fix processing profile names comming from NS (Johannes Mockenhaupt)
* Fix UI blocking (Johannes Mockenhaupt)
* Support for updated G5 app (Tebbe Ubben and Milos Kozak)
* G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

Diğer
--------------------------------------------------
* If you are using non default ``smbmaxminutes`` value you have to setup this value again


Sürüm 2.0
==================================================
Yayınlanma tarihi: 03-11-2018

Başlıca yeni özellikler
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Setup wizard: guides you through the process of setting up AndroidAPS

Settings to adjust when switching from AMA to SMB
--------------------------------------------------
* Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes _all_ IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! If your build fails with an error regarding "on demand configuration" you can do the following:

  * Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  * In the left pane, click Build, Execution, Deployment > Compiler.
  * Uncheck the Configure on demand checkbox.
  * Click Apply or OK.

Overview tab
--------------------------------------------------
* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#prediction-lines>`_
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

Saat
--------------------------------------------------
* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

Yeni eklentiler
--------------------------------------------------
* KŞ kaynağı olarak PocTech uygulaması
* KŞ kaynağı olarak Dexcom yamalı uygulama
* oref1 duyarlılık eklentisi

Diğer
--------------------------------------------------
* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Ekranı açık tutma seçeneği
* Bildirimi Android bildirimi olarak gösterme seçeneği
* Gelişmiş filtreleme (SMB'yi ve yemeklerden 6 saat sonra her zaman etkinleştirmeyi sağlayan), yamalı Dexcom uygulaması veya KŞ kaynağı olarak Xdripte G5 yerel modu ile desteklenir.
