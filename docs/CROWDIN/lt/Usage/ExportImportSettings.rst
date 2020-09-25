Eksporto & importo parametrai
**************************************************

Kada turėčiau eksportuoti parametrus?
==================================================
Būkite pasirengę nenumatytiems atvejams. Galite netyčia pakeisti svarbius parametrus ir jums bus sunku anuliuoti pakeitimus. Jūsų išmanusis telefonas gali būti sugadintas arba pavogtas. Kad galėtumėte tiesiog grįžti į nustatymų statusą, kuriame buvote, nustatymus reikia reguliariai eksportuoti.

Rekomenduojama eksportuoti nustatymus atlikus pakeitimus ar įvykdžius tikslą. 

Eksportuoti nustatymai turėtų būti nukopijuoti į saugyklą debesyje arba į jūsų kompiuterį. Tuomet esate pasirengęs tam atvejui, jei prarasite ar sugadinsite savo AAPS išmanųjį telefoną ir nereikės pradėti nuo nulio.

Windows 10 kompiuteryje tai atrodo maždaug taip:
  
.. image:: ../images/AAPS_ExImportSettingsWin.png
  :alt: AndroidAPS nuostatų failas - išmanusis telefonas prijungtas prie kompiuterio

Eksportuojama informacija
==================================================
Be kita ko, eksportuojami šie parametrai:

* `Automatizavimo įvykiai <../Usage/Automation.html>`_
* `Konfigūratoriaus <../Configuration/Config-Builder.html>`_ parametrai
* 'Vietinio profilio <../Configuration/Config-Builder.html#local-profile-recommended>`_ parametrai
* `Tikslų <../Usage/Objectives.html>`_ statusas, įskaitant egzaminų rezultatus <../Usage/Objectives.html#objective-3-proof-your-knowledge>`_
* `Nustatymai <../Configuration/Preferences.html>`_, įskaitant `NS Kliento nustatymus <../Configuration/Preferences.html#ns-client>`_

Encrypted backup format
==================================================
Settings backup is encrypted by a master password that can be set in `Preferences <../Configuration/Preferences.html#master-password>`_ .


Eksportuoti nustatymus
==================================================
* Paspauskite trijų linijų meniu (viršutiniame kairiajame kampe)
* Servisas
* Eksportuoti nustatymus

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS export settings 1

* Date and time of export will be added to the file name automatically and displayed together with the path.
* Click 'OK'.
* Enter `master password <../Configuration/Preferences.html#master-password>`_ and click 'OK'.
* Successful export will be prompted at bottom of the screen.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS export settings 2
  
Importuokite nustatymus
==================================================
* Paspauskite trijų linijų meniu (viršutiniame kairiajame kampe)
* Servisas
* Importuokite nustatymus

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

* **Pastaba Dana RS vartotojams:**

  * Kadangi pompos susiejimo nustatymai persikelia į naują telefoną kartu su kitais, Jūsų naujas telefonas jau "pažįsta" pompą, todėl nepradės BT paieškos. Rankiniu būdu Bluetooth ryšiu suporuokite išmanųjį telefoną ir pompą.
  
Transfer settings file
==================================================
* Best way to transfer settings file to a new phone is via USB cable or cloud service (i.e. Google Drive).
* Manuals can be found on the web, i.e. `Android help pages <https://support.google.com/android/answer/9064445?hl=en>`_.
* If you experience problems with the transferred file try another way to transfer file.
