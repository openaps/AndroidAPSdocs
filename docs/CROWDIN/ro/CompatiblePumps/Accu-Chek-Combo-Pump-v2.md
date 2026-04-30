# Pompa Accu Chek Spirit Combo

**Acesta aplicație face parte dintr-o soluție DIY (do-it-yourself/ o aplicație pe care o construiești singur) și nu este un produs finit; ea solicita implicarea utilizatorului: să citească, să învețe și să înțeleagă sistemul, de la construcție pana la modul de utilizare. Nu este un facut pentru a vă gestiona tratamentul diabetul in totalitate, dar vă permite să vă îmbunătățiți calitatea vieții alaturi de diabet, dacă sunteți dispus să acordați timpul necesar. Acordați-vă timp pentru a învăța sa-l intelegeti si folosi. You alone are responsible for what you do with it.**

## Cerințe hardware și software

* O pompă de insulină Accu-Chek Combo (orice versiune de firmware, funcționează toate).
* Un dispozitiv Smartpix sau Realtyme împreună cu Softul de Configurare 360 pentru a configura pompa. (Roche trimite clienților lor la cerere și gratuit dispozitivele Smartpix împreuna cu softul de configurare)
* Un telefon compatibil. Android 9 (Pie) sau mai nou este obligatoriu. Dacă folosiți LineageOS, versiunea minimă acceptată este 16.1. Vedeți notele [de eliberare](#maintenance-android-version-aaps-version) pentru detalii.
* Aplicația AndroidAPS instalată pe telefon.

Unele telefoane pot funcționa mai bine decât altele, în funcție de calitatea conexiunii prin Bluetooth și dacă au sau nu o logică suplimentară foarte agresivă de economisire a energiei. O listă de telefoane poate fi găsită în documentul [Telefoane AAPS](#Phones-list-of-tested-phones). Atenție la faptul că aceasta nu este o listă completă și reflectă doar experiența avută de utilizator în folosire. Vă încurajăm să scrieți și experiența pe care o aveți dumneavoastră, cu scopul de a ajuta și alte persoane în luarea unei decizii (toate aceste proiecte sunt despre a vă aduce propria contribuție la binele comunității).

(combov2-before-you-begin)=
## Înainte să începeți

**SIGURANȚA MAI ÎNTÂI** - nu încercați acest proces într-un mediu în care nu vă puteți recupera după o eroare. Țineți la îndemână dispozitivul Smartpix / Realtyme, împreună cu programul de configurare 360. Planificați pentru a petrece aproximativ o oră pentru a configura totul și pentru a verifica dacă totul funcționează corect.

Fiți conștienți de următoarele limitări:

* Bolusul extins și bolusul multiplu nu sunt acceptate în prezent (puteți utiliza [Carbohidrați extinși](../DailyLifeWithAaps/ExtendedCarbs.md)).
* Doar un singur profil bazal (primul) este acceptat.
* Bucla este dezactivată dacă profilul actual activ al pompei nu este profilul cu numărul 1. Acest lucru continuă până când profilul cu numărul 1 devine activ; când se face acest lucru, data viitoare când AAPS se conectează (fie pe cont propriu după un timp, fie pentru că utilizatorul apasă butonul de reîmprospătare din interfața de utilizator combov2), va observa că acel profil cu numărul 1 este cel curent și bucla se va activa din nou.
* Dacă bucla solicită ca o RBT care rulează să fie anulată, Combo va seta o RBT de 90% sau 110% timp de 15 minute. Acest lucru se datorează faptului că anularea unui RBT provoacă o alertă în pompă care provoacă o mulțime de vibrații, iar aceste vibrații nu pot fi dezactivate.
* Stabilitatea conexiunii Bluetooth variază în funcție de telefon, ceea ce cauzează apariția alertei "pompă inaccesibilă" și nu se mai realizează nici o altă conexiune între telefon și pompă. Dacă apare această eroare, asigurați-vă că Bluetooth este activat, apăsați butonul Refresh în pagina Combo pentru a afla dacă aceasta a fost cauzată de o problemă intermitentă și dacă în continuare nu există conexiune, reporniți telefonul ceea ce de obicei rezolvă problema.
* Există și o altă problemă atunci când o repornire a telefonului nu ajută, dar apăsarea unui buton al pompei trebuie apăsat (buton ce resetează sistemul Bluetooth al pompei), înainte ca pompa să accepte din nou conexiuni cu telefonul.
* Setarea unei RBT în pompă ar trebui evitată, deoarece doar bucla ar trebuie să ia astfel de decizii și să facă astfel de acțiuni - ar trebui să fie singura care controlează RBT-urile. Detectarea unei RBT noi în pompă durează până la 20 de minute și efectul RBT-ului va fi luat în calcul doar începând cu momentul detecției, astfel că în cazul cel mai rău pot exista 20 de minute a unei RBT a cărei valoare să nu se reflecte în IOB.

Dacă ați folosit vechiul driver Combo care depinde de aplicația Ruffy separată și doriți să mutați la una nouă, observați că asocierea trebuie refăcută – Ruffy și noul driver Combo nu pot împărtăși informații privind asocierea. De asemenea, asigurați-vă că Ruffy _nu_ rulează. Dacă aveți dubii, apăsați lung pictograma Ruffy pentru a deschide un meniu contextual. În acel meniu, apăsați pe "App Info". În interfața care tocmai s-a deschis, apăsați "Oprire Forțată". În acest fel, se asigură că o instanță activă Ruffy nu poate interfera cu noul driver.

De asemenea, dacă migrați de la vechiul driver, fiți conștient de faptul că noul driver comunică comanda unui bolus într-un mod complet diferit către Combo, care este mult mai rapid, astfel încât să nu fiți surprinși atunci când un bolus începe imediat, indiferent de doză. În plus, sugestiile, sfaturile și trucurile generale șamd cu privire la modul de abordare al asocierii la Ruffy și problemele de conexiune nu se aplică aici, de vreme ce acesta este un driver complet nou care nu împarte niciun cod cu cel vechi.

Acest nou driver este scris în prezent pentru a sprijini următoarele limbi pe Combo. (Acest lucru nu are legătură cu limba din AAPS - este limba afișată în LCD al pompei Combo însăși.)

* Engleză
* Spaniolă
* Franceză
* Italiană
* Rusă
* Turcă
* Poloneză
* Cehă
* Hungarian
* Slovak
* Romanian
* Croatian
* Dutch
* Greek
* Finnish
* Norwegian
* Portuguese
* Swedish
* Danish
* German
* Slovenian
* Lithuanian

**Important**: If your pump is set to a language that is not part of this list, please contact the developers, and set the pump's language to one in this list. Otherwise, the driver won't work properly.

## Phone setup

It is very important to make sure that battery optimizations are turned off. AAPS already auto-detects when it is subject to these optimizations, and requests in its UI that these be turned off. But, on modern Android phones, Bluetooth _itself_ is an app (a system app). And, usually, that "Bluetooth app" is run _with battery optimizations on by default_. As a result, Bluetooth can refuse to respond when the phone aims to save power because it kills off the Bluetooth app. This means that in that Bluetooth system app's settings, battery optimizations must be turned off as well. Unfortunately, how one can find that Bluetooth system app differs between phones. In stock Android, go to Settings -> Apps -> See all N apps (N = the number of apps on your phone). Then, open the menu to the top right corner, tap on "Show system" or "Show system apps" or "All apps". Now, in the newly expanded list of apps, look for a "Bluetooth" app. Select it, and on its "App info" UI, tap on "Battery". There, disable battery optimizations (sometimes called "battery usage").

## Combo setup

* Configure the pump using the Accu-Chek 360 Configuration Software. Dacă nu aveți acest software, contactați linia telefonică de suport Accu-Chek. De obicei, aceștia vor trimite către utilizatorii înregistrați un CD conținând software-ul "360° Pump Configuration Software" și un dispozitiv de conectare USB-infraroșu SmartPix (de asemenea, se poate folosi și dispozitivul Realtyme).

  - **Required settings** (marked green in screenshots):

     * Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
     * Verify the _Quick Info Text_ is set to "QUICK INFO" (without the quotes, found under _Insulin Pump Options_).
     * Set TBR _Maximum Adjustment_ to 500%
     * Disable _Signal End of Temporary Basal Rate_
     * Set TBR _Duration increment_ to 15 min
     * Activați Bluetooth-ul

  - **Recommended settings** (marked blue in screenshots)

     * Stabiliți alarma de cartuș pe terminate așa cum considerați necesar
     * Configurați un bolus maxim potrivit indicațiilor dumneavoastră terapeutice pentru a vă proteja de o eventuală eroare posibilă în software
     * În mod similar, configurați o durată maximă a RBT ca un mijloc de protecție. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
     * Enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and quick bolusing was a habit.
     * Stabiliți un interval minim de 5.5, respectiv 5 pentru timpul după care ecranul să se stingă automat sau meniurile să se stingă automat. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

  ![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)

  ![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)

  ![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)

  ![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)

## Activating the driver and pairing it with the Combo

* Selectați driverul "Accu-Chek Combo" în [Configurator > Pompă](../SettingUpAaps/ConfigBuilder.md). **Important**: Există vechiul driver, numit "Accu-Chek Combo (Ruffy)", în acea listă. _Nu-l_ selectați pe acela.

  ![Captură de ecran pentru Configurator Combo](../images/combo/combov2-config-builder.png)

* Atingeți rotița pentru a deschide setările driverului.

* În setările interfeței utilizatorului, apăsați pe butonul 'Asociați cu pompa' din partea de sus a ecranului. Aceasta deschide interfața utilizatorului de asociere Combo. Urmați instrucțiunile afișate pe ecran pentru a începe asocierea. Când Android solicită permisiunea de a face telefonul vizibil pentru alte dispozitive Bluetooth, apăsați "Permiteți". În cele din urmă, Combo va afișa un cod PIN personalizat de 10 cifre pe ecran, iar driverul îl va solicita. Introduceți acel cod PIN în câmpul corespunzător.

  ![Captură de ecran a interfeței de asociere Combo 1](../images/combo/combov2-pairing-screen-1.png)

  ![Captură de ecran a interfeței de asociere Combo 2](../images/combo/combov2-pairing-screen-2.png)

  ![Captură de ecran a interfeței de asociere Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Captură de ecran a interfeței de asociere Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Captură de ecran a interfeței de asociere Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Când driverul cere codul PIN de 10 cifre afișat în Combo, iar codul este introdus incorect, următorul mesaj este afișat: ![Captură de ecran a interfeței de asociere Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Odată ce asocierea a fost făcută, interfața utilizatorului este închisă prin apăsarea butonului OK din ecran care arată că asocierea a reușit. După ce a fost închis, reveniți la interfața de utilizare a setărilor de driver. Butonul "Asociați pompă" ar trebui acum să fie gri și dezactivat.

  Fila Combo Accu-Chek arată așa după asocierea cu succes:

  ![Captura de ecran a filei Combo Accu-Chek cu asocierea](../images/combo/combov2-tab-with-pairing.png)

  dacă totuși nu există o asociere cu Combo, fila arată așa:

  ![Captură de ecran a filei Combo Accu-Chek fără asociere](../images/combo/combov2-tab-without-pairing.png)

* Pentru a verifica configurarea (cu pompa **deconectată** de la orice canulă pentru a fi în siguranță!) utilizați AAPS pentru a seta o RBT de 500% pentru 15 minute și administrați un bolus. Pompa ar trebui să aibă acum un RBT activă și să afișeze bolusul în istoric. AAPS ar trebui, de asemenea, să afișeze RBT activă și bolusul administrat.

* Pe Combo, este recomandat să activați blocarea tastelor pentru a preveni bolusul de la pompă, în special când pompa a fost utilizată înainte și utilizarea funcției de "bolus rapid" era un obicei.

## Note despre asociere

Accu-Chek Combo a fost dezvoltată înainte ca Bluetooth 4.0 să fie lansat și la doar un an de la lansarea primei versiuni de Android. Acesta este motivul pentru care modul ei de asociere cu alte dispozitive nu este 100 % compatibil cu modul în care se face astăzi în Android. Pentru a depăși pe deplin această situație, AAPS ar avea nevoie de permisiuni la nivelul sistemului, care sunt disponibile doar pentru aplicațiile de sistem. Acestea sunt instalate de către producătorii de telefoane pe telefon - utilizatorii nu pot instala aplicațiile de sistem.

Consecința acestui fapt este că asocierea nu va fi niciodată 100% fără probleme, deși se îmbunătățește considerabil în acest nou driver. În special, în timpul asocierii, dialogul Android cu privire la PIN Bluetooth poate apărea pe scurt și poate dispărea automat. Dar câteodată rămâne pe ecran și cere un cod PIN de 4 cifre. (Aceasta nu trebuie confundată cu codul PIN de asociere Combo de 10 cifre) Nu introduceți nimic, doar apăsați pe butonul de anularea. Dacă asocierea nu continuă, urmați instrucțiunile de pe ecran pentru a reîncerca încercarea de asociere.

(combov2-tab-contents)=
## Conținutul filei Accu-Chek Combo

Fila afișează următoarele informații atunci când o pompă a fost asociată (elementele sunt enumerate de sus în jos):

![Captura de ecran a filei Combo Accu-Chek cu asocierea](../images/combo/combov2-tab-with-pairing.png)

1. _Starea driverului_: Driverul poate fi într-una din următoarele stări:
   - "Deconectat": nu există nicio conexiune Bluetooth; driver se află de cele mai multe ori în această stare și se conectează la pompă doar atunci când este necesar - acest lucru economisește energia
   - "Se conectează"
   - "Verificarea pompei": pompa este conectată, dar driverul efectuează în prezent verificări de siguranță pentru a se asigura că totul este în regulă și actualizat
   - "Pregătit" : driverul este gata să accepte comenzi din AAPS
   - "Suspendat": pompa este suspendată (indicată ca "oprit" în Combo)
   - "Executarea comenzii" : o comandă AAPS este executată
   - "Eroare" : a apărut o eroare; conexiunea a fost terminată, orice comandă în desfășurare a fost abandonată
2. _Ultima conexiune_: Cu câte minute în urmă s-a conectat cu succes driverul la Combo; dacă acest lucru depășește 30 de minute, acest element este afișat cu o culoare roșie
3. _Activitatea curentă_: Detalii suplimentare despre ceea ce face pompa în prezent; aici este de asemenea unde o bară de progres subțire poate arăta progresul executării unei comenzi, cum ar fi setarea unui profil bazal
4. _Baterie_: nivel baterie; Combo indică numai dacă bateria este "plină", "joasă", "descărcată", și nu oferă nimic mai precis (cum ar fi un procentaj), astfel încât doar aceste trei niveluri sunt prezentate aici
5. _Rezervor_: Câte unități sunt în prezent în rezervorul pompei Combo
6. _Ultimul bolus_: Cu câte minute în urmă a fost administrat ultimul bolus; dacă niciunul nu a fost administrat încă după ce AAPS a fost pornit, acesta este gol
7. _Bazală temporară_: Detalii despre bazala temporară activată în prezent; dacă niciuna nu este activă, acesta este gol
8. _Rată bazală de bază_: Rata bazală de bază activă în prezent ("bază" înseamnă rata bazală fără nicio RBT activă care să influențeze factorul de rată bazală)
9. _Numărul de serie_: numărul de serie Combo indicat de pompă (acesta corespunde numărului de serie afișat pe spatele Combo)
10. _Adresă Bluetooth_: Adresa Bluetooth de 6 biți a Combo-ului, afișată în formatul `XX:XX:XX:XX:XX:XX:XX`

Combo poate fi operat prin Bluetooth în modul _terminal de la distanță_ sau în modul de _comandă _. Modul terminal de la distanță corespunde modului de comandă de la distanță, de pe contorul Combo, care imită LCD și patru butoane ale pompei. Unele comenzi trebuie să fie efectuate în acest mod de către driver, deoarece nu au niciun fel de omolog în modul de comandă. Acest din urmă mod este mult mai rapid, dar, după cum s-a afirmat, limitat ca domeniu de aplicare. Când modul terminal de la distanță este activ, ecranul curent al terminalului de la distanță este afișat în câmpul care este situat imediat deasupra desenului Combo din partea de jos. Când driverul schimbă în modul de comandă totuși, acel câmp este lăsat necompletat.

(Utilizatorul nu influențează acest lucru; driverul decide pe deplin ce mod să utilizeze. Aceasta este doar o notă pentru ca utilizatorii să știe de ce uneori pot vedea cadrele Combo în acel câmp.)

În partea de jos este butonul "Reîmprospătați". Acesta declanșează o actualizare imediată a stării pompei. Este de asemenea folosit pentru a permite AAPS să știe că o eroare descoperită anterior este acum rezolvată și că AAPS poate verifica din nou dacă totul este în regulă (mai mult [la secțiunea despre alerte](#combov2-alerts)).

## Preferințe

Aceste preferințe sunt disponibile pentru driverul combo (articolele sunt listate de sus în jos):

![Captura de ecran a preferințelor pentru Accu-Chek Combo](../images/combo/combov2-preferences.png)

1. _Asociază pompa_: Acesta este un buton care poate fi apăsat pentru a se asocia cu un Combo. Este dezactivată dacă o pompă este deja asociată.
2. _Dezasociați pompa_: Dezasociați o pompă Combo asociată; opusul punctului 1. Este dezactivat dacă nu este asociată nicio pompă.
3. _Durata de descoperire (în secunde)_: La asociere, driverele fac telefonul să poată fi descoperit de pompă. Aceasta controlează cât timp durează această descoperire. În mod implicit, se selectează maximul (300 secunde = 5 minute). Android nu permite ca descoperirea să dureze la nesfârșit, așa că trebuie aleasă o durată.
4. _Autodetectează și introdu automat schimbarea rezervorului de insulină_: Dacă este activată, acțiunea de "modificare a rezervorului", care se realizează în mod normal de către utilizator prin intermediul butonului "prime/umple" din fila de acțiune. Acest lucru este explicat [în detaliu, mai jos](#combov2-autodetections).
5. _Autodetectează și introduce automat modificarea bateriei_: Dacă este activată, acțiunea "modificare a bateriei", care se realizează în mod normal de către utilizator prin intermediul butonului "schimbare a bateriei" din fila de acțiune. Acest lucru este explicat [în detaliu, mai jos](#combov2-autodetections).
6. _Activează jurnalizarea detaliată Combo_: Acest lucru mărește cantitatea de jurnale făcute de către driver. **ATENȚIE**: Nu activați decât dacă vi se cere de către un dezvoltator. Altfel, acest lucru poate adăuga multă zgomot jurnalelor AndroidAPS și le poate diminua utilitatea.

Cei mai mulți utilizatori folosesc doar primele două elemente, butoanele _Asociați pompa_ și _Dezasociați pompa_.

(combov2-autodetections)=
## Autodetectare și introducerea automată a modificărilor de baterie și ale rezervorului

Driverul este capabil să detecteze modificările bateriei și ale rezervorului prin ținerea evidenței nivelurilor bateriei și rezervorului. Dacă nivelul bateriei a fost raportat de Combo ca fiind scăzut ultima dată când starea pompei a fost actualizată, și acum, în timpul actualizării noii stări a pompei, nivelul bateriei apare ca normal, apoi driverul concluzionează că utilizatorul trebuie să fi înlocuit bateria. Aceeași logică este utilizată și pentru nivelul rezervorului: Dacă acum este mai mare decât înainte, aceasta este interpretată ca o schimbare a rezervorului.

Acest lucru funcționează numai dacă bateria și rezervorul sunt înlocuite atunci când aceste niveluri sunt raportate ca fiind de nivel jos _și_ bateria și rezervorul sunt umplute suficient.

Aceste autodetecții pot fi dezactivate în interfața Preferințe.

(combov2-alerts)=
## Alerte (avertismente și erori) și modul în care acestea sunt tratate

Combo afișează alerte ca ecrane de la terminalul de la distanță. Avertismentele sunt afișate cu codul "Wx" (x este o cifră), împreună cu o descriere scurtă. Un exemplu este "W7", "TBR OVER". Erorile sunt similare, dar apare în schimb codul "Ex".

Anumite avertismente sunt respinse automat de către driver. Acestea sunt:

- W1 "rezervor scăzut": driverul îl transformă într-un avertisment de "rezervor scăzut" care este afișat în fila principală AAPS
- W2 "baterie scăzută": driverul îl transformă într-o avertizare de tip "baterie consumată" care este afișată în fila principală AAPS
- W3, W6, W7, W8 : toate acestea sunt pur informative pentru utilizator, astfel încât driverul poate să le respingă automat

Alte avertismente _nu_ sunt respinse automat. De asemenea, erorile _nu sunt niciodată_ respinse automat. Ambele sunt gestionate în același fel: ele determină driverul să producă un dialog de alertă deasupra interfeței AAPS, și de asemenea să anuleze orice comandă în derulare. Driverul trece apoi la starea "eroare" (vedeți [descrierea conținutului filei Accu-Chek Combo de mai sus](#combov2-tab-contents)). Această stare nu permite executarea comenzilor. Utilizatorul trebuie să gestioneze eroarea de pe pompă; de exemplu, o eroare de ocluzie poate necesita înlocuirea canulei. Odată ce utilizatorul s-a ocupat de eroare, operația normală poate fi reluată prin apăsarea butonului "Reîmprospătare" de pe fila Accu-Chek Combo. Driverul se conectează apoi la pompa Combo și îi actualizează starea, verifică dacă vreo eroare mai este încă afișată pe ecran șamd. De asemenea, driverul reîmprospătează automat starea pompei după un timp, așa că apăsarea manuală a butonului nu este obligatorie.

Bolusarea este un caz special. Se face în modul de comandă Combo, care nu raportează în timpul bolusului că a apărut vreo alerta. În consecință, driverul nu poate respinge automat avertismentele _în timpul_ unui bolus. Aceasta înseamnă că, din păcate, pompa va emite semnale sonore până la terminarea bolusului. Alerta cea mai comună din timpul unui bolus este de obicei W1 "rezervor golit". **Nu** respingeți avertismentele Combo de pe pompă în timpul unui bolus. Riscați să întrerupeți bolusul. Driverul se va ocupa de avertisment odată ce bolusul s-a terminat.

Alertele care au loc în timp ce driverul nu este conectat la Combo nu vor fi observate de către driver. Combo nu are nici o modalitate de a împinge automat acea alertă la telefon; întotdeauna telefonul este cel care trebuie să inițieze conexiunea. În consecință, alerta va persista până când driverul se conectează la pompă. Utilizatorii pot apăsa butonul "Reîmprospătați" pentru a declanșa o conexiune și permite driverului să gestioneze alerta chiar atunci și acolo (în loc să aștepte până când AAPS însuși decide să inițieze o conexiune).

**IMPORTANT**: Dacă are loc o eroare, sau apare un avertisment care nu este unul dintre cei care sunt revocați automat, driverul intră în starea de eroare. În această stare, bucla **VA FI BLOCATĂ** până când starea pompei este reîmprospătată! Aceasta este deblocată după ce starea pompei este actualizată (fie prin apăsarea manuală a butonului "Reîmprospătare" sau prin eventuala actualizare a driverului) și nicio eroare nu mai este afișată.

## Lucruri despre care trebuie să fiți atent când utilizați Combo

* Țineți cont că acesta nu este un produs, mai ales la început, utilizatorul trebuie să monitorizeze și să înțeleagă sistemul, limitările și modul în care poate eșua. Se recomandă ferm să NU utilizați acest sistem atunci când persoana care îl utilizează nu este capabilă să înțeleagă complet sistemul.
* Datorită modului în care merge funcționalitatea de control la distanță a pompei Combo, mai multe operațiuni (în special setarea unui profil bazal) sunt lente în comparație cu alte pompe. Aceasta este o limitare regretabilă a Combo, care nu poate fi depășită.
* Nu stabiliți sau anulați o RBT direct în pompă. Bucla presupune controlul RBT și nu poate funcționa în mod fiabil în caz contrar, din moment ce nu este posibil să se determine ora de începere a RBT care a fost setată de către utilizatorul pompei.
* Nu apăsați niciun buton de pe pompă în timp ce AAPS comunică cu pompa (simbolul Bluetooth este afișat în pompă în timp ce este conectat la AAPS). Acest lucru va întrerupe conexiunea Bluetooth. Faceți acest lucru numai dacă există probleme cu stabilirea unei conexiuni (vedeți secțiunea ["Înainte să începeți" de deasupra](#combov2-before-you-begin)).
* Nu apăsați niciun buton în timp ce pompa bolusează. În special, nu încercați să respingeți alertele prin apăsarea de butoane. Vedeți [secțiunea despre alerte](#combov2-alerts) pentru o explicație mai detaliată de ce.

## Listă de verificare atunci când nu poate fi stabilită nicio conexiune cu Combo

Driverul face tot posibilul să se conecteze la Combo, și folosește câteva trucuri pentru a maximiza fiabilitatea. Cu toate acestea, uneori, conexiunile nu sunt stabilite. Iată câțiva pași de făcut pentru a încerca să remediem această situație.

1. Apăsați un buton de pe Combo. Uneori, stiva de Bluetooth a pompei Combo devine non-responsivă și nu mai acceptă conexiuni. Prin apăsarea unui buton din Combo și aprinderea afișajului LCD, stiva Bluetooth este resetată. De cele mai multe ori, acesta este singurul pas necesar pentru rezolvarea problemelor de conectare.
2. Reporniți telefonul. Acest lucru ar putea fi necesar dacă există o problemă cu stiva Bluetooth a telefonului în sine.
3. Dacă capacul de baterie al Combo-ului este vechi, luați în considerare înlocuirea lui. Capacele vechi de baterie pot cauza probleme cu sursa de alimentare a Combo, care afectează Bluetooth.
4. Dacă încercările de conexiune tot nu reușesc, luați în considerare dezasocierea și apoi reasocierea pompei.
