# APS ve AAPS'e giriş

```{contents} In this page
:backlinks: entry
:depth: 2
```

## “Yapay Pankreas Sistemi” nedir?

İnsan pankreası, kan şekerini düzenlemenin yanında daha birçok iş yapar. Ancak **“Yapay Pankreas Sistemi” (APS)** terimi genellikle kan şekeri seviyelerini otomatik olarak sağlıklı sınırlar içinde tutmaya çalışan bir sistemi anlatır.

Bunu yapmanın en temel yolu şudur: **glikoz seviyelerini** ölçmek, bu değerlerle **hesaplamalar** yapmak ve sonra vücuda (tahmin edilen) doğru miktarda **insülin** vermek. Hesaplamayı birkaç dakikada bir, günün 24 saati, haftanın 7 günü tekrarlar. Müdahale veya dikkat gerektiğinde kullanıcıyı bilgilendirmek için **alarmlar** ve **uyarılar** kullanır. Bu sistem genellikle bir **glikoz sensörü**, bir **insülin pompası** ve hesaplamaları yapan bir **kontrol biriminden** oluşur. **AAPS**'te ve diğer açık kaynak sistemlerde kontrol birimi, telefondaki bir uygulamadır. Çoğu ticari sistemde bu, pompanın içine yerleştirilmiş bir yazılımdır; telefon uygulaması ise esas olarak görüntüleme ve kontrol için kullanılır.

Kapalı döngü sistemlerinin nasıl geliştiği ve nasıl çalıştığı hakkında arka plan bilgisi için bu 2022 tarihli derleme makalesi iyi bir başlangıç noktasıdır. Bu makalenin bugün mevcut olan sistemlerin çoğundan önce yazıldığını unutmayın; bu yüzden şu anda piyasada ne olduğu konusunda bir rehber değildir:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

“Çift hormonlu” olarak adlandırılan sistemler, ciddi hipoları önlemek ve daha da sıkı bir kan şekeri kontrolü sağlamak amacıyla insülinle birlikte glukagon da verir. Bu türden ilk sistem Avrupa'da onaylanmıştır, ancak yalnızca çalışmalar ve projeler aracılığıyla sağlanmaktadır; diğerleri ise hâlâ geliştirme aşamasındadır. Henüz hiçbiri genel satışta değildir.

