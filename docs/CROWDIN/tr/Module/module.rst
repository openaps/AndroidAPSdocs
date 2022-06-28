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
- Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Yine de bağlantınız uzun zaman alabilir, bu nedenle BT bağlantısının kopabileceği yerlerde bağlantı için daha fazla zamana ihtiyaç var, bu da bolus yaparken veya yemek yerken telefonunuzdan uzaklaşırsanız o kadar kolay değil. 
Combo, GBO'larin sonunda titreşir, Dana* R, SMB'de titreşir (veya bip sesi çıkarır). Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir.  Dana-i/RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.
- Dana-i/RS'deki geçmişi birkaç saniyede karbonhidratla okumak, çevrimdışıyken telefonları kolayca değiştirmeyi ve bazı CGM değerleri girer girmez döngüye devam etmeyi mümkün kılar.
- AndroidAPS'nin konuşabileceği tüm pompalar iletim sırasında su geçirmezdir. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir". 

KŞ kaynağı
--------------------------------------------------
Bu, AndroidAPS ile uyumlu tüm CGM'lere/FGM'lere kısa bir genel bakıştır. Daha fazla ayrıntı için `buraya <../Configuration/BG-Source.html>`_ bakın. Kısa bir ipucu: glikoz verilerinizi xDrip+ uygulamasında veya Nightscout web sitesinde görüntüleyebiliyorsanız, AAPS'de KŞ kaynağı olarak xDrip+'ı (veya web bağlantılı Nightscout'u) seçebilirsiniz.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: Sürüm 3.0'dan itibaren BYODA önerilir (ayrıntılar için `sürüm notlarına <../Installing-AndroidAPS/Releasenotes.html#important-hints>`_ bakın). xDrip+ en az 2022.01.14 veya daha yeni sürüm olmalıdır
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: xDrip+ uygulamasıyla veya yamalı Dexcom uygulamasıyla çalışır
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Bu sensörler oldukça eskidir, ancak bunların xDrip+ uygulamasıyla nasıl kullanılacağına ilişkin talimatları bulabilirsiniz.
* `Libre 2 <../Hardware/Libre2.html>`_: xDrip+ ile çalışır (verici gerekmez), ancak kendi yamalı uygulamanızı oluşturmanız gerekir.
* `Libre 1 <../Hardware/Libre1.html>`_: Bunun için xDrip+ uygulamasına ve Bluecon veya MiaoMiao gibi bir vericiye ihtiyacınız var (oluşturun veya satın alın)
* `Eversense <../Hardware/Eversense.html>`_: Yalnızca ESEL uygulaması ve yamalı Eversense-App ile birlikte çalışır (Dana RS ve LineageOS ile çalışmaz, DanaRS ve Android veya Combo ve Lineage OS ile çalışır)
* `Enlite (MM640G/MM630G) <../Hardware/MM640g.html>`_: Birçok ekstra şey gerekmekte ve oldukça karmaşık


Nightscout
--------------------------------------------------
Nightscout, CGM verilerinizi ve AndroidAPS verilerinizi kaydedip görüntüleyebilen ve raporlar oluşturan açık kaynaklı bir web uygulamasıdır. `Nightscout projesinin web sitesinde <http://nightscout.github.io/>`_ daha fazla bilgi bulabilirsiniz. Kendi `Nightscout web sitenizi <https://nightscout.github.io/nightscout/new_user/>`_ oluşturabilir, `zehn.be <https://ns.10be.de/en/index.html>`_ adresinde yarı otomatik Nightscout kurulumunu kullanabilirsiniz. Veya kendi sunucunuzda barındırabilirsiniz. (BT uzmanları içindir)

Nightscout diğer modüllerden bağımsızdır. Görev 1'i yerine getirmek için Nightscout'a ihtiyacınız olacak.

AndroidAPS ile kullanım için Nightscout'un nasıl yapılandırılacağına ilişkin ek bilgileri `burada <../Installing-AndroidAPS/Nightscout.html>`__ bulabilirsiniz.

AAPS-.apk dosyası
--------------------------------------------------
Sistemin temel bileşeni. Uygulamayı yüklemeden önce, apk dosyasını (bir Android Uygulaması için dosya adı uzantısıdır) oluşturmanız gerekir. Talimatları `burada <../Installing-AndroidAPS/Building-APK.html>`__ bulabilirsiniz.  

Opsiyonel Modüller
==================================================
Akıllı saat
--------------------------------------------------
Android Wear 1.x ve sonraki sürümlere sahip herhangi bir akıllı saati seçebilirsiniz. Çoğu looper, telefon kapsama alanı dışındayken bile Dexcom G5/G5'ten okuma alabilen tek saat olduğu için Sony Smartwatch 3 (SWR50) takar. Diğer bazı saatler de bağımsız bir alıcı olarak çalışacak şekilde yamalanabilir (daha fazla ayrıntı için 'bu dokümantasyona <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the- G5>`_ bakın).

Kullanıcılar, `test edilmiş telefon ve saatlerin <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ listesini oluşturuyor. AndroidAPS ile kullanım için `burada <../Configuration/Watchfaces.html>`__ bulabileceğiniz farklı saat arayüzleri vardır.

E-tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen `formu <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_ doldurun.

E-tabloyla ilgili herhangi bir sorun varsa lütfen `hardware@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin, test edilmesini istediğiniz farklı model telefon/saat bağışları için lütfen `donations@androidaps.org <mailto:hardware@androidaps.org>`_ adresine bir e-posta gönderin.

xDrip+
--------------------------------------------------
KŞ Kaynağı olarak xDrip+ uygulamasına sahip olmanız gerekmese bile, ör. görüntüsü için xDrip+ kullanabilirsiniz. İstediğiniz kadar alarmınız olabilir, alarmın ne zaman aktif olacağını belirleyebilir, sessiz modu geçersiz kılabilirsiniz vb. Bazı xDrip+ bilgileri `burada <../Configuration/xdrip.html>`__ bulunabilir. İlerlemesi oldukça hızlı olduğu için bu uygulamanın belgelerinin her zaman güncel olmadığını lütfen unutmayın.
  
Modülleri beklerken yapılması gerekenler
==================================================
Kapalı döngüye geçmek için için tüm modülleri elde etmek bazen biraz zaman alabilir. Ama merak etmeyin, beklerken yapabileceğiniz çok şey var. Bazal oranları (BO), insülin-karbonhidrat oranını (IC), insülin-duyarlılık-faktörünü (İDF) vb. (uygun olduğunda) kontrol etmek GEREKLİDİR. Ve bu sırada açık döngü ile sistemi test etme ve AndroidAPS'i tanımak için bir fırsat olabilir. Bu modu kullanarak (açık döngü) AndroidAPS, manuel olarak uygulayabileceğiniz tedavi önerileri verir.

Buradaki dokümanları okumaya devam edebilir, çevrimiçi veya çevrimdışı olarak diğer döngü kullanıcılarıyla iletişime geçebilir, `<../Where-To-Go-For-Help/Background-reading.html>'_ belgelerini veya diğer döngü kullanıcılarının yazdıklarını okuyabilirsiniz. (Yazılanlara rağmen dikkatli olmalısınız, her şey doğru olmayabilir veya sizin konfigürasyonunuz için uygun değildir).

**Tamamlandı?**
AAPS bileşenleriniz tamamlandıysa (tebrikler!) veya en azından açık döngü modunda başlamaya yetecek kadar varsa, her yeni görev ve `donanım <../index.html#component-setup>`_ kurulumundan önce ilk olarak 'Görev açıklaması <../Usage/Objectives.html>'_ bölümünü okumalısınız.

..
	Daha fazla konumlandırma esnekliği ile görüntülere ada göre referans vermek için görüntü takma adı kaynağı


..
	Donanım ve Yazılım Gereksinimleri
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|			image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |DiaLink|		      image:: ../images/omnipod/DiaLink.png
