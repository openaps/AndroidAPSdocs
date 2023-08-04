# SMS-команды

## Безопасность прежде всего

- AAPS allows you to control a child's phone remotely via text message. Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом. Рекомендуется использовать надежный пароль или биометрические данные.
- Additionally it is recommended to allow a [second phone number](SMS-Commands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](SMS-Commands-other) SMS communicator in case your main remote phone gets lost or stolen.
- AAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.
- **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.
- As of AAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.

## Настройка SMS-команд

```{image} ../images/SMSCommandsSetup.png
:alt: Настройка SMS команд
```

- Most of the adjustments of temp targets, following AAPS etc. can be done on [NSClient app](../Children/Children.md) on an Android phone with an internet connection.
- Болюсы не могут подаваться через Nightscout, но можно использовать SMS-команды.
- If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.
- In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS

(SMS-Commands-authorized-phone-numbers)=

### Авторизованные номера телефонов

- In AAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +6412345678;+6412345679)

- Enable 'Allow remote commands via SMS'.

- Если вы хотите использовать более одного номера:

  - Введите только один номер.

  - Make that single number work by sending and confirming a SMS command.

  - Введите дополнительные номера, разделенные точкой с запятой, без пробела.

    ```{image} ../images/SMSCommandsSetupSpace2.png
    :alt: SMS Commands Setup multiple numbers
    ```

### Минуты между командами на болюс

- Можно определить минимальную задержку между двумя болюсами, поданными при помощи SMS.
- Из соображений безопасности следует добавить хотя бы два авторизованных номера телефона для изменения этого значения.

### Additionally mandatory PIN at token end

- По соображениям безопасности за кодом ответа должен следовать PIN.

- Правила установки PIN:

  - от 3 до 6 цифр
  - все цифры различные (например, 1111)
  - не подряд (например, 1234)

### Настройка аутентификации

- Для повышения безопасности используется двухфакторная аутентификация.

- You can use any Authenticator app that supports RFC 6238 TOTP tokens. Популярные бесплатные приложения:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Установите на телефоне-фолловере приложение идентификации по выбору и просканируйте QR-код, показанный в AAPS.

- Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Example:

  - Ваш обязательный PIN-код 2020
  - Маркер TOTP из приложения идентификации-457051
  - Введите 4570512020

- The red text "WRONG PIN" will change **automatically** to a green "OK" if the entry is correct. **There is no button you can press!**

- Время на обоих телефонах должно быть синхронизировано. Best practice is set automatically from network. Time differences might lead to authentication problems.

- Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again)

## Use SMS commands

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](SMS-Commands-commands) below.

- The AAPS phone will respond to confirm success of command or status requested.

- Confirm command by sending the code where necessary. Example:

  - Ваш обязательный PIN-код 2020
  - Маркер TOTP из приложения идентификации-457051
  - Введите 4570512020

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

(SMS-Commands-commands)=
## Commands

Commands must be sent in English, the response will be in your local language if the response string is already [translated](translations-translate-strings-for-AAPS-app).

```{image} ../images/SMSCommands.png
:alt: SMS Commands Example
```

### Замкнутый цикл

- LOOP STOP/DISABLE \* Response: Loop has been disabled

- LOOP START/ENABLE \* Response: Loop has been enabled

- LOOP STATUS

  - Response depends on actual status

    - Loop is disabled
    - Loop is enabled
    - Suspended (10 min)

- LOOP SUSPEND 20 \* Response: Loop suspended for 20 minutes

- LOOP RESUME \* Response: Loop resumed

### CGM data

- BG \* Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
- CAL 5.6 \* Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN \* Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

### Basal

- BASAL STOP/CANCEL \* Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
- BASAL 0.3 \* Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
- BASAL 0.3 20 \* Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
- BASAL 30% \* Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
- BASAL 30% 50 \* Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

### Bolus

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

- BOLUS 1.2 \* Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available. Try again later.
- BOLUS 0.60 MEAL \* If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins). \* Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available.
- CARBS 5 \* Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
- CARBS 5 17:35/5:35PM \* Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
- EXTENDED STOP/CANCEL \* Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
- EXTENDED 2 120 \* Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

### Профиль

- PROFILE STATUS \* Response: Profile1
- PROFILE LIST \* Response: 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1 \* Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
- PROFILE 2 30 \* Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

(SMS-Commands-other)=

### Другое

- TREATMENTS REFRESH \* Response: Refresh treatments from NS
- NSCLIENT RESTART \* Response: NSCLIENT RESTART 1 receivers
- PUMP \* Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
- PUMP CONNECT \* Response: Pump reconnected
- PUMP DISCONNECT *30* \* Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
- SMS DISABLE/STOP \* Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
- TARGET MEAL/ACTIVITY/HYPO \* Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
- TARGET STOP/CANCEL \* Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
- HELP \* Response: BG, LOOP, TREATMENTS, .....
- HELP BOLUS \* Response: BOLUS 1.2 BOLUS 1.2 MEAL

(SMS-Commands-troubleshooting)=
## Troubleshooting

### Multiple SMS

If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not upload treatments to NS.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

### SMS commands not working on Samsung phones

There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabling 'send as chat message'.

```{image} ../images/SMSdisableChat.png
:alt: Disable SMS as chat message
```
### Android Messages App

If you are having issues sending or receiving SMS commands with the Android Messages app disable end-to-end ecryption on both caregiver and child's phones.
 - open the specific SMS conversation in Messages
 - Select the options ellipisis in the top right corner
 - select "Details"
 - Activate "Only send SMS and MMS messages"
