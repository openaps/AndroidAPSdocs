# AKRB hesaplaması

## AAPS AKRB değerini nasıl hesaplar?

Kullanıcı bir öğün veya karbonhidrat düzeltmesi için karbonhidrat girdiğinde, **AAPS** bu miktarı mevcut aktif karbonhidrata (**AKRB**) ekler. **AAPS** daha sonra kullanıcının karbonhidrat emilimini, kullanıcının **KŞ** değerlerinde görülen sapmalara göre hesaplar. Emilim hızı, karbonhidrat duyarlılık faktörüne (**CSF**) bağlıdır. Bu, kullanıcının **Profil**'indeki bir ayar değildir. **AAPS** bunu **İDF/IC** ayarlarına göre hesaplar. Değer, 1 g karbonhidratın kullanıcının **KŞ**'sini kaç mg/dL yükselteceğini gösterir.

## Karbonhidrat Duyarlılık Faktörü

**AAPS**'in kullandığı formül şudur:

- absorbed_carbs = deviation * ic / isf.

Kullanıcının **Profil**'i üzerindeki etkisi şöyledir:

- **IC**'yi _artırmak_ - her 5 dakikada emilen karbonhidratı artırır ve böylece toplam emilim süresini kısaltır;

- **İDF**'yi _artırmak_ - her 5 dakikada emilen karbonhidratı azaltır ve böylece toplam emilim süresini uzatır; ve

- **Profil yüzdesi**'ni _değiştirmek_ - iki değeri de birlikte artırır/azaltır, bu yüzden karbonhidrat emilim süresini etkilemez.

Örneğin, kullanıcının **Profil**'indeki **İDF** 100 ve **IC** 5 ise, kullanıcının Karbonhidrat Duyarlılık Faktörü 20 olur. Kullanıcının **KŞ**'si her 20 mg/dL yükseldiğinde, **AAPS** 1 g karbonhidratı emilmiş olarak hesaplar. Pozitif **AİNS** de **AKRB** hesaplamasını etkiler. Yani **AAPS**, **AİNS** nedeniyle kullanıcının **KŞ**'sinin 20 mg/dL düşeceğini tahmin ederse ve KŞ bunun yerine sabit kalırsa, **AAPS** yine 1 g karbonhidratı emilmiş olarak hesaplar.

Karbonhidratlar ayrıca, kullanıcının **AAPS**'inde hangi duyarlılık algoritmasının seçildiğine bağlı olarak aşağıda anlatılan yöntemlerle de emilmiş sayılır.

## Karbonhidrat Duyarlılığı - Oref1

Emilmeyen karbonhidratlar belirlenen süreden sonra kesilir:

![Oref1](../images/cob_oref0_orange_II.png)

