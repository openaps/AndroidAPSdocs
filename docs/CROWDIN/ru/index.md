# Добро пожаловать в Документацию по AndroidAPS (AAPS)

![изображение](./images/basic-outline-of-AAPS.png)

AAPS - это приложение с открытым кодом для людей, живущих с инсулинзависимым сахарным диабетом, которое работает как система искусственной поджелудочной железы (ИПЖ) на базе телефонов с операционной системой Андроид. It uses an openAPS software algorithm which aims to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need a supported and FDA/CE approved insulin pump, and a continuous glucose meter.

Interested? Read more about AAPS in the [introduction](introduction.md).

```{warning}
**ВАЖНОЕ ЗАМЕЧАНИЕ О БЕЗОПАСНОСТИ**

Безопасность функционирования функций AAPS, обсуждаемых в этой документации, основана на безопасности всех устройств, используемых в вашей системе. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. *Не используйте* модифицированные, самодельные или испорченные инсулиновые помпы и/или устройства мониторинга для создания системы AAPS.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
```

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout в настоящее время не обеспечивает соблюдение политик конфиденциальности HIPAA (Health Insurance Portability and Accountability Act — Акт о мобильности и подотчётности медицинского страхования). Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Они используются в информационных целях и не подразумевается какой-либо принадлежности к ним или их одобрения.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

## Как читать документацию?

We have provided this subsection of the documentation especially for those who are new to concept of Do-It-Yourself-APS (Artificial-Pancreas-Systems) in order to best show how to get acquainted with the information we consider to be the most important, especially in terms of understanding the reasons behind the "limits" set in place when you are first beginning your AAPS journey. Эти ограничения безопасности были разработаны на протяжении многих лет в результате наблюдений за непреднамеренными ошибками, которые появляются у новых пользователей при обучении создании и первом успешном запуске AAPS - как правило, эти ошибки возникают просто потому, что пользователь был так рад начату работы с системой, что забыл посвятить время глубокому пониманию информации в этой документации. Мы все были такими!

Конечно, подход, "читать все подряд" имеет основания и, конечно, он правилен. Однако новички нередко перегружаются объемом и разнообразием информации, которую они пытаются понять всю сразу! Поэтому эти несколько разделов предназначены дать основы знаний, необходимых для успешного запуска выбранной вами конфигурации с минимумом исправлений. Новые пользователи могут вернуться к этому руководству, когда столкнутся с незнакомыми аспектами системы; и напомнить о том, где можно найти документацию с более подробной информацией. Важно также изложить возможности AAPS на начальном этапе, поскольку некоторые необходимые инструменты в настоящее время недоступны (из-за возможностей инсулиновых помп или мониторинга CGM в некоторых странах).) или просто предлагают меньший/иной функционал, чем предполагалось изначально. Finally, it is important to acknowledge that many experience-related aspects inside this documentation only become pertinent as you begin to use AAPS in real-time. Точно так же, как почти невозможно научиться отлично играть в спортивные игры, только изучив правила, требуется сочетание изучения основ функционирования AAPS и применения этих правил при освоении AAPS.

Подраздел [Начало работы](Getting-Started/Safety-first.md) необходимо прочитать, чтобы понять общую концепцию, для чего нужна система искусственной поджелудочной железы; это особенно актуально для пользователей AAPS.

Подраздел [Что мне нужно?](Module/module.md) перечисляет системы непрерывного мониторинга глюкозы и инсулиновые помпы, которые доступны для AAPS. Он важен для того, чтобы система AAPS была собрана и правильно построена в первый раз вокруг и хорошо работала в реальных ситуациях.

Подраздел [Куда обратиться за помощью?](Where-To-Go-For-Help/Connect-with-other-users.html) поможет найти куда обратиться за помощью, в зависимости от вашего опыта работы с AAPS. Важно, чтобы вы не чувствовали себя оставленными без поддержки, особенно в начале, и для того, чтобы быстрее связаться с другими, прояснять вопросы и решать обычные заблуждения. Опыт показывает, что многие пользователи AAPS имеют вопросы, которые они не смогли решить самостоятельно. Из-за большого числа пользователей, время ответа на вопросы обычно небольшое, как правило, несколько часов. Не беспокойтесь о запросе помощи, так как глупых вопросов не бывает! Призываем пользователей любого уровня задавать столько вопросов, сколько необходимо для безопасной работы. Просто попробуйте.

В подразделе [Глоссарий](Getting-Started/Glossary.md) мы собрали сокращения (или короткие названия), используемые в AAPS. Например, где можно выяснить, что значат сокращения ISF или TT.

Для родителей, желающих создать AAPS для своих детей, мы рекомендуем подраздел [AAPS для детей](Children/Children.md), где находится подробная информация о дистанционном управлении AAPS вашего ребенка и более полный профиль безопасности по сравнению с взрослыми. Вы должны иметь возможность успешно контролировать своих детей и понимать все передовые возможности, которые предлагает AAPS.

