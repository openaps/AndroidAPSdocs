# Удаленный мониторинг

```{image} ../images/KidsMonitoring.png
:alt: Мониторинг детей
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## Функции

- Kid's pump is controlled by kid's phone using AAPS.
- Родители могут дистанционно следить за всеми необходимыми данными, такими как уровень глюкозы, активные углеводы, активный инсулин и т. д. с помощью приложения **NSClient** на телефоне. Settings must be the same in AAPS and NSClient app.
- Родители оповещаются с помощью приложения **xDrip в режиме слежения follower** на своем телефоне.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Дистанционное управление через приложение NSClient рекомендуется только в том случае, если синхронизация работает хорошо (т. е. вы не видите нежелательных изменений данных, таких как спонтанная модификация TT, TBR и т. д.,) см. [примечания к выпуску версии 2.8.1.1](Releasenotes-important-hints-2-8-1-1) для получения более подробной информации.

## Инструменты и приложения для удаленного мониторинга

- [Nightscout](https://nightscout.github.io/) в веб-браузере (главным образом отображение данных)
- * Приложение NSClient-это урезанная версии AAPS для слежения, переключения профилей, постановки временных целей TT и ввода углеводов. There are 2 apps:  [NSClient & NSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). Единственное различие-это название приложения. Таким образом имеется возможность установить приложение дважды на одном телефоне, чтобы следить за 2 разными лицами/nightscout.
- Приложение Dexcom Follow, если вы используете оригинальное приложение Dexcom (только ГК)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## Важные факторы

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Settings must be the same in AAPS and NSClient app.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
