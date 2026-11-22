# Automatizacija

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Što je automatizacija?

„**Automatizacija**“ je značajka koja može automatski izvršavati zadatke u AAPS-u.

Automatizacija izvršava određene radnje na temelju jednog ili više uvjeta ili okidača. Okidači mogu biti i neredoviti događaji, kao što su niska ili visoka razina glukoze u krvi (GUK) ili zadana količina negativnog aktivnog inzulina (IOB). Automatizacija može obrađivati i događaje koji se ponavljaju, kao što su obroci ili vježbanje u određeno doba dana, ili situacije kada je korisnik na određenoj udaljenosti od GPS lokacije ili u području Wi-Fi SSID-a. Automatizacija može raditi sigurnosne kopije postavki AAPS-a prema rasporedu ili pri svakoj promjeni Pod-a.

Pravila automatizacije izrađuju se i mijenjaju na zaslonu **Automatizacija** (**Upravljanje → Automatizacija**). Svako pravilo određuju dva svojstva:

- Jedan ili više uvjeta ili „okidača“ koji pokreću radnju.

    Npr. određeni vremenski raspored, događaj ili vrijednost nekog svojstva u AAPS-u

- Jedna ili više radnji koje treba izvršiti.

    Such as an alarm or setting a profile percentage or exporting the AAPS settings on Pod change.