Yapay pankreas, [“diyabetiniz için bir otomatik pilot”](https://www.artificialpancreasbook.com/) olarak düşünülebilir. Bu ne anlama gelir?

Bir uçakta otomatik pilot, insan pilotun işinin tamamını yapmaz; pilot uçuşun tamamında uyuyamaz. Otomatik pilot, pilotun işine yardım eder. Pilotu uçağı sürekli yönetme yükünden kurtarır ve pilotun daha genel izlemeye odaklanmasını sağlar. Otomatik pilot çeşitli sensörlerden sinyaller alır; bir bilgisayar bu verileri pilotun belirlediği değerlerle birlikte değerlendirir, gerekli ayarlamaları yapar ve olası sorunlar konusunda pilotu uyarır. Pilot artık sürekli karar vermek zorunda kalmaz; bu benzetme **AAPS** için de geçerlidir.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Hibrit kapalı döngü ne demektir?

Tip 1 diyabet için en iyi çözüm “işlevsel bir tedavi” olurdu (muhtemelen bağışıklık sisteminden korunan pankreas hücrelerinin vücuda yerleştirilmesi). Tip 1 diyabetli (T1D) topluluk bunu beklerken, “tam kapalı döngü” bir yapay pankreas muhtemelen en iyi ikinci seçenektir. Bu, kullanıcıdan hiçbir girdi gerektirmeyen (örneğin öğünler için bolus yapmak veya egzersizi bildirmek gibi) ve kan şekeri seviyelerini iyi düzenleyen teknolojik bir sistemdir. Günlük kullanımdaki sistemlerin neredeyse hepsi “hibrit” kapalı döngüdür, çünkü otomatik teknoloji ile kullanıcı girdisinin bir birleşimini kullanır. İlk tam kapalı döngü sistemleri 2026'da Avrupa'da onaylandı, ancak henüz hiçbiri yaygın olarak bulunmamaktadır.

## Döngü kullanımı nasıl ve neden başladı?

Tip 1 diyabetli (T1D) kişiler için ticari teknolojinin gelişimi çok yavaştır. 2013 yılında T1D topluluğu #WeAreNotWaiting (Beklemiyoruz) hareketini kurdu. Kan şekeri kontrolünü, güvenliği ve yaşam kalitesini iyileştirmek için mevcut onaylı teknolojiyi (insülin pompaları ve sensörler) kullanarak sistemleri kendileri geliştirdiler. Bunlar, sağlık kurumları (FDA, NHS vb.) tarafından resmi olarak onaylanmadıkları için OS-AID (Open-Source Automated Insulin Delivery, açık kaynak otomatik insülin iletimi) sistemleri (eskiden DIY, kendin yap sistemleri) olarak bilinir. Dört ana OS-AID sistemi mevcuttur: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) ve [Trio](https://triodocs.org).

OS-AID döngüsünün temellerini anlamanın harika bir yolu, Dana Lewis'in “Automated Insulin Delivery” kitabını okumaktır. Kitaba [buradan](https://www.artificialpancreasbook.com/) ücretsiz olarak erişebilirsiniz (veya basılı bir kopyasını satın alabilirsiniz). **AAPS**'in temel aldığı [OpenAPS](https://openaps.org/what-is-openaps/) hakkında daha fazla bilgi edinmek istiyorsanız, [OpenAPS web sitesi](https://openaps.org/what-is-openaps/) çok iyi bir kaynaktır.

Birkaç ticari hibrit kapalı döngü sistemi de piyasaya sürülmüştür. Bunlar OS-AID sistemlerinden çok farklıdır; bunun ana nedeni, birçoğunun önceki günlerdeki insülin ihtiyacınıza göre verilen insülin miktarını ayarlayan bir “öğrenen algoritma” içermesidir. OS-AID topluluğundaki birçok kişi ticari sistemleri zaten denemiş ve kendi OS-AID sistemleriyle karşılaştırmıştır. Farklı sistemlerin nasıl karşılaştırıldığı hakkında daha fazla bilgiyi o sistemlere ait Facebook gruplarında, [AAPS Facebook grubunda](https://www.facebook.com/groups/AndroidAPSUsers/) veya [Discord](https://discord.com/invite/4fQUWHZ4Mw)'da sorarak öğrenebilirsiniz.

## Android APS (AAPS) nedir?

![image](../images/basic-outline-of-AAPS.png)

**Şekil 1**. Android APS (Yapay Pankreas Sistemi), AAPS'in temel yapısı.

Android APS (**AAPS**), hibrit kapalı döngü sistemi veya Yapay Pankreas Sistemidir (APS). İnsülin dozu hesaplamalarını, #WeAreNotWaiting T1D topluluğu tarafından geliştirilen, kendini kanıtlamış [OpenAPS](https://openaps.org/) algoritmalarını (bir kurallar dizisi) kullanarak yapar.

OpenAPS yalnızca bazı eski insülin pompalarıyla uyumlu olduğu için, **AAPS** (daha geniş bir insülin pompası yelpazesiyle kullanılabilir) ilk olarak 2016'da tip 1 diyabetli bir aile üyesi için geliştirildi. O ilk günlerden beri **AAPS**, tip 1 diyabet dünyasıyla bağı olan gönüllü yazılım geliştiricilerden ve başka meraklılardan oluşan bir ekip tarafından sürekli geliştirilmekte ve iyileştirilmektedir. Bugün **AAPS** dünya çapında binlerce kişi tarafından kullanılmaktadır. Son derece özelleştirilebilir ve çok yönlü bir sistemdir; açık kaynak olduğu için diğer birçok açık kaynak diyabet yazılımı ve platformuyla da kolayca uyumludur. Mevcut **AAPS** sisteminin temel bileşenleri yukarıdaki **Şekil 1**'de gösterilmiştir.



## AAPS'in temel bileşenleri nelerdir?

AAPS'in “beyni”, kendi oluşturduğunuz bir **uygulamadır**. Bunun için adım adım ayrıntılı talimatlar vardır. Ardından **AAPS  uygulamasını** [uyumlu](../Getting-Started/Phones.md) bir **Android akıllı telefona** (**1**) kurarsınız. Bazı kullanıcılar döngülerini ana telefonlarından ayrı bir telefonda çalıştırmayı tercih eder. Yani hayatınızdaki diğer her şey için Android telefon kullanmak zorunda değilsiniz; Android telefon yalnızca AAPS döngünüzü çalıştırmak için gereklidir.

**Android akıllı telefonda** **AAPS**'in yanında başka bir uygulamanın da kurulu olması gerekir. Bu [ek uygulama](../Getting-Started/CompatiblesCgms.md), bir sensörden (**2**) Bluetooth ile glikoz verilerini alır ve ardından bu verileri telefonun içinde **AAPS uygulamasına** gönderir.

**AAPS uygulaması**, OpenAPS'ten gelen bir karar verme sürecini (**algoritma**) kullanır. Yeni başlayanlar temel **oref0** algoritmasıyla başlar; AAPS'te ilerledikçe daha yeni olan **oref1** algoritmasına geçmek mümkündür. Hangi algoritmayı (oref0 veya oref1) kullanacağınız, sizin durumunuza hangisinin daha uygun olduğuna bağlıdır.  Her iki durumda da algoritma birçok faktörü dikkate alır ve sensörden her yeni ölçüm geldiğinde hızlı hesaplamalar yapar. Algoritma daha sonra insülin pompasına (**3**) ne kadar insülin vereceğine dair talimatları Bluetooth ile gönderir. Tüm bilgiler mobil veri veya Wi-Fi ile internete (**4**) gönderilebilir. Bu veriler istenirse takipçilerle de paylaşılabilir ve/veya analiz için toplanabilir. İsteğe bağlı olarak, verilerinizi bir bakışta görmek ve bazı saatlerle **AAPS**'e temel komutlar göndermek için telefonla bir [akıllı saat](../Getting-Started/Watches.md) (**5**) de eşleştirebilirsiniz.

## AAPS sisteminin avantajları nelerdir?

**AAPS** tarafından kullanılan OpenAPS algoritması, kullanıcının tanımladığı parametrelere göre (en önemlileri bazal oranlar, insülin duyarlılık faktörleri, insülin-karbonhidrat oranları, insülin etki süresi vb.) kullanıcı girdisi olmadan kan şekeri seviyelerini kontrol eder ve yeni sensör verilerine her 5 dakikada bir tepki verir.

**AAPS** kullanmanın bildirilen avantajlarından bazıları; ince ayar yapılabilen çok sayıda seçenek, **Otomasyonlar** ve sistemin hasta/bakım veren için daha şeffaf olmasıdır. Bu, diyabetiniz (veya bakımını yaptığınız kişinin diyabeti) üzerinde daha iyi kontrol sağlayabilir; bu da daha iyi bir yaşam kalitesi ve daha fazla iç huzuru getirebilir.

Zaman ayırdığınızda **AAPS** şunları sağlayabilir:

- tip 1 diyabeti yönetmenin stresini ve yükünü hafifletmek;

- tip 1 diyabetin getirdiği sayısız rutin kararı azaltmak;

- hipo tedavisi ihtiyacını azaltabilen ve hiperglisemi ataklarını azaltan, gerçek zamanlı verilere dayalı kişisel ve dinamik insülin dozlaması;

- insülin yönetimi hakkında daha fazla bilgi ve ayarlarınıza daha iyi ince ayar yapma konusunda daha fazla güven;

- yaşam tarzınıza uyacak şekilde otomatik ayarlar (**otomasyonlar**) oluşturabilme;

- daha iyi uyku kalitesi ve gece müdahalelerinin sıklığında genel bir azalma;

- tip 1 diyabetlilerin bakımını yapanlar için insülin iletiminin uzaktan izlenmesi ve yönetilmesi; ve

- **AAPS** tarafından kontrol edilen bir Android telefon kullanarak taşınabilir tüm diyabet ekipmanlarınızın (sürekli glikoz monitörü alıcısı ve insülin kontrol cihazları) tek bir yerde toplanması.


Sonuçta **AAPS**, kişilerin diyabetlerini daha iyi yönetmelerini sağlayarak kan şekerinin dengelenmesine ve uzun vadeli sağlık sonuçlarının iyileşmesine yardımcı olabilir.

### Belirli avantajlar şunlardır:

#### 1) Yerleşik güvenlik
oref0 ve oref1 olarak bilinen algoritmaların güvenlik özellikleri hakkında okumak için [buraya tıklayın](https://openaps.org/reference-design/). Kullanıcı kendi güvenlik kısıtlamalarını kendisi kontrol eder.

#### 2) Donanım esnekliği

**AAPS** çok çeşitli insülin pompaları ve sensörlerle çalışır ve hayat değiştikçe esneklik sunar. Örneğin Dexcom sensör bandının yapıştırıcısına alerji geliştirirseniz, bunun yerine bir Libre sensör kullanmaya geçebilirsiniz. Kullanıcıların donanımlarını değiştirmek için **AAPS** uygulamasını yeniden oluşturması veya yeniden kurması gerekmez; **Konfigürasyon** içinde farklı bir pompa veya KŞ kaynağı seçmeleri yeterlidir. **AAPS** belirli pompa sürücülerinden bağımsızdır ve ayrıca bir "sanal pompa" içerir; böylece kullanıcılar sistemi kendi üzerlerinde kullanmadan önce güvenle deneme yapabilir.

#### 3) Geniş parametrelerle son derece özelleştirilebilir

Kullanıcılar modülleri veya işlevleri kolayca ekleyip kaldırabilir ve **AAPS** hem açık hem de kapalı döngü modunda kullanılabilir. **AAPS** sistemiyle yapılabileceklere bazı örnekler:

 a) Yemekten 30 dk önce daha düşük bir **KŞ** hedefi ayarlayabilme; hedefi 72 mg/dL (4,0 mmol/L) kadar düşük ayarlayabilirsiniz.

 b) Yüksek kan şekerine yol açan insülin direnciniz varsa **AAPS**, KŞ 8 mmol/L (144 mg/dL) üzerine çıktığında devreye giren bir **otomasyon** kuralı ayarlamanıza izin verir. Bu kural örneğin %120'lik bir profile geçer (normal **profil** ayarınıza göre bazalda %20 artış olur ve diğer faktörler de güçlenir). Otomasyon, ayarladığınız zamanlamaya göre devam eder. Böyle bir otomasyon yalnızca haftanın belirli günlerinde, günün belirli saatlerinde ve hatta belirli konumlarda etkin olacak şekilde ayarlanabilir.

 c) Çocuğunuz önceden haber vermeden trambolinde zıplıyorsa **AAPS**, insülini doğrudan telefon üzerinden belirli bir süre için askıya almanıza izin verir.

 d) Yüzmek için bağlantısı kesilmiş hortumlu bir pompayı yeniden bağladıktan sonra **AAPS**, bağlantı kesikken kaçırdığınız bazal insülini hesaplar ve mevcut KŞ değerinize göre dikkatlice verir. Gerekmeyen insülin, kaçırılan bazalı “iptal ederek” kolayca geçersiz kılınabilir.

 e) **AAPS**, farklı durumlar için farklı profiller ayarlamanıza ve bunlar arasında kolayca geçiş yapmanıza olanak tanır. Örneğin, yüksek KŞ'yi algoritmanın daha hızlı düşürmesini sağlayan özellikler (süper mikro boluslar (“**SMB**”) ve bildirilmemiş öğünler (“**UAM**”) gibi), gece hipolarından endişe ediyorsanız yalnızca gündüz çalışacak şekilde ayarlanabilir.

