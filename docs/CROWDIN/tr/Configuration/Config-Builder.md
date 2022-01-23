# Konfigürasyon ayarları

Ayarlarınıza bağlı olarak, ekranın üst kısmındaki bir sekmeden veya hamburger menüsünden Konfigürasyon ayarları'nı açabilirsiniz.

![Konfigürasyon ayarlarını açmak](../images/ConfBuild_Open.png)

Konfigürasyon ayarları (KONF), modüler özellikleri açıp kapattığınız sekmedir. Sol taraftaki kutular (A) hangisini kullanacağınızı seçmenize izin verir, sağ taraftaki kutular (C) bunları AndroidAPS'de bir sekme (E) olarak görmenizi sağlar. Sağ kutu aktif değilse ekranın sol üst köşesindeki hamburger menüsünü (D) kullanarak fonksiyona ulaşabilirsiniz.

Modül içinde ek ayarlar mevcut olduğunda, sizi tercihler içindeki belirli ayarlara götürecek olan dişli çarka (B) tıklayabilirsiniz.

**İlk yapılandırma:** AAPS 2.0'dan bu yana bir Kurulum sihirbazı, AndroidAPS'yi kurma sürecinde size rehberlik eder. Ekranın sağ üst tarafındaki 3 nokta menüsüne basın (F) ve kullanmak için 'Kurulum Sihirbazı'nı seçin.

![Konfigürasyon ayarları kutusu ve dişli çark](../images/ConfBuild_ConfigBuilder.png)

## Sekme veya hamburger menüsü

Göz simgesinin altındaki onay kutusu ile ilgili program bölümünün nasıl açılacağına karar verebilirsiniz.

![Sekme veya hamburger menüsü](../images/ConfBuild_TabOrHH.png)

## Profil

Kullanmak istediğiniz bazal profili seçin. Daha fazla kurulum bilgisi için [Profiller](../Usage/Profiles.md) sayfasına bakın.

### Yerel profil (önerilir)

Yerel profil, telefona manuel olarak girilen bazal profili kullanır. Seçilir seçilmez, gerekirse pompadan okunan profil verilerini değiştirebileceğiniz AAPS'de yeni bir sekme görünür. Bir sonraki profil değişimi ile pompadaki profil1'e yazılırlar. İnternet bağlantısı gerektirmediği için bu profil önerilir.

Yerel profilleriniz, [dışa aktarılan ayarların](../Usage/ExportImportSettings.rst) bir parçasıdır. Bu yüzden güvenli bir yerde yedek aldığınızdan emin olun.

![Yerel Profil ayarları](../images/LocalProfile_Settings.png)

Butonlar:

* yeşil artı: profil ekleme
* kırmızı X: profil silme
* mavi ok: profil kopyalama

Profilinizde herhangi bir değişiklik yaparsanız, doğru profili düzenlediğinizden emin olun. Profil sekmesinde, he zaman kullanılan gerçek profil gösterilmez - ör. ana ekrandaki profil sekmesini kullanarak bir profil geçişi yaptıysanız, bunlar arasında bağlantı olmadığı için sekmede gösterilen profil, gerçek profilinizden farklı olabilir.

#### Klon profil değişikliği

Bir profil değiştir'me ile kolayca yeni bir yerel profil oluşturabilirsiniz. Bu durumda, yeni yerel profile zaman kayması ve yüzdesel değişim uygulanabilecektir.

1. Tedaviler sekmesine gidin.
2. ProfilAnahtarını seçin.
3. "Klonla" ya basın.
4. Yeni yerel profili Yerel Profil (LP) sekmesinden veya hamburger menüsünden düzenleyebilirsiniz.

![Klon profil değişikliği](../images/LocalProfile_ClonePS.png)

Nightscout profilinden yerel profile geçmek istiyorsanız, NS profilinizde bir profil geçişi yapın ve profil anahtarını yukarıda açıklandığı gibi klonlayın.

#### Yerel profilleri Nightscout'a yükleyin

Yerel profiller ayrıca Nightscout'a yüklenebilir. Ayarlar [NSClient tercihlerinde](../Configuration/Preferences#nsclient) bulunabilir.

