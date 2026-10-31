# Загрузчик Open Humans

## Поделитесь своими данными с исследователями

Вы можете помочь науке, поделившись данными с исследовательскими проектами! Это помогает ученым помогать другим людям, развивать новые научные идеи и расширять диапазон возможностей систем замкнутого цикла с открытым исходным кодом. AAPS готов к синхронизации данных с [Open Humans](https://www.openhumans.org), платформой, позволяющей подключаться, загружать и хранить ваши персональные данные – такие, как генетика, активность и данные о здоровье.

Вы сохраняете полный контроль над тем, что происходит с вашими данными и какие проекты вы хотите поддержать, предоставляя им доступ к вашим данным. В зависимости от проекта, к которому вы присоединились, данные оцениваются и используются разными способами.

Следующие данные будут загружены в вашу учетную запись Open Humans:

- Гликемия
- События портала терапии (кроме примечаний)
- Пролонгированные болюсы
- Смены профиля
- Суммарные суточные дозы
- Временная базальная скорость
- Временные цели
- Настройки
- Версия приложения
- Модель устройства
- Размеры экрана

Секретная или конфиденциальная информация, такая как URL-адрес Nightscout или API secret, не загружается.

## Setup

1. Если это еще не сделано, создайте свой аккаунт на [Open Humans](https://www.openhumans.org). Можете для этого использовать существующие учетные записи Google или Facebook, если хотите.
2. Enable the **Open Humans** plugin in [**Configuration** > **Communication**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans enabled in Configuration > Communication](../images/OHUploader1.png)

3. Tap **Settings** on the **Open Humans** card. You can restrict uploads to times when the phone uses Wi-Fi (**WiFi only**) and/or is charging (**Charging only**).

![Open Humans settings with WiFi only and Charging only](../images/OHUploader_settings.png)

4. Tap **Open plugin** on the **Open Humans** card, then tap **Setup**.

![Open Humans plugin screen with the Setup button](../images/OHUploader_setup.png)

5. On the **Welcome to Open Humans** screen, tap **Next**. Read the **Consent** screen carefully: it shows the terms of use and which data is uploaded and not uploaded.
6. Switch on **I understand and agree.** (1) and tap **Login to Open Humans** (2).

![Open Humans Welcome and Consent screens in AAPS](../images/OHUploader2.png)

7. Откроется сайт Open Humans. Войдите под своей учетной записью.
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile (1).
9. Click **Authorize project** (2).

![Login and project authorization on the Open Humans website](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
The screenshots above show an earlier version of the Open Humans website and still use the old project name **AndroidAPS Uploader**. The steps are the same.
```

10. Back in **AAPS**, the **Final touches** screen asks whether you want to proceed. Tap **Proceed**.
11. Wait until **We're done!** appears, then tap **Close**. From now on, your phone uploads data in the background from time to time.
12. The **Open Humans** plugin screen now shows your **Project Member ID**. Tap **Upload now** if you want to start an upload right away.
13. Tap **Logout** if you want to stop uploading data to Open Humans.
14. Уведомление Android сообщит о работающей загрузке.

![завершение настройки Open Humans](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the confirmation screens are **Final touches** and **We're done!**, there is no queue size, and the buttons are **Upload now** and **Logout**.
```

15. Управлять своими данными теперь можно, войдя на сайт [Open Humans](https://www.openhumans.org).

![управление данными Open Humans](../images/OHWeb.png)

## Совместные возможности

### ['Открытый' проект](https://www.open-diabetes.eu/)

"ОТКРЫТЫЙ" проект объединяет международный и межсекторальный консорциум пациентов, медиков, ученых в области социальных наук, компьютерщиков и организации по защите прав пациентов для изучения различных аспектов систем искусственной поджелудочной железы (DIY APS), число которых постоянно растет. Подробности - на их [сайте](https://www.open-diabetes.eu/).

В сентябре 2020 Открытый проект начал [исследование](https://survey.open-diabetes.eu/), включающее возможность предоставлять свои данные проекту Open Humans. [Инструкция](https://open-diabetes.eu/en/open-survey/survey-tutorials/) по предоставлению своих данных Открытому проекту доступна на их сайте наряду с самим исследованием.

### [Общие Данные OpenAPS](https://www.openhumans.org/activity/openaps-data-commons/)

Проект Общие Данные OpenAPS был создан, чтобы предоставить простой способ обмена данными сообщества DIYAPS для исследований. Эти данные предоставляются как традиционным исследователям, так и группами или отдельными лицами из сообщества, которые хотят изучать эти данные в рамках своих собственных исследовательских проектов. Проект Общие Данные базируется на платформе Open Humans и дает возможность пользователям лего выгружать и делиться данными AAPS, Loop и OpenAPS.

Свои данные можно передать в Open Humans одним из трех способов:

1. используйте опцию загрузчика AAPS для передачи данных в Open Humans
2. используйте передачу данных Nightscout для передачи данных в Open Humans
3. вручную загружать файлы данных в Open Humans.

После того, как вы создали учетную запись и начали передавать данные в Open Humans, вы также можете (если захотите) присоединиться к OpenAPS Data Commons, чтобы пожертвовать данные для исследований.

## Условия пользования

Это инструмент с открытым кодом для передачи данных в [Open Humans](https://www.openhumans.org). Мы сохраняем за собой право передавать данные третьим лицам без вашего явного разрешения. Данные, которые получает проект и приложение, идентифицируются по случайному идентификатору пользователя и будут безопасно переданы только на учетную запись Open Humans с вашей авторизацией на этот процесс. Вы можете остановить загрузку и удалить ваши данные в любое время через [www.openhumans.org](https://www.openhumans.org). Помните, что некоторые проекты, получающие данные, могут не поддерживать это.

Также см. условия пользования [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Конфиденциальность данных

Open Humans заботятся о защите конфиденциальности и назначают числовой идентификатор для каждого проекта. This allows projects to recognize but not identify you. Идентификатор приложения, загруженного из AAPS, помогает администрировать данные. Больше информации можно найти здесь:

- [Политика использования данных Open Humans](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
