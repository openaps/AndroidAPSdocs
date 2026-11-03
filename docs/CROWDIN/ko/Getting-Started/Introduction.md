# APS와 AAPS 소개

```{contents} In this page
:backlinks: entry
:depth: 2
```

## “인공 췌장 시스템”이란 무엇입니까?

사람의 췌장은 혈당 조절 외에도 많은 일을 합니다. 하지만 **“인공 췌장 시스템”(APS)**이라는 말은 보통 혈당을 자동으로 건강한 범위 안에 유지하는 시스템을 뜻합니다.

가장 기본적인 방법은 **혈당 수치**를 측정하고, 이 값으로 **계산**을 한 다음, (예측된) 알맞은 양의 **인슐린**을 몸에 주입하는 것입니다. 이 계산을 몇 분마다, 하루 24시간, 일주일 내내 반복합니다. 개입이나 주의가 필요하면 **알람**과 **경고**로 사용자에게 알립니다. 이 시스템은 보통 **혈당 센서**, **인슐린 펌프**, 그리고 계산을 하는 **컨트롤러**로 이루어집니다. **AAPS**와 다른 오픈 소스 시스템에서 컨트롤러는 휴대폰의 앱입니다. 대부분의 상업용 시스템에서는 펌프 자체에 내장된 소프트웨어이며, 휴대폰 앱은 주로 표시와 제어에 사용됩니다.

폐쇄 루프 시스템이 어떻게 발전했고 어떻게 작동하는지에 대한 배경 지식을 얻으려면 이 2022년 리뷰 논문부터 읽는 것이 좋습니다. 이 논문은 오늘날 사용 가능한 대부분의 시스템보다 먼저 나왔으므로, 현재 시장에 무엇이 있는지 알려 주는 안내서는 아니라는 점에 유의하십시오:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

이른바 “이중 호르몬” 시스템은 인슐린과 함께 글루카곤을 주입합니다. 심한 저혈당을 막고 혈당을 더 엄격하게 조절하는 것이 목적입니다. 이런 종류의 첫 시스템이 유럽에서 승인되었지만 연구와 프로젝트를 통해서만 제공되며, 다른 시스템은 아직 개발 중입니다. 아직 일반 판매되는 것은 없습니다.

