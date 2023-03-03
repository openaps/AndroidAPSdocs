# Tercihler

- Ana ekranın sağ üst tarafındaki üç noktalı menüyü tıklayarak **tercihleri açın**.

  ```{image} ../images/Pref2020_Open2.png
  :alt: Tercihleri açın
  ```

- Bu sekmeyi açıp Eklenti tercihleri'ne tıklayarak belirli bir sekmenin (ör. pompa sekmesi) tercihlerine doğrudan atlayabilirsiniz.

  ```{image} ../images/Pref2020_OpenPlugin2.png
  :alt: Tercihler Eklentisini açın
  ```

- **Alt menüler**, alt menü başlığının altındaki üçgene tıklanarak açılabilir.

  ```{image} ../images/Pref2020_Submenu2.png
  :alt: Alt menüyü aç
  ```

- Tercihler ekranının üst kısmındaki **filtre** ile belirli tercihlere hızlı bir şekilde erişebilirsiniz. Sadece aradığınız metnin bir kısmını yazmaya başlayın.

  ```{image} ../images/Pref2021_Filter.png
  :alt: Tercihler filtresi
  ```

```{contents}
:backlinks: entry
:depth: 2
```

(Preferences-general)=
## Genel

**Ünite**

- Kullanımınıza bağlı olarak birimleri mmol/l veya mg/dl olarak ayarlayın.

**Dil**

- Telefonun varsayılan dilini kullanmak için yeni seçenek (önerilir).

- AAPS'yi standart telefon dilinizden farklı bir dilde istiyorsanız, birçok dil arasından seçim yapabilirsiniz.

- Sistem dlinden farklı bir dil kullanıyorsanız bazen dilin karıştığını görebilirsiniz. Bunun nedeni, varsayılan Android dilini geçersiz kılmanın bazen çalışmadığı bir Android sorunudur.

  ```{image} ../images/Pref2020_General.png
  :alt: Tercihler > Genel
  ```

**Hasta Adı**

- Birden fazla kurulum arasında ayrım yapmanız gerekiyorsa kullanılabilir (örn. ailenizdeki 2 T1D çocuk için).

(Preferences-protection)=
### Güvenlik

(Preferences-master-password)=
#### Ana parola

- 2.7 sürümünden itibaren şifrelenmiş oldukları için [ayarları dışa aktarabilmek](../Usage/ExportImportSettings.md) için gereklidir. **Biyometrik koruma, OnePlus telefonlarda çalışmayabilir. Bu bazı OnePlus telefonlarında bilinen bir sorunudur.**

- Tercihleri Açın (ana ekranın sağ üst köşesindeki üç noktalı menü)

- "Genel" altındaki üçgeni tıklayın

- "Ana-Parola" ya tıklayın

- Parolayı girin, onaylayın ve Tamam'a tıklayın.

  ```{image} ../images/MasterPW.png
  :alt: Ana parola tanımlama
  ```

#### Ayarların Güvenliği "Settings protection"

- Ayarlarınızı bir parola veya telefonun biyometrik kimlik doğrulaması ile koruyun (ör. [çocuk AAPS kullanıyor](../Children/Children.md)).

- Yalnızca [dışa aktarılan ayarların](../Usage/ExportImportSettings.md) güvenliğini sağlamak için ana parola kullanmak istiyorsanız, özel parola kullanılmalıdır.

- Özel bir parola kullanıyorsanız, parolayı [yukarıda](Preferences-master-password) açıklandığı gibi ayarlamak için "Parola ayarları" satırına tıklayın.

  ```{image} ../images/Pref2020_Protection.png
  :alt: Güvenlik
  ```

#### Uygulama Güvenliği

- Uygulama korumalıysa, AAPS'i açmak için şifre girmeniz veya telefonun biyometrik kimlik doğrulamasını kullanmanız gerekir.
- Yanlış şifre girilirse uygulama hemen kapanır - ancak daha önce başarıyla açılmışsa arka planda çalışmaya devam eder.

#### Bolus koruması

