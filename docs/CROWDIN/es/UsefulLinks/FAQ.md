# Preguntas frecuentes para loopers

Cómo añadir preguntas a las preguntas frecuentes: sigue estas [instrucciones](../SupportingAaps/HowToEditTheDocs.md)

## General

### ¿Puedo simplemente descargar el archivo de instalación de AAPS?

No. No hay un archivo APK descargable para AAPS. Tienes que [compilarlo](../SettingUpAaps/BuildingAaps.md) tú mismo. Aquí está la razón:

AAPS se utiliza para controlar tu bomba y administrar insulina. Según la normativa vigente en Europa, todos los sistemas clasificados como IIa o IIb son productos sanitarios que requieren una aprobación reglamentaria (una marca CE), para lo que se necesitan diversos estudios y aprobaciones. La distribución de dispositivos no regulados es ilegal. Existen reglamentos similares en otras partes del mundo.

Esta normativa no se limita sólo a las ventas (en el sentido de obtener dinero por algo), sino que se aplica a cualquier distribución (incluso regalar). Construir un dispositivo médico para uno mismo, es la única manera de utilizar la aplicación dentro de esta normativa.

Por eso no hay apks disponibles.

(FAQ-how-to-begin)=

### ¿Cómo empezar?

Empieza con [Prepararse para empezar con AAPS](../Getting-Started/PreparingForAaps.md): te explica con más detalle todo lo que sigue.

En primer lugar, debes **obtener componentes de hardware compatibles con el lazo cerrado**:

