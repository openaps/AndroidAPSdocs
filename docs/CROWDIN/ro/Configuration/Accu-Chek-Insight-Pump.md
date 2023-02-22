# Pompa Accu-Chek Insight

**Aceasta aplicatie face parte dintr-o soluţie de pancreas artificial DIY (Do-it-Yourself), realizata personal) care nu este un produs finit, ceea ce inseamna ca va trebui ca TU sa citesti, să studiezi si să înţelegi sistemul, inclusiv cum să îl folosesti. Nu este ceva creat pentru a gestiona in totalitate tratamentul diabetul, dar permite îmbunătățirea calitatii vieții cu diabet, dacă acordati timpul necesar. Nu te grăbi să o faci, dar acorda-ți timp să înveți. Doar tu esti responsabil de utilizarea acestui sistem.**

* * *

## ***AVERTISMENT:** Dacă ai folosit in trecut Insight cu **SightRemote** te rog **actualizeaza la cea mai nouă versiune AAPS** și **dezinstaleaza SightRemote**.*

## Cerinţe hardware şi software

* O pompă de insulină Accu-Chek Combo (orice versiune de firmware, funcționează toate)

Atentie: AAPS va scrie întotdeauna date în **primul profil al ratei bazale din pompă**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Module/module.md#phone) page which Android version is required to run AndroidAPS.)
* Aplicația AndroidAPS instalată pe telefon

## Instalare

* Pompa Insight nu ar trebui conectată la mai multe dispozitive in acelasi timp. Dacă ai utilizat anterior telecomanda Insight (glucometrul), trebuie să elimini telecomanda din lista cu dispozitive împerecheate a pompei: Meniu > Setări > Comunicare > Elimină dispozitiv
    
    ![Captura de ecran Insight Eliminare glucometru](../images/Insight_RemoveMeter.png)

* În [Config builder](../Configuration/Config-Builder) din aplicaţia AndroidAPS selecteaza cu Accu-Chek Insight în secţiunea pompei
    
    ![Captura de ecran Insight ConfigBuilder](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

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

(settings-in-aaps)=

## Setări în AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](../Configuration/Preferences.md#advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

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

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Refresh": Actualizeaza starea pompei
* "Activează/Dezactivează notificarea de RBT": O pompă standard Insight emite o alarmă atunci când un RBT este terminat. Acest buton permite să activezi sau să dezactivezi această alarmă fără a fi nevoie de configurarea software-ului.
    
    ![Captura de ecran Stare Insight](../images/Insight_Status2.png)

## Setările pompei

Configure alarms in the pump as follows:

* Menu > Settings > Device settings > Mode settings > Quiet > Signal > Sound
* Menu > Settings > Device settings > Mode settings > Quiet > Volume > 0 (remove all bars)
* Menu > Modes > Signal mode > Quiet

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(vibration)=

### Vibrare

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Fără vibraţii din proiectare.
* Firmware 2.x: Vibraţiile nu pot fi dezactivate.
* Firmware 3.x: AndroidAPS livrează bolus în mod silenţios. (minimum [version 2.6.1.4](../Installing-AndroidAPS/Releasenotes.md#version-2-6-1-4))

Firmware version can be found in the menu.

## Înlocuire baterie

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(insight-specific-errors)=

## Insight - erori specifice

### Bolus extins

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Pauză

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Traversarea fusurilor orare cu pompa Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#insight).