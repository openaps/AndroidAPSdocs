# Otoayar eklentisi nasıl kullanılır?

Otoayar algoritması hakkında daha fazla ayrıntıyı [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)nda bulabilirsiniz.

Otoayar eklentisi, AAPS içindeki OpenAPS otoayar algoritmasının uygulanmasıdır.

**Şu anda otoayar eklentisi yalnızca mühendislik modundaki geliştirici sürümünde mevcuttur.**

## Otoayar kullanıcı arabirimi

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_1b.png)

- Ayarlamak istediğiniz giriş profilini Profil açılır menüsünden seçebilirsiniz (varsayılan olarak mevcut etkin profiliniz seçilidir)
  - Not: Her yeni profil seçiminde, önceki sonuçlar kaldırılacak ve Gün Ayar parametreleri varsayılan değere ayarlanacaktır.
- Ayar günleri, profilinizi ayarlamak için hesaplamada kullanılan gün sayısını içermektedir. Minimum değer 1 gün ve maksimum değer 30 gündür. Doğru yinelemeli ve sorunsuz sonuçlar elde etmek için bu sayı çok küçük olmamalıdır (her hesaplama için 7 günden fazla)
  - Not: Ayar günleri parametresini her değiştirdiğinizde, önceki sonuçlar kaldırılacaktır
- Son Çalıştırma, en son geçerli hesaplamanızı kurtaran bir bağlantıdır. Otoayarı o gün başlatmadıysanız veya yukarıdaki hesaplama parametresinin değiştirilmesiyle önceki sonuçlar kaldırıldıysa, en son başarılı çalıştırmanın parametrelerini ve sonuçlarını kurtarabilirsiniz.
- Uyarı size örneğin seçilen profil hakkında bazı bilgiler gösterir (birkaç Kİ değeriniz veya birkaç İDF değeriniz varsa)
  - Not: Otomatik ayar hesaplaması yalnızca tek bir Kİ ve tek bir İDF değeriyle çalışır. Şu anda bir sirkadiyen Kİ veya sirkadiyen İDF'yi ayarlamak için mevcut bir OtoAyar algoritması yoktur. Giriş profilinizin birkaç değeri varsa, profilinizi ayarlamak için dikkate alınan ortalama değeri uyarı bölümünde görebilirsiniz.
- Giriş Profilini Kontrol Et düğmesi, profilinizi (Ünite, İES, Kİ, İDF, bazal ve hedef) hızlı bir şekilde doğrulamanıza izin vermek için Profil Görüntüleyiciyi açar.
  - Not: OtoAyar, yalnızca Kİ (tek değer), İDF (tek değer) ve bazal (sirkadiyen varyasyonlu) ayarlarınızı yapacaktır. Üniteler, İES ve hedef, çıktı profilinde değişmeden kalacaktır.

- "OtoAyarı Çalıştır", seçili profil ve ayarlama gün sayısı ile OtoAyar hesaplamasını başlatır
  - Not: Otomatik ayar hesaplaması uzun sürebilir. Başlatıldıktan sonra, başka bir görünüme (ev, ...) geçebilir ve sonuçları görmek için daha sonra otoayar eklentisinde geri dönebilirsiniz

![Otoayar Çalışmayı başlat](../images/Autotune/Autotune_2b.png)

- Ardından çalıştırma sırasında aşağıda ara sonuçları göreceksiniz

  - Not: Çalıştırma sırasında ayarlar kilitlenir, bu nedenle artık seçilen giriş profilini veya gün sayısını değiştiremezsiniz. Diğer parametrelerle başka bir çalıştırma başlatmak istiyorsanız mevcut hesaplamanın bitmesini beklemeniz gerekecektir.

  ![Otoayar çalışıyor](../images/Autotune/Autotune_3b.png)

- OtoAyar hesaplaması bittiğinde, sonucu (Ayarlanmış profil) ve aşağıda dört buton göreceksiniz.

![Otoayar Sonucu](../images/Autotune/Autotune_4b.png)

- Girdi profilini ("Profil" sütunu), çıktı profilini ("Ayar" sütunu) ve her değer için varyasyon yüzdesini ("%" Sütunu) her zaman karşılaştırmak önemlidir.

