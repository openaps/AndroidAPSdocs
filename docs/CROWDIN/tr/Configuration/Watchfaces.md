# Wear OS akıllı saatinde AAPS

AndroidAPS uygulamasını **Wear OS tabanlı** akıllı saatinize yükleyebilirsiniz. AAPS'nin akıllı saat sürümü şunları yapmanızı sağlar:

* **verileri saatinizde görüntüleyin**: [özel saat arayüzleri](#aaps-watchfaces) sağlayarak veya standart saat arayüzlerini [komplikasyonlarla](#complications) kullanın.</li> 
    
    * **AAPS'yi telefonunuzda kontrol edin**: bolus için, geçici bir hedef belirleyin vb.</ul> 
    
    ### Saat satın almadan önce...
    
    * *komplikasyonlar* gibi bazı özelliklerin çalışması için Wear OS sürüm 2.0 veya daha yeni bir sürüm gerekir
    * Google, *Android Wear 1.x*'i 2.x sürümünden *Wear OS* olarak yeniden markaladı, bu nedenle *Android Wear* dediği zaman, sistemin daha eski 1.x sürümünü gösteriyor olabilir
    * Akıllı saatin açıklaması yalnızca *Android* ve *iOS* ile uyumluluğu gösteriyorsa - bu *Wear OS*'de çalıştığı **anlamına gelmez** - **AAPS wear ile uyumlu olmayan!** başka bir tür Markaya özel işletim sistemi de olabilir
    * [Test edilmiş telefonlar ve saatler listesini kontrol edin](../Getting-Started/Phones#list-of-tested-phones) ve saatinizin desteklenip desteklenmeyeceğinden şüpheniz varsa [topluluğa sorun](../Where-To-Go-For-Help/Connect-with-other-users.md)
    
    ### AAPS'nin Wear OS sürümünü derlemek
    
    AAPS'in Wear OS Uygulaması, Android mobil için AAPS yapısından ayrılmıştır. Bu nedenle, ikinci bir imzalı APK oluşturmanız gerekir. Modül olarak "AndroidAPS.wear" ve yapı varyantı olarak "fullRelease" seçin ve Wear OS saati için ikinci bir apk dosyası [APK oluşturulurken](../Installing-AndroidAPS/Building-APK.md) oluşturulur (veya "pumpcontrolRelease" yalnızca uzaktan pompayı döngü olmadan kontrol etmenizi sağlar).
    
    Mart 2021'den itibaren sideload AAPS'yi saatinize yüklemeniz gerekiyor, artık saatin Google Play Store''undan erişilemiyor. Hem saatinize hem de telefonunuza yüklemeniz gereken [Wear Installer](https://youtu.be/8HsfWPTFGQI)'ı sideload kullanarak yükleyebilirsiniz. Wear Installer uygulaması Google Play Store'dan indirilebilir. Wear Installer'ın geliştiricisi Malcolm Bryant'ın verdiği bağlantılı video, size ayrıntılı talimatlar verecektir. a) apk'yı cep telefonunuza indirin b) wear'e Android Hata Ayıklayıcı'yı kurun c) Cep telefonunuzda Wear Installer'ı kullanarak AAPS wear uygulamasını telefonunuzdan saatinize yan yükleme yapabilirsiniz. Saate wear sürümünü yüklemek için uygulamanız olarak AndroidAPS'yi seçtiğinizde, saat kadranlarını, komplikasyonları ve AAPS kontrollerini kullanabileceksiniz.
    
    ### Telefonda Kurulum
    
    AndroidAPS içinde, Konfigürasyon ayarlarında [Wear eklentisini etkinleştirmeniz](../Configuration/Config-Builder#wear) gerekir.
    
    ## APPS'i Saatten Kontrol Etme
    
    AndroidAPS, Android Wear saatleri tarafından *kontrol edilecek* şekilde tasarlanmıştır. Saatinizden bolus vs. göndermek istiyorsanız "Wear ayarları" içinde "Saat tarafından kontrol"u etkinleştirmeniz gerekir.
    
    Aşağıdaki işlevler saatten tetiklenebilir:
    
    * geçici bir hedef belirleme
    * bolus hesaplayıcıyı kullanma (hesaplama değişkenleri telefondaki [ayarlarda](../Configuration/Config-Builder#wear) tanımlanabilir)
    * yKarb yönetme
    * bolus (insulin + carbs) yönetme
    * saat ayarları
    * durum 
        * pompa durumunu kontrol etme
        * döngü durumunu kontrol etme
        * profili kontrol etme ve değiştirme, CPP (Sirkadiyen Yüzde Profili = zaman kayması + yüzde)
        * GTD gösterme (Günlük toplam doz = bolus + günlük bazal)
    
    ## AAPS Saat Yüzleri
    
    Ortalama delta, IOB, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç izleme yüzü vardır.
    
    AndroidAPS'den gelen bildirimlerin saatte engellenmediğinden emin olun. Eylemin onayı (örn. bolus, geçici hedef), kaydırmanız ve işaretlemeniz gereken bildirim yoluyla gelir.
    
    AAPS menüsüne daha hızlı ulaşmak için KŞ'nize iki kez dokunun. KŞ eğrisine iki kez dokunarak zaman ölçeğini değiştirebilirsiniz..
    
    ## Mevcut saat yüzleri
    
    ![Mevcut saat yüzleri](../images/Watchface_Types.png)
    
    ### AndroidAPS 2.8'den itibaren yeni saat yüzü
    
    ![Watchface Dijital Stil](../images/Watchface_DigitalStyle.png)
    
    * Renk, çizgiler ve daire, watchface seçici menüsünün dişli işareti üzerindeki ayar menüsünde yapılandırılabilir.
    
    ## AAPSv2 saat arayüzü - Legend
    
    ![Legend AndroidAPSv2 saat arayüzü](../images/Watchface_Legend.png)
    
    A - son döngü çalıştırmasından beri geçen süre
    
    B - CGM okuması
    
    C - son CGM okumasından bu yana geçen dakika
    
    D - son CGM okumasına kıyasla değişiklik (mmol veya mg/dl olarak)
    
    E - son 15 dakikadaki ortalama değişiklik CGM okuması
    
    F - telefon pili
    
    G - bazal oranı (standart oran sırasında Ü/sa olarak ve GBO sırasında % olarak gösterilir)
    
    H - KŞE (kan şekeri etkileşimi) -> KŞ'nin yalnızca insülin aktivitesine bağlı olarak yükselmesi veya düşmesi "gerektiği" derece.
    
    I - karbonhidrat (aktif karbonhidrat | yayma y-karbonhidratlar)
    
    J - aktif insülin (bolustan | bazaldan)
    
    ## AAPS ana menüsüne erişim
    
    AAPS ana menüsüne erişmek için aşağıdaki seçeneklerden birini kullanabilirsiniz:
    
    * KŞ değerinize iki kez tıklayın
    * saat uygulaması menüsünde AAPS simgesini seçin
    * AAPS komplikasyonuna tıklayın (menü için yapılandırılmışsa)
    
    ## Ayarlar (wear saati içinde)
    
    Saat yüzü ayarlarına erişmek için AAPS ana menüsüne girin, yukarı kaydırın ve "Ayarlar" öğesini seçin.
    
    Dolgulu yıldız etkin (**Açık**) durumu içindir ve içi boş yıldız simgesi ayarın devre dışı olduğunu gösterir (**Kapalı**):
    
    ![Ayarlar açık/kapalı](../images/Watchface_Settings_On_Off.png)
    
    ### AAPS tamamlayıcı parametreleri
    
    * **Bolus'ta Titreşim** (varsayılan `Açık`):
    * **Eylemler için ünite** (varsayılan `mg/dl`): eğer **Açık** ise eylemler için ünite `mg/dl`, eğer **Kapalı** ise eylemler için ünite `mmol/l`'dir. Saatten herhangi bir GH ayarlarken kullanılır.
    
    ### Saat yüzü ayarları
    
    * **Tarihi Göster** (varsayılan `Kapalı`): not, tarih tüm saat yüzlerinde mevcut değildir
    * **Aktif İnsülin'ü göster** (varsayılan `Açık`): Aktif İnsülin değerini görüntüleyin veya göstermeyin (ayrıntılı değer için ayar AAPS wear parametrelerindedir)
    * **Aktif Karbonhidrat göster** (varsayılan `Açık`): Aktif Karbonhidrat değerini göster veya gösterme
    * **Deltayı Göster** (varsayılan `Açık`): Son 5 dakikanın KŞ değişimini görüntüleyin veya göstermeyin
    * **OrtDelta'yı Göster** (varsayılan `Açık`): Son 15 dakikanın ortalama KŞ değişimini görüntüleyin veya göstermeyin
    * **Telefon Pilini Göster** (varsayılan `Açık`): Telefon pili % olarak. %30'un altındaysa kırmızı.
    * **Rig Pilini Göster** (varsayılan `Kapalı`): Donanım pili, Telefon pili, pompa pili ve sensör pilinin bir sentezidir (genellikle 3 değerin en küçüğüdür)
    * **Bazal Oranı Göster** (varsayılan `Açık`): Mevcut bazal oranı görüntüler veya göstermez (GBO ise Ü/sa veya % olarak)
    * **Döngü Durumunu Göster** (varsayılan `Açık`): son döngü çalışmasından bu yana kaç dakika olduğunu gösterir (değerin etrafındaki oklar 15' üzerindeyse kırmızıya döner).
    * **KŞ göster** (varsayılan `Açık`): Son KŞ değerini göster veya gösterme
    * **Yön Okunu Göster** (varsayılan `Açık`): KŞ gidişat okunu görüntüleyin veya göstermeyin
    * **Önceyi Göster** (varsayılan `Açık`): son okumadan bu yana kaç dakika geçtiğini gösterir.
    * **Koyu** (varsayılan `Açık`): Siyah arka plandan beyaz arka plana geçebilirsiniz (Kokpit ve Steampunk saat yüzü hariç)
    * **Bazallari Vurgula** (varsayılan `Kapalı`): Bazal oranın ve geçici bazalların görünürlüğünü belirginleştirin
    * **Bölücü eşleştirme** (varsayılan `Kapalı`): AAPS, AAPSv2 ve AAPS(Large) izleme yüzleri için, bölücü için kontrast arka planı göster (**Kapalı**) veya arka plan rengiyle bölücü eşleştir (**Açık**)
    * **Grafik Zaman Çerçevesi** (varsayılan `3 saat`): Alt menüde grafiğinizin maksimum zaman çerçevesini 1 saat ile 5 saat arasında seçebilirsiniz.
    
    ### Kullanıcı Arayüz ayarı
    
    * **Giriş Tasarımı**: Bu parametre ile AAPS (TT, İnsülin, Karbonhidrat...) için komutları girerken "+" ve "-" butonlarının konumunu seçebilirsiniz
    
    ![Giriş tasarımı seçenekleri](../images/Watchface_InputDesign.png)
    
    ### Belirli saat yüzü parametreleri
    
    #### Steampunk saat yüzü
    
    * **Delta Ayrıntısı** (varsayılan `Orta`)
    
    ![Steampunk_göstergesi](../images/Watchface_Steampunk_Gauge.png)
    
    #### Daire Saat Yüzü
    
    * **Büyük Sayılar** (varsayılan `Kapalı`): Görünürlüğü artırmak için metin boyutunu artırın
    * **Zil Geçmişi** (varsayılan `Kapalı`): Saatin yeşil halkasının içinde gri halkalarla KŞ geçmişini grafik olarak görüntüleyin
    * **Açık Zil Geçmişi** (varsayılan `Açık`): Zil geçmişi daha koyu griyle daha gizli
    * **Animasyonlar** (varsayılan `Açık`): Etkinleştirildiğinde, saat tarafından desteklendiğinde ve güç tasarrufu düşük çözünürlüklü modunda değilken, saat yüzü dairesi canlandırılacaktır
    
    ### Komut ayarları
    
    * **Menüde Sihirbaz** (varsayılan `Açık`): Ana menüdeki sihirbaz arayüzünün Karbonhidratları girmesine ve saatten Bolus'u ayarlamasına izin verin
    * **Menüde Hazırla** (varsayılan `Kapalı`): Saatten Hazırla / Doldur işlemine izin ver
    * **Tek Hedef** (varsayılan `Açık`):
        
        * `Açık`: Geçici Hedef için tek bir değer ayarlarsınız
        * `Kapalı`: GH için Düşük hedef ve yüksek hedef ayarlarsınız
    
    * **Sihirbaz Yüzdesi** (varsayılan `Kapalı`): Sihirbazdan bolus düzeltmesine izin ver (değer, onay bildiriminden önce yüzde olarak girilir)
    
    ## Komplikasyonlar
    
    *Komplikasyon* geleneksel saatçilikten bir terimdir ve ana saat kadranına eklemeyi tanımlar - başka bir küçük pencere veya alt kadran (tarih, haftanın günü, ay evresi vb. ile birlikte). Wear OS 2.0, bu metaforu hava durumu, bildirimler, fitness sayaçları ve daha fazlası gibi özel veri sağlayıcılarının komplikasyonları destekleyen tüm saat yüzlerine eklenmesine olanak tanımak için getiriyor.
    
    AndroidAPS Wear OS uygulaması, `2.6` derlemesinden bu yana komplikasyonları destekler ve komplikasyonları destekleyen herhangi bir üçüncü taraf izleme yüzünün AAPS ile ilgili verileri (KŞ gidişatı ile, Aktif İnsülin, Aktif KArbonhidrat, vb.) görüntülemek üzere yapılandırılmasına izin verir.
    
    Komplikasyonlar ayrıca AAPS işlevlerine **kısayol** olarak da hizmet eder. Bunlara dokunarak AAPS ile ilgili menüleri ve diyalogları açabilirsiniz (komplikasyon tipine ve konfigürasyona bağlı olarak).
    
    ![Saat_Yüzündeki_Komplikasyonlar](../images/Watchface_Complications_On_Watchfaces.png)
    
    ### Komplikasyon Türleri
    
    AAPS Wear OS uygulaması, önceden tanımlanmış biçimlere göre yalnızca ham veriler sağlar. Düzeni, kenarlığı, rengi ve yazı tipi dahil olmak üzere komplikasyonların nerede ve nasıl oluşturulacağına karar vermek üçüncü taraf saat yüzüne bağlıdır. AAPS, mevcut birçok Wear OS komplikasyon türünden şunları kullanır:
    
    * `KISA METİN` - Her biri 7 karakterden oluşan, bazen değer ve etiket olarak adlandırılan iki satır metin içerir. Genellikle bir daire veya küçük hap içinde - alt alta veya yan yana işlenir. Yer sınırı çok olan bir komplikasyondur. AAPS, sığdırmak için gereksiz karakterleri kaldırmaya çalışır: değerleri yuvarlayarak, değerlerden baştaki ve sondaki sıfırları kaldırarak vb.
    * `UZUN METİN` - Her biri yaklaşık 20 karakterden oluşan iki satır metin içerir. Genellikle bir dikdörtgen veya "long pill" içinde - alt alta işlenir. Daha fazla ayrıntı ve metin durumu için kullanılır.
    * `ARALIKLI DEĞER` - Yüzde gibi önceden tanımlanmış aralıktaki değerler için kullanılır. Simge, etiket içerir ve genellikle daire ilerleme kadranı olarak işlenir.
    * `BÜYÜK GÖRÜNTÜ` - Arka plan olarak kullanılabilen (saat arayüzü tarafından desteklendiğinde) özel arka plan görüntüsü.
    
    ### Komplikasyon Kurulumu
    
    Saat yüzüne karmaşıklık eklemek için, uzun basarak ve aşağıdaki dişli simgesine tıklayarak yapılandırın. Belirli saat yüzünün onları nasıl yapılandırdığına bağlı olarak - ya yer tutuculara tıklayın ya da komplikasyonlar için saat yüzü kurulum menüsüne girin. AAPS komplikasyonları, AAPS menü girişi altında gruplandırılmıştır.
    
    Saat yüzeyinde komplikasyonları yapılandırırken, Wear OS, saat yüzeyinde seçilen komplikasyon yerine sığabilecek komplikasyonların listesini sunacak ve filtreleyecektir. Listede belirli komplikasyonlar bulunamıyorsa, bu muhtemelen türünün belirtilen yer için kullanılamamasından kaynaklanmaktadır.
    
    ### AAPS tarafından sağlanan komplikasyonlar
    
    AndroidAPS aşağıdaki komplikasyonları sağlar:
    
    ![AAPS_Komplikasyonları_Listesi](../images/Watchface_Complications_List.png)
    
    * **BO, Aktif Karbonhidrat & Aktif İnsülin** (`KISA METİN`, *Menü*'yü açar): İlk satırda *Bazal Oranı* ve ikinci satırda *Aktif Karbonhidrat* ve *Aktif Insülini* görüntüler.
    * **Kan Şekeri** (`KISA METİN`, *Menüyü* açar): ilk satırda *Kan Şekeri* değerini ve *trend* okunu, ikinci satırda *ölçüm zamanı* ve *KŞ delta* değerini gösterir.
    * **CoB & IoB** (`KISA METİN`, *Menü*'yü açar): İlk satırda *Aktif Karbonhidrat* ve ikinci satırda *Aktif İnsülin* görüntülenir.
    * **Ayrıntılı CoB** (`KISA METİN`, *Sihirbaz*'ı açar): İlk satırda mevcut *Aktif Karbonhidratı* ikinci satırda planlanan (gelecekteki, yKarb) karbonhidratlar görüntülenir.
    * **Aktif Karbonhidrat Simgesi** (`KISA METİN`, *Sihirbaz*'ı açar): Statik bir simgeyle *Aktif Karbonhidrat* değerini görüntüler.
    * **Tam Durum** (`UZUN METİN`, *Menü*'yü açar): Birçok veriyi tek satırda gösterir: *Kan Şekeri* değeri ve *trend* oku, *KŞ delta* değeri ve *ölçüm zamanı*. İkinci satırda *Aktif Karbonhidrat*, *Aktif İnsülin* ve *Bazal Oranı*.
    * **Tam Durum (ters çevrilmiş)** (`UZUN METİN`, *Menü*'yü açar): Standart *Tam Durum* ile aynı verileri içerir, ancak satırlar ters çevrilir. `UZUN METİN` içindeki iki satırdan birini yok sayan saat arayüzlerinde kullanılabilir
    * **Ayrıntılı Aktif İnsülin ** (`KISA METİN`, *Bolus* açılır): İlk satırda toplam *Aktif insülini * ve İkinci satırda *Bolus* ve *Bazal* ayrı olarak *Aktif İnsülini* görüntüler.
    * **IoB Simgesi** (`KISA METİN`, *Bolus*'u açar): Statik bir simgeyle *Aktif İnsülin* değerini görüntüler.
    * **Yükleyici/Telefon Pili** (`ARALIKLI DEĞER`, *Durum* açılır): AAPS tarafından bildirilen AAPS telefonunun (yükleyici) pil yüzdesini görüntüler. Bildirilen değeri yansıtan bir pil simgesiyle yüzde göstergesi olarak görüntülenir. Gerçek zamanlı olarak güncellenmeyebilir, ancak diğer önemli AAPS verileri değiştiğinde (genellikle: yeni *Kan Şekeri* ölçümü ile her ~5 dakikada bir) güncellenir.
    
    Ek olarak, `BÜYÜK GÖRÜNTÜ` türünün üç komplikasyonu vardır: **Koyu Duvar Kağıdı**, **Gri Duvar Kağıdı** ve **Açık Duvar Kağıdı**, statik AAPS duvar kağıdı.
    
    ### Komplikasyonla ilgili ayarlar
    
    * **Komplikasyon Dokunma Eylemi** (varsayılan `Varsayılan`): Kullanıcı komplikasyon'a dokunduğunda hangi iletişim kutusunun açılacağına karar verir: 
        * *Varsayılan*: komplikasyon türüne özel eylem *(yukarıdaki listeye bakın)*
        * *Menü*: AAPS ana menüsü
        * *Sihirbaz*: bolus sihirbazı - bolus hesaplayıcı
        * *Bolus*: doğrudan bolus değeri girişi
        * *yKarb*: yKarb yapılandırma iletişim kutusu
        * *Durum*: durum alt menüsü
        * *Yok*: AAPS komplikasyonlarında dokunma eylemini devre dışı bırakır
    * **Komplikasyonlarda Unicode** (varsayılan `Açık`): `Açık` olduğunda, komplikasyon `Δ` Delta, `⁞` dikey nokta ayırıcı veya `⎍` Bazal Oran sembolü gibi semboller için Unicode karakterlerini kullanır. Bunların oluşturulması, yazı tipine bağlıdır ve bu, saat yüzüne çok özel olabilir. Bu seçenek, grafik hatalarından kaçınmak için, gerektiğinde özel saat arayüzü tarafından kullanılan yazı tipi bu sembolleri desteklemiyorsa - Unicode sembollerinin `Kapalı` olarak değiştirilmesine izin verir.
    
    ## Her zaman açık
    
    Android Wear OS akıllı saatleri için uzun pil ömrü zorlu bir iştir. Bazı akıllı saatler, yeniden şarj edilmeden önce 30 saat kadar kullanılabilir. Kullanılmadığı zaman optimum güç tasarrufu için ekran kapatılmalıdır. Çoğu saat "Her zaman açık" ekranını destekler.
    
    AAPS sürüm 3'ten bu yana, her zaman açık moddayken "Basitleştirilmiş Kullanıcı Arayüzü" kullanabiliriz. Bu kullanıcı arayüzü yalnızca kan şekeri, yön ve zamanı içerir. Bu kullanıcı arayüzü, daha az sıklıkta güncelleme ile güç açısından optimize edilmiştir, daha az bilgi gösterir ve OLED ekranlarda güç tasarrufu sağlamak için daha az piksel aydınlatır.
    
    Basitleştirilmiş UI modu için mevcut saat arayüzleri: AAPS, AAPS V2, Home Big, Digital Style, Steampunk ve Cockpit. Basitleştirilmiş kullanıcı arayüzü isteğe bağlıdır ve saat yüzü ayarları aracılığıyla yapılandırılır. (saat yüzüne uzun basın ve "düzenle" veya dişli simgesini tıklayın) "Basit Kullanıcı Arayüzü" yapılandırmasını seçin ve "Her zaman açık" veya "Şarjda ve Her zaman açık" olarak ayarlayın.
    
    ### Gece modu
    
    Şarj olurken ekranın "sürekli açık" kalması ve gece boyunca kan şekerinizi göstermesi yararlı olacaktır. Ancak standart saat kadranları çok parlak ve çok fazla bilgi içeriyor ve uykulu gözlerle ayrıntıları okumak zor. Bu nedenle, yapılandırmada ayarlandığında yalnızca şarj sırasında kullanıcı arayüzünü basitleştirmek için saat yüzü için bir seçenek ekledik.
    
    Basitleştirilmiş UI modu için mevcut saat arayüzleri: AAPS, AAPS V2, Home Big, Digital Style, Steampunk ve Cockpit. Basitleştirilmiş kullanıcı arayüzü isteğe bağlıdır ve saat yüzü ayarları aracılığıyla yapılandırılır. (saat yüzüne uzun basın ve "düzenle" veya dişli simgesini tıklayın) "Basit Kullanıcı Arayüzü" yapılandırmasını seçin ve "Şarj sırasında" veya "Şarjda ve Her zaman açık" olarak ayarlayın.
    
    Android geliştirici seçenekleri, saatinizin şarj olurken uyanık kalmasını sağlar. Geliştirici seçeneklerini kullanılabilir hale getirmek için bkz. https://developer.android.com/training/wearables/get-started/debugging. Geliştirici seçeneklerinde "Şarj olurken uyanık kal"ı "açık" olarak ayarlayın.
    
    Not: her ekran her zaman açık olmaya uygun değildir. Özellikle eski OLED ekranlarda ekran yanmasına neden olabilir. Saatler genellikle yanmayı önlemek için ekranı karartır; tavsiye için lütfen kullanıcı el kitabınıza, üretime veya internete bakın.
    
    ![Komidin Saat arayüzü](../images/Watchface_nightstand.jpg)
    
    ![Basitleştirilmiş Kullanıcı Arayüzü](../images/Watchface_simplified_ui.png)
    
    ### Performans ve pil ömrü ipuçları
    
    Wear OS saatleri, güç kısıtlaması çok olan cihazlardır. Saat kasasının boyutu, birlikte verilen pilin kapasitesini sınırlar. Hem donanım hem de yazılım tarafındaki son gelişmelere rağmen, Wear OS saatleri hala günlük şarj gerektiriyor.
    
    Deneyimlenen pil ömrü bir günden kısaysa (alacakaranlıktan şafağa kadar), sorunları gidermek için bazı ipuçları buradadır.
    
    Pil gerektiren başlıca alanlar şunlardır:
    
    * Arkadan aydınlatmalı (LED için) veya tam yoğunluk modunda (OLED için) aktif ekran
    * Ekranda görüntü oluşturma
    * Bluetooth üzerinden radyo iletişimi
    
    İletişimden ödün veremeyeceğimiz (güncel verilere ihtiyacımız var) ve en son verilerin işlenmesini istediğimiz için, optimizasyonların çoğu *görüntüleme süresi* alanında yapılabilir:
    
    * Stok izleme yüzleri genellikle mağazadan indirilen özel olandan daha iyi optimize edilir.
    * Etkin olmayan / karartılmış modda işlenen veri miktarını sınırlayan saat arayüzlerini kullanmak daha iyidir.
    * Üçüncü taraf hava durumu widget'ları gibi diğer Komplikasyonları karıştırırken veya harici kaynaklardan gelen verileri kullanırken dikkatli olun.
    * Daha basit saat yüzleriyle başlayın. Aynı anda bir komplikasyon ekleyin ve pil ömrünü nasıl etkilediklerini gözlemleyin.
    * AAPS saat arayüzleri için **Koyu** temayı ve [**Eşleşen bölücü**](#watchface-settings) kullanmayı deneyin. OLED cihazlarda, yanan piksel miktarını sınırlayacak ve yanmayı sınırlayacaktır.
    * Saatinizde nelerin daha iyi performans gösterdiğini kontrol edin: AAPS stok saat yüzleri veya AAPS Komplikasyonlarına sahip diğer saat yüzleri.
    * Farklı aktivite profilleriyle birkaç gün boyunca gözlem yapın. Çoğu saat, bakış, hareket ve kullanımla ilgili diğer tetikleyicilerde ekranı etkinleştirir.
    * GPS etkinleştirildiğinde, performansı etkileyen global sistem ayarlarınızı kontrol edin: bildirimler, arka ışık/etkin ekran zaman aşımı.
    * [Test edilmiş telefonlar ve saatler listesini kontrol edin](../Getting-Started/Phones#list-of-tested-phones) ve diğer kullanıcıların deneyimleri ve bildirilen pil ömrü için [topluluğa sorun](../Where-To-Go-For-Help/Connect-with-other-users.md).
    * **Saat kadranında veya komplikasyonda görüntülenen verilerin güncel olduğunu garanti edemeyiz**. Sonunda, bir saat yüzünün veya bir komplikasyonun ne zaman güncelleneceğine karar vermek Wear OS'ye kalmıştır. AAPS uygulaması güncelleme talep ettiğinde bile, Sistem pilden tasarruf etmek için güncellemeleri ertelemeye veya yok saymaya karar verebilir. Şüphe duyduğunuzda ve saatinizin pili azaldığında - her zaman telefondaki ana AAPS uygulamasıyla iki kez kontrol edin.
    
    ## Wear uygulamasında sorun giderme:
    
    * Bazen uygulamaları saatle yeniden senkronize etmek yardımcı olur, çünkü bunu yapmak biraz yavaş olabilir: Android Wear > Dişli simgesi > Saat adı > Uygulamaları yeniden eşitle.
    * Geliştirici Seçeneklerinde (saatte) ADB hata ayıklamasını etkinleştirin, saati USB üzerinden bağlayın ve Android Studio'da Wear uygulamasını bir kez başlatın.
    * Komplikasyonlar verileri güncellemiyorsa - önce AAPS izleme yüzlerinin çalışıp çalışmadığını kontrol edin.
    
    ### Sony Smartwatch 3
    
    * Sony Smartwatch 3, APPS ile kullanılacak en popüler saatlerden biridir.
    * Maalesef Google, 2020 sonbaharında wear OS 1.5 cihazları için desteği bıraktı. Bu Sony SW3'ü AndroidAPS 2.7 ve üstü ile kullanırken sorunlara yol açar.
    * Bu soruna [sorun giderme sayfasında](../Usage/SonySW3.rst) olası bir geçici çözüm bulunabilir.
    
    ## Nightscout verilerini görüntüleyin
    
    Başka bir döngü sistemi kullanıyorsanız ve bir Android Wear saatinde döngü ayrıntılarınızı *görüntülemek* istiyorsanız veya çocuğunuzun döngüsünü izlemek istiyorsanız, yalnızca NSClient APK'sını oluşturabilir/indirebilirsiniz. Bunu yapmak için "NSClientRelease" derleme varyantını seçerek [APK oluşturma talimatlarını](../Installing-AndroidAPS/Building-APK.md) izleyin. Ortalama delta, IOB, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç izleme yüzü vardır.
    
    # Pebble
    
    Pebble kullanıcıları, döngü verilerini *görüntülemek* için [Urchin saat yüzünü](https://github.com/mddub/urchin-cgm) kullanabilir (Nightscout'a yüklenmişse), ancak saat aracılığıyla AndroidAPS ile etkileşime geçemezsiniz. Aktif İnsülin ve şu anda etkin olan geçici bazal oranı ve tahminler gibi görüntülenecek alanları seçebilirsiniz. Açık döngü durumunda, Bildirimin AndroidAPS'den alınıp alınmadığını ve ardından SMS veya push bildirimi gönderildiğini söyleyen bir uygulama oluşturmak için [IFTTT](https://ifttt.com/)'ı kullanabilirsiniz.