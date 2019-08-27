# Цели

AndroidAPS ставит ряд Целей, которые необходимо выполнить, чтобы подготовиться к свойствам и параметрам настроек для безопасной работы алгоритма ИПЖ. Цели позволяют удостовериться, что все сконфигурировано правильно, что мы понимаем, что, как и почему делает система и что мы можем доверять ей.

Если вы **обновляете телефон**, то можете [экспортировать настройки](../Usage/Objectives#export-import-settings) чтобы сохранить прогресс в продвижении к целям. Ваш прогресс будет сохранен не только в прохождении целей, но и в настройках безопасности, таких как максимальный болюс и т. д. Если настройки не переносить, то движение к целям придется начинать заново. На всякий случай следует время от времени сохранять свои настройки. Подробности см. ниже.  

### Цель 1: Настройка визуализации и мониторинга, анализ базальной скорости и коэффициентов

* Выберите свой источник мониторинга ГК. См. [Источник ГК](../Configuration/BG-Source.md) для дополнительной информации.
* Выбираем нужную помпу в Конфигураторе (если к помпе нет драйвера, можно пользоваться виртуальной помпой) чтобы пома могла вести коммуникацию с AndroidAPS. При работе с [помпой Dana R ](../Configuration/DanaR-Insulin-Pump.md) следуйте отдельным инструкциям по привязке помпы к AndroidAPS.
* Следуйте инструкциям по настройке [Nightscout](../Installing-AndroidAPS/Nightscout.md) чтобы Nightscout мог получать и отображать данные ГК.

*Возможно, придется подождать следующего значения глюкозы крови, чтобы AndroidAPS принял его.*

### Цель 2: Начало на незамкнутом цикле

* Выбрать незамкнутый цикл либо в настройках либо нажав кнопку незамкнутого цикла в левом верхнем углу главного экрана.
* Задать все необходимые [Настройки](../Configuration/Preferences.md).
* Вручную активировать по крайней мере 20 предложений временного базала за период в 7 дней, ввести их в помпу и подтвердить в AndroidAPS. Убедитесь, что эти данные представлены в AndroidAPS и Nightscout.
* Включите [врем. цели](../Usage/temptarget.md) если необходимо. Используйте врем. цели для купирования гипогликемии чтобы предотвратить слишком сильные коррекции после гипо. 

### Глубже понимаем незамкнутую систему Open Loop, включая ее рекомендации по временным базалам

* Начинаем вникать в рекомендации по временным базалам, изучая [логику определения базала](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) а также линии прогнозируемой гликемии на домашнем экране AndroidAPS / Nightscout и результаты вычислений на вкладке OpenAPS.

*До тех пор, пока мы не убедимся в правильности вычислений и настроек, целевые значения гликемии следует несколько завысить. Система позволяет задавать нижнюю границу в диапазоне от 4 до 10, верхнюю - от 5 до 15. Временная цель как отдельная величина может иметь любое значение от 4 до 15. Целевое значение - это значение, на котором основываются расчеты, а не то же самое, что долгосрочные целевые значения вашей ГК. Если цель задана в слишком широком диапазоне (например, 3 или более ммоль/л) вы обнаружите, что изменений плавающей временной скорости базала будет не так много поскольку в каждый данный момент гликемия фактически находится в требуемом диапазоне и алгоритм системы предложит не так много плавающих временных базалов. Можно поэкспериментировать и задать более близкие значения (например, чтобы их разность не превышала 1 ммоль) и наблюдать, как в результате изменится поведение системы. Вы можете настроить более широкий диапазон (зеленые линии) на графике для значений ГК, в которых хотите находиться, введя свои значения в настройках > Диапазон для визуализации.*

**Остановитесь здесь, если пользуетесь незамкнутым циклом с виртуальной помпой - не нажимайте на кнопку «Верифицировать» в конце цели.**

### Начинаем замыкать цикл с Low Glucose Suspend (прекращением подачи инсулина на низких сахарах)

**Замкнутый цикл не будет исправлять значения высокой ГК в цели 4, поскольку он ограничен приостановкой подачи инсулина на низких сахарах.**

**Вы сами вручную должны корректировать высокие значения ГК!**

* Выбираем Closed Loop (замкнутый цикл) либо в настройках либо нажимая и удерживая кнопку Open Loop (незамкнутый цикл) в левой верхней части домашнего экрана.
* Устанавливаем верхние значения целевого диапазона слегка выше обычного, просто для безопасности.
* Наблюдаем за активностью временного базала по тексту синего цвета или по синему графику рендеринга на главном экране.
* Убедитесь, что параметры настройки помогают AndroidAPS избегать низких значений ГК на протяжении пяти дней. Если эпизоды низкой гликемии все же сохраняются, поправьте параметры DIA (продолжительность действия инсулина), скорость базала, ISF (фактор чувствительности к инсулину) и пропорции инсулин-углеводы.

*Система заменит настройки максимума активного инсулина maxIOB на нулевые значения, что значит – при падении гликемии базал будет снижен, но когда гликемия будет расти, базал будет повышен только при отрицательном значении активного инсулина IOB (от предыдущего прекращения подачи инсулина из-за низкой гликемии), в ином случае скорость базала останется такой же как в выбранном вами профиле. Возможны временные пики вслед за мерами против гипогликемии без возможности увеличить базу на откате._.*

### Цель 5: настройка замкнутого цикла с поднятием макс величины активного инсулина IOB выше 0 и постепенным понижением целевых СК

* Поднять 'Максимальное общее количество активного инсулина IOB которое невозможно превысить в алгоритме OpenAPS (в OpenAPS оно называется 'max-iob') выше 0 в течение 1 дня, рекомендация по умолчанию "средний болюс на еду + 3 максимальных ежедневных часовых значения базальной скорости (для алгоритма SMB) или "3 максимальных ежедневных" (для старого алгоритма AMA), но к этому следует подходить медленно, пока не станет понятно, какие настройки лучше (макс ежедневной базал = максимальное почасовое значение в любое время сегмента дня).
  
  Эта рекомендация должна рассматриваться как отправная точка. Если вы установили троекратную величину и видите признаки того, что для вас это слишком жестко, понизьте ее. Если у вас высокая резистентность повышайте эту величину постепенно.
  
  ![max daily basal](../images/MaxDailyBasal.png)

* Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

### Objective 6: Adjust basals and ratios if needed, and then enable autosens

* You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate, or do a traditional basal test.
* Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc, and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in [this form](http://bit.ly/nowlooping) logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

### Objective 7: Enabling additional oref0 features for daytime use, such as advanced meal assist (AMA)

* Now you should feel confident with how AndroidAPS works and what settings reflect your diabetes best
* Then over a period of 28 days you can try additional features that automate even more of the work for you such as the [advanced meal assist](../Usage/Open-APS-features#advanced-meal-assist-ama)

### Objective 8: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

* You must read the [SMB chapter in this wiki](../Usage/Open-APS-features#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
* Then you ought to [rise maxIOB](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 5](../Usage/Objectives#objective-5-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
* min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Если вы переходите с AMA на SMB, то вам нужно изменить его вручную

## Export & import settings

* Выполнить **Экспорт настроек** на вашем старом телефоне
  
  * Сэндвич-меню (в верхнем левом углу экрана)
  * Тех. обслуживание
  * Экспорт настроек
  * File location will be shown
    
    ![Экспорт настроек AAPS](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone using the file location shown during export

* **Установите AndroidAPS** на новом телефоне.
* **Выполните импорт настроек** на вашем новом телефоне 
  * Сэндвич-меню (в верхнем левом углу экрана)
  * Тех. обслуживание
  * Выполните импорт настроек
* **Note for Dana RS users:** 
  * Поскольку настройки подключения помпы также переносятся новый телефон, AAPS на новом телефоне уже будет "знать" помпу и не запустит сканирование bluetooth. Please pair new phone and pump manually.