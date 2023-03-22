# Bileşenlere Genel Bakış

AAPS yalnızca (kendin-yap) bir uygulama değildir, kapalı döngü sisteminizin birkaç modülünden yalnızca biridir. Bileşenlere karar vermeden önce, [bileşen kurulumuna](index-component-setup) da bir göz atmak iyi bir fikir olacaktır.

```{image} ../images/modules.png
:alt: Bileşen Kurulumu
```

```{note}
** ÖNEMLİ GÜVENLİK BİLDİRİMİ **

Bu dokümantasyonda anlatılan AAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bir AAPS sistemi oluşturmak veya çalıştırmak için bozulmuş, değiştirilmiş veya kendi kendine yapılmış insülin pompaları veya CGM alıcıları bulursanız veya size teklif edilirse *kesinlikle kullanmayın*.

Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.

Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
```

## Gerekli Modüller

### Diyabet tedaviniz için iyi bir kişisel dozaj algoritması

Bu yaratılacak veya satın alınacak bir şey olmasa da, muhtemelen en hafife alınan ama en gerekli olan 'modül' budur. Bir algoritmanın diyabetinizi yönetmesine yardımcı olmasına izin verdiğinizde, ciddi hatalar yapmamak için doğru ayarları bilmesi gerekir. Hala diğer modülleri kaçırıyor olsanız bile mevcut 'profilinizi' diyabet ekibinizle birlikte gözden geçirebilir ve uyarlayabilirsiniz. Çoğu looper, gün boyunca hormonal insülin duyarlılığına dayanan sirkadiyen (günlük) Bazal Oran, İDF ve Karbonhidrat Oranı kullanır.

Profil şunları içerir

- BO (Bazal oranları)
- İDF (insülin duyarlılık faktörü) insülin başına düşen kan şekeri biriminizdir
- KO (Karbonhidrat Oranı) bir ünite insülin başına düşen gram karbonhidrattır
- İES (insülin etki süresi).

(module-no-use-of-sglt-2-inhibitors)=
### SGLT-2 inhibitörlerini kullanamazsınız

Gliflozinler olarak da adlandırılan SGLT-2 inhibitörleri, böbrekte glikozun yeniden emilimini engeller. Kan şekeri seviyelerini hesaplanamayacak şekilde düşürdüklerinden, AAPS gibi bir kapalı döngü sistemi kullanırken onları ALMAMALISINIZ! Ketoasidoz veya hipoglisemi için büyük bir risk olurdu! Bu ilacın kan şekerini yükseltmek için bazal oranları düşüren bir sistemle kombinasyonu özellikle tehlikelidir çünkü gliflozin nedeniyle kan şekerinde bu artış olmayabilir ve tehlikeli bir insülin eksikliği durumu meydana gelebilir.

(module-phone)=
### Telefon

AAPS'nin mevcut sürümü, Google Android 9.0 veya üzeri bir Android akıllı telefon gerektirir. Bu nedenle, yeni bir telefon düşünüyorsanız, minimum Android 8.1 önerilir, ancak optimal olarak Android 10 veya 12 seçin. Kullanıcıların, güvenlik nedeniyle AAPS yapılarını güncel tutmaları şiddetle tavsiye edilir, ancak minimum Android 9.0 sürümüne sahip bir cihazı olmayan kullanıcılar için, daha eski Android sürümleri için uygun olan AAPS sürümü 2.6.1.4, için [eski depo.](https://github.com/miloskozak/AAPS) ya bakabilirsiniz.

Kullanıcılar bir [test edilmiş telefonlar ve saatler listesi](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) oluşturuyor

Tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen [formu](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) doldurun.

E-tabloyla ilgili herhangi bir sorun olursa lütfen [hardware@androidaps.org](mailto:hardware@androidaps.org) adresine bir e-posta gönderin, hala test edilmesi gereken telefon/saat modeli bağışları için lütfen [donations@androidaps.org](mailto:hardware@androidaps.org) adresine bir e-posta gönderin.

### İnsülin pompası

AAPS **şu an için** şu pompalarla çalışır;

- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) (ek olarak: telefonunuzda Ruffy uygulaması, LineageOS veya Android 8.1 yüklü olması gerekir)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [DanaR](../Configuration/DanaR-Insulin-Pump.md)
- [Dana-i/RS](../Configuration/DanaRS-Insulin-Pump.md)
- 2.4 sürümünden [eski bazı Medtronic pompaları](../Configuration/MedtronicPump.md) ([ek iletişim cihazı](module-additional-communication-device) gerekli)
- [Omnipod Eros](../Configuration/OmnipodEros.md) ([ek iletişim cihazı](module-additional-communication-device) gerekli)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)

