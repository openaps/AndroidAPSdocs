# AKRB hesaplaması

## How does AAPS calculate the COB value?

When carbs are entered as part of a meal or correction, AAPS adds them to the current carbs on board (COB). AAPS then absorbs (removes) carbs based on observed deviations to BG values. The rate of absorption depends on the carb sensitivity factor. This is not a profile value but is calculated as ISF/IC and is how many mg/dl 1g of carbs will raise your BG.

For example, if your profile ISF is 100 and your IC is 5, your CSF would be 20. For every 20 mg/dl your BG goes up, 1g of carbs are absorbed by AAPS. Positive IOB also effects this calculation. So, if AAPS expected your BG to go down by 20 mg/dl because of IOB and it instead stayed flat, it would also absorb 1g of carbs.

Carbs will also be absorbed via the methods described below based on what sensitivity algorithm is used.

### Oref1

Emilmeyen karbonhidratlar belirtilen süreden sonra kesilir.

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Ağırlıklı Ortalama

emilim, belirtilen süreden sonra `AKRB == 0` olarak hesaplanır

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, WheitedAverage
```

KŞ sapmalarından hesaplanan değer yerine minimum karbonhidrat emilimi (min_5m_carbimpact) kullanılırsa, AKRB grafiğinde turuncu bir nokta görünür.

(COB-calculation-detection-of-wrong-cob-values)=
## Yanlış AKRB değerlerinin tespiti

AAPS, bir önceki öğünden AKRB ile bolus yapmak üzereyseniz, algoritma mevcut AKRB hesaplamasının yanlış olabileceğini düşünür ve sizi uyarır. Bu durumda bolus sihirbazından sonraki onay ekranında size ek bir ipucu verecektir.

### How does AAPS detect wrong COB values?

Normalde AAPS, karbonhidrat emilimini KŞ sapmaları yoluyla tespit eder. Karbonhidratları girdiyseniz, ancak AAPS bunların KŞ sapmaları aracılığıyla tahmini emilimini göremezse, bunun yerine emilimi hesaplamak için [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) yöntemini kullanır. ('fallback' olarak adlandırılır). Bu yöntem, KŞ sapmalarını dikkate almadan yalnızca minimum karbonhidrat emilimini hesapladığı için yanlış AKRB değerlerine yol açabilir.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Yanlış AKRB değerine ilişkin ipucu
```

Yukarıdaki ekran görüntüsünde, karbonhidrat emiliminin %41'i sapmalardan tespit edilen değer yerine min_5m_carbimpact tarafından matematiksel olarak hesaplanmıştır.  Bu, belki de algoritma tarafından hesaplanandan daha az aktif karbonhidratınız olduğu anlamına gelir.

### Bu uyarı ile nasıl başa çıkılır?

- Tedaviyi iptal etmeyi düşünün - Tamam yerine İptal'e basın.
- Bolus sihirbazı ile AKRB'yi dikkate almadan (tiki kaldırıp hesaplamaya dahil etmeyerek) yaklaşan öğününüzü tekrar hesaplayın.
- Düzeltme bolusuna ihtiyacınız olduğundan, eminseniz manuel olarak girin.
- Her durumda aşırı doz almamaya dikkat edin!

### Algoritma neden AKRB'yi doğru algılamıyor?

- Belki karbonhidratları fazla tahmin ederek girdiniz.
- Bir önceki öğünden sonra aktivite / egzersiz yaptınız
- I:C oranının ayarlanması gerekiyor
- min_5m_carbimpact değeri yanlış (SMB ile 8, AMA ile 3 önerilir)

## Girilen karbonhidratların manuel olarak düzeltilmesi

Karbonhidratları gereğinden fazla veya az girdiyseniz, bunu [burada](Screenshots-carb-correction) açıklandığı gibi tedaviler sekmesi ve eylemler sekmesi aracılığıyla düzeltebilirsiniz.
