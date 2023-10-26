# SMS-команды

## Безопасность прежде всего

- AndroidAPS позволяет вам контролировать телефон ребенка удаленно посредством текстовых сообщений (смс). Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом. Рекомендуется использовать надежный пароль или биометрические данные.
- Additionally it is recommended to allow a [second phone number](SMS-Commands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](SMS-Commands-other) SMS communicator in case your main remote phone gets lost or stolen.
- AndroidAPS также сообщит вам текстовым сообщением, выполнены ли ваши удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.
- **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.
- Начиная с версии AndroidAPS 2.7 при использовании SMS-команд необходимо использовать приложение-аутентификатор с одноразовым паролем.

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

- В AAPS перейдите в **Настройки > SMS Коммуникатор**и введите номер(а) телефона(ов), с которых хотите отправлять SMS команды (разделенные точками с запятыми - напр +6412345678;+6412345679)

- Обратите внимание, что «+» перед номером может быть обязательным или не потребуется в зависимости от вашего местоположения. Для определения этого отправьте образец текста, который будет отображать полученный формат на вкладке SMS Communicator.

- Enable 'Allow remote commands via SMS'.

- Если вы хотите использовать более одного номера:

  - Введите только один номер.

  - Убедитесь, что этот телефон работает с алгоритмом путем отправки и подтверждения команды SMS.

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
  - все цифры различные (например, не 1111)
  - не подряд (например, не 1234)

### Настройка аутентификации

- Для повышения безопасности используется двухфакторная аутентификация.

- You can use any Authenticator app that supports RFC 6238 TOTP tokens. Популярные бесплатные приложения:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Установите на телефоне-фолловере выбранное вами приложение идентификации и просканируйте QR-код, показанный в AAPS.

- Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Example:

  - Ваш обязательный PIN-код 2020
  - Маркер TOTP из приложения идентификации-457051
  - Введите 4570512020

- Красный текст "НЕПРАВИЛЬНЫЙ ПИН" изменится **автоматически** на зеленый "OK", если запись правильная. **There is no button you can press!**

- Время на обоих телефонах должно быть синхронизировано. Best practice is set automatically from network. Time differences might lead to authentication problems.

- Use button "RESET AUTHENTICATORS" if you want to remove provisioned authenticators.  (By resetting authenticator you make ALL already provisioned authenticators invalid. Вам придется их снова настроить)

## Use SMS commands

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](SMS-Commands-commands) below.

- Телефон с AAPS ответит чтобы подтвердить успешное выполнение команды или запрашиваемого статуса.

- Подтвердите команду, при необходимости отправив код. Example:

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

- LOOP STOP/DISABLE \* Ответ: Цикл отключен

- LOOP START/ENABLE \* Ответ: Цикл включен

- LOOP STATUS

  - Response depends on actual status

    - Loop is disabled
    - Loop is enabled
    - Suspended (10 min)

- LOOP SUSPEND 20 \* Ответ: Цикл приостановлен на 20 минут

- LOOP RESUME \* Ответ: Цикл возобновлен

### CGM data

- BG \* Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
- CAL 5.6 \* Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN \* Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

### Basal

- BASAL STOP/CANCEL \* Ответ: Для остановки временного базала ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- BASAL 0.3 \* Ответ: Для постановки базала на 0.3 ед/ч ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- BASAL 0.3 20 \* Ответ: Для постановки базала 0.3 ед/ч на 20 мин ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- BASAL 30% \* Ответ: Для постановки базала 30% ед/ч на 30 мин. ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- BASAL 30% 50 \* Ответ: Для постановки базала 30% ед/ч на 50 мин. ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом

### Bolus

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! Therefore the response depends on the time that the last bolus was given.

- BOLUS 1.2 \* Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN \* Response B: Remote bolus not available. Повторите позже.
- BOLUS 0.60 MEAL \*Если указать необязательный параметр MEAL, запускается временная цель MEAL (значения по умолчанию: 90 мг/дл, 5.0 ммоль/л на 45 мин). \* Ответ A: Для подачи болюса 0.60 ед. ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом \* Ответ B: Удаленный болюс недоступен.
- CARBS 5 \* Ответ: Чтобы ввести 5г в 12:45 ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- CARBS 5 17:35/5:35PM \* Ответ: Чтобы ввести 5г в 17:35 ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- EXTENDED STOP/CANCEL \* Ответ: Для остановки пролонгированного болюса ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- EXTENDED 2 120 * Ответ: Чтоб начать пролонгированный болюс 2ед на 120 минут ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом

### Профиль

- PROFILE STATUS \* Ответ: Profile1
- PROFILE LIST \* Ответ: 1.\`Profile1\` 2.\`Profile2\`
- PROFILE 1 \* Ответ: Для переключения профиля на Profile1 100% ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- PROFILE 2 30 \* Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

(SMS-Commands-other)=

### Другое

- TREATMENTS REFRESH \* Ответ: Обновление терапии из NS
- NSCLIENT RESTART \* Ответ: NSCLIENT RESTART 1 получателя
- PUMP \* Ответ: Последнее соед: 1 мин. назад -- Врем базал: 0.00ед/ч @11:38 5/30мин IOB: 0.5ед Резервуар: 34ед Бат: 100
- PUMP CONNECT \* Ответ: Помпа переподключена
- PUMP DISCONNECT *30* \* Ответ: Чтобы разъединить связь с помпой на *30* минут ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- SMS DISABLE/STOP \* Ответ: Для отключения удаленного сервиса SMS ответьте любым кодом. Имейте в виду, что после этого его можно повторно активировать только непосредственно с основного смартфона AAPS.
- TARGET MEAL/ACTIVITY/HYPO \* Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
- TARGET STOP/CANCEL \* Ответ: Для остановки временной цели ответьте кодом из приложения Authenticator для Пользователя и подтвердите своим PIN-кодом
- HELP \* Ответ: BG, LOOP, TREATMENTS, ..... (ГК, ЦИКЛ, ТЕРАПИЯ...).....
- HELP BOLUS \* Ответ: BOLUS 1.2 BOLUS 1.2 MEAL (БОЛЮС 1.2 БОЛЮС 1.2 НА ЕДУ)

(SMS-Commands-troubleshooting)=
## Устранение неполадок

### Multiple SMS

Если вы многократно получаете одно и то же сообщение (напр. переключатель профиля), то, возможно, возникла закольцованность с другими приложениями. Например, с xDrip+. Если это так, убедитесь, что xDrip+ (или любое другое приложение) не загружает данные терапии в NS.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

### SMS commands not working on Samsung phones

There was a report on SMS commands stopping after an update on Galaxy S10 phone. Решается путем отключения опции "отправлять SMS как сообщения чата".

```{image} ../images/SMSdisableChat.png
:alt: Disable SMS as chat message
```
### Android Messages App

If you are having issues sending or receiving SMS commands with the Android Messages app disable end-to-end ecryption on both caregiver and child's phones.
 - open the specific SMS conversation in Messages
 - Select the options ellipisis in the top right corner
 - select "Details"
 - Activate "Only send SMS and MMS messages"
