# # Обзор компонентов

AAPS не просто приложение (самостоятельно собранное), это лишь один из модулей закрытой системы ИПЖ. Прежде чем выбрать конкретные компоненты, следует также изучить особенности [их настройки](index-component-setup).

```{image} ../images/modules.png
:alt: Обзор компонентов
```

```{note}
**ВАЖНОЕ ЗАМЕЧАНИЕ О БЕЗОПАСНОСТИ**

Безопасность функционирования функций AAPS, обсуждаемых в этой документации, основана на безопасности всех устройств, используемых в вашей системе. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
```

## Необходимые модули

### Хорошо подобранные дозы и коэффициенты для компенсации

Хотя его нельзя сконструировать или купить, это, вероятно, самый недооцениваемый "модуль", существенно важный для системы. Когда алгоритму доверяется управлять диабетом, следует знать правильные настройки, чтобы не допустить серьезных ошибок. Даже если у вас еще нет других модулей, вы можете в сотрудничестве с вашим эндокринологом проверить и адаптировать свой профиль. Большинство пользователей систем ИПЖ используют циклические суточные величины скорости базала (BR), гормональную чувствительность к инсулину ISF и углеводный коэффициент CR.

The profile includes

- BR (скорость подачи базового инсулина)
- ISF (коэффициент чувствительности к инсулину) определяет вашу величину понижения ГК в результате введения 1 единицы инсулина
- CR (углеводный коэффициент) количество граммов углеводов, компенсируемое 1 единицей инсулина
- DIA (продолжительность действия инсулина).

(module-no-use-of-sglt-2-inhibitors)=
### Не использовать SGLT-2 ингибиторы

SGLT-2 ингибиторы, которые также называются глифлозины, блокируют реабсорбцию глюкозы в почках. Поскольку они непредсказуемо снижают уровень глюкозы крови, их НЕЛЬЗЯ применять при использовании таких систем как AAPS! Существует огромный риск возникновения кетоацидоза или гипогликемии! Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.

(module-phone)=
### Телефон

