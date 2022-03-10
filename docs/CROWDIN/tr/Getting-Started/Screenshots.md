# AndroidAPS ekranları

## Giriş Ekranı

![Homescreen V2.7](../images/Home2020_Homescreen.png)

Bu AndroidAPS'i açtığınızda karşılaşacağınız ilk ekrandır ve her gün ihtiyaç duyacağınız bilgilerin çoğunu içerir.

### Bölüm A - Sekmeler

* Çeşitli AndroidAPS modülleri arasında gezinin.
* Alternatif olarak, sola veya sağa kaydırarak ekranları değiştirebilirsiniz.
* Görüntülenen sekmeler [konfigürasyon ayarları](../Configuration/Config-Builder#tab-or-hamburger-menu)'nda seçilebilir.

### Bölüm B - Profil & hedef

#### Geçerli Profil

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* Mevcut profil sol çubukta görüntülenir.
* Profil çubuğuna kısa basarak profil ayrıntılarını görüntüleyebilirsiniz
* [Farklı profiller arasında geçiş yapmak](../Usage/Profiles#profile-switch) için profil çubuğuna uzun basın.
* Eğer profil geçişi yapılmışsa kalan süre parantez içinde dakika cinsinden gösterilecektir.

#### Hedef

![Temp target remaining duration](../images/Home2020_TT.png)

* Mevcut hedefiniz sağ çubukta görüntülenir.
* [Geçici hedef](../Usage/temptarget.md) belirlemek için hedef çubuğuna kısa basın.
* Geçici hedef ayarlanmışsa, çubuk sarıya döner ve kalan süre parantez içinde dakika olarak gösterilir.

#### Dinamik hedef ayarının görselleştirilmesi

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS, SMB algoritması kullanıyorsanız, hedefinizi hassasiyete göre dinamik olarak ayarlayabilir.
* [Aşağıdaki seçeneklerden](../Configuration/Preferences#openaps-smb-settings) birini veya her ikisini etkinleştirin 
   * "Duyarlılık hedefi yükseltir" ve/veya 
   * "direnç hedefi düşürür" 
* AAPS direnç veya duyarlılık tespit ederse hedefi değiştirebilecektir. 
* Değiştirdiğinde hedef çubuğu yeşile dönecektir.

### Bölüm C - KŞ & döngü durumu

#### Geçerli kan şekeri

* CGM'nizden alınan en son kan şekeri ölçümü sol tarafta gösterilir.
* KŞ değerinin rengi, tanımlanan aralığın [durumu](../Configuration/Preferences#range-for-visualization)'nu yansıtır. 
   * yeşil = aralık içerisinde
   * kırmızı = aralığın altında
   * sarı = aralığın üstünde
* Ortadaki grimsi blok, son okumadan bu yana geçen süreyi ve son okumadan bu yana değişim ile 15 ve 40 dakikadaki KŞ değişikliklerini gösterir.

#### Döngü durumu

![Döngü durumu](../images/Home2020_LoopStatus.png)

* Yeni bir simge döngü durumunu gösterir:
   
   * yeşil daire = döngü çalışıyor
   * noktalı çizgili yeşil daire = [düşük glikoz süspansiyonu (LGS)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * kırmızı daire = döngü devre dışı (kalıcı olarak çalışmıyor)
   * sarı daire = döngü askıya alındı (geçici olarak duraklatıldı ancak bazal insülin verilecek) - kalan süre simgenin altında gösterilir
   * gri daire = pompa bağlantısı kesildi (geçici olarak hiç insülin dozu yok) - kalan süre simgenin altında gösterilir
   * Turuncu daire = süper bolus çalışıyor - kalan süre simgenin altında gösterilir
   * noktalı çizgili mavi daire = açık döngü

* Döngü diyalog kutusunu açmak ve döngü modunu değiştirmek için (Kapatmak, Düşük Glikoz süspansiyonu, Açmak veya Devre Dışı Bırakmak), döngüyü askıya almak / yeniden etkinleştirmek veya pompayı ayırmak / yeniden bağlamak için simgeye uzun ya da kısa basabilirsiniz.
   
   * Döngü simgesine kısa basarsanız, iletişim kutusundaki seçimden sonra bir onay istenecektir. (Uzun basarak diyalog penceresi açarsanız istenmez)
   
   ![Loop status menu](../images/Home2020_Loop_Dialog.png)

#### KŞ uyarı işareti

Android 3.0'dan itibaren, ana ekranda KŞ değerinizin altında bir uyarı sinyali alabilirsiniz.

*Not*: AAPS hesaplamalar için 30 saate kadar olan süreyi dikkate alır. Dolayısıyla, sorun çözüldükten sonra bile, son düzensiz aralık oluştuktan sonra sarı üçgenin kaybolması yaklaşık 30 saat sürebilir.

Bunu hemen kaldırmak için Dexcom/xDrip+ sekmesinden birkaç girişi manuel olarak silmeniz gerekir.

Ancak, çok sayıda kopya olduğunda, aşağıdakileri yapmak daha kolay olabilir

* [ayarlarınızı yedekleyin](../Usage/ExportImportSettings.rst),
* bakım menüsünde veritabanınızı sıfırlayın ve
* [ayarlarınızı tekrar içe aktarın](../Usage/ExportImportSettings.rst)

##### Kırmızı uyarı işareti: Yinelenen KŞ verileri

Kırmızı uyarı işareti, hemen harekete geçmenizi işaret ediyor: Döngünün işini doğru yapmasını engelleyen, yinelenen KŞ verileri alıyorsunuz. Bu nedenle, çözülene kadar döngünüz devre dışı bırakılacaktır.

![Kırmızı KŞ uyarısı](../images/bg_warn_red.png)

Neden yinelenen KŞ verileri aldığınızı bulmanız gerekiyor:

* NS sitenizde Dexcom köprüsü etkin mi? Heroku'ya (veya başka bir yer sağlayıcısına) giderek köprüyü devre dışı bırakın, "etkinleştir" değişkenini düzenleyin ve buradaki "köprü" bölümünü kaldırın. (Heroku için [ayrıntıları burada bulabilirsiniz](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Birden fazla kaynakKŞ'nizi NS'ye yüklüyor mu? BYODA uygulamasını kullanıyorsanız, AAPS'de yüklemeyi etkinleştirin, ancak xDrip+ kullanıyorsanız, xDrip+'da etkinleştirmeyin.
* KŞ'nizi takip eden ve aynı zamanda NS sitenize tekrar yükleyebilecek takipçileriniz var mı?
* Son çare: AAPS'de NS İstemci ayarlarınıza gidin, senkronizasyon ayarlarını seçin ve "NS'den CGM verilerini kabul et" seçeneğini devre dışı bırakın.

##### Sarı uyarı işareti

* Sarı uyarı sinyali, KŞ'nizin düzensiz zaman aralıklarında geldiğini veya bazı KŞ verilerinin eksik olduğunu gösteriyor.
   
   ![Sarı KŞ uyarısı](../images/bg_warn_yellow.png)

* Genellikle herhangi bir işlem yapmanız gerekmez. Kapalı döngü çalışmaya devam eder!

* Bir sensör değişikliği, KŞ verilerinin sabit akışını kesintiye uğrattığından, sensör değişikliğinden sonra sarı bir uyarı işareti normaldir ve endişelenecek bir şey yoktur.
* Libre kullanıcıları için özel not:
   
   * Her libre verisi birkaç saatte bir veya iki dakika kayar, bu da düzenli KŞ aralıklarının mükemmel akışını asla elde edemeyeceğiniz anlamına gelir.
   * Ayrıca atlamalı okumalar sürekli akışı keser.
   * Bu nedenle, libre kullanıcıları için sarı uyarı işareti 'her zaman açık' olacaktır.

### Bölüm D - IOB, COB, BO ve OD

![Section D](../images/Home2020_TBR.png)

* Şırınga: aktif insülin (IOB) - vücudunuzdaki aktif insülin miktarı
   
   * Yalnızca standart bazalınız çalışıyorsa ve önceki boluslardan insülin kalmamışsa, aktif insülin rakamı sıfır olacaktır. 
   * Yakın zamanda bazalınız düşürülmüşse, (IOB) aktif insülin negatif olabilir.
   * Bolus ve bazal insülinin ayrımını görmek için simgeye basın

* Tahıl: [Aktif karbonhidrat (COB)](../Usage/COB-calculation.rst) - daha önce yediğiniz henüz emilmemiş karbonhidratlar -> karbonhidrat gerekiyorsa simge yanıp söner

* Mor çizgi: bazal oran - geçici bazal orandaki değişiklikleri yansıtan simge (%100'de sabit çizgi) 
   * Herhangi bir geçici bazalın (kalan süre dahil) temel bazal oranını ve ayrıntılarını görmek için simgeye basın
* Yukarı & aşağı oklar: [otoduyarlılık](../Usage/Open-APS-features#autosens) durumunu (etkin veya devre dışı) belirtir ve değer simgenin altında gösterilir.

#### Karbonhidrat İhtiyacı

![Karbonhidrat İhtiyacı](../images/Home2020_CarbsRequired.png)

* Algoritma, Kş'nizin çok düşmesini önlemek için bir şeyler yemeniz gerektiğini anlarsa, önerilen karbonhidrat miktarı görüntülenir.
* Bu oref algoritmasının, seni 0 (sıfır) geçici bazal oranı ile kurtaramayacağı ve düzeltmek için karbonhidrata ihtiyacın olacağı anlamına gelir.
* The carb notifications are much more sophisticated than the bolus calculator ones. You might see carbs suggestion whilst bolus calculator does not show missing carbs.
* İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

### Bölüm E - Durum ışıkları

![Section E](../images/Home2020_StatusLights.png)

* Durum ışıkları için görsel bir uyarı verir 
   * Kanül yaşı
   * İnsülin yaşı (rezervuarın kullanıldığı gün sayısı)
   * Rezervuar seviyesi (Ünite)
   * Sensör yaşı
   * Pil yaşı ve seviyesi (%)
* Eşik uyarısı aşılırsa değerler sarı renkte gösterilecektir.
* Kritik eşik aşılırsa değerler kırmızı ile gösterilir.
* Ayarlar [tercihlerde](../Configuration/Preferences#status-lights) yapılabilir.

### Bölüm F - Ana grafik

![Section F](../images/Home2020_MainGraph.png)

* Grafik, glikoz monitörünüzden (CGM) okunan kan şekerinizi (KŞ) gösterir. 
* Parmak ucundan alınan kalibrasyonları ve karbonhidrat girişleri gibi işlem sekmesine girilen notların yanı sıra profil geçişleri burada gösterilir. 
* Zaman ölçeğini değiştirmek için grafiğe uzun basın. 6, 12, 18 veya 24 saat seçebilirsiniz.
* Yeşil alan hedef aralığınızı yansıtmaktadır. [tercihlerde](../Configuration/Preferences#range-for-visualization) yapılandırılabilir.
* Mavi üçgenler [SMB](../Usage/Open-APS-features#super-micro-bolus-smb)'yi gösterir - eğer [tercihlerde](../Configuration/Preferences#openaps-smb-settings) etkinleştirilmişse.
* İsteğe Bağlı Bilgi:
   
   * Tahminler
   * Bazallar
   * Aktivite - insülin aktivite eğrisi

#### İsteğe bağlı bilgileri etkinleştir

* Ana grafikte hangi bilgilerin görüntüleneceğini seçmek için ana grafiğin sağ tarafındaki üçgene tıklayın.
* Ana grafik için sadece "\---\---- Grafik 1 \---\----" satırının üzerindeki üç seçenek mevcuttur.
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Tahmin çizgileri

* **Turuncu** çizgi: [COB](../Usage/COB-calculation.rst) (Bu renk genellikle aktif karbonhidrat ve karbonhidratları temsil etmek için kullanılır)
   
   Tahmin çizgisi, mevcut pompa ayarlarına ve karbonhidrat emiliminden kaynaklanan sapmaların sabit kaldığı varsayılarak KŞ'nizin nereye gideceğini (Aktif karbonhidratın değil!) gösterir. Bu çizgi yalnızca bilinen COB (Aktif Karbonhidrat) varsa görünür.

* **Koyu mavi** çizgi: IOB Aktif insülin (Bu renk genellikle aktif insülin ve insülini temsil etmek için kullanılır)
   
   Tahmin çizgisi, sadece insülinin etkisi altında ne olacağını gösterir. Örneğin biraz insülin gönderip birşey yemediyseniz.

* **Açık mavi** çizgi: sıfır geçici (geçici bazal oranı %0 olarak ayarlandıysa, tahmini KŞ)
   
   Tahmin çizgisi, pompa tüm insülin iletimini (%0 GBO) durdurursa Aktif İnsülin çizgisinin nasıl değişeceğini gösterir.

* **Koyu sarı** çizgi: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (bildirilmemiş öğünler)
   
   Bildirilmemiş öğünlerin anlamı, öğün, adrenalin veya diğer etkiler nedeniyle glikoz seviyelerinde önemli bir artışın tespit edilmesidir. Tahmin çizgisi TURUNCU Aktif Karbonhidrat çizgisine benzer, ancak sapmaların sabit bir oranda (mevcut azalma oranını genişleterek) azalacağını varsayar.

Genellikle gerçek glikoz eğriniz bu çizgilerin ortasında veya durumunuza en çok benzeyen varsayımlarda bulunanın yakınında biter.

#### Bazallar

* **Sürekli mavi** çizgi, pompanızın bazal iletimini gösterir ve zaman içindeki gerçek iletimi yansıtır.
* **noktalı mavi** çizgi, geçici bazal ayarlamalar (GBO'lar) olmasaydı bazal oranın ne olacağıdır.
* Standart bazal oran verildiğinde eğrinin altındaki alan koyu mavi ile gösterilir.
* Bazal oran geçici olarak ayarlandığında (artırıldığında veya azaldığında) eğrinin altındaki alan açık mavi ile gösterilir.

#### Aktivite

* **İnce sarı** çizgi, insülin aktivitesini gösterir. 
* Başka hiçbir faktör (karbonhidrat gibi) mevcut değilse, sisteminizdeki insülinin KŞ'nde beklenen düşüşe dayanır.

### Bölüm G - ek grafikler

* Ana grafiğin altında en fazla dört ek grafik etkinleştirebilirsiniz.
* Ek grafikler için ayarları açmak için [ana grafiğin](../Getting-Started/Screenshots#section-f-main-graph) sağ tarafındaki üçgeni tıklayın ve aşağı kaydırın.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* Ek bir grafik eklemek için adının sol tarafındaki kutuyu işaretleyin (yani \---\---- Grafik 1 \---\----).

#### Mutlak insülin

* Boluslar dahil aktif insülin **ve bazal**.

#### (IOB) Aktif İnsülin

* Aktif insülini gösterir (= vücudunuzdaki aktif insülin). Bolus ve geçici bazaldan alınan insülini içerir (**ancak profilinizde ayarlanan bazal oranları hariçtir**).
* Eğer [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) olmazsa, İES süresi boyunca bolus ve GBO da gönderilmezsa bu değer sıfır olur.
* Daha uzun bir süre boyunca bolus kalmazsa ve sıfır/düşük geçici bazal devam ederse IOB (Aktif insülin) negatif olabilir.
* Azalma [İES ve insülin profil ayarlarınıza](../Configuration/Config-Builder#local-profile) bağlıdır. 

#### (COB) Aktif Karbonhidrat

* Aktif karbonhidratları gösterir (= vücudunuzdaki aktif, henüz bozulmamış karbonhidratlar). 
* Bozulma, algoritmanın algıladığı sapmalara bağlıdır. 
* Beklenenden daha yüksek bir karbonhidrat emilimi tespit edilirse, insülin verilecek ve bu aktif insülini artıracaktır (güvenlik ayarlarınıza bağlı olarak daha fazla veya daha az). 

#### Sapmalar

* **GRİ** çubuklar, karbonhidrat nedeniyle bir sapma gösterir. 
* **YEŞİL** çubuklar, KŞ'nin algoritmanın beklediğinden daha yüksek olduğunu gösterir. [Otoduyarlılık](../Usage/Open-APS-features#autosens)'ta direnci artırmak için yeşil çubuklar kullanılır.
* **KIRMIZI** çubuklar, KŞ'nin algoritmanın beklediği değerden daha düşük olduğunu gösterir. [Otoduyarlılık](../Usage/Open-APS-features#autosens)'ta hassasiyeti artırmak için kırmızı çubuklar kullanılır.
* **SARI** çubuklar UAM (bildirilmemiş öğünler) nedeniyle bir sapma gösterir.
* **SİYAH** çubuklar, hassasiyet için dikkate alınmayan küçük sapmaları gösterir

#### Duyarlılık

* [Otoduyarlılığın](../Usage/Open-APS-features#autosens) algıladığı hassasiyeti gösterir. 
* Duyarlılık, egzersiz, hormonlar vb. sonucunda insüline duyarlılığın hesaplanmasıdır.

#### Aktivite

* İnsülin profiliniz tarafından hesaplanan insülin aktivitesini gösterir (Aktif insülin türevi değildir). 
* İnsülin zirve zamanına daha yakın olduğunda değer daha yüksektir.
* IOB azalırken negatif olmak anlamına gelir. 

#### Sapma eğimi

* Algoritmada kullanılan iç değer.

### Bölüm H - Butonlar

![Homescreen buttons](../images/Home2020_Buttons.png)

* İnsülin, karbonhidrat ve hesap makinesi butonları neredeyse her zaman açıktır.
   
   * Pompa bağlantısı kesilirse insülin düğmesi görünmez.

* Diğer butonların [tercihlerde](../Configuration/Preferences#buttons) ayarlanması gerekir.

#### İnsülin

![Insulin button](../images/Home2020_ButtonInsulin.png)

* [Bolus hesaplayıcı](#bolus-wizard) kullanmadan belirli miktarda insülin vermek için kullanılır.
* [Yakında Öğün GH](../Configuration/Preferences#default-temp-targets) kutusunu işaretleyerek otomatik olarak yakında öğün hedefinizi başlatabilirsiniz.
* Pompadan bolus yapmadan sadece insülin miktarını kaydetmek istiyorsanız "Bolusu sadece kayıt altına al" kutusunu işaretleyin.

#### Karbonhidrat

![Carbs button](../images/Home2020_ButtonCarbs.png)

* Karbonhidratları bolus olmadan kaydetmek için kullanılır.
* Belirli [önceden ayarlanmış geçici hedefler](../Configuration/Preferences#default-temp-targets) ilgili kutu işaretlenerek doğrudan ayarlanabilir.
* Zaman farkı: Ne zaman karbonhidrat yediniz / yiyeceksiniz (dakika olarak).
* Süre: ["Yayma karbonhidratlar"](../Usage/Extended-Carbs.rst) için kullanılacak
* Karbonhidrat miktarını hızlı bir şekilde artırmak için butonları kullanabilirsiniz.
* Notlar, [NS client](../Configuration/Preferences#nsclient) için ayarlarınıza bağlı olarak Nightscout'a yüklenecektir.

#### Hesap makinesi

* Bolus Sihirbazı için [aşağıdaki bölüme](#bolus-wizard) bakın

#### Kalibrasyonlar

* xDrip+'a bir kalibrasyon gönderir veya Dexcom kalibrasyon diyalog penceresini açar.
* [Tercihlerde](../Configuration/Preferences#buttons) etkinleştirilmelidir.

#### CGM

* xDrip+'ı açmak için kullanılır.
* Geri düğmesi AAPS'e döner.
* [Tercihlerde](../Configuration/Preferences#buttons) etkinleştirilmelidir.

#### Hızlı Asistan

* Karbonhidrat miktarını kolayca girin ve temel hesaplamaları ayarlayın.
* Ayrıntılar [Tercihlerde](../Configuration/Preferences#quick-wizard) ayarlanır.

## Bolus Sihirbazı

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

Yemek bolusu yapmak istediğinizde, normalde yapacağınız yer burasıdır.

### Bölüm I

* KŞ alanında normalde zaten CGM'nizden gelen en son okuma bulunur. Çalışan bir CGM'niz yoksa boş olacaktır. 
* Karbonhidrat alanına, bolus yapmak istediğiniz karbonhidrat - veya eşdeğeri - hesapladığınız tahmini miktarı girersiniz. 
* Düzeltme alanı, herhangi bir nedenle son dozu değiştirmek istiyorsanız ilave edebilir ya da azaltabilirsiniz.
* Karbonhidrat zamanı alanı ön bolus içindir, böylece sisteme karbonhidratların yenmesi için bir gecikme olacağını söyleyebilirsiniz. Yenmiş karbonhidratlar için bolus yapıyorsanız, bu alana negatif bir sayı girebilirsiniz.

#### Yemek hatırlatıcısı

* Yenecek karbonhidratlar için alarm onay kutusu işaretlenebilir. Böylece AndroidAPS'e girdiğiniz karbonhidratları ne zaman yemeniz gerektiği size hatırlatılabilir. (Girilen süre sonunda karbonhidratlar sisteme ilave edilir.)
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Bölüm J

* SÜPER BOLUS, sonraki iki saat için bazal insülinin bolusa ilave edildiği ve sıfır GBO olacak sonraki iki saati telafi etmek için kullanılır. Bu seçenek yalnızca [Genel bakış Tercihlerde ](../Configuration/Preferences#overview) [ "Sihirbazda superbolusu etkinleştir"](../Configuration/Preferences#superbolus) ayarlandığında gösterilir.
* Buradaki ana fikir, bazal insülini erkenden vererek ani artışları azaltmaktır.
* Ayrıntılar için [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) adresini ziyaret edin.

### Bölüm K

* Hesaplanan bolusu gösterir. 
* Aktif insülin miktarı hesaplanan bolusu aşarsa, o zaman sadece gerekli olan karbonhidrat miktarını gösterecektir.
* Notlar, [NS client](../Configuration/Preferences#nsclient) için ayarlarınıza bağlı olarak Nightscout'a yüklenecektir.

### Bölüm L

* Sihirbazın bolus hesaplamasının ayrıntıları.
* Dahil etmek istemediğiniz herhangi bir hesaplamanın seçimini kaldırabilirsiniz.
* Bolus sihirbazının mevcut bir geçici hedefe göre hesaplama yapmasını istiyorsanız, güvenlik nedenleriyle **TT kutusunun manuel olarak işaretlenmesi gerekir**.

#### COB ve IOB kombinasyonları ve ne anlama geldikleri

* Güvenlik nedenleriyle, COB (Aktif karbonhidrat) kutusu işaretlendiğinde IOB (Aktif insülin) kutusunun işareti kaldırılamaz, çünkü AAPS halihazırda mevcut insülini hesaba katmadığı için çok fazla insülin riskiyle karşı karşıya kalabilirsiniz.
* COB ve IOB'u işaretlerseniz, mevcut emilmemiş karbonhidratlar + GBO veya SMB olarak verilen tüm insülinler dikkate alınacaktır.
* COB işaretlemeden IOB'u işaretlerseniz, AAPS iletilen insülini hesaba katar, ancak bu hesaba hala emilecek karbonhidratlar dahil edilmez. Bu işareleme 'eksik karbonhidrat' bildirimine yol açar.
* Yemek bolusundan kısa bir süre sonra **ek gıda** için (örn. ilave tatlı) bolus yaparsanız, **tüm kutuların işaretini kaldırmak** yararlı olabilir. Bu şekilde, ana öğün henüz tam olarak emilmemiş olduğundan yalnızca yeni karbonhidratlar ilave edilir, bu nedenle aktif insülin, yemek bolusundan kısa bir süre sonra aktif karbonhidrat ile tam olarak eşleşmeyecektir.

#### Yanlış Aktif Karbonhidrat tespiti

![Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

* Bolus sihirbazını kullandıktan sonra yukarıdaki uyarıyı görüyorsanız, AndroidAPS hesaplanan COB değerinin yanlış olabileceğini algılamıştır. 
* Bu nedenle, mevcut Aktif Karbonhidrat ile bir yemekten sonra tekrar bolus yapmak istiyorsanız, aşırı dozun farkında olmalısınız! 
* Ayrıntılar için [COB hesaplama sayfasındaki](../Usage/COB-calculation#detection-of-wrong-cob-values) ipuçlarına bakın.

## Eylem Sekmesi

![Actions tab](../images/Home2021_Action.png)

### Eylemler - bölüm M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Geçici bir bazal oranı başlatma veya iptal etme düğmesi. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇICIBAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.
* [Yayma boluslar](../Usage/Extended-Carbs#extended boluses) kapalı döngü ortamında gerçekten çalışmasa da, bazı insanlar yine de yayma bolus kullanma seçeneği istiyordu.
   
   * Bu seçenek yalnızca Dana RS ve Insight pompaları için mevcuttur. 
   * Kapalı döngü otomatik olarak durdurulacak ve yayma bolus çalıştığı süre boyunca açık döngü moduna geçecektir.
   * Bu seçeneği kullanmadan önce [ayrıntıları](../Usage/Extended-Carbs#extended boluses) okuduğunuzdan emin olun.

### Bakım portalı - bölüm N

* İçinde görüntülebilir bilgiler
   
   * sensör yaşı & seviyesi (yüzdelik pil)
   * insülin yaşı & seviyesi (ünite bazında)
   * kanül yaşı
   * pompa pil yaşı & seviyesi (yüzdelik bazda

* [düşük çözünürlüklü dış görünüm](../Configuration/Preferences#skin) kullanılırsa daha az bilgi gösterilir.

#### Sensör seviyesi (pil)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Eşikler [tercihlerde](../Configuration/Preferences#status-lights) ayarlanabilir.
* Sensör seviyesi, telefonun pil seviyesiyle aynıysa, xDrip+ sürümünüz muhtemelen çok eskidir ve güncellenmesi gerekir.
   
   ![Sensor levels equals phone battery level](../images/Home2021_ActionSensorBat.png)

### Careportal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS history.

#### GTD

* Total daily dose = bolus + basal per day
* Some doctors use - especially for new pumpers - a basal-bolus-ratio of 50:50. 
* Therefore ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours). 
* Others prefer range of 32% to 37% of TDD for TBB. 
* Like most of these rules-of-thumb it is of limited real validity. Note: Your diabetes may vary!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.md) for details.

## Care Portal

Bakım portalı, Nightscout ekranınızda göreceğiniz fonksiyonları, kayıtlarınıza not eklemenizi sağlayan “+” sembolü altına kopyalamıştır.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry with the faulty carb amount.
4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Loop, AMA / SMB

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Profil

![Profil](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* As of version 3.0 only [local profile](../Configuration/Config-Builder#local-profile) is possible. The local profile can be edited on your smartphone and synced to your Nightscout site.

## Treatment

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Yayma Bolus](../Usage/Extended-Carbs#extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
* [Profile switch](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip+, BYODA...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differently.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).