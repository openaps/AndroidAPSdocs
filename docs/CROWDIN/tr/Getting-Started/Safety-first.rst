Önce Güvenlik
**************************************************

**Kendi yapay pankreas sisteminizi oluşturmaya karar verdiğinizde, her zaman güvenlik ve emniyet hakkında düşünmek ve tüm eylemlerinizin etkisini anlamak önemlidir**

Genel
==================================================

* AndroidAPS, şeker hastalığını yönetmenize yardımcı olacak bir araçtır, programı yükleyip KŞ takibini unutabileceğiniz tam otomatik bir sistem değildir!
* AndroidAPS'in hiçbir zaman hata yapmayacağını varsaymayın. Bu program, insülin iletiminizin kontrolünü ele alıyor. Her zaman izleyin, nasıl çalıştığını anlayın ve eylemlerini nasıl yorumlayacağınızı öğrenin.
* Telefonun pompa ile eşleştirildiğinde, pompaya her türlü talimatı verebileceğini unutmayın. Bir çocuk tarafından kullanılıyorsa telefona yalnızca AndroidAPS yükleyin ve iletişim için kullanın. Truva atları, virüsler veya sisteminize müdahale edebilecek botlar gibi kötü amaçlı yazılımları bulaştırabilecek gereksiz uygulamalar veya oyunlar (!!!) yüklemeyin.
* Telefon üreticiniz ve Google tarafından sağlanan tüm güvenlik güncellemelerini yükleyin.
* Kapalı döngü sistemi kullanarak tedavinizi değiştirirken diyabet alışkanlıklarınızı da değiştirmeniz gerekebilir. Örneğin bazı insanlar, AndroidAPS otomatik insülini azalttığı (veya durdurduğu) için daha az hipo tedavisine ihtiyaç duyduklarını rapor ediyorlar.  
   
SMS Kominikatör
==================================================

* AndroidAPS, çocuğunuzun telefonunu kısa mesaj yoluyla uzaktan kontrol etmenizi sağlar. Bu SMS kominikatörü etkinleştirirseniz, uzak komutlar verecek şekilde ayarlanmış telefonun çalınabileceğini unutmayın. Bu yüzden her zaman en azından bir PIN kodu ile telefonu koruyun.
* AndroidAPS ayrıca bolus veya profil değişikliği gibi uzak komutlarınızın gerçekleşip gerçekleşmediğini kısa mesajla size bildirecektir. Alıcı telefonlardan birinin çalınması durumuna karşı en az iki farklı telefon numarasına onay metinleri gönderilecek şekilde ayarlamanız önerilir.

AndroidAPS can also be used by blind people
===========================================

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:  

* Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items". 
* Press the letter C to get to "Center for Ease of Use", open with Enter.  
* Then open "Use computer without a screen" with Enter. 
* There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it. 
* Done, just close the window! The screen reader should work now.

.. not:: 
   **ÖNEMLİ GÜVENLİK UYARISI**

   Bu dokümantasyonda anlatılan AndroidAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

   Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
