# Настройки на xDrip

Ако все още не сте го направили, изтеглете и инсталирайте последната версия на xDrip от [страницата с версиите на xDrip](https://github.com/NightscoutFoundation/xDrip/releases).

Изключете оптимизирането на батерията и разрешете работа във фонов режим за приложението xDrip.

## Основни настройки за всички CGM и FGM системи

### Деактивиране на качването към Nightscout

Не позволявайте на друго приложение да качва данни (кръвна захар и лечения) в Nightscout.

→ Hamburger Menu (1) → Settings (2) → Cloud Upload (3) → Nightscout Sync (REST-API) (4) → Изключете **OFF** `Enabled` (5)

![Основни настройки на xDrip 1](../images/xDrip_Basic1.png)

#### Изключване на автоматичното калибриране и на леченията (treatments)

Уверете се, че `Automatic Calibration` (7) е изключено. Ако отметката за `Automatic Calibration` е поставена, включете веднъж `Download treatments` (6), след това махнете отметката за `Automatic Calibration` и отново изключете `Download treatments`.

![Основни настройки на xDrip 2](../images/xDrip_Basic2.png)

Докоснете `Extra Options` (8)

    {admonition} Предупреждение за безопасност
    :class: warning
    Трябва да изключите „Upload treatments“ в xDrip, иначе леченията (treatments) може да се удвоят в AAPS и това ще доведе до грешни COB и IOB.

Деактивирайте `Upload treatments` (9) и се уверете, че **НЯМА** да използвате `Back-fill data` (11).

Опцията `Alert on failures` също трябва да бъде деактивирана (10). В противен случай ще получавате аларма на всеки 5 минути в случай на проблеми с Wi-Fi/мобилна мрежа или ако сървърът не е достъпен.

![Основни настройки на xDrip 3](../images/xDrip_Basic3.png)

### **Inter-app Settings** (Broadcast)

Ако ще използвате AAPS и данните трябва да се препращат например към AAPS, трябва да включите излъчването (broadcasting) в xDrip в Inter-App settings.

→ Hamburger Menu (1) → Settings (2) → Inter-app settings (3) → Broadcast locally **ON** (4)

За да са стойностите в AAPS същите като в xDrip, трябва да включите `Send the displayed glucose value` (5).

Включете Compatible Broadcast (6).

![Основни настройки на xDrip 4](../images/xDrip_Basic4.png)

Ако сте включили и `Accept treatments` в xDrip, и `Enable broadcasts to xDrip` в плъгина xDrip в AAPS, xDrip ще получава от AAPS информация за инсулина, въглехидратите и базалната доза.

Ако включите `Accept Calibrations`, xDrip ще използва калибрациите от AAPS. Бъдете внимателни, когато използвате тази функция със сензори Dexcom: първо прочетете [това](https://navid200.github.io/xDrip/docs/Calibrate-G6.html).

Не забравяйте да изключите Import Sounds, за да не звъни xDrip всеки път, когато AAPS изпраща промяна на базала/профила.

![Основни настройки на xDrip 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identify receiver (идентифициране на приемника)

- Ако откриете проблеми с локалното излъчване (AAPS не получава стойности на КЗ от xDrip), отидете на → Hamburger Menu (1) Settings (2) → Inter-app settings (3) → Identify receiver (7) и въведете `info.nightscout.androidaps` за компилацията на AAPS (ако използвате компилацията PumpControl, въведете вместо това `info.nightscout.aapspumpcontrol`!!).
- Обърнете внимание: автоматичната корекция понякога има тенденция да променя i в главна буква. **Трябва да използвате само малки букви**, когато въвеждате `info.nightscout.androidaps` (или `info.nightscout.aapspumpcontrol` за PumpControl). Главно I ще попречи на приложението да получава стойности на КЗ от xDrip.
    
    ![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## Използване на AAPS за калибриране в xDrip

- Ако искате да можете да калибрирате с AAPS, в xDrip отидете на Settings → Interapp Compatibility → Accept Calibrations и изберете ON. 
- Може също да искате да прегледате опциите в Settings → Less Common Settings → Advanced Calibration Settings.

## Сензори Dexcom

Всичко, свързано със самите сензор и трансмитер Dexcom (стартиране, спиране, смяна, калибриране, отстраняване на неизправности), е описано и се поддържа актуално в [документацията на xDrip за Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html). Следвайте тези инструкции за сензора. Настройките, които свързват xDrip с **AAPS** (описани по-горе на тази страница), са единствената част, специфична за AAPS.

### Dexcom G6 и ONE

- Настройте xDrip според [препоръчителните настройки](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html).
- Трансмитерите на Dexcom G6 и ONE могат едновременно да бъдат свързани с приемника на Dexcom (или алтернативно с помпата t:slim) и едно приложение на телефона ви.
- Когато използвате xDrip като приемник, първо деинсталирайте приложението Dexcom. **Не можете да свържете xDrip и приложението на Dexcom с трансмитера едновременно!**
- Ако ви трябва Clarity и искате да използвате функциите на xDrip, използвайте [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) с локално излъчване към xDrip или използвайте xDrip като придружаващо приложение (Companion app), което получава известията от официалното приложение на Dexcom (възможно е забавяне на стойностите на КЗ).

#### Рестартиране на сензора

- При текущите трансмитери xDrip винаги използва [вградения алгоритъм (native algorithm)](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) на трансмитера; няма причина да го изключвате.
- [Превантивните рестартирания](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) работят само при стари трансмитери (фърмуер 1.6.5.25 или по-стар), където са нужни, за да не спре сензорът след 10 дни. По-новите трансмитери (Firefly) не им обръщат внимание.
- Рестартирането на сензор с трансмитер Firefly изисква [сваляне на трансмитера](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), а след рестартирането стойностите може да са много грешни, което е опасно при затворен кръг: прочетете изцяло [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) и [калибрирайте внимателно](https://navid200.github.io/xDrip/docs/Calibrate-after-G6Restart.html).

(xdrip-connect-g6-transmitter-for-the-first-time)=

#### Стартиране, спиране и смяна на сензори

Следвайте инструкциите:

- [Стартиране на трансмитер G6 или ONE](https://navid200.github.io/xDrip/docs/Starting-G6.html)
- [Спиране и стартиране на сензор G6 или ONE](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html)
- [Сваляне на трансмитера от сензора](https://navid200.github.io/xDrip/docs/Remove-transmitter.html)
- [Животът на трансмитера](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) може да се удължи ([hard reset](https://navid200.github.io/xDrip/docs/Hard-Reset.html)) само при трансмитери със сменена батерия или модифицирани трансмитери, но не и при Firefly.

(xdrip-replace-transmitter)=

#### Смяна на трансмитер

- Изключете оригиналния приемник на Dexcom (ако го използвате) и не го включвайте отново, преди xDrip да покаже стойности.
- Forget the device in xDrip (System Status → Forget Device) AND in the smartphone's Bluetooth settings (shown as DexcomXX where XX are the last two digits of the transmitter serial number).
- Дръжте стария трансмитер извън обхвата на Bluetooth, за да не се свърже отново.
- След това следвайте [Start a G6 or ONE transmitter](https://navid200.github.io/xDrip/docs/Starting-G6.html).

### Dexcom G7, ONE+ и Stelo

- Следвайте [инструкциите за G7, ONE+ и Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html) (нужна е нова версия на xDrip – вижте страницата от връзката).
- Вижте също [страницата за Dexcom G7, ONE+ и Stelo](../CompatibleCgms/DexcomG7.md) за наличните конфигурации с **AAPS**.

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Отстраняване на неизправности с Dexcom и xDrip

- [Отстраняване на проблеми с връзката при G6/ONE](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html)
- [Отстраняване на неизправности при G7/ONE+/Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7_Troubleshooting.html)
- [Проблем при стартиране на нов сензор](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html)
- Пълен списък: вижте **Troubleshooting** на [страницата на xDrip за Dexcom](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

## Libre 1

- Настройте вашия мост от NFC към Bluetooth в xDrip
    
    → Hamburger Menu (1) → Settings (2) → Less common settings (3) → Bluetooth Settings (4)

- В Bluetooth Settings задайте отметките точно както на снимките по-долу (5)
    
    - Изключете watchdogs, защото те ще рестартират Bluetooth на телефона и ще прекъснат връзката ви с помпата.
    
    ![Настройки на xDrip за Libre Bluetooth 1](../images/xDrip_Libre_BTSettings1.png)

- Можете да опитате да активирате следните настройки (7)
    
    - Use scanning
    - Trust Auto-Connect
    - Use Background Scans

- Ако лесно губите връзка с моста или трудно възстановявате връзката, **ИЗКЛЮЧЕТЕ ГИ** (8).
    
    ![Настройки на xDrip за Libre Bluetooth 2](../images/xDrip_Libre_BTSettings2.png)

- Оставете всички други опции деактивирани, освен ако не знаете защо искате да ги активирате.
    
    ![Настройки на xDrip за Libre Bluetooth 3](../images/xDrip_Libre_BTSettings3.png)

### Ниво на батерията на Libre smart reader

- Нивото на батерията на мостове като MiaoMiao и Bubble може да се показва в AAPS (но не и при Blucon).
- Подробности можете да намерите на [страницата със снимки](#screens-sensor-level-battery).

### Свързване на Libre Transmitter и стартиране на сензора

- Ако вашият сензор го изисква (Libre 2 EU и Libre 1 US), инсталирайте последния out of process алгоритъм.

- Сензорът ви трябва вече да е стартиран с приложението на производителя или с четеца (xDrip не може да стартира или спира сензори Libre).

- Задайте източника на данни на Libre Bluetooth.
    
    → Hamburger Menu (1) → Settings (2) → Изберете Libre Bluetooth в Hardware Data source (3)
    
    ![xDrip – стартиране на Libre трансмитер и сензор 1](../images/xDrip_Libre_Transmitter01.png)

- Сканирайте за Bluetooth устройства и свържете моста.
    
    → Hamburger Menu (1) → Scan Bluetooth (2) → Scan (3)
    
    - Ако xDrip не може да намери моста, уверете се, че той не е свързан с приложението на производителя. Сложете го да се зарежда и го рестартирайте (reset).
    
    ![xDrip – стартиране на Libre трансмитер и сензор 2](../images/xDrip_Libre_Transmitter02.png)

- Стартирайте сензора в xDrip.
    
        {admonition} Предупреждение за безопасност
        :class: warning
        Не използвайте данните от сензора, преди да е минал едночасовият период на загряване: стойностите може да са изключително високи и да доведат до грешни решения в AAPS.
    
    → Hamburger Menu (1) → Start sensor (2) → Start sensor (3) → Задайте точния час, в който сте го стартирали с четеца или приложението на производителя. Ако не сте го стартирали днес, отговорете „Not Today“ (4).

![xDrip – стартиране на Libre трансмитер и сензор 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app)=

## Модифицирано приложение за Libre 2

- Задайте източника на данни на Libre patched app.
    
    → Hamburger Menu (1) → Settings (2) → Изберете Libre (patched App) в Hardware Data source (3)
    
    ![Модифицирано приложение Libre – xDrip 1](../images/xDrip_Libre_Patched01.png)

- Можете да добавите `BgReading:d,xdrip libre_receiver:v` в Less Common Settings->Extra Logging Settings->Extra tags for logging. Това ще записва допълнителни съобщения за грешки за отстраняване на проблеми.

![Записване в дневника на LibreLink в xDrip](../images/Libre2_Tags.png)