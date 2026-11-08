# MCG compatibles

Esta sección da un breve resumen de todos los **MCG/FGM** compatibles con **AAPS**.

*Consejo*: Si puedes ver tus datos de glucosa en la app xDrip, puedes elegir xDrip como fuente de **glucosa** en **AAPS**.

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

* [Recomendaciones generales](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Suavizado de datos](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Ajustes de xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout como fuente de glucosa](../CompatibleCgms/CgmNightscoutUpload.md): Es posible usar Nightscout como fuente de glucosa para la administración de insulina en lazo cerrado, pero **este método no se recomienda**, porque depende de una conexión estable de datos móviles o wifi. Esto significa que **AAPS** solo recibiría los datos de tu **MCG** cuando tengas conexión a internet con tu sitio de Nightscout. Para una configuración más fiable, es mucho mejor usar un MCG que envíe los datos localmente desde el receptor a **AAPS** (como en la lista de abajo).

| MCG                                                                                                              | [Fuentes de glucosa](#Config-Builder-bg-source) disponibles                                                                                   |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                    | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                       | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                        | [Juggluco](../CompatibleCgms/Juggluco.md) (con o sin xDrip)                                                                                   |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                        | [xDrip](../CompatibleCgms/xDrip.md) (solo en la UE) o [Juggluco](../CompatibleCgms/Juggluco.md) (con o sin xDrip)                             |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                           | [xDrip](../CompatibleCgms/xDrip.md) (Diabox envía sus valores a través de la fuente xDrip), Glimp o Tomato (MiaoMiao). Necesita transmisor    |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), app ESEL/Eversense parcheada o Lector de notificaciones                                                  |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                            | [xDrip](../CompatibleCgms/xDrip.md) o MM640g + app 600SeriesAndroidUploader                                                                   |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                          | App PocTech                                                                                                                                   |
| Glunovo                                                                                                          | App Glunovo                                                                                                                                   |
| Intelligo                                                                                                        | App Intelligo                                                                                                                                 |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                    | Syai/Ottai (con la app Ottai o Syai Tag)                                                                                                      |
| MCG Sibionics                                                                                                    | [Juggluco](../CompatibleCgms/Juggluco.md) o Aplicación Sibionic SI (con la app SI parcheada o la app Sibionics)                               |
| Sinocare                                                                                                         | Aplicación Sino (con la app Sino parcheada)                                                                                                   |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                               | Aplicación MicroTech MCG                                                                                                                      |
| Instara                                                                                                          | Instara (con la app Instara)                                                                                                                  |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                      | App complementaria de xDrip o [Juggluco](../CompatibleCgms/Juggluco.md)                                                                       |
| Cualquier MCG cuya app oficial muestre el valor de glucosa en una notificación (Dexcom, Medtronic, Eversense, …) | Lector de notificaciones                                                                                                                      |

(GettingStarted-TrustedBGSource)=

## Fuentes de datos de glucosa de confianza

Los **MCG** aprobados por las autoridades para sistemas comerciales de lazo cerrado híbrido se consideran fuentes de datos de **glucosa** de confianza.

Para que **AAPS** los identifique correctamente, la app que envía los valores de **glucosa** debe poder dar información sobre el sensor.

Las fuentes de datos de confianza permiten administrar **SMB** en todo momento.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                               App del MCG                                                                                |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (UE) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                 Juggluco (**xDrip broadcast** sin xDrip, o **Patched Libre** con xDrip)                                                  |
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