![Yerel profili NS'a yükleyin](../images/LocalProfile_UploadNS2.png)

Avantajı:

* profil ayarlarını değiştirmek için internet bağlantısı gerekmez
* profil değişiklikleri doğrudan telefondan yapılabilir
* profil değiştir üzerinden yeni profil oluşturulabilir
* yerel profiller Nightscout'a yüklenebilir

Dezavantajı:

* yok

### Profil yardımcısı

Profil yardımcısı iki işlev sunar:

1. Çocuklar için bir profil bulmak
2. Yeni bir profili klonlamak için iki profili veya profil değişimlerini karşılaştırmak

Ayrıntılar, [profil yardımcısı sayfasında](../Configuration/profilehelper.rst) açıklanmıştır.

### Nightscout Profili

NS Profili, Nightscout sitenize kaydettiğiniz profilleri kullanır (https://[yournightscoutsiteaddress]/profile). Bu profillerden hangisinin etkin olduğunu değiştirmek için [Profil Değiştirme](../Usage/Profiles.md)'yi kullanabilirsiniz. Bu, AndroidAPS arızası durumunda profili pompaya yazar. Bu, Nightscout'ta kolayca birden çok profil oluşturmanıza olanak tanır (ör.. iş, ev, spor, tatil vb.) "Kaydet"e tıkladıktan kısa bir süre sonra, akıllı telefonunuz çevrimiçiyse bunlar AAPS'e aktarılacaktır. İnternet bağlantısı veya Nightscout bağlantısı olmasa bile, Nightscout profilleri senkronize edildikten sonra AAPS'de kullanılabilir.

Nightscout'tan bir profili etkinleştirmek için [profil değiştirme](../Getting-Started/Screenshots.md#current-profile) yapın. AAPS, profil değişikliğinden sonra seçilen profili pompaya yazar, böylece acil bir durumda AAPS olmadan kullanılabilir ve çalışmaya devam eder.

Avantajı:

* çoklu profil
* PC veya tablet üzerinden düzenlemesi kolay

Dezavantajı:

* profil ayarlarında yerel değişiklik yapamazsınız
* profil değiştirme doğrudan telefonda yapılamaz.

## İnsülin

![İnsülin Tipi](../images/ConfBuild_Insulin.png)

* Kullanmakta olduğunuz insülin eğrisinin türünü seçin.
* 'Hızlı Etkili Oref', Ultra Hızlı Oref', 'Lyumjev' ve 'Serbest Tepe Oref' seçeneklerinin tümü üstel bir şekle sahiptir. Daha fazla bilgi [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) sayfasında listelenmiştir. 
* Eğriler, İES'e ve zirveye ulaşma süresine bağlı olarak değişecektir.
    
    * MOR çizgi, zamanla bozulduğu için enjekte edildikten sonra ne kadar **insülin kaldığını** gösterir.
    * MAVİ çizgi, insülinin **ne kadar aktif** olduğunu gösterir.

### İES (DIA) İnsülin etki süresi

* İES her kişi için aynı değildir. Bu yüzden kendiniz test etmelisiniz. 
* Ancak her zaman en az 5 saat olmalıdır.
* Fiasp gibi ultra hızlı insülin kullanan birçok insan için, kural olarak 0.0xx ünite mevcut olsa bile, 3-4 saat sonra pratikte gözle görülür bir etkisi yoktur. Bu kalan miktar, örneğin spor sırasında hala görülebilir. Bu nedenle, AndroidAPS, İES olarak minimum 5saat kullanır.
* Bununla ilgili daha fazla bilgiyi [bu sayfanın](../Getting-Started/Screenshots#insulin-profile) İnsülin Profili bölümünde okuyabilirsiniz. 

### İnsülin tipi farklılıkları

* 'Hızlı Etkili', 'Ultra Hızlı' ve 'Lyumjev' için İES, kendiniz ayarlayabileceğiniz tek değişkendir ve zirve zamanı sabittir. 
* Free-Peak (serbest-zirve), hem İES'i hem de zirveye ulaşma süresini ayarlamanıza olanak tanır fakat yalnızca bu ayarların etkilerini bilen ileri düzey kullanıcılar tarafından kullanılmalıdır. 
* [İnsülin eğrisi grafiği](../Getting-Started/Screenshots#insulin-profile), farklı eğrileri anlamanıza yardımcı olur. 
* Yukarıda bir sekme olarak görüntülemek için onay kutusunu etkinleştirebilirsiniz. Diğer türlü hamburger menüsünde olacaktır.

#### Hızlı Etkili Oref

* Humalog, Novolog ve Novorapid için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 75 dakika sonra (sabit, ayarlanabilir değil)

#### Ultra Hızlı Oref

* FIASP için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 55 dakika sonra (sabit, ayarlanabilir değil)

#### Lyumjev

* Lyumjev için özel insülin profili
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 45 dakika sonra (sabit, ayarlanabilir değil)

#### Serbest Zirve Oref

* Serbest zirve Oref "Free Peak 0ref" profili ile zirve zamanını kendiniz girebilirsiniz.
* Profilde daha yüksek belirtilmemişse, İES otomatik olarak 5 saate ayarlanır.
* Bu etki profili, desteklenmeyen bir insülin veya farklı insülinlerin bir karışımı kullanılıyorsa önerilir.

## BG Source

Kullanmakta olduğunuz kan şekeri kaynağını seçin - daha fazla kurulum bilgisi için [KŞ Kaynağı](BG-Source.rst) sayfasına bakın.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient KŞ
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - Sadece versiyon 4.15.57 ve daha yenisi için desteklenir.
* [Kendi Dexcom Uygulamanı Yap (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) - xDrip alarmlarını kullanmak istiyorsanız 'KŞ verilerini xDrip'e gönder'i seçin.
    
    ![Konfigürasyon ayarları KŞ kaynağı](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* MiaoMiao cihazı için [Tomato Uygulaması](http://tomato.cool/)
* Rastgele KŞ: Rastgele KŞ verisi oluşturur (Yalnızca Demo modu)

## Pompa

Kullanmakta olduğunuz pompayı seçin.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Kore (yerli DanaR pompası için)
* Dana Rv2 (resmi olmayan ürün yazılımı yükseltmesine sahip DanaR pompası)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (ruffy kurulumu gerektirir)
* [Medtronic](MedtronicPump.md)
* MDI (Çoklu Günlük Enjeksiyon tedaviniz için AAPS önerileri alın)
* Sanal pompa (henüz sürücüsü olmayan pompa için açık döngü - yalnızca AAPS önerileri)

Dana pompalarında gerekirse BT watchdog'u etkinleştirmek için **Gelişmiş ayarlar**'ı kullanın. Bu seçenek, pompaya bağlantı yoksa bluetooth'u bir saniyeliğine kapatır. Böylelikle bluetooth yığınının donduğu bazı telefonlarda yardımcı olabilir.

[Dana RS pompasının şifresi](../Configuration/DanaRS-Insulin-Pump.md) doğru girilmelidir. Şifre önceki sürümlerde kontrol edilmiyordu.

## Duyarlılık algılaması

Duyarlılık algılama türünü seçin. Farklı tasarımlarla ilgili daha fazla ayrıntı için lütfen [burayı okuyun](../Configuration/Sensitivity-detection-and-COB.md). Bu, hareket halindeyken geçmiş verileri analiz edecek ve insüline normalden daha duyarlı (veya tersine, daha dirençli) tepki verdiğinizi fark ederse ayarlamalar yapacaktır. Duyarlılık algoritması hakkında daha fazla ayrıntıyı [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html)nda bulabilirsiniz.

Grafiklerde duyarlılık işaretlenerek beyaz çizgide duyarlılığınızı ana ekranda görüntüleyebilirsiniz. Duyarlılık Tespitinin/[Otoduyarlılık](../Usage/Open-APS-features#autosens)'ın iletilen insülin miktarını otomatik olarak ayarlamasına izin vermek için [8.Görev](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)'de olmanız gerektiğini unutmayın. Bu hedefe ulaşmadan önce, Otoduyarlılık yüzdesi veya grafiğinizdeki çizgi yalnızca bilgi amaçlı görüntülenir.

### Emilim ayarları

Oref1 ile SMB kullanıyorsanız **min_5m_carbimpact**'i 8 olarak değiştirmelisiniz. Bu değer yalnızca CGM okumalarındaki boşluklar sırasında veya fiziksel aktivite kan şekeri artışını tükettiğinde kullanılır. Bunun dışında AAPS tarafından aktif karbonhidrat bozulur. [Karbonhidrat emiliminin](../Usage/COB-calculation.rst) kan reaksiyonlarınıza göre dinamik olarak hesaplanamadığı zamanlarda, karbonhidratlarınıza varsayılan bir bozulma ekler. Temel olarak bir ön güvenliktir.

## APS (YPS)

Terapi ayarlamaları için istenen APS algoritmasını seçin. OpenAPS(OAPS) sekmesinde seçilen algoritmanın aktif detayını görüntüleyebilirsiniz.

* OpenAPS AMA (gelişmiş yemek yardımı, algoritmanın 2017'deki durumu) Basit bir ifadeyle faydası, yemek bolusu verdikten sonra eğer karbonhidratları doğru bir şekilde girerseniz, sistem daha hızlı bir şekilde kan şekerine yüksek geçici bazal oranları ile müdahale eder.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (süper mikro bolus, ileri düzey kullanıcılar için en yeni algoritma) [10. Görevi bitirmiş olmanız gerektiğini unutmayın.](../Usage/Objectives#objective-10-ebling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) OpenAPS SMB'yi kullanmak için min_5m_carbimpact, Yapılandırma oluşturucu > Duyarlılık algılama > Duyarlılık Oref1 ayarlarında 8 olarak ayarlanmalıdır.

## Döngü

* Açık Döngü, Kapalı Döngü ve Düşük Glikoz Askıya Alma (LGS) arasında geçiş yapın.

![Konfigürasyon ayarları - döngü modu](../images/ConfigBuilder_LoopLGS.png)

### Açık Döngü

* AAPS, mevcut tüm verileri (IOB, COB, KŞ...) sürekli olarak değerlendirir ve gerekirse tedavinizi nasıl ayarlayacağınız konusunda tedavi önerilerinde bulunur. 
* (kapalı döngüde olduğu gibi) Öneriler otomatik olarak yürütülmeyecektir. Uyumlu bir pompa (Dana R/RS veya Accu Chek Combo) kullanıyorsanız, pompaya manuel olarak veya bir düğme kullanılarak girilmelidir. 
* Bu seçenek, AndroidAPS'in nasıl çalıştığını veya desteklenmeyen bir pompa kullanıp kullanmadığınızı öğrenmek içindir.

### Kapalı Döngü

* AAPS, mevcut tüm verileri (IOB, COB, KŞ...) sürekli olarak değerlendirir ve ayarlanan hedef aralığa veya değere ulaşmak için (yani sizin tarafınızdan fazla müdahale olmadan) gerekirse tedaviyi (bolus iletimi, geçici bazal oranı, hipo öncesi insülin durdurma vb.) otomatik olarak ayarlar. 
* Kapalı Döngü, bireysel olarak ayarlayabileceğiniz çok sayıda güvenlik limiti dahilinde çalışır.
* Kapalı Döngü yalnızca [6. Hedef](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)i veya daha üstünü tamamladıysanız mümkündür ve desteklenen bir pompa kullanmanız gerekir.
* Not: Kapalı döngü modunda hedef aralığı yerine tek bir hedef (yani 5,0 - 7,0 mmol veya 90 - 125 mg/dl yerine 5,5 mmol veya 100 mg/dl) önerilir.

### Düşük Glikoz Askıya Alma (LGS)

* maxIOB (max.aktif insülin) sıfıra ayarlıdır.
* Bu, kan şekeri düşüyorsa sizin için bazalı azaltabileceği anlamına gelir.
* Ancak kan şekeri yükseliyorsa, otomatik düzeltme yapılmayacaktır. Bazal oranlarınız, seçtiğiniz profille aynı kalacaktır.
* Yalnızca bazal IOB (aktif insülin) negatifse (önceki Düşük Glikoz Süspansiyonundan), KŞ'ni düşürmek için ek insülin verilecektir.

### Minimum istek değişikliği

* Açık döngü kullanırken, AAPS'in bazal hızı ayarlamanızı önerdiği her seferde bildirim alırsınız. 
* Bildirim sayısını azaltmak için daha geniş bir KŞ hedef aralığı kullanabilir veya minimum istek oranının yüzdesini artırabilirsiniz.
* Bu yüzde, bir bildirimi tetiklemek için gereken göreli değişikliği tanımlar.

## Görevler (öğrenme programı)

AndroidAPS, adım adım gerçekleştirmeniz gereken bir öğrenme programına (görevlere) sahiptir. Bunun amacı, güvenli bir şekilde kapalı döngü sistemi kurmak için size rehberlik etmektir. Her şeyi doğru bir şekilde kurmanızı ve sistemin tam olarak ne yaptığını anlamanızı garanti eder. Sisteme güvenmenizin tek yolu bu.

Düzenli olarak [ayarlarınızı dışa aktarmalısınız](../Usage/ExportImportSettings.rst) (görevlerin ilerlemesi dahil). Akıllı telefonunuzu daha sonra değiştirmeniz durumunda (yeni satın alma, ekran hasarı vb.) bu ayarları kolayca içe aktarabilirsiniz.

Daha fazla bilgi için [Görevler](../Usage/Objectives.rst) sayfasına bakın.

## Tedaviler

Tedaviler (TEDAVİ) sekmesine bakarsanız, nightcout'a yüklenen tedavileri görebilirsiniz. Bir girişi düzenlemek veya silmek isterseniz (örneğin beklediğinizden daha az karbonhidrat yediniz) tedavilerden 'Kaldır'ı seçin ve [ana ekranda karbonhidrat düğmesi](../Getting-Started/Screenshots#carb-correction) aracılığıyla yeni değeri girin. (gerekirse zamanı değiştirin)

## Genel

### Genel Bakış

Döngünüzün mevcut durumu ve en yaygın eylemler için düğmeleri görüntüler (ayrıntılar için [GİRİŞ ekranı bölümüne bakın](../Getting-Started/Screenshots.md)). Ayarlara dişli çark tıklanarak erişilebilir.

#### Ekranı açık tut

'Ekranı açık tut' seçeneği, Android telefonunuzun ekranını her zaman açık tutmaya zorlar. Bu, sunumlar vb. için kullanışlıdır. Ama çok fazla pil tüketir. Bu nedenle, telefonunuzu şarj kablosuna bağlamanız önerilir.

#### Butonlar

Ana ekranda hangi Butonların gösterileceğini tanımlayın.

* Tedaviler
* Hesap makinesi
* İnsülin
* Karbonhidrat
* CGM (xDrip+ programını açar)
* Kalibrasyon

Ayrıca, insülin ve karbonhidrat artışları için kısayollar ayarlayabilir ve notlar alanının tedavi diyaloglarında gösterilip gösterilmeyeceğine karar verebilirsiniz.

#### Hızlı asistan ayarları

Standart bir yemek için giriş ekranında görüntülenecek bir buton oluşturun. (bolus için karbonhidrat hesaplama yöntemi) Sık yediğiniz standart yemekler için kullanın. Farklı öğünler için farklı saatler belirtilirse, günün saatine bağlı olarak ana ekranda her zaman uygun standart yemek butonunu görüntülersiniz.

Not: Belirtilen zaman aralığının dışındaysa veya Hızlı asistan butonunda tanımlanan karbonhidratları karşılamak için yeterli aktif insülininiz varsa buton görünmeyecektir.

![Hızlı asistan butonu](../images/ConfBuild_QuickWizard.png)

#### Varsayılan Geçici Hedefler

Varsayılan geçici hedefleri seçin (süre ve hedef). Ön ayar değerleri şunlardır:

* yakında öğün: hedef 72 mg/dl / 4.0 mmol/l, süre 45 dk
* aktivite: hedef 140 mg/dl / 7.8 mmol/l, süre 90 dk
* hipo: hedef 125 mg/dl / 6.9 mmol/l, süre 45 dk

#### Hazırla/doldur standart insülin miktarları

Kateterinizin (kanülünüzün) uzunluğuna bağlı olarak, doldurma/hazırlama diyalogunda üç düğmenin varsayılan miktarlarını seçin.

#### Görüntüleme aralığı

AndroidAPS ve akıllı saatteki KŞ grafiği görünümü için yüksek ve düşük izleri seçin. Bu yalnızca görselleştirme içindir. KŞ'nizin hedef aralığı değildir. Örnek: 70 - 180 mg/dl veya 3,9 - 10 mmol/l

#### Kısa sekme başlıkları

AndroidAPS'deki sekme başlıklarının uzun (ör. EYLEMLER, YEREL PROFİL, OTOMASYON) veya kısa (ör. EYLEM, YP, OTO) olmasını seçebilirsiniz.

#### Tedavi diyaloglarında not alanını göster

Tedavileri girerken bir not alanı isterseniz bu seçeneği işaretleyin.

#### Durum ışıkları

Kanül yaşı, insülin yaşı, sensör yaşı, pil yaşı, rezervuar seviyesi veya pil seviyesi için genel bakışta [durum ışıklarının](../Configuration/Preferences#status-lights) görünmesini istiyorsanız bu seçeneği işaretleyin. Uyarı seviyesine ulaşıldığında durum ışığının rengi sarıya döner. Kritik seviyeye ulaştığında kırmızı renkte görünecektir.

#### Gelişmiş Ayarlar

**Bolus sihirbazı sonucunun bu kadarını iletin**: SMB kullanırken, birçok kişi ihtiyaç duyulan insülinin %100'ünü yemek bolusu olarak iletmez, sadece bir kısmını (örn. %75) gönderir ve SMB, UAM ile (Bildirilmemiş yemek algılama) gerisini halleder. Bu ayarda, bolus sihirbazının hesaplaması için varsayılan bir yüzde değer seçebilirsiniz. Bu ayar %75 ise ve 10u bolus yapmanız gerekiyorsa, bolus sihirbazı yalnızca 7,5 ünitelik bir öğün bolusu önerecektir.

**Sihirbazda süper bolus işlevini etkinleştirin** (*süper mikro bolustan* farklıdır!): Dikkatli kullanın ve gerçekte ne işe yaradığını öğrenene kadar etkinleştirmeyin. Temel olarak, sonraki iki saat için bazal bolusa eklenir ve iki saatlik sıfır geçici bazal etkinleştirilir. **AAPS döngü işlevleri devre dışı bırakılacak - bu nedenle dikkatli kullanın! SMB kullanırsanız, AAPS döngü işlevleri ["SMB'yi sınırlamak için maks. bazal dakika"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to) içindeki ayarlarınıza göre devre dışı bırakılacaktır. SMB kullanmazsanız, döngü işlevleri iki saat boyunca devre dışı bırakılır.** Süper bolus ile ilgili ayrıntılara [buradan ulaşabilirsiniz](https://www. diyabetnet.com/diabetes-technology/blue-skying/super-bolus).

### Eylemler

* Ortak özelliklere hızla erişmek için bazı butonlar.
* Ayrıntılar için [AAPS ekran görüntülerine](../Getting-Started/Screenshots#action-tab) bakın.

### Otomasyon

Kullanıcı tanımlı otomasyon görevleri. Lütfen otomasyonla ilgili [burayı okuyun](../Usage/Automation.rst).

### SMS Kominikatör

Ebeveynlerin bazı AndroidAPS özelliklerini uzaktan SMS yoluyla kontrol etmesine izin verir, daha fazla kurulum bilgisi için [SMS Komutları](../Children/SMS-Commands.rst)'na bakın.

### Yiyecek

Nightscout gıda veritabanında tanımlanan yemek ön ayarlarını görüntüler, daha fazla kurulum bilgisi için [Nightscout Beni Oku](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods)'ya bakın.

Not: Girişler, AndroidAPS hesaplayıcısında kullanılamaz. (Sadece Görüntüleme)

### Wear

Android saatinizi kullanarak AAPS'yi izleyin ve kontrol edin (bkz. [saat arayüzeyleri sayfası](../Configuration/Watchfaces.md)). Saatinizden verilen bolusu hesaplarken hangi değişkenlerin dikkate alınması gerektiğini belirlemek için ayarları (dişli çark) kullanın (15dk trend, COB., KŞ vb..).

Saatinizden bolus vs. göndermek istiyorsanız "Wear ayarları" içinde "Saat tarafından kontrol"u etkinleştirmeniz gerekir.

![Wear ayarları](../images/ConfBuild_Wear.png)

Wear sekmesi veya hamburger menüsünden (sekme görüntülenmiyorsa ekranın sol üst kısmında)

* Tüm verileri yeniden gönder. Saat bir süredir bağlı değilse ve bilgileri saate göndermek istiyorsanız yardımcı olabilir.
* Telefonunuzu kullanarak Ayarları doğrudan saatinizde açar.

### xDrip Durum Satır ekranı (saat)

Döngü bilgilerini xDrip+ saat arayüzünde görüntüleyin (Eğer AAPS/[AAPS v2 saat arayüzünü](../Configuration/Watchfaces.md) kullanmıyorsanız)

### NSClient

* AndroidAPS verilerinizin Nightscout ile senkronizasyonunu ayarlayın.
* [Tercihler](../Configuration/Preferences#nsclient) içindeki ayarlar, dişli çark tıklanarak açılabilir.

### Bakım

E-posta ve gönderilecek günlük sayısı. Normalde değişiklik gerekmez.

### Konfigürasyon ayarları

Konfigürasyon ayarları için hamburger menü yerine sekmeyi kullanın.