Opcija automatizacije ima mnogo i korisnicima se preporučuje da ih prouče u aplikaciji AAPS, u odjeljku Automatizacija. Primjere automatizacije drugih korisnika možete potražiti i u grupama korisnika AAPS-a na [**Facebooku**](https://www.facebook.com/groups/AndroidAPSUsers) i [**Discordu**](https://discord.gg/4fQUWHZ4Mw).

## Kako automatizacija može pomoći

1. **Automatizacija zadataka koji se ponavljaju:** programirane radnje izvršavaju se automatski, bez korisnikove interakcije.

1. **Manji umor od donošenja odluka:** glavna korist **automatizacije** je to što korisnika oslobađa tereta ručnih intervencija u **AAPS-u**. [Istraživanje](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6286423/#ref4) procjenjuje da osobe s dijabetesom tipa 1 u prosjeku moraju donijeti 180 dodatnih odluka dnevno. **Automatizacija** može smanjiti mentalno opterećenje i osloboditi korisnikovu energiju za druge dijelove života.

1. **Moguće bolja kontrola glikemije:** na primjer, **automatizacija** može osigurati da se **privremeni ciljevi** uvijek postave kada su potrebni, čak i u užurbanim danima ili kada nešto zaboravite. Na primjer, ako dijete s dijabetesom ima tjelesni odgoj u školi utorkom u 10 sati i četvrtkom u 14 sati i treba visoki privremeni cilj („TT“) 30 minuta prije sporta, **privremeni cilj** može se uključiti putem **automatizacije**.

1. **AAPS se može jako prilagoditi** tako da u određenim situacijama bude više ili manje agresivan, prema želji korisnika. Na primjer, pokretanje privremeno smanjenog postotka **profila** na zadano vrijeme ako se usred noći pojavi negativni **aktivni inzulin**, što pokazuje da je postojeći **profil** možda prejak.

Primjer u nastavku pokazuje kako **automatizacija** može ukloniti neke korake.

Korisnik vježba svako jutro u 6 sati: mora se sjetiti da u 5 sati, prije vježbanja, u AAPS-u ručno postavi privremeni cilj „Aktivnost“.

![Manual actions without automation](../images/Automations/automation_concept_manual.png)

Korisnik je postavio **automatizaciju** koja u 5 sati pokreće privremeni cilj „Aktivnost“ kako bi njegov **GUK** i **aktivni inzulin** bili optimalni za vježbanje u 6 sati:

![Actions done by an automation](../images/Automations/automation_concept_automated.png)

## Važne stvari prije početka korištenja automatizacije

1. Prije postavljanja nekih automatizacija trebali biste imati razumnu kontrolu **GUK-a** s **AAPS-om**. Automatizaciju ne treba koristiti za nadoknađivanje loše podešenih postavki bazala, **ISF-a** ili **CR-a** (više o tome niže). Nemojte postavljati automatsku **zamjenu profila** kako biste nadoknadili porast **GUK-a** zbog _npr._ hrane; to je bolje riješiti drugim strategijama (SMB-ovi itd.).

1. Kao i svaka tehnologija, **CGM-ovi**, **pumpe** i telefoni mogu zakazati: tehnički problemi ili pogreške senzora mogu ometati radnje **automatizacije**, pa može biti potrebna ručna intervencija.

1. **Requirements for Automations are likely to change as routines change**. Kada prelazite između razdoblja posla, škole i praznika, postavite podsjetnik u kalendaru da provjerite koje su **automatizacije** trenutačno aktivne (lako ih je aktivirati i deaktivirati). Na primjer, ako idete na odmor i više vam ne treba automatizacija za školski sport ili svakodnevno vježbanje, ili trebate promijeniti vremena.

1. **Automatizacije** mogu biti u sukobu jedna s drugom, pa je dobro svaku novu postavku **automatizacije** pažljivo provjeriti u sigurnom okruženju i razumjeti zašto se neka **automatizacija** pokrenula ili nije pokrenula onako kako ste očekivali.

1. Ako koristite Autosens, pokušajte koristiti **privremene ciljeve** umjesto **zamjena profila**. **Privremeni ciljevi** ne vraćaju Autosens na 0. **Zamjene profila** resetiraju Autosens.

1. Većinu **automatizacija** treba postaviti samo na **ograničeno trajanje**, nakon čega **AAPS** može ponovno procijeniti stanje i ponoviti **automatizaciju** ako je potrebno i ako je uvjet još uvijek ispunjen. Na primjer, „pokreni privremeni cilj od 7,0 mmol/L na 30 min“ ili „pokreni **profil** 110% na 10 min“ _i_ „pokreni privremeni cilj od 5,0 mmol/L na 10 min“. Korištenje **automatizacije** za trajne promjene (npr. jači postotak profila) nosi rizik od hipoglikemije.

## Kada mogu početi koristiti automatizaciju?

**Automatizaciju** možete početi koristiti u **Cilju 10**.

## Gdje se u AAPS-u nalazi automatizacija?

Otvorite **Upravljanje** u donjoj navigaciji glavnog zaslona i odaberite **Automatizacija**.

## Kako mogu postaviti automatizaciju?

Da biste postavili **automatizaciju**, na zaslonu Automatizacija pritisnite gumb **+** i izradite „pravilo“:

![Izrada automatizacije](../images/Automations/automation_create.png)

* dajte „pravilu“ naslov (Naziv zadatka);
* pritisnite „**UREDI**“ pod **Uvjet**. Na zaslonu **Uvjet** odaberite kako se okidači povezuju (**I**, **Ili**, **Isključivo ili**) i pritisnite „**Dodaj okidač**“:

![Uvjet automatizacije](../images/Automations/automation_trigger_editor.png)

* dodajte barem jedan okidač:

![Okidači automatizacije](../images/Automations/automation_triggers.png)

* pritisnite „**DODAJ**“ pod **Radnja** i odaberite jednu radnju:

![Radnje automatizacije](../images/Automations/automation_actions.png)

* spremite pravilo gumbom **Spremi** i provjerite je li kućica lijevo od naziva pravila „označena“, kako bi **automatizacija** bila aktivna:

![Automatizacija aktivirana](../images/Automations/automation_rule_activated.png)

Da biste deaktivirali pravilo **automatizacije**, odznačite kućicu lijevo od naziva **automatizacije**. Primjer u nastavku prikazuje **automatizaciju** koja je aktivirana („označeno“) ili deaktivirana („neoznačeno“):

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)


Kada postavljate **automatizaciju**, najprije je možete isprobati tako da pod „Radnje“ uključite opciju „Obavijest“. Tako će **AAPS** najprije prikazati obavijest umjesto da stvarno automatski izvrši radnju. Kada ste sigurni da se obavijest pojavila u pravo vrijeme i pod pravim uvjetima, pravilo **automatizacije** možete promijeniti tako da „Obavijest“ zamijenite „Radnjom“.

![Alert actions](../images/Automations/automation_alert_actions.png)

```{admonition} Important note
:class: note

**Automatizacija** je aktivna i kada je petlja onemogućena!
```


## Kada se pravila provjeravaju

**AAPS** provjerava sva pravila **automatizacije** svaki put kada obradi novo očitanje glukoze, pa se pravila procjenjuju u ritmu vašeg CGM-a, i kada je zaslon telefona isključen. Pravila se provjeravaju i kada se telefon počne puniti, kada se promijeni mreža ili lokacija te kada se poveže Bluetooth uređaj. Istodobno se izvodi samo jedna provjera, pa se pravilo čije radnje traju neko vrijeme (na primjer naredba pumpi) ne može izvršiti dvaput.

## Sigurnosne granice

Za **automatizaciju** postoje sigurnosne granice:

* **Privremeni cilj** koji postavlja **automatizacija** mora biti između 72 i 180 mg/dL (ili 4 i 10 mmol/L).
* **Postotak profila** mora biti između 50% i 130%.
* There is a 5 minute time limit between executions of **Automation** (and first execution).

## Pravilna upotreba negativnih vrijednosti

```{admonition} Warning
:class: warning

Budite oprezni kada u **automatizaciji** odabirete negativnu vrijednost
```

Budite oprezni kada u „Uvjetu“ **automatizacije** odabirete „negativnu vrijednost“, npr. s „je manje od“. Na primjer:

![Comparison operators](../images/Automations/automation_comparison_operators.png)

**Primjer 1:** uvjet **„je manje od“** „-0,1 mmol/L“ (ili „-2 mg/dL“) će:

Pokrenite **automatizaciju** za svaki broj koji je **strogo manji od** -0,1 (-2). To uključuje brojeve kao što su -0,2, -0,3, -0,4 (-4, -6, -8) i tako dalje. Imajte na umu da sam broj -0,1 (-2) **nije** uključen u ovaj uvjet. (Uvjet „je jednako ili manje od -0,1 mmol/L (-2 mg/dL)“ _uključio bi_ -0,1 mmol/L ili -2 mg/dL).

**Primjer 2:** uvjet „je veće od“ -0,1 mmol/L (-2 mg/dL) će:

Pokrenuti **automatizaciju** za svaki broj koji je **veći od** -0,1 mmol/L (-2 mg/dL). To uključuje brojeve kao što su 0, 0,2, 0,4 mmol/L (0, 4, 8 mg/dL) i svaki drugi pozitivan broj.

Kada odabirete te uvjete i vrijednosti, važno je pažljivo razmisliti što točno želite postići svojom **automatizacijom**.

(automations-automation-triggers)=
## Okidači automatizacije

![Okidači automatizacije](../images/Automations/automation_triggers.png)

Pomaknite se prema dolje da vidite ostatak popisa:

![Okidači automatizacije, nastavak](../images/Automations/automation_trigger_picker_2.png)

Korisnik može odabrati različite „okidače“. Okidači su uvjeti koji moraju biti ispunjeni da bi se automatizacija izvršila. Popis u nastavku nije potpun:

**Okidač:** povezivanje uvjeta

**Opcije:**

Više uvjeta može se povezati s
* „I“
* „Ili“
* „Isključivo ili“ (to znači da će se radnja ili radnje izvršiti ako je ispunjen jedan – i samo jedan – od uvjeta)

**Okidač:** vrijeme i ponavljajuće vrijeme

**Opcije:**

* vrijeme = jednokratni vremenski događaj
* ponavljajuće vrijeme = nešto što se događa redovito (npr. jednom tjedno, svaki radni dan itd.)

**Okidač:** lokacija

**Opcije:**

* u [Postavke > Automatizacija](#preferences-maintenance-settings) korisnik može odabrati potrebnu uslugu lokacije.

**Okidač:** usluga lokacije

**Opcije:**

* Koristi pasivnu lokaciju: **AAPS** uzima lokaciju samo kada je traže druge aplikacije.
* Koristi mrežnu lokaciju: lokacija vaše Wi-Fi mreže.
* Koristi GPS lokaciju (Pozor! To može jako trošiti bateriju!)

**Okidači**: podaci pumpe i senzora

* Okidač Starost kanile: dostupan za sve pumpe
* Okidač Starost inzulina: dostupan za podržane pumpe
* Okidač Starost baterije pumpe: dostupan za podržane pumpe
* Okidač Starost senzora: uvijek dostupan
* Okidač Aktivacija Pod-a: dostupan za pumpe bez katetera

Imajte na umu da se kod svih okidača vezanih uz starost usporedba „jednako“ teško može ispuniti, pa su u tom slučaju potrebna dva okidača koji čine raspon

* Okidač Razina spremnika: dostupan za sve pumpe; usporedba "NOT\_AVAILABLE" ne radi za ovaj okidač jer je vrijednost u **AAPS-u** uvijek popunjena
* Okidač Razina baterije pumpe: dostupan za podržane pumpe; usporedba "NOT\_AVAILABLE" ne radi za ovaj okidač jer je vrijednost u **AAPS-u** uvijek popunjena

(automations-automation-action)=
## Radnja

![Radnje automatizacije](../images/Automations/automation_actions.png)

Pomaknite se prema dolje da vidite ostatak popisa:

![Radnje automatizacije, nastavak](../images/Automations/automation_action_picker_2.png)

**Radnje:** pokreni **privremeni cilj**

**Opcije:**

* **GUK** mora biti između 72 mg/dL i 180 mg/dL (4 mmol/L i 10 mmol/L)
* **TT** radi samo ako ne postoji prethodni privremeni cilj — **AAPS** to automatski dodaje u pravilo kao redak „**Preduvjeti: Privremeni cilj ne postoji**“

**Radnje:** zaustavi **privremeni cilj**

**Opcije:**

nema

**Radnje:** **Postotak profila**

**Opcije:**

* **Profil** mora biti između 50% i 130%
* radi samo ako je prethodni postotak 100%

**Actions:** **Change smoothing** (in the **Loop & insulin** group)

**Opcije:**

* select the [smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) to switch to. The list is the same as under **Configuration** > **Smoothing**, and the action does exactly what a change there does: the new method is saved, synced to paired clients, and the BG data is smoothed again right away.
* izvršava se samo ako ta metoda zaglađivanja već nije aktivna — **AAPS** to automatski dodaje u pravilo kao redak „**Preduvjeti: Zaglađivanje … nije aktivno**“. Kada je odabrano zaglađivanje aktivno, pravilo se tiho preskače.
* Example: a new sensor is often noisy during its first day. Two rules with the **Sensor age** trigger give stronger filtering while the sensor settles, and lag-free smoothing after that:
  * **Sensor age** less than 24 h: **Change smoothing** to **Unscented Kalman Filter**
  * **Sensor age** more than 24 h: **Change smoothing** to **Average smoothing**

**Radnje:** **Bilješka** (u skupini **Upozorenja** na popisu)

**Opcije:**

* odaberite događaj koji se bilježi: **Bilješka**, **Tjelovježba**, **Pitanje**, **Objava** ili **Promjena mjesta primjene pumpe**, i neobaveznu bilješku. Naziv radnje mijenja se u događaj koji odaberete.
* **Trajanje**: koristi se za **Bilješka**, **Tjelovježba** i **Promjena mjesta primjene pumpe**. **Pitanje** i **Objava** nemaju trajanje: umjesto toga bilježe vaš trenutačni GUK.
* **Promjena mjesta primjene pumpe** resetira starost kanile, kao da ste promjenu mjesta primjene zabilježili ručno. Primjer: neke pumpe (kao Combo) same bilježe zamjenu spremnika, ali ne i promjenu mjesta primjene. Ako uvijek mijenjate oboje zajedno, pravilo sa **Starost inzulina** manje od 1 sata i **Starost kanile** više od 24 sata može umjesto vas zabilježiti promjenu mjesta primjene.

![Događaji radnje Bilješka](../images/Automations/automation_action_careportal_events.png) ![Radnja Bilješka postavljena na Promjena mjesta primjene pumpe](../images/Automations/automation_action_careportal_site_change.png)

**Actions:** **Send SMS to all numbers** (in the **Alerts** group)

**Opcije:**

* unesite tekst poruke. Šalje se na sve telefonske brojeve dopuštene u postavkama [SMS Communicatora](../RemoteFeatures/SMSCommands.md). Dodatak SMS Communicator mora biti omogućen.

**Radnje:** **Promijeni profil u** (u skupini **Profil**)

**Opcije:**

* odaberite **profil** koji treba aktivirati. Aktivira se na 100%, bez vremenskog pomaka. Ako je taj profil već aktivan, radnja ne radi ništa.

**Radnje:** **Omogući/onemogući SMB** (u skupini **Petlja i inzulin**)

**Opcije:**

* odaberite **Uključeno** ili **Isključeno**. To mijenja postavku **Omogući SMB** u OpenAPS SMB, točno kao da ste je promijenili u **Postavkama**, i ostaje tako dok je vi ili neko drugo pravilo ne vratite.

**Actions:** **Run Autotune** (in the **Loop & insulin** group)

**Opcije:**

* odaberite profil koji se podešava i broj dana: pogledajte [Pokretanje Autotunea pravilom automatizacije](#autotune-run-autotune-with-an-automation-rule).

**Radnje:** **Zaustavi obradu** (u skupini **Petlja i inzulin**)

**Opcije:**

* nema. While the conditions of a rule with this action are true, **AAPS** does not check the rules below it in the list. As soon as its conditions are false again, the rules below are checked as usual. Dodajte je pravilu koje mora imati prednost pred pravilima ispod njega (pogledajte [redoslijed automatizacija](#Automations-the-order-of-the-automations-in-the-list-matters)).

**Radnje:** **Pokreni scenu**, **Omogući scenu**, **Onemogući scenu** (u skupini **Scene**)

**Opcije:**

* odaberite [scenu](Scenes.md) koju želite pokrenuti, omogućiti ili onemogućiti.

Kada je „Radnja“ dodana, zadane vrijednosti morate promijeniti u željeni broj tako da ih kliknete i podesite.

![Temp target action values](../images/Automations/automation_action_temp_target_values.png)

(Automations-the-order-of-the-automations-in-the-list-matters)=
## Redoslijed **automatizacija** na popisu je važan
 **AAPS** izvršava izrađena pravila redoslijedom prioriteta, počevši od vrha popisa **automatizacije**. For example, if the ‘Low’ **Automation** is the most important **Automation**, above all other rules, then this **Automation** should appear at the top of the user’s **Automation** list as demonstrated below:


![List of automation rules](../images/Automations/automation_rule_list.png)

Da biste promijenili prioritet pravila **automatizacije**, dodirnite i držite ručku **=** na desnoj strani pravila. Reorder the **Automations** by moving the rules up or down.

![Reorder automation rules](../images/Automations/automation_rule_reorder.png)

## Kako izbrisati pravila automatizacije

Da biste izbrisali pravilo **automatizacije**, kliknite ikonu kante za smeće.

![Delete automation rules](../images/Automations/automation_rule_delete.png)

## Primjeri automatizacije

U nastavku su primjeri **automatizacije**. Further discussion on **Automations** and how users have individualised their **Automation** can be found in Facebook discussions groups or on Discord. Primjere u nastavku ne biste trebali preuzimati ako dobro ne razumijete kako će **automatizacija** raditi.

(automations-low-glucose-temp-target)=
### Privremeni cilj kod niske glukoze

Ova **automatizacija** automatski pokreće **privremeni cilj** kada **GUK** padne ispod određenog praga — ovdje, kada je glukoza manja od 70 mg/dL, pokreće se cilj od 110 mg/dL na 30 minuta:

![Example: low glucose rule](../images/Automations/automation_example_low_glucose_rule.png)

### Privremeni cilj za vrijeme ručka (s „Lokacijom“)

![Example: lunch rule](../images/Automations/automation_example_lunch_rule.png)

Ova **automatizacija** izrađena je za korisnika koji svaki radni dan ruča na poslu otprilike u isto vrijeme, ali pokreće se samo ako se korisnik nalazi na zadanoj „lokaciji“.  Dakle, ako korisnik jednog dana nije na poslu, ova se **automatizacija** neće aktivirati.

Ova **automatizacija** u 13:00 postavlja niski **privremeni cilj** (Prije obroka) kako bi GUK spustila na 90 mg/dL (ili 5 mmol/L) kao pripremu za ručak.

„Okidač“ lokacija ima naziv, položaj (dodirnite **Odaberi na karti** ili koristite svoju trenutačnu lokaciju) i polumjer u metrima, a pokreće se kada ste unutar (ili izvan) područja:

![Example: lunch rule with location condition](../images/Automations/automation_example_lunch_location_condition.png)

Zbog veze „I“ **automatizacija** se izvršava samo u „odabrano vrijeme“ i ako je korisnik na odabranoj lokaciji.

**Automatizacija** se neće pokrenuti ni u jedno drugo vrijeme na ovoj lokaciji, niti u ovo vrijeme izvan polumjera od 50 metara oko odabranog položaja.

### Automatizacija s lokacijom prema Wi-Fi SSID-u

Wi-Fi SSID dobra je opcija za pokretanje **automatizacije** dok ste u dometu određene Wi-Fi mreže (u usporedbi s GPS-om): prilično je precizan, troši manje baterije i radi u zatvorenim prostorima gdje GPS i druge usluge lokacije možda nisu dostupne.

Here is another example of setting up a **Temp Target** for work days only before breakfast (1).


The **Automation** will trigger at 05:30am only on Monday-Friday (2)  
and while being connected to a home Wi-Fi network (3).


Zatim će postaviti **privremeni cilj** od 75 mg/dL na 30 minuta (4). Jedna od prednosti uključivanja lokacije je da se pravilo neće pokrenuti ako je korisnik, na primjer, na putovanju ili godišnjem odmoru.

![Wi-Fi pravilo: naziv zadatka (1), uvjet vremena radnim danima (2) i uvjet Wi-Fi SSID (3)](../images/Automations/automation_example_wifi_rule.png)

Pomaknite se prema dolje da biste vidjeli radnju: **privremeni cilj** od 75 mg/dL na 30 minuta (4).

![Radnja Wi-Fi pravila: pokreni privremeni cilj od 75 mg/dL na 30 minuta (4)](../images/Automations/automation_example_wifi_action.png)

Ovo je snimka zaslona s pojedinostima o okidačima **automatizacije**:

1) Pod glavnim „I“ (oba uvjeta moraju biti ispunjena za pokretanje) 1) Ponavljajuće vrijeme = P,U,S,Č,P u 5:30  
1) Wi-Fi SSID = My_Home_WiFi_Name

![Example: WiFi condition](../images/Automations/automation_example_wifi_condition.png)

(automating-preference-settings-export)=

## Automatski izvoz postavki

### Izvoz bez nadzora: po rasporedu (dnevno)

Snimke zaslona s pojedinostima o okidačima automatizacije:

1) Uvjet: Ponavljajuće vrijeme = P,U,S,Č,P u 8:00 1) Radnja: Izvoz postavki (za „Tekst u tretmanima“ unesite „Dnevno“)

