Solución de problemas para Android Studio
**************************************************
Perdida de almacén de claves
==================================================
Si utiliza el mismo almacén de claves a la hora de actualizar AndroidAPS usted no tiene que desinstalar la versión anterior en su smartphone. Es por eso que se recomienda almacenar el almacén de claves en un lugar seguro.

En caso de que ya no pueda encontrar el almacén de claves antiguo, haga lo siguiente:

1. `Export settings <../Usage/ExportImportSettings.html#export-settings>`__ on your phone.
2. Copie la configuración desde su teléfono a una ubicación externa (es decir,. su computadora, almacenamiento en la nube...).
3. Asegúrese de que el archivo de configuración "AndroidAPS Preferences" se almacena de forma segura.
4. Generar apk firmado de la nueva versión tal y como se describe en la página `página de actualización <../Installing-AndroidAPS/Update-to-new-version.html>`_.
5. Desinstale la versión anterior de AAPS en su teléfono.
6. Instale la nueva versión de AAPS en el teléfono.
7. `Import settings <../Usage/ExportImportSettings.html#export-settings>`_ - if you can't find them on your phone copy them from the external storage.
8. Continuar con el lazo.

Avisos del compilador Kotlin
==================================================
Si la compilación se ha completado satisfactoriamente, pero se obtienen avisos del compilador Kotlin, simplemente ignore estos avisos. 

La aplicación se ha creado correctamente y se puede transferir al teléfono.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignora el aviso del compilador Kotlin

La clave fue creada con errores
==================================================
Al crear un nuevo almacén de claves para la creación del APK firmado, en Windows puede aparecer el siguiente mensaje de error

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: La clave fue creada con errores

Esto parece ser un error con Android Studio 3.5.1 y su entorno Java en Windows. La clave se ha creado correctamente, pero una recomendación se muestra falsamente como un error. Esto se puede ignorar actualmente.

No es posible descargar… / Trabajar sin conexión
==================================================
Si se obtiene un mensaje de error como este

.. image:: ../images/GIT_Offline1.jpg
  :alt: Aviso no se ha podido descargar

asegúrese de que el 'Trabajo fuera de línea ' está inhabilitado.

Archivo -> Ajustes

.. image:: ../images/GIT_Offline2.jpg
  :alt: Configuración fuera de línea

Error: buildOutput.apkData no debe ser nulo
==================================================
A veces, es posible que obtenga un mensaje de error al generar el apk diciendo

  "Errores al crear el APK."
   
  `Causa: buildOutput.apkData no debe ser nulo`

Este es un error conocido en Android Studio 3.5 y probablemente no se arreglará antes de Android Studio 3.6. Tres opciones:

1. Suprima manualmente las tres carpetas de compilación (normal "build", build folder en "app" y "build" en "wear") y genere el apk firmado de nuevo.
2. Set destination folder to project folder instead of app folder as described in `this video <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Cambie la carpeta de destino de apk (ubicación distinta).

No se puede iniciar el proceso daemon
==================================================
Si ve un mensaje de error como el que aparece a continuación, probablemente utilice un sistema Windows 10 de 32 bits. Esto no está soportado por Android Studio 3.5.1 y superior. Si utiliza Windows 10, debe utilizar un sistema operativo de 64 bits.

Hay muchos manuales en Internet sobre cómo determinar si tienes un SO de 32 o 64 bits, es decir, de 64 bits. `este <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Captura de pantalla no se puede iniciar el proceso daemon
  

No hay datos de MCG
==================================================
* En caso de que esté utilizando xDrip+: Identifique el receptor tal como se describe en la página `xDrip + página de ajustes <../Configuration/xdrip.html#identify-receiver>`_.
* In case you are using `patched Dexcom G6 app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_: Make sure you are using the correct version from the `2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.

Cambios no confirmados
==================================================
Si se obtiene un mensaje de error como este

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Falla cambios no confirmados

Opción 1-Comprobar instalación de git
--------------------------------------------------
* git es posible que no esté instalado correctamente (debe estar disponible globalmente)
* cuando se instaló en Windows y git, debería reiniciar el ordenador o, al menos, cerrar la sesión y volver a iniciar la sesión una vez, para que git globalmente disponible después de la instalación
* `Verificación de instalación de git <../Instalar-AndroidAPS/git-instalar.html#check-git-configuración-en-android-studio>`_
* Si no se muestra ninguna versión de git en la comprobación, pero git está instalado en el sistema, asegúrese de que Android Studio sepa dónde se encuentra `git <../Installing-AndroidAPS/git-install.html#set-git-path-in-android-studio>`_ en el sistema.

Opción 2 - Volver a cargar código fuente
--------------------------------------------------
* En Android Studio, seleccione VCS-> GIT -> Restablecer HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reiniciar HEAD
   
Opción 3 - Comprobar actualizaciones
--------------------------------------------------
* Copiar 'git checkout --' en el portapapeles (sin signos de comillas)
* Conmutar a Terminal en Android Studio (lado izquierdo inferior de la ventana de Android Studio)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
    :alt: Android Studio Terminal

* Pegar texto copiado y pulsar retorno

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: GIT checkout satisfactorio

Aplicación no instalada
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: aplicación de teléfono nota instalada

* Asegúrate de haber transferido el archivo "app-full-release.apk" a tu teléfono.
* Si se muestra "App not installed" en el teléfono, siga estos pasos:
  
1. `Export settings <../Usage/ExportImportSettings.html>`__ (in AAPS version already installed on your phone)
2. Desinstale AAPS en su teléfono.
3. Habilite el modo de avión y desactive bluetooth.
4. Instale la nueva versión ("app-full-release.apk ")
5. `Import settings <../Usage/ExportImportSettings.html>`__
6. Volver a activar el bluetooth y desactivar el modo avión

Aplicación instalada pero antigua
==================================================
If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to `update your local copy <../Update-to-new-version.html#update-your-local-copy>`_.

Ninguna de las anteriores funcionó
==================================================
Si ninguno de los consejos anteriores lo ha ayudado podría considerar la creación de la aplicación desde cero:

1. `Export settings <../Usage/ExportImportSettings.html>`__ (in AAPS version already installed on your phone)
2. Have your key password and key store password ready. In case you have forgotten passwords you can try to find them in project files as described `here <https://youtu.be/nS3wxnLgZOo>`__. O simplemente utiliza un almacén de claves nuevo. 
3. Build app from scratch as described `here <../Installing-AndroidAPS/Building-APK.html#download-androidaps-code>`__.
4. Cuando hayas creado el APK exitosamente borra la app existente de su teléfono, transfiere la nueva apk al teléfono e instálela.
5. `Import settings <../Usage/ExportImportSettings.html>`__

El peor escenario
==================================================
En caso de que incluso la creación de la aplicación desde cero no soluciona el problema, es posible que desee desinstalar el Android Studio completamente. Algunos usuarios informaron de que esto resolvió su problema.

**Asegúrese de desinstalar todos los archivos asociados con Android Studio.** Si no elimina completamente Android Studio con todos los archivos ocultos, la desinstalación puede causar nuevos problemas en lugar de resolver uno (s) existente (s). Los manuales para la desinstalación completa se pueden encontrar en línea, por ejemplo,. `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Instale Android Studio desde cero, tal como se describe en 'aqui <../Installing-AndroidAPS/Building-APK.html#install-android-studio>`_ y **no actualizar gradle**.
