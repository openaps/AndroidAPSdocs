# AAPS screens

```{contents}
:backlinks: entry
:depth: 2
```

(AapsScreens-the-homescreen)=

## The Homescreen

![Homescreen V2.7](../images/Home2020_Homescreen.png)

This is the first screen you will come across when you open **AAPS**, and it contains most of the information that you will need day to day.

### Section A - Tabs

* Navigate between the various **AAPS** modules.
* Alternatively you can change screens by swiping left or right.
* Displayed tabs can be selected in the [config builder](#Config-Builder-tab-or-hamburger-menu).

(aaps-screens-profile--target)=

### Section B - Profile & target

#### Current Profile

The current profile is displayed in the left bar.

Short press profile bar to view profile details. Long press profile bar to [switch between different profiles](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

1. Regular display with a standard profile activation.
2. Profile switch with a remaining duration of 59mn.
3. Profile switch with a specific percentage of 120%.
4. Profile switch with a specific percentage of 80% and a remaining duration of 59 mn.
5. Profile switch with a time shift of -1 hour.
6. Profile switch with a specific percentage of 120%, time shift of 1 hour, and a remaining duration of 59mn.

#### Target

![Temp target remaining duration](../images/Home2020_TT.png)

Current target blood glucose level is displayed in the right bar.

Short press target bar to set a **[Temporary Target](../DailyLifeWithAaps/TempTargets.md)**.

If a temp target is set, the bar turns yellow and the remaining time in minutes is shown in brackets.

(AapsScreens-visualization-of-dynamic-target-adjustment)=

#### Visualization of Dynamic target adjustment

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

When using the [SMB algorithm](#Config-Builder-aps) and [Autosens](#Open-APS-features-autosens) functionality, **AAPS** can dynamically adjust your target based on sensitivity.

Enable either one or both of the following options in [Preferences > OpenAPS SMB settings](#Preferences-openaps-smb-settings):

* "sensitivity raises target" and/or 
* "resistance lowers target" 

If **AAPS** detects resistance or sensitivity, the target will change from what is set from profile. When it alters the target glucose, the background will change to green.

(AapsScreens-section-c-bg-loop-status)=

### Section C - BG & loop status

#### Current blood glucose

The latest blood glucose reading from your CGM is shown on the left side.

The color of the BG value reflects the status to the defined [range](#Preferences-range-for-visualization).

* green = in range
* red = below range
* yellow = above range 

![Deltas](../images/Home_Delta.png)

The blocks in the middle shows:

1. how many minutes since last **CGM** reading
2. differences with the last reading: Δ, and with the last 15 and 40 minutes average (Δ15 and Δ40).  
    Long deltas are calculated as an average value of deltas in the past, indicating what was the average change.

(AapsScreens-loop-status)=

#### Loop status

![Loop status](../images/Home2020_LoopStatus.png)

On the right side, an icon shows the loop status:

1. Green circle = loop running
2. Green circle with dotted line = [low glucose suspend (LGS)](#objectives-objective6)
3. Red circle = loop disabled (not working permanently)
4. Red circle = loop suspended (temporarily paused but basal insulin will be given) - remaining time is shown below icon
5. Grey circle = pump disconnected (temporarily no insulin dosage at all) - remaining time is shown below icon
6. Orange circle = super bolus running - remaining time is shown below icon
7. Blue circle with dotted line = open loop

Short press or Long press the icon to open the Loop dialog to switch loop mode (Close, Low Glucose Suspend, Open or Disable), suspend / re-enable loop or disconnect / reconnect pump.

* If short press on Loop icon, a validation is required after selection in Loop Dialog
    
    ![Loop status menu](../images/Home2020_Loop_Dialog.png)

(aaps-screens-bg-warning-sign)=

#### BG warning sign

If for any reason, there are issues in the BG readings **AAPS** receives, you will get a warning signal beneath your BG number on the main screen.

##### Red warning sign: Duplicate BG data

The red warning sign is signaling you to get active immediately: You are receiving **duplicate BG data**, which does avoid the loop to do its work right. Therefore, your loop will be disabled until it is resolved.

    {admonition} Your loop is not running
    :class: note
    Your loop is not running until you solve this issue !

![Kırmızı KŞ uyarısı](../images/bg_warn_red.png)

Neden yinelenen KŞ verileri aldığınızı bulmanız gerekiyor:

* Is Dexcom bridge enabled on your Nightscout site? Disable the bridge by going to the administration panel of your Nightscout instance, edit the "enable" variable and remove the "bridge" part there. (Heroku için [ayrıntıları burada bulabilirsiniz](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* Do multiple sources upload your BG to Nightscout? If you use the BYODA app, enable the upload in **AAPS** but do not enable it in xDrip+, if you use that.
* Do you have any followers that might receive your BG but do also upload it again to your Nightscout site?
* Last resort: In **AAPS**, go to [Preferences > NSClient](#Preferences-nsclient), select the sync settings and disable the "Accept CGM data from NS" option.

To remove the warning immediately and get to loop running again, you need to manually delete a couple of entries from the Dexcom/xDrip+ tab.

Ancak, çok sayıda kopya olduğunda, aşağıdakileri yapmak daha kolay olabilir

* [backup your settings](../Maintenance/ExportImportSettings.md),
* bakım menüsünde veritabanınızı sıfırlayın ve
* [import your settings](../Maintenance/ExportImportSettings.md) again

##### Sarı uyarı işareti

The yellow warning signal is indicating that your BG arrived in irregular time intervals or that some BGs are missing. When pressing the sign, the message indicates “Recalculated data used”.

![Sarı KŞ uyarısı](../images/bg_warn_yellow.png)

Genellikle herhangi bir işlem yapmanız gerekmez. Kapalı döngü çalışmaya devam eder!

As a sensor change is interrupting the constant flow of BG data, a yellow warning sign after sensor change is normal and nothing to worry about.

Special note for Libre users:

* Her libre verisi birkaç saatte bir veya iki dakika kayar, bu da düzenli KŞ aralıklarının mükemmel akışını asla elde edemeyeceğiniz anlamına gelir.
* Also, jumpy readings interrupt the continuous flow.
* Therefore, the yellow warning sign will be 'always on' for Libre users.

*Note*: Up to 30h hours are taken into accord for **AAPS** calculations. Dolayısıyla, sorun çözüldükten sonra bile, son düzensiz aralık oluştuktan sonra sarı üçgenin kaybolması yaklaşık 30 saat sürebilir.

#### Simple mode

An icon with a kid's face at the top right of this section indicates that you are in [Simple mode](#preferences-simple-mode).

![Home2020_SimpleMode.png](../images/Home2020_SimpleMode.png)

### Bölüm D - AİNS, AKRB, BO ve OD

![Bölüm D](../images/Home2020_TBR.png)

1. **Syringe**: insulin on board (IOB) - amount of active insulin inside your body  
    The insulin on board figure would be zero if just your standard basal was running and there was no insulin remaining from previous boluses.
    
    * Yakın zamanda bazalınız düşürülmüşse, (AİNS) aktif insülin negatif olabilir.
    * Bolus ve bazal insülinin ayrımını görmek için simgeye basın

2. **Grain**: [carbs on board (COB)](../DailyLifeWithAaps/CobCalculation.md) - yet unabsorbed carbs you have eaten before The icon pulses red if carbs are required (see [below](#aaps-screens-carbs-required))

3. **Purple line**: current basal rate. The icon changes to reflect temporary changes in basal rate (flat at 100%) 
    * Herhangi bir geçici bazalın (kalan süre dahil) temel bazal oranını ve ayrıntılarını görmek için simgeye basın
4. **Arrows up & down**: indicates dynamic sensitivity features status ([Autosens](#Open-APS-features-autosens) or [DynamicISF](#Open-APS-features-DynamicISF)): enabled or disabled. Several values may be shown in this section: 
    * AS: Autosens value. Shown even if Autosens is disabled (for information only). Also shown when DynISF is activated, although it has no effect.
    * Alg: DynamicISF value (based on TDD). More information on the last line on [DynamicISF](#Open-APS-features-DynamicISF) page.

(aaps-screens-carbs-required)=

#### Karbonhidrat İhtiyacı

![Karbonhidrat İhtiyacı](../images/Home2020_CarbsRequired.png)

Algoritma, Kş'nizin çok düşmesini önlemek için bir şeyler yemeniz gerektiğini anlarsa, önerilen karbonhidrat miktarı görüntülenir.

This is when the oref algorithm thinks it can't rescue you by zero-temping, and you will need carbs to fix.

Karbonhidrat bildirimleri, bolus hesaplayıcılardan çok daha karmaşıktır. Bolus hesaplayıcı eksik karbonhidratları göstermezken karbonhidrat önerisi görebilirsiniz.

İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

### Bölüm E - Durum ışıkları

![Bölüm E](../images/Home2020_StatusLights.png)

Durum ışıkları için görsel bir uyarı verir

* Kanül yaşı
* İnsülin yaşı (rezervuarın kullanıldığı gün sayısı)
* Rezervuar seviyesi (Ünite)
* Sensör yaşı
* Pil yaşı ve seviyesi (%)

Eşik uyarısı aşılırsa değerler sarı renkte gösterilecektir.

Kritik eşik aşılırsa değerler kırmızı ile gösterilir.

Settings can be changed in [Preferences > Overview > Status lights](#Preferences-status-lights).

Depending on the pump you use, you may not have all of these icons.

(aaps-screens-main-graph)=

### Bölüm F - Ana grafik

![Bölüm F](../images/Home2020_MainGraph.png)

The graph shows your blood glucose (BG) as read from your glucose monitor (CGM).

Parmak ucundan alınan kalibrasyonları ve karbonhidrat girişleri gibi işlem sekmesine girilen notların yanı sıra profil geçişleri burada gösterilir.

Use the menu on top left of the graph or long press anywhere on the graph to change the timescale. You can choose between 6, 12, 18 or 24 hours.

Yeşil alan hedef aralığınızı yansıtmaktadır.

Blue triangles show [SMB](#Open-APS-features-super-micro-bolus-smb) - if enabled in [Preferences > OpenAPS SMB](#Preferences-openaps-smb-settings).

(AapsScreens-activate-optional-information)=

#### İsteğe bağlı bilgileri etkinleştir

On the main graph, you can switch on these optional information:

* Tahminler
* Tedaviler
* Bazallar
* Aktivite - insülin aktivite eğrisi

To show this information, click the triangle on the right side of the main graph. For the main graph just the four options above the line "Graph 1 2 3 4" are available.

![Main graph setting](../images/Home2020_MainGraphSetting.png)

(aaps-screens-prediction-lines)=

#### Tahmin çizgileri

* **Orange** line: [COB](CobCalculation) (color is used generally to represent COB and carbs)
    
    This prediction line shows where your BG (not where COB itself!) will go based on the current **Profile** settings, assuming that the deviations due to carb absorption remain constant. Bu çizgi yalnızca bilinen AKRB (Aktif Karbonhidrat) varsa görünür.

* **Dark blue** line: IOB (color is used generally to represent IOB and insulin)
    
    This prediction line shows what would happen under the influence of insulin only. For example if you dialed in some insulin and then didn’t eat any carbs.

* **Açık mavi** çizgi: sıfır geçici (geçici bazal oranı %0 olarak ayarlandıysa, tahmini KŞ)
    
    This prediction line shows how the BG trajectory line would change if the pump stopped all insulin delivery (0% TBR).
    
    *This line appears only when the [SMB](#Config-Builder-aps) algorithm is used.*

* **Dark yellow** line: [UAM](#SensitivityDetectionAndCob-sensitivity-oref1) (un-announced meals)
    
    Bildirilmemiş öğünlerin anlamı, öğün, adrenalin veya diğer etkiler nedeniyle glikoz seviyelerinde önemli bir artışın tespit edilmesidir. Prediction line is similar to the **orange COB line**, but it assumes that the deviations will taper down at a constant rate (by extending the current rate of reduction).
    
    *This line appears only when the [SMB](#Config-Builder-aps) algorithm is used.*

* ** koyu turuncu ** çizgi: hAKRB (hızlandırılmış karbonhidrat emilimi)
    
    AKRB'e benzer, ancak statik bir 10 mg/dl/5m (-0.555 mmol/l/5m) karbonhidrat emme oranı varsayılır. Kullanımdan kaldırılmış ve sınırlı yararlılık.
    
    *This line appears only when the older [AMA](#Config-Builder-aps) algorithm is used.*

Genellikle gerçek glikoz eğriniz bu çizgilerin ortasında veya durumunuza en çok benzeyen varsayımlarda bulunanın yakınında biter.

#### Bazallar

**Sürekli mavi** çizgi, pompanızın bazal iletimini gösterir ve zaman içindeki gerçek iletimi yansıtır.

**noktalı mavi** çizgi, geçici bazal ayarlamalar (GBO'lar) olmasaydı bazal oranın ne olacağıdır.

When the standard basal rate is given, the area under the curve is shown in dark blue. When the basal rate is temporarily adjusted (increased or decreased), the area under the curve is shown in light blue.

#### Aktivite

**İnce sarı** çizgi, insülin aktivitesini gösterir.

Başka hiçbir faktör (karbonhidrat gibi) mevcut değilse, sisteminizdeki insülinin KŞ'nde beklenen düşüşe dayanır.

(AapsScreens-section-g-additional-graphs)=

### Section G - Additional graphs

Ana grafiğin altında en fazla dört ek grafik etkinleştirebilirsiniz. When in [Simple Mode](#preferences-simple-mode), additional graphs are preset and can not be changed. Switch off **Simple Mode** if you wish to set your own configuration of additional graphs.

To open settings for additional graphs click the triangle on the right side of the [main graph](#aaps-screens-main-graph) and scroll down.

![Ek grafik ayarları](../images/Home2020_AdditionalGraphSetting.png)

To configure additional graphs, check the boxes corresponding to the data you want to see on each graph.

Most users find the following configuration of additional graphs to be adequate :

* Graph 1 with IOB, COB, Sensitivity change
* Graph 2 with Deviations and BGI.

#### Mutlak insülin

Boluslar dahil aktif insülin **ve bazal**.

#### Aktif İnsülin

Aktif insülini gösterir (= vücudunuzdaki aktif insülin). Bolus ve geçici bazaldan alınan insülini içerir (**ancak profilinizde ayarlanan bazal oranları hariçtir**).

If there were no [SMBs](#Open-APS-features-super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.

Daha uzun bir süre boyunca bolus kalmazsa ve sıfır/düşük geçici bazal devam ederse AİNS negatif olabilir.

Decaying depends on your [DIA and insulin profile settings](../SettingUpAaps/YourAapsProfile.md).

#### (AKRB) Aktif Karbonhidrat

Aktif karbonhidratları gösterir (= vücudunuzdaki aktif, henüz bozulmamış karbonhidratlar).

Decaying depends on the [deviations the algorithm detects](../DailyLifeWithAaps/CobCalculation.md).

Beklenenden daha yüksek bir karbonhidrat emilimi tespit edilirse, insülin verilecek ve bu aktif insülini artıracaktır (güvenlik ayarlarınıza bağlı olarak daha fazla veya daha az).

#### Sensitivity change

Shows the sensitivity that [Autosens](#Open-APS-features-autosens) has detected.

Duyarlılık, egzersiz, hormonlar vb. sonucunda insüline duyarlılığın hesaplanmasıdır.

Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the line in your graph is displayed for information only.

### Variable sensitivity

Shows the sensitivity as calculated by [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). Only populated if you use this feature.

(screen-heart-rate-steps)=

#### Heart rate & Steps

This data may be available when using a [Wear smartwatch](../WearOS/WearOsSmartwatch.md). Enable them on **AAPS** Wear app and give permission for health data.

#### Sapmalar

* **Grey** bars show a deviation due to carbs. 
* **Green** bars show that BG is higher than the algorithm expected it to be. Green bars are used to increase resistance in [Autosens](#Open-APS-features-autosens).
* **Red** bars show that BG is lower than the algorithm expected. Red bars are used to increase sensitivity in [Autosens](#Open-APS-features-autosens).
* **Yellow** bars show a deviation due to UAM.
* **Black** bars show small deviations not taken into account for sensitivity

#### Blood Glucose Impact

This line shows the degree to which BG ‘should’ rise or fall based on insulin activity alone.

![Anaekran butonları](../images/Screenshots_DEV_BGI.png)

It is a good combination to display this line along with the Deviation bars. They share the same scale, but it is a different one than the other optional data, so it is a good idea to display them on a separate graph, as shown above. Comparing the BGI line and the Deviation bars is another way to understand how **BG** fluctuates. Here, at the time marked **1**, the Deviation bars are greater than the BGI line, indicating that BG is rising. Later, during the hours marked **2**, BGI and DEV are pretty much in line, indicating that BG is stable.

### Bölüm H - Butonlar

![Anaekran butonları](../images/Home2020_Buttons.png)

Buttons for Insulin and Carbs are almost always visible. If the connection to the pump is lost, the Calculator button will not be visible.

Other Buttons can be setup in [Preferences > Overview > Buttons](#Preferences-buttons).

About using the Insulin, Carbs and Calculator buttons : If enabled in the [Preferences > Overview](#Preferences-show-notes-field-in-treatments-dialogs), the **Notes** field allows you to enter text that will show on the main graph, and may be uploaded to Nightscout - depending on your settings for NS client.

(aaps-screens-buttons-insulin)=

#### İnsülin

![İnsülin butonu](../images/Home2020_ButtonInsulin.png)

To give a certain amount of insulin without using the [bolus calculator](#aaps-screens-bolus-wizard).

By checking the box **Start eating soon TT**, you can automatically start your [eating soon temp target](#TempTargets-eating-soon-temp-target).

If you do not want to bolus through the pump but record an insulin amount (i.e. insulin given by pen) check the corresponding box. When checking this box, you get an additional field “Time offset”, that you can use to record an insulin injection made in the past.

You can use the buttons to quickly increase the insulin quantity. The increment values can be changed in the [Preferences > Overview > Buttons](#Preferences-buttons).

The insulin button can be used when the pump is suspended as well, i.e. to record insulin injected with a pen. In this case, the header will show in yellow, and the checkbox “Do not bolus, record only” can not be unchecked.

![Home2020_ButtonInsulin_PumpSuspended.png](../images/Home2020_ButtonInsulin_PumpSuspended.png)

#### Karbonhidrat

![Karbonhidrat butonu](../images/Home2020_ButtonCarbs.png)

Karbonhidratları bolus olmadan kaydetmek için kullanılır.

Certain [pre-set temporary targets](#TempTargets-hypo-temp-target) can be set directly by checking the box.

**Time offset**: When will you / have you been eaten carbs (in minutes).

**Duration**: To be used for ["extended carbs"](ExtendedCarbs)

You can use the buttons to quickly increase the carb amount. The increment values can be changed in the [Preferences > Overview > Buttons](#Preferences-buttons).

#### Hesap makinesi

See Bolus Wizard [section below](#aaps-screens-bolus-wizard).

#### Kalibrasyonlar

xDrip+'a bir kalibrasyon gönderir veya Dexcom kalibrasyon diyalog penceresini açar.

Must be activated in [Preferences > Overview > Buttons](#Preferences-buttons).

#### CGM

xDrip+'ı açmak için kullanılır.

Back button returns to **AAPS**.

Must be activated in [Preferences > Overview > Buttons](#Preferences-buttons).

#### Hızlı Asistan

Karbonhidrat miktarını kolayca girin ve temel hesaplamaları ayarlayın.

Details are set up in [Preferences > Overview > QuickWizard settings](#Preferences-quick-wizard).

(aaps-screens-bolus-wizard)=

## Bolus Sihirbazı

![Bolus sihirbazı](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus, this is where you will normally make it from.

### Bölüm I

Hesaplanan bolusu gösterir.

Aktif insülin miktarı hesaplanan bolusu aşarsa, o zaman sadece gerekli olan karbonhidrat miktarını gösterecektir.

(AapsScreens-section-j)=

### Bölüm J

KŞ alanında normalde zaten CGM'nizden gelen en son okuma bulunur. Çalışan bir CGM'niz yoksa boş olacaktır.

In the **Carbs** field, you add your estimate of the amount of carbs - or equivalent - that you want to bolus for.

The **Corr** field is if you want to modify the end dosage for some reason.

The **Carb time** field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Yenmiş karbonhidratlar için bolus yapıyorsanız, bu alana negatif bir sayı girebilirsiniz.

**Eating reminder** : For carbs in the future, the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at the given time, when to eat the carbs you have input into **AAPS**.

![Yemek Hatırlatıcılı Bolus Sihirbazı](../images/Home2021_BolusWizard_EatingReminder.png)

### Bölüm K

**Profile** allows you to select a different profile than the current one, to make the calculation for the insulin required. This profile selection applies only for the current bolus, it is not a profile change.

**Super Bolus** is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The option only shows when "Enable Superbolus in wizard" is set in the [Preferences > Overview > Advanced Settings](#Preferences-advanced-settings-overview). Buradaki ana fikir, bazal insülini erkenden vererek ani artışları azaltmaktır.

Ayrıntılar için [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) adresini ziyaret edin.

### Bölüm L

Details of the wizard's bolus calculation.

You can deselect any that you do not want to include, but you normally wouldn't want to.

For safety reasons the **TT box must be ticked manually**, if you want the bolus wizard to calculate based on an existing temporary target.

#### AKRB ve AİNS kombinasyonları ve ne anlama geldikleri

* For safety reasons, the IOB box cannot be unticked when COB box is ticked as you might run the risk of too much insulin as **AAPS** is not accounting for what’s already given.
* If you tick COB and IOB, unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, **AAPS** takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. Bu işareleme 'eksik karbonhidrat' bildirimine yol açar.
* Yemek bolusundan kısa bir süre sonra **ek gıda** için (örn. ilave tatlı) bolus yaparsanız, **tüm kutuların işaretini kaldırmak** yararlı olabilir. Bu şekilde, ana öğün henüz tam olarak emilmemiş olduğundan yalnızca yeni karbonhidratlar ilave edilir, bu nedenle aktif insülin, yemek bolusundan kısa bir süre sonra aktif karbonhidrat ile tam olarak eşleşmeyecektir.

![BolusWizard with Details](../images/Home2021_BolusWizard_Details.png)

The box near the eye allows you to choose between the detailed view, with the numbers entering the calculation for each item, or the simple view with icons. Pressing on an icon will enable / disable this entry from the calculation.

(AapsScreens-wrong-cob-detection)=

#### Yanlış Aktif Karbonhidrat tespiti

![Yavaş karbonhidrat emilimi](../images/Calculator_SlowCarbAbsorption.png)

If you see the warning above after using bolus wizard, **AAPS** has detected that the calculated COB value may be wrong. So, if you want to bolus again after a previous meal with COB, you should be aware of overdosing!

For details, see the hints on [COB calculation page](#CobCalculation-detection-of-wrong-cob-values).

(screens-action-tab)=

## Eylem Sekmesi

![Eylem Sekmesi](../images/Home2021_Action.png)

### Eylemler - bölüm M

Button **[Profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)** as an alternative to pressing the [current profile](#aaps-screens-profile--target) on homescreen.

Button **[Temporary target](../DailyLifeWithAaps/TempTargets.md)** as an alternative to pressing the [current target](#aaps-screens-profile--target) on homescreen.

Geçici bir bazal oranı başlatma veya iptal etme düğmesi. Geçici bir bazal oranı ayarlandığında düğmenin "GEÇICIBAZAL" yerine "İPTAL x%" olarak değiştiğini lütfen unutmayın.

Even though [extended boluses](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.

* Bu seçenek yalnızca Dana RS ve Insight pompaları için mevcuttur. 
    * Kapalı döngü otomatik olarak durdurulacak ve yayma bolus çalıştığı süre boyunca açık döngü moduna geçecektir.
    * Make sure to read the [details](../DailyLifeWithAaps/ExtendedCarbs.md) before using this option.

(aaps-screens-careportal)=

### Bakım portalı - bölüm N

Displays information on:

* sensor age & level (battery percentage)
* insulin age & level (units)
* cannula age
* pump battery age & level (percentage

Less information will be shown if **low resolution skin** is used ([Preferences > General > Skin](#Preferences-skin)).

(screens-sensor-level-battery)=

#### Sensör seviyesi (pil)

Works for CGM with an additional transmitter such as MiaoMiao 2. (Teknik olarak sensör pil seviyesi bilgilerini xDrip+'a göndermesi gerekir.)

Thresholds can be set in [Preferences > Overview > Status lights](#Preferences-status-lights).

### Bakım portalı - bölüm O

BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#aaps-screens-careportal).

Hazırlama/Doldurma, pompa set değişimi, insülin kartuş değişimi ve sensör değişimini kaydetmenizi sağlar.

Bölüm O, Nightscout portalını yansıtır. Yani alıştırma, duyuru ve soru notların özel biçimleridir.

### Araçlar - bölüm P

#### Geçmiş Tarayıcısı

Allows you to ride back in **AAPS** [history](../Maintenance/Reviewing.md).

#### GTD

Toplam günlük doz = bolus + günlük bazal

Doktorlar özellikle yeni pompaya başlayanlar için % 50:50'lik bir bazal bolus oranı kullanır.

Therefore, ratio is calculated as TDD / 2 * TBB (Total base basal = sum of basal rate within 24 hours).

Diğerleri, TTB için GTD'nin %32 ila %37 aralığını tercih eder.

Bu genel kuralların çoğu gibi, geçerliliği sınırlıdır. Not: Diyabetiniz değişiklik gösterebilir!

(AapsScreens-insulin-profile)=

## İnsülin Profili

![İnsülin Profili](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen in [Config builder > Insulin](#Config-Builder-insulin). The curves will vary based on the [DIA](#your-aaps-profile-duration-of-insulin-action) and the time to peak.

The **purple** line shows how much insulin remains after it has been injected as it decays with time and the **blue** line shows how active it is.

See [Your AAPS Profile > Duration of insulin action](#your-aaps-profile-duration-of-insulin-action) to learn more about what it is and how to set it.

## Pompa Durumu

![Pompa Durumu](../images/Screenshot_PumpStatus.png)

* Pompa durumu hakkında farklı bilgiler. Görüntülenen bilgiler pompa modelinize bağlıdır.
* See [pumps page](../Getting-Started/CompatiblePumps.md) for details.

## Döngü, AMA / SMB

These tabs show details about the algorithm's calculations and why **AAPS** acts the way it does.

Calculations are run each time the system gets a fresh reading from the CGM.

For more details see [APS section on config builder page](#Config-Builder-aps).

(aaps-screens-profile)=

## Profile

![Profile](../images/Screenshots_Profile.png)

Profile contains information on your individual diabetes settings, see the detailed **[Profile](../SettingUpAaps/YourAapsProfile.md)** page for more information.

## Otomasyon

See the dedicated page [here](../DailyLifeWithAaps/Automations.md).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

This page displays the status of the connection with your Nightscout site.

Settings can be changed in [Preferences > NS Client](#Preferences-nsclient).

For troubleshooting see this [page](../GettingHelp/TroubleshootingNsClient.md).

## KŞ Kaynağı - xDrip+, BYODA...

![BG Source tab - here Nightscout](../images/Screenshots_BGSource.png)

Depending on your BG source settings, this tab is named differently.

Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low) or duplicate readings.

(aaps-screens-treatments)=

## Tedaviler

This view can be accessed by pressing the 3 dots on the right of the menu, then Treatments. It is not possible to show it in the main menu through the Config Builder. In this view, you can view and alter the history of the following treatments:

* Bolus & carbs
* [Yayma Bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Geçici bazal oranı
* [Geçici hedef](../DailyLifeWithAaps/TempTargets.md)
* [Profil değiştir](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
* Careportal: notes entered through action tab and notes in dialogues
* User entry: other notes that are not sent to Nightscout

In the last column, the data source for each line is displayed in blue. It can be :

* NS for Nightscout : the data comes from or has been recorded to Nightscout
* PH for Pump History : the data has been processed by the pump

(screens-bolus-carbs)=

### Bolus & carbs

![Karbonhidratlar & bolus](../images/TreatmentsView1.png)

On this tab you can view the bolus and carbs log. Each bolus (line **1** and **4**) shows the remaining associated IOB next to the insulin amount. The origin of the bolus can be either :

* Meal (manually entered though the Insulin, Quick Wizard or Bolus Wizard buttons)
* SMB, when using the SMB Functionality

The carbs (line **2**) are only stored in Nightscout. If you have used the [Bolus Wizard](#aaps-screens-bolus-wizard) to calculate insulin dosage, you can press the “Calc” text (line **3**) to show the details of how the bolus was calculated.

Depending on the pump used, insulin and carbs can be shown in one single line, or will result in multiple lines: one for the calculation detail, one for the carbs, one for the bolus itself.

The treatment tab can be used to correct faulty carb entries (*i.e.* you over- or underestimated carbs). Note that it is not possible to edit an existing entry, you need to follow the following process:

1. Ana ekranda güncel AKRB ve AİNS'i kontrol edin ve unutmayın.
2. Tedavi sekmesinde pompaya bağlı olarak karbonhidratlar insülinle birlikte tek satırda veya ayrı bir giriş olarak (örn. Dana RS ile) gösterilebilir.
3. Remove the entry with the faulty carb amount. (Latest versions have trashcan icon in treatments screen. Press the trashcan icon, select the lines to remove, and then press the trashcan icon again to finalize.)
4. Ana ekranda AKRB'ı tekrar kontrol ederek karbonhidratların başarıyla kaldırıldığından emin olun.
5. Tedavi sekmesinde karbonhidrat ve insülin için yalnızca bir satır varsa, AİNS için de aynısını yapın.
    
    → If carbs are not removed as intended, and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Ana ekrandaki karbonhidrat butonu aracılığıyla doğru karbonhidrat miktarını girin ve doğru etkinlik zamanını ayarladığınızdan emin olun.

7. Tedavi sekmesinde karbonhidrat ve insülin içeren tek satır varsa, insülin miktarını da eklemeniz gerekir. Doğru etkinlik saatini ayarladığınızdan emin olun ve yeni girişi onayladıktan sonra ana ekranda AİNS'İ kontrol edin.

### Temp Basal

![Temp Basal](../images/TreatmentsView2.png)

The **temp basals** applied by the loop are shown here. When there is still an impact on the IOB for an entry, the information is shown in green. It can be:

* Positive IOB if the temp basal was higher than the one set in the Profile (line **2**)
* Negative IOB for a zero-temp or if the temp basal was lower than the one set in the Profile (line **1**)

Deleting the entries only affects your reports in Nightscout and will probably tamper your real IOB - it is not recommended.

On the left of a line, a red S means “Suspend” : it happens when basal is not currently delivered. This is a normal situation when in the process of changing a pod, for example.

### Geçici hedef

![Geçici hedef](../images/TreatmentsView3.png)

The history of temporary targets can be seen here.

### Profile Switch

![Profile Switch](../images/TreatmentsView4.png)

The history of profile switches can be seen here. You may see multiple entries each time you switch profile : line **1**, stored in Nightscout but not in Pump History, corresponds to the request of a profile switch made by the user. Line **2**, stored both in NS and PH, correspond to the actual switch.

Deleting the entries only affects your reports in Nightscout and will never actually change the current profile.

You can use the **Clone** button shown on line **1** to make a copy of a **Profile Switch**. See [Your AAPS Profile > Manage your profiles](#your-aaps-profile-clone-profile-switch) for more information.

### Care portal

![Care portal](../images/TreatmentsView5.png)

This tab shows all notes and alerts recorded in Nightscout.

## Geçmiş Tarayıcısı

This view can be accessed by pressing the 3 dots on the right of the menu, then History. It is not possible to put in the main menu through the Config Builder. It can also be accessed through a button at the bottom of the [Action tab](#screens-action-tab).

Allows you to ride back in **AAPS** history. See the dedicated page [Reviewing your data > History Browser](../Maintenance/Reviewing.md).

## Statistics

This view can be accessed by pressing the 3 dots on the right of the menu, then Statistics. It is not possible to put in the main menu through the Config Builder.

Gives you statistics about your Time In Range and Total Daily Dose. See the dedicated page [Reviewing your data > Statistics](#reviewing-statistics).

(aaps-screens-profile-helper)=

## Profile Helper

This view can be accessed by pressing the 3 dots on the right of the menu, then Profile Helper. It is not possible to put in the main menu through the Config Builder. The Profile Helper can help you:

* [build a profile from scratch for a kid](#your-aaps-profile-profile-from-scratch-for-a-kid)
* [compare two profiles](#your-aaps-profile-compare-profiles)