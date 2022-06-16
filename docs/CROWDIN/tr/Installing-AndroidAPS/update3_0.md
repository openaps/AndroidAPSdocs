# AndroidAPS 3.0 güncellemesinden sonra gerekli kontroller

* **Minimum Android sürümü artık 9.0'dır.**
* **Veriler yeni veritabanına taşınmaz.**

  Şikayet etmeyin, bu çok büyük bir değişiklik, bu yüzden mümkün değil. Böylece güncellemeden sonra Aktif İnsülin, Aktif Karbonhidrat, tedaviler vb. temizlenecektir. Yeni [profil ](../Usage/Profiles) oluşturmanız ve yeni Aktif İnsülin ve Aktif Karbonhidrat değerleri ile başlamanız gerekir.

  Güncellemeyi dikkatlice planlayın!!! Aktif insülin ve aktif karbonhidratın olmadığı bir an en iyi seçenek olacaktır.

* Yeni ve değiştirilen özelliklerle ilgili ayrıntılar için lütfen [Sürüm Notlarına](../Installing-AndroidAPS/Releasenotes) bakın.


## Check automations

* New restrictions were introduced. Check your automations, especially if your conditions are still valid.
* If one of the conditions is missing, you need to add it again.
* Red automations contain invalid actions, go and edit them and reset to valid values

  Example: A profile change to 140% was allowed earlier but is now restriced to 130%.

## Check your nsclient settings and set the synchronization complications

* The implementation of the nsclient plugin has changed completly.
* Go to the nsclient tab and open the settings in the right-hand menu. A new preference "Synchronization" is available now.
* You can now make a detailed selection about which items shall be synchronized with your Nightscout site.

## Nightscout profile cannot be pushed
* The nightscout profile is gone, rest in peace!
* To copy your current nightscout profile into a local profile, go to the treatments page (now to be opened in the right-hand menu).
* Search for a profile switch with 100% and press clone.
* A new local profile is added, valid from the current date.
* To update profile from NS side use "Clone" (record!!, not profile) and save changes. You should see "Profile valid from:" set to currrent date.

## Reset master password
* You can now reset your master password in case you have forgotten it.
* You need to add a file named `PasswordReset` to the `/AAPS/extra` directory on your phones fileystem.
* Restart AndroidAPS.
* The new password will be the serial number of your active pump.
* For Dash: The serial number is printed on the Pod.
* For EROS it is also listed on the POD tab as "Sequence Number"

## KŞ'nin altındaki uyarı sinyali

Android 3.0'dan itibaren, ana ekranda KŞ değerinizin altında bir uyarı sinyali alabilirsiniz.

  ![Kırmızı KŞ uyarısı](../images/bg_warn_red.png)

  ![Sarı KŞ uyarısı](../images/bg_warn_yellow.png)

Ayrıntılar için [AAPS ekranları sayfasına](../Getting-Started/Screenshots#bg-warning-sign) bakın


## Hata mesajı: Farklı pompadan gelen veriler

   ![Hata mesajı: Farklı pompadan gelen veriler](../images/Screen_DifferentPump.png)

Bu sorunu çözmek için [Konfigürasyon ayarları](../Configuration/Config-Builder#pump)'na gidin. Pompayı sanal pompa ile değiştirin ve daha sonra gerçek pompanıza geri dönün. Bu şekilde pompa durumu sıfırlanacaktır.
