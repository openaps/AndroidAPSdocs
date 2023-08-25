# AAPS 3.0 güncellemesinden sonra gerekli kontroller

* **Minimum Android sürümü artık 9.0'dır.**
* **Veriler yeni veritabanına taşınmaz.**

  Şikayet etmeyin, bu çok büyük bir değişiklik, bu yüzden mümkün değil. Böylece güncellemeden sonra Aktif İnsülin, Aktif Karbonhidrat, tedaviler vb. temizlenecektir. Yeni [profil ](../Usage/Profiles) oluşturmanız ve yeni Aktif İnsülin ve Aktif Karbonhidrat değerleri ile başlamanız gerekir.

  Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.

* Yeni ve değiştirilen özelliklerle ilgili ayrıntılar için lütfen [Sürüm Notlarına](../Installing-AndroidAPS/Releasenotes) bakın.


## Otomasyonları kontrol edin

* Yeni kısıtlamalar getirildi. Özellikle şartlarınız hala geçerliyse otomasyonlarınızı kontrol edin.
* Koşullardan biri eksikse, tekrar eklemeniz gerekir.
* Kırmızı otomasyonlar geçersiz eylemler içeriyor, gidip bunları düzenleyin ve geçerli değerlere sıfırlayın

  Örnek: Daha önce %140 olarak bir profil değişikliğine izin verildi, ancak şimdi %130 ile sınırlandırıldı.

## nsclient ayarlarınızı kontrol edin ve senkronizasyon komplikasyonlarını ayarlayın

* nsclient eklentisinin uygulanması tamamen değişti.
* nsclient sekmesine gidin ve sağdaki menüden ayarları açın. Artık yeni bir "Senkronizasyon" tercihi mevcuttur.
* Artık Nightscout sitenizle hangi öğelerin senkronize edileceği konusunda ayrıntılı bir seçim yapabilirsiniz.

## Nightscout profili aktarılamıyor
* Nightscout profili gitti, huzur içinde uyu!
* Mevcut nightscout profilinizi yerel bir profile kopyalamak için tedaviler sayfasına gidin (şimdi sağdaki menüde açılacaktır).
* %100 ile bir profil anahtarı arayın ve klonla'ya basın.
* Geçerli tarihten itibaren geçerli olan yeni bir yerel profil eklenir.
* Profili NS tarafından güncellemek için "Klonla" (kaydet!!, profil değil) kullanın ve değişiklikleri kaydedin. Geçerli tarihe ayarlanmış "Profil değeri:" görmelisiniz.

(update3_0-reset-master-password)=

## Ana parolayı sıfırla
* Unutmanız durumunda artık ana şifrenizi sıfırlayabilirsiniz.
* Telefonunuzun dosya sisteminde `/AAPS/extra` dizinine `PasswordReset` adlı bir dosya eklemeniz gerekiyor.
* AAPS'i yeniden başlatın.
* Yeni şifre, aktif pompanızın seri numarası olacaktır.
* Dash için: Seri numarası her zaman 4241'dir.
* EROS için ayrıca POD sekmesinde "Sıra Numarası" olarak listelenir

## KŞ'nin altındaki uyarı sinyali

Android 3.0'dan itibaren, ana ekranda KŞ değerinizin altında bir uyarı sinyali alabilirsiniz.

  ![Kırmızı KŞ uyarısı](../images/bg_warn_red.png)

  ![Sarı KŞ uyarısı](../images/bg_warn_yellow.png)

Ayrıntılar için [AAPS ekranları sayfasına](Screenshots-bg-warning-sign) bakın


## Hata mesajı: Farklı pompadan gelen veriler

   ![Hata mesajı: Farklı pompadan gelen veriler](../images/Screen_DifferentPump.png)

Bu sorunu çözmek için [Konfigürasyon ayarları](Config-Builder-pump)'na gidin. Pompayı sanal pompa ile değiştirin ve daha sonra gerçek pompanıza geri dönün. Bu şekilde pompa durumu sıfırlanacaktır.
