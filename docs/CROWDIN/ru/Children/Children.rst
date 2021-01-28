Удаленный мониторинг
**************************************************

.. image:: ../images/KidsMonitoring.png
  :alt: Мониторинг детей
  
AndroidAPS предлагает несколько опций для удаленного мониторинга детей, а также позволяет отправлять удаленные команды. Конечно, его можно использовать для мониторинга партнера или друга.

Функции
==================================================
* Помпа ребенка управляется телефоном ребенка с помощью AndroidAPS.
* Родители могут удаленно отслеживать все соответствующие данные, такие как уровни глюкозы, активные углеводы, инсулин и т. д. используя **приложение NSClient** на своих телефонах. Settings must be the same in AndroidAPS and NSClient app.
* Родители оповещаются с помощью приложения **xDrip в режиме слежения follower* * на своем телефоне.
* Удаленный контроль над AndroidAPS с помощью ` SMS Commands <../Children/SMS-Commands.html> ` _ защищен двухфакторной аутентификацией.
* Удаленный контроль через приложение NSClient рекомендуется только в том случае, если синхронизация работает хорошо (т. е. you don’t see unwanted data changes like self modification of TT, TBR etc) see `release notes for Version 2.8.1.1 <https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for further details.

Инструменты и приложения для удаленного мониторинга
==================================================
* " Nightscout <http://www.nightscout.info/>` _ в браузере (в основном отображение данных)
*	NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  `NSClient & NSClient2 to download <https://github.com/nightscout/AndroidAPS/releases/>`_. The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
*Приложение Dexcom Follow, если вы используете оригинальное приложение Dexcom (только ГК)
* `xDrip <../Configuration/xdrip.html>`_ в режиме слежения follower (в основном значения ГК и **оповещения**)
* ` Sugarmate <https://sugarmate.io/>_ или ` Spike <https://spike-app.com/> _ на iOS (в основном значения ГК и ** оповещения**)

Важные факторы
==================================================
* Определение правильных `факторов лечения <../Getting-Started/FAQ.html#how-to-begin>`_ (скорость базала, время действия инсулина DIA, чувствительность к инсулину ISF...) - затруднено у детей, особенно, когда участвуют гормоны роста. 
* Settings must be the same in AndroidAPS and NSClient app.
* Учитывайте временной разрыв между ведущим телефоном и ведомым из-за времени на загрузку и выгрузку, а также из-за того, что ведущий телефон AAPS начнет выгрузку только после выполнения цикла.
* Так что не торопитесь, установите их правильно и проверьте их в реальной жизни когда ребенок рядом прежде чем начать дистанционный контроль и дистанционное лечение. Школьные каникулы могут быть хорошим временем для этого.
* Определите план действий на тот случай, когда дистанционный контроль не работает (напр. проблемы сети)
* Удаленный мониторинг и лечение может быть очень полезно в детском саду и начальной школе. Но убедитесь, что учителя и воспитатели в курсе плана лечения вашего ребенка. Примеры таких планов можно найти в разделе `файлы пользователей AndroidAPS <https://www.facebook.com/groups/AndroidAPSUsers/files/>` _ на Facebook.
