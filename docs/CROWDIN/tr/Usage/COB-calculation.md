# AKRB hesaplaması

## AndroidAPS AKRB değerini nasıl hesaplar?

### Oref1

Emilmeyen karbonhidratlar belirtilen süreden sonra kesilir.

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### AAPS, Ağırlıklı Ortalama

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, WheitedAverage
```

KŞ sapmalarından hesaplanan değer yerine minimum karbonhidrat emilimi (min_5m_carbimpact) kullanılırsa, AKRB grafiğinde turuncu bir nokta görünür.

(detection-of-wrong-cob-values)=
## Yanlış AKRB değerlerinin tespiti

AAPS, bir önceki öğünden AKRB ile bolus yapmak üzereyseniz, algoritma mevcut AKRB hesaplamasının yanlış olabileceğini düşünür ve sizi uyarır. Bu durumda bolus sihirbazından sonraki onay ekranında size ek bir ipucu verecektir.

### AndroidAPS, yanlış AKRB değerlerini nasıl tespit eder?

Normalde AAPS, karbonhidrat emilimini KŞ sapmaları yoluyla tespit eder. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). Bu yöntem, KŞ sapmalarını dikkate almadan yalnızca minimum karbonhidrat emilimini hesapladığı için yanlış AKRB değerlerine yol açabilir.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Yanlış AKRB değerine ilişkin ipucu
```

Yukarıdaki ekran görüntüsünde, karbonhidrat emiliminin %41'i sapmalardan tespit edilen değer yerine min_5m_carbimpact tarafından matematiksel olarak hesaplanmıştır.  Bu, belki de algoritma tarafından hesaplanandan daha az aktif karbonhidratınız olduğu anlamına gelir.

### Bu uyarı ile nasıl başa çıkılır?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### Algoritma neden AKRB'yi doğru algılamıyor?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## Girilen karbonhidratların manuel olarak düzeltilmesi

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](../Getting-Started/Screenshots.md#carb-correction).
