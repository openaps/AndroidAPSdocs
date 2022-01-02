# Konfigürasyon ayarları

Ayarlarınıza bağlı olarak, ekranın üst kısmındaki bir sekmeden veya hamburger menüsünden Konfigürasyon ayarları'nı açabilirsiniz.

![Open config builder](../images/ConfBuild_Open.png)

Konfigürasyon ayarları (KONF), modüler özellikleri açıp kapattığınız sekmedir. The boxes on the left-hand side (A) allow you to select which one to use, the boxes on the right-hand side (C) allow you to view these as a tab (E) in AndroidAPS. In case the right box is not activated you can reach the function by using the hamburger menu (D) on the top left of the screen.

Where there are additional settings available within the module, you can click on the cog wheel (B) which will take you to the specific settings within preferences.

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AndroidAPS. Push 3-dots-menu on the upper right-hand side of the screen (F) and select 'Setup Wizard' to use it.

![Config Builder boxes and cog wheel](../images/ConfBuild_ConfigBuilder.png)

## Tab or hamburger menu

With the checkbox under the eye symbol you can decide how to open the corresponding program section.

![Tab or hamburger menu](../images/ConfBuild_TabOrHH.png)

## Profil

Select the basal profile you wish to use. See [Profiles](../Usage/Profiles.md) page for more setup information.

### Local profile (recommended)

Local profile uses the basal profile manually entered in phone. As soon as it is selected, a new tab appears in AAPS, where you can change the profile data read out from the pump if necessary. Bir sonraki profil değişimi ile pompadaki profil1'e yazılırlar. İnternet bağlantısı gerektirmediği için bu profil önerilir.

Your local profiles are part of [exported settings](../Usage/ExportImportSettings.rst). So make sure to have a backup in a safe place.

![Local Profile settings](../images/LocalProfile_Settings.png)

Butonlar:

* yeşil artı: profil ekleme
* kırmızı X: profil silme
* mavi ok: profil kopyalama

If you make any changes to your profile, make sure, you are editing the correct profile. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Clone profile switch

Bir profil değiştir'me ile kolayca yeni bir yerel profil oluşturabilirsiniz. Bu durumda, yeni yerel profile zaman kayması ve yüzdesel değişim uygulanabilecektir.

1. Go to treatments tab.
2. Select ProfileSwitch.
3. Press "Clone".
4. You can edit the new local profile in Local Profile (LP) tab or via the hamburger menu.

![Clone profile switch](../images/LocalProfile_ClonePS.png)

If you want to switch from Nightscout profile to local profile just do a profile switch on your NS profile and clone the profile switch as described above.

#### Upload local profiles to Nightscout

