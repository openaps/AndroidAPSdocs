# AndroidAPS 화면

## 홈 화면

![Homescreen V2.5](../images/Screenshot_Home_screen_V2_5_1.png)

홈 화면은 AndroidAPS를 실행했을 때 처음 나오는 화면이며, 매일매일 필요한 정보의 대부분을 포함하고 있습니다.

### 섹션 A

* 왼쪽 또는 오른쪽으로 화면을 넘겨 AndroidAPS의 다양한 모듈들을 확인할 수 있습니다.

### 섹션 B

* loop의 상태 (open loop, closed loop, loop 중지 등) 를 변경할 수 있습니다.
* 현재 프로파일을 확인하고 [프로파일 변경](../Usage/Profiles.md)을 할 수 있습니다.
* 현재 목표 혈당 수준을 확인하고 [임시 목표](../Usage/temptarget.md)를 설정할 수 있습니다.

설정을 변경하려면 버튼을 길게 누르십시오. 예를 들어, 우측 상단의 목표 버튼(위 스크린샷의 "100")을 길게 눌러 임시 목표를 설정할 수 있습니다.

### 섹션 C

* CGM에서 전송된 가장 최근 혈당값을 의미합니다.
* 몇 분 전에 혈당값이 전송되었는지를 의미합니다.
* 최근 15분과 40분 동안의 혈당 변화를 의미합니다.
* 시스템이 실행한 임시 basal 양 (TBR) 과 현재 basal 양을 의미합니다.
* 체내 잔여 인슐린 (IOB) 을 의미합니다.
* 체내 잔여 탄수화물 (COB) 을 의미합니다.

옵션으로 [상태 표시](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) 에서 펌프 주입세트의 변경 기한 지남, 펌프의 인슐린 부족과 펌프의 배터리 레벨에 대한 시각적 경고를 보여줍니다.

원래 설정한 표준 basal이 주입되고 있고, 이전 bolus 주입에서 남은 인슐린이 없는 경우에는 IOB가 0으로 표시됩니다. 괄호 안의 숫자는 이전 bolus 주입에서 남아있는 인슐린 양과 AAPS에서 이전에 실행한 TBR에 따른 basal의 차이를 의미합니다. 가까운 시간에 basal 감소 기간이 있었던 경우에는 두 번째 항목이 음수로 표시될 것입니다.

### 섹션 D

섹션 D 화면에서 우측에 있는 화살표를 클릭하면 하단 차트에 표시되는 정보를 선택할 수 있습니다.

### 섹션 E

그래프는 혈당 모니터 (CGM) 에서 전송된 혈당값 (BG) 과 채혈 교정 등의 nightscout 알림, 탄수화물 입력을 보여줍니다.

그래프를 길게 눌러 시간 범위를 변경할 수 있습니다. 6, 8, 12, 18 또는 24시간 단위를 선택할 수 있습니다.

연장된 선은 예측된 혈당값 계산과 경향을 나타냅니다 (사용 선택한 경우).

* **주황색** 선: [COB](../Usage/COB-calculation.rst) (주황색은 COB와 탄수화물을 나타내기 위해 사용됩니다.)
   
   예측선은 현재 펌프 설정을 기반으로 하여, 탄수화물 흡수에 따른 편차가 일정하게 유지될 것이라고 가정했을 때의 혈당값을 보여줍니다 (COB 자체를 의미하는 것이 아닙니다). 이 선은 입력된 COB가 있을 때만 나타납니다.

* **진한 파란색** 선: IOB (진한 파랑색은 IOB와 인슐린을 나타내기 위해 사용됩니다.)
   
   예측선은 인슐린이 단독으로 작용하였을 때 혈당값이 어떻게 변할지를 보여줍니다. 즉, 인슐린을 주입한 뒤 탄수화물을 전혀 섭취하지 않은 상황입니다.

* **연한 파란색** 선: zero-temp (임시 basal 양이 0%로 설정되었을 때 예측되는 혈당값)
   
   예측선은 펌프가 모든 인슐린 주입을 중단했을 때 (0% TBR) IOB 궤도가 어떻게 변할지를 보여줍니다.

