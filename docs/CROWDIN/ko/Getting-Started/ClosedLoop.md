# Closed loop 시스템이란 어떤 것일까요?

```{image} ../images/autopilot.png
:alt: AAPS는 오토파일럿과 유사합니다.
```

인공 췌장 closed loop 시스템은 당뇨병 관리를 좀 더 편리하게 하기 위해 다양한 구성 요소들을 결합한 것입니다. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). 과연 이게 무엇을 의미할까요?

**Autopilot in an aircraft**

오토파일럿이 모든 작업을 수행하는 것은 아니며, 따라서 비행하는 전체 시간 동안 조종사가 잠을 잘 수 있게 해주는 것은 아닙니다. 그것은 조종사들의 일을 용이하게 해주는 것입니다. 이는 항공기와 비행 상태를 계속해서 모니터링해야 하는 부담을 줄여줍니다. 이것은 조종사가 영공을 살피며 오토파일럿 기능들을 제어하는 것에 집중할 수 있도록 도와줍니다.

오토파일럿은 다양한 센서로부터 신호들을 수신하고, 컴퓨터가 파일럿의 설정에 따라 이를 평가한 다음, 필요한 조정을 시행합니다. 조종사는 계속적인 조정에 대해 걱정하지 않아도 됩니다.

**Closed Loop System**

인공 췌장 closed loop 시스템은 오토파일럿과 유사하다고 볼 수 있습니다. 이 시스템이 모든 관리를 대신 해주는 것이 아니며, 사용자는 계속해서 당뇨병 관리에 신경써야합니다. Closed loop 시스템은 CGM/FGM의 센서 데이터와 사용자의 당뇨병 관리 인자(basal 양, 인슐린 민감도 인자 (ISF), 인슐린 탄수화물 비율 (IC) 등)을 결합하여 작동합니다. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. 이것은 당뇨병 관리에 "함께 해줌으로써" 사용자의 삶에 시간 여유를 만들어 줍니다.

우리가 사람 관리자 없이 오토파일럿만 있는 비행기에 탑승하고 싶지 않은 것처럼, closed loop 시스템은 당뇨병 관리를 도와주지만 반드시 사용자의 도움이 필요합니다! **Even with a closed loop you can't just forget your diabetes!**

오토파일럿이 조종사의 설정 뿐만 아니라 센서 값들에 의존하는 것과 같이, AAPS에서도 적절한 basal 양, ISF, 인슐린 탄수화물 비율 (CR) 등을 적절하게 입력해야 closed loop 시스템이 사용자를 성공적으로 보조할 수 있습니다.

## 인공 췌장 closed loop 시스템의 오픈 소스

현재는 대표적인 세 종류의 오픈 소스 closed loop 시스템을 사용할 수 있습니다:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). 이는 안드로이드 스마트폰을 사용하여 인슐린 펌프 사용을 계산하고 제어합니다. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [아큐-첵 콤보](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight (아큐첵 인사이트)](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Raspberry Pi나 Intel Edison 같은 작은 컴퓨터를 사용합니다.

호환 가능한 펌프는 다음과 같습니다:

- some old Medtronic pumps

### iOS 용 loop

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

호환 가능한 펌프는 다음과 같습니다:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
