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

- **Original Skin** and **Buttons are always displayed on bottom of screen** are identical
- **Large Display** has an increased size of all graphs compared to other skins

##### Yatay oryantasyon

- Using **Original Skin** and **Large Display**, you have to scroll down to see buttons at the bottom of the screen

- **Large Display** has an increased size of all graphs compared to other skins

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

- In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

  ```{image} ../images/Pref2020_OV_StatusLights2.png
  :alt: Preferences > Status Lights
  ```

(Preferences-advanced-settings-overview)=
### Gelişmiş ayarlar

```{image} ../images/Pref2021_OV_Adv.png
:alt: Preferences > Status Lights
```

#### Bolus sihirbazı sonucunun bu kadarını ilet

- General setting to deliver only part of bolus wizard result.
- Only the set percentage (must be between 10 and 100) of the calculated bolus is delivered when using bolus wizard.
- The percentage is shown in bolus wizard.

#### Bolus danışmanı

- If you run [Bolus wizard](Screenshots-bolus-wizard) and your glucose value is above 10 mmol (180 mg/dl) a correction bolus will be offered.

- If correction bolus is accepted **no carbs** will be recorded.

- An alarm will be started when glucose value is in good level to start eating.

- You have to enter [Bolus wizard](Screenshots-bolus-wizard) again and enter the amount of carbs you want to eat.

  ```{image} ../images/Home2021_BolusWizard_CorrectionOffer.png
  :alt: Bolus danışmanı mesajı
  ```

(Preferences-superbolus)=
#### Süperbolus

- Option to enable superbolus in bolus wizard.
- [Superbolus](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/) is a concept to "borrow" some insulin from basal rate in the next two hours to prevent spikes.

## Tedavi güvenliği

### Patient type

- Safety limits are set based on the age you select in this setting.
- If you start hitting these hard limits (like max bolus) it's time to move one step up.
- It's a bad idea to select higher than real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example).
- If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on [this page](../Usage/Open-APS-features.md).

### Max allowed bolus \[U\]

- Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of bolus insulin that you are ever likely to need for a meal or correction dose.
- This restriction is also applied to the results of the bolus calculator.

### Max allowed carbs \[g\]

- Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
- This setting exists as a safety limit to prevent the delivery of a massive bolus due to accidental input or user error.
- It is recommended to set this to a sensible amount that corresponds roughly to the maximum amount of carbs that you are ever likely to need for a meal.

## Döngü

(Preferences-aps-mode)=
### APS modu

- Toggle between open and closed looping as well as low glucose suspend (LGS)
- **Open looping** means TBR suggestions are made based on your data and appear as a notification. Manuel onaydan sonra, insülin dozlama komutu pompaya aktarılacaktır. Yalnızca sanal pompa kullanıyorsanız, manuel olarak girmeniz gerekir.
- **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.
- **Low glucose suspend** is similar to closed looping, but overrides the maxIOB setting to zero. This means that if blood glucose is dropping it can reduce the basal rate, but if blood glucose is rising then it will only increase the basal rate if the basal IOB is negative (e.g. from a previous Low Glucose Suspend).

(Preferences-minimal-request-change)=
### Minimal request change \[%\]

- Açık döngü kullanırken, AAPS'in bazal hızı ayarlamanızı önerdiği her seferde bildirim alırsınız.
- To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
- Bu, bir bildirimi tetiklemek için gereken göreli değişikliği tanımlar.

(Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb)=
## Gelişmiş Yemek Asistanı (AMA) veya Süper Mikro Bolus (SMB)

Depending on your settings in [config builder](../Configuration/Config-Builder.md) you can choose between two algorithms:

- [Advanced meal assist (OpenAPS AMA)](Open-APS-features-advanced-meal-assist-ama) - state of the algorithm in 2017
- [Super Micro Bolus (OpenAPS SMB)](Open-APS-features-super-micro-bolus-smb) - most recent algorithm for advanced users

### OpenAPS SMB ayarları

- Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably.
- More details about the settings and Autosens can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

#### Maks Ü/s geçici Bazal ayarlanabilir

- Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate.
- The value is measured in units per hour (U/h).
- It is advised to set this to something sensible. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**.
- For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
- See also [detailed feature description](Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

#### Maximum basal IOB OpenAPS can deliver \[U\]

- Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile.
- Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.
- This value **does not consider bolus IOB**, only basal.
- This value is calculated and monitored independently of your normal basal rate. Normal bazal oranınızın üzerindeki ek bazal insülin dikkate alınır.

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. Bu, AAPS'in herhangi bir ek bazal insülin vermesini engeller. Bu süre zarfında AAPS, hipoglisemiyi önlemeye yardımcı olmak için bazal insülininizi sınırlandırabilir veya kapatabilir. Bu adım, aşağıdaki maddeleri anlamak ve gözlemlemek için önemlidir:

- Have a period of time to safely get used to the AAPS system and monitor how it works.
- Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
- See how AAPS limits your basal insulin to prevent hypoglycaemia.

Kendinizi rahat hissettiğinizde, Maks Bazal AİNS değerini yükselterek sistemin size ek bazal insülin vermeye başlamasına izin verebilirsiniz. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. Örneğin, profilinizdeki en yüksek bazal oran 0,5 Ü/s ise, bunu 3 ile çarparak 1,5 Ü/s değerini elde edebilirsiniz.

- You can start conservatively with this value and increase it slowly over time.
- These are guidelines only; everyone's body is different. Burada önerilenden daha fazlasına veya daha azına ihtiyacınız olduğunu fark edebilirsiniz, ancak her zaman ihtiyatlı başlayın ve yavaş yavaş ayarlayın.

**Note: As a safety feature, Max Basal IOB is hard-limited to 7u.**

#### Otoduyarlılık

- [Autosens](Open-APS-features-autosens) looks at blood glucose deviations (positive/negative/neutral).
- It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
- If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

#### Gelişmiş ayarlar (OpenAPS AMA)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

(Preferences-openaps-smb-settings)=
### OpenAPS SMB ayarları

- In contrast to AMA, [SMB](Open-APS-features-super-micro-bolus-smb) does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.

- You must have started [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) to use SMB.

- The first three settings are explained [above](Preferences-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal).

- Details on the different enable options are described in [OpenAPS feature section](Open-APS-features-enable-smb).

- *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. Bu değer, sistemin SMB'yi çok sık verilmesini engeller (örneğin, bir geçici hedefin ayarlanması durumunda). Sonuçları tam olarak bilmiyorsanız bu ayarı değiştirmemelisiniz.

- If 'Sensitivity raises target' or 'Resistance lowers target' is enabled [Autosens](Open-APS-features-autosens) will modify your glucose target according to your blood glucose deviations.

- If target is modified it will be displayed with a green background on your home screen.

  ```{image} ../images/Home2020_DynamicTargetAdjustment.png
  :alt: Hedef otoduyarlılık tarafından değiştirilmiş
  ```

(Preferences-carb-required-notification)=
#### Karbonhidrat gerekli bildirimi

- This feature is only available if SMB algorithm is selected.

- Eating of additional carbs will be suggested when the reference design detects that it requires carbs.

- In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.

- Additionally the required carbs will be displayed in the COB section on your home screen.

- A threshold can be defined - minimum amount of carbs needed to trigger a notification.

- İstenirse karbonhidrat ihtiyacı bildirimleri Nightscout'a iletilebilir, bu durumda bir anons gösterilir ve yayınlanır.

  ```{image} ../images/Pref2020_CarbsRequired.png
  :alt: Giriş ekranında karb gerekli gösterimi
  ```

#### Gelişmiş ayarlar (OpenAPS SMB)

- Normally you do not have to change the settings in this dialogue!
- If you want to change them anyway make sure to read about details in [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#) and to understand what you are doing.

## Emilim ayarları

```{image} ../images/Pref2020_Absorption.png
:alt: Emilim ayarları
```

### min_5m_carbimpact

- The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed.

- The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB.

- At times when carb absorption can’t be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Temel olarak bir ön güvenliktir.

- To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc.

- Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Büyük değişiklik=çok karbonhidrat vs.

- The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact).

- Standard value for AMA is 5, for SMB it's 8.

- The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  ```{image} ../images/Pref2020_min_5m_carbimpact.png
  :alt: AKRB grafiği
  ```

### Maksimum besin emilim süresi

- If you often eat high fat or protein meals you will need to increase your meal absorption time.

### Gelişmiş ayarlar - otoduyarlılık oranı

- Define min. and max. [autosens](Open-APS-features-autosens) ratio.
- Normally standard values (max. 1.2 and min. 0.7) should not be changed.

## Pompa Ayarları

The options here will vary depending on which pump driver you have selected in [Config Builder](Config-Builder-pump).  Pompanızı pompayla ilgili talimatlara göre eşleştirin ve ayarlayın:

- [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md)
- [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md)
- [Accu Chek Combo Pompa](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu Chek Insight Pump](../Configuration/Accu-Chek-Insight-Pump.md)
- [Medtronic Pompa](../Configuration/MedtronicPump.md)

Döngüyü açmak için AndroidAPS kullanıyorsanız, Konfigürasyon ayarlarında Sanal Pompa'yı seçtiğinizden emin olun.

(Preferences-nsclient)=
## NSClient

```{image} ../images/Pref2020_NSClient.png
:alt: NSClient
```

- Set your *Nightscout URL* (i.e. <https://yourwebsitename.herokuapp.com>) and the *API secret* (a 12 character password recorded in your Heroku variables).
- This enables data to be read and written between both the Nightscout website and AndroidAPS.
- Double check for typos here if you are stuck in Objective 1.
- **Make sure that the URL is WITHOUT /api/v1/ at the end.**
- *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS).
- If activated changes in [local profile](Config-Builder-local-profile) are uploaded to your Nightscout site.

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