- Bazal oranlar için "kayıp gün" sayısına da sahipsiniz. Otoayarın bu dönemde bazal oranı ayarlamak için "Bazal" olarak kategorize edilmiş yeterli veriye sahip olmadığı durumlarda (örneğin, her yemekten sonra karbonhidrat emilimi durumunda) eksik günleriniz olacaktır. Bu sayı, özellikle bazal önemli olduğunda (örneğin gece veya öğleden sonra) mümkün olduğunca düşük olmalıdır.

- "Profilleri karşılaştır" butonu, profil karşılaştırıcı görünümünü açar. Giriş profili mavi ve çıkış profili ("Ayarlanmış" olarak adlandırılır) kırmızıdır.

  - Not: Aşağıdaki örnekte, giriş profilinin Kİ ve İDF için sirkadiyen değişimi vardır, ancak hesaplanan çıktı profilinin tek bir değeri vardır. Bir sirkadiyen çıktı profili almanız sizin için önemliyse aşağıdaki [Sirkadiyen Kİ veya İDF profiline](#circadian-ic-or-isf-profile) bakın.

  ![Otoayar profil karşılaştırma](../images/Autotune/Autotune_5.png)

- Sonuçlara güveniyorsanız, (giriş profili ile çıktı profili arasında düşük yüzdeli farklılık) "Profili etkinleştir" düğmesine tıklayabilir ve ardından doğrulamak için Tamam'a tıklayabilirsiniz.

  - Ayarlanmış profili etkinleştirin, Yerel profil eklentinizde otomatik olarak yeni bir "Ayarlanmış" profil oluşturacaktır.
  - Yerel profil eklentinizde zaten "Ayarlanmış" (Tuned) adlı bir profiliniz varsa, bu profil aktivasyondan önce hesaplanan Otoayar profiliyle güncellenecektir.

  ![Otoayar profil etkinleştirme](../images/Autotune/Autotune_6.png)

- Ayarlanmış profilin gerektiğini düşünüyorsanız (örneğin, bazı varyasyonların çok önemli olduğunu düşünüyorsanız), "Yerel profile kopyala" düğmesine tıklayabilirsiniz.

  - Yerel profil eklentisinde "Ayarlanmış" ön ekine ve çalıştırmanın tarih ve saatine sahip yeni bir profil oluşturulacak

![Otoayar yerel profile kopyalama](../images/Autotune/Autotune_7.png)

- Ardından, Ayarlanmış profilini düzenlemek için yerel profili seçebilirsiniz (Yerel profil eklentisini açtığınızda varsayılan olarak seçilecektir)

  - yerel profildeki değerler ancak kullanıcı arabiriminde pompa kapasitenize yuvarlanır

  ![Otoayar yerel profil güncelleme](../images/Autotune/Autotune_8.png)

- Giriş profilinizi Otoayar sonuçlarıyla değiştirmek isterseniz, "Giriş profilini güncelle" düğmesine tıklayın ve açılan pencereyi Tamam ile onaylayın

  - Not: "Giriş profilini güncelle"den sonra "Profili etkinleştir"e tıklarsanız, varsayılan "Ayarlanmış" profili değil, güncellenmiş profilinizi etkinleştirirsiniz.

  ![Otoayar giriş profilini güncelleme](../images/Autotune/Autotune_9.png)

- Giriş profilinizi güncellediyseniz, "Giriş profilini güncelle" butonunun yerini "Giriş profilini geri al" butonu alır (aşağıdaki ekran görüntüsüne bakın). Bu şekilde, Yerel profil eklentisindeki mevcut giriş profilinizin zaten son çalıştırmanın sonucunu içerip içermediğini hemen görebilirsiniz. Ayrıca, bu buton ile otoayar sonucu olmadan giriş profilinizi kurtarma olanağına da sahipsiniz.

  ![Otoayar giriş profilini güncelleme](../images/Autotune/Autotune_10.png)



## OtoAyar ayarları

### Otoayar eklenti ayarları

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_11.png)

