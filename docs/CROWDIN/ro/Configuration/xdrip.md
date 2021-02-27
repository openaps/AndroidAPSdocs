# Cofigurare xDrip+

Dacă nu este deja configurat de cand ai descărct [xDrip+](https://jamorham.github.io/#xdrip-plus).

**Această documentaţie este pentru xDrip+ for Android.** Documentatia nu se aplica in cazul utilizarii aplicaţiei "xDrip for iOS".

Pentru transmițătoarele G6 fabricate după sfârșitul anului 2018 (a caror serie incepe cu 80 sau 81) se va folosi versiunea [master](https://jamorham.github.io/#xdrip-plus).

Pentru transmițătoarele a caror serie începe cu 8G, 8H sau 8J se va folosi una din [versiunile mai recente](https://github.com/NightscoutFoundation/xDrip/releases).

În cazul în care telefonul rulează cu Android 10 și ai dificultăți cu Xdrip+ master, încearca [Nightscout 31/12/2019 sau mai recent](https://github.com/NightscoutFoundation/xDrip/releases).

## Setari de baza pentru toate sistemele CGM & FGM

* Asigura-te că selectezi / scri corect baza URL-ul, inclusiv **S** de la finalul http**s**:// (nu http://)
   
   i.e. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   -> Meniu principal (sus in stânga ecranului principal)-> Setări-> Cloud Upload-> Nightscout Sync (REST-API)-> URL de bază

* Dezactiveaza `Preluare automata` Dacă caseta de selectare pentru `Preluare automata` este bifată, activează `Date de Descărcare` o dată, apoi eliminați caseta de selectare pentru `Preluare automată` și dezactivați din nou `Datele de descărcare`. În caz contrar, tratamentele (insulină & carbohidrați) vor fi adăugate de două ori in Nightscout.

* Apasă `Opțiuni suplimentare`

* Dezactiveaza ` Încărcare tratamente ` și ` Completare ulterioara de date `.
   
   **Avertisment: Trebuie dezactivata "Încarcare tratamente" din xDrip+, altfel tratamentele pot fi dublate în AAPS, ducând la fals COB şi IOB.**

* Opțiunea `Alerta eroare conexiune` ar trebui, de asemenea, dezactivată. În caz contrar vei primi o alarmă la fiecare 5 minute în cazul în care rețeaua wifi/mobile este prea incarcata/ nu functioneaza bine sau serverul nu este disponibil.
   
   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* **Setări InterApp-** (Distribuire) Cand folosesti AndroidAPS, deci datele ar trebui sa fie redirecționate către AndroidAPS, este necesar sa activezi Distribuire în xDrip + la setările inter-aplicații.

* Activeaza `Trimite valoarea afişată a glicemiei` ca valorile sa fie egale.

* Dacă ai activat `Acceptare tratamente` şi Distribuire în AndroidAPS, atunci xDrip+ va primi de la AndroidAP informatii privind insulina, carbohidratii si Rb si va estima predicţie la hipoglicemie etc. cu mai multă precizie.
   
   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

### Identificare receptor

* Dacă apar probleme cu transmiterea locală (AAPS nu primește valorile glicemiei din xDrip+) mergi la Setări > Setări Inter-app > Identifica destinatarul și inscrie `info.nightscout.androidaps`.
* Atenție: Auto-corectarea tinde uneori să schimbe litera i în majuscula I. **Trebuie să utilizezi doar litere minuscule** la tastarea `info.nightscut.androids`, i scris I, ca majuscula, ar împiedica AAPS să primească valori ale glicemiei de la xDrip +.
   
   ![xDrip+ identificare receptor prin setări de bază inter-aplicații](../images/xDrip_InterApp_NS.png)

## xDrip+ & Dexcom G6

* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **Transmiţătorul NU POATE FI conectat simultan cu xDrip+ si aplicatia Dexcom**
* Dacă ai nevoie de Clarity şi doresti si alarmele xDrip+ poti folosi [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) cu distribuire locală la xDrip +.

### Versiunea xDrip+ în funcție de seria transmitatorului G6.

* Pentru transmițătoarele G6 fabricate după sfârșitul anului 2018 (a caror serie incepe cu 80 sau 81) foloseste versiunea [master](https://jamorham.github.io/#xdrip-plus). 
* Pentru transmițătoarele a caror serie începe cu 8G, 8H sau 8J foloseste [nightscout din 28 iulie 2019 sau mai recent](https://github.com/NightscoutFoundation/xDrip/releases).

### Setări specifice Dexcom

* Deschide Setările de Depanare G5/G6 -> Meniu principal (stânga sus pe ecranului principal) -> Setări -> G5/G6 Setări de Depanare ![Deschide Setările xDrip+](../images/xDrip_Dexcom_SettingsCall.png)

* Activează următoarele setări
   
   * `Utilizeaza Collector OB1`
   * `Algoritm Original` (important dacă vrei să utilizezi SMB (super micro bolus))
   * `Suport G6`
   * `Permite demontarea legăturilor OB1`
   * `Permite conectarea inițială OB1`
* Toate celelalte opțiuni ar trebui dezactivate
* Regleaza nivelul de avertizare al bateriei la 280 (partea de jos a setărilor de Solutionare erori G5/G6)
   
   ![xDrip+ Setări depanare G5/G6](../images/xDrip_Dexcom_DebugSettings.png)

### Nu se recomandă repornirea preventivă

**La transmiţătorii Dexcom a caror serie. începe cu 8G, 8H sau 8J repornirea preventiva nu funcționează și ar putea chiar sa distruga senzorul!**

Extensia automata a senzorilor Dexcom (` repornire`) nu este recomandata deoarece ar putea duce la "salturi bruste" ale valorii glicemiei in ziua 9 după repornire.

![xDrip+ salt după repornirea preventivă](../images/xDrip_Dexcom_PreemptiveJump.png)

Ceea ce e clar este că utilizarea G6 este poate un pic mai complexă decât pare la prima vedere. Pentru a fi utilizat în condiţii de siguranţă, există câteva aspecte de care trebuie să fiți conștienți:

* If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
* If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. Dacă faceți preinserare, atunci pentru a obține cele mai bune rezultate, probabil că va trebui să calibrați senzorul.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

### Conectează transmițătorul G6 pentru prima dată

**For second and following transmitters see [Extend transmitter life](#extend-transmitter-life) below.**

Pentru transmițătoarele G6 fabricate după sfârșitul anului 2018 (a caror serie incepe cu 80 sau 81) foloseste versiunea [master](https://jamorham.github.io/#xdrip-plus).

Pentru transmițătoarele a caror serie începe cu 8G, 8H sau 8J foloseste [nightscout din 28 iulie 2019 sau mai recent](https://github.com/NightscoutFoundation/xDrip/releases).

* Dezactivează receptorul Dexcom original (dacă este utilizat).
* Pe ecranul principal apasă lung pictograma rosie - picătura de sânge pentru a activa `Asistentul Sursă`.
* Utilizeaza butonul Asistent Sursă care asigură setările implicite, inclusiv OB1 & modul original 
   * Acesta ghidează configurarea inițială.
   * you will need your transmitter serial number if this is the first time you've used it.

* Introdu numărul de serie al noului transmițător (de pe ambalaj sau de pe spatele transmițătorului). Fiți atent să nu confundați `0` (zero) și `O` (litera majusculă O).
   
   ![xDrip+ serie transmiter Dexcom](../images/xDrip_Dexcom_TransmitterSN.png)

* Insert new sensor (only if replacing)

* Pune transmițătorul în senzor
* Dacă apare un mesaj solicitând asociere cu "DexcomXX", unde "XX" sunt ultimele două caractere din numărul de serie al transmiţătorului, acceptă (apasă "împerechere")
* Nu porni un senzor nou înainte ca următoarele informaţii să fie afişate în pagina de stare -> G5/G6 status -> PhoneServiceState:
   
   * Transmitatoare a caror serie începe cu 80 sau 81: "date primite la hh:mm" (de ex. "Date primite la 19:04")
   * Transmitătoare a caror serie începe cu 8G, 8H sau 8J: "Glicemie primita la hh:mm" (de ex. "Glicemie primita la 19:04") sau "Primit acum hh:mm" (de ex. "Am primit acum 19:04")
   
   ![xDrip+ StareServiciiTelefon](../images/xDrip_Dexcom_PhoneServiceState.png)

* Porniți senzorul (numai în caz de înlocuire)
   
   -> In partea de jos a ecranului, după câteva minute, trebuie sa apara textul `Incalzire x, x ore rămase`.

-> Dacă seria transmițătorului nu incepe cu 8G, 8H sau 8J iar dupa cateva minute de la oprire-repornirea senzorului nu se afiseaza textul cu durata ramasa:

* Restart collector (system status - if not replacing sensor}
* Nu reporni receptorul Dexcom original (dacă este utilizat) înainte ca xDrip+ să afișeze primele citiri.
* Pe ecranul principal apasă lung pictograma rosie - picătura de sânge pentru a activa `Asistentul Sursă`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Stare baterie transmiţător

* Starea bateriei poate fi verificata în starea sistemului (meniul principal din ecranul principal, stânga sus)
* Gliseaza stânga o dată pentru a vedea al doilea ecran. ![xDrip+ Primul Transmitător 4](../images/xDrip_Dexcom_Battery.png)

* Nu se cunosc valorile exacte când transmiţătorul „moare” din cauza bateriei goale. Următoarele informații vor fi postate online după ce transmitatorul „moare”:
   
   * Postarea 1: Transmitator Zile vechime: 151/Tensiune A: 297/Tensiune B: 260/Rezistenţa: 2391
   * Postarea 2: Transmitator Zile vechime: 249/Tensiune A: 275 (la momentul intreruperii functionarii)

### Extindere durata de functionare a transmiţătorului

* Până acum durata de functionare nu a putut fi extinsă la transmiţătorii a caror serie începe cu 8G, 8H sau 8J. Acelaşi lucru este valabil şi pentru transmiţătorii cu serial nr. incepe cu 81 si firmware 1.6.5.**27** (vezi xDrip+ System Status-G5/G6 aşa cum se arată [pe acest ecran](../Configuration/xdrip#transmitter-battery-status)).
* Pentru a preveni dificultăţi la pornirea senzorilor, este indicat să extinzi viaţa transmiţătorului înainte de ziua 100 a primei utilizări.
* -> Dacă seria transmițătorului starting with 81 and firmware 1.6.5.**27** beyond day 100 is only possible if [engineering mode](../Usage/Enabling-Engineering-Mode-in-xDrip) is turned on and 'native mode' is deactivated (hamburger menu -> settings -> G5/G6 debug settings -> native algorithm) because a transmitter hard reset is NOT possible.
* Rularea senzorului va fi oprită in timpul in care se extindere viaţa transmiţătorului. Deci, extinde înainte de schimbarea senzorului sau fi constient că va exista o nouă fază de încălzire de 2 ore.
* Oprire manuala a senzorului prin intermediul meniului principal.
* Comutați la modul inginer ``: 
   * atinge uşor pictograma seringii din dreapta ecranului de pornire xDrip+
   * apoi apasă pe pictograma microfonului în colțul din dreapta jos
   * În caseta de text care deschide scrie "activează modul inginerie" 
   * clic pe "Gata"
   * Dacă motorul Google Speak este activat, poți să folosesti comanda vocală: "activează modul inginerie". 
* Mergi la setările de depanare G5 și asigura-te că `Utilizează colectorul OB1` este activat.
* Folosesti comanda vocala: "reseteaza hardul transmiţătorului"
* Comanda vocală va fi executată la următoarea primire de date a transmițătorului
* Uită-te la starea sistemului (meniu principal -> starea sistemului) și vezi ce se întâmplă
* După aprox. 10 min. poți comuta la 'Classic Status Page' (glisare la dreapta) și apasă 'Repornire colector'. Acest lucru va seta la 0 zile varsta senzorului fără a fi nevoie să pornesti un senzor nou.
* Alternativ: Dacă vedeți un mesajul 'Phone Service State: Hard Reset maybe failed" pe al doilea ecran de stare porniți senzorul și acest mesaj ar trebui să dispară.
   
   ![xDrip + Resetarea hard probabil a eşuat](../images/xDrip_HardResetMaybeFailed.png)

* Vechimea transmiţătorilor, dupa extindere si pornirea senzorului, va fi setata la 0 zile.

### Înlocuire transmiţător

Pentru transmițătoarele G6 fabricate după sfârșitul anului 2018 (a caror serie incepe cu 80 sau 81) foloseste versiunea [master](https://jamorham.github.io/#xdrip-plus).

Pentru transmițătoarele a caror serie începe cu 8G, 8H sau 8J foloseste [nightscout din iulie sau mai recent](https://github.com/NightscoutFoundation/xDrip/releases).

* Dezactivează receptorul Dexcom original (dacă este utilizat).
* Oprește senzorul (doar dacă înlocuiește senzorul)
   
   Asigură-te că este oprit:
   
   Pe al doilea ecran "G5/G6 Status" uită-te la `Elemente de coadă` de la jumatate in jos - posibil sa vezi ceva de genul `(1) Stop Senzor`
   
   Așteptați până când se dispare mesajul - de obicei în câteva minute. Starea senzorului trebuie să fie "Oprit" (vezi ecranul).
   
   -> Pentru a elimina transmițătorul fără a opri senzorul, vezi acest video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Scoate dispozitivul de la starea sistemului xDrip+ ȘI DIN setările de bluetooth ale smartphone-ului (va fi afișat ca Dexcom?? unde ?? sunt ultimele două cifre ale numărului de serie al transmiţătorului.)
   
   ![xDrip+ Elimină Dispozitivul](../images/xDrip_Dexcom_ForgetDevice.png)

* Îndepărteaza transmițătorul (și, dacă îl înlocuiesti, si senzorul)

* Pune transmiţătorul vechi departe de a preveni reconectarea. Un cuptor cu microunde este o cusca Faraday perfecta pentru asta - dar deconectează cablul de alimentare electrica pentru a fi sigur ca nimeni nu pornește cuptorul.
* Pe ecranul principal apasă lung pictograma rosie - picătura de sânge pentru a activa `Asistentul Sursă`.
* Utilizeaza butonul Asistent Sursă care asigură setările implicite, inclusiv OB1 & modul original 
   * Acesta ghidează configurarea inițială.
   * Este necesar numărul de serie al transmitatorului la prima folosire a acestuia.
* Pune numărul de serie la noului transmiţător. A nu se confunda 0 (zero) cu O (majuscula o).
* Insert new sensor (only if replacing).
* Pune transmițătorul în senzor - **Nu porni senzorul imediat!**
* Noii "transmițători Firefly" (cu număr de serie care incepe cu 8G, 8H sau 8J) poate fi folosit doar in modul original.
* Următoarele opţiuni nu trebuie activate la noii "transmiţători Firefly" (cu numar de serie care începe cu 8G, 8H sau 8J):
   
   * Repornire (dezactivare!)
   * Repornire senzor (dezactivare!)
   * Revenire la xDrip+ (dezactivare!)
   
   ![Setări pentru transmiţătorii de tip Firefly](../images/xDrip_Dexcom_FireflySettings.png)

* Verifica în Classic Status Page -> G5/G6 status -> PhoneServiceState dacă una din următoarele informaţii este afişată:
   
   * Transmitatoare a caror serie începe cu 80 sau 81: "date primite la hh:mm" (de ex. "Date primite la 19:04")
   * Transmitătoare a caror serie începe cu 8G, 8H sau 8J: "Glicemie primita la hh:mm" (de ex. "glicemie primita la 19:04") sau "Primit acum hh:mm" (de ex. "Am primit acum 19:04")
   
   ![xDrip+ StareServiciiTelefon](../images/xDrip_Dexcom_PhoneServiceState.png)

* Aşteapta 15 minute ca transmiţătorul să comunice de mai multe ori cu xDrip înainte de a fi pornit noul senzor. Datele bateriei vor fi prezentate mai jos de informaţiile despre firmware.
   
   ![Date baterie transmițător Firefly](../images/xDrip_Dexcom_FireflyBattery.png)

* Porneste senzorul, şi NU ANULA DATELE (DO NOT BACKDATE)! Selectează întotdeauna "Da, astăzi"!

* Restart collector (system status - if not replacing sensor)
* Nu reporni receptorul Dexcom original (dacă este utilizat) înainte ca xDrip+ să afișeze primele citiri.
* Pe ecranul principal apasă lung pictograma rosie - picătura de sânge pentru a activa `Asistentul Sursă`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### Senzor nou

* Dezactivează receptorul Dexcom original (dacă este utilizat).
* Oprește senzorul dacă este necesar
   
   Asigură-te că este oprit:
   
   Pe al doilea ecran "G5/G6 Status" uită-te la `Elemente de coadă` de la jumatate in jos - posibil sa vezi ceva de genul `(1) Stop Senzor`
   
   Așteptați până când se dispare mesajul - de obicei în câteva minute.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Curăţa contactele de pe spatele transmiţătorul cu alcool şi lasa să se usuce la aer.

* În cazul în care folosesti această funcție, dezactiveaza `Reporniți Sensorul` și `Repornirile Preemptive` (Meniu principal -> Setări -> G5/G6 Setari Solutionare erori). Dacă omiţi acest pas şi aceste funcţii sunt activate, noul senzor nu va porni corespunzător.
   
   ![xDrip+ Repornire Preventivă](../images/xDrip_Dexcom_Restart.png)

* Pornește senzorul
   
   **Pentru noii transmiţători de la Firefly,** (cu seria incepand cu 8G, 8H sau 8J) **este obligatoriu, iar pentru toti ceilalti transmitatori este recomandat, sa astepti aprox. 15 minute intre oprirea si pornirea noului senzor (pana cand `Sensor Status: Stopped` apare pe al doilea ecran de stare a sistemului). NU ANULA DATELE (DO NOT BACKDATE)</p></li> 
   
   * Potriveste ora
      
      * La utilizarea G6 Modul Original trebuie să aştepţi cele 2 ore de incalzire (adică timpul de inserare este acum).
      * Dacă folosesti algoritmul xDrip+, poti seta ora cu mai mult de 2 ore în urmă ca sa eviti încălzirea. Citirile pot fi foarte neregulate. Prin urmare, nu se recomandă acest lucru.
   * Introdu codul senzorului (de pe folia detaşabilă a senzorului) 
      * Păstreaza codul - il poti folosi ulterior (de ex la o noua pornire după ce transmiţătorul a trebuit înlăturat)
      * Codul poate fi gasit si in [inregistrari xDrip+ ](../Configuration/xdrip#retrieve-sensor-code): Click 3-puncte-meniu din ecranul principal xDrip+ si alege `Vezi Inregistrari Evenimente`.
   * Nu este necesară calibrarea în cazul în care utilizezi G6 în modul original. xDrip+ va afișa citiri automat după 2 ore de încălzire.
   * Nu reporni receptorul Dexcom original (dacă este utilizat) înainte ca xDrip+ să afișeze primele citiri.
      
      ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
      
      ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)</ul> 
   
   ### Recuperează codul senzorului
   
   * În fisierul din data 2019/05/18 și în cel mai recent nightly, codul senzorului este afișat în starea sistemului (meniul Hamburger din stânga sus pe ecranul principal).
   * Gliseaza stânga o dată pentru a vedea al doilea ecran.
      
      ![xDrip+ Recuperare cod2 Senzor Dexcom](../images/xDrip_Dexcom_SensorCode2.png)
   
   * Codul senzorului Dexcom poate fi de asemenea găsit în jurnalele xDrip+.
   
   * Apăsați pe meniul format din 3 puncte (partea dreaptă sus pe ecranul principal)
   * Selectaţi `Vizualizare Jurnale de Evenimente` şi căutaţi "cod"
      
      ![xDrip+ Recuperare Cod Senzor Dexcom](../images/xDrip_Dexcom_SensorCode.png)
   
   ## Depanare Dexcom G5/G6 şi xDrip+
   
   ### Problemă la conectarea transmiţătorului
   
   * Transmitatorul trebuie să fie afișat în setările bluetooth ale telefonului dvs.
   * Transmiţătorul va fi afişat ca Dexcom?? unde ?? reprezintă ultimele două caractere din seria transmiţătorului. (adică DexcomHY).
   * Deschideți starea sistemului în xDrip+ (meniul hamburger din partea stângă sus a ecranului principal).
   * Verificaţi dacă transmiţătorul dumneavoastră este afişat pe prima pagină de stare ('pagina clasică de stare').
   * Dacă nu: Ștergeți dispozitivul din setările bluetooth ale telefonului dvs. și reporniți colectorul.
   * Aşteptaţi aproximativ 5 minute. până când transmițătorul Dexcom se reconectează automat.
   
   ### Problemă la pornirea unui senzor nou
   
   Vă rugăm să reţineţi că este posibil ca următoarea metodă să nu funcţioneze dacă seria transmiţătorului Dexcom G6 începe cu 8G, 8H sau 8J.
   
   * Senzorul nativ este marcat ca "EȘUAT: Pornirea senzorului eșuată"
   * Stop sensor
   * Reporniți telefonul
   * Pornește senzorul cu codul 0000 (patru de zero)
   * Aşteptaţi 15 minute
   * Stop sensor
   * Porniţi senzorul cu codul "real" (tipărit pe hârtia adezivă de protecţie)
   
   Verificați în jurnalele xDrip+ dacă xDrip+ începe să numere "Durată: 1 minut" (și așa mai departe). Doar în jurnalele xDrip+ puteți detecta într-un stadiu incipient dacă xDrip+ a oprit un senzor. Ultima stare nu este întotdeauna afișată corect în partea de jos a ecranului.
   
   ## xDrip+ & Freestyle Libre
   
   ### Setari specifice Libre
   
   * Deschide Setările Bluetooth -> Meniu principal (stânga sus a ecranului principal) -> Setări -> derulare în jos -> Setări mai puțin frecvente -> Setări Bluetooth
      
      ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)
   
   * Activează următoarele setări
      
      * `Activează Bluetooth` 
      * `Folosește scanarea`
      * `Intotdeauna cauta servicii Bluetooth`
   
   * Toate celelalte opțiuni ar trebui dezactivate
      
      ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)
   
   ### Nivel baterie de la transmițătorul Libre
   
   * Nivelul de baterie al unor transmițători precum MiaoMiao 2 poate fi afişat în AAPS.
   * Detaliile pot fi găsite pe pagina [de capturi de ecran](../Getting-Started/Screenshots#sensor-level-battery).
   
   ### Conectează Transmiterul Libre& pornește senzorul
   
   ![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)
   
   ![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)
   
   ![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)