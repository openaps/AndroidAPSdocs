# Удаленный мониторинг

![Monitoring children](../images/KidsMonitoring.png)

AAPS предлагает несколько опций для удаленного мониторинга детей, а также позволяет отправлять удаленные команды. Конечно, его можно использовать для мониторинга партнера или друга.

## Функции

- Помпа ребенка управляется телефоном ребенка с помощью AAPS.
- Родители могут дистанционно следить за всеми данными, такими как уровень глюкозы, активные углеводы, активный инсулин и т. д. с помощью приложения **AAPSClient** на своем телефоне. Настройки должны быть одинаковыми в AAPS и AAPSClient.
- Родители могут слышать оповещения с помощью приложения **xDrip в режиме слежения (follower)** на своем телефоне.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## Инструменты и приложения для удаленного мониторинга

- [Nightscout](https://nightscout.github.io/) в интернет-браузере (в основном отображение данных)
- * Приложение AAPSClient-это урезанная версии AAPS для слежения, переключения профилей, постановки временных целей TT и ввода углеводов. Существует два приложения для загрузки:  [AAPSClient & AAPSClient2](https://github.com/nightscout/AndroidAPS/releases/). Единственное отличие-это название приложения. Таким образом имеется возможность установить приложение дважды на одном телефоне, чтобы следить за 2 разными лицами/nightscout.
- Приложение Dexcom Follow, если вы используете оригинальное приложение Dexcom (только ГК)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) или [Spike](https://spike-app.com/) на iOS (в основном значения ГК и <1>оповещения</1>)
- Некоторые пользователи считают, что инструменты полного доступа к телефону ребенка вроде [TeamViewer](https://www.teamviewer.com/) полезны для решения ситуативных проблем

## Опции для смарт-часов

Смарт-часы бывают очень полезным инструментом для управления AAPS у детей. Возможны несколько различных конфигураций:

- Если AAPSClient установлен на родительский телефон,, приложение [AAPSClient WearOS](https://github.com/nightscout/AndroidAPS/releases/) может быть установлено на смарт-часах, сопряженных с родительским телефоном. На них будет отображаться текущая ГК, статус замкнутого цикла, возможность вписать углеводы, временные цели и изменения профиля. Возможности ввести болюс с приложения на WearOS не будет.
- Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. В него войдут все перечисленные выше функции, а также возможность подать болюс. Эта конфигурация позволяет родителям подавать инсулин без обращения к телефону ребенка.

## Важные факторы

- Настройки должны быть одинаковыми в AAPS и AAPSClient.
- Учитывайте временной разрыв между ведущим телефоном и ведомым из-за времени на загрузку и выгрузку, а также из-за того, что ведущий телефон AAPS начнет выгрузку только после выполнения цикла.
- What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use temporary profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.