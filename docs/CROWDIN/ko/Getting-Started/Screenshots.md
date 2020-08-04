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
* **Carbs On Board (COB)** (주황색 차트): 체내 잔여 탄수화물을 의미합니다. Decaying depends on the deviations the algorithm detects. If it detects a higher carb absorption than expected, insulin would be given and this will increase IOB (more or less, depending on your safety settings). 
* **Deviations**: 
   * **GREY** bars show a deviation due to carbs. 
   * **GREEN** bars show that BG is higher than the algorithm expected it to be. 
   * **RED** bars show that BG is lower than the algorithm expected.
* **Sensitivity** (white line): It shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. Sensitivity is a calculation of sensitivity to insulin as a result of exercise, hormones etc.
* **Activity** (yellow line): It shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). The value is higher for insulin closer to peak time. It would mean to be negative when IOB is decreasing. 

### Section G

Enables you to administer a bolus (normally you would use the Calculator button to do this) and to add a fingerstick CGM calibration. Also a Quick Wizard button would be displayed here if configured in [Config Builder](../Configuration/Config-Builder#quickwizard-settings).

## The Calculator

![계산기](../images/Screenshot_Bolus_calculator.png)

When you want to make a meal bolus this is where you will normally make it from.

### Section H

contains is where you input the information about the bolus that you want. The BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. The CORR field is if you want to modify the end dosage for some reason, and the CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. You can put a negative number in this field if you are bolusing for past carbs.

SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The idea is to deliver the insulin sooner and hopefully reduce spikes.

### Section I

shows the calculated bolus. If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.

### Section J

shows the various elements that have been used to calculate the bolus. You can deselect any that you do not want to include but you normally wouldn't want to.

### Combinations of COB and IOB and what they mean

<ul>
    <li>If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account</li>
    <li>If you tick COB without IOB you run the risk of too much insulin as AAPS is not accounting for what’s already given. </li>
    <li>If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
</ul>

If you bolus for additional food shortly after a meal bolus (i.e. additional desert) it can be helpful to untick all boxes. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self-explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Care Portal

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Carb correction

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Check and remember actual COB and IOB on homescreen.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
   
   ![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

3. Remove the entry with the faulty carb amount.

4. Make sure carbs are removed successfully by checking COB on homescreen again.
5. Do the same for IOB if there is just one line in treatment tab including carbs and insulin.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. If there is just one line in treatment tab including carbs and insulin you have to add also the amount of insulin. Make sure to set the correct event time and check IOB on homescreen after confirming the new entry.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## 프로파일

![프로파일](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configurations. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nightscout client and is displayed here in read-only form. If you wanted to make any changes you would do this from your Nightscout user interface and then do a [Profile Switch](../Usage/Profiles.md) in AndroidAPS to activate the changes. Data such as the basal profile would then be automatically copied over to your pump.

**DIA:** stands for Duration of Insulin Action and it is discussed above in the section on insulin profiles.

**IC:** is Insulin to Carb ratio. This profile has a number of different values set for different times of day.

**ISF:** is Insulin Sensitivity Factor - the amount by which one unit of insulin will reduce your blood glucose assuming that nothing else changes.

**Basal:** is the basal profile programmed into your pump.

**Target:** is the blood glucose level that you want the rig to be aiming for all the time. You can set different levels for different times of day if you wish, and you can even set an upper and lower range so that the rig will only start to make changes when the predicted blood glucose value falls outside, but if you do that then the rig will respond more slowly and you are unlikely to achieve such stable blood sugars.

## Treatment, xDrip, NSClient

These are simply logs of treatments (boluses and carbs), xDrip messages and messages sent to Nightscout via the built-in Nightscout client. You don't normally need to worry about any of these unless there is a problem.

## 구성 관리자

![구성 관리자](../images/Screenshot_config_builder.png)

This is where you will set up the configuration of your AndroidAPS rig. This screenshot shows a pretty typical rig using a Combo pump, a Dexcom G5 CGM sensor being managed via xDrip+ and running with NovoRapid insulin on an Oref profile and connected to a Nightscout cloud based server.

The tick box on the right determines if that particular module will be displayed in the top menu bar (see section A at Homescreen) and the small gear wheel symbol allows access to the setting for that module, if there are any.

## Settings and Preferences

At the top right of the navigation bar you will find three small vertical dots. Pressing on these takes you to the app's preferences, history browser, setup wizard, about the app information and the exit button that will close AAPS.