# 호환 CGM

이 섹션에서는 **AAPS**와 호환되는 모든 **CGM/FGM**을 간단히 소개합니다.

*팁*: xDrip 앱에서 혈당 데이터를 표시할 수 있다면, **AAPS**에서 xDrip을 **혈당** 출처로 선택할 수 있습니다.

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

* [일반 권고 사항](../CompatibleCgms/GeneralCGMRecommendation.md)
* [데이터 평활화](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [xDrip 설정](../CompatibleCgms/xDrip.md)
* [혈당 출처로 Nightscout 사용](../CompatibleCgms/CgmNightscoutUpload.md): Nightscout를 폐쇄 루프 인슐린 주입의 혈당 출처로 사용할 수는 있지만, 안정적인 모바일 데이터 또는 Wi-Fi 연결에 의존하므로 **이 방법은 권장하지 않습니다**. 즉, Nightscout 사이트에 온라인으로 연결되어 있을 때만 **AAPS**가 **CGM** 데이터를 받습니다. 더 안정적으로 구성하려면, 수신기에서 **AAPS**로 로컬 브로드캐스트를 보내는 CGM(아래 목록 참조)을 사용하는 것이 훨씬 좋은 방법입니다.

| CGM                                                                           | 사용 가능한 [혈당 출처](#Config-Builder-bg-source)                                                                    |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                    | BYODA, [xDrip](../CompatibleCgms/xDrip.md) 또는 [Juggluco](../CompatibleCgms/Juggluco.md)                      |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                  | [xDrip](../CompatibleCgms/xDrip.md) 또는 [Juggluco](../CompatibleCgms/Juggluco.md)                             |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                 | [xDrip](../CompatibleCgms/xDrip.md)                                                                          |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                    | BYODA 또는 [xDrip](../CompatibleCgms/xDrip.md)                                                                 |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                   | [xDrip](../CompatibleCgms/xDrip.md)                                                                          |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                     | [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip 사용 여부와 관계없이)                                                |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                     | [xDrip](../CompatibleCgms/xDrip.md) (EU 전용) 또는 [Juggluco](../CompatibleCgms/Juggluco.md) (xDrip 사용 여부와 관계없이) |
| [Libre 1](../CompatibleCgms/Libre1.md)                                        | [xDrip](../CompatibleCgms/xDrip.md) (Diabox는 xDrip 출처를 통해 값을 보냅니다), Glimp 또는 Tomato (MiaoMiao). 트랜스미터 필요     |
| [Eversense](../CompatibleCgms/Eversense.md)                                   | [xDrip](../CompatibleCgms/xDrip.md), ESEL/Eversense 패치 앱 또는 알림 읽기                                            |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                         | [xDrip](../CompatibleCgms/xDrip.md) 또는 MM640g + 600SeriesAndroidUploader 앱                                   |
| [PocTech](../CompatibleCgms/PocTech.md)                                       | PocTech 앱                                                                                                    |
| Glunovo                                                                       | Glunovo 앱                                                                                                    |
| Intelligo                                                                     | Intelligo 앱                                                                                                  |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md) | Syai/Ottai (Ottai 앱 또는 Syai Tag 앱 사용)                                                                        |
| Sibionics CGM                                                                 | [Juggluco](../CompatibleCgms/Juggluco.md) 또는 SI 앱 (패치된 SI 앱 또는 Sibionics 앱 사용)                               |
| Sinocare                                                                      | Sino 앱 (패치된 Sino 앱 사용)                                                                                       |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)            | MicroTech CGM 앱                                                                                              |
| Instara                                                                       | Instara (Instara 앱 사용)                                                                                       |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide   | xDrip 동반 앱(Companion App) 또는 [Juggluco](../CompatibleCgms/Juggluco.md)                                       |
| 공식 앱이 알림에 혈당 값을 표시하는 모든 CGM (Dexcom, Medtronic, Eversense, …)                 | 알림 읽기                                                                                                        |

(GettingStarted-TrustedBGSource)=

## 신뢰할 수 있는 혈당 데이터 소스

상용 하이브리드 폐쇄 루프 시스템용으로 규제 승인을 받은 **CGM**은 신뢰할 수 있는 **혈당** 데이터 소스로 간주됩니다.

**AAPS**가 이를 올바르게 식별하려면, **혈당** 값을 보내는 앱이 센서 정보를 제공할 수 있어야 합니다.

신뢰할 수 있는 데이터 소스에서는 항상 **SMB** 주입이 허용됩니다.

| Sensor           |                                                        CGM 앱                                                        |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |                BYODA, xDrip (**Direct, Native**), <br/>Juggluco (xDrip 없이 **xDrip broadcast**)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), <br/>Juggluco (xDrip 없이 **xDrip broadcast**)                    |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (xDrip 없이 **xDrip broadcast**, 또는 xDrip과 함께 **Patched Libre**) |
| Libre 2/2+/3/3+  |                       Juggluco (xDrip 없이 **xDrip broadcast**, 또는 xDrip과 함께 **Patched Libre**)                       |
| Syai             |                                                       Syai 앱                                                        |

**참고: xDrip 동반 앱(Companion App)과 팔로워(Follower) 모드(640G/Eversense 포함)는 신뢰할 수 있는 데이터 소스가 아닙니다.**