Bunların hepsi örnektir; özelliklerin tamamı spor, hastalık, hormon döngüleri _vb._ dahil günlük yaşam için çok büyük esneklik sağlar. Sonuçta bu esnekliğin nasıl kullanılacağına kullanıcı karar verir ve herkese uyan tek bir otomasyon yoktur.

#### 4) Uzaktan izleme
Birden çok izleme kanalı mümkündür (Sugarmate, Dexcom Follow, xDrip, Android Auto _vb._). Bunlar ebeveynler/bakım verenler ve belirli durumlarda (uyurken/araç kullanırken) özelleştirilebilir uyarılara ihtiyaç duyan yetişkinler için faydalıdır. Bazı uygulamalarda (xDrip) alarmları tamamen kapatabilirsiniz; bu, henüz döngüde kullanmak istemediğiniz, “ıslanan” (soaking) veya yerine oturan yeni bir sensörünüz varsa çok işe yarar.

#### 5) Uzaktan kumanda
**AAPS**'in ticari sistemlere göre önemli bir avantajı, takipçilerin doğrulanmış metin (SMS) komutları veya eşleştirilmiş bir **AAPSClient** uygulaması kullanarak **AAPS** sistemine çok çeşitli komutlar gönderebilmesidir. Bu özellik, **AAPS** kullanan tip 1 diyabetli çocukların ebeveynleri tarafından yaygın olarak kullanılır.

Uzaktan kumanda özellikleri çok faydalı olabilir: örneğin oyun parkında çocuğunuz oyunla meşgulken, bir atıştırmalık için kendi telefonunuzdan ön bolus yapmak isteyebilirsiniz. Sistemi bir akıllı saatten (_örn._ Garmin) izlemek veya saatten temel komutlar göndermek de (_örn._ Samsung Galaxy Watch gibi bir Wear OS saati) mümkündür.

#### 6) Açık uygulama arayüzleri sayesinde ticari kısıtlama yok
**AAPS**'in kaynak kodunun her zaman incelenebilmesini sağlayan açık kaynak yaklaşımının ötesinde, açık programlama arayüzleri sunma ilkesi diğer geliştiricilere de yeni fikirlerle katkıda bulunma fırsatı verir. **AAPS**, Nightscout ile sıkı bir şekilde entegredir. Bu, geliştirmeyi hızlandırır ve kullanıcıların diyabetle yaşamı daha da kolaylaştıran özellikler eklemesine olanak tanır. Bu tür entegrasyonlara iyi örnekler şunlardır: [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) vb. Açık kaynak geliştiricileri ile ticari sistem geliştirenler arasında sürekli bir diyalog vardır. OS-AID yeniliklerinin çoğu zamanla ticari sistemler tarafından benimsenir. Ticari sistemlerde gelişmeler anlaşılır şekilde daha yavaştır; bunun bir nedeni, farklı şirketlerin sistemleri (pompalar, uygulamalar, sensörler _vb._) arasındaki arayüzlerin dikkatle müzakere edilmesi ve lisanslanması gerekmesidir. Bu durum, hasta için (veya çok özel bir ihtiyacı olan küçük bir hasta grubu için) kullanışlı olan ama kayda değer bir kâr getirmeyen yenilikleri de yavaşlatabilir.

#### 7) Ayrıntılı uygulama arayüzü
**AAPS** ile pompadaki insülin miktarı, kanül yaşı, sensör yaşı, pompa pil yaşı, aktif insülin (AİNS) _vb._ şeyleri takip etmek kolaydır. Birçok işlem pompanın kendisi yerine **AAPS** uygulaması üzerinden yapılabilir (pompayı doldurma (prime), pompa bağlantısını kesme _vb._); bu da pompanın cebinizde veya kemerinizde (veya bakımını yaptığınız kişinin cebinde ya da kemerinde) kalabileceği anlamına gelir.

