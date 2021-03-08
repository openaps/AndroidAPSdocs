# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Помпы, способные к работе в качестве компонента ИПЖ

### Omnipod DASH ([Домашняя страница](https://www.myomnipod.com/DASH))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа - кандидат на использование с системами ИПЖ, но протокол на данный момент неизвестен. Продажа помпы официально началась в январе 2019 года.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Комментарии:** Мы рассматриваем разработку Omnipod DASH, но на данный момент Dash еще не доступна в Европе (где находится большинство разработчиков AAPS) и что протокол коммуникации неизвестен. Мы попробуем разкомпилировать официальное приложение Dash APK, чтобы определить, как работает коммуникация и на этой основе выполним реализацию проекта. За тем, что происходит, следите здесь: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), но не ожидайте, что решение будет найдено быстро. Это только Подтверждение Концепции (до тех пор, пока не завершится Этап 2).

* * *

### Помпа Ypsomed ([Домашняя страница](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Статус пригодности к реализации:** Версии 1 - 1.5 (2Q/2018) не являются кандидатами для ИПЖ. Хотя они имеют BT-коммуникации, похоже что связь ограничена (только в одном направлении: помпа-приложение). Компания планирует усовершенствовать помпу для поддержки удаленного болюса (обновление запланировано на конец 2021 года), а позже они планируют добавить другие функции, необходимые для создания Loop. Их официальное приложение поддержит это в будущем (запланировано на 2022 год точная дата не известна). Так как они планируют иметь собственную систему ИПЖ, см эту [страницу](https://www.mylife-diabetescare.com/en/loop-program.html), они не будут предлагать никакой поддержки самодеятельным разработчикам, по крайней мере пока.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Домашняя страница](https://www.medtrum.com/P6.html))

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

**Комментарий:** Это помпа, которая выйдет в ближайшие несколько лет и, как планируется, будет иметь поддержку в ПО Tidepool Loop ([см. эту статью](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

### Инсулиновая помпа Willcare ([ Домашняя страница ](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Похоже, что блутус-связь имеется.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

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

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

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

If you have any other pumps you would like to see status on, please contact us on discord.