* **진한 노랑색** 선: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (사용자가 입력하지 않은 식사)
   
   입력되지 않은 식사는 식사, 아드레날린 또는 다른 영향으로 인한 혈당값의 유의한 증가를 의미합니다. 예측선은 주황색 COB 선과 비슷하지만, (현재의 감소 속도를 적용하여) 일정한 비율로 편차가 줄어들 것으로 예측합니다.

일반적으로 실제 포도당 곡선은 이 선들의 중간에서 끝나거나, 실제 상황에 거의 가깝게 예측했을 때는 이 선들 중 하나에 가깝게 끝날 것입니다.

**파란색 실선**은 펌프에서 주입되는 basal 양을 의미합니다. **점선**은 임시 basal 조절 (TBR) 이 없을 때의 basal 양을 의미하고, 실선은 시간에 따라 실제로 주입된 양입니다.

**노란색 선**은 인슐린의 활동을 의미합니다. 이는 다른 요인 (예를 들어, 탄수화물) 이 존재하지 않을 때, 인슐린이 어느정도 혈당값을 떨어뜨릴지 예상하는 근거가 됩니다.

### 섹션 F

섹션 D의 옵션을 사용하여 이 섹션도 설정할 수 있습니다.

* **Insulin On Board (IOB)** (파란색 차트): 체내 잔여 인슐린을 의미합니다. TBR, SMB가 없고, bolus가 남아있지 않다면 이는 0이 될 것입니다. 감소하는 정도는 DIA와 인슐린 프로파일 설정에 따릅니다. 
* **Carbs On Board (COB)** (주황색 차트): 체내 잔여 탄수화물을 의미합니다. 감소하는 정도는 알고리즘이 분석한 편차에 따릅니다. 예상한 것보다 높은 탄수화물 흡수를 감지하면, (안정성 설정에 따라 많은 양이나 적은 양의) 인슐린을 주입해 IOB를 증가시킬 것 입니다. 
* **편차**: 
   * **회색 막대**는 탄수화물에 의한 편차를 의미합니다. 
   * **초록색 막대**는 알고리즘이 예상한 것보다 혈당값이 높다는 것을 의미합니다. 
   * **빨간색 막대**는 알고리즘이 예상한 것보다 혈당값이 낮다는 것을 의미합니다.