인공 췌장은 [“당뇨병을 위한 자동 조종 장치”](https://www.artificialpancreasbook.com/)라고 생각할 수 있습니다. 이것은 무슨 뜻입니까?

비행기에서 자동 조종 장치가 조종사의 일을 모두 하지는 않습니다. 조종사는 비행 내내 잘 수 없습니다. 자동 조종 장치는 조종사의 일을 돕습니다. 자동 조종 장치는 조종사가 항공기를 계속 직접 조종해야 하는 부담을 덜어 주어, 조종사가 더 넓은 범위의 감시에 집중할 수 있게 합니다. 자동 조종 장치는 여러 센서에서 신호를 받고, 컴퓨터가 이 데이터를 조종사가 정한 값과 함께 평가한 다음 필요한 조정을 하며, 걱정되는 점이 있으면 조종사에게 알립니다. 조종사는 더 이상 계속 결정을 내리는 데 신경 쓰지 않아도 되며, 이 비유는 **AAPS**에도 적용할 수 있습니다.

![이미지](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## 하이브리드 폐쇄 루프란 무엇입니까?

제1형 당뇨병의 가장 좋은 해결책은 “기능적 완치”일 것입니다(아마도 면역 체계로부터 보호되는 췌장 세포의 이식). 제1형 당뇨병(T1D) 커뮤니티가 그것을 기다리는 동안, “완전 폐쇄 루프” 인공 췌장이 아마 그다음으로 가장 좋은 방법일 것입니다. 이것은 사용자 입력(식사 볼러스 주입이나 운동 알림 등)이 전혀 필요 없으면서도 혈당을 잘 조절하는 기술 시스템입니다. 일상에서 사용되는 거의 모든 시스템은 자동화 기술과 사용자 입력을 함께 사용하기 때문에 “하이브리드” 폐쇄 루프입니다. 최초의 완전 폐쇄 루프 시스템은 2026년에 유럽에서 승인되었지만, 아직 널리 사용할 수 있는 것은 없습니다.

## 루프는 어떻게, 그리고 왜 시작되었습니까?

제1형 당뇨병(T1D) 환자를 위한 상업용 기술의 개발은 매우 느립니다. 2013년에 T1D 커뮤니티는 #WeAreNotWaiting 운동을 시작했습니다. 이들은 혈당 조절, 안전, 삶의 질을 개선하기 위해 이미 승인된 기존 기술(인슐린 펌프와 센서)을 이용하여 직접 시스템을 개발했습니다. 이 시스템들은 보건 기관(FDA, NHS 등)의 공식 승인을 받지 않았기 때문에 OS-AID(Open-Source Automated Insulin Delivery, 오픈 소스 자동 인슐린 주입) 시스템(이전에는 DIY 시스템)이라고 부릅니다. 주요 OS-AID 시스템은 네 가지입니다: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop), [Trio](https://triodocs.org).

OS-AID 루프의 기본 원리를 이해하는 좋은 방법은 Dana Lewis의 책 “Automated Insulin Delivery”를 읽는 것입니다. 이 책은 [여기](https://www.artificialpancreasbook.com/)에서 무료로 볼 수 있습니다(인쇄본을 구입할 수도 있습니다). **AAPS**의 바탕이 된 [OpenAPS](https://openaps.org/what-is-openaps/)에 대해 더 알고 싶다면 [OpenAPS 웹사이트](https://openaps.org/what-is-openaps/)가 좋은 자료입니다.

여러 상업용 하이브리드 폐쇄 루프 시스템도 출시되었습니다. 이 시스템들은 OS-AID 시스템과 매우 다릅니다. 주된 이유는 많은 상업용 시스템에 이전 며칠 동안의 인슐린 필요량에 따라 주입량을 조정하는 “학습 알고리즘”이 들어 있기 때문입니다. OS-AID 커뮤니티의 많은 사람이 이미 상업용 시스템을 사용해 보고 자신의 OS-AID 시스템과 비교했습니다. 각 시스템 전용 Facebook 그룹, [AAPS Facebook 그룹](https://www.facebook.com/groups/AndroidAPSUsers/) 또는 [Discord](https://discord.com/invite/4fQUWHZ4Mw)에서 물어보면 여러 시스템을 비교한 내용을 더 알 수 있습니다.

## Android APS(AAPS)란 무엇입니까?

![이미지](../images/basic-outline-of-AAPS.png)

**그림 1**. Android APS(인공 췌장 시스템), 즉 AAPS의 기본 구성.

Android APS(**AAPS**)는 하이브리드 폐쇄 루프 시스템, 즉 인공 췌장 시스템(APS)입니다. AAPS는 #WeAreNotWaiting T1D 커뮤니티가 개발한 검증된 [OpenAPS](https://openaps.org/) 알고리즘(규칙의 모음)으로 인슐린 주입량을 계산합니다.

OpenAPS는 일부 오래된 인슐린 펌프와만 호환되기 때문에, 더 다양한 인슐린 펌프와 사용할 수 있는 **AAPS**가 2016년에 제1형 당뇨병이 있는 가족을 위해 처음 개발되었습니다. 초기부터 지금까지 **AAPS**는 제1형 당뇨병과 관련이 있는 자원봉사 개발자들과 다른 열성적인 사람들로 이루어진 팀이 계속 개발하고 다듬어 왔습니다. 오늘날 **AAPS**는 전 세계에서 수천 명이 사용하고 있습니다. 매우 자유롭게 설정할 수 있는 다목적 시스템이며, 오픈 소스이기 때문에 다른 많은 오픈 소스 당뇨병 소프트웨어 및 플랫폼과도 쉽게 호환됩니다. 현재 **AAPS** 시스템의 기본 구성 요소는 위의 **그림 1**에 나와 있습니다.



## AAPS의 기본 구성 요소는 무엇입니까?

AAPS의 “두뇌”는 사용자가 직접 빌드하는 **앱**입니다. 이를 위한 자세한 단계별 안내가 있습니다. 그다음 [호환되는](../Getting-Started/Phones.md) **Android 스마트폰**(**1**)에 **AAPS 앱**을 설치합니다. 많은 사용자가 루프를 메인 휴대폰이 아닌 별도의 휴대폰에서 실행하는 것을 선호합니다. 따라서 생활의 다른 모든 일에 Android 휴대폰을 쓸 필요는 없고, AAPS 루프를 실행하는 데만 쓰면 됩니다.

**Android 스마트폰**에는 **AAPS** 외에 다른 앱도 하나 설치해야 합니다. 이 [추가 앱](../Getting-Started/CompatiblesCgms.md)은 센서(**2**)에서 블루투스로 혈당 데이터를 받아, 휴대폰 안에서 **AAPS 앱**으로 데이터를 보냅니다.

**AAPS 앱**은 OpenAPS의 의사 결정 과정(**알고리즘**)을 사용합니다. 처음 시작하는 사용자는 기본 **oref0** 알고리즘을 사용하지만, AAPS에 익숙해지면 더 새로운 **oref1** 알고리즘으로 바꿀 수 있습니다. 어떤 알고리즘(oref0 또는 oref1)을 사용할지는 자신의 상황에 어느 것이 가장 잘 맞는지에 따라 다릅니다.  두 경우 모두 알고리즘은 여러 요소를 고려하며, 센서에서 새 측정값이 들어올 때마다 빠르게 계산합니다. 그다음 알고리즘은 블루투스로 인슐린 펌프(**3**)에 얼마나 많은 인슐린을 주입할지 지시를 보냅니다. 모든 정보는 모바일 데이터나 Wi-Fi로 인터넷(**4**)에 보낼 수 있습니다. 원하면 이 데이터를 팔로워와 공유하거나 분석을 위해 모을 수도 있습니다. 선택 사항으로 [스마트워치](../Getting-Started/Watches.md)(**5**)를 휴대폰과 페어링하여 데이터를 한눈에 보고, 일부 워치에서는 **AAPS**에 기본 명령을 보낼 수도 있습니다.

## AAPS 시스템의 장점은 무엇입니까?

**AAPS**가 사용하는 OpenAPS 알고리즘은 사용자가 정한 매개변수(중요한 것으로 기저 주입량, 인슐린 민감도 계수, 인슐린 대 탄수화물 비율, 인슐린 작용 시간 등)에 따라 사용자 입력 없이 혈당을 조절하며, 5분마다 새 센서 데이터에 반응합니다.

**AAPS** 사용의 장점으로 알려진 것에는 세밀하게 조정할 수 있는 많은 옵션, **자동화**, 그리고 환자/보호자에게 시스템이 더 투명하다는 점이 있습니다. 이를 통해 자신(또는 돌보는 사람)의 당뇨병을 더 잘 조절할 수 있고, 그 결과 삶의 질이 좋아지고 마음이 더 편해질 수 있습니다.

시간을 들이면 **AAPS**는 다음과 같은 결과로 이어질 수 있습니다:

- 제1형 당뇨병 관리의 스트레스와 부담 줄이기;

- 제1형 당뇨병 때문에 생기는 수많은 일상적인 결정 줄이기;

- 실시간 데이터를 바탕으로 한 개인 맞춤형의 동적인 인슐린 주입. 이를 통해 저혈당 처치의 필요를 줄이고 고혈당 발생을 줄일 수 있습니다;

- 인슐린 관리에 대한 지식이 늘고, 설정을 더 잘 세밀하게 조정할 자신감이 생김;

- 생활 방식에 맞춘 자동 설정(**자동화**)을 만들 수 있음;

- 수면의 질 개선과 밤중 개입 횟수의 전반적인 감소;

- 제1형 당뇨병 환자의 보호자를 위한 원격 모니터링과 인슐린 주입 관리; 그리고

- **AAPS**가 제어하는 Android 휴대폰 하나로 휴대용 당뇨병 장비(연속 혈당 측정기 수신기와 인슐린 제어 장치)를 모두 간단하게 정리할 수 있음.


결국 **AAPS**는 사람들이 당뇨병을 더 잘 관리하도록 힘을 주어, 안정적인 혈당과 더 나은 장기 건강 결과로 이어질 수 있습니다.

### 구체적인 장점은 다음과 같습니다:

#### 1) 내장된 안전 기능
oref0과 oref1이라는 알고리즘의 안전 기능에 대해 읽으려면 [여기를 누르십시오](https://openaps.org/reference-design/). 사용자가 자신의 안전 제한을 직접 정합니다.

#### 2) 하드웨어 유연성

**AAPS**는 다양한 인슐린 펌프 및 센서와 함께 작동하며, 생활이 바뀌어도 유연하게 대응할 수 있습니다. 예를 들어 Dexcom 센서 패치 접착제에 알레르기가 생기면 Libre 센서로 바꿀 수 있습니다. 하드웨어를 바꿀 때 **AAPS** 앱을 다시 빌드하거나 다시 설치할 필요 없이, **구성**에서 다른 펌프나 혈당 출처를 선택하기만 하면 됩니다. **AAPS**는 특정 펌프 드라이버에 의존하지 않으며, "가상 펌프"도 들어 있어 사용자가 자신에게 사용하기 전에 안전하게 실험해 볼 수 있습니다.

#### 3) 넓은 범위의 매개변수로 자유롭게 설정 가능

사용자는 모듈이나 기능을 쉽게 추가하거나 제거할 수 있으며, **AAPS**는 개방 루프와 폐쇄 루프 모드 모두로 사용할 수 있습니다. 다음은 **AAPS** 시스템으로 할 수 있는 일의 몇 가지 예입니다:

 a) 식사 30분 전에 더 낮은 **혈당** 목표를 설정할 수 있습니다. 목표는 72 mg/dL(4.0 mmol/L)까지 낮출 수 있습니다.

 b) 인슐린 저항성 때문에 혈당이 높으면, **AAPS**에서 혈당이 8 mmol/L(144 mg/dL)보다 높아질 때 활성화되는 **자동화** 규칙을 설정할 수 있습니다. 이 규칙은 (예를 들어) 120% 프로파일로 전환합니다(평소 **프로파일** 설정과 비교해 기저가 20% 늘고 다른 계수도 강해집니다). 자동화는 설정한 예정 시간 동안 유지됩니다. 이런 자동화는 특정 요일, 특정 시간대, 심지어 특정 장소에서만 활성화되도록 설정할 수 있습니다.

 c) 아이가 미리 알리지 않고 트램펄린을 타고 있으면, **AAPS**에서 휴대폰으로 바로 정해진 시간 동안 인슐린 주입을 일시 중지할 수 있습니다.

 d) 수영 때문에 연결을 해제했던 튜브 펌프를 다시 연결하면, **AAPS**가 연결 해제 동안 빠진 기저 인슐린을 계산하고 현재 혈당에 맞추어 조심스럽게 주입합니다. 필요 없는 인슐린은 빠진 기저를 “취소”하기만 하면 무시할 수 있습니다.

 e) **AAPS**에서는 상황별로 다른 프로파일을 설정하고 쉽게 전환할 수 있습니다. 예를 들어 높은 혈당을 더 빨리 낮추게 하는 기능(슈퍼 마이크로 볼러스(“**SMB**”)와 미입력 식사(“**UAM**”))은 밤 동안의 저혈당이 걱정되면 낮에만 작동하도록 설정할 수 있습니다.

