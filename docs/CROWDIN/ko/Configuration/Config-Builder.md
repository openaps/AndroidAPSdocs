# 구성 관리자

구성관리자(Conf) 탭에서 AndroidAPS의 여러기능들을 구성할 수 있습니다. 좌측의 박스를 선택하면 사용하고자 하는 기능을 활성화 할수 있습니다. 우측의 박스는 이 기능을 탭으로 볼 수 있도록 합니다. 추가로 설정 가능한 부분이 있는 기능이 있을 경우엔, 바퀴아이콘을 클릭하여 상세 설정을 할 수 있습니다.

**초기 설정:** AAPS 2.0버전 부터는 설정마법사가 AndroidAPS 설정과정을 도와줍니다. 화면의 우측상단의 3개의 점 아이콘을 클릭하여 '설정 마법사'를 이용하세요.

## 프로파일

사용하고자 사는 Basal 프로파일을 선택하세요:

* **NS 프로파일** 은 Nightscout에 저장된 프로파일을 사용합니다.(https://[당신의Nightscoutsite주소]/profile). 다수의 프로파일이 있다면 '프로파일 변경'에서 프로파일을 변경할 수 있습니다. 변경된 프로파일은 펌프로 전송됩니다.
* **Simple 프로파일** 하나의 값만 설정 가능한 프로파일(일중 Basal 양 변경 없음)
* **로컬 프로파일** 스마트폰에서 직접 Basal 양 설정 가능한 프로파일. 더 많은 설정 정보를 확인하려면 [프로파일](../Usage/Profiles.md) 페이지를 방문하세요.

## 인슐린

Select the type of insulin curve you are using. Basic AndroidAPS options are bilinear 'Fast Acting Insulin' for an insulin with DIA of less than 5 hours, or 'Fast Acting Insulin Prolonged' for an insulin with DIA of greater than 5 hours. These curves will only vary based on the duration of the DIA. The Oref options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' are exponential and more information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. You will need to enter additional settings for these. You can view the insulin curve graph on the Insulin (Ins) tab to help you understand which curve fits you.

## BG Source

Select the blood glucose source you are using - see [BG Source](BG-Source.md) page for more setup information.

## Pump

Select the pump you are using. For people wanting to open loop this needs to be 'Virtual Pump'. See [DanaR Insulin Pump](DanaR-Insulin-Pump.md), [DanaRS Insulin Pump](DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](Accu-Chek-Combo-Pump.md) pages for more setup information.

## Sensitivity Detection

Select the type of sensitivity detection. This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). You can view your sensistivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 6](../Usage/Objectives) in order to use Sensitivity Detection/autosens.

## APS

Select either OpenAPS MA (meal assist) or OpenAPS AMA (advanced meal assist). More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama); in simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab. Note you need to be in [Objective 7](../Usage/Objectives.md) in order to use OpenAPS AMA.

## Loop

If you wish to use open or closed looping you will need to enable this here. You can see the active request and success of enactment in the Loop tab.

## Constraints

If you view the Objectives (Obj) tab, you can see more information about how far you have progressed and what actions you still need to complete. See [Objectives](../Usage/Objectives.md) page for more information.

## Treatments

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## General

* **Actions** allows you to make Profiles Switches (see [Profiles page](../Usage/Profiles.md) for more setup information), Temporary Targets, and for those using DanaR/RS or Combo pump to set a manual TBR or prime the canula.
* **Careportal** allows you to record any specific care entries and view the current sensor, insulin, canula and pump batter ages in the Careportal (CP) tab.
* **SMS Communicator** allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Usage/SMS-Commands.md) for more setup information.
* **Food** allows you to view and use the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information or http://[yournightscoutsiteaddress]/food to access your database.
* **Wear** allows you to view and control AndroidAPS from the Android Wear watch, see [watchfaces](Watchfaces.md) for more setup information.
* **xDrip Statusline (watch)** Display loop information on your xDrip+ watchface
* **Ongoing Notification** displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.
* **NS Client** Setup sync of your AndroidAPS data with Nightscout