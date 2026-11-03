# CareLevo

CareLevo, CareMedi tarafından üretilen hortumsuz bir Patch pompadır. Her Patch en fazla 300 Ü insülin alır ve en fazla 7 gün (168 saat) takılır. Ek bir cihaz olmadan, telefonunuzun Bluetooth'u üzerinden **AAPS** ile iletişim kurar.

```{admonition} New driver
:class: warning
CareLevo sürücüsü **AAPS**'te yenidir. İlk Patch'inizi etkinleştirmeden önce bu sayfanın tamamını okuyun ve pompanın kendi kullanım talimatlarını yanınızda bulundurun.
```

Patch'in verebileceği en küçük doz 0,05 Ü'dir. **Profil** içindeki bazal oranlarınızı en az 0,05 Ü/sa ve 0,05 Ü/sa adımlarla ayarlayın; aksi halde **Profil**'in beklediği insülin ile Patch'in verdiği insülin biraz farklı olur. **AAPS**, Patch'in kabul ettiği bazal oranlarını kullanır.

```{contents} Table of contents
:depth: 1
:local: true
```

## AAPS ile pompa özellikleri

* **AAPS** ile telefonunuzun yerleşik Bluetooth'u üzerinden, ek bir iletişim cihazı olmadan iletişim kurar.
* 0,05 Ü adımlarla bolus.
* 0,05 Ü/sa ile 15 Ü/sa arasında, 0,05 Ü/sa adımlarla bazal oranları; bazal dilimleri 30 dakikadır.
* Mutlak oran olarak ayarlanan geçici bazal oranları, en fazla 12 saat.
* En fazla 8 saatlik yayma bolus.
* Yaz saati (DST) ve saat dilimi değişiklikleri elle yapılmalıdır. Saat dilimi değiştiğinde Patch sizi bilgilendirir.

## Pompa Kurulumu

1. **AAPS** ana ekranının sol üst köşesindeki **menüyü** (☰) açın ve **Konfigürasyon** seçeneğini seçin.
1. Pompa bölümünde **Carelevo** seçeneğini seçin.
1. Ana ekrana dönmek için Geri tuşuna basın.

![Konfigürasyon > Pompa içinde seçili Carelevo eklentisi](../images/v4/Pumps/carelevo_enabled.png)

## Ayarlar

Pompa ekranını **Yönet → Pompa** (veya **Konfigürasyon → Pompa → Eklentiyi aç**) ile açın.

CareLevo ayarlarını sağ üst köşedeki **Ayarlar** (dişli) simgesine basarak açın. Üç ayar vardır:

![Carelevo sürücü ayarları](../images/v4/Pumps/carelevo_settings.png)

### Düşük İnsülin Bildirimi Ayarı

Rezervuarda kalan insülin seçilen miktara ulaştığında Patch sizi bilgilendirir. 20 Ü ile 50 Ü arasında, 5 Ü adımlarla ayarlanabilir. Varsayılan değer 30 Ü'dir. Bu ayardan bağımsız olarak, 10 Ü'den az insülin kaldığında Patch kritik bir alarm verir ve insülin iletimini durdurur.

### Patch Kullanım Bildirimi Ayarı

Patch seçilen saat kadar takıldığında sizi bilgilendirir; böylece değişimi planlayabilirsiniz. 24 ile 167 saat arasında ayarlanabilir. Varsayılan değer 116 saattir.

### Patch Bilgi Alarmı

Bu ayar açıkken Patch; bir bolus, yayma bolus veya geçici bazal başladığında ve bittiğinde bip sesi çıkarır. Varsayılan değer kapalıdır.

## Pompa ekranı

![Etkin Patch olmadan Carelevo pompa ekranı](../images/v4/Pumps/carelevo_pump_screen.png)

Pompa ekranı şunları gösterir: **Bluetooth durumu** (Aktif Patch yok, Bağlantı kesildi veya Bağlandı), Patch'in **Seri No.** bilgisi, **Etkinleştirme Zamanı** ve **Süre sonu**, güncel **Bazal Oran** ve **Geçici bazal oranı**, **Kalan İnsülin** (kalan / doldurulan), **Kalan Patch Süresi** ve **İletilen toplam insülin**.

Düğmeler Patch'in durumuna bağlıdır:

* **Patch'i Etkinleştir**: Yeni bir Patch'in etkinleştirilmesini başlatır, aşağıya bakın.
* **İnsülin Rehberi**: Bir Patch'i insülinle doldurmanın on iki adımını gösterir.
* **İnfüzyonu Askıya Al** / **İnfüzyona Devam Et**: İnsülin iletimini duraklatır ve yeniden başlatır, aşağıya bakın.
* **Patch'i Çıkar**: Yeni bir Patch etkinleştirilebilmesi için mevcut Patch'i durdurur.

## Patch'i etkinleştirme

Başlamadan önce **AAPS**'te bir **Profil**'in etkin olduğundan ve Bluetooth'un açık olduğundan emin olun. Patch açıldıktan sonra sınırlı bir süre içinde etkinleştirilmelidir; süre dolarsa Patch **Patch uygulama zaman aşımı** alarmı verir ve kullanılamaz.

Pompa ekranında **Patch'i Etkinleştir** düğmesine basın ve adımları izleyin. İğne yerleştirilmeden önce istediğiniz zaman vazgeçebilirsiniz; girdiğiniz bilgiler silinir.

### İnsülini seçin

Kullandığınız insülini onaylayın. Patch, hızlı etkili U-100 insülin gerektirir.

### Patch'i insülinle doldurun

Ne kadar süre takacağınızı göz önünde bulundurarak Patch'i 50 ile 300 Ü arasında insülinle doldurun. Doldurma talimatlarına ihtiyacınız varsa **İnsülin Rehberi** düğmesine basın. Ardından doldurma miktarına dokunun ve doldurduğunuz miktarı seçin; **AAPS** bunu kalan insülini göstermek için kullanır.

### Patch'i bağlayın

1. Patch'i blister ambalajından çıkarın ve iğne kapağını çıkarın.
1. Patch'in güç düğmesine bir saniyeden uzun basın. Bip sesinden sonra **Patch Ara** düğmesine dokunun.
1. Bulunan Patch doğru Patch ise **Onayla** düğmesine dokunun. Değilse **Yeniden Tara** düğmesine dokunun.

### Güvenlik kontrolü

Patch bağlandıktan sonra **Güvenlik Kontrolü** düğmesine basın. Patch kendini test eder ve doldurma (prime) yapar. İğne ucunda bir insülin damlası oluştuğunu kontrol edin. Damla görünmüyorsa **Tekrar dene** düğmesine basın. Kontrol tamamlandığında **İleri** düğmesine basın.

### Bölge ve Patch'in yapıştırılması

1. Patch'i takacağınız bölgeyi seçin.
1. Bölgeyi alkollü pamukla iyice temizleyin.
1. Koruyucu bandı çıkarın ve Patch'i işaretli nokta yukarı bakacak şekilde cildinize yapıştırın.
1. Patch yapıştırıldıktan sonra **İleri** düğmesine basın.

### İğneyi yerleştirin

1. Emniyet kapağını ok yönünde çevirin ve çıkarın.
1. Aplikatörün basma düğmesine sonuna kadar bastırın ve 10 saniye basılı tutun. İğne yerleştirildiğinde bip sesi duyulur.
1. Aplikatörü çıkarın ve **Yerleştirmeyi Onayla** düğmesine basın.

Yerleştirme başarısız olursa **AAPS** kaç deneme hakkınız kaldığını söyler. Deneme hakkı kalmadığında Patch **İğne Yerleştirme Hatası** alarmı verir ve değiştirilmesi gerekir.

Yerleştirme onaylanır onaylanmaz insülin iletimi başlar.

## Bolus mesajları

Patch bir bolusu reddederse **AAPS** nedenini söyler. Örneğin *Bolus verilemiyor. Verilebilecek bolus: 2,8 Ü* mesajı, Patch'in şu anda yalnızca bu miktarı verebileceği anlamına gelir.

Bir bolusu durdurursanız ve Patch durdurmayı onaylamazsa, **AAPS** bolusun bitmesini bekler ve Patch'in bildirdiği miktarı kaydeder. Bir bolus kaydedilmediyse (örneğin çalışırken durdurulduğu için), **AAPS** onu Patch toplamından ekler ve tekrar denemeden önce AİNS'i kontrol etmenizi ister.

## İnsülin iletimini askıya alma ve devam ettirme

Pompa ekranında **İnfüzyonu Askıya Al** düğmesine basın ve iletimin ne kadar süre duraklatılacağını seçin: 30 dakikalık adımlarla 30 dakika ile 4 saat arası. İletim kendiliğinden devam etmez: Duraklatma bittiğinde Patch bir **İnsülini Başlat** uyarısı verir. Pompa ekranında **İnfüzyona Devam Et** düğmesine veya uyarıdaki **İnsülini Başlat** düğmesine basın ve onaylayın.

