# Настройка на сървъра за отчети

В момента с **AAPS** можете да използвате два сървъра за отчети:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Сървъри за отчети](../images/Building-the-App/ReportingServer.png)

Препоръчваме да използвате Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout е уеб приложение, което може да записва и показва данните от вашия CGM и от **AAPS** и създава отчети. Това е мощна платформа, която е интегрирана в **AAPS** от много години. Той позволява на потребителите и болногледачите да следят данните за диабета на пациента почти в реално време (ако има добра интернет връзка между всички участващи компоненти, между получаването и показването на данните може да минат само няколко секунди). It also carries the remote commands that caregivers send to **AAPS** from **AAPSClient** (see [Master ↔ Client control](#client-master-control)).

Nightscout се предоставя като софтуер с отворен код. Всеки може да създаде и поддържа сървър на Nightscout, като използва безплатни или платени услуги.

Повече информация ще намерите на [уебсайта на проекта Nightscout](http://nightscout.github.io/).

### Вариант 1 – Настройте сами своя сървър Nightscout

Създаването на ваш сървър за отчети Nightscout може да изисква едно или повече уеб приложения, които ще трябва да се поддържат. За да имате напълно безплатна услуга, може да се наложи да преместите своя сайт и данни на Nightscout, ако и когато доставчиците премахнат безплатния план.

Описание как да настроите Nightscout, с предимствата и недостатъците на различните варианти за работа, включително приблизителна оценка на разходите, ще намерите [тук](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Вариант 2 – Платена хоствана услуга Nightscout

Има и възможности от различни доставчици, които хостват Nightscout за вас срещу месечна такса. Разходите са поносими, а предимството на хостваната услуга е, че не е нужно да разбирате от ИТ или да имате собствена инфраструктура.


Настоящите потребители на Nightscout могат от време на време да преценяват къде и как е хостван техният сървър Nightscout и да преминат към друг вариант, ако той стане по-подходящ.

Някои услуги, които предлагат хостван Nightscout, са изброени [тук](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Допълнителна конфигурация на Nightscout

След като вашият Nightscout е настроен и работи, вижте [страницата за настройка на Nightscout](../SettingUpAaps/Nightscout.md) за допълнителни съображения.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool е достъпен в **AAPS** от версия 3.2, която излезе в края на 2023 г.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool is not suitable for sharing real-time information with caregivers.  
От друга страна, Tidepool може да бъде отлично решение за споделяне на отчети с ендокринолога на пациента, ако Nightscout не е приемливо решение.  
```

Tidepool е проект с [отворен код](https://github.com/tidepool-org). Той предлага безплатен профил на сървърите на Tidepool.

Повече информация за настройването на Tidepool с AAPS ще намерите [тук](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**Не** е нужно да използвате приложението за качване в Tidepool: **AAPS** ще качва вместо вас кръвната захар, леченията и базала. Нужен ви е само личен профил в Tidepool. Не качвайте данните си с отделния инструмент за качване на Tidepool (Tidepool uploader), защото това ще създаде повтарящи се стойности.  
```

## Следваща стъпка

След като настроите сървъра си за отчети, можете да конфигурирате **AAPS** на телефона си със [Съветника за настройване](./SetupWizard.md), който също ще свърже **AAPS** с вашия сървър за отчети.