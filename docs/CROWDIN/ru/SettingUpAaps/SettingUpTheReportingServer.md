# Настройка сервера отчетности

Для работы с **AAPS**: на данный момент существуют два сервера отчетности:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Серверы отчетов](../images/Building-the-App/ReportingServer.png)

Мы рекомендуем использовать Nightscout.

## Nightscout

Nightscout is a web application that can log and display your CGM data and **AAPS** data and creates reports. It is a powerful platform which has been integrated into **AAPS** for many years. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Он также позволяет родителям и опекунам отправлять удаленные команды на **AAPS**.

Nightscout существует как программное обеспечение с открытым исходным кодом. Любой человек может создать и управлять сервером Nightscout используя либо бесплатные, либо платные сервисы.

You can find more information on the [website of the Nightscout project](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Создание сервера Nightscout может потребовать одного или нескольких веб-приложений, которые будут нуждаться в обслуживании. Чтобы получить совершенно бесплатную услугу, вам придется переносить сайт и данные Nightscout, если провайдер прекратит бесплатное обслуживание.

Описание того, как можно настроить Nightscout, с преимуществами и недостатками различных вариантов работы, включая оценку затрат, можно найти [здесь](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Вариант 2 - Оплата хостинга Nightscout

Есть также варианты от различных поставщиков услуг, которые размещают Nightscout за ежемесячную плату. Расходы посильные, а преимущество варианта размещения- в том, что не нужно разбираться в IT -технологиях или иметь операционную инфраструктуру.

Существующие пользователи Nightscout могут время от времени пересматривать, где и как размещен их сервер Nightscout, и переходить на другой, более подходящий вариант.

Некоторые сервисы Nightscout перечислены в списке [здесь](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

One you have your Nightscout instance up and running, see [Nightscout configuration page](../SettingUpAaps/Nightscout.md) for additional considerations.

## Tidepool

Tidepool стал доступен только в **AAPS** версии 3.2, которая была выпущена в конце 2023 года.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool - это проект с [открытым исходным кодом](https://github.com/tidepool-org). Он предлагает бесплатную учетную запись на серверах Tidepool.

More information about setting up Tidepool with AAPS [here](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

## Next step

Once you have set up your reporting server, you can now either set up a [dedicated Google account for AAPS use](../SettingUpAaps/DedicatedGoogleAccountForAaps.md), or go straight to [building the AAPS app](../SettingUpAaps/BuildingAaps.md).