#### 8) Erişilebilirlik ve uygun fiyat
**AAPS**, şu anda masrafları kendisi karşılayamayan veya finansmanı/sigortası olmayan kişilere, geliştirme açısından ticari sistemlerden kavramsal olarak yıllarca ileride olan bir hibrit kapalı döngü sistemine erişim sağlar. **AAPS**'i kurmak için şu anda bir raporlama sunucusuna (Nightscout veya Tidepool) ihtiyacınız vardır, ancak **AAPS** döngüsünün günlük çalışması için bu gerekli değildir. Birçok kişi verilerini toplamak ve uzaktan izleme için Nightscout'u kullanmaya devam eder. **AAPS**'in kendisi ücretsiz olsa da Nightscout'u çeşitli platformlardan biri üzerinden kurmak, istediğiniz destek düzeyine (karşılaştırma tablosuna bakın) ve kurulumdan sonra Nightscout'u kullanmaya devam etmek isteyip istemediğinize bağlı olarak bir ücret (0 € - 12 €) gerektirebilir. **AAPS**, çok çeşitli uygun fiyatlı (yaklaşık 150 €'dan başlayan) [Android telefonlarla](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) çalışır. Belirli bölgeler ve diller için farklı sürümler mevcuttur ve AAPS [görme engelli](#accessibility-for-users-aaps-who-are-partially-or-completely-blind) kişiler tarafından da kullanılabilir.

#### 9) Destek
Hiçbir otomatik insülin iletim sistemi kusursuz değildir. Ticari ve açık kaynak sistemler, hem iletişimde hem de geçici donanım arızalarında birçok ortak aksaklığı paylaşır. Dünyanın her yerinde **AAPS**'i tasarlayan, geliştiren ve şu anda kullanan AAPS kullanıcı topluluğundan Facebook, Discord ve GitHub üzerinden destek alabilirsiniz. Ticari APS sistemleri için de Facebook destek grupları ve klinik/ticari şirketlerden yardım vardır. Yaygın aksaklıklar, eğitim programının kalitesi ve sağlanan sürekli desteğin düzeyi hakkında geri bildirim almak için bu sistemlerin kullanıcılarıyla veya eski kullanıcılarıyla konuşmaya değer.

#### 10) Öngörülebilirlik, şeffaflık ve güvenlik
**AAPS** şeffaf, mantıklı ve öngörülebilirdir; bu da bir ayarın ne zaman yanlış olduğunu anlamayı ve onu buna göre düzeltmeyi kolaylaştırabilir. Sistemin tam olarak ne yaptığını, neden yaptığını görebilir ve çalışma sınırlarını belirleyebilirsiniz; bu da kontrolü (ve sorumluluğu) sizin elinize verir. Bu, kullanıcıya güven ve daha huzurlu bir uyku sağlayabilir.

#### 11) Tam kapalı döngü dahil, geliştirme (dev) modları üzerinden gelişmiş özelliklere erişim
Bu **AAPS** dokümantasyonu, **AAPS**'in ana **“master”** dalına odaklanır. Ancak araştırma ve geliştirme sürekli devam etmektedir. Daha deneyimli kullanıcılar **geliştirme** dalındaki deneysel özellikleri keşfetmek isteyebilir. Geliştirme alanındaki yenilikler, tam kapalı döngü stratejilerine (öğünler için bolus yapmak zorunda olmamak _vb._) ve genel olarak tip 1 diyabetle yaşamı olabildiğince kolaylaştırmaya odaklanır.

#### 12) Daha fazla iyileştirmeye kendiniz katkıda bulunabilme
Tip 1 diyabet çok yıpratıcı olabilir ve insanı yalnız hissettirebilir. Kendi diyabet teknolojiniz üzerinde kontrol sahibi olmak ve ilerleme kaydettiğiniz anda başkalarına yolculuklarında yardım ederek aldığınız yardımı başkalarına aktarabilmek gerçekten tatmin edici olabilir. Kendinizi eğitebilir, engelleri keşfedebilir, yeni gelişmeleri ve dokümantasyonu takip edebilir, hatta bunlara katkıda bulunabilirsiniz. Toplulukta aynı amaçla yola çıkmış, fikir alışverişi yapabileceğiniz ve birlikte çalışabileceğiniz başka kişiler de olacaktır. #WeAreNotWaiting hareketinin özü budur.

## AAPS, MDI ve açık döngü ile nasıl karşılaştırılır?

Çoklu günlük enjeksiyon (MDI, aşağıdaki **Şekil 2**'de (a)) genellikle günde bir kez uzun etkili bir insülin (_örn._ Tresiba) enjeksiyonu ve öğün zamanlarında veya düzeltmeler için daha hızlı etkili insülin (_örn._ Novorapid, Fiasp) enjeksiyonlarını içerir. Açık pompa tedavisi (b), hızlı etkili insülini önceden programlanmış oranlarda bazal olarak veren bir pompa kullanmayı ve öğün zamanlarında veya düzeltmeler için pompa üzerinden bolus yapmayı içerir. Döngü sisteminin temeli şudur: döngü uygulaması sensör glikoz verilerini kullanır; düşük şekere doğru gittiğinizi tahmin ettiğinde pompaya insülin iletimini durdurmasını söyler, glikoz seviyeniz yükseliyorsa ve çok yükseğe çıkacağı tahmin ediliyorsa size ek insülin verir (c). Bu şekil gerçek hayata göre çok basitleştirilmiş olsa da yaklaşımlar arasındaki temel farkları göstermeyi amaçlar. Bu üç yaklaşımın herhangi biriyle son derece iyi bir glikoz kontrolü elde etmek mümkündür.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Şekil 2**. (a) MDI, (b) açık döngü pompa tedavisi ve (c) hibrit kapalı döngü pompa tedavisine temel bakış.

## AAPS, diğer döngü sistemleriyle nasıl karşılaştırılır?

25 Haziran 2023 itibarıyla dört büyük açık kaynak kapalı döngü sistemi mevcuttur: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) ve [Trio](https://triodocs.org) (eski adıyla FreeAPS X). Farklı sistemlerin özellikleri aşağıdaki tabloda gösterilmiştir:


| Cihaz türü | Name                                                                     | [AAPS](https://wiki.aaps.app)              | [Döngü](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)               |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------ | -------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| Telefon    | Android                                                                  | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| Telefon    | iPhone                                                                   | ![mevcut değil](../images/unavailable.png) | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| Rig        | küçük bilgisayar (1)                                                     | ![mevcut değil](../images/unavailable.png) | ![mevcut değil](../images/unavailable.png)   | ![mevcut](../images/available.png)                    | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                      | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                     | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                       | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                      | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                      | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                            | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                              | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)         | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)              | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| PUMP       | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)             | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)            | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [Eski Medtronic](../CompatiblePumps/MedtronicPump.md)                    | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut](../images/available.png)                    | ![mevcut](../images/available.png)         |
| PUMP       | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                              | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| PUMP       | [CareLevo](../CompatiblePumps/CareLevo.md)                               | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| CGM        | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                    | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [Dexcom One](../CompatibleCgms/DexcomG6.md)                              | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                               | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut](../images/available.png)                    | ![mevcut](../images/available.png)         |
| CGM        | [Libre 3/3+](../CompatibleCgms/Libre3.md)                                | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [Libre 2/2+](../CompatibleCgms/Libre2.md)                                | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [Libre 1](../CompatibleCgms/Libre1.md)                                   | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [Eversense](../CompatibleCgms/Eversense.md)                              | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut değil](../images/unavailable.png)            | ![mevcut](../images/available.png)         |
| CGM        | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                             | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| CGM        | [PocTech](../CompatibleCgms/PocTech.md)                                  | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| CGM        | [Ottai](../CompatibleCgms/OttaiM8.md)                                    | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| CGM        | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                               | ![mevcut](../images/available.png)         | ![mevcut değil](../images/unavailable.png)   | ![mevcut değil](../images/unavailable.png)            | ![mevcut değil](../images/unavailable.png) |
| CGM        | [KŞ kaynağı olarak Nightscout](../CompatibleCgms/CgmNightscoutUpload.md) | ![mevcut](../images/available.png)         | ![mevcut](../images/available.png)           | ![mevcut](../images/available.png)                    | ![mevcut](../images/available.png)         |

_Tablo notları:_
1. **Rig**, ekranı olmayan ve yanınızda taşıdığınız küçük bir bilgisayardır. Desteklenen cihaz türlerinden biri Intel Edison + Explorer Board, diğeri ise Raspberry Pi + Explorer HAT veya Adafruit RFM69HCW Bonnet'tir. İlk APS sistemleri bu yapıya dayanıyordu, çünkü cep telefonları gerekli algoritmaları çalıştıracak kapasitede değildi. Cep telefonlarında kurulum kolaylaştığı ve telefonların kendi ekranı olduğu için bu sistemlerin kullanımı azalmıştır. Intel, Intel Edison'un satışını da durdurmuştur. Mükemmel OpenAPS algoritmaları **oref0** ve **oref1** artık AAPS ve Trio'ya dahil edilmiştir.


Açık kaynak döngü hakkında pratik rehberlik içeren uluslararası, hakemli bir uzlaşı bildirgesi, sağlık profesyonelleri tarafından ve sağlık profesyonelleri için yazılmış ve 2022'de önde gelen bir tıp dergisinde yayımlanmıştır: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Okumaya kesinlikle değer (diyabet kliniğiniz için de) ve farklı açık kaynak hibrit kapalı döngü sistemleri arasındaki temel teknik farkları özetler.

Bir sistemi kullanmadan veya onu kullanan başkalarıyla konuşmadan onu gerçekten “hissetmek” zordur; bu yüzden Facebook/Discord'da başkalarına ulaşıp sorun. Çoğu kişi **AAPS**'i diğer hibrit kapalı döngü sistemlerine (özellikle ticari sistemlere) kıyasla son derece gelişmiş bulur; yukarıda anlatıldığı gibi çok sayıda özelleştirilebilir ayar ve özellik içerir. Bazı kişiler bunu başlangıçta biraz bunaltıcı bulabilir, ancak tüm olasılıkları bir anda incelemek için acele etmeye gerek yoktur. İstediğiniz kadar yavaş veya hızlı ilerleyebilirsiniz ve her adımda yardım alabilirsiniz.


## AAPS yapay zekâ veya öğrenen bir algoritma kullanıyor mu?

**AAPS**'in mevcut sürümü (4.0) hiçbir makine öğrenimi algoritması, çok parametreli insülin yanıt modeli veya yapay zekâ içermez. Bu nedenle sistemin çalışma şekli açık ve şeffaftır; yalnızca uzmanlar tarafından değil, klinisyenler ve hastalar tarafından da anlaşılabilir. Bu aynı zamanda şu anlama gelir: programınız çok değişkense (örneğin işte stresli bir haftadan rahatlatıcı bir tatile geçiyorsanız) ve önemli ölçüde farklı miktarda insüline ihtiyaç duymanız muhtemelse, **AAPS**'i hemen daha zayıf/daha güçlü özelleştirilmiş bir profille çalışacak şekilde değiştirebilirsiniz. ‘Öğrenen bir sistem’ bu ayarlamayı sizin için otomatik olarak yapar, ancak insülin iletimini ayarlaması muhtemelen daha uzun sürer.

(which-system-is-right-for-me-or-my-dependent)=
## Benim veya bakımını yaptığım kişi için hangi sistem doğru?

Pratikte sistem seçiminiz çoğu zaman hâlihazırda sahip olduğunuz veya sağlık hizmeti sağlayıcınızdan alabileceğiniz pompa ile telefon tercihinize (Apple veya Android) bağlıdır. Henüz bir pompanız yoksa en geniş sistem seçeneğine sahipsiniz. Teknoloji sürekli gelişiyor; bazı pompaların üretimi durduruluyor, yeni pompalar ve sensörler piyasaya çıkıyor. Açık kaynak sistemlerin çoğu ana sensörlerle (Libre ve Dexcom) çalışır veya yeni sensörler piyasaya çıktıktan yaklaşık bir yıl sonra onlarla çalışacak şekilde hızla uyarlanır (güvenlik ve kararlılık testleri için biraz gecikmeyle).

**AAPS** kullanıcılarının çoğu, geceleri uyku sırasında bazal oranları otomatik olarak ayarlayabilen bir sisteme sahip olmanın sonucu olarak hedef aralıkta daha fazla süre, HbA1c düşüşü ve yaşam kalitesinde iyileşme bildirmektedir; bu, hibrit kapalı döngü sistemlerinin çoğu için geçerlidir. Bazı kişiler çok fazla özelleştirilemeyen, çok basit bir sistemi tercih eder (bu durumda ticari bir sistemi tercih edebilirsiniz); bazıları ise bu kontrol eksikliğini çok sinir bozucu bulur (bu durumda açık kaynak bir sistemi tercih edebilirsiniz). Siz (veya bakımını yaptığınız kişi) yeni tanı aldıysanız, yaygın bir yol önce MDI ve bir glikoz sensörü kullanmaya alışmak, sonra döngü potansiyeli olan bir pompaya, sonra da **AAPS**'e geçmektir; ancak bazı kişiler (özellikle küçük çocuklar) doğrudan pompaya geçebilir.

**AAPS** kullanıcısının, topluluktan yardım alarak sorunları kendisi gidermek ve düzeltmek için proaktif olması gerektiğini belirtmek önemlidir. Bu, ticari bir sistem kullanırken sahip olunan düşünce yapısından çok farklıdır. **AAPS** ile kullanıcının kontrolü daha fazladır, ama sorumluluğu da daha fazladır ve bu durumu benimsemesi gerekir.

## AAPS gibi açık kaynak sistemleri kullanmak güvenli mi?

### AAPS sisteminin güvenliği
Daha doğru soru muhtemelen şudur: “Mevcut insülin iletim sistemime **kıyasla** güvenli mi?” Çünkü hiçbir insülin iletim yöntemi risksiz değildir. **AAPS**'te birçok kontrol ve denge mekanizması vardır. Yakın tarihli bir [makale](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375), sistemin ne kadar güvenli ve etkili olduğunu nesnel olarak test etmenin etkili bir yolu olan bilgisayar simülasyonlu bir düzende **AAPS** kullanımını incelemiştir. Daha genel olarak, dünya çapında binlerce kişi açık kaynak otomatik insülin iletim sistemlerini kullanmaktadır ve kullanım dünya genelinde artmaya devam etmektedir.

Radyo iletişimi kullanan her cihaz hacklenebilir; bu, döngü kullanılmayan bir insülin pompası için de geçerlidir. Şu anda, diyabetle ilgili tıbbi ekipmanını hackleyerek kişilere zarar vermeye çalışan birinden haberimiz yoktur. Yine de bu tür risklere karşı korunmanın birçok yolu vardır:

1.  Pompa ayarlarında hem izin verilen maks bolusu hem de maks geçici bazal ayarlarını en güvenli olduğuna inandığınız miktarlarla sınırlayın. Bunlar, kötü niyetli bir hacker'ın aşabileceğine inanmadığımız sert sınırlardır.

2.  CGM alarmlarınızı hem yüksek hem de düşük değerler için etkinleştirin.

3.  İnsülin iletiminizi çevrimiçi izleyin. Nightscout kullanıcıları, kötü niyetli bir saldırıdan çok daha olası olan durumlar dahil çok çeşitli durumlar için ek alarmlar ayarlayabilir. Nightscout, yüksek ve düşük değerlerin yanında, pompanın istendiği gibi çalıştığını doğrulamak için faydalı tanı verilerini de gösterebilir: mevcut AİNS, pompanın geçici bazal geçmişi, pompanın bolus geçmişi gibi. Ayrıca tahmin edilen yüksek ve düşük değerler, düşük insülin rezervuarı ve düşük pompa pili gibi istenmeyen durumlar için kullanıcıları önceden uyaracak şekilde yapılandırılabilir.

İnsülin pompanıza kötü niyetli bir saldırı yapılırsa, bu yöntemler riski önemli ölçüde azaltır. Her potansiyel **AAPS** kullanıcısı, **AAPS** kullanmanın risklerini başka bir sistem kullanmanın riskleriyle karşılaştırarak değerlendirmelidir.

#### Kan şekeri kontrolünü çok hızlı iyileştirmeyle ilgili güvenlik konuları

HbA1c'de hızlı bir düşüş ve daha iyi kan şekeri kontrolü cazip görünür. Ancak herhangi bir kapalı döngü sistemine başlayarak ortalama kan şekeri seviyelerini _çok hızlı_ düşürmek, gözler dahil kalıcı hasara ve hiç geçmeyen ağrılı nöropatiye neden olabilir. Bu hasar, seviyeleri daha yavaş düşürerek kolayca önlenebilir. Şu anda HbA1c değeriniz yüksekse ve AAPS'e (veya başka herhangi bir kapalı döngü sistemine) geçiyorsanız, başlamadan önce lütfen bu olası riski klinik ekibinizle konuşun ve onlarla bir zaman planı üzerinde anlaşın. Glikoz seviyelerinizi güvenli bir şekilde nasıl düşüreceğinize dair tıbbi literatür bağlantıları da içeren daha genel bilgiler [buradaki](#preparing-safety-first) güvenlik bölümünde verilmiştir.

#### Cihazlar, sarf malzemeleri ve diğer ilaçlarla ilgili tıbbi güvenlik

Yapay pankreas döngüsü için test edilmiş, tam çalışan, FDA veya CE onaylı bir insülin pompası ve CGM kullanın. Bu bileşenlerin donanımında veya yazılımında yapılan değişiklikler, beklenmeyen insülin iletimine ve dolayısıyla kullanıcı için önemli risklere yol açabilir. Bozuk, değiştirilmiş veya kendi yapımı insülin pompaları ya da CGM alıcıları bulursanız veya size teklif edilirse, bunları bir AAPS sistemi kurmak için kullanmayın.

Pompanızın ve CGM'inizin üreticisi tarafından onaylanmış aplikatör, kanül ve insülin kabı gibi orijinal sarf malzemelerini kullanın. Test edilmemiş veya modifiye edilmiş aksesuarların kullanılması, CGM Sisteminin yanlış olmasına ve insülin iletim hatalarına neden olabilir. İnsülin yanlış dozlandığında son derece tehlikelidir - lütfen sarf malzemelerinizle oynayarak hayatınızı tehlikeye atmayın.

**AAPS** kullanırken SGLT-2 inhibitörleri (gliflozinler) almayın, çünkü kan şekeri seviyelerini hesaplanamayacak şekilde düşürürler. Bu etkiyi, KŞ'yi yükseltmek için bazal oranları düşüren bir sistemle birleştirmek tehlikelidir; bununla ilgili daha fazla ayrıntı ana [güvenlik bölümünde](#preparing-safety-first) bulunmaktadır.

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## AAPS'i klinik ekibimle nasıl konuşabilirim?

Kullanıcıların, **AAPS** kullanma niyetlerini klinisyenleriyle konuşmaları önerilir. **AAPS**'i (veya bu konuda başka herhangi bir OS-AID döngüsünü) kullanmayı düşünüyorsanız, lütfen diyabet ekibinizle açık bir konuşma yapmaktan çekinmeyin. Hasta ile doktor arasında şeffaflık ve güven çok önemlidir.

### Önerilen yaklaşım:
CGM'ler, pompalar, hibrit döngüler ve ticari döngü gibi diyabet teknolojilerine ne kadar aşina olduklarını ve bunlara karşı tutumlarını öğrenmek için klinisyeninizle bir konuşma başlatın. Klinisyeninizin/endokrinoloğunuzun temel teknolojiden haberdar olması ve bölgesinde mevcut olan ticari döngü ürünlerindeki son gelişmeleri sizinle konuşmaya istekli olması gerekir.

#### Yerel örnekler

Klinisyenlerinizin/endokrinologlarınızın OS-AID döngüsüne ticari döngüye _kıyasla_ nasıl baktığını öğrenin ve bu alandaki bilgilerini değerlendirin. **AAPS**'e aşinalar mı ve OS-AID döngüsü kullanan hastalarla çalışma konusunda sizinle faydalı bir deneyim paylaşabilirler mi?

Ekibinizin bakımı altında zaten OS-AID döngüsü kullanan hasta olup olmadığını sorun. Hasta gizliliği nedeniyle doktorlar, kişinin onayını almadan başka hastaların bilgilerini size veremez. Ancak isterseniz, klinisyenin sizinle "anlaşabileceğinizi” düşündüğü OS-AID döngüsü kullanan bir hasta varsa, **sizin** iletişim bilgilerinizi o hastaya iletmelerini **isteyebilirsiniz**; böylece OS-AID döngüsü hakkında konuşmak için hastanın sizinle iletişime geçmesinden memnun olacağınızı belirtmiş olursunuz. Klinisyenler bunu yapmak zorunda değildir, ancak bazıları tip 1 diyabet yönetiminde akran desteğinin önemini bildikleri için bunu memnuniyetle yapar. Yerel, yardımsever OS-AID döngü kullanıcılarıyla tanışmak da faydalı olabilir. Bu elbette size kalmıştır ve tamamen gerekli değildir.

#### Ulusal ve uluslararası örnekler

**AAPS** ile döngü kullanmak konusunda ekibinizden destek görmediğinizi hissediyorsanız, aşağıdaki konuşma noktaları yardımcı olabilir:

a) **AAPS** sistemi hastalar ve onların bakımını yapanlar TARAFINDAN tasarlanmıştır. Her şeyden önce güvenlik için tasarlanmıştır, ancak aynı zamanda hastaların derin deneyimlerinden de yararlanır. Dünya çapında binlerce **AAPS** kullanıcısı vardır. Bu nedenle kliniğinizin hasta topluluğunda OS-AID döngüsü kullanan başka hastaların olması muhtemeldir (klinik bunu bilsin ya da bilmesin).

b) Uluslararası alanda önde gelen tıp dergisi [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_)'te yayımlanan güncel, hakemli rehber, OS-AID döngülerinin hedef aralıktaki süre dahil **güvenli** olduğunu ve **diyabet kontrolünü iyileştirmede etkili** olduğunu doğrulamıştır. [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) gibi önde gelen dergilerde OS-AID döngü topluluğunun ilerlemesini öne çıkaran düzenli makaleler yayımlanmaktadır.

