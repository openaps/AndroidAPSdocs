Instala Git
**************************************************
Windows
==================================================
1. Descargar git
--------------------------------------------------
* ** Usted tiene que estar en línea todo el tiempo ya que Android Studio descarga varias actualizaciones! **
* Cualquier versión de git sirve. Por ejemplo, `https://git-scm.com/download/win <https://git-scm.com/download/win>`_.
* Asegúrese de tomar nota de la ruta de acceso de instalación. Lo necesitará en el siguiente paso.

.. imagen:: ../images/Update_GitPath.png
  :alt: Ruta de acceso de instalación de Git

2. Establecer ruta de acceso de git en Android Studio
--------------------------------------------------
* Deja que Studio sepa dónde se encuentra git.exe: Archivo - Ajustes 

  .. imagen:: ../images/Update_GitSettings1.png
    :alt: Android Studio - abrir la configuración

* En la ventana siguiente: Versión Control - Git

* Elegir la ruta correcta: ... **/Git/bin** (incluyendo /bin)

* Asegúrese de que el método de actualización "Combinar" (Merge) está seleccionado.

  .. imagen:: ../images/Update_GitSettings2a.png
    :alt: Android Studio - Ruta de GIT
   
3. Reinicio
--------------------------------------------------
* Rearranque el PC para actualizar el entorno del sistema.

4. Comprobar configuración de git en Android Studio
--------------------------------------------------
* Abrir ventana de terminal en Android Studio
* Introduzca "git --version" (sin las comillas!) y presione la tecla de Retorno

  .. imagen:: ../images/AndroidStudio_gitversión1.png
    :alt: git --version

* Si git está instalado y conectado correctamente, recibirá una información sobre la versión instalada que se muestra de la siguiente manera:

  .. imagen:: ../images/AndroidStudio_gitversión2.png
    :alt: resultado git-version

Mac
==================================================
* Cualquier versión de git sirve. Por ejemplo, `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Utilice el homebrew para instalar git: ```$ brew install git```.
* Para obtener detalles sobre la instalación de git, consulte la `documentación oficial del git <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Si instala git a través de un homebrew, no es necesario cambiar ninguna preferencia. Solo por caso: se puedan encontrar aquí: Android Studio - Preferencias.
