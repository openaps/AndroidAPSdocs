# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Помпы, способные к работе в качестве компонента ИПЖ

### Omnipod DASH ([Домашняя страница](https://www.myomnipod.com/DASH))

**Статус реализации:** Omnipod DASH будет доступен в [AndroidAPS 3.0.0.](../Installing-AndroidAPS/Releasenotes#version-300)

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Помпа Ypsomed ([Домашняя страница](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Статус реализации:** Версии 1 - 1.5 (2Q/2018) не являются кандидатами для ИПЖ. Несмотря на то, что они имеют BT, коммуникация очень ограничена и однонаправлена: помпа ->приложение. К концу 2021 года планируется выпустить новую версию помпы, названную DOSE, которая позволит подавать болюсы и устанавливать временную базау TBR. Они планируют реализовать замкнутый цикл в 2022 году на собственном приложении. Подробнее см. на этой [странице](https://www.mylife-diabetescare.com/en/loop-program.html)

**Требования к оборудованию для AAPS:** Никаких. В помпе есть блутус-связь.

**Комментарии:** В настоящее время над драйвером работают 2 группы, так что можно ожидать поддержки AAPS вскоре после выхода новой версии. Одна группа поддерживается YpsoMed и участвует в медицинских испытаниях в Австралии, 2-я работает самостоятельно путем реверсивной инженерии оригинального приложения.

* * *

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Домашняя страница](https://www.medtrum.com/product/nanopump.html))

**Статус пригодности:** Является кандидатом для ИПЖ. Компания имеет собственную ограниченную систему полуцикла (A6). Контролируется через приложение iPhone. Приложения для Android пока нет.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### EOFLOW ([Домашняя страница](http://www.eoflow.com/eng/main/main.html))

**Статус пригодности:** Является кандидатом для ИПЖ. Пульт управления фактически является модифицированным Android-устройством. (В настоящее время помпа доступна только в Корее).

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### ACCU-Chek Solo ([Домашняя страница](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Статус пригодности:** Является кандидатом для ИПЖ.

**Требования к оборудованию для AAPS:** Никаких. Похоже, что блутус-связь имеется.

**Комментарии:** Есть некоторые разработчики, ведущие декодирование протокола, но пока только на предварительном этапе.

* * *

### Tandem: t:slim X2 ([Домашняя страница](https://www.tandemdiabetes.com/))

**Статус пригодности:** Пока не пригодна.

Хотя в прошлом компания не допускала контроля помпы с внешних устройств, за последние несколько лет правила изменились. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Требования к оборудованию для AAPS:** Никаких. Похоже, что блутус-связь имеется.

* * *

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Статус пригодности:** Является кандидатом для ИПЖ. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US).

**Требования к оборудованию для AAPS:** Никаких. Похоже, что блутус-связь имеется.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Требования к оборудованию для AAPS:** Никаких. Похоже, что блутус-связь имеется.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Помпы, снятые с производства (компании больше не работают)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Помпы, неспособные к работе в качестве компонента ИПЖ

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Требования к пригодности помп для ИПЖ

**Prerequisite**

- Помпа должна поддерживать дистанционное управление. (блутус, радио и т. п.)
- Протокол взломан/документирован/и т. д.

**Minimal requirement**

- Устанавливать временную скорость базала
- Получать сведения о состоянии
- Отменять временную базальную скорость

**For oref1(SMB) or Bolusing:**

- Настраивать подачу болюса

**Good to have**

- Отмену болюса
- Получать профиль базала (почти требование)
- Устанавливать профиль базала (хорошо иметь)
- Чтение истории 

**Other (not required but good to have)**

- Настраивать пролонгированный болюс
- Отменять пролонгированный болюс
- Чтение истории
- Чтение суммарной суточной дозы инсулина TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.