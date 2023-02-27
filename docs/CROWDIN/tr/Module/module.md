

<div id="front-matter"><ul><li><div class="yaml-key" translate="no" has_child_nodes="yes">substitutions: </div><ul><li><div class="yaml-key" translate="no" has_child_nodes="no">DiaLink: </div><div class="yaml-value">`{image} ../images/omnipod/DiaLink.png`</div></li>
- <div class="yaml-key" translate="no" has_child_nodes="no">EmaLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/EmaLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">LoopLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/LoopLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">OrangeLink: </div><div class="yaml-value">
    <code>{image} ../images/omnipod/OrangeLink.png</code>
  </div>
- <div class="yaml-key" translate="no" has_child_nodes="no">RileyLink: </div><div class="yaml-value">
    ```{image} ../images/omnipod/RileyLink.png</p> 
    
    <pre><code class="&lt;/div&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;">

# Bileşene Genel Bakış

AndroidAPS yalnızca (kendin-yap) bir uygulama değildir, kapalı döngü sisteminizin birkaç modülünden yalnızca biridir. Bileşenlere karar vermeden önce, [bileşen kurulumuna](index-component-setup) da bir göz atmak iyi bir fikir olacaktır.

```{image} ../images/modules.png
:alt: Bileşenlere genel bakış
</code></pre>
    
    <pre><code class="{note}">** Önemli güvenlik bildirimi **

Bu dokümantasyonda anlatılan AndroidAPS güvenlik özelliklerinin temeli, sisteminizi oluşturmak için kullanılan donanımın güvenlik özellikleri üzerine kurulmuştur. Kapalı döngü kullanımı ile otomatik insülin dozlama için yalnızca test edilmiş, tam işlevli FDA veya CE onaylı insülin pompası ve CGM kullanmanız kritik derecede önemlidir. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bir AndroidAPS sistemi oluşturmak veya çalıştırmak için bozulmuş, değiştirilmiş veya kendi kendine yapılmış insülin pompaları veya CGM alıcıları bulursanız veya size teklif edilirse *kesinlikle kullanmayın*.

Ek olarak, sadece orijinal aksesuarların kullanılması da bir o kadar önemlidir. Yerleştirme yardımcıları, kanüller ve rezervuarlar, pompanız veya CGM ile kullanım için üretici tarafından onaylanmalıdır. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. Yanlış dozda insülin çok tehlikelidir. Test edilmemiş veya modifiye edilmiş aksesuarlar kullanarak hayatınız ile oynamayın.

Son olarak, SGLT-2 inhibitörlerini (gliflozinler) kan şekeri düzeylerini inanılmaz derecede düşürdükleri için bu programla beraber bu ilaçları kullanmamalısınız.  Kan Şekerini artırmak için bazal oranları düşüren bir sistemle kombinasyon tehlikelidir. Çünkü gliflozin nedeniyle Kan Şekerindeki bu artış gerçekleşmeyebilir ve tehlikeli bir insülin eksikliği durumu meydana gelerek ketoasidoza sebep olabilir.
</code></pre>

<h2 spaces-before="0">
  Gerekli Modüller
</h2>

<h3 spaces-before="0">
  Diyabet tedaviniz için iyi bir kişisel dozaj algoritması
</h3>

<p spaces-before="0">
  Bu yaratılacak veya satın alınacak bir şey olmasa da, muhtemelen en hafife alınan ama en gerekli olan 'modül' budur. Bir algoritmanın diyabetinizi yönetmesine yardımcı olmasına izin verdiğinizde, ciddi hatalar yapmamak için doğru ayarları bilmesi gerekir. Hala diğer modülleri kaçırıyor olsanız bile mevcut 'profilinizi' diyabet ekibinizle birlikte gözden geçirebilir ve uyarlayabilirsiniz. Çoğu looper, gün boyunca hormonal insülin duyarlılığına dayanan sirkadiyen (günlük) Bazal Oran, İDF ve Karbonhidrat Oranı kullanır.
</p>

<p spaces-before="0">
  Profil şunları içerir
</p>

