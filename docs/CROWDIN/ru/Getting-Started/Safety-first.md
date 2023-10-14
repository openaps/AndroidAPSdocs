# Безопасность прежде всего

**Когда вы решили сделать собственную искусственную поджелудочную железу, важно помнить о безопасности и понимать последствия всех ваших действий**

## Общие настройки

- AAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AAPS will never make mistakes. Эта система контролирует подачу инсулина в ваш организм: наблюдайте за ней все время, понимайте, как она работает, научитесь интерпретировать ее действия.
- Помните, что, после того, как телефон сопряжен с помпой, он может заставить ее делать все что угодно. Only use this phone for AAPS and, if being used by a child, essential communications. Не устанавливайте ненужных приложений или игр (!). С ними могут проникнуть вредоносные программы, трояны, вирусы или боты, которые могут нарушить или остановить работу вашей системы.
- Устанавливайте все обновления безопасности, предоставляемые разработчиком вашего смартфона и Google.
- Также, при работе с замкнутой системой ИПЖ придется изменить привычки управления диабетом. Например, some people report, they need less hypo treatments as AAPS has already reduced insulin.

## СМС-коммуникатор

- AAPS allows you to control a child's phone remotely via text message. Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом.
- AAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.

(Safety-first-aaps-can-also-be-used-by-blind-people)=
## AAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AAPS blind.

We users create the AAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. В системе "замкнутого цикла" с автоматической дозировкой инсулина допускается использовать только испытанные, работоспособные инсулиновые помпы и системы непрерывного мониторинга глюкозы, которые получили соответствующее разрешение таких зарубежных регуляторов как FDA (США) и CE (Европейский союз). Внесение аппаратных или программных технических изменений в это оборудование может стать причиной неконтролируемого введения инсулина, что может повлечь опасные последствия для пациента. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

Допустимо использовать только оригинальные, сертифицированные производителем расходные материалы, такие как инсулиновые картриджи, инфузионные наборы, пристреливатели к ним и т. п. Использование непроверенных или модифицированных материалов может вызвать неточность мониторинга и ошибки дозировки инсулина. Инсулин опасен при неверной дозировке - не рискуйте жизнью, пользуясь неумело переделанными компонентами.

И последнее, вы не должны принимать ингибиторы SGLT-2 (глифлозины), так как они непредсказуемо понижают уровень сахара в крови.  Сочетание с системой, которая снижает базальную скорость для повышения ГК является особенно опасным, поскольку из-за глифлозинов этот подъем ГК может не произойти и возникнет нехватка инсулина.
```
