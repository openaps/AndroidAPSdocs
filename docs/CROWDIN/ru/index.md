# Добро пожаловать в Документацию по AndroidAPS (AAPS)

![изображение](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## Overview of the AAPS documentation ("The docs")

Under "Getting Started", the [Introduction](introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. The **Setting up AAPS** section contains step-by-step instructions to do this. It covers choosing and [setting up your reporting server](setting-up-the-reporting-server.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. It also covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app, and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You then progress through the objectives, which will help you to optimise your settings as you unlock the full functionality of the **AAPS** app.

The [Remote control and Following](remote-control.md) section highlights a real strength of **AAPS**, which is that there are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android auto so you can view glucose levels in the car.

Подраздел [Куда обратиться за помощью?](Where-To-Go-For-Help/Connect-with-other-users.html) поможет найти куда обратиться за помощью, в зависимости от вашего опыта работы с AAPS. Важно, чтобы вы не чувствовали себя оставленными без поддержки, особенно в начале, и для того, чтобы быстрее связаться с другими, прояснять вопросы и решать обычные заблуждения. Опыт показывает, что многие пользователи AAPS имеют вопросы, которые они не смогли решить самостоятельно. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! Призываем пользователей любого уровня задавать столько вопросов, сколько необходимо для безопасной работы.

В подразделе [Глоссарий](Getting-Started/Glossary.md) мы собрали сокращения (или короткие названия), используемые в AAPS. Например, где можно выяснить, что значат сокращения ISF или TT.

  Поскольку требования сильно отличаются от всего, что вы, возможно, устанавливали раньше, мы рекомендуем следовать инструкциям, шаг за шагом в первые несколько раз при создании приложения, чтобы у вас было более четкое представление о том, как происходит процесс если все указания выполняются в точности. Помните, что спешить здесь не надо. В дальнейшем, когда вы будете собирать новую версию, все пойдет гораздо быстрее. Таким образом, у вас будет больше возможностей заметить, что что-то пошло не так, не отклоняясь слишком далеко. Важно сохранить файл хранилища ключей (файл.jks, используемый для подписи приложения) в безопасном месте, чтобы всегда использовать один и тот же файл хранилища ключей и пароль при создании новой версии AAPS, поскольку именно этот файл гарантирует, что каждая новая версия приложения «запоминает» всю информацию, которую вы предоставили ей в предыдущих версиях приложения, и, таким образом, обновления будут проходить максимально гладко. В среднем можно предполагать, что будет одна новая версия и 2-3 обязательных обновления в год. Эта цифра основана на опыте и может измениться в будущем. Но мы хотим дать вам представление о том, чего ожидать. Когда вы наберетесь опыта в обновлении AAPS, все шаги, необходимые для создания обновлённого приложения, займут в среднем всего 15-30 минут. Однако, в начале кривая обучения может быть довольно крутой, так как многие шаги не всегда интуитивно понятны для новых пользователей! Так что не отчаивайтесь, если обнаружите, что у вас ушло полдня или даже целый день не без помощи сообщества до того, как вы наконец закончили процесс обновления. Если вы почувствуете разочарование, сделайте небольшой перерыв и часто, после прогулки, вы обнаружите, что готовы возобновить работу.


  Мы также составили список вопросов и ответов на большинство типичных трудностей, с, которыми, скорее всего, пользователи столкнутся при первых нескольких обновлениях, Они расположены в разделе FAQ; а также в разделе "Как установить AAPS? котораый имеет подраздел "Устранение неполадок".

Подраздел [Настройка компонентов](Configuration/BG-Source.md) объясняет, как правильно интегрировать отдельные модули в AAPS, а также как настроить их на совместную работу. Все компоненты перечислены в соответствующих разделах: мониторинг, настройки xDrip, помпы, телефоны, Nightscout и смарт-часы. Работа сенсоров (ГК) и управление инсулиновой помпой особенно важны для понимания. Подраздел [Конфигурация](Configuration/BG-Source.md) описывает конфигурации помп для AAPS.

Далее следует особо важный подраздел [Использование AAPS](Getting-Started/Screenshots.md), в котором происходт постепенное введение в пользование AAPS через безопасный поэтапный процесс, разработанный для того, чтобы вы/ваш ребенок были хорошо подготовлены к пользованию более сложными опциями в приложении. Эти цели специально разработаны таким образом, чтобы постепенно разблокировать больше возможностей AAPS и переключиться с открытого на закрытый цикл.

Кроме того, есть подраздел [Общие подсказки](Usage/Timezone-traveling.md) напр. Информация о том, как иметь дело с пересечением часовых поясов, а также о том, что делать во время перехода на сезонное время - два раза в год при использовании AAPS.

Есть подраздел для [медицинских работников](Resources/clinician-guide-to-AAPS.md), которые проявили интерес к технологии искусственной поджелудочной железы, такой как AAPS, или для пациентов, которые хотят делиться этой информацией со своими лечащими врачами.

Наконец, в подразделе [Как помочь?](make-a-PR.md) мы даем информацию, о том, как предложить небольшие или большие изменения в документации и вместе с нами работать над ней. We further need support for [translation of the documentation](translations.md). It also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. Таким образом, правильная информация будет доступна, если другие также попытаются найти ответы на те же вопросы в будущем.

 Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

:::{admonition} SAFETY NOTICE
:class: danger The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user.

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels.
:::

:::{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout в настоящее время не обеспечивает соблюдение политик конфиденциальности HIPAA (Health Insurance Portability and Accountability Act — Акт о мобильности и подотчётности медицинского страхования).
- Use of code from github.com is without warranty or formal support of any kind. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Они используются в информационных целях и не подразумевается какой-либо принадлежности к ним или их одобрения.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

:::

(AAPS-Documentation-Index)=

## AAPS Documentation Index

```{toctree}
:caption: Изменить язык

Изменить язык <./changelanguage.md>
```
```{toctree}
:caption: Getting started

Introduction to AAPS <./introduction.md>

Preparing for AAPS <preparing.md>

```

```{toctree}
:caption: Настройка AAPS
Настройка сервера отчетов <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Сборка AAPS <./Installing-AndroidAPS/building-AAPS.md>
Перенос и установка AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Мастер установки <./Installing-AndroidAPS/setup-wizard.md>
Изменение конфигурации AAPS <./Installing-AndroidAPS/change-configuration.md>
Прохождение целей <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: Remote control and following

Remote control <remote-control.md>
Following-only <following-only.md>
Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Дополнительная информация по установке APPS

Примечания к выпускам <./Installing-AndroidAPS/Releasenotes.md>

Обновление версии или ветки <./Installing-AndroidAPS/Update-to-new-version.md>

Ветка разработчиков Dev <./Installing-AndroidAPS/Dev_branch.md>

Отдельная учетная запись для AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

```

```{toctree}
:caption: Полный замкнутый цикл

Полный замкнутый цикл <./Usage/FullClosedLoop.md>

```

(Указатель-настройка-компонентов)=

```{toctree}
:caption: Настройка компонентов

CGM/FGM <./Configuration/BG-Source.md>

Настройки xDrip <./Configuration/xdrip.md>

Выбор помпы <./Getting-Started/Pump-Choices.md>

Телефоны <./Hardware/Phoneconfig.md>

Часы  <./Hardware/Smartwatch.md>

```

```{toctree}
:caption: AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

OpenAPS features <./Usage/Open-APS-features.md>

Dynamic ISF <./Usage/DynamicISF.md>

COB calculation <./Usage/COB-calculation.md>

Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>

Profile switch <./Usage/Profiles.md>

Temp-targets <./Usage/temptarget.md>

Extended carbs <./Usage/Extended-Carbs.md>

Automation <./Usage/Automation.md>

Autotune (dev only) <./Usage/autotune.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>



Custom Watchface reference document <./Usage/Custom_Watchface_Reference.md>

Exchange Site Custom Watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: Общие советы

Пересечение часовых поясов с помпой<./Usage/Timezone-traveling. d>

Доступ к лог-файлам <./Usage/Accessing-logfiles.md>

Accu-Chek Combo советы по основному использованию <. Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Экспорт/Импорт настроек <./Usage/ExportImportSettings.md>

инженерный режим xDrip <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Устранение неполадок

Устранение неполадок <./Usage/troubleshooting.md>

AAPSClient <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: Часто задаваемые вопросы

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Глоссарий

Глоссарий <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Куда обратиться за помощью

Полезные ресурсы для чтения перед запуском <. Where-To-Go-For-Help/Background-reading.md>

Куда обратиться за помощью <. Where-To-Go-For-Help/Connect-with-other-users.md>

Обновления документации & изменения <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: для медицинских работников

для клиник <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: Как помочь

как помочь <./Getting-Started/How-can-I-help. d>

Как перевести приложение и документацию <./translations. d>

Как редактировать документы <./make-a-PR.md>

Состояние переводов <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Прежнее

Подсказки и проверки после обновления до AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Проверки после обновления до AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```