Ek bir iletişim cihazından bahsedilmiyorsa, insülin pompası ve AAPS arasındaki iletişim, iletişim protokolünü çevirmek için ek bir iletişim cihazına ihtiyaç duymadan Android'in entegre bluetooth yığınına dayanır.

AAPS ile çalışma potansiyeline sahip olabilecek **diğer pompalar**, [Gelecekteki (olası) Pompalar](../Getting-Started/Future-possible-Pump-Drivers.md) sayfasında listelenmiştir.

(module-additional-communication-device)=
#### Ek iletişim cihazı

Eski medtronic pompaları için, radyo sinyalini pompadan bluetooth'a "çevirmek" için ek bir iletişim cihazı (telefonunuzun yanı sıra) gereklidir. Pompanıza bağlı olarak doğru sürümü seçtiğinizden emin olun.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Websitesi](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Websitesi](https://github.com/sks01/EmaLink) - [İletişim Bilgileri](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [İletişim bilgileri](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Websitesi](https://www.getlooplink.org/) - [İletişim Bilgileri](https://jameswedding.substack.com/) - Test edilmedi

**Peki AAPS ile döngü için en iyi pompa hangisi?**

Combo, Insight ve eski Medtronic pompaları, sağlam pompalardır ve döngüye alınabilir. Combo, standart bir luer kilidine sahip olduğundan, aralarından seçim yapabileceğiniz daha birçok infüzyon seti tipinin avantajına sahiptir. Ve pili herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan ödünç alabilirsiniz ;-).

Bununla birlikte, tercih edilen pompa olarak DanaR/RS ve Dana-i'nin Combo'ya karşı avantajları şunlardır:

- Dana pompaları, Android >= 5.1 sürümüne sahip hemen hemen her telefona flash lineage gerekmeden bağlanır. Telefonunuz bozulursa, genellikle Dana pompalarıyla çalışan herhangi bir telefonu kolayca hızlı bir şekilde değiştirebilirsiniz... Bu Combo ile o kadar kolay değil. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)
- Dana-i/RS ile ilk eşleştirme daha kolaydır. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.
- Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Yine de bağlantınız uzun zaman alabilir, bu nedenle BT bağlantısının kopabileceği yerlerde bağlantı için daha fazla zamana ihtiyaç var, bu da bolus yaparken veya yemek yerken telefonunuzdan uzaklaşırsanız o kadar kolay değil.
- Combo, GBO'larin sonunda titrer, DanaR, SMB'de titrer (veya bip sesi çıkarır). Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir.  Dana-i/RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.
- Dana-i/RS'deki geçmişi birkaç saniyede karbonhidratla okumak, çevrimdışıyken telefonları kolayca değiştirmeyi ve bazı CGM değerleri girer girmez döngüye devam etmeyi mümkün kılar.
- AAPS'in konuşabileceği tüm pompalar iletim sırasında su geçirmezdir. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir".

### KŞ kaynağı

