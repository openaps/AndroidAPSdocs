# Пересечение часовых зон с помпами

## DanaR, DanaR для корейского рынка

Нет проблем с изменением часового пояса в телефоне, так как в помпе не отслеживается история

(Timezone-traveling-danarv2-danars)=

## DanaRv2 / DanaRS

These pumps need a special care because AndroidAPS is using history from the pump but the records in pump don't have timezone stamp. **That means if you simple change timezone in phone, records will be read with different timezone and will be doubled.**

To avoid this there are two possibilities:

### Вариант 1: продолжать пользоваться домашним временем и специально созданным профилем сдвига по времени

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную).
* Телефон должен продолжать использовать ваше обычное домашнее время на весь период поездки.
* Произведите сдвиг времени вашего профиля в зависимости от разницы во времени между домашним и целевым временем.
   
   * Нажмите и удерживайте название профиля (середина верхнего ряда на домашнем экране)
   * Выберите 'Переключение профиля'
   * Установите 'Сдвиг по времени' в зависимости от места назначения.
   
   ![Переключение профиля с временным сдвигом](../images/ProfileSwitchTimeShift2.png)
   
   * напр. Vienna -> New York: сдвиг профиля +6 часов
   * напр. Vienna -> Sydney: сдвиг профиля --8 часов
* Probably not an option if using [patched LibreLink app](Libre2-time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Вариант 2: Удалить историю работы помпы

* В настройках телефона отключите 'Автоматический выбор даты и времени' (изменение часового пояса вручную)

When get out of plane:

* выключите помпу
* измените часовой пояс на телефоне
* выключите телефон, включите помпу
* выполните очистку истории на помпе
* измените время на помпе
* включите телефон
* позвольте телефону подключиться к помпе и точно подстроить время

(Timezone-traveling-insight)=

## Insight

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

(Timezone-traveling-time-adjustment-daylight-savings-time-dst)=

# Корректировки при переходе на летнее/зимнее время (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

If you bolus with the calculator please don't use COB and IOB unless you made sure they are absolutely correct - better don't use them for a couple of hours after DST switch.

(Timezone-traveling-accu-chek-combo)=

## Помпа Accu Chek Combo

AndroidAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

### Действия перед переводом времени

1. Выключите настройки, которые автоматически устанавливают часовой пояс, чтобы принудительно изменять время, когда захотите. Как это сделать, будет зависеть от вашего смартфона и его версии Android.
   
   * Некоторые из них имеют два параметра, предназначена для автоматической установки времени (которая в идеале должна оставаться) и автоматической установки часового пояса (которую вы должны выключить).
   * К сожалению, некоторые версии Android имеют один переключатель автоматической настройки как времени, так и часового пояса. Его надо пока что отключить.

2. Найдите часовой пояс, который имеет то же время, что и ваше текущее местоположение, но не использует автоматический переход на летнее/зимнее время (DST).
   
   * Список таких стран здесь [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Для среднеевропейского времени CET это может быть "Браззавиль" (Kongo). Измените часовой пояс телефона на Kongo.

3. В AndroidAPS обновите связь с помпой.

4. Перейдите на вкладку терапии... Если видите дублирующие записи:
   
   * НЕ нажимайте "Удалить записи в будущем"
   * Нажмите «удалить» все будущие записи и дубликаты. Это должно сделать недействительными записи терапии но не удалить их, так что они больше не будут влиять на активный инсулин IOB.

5. Если ситуация с активными инсулином/углеводами IOB/COB непонятна, в целях безопасности отключите цикл по крайней мере на один DIA или Max-Carb-Time - в зависимости от того, что больше.*

### Действия после перевода времени

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Измените часовой пояс на ваше текущее местоположение и включите автоматический часовой пояс.
2. AndroidAPS вскоре начнет оповещать вас, что время устройства не совпадает с Combo. Обновите время помпы вручную с помощью экрана и кнопок помпы.
3. На вкладке AndroidAPS “Combo” нажмите Обновить.
4. Затем перейдите на вкладку терапии и проверьте, есть ли события в будущем. Их не должно быть много.
   
   * НЕ нажимайте "Удалить записи в будущем"
   * Нажмите «удалить» все будущие записи и дубликаты. Это должно сделать недействительными записи терапии но не удалить их, так что они больше не будут влиять на активный инсулин IOB.

5. Если ситуация с активными инсулином/углеводами IOB/COB непонятна, в целях безопасности отключите цикл по крайней мере на один DIA или Max-Carb-Time - в зависимости от того, что больше.*

6. Продолжайте как обычно.

## Accu-Chek Insight

* Переключение на DST производится автоматически. Никаких действий не требуется.

## Другие помпы

* Эта функция доступна с AndroidAPS версии 2.2.
* Во избежание непредвиденных сложностей Цикл будет деактивирован на 3 часа после перехода на новое время. Это делается по соображениям безопасности (напр. слишком большой активный инсулин IOB из-за задваивания болюсов перед переходом на летнее/зимнее время).
* На главном экране до перехода на новое время появится уведомление о том, что цикл будет временно отключен. Это сообщение появится без звука, вибрации или чего-нибудь.