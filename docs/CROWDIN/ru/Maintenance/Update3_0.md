# Необходимые проверки после обновления AAPS 3.0

* **Минимальная версия Android теперь 9.0.**
* **Данные не перенесены в новую базу данных.**

  Не жалуйтесь, это огромные изменения, поэтому просто невозможно. Таким образом после обновления данные IOB, COB, терапии и т. д. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB.

  Планируйте обновление тщательно!!! Лучшая ситуация - без активного инсулина и углеводов

* Please see the [Release Notes](../Maintenance/ReleaseNotes.md) for details on new and changed features.


## Проверьте настройки автоматизации

* Были введены новые ограничения. Проверьте настройки автоматизации, особенно если условия остаются в силе.
* Если одно из условий отсутствует, необходимо добавить его снова.
* Если строка автоматизации красная, она содержат недопустимые действия, редактируйте их и приведите к допустимым значениям

  Example: A profile change to 140% was allowed earlier but is now restricted to 130%.

## Проверьте настройки nsclient и установите детали синхронизации

* The implementation of the nsclient plugin has changed completely.
* Перейдите на вкладку nsclient и откройте настройки в правом меню. Теперь доступна новая настройка "Синхронизация".
* Теперь можно сделать подробный выбор того, какие элементы должны синхронизироваться с сайтом Nightscout.

(Update3_0-nightscout-profile-cannot-be-pushed)=
## Профиль Nightscout нельзя передать при помощи технологии Push
* Профиля Nightscout больше нет в AAPS, пусть покоится с миром!
* Чтобы скопировать текущий профиль Nightscout в локальный профиль, перейдите на страницу терапии (теперь будет открываться в правом меню).
* Найдите переключатель профиля со 100% и нажмите на клонировать.
* Добавлен новый локальный профиль, действительный с текущей даты.
* Для обновления профиля из NS используйте команду "клонировать" ( "Clone") (записи!!!, не сам профиль) и сохраните изменения. You should see "Profile valid from:" set to current date.

(Update3_0-reset-master-password)=
## Сброс главного пароля
* Теперь можно сбросить главный пароль если вы его забыли.
* You need to add a file named `PasswordReset` to the `/AAPS/extra` directory on your phones filesystem.
* Перезапустить AAPS.
* Новый пароль будет серийным номером Вашей активной помпы.
* Для Даш: Серийный номер всегда 4241.
* Для EROS он указан на вкладке POD как "Sequence Number"

## Предупреждающий сигнал под цифрами гликемии

Начиная с Android 3.0, вы можете увидеть предупреждающий знак под числом ГК на главном экране.

  ![Красное предупреждение о ГК](../images/bg_warn_red.png)

  ![Желтое предупреждение о ГК](../images/bg_warn_yellow.png)

For details see [AAPS screens page](#aaps-screens-bg-warning-sign)

(update30-failure-message-data-from-different-pump)=
## Сообщение об ошибке: данные поступают с другой помпы

   ![Сообщение об ошибке: данные поступают с другой помпы](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](#Config-Builder-pump). Переключите помпу на виртуальную и вернитесь на реальную. Состояние помпы будет сброшено.
