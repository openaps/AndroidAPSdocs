# Görevleri tamamlama

**AAPS**'te, kullanıcının temel açık döngüden hibrit kapalı döngüye ve **AAPS**'in tüm işlevlerine adım adım ilerlemesine yardım eden ve tamamlanması gereken bir dizi **Görev** vardır. **Görevler**'i tamamlamanın amacı şunlardan emin olmaktır:

* **AAPS** kurulumunuzda her şeyi doğru yapılandırdınız;
* **AAPS**'in temel özelliklerini öğrendiniz ve
* **AAPS**'i kullanırken güven duymanıza yardım etmek için sisteminizin neler yapabildiğini temel düzeyde anladınız.

**AAPS** ilk kez kurulduğunda, bir sonrakine geçmeden önce her görevin tamamlanması gerekir. Her **Görev**'de ilerledikçe yeni özellikler adım adım açılır.

**1. - 8. Görevler**, akıllı telefonunuzda **AAPS**'i yapılandırmaktan “temel” hibrit kapalı döngüye kadar size yol gösterir. Bunun tamamlanması yaklaşık 6 hafta sürer. **5. Görev**'e kadar sanal pompa kullanarak ilerleyebilirsiniz (bu sırada insülini başka bir yöntemle verirsiniz). **9. ve 10. Görevler**, diyabetinizi daha iyi kontrol etmek amacıyla **AAPS**'in daha ileri özelliklerini denemek için hazırlanmıştır. Bunların tamamlanması 3 aya kadar, belki daha uzun sürer. Tahmini süre dağılımı hakkında daha fazla ayrıntıyı burada bulabilirsiniz: [Ne kadar sürer?](#preparing-how-long-will-it-take)

**Görevler**'de ilerlemenin yanı sıra, gerekirse ilerlemenizi silebilir ve [daha önceki bir göreve geri dönebilirsiniz](#CompletingTheObjectives-go-back-in-objectives).

## Ayarlarınızı yedekleyin

```{admonition} Note
:class: note

Her **Görev**'i tamamladıktan sonra **AAPS** ayarlarınızı dışa aktarmanız önerilir!
```

**AAPS**'te yaptığınız ilerlemeyi kaybetmemek için her görevi tamamladıktan sonra [ayarlarınızı dışa aktarmanız](../Maintenance/ExportImportSettings.md) şiddetle önerilir. Bu dışa aktarma işlemi bir **ayar dosyası** (.json) oluşturur. Bu dosyanın bir veya daha fazla güvenli yerde yedeklenmesi gerekir (örn. Google Drive, sabit disk, e-posta eki _vb._). Böylece **AAPS**'te yaptığınız tüm ilerleme kaydedilmiş olur. Telefonunuz kaybolursa veya ilerlemenizi yanlışlıkla silerseniz, yakın tarihli bir ayar dosyasını içe aktararak json dosyasını **AAPS**'e yeniden yükleyebilirsiniz. Herhangi bir nedenle (telefonun yükseltilmesi/kaybolması/bozulması _vb._) yeni bir **AAPS** akıllı telefonu gerekirse de yedek bir **ayar dosyası** gerekir.

**Ayar** dosyası yalnızca **Görevler**'deki ilerlemenizi değil, **maksimum bolus** _vb._ gibi tüm **AAPS** ayarlarınızı da kaydeder.

Ayarlarınızın yedeği yoksa ve **AAPS** akıllı telefonunuza bir şey olursa, **Görevler**'e baştan yeniden başlamanız gerekir. **Görevler**'de ilerlemek zaman alır. Örneğin akıllı telefonunuzu kaybettiğiniz için hepsini yeniden tamamlamak zorunda kalmak, en iyisi kaçınılması gereken bir durumdur.

(objectives-objective1)=
## 1. Görev: Görselleştirme ve izlemeyi kurma, bazalları ve oranları analiz etme

**1. Görev**, kullanıcının **AAPS**'teki temel teknik kurulumunu yapmasını ister. Bu adım tamamlanmadan ilerleme kaydedilemez.

