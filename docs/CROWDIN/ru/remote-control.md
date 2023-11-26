# Дистанционное управление AAPS
Существует 4 наиболее эффективных инструмента для удаленного управления **AAPS**:

1) [SMS команды](sms-commands) (телефон фолловера может быть как Android, так и iOS), 2) [Клиент AAPS](aapsclient) (телефон фолловера только Android), 3) [Nightscout](nightscout) (Android, iOS или любой компьютер/устройство с доступом к браузеру)  
4) [Умные часы](smartwatches) (Android)

Первые три варианта вполне подходят родителям или опекунам, однако умные часы весьма удобны не только им, но **и** взрослым с диабетом.

![изображение](images/remote-control-01.png)

#### Некоторые соображения по поводу настройки удаленного управления **AAPS** для детей

1.  Подумайте о том, каким образом вы обеспечите нахождение телефона ребенка в зоне доступа его помпы и НМГ. Это еще то испытание с маленькими детьми, которые пока не несут ответственность за свой телефон. Убедитесь, что выбрали для AAPS телефон с хорошим качеством и дальностью связи Bluetooth и подобрали удобный для ребенка способ ношения помпы и телефона  (_например, _ можно использовать [поясные сумочки](https://spibelt.com/collections/kids-belts)).
2.  Найдите время, чтобы спокойно настроить и отладить все удаленные команды, находясь рядом с ребенком, прежде чем начать удаленно подавать команды и следить за сахарами. Многие родители для этого выбирают школьные каникулы или выходные.
3.  Убедитесь, что учителя или другие ответственные взрослые, в курсе терапии вашего ребенка и выясните, как удаленное управление может повлиять на имеющуюся терапию.
4.  Многие родители находят полезным иметь отдельное устройство для мониторинга состояния ребенка другими, например недорогой телефон-"фолловер" для учителя.
5.  Examples for school care plans for children of different ages can be found in the [“files section”](https://www.facebook.com/groups/AndroidAPSUsers/files/) of the **AAPS** Facebook page.
6.  Какие ваши действия на случай, когда удаленное управление не работает (_например_, возникли проблемы с интернетом или потерялся сигнал bluetooth)?  Всегда учитывайте, что может произойти с **AAPS**, если вы внезапно потеряете возможность отправить новую команду. **AAPS** перезапишет значения базы, ФЧИ и УК, указанные в помпе, значениями из текущего профиля. Если вы устанавливаете более агрессивный профиль - всегда делайте его временным (_т.е._ указывайте длительность действия профиля) на случай, если удаленное управление станет недоступным. Помпа вернется к стандартному профилю по истечении указанного времени.

(sms-команды)=
## 1) SMS команды

Существует возможность удаленно управлять **AAPS** с помощью текстового (SMS) сообщения на основе **SMS-команд**. Команды SMS можно отправлять на **AAPS** с  _любого_ типа телефона (iPhone|Android).

**SMS-команды очень полезны:**
1. Для обычного дистанционного управления

2. Для дистанционного введения инсулина

3. На территориях с плохо работающим интернетом, где могут проходить текстовые сообщения, а прием данных/интернет ограничен. Полезно при путешествиях в отдаленные районы ( в походах, на лыжных базах и т.п.).

4. Если другие методы дистанционного управления (Nightscout/AAPSClient) временно не работают

### Безопасность SMS-команд
При включении **SMS коммуникатора** в **AAPS**, учитывайте, что телефон, который настроен для подачи удаленных команд, может быть украден и/или использован кем-то еще. Всегда блокируйте телефон PIN-кодом. Рекомендуются надежные пароли и/или биометрические замки, отличные от мастер-пароля (пароль, который требуется для изменения настроек **AAPS**). Для корректной работы SMS команд в настройках должен быть активирован второй номер телефона, даже если у вас только один основной опекун/фоллоуэр. Второй номер может понадобиться чтобы временно отключить SMS-коммуникатор (командой **«SMS stop»**), если главный телефон попал в чужие руки. Версии **AAPS** 2.7 и новее также используют приложение [Authenticator](authentication-or-not)).

### Различные типы SMS команд
В нижеприведенной таблице команд **SMS** представлены все возможные SMS-команды. Для облегчения понимания приводятся _Примерные значения_. Команды имеют такой же диапазон возможных значений (цели, процентный профиль и т. д.), который разрешен в самом приложении AAPS. Команды в таблицах перечислены в том порядке, в котором обычно используются; первые две таблицы содержат большую часть команд SMS для AAPS.

### Таблицы SMS команд

![изображение](images/remote-control-02.png)

![изображение](images/remote-control-03.png)

![изображение](images/remote-control-04.png)

![изображение](images/remote-control-05.png)

(аутентификатор-или нет.)=
### Нужна ли аутентификация?

Из приведенной таблицы видно, что некоторые команды SMS дают немедленный ответ, а другие требуют **аутентификации** по коду безопасности из дополнительного приложения и PIN-коду (см. подробнее ниже). Простой запрос, например «**bg**» (запрашивает обновление ГК) быстро вводится, не требует аутентификации и возвращает информацию о статусе **AAPS** - см. ниже:

![изображение](images/remote-control-06.png)

Команды, которым требуется больше безопасности, требуют ввести код, например:

![SMS authenticated for markdown-smaller](images/remote-control-07.png)

### Как настроить SMS-команды

The overall process is as follows:

**1) Скачиваем аутентификатор (на телефон родителя/опекуна)**

**2) Проверяем настройки телефона (телефон с AAPS)**

**3) Синхронизируем дату и время (телефон родителя и телефон AAPS)**