c) **AAPS** ile başlamak, bir dizi görevi tamamlayarak “açık” döngü pompa tedavisinden düşük glikoz duraklatmaya ve oradan hibrit “kapalı” döngüye _kademeli_ bir geçişi içerir. Bu nedenle yapılandırılmış bir program vardır: kullanıcının döngüyü kapatmadan önce her aşamada belirli bir yetkinlik göstermesi ve temel ayarlarına (bazal, İDF ve IC) ince ayar yapması gerekir.

d) GitHub, Discord ve Facebook kapalı grupları aracılığıyla OS-AID topluluğundan teknik destek alabilirsiniz.

e) Klinik görüşmelerde **hem CGM hem de insülin döngü/pompa bilgilerini** birleşik raporlar olarak (Nightscout veya Tidepool üzerinden), çıktı olarak veya ekranda (dizüstü bilgisayar/tablet getirirseniz) sunabileceksiniz. Hem CGM hem de insülin verilerinin bir arada sunulması, klinisyeninizin raporlarınızı incelemek için ayırdığı zamanı daha verimli kullanmasını sağlar ve ilerlemenizi değerlendiren görüşmelere yardımcı olur.

f) Ekibiniz hâlâ güçlü bir şekilde karşı çıkıyorsa, klinisyeninize bu metinde bağlantısı verilen referans makalelerin çıktılarını verin ve onlara **AAPS** klinisyenler bölümünün bağlantısını verin: [Klinisyenler İçin – **AAPS**'e Genel Giriş ve Kılavuz](../UsefulLinks/ClinicianGuideToAaps.md)

#### Diğer klinisyenlerin OS-AID döngüsüne verdiği destek

[Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) dergisinde yayımlanan makale (King’s ile Guy’s and St Thomas’ NHS Foundation Trust ortak liderliğinde hazırlanmıştır; ortak liderlerden biri, Londra'daki King’s'ten danışman diyabet uzmanı ve onursal kıdemli öğretim görevlisi Dr Sufyan Hussain'dir) şunları sağlar:

a) OS-AID yapay pankreas sistemlerinin/açık kaynağın tip 1 diyabet için “güvenli ve etkili bir tedavi” seçeneği olduğuna dair profesyonellere **güvence** verir ve öneriler, görüşmeler, destek ve belgeleme konularında rehberlik sağlar;

b) Açık kaynak otomatik insülin iletim (“AID”) sistemlerinin, çeşitli yaş gruplarında, cinsiyetlerde ve topluluklarda hedef aralıktaki süreyi (TIR) artırırken kan glikoz konsantrasyonlarındaki değişkenliği ve hipo ve hiperglisemi ataklarının sayısını azaltabileceğinin **kabul edilmesi**;

