(Sensitivity-detection-and-COB-sensitivity-detection)=

# Duyarlılık algılama

## Duyarlılık algoritması

**AAPS** şu anda 3 duyarlılık algılama modeli sunar:

* AAPS duyarlılık
* Ağırlıklı ortalama duyarlılık
* Oref1 duyarlılık

### AAPS duyarlılık

Duyarlılık, Oref1'deki ile aynı şekilde hesaplanır, ancak geriye doğru bakılacak zaman aralığını belirleyebilirsiniz. Minimum karbonhidrat emilimi, tercihlerde ayarlanan maksimum karbonhidrat emilim süresinden hesaplanır.

### Ağırlıklı ortalama duyarlılık

Duyarlılık, sapmaların ağırlıklı ortalaması olarak hesaplanır. Geriye doğru bakılacak zaman aralığını belirleyebilirsiniz. Daha yeni sapmaların ağırlığı daha yüksektir. Minimum karbonhidrat emilimi, tercihlerde ayarlanan maksimum karbonhidrat emilim süresinden hesaplanır. Bu algoritma, duyarlılık değişikliklerini en hızlı izleyen algoritmadır.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Oref1 duyarlılık

Duyarlılık son 8 saatin verilerinden veya son kanül değişimi 8 saatten daha yakın bir zamanda yapıldıysa son kanül değişiminden bu yana olan verilerden hesaplanır. Karbonhidratlar (emilmediyse) tercihlerde belirtilen süreden sonra kesilir. Yalnızca Oref1 algoritması, bildirilmemiş öğünleri (UAM) destekler. Bu, UAM algılanan zamanların duyarlılık hesaplamasının dışında tutulduğu anlamına gelir. Bu nedenle SMB'yi UAM ile kullanıyorsanız, düzgün çalışması için Oref1 algoritmasını seçmeniz gerekir. UAM hakkında daha fazla bilgi için [Süper Mikro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb) bölümüne bakın.

Önerilen seçenek Oref1'dir: UAM'yi algılayabilen ve daha yeni algoritma olan [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) ile çalışabilen tek seçenektir.

## Eşzamanlı karbonhidratlar

Birkaç öğün üst üste geldiğinde, bir yanda AAPS duyarlılık ve WeightedAverage algoritmaları, diğer yanda Oref1 arasında önemli bir fark vardır.

* Oref1 aynı anda yalnızca bir öğünün emildiğini varsayar: ikinci öğün, ilk öğün tamamen emildikten sonra emilmeye başlar.
* AAPS duyarlılık ve WeightedAverage, karbonhidratları girdiğiniz anda emilime başlar. Vücutta birden fazla öğün varsa, minimum karbonhidrat emilimi öğünün büyüklüğüne ve maksimum emilim süresine göre ayarlanır. Buna göre minimum emilim, Oref1'e kıyasla daha yüksek olur.