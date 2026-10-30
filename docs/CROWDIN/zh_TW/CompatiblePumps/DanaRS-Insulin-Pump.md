# DanaRS, Dana-i and Dana-i2

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards, a Dana-i or a Dana-i2. 如果你擁有原始的 DanaR，請讀取[DanaR 胰島素幫浦](./DanaR-Insulin-Pump.md)。*

**Dana-i2 can be used from AAPS version 4.0 onwards.** It uses the same **Dana-i/RS** driver as the Dana-i.

* In DanaRS/i/i2 pump "BASAL A" is used by the app. Existing data gets overwritten.

    {contents} Table of contents
    :depth: 1
    :local: true

## 幫浦與AAPS的功能

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually (see [Timezone traveling](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## 幫浦配對

* Open the **menu** (☰) in the top-left corner of the **AAPS** main screen and select **Configuration**.
* Tap **Pump** and select **Dana-i/RS**.
    
    ![Configuration > Pump with the Dana-i/RS plugin](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Once it is selected, the **Dana-i/RS** card shows two buttons, **Settings** and **Open plugin**:
    
    ![The Dana-i/RS plugin selected in Configuration > Pump](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Settings** opens the settings of the Dana-i/RS driver:
    
    ![Dana-i/RS driver settings](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Open plugin** (or **Manage** > **Pump**) opens the Dana-i/RS pump screen. Before a pump is paired it looks like this:
    
    ![Dana-i/RS pump screen before pairing](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* On the pump screen, tap **Pairing**. **AAPS** scans for nearby pumps.

* Tap the entry for your pump in the list.
    
    ![The Pairing screen listing a Dana pump found by the scan](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** This works the same way as other Bluetooth pairings you may know (for example, smartphone and car audio).
    
    ![Dana RS 配對確認](../images/DanaRS_Pairing.png)

* 根據你的幫浦類型和韌體版本來執行配對過程：
    
    * For DanaRS v1, **AAPS** asks for the **Pump password (v1 only)**. Enter your pump password (see [Default password](#DanaRS-Insulin-Pump-default-password)).
    * For DanaRS v3, **AAPS** asks you to press OK on the pump and type the 2 sequences of numbers and letters shown on the pump. Keep the pump display on by pressing the minus button until you have finished. Then tap **Done**.
    * For Dana-i and Dana-i2, the standard Android pairing dialog appears. Enter the 6-digit number shown on the pump.

* When **Pairing successful!** is shown, tap **Done**.
    
    ![Pairing successful!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    You are back on the pump screen, which now shows your pump's status.
    
    ![Dana-i/RS pump screen after pairing](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* In **Settings**, select **Bolus speed** to change the default bolus speed (12 s/U, 30 s/U or 60 s/U).

* 使用醫生選單將幫浦上的基礎速率步進設置為 0.01 U/h（參見幫浦使用指南）。
* Set bolus step on pump to 0.05 U using Doctors menu (see pump user guide). **AAPS** reads the basal and bolus steps from the pump and uses them for every bolus, so a bolus always matches the step set on the pump. The pump screen shows them in the **Basal/Bolus step** row.
* 啟用幫浦上的延時注射功能

### Options shown only for some models

* **Auto lock**: on a Dana-i2, the **User options** screen (on the pump screen, **Manage** > **Pump**) has an **Auto lock** switch for the pump's auto lock setting. Press **Save options to pump** after changing it.
* **Easy mode**: on pump models that have an easy menu mode, the pump screen shows an **Easy mode** row with **On** or **Off**.
* If a Dana-i2 refuses a bolus, **AAPS** shows the reason, for example *Pump is not primed*, *Not enough insulin in the reservoir* or *Easy sleep mode is on in the pump*.

(DanaRS-Insulin-Pump-default-password)=

### 預設密碼

* 對於韌體版本 v1 和 v2 的 DanaRS，預設密碼為 1234。
* 對於韌體版本 v3 或 Dana-i，預設密碼來自製造日期，計算方式為 MMDD，其中 MM 是月份，DD 是製造日期（例如「0124」代表 1 月 24 日）。
    
    * 從主選單選擇「回顧」，然後從子選單打開「運送資訊」。
    * 第三個項目是製造日期。 
    * 對於 v3/i，該密碼僅用於鎖定幫浦選單。這不會用於通訊，因此不需要在 AAPS 中輸入該密碼。

(DanaRS-Insulin-Pump-change-password-on-pump)=

## 更改幫浦密碼

* 按下幫浦上的「OK」按鈕
* 在主選單中選擇「選項」（按下箭頭按鈕多次向右移動）
    
    ![DanaRS 主選單](../images/DanaRSPW_01_MainMenu.png)

* 在選項選單中選擇「用戶選項」
    
    ![DanaRS 選項選單](../images/DanaRSPW_02_OptionMenu.png)

* 使用箭頭按鈕向下捲動至「11. 密碼」密碼
    
    ![DanaRS 11. 密碼](../images/DanaRSPW_03_11PW.png)

* 按下「OK」進入舊密碼。

* 輸入 **舊密碼** (預設密碼請參閱 [上方](#DanaRS-Insulin-Pump-default-password)) 並按下 OK
    
    ![DanaRS 輸入舊密碼](../images/DanaRSPW_04_11PWenter.png)

* 如果此處輸入了錯誤的密碼，將不會顯示失敗訊息！

* 設置**新密碼**（使用 + 和 - 按鈕更改數字 / 使用箭頭按鈕向右移動）。
    
    ![DanaRS 新密碼](../images/DanaRSPW_05_PWnew.png)

* 按下「OK」按鈕確認。

* 按下 OK 以儲存設定。
    
    ![DanaRS 儲存新密碼](../images/DanaRSPW_06_PWnewSave.png)

* 向下移動至「14. 退出」，然後按下 OK 以退出。
    
    ![DanaRS 退出](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS 特定錯誤

### 胰島素注射過程中的錯誤

如果在注射胰島素過程中 AAPS 與 Dana RS 之間的連線中斷（例如，你在 Dana RS 幫浦注射胰島素時走開手機），你將看到以下訊息並聽到警報聲。

![胰島素注射警報](../images/DanaRS_Error_bolus.png)

* 大多數情況下，這只是通訊問題，正確劑量的胰島素已經注射完畢。
* Check in the pump history that the correct bolus was given. You can do this on the pump itself, or in **AAPS** on the pump screen (**Manage** > **Pump**) > **Pump history** > **Boluses**.
* Delete the error entry in [treatments](#screens-bolus-carbs) if you wish.
* The real amount is read and recorded at the next connection. To force this, tap **Refresh** on the pump screen, or just wait for the next connection.

## 更換手機時的特別注意事項

更換新手機時，需要進行以下步驟：

* [在舊手機上匯出設定](../Maintenance/ExportImportSettings.md)
* 將設定從舊手機傳輸至新手機

### DanaRS v1

* **手動配對** Dana RS 與新手機
* If you tick **Also replace pump settings** when importing, the pump connection settings are imported too and AAPS on your new phone will already "know" the pump and therefore not start a Bluetooth scan. 因此必須手動將新手機與幫浦配對。
* 在新手機上安裝 AAPS。
* [在新手機上匯入設定](../Maintenance/ExportImportSettings.md)

### DanaRS v3, Dana-i, Dana-i2

* 開始配對程序，如上所述[以上](#DanaRS-Insulin-Pump-pairing-pump)。
* Sometimes you may need to clear the pairing information in **AAPS** first. On the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**. Then tap **Pairing** again.

## Timezone traveling with DanaRS, Dana-i and Dana-i2 pumps

有關跨時區旅行的訊息，請參見[幫浦旅行時的時區](#timezone-traveling-danarv2-danars)。

## 如何尋求協助

Development of the DanaRS/Dana-i/Dana-i2 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).