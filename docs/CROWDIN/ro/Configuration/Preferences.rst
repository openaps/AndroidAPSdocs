Preferințe
***********************************************************
* **Deschideți preferințele** făcând clic pe meniul cu cele trei puncte din dreapta sus a ecranului principal.

  .. image:: ../images/Pref2020_Open2.png
    :alt: Deschideți preferințele

Poti ajunge direct la o anumită filă din preferinte (de ex. fila pompei) deschizând această filă și dând click pe conectare.

  .. image:: ../images/Pref2020_OpenPlugin2.png
    :alt: Deschideți preferințele

* **Sub-meniuri** făcând clic pe triunghiul de sub titlul sub-meniu.

  .. image:: ../images/Pref2020_Submenu2.png
    :alt: Deschidere submeniu

* Cu **filtrul** din partea de sus a ecranului de preferinţe, puteţi accesa rapid anumite preferinţe. Doar începeţi să tastaţi o parte din textul pe care îl căutaţi.

  .. image:: ../images/Pref2021_Filter.png
    :alt: Filtru Preferințe

.. contents:: 
   :backlinks: entry
   :depth: 2

General
===========================================================

**Unități**

* Setati unităţile in mmol/l sau mg/dl în funcţie de preferinţe.

**Limba**

* Opțiune nouă de utilizare a limbii implicite a telefonului (recomandat). 
* În cazul în care doresti AAPS în altă limbă decât cea setata pe telefon poti alege dintre varietatele din lista.
* Dacă setezi entru aplicatie o alta limba decat cea a telefonului, este posibil ca uneori să vezi o combinatie a limbilor. Acest lucru se datorează unei probleme legate de Android, uneori nefuncționand suprascrierea limbajul Android implicit.

  .. image:: ../images/Pref2020_General.png
    :alt: Preferințe > General

**Numele pacientului**

* Poate fi utilizat dacă trebuie facută diferența între mai multe configurări (de ex. doi copii T1D din familia ta).

Protecţie
-----------------------------------------------------------
Parola principală
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Necessary to be able to `export settings <../Usage/ExportImportSettings.html>`_ as they are encrypted as of version 2.7.
  **Protecția biometrică nu funcționează pe telefoanele OnePlus. Aceasta este o problemă a celor de la OnePlus. * *

* Open Preferences (three-dot-menu on top right of home screen)
* Click triangle below "General"
* Click "Master-Password"
* Enter password, confirm password and click ok.

  .. image:: ../images/MasterPW.png
    :alt: Set master password
  
Protecţie setări
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protejeaza setările cu parolă sau cu autentificarea biometrică a telefonului (ex. ` copilul foloseşte AAPS <../Children/Children.html>` _).
* Parola personalizată ar trebui utilizată dacă vrei să utilizezi parola principală doar pentru securizarea ʻsetărilor exportate <../ Utilizare / ExportImportSettings.html> `_.
* Dacă folosesti o parolă personalizată, fa clic pe linia "Setări parolă" pentru a seta parola cum este descris `mai sus <../Configurare/Preferences.html#master-password>`__.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Protecţie

Protecția aplicației
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Dacă aplicația este protejată, ca sa deschizi AAPS trebuie să introduci parola sau să utilizezi autentificarea biometrică a telefonului.
* Aplicaţia se va opri imediat dacă este introdusă o parolă greşită-dar încă rulează în fundal dacă a fost deschisă anterior cu succes.

Protecţia bolusului
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protecția Bolusui poate fi utilă dacă AAPS este folosit de un copil mic și apartinatorul `boluseaza prin SMS <../Children/SMS-Commands.html>`_.
* In exemplul de mai jos se vede promptul pentru protectia biometrica. Dacă autentificarea biometrică nu funcționează, fa clic în spațiul de deasupra promptului și introdu parola principală.

  .. image:: ../images/Pref2020_PW.png
    :alt: Solicită protecție biometrică

