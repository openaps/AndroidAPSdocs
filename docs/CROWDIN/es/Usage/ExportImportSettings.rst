
Exportar e importar ajustes
**************************************************
¿Cuándo debo exportar los valores?
==================================================
Esté preparado para lo imprevisto. Es posible que cambie los valores importantes por accidente y que tenga problemas para deshacer los cambios. Tu teléfono podría romperse o ser robado. Para volver fácilmente al estado en el que ha estado, los valores deben exportarse de forma regular.

La mejor práctica es la exportación después del cambio de valores o la finalización de un objetivo. 

Los valores exportados deben copiarse en un almacenamiento en la nube o en su computadora. Así usted está preparado ante la pérdida o daño de su AAPS teléfono y no tiene que empezar desde cero.

En un sistema Windows 10, se ve así:
  
  .. imagen:: ../images/SmartphoneRootLevelWin10.png
    :alt: AndroidAPS Preferencias del teléfono conectado a una computadora

Exported information
==================================================
Among others the following information is part of the settings export:

* `Automation <../Usage/Automation.html>`_ events
* `Config builder <../Configuration/Config-Builder.html>`_ settings
* `Local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ settings
* `Objectives <../Usage/Objectives.html>`_ status incl. `exam results <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Preferences <../Configuration/Preferences.html>`_ incl. `NS Client settings <../Configuration/Preferences.html#ns-client>`_




Cómo exportar valores
==================================================
* **Exportar configuración** en tu viejo teléfono

  * Menú Hamburguesa (esquina superior izquierda de la pantalla)
  * Mantenimiento
  * Exportar ajustes
  * La ubicación del archivo se mostrará
    
.. imagen:: ../images/AAPS_ExportSettings.png
  :alt: Valores de exportación de AndroidAPS
       
* **Transferencia** configuración del viejo al nuevo teléfono utilizando la ubicación del archivo se muestra durante la exportación

  El archivo exportado se denomina "AndroidAPSPreferences" y debe estar en su carpeta raíz en el almacenamiento principal del teléfono (tal como C: en su ordenador).
  
* **Instalar AndroidAPS** en el nuevo teléfono.
* **Importar ajustes** en tu nuevo teléfono

  * Menú Hamburguesa (esquina superior izquierda de la pantalla)
  * Mantenimiento
  * Importar ajustes

* **Nota para los usuarios de Dana RS:**

  * La configuración de conexión de la bomba y también se importa AAPS en su nuevo teléfono con esto ya "conoce" la bomba y por lo tanto no es necesario iniciar un escaneo bluetooth. Por favor, empareja el nuevo teléfono y la bomba manualmente.