이것들은 모두 예입니다. 전체 기능은 운동, 질병, 호르몬 주기 _등_을 포함한 일상생활에서 매우 큰 유연성을 줍니다. 결국 이 유연성을 어떻게 쓸지는 사용자가 정하며, 모든 사람에게 맞는 하나의 자동화는 없습니다.

#### 4) 원격 모니터링
여러 가지 모니터링 방법(Sugarmate, Dexcom Follow, xDrip, Android Auto _등_)이 있어, 부모/보호자나 특정 상황(수면/운전)에서 맞춤 경고가 필요한 성인에게 유용합니다. 일부 앱(xDrip)에서는 알람을 완전히 끌 수도 있습니다. 새 센서를 미리 “삽입”해 두었거나 안정되는 중이라 아직 루프에 쓰고 싶지 않을 때 아주 좋습니다.

#### 5) 원격 제어
**AAPS**가 상업용 시스템보다 크게 좋은 점은, 팔로워가 인증된 문자(SMS) 명령이나 페어링된 **AAPSClient** 앱으로 **AAPS** 시스템에 다양한 명령을 보낼 수 있다는 것입니다. 이 기능은 **AAPS**를 사용하는 제1형 당뇨병 아이의 부모들이 많이 사용합니다.

원격 제어 기능은 매우 유용할 수 있습니다. 예를 들어 놀이터에서 아이가 노느라 바쁠 때, 간식을 위한 사전 볼러스를 부모의 휴대폰에서 줄 수 있습니다. 스마트워치(_예:_ Garmin)로 시스템을 모니터링하거나, 스마트워치(_예:_ Samsung Galaxy Watch 같은 Wear OS 워치)에서 기본 명령을 보낼 수도 있습니다.

#### 6) 열린 애플리케이션 인터페이스 덕분에 상업적 제약 없음
오픈 소스 방식을 사용하여 **AAPS**의 소스 코드를 언제든지 볼 수 있을 뿐 아니라, 열린 프로그래밍 인터페이스를 제공한다는 기본 원칙 덕분에 다른 개발자들도 새로운 아이디어를 보탤 수 있습니다. **AAPS**는 Nightscout와 긴밀하게 통합되어 있습니다. 이것은 개발을 빠르게 하고, 사용자가 당뇨병과 함께하는 생활을 더 편리하게 만드는 기능을 추가할 수 있게 합니다. 이런 통합의 좋은 예로 [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) 등이 있습니다. 오픈 소스 개발자와 상업용 시스템 개발자 사이에는 계속 대화가 이루어지고 있습니다. OS-AID의 많은 혁신은 점차 상업용 시스템에 도입됩니다. 상업용 시스템의 개발이 느린 것은 이해할 만한데, 그 이유 중 하나는 여러 회사 시스템(펌프, 앱, 센서 _등_) 사이의 인터페이스를 신중하게 협상하고 허가받아야 하기 때문입니다. 이것은 환자(또는 매우 특별한 요구가 있는 소수의 환자 집단)에게 편리하지만 큰 이익을 내지 못하는 혁신을 늦출 수도 있습니다.

#### 7) 자세한 앱 인터페이스
**AAPS**를 사용하면 펌프 인슐린 잔량, 캐뉼라 사용 기간, 센서 사용 기간, 펌프 배터리 사용 기간, 활성 인슐린 _등_을 쉽게 확인할 수 있습니다. 많은 작업(펌프 프라임, 펌프 연결 해제 _등_)을 펌프 자체가 아니라 **AAPS** 앱에서 할 수 있으므로, 펌프를 자신(또는 돌보는 사람)의 주머니나 벨트에 그대로 둘 수 있습니다.

