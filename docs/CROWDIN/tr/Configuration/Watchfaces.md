# Wear OS akıllı saatinde AAPS

AndroidAPS uygulamasını **Wear OS tabanlı** akıllı saatinize yükleyebilirsiniz. AAPS'nin akıllı saat sürümü şunları yapmanızı sağlar:

* **display data on your watch**: by providing [custom watchfaces](#aaps-watchfaces) or in standard watchfaces with use of [complications](#complications)
* **control AAPS on phone**: to bolus, set a temporary target etc.

### Saat satın almadan önce...

* *komplikasyonlar* gibi bazı özelliklerin çalışması için Wear OS sürüm 2.0 veya daha yeni bir sürüm gerekir
* Google rebranded *Android Wear 1.x* to *Wear OS* from version 2.x, so when it says *Android Wear* it may indicate older 1.x version of system
* If description of smartwatch indicates only compatibility with *Android* and *iOS* - it **does not** means it runs on *Wear OS* - it may as well be some other sort of Vendor specific OS **which is not compatible with AAPS wear!**
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) if in doubt if your watch will be supported

### Building Wear OS version of AAPS

The Wear OS App of AAPS has been seperated from the AAPS build for the Android mobile. Therefore you have to generate a second signed APK. Select as module "AndroidAPS.wear" and as build variant "fullRelease" and a second apk file for the Wear OS clock is generated when [building the APK](../Installing-AndroidAPS/Building-APK.md) (or "pumpcontrolRelease" which will allow you to just remote control the pump without looping).

From March 2021 you need to sideload AAPS onto the watch, it is no longer accessible via the watch's Google Play Store. You can sideload using [Wear Installer](https://youtu.be/8HsfWPTFGQI) which you will need to install on both your watch and phone. The Wear Installer app can be downloaded from the Google Play Store. The linked video from Malcolm Bryant the developer of Wear Installer gives you detailed instructions to a) download the apk to your mobile b) setup the Android Debugger on the wear c) use Wear Installer on mobile and wear to sideload the AAPS wear app to the mobile. Once you have selected AndroidAPS as your app to upload wear version onto the watch you will be able to use watchfaces and complications and the AAPS controls.

### Telefonda Kurulum

Within AndroidAPS, in the ConfigBuilder you need to [enable Wear plugin](../Configuration/Config-Builder#wear).

## Controlling AAPS from Watch

AndroidAPS is designed to be *controlled* by Android Wear watches. Saatinizden bolus vs. göndermek istiyorsanız "Wear ayarları" içinde "Saat tarafından kontrol"u etkinleştirmeniz gerekir.

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
* **Show Rig Battery** (default `Off`): Rig battery is a synthesis of Phone battery, pump battery and sensor battery (generally the lowest of the 3 values)
* **Show Basal Rate** (default `On`): Display or not current basal rate (in U/h or in % if TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### User Interface setting

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Steampunk watchface

* **Delta Granularity** (default `Medium`)

![Steampunk_göstergesi](../images/Watchface_Steampunk_Gauge.png)

#### Daire Saat Yüzü

* **Büyük Sayılar** (varsayılan `Kapalı`): Görünürlüğü artırmak için metin boyutunu artırın
* **Zil Geçmişi** (varsayılan `Kapalı`): Saatin yeşil halkasının içinde gri halkalarla KŞ geçmişini grafik olarak görüntüleyin
* **Açık Zil Geçmişi** (varsayılan `Açık`): Zil geçmişi daha koyu griyle daha gizli
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
    
    * `On`: you set a single value for TT
    * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Complications

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

* **BR, CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Basal Rate* on the first line and *Carbs on Board* and *Insulin on Board* on the second line.
* **Blood Glucose** (`SHORT TEXT`, opens *Menu*): Displays *Blood Glucose* value and *trend* arrow on the first line and *measurement age* and *BG delta* on the second line.
* **CoB & IoB** (`SHORT TEXT`, opens *Menu*): Displays *Carbs on Board* on the first line and *Insulin on Board* on the second line.
* **CoB Detailed** (`SHORT TEXT`, opens *Wizard*): Displays current active *Carbs on Board* on the first line and planned (future, eCarbs) Carbs on the second line.
* **CoB Icon** (`SHORT TEXT`, opens *Wizard*): Displays *Carbs on Board* value with a static icon.
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Complication Tap Action** (default `Default`): Decides which dialog is opened when user taps complication: 
    * *Default*: action specific to complication type *(see list above)*
    * *Menu*: AAPS main menu
    * *Wizard*: bolus wizard - bolus calculator
    * *Bolus*: direct bolus value entry
    * *eCarb*: eCarb configuration dialog
    * *Status*: status sub-menu
    * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

## Always on

Long battery life for Android Wear OS smartwatches is a challenge. Some smartwatches get as much as 30 hours before recharging. The display should be switched off for optimal power saving when not in use. Most watches support the “Always on” display.

Since AAPS version 3, we can use a “Simplify UI” during always-on-mode. This UI only contains the blood glucose, direction, and time. This UI is power-optimized with less frequent updates, showing less information and lightening fewer pixels to save power on OLED displays.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “Always on” or “Always on and charging”.

### Night-time mode

While charging, it would be helpful if the display could stay “always-on” and show your blood glucose during the night. However, the standard watch-faces are too bright and have too much information, and the details are hard to read with sleepy eyes. Therefore, we added an option for the watch-face to simplify the UI only during charging when set in the configuration.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see https://developer.android.com/training/wearables/get-started/debugging. Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Komidin Saat arayüzü](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

### Performans ve pil ömrü ipuçları

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
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

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Ortalama delta, IOB, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç izleme yüzü vardır.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.