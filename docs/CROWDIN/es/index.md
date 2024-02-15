# Bienvenido/a a la documentación de AAPS

![imagen](./images/basic-outline-of-AAPS.png)

AAPS es una aplicación de código abierto para personas que viven con diabetes, dependientes de insulina y que actúa como un sistema de páncreas artificial (APS) en teléfonos inteligentes Android de Google. Utiliza un algoritmo de software OpenAPS que tiene como objetivo hacer lo que hace un páncreas en funcionamiento: mantener los niveles de azúcar en sangre dentro de límites saludables mediante la administración automatizada de insulina (AID). Además, necesitas una bomba de insulina compatible y aprobada por la FDA/CE, así como un medidor continuo de glucosa.

¿Estás interesado? Lee más sobre AAPS en la [introducción](introduction.md).

```{warning}
**IMPORTANT SAFETY NOTICE**

The foundation of AAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Es importante que sólo utilice una bomba de insulina y una bomba de insulina y MCG aprobados por la FDA o CE, para cerrar un lazo de dosificación de insulina automatizado. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AAPS system.

Además, es igualmente importante utilizar los suministros originales, como los insertadores, las canulas y los recipientes de insulina aprobados por el fabricante para su uso con la bomba o MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. Insulina es muy peligrosa cuando se malinterpreta-por favor, no juegas con tu vida hackeando con tus suministros.

Por último pero no por ello menos importante, no hay que tomar inhibidores SGLT-2 (gliflozins) ya que reducen incalculablemente los niveles de azúcar en sangre.  La combinación con un sistema que reduce las tasas basales para aumentar la BG es especialmente peligrosa, ya que debido al gliflozin este aumento en BG podría no suceder y podría derivar en un peligroso estado de falta de insulina.
```

