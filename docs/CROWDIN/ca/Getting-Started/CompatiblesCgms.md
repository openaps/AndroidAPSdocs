# CGM compatibles

Aquesta secció ofereix una visió general breu de tots els **CGM/FGM** compatibles amb **AAPS**.

*Consell*: si podeu veure les vostres dades de glucèmia a l'aplicació xDrip, podeu triar xDrip com a origen de **glucèmia** a **AAPS**.

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

* [Recomanacions generals](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Suavitzat de dades](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Configuració d'xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout com a origen de glucèmia](../CompatibleCgms/CgmNightscoutUpload.md): tot i que és possible fer servir Nightscout com a origen de glucèmia per al lliurament d'insulina en llaç tancat, **aquest mètode no es recomana**, perquè depèn d'una connexió estable de dades mòbils o de Wi-Fi. Això vol dir que **AAPS** només rebria les dades del **CGM** quan tingueu connexió amb el vostre lloc Nightscout. Per a una configuració més fiable, és molt millor fer servir un CGM que envia les dades localment des del receptor (com a la llista de més avall) a **AAPS**.

| CGM                                                                                                                         | [Orígens de glucèmia](#Config-Builder-bg-source) disponibles                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                                  | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)    |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                                | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)           |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                               | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                      |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                                  | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                               |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                                 | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                      |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                                   | [Juggluco](../CompatibleCgms/Juggluco.md) (amb xDrip o sense)                                                                                    |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                                   | [xDrip](../CompatibleCgms/xDrip.md) (només UE) o [Juggluco](../CompatibleCgms/Juggluco.md) (amb xDrip o sense)                                   |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                                      | [xDrip](../CompatibleCgms/xDrip.md) (Diabox envia les lectures a través de l'origen xDrip), Glimp o Tomato (MiaoMiao). Necessiten un transmissor |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                                 | [xDrip](../CompatibleCgms/xDrip.md), aplicació ESEL/Eversense modificada o Lector de notificacions                                               |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md) o MM640g + aplicació 600SeriesAndroidUploader                                                                |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                                     | Aplicació PocTech                                                                                                                                |
| Glunovo                                                                                                                     | Aplicació Glunovo                                                                                                                                |
| Intelligo                                                                                                                   | Aplicació Intelligo                                                                                                                              |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                               | Syai/Ottai (amb l'aplicació Ottai o Syai Tag)                                                                                                    |
| CGM Sibionics                                                                                                               | [Juggluco](../CompatibleCgms/Juggluco.md) o SI App (amb la SI App modificada o l'aplicació Sibionics)                                            |
| Sinocare                                                                                                                    | Sino App (amb la Sino App modificada)                                                                                                            |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                          | Aplicació MicroTech CGM                                                                                                                          |
| Instara                                                                                                                     | Instara (amb l'aplicació Instara)                                                                                                                |
| [CareSens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                                 | xDrip Companion App o [Juggluco](../CompatibleCgms/Juggluco.md)                                                                                  |
| Qualsevol CGM l'aplicació oficial del qual mostri el valor de glucèmia en una notificació (Dexcom, Medtronic, Eversense, …) | Lector de notificacions                                                                                                                          |

(GettingStarted-TrustedBGSource)=

## Fonts de dades de glucèmia de confiança

Els **CGM** aprovats per les autoritats per a sistemes comercials de llaç tancat híbrid es consideren fonts de dades de **glucèmia** de confiança.

Perquè **AAPS** els identifiqui correctament, l'aplicació que envia les lectures de **glucèmia** ha de poder donar informació del sensor.

Les fonts de dades de confiança permeten el lliurament de **SMB** en tot moment.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                              Aplicació CGM                                                                               |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (UE) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                Juggluco (**xDrip broadcast** sense xDrip, o **Patched Libre** amb xDrip)                                                 |
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
