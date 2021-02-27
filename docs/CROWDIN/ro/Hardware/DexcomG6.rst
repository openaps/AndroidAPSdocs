Dexcom G6
**************************************************
Elemente de bază
==================================================

* Follow general CGM hygiene and setting sensor recommendation `here <../Hardware/GeneralCGMRecommendation.html>`__.
* Pentru transmiţătorii G6 fabricați după toamna/sfârşitul anului 2018 vă rugăm să vă asiguraţi că utilizaţi `latest nightly built xDrip+ versions <https://github.com/NightscoutFoundation/xDrip/releases>`_. Aceşti transmiţători au o nouă versiune de soft şi ultima versiune stabilă a xDrip+ (2019/01/10) nu poate funcționa cu ei.

Sugestii generale pentru buclă cu G6
==================================================

Ceea ce e clar este că utilizarea G6 este poate un pic mai complexă decât pare la prima vedere. Pentru a fi utilizat în condiţii de siguranţă, există câteva aspecte de care trebuie să fiți conștienți: 

* Dacă utilizaţi datele native cu codul de calibrare în xDrip+ sau Spike, cel mai sigur lucru de făcut este să nu permiți repornirea preventivă a senzorului.
* Dacă trebuie să utilizaţi reporniri preventive, asiguraţi-vă că aţi inserat la o oră din zi în care puteţi observa modificarea şi să calibrați dacă este necesar. 
* Dacă repornesti senzorii, fie faci asta fără calibrarea din fabrica pentru cele mai sigure rezultate în zilele 11 şi 12, fie urmaresti variatiile glicemiei si calibrezi cand este necesar.
* Este posibil ca preinserarea G6 cu calibrarea din fabrică să determine variaţii ale rezultatelor. Dacă faceți preinserare, atunci pentru a obține cele mai bune rezultate, probabil că va trebui să calibrați senzorul.
* Dacă nu poti fi atent la eventuale schimbări ce ar putea aparea, mai bine să revii la modul ne-calibrat și utilizezi sistemul ca un G5.

To learn more about the details and reasons for these recommendations read the `complete article <https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <https://www.diabettech.com>`_.

Dacă utilizaţi G6 cu xDrip+
==================================================
* Transmiţătorul Dexcom G6 poate fi conectat simultan la receptorul Dexcom (sau la pompa t:slim) şi la o aplicaţie de pe telefon.
* Când se utilizează xDrip+ ca receptor, mai întâi dezinstalează aplicaţia Dexcom. ** Nu se poate conecta și xDrip+ si aplicația Dexcom cu transmitatorul in acelasi timp! **
* Dacă ai nevoie de Clarity şi doresti si alarmele xDrip+ poti folosi aplicația modificată Dexcom <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ cu distribuire locală către xDrip+.
* Dacă nu ați făcut-o deja, downloadați xdrip <https://github.com/NightscoutFoundation/xDrip>`_ și urmăriți instrucțiunile pe nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Alege xDrip în ConfigBuilder (setare din AndroidAPS).
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`__
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`__.