- Doğru CGM/FGM'yi [Konfigürasyon → KŞ kaynağı](#Config-Builder-bg-source) içinde seçin. Daha fazla bilgi için [KŞ kaynağı](../Getting-Started/CompatiblesCgms.md) sayfasına bakın.
- Pompanızın **AAPS** ile iletişim kurabilmesi için doğru pompayı [Konfigürasyon → Pompa](#Config-Builder-pump) içinde seçin. Döngü için **AAPS** sürücüsü olmayan bir pompa modeli kullanıyorsanız veya ilk **Görevler**'de insülini başka bir sistemle verirken ilerlemek istiyorsanız **sanal pompa**'yı seçin. Daha fazla bilgi için [insülin pompası](../Getting-Started/CompatiblePumps.md) sayfasına bakın.
- Nightscout kullanıyorsanız:
  - **Nightscout**'un **AAPS** verilerini alıp gösterebildiğinden emin olmak için [Nightscout](../SettingUpAaps/Nightscout.md) sayfasındaki talimatları izleyin.
  - **NSClientV3**'teki URL'nin sonunda **"/api/v1/" _olmaması_** gerektiğine dikkat edin - bkz. [Ayarlar → NSClientV3](#Preferences-nsclient).
- Tidepool kullanıyorsanız:
  - **Tidepool**'un **AAPS** verilerini alıp gösterebildiğinden emin olmak için [Tidepool](../SettingUpAaps/Tidepool.md) sayfasındaki talimatları izleyin.

Not: ***AAPS**'in sensörü tanıması için bir sonraki sensör glikoz değerinin gelmesini beklemeniz gerekebilir.*

(objectives-objective2)=
## 2. Görev: AAPS'i kontrol etmeyi öğrenme

**2. Görev**, aşağıdaki ekran görüntüsünde gösterildiği gibi birkaç ‘işin’ yapılmasını ister. Her iş kendi durumunu gösterir (**1**): **AAPS** işlemi kaydeder kaydetmez turuncu "**Henüz tamamlanmadı**" yazısı "**Tamamlandı, tebrikler!**" olarak değişir. Belirli bir işlemi henüz bilmiyorsanız, ilgili dokümantasyonu açmak için bir işin altındaki **İpucu**'na (**2**) dokunun.

![2. Görev ekran görüntüsü](../images/Objective2_V2_5.png)

**2. Görev**'i tamamlamak için yapılacak işler şunlardır:
- **Profil**'inizi 10 dakika süreyle %90'a ayarlayın.
  - _İpucu_: **Profil** ekranını açmak için ana ekranda profil adınıza dokunun, ardından **Etkinleştir** (▶) düğmesini kullanın ve yüzdeyi ve süreyi ayarlayın. Daha fazla bilgi: [Profil değişimi ve profil yüzdesi](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Not_: **AAPS**, 0,05 Ü/sa altındaki bazal oranları kabul etmez. **Profil**'iniz 0,05 Ü/sa veya daha düşük oranlar içeriyorsa, bu işi tamamlamadan önce daha yüksek bazal oranları olan geçici bir **Profil** oluşturmanız gerekir. Bu işi tamamladıktan sonra normal **Profil**'inize geri dönün.
- **AAPS**'te 1 saat süreyle [pompanızın bağlantısını keserek](#AapsScreens-loop-status) "duş almayı" taklit edin.
  - _İpucu_: Döngü iletişim kutusunu açmak için ana ekrandaki döngü simgesine basın, ardından **Pompa bağlantısını kes** altında bir süre seçin.
- "Duş alma"yı pompanızı yeniden bağlayarak bitirin.
  - _İpucu_: Döngü iletişim kutusunu yeniden açmak için "bağlantı kesildi" simgesine basın ve **Pompayı tekrar bağla**'yı seçin.
- 10 dakika süreli özel bir [**Geçici Hedef**](../DailyLifeWithAaps/TempTargets.md) ayarlayın.
  - _İpucu_: Geçici hedef ekranını açmak için ana ekrandaki hedef aralığına basın.
- **Döngü** eklentisinin içeriğini görüntüleyin.
  - _İpucu_: **Konfigürasyon → Döngü**'yü açın ve "**Eklentiyi aç**"a dokunun.
- Daha uzun veya daha kısa zaman aralıklarına bakmak için KŞ grafiğinde kaydırma veya yakınlaştırma kullanın.


(objectives-objective3)=
## Görev 3: Bilginizi kanıtlayın

**3. Görev**, kullanıcının **AAPS** bilgisini sınamak için hazırlanmış çoktan seçmeli bir sınavı geçmesini ister.

Bazı kullanıcılar **3. Görev**'i tamamlanması en zor görev olarak görür. Lütfen soruları yanıtlarken **AAPS** dokümantasyonunu da okuyun. **AAPS** dokümantasyonunu araştırdıktan sonra gerçekten takıldıysanız, lütfen [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) veya [Discord](https://discord.gg/4fQUWHZ4Mw) grubunda "Objective 3" diye arayın (çünkü sorunuz büyük olasılıkla daha önce sorulmuş ve grup tarafından yanıtlanmıştır). Bu gruplar size dostça ipuçları verebilir veya sizi **AAPS** dokümantasyonunun ilgili bölümüne yönlendirebilir.

Bu arada:
- Açık Döngü'deyken sizden istenen bildirim / karar (geçici bazal oranları) sayısını azaltmak için **Profil**'inizde geniş bir hedef aralığı ayarlayın, _örn._ 90 - 150 mg/dL veya 5,0 - 8,5 mmol/L.
- Geceleri üst sınırı daha geniş ayarlamak, hatta Açık Döngü'yü kapatmak isteyebilirsiniz.

**3. Görev**'e devam etmek için bir soru satırına dokunarak soruyu açın. Lütfen her soruyu dikkatle okuyun ve yanıtınızı (yanıtlarınızı) seçin.

Her soru için birden fazla doğru yanıt olabilir! Yanlış bir yanıt seçilirse, soru 1 saat boyunca kilitlenir; bu süreden sonra geri dönüp soruyu yeniden yanıtlayabilirsiniz. Bir sonraki denemenizde yanıtların sırası değişmiş olabilir; bunun amacı yanıtları dikkatle okumanızı ve her yanıtın doğru olup olmadığını gerçekten anlamanızı sağlamaktır.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
Zaman zaman **AAPS**'e yeni özellikler eklenir. Bu da **Görevler**'e, özellikle **3. Görev**'e yeni bir soru eklenmesini gerektirebilir. Bu nedenle **3. Görev**'e eklenen her yeni soru “tamamlanmadı” olarak işaretlenir, çünkü **AAPS** bu soruyu yanıtlamanızı ister. Endişelenmeyin: her **Görev** bağımsız olduğu için, diğer **Görevler** tamamlanmış kaldığı sürece **AAPS'in mevcut işlevlerini kaybetmezsiniz**.
```

## 4. Görev: Açık döngüye başlama

**4. Görev**'in amacı, **AAPS**'in kullanıcının bazal oranını glikoz değerlerine göre ne sıklıkla değerlendirdiğini ve geçici bazal oran ayarlamaları önerdiğini görmektir. Bu **Görev**'in bir parçası olarak açık döngüyü ilk kez etkinleştireceksiniz, önerilen 20 geçici bazal oran değişikliğini kabul edeceksiniz ve gerekirse bunları pompanızda elle uygulayacaksınız. Ayrıca [**Geçici Hedefler**](../DailyLifeWithAaps/TempTargets.md)'in etkisini gözlemleyeceksiniz. **AAPS**'te geçici bazal oran değişikliği ayarlamayı henüz bilmiyorsanız, **Yönet** panelindeki pompa işlemlerine bakın ([Eylemler sekmesi nereye gitti?](#screens-action-tab)).

Bu görevi tamamlamak için en kısa süre: **7 gün**. Bu zorunlu bir bekleme süresidir. Tüm bazal oran değişiklikleri zaten uygulanmış olsa bile bir sonraki **Görev**'e geçmek mümkün değildir.

- Açık Döngü'ye geçmek için ana ekrandaki [Döngü simgesine](#AapsScreens-loop-status) basın ve çalışma modu olarak **Açık Döngü**'yü seçin.
- 7 gün içinde en az 20 geçici bazal oran önerisini elle uygulayın; bunları (fiziksel) pompanıza girin ve AAPS'te kabul ettiğinizi onaylayın. Bu bazal oran ayarlamalarının **AAPS**'te ve **Nightscout**'ta göründüğünden emin olun.
- Gerektiğinde [**Geçici Hedefler**](../DailyLifeWithAaps/TempTargets.md)'i kullanın. Bir hipoyu tedavi ettikten sonra, sistemin geri sıçrama sırasında aşırı düzeltme yapmasını önlemek için önceden tanımlı "hipo geçici hedefini" kullanın.
- Bu noktada hâlâ [Basit mod](#preferences-simple-mode)'daysanız, şimdi onu kapatmak için muhtemelen iyi bir zamandır.

Açık Döngü'deyken önerilen bazal oran değişikliklerinin sayısını azaltmak için [**3. Görev**](#objectives-objective3)'de anlatılan ipuçlarını yine kullanabilirsiniz. Ayrıca, önerilen bazal oran değişiklikleri için en küçük yüzdeyi **Ayarlar → Döngü** içindeki "**Açık modda minimum değişiklik**" ayarı ile değiştirebilirsiniz. Değer ne kadar yüksekse o kadar az değişiklik bildirimi alırsınız.

![Açık Döngü en küçük istek değişikliği](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Sistemin her önerisini tek tek uygulamanız gerekmez!
```
(objectives-objective5)=
## Görev 5: Geçici bazal önerileri de dahil olmak üzere açık döngünüzü anlamak

**5. Görev**'in bir parçası olarak geçici bazal önerilerinin nasıl oluşturulduğunu anlamaya başlayacaksınız. Buna [bazal mantığının belirlenmesi](#aaps-screens-how-predictions-become-a-dosing-decision), [**AAPS Genel Bakış** ekranındaki tahmin çizgilerini](#aaps-screens-prediction-lines) (veya Nightscout'u) gözlemleyerek etkiyi analiz etmek ve **OpenAPS SMB** eklenti ekranında (**Konfigürasyon → APS (YPS) → Eklentiyi aç**) gösterilen ayrıntılı hesaplamalara bakmak dahildir.

Bu görevi tamamlamak için tahmini süre: **7 gün**.

Bu **Görev**, [OpenAPS özellikleri](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to) bölümünde anlatıldığı gibi “Maksimum bazal oran” (max-basal) değerinizi belirlemenizi ve ayarlamanızı ister. Bu değer [Ayarlar → OpenAPS SMB](#Preferences-openaps-smb-settings) içinde ayarlanabilir. [Basit mod](#preferences-simple-mode)'da **AAPS** bu değeri otomatik olarak ayarlar ve sizin değiştirmeniz gerekmez. Hâlâ sanal pompa kullanıyorsanız, bu güvenlik ayarının hem **AAPS**'te hem de insülin pompanızda yapıldığından emin olun.

**AAPS**'in hesaplamalarına ve ayarlarına alışana kadar [**Profil** KŞ hedefinizi](#profile-glucose-targets) normalden daha yüksek ayarlamak isteyebilirsiniz. **Profil**'inizdeki **KŞ hedefi**'ni daha dar bir aralıkta (örneğin 1 mmol/L [20 mg/dL] veya daha dar) ayarlamayı deneyebilir ve ortaya çıkan davranışı gözlemleyebilirsiniz.

![Dur işareti](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Sanal pompa ile açık döngü kullanıyorsanız **burada durun**. Bu **Görev**'in sonundaki **Doğrula**'ya ancak insülin veren "gerçek" bir pompaya geçtikten sonra dokunun.

```

![boş](../images/blank.png)

(objectives-objective6)=
## Görev 6: Düşük KŞ'de Duraklatma ile döngüyü kapatmaya başlamak

![Uyarı işareti](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Yüksek KŞ değerlerini yine kendiniz düzeltmeniz gerekecek (pompa veya kalemle elle düzeltme yaparak)!
```

**6. Görev**'in bir parçası olarak, [maks. AİNS](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) sıfıra ayarlıyken döngüyü kapatacak ve **Düşük Glikoz Duraklatma** (LGS) modunu etkinleştireceksiniz. Bu **görev**i tamamlamak için 5 gün boyunca LGS modunda kalmanız gerekir. Bu süreyi, **Profil** ayarlarınızın doğru olup olmadığını ve LGS olaylarının çok sık tetiklenmediğini kontrol etmek için kullanmalısınız.

Bu görevi tamamlamak için en kısa süre: **5 gün**. Bu zorunlu bir bekleme süresidir. Bu süre dolmadan bir sonraki **Görev**'e geçemezsiniz.

Döngünüzü **LGS** modunda kapatmadan önce mevcut **Profil**'inizin (bazal, İDF, IC) iyi test edilmiş olması çok önemlidir. Yanlış **Profil** ayarları sizi elle tedavi edilmesi gereken hipo durumlarına sokabilir. Doğru bir **Profil**, 5 günlük süre boyunca düşük glikoz tedavilerine olan ihtiyacı azaltmaya yardım eder.

**Hâlâ sık veya ağır düşük glikoz atakları görüyorsanız, [insülin tipinizin İES'sini](#Config-Builder-insulin-dia), bazalı, İDF'yi ve karbonhidrat oranlarını iyileştirmeyi düşünün.** Lütfen bu konuda çok tartışma bulunan [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) veya [Discord](https://discord.gg/4fQUWHZ4Mw) grubuna başvurun.


**6. Görev** sırasında **AAPS**, maxIOB ayarını sıfır olarak geçersiz kılar. **Bu geçersiz kılma 7. Görev'e geçildiğinde sona erer.**

Bu, **6. Görev**'deyken sensör glikoz değerleri düşüyorsa **AAPS**'in bazal insülin iletiminizi sizin için azaltacağı anlamına gelir. Ancak sensör glikoz değerleri yükseliyorsa, **AAPS** bazal oranı yalnızca önceki bir **LGS** nedeniyle **bazal AİNS** negatifse **Profil** değerinizin üstüne çıkarır. Bunun dışında, glikoz değerleri yükselse bile **AAPS** bazalı mevcut profil değerinizin üstüne çıkarmaz. Bu önlem, **AAPS**'i kullanmayı öğrenirken hipolardan kaçınmak içindir.

**Bu nedenle yüksek glikoz değerlerini elle verilen düzeltme bolusları ile yönetmeniz gerekir.**

- AİNS'iniz negatifse (aşağıdaki ekran görüntüsüne bakın), **6. Görev**'de > %100 olan bir geçici bazal oranı (GBO) tetiklenebilir.

![Negatif AİNS örneği](../images/Objective6_negIOB.png)

- Güvenli olmak ve bir güvenlik payı eklemek için hedef aralığınızı normalde hedeflediğinizden biraz daha yüksek ayarlayın.
- 'Düşük Glikoz Duraklatma' modunu etkinleştirmek için ana ekrandaki Döngü simgesine basın ve çalışma modu olarak **Düşük Glikoz Duraklatma**'yı seçin.
- Etkin geçici bazalları GENEL BAKIŞ ekranındaki turkuaz bazal metnine veya GENEL BAKIŞ grafiğindeki turkuaz bazal çizimine bakarak izleyin.
- Tedavi edilen hipolardan sonra, geri sıçrama sırasında bazallar artırılamadığı için geçici olarak ani yükselmeler yaşayabilirsiniz.

(objectives-objective7)=
## Görev 7: Kapalı döngüyü ayarlamak, maksimum AİNS'i 0'ın üzerine çıkarmak ve KŞ hedeflerini kademeli olarak düşürmek

**7. Görev**'i tamamlamak için döngünüzü kapatmanız ve [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) değerinizi yükseltmeniz gerekir. **maxIOB**, Düşük Glikoz Duraklatma modu nedeniyle **6. Görev**'de otomatik olarak sıfırlanmıştı. Artık durum böyle değildir. **AAPS**, yüksek glikoz değerlerini düzeltmek için tanımladığınız maxIOB değerini kullanmaya başlar. [Basit mod](#preferences-simple-mode)'da **AAPS** maxIOB'yi otomatik olarak ayarlar ve sizin değiştirmeniz gerekmez.

Bu görevi tamamlamak için en kısa süre: **1 gün**. Bu zorunlu bir bekleme süresidir. Bu süre dolana kadar bir sonraki **Görev**'e geçmek mümkün değildir.

- **Kapalı Döngü**'ye geçmek için ana ekrandaki [Döngü simgesine](#AapsScreens-loop-status) basın ve çalışma modu olarak **Kapalı Döngü**'yü seçin. 1 gün boyunca **Kapalı Döngü**'de kalın.

- En iyi çalışan ayarları bulana kadar 'SMB için maks AİNS' değerinizi (OpenAPS'te 'max-iob') yavaş yavaş 0'ın üzerine çıkarın.

Bu ayar için varsayılan öneri “**ortalama öğün bolusu + 3 x maksimum günlük bazal**” şeklindedir. Burada “maksimum günlük bazal”, günün herhangi bir zaman dilimindeki en yüksek saatlik değerdir.

![maksimum günlük bazal](../images/MaxDailyBasal2.png)

Bu öneri bir başlangıç noktası olarak görülmelidir. Bu kuralı kullanıyorsanız ancak glikoz düzeyleri yükselirken AAPS'in çok fazla insülin verdiğini görüyorsanız şunları yapmanız gerekebilir:
* "SMB için maks AİNS" değerini düşürün;
* **Profil** ayarlarınızı gözden geçirin ve her seferinde yalnızca bir ayarlama yapın.

Ya da insüline çok dirençliyseniz **maxIOB** değerini çok dikkatli bir şekilde yükseltin.

Döngü kullanımınıza ne kadar **maxIOB** uyduğundan emin olduğunuzda, **KŞ hedeflerinizi** istediğiniz düzeye indirin.

(objectives-objective8)=
## 8. Görev: Gerekirse bazalları ve oranları ayarlama, ardından Otoduyarlılık'ı etkinleştirme

Bu **görev**in bir parçası olarak **Profil**'inizin performansını yeniden gözden geçirecek ve [Otoduyarlılık](#Open-APS-features-autosens) işlevini yanlış ayarların bir göstergesi olarak kullanacaksınız.

Bu görevi tamamlamak için en kısa süre: **7 gün**. Bu zorunlu bir bekleme süresidir. Bu süre dolana kadar bir sonraki **Görev**'e geçmek mümkün değildir.

[Otoduyarlılık](../DailyLifeWithAaps/KeyAapsFeatures.md)'ı 7 gün boyunca etkinleştirin ([Basit mod](#preferences-simple-mode)'da varsayılan olarak etkindir) ve [**Genel Bakış** grafiğindeki beyaz çizginin](#AapsScreens-section-g-additional-graphs) egzersiz, hormonlar vb. nedeniyle insülin duyarlılığınızın arttığını veya azaldığını göstermesini izleyin. **AAPS**'in duyarlılığı, bazalları ve hedefleri buna göre ayarladığını gösteren **OpenAPS SMB** eklenti ekranını (**Konfigürasyon → APS (YPS) → Eklentiyi aç**) takip edin.

[Duyarlılık algılaması](#Config-Builder-sensitivity-detection) ayarlarınızı gözden geçirmek için iyi bir zamandır. Duyarlılığınızı ana ekranda bir [ek grafikte](#AapsScreens-section-g-additional-graphs) görebilirsiniz.

Ayrıca bazallarınızın hâlâ doğru olduğunu kontrol etmek için [OtoAyar](#autotune-how-autotune-calculates-adjustments)'ı bir kez kullanabilir veya geleneksel bir bazal testi yapabilirsiniz.

(objectives-objective9)=
## Görev 9: Süper mikro bolus (SMB) gibi gündüz kullanımı için ek oref1 özelliklerinin etkinleştirilmesi

**9. Görev**'de temel işlevlerden biri olan **"Süper Mikro Bolus (SMB)"** ile çalışacak ve onu kullanacaksınız. Zorunlu okumaları tamamladıktan sonra SMB'lerin ne olduğunu, nasıl çalıştığını ve SMB verildikten sonra bazalın neden geçici olarak sıfıra ayarlandığını (sıfır geçici bazal, zero-temping) iyi anlamış olacaksınız.

Bu görevi tamamlamak için en kısa süre: **28 gün**. Bu zorunlu bir bekleme süresidir. Bu süre dolmadan bir sonraki Görev'e geçemezsiniz.

- **SMB**'yi ve **sıfır geçici bazal** (zero-temping) kavramını anlamak için [bu dokümantasyondaki SMB bölümü](#Open-APS-features-super-micro-bolus-smb) ve [openAPS dokümantasyonundaki oref1 bölümü](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) mutlaka okunmalıdır.
- Bunu yaptıktan sonra **SMB**'lerin daha etkili çalışması için [maxIOB'yi yükseltebilirsiniz](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). maxIOB artık yalnızca birikmiş bazalı değil, tüm **AİNS**'i kapsar. Bu eşik, AİNS bu değerin altına düşene kadar **SMB**'leri duraklatır (_örn._ **maxIOB** 7 Ü olarak ayarlıdır ve bir öğünü karşılamak için 8 Ü bolus verilir: **AİNS** 7 Ü'nin altına düşmedikçe SMB'ler duraklatılır ve verilmez). İyi bir başlangıç, **maxIOB** = **ortalama öğün bolusu + 3 x maksimum günlük bazal** olarak ayarlamaktır. Burada "maksimum günlük bazal", günün herhangi bir zaman dilimindeki en yüksek saatlik değerdir. Başvuru için [7. görev](#objectives-objective7)'e bakın.
- Karbonhidrat emilim hızınızı değerlendirin ve çok yavaş veya çok hızlı bulursanız [Ayarlar → Emilim ayarları → min_5m_carbimpact](#Preferences-min_5m_carbimpact) içindeki “min_5m_carbimpact” parametresini değiştirmeyi düşünün.

(objectives-objective10)=
## 10. Görev: Otomasyon

**Otomasyonlar**, **10. Görev** başlatıldığında kullanılabilir hâle gelir.

Bu görevi tamamlamak için en kısa süre: **28 gün**. Bu zorunlu bir bekleme süresidir. Bu süre dolmadan bir sonraki Görev'e geçemezsiniz.

Önce [Otomasyon](../DailyLifeWithAaps/Automations.md) dokümantasyon sayfasını okuyun.

En basit otomasyon kuralını kurun; örneğin birkaç dakika sonra bir Android bildirimi tetikleyin:
- **Yönet → Otomasyon**'u açın ve **+** düğmesine (**Kural ekle**) dokunun.
- Bir **Görev adı** girin, örneğin "İlk otomasyon bildirimim".
- **Koşul** altında "**DÜZENLE**"ye dokunun.
  - "**Tetikleyici ekle**"ye dokunun ve "**Zaman**"ı seçin. **AAPS**, bugün için şu anki saatte bir giriş oluşturur.
  - Saati, birkaç dakika sonra tetiklenecek şekilde değiştirin.
  - Kurala geri dönmek için **Kaydet** simgesine (sağ üstte) dokunun.
- **Eylem** altında "**EKLE**"ye dokunun ve "**Bildirim**"i seçin.
  - Eylem kartına bir mesaj girin, örneğin "İlk otomasyonum".
- **Kaydet** simgesine (sağ üstte) dokunun ve kuralın **Etkin** olduğundan emin olun.
- Zamanın bildirimi tetiklemesini bekleyin (telefonunuza bağlı olarak bildirimin birkaç dakika gecikebileceğini unutmayın)

Ardından daha kullanışlı bir **Otomasyon** kurmayı deneyebilirsiniz. Dokümantasyon sayfasında birkaç örnek vardır. Ayrıca [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) grubunda "Automation" ekran görüntülerini arayabilirsiniz. [Discord](https://discord.gg/4fQUWHZ4Mw) topluluğunda bu konuya ayrılmış bir kanal da vardır.

Örneğin her sabah okul/iş öncesinde aynı saatte kahvaltıda aynı şeyi yiyorsanız, kahvaltıdan 30 dakika önce biraz daha düşük bir **Geçici Hedef** ayarlayan "kahvalti-oncesi-hedef" gibi bir **Otomasyon** oluşturabilirsiniz. Böyle bir durumda koşulunuz büyük olasılıkla "yinelenen zaman" içerir; bu, haftanın belirli günlerini (Pazartesi, Salı, Çarşamba, Perşembe, Cuma) ve belirli bir saati (06:30) seçmekten oluşur. Eylem, normalden daha düşük bir hedef değeri ve 30 dakikalık süresi olan "Geçici hedefi başlat" olacaktır.

## Tüm görevler tamamlandığında

Tüm **Görevler**'i tamamladığınızda liste her birini bir onay işareti ve tamamlandığı tarihle gösterir. **Görevler** öğesi alttaki gezinme çubuğundan kaybolur; listeyi yine **Konfigürasyon → Kısıtlamalar → Görevler → Eklentiyi aç** ile açabilirsiniz.

![Tüm görevler tamamlandı](../images/objectives/objectives_completed.png)

Bir görevin işlerini yeniden görmek için o görevin altındaki "**Daha fazla**"ya basın:

![Tamamlanmış bir görevin ayrıntıları](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Görevlere geri dön

Herhangi bir nedenle **Görevler**'de geri gitmek isterseniz, tamamlanmış **Görev**'i "**Daha fazla**" ile açın ve "**Bitmiş durumu sıfırla**"ya dokunun:

![Görevlere geri dön](../images/Objective_ClearFinished.png)

Aynı şekilde, şu anda üzerinde çalıştığınız **Görev** "**Başlatılmış durumu sıfırla**" ile yeniden başlatılabilir.
