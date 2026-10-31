# DanaR

*這些說明適用於配置該應用程式與 DanaR 幫浦。如果你擁有 2017 年推出的 DanaRS，請讀取[DanaRS 胰島素幫浦](./DanaRS-Insulin-Pump.md)。*

## 幫浦與AAPS的功能

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Timezone and DST changes need no special action, as the pump does not use its own history.

## 設定

* 在幫浦中進入主選單 > 設置 > 用戶選項
* 開啟「8. 延時注射」延長注射

![DanaR 幫浦](../images/danar1.png)

* 進入主選單 > 設置 > 探索
* 在手機設置中進入藍牙，掃描附近的設備，選擇你的 DanaR 序列號，並輸入你的密碼（配對密碼為 0000）。如果 DanaR 未出現在掃描中，請重新啟動手機並將 DanaR 電池取出，重新安裝，然後再次開始這兩個步驟。

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
* 將幫浦的基礎速率步進設置為 0.01 U/h
* Set bolus step on pump to 0.1 U. **AAPS** reads the bolus step from the pump and uses it for every bolus.
* 啟用幫浦上的延時注射功能

## Dana R 幫浦的時區旅行

有關跨時區旅行的訊息，請參見[幫浦旅行時的時區](#timezone-traveling-danarv2-danars)。

## 如何尋求協助

Development of the DanaR driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).