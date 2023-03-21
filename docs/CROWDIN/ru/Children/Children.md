# Удаленный мониторинг

```{image} ../images/KidsMonitoring.png
:alt: Мониторинг детей
```

AndroidAPS предлагает несколько опций для удаленного мониторинга детей, а также позволяет отправлять удаленные команды. Конечно, его можно использовать для мониторинга партнера или друга.

## Функции

- Помпа ребенка управляется телефоном ребенка с помощью AndroidAPS.
- Родители могут дистанционно следить за всеми необходимыми данными, такими как уровень глюкозы, активные углеводы, активный инсулин и т. д. с помощью приложения **NSClient** на телефоне. Настройки должны быть одинаковыми в AAPS и NSClient.
- Родители оповещаются с помощью приложения **xDrip в режиме слежения follower** на своем телефоне.
- Remote control of AndroidAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Дистанционное управление через приложение NSClient рекомендуется только в том случае, если синхронизация работает хорошо (т. е. вы не видите нежелательных изменений данных, таких как спонтанная модификация TT, TBR и т. д.,) см. [примечания к выпуску версии 2.8.1.1](Releasenotes-important-hints-2-8-1-1) для получения более подробной информации.

## Инструменты и приложения для удаленного мониторинга

- [Nightscout](https://nightscout.github.io/) в веб-браузере (главным образом отображение данных)
- NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
- Dexcom follow if you are using original Dexcom app (BG values only)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## Things to consider

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Настройки должны быть одинаковыми в AAPS и NSClient.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the [files section of AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