- Otomasyon ile Profil değiştirme (varsayılan Kapalı): aşağıdaki [Otoayarı bir otomasyon kuralıyla çalıştırma](#run-autotune-with-an-automation-rule) bölümüne bakın. Bu ayarı Açık olarak değiştirirseniz, giriş profili Ayarlanmış profil tarafından otomatik olarak güncellenecek ve etkinleştirilecektir.
  - **Dikkatli Olun, Ayarlanmış profilin güncellenmesi ve etkinleştirilmesinden sonra döngünüzü iyileştirdiğine güvenmeli ve takip eden birkaç gün boyunca bunu doğrulamalısınız.**

- UAM'ı bazal olarak kategorize et (varsayılan Açık): Bu ayar, herhangi bir karbonhidrat girmeden AndroidAPS kullanan kullanıcılar içindir (Tam UAM). (Kapalı olduğunda) UAM'ın bazal olarak kategorize edilmesini önleyecektir.
  - Not: Bir gün boyunca tespit edilen en az bir saatlik karbonhidrat emiliminiz varsa, bu ayar ne olursa olsun (Açık veya Kapalı) "UAM" olarak sınıflandırılan tüm veriler bazal olarak kategorize edilir.
- Veri gün sayısı (varsayılan 5): Bu ayar ile varsayılan değer tanımlayabilirsiniz. Otoayar eklentisinde her yeni profil seçtiğinizde, Ayar günleri parametresi bu varsayılan değerle değiştirilecektir.
- Ortalama sonucu sirkadiyen Kİ/İDF olarak uygulayın (varsayılan Kapalı): aşağıdaki [Sirkadiyen Kİ veya İDF profiline](#circadian-ic-or-isf-profile) bakın.

### Diğer ayarlar

- Otoayar, varyasyonu sınırlandırmak için Maks. otoduyarlılık oranı ve Min. otoduyarlılık oranı da kullanır. Bu değerleri; Konfigürasyon ayarları > Hassasiyet algılama eklentisi > Ayarlar > Gelişmiş Ayarlarda görebilir ve ayarlayabilirsiniz.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_12.png)



## Gelişmiş özellik

### Sirkadiyen Kİ veya İDF profili

- Profilinizde önemli Kİ ve/veya İDF varyasyonlarınız varsa ve sirkadiyen zamanınıza ve varyasyonunuza tamamen güveniyorsanız, "Sirkadiyen İK/İDF'de ortalama sonucu uygula" ayarını yapabilirsiniz.

  - Otoayar hesaplamasının her zaman tek bir değerle yapılacağını ve sirkadiyen varyasyonun Otoayar tarafından ayarlanmayacağına dikkat edin. Bu ayar yalnızca sirkadiyen değerlerinizde Kİ ve/veya İDF için hesaplanan ortalama değişimi uygular.

- Ortalama varyasyonu uygula Kapalı (solda) ve Açık (sağda) ile Ayarlanmış profilin altındaki ekran görüntüsüne bakın

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_13.png)



### Haftanın belirli günlerine ayarlama

- "Çalışma günleri" parametresinin sağındaki göz ile onay kutusuna tıklarsanız, gün seçimini göreceksiniz. Haftanın hangi gününün Otoayar hesaplamasına dahil edileceğini belirleyebilirsiniz (aşağıdaki ekran görüntüsünde Cumartesi ve Pazar günleri otoayar hesaplamasından çıkarılmış "çalışma günleri" örneğini görebilirsiniz)
  - Otoayar hesaplamasına dahil edilen gün sayısı Ayar gün sayısından az ise Ayar günleri seçicinin sağında kaç gün dahil edileceğini göreceksiniz (aşağıdaki örnekte 10 gün)
  - Bu ayar, ancak kalan gün sayısı küçük değilse iyi sonuçlar verir (örneğin, yalnızca Pazar ve Cumartesi seçili olarak hafta sonu günleri için belirli bir profili Ayarladıysanız, Otomatik Ayar hesaplamasına 6 veya 8 gün dahil etmek için en az 21 veya 28 Ayar günü seçmelisiniz)

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_14b.png)

- OtoAyar hesaplaması sırasında, hesaplamaların ilerleyişini görebilirsiniz (Aşağıdaki örnekte "Kısmi sonuç 3 / 10 gün ayarlandı")

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_15b.png)

## Run Autotune with an automation rule

First step is to define correct trigger for an automation rule with Autotune:

Not: Bir otomasyon kuralının nasıl ayarlanacağı hakkında daha fazla bilgi için [buraya](./Automation.rst) bakın.

- You should select Recurring time trigger: only run Autotune once per day, and autotune is designed to be runned daily (each new run you shift one day later and quickly profile modification should be tiny)

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_16.png)

- It's better at the beginning to run Autotune during the day to be able to check results. If you want to run Autotune during the night, you have to select in the trigger 4AM or later to include current day in next Autotune Calculation.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_17.png)

