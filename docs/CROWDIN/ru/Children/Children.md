# Удаленный мониторинг

```{image} ../images/KidsMonitoring.png
:alt: Мониторинг детей
```

AAPS предлагает несколько опций для удаленного мониторинга детей, а также позволяет отправлять удаленные команды. Конечно, его можно использовать для мониторинга партнера или друга.

## Функции

- Помпа ребенка управляется телефоном ребенка с помощью AAPS.
- Родители могут дистанционно следить за всеми данными, такими как уровень глюкозы, активные углеводы, активный инсулин и т. д. с помощью приложения **NSClient** на своем телефоне. Настройки должны быть одинаковыми в AAPS и NSClient.
- Родители могут слышать оповещения с помощью приложения **xDrip в режиме слежения (follower)** на своем телефоне.
- Удаленный контроль над AAPS с помощью [SMS -команд ](../Children/SMS-Commands.md) защищен двухфакторной аутентификацией.
- Дистанционное управление через приложение NSClient рекомендуется только в том случае, если хорошо работает синхронизация (т. е. вы не видите нежелательных изменений данных, таких как спонтанная модификация TT, TBR и т. д.), подробнее см. [примечания к выпуску версии 2.8.1.1](Releasenotes-important-hints-2-8-1-1).

## Инструменты и приложения для удаленного мониторинга

- [Nightscout](https://nightscout.github.io/) в интернет-браузере (в основном отображение данных)
- * Приложение NSClient-это урезанная версии AAPS для слежения, переключения профилей, постановки временных целей TT и ввода углеводов. Существует два приложения для загрузки:  [NSClient & NSClient2](https://github.com/nightscout/AndroidAPS/releases/). Единственное отличие-это название приложения. Таким образом имеется возможность установить приложение дважды на одном телефоне, чтобы следить за 2 разными лицами/nightscout.
- Приложение Dexcom Follow, если вы используете оригинальное приложение Dexcom (только ГК)
- [xDrip+](../Configuration/xdrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) или [Spike](https://spike-app.com/) на iOS (в основном значения ГК и <1>оповещения</1>)
- Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting

## Опции для смарт-часов

Смарт-часы бывают очень полезным инструментом для управления AAPS у детей. Возможны несколько различных конфигураций:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. На них будет отображаться текущая ГК, статус замкнутого цикла, возможность вписать углеводы, временные цели и изменения профиля. Возможности ввести болюс с приложения на WearOS не будет.
- В альтернативном варианте, приложение [AAPS WearOS](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) можно создать и установить на совместимых смарт-часах, подключенных к телефону ребенка, но носимых родителем. В него войдут все перечисленные выше функции, а также возможность подать болюс. Эта конфигурация позволяет родителям подавать инсулин без обращения к телефону ребенка.

## Важные факторы

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Настройки должны быть одинаковыми в AAPS и NSClient.
- Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
- So take your time to set those correctly and test them in real life with your kid next to you before starting remote monitoring and remote treatment. School holidays might be a good time for that.
- What is your emergency plan when remote control does not work (i.e. network problems)?
- Remote monitoring and treatment can be really helpful in kinder garden and elementary school. But make sure the teachers and educators are aware of your kid's treatment plan. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
