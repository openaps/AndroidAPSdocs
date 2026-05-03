# FAQ pentru cei care folosesc bucla

Cum să adăugați întrebări la FAQ: Urmărește aceste [instrucțiuni](../SupportingAaps/HowToEditTheDocs.md)

## General

### Pot descărca direct fișierul de instalare AAPS?

Nu. Nu există niciun fișier apk descărcabil pentru AAPS. Trebuie să-l [construiți](../SettingUpAaps/BuildingAaps.md) chiar voi. Iată de ce:

AAPS este utilizat pentru a vă controla pompa și a administra insulină. În conformitate cu reglementările actuale, în Europa, toate sistemele din clasa IIa sau IIb sunt dispozitive medicale care necesită aprobare din partea regulatorilor (un marcaj CE), și care trebuie să aibă diferite studii și semnalizări ale calității. Distribuirea unui dispozitiv nereglementat este ilegală. Reglementări similare există și în alte părți ale lumii.

Acest regulament nu se limitează doar la vânzări (în sensul obținerii de bani pentru ceva), ci se aplică oricărui mod de distribuire (chiar și acordarea gratuită). Construirea unui dispozitiv medical pentru propriul uz este singura modalitate de a nu fi afectat de aceste reglementări.

De aceea fișierele apk nu sunt disponibile.

(FAQ-how-to-begin)=

### Cum se pornește?

În primul rând, trebuie să **aveți componentele fizice compatibile pentru buclă**:

