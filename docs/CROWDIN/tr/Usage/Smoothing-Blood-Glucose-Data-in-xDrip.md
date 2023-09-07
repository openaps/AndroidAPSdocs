(Smoothing-Blood-Glucose-Data-in-xDrip-smoothing-blood-glucose-data)=

# Kan şekeri verilerini yumuşatma

KŞ verileri atlamalı/gürültülü ise, AAPS insülini yanlış dozlayarak yüksek veya düşük KŞ'ne sebep olabilir. Bu nedenle, sorun çözülene kadar döngüyü devre dışı bırakmak önemlidir. CGM'nize bağlı olarak, bu tür sorunlar CGM'in yapılandırmasından veya sensör/set sorunlarından kaynaklanabilir. Bunu çözmek için CGM sensörünüzü değiştirmeniz gerekebilir.

Bazı CGM sistemleri, okumalardaki gürültü seviyesini tespit etmek için dahili algoritmalara sahiptir ve AndroidAPS, KŞ verileri çok güvenilmezse SMB'leri vermekten kaçınmak için bu bilgiyi kullanabilir. Ancak, bazı CGM'ler bu verileri iletmez ve bu KŞ kaynakları için 'SMB'yi her zaman etkinleştir' ve 'Karbonhidrattan sonra SMB'yi etkinleştir' güvenlik nedenleriyle devre dışı bırakılır.

## Dexcom sensörleri

### Kendi Dexcom Uygulamanızı Oluşturun (BYODA)

[BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) kullanırken KŞ verileriniz sorunsuz ve tutarlıdır. Ayrıca Dexcom'un geri-yumuşatma özelliğinden yararlanabilirsiniz. Gürültü seviyesi verileri AAPS ile paylaşıldığı için SMB'lerin kullanımında herhangi bir kısıtlama yoktur.

### Dexcom G6 veya Dexcom ONE ile xDrip+

Gürültü düzeyi verileri ve yumuşak KŞ okumaları, yalnızca xDrip+ [yerel modunu](https://navid200.github.io/xDrip/docs/Native-Algorithm) kullanıyorsanız AAPS ile paylaşılır. Yerel modu kullanırken, SMB'lerin kullanımında herhangi bir kısıtlama yoktur.

### Dexcom G6 veya Dexcom ONE ile xDrip+ Tamamlayıcı Mod

Gürültü düzeyi verileri, bu yöntem kullanılarak AAPS ile paylaşılmaz. Bu nedenle 'SMB'yi her zaman etkinleştir' ve 'Karbonhidrattan sonra SMB'yi etkinleştir' devre dışı bırakılır.

## Freestyle Libre sensörleri

### FreeStyle Libre ile xDrip+

FreeStyle Libre sistemlerinin hiçbiri (FSL1, FSL2 veya FSL3), okumalarda algılanan gürültü seviyesi hakkında herhangi bir bilgi yayınlamaz ve bu nedenle FreeStyle Libre kullanan tüm kurulumlar için 'SMB'yi her zaman etkinleştir' ve 'Karbonhidrattan sonra SMB'yi etkinleştir' devre dışı bırakılır.

Ek olarak, birçok kişi FreeStyle Libre'nin genellikle gürültülü veriler ürettiğini bildirmiştir. xDrip+'ta bu konuda yardımcı olacak birkaç seçenek vardır:

**Pürüzsüz Sensör Gürültüsü.** xDrip Ayarları > xDrip Ekran Ayarları'nda, smooth sensor noise "Pürüzsüz Sensör Gürültüsü"nün açık olduğundan emin olun. Bu, gürültülü verilerde yumuşatma uygulamaya çalışır.

**Pürüzsüz Sensör Gürültüsü (Ultra Duyarlı).** xDrip+'ta hala parazitli veriler görüyorsanız, Pürüzsüz Sensör Gürültüsü (Ultra Duyarlı) ayarını kullanarak daha agresif yumuşatma uygulayabilirsiniz. Bu, algılanan gürültünün çok düşük seviyelerinde bile yumuşatma uygulamaya çalışacaktır. Bunu yapmak için önce xDrip+'ta [mühendislik modunu](Enabling-Engineering-Mode-in-xDrip.md) etkinleştirin. Ardından Ayarlar > xDrip+ Ekran Ayarları'na gidin ve Pürüzsüz Sensör Gürültüsü'nü (Ultra Duyarlı) açın.