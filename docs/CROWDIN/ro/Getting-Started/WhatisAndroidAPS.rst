Ce este un sistem de buclă închisă cu AndroidAPS?
**************************************************

AndroidAPS este o aplicație care acționează ca un sistem de pancreas artificial (APS) pe un smartphone Android. Ce este un sistem de pancreas artificial? Este un program software care are ca scop să facă ce face un pancreas: să tina în mod automat valorile glicemiei în limite sănătoase. 

Un APS nu poate face treaba la fel de bine ca un pancreas biologic dar poate face ca diabetul de tip 1 să fie mai uşor de gestionat folosind dispozitive disponibile pe piaţă şi programe software uşor de utilizat şi sigure. Dispozitivele includ un sistem de monitorizare continua a glicemiei (CGM) care informeaza AndroidAPS despre valorile glicemiei şi o pompă de insulină controlata de AndroidAPS pentru a elibera doze adecvate de insulină. Aplicaţia comunică cu aceste dispozitive prin bluetooth. Aceasta calculează doze folosind un algoritm, sau set de reguli, dezvoltat pentru un alt sistem de pancreas artificial, OpenAPS, cu mii de utilizatori și milioane de ore de funcționare. 

Atenție: AndroidAPS nu este reglementat de vreo autoritate medicală din nicio țară. Utilizand AndroidAPS efectuezi, în principal, un experiment medical asupra propriei persoane. Setarea sistemului necesită determinare şi cunoştinţe tehnice. Dacă nu ai cunoștințele tehnice la început, până ajungi la sfârșit vei avea. Toate informațiile de care ai nevoie pot fi găsite în aceste documente, în altă parte online sau le poti afla de la alții care au făcut deja AAPS- poti întreba în grupuri Facebook sau alte forumuri. Multe persoane au construit cu succes AndroidAPS și îl folosesc acum în deplină siguranță, dar este esențial ca fiecare utilizator:

* Să construiasca el înșuși propriul sistem, astfel încât să înțeleagă cum funcționează
* Să isi ajusteze algoritmul de dozare individual / cu diabetologul, astfel încât sa lucreze aproape perfect
* Să mențina și monitorizeze sistemul pentru a se asigura că funcționează corect

.. note:: 
	* * Declarație de declinare a responsabilității* *

	* All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.

	* Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.

	* All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

	Rețineți - acest proiect nu este asociat cu și nu este susținut de: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <https://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <https://www.accu-chek.com/>`_, `Insulet <https://www.insulet.com/>`_ or `Medtronic <https://www.medtronic.com/>`_.
	
Dacă ești pregătit pentru provocare, citește mai departe. 

AndroidAPS Obiective principale
==================================================

* O aplicaţie cu siguranţă încorporată. Pentru a citi despre caracteristicile de siguranță ale algoritmilor, cunoscute ca oref0 și oref1, click aici (https: //openaps.org/reference-design/)
* O aplicație completa pentru gestionarea diabetului de tip 1 cu pancreas artificial și Nightscout
* O aplicație la care utilizatorii pot adăuga sau elimina cu ușurință module dacă este necesar
* O aplicație cu diferite versiuni pentru locații și limbi specifice.
* O aplicație care poate fi utilizată în modul buclă deschisă și închisă
* O aplicație complet transparentă: utilizatorii pot introduce parametri, vedea rezultatele și pot lua decizia finală
* O aplicație care nu depinde de o pompa anume, conține o "pompă virtuală" pentru ca utilizatorii să poată experimenta în siguranță înainte de a o utiliza pe ei înșiși 
* O aplicație strâns integrată cu Nightscout
* O aplicație în care utilizatorul controlează siguranța 

Cum să începi
==================================================
Desigur, tot acest conținut este foarte important, dar poate fi la început destul de confuz.
O bună orientare este dată de `Vizualizarea modulului <../module/module.html>`_ și `Obiective <../Usage/Objectives.html>`_. De asemenea, poți arunca o privire asupra "Exemplului de configurare Dana, Dexcom şi Sony Smartwatch <../Getting-Started/Sample-Setup.html>"_.
 