Теперь, когда у вас есть четкое представление о концепциях, которые использует AAPS, вы знаете, где найти необходимые инструменты для создания своей системы APS, знаете, где можно получить помощь в случае сложностей, самое время приступить к созданию приложения! The subsection [How to install AAPS?](Installing-AAPS/Building-APK.md) shows you this in detail. Поскольку требования сильно отличаются от всего, что вы, возможно, устанавливали раньше, мы рекомендуем следовать инструкциям, шаг за шагом в первые несколько раз при создании приложения, чтобы у вас было более четкое представление о том, как происходит процесс если все указания выполняются в точности. Помните, что спешить здесь не надо. В дальнейшем, когда вы будете собирать новую версию, все пойдет гораздо быстрее. Таким образом, у вас будет больше возможностей заметить, что что-то пошло не так, не отклоняясь слишком далеко. Важно сохранить файл хранилища ключей (файл.jks, используемый для подписи приложения) в безопасном месте, чтобы всегда использовать один и тот же файл хранилища ключей и пароль при создании новой версии AAPS, поскольку именно этот файл гарантирует, что каждая новая версия приложения «запоминает» всю информацию, которую вы предоставили ей в предыдущих версиях приложения, и, таким образом, обновления будут проходить максимально гладко. В среднем можно предполагать, что будет одна новая версия и 2-3 обязательных обновления в год. Эта цифра основана на опыте и может измениться в будущем. Но мы хотим дать вам представление о том, чего ожидать. Когда вы наберетесь опыта в обновлении AAPS, все шаги, необходимые для создания обновлённого приложения, займут в среднем всего 15-30 минут. Однако, в начале кривая обучения может быть довольно крутой, так как многие шаги не всегда интуитивно понятны для новых пользователей! Так что не отчаивайтесь, если обнаружите, что у вас ушло полдня или даже целый день не без помощи сообщества до того, как вы наконец закончили процесс обновления. Если вы почувствуете разочарование, сделайте небольшой перерыв и часто, после прогулки, вы обнаружите, что готовы возобновить работу. Мы также составили список вопросов и ответов на большинство типичных трудностей, с, которыми, скорее всего, пользователи столкнутся при первых нескольких обновлениях, Они расположены в разделе FAQ; а также в разделе "Как установить AAPS? котораый имеет подраздел "Устранение неполадок".

Подраздел [Настройка компонентов](Configuration/BG-Source.md) объясняет, как правильно интегрировать отдельные модули в AAPS, а также как настроить их на совместную работу. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. Подраздел [Конфигурация](Configuration/BG-Source.md) описывает конфигурации помп для AAPS.

Далее следует особо важный подраздел [Использование AAPS](Getting-Started/Screenshots.md), в котором происходт постепенное введение в пользование AAPS через безопасный поэтапный процесс, разработанный для того, чтобы вы/ваш ребенок были хорошо подготовлены к пользованию более сложными опциями в приложении. Эти цели специально разработаны таким образом, чтобы постепенно разблокировать больше возможностей AAPS и переключиться с открытого на закрытый цикл.

Кроме того, есть подраздел [Общие подсказки](Usage/Timezone-traveling.md) напр. Информация о том, как иметь дело с пересечением часовых поясов, а также о том, что делать во время перехода на сезонное время - два раза в год при использовании AAPS.

Есть подраздел для [медицинских работников](Resources/clinician-guide-to-AAPS.md), которые проявили интерес к технологии искусственной поджелудочной железы, такой как AAPS, или для пациентов, которые хотят делиться этой информацией со своими лечащими врачами.

Наконец, в подразделе [Как помочь?](make-a-PR.md) мы даем информацию, о том, как предложить небольшие или большие изменения в документации и вместе с нами работать над ней. Нам также нужна поддержка для [перевода документации](translations.md) - очень удобно давать ссылки на соответствующую документацию при ответе на вопросы других пользователей. Таким образом, правильная информация будет доступна, если другие также попытаются найти ответы на те же вопросы в будущем.

```{toctree}
:caption: Change language

Change language <./changelanguage.md>

```

```{toctree}
:caption: Home

Introduction <./introduction.md>

```

```{toctree}
:caption: Начало работы

Подготовка <preparing.md>

Обновления документов &; изменения </Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: дистанционное управление и слежение

дистанционное управление <remote-control.md>
только для фоллоуэров <following-only.md>

```

(index-what-do-i-need)=

```{toctree}
:caption: What do I need

CGM/FGM choices <./Configuration/BG-Source.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Module <./Module/module.md>

```

```{toctree}
:caption: How to Install AAPS

Building the APK <./Installing-AndroidAPS/Building-APK.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

Install git <./Installing-AndroidAPS/git-install.md>

Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
Tidepool setup <./Installing-AndroidAPS/Tidepool.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

(index-configuration)=

```{toctree}
:caption: Configuration

Config builder <./Configuration/Config-Builder.md>

Preferences <./Configuration/Preferences.md>

```

```{toctree}
:caption: AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

Objectives <./Usage/Objectives.md>

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

Android auto <./Usage/Android-auto.md>

Custom Watchface reference document <./Usage/Custom_Watchface_Reference.md>

Exchange Site Custom Watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: General Hints

Crossing timezones with pumps <./Usage/Timezone-traveling.md>

Accessing logfiles <./Usage/Accessing-logfiles.md>

Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Export/Import Settings <./Usage/ExportImportSettings.md>

xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: AAPS for children

Remote monitoring <./Children/Children.md>

SMS commands <./Children/SMS-Commands.md>

Profile helper <./Configuration/profilehelper.md>

```

```{toctree}
:caption: Full Closed Loop

Full Closed Loop <./Usage/FullClosedLoop.md>

```

```{toctree}
:caption: Troubleshooting

Troubleshooting <./Usage/troubleshooting.md>

Nightscout client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: FAQ

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glossary

Glossary <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Where to go for help

Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>

Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: For Clinicians

For Clinicians <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

How to edit the docs <./make-a-PR.md>

State of translations <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>

```

```{note}
**Disclaimer And Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout в настоящее время не обеспечивает соблюдение политик конфиденциальности HIPAA (Health Insurance Portability and Accountability Act — Акт о мобильности и подотчётности медицинского страхования). Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Они используются в информационных целях и не подразумевается какой-либо принадлежности к ним или их одобрения.

Please note - this project has no association with and is not endorsed by: [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) or [Medtronic](<https://www.medtronic.com/>)

```
