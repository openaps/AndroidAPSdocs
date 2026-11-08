# Kompatybilne systemy CGM

Ta sekcja daje krótki przegląd wszystkich systemów **CGM/FGM** zgodnych z **AAPS**.

*Wskazówka*: Jeśli możesz wyświetlić swoje dane glukozy w aplikacji xDrip, możesz wybrać xDrip jako źródło **BG** w **AAPS**.

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

* [Ogólne zalecenia](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Wygładzanie danych](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [Ustawienia xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout jako źródło BG](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout można użyć jako źródła BG w zamkniętej pętli, ale **ta metoda nie jest zalecana**, ponieważ zależy od stabilnego połączenia przez dane komórkowe lub Wi-Fi. Oznacza to, że **AAPS** otrzyma Twoje dane z **CGM** tylko wtedy, gdy masz połączenie z internetem i ze swoją stroną Nightscout. Bardziej niezawodne rozwiązanie to CGM, który wysyła dane lokalnie z odbiornika (jak podano niżej) do **AAPS**. To dużo lepsza opcja.

| CGM                                                                                                               | Dostępne [źródła BG](#Config-Builder-bg-source)                                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader) |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md), [Juggluco](../CompatibleCgms/Juggluco.md) or [Notification Reader](#DexcomG7-notification-reader)        |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG7-notification-reader)                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                            |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md) or [Notification Reader](#DexcomG6-notification-reader)                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                         | [Juggluco](../CompatibleCgms/Juggluco.md) (z xDrip lub bez niego)                                                                             |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (tylko w UE) lub [Juggluco](../CompatibleCgms/Juggluco.md) (z xDrip lub bez niego)                        |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) (Diabox wysyła swoje odczyty przez źródło xDrip), Glimp lub Tomato (MiaoMiao). Potrzebny nadajnik         |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), zmodyfikowana aplikacja ESEL/Eversense (patched) lub Odczyt powiadomień                                  |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) lub MM640g + aplikacja 600SeriesAndroidUploader                                                           |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                           | Aplikacja PocTech                                                                                                                             |
| Glunovo                                                                                                           | Aplikacja Glunovo                                                                                                                             |
| Intelligo                                                                                                         | Aplikacja Intelligo                                                                                                                           |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                     | Syai/Ottai (z aplikacją Ottai lub Syai Tag)                                                                                                   |
| Sibionics CGM                                                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) lub SI App (ze zmodyfikowaną aplikacją SI App (patched) lub aplikacją Sibionics)                    |
| Sinocare                                                                                                          | Sino App (ze zmodyfikowaną aplikacją Sino App (patched))                                                                                      |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                | Aplikacja MicroTech CGM                                                                                                                       |
| Instara                                                                                                           | Instara (z aplikacją Instara)                                                                                                                 |
| [CareSens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                       | Aplikacja xDrip Companion lub [Juggluco](../CompatibleCgms/Juggluco.md)                                                                       |
| Każdy CGM, którego oficjalna aplikacja pokazuje wartość glukozy w powiadomieniu (Dexcom, Medtronic, Eversense, …) | Odczyt powiadomień                                                                                                                            |

(GettingStarted-TrustedBGSource)=

## Zaufane źródła danych BG

Systemy **CGM** dopuszczone przez urzędy do komercyjnych systemów hybrydowej zamkniętej pętli są uznawane za zaufane źródła danych **BG**.

Aby **AAPS** mógł je poprawnie rozpoznać, aplikacja, która wysyła odczyty **BG**, musi przekazywać informacje o sensorze.

Zaufane źródła danych pozwalają na podawanie **SMB** przez cały czas.

**AAPS** checks the sensor named in the latest **BG** reading it received, whichever **BG** source delivered it. After you change your **BG** source, the **SMB** "always" settings appear only once the first reading from the new source has arrived.

| Sensor          |                                                                              Aplikacja CGM                                                                               |
| --------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6       |                             BYODA, xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                              |
| Dexcom G7       | BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader)) |
| Dexcom ONE+     |    xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** without xDrip), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))     |
| Dexcom ONE      |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG6-notification-reader))                                 |
| Dexcom Stelo    |                                 xDrip (**Direct, Native**), <br/>Dexcom app ([Notification Reader](#DexcomG7-notification-reader))                                 |
| Libre 2/2+ (EU) |                                  xDrip (OOP2), <br/>Juggluco (**xDrip broadcast** without xDrip, or **Patched Libre** with xDrip)                                  |
| Libre 2/2+/3/3+ |                                                  Juggluco (**xDrip broadcast** bez xDrip lub **Patched Libre** z xDrip)                                                  |
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
