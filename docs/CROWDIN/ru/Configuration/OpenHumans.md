# Загрузчик Open Humans

## Поделитесь своими данными с исследователями

Вы можете помочь науке, поделившись данными с исследовательскими проектами! Это помогает ученым помогать другим людям, развивать новые научные идеи и расширять диапазон возможностей систем замкнутого цикла с открытым исходным кодом. AAPS готов к синхронизации данных с [Open Humans](https://www.openhumans.org), платформой, позволяющей подключаться, загружать и хранить ваши персональные данные – такие, как генетика, активность и данные о здоровье.

Вы сохраняете полный контроль над тем, что происходит с вашими данными и какие проекты вы хотите поддержать, предоставляя им доступ к вашим данным. В зависимости от проекта, к которому вы присоединились, данные оцениваются и используются разными способами.

Следующие данные будут загружены в вашу учетную запись Open Humans:

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Переключения профиля
- Суммарные суточные дозы
- Временная базальная скорость
- Временные цели
- Настройки
- Версия приложения
- Модель устройства
- Размеры экрана

Секретная или конфиденциальная информация, такая как URL-адрес Nightscout или API secret, не загружается.

## Настройки

1. Если это еще не сделано, создайте свой аккаунт на [Open Humans](https://www.openhumans.org). Можете для этого использовать существующие учетные записи Google или Facebook, если хотите.
2. Включите модуль “Open Humans” в [Конфигураторе](../Configuration/Config-Builder.md).
3. При помощи значка шестеренки откройте его настройки. You can restrict upload to times when phone uses Wi-Fi and/or is charged.
4. Open the Open Humans Plugin (either trough OH tab or hamburger menu) and click 'LOGIN'.

```{image} ../images/OHUploader1.png
:alt: Open Humans Config Builder
```

5. Read the given information about the Open Humans Uploader and terms of use carefully.
6. Confirm by checking the box and click 'LOGIN'.
7. Open Humans website will be opened. Login with your credentials.
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile.
9. Click button 'Authorize project'.

```{image} ../images/OHUploader2.png
:alt: Open Humans Terms of Use + Login
```

10. Returning to AAPS you will see a prompt that login succeeded.
11. Keep Open Humans Uploader plugin and phone turned on for setup to complete.
12. After clicking close you will see your member ID. Queue sizes > 0 shows that there is still data to be uploaded.
13. Click 'LOGOUT' if you want to stop uploading data to Open Humans.
14. Android notification will inform you about running upload.

```{image} ../images/OHUploader3.png
:alt: Open Humans finish setup
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Open Humans manage data
```

## Sharing Opportunities

### [The 'OPEN' project](https://www.open-diabetes.eu/)

The 'OPEN' project brings together an international and intersectoral consortium of patient innovators, clinicians, social scientists, computer scientists and patient advocacy organizations in order to investigate various aspects of Do-it-Yourself Artificial Pancreas Systems (DIY APS) that are used by an increasing number of people with diabetes. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

The OpenAPS Data Commons was created to enable a simple way to share data sets from the DIYAPS community for research. The data is shared both with traditional researchers who will create traditional research studies, and with groups or individuals from the community who want to review data as part of their own research projects. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AAPS, Loop, and OpenAPS.

You can get your data into Open Humans via one of three ways:

1. use the AAPS uploader option to get your data into Open Humans
2. use the Nightscout Data Transfer to get your data into Open Humans
3. manually upload data files into Open Humans.

Once you've created an account and gotten your data flowing into Open Humans, make sure to also join the OpenAPS Data Commons in order to donate your data for research if you choose.

## Terms of Use

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). We retain no rights to share your data with third parties without your explicit authorization. The data the project and app receive are identified via a random user ID and will only be securely transmitted to an Open Humans account with your authorization of that process. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Beware that some projects that receive data may not support this.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Data Privacy

Open Humans takes care of protecting your privacy by assigning a numerical ID to you for each project. This allows projects to recognize but no identify you. The Application ID uploaded by AAPS is similar and only helps administrate the data. More information can be found here:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
