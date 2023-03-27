# Döngü kullanıcıları için SSS

SSS'ye nasıl soru eklenir: Bu [talimatları](../make-a-PR.md) izleyin

# Genel

## AAPS kurulum dosyasını indirebilir miyim?

Hayır. AAPS için indirilebilir bir apk dosyası yoktur. Kendiniz [derlemeniz](../Installing-AndroidAPS/Building-APK.md) gerekir. Nedeni ise:

AAPS, pompanızı kontrol etmek ve insülin vermek için kullanılır. Avrupa'daki mevcut düzenlemelere göre IIa veya IIb olarak sınıflandırılan tüm sistemler, çeşitli çalışmalar ve imzalar gerektiren düzenleyici onay (CE işareti) gerektiren tıbbi cihazlardır. Düzenlenmemiş bir cihazı dağıtmak yasa dışıdır. Dünyanın başka yerlerinde de benzer düzenlemeler var.

Bu düzenleme (bir şey karşılığında para almak anlamında) sadece satışla sınırlı olmayıp, her türlü dağıtım (hatta ücretsiz dağıtma) için de geçerlidir. Kendiniz için bir tıbbi cihaz oluşturmak, uygulamayı bu düzenlemeler dahilinde kullanmanın tek yoludur.

Bu yüzden apk'ler mevcut değildir.

(FAQ-how-to-begin)=

## Nasıl başlamalı?

Her şeyden önce, **döngülenebilir donanım bileşenleri almanız** gerekir:

- [destekleyen bir insülin pompası](./Pump-Choices.md), 
- bir [Android akıllı telefon](Phones.md) (Apple iOS, AAPS tarafından desteklenmez - [iOS Loop](https://loopkit.github.io/loopdocs/) kontrol edebilirsiniz) ve
- [sürekli glikoz izleme sistemi](../Configuration/BG-Source.md). 

İkinci olarak, **donanımınızı kurmanız** gerekir. [Adım adım öğreticiyle örnek kurulum](Sample-Setup.md)'a bakın.

Üçüncü olarak, **yazılım bileşenlerinizi kurmanız** gerekir: AAPS ve CGM/FGM kaynağı.

Dördüncüsü, tedavi faktörlerinizi kontrol etmek için **OpenAPS referans tasarımını öğrenmeli ve anlamalısınız**. Kapalı döngünün temel prensibi, bazal oranınızın ve karbonhidrat oranınızın doğru olmasıdır. Tüm öneriler, temel ihtiyaçlarınızın karşılandığını ve gördüğünüz herhangi bir tepe veya dip noktasının, bu nedenle bazı tek seferlik ayarlamalar (egzersiz, stres vb.) gerektiren diğer faktörlerin bir sonucu olduğunu varsayar. Kapalı döngünün güvenlik için yapabileceği ayarlamalar sınırlandırılmıştır ([OpenAPS Referans Tasarımında](https://openaps.org/reference-design/) izin verilen maksimum geçici bazal oranına bakın), bu izin verilen dozun temeldeki yanlış bir bazalı düzeltmek için boşa harcamak istemediğiniz anlamına gelir. Örneğin, yemekten önce genellikle düşük seviyeniz varsa, muhtemelen bazal oranınızın ayarlanması gerekir. Bazalların ve/veya İDF'nin ayarlanması gerekip gerekmediği ve ayrıca karbonhidrat oranının değiştirilmesi gerekip gerekmediğini önermek için geniş bir veri havuzunu değerlendirmek için [Otoayar](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig)'ı kullanabilirsiniz. Veya bazalınızı [eski moda bazal oranı ayarı](https://integrateddiabetes.com/basal-testing/) şekilde test edip ayarlayabilirsiniz.

## Hangi döngü pratiklerine sahibim?

### Parola koruması

Tercihlerinizin kolayca değiştirilmesini istemiyorsanız, tercihler menüsünden "ayarlar için şifre" seçeneğini seçerek tercihler menüsüne şifre korumalı yapabilir ve seçtiğiniz şifreyi yazabilirsiniz. Tercihler menüsüne bir sonraki girişinizde, daha ileri gitmeden önce bu şifreyi isteyecektir. Daha sonra şifre seçeneğini kaldırmak isterseniz, "ayarlar için şifre" bölümüne gidin ve metni silin.

### Android Wear Akıllı saatler

Ayarları bolus yapmak veya değiştirmek için android wear uygulamasını kullanmayı planlıyorsanız, AAPS'den gelen bildirimlerin engellenmediğinden emin olmanız gerekir. Eylemin onayı bildirim yoluyla gelir.

(FAQ-disconnect-pump)=

### Pompayı ayırın

Duş almak, banyo yapmak, yüzmek, spor yapmak veya diğer etkinlikler için pompanızı çıkarırsanız, AAPS'e AİNS'i doğru tutmak için insülin verilmediğini bildirmelisiniz.

[AAPS Ana Ekranında](Screenshots-loop-status) Döngü Durumu simgesi kullanılarak pompanın bağlantısı kesilebilir.

### Öneriler yalnızca tek bir CGM değerlerine dayalı değildir

Güvenlik için yapılan öneriler bir CGM okumasına değil, ortalama deltaya dayanmaktadır. Bu nedenle, bazı okumaları kaçırırsanız, AAPS'in tekrar döngüye girmesi, verileri geri aldıktan sonra biraz zaman alabilir.

### Diğer okumalar

Döngü yapmanın pratikliğini anlamanıza yardımcı olacak iyi ipuçları içeren birkaç blog var:

- [İnce Ayarlar](https://seemycgm.com/2017/10/29/fine-tuning-settings/) CGM'ime bakın
- [DIA neden önemlidir](https://seemycgm.com/2017/08/09/why-dia-matters/) CGM'ime bakın
- [Öğün ani artışlarını sınırlama](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormonlar ve Otoduyarlılık](https://seemycgm.com/2017/06/06/hormones-2/) CGM'ime bakın

## Yanıma hangi acil durum ekipmanının alınması önerilir?

İnsülin pompası tedavisi olan diğer tüm T1D'ler gibi aynı acil durum ekipmanına sahip olmalısınız. AAPS ile döngü kurarken, yanınızda veya yakınında aşağıdaki ek ekipmanın bulunması şiddetle tavsiye edilir:

- Akıllı telefonunuzu, saatinizi ve (gerekirse) BT okuyucusunu veya Link cihazını şarj etmek için pil takımı ve kablolar
- Pompa pilleri
- AAPS ve kullandığınız diğer uygulamalar (ör. xDrip+, BYO Dexcom) için hem yerel olarak hem de bulutta (Dropbox, Google Drive) mevcut [apk](../Installing-AndroidAPS/Building-APK.md) ve [tercih dosyaları](../Usage/ExportImportSettings.md).

## CGM/FGM'yi güvenli ve güvenilir bir şekilde nasıl bağlayabilirim?

Bantlayabilirsiniz. Yaygın CGM sistemleri için önceden delinmiş birkaç çeşit sensör bantları mevcuttur. (Google, eBay veya Amazon'da arama yapın). Bazı looper'lar daha ucuz standart kinesiyoloji bandı veya tıbbi rulo bant kullanır.

Siz bunu düzeltebilirsiniz. CGM/FGM'yi bir bantla sabitleyen üst kol bilezikleri de satın alabilirsiniz (Google, eBay veya Amazon'da arama yapın).

# AAPS Ayarları

Aşağıdaki liste, ayarları optimize etmenize yardımcı olmayı amaçlamaktadır. En baştan başlamak ve en alta kadar çalışmak en iyisi olabilir. Diğerini değiştirmeden hemen önce bir ayarı almayı hedefleyin. Tek seferde büyük değişiklikler yapmak yerine küçük adımlarla çalışın. [Otoayar](https://autotuneweb.azurewebsites.net/)'ı düşüncenize rehberlik etmesi için kullanabilirsiniz, ancak körü körüne takip edilmemelidir: sizin için veya her durumda iyi çalışmayabilir. Ayarların birbiriyle etkileşime girdiğine dikkat edin - bazı durumlarda birlikte iyi çalışan 'yanlış' ayarlarınız olabilir (örneğin, çok yüksek bir bazal, çok yüksek bir Karbonhidrat oranı ile aynı anda olursa), ancak diğerlerinde çalışmaz. Bu tüm ayarları göz önünde bulundurmanız ve çeşitli koşullarda birlikte çalıştıklarını kontrol etmeniz gerektiği anlamına gelir.

## İnsülin Etki Süresi (İES)

### Açıklama & test yapmak

İnsülinin metabolizmada tamamen parçalanması için geçen süre.

Bu genellikle çok kısa ayarlanır. Çoğu insanın en az 5 saat, bazen 6 veya 7 saate ihtiyacı vardır.

(FAQ-impact)=

### Etki

Çok kısa İES, düşük KŞ'lere yol açabilir. Veya tam tersi.

İES çok kısa ayarlanırsa, AAPS çok yakında önceki bolusun tamamen "kullanıldığını" varsayacak ve glikoz seviyeleri yükseldikçe ek insülin verecektir. (Aslında o kadar da beklemez ama ne olacağını tahmin eder ve insülin eklemeye devam eder). Bu esasen AAPS'nin farkında olmadan 'insülin yığını'na yol açar.

Çok kısa bir İES örneği, yüksek KŞ takibende AAPS'nin aşırı düzeltme yapması ve düşük KŞ yol açması.

## Bazal Oran Programı (Ü/sa)

### Açıklama & test yapmak

KŞ'yi sabit bir seviyede tutmak için belirli bir saat zaman bloğundaki insülin miktarı.

Döngüyü askıya alarak, aç kalarak, örneğin yemekten sonra 5 saat bekleyerek ve KŞ'nin nasıl değiştiğini görerek bazal oranlarınızı test edin. Birkaç kez tekrarlayın.

KŞ düşüyorsa, bazal oran çok yüksektir. Veya tam tersi.

### Etki

Çok yüksek bazal oran, düşük KŞ'lere yol açabilir. Veya tam tersi.

Varsayılan bazal orana karşı AAPS "temel çizgileri". Bazal oran çok yüksekse, bir 'sıfır geçici' (bazal hızı AAPS ile geçici olarak kapatır), olması gerekenden daha yüksek bir negatif AİNS (metabolizmada aktif insülin) ile sonuçlanır. Bu AAPS'nin AİNS'i nihai olarak sıfıra getirmek için gerekenden daha fazla düzeltme yapmasına yol açacaktır.

Dolayısıyla, çok yüksek bir bazal oran, hem varsayılan oranla hem de AAPS'nin hedefi düzeltmesiyle birkaç saat sonra düşük KŞ'ler yaratacaktır.

Tersine, çok düşük bir bazal oran, yüksek KŞ'lere ve seviyelerin hedef değere indirilememesine neden olabilir.

## İnsülin duyarlılık faktörü (İDF) (mmol/l/U veya mg/dl/U)

### Açıklama & test yapmak

1Ü insülin dozundan beklenen KŞ'deki düşüş.

Doğru bazal varsayarak, döngüyü askıya alarak, AİNS'in sıfır olduğunu kontrol ederek ve kararlı bir "yüksek" seviyeye ulaşmak için birkaç glikoz tableti alarak bunu test edebilirsiniz.

Ardından, hedef KŞ'nize ulaşmak için tahmini miktarda insülin (mevcut 1/İDF'ine göre) alın.

Bu genellikle çok düşük ayarlandığından dikkatli olun. Çok düşük ayarlamak, 1 Ü insülininin, KŞ'ni beklenenden daha hızlı düşüreceği anlamına gelir.

### Etki

**Düşük İDF** (örn. 50 yerine 40), insülinin birim başına KŞ'nizi daha az düşürdüğü anlamına gelir. Bu **daha fazla insülin** ile döngüden daha agresif/daha güçlü bir düzeltmeye yol açar. İDF çok düşükse, bu düşük KŞ'lere yol açabilir.

**Daha yüksek İDF** (örn. 35 yerine 45), insülinin birim başına KŞ'nizi daha fazla düşürdüğü anlamına gelir. Bu **daha az insülin** ile döngüden daha az agresif/daha zayıf bir düzeltmeye yol açar. İDF çok yüksekse, bu yüksek KŞ'lere yol açabilir.

**Örnek kullanım:**

- KŞ 190 mg/dl (10,5 mmol) ve hedef 100 mg/dl (5,6 mmol). 
- Yani 90 mg/dl (= 190 - 110) düzeltmesi istiyorsunuz.
- İDF = 30 -> 90 / 30 = 3 ünite insülin
- İDF = 45 -> 90 / 45 = 2 ünite insülin

AAPS, yüksek bir KŞ'yi düzeltmek için gerçekte olduğundan daha fazla insüline ihtiyaç duyduğunu düşündüğünden, çok düşük (nadir olmayan) bir İDF "aşırı düzeltmelere" neden olabilir. Bu da 'hız treni misali' KŞ'nin inişli çıkışlı olmasına sebep olur. (özellikle. oruçluyken). Bu durumda İDF'nizi artırmanız gerekir. Bu AAPS'nin daha küçük düzeltme dozları verdiği anlamına gelir ve bu düşük KŞ ile sonuçlanan yüksek bir KŞ'nin aşırı düzeltilmesini önler.

Tersine, çok yüksek bir İDF ayarı eksik düzeltmelere neden olabilir, bu da KŞ'nizin hedefin üzerinde kaldığı anlamına gelir - özellikle gece boyunca fark edilir.

## Karbonhidrat İnsülin oranı (IC) (g/Ü)

### Açıklama & test yapmak

Her birim ünite insülin için karbonhidrat gramı.

Bazı insanlar ayrıca IC yerine kısaltma olarak I:C kullanır veya karbonhidrat oranı (CR) hakkında bahseder.

Bazalın doğru olduğunu varsayarak, AİNS'in sıfır olduğunu ve aralıkta olduğunuzu, tam olarak bilinen karbonhidratları yediğinizi ve mevcut insülin / karbonhidrat oranına göre tahmini bir miktarda insülin aldığınızı kontrol ederek test edebilirsiniz. En iyisi, normalde yediğiniz yemeği günün o saatinde yemek ve karbonhidratlarını tam olarak saymaktır.

> **NOT:**
> 
> Bazı Avrupa ülkelerinde, gıda için ne kadar insüline ihtiyaç olduğunun belirlenmesi için dilim ekmek birimi kullanılmıştır. Başlangıçta 1 dilim ekmek 12 gr karbonhidrata eşitken, bazıları daha sonra 10 gr karbonhidrata dönüştürdü.
> 
> Bu modelde karbonhidrat miktarı sabit ve insülin miktarı değişkendi. ("Bir dilim ekmeğin üstesinden gelebilmek için ne kadar insülin gerekir?")
> 
> IC kullanırken insülin miktarı sabittir ve karbonhidrat miktarı değişkendir. ("Bir ünite insülin kaç gram karbonhidratı karşılayabilir?")
> 
> Örnek kullanım:
> 
> Ekmek birim faktörü (BU = 12g karbonhidrat): 2,4 U/BU -> Bir ünite ekmek yediğinizde 2,4 ünite insüline ihtiyacınız var.
> 
> Karşılık gelen IC: 12g / 2,4 U = 5,0 g/U -> 5,0g karbonhidrat bir ünite insülin ile karşılanabilir.
> 
> BU faktörü 2,4 U / 12g ===> IC = 12g / 2,4 U = 5,0 g/U
> 
> Dönüşüm tabloları çevrimiçi olarak mevcuttur, [buradan](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf) ulaşabilirsiniz.

### Etki

**Düşük IC** = birim başına daha az yiyecek, yani sabit miktarda karbonhidrat için daha fazla insülin alıyorsunuz. 'Daha agresif' olarak da adlandırılabilir.

**Daha yüksek IC** = birim başına daha fazla yiyecek, yani sabit miktarda karbonhidrat için daha az insülin alıyorsunuz. "Daha az agresif" olarak da adlandırılabilir.

Yemekten sonra sindirim gerçekleşmiş ve AİNS sıfıra dönmüşse, KŞ'niz de yemek öncesi değerden daha yüksekse, IC'nin çok büyük olma ihtimali vardır. Tersine, KŞ'niz yemekten sonra düşükse, IC çok küçüktür.

# APS algoritması

## Profilimde farklı bir İES olmasına rağmen "OPENAPS AMA" sekmesinde neden "ies:3" gösteriyor?

![AMA 3h](../images/Screenshot_AMA3h.png)

AMA algoritmasında, İES aslında 'insülin etkisinin süresi' anlamına gelmez. Eskiden İES'ine bağlanan bir parametreydi. Şimdi ise 'düzeltme bolusunun ne zaman biteceği' anlamına geliyor. AİNS'in hesaplanmasıyla ilgisi yoktur. OpenAPS SMB'de artık bu parametreye gerek yoktur.

## Profil

### Neden minimum 2-3 saat yerine 5 saat DIA (insülin bitiş zamanı)?

[Bu makalede](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) iyi bir şekilde açıklanmıştır. İES'ini değiştirdikten sonra `PROFİLİ ETKİNLEŞTİR` yapmayı unutmayın.

### Döngünün AKRB olmadan KŞ'inin hipoglisemik değerlere sık sık düşürmesine neden olan nedir?

Her şeyden önce, bazal oranınızı kontrol edin ve karbonhidratsız bir bazal oranı testi yapın. Doğruysa, bu davranışa genellikle çok düşük bir İDF neden olur. Çok düşük bir İDF tipik olarak şöyle görünür:

![İDF çok düşük](../images/isf.jpg)

### Kapalı döngüde yüksek tokluk KŞ'i zirvelerine ne sebep olur?

Her şeyden önce, bazal oranınızı kontrol edin ve karbonhidratsız bir bazal oranı testi yapın. Doğruysa ve karbonhidratlar tamamen emildikten sonra KŞ'niz hedefinize düşüyorsa, AAPS'de yemekten bir süre önce bir "yakında yemek yeme" geçici hedefi belirlemeye çalışın veya endokrinologunuzla uygun bir bolus öncesi zamanı düşünün. KŞ'niz yemekten sonra çok yüksekse ve karbonhidratlar tamamen emildikten sonra hala çok yüksekse, endokrinologunuzla IC'nizi azaltmayı düşünün. KŞ değerleriniz aktif karbonhidratlarla çok yüksekse ve tam karbonhidrat emiliminden sonra da çok düşerse, diyabet uzmanınıza Kİ oranınızı artırıp artırmayacağınızı danışın ve uygun bir insülin- yemek arası süre belirleyin.

# Diğer ayarlar

## Nightscout ayarları

### AAPS NSClient 'izin verilmiyor' diyor ve veri yüklemiyor. Bu durumda ne yapabilirim?

NSClient'te 'Bağlantı ayarları'nı kontrol edin. Belki de aslında izin verilen bir WLAN'da değilsiniz veya 'Yalnızca şarj oluyorsa' seçeneğini etkinleştirdiniz ve şarj kablonuz bağlı değil.

## CGM ayarları

### AAPS neden 'KŞ kaynağı gelişmiş filtrelemeyi desteklemiyor' diyor?

xDrip yerel modunda Dexcom G5 veya G6'dan başka bir CGM/FGM kullanırsanız, bu uyarıyı AAPS OpenAPS sekmesinde alırsınız. Daha fazla ayrıntı için [Kan şekeri verilerini yumuşatma](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) konusuna bakın.

## Pompa

### Pompayı nereye yerleştirmeli?

Pompayı yerleştirmek için sayısız olasılık vardır. Döngü yapıp yapmadığınız önemli değildir.

### Piller

Döngü, pompa pilini normal kullanımdan daha hızlı azaltabilir, çünkü sistem bluetooth aracılığıyla manuel bir kullanıcıdan çok daha fazla etkileşime girer. O zaman iletişim zorlaştığı için pili %25 oranında değiştirmek en iyisidir. Nightscout sitenizdeki PUMP_WARN_BATT_P değişkenini kullanarak pompa pili için uyarı alarmları ayarlayabilirsiniz. Pil ömrünü artırmanın püf noktaları şunları içerir:

- LCD'nin açık kaldığı süreyi azaltın (pompa ayarları menüsünde)
- arka ışığın açık kalma süresini kısaltın (pompa ayarları menüsünde)
- titreşim yerine bir bip sesiyle bildirim ayarlarını seçin (pompa ayarları menüsünden)
- yeniden doldurmak için yalnızca pompadaki düğmelere basın, tüm geçmişi, pil seviyesini ve rezervuar hacmini görüntülemek için AAPS'i kullanın.
- AAPS uygulaması, bazı telefonlarda enerji tasarrufu veya boş RAM için genellikle kapatılabilir. AAPS her başlatmada yeniden başlatıldığında, pompaya bir Bluetooth bağlantısı kurar ve mevcut bazal oranı ve bolus geçmişini yeniden okur. Bu pil tüketir. Bunun olup olmadığını görmek için Tercihler > NSClient'e gidin ve 'Uygulama başlangıcını NS'ye kaydet' seçeneğini etkinleştirin. Nightscout, AAPS'nin her yeniden başlatılmasında, sorunu izlemeyi kolaylaştıran bir etkinlik alacaktır. Bunu azaltmak için, uygulamanın güç monitörünün kapatmasını durdurmak için telefonun pil ayarlarında AAPS uygulamasını beyaz listeye ekleyin.
    
    Örneğin, Android Pie çalıştıran bir Samsung telefonda beyaz listeye almak için:
    
    - Ayarlar -> Cihaz Bakımı -> Pil'e gidin 
    - AAPS'i bulana kadar kaydırın ve seçin
    - "Uygulamayı uyku moduna geçir" seçimini kaldırın
    - AYRICA Ayarlar -> Uygulamalar -> seçeneğine gidin (ekranın sağ üst köşesindeki üç daire sembolü) "özel erişim" seçeneğini seçin -> Pil kullanımını optimize edin
    - AAPS'e gidin ve seçili olmadığından emin olun.

- üretim sürecinden kalan balmumu veya yağ izi kalmadığından emin olmak için pil kutuplarını alkolle temizleyin.

- [DanaR/RS pompası](../Configuration/DanaRS-Insulin-Pump.md) ile, başlatma prosedürü sırasında, pil kontaklarındaki koruyucu filmleri (depolama sırasında enerji kaybını önlemeyi amaçlayan) kısaca çıkarmaya çalışmak için yüksek bir akım kullanılır, ancak bu her zaman %100 çalışmaz. Pili ekranda %100 görünene kadar 2-3 kez çıkarıp yeniden takın veya pil anahtarını kullanarak pili kısa bir süre için her iki terminale birden uygulayarak takmadan önce kısa devre yapın.
- ayrıca [belirli pil türleri](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life) için daha fazla ipucuna bakın

### Rezervuar ve kanüllerin değiştirilmesi

Kartuş değişimi AAPS üzerinden yapılamaz, ancak daha önce olduğu gibi doğrudan pompa üzerinden yapılmalıdır.

- AAPS'in Ana Sayfa sekmesindeki "Açık Döngü"/"Kapalı Döngü" üzerine uzun basın ve 'Döngüyü 1 saat Askıya Al' seçeneğini seçin
- Şimdi pompayı ayırın ve hazneyi pompa talimatlarına göre değiştirin.
- Ayrıca doğrudan pompa üzerinde hortum ve kanül doldurma işlemi yapılabilir. Bu durumda, sadece değişikliği kaydetmek için eylemler sekmesinde [HAZIRLA/DOLDUR düğmesini](CPbefore26-pump) kullanın.
- Pompaya yeniden bağlandıktan sonra, 'Askıya Alındı (X m)' üzerine uzun basarak döngüye devam edin.

Ancak bir kanülün değiştirilmesi, pompanın "prime infüzyon seti" işlevini kullanmaz, ancak infüzyon setini ve/veya kanülü bolus geçmişinde görünmeyen bir bolus kullanarak doldurur. Bu şu anda çalışmakta olan geçici bir bazal oranını kesintiye uğratmadığı anlamına gelir. Eylemler (Eyl) sekmesinde, infüzyon setini doldurmak için gereken insülin miktarını ayarlamak ve hazırlamaya başlamak için [HAZIRLA/DOLDUR düğmesini](CPbefore26-pump) kullanın. Miktar yeterli değilse, doldurmayı tekrarlayın. Varsayılan miktar düğmelerini Tercihler > Diğer > Standart insülin miktarlarını Hazırla/Doldur bölümünden ayarlayabilirsiniz. İğne uzunluğuna ve hortum uzunluğuna bağlı olarak kaç ünitenin doldurulması gerektiğini öğrenmek için kanül kutunuzdaki talimat kitapçığına bakın.

## Duvar Kağıdı

Telefonunuz için AAPS duvar kağıdını [telefonlar sayfasında](Phones-phone-background) bulabilirsiniz.

## Günlük kullanım

### Hijyen

#### Duş alırken veya banyo yaparken ne yapmalı?

Duş veya banyo yaparken pompayı çıkarabilirsiniz. Bu kısa süre için buna ihtiyacınız olmayabilir, ancak AİNS hesaplamalarının doğru olması için AAPS'e bağlantınızın kesildiğini söylemelisiniz. [yukarıdaki açıklamaya](FAQ-disconnect-pump) bakın.

### İş

İşinize bağlı olarak, iş günlerinde farklı tedavi faktörleri kullanmayı tercih edebilirsiniz. Bir döngü kullanıcısı olarak, tipik iş gününüz için bir [profil değiştirmeyi](../Usage/Profiles.md) düşünmelisiniz. Örneğin, daha az zorlu bir işiniz varsa (örneğin, masada oturmak) %100'den yüksek bir profile veya tüm gün aktif ve ayaktaysanız %100'den az bir profile geçebilirsiniz. Ayrıca, farklı vardiyalarda çalışıyorsanız, normalden çok daha erken veya daha geç çalışırken yüksek veya düşük bir geçici hedef veya [profilinizin zaman kaymasını](Profiles-time-shift) düşünebilirsiniz. Ayrıca ikinci bir profil (ör. "ev" ve "iş günü") oluşturabilir ve ihtiyacınız olan profile günlük profil geçişi yapabilirsiniz.

## Boş zaman etkinlikleri

(FAQ-sports)=

### Sporlar

Döngü öncesi zamanlardan kalma eski spor alışkanlıklarınızı yeniden çalışmanız gerekiyor. Daha önce olduğu gibi sadece bir veya daha fazla spor karbonhidratı tüketirseniz, kapalı döngü sistemi bunları tanıyacak ve uygun şekilde düzeltecektir.

Böylece daha fazla aktif karbonhidrat olurdu, ancak aynı zamanda döngü, insülini verir ve etkisiz hale getirirdi.

Döngü yaparken şu adımları denemelisiniz:

- [profil geçişi](../Usage/Profiles.md) < %100 yapın.
- Standart hedefinizin üzerinde bir [etkinlik geçici hedefi](temptarget-activity-temp-target) belirleyin.
- SMB kullanıyorsanız ["SMB'yi yüksek geçici hedeflerle etkinleştir"](Open-APS-features-enable-smb-with-high-temp-targets) ve ["SMB'yi her zaman etkinleştir"](Open-APS-features#enable-smb-always)'in devre dışı bırakıldığından emin olun.

Bu ayarlar için önce ve sonra çalıştırma önemlidir. Değişiklikleri spordan önce zamanında yapın ve kas dolgusunun etkisini göz önünde bulundurun.

Aynı anda düzenli olarak spor yapıyorsanız (yani spor salonunuzda spor dersi), profil değiştirme ve TT için [otomasyonu](../Usage/Automation.md) kullanmayı düşünebilirsiniz. Konum tabanlı otomasyon da bir fikir olabilir ancak ön işlemeyi zorlaştırır.

Profil değişikliğinin yüzdesi, aktivite geçici hedefinizin değeri ve değişiklikler için en iyi zaman bireyseldir. Sizin için doğru değeri arıyorsanız güvenli taraftan başlayın (daha düşük yüzde ve daha yüksek GH ile başlayın).

### Cinsel ilişki

Pompayı 'özgür' olabilmek için kaldırabilirsiniz, ancak AAPS'e AİNS hesaplamalarının doğru olması için söylemelisiniz. [yukarıdaki açıklamaya](FAQ-disconnect-pump) bakın.

### Alkol tüketimi

Algoritma alkolden etkilenen KŞ'yi doğru bir şekilde tahmin edemediği için kapalı döngü modunda alkol içmek risklidir. AAPS'de aşağıdaki işlevleri kullanarak bunu tedavi etmek için kendi yönteminizi kontrol etmeniz gerekir:

- Kapalı döngü modunun devre dışı bırakılması ve diyabetin manuel olarak tedavi edilmesi veya
- gözetimsiz bir yemek nedeniyle döngüyü artıran AİNS'i önlemek için yüksek geçici hedefleri belirlemek ve bildirilmeyen Öğünleri (UAM)'yi devre dışı bırakmak veya
- % 100'den belirgin şekilde daha az bir profil geçişi yapın 

Alkol içerken, karbonhidrat yiyerek hipoglisemiyi manuel olarak önlemek için CGM'nize her zaman göz kulak olmalısınız.

### Uyku

#### Gece boyunca mobil ve WIFI radyasyonu olmadan nasıl döngü yapabilirim?

Birçok kullanıcı geceleri telefonu uçak moduna alıyor. Döngünün uyurken sizi desteklemesini istiyorsanız, aşağıdaki şekilde ilerleyin (bu yalnızca xDrip+ veya ['Kendi Dexcom Uygulamanızı Oluşturun'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) gibi yerel bir KŞ kaynağıyla çalışır, KŞ okumalarını Nightscout aracılığıyla alırsanız çalışmayacaktır):

1. Cep telefonunuzda uçak modunu açın.
2. Uçak modu aktif olana kadar bekleyin.
3. Bluetooth'u açın.

Şu anda arama almıyorsunuz ve internete bağlı değilsiniz. Ama döngü hala çalışıyor.

Bazı kişiler, telefon uçak modundayken yerel yayınla (AAPS xDrip+'tan KŞ değerleri almıyor) ile ilgili sorunlar keşfetti. Ayarlar > Uygulamalar arası ayarlar > Alıcıyı tanımla'ya gidin ve `info.nightscout.androidaps` girin.

![xDrip+ Temel Uyg.-Arası Ayarlar Alıcıyı tanımlayın](../images/xDrip_InterApp_NS.png)

### Seyahat

#### Saat dilimi değişiklikleriyle nasıl başa çıkılır?

Dana R ve Dana R Korean ile hiçbir şey yapmanıza gerek yok. Diğer pompalar için daha fazla ayrıntı için [zaman dilimi yolculuğu](../Usage/Timezone-traveling.md) sayfasına bakın.

## Tıbbi konular

### Hastaneye yatış

Klinisyenlerinizle AAPS ve DIY döngüsü hakkında bazı bilgileri paylaşmak istiyorsanız, [klinisyenler için AAPS kılavuzunu](../Resources/clinician-guide-to-AndroidAPS.md) yazdırabilirsiniz.

### Endokrin doktorunuzla tıbbi randevu

#### Raporlama

Nightscout raporlarınızı (https://YOUR-NS-SITE.com/report) gösterebilir veya [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)'ı kontrol edebilirsiniz.

# Discord'ta sıkça sorulan sorular ve cevapları...

## Benim problemim burada listelenmemiş.

[Yardım almak için bilgi.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Sorunum burada listelenmiyor ama çözümü buldum

[Yardım almak için bilgi.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Çözümünüzü bu listeye eklememizi bize hatırlatın!**

## AAPS her gün aynı saatte duruyor.

Google Play Protect'i durdurun. "Temizleme" uygulamalarını (yani CCleaner vb.) kontrol edin ve bunları kaldırın. AAPS / 3 nokta menüsü / Hakkında / tüm pil optimizasyonlarını durdurmak için "Uygulamayı arka planda çalışmaya devam et" bağlantısını izleyin.

## Yedeklemelerimi nasıl organize edebilirim?

Ayarları çok düzenli olarak dışa aktarın: her pod değişikliğinden sonra, profilinizi değiştirdikten sonra, bir görevi doğruladığınızda, pompanızı değiştirirseniz… Hiçbir şey değişmese bile ayda bir dışa aktarın. Birkaç eski dışa aktarma dosyasını saklayın.

Bir internet sürücüsüne kopyalayın (Dropbox, Google vb.): Telefonunuza uygulama yüklemek için kullandığınız tüm apk'ler (AAPS, xDrip, BYODA, Yamalı LibreLink…) ve tüm uygulamalarınızdan dışa aktarılan ayar dosyaları.

## Uygulamayı oluştururken sorunlarım, hatalarım var.

Lütfen

- tipik hatalar için [Android Studio'da Sorun Giderme](troubleshooting_androidstudio-troubleshooting-android-studio)'yi kontrol edin ve
- [adım adım izlenecek yol](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po) ile ilgili ipuçları.

## Bir göreve takıldım ve yardıma ihtiyacım var.

Soru ve cevapları ekran görüntüsü alın. Discord AAPS kanalına yapıştırın. Hangi seçenekleri seçtiğinizi (veya seçmediğinizi) ve nedenini söylemeyi unutmayın. İpuçları ve yardım alacaksınız ancak yanıtları bulmanız gerekecek.

## AAPS v2.8.x'te parola nasıl sıfırlanır?

Hamburger menüsünü açın, Yapılandırma sihirbazını başlatın ve sorulduğunda yeni şifreyi girin. Şifre aşamasından sonra sihirbazdan çıkabilirsiniz.

## AAPS v3.x'te parola nasıl sıfırlanır

Dokümantasyonu [burada](update3_0-reset-master-password) bulabilirsiniz.

## Bağlantım/pompam/pod'um yanıt vermiyor (RL/OL/EmaLink…)

Bazı telefonlarda (RL/OL/Emalink...) Bluetooth bağlantısı kesilir.

Bazı cihazların da yanıt vermeyen bağlantıları da vardır (AAPS, bağlı olduklarını ancak bağlantıların pompaya ulaşamadığını veya komuta edemediğini söylüyor.)

Tüm bu parçaların birlikte çalışmasını sağlamanın en kolay yolu şudur: 1/ AAPS'den Cihazı Silin (RL, OL, Emalink) 2/ Cihazı Kapatın 3/ AAPS 3 nokta menü, AAPS'den çıkın 4/ AAPS simgesine uzun basın, Android menüsü, uygulama AAPS hakkında bilgi, AAPS'yi durdurmaya zorla ve ardından Önbelleği sil (Ana belleği silmeyin!) Nadiren bazı telefonların burada yeniden başlatılması gerekebilir. Yeniden başlatmadan deneyebilirsiniz. 5/Cihazı açın 6/AAPS'i Başlatın 7/Pod sekmesi, 3 noktalı menü, cihazı arayın ve bağlayın

## Derleme hatası: dosya adı çok uzun

Derlemeye çalışırken dosya adının çok uzun olduğunu belirten bir hata alıyorum. Muhtemel çözümler: Kaynaklarınızı sürücünüzün kök dizinine daha yakın bir dizine taşıyın (ör. "c:\src\AndroidAPS-EROS").

Android Studio'dan: Projeyi açıp GitHub'dan çektikten sonra "Gradle"ın senkronizasyon ve indekslemenin yapıldığından emin olun. Bir Yeniden Proje yapmadan önce Temiz bir Proje yürütün. Execute File->Invalidate Caches ardından Android Studio'yu tekrar başlatın.

## Uyarı: Geliştirme sürümü çalıştırılıyor. Kapalı döngü devre dışı

AAPS "geliştirici modunda" çalışmıyor. AAPS şu mesajı gösterir: "dev sürümü çalışıyor. Kapalı döngü devre dışı".

AAPS'in "geliştirici modunda" çalıştığından emin olun: "AAPS/extra" konumuna "engineering_mode" adlı bir dosya yerleştirin. Herhangi bir dosya, doğru şekilde adlandırıldığı sürece iş görür. Dosyayı bulması ve "geliştirici moduna" geçmesi için AAPS'i yeniden başlattığınızdan emin olun.

İpucu: Mevcut bir günlük dosyasının bir kopyasını alın ve onu "engineering_mode" olarak yeniden adlandırın (not: dosya uzantısı olmayacak).

## Ayar dosyalarını nerede bulabilirim?

Ayarlar dosyaları telefonunuzun dahili deposunda "/AAPS/preferences" dizininde saklanacaktır. UYARI: Parolanızı kesinlikle kaybetmeyin çünkü onsuz şifreli bir ayar dosyasını içe aktaramazsınız!

## Pil tasarrufu nasıl yapılandırılır?

Güç Yönetiminin doğru şekilde yapılandırılması, telefonunuzun işletim sisteminin, telefonunuz kullanılmadığında AAPS'i ve ilgili uygulama ve hizmetleri askıya almaması için önemlidir. Doğru yapılandırılmazsa, AAPS işini yapamaz ve/veya sensör için bluetooth bağlantıları ve Rileylink (RL) kapatılarak "pompa bağlantısı kesildi" uyarılarına ve iletişim hatalarına neden olabilir. Telefonda, ayarlar->Uygulamalar'a gidin ve aşağıdakiler için pil tasarrufunu devre dışı bırakın: AAPS xDrip veya BYODA/Dexcom uygulaması Bluetooth sistem uygulaması (önce sistem uygulamalarını görüntülemeyi seçmeniz gerekebilir) Alternatif olarak, telefondaki tüm pil tasarruflarını tamamen devre dışı bırakın. Sonuç olarak piliniz daha hızlı bitebilir ancak bu, soruna pil tasarrufunun neden olup olmadığını anlamanın bir yoludur. Pil tasarrufunun uygulanma şekli büyük ölçüde telefonun markasına, modeline ve/veya işletim sistemi sürümüne bağlıdır. Bu nedenle, kurulumunuz için pil tasarrufunu doğru şekilde ayarlamak için bu dokümanda talimat vermek neredeyse imkansızdır. Hangi ayarların sizin için en iyi sonucu verdiğini deneyin. Ek bilgi için ayrıca bkz. Uygulamamı devre dışı bırakma

## Günde birkaç kez veya geceleri Pompa ulaşılamıyor uyarıları.

Telefonunuz AAPS hizmetlerini veya bluetooth'u askıya alarak RL ile bağlantısını kaybetmesine neden olabilir (bkz. pil tasarrufu) Sağ üst taraftaki üç noktalı menüye gidip Tercihler->Yerel Uyarılar->Pompa ulaşılamaz eşiği [dk] öğesini seçerek ulaşılamaz uyarıları 120 dakikaya kadar yapılandırmayı düşünün.

## AAPS v3'teki tedavileri nereden silebilirim?

3 nokta menüsü, tedavileri seçin, ardından silmek istediğiniz tedavinin ana başlığını seçin.

## NSClient Remote app Yapılandırma ve Kullanma

AAPS, NSClient uygulaması ve isteğe bağlı olarak Android Wear saatlerinde çalışan ilgili Wear uygulaması aracılığıyla uzaktan izlenebilir ve kontrol edilebilir. NSClient (remote) uygulamasının AAPS'deki NSClient yapılandırmasından farklı olduğunu ve NSClient (remote) Wear uygulamasının AAPS Wear uygulamasından farklı olduğunu unutmayın; açıklığa kavuşturmak için uzak uygulamalar 'NSClient remote' ve ' NSClient remote Wear' uygulamalarına bakabilirsiniz.

NSClient remote işlevselliğini etkinleştirmek için şunları yapmanız gerekir: 1) NSClient remote uygulamasını yükleyin (sürüm, kullanılan AAPS sürümüyle eşleşmelidir) 2) NSClient remote uygulamasını çalıştırın, gerekli izinleri vermek ve Nightscout sitenize erişimi yapılandırmak için yapılandırma sihirbazında ilerleyin. 3) Bu noktada, NSClient remote uygulamasının başlangıcını Nightscout sitenize kaydeden bazı Alarm seçeneklerini ve/veya gelişmiş ayarları devre dışı bırakmak isteyebilirsiniz. Bu yapıldıktan sonra, NSClient remote Nightscout sitenizden Profil verilerini indirecek, 'Genel Bakış' sekmesi CGM verilerini ve bazı AAPS verilerini gösterecek (ancak grafik verilerini göstermeyebilir) ve bir profilin henüz ayarlanmadığını gösterecektir. 4) Profili etkinleştirmek için:

- AAPS > NSClient > Seçenekler'de uzaktan profil senkronizasyonunu etkinleştirin
- Profili NSClient remote > Profil'de etkinleştirin Bu yapıldıktan sonra profil ayarlanarak NSClient remote AAPS'den gelen tüm verileri göstermelidir. İpucu: Grafik hala eksikse, bir güncellemeyi tetiklemek için grafik ayarlarını değiştirmeyi deneyin. 5) AAPS NSClient tarafından uzaktan kontrolü etkinleştirmek için, AAPS > NSClient > Seçenekler aracılığıyla uzaktan kontrol edebilmek istediğiniz AAPS özelliklerini (Profil değişiklikleri, Geçici Hedefler, Karbonhidratlar, vb.) seçerek etkinleştirin. Bu değişiklikler yapıldıktan sonra, AAPS'i Nightscout veya NSClient remote aracılığıyla uzaktan kontrol edebileceksiniz.

AAPS'yi NSClient Remote Wear Uygulaması aracılığıyla izlemek/kontrol etmek istiyorsanız, hem NSClient Remote hem de ilgili Wear uygulamasının yüklenmesine ihtiyacınız olacaktır. NSClient remote Wear uygulamasını derlemek için, AAPS wear uygulamasını kurmak/yapılandırmak için standart talimatları izleyin, ancak derlerken NSClient varyantını seçin.

## Kırmızı üçgen uyarısı alıyorum / AAPS kapalı döngüyü etkinleştirmiyor / Döngü LGS'de kalıyor / Sarı üçgen uyarısı alıyorum

Kırmızı ve sarı üçgenler, AAPS v3'te bir güvenlik özelliğidir.

Kırmızı üçgen, yinelenen KŞ'niz olduğu ve AAPS'in deltaları tam olarak hesaplayamadığı anlamına gelir. Döngüyü kapalı yapamazsınız. Kırmızı üçgeni temizlemek için, kopyalanan her kan şekeri değerinizi silmeniz gerekir. BYODA veya xDRIP sekmesine gidin, silmek istediğiniz satırlardan birine uzun basın, çift satırlardan birini işaretleyin (veya AAPS sürümünüze bağlı olarak 3 nokta menüsü ve sil komutu ile). Çok fazla çift KŞ varsa AAPS veritabanını sıfırlamanız gerekebilir. Bu durumda, istatistikleri, AİNS, AKRB, seçilen profili de kaybedersiniz.

Sorunun olası kaynağı: xDrip ve/veya NS geri döngülü KŞ girdileridir.

Sarı üçgen, her bir KŞ okuması arasında kararsız gecikme anlamına gelir. Her 5 dakikada bir düzenli olarak KŞ bilgisi alamıyorsunuz veya eksik KŞ bilgisi alıyorsunuz. Bu genellikle bir Libre sensör sorunudur. G6 vericisini değiştirdiğinizde de olabilir. Sarı üçgen G6 verici değişikliği ile ilgiliyse, birkaç saat sonra (yaklaşık 24 saat) kendi kendine kaybolacaktır. Libre sensör kullanıyorsanız, sarı üçgen kalacaktır. Kapalı Döngü yapılabilir ve düzgün çalışır.

## Etkin bir DASH Pod'unu başka bir donanıma taşıyabilir miyim?

Bu mümkündür. Yalnız taşımanın "desteklenmediği" ve "denenmediği" için bazı risklerin olduğunu unutmayın. Taşıma prosedürünü Pod'unuzun süresi dolmak üzereyken denemek en iyisidir, böylece işler ters gittiğinde fazla bir şey kaybetmezsiniz.

AAPS ve DASH eşleşmesindeki pompa "durumu" (MAC adresini içerir) kritiktir

## Taşıma Prosedürü aşağıdaki gibidir:

1) DASH pompasını askıya alın. Bu komut DASH bağlantıyı kaybettiğinde çalışan veya sıraya alınmış komutların etkin olmamasını sağlar. 2) Bluetoothu devre dışı bırakmak için telefonu uçak moduna alın. (aynı zamanda WiFi ve Mobil veri için) Bu şekilde AAPS ve DASH'ın iletişim kuramaması garanti edilir. 3) Ayarları dışa aktarın (DASH durumunu içerir) 4) Telefondan yeni dışa aktarılan ayar dosyasını kopyalayın (uçak modunda olduğu ve bunu değiştirmek istemediğimiz için en kolay yol USB kablosu kullanmaktır) 5) Ayarlar dosyasını taşımak istediğiniz telefona kopyalayın. 6) Yeni telefonda AAPS ayarlarını içe aktarın. 7) Pod'u gördüğünü doğrulamak için DASH sekmesini kontrol edin. 8) Askıya almayı kaldırın. 9) DASH sekmesini kontrol edin ve Pod ile iletişim kurduğunu onaylayın (yenile düğmesini kullanın)

Tebrikler: başardın!

*Bekleyin!* Hala aynı DASH'a yeniden bağlanabilen bir telefona sahipsiniz:

1) Eski telefonda "devre dışı bırak"ı seçin. Bu güvenlidir çünkü telefonun, Pod'u fiilen devre dışı bırakmak için DASH ile iletişim kurmasının hiçbir yolu yoktur (çünkü hala uçak modunda) 2) Devre dışı bırakma bir iletişim hatasına neden olur - (beklenen birşey). 3) AAPS, Pod'u "İptal Etme" seçeneği sunana kadar birkaç kez "tekrar dene" düğmesine basın.

İptal edildiğinde, AAPS'in "Etkin Pod Yok" bildirdiğini doğrulayın. Artık uçak modundan güvenle çıkabilirsiniz.

## AAPS'in önceki sürümlerinden ayarları AAPS v3'e nasıl aktarırım?

Yalnızca AAPS v2.8x veya v3.x kullanılarak dışa aktarılan ayarları AAPS v3'te içe aktarabilirsiniz. AAPS'in v2.8x'ten daha eski bir sürümünü kullanıyorsanız veya v2.8x'ten daha eski dışa aktarma ayarlarını kullanmanız gerekiyorsa, önce AAPS v2.8'i yüklemeniz gerekir. v2.x'in eski ayarlarını v2.8'e aktarın. Her şeyin yolunda olduğunu kontrol ettikten sonra ayarları v2.8'den dışa aktarabilirsiniz. AAPS v3'ü yükleyin ve v2.8 ayarlarını v3'e aktarın.

v2.8 ve v3'ü oluşturmak için Androidstudio'da aynı anahtarı kullanırsanız, ayarları içe aktarmanız bile gerekmez. v2.8 üzerinden v3 yükleyebilirsiniz.

Bazı yeni görevler eklendi. Onları doğrulamanız gerekecek.