The current version of AAPS requires an Android smartphone with Google Android 9.0 or above. Так что если вы думаете о новом телефоне, рекомендуем хотя бы Android 9., но оптимально Android 10 или 12. Для более ранних версий Android имеются предыдущие версии AAPS см.: [примечания к версиям](../Installing-AndroidAPS/Releasenotes.md#android-version-and-aaps-version)

Пользователи создают список протестированных телефонов [и часов](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

Для того, чтобы включить в список телефон, который не занесен в таблицу, заполните форму [](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

При обнаружении проблем с таблицей пишите [hardware@androidaps.org](mailto:hardware@androidaps.org), для пожертвования телефонов/часов, нуждающихся в тестировании, пишите [donations@androidaps.org](mailto:hardware@androidaps.org).

### Инсулиновая помпа

AAPS **в настоящее время** работает с

- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)  (Bluetooth; старый драйвер, требующий отдельного приложения Ruffy)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; новый драйвер, доступный начиная с AndroidAPS v.3.2)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [DanaR](../Configuration/DanaR-Insulin-Pump.md)
- [DanaRS](../Configuration/DanaRS-Insulin-Pump.md)
- [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
- [Diaconn G8 ](../Configuration/DiaconnG8.md)
- [EOPatch2](../Configuration/EOPatch2.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)  ([additional communication device](module-additional-communication-device) needed)
- [Помпа Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Medtrum Nano](../Configuration/MedtrumNano.md)
- [Medtrum 300U](../Configuration/MedtrumNano.md)
- Некоторые старые [Medtronic](../Configuration/MedtronicPump.md) (требуется[дополнительное устройство связи](module-additional-communication-device))

Если не упомянуто дополнительное коммуникационное устройство, то связь между помпой и AndroidAPS происходит за счет встроенного модуля bluetooth без необходимости дополнительного протокола коммуникации.

**Other pumps** that may have the potential to work with AAPS are listed on the [Future (possible) Pumps](../Getting-Started/Future-possible-Pump-Drivers.md) page.

(module-additional-communication-device)=
#### Дополнительное устройство коммуникации

Для старых помп Medtronic требуется дополнительное устройство коммуникации (кроме телефона) для "перевода" радиосигнала от помпы на Bluetooth. Убедитесь, что выбрана правильная версия для вашей помпы.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контактная информация](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink сайт](https://www.getlooplink.org/) - [Контактная информация](https://jameswedding.substack.com/) - Непроверено

**Какая же самая лучшая помпа для работы с AndroidAPS?**

Combo, Insight и старые Medtronic – это надежные помпы, которые можно использовать в системах замкнутого цикла. У Combo преимущество выбора инфузионной системы, так как в ней применен стандартный разъем типа luer. А батарею вы можете купить на любой заправочной станции или в круглосуточно работающем магазине, а при необходимости ее можно добыть из пульта дистанционного управления в номере отеля ;-).

Однако преимущества помп Dana R/ RS и Dana-i по сравнению с Combo следующие:

- Помпы Dana сопрягается почти с любым телефоном на Android без необходимости перепрошивки на Lineage OS. Если телефон сломается, ему быстро найдется замена, которая работает с Dana... С Combo сложнее. (Ситуация может измениться, когда Android 8.1 станет более популярным)
- Первоначальное сопряжение проходит проще с Dana-i/RS. Но обычно это делается только один раз, так что это свойство важно, если хотите проверить новую функцию на других помпах.
- So far the Combo works with screen parsing. В целом, это неплохо, но этот процесс идет медленно. Для цикла ИПЖ это не имеет значения, так как он работает в фоновом режиме. Тем не менее, требуется больше времени на соединение и, соответственно, больше возможности его разорвать, что плохо, если вы отошли от телефона, например, во время болюса, когда готовите пищу.
- Combo вибрирует по завершении временных базалов TBR, Dana вибрирует (или пищит) на микроболюсах SMB. В ночное время вы, скорее всего, будете использовать TBR а не SMB.  Dana-i/RS может быть сконфигурирована так, что не будет ни вибрировать ни пищать.
- Чтение истории на Dana-i/RS происходит за секунды и позволяет легко заменить телефон в автономном режиме и продолжать работу с появлением новых значений мониторинга CGM.
- Все помпы, с которыми работает AndroidAPS, изначально водонепроницаемы. Но только помпы Dana также "гарантированно водонепроницаемы" благодаря изолированным отсекам батареи и системы наполнения резервуара.

### Источник данных гликемии

Это всего лишь краткий обзор совместимых с AndroidAPS систем мониторинга ГК. Для получения дополнительной информации смотрите [здесь](../Configuration/BG-Source.md). Небольшая подсказка: если данные ГК могут приниматься приложением xDrip+ или на веб-сайте Nightscout, вы можете выбрать xDrip+ (или Nightscout с интернет-соединением) как источник ГК в AAPS.

- [Dexcom G7](../Hardware/DexcomG7.md): Работает с xDrip+ или модифицированным приложением
- [Dexcom G6](../Hardware/DexcomG6.md): начиная с версии 3.0 рекомендуется самостоятельно собранное приложение Dexcom BYODA (подробнее см. [примечания к выпуску](Releasenotes-important-hints-3-0-0)). xDrip+ должен быть по крайней мере версии 2022.01.14 или новее
- [Dexcom G5](../Hardware/DexcomG5.md): Работает с xDrip+ или модифицированным приложением
- [Dexcom G4](../Hardware/DexcomG4.md): Эти сенсоры достаточно старые, но можно найти инструкции по их использованию с приложением xDrip+
- [Libre 3](../Hardware/Libre3.md): Работает с xDrip+ (трансмиттер не нужен)
- [Libre 2](../Hardware/Libre2.md): Работает с xDrip+ (трансмиттер не нужен)
- [Libre 1](../Hardware/Libre1.md): -Нужен трансмиттер типа Bluecon или MiaoMiao (сборка или покупка) и приложение xDrip+
- [Eversense](../Hardware/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../Hardware/MM640g.md): quite complicated with a lot of extra stuff
- [Poctech](../Hardware/PocTech.md)

### Nightscout

Nightscout is a open source web application that can log and display your CGM data and AAPS data and creates reports. You can find more information on the [website of the Nightscout project](http://nightscout.github.io/). You can create your own [Nightscout website](https://nightscout.github.io/nightscout/new_user/), use the semi-automated Nightscout setup on [zehn.be](https://ns.10be.de/en/index.html) or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AAPS can be found [here](../Installing-AndroidAPS/Nightscout.md).

### AAPS-.apk file

The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  [here](../Installing-AndroidAPS/Building-APK.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G6/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see [this documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) for more details).

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AAPS, which you can find [here](../Configuration/Watchfaces.md).

Для того, чтобы включить в список телефон, который не занесен в таблицу, заполните форму [](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

При обнаружении проблем с таблицей пишите [hardware@androidaps.org](mailto:hardware@androidaps.org), для пожертвования телефонов/часов, нуждающихся в тестировании, пишите [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip +

Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../Configuration/xdrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AAPS. Using this mode, AAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../Where-To-Go-For-Help/Background-reading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../Usage/Objectives.md) before each new Objective and setup up your [hardware](index-component-setup).
