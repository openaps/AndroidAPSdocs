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
* Open File > Settings 

  .. imagen:: ../images/Update_GitSettings1.png
    :alt: Android Studio - abrir la configuración

* Click the small triangle next to Version Control (1.) to open the sub-menu.
* Click Git (2.).
* Make sure update method "Merge" (3.) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4.)

  .. image:: ../images/AndroidStudio361_09.png
    :alt: Android Studio settings

* If automatic setting is successful git version will be displayed.
* Click "OK" in the dialog box (1.) and "OK" in the settings window (2.).

  .. image:: ../images/AndroidStudio361_10.png
    :alt: Automatic git installation succeeded

* In case file git.exe cannot be found click "OK" in the dialog box (1.) and then the button with the three dots (2.).
* Use `search function <https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html>`_ in windows explorer to find "git.exe" if you are unsure where it can be found. Está buscando git.exe ubicado en la carpeta \bin\.
* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3.) and click "OK" (4.).
* Close settings window by clicking "OK" button (5.).

  .. image:: ../images/AndroidStudio361_11.png
    :alt: Automatic git installation failed
 
3. Reinicio
--------------------------------------------------
* Rearranque el PC para actualizar el entorno del sistema.

4. Comprobar configuración de git en Android Studio
--------------------------------------------------
* Abrir ventana de terminal en Android Studio
* Enter "`git - -version`" (without quotation marks and no spaces between the two - [minus sign]!) and press Return

  .. imagen:: ../images/AndroidStudio_gitversión1.png
    :alt: git - -version

* Si git está instalado y conectado correctamente, recibirá una información sobre la versión instalada que se muestra de la siguiente manera:

  .. imagen:: ../images/AndroidStudio_gitversión2.png
    :alt: resultado git-version

Mac
==================================================
* Cualquier versión de git sirve. Por ejemplo, `https://git-scm.com/download/mac <https://git-scm.com/download/mac>`_
* Utilice el homebrew para instalar git: ```$ brew install git```.
* Para obtener detalles sobre la instalación de git, consulte la `documentación oficial del git <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>`_.
* Si instala git a través de un homebrew, no es necesario cambiar ninguna preferencia. Solo por caso: se puedan encontrar aquí: Android Studio - Preferencias.