- AAPS küçük bir çocuk tarafından kullanılıyorsa ve siz [SMS yoluyla bolus](../Children/SMS-Commands.md) gönderiyorsanız, bolus koruması yararlı olabilir.

- Aşağıdaki örnekte biyometrik koruma istemini görüyorsunuz. Biyometrik kimlik doğrulama çalışmazsa, beyaz kısmın üzerindeki boşluğa tıklayın ve ana parolayı girin.

  ```{image} ../images/Pref2020_PW.png
  :alt: Biyometrik koruma
  ```

(Preferences-skin)=
#### Görünüm

- Dört çeşit görünüm arasından seçim yapabilirsiniz:

  ```{image} ../images/Pref2021_SkinWExample.png
  :alt: Görünüm seçimi + örnekler
  ```

- 'Düşük çözünürlüklü görünüm', düşük çözünürlüklü ekranda daha fazla kullanılabilir alana sahip olmak için daha kısa etiket ve yaş/seviye satırı kaldırılmış olarak gelir.

- Diğer görünümlerin farkı, telefonun ekran yönüne bağlıdır.

##### Dikey oryantasyon

- **Orijinal Dış Görünüm** ve **Butonlar her zaman ekranın altında görüntülenir** aynıdır
- **Geniş Ekran** diğer dış görünümlere kıyasla tüm grafiklerin daha büyük boyutuna sahiptir

##### Yatay oryantasyon

- **Orijinal Dış Görünüm** ve **Büyük Ekranı** kullanarak ekranın alt kısmındaki butonları görmek için aşağı kaydırmanız gerekir

- **Geniş Ekran** diğer dış görünümlere kıyasla tüm grafiklerin daha büyük boyutuna sahiptir

  ```{image} ../images/Screenshots_Skins.png
  :alt: Ekran yönüne göre görünüm
  ```

(Preferences-overview)=
## Genel Bakış

- Genel bakış bölümünde ana ekran için tercihleri tanımlayabilirsiniz.

  ```{image} ../images/Pref2020_OverviewII.png
  :alt: Tercihler > Genel Bakış
  ```

### Ekranı açık tut

- Sunum yaparken kullanışlıdır.
- Çok fazla enerji tüketeceğinden telefonunuzu şarj cihazına takmanız tavsiye edilir.

(Preferences-buttons)=
### Butonlar

- Ana ekranınızın altında hangi butonların görüneceğini tanımlayın.

- Karbonhidrat ve insülin diyalogundaki üç artış butonu ile kolay giriş için miktar tanımlayabilirsiniz.

  ```{image} ../images/Pref2020_OV_Buttons.png
  :alt: Tercihler > Butonlar
  ```

(Preferences-quick-wizard)=
### Hızlı Asistan

- Sürekli yediğiniz yiyecekler için, karbonhidrat miktarını girdiğiniz ve neleri hesaplayacağınızı ayarladığınız hızlı asistan butonu oluşturarak, ana sayfaya ekleyip kullanabilirsiniz.

- Oluştururken, butonun ana ekranınızda günün hangi saatlerinde görüneceğini belirleyebilirsiniz. - her periyot için bir buton görünür.

- Hızlı sihirbaz düğmesini tıklarsanız AAPS, mevcut ayarlarınıza göre girdiğiniz karbonhidrat için bir bolus hesaplar ve önerir (ayarlanmışsa kan şekeri değerini veya aktif insülini de dikkate alarak).

- İnsülin verilmeden önce önerinin onaylanması gerekir.

  ```{image} ../images/Pref2020_OV_QuickWizard.png
  :alt: Tercihler > Hızlı Asistan Butonu
  ```

(Preferences-default-temp-targets)=
### Varsayılan Geçici hedefler

- [Geçici hedefler (GH)](../Usage/temptarget.md), kan şekeri hedefinizi belirli bir süre için değiştirmenizi sağlar.

- Varsayılan GH ayarı ile aktivite, yakında öğün vb. butonlar için hedefinizi kolayca değiştirebilirsiniz.