c) Sağlık çalışanlarının, diyabetlerini açık kaynak bir AID sistemiyle yönetmeyi seçen tip 1 hastalarını veya onların bakımını yapanları **desteklemesi** gerektiğine dair **öneri**;

d) Sağlık çalışanlarının, mevcut açık kaynak AID sistemleri dahil, hastalara fayda sağlayabilecek tüm tedavi seçenekleri hakkında bilgi edinmeye çalışması gerektiğine dair öneri.  Sağlık profesyonellerinin kendilerini eğitecek kaynakları yoksa veya yasal ya da düzenleyici kaygıları varsa, bu kaynaklara sahip **diğer sağlık profesyonelleriyle işbirliği yapmayı veya ekip kurmayı** düşünmelidirler;

e) Tüm CGM kullanıcılarının her zaman **kendi sağlık verilerine** gerçek zamanlı ve açık erişimi olması gerektiğinin vurgulanması

f) Bu açık kaynak sistemlerin, ticari olarak satılan tıbbi teknolojilerle aynı düzenleyici değerlendirmelerden geçmediğinin ve ticari teknik destek olmadığının vurgulanması. Ancak **kapsamlı topluluk desteği mevcuttur**; ve

g) Bu tür açık kaynak sistemlerle etik ve etkili tedaviye izin verilmesi konusunda netlik sağlamak için **düzenlemelerin ve yasal çerçevelerin** güncellenmesi gerektiğine dair öneri.

[Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) dergisindeki başka bir makale de Birleşik Krallık Genel Tıp Konseyi'nin (General Medical Council) ‘onam rehberinin’ doktor ve hastaların kararları birlikte almasına büyük önem verdiğini vurgular. Doktor, OS-AID APS'in olası faydalarını, risklerini, yüklerini ve yan etkilerini açıklamalıdır ve hastaya baskı yapmadan belirli bir seçeneği önerebilir.

Sonuçta bu faktörleri, kendileri için önemli olan klinik dışı konularla birlikte değerlendirmek ve hangi tedavi seçeneğini kabul edeceğine (eğer kabul edecekse) karar vermek hastaya kalmıştır.

Bir doktor klinikte hastasının bir OS-AID sistemiyle döngü kullandığını fark ederse, hastanın kullandığı teknolojiyi kendisi reçete etmedi diye hastayı izleme yükümlülüğünden muaf olmaz; klinisyenler hastaları izlemeye devam etmelidir.

Doktorların (en azından Birleşik Krallık'ta) lisanssız ilaç reçete etmesi yasak değildir ve klinik takdirlerini kullanabilirler. Bu nedenle bir OS-AID APS'in belirli bir hasta için uygun olup olmadığına karar vermek için klinik muhakemelerini kullanmalı ve artılarını ve eksilerini hastayla konuşmalıdırlar.

#### Yukarıda atıfta bulunulan makaleler ve diğer faydalı bağlantılar ile tutum bildirgeleri aşağıda listelenmiştir:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health tutum bildirgesi, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada tutumu ve kılavuzu) [_Canadian Journal of Diabetes_ (2023), _47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Hollanda (EN/NL) - klinisyenler için - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. OPEN projesinin sonuçları: Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (yeni, kendin yap yapay pankreas teknolojisiyle ilgili hasta kanıtlarının sonuçları) üzerine AB tarafından finanse edilen bir proje (https://www.open-diabetes.eu/publications)



## Neden AAPS'i indirip hemen kullanamıyorum?

**AAPS** uygulaması Google Play'de sunulmaz - yasal nedenlerle uygulamayı kaynak kodundan kendiniz oluşturmanız gerekir. **AAPS** lisanssızdır, yani hiçbir ülkede hiçbir düzenleyici kurumun onayına sahip değildir. **AAPS** kullanmak, kişinin kendi üzerinde tıbbi bir deney yapması olarak kabul edilir ve risk tamamen kullanıcıya aittir.

Sistemi kurmak sabır, kararlılık ve teknik bilginin adım adım gelişmesini gerektirir. Tüm bilgi ve desteği bu dokümanlarda, internetin başka yerlerinde veya bunu daha önce yapmış kişilerden bulabilirsiniz. Dünya çapında binlerce kişi **AAPS**'i başarıyla oluşturmuş ve şu anda kullanmaktadır.

**AAPS** geliştiricileri güvenliği son derece ciddiye alır ve başkalarının da **AAPS**'i kullanırken iyi bir deneyim yaşamasını ister. Bu nedenle her kullanıcının (veya kullanıcı çocuksa bakım verenin) şunları yapması çok önemlidir:

- “Döngüyü kapatmadan” önce makul derecede iyi kişisel ayarlara sahip olmak ve **AAPS**'in nasıl çalıştığına dair temel bilgileri anlamak için AAPS sistemini kendisi oluşturur ve **görevleri** tamamlar;

- gerektiğinde hızlıca yeniden kurulum yapabilmek için önemli dosyaları (anahtar deposu (keystore) ve ayarlar .json dosyası gibi) dışa aktarıp güvenli bir yere kaydederek sistemini yedekler;

- yeni master sürümleri yayımlandıkça bunlara günceller; ve

- maintains and monitors the system to ensure it is working properly.

## AAPS sisteminin bağlantı yapısı nasıldır?

**Şekil 3 (aşağıda)**, sistemle etkileşime giren takipçilere ihtiyaç duymayan bir kullanıcı için **AAPS** sisteminin bir örneğini gösterir. Gösterilmeyen başka açık kaynak yazılımlar ve platformlar da entegre edilebilir.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Şekil 4 (aşağıda)**, takipçileri olan ve sistemi uzaktan izlemesi ve ayarlaması gereken bir kullanıcı (tip 1 diyabetli bir çocuk gibi) için **AAPS** sisteminin tüm olanaklarını gösterir. Gösterilmeyen başka açık kaynak yazılımlar ve platformlar da entegre edilebilir.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## AAPS nasıl sürekli geliştirilip iyileştiriliyor?

**AAPS** kullanıcılarının çoğu, topluluğa sunulmadan önce hatalar ve sorunlar için test edilmiş, tamamen test edilmiş **master** AAPS sürümünü kullanır. Arka planda geliştiriciler yeni iyileştirmeleri dener ve bunları, kısa sürede hata düzeltme güncellemeleri yapmaya istekli bir kullanıcı topluluğuyla birlikte **AAPS**'in “geliştirici” (**dev**) sürümlerinde test eder. İyileştirmeler iyi çalışırsa, yeni bir “master” **AAPS** sürümü olarak yayımlanır. Her yeni master sürümü Facebook grubunda duyurulur; böylece **AAPS** kullanıcılarının çoğu yeni master sürümü hakkında okuyabilir ve ona güncelleyebilir.

Bazı deneyimli ve kendine güvenen **AAPS** kullanıcıları yeni ortaya çıkan teknolojilerle ve **AAPS** uygulamasının dev sürümleriyle deneyler yapar. Daha az maceracı kullanıcılar bunları kendileri yapmak zorunda kalmadan okuyabilir ve bu ilginç olabilir! Kullanıcılar bu deneyleri genellikle Facebook grubunda da paylaşır.

Bu deneylerin bazıları ve yeni teknolojiler hakkındaki tartışmalar hakkında burada daha fazla bilgi bulabilirsiniz:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## AAPS'ten kimler yararlanabilir?

| Kullanıcı türü                                        |
| ----------------------------------------------------- |
| ✔️ tip 1 diyabetli                                    |
| ✔️ tip 1 diyabetli birinin bakım vereni veya ebeveyni |
| ✔️ görme engelli tip 1 diyabetli kullanıcılar         |
| ✔️ *klinisyenler ve sağlık profesyonelleri            |

Yukarıdaki tablo, kullanıcının hem sürekli glikoz monitörüne hem de insülin pompasına erişimi olduğunu varsayar.

***AAPS**'teki tüm veriler, veri paylaşım platformları aracılığıyla sağlık profesyonellerine sunulabilir. Bunlardan biri, CGM verilerinin, insülin iletiminin, karbonhidrat girişlerinin, tahminlerin ve ayarların kaydını tutan ve gerçek zamanlı izlemesini sağlayan Nightscout'tur. Nightscout kayıtları, sağlık profesyonellerinin tip 1 hastalarıyla glisemik kontrol ve davranışsal konular hakkında daha doğru verilerle konuşmasına yardımcı olabilecek günlük ve haftalık raporlar içerir.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Kısmen veya tamamen görme engelli AAPS kullanıcıları için erişilebilirlik

#### AAPS'in günlük kullanımı:
AAPS görme engelli kişiler tarafından kullanılabilir. Android cihazlarda işletim sisteminin TalkBack adlı bir programı vardır. Bu program, işletim sisteminin bir parçası olarak sesli çıktı ile ekranda yön bulmayı sağlar. TalkBack kullanarak hem akıllı telefonunuzu hem de AAPS'i görmeye ihtiyaç duymadan kullanabilirsiniz.

#### AAPS uygulamasını oluşturma:
Kullanıcı olarak AAPS uygulamasını Android Studio'da oluşturacaksınız. Birçok kişi bu amaçla Microsoft Windows kullanır; Windows'ta TalkBack'e benzer bir ekran okuyucu vardır. Android Studio bir Java uygulaması olduğu için Denetim Masası'nda (Control Panel) “Java Access Bridge” bileşeninin etkinleştirilmesi gerekir. Otherwise, the screen reader of the PC will not speak in Android Studio.

Bunu nasıl yapacağınız işletim sisteminize bağlıdır; aşağıda iki yöntem anlatılmıştır:

1) Windows Başlat menüsünde arama alanına “Control Panel” (Denetim Masası) yazın ve Enter ile açın. Şu pencere açılır: “All Control Panel Items” (Tüm Denetim Masası Öğeleri).