![Izvoz po rasporedu](../images/Automations/automation_settings_export_daily.png)

Napomena: izvršenje izvoza bit će zabilježeno u Careportalu

### Izvoz bez nadzora: Aktivacija Pod-a (samo pumpe bez katetera)

Snimke zaslona s pojedinostima o okidačima automatizacije:

1) Uvjet: Aktivacija Pod-a 1) Radnja: Izvoz postavki (za „Tekst u tretmanima“ unesite „Aktivacija Pod-a: izvoz postavki“)

![Izvoz pri aktivaciji Pod-a](../images/Automations/automation_settings_export_pod_activation.png)

Napomena: izvršenje izvoza bit će zabilježeno u Careportalu. Napomena: automatizacija se **uopće** neće pokrenuti ako prije toga niste barem jednom ručno izvezli postavke. Za pravilno uključivanje izvoza postavki bez nadzora pogledajte [Postavke → Održavanje](#preferences-maintenance-settings).


## Dnevnik automatizacije

**AAPS** prikazuje dnevnik zadnjih događaja **automatizacije** na dnu zaslona **Automatizacija**, ispod pravila. Pomoću njega provjerite jesu li se vaša pravila pokrenula kada ste očekivali.

U primjeru u nastavku omogućeno je pravilo **Low glucose temp target** (1) (pogledajte [Privremeni cilj kod niske glukoze](#automations-low-glucose-temp-target) gore). Dnevnik (2) pokazuje da je u 15:09 glukoza pala ispod 70 mg/dL i da se pravilo pokrenulo:
* radnja je bila "Pokreni privremeni cilj: 110mg/dL@30 min": **privremeni cilj** od 110 mg/dL na 30 minuta;
* **OK** na kraju znači da je radnja uspješno izvršena.

![Zaslon Automatizacija: omogućeno pravilo (1) i njegov unos u dnevniku (2)](../images/Automations/automation_example_log.png)

(automations-troubleshooting)=

## Rješavanje problema

* Problem: __AAPS ne pokreće moje automatizacije?__

Provjerite je li kućica lijevo od naziva **automatizacije** „označena“, kako bi pravilo bilo aktivno:

![Automation rules switched on and off](../images/Automations/automation_rule_activated_deactivated.png)

* Problem: __Moje automatizacije pokreću se pogrešnim redoslijedom.__

Provjerite redoslijed prioriteta svojih pravila, kako je opisano gore.

* Problem: __Uvjet prikazuje "Nepoznati okidač … - nikada nije ispunjen".__

Pravilo sadrži okidač koji ova verzija **AAPS-a** ne može pročitati, na primjer nakon što ste se vratili na stariju verziju ili uvezli postavke iz novije verzije. Takav okidač nikada nije ispunjen, pa se pravilo ne izvršava. Ostaje nepromijenjen, kako bi ga novija verzija i dalje mogla koristiti. Uredite pravilo i zamijenite okidač ili ažurirajte **AAPS**.

## Alternative automatizaciji

Napredni korisnici mogu automatizirati zadatke i na druge načine, pomoću IFTTT-a ili Android aplikacije drugog proizvođača pod nazivom Automate. 
