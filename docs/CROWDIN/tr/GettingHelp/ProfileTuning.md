# AAPS profilinde ince ayar

```{admonition} This is NOT a medical advice
:class: warning
Diyabet yönetiminizle ilgili destek ve tavsiye için lütfen sağlık ekibinizle birlikte çalışın.</br>
Bu kılavuzu yalnızca tüm **AAPS** görevlerini izleyerek [**Profil** kurulumunuzu doğru şekilde yaptıktan](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md) sonra kullanın.
```

Bu kılavuz, belirli bir __Profil__ ile OpenAPS algoritma sonuçlarının mantığını açıklar ve belirli durumlar veya örüntüler gözlemlendiğinde **AAPS**'te hangi değerlerin ayarlanabileceği hakkında bilgi verir. Aşağıdaki bazal testi önerileri, sağlık ekibinizin tavsiyelerinden farklı olabilir.

**Kapalı döngü** kullanmak bazal testini kolaylaştırabilir ve __Profil__ bazalınız fazla güçlüyse hipo riskini önemli ölçüde azaltabilir.

## Profil ayarlarını değiştirme: nasıl ilerlenir

1. Aşağıdaki __AAPS__ önerilerini ve tavsiyelerini okuyup anladığınızdan emin olun. Bu tavsiyelere uymamak ayarlama sürecini zorlaştırabilir ve iyi ayarlanmış bir __Profil__ elde etme olasılığını azaltabilir
2. __KŞ__ ve __AİNS__ değerlerinizde neler olduğunu **birkaç gün boyunca** dikkatle gözlemleyin ve karşılaştırın.
3. **AAPS** ile (neredeyse) her gün aynı saatlerde gerçekleşen örüntülere dikkat edin.
4. Bunu birkaç gün boyunca yapmak önemlidir. __Profil__ ayarlama kararlarını tek bir günde gözlemlenen verilere göre vermek genellikle kötü sonuçlar doğurur.
5. Tekrarlanan bir örüntü gözlemledikten sonra (ör. saat 13:00'te __KŞ__'de ani bir yükselme veya negatif bir __AİNS__ değeri görüyorsanız), ancak o zaman __Profil__'inizde küçük değişiklikler yapmaya başlayın.
6. Her seferinde yalnızca tek bir şeyi değiştirmeniz önemlidir. Ör. bazalınızı saat 13:00 civarında %10 artırın.
7. Her değişiklikten sonra, sonraki birkaç gün boyunca bunun __KŞ__ ve __AİNS__ üzerindeki etkisini izlemeniz önemlidir.
8. Bu adımları tekrarlayın: gözlemleyin, karar verin, gerekirse yeniden ince ayar yapın

Acele etmeyin, yavaş gidin!

## Bazalda ince ayar yaparken önerilen ayarlar ve tavsiyeler

