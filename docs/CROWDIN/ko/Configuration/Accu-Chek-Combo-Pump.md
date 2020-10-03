# 아큐-첵 콤보 펌프

**이 소프트웨어는 자작 소프트웨어이며, 판매용은 아닙니다. 허지만 사용자는 소프트웨어 사용법을 숙지하시기를 권장합니다. 이 소프니트웨어는 사용자의 당뇨관리를 해주는 것이 아닙니다. 하지만 사용자가 요구되는 정보를 입력하여, 당뇨관리를 용이하게 도와주며 삶의 질을 향상시키는데 도움을 줍니다. 성급하게 생각하지 마시고, 사용법을 숙지하시기를 권장합니다. 서용자가 소프트웨어 활용과 관련하여 대한 책임을 집니다.**

## 시스템 요구사항.

- 로체 아큐첵 콤보 (모든 펌웨가 작동됩니다.)
- 펌프를 구성하기 위해 360 구성소프트웨어와 함께 사용되어지는 Smartpix 또는 Realtyme장치. 사용자의 요구에 따라서 Roche는 Smartpix장치와 구성 소프트웨를 무상으로 보내게 됩니다.
- 호환 휴대폰: 리니지 OS 14.1 (이전 CyanogenMod) 또는 안도로이드 8.1 (Oreo) Lineage OS 14.1은 2017년 7월 이후의 버젼으로 최신 버젼이어야 합니다. 이는 콤보펌프와 페어링이 필요함에 따라서 변경된 부분이 있으며, 이는 이후 버젼에서 적용이 되었기 때문입니다. 사용가능한 휴대폰리스트는 [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)자료에서 확인가능합니다. 이 리스트는 최종본이 아니며, 사용자의 경험에 의해 작성되어졌습니다. 사용자 또한 사용자의 경험을 입력하여 다른 사용자를 도울수 있도록 권장됩니다. 이 프로젝트는 보다 나은 향상을 위해 지속적으로 개선됩니다.

- 안드로이드 8.1은 콤보와 통신을 허락함을 숙지하시기 바랍니다. 또한 8.1버젼의 AAPS에서 여전히 오류가 있음을 참고하시기 바랍니다. 보다 향상된 사용자를 위해서는 기본 휴대폰과 동기화를 진행하며, 또한 Ruffy/AAPS사용을 위한 다른 기본 휴대폰에 전송도 가능합니다. 안드로이드 8.1버젼 이전에서도 사용은 가능하나, 완전히 검증되지는 않았습니다. https://github.com/gregorybel/combo-pairing/blob/master/README.md 를 참고하시기 바랍니다.

## 제약

