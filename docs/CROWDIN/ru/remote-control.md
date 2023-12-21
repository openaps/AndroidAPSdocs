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
5.  Примеры организации устройств в школе для детей разных возрастов можно найти в разделен [“файлы”](https://www.facebook.com/groups/AndroidAPSUsers/files/) на странице **AAPS** в Facebook.
6.  Какие ваши действия на случай, когда удаленное управление не работает (_например_, возникли проблемы с интернетом или потерялся сигнал bluetooth)?  Всегда учитывайте, что может произойти с **AAPS**, если вы внезапно потеряете возможность отправить новую команду. **AAPS** перезапишет значения базы, ФЧИ и УК, указанные в помпе, значениями из текущего профиля. Если вы устанавливаете более агрессивный профиль - всегда делайте его временным (_т.е._ указывайте длительность действия профиля) на случай, если удаленное управление станет недоступным. Помпа вернется к стандартному профилю по истечении указанного времени.

(sms-команды)=
## SMS команды

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

![изображение](images/SMScommands/01_SMS_CommandTable_Loop.png)

![изображение](images/remote-control-05.png)

(аутентификатор-или нет.)=
### Нужна ли аутентификация?

Из приведенной таблицы видно, что некоторые команды SMS дают немедленный ответ, а другие требуют **аутентификации** по коду безопасности из дополнительного приложения и PIN-коду (см. подробнее ниже). Простой запрос, например «**bg**» (запрашивает обновление ГК) быстро вводится, не требует аутентификации и возвращает информацию о статусе **AAPS** - см. ниже:

![изображение](images/remote-control-06.png)

Команды, которым требуется больше безопасности, требуют ввести код, например:

![SMS-аутентифицирована](images/remote-control-07.png)

### Как настроить SMS-команды

Общий процесс выглядит так:

**1) Скачиваем аутентификатор (на телефон родителя/опекуна)**

**2) Проверяем настройки телефона (телефон с AAPS)**

**3) Синхронизируем дату и время (телефон родителя и телефон AAPS)**

**4) Настройки AAPS (телефон APPS)**

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

i) После проверки настроек телефона, в самом приложении **AAPS**, через левое верхнее меню перейдите в Конфигуратор:

![изображение](images/remote-control-09.png)

ii) Включите «SMS-коммуникатор», установив флажок, затем нажмите «шестеренку» и получите доступ к экрану настройки SMS-коммуникатора:

![изображение](images/remote-control-10.png)

_Примечание. В качестве альтернативного пути к Конфигуратору можно также использовать новую вкладку «SMS-коммуникатор» в верхней части окна AAPS, затем щелкните правой кнопкой мыши по контекстному меню справа для этой страницы, чтобы перейти к настройкам SMS коммуникатора._

iii) На экране настроек включите «разрешить удаленные команды с помощью SMS»:

![изображение](images/remote-control-11.png)

iv) Введите номер телефона опекуна/родителя. Включите код страны и исключите первый "0" номера телефона, как показано на примерах:

Номер телефона великобритании: +447976304596

Номер телефона сша: +11234567890

Номер телефона франции: +33612344567

_и т. д._

Обратите внимание, что «+» перед номером может быть обязательным или не потребуется в зависимости от вашего местоположения. Для определения этого отправьте тестовое сообщение, которое будет отображать полученный формат на вкладке SMS Communicator.

Если у вас более одного номера телефона, разделите их точкой с запятой БЕЗ пробела между цифрами (это критично!). Выберите "OK":


![изображение](images/remote-control-12.png)

v) Выберите PIN-код, который вы (и другие опекуны) будут использовать в конце кода аутентификатора при отправке SMS-команды.

Требования к PIN-коду:

•от 3 до 6 цифр

•не одинаковые цифры (_напр._ 1111 или 1224)

•не последовательные цифры (_напр._ 1234)

![изображение](images/remote-control-13.png)

vi) На экране настроек выберите «Настройка Аутентификации»

● Следуйте пошаговым инструкциям на экране.

● Откройте установленное приложение-аутентификатор на телефоне _опекуна_ создайте новое соединение и

● Телефоном опекуна сканируйте QR-код от **AAPS**, при подсказке.

● Проверьте одноразовый код доступа от аутентификатора на телефоне опекуна, за которым следует ваш PIN:

Пример:

Маркер из приложения идентификации-457051

Ваш обязательный PIN-код 2401

Код для проверки: 4570512401

Если запись правильна, красный текст «WRONG PIN» автоматически изменится на «OK». Процесс завершен, нет кнопки "OK", которую нужно нажать после ввода кода:


![изображение](images/remote-control-14.png)

Теперь все готово для работы с помощью SMS-команд.

### Первые шаги работы с помощью SMS команд

1) Чтобы проверить правильность настройки, отправьте «bg» в качестве SMS-сообщения с телефона опекуна на телефон AAPS. Вы должны получить ответ, похожий на этот:

![изображение](images/remote-control-15.png)

2) Теперь попробуйте команду SMS, которая требует аутентификатора. Для этого с телефона опекуна отправьте смс с нужной командой на телефон с **AAPS** (_напр._ "target hypo" (цель гипо)). The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by an additional secret **PIN** known only to caregivers/followers (a string of ten digits in total, assuming your PIN is only 4 digits).

