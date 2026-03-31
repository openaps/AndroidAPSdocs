# Timezone Change and Daylight Saving

## Пересечение часовых зон с помпами

## Timezone change for Omnipod Dash

* Refresh the Dash tab
* Temporarily select a different **Profile** and then switch back to your original or desired **Profile**

## Timezone change for DanaR, Korean DanaR

Нет проблем с изменением часового пояса в телефоне, так как в помпе не отслеживается история

## Timezone change for DanaRv2, DanaRS

These pumps require special care because **AAPS** uses history from the pump but the records in pump do not have timezone stamp. **This means that if you change time zone in your phone, records will be read with different time zone and will be doubled.**

Во избежание этого существует две возможности:

### Вариант 1: продолжать пользоваться домашним временем и специально созданным профилем сдвига по времени

* Turn off 'Automatic date and time' in your phone's settings (manual time zone change).

* Your phone must keep your standard time as at home for the whole travel period.

* Time-shift your **Profile** according to time difference between home time and destination time.
   
   * Long-press **Profile** name (middle of top section on homescreen)
   * Select '**Profile Switch**'
   * Установите 'Сдвиг по времени' в зависимости от места назначения.
   
   ![Смена профиля с временным сдвигом](../images/ProfileSwitchTimeShift2.png)
   
   * i.e. Vienna -> New York: **Profile Switch** +6 hours
   * i.e. Vienna -> Sydney: **Profile Switch** -8 hours

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

## Timezone Change for Insight

Драйвер автоматически синхрониззирует время на помпе и на телефоне.

Insight также регистрирует прошедшие записи и момент смены времени и продолжительность до текущего момента. So the correct time can be determined in **AAPS** despite the time change.

It may cause inaccuracies in the **TDDs**. Однако это не должно быть проблемой.

Поэтому пользователю Insight не нужно беспокоиться об изменениях часового пояса и изменении времени. Данное правило содержит один недостаток: у помпы Insight очень маленькая внутренняя батарея для хранения времени. во время замены "настоящей" батареи. Если замена батареи занимает слишком много времени, то в этой внутренней батарее может кончиться заряд, время на часах будет сброшено, и вам будет предложено ввести новое время и дату после ее установки. В этом случае все записи до замены батареи пропускаются в расчётах в AAPS, так как правильное время должным образом не может быть определено.

## Timezone Change for Accu-Chek Combo

[новый драйвер Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) автоматически синхронизирует время на помпе и время на телефоне. Combo не может хранить часовые пояса, только местное время, и новый драйвер программирует в помпе именно текущее местное время. Кроме того, драйвер хранит часовой пояс в локальных настройках AAPS, чтобы иметь возможность преобразовать местное время помпы в текущее время при смещении часового пояса. Пользователю не надо ничего делать; если время в Combo слишком сильно отклоняется от текущего времени телефона, время помпы регулируется автоматически.

Заметьте, что это занимает некоторое время, так как происходит в режиме дистанционного терминала, который работает медленно. Это ограничение Combo не может быть преодолено.

Старый, основанный на Ruffy драйвер не настраивает время автоматически. Пользователь должен делать это вручную. Ниже вы можете ознакомиться с шагами, необходимыми для безопасной перенастройки в случае, если причиной изменения является часовой пояс / сезонное время.

## Timezone Change for Medtrum

Драйвер автоматически синхрониззирует время на помпе и на телефоне.

Time zone changes keep the history intact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and **IOB**. If you change time manually double check the **IOB**.

When the time zone or time changes running **TBR's** are stopped.

## DAYLIGHT SAVING (DST)

Time adjustment daylight savings time

Depending on your pump and CGM setup, jumps in time can lead to problems with **AAPS** to function correctlyy. For instance with the Combo pump, the pump history is read twice leading to duplicate entries. For some pumps it is better to make time zone adjustments while awake and not during the night.

### DST automatic adjustment for most pumps

* This adjustment feature is available for **AAPS** version 2.2 onwards.
* Howeever, the fully closed Loop will be deactivated for 3 hours AFTER the DST switch (usually 1am onwards) has taken place and **AAPS** will default to background basal as selected in your **Profile**. This is done for safety reasons - **IOB** may be too high due to duplicated bolus prior to DST change.
* After DST has taken place, select **Profile Switch** to user's desired **Profile** to enable fully closed Loop.
* You will also receive a notification on **AAPS** main screen prior to DST change that the Fully Closed Loop has been disabled temporarily. This message will appear without beep, vibration or anything.**

If you bolus with **AAPS'** calculator please do not use **COB** and **IOB** data unless you are sure this data is absolutely correct. Take caution and do not use this feature for a couple of hours after DST switch has taken place.

### DST for Accu-Chek Insight

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Medtrum

