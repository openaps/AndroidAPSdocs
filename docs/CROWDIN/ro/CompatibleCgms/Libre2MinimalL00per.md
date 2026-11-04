# Cum se configurează FSL 2 și OOP2 pentru a utiliza o conexiune Bluetooth nativă în xDrip

Transferat de pe [MinimalL00per](https://www.minimallooper.com/post/how-to-setup-freestyle-libre-2-and-oop2-to-use-a-native-Bluetooth-connection-in-xdrip) în markdown și **revizuit/actualizat**: 25 aug. 2025, psonnera

În partea de jos a prezentului document există o listă de definiții. Dacă nu sunteți familiarizat cu termenii sau abrevierile nu ezitați să *[săriți jos](#minimallooper-definitions)* pentru clarificare.

 

## Configurare

### Dispozitive

- *FSL2 și 2+* **NOTĂ: versiunile US, CAN, NZ, AUS NU sunt acceptate**

**(OPȚIONAL) Cititor** (nu este compatibil cu FSL2+)

- Cititor 1 (cu firmware actualizat)

- Cititor 2

*NOTĂ: Dacă plănuiți să utilizați cititorul în această soluție, TREBUIE SĂ ÎNCEPEȚI senzorul cu READER FIRST. Dacă nu faceți acest lucru, nu veți putea folosi cititorul pentru a aduna citiri de la senzorul activat. După ce senzorul s-a încălzit, puteți lua citiri din aplicația LibreLink sau xDrip.*

### Software

**OOP** - Algoritmul în afara procesului, o aplicație externă APK Android care asistă la recuperarea datelor brute ale senzorilor pentru a obține valorile glicemiei. xDrip sends gathered FSL2 BT raw data to OOP and blood glucose values are returned to xDrip.

- **OOP2**

  - **Funcționează numai cu senzori europeni FSL2/2+**

  - Sursă închisă (nu este disponibilă pe GitHub)

  - Scopul este decriptarea valorilor criptate ale senzorului și returnarea lor în xDrip. Then xDrip can be used with either raw data, requiring calibration, or provide glucose values similar to the Reader 1.

[***xDrip***](https://jamorham.github.io/)

- [*Nightly*](https://github.com/NightscoutFoundation/xDrip/releases) cel mai recent cod sursă construit în fiecare noapte. Nu e testat bine

- [*Stabil*](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) ultima versiune testată.

- **NOTE: new sensors require an updated OOP2 app, for this it is recommended to use at least the latest xDrip release (Stable) version, matching the latest OOP2.**

 

## Proces

- *Mai întâi descărcați și instalați aplicațiile de mai jos*
- *Dezinstalați posibilele aplicații conflictuale*
- *Cum porniți un senzor FSL2 în modul Bluetooth nativ folosind LibreLink și xDrip
  - [*Pasul 1: Instalarea și configurarea aplicației*](#minimallooper-step1)
  - [*Pasul 2: Configurarea setărilor xDrip*](#minimallooper-step2)
  - [*Pasul 3: Introduceți fizic senzorul*](#minimallooper-step3)
  - [*Pasul 4: Porniți aplicația LibreLink și porniți senzorul cu prima scanarea NFC*](#minimallooper-step4)
  - [*Pasul 5: Deschideți xDrip și SCANAȚI NFC senzorul FSL2*](#minimallooper-step5)
  - [*Pasul 6: Porniți noul senzor în xDrip*](#minimallooper-step6)
  - [*Pasul 7: Așteptați 60 de secunde și scanați NFC senzorul din nou*](#minimallooper-step7)
  - [*Pasul 8: Colectarea datelor între 3 și 15 minute*](#minimallooper-step8)
  - [*Pasul 9: Verificați că senzorul e conectat și transmite date*](#minimallooper-step9)

- *[Note](#minimallooper-notes)*
- *[Avantaje](#minimallooper-advantages)*
- *[Dezavantaje](#minimallooper-disadvantages)*
- <u>*\[Depanare\](#minimallooper-troubleshooting)*</u>

## Înainte să începeți

Este recomandat cu tărie să urmăriți acest proces cu un **senzor nou**. Deși s-a raportat că o conexiune poate fi făcută cu un senzor activ (***vedeți [mai jos](#minimallooper-started-sensor)***), șansa ca aplicația LibreLink sau cititorul să creeze o nouă cheie privată de partajare pentru comunicare în timpul conexiunii este foarte probabilă. This means that after bonding, xDrip is not aware of the new key and will not be able to communicate with the sensor. Încercați o conexiune cu un senzor deja pornit pe propriul risc, de preferat spre sfârșitul vieții senzorului.

### Mai întâi descărcați și instalați aplicațiile de mai jos

(Libre2_OOP2)=

- **OOP2** - Versiunile OOP2 pot fi găsite la:

  (*Notă: trebuie să fiți autentificat la Google pentru a accesa linkul.*)

*[oop2.apk](https://drive.google.com/file/d/1106h2s12b3Ev9gKCTU2G75q8h9ChHjcz/view?usp=sharing)* - OOP2_21_09_25 (05d1989) **2025.09.21** (ultima versiune)

- **xDrip** - **<u>latest version</u>** (minimum version 2025.09.26) can be found at:

[*xDrip.apk*](https://github.com/NightscoutFoundation/xDrip/releases)

(minimallooper-started-sensor)=

### Ce se întâmplă dacă senzorul meu este deja pornit? Pot primi în continuare citiri în xDrip? DA!

Mulți oameni au întrebat dacă această metodă poate fi folosită cu un senzor deja activ și pot spune cu un **DA** răsunător, poți începe un senzor care rulează activ.

1.  **FIRST**, make sure you have made the configuration changes and settings to xDrip and installed and configured OOP2 as shown below.

2.  **APOI**, treceți la *Pasul 5* și **ASIGURAȚI-VĂ** că ați închis forțat LibreLink înainte de a începe. Apoi urmați procesul până la finalizare.

*NOTĂ: Nu veți putea utiliza senzorul FSL2 activat cu FSLReader DACĂ nu a fost început cu FSLReader mai întâi. If it WAS started with the FSLReader first, then you will be able to **scan** the sensor and retrieve readings from BOTH the sensor and apps like LL and xDrip.*

## Cum porniți un senzor FSL2 în modul Bluetooth nativ folosind LibreLink și xDrip

*NOTĂ: Dacă există setări în capturile de ecran care nu sunt afișate cu o CĂSUȚĂ în mod specific și sunt DEBIFATE (adică dezactivate) apoi PĂSTRAȚI-LE DEZACTIVATE. Capturile de ecran reflectă o configurație funcțională pentru TOATE setările afișate. Dacă doriți să experimentați pornind sau oprind alte funcții după ce aveți un senzor care funcționează, puteți face acest lucru pe propriul risc.*

(minimallooper-step1)=

### Pasul 1: Instalarea și configurarea aplicației

**Instalați și configurați OOP2** și vedeți că funcționează prin deschiderea aplicației.

![aplicația OOP2](../images/minimal00per/OOP2app.png)

**Setări**

- *Utilizați serviciul* **pornit**

- *Utilizați serviciul în prim-plan* **pornit**

- *Timer Duration* **5 minutes**

  - Change to **1 sec** if you are not getting results fast enough (the screenshot below shows this setting).

**Versiunea 2: 93e5cac-2020.12.08 (ultima versiune)**

![setări OOP2](../images/minimal00per/OOP2settings.png)

**Install xDrip** minimum version: latest release. Further documentation on xDrip installation and setup can be found [*here*](../CompatibleCgms/xDrip.md).

(minimallooper-step2)=

### Pasul 2: Configurarea setărilor xDrip

**Hardware Data Source** (sursa de date hardware): Libre Bluetooth

![Setări NFC xDrip](../images/minimal00per/xdripDS.png)

**NFC Scan features**: *setările care nu sunt menționate sunt considerate dezactivate.*

- *Use NFC feature* (folosiți funcția NFC): **pornit**
- *Sensor Age or Expiry* (vechimea sau expirarea senzorului): **pornit**
- *Scan when not in xDrip*: **on**
- *Use Any-tag optimized reading method*: **oprit** dar încercați **pornit** în cazul în care se întâmpină dificultăți la scanare

![Setări NFC xDrip](../images/minimal00per/xdripNFC.png)

- *Starting Bluetooth connection with FSL2 sensor*: **Always connect to libre2 sensors** (conectare întotdeauna la senzorii Libre 2)

![xDrip L2 connect settings](../images/minimal00per/xdripNFCBT.png)

- *Omogenizați datele Libre 3 când se folosește metoda xxx*: lasă implicit. Creșteți valoarea pentru senzorii zgomotoși, scădeți când este stabilă.

![xDrip smooth settings](../images/minimal00per/xdripNFCsmooth.png)

**Less Common Settings -\> Bluetooth Settings** (*sunt importante și pot varia în funcție de telefon/configurare*)

- *Turn Bluetooth on* (activați Bluetooth): **pornit**
- *Trust Auto-Connect* (încredere în conectarea automată): **pornit**
- *Use Background Scans* (scanări în fundal): **pornit**
- *Always discover services* (descoperirea serviciilor de fiecare dată): **pornit**

You can setup xDrip using the QR code below. Trebuie să îl scanați (sau să încărcați imaginea) în xDrip -> Auto Configure.

```{admonition} QR Code
:class: dropdown

![Setup Bluetooth](../images/minimal00per/qr_libre2direct-nocalib.png)
```

![xDrip BT settings](../images/minimal00per/xdripBT1.png)

![Setări NFC xDrip](../images/minimal00per/xdripBT2.png)

Odată scanat codul QR de mai sus, dacă aveți un telefon Samsung (dar acest lucru este util și pentru multe mărci chinezești), scanați celălalt cod QR de mai jos pentru a schimba setările pentru o conexiune mai sigură:

- *Acordați încredere Auto-Connect*: **oprit**
- *Folosiți scanările de fundal*: **oprit**

```{admonition} QR Code
:class: dropdown

![Setup Bluetooth](../images/minimal00per/qr_libre2direct_samsung.png)
```

![xDrip BT settings](../images/minimal00per/xdripBT3.png)

**Advanced settings for FSL2** (*opțional dar util*)

- *show Raw values in Graph* (afișarea valorilor brute în grafic): **pornit**

- *arătați informații despre senzori în Stare*: **pornit**

![xDrip BT settings](../images/minimal00per/xdripAS.png)

**Extra Logging Settings** (*necesar pentru depanare dacă nu funcționează corect*)

- *Extra tags for logging*: introduceți această valoare

`BgReading:d,jamorham librereceiver:v,LibreOOPAlgorithm:v,jamorham nsemulator:v,DexCollectionService:v`

![xDrip debug settings](../images/minimal00per/xdripDBG.png)

(minimallooper-OOPsettings)=

**Setări mai puțin obișnuite -\> Alte opțiuni diverse**

> **Setări pentru configurarea OOP2**

- *Out of process Libre algorithm*: **OPRIT**

(*ASIGURAȚI-VĂ CĂ ACEST LUCRU ESTE **OPRIT** PENTRU OOP2, ALTFEL NU VEȚI OBȚINE CITIRI!*)

![Setări OOP2 xDrip](../images/minimal00per/xdripOOP.png)

(minimallooper-step3)=

### Pasul 3: Introduceți fizic senzorul

(minimallooper-step4)=

### Pasul 4: Porniți aplicația LibreLink și porniți senzorul cu prima scanarea NFC

Porniți aplicația LibreLink, apoi scanați senzorul nou introdus, apoi închideți și dezactivați sau dezinstalați aplicația LibreLink. **You still need to wait for the sensor to warm-up the full 60 minutes before proceeding and starting the sensor in xDrip**. Nu vă bazați pe citirile de dinainte, deoarece senzorul încă se calibrează intern, iar valorile variază foarte mult.

#### Pasul 4a (OPȚIONAL, Utilizați FSLReader):

**Porniți senzorul FSL2 (nu 2+) prin scanarea acestuia cu FSLReader cu chiar întâia scanare NFC**

If you want to be able to use the **FSLReader** as well as the LL app or xDrip to read values from the FSL2 sensor, then **you will need to scan the newly inserted FSL2 sensor with the FSL Reader FIRST.** After the sensor warmup is complete you can then use the LL app or xDrip to scan readings.

*NOTĂ: Aplicația LibreLink este necesară doar pentru PRIMA scanare NFC după inserarea senzorului. Aceasta servește la trimiterea semnalului de inițializare a încălzirii, după aceea aplicația TREBUIE dezactivată (setările aplicației-\>închidere forțată) sau dezinstalată. Puteți folosi aplicația modificată 2.3 sau versiunile oficiale, nu contează. The main thing is to prevent the LL app from running when xDrip is trying to start the BT bonding process with the sensor as the LL app interferes with the Bluetooth reconnection process by disrupting communication.*

*A fost raportat că simpla oprire a **permisiunilor de localizare** în setările Android ale aplicației LibreLink este suficient pentru a preveni interferarea cu conexiunea. Acest lucru a fost raportat de câțiva utilizatori ca fiind de succes. Din nou **recomand dezactivarea sau dezinstalarea aplicației**, dar puteți încerca acest lucru dacă doriți să experimentați.*

(minimallooper-step5)=

### Pasul 5: Deschideți xDrip și SCANAȚI NFC senzorul FSL2

(*Memento! Asigurați-vă că LibreLink este dezactivat (locația este oprită) sau dezinstalat și că ați așteptat toate cele 60 de minute pentru ca senzorul să se încălzească și să fie calibrat.*)

**SCANAȚI NFC** senzorul FSL2 cu xDrip. Aceasta trimite un semnal către senzor pentru a activa asocierea Bluetooth pentru a începe procesul de legare. A small notification will appear briefly on the bottom of the xDrip Overview screen with the text **Scanning** followed by the notification **Scanned OK!** upon a successful NFC scan of the FSL 2 sensor.

![Scanare xDrip](../images/minimal00per/xdripscan1.png)

(minimallooper-step6)=

### Pasul 6: Porniți noul senzor în xDrip

In the **xDrip Overview screen** press the **hamburger menu** in the upper left corner. Apoi alegeți **Start Senzor**.

Pe ecranul **Porniți noul senzor** apăsați **Start Senzor**. Un anunț va întreba **L-ați inserat astăzi?** Răspundeți apăsând **NU ASTĂZI**.

![Scanare xDrip](../images/minimal00per/xdripstart.png)

![Scanare xDrip](../images/minimal00per/xdripstart2.png)

*NOTE: If you accidentally clicked "YES, TODAY" then you will need to "stop sensor" from the xDrip main menu followed by "start sensor" by proceeding with Step 5 again.*

(minimallooper-step7)=

### Pasul 7: Așteptați 60 de secunde și scanați NFC senzorul din nou

Este nevoie de o a doua scanare NFC pentru a **ADĂUGA** senzorul ca dispozitiv Bluetooth pe care xDrip îl va folosi pentru a prelua citirile. Odată finalizat, veți vedea o notificare care va spune **NOUL SENZOR PORNIT**.

![Scanare xDrip](../images/minimal00per/xdripscan2.png)

O perioadă de așteptare de 60 de secunde este impusă deoarece senzorul nu poate fi scanat în timpul acestui proces de mai mult de o dată pe minut. Dacă senzorul este scanat prea devreme, avertizarea **Nu atât de repede, așteptați 60 secunde** este afișată în ecranul de prezentare generală xDrip.

![Scanare xDrip](../images/minimal00per/xdripscan3.png)

Deschideți jurnalele de evenimente xDrip și verificați dacă senzorul s-a asociat corect cu xDrip.

![Scanare xDrip](../images/minimal00per/xdripstream.png)

(minimallooper-step8)=

### Pasul 8: Colectarea datelor între 3 și 15 minute

Între 3 și 15 minute suficiente date sunt colectate pentru a afișa primele valori. *Dacă încă nu primiți citiri în acest moment, uneori ajută repornirea telefonului.*

If you use a Samsung (or many Chinese brand phones) and have issues receiving data, scan the QR code below, in xDrip -> Auto Configure.

```{admonition} QR Code
:class: dropdown

![Setup Bluetooth](../images/minimal00per/qr_libre2direct_samsung.png)
```

It will change xDrip Bluetooth settings to:

- *Acordați încredere Auto-Connect*: **oprit**
- *Folosiți scanările de fundal*: **oprit**

(minimallooper-step9)=

### Pasul 9: Verificați că senzorul e conectat și transmite date

Press the Hamburger menu in the upper left of the xDrip Overview screen and select **System Status**. Pe ecranul Starea sistemului, câmpul activ **Dispozitiv Bluetooth:** afișează denumirea Bluetooth FSL2 de forma **ABB___XXXXXXXXXXX**, unde XXX reprezintă numărul de serie al senzorului. Câmpul **Connection Status** afișează **Connected**, iar câmpul **Sensor Start:** afișează ora la care a fost pornit senzorul.

![Scanare xDrip](../images/minimal00per/xdripSSlog.png)

Pe ecranul **Dispozitiv Bluetooth** (glisare la stânga) puteți verifica detaliile legate de conexiune ale senzorului și puteți utiliza acest ecran pentru conexiunile de depanare. Mai jos este o listă de câmpuri și scopurile lor pentru a ajuta la depanarea conexiunii.

*NOTĂ: **<u>NU ATINGEȚI</u> ȘI NU SCHIMBAȚI Asocierea Bluetooth de la <u>Dezactivat</u>** în această fereastră. Acest lucru va încerca o conectare directă, va eșua (nu este legată) și va trebui să începeți din nou procesul de la Pasul 5.*

![Scanare xDrip](../images/minimal00per/xdripSSbond.png)

- **Starea serviciului telefonului:** Ultima dată când telefonul a făcut o conexiune Bluetooth cu senzorul (ar trebui să fie acum mai puțin de 5 minute)
- **Dispozitiv Bluetooth:** Afișează starea curentă a conexiunii (fie **conectat**, fie **deconectat**)
- **Adresa MAC a dispozitivului**: Acesta este ID hardware al senzorului.
- **Bluetooth Pairing**: Aceasta ar trebui să fie **<u>Disabled, tap to enable</u>** (dezactivat, apăsați pentru a activa). Aveți grijă să NU atingeți acest lucru. Dacă îl atingeți din greșeală, apăsați-l din nou până când acesta revine la dezactivat.
- **Cea mai lentă trezire**: Puteți ignora asta. xDrip nu își petrece timpul așteptând citiri: începe să le aștepte după un anumit timp (de obicei 5 minute). If no data arrives at that time, you'll see "Woke up early" meaning xDrip was expecting data to be ready but there's none. Cea mai lentă trezire este întârzierea cea mai mare înregistrată înainte de primirea datelor în mod normal.
- **Următoarea trezire**: ar trebui să spună 5 minute

![Scanare xDrip](../images/minimal00per/xdripSStat.png)

(minimallooper-notes)=

### Note

- **Using LL NFC Scans AFTER bonding/pairing in xDrip is completed**: You can conduct NFC scans but the bonding/pairing process with xDrip needs to be completed first. Always look at xDrip and see if it is close to the 5 minute reading (i.e. 4 minutes ago), if it is near 5 min, wait for the new BT reading to come in and then conduct the NFC scan. If you catch it at the wrong time it will disturb the BT process in xDrip and not receive BT readings, which can take a while to re-bond and transmit again and sometimes a sensor BT connection can be “stolen” by LL. Cu toate acestea, între aceste citiri Bluetooth, nu am avut probleme cu executarea unei scanări NFC, urmată de dezactivarea imediată a aplicației. Nu sunt sigur dacă LibreLink trebuie dezactivată de fiecare dată, dar o dezactivez pentru siguranță.

- **What is going on?** When a Bluetooth connection is made a private shared key is created that is needed to allow communication between the sensor and the calling application/device. Este foarte probabil ca aplicația LibreLink sau cititorul să creeze o nouă cheie privată comună pentru comunicare în timpul conexiunii. This means that after bonding, xDrip is not aware of the new key and will not be able to communicate with the sensor.

  - Several users have reported that the LL app can be restarted after successfully starting the sensor and receiving readings in xDrip. În permisiunile aplicației LibreLink Android trebuie doar să opriți setarea **Permiteți localizarea**. Once this is done you should be able to use the LL app and xDrip simultaneously. Vă recomand să nu selectați o aplicație implicită pentru scanarea NFC și să alegeți ce aplicație doriți pentru citirea senzorului printr-o scanare NFC. De asemenea, NU UITAȚI, la următoarea schimbare a senzorului să forțați închiderea aplicației LibreLink după scanarea NFC inițială pe noul senzor. After the sensor is configured and receiving readings in xDrip you can then start the LL app again.

&nbsp;

- **Repornirea telefonului**: După repornire, și după dezactivarea sau închiderea forțată a aplicației, AMINTIȚI-VĂ să verificați că aplicația LibreLink NU rulează. Sugerez testarea unei reporniri pentru a vedea dacă LibreLink începe din nou automat. Puteți căuta în setările aplicației LibreLink sub setările aplicației Android de pe telefon. Dacă este încă activată, atunci dezactivați din nou aplicația LibreLink, iar dezinstalarea aplicației LibreLink poate fi singura modalitate de a evita acest lucru. Acest lucru este necesar pentru a preveni furtul accidental al legăturii Bluetooth. De asemenea, după repornirea sistemului, va dura aceleași 3-15 minute pentru a obține citiri Bluetooth din senzor, astfel încât să aveți răbdare și planificați acest lucru dacă reporniți aproape de momentul când aveți nevoie de o citire de glicemie pentru a face bolus, pentru mese, șamd.

&nbsp;

- **Setările de optimizare a bateriei**: Asigurați-vă că EXCLUDEȚI aceste aplicații din setările de optimizare a bateriei pe telefonul dumneavoastră

  - xDrip

  - OOP 2

  - LibreLink

  - AAPS

&nbsp;

- **Using Flight Mode:** There are some situations which call for turning on flight mode (when taking a flight ;-), sleeping at night and you do not wish to have Wi-Fi or Mobile connection signals operating with your phone in close range of your head) and this can cause issues with the Bluetooth communication during activation of Flight mode. La activarea modului de zbor pe telefon, urmat de activarea Bluetooth, valorile glicemiei vor fi pierdute. Singura soluție este să reporniți colectorul în xDrip+ -\> System Status -\> Classic Status Page. După repornirea colectorului, valorile glicemiei au apărut din nou.

 

(minimallooper-advantages)=

### Avantaje

- **Aplicația modificată LibreLink nu mai este necesară** Nu mai ai nevoie de o versiune modificată a aplicației LibreLink pentru a prelua valorile de la senzorul FSL2. În timp ce puteți utiliza aplicația LibreLink modificată, versiunile oficiale ale aplicației LibreLink pot porni prima scanare de inițializare NFC în același mod ca aplicația modificată. Nu există nicio diferență în ceea ce privește scanarea de inițializare NFC pentru a porni senzorul.

&nbsp;

- **dispozitive terțe de scanare NFC nu mai sunt necesare** dispozitive terțe de scanare NFC cum ar fi (Miaomiao, Bubble sau Blucon) nu mai sunt *(dar poate fi folosit în continuare)* pentru a colecta citiri, deoarece doar senzorul le poate livra acum prin Bluetooth. Mai puține dispozitive înseamnă mai puține lucruri care pot merge prost, mai puține dispozitive pentru încărcare și o configurație mai minimalistă.

&nbsp;

- **Veți putea în continuare să scanați NFC citiri cu cititorul FSL2 (versiunea 1 cu firmware actualizat sau versiunea 2) DACĂ senzorul FSL2 a fost pornit MAI ÎNTÂI cu cititorul FSL.** Cititorul FSL2 separat poate fi folosit în continuare pentru a scana citiri de pe senzorul activ, după ce acesta este legat prin Bluetooth la xDrip.

  - You **MUST** start the sensor with the very first NFC scan to initiate sensor warmup **with the FSL Reader FIRST**. După acest punct, alte aplicații software vor putea, de asemenea, să ia citirile NFC de la senzorul activat acum.
- Din câte înțeleg, senzorul FSL2 (atâta timp cât nu a stabilit și nu încearcă să stabilească o conexiune) își anunță întotdeauna prezența (și disponibilitatea) prin BLE exact la fiecare 2 minute (vizibil pe orice dispozitiv Bluetooth care poate căuta dispozitive Bluetooth). Indiferent ce dispozitiv este primul care răspunde la acest anunț câștigă cursa și este *singurul* dispozitiv căruia i se permite să se conecteze și să citească senzorul deoarece o cheie privată partajată este creată în timpul procesului de conexiune NFC care este folosită pentru a decripta comunicarea FSL 2. Senzorul este apoi indisponibil pentru alte dispozitive care nu au această cheie privată de partajare și ar putea încerca să se conecteze. Se pare că cititorul FSL 2 câștigă întotdeauna această cursă indiferent de "adversar".

&nbsp;

- **Configurare cu un număr minim de dispozitive fizice** Scopul meu a fost întotdeauna să mențin numărul de dispozitive medicale atașate corpului meu la un nivel minim. FSL2 în combinație cu sistemul Omnipod a atins acest obiectiv. Acest aspect este și mai important atunci când călătoresc (atât pe distanțe scurte, cât și pe distanțe lungi), deoarece numărul de obiecte și de schimburi pentru aceste obiecte devine mai mic, ceea ce înseamnă că am mai mult spațiu pentru alte obiecte în bagaj. Sperăm că în viitor va exista o pompă plasture care va avea doar un rezervor de înlocuit, iar cipul și sistemul motor vor putea fi o piesă păstrată/reutilizabilă. Acest lucru ar reduce deșeurile și ambalajul necesar pentru schimbările de senzori/locuri de aplicare, ceea ce, din nou, îmi oferă mai mult loc în valiză pentru alte lucruri.

&nbsp;

- **Nu mai sunt decalaje de oră la schimbarea senzorilor** Pentru că puteți începe un alt senzor cu aplicația LL folosind o scanare NFC inițială, senzorul curent poate continua să ruleze și să livreze citirile prin Bluetooth în același timp. După 20 de minute poți obține citiri de la noul senzor, dar cel mai bine este să aștepți 1 oră pentru ca senzorul să se calibreze intern corespunzător. Aceasta înseamnă că puteți opri senzorul curent și porni pe cel nou (după ce a fost setat și încălzit cu scanarea NFC a LibreLink cu o oră mai devreme) și în decurs de 3 până la 15 minute veți avea calibrările și citirile inițiale.

&nbsp;

(minimallooper-disadvantages)=

### Dezavantaje

- **Repornirea telefonului:** Deoarece procesul Bluetooth trebuie să înceapă din nou când telefonul se repornește, mai întâi trebuie să vă asigurați că dezactivați manual aplicația LibreLink (dacă nu ați dezinstalat-o) și să aveți răbdare până la primele citiri (între 3 și 15 minute). Acest lucru înseamnă planificarea repornirilor telefonului astfel încât acestea să nu aibă loc în timpul unor momente critice, cum ar fi bolusurile de corecție sau orele de masă și gustări.

&nbsp;

- **You can't run LL and xDrip in parallel together for Bluetooth readings**. LibreLink va încerca întotdeauna să "fure" conexiunea Bluetooth la senzor și să facă legătura. Dacă acest lucru se întâmplă, rămâneți cu LibreLink pentru tot restul vieții senzorului. Deci, rularea simultană a aplicațiilor nu funcționează tot timpul. As I mention below, you can enable the LL app and do an NFC scan to get the LL reading (if you need to compare, want to retrieve history for yourself or endocrinologist reports) however you should disable it as soon as you have your reading and not try to attempt this within a minute of when xDrip is going to retrieve its Bluetooth reading. Nu sunt sigur cum funcționează cititorul FSL2 în timp ce fac acest lucru, dar voi testa acest lucru mai târziu.
- Several users have reported that the LL app can be restarted after successfully starting the sensor and receiving readings in xDrip. În permisiunile aplicației LibreLink Android trebuie doar să opriți setarea **Permiteți localizarea**. Once this is done you should be able to use the LL app and xDrip simultaneously. Vă recomand să nu selectați o aplicație implicită pentru scanarea NFC și să alegeți ce aplicație doriți pentru citirea senzorului printr-o scanare NFC. De asemenea, NU UITAȚI, la următoarea schimbare a senzorului să forțați închiderea aplicației LibreLink după scanarea NFC inițială pe noul senzor. After the sensor is configured and receiving readings in xDrip you can then start the LL app again.

&nbsp;

- **Dispozitivele terțe de scanare NFC pot fi folosite în continuare**. Da, am enumerat acest lucru ca dezavantaj, dar am vrut să subliniez și că, dacă ceva nu merge bine cu senzorul și LibreLink preia controlul asupra lui, puteți reveni oricând la un dispozitiv de scanare NFC pus pe senzor pentru a obține citiri în xDrip. De asemenea, puteți utiliza acest dispozitiv în locul unei conexiuni Bluetooth directe dacă sunteți mai confortabil cu o configurare constând dintr-un dispozitiv terț de scanare NFC (Miaomiao, Bubble, Blucon). Uneori, anumite telefoane nu funcționează bine cu conectarea Bluetooth nativă a senzorilor și extragerea datelor. Puteți utiliza aceste dispozitive ca o copie de rezervă sau ca o utilizare normală, în orice caz aveți această opțiune.
- If you are planning on using the **FSL Reader** as an NFC scanning device to take readings, you MUST start the FSL2 sensor with the **VERY FIRST NFC scan** to warm up the sensor with the **READER FIRST**.

&nbsp;

- **LV data will not be uploaded automatically** Since the LL app does not have a constant Bluetooth connection (because LL should not be running simultaneously with xDrip once the sensor is actively sending Bluetooth readings) then it is not receiving readings automatically from the sensor. Aceasta înseamnă că datele privind glicemia nu sunt încărcate automat în LibreView și prin extensie în alte telefoane cu LibreLink. Consider că acesta este un dezavantaj, deoarece știu că mulți părinți se bazează pe această funcție, precum și cei care sunt obligați să utilizeze raportarea LibreView pentru furnizorul lor de asistență medicală. Încă puteți deschide aplicația LibreLink și să scanați la fiecare 8 ore pentru a obține datele completate înapoi de la senzor în LibreLink (de 3 ori pe zi, cel puțin la fiecare 8 ore, dar ar fi probabil nevoie de mai multe scanări pentru a capta toate cele 24 de ore de date), dar din nou acesta este un proces manual.

&nbsp;

(minimallooper-definitions)=

### Definiții

- **BT** - Bluetooth

- **BLE** - Bluetooth Low Energy

- **FSL** - FreeStyle Libre
  - **Libre 1 (FSL1)** - doar NFC. Prima versiune a senzorului

  - **Libre 2 (FSL2)** - Bluetooth și NFC. A doua versiune a senzorului.

  - **Libre 3 (FSL3)** - Bluetooth și NFC. Cea de-a treia versiune mai mică a senzorului. Nu este acceptată de OOP2 (vedeți Juggluco).

- **LL** - LibreLink, **aplicația** folosită pentru a porni senzorul cu scanarea NFC inițială

- **LV** - LibreView, serviciu cloud pentru schimbul de date cu echipa de endocrinologie (luați în considerare utilizarea Tidepool sau Nightscout)

- **MM** - MiaoMiao, numele și producătorul unui dispozitiv terț de scanare NFC care oferă citiri prin Bluetooth la xDrip.

- **NFC** - Near Field Communication (comunicare în câmp apropiat), o operațiune fizică în care apropiați senzorul NFC al telefonului de senzorul dumneavoastră pentru a iniția o citire. Aceasta este adesea denumită "scanarea senzorului", "scanarea de senzor" sau "scanare NFC". Acest proces nu folosește în niciun fel Bluetooth.

- **OOP1** - Out of Process Algorithm version 1, the 3rd party app that receives raw values (delivered to xDrip from the sensor by Bluetooth or NFC scan) and then uses an algorithm (very similar to the hardware algorithm on the sensor chip) to process the raw values and returns a calibrated (by the OOP1 algorithm, not by xDrip’s native calibrations) blood sugar back to xDrip to either display or be further processed with xDrip’s calibration (with a finger pick blood calibration) if needed.

- **OOP2** - Out of Process Algorithm versiunea 2 (algoritm extern), aplicația terță care primește datele criptate trimise de senzorul FSL 2 (prin Bluetooth sau scanare NFC) și apoi decriptează aceste date. Odată decriptate, datele sunt trimise la xDrip.

 

(minimallooper-troubleshooting)=

### Depanare

#### Eșec la scanarea senzorului cu NFC

- Asigurați-vă că dispozitivul de citire NFC este activat în setările Android.
- Cititorul NFC trebuie să fie compatibil cu etichetele **ISO 15693**. Unele telefoane Cubot sunt foarte greu de folosit.
- Look into your phone documentation to identify the NFC antenna position. Bring it to the sensor and stay on it for 10 seconds: xDrip NFC reading takes longer than the vendor app or the reader.
- Încercați să închideți xDrip înainte de a scana senzorul.
- Make sure no other app wants to read the sensor (you might see a selection with different app choices when scanning: select xDrip but don't move the phone).
- Try all combinations of xDrip NFC settings *Use faster multi-block reading method* and *Use Any-tag optimized reading method* knowing that NFC scans are usually more reliable with both these options **off**.

#### Blocat la colectarea citirilor inițiale

*Notă: FSL 2 nu este recunoscut ca o sursă de date de încredere atunci când este calibrat manual.*

Setați strategia de [calibrare OOP2](#minimallooper-OOPsettings) la "Nici o calibrare" până când nu aveți totul funcțional.

Apoi puteți decide dacă calibrați sau nu.

![Scanare xDrip](../images/minimal00per/xdripinitial.png)

#### Senzorul este raportat ca FSL1

![Scanare xDrip](../images/minimal00per/xdripL1.png)

Make sure you are running the latest versions of xDrip and OOP2.

#### Conectarea la senzor nu a reușit

- Verificați ca OOP1 să fie dezactivat (vedeți [aici](#minimallooper-OOPsettings))

![Scanare xDrip](../images/minimal00per/xdripstreamfail.png)

- Verificați ca OOP2 să nu fie adormit de aplicațiile și setările bateriei telefonului
- Verificați că protecția Google Play este dezactivată pentru că va închide OOP2
- Ați schimbat asocierea de tip Bluetooth în starea sistemului? Atingeți ecranul pentru a-l aduce înapoi la **<u>Dezactivat</u>**

![Scanare xDrip](../images/minimal00per/xdripSSbond.png)

#### Citiri ratate

Make sure OOP2 shows values that are not 0 or -1, it might be a sign your sensor is failing (example below in mmol/L).

![Scanare xDrip](../images/minimal00per/OOP2values.png)

Faptul că vechimea senzorului nu a avansat ar putea fi, de asemenea, un semn că senzorul dumneavoastră are probleme. This means xDrip received a value, but discarded it as it was not acceptable (sensor error).

![Scanare xDrip](../images/minimal00per/xdripnotadvanced.png)

#### Reporniți de la zero asocierea senzorului

1. xDrip menu -> Stop sensor (it won't stop the FSL2, just change xDrip state to not started)
2. xDrip menu -> System status -> Forget device
3. Scanați senzorul cu NFC din xDrip. Așteptați cel puțin un minut
4. xDrip menu -> Start sensor. Așteptați cel puțin un minut
5. Scanați senzorul cu NFC din xDrip de câteva ori, așteptând de fiecare dată cel puțin un minut între două scanări.