- Hedefinizi, ana ekranın sağ üst köşesindeki hedefinize uzun basarak veya alttaki turuncu “Karbonhidrat” düğmesindeki kısayolları kullanarak değiştirebilirsiniz.

  ```{image} ../images/Pref2020_OV_DefaultTT.png
  :alt: Tercihler > Varsayılan geçici hedefler
  ```

### Standart insülin miktarlarını Hazırla/Doldur

- AAPS aracılığıyla boruyu doldurmak veya kanülü hazırlamak istiyorsanız, bunu [eylemler sekmesinden](Screenshots-action-tab) yapabilirsiniz.
- Bu diyalogda önceden ayarlanmış (pompanıza göre) değerler tanımlanabilir.

(Preferences-range-for-visualization)=
### Görselleştirme Aralığı

- Ana ekrandaki grafiğin hangi bölümünün hedef aralığınız olacağını ve yeşil arka planla doldurulacağını tanımlayın.

  ```{image} ../images/Pref2020_OV_Range2.png
  :alt: Tercihler > Görselleştirme aralığı
  ```

### Kısa sekme başlıkları

- Ekranda daha fazla sekme başlığı görmenizi sağlar.

- Örneğin 'OpenAPS AMA' sekmesi 'OAPS' olur, 'GÖREVLER' 'GRV' olur vb.

  ```{image} ../images/Pref2020_OV_Tabs.png
  :alt: Tercihler > Sekmeler
  ```

### Tedavi diyaloglarında not alanını göster

- Tedavilerinize kısa metin notları ekleme seçeneği sunar (bolus sihirbazı, karbonhidrat, insülin...)

  ```{image} ../images/Pref2020_OV_Notes.png
  :alt: Tercihler > Tedavi diyaloglarındaki notlar
  ```

(Preferences-status-lights)=
### Durum ışıkları

- Durum ışıkları için görsel bir uyarı verir

  - Sensör yaşı
  - Belirli akıllı okuyucular için sensör pil düzeyi (ayrıntılar için [ekran görüntüleri sayfasına](Screenshots-sensor-level-battery) bakın).
  - İnsülin yaşı (rezervuarın kullanıldığı gün sayısı)
  - Rezervuar seviyesi (Ünite)
  - Kanül yaşı
  - Pompa pil yaşı
  - Pompa pil seviyesi (%)

- Eşik uyarısı aşılırsa değerler sarı renkte gösterilecektir.

- Kritik eşik aşılırsa değerler kırmızı ile gösterilir.

- AAPS 2.7'den önceki sürümlerde durum ışıkları için ayarların Nightscout üzerinden yapılması gerekiyordu.

  ```{image} ../images/Pref2020_OV_StatusLights2.png
  :alt: Tercihler > Durum Işıkları
  ```

(Preferences-advanced-settings-overview)=
### Gelişmiş ayarlar

```{image} ../images/Pref2021_OV_Adv.png
:alt: Tercihler > Durum Işıkları
```

#### Bolus sihirbazı sonucunun bu kadarını ilet

- Bolus sihirbazı sonucunun yalnızca bir kısmını iletmek için genel ayar.
- Bolus sihirbazı kullanılırken hesaplanan bolusun yalnızca ayarlanan yüzdesi (10 ile 100 arasında olmalıdır) iletilir.
- Yüzde, bolus sihirbazında gösterilir.

#### Bolus danışmanı

- [Bolus sihirbazını](Screenshots-bolus-wizard) çalıştırırsanız ve glikoz değeriniz 10 mmol'ün (180 mg/dl) üzerindeyse, bir düzeltme bolusu sunulur.

- Düzeltme bolusu kabul edilirse **hiç karbonhidrat** kaydedilmez.

- Yemeğe başlamak için glikoz değeri iyi seviyede olduğunda bir alarm başlatılacaktır.

- Tekrar [Bolus sihirbazına](Screenshots-bolus-wizard) girmeniz ve yemek istediğiniz karbonhidrat miktarını girmeniz gerekir.

  ```{image} ../images/Home2021_BolusWizard_CorrectionOffer.png
  :alt: Bolus danışmanı mesajı
  ```

(Preferences-superbolus)=
#### Süperbolus