<ul>
  <li>
    BO (Bazal oranları)
  </li>
  <li>
    İDF (insülin duyarlılık faktörü) insülin başına düşen kan şekeri biriminizdir
  </li>
  <li>
    KO (Karbonhidrat Oranı) bir ünite insülin başına düşen gram karbonhidrattır
  </li>
  <li>
    İES (insülin etki süresi).
  </li>
</ul>

<p spaces-before="0">
  (module-no-use-of-sglt-2-inhibitors)=
</p>
<h3 spaces-before="0">
  SGLT-2 inhibitörlerini kullanamazsınız
</h3>

<p spaces-before="0">
  Gliflozinler olarak da adlandırılan SGLT-2 inhibitörleri, böbrekte glikozun yeniden emilimini engeller. Kan şekeri seviyelerini hesaplanamayacak şekilde düşürdüklerinden, AndroidAPS gibi bir kapalı döngü sistemi kullanırken onları ALMAMALISINIZ! Ketoasidoz veya hipoglisemi için büyük bir risk olurdu! Bu ilacın kan şekerini yükseltmek için bazal oranları düşüren bir sistemle kombinasyonu özellikle tehlikelidir çünkü gliflozin nedeniyle kan şekerinde bu artış olmayabilir ve tehlikeli bir insülin eksikliği durumu meydana gelebilir.
</p>

<p spaces-before="0">
  (module-phone)=
</p>
<h3 spaces-before="0">
  Telefon
</h3>

<p spaces-before="0">
  AndroidAPS'nin mevcut sürümü, Google Android 8.0 veya üzeri bir Android akıllı telefon gerektirir. Bu nedenle, yeni bir telefon düşünüyorsanız, minimum Android 8.1 önerilir, ancak optimal olarak Android 9 veya 10'u seçin. Kullanıcıların, güvenlik nedeniyle AndroidAPS yapılarını güncel tutmaları şiddetle tavsiye edilir, ancak minimum Android 8.0 sürümüne sahip bir cihazı olmayan kullanıcılar için, daha eski Android sürümleri için uygun olan AndroidAPS sürüm 2.6.1.4, <a href="https://github.com/miloskozak/androidaps">eski depo.</a>
</p>

<p spaces-before="0">
  Kullanıcılar bir <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">test edilmiş telefonlar ve saatler listesi</a> oluşturuyor
</p>

<p spaces-before="0">
  Tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">formu</a> doldurun.
</p>

<p spaces-before="0">
  E-tabloyla ilgili herhangi bir sorun olursa lütfen <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a> adresine bir e-posta gönderin, hala test edilmesi gereken telefon/saat modeli bağışları için lütfen <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a> adresine bir e-posta gönderin.
</p>

<h3 spaces-before="0">
  İnsülin pompası
</h3>

<p spaces-before="0">
  AndroidAPS <strong x-id="1">şu an için</strong> şu pompalarla çalışır;
</p>

<ul>
  <li>
    <a href="../Configuration/Accu-Chek-Combo-Pump.md">Accu-Chek Combo</a> (ek olarak: telefonunuzda Ruffy uygulaması, LineageOS veya Android 8.1 yüklü olması gerekir)
  </li>
  <li>
    <a href="../Configuration/Accu-Chek-Insight-Pump.md">Accu-Chek Insight</a>
  </li>
  <li>
    <a href="../Configuration/DanaR-Insulin-Pump.md">DanaR</a>
  </li>
  <li>
    <a href="../Configuration/DanaRS-Insulin-Pump.md">Dana-i/RS</a>
  </li>
  <li>
    2.4 sürümünden <a href="../Configuration/MedtronicPump.md">eski bazı Medtronic pompaları</a> (<a href="module-additional-communication-device">ek iletişim cihazı</a> gerekli)
  </li>
  <li>
    <a href="../Configuration/OmnipodEros.md">Omnipod Eros</a> (<a href="module-additional-communication-device">ek iletişim cihazı</a> gerekli)
  </li>
  <li>
    <a href="../Configuration/OmnipodDASH.md">Omnipod DASH</a>
  </li>
</ul>

