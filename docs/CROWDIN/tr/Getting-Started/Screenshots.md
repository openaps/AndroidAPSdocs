# AndroidAPS ekranları

## Giriş Ekranı

![Anaekran V2.7](../images/Home2020_Homescreen.png)

Bu AndroidAPS'i açtığınızda karşılaşacağınız ilk ekrandır ve her gün ihtiyaç duyacağınız bilgilerin çoğunu içerir.

### Bölüm A - Sekmeler

* Çeşitli AndroidAPS modülleri arasında gezinin.
* Alternatif olarak, sola veya sağa kaydırarak ekranları değiştirebilirsiniz.
* Görüntülenen sekmeler [konfigürasyon ayarları](Config-Builder-tab-or-hamburger-menu)'nda seçilebilir.

(Screenshots-section-b-profile-target)=

### Bölüm B - Profil & hedef

#### Geçerli Profil

![Profil değişimi kalan süre](../images/Home2020_ProfileSwitch.png)

* Mevcut profil sol çubukta görüntülenir.
* Profil çubuğuna kısa basarak profil ayrıntılarını görüntüleyebilirsiniz
* [Farklı profiller arasında geçiş yapmak](Profiles-profile-switch) için profil çubuğuna uzun basın.
* Eğer profil geçişi yapılmışsa kalan süre parantez içinde dakika cinsinden gösterilecektir.

#### Hedef

![Geçici hedef kalan süre](../images/Home2020_TT.png)

* Mevcut hedefiniz sağ çubukta görüntülenir.
* [Geçici hedef](../Usage/temptarget.md) belirlemek için hedef çubuğuna kısa basın.
* Geçici hedef ayarlanmışsa, çubuk sarıya döner ve kalan süre parantez içinde dakika olarak gösterilir.

(Screenshots-visualization-of-dynamic-target-adjustment)=

#### Dinamik hedef ayarının görselleştirilmesi

