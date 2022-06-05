# Döngü kullanıcıları için SSS

SSS'ye nasıl soru eklenir: Bu [talimatları](../make-a-PR.md) izleyin

# Genel

## AndroidAPS kurulum dosyasını indirebilir miyim?

Hayır. AndroidAPS için indirilebilir bir apk dosyası yoktur. Kendiniz [derlemeniz](../Installing-AndroidAPS/Building-APK.md) gerekir. Nedeni ise:

AndroidAPS, pompanızı kontrol etmek ve insülin vermek için kullanılır. Avrupa'daki mevcut düzenlemelere göre IIa veya IIb olarak sınıflandırılan tüm sistemler, çeşitli çalışmalar ve imzalar gerektiren düzenleyici onay (CE işareti) gerektiren tıbbi cihazlardır. Düzenlenmemiş bir cihazı dağıtmak yasa dışıdır. Dünyanın başka yerlerinde de benzer düzenlemeler var.

Bu düzenleme (bir şey karşılığında para almak anlamında) sadece satışla sınırlı olmayıp, her türlü dağıtım (hatta ücretsiz dağıtma) için de geçerlidir. Kendiniz için bir tıbbi cihaz oluşturmak, uygulamayı bu düzenlemeler dahilinde kullanmanın tek yoludur.

Bu yüzden apk'ler mevcut değildir.

## Nasıl başlamalı?

Her şeyden önce, **döngülenebilir donanım bileşenleri almanız** gerekir:

- [destekleyen bir insülin pompası](./Pump-Choices.md), 
- bir [Android akıllı telefon](Phones.md) (Apple iOS, AndroidAPS tarafından desteklenmez - [iOS Loop](https://loopkit.github.io/loopdocs/) kontrol edebilirsiniz) ve 
- [sürekli glikoz izleme sistemi](../Configuration/BG-Source.rst). 

İkinci olarak, **donanımınızı kurmanız** gerekir. [Adım adım öğreticiyle örnek kurulum](Sample-Setup.md)'a bakın.

Üçüncü olarak, **yazılım bileşenlerinizi kurmanız** gerekir: AndroidAPS ve CGM/FGM kaynağı.

Dördüncüsü, tedavi faktörlerinizi kontrol etmek için **OpenAPS referans tasarımını öğrenmeli ve anlamalısınız**. Kapalı döngünün temel prensibi, bazal oranınızın ve karbonhidrat oranınızın doğru olmasıdır. Tüm öneriler, temel ihtiyaçlarınızın karşılandığını ve gördüğünüz herhangi bir tepe veya dip noktasının, bu nedenle bazı tek seferlik ayarlamalar (egzersiz, stres vb.) gerektiren diğer faktörlerin bir sonucu olduğunu varsayar. Kapalı döngünün güvenlik için yapabileceği ayarlamalar sınırlandırılmıştır ([OpenAPS Referans Tasarımında](https://openaps.org/reference-design/) izin verilen maksimum geçici bazal oranına bakın), bu izin verilen dozun temeldeki yanlış bir bazalı düzeltmek için boşa harcamak istemediğiniz anlamına gelir. Örneğin, yemekten önce genellikle düşük seviyeniz varsa, muhtemelen bazal oranınızın ayarlanması gerekir. Bazalların ve/veya İDF'nin ayarlanması gerekip gerekmediği ve ayrıca karbonhidrat oranının değiştirilmesi gerekip gerekmediğini önermek için geniş bir veri havuzunu değerlendirmek için [Otoayar](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig)'ı kullanabilirsiniz. Veya bazalınızı [eski moda bazal oranı ayarı](https://integrateddiabetes.com/basal-testing/) şekilde test edip ayarlayabilirsiniz.

## Hangi döngü pratiklerine sahibim?

### Parola koruması

Tercihlerinizin kolayca değiştirilmesini istemiyorsanız, tercihler menüsünden "ayarlar için şifre" seçeneğini seçerek tercihler menüsüne şifre korumalı yapabilir ve seçtiğiniz şifreyi yazabilirsiniz. Tercihler menüsüne bir sonraki girişinizde, daha ileri gitmeden önce bu şifreyi isteyecektir. Daha sonra şifre seçeneğini kaldırmak isterseniz, "ayarlar için şifre" bölümüne gidin ve metni silin.

### Android Wear Akıllı saatler

Ayarları bolus yapmak veya değiştirmek için android wear uygulamasını kullanmayı planlıyorsanız, AndroidAPS'den gelen bildirimlerin engellenmediğinden emin olmanız gerekir. Eylemin onayı bildirim yoluyla gelir.

### Pompayı ayırın

Duş almak, banyo yapmak, yüzmek, spor yapmak veya diğer etkinlikler için pompanızı çıkarırsanız, AndroidAPS'ye IOB'yi doğru tutmak için insülin verilmediğini bildirmelisiniz.

[AndroidAPS Ana Ekranında](./Screenshots.md#loop-status) Döngü Durumu simgesi kullanılarak pompanın bağlantısı kesilebilir.

### Öneriler yalnızca tek bir CGM değerlerine dayalı değildir

Güvenlik için yapılan öneriler bir CGM okumasına değil, ortalama deltaya dayanmaktadır. Bu nedenle, bazı okumaları kaçırırsanız, AndroidAPS'in tekrar döngüye girmesi, verileri geri aldıktan sonra biraz zaman alabilir.

### Diğer okumalar

Döngü yapmanın pratikliğini anlamanıza yardımcı olacak iyi ipuçları içeren birkaç blog var:

- [İnce Ayarlar](https://seemycgm.com/2017/10/29/fine-tuning-settings/) CGM'ime bakın
- [DIA neden önemlidir](https://seemycgm.com/2017/08/09/why-dia-matters/) CGM'ime bakın
- [Öğün ani artışlarını sınırlama](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormonlar ve Otoduyarlılık](https://seemycgm.com/2017/06/06/hormones-2/) CGM'ime bakın

## Yanıma hangi acil durum ekipmanının alınması önerilir?

İnsülin pompası tedavisi olan diğer tüm T1D'ler gibi aynı acil durum ekipmanına sahip olmalısınız. AndroidAPS ile döngü kurarken, yanınızda veya yakınında aşağıdaki ek ekipmanın bulunması şiddetle tavsiye edilir:

- Akıllı telefonunuzu, saatinizi ve (gerekirse) BT okuyucusunu veya Link cihazını şarj etmek için pil takımı ve kablolar
- Pompa pilleri
- AndroidAPS ve kullandığınız diğer uygulamalar (ör. xDrip+, BYO Dexcom) için hem yerel olarak hem de bulutta (Dropbox, Google Drive) mevcut [apk](../Installing-AndroidAPS/Building-APK.md) ve [tercih dosyaları](../Usage/ExportImportSettings.rst).

## CGM/FGM'yi güvenli ve güvenilir bir şekilde nasıl bağlayabilirim?

Bantlayabilirsiniz. Yaygın CGM sistemleri için önceden delinmiş birkaç çeşit sensör bantları mevcuttur. (Google, eBay veya Amazon'da arama yapın). Bazı looper'lar daha ucuz standart kinesiyoloji bandı veya tıbbi rulo bant kullanır.

Siz bunu düzeltebilirsiniz. CGM/FGM'yi bir bantla sabitleyen üst kol bilezikleri de satın alabilirsiniz (Google, eBay veya Amazon'da arama yapın).

# AndroidAPS ayarları

Aşağıdaki liste, ayarları optimize etmenize yardımcı olmayı amaçlamaktadır. En baştan başlamak ve en alta kadar çalışmak en iyisi olabilir. Diğerini değiştirmeden hemen önce bir ayarı almayı hedefleyin. Tek seferde büyük değişiklikler yapmak yerine küçük adımlarla çalışın. [Otoayar](https://autotuneweb.azurewebsites.net/)'ı düşüncenize rehberlik etmesi için kullanabilirsiniz, ancak körü körüne takip edilmemelidir: sizin için veya her durumda iyi çalışmayabilir. Ayarların birbiriyle etkileşime girdiğine dikkat edin - bazı durumlarda birlikte iyi çalışan 'yanlış' ayarlarınız olabilir (örneğin, çok yüksek bir bazal, çok yüksek bir Karbonhidrat oranı ile aynı anda olursa), ancak diğerlerinde çalışmaz. Bu tüm ayarları göz önünde bulundurmanız ve çeşitli koşullarda birlikte çalıştıklarını kontrol etmeniz gerektiği anlamına gelir.

## İnsülin Etki Süresi (İES)

### Açıklama & test yapmak

İnsülinin metabolizmada tamamen parçalanması için geçen süre.

Bu genellikle çok kısa ayarlanır. Çoğu insanın en az 5 saat, bazen 6 veya 7 saate ihtiyacı vardır.

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

Varsayılan bazal orana karşı AAPS "temel çizgileri". Bazal oran çok yüksekse, bir 'sıfır geçici' (bazal hızı AAPS ile geçici olarak kapatır), olması gerekenden daha yüksek bir negatif IOB (insulin on board - metabolizmada aktif insülin) ile sonuçlanır. Bu AAPS'nin IOB'yi nihai olarak sıfıra getirmek için gerekenden daha fazla düzeltme yapmasına yol açacaktır.

Dolayısıyla, çok yüksek bir bazal oran, hem varsayılan oranla hem de AAPS'nin hedefi düzeltmesiyle birkaç saat sonra düşük KŞ'ler yaratacaktır.

Tersine, çok düşük bir bazal oran, yüksek KŞ'lere ve seviyelerin hedef değere indirilememesine neden olabilir.

## İnsülin duyarlılık faktörü (İDF) (mmol/l/U veya mg/dl/U)

### Açıklama & test yapmak

1Ü insülin dozundan beklenen KŞ'deki düşüş.

Doğru bazal varsayarak, döngüyü askıya alarak, IOB'nin sıfır olduğunu kontrol ederek ve kararlı bir "yüksek" seviyeye ulaşmak için birkaç glikoz tableti alarak bunu test edebilirsiniz.

Ardından, hedef KŞ'nize ulaşmak için tahmini miktarda insülin (mevcut 1/İDF'ine göre) alın.

Bu genellikle çok düşük ayarlandığından dikkatli olun. Too low means 1 U will drop BG faster than expected.

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

Bazalın doğru olduğunu varsayarak, IOB'nin sıfır olduğunu ve aralıkta olduğunuzu, tam olarak bilinen karbonhidratları yediğinizi ve mevcut insülin / karbonhidrat oranına göre tahmini bir miktarda insülin aldığınızı kontrol ederek test edebilirsiniz. En iyisi, normalde yediğiniz yemeği günün o saatinde yemek ve karbonhidratlarını tam olarak saymaktır.

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

Yemekten sonra sindirim gerçekleşmiş ve IOB sıfıra dönmüşse, KŞ'niz de yemek öncesi değerden daha yüksekse, IC'nin çok büyük olma ihtimali vardır. Conversely if your BG is lower than before food, IC is too small.

# APS algoritması

## Profilimde farklı bir İES olmasına rağmen "OPENAPS AMA" sekmesinde neden "ies:3" gösteriyor?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. Eskiden İES'ine bağlanan bir parametreydi. Şimdi ise 'düzeltme bolusunun ne zaman biteceği' anlamına geliyor. IOB'nin hesaplanmasıyla ilgisi yoktur. OpenAPS SMB'de artık bu parametreye gerek yoktur.

## Profil

### Neden minimum 2-3 saat yerine 5 saat DIA (insülin bitiş zamanı)?

[Bu makalede](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) iyi bir şekilde açıklanmıştır. İES'ini değiştirdikten sonra `PROFİLİ ETKİNLEŞTİR` yapmayı unutmayın.

### Döngünün COB olmadan KŞ'inin hipoglisemik değerlere sık sık düşürmesine neden olan nedir?

Her şeyden önce, bazal oranınızı kontrol edin ve karbonhidratsız bir bazal oranı testi yapın. Doğruysa, bu davranışa genellikle çok düşük bir İDF neden olur. Çok düşük bir İDF tipik olarak şöyle görünür:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

Her şeyden önce, bazal oranınızı kontrol edin ve karbonhidratsız bir bazal oranı testi yapın. Doğruysa ve karbonhidratlar tamamen emildikten sonra KŞ'niz hedefinize düşüyorsa, AndroidAPS'de yemekten bir süre önce bir "yakında yemek yeme" geçici hedefi belirlemeye çalışın veya endokrinologunuzla uygun bir bolus öncesi zamanı düşünün. KŞ'niz yemekten sonra çok yüksekse ve karbonhidratlar tamamen emildikten sonra hala çok yüksekse, endokrinologunuzla IC'nizi azaltmayı düşünün. KŞ değerleriniz aktif karbonhidratlarla çok yüksekse ve tam karbonhidrat emiliminden sonra çok düşükse, diyabet uzmanınızla IC faktörlerinizi artırıp artırmayacağınızı düşünün ve uygun bir insülin yemek arası izleyin.

# Diğer ayarlar

## Nightscout ayarları

### AndroidAPS NSClient 'izin verilmiyor' diyor ve veri yüklemiyor. Bu durumda ne yapabilirim?

NSClient'te 'Bağlantı ayarları'nı kontrol edin. Belki de aslında izin verilen bir WLAN'da değilsiniz veya 'Yalnızca şarj oluyorsa' seçeneğini etkinleştirdiniz ve şarj kablonuz bağlı değil.

## CGM ayarları

### AndroidAPS neden 'KŞ kaynağı gelişmiş filtrelemeyi desteklemiyor' diyor?

xDrip yerel modunda Dexcom G5 veya G6'dan başka bir CGM/FGM kullanırsanız, bu uyarıyı AndroidAPS OpenAPS sekmesinde alırsınız. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pompa

### Pompayı nereye yerleştirmeli?

Pompayı yerleştirmek için sayısız olasılık vardır. Döngü yapıp yapmadığınız önemli değildir.

### Piller

Döngü, pompa pilini normal kullanımdan daha hızlı azaltabilir, çünkü sistem bluetooth aracılığıyla manuel bir kullanıcıdan çok daha fazla etkileşime girer. O zaman iletişim zorlaştığı için pili %25 oranında değiştirmek en iyisidir. Nightscout sitenizdeki PUMP_WARN_BATT_P değişkenini kullanarak pompa pili için uyarı alarmları ayarlayabilirsiniz. Pil ömrünü artırmanın püf noktaları şunları içerir:

- LCD'nin açık kaldığı süreyi azaltın (pompa ayarları menüsünde)
- arka ışığın açık kalma süresini kısaltın (pompa ayarları menüsünde)
- titreşim yerine bir bip sesiyle bildirim ayarlarını seçin (pompa ayarları menüsünden)
- yeniden doldurmak için yalnızca pompadaki düğmelere basın, tüm geçmişi, pil seviyesini ve rezervuar hacmini görüntülemek için AndroidAPS'yi kullanın.
- AndroidAPS uygulaması, bazı telefonlarda enerji tasarrufu veya boş RAM için genellikle kapatılabilir. AndroidAPS her başlatmada yeniden başlatıldığında, pompaya bir Bluetooth bağlantısı kurar ve mevcut bazal oranı ve bolus geçmişini yeniden okur. Bu pil tüketir. Bunun olup olmadığını görmek için Tercihler > NSClient'e gidin ve 'Uygulama başlangıcını NS'ye kaydet' seçeneğini etkinleştirin. Nightscout, AndroidAPS'nin her yeniden başlatılmasında, sorunu izlemeyi kolaylaştıran bir etkinlik alacaktır. Bunu azaltmak için, uygulamanın güç monitörünün kapatmasını durdurmak için telefonun pil ayarlarında AndroidAPS uygulamasını beyaz listeye ekleyin.
    
    Örneğin, Android Pie çalıştıran bir Samsung telefonda beyaz listeye almak için:
    
    - Ayarlar -> Cihaz Bakımı -> Pil'e gidin 
    - AndroidAPS'yi bulana kadar kaydırın ve seçin 
    - "Uygulamayı uyku moduna geçir" seçimini kaldırın
    - AYRICA Ayarlar -> Uygulamalar -> seçeneğine gidin (ekranın sağ üst köşesindeki üç daire sembolü) "özel erişim" seçeneğini seçin -> Pil kullanımını optimize edin
    - AndroidAPS'ye gidin ve seçili olmadığından emin olun.

- üretim sürecinden kalan balmumu veya yağ izi kalmadığından emin olmak için pil kutuplarını alkolle temizleyin.

- [DanaR/RS pompası](../Configuration/DanaRS-Insulin-Pump.md) ile, başlatma prosedürü sırasında, pil kontaklarındaki koruyucu filmleri (depolama sırasında enerji kaybını önlemeyi amaçlayan) kısaca çıkarmaya çalışmak için yüksek bir akım kullanılır, ancak bu her zaman %100 çalışmaz. Pili ekranda %100 görünene kadar 2-3 kez çıkarıp yeniden takın veya pil anahtarını kullanarak pili kısa bir süre için her iki terminale birden uygulayarak takmadan önce kısa devre yapın.
- ayrıca [belirli pil türleri](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life) için daha fazla ipucuna bakın

### Rezervuar ve kanüllerin değiştirilmesi

Kartuş değişimi AndroidAPS üzerinden yapılamaz, ancak daha önce olduğu gibi doğrudan pompa üzerinden yapılmalıdır.

- AndroidAPS'nin Ana Sayfa sekmesindeki "Açık Döngü"/"Kapalı Döngü" üzerine uzun basın ve 'Döngüyü 1 saat Askıya Al' seçeneğini seçin
- Şimdi pompayı ayırın ve hazneyi pompa talimatlarına göre değiştirin.
- Ayrıca doğrudan pompa üzerinde hortum ve kanül doldurma işlemi yapılabilir. Bu durumda, sadece değişikliği kaydetmek için eylemler sekmesinde [HAZIRLA/DOLDUR düğmesini](../Usage/CPbefore26#pump) kullanın.
- Pompaya yeniden bağlandıktan sonra, 'Askıya Alındı (X m)' üzerine uzun basarak döngüye devam edin.

Ancak bir kanülün değiştirilmesi, pompanın "prime infüzyon seti" işlevini kullanmaz, ancak infüzyon setini ve/veya kanülü bolus geçmişinde görünmeyen bir bolus kullanarak doldurur. Bu şu anda çalışmakta olan geçici bir bazal oranını kesintiye uğratmadığı anlamına gelir. Eylemler (Eyl) sekmesinde, infüzyon setini doldurmak için gereken insülin miktarını ayarlamak ve hazırlamaya başlamak için [HAZIRLA/DOLDUR düğmesini](../Usage/CPbefore26#pump) kullanın. Miktar yeterli değilse, doldurmayı tekrarlayın. Varsayılan miktar düğmelerini Tercihler > Diğer > Standart insülin miktarlarını Hazırla/Doldur bölümünden ayarlayabilirsiniz. İğne uzunluğuna ve hortum uzunluğuna bağlı olarak kaç ünitenin doldurulması gerektiğini öğrenmek için kanül kutunuzdaki talimat kitapçığına bakın.

## Duvar Kağıdı

Telefonunuz için AndroidAPS duvar kağıdını [telefonlar sayfasında](../Getting-Started/Phones#phone-background) bulabilirsiniz.

## Günlük kullanım

### Hijyen

#### Duş alırken veya banyo yaparken ne yapmalı?

Duş veya banyo yaparken pompayı çıkarabilirsiniz. Bu kısa süre için buna ihtiyacınız olmayabilir, ancak IOB hesaplamalarının doğru olması için AAPS'e bağlantınızın kesildiğini söylemelisiniz. [yukarıdaki açıklamaya](../Getting-Started/FAQ#disconnect-pump) bakın.

### İş

İşinize bağlı olarak, iş günlerinde farklı tedavi faktörleri kullanmayı tercih edebilirsiniz. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. Örneğin, daha az zorlu bir işiniz varsa (örneğin, masada oturmak) %100'den yüksek bir profile veya tüm gün aktif ve ayaktaysanız %100'den az bir profile geçebilirsiniz. Ayrıca, farklı vardiyalarda çalışıyorsanız, normalden çok daha erken veya daha geç çalışırken yüksek veya düşük bir geçici hedef veya [profilinizin zaman kaymasını](../Usage/Profiles#time-shift) düşünebilirsiniz. Ayrıca ikinci bir profil (ör. "ev" ve "iş günü") oluşturabilir ve ihtiyacınız olan profile günlük profil geçişi yapabilirsiniz.

## Boş zaman etkinlikleri

### Sporlar

Döngü öncesi zamanlardan kalma eski spor alışkanlıklarınızı yeniden çalışmanız gerekiyor. Daha önce olduğu gibi sadece bir veya daha fazla spor karbonhidratı tüketirseniz, kapalı döngü sistemi bunları tanıyacak ve uygun şekilde düzeltecektir.

Böylece daha fazla aktif karbonhidrat olurdu, ancak aynı zamanda döngü, insülini verir ve etkisiz hale getirirdi.

Döngü yaparken şu adımları denemelisiniz:

- [profil geçişi](../Usage/Profiles.md) < %100 yapın.
- Standart hedefinizin üzerinde bir [etkinlik geçici hedefi](../Usage/temptarget#activity-temp-target) belirleyin.
- SMB kullanıyorsanız ["SMB'yi yüksek geçici hedeflerle etkinleştir"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) ve ["SMB'yi her zaman etkinleştir"](../Usage/Open-APS-features#enable-smb-always)'in devre dışı bırakıldığından emin olun.

Bu ayarlar için önce ve sonra çalıştırma önemlidir. Değişiklikleri spordan önce zamanında yapın ve kas dolgusunun etkisini göz önünde bulundurun.

Aynı anda düzenli olarak spor yapıyorsanız (yani spor salonunuzda spor dersi), profil değiştirme ve TT için [otomasyonu](../Usage/Automation.rst) kullanmayı düşünebilirsiniz. Konum tabanlı otomasyon da bir fikir olabilir ancak ön işlemeyi zorlaştırır.

Profil değişikliğinin yüzdesi, aktivite geçici hedefinizin değeri ve değişiklikler için en iyi zaman bireyseldir. Sizin için doğru değeri arıyorsanız güvenli taraftan başlayın (daha düşük yüzde ve daha yüksek GH ile başlayın).

### Cinsel ilişki

Pompayı 'özgür' olabilmek için kaldırabilirsiniz, ancak AndroidAPS'ye IOB hesaplamalarının doğru olması için söylemelisiniz. [yukarıdaki açıklamaya](../Getting-Started/FAQ#disconnect-pump) bakın.

### Alkol tüketimi

Algoritma alkolden etkilenen KŞ'yi doğru bir şekilde tahmin edemediği için kapalı döngü modunda alkol içmek risklidir. AndroidAPS'de aşağıdaki işlevleri kullanarak bunu tedavi etmek için kendi yönteminizi kontrol etmeniz gerekir:

- Kapalı döngü modunun devre dışı bırakılması ve diyabetin manuel olarak tedavi edilmesi veya
- gözetimsiz bir yemek nedeniyle döngüyü artıran IOB'yi önlemek için yüksek geçici hedefleri belirlemek ve bildirilmeyen Öğünleri (UAM)'yi devre dışı bırakmak veya
- % 100'den belirgin şekilde daha az bir profil geçişi yapın 

Alkol içerken, karbonhidrat yiyerek hipoglisemiyi manuel olarak önlemek için CGM'nize her zaman göz kulak olmalısınız.

### Uyku

#### Gece boyunca mobil ve WIFI radyasyonu olmadan nasıl döngü yapabilirim?

Birçok kullanıcı geceleri telefonu uçak moduna alıyor. Döngünün uyurken sizi desteklemesini istiyorsanız, aşağıdaki şekilde ilerleyin (bu yalnızca xDrip+ veya ['Kendi Dexcom Uygulamanızı Oluşturun'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) gibi yerel bir KŞ kaynağıyla çalışır, KŞ okumalarını Nightscout aracılığıyla alırsanız çalışmayacaktır):

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

Klinisyenlerinizle AndroidAPS ve DIY döngüsü hakkında bazı bilgileri paylaşmak istiyorsanız, [klinisyenler için AndroidAPS kılavuzunu](../Resources/clinician-guide-to-AndroidAPS.md) yazdırabilirsiniz.

### Endokrinologunuzla tıbbi randevu

#### Raporlama

Nightscout raporlarınızı (https://YOUR-NS-SITE.com/report) gösterebilir veya [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)'ı kontrol edebilirsiniz.

# Discord'ta sıkça sorulan sorular ve cevapları...

## Benim problemim burada listelenmemiş.

[Yardım almak için bilgi.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Sorunum burada listelenmiyor ama çözümü buldum

[Yardım almak için bilgi.](../Where-To-Go-For-Help/Connect-with-other-users#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Çözümünüzü bu listeye eklememizi bize hatırlatın!**

## AAPS stops everyday around the same time.

Google Play Protect'i durdurun. "Temizleme" uygulamalarını (yani CCleaner vb.) kontrol edin ve bunları kaldırın. AAPS / 3 nokta menüsü / Hakkında / tüm pil optimizasyonlarını durdurmak için "Uygulamayı arka planda çalışmaya devam et" bağlantısını izleyin.

## Yedeklemelerimi nasıl organize edebilirim?

Ayarları çok düzenli olarak dışa aktarın: her pod değişikliğinden sonra, profilinizi değiştirdikten sonra, bir görevi doğruladığınızda, pompanızı değiştirirseniz… Hiçbir şey değişmese bile ayda bir dışa aktarın. Birkaç eski dışa aktarma dosyasını saklayın.

Bir internet sürücüsüne kopyalayın (Dropbox, Google vb.): Telefonunuza uygulama yüklemek için kullandığınız tüm apk'ler (AAPS, xDrip, BYODA, Yamalı LibreLink…) ve tüm uygulamalarınızdan dışa aktarılan ayar dosyaları.

## Uygulamayı oluştururken sorunlarım, hatalarım var.

Lütfen

- tipik hatalar için [Android Studio'da Sorun Giderme](../Installing-AndroidAPS/troubleshooting_androidstudio#troubleshooting-android-studio)'yi kontrol edin ve
- [adım adım izlenecek yol](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po) ile ilgili ipuçları.

## Bir göreve takıldım ve yardıma ihtiyacım var.

Soru ve cevapları ekran görüntüsü alın. Discord AAPS kanalına yapıştırın. Hangi seçenekleri seçtiğinizi (veya seçmediğinizi) ve nedenini söylemeyi unutmayın. İpuçları ve yardım alacaksınız ancak yanıtları bulmanız gerekecek.

## AAPS v2.8.x'te parola nasıl sıfırlanır?

Hamburger menüsünü açın, Yapılandırma sihirbazını başlatın ve sorulduğunda yeni şifreyi girin. Şifre aşamasından sonra sihirbazdan çıkabilirsiniz.

## How to reset the password in AAPS v3.x

If you forgot your password: Close AAPS. Put an empty file named PasswordReset (without any extensions) in phone_main_memory/AAPS/extra directory. Restart AAPS. The new AAPS password is the serial number of your pump. The serial for the Omnipod DASH pod is 4241. You can change the password via 3 dots menu, configuration wizard, unlock parameters.

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alert: Running dev version. Closed loop is disabled

AndroidAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AndroidAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AndroidAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AndroidAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AndroidAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Pump unreachable alerts several times a day or at night.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the NSClient remote app

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

To enable NSClient remote functionality you must: 1) Install the NSClient remote app (the version should match the version of AAPS being used) 2) Run the NSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and NSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPS NSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or NSClient remote.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.