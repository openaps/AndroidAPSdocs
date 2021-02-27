# Pompa Accu-Chek Insight

**Aceasta aplicatie face parte dintr-o soluţie de pancreas artificial DIY (Do-it-Yourself), realizata personal) care nu este un produs finit, ceea ce inseamna ca va trebui ca TU sa citesti, să studiezi si să înţelegi sistemul, inclusiv cum să îl folosesti. Nu este ceva creat pentru a gestiona in totalitate tratamentul diabetul, dar permite îmbunătățirea calitatii vieții cu diabet, dacă acordati timpul necesar. Nu te grăbi să o faci, dar acorda-ți timp să înveți. Doar tu esti responsabil de utilizarea acestui sistem.**

* * *

## ***AVERTISMENT:** Dacă ai folosit in trecut Insight cu **SightRemote** te rog **actualizeaza la cea mai nouă versiune AAPS** și **dezinstaleaza SightRemote**.*

## Cerinţe hardware şi software

* O pompă de insulină Accu-Chek Combo (orice versiune de firmware, funcționează toate)

Atentie: AAPS va scrie întotdeauna date în **primul profil al ratei bazale din pompă**.

* Un telefon Android (in principiu orice versiune de Android ar funcționa cu Insight, dar verifica pe pagina [Module](../Module/module#phone) care este versiunea Android necesară pentru a rula AndroidAPS.)
* Aplicația AndroidAPS instalată pe telefon

## Instalare

* Pompa Insight nu ar trebui conectată la mai multe dispozitive in acelasi timp. Dacă ai utilizat anterior telecomanda Insight (glucometrul), trebuie să elimini telecomanda din lista cu dispozitive împerecheate a pompei: Meniu > Setări > Comunicare > Elimină dispozitiv
    
    ![Captura de ecran Insight Eliminare glucometru](../images/Insight_RemoveMeter.png)

* În [Config builder](../Configuration/Config-Builder) din aplicaţia AndroidAPS selecteaza cu Accu-Chek Insight în secţiunea pompei
    
    ![Captura de ecran Insight ConfigBuilder](../images/Insight_ConfigBuilder.png)

* Atinge roata pentru a deschide setările Insight.

* În setări, apasă butonul 'Insight conectare' din partea de sus a ecranului. Ar trebui să vezi o listă cu toate dispozitivele bluetooth din apropiere (jos stânga).
* Pe pompa Insight mergi la Menu > Settings > Communication > Add Device. Pompa va afişa pe următorul ecran (mai jos dreapta) numărul de serie al pompei.
    
    ![Captura de ecran Insight Împerechere 1](../images/Insight_Pairing1.png)

* Înapoi la telefon, apasă pe numărul de serie al pompei din lista dispozitivelor bluetooth. Apoi apasă pe conectare pentru a confirma.
    
    ![Captura de ecran Insight Împerechere 2](../images/Insight_Pairing2.png)

* Atât pompa cât şi telefonul vor afişa un cod. Verifică iar daca codurile sunt identice pe ambele dispozitive confirma atât pe pompa cât şi pe telefon.
    
    ![Captura de ecran Insight Împerechere 3](../images/Insight_Pairing3.png)

* Succes! Bucura-te, ai conectat cu succes pompa la AndroidAPS.
    
    ![Captura de ecran Insight Împerechere 4](../images/Insight_Pairing4.png)

* Ca sa verifici dacă totul este bine, revino la Config Builder în AndroidAPS și apasa rotita de la Insight Pump ca sa intri în setările Insight, apoi apasa Conectare Insight și vei vedea câteva informații despre pompă:
    
    ![Captura de ecran Informații de Împerechere Insight](../images/Insight_PairingInformation.png)

Atentie: Nu va exista o conexiune permanentă între pompă şi telefon. O conexiune va fi stabilită numai dacă este necesar (de ex la stabilirea ratei bazale temporare, livrarea de bolus, citirea istoricului pompei...). În caz contrar, bateriile de la telefon şi de la pompa s-ar consuma mult prea repede.

## Setări în AAPS

**Atentie: Este posibil (doar cu AAPS v2.7. sau mai recent) sa folosesti „Utilizeaza întotdeauna valorile bazale absolute” dacă vrei să folosesti Autotune cu pompa Insight, chiar dacă 'sincronizarea este activată' cu Nightscout.** (în AAPS mergeți la [Preferences > NSClient > Advanced Settings](../Configuration/Preferences#advanced-settings-nsclient)).

![Captura de ecran Setări Insight](../images/Insight_settings.png)

În setările Insight din AndroidAPS, poti activa următoarele opţiuni:

* "Înregistrează schimbarea rezervorului": Se va înregistra automat schimbarea rezervorului de insulină daca rulezi pe pompa "umple canula".

* „Inregistreaza schimbarea tubului”: Se va adauga o notită in baza de date AndroidAPS daca rulezi pe pompa „umplere tub”.

* "Înregistrează schimbările locului de inserție": Se va adauga o notită in baza de date AndroidAPS daca rulezi pe pompa "canula filling (umplere canula)". **Atentie: O modificare a locului de insertie resetează deasemenea si Autosens.**

* "Înregistrează schimbarea bateriei": Se înregistrează schimbarea bateriei atunci când pui baterii noi în pompă.

* „Inregistreaza Mod de operare”: Se va adauga o notită în baza de date AndroidAPS ori de câte ori pornesti, opresti sau întrerupi pomparea.

* "Jurnal alerte": Se va inregistra o notita in baza de date AndroidAPS ori de cate ori pompa emite o alerta (cu exceptia alertelor pentru reamintire, anularea bolusului și a RBT - acestea nu sunt înregistrate).

* "Activare emulare RBT": Pompa Insight poate emite rate bazale temporare (RBT) doar până la 250%. Pentru a rezolva această restricție, daca soliciti RBT mai mare de 250%, emularea va comanda pompei să livreze pentru insulina suplimentara un bolus extins.
    
    **Atentie: Utilizeaza un singur bolus extins odata, folosirea simultana a mai multor bolusuri extinse poate cauza erori.**

* "Dezactivare vibraţii la livrare manuala de bolus": Se dezactivează vibraţiile pompei Insight atunci când livrează un bolus manual (sau bolus extins). Această setare este disponibilă doar cu cea mai recentă versiune de firmware Insight (3.x).

* "Dezactivare vibraţii la livrarea automată de bolus": Se dezactivează vibraţiile pompei Insight atunci când livrează un bolus automat (SMB (super micro bolus) sau bazala temporara cu emulare RBT). Această setare este disponibilă doar cu cea mai recentă versiune de firmware Insight (3.x).

* „Durata de restabilire a conexiunii”: Aceasta definește cât va aștepta AndroidAPS înainte de a încerca din nou reconectarea după o încercare de conectare eșuată. Poți alege de la 0 la 20 de secunde. Dacă întâmpini probleme cu conexiunea, alege o durata de așteptare mai lung.   
      
    Exemplu de durata de restabilire a conexiunii minim = 5 sec. şi maxim = 20 sec.   
    reîncearcă -> fără conexiune -> așteaptă **6** sec.   
    reîncearcă -> fără conexiune -> așteaptă **7** sec.   
    reîncearcă -> fără conexiune -> așteaptă **8** sec.   
    ...   
    Reîncearcă -> fără conexiune -> așteaptă **20** sec.   
    Reîncearcă -> fără conexiune -> așteaptă **20** sec.   
    ...

* "Întârziere deconectare": Aceasta definește in cât timp (în secunde) AndroidAPS se deconecteaza de la pompă după terminarea unei operațiuni. Valoarea implicită este de 5 secunde.

Pentru perioadele în care pompa a fost oprită, AAPS va înregistra o rata bazală de 0%.

În AndroidAPS, fila Accu-Chek Insight afișează starea curentă a pompei și are două butoane:

* "Refresh": Actualizeaza starea pompei
* "Activează/Dezactivează notificarea de RBT": O pompă standard Insight emite o alarmă atunci când un RBT este terminat. Acest buton permite să activezi sau să dezactivezi această alarmă fără a fi nevoie de configurarea software-ului.
    
    ![Captura de ecran Stare Insight](../images/Insight_Status2.png)

## Setările pompei

Configurează alarmele în pompă după cum urmează:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound
* Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remove all bars)
* Menu > Modes > Signal mode > Quiet

Acesta va reduce la tăcere toate alarmele din pompă, permițând AndroidAPS să decidă dacă o alarmă este relevantă pentru tine. Dacă AndroidAPS nu confirmă o alarmă, volumul său va creşte (primul bip, apoi vibraţia).

### Vibrare

În funcţie de versiunea de firmware a pompei dumneavoastră, Insight va vibra scurt de fiecare dată când un bolus este livrat (de exemplu, când AndroidAPS decide o emulare SMB sau TBR se livrează un bolus extins).

* Firmware 1.x: Fără vibraţii din proiectare.
* Firmware 2.x: Vibraţiile nu pot fi dezactivate.
* Firmware 3.x: AndroidAPS livrează bolus în mod silenţios. (minim [versiunea 2.6.1.4](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Versiunea de firmware poate fi găsită în meniu.

## Înlocuire baterie

Durata de viaţă a bateriei pentru Insight atunci când e în buclă variază între 10 şi 14 zile, max. 20 de zile. Utilizatorul care a raportat acest lucru utilizează baterii cu litiu de tip Energizer.

Pompa Insight are o baterie internă mică pentru a păstra funcţiile esenţiale precum ceasul care rulează în timp ce se schimbă bateria detaşabilă. Dacă schimbarea bateriei durează prea mult, această baterie internă se poate termina, ceasul se va reseta, şi după introducerea unei baterii noi vi se va cere să completați din nou ora şi data. Dacă se întâmplă acest lucru, toate intrările in AndroidAPS înainte de schimbarea bateriei nu vor mai fi incluse în calcule, deoarece timpul corect nu poate fi identificat corespunzător.

## Insight - erori specifice

### Bolus extins

Utilizaţi doar un bolus extins la un moment dat deoarece mai multe boluri extinse în acelaşi timp ar putea cauza erori.

### Pauză

Uneori se poate întâmpla ca pompa Insight să nu răspundă în timpul configurării conexiunii. În acest caz, AAPS va afişa următorul mesaj: "Pauză în timpul dialogului de confirmare-resetare bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

În acest caz, dezactivaţi bluetooth-ul pe pompă DAR ȘI PE telefon timp de aproximativ 10 secunde şi apoi reporniți-l din nou.

## Traversarea fusurilor orare cu pompa Insight

Pentru informaţii desprte călătoriile prin diverse fusuri orare, vedeţi secţiunea [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).