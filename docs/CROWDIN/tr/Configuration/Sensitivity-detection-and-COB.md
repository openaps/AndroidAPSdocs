(Sensitivity-detection-and-COB-sensitivity-detection)=

# Duyarlılık algılama

## Duyarlılık algoritması

Şu anda 3 duyarlılık algılama modelimiz var:

* AAPS duyarlılık
* Ağırlıklı ortalama duyarlılık
* Oref1 duyarlılık

### AAPS duyarlılık

Duyarlılık, Oref1 ile aynı şekilde hesaplanır ancak geçmişe zaman belirtebilirsiniz. Minimum karbonhidrat emilimi, tercihlerden maksimum karbonhidrat emilim süresinden hesaplanır

### Ağırlıklı ortalama duyarlılık

Duyarlılık, sapmalardan ağırlıklı bir ortalama olarak hesaplanır. Geçmişe zaman belirtebilirsiniz. Daha yeni sapmalar daha yüksek ağırlığa sahiptir. Minimum karbonhidrat emilimi, tercihlerden maksimum karbonhidrat emilim süresinden hesaplanır. Bu algoritma, hassasiyet değişikliklerini takip etmede en hızlıdır.

### Oref1 duyarlılık

Duyarlılık, geçmişteki 8 saatlik verilerden veya 8 saatten az ise son set değişikliğinden itibaren hesaplanır. Karbonhidratlar (emilmemişse) tercihlerde belirtilen süreden sonra kesilir. Yalnızca Oref1 algoritması, bildirilmemiş öğünleri (UAM) destekler. Bu, tespit edilen bildirilmemiş öğünlü zamanların duyarlılık hesaplamasının dışında tutulduğu anlamına gelir. Yani UAM ile SMB kullanıyorsanız, düzgün çalışması için Oref1 algoritmasını seçmelisiniz. Daha fazla bilgi için [OpenAPS Oref1 dokümantasyonunu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) okuyun.

## Eşzamanlı karbonhidratlar

AAPS bu algoritmaları kullanırken Ağırlıklı ortalama ile Oref1 arasında önemli bir fark vardır. Oref eklentileri, aynı anda yalnızca bir öğünün bozulmasını bekler. Bu, 1. öğün tamamen bozulduktan sonra 2. öğünün bozulmaya başladığı anlamına gelir. AAPS+Ağırlıklı ortalama, karbonhidrat girdiğinizde hemen düşmeye başlar. Vücutta birden fazla öğün varsa, minimum karbonhidrat azalması öğün boyutuna ve maksimum emilim süresine göre ayarlanacaktır. Buna göre minimum emilim, Oref eklentilerine kıyasla daha yüksek olacaktır.