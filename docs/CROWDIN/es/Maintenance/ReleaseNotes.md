
# Notas de la versión

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Sigue las instrucciones del [manual de actualización](UpdateToNewVersion.md) para actualizar a una nueva versión. La sección de solución de problemas de la página del manual de actualización también trata las dificultades más comunes al actualizar **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Consulta [Qué cambió en AAPS v4](V4Changes.md) para ver los cambios de comportamiento importantes: funciones que se han movido, se han renombrado o se han eliminado.
```

Cuando haya una nueva actualización disponible, recibirás una notificación como esta:

![Información de actualización](../images/AAPS_LoopDisable90days.png)

Si no actualizas antes de la fecha de caducidad, **AAPS** pasará a Lazo abierto.

Consulta [Fin de vida útil](EndOfLife.md) para ver las fechas de fin de las versiones de AAPS.

**No ignores la notificación.** Las nuevas versiones de **AAPS** traen correcciones de seguridad importantes. Por eso, todos los usuarios de **AAPS** deben actualizar a la última versión lo antes posible. Es un esfuerzo para mejorar la seguridad de cada usuario de **AAPS** y de la comunidad DIY. Gracias por tu comprensión.

(maintenance-android-version-aaps-version)=

## Versión de Android y versión de AAPS

Si tu teléfono usa una versión de Android anterior a Android 12, no podrás usar AAPS v3.4 o posterior, porque necesita al menos Android 12.

Se han lanzado nuevas versiones de AAPS que sólo comprueban la versión de Android del teléfono, para permitir a los usuarios instalar versiones anteriores de AAPS en teléfonos con versiones de Android inferiores a Android 9. No se incluyen otras mejoras.

Busca tu versión de Android en la tabla de abajo y usa la versión de **AAPS** correspondiente. El código se descarga de <https://github.com/nightscout/AndroidAPS> usando la rama indicada.

| Tu versión de Android   | Versión de AAPS que debes usar | Rama que debes descargar                                            |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------- |
| Android 12 y superiores | Última versión                 | [master](https://github.com/nightscout/AndroidAPS) (predeterminada) |
| Android 11              | **3.3.2.1**                    | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1)    |
| Android 9, 10           | **3.2.0.4**                    | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4)    |
| Android 8               | **2.8.2.1**                    | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1)    |
| Android 7               | **2.6.2**                      | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)        |

## Versión de WearOS

- AAPS necesita WearOS 3.0, 3.2 o 3.5 (Android 11, nivel de API 30) o posterior. Los relojes con WearOS 2 no son compatibles.

```{tip}
WearOS 5, nivel de API 34 (Android 14), tiene [limitaciones](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Versión 4.0.0

Fecha de lanzamiento: 31-10-2026

### Nuevas funciones
- Nueva interfaz de usuario: la app del teléfono se ha rehecho con Jetpack Compose @MilosKozak
- [Búsqueda global](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migración a Kotlin Multiplatform, cliente para escritorio Windows, Mac y Linux, y para iOS @MilosKozak
- [Escenas](../DailyLifeWithAaps/Scenes.md): guarda un conjunto de acciones y ejecútalas juntas @MilosKozak
- [Control máster ↔ cliente](../RemoteFeatures/ClientMasterControl.md): envía órdenes desde un teléfono cliente al máster @MilosKozak
  - [Roles de cliente](#client-master-control-roles): Solo lectura, Comidas, Cuidador o Administrador para cada cliente @MilosKozak
  - [Modo reforzado](#client-master-control-hardened-mode): con el control de clientes activado, el máster solo acepta cambios de clientes emparejados @MilosKozak
  - Emparejamiento con un código QR que también configura Nightscout en el cliente, o con un PIN; el secreto de emparejamiento se cambia justo después de emparejar @MilosKozak
  - [Token de Nightscout propio](#client-master-control-own-token) para cada cliente, solo con los derechos que el cliente necesita @MilosKozak
- Soporte de [concentración de insulina](../AdvancedOptions/InsulinConcentration.md) (U200, U500) en bombas, asistente y perfiles @Philoul @MilosKozak
- Gestión de la insulina: catálogo de insulinas, apodos, selección en el perfil y en el asistente @Philoul
- Complemento de calibración @MilosKozak
- [Suavizado](../CompatibleCgms/SmoothingBloodGlucoseData.md): Filtro de Kalman no lineal (UKF) @piecycle
- [Rotación del sitio](#Aapsscreens-site-rotation): registrar y rotar los sitios de infusión @Philoul @MilosKozak
- Nueva versión de [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nuevos [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accesibilidad: la app del teléfono funciona con un lector de pantalla: controles con nombre, estado leído en voz alta, descripciones de los gráficos y encabezados para recorrer la pantalla @MilosKozak
- [Importación de ajustes](../Maintenance/ExportImportSettings.md): puede mantener los ajustes de la bomba @MilosKozak
- La notificación permanente usa las actualizaciones en directo (live updates) de Android, con soporte para la Now bar de Samsung y el delta @premnirmal
- Gráfico de glucosa: [mantén pulsado](#aaps-screens-graph-press-and-hold) para ver los valores en una lectura, en todos los gráficos de la pantalla principal @t1dude @olorinmaia
- Mejoras de rendimiento @MilosKozak
- eCarbs automáticos en el Asistente de bolo @MilosKozak

### Nuevos dispositivos
- **CareLevo**: nuevo [controlador de bomba](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2**: soporte @MilosKozak
- **Instara**: nueva fuente de MCG @leohunt

### Mejoras de los controladores de bombas
- Pantallas de resumen de la bomba rehechas para Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn y Equil @MilosKozak
- **Omnipod Dash**: códigos Ref al estilo del PDM y descripciones de fallos fáciles de leer, compensación de la deriva siempre activa, mejor información del tipo de bolo @nl-ruud
- **Omnipod**: fecha de fin obligatoria para Dash y Eros @mcnelson
- **DanaR, RS**: emulador de bomba para pruebas @MilosKozak
- **Equil**: emulador de bomba para pruebas @MilosKozak
- Muchas correcciones de bombas y del lazo @MilosKozak y otros

### Wear OS
- [App del reloj](../WearOS/WearOsSmartwatch.md) rehecha con Compose, nuevos mosaicos (tiles) y complicaciones, instalación automática de la esfera (Watch Face Push) en Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponible para WearOS 6.0 (GW7, GW8, GW9...) con una esfera WFF propia @Philoul @olorinmaia
- CustomWatchface ahora puede incluir 5 huecos de complicaciones que puedes personalizar (función nueva, solo disponible para relojes más antiguos) @Philoul
- Nueva [esfera WFF basada en las complicaciones de AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Correcciones en el resultado del Asistente de bolo y del Asistente rápido @olorinmaia
- Nuevo gráfico de glucosa y actividad de Modo de funcionamiento en el menú principal @olorinmaia
- Asistente de bolo: página de [tipo de comida](#WearOsSmartwatch-wizard-meal-type) que divide los carbohidratos como el asistente del teléfono, y [hora de los carbohidratos](#WearOsSmartwatch-wizard-carb-time) con el recordatorio *hora de comer* en el reloj @olorinmaia
- [Alarmas del teléfono en el reloj](#WearOsSmartwatch-phone-alarms): el reloj muestra la alarma y ofrece Silencio y Silenciar 5 min @olorinmaia

### Compilación
- Workflows de CI para compilar por tag o rama, correspondencia de versiones de JDK @Angus-repo

### Colaboradores
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Registro completo de cambios: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Versión 3.4.2.6

- Equil: mejor estabilidad @MilosKozak

(version3425)=

## Versión 3.4.2.5

- Equil: corregida una condición de carrera @MilosKozak

(version3424)=

## Versión 3.4.2.4

- Correcciones de Equil @MilosKozak
- Corregida la sincronización del perfil con NS @MilosKozak

(version3423)=

## Versión 3.4.2.3
- Dash: resolución de la deriva @nl-ruud
- NSClientV3: corregido un hueco después de la reconexión @MilosKozak
- Automatización: corregida la deserialización @MilosKozak
- Equil: corregido el informe de la batería @MilosKozak
- Workflow de limpieza (Cleanup) @vanelsberg
- Equil: mejor recuperación de errores @MilosKozak
- DanaRS: corregida la comunicación con la bomba doméstica @MilosKozak
- Insight: corregida la sincronización de las TBR @MilosKozak
- Dash: corregido un error de activación @nl-ruud

(version3422)=

## Versión 3.4.2.2

- Corrección de problemas con Equil y Medtronic
- Mejor seguridad de Medtrum

(version3421)=

## Versión 3.4.2.1

- Equil: corregidos el emparejamiento y el diálogo de progreso @MilosKozak

(version3420)=

## Versión 3.4.2.0

Fecha de lanzamiento: 04-02-2026

- Equil: corregida la resistencia para distintos modelos @hhfcvmars
- Tidepool: corregida la sesión @MilosKozak
- Medtrum: corregido el proceso de activación evitando el doble llenado @MilosKozak
- COB: corregido el cálculo de COB (cubre un caso límite peligroso) @MilosKozak

(version3410)=

## Versión 3.4.1.0

Fecha de lanzamiento: 03-08-2026

### Núcleo
- Corregida la gestión del horario de verano (DST) @MilosKozak
- Mejor identificación, unificada, del objetivo normal (mgdl > 99, mmol > 5,5) @MilosKozak
- SMS: RESTART protegido con PIN @MilosKozak
- Mantenimiento: aviso si se elige una carpeta errónea @MilosKozak

### Mejoras de los controladores de bombas
- **Omnipod Dash**: código del controlador BLE reorganizado en el módulo omnipod/common @jwoglom
- **Omnipod Dash**: intento de corregir el estado de conexión @MilosKozak
- **Omnipod**: se valida el perfil antes de activar el pod para no desperdiciar pods (#4534) @brianV
- **Medtronic**: corregido el mismo tipo de codificación mostrado en el diálogo de ajustes @mifi100
- **Medtronic**: preparación de clases comunes de bombas (preparación para Tandem) @andy-rozman
- **RileyLink**: corrección de la codificación (#4519) @mifi100
- **Equil**: compatibilidad ampliada con bombas de insulina según el prefijo del número de serie (#4510) @hhfcvmars
- **Equil**: se añade registro (logging) @MilosKozak
- **Diaconn G8**: corregido un error de sincronización del registro y añadido soporte para firmware 3.58+ @miyeongkim
- **Diaconn**: corregida la conversión de la unidad de duración de las TBR @miyeongkim
- **Diaconn**: uso de commandQueue.loadEvents() para la sincronización del historial @miyeongkim
- Se permite administrar insulina mientras el lazo está suspendido pero la bomba está disponible @cschuijt

### Nube / copia de seguridad
- Se añade copia de seguridad en Google Drive @Angus-repo
- Se avisa en la interfaz cuando cambia el estado de error del almacenamiento en la nube @Angus-repo
- Se permite usar a la vez almacenamiento local y en la nube @Angus-repo

### Tidepool
- Mejor migración a OAuth2 de Tidepool @MilosKozak
- Corregido el estado BLOCKED indefinido de Tidepool, corregido el rechazo de SSID vacíos @michaeln-synapse

### NSClient
- NSCv3: mejor reconexión @MilosKozak

### Wear OS
- Mostrar la nueva IOB en el resultado del asistente si la IOB se usa en los cálculos @olorinmaia
- Corregido el progreso del bolo (BolusProgress) en el reloj con la cantidad total @Philoul

### Interfaz
- Mejor icono ic_none para la Rotación del sitio @Philoul
- Corregido que no se usara el ajuste de bomba de la gestión de la rotación del sitio @samfundev

### Colaboradores
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Versión 3.4.0.0

Fecha de lanzamiento: 31-12-2025

### Antes de actualizar:
* Esta versión necesita Google Android 12.0 o superior. Comprueba la versión de tu teléfono antes de intentar actualizar.
* Actualiza a la última versión de Android Studio o, mejor, usa la compilación en el navegador.

### Nuevas funciones
* Modo de funcionamiento @MilosKozak
  * Mostrar el [historial del estado del lazo](#AapsScreens-running-mode) en las pestañas de tratamientos
  * Mostrar y permitir cambiar el [estado del lazo desde AAPSClient](#RemoteControl_aapsclient).<br>NOTA: necesita el ajuste [NSClient > Sincronización > Recibir modo de funcionamiento desde NS](#Preferences-nsclient-synchronization)
* [Nuevos MCG](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* Soporte de [Rotación del sitio](#Aapsscreens-site-rotation) @Philoul
* Nueva [acción de automatización](#automations-automation-action): activar o desactivar los SMB @MilosKozak
* El MCG Syai es una [fuente de confianza](#GettingStarted-TrustedBGSource) y admite filtrado avanzado @MilosKozak

### Mejoras de Wear OS
* consumo de batería muy reducido @MilosKozak
* Mejoras y correcciones de la interfaz @olorinmaia
* código reescrito casi por completo para adaptarlo al nivel actual de las librerías (antes WearOS 2) @MilosKozak
* 2 nuevas complicaciones para datos ampliados @Philoul
* Cambio al proveedor moderno de complicaciones con DataStore @MilosKozak

### Corrección de fugas de memoria
* Corregidas fugas de memoria en el código @MilosKozak
* Se añade el informe de fugas de memoria de LeakCanary a Firebase Crashlytics @MilosKozak

### Mejoras de los controladores de bombas
* **DanaI**: corregidos problemas de desconexión @MilosKozak
* **RileyLink**: comunicación más rápida reduciendo los retrasos @mifi100
* **Medtrum**: se muestran la hora de activación y la edad del parche @vanelsberg, corrección de las mayúsculas de la contraseña @MilosKozak
* **Combo**: corregidas condiciones de carrera en las pruebas @MilosKozak @dv1
* **Equil**: conectividad optimizada, menor consumo de batería @MilosKozak

### Sincronización con Nightscout
* Mejor eliminación de duplicados cuando falla NS @MilosKozak

### Mejoras de interfaz y experiencia de uso
* varias mejoras @MilosKozak @Philoul @olorinmaia

### Automatización
* Nueva acción de control de SMB: activar o desactivar SMB con una automatización @MilosKozak

### Pruebas
* Se añaden pruebas unitarias completas para las bombas Equil, Eopatch, Dana y Medtronic @MilosKozak
* Mejor estabilidad y cobertura de las pruebas en varios módulos @MilosKozak

### Tidepool
* Tidepool OAUTH2 (soporte para la nueva autenticación de Tidepool) @MilosKozak

(version3321)=

## Versión 3.3.2.1

Fecha de lanzamiento: 13-08-2025

- Corregida la conexión Bluetooth de Omnipod en Android 16
- Proceso de CI (compilación en el navegador)
- Corregida la conversión mmol-mgdl
- Corregida la elección de una hora errónea en los diálogos en algunas zonas horarias
- Corregida la lectura de claves en modo sencillo
- Corregidas las predicciones que faltaban en el reloj
- Tabla de configuraciones mejorada
- Sincronización completa de NSCv3 mejorada

(version3300)=

## Versión 3.3.2.0

Fecha de lanzamiento: 27-03-2025

### Cómo actualizar

* Para compilar esta versión se necesita la [versión de Android Studio llamada "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superior. Si ya compilaste una versión 3.3.x, tienes que actualizar Android Studio otra vez.

(version-enforcement)=

### A partir de esta versión, las notificaciones y la obligación de actualizar se han simplificado y suavizado, y funcionan así:
*  No caduca cuando el dispositivo está sin conexión (si no hay conexión a internet). Esto significa que ya no hay periodos de gracia de 60 y 90 días.
*  Después de la caducidad se fuerza el modo LGS
*  Recibirás avisos y notificaciones con menos frecuencia:
   - quedan 28 días o más: cada 7 días
   - quedan 27–14 días: cada 3 días
   - después, una vez al día
   - La notificación se genera después del mediodía para no molestarte por la noche
* Solo hay 2 tipos de notificación
   - Nueva versión disponible (no tiene efecto en AAPS)
   - La aplicación caduca en una fecha futura (todavía sin efecto en AAPS) / ha caducado (AAPS pasará a modo LGS)

### Novedades

* Comando SMS RESTART @MilosKozak
* Parámetros de cambio de perfil desde el reloj @olorinmaia
* Esfera AAPS V2 en modo oscuro @olorinmaia
* Mejoras en el intercambio de datos del G7 @olorinmaia
* Configuración del Widget @MilosKozak
* Mejoras de la interfaz de los RadioButtons @olorinmaia
* Automatización: elegir la posición en el mapa @MilosKozak
* Versión visible en las pantallas principales @MilosKozak
* Es obligatorio compilar con el sistema git existente (no se permiten descargas en zip)
* Mostrar la versión en la pantalla principal @MilosKozak
* Mejoras en la subida a Tidepool @ConstantinMatheis

### Corrección de errores

* Corrección de la desvinculación (unbonding) de Dash @Andreas
* Correcciones de Garmin @robertbuessow @suside
* Corregida la visualización de IOB en los diálogos @olorinmaia
* Mejoras de ortografía y validación en los Objetivos @MilosKozak
* Corregido el dibujo de las TBR emuladas @MilosKozak
* Corregido un fallo que permitía saltarse la seguridad @tdrkDev

## Versión 3.3.1.3

Fecha de lanzamiento: 21-01-2025

### Corrección de errores

* Dash: la vinculación (bonding) es opcional (desactivada por defecto) @MilosKozak
* Equil: corregidos los bolos de 10+ U, mejoras de las alarmas @EquilHack
* Garmin: mejoras del reloj @swissalpine
* Mejoras del reloj @olorinmaia
* Controlar el estado del lazo desde el reloj @tdrkDev
* Mejoras de estabilidad

*  **Puede que sea necesario volver a [configurar el Authenticator](#sms-commands-authenticator-setup).**

## Versión 3.3.1.2

Fecha de lanzamiento: 15-01-2025

### Cómo actualizar

* Para compilar esta versión se necesita la [versión de Android Studio llamada "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superior. **No es lo mismo que "Ladybug" a secas.** Si ya compilaste una versión 3.3.x, tienes que actualizar Android Studio otra vez.

### Corrección de errores

* Dash: usar vinculación (bonding) en Android 15+
* Se recupera el botón de Dexcom en Inicio
* Equil: se permite eliminar una bomba que no funciona
* Aviso cuando el factor de ajuste de DynISF es cero
* NSCv3: resuelta la comunicación por websocket en teléfonos con una hora ligeramente distinta
* Comandos SMS: corregido OneTimePassword. **Puede que sea necesario volver a [configurar el Authenticator](#sms-commands-authenticator-setup).**
* Corregido un problema por el que algunas preferencias ya no se podían editar.
* Corregido el restablecimiento de la contraseña maestra con la bomba virtual.
* Corregida la importación de archivos grandes de copia de seguridad de ajustes.

## Versión 3.3.1.0

Fecha de lanzamiento: 06-01-2025

### Cambios en la interfaz

* [Se añaden colores para distinguir AAPSClient y AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Mejoras en el diseño y los iconos de las acciones del usuario

### Otras funciones

* Nuevo disparador de automatización: [número de pasos](#screen-heart-rate-steps) @Roman Rihter
* Se permite recibir todo en la sincronización completa de NSCv3 (también datos que antes no se sincronizaban, como las TBR) @MilosKozak
* NSClient v3: el Aviso ahora funciona (_p. ej._ de AAPSClient a AAPS) @MilosKozak

### Cambios técnicos y corrección de errores

* Corregido un cierre inesperado de Insight @philoul
* Corregida la creación de demasiadas entradas deviceStatus en Nightscout @MilosKozak
* Corregida la absorción de carbohidratos @MilosKozak
* Corregido el color de RadioButtons y CheckBoxes @MilosKozak
* Corregido un error en la migración del porcentaje de DynISF @MilosKozak
* Resuelta una notificación de DynISF mal colocada @MilosKozak
* Corregido un error en las esferas @philoul

## Versión 3.3.0.0

Fecha de lanzamiento: 29-12-2024

### Funciones principales

* La función **[ISF Dinámico](../DailyLifeWithAaps/DynamicISF.md)** ya no es un complemento propio, sino una opción del complemento [OpenAPS SMB](#Config-Builder-aps), con algunos cambios en su comportamiento:
  * El **Cambio de perfil** y el **Porcentaje del perfil** ahora se tienen en cuenta en el **ISF Dinámico** para la fuerza de la sensibilidad dinámica
  * Se calcula el **ISF** promedio de las últimas 24 h y este valor se usa para el asistente de bolo y el cálculo de **COB**. El valor de **ISF del perfil** no se usa en absoluto (excepto como respaldo cuando no hay datos del historial)
  * Se ha reescrito la página de documentación de ISF Dinámico. Lee la sección importante [Cosas a tener en cuenta al activar el ISF Dinámico](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [“Habilitar SMB siempre” y “Habilitar SMB después de comer”](#Open-APS-features-enable-smb-always) para usuarios de FreeStyle Libre 2 y Libre 3
  * Nota: necesita la última versión de xDrip+ o Juggluco.
* Nuevos disparadores de **Automatización**
* Exportaciones de ajustes desatendidas

### Cómo actualizar

* Antes de actualizar:
  * **<span style="color:red">Esta versión necesita Google Android 11.0 o superior</span>**. Comprueba la versión de tu teléfono antes de intentar actualizar.
  * Si usas el controlador Combo “antiguo” con el dispositivo ruffy, cambia al [controlador Combo nativo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) antes de actualizar
  * Perderás tus [gráficos adicionales](#AapsScreens-section-g-additional-graphs) de la pantalla de inicio durante la actualización: si hace falta, apunta a mano tu configuración actual para poder crearlos de nuevo después de actualizar.
  * Esta versión **NO** resuelve los [problemas de conexión Bluetooth que algunas personas tienen con Android 15](../Getting-Started/Phones.md) (es un problema de Android, no de **AAPS**). Hay una corrección disponible en 3.3.1.2.
  * El botón BYODA de la pantalla de inicio ya no está disponible por limitaciones de Android. Esto está corregido en 3.3.1.2.
* Instrucciones de actualización: sigue la guía [Actualizar a una nueva versión o rama](../Maintenance/UpdateToNewVersion.md).
  * Para compilar esta versión se necesita la [versión de Android Studio llamada "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) o superior. Si ya tienes instalada una versión anterior de Android Studio, puede que tengas que <span style="color:red">configurar la versión de JVM a 21</span>. Consulta [Solución de problemas para Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Consejo: si no quieres perder tu historial de **AAPS**, haz SIEMPRE una ACTUALIZACIÓN y NO una DESINSTALACIÓN/INSTALACIÓN. Como precaución, haz una copia de seguridad de tus ajustes actuales de **AAPS** y guarda el APK antiguo para volver a la versión anterior si algo sale mal.
* Después de actualizar:
  * Configura el nuevo [ajuste “Directorio de AAPS”](#preferences-maintenance-logdirectory) en la pestaña Mantenimiento.

### Cambios detallados

#### MCG y bombas

* [“Habilitar SMB siempre” y “Habilitar SMB después de comer”](#Open-APS-features-enable-smb-always) para usuarios de FreeStyle Libre 2 y Libre 3 @MilosKozak
* Mejoras del [controlador de Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Mejoras de comunicación, con un nuevo ajuste para evitar problemas en algunos teléfonos
  * Mostrar el nivel del reservorio al inicio de la activación
  * Corregido un error por el que la activación volvía al inicio y el usuario no podía terminarla
  * Información sobre el estado de sincronización y otras aclaraciones
* Nueva bomba compatible: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nuevos MCG compatibles: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer y [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Controlador de Insight reescrito en kotlin @Philoul
* Eliminado el antiguo controlador Combo que dependía de ruffy

#### Cambios en la interfaz

* [Modo sencillo](#preferences-simple-mode) activado por defecto en una instalación nueva @MilosKozak
* Nuevas opciones de [Asistente rápido](#Preferences-quick-wizard) @radicalb
  * El Asistente rápido ahora usa la misma lógica que la calculadora para calcular y mostrar el bolo. Ahora puedes usar el campo “hora de los carbohidratos” del Asistente rápido para hacer un prebolo.
* Nuevo [menú de escala del gráfico](#aaps-screens-main-graph); mejoras en la interfaz del [menú de gráficos adicionales](#AapsScreens-activate-optional-information) @Philoul
* [Mejora del diseño de la Tabla de configuraciones](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Las secciones ahora están plegadas por defecto. Usa la flecha para desplegarlas.
* Sensibilidad variable visible en AAPSClient
* Mejoras en la interfaz del asistente de bolo @kenzo44
* Corregida la visualización del texto en las pestañas de la bomba con el tema claro @jbr77rr

#### Otras funciones

* [Exportaciones de ajustes desatendidas](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nuevo [disparador de Automatización](#automations-automation-triggers) @vanelsberg
  * Activación del pod (solo bombas parche)
* Nuevos [disparadores de Automatización](#automations-automation-triggers) @jbr77rr
  * Edad de la cánula, Edad de la insulina, Edad de la batería, Edad del sensor, Nivel del reservorio, Nivel de batería de la bomba
* Se permite introducir carbohidratos negativos @MilosKozak
* Nuevo parámetro [“Directorio de AAPS”](#preferences-maintenance-settings) para elegir una carpeta de almacenamiento distinta de la predeterminada.
* Se permiten [registros de insulina cuando la bomba está suspendida](#aaps-screens-buttons-insulin) @jbr77rr
* [Objetivo 2](#objectives-objective2) actualizado @MilosKozak
  * Comprobar que la contraseña maestra está establecida y que la conoces
* Carbohidratos aleatorios en modo de prueba @MilosKozak
* Corregido un error en el cálculo de la TDD @MilosKozak
* Comandos SMS: se permite [**no** enviar SMS por un cambio de perfil](#sms-commands-too-many-messages) que viene de NS @MilosKozak

#### Relojes inteligentes

* Mejoras del reloj y de las esferas @Philoul @MilosKozak @olorinmaia
* Mosaicos (tiles) del reloj a partir de acciones de Automatización @Philoul
* Esferas combinadas de AAPS, AAPSClient y AAPSClient2 para seguir a más pacientes @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Cambios técnicos

* [cambio de la ubicación de los archivos de registro (logs)](#Accessing-logfiles-accessing-logfiles)
* nueva estructura interna de módulos @MilosKozak
* capa de persistencia separada del código principal @MilosKozak
* archivos de compilación reescritos en kts @MilosKozak
* algoritmos reescritos en kotlin para un mejor rendimiento @MilosKozak
* muchísimas pruebas unitarias nuevas @MilosKozak y otros
* más código convertido a kotlin @MilosKozak
* nueva gestión de preferencias, xml \-\> kotlin @MilosKozak
* nueva configuración de CI, CI en servidores propios @MilosKozak
* librerías actualizadas a la última versión, toml @MilosKozak
* migración a kotlin 2.0, java 21 @MilosKozak

(version3204)=

## [Versión 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Fecha de lanzamiento: 27-02-2024

Esta versión es la última que es compatible con Android 10. Si no puedes actualizar a Android 11, [actualiza AAPS a 3.2.0.4](#update-aaps-3204).

### Cambios

- Soporte de G7 con xDrip
- Correcciones de Medtrum
- Corrección del icono de Automatización
- Corrección al superar el objetivo 1

(version3200)=

## Versión 3.2.0.0 dedicada a @Philoul

Fecha de lanzamiento: 23-10-2023

### Notas importantes

- NS 15 es necesario
- Al usar websockets en el complemento NS v3, los tratamientos introducidos desde la NS UI (botón más) y desde otras aplicaciones que usan la API v1 no se envían a AAPS. Esto se solucionará en futuras versiones de NS. Usa siempre el mismo cliente (v1 o v3) en AAPS y en AAPSClient hasta que NS pase internamente del todo a v3. Lo mismo es válido para AAPS y el propio AAPSClient.
- Los websockets en el complemento v3 funcionan de forma parecida al complemento v1. Sin websockets habilitados, AAPS programa regularmente descargas desde NS, lo que debería reducir el consumo de batería, porque NS no está permanentemente conectado. Por otro lado, esto significa retrasos en el intercambio de datos. ¡Lee [aquí](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) los comentarios importantes del equipo de desarrollo antes de usarla!
- Si estás usando xDrip como fuente de MCG, debes seleccionarlo de nuevo después de la actualización, debido a cambios internos.
- Tidepool puede utilizarse como sustituto de NS para superar el primer objetivo.
- Si envías datos a xDrip+, debes configurar el complemento de sincronización de xDrip+. Para recibir los datos de glucosa de AAPS en xDrip, debes seleccionar “xDrip+ Sync Follower” como fuente
- Si quieres cambiar al controlador ComboV2, debes desinstalar Ruffy y emparejar de nuevo la bomba con AAPS
- Para utilizar el complemento ISFDinámico, debes iniciar el Objetivo 11 (todos los anteriores deben estar en estado terminado para permitir el inicio del  objetivo 11)


### Cambios

- Controlador de bomba EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- Controlador de bomba Accu-Chek Combo V2 (sin necesidad de Ruffy) @dv1
- Controlador de bomba Medtrum Nano @jbr7rr
- Soporte para DanaI coreana @MilosKozak
- Soporte al MCG Glunovo @christinadamianou
- Soporte a Dexcom G7 @MilosKozak @rICTx-T1D @khskekec
- Complemento NSClient v3 @MilosKozak
- Soporte para Tidepool @MilosKozak
- Complemento de suavizado @MilosKozak, @justmara, Suavizado exponencial @nichi (Tsunami), Suavizado promedio @jbr7rr
- Algoritmo ISF Dinámico @Chris Wilson, @tim2000s
- Integración Relojes Garmin & Soporte de ritmo cardiaco @buessow
- Nuevo logo @thiagomsoares
- Nuevas esferas @Philoul
- Corregidos muchos problemas de la versión 3.1
- Permitir añadir notas desde más lugares @Sergey Zorchenko
- Correcciones de la interfaz gráfica @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- Nuevos comandos SMS LOOP LGS/CLOSED @pzadroga
- Traducciones Wear @Andries-Smit
- Traslado de comunicaciones con xDrip+ a un módulo independiente @MilosKozak
- Cambios internos: actualización de versiones de librerías, migración a rx3, nueva estructura de módulos @MilosKozak
- Correcciones en el controlador de Diaconn @miyeongkim
- Más opciones de mantenimiento de la base de datos @MilosKozak
- AAPSClient proporciona información si el teléfono principal está conectado a la electricidad @MilosKozak
- Cambio en asistente de bolo. Si el MCG no está disponible, se ignora el porcentaje (es decir, se utiliza el 100%)
- Migración al sistema de compilación KTS @MilosKozak
- Mejora en la integración de CI @MilosKozak y @buessow
- limpieza de pruebas @ryanhaining @MilosKozak
- 110k+ nuevas líneas de código, 240k líneas modificadas, 6884 archivos modificados

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Comentarios importantes sobre el uso de la API v3 frente a la v1 de Nightscout con AAPS

v1 es el protocolo antiguo que se usa para intercambiar datos entre el sitio web de NS y el servidor de NS. Tiene muchas limitaciones
- v1 envía solo 2 días de datos
- v1 envía todos los datos de 2 días en cada reconexión
- usar websockets es obligatorio = conexión permanente, más consumo de batería
- cuando hay desconexiones frecuentes, la conexión con NS se pausa durante 15 minutos para evitar un alto consumo de datos

v3 es el protocolo nuevo. Más seguro y eficiente
- al usar tokens puedes definir mejor los derechos de acceso
- el protocolo es más eficiente en ambos lados (AAPS y NS)
- Puede leer hasta 3 meses de datos de NS
- puedes elegir usar o no usar websockets en cada dispositivo (usarlos significa actualizaciones más rápidas; no usarlos significa menor consumo, pero actualizaciones más lentas, es decir, de minutos)
- NSClient no se pausa cuando hay desconexiones

LIMITACIONES
- Se debe usar NS 15 con AAPS 3.2
- v3 no ve las actualizaciones hechas con el protocolo v1 (probablemente se resolverá en alguna versión futura de NS)
- en la dirección contraria, debido al antiguo método poco eficaz de seguir los cambios, v1 sí ve los cambios hechos por v3
- recuerda que NS todavía usa v1 internamente, por lo que no se pueden introducir datos desde la interfaz web de NS si usas v3. Debes usar AAPSClient o SMS si quieres introducir datos a distancia

CONFIGURACIÓN RECOMENDADA
- por todo lo anterior, debes elegir un solo método y usarlo en todos los dispositivos (recuerda que, en el momento de escribir esto, todos los demás programas que suben datos usan v1). Si decides pasar a v3, selecciona v3 en AAPS y en todos los AAPSClient
- se prefiere v3 por su eficiencia
- usar websockets o no con v3 depende de tus preferencias
- se recomienda MUCHO dejar que AAPS reúna todos los datos y luego los suba a NS como único programa que sube datos. Todos los demás dispositivos o aplicaciones solo deben leer de NS. Así evitarás conflictos y errores de sincronización. Esto también vale para enviar datos de glucosa a NS con el conector Dexcom Share, etc.

(version3100)=

## Versión 3.1.0

Fecha de lanzamiento: 19-07-2022

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Versión 3.0.0

Fecha de lanzamiento: 31-01-2022

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Versión 2.8.2

Fecha de lanzamiento: 23-01-2021

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Versión 2.8.1.1

Fecha de lanzamiento: 12-01-2021

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Versión 2.8.0

Fecha de lanzamiento: 01-01-2021

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Versión 2.7.0

Fecha de lanzamiento: 24-09-2020

[Notas de la versión](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Versión 2.6.1.4

Fecha de lanzamiento: 04-05-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Versión 2.6.1.3

Fecha de lanzamiento: 03-05-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Versión 2.6.1.2

Fecha de lanzamiento: 19-04-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Versión 2.6.1.1

Fecha de lanzamiento: 06-04-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Versión 2.6.1

Fecha de lanzamiento: 21-03-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Versión 2.6.0

Fecha de lanzamiento: 29-02-2020

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Versión 2.5.1

Fecha de lanzamiento: 31-10-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Versión 2.5.0

Fecha de lanzamiento: 26-10-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Versión 2.3

Fecha de lanzamiento: 25-04-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Versión 2.2.2

Fecha de lanzamiento: 07-04-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Versión 2.2

Fecha de lanzamiento: 29-03-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Versión 2.1

Fecha de lanzamiento: 03-03-2019

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Versión 2.0

Fecha de lanzamiento: 03-11-2018

[Notas de la versión](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Versión 1.0

```{admonition} First version of **AAPS**
:class: note

La primera versión de prueba empezó en 2015 y la primera versión pública salió en 2016.

La cronología exacta de estas versiones no está disponible por ahora, pero como esta pregunta se ha hecho varias veces, la documentamos aquí.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