<p spaces-before="0">
  Ek bir iletişim cihazından bahsedilmiyorsa, insülin pompası ve AndroidAPS arasındaki iletişim, iletişim protokolünü çevirmek için ek bir iletişim cihazına ihtiyaç duymadan Android'in entegre bluetooth yığınına dayanır.
</p>

<p spaces-before="0">
  AndroidAPS ile çalışma potansiyeline sahip olabilecek <strong x-id="1">diğer pompalar</strong>, <a href="../Getting-Started/Future-possible-Pump-Drivers.md">Gelecekteki (olası) Pompalar</a> sayfasında listelenmiştir.
</p>

<p spaces-before="0">
  (module-additional-communication-device)=
</p>
<h4 spaces-before="0">
  Ek iletişim cihazı
</h4>

<p spaces-before="0">
  Eski medtronic pompaları için, radyo sinyalini pompadan bluetooth'a "çevirmek" için ek bir iletişim cihazı (telefonunuzun yanı sıra) gereklidir. Pompanıza bağlı olarak doğru sürümü seçtiğinizden emin olun.
</p>

<ul>
  <li>
    {{ OrangeLink }}  <a href="https://getrileylink.org/product/orangelink">OrangeLink Websitesi</a>
  </li>
  <li>
    {{ RileyLink }} <a href="https://getrileylink.org/product/rileylink433">433MHz RileyLink</a>
  </li>
  <li>
    {{ EmaLink }}  <a href="https://github.com/sks01/EmaLink">Emalink Websitesi</a> - <a href="mailto:getemalink@gmail.com">İletişim Bilgileri</a>
  </li>
  <li>
    {{ DiaLink }}  DiaLink - <a href="mailto:Boshetyn@ukr.net">İletişim bilgileri</a>
  </li>
  <li>
    {{ LoopLink }}  <a href="https://www.getlooplink.org/">LoopLink Websitesi</a> - <a href="https://jameswedding.substack.com/">İletişim Bilgileri</a> - Test edilmedi
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">Peki AndroidAPS ile döngü için en iyi pompa hangisi?</strong>
</p>

<p spaces-before="0">
  Combo, Insight ve eski Medtronic pompaları, sağlam pompalardır ve döngüye alınabilir. Combo, standart bir luer kilidine sahip olduğundan, aralarından seçim yapabileceğiniz daha birçok infüzyon seti tipinin avantajına sahiptir. Ve pili herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan ödünç alabilirsiniz ;-).
</p>

<p spaces-before="0">
  Bununla birlikte, tercih edilen pompa olarak DanaR/RS ve Dana-i'nin Combo'ya karşı avantajları şunlardır:
</p>

<ul>
  <li>
    Dana pompaları, Android >= 5.1 sürümüne sahip hemen hemen her telefona flash lineage gerekmeden bağlanır. Telefonunuz bozulursa, genellikle Dana pompalarıyla çalışan herhangi bir telefonu kolayca hızlı bir şekilde değiştirebilirsiniz... Bu Combo ile o kadar kolay değil. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)
  </li>
  <li>
    Dana-i/RS ile ilk eşleştirme daha kolaydır. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.
  </li>
  <li>
    Şimdiye kadar Combo, ekran ayrıştırma ile çalışıyor. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Yine de bağlantınız uzun zaman alabilir, bu nedenle BT bağlantısının kopabileceği yerlerde bağlantı için daha fazla zamana ihtiyaç var, bu da bolus yaparken veya yemek yerken telefonunuzdan uzaklaşırsanız o kadar kolay değil.
  </li>
  <li>
    Combo, GBO'larin sonunda titrer, DanaR, SMB'de titrer (veya bip sesi çıkarır). Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir.  Dana-i/RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.
  </li>
  <li>
    Dana-i/RS'deki geçmişi birkaç saniyede karbonhidratla okumak, çevrimdışıyken telefonları kolayca değiştirmeyi ve bazı CGM değerleri girer girmez döngüye devam etmeyi mümkün kılar.
  </li>
  <li>
    AndroidAPS'nin konuşabileceği tüm pompalar iletim sırasında su geçirmezdir. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir".
  </li>