- Extended bolus and multiwave bolus are not supported (see [Extended Carbs](../Usage/Extended-Carbs.rst) instead)
- 하나의 Basal프로파일만 지원이됩니다.
- 펌프에서 1나이상의 Basal프로파일을 설정하는 것, 확장 Bolus 또는 펌프인터페이스 TBR의 Multiwave Bolus를 전송하는 것은 6시간 동안 Low-suspend 모드로만 적용되며 이는 Loop가 이러한 상황에서는 안전하게 실행되지 않을 수 있기 때문입니다.
- 현재는 펌프의 시간과 날자를 설정할 수 없으므로, Daylight saving시간은 수동으로 설정되어야합니다. 야간의 알람을 피하기 위해서는 저녁에 휴대폰의 자동시간업데이트를 비활성화시키고, 아침에 펌프시간과 함께 다시 복구 시킬 필요가 있습니다.
- 현재는 Basal양이 0.05 ~ 10 U/h 범위에서만 지원됩니다. 이는 프로파일을 수정할 때, 적용됩니다. 예를 들면 200%로 증가할 경우, 최대 Basal양은 두배가되는 5 U/h를 넘지 않아야 합니다. 유사하게, 50% 줄일 경우에는 최소 Basal양이 최소한 0.10 U/h는 되어야합니다.
- Loop가 실행중인 TBR을 취소할 것을 요청할 경우, Combo는 TBR을 15분동안 90% 또는 110%로 설정할 것입니다. 이는 TBR을 취소하는 것은 펌프의 경고를 야기하게 되고 이는 많은 변화를 야기하게 되기 때문입니다.
- 가끔씩 (이틀에 한번정도) AAPS는 자동으로 TBR CANCELLED경고 메세지를 자동으로 취소하는 것에 실패할 수도 있습니다. 이 때는 사용자는 경고메세지를 AAPS를 전송하기 위해서 AAPS에서 Refresh버튼을 누르든가 펌프에서 경고 메세지를 확인할 수도 있습니다. 
- Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 에러가 발생할 경우, 블루투스 장치가 활성화 되어있는지 확인하고, 콤보 탭에서 Refresh버튼을 누르세요. 이는 간헐적 통신오류가 있다느가, 연결이 되지 않았는지를 확인할 수 있게 합니다. 휴대폰을 리부팅하면 통상 이 문제는 해결되게 됩니다. 재시작이 도움이 되지 않을 경우에는 다른 문제가 있을 수 있습니다. 펌프가 휴대폰으로부터의 재연결을 허락하기 전, 펌프의 버튼이 눌러져야하며, 이는 펌프의 블루투스 기능을 재설정하게 됩니다. 이 시점에서의 이런 문제는 극히 일부분 발생하게 됩니다. 혹 이런 문제가 발생하게 된다면, 대개의 경우, 유일한 방법은 안드로이드 APS가 Combo와 잘작동하는 다른 휴대폰을 사용하게 되면 해결 될 수 있습니다. (위 참조)
- Issuing a bolus from the pump will not always be detected in time (checked for whenever AAPS connects to the pump), and might take up to 20 minutes in the worst case. 펌프에서의 Bolus는 최대 TBR이전 또는 AAPS의 제약에 의해 입력된 Bolus를 확인하게 됩니다. 이 때에는 유효하지 않은 전제에 의해 계산되어진 TBR/Bolus을 설정하는 것을 거절하게 됩니다. (-> 펌프로부터 Bolus를 사용하지 마세요. *Usage*)를 참고하세요. 
- Loop가 TBR 설정을 가정하기 때문에, 펌프에서 TBR를 설정하는 것은 피해야합니다. 펌프에서 새로운 TBR을 인지하는 데에는 20분까지도 걸릴 수 있습니다. TBR의 효과는 새로운 TBR이 인지될 때, 유효하게 됩니다. 따라서 최대 20분정도 IOP에서 TBR이 적용되지 않을 수 있습니다. 

## 설정

- 360구성 소프트웨어를 사용한 펌프 설정. 사용자가 이 소프트웨를 가지고 있지 않다면, Accu-check 핫라인에 문의하시기 바랍니다. 대게는 등록된 사용자에게 360° 펌프 구성 소프트웨어와 USB-적외선 연결장치인 SmartPix를 보내게 됩니다. 사용자가 Realtyme장치를 가지고 있다면, 이 또한 작동이 가능합니다. 
  - 스크린샷에 있는 초록색 표기 부분은 요구사항입니다. 
    - 설정/떠나기 메뉴구성은 표준으로 보여지며, 이는 펌프에서 지원되는 메뉴/기능만을 보여줍니다. 확장/Multiwave Bolus, multiple Basal양 등 지원되지 않는 기능은 숨겨지게 됩니다. 숨겨진 메뉴는 Loop 안전하게 작동되는 것을 불가능하게 하기 때문에, Loop기능을 제약하게 됩니다.
    - *Quick Info Text*가 "QUICK INFO"로 설정됨을 확인하세요. (특별한 언급이 없어도 *Insulin Pump Options*에서 확인하세요.). 
    - TBR설정 *Maximum Adjustment*을 500%로 하세요. 
    - *Signal End of Temporary Basal Rate*를 비활성화 시키세요. 
    - TBR을 *Duration increment* 15 min로 하세요. 
    - 블루투스를 활성화 시키세요.
  - 스크린샷의 파란색부분은 권장사항입니다. 
    - 연결에 있어서 로우 Cartridge 경고를 설정하세요.
    - 소프트웨어에서의 오류를 피하기 위해서, 사용자에게 유효한 최대 Bolus를 구성하세요.
    - 유사하게, 안전을 위하여 최대 TBR기간을 설정하세요. 펌프와 3시간동안 연결을 끊는 기능이 3시간동안 0%로 설정하게 되므로, 최소 3시간정도 기다리세요.
    - 펌프로부터 Bolus가 작동되는 것을 방지하기 위해서 펌프의 키잠금 기능을 활성화시키세요. 이는 펌프에서 성급한 Bolus사용이 습관이 되어진 사용자들에게서 Bolus가 작동되는 것을 방지하기 위함입니다. 
    - 디스플레이 시간초과 그리고 메뉴시간초과 기능을 5.5 그리고 5로 설정하세요. 이는 AAPS가 에러상황에서 보다 빨리 회복하게 하며, 이러한 에러상황에서의 변동폭을 줄이게 됩니다.

