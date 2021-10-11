# Configurarea Sistemului (Config Builder)

În funcție de setările tale poti deschide Config Sistem printr-o filă din partea de sus a ecranului sau prin meniul principal.

![Deschidere Configurarea sistemului](../images/ConfBuild_Open.png)

Configurarea sistemului (Conf) este fila unde activezi sau dezactivezi optiuni ale modulelor. Casetele din partea stângă (A) permit să selectezi ce optiune să folosesti, casetele din partea dreaptă (C) permit să vizualizezi optiunile ca filă (E) în AndroidAPS. În cazul în care caseta din dreapta nu este activa, ajungi la funcție folosind meniul (D) din stânga sus.

În cazul în care în cadrul modulului sunt disponibile setări suplimentare, poti clika pe rotița (B) ca sa ajungi la setările specifice din preferințe.

**Prima configurare:** Începând cu versiunea AAPS 2.0, există un Asistent de Configurare care te orienteaza in stabilire a parametrilor de functionare a AndroidAPS. Apasa meniul reprezentat prin 3 puncte in partea dreaptă sus a ecranului (F) și selecteaza 'Asistent Configurare' pentru a îl folosi.

![Casuta Configurare sistem şi rotita](../images/ConfBuild_ConfigBuilder.png)

## Fila sau meniul principal

Cu bifa de sub simbol poti stabili cum să deschizi secţiunea corespunzătoare a programului.

![Fila sau meniul principal](../images/ConfBuild_TabOrHH.png)

## Profil

Selecteaza profilul bazal pe care vrei să îl folosesti. Vezi pagina [Profile](../Usage/Profiles.md) pentru mai multe informații despre modul de configurare.

### Profil local (recomandat)

Profilul local folosește ratele bazale introduse manual în pompă. La selectarea Profilului Local se creaza o filă nouă în AAPS, in care ratele bazalei citite de la pompa se pot modifica, dacă este necesar. La următoarea schimbare de profil, acestea sunt scrise în pompă la profilul 1. Acest profil este recomandat pentru că nu se bazează pe conexiunea la internet.

Profilurile locale fac parte din [setările exportate](../Usage/ExportImportSettings.rst). Deci asigură-te că ai o copie de rezervă într-un loc sigur.

![Setările profilului local](../images/LocalProfile_Settings.png)

Butoane:

* verde plus: adăugare
* roşu X: ştergere
* săgeată albastră: dublare

Dacă faci modificări la profilul tau, asigura-te că editezi profilul corect. In profile tab there is not always shown the actual profile being used - e.g. if you made a profile switch by using the profile tab on homescreen it may differ from the profile actually shown in profile tab as there is no connection between these.

#### Clonează schimbarea de profil

Poți crea cu ușurință un nou profil local dintr-un comutator de profil. În acest caz, decalajul de timp sau procentul vor fi aplicate noului profil local.

1. Du-te la fila de tratamente.
2. Select ProfileSwitch.
3. Apasa „Clone”.
4. Poti edita noul profil local în fila Profil Local (LP) sau prin meniul principal.

![Clonează schimbarea de profil](../images/LocalProfile_ClonePS.png)

Dacă doresti să treci de la profilul Nightscout la Profilul Local, faci Schimbare de profil in profilul NS și clonezi comutatorul de profil cum e descris mai sus.

#### Încarcă profiluri locale în Nightscout