#### 8) 접근성과 저렴한 비용
**AAPS**는 현재 비용을 스스로 낼 수 없거나 지원/보험이 없는 사람들에게, 개발 면에서 상업용 시스템보다 개념적으로 몇 년 앞선 하이브리드 폐쇄 루프 시스템을 사용할 수 있게 해 줍니다. 현재 **AAPS**를 설정하려면 리포팅 서버(Nightscout 또는 Tidepool)가 필요하지만, 일상적으로 **AAPS** 루프를 실행하는 데는 필요하지 않습니다. 많은 사람이 데이터 수집과 원격 모니터링을 위해 Nightscout를 계속 사용합니다. **AAPS** 자체는 무료이지만, 여러 플랫폼 중 하나를 통해 Nightscout를 설정하면 원하는 지원 수준(비교표 참조)과 설정 후에도 Nightscout를 계속 사용할지에 따라 비용(€0 - €12)이 들 수 있습니다. **AAPS**는 다양한 저렴한(약 €150부터) [Android 휴대폰](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true)에서 작동합니다. 특정 지역과 언어에 맞는 여러 버전이 있으며, AAPS는 [시각 장애인](#accessibility-for-users-aaps-who-are-partially-or-completely-blind)도 사용할 수 있습니다.

#### 9) 지원
완벽한 자동 인슐린 주입 시스템은 없습니다. 상업용 시스템과 오픈 소스 시스템은 통신 문제와 일시적인 하드웨어 고장 같은 흔한 문제를 많이 함께 가지고 있습니다. 전 세계에서 **AAPS**를 설계하고 개발했으며 지금도 사용하고 있는 AAPS 사용자 커뮤니티가 Facebook, Discord, GitHub에서 지원을 제공합니다. 상업용 APS 시스템에는 Facebook 지원 그룹과 병원/제조사의 도움도 있습니다. 이런 시스템의 사용자나 이전 사용자와 이야기해 보면 흔한 문제, 교육 프로그램의 질, 계속 제공되는 지원 수준에 대한 의견을 들을 수 있어 도움이 됩니다.

#### 10) 예측 가능성, 투명성, 안전
**AAPS**는 투명하고 논리적이며 예측 가능하므로, 설정이 잘못되었을 때 알아차리고 알맞게 조정하기가 더 쉬울 수 있습니다. 시스템이 정확히 무엇을 하는지, 왜 그렇게 하는지 볼 수 있고 작동 한계를 직접 정할 수 있으므로, 제어권(과 책임)이 사용자에게 있습니다. 이것은 사용자에게 자신감과 더 편안한 잠을 줄 수 있습니다.

#### 11) 개발(dev) 모드를 통한 고급 기능(완전 폐쇄 루프 포함) 사용
이 **AAPS** 문서는 **AAPS**의 주된 **“master”** 브랜치를 다룹니다. 하지만 연구와 개발은 항상 계속되고 있습니다. 경험이 더 많은 사용자는 **개발** 브랜치의 실험적 기능을 살펴볼 수 있습니다. 개발 중인 혁신은 완전 폐쇄 루프(식사 볼러스 _등_이 필요 없는 루프)를 위한 전략과, 제1형 당뇨병과 함께하는 생활을 최대한 편리하게 만드는 데 중점을 둡니다.

#### 12) 직접 개선에 기여할 수 있음
제1형 당뇨병은 매우 답답하고 외롭게 느껴질 수 있습니다. 자신의 당뇨병 기술을 직접 제어하고, 실력이 늘면 곧바로 다른 사람의 여정을 도와 “받은 도움을 다른 사람에게 돌려줄” 수 있다는 것은 큰 보람이 될 수 있습니다. 스스로 공부하고, 어려운 점을 찾아내고, 새로운 개발과 문서를 찾아보며 직접 기여할 수도 있습니다. 커뮤니티에는 같은 목표를 가진 다른 사람들이 있어 함께 아이디어를 나누고 일할 수 있습니다. 이것이 #WeAreNotWaiting의 핵심입니다.

## AAPS는 MDI 및 개방 루프와 비교해 어떻습니까?

다회 주사(MDI, 아래 **그림 2**의 (a))는 보통 하루 한 번 지속형 인슐린(_예:_ Tresiba)을 주사하고, 식사 때나 교정을 위해 속효성 인슐린(_예:_ Novorapid, Fiasp)을 주사합니다. 개방 펌프 사용(b)은 펌프로 미리 프로그래밍된 속도로 초속효성 인슐린의 기저를 주입하고, 식사 때나 교정을 위해 펌프로 볼러스를 주입하는 방식입니다. 루프 시스템의 기본은, 루프 앱이 센서 혈당 데이터를 사용해 저혈당으로 갈 것으로 예측되면 펌프에 인슐린 주입을 멈추게 하고, 혈당이 오르고 너무 높아질 것으로 예측되면 추가 인슐린을 주게 하는 것입니다(c). 이 그림은 실제보다 지나치게 단순하지만, 각 방식의 주요 차이를 보여 주려는 것입니다. 세 방식 모두로 매우 좋은 혈당 조절을 이룰 수 있습니다.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**그림 2**. (a) MDI, (b) 개방 루프 펌프 사용, (c) 하이브리드 폐쇄 루프 펌프 사용의 기본 개요.

## AAPS는 다른 루프 시스템과 비교해 어떻습니까?

2023년 6월 25일 기준으로 네 가지 주요 오픈 소스 폐쇄 루프 시스템이 있습니다: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop), [Trio](https://triodocs.org)(이전 이름 FreeAPS X). 여러 시스템의 기능은 아래 표에 나와 있습니다:


| 장치 유형 | Name                                                             | [AAPS](https://wiki.aaps.app)          | [루프](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)           |
| ----- | ---------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- | ----------------------------------------------------- | -------------------------------------- |
| 휴대폰   | Android                                                          | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| 휴대폰   | iPhone                                                           | ![사용할 수 없음](../images/unavailable.png) | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| 리그    | 소형 컴퓨터 (1)                                                       | ![사용할 수 없음](../images/unavailable.png) | ![사용할 수 없음](../images/unavailable.png)    | ![사용 가능](../images/available.png)                     | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)              | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)             | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)               | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)              | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)              | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                    | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                      | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md) | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)      | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| PUMP  | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)     | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)    | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [이전 Medtronic](../CompatiblePumps/MedtronicPump.md)              | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용 가능](../images/available.png)                     | ![사용 가능](../images/available.png)      |
| PUMP  | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                      | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| PUMP  | [CareLevo](../CompatiblePumps/CareLevo.md)                       | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| CGM   | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)            | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [Dexcom One](../CompatibleCgms/DexcomG6.md)                      | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                       | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용 가능](../images/available.png)                     | ![사용 가능](../images/available.png)      |
| CGM   | [Libre 3/3+](../CompatibleCgms/Libre3.md)                        | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [Libre 2/2+](../CompatibleCgms/Libre2.md)                        | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [Libre 1](../CompatibleCgms/Libre1.md)                           | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [Eversense](../CompatibleCgms/Eversense.md)                      | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용할 수 없음](../images/unavailable.png)                | ![사용 가능](../images/available.png)      |
| CGM   | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                     | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| CGM   | [PocTech](../CompatibleCgms/PocTech.md)                          | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| CGM   | [Ottai](../CompatibleCgms/OttaiM8.md)                            | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| CGM   | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                       | ![사용 가능](../images/available.png)      | ![사용할 수 없음](../images/unavailable.png)    | ![사용할 수 없음](../images/unavailable.png)                | ![사용할 수 없음](../images/unavailable.png) |
| CGM   | [혈당 출처로서의 Nightscout](../CompatibleCgms/CgmNightscoutUpload.md)  | ![사용 가능](../images/available.png)      | ![사용 가능](../images/available.png)         | ![사용 가능](../images/available.png)                     | ![사용 가능](../images/available.png)      |

