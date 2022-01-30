# Kan şekeri verilerini yumuşatma

KŞ verileri atlamalı/gürültülü ise, AAPS insülini yanlış dozlayarak yüksek veya düşük KŞ'ne sebep olabilir. Bu nedenle, sorun çözülene kadar döngüyü devre dışı bırakmak önemlidir. CGM'nize bağlı olarak, bu tür sorunlar CGM'in yapılandırmasından veya sensör/set sorunlarından kaynaklanabilir. Bunu çözmek için CGM sensörünüzü değiştirmeniz gerekebilir. 'SMB'yi her zaman etkinleştir' ve 'Karbonhidrattan sonra SMB'yi etkinleştir' gibi bazı özellikler yalnızca iyi filtrelemeli bir KŞ kaynağıyla kullanılabilir.

## Dexcom sensörleri

### Kendi Dexcom Uygulamanızı Oluşturun (BYODA)

[BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app) kullanırken KŞ verileriniz sorunsuz ve tutarlıdır. Ayrıca Dexcom'un geri-yumuşatma özelliğinden yararlanabilirsiniz. SMB kullanımında herhangi bir kısıtlama yoktur.

### Dexcom G5 veya G6 ile xDrip+

Düzgün veri, yalnızca xDrip+ G5 'OB1 toplayıcısı yerel modda' kullanıyorsanız iletilir.

### Dexcom G5 Uygulaması (yamalı)

Dexcom G5 Uygulamasını (yamalı) kullanırken BG verileriniz sorunsuz ve tutarlıdır. SMB kullanımında herhangi bir kısıtlama yoktur.

## Freestyle Libre sensörleri

### Freestyle Libre ile xDrip+

Şimdiye kadar Freestyle Libre değerleri için veri kaynağınız olarak xDrip+ kullanırken, KŞ değerleri yeterince düzgün olmadığından SMB içinde 'SMB'yi her zaman etkinleştir' ve 'Karbonhidrattan sonra SMB'yi etkinleştir'i aktive edemezsiniz. Bunun dışında, verilerdeki gürültüyü azaltmaya yardımcı olmak için yapabileceğiniz birkaç şey var.

**Pürüzsüz Sensör Gürültüsü.** xDrip Ayarları > xDrip Ekran Ayarları'nda, smooth sensor noise "Pürüzsüz Sensör Gürültüsü"nün açık olduğundan emin olun. This attempts to apply smoothing to noisy data.

**Smooth Sensor Noise (Ultrasensitive).** If you are still seeing noisy data in xDrip+ you can apply more aggressive smoothing using the Smooth Sensor Noise (Ultrasensitive) setting. This will attempt to apply smoothing even on very low levels of detected noise. To do this, first enable [engineering mode](Enabling-Engineering-Mode-in-xDrip.md) in xDrip+. Then navigate to Settings > xDrip+ Display Settings and turn on Smooth Sensor Noise (Ultrasensitive).