- Bolus sihirbazında süper bolusu etkinleştirme seçeneği.
- [Süperbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) ani artışları önlemek için önümüzdeki iki saat içinde bazal orandan bir miktar insülin "ödünç alma" konseptidir.

## Tedavi güvenliği

### Hasta tipi

- Güvenlik limitleri bu ayarda seçtiğiniz yaşa göre belirlenir.
- Bu limitlere (maksimum bolus gibi) çok sık ulaşıyorsanız, bir adım yukarı çıkmanın zamanı gelmiştir.
- Gerçek yaştan daha yüksek olanı seçmek kötü bir fikirdir çünkü insülin iletişim kutusuna yanlış değer girilerek (örneğin ondalık nokta atlanarak) aşırı doz almaya neden olabilir.
- Bu sabit güvenlik sınırları için gerçek rakamları bilmek istiyorsanız, [bu sayfada](../Usage/Open-APS-features.md) kullandığınız algoritma özelliğine gidin.

### Maks izin verilen bolus \[Ü\]

- AAPS'in bolus olarak bir kerede iletmesine izin verilen maksimum insülin miktarını tanımlar.
- Bu ayar, yanlış giriş veya kullanıcı hatası nedeniyle büyük miktarda bolus verilmesini önlemek için bir güvenlik sınırıdır.
- Bunu, bir öğün veya düzeltme dozu için ihtiyaç duyabileceğiniz maksimum bolus insülin dozuna karşılık gelen makul bir miktara ayarlamanız önerilir.
- Bu kısıtlama, bolus hesaplayıcısına da uygulanır.

### Maks izin verilen karbonhidrat \[g\]

- AAPS bolus hesaplayıcısının dozlamasına izin verilen maksimum karbonhidrat miktarını tanımlar.
- Bu ayar, yanlış giriş veya kullanıcı hatası nedeniyle büyük miktarda bolus verilmesini önlemek için bir güvenlik sınırıdır.
- Bunu, bir yemek için ihtiyaç duyabileceğiniz maksimum karbonhidrat miktarına kabaca karşılık gelen makul bir miktara ayarlamanız önerilir.

## Döngü

(Preferences-aps-mode)=
### APS modu

- Açık ve kapalı döngü ile düşük glikoz süspansiyonu (DGS) arasında geçiş yapar
- **Açık döngü**, GBO önerilerinin verilerinize göre yapıldığı ve AAPS giriş ekranında bir bildirim olarak göründüğü anlamına gelir. Manuel onaydan sonra, insülin dozlama komutu pompaya aktarılacaktır. Yalnızca sanal pompa kullanıyorsanız, manuel olarak girmeniz gerekir.
- **Kapalı döngü**, GBO önerilerinin sizden onay veya girdi almadan otomatik olarak pompanıza gönderildiği anlamına gelir.
- **Düşük glikoz askıya alma**, kapalı döngüye benzer, ancak maxIOB ayarını sıfır olarak geçersiz kılar. Bu, kan şekeri düşüyorsa bazal hızı azaltabileceği, ancak kan şekeri yükseliyorsa bazal hızı yalnızca bazal AİNS negatifse (örneğin önceki bir Düşük Glikoz Askıya Alma işleminden) artacağı anlamına gelir.

(Preferences-minimal-request-change)=
### Minimum istek değişikliği \[%\]

- Açık döngü kullanırken, AAPS'in bazal hızı ayarlamanızı önerdiği her seferde bildirim alırsınız.
- Bildirim sayısını azaltmak için daha geniş bir KŞ hedef aralığı kullanabilir veya minimum istek oranının yüzdesini artırabilirsiniz.
- Bu, bir bildirimi tetiklemek için gereken göreli değişikliği tanımlar.

(Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)=
## Gelişmiş Yemek Asistanı (AMA) veya Süper Mikro Bolus (SMB)

[Konfigürasyon ayarları](../Configuration/Config-Builder.md) içindeki ayarlarınıza bağlı olarak iki algoritma arasında seçim yapabilirsiniz:

- [Gelişmiş yemek yardımı (OpenAPS AMA)](Open-APS-features-advanced-meal-assist-ama) - algoritmanın 2017'deki durumu
- [Süper Mikro Bolus (OpenAPS SMB)](Open-APS-features-super-micro-bolus-smb) - ileri düzey kullanıcılar için en yeni algoritma

### OpenAPS SMB ayarları

- Karbonhidratları doğru bir şekilde girerseniz, yemek bolusunuzdan sonra sistem yüksek kan şekerine daha hızlı müdahele eder.
- Ayarlar ve Otoduyarlılık hakkında daha fazla ayrıntıyı [OpenAPS dokümanlarında](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html) bulabilirsiniz.

#### Maks Ü/s geçici Bazal ayarlanabilir

- APPS'in tehlikeli derecede yüksek bazal oranı vermesini önlemek için bir güvenlik sınırıdır.
- Değer, ünite/saat (Ü/s) cinsinden ölçülür.
- Mantıklı bir değer ayarlamanız önerilir. Profilinizdeki **en yüksek bazal oranı** alıp **4 ile çarpmanız** iyi bir öneridir.
- Örneğin, profilinizdeki en yüksek bazal oran 0,5 Ü/s ise, bunu 4 ile çarparak maks geçici bazal için 2 Ü/s değerini elde edersiniz.
- Ayrıca [ayrıntılı özellik açıklamasına](Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal) bakın.

#### OpenAPS'in \[U\] iletebileceği maksimum bazal AİNS

- Normal bazal profilinizin yanı sıra vücudunuzda birikmesine izin verilen ek bazal insülin miktarı (ünite olarak).
- Bu değere ulaşıldığında, AAPS, Aktif insülin (AİNS) tekrar bu aralığa düşene kadar ek bazal insülin vermeyi durduracaktır.
- Bu değer **bolus AİNS değerini dikkate almaz** yalnızca bazal değeridir.
- Bu değer, normal profildeki bazal oranınızdan bağımsız olarak hesaplanır ve izlenir. Normal bazal oranınızın üzerindeki ek bazal insülin dikkate alınır.

Döngüye başladığınızda, sisteme alışırken **Maks Bazal AİNS değerini bir süreliğine 0 olarak ayarlamanız önerilir**. Bu, AAPS'in herhangi bir ek bazal insülin vermesini engeller. Bu süre zarfında AAPS, hipoglisemiyi önlemeye yardımcı olmak için bazal insülininizi sınırlandırabilir veya kapatabilir. Bu adım, aşağıdaki maddeleri anlamak ve gözlemlemek için önemlidir:

- AAPS sistemine alışmak ve nasıl güvenli çalıştığını izlemek için kendinize süre ayırmak.
- Bazal profilinizi ve İnsülin Duyarlılık Faktörünüzü (ISF) mükemmelleştirme fırsatını yakalamak.
- AAPS'in hipoglisemiyi önlemek için bazal insülininizi nasıl sınırladığını görmek.

Kendinizi rahat hissettiğinizde, Maks Bazal AİNS değerini yükselterek sistemin size ek bazal insülin vermeye başlamasına izin verebilirsiniz. Bunun için önerilen ilke, profilinizdeki **en yüksek bazal oranı** alıp **3 ile çarpmanız** şeklindedir. Örneğin, profilinizdeki en yüksek bazal oran 0,5 Ü/s ise, bunu 3 ile çarparak 1,5 Ü/s değerini elde edebilirsiniz.

- Bu değerle ihtiyatlı başlayabilir ve zamanla yavaş yavaş artırabilirsiniz.
- Bunlar yalnızca yönergedir; herkesin vücudu farklıdır. Burada önerilenden daha fazlasına veya daha azına ihtiyacınız olduğunu fark edebilirsiniz, ancak her zaman ihtiyatlı başlayın ve yavaş yavaş ayarlayın.

**Not: Bir güvenlik özelliği olarak, Max Basal AİNS üst sınırı 7ü dir.**

#### Otoduyarlılık