Imagine fundal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Puteţi alege din patru tipuri de fundaluri:

  .. image:: ../images/Pref2021_SkinWExample.png
    :alt: Selecție fundal + exemple

* "Fundal pentru rezoluție scăzută" are o etichetă mai scurtă și câmpurile vechime/nivel sunt eliminate pentru a avea mai mult spațiu disponibil pe ecrane cu rezoluție scăzută.
* Diferență între fundaluri în funcție de orientarea afișării telefonului.

Orientare tip portret
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* ** Fundalul Original* * și ** Butoanele afișate întotdeauna in partea de jos a ecranului * * sunt identice
* **Afișare mare** are o dimensiune mai mare a graficelor față de afisajul altor fundaluri

Orientare tip peisaj
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* Folosind ** Fundal Original * * și ** Afișare Mare* * trebuie să derulezi în jos ca sa vezi butoanele din partea de jos a ecranului
* **Afișare mare** are o dimensiune mai mare a graficelor față de afisajul altor fundaluri

  .. image:: ../images/Screenshots_Skins.png
    :alt: Fundaluri în functie de orientarea de afișare a telefonului

Privire de ansamblu
===========================================================

* În secțiunea de prezentare generală poti defini preferințele pentru ecranul principal.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Preferences > Overview

Menține ecranul deschis
-----------------------------------------------------------
* Util în timpul unei prezentări. 
* Va consuma multă energie, este bine să ai telefonul conectat la un încărcător.

Butoane
-----------------------------------------------------------
* Defineste ce butoane sa fie vizibile în partea de jos a ecranului priincipal.
* Pentru introducere usoara poti defini cu cele trei butoane valori pentru dialogul carbohidraţi-insulină.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Preferinte > Butoane

Asistent Rapid
-----------------------------------------------------------
* Dacă obisnuiesti sa iei frecvent o anumita gustare sau mâncare, poți folosi butonul de asistent rapid pentru a introduce cu ușurință cantitatea de carbohidrați și a seta bazele de calcul.
* În configurare definesti în ce perioadă de timp butonul va fi vizibil pe ecranul principal - doar cate un buton o data.
* Cand faci clic pe butonul Asistent Rapid, AAPS calculeaza și propune un bolus pentru acei carbohidrați pe baza raportului curent (luând în considerare si valoarea glicemiei sau insulina din corp, dacă este configurat). 
* Propunerea trebuie confirmată înainte ca insulina să fie livrată.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Preferinte > Buton Asistent Rapid
  
Ţinte temp implicite
-----------------------------------------------------------
* `Țintele temporare (TT) <../Usage/temptarget.html#țintele temp->`_ Permit să definesti schimbarea țintei glicemice pentru o anumită perioadă de timp.
* Cu setarea TT (Tinta Temporara) implicită, poti schimba ușor ținta glicemica pentru activitate fizica, masă în curând etc.
* Apasa lung pe TT din colțul din dreapta sus de pe ecranul principal sau foloseste scurtăturile din butonul portocaliu "Carbs" din partea de jos.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Preferinte > TT implicite
  
Umplere/Amorsare - cantități standard de insulină
-----------------------------------------------------------
* Dacă doriţi să umpleţi tub sau să amorsați canula prin AAPS puteţi face acest lucru prin `pagina acțiuni <../Getting-Started/Screenshots.html#action-tab>`_.
* În acest dialog pot fi definite valori prestabilite.

Intervalul de vizualizare
-----------------------------------------------------------
* Defineste interval țintă cu fundal verde in graficul de pe ecranul principal.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Preferințe > Interval de vizualizare

Scurtează titlurile secțiunilor
-----------------------------------------------------------
* Vezi pe ecran mai multe titluri de file. 
* De exemplu, fila "OpenAPS AMA" devine "OAPS", "OBIECTIVE" devine "OBJ" etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Preferinţe > File