_표 참고:_
1. **리그**는 모니터 없이 몸에 지니고 다니는 소형 컴퓨터입니다. 지원되는 장치 유형 하나는 Intel Edison + Explorer Board이고, 다른 하나는 Raspberry Pi + Explorer HAT 또는 Adafruit RFM69HCW Bonnet입니다. 초기 APS 시스템은 이 구성을 바탕으로 했습니다. 당시 휴대폰으로는 필요한 알고리즘을 실행할 수 없었기 때문입니다. 휴대폰에서의 설정이 더 쉬워지고 휴대폰에는 화면이 있기 때문에, 이 시스템들의 사용은 줄었습니다. Intel은 Intel Edison의 판매도 중단했습니다. 훌륭한 OpenAPS 알고리즘인 **oref0**과 **oref1**은 현재 AAPS와 Trio에 들어 있습니다.


오픈 소스 루프에 대한 실용적인 지침을 담은 국제 동료 심사 합의문이 의료 전문가에 의해, 의료 전문가를 위해 작성되어 2022년에 주요 의학 저널에 게재되었습니다: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). (당뇨병 진료 병원에도) 꼭 읽어 볼 만하며, 여러 오픈 소스 하이브리드 폐쇄 루프 시스템 사이의 주요 기술적 차이를 정리하고 있습니다.

어떤 시스템이든 직접 사용해 보거나 사용 중인 다른 사람과 이야기해 보지 않고는 “느낌”을 알기 어려우므로, Facebook/Discord에서 다른 사람들에게 꼭 연락해서 물어보십시오. 대부분의 사람은 **AAPS**가 다른 하이브리드 폐쇄 루프 시스템(특히 상업용 시스템)에 비해 매우 정교하며, 위에서 설명한 것처럼 설정할 수 있는 항목과 기능이 아주 많다고 느낍니다. 처음에는 조금 벅차게 느낄 수도 있지만, 모든 가능성을 한꺼번에 살펴볼 필요는 없습니다. 원하는 만큼 천천히 또는 빠르게 진행할 수 있으며, 모든 단계에서 도움을 받을 수 있습니다.


## AAPS는 인공지능이나 학습 알고리즘을 사용합니까?

현재 버전의 **AAPS**(4.0)에는 머신 러닝 알고리즘, 다중 매개변수 인슐린 반응 모델, 인공지능이 없습니다. 따라서 이 시스템은 작동 방식이 열려 있고 투명하며, 전문가뿐 아니라 임상의와 환자도 이해할 수 있습니다. 또한 일정이 크게 바뀌고(예를 들어 스트레스가 많은 업무 주간에서 편안한 휴가로 바뀌는 경우) 인슐린이 상당히 다르게 필요할 것 같다면, **AAPS**를 더 약하거나 더 강한 맞춤 프로파일로 바로 전환할 수 있다는 뜻이기도 합니다. ‘학습 시스템’은 이 조정을 자동으로 해 주지만, 인슐린 주입을 조정하는 데 시간이 더 오래 걸릴 가능성이 높습니다.

(which-system-is-right-for-me-or-my-dependent)=
## 나 또는 내가 돌보는 사람에게 맞는 시스템은 무엇입니까?

실제로는 이미 가지고 있거나 의료 기관에서 받을 수 있는 펌프, 그리고 휴대폰 종류(Apple 또는 Android)에 따라 선택할 수 있는 시스템이 제한되는 경우가 많습니다. 아직 펌프가 없다면 시스템을 가장 넓게 선택할 수 있습니다. 기술은 계속 발전하고 있습니다. 펌프는 단종되고 새 펌프와 센서가 출시됩니다. 대부분의 오픈 소스 시스템은 주요 센서(Libre와 Dexcom)와 함께 작동하거나, 새 센서가 출시되고 1년 정도 지나면 빠르게 지원하게 됩니다(안전성과 안정성 시험 때문에 약간 늦어집니다).

대부분의 **AAPS** 사용자는 범위 내 시간 증가, HbA1c 감소, 그리고 밤에 자는 동안 기저 주입량을 자동으로 조정하는 시스템 덕분에 삶의 질이 좋아졌다고 말합니다. 이것은 대부분의 하이브리드 폐쇄 루프 시스템에서도 마찬가지입니다. 어떤 사람은 설정할 것이 많지 않은 아주 단순한 시스템을 좋아하고(그렇다면 상업용 시스템이 더 맞을 수 있습니다), 다른 사람은 이렇게 제어할 수 없는 것을 매우 답답해합니다(그렇다면 오픈 소스 시스템이 더 맞을 수 있습니다). 자신(또는 돌보는 사람)이 새로 진단을 받았다면, 흔한 방법은 먼저 MDI와 혈당 센서에 익숙해진 다음, 루프가 가능한 펌프로 옮기고, 그다음 **AAPS**로 옮기는 것입니다. 하지만 일부 사람(특히 어린아이)은 바로 펌프를 시작하기도 합니다.

**AAPS** 사용자는 커뮤니티의 도움을 받아 스스로 적극적으로 문제를 찾고 해결해야 한다는 점이 중요합니다. 이것은 상업용 시스템을 사용할 때와는 매우 다른 사고방식입니다. **AAPS**에서는 사용자가 더 많은 제어권을 가지지만 책임도 함께 가지며, 이것을 편하게 받아들일 수 있어야 합니다.

## AAPS 같은 오픈 소스 시스템은 사용해도 안전합니까?

### AAPS 시스템의 안전
어떤 인슐린 주입 방법도 위험이 없지는 않으므로, 더 정확한 질문은 아마 “현재 내 인슐린 주입 시스템과 **비교해서** 안전한가?”일 것입니다. **AAPS**에는 여러 가지 점검과 안전장치가 있습니다. 최근 [논문](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)은 컴퓨터 시뮬레이션 환경에서 **AAPS**의 사용을 살펴보았으며, 이는 시스템이 얼마나 안전하고 효과적인지 객관적으로 시험하는 효과적인 방법이었습니다. 더 일반적으로 보면, 전 세계에서 수천 명이 오픈 소스 자동 인슐린 주입 시스템을 사용하고 있으며, 사용자는 전 세계적으로 계속 늘고 있습니다.

무선 통신을 사용하는 모든 장치는 해킹될 수 있으며, 이것은 루프를 사용하지 않는 인슐린 펌프도 마찬가지입니다. 현재까지 당뇨병 관련 의료 장비를 해킹해 개인에게 해를 끼치려 한 사례는 알려져 있지 않습니다. 하지만 이런 위험을 막는 방법은 여러 가지가 있습니다:

