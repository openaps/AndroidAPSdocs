# Настройка сервера отчетности

Для работы с **AAPS**: на данный момент существуют два сервера отчетности:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Серверы отчетов](../images/Building-the-App/ReportingServer.png)

Мы рекомендуем использовать Nightscout.

## Nightscout

Nightscout — мощная платформа, интегрированная в **AAPS** уже много лет. Он позволяет пользователям и лицам, осуществляющим уход, отслеживать данные состоянии гликемии и других параметрах пациента практически в режиме реального времени (между получением и предоставлением данных может пройти всего несколько минут при хорошем интернет-соединении между всеми компонентами). Он также позволяет родителям и опекунам отправлять удаленные команды на **AAPS**.

Nightscout существует как программное обеспечение с открытым исходным кодом. Любой человек может создать и управлять сервером Nightscout используя либо бесплатные, либо платные сервисы.

### Вариант 1 - настройте сервер Nightscout самостоятельно

Создание сервера Nightscout может потребовать одного или нескольких веб-приложений, которые будут нуждаться в обслуживании. Чтобы получить совершенно бесплатную услугу, вам придется переносить сайт и данные Nightscout, если провайдер прекратит бесплатное обслуживание.

Описание того, как можно настроить Nightscout, с преимуществами и недостатками различных вариантов работы, включая оценку затрат, можно найти [здесь](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Вариант 2 - Оплата хостинга Nightscout

Есть также варианты от различных поставщиков услуг, которые размещают Nightscout за ежемесячную плату. Расходы посильные, а преимущество варианта размещения- в том, что не нужно разбираться в IT -технологиях или иметь операционную инфраструктуру.

Существующие пользователи Nightscout могут время от времени пересматривать, где и как размещен их сервер Nightscout, и переходить на другой, более подходящий вариант.

Некоторые сервисы Nightscout перечислены в списке [здесь](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

## Tidepool

Tidepool стал доступен только в **AAPS** версии 3.2, которая была выпущена в конце 2023 года.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
As there is a delay of three hours between data income and data reporting when using **AAPS**, Tidepool it is not suitable for sharing real-time information with caregivers.  
On the other hand, Tidepool can be a great solution for sharing reports with a patient's endocrinologist if Nightscout is not an accepted solution.  
```

Tidepool - это проект с [открытым исходным кодом](https://github.com/tidepool-org). Он предлагает бесплатную учетную запись на серверах Tidepool.

Учетную запись Tidepool можно создать [здесь](https://app.tidepool.org/signup).

```{admonition} **AAPS** has a the uploader for Tidepool integrated
:class: note
You do **not** need to use the uploader app to Tidepool: **AAPS** will upload blood glucose, treatments and basal for you. You only need a personal account with Tidepool. Do not upload your data with the separate Tidepool uploader tool as it will lead to duplicate values.  
```

После настройки сервера отчетов вы можете либо создать [выделенную учетную запись Google для AAPS](Dedicated-Google-account-for-AAPS.md), либо перейти непосредственно к [созданию приложения AAPS](building-AAPS.md).
