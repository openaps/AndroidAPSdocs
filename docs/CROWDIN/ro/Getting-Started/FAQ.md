# FAQ pentru cei care folosesc bucla

Cum se pot adăuga întrebări în secțiunea FAQ: urmați aceste [instrucțiuni](../make-a-PR.md)

# General

## Pot doar să descarc fișierul de instalare AndroidAPS?

Nu. Nu există nici un fişier apk descărcabil pentru AndroidAPS. Trebuie să ți-l [construiești](../Installing-AndroidAPS/Building-APK.md) singur. Iată de ce:

AndroidAPS este utilizat pentru a controla pompa şi a administra insulină. În conformitate cu reglementările actuale, în Europa, toate sistemele din clasa IIa sau IIb sunt dispozitive medicale care necesită aprobare din partea regulatorilor (un marcaj CE), și care trebuie să aibă diferite studii și semnalizări ale calitații. Distribuirea unui dispozitiv nereglementat este ilegală. Reglementări similare există şi în alte părţi ale lumii.

Acest regulament nu se limitează la vânzări (în sensul obţinerii de bani pentru ceva), ci se aplică oricărui mod de distribuire (chiar şi acordarea gratuită). Construirea unui dispozitiv medical pentru tine este singura modalitate de a nu fi afectat de aceste reglementări.

De aceea fișierele apk nu sunt disponibile.

## Cum să încep?

În primul rând, trebuie să **ai componentele hardware compatibile pentru loop**:

