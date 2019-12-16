# Construyendo la APK

## Construyela tú mismo en lugar de descargarla

**AndroidAPS no está disponible como descarga debido a la regulación de los dispositivos mediales. ¡Es legal construir la aplicación para su propio uso, pero no debe dar una copia a los demás! Consulte la página [FAQ](../Getting-Started/FAQ.md) para obtener detalles.**

## ## Notas importantes

* Por favor utilice **[Android Studio Versión 3.5.1](https://developer.android.com/studio/)** o más reciente para construir el apk.
* [Windows 10 sistemas de 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) no son compatibles con Android Studio 3.5.1.

**Configuración bajo demanda** no está soportada por la versión actual del plugin de Gradle de Android!

If your build fails with an error regarding "on demand configuration" you can do the following:

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

* [Install git](../Installing-AndroidAPS/git-install.rst)
* Instale y configura Android Studio.
* Utilice git para clonar el código fuente desde el repositorio central de Github, donde los desarrolladores han puesto el código actual para la aplicación.
* Abra el proyecto clonado en Android Studio como proyecto activo.
* Construya el APK firmado.
* Transfiera la APK firmada generada a su teléfono.

## Tutorial paso a paso

Descripción detallada de los pasos necesarios para crear el archivo APK.

## Install git (if you don't have it)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Instalar Android Studio

Las siguientes capturas de pantalla se han tomado de Android Studio Versión 3.1.3. Las pantallas puede ser un poco distintas dependiendo de la versión de Android Studio que utilice. Pero deberías ser capaz de encontrar el camino a través del proceso. La ayuda de la comunidad se proporciona, por ejemplo, en el grupo de Facebook [AndroidAPS](https://www.facebook.com/groups/1900195340201874/) y [en otros lugares](../Where-To-Go-For-Help/Connect-with-other-users.md).

Instale [Android Studio](https://developer.android.com/studio/install.html) y configurelo durante el primer inicio.

Seleccione "No importar valores", ya que no lo ha utilizado anteriormente.

![Screenshot 1](../images/Installation_Screenshot_01.png)

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

* Si instala git a través de un homebrew, no es necesario cambiar ninguna preferencia. Just in case: They can be found here: Android Studio - Preferences.

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
* Ahora nos estamos acercando a nuestro primer mensaje de error. Afortunadamente, Android Studio nos dará directamente la solución para esto.

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

## Generate signed APK

In the menu select "Build" and then "Generate Signed Bundle / APK...". (The menu in Android Studio changed as of September 2018. En las versiones anteriores, seleccione en el menú "Build" y luego "Generar APK Firmado...".)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. Esto es necesario porque Android tiene una regla que sólo acepta el código firmado para ejecutarse por razones de seguridad. Para obtener más información acerca de este tema, siga el enlace [aquí](https://developer.android.com/studio/publish/app-signing.html#generate-key) Seguridad es un tema profundo y complejo y no lo necesita ahora.

![Captura pantalla 39a](../images/Installation_Screenshot_39a.PNG)

En el recuadro de diálogo siguiente, seleccione "APK" en lugar de "Android App Bundle" y haga clic en el botón "Next".

![Captura pantalla 39b](../images/Installation_Screenshot_39b.PNG)

Seleccione "app" y haga clic en "Siguiente".

![Captura pantalla 40](../images/Installation_Screenshot_40.png)

Pulse "Crear nuevo..." para empezar a crear el almacén de claves. Un almacén de claves en este caso no es nada más que un archivo en el que se almacena la información para la firma. Está encriptado y la información está protegida con contraseñas. We suggest storing it in your home folder and remember the passwords but if you lose this information it's not a big issue because then you just have to create a new one. La mejor práctica es almacenar esta información cuidadosamente.

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

* 'Release' should be your default choice for "Build Type", 'Debug' is just for people coding.
* Select the build type you want to build. 
  * full / fullRelease (i.e. recommendations automatically enacted in closed looping)
  * openloop (i.e. recommendations given to user to manually enact)
  * pumpcontrol (i.e. remote control for pump, no looping)
  * nsclient (i.e. looping data of another user is displayed and careportal entries can be added)

![Captura pantalla 44](../images/Installation_Screenshot_44.png)

En el registro de sucesos, verá que el APK firmado se ha generado satisfactoriamente.

![Captura pantalla 45](../images/Installation_Screenshot_45.png)

Pulse el enlace "locate" en el registro de sucesos.

![Captura pantalla 46](../images/Installation_Screenshot_46.png)

## Transfer APK to smartphone

Se abrirá una ventana del gestor de archivos. Puede parecer un poco diferente en su sistema, ya que estoy usando Linux. On Windows there will be the File Explorer and on Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. Puede hacerlo de la forma que prefiera, por ejemplo.

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Select "Allow from this source". After the installation, you can disable it again.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.

## Identificar receptor si se utiliza xDrip

[Consulte la página xDrip](../Configuration/xdrip#identify-receiver)

## Solución de problemas

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).