Bu, AAPS ile uyumlu tüm CGM'lere/FGM'lere kısa bir genel bakıştır. Daha fazla ayrıntı için [buraya](../Configuration/BG-Source.md) bakın. Kısa bir ipucu: glikoz verilerinizi xDrip+ uygulamasında veya Nightscout web sitesinde görüntüleyebiliyorsanız, AAPS'de KŞ kaynağı olarak xDrip+'ı (veya web bağlantılı Nightscout'u) seçebilirsiniz.

- [Dexcom G6](../Hardware/DexcomG6.md): BOYDA, 3.0 sürümünden itibaren önerilir (ayrıntılar için [sürüm notlarına](Releasenotes-important-hints-3-0-0) bakın). xDrip+ en az 2022.01.14 veya daha yeni sürüm olmalıdır
- [Dexcom G5](../Hardware/DexcomG5.md): xDrip+ uygulamasıyla veya yamalı Dexcom uygulamasıyla çalışır
- [Dexcom G4](../Hardware/DexcomG4.md): Bu sensörler oldukça eskidir, ancak bunların nasıl kullanılacağına ilişkin talimatları xDrip+ uygulamasıyla bulabilirsiniz
- [Libre 2](../Hardware/Libre2.md): xDrip+ ile çalışır (verici gerekmez), ancak kendi yamalı uygulamanızı oluşturmanız gerekir.
- [Libre 1](../Hardware/Libre1.md): Bunun için (inşa et veya satın al) Bluecon veya MiaoMiao gibi bir vericiye ve xDrip+ uygulamasına ihtiyacınız var
- [Eversense](../Hardware/Eversense.md): Şimdiye kadar yalnızca ESEL uygulaması ve yamalı bir Eversense-Uygulaması ile birlikte çalışır (Dana RS ve LineageOS ile çalışmaz ancak DanaRS ve Android veya Combo ve Lineage OS ile çalışır)
- [Enlite (MM640G/MM630G)](../Hardware/MM640g.md): pek çok ekstra öğe gerekir ve oldukça karmaşıktır

### Nightscout

Nightscout, CGM verilerinizi ve AAPS verilerinizi kaydedip görüntüleyebilen ve raporlar oluşturan açık kaynaklı bir web uygulamasıdır. [Nightscout projesinin web sitesinde](http://nightscout.github.io/) daha fazla bilgi bulabilirsiniz. Kendi [Nightscout web sitenizi](https://nightscout.github.io/nightscout/new_user/) oluşturabilir, [zehn.be](https://ns.10be.de/en/index.html)'deki yarı otomatik Nightscout kurulumunu kullanabilir veya kendi sunucunuzda barındırabilirsiniz. (bu, BT uzmanları içindir)

Nightscout diğer modüllerden bağımsızdır. Görev 1'i yerine getirmek için Nightscout'a ihtiyacınız olacak.

Nightscout'un AAPS ile kullanım için nasıl yapılandırılacağına ilişkin ek bilgiler [burada](../Installing-AndroidAPS/Nightscout.md) bulunabilir.

### AAPS-.apk dosyası

Sistemin temel bileşeni. Uygulamayı yüklemeden önce, apk dosyasını (bir Android Uygulaması için dosya adı uzantısıdır) oluşturmanız gerekir. Talimatları  [burada](../Installing-AndroidAPS/Building-APK.md) bulabilirsiniz.

## Opsiyonel Modüller

### Akıllı saat

Android Wear 1.x ve sonraki sürümlere sahip herhangi bir akıllı saati seçebilirsiniz. Çoğu looper, telefon kapsama alanı dışındayken bile Dexcom G5/G5'ten okuma alabilen tek saat olduğu için Sony Smartwatch 3 (SWR50) takar. Diğer bazı saatler de bağımsız bir alıcı olarak çalışacak şekilde yamalanabilir (daha fazla ayrıntı için [bu belgelere](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) bakın).

Kullanıcılar bir [test edilmiş telefonlar ve saatler listesi](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing) oluşturuyor. AAPS ile kullanım için [burada](../Configuration/Watchfaces.md) bulabileceğiniz farklı saat arayüzleri vardır.

Tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen [formu](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform) doldurun.

E-tabloyla ilgili herhangi bir sorun olursa lütfen [hardware@androidaps.org](mailto:hardware@androidaps.org) adresine bir e-posta gönderin, hala test edilmesi gereken telefon/saat modeli bağışları için lütfen [donations@androidaps.org](mailto:hardware@androidaps.org) adresine bir e-posta gönderin.

### xDrip+

KŞ Kaynağı olarak xDrip+ Uygulamasına ihtiyacınız olmasa bile, onu alarmlar veya iyi bir kan şekeri ekranı için kullanabilirsiniz. İstediğiniz kadar alarmınız olabilir, alarmın ne zaman aktif olacağını belirleyebilir, sessiz modu geçersiz kılabilirsiniz vb. Bazı xDrip+ bilgileri [burada](../Configuration/xdrip.md) bulunabilir. İlerlemesi oldukça hızlı olduğu için bu uygulamanın belgelerinin her zaman güncel olmadığını lütfen unutmayın.

## Modülleri beklerken yapılması gerekenler

Kapalı döngüye geçmek için için tüm modülleri elde etmek bazen biraz zaman alabilir. Ama merak etmeyin, beklerken yapabileceğiniz çok şey var. Bazal oranları (BO), insülin-karbonhidrat oranını (IC), insülin-duyarlılık-faktörünü (İDF) vb. (uygun olduğunda) kontrol etmek GEREKLİDİR. Ve bu sırada açık döngü ile sistemi test etme ve AAPS'i tanımak için bir fırsat olabilir. Bu modu kullanarak (açık döngü) AAPS, manuel olarak uygulayabileceğiniz tedavi önerileri verir.

Buradaki dokümanları okumaya devam edebilir, çevrimiçi veya çevrimdışı olarak diğer döngü kullanıcılarıyla iletişime geçebilir, [bu linkteki](../Where-To-Go-For-Help/Background-reading.md) dokümanları veya diğer döngü kullanıcılarının yazdıklarını okuyabilirsiniz. (Yazılanlara rağmen dikkatli olmalısınız, her şey doğru olmayabilir veya sizin konfigürasyonunuz için uygun değildir).

**Bitti mi?** AAPS bileşenleriniz tamamlandıysa (tebrikler!) En azından açık döngü modunda başlayabilirsiniz. Her yeni görev ve [donanım](index-component-setup) kurulumundan önce ilk olarak [Görev açıklamaları](../Usage/Objectives.md) bölümünü okumalısınız.
