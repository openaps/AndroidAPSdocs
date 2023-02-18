# Otomasyon

## Otomasyon Nedir?

Aynı sıklıktaki olaylar için her zaman aynı ayarları değiştirmeniz gerekebilir. Bundan kaçınmak için, olayı yeterince iyi tanımlayıp otomatikleştirmeyi deneyerek, sizin için otomatik olarak yapmasına izin verebilirsiniz.

Örneğin KŞ'niz çok düşük olduğunda, otomatik olarak yüksek bir geçici hedefe sahip olmaya karar verebilirsiniz. Veya fitness merkezinizdeyseniz, otomatik olarak geçici bir hedef alırsınız.

Before using Automation, you should be confident with manual [temp targets](./temptarget.html) or profile switches.

İlk basit kuralınızı oluşturmadan önce otomasyonun nasıl çalıştığını gerçekten anladığınızdan emin olun. **Instead of action, let AAPS first display only a notification.** When you are sure automation is triggered at the right time, replace notification by real action.

```{image} ../images/Automation_ConditionAction_RC3.png
:alt: Otomasyon koşulu + eylem
```

## Bu nasıl kullanılır

Bir otomasyon kurmak için ona bir başlık vermeniz, en az bir koşul ve bir eylem seçmeniz gerekir.

(Automation-important-note)=
### Önemli Not

**Automation is still active when you disable loop!**

Bu nedenle, gerekirse bu durumlarda otomasyon kurallarını devre dışı bıraktığınızdan emin olun. Bunu otomasyon kuralınızın adının solundaki kutunun işaretini kaldırarak yapabilirsiniz.

```{image} ../images/Automation_ActivateDeactivate.png
:alt: Otomasyon kuralını etkinleştirin ve devre dışı bırakın
```

### Otomasyon nerede bulunur

Depending on your [settings in config builder](Config-Builder-tab-or-hamburger-menu) you will either find [Automation](Config-Builder#automation) in hamburger menu or as a tab.

### Genel

Bazı sınırlar vardır:

- The glucose value has to be between 72 and 270 mg/dl or 4 and 15 mmol/l.
- The profile percentage has to be between 70 % and 130%.
- There is a 5 min. time limit between executions (and first execution).

**Please be careful:**

- **less than -2 means: -3 and lower (-4,-10, etc)**
- **more than -2 means: -1 and higher (-1, 0, +10, etc)**

### Şart

Birkaç koşul arasından seçim yapabilirsiniz. Burada yalnızca birkaçından bahsedilmiştir, ancak çoğu kendi kendini açıklayıcı niteliktedir ve bu nedenle burada açıklanmamıştır:

- connect conditions: you can have several conditions and can link them with

  - "And"
  - "Or"
  - "Exclusive or" (which means that if one - and only one of the - conditions applies, the action(s) will happen)

- Time vs. recurring time

  - time =  single time event
  - recurring time = something that happens regularly (i.e. once a week, every working day etc.)

- location: in the config builder (Automation), you can select which location service you want to use:

  - Use passive location: AAPS only takes locations when other apps are requesting it
  - Use network location: Location of your Wifi
  - Use GPS location (Attention! Aşırı pil tüketimine neden olabilir!)

### Eylem

Bir veya daha fazla eylem seçebilirsiniz:

- start temp target

  - must be between 72 mg/dl and 270 mg/dl (4 mmol/l and 15 mmol/l)
  - works only if there is no previous temp target

- stop temp target

- notification

- profile percentage

  - must be between 70% and 130%
  - works only if the previous percentage is 100%

After adding your action, **don't forget to change the default values** to what you need by clicking in the default values.

```{image} ../images/Automation_Default_V2_5.png
:alt: Automation default vs. set values
```

(Automation-sort-automation-rules)=
### Otomasyon kurallarını sıralama

Otomasyon kurallarını sıralamak için ekranın sağ tarafındaki dört satırlı düğmeyi basılı tutun ve yukarı veya aşağı hareket ettirin.

```{image} ../images/Automation_Sort.png
:alt: Otomasyon kurallarını sıralama
```

### Otomasyon kurallarını silme

Bir otomasyon kuralını silmek için çöp kutusu simgesine tıklayın.

```{image} ../images/Automation_Delete.png
:alt: Otomasyon kuralını silme
```

(Automation-good-practice-caveats)=
## Good practice & caveats

- When you start using automation or create a new rule, first add a notification only until you are sure the rule is working well.

- Watch the rule results.

- Don't try to make conditions too easy (i.e.: IF bg > 80 mg/dl AND bg \< 180 mg/dl)

  **Doubly important if action is a profile switch!**

- Try to use Temp Targets instead of Profile Switches. Temp Targets do not reset [Autosens](Open-APS-features-autosens) back to 0.

- Make sure Profile switches are made sparingly and preferably at a last resort.

  - Profile switching renders [Autosens](Open-APS-features-autosens) useless for a min of 6 hours.

- Profile switching will not reset the profile back to your base profile

  - You have to make another rule to set this back or do it manually!
  - Increased risk of hypoglycemia if profile switch does not expire or reset back to base profile.

## Örnekler

Bunlar sadece otomasyon örnekleridir, tavsiye değildir. Gerçekte ne yaptığınızın veya neden ihtiyaç duyduğunuzun farkında olmadan onları uygulamayın.

- Switching profiles for your daily activities (like school, gym, weekend, workday...) using geolocation, wifi, time etc.
- Setting temp target for activities based on time, location, connection to a bluetooth device...
- Setting eating soon temp targets based on time, location...

### Düşük Glikoz Geçici Hedefi

```{image} ../images/Automation2.png
:alt: Otomasyon2
```

Bu, düşük glikoza sahipken otomatik olarak hipo geçici hedefi'ne geçmek isteyen biri tarafından yapılır.

### Öğle Yemeği Geçici Hedefi

```{image} ../images/Automation3.png
:alt: Otomasyon3
```

Bu örnek, hafta boyunca her gün aynı saatte işyerinde öğle yemeği yiyen biri tarafından yapılmıştır. Eğer kişi öğle yemeği vaktinde aynı lokasyonda belirli bir zaman aralığında kalıyorsa, otomasyon öğle yemeğini beklerken düşük geçici hedef (yakında yemek yeme) belirleyecektir. "Ve" bağlantısı nedeniyle, yalnızca seçilen zamanda ve seçilen yerdeyse gerçekleşir. Yani bu lokasyondan başka herhangi bir zamanda veya kişinin evde kaldığı bu saatte çalışmaz.

### Otomasyonun yanlış kullanımı

Otomasyonu yanlış kullanmadığınıza lütfen dikkat edin. Yanlış kullanım sağlığınızı tehlikeye atabilir. Yanlış kullanım örnekleri:

- Trying to override algorithm at all instead of help only (i.e. by changing profile instead of tunning basal, IC etc.)
- Setting profile to compensate food
- Setting profile without duration
- Creating one way rules (i.e. do something but don't undo it by another rule)
- Creating long term rules

## Alternatifler

İleri düzey kullanıcılar için, IFTTT veya Automate adlı üçüncü taraf Android uygulamasını kullanarak görevleri otomatikleştirmenin başka olanakları da vardır. Some examples can be found [here](./automationwithapp.html).