```{note}
**Aviso y Advertencia**

- Toda la información, ideas y código descritos aquí tienen la única finalidad de ser informativos y educativos. Actualmente Nightscout no dispone de HIPAA privacy compliance. Utilice Nightscout y AAPS bajo su propio riesgo y no utilice la información o el código para tomar decisiones médicas.
- El uso del código de github.com se realiza sin garantía ni soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.
- Todos los nombres de productos y empresas, marcas comerciales, marcas de servicio, marcas registradas y marcas de servicio registradas, son propiedad de sus respectivos titulares. Su uso aquí es informativo y no implica afiliación o pago por ello.

Ten en cuenta que este proyecto no tiene ninguna asociación, ni está respaldado por: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

## ¿Cómo leer la documentación?

Hemos proporcionado esta subsección de la documentación especialmente para aquellos que son nuevos en el concepto de Do-It-Yourself-APS (Sistemas de Páncreas Artificial) con el fin de mostrar mejor cómo familiarizarse con la información que consideramos más importante, especialmente en términos de comprender las razones detrás de los 'límites' establecidos cuando estás comenzando tu viaje con AAPS. Estos límites de seguridad se han desarrollado a lo largo de muchos años mediante observaciones de los errores inadvertidos que los nuevos usuarios son más propensos a cometer cuando aprenden por primera vez a configurar, construir y luego loopear con éxito con AAPS. La mayoría de las veces, estos errores ocurren simplemente porque el usuario estaba tan emocionado por comenzar a usar el sistema que pueden haber olvidado sentarse y dedicar el tiempo necesario para comprender completamente la información dentro de esta documentación. ¡Todos hemos pasado por eso!

Ciertamente, el enfoque de 'leer todo' tiene mérito y es cierto. Sin embargo, no es raro que los recién llegados se sientan abrumados rápidamente por la gran cantidad y variedad de nueva información que se espera que comprendan de una vez. Entonces, las próximas subsecciones tienen como objetivo establecer los cimientos más importantes del conocimiento necesario para ejecutar con éxito la configuración que elijas con la menor cantidad de problemas posible. Los nuevos usuarios pueden consultar esta guía cuando se encuentren con aspectos del sistema con los que aún no están familiarizados, y recordar dónde buscar dentro de la documentación para encontrar información más detallada, según sea necesario. También es importante exponer las capacidades de AAPS de manera transparente, ya que a veces puede ser decepcionante descubrir en medio de la lectura de la documentación que ciertas herramientas necesarias actualmente no están disponibles para su uso (debido a restricciones en los tipos de bombas de insulina o MCGs disponibles en algunos países en comparación con otros, etc.) o simplemente ofrecen menos/diferente funcionalidad de la que se asumió inicialmente. Finalmente, es importante reconocer que muchos aspectos relacionados con la experiencia dentro de esta documentación solo cobran relevancia a medida que comienzas a utilizar AAPS en tiempo real. Así como es casi imposible aprender a jugar un deporte perfectamente solo leyendo las reglas, se necesita una combinación de primero aprender los fundamentos de las reglas para operar AAPS de manera segura y después dedicar tiempo a aprender cómo aplicar mejor esas reglas mientras avanzas a través de los pasos del lazo con AAPS.

La subsección [Comenzando](Getting-Started/Safety-first.md) es una lectura obligada para comprender el concepto general de lo que un sistema de páncreas artificial está diseñado para hacer; y es especialmente relevante para los usuarios de AAPS.

La subsección [¿Qué necesito?](Module/module.md) especifica los medidores continuos de glucosa (MCGs) y las bombas de insulina que están disponibles para su uso con AAPS. Esta subsección es importante para entender cómo ensamblar y construir correctamente tu sistema de AAPS la primera vez y que funcione bien en situaciones del mundo real.

La subsección [¿Dónde buscar ayuda?](Where-To-Go-For-Help/Connect-with-other-users.html) debería ayudarte a dirigirte a los mejores lugares para encontrar ayuda, dependiendo de tu nivel de experiencia con AAPS. Esto es muy importante para que no te sientas excluido, especialmente al principio, y para que puedas ponerte en contacto con otros lo más rápido posible, aclarar preguntas y resolver los problemas habituales de la manera más rápida posible. La experiencia demuestra que muchas personas ya están utilizando AAPS con éxito, pero en algún momento todos tienen una pregunta que no pueden resolver por sí mismos. Lo bueno, es que debido al gran número de usuarios, los tiempos de respuesta a las preguntas suelen ser muy rápidos, generalmente en unas pocas horas. No te preocupes por pedir ayuda, ¡porque no existen las preguntas tontas! Animamos a los usuarios de cualquier nivel de experiencia a hacer todas las preguntas que consideren necesarias para ayudarlos a ponerse en marcha de manera segura. Por favor, inténtalo.

En la subsección [Glosario](Getting-Started/Glossary.md) hemos compilado una lista de los acrónimos (o nombres abreviados) utilizados en todo AAPS. Por ejemplo, dónde buscar para averiguar qué significan los términos FSI o OT en los términos más comunes (más largos).

Para los padres que desean construir AAPS para sus hijos, recomendamos la subsección [AAPS para niños](Children/Children.md), ya que allí encontrarás información más avanzada específicamente diseñada para aprender los pasos adicionales necesarios para controlar remotamente la aplicación de AAPS de tu hijo, así como un perfil de seguridad más completo en comparación con los adultos. Debes poder apoyar a tus hijos y comprender todos los conceptos avanzados que AAPS ofrece para ayudarte a tener éxito.

Ahora que tienes una comprensión sólida de los conceptos que AAPS utiliza, sabes dónde obtener las herramientas necesarias para construir tu APS y estás familiarizado con dónde obtener ayuda en caso de una emergencia, ¡es el momento adecuado para comenzar a construir la aplicación! La subsección [Cómo instalar AAPS?](Installing-AAPS/Building-APK.md) te muestra esto en detalle. Dado que los requisitos son muy diferentes a cualquier cosa que hayas configurado en el pasado, recomendamos que sigas las instrucciones paso a paso las primeras veces que construyas la aplicación, para que tengas una mejor idea de cómo se supone que debe comportarse el proceso de construcción de la aplicación cuando se siguen todas las instrucciones exactamente. Por favor, recuerda tomarte tu tiempo. Más adelante, esto irá muy rápido cuando construyas la aplicación nuevamente para una nueva versión. De esta manera, tendrás una mayor probabilidad de darte cuenta cuando algo no vaya según lo planeado antes de que muchas etapas estén fuera de lugar. Es importante guardar tu archivo keystore (.jks, utilizado para firmar tu aplicación) en un lugar seguro, para que siempre puedas usar ese mismo archivo de almacén de claves y contraseña cada vez que se te pida crear una nueva versión actualizada de AAPS. Este archivo es lo que garantiza que cada nueva versión de la aplicación 'recuerde' toda la información que le has proporcionado en versiones anteriores de la aplicación y, por lo tanto, asegura que las actualizaciones se realicen de la manera más fluida posible. En promedio, puedes asumir que habrá una nueva versión y de 2 a 3 actualizaciones necesarias por año. Este número se basa en la experiencia y puede cambiar en el futuro. Pero al menos queremos brindarte una guía general sobre qué esperar. Cuando tengas más experiencia en la construcción de versiones actualizadas de la aplicación AAPS, todos los pasos que se requieren en la construcción de una aplicación actualizada solo tomarán de 15 a 30 minutos, de promedio. Sin embargo, al principio puede haber una curva de aprendizaje bastante pronunciada, ya que estos pasos no siempre son intuitivos para los nuevos usuarios. Así que no te frustres si descubres que te lleva medio día o un día completo, con algo de ayuda de la comunidad, antes de que finalmente termines con el proceso de actualización. Si descubres que te estás frustrando mucho, simplemente toma un breve descanso, y muchas veces, después de dar un paseo por la calle, te darás cuenta de que estás en mejores condiciones para abordar el problema nuevamente. También hemos compilado una lista de preguntas y respuestas para la mayoría de los errores típicos que es probable que ocurran en las primeras actualizaciones, que se encuentran en la sección de preguntas frecuentes (FAQs), así como en 'Cómo instalar AAPS?', que proporciona información adicional en la subsección 'Resolución de problemas'.

La subsección [Configuración de componentes](Configuration/BG-Source.md) explica cómo integrar correctamente cada una de las diversas partes separadas del componente en AAPS, así como cómo configurarlas para que funcionen de la manera más fluida posible juntas. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand. La subsección [Configuración](Configuration/BG-Source.md) describe las mejores configuraciones de bomba para usar en AAPS.

Esto es seguido por una subsección particularmente importante, [Uso de AAPS](Getting-Started/Screenshots.md), en la que te introducen gradualmente al uso completo de lo que AAPS tiene para ofrecer mediante un proceso gradual paso a paso, cuidadosamente calibrado para asegurarse de que tú/tu hijo estén completamente familiarizados y cómodos navegando por todos los diferentes niveles y configuraciones de menú antes de avanzar a la siguiente fase, comúnmente denominada el siguiente Objetivo, hasta que tengas suficiente experiencia para comenzar a utilizar las opciones más avanzadas disponibles dentro de la aplicación. Estos Objetivos están diseñados especialmente de tal manera que gradualmente desbloquearán más posibilidades de AAPS y cambiarán de Lazo Abierto a Lazo Cerrado.

Después de eso, hay una subsección [Consejos generales](Usage/Timezone-traveling.md) con información, por ejemplo, sobre cómo lidiar con el cambio de zonas horarias, así como saber qué hacer durante los cambios de horario de verano (adelantar/retrasar la hora), que ocurrirán dos veces al año mientras usas AAPS.

Hay una subsección para los [clínicos](Resources/clinician-guide-to-AAPS.md) que han expresado interés en la tecnología de páncreas artificial de código abierto, como AAPS, o para los pacientes que desean compartir esa información con sus clínicos.

Finalmente, en la subsección [¿Cómo ayudar?](make-a-PR.md), nos gustaría proporcionarte información para que puedas sugerir cambios pequeños o grandes en la documentación por ti mismo y trabajar junto con nosotros en la documentación. Necesitamos además apoyo para la [traducción de la documentación](translations.md). Por cierto, también es muy útil para todos si puedes proporcionar enlaces a la documentación correspondiente (o capturas de pantalla de dónde se encuentran los enlaces dentro de la documentación si no estás familiarizado con cómo enviar un enlace) al responder preguntas de otros usuarios. De esta manera, la información correcta se puede ubicar fácilmente nuevamente en caso de que otros usuarios también estén tratando de encontrar respuestas a las mismas preguntas en el futuro.

```{toctree}
:caption: Cambiar idioma

Cambiar idioma <./changelanguage.md>

```

```{toctree}
:caption: Inicio

Introducción <./introduction.md>

```

```{toctree}
:caption: Empezando

Preparando <preparing.md>

Actualizaciones & cambios en la documentación <./Getting-Started/WikiUpdate.md>

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
:caption: Control remoto y seguimiento

Control remoto <remote-control.md>
Sólo seguimiento <following-only.md>

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

Android auto <./Usage/Android-auto.md>

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

```

```{note}
**Descargo de Responsabilidad y Advertencia**

- Toda la información, ideas y código descritos aquí están destinados únicamente con fines informativos y educativos. Actualmente Nightscout no dispone de HIPAA privacy compliance. Utilice Nightscout y AAPS bajo su propio riesgo y no utilice la información o el código para tomar decisiones médicas.
- El uso del código de github.com se realiza sin garantía ni soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.
- Todos los nombres de productos y empresas, marcas comerciales, marcas de servicio, marcas registradas y marcas de servicio registradas, son propiedad de sus respectivos titulares. Su uso aquí es informativo y no implica afiliación o pago por ello.

Ten en cuenta que este proyecto no tiene ninguna asociación ni está respaldado por: [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) or [Medtronic](<https://www.medtronic.com/>)

```