- Tüm testleri [kapalı döngü etkinken](#AapsScreens-loop-status) yapın.
- **Tüm [otomasyonları](../DailyLifeWithAaps/Automations.md) <u>KAPATIN</u>**
- **[DynISF](#Open-APS-features-DynamicISF), [OtoİDF](#Open-APS-features-auto-isf) ve [Otoduyarlılık](#Open-APS-features-autosens) özelliklerini <u>KAPATIN</u>**; böylece profilinizi uyarlamaya çalışmazlar.
- Test sırasında elle kullanıcı işlemleri (elle bolus, geçici hedefler vb.) yapmayın: sistemin yalnızca **Profil** ayarlarını kullanmasına izin verin.
- [Ek grafikler](#AapsScreens-section-g-additional-graphs) için: 1. grafikte Aktif İnsülin, Aktif Karbonhidrat (ve Duyarlılık değişikliği) kullanın. 2. grafikte Sapmalar ve Kan Şekeri Etkisi kullanın. Tavsiye isterken ekran görüntülerinize bunları her zaman ekleyin.
- AKRB=0[*](#profiletuning-cob-zero)

Verileri etkiledikleri ve yanlış sonuçlara yol açabildikleri için ideal olarak kaçınılması gereken diğer durumlar:
- Fiziksel aktivite yok.
- Stres yok.
- Hastalık yok.
- Çok sıcak veya çok soğuk gibi aşırı hava koşulları yok.
- Başarısız pompa veya CGM oturumu yok.
- Bildirilmemiş karbonhidrat yok.

Ayrıca şunlara dikkat edin:
- [Bazal oran profiliniz](#your-aaps-profile-basal-rates) doğruysa, AKRB=0[*](#profiletuning-cob-zero) ve AİNS=0 iken hedefteyseniz, **İDF** değeriniz ne olursa olsun sürekli hedefte kalırsınız (**İDF** yalnızca **KŞ** hedefinizin üzerindeyken kullanılır).
- Yalnızca güncel **AİNS** değerine değil, **AİNS**'in son birkaç saatte nasıl değiştiğini görmek için **AİNS** grafiğine de bakmanız gerekir.

(profiletuning-cob-zero)=

***AKRB = 0**

Yani yemek sindirilmiştir ve vücudunuzda artık karbonhidrat kalmamıştır.

**AAPS**, [vücudunuzda hâlâ karbonhidrat varken AKRB=0](../DailyLifeWithAaps/CobCalculation.md) gösterebilir.

## [Profil](../SettingUpAaps/YourAapsProfile.md) tanımları

Fazla **güçlü bir Profil** aşağıdakilerin bir kombinasyonunu gösterir:

- [İDF](#your-aaps-profile-insulin-sensitivity-factor) sayısı çok küçük.
- [Bazal](#your-aaps-profile-basal-rates) sayısı çok büyük.
- [I:C](#your-aaps-profile-insulin-to-carbs-ratio) sayısı çok küçük.

## AİNS gözlemleri

*Not: Birkaç günlük AİNS'i görmek için Nightscout raporlarındaki Loopalyzer AİNS grafiğini de kullanabilirsiniz.*

Birkaç gün sonra aşağıdaki örüntüleri gözlemlerseniz, şu değişiklikleri düşünün:

### AİNS pozitif

- **Profil** bazalı yeterince güçlü olmayabilir (bu, bildirilmemiş yemek, hastalık, kanül bölgesinde kötü emilim vb. nedenlerden de olabilir)

![Pozitif AİNS](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### AİNS negatif

- Varsayılan bazal fazla güçlü.
- Geçmişteki egzersizin/fiziksel aktivitenin etkisi olabilir.

![Negatif AİNS](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Önceki yemek: fazla bolus (bu da çok uzun bir sıfır geçici bazale yol açtı)

![Negatif AİNS](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## KŞ hedefi gözlemleri

### Yüksekte takılı kalma

- __İDF__ sayısı yüksek ve yeterince güçlü değil (hesaplanan insülin çok zayıf)

![Yüksekte takılı kalma](../images/troubleshooting/profiletuning/StuckHigh.png)

- __Profil__ bazalı yeterince güçlü olmayabilir (**SMB**'lerin kullanabileceği yeterli "bazal stoku" yok)
- Bir güvenlik sınırı ([maks. AİNS](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) devreye girmiş ve insülin verilmesini sınırlıyor olabilir. **APS** eklenti ekranında kontrol edin (**Konfigürasyon → APS (YPS) → Eklentiyi aç**); bkz. [SMB](#Open-APS-features-super-micro-bolus-smb).
- Teknik sorun: kanül bölgesinde emilim, infüzyon seti, ...

### Düşükte takılı kalma

- __İDF__ fazla güçlü ve sayının yükseltilmesi gerekiyor
- __Profil__ bazalı fazla güçlü (AİNS de negatifse)

### Hız treni (inişler ve çıkışlar)

- **İDF** fazla güçlü mü? [AAPS profilinize](#your-aaps-profile-insulin-sensitivity-factor) bakın

![Hız treni](../images/troubleshooting/profiletuning/StrongISF.png)

## Yemek sonrası KŞ gözlemleri

### Hızlı yükseliş ve KŞ'nin yükselmesi

- Yiyecek hızlı karbonhidrat içeriyor (meyve suyu gibi).
- Ön bolus yapmayı veya ön bolusu biraz daha erken yapmayı düşünün.
- Bolus (IC veya enjekte edilen %) yeterince güçlü değil.

![Yükselip yüksekte kalma](../images/troubleshooting/profiletuning/FastRise.png)

### Hızlı yükseliş ve ardından KŞ'nin düşmesi

- Ön bolus yapmayı düşünün, **Profil**'iniz fazla agresif olabilir (yükselişe aşırı düzeltme)
- Bolus fazla güçlü.



## [I:C oranınızı nasıl hesaplarsınız](#your-aaps-profile-insulin-to-carbs-ratio)

1. Önce **Profil**'inizde doğru varsayılan bazal ayarlarına ihtiyacınız var.
2. Hedefte başlayın, tercihen negatif AİNS olmadan.
3. Verilen toplam insülini **Yönet → Pompa** bölümünden (veya pompa geçmişinden) kaydedin ve buna Başlangıç insülini deyin. Bilinen bir karbonhidrat porsiyonunu çok doğru ölçün, başlangıç saatini ve Başlangıç AİNS'ini kaydedin. Ardından karbonhidrat ve bolus bilgilerini bolus sihirbazıyla (mevcut ayarlı I:C ile) **AAPS**'e girin. Karbonhidratları yemeyi unutmayın ;)
4. Birkaç saat sonra, AKRB=0[*](#profiletuning-cob-zero) olduğunda ve tekrar hedefe döndüğünüzde bitiş saatini kaydedin, Bitiş AİNS'ini not edin, verilen toplam insülini önceki gibi kontrol edin ve buna Bitiş insülini deyin. *NOT: Zaman aralığı, sindiriminizden uzun olduğu sürece ÖNEMLİ DEĞİLDİR*
5. Başlangıç ve Bitiş insülin miktarları arasındaki farktan, bitiş AİNS - başlangıç AİNS farkını çıkarın/ekleyin. Ardından **Profil** ayarlarınızdan hesaplanan bazal insülini çıkarın.
6. __KŞ__ hedefteyse, karbonhidratlarınızı “sindirmek” için kullanılan toplam insülini elde etmiş olursunuz. **I:C** oranınızı hesaplayın.

### I:C hesaplamalarının açıklaması

- Doğru varsayılan bazal oranına sahip bir **Profil** ile, herhangi bir zaman aralığında hedefte kalmanız ve AİNS'inizin 0'a yakın olması gerekir. Yalnızca **Profil** bazalınızı alırsınız.
- Buna karbonhidrat ve bolus eklersiniz. Vücudunuzun tüm karbonhidratları sindirmesini ve **KŞ** hedefine geri dönmesini bekleyin. İnsülin kullanımınız, bazalınızın ve karbonhidratlar için gereken insülinin toplamı olacaktır. Bazalınız için kullanılan insülini (**Profil**'inizi kullanarak) hesaplarsınız; geri kalanı karbonhidratları sindirmek için kullanılan insülindir.
- Zaman aralığı çok kısaysa sindirilmemiş karbonhidrat kalır, bu nedenle "karbonhidratlar için gereken insülin" değeriniz yanlış olur.
- Zaman aralığı çok uzunsa kötü bir şey olmaz. Tüm karbonhidratlarınızı kullanırsınız ve daha fazla bazal alırsınız. Sonunda bazalı kullanılan toplam insülinden çıkaracağınız için, uzatılmış zaman aralığı (daha fazla bazal kullanımıyla) sonucu etkilemez.

İlk olarak @Robby (Discord) tarafından **AAPS Profil**'inizin ince ayarına yardımcı olacak ipuçları olarak yazılmış, topluluk tarafından gözden geçirilip düzenlenmiştir (teşekkürler!).
