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

| CGM                                                                                                               | Dostępne [źródła BG](#Config-Builder-bg-source)                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                                                        | BYODA, [xDrip](../CompatibleCgms/xDrip.md) lub [Juggluco](../CompatibleCgms/Juggluco.md)                                              |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                                                      | [xDrip](../CompatibleCgms/xDrip.md) lub [Juggluco](../CompatibleCgms/Juggluco.md)                                                     |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                                                     | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                   |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                                                        | BYODA lub [xDrip](../CompatibleCgms/xDrip.md)                                                                                         |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md)                                                                                                   |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                                         | [Juggluco](../CompatibleCgms/Juggluco.md) (z xDrip lub bez niego)                                                                     |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                                         | [xDrip](../CompatibleCgms/xDrip.md) (tylko w UE) lub [Juggluco](../CompatibleCgms/Juggluco.md) (z xDrip lub bez niego)                |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                                            | [xDrip](../CompatibleCgms/xDrip.md) (Diabox wysyła swoje odczyty przez źródło xDrip), Glimp lub Tomato (MiaoMiao). Potrzebny nadajnik |
| [Eversense](../CompatibleCgms/Eversense.md)                                                                       | [xDrip](../CompatibleCgms/xDrip.md), zmodyfikowana aplikacja ESEL/Eversense (patched) lub Odczyt powiadomień                          |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                                             | [xDrip](../CompatibleCgms/xDrip.md) lub MM640g + aplikacja 600SeriesAndroidUploader                                                   |
| [PocTech](../CompatibleCgms/PocTech.md)                                                                           | Aplikacja PocTech                                                                                                                     |
| Glunovo                                                                                                           | Aplikacja Glunovo                                                                                                                     |
| Intelligo                                                                                                         | Aplikacja Intelligo                                                                                                                   |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)                                     | Syai/Ottai (z aplikacją Ottai lub Syai Tag)                                                                                           |
| Sibionics CGM                                                                                                     | [Juggluco](../CompatibleCgms/Juggluco.md) lub SI App (ze zmodyfikowaną aplikacją SI App (patched) lub aplikacją Sibionics)            |
| Sinocare                                                                                                          | Sino App (ze zmodyfikowaną aplikacją Sino App (patched))                                                                              |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                                                | Aplikacja MicroTech CGM                                                                                                               |
| Instara                                                                                                           | Instara (z aplikacją Instara)                                                                                                         |
| [CareSens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide                                       | Aplikacja xDrip Companion lub [Juggluco](../CompatibleCgms/Juggluco.md)                                                               |
| Każdy CGM, którego oficjalna aplikacja pokazuje wartość glukozy w powiadomieniu (Dexcom, Medtronic, Eversense, …) | Odczyt powiadomień                                                                                                                    |

(GettingStarted-TrustedBGSource)=

## Zaufane źródła danych BG

Systemy **CGM** dopuszczone przez urzędy do komercyjnych systemów hybrydowej zamkniętej pętli są uznawane za zaufane źródła danych **BG**.

Aby **AAPS** mógł je poprawnie rozpoznać, aplikacja, która wysyła odczyty **BG**, musi przekazywać informacje o sensorze.

Zaufane źródła danych pozwalają na podawanie **SMB** przez cały czas.

| Sensor           |                                                Aplikacja CGM                                                 |
| ---------------- |:------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                      BYODA, xDrip (**Direct, Native**)                                       |
| Dexcom G7        |               BYODA, xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)               |
| Dexcom ONE+      |                  xDrip (**Direct, Native**), </br>Juggluco (**xDrip broadcast** bez xDrip)                   |
| Dexcom ONE/Stelo |                                          xDrip (**Direct, Native**)                                          |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), </br>Juggluco (**xDrip broadcast** bez xDrip lub **Patched Libre** z xDrip) |
| Libre 2/2+/3/3+  |                    Juggluco (**xDrip broadcast** bez xDrip lub **Patched Libre** z xDrip)                    |
| Syai             |                                                Aplikacja Syai                                                |

**Uwaga: aplikacje xDrip Companion i tryby obserwującego (Follower, także 640G/Eversense) nie są zaufanymi źródłami danych.**
