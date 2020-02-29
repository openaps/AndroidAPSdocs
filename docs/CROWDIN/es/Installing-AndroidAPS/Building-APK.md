# Construyendo la APK

## Construyela tú mismo en lugar de descargarla

**AndroidAPS no está disponible como descarga debido a la regulación de los dispositivos mediales. ¡Es legal construir la aplicación para su propio uso, pero no debe dar una copia a los demás! Consulte la página [FAQ](../Getting-Started/FAQ.md) para obtener detalles.**

## ## Notas importantes

* Por favor utilice **[Android Studio Versión 3.5.1](https://developer.android.com/studio/)** o más reciente para construir el apk.
* [Windows 10 sistemas de 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) no son compatibles con Android Studio 3.5.1.

**Configuración bajo demanda** no está soportada por la versión actual del plugin de Gradle de Android!

Si la compilación falla con un error en la configuración personalizada, puede realizar lo siguiente:

* Abra la ventana de Preferencias, haga clic en Archivo > Configuración (en Mac, Android Studio > Preferencias).
* En el panel de la izquierda, pulse Compilar, Ejecución, Deployment > Compilador.
* Desmarque la casilla de verificación Configurar bajo demanda.
* Haga clic en Aplicar o en Aceptar.

* * *

### Este artículo se divide en dos partes.

* En la parte de descripción general hay una explicación sobre qué pasos son necesarios para crear el archivo APK.
* En el paso paso a paso encontrará las capturas de pantalla de una instalación en concreto. Debido a que las versiones de Android Studio - el entorno de desarrollo de software que usaremos para construir el APK - cambia muy rápidamente hace que esta guía no será idéntica a su instalación, pero debería darte un buen punto de partida. Android Studio también se ejecuta en Windows, Mac OS X y Linux y es posible que haya pequeñas diferencias en algunos aspectos entre cada plataforma. Si encuentras que algo importante está mal o falta, por favor informe al grupo de facebook "usuarios AndroidAPS" o en el Gitter chats [Android APS](https://gitter.im/MilosKozak/AndroidAPS) o [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) para que podamos echar un vistazo a esto.

## Inicio

En general, los pasos necesarios para crear el archivo APK son:

* [Instala Git](../Installing-AndroidAPS/git-install.rst)
* Instale y configura Android Studio.
* Utilice git para clonar el código fuente desde el repositorio central de Github, donde los desarrolladores han puesto el código actual para la aplicación.
* Abra el proyecto clonado en Android Studio como proyecto activo.
* Construya el APK firmado.
* Transfiera la APK firmada generada a su teléfono.

## Tutorial paso a paso

Descripción detallada de los pasos necesarios para crear el archivo APK.

## Instalar git (si no lo tienes ya)

Siga el manual en [git página de instalación](../Installing-AndroidAPS/git-install.rst).

## Instalar Android Studio

Las siguientes capturas de pantalla se han tomado de Android Studio Versión 3.1.3. Las pantallas puede ser un poco distintas dependiendo de la versión de Android Studio que utilice. Pero deberías ser capaz de encontrar el camino a través del proceso. La ayuda de la comunidad se proporciona, por ejemplo, en el grupo de Facebook [AndroidAPS](https://www.facebook.com/groups/1900195340201874/) y [en otros lugares](../Where-To-Go-For-Help/Connect-with-other-users.md).

Instale [Android Studio](https://developer.android.com/studio/install.html) y configurelo durante el primer inicio.

Seleccione "No importar valores", ya que no lo ha utilizado anteriormente.

![Captura de pantalla 1](../images/Installation_Screenshot_01.png)

Haga clic en "Siguiente".

![Captura de Pantalla 2](../images/Installation_Screenshot_02.png)

Seleccione la instalación "Estándar" y haga clic en "Siguiente".

![Captura de Pantalla 3](../images/Installation_Screenshot_03.png)

Seleccione el tema para la interfaz de usuario que desee. (En este manual usamos "Intellij". Luego haga clic en "Siguiente". Este es sólo el esquema de colores. Usted puede seleccionar cualquier que le gusta (por ejemplo, "Darcula" para el modo oscuro). Esta selección no tiene ninguna influencia sobre la construcción del APK.

![Captura de Pantalla 4](../images/Installation_Screenshot_04.png)

Pulse "Siguiente" en el diálogo "Verificar valores".

![Captura de Pantalla 5](../images/Installation_Screenshot_05.png)

El emulador de Android (para emular el smartphone en tu PC o Mac) no se utiliza para construir el APK. Puede pulsar "Finalizar" para finalizar la instalación y leer la documentación más adelante a gusto.

![Captura de Pantalla 6](../images/Installation_Screenshot_06.png)

Android Studio está descargando una gran cantidad de componentes de software que utiliza. Puede hacer clic en el botón "Mostrar detalles" para ver lo que ocurre, pero esto no es importante en absoluto.

![Captura de Pantalla 7](../images/Installation_Screenshot_07.png)

![Captura de Pantalla 8](../images/Installation_Screenshot_08.png)

Una vez que se hayan completado las descargas, haga clic en el botón "Finish".

![Captura de Pantalla 9](../images/Installation_Screenshot_09.png)

* Aplausos, aplausos que ahora han terminado la instalación de Android Studio y pueden empezar a clonar el código fuente. ¿Tal vez es hora de un descanso?

## Establecer la ruta git en las preferencias

### Windows

* Deja que Studio sepa dónde se encuentra git.exe: Archivo - Ajustes
  
  ![Android Studio - abrir la configuración](../images/Update_GitSettings1.png)

* En la ventana siguiente: Versión Control - Git

* Elija la ruta correcta: .../Git<font color="#FF0000"><b>/bin</b></font>

* Asegúrese de que el método de actualización "Combinar" (Merge) está seleccionado.
  
  ![Android Studio - Ruta de GIT](../images/Update_GitSettings2a.png)

### Mac

* Si instala git a través de un homebrew, no es necesario cambiar ninguna preferencia. Solo por caso: se puedan encontrar aquí: Android Studio - Preferencias.

## Descargar código y componentes adicionales

* Utilice clon git en Android Studio tal como se muestra en las capturas de pantalla a continuación. Seleccione "Check out project from Version Control" con "Git" como el sistema concreto de control de versiones.

![Captura de Pantalla 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Rellene el URL del repositorio AndroidAPS principal ("https://github.com/MilosKozak/AndroidAPS") y ahga click en "clone".

![Captura de Pantalla 13](../images/Installation_Screenshot_13.png)

Android Studio empezará a clonar. No haga clic en "Segundo plano" (Background), ya que se va rápido y hace las cosas más complicadas en este momento.

![Captura de Pantalla 14](../images/Installation_Screenshot_14.png)

Finalice la extracción del control de versión con la apertura del proyecto pulsando "Sí".

![Captura de Pantalla 15](../images/Installation_Screenshot_15.png)

Utilice el estándar "envoltorio gradle por defecto" y haga clic en "Aceptar".

![Captura de Pantalla 16](../images/Installation_Screenshot_16.png)

Lea y cierre la pantalla "Tip of Day" de Android Studio pulsando "Close".

![Captura de Pantalla 17](../images/Installation_Screenshot_17.png)

* Excelente, tiene su propia copia del código fuente y está listo para iniciar la construcción.
* Ahora nos estamos acercando a nuestro primer mensaje de error. Afortunadamente, Android Studio nos dará directamente la solución para esto. (In case you do not receive the error message shown in next screenshot try closing and restarting Android Studio.)

Pulse "Instalar la plataforma(s) y el proyecto de sincronización que falta", ya que Android Studio necesita instalar una plataforma que falta.

![Captura de Pantalla 18](../images/Installation_Screenshot_18.png)

Acepte el acuerdo de licencia seleccionando "Aceptar" y haciendo clic en "Siguiente".

![Captura de 19](../images/Installation_Screenshot_19.png)

Como se dice en el cuadro de diálogo, por favor espere hasta que la descarga haya terminado.

![Captura de Pantalla 20](../images/Installation_Screenshot_20.png)

Ahora ha terminado. Por favor, haga clic en "Finish".

![Captura de Pantalla 21](../images/Installation_Screenshot_21.png)

Aaaahhh, siguiente error. Pero Android Studio sugiere una solución similar. Pulse "Instalar herramientas de compilación y proyecto de sincronización", ya que Android Studio tiene que descargar las herramientas que faltan.

![Captura de Pantalla 22](../images/Installation_Screenshot_22.png)

Como se dice en el cuadro de diálogo, por favor espere hasta que la descarga haya terminado.

![Captura de Pantalla 23](../images/Installation_Screenshot_23.png)

Ahora ha terminado. Por favor, haga clic en "Finish".

![Captura de Pantalla 24](../images/Installation_Screenshot_24.png)

Y otro error a manejar como Android Studio tiene que descargar de nuevo una plataforma que falta. Pulse "Instalar la plataforma(s) y el proyecto de sincronización que faltan".

![Captura de Pantalla 25](../images/Installation_Screenshot_25.png)

Como se dice en el cuadro de diálogo, por favor espere hasta que la descarga haya terminado.

![Captura de Pantalla 26](../images/Installation_Screenshot_26.png)

Ahora ha terminado. Por favor, haga clic en "Finish".

![Captura de Pantalla 27](../images/Installation_Screenshot_27.png)

Pulse "Instalar herramientas de compilación y proyecto de sincronización", ya que Android Studio tiene que descargar las herramientas que faltan.

![Captura de Pantalla 28](../images/Installation_Screenshot_28.png)

Como se dice en el cuadro de diálogo, por favor espere hasta que la descarga haya terminado.

![Captura de Pantalla 29](../images/Installation_Screenshot_29.png)

Ahora ha terminado. Por favor, haga clic en "Finish".

![Captura de Pantalla 30](../images/Installation_Screenshot_30.png)

Síii, los mensajes de error se han ido y el primer grado de construcción se está desatando. Tal vez es tiempo de beber un poco de agua?

![Captura de Pantalla 31](../images/Installation_Screenshot_31.png)

Android Studio recomienda actualizar el sistema gradle. **Nunca actualice gradle! ** Esto podría llevar a dificultades!

Por favor, haga clic en "No me recuerde de nuevo para este proyecto".

![Captura de Pantalla 32](../images/AS_NoGradleUpdate.png)

La compilación se ejecuta de nuevo.

![Captura de Pantalla 33](../images/Installation_Screenshot_33.png)

Síiiiii, la primera compilación tiene éxito, pero no hemos terminado.

![Captura de Pantalla 34](../images/Installation_Screenshot_34.png)

## Generar APK firmado

En el menú, seleccione "Build" y, a continuación, "Generate Firmado Bundle/APK...". (El menú de Android Studio cambió a partir de septiembre de 2018. En las versiones anteriores, seleccione en el menú "Build" y luego "Generar APK Firmado...".)

La firma significa que usted firma su aplicación generada, pero en una forma digital como una especie de huella digital digital en la aplicación en sí. Esto es necesario porque Android tiene una regla que sólo acepta el código firmado para ejecutarse por razones de seguridad. Para obtener más información acerca de este tema, siga el enlace [aquí](https://developer.android.com/studio/publish/app-signing.html#generate-key) Seguridad es un tema profundo y complejo y no lo necesita ahora.

![Captura pantalla 39a](../images/Installation_Screenshot_39a.PNG)

En el recuadro de diálogo siguiente, seleccione "APK" en lugar de "Android App Bundle" y haga clic en el botón "Next".

![Captura pantalla 39b](../images/Installation_Screenshot_39b.PNG)

Seleccione "app" y haga clic en "Siguiente".

![Captura pantalla 40](../images/Installation_Screenshot_40.png)

Pulse "Crear nuevo..." para empezar a crear el almacén de claves. Un almacén de claves en este caso no es nada más que un archivo en el que se almacena la información para la firma. Está encriptado y la información está protegida con contraseñas. Le sugerimos almacenarlo en su carpeta de inicio y recordar las contraseñas, pero si pierde esta información no es un problema importante porque entonces sólo tiene que crear uno nuevo. La mejor práctica es almacenar esta información cuidadosamente.

![Captura de Pantalla 41](../images/Installation_Screenshot_41.png)

* Rellene la información para el siguiente diálogo. 
  * Ruta del almacén de claves: es la ruta al archivo del archivo de claves. **No guardar en la misma carpeta del projecto. Debe utilizar un directorio diferente!**
  * Los campos de contraseña siguientes son para que el almacén de claves efectúe una doble comprobación por los errores de escritura.
  * Alias es un nombre para la clave que necesita. Puede dejar el valor predeterminado o darle un nombre de fantasía que desee.
  * Los campos de contraseña por debajo de la clave son para la clave en sí. Como siempre doble verificación, para comprobar si hay errores tipográficos.
  * Puede dejar que la validez sea la predeterminada de 25 años.
  * Sólo tiene que llenar el nombre y apellido, pero se siente libre de completar el resto de la información. A continuación, haga clic en "OK".

![Captura de Pantalla 42](../images/Installation_Screenshot_42.png)

Rellene la información del último cuadro de diálogo en este diálogo y pulse "Siguiente".

![Captura de Pantalla 43](../images/Installation_Screenshot_43.png)

Seleccione "full" (o "fullRelease") como sabor para la aplicación generada. Select V1 "Jar Signature" (V2 es opcional) y haga clic en "Finish". La siguiente información puede ser importante para su uso posterior.

* La opción 'Release' debe ser la opción predeterminada para "Tipo de compilación", "Depurar" es sólo para la codificación de personas.
* Seleccione el tipo de construcción que quiere realizar. 
  * full / fullRelease (es decir, recomendaciones promulgadas automáticamente en un lazo cerrado)
  * openloop (es decir, recomendaciones entregada al usuario para la acción manual)
  * pumpcontrol (es decir, control remoto para la bomba, sin lazo)
  * nsclient (es decir, se visualizan los datos de bucle de otro usuario y se pueden añadir entradas del portal profesional careportal)

![Captura pantalla 44](../images/Installation_Screenshot_44.png)

En el registro de sucesos, verá que el APK firmado se ha generado satisfactoriamente.

![Captura pantalla 45](../images/Installation_Screenshot_45.png)

Pulse el enlace "locate" en el registro de sucesos.

![Captura pantalla 46](../images/Installation_Screenshot_46.png)

## Transferir APK a smartphone

Se abrirá una ventana del gestor de archivos. Puede parecer un poco diferente en su sistema, ya que estoy usando Linux. En Windows estará el Explorador de archivos y en Mac OS X the Finder. Allí debe ver el directorio con el archivo APK generado. Desafortunadamente este es el lugar incorrecto porque "wear-release.apk" no es la APK firmada que estamos buscando.

![Captura pantalla 47](../images/Installation_Screenshot_47.png)

Por favor, cambie al directorio AndroidAPS/app/full/release para encontrar el archivo "app-full-release.apk". Transfiera este archivo a tu smartphone Android. Puede hacerlo de la forma que prefiera, por ejemplo.

* Bluetooth
* subido en la nube (Google Drive u otros servicios en la nube)
* conectar el ordenador y el teléfono por cable 
* por correo (Tenga en cuenta que algunas aplicaciones de correo no permiten adjuntos apk, en este caso utilizan otro método de transferencia.)

En este ejemplo, Gmail se utiliza ya que es bastante simple. Para instalar la aplicación autofirmada, es necesario permitir que Android en el smartphone realice esta instalación incluso si este archivo se recibe a través de Gmail, lo que normalmente está prohibido. Si utiliza algo otro, continúe en consecuencia.

![Captura pantalla 48](../images/Installation_Screenshot_48.png)

En los ajustes de tu smartphone hay un área "instalación de aplicaciones desconocida" donde tengo que darle a Gmail el derecho de instalar archivos APK que obtengo a través de Gmail.

Seleccione "Permitir de esta fuente". Después de la instalación, puede inhabilitarla de nuevo.

![Permitir la instalación de aplicaciones de fuentes desconocidas](../images/Installation_Screenshot_49-50.png)

El último paso es presionar en el archivo APK que tengo a través de Gmail e instalar la aplicación. Si el APK no instala y tiene una versión más antigua de AndroidAPS en su teléfono que fue firmado con una clave distinta, entonces tendrá que desinstalar esto primero, recuerde exportar sus ajustes, si es así!

Sí, ya lo tienes y ahora puedes empezar con la configuración de AndroidAPS para tu uso (MCG, bomba de insulina), etc.

## Identify receiver if using xDrip+

[See xDrip+ page](../Configuration/xdrip#identify-receiver)

## Solución de problemas

Consulte la página separada [para la resolución de problemas de Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).