- [Otoduyarlılık](Open-APS-features-autosens) kan şekeri sapmalarına (pozitif/negatif/nötr) bakar.
- Bu sapmalara göre sizin ne kadar duyarlı/dirençli olduğunuzu anlamaya çalışacak ve bu sapmalara göre bazal hızı ve IDF'yi ayarlayacaktır.
- "Otoduyarlılıkta hedefi ayarla"yı seçerseniz, algoritma ayrıca glikoz hedefinizi de değiştirir.

#### Gelişmiş ayarlar (OpenAPS AMA)

- Normalde bu diyalogdaki ayarları değiştirmeniz gerekmez!
- Yine de bunları değiştirmek isterseniz ne yaptığınızı anlamak için, [OpenAPS dokümantasyonundaki](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) ayrıntıları okuduğunuzdan emin olun.

(Preferences-openaps-smb-settings)=
### OpenAPS SMB ayarları

- AMA'nın aksine, [SMB](Open-APS-features-super-micro-bolus-smb) glikoz seviyelerini kontrol etmek için geçici bazal oranları kullanmaz, esas olarak küçük süper mikro boluslar kullanır.

- SMB'yi kullanmak için [görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)'a başlamış olmalısınız.

- İlk üç ayar [yukarıda](Preferences-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal) açıklanmıştır.

- Farklı etkinleştirme seçenekleriyle ilgili ayrıntılar, [OpenAPS özelliği bölümünde](Open-APS-features-enable-smb) açıklanmaktadır.

- *SMB'lerin dakika cinsinden ne sıklıkta verileceği*, SMB'nin varsayılan olarak yalnızca 4 dakikada bir teslim edilmesi için bir kısıtlamadır. Bu değer, sistemin SMB'yi çok sık verilmesini engeller (örneğin, bir geçici hedefin ayarlanması durumunda). Sonuçları tam olarak bilmiyorsanız bu ayarı değiştirmemelisiniz.

- 'Hassasiyet hedefi yükseltir' veya 'Direnç hedefi düşürür' etkinleştirilirse [Otoduyarlılık](Open-APS-features-autosens) kan şekeri sapmalarınıza göre glikoz hedefinizi değiştirir.

- Hedef değiştirilirse, giriş ekranınızda hedef yeşil bir arka planla görüntülenecektir.

  ```{image} ../images/Home2020_DynamicTargetAdjustment.png
  :alt: Hedef otoduyarlılık tarafından değiştirilmiş
  ```

(Preferences-carb-required-notification)=
#### Karbonhidrat gerekli bildirimi

- Bu özellik yalnızca SMB algoritması seçildiğinde kullanılabilir.

- Referans tasarım karbonhidrat gerektirdiğini tespit ettiğinde ek karbonhidrat önerilecektir.

- Bu durumda 5, 15 veya 30 dakika ertelenebilecek bir bildirim alacaksınız.

- Ek olarak, gerekli karbonhidratlar ana ekranınızdaki AKRB bölümünde görüntülenecektir.

- Bir eşik tanımlanabilir - bir bildirimi tetiklemek için gereken minimum karbonhidrat miktarı.

- İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

  ```{image} ../images/Pref2020_CarbsRequired.png
  :alt: Giriş ekranında karb gerekli gösterimi
  ```

#### Gelişmiş ayarlar (OpenAPS SMB)

- Normalde bu diyalogdaki ayarları değiştirmeniz gerekmez!
- Yine de bunları değiştirmek isterseniz ne yaptığınızı anlamak için, [OpenAPS dokümantasyonundaki](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) ayrıntıları okuduğunuzdan emin olun.

## Emilim ayarları

```{image} ../images/Pref2020_Absorption.png
:alt: Emilim ayarları
```

### min_5m_carbimpact

- Algoritma, karbonhidratların ne zaman emildiğini belirlemek için BGI (kan şekeri etkisi) kullanır.

- Bu değer yalnızca CGM okumalarındaki boşluklar sırasında veya fiziksel aktivite kan şekeri artışını tükettiğinde kullanılır. Bunun dışında AAPS tarafından aktif karbonhidrat bozulur.

