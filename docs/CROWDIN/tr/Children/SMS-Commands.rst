SMS Komutları
**************************************************
Önce Güvenlik
==================================================
* AndroidAPS, çocuğunuzun telefonunu kısa mesaj yoluyla uzaktan kontrol etmenizi sağlar. Bu SMS kominikatörü etkinleştirirseniz, uzak komutlar verecek şekilde ayarlanmış telefonun çalınabileceğini unutmayın. Bu yüzden her zaman en azından bir PIN kodu ile telefonu koruyun. Güçlü bir parola veya biyometrik doğrulama önerilir.
* Ek olarak, SMS komutları için `ikinci bir telefon numarasına <#yetkili-telefon-numaraları>`_ izin verilmesi önerilir. Böylece komut gönderdiğiniz ana telefonunuzun kaybolması veya çalınması durumunda `geçici olarak devre dışı <#diğer>`_ bırakmak için ikinci numarayı kullanabilirsiniz.
* AndroidAPS ayrıca bolus veya profil değişikliği gibi uzak komutlarınızın gerçekleşip gerçekleşmediğini kısa mesajla size bildirecektir. Alıcı telefonlardan birinin çalınması durumuna karşı en az iki farklı telefon numarasına onay metinleri gönderilecek şekilde ayarlamanız önerilir.
* **SMS Komutları aracılığıyla bolus yaparsanız, Nightscout (NSClient, Web Sitesi...) ya da sms aracılığıyla karbonhidrat girmelisiniz!** Bunu yapmazsanız, aktif insülin çok düşük aktif karbonhidrat ile doğrulanır ve AAPS çok fazla aktif insülininiz olduğunu varsaydığından potansiyel olarak düzeltme bolusu yapılmamasına yol açar.
* AndroidAPS sürüm 2.7'den itibaren, SMS komutlarını kullanırken güvenliği artırmak için zamana dayalı tek seferlik parolaya sahip bir kimlik doğrulama uygulaması (google authenticator) kullanılmaktadır.

SMS Komutları kurulumu
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS Komutları kurulumu
      
* Geçici hedeflerin ayarı, AAPS takibi vb. gibi ayarların çoğu internet bağlantısı olan bir Android telefonda `NSClient uygulaması <../Children/Children.html>`_ üzerinde yapılabilir.
* Boluslar Nightscout üzerinden verilemez, ancak SMS komutlarını kullanabilirsiniz.
* Takipçi olarak bir iPhone kullanıyorsanız ve bu nedenle NSClient uygulamasını kullanamıyorsanız, ek SMS komutları mevcuttur.

* Android telefon ayarınızda Uygulamalar > AndroidAPS > İzinler'e gidin ve SMS'i etkinleştirin

Yetkili telefon numaraları
-------------------------------------------------
* AndroidAPS'de **Tercihler > SMS Kominikatör**'e gidin ve SMS komutlarının gelmesine izin vereceğiniz telefon numaralarını girin (noktalı virgülle ayrılmış - ör. +905321234567;+905421234568) 
* 'SMS ile uzaktan komutlara izin ver' seçeneğini etkinleştirin.
* Birden fazla numara kullanmak istiyorsanız:

  * Bir telefon numarası girin.
  * Bir SMS komutu gönderip onaylayarak bu numaranın çalışmasını sağlayın.
  * Ek numaraları noktalı virgülle ayırarak, boşluk bırakmadan girin.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: Farklı numaralara SMS Komutlarını ayarlamak

Bolus komutları arasındaki süre
-------------------------------------------------
* SMS ile verilen iki bolus arasındaki minimum gecikmeyi tanımlayabilirsiniz.
* Güvenlik nedeniyle bu değeri düzenlemek için en az iki yetkili telefon numarası eklemelisiniz.

Tek seferlik parola sonuna ilave zorunlu PIN
-------------------------------------------------
* Güvenlik nedeniyle, tek seferlik parolanın ardından bir PIN gelmelidir.
* PIN kuralları:

  * 3 to 6 rakam olmalı
  * aynı rakamlar olmamalı (ör. 1111)
  * art arda olmamalı (ör. 1234)

Authenticator kurulumu
-------------------------------------------------
* Güvenliği artırmak için iki faktörlü kimlik doğrulama kullanılır.
* RFC 6238 TOTP belirteçlerini destekleyen herhangi bir Kimlik Doğrulayıcı uygulamasını kullanabilirsiniz. Popüler ücretsiz uygulamalar şunlardır:

  * `Authy <https://authy.com/download/>`_
  * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
  * `LastPass Authenticator <https://lastpass.com/auth/>`_
  * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Seçtiğiniz kimlik doğrulama uygulamasını takipçi telefonunuza yükleyin ve AAPS'de gösterilen QR kodunu tarayın.