![사용자 메뉴세팀의 스크린샷.](../images/combo/combo-menu-settings.png)

![TBR세팀의 스크린샷](../images/combo/combo-tbr-settings.png)

![Bolus세팀의 스크린샷](../images/combo/combo-bolus-settings.png)

![인슐린 카드리지 세팅의 스크린 샷](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.html).
- 안드로이드 APS를 설정하기 위해서는 Wiki를 필독하세요. 
- 안드로이드 APS에서 MDI프러그인을 선택하세요. 페어링과정에서 Ruffy인터페이스로부터 Combo플러그인이 사용되지 않도록 주의하세요.
- Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
- Ruffy를 설치하고, 펌프와 페어링이 되도록 사용하세요. 다수의 시도에도 작동하지 않을경우, `pairing`기능을 변경하고 펌프를 페어링하세요. 그리고 다시 원래의 기능으로 변경하세요. 페어링 과정이 어떠한 이유에서든지 실패가 잦을 수 있지만, 단 한 번만 성공하면 됩니다. 따라서 몇 번의 시도가 필요할 수도 있으며, 재시도를 할 경우, 블루투스 세팅에서 빨리 펌프장치를 삭제하기 바랍니다. 다른 옵션은 페어링 기능 시작 이후 블루트스 메뉴로 가능 것입니다. 이는 휴대폰의 블루투스가 메뉴가 표시되는 동안 블루투스가 발견될 수 있도록 합니다. 그리고 펌프가 승인코드를 표시할 때, 펌프페어링을 승인한 후 Ruffy로 다시 변경하세요. 10번의 시도 이후에도 펌프승인이 되지 않을 경우, 펌프에 휴대폰이름이 표시될 때, 펌프페어링을 승인하기 전 10초정도 기다려서 시도하기 바랍니다. 메뉴 시간초과 설정을 5초이상으로 하였다면, 다시 시간을 증가해야 합니다. 일부 사용자는 이렇게 하여 문제해결을 하였다고 합니다. 마지막으로 국부적인 전파방해가 있다면, 다른 장소(방)으로 이동하는 것이 도움이 될 수 있습니다. 적어도 한 분의 사용자가 단순히 방을 이동함에 따라서 페어링 문제를 해결한 경우가 있습니다.
- AAPS가 Ruffy를 사용할 경우, Ruffy App은 사용할 수 없습니다. 가장 쉬운 방법은 페어링과정 후에 휴대폰을 재시작하는 것이며, 이는 AAPS가 Ruffy를 배경에서 시작할 수 있도록 합니다.
- 만약 펌프가 완전히 신규장치라면, 펌프에서 하나의 Bolus를 해야하며, 펌프는 하나의 새로운 데이타입력을 만들어냅니다.
- Combo플러그인을 시작하기 전에 사용자의 프로파일이 올바르게 설정되고 활성화 되었는지 확인하세요. AAPS가 Basal프로파일을 펌프에 동기화 할 것이기 때문에, 사용자의 Basal프로파일이 최신으로 적용되었는지 확인하세요. 그리고 난 후, Combo플러그인을 활성화 하세요. 펌프를 활성화하기 위해서 Combo 탭에서 *Refresh*버튼을 누르세요.
- 사용자의 설정을 확인하기 위해서는 펌프를 **disconnected**로 하고, AAPS를 15분동안 TBR 500%로 설정하고, Bolus를 적용하세요. 펌프는 TBR이 작동되게 되며, Bolus가 기록에서 확인될 수 있습니다. AAPS는 TBR이 활성되었는지 Bolus가 적용되었는지 보여줘야합니다.

## 왜 Ruffy APP과 함께 펌프페어링 사용될 수 없을까요?

There are several possible reasons. 아래의 단계를 따라해 보세요.

