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

**Комментарии:** Мы рассматриваем разработку Omnipod DASH, но на данный момент Dash еще не доступна в Европе (где находится большинство разработчиков AAPS) и что протокол коммуникации неизвестен. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Hardware requirement for AAPS:** Probably none. В помпе есть блутус-связь.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app for control.

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. В помпе есть блутус-связь.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumps that aren't Loopable

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

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