## Patch'i çıkarma

Pompa ekranında **Patch'i Çıkar** düğmesine basın ve onaylayın. İnsülin iletimi durur ve Patch artık kullanılamaz. Patch'i vücudunuzdan çıkarın ve yeni bir Patch etkinleştirin.

Kritik bir alarm Patch'i durdurduğunda, alarm bunun yerine **Patch'i Devre Dışı Bırak** seçeneğini sunar. Buna basmak Patch'i aynı şekilde çıkarır.

(carelevo-alarms-and-notifications)=

## Alarmlar ve bildirimler

Patch üç düzeyde olay bildirir. Hepsi **AAPS** bildirimleri olarak gösterilir.

### Kritik alarmlar

İnsülin iletimi durdu. Hemen harekete geçin:

* **Düşük insülin**: 10 Ü'den az insülin kaldı. Patch'i devre dışı bırakın ve değiştirin.
* **Patch'in Süresi Doldu**: Patch kullanım ömrünün sonuna ulaştı. Patch'i devre dışı bırakın ve değiştirin.
* **Düşük Pil**: Patch'i çıkarın ve değiştirin.
* **Yüksek/Düşük Sıcaklık**: 40 ℉ ile 99 ℉ (4,4 ℃ ile 37,2 ℃) arasında uygun bir sıcaklığa geçin.
* **Otomatik kapanma**: Otomatik kapanma uyarısı yok sayıldığı için Patch durdu. Bazal iletimi yeniden başlatmak için **İnsülini Başlat** düğmesine basın.
* **Patch uygulama zaman aşımı**, **Tanılama Başarısız Oldu**, **Patch hatası**, **Tıkanma** ve **İğne Yerleştirme Hatası**: Patch'i devre dışı bırakın ve değiştirin.

### Alerts

İnsülin iletimi devam eder, ancak dikkat etmeniz gereken bir durum vardır:

* **Düşük insülin**: Rezervuar, **Düşük İnsülin Bildirimi Ayarı** içinde ayarlanan miktara ulaştı. Patch'i değiştirmeye hazırlanın.
* **Patch'in Süresi Yakında Dolacak** ve **Patch Çalışma Ömrü Doldu**: Patch'i değiştirin.
* **Düşük Pil**: Patch'i değiştirmeye hazırlanın.
* **Yüksek/Düşük Sıcaklık**: Patch yeniden 40 ℉ ile 99 ℉ (4,4 ℃ ile 37,2 ℃) arasına gelene kadar iletim duraklatılır.
* **Otomatik kapanma**: **Tamam** düğmesine dokunun. Yok sayılırsa uyarı kritik bir alarma dönüşür ve iletim durur.
* **Patch Etkinleştirme Tamamlanmadı**: Etkinleştirmeyi tamamlamak için **Tamam** düğmesine dokunun.
* **İnsülini Başlat**: Ayarladığınız duraklatma sona erdi. İletime devam etmek için **İnsülini Başlat** düğmesine dokunun.
* **Bluetooth'u Açın** ve **BLE bağlı değil**: Telefon Patch'e ulaşamıyor. Bluetooth'u açın veya Patch bağlantısını kontrol edin.

### Bilgilendirmeler

Yalnızca bilgi amaçlı: **Düşük insülin**, **Patch Kullanım Süresi Bildirimi** (**Patch Kullanım Bildirimi Ayarı** içinde ayarlanan süre geçti), **Patch Kontrol Bildirimi**, **Saat Dilimi Değişikliği** ve **Kan Şekerini Kontrol Edin** (bir bolustan belirli bir süre sonra).

Patch, kendi düşük glikozda askıya alma (**LGS**) işlevi başladığında veya bittiğinde de bildirir. **AAPS** bu işlevi kullanmaz; düşük glikozu döngü kendisi yönetir.

## Nereden yardım alabilirsiniz?

CareLevo sürücüsüyle ilgili sorunları [AAPS GitHub sorunlar (issues) sayfasında](https://github.com/nightscout/AndroidAPS/issues) veya AAPS topluluk kanallarında bildirin, bkz. [Nereden yardım alabilirim?](../GettingHelp/WhereCanIGetHelp.md).