1. 펌프에 **fresh or full battery**를 확인하세요.. 상세한 것은 배터리 섹션을 참고하세요. 펌프가 스마트폰과 가까이 있는지 확인하세요.

![콤보는 휴대폰 옆에 있어야 합니다.](../images/Combo_next_to_Phone.png)

2. 페어링이 진행되는 동안에는 스마트폰과 페어링될 수 있는 어떠한 블루투스 장치라도 꺼 놓으시길 바랍니다. 어떠한 동시 블루투스 연결이나 즉각적인 연결은 페어링 과정을 방해할 수 있습니다.

3.     펌프에 이미 남아있는 블루투스 장치는 삭제하기 바랍니다. ** No Device**가 보여질 때까지 ** Bluetooth settings/connection/remove**를 반복하세요.
      

4. Settings / Bluetooth에 남아있는 휴대폰과 이미 연결된 펌프기록을 삭제하세요. "**SpiritCombo**"에 남아있는 동기화된 장치를 삭제하세요. 
5. Loop의 배경에서 AAPS가 작동되지 않도록 확인하세요. Disable Loop in AAPS.
6. 이제 스마트폰에서 Ruffy를 시작하세요. Reset 버튼을 누르시면 됩니다. 그리고 이전의 연결기록을 삭제하세요. 그리고 Connect를 누르세요.
7. 펌프의 블루투스메뉴에서, **ADD DEVICE / ADD CONNECTION**로 가세요. Press *CONNECT!** * Step 5 and 6 have to be done in a short timing.
8. Now the Pump should show up the BT Name of phone to select for pairing. Here it is important to wait at least 5s before you hit the select button on Pump. Otherwise the Pump will not send the Pairing request to the Phone properly.

* If Combo Pump is set to 5s Screen timeout, you may test it with 40s (original setting). From experience the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings. * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

9. At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you should be ready to go.
10. Reboot the phone.
11. Now you can restart AAPS loop.

## 사용.

