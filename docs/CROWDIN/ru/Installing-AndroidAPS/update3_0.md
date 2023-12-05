# Необходимые проверки после обновления AAPS 3.0

* **Минимальная версия Android теперь 9.0.**
* **Данные не перенесены в новую базу данных.**

  Не жалуйтесь, это огромные изменения, поэтому просто невозможно. Таким образом после обновления данные IOB, COB, терапии и т. д. Следует создать новый [профиль](../Usage/Profiles) и начать с нулевыми IOB и COB.

  Планируйте обновление тщательно!!! Лучшая ситуация - без активного инсулина и углеводов

* Подробнее о новых и расширенных функциях смотрите [Примечания к выпускаемой версии](../Installing-AndroidAPS/Releasenotes).


## Проверьте настройки автоматизации

* Были введены новые ограничения. Проверьте настройки автоматизации, особенно если условия остаются в силе.
* Если одно из условий отсутствует, необходимо добавить его снова.
* Если строка автоматизации красная, она содержат недопустимые действия, редактируйте их и приведите к допустимым значениям

  Example: A profile change to 140% was allowed earlier but is now restriced to 130%.

## Check your nsclient settings and set the synchronization complications

* The implementation of the nsclient plugin has changed completly.
* Go to the nsclient tab and open the settings in the right-hand menu. A new preference "Synchronization" is available now.
* You can now make a detailed selection about which items shall be synchronized with your Nightscout site.

## Nightscout profile cannot be pushed
* The nightscout profile is gone, rest in peace!
* To copy your current nightscout profile into a local profile, go to the treatments page (now to be opened in the right-hand menu).
* Search for a profile switch with 100% and press clone.
* A new local profile is added, valid from the current date.
* To update profile from NS side use "Clone" (record!!, not profile) and save changes. You should see "Profile valid from:" set to currrent date.

(update3_0-reset-master-password)=

## Reset master password
* You can now reset your master password in case you have forgotten it.
* You need to add a file named `PasswordReset` to the `/AAPS/extra` directory on your phones fileystem.
* Restart AAPS.
* The new password will be the serial number of your active pump.
* For Dash: The serial number is always 4241.
* For EROS it is also listed on the POD tab as "Sequence Number"

## Warning signal beneath BG

Beginning with Android 3.0, you might get a warning signal beneath your BG number on the main screen.

  ![Red BG warning](../images/bg_warn_red.png)

  ![Yellow BG warning](../images/bg_warn_yellow.png)

For details see [AAPS screens page](Screenshots-bg-warning-sign)


## Failure message: Data from different pump

   ![Failure message: Data from different pump](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](Config-Builder-pump). Change pump to virtual pump and back to your actual pump. This will reset the pump state.
