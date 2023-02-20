# Wear OS akıllı saatinde AAPS

AndroidAPS uygulamasını **Wear OS tabanlı** akıllı saatinize yükleyebilirsiniz. AAPS'nin akıllı saat sürümü şunları yapmanızı sağlar:

* **verileri saatinizde görüntüleyin**: [özel saat arayüzleri](#aaps-watchfaces) sağlayarak veya standart saat arayüzlerini [komplikasyonlarla](#complications) kullanın
* **AAPS'yi telefonda kontrol edin**: bolus için, geçici bir hedef belirleyin vb.

### Saat satın almadan önce...

* *komplikasyonlar* gibi bazı özelliklerin çalışması için Wear OS sürüm 2.0 veya daha yeni bir sürüm gerekir
* Google, *Android Wear 1.x*'i 2.x sürümünden *Wear OS* olarak yeniden markaladı, bu nedenle *Android Wear* dediği zaman, sistemin daha eski 1.x sürümünü gösteriyor olabilir
* Akıllı saatin açıklaması yalnızca *Android* ve *iOS* ile uyumluluğu gösteriyorsa - bu *Wear OS*'de çalıştığı **anlamına gelmez** - **AAPS wear ile uyumlu olmayan!** başka bir tür Markaya özel işletim sistemi de olabilir
* [Test edilmiş telefonlar ve saatler listesini kontrol edin](Phones-list-of-tested-phones) ve saatinizin desteklenip desteklenmeyeceğinden şüpheniz varsa [topluluğa sorun](../Where-To-Go-For-Help/Connect-with-other-users.md)

### AAPS'nin Wear OS sürümünü derlemek

AAPS'in Wear OS Uygulaması, Android mobil için AAPS yapısından ayrılmıştır. Bu nedenle, ikinci bir imzalı APK oluşturmanız gerekir. Modül olarak "AndroidAPS.wear" ve yapı varyantı olarak "fullRelease" seçin ve Wear OS saati için ikinci bir apk dosyası [APK oluşturulurken](../Installing-AndroidAPS/Building-APK.md) oluşturulur (veya "pumpcontrolRelease" yalnızca uzaktan pompayı döngü olmadan kontrol etmenizi sağlar).

Mart 2021'den itibaren sideload AAPS'yi saatinize yüklemeniz gerekiyor, artık saatin Google Play Store''undan erişilemiyor. Hem saatinize hem de telefonunuza yüklemeniz gereken [Wear Installer](https://youtu.be/8HsfWPTFGQI)'ı sideload kullanarak yükleyebilirsiniz. Wear Installer uygulaması Google Play Store'dan indirilebilir. Wear Installer'ın geliştiricisi Malcolm Bryant'ın verdiği bağlantılı video, size ayrıntılı talimatlar verecektir. a) apk'yı cep telefonunuza indirin b) wear'e Android Hata Ayıklayıcı'yı kurun c) Cep telefonunuzda Wear Installer'ı kullanarak AAPS wear uygulamasını telefonunuzdan saatinize yan yükleme yapabilirsiniz. Saate wear sürümünü yüklemek için uygulamanız olarak AndroidAPS'yi seçtiğinizde, saat kadranlarını, komplikasyonları ve AAPS kontrollerini kullanabileceksiniz.

### Telefonda Kurulum

AndroidAPS içinde, Konfigürasyon ayarlarında [Wear eklentisini etkinleştirmeniz](Config-Builder-wear) gerekir.

## APPS'i Saatten Kontrol Etme

AndroidAPS, Android Wear saatleri tarafından *kontrol edilecek* şekilde tasarlanmıştır. Saatinizden bolus vs. göndermek istiyorsanız "Wear ayarları" içinde "Saat tarafından kontrol"u etkinleştirmeniz gerekir.

Aşağıdaki işlevler saatten tetiklenebilir:

* geçici bir hedef belirleme
* bolus hesaplayıcıyı kullanma (hesaplama değişkenleri telefondaki [ayarlarda](Config-Builder-wear) tanımlanabilir)
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

(Watchfaces-new-watchface-as-of-androidaps-2-8)=

### AndroidAPS 2.8'den itibaren yeni saat yüzü

![Watchface Dijital Stil](../images/Watchface_DigitalStyle.png)

* Renk, çizgiler ve daire, watchface seçici menüsünün dişli işareti üzerindeki ayar menüsünde yapılandırılabilir.

## AAPSv2 saat arayüzü - Legend

![Legend AndroidAPSv2 saat arayüzü](../images/Watchface_Legend.png)

A - time since last loop run

B - CGM reading

C - minutes since last CGM reading

D - change compared to last CGM reading (in mmol or mg/dl)

E - average change CGM reading last 15 minutes

F - phone battery

G - basal rate (shown in U/h during standard rate and in % during TBR)

H - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - carbs (carbs on board | e-carbs in the future)

J - insulin on board (from bolus | from basal)

## AAPS ana menüsüne erişim

To access main menu of AAPS you can use on of following options:

* KŞ değerinize iki kez tıklayın
* saat uygulaması menüsünde AAPS simgesini seçin
* AAPS komplikasyonuna tıklayın (menü için yapılandırılmışsa)

## Ayarlar (wear saati içinde)

To access to the watchface settings, enter AAPS main menu, slide up and select "Settings".

Filled star is for enabled state (**On**), and hollow star icon indicates that setting is disabled (**Off**):

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

(Watchfaces-complications)=

## Komplikasyonlar

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Saat_Yüzündeki_Komplikasyonlar](../images/Watchface_Complications_On_Watchfaces.png)

### Komplikasyon Türleri

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `KISA METİN` - Her biri 7 karakterden oluşan, bazen değer ve etiket olarak adlandırılan iki satır metin içerir. Genellikle bir daire veya küçük hap içinde - alt alta veya yan yana işlenir. Yer sınırı çok olan bir komplikasyondur. AAPS, sığdırmak için gereksiz karakterleri kaldırmaya çalışır: değerleri yuvarlayarak, değerlerden baştaki ve sondaki sıfırları kaldırarak vb.
* `UZUN METİN` - Her biri yaklaşık 20 karakterden oluşan iki satır metin içerir. Genellikle bir dikdörtgen veya "long pill" içinde - alt alta işlenir. Daha fazla ayrıntı ve metin durumu için kullanılır.
* `ARALIKLI DEĞER` - Yüzde gibi önceden tanımlanmış aralıktaki değerler için kullanılır. Simge, etiket içerir ve genellikle daire ilerleme kadranı olarak işlenir.
* `BÜYÜK GÖRÜNTÜ` - Arka plan olarak kullanılabilen (saat arayüzü tarafından desteklendiğinde) özel arka plan görüntüsü.

### Komplikasyon Kurulumu

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### AAPS tarafından sağlanan komplikasyonlar

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

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

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

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

## Wear OS Kutucukları

Wear OS Tiles provide easy access to users' information and actions to get things done. The tiles are only available on Android smartwatches running on Wear Os version 2.0 and higher.

Tiles allow you to quickly access actions on the AAPS application without going through the watch face menu. The tiles are optional and can be added and configured by the user.

The tiles are used "next to" any watch face. To access a tile, when enabled, swipe right to left on your watch face to show them.

Please note; that the tiles do not hold the actual state of the AAPS phone app and will only make a request, which has to be confirmed on the watch before it is applied.

## Kutucuk nasıl eklenir?

Before using the tiles, you have to switch on "Control from Watch" in the "Wear OS" settings of Android APS.

![Wear phone preferences enabled](../images/wear_phone_preferences.jpg)

Depending on your Wear OS version, brand and smartphone there are two ways of enabling the tiles:

1. Saatinizde, saat arayüzünüzden; 
    * "+ Kutucuk ekle"ye ulaşana kadar sağdan sola kaydırın 
    * Kutucuklardan birini seçin.
2. Telefonunuzda saatiniz için eşlik eden uygulamayı açın. 
    * Samsung için "Galaxy Giyilebilir"i veya diğer markalar için "Wear OS" yi açın
    * "Kutucuk" bölümüne ve ardından "+ Ekle" düğmesine tıklayın
    * Eklemek istediğiniz AAPS kutucuğunu seçerek bulun. ![Wear -telefon kutucuk ekleme](../images/wear_companion_app_add_tile.png) kutucukların sırası, sürükleyip bırakarak değiştirilebilir

The content of the tiles can be customized by long-pressing a tile and clicking the "Edit" or "gear icon" button.

### APS(Eylemler) Kutucuğu

The action tile can hold 1 to 4 user-defined action buttons. To configure, long-press the tile, which will show the configuration options. Similar actions are also available through the standard watch menu.

Actions supported in the Action tile can request the AAPS phone app for:

* **Hesap**; karbonhidrat girdisine ve isteğe bağlı bir yüzdeye dayalı bir bolus hesaplaması yapın [1]
* **İnsülin**; ünite değeri girerek insülin verilmesini isteyin
* **Tedavi**; hem insülin iletimini talep edin hem de karbonhidrat ekleyin
* **Karb**; (yayma) karbonhidrat ekle
* **GeçiciH**; özel bir geçici hedef ve süre belirleyin

![Wear action tile, sample calculator](../images/wear_actions.png)

[1] Via, the Wear OS menu, set the "Calculator Percentage" option to "ON" to show the percentage input in the bolus calculator. The default percentage is based on the phone settings in the"Overview" section ["Deliver this part of the bolus wizard result %"](Config-Builder.html#advanced-settings) When the user does not provide a percentage, the default value from the phone is used. Configure the other parameters for the bolus calculator in the phone app via "Preferences" "Wizard Settings".

### AAPS(Geçici Hedef) Kutucuğu

The Temp Target Tile can request a temporary target based on AAPS phone presets. Configure preset time and targets through the phone app setting by going to "Preferences", "Overview", ["Default Temp-Targets"](Config-Builder.html#default-temp-targets) and set the duration and targets for each preset. Configure the visible actions on the tile through the tile settings. Long press the tile to show the configuration options and select 1 to 4 options:

* **Aktivite**; Spor için
* **Hipo**; hipo tedavisi sırasında hedefi yükseltmek için
* **Yakında öğün**; aktif insülini yükseltmek için hedefi düşürme
* **Manuel**; özel bir geçici hedef ve süre belirleme
* **İptal**; mevcut geçici hedefi durdurmak için

![Wear actions tile edit](../images/wear_tile_tempt_edit.png)

### AAPS(Hızlı asistan) Kutucuğu

The QuickWizard tile can hold 1 to 4 quick wizard action buttons, defined with the phone app[2]. See [QuickWizard](Config-Builder.html#quickwizard-settings). You can set standard meals (carbs and calculation method for the bolus) to be displayed on the tile depending on the time of the day. Ideal for the most common meals/snacks you eat during the day. You can specify if the quick wizard buttons will show on the phone, watch, or both. Please note that the phone can show only one quick wizard button at a time. The quick wizard setup also can specify a custom percentage of the insulin for the bolus. The custom percentage enables you to vary, for example, snack at 120%, slow absorbing breakfast 80% and hypo treatment sugar snack at 0%

![Wear actions tile and phone configuration](../images/quickwizard_watch_phone.png)

[2] Wear OS limits tiles update frequency to only once every 30 seconds. When you notice that the changes on your phone are not reflected on the tile, consider; waiting 30 seconds, using the "Resend all data" button from the Wear OS section of AAPS, or removing the tile and adding it again. To change the order of the QuickWizard buttons dragging an item up or down.

## Her zaman açık

Long battery life for Android Wear OS smartwatches is a challenge. Some smartwatches get as much as 30 hours before recharging. The display should be switched off for optimal power saving when not in use. Most watches support the “Always on” display.

Since AAPS version 3, we can use a “Simplify UI” during always-on-mode. This UI only contains the blood glucose, direction, and time. This UI is power-optimized with less frequent updates, showing less information and lightening fewer pixels to save power on OLED displays.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “Always on” or “Always on and charging”.

### Gece modu

While charging, it would be helpful if the display could stay “always-on” and show your blood glucose during the night. However, the standard watch-faces are too bright and have too much information, and the details are hard to read with sleepy eyes. Therefore, we added an option for the watch-face to simplify the UI only during charging when set in the configuration.

The simplified UI mode is available for the watch-faces: AAPS, AAPS V2, Home Big, Digital Style, Steampunk, and Cockpit. The simplified UI is optional and is configured through the watch face settings. (log press the watch face and click “edit” or the gear icon) Select the configuration “Simplify UI" and set it to “During charging” or “Always on and charging”

The Android developer options enable your watch to stay awake during charging. To make the developer options available, see https://developer.android.com/training/wearables/get-started/debugging. Set the “Stay awake when charging” to “on” in the developer options”.

Note: not all displays can handle always-on very well. It can cause screen burn-in, especially on the older OLED displays. The watches will generally dim the display to prevent burn-in; please check your owner’s manual, the manufacturing, or the internet for advice.

![Watchface Nightstand](../images/Watchface_nightstand.jpg)

![Simplified UI](../images/Watchface_simplified_ui.png)

### Performans ve pil ömrü ipuçları

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Arkadan aydınlatmalı (LED için) veya tam yoğunluk modunda (OLED için) aktif ekran
* Ekranda görüntü oluşturma
* Bluetooth üzerinden radyo iletişimi

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stok izleme yüzleri genellikle mağazadan indirilen özel olandan daha iyi optimize edilir.
* Etkin olmayan / karartılmış modda işlenen veri miktarını sınırlayan saat arayüzlerini kullanmak daha iyidir.
* Üçüncü taraf hava durumu widget'ları gibi diğer Komplikasyonları karıştırırken veya harici kaynaklardan gelen verileri kullanırken dikkatli olun.
* Daha basit saat yüzleriyle başlayın. Aynı anda bir komplikasyon ekleyin ve pil ömrünü nasıl etkilediklerini gözlemleyin.
* AAPS saat arayüzleri için **Koyu** temayı ve [**Eşleşen bölücü**](#watchface-settings) kullanmayı deneyin. OLED cihazlarda, yanan piksel miktarını sınırlayacak ve yanmayı sınırlayacaktır.
* Saatinizde nelerin daha iyi performans gösterdiğini kontrol edin: AAPS stok saat yüzleri veya AAPS Komplikasyonlarına sahip diğer saat yüzleri.
* Farklı aktivite profilleriyle birkaç gün boyunca gözlem yapın. Çoğu saat, bakış, hareket ve kullanımla ilgili diğer tetikleyicilerde ekranı etkinleştirir.
* GPS etkinleştirildiğinde, performansı etkileyen global sistem ayarlarınızı kontrol edin: bildirimler, arka ışık/etkin ekran zaman aşımı.
* [Test edilmiş telefonlar ve saatler listesini kontrol edin](Phones-list-of-tested-phones) ve diğer kullanıcıların deneyimleri ve bildirilen pil ömrü için [topluluğa sorun](../Where-To-Go-For-Help/Connect-with-other-users.md).
* **Saat arayüzünde veya komplikasyonda görüntülenen verilerin güncel olduğunu garanti edemeyiz**. Sonunda, bir saat yüzünün veya bir komplikasyonun ne zaman güncelleneceğine karar vermek Wear OS'ye kalmıştır. AAPS uygulaması güncelleme talep ettiğinde bile, sistem pilden tasarruf etmek için güncellemeleri ertelemeye veya yok saymaya karar verebilir. Şüphe duyduğunuzda ve saatinizin pili azaldığında - her zaman telefondaki ana AAPS uygulamasıyla iki kez kontrol edin.

(Watchfaces-troubleshooting-the-wear-app)=

## Wear uygulamasında sorun giderme:

* Bazen uygulamaları saatle yeniden senkronize etmek yardımcı olur, çünkü bunu yapmak biraz yavaş olabilir: Android Wear > Dişli simgesi > Saat adı > Uygulamaları yeniden eşitle.
* Geliştirici Seçeneklerinde (saatte) ADB hata ayıklamasını etkinleştirin, saati USB üzerinden bağlayın ve Android Studio'da Wear uygulamasını bir kez başlatın.
* Komplikasyonlar verileri güncellemiyorsa - önce AAPS saat arayüzlerinin çalışıp çalışmadığını kontrol edin.

### Sony Smartwatch 3

* Sony Smartwatch 3, APPS ile kullanılacak en popüler saatlerden biridir.
* Maalesef Google, 2020 sonbaharında wear OS 1.5 cihazları için desteği bıraktı. Bu Sony SW3'ü AndroidAPS 2.7 ve üstü ile kullanırken sorunlara yol açar.
* Bu soruna [sorun giderme sayfasında](../Usage/SonySW3.md) olası bir geçici çözüm bulunabilir.

## Nightscout verilerini görüntüleyin

Başka bir döngü sistemi kullanıyorsanız ve bir Android Wear saatinde döngü ayrıntılarınızı *görüntülemek* istiyorsanız veya çocuğunuzun döngüsünü izlemek istiyorsanız, yalnızca NSClient APK'sını oluşturabilir/indirebilirsiniz. Bunu yapmak için "NSClientRelease" derleme varyantını seçerek [APK oluşturma talimatlarını](../Installing-AndroidAPS/Building-APK.md) izleyin. Ortalama delta, AİNS, şu anda aktif olan geçici bazal oranı ve bazal profiller + CGM okumaları grafiğini içeren birkaç saat arayüzü vardır.

# Pebble

Pebble kullanıcıları, döngü verilerini *görüntülemek* için [Urchin saat yüzünü](https://github.com/mddub/urchin-cgm) kullanabilir (Nightscout'a yüklenmişse), ancak saat aracılığıyla AndroidAPS ile etkileşime geçemezsiniz. Aktif İnsülin ve şu anda etkin olan geçici bazal oranı ve tahminler gibi görüntülenecek alanları seçebilirsiniz. Açık döngü durumunda, bildirimin AndroidAPS'den alınıp alınmadığını ve ardından SMS veya push bildirimi gönderildiğini söyleyen bir uygulama oluşturmak için [IFTTT](https://ifttt.com/)'ı kullanabilirsiniz.