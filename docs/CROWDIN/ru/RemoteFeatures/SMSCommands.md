# SMS команды

```{contents} Table of contents
:depth: 2
```

Most of the adjustments of temp targets, following **AAPS** etc. can be done on [**AAPSClient** app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection. Boluses, however, can't be given through **AAPSClient**, but you can use SMS commands. If you use an iPhone as a follower and therefore cannot use **AAPSClient** app, there are additional SMS commands available.

**SMS commands are really useful:**
1. For routine remote control

2. If you want to remotely bolus insulin

3. In a region of poor internet reception, where text messages are able to get through, but data/internet phone reception is limited. This is very useful when going to remote areas (e.g. camping, skiing).

4. If your other methods of remote control (Nightscout/AAPSClient) are temporarily not working

## Безопасность прежде всего

If you enable **SMS Communicator** in **AAPS**, consider that the phone which is set up to give remote commands could be stolen, and/or used by someone else. Always lock your phone handset with at least a PIN. A strong password and/ or biometric lock are highly recommended, and ensure this is different from your APK Master password (the password which is required to export **AAPS** settings).

Additionally, it is recommended to allow a [second phone number](#SMSCommands-authorized-phone-numbers) for SMS commands. This way, you can use the second number to [disable](#SMSCommands-other) SMS communicator in case your main remote phone gets compromised.

The default minimum time delay between bolus commands is 15 minutes. For safety reasons, you have to add at least two authorised phone numbers to change this to a shorter time delay. If you try to remotely bolus again within 15 minutes of the previous bolus, you will receive the response “Remote bolus not available. Try again later”

AndroidAPS также сообщит вам текстовым сообщением, выполнены ли ваши удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.

**If you bolus through SMS Commands, you must enter carbs separately (second SMS, AAPSClient, Nightscout...)!** If you fail to do so, the IOB would be correct with too low COB, potentially leading to not performed correction bolus as **AAPS** assumes that you have too much active insulin.

For the sensitive commands, an authenticator app with a time-based one-time password must be used to increase safety.

If you want to remove the ability of a caregiver phone to send SMS commands, use the emergency button “[Reset Authenticators](#sms-commands-authenticator-setup)” in **AAPS** or send the SMS command “[SMS stop](#SMSCommands-other)”. By resetting authenticators you make ALL the caregivers' phones invalid. You will need to set them up again.

## Настройка SMS-команд

```{contents} The overall process is as follows
:depth: 1
:local: true
```

### Настройка аутентификации

Для повышения безопасности используется двухфакторная аутентификация.

On the caregiver phone, download (from the App store or Google play) and install an Authenticator app. Популярные бесплатные приложения:
  - [Приложение Authy](https://authy.com/download/)
  - Google Authenticator - [Android ](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)/[iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

These Authenticator apps produce a time-limited, one-time 6-digit password, similar to mobile banking or shopping. You can use an alternative Authenticator app, as long as it supports RFC 6238 TOTP tokens. The Microsoft Authenticator does not work.

### Check phone settings

On your phone, go to **Apps > AAPS > Permissions**. Make sure **SMS** and **Phone** are allowed.

![изображение](../images/remote-control-08.png)

### Date and time synching

Время на обоих телефонах должно быть синхронизировано. Оптимальный вариант - установить на автоматическую настройку из сети. Различия во времени могут привести к проблемам аутентификации.

On both the **AAPS** phone and the caregiver phone, check the date and time are synched. Exactly how you do this depends on your specific device, you may need to try out different settings.

Example (for Samsung S23): **Settings > General management > Date and time**: make sure that **Automatic date and time** is checked.

Some options may be greyed out, due to needing admin via a family account if the phone has been set up as a child account. This date and time setting is called “set automatically” on a caregiver/parent iPhone. If you are not sure if you have synched the handsets, don’t worry, you can set up the SMS commands and troubleshoot afterward if it seems to be causing problems (ask for help if needed).

### Настройки AAPS

Now that the phone settings have been checked, in the **AAPS** app itself, use the [Config Builder](../SettingUpAaps/ConfigBuilder.md) to enable the **SMS Communicator** module.

Go to the Preferences for SMS Communicator.

Enable “allow remote commands via SMS”:

![изображение](../images/remote-control-11.png)

(SMSCommands-authorized-phone-numbers)=
#### Allowed phone numbers

Enter the caregiver phone number(s). Include the country code and exclude the first “0” of the phone number, as shown in these examples:
* UK phone number: +447976304596
* US phone number: +11234567890
* FR phone number:  +33612344567
* _etc._

Note that the “+” in front of the number may or may not be required based on your location. To determine this, send a sample text which will show the received format in the SMS Communicator tab.

If you have more than one phone number to add, separate them by semicolons, with **NO space between numbers** (this is critical!). Select “OK”:

![изображение](../images/remote-control-12.png)

#### Минуты между командами на болюс

- Можно определить минимальную задержку между двумя болюсами, поданными при помощи SMS.
- Из соображений безопасности следует добавить хотя бы два авторизованных номера телефона для изменения этого значения.

#### Additional mandatory PIN at token end

For safety reasons, the reply code must be followed by a PIN. Choose a PIN which you (and any other caregivers) are going to use at the end of the authenticator code when the SMS command is sent.

PIN requirements are:

* от 3 до 6 цифр
* not the same digits (_i.e._ 1111 or 1224)
* not sequential numbers (_i.e._ 1234)

![изображение](../images/remote-control-13.png)

(sms-commands-authenticator-setup)=
#### Настройка аутентификации

* Follow the step-by-step instructions on the screen.
* Open your installed authenticator app on the _caregiver’s phone_, set up a new connection and
* Use the caregiver phone to scan the QR code provided by **AAPS**, when prompted.
* Test the one-time passcode from the authenticator app on the caregiver phone followed by your PIN:

Пример:
* The token from the authenticator app is 457051
* Your mandatory PIN is 2401
* Code to check: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. **There is no button you can press!** The process is now complete, there is no “OK” button you need to press after entering the code:

![изображение](../images/remote-control-14.png)

You should now be set up with SMS commands.

Use button "Authenticator setup > Reset Authenticators" if you want to remove provisioned authenticators. (При сбросе аутентификации вы делаете ВСЕ уже предоставленные аутентификаторы недействительными. You will need to set them up again.)

## SMS commands usage

### First steps using SMS commands

1)  To check you have set everything up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the **AAPS** phone. You should get a response similar to that shown here:

![изображение](../images/remote-control-15.png)

If you don't receive any response, check the [Troubleshooting](#SMSCommands-troubleshooting) section below.

2)  Now try an SMS command that requires the authenticator, _e.g._ “target hypo”. The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by the additional secret **PIN** known only by caregivers/followers (a string of ten digits in total, assuming your PIN is only 4 digits).

When you try sending an SMS command for the first time, try it in the presence of the **AAPS** phone, to see how it works:

![изображение](../images/remote-control-16.png)

The caregiver’s phone will receive an SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully.

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message. See [Troubleshooting](#SMSCommands-troubleshooting) below for common errors.

***Подсказка**: Если отправляется много SMS, полезно иметь тарифный план с неограниченным количеством SMS (на обоих телефонах).

### Delivering mealtime boluses through SMS commands

Remote bolusing of insulin can _only_ be done via **SMS Commands**, it cannot be actioned through NightScout or AAPSClient. Carbs however, can be announced through any of the three methods. It is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to using the “syringe” icon in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to using the “carbs” tab in **AAPS**.

To avoid hypos, it is a good idea to start conservatively, by bolusing **less insulin** than would be needed according to your carb ratio, because you are not taking into account the current glucose level or glucose trend.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can use a combination of Nightscout or **AAPSClient** with SMS commands. Carbs can be announced through Nightscout without any authentication (see instructions subsection below) , and are therefore quicker than SMS commands.

(SMSCommands-commands)=
## Команды

```{contents} List of command groups
:depth: 1
:local: true
```

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app). The commands are not case-sensitive, you can use lower or upper case.

![SMS Commands Example](../images/SMSCommands.png)

The **SMS Commands Tables** below show all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the **AAPS** app itself.

(authentication-or-not)=
### Authentication or not?

Some SMS commands give an immediate response, and some SMS commands require strong **authentication** through the Authenticator app. A simple enquiry like “**BG**” (which requests an update on current glucose) is quick to type, doesn't need authenticating, and returns the **AAPS** status information shown below:

![изображение](../images/remote-control-06.png)

Commands which need more security require a code to be entered, for example:

![SMS authenticated for markdown-smaller](../images/remote-control-07.png)

The *Auth* column in the tables below, indicates whether such a strong authentication is required for each command.

### Данные мониторинга

| Command    | Auth | Function & *Response*                                                                                                                                                                       |
| ---------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | No   | Returns: last BG, delta, IOB (bolus and basal), COB<br/>*Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)*                                             |
| CAL 5.6/90 | Yes  | Will calibrate the CGM with a value of 5.6/90<br/>(use the value appropriate to your glucose units)<br/>Works only if properly set-up in **AAPS**.<br/>*Calibration sent* |

### Pump

| Command              | Auth | Function & *Response*                                                                                 |
| -------------------- | ---- | ----------------------------------------------------------------------------------------------------- |
| ПОМПА                | No   | Last conn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Yes  | To disconnect pump for *30* minutes                                                                   |
| PUMP CONNECT         | Yes  | Pump reconnected                                                                                      |

### Базал

| Command           | Auth | Function & *Response*            |
| ----------------- | ---- | -------------------------------- |
| BASAL 0.3         | Yes  | To start basal 0.3U/h for 30 min |
| BASAL 0.3 20      | Yes  | To start basal 0.3U/h for 20 min |
| BASAL 30%         | Yes  | To start basal 30% for 30 min    |
| BASAL 30% 50      | Yes  | To start basal 30% for 50 min    |
| BASAL STOP/CANCEL | Yes  | To stop temp basal               |


### Замкнутый цикл

| Command           | Auth | Function & *Response*                                                                                                                                                                                                                     |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | No   | Response depends on actual status:<br/> - *Loop is disabled* if the loop is disabled or LGS<br/> - *Loop is enabled* if the loop is closed or open<br/> - *Suspended (10 min)* if the loop is disconnected or suspended |
| LOOP STOP/DISABLE | Yes  | The pump will revert to the pre-programmed basal rate.<br/>*Loop has been disabled*                                                                                                                                                 |
| LOOP START/ENABLE | Yes  | *Loop has been enabled*                                                                                                                                                                                                                   |
| LOOP SUSPEND 20   | Yes  | *Loop suspended for 20 minutes*                                                                                                                                                                                                           |
| LOOP RESUME       | Yes  | *Loop resumed*                                                                                                                                                                                                                            |
| LOOP CLOSED       | Yes  | *Current loop mode: Closed Loop*                                                                                                                                                                                                          |
| LOOP LGS          | Yes  | *Current loop mode: Low Glucose Suspend*                                                                                                                                                                                                  |

### Болюс

Удаленный болюс разрешается только через 15 минут после предыдущей команды болюс или других удаленных команд (значение редактируется если для передачи команд добавлено 2 номера телефона)! In this case, the response would be *Remote bolus not available. Try again later.* This response is also sent when the pump is currently delivering a bolus.

| Command              | Auth | Function & *Response*                                                                                                        |
| -------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| BOLUS 1.2            | Yes  |                                                                                                                              |
| BOLUS 0.60 MEAL      | Yes  | Delivers the specified 0.60U bolus<br/>**and** sets the [Eating Soon TempTarget](#TempTargets-eating-soon-temp-target) |
| CARBS 5              | Yes  | To enter 5g, without a bolus                                                                                                 |
| CARBS 5 17:35/5:35PM | Yes  | To enter 5g at 17:35.<br/>The acceptable time format depends<br/> on the time setting (12h/24h) on the phone.    |
| EXTENDED 2 120       | Yes  | To start extended bolus 2U for 120 min.<br/>Only for [compatible pumps](#screens-action-tab).                          |
| EXTENDED STOP/CANCEL | Yes  | To stop extended bolus                                                                                                       |

### Profile

| Command        | Auth | Function & *Response*                                                                                                                                        |
| -------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PROFILE STATUS | No   | Current profile and percentage                                                                                                                               |
| PROFILE LIST   | No   | The current list of profiles in **AAPS**, e.g.:<br/>1. Profile1<br/> 2. Profile2                                                                 |
| PROFILE 1      | Yes  | To switch profile to profile 1 in the list.<br/>Use the numbers as returned by the **PROFILE LIST**,<br/>not the profile names as you saved them |
| PROFILE 2 30   | Yes  | To switch profile to Profile2 30%                                                                                                                            |

### Temporary Targets

| Command                   | Auth | Function & *Response*                     |
| ------------------------- | ---- | ----------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Yes  | To set the Temp Target MEAL/ACTIVITY/HYPO |
| TARGET STOP/CANCEL        | Yes  | To cancel Temp Target                     |


(SMSCommands-other)=
### Другое

| Command            | Auth | Function & *Response*                                                                                                                                                                                     |
| ------------------ | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TREATMENTS REFRESH | No   | Refresh treatments from NS                                                                                                                                                                                |
| NSCLIENT RESTART   | No   | Useful if you notice a communication problem<br/>with Nightscout or **AAPSClient**                                                                                                                  |
| SMS DISABLE/STOP   | No   | To disable the SMS Remote Service reply with code Any.<br/>Keep in mind that you'll able to reactivate it directly<br/>from the **AAPS** master smartphone only.                              |
| HELP               | No   | Returns all functions available for interrogation:<br/>BG, LOOP, TREATMENTS, ....<br/>Send further ***HELP ***FUNCTION****** command to list<br/>all options available in this section. |
| HELP BOLUS         |      | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                      |

(SMSCommands-troubleshooting)=
## Troubleshooting and FAQ

```{contents} List of questions and issues
:depth: 1
:local: true
```

### What _can’t_ we do with SMS commands?

1)  **You cannot set a _temporary_ profile switch** (so for example, setting "profile exercise" for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profiles switches can instead be set through Nightscout or AAPSClient.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the **AAPS** phone. If the high temporary target of 7.0 is started by the automation, and you cancel it (on the **AAPS** phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min under the Actions Tab or by pressing on the target tab. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use **AAPSClient** or Nightscout to do this.

### What happens if I change my mind about a command I have just sent?

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. **AAPS** will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

### Why didn't I get a response to an SMS command?

It could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The **AAPS** phone does not have good bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the **AAPS** phone).

### No response whatsoever for SMS commands

On the caregiver phone and/or **AAPS** phone, try disabling the following options :
* **Send as chat message** ![Disable SMS as chat message](../images/SMSdisableChat.png)
* If using Android Messages App or Google Messages App, disable RCS messaging:
  - откройте конкретный SMS-диалог в приложении Messages
  - Select the options ellipsis in the top right corner
  - выберите "Подробности"
  - Activate "Only send SMS and MMS messages" ![Disable RCS as chat message](../images/SMSdisableRCS.png)

### Errors carrying out commands

There are several possible reasons the command may not be successful:

* SMS commands setup isn’t complete/correct
* You sent a command which had an incorrect format (like “disconnect pump 45” instead of “pump disconnect 45”)
* You used an incorrect, or expired authenticator code (it is usually good to wait a few seconds for a fresh code, if the current one is about to expire)
* The code+PIN was OK, but there was a delay in the SMS leaving/arriving, which led **AAPS** to calculate that the authenticator code had expired
* The **AAPS** phone is out of range/contact with the pump
* The system is already busy delivering a bolus

Common errors are shown in the examples below:

![изображение](../images/remote-control-17.png)

### How can I stop a command once it has been authenticated?

You can't. However, you can cancel a bolus sent by SMS on the **AAPS** phone itself, by simply cancelling it on the bolusing popup, if you are quick. Many SMS commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate unintended effects if a mistake is made.

For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

### Несколько SMS

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. Например, с xDrip+. If so, please ensure that xDrip+ (or any other app) does not upload treatments to NightScout.

Если на других телефонах есть еще это приложение, отключите выгрузку данных на всех этих телефонах.

### I am getting far too many text messages from SMS Commands. Can I reduce the frequency, or make them stop?

Using SMS commands may generate a lot of automated messages from the **AAPS** phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your **AAPS** phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include Whatsapp, Lime, Telegram, and Facebook Messenger.