Local profiles can also be uploaded to Nightscout. The settings can be found in [NSClient preferences](../Configuration/Preferences#nsclient).

![Upload local profile to NS](../images/LocalProfile_UploadNS2.png)

Advantage:

* no internet connection necessary to change profile settings
* profile changes can be made directly on the phone
* new profile can be created from profile switch
* local profiles can be uploaded to Nightscout

Disadvantage:

* none

### Profil yardımcısı

Profil yardımcısı iki işlev sunar:

1. Çocuklar için bir profil bulmak
2. Yeni bir profili klonlamak için iki profili veya profil değişimlerini karşılaştırmak

Ayrıntılar, [profil yardımcısı sayfasında](../Configuration/profilehelper.rst) açıklanmıştır.

### Nightscout Profili

NS Profili, Nightscout sitenize kaydettiğiniz profilleri kullanır (https://[yournightscoutsiteaddress]/profile). Bu profillerden hangisinin etkin olduğunu değiştirmek için [Profil Değiştirme](../Usage/Profiles.md)'yi kullanabilirsiniz. Bu, AndroidAPS arızası durumunda profili pompaya yazar. Bu, Nightscout'ta kolayca birden çok profil oluşturmanıza olanak tanır (ör.. iş, ev, spor, tatil vb.) "Kaydet"e tıkladıktan kısa bir süre sonra, akıllı telefonunuz çevrimiçiyse bunlar AAPS'e aktarılacaktır. İnternet bağlantısı veya Nightscout bağlantısı olmasa bile, Nightscout profilleri senkronize edildikten sonra AAPS'de kullanılabilir.

Nightscout'tan bir profili etkinleştirmek için [profil değiştirme](../Getting-Started/Screenshots.md#current-profile) yapın. AAPS, profil değişikliğinden sonra seçilen profili pompaya yazar, böylece acil bir durumda AAPS olmadan kullanılabilir ve çalışmaya devam eder.

Advantage:

* çoklu profil
* PC veya tablet üzerinden düzenlemesi kolay

Disadvantage:

* profil ayarlarında yerel değişiklik yapamazsınız
* profil değiştirme doğrudan telefonda yapılamaz.

## İnsülin

![Insulin type](../images/ConfBuild_Insulin.png)

* Kullanmakta olduğunuz insülin eğrisinin türünü seçin.
* 'Hızlı Etkili Oref', Ultra Hızlı Oref', 'Lyumjev' ve 'Serbest Tepe Oref' seçeneklerinin tümü üstel bir şekle sahiptir. Daha fazla bilgi [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) sayfasında listelenmiştir. 
* Eğriler, İES'e ve zirveye ulaşma süresine bağlı olarak değişecektir.
    
    * MOR çizgi, zamanla bozulduğu için enjekte edildikten sonra ne kadar **insülin kaldığını** gösterir.
    * MAVİ çizgi, insülinin **ne kadar aktif** olduğunu gösterir.

### İES (DIA) İnsülin etki süresi

* İES her kişi için aynı değildir. Bu yüzden kendiniz test etmelisiniz. 
* Ancak her zaman en az 5 saat olmalıdır.
* Fiasp gibi ultra hızlı insülin kullanan birçok insan için, kural olarak 0.0xx ünite mevcut olsa bile, 3-4 saat sonra pratikte gözle görülür bir etkisi yoktur. Bu kalan miktar, örneğin spor sırasında hala görülebilir. Bu nedenle, AndroidAPS, İES olarak minimum 5saat kullanır.
* Bununla ilgili daha fazla bilgiyi [bu sayfanın](../Getting-Started/Screenshots#insulin-profile) İnsülin Profili bölümünde okuyabilirsiniz. 

### İnsülin tipi farklılıkları

* 'Hızlı Etkili', 'Ultra Hızlı' ve 'Lyumjev' için İES, kendiniz ayarlayabileceğiniz tek değişkendir ve zirve zamanı sabittir. 
* Free-Peak (serbest-zirve), hem İES'i hem de zirveye ulaşma süresini ayarlamanıza olanak tanır fakat yalnızca bu ayarların etkilerini bilen ileri düzey kullanıcılar tarafından kullanılmalıdır. 
* [İnsülin eğrisi grafiği](../Getting-Started/Screenshots#insulin-profile), farklı eğrileri anlamanıza yardımcı olur. 
* Yukarıda bir sekme olarak görüntülemek için onay kutusunu etkinleştirebilirsiniz. Diğer türlü hamburger menüsünde olacaktır.

#### Hızlı Etkili Oref

* Humalog, Novolog ve Novorapid için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 75 dakika sonra (sabit, ayarlanabilir değil)

#### Ultra Hızlı Oref

* FIASP için önerilir
* İES = en az 5.0s
* Maks. zirve = enjeksiyondan 55 dakika sonra (sabit, ayarlanabilir değil)

#### Lyumjev

* special insulin profile for Lyumjev
* İES = en az 5.0s
* Maks. peak = 45 minutes after injection (fixed, not adjustable)

#### Free Peak Oref

* With the "Free Peak 0ref" profile you can individually enter the peak time.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## BG Source

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## Pump

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana-i/RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Sensitivity Detection

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Absorption settings

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Döngü

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Open Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Closed Loop

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Objectives (learning program)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Tedaviler

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## General

### Overview

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Keep screen on

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Buttons

Define which Buttons are shown on the home screen.

* Tedaviler
* Hesap makinesi
* İnsülin
* Carbs
* CGM (opens xDrip+)
* Calibration

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Fill/Prime standard insulin amounts

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Shorten tab titles

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Status lights

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Eylemler

* Ortak özelliklere hızla erişmek için bazı butonlar.
* Ayrıntılar için [AAPS ekran görüntülerine](../Getting-Started/Screenshots#action-tab) bakın.

### Automation

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### SMS Communicator

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Konfigürasyon ayarları

Use tab for config builder instead of hamburger menu.