"Ease of Access Centre" (Erişim Kolaylığı Merkezi) öğesini açın.

Ardından “Use computer without a display” (Bilgisayarı ekran olmadan kullan) öğesini Enter ile açın.

**Hear text read aloud** (Metni sesli dinle) altında **turn on narrator** (Ekran Okuyucusu'nu aç) ve **turn on audio display** (sesli ekranı aç) seçeneklerini seçin, ardından **apply** (Uygula) düğmesine tıklayın.

or:

2) Windows tuşuna basın, arama alanına “Control Panel” (Denetim Masası) yazın ve Enter ile açın. Şu pencere açılır: “All Control Panel Items” (Tüm Denetim Masası Öğeleri).

“Ease of Access Centre” (Erişim Kolaylığı Merkezi) öğesine gitmek için E harfine basın ve Enter ile açın.

Ardından “Use computer without a display” (Bilgisayarı ekran olmadan kullan) öğesini Enter ile açın.

Orada, en altta “Enable Java Access Bridge” (Java Access Bridge'i etkinleştir) onay kutusunu bulacaksınız; onu seçin.

Done, just close the window! The screen reader should work now.



AAPS'i kurmaya nasıl başlayacağınızı merak ediyor musunuz? [Hazırlık](../Getting-Started/PreparingForAaps.md) bölümüne göz atın.
