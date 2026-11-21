# Смена часового пояса и переход на летнее время

When the time zone of your phone changes, **AAPS** calculates **IOB**, basal and sensitivity for the past again from scratch, about 10 seconds after the change. While this runs, the graphs and values on the main screen may take a moment to update.

(timezone-traveling-with-pumps)=

## Смена часового пояса для Omnipod Dash

* Refresh the pump status in **Manage → Pump**
* Временно выберите другой **профиль**, а затем переключитесь обратно на исходный или нужный **профиль**

## Смена часового пояса для DanaR, корейской DanaR

Нет проблем с изменением часового пояса в телефоне, так как в помпе не отслеживается история

(timezone-traveling-danarv2-danars)=

## Timezone change for DanaRv2, DanaRS, Dana-i

Эти помпы требуют особого внимания, потому что **AAPS** использует историю помпы, а записи в помпе не содержат часового пояса. **Это значит, что если вы смените часовой пояс в телефоне, записи будут прочитаны с другим часовым поясом и задвоятся.**

Во избежание этого существует две возможности:

### Вариант 1: продолжать пользоваться домашним временем и специально созданным профилем сдвига по времени

* В настройках телефона отключите 'Автоматический выбор даты и времени' (смена часового пояса вручную).

* Ваш телефон должен сохранять ваше обычное домашнее время в течение всей поездки.

* Сдвиньте по времени ваш **профиль** на разницу между домашним временем и временем в месте назначения.
   
   * Tap the **Profile** name on the main screen to open the [Profile screen](#ProfileSwitch-manage-v4)
   * Select your **Profile** and tap **▶ Activate**
   * Set '**Time shift**' according to your destination and tap **Activate**.
   
   ![Смена профиля с временным сдвигом](../images/v4/Profiles/ProfileSwitchTimeShift2.png)
   
   * e.g. Vienna -> New York: **Profile Switch** +6 hours
   * e.g. Vienna -> Sydney: **Profile Switch** -8 hours

### Вариант 2: Удалить историю работы помпы

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную)

When you get off the plane:

* выключите помпу
* измените часовой пояс на телефоне
* выключите телефон, включите помпу
* выполните очистку истории на помпе
* измените время на помпе
* включите телефон
* позвольте телефону подключиться к помпе и точно подстроить время

(timezone-traveling-insight)=

## Смена часового пояса для Insight

Драйвер автоматически подстраивает время помпы под время телефона.

Insight также записывает в историю, в какой момент было изменено время и с какого (старого) на какое (новое) время. Поэтому **AAPS** может определить правильное время, несмотря на изменение времени.

Это может вызвать неточности в **TDD**. Однако это не должно быть проблемой.

Поэтому пользователю Insight не нужно беспокоиться об изменениях часового пояса и изменении времени. Из этого правила есть одно исключение: у помпы Insight есть маленькая внутренняя батарея, которая питает часы и т. п. во время замены "настоящей" батареи. If changing battery takes too long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. В этом случае все записи до замены батареи пропускаются в расчётах в AAPS, так как правильное время должным образом не может быть определено.

## Смена часового пояса для Accu-Chek Combo

The [Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the driver programs into the pump. Кроме того, драйвер хранит часовой пояс в локальных настройках AAPS, чтобы преобразовать местное время помпы в полную метку времени со смещением часового пояса. Пользователю не надо ничего делать; если время в Combo слишком сильно отклоняется от текущего времени телефона, время помпы регулируется автоматически.

Заметьте, что это занимает некоторое время, так как происходит в режиме дистанционного терминала, который работает медленно. Это ограничение Combo не может быть преодолено.

## Смена часового пояса для Medtrum

Драйвер автоматически подстраивает время помпы под время телефона.

При смене часового пояса история сохраняется полностью, затронута может быть только TDD. Ручное изменение времени на телефоне может вызвать проблемы с историей и **IOB**. Если вы меняете время вручную, дважды проверьте **IOB**.

When the time zone or time changes running **TBRs** are stopped.

(time-adjustment-daylight-savings-time-dst)=

## ЛЕТНЕЕ ВРЕМЯ (DST)

Time adjustment for daylight savings time.

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctly. For some pumps it is better to make time zone adjustments while awake before DST takes place and not during the night.

### Автоматическая подстройка к летнему времени для большинства помп

* However, the **Loop** will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. Это сделано из соображений безопасности: **IOB** может оказаться слишком высоким из-за болюса, задвоенного перед переходом на летнее время.
* After DST has taken place, make a **Profile Switch** to the desired **Profile** to enable the **Loop**: tap the profile name on the main screen, then the round **▶** button (see [Activating a profile](#ProfileSwitch-manage-v4)).
* You will also receive a notification on **AAPS** main screen prior to DST change that the **Loop** has been disabled temporarily. This message will appear without beep, vibration or similar sound.

Если вы вводите болюс с помощью калькулятора **AAPS**, не используйте данные **COB** и **IOB**, если вы не уверены, что эти данные абсолютно верны. Будьте осторожны и не используйте эту функцию несколько часов после перехода на летнее время.

### Летнее время для Accu-Chek Insight

* Переключение на DST производится автоматически. Никаких действий не требуется.

### Летнее время для Accu-Chek Combo

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Medtrum

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default to background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day before DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Действия перед переводом времени

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a desired time zone that does not use DST. Как это включить, зависит от вашего смартфона и версии Android.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF: **Set automatically** under **Time zone** in the screenshot below).
   * К сожалению, в некоторых версиях Android есть только один переключатель, который включает автоматическую установку и времени, и часового пояса. Его надо пока что отключить.

![Screenshot_20260329-110315 (1)](../images/android_date_time_automatic.png)

2. Найдите часовой пояс, в котором время такое же, как в вашем текущем месте, но который не переходит на летнее время.
   
   * Список таких стран здесь [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Congo). Change your phone's timezone to Congo.

![Screenshot_20260329-111830](../images/android_date_time_manual.png)

3. In **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the **Loop** for at least one DIA or the maximum carb absorption time (**Absorption max time**), whichever is longer.

5. Actions to take after the clock change. Вернуться к местному часовому поясу лучше всего при низком **IOB**. Например, за час до еды, скажем, до завтрака. В идеале и **COB**, и **IOB** должны быть близки к нулю.