This example is shown below, with the SMS command “target hypo” to set a hypo temp target:

●   In this example, your PIN is 1289

●   Code from your authenticator app is 274127

●   When prompted, text 2741271289

Commands must be sent in English. The response should be in your local language. When you try sending an SMS command for the first time, try it in the presence of the AAPS phone, to see how it works:

![изображение](images/remote-control-16.png)

The caregiver’s phone will receive a SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully. There are several possible reasons the command may not be successful:

●   SMS commands setup isn’t complete/correct

●   You sent a command which had an incorrect format (like “disconnect pump 45” instead of “pump disconnect 45”)

●   You used an incorrect, or expired authenticator code (it is usually good to wait a few seconds for a fresh code, if the current one is about to expire)

●   The code+PIN was OK, but there was a delay in the SMS leaving/arriving, which led AAPS to calculate that the authenticator code had expired

●   The AAPS phone is out of range/contact with the pump

●   The system is already busy delivering a bolus

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message.

Common errors are shown in the examples below:

![изображение](images/remote-control-17.png)

### Дополнительные примечания о безопасности в SMS-командах

The default minimum time delay between bolus commands is 15 minutes. For safety reasons, you have to add at least two authorised phone numbers to change this to a shorter time delay. If you try to remotely bolus again within 15 minutes of the previous bolus, you will receive the response “Remote bolus not available. Try again later”

If you want to remove the ability of a caregiver phone to send SMS commands, use the emergency button “RESET AUTHENTICATORS” in AAPS (see preferences screenshot above, link) or send the SMS command “SMS stop”. By resetting authenticators you make ALL the caregivers' phones invalid. You will need to set them up again.

### Передача SMS-команд о болюсах на еду

Remote bolusing of insulin can _only_ be done via **SMS Commands**, it cannot be actioned through NightScout or AAPSClient. Carbs however, can be announced through any of the three methods. It is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to using the “syringe” icon in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to using the “carbs” tab in **AAPS**.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can use a combination of Nightscout or AAPSClient with SMS commands. Carbs can be announced through Nightscout without any authentication (see instructions sub section below) , and are therefore quicker than SMS commands.

### Ответы на часто задаваемые вопросы по SMS-командам и устранение неполадок

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
## AAPSClient

_Note that **NSClient** has been replaced by **AAPSClient** for AAPS version 3.2 and higher, check the version release notes for more information._