1.  펌프 설정에서 허용되는 최대 볼러스와 최대 임시 기저 설정을 모두 가장 안전하다고 생각하는 양으로 제한하십시오. 이것은 악의적인 해커도 우회할 수 없다고 생각하는 고정 한계값입니다.

2.  CGM 알람을 고혈당과 저혈당 모두에 대해 활성화하십시오.

3.  인슐린 주입을 온라인으로 모니터링하십시오. Nightscout 사용자는 다양한 상황에 대해 경고하는 추가 알람을 설정할 수 있습니다. 여기에는 악의적인 공격보다 훨씬 더 자주 일어나는 상황도 포함됩니다. Nightscout는 고혈당과 저혈당 외에도 펌프가 원하는 대로 작동하는지 확인하는 데 유용한 진단 데이터를 표시할 수 있습니다. 예를 들어 현재 IOB, 펌프 임시 기저 이력, 펌프 볼러스 이력이 있습니다. 또한 예측된 고혈당과 저혈당, 인슐린 레저버 부족, 펌프 배터리 부족 같은 바람직하지 않은 상황을 미리 사용자에게 경고하도록 설정할 수 있습니다.

인슐린 펌프에 악의적인 공격이 있더라도, 이런 방법들은 위험을 크게 줄여 줍니다. **AAPS**를 사용하려는 모든 사람은 **AAPS** 사용의 위험과 다른 시스템 사용의 위험을 비교해 보아야 합니다.

#### 혈당 조절을 너무 빨리 개선할 때의 안전 고려 사항

HbA1c가 빠르게 낮아지고 혈당 조절이 좋아지는 것은 매력적으로 들립니다. 하지만 폐쇄 루프 시스템을 시작하면서 평균 혈당을 _너무 빨리_ 낮추면 눈을 포함한 영구적인 손상과, 사라지지 않는 고통스러운 신경병증이 생길 수 있습니다. 이 손상은 혈당을 더 천천히 낮추기만 하면 피할 수 있습니다. 현재 HbA1c가 높은 상태에서 AAPS(또는 다른 폐쇄 루프 시스템)로 바꾸려면, 시작하기 전에 이 위험에 대해 의료진과 상의하고 함께 시간 계획을 정하십시오. 의학 문헌 링크를 포함하여 혈당을 안전하게 낮추는 방법에 대한 더 일반적인 정보는 [여기](#preparing-safety-first) 안전 섹션에 있습니다.

#### 장치, 소모품, 기타 약물에 관한 의료 안전

인공 췌장 루프에는 시험을 거쳐 완전히 작동하는, FDA 또는 CE 승인을 받은 인슐린 펌프와 CGM을 사용하십시오. 이러한 구성요소에 대한 하드웨어 또는 소프트웨어의 변형은 예기치 않은 인슐린 투약을 야기하여 사용자에게 상당한 위험을 초래할 수 있습니다. 고장 났거나, 개조되었거나, 직접 만든 인슐린 펌프나 CGM 수신기를 발견하거나 제안받더라도, 이것으로 AAPS 시스템을 만들지 마십시오.

삽입기, 캐뉼라, 인슐린 용기 등은 펌프와 CGM 제조사가 승인한 정품 소모품을 사용하십시오. 검증되지 않았거나 개조된 소모품을 사용하면 CGM이 부정확해지고 인슐린 주입 오류가 생길 수 있습니다. 인슐린은 잘못 주입하면 매우 위험합니다. 소모품을 임의로 개조하여 생명을 걸지 마십시오.

**AAPS**를 사용할 때는 SGLT-2 억제제(글리플로진)를 복용하지 마십시오. 이 약은 혈당을 예측할 수 없게 낮추기 때문입니다. 이 효과를 혈당을 높이기 위해 기저 주입량을 낮추는 시스템과 함께 쓰면 위험합니다. 자세한 내용은 주요 [안전 섹션](#preparing-safety-first)에 있습니다.

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## 의료진과 AAPS에 대해 어떻게 이야기를 시작할 수 있습니까?

사용자는 **AAPS**를 사용하려는 생각을 임상의와 이야기하는 것이 좋습니다. **AAPS**(또는 다른 OS-AID 루프)를 사용하려 한다면, 당뇨병 의료진과 솔직하게 이야기하는 것을 두려워하지 마십시오. 환자와 의사 사이의 투명성과 신뢰가 가장 중요합니다.

### 권장하는 방법:
임상의와 대화를 시작하여 CGM, 펌프, 하이브리드 루프, 상업용 루프 같은 당뇨병 기술에 대해 얼마나 잘 알고 어떤 태도를 가지고 있는지 알아보십시오. 임상의/내분비내과 전문의는 기본 기술을 알고 있어야 하며, 그 지역에서 구할 수 있는 상업용 루프 제품의 최근 발전에 대해 기꺼이 이야기할 수 있어야 합니다.

#### 지역의 사례

OS-AID 루프 _대_ 상업용 루프에 대한 임상의/내분비내과 전문의의 의견을 듣고, 이 분야에 대해 얼마나 알고 있는지 가늠해 보십시오. **AAPS**를 잘 알고 있는지, 그리고 OS-AID 루프를 사용하는 환자를 진료한 유용한 경험을 나누어 줄 수 있는지 물어보십시오.

의료진이 진료하는 환자 중에 이미 OS-AID 루프를 사용하는 사람이 있는지 물어보십시오. 환자 비밀 보호 때문에 의사는 본인의 동의 없이 다른 환자의 정보를 알려 줄 수 없습니다. 하지만 원한다면, 임상의가 보기에 나와 “잘 맞을” 것 같은 OS-AID 루프 사용 환자가 있을 때 **나의** 연락처를 그 환자에게 전해 달라고 부탁할 **수 있습니다**. 이때 그 환자가 OS-AID 루프에 대해 이야기하기 위해 연락해 와도 좋다고 말하면 됩니다. 임상의가 이렇게 해야 할 의무는 없지만, 제1형 당뇨병 관리에서 환자 간 지원이 중요하다는 것을 알기 때문에 기꺼이 도와주는 임상의도 있습니다. 주변의 친절한 OS-AID 루프 사용자를 만나는 것도 도움이 될 수 있습니다. 물론 이것은 사용자가 정할 일이며, 꼭 필요한 것은 아닙니다.

#### 국내 및 국제 사례

의료진이 **AAPS**로 루프를 사용하는 것을 지지하지 않는다고 느끼면, 다음 논의 사항이 도움이 될 수 있습니다:

a) **AAPS** 시스템은 환자와 보호자가 직접 설계했습니다. 무엇보다 안전을 위해 설계되었으며, 환자의 깊은 경험도 바탕으로 하고 있습니다. 전 세계에 수천 명의 **AAPS** 사용자가 있습니다. 따라서 다니는 병원의 환자 중에도 (알려져 있든 아니든) OS-AID 루프를 사용하는 다른 환자가 있을 가능성이 높습니다.

b) 세계적인 주요 의학 저널 [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_)에 최근 게재된 동료 심사 지침은 OS-AID 루프가 범위 내 시간을 포함하여 **안전**하고 **당뇨병 조절 개선에 효과적**이라는 것을 확인했습니다. [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) 같은 주요 저널에는 OS-AID 루프 커뮤니티의 발전을 다루는 기사가 정기적으로 실립니다.

