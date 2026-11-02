# Accu-Chek Insight

**本软件属于人工胰腺DIY解决方案组件，并非商业产品，需用户自行研习系统原理及操作方法。本工具无法替代糖尿病自主管理，但若愿投入必要时间研习，可助您改善病情并提升生活质量。请勿操之过急，预留充足时间循序渐进学习。使用后果需自行承担全部责任。**

```{admonition} Accu-Chek Insight is being phased out :class: note

Roche is withdrawing from the insulin pump market to refocus its diabetes portfolio on the Accu-Chek SmartGuide CGM. It has communicated the end of sales of both the Accu-Chek Combo and Accu-Chek Insight pumps; its remaining Accu-Chek Solo micropump is also being wound down (last deliveries in Germany at the end of 2025). The change is being rolled out by region, starting in Germany, with other European markets expected to follow. Support for the Insight is already listed as ended (see [Pumps no longer sold](./Future-possible-Pump-Drivers.md)). If you rely on this pump, plan ahead for a transition to a supported pump.

    <br />```{note}
    Before **AAPS** had a native Insight driver, the Insight was controlled through the separate [SightRemote](https://github.com/TebbeUbben/SightRemote) app. SightRemote is no longer needed or maintained: if you still have it installed from those days, uninstall it and use a current version of **AAPS** instead.
    

```{contents} Table of contents :depth: 1 :local: true

    <br />## Pump capabilities with AAPS
    
    * Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
    * Automatic DST and timezone handling.
    
    ## Hardware and software requirements
    
    * A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.
    
    * An Android phone running Android 12 or newer (see [Phones](../Getting-Started/Phones.md))
    * The AAPS app installed on your phone
    
    ## Setup
    
    * The Insight pump should only be connected to one device at a time. If you have previously used the Insight remote control (meter), you must remove the meter from the paired devices list of your pump: **Menu** > **Settings** > **Communication** > **Remove device**.
    
       ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)
    
    * In [Configuration > Pump](#Config-Builder-pump), select the **Accu-Chek Insight** card. Only one pump can be active at a time.
    
       ![Configuration > Pump with the Accu-Chek Insight plugin](../images/v4/Configuration/configuration_pump_list_1.png)
    
       Once it is selected, the **Accu-Chek Insight** card shows two buttons, **Settings** and **Open plugin**:
    
       ![The Accu-Chek Insight plugin selected in Configuration > Pump](../images/v4/Pumps/accu_chek_insight_enabled.png)
    
       **Settings** opens the settings of the Accu-Chek Insight driver (see [Settings in AAPS](#Accu-Chek-Insight-Pump-settings-in-aaps)).
    
       **Open plugin** (or **Manage → Pump**) opens the Accu-Chek Insight pump screen. Before a pump is paired it looks like this:
    
       ![Accu-Chek Insight pump screen before pairing](../images/v4/Pumps/accu_chek_insight_pump_screen.png)
    
    (accu-chek-insight-pairing)=
    ### Pairing
    
    * On the pump screen, tap **Insight pairing**. The pairing wizard opens and searches for nearby Bluetooth devices (top of the picture below).
    * On the Insight pump, go to **Menu** > **Settings** > **Communication** > **Add Device**. The pump shows the following screen (bottom of the picture below) with the serial number of the pump.
    
       ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)
    
    * Back on your phone, tap the pump serial number in the list of Bluetooth devices. If Android asks you to confirm the pairing, tap **Pair**.
    
       ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)
    
    * The pump and the phone both show a code. Check that the codes are the same on both devices. Confirm on the pump, and tap **Yes** on the phone. (Tap **No** if the codes do not match.)
    
       ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)
    
    * The phone shows **Pairing completed**. Tap **Exit** to return to the pump screen.
    
       ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)
    
    * To check that all is well, look at the pump screen (**Manage → Pump**). Once the pump is paired, it shows information about the pump, such as **Serial number**, **Manufacturing date**, **Release software version** and **Bluetooth address**.
    
       ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)
    
       ```{admonition} Older screenshot
       :class: note
       Apart from the top of the first picture, the pairing screenshots above are from an earlier **AAPS** version and may look different in **AAPS** 4.
       ```
    
    * To remove the pairing, tap **Unpair** on the pump screen and confirm **Reset pairing information?**. The **Insight pairing** button then appears again.
    
    Note: There is no permanent connection between the pump and the phone. **AAPS** only connects when needed (for example to set a temporary basal rate, give a bolus or read the pump history). Otherwise the batteries of the phone and the pump would drain far too fast.
    
    (Accu-Chek-Insight-Pump-settings-in-aaps)=
    ## Settings in AAPS
    
    Open the settings with **Settings** on the **Accu-Chek Insight** card in **Configuration** > **Pump**, or with the gear icon in the top-right corner of the pump screen.
    
    ![Accu-Chek Insight driver settings](../images/v4/Pumps/accu_chek_insight_settings.png)
    
    In the Insight settings in **AAPS** you can enable the following options:
    
    * **Log reservoir changes**: automatically records an insulin cartridge change when you change the cartridge in the pump.
    
    * **Log tube changes**: adds a note to the **AAPS** database when you run the "tube filling" program on the pump.
    
    * **Log site changes**: adds a note to the **AAPS** database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
    
    * **Log battery changes**: records a battery change when you put a new battery in the pump.
    
    * **Log operating mode changes**: adds a note to the **AAPS** database whenever you start, stop or pause the pump.
    
    * **Log alerts**: adds a note to the **AAPS** database whenever the pump issues an alert (except reminders, bolus and TBR cancellation, which are not recorded).
    
    * **Enable TBR emulation**: the Insight pump can only set temporary basal rates (TBRs) up to 250%. To get around this limit, TBR emulation tells the pump to deliver an extended bolus for the extra insulin if a TBR of more than 250% is requested.
    
      **Note: Only use one extended bolus at a time. Several extended boluses at the same time might cause errors.**
    
    * **Disable vibrations on manual bolus delivery**: stops the Insight pump from vibrating when it delivers a manual bolus (or extended bolus). Only available with Insight firmware 3.x.
    
    * **Disable vibrations on automated bolus delivery**: stops the Insight pump from vibrating when it delivers an automatic bolus (SMB or temp basal with TBR emulation). Only available with Insight firmware 3.x.
    
    * **Min. recovery duration [s]** and **Max. recovery duration [s]**: how long **AAPS** waits before trying again after a failed connection attempt. 可设置0至20秒的间隔时间。 If you have connection problems, choose a longer wait time.
        <br><br>Example for min. 恢复间隔最小值=5 recovery duration = 20
        <br><br>no connection -> wait <b>5</b> sec.
          <br>  retry -> no connection -> wait <b>6</b> sec.
          <br>  retry -> no connection -> wait <b>7</b> sec.
          <br>  retry -> no connection -> wait <b>8</b> sec.
          <br>...
          <br>retry -> no connection -> wait <b>20</b> sec.
          <br>retry -> no connection -> wait <b>20</b> sec.
          <br>...
    
    * **Disconnect delay [s]**: how long (in seconds) **AAPS** waits before disconnecting from the pump after an operation is finished. You can choose from 0 to 15 seconds. The default value is 5 seconds.
    
    For periods when the pump was stopped, **AAPS** logs a temporary basal rate of 0%.
    
    ### The pump screen
    
    The Accu-Chek Insight pump screen (**Manage → Pump**) shows the current status of the pump, for example **Status**, **Last connected**, **Operating mode**, **Battery**, **Reservoir level**, today's total daily doses (**TDD Bolus**, **TDD Basal**), basal rates and the last bolus. Once the pump is paired, it has these buttons:
    
    * **Refresh**: refreshes the pump status.
    * **Enable notification of TBR end (pump setting)** / **Disable notification of TBR end (pump setting)**: a standard Insight pump sounds an alarm when a TBR finishes. This button turns that alarm on or off without the need for configuration software.
    * **Unpair**: removes the pairing with the pump (see [Pairing](#accu-chek-insight-pairing)).
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)
    
    ```{admonition} Older screenshot
    :class: note
    The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the pump screen looks different and also has an **Unpair** button.
    

## 泵体参数设置

按以下方式配置泵体警报：

* 菜单 > 设置 > 设备设置 > 模式设置 > 静音 > 信号 > 声音
* 菜单 > 设置 > 设备设置 > 模式设置 > 静音 > 音量 > 0（删除所有条）
* 菜单 > 模式 > 信号模式 > 静音

该设置将静默所有泵体警报，由AAPS判定警报相关性。若AAPS未确认警报，泵体将逐级提升提示强度（先鸣响后震动）。

(Accu-Chek-Insight-Pump-vibration)=

### 振动

根据泵体固件版本差异，Insight可能在每次大剂量输注时短暂震动（如AAPS执行超微大剂量或临时基础率模拟触发延长大剂量时）。

* 固件 1.x：设计上没有振动。
* 固件 2.x：无法禁用振动。
* 固件3.x版本：AAPS执行静默大剂量输注。

固件版本信息可通过菜单查询。

## 更换电池

Battery life for Insight when looping ranges from 10 to 14 days, maximum 20 days. 该数据由使用劲量锂电池的用户提供。

Insight泵体内置微型电池，可在更换可拆卸电池时维持时钟等核心功能运行。若更换电池耗时过长导致内置电池耗尽，时钟将重置，插入新电池后需重新输入时间日期。若发生此情况，因时间戳无法正确识别，电池更换前所有AAPS记录将不再参与计算。

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Insight专属错误代码

### 扩展大剂量(方波)

请勿同时设置多个延长大剂量，单次仅允许一个延长大剂量运行，否则可能引发错误。

### 超时

Sometimes the Insight pump does not answer while **AAPS** sets up the connection. **AAPS** then shows the notification "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

If this happens, turn off Bluetooth on the pump AND on the phone for about 10 seconds, then turn it back on.

## 携带Insight泵跨时区注意事项

跨时区操作指南请参阅[泵体时区切换](#timezone-traveling-insight)章节。

## 获取帮助途径

Development of the Insight driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).