* **민감도** (흰 선): [Autosens](../Usage/Open-APS-features#autosens)가 감지한 민감도를 의미합니다. 민감도는 운동, 호르몬 등에 의한 인슐린의 감수성을 계산한 것입니다.
* **활동** (노란색 선): 인슐린 프로파일에 의해 계산된 인슐린의 활동을 의미합니다 (IOB에 따른 것이 아님). 이 값은 인슐린의 피크 시간에 근접할 때 높게 나타납니다. 이것은 IOB가 감소할 때 음수로 나타남을 의미합니다. 

### 섹션 G

Bolus를 주입하고 (일반적으로 계산기 버튼을 사용함), CGM 채혈 교정을 입력할 수 있습니다. 또한 [구성 마법사](../Configuration/Config-Builder#quickwizard-settings)에서 설정하여 빠른 마법사 버튼을 나타나게 할 수 있습니다.

## 계산기

![계산기](../images/Screenshot_Bolus_calculator.png)

식사 bolus를 주입하고 싶을 때 일반적으로 사용하는 방법입니다.

### 섹션 H

Bolus에 대한 원하는 정보들을 입력하는 항목이 포함되어 있습니다. 혈당값 영역은 일반적으로 CGM에서 전송된 최신 수치가 미리 입력되어 있습니다. CGM이 작동하고 있지 않는 경우에는 이 영역이 공백으로 나타날 것입니다. CARBS 영역에는 bolus를 위한 탄수화물 양 또는 등가의 양에 대한 추정치를 입력합니다. CORR 영역은 몇몇 이유로 인하여 최종 용량을 수정하려는 경우에 사용하며, CARB TIME 영역은 식전 bolus 주입 시 탄수화물 섭취 전 지연시간이 있음을 시스템에 입력할 때 사용할 수 있습니다. 이전에 섭취한 탄수화물에 대한 bolus를 주입하는 경우 이 영역에 음수를 입력할 수 있습니다.

SUPER BOLUS 사용 시 다음 2시간 동안의 basal 인슐린을 bolus에 추가하여 주입하고, 추가된 인슐린을 되돌리기 위해 이후 2시간 동안은 zero TBR을 사용하게 됩니다. 이 아이디어는 인슐린을 더 빨리 전달하고 혈당 스파이크를 줄이기 위한 것입니다.

### 섹션 I

계산된 bolus를 보여줍니다. 체내 잔여 인슐린의 양이 계산된 bolus 양을 이미 초과하는 경우에는 필요한 탄수화물의 양만을 표시할 것입니다.

### 섹션 J

Bolus를 계산하는 데 사용되는 다양한 요소들을 보여줍니다. 포함을 원하지 않는 항목은 선택 취소할 수 있으나 일반적으로 적용하지 않을 것입니다.

### COB와 IOB의 조합과 의미

<ul>
    <li>COB와 IOB 체크 시: 인슐린으로 아직 커버하지 못한 흡수되지 않은 탄수화물 + TBR 또는 SMB로 주입된 모든 인슐린을 계산 시 고려함.</li>
    <li>COB만 선택 시: AAPS가 이미 주입된 인슐린을 고려하지 않기 때문에 과도한 인슐린 주입의 위험이 있음. </li>
    <li>IOB만 선택 시: AAPS가 이미 주입된 인슐린을 고려하지만, 이는 흡수되어야 하는 탄수화물를 커버하지 않게 됨. 이로 인해 '누락된 탄수화물' 문구가 발생합니다.
</ul>

식사 bolus 직후에 추가적인 음식 (추가 디저트)를 위해 bolus를 주입한다면 모든 항목의 선택 해제가 도움이 될 수 있습니다. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

### 잘못된 COB 감지

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

Bolus 마법사를 사용한 후 위와 같은 경고가 나온다면, 계산된 COB 값이 잘못된 것일 수 있음을 AndroidAPS가 감지한 것입니다. 따라서, 이전 식사 이후에 COB를 포함하여 다시 bolus를 주입하려면 용량 초과에 유의해야 합니다! 자세한 내용은 [COB 계산 페이지](../Usage/COB-calculation#detection-of-wrong-cob-values)를 참고하십시오.

## 인슐린 프로파일

![인슐린 프로파일](../images/Screenshot_insulin_profile.png)

선택한 인슐린의 작용 프로파일을 보여줍니다. 보라색 선은 시간이 경과함에 따라 주입된 인슐린이 얼마나 남아 있는지를 의미하며, 파란색 선은 인슐린이 어떻게 작용하는지를 보여줍니다.

Oref 프로파일 중 하나를 일반적으로 사용하며, 인슐린이 긴 꼬리를 갖는 형태로 사라진다는 것이 중요합니다. 만약 수동으로 펌프를 사용해왔다면, 인슐린이 약 3.5시간에 걸쳐 사라진다고 추측했을 것입니다. 그러나 loop을 사용할 때는 계산이 더 정교하기 때문에 긴 꼬리가 중요하며, AndroidAPS 알고리즘에서 반복해서 계산을 할 때 이 작은 용량들을 더해서 계산하게 됩니다.

서로 다른 종류의 인슐린과 이들의 작용 프로파일과 왜 이것들이 모두 중요한지에 대한 자세한 내용은 [지수 작용 곡선에 따른 새로운 IOB 곡선 이해하기](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) 글에서 읽을 수 있습니다.

또한, 이 내용에 관한 훌륭한 블로그 글을 여기에서 읽을 수 있습니다: [우리는 왜 사용하는 인슐린의 작용 시간 (DIA) 을 자주 잘못 생각하고, 이것이 왜 중요한가...](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

추가적인 내용: [인슐린의 지수 곡선 + 피아스프](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## 펌프 상태

![펌프 상태](../images/Screenshot_pump_Combo.png)

인슐린 펌프의 상태를 확인할 수 있습니다. Accu-Chek Combo의 예시입니다. 표시되는 정보들은 부가적인 설명없이 이해하실 수 있을 것입니다. 이력 버튼을 길게 누르면 펌프로부터 basal 프로파일을 포함한 이력 데이터를 전송 받을 수 있습니다. 그러나 Combo 펌프는 하나의 basal 프로파일만 지원되는 것을 기억하십시오.

## 케어 포털

케어 포털은 Nightscout 화면에서 "+" 기호를 눌러 기록에 메모를 남기는 기능과 같은 것입니다.

### 탄수화물 교정

관리 탭에서는 잘못 입력한 탄수화물을 수정할 수 있습니다 (탄수화물을 과다 또는 과소 평가한 경우).

1. 홈 화면에서 실제 COB와 IOB를 확인하고 기억하십시오.
2. 펌프에 따라 관리 탭에서 탄수화물이 인슐린과 함께 하나의 항목으로 표시되거나 별도의 항목으로 표시 (Dana RS의 경우) 될 수 있습니다.
   
   ![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

3. 잘못 입력된 탄수화물을 삭제하십시오.

4. 홈 화면에서 COB를 확인하여 탄수화물이 제대로 삭제되었는지 확인하십시오.
5. 관리 탭에 탄수화물과 인슐린이 하나의 항목으로 표시될 경우 IOB에 대해서도 똑같이 진행하십시오.
   
   -> 의도한 대로 탄수화물이 제거되지 않은 채 (6) 의 설명처럼 추가로 탄수화물을 입력하는 경우, COB가 너무 높아서 과도한 인슐린 주입이 이루어질 수 있습니다.

6. 홈 화면에서 탄수화물 버튼을 눌러 올바른 탄수화물 양을 입력하고, 식사 시간 설정이 올바르게 되었는지 확인하십시오.

7. 관리 탭에 탄수화물과 인슐린이 하나의 항목으로 표시될 경우에는 인슐린 양도 다시 입력해야 합니다. 인슐린 주입 시간 설정이 올바르게 되었는지 확인해야하며, 새로 입력한 뒤에는 홈 화면에서 IOB를 확인하십시오.

## Loop, MA, AMA, SMB

시스템이 CGM에서 새로운 값을 전송받을 때마다 실행되는 OpenAPS 알고리즘의 결과를 표시하며, 일반적으로 이것들에 대해 걱정할 필요는 없습니다. 이에 대한 내용은 나중에 다루겠습니다.

## 프로파일

![프로파일](../images/Screenshot_profile.png)

AndroidAPS는 다양한 프로파일 설정을 적용하여 실행할 수 있습니다. 일반적으로 - 여기에 표시된 바와 같이 - Nightscout 프로파일은 내장된 Nightscout client를 통해 다운로드할 수 있고, 여기에서는 읽기 전용 양식으로 표시됩니다. 프로파일 변경 시 Nightscout 사용자 인터페이스에서 변경 작업을 수행한 다음 AndroidAPS에 있는 [Profile Switch](../Usage/Profiles.md)를 실행하여 변경 사항을 활성화합니다. 이후 basal 프로파일 등의 데이터가 펌프에 자동으로 복사됩니다.

**DIA**: 인슐린의 작용 시간을 의미하며, 인슐린 프로필에 관한 이전 섹션에 설명되어 있습니다.

**IC**: 인슐린에 대한 탄수화물 비입니다. 이 프로파일에서는 하루의 시간대별로 다양한 값의 구간을 설정할 수 있습니다.

**ISF**: 인슐린 민감도 인자 - 변동사항이 없다는 가정하에 1 unit의 인슐린이 떨어뜨리는 혈당량

**basal**: 펌프에 프로그램된 basal 프로파일입니다.

**목표**: 모든 시간동안 장치들이 목표로 하기 바라는 혈당 수준을 의미합니다. You can set different levels for different times of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## 구성 관리자

![구성 관리자](../images/Screenshot_config_builder.png)

This is where you will set up the configuration of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Settings and Preferences

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.