![Oref1 kesmesi ile AKRB grafiği](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
Yukarıdaki ekran görüntüsü daha eski bir **AAPS** sürümüne aittir. **AAPS** 4'te grafikler biraz farklı görünür, ama **AKRB** grafiği aynı bilgiyi gösterir.
```


## Karbonhidrat Duyarlılığı - WeightedAverage (Ağırlıklı Ortalama)

Emilim, belirlenen süreden sonra AKRB = 0 olacak şekilde hesaplanır:

![AAPS, WeightedAverage (Ağırlıklı Ortalama)](../images/cob_aaps2_orange_II.png)

**KŞ** sapmalarından hesaplanan değer yerine minimum karbonhidrat emilimi (min_5m_carbimpact) kullanılırsa, **AKRB** grafiğinde turuncu bir nokta görünür.

(CobCalculation-detection-of-wrong-cob-values)=
## Yanlış AKRB değerlerinin tespiti

Algoritma mevcut **AKRB** hesaplamasını yanlış bulursa ve kullanıcı önceki bir öğünden kalan **AKRB** ile bolus yapmak üzereyse, **AAPS** kullanıcıyı uyarır. Bu durumda, bolus sihirbazı kullanıldıktan sonra onay ekranında kullanıcıya ek bir ipucu gösterir.

### AAPS, yanlış AKRB değerlerini nasıl tespit eder?

__AAPS__ normalde karbonhidrat emilimini **KŞ** sapmalarından algılar. Kullanıcı karbonhidrat girmiş ama **AAPS** bunların tahmini emilimini **KŞ** sapmalarından algılayamıyorsa, emilimi hesaplamak için bunun yerine [min_5m_carbimpact](#Preferences-min_5m_carbimpact) yöntemini kullanır (‘yedek yöntem’, İngilizcesi ‘fallback’). Bu yöntem **KŞ** sapmalarını dikkate almadan yalnızca minimum karbonhidrat emilimini hesapladığı için yanlış AKRB değerlerine yol açabilir.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

Yukarıdaki ekran görüntüsünde, karbonhidrat emilimi zamanın %66'sında sapmalardan algılanan değer yerine min_5m_carbimpact ile hesaplanmıştır. Bu, kullanıcının algoritmanın hesapladığından daha az **AKRB**'ye sahip olmuş olabileceğini gösterir.

### Bu uyarı ile nasıl başa çıkılır?

- Tedaviyi iptal etmeyi düşünün - OK yerine ‘Vazgeç’e basın.
- Yaklaşan öğününüzü bolus sihirbazı ile **AKRB** işaretlemeden yeniden hesaplayın.
- Bir düzeltme bolusuna ihtiyacınız varsa, onu elle girin.
- Aşırı doz vermemeye ve insülini üst üste biriktirmemeye (stacking) dikkat edin!


### Algoritma neden AKRB'yi doğru algılamıyor?

Bunun nedeni şunlar olabilir:
- Kullanıcı karbonhidratları girerken miktarı fazla tahmin etmiş olabilir.
- Activity / exercise after your previous meal.
- IC'nin ayarlanması gerekiyor.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## Girilen karbonhidratların manuel olarak düzeltilmesi

Karbonhidratlar fazla veya eksik tahmin edildiyse, bu [burada](#screens-bolus-carbs) anlatıldığı gibi **Tedavi geçmişi** ekranından düzeltilebilir.


## Karbonhidrat düzeltme - Tedaviler'den bir karbonhidrat girdisi nasıl silinir


Hatalı bir karbonhidrat girdisi, **Tedavi geçmişi** ekranında silinerek düzeltilebilir. Bunun nedeni, kullanıcının karbonhidrat girdisini fazla veya eksik tahmin etmiş olması olabilir:

![Tedavi geçmişinden bir karbonhidrat girdisini silme](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. **AAPS** ana ekranındaki güncel **AKRB** ve **AİNS** değerlerine bakın ve not edin.
2. **Tedavi geçmişi**'ni açın (gezinme çekmecesi → *Tedavi geçmişi*), **Karbonhidrat ve bolus** sekmesi. Pompaya bağlı olarak karbonhidratlar insülinle birlikte tek satırda veya ayrı bir girdi olarak görünebilir (ör. Dana RS ile).
3. Hatalı karbonhidrat girdisine **uzun basın**. Liste, her satırda bir onay kutusu olan **seçim moduna** geçer ve girdi işaretlenir (yukarıda **1** ile gösterilmiştir). Silmek istediğiniz başka girdiler varsa onları da işaretleyin.
4. Üst çubuktaki **🗑 Sil** simgesine dokunun (**2** ile gösterilmiştir) ve onaylayın. Onay iletişim kutusu, tam olarak neyin silineceğini listeler.
5. **AAPS** ana ekranında **AKRB** değerine tekrar bakarak karbonhidratların başarıyla silindiğinden emin olun.
6. Karbonhidrat ve insülini birlikte içeren tek bir satır varsa, aynısını **AİNS** için de yapın.
7. Karbonhidratlar istendiği gibi silinmez ve bu bölümde anlatıldığı gibi ek karbonhidrat eklenirse, **AKRB** değeri çok yüksek olur ve bu, **AAPS**'in çok fazla insülin vermesine yol açabilir.
8. Doğru karbonhidrat miktarını **Karbonhidrat** iletişim kutusu (**Tedaviler** → **Karbonhidrat**) ile girin ve doğru olay zamanını ayarlayın.
9. Karbonhidrat ve insülini birlikte içeren tek bir satır varsa, kullanıcı insülin miktarını da yeniden eklemelidir. Doğru olay zamanını ayarladığınızdan emin olun ve yeni girdiyi onayladıktan sonra ana ekranda **AİNS** değerini kontrol edin.

