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

| CGM                                                                                                | Kullanılabilen [KŞ kaynakları](#Config-Builder-bg-source)                                                                                     |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                       | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                         | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                          | [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip ile veya xDrip olmadan)                                                                      |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                          | [xDrip](../CompatibleCgms/xDrip.md) (yalnızca AB) veya [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip ile veya xDrip olmadan)               |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) (Diabox değerlerini xDrip kaynağı üzerinden gönderir), Glimp veya Tomato (MiaoMiao). Verici gerekli mi    |
| [Eversense](../CompatibleCgms/Eversense.md)                                                        | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense yamalı uygulaması veya Bildirim okuyucu                                                   |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                              | [xDrip](../CompatibleCgms/xDrip.md) veya MM640g + 600SeriesAndroidUploader uygulaması                                                         |
| [PocTech](../CompatibleCgms/PocTech.md)                                                            | PocTech uygulaması                                                                                                                            |
| Glunovo                                                                                            | Glunovo uygulaması                                                                                                                            |
| Intelligo                                                                                          | Intelligo uygulaması                                                                                                                          |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                      | Syai/Ottai (Ottai veya Syai Tag uygulamasıyla)                                                                                                |
| Sibionics CGM                                                                                      | [Juggluco](../CompatibleCgms/Juggluco.md) veya SI App (yamalı SI App veya Sibionics uygulamasıyla)                                            |
| Sinocare                                                                                           | Sino App (yamalı Sino App ile)                                                                                                                |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                 | MicroTech CGM uygulaması                                                                                                                      |
| Instara                                                                                            | Instara (Instara uygulamasıyla)                                                                                                               |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                        | xDrip Companion App veya [Juggluco](../CompatibleCgms/Juggluco.md)                                                                            |
| Resmi uygulaması glikoz değerini bir bildirimde gösteren her CGM (Dexcom, Medtronic, Eversense, …) | Bildirim okuyucu                                                                                                                              |

(GettingStarted-TrustedBGSource)=

## Güvenilir KŞ veri kaynakları

Ticari hibrit kapalı döngü sistemleri için resmi onay almış **CGM**'ler güvenilir **KŞ** veri kaynakları olarak kabul edilir.

**AAPS**'in bunları doğru tanıyabilmesi için **KŞ** değerlerini gönderen uygulamanın sensör bilgisini de iletebilmesi gerekir.

Güvenilir veri kaynakları her zaman **SMB** verilmesine izin verir.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                              CGM uygulaması                                                                              |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (AB) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                              Juggluco (xDrip olmadan **xDrip broadcast** veya xDrip ile **Patched Libre**)                                               |
| Syai, Ottai     |                      Syai or Ottai app (**Syai/Ottai** source or **Notification Reader**), <br/>Juggluco (**xDrip broadcast** without xDrip)                       |

**Note: xDrip Companion apps, Medtronic, Eversense and all other sensors are not trusted data sources.**

```{admonition} Online BG sources are not recommended for closed looping
:class: warning
Some sources that need an internet connection can also be trusted:
- xDrip **Dexcom Share follower** (any Dexcom sensor)
- the **Nightscout** BG source (**AAPSClient**, or **AAPS** following your Nightscout site), when the uploader names one of the sensors above

These sources are **not recommended** for a closed loop. When your phone or the CGM uploader loses its connection, **AAPS** receives no **BG** readings and cannot loop. Readings also arrive late, after the delay of the cloud service. Use a CGM app that sends its readings to **AAPS** directly on the phone (as listed in the table above) whenever possible.

Other follower modes (xDrip Nightscout or Web follower, CareLink follower, Juggluco Nightscout) are never trusted.
```
