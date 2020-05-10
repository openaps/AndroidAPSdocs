# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Пoмпы, поддержка которых в разработке

### Insulet Omnipod (со старыми pod-блоками Eros) ([Домашняя страница](https://www.myomnipod.com/en-gb/about/how-to-use))

**Статус взаимодействия с ИПЖ:** В настоящее время нативно не поддерживается в среде AAPS. Завершено декодирование протокола Omnipod- [OpenOmni](http://www.openomni.org/) и [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy для AndroidAPS (стабильно в тестировании, требует Raspberry Pi, а также RileyLink, и специально модифицированного AndroidAPS) Omnipy 
- OmniCore для AndroidAPS (еще не выпущен, нативный код C# работает на Android, нуждается только в RileyLink и специально модифицированном AndroidAPS - следующая версия проекта Omnipy).
- [ Loop ](https://loopkit.github.io/loopdocs/) iOS (стабильная версия, требует RileyLink).

**Реализации на Java:** Пока нет.

** Состояние реализации AAPS: ** Работа над собственным драйвером Java для Omnipod на AAPS выполняется в [ AAPS-Omnipod/AndroidAPS ](https://github.com/AAPS-Omnipod/AndroidAPS) (ветвь omnpod_eros). Не требует Raspberry Pi. Вы можете следить за ходом выполнения [ OmniAPS Slack ](https://omniaps.slack.com/) на канале android-driver. Первая тест-версия была выпущена в январе 2020 года, работа идет по пути стабилизации. Текущая версия 0.3 (март)

**Требование к оборудованию для AAPS:** RileyLink с прошивкой Omnipod (2.x) и антенной 433 МГц.

## Помпы, способные к работе в качестве компонента ИПЖ

### Omnipod DASH ([Домашняя страница](https://www.myomnipod.com/DASH))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа - кандидат на использование с системами ИПЖ, но протокол на данный момент неизвестен. Продажа помпы официально началась в январе 2019 года.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Комментарии:** Мы рассматриваем разработку Omnipod DASH, но на данный момент Dash еще не доступна в Европе (где находится большинство разработчиков AAPS) и что протокол коммуникации неизвестен. Мы попробуем разкомпилировать официальное приложение Dash APK, чтобы определить, как работает коммуникация и на этой основе выполним реализацию проекта. За тем, что происходит, следите здесь: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), но не ожидайте, что решение будет найдено быстро. Это только Подтверждение Концепции (до тех пор, пока не завершится Этап 2).

* * *

### Помпа Ypsomed ([Домашняя страница](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Статус пригодности к реализации:** Версии 1 - 1.5 (2Q/2018) не являются кандидатами для ИПЖ. Хотя они имеют BT-коммуникации, похоже что связь ограничена (только в одном направлении: помпа-приложение). Возможно, это изменится в следующих версиях. Похоже, что мы получим пригодную версию в начале 2021 года, см. эту [ статью ](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

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

**Статус пригодности:** Является кандидатом для ИПЖ. Помпа начинает продаваться в конце 2018 года в отдельных странах ЕС. По слухам, у него есть приложение для Android на специальном управляющем устройстве.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

### Medtronic Bluetooth

**Комментарии:** Это помпа, которая выйдет в ближайшие несколько лет и, как планируется, будет иметь поддержку в ПО Tidepool Loop ([см. эту статью](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

### Инсулиновая помпа Willware ([ Домашняя страница ](http://en.shinmyungmedi.com))

** Состояние цикла: ** В настоящий момент, когда не является кандидатом, но их сотрудники связывались с нами, и они заинтересованы в том, чтобы сделать помпу пригодной для ИПЖ (на данный момент я думаю, что в помпе отсутствуют команды get/set profile).

**Требования к оборудованию для AAPS:** Никаких. Похоже, что блутус-связь имеется.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Помпы, снятые с производства (компании больше не работают)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Помпы, неспособные к работе в качестве компонента ИПЖ

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Требования к пригодности помп для ИПЖ

**Prerequisite**

- Помпа должна поддерживать дистанционное управление. (BT, Радио частота и т. д.)
- Протокол взломан/документирован/и т. д.

**Minimal requirement**

- Устанавливать временную скорость базала
- Получать сведения о состоянии
- Отменять временную базальную скорость

**For oref1(SMB) or Bolusing:**

- Настраивать подачу болюса

**Good to have**

- Отмену болюса
- Получать профиль базала (почти обязательно)
- Устанавливать профиль базала (хорошо иметь)
- Способность читать журнал 

**Other (not required but good to have)**

- Настраивать пролонгированный болюс
- Отменять пролонгированный болюс
- Способность читать журнал
- Читать суммарную суточную дозу инсулина TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).