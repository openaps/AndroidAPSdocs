# Wear OS akıllı saatinde AAPS

AndroidAPS uygulamasını **Wear OS tabanlı** akıllı saatinize yükleyebilirsiniz. AAPS'nin akıllı saat sürümü şunları yapmanızı sağlar:

* **verileri saatinizde görüntüleyin**: [özel saat arayüzleri](#aaps-watchfaces) sağlayarak veya standart saat arayüzlerini [komplikasyonlarla](#complications) kullanın
* **AAPS'yi telefonda kontrol edin**: bolus için, geçici bir hedef belirleyin vb.

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

Ortalama delta, AİNS, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç saat arayüzü vardır.

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
* **AKRB & AİNS** (`KISA METİN`, *Menü*'yü açar): İlk satırda *Aktif Karbonhidrat* ve ikinci satırda *Aktif İnsülin* görüntülenir.
* **Ayrıntılı AKRB** (`KISA METİN`, *Sihirbaz*'ı açar): İlk satırda mevcut *Aktif Karbonhidratı* ikinci satırda planlanan (gelecekteki, yKarb) karbonhidratlar görüntülenir.
* **Aktif Karbonhidrat Simgesi** (`KISA METİN`, *Sihirbaz*'ı açar): Statik bir simgeyle *Aktif Karbonhidrat* değerini görüntüler.
* **Tam Durum** (`UZUN METİN`, *Menü*'yü açar): Birçok veriyi tek satırda gösterir: *Kan Şekeri* değeri ve *trend* oku, *KŞ delta* değeri ve *ölçüm zamanı*. İkinci satırda *Aktif Karbonhidrat*, *Aktif İnsülin* ve *Bazal Oranı*.
* **Tam Durum (ters çevrilmiş)** (`UZUN METİN`, *Menü*'yü açar): Standart *Tam Durum* ile aynı verileri içerir, ancak satırlar ters çevrilir. `UZUN METİN` içindeki iki satırdan birini yok sayan saat arayüzlerinde kullanılabilir
* **Ayrıntılı Aktif İnsülin ** (`KISA METİN`, *Bolus* açılır): İlk satırda toplam *Aktif insülini * ve İkinci satırda *Bolus* ve *Bazal* ayrı olarak *Aktif İnsülini* görüntüler.
* **AiNS Simgesi** (`KISA METİN`, *Bolus*'u açar): Statik bir simgeyle *Aktif İnsülin* değerini görüntüler.
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

## Wear OS Tiles

Wear OS Tiles provide easy access to users' information and actions to get things done. The tiles are only available on Android smartwatches running on Wear Os version 2.0 and higher.

Tiles allow you to quickly access actions on the AAPS application without going through the watch face menu. The tiles are optional and can be added and configured by the user.

The tiles are used "next to" any watch face. To access a tile, when enabled, swipe right to left on your watch face to show them.

Please note; that the tiles do not hold the actual state of the AAPS phone app and will only make a request, which has to be confirmed on the watch before it is applied.

## How to add Tiles

Before using the tiles, you have to switch on "Control from Watch" in the "Wear OS" settings of Android APS.

![Wear phone preferences enabled](../images/wear_phone_preferences.jpg)

Depending on your Wear OS version, brand and smartphone there are two ways of enabling the tiles:

1. On your watch, from your watch face; 
    * Swipe right to left till you reach the "+ Add tiles" 
    * Select one of the tiles.
2. On your phone open the companion app for your watch. 
    * For Samsung open "Galaxy Wearable", or for other brands "Wear OS"
    * In the click on the section "Tiles", followed by "+ Add" button
    * Find the AAPS tile you like to add by selecting it. ![Wear phone add tile](../images/wear_companion_app_add_tile.png) The order of the tiles can be changed by dragging and dropping

The content of the tiles can be customized by long-pressing a tile and clicking the "Edit" or "gear icon" button.

### APS(Actions) Tile

The action tile can hold 1 to 4 user-defined action buttons. To configure, long-press the tile, which will show the configuration options. Similar actions are also available through the standard watch menu.

Actions supported in the Action tile can request the AAPS phone app for:

* **Calc**; do a bolus calculation, based on carb input and optional a percentage [1]
* **Insulin**; request insulin delivery by entering the unit of insulin
* **Treatment**; request both insulin delivery and add carbs
* **Carbs**; add (extended) carbs
* **TempT**; set a custom temporary target and duration

![Wear action tile, sample calculator](../images/wear_actions.png)

[1] Via, the Wear OS menu, set the "Calculator Percentage" option to "ON" to show the percentage input in the bolus calculator. The default percentage is based on the phone settings in the"Overview" section ["Deliver this part of the bolus wizard result %"](Config-Builder.html#advanced-settings) When the user does not provide a percentage, the default value from the phone is used. Configure the other parameters for the bolus calculator in the phone app via "Preferences" "Wizard Settings".

### AAPS(Temp Target) Tile

The Temp Target Tile can request a temporary target based on AAPS phone presets. Configure preset time and targets through the phone app setting by going to "Preferences", "Overview", ["Default Temp-Targets"](Config-Builder.html#default-temp-targets) and set the duration and targets for each preset. Configure the visible actions on the tile through the tile settings. Long press the tile to show the configuration options and select 1 to 4 options:

* **Activity**; for sport
* **Hypo**; to raise the target during hypo treatment
* **Eating soon**; to lower the target to raise the insulin on board
* **Manual**; set a custom temporary target and duration
* **Cancel**; to stop the current temporary target

![Wear actions tile edit](../images/wear_tile_tempt_edit.png)

### AAPS(QuickWizard)Tile

The QuickWizard tile can hold 1 to 4 quick wizard action buttons, defined with the phone app[2]. See [QuickWizard](Config-Builder.html#quickwizard-settings). You can set standard meals (carbs and calculation method for the bolus) to be displayed on the tile depending on the time of the day. Ideal for the most common meals/snacks you eat during the day. You can specify if the quick wizard buttons will show on the phone, watch, or both. Please note that the phone can show only one quick wizard button at a time. The quick wizard setup also can specify a custom percentage of the insulin for the bolus. The custom percentage enables you to vary, for example, snack at 120%, slow absorbing breakfast 80% and hypo treatment sugar snack at 0%

![Wear actions tile and phone configuration](../images/quickwizard_watch_phone.png)

[2] Wear OS limits tiles update frequency to only once every 30 seconds. When you notice that the changes on your phone are not reflected on the tile, consider; waiting 30 seconds, using the "Resend all data" button from the Wear OS section of AAPS, or removing the tile and adding it again. To change the order of the QuickWizard buttons dragging an item up or down.

## Always on

Long battery life for Android Wear OS smartwatches is a challenge. Some smartwatches get as much as 30 hours before recharging. The display should be switched off for optimal power saving when not in use. Most watches support the “Always on” display.

Since AAPS version 3, we can use a “Simplify UI” during always-on-mode. This UI only contains the blood glucose, direction, and time. This UI is power-optimized with less frequent updates, showing less information and lightening fewer pixels to save power on OLED displays.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “Always on” or “Always on and charging”.

### Night-time mode

While charging, it would be helpful if the display could stay “always-on” and show your blood glucose during the night. However, the standard watch-faces are too bright and have too much information, and the details are hard to read with sleepy eyes. Therefore, we added an option for the watch-face to simplify the UI only during charging when set in the configuration.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see https://developer.android.com/training/wearables/get-started/debugging. Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Watchface Nightstand](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

### Performance and battery life tips

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
* Rendering on screen
* Radio communication over Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and [**Matching divider**](#watchface-settings). On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Troubleshooting the wear app:

* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

### Sony Smartwatch 3

* The Sony Smartwach 3 is one of the most popular watches to be used with AAPS.
* Maalesef Google, 2020 sonbaharında wear OS 1.5 cihazları için desteği bıraktı. Bu Sony SW3'ü AndroidAPS 2.7 ve üstü ile kullanırken sorunlara yol açar.
* A possible workaround can be found on this [troubleshooting page](../Usage/SonySW3.rst).

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Ortalama delta, AİNS, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç saat arayüzü vardır.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.