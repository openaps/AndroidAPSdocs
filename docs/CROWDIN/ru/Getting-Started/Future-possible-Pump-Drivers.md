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

**Комментарии:** В настоящее время над драйвером работают 2 группы, так что можно ожидать поддержки AAPS вскоре после выхода новой версии. One group is being supported by YpsoMed and helping with Medical trials that are happening in Australia, 2nd is working independently by reverse engineering original app.

* * *

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/product/nanopump.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controllable via iPhone App. No Android app available at the moment.

**Требования к оборудованию для AAPS:** По-видимому, никаких. It seems to be BT enabled.

* * *

### EOFLOW ([Домашняя страница](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Требования к оборудованию для AAPS:** По-видимому, никаких. It seems to be BT enabled.

* * *

### ACCU-Chek Solo ([Домашняя страница](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate.

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

* * *

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Is a Loop candidate. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US).

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Помпы, снятые с производства (компании больше не работают)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

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