**4)    AAPS settings (APPS phone)**

**5) Проверяем работу команд SMS (телефон родителя и AAPS)**

### Приступим!

1) **Скачиваем аутентификатор**: На смартфоне родителя скачиваем (из App store или Google play) и установливаем один из аутентификаторов на выбор из списка ниже:

[**Приложение Authy**](https://authy.com/download/)

[**Аутентификатор Google - Android / iOS**](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1)

[**LastPass Authenticator**](https://www.lastpass.com/solutions/authentication)

[**FreeOTP Authenticator**](https://freeotp.github.io/)

Эти приложения содержат ограниченный по времени одноразовый 6-значный пароль. Можно использовать любое приложение Authenticator, которое поддерживает маркеры TOTP RFC 6238. Microsoft Authenticator не работает.

2) **Проверьте настройки телефона:** В настройках телефона **AAPS** перейдите к приложениям > AAPS > Разрешения  > SMS  > Разрешить SMS

![изображение](images/remote-control-08.png)

3) **Синхронизация дат и времени:** В телефоне с **AAPS** и телефоне опекуна, проверьте синхронизацию даты и времени. Как именно вы это делаете, зависит от конкретных моделей телефонов, возможно придется попробовать различные настройки.

Пример (для смартфона Samsung S23): Настройки – общее управление дата и время - автоматическая дата и время

Некоторые опции могут быть недоступны (затенены) из-за настроек семейной учетной записи ребенка. Эта настройка даты и времени называется «автоматически» на iPhone опекуна/родителя. Если вы не уверены, синхронизированы ли телефоны, не волнуйтесь, это можно настроить в дальнейшем.

4) **Настройки AAPS:**

#### i) После проверки настроек телефона, в самом приложении **AAPS**, через левое верхнее меню перейдите в Конфигуратор:

![изображение](images/remote-control-09.png)

#### ii) Включите «SMS-сообщение», установив флажок, затем нажмите «шестеренку» и получите доступ к экрану настройки SMS-сообщения:

![изображение](images/remote-control-10.png)

_Примечание. В качестве альтернативного пути к Конфигуратору можно также использовать новую вкладку «SMS Communicator» в верхней части окна AAPS, затем щелкните правой кнопкой мыши по контекстному меню справа для этой страницы, чтобы перейти к настройкам SMS коммуникатора._

#### iii) На экране настроек включите «разрешить удаленные команды с помощью SMS»:

![изображение](images/remote-control-11.png)

#### iv) Enter the caregiver phone number(s). Include the country code and exclude the first “0” of the phone number, as shown in these examples:

Номер телефона великобритании: +447976304596

Номер телефона сша: +11234567890

Номер телефона франции: +33612344567

_etc._

Обратите внимание, что «+» перед номером может быть обязательным или не потребуется в зависимости от вашего местоположения. Для определения этого отправьте тестовое сообщение, которое будет отображать полученный формат на вкладке SMS Communicator.

Если у вас более одного номера телефона, разделите их точкой с запятой БЕЗ пробела между цифрами (это критично!). Select “OK”:


![изображение](images/remote-control-12.png)

#### v) Выберите PIN-код, который вы (и другие опекуны) будут использовать в конце кода аутентификатора при отправке SMS-команды.

Требования к PIN-коду:

•от 3 до 6 цифр

•не одинаковые цифры (_напр._ 1111 или 1224)

•не последовательные цифры (_напр._ 1234)

![изображение](images/remote-control-13.png)

#### vi) На экране настроек выберите «Настройка Аутентификации»

● Следуйте пошаговым инструкциям на экране.

● Откройте установленное приложение-аутентификатор на телефоне _опекуна_ создайте новое соединение и

●   Use the caregiver phone to scan the QR code provided by **AAPS**, when prompted.

● Проверьте одноразовый код доступа от аутентификатора на телефоне опекуна, за которым следует ваш PIN:

Пример:

Маркер из приложения идентификации-457051

Ваш обязательный PIN-код 2401

Код для проверки: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. Процесс завершен, нет кнопки "OK", которую нужно нажать после ввода кода:


![изображение](images/remote-control-14.png)

Теперь все готово для работы с помощью SMS-команд.

### First steps using SMS commands

1) Чтобы проверить правильность настройки, отправьте «bg» в качестве SMS-сообщения с телефона опекуна на телефон AAPS. Вы должны получить ответ, похожий на этот:

![изображение](images/remote-control-15.png)

2)  Now try an SMS command that requires the authenticator. To do this, send a text from the caregiver’s phone with the required command to the**AAPS** phone (_e.g._ “target hypo”). Телефон опекуна получит смс с предложением ввести пароль аутентификации **с шестизначными цифрами** из приложения-аутентификатора, с последующим секретным **PIN-кодом** известным только родителям/опекунам (строка из десяти цифр в общей сложности, при условии, что ваш PIN-код состоит из 4х цифр).

Ниже показан пример с командой SMS «target hypo», чтобы установить временную цель гипо:

● В этом примере ваш PIN-код 1289

Маркер из приложения идентификации-274127

● При появлении запроса отправьте текст 2741271289

Команды отправляются на английском языке. Ответ на локальном языке. Когда будете отправлть команду в первый раз, держите оба телефона при себе, чтобы убедиться, что все работает:

![изображение](images/remote-control-16.png)

Телефон опекуна получит SMS от **AAPS** в подтверждение успешного выполнения удаленной команды SMS. Существует несколько возможных причин, по которым команда не проходит:

● Настройка SMS-команд не завершена/не корректна

● Отправлена команда в некорректном формате (например, “disconnect pump 45” вместо “pump disconnect 45”)