</ul>

<h3 spaces-before="0">
  KŞ kaynağı
</h3>

<p spaces-before="0">
  Bu, AndroidAPS ile uyumlu tüm CGM'lere/FGM'lere kısa bir genel bakıştır. Daha fazla ayrıntı için <a href="../Configuration/BG-Source.md">buraya</a> bakın. Kısa bir ipucu: glikoz verilerinizi xDrip+ uygulamasında veya Nightscout web sitesinde görüntüleyebiliyorsanız, AAPS'de KŞ kaynağı olarak xDrip+'ı (veya web bağlantılı Nightscout'u) seçebilirsiniz.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA, 3.0 sürümünden itibaren önerilir (ayrıntılar için <a href="Releasenotes-important-hints-3-0-0">sürüm notlarına</a> bakın). xDrip+ en az 2022.01.14 veya daha yeni sürüm olmalıdır
  </li>
  <li>
    <a href="../Hardware/DexcomG5.md">Dexcom G5</a>: xDrip+ uygulamasıyla veya yamalı Dexcom uygulamasıyla çalışır
  </li>
  <li>
    <a href="../Hardware/DexcomG4.md">Dexcom G4</a>: Bu sensörler oldukça eskidir, ancak bunların nasıl kullanılacağına ilişkin talimatları xDrip+ uygulamasıyla bulabilirsiniz
  </li>
  <li>
    <a href="../Hardware/Libre2.md">Libre 2</a>: xDrip+ ile çalışır (verici gerekmez), ancak kendi yamalı uygulamanızı oluşturmanız gerekir.
  </li>
  <li>
    <a href="../Hardware/Libre1.md">Libre 1</a>: Bunun için (inşa et veya satın al) Bluecon veya MiaoMiao gibi bir vericiye ve xDrip+ uygulamasına ihtiyacınız var
  </li>
  <li>
    <a href="../Hardware/Eversense.md">Eversense</a>: Şimdiye kadar yalnızca ESEL uygulaması ve yamalı bir Eversense-Uygulaması ile birlikte çalışır (Dana RS ve LineageOS ile çalışmaz ancak DanaRS ve Android veya Combo ve Lineage OS ile çalışır)
  </li>
  <li>
    <a href="../Hardware/MM640g.md">Enlite (MM640G/MM630G)</a>: pek çok ekstra öğe gerekir ve oldukça karmaşıktır
  </li>
</ul>

<h3 spaces-before="0">
  Nightscout
</h3>

<p spaces-before="0">
  Nightscout, CGM verilerinizi ve AndroidAPS verilerinizi kaydedip görüntüleyebilen ve raporlar oluşturan açık kaynaklı bir web uygulamasıdır. <a href="http://nightscout.github.io/">Nightscout projesinin web sitesinde</a> daha fazla bilgi bulabilirsiniz. Kendi <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout web sitenizi</a> oluşturabilir, <a href="https://ns.10be.de/en/index.html">zehn.be</a>'deki yarı otomatik Nightscout kurulumunu kullanabilir veya kendi sunucunuzda barındırabilirsiniz. (bu, BT uzmanları içindir)
</p>

<p spaces-before="0">
  Nightscout diğer modüllerden bağımsızdır. Görev 1'i yerine getirmek için Nightscout'a ihtiyacınız olacak.
</p>

<p spaces-before="0">
  Nightscout'un AndroidAPS ile kullanım için nasıl yapılandırılacağına ilişkin ek bilgiler <a href="../Installing-AndroidAPS/Nightscout.md">burada</a> bulunabilir.
</p>

<h3 spaces-before="0">
  AAPS-.apk dosyası
</h3>

<p spaces-before="0">
  Sistemin temel bileşeni. Uygulamayı yüklemeden önce, apk dosyasını (bir Android Uygulaması için dosya adı uzantısıdır) oluşturmanız gerekir. Talimatları  <a href="../Installing-AndroidAPS/Building-APK.md">burada</a> bulabilirsiniz.
</p>

<h2 spaces-before="0">
  Opsiyonel Modüller
</h2>

<h3 spaces-before="0">
  Akıllı saat
</h3>

<p spaces-before="0">
  Android Wear 1.x ve sonraki sürümlere sahip herhangi bir akıllı saati seçebilirsiniz. Çoğu looper, telefon kapsama alanı dışındayken bile Dexcom G5/G5'ten okuma alabilen tek saat olduğu için Sony Smartwatch 3 (SWR50) takar. Diğer bazı saatler de bağımsız bir alıcı olarak çalışacak şekilde yamalanabilir (daha fazla ayrıntı için <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">bu belgelere</a> bakın).
</p>

<p spaces-before="0">
  Kullanıcılar bir <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">test edilmiş telefonlar ve saatler listesi</a> oluşturuyor. AndroidAPS ile kullanım için <a href="../Configuration/Watchfaces.md">burada</a> bulabileceğiniz farklı saat arayüzleri vardır.
</p>

<p spaces-before="0">
  Tabloda listelenmemiş bir telefonu veya saati kaydetmek için lütfen <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">formu</a> doldurun.
</p>

<p spaces-before="0">
  E-tabloyla ilgili herhangi bir sorun olursa lütfen <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a> adresine bir e-posta gönderin, hala test edilmesi gereken telefon/saat modeli bağışları için lütfen <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a> adresine bir e-posta gönderin.
</p>

<h3 spaces-before="0">
  xDrip+
</h3>

<p spaces-before="0">
  KŞ Kaynağı olarak xDrip+ Uygulamasına ihtiyacınız olmasa bile, onu alarmlar veya iyi bir kan şekeri ekranı için kullanabilirsiniz. İstediğiniz kadar alarmınız olabilir, alarmın ne zaman aktif olacağını belirleyebilir, sessiz modu geçersiz kılabilirsiniz vb. Bazı xDrip+ bilgileri <a href="../Configuration/xdrip.md">burada</a> bulunabilir. İlerlemesi oldukça hızlı olduğu için bu uygulamanın belgelerinin her zaman güncel olmadığını lütfen unutmayın.
</p>

<h2 spaces-before="0">
  Modülleri beklerken yapılması gerekenler
</h2>

<p spaces-before="0">
  Kapalı döngüye geçmek için için tüm modülleri elde etmek bazen biraz zaman alabilir. Ama merak etmeyin, beklerken yapabileceğiniz çok şey var. Bazal oranları (BO), insülin-karbonhidrat oranını (IC), insülin-duyarlılık-faktörünü (İDF) vb. (uygun olduğunda) kontrol etmek GEREKLİDİR. Ve bu sırada açık döngü ile sistemi test etme ve AndroidAPS'i tanımak için bir fırsat olabilir. Bu modu kullanarak (açık döngü) AndroidAPS, manuel olarak uygulayabileceğiniz tedavi önerileri verir.
</p>

<p spaces-before="0">
  Buradaki dokümanları okumaya devam edebilir, çevrimiçi veya çevrimdışı olarak diğer döngü kullanıcılarıyla iletişime geçebilir, <a href="../Where-To-Go-For-Help/Background-reading.md">bu linkteki</a> dokümanları veya diğer döngü kullanıcılarının yazdıklarını okuyabilirsiniz. (Yazılanlara rağmen dikkatli olmalısınız, her şey doğru olmayabilir veya sizin konfigürasyonunuz için uygun değildir).
</p>

<p spaces-before="0">
  <strong x-id="1">Bitti mi?</strong> AAPS bileşenleriniz tamamlandıysa (tebrikler!) En azından açık döngü modunda başlayabilirsiniz. Her yeni görev ve <a href="index-component-setup">donanım</a> kurulumundan önce ilk olarak <a href="../Usage/Objectives.md">Görev açıklamaları</a> bölümünü okumalısınız.
</p>

<p spaces-before="0">
  % Daha fazla konumlandırma esnekliği ile görüntülere ada göre referans vermek için görüntü takma adı kaynağı
</p>

<p spaces-before="0">
  % Donanım ve Yazılım Gereksinimleri
</p>
