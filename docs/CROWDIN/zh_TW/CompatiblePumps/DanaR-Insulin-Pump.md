# DanaR

*這些說明適用於配置該應用程式與 DanaR 幫浦。如果你擁有 2017 年推出的 DanaRS，請讀取[DanaRS 胰島素幫浦](./DanaRS-Insulin-Pump.md)。*

## 幫浦與AAPS的功能

* 透過手機內建的藍牙與 **AAPS** 通訊，不需要額外的通訊裝置。
* 時區和日光節約時間變更不需要特別處理，因為幫浦不會使用自身的歷史紀錄。

## 設定

* 在幫浦中進入主選單 > 設置 > 用戶選項
* 開啟「8. 延時注射」延長注射

![DanaR 幫浦](../images/danar1.png)

* 進入主選單 > 設置 > 探索
* In phone settings go to Bluetooth, scan for nearby devices, select your DanaR serial number and input your password (Pairing password is 0000). 如果 DanaR 未出現在掃描中，請重新啟動手機並將 DanaR 電池取出，重新安裝，然後再次開始這兩個步驟。

* 在 **AAPS** 中，開啟左上角的**選單**（☰），前往**組態設定工具** > **幫浦**，然後選擇你使用的 DanaR 類型（**DanaR**、**DanaR Korean** 或 **DanaRv2**）。
  
  ![組態設定工具 > 幫浦（DanaR 外掛）](../images/v4/Configuration/configuration_pump_list_1.png)

* 開啟幫浦畫面：點選 DanaR 卡片上的**開啟外掛**（或前往**管理** > **幫浦**）。

* 點選**配對**。在配對畫面中： 
  * 在**幫浦密碼**下方輸入你的幫浦密碼（預設密碼為 1234）。
  * 在**選擇已配對裝置**下方，點選你的 DanaR 序號。如果清單是空的，請點選**開啟藍牙設定**，先將幫浦與手機配對（請參閱上方步驟）。返回 **AAPS** 後，清單中就會顯示幫浦。如果沒有顯示，請點選重新整理圖示。
  * 點選**配對**。 **AAPS** 會連線至幫浦並確認密碼。
* 若要變更驅動程式設定，請在**組態設定工具** > **幫浦**中的 DanaR 卡片上點選**設定**： 
  * **注射速度**（DanaR 和 DanaRv2）：變更預設的注射速度（12 秒／U、30 秒／U 或 60 秒／U）。
  * **使用延長注射處理 >200%**（DanaR 和 DanaR Korean）：如果希望 **AAPS** 允許基礎率高於 200%，請啟用此選項。請注意，使用延長注射處理餐點時，你就無法在高 TBR 下執行循環。
* 將幫浦的基礎速率步進設置為 0.01 U/h
* 請將幫浦的注射步進設定為 0.1 U。 **AAPS** 會從幫浦讀取注射步進，並將其用於每次注射。
* 啟用幫浦上的延時注射功能

## Dana R 幫浦的時區旅行

有關跨時區旅行的訊息，請參見[幫浦旅行時的時區](#timezone-traveling-danarv2-danars)。

## 如何尋求協助

DanaR 驅動程式由社群成員以**志工**方式開發。尋求協助前，請先：

1. **閱讀**本文件中相關的章節，確認該功能的預期運作方式。
2. 在 [Discord](https://discord.gg/4fQUWHZ4Mw) 的 *#AAPS* 頻道，或其他[社群頻道](../GettingHelp/WhereCanIGetHelp.md)中**詢問**。
3. 若要**回報錯誤**，請先搜尋[現有問題](https://github.com/nightscout/AndroidAPS/issues)；如果沒有找到您的問題，請[建立新問題](https://github.com/nightscout/AndroidAPS/issues)，並附上您的[記錄檔](../GettingHelp/AccessingLogFiles.md)。

尋求協助時，請提供手機品牌和型號、Android 版本、**AAPS** 版本，以及清楚描述問題的內容（發生了什麼變化、上次正常運作的時間）。