* Переключение на DST производится автоматически. Никаких действий не требуется.

### DST for Omnipod Dash

* Either allow **AAPS** to temporarily default background basal after DST has taken place as explained above.
* Otherwise, if you do not want **AAPS** to temporarily default to background basal overnight, you can change the time zone the day prior DST is due to take place to avoid overnight disruption. NOTE THIS OPTION MAY CAUSE YOUR POD TO PREMATURELY EXPIRE. PLEASE HAVE SUPPLIES WITH YOU IF OPTING FOR THE FEATURE BELOW.

#### Действия перед переводом времени

1. Switch OFF any Phone's settings that automatically sets the Phone's time zone, so the user can change to a time zone that does not use DST. How to enable this will depend on your smartphone and Android version.
   
   * Some phones have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the time zone (which you must turn OFF).
   * Unfortunately, some Android versions have a single switch to enable automatic setting of both the time and the timezone. Его надо пока что отключить.

<img width="576" height="1289" alt="Screenshot_20260329-110315 (1)" src="https://github.com/user-attachments/assets/ca40c1c6-1697-4832-ae10-5cf6a1dc0bce" />

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Список таких стран здесь [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Для среднеевропейского времени CET это может быть "Браззавиль" (Kongo). Измените часовой пояс телефона на Kongo.

<img width="576" height="1289" alt="Screenshot_20260329-111830" src="https://github.com/user-attachments/assets/b7b7f738-f91e-40df-ad79-f404fbfb9ae6" />

3. **AAPS** refresh your pump and switch to your desired **Profile**.

4. Check **AAPS's** **IOB** and **COB** and if this is inaccurate disable the Fully Closed Loop for at least one DIA and Max-Carb-Time - whatever is bigger.

5. Actions to take after the clock change. A good time to make revert to local time zone is with low **IOB**. E.g. an hour before a meal such as breakfast. Ideally your **COB** and **IOB** should both be close to zero.

### DST for Accu-Chek Combo

This section is only valid for the old, Ruffy-based driver. Новый драйвер настраивает дату, текущее и сезонное время автоматически.

**AAPS** will issue an alarm if the time between pump and phone differs too much. При переходе на летнее/зимнее время это происходило бы посреди ночи. Чтобы предотвратить это и не нарушать свой сон, выполните следующие шаги:

#### Действия перед переводом времени

1. Выключите настройки, которые автоматически устанавливают часовой пояс, чтобы принудительно изменять время, когда захотите. Как это сделать, будет зависеть от вашего смартфона и его версии Android.
   
   * Некоторые из них имеют два параметра, предназначена для автоматической установки времени (которая в идеале должна оставаться) и автоматической установки часового пояса (которую вы должны выключить).
   * К сожалению, некоторые версии Android имеют один переключатель автоматической настройки как времени, так и часового пояса. Его надо пока что отключить.
   
   Screenshot_20260329-110315 (1)

2. Find a timezone that has the same time as your current location but doesn't use DST.
   
   * Список таких стран здесь [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Для среднеевропейского времени CET это может быть "Браззавиль" (Kongo). Измените часовой пояс телефона на Kongo.

3. In **AAPS** refresh your pump.

4. Перейдите на вкладку терапии... Если видите дублирующие записи:
   
   * НЕ нажимайте "Удалить записи в будущем"
   * Нажмите «удалить» все будущие записи и дубликаты. Это должно сделать недействительными записи терапии но не удалить их, так что они больше не будут влиять на активный инсулин IOB.

5. Если ситуация с активными инсулином/углеводами IOB/COB непонятна, в целях безопасности отключите цикл по крайней мере на один DIA или Max-Carb-Time - в зависимости от того, что больше.*

#### Действия после перевода времени

A good time to make this switch would be with low **IOB**. Например, за час до завтрака, (все болюсы в истории помпы будут представлены в виде небольших SMB. Your **COB** and **IOB** should both be close to zero.)

1. Измените часовой пояс на ваше текущее местоположение и включите автоматический часовой пояс.
2. **AAPS** will soon start alerting you that the Combo’s clock doesn’t match. Обновите время помпы вручную с помощью экрана и кнопок помпы.
3. On the **AAPS** “Combo” screen, press Refresh.
4. Затем перейдите на вкладку терапии и проверьте, есть ли события в будущем. Их не должно быть много.
   
   * НЕ нажимайте "Удалить записи в будущем"
   * Нажмите «удалить» все будущие записи и дубликаты. Это должно сделать недействительными записи терапии но не удалить их, так что они больше не будут влиять на активный инсулин IOB.

5. Если ситуация с активными инсулином/углеводами IOB/COB непонятна, в целях безопасности отключите цикл по крайней мере на один DIA или Max-Carb-Time - в зависимости от того, что больше.*

6. Продолжайте как обычно.