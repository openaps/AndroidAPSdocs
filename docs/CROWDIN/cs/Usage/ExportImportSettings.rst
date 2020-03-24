
Export a import nastavení
**************************************************
Kdy bych měl exportovat nastavení?
==================================================
Buďte připraveni na nepředvídané situace. Náhodou se vám může povést změnit důležité nastavení, a budete mít problémy s návratem zpět. Mobil se může rozbít nebo bude ukraden. Chcete-li se snadno vrátit do stavu před incidentem, měli byste nastavení exportovat pravidelně.

Osvědčeným postupem je exportovat po změně nastavení nebo dokončení cíle. 

Exportovaná nastavení by měla být zkopírována do úložiště v cloudu nebo na váš počítač. Takže tímto jste připraveni na ztrátu nebo poškození telefonu s AAPS a nemusíte začínat od nuly.

Na počítači se systémem Windows 10 to vypadá takto:
  
  .. image:: ../images/SmartphoneRootLevelWin10.png
    :alt: telefon s AndroidAPS připojený k počítači

Exportovaná data
==================================================
Mezi jinými jsou součástí exportu tato nastavení:

* Akce `Automatizace <../Usage/Automation.html>`_
* `Konfigurace <../Configuration/Config-Builder.html>`_
* `Lokální profil <../Configuration/Config-Builder.html#local-profile-recommended>`_
* `Cíle <../Usage/Objectives.html>`_ vč. `odpovědi na testové otázky <../Usage/Objectives.html#objective-3-proof-your-knowledge> ` _
* `Nastavení <../Configuration/Preferences.html>`_ vč. `nastavení NSClienta <../Configuration/Preferences.html#ns-client>`_




Jak exportovat nastavení
==================================================
* **Export nastavení** na starém mobilu

  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Exportovat nastavení
  * Zobrazí se umístění souboru exportu
    
.. image:: ../images/AAPS_ExportSettings.png
  :alt: AndroidAPS export nastavení
       
* **Přeneste** nastavení ze starého telefonu do nového ze stejného umístění souboru, jaké se zobrazilo při exportu

  Exportovaný soubor je pojmenován "AndroidAPSPreference" a měl by být umístěn v kořenové složce v hlavní paměti telefonu (podobně jako C: na vašem počítači).
  
* **Nainstalujte AndroidAPS** na nový telefon.
* **Import nastavení** na novém mobilu

  * Hamburger menu (v levém horním rohu obrazovky)
  * Údržba
  * Importovat nastavení

* **Poznámka pro uživatele Dana RS:**

  * Vzhledem k tomu, že nastavení týkající se připojení pumpy jsou také naimportována, AAPS na vašem novém telefonu již pumpu „zná“, a proto nezahájí skenování bluetooth. Nový telefon a pumpu prosím spárujte ručně.
