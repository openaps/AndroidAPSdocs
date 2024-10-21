# Обзор компонентов

AAPS не просто приложение (самостоятельно собранное), это лишь один из модулей закрытой системы ИПЖ. Прежде чем выбрать конкретные компоненты, следует также изучить особенности [их настройки](index-component-setup).

![Components overview](../images/modules.png)

```{note}
**ВАЖНОЕ ЗАМЕЧАНИЕ О БЕЗОПАСНОСТИ**

Безопасность функционирования функций AAPS, обсуждаемых в этой документации, основана на безопасности всех устройств, используемых в вашей системе. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. *Не используйте* модифицированные, самодельные или испорченные инсулиновые помпы и/или устройства мониторинга для создания системы AAPS.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
```

## Необходимые модули

### Хорошо подобранные дозы и коэффициенты для компенсации

Хотя его нельзя сконструировать или купить, это, вероятно, самый недооцениваемый "модуль", существенно важный для системы. Когда алгоритму доверяется управлять диабетом, следует знать правильные настройки, чтобы не допустить серьезных ошибок. Даже если у вас еще нет других модулей, вы можете в сотрудничестве с вашим эндокринологом проверить и адаптировать свой профиль. Большинство пользователей систем ИПЖ используют циклические суточные величины скорости базала (BR), гормональную чувствительность к инсулину ISF и углеводный коэффициент CR.

Профиль включает

- BR (скорость подачи базового инсулина)
- ISF (коэффициент чувствительности к инсулину) определяет вашу величину понижения ГК в результате введения 1 единицы инсулина
- CR (углеводный коэффициент) количество граммов углеводов, компенсируемое 1 единицей инсулина
- DIA (продолжительность действия инсулина).

(module-no-use-of-sglt-2-inhibitors)=
### Не использовать SGLT-2 ингибиторы

SGLT-2 ингибиторы, которые также называются глифлозины, блокируют реабсорбцию глюкозы в почках. Поскольку они непредсказуемо снижают уровень глюкозы крови, их НЕЛЬЗЯ применять при использовании таких систем как AAPS! Существует огромный риск возникновения кетоацидоза или гипогликемии! Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.

(module-phone)=
### Телефон