- Then you can select "Run Autotune" Action in the list

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_18.png)

- You can then select Autotune Action to adjust parameters for your run. Default parameters are "Active Profile", default Tune days value defined in Autotune Plugin preferences, and All days are selected.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_19b.png)

- After a few days, if you fully trust Autotune results and percentage of modification is low, you can modify [Autotune settings](#autotune-plugin-settings) "Automation Switch Profile" to enabled to automatically update and activate profile tuned after calculation.

Not: Profilleri haftanın belirli günleri için otomatik olarak ayarlamak istiyorsanız (örneğin, "Hafta sonu günleri" için bir profil ve "Çalışma günleri" için başka bir profil) her profil için bir kural oluşturun. OtoAyar eyleminde tetiklemede aynı günleri seçin ve ayar günlerinin yeterince yüksek olduğundan emin olmak için en az 6 veya 8 gün ve tetiklemede saat 4:00'ten sonraki zaman seçilmelidir...

- Aşağıda, 14 Ayar günü seçili olarak tüm "Çalışma günleri"nde "profilim"i ayarlamak için bir kural örneğine bakabilirsiniz (yani, otomatik ayar hesaplamasına yalnızca 10 gün dahildir).

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_20b.png)



## Tips and trick's

Autotune works with information existing in your database, so if you just installed AAPS on a new phone, you will have to wait several days before being able to launch Autotune with enough days to get relevant results;

Autotune is just an help, it's important to regularly check if you agree with calculated profile. If you have any doubt, change Autotune settings (for example the number of days) or copy results in local profile and adjust profile before using it.

Always use Autotune several days manually to check results before applyling them. And it's only when you fully trust Autotune results, and when variation becomes tiny between previous profile and calculated profile than you start to use Automation (Never before)

- Autotune can work very well for some users and not for others, so **If you don't trust Autotune result, don't use it**

It's also important to analyse Autotune results to understand (or try to understand) why Autotune propose these modifications

- you can have a whole increase or decrease of the strength of your profile (for example increase of total basal associated to decrease of ISF and IC values). it could be associated to several following days with autosens correction above 100% (more agressivity required) or below 100% (you are more sensitive)
- Sometimes Autotune propose a different balance between basal rates and IC/ISF (for ex lower basal and more aggressive IC/ISF)

We advise to not use Autotune in the following cases:

- You don't enter all your carbs
  - If you don't enter carbs correction for an hypoglycemia, Autotune will see an unexcepted increase of your BG value and will increase your basal rates the ' hours earlier, it could be the opposite of what you need to avoid hypo, especially if it's in the middle of the night. That's why it's important to enter all carabs especially correction for hypo.
- You have a lot of period with UAM detected during the day.
  - Do you have entered all your carbs and correctly estimated your Carbs ?
  - All UAM periods (except if you enter no carbs during a day and categorized UAM as basal is disabled), all your UAM periods will be categorized as basal, this can increase a lot your basal (much more than necessary)

- Karbonhidrat emiliminiz çok yavaş: Karbonhidrat emiliminizin çoğu min_5m_carbimpact parametresi ile hesaplanıyorsa (bu periyotları AKRB eğrisinin üst kısmında küçük bir turuncu nokta ile görebilirsiniz), AKRB hesaplaması yanlış olabilir ve yanlış sonuçlara yol açabilir.
  - Spor yapıyorsanız, genellikle daha hassassınız ve kan şekeriniz çok fazla yükselmez, bu nedenle egzersiz sırasında veya sonrasında, yavaş karbonhidratlı bazı dönemler görmek normaldir. Ancak çok sık beklenmedik yavaş karbonhidrat emiliminiz varsa, o zaman bir profil ayarlamasına (daha yüksek Kİ değeri) veya biraz yüksek bir min_5m_carbimpact'e ihtiyacınız olabilir.
- "Çok kötü günler" geçiriyorsunuz, örneğin, aralığın içine inebilmek için yüksek miktarda insülinle birkaç saat hiperglisemide kalmışsınız veya bir sensör değişikliğinden sonra uzun süre yanlış kan şekeri değerleriniz olmuş.
- Değişiklik yüzdesi çok önemliyse
  - Daha sorunsuz sonuçlar almak için gün sayısını artırmayı deneyebilirsiniz.