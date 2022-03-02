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

* The **thin yellow** line shows the activity of Insulin. 
* It is based on the expected drop in BG of the insulin in your system if no other factors (like carbs) were present.

### Section G - additional graphs

* You can activate up to four additional graphs below the main graph.
* To open settings for additional graphs click the triangle on the right side of the [main graph](../Getting-Started/Screenshots#section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* To add an additional graph check the box on the left side of its name (i.e. \---\---- Graph 1 \---\----).

#### Mutlak insülin

* Active insulin including boluses **and basal**.

#### Insulin on board

* Shows the insulin you have on board (= active insulin in your body). It includes insulin from bolus and temporary basal (**but excludes basal rates set in your profile**).
* If there were no [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* IOB can be negative if you have no remaining bolus and zero/low temp for a longer time.
* Decaying depends on your [DIA and insulin profile settings](../Configuration/Config-Builder#local-profile). 

#### Carbs On Board

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* Decaying depends on the deviations the algorithm detects. 
* If it detects a higher carb absorption than expected, insulin would be given and this will increase IOB (more or less, depending on your safety settings). 

#### Deviations

* **GREY** bars show a deviation due to carbs. 
* **GREEN** bars show that BG is higher than the algorithm expected it to be. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **RED** bars show that BG is lower than the algorithm expected. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.
* **BLACK** bars show small deviations not taken into account for sensitivity

#### Sensitivity

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* Sensitivity is a calculation of sensitivity to insulin as a result of exercise, hormones etc.

#### Aktivite

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* The value is higher for insulin closer to peak time.
* It would mean to be negative when IOB is decreasing. 

#### Deviation slope

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are almost'always on'.
   
   * If connection to pump is lost, the insulin button will not be visible.

* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### İnsülin

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](#bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](../Configuration/Preferences#default-temp-targets).
* If you do not want to bolus through pump but record insulin amount (i.e. insulin given by syringe) check the corresponding box.

#### Karbonhidrat

![Carbs button](../images/Home2020_ButtonCarbs.png)

* To record carbs without bolusing.
* Certain [pre-set temporary targets](../Configuration/Preferences#default-temp-targets) can be set directly by checking the box.
* Time offset: When will you / have you been eaten carbs (in minutes).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.rst)
* You can use the buttons to quickly increase carb amount.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

#### Hesap makinesi

* See Bolus Wizard [section below](#bolus-wizard)

#### Calibrations

* Sends a calibration to xDrip+ or opens Dexcom calibration dialogue.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### CGM

* Opens xDrip+.
* Back button returns to AAPS.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### Hızlı Asistan

* Easily enter amount of carbs and set calculation basics.
* Details are setup in [preferences](../Configuration/Preferences#quick-wizard).

## Bolus Wizard

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus this is where you will normally make it from.

### Section I

* BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. 
* In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. You can put a negative number in this field if you are bolusing for past carbs.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Section J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The option only shows when "Enable [superbolus](../Configuration/Preferences#superbolus) in wizard" is set in the [preferences overview](../Configuration/Preferences#overview).
* The idea is to deliver the insulin sooner and hopefully reduce spikes.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Shows the calculated bolus. 
* If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#nsclient).

### Section L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinations of COB and IOB and what they mean

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Actions tab](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#extended boluses) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#extended boluses) before using this option.

### Careportal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * cannula age
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
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
* See [pumps page](../Hardware/pumps.rst) for details.

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