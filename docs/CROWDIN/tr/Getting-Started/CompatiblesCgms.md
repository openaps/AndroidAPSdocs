# Uyumlu CGM'ler

Bu bölüm, **AAPS** ile uyumlu tüm **CGM/FGM**'lere kısa bir genel bakış sunar.

*İpucu*: Glikoz verilerinizi xDrip uygulamasında görebiliyorsanız, **AAPS**'te **KŞ** kaynağı olarak xDrip'i seçebilirsiniz.

<!-- List of hidden pages to avoid overcrowding the table of contents -->

```{toctree}
:hidden:

../CompatibleCgms/GeneralCGMRecommendation.md
../CompatibleCgms/SmoothingBloodGlucoseData.md
../CompatibleCgms/xDrip.md
../CompatibleCgms/CgmNightscoutUpload.md
../CompatibleCgms/DexcomG6.md
../CompatibleCgms/DexcomG7.md
../CompatibleCgms/Juggluco.md
../CompatibleCgms/Libre1.md
../CompatibleCgms/Libre2.md
../CompatibleCgms/Libre2MinimalL00per.md
../CompatibleCgms/Libre3.md
../CompatibleCgms/Eversense.md
../CompatibleCgms/MM640g.md
../CompatibleCgms/PocTech.md
../CompatibleCgms/OttaiM8.md
../CompatibleCgms/SyaiTagX1.md
../CompatibleCgms/Caresens.md
```

* [Genel öneriler](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Data Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip ayarları](../CompatibleCgms/xDrip.md)
* [KŞ kaynağı olarak Nightscout](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout'u kapalı döngü insülin iletimi için KŞ kaynağı olarak kullanmak mümkündür. Ancak bu yöntem sabit bir mobil veri veya Wi-Fi bağlantısına bağlı olduğu için **önerilmez**. Bu, **CGM** verilerinizin **AAPS**'e yalnızca Nightscout sitenize çevrimiçi bağlantınız olduğunda ulaşacağı anlamına gelir. Daha güvenilir bir kurulum için, alıcıdan **AAPS**'e yerel yayın yapan bir CGM kullanmak (aşağıda listelenenler gibi) çok daha iyi bir seçenektir.

| CGM                                                                                                | Kullanılabilen [KŞ kaynakları](#Config-Builder-bg-source)                                                                                  |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md) veya [Juggluco](../CompatibleCgms/Juggluco.md)                                                  |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                       | [xDrip](../CompatibleCgms/xDrip.md) veya [Juggluco](../CompatibleCgms/Juggluco.md)                                                         |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                        |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                         | BYODA veya [xDrip](../CompatibleCgms/xDrip.md)                                                                                             |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                        |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip ile veya xDrip olmadan)                                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) (yalnızca AB) veya [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip ile veya xDrip olmadan)            |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) (Diabox değerlerini xDrip kaynağı üzerinden gönderir), Glimp veya Tomato (MiaoMiao). Verici gerekli mi |
| [Eversense](../CompatibleCgms/Eversense.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense yamalı uygulaması veya Bildirim okuyucu                                                |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                              | [xDrip](../CompatibleCgms/xDrip.md) veya MM640g + 600SeriesAndroidUploader uygulaması                                                      |
| [PocTech](../CompatibleCgms/PocTech.md)                                                            | PocTech uygulaması                                                                                                                         |
| Glunovo                                                                                            | Glunovo uygulaması                                                                                                                         |
| Intelligo                                                                                          | Intelligo uygulaması                                                                                                                       |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                      | Syai/Ottai (Ottai veya Syai Tag uygulamasıyla)                                                                                             |
| Sibionics CGM                                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) veya SI App (yamalı SI App veya Sibionics uygulamasıyla)                                         |
| Sinocare                                                                                           | Sino App (yamalı Sino App ile)                                                                                                             |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                 | MicroTech CGM uygulaması                                                                                                                   |
| Instara                                                                                            | Instara (Instara uygulamasıyla)                                                                                                            |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                        | xDrip Companion App veya [Juggluco](../CompatibleCgms/Juggluco.md)                                                                         |
| Resmi uygulaması glikoz değerini bir bildirimde gösteren her CGM (Dexcom, Medtronic, Eversense, …) | Bildirim okuyucu                                                                                                                           |

(GettingStarted-TrustedBGSource)=

## Güvenilir KŞ veri kaynakları

Ticari hibrit kapalı döngü sistemleri için resmi onay almış **CGM**'ler güvenilir **KŞ** veri kaynakları olarak kabul edilir.

**AAPS**'in bunları doğru tanıyabilmesi için **KŞ** değerlerini gönderen uygulamanın sensör bilgisini de iletebilmesi gerekir.

Güvenilir veri kaynakları her zaman **SMB** verilmesine izin verir.

| Sensor           |                                                      CGM uygulaması                                                       |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                             BYODA, xDrip (**Direct, Native**)                                             |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), <br/>Juggluco (xDrip olmadan **xDrip broadcast**)                 |
| Dexcom ONE+      |                    xDrip (**Direct, Native**), <br/>Juggluco (xDrip olmadan **xDrip broadcast**)                    |
| Dexcom ONE/Stelo |                                                xDrip (**Direct, Native**)                                                 |
| Libre 2/2+ (AB)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (xDrip olmadan **xDrip broadcast** veya xDrip ile **Patched Libre**) |
| Libre 2/2+/3/3+  |                       Juggluco (xDrip olmadan **xDrip broadcast** veya xDrip ile **Patched Libre**)                       |
| Syai             |                                                      Syai uygulaması                                                      |

**Not: xDrip Companion uygulamaları ve takipçi modları (640G/Eversense dahil) güvenilir veri kaynağı değildir.**
