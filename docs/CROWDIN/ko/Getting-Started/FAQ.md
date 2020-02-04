# Loop 사용자를 위한 FAQ

FAQ에 질문 추가하기: 다음 [설명](../make-a-PR.md)을 따르세요

# 일반

## AndroidAPS 설치 파일을 다운로드 할 수 있습니까?

아니오. AndroidAPS apk 파일을 다운받을 수 없습니다. 본인 스스로 파일을 [빌드](../Installing-AndroidAPS/Building-APK.md)해야만 합니다. 그 이유는 다음과 같습니다:

AndroidAPS 는 인슐린펌프를 제어하고 인슐린을 주입하는 기기입니다. 유럽에의 현제 법률 규정에 따르면 Class IIa 혹은 Class IIb 단계의 의료기기는 많은 연구와 검증을 요하는 규제승인(CE마크)를 획득하여야 합니다. 허가 받지 않은 기기를 배포하는 행위는 불법입니다. 세계의 다른 지역에서도 마찬가지로 비슷한 규제가 존재합니다.

이 규정은 (금전적인 대가에 대한 의미로서) 판매하는 것에만 적용되는 것이 아닙니다. 다른 어떠한 종유의 (금전적인 대가 없는) 배포에도 역시 적용됩니다. 본인 스스로 이 장치를 빌드하는 것이 이러한 규제에 영향을 받지 않을 유일한 방법입니다.

이것이 APK 파일 다운로드를 할 수 없는 이유입니다.

## 어떻게 시작해야 합니까?

우선, **Loop가능한 하드웨어 장치들**이 필요로 합니다:

