# Profile switch/смена профиля

При запуске AndroidAPS и выборе проиля необходимо выполнить "Profile switch" с нулевой продолжительностью действия (объясняется ниже). При этом AAPS начинает отслеживать историю профилей, а каждое новое изменение профиля требует другого "переключения профиля" даже при изменении содержимого профиля в NS. Обновленный профиль немедленно передается в AAPS, но для начала использования этих изменений необходимо снова включить один и тот же профиль (в NS или AAPS).

Внутри себя AAPS создает моментальную копию профиля с начальной датой и длительностью и использует ее в выбранный период. Нулевая длительность означает постоянную работу. Такой профиль действителен до нового "переключения профиля".

Для того чтобы переключить профиль выполните долгое нажатие на название текущего профиля ("Aktuell (Rad)" на рисунке ниже) и выберите переключить профиль.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Если вы используете "Переключатель профиля" с указанием длительности, то профиль вернется на предыдущий допустимый

Если вы используете локальные профили AAPS (Simple, Local, CPP), вы должны нажать эту кнопку, чтобы применить изменения (это создает правильное событие "Profile switch").

В рамках "переключения профиля" можно выбрать два дополнительных изменения, которые раньше были частью суточного процентного профиля Circadian Percentage Profile:

## Процент

* Это применяет одинаковый процент ко всем параметрам. 
* Если установить его на 130% (то есть вы на 30% более инсулинорезистентны), то он повысит базальную скорость на 30%. Кроме того, соответственно снизится чувствительность к инсулину ISF и соотношение инсулин-углеводы (делятся на 1.3 в данном примере).
  
  ![Example profile switch percentage](../images/ProfileSwitchPercentage.png)

* Эти установки будут отправлены в помпу, а затем будут использоваться по умолчанию.

* Алгоритм цикла (открытый или закрытый) продолжит работу на основе выбранного процентного профиля. Так, отдельные процентные профили могут быть установлены для различных этапов гормонального цикла.

## Сдвиг по времени

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

* Эта установка позволяет сместить профиль на введенное число часов. 
* So, for example, when working night shifts change the number of hours to how much later/earlier you go to bed or wake up.
* It is always a question of which hour's profile settings should replace the settings of the current time. This time must be shifted by x hours. So be aware of the directions as described in the following example: 
  * Current time: 12:00
  * **Positive** time shift 
    * 2:00 **+10 h** -> 12:00
    * Settings from 2:00 will be used instead of the settings normally used at 12:00 because of the positive time shift.
  * **Negative** time shift 
    * 22:00 **-10 h** -> 12:00
    * Settings from 22:00 (10 pm) will be used instead of the settings normally used at 12:00 because of the negative time shift.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Troubleshooting Profile Errors

### 'Invalid profile' / 'Basal Profile not aligned to hours'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* These error messages will appear if you have any basal rates or I:C rates not on the hour. (DanaR and DanaRS pumps do not support changes on the half hour for example.)
  
  ![Example profile not aligned to hours](../images/ProfileNotAlignedToHours.png)

* Remember / note down date and time shown in the error message (26/07/2019 5:45 pm in screenshot above).

* Go to Treatments tab
* Select ProfileSwitch
* Scroll until you find date and time from error message.
* Use remove function.
* Sometimes there is not only one faulty profile switch. In this case remove also the others.
  
  ![Remove profile switch](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'Received profile switch from NS but profile does not exist locally'

* The requested profile was not synced correctly from Nightscout.
* Follow instructions from above to delte the profile switch

Alternatively you can delete the profile switch directly in mLab:

* Go to your mlab collection
* Search in the treatments for profile switch
* Delete the profile switch with date and time that was mentioned in the error message. ![mlab](../images/mLabDeletePS.png)

### 'DIA 3hr too short'

* Error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. 
* Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a [Profile Switch](../Usage/Profiles) to continue.