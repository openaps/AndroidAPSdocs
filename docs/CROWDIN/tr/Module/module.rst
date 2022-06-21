Component Overview 
**************************************************
AndroidAPS yalnızca (kendin-yap) bir uygulama değildir, kapalı döngü sisteminizin birkaç modülünden yalnızca biridir. Bileşenlere karar vermeden önce, `bileşen kurulumuna <../index.html#bileşen-kurulumu>`_ da bir göz atmak iyi bir fikir olacaktır.
   
.. image:: ../images/modules.png
  :alt: Bileşen Kurulumu

.. not:: 
   **ÖNEMLİ GÜVENLİK UYARISI**

   Bu dokümantasyonda anlatılan AndroidAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bir AndroidAPS sistemi oluşturmak veya çalıştırmak için bozulmuş, değiştirilmiş veya kendi kendine yapılmış insülin pompaları veya CGM alıcıları bulursanız veya size teklif edilirse *kesinlikle kullanmayın*.

   Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.
   
   Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.

Gerekli Modüller
==================================================
Diyabet tedaviniz için iyi bir kişisel dozaj algoritması
----------------------------------------------------------
Bu yaratılacak veya satın alınacak bir şey olmasa da, muhtemelen en hafife alınan ama en gerekli olan 'modül' budur. Bir algoritmanın diyabetinizi yönetmesine yardımcı olmasına izin verdiğinizde, ciddi hatalar yapmamak için doğru ayarları bilmesi gerekir.
Hala diğer modülleri kaçırıyor olsanız bile mevcut 'profilinizi' diyabet ekibinizle birlikte gözden geçirebilir ve uyarlayabilirsiniz. 
Çoğu looper, gün boyunca hormonal insülin duyarlılığına dayanan sirkadiyen (günlük) Bazal Oran, İDF ve Karbonhidrat Oranı kullanır.

Profil şunları içerir

* BO (Bazal oranları)
* İDF (insülin duyarlılık faktörü) insülin başına düşen kan şekeri biriminizdir
* KO (Karbonhidrat Oranı) bir ünite insülin başına düşen gram karbonhidrattır
* İES (insülin etki süresi).

SGLT-2 inhibitörlerini kullanamazsınız
--------------------------------------------------
Gliflozinler olarak da adlandırılan SGLT-2 inhibitörleri, böbrekte glikozun yeniden emilimini engeller. Kan şekeri seviyelerini hesaplanamayacak şekilde düşürdüklerinden, AndroidAPS gibi bir kapalı döngü sistemi kullanırken onları ALMAMALISINIZ! Ketoasidoz veya hipoglisemi için büyük bir risk olurdu! Bu ilacın kan şekerini yükseltmek için bazal oranları düşüren bir sistemle kombinasyonu özellikle tehlikelidir çünkü gliflozin nedeniyle kan şekerinde bu artış olmayabilir ve tehlikeli bir insülin eksikliği durumu meydana gelebilir.

Telefon
--------------------------------------------------
AndroidAPS'nin mevcut sürümü, Google Android 8.0 veya üzeri bir Android akıllı telefon gerektirir. Bu nedenle, yeni bir telefon düşünüyorsanız, minimum Android 8.1 önerilir, ancak optimal olarak Android 9 veya 10'u seçin.
Kullanıcıların, güvenlik nedeniyle AndroidAPS yapılarını güncel tutmaları şiddetle tavsiye edilir, ancak minimum Android 8.0 sürümüne sahip bir cihazı olmayan kullanıcılar için, daha eski Android sürümleri için uygun olan AndroidAPS sürüm 2.6.1.4, `eski depo. <https://github.com/miloskozak/androidaps>`_ adresinden yükleyebilirler

Kullanıcılar `test edilmiş telefon ve saatlerin bir listesini oluşturuyor <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

E-tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen `formu <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_ doldurun.

E-tabloyla ilgili herhangi bir sorun varsa lütfen `hardware@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin, test edilmesini istediğiniz farklı model telefon/saat bağışları için lütfen `donations@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin.

İnsülin pompası
--------------------------------------------------
AndroidAPS'in **şu anda** çalıştığı pompalar 

* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (ek olarak: Ruffy uygulaması, telefonda LineageOS veya Android 8.1 gereklidir)
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `Dana-i/RS <../Configuration/DanaRS-Insulin-Pump.html>`_
* 2.4 ve önceki sürüm `bazı eski Medtronic pompaları <../Configuration/MedtronicPump.html>`_ (`ek iletişim cihazı <../Module/module.html#additional-communication-device>`__ gerekli)
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_ (`ek iletişim cihazı <../Module/module.html#additional-communication-device>`__ gerekli)
* `Omnipod DASH <../Configuration/OmnipodDASH.html>`_ 

Ek bir iletişim cihazından bahsedilmiyorsa, insülin pompası ve AndroidAPS arasındaki iletişim, iletişim protokolünü çevirmek için ek bir iletişim cihazına ihtiyaç duymadan Android'in entegre bluetooth yığınına dayanır.