* Kimlik doğrulama uygulamanızda gösterilen kodu ve AAPS'de az önce kurduğunuz PIN'i girerek tek kullanımlık şifreyi test edin. Example:

  * Zorunlu PIN'iniz 2020
  * Kimlik doğrulama uygulamasındaki TOTP kodu 457051
  * Mesaja cevap olarak 4570512020 girilecektir.
   
* Giriş doğruysa kırmızı "YANLIŞ PIN" metni **otomatik olarak** yeşil bir "TAMAM" olarak değişecektir. **Basabileceğiniz bir buton yok!**
* Her iki telefondaki saat senkronize olmalıdır. En iyisi, ağdan otomatik olarak ayarlamaktır. Zaman farklılıkları kimlik doğrulama sorunlarına yol açabilir.
* Kimlik doğrulayıcıları kaldırmak istiyorsanız "KİMLİK DOĞRULAYICILARI (OTP) SIFIRLA" düğmesini kullanın.  (Kimlik doğrulayıcıyı sıfırlayarak, önceden tanımlanmış TÜM doğrulayıcıları kaldırırsınız. Onları tekrar tanımlamanız gerekir)

SMS komutlarını kullanmak
==================================================
* Aşağıdaki `komutlardan <../Children/SMS-Commands.html#komutlar>`__ herhangi birini kullanarak onayladığınız telefon numaralarından AndroidAPS çalışan ana telefona bir SMS gönderebilirsiniz. 
* AAPS ana telefonu, istenen komutun veya durumun başarısını onaylamak için yanıt verecektir. 
* Kodu göndererek komutu onaylayın. Example:

  * Zorunlu PIN'iniz 2020
  * Kimlik doğrulama uygulamasındaki TOTP kodu 457051
  * Mesaja cevap olarak 4570512020 girilecektir.

**İpucu**: Çok fazla SMS gönderilecekse, telefon tarifenizde (kullanılan her telefon için) sınırsız SMS olması yararlı olabilir.

Komutlar
==================================================
Komutlar İngilizce olarak gönderilmelidir, yanıt dizesi ise programınızın bu kısmı `tercüme edilmiş <../translations.html#androidaps-uygulama-dizinini-tercüme-etme>` ise yerel dilinizde olacaktır.

.. image:: ../images/SMSCommands.png
  :alt: Örnek SMS Komutları

Döngü
--------------------------------------------------
* LOOP STOP/DISABLE
  * Yanıt: Döngü devre dışı bırakıldı
* LOOP START/ENABLE
  * Yanıt: Döngü etkinleştirildi
* LOOP STATUS

  * Yanıt, döngünün durumuna bağlıdır

    * Loop is disabled
    * Loop is enabled
    * Askıya alındı (10 dk)
* LOOP SUSPEND 20
  * Yanıt: Döngü 20 dakika süreyle askıya alındı
* LOOP RESUME
  * Yanıt: Döngü devam ettirildi

CGM (Sürekli glikoz ölçüm) verileri
--------------------------------------------------
* BG
  * Yanıt: Son KŞ: 5,6 4dk önce, Delta: -0,2 mmol, IOB: 0,20U (Bolus: 0.10U Bazal: 0.10U)
* CAL 110
  * Yanıt: 110 kalibrasyon göndermek için Authenticator uygulamasından gelen kod ve ardından PIN ile cevaplayın
  * Doğru kod alındıktan sonra yanıt: Kalibrasyon gönderildi (**xDrip kuruluysa. Kalibrasyonların kabul edilmesi xDrip'te etkinleştirilmelidir**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
  * Yanıt: Geçici bazalı durdurmak için Authenticator uygulamasından gelen kod ve ardından PIN ile cevaplayın
* BASAL 0.3
  * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
  * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
  * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
  * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolus
--------------------------------------------------
Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

* BOLUS 1.2
  * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
  * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
  * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
  * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
  * Response B: Remote bolus not available. 
* CARBS 5
  * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
  * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
  * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
  * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Profil
--------------------------------------------------
* PROFILE STATUS
  * Response: Profile1
* PROFILE LIST
  * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
  * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
  * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Other
--------------------------------------------------
* TREATMENTS REFRESH
  * Response: Refresh treatments from NS
* NSCLIENT RESTART
  * Response: NSCLIENT RESTART 1 receivers
* PUMP
  * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
  * Response: Pump reconnected
* PUMP DISCONNECT *30*
  * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
  * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
  * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
  * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
  * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
  * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Troubleshooting
==================================================
Multiple SMS
--------------------------------------------------
If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

SMS commands not working on Samsung phones
--------------------------------------------------
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
