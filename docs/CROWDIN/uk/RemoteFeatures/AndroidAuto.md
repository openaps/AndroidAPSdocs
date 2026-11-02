# Android Auto

**AAPS** може надсилати вам інформацію про ваш поточний стан у вигляді повідомлення прямо в Android Auto у вашому автомобілі.

## Вимоги

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

Це означає, що:

* Android має дозволити **AAPS** показувати сповіщення, і
* **AAPS** – неофіційний застосунок, тому потрібно дозволити «unknown sources» (невідомі джерела) в Android Auto.

![Дані CGM з AAPS в Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Перевірте, що AAPS може показувати сповіщення

**AAPS** завжди показує сповіщення про стан із вашою поточною глюкозою, IOB і COB. Саме це сповіщення Android Auto показує в автомобілі. В **AAPS** нічого вмикати не потрібно, але Android має дозволити **AAPS** показувати сповіщення.

На телефоні відкрийте **Settings** (Налаштування) > **Apps** (Застосунки) > **AAPS** > **Notifications** (Сповіщення) і переконайтеся, що **All AAPS notifications** (усі сповіщення AAPS) увімкнено.

![Усі сповіщення AAPS увімкнено](../images/android_auto_notifications_all.png)

Прокрутіть униз і переконайтеся, що **Поточний стан** увімкнено: це канал сповіщення про стан.

![Канал сповіщень «Поточний стан» увімкнено](../images/android_auto_ongoing_channel.png)

Перш ніж іти до автомобіля, перевірте, що ви бачите сповіщення про стан **AAPS** на телефоні!

![Сповіщення AAPS на телефоні](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Дозвольте «unknown sources» (невідомі джерела) в Android Auto.

**AAPS** не є офіційним застосунком Android Auto, тому в Android Auto потрібно увімкнути сповіщення з «unknown sources» (невідомих джерел). Це робиться через режим розробника, який ми тут покажемо.

Go to your car and connect your mobile with the car's audio system.

Тепер ви маєте побачити екран, схожий на цей.

![Увімкнення режиму розробника](../images/android_auto_05.png)

Натисніть значок **setting** (налаштування), щоб почати налаштування.

Прокрутіть сторінку до кінця та виберіть **see more in the phone** (докладніше на телефоні).

![Увімкнення режиму розробника](../images/android_auto_06.png)

Тепер на телефоні ми увімкнемо режим розробника.

Перший екран виглядає так. Прокрутіть сторінку до кінця.

![Увімкнення режиму розробника](../images/android_auto_07.png)

Там ви побачите версію Android Auto. Натисніть 10 разів (десять разів) на версію Android Auto. Цією прихованою комбінацією ви увімкнули режим розробника.

![Увімкнення режиму розробника](../images/android_auto_08.png)

Підтвердьте, що хочете увімкнути режим розробника, у діалоговому вікні «Allow development settings?» (дозволити налаштування розробника?).

![Увімкнення режиму розробника](../images/android_auto_09.png)

У **developer settings** (налаштуваннях розробника) увімкніть «Unknown sources» (невідомі джерела).

![Увімкнення режиму розробника](../images/android_auto_10.png)

Тепер, якщо хочете, можете вийти з режиму розробника. Для цього натисніть меню з трьома крапками вгорі праворуч.

## Показ сповіщень в автомобілі

Натисніть **number icon** (значок із числом) унизу праворуч в Android Auto у вашому автомобілі.

![Значок із числом – Android Auto в автомобілі](../images/android_auto_11.png)

Ваші дані CGM буде показано так:

![Дані CGM з AAPS в Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Усунення проблем:

* Якщо ви не бачите сповіщення, перевірте, чи ви [дозволили AAPS показувати сповіщення](#androidauto-check-that-aaps-can-show-notifications) в Android і чи [Android Auto має право на доступ до сповіщень](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).