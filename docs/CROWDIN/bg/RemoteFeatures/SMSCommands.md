# SMS команди

```{contents} Table of contents
:depth: 2
```

Повечето дистанционни настройки (временни цели, въглехидрати, смени на профил и, след като клиентът е свързан, болуси) могат да се правят с [приложението **AAPSClient**](../RemoteFeatures/RemoteMonitoring.md) на телефон с Android с интернет връзка, вижте [Контрол главен ↔ клиент](#client-master-control) (версия на **AAPSClient** за iPhone е в разработка, вижте [AAPSClient](AapsClient.md)). SMS командите остават алтернатива, която работи без интернет, и единствената дистанционна възможност, ако използвате iPhone като последовател и все още нямате **AAPSClient**.

**SMS командите са много полезни:**
1. За обичайно дистанционно управление

2. Ако искате да пуснете болус дистанционно без свързан **AAPSClient**

3. В район със слаб интернет сигнал, където текстовите съобщения минават, но мобилните данни/интернетът на телефона са ограничени. Това е много полезно, когато ходите на отдалечени места (напр. къмпинг, ски).

4. Ако другият ви начин за дистанционно управление (**AAPSClient**) временно не работи

## Безопасността на първо място

Ако включите **SMS комуникатор** в **AAPS**, имайте предвид, че телефонът, настроен да дава отдалечени команди, може да бъде откраднат и/или използван от някой друг. Винаги заключвайте телефона си поне с ПИН. Силна парола и/или биометрично заключване са силно препоръчителни. Те трябва да са различни от главната парола на APK (паролата, която се изисква за експорт на настройките на **AAPS**).

Освен това се препоръчва да разрешите [втори телефонен номер](#SMSCommands-authorized-phone-numbers) за SMS командите. Така можете да използвате втория номер, за да [изключите](#SMSCommands-other) SMS комуникатора, ако основният ви телефон за дистанционно управление бъде компрометиран.

The default minimum time delay between bolus commands is 15 minutes, counted from the moment the pump accepts a bolus. От съображения за сигурност трябва да добавите поне два разрешени телефонни номера, за да го промените на по-кратко време. Ако опитате отново да пуснете отдалечен болус в рамките на 15 минути след предишния болус, ще получите отговор „Отдалечен болус не е възможен. Опитайте отново по-късно.“

AAPS също ще ви съобщи с текстово съобщение дали вашите отдалечени команди, например болус или смяна на профил, са изпълнени. Препоръчително е да настроите потвърждаващите съобщения да се изпращат до поне два различни телефонни номера, в случай че един от приемащите телефони бъде откраднат.

**If you bolus through SMS Commands, you must enter carbs separately (second SMS, AAPSClient...)!** If you fail to do so, the IOB would be correct with too low COB, potentially leading to not performed correction bolus as **AAPS** assumes that you have too much active insulin.

За чувствителните команди трябва да се използва автентикатор с еднократна парола, базирана на времето, за по-голяма сигурност.

Ако искате да премахнете възможността телефонът на болногледача да изпраща SMS команди, използвайте аварийния бутон „[Нулирай автентикаторите](#sms-commands-authenticator-setup)“ в **AAPS** или изпратете SMS командата „[SMS stop](#SMSCommands-other)“. Като нулирате автентикаторите, правите невалидни телефоните на ВСИЧКИ болногледачи. Ще трябва да ги настроите отново.

## Настройка на SMS командите

```{contents} The overall process is as follows
:depth: 1
:local: true
```

(sms-commands-authenticator-setup)=
### Настройка на автентикатор

Двуфакторното удостоверяване се използва за по-голяма сигурност.

На телефона на болногледача изтеглете (от App Store или Google Play) и инсталирайте приложение автентикатор. Популярни безплатни приложения са:
  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

Тези приложения създават еднократна 6-цифрена парола, валидна за кратко време, подобно на мобилното банкиране или онлайн пазаруването. Можете да използвате и друго приложение автентикатор, стига то да поддържа RFC 6238 TOTP токени. Microsoft Authenticator не работи.

### Проверка на настройките на телефона

На телефона си отидете в **Приложения > AAPS > Разрешения** (Apps → AAPS → Permissions). Уверете се, че **SMS** и **Телефон** (Phone) са разрешени.

![изображение](../images/remote-control-08.png)

```{admonition} "App was denied access to SMS"
:class: tip
Android може да блокира разрешението **SMS** за приложения, които не са инсталирани от магазин за приложения, като **AAPS**. Ако видите това съобщение, когато давате разрешението **SMS**, отворете на телефона **Настройки > Приложения > AAPS** (Settings → Apps → AAPS), докоснете менюто **⋮** (горе вдясно) и изберете **Разрешаване на ограничени настройки** (Allow restricted settings). След това дайте отново разрешението **SMS**.
```

![Приложението няма достъп до SMS](../images/sms_permission_restricted.png)

### Синхронизиране на датата и часа

Часът на двата телефона трябва да е синхронизиран. Най-добре е часът да се задава автоматично от мрежата. Разликите във времето могат да доведат до проблеми с удостоверяването.

И на телефона с **AAPS**, и на телефона на болногледача проверете дали датата и часът са синхронизирани. Как точно става това зависи от устройството. Може да се наложи да опитате различни настройки.

Пример (за Samsung S23): **Настройки > Общо управление > Дата и час** (Settings → General management → Date and time): уверете се, че **Автоматична дата и час** (Automatic date and time) е включено.

Някои опции може да са сиви (неактивни), защото изискват администратор през семеен профил, ако телефонът е настроен като детски профил. На iPhone на болногледача/родителя тази настройка за дата и час се казва „Автоматично задаване“ (Set Automatically). Ако не сте сигурни дали сте синхронизирали телефоните, не се притеснявайте: можете да настроите SMS командите и да търсите причината по-късно, ако изглежда, че това създава проблеми (при нужда потърсете помощ).

### Настройки на AAPS

След като проверихте настройките на телефона, в самото приложение **AAPS** отидете в [**Конфигурация** → **Комуникация**](../SettingUpAaps/ConfigBuilder.md) и включете плъгина **SMS комуникатор**.

Отворете настройките на **SMS комуникатор**.

Включете **Разреши отдалечени команди чрез SMS**. Опциите **Допълнителен задължителен ПИН в края на токен** и **Настройка на автентикатор** се появяват само след като това е включено:

![Настройки на SMS комуникатор](../images/sms_communicator_settings.png)

(SMSCommands-authorized-phone-numbers)=
#### Разрешени мобилни номера

Въведете телефонния номер (или номерата) на болногледача. Включете кода на държавата и махнете първата „0“ от телефонния номер, както в тези примери:
* Телефонен номер във Великобритания: +447976304596
* Телефонен номер в САЩ: +11234567890
* Телефонен номер във Франция: +33612344567
* _и т.н._

Имайте предвид, че знакът „+“ пред номера може да е нужен или не, в зависимост от това къде се намирате. За да го определите, изпратете пробно съобщение. Полученият формат ще се покаже на екрана на плъгина **SMS комуникатор** (**Конфигурация** → **Комуникация** → **SMS комуникатор** → **Отвори плъгин**).

Ако трябва да добавите повече от един телефонен номер, разделете ги с точка и запетая, **БЕЗ интервал между номерата** (това е много важно!). Изберете **ОК**:

![Разрешени мобилни номера](../images/sms_allowed_numbers.png)

#### Дистанция за отдалечен болус

- Можете да зададете минималното време (в минути) между два болуса, подадени чрез SMS.
- От съображения за сигурност трябва да добавите поне два разрешени телефонни номера, за да промените тази стойност.

#### Допълнителен задължителен ПИН в края на токен

От съображения за сигурност след кода за отговор трябва да има ПИН. Изберете ПИН, който вие (и другите болногледачи) ще въвеждате след кода от автентикатора, когато изпращате SMS команда.

Изисквания към ПИН:

* at least 6 digits
* digits only

For a safer PIN, do not use the same digit many times (_e.g._ 111111) or a sequence (_e.g._ 123456).

![Допълнителен задължителен ПИН в края на токен](../images/sms_pin.png)

#### Настройка на автентикатор

* Докоснете **Настройка на автентикатор** и следвайте инструкциите стъпка по стъпка на екрана.
* Отворете инсталираното приложение автентикатор на _телефона на болногледача_, настройте нова връзка и
* С телефона на болногледача сканирайте QR кода, показан под **Сканирайте кода, за да настроите OTP кодовете на AAPS**.

![Authenticator setup with QR code](../images/sms_authenticator_setup.png)

* Под **Тест на OTP кода** въведете в **Проверка на кода** еднократната парола от автентикатора на телефона на болногледача, следвана от вашия ПИН:

Example:
* Токенът от автентикатора е 457051
* Вашият задължителен ПИН е 2401
* Проверка на кода: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. **There is no button you can press!** The process is now complete, there is no “OK” button you need to press after entering the code:

![Test One-Time-Password and Reset Authenticators](../images/sms_authenticator_test.png)

You should now be set up with SMS commands.

Use the **Reset Authenticators** button at the bottom of the **Authenticator setup** screen if you want to remove provisioned authenticators. (By resetting authenticator you make ALL already provisioned authenticators invalid. You will need to set them up again.)

## Използване на SMS командите

### Първи стъпки със SMS командите

1)  To check you have set everything up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the **AAPS** phone. You should get a response similar to that shown here:

![изображение](../images/remote-control-06.png)

If you don't receive any response, check the [Troubleshooting](#SMSCommands-troubleshooting) section below.

2)  Now try an SMS command that requires the authenticator, _e.g._ “target hypo”. The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by the additional secret **PIN** known only by caregivers/followers (a string of twelve digits in total, assuming your PIN has 6 digits).

When you try sending an SMS command for the first time, try it in the presence of the **AAPS** phone, to see how it works:

![изображение](../images/remote-control-16.png)

The caregiver’s phone will receive an SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully.

If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message. See [Troubleshooting](#SMSCommands-troubleshooting) below for common errors.

**Hint**: It can be useful to have unlimited SMS on your phone plan (for each phone used) if a lot of SMS will be sent.

### Болус за хранене чрез SMS команди

Remote bolusing of insulin can be done via **SMS Commands** or through a paired **AAPSClient** (see [Master ↔ Client control](#client-master-control)); it cannot be done through the Nightscout website. Carbs can be announced through SMS or **AAPSClient** as well. With SMS, it is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows:

1)  Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to **Treatments** → **Insulin** in **AAPS**. 2)  Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to **Treatments** → **Carbs** in **AAPS**.

To avoid hypos, it is a good idea to start conservatively, by bolusing **less insulin** than would be needed according to your carb ratio, because you are not taking into account the current glucose level or glucose trend.

**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can combine **AAPSClient** with SMS commands: carbs entered on a paired **AAPSClient** need no authentication code and are therefore quicker than SMS commands. Carbs or other treatments entered on the Nightscout website are **not** applied while client control is on; **AAPS** is then in [hardened mode](#client-master-control-hardened-mode).

(SMSCommands-commands)=
## Команди

```{contents} List of command groups
:depth: 1
:local: true
```

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app). The commands are not case-sensitive, you can use lower or upper case.

![SMS Commands Example](../images/SMSCommands.png)

The **SMS Commands Tables** below show all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the **AAPS** app itself.

(authentication-or-not)=
### С удостоверяване или без?

Some SMS commands give an immediate response, and some SMS commands require strong **authentication** through the Authenticator app. A simple enquiry like “**BG**” (which requests an update on current glucose) is quick to type, doesn't need authenticating, and returns the **AAPS** status information shown below:

![изображение](../images/remote-control-06.png)

Commands which need more security require a code to be entered, for example:

![SMS authenticated](../images/remote-control-07.png)

The *Auth* column in the tables below, indicates whether such a strong authentication is required for each command.

### Данни от CGM

| Команда    | Код | Функция и *отговор*                                                                                                                                                                                     |
| ---------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BG         | Не  | Връща: последна КЗ, изменение (делта), IOB (болус и базал), COB<br/>*Последна КЗ: 5.6 преди 4 мин, Делта: -0,2 mmol, IOB: 0.20 Ед. (Болус: 0.10 Ед. Базал: 0.10 Ед.)*                             |
| CAL 5.6/90 | Да  | Калибрира CGM със стойност 5.6/90<br/>(използвайте стойността, подходяща за вашите единици за КЗ)<br/>Работи само ако е правилно настроено в **AAPS**.<br/>*Калибрацията е изпратена* |

### Помпа

| Команда              | Код | Функция и *отговор*                                                                                   |
| -------------------- | --- | ----------------------------------------------------------------------------------------------------- |
| ПОМПА                | Не  | Last conn: 1 min ago<br/>Temp: 0.00U/h @11:38 5/30min<br/>IOB: 0.5U Reserv: 34U Batt: 100 |
| PUMP DISCONNECT *30* | Да  | Разкачва помпата за *30* минути                                                                       |
| PUMP CONNECT         | Да  | Помпата е свързана отново                                                                             |

### Базал

| Команда           | Код | Функция и *отговор*              |
| ----------------- | --- | -------------------------------- |
| BASAL 0.3         | Да  | Стартира базал 0,3 U/h за 30 мин |
| BASAL 0.3 20      | Да  | Стартира базал 0,3 U/h за 20 мин |
| BASAL 30%         | Да  | Стартира базал 30 % за 30 мин    |
| BASAL 30% 50      | Да  | Стартира базал 30 % за 50 мин    |
| BASAL STOP/CANCEL | Да  | Спира временния базал            |

Some pumps take a temp basal only in percent, others only in U/h. If you use the other form, **AAPS** answers *"This pump takes a temp basal only in percent, not in U/h."* (or the reverse) and sets nothing. The duration must be a multiple of your pump's temp basal duration step.


### Кръг

| Команда           | Код | Функция и *отговор*                                                                                                                                                                                                                          |
| ----------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOOP STATUS       | Не  | Отговорът зависи от текущия статус:<br/> - *APS е изключен*, ако кръгът е изключен или е в режим LGS<br/> - *APS е включен*, ако кръгът е затворен или отворен<br/> - *Изключен (10 мин)*, ако кръгът е разкачен или спрян |
| LOOP STOP/DISABLE | Да  | Помпата се връща към предварително програмираната базална доза.<br/>*APS е деактивиран*                                                                                                                                                |
| LOOP SUSPEND 20   | Да  | *Кръгът е изключен за 20 минути*                                                                                                                                                                                                             |
| LOOP RESUME       | Да  | *Кръгът е включен*                                                                                                                                                                                                                           |
| LOOP CLOSED       | Да  | *Текущ режим: Затворен кръг*                                                                                                                                                                                                                 |
| LOOP LGS          | Да  | *Текущ режим: Спиране на базал при ниска КЗ*                                                                                                                                                                                                 |

### Болус

Remote bolus is not allowed within 15 min (this value is editable only if 2 phone numbers added) after last bolus command or remote commands! In this case, the response would be *Remote bolus not available. Try again later.* This response is also sent when the pump is currently delivering a bolus.

| Команда              | Код | Функция и *отговор*                                                                                                                                                |
| -------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BOLUS 1.2            | Да  |                                                                                                                                                                    |
| BOLUS 0.60 MEAL      | Да  | Подава зададения болус от 0,60 U<br/>**и** задава [временна цел „Преди хранене“](#TempTargets-eating-soon-temp-target)                                       |
| CARBS 5              | Да  | Въвежда 5 г без болус                                                                                                                                              |
| CARBS 5 17:35/5:35PM | Да  | Въвежда 5 г в 17:35.<br/>Приеманият формат на часа зависи<br/> от настройката за час (12 ч/24 ч) на телефона.                                          |
| EXTENDED 2 120       | Да  | Стартира удължен болус от 2 U за 120 мин.<br/>Само за [съвместими помпи](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only). |
| EXTENDED STOP/CANCEL | Да  | Спира удължения болус                                                                                                                                              |

### Профил

| Команда        | Код | Функция и *отговор*                                                                                                                                        |
| -------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROFILE STATUS | Не  | Текущ профил и процент                                                                                                                                     |
| PROFILE LIST   | Не  | Текущият списък с профили в **AAPS**, напр.:<br/>1. Profile1<br/> 2. Profile2                                                                  |
| PROFILE 1      | Да  | Сменя профила на профил 1 от списъка.<br/>Използвайте номерата, които връща **PROFILE LIST**,<br/>а не имената, с които сте запазили профилите |
| PROFILE 2 30   | Да  | Сменя профила на Profile2 30 %                                                                                                                             |

The percentage must be between 30 and 250 %, as in the app. A value outside this range is refused before you are asked for the authentication code.

### Временни цели

| Команда                   | Код | Функция и *отговор*                    |
| ------------------------- | --- | -------------------------------------- |
| TARGET MEAL/ACTIVITY/HYPO | Да  | Задава временна цел MEAL/ACTIVITY/HYPO |
| TARGET STOP/CANCEL        | Да  | Отменя временната цел                  |


(SMSCommands-other)=
### Друго

| Команда          | Код | Функция и *отговор*                                                                                                                                                                                                                                                   |
| ---------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESTART          | Да  | Рестартира AAPS. Полезно е, ако имате проблеми, които обикновено се решават с рестартиране.                                                                                                                                                                           |
| SMS DISABLE/STOP | Да  | To disable the SMS Remote Service, reply with the code.<br/>Keep in mind that you'll be able to reactivate it directly<br/>from the **AAPS** master smartphone only.                                                                                      |
| HELP             | Не  | Връща всички функции, за които можете да питате:<br/>BG, LOOP, PUMP, BASAL, BOLUS, EXTENDED, CAL, PROFILE, TARGET, SMS, CARBS, HELP, RESTART<br/>Изпратете команда ***HELP ***FUNCTION******, за да видите<br/>всички възможни опции в този раздел. |
| HELP BOLUS       |     | *BOLUS 1.2<br/>BOLUS 1.2 MEAL*                                                                                                                                                                                                                                  |

(SMSCommands-troubleshooting)=
## Отстраняване на неизправности и често задавани въпроси

```{contents} List of questions and issues
:depth: 1
:local: true
```

### Какво _не можем_ да правим със SMS команди?

1)  **You cannot set a _temporary_ profile switch** (so for example, setting "profile exercise" for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profile switches can instead be set through **AAPSClient**.

2)  **You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the **AAPS** phone. If the high temporary target of 7.0 is started by the automation, and you cancel it (on the **AAPS** phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min by pressing on the target on the main screen, or via **Manage** → **Temp Target**. This would prevent the automation from setting the high target of 7.0.

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use **AAPSClient** to do this.

### Какво става, ако се откажа от команда, която току-що съм изпратил?

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. **AAPS** will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action.

### Защо не получих отговор на SMS команда?

It could be for one of these reasons:

1)  The message has not got through to the phone (network issues). 2)  **AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate). 3)  The **AAPS** phone does not have a good Bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the **AAPS** phone).

