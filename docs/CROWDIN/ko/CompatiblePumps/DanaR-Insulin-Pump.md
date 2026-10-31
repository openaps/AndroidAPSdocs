# DanaR

*다음 지침은 다나R에서 앱과 펌프를 구성하기 위한 것입니다. Visit [DanaRS Insulin Pump](./DanaRS-Insulin-Pump.md) if you have the DanaRS launched in 2017 instead.*

## Pump capabilities with AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Timezone and DST changes need no special action, as the pump does not use its own history.

## 설정

* 펌프에서 Main Menu > Setting > User Option 으로 이동하세요.
* “8. Extended Bolus”을 On으로 변경하세요. 

![다나R 펌프](../images/danar1.png)

* Menu > Setting > Discovery 으로 이동하세요.
* 스마트폰 환경설정에서 블루투스로 이동하고, 주변 디바이스를 검색한 다음, DanaR 시리얼 번호를 선택하고 암호를 입력합니다(암호는 0000). 만약 검색을 해도 DanaR이 표시되지 않으면 스마트폰을 재시작한다음, DanaR펌프 배터리를 꺼내고 교체한 후 이 두 단계를 다시 시작합니다.

* In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **Pump** and select the type of DanaR you have (**DanaR**, **DanaR Korean** or **DanaRv2**).
  
  ![Configuration > Pump with the DanaR plugins](../images/v4/Configuration/configuration_pump_list_1.png)

* Open the pump screen: tap **Open plugin** on the DanaR card (or go to **Manage** > **Pump**).

* Tap **Pairing**. On the pairing screen: 
  * Enter your pump password under **Pump password** (default password is 1234).
  * Under **Select paired device**, tap your DanaR serial number. If the list is empty, tap **Open Bluetooth settings** and pair the pump with your phone first (see the step above). When you come back to **AAPS**, the pump appears in the list. If it does not, tap the refresh icon.
  * Tap **Pairing**. **AAPS** connects to the pump and checks the password.
* To change the driver settings, tap **Settings** on the DanaR card in **Configuration** > **Pump**: 
  * **Bolus speed** (DanaR and DanaRv2): change the default bolus speed (12 s/U, 30 s/U or 60 s/U).
  * **Use extended boluses for >200%** (DanaR and DanaR Korean): enable this if you want **AAPS** to allow a basal rate above 200%. Note this means you cannot loop with high TBRs while using extended boluses for food.
* 펌프의 Basal 단위를 0.01U/h로 하세요.
* Set bolus step on pump to 0.1 U. **AAPS** reads the bolus step from the pump and uses it for every bolus.
* 펌프에서 확장Bolus를 활성화하세요.

## 다나R 펌프 사용시 다른 시간대 국가로의 여행

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).

## Where to get help

Development of the DanaR driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).