- O pompă de insulină [acceptată](../Getting-Started/CompatiblePumps.md), 
- un telefon inteligent [Android](../Getting-Started/Phones.md) (Apple iOS nu este acceptat de AAPS - puteți verifica [iOS Loop](https://loopkit.github.io/loopdocs/)) și
- un [sistem de monitorizare continuă a glicemiei](../Getting-Started/CompatiblesCgms.md). 

În al doilea rând, trebuie **să vă pregătiți componentele software**: [AAPS](../SettingUpAaps/BuildingAaps.md), [sursa CGM/FGM](../Getting-Started/CompatiblesCgms.md) și [un server de raportare](../SettingUpAaps/SettingUpTheReportingServer.md).

În al treilea rând, trebuie să învățați și **să înțelegeți designul de referință OpenAPS pentru a vă verifica factorii de tratament**. Principiul fundamental al buclei închise este că [rata bazală și raportul insulină carbohidrați](../SettingUpAaps/YourAapsProfile.md), ale dumneavoastră, sunt exacte. Toate recomandările presupun că nevoile dumneavoastră bazale sunt îndeplinite și orice creșteri sau scăderi bruște pe care le vedeți sunt un rezultat al altor factori care necesită, prin urmare, unele ajustări punctuale (exercițiu, stres șamd). Ajustările pe care le poate face bucla sunt limitate pentru siguranță (a se vedea bazala temporară maximă permisă în [designul de referință al OpenAPS](https://openaps.org/reference-design/)), ceea ce înseamnă că nu veți dori să pierdeți doza permisă pe corecții necesare pentru a repara greșelile bazalei. Dacă, de exemplu, ajungeți în mod frecvent la rate bazale temporare joase atunci când se apropie o masă, atunci este foarte probabil că sunt necesare ajustări ale bazalei. Puteți utiliza [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) pentru a lua în considerare un număr mare de date pentru a sugera dacă și cum trebuie ajustate bazalele și/sau ISF; și dacă este necesară modificarea raportului carbohidrați insulină. Sau puteți testa și stabili ratele bazale [folosind metoda tradițională](https://integrateddiabetes.com/basal-testing/).

### Care sunt aspectele practice ale utilizării unui sistem de tip buclă?

#### Protecția parolei

Dacă nu doriți ca setările dumneavoastră să poată fi schimbate cu ușurință, puteți stabili o parolă pentru a proteja secțiunea de setări prin selectarea opțiunii "parolă pentru setări" și introducerea unei parole. Data viitoare când veți intra în meniul de setări, vi se va cere o parolă înainte de a vi se permite accesul. Dacă veți dori să eliminați parola mai târziu, mergeți la "parolă pentru setări" și ștergeți textul.

#### Ceasuri inteligente cu Android Wear

Dacă intenționați să folosiți aplicația de ceas Wear pentru a bolusa sau pentru a schimba setări, atunci va trebui să activați notificările pentru AndroidAPS și să vă asigurați că nu sunt blocate. Confirmarea acțiunilor vine sub formă de notificare.

(FAQ-disconnect-pump)=

#### Deconectați pompa

Dacă vă scoateți pompa pentru duș, băi, înot, sporturi sau alte activități, trebuie să aduceți la cunoștință programului AAPS că nu s-a administrat insulină, pentru a menține IOB corect.

Pompa poate fi deconectată folosind pictograma de stare a buclei de pe [ecranul acasă al AAPS](#AapsScreens-loop-status).

#### Recomandări care se bazează nu doar pe o singură citire CGM

Pentru siguranță, recomandările se bazează nu doar pe o singură citire a CGM, ci pe variația medie. Prin urmare, dacă pierdeți unele citiri, ar putea dura ceva timp după ce începeți să primiți din nou date înainte ca AAPS să facă din nou bucla.

#### Referințe suplimentare

Există mai multe bloguri cu sfaturi bune pentru a vă ajuta să înțelegeți cum e mai bine de făcut atunci când folosiți bucla închisă:

- [Optimizare setări](https://seemycgm.com/2017/10/29/fine-tuning-settings/) vedeți CGM-ul
- [De ce contează DIA](https://seemycgm.com/2017/08/09/why-dia-matters/) Vedeți CGM
- [Cum să limităm vârfurile de după masă](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DiYPS
- [Hormonii și autosens](https://seemycgm.com/2017/06/06/hormones-2/) Vedeți CGM

### Ce echipamente pentru situații de urgență se recomandă să aveți la dumneavoastră întotdeauna?

Trebuie să aveți cu dumneavoastră același echipament de urgență ca oricare altă persoană cu DZ1 ce folosește tratamentul cu pompă de insulină. Când folosiți bucla în AAPS, este recomandat cu tărie să aveți următorul echipament suplimentar cu sau în apropierea dumneavoastră:

- Un pachet de baterii și cabluri pentru a încărca telefonul inteligent, ceasul și (dacă este necesar) cititorul Bluetooth sau dispozitivul de tip RileyLink
- Baterii pentru pompă
- Actualele fișiere [apk](../SettingUpAaps/BuildingAaps.md) și [preferințele](../Maintenance/ExportImportSettings.md) pentru AAPS și orice alte aplicații pe care le utilizați (spre exemplu xDrip+, Dexcom construit de dumneavoastră) atât la nivel local, cât și în cloud (Dropbox, Google Drive).

### Cum pot atașa în siguranță și în mod securizat dispozitivul CGM/FGM?

Puteți să-l lipiți cu o bandă. Există mai mulți plasturi de fixare pre-perforați, disponibili pentru sistemele CGM obișnuite (căutați pe Google, eBay sau Amazon). Unii utilizatori de bucle folosesc banda simplă kinesiologică sau rocktape.

Îl puteți repara. Puteți, de asemenea, să achiziționați benzi pentru braț care fixează senzorul CGM/FGM cu o bandă elastică (căutați pe Google, eBay sau Amazon).

## Algoritm APS

### De ce se afișează "dia:3" în secțiunea "OpenAPS AMA" deși aveți o altă DIA setată în profil?

![AMA 3h](../images/Screenshot_AMA3h.png)

În AMA, DIA nu înseamnă de fapt "durata de acțiune a insulinei". Este un parametru care era anterior conectat la DIA. Acum, înseamnă "în care timp ar trebui să se termine corecția". Nu are nicio legătură cu calcularea IOB. În OpenAPS SMB, acest parametru nu mai este necesar.

## Alte setări

### Setări Nightscout

#### AAPSClient spune „nu este permis” și nu încarcă date. Ce pot face?

În AAPSClient verificați "Setări conexiune". Poate că de fapt nu sunteți într-o rețea WLAN permisă sau ați activat 'Doar dacă se încarcă' iar cablul de încărcare nu este atașat.

### Setări CGM

#### De ce AAPS spune că 'sursa de glicemie nu suportă filtrarea avansată'?

Dacă folosiți alt CGM/FGM decât Dexcom G5 sau G6 în modul nativ xDrip, veți primi această alertă în fila OpenAPS din AAPS. Vedeți [Omogenizarea datelor glicemiei](../CompatibleCgms/SmoothingBloodGlucoseData.md) pentru mai multe detalii.

### Pompă

#### Unde să montați pompa pe corp?

Există nenumărate posibilități de a plasa pompa. Nu contează dacă folosiți sau nu bucla.

#### Baterii

Folosirea buclei poate duce la reducerea timpului de utilizare a bateriilor, deoarece sistemul interacționează cu pompa mult mai des decât ar face-o un utilizator obișnuit. Se recomandă să schimbați bateriile la 25%, deoarece comunicația devine problematică sub această valoare. Puteți seta alarme de avertizare pentru bateria pompei folosind variabila PUMP_WARN_BATT_P în site-ul dumneavoastră Nightscout. Sfaturi pentru îmbunătățirea vieții bateriilor:

- reduceți perioada de timp cât ecranul pompei stă aprins (din setările pompei)
- reduceți perioada de timp cât iluminarea ecranului pompei este pornită (din setările pompei)
- selectați notificarea să fie prin intermediul unui sunet mai degrabă decât prin vibrație (în setările pompei)
- apăsați butoanele pompei doar pentru revenirea pistonului, folosiți AAPS pentru a verifica istoricul, nivelul bateriilor și volumul rezervorului.
- Aplicația AAPS poate fi adesea închisă pentru a economisi energie sau pentru a elibera memoria RAM pe unele telefoane. Când AAPS este reinițializat la fiecare pornire, se stabilește o conexiune Bluetooth cu pompa și apoi sunt recitite rata bazală curentă și istoricul de bolusuri. Acest lucru consumă baterie. Pentru a vedea dacă se întâmplă astfel, mergeți la Preferințe > NSClient și activați 'Înregistrează pornirea aplicației pe NS'. Nightscout va înregistra un eveniment la fiecare restartare a AAPS, ceea ce va ușura identificarea problemei. Pentru a reduce apariția acestui fenomen, adaugă aplicația AAPS în „lista albă” (whitelist) la setările bateriei telefonului, pentru a împiedica monitorizarea consumului de energie să închidă aplicația.
    
    De exemplu, pentru a acorda toate permisiunile pe un telefon Samsung care rulează cu Android Pie:
    
    - Mergeți la Setări-> Îngrijire dispozitiv-> Baterie 
    - Derulați până când găsiți AAPS și selectați-l
    - Dezactivați "Pune aplicația în repaus"
    - DE ASEMENEA mergeți la Setări -> Aplicații -> (Simbolul format din trei cercuri în dreapta sus a ecranului) selectați "acces special" -> Optimizare utilizare baterie
    - Derulați la AAPS și asigurați-vă că este deselectat.

- curățați bornele bateriei cu tampon cu alcool, pentru a vă asigura că nu a rămas ceară/unsoare.

- pentru [pompele Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md) procedura de pornire trage un curent mare prin baterie pentru a rupe în mod intenționat filmul de pasivizare (care previne pierderea de energie în timp ce este în stocare), dar nu funcționează întotdeauna pentru a-l rupe 100%. Fie scoateți și reintroduceți bateria de 2-3 ori până când se afișează 100% pe ecran, fie utilizați cheia bateriei pentru o scurtcircuitare rapidă înainte de a fi introdusă, prin aplicarea sa la ambele borne pentru o fracțiune de secundă.
- vedeți de asemenea mai multe sfaturi pentru [tipuri speciale de baterie](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Schimbarea rezervoarelor și a canulelor

Schimbarea cartușului nu poate fi făcută prin intermediul AAPS, ci trebuie efectuată ca înainte direct prin pompă.

- Apăsați lung pe "Buclă deschisă"/"Buclă închisă" pe pagina principală a AAPS și selectați 'Suspendați bucla pentru 1h'
- Acum deconectați pompa și schimbați rezervorul conform instrucțiunilor pompei.
- De asemenea, amorsarea și umplerea tubului și a canulei se pot face direct din pompă. În acest caz utilizați butonul [AMORSARE/UMPLERE](#screens-action-tab) din pagina de acțiuni doar pentru a înregistra modificarea.
- Odată reconectat la pompă reporniți bucla prin apăsare lungă pe 'Suspendat (X m)'.

Schimbarea unei canule nu utilizează însă funcția „ amorsare set de perfuzie” a pompei, ci umple setul de perfuzie și/sau canula folosind un bolus care nu apare în istoricul de bolusuri. Aceasta înseamnă că nu întrerupe o rată bazală temporară care rulează în prezent. În pagina Acțiuni (Act), utilizați butonul de [AMORSARE/UMPLERE](#screens-action-tab) pentru a seta cantitatea de insulină necesară pentru a umple setul de infuzie și a începe amorsarea. Dacă cantitatea nu este suficientă, repetați umplerea. Puteți seta butoanele pentru cantitatea standard în Preferințe > Altele > Cantități standard de insulină umplere/amorsare. Vedeți instrucțiunile cuprinse în prezentarea aflată în cutia canulei pentru a vedea de câte unități este nevoie pentru a face amorsarea pompei, în funcție de lungimea acului și a tubului.

### Fundal

Puteți găsi imaginea de fundal AAPS pentru telefonul dumneavoastră pe [pagina de telefoane](#Phones-phone-wallpaper).

### Utilizare zilnică

#### Igienă

##### Ce trebuie făcut când se face duș sau baie?

Puteți îndepărta pompa în timp ce faceți duș sau baie. Pentru această perioadă scurtă de timp s-ar putea să nu aveți nevoie de ea, dar ar trebui să anunțați AAPS că v-ați deconectat astfel încât calculele IOB să fie corecte. Vedeți [descrierea de mai sus](#FAQ-disconnect-pump).

#### Serviciu

În funcție de tipul locului de muncă, veți putea alege să folosiți diferiți factori de tratament în zilele lucrătoare. Ca persoană care folosește o buclă, ar trebui să luați în considerare o [schimbare de profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) pentru ziua tipică de muncă. De exemplu, puteți trece la un profil mai mare de 100% dacă aveți o activitate mai puțin solicitantă (spre exemplu statul la un birou), sau mai puțin de 100% dacă sunteți activ și în picioare toată ziua. Ați putea de asemenea să luați în considerare o țintă temporară mare sau mică, sau o schimbare de timp [a profilului dumneavoastră](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) atunci când lucrați mult mai devreme sau mai târziu decât este obișnuit, sau dacă lucrezi în schimburi diferite. Puteți crea, de asemenea, un al doilea profil (de exemplu, "acasă" și "zi lucrătoare") și puteți face o modificare de profil zilnic pentru profilul de care aveți nevoie.

### Activități de agrement

(FAQ-sports)=

#### Sporturi

Trebuie să vă adaptați vechile obiceiuri sportive din vremurile dinaintea buclei. Dacă doar ați consuma mai mulți carbohidrați la fel ca înainte, sistemul de buclă închisă îi va recunoaște și îi va corecta în mod corespunzător.

Deci, ați avea mai mulți carbohidrați la bord, dar în același timp bucla ar contracara și va elibera insulina.

Când folosiți bucla ar trebui să încercați acești pași:

- Faceți o [schimbare profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Setați o [țintă temporară de activitate](#TempTargets-activity-temp-target) peste ținta standard.
- Dacă utilizați SMB, asigurați-vă că ["Activați SMB cu ținte temporare mari"](#Open-APS-features-enable-smb-with-high-temp-targets) și ["Activați SMB întotdeauna"](#Open-APS-features-enable-smb-always) sunt dezactivate.

Pre- și post-procesarea acestor setări sunt importante. Faceți schimbările la timp, înainte de sport si luați în considerare efectul de umplere cu glucoză a mușchilor.

Dacă faceți sport în mod regulat în aceeași perioadă a zilei (spre exemplu o oră de sport în sală) puteți lua în considerare utilizarea unei [automatizări](../DailyLifeWithAaps/Automations.md) pentru schimbarea de profil și o țintă temporară. Automatizarea bazată pe locație ar putea fi de asemenea o idee, dar face preprocesarea mai dificilă.

Procentul de schimbare a profilului, valoarea pentru ținta temporară a activității tale și momentul cel mai bun pentru modificări sunt setări individuale. Începeți pe partea sigură dacă sunteți în căutarea valorii corecte pentru dumneavoastră (începeți cu un procent mai mic și cu o țintă temporară mai mare).

#### Sex

Puteți îndepărta pompa pentru a fi „liber”, dar trebuie să anunțați AAPS astfel încât calculele IOB să fie corecte. Vedeți [descrierea de mai sus](#FAQ-disconnect-pump).

#### Consumul de alcool

Consumul de alcool este riscant în modul de buclă închisă deoarece algoritmul nu poate prezice corect dacă alcoolul a influențat glicemia. Trebuie să vă verificați propria metodă de tratare în acest caz, prin folosirea următoarelor funcții în AAPS:

- Dezactivarea modului de buclă închisă și tratarea manuală a diabetului sau
- stabilirea unor ținte temporare ridicate și dezactivarea UAM pentru a evita ca bucla să crească IOB din cauza unei mese inexistente sau
- faceți o schimbare de profil la mult sub 100% 

Atunci când consumați alcool, trebuie să fiți întotdeauna atent la CGM pentru a evita manual o hipoglicemie prin consumul de carbohidrați.

#### Dormitul

##### Cum pot repeta în timpul nopții fără radiații mobile și WiFi?

Mulți utilizatori activează modul avion pe timp de noapte. Dacă doriți ca bucla să vă ajute atunci când dormiți, procedați după cum urmează (aceasta va funcționa doar cu o sursă locală de glicemie, cum ar fi xDrip+ sau aplicația [Dexcom modificată](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), NU va funcționa dacă obțineți citirile de glicemie prin Nightscout):

1. Activați modul avion în telefon.
2. Așteptați până când modul avion este activ.
3. Activați Bluetooth.

Acum nu mai primiți apeluri și nici nu sunteți conectat la internet. Dar bucla încă rulează.

Unele persoane au descoperit probleme cu transmiterea locală (AAPS nu primește valorile glicemiei din xDrip+) atunci când telefonul este în modul avion. Mergeți la Setări > Setări între aplicații > Identificați destinatarul și introduceți <0>info.nightscout.androidaps</0>.

![xDrip+ identificare receptor prin setări de bază inter-aplicații](../images/xDrip_InterApp_NS.png)

#### Călătoritul

##### Cum să facem față schimbărilor de fus orar?

Cu Dana R și Dana R Korean nu trebuie să faci nimic. Pentru alte pompe, vedeți pagina [călătoritul prin diferite fusuri orare](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) pentru mai multe detalii.

### Subiecte medicale

#### Spitalizare

Dacă doriți să partajați unele informații despre AAPS și bucla artizanală cu medicii dumneavoastră, puteți să tipăriți [ghidul AAPS pentru medici](../UsefulLinks/ClinicianGuideToAaps.md).

#### Programare medicală la endocrinologul dumneavoastră

##### Raportare

Puteți afișa rapoartele Nightscout (https://YOUR-NS-SITE.com/report) sau să verificați [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Întrebări frecvente pe Discord și răspunsurile lor...

### Problema mea nu este enumerată aici.

[Informații pentru a primi ajutor.](../GettingHelp/WhereCanIGetHelp.md)

### Problema mea nu este enumerată aici, dar am găsit soluția

[Informații pentru a primi ajutor.](../GettingHelp/WhereCanIGetHelp.md)

**Reamintiți-ne să adăugăm soluția dumneavoastră la această listă!**

### AAPS se oprește zilnic cam la același timp.

Opriți Google Play Protect. Verificați de aplicațiile de "curățare" (spre exemplu CCleaner șamd) și dezinstalați-le. Meniul AAPS / 3 puncte / Despre / urmați linkul "Păstrați aplicația rulând în fundal" pentru a opri toate optimizările bateriei.

### Cum să-mi organizez copiile de rezervă?

Exportați setările în mod regulat: după fiecare schimbare de pompă, după modificarea profilului, atunci când ați validat un obiectiv, dacă schimbați pompa… Chiar dacă nimic nu se schimbă, exportați o dată pe lună. Păstrați câteva fișiere vechi de export.

Copiați pe un disc de internet (Dropbox, Google șamd): toate fișierele apk pe care le-ați folosit pentru a instala aplicații pe telefon (AAPS, xDrip, BYODA, LibreLink modificat șamd), precum și fișierele de setare exportate din toate aplicațiile dumneavoastră.

### Am probleme, erori în construirea aplicației.

Vă rog

- verificați [Depanare Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) pentru erori tipice și
- sfaturile pentru [o parcurgere pas cu pas](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### Sunt blocat la un obiectiv și au nevoie de ajutor.

Faceți o captură de ecran întrebărilor și răspunsurilor. Publicați-le pe canalul Discord al AAPS. Nu uitați să spuneți care sunt opțiunile pe care le alegeți (sau nu) și de ce. Veți primi sugestii și ajutor, dar va trebui să găsiți răspunsurile.

### Cum să resetați parola în AAPS v2.8.x?

Deschideți meniul hamburger, porniți asistentul de configurare și introduceți o nouă parolă atunci când vi se cere. Puteți renunța la asistent după etapa de parolă.

### Cum să resetați parola în AAPS v3.x

Găsiți documentația [aici](#Update3_0-reset-master-password).

### Dispozitivul de tip RileyLink/pompa nu răspund (RL/OL/EmaLink…)

Cu unele telefoane, există deconectări Bluetooth de la dispozitivul de legătură (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

### Build error: file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

### Alert: Running dev version. Closed loop is disabled

AAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

### Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

### How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

### Pump unreachable alerts several times a day or at night.

Telefonul dumneavoastră ar putea suspenda serviciile AAPS sau chiar Bluetooth, ceea ce determină pierderea conexiunii la RL (a se vedea economisirea bateriei) Luați în considerare configurarea alertelor de inaccesibilitate la 120 de minute prin accesarea meniului cu trei puncte din partea dreaptă sus, și selectați Preferințe->Alerte Locale->Pompă prag inaccesibil [min].

### Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatments, then 3 dots menu again and you have different options available.

### Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

### Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

### Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.