### Никакъв отговор на SMS командите

On the caregiver phone and/or **AAPS** phone, try disabling the following options :
* **Изпращане като чат съобщение** (Send as chat message) ![Изключване на SMS като чат съобщение](../images/SMSdisableChat.png)
* Ако използвате приложението Android Messages или Google Messages, изключете RCS съобщенията:
  - отворете конкретния SMS разговор в Messages (Съобщения)
  - Изберете менюто с трите точки в горния десен ъгъл
  - изберете „Подробности“ (Details)
  - Включете „Изпращане само на SMS и MMS съобщения“ (Only send SMS and MMS messages) ![Изключване на RCS като чат съобщение](../images/SMSdisableRCS.png)

### Грешки при изпълнение на команди

There are several possible reasons the command may not be successful:

* Настройката на SMS командите не е завършена/правилна
* Изпратили сте команда в грешен формат (например „disconnect pump 45“ вместо „pump disconnect 45“)
* Използвали сте грешен или изтекъл код от автентикатора (обикновено е добре да изчакате няколко секунди за нов код, ако текущият скоро изтича)
* Кодът + ПИН бяха правилни, но изпращането/получаването на SMS се забави и затова **AAPS** изчисли, че кодът от автентикатора е изтекъл
* Телефонът с **AAPS** е извън обхват/няма връзка с помпата
* Системата вече е заета с подаване на болус

Common errors are shown in the examples below:

![изображение](../images/remote-control-17.png)

### Как да спра команда, след като е потвърдена с код?

You can't. However, you can cancel a bolus sent by SMS on the **AAPS** phone itself, by simply cancelling it on the bolusing popup, if you are quick. Many SMS commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate unintended effects if a mistake is made.

For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

### Няколко SMS

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. This could be xDrip, for example. If so, please ensure that xDrip (or any other app) does not upload treatments to NightScout.

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

(sms-commands-too-many-messages)=
### Получавам твърде много текстови съобщения от SMS командите. Мога ли да намаля честотата им или да ги спра?

Using SMS commands may generate a lot of automated messages from the **AAPS** phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your **AAPS** phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include Whatsapp, Lime, Telegram, and Facebook Messenger.

It is possible to disable the "Profile changed" SMS, when the Profile change originated from Nightscout. To do this, create a file named **exactly**  `do_not_send_sms_on_profile_change` in the `extra` dir of your AAPS directory.