Profilurile locale pot fi de asemenea încărcate în Nightscout. Setările pot fi găsite în [preferinţe NSClient](../Configuration/Preferences#nsclient).

![Încarcă profiluri locale în Nightscout](../images/LocalProfile_UploadNS2.png)

Avantaje:

* nu este necesară conexiune la internet pentru a schimba Setările profilului
* modificări de profil se pot face direct pe telefon
* un profil nou poate fi creat prin Schimbarea de Profil
* profilurile locale pot fi încărcate în Nightscout

Dezavantaj:

* nimic

### Ajutor Profil

Profilul de ajutor are două funcţii:

1. Găseşte un profil pentru copii
2. Compară două profiluri sau Schimbări de Profil pentru a clona un nou profil

Detaliile sunt explicate pe pagina separată de [ajutor profil](../Configuration/profilehelper.rst).

### Profil NS

Profil NS folosește profilele pe care le-ai salvat în site-ul tau Nightscout (https://[yournightscoutsiteaddress]/profile). Poți folosi [Schimbare Profil](../Usage/Profiles.md) pentru a alege care dintre profiluri este activ; acesta functie scrie profilul în pompă în cazul unei erori AndroidAPS. Asa se pot creea cu ușurință mai multe profiluri în Nightscout (ex.. munca, acasa, sporturi, vacante, etc). La scurt timp după ce ai făcut clic pe "Salvare", acestea vor fi transferate la AAPS dacă smartphone-ul este online. Chiar şi fără conexiune la Internet sau fără conexiune la Nightscout, profilurile Nightscout sunt disponibile în AAPS după ce au fost sincronizate.

Fă o [schimbare de profil](../Getting-Started/Screenshots.md#current-profile) pentru a activa un profil din Nightscout. După schimbarea profilului, AAPS va înscrie profilul selectat în pompă, astfel încât acesta sa fie disponibil în caz de urgentă si să continue să ruleze fară AAPS.

Avantaje:

* profiluri multiple
* uşor de editat pe PC sau tabletă

Dezavantaj:

* fara modificări locale la setările de profil
* fara posibilitatea schimbarii profilului direct de pe telefon

## Insulină

![Tip insulină](../images/ConfBuild_Insulin.png)

* Alegeți tipul de curbă de acțiune a insulinei pe care o folosiți.
* Toate opțiunile 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' și 'Free-Peak Oref' au formă exponențială. Mai multe informaţii sunt listate în [Documentație OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* Curbele vor varia în funcţie de DIA şi de momentul de vârf.
    
    * Linia VIOLET arată cât de multă **insulină rămâne** după ce a fost injectată in timp ce se consumă.
    * Linia ALBASTRĂ arată **cât de activă** este insulina.

### DIA

* DIA (duration of insulin acting = durata de actiune a insulinei) nu este la fel pentru toata lumea. Trebuie să te testezi ca sa stabilesti care este durata de actiune a insulinei asupra ta. 
* Dar trebuie ca durata sa fie de cel puţin 5 ore.
* Pentru multe persoane care utilizează insuline ultra-rapide cum ar fi Fiasp, practic nu mai există nici un efect vizibil după 3-4 ore, chiar dacă de regulă mai sunt disponibile 0,0xx unităţi. Cantitatea reziduală totusi ar putea avea efect, de exemplu în timpul sportului. De aceea AndroidAPS utilizează minim 5 ore ca DIA.
* Poti citi mai multe despre DIA in sectiunea Insulin Profile pe [aceasta pagina](../Getting-Started/Screenshots#insulin-profile). 

### Diferenţe între tipurile de insulină

* Pentru insuline cu durata de 'Actiune-Rapidă', 'Ultra-Rapida' și 'Lyumjev', DIA este singura variabilă pe care o poti modifica, durata până la vârf este prestabilita. 
* Optiunea Insulina Fara-Varf (Free-Peak) permite să ajusezi atât DIA cât şi dutata pana la vârf; trebuie să fie folosita numai de utilizatori avansați cand cunosc efectele acestor setări. 
* [Graficul curbe insulina](../Getting-Started/Screenshots#insulin-profile) ajută să înţelegi diferite curbe. 
* Îl poti vizualiza ca o fila activand bifa, in caz contrar va fi în meniul principal.

#### Oref Insulină-Rapidă

* recomandat pentru Humalog, Novolog şi Novorapid
* DIA = cel puţin 5 ore
* Durata pana la Vârf = 75 minute după injectare (prestabilita, nemodificabila)

#### Oref Insulină-UltraRapidă

* recomandat pentru FIASP
* DIA = cel puţin 5 ore
* Durata pana la Vârf Durata pana la Varf = 55 minute după injecţie (prestabilita, nemodificabila)

#### Lyumjev

* profil special de insulină pentru Lyumjev
* DIA = cel puţin 5 ore
* Durata pana la Vârf = 45 minute după injectare (prestabilita, nemodificabila)

#### Oref Fara-Vârf

* La profilul "0ref Fara-Varf" poti introduce individual durata pana la vârf.
* DIA este setata automat la 5 ore dacă in profil nu se specifica o durata mai mare.
* Acest profil este recomandat in situatia in care se utilizează o insulină nelistata in aplicatie sau cand se utilizeaza amestec de insuline.

## Sursă valoare glicemie

Selecteaza sursa valorilor glicemiei pe care o utilizezi- vezi pagina [BG Source](BG-Source.rst) pentru mai multe informații despre configurare.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* Glicemie NSClient
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - doar versiunea 4.15.57 sau versiuni mai recente sunt compatibile
* [Aplicația Dexcom (modificată)](https://github.com/dexcomapp/dexcomapp/) - Selecteaza 'Trimite valorile glicemiei catre xDrip+' dacă vrei să folosesti alarme xDrip+.
    
    ![Configurați sursa glicemiilor](../images/ConfBuild_BGSource.png)

* [Poctech](https://www.poctechcorp.com/en/contents/268/5682.html)

* [Aplicație Tomato](http://tomato.cool/) pentru dispozitivul MiaoMiao
* Glicemie aleatorie: generează valori aleatorii ale glicemiei (doar în modul DEMO)

## Pompă

Alegeți tipul de pompă pe care îl folosiți.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Coreeană (pentru pompa DanaR națională)
* Dana Rv2 (Pompa DanaR cu actualizare de firmware neoficială)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (necesită instalare ruffy)
* [Medtronic](MedtronicPump.md)
* MDI (primesti sugestii de AAPS pentru tratament cu injectii multiple zilnice)
* Pompă virtuală (buclă deschisă pentru pompă care încă nu are niciun driver- doar sugestii AAPS)

Pentru pompele Dana utilizeaza **Setări avansate** pentru a activa BT Watchdog, dacă este necesar. Asta va opri bluetooth pentru o secundă daca nu este posibilă conexiunea la pompă. Oprirea, la unele telefoane, poate debloca Bluetooth.

[Parola pentru pompa Dana RS,](../Configuration/DanaRS-Insulin-Pump.md) trebuie introdusă corect. Parola nu a fost verificată în versiunile precedente.

## Detectare Sensibilitate

Alegeți tipul de detecție a sensibilității. Pentru mai multe detalii despre diferite modele [citeste aici](../Configuration/Sensitivity-detection-and-COB.md). Aceasta functie analizeaza in timp real datele istorice și face ajustari dacă considera că reacționezi mai sensibil (sau invers, mai rezistent) la insulină decât de obicei. Mai multe detalii despre algoritmul Sensibilității la Insulina pot fi citite în [OpenAPS doc](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

Poti vedea Sensibilitatea la Insulina pe ecranul principal selectând SEN și urmărind linia albă in grafic. Notă, trebuie să fi în [Obiectivul 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) pentru ca Detectariea Sensibilității/[Autosens](../Usage/Open-APS-features#autosens) să ajusteze automat cantitatea de insulină livrată. Înainte de a ajunge la acest obiectiv, procentajul Autosens / linia din grafic este afișata doar pentru informare.

### Setări absorbție

Dacă folosești Oref1 cu SMB, trebuie să schimbi **min_5m_carbimpact** la 8. Valoarea este utilizată în timpul intreruperii CGM sau atunci când activitatea fizică „foloseşte” întreaga creştere a glicemiei, care altfel ar determina AAPS să scada COB. În momente în care [ absorbția de carbohidrați ](../Usage/COB-calculation.rst) nu poate fi stabilita dinamic în funcție de reacțiile glicemiei, introduce o scadere implicită a carbohidraților. Practic, este un eşec.

## APS

Selecteaza algoritmul APS dorit pentru ajustări de tratament. Puteți vedea detaliile despre algoritmul ales în secțiunea OpenAPS (OAPS).

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017) More detail about OpenAPS AMA can be found in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). Pe scurt, avantajul este ca după bolusul de masă sistemul poate stabili mai rapid temporare mari DACA introduci carbohidrații cu precizie.
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users) Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Buclă

* Comuteaza între Buclă Deschisă, Buclă Inchisă și Suspendare pentru Prevenire Hipoglicemie (LGS).

![Configurare Sistem - mod buclă](../images/ConfigBuilder_LoopLGS.png)

### Buclă Deschisă

* AAPS evaluează în mod continuu toate datele disponibile (IOB, COB, BG...) şi cand este necesar face sugestii de ajustare a tratamentului. 
* Sugestiile nu vor fi executate automat (ca la bucla inchisa), trebuie introduse manual in pompa sau, in cazul in care se utilizeaza o pompa compatibilă (Dana R/RS sau Accu Chek Combo), trebuie introduse prin utilizarea unui buton. 
* Această opțiune este ca sa afli cum funcționează AndroidAPS sau pentru cazul in care utilizezi o pompă nelistata in aplicatie.

### Buclă închisă

* AAPS evaluează în mod continuu toate datele disponibile (IOB, COB, BG...) şi, atunci cand este necesar, ajustează tratamentul (bolus, rata bazală temporară, anulare livrare insulina pentru evitarea hipoglicemiei etc.) in mod automat (fără intervenţia ta) pentru a ajunge in intervalul sau la valoarea ţintă a glicemiei. 
* Bucla închisă funcționează cu numeroase limitari pentru siguranță, pe care le poți stabili individual.
* Bucla închisă este posibila doar daca esti în [Obiectivul 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) sau mai mare și daca folosesti o pompă compatibilă.
* Reţine: În modul Buclă Inchisă este recomandat sa stabilesti o valoare ţintă în loc de un interval ţintă (adică 5,5 mmol/l sau 100 mg/dl în loc de 5,0-7,0 mmol/l sau 90-125 mg/dl).

### Suspendare la Hipoglicemie (LGS =Low Glucose Suspend)

* maxIOB este setat la zero
* Adică, in cazul in care glicemia este in scadere, poate reduce bazala.
* Iar dacă glicemia creşte nu va face automat corecţie. Ratele bazale vor rămâne la valorile stabilite in profilul selectat.
* Numai dacă IOB bazal este negativ (după o suspendare anterioară la valori scăzute ale glicemiei) se va administra suplimentar insulină pentru scaderea glicemiei.

### Cereri minime pentru modificari

* Daca utilizezi sistemul bucla deschisă vei fi notificat de fiecare dată când AAPS recomandă ajustarea ratei bazale. 
* Pentru a reduce numărul de notificări, fie utilizezi un interval larg al glicemiei tinta fie crești procentajul ratei minime.
* Aceasta defineşte modificarea relativa care declanşeaza o notificare.

## Obiective (program de instruire)

AndroidAPS are un program de invatare (obiective) pe care trebuie să il parcurgi pas cu pas. Acesta ar trebui să te ghideze sa configurezi un sistem securizat de buclă închisă. Parcurgerea programului de instruire garantează că ai setat totul corect și înțelegi exact face sistemul. Numai asa poți avea încredere în sistem.

Trebuie frecvent sa [exporti setarile](../Usage/ExportImportSettings.rst) (inclusiv evolutia obiectivelor). În cazul în care va trebui să înlocuiesti smartphone-ul (achiziționezi alt telefon, se deterioreaza afisajul etc.), pur si simplu poti să importi aceste setări.

Vezi pagina [Obiective](../Usage/Objectives.rst) pentru mai multe informații.

## Tratamente

În secțiunea Tratamente (Trat), puteți vedea tratamentele înregistrate în Nightscout. Dacă doresti să modifici sau să ștergi date introduse (de ex cand ai mâncat mai puțini carbohidrați decât ai estimat), selecteaza 'Șterge' și scrie noua valoare (schimba și ora, dacă este necesar) la  buton carbohidrati din ecranul principal<0>.</p> 

## General

### Privire de ansamblu

Afişează starea actuala a buclei şi butoanele acţionate frecvent (vezi secţiunea [Ecranul principal](../Getting-Started/Screenshots.md) pentru detalii). Setările pot fi accesate făcând clic pe rotita.

#### Menține ecranul deschis

Opțiunea „tine ecranul deschis” face ca Android să pastreze ecranul aprins tot timpul. Acest lucru este folositor pentru prezentări etc. Dar consumă repede bateria. Ca urmare e recomandabil sa conectezi smartphone-ul la un încărcător.

#### Butoane

Defineste care sunt butoanele afişate pe ecranul principal.

* Tratamente
* Calculator
* Insulină
* CH
* CGM (deschide xDrip+)
* Calibrare

In plus poti seta comenzi rapide pentru insulină şi cresteri carbohidraţi şi poti decide dacă se afiseaza notitele.

#### Setări AsistentRapid

Creaza un buton pentru o anumită masă standard (carbohidrați și metoda de calcul pentru bolus) care sa fie afișat pe ecranul de pornire. A se utiliza pentru mese standard consumate frecvent. Dacă ai specificat la anumite ore mese diferite, pe ecranul principal va fi intotdeauna butonul pentru masa standard corespunzătoare orei curente.

Notă: Butonul nu va fi vizibil dacă nu esti în intervalul de timp specificat pentru masa sau dacă ai suficient IOB pentru a acoperi carbohidrații definiți în butonul Asistent Rapid.

![Setări AsistentRapid](../images/ConfBuild_QuickWizard.png)

#### Ținte-Temporare implicite

Stabileste ţinte temporare implicite (durată şi valoare). Valorile prestabilite sunt:

* mananca in curand: tinta 72 mg/dl/4.0 mmol/l, durata 45 min
* activitate fizica: ţinta 140 mg/dl / 7,8 mmol/l, durată 90 min
* hipo: ţintă 125 mg/dl / 6,9 mmol/l, durată 45 min

#### Umplere/Amorsare - cantități standard de insulină

Alege butonul corespunzator cantităţii implicite de insulina pentru umplere / amorsare, în funcţie de lungimea cateterului.

#### Interval pentru vizualizare

Alege in prezentarea generală a AndroidAPS și a smart-watch-ului, afisare mare sau mica a graficului glicemiei. Este doar pentru vizualizare, nu este despre intervalul ţintă al glicemie. Exemplu: 70-180 mg/dl sau 3,9-10 mmol/l

#### Scurtează titlurile secțiunilor

Alege dacă titlurile filei din AndroidAPS sa fie lungi (de ex. ACTIONS, PROFILIE LOCALĂ, AUTOMATIONARE) sau prescurtate (de ex. ACT, LP, AUTO)

#### Afișează câmp pentru note în dialogurile de tratamente

Alege dacă vrei sau nu să ai zona pentru notite când introduci tratamente.

#### Lumini de stare

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for cannula age, insulin age, sensor age, battery age, reservoir level or battery level. Când nivelul de avertizare este atins, culoarea luminii de stare va comuta la galben. La atingerea nivelului critic culoarea luminii de stare va fi rosie.

#### Setări avansate

**Livrează partial bolusul calculat de Asistentul Rapid **: Cand utilizeaza SMB (super micro bolus), multe persoane vor sa nu primeasca 100% bolusul de insulină necesar, ci doar partial (ex.. 75 %) și permit SMB prin UAM (unattended meal detection = detectarea mesei nesupravegheate) să facă restul. În această setare poti alege o valoare implicită pentru procentul cu care Asistentul sa calculeze bolusul. Dacă in această setare valoarea implicita este stabilita la 75% şi ar trebuit să ai bolus de 10ui, Asistentul va propune bolus de doar 7,5 unităţi.

** Activeaza super bolus Asistent ** (Este diferita de * super micro bolus *!): Utilizeaza cu precauție și nu activa până nu sti cu adevărat ce face. Practic, bazala pentru următoarele două ore este adăugată la bolus si se activeaza in urmatoarele doua ore o bazala temporala zero. **Funcțiile buclei AAPS vor fi dezactivate - așa că utilizați cu grijă! Daca utilizezi SMB AAPS functiile de buclare presetate vor fi dezactivate la [ „Durata maxima (minute) a bazalei pentru limitarea SMB la” ](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), dacă nu utilizezi SMB funcțiile de buclare vor fi dezactivate timp de două ore. </ 1> Detalii despre super bolus găsesti [ aici ](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).</p> 

### Acțiuni

* Butoane pentru accesarea celor mai comune facilităţi.
* Vezi [Capturi de ecran AAPS](../Getting-Started/Screenshots#action-tab) pentru detalii.

### Automatizare

Taskuri de automatizare definite de utilizator ('if-then-then-else ' daca-atunci). Te rog [citeste aici](../Usage/Automation.rst).

### Comunicator SMS

Permite aparținătorilor să controleze de la distanță anumite functii ale AndroidAPS prin SMS. Vedeți [Comenzi SMS](../Children/SMS-Commands.rst) pentru mai multe informații privind configurarea.

### Mâncare

Afişează presetările alimentare definite în baza de date Nightscout, vezi [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pentru mai multe informaţii despre configurare.

Notă: Intrările nu pot fi utilizate în calculatorul AndroidAPS. (Numai vizualizare)

### Ceas

Monitorizează și controlează AAPS folosind ceasul Android Wear (vezi [page Watchfaces](../Configuration/Watchfaces.md)). Utilizeaza setările facand clik pe rotită pentru a stabili variabilele care ar trebui luate în considerare la calcularea bolusului dat de ceas (de ex. trendul de 15 minute, COB...).

Dacă doriţi să bolusați etc. de pe ceas, în "Setari Wear", trebuie să activaţi "Control de pe Ceas".

![Setări Wear](../images/ConfBuild_Wear.png)

Prin fila Ceas (Wear) sau prin meniul principal (sus stânga ecranului, dacă tab-ul nu este afişat) poti

* Retrimite toate datele. Ar putea fi de ajutor dacă ceasul nu a fost conectat de ceva timp şi doresti să colectezi informaţiile in ceas.
* Deschideți setările pe ceas direct de pe telefon.

### Linie de status xDrip (ceas)

Afișează informații despre buclă pe ceasul xDrip+ (dacă nu utilizezi AAPS/[watchface AAPSv2](../Configuration/Watchfaces.md)

### Client NS

* Configureaza sincronizarea datelor AndroidAPS cu Nightscout.
* Setările din [preferințe](../Configuration/Preferences#nsclient) pot fi deschise făcând clic pe rotița.

### Mentenanță

E-mailul și numărul de inregistrari care vor fi trimise. În mod normal nu este necesară modificarea.

### Configurarea Sistemului (Config Builder)

Foloste fila pentru Configurarea sistemului în locul meniului principal.