● Использован неправильный или просроченный код аутентификации (обычно лучше подождать несколько секунд чтобы получить свежий код, если истекает срок действующего)

● Код подтверждения+PIN-код в порядке, но возникла задержка в отправке/прибытии SMS, что заставило AAPS вычислить истекший код аутентификации

●   The AAPS phone is out of range/contact with the pump

● Система уже занята вводом болюса

Если ваша команда успешна, вы получите ответ-подтверждение. Если возникла проблема, вы получите сообщение об ошибке.

Распространенные ошибки приведены в примерах ниже:

![изображение](images/remote-control-17.png)

### Дополнительные примечания о безопасности в SMS-командах

Минимальная задержка между командами на болюс по умолчанию составляет 15 минут. Из соображений безопасности следует добавить хотя бы два авторизованных номера телефона для уменьшения этого значения. Если вы дистанционно пытаетесь повторно ввестиь болюс в течение 15 минут после предыдущего, вы получите ответ “Дистанционный болюс невозможен. Повторите позже”

Если вы хотите прекратить возможность отправлять SMS команды с телефона опекуна, используйте экстренную кнопку “RESET AUTHENTICATORS” в AAPS (см. настройки выше, ссылка) или отправьте SMS-команду “SMS stop”. Сбросив аутентификаторы, вы делаете ВСЕ телефоны опекунов недействительными. Вам придется их снова настроить.

### Передача SMS-команд о болюсах на еду

Дистанционное введение болюсов _может быть сделано только_ с помощью **SMS команд**, оно не может осуществляться через NightScout или AAPSClient. Однако углеводы могут быть внесены любым из трех методов. В одном SMS-сообщении невозможно отправить углеводы и инсулин. Эти команды должны отправляться отдельно следующим образом:

1) Отправьте команду на болюс (_например_"bolus2",которая инициирует введение 2 единиц) при помощи SMS, что эквивалентно нажатию на иконку "шприца" в **AAPS**. 2) Отправьте SMS об углеводах (_напр._ “carbs 20” внесет 20 г углеводов). Это эквивалентно использованию иконки “углеводы” в **AAPS**.

**Порядок отправки этих команд важен.**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can use a combination of Nightscout or AAPSClient with SMS commands. Carbs can be announced through Nightscout without any authentication (see instructions sub section below) , and are therefore quicker than SMS commands.

### SMS commands troubleshooting and FAQ

#### Q: What _can’t_ we do with SMS commands?