- Karbonhidrat emiliminin kanınızın reaksiyonlarına göre dinamik olarak çalışılamadığı zamanlarda, karbonhidratlarınıza varsayılan bir bozulma ekler. Temel olarak bir ön güvenliktir.

- Basitçe söylemek gerekirse: Algoritma, mevcut insülin vb. dozundan etkilendiğinde KŞ'lerinizin nasıl davranması *gerektiğini* "bilir".

- Beklenen davranıştan pozitif bir sapma olduğunda, bazı karbonhidratlar emilir/çürür. Büyük değişiklik=çok karbonhidrat vs.

- min_5m_carbimpact, 5 dakika başına varsayılan karbonhidrat emilim etkisini tanımlar. Daha fazla ayrıntı için [OpenAPS dokümanlarına](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact) bakın.

- AMA için standart değer 5, SMB için 8'dir.

- Ana ekrandaki AKRB grafiği, en üste turuncu bir daire koyarak min_5m_impact'in ne zaman kullanıldığını gösterir.

  ```{image} ../images/Pref2020_min_5m_carbimpact.png
  :alt: AKRB grafiği
  ```

### Maksimum besin emilim süresi

- Sık sık yüksek yağlı veya proteinli yemekler yiyorsanız, yemek emilim sürenizi artırmanız gerekecektir.

### Gelişmiş ayarlar - otoduyarlılık oranı

- [Otoduyarlılık](Open-APS-features-autosens) min. ve maks. oranı tanımlama.
- Normalde standart değerler (maks. 1.2 ve min. 0.7) değiştirilmemelidir.

## Pompa Ayarları

Buradaki seçenekler [Konfigürasyon ayarları](Config-Builder-pump) içinde seçtiğiniz pompa sürücüsüne bağlı olarak değişecektir.  Pompanızı pompayla ilgili talimatlara göre eşleştirin ve ayarlayın:

- [DanaR Insulin Pompası](../Configuration/DanaR-Insulin-Pump.md)
- [DanaRS Insulin Pompası](../Configuration/DanaRS-Insulin-Pump.md)
- [Accu Chek Combo Pompa](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight pompası](../Configuration/Accu-Chek-Insight-Pump.md)
- [Medtronic Pompa](../Configuration/MedtronicPump.md)

Döngüyü açmak için AndroidAPS kullanıyorsanız, Konfigürasyon ayarlarında Sanal Pompa'yı seçtiğinizden emin olun.

(Preferences-nsclient)=
## NSClient

```{image} ../images/Pref2020_NSClient.png
:alt: NSClient
```

- *Nightscout URL'nizi* (ör. <https://yourwebsitename.herokuapp.com>) ve *API parolanızı* (Heroku değişkenlerinde kaydedilmiş 12 karakterlik bir şifre) ayarlayın.
- Bu, verilerin hem Nightscout web sitesi hem de AndroidAPS arasında okunmasını ve yazılmasını sağlar.
- Hedef 1'de takılıp kalırsanız, burada yazım hatalarını iki kez kontrol edin.
- **URL'nin sonunda /api/v1/ OLMADAN olduğundan emin olun.**
- *NS'de Uyg. günlüğünün başlatılması* uygulama her başlatıldığında Nightscout bakım portalına girişlerinize bir not kaydeder.  Uygulamanın günde bir defadan fazla başlatılması gerekmez. Bundan daha sık olması bir sorun olduğunu gösterir (örneğin. pil optimizasyonu AAPS için devre dışı bırakılmamıştır).
- Etkinleştirilirse, [yerel profildeki](Config-Builder-local-profile) değişiklikler Nightscout sitenize yüklenir.

### Bağlantı Ayarları

```{image} ../images/ConfBuild_ConnectionSettings.png
:alt: NSClient bağlantı ayarları
```

- Nightscout yüklemesini yalnızca Wi-Fi ile veya hatta belirli Wi-Fi SSID'leri ile sınırlayın.
- Yalnızca belirli bir WiFi ağını kullanmak istiyorsanız, WiFi SSID'sini girebilirsiniz.
- Birden çok SSID noktalı virgülle ayrılabilir.
- Tüm SSID'leri silmek için alana boşluk girin.