Arată zona pentru note în dialogurile de tratamente
-----------------------------------------------------------
* Oferă posibilitatea sa adaugi texte scurte la tratament (notite pentru ajutor la bolusare, carbohidrati, insulină...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Preferințe > notite în dialogurile de tratament
  
Lumini de stare
-----------------------------------------------------------
* Status lights give a visual warning for 

  * Vechime senzor
  * Sensor battery level for certain smart readers (see `screenshots page <../Getting-Started/Screenshots.html#sensor-level-battery>`_ for details).
  * Insulin age (days reservoir is used)
  * Reservoir level (units)
  * Vechime canulă
  * Vechime baterie pompă
  * Nivel baterie pompă (%)

* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* În versiunile anterioare AAPS 2.7 setările pentru luminile de stare trebuie făcute în setările Nightscout.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Preferinte > Lumini de stare

Setări avansate (Privire generală)
-----------------------------------------------------------

.. image:: ../images/Pref2021_OV_Adv.png
  :alt: Preferinte > Lumini de stare

Livreaza doar aceasta partea din cantitatea calculata de asistent
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Setare generală pentru a livra partial valoarea calculata de asistentul de bolus. 
* Atunca când se utilizează asistentul pentru bolus, se livreaza, din bolusul calculat, numai procentajul prestabilit (între 10 și 100). 
* Procentul este afișat în asistentul de bolus.

Consilier bolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If you run `Bolus wizard <../Getting-Started/Screenshots.html#bolus-wizard>`__ and your glucose value is above 10 mmol (180 mg/dl) a correction bolus will be offered.
* Daca se fac bolusuri de corecție, nu se adaugă si **carbohidrați**.
* Va porni o alarmă atunci când valoarea glicemiei este la un nivel bun pentru a începe masa.
* You have to enter `Bolus wizard <../Getting-Started/Screenshots.html#bolus-wizard>`__ again and enter the amount of carbs you want to eat.

  .. image:: ../images/Home2021_BolusWizard_CorrectionOffer.png
    :alt: mesaj consilier bolus

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Activarea superbolusului în asistentul de bolus.
* "Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>" _ este conceptul de a "împrumuta" insulină de la rata bazală din următoarele două ore pentru a preveni varfurile.

Siguranța tratamentului
===========================================================
Vârsta pacientului
-----------------------------------------------------------
* Limitele de siguranţă sunt stabilite in baza vârstei selectate în această setare. 
* Dacă ajungi în situația de a atinge limite de siguranță (de ex. valoarea maximă a bolusului), probabil este cazul să incrementezi varsta. 
* Este o idee proastă să selectezi de la început o vârstă mai mare decât vârsta reală, deoarece aceasta poate duce la supradozaje in cazul introducerii accidentale a unei valori greșite de insulină în căsuța de dialog (de exemplu, prin omiterea separatorului de zecimale). 
* Dacă doresti să afli valorile concrete ale limitelor de securitate codificate, deruleaza la opţiunea algoritm pe `această pagină <. /Utilizare/Open-APS-features.html>`_.

Valoarea maximă permisă a bolusului [U]
-----------------------------------------------------------
* Defineşte cantitatea maximă de insulină bolus pentru care AAPS sa permita livrarea imedita. 
* Aceasta constituie o limită de siguranță pentru a preveni livrarea unor bolusuri masive, datorită unor greșeli de introducere sau din eroarea utilizatorului. 
* Este recomandat să stabilesti o cantitate de bun simț, care corespunde în linii mari cu maximul de bolus de insulină pe care l-ai putea face la o masă sau ca și corecție în mod obișnuit. 
* Restricția este, de asemenea, aplicată și rezultatelor date de Calculatorul de Bolus.

Valoarea maximă permisă a carbohidraților [g]
-----------------------------------------------------------
* Definește cantitatea maximă de carbohidrați acceptata pentru dozare de catre calculatorul de bolus AAPS.
* Aceasta constituie o limită de siguranță pentru a preveni livrarea unor bolusuri masive, datorită unor greșeli de introducere sau din eroarea utilizatorului. 
* Se recomandă să stabilesti această setare la o valoare de bun simț, care să corespundă, în linii mari, cantității maxime de carbohidrați pe care ați putea-o ingera la o masă.

Buclă
===========================================================
Mod APS
-----------------------------------------------------------
* Comutare între buclă deschisă și închisă, precum și Suspendare la Hipoglicemie (LGS)
* La **Buclă deschisă** sugestiile de RBT (rata bazala temporara) făcute pe baza datelor tale apar ca notificare. După confirmare, RBT va fi transferată în pompă.. La utilizarea pompei virtuale RBT trebuie introdusa manual.
* La ** Bucla inchisa* * sugestiile de RBT sunt trimise automat la pompă, fără confirmare sau introducere manuala.  
* La ** Suspendare la Hipoglicemie (LGS = low glucose suspend)**  se intrerupe temporar rata bazala (RB).

Cerere de schimbare minimală [%]
-----------------------------------------------------------
* Daca utilizezi sistemul bucla deschisă vei fi notificat de fiecare dată când AAPS recomandă ajustarea ratei bazale. 
* Pentru a reduce numărul de notificări, fie utilizezi un interval larg al glicemiei tinta fie crești procentajul ratei minime.
* Aceasta defineşte modificarea relativa care declanşeaza o notificare.

Asistent avansat la masă (AMA) sau Super Micro bolus (SMB)
===========================================================
Depending on your settings in `config builder <../Configuration/Config-Builder.html>`__ you can choose between two algorithms:

* `Ajutor avansat la mese (OpenAPS AMA) <../Usage/Open-APS-features.html#avansed-meal-assist-ama>`_ - starea algoritmului din 2017
* ` Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>` _-cel mai recent algoritm pentru utilizatorii avansaţi

Setări OpenAPS AMA (Asistent avansat la masa)
-----------------------------------------------------------
OpenAPS Asistent Avansat pentru Masă (AAM) permite sistemului să stabilească mai rapid temporare mari după masă DACĂ ai introdus corect carbohidrații. 
* Mai multe detalii despre setări și Autosens pot fi citite în <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>OpenAPS doc`__.

Valoarea maximă în U/ora (unitati insulina/ora) a unei rate bazale temporare poate fi setată la
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Setarea previne ca AAPS sa ofere vreodata o rata bazala periculos de mare. 
* Această valoare se masoară în unități de insulina per oră (u/o). 
* Se recomandă setarea unei valori de bun simț. O sugestie de calcul a valorii maxime a RBT este **cea mai mare rată bazală (RB)** din profilul tău **înmulțita cu 4**. 
* For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
* Vezi şi " descrierea detaliată a caracteristicii <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>` _.

Maximul de IOB bazal (Insulin on Board) pe care OpenAPS îl va livra OpenAPS [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Cantitatea adițională de insulină bazală (în unități) permis a se acumula în corp, peste cea din profilul bazal. 
* O dată ce această valoare este atinsă, AAPS va opri livrarea de insulină bazală suplimentară până când IOB bazal va reveni în interval din nou. 
* Această valoare **nu ia în considerare bolus IOB**, doar bazala.
* Această valoare este calculată și monitorizată independent de rata bazală obișnuită. Este doar insulină bazală adițională, peste cea care este considerată a fi rata bazală normală.

Când începi sa folosesti bucla, **se recomandă să setezi la 0 maximum pentru IOB bazal** o perioadă de timp, pana ce te obişnuiesti cu sistemul. Aceasta va duce la restricționarea AAPS în a crește valoarea bazalei. În tot acest timp, AAPS va putea să limiteze sau să anuleze livrarea insulinei bazale, cu scopul prevenirii hipoglicemiei. Acesta este un pas important, ce are scopul de a:

* Avea o perioadă de timp de obișnuire, în siguranță, cu felul în care funcționează sistemul AAPS și felul în care trebuie să monitorizați acest sistem.
* Profia de ocazie pentru a perfecționa profilul bazal și factorul de sensibilitate la insulină (ISF). 
* Vedea cum AAPS limitează rata insulinei bazale pentru a preveni hipoglicemia.

Când te vei simți confortabil, poti permite sistemului să înceapă livrarea de insulină bazală peste valoarea stabilită în profil, prin creșterea valorii Maximului IOB Bazal. Recomandarea este să iei **cea mai mare rată bazală** din profil și **să o înmulțesti cu 3**. For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 3 to get a value of 1.5 U/h.

* Puteți începe într-un mod mai prudent șî apoi să creșteți ușor această valoare în timp. 
* Acestea sunt doar recomandări; corpul fiecăruia este diferit și reacționează diferit. Puteți constata că este nevoie de valori mai mari sau mai mici față de ceea ce este scris aici, dar este bine să porniți întotdeauna într-un stil prudent și apoi să ajustați valorile ușor, în timp.

**Notă: ca o măsură de siguranță, IOB Bazal Maxim este limitat din soft la o valoare de 7 unități.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ observă deviațiile glicemiei (pozitivă/negativă/neutră).
* Pe baza acestor deviații va încerca să-și dea seama cât de sensibil/rezistent ești și va ajusta rata bazală și ISF pe baza lor.
* Dacă selectaţi "Autosens ajustaţi ţinta, de asemenea" algoritmul va modifica de asemenea ţinta dumneavoastră de glicemică.

Setări avansate (OpenAPS AMA)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* În mod normal nu trebuie să schimbați setările in acest dialog!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`__ and to understand what you are doing.

Setări OpenAPS SMB
-----------------------------------------------------------
* Spre deosebire de AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ nu utilizează rate bazale temporare pentru a controla nivelul glicemiei, ci în principal micro bolusuri foarte mici.
* Trebuie să fi început `obiectivul 10 <../Usage/Obiectives.html#obiective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ pentru a folosi SMB.
* The first three settings are explained `above <../Configuration/Preferences.html#max-u-h-a-temp-basal-can-be-set-to>`__.
* Detalii despre diferitele opţiuni de activare sunt descrise în secţiunea `OpenAPS Funcţie <../Utilizare/Open-APS-features.html#enable-smb>`_.
* *Cât de des vor fi livrate SMB-uri în minute* este o restricție pentru SMB să fie livrat implicit doar la fiecare 4 minute. Această valoare împiedică sistemul să emită SMB prea des (de exemplu în cazul în care este setată o ţintă temporară). Nu ar trebui să modificaţi această setare decât dacă ştiţi exact consecinţele. 
* Dacă 'Sensibilitatea ridică ținta' sau 'Ținta inferioară a rezistenței' sunt activate `Autosens <../Usage/Open-APS-features.html#autosens>`_ îți va modifica ținta glicemică în funcție de deviațiile tale ale glicemiei.
* Dacă ţinta este modificată, va fi afişată cu un fundal verde pe ecranul principal.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Țintă modificată de autosens
  
Notificare pentru necesar carbohidrați
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Această caracteristică este disponibilă doar dacă algoritmul SMB este selectat.
* Se va sugera suplimentarea cu carbohidrati atunci când design-ul de referință detectează că este nevoie de carbohidrati.
* În acest caz veţi primi o notificare care poate fi amânată cu 5, 15 sau 30 de minute.
* În plus, carbohidrații necesari vor fi afișați în secțiunea COB de pe ecranul de principal.
* Poate fi definit un prag - cantitatea minimă de carbohidrați necesară pentru a declanșa notificarea. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Afișare pe ecranul principal a carbohidraților necesari
  
Setări avansate (OpenAPS SMB)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* În mod normal nu trebuie să schimbați setările in acest dialog!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`__ and to understand what you are doing.

Setări absorbție
===========================================================

.. image:: ../images/Pref2020_Absorption.png
  :alt: Setări pentru absorbţie

min_5m_carbimpact
-----------------------------------------------------------
* Algoritmul utilizează BGI (impactul glicemiei) pentru a determina când sunt absorbiți carbohidrati. 
* Valoarea este utilizată doar în timpul unor pauze de citiri ale CGM sau când activitatea fizică "epuizează" toată creșterea glicemiei care in caz contrar ar face ca AAPS să altereze COB. 
* În momentele în care absorbția de carbohidrați nu poate fi funcționată dinamic pe baza reacțiilor dvs. glicemice, inserează o alterare implicită a carbohidraților. Practic, este un eşec.
* Pentru a spune mai simplu: Algoritmul "ştie" cum *ar trebui* să se comporte glicemia ta atunci când este afectată de doza actuală de insulină etc. 
* Ori de câte ori există o deviere pozitivă de la comportamentul aşteptat, câțiva carbohidrati sunt absorbiţi/alterați. Schimbare mare=mulți carbohidrați etc. 
* Algoritmul min_5m_carbimpact defineşte impactul implicit al absorbţiei carbohidraților per 5 minute. Pentru mai multe detalii, vedeți `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`__.
* Valoarea standard pentru AMA este 5, pentru SMB este 8.
* Graficul COB de pe ecranul principal indică atunci când este folosit min_5m_impact punând un cerc portocaliu în partea de sus.

  .. imagine:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: grafic COB
  
Timp maxim de absorbţie a mesei
-----------------------------------------------------------
* Dacă mâncați în mod obișnuit mâncăruri grase sau cu proteine multe (high fat or high protein), va trebui să creșteți timpul de absorbție.

Setări avansate-raport autosens
-----------------------------------------------------------
* Definire raport minim şi maxim `autosens <../Usage/Open-APS-features.html#autosens>`_ .
* Valorile standard normale (max. 1.2 şi min. 0.7) nu ar trebui modificate.

Setări pompă
===========================================================
The options here will vary depending on which pump driver you have selected in `Config Builder <../Configuration/Config-Builder.html#pump>`__.  Asociaţi şi setaţi pompa conform instrucţiunilor pompei:

* `Pompă de Insulină DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `Pompă de Insulină DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Pompă Accu Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Pompă Accu Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Pompă Medtronic <../Configuration/MedtronicPump.html>`_

Dacă folosiți AndroidAPS în sistem buclă deschisă, trebuie să aveți selectată Pompa Virtuală în configuratorul sistemului (Config Builder).

Client NS
===========================================================

.. image:: ../images/Pref2020_NSClient.png
  :alt: NSClient

* Setaţi *Nightscout URL* (i.e. https://numeleaplicatiei.herokuapp.com) și *API Secret* (o parolă de 12 caractere completată în variabilele Heroku).
* Aceasta va permite datelor să fie citite și scrise atât de către site-ul Nightscout cât și de AndroidAPS.  
* Verificați temeinic să nu existe greșeli de scriere în aceste setări, în cazul în care nu puteți îndeplini Obiectivul 1.
* ** Asiguraţi-vă că URL-ul este FĂRĂ /api/v1/ la final. * *
* *Log app start to NS* va înregistra o notiță în intrările din Nightscout pentru fiecare pornire a aplicaţiei.  Aplicația nu ar trebui să necesite mai mult de o pornire pe zi, apariția mai multor porniri sugerând existența unei probleme (de ex. optimizarea bateriei nu este dezactivată pentru AAPS). 
* Dacă este activată, modificările din profilului local <../Configuration/Config-Builder.html#local-profile-recomandat>`_ sunt încărcate pe site-ul Nightscout.

Setări conexiune
-----------------------------------------------------------

.. image:: ../images/ConfBuild_ConnectionSettings.png
  :alt: NSClient setări de conexiune
  
* Restricționați încărcarea Nightscout doar prin Wi-Fi sau doar prin anumite rețele Wi-Fi.
* Dacă doriţi să utilizaţi doar o anumită reţea WiFi, puteţi introduce identificatorul WiFi SSID. 
* SSID-urile multiple pot fi separate prin punct și virgulă. 
* Pentru a şterge toate SSID-urile introduceţi un spaţiu gol în câmp.

Opțiuni alarmare
-----------------------------------------------------------
* Opțiunile de alarmă vă permit să selectați alarmele implicite Nightscout pe care să le utilizați prin intermediul aplicației.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <https://nightscout.github.io/nightscout/setup_variables/#alarms>`_. 
* Vor funcționa numai dacă aveţi o conexiune la Nightscout şi sunt destinate pentru parinți/îngrijitori. 
* Dacă aveți sursa CGM pe telefon (de ex. xDrip+ sau aplicația Dexcom modificată) apoi folosiți acele alarme în loc.

Setări avansate (NSClient)
-----------------------------------------------------------

.. imagine:: ../images/Pref2020_NSClientAdv.png
  :alt: Setări avansate NS Client

* Cele mai multe opţiuni din setări avansate sunt auto-explicative.
* *Activare transmisiuni locale * va partaja datele către alte aplicații de pe telefon, cum ar fi xDrip+. 

  * Aplicația modificată Dexcom nu transmite direct în xDrip+. 
  * Trebuie sa `treci prin AAPS <../Configuration/Config-Builder.html#bg-source>`_ și să activezi transmiterea locală în AAPS pentru a folosi alarme xDrip+.
  
* *Utilizaţi întotdeauna valorile bazale absolute* trebuie să fie activate dacă doriţi să utilizaţi Autotune în mod corespunzător. Vezi `documentația OpenAPS <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ pentru mai multe detalii în Autotune.

Comunicator SMS
===========================================================
* Opţiunile vor fi afişate doar dacă este selectat un comunicator SMS în `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`__.
* Această setare permite controlul de la distanță a aplicației prin instrucțiuni text către telefonul pacientului pe care aplicația îl va urma, cum ar fi suspendarea Loop, sau bolusare.  
* Mai multe informaţii sunt descrise în `Comenzi SMS <../Children/SMS-Commands.html>`_.
* Siguranţa suplimentară este obţinută prin utilizarea unei aplicaţii de autentificare şi a unui cod PIN suplimentar la sfârşitul cheii de acces.

Automatizare
===========================================================
Selectaţi ce serviciu de locaţie va fi folosit:

* Utilizare pasiva a locației: AAPS ia doar locații dacă alte aplicații o solicită
* Folosiţi locaţia de reţea: Locaţia Wi-Fi
* Use GPS location (Attention! May cause excessive battery drain!)

Alerte locale
===========================================================

.. imagine:: ../images/Pref2020_LocalAlerts.png
  :alt: Alerte locale

* Setările ar trebui să fie auto-explicative.

Selecție date
===========================================================

.. imagine:: ../images/Pref2020_DataChoice.png
  :alt: Selecție date

* Puteți ajuta la dezvoltarea în continuare a AAPS prin trimiterea de rapoarte despre defecte către dezvoltatori.

Setări Întreţinere
===========================================================

.. image:: ../images/Pref2020_Maintenance.png
  :alt: Setări Întreţinere

* Destinatarul standard al jurnalelor este logs@androidaps.org.
* Dacă selectați *Criptează setările exportate*, acestea sunt criptate cu `parola principală <../Configuration/Preferences.html#master-password>`_. În acest caz, parola principală trebuie să fie introdusă de fiecare dată când setările sunt exportate sau importate.

Open Humans
===========================================================
* You can help the community by donating your data to research projects! Detaliile sunt descrise pe pagina "Open Humans" <../Configuration/OpenHumans.html>` _.
* În Preferinţe puteţi defini când vor fi încărcate datele

  * numai dacă este conectat la WiFi
  * numai dacă se încarcă
