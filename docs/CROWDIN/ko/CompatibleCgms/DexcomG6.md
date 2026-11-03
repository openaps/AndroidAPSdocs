# Dexcom G6 및 ONE

## 우선적인 기본 사항

-   일반적인 CGM 위생 및 센서 부착 권고 사항은 [여기](../CompatibleCgms/GeneralCGMRecommendation.md)를 따르십시오.

## G6 및 ONE으로 루프를 사용할 때의 일반적인 팁

- 최신 트랜스미터는 Firefly라고 부릅니다. 트랜스미터를 분리하지 않으면 센서를 다시 시작할 수 없으며, 트랜스미터 자체는 초기화할 수 없습니다. 또한 이 트랜스미터는 원시 데이터를 만들지 않습니다.

- 센서를 다시 시작하는 경우, 보정할 준비를 하고 값의 변동을 잘 살펴보십시오.

- 공장 보정을 사용하는 G6/ONE을 미리 삽입하면 결과값에 변동이 생길 수 있습니다. 센서를 미리 삽입하는 경우, 가장 좋은 결과를 얻으려면 아마 센서를 보정해야 할 것입니다.

자세한 내용은 Tim Street가 [www.diabettech.com](https://www.diabettech.com)에 게시한 [글](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/)을 읽어 보십시오.

## xDrip과 함께 G6 또는 ONE을 사용하는 경우

- 아직 설정하지 않았다면 [xDrip](https://github.com/NightscoutFoundation/xDrip)을 다운로드하고 [xDrip 설정 페이지](../CompatibleCgms/xDrip.md)에 따라 설정을 조정하십시오.
- [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 xDrip을 선택하십시오.
- Dexcom G6 및 ONE 트랜스미터는 Dexcom 수신기(또는 t:slim 펌프)와 휴대폰의 앱 하나에 동시에 연결할 수 있습니다.
- xDrip을 수신기로 사용할 때는 먼저 Dexcom 앱을 삭제하십시오. **xDrip과 Dexcom 앱을 동시에 트랜스미터에 연결할 수 없습니다!**
- Clarity가 필요하고 xDrip 알람도 사용하고 싶다면, xDrip으로 로컬 브로드캐스트하는 [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)(G6만 해당)를 사용하십시오.
- xDrip을 공식 Dexcom 앱의 동반 앱(companion app)으로 사용할 수도 있지만, 혈당 측정값이 늦게 들어올 수 있습니다.
- 현재 트랜스미터에서 xDrip은 항상 트랜스미터의 [자체 알고리즘(native algorithm)](https://navid200.github.io/xDrip/docs/Native-Algorithm.html)을 사용합니다. 이것을 끌 이유는 없습니다. [선제적 재시작(Preemptive restart)](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html)은 오래된 트랜스미터(펌웨어 1.6.5.25 이하)에서만 작동하며, 여기서는 10일 후 센서가 멈추는 것을 막기 위해 필요합니다. 최신(Firefly) 트랜스미터는 이를 무시합니다. 재시작을 시도하기 전에 [센서 재시작](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html)을 읽어 보십시오.
- 센서와 트랜스미터 자체에 관한 모든 내용은 [xDrip Dexcom 페이지](https://navid200.github.io/xDrip/docs/Dexcom_page.html)에 설명되어 있습니다.

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Build Your Own Dexcom App으로 G6를 사용하는 경우

```{admonition} Old app version
:class: warning
Dexcom BYODA는 이제 매우 오래된 버전의 앱이며 업데이트할 수 없습니다.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750)(BYODA)은 AAPS 및/또는 xDrip으로의 로컬 브로드캐스트를 지원합니다.

-   이 앱을 사용하면 어떤 Android 스마트폰에서든 Dexcom G6를 사용할 수 있습니다.
-   이전에 원래 Dexcom 앱이나 패치된 Dexcom 앱을 사용했다면 그 앱을 삭제하십시오(현재 사용 중인 센서는 **중지하지 마십시오**).
-   다운로드한 apk를 설치하십시오.
-   패치된 앱에 센서 코드와 트랜스미터 일련번호를 입력하십시오.
-   휴대폰 설정에서 apps > Dexcom G6 > permissions > additional permissions 로 이동하여 'Access Dexcom app'을 누르십시오.
-   잠시 후 BYODA가 트랜스미터 신호를 받기 시작합니다.

### AAPS 설정

-   [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 **BYODA**를 선택하십시오.

-   값이 들어오지 않으면 다른 데이터 소스를 선택한 다음 **BYODA**를 다시 선택하십시오. 그러면 AAPS와 BYODA 브로드캐스트 사이의 연결에 필요한 권한 요청이 다시 나타납니다.

### xDrip 설정

-   Select '640G/Eversense' as data source.
-   값을 받으려면 xDrip에서 'start sensor' 명령을 실행해야 합니다. 이 작업은 Build Your Own Dexcom App이 제어하는 현재 센서에 영향을 주지 않습니다.


(DexcomG6-troubleshooting-g6)=
## G6 및 ONE 문제 해결

### Dexcom G6/ONE 관련 문제 해결

-   [여기](https://navid200.github.io/xDrip/docs/Dexcom_page.html)에서 아래로 스크롤하여 **Troubleshooting**을 찾으십시오.

### 일반 문제 해결

CGM의 일반 문제 해결은 [여기](#general-cgm-troubleshooting)에서 볼 수 있습니다.

### 센서 사용 중에 새로운 트랜스미터로 바꾸기

센서 세션 중에 트랜스미터를 바꿔야 한다면, 센서 마운트를 손상시키지 않고 트랜스미터를 분리해 볼 수 있습니다. 동영상은 [여기](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)에서 볼 수 있습니다. 대신 [이 방법](https://youtu.be/tx-kTsrkNUM)을 선택한다면, 스트립으로 [센서 접점을 손상시키지](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) 않도록 주의해야 합니다.
