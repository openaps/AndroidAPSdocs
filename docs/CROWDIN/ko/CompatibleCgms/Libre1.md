# Freestyle Libre 1

센서를 스캔하지 않고도 5분마다 새 혈당 값을 받는 CGM으로 Libre를 사용하려면, NFC-Bluetooth 브리지를 구입해야 합니다(더 이상 개발되지 않는 [LimiTTer](https://github.com/JoernL/LimiTTer) 프로젝트를 바탕으로 한 시판 기기).

```{admonition} Libre 2, Libre 1 US and Libre Pro
:class: warning
사용하려는 브리지와 앱이 센서와 호환되는지 확인하십시오.  
```

시중에서 아직 구할 수 있는 브리지가 몇 가지 있습니다:

-   [MiaoMiao Reader](https://www.miaomiao.cool/)(버전 1, 2 또는 3)는 AliExpress에서도 구입할 수 있습니다.
-   유럽 판매처([BubbleShop](https://bubbleshop.eu/))의 [Bubble / Mini / Nano](https://www.bubblesmartreader.com/), 또는 러시아 사용자는 [여기](https://vk.com/saharmonitor/)에서 구입할 수 있습니다. AliExpress에서도 구입할 수 있습니다.
-   러시아 사용자를 위한 Atom.

## 1. xDrip 사용하기

-   xDrip은 Miaomiao, Bubble, Blucon, Atom, LibreAlarm을 지원합니다.
-   최신 기능이 필요하지 않다면 [최신 APK(stable)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)를 안심하고 다운로드할 수 있습니다. 최신 기능이 필요하다면 최신 [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases)을 사용하십시오.
-   [xDrip 설정 페이지](../CompatibleCgms/xDrip.md)의 설정 안내를 따르십시오.
-    Libre 1 US(및 Libre 2 EU)에는 OOP2도 필요합니다.
-   [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 xDrip을 선택하십시오.

## 2. Diabox 사용하기

- Diabox는 Bubble 제조사의 앱입니다.
- [Diabox](https://t.me/s/DiaboxApp)를 설치하십시오. Settings의 Integration에서 Share data with other apps를 켜십시오.

![Diabox](../images/Diabox.png)

- [**구성 → 혈당 출처**](#Config-Builder-bg-source)에서 xDrip을 선택하십시오.