* A [supported insulin pump](./Pump-Choices.md), 
* un [telefon cu Android](Phones.md) (sistemul Apple iOS nu este suportat de AndroidAPS-poti verifica [iOS Loop](https://loopkit.github.io/loopdocs/)) şi 
* un [sistem continuu de monitorizare a glicemiei](../Configuration/BG-Source.rst). 

În al doilea rând, trebuie să **configurezi hardware-ul**. Vezi [example setup with step-by-step tutorial](Sample-Setup.md).

În al treilea rând, trebuie să **configurați componentele software**: AndroidAPS și sursa CGM/FGM.

În al patrulea rând, trebuie să învățați și **să înțelegeți design-ul de referință OpenAPS pentru a vă verifica factorii de tratament**. Principiile fundamentale ale buclei închise se bazează pe faptul că rata de bazală şi raportul carbohidraților sunt exacte. Toate recomandările presupun că nevoile dvs. bazale sunt îndeplinite și orice vârfuri sau văi pe care le vedeți sunt un rezultat al altor factori care necesită, prin urmare, unele ajustări punctuale (exercițiu, stres etc.). Ajustările pe care le poate face bucla sunt limitate pentru siguranță (a se vedea bazala temporară maximă permisă în [designul de referință al OpenAPS](https://openaps.org/reference-design/)), ceea ce înseamnă că nu veți dori să pierdeți doza permisă pe corecții necesare pentru a repara greșelile bazalei. Dacă, de exemplu, ajungeți în mod frecvent la rate temporare joase atunci când se apropie o masă, atunci este foarte probabil că sunt necesare ajustări ale bazalei. Puteți folosi [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) pe o bază mare de date pentru a afla sugestii despre cum ați putea ajusta ratele bazale și/sau ISF-ul și dacă ratele de carbohidrați trebuie schimbate. Sau puteți testa și stabili ratele bazale [folosind metoda tradițională](https://integrateddiabetes.com/basal-testing/).

## Ce beneficii am dacă folosesc bucla?

### Protecția parolei

Dacă nu doriți ca setările dumneavoastră să poată fi schimbate cu ușurință, puteți stabili o parolă pentru a proteja secțiunea de setări prin selectarea opțiunii ”parolă pentru setări” și introducerea unei parole. Data viitoare când veți intra în meniul de setări, vi se va cere o parolă înainte de a vi se permite accesul. Dacă veți dori să eliminați parola mai târziu, mergeți la "parolă pentru setări" și ștergeți textul.

### Ceasuri cu Android Wear

Dacă intenționați să folosiți aplicația de ceas Wear pentru a bolusa sau pentru a schimba setări, atunci va trebui să activați notificările pentru AndroidAPS. Confirmarea acțiunilor vine sub formă de notificare.

### Deconectează pompa

Dacă scoateţi pompa pentru duş/baie/înot/sport etc. trebuie să informaţi AndroidAPS că nu este administrată insulină pentru a menţine IOB corect.

* Apăsați lung butonul 'Buclă închisă' (va fi numit 'Buclă deschisă' atunci când nu sunteți încă în buclă închisă) în partea de sus a ecranului. 
* Selectați **'Deconectați pompa pentru XY minute'**
* Aceasta va seta RBT 0 pentru această perioadă de timp.
* Durata minimă de timp a unei deconectări este în directă legătură cu durata minimă a RBT care poate fi setat pe pompă. Deci, dacă doriţi să o deconectaţi pentru o perioadă mai scurtă de timp, trebuie să utilizaţi cel mai scurt timp de deconectare disponibil pentru pompa dumneavoastră şi să vă reconectaţi manual, aşa cum este descris mai jos.
* Butonul 'Buclă închisă' (sau 'Buclă deschisă') se va colora în roșu și va fi numit 'Deconectat (xx m)' afișând timpul rămas din deconectare.
* AAPS va reconecta automat pompa după ora aleasă și bucla dvs. închisă va începe să funcționeze din nou.
    
    ![Deconectează pompa](../images/PumpDisconnect.png)

* Dacă timpul selectat a fost prea lung, vă puteţi reconecta manual.

* Apăsați lung pe butonul roșu 'Deconectat (xx m)'.
* Selectați 'Reconectare pompă'
    
    ![Reconectare pompă](../images/PumpReconnect.png)

### Recomandări care se bazează nu doar pe o singură citire CGM

Pentru sigurantă, recomandările se bazează nu doar pe o singură citire a CGM, ci pe variația medie. Prin urmare, dacă pierdeți unele citiri, ar putea dura ceva timp după ce reprimiți date pentru ca AndroidAPS să intre din nou în buclă.

### Referințe suplimentare

Există mai multe bloguri cu sfaturi bune pentru a vă ajuta să înţelegeţi cum e mai bine de făcut atunci când folosiți bucla închisă:

* [Optimizare setări](https://seemycgm.com/2017/10/29/fine-tuning-settings/) vedeți CGM-ul
* [De ce contează DIA](https://seemycgm.com/2017/08/09/why-dia-matters/) Vedeți CGM
* [Cum să limităm vârfurile postprandiale](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DiYPS
* [Hormonii și autosens](https://seemycgm.com/2017/06/06/hormones-2/) Vedeți CGM

## Ce echipament de urgență este recomandat să iau cu mine?

În primul rând, trebuie să luaţi acelaşi echipament de urgenţă cu dumneavoastră ca oricare alt diabetic ce utilizează tratament cu pompa de insulină. Ca buclă cu AndroidAPS, este recomandat cu tărie să aveți următorul echipament suplimentar cu sau în apropierea dumneavoastră:

* Baterie externă pentru încărcarea telefonului, ceas și (poate) cititor bluetooth
* Copie de rezervă în cloud (Dropbox, Google Drive...) a aplicațiilor pe care le utilizați: cel mai recent fișier apk al AndroidAPS și parola pentru magazinului de cheie, fișierul de setări AndroidAPS, fișierul de setări xDrip, aplicația Dexcom modificată, ...
* Baterii pentru pompă

## Cum să port un CGM/FGM în siguranță?

Puteți să îl bandajați: Se vând "plasturi” gata perforați pentru diverse tipuri de CGM (întrebați Google sau ebay). Unii utilizatori de bucle folosesc banda simplă kinesio sau rocktape.

Puteţi să-l fixați: Se vând brăţări de braţ care fixează CGM/FGM-ul cu o bandă de cauciuc (întrebaţi Google sau ebay).

# Setări AndroidAPS

Următoarea listă are scopul de a vă ajuta să optimizaţi setările. Cel mai bine ar fi să începem de sus şi să lucrăm până jos. Scopul de a obţine o setare bună înainte de a schimba o altă setare. Lucraţi mai degrabă în paşi mici, decât să faceţi schimbări mari dintr-o dată. Puteți folosi [Autoadaptare](https://autotuneweb.azurewebsites.net/) pentru a vă ghida, cu toate că nu trebuie urmărit orbeşte: este posibil să nu funcţioneze bine pentru dumneavoastră sau în toate circumstanţele. Țineți cont că setările interacționează una cu alta - puteți avea setări "greșite" care funcționează bine împreună în unele circumstanțe (de ex. dacă se întâmplă ca o bazală prea mare să fie în același timp cu un nivel prea ridicat al CR), dar nu și în altele. Acest lucru înseamnă că trebuie să luaţi în considerare toate setările şi să verificaţi că acestea lucrează împreună într-o varietate de circumstanţe.

## Durata de Acțiune a Insulinei (DIA)

### Descriere & testare

Perioada de timp în care insulina ajunge la zero.

Aceasta este destul de des setată prea scurt. Majoritatea oamenilor vor dori cel puțin 5 ore, posibil 6 sau 7.

### Impact

DIA prea scurtă poate duce la glicemii mici. Și invers.

Dacă DIA este prea scurtă, AAPS crede prea devreme că bolusul anterior este consumat în totalitate și, la o valoare totuși crescută a glicemiei, vă va da mai mult. (De fapt, nu aşteaptă atât de mult, ci prezice ce se va întâmpla şi continuă să adauge insulină). Acest lucru creează, în esenţă, „stivuirea insulinei” de care AAPS nu este conştient.

Un exemplu de DIA prea scurtă este un hiper urmat de o supracorecție AAPS care generează ulterior un hipo.

## Planificare rată bazală (U/h)

### Descriere & testare

Cantitatea de insulină dintr-o anumită oră pentru a menţine glicemia la un nivel stabil.

Testaţi ratele bazale prin suspendarea buclei, post, aşteptare circa 5 ore după mâncare, şi apoi se urmăreste cum s-a modificat glicemia. Repetaţi de câteva ori.

Dacă glicemia scade, rata bazală este prea mare. Și invers.

### Impact

O rată bazală prea mare poate duce la valori mici ale glicemiei. Și invers.

‘Scenariile de referință’ AAPS în raport cu rata bazală implicită. În cazul în care rata bazală este prea mare, un „punct zero” va fi considerat ca IOB mai negativ decât ar trebui. Acest lucru va duce la efectuarea de către AAPS a mai multor corecții ulterioare decât ar trebui ca să aducă IOB la zero.

Deci, o rată bazală prea mare va crea glicemii mici atât cu rata implicită, dar de asemenea, timp de câteva ore, deoarece AAPS corectează către țintă.

Dimpotrivă, o rată bazală prea scăzută poate duce la valori ridicate ale glicemiei și la imposibilitatea de a scădea nivelele până la țintă.

## Factor de sensibilitate la insulină (ISF) (mmol/l/U sau mg/dl/U)

### Descriere & testare

Scăderea aşteptată a glicemiei după administrarea 1U de insulină.

Presupunând că bazala este corectă, puteţi testa acest lucru prin suspendarea buclei, verificarea că IOB este zero, şi administrarea câtorva comprimate de glucoză pentru a ajunge la o valoare stabilă „înaltă”.

Apoi luaţi o cantitate estimată de insulină (conform 1/ISF) pentru a ajunge la nivelul ţintă al glicemiei.

Aveți grijă deoarece acest lucru este adesea stabilit prea jos. Prea mic înseamnă că 1 U va scădea BG mai repede decât era de aşteptat.

### Impact

**Un ISF mai mic** (ex.: 40 în loc de 50) = mai agresiv/mai puternic, ceea ce duce la o scădere mai mare a glicemiei pentru fiecare unitate de insulină. Dacă este prea scăzut, acest lucru poate duce la valori scăzute ale glicemiei.

**Un ISF mai mare** (ex.: 45 în loc de 35) = mai puțin agresiv/mai slab, ceea ce duce la o scădere mai mică a valorilor glicemiei pentru fiecare unitate de insulină. Dacă este prea mare, acest lucru poate duce la valori ridicate ale glicemiei.

**Example:**

* Glicemia este de 190 mg/dl (10,5 mmol) şi ţinta este de 100 mg/dl (5,6 mmol). 
* Deci, doriţi o corecţie de 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

Un ISF care este prea scăzut (nu este neobișnuit) poate duce la 'supra corecţii', deoarece AAPS crede că are nevoie de mai multă insulină pentru a corecta un BG înalt decât face de fapt. Acest lucru poate duce la o evoluție a glicemiei tip „carusel” (mai ales când se postește). În această situaţie, trebuie să creşteţi ISF. Acest lucru va însemna că AAPS va administra doze mai mici de corecţie, iar acest lucru va evita supracorectarea unei glicemii mari, rezultând o glicemie mică.

În schimb, un ISF prea mare poate avea ca rezultat subcorecții, ceea ce înseamnă că BG rămâne mai sus față de ţintă-în mod special vizibil peste noapte.

## Raportul insulină la carbohidraţii (IC) (g/U)

### Descriere & testare

Grame de carbohidraţi pentru fiecare unitate de insulină.

Unii oameni folosesc de asemenea ca abreviere I:C în loc de IC sau vorbesc despre raportul carb (CR).

Presupunând că bazala este corectă, puteți testa prin verificarea că IOB este zero și că sunteți în valoarea țintă, luaţi exact carbohidraţi cunoscuţi şi o cantitate estimată de insulină pe baza raportului dintre insulină şi carbohidraţi. Cel mai bine este să mănânci ca de obicei în acel moment al zilei și să numeri cu precizie carbohidrații.

> **NOTĂ:**
> 
> În unele ţări europene, se utilizează unităţi de pâine pentru determinarea cantității de insulină necesară pentru alimente. At the beginning 1 bread unit equal to 12g of carbs, later some changed to 10g of carbs.
> 
> În acest model s-a stabilit cantitatea de carbohidrați și cantitatea de insulină a fost variabilă. ("Cât insulină este necesară pentru a acoperi o felie de pâine?")
> 
> Când se utilizează IC, cantitatea de insulină este fixă iar cantitatea de carbohidraţi este variabilă. ("Câte grame de carbohidrati pot fi acoperite de o singură unitate de insulină?")
> 
> Example:
> 
> Bread unit factor (BU = 12g carbs): 2,4 U/BU -> You need 2,4 units of insulin when you eat one bread unit.
> 
> IC corespunzător: 12g / 2,4 U = 5,0 g/U -> 5,0gr carbohidrați pot fi acoperiți cu o singură unitate de insulină.
> 
> Factor BU 2,4 U / 12g ===> IC = 12g / 2,4 U = 5,0 g/U
> 
> Tabelele de conversie sunt disponibile online, respectiv [aici](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impact

**Un IC mai mic** = mai puțin mâncare per unitate, adică primești mai multă insulină pentru o anumită cantitate de carbohidrați. De asemenea, poate fi numit "mai agresiv".

**Un IC mai mare** = mai multe alimente pe unitate, adică primești mai puţină insulină pentru o anumită cantitate de carbohidrati. De asemenea, poate fi numit "mai puţin agresiv".

Dacă după ce a fost digerată masa şi IOB s-a întors la zero, glicemia rămâne mai mare decât înainte de mâncare, şansele sunt că IC este prea mare. Dimpotrivă, dacă glicemia dumneavoastră este mai mică decât înainte de a mânca, IC este prea mică.

# Algoritm APS

## De ce se afișează "dia:3" în secțiunea "OpenAPS AMA" deși am o altă DIA setată în profilul meu?

![AMA 3h](../images/Screenshot_AMA3h.png)

În AMA, DIA nu înseamnă de fapt "durata de acțiune a insulinei". Este un parametru care era anterior conectat la DIA. Acum, înseamnă "în care timp ar trebui să se termine corecţia". Nu are nicio legătură cu calcularea IOB-ului. In OpenAPS SMB, there is no need for this parameter any longer.

## Profil

### De ce să folosesc o durată minimă de 5 ore pentru DIA (Durata de acțiune a insulinei) în loc de 2-3 ore?

Aceasta are o explicați foarte bună [în acest articol](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Nu uitați să `ACTIVAȚI PROFILUL` după schimbarea DIA.

### Ce determină bucla să îmi scadă frecvent glicemia la valori hipoglicemice fără COB?

În primul rând, verificați rata bazală și faceți un test pentru rata bazală fără carbohidrați. Dacă este corect, acest comportament este de obicei cauzat de un ISF prea mic. Un ISF prea mic arată de obicei astfel:

![ISF prea mic](../images/isf.jpg)

### Ce cauzează vârfuri mari postprandiale în bucla închisă?

În primul rând, verificați rata bazală și faceți un test pentru rata bazală fără carbohidrați. Dacă este corect și glicemia dumneavoastră scade către țintă după ce carbohidrații sunt absorbiți complet, încercați să setați o țintă temporară 'in curând mâncare' în AndroidAPS cu ceva timp înainte de masă sau gândiți-vă cu diabetologul dumneavoastră la un prebolus adecvat. Dacă glicemia dumneavoastră este prea mare după masă și prea mare chiar și după absorbția completă a carbohidraților, împreuna cu diabetologul dvs. gândiţi-vă la scăderea IC. Dacă glicemia dumneavoastră este prea mare în timp ce există COB și este prea mică după absorbția completă a carbohidraților, împreuna cu diabetologul dvs. gândiți-vă la creșterea CI și la un timp adecvat înainte de bolus.

# Alte setări

## Setări Nightscout

### AndroidAPS NSClient spune „nu este permis” și nu încarcă date. Ce pot face?

În NSClient bifaţi 'Setări conexiune'. Poate că de fapt nu sunteţi într-o rețea WLAN permisă sau aţi activat 'Doar dacă se încarcă' iar cablul de încărcare nu este ataşat.

## Setări CGM

### De ce AndroidAPS spune că 'sursa de glicemie nu suportă filtrarea avansată'?

Dacă folosiți alt CGM/FGM decât Dexcom G5 sau G6 în modul nativ xDrip, veți primi această alertă în fila OpenAPS din AndroidAPS. Vezi [Uniformizare date glicemice](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) pentru mai multe detalii.

## Pompă

### Unde să montați pompa pe corp?

Există nenumărate posibilităţi de a plasa pompa. Nu contează dacă ai sau nu buclă.

### Baterii

Folosirea buclei poate duce la reducerea timpului cât durează bateriile, deoarece sistemul interacționează cu pompa mult mai des decât ar face-o un utilizator obișnuit. Se recomandă să schimbați bateriile la 25%, deoarece comunicația devine problematică sub această valoare. Puteţi seta alarme de avertizare pentru bateria pompei folosind variabila PUMP_WARN_BATT_P în site-ul dumneavoastră Nightscout. Sfaturi pentru îmbunătățirea vieții bateriilor:

* reduceți perioada de timp cât ecranul pompei stă aprins (din setările pompei)
* reduceți perioada de timp cât iluminarea ecranului pompei este pornită (din setările pompei)
* selectați notificarea să fie prin intermediul unui sunet decât prin vibrație (în setările pompei)
* apăsați butoanele pompei doar pentru revenirea pistonului, folosiți AndroidAPS pentru a verifica istoricul, nivelul bateriilor și volumul rezervorului.
* Aplicația AndroidAPS poate fi închisă pentru a economisi energia sau elibera memoria RAM în unele telefoane. Când AndroidAPS este reinițializat la fiecare repornire, se stabilește o conexiune Bluetooth cu pompa și apoi sunt recitite rata bazală curentă și istoricul de bolusuri. Acest lucru consumă baterie. Pentru a vedea dacă se întâmplă astfel, mergeți la Preferences > NSClient și activați 'Log app start to NS'. Nightscout va primi un eveniment la fiecare restartare a AndroidAPS, ceea ce va duce la ușurarea identificării problemei. Pentru a diminua acest lucru, acordați toate permisiunile aplicației AndroidAPS în setările bateriei telefonului pentru ca aplicația de monitorizare a consumului să nu oprească AndroidAPS.
    
    De exemplu, pentru a acorda toate permisiunile pe un telefon Samsung care rulează cu Android Pie:
    
    * Mergeţi la Setări-> Îngrijire dispozitiv-> Baterie 
    * Derulați până când găsiți AndroidAPS și selectați-l 
    * Dezactivați "Pune aplicația în repaus"
    * DE ASEMENEA mergeți la Setări -> Aplicații -> (Simbolul format din trei cercuri în dreapta sus a ecranului) selectați "acces special" -> Optimizare utilizare baterie
    * Derulați la AndroidAPS și asigurați-vă că este dezactivat.

* curățați bornele bateriei cu tampon cu alcool, pentru a vă asigura că nu a rămas ceară/unsoare.

* pentru [pompele Dana R/RS](../Configuration/DanaRS-Insulin-Pump.md) procedura de pornire consumă un curent mare prin baterie pentru a rupe în mod intenţionat filmul de pasivitate (care previne pierderea de energie în timp ce este în stocare), dar nu funcţionează întotdeauna pentru a-l rupe 100%. Fie scoateți și reintroduceți bateria de 2-3 ori până când se afișează 100% pe ecran, fie utilizaţi cheia bateriei pentru scurtcircuitare înainte de a fi introdusă, aplicând la ambele borne pentru o fracțiune de secundă.
* vezi mai multe sfaturi pentru [diverse tipuri de baterii](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Schimbarea rezervoarelor și a canulelor

Schimbarea cartuşului nu poate fi făcută prin intermediul AndroidAPS, ci trebuie efectuată ca înainte direct prin pompă.

* Apăsați lung pe "Buclă deschisă"/"Buclă închisă" pe pagina principală a AndroidAPS și selectați 'Suspendă bucla pentru 1h'
* Acum deconectaţi pompa şi schimbaţi rezervorul conform instrucţiunilor pentru fiecare pompă.
* Also priming and filling tube and cannula can be done directly on the pump. În acest caz utilizaţi butonul [AMORSARE/UMPLERE](../Usage/CPbefore26#pump) din pagina de acţiuni doar pentru a înregistra modificarea.
* Odată reconectat la pompă continuați bucla apăsând lung pe 'Suspendat (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. Aceasta înseamnă că nu întrerupe o rată bazală temporară care rulează în prezent. În pagina Acţiuni (Act), utilizaţi butonul de [AMORSARE/UMPLERE](../Usage/CPbefore26#pump) pentru a seta cantitatea de insulină necesară pentru a umple setul de infuzie şi a începe amorsarea. Dacă cantitatea nu este suficientă, repetați umplerea. Puteți seta butoanele pentru cantitatea standard în Preferințe > Altele > Cantitați standard de insulină umplere/amorsare. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Fundal

Puteți găsi imagini de fundal AndroidAPS pentru telefon pe [pagina de telefoane](../Getting-Started/Phones#phone-background).

## Utilizare zilnică

### Igienă

#### Ce trebuie făcut când se face duș sau baie?

Puteţi îndepărta pompa în timp ce faceți duş sau baie. Pentru această perioadă scurtă de timp, de obicei nu veţi avea nevoie de ea. Dar ar trebui să anunți AAPS despre asta, astfel încât calculele IOB să fie corecte.

Vezi [descrierea de mai sus](../Getting-Started/FAQ#disconnect-pump).

### Serviciu

În funcție de tipul locului de muncă, poate folosiți diferiți factori de tratament în zilele lucrătoare. Ca utilizator de buclă ar trebui să vă gândiți la o [schimbare profil](../Usage/Profiles.md) pentru ziua lucrătoare estimată (de ex. peste 100% pentru 8 ore când staţi si în jur de sau mai puţin de 100% atunci când sunteţi activ); o țintă temporară ridicată sau scăzută, sau o [schimbare de timp a profilului tău](../Usage/Profiles#time-shift) atunci când stai în picioare mai devreme sau mai târziu decât în mod obișnuit. Dacă folosiți [profiluri Nightscout](../Configuration/Config-Builder#ns-profile), puteți crea, de asemenea, un al doilea profil (de ex. „acasă” și „zi lucrătoare”) și efectuați o schimbare zilnică a profilului de care aveți nevoie.

## Activități de agrement

### Sporturi

Trebuie să vă reluați vechile obiceiuri sportive din vremurile dinaintea buclei. Dacă doar ați consuma mai mulți carbohidrați decât înainte, sistemul de buclă închisă îi va recunoaşte şi îi va corecta în mod corespunzător.

Deci, ați avea mai mulți carbohidrați la bord, dar în același timp bucla ar contracara și va elibera insulina.

Când folosiți bucla ar trebui să încercați acești pași:

* Faceți o [schimbare profil](../Usage/Profiles.md) < 100%.
* Setaţi o [ţintă temporară](../Usage/temptarget#activity-temp-target) deasupra ţintei standard.
* Dacă utilizaţi SMB asiguraţi-vă că ["Activare SMB cu ţinte temporare mari"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) şi ["Activare SMB întotdeauna"](../Usage/Open-APS-features#enable-smb-always) sunt dezactivate.

Pre- and post-processing of these settings is important. Faceţi schimbările la timp, înainte de sport şi luaţi în considerare efectul de umplere cu glucoză a muşchilor.

Dacă faceţi sport în mod regulat în aceeași perioadă a zilei (adică clasă de sport în sala) puteţi lua în considerare utilizarea de [automatizare](../Usage/Automation.rst) pentru schimbare profil şi TT. Automatizarea bazată pe locaţie ar putea fi de asemenea o idee, dar face preprocesarea mai dificilă.

Procentul de schimbare a profilului, valoarea pentru ținta temporară a activității tale și momentul cel mai bun pentru modificări sunt setări individuale. Începeți pe partea sigură dacă sunteți în căutarea valorii corecte pentru dvs. (începeți cu un procent mai mic și cu un TT mai mare).

### Sex

Puteţi scoate pompa pentru a fi „liber/ă”, dar trebuie să anunți AAPS, astfel încât calculele IOB să fie corecte.

Vezi [descrierea de mai sus](../Getting-Started/FAQ#disconnect-pump).

### Consumul de alcool

Consumul de alcool este riscant în modul de buclă închisă deoarece algoritmul nu poate prezice corect dacă alcoolul a influențat glicemia. Trebuie să vă verificați propria metodă de tratare în acest caz, folosind următoarele funcții în AndroidAPS:

* Dezactivarea modului de buclă închisă şi tratarea manuală a diabetului sau
* stabilirea unor ținte temporare ridicate și dezactivarea UAM pentru a evita ca bucla să crească IOB din cauza unei mese inexistente sau
* faceți o schimbare de profil la mult sub 100% 

Atunci când consumați alcool, trebuie să fiți întotdeauna atent la CGM pentru a evita manual o hipoglicemie prin consumul de carbohidrati.

### În repaus

#### Cum pot să fac buclă în timpul nopții fără radiații mobile sau WIFI?

Mulţi utilizatori activează modul avion pe timp de noapte. Dacă doriţi ca bucla să vă ajute atunci când dormiţi, procedați după cum urmează (aceasta va funcționa doar cu o sursă locală de glicemie, cum ar fi xDrip+ sau aplicația Dexcom modificată, NU va funcționa dacă obțineți citirile de glicemie prin Nightscout):

1. Activați modul avion în telefon.
2. Aşteptaţi până când modul avion este activ.
3. Activați Bluetooth.

Acum nu mai primiţi apeluri şi nici nu sunteţi conectat la internet. Dar bucla încă rulează.

Unele persoane au descoperit probleme cu transmiterea locală (AAPS nu primește valorile glicemiei din xDrip+) atunci când telefonul este în modul avion. Mergeți la Setări > Setări Inter-app > Identificați destinatarul și introduceți `info.nightscout.androidaps`.

![xDrip+ identificare receptor prin setări de bază inter-aplicații](../images/xDrip_InterApp_NS.png)

### Călătorind

#### Cum să facem faţă schimbărilor de fus orar?

Cu Dana R şi Dana R Korean nu trebuie să faci nimic. Pentru alte pompe, vedeți pagina [traversând fusuri orare](../Usage/Timezone-traveling.md) pentru mai multe detalii.

## Subiecte medicale

### Spitalizare

Dacă doriţi să partajaţi unele informaţii despre AndroidAPS şi buclă cu medicii dumneavoastră, puteţi să tipăriţi [ghidul AndroidAPS pentru medici](../Resources/clinician-guide-to-AndroidAPS.md).

### Programare medicală la endocrinologul dumneavoastră

#### Raportare

Puteți afișa rapoartele Nightscout (https://YOUR-NS-SITE.com/report) sau să verificați [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).