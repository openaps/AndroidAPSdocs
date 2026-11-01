# Bienvenido/a a la documentación de AAPS

![imagen](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31 de octubre de 2026: ya está disponible la versión 4.0.0. Consulta las [notas de la versión](#latestrelease) para ver las novedades y sigue las instrucciones del [manual de actualización](./Maintenance/UpdateToNewVersion.md) para actualizar.

```

Android APS (**AAPS**) es una app de código abierto para personas con diabetes que necesitan insulina. Es un sistema de páncreas artificial (APS) que funciona en teléfonos Android. **AAPS** usa un algoritmo de software de OpenAPS y busca hacer lo que hace un páncreas real: mantener los niveles de glucosa en sangre dentro de límites sanos mediante la dosificación automática de insulina. Para usar **AAPS** necesitas **tres** dispositivos compatibles: **(1)** un teléfono Android, **(2)** un monitor continuo de glucosa (MCG) y **(3)** una bomba de insulina aprobada por la FDA/CE. También puedes añadir **(4)** servicios en la nube para controlar **AAPS** a distancia, compartir tus datos y guardarlos en un servidor de informes, y **(5)** un reloj inteligente.

Esta documentación explica cómo configurar y usar **AAPS**. Puedes moverte por la documentación de **AAPS** con el menú de la izquierda (y la práctica función **Buscar documentos**), o con el [índice](#index-aaps-documentation-index) al final de esta página.

## Resumen de la documentación de AAPS («la documentación»)

En la sección **1) Primeros pasos**, la [introducción](Getting-Started/Introduction.md) explica la idea general de para qué sirve un sistema de páncreas artificial (APS). Explica los conceptos básicos del lazo en general, por qué se desarrolló **AAPS**, compara **AAPS** con otros sistemas y trata la seguridad. Da consejos sobre cómo hablar de **AAPS** con tu equipo médico, explica por qué tienes que compilar tú mismo la app **AAPS** en lugar de solo descargarla, y da un resumen de las conexiones típicas de un sistema **AAPS**. También trata la accesibilidad y quién puede beneficiarse de **AAPS**.

[Prepararse para empezar con AAPS](./Getting-Started/PreparingForAaps.md) da más detalles sobre la seguridad y sobre los teléfonos, los MCG (monitores continuos de glucosa) y las bombas de insulina compatibles con **AAPS**. Da un resumen del proceso que vas a seguir y un calendario aproximado para llegar a usar todas las funciones de **AAPS**. Esta sección te prepara técnicamente para montar tu sistema **AAPS** de la forma más rápida y eficiente posible. La subsección [MCG compatibles](./Getting-Started/CompatiblesCgms.md) explica cómo optimizar la configuración de tu MCG y qué opciones de suavizado son las mejores.

Ahora que entiendes bien el proceso, puedes empezar a montar tu lazo **AAPS**.

La sección **2) Compilar la app** explica por qué tienes que compilar tú mismo la app **AAPS** en lugar de solo descargarla, y te guía paso a paso para [compilarla](./SettingUpAaps/BuildingAaps.md) (con un navegador, Android Studio o la línea de comandos) y después transferirla e instalarla en tu teléfono. Empieza con un paso opcional: crear una [cuenta de Google dedicada](./UsefulLinks/DedicatedGoogleAccountForAaps.md) para guardar tus compilaciones y copias de seguridad. También explica la [verificación de desarrolladores de Android](#android-developer-verification), un cambio que Google introduce a partir de septiembre de 2026 y que afecta a la forma de instalar las apps compiladas por uno mismo.

La sección **3) Configurar el servidor de informes** explica cómo elegir y [configurar tu servidor de informes](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout o Tidepool) para que puedas revisar y compartir tus datos.

La sección **4) [Configurar AAPS](./SettingUpAaps/SetupWizard.md)** explica cómo configurar la app **AAPS** con el asistente de configuración, cómo conectarla con tu app de MCG y con una bomba de insulina real o virtual, y cómo conectar **AAPS** con tu servidor de informes. Después conocerás todo lo que **AAPS** puede hacer, con un proceso seguro, paso a paso y a un ritmo cuidadoso. Así te aseguras de que tú (o tu hijo o hija) conoces bien todos los niveles y menús, y te mueves por ellos con seguridad, antes de pasar a la siguiente fase, que se suele llamar el siguiente «objetivo». Sigues avanzando así hasta tener suficiente experiencia para empezar a usar las opciones más avanzadas de la app. Estos objetivos están diseñados para desbloquear poco a poco más funciones de **AAPS** y pasar del lazo abierto al lazo cerrado.

La sección **5) [Vida cotidiana con AAPS](./DailyLifeWithAaps/AapsScreens.md)** explica las funciones clave de **AAPS** para ayudarte a usar (y personalizar) **AAPS**. Esto incluye entender las pantallas, los carbohidratos activos (COB), la sensibilidad, el ISF Dinámico, los cambios de perfil, los objetivos temporales, los carbohidratos extendidos (eCarbs), las automatizaciones y [revisar tus datos](./Maintenance/Reviewing.md) en el explorador de historial y en las estadísticas. También trata temas frecuentes, como manejar distintos tipos de comidas, los cambios de cánula y de sensor, las actualizaciones del teléfono, los cambios de horario de verano, [viajar con AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) y el deporte. Las preguntas y respuestas más comunes están en la sección de solución de problemas.

La sección **6) [Funciones remotas de AAPS](./RemoteFeatures/RemoteControl.md)** muestra uno de los puntos fuertes de **AAPS**. Hay muchas formas de enviar órdenes a distancia a **AAPS** o simplemente de seguir sus datos. Esto es igual de útil para cuidadores que quieren usar **AAPS** con menores, y para adultos con diabetes que quieren seguir su glucosa (y otros datos) de forma más cómoda que solo en el teléfono (en un reloj, en el coche, _etc._), o que quieren que otras personas cercanas también sigan los datos. Esta sección también explica cómo usar Android Auto para ver los niveles de glucosa en el coche.

La sección **7) [Relojes inteligentes Wear OS](./WearOS/BuildingAapsWearOS.md)** da información y procedimientos para usar un reloj inteligente Android **Wear OS** con las esferas propias de **AAPS** o con esferas personalizadas, ya sea como control remoto de tu teléfono o solo como pantalla de información.


La sección **8) [Mantenimiento de AAPS](./Maintenance/ExportImportSettings.md)** explica cómo exportar y hacer copias de seguridad de tus ajustes (muy importante si pierdes o rompes tu teléfono), muestra las últimas notas de la versión, explica cómo actualizar **AAPS** y qué pasa cuando una versión llega al final de su vida útil. Puedes esperar una nueva versión y 2–3 actualizaciones obligatorias al año. Debes hacer estas actualizaciones, como con cualquier software, porque así se corrigen pequeños errores y se mejora **AAPS**. Hay una sección de solución de problemas dedicada a las «actualizaciones», con las preguntas más comunes.

La sección **9) [Ayuda y solución de problemas](GettingHelp/WhereCanIGetHelp.md)** te indica los mejores sitios para encontrar ayuda general con **AAPS**. Es el único lugar al que ir cuando algo no funciona: la página central de [Solución de problemas](GettingHelp/GeneralTroubleshooting.md) reúne por temas las soluciones a los problemas más comunes, y las [preguntas frecuentes (FAQ)](UsefulLinks/FAQ.md) responden a las dudas habituales. Esto es muy importante para que puedas contactar con otras personas lo antes posible, aclarar dudas y resolver los problemas habituales. Mucha gente ya usa **AAPS** con éxito, pero todos tienen en algún momento una pregunta que no pueden resolver solos. Como hay muchos usuarios, las preguntas suelen recibir respuesta muy rápido, normalmente en pocas horas. No tengas miedo de pedir ayuda: ¡no existen preguntas tontas! Animamos a los usuarios de cualquier nivel de experiencia a hacer todas las preguntas que consideren necesarias para ayudarlos a ponerse en marcha de manera segura. Esta sección incluye la solución de problemas general para **AAPS** y **AAPSClient** (una app complementaria para seguir los datos), y explica cómo enviar tus datos de **AAPS** (archivos de log) a los desarrolladores para que los revisen, si crees que hay un problema técnico en **AAPS**.

La sección **10)** trata las **[Opciones avanzadas de AAPS](./AdvancedOptions/FullClosedLoop.md)**, por ejemplo cómo pasar de usar **AAPS** en lazo cerrado híbrido (con bolos para las comidas, _etc._) a lazo cerrado completo (sin bolos), cómo [ajustar tu perfil](./GettingHelp/ProfileTuning.md) y usar Autotune, y explica los modos de desarrollo e ingeniería. La mayoría de los usuarios están bien con la versión principal o «Master» de **AAPS** sin mirar estas opciones. Esta sección es para usuarios que ya tienen un buen control y quieren mejorar aún más su configuración.

En la sección **11) [Cómo apoyar a AAPS](SupportingAaps/HowToEditTheDocs.md)** damos información para que puedas apoyar este proyecto. Puedes donar dinero, equipos o conocimientos. Puedes proponer o hacer tú mismo cambios en la documentación, ayudar con la [traducción de la documentación](SupportingAaps/Translations) y aportar tus datos a través del proyecto Open Humans.

La sección **12) Recursos** contiene documentación archivada o adicional, con una subsección para [médicos](UsefulLinks/ClinicianGuideToAaps.md) interesados en la tecnología de páncreas artificial de código abierto como **AAPS**, o para pacientes que quieren compartir esta información con sus médicos. Este tema también se trata en la introducción. Esta sección también contiene más referencias y recursos sobre la diabetes y el lazo. Incluye el [Glosario](./UsefulLinks/Glossary.md), una lista de las siglas (o nombres cortos) que se usan en **AAPS**. Aquí puedes ver, por ejemplo, qué significan los términos ISF o TT.


 ### ¿Te interesa empezar con **AAPS**? Lee más sobre **AAPS** en la [introducción](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
La seguridad de **AAPS** depende de las funciones de seguridad de tu hardware (teléfono, bomba, MCG). Usa solo una bomba de insulina y un MCG aprobados por la FDA/CE que funcionen perfectamente. No uses bombas de insulina ni receptores de MCG rotos, modificados o hechos por ti mismo. Usa solo consumibles originales (insertadores, cánulas y reservorios de insulina) aprobados por el fabricante para tu bomba y tu MCG. Usar consumibles no probados o modificados puede causar imprecisiones y errores en la dosis de insulina, con un riesgo importante para el usuario. 

No uses **AAPS** si tomas inhibidores de SGLT-2 (gliflozinas), porque bajan los niveles de glucosa en sangre. Aumentas el riesgo de cetoacidosis diabética (CAD) por una menor administración de insulina, y de hipoglucemia por la bajada de los niveles de glucosa en sangre. 
```

```{admonition} Disclaimer
:class: note

- Toda la información y el código descritos aquí son solo para fines informativos y educativos. Usa [Nightscout](https://nightscout.github.io/) y **AAPS** bajo tu propia responsabilidad, y no uses la información ni el código para tomar decisiones médicas. Actualmente, Nightscout no intenta cumplir con las normas de privacidad HIPAA. 
- El uso del código de github.com se realiza sin garantía ni soporte formal de ningún tipo. Consulta el archivo LICENSE de este repositorio para más detalles.
- Todos los nombres de productos y empresas, marcas comerciales, marcas de servicio, marcas registradas y marcas de servicio registradas son propiedad de sus respectivos titulares. Se usan solo con fines informativos y no implican ninguna relación con ellos ni su respaldo.

**AAPS** no tiene ninguna relación con estas empresas ni cuenta con su respaldo: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) y [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Índice de la documentación de AAPS

```{toctree}
:caption: Usar esta documentación

Cambiar idioma y versión <./NavigateDoc/ChangeLanguageVersion.md>
Buscar en la documentación <./NavigateDoc/SearchDoc.md>
Actualizaciones y cambios de la documentación <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Primeros pasos

Introducción a APS y AAPS <./Getting-Started/Introduction.md>
Prepararse para empezar con AAPS <./Getting-Started/PreparingForAaps.md>
Resumen de componentes <./Getting-Started/ComponentOverview.md>
- Bombas compatibles <./Getting-Started/CompatiblePumps.md>
- MCG compatibles <./Getting-Started/CompatiblesCgms.md>
- Teléfonos  <./Getting-Started/Phones.md>
- Relojes inteligentes y AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Compilar la app

Una cuenta de Google dedicada para AAPS (opcional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Compilar AAPS <./SettingUpAaps/BuildingAaps.md>
- Compilación en el navegador <./SettingUpAaps/BrowserBuild.md>
- Compilación con Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instrucciones para compilar con la línea de comandos <./SettingUpAaps/CLIBuild.md>
Transferir e instalar AAPS en tu teléfono <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Configurar el servidor de informes

Configurar el servidor de informes <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Vida cotidiana con AAPS

Pantallas de AAPS <./DailyLifeWithAaps/AapsScreens.md>
Funciones clave de AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Cálculo de carbohidratos (COB) <./DailyLifeWithAaps/CobCalculation.md>
Detección de sensibilidad <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
ISF Dinámico <./DailyLifeWithAaps/DynamicISF.md>
Cambio de perfil y porcentaje del perfil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Objetivos temporales <./DailyLifeWithAaps/TempTargets.md>
Carbohidratos extendidos (eCarbs) <./DailyLifeWithAaps/ExtendedCarbs.md>
Asistentes rápidos (bolos con un toque) <./DailyLifeWithAaps/QuickWizards.md>
Escenas (ajustes de situación) <./DailyLifeWithAaps/Scenes.md>
Automatización <./DailyLifeWithAaps/Automations.md>
Lanzamiento rápido (barra de acciones rápidas de la pantalla principal) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets de la pantalla de inicio <./DailyLifeWithAaps/Widgets.md>
Comida (tu base de datos de alimentos) <./DailyLifeWithAaps/Food.md>
Búsqueda global <./DailyLifeWithAaps/GlobalSearch.md>
Revisar tus datos <./Maintenance/Reviewing.md>
AAPS para niños <./DailyLifeWithAaps/AapsForChildren.md>
Bombas y cánulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Viajar entre zonas horarias y horario de verano <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Funciones remotas de AAPS

Seguimiento remoto <./RemoteFeatures/RemoteMonitoring.md>
Seguir AAPS (sin interacción con el sistema AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Control remoto de AAPS <./RemoteFeatures/RemoteControl.md>
La app AAPSClient <./RemoteFeatures/AapsClient.md>
Control máster ↔ cliente (control remoto firmado) <./RemoteFeatures/ClientMasterControl.md>
Comandos SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Relojes inteligentes Wear OS

Compilar la app AAPS para Wear <./WearOS/BuildingAapsWearOS.md>
Reloj inteligente Wear OS <./WearOS/WearOsSmartwatch.md>
Manejo de AAPS con tu reloj inteligente Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Documento de referencia de las esferas personalizadas <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Sitio de intercambio de esferas personalizadas <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Ayuda y solución de problemas

¿Dónde puedo obtener ayuda? <./GettingHelp/WhereCanIGetHelp.md>
Solución de problemas <./GettingHelp/GeneralTroubleshooting.md>
- Solución de problemas de Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Solución de problemas de NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Solución de problemas para Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Compilación en el navegador: solución de problemas <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalar AAPS con un nuevo almacén de claves <./GettingHelp/ReinstallAaps.md>
- Acceder a los logs <./GettingHelp/AccessingLogFiles.md>
Preguntas frecuentes para loopers <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Opciones avanzadas de AAPS

Lazo cerrado completo <./AdvancedOptions/FullClosedLoop.md>
Ajustar el perfil de AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Concentración de insulina <./AdvancedOptions/InsulinConcentration.md>
Rama de desarrollo <./AdvancedOptions/DevBranch.md>
Compilación en el navegador: aplicar un commit con cherry-pick <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Cómo apoyar a AAPS

Cómo ayudar con AAPS <./SupportingAaps/HowCanIHelp.md>
Cómo editar la documentación <./SupportingAaps/HowToEditTheDocs.md>
Traducir la app y la documentación <./SupportingAaps/Translations.md>
Estado de la traducción para la aplicación y la documentación <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Recursos

Glosario <./UsefulLinks/Glossary.md>
Lecturas recomendadas antes de empezar <./UsefulLinks/BackgroundReading.md>
Para médicos: introducción general y guía de AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
