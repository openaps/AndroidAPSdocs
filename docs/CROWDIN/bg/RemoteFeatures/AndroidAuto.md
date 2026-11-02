# Android Auto

**AAPS** може да ви изпраща информация за текущото ви състояние като съобщение направо в Android Auto в колата ви.

## Изисквания

**AAPS** uses a feature of Android Auto which allows messages from apps on the mobile to be routed to the display of the car audio system.

Това означава, че:

* Android трябва да позволява на **AAPS** да показва известия и
* Тъй като **AAPS** е неофициално приложение, разрешете използването на „неизвестни източници“ (unknown sources) в Android Auto.

![CGM данни от AAPS в Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Check that AAPS can show notifications

**AAPS** винаги показва известие за статуса с текущата ви КЗ, IOB и COB. Това е известието, което Android Auto показва в колата. В **AAPS** няма нищо за включване, но Android трябва да позволява на **AAPS** да показва известия.

На телефона отворете **Настройки** > **Приложения** > **AAPS** > **Известия** (Settings > Apps > AAPS > Notifications) и се уверете, че **Всички известия от AAPS** (All AAPS notifications) е включено.

![Всички известия от AAPS са включени](../images/android_auto_notifications_all.png)

Превъртете надолу и се уверете, че **Текущ статус** е включено: това е каналът на известието за статуса.

![Каналът за известия „Текущ статус“ е включен](../images/android_auto_ongoing_channel.png)

Моля, проверете сега, че виждате известието за статуса на **AAPS** на телефона, преди да тръгнете към колата!

![Известие на AAPS на телефона](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Allow the use of "unknown sources" with Android Auto.

Тъй като **AAPS** не е официално приложение за Android Auto, известията трябва да бъдат активирани за „неизвестни източници“ (unknown sources) в Android Auto. Това става чрез режима за разработчици, който ще ви покажем тук.

Go to your car and connect your mobile with the car's audio system.

Сега трябва да видите екран, подобен на този.

![Включване на режима за разработчици](../images/android_auto_05.png)

Натиснете иконата **настройки** (setting), за да започнете конфигурацията.

Превъртете надолу до края на страницата и изберете **see more in the phone** (вижте още в телефона).

![Включване на режима за разработчици](../images/android_auto_06.png)

Сега ще активираме режима за разработчици на телефона.

Първият екран изглежда така. Превъртете надолу до края на страницата.

![Включване на режима за разработчици](../images/android_auto_07.png)

Там ще видите посочена версията на Android Auto. Докоснете 10 пъти (с думи: десет) версията на Android Auto. С тази скрита комбинация вече сте включили режима за разработчици.

![Включване на режима за разработчици](../images/android_auto_08.png)

Потвърдете, че искате да включите режима за разработчици, в диалоговия прозорец „Allow development settings?“ (Да се разрешат ли настройките за разработчици?).

![Включване на режима за разработчици](../images/android_auto_09.png)

В **настройките за разработчици** (developer settings) включете „Unknown sources“ (неизвестни източници).

![Включване на режима за разработчици](../images/android_auto_10.png)

Сега можете да излезете от режима за разработчици, ако искате. За целта докоснете менюто с трите точки горе вдясно.

## Показване на известия в колата

Докоснете **иконата с число** долу вдясно в Android Auto в колата.

![икона с число – Android Auto в колата](../images/android_auto_11.png)

Вашите CGM данни ще се показват така:

![CGM данни от AAPS в Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Отстраняване на неизправности:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#androidauto-check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).