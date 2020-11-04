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

Šifruotas kopijos formatas
==================================================
Nustatymų atsarginės kopijos užšifruotos pagrindiniu slaptažodžiu, kuris gali būti nustatytas `Nustatymai <../Configuration/Preferences.html#master-password>`_ .


Eksportuoti nustatymus
==================================================
* Paspauskite trijų linijų meniu (viršutiniame kairiajame kampe)
* Servisas
* Eksportuoti nustatymus

.. image:: ../images/AAPS_ExportSettings1.png
  :alt: AndroidAPS eksportavimo nustatymai 1

* Eksporto data ir laikas bus pridėta prie failo pavadinimo automatiškai ir rodomas kartu su keliu.
* Spustelėkite "OK'.
* Įveskite `pagrindinį slaptažodį <../Configuration/Preferences.html#master-password>`_ ir spauskite "OK".
* Ekrano apačioje bus pranešta apie sėkmingą eksportavimą.

.. image:: ../images/AAPS_ExportSettings2.png
  :alt: AndroidAPS eksportavimo nustatymai 2
  
Importuokite nustatymus
==================================================
* Paspauskite trijų linijų meniu (viršutiniame kairiajame kampe)
* Servisas
* Importuokite nustatymus

.. image:: ../images/AAPS_ImportSettings1.png
  :alt: AndroidAPS importavimo nustatymai 1

* Visi failai iš aplanko AAPS/preferencece/ jūsų telefone bus rodomi sąraše.
* Pasirinkite failą.
* Patvirtinkite importavimą paspausdami 'OK'.
* Įveskite `pagrindinį slaptažodį <../Configuration/Preferences.html#master-password>`_ ir spauskite "OK".

.. image:: ../images/AAPS_ImportSettings2.png
  :alt: AndroidAPS importavimo nustatymai 2

* Bus parodyta išsami informacija apie parametrų failą.
* Paskutinė galimybė atšaukti importą.
* Spustelėkite "Importuoti".
* Patvirtinkite žinutę paspausdami 'OK'.
* AAPS bus perkrauta iš naujo, kad būtų aktyvuoti importuoti parametrai.

Pastaba Dana RS vartotojams
------------------------------------------------------------
* Kadangi pompos susiejimo nustatymai persikelia į naują telefoną kartu su kitais, Jūsų naujas telefonas jau "pažįsta" pompą, todėl nepradės BT paieškos. 
* Rankiniu būdu Bluetooth ryšiu suporuokite išmanųjį telefoną ir pompą.

Importo nustatymai iš ankstesnių versijų (prieš AAPS 2.7)
------------------------------------------------------------
* Senasis nustatymų failas (vadinamas 'AndroidAPSPreferences' - be failo plėtinio) turi būti išmaniojo telefono pagrindiniame aplanke (/storage/emulated/0).
* Neperkelkite senojo failo į tą patį aplanką kaip ir nauji eksportuoti nustatymai (AAPS/preferences).
* Importavimo dialogo lange sąrašo apačioje rasite seną failą.

Nustatymų failo perkėlimas
==================================================
* Geriausias būdas perkelti nustatymų failą į naują telefoną yra per USB kabelį arba debesijos paslaugą (pvz., Google Drive).
* Instrukcijas galima rasti internete, pvz., `Android pagalbos puslapiai <https://support.google.com/android/answer/9064445?hl=en>`_.
* Jei patiriate problemų su perkeliamu failu, pabandykite kitą būdą perkelti failą.
