# Безопасность прежде всего

**Когда вы решили сделать собственную искусственную поджелудочную железу, важно помнить о безопасности и понимать последствия всех ваших действий**

## Общие настройки

- AndroidAPS - всего лишь средство для более качественного управления диабетом. Не относитесь к ИПЖ как к средству "поставил и забыл"!
- Не считайте, что AndroidAPS никогда не делает ошибок. Эта система контролирует подачу инсулина в ваш организм: наблюдайте за ней все время, понимайте, как она работает, научитесь интерпретировать ее действия.
- Помните, что, после того, как телефон сопряжен с помпой, он может заставить ее делать все что угодно. Используйте ваш телефон только для AndroidAPS а, если он находится у ребенка, только для необходимых коммуникаций. Не устанавливайте ненужных приложений или игр (!). С ними могут проникнуть вредоносные программы, трояны, вирусы или боты, которые могут нарушить или остановить работу вашей системы.
- Устанавливайте все обновления безопасности, предоставляемые разработчиком вашего смартфона и Google.
- Также, при работе с замкнутой системой ИПЖ придется изменить привычки управления диабетом. Например, Некоторые сообщают, что им приходится меньше купировать гипо, так как AndroidAPS уменьшает расход инсулина.

## СМС-коммуникатор

- AndroidAPS позволяет вам контролировать телефон ребенка удаленно посредством текстовых сообщений (смс). Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом.
- AndroidAPS также сообщит вам текстовым сообщением, выполнены ли ваши удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
```
