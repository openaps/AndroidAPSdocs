# AAPS 3.0 güncellemesinden sonra gerekli kontroller

* **Minimum Android sürümü artık 9.0'dır.**
* **Veriler yeni veritabanına taşınmaz.**

  Şikayet etmeyin, bu çok büyük bir değişiklik, bu yüzden mümkün değil. Böylece güncellemeden sonra Aktif İnsülin, Aktif Karbonhidrat, tedaviler vb. temizlenecektir. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB.

  Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.

* Please see the [Release Notes](../Maintenance/ReleaseNotes.md) for details on new and changed features.


## Otomasyonları kontrol edin

* Yeni kısıtlamalar getirildi. Özellikle şartlarınız hala geçerliyse otomasyonlarınızı kontrol edin.
* Koşullardan biri eksikse, tekrar eklemeniz gerekir.
* Kırmızı otomasyonlar geçersiz eylemler içeriyor, gidip bunları düzenleyin ve geçerli değerlere sıfırlayın

  Example: A profile change to 140% was allowed earlier but is now restricted to 130%.

## nsclient ayarlarınızı kontrol edin ve senkronizasyon komplikasyonlarını ayarlayın

* The implementation of the nsclient plugin has changed completely.
* nsclient sekmesine gidin ve sağdaki menüden ayarları açın. Artık yeni bir "Senkronizasyon" tercihi mevcuttur.
* Artık Nightscout sitenizle hangi öğelerin senkronize edileceği konusunda ayrıntılı bir seçim yapabilirsiniz.

(Update3_0-nightscout-profile-cannot-be-pushed)=
## Nightscout profili aktarılamıyor
* Nightscout profili gitti, huzur içinde uyu!
* Mevcut nightscout profilinizi yerel bir profile kopyalamak için tedaviler sayfasına gidin (şimdi sağdaki menüde açılacaktır).
* %100 ile bir profil anahtarı arayın ve klonla'ya basın.
* Geçerli tarihten itibaren geçerli olan yeni bir yerel profil eklenir.
* Profili NS tarafından güncellemek için "Klonla" (kaydet!!, profil değil) kullanın ve değişiklikleri kaydedin. You should see "Profile valid from:" set to current date.

(Update3_0-reset-master-password)=
## Ana parolayı sıfırla
* Unutmanız durumunda artık ana şifrenizi sıfırlayabilirsiniz.
* You need to add a file named `PasswordReset` to the `/AAPS/extra` directory on your phones filesystem.
* AAPS'i yeniden başlatın.
* Yeni şifre, aktif pompanızın seri numarası olacaktır.
* Dash için: Seri numarası her zaman 4241'dir.
* EROS için ayrıca POD sekmesinde "Sıra Numarası" olarak listelenir

## KŞ'nin altındaki uyarı sinyali

Android 3.0'dan itibaren, ana ekranda KŞ değerinizin altında bir uyarı sinyali alabilirsiniz.

  ![Kırmızı KŞ uyarısı](../images/bg_warn_red.png)

  ![Sarı KŞ uyarısı](../images/bg_warn_yellow.png)

For details see [AAPS screens page](#aaps-screens-bg-warning-sign)

(update30-failure-message-data-from-different-pump)=
## Hata mesajı: Farklı pompadan gelen veriler

   ![Hata mesajı: Farklı pompadan gelen veriler](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](#Config-Builder-pump). Pompayı sanal pompa ile değiştirin ve daha sonra gerçek pompanıza geri dönün. Bu şekilde pompa durumu sıfırlanacaktır.