1)  **You cannot set a _temporary_ profile switch** (so for example, setting “profile exercise“ for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profiles switches can instead be set through Nightscout or AAPSClient.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the AAPS phone. If the high temporary target of 7.0 is started by the automation and you cancel it (on the AAPS phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min under the Actions Tab or by pressing on the target tab. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use AAPSClient or Nightscout to do this.

#### Q: What happens if I change my mind about a command I have just sent?

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. AAPS will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

If you don’t get a response to an SMS command it could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The AAPS phone does not have good bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the AAPS phone). You cannot stop a command once it has been authenticated. Many commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate the effects. For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

#### Q. Why am I getting multiple SMS texts of the same message?

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. Например, с xDrip+. If so, please ensure that xDrip+ (or any other app) does not upload treatments to NightScout.

#### Q. I’ve just set up SMS commands and I am now getting far too many text messages. Can I reduce the frequency, or make them stop?

Using SMS commands may generate a lot of automated messages from the AAPS phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your AAPS phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include Whatsapp, Lime, Telegram, and Facebook Messenger.

#### Q. Why are SMS commands not working on my Samsung phone?

There was a report of SMS commands stopping after an update on a Samsung Galaxy S10 phone. This was solved by disabling ‘send as chat message’.


![изображение](images/remote-control-18.png)

#### Q. How can I fix issues with the Android Messages App?

If you are having issues sending or receiving SMS commands with the Android Messages app, disable end-to-end encryption on both caregiver and dependent’s phones:

●   Open the specific SMS conversation in Messages

●   Select the options ellipsis in the top right corner

●   select “Details”

●   Activate “Only send SMS and MMS messages”

(aapsclient)=
## 2) AAPSClient

_Note that **NSClient** has been replaced by **AAPSClient** for AAPS version 3.2 and higher, check the version release notes for more information._

For versions of AAPS which are older than AAPS 3.2, if you have a caregiver/parent Android phone you can directly download and install the [**AAPSClient**](https://github.com/nightscout/AndroidAPS/releases/) app. **AAPSClient** looks very similar in appearance to **AAPS** itself, offering the caregiver tabs that will remotely action commands in **AAPS**:

![изображение](images/remote-control-19.png)

There are 2 versions of the app you can [download](https://github.com/nightscout/AndroidAPS/releases/), **AAPSClient** & **AAPSClient2**. The only difference between the two versions is the app name. This allows you to install the **AAPSClient** app twice on the same phone, to follow two different people or Nightscout accounts at the same time.

![изображение](images/remote-control-20.png)

To download AAPSClient, click on app-AAPSClient-release-3.1.0.3.apk

Then go to  _downloads_ on your computer. On Windows, -downloads_ will show the right hand ribbon:

![изображение](images/remote-control-21.png)

Once downloaded, click _show in folder_

![изображение](images/remote-control-22.png)

The apk can now be either:

Transferred by a USB cable onto the follower phone; or Dragged into G drive folder, and then added onto the follower phone by clicking on app-AAPSClient-release-3.1.0.3.apk

### Features of AAPSClient include:

![Sara's AAPSClient table](images/remote-control-23.png)

**AAPSClient** allows the caregiver to make many of the adjustments that are allowed directly in **AAPS** (excluding insulin boluses) remotely, via the mobile or internet network. The main benefits of **AAPSClient** are the speed and ease with which caregivers/parents can use it to remotely control **APPS**. AAPSClient _can_ be much faster than entering SMS Commands, if delivering a command which would require authentication. Commands entered on **AAPSClient** are uploaded onto Nightscout.

Remote control through **AAPSClient** is only recommended if your synchronization is working well (_i.e._ you don’t see unwanted data changes like self-modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

### NS Client with smartwatch options

A smartwatch can be a very useful tool for helping to manage **AAPS** with kids. A couple of different configurations are possible. If **AAPSClient** is installed on the parents phone, the [**AAPSClient WearOS** app](https://github.com/nightscout/AndroidAPS/releases/) can be downloaded and installed on a compatible smartwatch which is connected to the parent's phone. На них будет отображаться текущая ГК, статус замкнутого цикла, возможность вписать углеводы, временные цели и изменения профиля. Возможности ввести болюс с приложения на WearOS не будет. You can read more about Smartwatches [here](smartwatches).

(nightscout)=
## 3) Nightscout

As well as Nightscout being a server in “the Cloud”, there is also a dedicated **Nightscout** app which can be downloaded directly from the App Store on your iPhone. If you have an Android follower phone, there is not a dedicated Nightscout app and it is better to use [**AAPSClient**](AAPSClient), or, if you only want to follow, and not send treatments you can download and install the [Nightwatch](link) app from the Playstore.

Once you have installed the **Nightscout** app on your iPhone, open the app and follow the set-up prompts, entering your Nightscout address (see below, left). The form of this may vary depending on how your Nightscout is hosted. (_e.g._ http://youraddresshere.herokuapp.com). Then enter your Nightscout API secret (see below, right). If not prompted for your API password, then you need to enter this by clicking on the padlock at the top of the app:

![изображение](images/remote-control-24.png)

More info on setup is available directly from [Nightscout](https://nightscout.github.io/nightscout/discover/)

When you first log in, you will have a very simple display (below, left). Customise the display options, by selecting the “hamburger” in the top right and scrolling down:

![изображение](images/remote-control-25.png)

Scroll down through to “Settings”. You may wish to change the “scale” to “linear” as the default for the BG display is logarithmic, and under “render basal” select “default” so that the pump basal shows up. Continue to scroll down until you get to “show plugins”. You need to make sure “careportal” is checked, and can also select various other metrics (most useful are: IOB, care portal, pump, cannula age, insulin age, basal profile and OpenAPS).

![изображение](images/remote-control-26.png)

![изображение](images/remote-control-27.png)

Importantly, you now need to click “save” at the bottom for these changes to take effect.

After pressing “save” the app will return to your main Nightscout screen which will look a little like this:

![изображение](images/remote-control-28.png)

Looking in more detail at the top left menu of the Nightscout app:

![nightscout top bar](images/remote-control-29.png)

There is a huge amount of information on the status of the **AAPS** system in the grey tabs (and even more information is revealed if you tap the tab) on this screen:

![изображение](images/remote-control-30.png)

![изображение](images/remote-control-31.png)

### Sending treatments through the Nightscout app to AAPS

To set-up sending treatments from the **Nightscout** app to **AAPS**, on the main AAPS phone, go into the **AAPSClient** tab in the **AAPS** app. Open the right-hand dot menu, and open AAPSClientpreferences – synchronisation and select the relevant options in this menu. Set it to receive the different commands (temporary targets, etc) and also to synchronise profiles. If things don’t seem to be synchronised, go back to the AAPSClient tab and select “full synchronisation” and wait a few minutes.

Nightscout on your iPhone has all the same functions as Nightscout on your PC. It allows you to send many commands to **AAPS**, but it does not allow you to send insulin boluses.

### Cancelling negative insulin to avoid repeat hypos

Although you cannot actually bolus insulin, you can however “announce” insulin through Nightscout as a “correction bolus”, although it is not delivered. Because AAPS now takes that fake insulin bolus into account, announcing insulin actually works to make AAPS _less aggressive_, and can be useful for cancelling negative insulin and preventing lows in the event that your profile has been too strong (for example due to prior exercise). You will want to check this for yourself in the presence of the **AAPS** phone, in case your **Nightscout** setup differs.

![24-10-23, cancel negative insulin NS](./images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


Some of the most useful **Nightscout** commands are described in the table below.

#### Nightscout command table

![изображение](images/remote-control-33.png)

Read more about **Nightscout** options [here](https://nightscout.github.io/)

### Tips for getting the most out of the Nightscout app

1). If you get “stuck” on a page and want to be able to see the main screen again, just click “refresh” (bottom middle) and this will take you back to the **Nightscout** homepage with the BG graph.

To see the current profile which is running on the phone, press the various icons on the screen above the graph. More info (current carb ratio, sensitivity and timezone etc.) can be seen by pressing “basal” and “OpenAPS” gives info about the profile and current target etc. Both the phone battery% and the pump battery % can also be monitored. BWP gives information on what the algorithm thinks will happen in the future, given the IOB and COB.

#### Other icons in the menu: what does the pencil (edit) mean?

You can (technically) use the edit pencil to move or delete bolus or correction treatments from the last 48h.

More about this [here](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Although this could potentially be useful for deleting announced (but not bolused for) carbs, in practice it doesn’t currently work well with **AAPS** and we recommend making changes like this via the **AAPS** app directly.

(smartwatches)=
## 4) Smartwatches

Smartwatches are becoming increasingly used with **AAPS** _both_ for adults with diabetes and carers/parents of children with diabetes.

### General advantages of using smartwatches with **AAPS**


Smartwatches - depending on the model - can be used in many different ways with **AAPS**. They can be used to fully or partly control **AAPS**, or simply to remotely check glucose levels, insulin-on-board, and other parameters.

Integrating a smartwatch with **AAPS** can be useful in many situations, including driving a car or (motor) bike and during exercise. Some people feel that looking at a watch (in a meeting, party, dinner table etc.) is more discreet than looking on a phone. From a security perspective, a smartwatch can also be beneficial while on the move, enabling user to have their **AAPS** phone stored out of sight (like inside a bag), but with the aid of the smartwatch for remote control use.

### Specific advantages for parents/carers using **AAPS**

For a child - if their **AAPS**  phone is nearby - a caregiver can use a smartwatch to monitor or make modifications without needing to use the **AAPS**  phone. This can be useful, for example, if the **AAPS** phone is hidden away in a pump belt.

A smartwatch can be used either _in addition_ to, or as an _alternative_ to the PHONE-based options for [remote control](remote-control.md) or [following only](following-only.md).

Additionally, unlike parent/carer follower phones (which rely on the mobile network or wifi connection), bluetooth connected smartwatches can be useful in remote locations, like a cave, in a boat, or half-way up a mountain. If both devices (**AAPS** phone and smartwatch) are on the same wifi network, they can also use wifi.

### Different types of Smartwatch-AAPS interactions

Many of the possible smartwatch options available to **AAPS** users are detailed at [Nightscout on your watch](https://nightscout.github.io/nightscout/wearable/#), so you are strongly advised to read those pages first to get a good idea of all the possibilities.

There are currently five main ways in which smartwatches are used in conjunction with **AAPS**. These are shown in the table below: 



![29-10-23, updated AAPSClient watchoption table](./images/bbbe0e84-1a8c-4163-8a0b-dcf91144af14.png)




Please note this table was prepared in 2023, it is not exhaustive, and additional options are being added all the time.

### Before you buy a smartwatch…

The exact model of smartwatch you buy depends on the desired function(s). Существует две таблицы, в которых приводятся модели совместимых: [смартфонов](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) и [смартфонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

There are a huge number of options for smartwatch setups for use with **AAPS**, and this is a quickly moving field as new watches are released. Popular watch brands include Samsung Galaxy, Garmin, Fossil, Mi band and Fitbit. The different options summarised in the Table above are explained in more detail below, to help you decide which smartwatch is right for your situation.

If you are integrating a smartwatch with **AAPS** on a phone with the intention to remotely interact with **AAPS**, you also need to consider if the two devices are compatible with each other, particularly if you have an older, or an unusual phone. We intend to add a specific page to one of the [spreadsheets](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) concerning watch-phone compatibility.

In general, if you only want to follow glucose numbers and not interact with **AAPS**, there are a wider range of affordable and simpler watches you can use.

#### For Smartwatch Options 1 - 3: What _is_ Wear OS?

The first three smartwatch options require the smartwatch to have **Wear OS** installed.

**Wear OS** is the operating system which runs on some modern Android smartwatches. In [2018](https://en.wikipedia.org/wiki/Wear_OS), Google rebranded _Android Wear 1.x to Wear OS_ from version 2.x. So, if a device is labelled “_Android Wear_” rather than **Wear OS** it may indicate an older version. If the description of the smartwatch indicates only _compatibility_ with Android and iOS - it does not mean it is running Wear OS. It may be some other sort of Vendor specific operating system which is not compatible with **AAPS**. To support installation and use of any version of **AAPS** or **AAPSClient**, a smartwatch will need to be running **Wear OS**, and ideally be Android 10 or newer. As a guide, as of October 2023, the latest release of **Wear OS** is version 4.0 (based on Android 13).

If you install **AAPS** wear.apk on a **Wear OS** watch, there are a range of different custom **AAPS** watchfaces which  can be  selected. Alternatively, you can use a standard smartphone watchface, with your **AAPS** information included in small tiles known as “complications” on the face. A complication is any feature that is displayed on a watch face in addition to the time. Features like complications require Wear OS version 2.0 or newer to work.


#### What could my smartwatch look like with remote control of AAPS?

Examples of complications (where AAPS is embedded in an existing watchface) are shown here:

![изображение](./images/04d591ca-9f2e-4479-ac9e-ab689815745d.png)

These are the currently available AAPS-dedicated watchfaces:

![изображение](./images/67fd75f3-721c-438d-be01-1a8e03532290.png)

More information about the possible smartwatch faces and their functions can be found in [Smartwatches](Hardware/Smartwatch.md)

#### Watchfaces for Wear OS

Further details about the watchfaces and configurations for complications, including how to make your own, can be found [here](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html)

### Option 1) Standalone Watch running **AAPS**

It sounds like an attractive option, right? However, at present, only a few enthusiasts are experimenting with **AAPS**  on a stand-alone watch. There are a limited number of smartwatches with a reasonable interface which also which work well with standalone use of **AAPS** and your CGM app. Popular models include the LEMFO LEM 14, 15 and 16. You will need to load the watch with the **AAPS** "full" apk (the apk which is usually installed on a smartphone) rather than the **AAPS** "wear" apk.

While there is no clear specification which helps you to know if a watch will work well for standalone **AAPS** use, the following parameters will help:

1)  Android 10 or newer. 2)  Being able to take the watchface off “square” mode to make text larger and easier to read. 3)  Very good battery life. 4)  Good bluetooth range.

Most of the frustrations of standalone **AAPS** watches come from interacting with a tiny screen, and the fact that the current AAPS full app interface has not been designed for a watch. You may prefer to use a stylus to edit **AAPS**  settings on the watch, due to the restricted screen size, and some AAPS buttons may not be visible on the watch screen.

Additional challenges are that it is hard to get sufficient battery life, and watches with sufficient battery are often bulky and thick. Users report fighting with the OS and power-saving settings, difficulty in starting sensors on the watch, poor bluetooth range (for maintaining connection with both the sensor and pump) and questionable water resistance. Examples are shown in the photos below (photo credit: Janvier Doyon).

![изображение](./images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

![изображение](./images/5d2feecc-3f10-4767-b143-1a72da2b9bd4.png)

If you are interested in setting up a standalone watch, read the posts and comments on the **AAPS**  Facebook group (good search options are “standalone” and “Lemfo”) and Discord for more information.

### Option 2) **AAPS** on watch, for remote control of **AAPS** on a phone

Similarly to using a follower phone with either AAPSClient, Nightscout or SMS commands (link to sections) a smartwatch can be used to remotely control **AAPS** and provide full profile data. A key difference to using a follower phone is that the smartwatch to **AAPS** phone link is via bluetooth and does not require an authenticator code. As a side-note, users have reported that if both smartwatch and phone linked by bluetooth are also on the same wifi network, the watch may also interact with the smartphone over the wifi, giving a longer range of communication.

A remote control smartwatch is therefore often useful in any situation where:

a)  **AAPSClient**/Nightscout/**SMS** commands cannot work; or

b)  the user wishes to avoid the need for authenticator code (as required for the follower phone with inputting data, selecting TT or entering carbs).

A smartwatch needs to have **Android wear** software (ideally 10 or higher) to be able to control **AAPS**. Please check the technical specifications of the watch, and check the [spreadsheet of compatible watches](link). Search, or ask in the **AAPS**  Facebook/Discord groups if unsure.

Specific How-to guides for setting up **AAPS** on the [Samsung Galaxy Watch 4 (40mm)](link) is given below. The [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) watch is also a popular choice. If you have experience of setting up a different smartwatch which you think would be useful to others, please add it into these pages [edit the documentation](https://androidaps.readthedocs.io/en/latest/make-a-PR.html) to share your findings with the wider AAPS community.

#### The AAPS Wear apk

The Wear OS App of **AAPS**  (“Wear OS apk”) required for the smartwatch has been separated from the "full" **AAPS** build for the Android phone. Therefore you have to generate a second installation file, or apk, to install **AAPS** wear onto the watch (which is done by side-loading it from the phone). It is strongly recommended that the **AAPS** Wear apk file is built immediately after first building the full **AAPS** apk for the phone. Not only is this very quick to do if you are [building **AAPS** for the first time](link to building **AAPS** for the first time), but it will avoid any potential compatibility issues when you try to set up the watch-phone communication. The **AAPS** Wear apk on the watch is unlikely to be compatible with the **AAPS** phone apk if they have been built in different versions of Android Studio, or if months have past since the initial **AAPS** build.

If you are already using **AAPS** on a phone and you did not build both the phone and watch (wear) **AAPS** apks at the same time, to ensure success it is therefore best to do a fresh build of both apk files at the same time. If you have already installed Android studio, then you may wish to uninstall and then reinstall Android studio as outlined below, and build the AAPS phone and watch apks at the same time, using the same **keystore file**.

#### How to uninstall Android Studio

Make sure your keystore file is safely stored elsewhere on your computer, outside of the Android Studio folders.

There are several steps required to completely remove Android Studio from a computer. This is a [good guide](https://www.geeksforgeeks.org/how-to-completely-uninstall-android-studio-on-windows/) if you are using a Windows machine. In the final step of these instructions, you also need to manually remove the folder “StudioProjects”.

Now reinstall the latest version of Android Studio.

#### Building the **AAPS** Wear apk

As a summary, the build process for the Wear apk is very similar to that for the "full" phone apk, the difference is that in Android Studio you need to select “**AndroidAPS.wear**”  in the drop-down menu, and as build variant choose “**fullRelease**”. This will generate the **AAPS** Wear apk file.  If you prefer, you can build **“pumpcontrolRelease”** instead, from the drop-down menu, which will allow you to just remotely control the pump but without looping.

The following guide assumes you have reinstalled the latest version of Android studio (scenario below has used Giraffe 2022.3.1)).

![изображение](./images/e8e3b7f3-f82e-425a-968c-cc196434a5f8.png)

To get back here:

![изображение](./images/37f4589c-6097-49d4-b0b9-087664914198.png)

continue to follow the instructions.

Follow the prompts through the different screens until you are given an option with a dropdown menu offering to build the AAPS full apk. At this point, select  “Wear” from the dropdown instead of “AndroidAPS.apk” because you are building the apk for the smartwatch.


Next Step go to "Build" in the ribbon

![изображение](./images/b2cccc84-85b6-4ee1-800b-7c6dcb9dd857.png)


Go to Build > Generate Signed Bundle / APK


![изображение](./images/f488fe36-8cb9-4d81-9d94-5f742a1aaaee.png)

Select > Android APK Bundle:

![изображение](./images/e8f4b996-c46e-4a31-831e-fdcc4d0d677c.png)


Select in Module: AndroidAPSwear

![изображение](./images/cceaa832-70e6-4ad5-95ec-a82e2a6add1e.png)

Enter keystore file at the default location. Your keystore path will depend where you have stored your Keystore. For this scenario the keystore path was located: C:\Program Files\Android\Android Studio\jbr\bin


The next screen should show this:

![изображение](./images/87ce7943-256e-449e-8439-8f9fd5bef05e.png)


And select “fullRelease”.

Be patient - the **AAPS** Wear apk should be built in around 10-20 minutes, depending on the speed of your internet connection.

Troubleshooting -  if you get an error about "uncommitted changes", see the [troubleshooting guide](troubleshooting_androidstudio.md)

In the process of building the 3.2 full AAPS app (and in fact any signed app), Android Studio generates a .json file. This then causes errors with "uncommitted changes" when you try to build the next signed app, like the **AAPS** wear app. The quickest way to resolve this is to navigate to the folder where the full AAPS app has been built, your folder is probably something like:

C:\Users\Your Name\StudioProjects\AndroidAPS\app\aapsclient\release.

Either delete, or move the unneeded .json file out of the folder. Then try to build the **AAPS** wear app again. If that doesn't work, the more detailed [troubleshooting guide](troubleshooting_androidstudio.md)  will help you to identify the specific file causing the issue, which could also be your keystore file.

#### How to set up a Samsung Galaxy 4 smartwatch with **AAPS**

This section assumes you are totally new to Smartwatches, and gives you basic orientation of a popular watch, the **Galaxy Watch 4**, followed by a step-by-step guide to setup **AAPS** on the watch.

_This guide assumes the Samsung Galaxy watch you are setting up is running Wear OS version 3 or lower._ If you are setting up a watch running Wear OS 4/OneUI 5 or later, you will need to use a new ADB pairing process, this is explained in the Samsung software on your phone and will be updated here in due course. Here are basic setup guides for the [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) and [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

##### Basic smartwatch familiarity

After basic setup of your watch according to the video above, go to the playstore on the phone and download the following apps: "Galaxy Wearable" “Samsung” and either “Easy Fire tools” or "Wear Installer 2".

There are plenty of 3rd party YouTube videos which will help you with getting familiar with your new smartwatch, for example:

https://www.youtube.com/watch?v=tSVkqWNmO2c

The app “Galaxy Wearable” also has an instruction manual section in it. Open galaxy wearable on the phone, search for the watch, attempt to pair the watch with the phone. Depending on your version, this may prompt you to install a further 3rd app “galaxy watch 4 plugin” from the playstore (takes a while to download). Install this on the phone, and then attempt to pair the watch and phone again in the wearable app. Go through a series of menus and tick various preferences.

##### Setting up a Samsung account

You need to make sure that the email account you use to set up the Samsung account has a date-of-birth such that the user is age 13+, as otherwise the Samsung permissions are really difficult to approve. If you have given your child under 13 a Gmail account and are using that email address, you cannot simply change it to an adult account. One way around this is to modify the current date-of-birth to make the current age 12 years and 363 days old. The following day, the account will be converted to an adult account, and you can progress with the setup of the Samsung account.

##### Transferring the **AAPS** Wear app onto your **AAPS** phone

Loading the Wear.apk from Android Studio to your phone can be done either by:

a)  using a USB cable to put the **AAPS** wear apk file onto the phone, and then “side-load” it to the watch. Transfer Wear.apk to the phone via USB into the downloads folder; or

b)  cut and paste Wear.apk from Android Studio onto your Gdrive.


You can use either Wear Installer 2 or Easy Fire tools to side-load AAPS onto the watch. Here we recommend Wear Installer 2, because the instructions and process in the video are so clear and well-explained.

##### Using Wear Installer 2 to side-load **AAPS** Wear from the phone onto the watch

 ![изображение](./images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Wear Installer 2, developed by [Malcolm Bryant](https://www.youtube.com/@Freepoc) can be downloaded from Google Play onto your phone and can be used to side-load the AAPS wear app onto the watch. The app includes a handy ‘how to sideload’ [video.](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)

This provides all the necessary detail (best to open the video on a separate device so you can watch it whilst setting up the phone).

As mentioned in the video, once complete, switch ADB debugging off on the watch, to avoid draining the smartwatch battery.

Alternatively, you can:

:::{admonition} Use Easy Fire tools to side-load the **AAPS** wear on the watch
:class: dropdown

1)   Download _Easy Fire Tools_ from playstore onto phone

![изображение](./images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2)  Make yourself a developer in the watch (once set up and connected to phone):

Go to settings >about watch (bottom option) >- software info > software version.

Rapidly tap on “ software version” until a notification appears that the watch is now in "developer mode". Return to the top of settings menu, scroll to the bottom and see “developer options” below “about watch”.

In “developer options”, turn on “ADB debugging” and “wireless debugging”. The latter option then reveals the IP address of the watch, the final two digits of which changes each time the watch is paired with a new phone. It will be something like: **167.177.0.20.** 5555 (ignore the last 4 digits). Note that the last two digits (here, “20”) of this address will change every time you change to a new phone handset for AAPS.

![24-10-23, watch ADB debug pic](./images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

STEP 3)     Enter IP address _e.g._ **167.177.0.20** into Easy Fire tools on the phone (go into the left hamburger, settings and enter the IP address). Then click the plug socket icon on the top right.

![изображение](./images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![изображение](./images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


STEP 4) Follow the instructions [here](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) to side-load (i.e. transfer)  Wear.apk onto the smartwatch using Easy Fire tools

Click side "plug-in" socket in the app, in order to upload Wear OS.apk onto the smartwatch:

![изображение](./images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 Next step > accept the authorisation request on the smartwatch


![изображение](./images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

:::


##### Setting up the connection between the watch and the phone from **AAPS**

The final step is to configure **AAPS** on the phone to interact with **AAPS** Wear” on the watch. To do this, enable the Wear plugin in Config Builder:

●   Go to the **AAPS** app on the phone

●   Select > Config Builder in the left-hand Hamburger tab

●   Tick for Wear selection under General

![изображение](./images/ae6d75a1-1829-4d2e-b0dc-153e31e4a466)


To change to a different **AAPS**  watchface, press on the home screen of the watch and it will come to “customise”. Then swipe right until you get to all the **AAPS**  faces.

If the **AAPS** Wear.apk has been successfully side-loaded onto the smartwatch, it will look like this:


![24-10-23, successful galaxy watch photo](./images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

#### Troubleshooting the **AAPS** watch- **AAPS** phone communication
1.  If EasyFire tools does not connect or if you are receiving ‘authorisation failed’ > check IP address has been correctly entered.
2.  Check that the smartwatch is connected to the internet (and not just connected to the phone via Bluetooth).
3.  Check that the **AAPS** Phone and smartwatch are paired or linked in Samsung app.
4.  It may also help to do a hard restart of Phone and smartwatch (meaning turning phone on and off)
5.  Assuming you have managed to download the Wear.apk onto your phone but you are not receiving any BG data, _check_ that you have side-loaded the correct **AAPS** apk version onto the watch. If your AAPS wear.apk version is listed as any of the following: a) “wear-AAPSClient-release’; b) ‘wear-full-release.aab’; or c) the word ‘debug’ appears in the title, you have not selected the correct Wear OS apk version during the build.
6.  Check that your router is not isolating the devices from one another.

More troubleshooting tips can be found [here](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

#### Troubleshooting Sony smartwatch setup

Although it was discontinued a few years ago, if you are using a Sony Smartwatch SW 3 please see here for a troubleshooting guide: [Troubleshooting Sony Smartwatch SW 3](https://androidaps.readthedocs.io/en/latest/Usage/SonySW3.html)


##### Controlling AAPS from the Wear Watch

The following functions can be triggered from the smartwatch:

●   set a temporary target

●   use the bolus calculator (calculation variables can be defined in settings on the phone)

●   administer eCarbs

●   administer a bolus (insulin + carbs)

●   watch settings

●   status

●   check pump status

●   check loop status

●   check and change profile, CPP (Circadian Percentage Profile = time shift + percentage)

●   show TDD (Total daily dose = bolus + basal per day)

#### Communication from caregivers to the watch using other apps (like Whatsapp)

It is possible to add additional apps to the watch, like Whatsapp, for messaging (for example) between caregivers and kids. It is important only to have ONE Google account associated with the phone, or the watch will not bring this data across. You need to be 13 or older to have a Samsung account, and this needs to be set up in the same email address which is used on the Android phone.

A video explaining getting Whatsapp setup for messaging on the Galaxy 4 watch (you can’t get full functionality of Whatsapp) is shown [here](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Making adjustments in both the **Galaxy wearable** app on the **AAPS** phone and the watch makes it possible for Whatsapp messages to announce with a slight vibration, and also for the Whatsapp message to display over the existing watchface.

### Option 3) AAPSClient on a watch for remote control of **AAPS** on a phone

The software for the watch, **AAPSClient** Wear apk, can be downloaded directly from [Github](https://github.com/nightscout/AndroidAPS/releases/).

To download the software, click on the required app (in this screenshot, either **wear-aapsclient-release_3.2.0.1** or **wear-aapsclient2-release_3.2.0.1** would work, there are two versions in case you need a copy for a second caregiver watch):

![изображение](./images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Then "save as" and save the file to a convenient location on your computer:


![изображение](./images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






The **AAPSClient** wear apk can be transferred to your phone and side-loaded onto the watch in the same way as the **AAPS** Wear app, as detailed in [Transferring the Wear app onto your AAPS phone](remote-control.md#transferring-the-wear-app-onto-your-aaps-phone)

### Option 4) Limited Nightscout (and other options) on a watch - Fitbit watches



![изображение](./images/98620770-2fb3-47af-a13e-28af7db69096)



**"Sentinel"** is a clockface developed by [Ryan Chen](http://ryanwchen.com/sentinel.html) for his family and shared for free for the Fitbit smart watches: Sense1/2, Versa 2/3/4. it is not compatible with the FitBit Luxe since this is only a fitness tracker. Sentinel can be downloaded from the [FitBit mobile app](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c).

It allows the monitoring of 1, 2, or 3 individual's blood glucose numbers using either Dexcom Share, Nightscout, or a combination of the two as data sources.

You can also use xDrip+ or SpikeApp if used with local web server mode. Users can set custom alarms and submit events using Nightscout's careportal functionality directly from the watch to help track insulin-on-board (IOB), carbs-on-board (COB), enter meal information (carb count and bolus amount), and BG check values.

All will appear on the Nightscout timeline-graph, and as updated values in the IOB and COB fields. Community support can be found at the dedicated [Facebook group, Sentinel.](https://www.facebook.com/groups/3185325128159614)

There are additional options for FitBit watches which appear to be for monitoring only. This includes [Glance](https://glancewatchface.com/). These additional options are described in the [Nightscout webpages.](https://nightscout.github.io/nightscout/wearable/#fitbit)

### Option 5) **Monitoring of AAPS** (full profile data, or glucose-only) where **AAPS** is running on a phone.

These options are described in more detail in the ["following only"](following-only.md) section of the documentation.

In general, there are a wide range of affordable smartwatches which can provide glucose display only. If you are using Nightscout, then a good overview of all the options are described in the [Nightscout pages](https://nightscout.github.io/nightscout/wearable/#).






