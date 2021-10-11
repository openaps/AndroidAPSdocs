# AAPS pe ceasuri cu Wear OS

Puteţi instala aplicaţia AndroidAPS pe ceasuri **cu Wear OS**. Versiunea de ceas a AAPS vă permite să:

* **afișează datele pe ceas**: utilizând [fețe de ceas personalizate](#aaps-watchfaces) sau pe fețele de ceas standard utilizând [auxiliare](#complications)
* **controlează AAPS pe telefon**: la bolusare, la stabilirea unei ținte temporare etc. 

### Înainte de a cumpăra ceas...

* Unele caracteristici precum *auxiliare* necesita Wear OS versiunea 2.0 sau mai nouă pentru a funcționa
* Google redenumit de la *Android Wear 1.x* la *Wear OS* de la versiunea 2.x, asa ca atunci cand spune *Android Wear* ar putea indica versiuni de sistem mai vechi de 1.x
* Dacă descrierea ceasului indică doar compatibilitatea cu *Android* și *iOS* - **nu** înseamnă că rulează pe *Wear OS* - poate fi la fel de bine un alt fel de sistem de operare al unui producător necunoscut **care nu este compatibil cu AAPS!**
* Verifică [lista de telefoane si ceasuri testate ](../Getting-Started/Phones#list-of-tested-phones) ți [cere comunității](../Where-To-Go-For-Help/Connect-with-other-users.md) daca ești nesigur că ceasul tău va fi compatibil

### Construirea versiunii Wear OS pentru AAPS

Pentru a construi versiunea Wear OS pentru AAPS trebuia să selectaţi varianta build "fullRelease" când se [crează APK](../Installing-AndroidAPS/Building-APK.md) (sau "pumpRelease" care vă va permite să controlaţi de la distanţă pompa dar fără looping).

From March 2021 you need to sideload AAPS onto the watch, it is no longer accessible via the watch's Google Play Store. You can sideload using [Wear Installer](https://youtu.be/8HsfWPTFGQI) which you will need to install on both your watch and phone. Once you have selected AndroidAPS as your app to upload wear version onto the watch you will be able to use watchfaces and complications and the AAPS controls.

### Configurare pe telefon

În cadrul AndroidAPS, în ConfigBuilder aveţi nevoie de [activare aplicație Wear](../Configuration/Config-Builder#wear).

## Controlează AAPS de pe Ceas

AndroidAPS este proiectat să poată fi *controlat* de ceasuri Android Wear. Dacă doriţi să bolusați etc. de pe ceas, în "Setari Wear", trebuie să activaţi "Control de pe Ceas".

Următoarele funcţii pot fi activate de la ceas:

* setarea unei ţinte temporare
* folosirea unui calculatorul pentru bolus (variabilele de calcul pot fi definite in [setări](../Configuration/Config-Builder#wear) pe telefon)
* administrare eCarbs
* administrare un bolus (insulină + carbohidrați)
* setări ceas
* stare 
    * verificați starea pompei pe ecranul acesteia
    * verificare starea loop
    * verificare şi modificare profil, CPP (Profil Circadian procentual = shift time + procentaj)
    * arată TDD (Doza totală zilnică = bolus + bazală pe zi)

## Fețe de ceas AAPS

Există mai multe fețe de ceas din care puteți alege, fețe ce afișează deviația medie, IOB, RBT-ul activ și profilurile bazale + graficul citirilor de glicemie.

Asigurați-vă că notificările din AndroidAPS nu sunt blocate pe ceas. Confirmarea acțiunii (e.f. bolus, țintă temporară) este solicitată printr-o notificare, ce va trebui aruncată de pe ecran și bifată.

Pentru a ajunge mai rapid la meniul AAPS, apăsați de două ori rapid pe valoarea glicemiei. Cu o apăsare dublă pe curba glicemiei, puteți schimba scala timpului..

## Fețe de ceas disponibile

![Fețe de ceas disponibile](../images/Watchface_Types.png)

### Față nouă de ceas pentru AndroidAPS 2,8

![Față de ceas format Digital](../images/Watchface_DigitalStyle.png)

* Culoarea, liniile şi cadranul sunt configurabile în meniul de setare pe semnul de cog al meniului de selectare al cadranului ceasului.

## Fețe de ceas AAPSv2 - Legendă

![Legendă față de ceas AndroidAPSv2](../images/Watchface_Legend.png)

A - timp de la ultima activare a loop

B - Citire CGM

C - minute de la ultima citire CGM

D - modificare în comparaţie cu ultima citire a CGM (în mmol sau mg/dl)

E - variația medie a citirilor CGM din ultimele 15 minute

F - bateria telefonului

G - rata bazală (indicată în U/h în timpul ratei standard şi în % în timpul TBR)

H-BGI (interacţiunea glicemiei) -> gradul în care glicemia "ar trebui" să fie în creştere sau scădere în funcţie doar de activitatea insulinei.

I - carbohidrati (carbohidrati la bord | e-carbohidrati in viitor)

J - insulină la bord (de la bolus | de la bazală)

## Accesarea meniului principal al AAPS

Pentru a accesa meniul principal al AAPS, puteţi utiliza următoarele opţiuni:

* apăsaţi de două ori pe valoarea glicemiei
* selectați pictograma AAPS în meniul de aplicaţii al ceasului
* apăsaţi pe auxiliare AAPS (dacă este configurat pentru meniu)

## Setări (în ceas)

Pentru a accesa setările pentru fețe de ceas, intrați in meniul principal AAPS, glisaţi in sus şi selectaţi "Settings".

Pictograma cu steaua umplută este pentru starea activată (**On**), iar pictograma cu stea goală indică faptul că setarea este dezactivată (**Off**):

![Setări pornit/oprit](../images/Watchface_Settings_On_Off.png)

### Parametrii AAPS insoțitor

* **Vibrare la Bolus** (implicit `On`):
* **Unități pentru Acțiuni** (implicit `mg/dl`): dacă este **On** unitatea de măsură este `mg/dl`, dacă este **Off** unitatea de măsură folosită este `mmol/l`. Folosit la setarea unui TT din ceas.

### Setări fețe de ceas

* **Arată date** (implicit `Off`): notă, datele nu sunt disponibile pe toate fețele ceas
* **Arată IOB** (implicit `On`): Afișează sau nu valoarea IOB (setarea pentru valoarea detaliată este în parametrii de wear din AAPS)
* **Arată COB** (implicit `On`): Afișează sau nu valoarea COB
* **Arată Variația** (implicit `On`): Afișează sau nu variația glicemiei din ultimele 5 minute
* **Afișează Variația medie** (implicit `On`): Afişează sau nu variaţia medie glicemiei din ultimele 15 minute
* **Afișare bateria Telefonului** (implicit `On`): Baterie telefon în %. Roşu dacă e sub 30%.
* **Afișare baterie dispozitiv** (implicit `Off`): Bateria dispozitivului este o sinteză a baterilor din telefon, pompă și senzor (în general, cea mai mică dintre cele 3 valori)
* **Afişează Rata Bazală** (implicit `On`): Afişare sau nu a ratei bazale curente (în U/h sau în % dacă TBR)
* **Arată starea Loop** (implicit `On`): arată câte minute au trecut de la ultima buclă activă (săgeţile din jurul valorii devin roşii dacă este peste 15').
* **Afişează Glicemia** (implicit `On`): Afişează sau nu ultima valoare a glicemiei
* **Arată Săgeata de Direcție** (implicit `On`): Afișează sau nu săgeata tendinței glicemiei
* **Arată Vechime** (implicit `On`): arată numărul de minute de la ultima citire.
* **Fundal** (implicit `On`): Puteţi comuta de pe fundal negru pe fundal alb (cu excepţia fețelor de ceas Cockpit şi Steampunk)
* **Evidențiere Bazale** (implicit `Off`): Îmbunătățirea vizibilității ratei bazalelor și bazalelor temporare
* **Potrivire separator** (implicit `Off`): Pentru AAPS, AAPSv2 şi AAPS (Mare) față de ceas, arată contrastul fundalului pentru separator (**Off**) sau potrivește separatorul cu culoarea fundalului (**On**)
* **Grafic Interval de Timp** (implicit `3 ore`): puteți selecta în sub-meniu intervalul maxim de timp al graficului între 1 oră și 5 ore.

### Setări Interfaţă Utilizator

* **Design de intrare**: cu acest parametru, poți selecta poziția butoanelor "+" și "-" atunci când introduci comenzi pentru AAPS (TT, Insulină, Carbs...)

![Opţiuni pentru design de intrare](../images/Watchface_InputDesign.png)

### Parametri specifici pentru fețe de ceas

#### Fața de ceas Steampunk

* **Granularitate Variație** (implicit `Mediu`)

![Indicator_Steampunk](../images/Watchface_Steampunk_Gauge.png)

#### Cadran FațaCeas

* **Marime caractere** (implicit `Off`): Crește dimensiunea textului pentru a îmbunătăți vizibilitatea
* **Istoric cu cercuri** (implicit`Off`): Vizualizare grafică istoric glicemie cu inele gri în interiorul inelului verde al orei
* **Istoric cu cerc luminos** (implicit `On`): cercul de istoric este mai discret cu un gri mai inchis
* **Animații** (implicit `On`): Când este activat și suportat de ceas și nu e în modul rezolutie mica pentru economisirea energiei, cadranul ceasului va fi animat

### Setări comenzi

* **Asistent în Meniu** (implicit `On`): Permite în meniul principal să se introducă Carbohidrați și să se seteze Bolus din ceas
* **Meniu amorsare** (implicit`Off`): Permite Amorsare/Umplere de pe ceas
* **Țintă unică** (implicit `On`):
    
    * `On`: ai setat o singură valoare pentru TT
    * `Off`: ai setat ținta inferioara și superioară pentru TT

* **Asistent Procentaj** (implicit `Off`): Se permite corecţia bolus din asistent (valoarea introdusă în procente înainte de notificarea de confirmare)

## Auxiliare

*Auxiliare* este un termen de la producătorii tradiționali de ceasuri, care descrie adăugarea pe fața principală a ceasului - o altă fereastră sau cadran mai mic (cu data, ziua săptămânii, faza lunii, etc.). Wear OS 2.0 permite diverșilor furnizori de date, cum ar fi vremea, notificările, contoarele de fitness şi altele - să fie adăugate la orice feţe de ceas care suporta auxiliare.

Aplicaţia AAPS Wear OS suportă auxiliare de la versiunea `2.6`şi permite oricărei fețe de ceas al unei terţe părţi care suportă auxiliare să fie configurate pentru a afişa datele asociate cu AAPS (glicemia și tendinţa, IOB, COB, etc.).

Auxiliarele servesc de asemenea ca **scurtătură** la funcții AAPS. Apăsând pe ele puteți deschide meniurile și dialogurile legate de AAPS (în funcție de tipul de auxiliare și configurație).

![Auxiliare_Pe_Ceasuri](../images/Watchface_Complications_On_Watchfaces.png)

### Tipuri de Auxiliare

Aplicaţia AAPS Wear OS furnizează numai date brute, conform formatelor predefinite. Depinde de dezvoltatorul feței de ceas să decidă unde și cum să afișeze auxiliarele, inclusiv modul de prezentare, margine, culoare și tip caracter. Din multele tipuri disponibile de auxiliare ale Wear OS, AAPS utilizează:

* `TEXT SCURT ` -Conţine două linii de text, 7 caractere fiecare, denumite uneori valoare şi etichetă. De obicei, redat în interiorul unui cadran sau a unei mici buline - unul sub altul, sau lateral unul de altul. Este un auxiliar foarte limitat ca spaţiu. AAPS încearcă să înlăture caracterele care nu sunt necesare pentru a se potrivi: prin rotunjirea valorilor, înlăturarea zerourilor de la începutul şi sfârşitul valorilor, etc.
* `TEXT LUNG` - Conține două linii de text, aproximativ 20 de caractere fiecare. De obicei, redat în interiorul unui dreptunghi sau unui cadran lung - unul sub altul. Este folosit pentru mai multe detalii şi stări.
* `VALOARE INTERVAL` -Folosit pentru valori din intervalul predefinit, ca un procentaj. Conţine pictogramă, etichetă şi este de obicei redată ca un cadran de progres.
* `IMAGINE MARE` -Imagine personalizată care poate fi folosita (atunci cand este acceptată de ceas) ca fundal.

### Configurare Auxiliare

Pentru a adăuga auxiliare la faţa de ceas, configuraţi-o printr-o apăsare lungă şi făcând clic pe roata dințata de mai jos. În funcție de modul specific în care se configurează o față de ceas - fie apăsați pe înlocuitori fie intrați in meniul de configurare a fețelor de ceas pentru auxiliare. Auxiliarele AAPS sunt grupate în meniul AAPS.

Când configurați auxiliare pe ceas, Wear OS va prezenta și va filtra lista de auxiliare care se pot potrivi în locul selectat pe ceas. Dacă anumite auxiliare nu pot fi găsite în listă, este probabil din cauza faptului că acel tip nu poate fi utilizat pentru locul respectiv.

### Auxiliare furnizate de AAPS

AndroidAPS oferă următoarele auxiliare:

![AAPS_Listă_Auxiliare](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`TEXT SCURT`, deschide *Menu*): Afişează *Rata Bazală* pe prima linie şi *Carbohidrați la Bord* şi *Insulină la Bord* pe linia a doua.
* **Glicemia** (`TEXT SCURT`, deschide *Menu*): Afișează valoarea *Glicemiei* și săgeata de *tendință* pe prima linie iar pe linia a doua *măsurători durată* și *Variația Glicemiei*.
* **CoB & IoB** (`TEXT SCURT`, deschide*Menu*): Afișează *Carbohidrați la Bord* în prima linie și *Insulină la Bord* în a doua linie.
* **CoB Detaliat** (`TEXT SCURT`, deschide *Wizard*): Afișează în prima linie *Carbohidrații la Bord* activi și în a doua linie Carbohidrații planificați (viitori, eCarbs).
* **Iconiță CoB** (`TEXT SCURT`, deschide *Wizard*): Afișează o iconiță statică cu valoarea *Carbohidrați la Bord*.
* **Stare Completă** (`TEXT LUNG`, deschide *Menu*): Arată majoritatea datelor deodată: valoarea *glicemiei* și săgeata *tendinței*, *variația glicemiei* și *vechimea măsurătorii* pe prima linie. Pe linia a doua linie *Carbohidrați la Bord*, *Insulină la Bord* și *Rata bazală*.
* **Stare completă (inversat)** (`TEXT LUNG`, deschide *Menu*): Aceleaşi date ca și la *Stare completă*, dar liniile sunt inversate între ele. Poate fi folosit în fețele de ceas care ignoră una din cele două linii în `TEXT LUNG`
* **IoB Detaliat** (`TEXT SCURT`, deschide *Bolus*): Afișează *Insulina la Bord* totală în prima linie și *IoB* defalcat pentru *Bolus* și *Bazală* în linia a doua.
* **Iconiță IoB** (`TEXT SCURT`, deschide *Bolus*): Afișează valoarea *Insulinei la Bord* printr-o iconiță statică.
* **Baterie Telefon/Uploader** (`VALOARE INTERVAL`, deschide *Status*): Afișează în procente bateria telefonului cu AAPS (uploader), așa cum este raportat de AAPS. Prezentat ca un indicator în procente cu o iconiță de baterie care afișează valoarea raportată. Este posibil să nu se actualizeze în timp real, doar atunci când apar alte modificări importante de date AAPS (de obicei: la fiecare ~ 5 minute cu noua valoare a *glicemiei*).

În plus, există trei auxiliare `IMAGINE MARE` tip: **fundal întunecat**, **fundal gri** și **fundal deschis**, afișează imaginea de fundal statică AAPS.

### Setări legate de Auxiliare

* **Acţiuni pentru auxiliare** (implicit `Default`): Decide ce dialog se deschide când utilizatorul apasă pe auxiliare: 
    * *Default*: actiune specifică tipului de auxiliar *(vezi lista de mai sus)*
    * *Menu*: Meniu principal AAPS
    * *Wizard*: asistent bolusare - calculator pentru bolus
    * *Bolus*: introducere directă a valorii bolus
    * *eCarb*: dialog de configurare eCarb
    * *Status*: submeniul de stare
    * *None*: Dezactivează acțiunea de atingere a auxiliarelor AAPS
* **Unicode in auxiliare** (implicit `On`): Când e `On`, auxiliarele vor folosi caractere Unicode pentru simboluri ca `Δ` Delta, `⁞` separator vertical din puncte sau `⎍` simbol pentru Rata Bazală. Afișarea lor depinde de tipul caracterului, și asta poate fi foarte specific. Această opţiune permite comutarea simbolurilor Unicode `Off` dacă este necesar - când caracterul utilizat de către faţa de ceas personalizată nu suportă acele simboluri - pentru a evita erorile grafice.

## Performanță și ponturi despre autonomia bateriei

Ceasurile Wear OS sunt dispozitive cu constrângeri mari de consum. Dimensiunea ceasului limitează capacitatea bateriei. Chiar şi cu progresele recente atât pe partea de hardware, cât şi pe cea de software, ceasurile Wear OS necesită în continuare încărcarea zilnică.

Dacă o baterie durează mai puțin de o zi (de dimineața până seara), iată câteva sfaturi pentru a investiga problemele.

Principalele mari consumatoare ale bateriei sunt:

* Afișare activă cu iluminare de fundal (pentru LED) sau în modul intensitate completă (pentru OLED)
* Afișare pe ecran
* Comunicații radio prin Bluetooth

Deoarece nu putem face compromisuri în comunicare (avem nevoie de date actualizate) şi dorim să avem cele mai recente date redate, majoritatea optimizărilor se pot face în zona *timp de afişare*:

* De obicei, ceasurile de marcă sunt mai bine optimizate decât cele personalizate, descărcate din magazin.
* Este mai bine să utilizaţi feţe de ceas care limitează cantitatea de date afișate în mod inactiv/estompat.
* Fiţi conştient când amestecaţi alte Auxiliare, cum ar fi widget-urile meteorologice ale altora, sau alte tipuri de date-utilizând date din surse externe.
* Începeţi cu fețe de ceas mai simple. Adăugaţi pe rând câte un Auxiliar şi observaţi cum afectează durata de viaţă a bateriei.
* Incercati sa folositi tema **Dark** pentru fața de ceas AAPS si [**Potrivire separator**](#watchface-settings). Pe dispozitivele OLED, va limita numărul de puncte iluminate şi va limita defectarea ecranului.
* Verificaţi ce funcționează mai bine pe ceas: fața de ceas de marcă AAPS sau alte feţe cu Auxiliare AAPS.
* Observați timp de câteva zile, cu diferite profiluri de activitate. Cele mai multe ceasuri activează afişarea la glisare, mişcare şi alte mecanisme legate de utilizare.
* Verificaţi setările de sistem globale care afectează performanţa: notificările, timp de afişare în fundal/activ, când este activat GPS-ul.
* Verificaţi [lista de telefoane şi ceasuri testate](../Getting-Started/Phones#list-of-tested-phones) şi [cere comunităţii](../Where-To-Go-For-Help/Connect-with-other-users.md) exemple de experiențe ale utilizatorilor şi durata de viaţă semnalată a bateriei.
* **Nu putem garanta că datele afişate pe faţa de ceas sau pe Auxiliare sunt actuale**. În cele din urmă, depinde de Wear OS să decidă când actualizează fața de ceas sau Auxiliarele. Chiar şi atunci când aplicaţia AAPS solicită actualizarea, Sistemul poate decide să amâne sau să ignore actualizările pentru a conserva bateria. Când aveţi dubii şi bateria ceasului este scăzută - verificaţi întotdeauna cu aplicaţia principală AAPS de pe telefon.

## Depanarea aplicației de pe ceas:

* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

### Sony Smartwatch 3

* Ceasul Sony Smartwach 3 este unul dintre cele mai populare ceasuri folosite cu AAPS. 
* Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS 2.7 and above.
* O posibilă soluție poate fi găsită pe această [pagină de depanare](../Usage/SonySW3.rst).

## Vizualizare date Nightscout

Dacă folosiți un alt sistem de buclă și doriți să *vizualizați* detaliile buclei pe ceasul Android Wear, sau doriți să monitorizați bucla copilului dumneavoastră, atunci puteți compila/descărca doar APK-ul NSClient. Pentru a face acest lucru, urmăriți [instrucțiunile de compilare ale APK-ului](../Installing-AndroidAPS/Building-APK.md) după ce ați selectat varianta "NSClientRelease". Există mai multe fețe de ceas din care puteți alege, fețe ce afișează deviația medie, IOB, RBT-ul activ și profilurile bazale + graficul citirilor de glicemie.

# Pebble

Utilizatorii ceasurilor Pebble pot folosi [fața de ceas Urchin](https://github.com/mddub/urchin-cgm) pentru *vizualizarea* datelor buclei (dacă acestea sunt înregistrate și în Nightscout), dar nu vor putea interacționa cu AndroidAPS prin intermediul ceasului. Puteți alege ce câmpuri să fie afișate, cum ar fi IOB și RBT-ul curent sau predicțiile. Dacă sunteți în buclă deschisă, puteți folosi [IFTTT](https://ifttt.com/) pentru a crea un applet care să vă informeze dacă există notificări primite de la AndroidAPS și caer să vă trimită un SMS sau o notificare pushover.