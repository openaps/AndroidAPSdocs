# Necessary checks after update to AAPS 3.0

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
* Restart AAPS.
* Yeni şifre, aktif pompanızın seri numarası olacaktır.
* Dash için: Seri numarası her zaman 4241'dir.
* EROS için ayrıca POD sekmesinde "Sıra Numarası" olarak listelenir

## KŞ'nin altındaki uyarı sinyali

Beginning with Android 3.0, you might get a warning signal beneath your BG number on the main screen.

  ![Red BG warning](../images/bg_warn_red.png)

  ![Yellow BG warning](../images/bg_warn_yellow.png)

For details see [AAPS screens page](Screenshots-bg-warning-sign)


## Hata mesajı: Farklı pompadan gelen veriler

   ![Hata mesajı: Farklı pompadan gelen veriler](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](Config-Builder-pump). Change pump to virtual pump and back to your actual pump. This will reset the pump state.