Текущая версия AndroidAPS требует Android-смартфона с Google Android 9.0 или выше. Так что если вы думаете о новом телефоне, рекомендуем хотя бы Android 9., но оптимально Android 10 или 12. For older Android versions, older AAPS versions are available see: [Release notes](../Maintenance/ReleaseNotes.md#android-version-and-aaps-version)

Пользователи создают список протестированных телефонов [и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

Для того, чтобы включить в список телефон, который не занесен в таблицу, заполните форму [](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

При обнаружении проблем с таблицей пишите [hardware@androidaps.org](mailto:hardware@androidaps.org), для пожертвования телефонов/часов, нуждающихся в тестировании, пишите [donations@androidaps.org](mailto:hardware@androidaps.org).

### Инсулиновая помпа

AAPS **в настоящее время** работает с

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump.md)  (Old driver that uses the additional Ruffy app)
- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (New driver, available starting with AndroidAPS v.3.2)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#additional-communication-device) needed)
- [Помпа Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Инсулиновая помпа Medtrum Nano](../CompatiblePumps/MedtrumNano.md)
- [Инсулиновая помпа Medtrum 300U](../CompatiblePumps/MedtrumNano.md)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#additional-communication-device) needed)

Если не упомянуто дополнительное коммуникационное устройство, то связь между помпой и AndroidAPS происходит за счет встроенного модуля bluetooth без необходимости дополнительного протокола коммуникации.

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../CompatiblePumps/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Дополнительное устройство коммуникации

Для старых помп Medtronic требуется дополнительное устройство коммуникации (кроме телефона) для "перевода" радиосигнала от помпы на Bluetooth. Убедитесь, что выбрана правильная версия для вашей помпы.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  Сайт [OrangeLink ](https://getrileylink.org/product/orangelink)
- ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  Сайт [Emalink](https://github.com/sks01/EmaLink) - [Контактная информация](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контактная информация](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink сайт](https://www.getlooplink.org/) - [Контактная информация](https://jameswedding.substack.com/) - Непроверено

**Какая же самая лучшая помпа для работы с AndroidAPS?**

Combo, Insight и старые Medtronic – это надежные помпы, которые можно использовать в системах замкнутого цикла. У Combo преимущество выбора инфузионной системы, так как в ней применен стандартный разъем типа luer. А батарею вы можете купить на любой заправочной станции или в круглосуточно работающем магазине, а при необходимости ее можно добыть из пульта дистанционного управления в номере отеля ;-).

Однако преимущества помп Dana R/ RS и Dana-i по сравнению с Combo следующие:

- Помпы Dana сопрягается почти с любым телефоном на Android без необходимости перепрошивки на Lineage OS. Если телефон сломается, ему быстро найдется замена, которая работает с Dana... С Combo сложнее. (Ситуация может измениться, когда Android 8.1 станет более популярным)
- Первоначальное сопряжение проходит проще с Dana-i/RS. Но обычно это делается только один раз, так что это свойство важно, если хотите проверить новую функцию на других помпах.
- На данный момент Combo работает с экранным анализом (для обратного инжиниринга). В целом, это неплохо, но этот процесс идет медленно. Для цикла ИПЖ это не имеет значения, так как он работает в фоновом режиме. Тем не менее, требуется больше времени на соединение и, соответственно, больше возможности его разорвать, что плохо, если вы отошли от телефона, например, во время болюса, когда готовите пищу.
- Combo вибрирует по завершении временных базалов TBR, Dana вибрирует (или пищит) на микроболюсах SMB. В ночное время вы, скорее всего, будете использовать TBR а не SMB.  Dana-i/RS может быть сконфигурирована так, что не будет ни вибрировать ни пищать.
- Чтение истории на Dana-i/RS происходит за секунды и позволяет легко заменить телефон в автономном режиме и продолжать работу с появлением новых значений мониторинга CGM.
- Все помпы, с которыми работает AndroidAPS, изначально водонепроницаемы. Но только помпы Dana также "гарантированно водонепроницаемы" благодаря изолированным отсекам батареи и системы наполнения резервуара.

### Источник данных гликемии

Это всего лишь краткий обзор совместимых с AndroidAPS систем мониторинга ГК. For further details, look [here](CompatiblesCgms.md). Небольшая подсказка: если данные ГК могут приниматься приложением xDrip+ или на веб-сайте Nightscout, вы можете выбрать xDrip+ (или Nightscout с интернет-соединением) как источник ГК в AAPS.

- [Dexcom G7](../CompatibleCgms/DexcomG7.md): Works with xDrip+ or patched app
- [Dexcom G6](../CompatibleCgms/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](../Maintenance/ReleaseNotes.md#version-300) for details). xDrip+ должен быть по крайней мере версии 2022.01.14 или новее
- [Dexcom G5](../CompatibleCgms/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Libre 3](../CompatibleCgms/Libre3.md): It works with xDrip+ (no transmitter needed)
- [Libre 2](../CompatibleCgms/Libre2.md): It works with xDrip+ (no transmitter needed)
- [Libre 1](../CompatibleCgms/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../CompatibleCgms/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md): quite complicated with a lot of extra stuff
- [Poctech](../CompatibleCgms/PocTech.md)

### Nightscout

Nightscout - веб-приложение с открытым исходным кодом, которое может регистрировать/отображать данные мониторинга и AAPS и создавать отчеты. Больше информации на [странице проекта Nightscout](http://nightscout.github.io/). Вы можете создать собственный [сайт Nightscout](https://nightscout.github.io/nightscout/new_user/) _, с автоматизированной установкой Nightscout на [zehn.be](https://ns.10be.de/en/index.html) или разместите его на собственном сервере (для IT экспертов) (и вот еще неплохая бесплатная опция -https://www.youtube.com/watch?v=EDADrteGBnY - единственная загвоздка - видео на английском. но вообще-то там довольно понятно и без перевода - прим. перев.).

Nightscout не зависит от других модулей. Он понадобится для выполнения цели 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../SettingUpAaps/Nightscout.md).

### Файл AAPS-.apk

Основной компонент системы. Перед установкой приложения необходимо создать apk-файл ( расширение имен файлов для приложений Android). Instructions are  [here](../SettingUpAaps/BuildingAaps.md).

## Дополнительные модули

### Смарт часы

Вы можете выбрать смарт-часы с Android Wear 1.x и выше. Большинство пользователей носят Sony Smartwatch 3 (SWR50), поскольку это единственные смарт-часы, которые могут получать данные от Dexcom G5/G5, когда телефон вне доступа. Некоторые другие часы могут быть модифицированы как самостоятельный коллектор (см. [эту документацию](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) для подробностей).

Пользователи создают список протестированных телефонов [и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../UsefulLinks/WearOsSmartwatch.md).

Для того, чтобы включить в список телефон, который не занесен в таблицу, заполните форму [](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

При обнаружении проблем с таблицей пишите [hardware@androidaps.org](mailto:hardware@androidaps.org), для пожертвования телефонов/часов, нуждающихся в тестировании, пишите [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip +

Даже если вам не нужно приложение xDrip+ в качестве источника ГК, вы можете использовать его для оповещений или в качестве дисплея сахаров. Можно настроить столько оповещений сколько хотите, указать время, когда оповещениям разрешено работать, должны ли они иметь приоритет в режиме тишины и т. п. Some xDrip+ information can be found [here](../CompatibleCgms/xDrip.md). Имейте в виду, что документация к этому приложению не всегда актуальна, так как проект развивается довольно быстро.

## Что делать во время ожидания модулей

Иногда требуется некоторое время, чтобы получить все модули для закрытого цикла ИПЖ. Но не беспокойтесь, можно многое сделать во время ожидания. НЕОБХОДИМО проверить и (где требуется) адаптировать базальную скорость (BR), соотношение инсулин-углеводы (IC), фактор чувствительности к инсулину (ISF) и т. д. И, возможно, незамкнутый цикл может быть хорошим способом проверить систему и познакомиться с AAPS. В этом режиме AAPS дает рекомендации, которые можно выполнить вручную.

Продолжайте читать документацию, общаться с другими пользователями в сети или вне ее, узнавать мнение пользователей (при этом учитывая, что подходят не все рекомендации).

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective and setup up your [hardware](index-component-setup).