![Dinamik hedef ayarının görselleştirilmesi](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS, SMB algoritması kullanıyorsanız, hedefinizi hassasiyete göre dinamik olarak ayarlayabilir.
* [Aşağıdaki seçeneklerden](Preferences-openaps-smb-settings) birini veya her ikisini etkinleştirin 
   * "Duyarlılık hedefi yükseltir" ve/veya 
   * "direnç hedefi düşürür" 
* AAPS direnç veya duyarlılık tespit ederse hedefi değiştirebilecektir. 
* Değiştirdiğinde hedef çubuğu yeşile dönecektir.

### Bölüm C - KŞ & döngü durumu

#### Geçerli kan şekeri

* CGM'nizden alınan en son kan şekeri ölçümü sol tarafta gösterilir.
* KŞ değerinin rengi, tanımlanan aralığın [durumu](Preferences-range-for-visualization)'nu yansıtır. 
   * yeşil = aralık içerisinde
   * kırmızı = aralığın altında
   * sarı = aralığın üstünde
* Ortadaki grimsi blok, son okumadan bu yana geçen süreyi ve son okumadan bu yana değişim ile 15 ve 40 dakikadaki KŞ değişikliklerini gösterir.

(Screenshots-loop-status)=

#### Döngü durumu

![Döngü durumu](../images/Home2020_LoopStatus.png)

* Yeni bir simge döngü durumunu gösterir:
   
   * yeşil daire = döngü çalışıyor
   * noktalı çizgili yeşil daire = [düşük glikoz süspansiyonu (LGS)](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * kırmızı daire = döngü devre dışı (kalıcı olarak çalışmıyor)
   * sarı daire = döngü askıya alındı (geçici olarak duraklatıldı ancak bazal insülin verilecek) - kalan süre simgenin altında gösterilir
   * gri daire = pompa bağlantısı kesildi (geçici olarak hiç insülin dozu yok) - kalan süre simgenin altında gösterilir
   * Turuncu daire = süper bolus çalışıyor - kalan süre simgenin altında gösterilir
   * noktalı çizgili mavi daire = açık döngü

* Döngü diyalog kutusunu açmak ve döngü modunu değiştirmek için (Kapatmak, Düşük Glikoz süspansiyonu, Açmak veya Devre Dışı Bırakmak), döngüyü askıya almak / yeniden etkinleştirmek veya pompayı ayırmak / yeniden bağlamak için simgeye uzun ya da kısa basabilirsiniz.
   
   * Döngü simgesine kısa basarsanız, iletişim kutusundaki seçimden sonra bir onay istenecektir. (Uzun basarak diyalog penceresi açarsanız istenmez)
   
   ![Döngü durumu menüsü](../images/Home2020_Loop_Dialog.png)

(Screenshots-bg-warning-sign)=

#### KŞ uyarı işareti

Android 3.0'dan itibaren, ana ekranda KŞ değerinizin altında bir uyarı sinyali alabilirsiniz.

*Not*: AAPS hesaplamalar için 30 saate kadar olan süreyi dikkate alır. Dolayısıyla, sorun çözüldükten sonra bile, son düzensiz aralık oluştuktan sonra sarı üçgenin kaybolması yaklaşık 30 saat sürebilir.

Bunu hemen kaldırmak için Dexcom/xDrip+ sekmesinden birkaç girişi manuel olarak silmeniz gerekir.

Ancak, çok sayıda kopya olduğunda, aşağıdakileri yapmak daha kolay olabilir

* [ayarlarınızı yedekleyin](../Usage/ExportImportSettings.md),
* bakım menüsünde veritabanınızı sıfırlayın ve
* [ayarlarınızı tekrar içe aktarın](../Usage/ExportImportSettings.md)

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

### Bölüm D - AİNS, AKRB, BO ve OD

![Bölüm D](../images/Home2020_TBR.png)

* Şırınga: aktif insülin (AİNS) - vücudunuzdaki aktif insülin miktarı
   
   * Yalnızca standart bazalınız çalışıyorsa ve önceki boluslardan insülin kalmamışsa, aktif insülin rakamı sıfır olacaktır. 
   * Yakın zamanda bazalınız düşürülmüşse, (AİNS) aktif insülin negatif olabilir.
   * Bolus ve bazal insülinin ayrımını görmek için simgeye basın

* Tahıl: [Aktif karbonhidrat (AKRB)](../Usage/COB-calculation.md) - daha önce yediğiniz henüz emilmemiş karbonhidratlar -> karbonhidrat gerekiyorsa simge yanıp söner

* Mor çizgi: bazal oran - geçici bazal orandaki değişiklikleri yansıtan simge (%100'de sabit çizgi) 
   * Herhangi bir geçici bazalın (kalan süre dahil) temel bazal oranını ve ayrıntılarını görmek için simgeye basın
* Yukarı & aşağı oklar: [otoduyarlılık](Open-APS-features-autosens) durumunu (etkin veya devre dışı) belirtir ve değer simgenin altında gösterilir.

#### Karbonhidrat İhtiyacı

![Karbonhidrat İhtiyacı](../images/Home2020_CarbsRequired.png)

* Algoritma, Kş'nizin çok düşmesini önlemek için bir şeyler yemeniz gerektiğini anlarsa, önerilen karbonhidrat miktarı görüntülenir.
* Bu oref algoritmasının, seni 0 (sıfır) geçici bazal oranı ile kurtaramayacağı ve düzeltmek için karbonhidrata ihtiyacın olacağı anlamına gelir.
* Karbonhidrat bildirimleri, bolus hesaplayıcılardan çok daha karmaşıktır. Bolus hesaplayıcı eksik karbonhidratları göstermezken karbonhidrat önerisi görebilirsiniz.
* İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

### Bölüm E - Durum ışıkları

![Bölüm E](../images/Home2020_StatusLights.png)

* Durum ışıkları için görsel bir uyarı verir 
   * Kanül yaşı
   * İnsülin yaşı (rezervuarın kullanıldığı gün sayısı)
   * Rezervuar seviyesi (Ünite)
   * Sensör yaşı
   * Pil yaşı ve seviyesi (%)
* Eşik uyarısı aşılırsa değerler sarı renkte gösterilecektir.
* Kritik eşik aşılırsa değerler kırmızı ile gösterilir.
* Ayarlar [tercihlerde](Preferences-status-lights) yapılabilir.

(Screenshots-section-f-main-graph)=

### Bölüm F - Ana grafik

![Bölüm F](../images/Home2020_MainGraph.png)

* Grafik, glikoz monitörünüzden (CGM) okunan kan şekerinizi (KŞ) gösterir. 
* Parmak ucundan alınan kalibrasyonları ve karbonhidrat girişleri gibi işlem sekmesine girilen notların yanı sıra profil geçişleri burada gösterilir. 
* Zaman ölçeğini değiştirmek için grafiğe uzun basın. 6, 12, 18 veya 24 saat seçebilirsiniz.
* Yeşil alan hedef aralığınızı yansıtmaktadır. [tercihlerde](Preferences-range-for-visualization) yapılandırılabilir.
* Mavi üçgenler [SMB](Open-APS-features-super-micro-bolus-smb)'yi gösterir - eğer [tercihlerde](Preferences-openaps-smb-settings) etkinleştirilmişse.
* İsteğe Bağlı Bilgi:
   
   * Tahminler
   * Bazallar
   * Aktivite - insülin aktivite eğrisi

#### İsteğe bağlı bilgileri etkinleştir

* Ana grafikte hangi bilgilerin görüntüleneceğini seçmek için ana grafiğin sağ tarafındaki üçgene tıklayın.
* Ana grafik için sadece "\---\---- Grafik 1 \---\----" satırının üzerindeki üç seçenek mevcuttur.
   
   ![Ana grafik ayarı](../images/Home2020_MainGraphSetting.png)

(Screenshots-prediction-lines)=

#### Tahmin çizgileri

* **Turuncu** çizgi: [AKRB](../Usage/COB-calculation.md) (Bu renk genellikle aktif karbonhidrat ve karbonhidratları temsil etmek için kullanılır)
   
   Tahmin çizgisi, mevcut pompa ayarlarına ve karbonhidrat emiliminden kaynaklanan sapmaların sabit kaldığı varsayılarak KŞ'nizin nereye gideceğini (Aktif karbonhidratın değil!) gösterir. Bu çizgi yalnızca bilinen AKRB (Aktif Karbonhidrat) varsa görünür.

* **Koyu mavi** çizgi: AİNS (Bu renk genellikle aktif insülin ve insülini temsil etmek için kullanılır)
   
   Tahmin çizgisi, sadece insülinin etkisi altında ne olacağını gösterir. Örneğin biraz insülin gönderip birşey yemediyseniz.

* **Açık mavi** çizgi: sıfır geçici (geçici bazal oranı %0 olarak ayarlandıysa, tahmini KŞ)
   
   Tahmin çizgisi, pompa tüm insülin iletimini (%0 GBO) durdurursa Aktif İnsülin çizgisinin nasıl değişeceğini gösterir.
   
   *Bu satır yalnızca [ SMB ](preferences-veyvanced-meal-sist-ama-or-super-micro-bolus-smb) algoritması kullanıldığında görünür.*

* **Koyu sarı** çizgi: [UAM](Sensitivity-detection-and-COB-sensitivity-oref1) (bildirilmemiş öğünler)
   
   Bildirilmemiş öğünlerin anlamı, öğün, adrenalin veya diğer etkiler nedeniyle glikoz seviyelerinde önemli bir artışın tespit edilmesidir. Tahmin çizgisi TURUNCU Aktif Karbonhidrat çizgisine benzer, ancak sapmaların sabit bir oranda (mevcut azalma oranını genişleterek) azalacağını varsayar.
   
   *Bu satır yalnızca [ SMB ](preferences-veyvanced-meal-sist-ama-or-super-micro-bolus-smb) algoritması kullanıldığında görünür.*

* ** koyu turuncu ** çizgi: hAKRB (hızlandırılmış karbonhidrat emilimi)
   
   AKRB'e benzer, ancak statik bir 10 mg/dl/5m (-0.555 mmol/l/5m) karbonhidrat emme oranı varsayılır. Kullanımdan kaldırılmış ve sınırlı yararlılık.
   
   *Bu satır sadece eski [ Ama ](preferences-cwenced-aal-sist-ama-or-super-micro-bolus-smb) algoritması kullanıldığında görünür.*

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
* Ek grafikler için ayarları açmak için [ana grafiğin](Screenshots-section-f-main-graph) sağ tarafındaki üçgeni tıklayın ve aşağı kaydırın.

![Ek grafik ayarları](../images/Home2020_AdditionalGraphSetting.png)

* Ek bir grafik eklemek için adının sol tarafındaki kutuyu işaretleyin (yani \---\---- Grafik 1 \---\----).

#### Mutlak insülin

* Boluslar dahil aktif insülin **ve bazal**.

#### Aktif İnsülin

* Aktif insülini gösterir (= vücudunuzdaki aktif insülin). Bolus ve geçici bazaldan alınan insülini içerir (**ancak profilinizde ayarlanan bazal oranları hariçtir**).
* Eğer [SMB](Open-APS-features-super-micro-bolus-smb) olmazsa, İES süresi boyunca bolus ve GBO da gönderilmezsa bu değer sıfır olur.
* Daha uzun bir süre boyunca bolus kalmazsa ve sıfır/düşük geçici bazal devam ederse AİNS negatif olabilir.
* Azalma [İES ve insülin profil ayarlarınıza](Config-Builder-local-profile) bağlıdır. 

#### (AKRB) Aktif Karbonhidrat

* Aktif karbonhidratları gösterir (= vücudunuzdaki aktif, henüz bozulmamış karbonhidratlar). 
* Bozulma, algoritmanın algıladığı sapmalara bağlıdır. 
* Beklenenden daha yüksek bir karbonhidrat emilimi tespit edilirse, insülin verilecek ve bu aktif insülini artıracaktır (güvenlik ayarlarınıza bağlı olarak daha fazla veya daha az). 

#### Sapmalar

* **GRİ** çubuklar, karbonhidrat nedeniyle bir sapma gösterir. 
* **YEŞİL** çubuklar, KŞ'nin algoritmanın beklediğinden daha yüksek olduğunu gösterir. [Otoduyarlılık](Open-APS-features-autosens)'ta direnci artırmak için yeşil çubuklar kullanılır.
* **KIRMIZI** çubuklar, KŞ'nin algoritmanın beklediği değerden daha düşük olduğunu gösterir. [Otoduyarlılık](Open-APS-features-autosens)'ta hassasiyeti artırmak için kırmızı çubuklar kullanılır.
* **SARI** çubuklar UAM (bildirilmemiş öğünler) nedeniyle bir sapma gösterir.
* **SİYAH** çubuklar, hassasiyet için dikkate alınmayan küçük sapmaları gösterir

#### Duyarlılık

* [Otoduyarlılığın](Open-APS-features-autosens) algıladığı hassasiyeti gösterir. 
* Duyarlılık, egzersiz, hormonlar vb. sonucunda insüline duyarlılığın hesaplanmasıdır.

#### Aktivite

* İnsülin profiliniz tarafından hesaplanan insülin aktivitesini gösterir (Aktif insülin türevi değildir). 
* İnsülin zirve zamanına daha yakın olduğunda değer daha yüksektir.
* AİNS azalırken negatif olmak anlamına gelir. 

#### Sapma eğimi

* Algoritmada kullanılan iç değer.

### Bölüm H - Butonlar

![Anaekran butonları](../images/Home2020_Buttons.png)

* İnsülin, karbonhidrat ve hesap makinesi butonları neredeyse her zaman açıktır.
   
   * Pompa bağlantısı kesilirse insülin butonu görünmez.

* Diğer butonların [preferences]tercihlerde kurulması gerekir.

#### İnsülin

![İnsülin butonu](../images/Home2020_ButtonInsulin.png)

* [Bolus hesaplayıcı](#bolus-wizard) kullanmadan belirli miktarda insülin vermek için kullanılır.
* [Yakında Öğün GH](Preferences-default-temp-targets) kutusunu işaretleyerek otomatik olarak yakında öğün hedefinizi başlatabilirsiniz.
* Pompadan bolus yapmadan sadece insülin miktarını kaydetmek istiyorsanız "Bolusu sadece kayıt altına al" kutusunu işaretleyin.

#### Karbonhidrat

![Karbonhidrat butonu](../images/Home2020_ButtonCarbs.png)

* Karbonhidratları bolus olmadan kaydetmek için kullanılır.
* Belirli [önceden ayarlanmış geçici hedefler](Preferences-default-temp-targets) ilgili kutu işaretlenerek doğrudan ayarlanabilir.
* Zaman farkı: Ne zaman karbonhidrat yediniz / yiyeceksiniz (dakika olarak).
* Süre: ["Yayma karbonhidratlar"](../Usage/Extended-Carbs.md) için kullanılacak
* Karbonhidrat miktarını hızlı bir şekilde artırmak için butonları kullanabilirsiniz.
* Notlar, [NS client](Preferences-nsclient) için ayarlarınıza bağlı olarak Nightscout'a yüklenecektir.

#### Hesap makinesi

* Bolus Sihirbazı için [aşağıdaki bölüme](#bolus-wizard) bakın

#### Kalibrasyonlar

* xDrip+'a bir kalibrasyon gönderir veya Dexcom kalibrasyon diyalog penceresini açar.
* [Tercihlerde](Preferences-buttons) etkinleştirilmelidir.

#### CGM

* xDrip+'ı açmak için kullanılır.
* Geri düğmesi AAPS'e döner.
* [Tercihlerde](Preferences-buttons) etkinleştirilmelidir.

#### Hızlı Asistan

* Karbonhidrat miktarını kolayca girin ve temel hesaplamaları ayarlayın.
* Ayrıntılar [Tercihlerde](Preferences-quick-wizard) ayarlanır.

(Screenshots-bolus-wizard)=

## Bolus Sihirbazı

![Bolus sihirbazı](../images/Home2020_BolusWizard_v2.png)

Yemek bolusu yapmak istediğinizde, normalde yapacağınız yer burasıdır.

### Bölüm I

* KŞ alanında normalde zaten CGM'nizden gelen en son okuma bulunur. Çalışan bir CGM'niz yoksa boş olacaktır. 
* Karbonhidrat alanına, bolus yapmak istediğiniz karbonhidrat - veya eşdeğeri - hesapladığınız tahmini miktarı girersiniz. 
* Düzeltme alanı, herhangi bir nedenle son dozu değiştirmek istiyorsanız ilave edebilir ya da azaltabilirsiniz.
* Karbonhidrat zamanı alanı ön bolus içindir, böylece sisteme karbonhidratların yenmesi için bir gecikme olacağını söyleyebilirsiniz. Yenmiş karbonhidratlar için bolus yapıyorsanız, bu alana negatif bir sayı girebilirsiniz.

(Screenshots-eating-reminder)=

#### Yemek hatırlatıcısı

* Yenecek karbonhidratlar için alarm onay kutusu işaretlenebilir. Böylece AndroidAPS'e girdiğiniz karbonhidratları ne zaman yemeniz gerektiği size hatırlatılabilir. (Girilen süre sonunda karbonhidratlar sisteme ilave edilir.)
   
   ![Yemek Hatırlatıcılı Bolus Sihirbazı](../images/Home2021_BolusWizard_EatingReminder.png)

### Bölüm J

* SÜPER BOLUS, sonraki iki saat için bazal insülinin bolusa ilave edildiği ve sıfır GBO olacak sonraki iki saati telafi etmek için kullanılır. Bu seçenek yalnızca [Genel bakış Tercihlerde ](Preferences-overview) [ "Sihirbazda superbolusu etkinleştir"](Preferences-superbolus) ayarlandığında gösterilir.
* Buradaki ana fikir, bazal insülini erkenden vererek ani artışları azaltmaktır.
* Ayrıntılar için [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) adresini ziyaret edin.

### Bölüm K

* Hesaplanan bolusu gösterir. 
* Aktif insülin miktarı hesaplanan bolusu aşarsa, o zaman sadece gerekli olan karbonhidrat miktarını gösterecektir.
* Notlar, [NS client](Preferences-nsclient) için ayarlarınıza bağlı olarak Nightscout'a yüklenecektir.

### Bölüm L

* Sihirbazın bolus hesaplamasının ayrıntıları.
* Dahil etmek istemediğiniz herhangi bir hesaplamanın seçimini kaldırabilirsiniz.
* Bolus sihirbazının mevcut bir geçici hedefe göre hesaplama yapmasını istiyorsanız, güvenlik nedenleriyle **TT kutusunun manuel olarak işaretlenmesi gerekir**.

#### AKRB ve AİNS kombinasyonları ve ne anlama geldikleri

* Güvenlik nedenleriyle, AKRB (Aktif karbonhidrat) kutusu işaretlendiğinde AİNS (Aktif insülin) kutusunun işareti kaldırılamaz, çünkü AAPS halihazırda mevcut insülini hesaba katmadığı için çok fazla insülin riskiyle karşı karşıya kalabilirsiniz.
* AKRB ve AİNS'i işaretlerseniz, mevcut emilmemiş karbonhidratlar + GBO veya SMB olarak verilen tüm insülinler dikkate alınacaktır.
* AKRB işaretlemeden AİNS'İ işaretlerseniz, AAPS iletilen insülini hesaba katar, ancak bu hesaba hala emilecek karbonhidratlar dahil edilmez. Bu işareleme 'eksik karbonhidrat' bildirimine yol açar.
* Yemek bolusundan kısa bir süre sonra **ek gıda** için (örn. ilave tatlı) bolus yaparsanız, **tüm kutuların işaretini kaldırmak** yararlı olabilir. Bu şekilde, ana öğün henüz tam olarak emilmemiş olduğundan yalnızca yeni karbonhidratlar ilave edilir, bu nedenle aktif insülin, yemek bolusundan kısa bir süre sonra aktif karbonhidrat ile tam olarak eşleşmeyecektir.

(Screenshots-wrong-cob-detection)=

#### Yanlış Aktif Karbonhidrat tespiti

![Yavaş karbonhidrat emilimi](../images/Calculator_SlowCarbAbsorption.png)

* Bolus sihirbazını kullandıktan sonra yukarıdaki uyarıyı görüyorsanız, AndroidAPS hesaplanan AKRB değerinin yanlış olabileceğini algılamıştır. 
* Bu nedenle, mevcut Aktif Karbonhidrat ile bir yemekten sonra tekrar bolus yapmak istiyorsanız, aşırı dozun farkında olmalısınız! 
* Ayrıntılar için [COB hesaplama sayfasındaki](COB-calculation-detection-of-wrong-cob-values) ipuçlarına bakın.

(Screenshots-action-tab)=

## Eylem Sekmesi

![Eylem Sekmesi](../images/Home2021_Action.png)

### Eylemler - bölüm M

* [Profil değiştir](Profiles-profile-switch) butonu, ana ekrandaki [mevcut profil](Screenshots-section-b-profile-target) butonuna basmaya bir alternatiftir.
* [Geçici hedef](temptarget-temp-targets) butonu, ana ekrandaki [mevcut hedef](Screenshots-section-b-profile-target) butonuna basmaya bir alternatif.
* Geçici bir bazal oranı başlatma veya iptal etme düğmesi. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇICIBAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.
* [Yayma boluslar](Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) kapalı döngü ortamında gerçekten çalışmasa da, bazı insanlar yine de yayma bolus kullanma seçeneği istiyordu.
   
   * Bu seçenek yalnızca Dana RS ve Insight pompaları için mevcuttur. 
   * Kapalı döngü otomatik olarak durdurulacak ve yayma bolus çalıştığı süre boyunca açık döngü moduna geçecektir.
   * Bu seçeneği kullanmadan önce [ayrıntıları](../Usage/Extended-Carbs.md) okuduğunuzdan emin olun.

### Bakım portalı - bölüm N

* İçinde görüntülebilir bilgiler
   
   * sensör yaşı & seviyesi (yüzdelik pil)
   * insülin yaşı & seviyesi (ünite bazında)
   * kanül yaşı
   * pompa pil yaşı & seviyesi (yüzdelik bazda

* [düşük çözünürlüklü dış görünüm](Preferences-skin) kullanılırsa daha az bilgi gösterilir.

(Screenshots-sensor-level-battery)=

#### Sensör seviyesi (pil)

* xDrip+'ın güncel veya en eski 10 Aralık 2020 sürümü gerekiyor.
* Libre sensör için MiaoMiao 2 gibi ek verici ile CGM gibi çalışır. (Teknik olarak sensör pil seviyesi bilgilerini xDrip+'a göndermesi gerekir.)
* Eşikler [tercihlerde](Preferences-status-lights) ayarlanabilir.
* Sensör seviyesi, telefonun pil seviyesiyle aynıysa, xDrip+ sürümünüz muhtemelen çok eskidir ve güncellenmesi gerekir.
   
   ![Sensör seviyeleri telefonun pil seviyesine eşit](../images/Home2021_ActionSensorBat.png)

### Bakım portalı - bölüm O

* [Bölüm N](#careportal-section-n)'de görüntülenen KŞ kontrolü, hazırlama/doldurma, sensör yerleştirme ve pompa pil değişimi gibi verilerin temel dayanağı olan butonlardır.
* Hazırlama/Doldurma, pompa set değişimi, insülin kartuş değişimi ve sensör değişimini kaydetmenizi sağlar.
* Bölüm O, Nightscout portalını yansıtır. Yani alıştırma, duyuru ve soru notların özel biçimleridir.

### Araçlar - bölüm P

#### Geçmiş Tarayıcısı

* AAPS geçmişinde geri dönmenizi sağlar.

#### GTD

* Toplam günlük doz = bolus + günlük bazal
* Doktorlar özellikle yeni pompaya başlayanlar için % 50:50'lik bir bazal bolus oranı kullanır. 
* Bu nedenle oran GTD / 2 * TTB (Temel Toplam Bazal = 24 saat içindeki bazal oranın toplamı) olarak hesaplanır. 
* Diğerleri, TTB için GTD'nin %32 ila %37 aralığını tercih eder. 
* Bu genel kuralların çoğu gibi, geçerliliği sınırlıdır. Not: Diyabetiniz değişiklik gösterebilir!

![Geçmiş tarayıcı + GTD](../images/Home2021_Action_HB_TDD.png)

(Screenshots-insulin-profile))=

## İnsülin Profili

![İnsülin Profili](../images/Screenshot_insulin_profile.png)

* Bu [Konfigürasyon ayarları](Config-Builder-insulin)'nda seçtiğiniz insülinin aktivite profilini gösterir. 
* MOR çizgi zamanla bozulduğu için enjekte edildikten sonra ne kadar insülin kaldığını, MAVİ çizgi ise ne kadar aktif olduğunu gösterir.
* Sürecin genel olarak varsayıldığından çok daha uzun sürdüğünü not etmek önemlidir. 
* Pompa ile elle bolus gönderiyorsanız, muhtemelen insülinin yaklaşık 3.5 saat içinde azaldığını varsayıyorsunuz. 
* Ancak, döngü ile pompa kullanırken uzun insülin zamanı önemlidir. Çünkü hesaplamalar çok daha kesindir ve bu küçük miktarlar, AndroidAPS algoritmasındaki hesaplamalara eklenirler.

Farklı insülin türleri, aktivite profilleri ve tüm bunların neden önemli olduğu hakkında daha fazla ayrıntı için [Üstel Etkinlik Eğrilerine Dayalı Yeni AİNS Eğrilerini Anlamak](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) makalesini okuyabilirsiniz.

Ve bununla ilgili mükemmel bir blog makalesini burada [Kullandığımız insülin etki (DIA) sürelerinde neden düzenli olarak yanılıyoruz ve neden önemli…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action -dia-times-we-use-and-why-it-matters/) okuyabilirsiniz.

Ve daha da fazlası: [Üssel İnsülin Eğrileri + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pompa Durumu

![Pompa Durumu](../images/Screenshot_PumpStatus.png)

* Pompa durumu hakkında farklı bilgiler. Görüntülenen bilgiler pompa modelinize bağlıdır.
* Ayrıntılar için [pompalar sayfasına](../Hardware/pumps.md) bakın.

## Bakım portalı

Bakım portalı, Nightscout ekranınızda göreceğiniz fonksiyonları, kayıtlarınıza not eklemenizi sağlayan “+” sembolü altına kopyalamıştır.

### Karbonhidrat hesaplamasını inceleyin

![Tedavi sekmesinde karbonhidrat hesaplamasını inceleyin](../images/Screenshots_TreatCalc.png)

* İnsülin dozunu hesaplamak için [Bolus Sihirbazını](Screenshots-bolus-wizard) kullandıysanız, bu hesaplamayı daha sonra tedaviler sekmesinde inceleyebilirsiniz.
* Sadece yeşil Hesap bağlantısına basın. (Pompaya göre kullanılan insülin ve karbonhidratlar da tedavilerde tek satırda gösterilebilir.)

(Screenshots-carb-correction)=

### Karbonhidrat düzeltme

![1 veya 2 satırda tedavi](../images/Treatment_1or2_lines.png)

Tedavi sekmesi, hatalı karbonhidrat girişlerini düzeltmek için kullanılabilir (yani, karbonhidratları fazla veya az tahmin etmişsinizdir).

1. Ana ekranda güncel AKRB ve AİNS'i kontrol edin ve unutmayın.
2. Tedavi sekmesinde pompaya bağlı olarak karbonhidratlar insülinle birlikte tek satırda veya ayrı bir giriş olarak (örn. Dana RS ile) gösterilebilir.
3. Hatalı karbonhidrat girişini kaldırın.
4. Ana ekranda AKRB'ı tekrar kontrol ederek karbonhidratların başarıyla kaldırıldığından emin olun.
5. Tedavi sekmesinde karbonhidrat ve insülin için yalnızca bir satır varsa, AİNS için de aynısını yapın.
   
   -> Karbonhidratlar anlatıldığı gibi çıkarılmazsa ve burada (6.madde) açıklandığı gibi ilave karbonhidrat eklerseniz, AKRB çok yüksek olur ve bu da çok yüksek insülin iletimine yol açabilir.

6. Ana ekrandaki karbonhidrat butonu aracılığıyla doğru karbonhidrat miktarını girin ve doğru etkinlik zamanını ayarladığınızdan emin olun.

7. Tedavi sekmesinde karbonhidrat ve insülin içeren tek satır varsa, insülin miktarını da eklemeniz gerekir. Doğru etkinlik saatini ayarladığınızdan emin olun ve yeni girişi onayladıktan sonra ana ekranda AİNS'İ kontrol edin.

## Döngü, AMA / SMB

* Bu sekmeler, algoritmanın hesaplamaları ve AAPS'nin neden böyle davrandığı hakkında ayrıntıları gösterir.
* Sistemin CGM'den yeni bir okuma aldığı her sefer yeniden hesaplama yapılır.
* Daha fazla ayrıntı için [Konfigürasyon ayarları sayfasındaki APS bölümüne](Config-Builder-aps) bakın.

## Profil

![Profil](../images/Screenshots_Profile.png)

* Profil, kişisel diyabet ayarlarınız hakkında bilgiler içerir:
   
   * İES (İnsülin Etki Süresi)
   * IC veya I:C: Karbonhidrat insülin oranı
   * IDF: İnsülin Duyarlılık Faktörü
   * Bazal oranı
   * HDF: AAPS'in hedeflemesini istediğiniz kan şekeri seviyesi

* 3.0 sürümünden itibaren yalnızca [yerel profil](Config-Builder-local-profile) mümkündür. Yerel profil akıllı telefonunuzda düzenlenebilir ve Nightscout sitenizle senkronize edilebilir.

(Screenshots-treatment)=

## Tedavi

Aşağıdaki tedavilerin geçmişini görüntüler:

* Bolus & karbonhidrat -> geçmişi düzeltmek için [kaldır](Screenshots-carb-correction) seçeneği
* [Yayma Bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Geçici bazal oranı
* [Geçici hedef](../Usage/temptarget.md)
* [Profil değiştir](../Usage/Profiles.md)
* [Bakım portalı](CPbefore26-careportal-discontinued) Eylem sekmesinden girilen notlar ve diyaloglardaki notlar

## KŞ Kaynağı - xDrip+, BYODA...

![KŞ Kaynağı sekmesi - burada xDrip](../images/Screenshots_BGSource.png)

* KŞ kaynağı ayarlarınıza bağlı olarak bu sekme farklı şekilde adlandırılır.
* CGM okumalarının geçmişini gösterir ve arıza durumunda (örn. sıkıştırma düşük) okumayı kaldırma seçeneği sunar.

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Nightscout sitenizle bağlantının durumunu görüntüler.
* Ayarlar [tercihlerde](Preferences-nsclient) yapılır. Ekranın sağ üst köşesindeki dişli çarka tıklayarak ilgili bölümü açabilirsiniz.
* Sorun giderme için bu [sayfaya](../Usage/Troubleshooting-NSClient.md) bakın.