# Bienvenido/a a la documentación de AAPS

![imagen](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## Overview of the AAPS documentation ("The docs")

Under "Getting Started", the [Introduction](introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. The **Setting up AAPS** section contains step-by-step instructions to do this. It covers choosing and [setting up your reporting server](setting-up-the-reporting-server.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. It also covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app, and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You then progress through the objectives, which will help you to optimise your settings as you unlock the full functionality of the **AAPS** app.

The [Remote control and Following](remote-control.md) section highlights a real strength of **AAPS**, which is that there are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android auto so you can view glucose levels in the car.

La subsección [¿Dónde buscar ayuda?](Where-To-Go-For-Help/Connect-with-other-users.html) debería ayudarte a dirigirte a los mejores lugares para encontrar ayuda, dependiendo de tu nivel de experiencia con AAPS. Esto es muy importante para que no te sientas excluido, especialmente al principio, y para que puedas ponerte en contacto con otros lo más rápido posible, aclarar preguntas y resolver los problemas habituales de la manera más rápida posible. La experiencia demuestra que muchas personas ya están utilizando AAPS con éxito, pero en algún momento todos tienen una pregunta que no pueden resolver por sí mismos. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! Animamos a los usuarios de cualquier nivel de experiencia a hacer todas las preguntas que consideren necesarias para ayudarlos a ponerse en marcha de manera segura.

En la subsección [Glosario](Getting-Started/Glossary.md) hemos compilado una lista de los acrónimos (o nombres abreviados) utilizados en todo AAPS. Por ejemplo, dónde buscar para averiguar qué significan los términos FSI o OT en los términos más comunes (más largos).

  Dado que los requisitos son muy diferentes a cualquier cosa que hayas configurado en el pasado, recomendamos que sigas las instrucciones paso a paso las primeras veces que construyas la aplicación, para que tengas una mejor idea de cómo se supone que debe comportarse el proceso de construcción de la aplicación cuando se siguen todas las instrucciones exactamente. Por favor, recuerda tomarte tu tiempo. Más adelante, esto irá muy rápido cuando construyas la aplicación nuevamente para una nueva versión. De esta manera, tendrás una mayor probabilidad de darte cuenta cuando algo no vaya según lo planeado antes de que muchas etapas estén fuera de lugar. Es importante guardar tu archivo keystore (.jks, utilizado para firmar tu aplicación) en un lugar seguro, para que siempre puedas usar ese mismo archivo de almacén de claves y contraseña cada vez que se te pida crear una nueva versión actualizada de AAPS. Este archivo es lo que garantiza que cada nueva versión de la aplicación 'recuerde' toda la información que le has proporcionado en versiones anteriores de la aplicación y, por lo tanto, asegura que las actualizaciones se realicen de la manera más fluida posible. En promedio, puedes asumir que habrá una nueva versión y de 2 a 3 actualizaciones necesarias por año. Este número se basa en la experiencia y puede cambiar en el futuro. Pero al menos queremos brindarte una guía general sobre qué esperar. Cuando tengas más experiencia en la construcción de versiones actualizadas de la aplicación AAPS, todos los pasos que se requieren en la construcción de una aplicación actualizada solo tomarán de 15 a 30 minutos, de promedio. Sin embargo, al principio puede haber una curva de aprendizaje bastante pronunciada, ya que estos pasos no siempre son intuitivos para los nuevos usuarios. Así que no te frustres si descubres que te lleva medio día o un día completo, con algo de ayuda de la comunidad, antes de que finalmente termines con el proceso de actualización. Si descubres que te estás frustrando mucho, simplemente toma un breve descanso, y muchas veces, después de dar un paseo por la calle, te darás cuenta de que estás en mejores condiciones para abordar el problema nuevamente.


  También hemos compilado una lista de preguntas y respuestas para la mayoría de los errores típicos que es probable que ocurran en las primeras actualizaciones, que se encuentran en la sección de preguntas frecuentes (FAQs), así como en 'Cómo instalar AAPS?', que proporciona información adicional en la subsección 'Resolución de problemas'.

La subsección [Configuración de componentes](Configuration/BG-Source.md) explica cómo integrar correctamente cada una de las diversas partes separadas del componente en AAPS, así como cómo configurarlas para que funcionen de la manera más fluida posible juntas. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. La subsección [Configuración](Configuration/BG-Source.md) describe las mejores configuraciones de bomba para usar en AAPS.

Esto es seguido por una subsección particularmente importante, [Uso de AAPS](Getting-Started/Screenshots.md), en la que te introducen gradualmente al uso completo de lo que AAPS tiene para ofrecer mediante un proceso gradual paso a paso, cuidadosamente calibrado para asegurarse de que tú/tu hijo estén completamente familiarizados y cómodos navegando por todos los diferentes niveles y configuraciones de menú antes de avanzar a la siguiente fase, comúnmente denominada el siguiente Objetivo, hasta que tengas suficiente experiencia para comenzar a utilizar las opciones más avanzadas disponibles dentro de la aplicación. Estos Objetivos están diseñados especialmente de tal manera que gradualmente desbloquearán más posibilidades de AAPS y cambiarán de Lazo Abierto a Lazo Cerrado.

Después de eso, hay una subsección [Consejos generales](Usage/Timezone-traveling.md) con información, por ejemplo, sobre cómo lidiar con el cambio de zonas horarias, así como saber qué hacer durante los cambios de horario de verano (adelantar/retrasar la hora), que ocurrirán dos veces al año mientras usas AAPS.

Hay una subsección para los [clínicos](Resources/clinician-guide-to-AAPS.md) que han expresado interés en la tecnología de páncreas artificial de código abierto, como AAPS, o para los pacientes que desean compartir esa información con sus clínicos.

Finalmente, en la subsección [¿Cómo ayudar?](make-a-PR.md), nos gustaría proporcionarte información para que puedas sugerir cambios pequeños o grandes en la documentación por ti mismo y trabajar junto con nosotros en la documentación. We further need support for [translation of the documentation](translations.md). It also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. De esta manera, la información correcta se puede ubicar fácilmente nuevamente en caso de que otros usuarios también estén tratando de encontrar respuestas a las mismas preguntas en el futuro.

 Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

:::{admonition} SAFETY NOTICE
:class: danger The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user.

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels.
:::

:::{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Actualmente Nightscout no dispone de HIPAA privacy compliance.
- Use of code from github.com is without warranty or formal support of any kind. Por favor revise el repositorio de Licencia para más detalles.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Su uso aquí es informativo y no implica afiliación o pago por ello.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

:::

(AAPS-Documentation-Index)=

## AAPS Documentation Index

```{toctree}
:caption: Cambiar idioma

Cambiar idioma <./changelanguage.md>
```
```{toctree}
:caption: Getting started

Introduction to AAPS <./introduction.md>

Preparing for AAPS <preparing.md>

```

```{toctree}
:caption: Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration<./Installing-AndroidAPS/change-configuration.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: Remote control and following

Remote control <remote-control.md>
Following-only <following-only.md>
Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Advanced Setting up APPS

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

```

```{toctree}
:caption: Lazo cerrado completo

Lazo cerrado completo <./Usage/FullClosedLoop.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Smartwatch  <./Hardware/Smartwatch.md>

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
:caption: Consejos generales

Cruzar zonas horarias con bombas <./Usage/Timezone-traveling.md>

Acceso a los archivos de registro <./Usage/Accessing-logfiles.md>

Consejos de uso básico para Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Exportar/Importar configuraciones <./Usage/ExportImportSettings.md>

Modo de ingeniería en xDrip+ <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Resolución de problemas

Resolución de problemas <./Usage/troubleshooting.md>

Cliente Nightscout <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: Preguntas frecuentes

Preguntas frecuentes <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glosario

Glosario <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: ¿Dónde obtener ayuda?

Recursos útiles para leer antes de comenzar <./Where-To-Go-For-Help/Background-reading.md>

¿Dónde Obtener Ayuda? <./Where-To-Go-For-Help/Connect-with-other-users.md>

Actualizaciones y cambios en la documentación & changes <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Para profesionales de la salud

Para profesionales de la salud <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: Cómo ayudar

Cómo aydudar <./Getting-Started/How-can-I-help.md>

Cómo traducir la aplicación y la documentación <./translations.md>

Cómo editar la documentación <./make-a-PR.md>

Estado de las traducciones <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Legacy

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```
