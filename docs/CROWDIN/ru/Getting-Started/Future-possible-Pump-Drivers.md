# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Пoмпы, поддержка которых в разработке

### Медтроник

**Статус взаимодействия с ИПЖ:** Некоторые старые версии помп можно использовать, но не новые модели (см. ниже)

**Другие возможности реализации:** OpenAPS, Loop

**Реализации Java:** Доступна частичная реализация c [Rountrip2](https://github.com/TC2013/Roundtrip2), и [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**Актуальный статус реализации с AAPS:** Выполняется. См. [AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Большая часть работы сделана для [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) по отладке фрейма и команд. Существует проект (Медтроник) и открыт прием заявок для участия в развитии этого репозитория, разработка осуществляется на ветке dev_medtronic (которая там по умолчанию). Также есть чат на gitter: RileyLinkAAPS/Lobby. AAPS. Вышла пробная версия 0.10, имеет 95% всей функциональности, на настоящий момент отсутствует синхронизация временных базалов TBR и события "подача остановлена". Проект, вероятно, будет включен в основной репозиторий к концу июля 2019 года. Подробности и сроки см. на [Доске Проекта](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Требование к оборудованию для AAPS:** RileyLink (с антенной 916 МГц).

**Версии, работающие с проектами ИПЖ:** 512-522, 523 (Fw 2.4A или ниже), 554 (европейская прошивка 2.6A или ниже, прошивка CA 2.7A или ниже). То же для 7xx версий. Все другие устройства не поддерживаются, и, вероятно, не будут.

* * *

### Insulet Omnipod (со старыми pod-блоками Eros) ([Домашняя страница](https://www.myomnipod.com/en-gb/about/how-to-use))

**Статус взаимодействия с ИПЖ:** В настоящее время нативно не поддерживается в среде AAPS. Завершено декодирование протокола Omnipod- [OpenOmni](http://www.openomni.org/) и [OmniAPS Slack](https://omniaps.slack.com/)

**Другие решения:**

- Omnipy для AndroidAPS (стабильно в тестировании, требует Raspberry Pi, а также RileyLink, и специально модифицированного AndroidAPS) [Omnipy](https://github.com/winemug/omnipy)
- OmniCore для AndroidAPS (еще не выпущен, C# "нативный" код на Android нуждается только в RileyLink и специально модифицированном AndroidAPS - следующая версия проекта Omnipy). [OmniCore](https://github.com/winemug/OmniCore)
- Loop (стабильная версия, требует RileyLink). [Loop](https://loopkit.github.io/loopdocs/)

**Реализации на Java:** Пока нет.

**Cтатус реализации на AAPS:** Работа началась на [RileyLinkAAPS](https://github.com/bartsopers/RileyLinkAAPS/) для Omnipod (dev_omnipod branch), который не потребует Raspberry Pi, не завершена. За развитием можно следить на на https://omniaps.slack.com/, канал android-driver.

**Требование к оборудованию для AAPS:** RileyLink с прошивкой Omnipod (2.x) и антенной 433 МГц.

## Помпы, способные к работе в качестве компонента ИПЖ

### Omnipod DASH ([Домашняя страница](https://www.myomnipod.com/DASH))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа - кандидат на использование с системами ИПЖ, но протокол на данный момент неизвестен. Продажа помпы официально началась в январе 2019 года.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Комментарии:** Мы рассматриваем разработку Omnipod DASH, но на данный момент Dash еще не доступна в Европе (где находится большинство разработчиков AAPS) и что протокол коммуникации неизвестен. Мы попробуем разкомпилировать официальное приложение Dash APK, чтобы определить, как работает коммуникация и на этой основе выполним реализацию проекта. За тем, что происходит, следите здесь: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), но не ожидайте, что решение будет найдено быстро. Это только Подтверждение Концепции (до тех пор, пока не завершится Этап 2).

* * *

### Помпа Ypsomed ([Домашняя страница](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Статус пригодности к реализации:** Версии 1 - 1.5 (2Q/2018) не являются кандидатами для ИПЖ. Хотя они имеют BT-коммуникации, похоже что связь ограничена (только в одном направлении: помпа-приложение). Возможно, это изменится в следующих версиях.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Домашняя страница](http://www.medtrum.com/P6.html))

**Статус пригодности:** Является кандидатом для ИПЖ. Компания имеет собственную ограниченную систему полуцикла (A6). Контролируется через приложение iPhone. Приложения для Android пока нет.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### EOFLOW ([Домашняя страница](http://www.eoflow.com/eng/main/main.html))

**Статус пригодности:** Является кандидатом для ИПЖ. Пульт управления фактически является модифицированным Android-устройством. (В настоящее время помпа доступна только в Корее).

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### ACCU-Chek Solo ([Домашняя страница](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Статус пригодности:** Является кандидатом для ИПЖ. Помпа начинает продаваться в конце 2018 года в отдельных странах ЕС. По слухам, имеет Android-приложение для управления.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

### Medtronic Bluetooth

**Комментарии:** Это помпа, которая выйдет в ближайшие несколько лет и, как планируется, будет иметь поддержку в ПО Tidepool Loop ([см. эту статью](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

* * *

## Помпы, снятые с производства (компании больше не работают)

### Помпа Cellnovo ([Домашняя страница](https://www.cellnovo.com/en/homepage))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Примечание о товаре:** Похоже, компания решила выйти из бизнеса. Подробнее в этой [статье](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Помпы, неспособные к работе в качестве компонента ИПЖ

### Тандем:(любой) ([Домашняя страница](https://www.tandemdiabetes.com/))

**Статус пригодности:** Не пригодна.

Некоторое время назад у них имелась микропрограмма (прошивка) под названием T:AP (упоминается в этой статье [](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), которая могла бы использоваться в цикле ИПЖ). Прошивка больше не доступна, поскольку помпа была обновлена до x2). Прошивка не была предназначена для коммерческого использования, только для экспериментов (исследовательские проекты). Я разговаривал с одним из директоров компании и он заверил меня, что ПО помпы Tandem никогда не будет открыто, но что они создали свою собственную замкнутую систему, которую они называют Control-IQ (я думаю, что она уже доступна в США, и должна быть доступна в 2020 году в Европе).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Requirements for pumps being loopable

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**Minimal requirement**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).