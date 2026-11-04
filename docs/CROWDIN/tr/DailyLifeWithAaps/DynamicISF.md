(Open-APS-features-DynamicISF)=
# Dinamik İDF (DynISF)

Şimdiye kadar **AMA** ve **SMB** ile **İDF**, **Profil**'de tanımlanıyordu ve günün her tanımlı dilimi için sabitti. Ama gerçekte bir kişinin **İDF**'si o kadar sabit değildir ve **KŞ** seviyesine göre değişir: KŞ yüksekken, kullanıcının **KŞ**'sini 50 mg/dL / 3 mmol/L düşürmek için, daha düşük bir **KŞ**'de olduğundan daha fazla insüline ihtiyacı olur. [Otoduyarlılık](#Open-APS-features-autosens), bu sorunu çözmeye çalışan ilk algoritmaydı. Öğün zamanları dışında **İDF**'yi ayarlıyordu.

**Dinamik İDF** (**DynISF** olarak da bilinir) aynı amaca hizmet eder, ama her zaman kullanılabildiği için daha gelişmiştir. Yalnızca **AAPS**’in kontrollerini ve izlemesini iyi bilen ileri düzey kullanıcılara önerilir. Denemeden önce aşağıdaki [Dinamik İDF'yi etkinleştirirken dikkat edilmesi gerekenler](#dyn-isf-things-to-consider-when-activating-dynamicisf) bölümünü okuyun.

```{admonition} CAUTION - Automations or Profile Percentage change
:class: warning

**Otomasyonlar** her zaman dikkatle kullanılmalıdır. Bu, özellikle **Dinamik İDF** için geçerlidir.

**Dinamik İDF** kullanırken, geçici bir **Profil** değişikliği yapan tüm **Otomasyon** kurallarını devre dışı bırakın. Aksi halde **Dinamik İDF** düzeltme boluslarında aşırı agresif olur ve hipoglisemiye yol açar. Bu tam olarak **Dinamik İDF**'nin görevidir. Bu yüzden yüksek **KŞ** durumunda **AAPS**'e Otomasyon ile ek insülin vermesini söylemeye gerek yoktur.

```

**Dinamik İDF**'yi kullanmak için **AAPS'in** veritabanında kullanıcının en az 7 günlük **AAPS** verisi olmalıdır.

## Dinamik İDF ne yapar?

**Dinamik İDF**, insülin duyarlılık faktörünü (**İDF**) kullanıcının şu değerlerine göre dinamik olarak uyarlar:

- Günlük toplam insülin dozu (**GTD**); ve
- mevcut ve tahmin edilen kan şekeri değerleri.

**Dinamik İDF** kullanılırken **Profil**'e girilen **İDF** değerleri artık hiç kullanılmaz. Tek istisna, **AAPS** veritabanında yeterli GTD verisi olmadığında yedek değer olarak kullanılmalarıdır (*ör.* uygulama yeni kurulduğunda).

**SMB/AMA** - kullanıcının ayarladığı, **SMB** ve **AMA** tarafından kullanılan sabit **İDF** ile bir kullanıcı **Profil**'i örneği.

![Sabit İDF](../images/DynamicISF/profile_viewer_isf.png)

**Dinamik İDF** - **Dinamik İDF**'nin belirlediği şekilde değişen bir kullanıcı **İDF**'si örneği.

![Dinamik İDF](../images/DynamicISF/DynISF2.png)

Kırmızı daire içindeki bölüm şunu gösterir: `profile ISF` -> `ISF as calculated by DynISF`. <br/> Bu bölüme dokunmak, ek bilgiler gösteren bir iletişim kutusu açar; örneğin hesaplayıcı ve karbonhidrat emilimi için kullanılan **İDF** (aşağıdaki [İDF'nin diğer kullanımları](#dynisf-other-usages-of-isf) bölümüne bakın).

**DynISF** değeri bir grafikte de gösterilebilir: ana ekrandaki grafiklerin altında **Grafik ekle**'ye dokunun ve **DDYRLLK** (değişken duyarlılık) seçin. Bu değer beyaz bir çizgi olarak görünür (yukarıdaki görüntünün alt kısmı).

## Dinamik İDF nasıl hesaplanır?

**Dinamik İDF**, **İDF**'yi belirlemek için kullanıcının **Profil**'de ayarladığı sabit **İDF** değeri yerine Chris Wilson'ın modelini kullanır. Ayrıntılı bir açıklamayı burada bulabilirsiniz: [Chris Wilson on Insulin Sensitivity (Correction Factor) with Loop and Learn, 2/6/2022](https://www.youtube.com/watch?v=oL49FhOts3c).

Uygulanan **Dinamik İDF** denklemi şudur: `ISF = 1800 / ((TDD * DynISF Adjust Factor) * Ln (( current BG / insulin divisor) + 1 ))`

Bu denklemde kullanılan değişkenler aşağıda ayrıntılı olarak açıklanmıştır.<br/> Not: `Ln`, matematiksel bir fonksiyon olan doğal logaritma anlamına gelir.

Uygulama, yukarıdaki denklemi mevcut **İDF**'yi hesaplamak için ve oref1'in [**AİNS**, **ZT** (sıfır geçici bazal) ve **UAM** tahminlerinde](#aaps-screens-prediction-lines) kullanır. Ayrıca **AKRB** için ve bolus sihirbazında da kullanılır (aşağıdaki [İDF'nin diğer kullanımları](#dynisf-other-usages-of-isf) bölümüne bakın).

### GTD (Günlük Toplam Doz)
GTD, aşağıdaki değerlerin bir birleşimini kullanır:
1.  7 günlük ortalama **GTD**;
2.  önceki günün **GTD**'si; ve
3.  son sekiz (8) saatteki insülin kullanımının ağırlıklı ortalaması, 24 saate göre hesaplanmış olarak.

Yukarıdaki denklemde kullanılan **GTD**, yukarıdaki değerlerin her birinin üçte bir ağırlıkla alınmasıyla hesaplanır.

### Dinamik İDF Ayarlama Faktörü

Bu, kullanıcının **Ayarlar**'ında belirlenir ve **Dinamik İDF**'yi daha fazla veya daha az agresif yapmak için kullanılır. Aşağıdaki [Tercihler](#dyn-isf-preferences) bölümüne bakın.

### İnsülin Böleni
İnsülin böleni, kullanılan insülinin tepe zamanına bağlıdır ve tepe zamanı ile ters orantılıdır. Bu değer Lyumjev için 75, Fiasp için 65 ve normal hızlı etkili insülin için 55'tir.

### Doz kararları için tahmin edilen KŞ'ye dayalı İDF

Dinamik duyarlılık **mevcut KŞ** değeri ile hesaplanır ve **AAPS**'te mevcut İDF'niz olarak gösterilir. Ancak doz hesaplarken oref1 algoritması bunun yerine **Gelecek İDF**'yi hesaplar ve kullanır.

Bunun amacı, **KŞ** düşükken veya düşmesi tahmin edilirken çok fazla insülin verilmesini önlemektir.

**Gelecek İDF**, yukarıda anlatılan formülün aynısını kullanır. Tek fark, **mevcut KŞ** yerine **minimum tahmini KŞ**'yi kullanabilmesidir. [oref1'de hesaplandığı şekliyle](#aaps-screens-how-predictions-become-a-dosing-decision) **minimum tahmini KŞ**, tahminlerin tüm süresi boyunca KŞ'nizin ulaşacağı tahmin edilen en düşük değerdir.

* Mevcut **KŞ** hedefin üzerindeyse<br/> **ve** **KŞ** seviyeleri +/- 3 mg/dL aralığında sabitse:<br/>Formülde KŞ şöyle kullanılır: `average(minimum predicted BG, current BG)`.
* Nihai **KŞ** hedefin üzerindeyse ve glikoz seviyeleri yükseliyorsa,<br/> **veya** nihai **KŞ** mevcut **KŞ**'nin üzerindeyse:<br/>Formülde KŞ şöyle kullanılır: `current BG`.
* Diğer durumlarda:<br/>Formülde KŞ şöyle kullanılır: `minimum predicted BG`.

Basit bir açıklama için, yukarıdaki durumu gösteren aşağıdaki ekran görüntüsüne bakın. Turuncu noktalar **tahmini KŞ**'yi, mor noktalar **average(tahmini KŞ, mevcut KŞ)**'yi ve mavi noktalar **mevcut KŞ**'yi kullanır.

![DynISF_BGValue.png](../images/DynamicISF/DynISF_BGValue.png)

(dynisf-other-usages-of-isf)=
## İDF'nin diğer kullanımları

### İDF ve AKRB emilimi

[AKRB hesaplaması](../DailyLifeWithAaps/CobCalculation.md) sayfasında anlatıldığı gibi, AKRB emilimi genellikle şu formülle hesaplanır:   
`absorbed_carbs = deviation * ic / isf`  
**Dinamik İDF** kullanılırken, burada kullanılan **İDF** son 24 saatteki Dinamik İDF değerlerinin ortalamasıdır.

### Bolus sihirbazında İDF

[Bolus sihirbazı](#aaps-screens-bolus-wizard) kullanılırken, **KŞ** hedefin üzerindeyse düzeltme eklemek için **İDF** kullanılır.

**Dinamik İDF** kullanılırken, burada kullanılan **İDF** son 24 saatteki Dinamik İDF değerlerinin ortalamasıdır.

(dyn-isf-preferences)=
## Ayarlar

Etkinleştirmek için [Ayarlar > OpenAPS SMB](#Preferences-openaps-smb-settings) içinde **Dinamik hassasiyet kullanın** seçeneğini işaretleyin. Seçildikten sonra yeni ayarlar kullanılabilir hale gelir.

![Dinamik İDF ayarları](../images/preferences/settings_dynamic_isf.png)

(dyn-isf-adjustment-factor)=
### Dinamik İDF ayarlama faktörü
**Dinamik İDF**, herkese uygulanması beklenen tek bir kurala göre çalışır. Bu, aynı **GTD**'ye sahip kişilerin aynı duyarlılığa sahip olacağı anlamına gelir. Her kullanıcının kendine özgü bir duyarlılığı olduğu için, **Ayarlama Faktörü** kullanıcının insüline "standart" bir kişiden daha duyarlı mı yoksa daha az duyarlı mı olduğunu belirlemesini sağlar.

**Ayarlama Faktörü** %1 ile %300 arasında bir değerdir. Bu değer **GTD** değeri ile çarpılır.

* Bu değeri %100'ün üzerine çıkarmak **DynISF**'yi daha agresif yapar: **İDF** değerleri *küçülür* (_yani_ **KŞ** seviyelerini biraz düşürmek için daha fazla insülin gerekir)
* Bu değeri %100'ün altına indirmek **DynISF**'yi daha az agresif yapar: **İDF** değerleri büyür (_yani_ **KŞ** seviyelerini biraz düşürmek için daha az insülin gerekir).

Yüzde ile bir [**Profil değişimi**](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) etkinleştirildiğinde de **Ayarlama Faktörü** değişir. Daha düşük bir **Profil yüzdesi** **Ayarlama Faktörü**'nü düşürür; daha yüksek bir **Profil yüzdesi** ise onu yükseltir.

Örneğin, **Ayarlama Faktörü**'nüz %80 ise ve %80'e bir **Profil Değişimi** yapılırsa, sonuçta **Ayarlama Faktörü** `0.8*0.8=0.64` olur.

Bu, **DynISF** kullanırken duyarlılığınızı geçici olarak elle ince ayarlamak için **Profil yüzdesi**'ni kullanabileceğiniz anlamına gelir. Bu, fiziksel aktivite (daha düşük yüzde), hastalık (daha yüksek yüzde) vb. durumlarda faydalı olabilir.

### LGS Eşiği

Altına inildiğinde insülinin askıya alındığı **KŞ** değeri (düşük glikozda askıya alma). Varsayılan değer standart hedef modelini kullanır. Kullanıcı bu değeri 60 mg/dL (3,3 mmol/L) ile 100 mg/dL (5,5 mmol/L) arasında ayarlayabilir. 65/3,6'nın altındaki değerler varsayılan modelin kullanılmasına yol açar.

### Dinamik İDF hassasiyet ayarı

Bu ayar (*"Dinamik İDF kullanırken hassasiyet hesaplamalarını ayarlayın"*) Otoduyarlılık'ın yerini alır ve standart Otoduyarlılık'ın yaptığı gibi, bazal oranı artırmak ve azaltmak için son 24 saatlik **GTD**/7 günlük **GTD** oranını temel alır. Hedefi duyarlılığa göre ayarlama seçenekleri etkinse, bu hesaplanan değer hedefi ayarlamak için de kullanılır. Otoduyarlılık'tan farklı olarak, bu seçenek **İDF** değerlerini ayarlamaz.

(dyn-isf-things-to-consider-when-activating-dynamicisf)=
## Dinamik İDF'yi etkinleştirirken dikkat edilmesi gerekenler

* **Dinamik İDF** yalnızca **AAPS'in** kontrollerini ve izlemesini iyi bilen ileri düzey kullanıcılara önerilir. Kullanıcılar ideal olarak **Dinamik İDF**'ye geçmeden önce **SMB** ile iyi bir kontrol sağlamış olmalıdır.
* Yukarıda belirtildiği gibi, **KŞ**'ye bağlı olarak bir **Profil yüzdesi** etkinleştiren tüm [**Otomasyonları**](../DailyLifeWithAaps/Automations.md) kapatın. Aksi halde çok agresif olur ve gereğinden fazla insülin verebilir! Bu zaten **Dinamik İDF** algoritmasının bir parçasıdır.
* Dinamik İDF hesaplamasında [Profil yüzdesi](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) dikkate alınır (yukarıdaki [Dinamik İDF Ayarlama Faktörü](#dyn-isf-adjustment-factor) bölümüne bakın). %100'den farklı bir **Profil yüzdesi**'ni uzun süre kullanmak kötü bir uygulamadır. **Profil**'inizin değiştiğini fark ederseniz, **Profil**'i belirli bir yüzde ile kullanmak yerine güncellenmiş değerlerinizle yeni bir **Profil** oluşturun.
* **Dinamik İDF** herkes için işe yaramayabilir. Özellikle aşağıdaki durumlardan biri sizin için geçerliyse beklenmedik sonuçlar görebilirsiniz:
  * Değişken yaşam tarzı (düzensiz yemek yeme veya fiziksel aktivite alışkanlıkları)
  * Günden güne değişen GTD veya duyarlılık.
* **Ayarlama Faktörü**'nün başlangıç değerini belirlemek için kesin bir kılavuz yoktur. Ancak başlangıç noktası olarak: **Profil** değerlerinizin doğru olduğunu varsayarsak, hedef aralıktayken ve **KŞ** seviyeleri sabitken **DynISF** değeri, daha önce **Profil**'inizde olan değerle yaklaşık aynı olmalıdır.<br/>**Dinamik İDF**'nin çok agresif olduğunu görürseniz **Ayarlama Faktörü**'nü düşürün; çok zayıf olduğunu görürseniz yükseltin.
* **DynISF**, **Profil İDF**'sini hiç kullanmasa da, duyarlılığınızın daha önce **Profil**'inizde kayıtlı olandan çok farklı olduğunu fark ederseniz, onu güncel tutmayı düşünmelisiniz. Bu, **AAPS** verilerinizi kaybettiğinizde (_ör._ yeni telefon, yeni **AAPS** sürümü…) faydalı olabilir, çünkü sonraki 7 gün boyunca yedek değer olarak **Profil İDF**'niz kullanılır.