* [지원되는 인슐린펌프](Pump-Choices.md), 
* [안드로이드 스마트폰](Phones.md) (아이폰은 AndroidAPS에서 지원하지 않습니다 - 아이폰을 사용하려면 Loop를 알아보세요 [iOS Loop](https://loopkit.github.io/loopdocs/)) 
* [연속혈당측정기](../Configuration/BG-Source.rst). 

두번째로, **본인의 하드웨어를 설정해야 합니다**. [단계별 튜토리얼 설정 예시를 확인해 보세요](Sample-Setup.md).

세번째로, **소프트웨어 요소들을 설정하여야 합니다**: AndroidAPS 와 CGM/FGM 소스.

네번째로, **관리 요인에 대해 확인하기 위하여 OpenAPS 참조 설계에 관한 공부를하고이해하여야 합니다**. Closed Loop를 하기 위해 가장 기본적으로 요구되는 사항은, 당신의 Basal양과 탄수화물 비율(carb ratio)가 정확해야한다는 점입니다. Closed Loop의 모든 제안들은 당신 필요한 Basal 적정하다고 가정하고 계산됩니다. 따라서 모든 혈당 피크와 저점은 (운동, 스트레스 등) 다른 일시적인 요인들의 결과이며, 인슐린의 일시적인 조절로 관리가 가능하다고 가정합니다. 안전을 위해, Closed Loop가 조절을 하는데 제한이 있습니다. ([OpenAPS Reference Design](https://openaps.org/reference-design/)에서 최대 허용 임시Basal 양을 확인해보세요.) 이것은 당신이 잘못 설정된 Basal양을 바로잡는 용도로 Loop를 사용해서는 안된다는 것을 의미합니다. 예를 들면, 만약 당신이 식사전에 저혈당에 자주 노출된다면 Basal양을 조정할 필요한 것일 수도 있습니다. Autotune</ 0>을 사용하면, 많은 양의 데이터를 기반으로 Basal 및 ISF 조정이 필요한지 혹은 탄수화물 비율(carb ratio)이 변경될 필요가 있는지를 알 수 있습니다. 혹은 [전통적인 방법](http://integrateddiabetes.com/basal-testing/)을 통해서 당신의 Basal량을 테스트하고 설정할 수도 있습니다.</p> 

## Loop를 위한 실질적인 조언들

### 비밀번호 보호

설정이 쉽게 변경되길 원치 않는다면 설정에 암호를 걸어 보호할 수 있습니다. 설정에서 "설정 비밀번호"를 선택하여 원하는 비밀번호를 입력하면 됩니다. 그 이후로는 설정에 들어갈때마다 비밀번호를 물어볼것입니다. 비밀번호 삭제를 원하면 "설정 비밀번호"를 선택한 후 모든 글자를 삭제하세요.

### 안드로이드 웨어 스마트워치

Bolus를 주입하거나 설정을 변경하기 위해 안드로이드 워치앱을 사용할 계획이라면 AndroidAPS의 알림이 차단되지않은 것을 확인하여야 합니다. 알림을 통하여 확인할 수 있습니다.

### 펌프 일시중지

샤워/목욕/수영/운동 등을 위해 펌프를 분리한다면. 그 기간동안 인슐린이 주입되지 않았다는 것을 AndroidAPS에게 알려 올바른 IOB를 유지시켜야합니다.

* 홈 화면의 상단의 'Closed loop' (또는 'Open Loop') 버튼을 길게 누릅니다. 
* **'X분(시간) 동안 펌프 일시중지'**을 선택합니다
* 이는 해당 시간동안 Basal을 0으로 설정할 것입니다.
* 일시중지를 위한 최소시간은 펌프에서 설정될 수 있는 최소시간의 임시Basal 시간으로 인한 것입니다. 따라서 짧은 기간 동안 연결을 끊으려면 펌프에 사용 가능한 가장 짧은 기간을 선택하십시오. 그런 다음 아래 설명에 따라 펌프를 수동으로 다시 연결하십시오.
* 'Closed Loop' (또는 'Open Loop') 버튼이 '연결 끊어짐(xx분)'으로 남은시간과 함께 변경되고 버튼의 색상도 붉은색으로 변합니다.
* AAPS가 선택된 시간이후 자동으로 재연결되게 되고 Closed Loop 역시 자동으로 다시 작동됩니다.
    
    ![펌프 일시중지](../images/PumpDisconnect.png)

* 선택된 시간이 너무 길다면 수동으로 재연결 할 수 있습니다.

* 붉은색의 '연결 끊어짐(xx분)' 버튼을 길게 누릅니다.
* '펌프 재연결'을 선택하세요
    
    ![Reconnect pump](../images/PumpReconnect.png)

### 단 하나의 CGM 혈당값을 기반으로 판단하는 것이 아닙니다.

안전상의 이유로, CGM에서 들어오는 하나의 혈당값뿐만 아니라 평균 혈당 증분까지 기반으로 하여 판단하게 됩니다. 따라서 센서에서 일부 혈당이 누락되면 AndroidAPS가 필요한 새 데이터를 수집한 다음를 Loop를 다시 시작하는 데 시간이 걸릴 수 있습니다.

### 추가 참고자료

Loop를 사용하는데 있어서 실질적으로 필요한 사항에 대해 이해하는데 도움이 될만한 좋은 팁들이 있는 여러 블로그들이 있습니다.

* [설정 미세 조정하기](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [왜 DIA가 중요한가요?](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
* [식사후 혈당의 Spike(급등락) 제어하기](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [호르몬과 Autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## 어떤 응급 장비가 준비되어 있어야 하나요?

우선, 인슐린 펌프를 사용하는 다른 1형당뇨인에게 필요한 것과 동일한 응급 장비가 있어야 합니다. AndroidAPS에서 Loop를 사용한다면 다음과 같은 추가 장비를 휴대하거나 근처에 구비해도는 것을 강하게 추천합니다.

* 스마트 폰, 워치 및 (필요한 경우) 블루투스 리더기를 충전하기 위한 보조배터리
* 당신이 사용하는 앱을 클라우드에 백업하세요: 최신 AndroidAPS-APK 설치파일, Key store 비밀번호, AndroidAPS 설정 파일, xDrip 설정파일, (패치된) Dexcom앱 등
* 펌프 배터리

## CGM/FGM을 어떻게 안전하게 부착하나요?

테이프를 부착할 수 있습니다: 일반적인 CGM 센서모양에 맞게 제작된 패치테이프가 판매되고 있습니다. (구글이나 이베이에서 찾아보세요). 일부 Loop사용자는 저렴한 일반 운동용 테이프를 사용하기도 합니다.

고정하는 방법이 있습니다: CGM/FGM을 고무 밴드로 고정시키는 팔뚝 밴드가 판매되고 있습니다 (구글이나 이베이에서 찾아보세요).

# AndroidAPS 설정

다음 사항은 설정을 최적화하는데 도움을 주기 위한 것들입니다. 위에서 아래 순서대로 시작하는것이 가장 좋습니다. 다음번 설정을 변경하기 전에 현재의 설정이 제대로 되었는지 집중하세요. 한번에 모든 것을 완벽하게 설정하려하기 보단 조금씩 단계별로 진행하세요. [Autotune](https://autotuneweb.azurewebsites.net/) 기능을 사용할 수 있지만 맹목적으로 신뢰하여서는 안됩니다: 당신에게는 이 기능이 맞지 않을 수도 있고 또는 모든 환경에서 제대로 작동되지 않을 수도 있습니다. 각 설정이 상호 작용한다는 점을 명심하십시오. 특정 환경 (예: 너무 높은 Basal이 너무 높은 CR과 동시에 발생하는 경우)에서 제대로 작동하는 '잘못된' 설정이 있을 수 있지만 다른 환경에서는 그렇지 않습니다. 이는 당신이 모든 설정을 고려하고 다양한 환경에서 함께 잘 작동하는지 확인해야 함을 의미합니다.

## 인슐린 활동 기간(Duration of insulin activity : DIA)

### 설명 & 테스트

인슐린이 완전히 분해되어 0이 될때까지 걸리는 시간.

이 값은 때때로 너무 짧게 잘못설정하는 경우가 있습니다. 일반적인 경우 최소 5시간, 또는 6 혹은 7 시간으로 설정하게 됩니다.

### 영향

너무 짧은 DIA는 저혈당을 유발할 수 있습니다. 그리고 반대의 경우도 마찬가지입니다.

DIA가 너무 짧게 설정되면, AAPS가 당신이 직전에 주입한 Bolus가 모두 흡수되었다고 너무 일찍 판단하게 되고 그 때 혈당이 높이 유지되고 있다면 적정양 이상으로 인슐린을 더 주입하게 될것입니다. (실제로는, 그렇게 오래 기다리지 않지만 어떤 일이 발생하고 인슐린을 추가를 유지할 것인지 예측합니다). 이것이 근본적으로 AAPS가 알지 못하는 '인슐린 축적'을 발생시키게 됩니다.

너무 짧은 DIA의 예는 고혈당에 이은 AAPS의 과도한 교정주입이고 이는 저혈당을 야기시키게 됩니다.

## Basal rate schedule (U/h)

### 설명 & 테스트

안정적인 혈당을 유지하기 위해 특정 시간대에 설정되는 인슐린의 양.

Loop를 중지, 금식하고, 음식을 먹은 후 5 시간 동안 기다린 후 혈당이 어떻게 변하는 지 확인하여 Basal 양을 테스트하세요. 이를 몇번 더 반복해봅니다.

혈당이 떨어지면, Basal 양이 너무 높은 것입니다. 그리고 반대의 경우도 마찬가지입니다.

### 영향

너무 높은 Basal 양은 저혈당을 유발할 수 있습니다. 그리고 반대의 경우도 마찬가지입니다.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## 인슐린 민감도(ISF) (mmol/l/U 또는 mg/dl/U)

### 설명 & 테스트

인슐린 1U 투여로 혈당이 얼마나 떨어지는지에 대한 설정

적정량의 Basal이 설정이 되어 있다고 가정하고, Loop를 중지 IOB가 0인지 확인한 다음 조금 더 '높은' 혈당 수치에 도달하도록 식염포도당 몇알을 복용하여 테스트할 수 있습니다.

그런 다음 목표로한 혈당에 도달하기 위해 일정량의 인슐린 (현재 ISF를 기준으로) 을 주입하세요.

이 설정이 종종 매우 낮게 설정되므로 주의하세요. 너무 낮게 설정되면 1U이 예상보다 더 빨리 혈당을 강하시키게 됩니다.

### 영향

**낮은 ISF** (예: 50 대신 40) = 각 인슐린 단위에 대해 더 공격적이고/강하게 되어 더 크게 혈당을 강하시킵니다. 너무 낮다면, 저혈당을 유발할 수 있습니다.

**높은 ISF** (예: 35 대신 45) = 각 인슐린 단위에 대해 덜 공격적이고/약하게 되어 더 작게 혈당을 강하시킵니다. 너무 높다면, 고혈당을 유발할 수 있습니다.

**예:**

* 혈당이 190 mg/dl 이고 목표는 100 mg/dl 라고 가정합니다. 
* 따라서, 이는 90 mg/dl을 강하시켜야하는 상황입니다 (190 - 100).
* ISF를 30으로 설정했을 경우 -> 90 / 30 = 3유닛의 인슐린
* ISF를 45로 설정했을 경우 -> 90 / 45 = 2유닛의 인슐린

AAPS가 고혈당을 잡기위해 실제로 필요한 양보다 더 많은 인슐린이 필요하다고 생각할 수 있기 때문에, 너무 낮은 ISF는 '인슐린 과잉 주입'을 유발 할 수 있습니다. 이는 '롤러 코스터' 혈당을 유발할 수 있습니다. (특히. 금식 중일 때). 이 상황에서는 ISF를 올려야합니다. 이는 AAPS가 더 적은양을 주입하게 하여, 고혈당일때 과도한 주입을 하지 않게 함으로써 저혈당을 방지하게 됩니다.

반대로, ISF가 너무 높으면 주입이 불충분하게 되고, 혈당이 높게 유지가 되게됩니다 - 특히 수면중에 이런 현상이 초래하게 됩니다.

## 인슐린-탄수화물 비(IC) (g/U)

### 설명 & 테스트

인슐린 1U이 탄수화물 몇 그램(g)을 처리할 수 있는지에 대한 설정.

IC대신 I:C라고도 하며, 탄수화물비율(CR)이라는 용어로 사용되기도 합니다.

적정한 양의 Basal이 설정되어 있다고 가정하고, IOB가 0인 상태에서 혈당이 적정 범위내에 있고 탄수화물양을 확실히 알고 있는 음식을 섭취하고 현재 인슐린-탄수화물비에 기초로 추정된 인슐린을 주입함으로써 이를 테스트할 수 있습니다. 최선의 방법은 당신이 보통 먹는 시간대에 평소 먹는 음식을 섭취하고 정확한 탄수화물양을 계산하는 것입니다.

> **참고:**
> 
> 일부 유럽 국가들에서는 얼마나 많은 인슐린이 필요한지 결정하기 위해 빵 단위(bread units)를 사용합니다. 초기엔 1 빵단위(bread unit)가 12g의 탄수화물에 해당하였었는데, 나중에 10g의 탄수화물로 변경되었습니다.
> 
> 이 빵단위 모델에서는 탄수화물의 양은 고정되어있고 인슐린의 양이 가변적입니다. ("1 빵단위(bread unit)를 처리하기 위해 얼마나 많은 인슐린이 필요합니까?")
> 
> 반대로 IC를 사용할땐 인슐린 양이 고정되어 있고 탄수화물 양이 가변적입니다. ("1유닛의 인슐린이 얼마나 많은 탄수화물(g)을 처리할 수 있습니까?")
> 
> 예:
> 
> 빵유닛 (BU = 12g 탄수화물): 2.4 -> 1 빵단위를 섭취할 때 2.4 유닛의 인슐린이 필요합니다.
> 
> 이에 해당하는 IC: 12 / 2.4 = 5.0 -> 5.0 g의 탄수화물이 1단위의 인슐린으로 처리될 수 있습니다.
> 
> 환산표는 다음 링크에서 확인가능합니다. [환산표 링크](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### 영향

**낮은 IC** = 인슐린 단위당 더 적은 음식양, 즉 일정 양의 탄수화물에 대해 더 많은 인슐린이 주입됩니다. '더 공격적'이라고 할 수 있습니다.

**높은 IC** = 인슐린 단위당 더 많은 음식양, 즉 일정 양의 탄수화물에 대해 더 적은 인슐린이 주입됩니다. '덜 공격적'이라고 할 수 있습니다.

식사가 소화가 되고 IOB가 0으로 복귀했는데 혈당이 식사전 보다 더 높게 유지가 되었다면, IC가 너무 높이 설정되었을 가능성이 있습니다. 반대로 혈당이 식사전보다 낮다면, IC가 너무 작게 설정되었을 가능성이 있습니다.

# APS algorithm

## Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

## 프로파일

### Why using min. 5h DIA (insulin end time) instead of 2-3h?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### What causes the loop to frequently lower my BG to hypoglycemic values without COB?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Other settings

## Nightscout 설정

### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM 설정

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## 펌프

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### 배터리

Loop사용은 펌프 배터리를 더 빠르게 소모시킬 수 있습니다. 이는 일반적인 사용보다 더 빈번하게 블루투스 통신을 하기 때문입니다. 배터리를 25%가 되면 교체하는 것이 좋습니다. 그렇지 않으면 펌프 통신이 불안정 할 수 있습니다. Nightscout 사이트에 PUMP_WARN_BATT_P 변수를 사용하면 펌프배터리 경고 알람을 설정할 수 있습니다. 다음은 배터리 수명을 늘려줄 수 있는 요령입니다:

* 펌프 설정메뉴에서 LCD가 켜져있는 시간을 줄여주세요.
* 펌프 설정메뉴에서 백라이트가 켜져있는 시간을 줄여주세요.
* 펌프 설정메뉴에서 진동보다는 소리알람으로 설정하세요.
* 교체시에만 펌프에 있는 버튼을 이용하세요. 이력, 배터리 및 주사기 용량들을 확인할땐 AndroidAPS를 이용하세요.
* AndroidAPS가 특정스마트폰에서는 자원과 메모리를 절약하기 위해 자주 종료될 수도 있습니다. AndroidAPS 재시작될때마다 펌프와 블루투스로 연결이 될 것이고, 현재 Basal과 Bolus 이력을 다시 조회하게 됩니다. 이것이 배터리를 소모시키게 됩니다. 이러한 행동을 확인하고 싶으면 설정 > NSClient 로 가서 '앱시작을 NS에 기록하기'를 활성화 하세요. AndroidAPS가 재시작할때마다 Nightscout 이벤트를 기록하게 되며, 이 문제를 쉽게 추적할 수 있습니다. 이 문제를 해결하기 위해서 스마트폰 배터리 설정에서 AndroidAPS를 예외 허용케 하여, 폰이 스스로 배터리를 절약하기 위해 강제 종료를 못하도록 방지합니다.
    
    예를 들면, Android Pie(안드로이드 9.0) 삼성폰에서 예외를 허용하기 위해서:
    
    * 설정 -> 디바이스 관리 -> 배터리 에 들어갑니다 
    * AndroidAPS가 나올때까지 스크롤하여 선택합니다 
    * "앱을 휴면 상태로 두기" 를 선택 취소합니다.
    * 또 설정 -> 앱 -> (화면 우측상단의 점 세개 기호) 에 들어간 후 "특별한 접근" -> 배터리 사용량 최적화에 들어갑니다
    * AndroidAPS를 찾은 후 선택 해제되어있는지 확인합니다.

* 알코올로 배터리 전극을 청소하여 왁스및 그리스 잔여 물이 남아 있지 않도록 합니다.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### 음주

알콜이 혈당에 어떤 영향을 줄지 알고리즘이 예측할 수 없기때문에 Closed Loop에서 음주하는것은 위험합니다. AndroidAPS에서 다음 기능들을 사용하여 음주시 어떻게 대처해야하는지 본인만의 방법을 찾아야합니다.

* Closed Loop를 비활성화하고 수동으로 당뇨를 관리하거나
* 높은 임시 목표를 설정하고 UAM을 비활성화하여 의도치 않고 섭취한 음식으로 인해 Loop가 IOB를 높이는 것을 방지하거나
* 100%보다 훨씬 낮게 프로파일을 변경합니다. 

음주를 할때는, CGM을 항시 확인해서 스스로 저혈당이 예상될 경우 직접 탄수화물을 섭취하여 저혈당을 방지하여야 합니다.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).