c) **AAPS**는 여러 목표를 완료하면서 “개방” 루프 펌프 사용에서 저혈당 주입 정지를 거쳐 하이브리드 “폐쇄” 루프까지 _단계적으로_ 옮겨 가는 방식으로 시작합니다. 따라서 체계적인 프로그램이 있어, 사용자는 루프를 폐쇄하기 전에 각 단계에서 일정 수준의 능력을 보여 주고 기본 설정(기저, ISF, ICR)을 세밀하게 조정해야 합니다.

d) GitHub, Discord, Facebook 비공개 그룹을 통해 OS-AID 커뮤니티의 기술 지원을 받을 수 있습니다.

e) 병원 진료 때 (Nightscout 또는 Tidepool을 통해) **CGM과 인슐린 루프/펌프 정보를 모두** 합친 보고서를 인쇄하거나 화면으로(노트북/태블릿을 가져가는 경우) 제공할 수 있습니다. CGM 데이터와 인슐린 데이터를 함께 정리하면 임상의가 보고서를 검토하는 시간을 더 효율적으로 쓸 수 있고, 진행 상황을 평가하는 논의에도 도움이 됩니다.

f) 그래도 의료진이 강하게 반대한다면, 이 글에 링크된 참고 논문을 인쇄해서 임상의에게 주고, **AAPS** 임상의 섹션 링크를 알려 주십시오: [임상의를 위한 **AAPS** 일반 소개와 가이드](../UsefulLinks/ClinicianGuideToAaps.md)

#### 다른 임상의의 OS-AID 루프 지지

[Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)에 게재된 논문(King’s 및 Guy’s and St Thomas’ NHS Foundation Trust가 공동 주도하고, 런던 King’s의 당뇨병 전문의이자 명예 선임 강사인 Dr Sufyan Hussain이 공동 주도)은 다음을 제공합니다:

a) OS-AID 인공 췌장 시스템/오픈 소스가 제1형 당뇨병에 대한 “안전하고 효과적인 치료” 방법이라는 전문가를 위한 **확인**, 그리고 권고, 논의, 지원, 문서화에 대한 지침 제공;

b) 오픈 소스 자동 인슐린 주입(“AID”) 시스템이 다양한 연령대, 성별, 집단에서 범위 내 시간(TIR)을 늘리면서 혈당 농도의 변동과 저혈당 및 고혈당 발생을 줄일 수 있다는 **인정**;

c) 의료 종사자는 오픈 소스 AID 시스템으로 당뇨병을 관리하기로 선택한 제1형 환자나 그 보호자를 **지원**해야 한다는 **권고**;

d) 의료 종사자는 이용 가능한 오픈 소스 AID 시스템을 포함하여 환자에게 도움이 될 수 있는 모든 치료 방법에 대해 배우려고 노력해야 한다는 권고.  의료 전문가가 스스로 공부할 자원이 없거나 법적 또는 규제상의 우려가 있다면, 그런 자원이 있는 **다른 의료 전문가와 협력하거나 팀을 이루는 것**을 고려해야 합니다;

e) 모든 CGM 사용자는 언제나 **자신의 건강 데이터**에 실시간으로 자유롭게 접근할 수 있어야 한다는 강조

f) 이 오픈 소스 시스템은 상업적으로 판매되는 의료 기술과 같은 규제 평가를 거치지 않았고, 상업적인 기술 지원도 없다는 강조. 하지만 **커뮤니티의 폭넓은 지원을 받을 수 있습니다**; 그리고

g) 이런 오픈 소스 시스템을 윤리적이고 효과적으로 치료에 사용하는 것을 허용하는 데 명확성을 주도록 **규제와 법적 틀**을 갱신해야 한다는 권고.

[Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_)의 다른 논문도 영국 General Medical Council(의사협의회)의 ‘동의 지침’이 의사와 환자가 함께 결정하는 것을 크게 강조한다는 점을 지적합니다. 의사는 OS-AID APS의 잠재적인 이점, 위험, 부담, 부작용을 설명해야 하며, 환자에게 압력을 주지 않고 특정 방법을 권할 수 있습니다.

결국 이 요소들과 자신에게 관련된 비임상적 문제를 함께 따져 보고, 어떤 치료 방법을 받아들일지(또는 받아들이지 않을지) 정하는 것은 환자의 몫입니다.

의사가 진료 중에 환자가 OS-AID 시스템으로 루프를 사용하고 있다는 것을 알게 되더라도, 환자가 사용하는 기술을 직접 처방하지 않았다는 이유만으로 환자를 모니터링할 의무가 면제되지는 않습니다. 임상의는 계속 환자를 모니터링해야 합니다.

의사는 (적어도 영국에서는) 허가되지 않은 의약품을 처방하는 것이 금지되어 있지 않으며, 임상적 재량을 사용할 수 있습니다. 따라서 임상적 판단으로 OS-AID APS가 특정 환자에게 맞는지 정하고, 장단점에 대한 생각을 환자와 이야기해야 합니다.

#### 위에서 언급한 논문과 기타 유용한 링크 및 입장문은 아래에 있습니다:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health 입장문, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_ (2023), _47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  네덜란드 (EN/NL) - 임상의용 - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. OPEN 프로젝트의 결과. OPEN은 새로운 DIY 인공 췌장 기술에 대한 환자 근거의 결과(Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology)를 연구하는 EU 지원 프로젝트입니다 (https://www.open-diabetes.eu/publications)



## 왜 AAPS를 내려받아 바로 사용할 수 없습니까?

**AAPS** 앱은 Google Play에서 제공되지 않습니다. 법적인 이유로 소스 코드에서 직접 빌드해야 합니다. **AAPS**는 허가를 받지 않았습니다. 즉, 어느 나라의 규제 기관에서도 승인을 받지 않았습니다. **AAPS** 사용은 자기 자신에게 의학 실험을 하는 것으로 간주되며, 사용자 본인의 책임으로 이루어집니다.

시스템을 설정하려면 인내심, 의지, 그리고 기술 지식을 조금씩 쌓아 가는 것이 필요합니다. 모든 정보와 지원은 이 문서, 다른 온라인 자료, 또는 이미 해 본 다른 사람들에게서 찾을 수 있습니다. 전 세계에서 수천 명이 **AAPS**를 성공적으로 빌드하여 현재 사용하고 있습니다.

