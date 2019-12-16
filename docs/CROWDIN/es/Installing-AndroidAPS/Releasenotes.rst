Notas de la versión
**************************************************
Siga las instrucciones en el manual ` manual de actualización <../Installing-AndroidAPS/Update-to-new-version.html>`_. You can also find a troubleshooting section addressing the most common difficulties when updating on the update manual page.

Recibirá la siguiente información tan pronto como se disponga de una nueva actualización:

.. imagen:: ../images/AAPS_LoopDisable90days.png
  :alt: Información de actualización

Entonces tienes 60 días para actualizarte. If you do not update within these 60 days AAPS will fall back to LGS (low glucose suspend - see `glossary <../Getting-Started/Glossary.html>`_) as in `objective 6 <../Usage/Objectives.html>`_.

If you do not update for another 30 days (90 days from new release date) AAPS will switch to Open Loop.

Por favor, entienda que este cambio no tiene la intención de molestarlo, sino que se debe a razones de seguridad. Las nuevas versiones de AndroidAPS no sólo proporcionan nuevas características, sino también importantes arreglos de seguridad. Por lo tanto, son necesarias que todas las actualizaciones de usuario a.s.a.p. (Lo antes posible).. Unfortunately there are still bug reports from very old versions so this is a try to improve safety for every single user and the whole DIY community. Gracias por tu comprensión.

Versión 2.5.1
==================================================
Fecha de lanzamiento: 31-10-2019

Tenga en cuenta las `notas importantes <../Installing-AndroidAPS/Releasenotes.html#important-notes>` _ y `limitaciones <../Installing-AndroidAPS/Releasenotes.html#is-this-update-for-me-actualmente-is-not-soportado>` _ listados para `version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`_. 
* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things).
* Nuevo mantenimiento de versiones que permitirá realizar actualizaciones menores sin activar la notificación de actualización.

Versión 2.5.0
==================================================
Fecha de lanzamiento: 26-10-2019