**AndroidAPS ile çalışma potansiyeline sahip olabilecek diğer pompalar**, `Gelecek (olası) Pompalar <../Getting-Started/Future-possible-Pump-Drivers.html>`_ sayfasında listelenmiştir.

Bir pompayı **özel olarak satın almanız** gerekiyorsa, çeşitli distribütörleri `bu e-tabloda <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_ bulabilirsiniz, sizin detayınız henüz listelenmemişse, lütfen paylaşın.

Ek iletişim cihazı
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Eski medtronic pompaları için, radyo sinyalini pompadan bluetooth'a "çevirmek" için ek bir iletişim cihazı (telefonunuzun yanı sıra) gereklidir. Pompanıza bağlı olarak doğru sürümü seçtiğinizden emin olun.

* |OrangeLink|  `OrangeLink Websitesi <https://getrileylink.org/product/orangelink>`_    
* |RileyLink| `433MHz RileyLink <https://getrileylink.org/product/rileylink433>`__
* |EmaLink|  `Emalink Websitesi <https://github.com/sks01/EmaLink>`__ - `Contact Info <mailto:getemalink@gmail.com>`__  
* |DiaLink|  DiaLink - `İletişim Bilgileri <mailto:Boshetyn@ukr.net>`__     
* |LoopLink|  `LoopLink Websitesi <https://www.getlooplink.org/>`__ - `Contact Info <https://jameswedding.substack.com/>`__ - Test edilmedi

**Peki AndroidAPS ile döngü için en iyi pompa hangisi?**

Combo, Insight ve eski Medtronic pompaları, sağlam pompalardır ve döngüye alınabilir. Combo, standart bir luer kilidine sahip olduğundan, aralarından seçim yapabileceğiniz daha birçok infüzyon seti tipinin avantajına sahiptir. Ve pili herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan ödünç alabilirsiniz ;-).

Pompa seçiminde DanaR/RS and Dana-i vs. 'nin Combo'ya karşı avantajları:

- Dana pompaları, Lineage işletim sistemine gerek kalmadan Android >= 5.1 olan hemen hemen tüm telefonlara bağlanır. Telefonunuz bozulursa, Dana pompalarıyla çalışan herhangi bir telefonu kolayca bulabilirsiniz... Combo ile bu o kadar kolay değildir. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)
- Dana-i/RS ile ilk eşleştirme daha kolaydır. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.
- Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking. 
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- AndroidAPS'nin konuşabileceği tüm pompalar iletim sırasında su geçirmezdir. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir". 

KŞ kaynağı
--------------------------------------------------
This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look `here <../Configuration/BG-Source.html>`_. Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: BOYDA is recommended as of version 3.0 (see `release notes <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for details). xDrip+ must be at least version 2022.01.14 or newer
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: It works with xDrip+ app or patched Dexcom app
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
* `Libre 2 <../Hardware/Libre2.html>`_: It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
* `Libre 1 <../Hardware/Libre1.html>`_: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
* `Eversense <../Hardware/Eversense.html>`_: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
* `Enlite (MM640G/MM630G) <../Hardware/MM640g.html>`_: quite complicated with a lot of extra stuff


Nightscout
--------------------------------------------------
Nightscout is a open source web application that can log and display your CGM data and AndroidAPS data and creates reports. You can find more information on the `website of the Nightscout project <http://nightscout.github.io/>`_. You can create your own `Nightscout website <https://nightscout.github.io/nightscout/new_user/>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AndroidAPS can be found `here <../Installing-AndroidAPS/Nightscout.html>`__.

AAPS-.apk file
--------------------------------------------------
The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  `here <../Installing-AndroidAPS/Building-APK.html>`__.  

Optional Modules
==================================================
Smartwatch
--------------------------------------------------
You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see `this documentation <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>`_ for more details).

Users are creating a `list of tested phones and watches <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. There are different watchfaces for use with AndroidAPS, which you can find `here <../Configuration/Watchfaces.html>`__.

E-tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen `formu <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_ doldurun.

E-tabloyla ilgili herhangi bir sorun varsa lütfen `hardware@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin, test edilmesini istediğiniz farklı model telefon/saat bağışları için lütfen `donations@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin.

xDrip+
--------------------------------------------------
Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found `here <../Configuration/xdrip.html>`__. Please be aware that the documentations to this app are not always up to date as its progress is quite fast.
  
What to do while waiting for modules
==================================================
It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, `read <../Where-To-Go-For-Help/Background-reading.html>`_ documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the `Objective description <../Usage/Objectives.html>`_ before each new Objective and setup up your `hardware <../index.html#component-setup>`_.

..
	Image aliases resource for referencing images by name with more positioning flexibility


..
	Donanım ve Yazılım Gereksinimleri
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|			image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |DiaLink|		      image:: ../images/omnipod/DiaLink.png
