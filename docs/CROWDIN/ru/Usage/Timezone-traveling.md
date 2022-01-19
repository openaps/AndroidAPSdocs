# Пересечение часовых зон с помпами

## DanaR, DanaR для корейского рынка

Нет проблем с изменением часового пояса в телефоне, так как в помпе не отслеживается история

## DanaRv2 / DanaRS

Эти помпы требуют особого внимания, т. к. AndroidAPS использует историю работы помпы, но электронный журнал помпы не имеет штампа часового пояса. **Это означает, что если вы просто измените часовой пояс в телефоне, записи будут читаться с различным часовым поясом и произойдет их задвоение.**

Во избежание этого существует две возможности:

### Вариант 1: продолжать пользоваться домашним временем и специально созданным профилем сдвига по времени

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную).
* Телефон должен продолжать использовать ваше обычное домашнее время на весь период поездки.
* Произведите сдвиг времени вашего профиля в зависимости от разницы во времени между домашним и целевым временем.
   
   * Нажмите и удерживайте название профиля (середина верхнего ряда на домашнем экране)
   * Выберите 'Переключение профиля'
   * Установите 'Сдвиг по времени' в зависимости от места назначения.
   
   ![Profile switch with time shift](../images/ProfileSwitchTimeShift2.png)
   
   * напр. Vienna -> New York: сдвиг профиля +6 часов
   * напр. Vienna -> Sydney: сдвиг профиля --8 часов
* Возможно, не подойдет при использовании модифицированного приложения [LibreLink app](../Hardware/Libre2#time-zone-travelling) поскольку при запуске нового сенсора Libre 2 на смартфоне должен быть настроен автоматический выбор времени.

### Вариант 2: Удалить историю работы помпы

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную)

Когда выйдете из самолета:

* выключите помпу
* измените часовой пояс на телефоне
* выключите телефон, включите помпу
* выполните очистку истории на помпе
* измените время на помпе
* включите телефон
* позвольте телефону подключиться к помпе и точно подстроить время

## Insight

Драйвер автоматически синхрониззирует время на помпе и на телефоне.

Insight также регистрирует прошедшие записи и момент смены времени и продолжительность до текущего момента. Таким образом, правильное время может быть определено в AAPS, несмотря на изменение времени.

Это может вызвать неточности в определении суммарных суточных доз инсулина TDD. Однако это не должно быть проблемой.

Поэтому пользователю Insight не нужно беспокоиться об изменениях часового пояса и изменении времени. Данное правило содержит один недостаток: у помпы Insight очень маленькая внутренняя батарея для хранения времени. во время замены "настоящей" батареи. Если замена батареи занимает слишком много времени, то в этой внутренней батарее может кончиться заряд, время на часах будет сброшено, и вам будет предложено ввести новое время и дату после ее установки. В этом случае все записи до замены батареи пропускаются в расчётах в AAPS, так как правильное время должным образом не может быть определено.

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

## Помпа Accu Chek Combo

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.