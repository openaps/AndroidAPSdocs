# Cofigurare xDrip+

Dacă nu a fost configurat deja, atunci descărcați [xDrip+](https://jamorham.github.io/#xdrip-plus).

Dezactivați optimizarea bateriei și permiteți activitate de fundal pentru aplicația xDrip+.

Puteți descărca în siguranță [ultimul APK (stabil)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) cu excepția cazului în care aveți nevoie de caracteristici recente sau folosiți senzori care sunt integrați activ (cum ar fi G7), în cazul acela ar trebui să utilizați cel mai recent [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).

## Setari de baza pentru toate sistemele CGM & FGM

### Dezactivează încărcarea datelor în Nightscout

Începând cu AAPS 3.2, nu ar trebui să lăsați nicio altă aplicație să încarce date (glicemia din sânge și tratamente) în Nightscout.

→ Meniu Hamburger (1) → Setări (2) → Cloud Upload (3) -> Nightscout Sync (REST-API)(4) → Comutați **OFF** `Activat` (5)

![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)

#### Dezactivează calibrarea automată și tratamentele

Dacă utilizați o versiune mai veche de AAPS (înainte de 3.2), asigurați-vă că dezactivați `Calibrarea automată` (7) În cazul în care caseta de selectare pentru `Calibrare automată` este bifată, activați tratamentele `Descărcați` (6) o dată, apoi ștergeți căsuța de selectare pentru `Calibrarea automată` și dezactivați din nou `Descărcați tratamentele`.

![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

Atingeți `Opțiuni suplimentare`(8)

    {admonition} Atenționare siguranță
    :class: atenționare
    Trebuie să dezactivați "Încarcă tratamente" din xDrip+, altminteri tratamentele pot fi înregistrate de 2 ori în AAPS ceea ce va duce la COB și IOB false.

Dezactivați `Încărcați tratamentele`(9) și asigurați-vă că **NU** utilizați `Date de completare retroactivă` (11).

Opțiunea `Alerta privind eșecurile` ar trebui, de asemenea, dezactivată (10). Altfel veți primi o alarmă la fiecare 5 minute în caz de probleme cu rețeaua Wi-Fi/mobile sau în cazul în care serverul nu este disponibil.

![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

### **Setări între aplicații** (Broadcast)

Dacă urmează să utilizați AAPS și datele trebuie transmise către AAPS trebuie să activați difuzarea în xDrip+ în setările între aplicații.

→ Meniu Hamburger (1) → Setări (2) → Setări între aplicații (3) → Transmisiune locală **PORNITĂ** (4)

Pentru ca valorile să fie identice în AAPS în raport cu xDrip+, ar trebui să activați `Trimiteți valoarea de glicemie afișată` (5).

Activează transmisiunea compatibilă (6).

![Setări de bază xDrip+ 4](../images/xDrip_Basic4.png)

Dacă ați activat de asemenea `Acceptați tratamentele` în xDrip+ și `Activați transmisiunile la xDrip+` în plugin-ul AAPS xDrip+, apoi xDrip+ va primi insulină, carbohidrați și informații privind rata bazală din AAPS.

Dacă activați `Acceptați calibrările`, xDrip+ va utiliza calibrările de la AAPS. Fiți atent când utilizați această funcționalitate cu senzorii Dexcom: citiți [acest](https://navid200.github.io/xDrip/docs/Calibrate-G6.html) mai întâi.

Amintiți-vă să dezactivați Importul de sunete pentru a evita declanșarea sunetelor în xDrip+ de fiecare dată când AAPS trimite o schimbare de bazală/profil.

![Setări de bază xDrip+ 5](../images/xDrip_Basic5.png)

(xdrip-identify-receiver)=

#### Identificare receptor

- Dacă sunt probleme cu transmisiunea locală (AAPS nu primește valori glicemice din xDrip+) mergeți la → Hamburger Menu (1) Setări (2) → Setări între aplicații (3) → Identifică receptorul (7) și introduceți `info.nightscout.androidaps` pentru AAPS (dacă folosești PumpControl, vă rugăm să introduceți `info.nightscout.aapspumpcontrol` în schimb!!).
- Atenție: Auto-corectarea tinde uneori să schimbe litera i în majuscula I. **Trebuie să utilizați doar litere mici** când tastați `info.nightscout.androidaps` (sau `info.nightscout.aapspumpcontrol` pentru PumpControl). i scris I, ca majusculă, ar împiedica AAPS să primească valori ale glicemiei de la xDrip+.
    
    ![xDrip+ identificare receptor prin setări de bază inter-aplicații](../images/xDrip_InterApp_NS.png)

## Utilizați AAPS pentru a calibra în xDrip+

- Dacă doriți să aveți posibilitatea de a utiliza AAPS pentru calibrări mergeți în xDrip la Setări > Setări între aplicații > Acceptă Calibrări și selectați ON. 
- S-ar putea să doriți de asemenea să revizuiți opțiunile din Setări → Setări mai puțin obișnuite → Setări avansate de calibrare.

## Dexcom G6

- The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
- When using xDrip+ as receiver uninstall Dexcom app first. **Transmițătorul NU POATE FI conectat simultan cu xDrip+ si aplicatia Dexcom**
- Dacă doriți ca Clarity să beneficieze de funcționalitățile xDrip+, utilizați [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) împreună cu transmisia locală către xDrip+, sau folosiți xDrip+ ca un Companion care primește notificări din aplicația oficială Dexcom.

### Versiunea xDrip+ în funcție de seria transmitatorului G6.

- Toate transmițătoarele G6 fabricate după toamnă/sfârșitul anului 2018 se numesc "Firefly". Nu permit repornirea senzorului fără ca [ transmițătorul să fie scos](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), nu trimit date brute. Este recomandat să utilizați cel mai recent [Nightly Snapshot](https://github.com/NightscoutFoundation/xDrip/releases).
- Transmițătoarele vechi reasamblate cu o nouă baterie și transmițătoarele modificate permit extinderea duratei de viață a senzorilor și repornirea, acestea trimit, de asemenea, date brute. Puteți utiliza [ultimul APK (stabil)](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk).

### Setări specifice Dexcom

- Urmăriți [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/G6-Recommended-Settings.html) pentru a configura xDrip+.

### Nu se recomandă repornirea preventivă

**Doar transmițătoarele Dexcom reasamablate cu baterie nouă sau modificate. [Repornirile preventive](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) nu funcționează cu emițătoarele standard și vor opri complet senzorul [trebuie să scoateți transmițătorul](https://navid200.github.io/xDrip/docs/Remove-transmitter.html) pentru a reporni senzorul.**

Prelungirea automată a senzorilor Dexcom (` repornire`) nu este recomandată deoarece ar putea duce la "salturi" ale valorii glicemiei în ziua 9 după repornire.

![xDrip+ salt după repornirea preventivă](../images/xDrip_Dexcom_PreemptiveJump.png)

Pentru a fi utilizat în condiții de siguranță, există câteva aspecte de care trebuie să fiți conștienți:

- If you are using the native data with the calibration code in xDrip+ or Spike, the safest thing to do is not allow preemptive restarts of the sensor.
- If you must use preemptive restarts, then make sure you insert at a time of day where you can observe the change and calibrate if necessary. 
- If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
- Pre-soaking of the G6 with factory calibration is likely to give variation in results. Dacă faceți preinserare, atunci pentru a obține cele mai bune rezultate, probabil că va trebui să calibrați senzorul.
- If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

Pentru a afla mai multe despre detaliile și motivele acestor recomandări, citiți articolul [complet](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicat de Tim Street la [www.diabettech.com](https://www.diabettech.com).

(xdrip-connect-g6-transmitter-for-the-first-time)=

### Conectează transmițătorul G6 pentru prima dată

**Pentru emițătorii secundari și următori, vedeți [Extindeți viața transmițătorului](#xdrip-extend-transmitter-life) mai jos.**

Urmăriți [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Starting-G6.html).

(xdrip-transmitter-battery-status)=

### Stare baterie transmițător

- Starea bateriei poate fi controlată în starea sistemului  
    → Hamburger Meniu (1) → Stare sistem (2) → Dacă sunteți pe pagina de stare clasică (3) glisați ecranul (4) pentru a ajunge la → G5/G6/G7.

![Starea sistemului xDrip+](../images/xDrip_Dexcom_Battery.png)

- Vedeți [aici](https://navid200.github.io/xDrip/docs/Battery-condition.html) pentru mai multe informații.

(xdrip-extend-transmitter-life)=

### Extindere durata de functionare a transmițătorului

- [Durata de viață](https://navid200.github.io/xDrip/docs/Transmitter-lifetime.html) nu poate fi prelungită pentru transmițători Firefly: doar transmițători reasamblați cu baterie nouă sau modificați.
- Urmați [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Hard-Reset.html) pentru transmițătorii non-Firefly.

(xdrip-replace-transmitter)=

### Înlocuire transmițător

- Dezactivează receptorul Dexcom original (dacă este utilizat).
- [Stop senzor](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html) (doar dacă se înlocuiește senzorul).

- Scoate dispozitivul de la starea sistemului xDrip+ ȘI DIN setările de bluetooth ale smartphone-ului (va fi afișat ca Dexcom?? unde ?? sunt ultimele două cifre ale numărului de serie al transmițătorului.  
    → Hamburger Meniu (1) → Stare Sistem (2) → Dacă nu sunteți pe pagina de stare clasică (3) glisați ecranul (4) pentru a ajunge la ea → apoi atingeți Uită Dispozitivul (5).

![Starea sistemului xDrip+](../images/xDrip_Dexcom_StopSensor.png)

- Îndepărtați transmițătorul (și, dacă îl înlocuiți, și senzorul). Pentru a scoate transmițătorul fără a elimina senzorul vedeți [acest](https://navid200.github.io/xDrip/docs/Remove-transmitter.html), sau acest video <https://youtu.be/AAhBVsc6NZo>.
- Pune transmițătorul vechi departe de a preveni reconectarea. Un cuptor cu microunde este o cușcă Faraday perfectă pentru asta - dar deconectați cablul de alimentare electrică pentru a fi sigur că nimeni nu pornește cuptorul.
- Urmăriți [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Starting-G6.html).
- Nu reporni receptorul Dexcom original (dacă este utilizat) înainte ca xDrip+ să afișeze primele citiri.

### Senzor nou

- Dezactivează receptorul Dexcom original (dacă este utilizat).
- Opriți senzorul urmând [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Dexcom/StartG6Sensor.html).

- Introduceți și apoi porniți un senzor nou urmând [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Starting-G6.html).

(xdrip-retrieve-sensor-code)=

### Recuperează codul senzorului

→ Meniu Hamburger (1) → Stare sistem (2) → Dacă sunteți pe pagina de stare clasică (3) glisați ecranul (4) pentru a atinge → G5/G6/G7 Stare → Cod de calibrare.

![xDrip+ Recuperare cod2 Senzor Dexcom](../images/xDrip_Dexcom_SensorCode2.png)

(xdrip-troubleshooting-dexcom-g5-g6-and-xdrip)=

### Depanare Dexcom G5/G6 și xDrip+

#### Problemă la conectarea transmițătorului

Urmați [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Connectivity-troubleshoot.html).

#### Problemă la pornirea unui senzor nou

Urmați [aceste instrucțiuni](https://navid200.github.io/xDrip/docs/Dexcom/SensorFailedStart.html).

## Libre 1

- Configurați NFC în punte Bluetooth în xDrip+
    
    → Meniu Hamburger (1) → Setări (2) → Setări mai puțin frecvente (3) → Setări Bluetooth (4)

- În setările Bluetooth setați casetele de selectare exact ca în capturile de ecran de mai jos (5)
    
    - Dezactivați mecanismele watchdogs deoarece vor reseta Bluetooth din telefon și vor întrerupe conexiunea cu pompa.
    
    ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

- Puteți încerca să activați următoarele setări (7)
    
    - Folosește scanarea
    - Permiteți autoconectarea
    - Utilizați scanările în fundal

- Dacă pierdeți cu ușurință conexiunea la punte sau întâmpinați dificultăți la recuperarea conexiunii, **DEZACTIVAȚI-LE** (8).
    
    ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

- Lăsați toate celelalte opțiuni dezactivate dacă nu știți de ce doriți să le activați.
    
    ![Setări Bluetooth Libre xDrip+ 3](../images/xDrip_Libre_BTSettings3.png)

### Nivel baterie de la transmițătorul Libre

- Nivelul bateriei punților precum MiaoMiao și Bubble poate fi afișat în AAPS (nu Blucon).
- Detalii pot fi găsite pe pagina [capturi de ecran](#screens-sensor-level-battery).

### Conectează Transmiterul Libre& pornește senzorul

- Dacă senzorul dumneavoastră solicită acest lucru (Libre 2 EU și Libre 1 US) instalați cel mai recent algoritm în afara procesului.

- Senzorul tău trebuie să fie deja pornit folosind aplicația furnizor sau cititorul (xDrip+ nu poate porni sau opri senzorii Libre).

- Setați sursa de date pe Libre Bluetooth.
    
    → Meniu Hamburger (1) → Setări (2) → Selectați Bluetooth Libre în sursa de date hardware (3)
    
    ![xDrip+ Start transmițător Libre & Senzor 1](../images/xDrip_Libre_Transmitter01.png)

- Scanați Bluetooth și conectați puntea.
    
    → Meniu Hamburger (1) → Scanare Bluetooth (2) → Scanare (3)
    
    - Dacă xDrip+ nu poate găsi puntea, asigurați-vă că nu este conectat la aplicația oficială. Puneți-l pe principal și resetați.
    
    ![xDrip+ Start transmițător Libre & Senzor 2](../images/xDrip_Libre_Transmitter02.png)

- Porniți senzorul în xDrip+.
    
        {admonition} Avertisment de siguranță
        :class: avertizare
        Nu utilizați datele senzorului înainte ca încălzirea de o oră să se termine: valorile pot fi extrem de mari și pot cauza decizii greșite în AAPS.
    
    → Hamburger Meniu (1) → Pornire senzor (2) → Pornire senzor (3) → Setează ora exactă la care l-ai pornit cu cititorul sau cu aplicația oficială. Dacă nu l-ați pornit astăzi, răspundeți "Nu astăzi" (4).

![xDrip+ Start transmițător Libre & Senzor 3](../images/xDrip_Libre_Transmitter03.png)

(xdrip-libre2-patched-app) =

## Aplicație Libre 2 modificată

- Setați sursa de date la aplicația Libre modificată.
    
    → Meniu Hamburger (1) → Setări (2) → Selectați Libre (aplicație modificată) în sursă de date hardware (3)
    
    ![xDrip+ aplicație Libre modificată 1](../images/xDrip_Libre_Patched01.png)

- Puteți adăuga `BgReading:d,xdrip libre_receiver:v` sub Setări mai puțin comune>Setări suplimentare de jurnalizare->Etichete suplimentare pentru jurnalizare. Aceasta va înregistra mesaje de eroare suplimentare pentru a depana problema.

![xDrip+ jurnalizare LibreLink](../images/Libre2_Tags.png)