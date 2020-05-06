# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Пoмпы, поддержка которых в разработке

### Медтроник

**Loop status:** Medtronic is part of AAPS, since version 2.4

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

### Insulet Omnipod (со старыми pod-блоками Eros) ([Домашняя страница](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy для AndroidAPS (стабильно в тестировании, требует Raspberry Pi, а также RileyLink, и специально модифицированного AndroidAPS) Omnipy 
- OmniCore для AndroidAPS (еще не выпущен, нативный код C# работает на Android, нуждается только в RileyLink и специально модифицированном AndroidAPS - следующая версия проекта Omnipy).
- [ Loop ](https://loopkit.github.io/loopdocs/) iOS (стабильная версия, требует RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version was released in January 2020, and work is beeing done towards stabilization. Current version 0.3 (March)

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Помпы, способные к работе в качестве компонента ИПЖ

### Omnipod DASH ([Домашняя страница](https://www.myomnipod.com/DASH))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Помпа Ypsomed ([Домашняя страница](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions. It seems that we will get loopable version in begining of 2021, see this [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Домашняя страница](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### EOFLOW ([Домашняя страница](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### ACCU-Chek Solo ([Домашняя страница](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](https://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Похоже, что блутус-связь имеется.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Помпы, снятые с производства (компании больше не работают)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Помпа является кандидатом на работу с ИПЖ, но поскольку протокол ее работы неизвестен, поддержка появится не очень скоро.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Примечание о товаре:** Похоже, компания решила выйти из бизнеса. Подробнее в этой [статье](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Помпы, неспособные к работе в качестве компонента ИПЖ

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Статус пригодности:** Не пригодна.

Некоторое время назад у них имелась микропрограмма (прошивка) под названием T:AP (упоминается в этой статье [](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), которая могла бы использоваться в цикле ИПЖ). Прошивка больше не доступна, поскольку помпа была обновлена до x2). Прошивка не была предназначена для коммерческого использования, только для экспериментов (исследовательские проекты). Я разговаривал с одним из директоров компании и он заверил меня, что ПО помпы Tandem никогда не будет открыто, но что они создали свою собственную замкнутую систему, которую они называют Control-IQ (я думаю, что она уже доступна в США, и должна быть доступна в 2020 году в Европе).

* * *

### Animas Vibe

**Статус пригодности:** Не пригодна. Нет возможности дистанционного управления. **Примечание:** помпа снята с продажи. Компания вышла из бизнеса (J&J).

* * *

### Animas Ping

**Статус пригодности:** Не пригодна. Она имеет возможность подачи болюса, но не временного базала TBR. **Примечание** Была снята с продажи после выхода Animas Vibe.

## Требования к пригодности помп для ИПЖ

**Предварительные условия**

- Помпа должна поддерживать дистанционное управление. (BT, Радио частота и т. д.)
- Протокол взломан/документирован/и т. д.

**Минимальные требования**

- Устанавливать временную скорость базала
- Получать сведения о состоянии
- Отменять временную базальную скорость

**Для oref1(SMB) или болюсов:**

- Настраивать подачу болюса

**Хорошо иметь**

- Отмену болюса
- Получать профиль базала (почти обязательно)
- Устанавливать профиль базала (хорошо иметь)
- Способность читать журнал 

**Другое (не обязательно, но желательно)**

- Настраивать пролонгированный болюс
- Отменять пролонгированный болюс
- Способность читать журнал
- Читать суммарную суточную дозу инсулина TDD

* * *

### Other pumps support

Если у вас есть какие-либо другие помпы, статус которых вы хотите увидеть, пожалуйста, свяжитесь со мной (@andyrozman на gitter). В будущем в релизе будет добавлено много конфигураций помп для открытого цикла (вы сможете выбрать в конфигурации виртуальную помпу Virtual Pump и ваши настройки будут загружены - [Запрос на функциональность #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).