Dacă folosiți G6 cu aplicația Dexcom modificată
==================================================
* Descărcați apk-ul de la adresa `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, și apoi alegeți versiunea corectă pentru dumneavoastră (versiunea mg/dl sau mmol/l, G6).

  * Dosarul 2.4 pentru utilizatorii versiunii curente, dosarul 2.3 este doar pentru vechea versiune AndroidAPS 2.3.
  * Deschide https://play.google.com/store/search?q=dexcom%20g6 pe calculatorul tău. 
  * Faceți clic pe link-ul către aplicația Dexcom G6 de pe pagina de rezultate de căutare care este afișată.
  * Regiunea va fi vizibilă în URL.

  .. image:: ../images/DexcomG6regionURL.PNG
    :alt: Regiune in Dexcom G6 URL

* Dezinstalaţi aplicaţia originală Dexcom.
* Install downloaded apk
* Introduceţi codul senzorului şi seria transmiţătorului în aplicația modificată.
* După o scurtă perioadă de timp, aplicația ar trebui să primească semnal de la transmițător. (Dacă nu primește semnal, va trebui să opriți senzorul și să porniți unul nou.)
* Selectați aplicația Dexcom (modificată) în ConfigBuilder (setare în AndroidAPS).
* Dacă doriţi să utilizaţi alarmele xDrip+ prin transmitere locală: în meniul hamburger al xDrip+ > setări > sursă de date hardware > 640G /EverSense.
* Nu există nici o transmitere locală de la aplicația modificată Dexcom direct către xDrip+. Transmisia trebuie să treacă prin AAPS conform descrierii de mai sus.

Dacă utilizaţi G6 cu construită cu Build Your Own Dexcom App
==================================================
* Începând cu luna decembrie 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) suportă transmiterea locală către AAPS și/sau xDrip+ (nu pentru senzorii G5!)
* Această aplicație vă permite să folosiți senzorul Dexcom G6 cu orice telefon Android.
* Dezinstalaţi aplicaţia originală Dexcom sau aplicaţia Dexcom modificată dacă aţi utilizat anterior vreuna dintre ele.
* Install downloaded apk
* Introduceţi codul senzorului şi seria transmiţătorului în aplicația modificată.
* În setările telefonului mergeți la aplicații > Dexcom G6 > permisiuni > permisiuni suplimentare și apăsați pe 'Acces Dexcom'.
* După o scurtă perioadă de timp, aplicația ar trebui să primească semnal de la transmițător. (Dacă nu primește semnal, va trebui să opriți senzorul și să porniți unul nou.)

Setări pentru AndroidAPS
--------------------------------------------------
* Selectați 'Dexcom App (patched)' în config builder.
* Dacă nu primiți nici o valoare selectați orice altă sursă de date, apoi reselectați „Dexcom App (patched)” pentru a declanșa cererea de permisiuni de stabilire a conexiunii dintre AAPS și BYODA.

Setări pentru xDrip+
--------------------------------------------------
* Selectaţi '640G/Eversense' ca sursă de date.
* Comanda 'start senzor' trebuie să fie realizată în xDrip + pentru a se primi valori. Acest lucru nu vă va afecta senzorul actual controlat de Build Your Own Dexcom App.
   
Depanare G6
==================================================
Depanarea specifică Dexcom G6
--------------------------------------------------
* Transmițătorii cu seria incepand cu 80 sau 81 au nevoie de cel putin ultima versiune stabilă de xDrip+ din Mai 2019 sau un nightly build mai nou.
* Transmițătorii cu seria incepand cu 8G au nevoie de un nightly build cel putin din data de 25 iulie 2019 sau mai nou.
* Aplicația xDrip+ și aplicația Dexcom nu pot fi conectate cu transmițătorul, ambele în același timp.
* Aşteptaţi cel puţin 15 min. între oprirea și pornirea unui senzor.
* Nu da înapoi timpul de inserare. Răspundeți la întrebarea „Ați inserat astăzi?” întotdeauna cu „Da, astăzi”.
* Nu activați "repornire senzori" în timp ce setați un senzor nou
* Nu porniți un senzor nou înainte ca următoarele informaţii să fie afişate în Pagina Clasică de Stare -> Stare G5/G6 -> StareServiciuTelefon:

  * Transmitatoare a caror serie începe cu 80 sau 81: "Date primite hh:mm" (de ex. "Am primit date 19:04")
  * Transmitatoare a caror serie începe cu 8G sau 8H: "Glicemie primită hh:mm" (de ex. "Glicemie primită 19:04") sau "Primit acum hh:mm" (i.e. "Primit acum 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ StareServiciuTelefon

Depanarea generală
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

Transmiţător nou cu senzor în funcțiune
--------------------------------------------------
Dacă se întâmplă să schimbaţi transmiţătorul în timpul unei sesiuni de senzor care funcționează, aţi putea încerca să înlăturaţi transmiţătorul fără a deteriora senzorul. Un videoclip poate fi găsit la `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
