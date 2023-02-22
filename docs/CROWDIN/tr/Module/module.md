

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

# Component Overview

AndroidAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](index-component-setup), too.

```{image} ../images/modules.png
:alt: Components overview
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
    BR (Basal rates)
  </li>
  <li>
    ISF (insulin sensitivity factor) is your blood glucose unit per one unit insulin
  </li>
  <li>
    CR (carb ratio) is grams carbohydrate per one unit insulin
  </li>
  <li>
    DIA (duration of insulin acting).
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
  AndroidAPS'nin mevcut sürümü, Google Android 8.0 veya üzeri bir Android akıllı telefon gerektirir. Bu nedenle, yeni bir telefon düşünüyorsanız, minimum Android 8.1 önerilir, ancak optimal olarak Android 9 veya 10'u seçin. Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the <a href="https://github.com/miloskozak/androidaps">old repository.</a>
</p>

<p spaces-before="0">
  Users are creating a <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">list of tested phones and watches</a>
</p>

<p spaces-before="0">
  To record a phone or watch that isn't already listed in the spreadsheet then please fill in the <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">form</a>.
</p>

<p spaces-before="0">
  Any problems with the spreadsheet please send an email to <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, any donations of phone/watch models that still need testing please send an email to <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  İnsülin pompası
</h3>

<p spaces-before="0">
  AndroidAPS <strong x-id="1">currently</strong> works with
</p>

<ul>
  <li>
    <a href="../Configuration/Accu-Chek-Combo-Pump.md">Accu-Chek Combo</a> (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
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
    <a href="../Configuration/MedtronicPump.md">some old Medtronic pumps</a> from upcoming version 2.4 (<a href="module-additional-communication-device">additional communication device</a> needed)
  </li>
  <li>
    <a href="../Configuration/OmnipodEros.md">Omnipod Eros</a> (<a href="module-additional-communication-device">additional communication device</a> needed)
  </li>
  <li>
    <a href="../Configuration/OmnipodDASH.md">Omnipod DASH</a>
  </li>
</ul>

<p spaces-before="0">
  Ek bir iletişim cihazından bahsedilmiyorsa, insülin pompası ve AndroidAPS arasındaki iletişim, iletişim protokolünü çevirmek için ek bir iletişim cihazına ihtiyaç duymadan Android'in entegre bluetooth yığınına dayanır.
</p>

<p spaces-before="0">
  <strong x-id="1">Other pumps</strong> that may have the potential to work with AndroidAPS are listed on the <a href="../Getting-Started/Future-possible-Pump-Drivers.md">Future (possible) Pumps</a> page.
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
    {{ OrangeLink }}  <a href="https://getrileylink.org/product/orangelink">OrangeLink Website</a>
  </li>
  <li>
    {{ RileyLink }} <a href="https://getrileylink.org/product/rileylink433">433MHz RileyLink</a>
  </li>
  <li>
    {{ EmaLink }}  <a href="https://github.com/sks01/EmaLink">Emalink Website</a> - <a href="mailto:getemalink@gmail.com">Contact Info</a>
  </li>
  <li>
    {{ DiaLink }}  DiaLink - <a href="mailto:Boshetyn@ukr.net">Contact Info</a>
  </li>
  <li>
    {{ LoopLink }}  <a href="https://www.getlooplink.org/">LoopLink Website</a> - <a href="https://jameswedding.substack.com/">Contact Info</a> - Untested
  </li>
</ul>

<p spaces-before="0">
  <strong x-id="1">So what's the best pump for looping with AndroidAPS?</strong>
</p>

<p spaces-before="0">
  Combo, Insight ve eski Medtronic pompaları, sağlam pompalardır ve döngüye alınabilir. Combo, standart bir luer kilidine sahip olduğundan, aralarından seçim yapabileceğiniz daha birçok infüzyon seti tipinin avantajına sahiptir. Ve pili herhangi bir benzin istasyonundan, 24 saat açık marketten satın alabileceğiniz varsayılan bir pildir ve gerçekten ihtiyacınız varsa, otel odasındaki uzaktan kumandadan ödünç alabilirsiniz ;-).
</p>

<p spaces-before="0">
  The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:
</p>

<ul>
  <li>
    The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (Bu, Android 8.1 daha popüler hale geldiğinde değişebilir)
  </li>
  <li>
    Initial pairing is simpler with the Dana-i/RS. Ancak bunu genellikle yalnızca bir kez yaparsınız, bu nedenle yalnızca yeni bir özelliği farklı pompalarla test etmek istediğinizde etki eder.
  </li>
  <li>
    So far the Combo works with screen parsing. Genel olarak harika çalışıyor ama yavaş. Döngü için bu çok önemli değil çünkü her şey arka planda çalışıyor. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
  </li>
  <li>
    The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. Gece saatlerinde GBO'ları SMB'lerden daha fazla kullanmanız muhtemeldir.  Dana-i/RS, ne bip sesi çıkaracak ne de titreyecek şekilde yapılandırılabilir.
  </li>
  <li>
    Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
  </li>
  <li>
    All pumps AndroidAPS can talk with are waterproof on delivery. Sızdırmaz pil bölmesi ve rezervuar doldurma sistemi sayesinde yalnızca Dana pompaları "garanti kapsamında su geçirmezdir".
  </li>
</ul>

<h3 spaces-before="0">
  KŞ kaynağı
</h3>

<p spaces-before="0">
  Bu, AndroidAPS ile uyumlu tüm CGM'lere/FGM'lere kısa bir genel bakıştır. For further details, look <a href="../Configuration/BG-Source.md">here</a>. Kısa bir ipucu: glikoz verilerinizi xDrip+ uygulamasında veya Nightscout web sitesinde görüntüleyebiliyorsanız, AAPS'de KŞ kaynağı olarak xDrip+'ı (veya web bağlantılı Nightscout'u) seçebilirsiniz.
</p>

<ul>
  <li>
    <a href="../Hardware/DexcomG6.md">Dexcom G6</a>: BOYDA is recommended as of version 3.0 (see <a href="Releasenotes-important-hints-3-0-0">release notes</a> for details). xDrip+ en az 2022.01.14 veya daha yeni sürüm olmalıdır
  </li>
  <li>
    <a href="../Hardware/DexcomG5.md">Dexcom G5</a>: It works with xDrip+ app or patched Dexcom app
  </li>
  <li>
    <a href="../Hardware/DexcomG4.md">Dexcom G4</a>: These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
  </li>
  <li>
    <a href="../Hardware/Libre2.md">Libre 2</a>: It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
  </li>
  <li>
    <a href="../Hardware/Libre1.md">Libre 1</a>: You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
  </li>
  <li>
    <a href="../Hardware/Eversense.md">Eversense</a>: It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
  </li>
  <li>
    <a href="../Hardware/MM640g.md">Enlite (MM640G/MM630G)</a>: quite complicated with a lot of extra stuff
  </li>
</ul>

<h3 spaces-before="0">
  Nightscout
</h3>

<p spaces-before="0">
  Nightscout, CGM verilerinizi ve AndroidAPS verilerinizi kaydedip görüntüleyebilen ve raporlar oluşturan açık kaynaklı bir web uygulamasıdır. You can find more information on the <a href="http://nightscout.github.io/">website of the Nightscout project</a>. You can create your own <a href="https://nightscout.github.io/nightscout/new_user/">Nightscout website</a>, use the semi-automated Nightscout setup on <a href="https://ns.10be.de/en/index.html">zehn.be</a> or host it on your own server (this is for IT experts).
</p>

<p spaces-before="0">
  Nightscout diğer modüllerden bağımsızdır. Görev 1'i yerine getirmek için Nightscout'a ihtiyacınız olacak.
</p>

<p spaces-before="0">
  Additional information on how to configure Nightscout for use with AndroidAPS can be found <a href="../Installing-AndroidAPS/Nightscout.md">here</a>.
</p>

<h3 spaces-before="0">
  AAPS-.apk dosyası
</h3>

<p spaces-before="0">
  Sistemin temel bileşeni. Uygulamayı yüklemeden önce, apk dosyasını (bir Android Uygulaması için dosya adı uzantısıdır) oluşturmanız gerekir. Instructions are  <a href="../Installing-AndroidAPS/Building-APK.md">here</a>.
</p>

<h2 spaces-before="0">
  Opsiyonel Modüller
</h2>

<h3 spaces-before="0">
  Akıllı saat
</h3>

<p spaces-before="0">
  Android Wear 1.x ve sonraki sürümlere sahip herhangi bir akıllı saati seçebilirsiniz. Çoğu looper, telefon kapsama alanı dışındayken bile Dexcom G5/G5'ten okuma alabilen tek saat olduğu için Sony Smartwatch 3 (SWR50) takar. Some other watches can be patched to work as a standalone receiver as well (see <a href="https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5">this documentation</a> for more details).
</p>

<p spaces-before="0">
  Users are creating a <a href="https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing">list of tested phones and watches</a>. There are different watchfaces for use with AndroidAPS, which you can find <a href="../Configuration/Watchfaces.md">here</a>.
</p>

<p spaces-before="0">
  To record a phone or watch that isn't already listed in the spreadsheet then please fill in the <a href="https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform">form</a>.
</p>

<p spaces-before="0">
  Any problems with the spreadsheet please send an email to <a href="mailto:hardware@androidaps.org">hardware@androidaps.org</a>, any donations of phone/watch models that still need testing please send an email to <a href="mailto:hardware@androidaps.org">donations@androidaps.org</a>.
</p>

<h3 spaces-before="0">
  xDrip+
</h3>

<p spaces-before="0">
  Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. İstediğiniz kadar alarmınız olabilir, alarmın ne zaman aktif olacağını belirleyebilir, sessiz modu geçersiz kılabilirsiniz vb. Bazı xDrip+ bilgileri <a href="../Configuration/xdrip.md">burada</a> bulunabilir. İlerlemesi oldukça hızlı olduğu için bu uygulamanın belgelerinin her zaman güncel olmadığını lütfen unutmayın.
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
  % Hardware and Software Requirements
</p>