For versions of AAPS which are older than AAPS 3.2, if you have a caregiver/parent Android phone you can directly download and install the [**AAPSClient**](https://github.com/nightscout/AndroidAPS/releases/) app. **AAPSClient** looks very similar in appearance to **AAPS** itself, offering the caregiver tabs that will remotely action commands in **AAPS**:

![изображение](images/remote-control-19.png)

There are 2 versions of the app you can [download](https://github.com/nightscout/AndroidAPS/releases/), **AAPSClient** & **AAPSClient2**. The only difference between the two versions is the app name. This allows you to install the **AAPSClient** app twice on the same phone, to follow two different people or Nightscout accounts at the same time. Для загрузки AAPSClient, нажмите на "app-AAPSClient-release" (это может быть более новая версия, чем на снимке экрана):

![изображение](images/SMScommands/02_AAPSClient_download.png)

Then go to  _downloads_ on your computer. On Windows, -downloads_ will show the right hand ribbon:

![изображение](images/SMScommands/03_AAPSClient_download_folder.png)

После загрузки нажмите _показать в папке_ для поиска файла.

Теперь приложение (apk) может быть либо:

Перенесено при помощи кабеля USB на телефон опекуна; или перетащено в папку Google диска, а затем добавлено на телефон опекуна после нажатия на app-AAPSClient-release-3. apk.

### Возможности AAPSClient включают:

![Таблица AAPSClient от Sara](images/remote-control-23.png)

**AAPSClient** позволяет родителю/опекуну выполнять действия, которые выполняются непосредственно в приложении **AAPS** (за исключением болюсов) дистанционно по мобильной или интернет-сети. Основными преимуществами **AAPSClient** являются скорость и легкость, с которой опекуны/родители могут использовать его для дистанционного управления **APPS**. AAPSClient _способен_ действовать быстрее SMS команд, особенно тех, которые требуют подтверждения подлинности. Команды, введенные в **AAPSClient** загружаются в Nightscout.

Дистанционное управление через приложение **AAPSClient** рекомендуется только в том случае, если хорошо работает синхронизация (_т. е._ вы не видите нежелательных изменений данных, таких как спонтанная модификация TT, TBR и т. д.), подробнее см. [примечания к выпуску версии 2.8.1.1](Releasenotes-important-hints-2-8-1-1).

### AAPSClient со смарт-часами

Смарт-часы - полезный инструмент в управлении **AAPS** у детей. Возможны несколько различных конфигураций. Если AAPSClient установлен на родительский телефон,, приложение [AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/) может быть установлено на смарт-часах, сопряженных с родительским телефоном. На них будет отображаться текущая ГК, статус замкнутого цикла, возможность вписать углеводы, временные цели и изменения профиля. Возможности ввести болюс с приложения на WearOS не будет. Подробнее о смарт-часах [читайте здесь](smartwatches).

(nightscout)=
## Nightscout

Кроме того, что Nightscout является сервером в «Облаке», также есть специальное приложение **Nightscout**, которое можно загрузить непосредственно из App Store на iPhone. Для телефонов на Android нет специального приложения Nightscout и лучше использовать [**AAPSClient**](AAPSClient), или, если вам нужно только наблюдать и не отправлять терапию, то можете скачать и установить приложение [Nightwatch](link) из Playstore.

После установки приложения **Nightscout** на iPhone, откройте приложение и следуйте инструкциям настройки, введя адрес Nightscout (см. ниже, слева). Форма может быть разной, в зависимости от провайдера хостинга. (_например_ http://адресвашегосайта.herokuapp.com). Затем введите Nightscout API secret (см. ниже, справа). Если API-пароль не запрошен, то нужно ввести его, нажав на замок в верхней части приложения:

![изображение](images/remote-control-24.png)

Дополнительная информация об установке доступна непосредственно на ресурсе [Nightscout](https://nightscout.github.io/nightscout/discover/)

Когда вы впервые входите в систему, перед вами будет очень простой дисплей (ниже, слева). Настройте параметры отображения, выбрав выпадающее меню в правом верхнем углу и прокручивая его вниз:

![изображение](images/remote-control-25.png)

Прокрутите вниз до «Настройки». "Масштаб" можно заменить на "линейный" т. к. по умолчанию он логарифмический, и в строке «отображать базал» выберите «по умолчанию», чтобы появился график базала. Продолжайте прокручивать вниз до «показать расширения (плагины)». Убедитесь, что «портал терапии» отмечен галочкой, а также можете выбрать другие показатели (наиболее полезные: активный инсулин IOB, помпа, катетер, отсчет возраста инсулина, базальный профиль и OpenAPS).

![изображение](images/remote-control-26.png)

![изображение](images/remote-control-27.png)

Не забудьте, это важно, чтобы эти изменения вступили в силу, нажать кнопку «сохранить» в нижней части.

После нажатия «сохранить» приложение вернется на главный экран Nightscout и будет выглядеть примерно так:

![изображение](images/remote-control-28.png)

В верхнем левом меню приложения Nightscout вы найдете дополнительную информацию:

![верхняя панель Nightscout](images/remote-control-29.png)

На серых вкладках огромное количество информации о состоянии системы **AAPS** (и еще больше информации если щелкуть по вкладкам):

![изображение](images/remote-control-30.png)

![изображение](images/remote-control-31.png)

### Отправка событий терапии через приложение Nightscout в AAPS

Чтобы настроить отправку событий терапии с приложения **Nightscout** на главный телефон **AAPS**, перейдите на вкладку **AAPSClient** в приложении **AAPS**. Откройте меню с правой стороны, найдите настройки синхронизации AAPSClient – и выберите соответствующие параметры. Настройте его на получение различных команд (временных целей и т. д.) а также на синхронизацию профилей. Если ничего не синхронизируется, вернитесь на вкладку AAPSClient, выберите «полная синхронизация» и подождите несколько минут.

Nightscout на iPhone имеет те же функции, что и Nightscout на ПК. Он позволяет отправлять множество команд **AAPS**, за исключением болюсов.

### Отмена отрицательного инсулина во избежание повторных гипо

Хотя у нас нет возможности вводить болюсы, мы можем "внести" инсулин через Nightscout как "болюс на коррекцию", который реально не вводится. В этом случае AAPS будет учитывать этот инсулин,, заставляя алгоритм AAPS действовать _менее агрессивно_, что полезно при отмене отрицательного активного инсулина. Это также предотвратит гипогликемию при агрессивно настроенном профиле. Вы можете проверить это самостоятельно в присутствии телефона **AAPS** если настройки **Nightscout** отличаются.

![24-10-23, отменить отрицательный инсулин NS](./images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


Некоторые полезные команды **Nightscout** приведены в таблице ниже.

#### Таблица команд Nightscout

![изображение](images/remote-control-33.png)

Подробнее возможностях **Nightscout** [здесь](https://nightscout.github.io/)

### Как извлечь максимум пользы из приложения Nightscout

1). Если вы «застряли» на странице и хотите видеть главное окно снова, просто нажмите «обновить» (внизу по центру) и вернетесь на домашнюю страницу **Nightscout** с графиком ГК.

Чтобы увидеть параметры текущего профиля на телефоне, нажмите на различные иконки на экране над графиком. Больше информации (текущий углеводный коэффициент, чувствительность, часовой пояс и т. д.) можно увидеть нажав «basal»; а нажав на «OpenAPS» получим данные о профиле, текущей цели и т. д. Можно также отслеживать % батареи телефона и % батареи помпы. Калькулятор болюса дает информацию о прогнозе алгоритма с учетом активного инсулина IOB и активных углеводов COB.

#### Другие иконки в меню: что означает карандаш (редактирование)?

Карандаш редактирования поможет (технически) переместить или удалить болюс или коррекцию с графика за последние 48 часов.

Подробнее [здесь](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Хотя это может пригодиться для удаления внесенных (но не получивших болюса) углеводов, на практике эта функция плохо работает с **AAPS** и мы рекомендуем вносить такие изменения непосредственно через приложение **AAPS**.

(смарт-часы)=
## Смарт-часы

Смарт-часы все чаще используются с **AAPS** _и_ для взрослых с диабетом и опекунов/родителей детей с диабетом.

### Преимущества смарт-часов в связке с **AAPS**


Смарт-часы - в зависимости от модели - могут найти различное применение с **AAPS**. С их помощью можно полностью или частично контролировать работу **AAPS**, а также проверять уровни гликемии, количество активного инсулина и другие параметры.

Интеграция смартфонов с **AAPS** может быть полезна во многих ситуациях, включая вождение автомобиля, мотоцикла, велосипеда, во время занятий спортом и т. п. Многие считают, что взгляд, брошенный на часы (на переговорах, банкетах, приемах и т. п.) вызывает меньше негативных реакций, чем общение со смартфоном. С точки зрения безопасности, смарт-часы также удобнее в пути, и позволяют пользователю не держать телефон с **AAPS** на виду (а, например, в сумке), и управлять системой дистанционно.

### Конкретные преимущества **AAPS** для родителей/опекунов

Для ребенка - если телефон **AAPS**  находится поблизости - опекун может использовать смарт-часы для мониторинга или внесения модификаций не прибегая к помощи телефона **AAPS**. Это может пригодиться, например, если телефон **AAPS** скрыт в поясе для помпы.

Смарт-часы могут быть _дополнением к_ или _альтернативой_ возможностям телефона [контролировать дистанционно](remote-control.md) или [только отслеживать](following-only.md).

Кроме этого, в отличие от телефонов родителей/опекунов (которые зависят от мобильной сети или wi-fi связи), смарт-часы с их bluetooth-технологией пригодятся в таких местах, как пещеры, на катере, при восхождении на гору. Если оба устройства ( телефон**AAPS** и смарт-часы) находятся в одной и той же сети Wi-Fi, они также могут использовать wifi.

### Различные типы взаимодействия смарт-часов и AAPS

Многие возможноси смарт-часов для пользователей **AAPS** подробно описаны на [Nightscout на ваших часах](https://nightscout.github.io/nightscout/wearable/#), так что рекомендуется сначала ознакомиться с этим источником.

В настоящее время существует пять основных способов использования смарт-часов в связке с **AAPS**. Эти данные приводятся ниже в таблице: 



![29-10-23, обновленная таблица AAPSClient для часов](./images/bbbe0e84-1a8c-4163-8a0b-dcf91144af14.png)




Обратите внимание, что таблица была подготовлена в 2023 году, она не является исчерпывающей, дополнительные варианты добавляются постоянно.

### Перед тем как купить смарт-часы…

Модель, которую вы покупаете, зависит от желаемых функций. Существует две таблицы, в которых приводятся модели совместимых: [смартфонов](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952) и [смартфонов и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

Существует множество вариантов настройки смарт-часов для работы с **AAPS**, и их число растет по мере появления новых часов. Популярные марки смарт-часов -- Samsung Galaxy, Garmin, Fossil, Mi band и Fitbit. Различные варианты, описанные в таблице выше, подробнее описаны далее, чтобы помочь принять решение, какие смарт-часы подойдут именно в вашем случае.

Если вы интегрируете смарт-часы с телефоном **AAPS** чтобы удаленно взаимодействовать с **AAPS**, нужно учитывать, совместимы ли оба устройства друг с другом, особенно если у вас устаревший или необычный телефон. Мы планируем добавить специальную страницу к одной из [таблиц](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit#gid=2097219952), посвященную совместимости смарт-часов и телефонов.

В общем, если вы хотите только следить за гликемией и не взаимодействовать с **AAPS**, то имеется большой выбор доступных и простых смарт-часов.

#### Для вариантов 1-3 со смарт-часами: _Что такое_ Wear OS?

Первые три варианта требуют наличия операционной системы **Wear OS**. на смарт-часах.

**Wear OS** - это операционная система некоторых современных смарт-часов Android. В [2018](https://en.wikipedia.org/wiki/Wear_OS), Google сделал ребрендинг _Android Wear 1.x на Wear OS_ начиная с версии 2.x. Поэтому, если устройство маркируется «_Android Wear_», а не **Wear OS** — то мы имеем дело с более старой версией. Если в описании смарт-часов указывается только _совместимость_ с Android и iOS - это не означает, что они работают под управлением Wear OS. Это может быть какая-то другая специальная операционная система, не совместимая с **AAPS**. Для поддержки установки и использования любой версии **AAPS** или **AAPSClient**, смарт-часы должен работать на **Wear OS**, а в идеале на Android 10 или новее. В качестве ориентира, по состоянию на октябрь 2023 года новейший выпуск **Wear OS** -- версия 4.0 (на основе Android 13).

Если вы устанавливаете **AAPS**wear.apk на часы с **Wear OS**, для этого существует ряд циферблатов **AAPS**. Кроме того, вы можете использовать стандартный циферблат с информацией **AAPS** которая отображается на маленьких плитках, известных как "усложнения". Усложнение - это любая функция, которая отображается на циферблате помимо времени. Такие функции как усложнения, требуют Wear OS версии 2.0 или новее.


#### Как выглядят смарт-часы с дистанционным управлением AAPS?

Здесь показаны примеры усложнений (когда AAPS встроен в существующий циферблат):

![изображение](./images/04d591ca-9f2e-4479-ac9e-ab689815745d.png)

В настоящее время эти циферблаты специально предназначены для AAPS:

![изображение](./images/67fd75f3-721c-438d-be01-1a8e03532290.png)

Более подробную информацию о возможных циферблатах смарт-часов и их функциях можно найти в разделе [Смарт-часы](Hardware/Smartwatch.md)

#### Циферблаты для Wear OS

Подробности о циферблатах и конфигурациях усложнений, включая инструкции как сделать собственные, можно найти [здесь](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html)

### Вариант 1) Автономные часы с **AAPS**

Похоже на привлекательный вариант? Однако в настоящее время лишь несколько энтузиастов экспериментируют с **AAPS**  на отдельных часах. Есть не так много смарт-часов с удобным интерфейсом, которые также способны работать с **AAPS** и приложением мониторинга. Популярные модели включают LEMFO LEM 14, 15 и 16. На них потребуется установить "полноценное" приложение **AAPS** (которое обычно устанавливается на телефон), а не приложение  **AAPS** "wear".

Пока нет четкой спецификации, которая поможет узнать, будут ли часы самостоятельно работать с **AAPS**, но ориентиром будут следующие параметры:

1) Android 10 или новее. 2) Возможность выключать "квадратный" режим для увеличения и упрощения чтения текста. 3) Очень хороший срок службы батареи. 4) Хороший диапазон Bluetooth.

Большинство разочарований от автономных часов с **AAPS** происходит от взаимодействия с крошечным экраном, и то, что текущий полный интерфейс AAPS не был разработан для часов. Из-за величины экрана возможно понадобится стилус для редактирования настроек **AAPS**  на часах, а некоторые кнопки AAPS могут не отображаться на экране просмотра.

Дополнительные проблемы заключаются в том, что трудно получить хороший срок службы батареи, а часы с хорошей батареей часто громоздкие и толстые. Пользователи сообщают о борьбе с настройками энергосбережения, трудностях с запуском сенсоров, плохом диапазоне Bluetooth (для поддержания связи с сенсором и помпой) и сомнительной влагоустойчивости. Примеры на фотографиях ниже (фото: Janvier Doyon).

![изображение](./images/6d787373-bc0c-404d-89aa-54d3127c4a6f.png)

![изображение](./images/5d2feecc-3f10-4767-b143-1a72da2b9bd4.png)

Если вы хотите автономно пользоваться смарт-часами, прочтите сообщения и комментарии в группе **AAPS**  на Facebook (ищите по "standalone" (автономные) и "Lemfo") и на Discord для дополнительной информации.

### Вариант 2) **AAPS** на смарт-часах, для дистанционного управления **AAPS** на телефоне

Аналогично использованию телефона фоллоуэра либо с AAPSClient, Nightscout или SMS (ссылка на разделы) смарт-часы можно использовать для удаленного управления **AAPS** и предоставления полных данных профиля. Ключевое различие с телефоном фоллоуэра заключается в том, что смарт-часы связываются с **AAPS** через Bluetooth и не требуют кода аутентификатора. Пользователи сообщают, что если смарт-часы и телефон, связанные по Bluetooth, находятся в одной сети Wi-Fi, часы также могут взаимодействовать с смартфоном по wifi, давая более широкий диапазон возможностей.

Таким образом, смарт-часы дистанционного управления полезны когда:

a)  команды **AAPSClient**/Nightscout/**SMS** не работают; или

б) пользователь не хочет пользоваться системой аутентификации (необходимой для телефона фоллоуэра при вводе данных, выборе временной цели ТТ или внесении углеводов).

На смарт-часах требуется программное обеспечение **Android wear** (идеально версии 10 или выше), чтобы управлять **AAPS**. Проверьте технические характеристики и сравните с [таблицей совместимых смарт-часов](link). Воспользуйтесь поиском или задайте вопрос в группе **AAPS** на Facebook или в Discord если есть сомнения.

Ниже приведены инструкции по настройке **AAPS** на [Samsung Galaxy Watch 4 (40mm)](link). Часы [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) также популярны. Если у вас есть опыт настройки других часов, делитесь им с пользователями AAPS, добавляя свои рекомендации и [редактируя документацию](https://androidaps.readthedocs.io/en/latest/make-a-PR.html).

#### Приложение AAPS Wear apk

Приложение ОС Wear OS **AAPS**  («Apk Wear OS»), необходимое для смарт-часов теперь отделено от "полной" сборки **AAPS** для телефонов Android. Поэтому следует создать второй установочный файл, или apk, для установки **AAPS**wear на часы (который параллельно загружается с телефона). Настоятельно рекомендуется, чтобы файл **AAPS** Wear apk был собран сразу же после сборки полноценного **AAPS** apk для телефона. Это не только не займет много времени, но и позволит избежать возможных проблем совместимости при попытке установить связь с телефоном. **AAPS** Wear apk на часах вряд ли будет совместимо с телефоном**AAPS**, если было создано в другой версии Android studio, или если с момента первоначальной сборки **AAPS** истекли месяцы.

Если вы уже используете **AAPS** на телефоне, и не собирали сразу оба приложения тогда лучше сделать новую сборку обоих apk файлов одновременно. Если у вас уже установлена Android studio, то переустановите ее и соберите AAPS для двух устройств одновременно используя один файл **хранилища ключей**.

#### Как удалить Android Studio

Убедитесь, что файл хранилища ключей безопасно хранится за пределами папок Android Studio.

Существует несколько шагов, необходимых для полного удаления Android Studio с компьютера. Вот [хорошее руководство](https://www.geeksforgeeks.org/how-to-completely-uninstall-android-studio-on-windows/) для Windows. На последнем этапе этих инструкций также необходимо вручную удалить папку «StudioProjects».

Теперь переустановите свежую версию Android Studio.

#### Создание приложения **AAPS** Wear apk

Процесс сборки Wear apk очень похож на процесс "полного" apk, разница в том, что в Android Studio необходимо выбрать “**AndroidAPS. wear**» а в выпадающем меню вариант сборки выберите “**fullRelease**”. Это создаст файл **AAPS** Wear apk.  Вместо этого можно собрать **“pumpcontrolRelease”** из выпадающего меню, которое позволит дистанционно управлять помпой, но вне цикла.

Это руководство предполагает, что вы переустановили версию Android studio( Giraffe 2022.3.1)).

![изображение](./images/e8e3b7f3-f82e-425a-968c-cc196434a5f8.png)

Чтобы вернуться сюда:

![изображение](./images/37f4589c-6097-49d4-b0b9-087664914198.png)

продолжайте следовать инструкциям.

Следуйте подсказкам через различные экраны, пока вам не будет предложена опция с выпадающим меню, предлагающим сборку полного AAPS apk. На данном этапе выберите «Wear» из выпадающего списка вместо «AndroidAPS.apk», потому что вы собираете apk для смарт-часов.


Следующий шаг перейдите в «Собрать» наверху в ленте

![изображение](./images/b2cccc84-85b6-4ee1-800b-7c6dcb9dd857.png)


Перейти к сборке > Сгенерировать подписанный комплект / APK


![изображение](./images/f488fe36-8cb9-4d81-9d94-5f742a1aaaee.png)

Выберите > набор APK для Android:

![изображение](./images/e8f4b996-c46e-4a31-831e-fdcc4d0d677c.png)


Выберите в модуле: AndroidAPSwear

![изображение](./images/cceaa832-70e6-4ad5-95ec-a82e2a6add1e.png)

Введите файл keystore в расположении по умолчанию. Путь к хранилищу ключей будет зависеть от того, где расположено хранилище. В нашем варианте путь к хранилищу ключей: C:\Program Files\Android\Android Studio\jbr\bin


Следующий экран должен показать:

![изображение](./images/87ce7943-256e-449e-8439-8f9fd5bef05e.png)


И выберите "fullRelease".

Наберитесь терпения - **AAPS** Wear apk должен быть собран примерно через 10-20 минут, в зависимости от скорости подключения к Интернету.

### Устранение неполадок

В процессе сборки полного приложения **AAPS** 3.2 (и в принципе любого подписанного приложения) Android Studio генерирует файл с расширением .json. Это приводит к ошибкам с [незапрошенными изменениями](troubleshooting_androidstudio-uncommitted-changes), когда создается следующее подписанное приложение, например **AAPS**wear. Самый быстрый способ решения это переход к папке, в которой было построено полное приложение AAPS, путь к папке, вероятно, выглядит как-то так:

C:\Users\Your Name\StudioProjects\AndroidAPS\app\aapsclient\release.

Удалите или переместите ненужный файл .json из этой папки. Затем попробуйте снова создать приложение **AAPS**. Если это не помогает, то детальная [инструкция по устранению неполадок](troubleshooting_androidstudio-troubleshooting-android-studio) поможет определить конкретный файл, вызывающий проблему; им также может оказаться файл хранилища ключей.

#### Как настроить смарт-часы Samsung Galaxy 4 с **AAPS**

Этот раздел предполагает, что вы новичок в смарт-часах; он сориентирует в популярных часах, **Galaxy Watch 4**, и даст пошаговое руководство по настройке **AAPS** на часах.

_В этом руководстве предполагается, что на часах Samsung Galaxy, с которыми вы сейчас разбираетесь, работает Wear OS версии 3 или ниже._. Если же вы настраиваете часы под управлением Wear OS 4/OneUI 5 или более поздней, то нужно использовать новый процесс сопряжения через ADB, это объясняется в программном обеспечении Samsung на телефоне и будет своевременно здесь обновляться. Вот основные параметры настройки для [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) и [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

##### Базовое знакомство с часами

После базовой настройки часов в соответствии с видео выше, перейдите в playstore на телефоне и загрузите следующие приложения: "Galaxy Wearable" "Samsung" и "Easy Fire tools" или "Wear Installer 2".

Существует множество сторонних видео на YouTube, которые помогут ознакомиться с этими смарт-часами, например:

https://www.youtube.com/watch?v=tSVkqWNmO2c

В приложении «Galaxy Wearable» также имеется встроенное руководство. В телефоне откройте приложение galaxy wearable, выполните поиск часов, попытайтесь связать часы с телефоном. В зависимости от вашей версии, в ходе этого может появиться запрос на установку еще одного приложения «galaxy watch 4 plugin» из playstore (потребуется некоторое время для загрузки). Установите его на телефон, а затем попытайтесь снова связать часы и телефон в приложении. Пройдите через ряд меню и отметьте предпочтения.

##### Настройка учетной записи Samsung

Вы должны убедиться, что учетная запись электронной почты для настройки учетной записи Samsung имеет дату рождения пользователя старше 13+, ибо в противном случае получить разрешения Samsung не получится. Если вы настроили вашему ребенку до 13 лет детскую учетную запись Gmail и используете этот адрес электронной почты, вы не можете просто изменить его на аккаунт для взрослых. Один из вариантов заключается в том, чтобы изменить текущую дату рождения и сделать текущий возраст 12 лет и 363 дня. На следующий день аккаунт будет преобразован в учётную запись для взрослых, и вы сможете выполнить настройку учетной записи Samsung.

##### Перенос приложения **AAPS** Wear на телефон **AAPS**

Загрузка Aapswear.apk из Android Studio на телефон может быть выполнена:

a) при помощи USB-кабеля, разместив файл **AAPS**wear. apk на телефон, а затем выполнив "параллельную загрузку" на часы. Перенесите файл Wear.apk в телефон через USB в папку загрузок; или

b) вырежьте и вставьте файл Wear.apk из Android Studio на Gdrive.


Можно использовать либо Wear Installer 2, либо Easy Fire tools для "побочной" (параллельной) загрузки AAPSwear на часы. Здесь мы рекомендуем Wear Installer 2, потому что инструкции и процесс в видео понятны и хорошо описаны.

##### Использование Wear Installer 2 для параллельной загрузки **AAPS** на часы

 ![изображение](./images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Установщик Wear Installer 2, разработанный [Malcolm Bryant](https://www.youtube.com/@Freepoc)загружается из Google Play и может применяться для "побочной" загрузки приложения AAPS wear на часы. В состав приложения входит понятное [видео](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV) "как выполнить параллельную загрузку"

В нем есть вся необходимая информация (лучше всего открыть видео на отдельном устройстве, чтобы посмотреть при настройке телефона).

Как сказано в видео, после завершения установки выключите отладку ADB на часах, чтобы не перегружать аккумулятор смарт-часов.

В качестве альтернативы можно:

:::{admonition} (предостережение) Пользуйтесь Easy Fire tools для параллельной загрузки **AAPS**wear на смарт-часы :class: выпадающее

1) Загрузите _Easy Fire Tools_ с playstore на телефон

![изображение](./images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2) Сделайте себя разработчиком часов (после настройки и подключения к телефону):

Перейдите в настройки >о часах (нижняя опция) >- информация о программном обеспечении > версия ПО.

Быстро нажимайте на «номер сборки» (7 раз), пока не появится уведомление о том, что часы находятся в «режиме разработчика». Вернитесь в верхнюю часть меню настроек, прокрутите вниз и посмотрите «настройки разработчика» ниже «о часах».

В «опциях разработчика» включите «Отладку ADB и «беспроводную отладку». Эта последняя опция показывает IP адрес часов, последние две цифры которого меняются каждый раз, когда часы сопрягаются с новым телефоном. Будет что-то вроде **167.177.0.20.** 5555 (игнорируйте последние 4 цифры). Обратите внимание, что последние две цифры (здесь «20») этого адреса будут меняться каждый раз, когда вы меняете телефон для AAPS.

![24-10-23, отладка ADB на часах](./images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

ЩАГ 3) Введите IP адрес _например_ **167.177.0. 0** в Easy Fire tools на телефоне (перейдите в левое выпадающее меню, настройки и введите IP адрес). Затем нажмите на значок розетки в правом верхнем углу.

![изображение](./images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![изображение](./images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


ШАГ 4) Следуйте инструкциям [здесь](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) для параллельной загрузки (т.е. передачи) Wear.apk на смарт-часы с помощью инструментов Easy Fire

Нажмите на сокет "plug-in" в приложении, чтобы загрузить Wear OS.apk на смартфон:

![изображение](./images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 Следующий шаг > принять запрос на авторизацию на часах


![изображение](./images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

:::


##### Настройка связи между часами и телефоном **AAPS**

Последним шагом является настройка **AAPS** на телефоне для работы с **AAPS** Wear на часах. Для этого включите плагин Wear в Конфигураторе настроек:

● Перейдите в приложение **AAPS** на телефоне

● Выберите > Конфигуратор в левой вкладке

● Выберите «Wear» в разделе Синхронизация Конфигуратора

![изображение](./images/ae6d75a1-1829-4d2e-b0dc-153e31e4a466)


Чтобы изменить внешний вид циферблата **AAPS**  выполните долгое нажатие на главный экран часов и перейдите к кастомизации. Затем проведите вправо, пока не дойдете до всех циферблатов **AAPS**.

Если приложение **AAPS** Wear.apk успешно загружено в смарт-часы, оно будет выглядеть так:


![24-10-23, успешная установка на Galaxy Watch фотография](./images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

#### Устранение неполадок связки **AAPS**часы-**AAPS** телефон
1.  Если инструменты EasyFire не сработали, или если «авторизация не выполнена» > проверьте правильность ввода IP-адреса.
2.  Проверьте, что часы подключены к Интернету (а не просто подключены к телефону через Bluetooth).
3.  Убедитесь, что телефон и смарт-часы **AAPS** сопряжены и связаны в приложении Samsung.
4.  Жесткий перезапуск телефона и смарт-часов (включение и выключение телефона и часов) может устранить проблему подключения
5.  Если вам удалось загрузить Wear. телефон, но данных ГК не поступают, _проверьте_, что вы загрузили корректную версию apk **AAPS** на часы. Если ваша версия AAPS wear.apk указана как любая из следующих версий: a) «wear-AAPSClient-release»; b) «wear-full-release». aab’; или c) в заголовке присутствует слово «debug», то выбрана неправильная версия apk OS Wear во время сборки.
6.  Убедитесь, что ваш роутер не изолирует устройства друг от друга.

Общее устранение неполадок можно найти [здесь](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

#### Устранение неполадок со смарт-часами Sony

Несмотря на то, что производство Sony SW3 было прекращено несколько лет назад,, смотрите: [Решение проблем Sony Smartwatch SW 3](https://androidaps.readthedocs.io/en/latest/Usage/SonySW3.html)


##### Контроль AAPS с помощью часов Wear

С часов можно запустить следующие функции:

●   установить временные целевые значения ГК

●   использовать калькулятор болюса (переменные могут быть определены в настройках на телефоне)

●   расписать eCarbs

●   ввести болюс (инсулин + углеводы)

●   настройки часов

●   статус

●   проверить состояние помпы

●   проверка состояния замкнутого цикла

●   проверить и изменить профиль, CPP (суточный процентный профиль = сдвиг по времени + процент)

●   показать TDD (Общая суточная доза = болюс + базал за сутки)

#### Общение от опекуна к часам при помощи других приложений (например, Whatsapp)

Можно добавить дополнительные приложения в часы, такие как Whatsapp, для обмена сообщениями (например), между опекунами и детьми. Важно только иметь один аккаунт Google, связанный с телефоном, или часы не передадут эти данные. Вам должно быть 13 или старше чтобы иметь учетную запись Samsung, настроеную на тот же электронный адрес, который используется на телефоне Android.

Видео с настройками Whatsapp для Galaxy 4 (полного функционала не будет) можно найти [здесь](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Добавление корректировок в приложение **Galaxy wearable** на телефоне **AAPS** и на часах позволяют сообщениям Whatsapp приходить с небольшой вибрацией, а также появляться поверх циферблатов.

### Вариант 3) AAPS на смарт-часах, для дистанционного управления **AAPS** на телефоне

Программное обеспечение для часов, **AAPSClient** Wear apk, можно загрузить непосредственно с [Github](https://github.com/nightscout/AndroidAPS/releases/).

Чтобы скачать приложение, нажмите на требуемое приложение (на этом снимке экрана, либо **wear-aapsclient-release_3.2.0.** либо **wear-aapsclient2-release_3.2.0.** будут работать, есть две версии (копия для второго опекуна):

![изображение](./images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Затем «сохранить как» и сохранить файл в удобном месте на компьютере:


![изображение](./images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






**AAPSClient** может быть перенесено на телефон и параллельно загружено на часы так же, как и приложение **AAPS** Wear, как подробно описано в [Передача Wear на телефон](remote-control.md#transferring-the-wear-app-onto-your-aaps-phone)

### Вариант 4) Nightscout с ограничениями (и другими опциями) на часах - часы Fitbit



![изображение](./images/98620770-2fb3-47af-a13e-28af7db69096)



**"Sentinel"**(дозор)-циферблат, разработанный [Ryan Chen](http://ryanwchen.com/sentinel.html) для членов семьи и бесплатно выложенный для смарт-часов Fitbit: Sense1/2, Versa 2/3/4. fitBit Luxe не совместим с FitBit Luxe, так как это только фитнес-трек. Sentinel можно загрузить с мобильных приложений для [FitBit](https://gallery.fitbit.com/details/5f75448f-413d-4ece-a53d-b969c6afea7c).

Он позволяет контролировать гликемию 1,2 или 3 человек, используя либо Dexcom Share, либо Nightscout или сочетание двух источников данных.

Также можно использовать xDrip+ или SpikeApp, в локальном режиме веб-сервера. Пользователи могут установить свои сигналы оповещений и отправлять события, используя функциональность портала терапии Nightscout непосредственно с часов для отслеживания инсулина на борту (IOB), активные углеводы(COB), вводить информацию о питании (количество углеводов и болюсов) и проверить ГК.

Все они появятся в графике Nightscout и в обновленных значениях полей активного инсулина IOB и углеводов COB. Поддержку пользователей можно найти в группе [Facebook, Sentinel.](https://www.facebook.com/groups/3185325128159614)

Есть дополнительные опции для часов FitBit, которые, как представляется, предназначены только для мониторинга. Сюда входит [Glance](https://glancewatchface.com/). Эти дополнительные опции описаны на веб-страницах [Nightscout](https://nightscout.github.io/nightscout/wearable/#fitbit)

### Вариант 5) **Мониторинг AAPS** (полные данные профиля или только гликемия), когда **AAPS** работает на телефоне.

Эти варианты описаны в разделе [только слежение](following-only.md) документации.

В общем, существует широкий ассортимент доступных смартфонов, которые могут обеспечить только отображение ГК. Если вы пользуетесь сайтом Nightscout, то хороший обзор всех параметров описан на страницах [Nightscout](https://nightscout.github.io/nightscout/wearable/#).






