# SMS(簡訊) 指令

```{contents} Table of contents
:depth: 2
```

Most remote adjustments (temp targets, carbs, profile switches and, once the client is paired, boluses) can be made with the [**AAPSClient** app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection, see [Master ↔ Client control](#client-master-control) (an iPhone version of **AAPSClient** is in development, see [AAPSClient](AapsClient.md)). SMS commands remain an alternative that works without internet, and the only remote option if you use an iPhone as a follower and do not have **AAPSClient** yet.

**SMS 指令非常有用於：**
1. 日常遠端控制

2. If you want to remotely bolus insulin without a paired **AAPSClient**

3. 在網路訊號不佳的地區，文字訊息能夠傳送，而資料/網路訊號有限。這在前往偏遠地區（例如露營、滑雪）時非常有用。

4. If your other method of remote control (**AAPSClient**) is temporarily not working

## 安全第一

如果你啟用 **SMS 通訊** 功能，請考慮設定為傳送遠端指令的手機可能會被竊取，或者被他人使用。請務必用至少 PIN 碼鎖定你的手機。強烈建議使用強密碼和/或生物識別鎖，並確保這與你的 APK 主密碼不同(即匯出 **AAPS** 設定所需的密碼)。

此外，建議允許使用 [第二個手機號碼](#SMSCommands-authorized-phone-numbers) 來發送 SMS 指令。這樣，你可以使用第二個號碼來 [停用](#SMSCommands-other) SMS 通訊功能，以防主要遠端手機遭到入侵。

預設的兩次注射指令之間的最短延遲時間為 15 分鐘。為了安全起見，你必須添加至少兩個授權電話號碼才能將此延遲時間縮短。如果你嘗試在前一次注射後 15 分鐘內再次遠端注射，你將收到「無法遠端注射。請稍後再試」的回覆。嘗試稍後再試

如果你傳送的遠端指令（如注射或更改設定檔）已執行，AAPS 也會透過簡訊通知你。建議將其設置為至少傳送到兩個不同的手機號碼，以防其中一部接收手機被盜。

**If you bolus through SMS Commands, you must enter carbs separately (second SMS, AAPSClient...)!** If you fail to do so, the IOB would be correct with too low COB, potentially leading to not performed correction bolus as **AAPS** assumes that you have too much active insulin.

對於敏感指令，必須使用帶有基於時間的一次性密碼的身份驗證器應用程式來增加安全性。

如果你希望移除照護者手機發送 SMS 指令的能力，請在 **AAPS** 中使用緊急按鈕“[重置身份驗證器](#sms-commands-authenticator-setup)”，或發送 SMS 指令“[SMS 停止](#SMSCommands-other)”。重置驗證器將使所有照護者的手機無效。你需要重新設定他們。

## 設定 SMS 指令

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### 身份驗證器設置

使用雙因素身份驗證來提高安全性。

在照護者手機上，下載(從 App Store 或 Google Play)並安裝一個身份驗證器應用程式。常見的免費應用程式有：
  - [Authy](https://authy.com/download/)
  - Google 身份驗證器 - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass 身份驗證器](https://lastpass.com/auth/)
  - [FreeOTP 身份驗證器](https://freeotp.github.io/)

這些驗證器應用程式會生成一個時間限制的、一次性 6 位數密碼，類似於行動銀行或購物。你也可以使用其他支援 RFC 6238 TOTP 權杖的驗證器應用程式。 Microsoft 驗證器無法使用。

### 檢查手機設定

在你的手機上，前往**應用程式 > AAPS > 權限**。確保**簡訊** 和 **電話**已被允許。

![圖像](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android can block the **SMS** permission for apps that were not installed from an app store, like **AAPS**. If you see this message when you grant the **SMS** permission, open the phone's **Settings > Apps > AAPS**, tap the **⋮** menu (top right) and select **Allow restricted settings**. Then grant the **SMS** permission again.
```

![App was denied access to SMS](../images/sms_permission_restricted.png)

### 日期和時間同步

兩部手機上的時間必須同步。最佳做法是從網路自動設置。時間差可能會導致身份驗證問題。

在 **AAPS** 手機和照護者手機上，檢查日期和時間是否已同步。具體的操作方法取決於你的裝置，你可能需要嘗試不同的設定。

範例（針對 Samsung S23）： **設定 > 一般管理 > 日期和時間**：確保勾選了 **自動日期和時間**。

某些選項可能會被灰階化，這是因為手機設置為兒童帳戶，並需要透過家庭帳戶管理員啟用。在照護者/父母的 iPhone 上，這個日期和時間設置稱為「自動設置」。如果你不確定手機是否已同步，請不要擔心，你可以先設置簡訊指令，若發現問題可以再進行問題排除（如有需要請尋求幫助）。

### AAPS 設置

Now that the phone settings have been checked, in the **AAPS** app itself, go to [**Configuration** → **Communication**](../SettingUpAaps/ConfigBuilder.md) and enable the **SMS Communicator** plugin.

Open the **SMS Communicator** settings.

Enable **Allow remote commands via SMS**. The **Additional mandatory PIN at token end** and **Authenticator setup** options only appear once this is enabled:

![SMS Communicator settings](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### 允許的電話號碼

輸入照護者的手機號碼。包含國際區號，並且排除電話號碼的第一個「0」，如以下範例所示：
* 英國電話號碼：+447976304596
* 美國電話號碼：+11234567890
* 法國電話號碼：+33612344567
* _台灣電話號碼: 09xxxxxxxx_

請注意，依據你所在的位置，電話號碼前的「+」號可能需要或不需要。 To determine this, send a sample text which will show the received format on the **SMS Communicator** plugin screen (**Configuration** → **Communication** → **SMS Communicator** → **Open plugin**).

如果你有多個手機號碼需要添加，請用分號分隔，並且**號碼之間不得有空格**（這點非常重要！）。 Select **OK**:

![允許的電話號碼](../images/sms_allowed_numbers.png)

#### Remote bolus min distance

- You can define the minimum delay (in minutes) between two boluses issued via SMS.
- 出於安全考慮，你必須添加至少兩個授權手機號碼來編輯此數值。

#### 令牌末尾的額外必需PIN碼

基於安全理由，回覆代碼必須接著一組 PIN。選擇一組只有你（以及其他照護者）會在簡訊指令發送時使用的 PIN，作為驗證碼結尾。

PIN 碼要求如下：

* at least 6 digits
* digits only

For a safer PIN, do not use the same digit many times (_e.g._ 111111) or a sequence (_e.g._ 123456).

![令牌末尾的額外必需PIN碼](../images/sms_pin.png)

#### 身份驗證器設置

* Tap **Authenticator setup** and follow the step-by-step instructions on the screen.
* 在 _照護者的手機_ 上打開你安裝的驗證器應用程式，建立新的連線，並且
* Use the caregiver phone to scan the QR code shown under **Scan code to setup AAPS OTP codes**.

![Authenticator setup with QR code](../images/sms_authenticator_setup.png)

* Under **Test One-Time-Password**, enter the one-time passcode from the authenticator app on the caregiver phone followed by your PIN in **Code to check**:

Example:
* 驗證器應用程式生成的驗證碼為 457051
* 你的必須 PIN 碼為 2401
* 驗證碼：4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. **There is no button you can press!** The process is now complete, there is no “OK” button you need to press after entering the code:

![Test One-Time-Password and Reset Authenticators](../images/sms_authenticator_test.png)

You should now be set up with SMS commands.

Use the **Reset Authenticators** button at the bottom of the **Authenticator setup** screen if you want to remove provisioned authenticators. (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again.)

## 簡訊指令使用

### SMS 指令的初步操作

1)  To check you have set everything up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the **AAPS** phone. You should get a response similar to that shown here:

![圖像](../images/remote-control-06.png)

If you don't receive any response, check the [Troubleshooting](#SMSCommands-troubleshooting) section below.

2)  Now try an SMS command that requires the authenticator, _e.g._ “target hypo”. The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by the additional secret **PIN** known only by caregivers/followers (a string of twelve digits in total, assuming your PIN has 6 digits).

When you try sending an SMS command for the first time, try it in the presence of the **AAPS** phone, to see how it works:

![圖像](../images/remote-control-16.png)

The caregiver’s phone will receive an SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully.

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message. See [Troubleshooting](#SMSCommands-troubleshooting) below for common errors.

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

### 透過 SMS 指令進行餐時注射

Remote bolusing of insulin can be done via **SMS Commands** or through a paired **AAPSClient** (see [Master ↔ Client control](#client-master-control)); it cannot be done through the Nightscout website. Carbs can be announced through SMS or **AAPSClient** as well. With SMS, it is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to **Treatments** → **Insulin** in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to **Treatments** → **Carbs** in **AAPS**.

To avoid hypos, it is a good idea to start conservatively, by bolusing **less insulin** than would be needed according to your carb ratio, because you are not taking into account the current glucose level or glucose trend.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can combine **AAPSClient** with SMS commands: carbs entered on a paired **AAPSClient** need no authentication code and are therefore quicker than SMS commands. Carbs or other treatments entered on the Nightscout website are **not** applied while client control is on; **AAPS** is then in [hardened mode](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## 指令

```{contents} List of command groups
:depth: 1
:local: true
```

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app). The commands are not case-sensitive, you can use lower or upper case.

![SMS Commands Example](../images/SMSCommands.png)

The **SMS Commands Tables** below show all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the **AAPS** app itself.

(authentication-or-not)=
### 是否需要驗證？

Some SMS commands give an immediate response, and some SMS commands require strong **authentication** through the Authenticator app. A simple enquiry like “**BG**” (which requests an update on current glucose) is quick to type, doesn't need authenticating, and returns the **AAPS** status information shown below:

![圖像](../images/remote-control-06.png)

Commands which need more security require a code to be entered, for example:

![SMS authenticated](../images/remote-control-07.png)

The *Auth* column in the tables below, indicates whether such a strong authentication is required for each command.

### CGM 資料

| 指令         | 驗證 | 功能 & *回應*                                                                                    |
| ---------- | -- | -------------------------------------------------------------------------------------------- |
| BG         | 否  | 返回：最後血糖、變化、IOB（注射和基礎）、COB<br/>*最後血糖：5.6 4分前，變化：-0.2 mmol，IOB：0.20U（注射：0.10U 基礎：0.10U）* |
| CAL 5.6/90 | 是  | 將 CGM 確認值設為 5.6/90<br/>(使用適合你血糖單位的值)<br/>僅在**AAPS**設定正確的情況下工作。<br/>*已發送標定* |

### 幫浦

| 指令                   | 驗證 | 功能 & *回應*                                                                      |
| -------------------- | -- | ------------------------------------------------------------------------------ |
| 幫浦                   | 否  | 最後連線：1 分鐘前<br/>暫時：0.00U/h @11:38 5/30分鐘<br/>IOB：0.5U 遺留：34U 電池：100 |
| PUMP DISCONNECT *30* | 是  | 在 *30* 分鐘內中斷幫浦                                                                 |
| PUMP CONNECT         | 是  | 幫浦已重新連線                                                                        |

### 基礎率

| 指令                | 驗證 | 功能 & *回應*              |
| ----------------- | -- | ---------------------- |
| BASAL 0.3         | 是  | 開始基礎注射 0.3U/h 持續 30 分鐘 |
| BASAL 0.3 20      | 是  | 開始基礎注射 0.3U/h 持續 20 分鐘 |
| BASAL 30%         | 是  | 開始基礎注射 30% 持續 30 分鐘    |
| BASAL 30% 50      | 是  | 開始基礎注射 30% 持續 50 分鐘    |
| BASAL STOP/CANCEL | 是  | 停止臨時基礎注射               |

Some pumps take a temp basal only in percent, others only in U/h. If you use the other form, **AAPS** answers *"This pump takes a temp basal only in percent, not in U/h."* (or the reverse) and sets nothing. The duration must be a multiple of your pump's temp basal duration step.


### 循環

| 指令                | 驗證 | 功能 & *回應*                                                                                                     |
| ----------------- | -- | ------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | 否  | 反應依賴於實際狀態：<br/> - *當循環關閉時，循環已停用*或 LGS<br/> - *當循環開啟或閉合時，循環已啟用*<br/> - *暫停 (10 分鐘)*當循環被中斷或暫停 |
| LOOP STOP/DISABLE | 是  | 幫浦將恢復到預設的基礎注射速率。<br/>*循環已被停用*                                                                           |
| LOOP SUSPEND 20   | 是  | *循環暫停 20 分鐘*                                                                                                  |
| LOOP RESUME       | 是  | *循環已恢復*                                                                                                       |
| LOOP CLOSED       | 是  | *當前循環模式：閉合循環*                                                                                                 |
| LOOP LGS          | 是  | *當前循環模式：低血糖暫停*                                                                                                |

### 注射

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! In this case, the response would be *Remote bolus not available. Try again later.* This response is also sent when the pump is currently delivering a bolus.

| 指令                   | 驗證 | 功能 & *回應*                                                                                                                                                         |
| -------------------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | 是  |                                                                                                                                                                   |
| BOLUS 0.60 MEAL      | 是  | 輸送指定的 0.60U 注射<br/>**並** 設定 [即將用餐臨時目標](#TempTargets-eating-soon-temp-target)                                                                                |
| CARBS 5              | 是  | 輸入 5g，無需注射                                                                                                                                                        |
| CARBS 5 17:35/5:35PM | 是  | 在 17:35 輸入 5g。<br/>可接受的時間格式依賴於<br/>手機上的時間設定 (12 小時/24 小時)。                                                                                            |
| EXTENDED 2 120       | 是  | To start extended bolus 2U for 120 min.<br/>Only for [compatible pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | 是  | 停止延長注射                                                                                                                                                            |

### 設定檔

| 指令             | 驗證 | 功能 & *回應*                                                               |
| -------------- | -- | ----------------------------------------------------------------------- |
| PROFILE STATUS | 否  | 當前個人設定與百分比                                                              |
| PROFILE LIST   | 否  | 當前 **AAPS** 中的個人設定列表，例如：<br/>1. 個人設定1<br/> 2. 個人設定2         |
| PROFILE 1      | 是  | 切換到列表中的個人設定 1。<br/>使用由 **個人設定列表** 返回的數字，<br/>而不是你儲存的個人設定名稱。 |
| PROFILE 2 30   | 是  | 切換到個人設定2 30%                                                            |

The percentage must be between 30 and 250 %, as in the app. A value outside this range is refused before you are asked for the authentication code.

### Temporary Targets

| 指令                        | 驗證 | 功能 & *回應*        |
| ------------------------- | -- | ---------------- |
| TARGET MEAL/ACTIVITY/HYPO | 是  | 設置臨時目標 餐點/活動/低血糖 |
| TARGET STOP/CANCEL        | 是  | 取消臨時目標           |


(SMSCommands-other)=
### 其他

| 指令               | 驗證 | 功能 & *回應*                                                                                                                                                                                                                                                              |
| ---------------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 重啟               | 是  | 重啟 AAPS。如果你常遇到重啟就能解決的話，這會很有幫助。                                                                                                                                                                                                                                         |
| SMS DISABLE/STOP | 是  | To disable the SMS Remote Service, reply with the code.<br/>Keep in mind that you'll be able to reactivate it directly<br/>from the **AAPS** master smartphone only.                                                                                       |
| HELP             | 否  | Returns all functions available for interrogation:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Send further ***HELP ***FUNCTION****** command to list<br/>all options available in this section. |
| HELP BOLUS       |    | *注射 1.2<br/>注射 1.2 餐前*                                                                                                                                                                                                                                           |

(SMSCommands-troubleshooting)=
## 疑難排解與常見問題

```{contents} List of questions and issues
:depth: 1
:local: true
```

### 我們 _不能_ 使用 SMS 命令做什麼？

1)  **You cannot set a _temporary_ profile switch** (so for example, setting "profile exercise" for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profile switches can instead be set through **AAPSClient**.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the **AAPS** phone. If the high temporary target of 7.0 is started by the automation, and you cancel it (on the **AAPS** phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min by pressing on the target on the main screen, or via **Manage** → **Temp Target**. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use **AAPSClient** to do this.

### 如果我改變對我剛發送的命令的想法，會發生什麼？

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. **AAPS** will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

### 為什麼我沒有收到 SMS 命令的回覆？

It could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The **AAPS** phone does not have a good Bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the **AAPS** phone).

### 短信命令完全沒有回覆

On the caregiver phone and/or **AAPS** phone, try disabling the following options :
* **作為聊天訊息發送** ![停用 SMS 作為聊天訊息](../images/SMSdisableChat.png)
* 如果使用 Android 訊息應用程序或 Google 訊息應用程序，請停用 RCS 訊息：
  - 打開 Messages 中的特定 SMS 對話
  - 選擇右上角的選項省略號
  - 選擇「詳細訊息」
  - 啟用「僅發送 SMS 和 MMS 訊息」 ![停用 RCS 作為聊天訊息](../images/SMSdisableRCS.png)

### 執行命令時出錯

There are several possible reasons the command may not be successful:

* SMS 指令設置不完整或不正確
* 你發送了一個格式不正確的命令（例如“中斷連線幫浦 45”而不是“幫浦中斷連線 45”）
* 你使用了不正確或過期的驗證碼（通常建議等幾秒鐘以獲取新碼，如果當前碼即將過期）
* 代碼+PIN 是正確的，但 SMS 發送/接收的延遲導致 **AAPS** 計算出驗證碼已過期
* **AAPS** 手機與幫浦超出範圍/無法聯繫
* 系統正忙於執行注射操作

Common errors are shown in the examples below:

![圖像](../images/remote-control-17.png)

### 一旦命令經過驗證，我該如何停止該命令？

You can't. However, you can cancel a bolus sent by SMS on the **AAPS** phone itself, by simply cancelling it on the bolusing popup, if you are quick. Many SMS commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate unintended effects if a mistake is made.

For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

### 多條簡訊

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. This could be xDrip, for example. If so, please ensure that xDrip (or any other app) does not upload treatments to NightScout.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

(sms-commands-too-many-messages)=
### 我收到的 SMS 命令過多。我可以減少頻率或停止這些簡訊嗎？

Using SMS commands may generate a lot of automated messages from the **AAPS** phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your **AAPS** phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include Whatsapp, Lime, Telegram, and Facebook Messenger.

It is possible to disable the "Profile changed" SMS, when the Profile change originated from Nightscout. To do this, create a file named **exactly**  `do_not_send_sms_on_profile_change` in the `extra` dir of your AAPS directory.