- 이것은 제품이 아닙니다. 사용을 시작할 때, 사용자는 시스템의 제약, 어떻게 실패하는지 그리고 어떻게 관리하는지를 숙지하셔야합니다. 사용자가 시스템에 대한 완전한 이해없이 사용하는 것은 허락되지 않습니다..
- Loop알고리즘을 이해하기 위해서는 OpenAPS자료를 숙지하세요. https://openaps.org
- 안드로이드APS를 이해하기 위해서는 Wiki를 숙지하세요. http://wiki.AndroidAPS.org
- 이 통합된 시스템은 Combo에서 제공하는 Meter와 동일하게 적용됩니다. Meter는 펌프스크린을 반영하고 펌프에서 눌러지는 버튼을 전송합니다. 펌프와 연결하고, 이러한 전송은 Ruffy App이 하는 기능입니다. `scripter`구성은 화면을 보여주고, Boluse, TBR 등을 입력하는 것을 자동화 한다. 입력된 정보는 올바르게 입력되어야 합니다. AAPS는 이 후 Scripter와 연동되게되며, 이는 Loop명령과 Bolus를 관리할 수 있게 합니다. 이 모드는 약간의 제약이 있습니다. 전체적으로는 시스템이 상대적으로 느리지만, 사용되어지는 기능에 있어서는 상대적으로 괜찮은 편입니다. TBR을 세팅하는 것 또는 Bolus를 주입하는 것은 펌프가 진동하도록 합니다.
- 안드로이드 APS와 Combo를 통합하는 것은 모든 입력된 자료는 안드로이드APS를 통하여 입력되다는 가정하에 설계되었습니다. 펌프에 직접 입력되는 Bolus는 AAPS에 의해서 확인되지만, 안드로이드APS가 그러한 Bolus를 인지하는데에는 20분정도 소요될 수 있습니다. 펌프에 직접 입력된 Bolus를 읽는 것은 안전사항이며, 정기적으로 사용되어지는 것을 의미하지는 않습니다. Loop는 탄수화물 섭취와 관련한 지식을 필요로하며 이는 펌프에 입력될 수 없습니다. 이것이 왜 모든 입력이 안드로이APS를 통하여 이루어져야 하는 이유입니다. 
- 펌프에서 TBR 설정이나 취소를 하시면 안됩니다. Loop는 TBR을 통제한다는 가정하에 사용되어지며, 그렇지 않을경우 안전하게 작동하지 않을 것입니다. 사용자가 펌프에 입력하는 TBR 시작시간을 Loop가 결정할 수 없습니다.
- 펌프의 첫번째 Basal양 프로파일은 애플리케이션 시작에서 보여지며, AAPS에 의해서 업데이트 됩니다. Basal양은 펌프에서 수동으로 변경되어야 합니다. 하지만 이것은 Safety Measure에서 수정되고 확인되어집니다. Safety Measure를 기본으로 설정하는 것을 권장하지 않습니다. 이는 펌프에서 원치않게 수정되는 것을 검출하는 것을 의미합니다.
- 펌프에서 키잠금기능을 활성화하는 것이 권장되어지며, 펌프에서 Bolus가 입력되는 것을 방지하기 위함입니다. 펌프가 이전에 사용되거나 Quick Bolus기능을 사용하는 것은 습관적이게 됩니다. 또한 키잠금기능의 활성화는 원치않게 펌프에서 키가 눌러질 때에도, AAPS와 펌프가 연동하는 것을 방해하지 않을 것입니다.
- Bolus주입이나 TBR세팅시에 BOLUS/TBR CANCELLED경고가 펌프에 표시될 때, 이는 펌프와 휴대폰 연결이 끊겼을 때 발생합니다. 또한 이는 가끔씩 발생하는 현상입니다. AAPS는 다시 연결하도록 시도되며, 경고메세지를 재확인하게 됩니다. 또한 최종 기능을 다시 시작하게 될 것입니다. 하지만 Bolus는 안전을 위하여 재시도되지 않습니다. 따라서, 그러한 경고는 무시되어도 됩니다. AAPS는 자동으로 그것을 확인하게 되며, 대게는 30초 이내에 이루어지게 됩니다. 취소하는 것은 문제가 되지는 않지만, 현재 활성화된 기능을 펌프의 디스플레이가 꺼지고 펌프에 재연결이 될때까지 기다려야 합니다. If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
- Bolus주입시 Low cartridge나 배터리 경고가 발생하게 되면, AAPS에서 알려줍니다. 만약 펌프에 연결되지 않을 경우 발생한다면, Combo탭에서 Refresh버튼을 누르세요. 그러면 AAPS에서 알림메세지가 뜨며, 그것을 확인할 것입니다.
- TBR CANCELLED경고를 AAPS에서 알리지 못할 경우 또는 다른이유에서 경고가 발생하게 될 때, Combo탭에서 Refresh버튼을 누름으로 연결을 재설정하게 됩니다. 이러면 AAPS에서 알림이 보여지며, 경고사항을 확인하게 됩니다. 그러한 경고가 시작될 때, 이것이 안전하게 적용될 것입니다. 그리고 적절한 TBR이 다음 Loop시작시에 다시 설정되게 됩니다.
- 펌프에서 알려지는 모든 다른 경고 메세지는 펌프와 연결할 경우, Combo탭에서 경고메세지를 보여줄 겁니다. 예를 들면 "State:E4:Occlusion"이 메인스크린에서 보여집니다. 긴급한 알림사항에 대해서는 에러가 발생하게 됩니다. AAPS는 절대 펌프의 심각한 에러에 대해서 확인하지 않습니다. 하지만 펌프가 진동하게하여 사용자가 펌프에 심각한 문제가 있고 즉각적인 조치가 필요함을 알려줍니다.
- 페어링 후에는 Ruffy는 직접적으로 사용되면 안됩니다. AAPS가 필요시 배경에서 시작되게 됩니다. AAPS에서 Ruffy동시에 사용되는 것은 지원되지 않습니다.
- 만약 AAPS와 펌프가 교신중에 Ruffy를 사용하여 AAPS에서 충돌이 발생한다면, Ruffy를 강제종료할 필요도 있습니다. AAPS를 재시작하면 Ruffy를 다시 시작할 겁니다. 앱을 강제종료하는 방법을 모르시면, 휴대폰을 재시작하는 것이 쉬운방법입니다.
- 펌프에서 블루투스 로고가 보여질때는 펌프와 AAPS가 교신중에 있으므로, 절대로 펌프의 버튼을 누르지 마세요.