### Alarm türleri

- Alarm seçenekleri, uygulama aracılığıyla hangi varsayılan Nightscout alarmlarının kullanılacağını seçmenize olanak tanır.
- Alarmların çalması için [Heroku değişkenlerinizde](https://nightscout.github.io/nightscout/setup_variables/#alarms) Acil Yüksek, Yüksek, Düşük ve Acil Düşük alarm değerlerini ayarlamanız gerekir.
- Yalnızca Nightscout ile bağlantınız varken çalışırlar ve ebeveynler/bakıcılar için tasarlanmıştır.
- Telefonunuzda CGM kaynağı varsa (ör. xDrip+ veya BYODA \[Kendi dexcom uygulamanızı oluşturun\]) bunun yerine bu alarmları kullanın.

(Preferences-advanced-settings-nsclient)=
### Gelişmiş Ayarlar (NSClient)

```{image} ../images/Pref2020_NSClientAdv.png
:alt: NS Client gelişmiş ayarlar
```

- Gelişmiş ayarlardaki çoğu seçenek kendi açıklamasını içerir.

- *Yerel yayınları etkinleştir*, verilerinizi telefondaki xDrip+ gibi diğer uygulamalarla paylaşacaktır.

  - xDrip+ alarmlarını kullanmak için [AAPS'e geçmeniz](Config-Builder-bg-source) ve AAPS'de yerel yayını etkinleştirmeniz gerekir.

- Autotune'u doğru kullanmak istiyorsanız *Her zaman bazal mutlak değerleri kullan* etkinleştirilmelidir. Autotune hakkında daha fazla ayrıntı için [OpenAPS dokümanlarına](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html) bakın.

## SMS Kominikatör

- Seçenekler yalnızca [Konfigürasyon ayarlarında](Config-Builder-sms-communicator) SMS Kominikatör seçilirse görüntülenecektir.
- Bu ayar, döngüyü askıya alma veya bolus yapma gibi uygulamanın izleyeceği talimatları hastanın telefonuna mesaj göndererek uygulamanın uzaktan kontrol edilmesini sağlar.
- Daha fazla bilgi [SMS Komutları](../Children/SMS-Commands.md)nda açıklanmıştır.
- Bir kimlik doğrulama uygulaması ve mesaj sonunda ek PIN kullanılarak ek güvenlik elde edilir.

## Otomasyon

Hangi konum hizmetinin kullanılacağını seçin:

- Pasif konum kullan: AAPS, yalnızca diğer uygulamalar talep ederse konum alır
- Ağ konumunu kullan: Wi-Fi'nizin konumu
- GPS konumunu kullanın (Dikkat! Aşırı pil tüketimine neden olabilir!)

## Yerel uyarılar

```{image} ../images/Pref2020_LocalAlerts.png
:alt: Yerel uyarılar
```

- Ayarlar açıklayıcı olmalıdır.

## Veri seçenekleri

```{image} ../images/Pref2020_DataChoice.png
:alt: Veri seçenekleri
```

- Geliştiricilere kilitlenme raporları göndererek AAPS'nin daha da geliştirilmesine yardımcı olabilirsiniz.

## Bakım ayarları

```{image} ../images/Pref2020_Maintenance.png
:alt: Bakım ayarları
```

- Günlüklerin standart alıcısı <logs@androidaps.org>'dur.
- *Dışa aktarılan ayarları şifrele*'yi seçerseniz, bunlar [ana parolanız](Preferences-master-password) ile şifrelenir. Bu durumda, ayarlar her dışa aktarıldığında veya içe aktarıldığında ana parola girilmelidir.

## Open Humans

- Verilerinizi araştırma projelerine bağışlayarak topluluğa yardımcı olabilirsiniz! Ayrıntılar [Open Humans sayfasında](../Configuration/OpenHumans.md) açıklanmıştır.

- Tercihler'de verilerin ne zaman yükleneceğini tanımlayabilirsiniz

  - yalnızca WiFi'ye bağlıysa
  - sadece şarj olurken
