# Android Auto

** AAPS ** может отправлять информацию о ваших текущих данных в виде сообщения непосредственно в Android Auto в автомобиле.

## Что потребуется:

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

Это означает, что:

* Android must allow **AAPS** to show notifications and
* Поскольку **AAPS** неофициальное приложени, то следует дать разрешение для "неизвестных источников" в Android Auto.

![Данные AAPS CGM на Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Check that AAPS can show notifications

**AAPS** always shows a status notification with your current glucose, IOB and COB. This is the notification that Android Auto displays in the car. There is nothing to switch on in **AAPS**, but Android must allow **AAPS** to show notifications.

On your phone, open **Settings** > **Apps** > **AAPS** > **Notifications** and make sure **All AAPS notifications** is on.

![All AAPS notifications switched on](../images/android_auto_notifications_all.png)

Scroll down and make sure **Ongoing status** is on: this is the channel of the status notification.

![Ongoing status notification channel switched on](../images/android_auto_ongoing_channel.png)

Please check now that you see the **AAPS** status notification on the phone before you walk to your car!

![AAPS notification on the phone](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## В Android Auto разрешите использоВание "неизВестных источникоВ".

Так как AAPS не является официальным приложением Android Auto, в Android Auto. нужно активировать уведомления из "неизвестных источников". Это делается с помощью режима разработчика, который мы покажем здесь.

Go to your car and connect your mobile with the car's audio system.

Должен появиться экран, похожий на этот.

![Включите режим разработчика](../images/android_auto_05.png)

Нажмите на иконку **настроек** чтобы начать конфигурацию.

Прокрутите вниз до конца страницы и выберите **см. больше в телефоне**.

![Включите режим разработчика](../images/android_auto_06.png)

Теперь, на мобильном устройстве, активируем режим разработчика.

Первый экран выглядит так. Прокрутите вниз до конца страницы.

![Включите режим разработчика](../images/android_auto_07.png)

Там в списке вы видите версию Android Auto. Нажмите 10 раз (буквально десять) на версию Android Auto. Этой скрытой комбинацией вы открываете режим разработчика.

![Включите режим разработчика](../images/android_auto_08.png)

Подтвердите, что вы хотите включить режим разработчика в диалоге "Разрешить настройки разработки?".

![Включите режим разработчика](../images/android_auto_09.png)

В настройках **разработчика** включите "Неизвестные источники".

![Включите режим разработчика](../images/android_auto_10.png)

Теперь можно выйти из режима разработчика. Чтобы сделать это, нажмите на три точки меню вверху справа.

## Показывать уведомления в автомобиле

Коснитесь **значка № ** на нижней панели меню Android Авто в автомобиле.

![иконка номера - Android Auto в автомобиле](../images/android_auto_11.png)

Значения гликемии будут показаны следующим образом:

![Данные AAPS CGM на Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Устранение неполадок:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#androidauto-check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).