**AAPS** 개발자들은 안전을 매우 중요하게 생각하며, 다른 사람들이 **AAPS**를 좋은 경험으로 사용하기를 바랍니다. 그래서 모든 사용자(사용자가 어린이라면 보호자)가 다음을 하는 것이 꼭 필요합니다:

- AAPS 시스템을 직접 빌드하고 **목표**를 차례로 완료하여, “루프를 폐쇄”할 때까지 어느 정도 잘 맞는 개인 설정을 갖추고 **AAPS**의 작동 기본 원리를 이해합니다;

- 중요한 파일(키 저장소와 설정 .json 파일 등)을 내보내어 안전한 곳에 저장해 시스템을 백업합니다. 그러면 필요할 때 빠르게 다시 설정할 수 있습니다;

- 새 master 버전이 나오면 그때그때 업데이트합니다; 그리고

- 시스템이 제대로 작동하는지 확인하기 위해 관리하고 모니터링합니다.

## AAPS 시스템은 어떻게 연결됩니까?

**그림 3(아래)**은 시스템과 상호 작용하는 팔로워가 필요 없는 사용자의 **AAPS** 시스템 예를 보여 줍니다. 그림에 없는 다른 오픈 소스 소프트웨어와 플랫폼도 통합할 수 있습니다.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**그림 4(아래)**는 팔로워가 있고 시스템을 원격으로 모니터링하고 조정해야 하는 사용자(제1형 당뇨병이 있는 아이 등)를 위한 **AAPS** 시스템의 모든 가능성을 보여 줍니다. 그림에 없는 다른 오픈 소스 소프트웨어와 플랫폼도 통합할 수 있습니다.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## AAPS는 어떻게 계속 개발되고 개선됩니까?

대부분의 **AAPS** 사용자는 충분히 시험된 AAPS **master** 버전을 사용합니다. 이 버전은 커뮤니티에 출시되기 전에 버그와 문제를 시험받았습니다. 그 뒤에서 개발자들은 새로운 개선 사항을 시도하고, 짧은 기간 안에 버그 업데이트를 기꺼이 하는 사용자 커뮤니티와 함께 **AAPS**의 “개발자”(**dev**) 버전에서 시험합니다. 개선 사항이 잘 작동하면 **AAPS**의 새 “master” 버전으로 출시됩니다. 새 master 출시는 Facebook 그룹에 공지되므로, 일반 **AAPS** 사용자는 내용을 읽고 새 master 버전으로 업데이트할 수 있습니다.

경험이 많고 자신 있는 일부 **AAPS** 사용자는 새로운 기술과 **AAPS** 앱의 dev 버전으로 실험을 합니다. 덜 모험적인 사용자는 직접 하지 않고도 이런 실험에 대해 흥미롭게 읽을 수 있습니다! 사람들은 이런 실험을 Facebook 그룹에서도 공유합니다.

이런 실험과 새로운 기술에 대한 논의는 여기에서 더 읽을 수 있습니다:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## 누가 AAPS로 도움을 받을 수 있습니까?

| 사용자 유형                   |
| ------------------------ |
| ✔️ 제1형 당뇨병 환자            |
| ✔️ 제1형 당뇨병 환자의 보호자 또는 부모 |
| ✔️ 시각 장애가 있는 제1형 당뇨병 환자  |
| ✔️ *임상의와 의료 전문가          |

위 표는 사용자가 연속 혈당 측정기와 인슐린 펌프를 모두 사용할 수 있다고 가정합니다.

***AAPS**의 모든 데이터는 데이터 공유 플랫폼을 통해 의료 전문가에게 제공할 수 있습니다. 여기에는 CGM 데이터, 인슐린 주입, 탄수화물 입력, 예측, 설정을 기록하고 실시간으로 모니터링하는 Nightscout가 포함됩니다. Nightscout 기록에는 일간 및 주간 보고서가 있어, 혈당 조절과 생활 습관에 대한 더 정확한 데이터로 의료 전문가와 제1형 환자의 논의를 도울 수 있습니다.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### 시력이 부분적으로 또는 완전히 없는 AAPS 사용자를 위한 접근성

#### 일상적인 AAPS 사용:
AAPS는 시각 장애인도 사용할 수 있습니다. Android 기기의 운영 체제에는 TalkBack이라는 프로그램이 있습니다. 이 프로그램은 운영 체제의 일부로서 음성 출력으로 화면 내용을 알려 줍니다. TalkBack을 사용하면 화면을 보지 않고도 스마트폰과 AAPS를 모두 조작할 수 있습니다.

#### AAPS 앱 빌드:
사용자는 Android Studio에서 AAPS 앱을 빌드합니다. 많은 사람이 이 작업에 Microsoft Windows를 사용합니다. Windows에는 TalkBack과 비슷한 화면 낭독기가 있습니다. Android Studio는 Java 애플리케이션이므로, 제어판에서 “Java Access Bridge” 구성 요소를 활성화해야 합니다. 그렇지 않으면 PC의 화면 낭독기가 Android Studio에서 읽어 주지 않습니다.

방법은 운영 체제에 따라 다릅니다. 아래에 두 가지 방법이 있습니다:

1) Windows 시작 메뉴의 검색 창에 “Control Panel”(제어판)을 입력하고 Enter 키로 엽니다. “All Control Panel Items”(모든 제어판 항목)가 열립니다.

"Ease of Access Centre"(접근성 센터)를 엽니다.

그다음 Enter 키로 “Use computer without a display”(디스플레이 없이 컴퓨터 사용)를 엽니다.

**Hear text read aloud**(텍스트를 소리 내어 읽기)에서 **turn on narrator**(내레이터 켜기)와 **turn on audio display**(오디오 디스플레이 켜기)를 선택한 다음 **apply**(적용)를 누르십시오.

or:

2) Windows 키를 누르고 검색 창에 “Control Panel”(제어판)을 입력한 다음 Enter 키로 엽니다. “All Control Panel Items”(모든 제어판 항목)가 열립니다.

E 키를 눌러 “Ease of Access Centre”(접근성 센터)로 이동하고 Enter 키로 엽니다.

그다음 Enter 키로 “Use computer without a display”(디스플레이 없이 컴퓨터 사용)를 엽니다.

아래쪽에 “Enable Java Access Bridge”(Java Access Bridge 사용) 확인란이 있습니다. 이것을 선택하십시오.

완료되었습니다. 창을 닫기만 하면 됩니다! 이제 화면 낭독기가 작동할 것입니다.



AAPS 설정을 어떻게 시작하는지 알고 싶습니까? [준비](../Getting-Started/PreparingForAaps.md) 섹션을 살펴보십시오.