* Una [bomba de insulina compatible](../Getting-Started/CompatiblePumps.md), 
* un [teléfono Android](../Getting-Started/Phones.md) (AAPS no es compatible con Apple iOS; puedes consultar [iOS Loop](https://loopkit.github.io/loopdocs/)) y
* un [sistema de monitorización continua de glucosa](../Getting-Started/CompatiblesCgms.md). 

En segundo lugar, tienes que **configurar tus componentes de software**: [AAPS](../SettingUpAaps/BuildingAaps.md), [fuente de MCG/FGM](../Getting-Started/CompatiblesCgms.md) y un [servidor de informes](../SettingUpAaps/SettingUpTheReportingServer.md).

En tercer lugar, tienes que aprender y **entender el diseño de referencia de OpenAPS para revisar tus factores de tratamiento**. El principio básico del lazo cerrado es que tu [tasa basal y tu ratio de carbohidratos](../SettingUpAaps/YourAapsProfile.md) sean correctos. Todas las recomendaciones asumen que tus necesidades de basal están cubiertas y cualquier pico o caída que estés experimentando es resultado de otros factores que, por lo tanto, requieren ajustes puntuales (ejercicio, estrés, etc.). Los ajustes que el lazo cerrado puede realizar por seguridad han sido limitados (consulta la tasa basal temporal máxima permitida en el [Diseño de Referencia de OpenAPS](https://openaps.org/reference-design/)), lo que significa que no quieres desperdiciar las dosis permitidas en corregir una basal mal ajustada. Si, por ejemplo, sueles tener basales temporales bajas antes de una comida, es probable que necesites ajustar tu tasa basal. Puedes usar [Autotune](#autotune-how-autotune-calculates-adjustments) para analizar una gran cantidad de datos y saber si hay que ajustar las basales y/o el ISF, y cómo, y también si hay que cambiar el ratio de carbohidratos. O puedes probar y ajustar tu basal [a la manera tradicional](https://integrateddiabetes.com/basal-testing/).

### ¿Qué aspectos prácticos tiene el lazo?

#### Protección con contraseña

Si no quieres que tus ajustes se puedan cambiar fácilmente, puedes protegerlos con una contraseña, un PIN o la autenticación biométrica de tu teléfono (huella dactilar, cara). Abre **Ajustes** > **Protección** > **Protección de ajustes** y elige el tipo de protección. En el mismo lugar también puedes proteger toda la app o solo los bolos. Consulta [Protección de ajustes](#Preferences-settings-protection) para más detalles.

#### Relojes inteligentes Android Wear

Si usas la app de AAPS del reloj para dar bolos o cambiar ajustes, cada solicitud debe confirmarse en el reloj: después de enviarla, el reloj muestra un resumen con un botón **CONFIRMAR**. Consulta [Manejo de AAPS con tu reloj inteligente Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Desconectar bomba

Si te quitas la bomba para ducharte, bañarte, nadar, hacer deporte u otras actividades, debes decirle a AAPS que no se está administrando insulina, para que la IOB sea correcta.

Puedes desconectar la bomba con el [icono del lazo](#AapsScreens-loop-status) en la pantalla principal de AAPS: púlsalo y elige **Desconectar bomba** con la duración que necesites. Si la actividad dura más de lo previsto, pulsa el icono otra vez y elige una nueva duración: no hace falta volver a conectar antes. Consulta [Desconectar la bomba para ducharte o hacer actividad](#pumps-cannulas-disconnecting) para saber cómo evitar la falta de insulina durante desconexiones largas.

#### Recomendaciones que no se basan en una sola lectura del MCG

Por seguridad, las recomendaciones no se basan en una sola lectura del MCG, sino en el delta medio. Por eso, si faltan algunas lecturas, puede pasar un tiempo desde que vuelven los datos hasta que AAPS vuelve a hacer el lazo.

#### Lecturas adicionales

Hay varios blogs con buenos consejos que te ayudan a entender los aspectos prácticos del lazo. Algunos ya no están en línea: los enlaces de abajo marcados como "archived copy" abren una copia guardada en Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### ¿Qué material de emergencia se recomienda llevar?

Debes llevar contigo el mismo material de emergencia que cualquier otra persona con DT1 con tratamiento con bomba de insulina. Cuando uses el lazo con AAPS, se recomienda mucho tener contigo o cerca el siguiente material adicional:

* Batería y cables para cargar el teléfono, el reloj y (si es necesario) el lector BT o dispositivo Link
* Baterías para la bomba
* Acceso a tus copias de seguridad, tanto en el teléfono como en la nube (por ejemplo, Google Drive, Dropbox), para poder configurar AAPS de nuevo en otro teléfono (consulta [Crear y restaurar copias de seguridad](../Maintenance/ExportImportSettings.md)): 
  * el [apk](../SettingUpAaps/BuildingAaps.md) actual de AAPS y de las demás apps que uses (por ejemplo, xDrip, Juggluco, BYODA).
  * tu archivo del almacén de claves (keystore) (de cuando compilaste el apk) y su contraseña,
  * tus últimos archivos de exportación de ajustes de AAPS y de tus otras apps,
  * tu contraseña maestra de **AAPS**: sin ella no puedes importar el archivo de ajustes.

(FAQ-organize-backups)=

#### ¿Cómo organizar mis copias de seguridad?

Exporta los ajustes con mucha frecuencia: después de cada cambio de pod o de depósito, después de modificar tu perfil, cuando hayas validado un objetivo, si cambias de bomba… Aunque no cambie nada, exporta una vez al mes. Guarda varios archivos de exportación antiguos.

**AAPS** puede hacerlo por ti: puede exportar tus ajustes de forma automática (por ejemplo, con una [automatización](#ExportImportSettings-Automating-Settings-Export) después de cada cambio de pod) y guardar la exportación directamente en una carpeta en la nube (Google Drive). Consulta [Crear y restaurar copias de seguridad](../Maintenance/ExportImportSettings.md).

### ¿Cómo puedo fijar el MCG/FGM de forma segura?

Puedes fijarlo con cinta. Hay varios parches de refuerzo («overpatches») ya perforados para los sistemas MCG más comunes (busca en Google, eBay o Amazon). Algunos loopers usan cinta de kinesiología estándar (más barata) o Rocktape.

Puedes sujetarlo. También puedes comprar brazaletes para la parte superior del brazo que sujetan el MCG/FGM con una banda (busca en Google, eBay o Amazon).

## Algoritmo APS

### ¿Por qué OpenAPS AMA muestra "dia: 3" aunque en mi perfil tengo otra DIA?

Con **OpenAPS AMA** seleccionado en **Configuración** > **APS**, **Abrir complemento** muestra los datos que se envían al algoritmo. En su sección **Perfil**, `dia` siempre es 3.0 o menos:

![Pantalla del complemento OpenAPS AMA con dia 3.0 en los datos del perfil](../images/screens/openaps_ama_plugin.png)

En AMA, DIA en realidad no significa «duración de la acción de la insulina». Es un parámetro que antes estaba relacionado con la DIA. Ahora significa «en cuánto tiempo debe terminar la corrección». No tiene nada que ver con el cálculo de la IOB. En OpenAPS SMB, este parámetro ya no es necesario.

## Otros ajustes

### Ajustes de Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (o AAPS) no sube datos: «Bloqueado por…». ¿Qué puedo hacer?

El estado de NSClient muestra por qué no se envían datos:

* **Bloqueado por opciones de conectividad**: los ajustes de conexión no permiten la conexión actual. Por ejemplo, usas datos móviles pero solo se permite Wi-Fi, o no estás en una de las redes Wi-Fi permitidas (SSID).
* **Bloqueado por opciones de carga**: los ajustes de conexión solo permiten sincronizar mientras el teléfono se carga (o solo con batería), y ahora no es así.
* **Sin conectividad**: el teléfono no tiene conexión a internet.

Revisa los [ajustes de conexión de NSClient](#Preferences-nsclient): **Usar datos móviles**, **Usar itinerancia de datos**, **Usar WiFi**, **WiFi SSID**, **Sincronizar usando la batería** y **Sincronizar durante la carga**.

### Ajustes del MCG

(FAQ-advanced-filtering)=

#### ¿Por qué AAPS dice «SMB siempre y después de carbohidratos desactivados porque la fuente activa de BG no soporta filtrado avanzado»?

**Habilitar SMB siempre** y **Habilitar SMB después de comer** solo se pueden usar con una [fuente de datos de glucosa de confianza](#GettingStarted-TrustedBGSource): un sensor y una app de MCG que pueden decirle a **AAPS** de qué sensor vienen las lecturas. Con cualquier otra fuente de glucosa, **AAPS** desactiva estas dos opciones y muestra este mensaje. Revisa la lista de fuentes de confianza y, si tu sensor está en ella, asegúrate de usar una de las apps de MCG indicadas para él. Consulta también [Suavizado de los datos de glucosa en la sangre](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Bomba

#### Baterías

El lazo puede gastar la batería de la bomba más rápido que el uso normal, porque el sistema se comunica por Bluetooth mucho más que un usuario manual. Es mejor cambiar la batería al 25 %, porque a partir de ahí la comunicación se vuelve difícil. Puedes establecer alarmas de aviso para la batería de la bomba utilizando la variable PUMP_WARN_BATT_P en la web de Nightscout. Trucos para alargar la vida de la batería:

* reduce el tiempo que la pantalla LCD está encendida (en el menú de configuración de la bomba)
* reduce el tiempo que la luz de fondo está encendida (en el menú de configuración de la bomba)
* pon las notificaciones en pitido en lugar de vibración (en el menú de configuración de la bomba)
* usa los botones de la bomba solo para recargar; usa AAPS para ver todo el historial, el nivel de batería y el volumen del depósito.
* En algunos teléfonos, la app AAPS puede cerrarse a menudo para ahorrar energía o liberar memoria RAM. Cuando AAPS se reinicia en cada arranque, establece una conexión Bluetooth con la bomba y vuelve a leer la tasa basal actual y el historial de bolos. Esto consume batería. Para ver si esto ocurre, activa **Registrar evento de inicio de la aplicación** en los **Ajustes avanzados** de NSClient: Nightscout recibirá un evento en cada reinicio de AAPS, y así es fácil seguir el problema. Para que pase menos, desactiva la optimización de batería para AAPS, para que el teléfono deje de cerrarlo: consulta [ahorro de batería](#FAQ-battery-savings) más abajo.
* limpia los polos de la batería con una toallita con alcohol para que no queden restos de cera o grasa de fabricación.
* en las [bombas Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md), el proceso de arranque hace pasar una corriente alta por la batería para romper a propósito la película de pasivación (que evita la pérdida de energía durante el almacenamiento), pero no siempre consigue romperla al 100 %. Saca y vuelve a poner la batería 2-3 veces hasta que la pantalla muestre 100 %, o usa la llave de la batería para hacer un cortocircuito breve antes de ponerla: tócala en los dos polos durante una fracción de segundo.
* consulta también más consejos para [tipos concretos de batería](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Cambiar depósitos y cánulas

El depósito se debe cambiar directamente en la bomba; después, el cambio se registra en **AAPS**. Sigue la [guía paso a paso para cambiar el depósito y la cánula de la bomba](#pumps-cannulas-changing-reservoir-and-cannula).

### Fondo de pantalla

Encontrarás el fondo de pantalla de AAPS para tu teléfono en la [página de teléfonos](#Phones-phone-wallpaper).

### Uso diario

Muchas de las situaciones de abajo se pueden preparar una vez como [escena](#scenes): un ajuste guardado que cambia el perfil, el objetivo temporal y otros ajustes con un solo toque. **AAPS** ofrece plantillas ya hechas, por ejemplo *Ejercicio*, *Dormir*, *Alcohol* o *Baño*.

#### Higiene

(what-to-do-when-taking-a-shower-or-bath)=

##### ¿Qué hacer al ducharte o bañarte?

Puedes quitarte la bomba para ducharte o bañarte. Durante este corto tiempo quizá no la necesites, pero debes decirle a AAPS que te has desconectado para que los cálculos de la IOB sean correctos. Consulta la [descripción de arriba](#FAQ-disconnect-pump). La plantilla de [escena](#scenes) *Baño* lo hace por ti.

#### Trabajo

Según tu trabajo, puedes usar distintos factores de tratamiento en los días laborables. Como looper, deberías pensar en un [cambio de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) para tu día de trabajo normal. Por ejemplo, puedes cambiar a un perfil de más del 100 % si tu trabajo es poco exigente (por ejemplo, sentado en una oficina), o de menos del 100 % si estás activo y de pie todo el día. También podrías usar un objetivo temporal alto o bajo, o un [desplazamiento horario de tu perfil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile), cuando trabajes mucho antes o después de lo normal, o si trabajas por turnos. También puedes crear un segundo perfil (por ejemplo, «casa» y «trabajo») y hacer cada día un cambio de perfil al perfil que realmente necesitas, o guardar tus ajustes de trabajo como [escena](#scenes).

### Actividades de ocio

(FAQ-sports)=

#### Deportes

Tienes que cambiar los hábitos deportivos que tenías antes de usar el lazo. Si simplemente tomas uno o más carbohidratos para el deporte como antes, el sistema de lazo cerrado los detectará y los corregirá.

Así tendrías más carbohidratos activos, pero al mismo tiempo el lazo los contrarrestaría y daría insulina.

Cuando uses el lazo, prueba estos pasos:

* Haz un [cambio de perfil](#ProfileSwitch-change-percentage) < 100 %: toca el nombre del perfil en la pantalla principal, toca el botón redondo **▶** y luego ajusta **Porcentaje** y **Duración**.
* Pon un [objetivo temporal de actividad](#TempTargets-activity-temp-target) por encima de tu objetivo normal. Con un porcentaje por debajo del 100 % y una duración, la misma pantalla **Activar** ofrece un interruptor **Objetivo temporal / Actividad** que inicia los dos a la vez.
* Si usas SMB, asegúrate de que [«Habilitar SMB con objetivo temporal elevado»](#Open-APS-features-enable-smb-with-high-temp-targets) y [«Habilitar SMB siempre»](#Open-APS-features-enable-smb-always) están desactivados.

Es importante preparar estos ajustes antes y revisarlos después. Haz los cambios con tiempo antes del deporte y ten en cuenta el efecto del relleno de glucógeno en los músculos.

Las plantillas de [escena](#scenes) *Ejercicio* y *Noche tras ejercicio* agrupan estos ajustes, así que puedes iniciarlos con un solo toque. Si haces deporte con regularidad a la misma hora (por ejemplo, una clase en tu gimnasio), puedes usar la [automatización](../DailyLifeWithAaps/Automations.md) para iniciar el cambio de perfil y el objetivo temporal, o la escena. La automatización basada en la ubicación también puede ser una opción, pero hace más difícil la preparación previa.

El porcentaje del cambio de perfil, el valor del objetivo temporal de actividad y el mejor momento para los cambios son individuales. Empieza con prudencia cuando busques el valor correcto para ti (empieza con un porcentaje más bajo y un objetivo temporal más alto).

#### Sexo

Puedes quitarte la bomba para estar «libre», pero debes decírselo a AAPS para que los cálculos de la IOB sean correctos. Consulta la [descripción de arriba](#FAQ-disconnect-pump).

#### Beber alcohol

Beber alcohol es arriesgado en modo de lazo cerrado, porque el algoritmo no puede predecir correctamente la glucosa influida por el alcohol. Tienes que encontrar tu propio método para manejar esto con las siguientes funciones de AAPS:

* desactivar el modo de lazo cerrado y tratar la diabetes de forma manual, o
* poner objetivos temporales altos y desactivar UAM para evitar que el lazo aumente la IOB por una comida no anunciada, o
* haz un [cambio de perfil](#ProfileSwitch-change-percentage) a bastante menos del 100 % 

La plantilla de [escena](#scenes) *Alcohol* es un punto de partida que puedes adaptar a tu propio método.

Cuando bebas alcohol, vigila siempre tu MCG para evitar una hipoglucemia de forma manual, comiendo carbohidratos.

#### Dormir

##### ¿Cómo puedo usar el lazo por la noche sin radiación de la red móvil y del Wi-Fi?

Muchos usuarios ponen el teléfono en modo avión por la noche. Si quieres que el lazo te ayude mientras duermes, haz lo siguiente (solo funciona si tu app de MCG está en el mismo teléfono que AAPS, como xDrip, Juggluco o BYODA; NO funciona si recibes las lecturas de glucosa a través de Nightscout):

1. Activa el modo avión en tu móvil.
2. Espera hasta que el modo avión esté activo.
3. Activa el Bluetooth.

Ahora no recibes llamadas ni estás conectado a internet. Pero el lazo sigue en marcha.

Algunas personas han tenido problemas con la difusión local (AAPS no recibe los valores de glucosa de xDrip) cuando el teléfono está en modo avión. En xDrip, ve a Settings > Inter-app settings > Identify receiver e introduce `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Si quieres otros ajustes por la noche (por ejemplo, un objetivo más alto), la plantilla de [escena](#scenes) *Dormir* es un buen punto de partida.

#### Viajar

##### ¿Cómo manejar los cambios de zona horaria?

Con Dana R y Dana R Coreana no tienes que hacer nada. Para otras bombas, consulta la página [viajar con cambio de zona horaria](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) para más detalles.

### Temas médicos

#### Hospitalización

Si quieres compartir información sobre AAPS y el lazo DIY con tus médicos, puedes imprimir la [guía de AAPS para médicos](../UsefulLinks/ClinicianGuideToAaps.md).

#### Cita médica con tu endocrinólogo

##### Informes

Puedes mostrar tus informes de Nightscout (https://YOUR-NS-SITE.com/report) o usar [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Preguntas frecuentes en Discord y sus respuestas...

### Mi problema no aparece aquí.

Consulta [¿Dónde puedo obtener ayuda?](../GettingHelp/WhereCanIGetHelp.md). Si encontraste la solución tú mismo, **¡recuérdanos que la añadamos a esta lista!**

### Compilar e instalar

(FAQ-build-errors)=

#### Tengo problemas o errores al compilar la app.

Revisa la página de solución de problemas de la forma en que compilas **AAPS** (consulta [Compilar AAPS](../SettingUpAaps/BuildingAaps.md)):

* compilar con un navegador: [Compilación en el navegador: solución de problemas](#aaps-ci-troubleshooting),
* compilar con Android Studio: [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Error al compilar: nombre de archivo demasiado largo

Este error puede ocurrir al compilar con Android Studio: la compilación se detiene con un error que dice que el nombre de archivo es demasiado largo. Soluciones posibles: Mueve tu código fuente a una carpeta más cercana a la raíz de tu disco (por ejemplo, "C:\src\AndroidAPS").

Desde Android Studio: Asegúrate de que «Gradle» ha terminado de sincronizar e indexar después de abrir el proyecto y de descargar los cambios de GitHub (pull). Ejecuta Build->Clean Project antes de hacer Rebuild Project. Ejecuta File->Invalidate Caches and Restart en Android Studio.

(FAQ-running-dev-version)=

#### Alerta: se está ejecutando una versión de desarrollo. El lazo cerrado está desactivado

**AAPS** muestra este mensaje cuando usas una versión de desarrollo (dev) sin el modo de ingeniería: en una versión dev, el lazo cerrado solo funciona en modo de ingeniería.

La versión dev es para pruebas, no para usar el lazo de verdad: lee [Rama de desarrollo](../AdvancedOptions/DevBranch.md) antes de seguir.

Para activar el modo de ingeniería:

1. Pon un archivo llamado `engineering_mode` en la subcarpeta `extra` de tu directorio de AAPS (la carpeta que elegiste en el asistente de configuración, normalmente `AAPS/extra`). Sirve cualquier archivo, siempre que tenga el nombre correcto.
2. Reinicia **AAPS** para que encuentre el archivo.

Consejo: haz una copia de un archivo de registro existente y cámbiale el nombre a "engineering_mode" (nota: ¡sin extensión de archivo!).

### Objetivos

#### Estoy atascado en un objetivo y necesito ayuda.

Primero lee [Completar los objetivos](../SettingUpAaps/CompletingTheObjectives.md). Si sigues atascado, haz una captura de pantalla de la pregunta y las respuestas y publícala en el canal de AAPS en Discord. No olvides decir qué opciones eliges (o no) y por qué. Recibirás pistas y ayuda, pero tendrás que encontrar las respuestas tú mismo.

### Ajustes, contraseñas y copias de seguridad

(FAQ-reset-master-password)=

#### ¿Cómo restablecer la contraseña maestra?

Si olvidaste tu contraseña maestra, puedes restablecerla al número de serie de tu bomba:

1. Crea un archivo vacío llamado `PasswordReset` (sin extensión de archivo) en la subcarpeta `extra` de tu directorio de AAPS (normalmente `AAPS/extra`).
2. Reinicia **AAPS**. Tu bomba debe estar conectada: **AAPS** muestra «Esperando a la bomba…» y tiene que leer el número de serie de la bomba en 30 segundos.
3. **AAPS** muestra «¡Contraseña establecida!»: tu contraseña maestra es ahora el **número de serie de tu bomba**. El archivo `PasswordReset` se borra automáticamente.
4. Abre **Ajustes** > **Protección** > **Contraseña maestra** y pon una contraseña nueva.

Si no se alcanza la bomba a tiempo, no cambia nada: revisa la conexión con la bomba e inténtalo de nuevo.

Esto solo restablece la contraseña maestra. Las contraseñas o PIN de ajustes, de la aplicación o de bolo no se restablecen, pero siempre puedes usar la contraseña maestra en su lugar.

    {admonition} Archivos de ajustes antiguos
    :class: warning
    Los archivos de ajustes exportados con la contraseña maestra antigua solo se pueden importar con esa contraseña antigua.

(FAQ-where-are-settings-files)=

#### ¿Dónde puedo encontrar los archivos de ajustes?

Los archivos de ajustes se guardan en la subcarpeta `preferences` del directorio de AAPS que elegiste en el [asistente de configuración](#SetupWizard-StoragePermission) (por ejemplo, `/internal storage/AAPS/preferences`). Si configuraste una carpeta en la nube (Google Drive), tus exportaciones también se pueden guardar allí. Consulta [Crear y restaurar copias de seguridad](../Maintenance/ExportImportSettings.md).

ADVERTENCIA: ¡No pierdas tu contraseña! Sin ella no podrás importar un archivo de ajustes cifrado.

(FAQ-import-settings-earlier-versions)=

#### ¿Cómo importo los ajustes de versiones anteriores de AAPS a AAPS v3 o v4?

Solo puedes importar ajustes (en AAPS v3 o v4) que se exportaron con AAPS v2.8x o posterior. Si usabas una versión de AAPS anterior a v2.8x o necesitas usar exportaciones de ajustes anteriores a v2.8x, primero tienes que instalar AAPS v2.8. Importa los ajustes antiguos de v2.x en v2.8. Después de comprobar que todo está bien, puedes exportar los ajustes desde v2.8. Instala la versión actual de AAPS e importa en ella los ajustes de v2.8.

Si usas la misma clave para compilar la versión antigua y la nueva, ni siquiera tendrás que importar los ajustes. Puedes instalar la versión nueva encima de la antigua.

Se añadieron algunos objetivos nuevos. Tendrás que validarlos.

(FAQ-delete-treatments)=

#### ¿Dónde puedo borrar tratamientos?

Abre el **menú** (☰) y elige **Historial de tratamientos**. Mantén pulsada una entrada para seleccionarla, toca más entradas si hace falta, luego toca el icono de la **papelera** y confirma. Consulta [Historial de tratamientos](#aaps-screens-treatments).

### Problemas con el teléfono y la conexión

(FAQ-aaps-stops)=

#### AAPS se detiene todos los días más o menos a la misma hora.

* En algunos teléfonos, Google Play Protect puede cerrar **AAPS** cada mañana. Si pasa esto, ve a las opciones de Google Play y desactiva **Google Play Protect**.
* Busca apps de «limpieza» (por ejemplo, CCleaner) y desinstálalas.
* Desactiva todas las optimizaciones de batería para **AAPS** (consulta [ahorro de batería](#FAQ-battery-savings) más abajo).

(FAQ-battery-savings)=

#### ¿Cómo configurar el ahorro de batería?

Tu teléfono puede suspender **AAPS** y las apps relacionadas (app de MCG, Bluetooth) cuando no lo usas. Entonces **AAPS** no puede hacer su trabajo y las conexiones Bluetooth con el sensor y la bomba (o RileyLink) se pueden cortar, lo que causa alertas de «bomba no alcanzable» y errores de comunicación.

Desactiva la optimización de batería para **AAPS**, tu app de MCG (por ejemplo, xDrip) y la app del sistema Bluetooth. La forma de hacerlo depende de la marca, el modelo y la versión de Android del teléfono:

* consulta [Optimización de batería](#generaltroubleshooting-android-related-issues) para teléfonos Pixel, Samsung y Huawei,
* en **AAPS**, abre el **menú** (☰) > **Acerca de** y toca **¿No matar mi aplicación?**, o visita [Don't kill my app](https://dontkillmyapp.com/) para otras marcas.

Si no estás seguro de que el ahorro de batería cause tu problema, puedes desactivar temporalmente todo el ahorro de batería del teléfono: la batería se gastará más rápido, pero verás pronto si el problema desaparece.

(FAQ-pump-unreachable-alerts)=

#### Alertas de bomba no alcanzable varias veces al día o por la noche.

Tu teléfono puede estar suspendiendo **AAPS** o incluso el Bluetooth, y así pierde la conexión con la bomba o el RileyLink (consulta [ahorro de batería](#FAQ-battery-savings) más arriba).

También puedes cambiar cuándo salta la alerta: pulsa el icono de **Ajustes** (engranaje) arriba a la derecha de la pantalla principal y elige **Alertas locales** > **Umbral de bomba no alcanzable** (de 30 a 300 minutos). Consulta la página de tu bomba: algunas recomiendan un valor, por ejemplo 120 minutos para [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mi Link/bomba/pod no responde (RL/OL/EmaLink…)

Con algunos teléfonos hay desconexiones de Bluetooth con los dispositivos Link (RL/OL/EmaL...).

Otros tienen dispositivos Link que no responden (AAPS dice que están conectados, pero el Link no puede comunicarse con la bomba ni darle órdenes).

Primero prueba el botón **Restablecer RileyLink** en la pantalla de la bomba (consulta la página de tu bomba: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Si esto no ayuda, la forma más fácil de que todas estas partes vuelvan a funcionar juntas es:

1. Apaga el Link.
2. Cierra **AAPS** (**menú** (☰) > **Salir**).
3. Mantén pulsado el icono de **AAPS**, abre la **Información de la aplicación** de Android, toca **Forzar detención** y luego **Almacenamiento** > **Borrar caché** (¡NO borres el almacenamiento ni los datos!).
4. En raras ocasiones, algunos teléfonos necesitan reiniciarse en este paso. Puedes intentarlo sin reiniciar.
5. Enciende el Link.
6. Inicia **AAPS**.
7. En la pantalla de la bomba, toca **Emparejar RileyLink** y elige tu Link de nuevo.

### Control remoto

(FAQ-aapsclient)=

#### Configurar y usar la app remota AAPSClient

**AAPSClient** es una app aparte que permite a un cuidador seguir y controlar **AAPS** a distancia. Desde **AAPS** v4, para controlar **AAPS** desde AAPSClient hace falta emparejar las dos apps una vez. Consulta:

* [La app AAPSClient](#aapsclient-app): instalación, primer inicio y emparejamiento,
* [Control máster ↔ cliente](#client-master-control): qué se puede controlar y cómo funciona el emparejamiento,
* [AAPSClient en un reloj inteligente](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Los tratamientos que introduzco en la web de Nightscout no se aplican

Es el [Modo reforzado](#client-master-control-hardened-mode). Mientras el control de clientes está activado (siempre en Modo sencillo), **AAPS** solo acepta cambios de los clientes emparejados, no de la web de Nightscout ni de otras apps. En su lugar, introdúcelos en un **AAPSClient** emparejado.

### Alertas y avisos

#### Tengo un indicador de aviso rojo (triángulo rojo) / AAPS no activa el lazo cerrado / el lazo se queda en LGS / tenía un triángulo amarillo

El indicador de aviso rojo en el acceso directo de la fuente de glucosa es una función de seguridad de AAPS. Consulta [Señal de aviso de glucosa](#aaps-screens-bg-warning-sign) para la explicación completa.

Un indicador de aviso rojo en el acceso directo de la fuente de glucosa en la barra inferior (el triángulo rojo de versiones antiguas) significa que tienes valores de glucosa duplicados y AAPS no puede calcular los deltas con precisión. El lazo cerrado pasa al modo **Suspensión por glucosa baja (LGS)**: sigue reduciendo o suspendiendo tu basal para protegerte de las bajadas, pero no da insulina de corrección. Tienes que borrar un valor de glucosa de cada valor duplicado para quitar el aviso. Toca el acceso directo para abrir tu [pantalla de la fuente de glucosa](#aaps-screens-bg-source): el duplicado aparece marcado en rojo. Mantén pulsada una línea que quieras borrar, marca una de cada línea duplicada y toca el icono de la papelera. Puede que tengas que restablecer las bases de datos de AAPS si hay demasiados valores de glucosa duplicados. En este caso también perderás las estadísticas, la IOB, los COB y el perfil seleccionado.

Cuando el aviso desaparece, AAPS no vuelve solo a **Lazo cerrado**. Pulsa el icono del lazo en la pantalla principal y elige de nuevo **Lazo cerrado**.

Posible origen del problema: xDrip y/o NS rellenan valores de glucosa pasados (backfilling).

El triángulo amarillo de versiones antiguas indicaba un intervalo inestable entre lecturas de glucosa (lecturas que no llegan con regularidad cada 5 min, o que faltan), lo que pasa a menudo con Libre o después de cambiar el transmisor del G6. **AAPS** 4 ya no lo muestra: recalcula los valores en segundo plano y el lazo funciona correctamente.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### ¿Puedo pasar un Pod DASH activo a otro teléfono?

El estado del Pod se incluye en los ajustes exportados, así que puedes pasar un Pod activo a otro teléfono: exporta los ajustes justo antes del cambio e impórtalos en el otro teléfono. Esto no tiene soporte oficial y hay riesgo de perder el Pod: si es posible, pruébalo cuando tu Pod esté a punto de caducar.

Primero lee estas secciones:

* [Exportar e importar ajustes](#omnipod-dash-export-import) en la página de Omnipod DASH, y [Bombas sin tubo](#ExportImportSettings-tubeless-pumps): en el teléfono nuevo, marca **También reemplazar la configuración de la bomba** y usa un archivo exportado durante el Pod que llevas ahora,
* [Desechar un pod](#omnipod-dash-discard-pod), para quitar después el Pod del teléfono antiguo. Mantén el teléfono antiguo en modo avión hasta que el Pod se deseche, para que los dos teléfonos nunca hablen con el Pod a la vez.