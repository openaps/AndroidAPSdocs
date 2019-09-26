Удаленный мониторинг
******************

.. image:: ../images/KidsMonitoring.png
  :alt: Мониторинг детей
  
AndroidAPS предлагает несколько опций для удаленного мониторинга детей, а также позволяет отправлять удаленные команды. Конечно, его можно использовать для мониторинга партнера или друга.

Функции
=========
* Помпа ребенка управляется телефоном ребенка с помощью AndroidAPS.
* Родители могут удаленно отслеживать все соответствующие данные, такие как уровни глюкозы, активные углеводы, инсулин и т. д. используя **приложение NSClient** на своих телефонах.
* Родители оповещаются с помощью приложения **xDrip в режиме слежения follower* * на своем телефоне.
* Дистанционное управление AndroidAPS с помощью `SMS команд <../Usage/SMS-Commands.html> ` _.
* Remote profile switch and temp targets through NSClient app.

Tools and apps for remote monitoring
------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ in web browser (mainly data display)
*	NSClient app
*	Dexcom follow if you are using original Dexcom app (BG values only)
*	`xDrip <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
*	`Spike <https://spike-app.com/>`_ on iPhone (mainly BG values and **alarms**)

Things to consider
====================
* Setting the correct `treatment factors <../Getting-Started/FAQ.html#how-to-begin>`_ (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved. 
* So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
* What is your emergency plan when remote control does not work (i.e. network problems)?
* Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the `files section of AndroidAPS users <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ on Facebook.