Notas importantes
--------------------------------------------------
* Utilice `Android Studio Version 3.5.1 <https://developer.android.com/studio/>`_ o más reciente para `crear el apk <../Installing-AndroidAPS/Building-APK.html>` _ o `actualización <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* Si está utilizando xDrip `identificar el receptor <../Configuration/xdrip.html#identify-receiver>`_ debe establecerse.
* Si utiliza Dexcom G6 con el `la app Dexcom parchada <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>` _ necesitará la versión de la `carpeta 2.4 <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.

¿Es esta actualización para mí? Actualmente NO es soportado
--------------------------------------------------
* Android 5 e inferiores
* Poctech
* 600SeriesUploader
* Glimp
   Glimp se detiene cuando está offline. El desarrollador de Glimp debe actualizar la aplicación para utilizar la difusión SDK28.
* Dexcom Parchado desde el directorio 2.3

Nuevas características importantes
--------------------------------------------------
* Cambio interno de targetSDK a 28 (Android 9), soporte de jetpack
* Soporte de RxJava2, Okhttp3, Retrofit
* Viejo bombas "Medtronic" `Medtronic <../Configuration/MedtronicPump.html>`_ soporte (se necesita RileyLink)
* Nuevo " plugin de Automatización <../Usage/Automation.html>`_
* Permitir `solo una parte de bolo <../Configuration/Preferences.html#advanced-settings>` _ desde el asistente de cálculo de bolos
* Representación de la actividad de la insulina
* Ajustar las predicciones de IOB por el resultado de autodetección
* Nuevo soporte para los apks de Dexcom parcheados (` 2.4 carpeta <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Verificador de firma
* Permite saltar objetivos para usuarios de OpenAPS
* Nuevos `objetivos <../Usage/Objectives.html>`_ - examinar, manejo de aplicaciones
   
   (Si ha iniciado al menos el objetivo "Iniciar en un lazo abierto" en las versiones anteriores, el examen es opcional.)
* Corregido el bug en controladores Dana* donde se informó una falsa diferencia de tiempo
* Se ha corregido el error en `SMS communicator <../Children/SMS-Commands.html>`_

Versión 2.3
==================================================
Fecha de lanzamiento: 25-04-2019

Nuevas características importantes
--------------------------------------------------
* Mejora de seguridad importante para Insight (realmente importante si se utiliza Insight!)
* Se corrigió el Historial
* Se corrigieron los cálculos delta
Actualización de idiomas
* Se verifica el GIT y se advierte sobre la actualización de gradle
* Más pruebas automáticas
* Arreglo de accidentes potenciales en el servicio AlarmSound (gracias a @lee-b!)
* Revisión de difusión de datos de BG (ahora funciona de forma independiente de los permisos de SMS!)
* Nuevo Verificador de Versiones


Versión 2.2.2
==================================================
Fecha de lanzamiento: 07-04-2019

Nuevas características importantes
--------------------------------------------------
* Arreglo de autosens: desactive el objetivo temporal de elevación/baja de TT
Nuevas traducciones
* Corrección de controladores de bomba Insight
* Arreglo de plug-in de SMS


Versión 2.2
==================================================
Fecha de lanzamiento: 29-03-2019

Nuevas características importantes
--------------------------------------------------
* `Arreglo DST <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Actualización de reloj
* `Plugin de SMS <../Children/SMS-Commands.html>`_ actualización
* Volver a los objetivos.
* Detener lazo si la memoria del teléfono está llena


Versión 2.1
==================================================
Fecha de lanzamiento: 03-03-2019

Nuevas características importantes
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ soporte (by Tebbe Ubben and JamOrHam)
* Luces de estado en la pantalla principal (Nico Schmitz)
* Horario de de verano (Roumen Georgiev)
* Arreglo de nombres de perfiles de NS (Johannes Mockenhaupt)
* Arreglo de Bloqueo de UI (Johannes Mockenhaupt)
* Soporte para la app actualizada del G5 (Tebbe Ubben y Milos Kozak)
* G6, Poctech, Tomate, Eversense BG soporte de origen (Tebbe Ubben y Milos Kozak)
* Se ha corregido la desactivación de SMB en preferencias (Johannes Mockenhaupt)

Misceláneo
--------------------------------------------------
* Si utiliza un valor no predeterminado `smbmaxminutes`, tienes que volver a configurar este valor


Versión 2.0
==================================================
Fecha de lanzamiento: 03-11-2018

Nuevas características importantes
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ soporte de la bomba
* Asistente de configuración: le guiará a través del proceso de configuración de AndroidAPS

Valores para ajustar cuando se cambia de AMA a SMB
--------------------------------------------------
* Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB ahora incluye _all_ IOB, no sólo el basal añadido. Es decir, si se le da un bolo de 8 U para una comida y maxIOB es 7 U, no se entregarán SMB hasta que el IOB caiga por debajo de 7 U.
* El valor predeterminado de min_5m_carbimpact ha cambiado de 3 a 8 llendo de AMA a SMB. Si está actualizando desde AMA a SMB, tiene que cambiarlo manualmente
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! If your build fails with an error regarding "on demand configuration" you can do the following:

   * Abra la ventana de Preferencias, haga clic en Archivo > Configuración (en Mac, Android Studio > Preferencias).
   * En el panel de la izquierda, pulse Compilar, Ejecución, Deployment > Compilador.
   * Desmarque la casilla de verificación Configurar bajo demanda.
   * Haga clic en Aplicar o en Aceptar.

Pestaña general
--------------------------------------------------
* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). Los TTs utilizan los valores predeterminados establecidos en las preferencias. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Botones de tratamiento: el botón de tratamiento viejo aún está disponible, pero está oculto de forma predeterminada. Ahora la visibilidad de los botones se puede configurar. Nuevo botón de insulina, nuevo botón de carbohidratos (incluyendo `eCarbs/carbs extendidos <../Usage/Extended-Carbs.html>`_)
* `Las líneas de predicción tienen colores <../Getting-Started/Screenshots.html#section-e>`_
* Opción para mostrar un campo de notas en los diálogos de insulina/carbs/calculadora/cebado + relleno, que se suben a NS
* Actualizado el dialogo cebado/relleno permite el cebado y la creación de entradas para el careportal para el cambio de sitio y de cambio de los cartuchos

Reloj
--------------------------------------------------
* Se eliminó la variante de compilación separada, incluida en la compilación completa regular ahora. Para utilizar los controles de bolo desde el reloj, habilite este valor en el teléfono
* El asistente ahora sólo solicita carbohidratos (y el porcentaje si está habilitado en la configuración del reloj). Los parámetros que se incluyen en el cálculo se pueden configurar en la configuración del teléfono
* Las confirmaciones y los diálogos de información ahora funcionan también en el reloj 2.0
* Se añade Entrada de menú de eCarbs

Nuevos plugins
--------------------------------------------------
* PocTech app como fuente de BG
* Dexcom app parcheada como fuente BG
* Plugin de sensibilidad oref1

Misceláneo
--------------------------------------------------
* La aplicación ahora utiliza el cajón para mostrar todos los plugins; los plugins seleccionados como visibles en el creador de configuración se muestran como pestañas en la parte superior (favoritos)
* Revisión para las pestañas del constructor de configuración y objetivos, añadiendo descripciones
* Nuevo icono de la aplicación
* Muchas mejoras y correcciones de errores
* Alertas independientes de Nightscout si la bomba es inalcanzable durante más tiempo (p.ej. batería de bomba agotada) y lecturas de BG perdidas (ver _Local alerts_ en configuración)
* Opción para mantener la pantalla encendida
* Opción de mostrar notificaciónes como notificación Android
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
