Exportar e importar ajustes
**************************************************

¿Cuándo debo exportar los valores?
==================================================
Esté preparado para lo imprevisto. Es posible que cambie los valores importantes por accidente y que tenga problemas para deshacer los cambios. Tu teléfono podría romperse o ser robado. Para volver fácilmente al estado en el que ha estado, los valores deben exportarse de forma regular.

La mejor práctica es la exportación después del cambio de valores o la finalización de un objetivo. 

Los valores exportados deben copiarse en un almacenamiento en la nube o en su computadora. Así usted está preparado ante la pérdida o daño de su AAPS teléfono y no tiene que empezar desde cero.

En un sistema Windows 10, se ve así:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS Preferencias del teléfono conectado a una computadora

Información exportada
==================================================
Among others the following information is part of the settings export:

* `Automation <../Usage/Automation.html>`_ events
* `Config builder <../Configuration/Config-Builder.html>`_ settings
* `Local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ settings
* `Objectives <../Usage/Objectives.html>`_ status incl. `exam results <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. `NS Client settings <../Configuration/Preferences.html#ns-client>`_

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Exportar ajustes
==================================================
* Menú Hamburguesa (esquina superior izquierda de la pantalla)
* Mantenimiento
* Exportar ajustes

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Importar ajustes
==================================================
* Menú Hamburguesa (esquina superior izquierda de la pantalla)
* Mantenimiento
* Importar ajustes

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS import settings 1

* All files from folder AAPS/preferences/ on your phone will be shown in the list.
* Select file.
* Confirm import by clicking 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS import settings 2

* Details on the preference file will be shown.
* Last option to cancel import.
* Click 'Import'.
* Confirm message by clicking 'OK'.
* AAPS will be restarted in order to activate imported preferences.

Note for Dana RS users
------------------------------------------------------------
* La configuración de conexión de la bomba y también se importa AAPS en su nuevo teléfono con esto ya "conoce" la bomba y por lo tanto no es necesario iniciar un escaneo bluetooth. 
* Por favor, empareja el nuevo teléfono y la bomba manualmente.

Import settings from previous versions (before AAPS 2.7)
------------------------------------------------------------
* The "old" settings file (called 'AndroidAPSPreferences' - without file extension) must be in root folder of your smartphone (/storage/emulated/0).
* Do not put the "old" file in the same folder as the new exported settings (AAPS/preferences).
* You will find the "old" file on the bottom of the list in the import dialogue.

Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
