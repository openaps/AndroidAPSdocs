Dexcom G5
**************************************************
Dacă utilizaţi G5 cu xDrip+
==================================================
* Dacă nu ați făcut-o deja, descărcați `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ și urmăriți instrucțiunile pe Nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* În xDrip mergeți la Setări > Setări intre aplicații > Transmitere la nivel local și selectați ON.
* În xDrip mergeți la Setări > Setări intre aplicații > Acceptați Tratamente și selectați OFF.
* Dacă doriți să aveți posibilitatea de a utiliza AndroidAPS pentru calibrări mergeți în xDrip la Setări > Setări intre aplicații > Acceptă Calibrări și selectați ON.  S-ar putea să doriți de asemenea să revizuiți opțiunile din Setări > Setări mai puțin obișnuite > Calibrare avansată.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_ .

Dacă folosiți G5 cu aplicația Dexcom modificată
==================================================
* Descărcați apk-ul de la adresa `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, și alegeți versiunea corectă pentru dvs (versiunea în mg/dl sau mmol/l, G5).

  * Folder 2.3 este pentru utilizatorii de AndroidAPS 2.3, folder 2.4 pentru utilizatorii de AAPS 2.5.
  * Deschideți https://play.google.com/store/search?q=dexcom%20g5 pe calculator. Regiunea va fi vizibilă în URL.

  .. image:: ../images/DexcomG5regionURL.PNG
    :alt: Regiune în URL-ul Dexcom G5

* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Porniți senzorul
* Selectați aplicația Dexcom (modificată) în ConfigBuilder (setare în AndroidAPS).
* Dacă doriţi să utilizaţi alarmele xDrip+ prin transmitere locală: în meniul hamburger al xDrip+ > setări > sursă de date hardware > 640G/EverSense.
