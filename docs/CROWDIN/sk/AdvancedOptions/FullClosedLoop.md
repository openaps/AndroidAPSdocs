# Plne uzavretý okruh

```{contents} In this page
:backlinks: entry
:depth: 2
```

Hlavnou výhodou plne uzavretého okruhu **FCL** je, že môže napodobniť umelý pankreas a uľahčiť každodennú liečbu bez potreby bolusov k jedlu.

Hoci **hybridný uzavretý okruh** („HCL“) je založený na algoritme, stále vyžaduje, aby používateľ pred jedlom ručne podal bolusy. Výsledkom môže byť, že okruh prejde do dočasného vypnutia (dočasný nulový bazál), aby zabránil podaniu príliš veľa inzulínu.

Pri **FCL** už nie sú potrebné bolusy podľa veľkosti jedla: nechajte to na algoritmus!  **AAPS** can handle meals without the user giving any bolus, and without making carb inputs, in a mode called ‘un-announced meals’ **(‘UAM’)**. **UAM** umožňuje **AAPS** lepšie znášať nesprávne zadané sacharidy tým, že je agresívnejší.

## Čo očakávať?

Existuje veľa publikovaných štúdií o priaznivých výsledkoch, ktoré **FCL** môže dosiahnuť. Ďalšie čítanie nájdete tu:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Úspech s **FCL** vyžaduje, aby používateľ:

- skontroloval, či spĺňa požiadavky pre **FCL**;
- nastavil **automatizácie** prispôsobené potrebám svojej každodennej liečby; a
- doladil a upravil nastavenia **AAPS** (najmä **automatizácie**).


## Všeobecné úvahy, prečo (ne)prejsť z HCL na FCL

**FCL** nie je pre každého:

- Niektorí používatelia **FCL** dosahujú TIR (70–180) okolo 90 % a HbA1c pod 6 %, iní však uprednostňujú prísnejšiu kontrolu. Ak chcete pri strave s rýchlymi sacharidmi čo najviac obmedziť hodnoty nad 140 mg/dl, pravdepodobne budete potrebovať predbolus.
- Ladenie **AAPS** môže byť náročné. It is not for those users who feel overwhelmed by AAPS.  Na úpravu a doladenie **FCL** si budete musieť vyhradiť niekoľko týždňov. Investovanie tohto času môže priniesť lepšie výsledky a lepšiu kontrolu **glykémie**.
- Zvládanie jedál môže byť jednoduchšie, ale pohyb môže byť pri **FCL** stále náročný. Väčšina z nás chce obmedziť jedlo navyše pri športe, aby udržala telesnú hmotnosť.
- Vytvoriť **FCL** pre deti je stále ťažké (pozrite nižšie).


## Dobre vyladený hybridný uzavretý okruh

It is advisable to first establish a well-tuned **HCL** before considering the transition to **FCL**.  Úspech s **FCL** vyžaduje veľmi osobné, individuálne vyladenie nastavení používateľa, aby **AAPS** mohol podávať inzulín tak, že presne napodobní VÁŠ úspešný režim hybridného uzavretého okruhu.

**FCL** vyžaduje, aby si používateľ nastavil a vyladil svoje **automatizácie**. Pred začatím s **FCL** však používateľ musí dobre rozumieť tomu, ako potrebuje dávkovať inzulín. Chyby môžu byť zakryté inými chybami, ktoré ich vyrovnávajú. To môže vytvoriť nestabilný systém **FCL**, ktorý sa neskôr ťažko opravuje. S FCL by ste mali očakávať podobné %TIR, aké dnes vidíte pri **HCL**.

**FCL je svojpomocné (DIY) nastavenie automatizácií, ktoré si používateľ určí analýzou svojich dát z úspešného HCL aj z prvých skúseností s FCL pri ladení nastavení.**

## Rýchly inzulín (Lyumjev, Fiasp)

**FCL** vyžaduje rýchly inzulín.  Vďaka tomu dokáže **FCL** na začiatku nárastu **glykémie** po jedle udržať **glykémiu** v rozsahu (podľa bežnej definície pod 180 mg/dl (10 mmol/l)).

Modelová štúdia (podrobnosti pozrite LINK FullLoop V2/March2023; tam časť 2.2) dokáže v číslach ukázať, že *rýchlejšie inzulíny*

Zdroj:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- will result in significantly lower **BG** peaks than slower insulins;
- znesú prvý bolus k jedlu oneskorený o pár minút bez neprijateľne vysokých vrcholov; a
- minimalizujú vplyv rôzneho množstva sacharidov (veľkosti jedla) na vrchol **glykémie**.

**FCL** pravdepodobne nebude účinný s iným inzulínom ako Lyumjev alebo Fiasp, ak používateľ nemá veľmi miernu až nízkosacharidovú stravu.

Fiasp alebo Lyumjev však môžu viesť k častému upchatiu pumpy, aj po optimalizácii vecí, ako je dĺžka ihly. Je dôležité sledovať, ako dlho je zavedená kanyla alebo pod. Pre mnohých používateľov je 48 hodín hranica, po ktorej inzulín prestáva dobre účinkovať a kanyla/pod zlyháva.

## Požiadavky

Hodnoty **glykémie** a stabilné pripojenie Bluetooth sú potrebné, aby **AAPS** mohol optimálne fungovať bez straty cenného času. **FCL** vyžaduje technicky stabilný systém 24/7:

- your **CGM’s performance**. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Podobne aj kalibrácie **CGM** môžu spôsobiť skoky v hodnotách.
- ako a kde prebieha vyhladzovanie **CGM** a čo to môže znamenať pre vaše ladenie. Najmä ako je definovaná delta a ako ju AAPS rozpozná ako znak začínajúceho jedla.
- Bluetooth stability for the pump and CGM;
- predchádzanie upchatiu pumpy (alebo aspoň jeho včasné rozpoznanie);
- tok dát, aplikácie používané v telefóne a rozdiely medzi dňami používania senzora;
- udržiavanie všetkých komponentov **AAPS** dobre nabitých a náhradných dielov blízko pri sebe; a
- výmena kanyly (alebo podu) vždy dostatočne skoro, aby sa znížilo riziko upchatia;

Uvedené sa bude líšiť podľa komponentov vášho systému **AAPS** a vášho životného štýlu.

## Obmedzenia súvisiace s jedlom

- Nastavenie **FCL** môže byť jednoduchšie pre ľudí, ktorých strava neobsahuje zložky s rýchlym silným účinkom na **glykémiu** a ktorých jedlá sa zo dňa na deň výrazne nemenia. To nemusí nutne znamenať nízkosacharidovú stravu.

- Strava bohatá na tuky alebo bielkoviny, prípadne pomalé trávenie/gastroparéza, robí **FCL** skôr jednoduchším než ťažším, pretože neskoré sacharidy pekne pokryjú nevyhnutné „chvosty“ neskorého pôsobenia bolusu potrebného okolo vrcholu.

### Glykemický index a účinok na glykémiu

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose' ('EBG')

- Začnite mierne/nízko a vylaďte nastavenia svojho **profilu**. Až potom „testujte“ jedlá s vysokým **EBG**.
- Pri jedle s veľmi vysokým **EBG** zvážte úvodný bolus < 50 %.

1) **Žiadny EBG**: napr. čerstvé mäso, ryby, vajcia, slanina, oleje, syr. 2) **Nízky EBG**: napr. čerstvá zelenina a bobuľové ovocie, huby, orechy, mlieko, jogurt, tvaroh. 3) **Stredný EBG**: napr. celozrnný chlieb/cestoviny, zemiaky, divoká ryža, ovos, sušené ovocie. 4) **High EBG**: e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Veľmi vysoký EBG**: napr. cukor, sladené nápoje, ovocné džúsy, kukuričné lupienky, cukríky, sladkosti, zemiakové lupienky, slané tyčinky.

![Glykemický index a účinok na glykémiu](../images/fullClosedLoop01.png)

Najťažšie jedlá pre **FCL** sú tie, ktoré obsahujú výlučne zložky s veľmi vysokým a vysokým **EBG** (pozrite červenú farbu na obrázku): **Glykémia** nielen rýchlo vystrelí nahor, ale je tu aj málo tukov/bielkovín/vlákniny, ktoré by vyvážili nevyhnutný „chvost“ pôsobenia inzulínu, ktorý príde so snahou skoro zvládnuť vysokú glykémiu.

Nepravidelná konzumácia malých jedál a sladených nápojov s rýchlo vstrebateľnými sacharidmi je pre **FCL** problémom.


## Príprava na aktivitu/šport

Pri cvičení alebo aktivite sa pri pumpe alebo hybridnom uzavretom okruhu odporúča, aby používateľ pred cvičením znížil **IOB**.

Pri **FCL** je algoritmus vyladený tak, aby rozpoznal **UAM** a automaticky podal inzulín proti nárastu **glykémie**.  Vysoký **Dočasný cieľ** a nižšie **Percento profilu** (účinné už okolo začiatku jedla) by sa mali nastaviť dostatočne dlho pred akoukoľvek aktivitou.

Nezvyčajná alebo nepravidelná úroveň pohybu prináša pre **FCL** ťažkosti. Pohyb treba plánovať vopred (najmä ak chcete znížiť potrebu záchranných sacharidov/jedla pri poklesoch počas športu). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dL) **BG**  target, with **Enable SMB with high temp target** switched off in **AAPS** **Settings**.

## Prekážky pre deti

**FCL** môže pre deti priniesť ďalšie ťažkosti, napríklad:

- Lyumjev or Fiasp may not be available or well tolerated.
- Hourly basal rate may be very low, providing a poor basis for big **SMBs**.
- Strava môže obsahovať veľa sladkých zložiek. Pri typicky malom objeme krvi v malom tele je silný sklon k veľmi vysokým špičkám **glykémie**.
- Rastové hormóny a výrazné zmeny citlivosti na inzulín sťažujú presné vyladenie **FCL**.


## Povolenie zosilnených SMB: bezpečnosť

Pri **HCL** sú zavedené bezpečnostné obmedzenia veľkosti bolusov, ktoré môže okruh podať automaticky.

Používatelia **FCL** už nemusia podávať veľký bolus okolo začiatku jedla. Preto treba rozšíriť obmedzenia veľkosti **SMB**, aby okruh dokázal podať dostatočne veľké **SMB**.

Ak používate **AAPS** vo verzii master, odporúča sa v **Nastaveniach** **AAPS** nastaviť maximálnu povolenú veľkosť **SMB**, ktorú **FCL** môže podať (maxUAMSMBBasalMinutes=120, t. j. bazál za 2 hodiny pre danú dennú dobu).

Ak je vaša bazálna dávka veľmi nízka, výsledné limity **SMB** môžu byť príliš nízke na dostatočné zvládnutie nárastov **glykémie** po jedle. Jedným z možných riešení je vyhnúť sa strave, ktorá spôsobuje silné špičky **glykémie**. Algoritmus [Auto ISF](#Open-APS-features-auto-isf) (dostupný iba vo vývojárskom zostavení s režimom Engineering Mode) má nastavenie **SMB max rozšírenie rozsahu**, ktoré zväčší štandardné maximum (bazál za 2 hodiny) faktorom >1, a umožňuje zvýšiť predvolenú hodnotu 50 % pre **Pomer podávania SMB**.

**Postupujte podľa pokynov, aby AAPS mohol napodobniť váš bolus pomocou niekoľkých SMB**.

Pravidelne kontrolujte obrazovku pluginu **APS** (**Konfigurácia → APS → Otvoriť plugin**), či sú vaše **SMB** dosť veľké na to, aby okruh okolo začiatku jedla podal potrebný inzulín.

Ak nie, vaše ladenie niekedy neprinesie žiadny výsledok!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Pozorne sledujte/analyzujte veľkosti **SMB** krátko po začiatku jedla. Laďte po krokoch a naraz nemeňte viac ako 1 alebo 2 parametre.

Nastavenia vášho **AAPS** musia byť dostatočne pripravené na rôznorodosť vašich (!) jedál.
```

## Rozpoznanie jedla / vaše automatizácie na zosilnenie

Pre úspešný **FCL** je kľúčovým parametrom ladenia **ISF**. Pri použití **AAPS** vo verzii master + **automatizácií** sa **pri rozpoznaní jedla (pomocou delty glykémie) musí automaticky spustiť zmena profilu na > 100 %**, ktorá zabezpečí ostrejší **ISF**.

**AAPS** Master allows up to 130% temporary **Profile** in **HCL** mode. Zosilnenie **ISF** prebieha v 3 krokoch:

- Step 1 -  review the **ISF** applicable for this meal time hour within the **Profile**, and see whether e.g. Autosens suggest a modification that takes care of the current (last few hours’) insulin sensitivity status of the body.
- Krok 2 – použite faktor (1/percento profilu, ako je nastavené v **automatizácii**) na zosilnenie **ISF**.
- Krok 3 – skontrolujte, či navrhovaný **ISF** spadá do nastavených bezpečnostných limitov.

### Šablóny automatizácií pre FCL

Políčka na zaškrtnutie navrchu. Máte možnosť:

- V zozname **automatizácií** môžete zrušiť zaškrtnutie (vľavo od každého pravidla) => Tým túto **automatizáciu** deaktivujete. Napríklad to môžete urobiť pre všetky **FCL** **automatizácie** týkajúce sa raňajok, aby ste na raňajky prešli na **HCL**.

- Pri každom pravidle **automatizácie** môžete zaškrtnúť políčko „Akcia používateľa“ => definované akcie sa potom nevykonajú automaticky, keď platia podmienky. Namiesto toho vás hlavná obrazovka **AAPS** upozorní vždy, keď by váš **FCL** automaticky podal **SMB**. Potom máte možnosť povedať „áno“ alebo „nie“. To je mimoriadne užitočné vo fáze ladenia.

This feature can be useful for certain situations like “foot to floor” syndrome where there is a sudden rise in **BG** when getting up in the morning, but the user wants to prevent a fully automatic “breakfast started” response.

Nasledujúca časť radí, ako spájať podmienky **automatizácií** a ako riešiť situácie, v ktorých má **AAPS** zvýšiť (alebo znížiť) podávanie inzulínu. Keďže **ISF** sa nedá ladiť priamo, rovnaký účinok pre naše účely dosiahne zvýšenie **percenta profilu** nad 100 %.

### Automatické veľké SMB pri náraste glykémie

The key to successful **FCL**: **at the beginning of BG increases from meals, very large automatic SMBs must be given by the loop as quickly as possible** “to catch up” with the required **IOB** needed (compare with your typical administered bolus for similar meal in **HCL**!)

To achieve this, data from your **HCL** should be analyzed to determine which **deltas** might not be meal-related and which might be.

- Keďže **automatizáciu** môžete definovať v rámci vopred určeného časového okna, stačí analyzovať iba toto okno.
- Ak jete veľmi odlišné druhy jedál (napr. raňajky s dosť veľa sacharidmi, ale obed s málo sacharidmi), môžete pre každý časový úsek vytvoriť dve rôzne (sady) **automatizácií**.
- Vynechajte noci, ak vidíte občasné skoky spôsobené kompresnými poklesmi (compression lows)
- Zvyčajne stačí použiť deltu za posledných 5 minút.
- Môžete však použiť aj niektorú z priemerných delt. Porovnaním delt v podmienkach **automatizácií** môžete dokonca definovať akcie s rôznou agresivitou podľa toho, či **glykémia** stúpa zrýchlene alebo nie.

> ( delta – krátkodobý priem. rozdiel )>n   je výraz, ktorý sa dá použiť na rozpoznanie zrýchlenia, aby sa prvý **SMB** spustil pri najskoršom náznaku stúpajúcej **glykémie**. -                                                                             
> Caution: not possible to use with poor or highly smoothened **CGM** values!

**CGM** s prerušovanými dátami stavia používateľa do zlej pozície, pretože pre istotu musíte zvoliť opatrnejšiu („rezervnú“) definíciu toho, ktorá delta je istým znakom začatého jedla. To znamená:

- **FCL** stratí ďalší čas, čo vedie k vyšším vrcholom **glykémie** a nižšiemu %**TIR**;
- nemôžete použiť skoršiu alebo menšiu deltu, ktorá by mohla aj bez jedla spustiť **SMB**, ktoré majú pri **FCL** nahradiť bolus používateľa.

Prvé nárasty po jedle sa navyše vyznačujú **nízkym IOB**. S ohľadom na to môže automatizácia (#1) pre večeru vyzerať takto:

![Automatizácia #1: delta 8 alebo viac a IOB pod 4 večer spustí profil 130 % na 12 min](../images/fullClosedLoop02.png)

Automatizácia #1

Ak platia podmienky, **AAPS** podá v nasledujúcich 12 minútach 1 alebo 2 **SMB** so zosilneným **ISF** podľa nastaveného zvýšeného **percenta profilu** (v príklade zosilnenie insulinReq o 30 %). Kým tieto podmienky platia, pravidlo **automatizácie** sa predĺži o ďalších 12 minút. Jedlo s nízkym obsahom sacharidov môže mať pomalší nárast **glykémie**. Pomôže jej ďalšia automatizácia (#2), ktorá sa spustí pri nižšej delte a dá slabšie zosilnenie inzulínu.

![Automatizácia #2: delta 5 alebo viac a IOB pod 5,5 spustí profil 115 % na 12 min](../images/fullClosedLoop03.png)

Rovnaká **automatizácia** sa pravdepodobne spustí aj pri jedlách s viac sacharidmi, keď skončí strmý nárast definovaný v automatizácii #1.

Tieto dve (+ možno tretiu) **automatizácie** musíte „odstupňovať“ podľa toho, čo vidíte pri svojich (rôznych) jedlách => Nastavenie vhodných veľkostí skokov, kritérií **IOB** a zosilnení bude postupný proces ladenia.  Ak do podmienok zahrniete vhodné časové úseky, môžete ľahko vytvoriť rôzne automatizácie pre rôzne časy jedál počas dňa (raňajky, obed, večera).

Pamätajte, že ešte vo fáze nárastu (!) treba zablokovať „pretečenie“ **IOB**, aby neskoré účinky **inzulínu** („**chvost**“ po 3–5 hodinách) neprekročili brzdnú schopnosť okruhu pomocou nulového dočasného bazálu („odobratím“ bazálu, aby sa znížilo riziko hypoglykémie).

Pri veľkých jedlách **niekedy príde druhý nárast**. Dovtedy už zvyčajne aj IOB trochu kleslo a agresívnejšie automatizácie opäť začnú pôsobiť. (Check that your iob condition in Automation #2 is not set too low for this to happen).

Krátko po podaní niekoľkých úvodných **SMB** nasleduje **vyrovnaná fáza**, v ktorej by mierne podávanie inzulínu malo pokryť ďalšie vstrebané sacharidy. (Except in low carb meals, where the loop might see too weak of a **BG** rise, and go into zero-temping right away already now).

Hlavná obrazovka **AAPS** (kde pri plnom okruhu s **UAM** vidíte cob=0) môže v tejto fáze žiadať ďalšie sacharidy. V režime **UAM** to jednoducho znamená, že môžete urobiť veľmi hrubú kontrolu vierohodnosti: Je pravdepodobné, že také množstvo sacharidov je vo vašom tele ešte nevstrebané z jedla spred asi hodiny (o ktorom ste okruhu nedali žiadnu informáciu)?


### Prah IOB

**Automatizácie** #1 a/alebo #2 často zvýšia IOB na hodnoty, ktoré zvyčajne stačia pre **vaše** jedlá. Pre osobné vyladenie sa pozrite do svojich dát z **HCL** na maximálne hodnoty IOB pri dobre zvládnutých jedlách (často: váš bolus k jedlu) a nad akou hodnotou nakoniec nastala hypoglykémia (alebo potreba sacharidov navyše).

Rozumné **prahy IOB**, pri ktorých by ste mali znížiť agresivitu okruhu, nemusia byť rovnaké pre každé jedlo. Najmä však v prvej hodine po začiatku jedla, ktorá je v režime **UAM** veľmi dôležitá. It will differ for each user. U niektorých používateľov sa vstrebe len asi 30 g za hodinu a vtedy môže byť možné definovať zmysluplné **IOB** nezávislé od konkrétneho jedla.

Pri výnimočných jedlách, alebo ak potom nasleduje šport a chcete ho znížiť, sa dá prah **IOB** vo vašej **automatizácii** rýchlo nastaviť inak.

Automation (#3), "iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![Automatizácia #3: IOB 5,5 alebo viac bez bežiaceho dočasného cieľa spustí dočasný cieľ 111 mg/dl](../images/fullClosedLoop04.png)

Automatizácia #3

Hovorí okruhu, že nad nastaveným **prahom IOB** je lepšie už nepoužívať žiadne **SMB**

- Uvedený príklad to robí nastavením DC=111 (čo je trochu ľubovoľné; zvoľte číslo >100, ktoré ľahko spoznáte ako vaše automatické vypnutie **SMB**)
- V **AAPS** v [Nastavenia → OpenAPS SMB](#Preferences-openaps-smb-settings) vo všeobecnosti nepovoľujte **SMB** pri zvýšenom cieli.                                                                                                                   
  Potrebný inzulín sa potom bude musieť podávať oveľa opatrnejšie cez úzke hrdlo **TBR**

**Pozor: Automatizácia #3 funguje, iba ak nie je aktívny žiadny DC.** Ak ste teda použili DC Pred jedlom, musí byť do tej doby ukončený, čo by zvyčajne malo byť 30–40 minút po začiatku jedla.

Jeden spôsob je nastaviť podmienku **automatizácie**, ktorá ukončí prípadne bežiaci DC Pred jedlom pri podmienke **IOB**>65 % * iobTH.
> Ako pracovať s DC Pred jedlom Niektorí používatelia okruhu nastavia (stlačením tlačidla DC, alebo automaticky pomocou zníženého cieľa **glykémie** v **profile**, ak sú časy jedál dosť pevné) DC Pred jedlom zhruba hodinu alebo viac pred začiatkom jedla, len aby zaistili nízku **glykémiu** na začiatku a mierne zvýšené  **IOB**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefer to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). Nízky **DC** je v tejto fáze dôležitý, pretože každý **SMB** váš okruh vypočíta pomocou (predpovedaná glykémia mínus DC)/sens, takže malý DC zväčší výsledný insulinReq.

Po podaní prvých zosilnených **SMB** by váš nastavený iobTH a **automatizácia** #3 mali nájsť dobrú rovnováhu: obmedziť vrchol glykémie, ale po jedle nespôsobiť hypoglykémiu.

Ak sa vaše raňajky výrazne líšia obsahom sacharidov od priemernej večere, môže vám pomôcť definovať **automatizácie**, ktoré platia v príslušných časoch dňa a majú iný **iobTH** (prípadne aj iné delty a iné nastavené **percento profilu**). Vy pri definovaní svojho spektra jedál a nastavení (najmä **iobTH**), aj okruh pri riadení vznikajúcej krivky **glykémie**, musíte prijať určité výšky vrcholov, aby sa znížilo nebezpečenstvo hypoglykémie ku koncu **DIA** zo **SMB**.

### Stagnácia pri vysokých hodnotách glykémie

Ak sa po „výdatnom“ jedle objaví dlhotrvajúca stagnácia s **vysokou glykémiou**, **automatizácia** #4 (nižšie) „post-meal High“ pomôže zvládnuť inzulínovú rezistenciu spôsobenú tukmi: Po viacchodových jedlách, veľkej mastnej pizzi alebo raclette večeri môže krivka glykémie vytvoriť dva hrby alebo veľmi často predĺženú vysokú plošinu.

![Automatizácia #4: glykémia nad 160 mg/dl a Autosens pod 120 % spustí profil 120 % na 15 min](../images/fullClosedLoop05.png)

Automatizácia #4

![Automatizácia #5: profil na 120 % a glykémia pod 150 mg/dl prepne späť na normálny profil](../images/fullClosedLoop06.png)

Automatizácia #5

Automatizácia #4 „post-meal High“ (vysoká glykémia po jedle) sa hodí aj pre hybridný uzavretý okruh.

Okrem toho je potrebná ukončovacia automatizácia #5 „Stop pmH“, ktorá zníži agresivitu podávania inzulínu, hneď ako hodnota glykémie začne klesať. (Okruh však často aj tak obmedzí ďalší inzulín kvôli prevencii hypoglykémie, pretože predpovedaná glykémia je už nízko.)

## Prevencia hypoglykémie

Hlavný problém je, že **UAM** **FCL** (bez zadávania sacharidov) **nemá ako vedieť, koľko g sacharidov je ešte k dispozícii** na vstrebanie, ktoré by mohli spotrebovať ten „chvost“ inzulínu bez toho, aby ste z neho upadli do hypoglykémie.

Pomocou zosilnených **SMB** **FCL** „dobehol“ to, čo sme predtým robili bolusom k jedlu. Ale **na „chvoste“ pôsobenia inzulínu sa prevencia hypoglykémie môže stať vážnou témou**.

Pri príprave na **FCL** sa musí používateľ bližšie pozrieť na **časový priebeh IOB** pri typických jedlách a posúdiť, **kedy je ho už priveľa a ako to môžete zachytiť vyladením svojich automatizácií**. Je to možné, pretože máme niekoľko nastavovacích skrutiek. Môže byť náročné nastaviť to správne

Vo všeobecnosti nemá zmysel stále optimalizovať nastavenia pre jeden druh jedla. Keď máte dostatočne dobré nastavenie napr. pre jeden druh obeda, ktorý jete často, vyskúšajte, ako funguje pri iných druhoch jedla a aký „kompromis“ by ste zvolili.

Aby ste predišli hypoglykémii 3–5 hodín po jedle, znížte agresivitu skôr, ako sa nahromadí príliš veľa IOB. Konkrétne postupy:

- Buďte s **ISF** miernejší a miernejší už počas nárastu glykémie, ako v uvedených príkladoch automatizácií #1 a #2.
- Definujte prah IOB, od ktorého je **AAPS** výrazne opatrnejší (automatizácia #3, vyššie). Note this **iob** can be exceeded, by the last **SMB** before it went into effect; and then further by TBRs if the loop sees insulinReq. Carbs getting absorbed will provide a counter-movement towards lower iob.
- Prah IOB sa dá rozlíšiť podľa jedál: Klonovaním automatizácií ho môžete ľahko rozlíšiť pre časové úseky raňajok, obeda a večere (alebo dokonca pre polohy, ako firemná jedáleň alebo u svokry atď.)
> V rámci týchto časových úsekov môžete rozlišovať ešte viac nastavením rôznych DC pre jedlo s málo sacharidmi vs. rýchle sacharidy atď., a tak „zakódovať“ rôzne triedy jedál, ktoré sa môžu v tom čase dňa vyskytnúť, a vyvolať ich **automatizáciami** vyladenými špeciálne pre ne. To pravdepodobne nie je potrebné, pokiaľ sa vaše stravovacie návyky veľmi nelíšia.

Pred výnimočným jedlom môžete zvýšiť prah **IOB** alebo urobiť inú zmenu v ktorejkoľvek automatizácii za menej ako 5 sekúnd, priamo v telefóne s AAPS (**Spravovať → Automatizácia**).

Nebezpečenstvo hypoglykémie niekoľko hodín po jedle je v podstate otázkou, či bolo zloženie jedla také, že **chvosty inzulínu z boja s hlavnou časťou sacharidov** budú **spotrebované „predĺženými sacharidmi“** (nadmerné/oneskorené vstrebávanie sacharidov/bielkoviny/tuky/vláknina).

Postupom času spoznáte vzorce, vyladíte svoje automatizácie – možno dokonca trochu upravíte stravovacie návyky, napr. si občas dáte neskoré malé(!) jedlo, ktoré môže pomôcť udržať dobrú **rovnováhu medzi pôsobením inzulínu a vstrebávaním sacharidov** počas **celej** doby trávenia a vstrebávania jedla, a tým uľahčíte život svojmu okruhu (aj sebe).

### Poradie naprogramovaných automatizácií

Problémy môžu vzniknúť pri prekrývajúcich sa definíciách v **automatizáciách**. Príklad: Problém je, že delta >8 je aj delta >5, t. j. môžu existovať dve súperiace **automatizácie**. Čo potom urobí okruh? Vždy rozhoduje podľa poradia, v akom sú vaše **automatizácie** zobrazené v **Spravovať → Automatizácia**.  Príklad: Pravidlo delta > +8 musí byť prvé (a spustí najsilnejšie zosilnenie, ak platia všetky podmienky); potom nasleduje kontrola delty >5 (a miernejšia reakcia). Keby to bolo naopak, pravidlo delta>8 by sa nikdy neuplatnilo, pretože už platí delta>5 a vec je vybavená.
> Tip pre automatizácie: Poradie sa dá veľmi ľahko zmeniť. V **Spravovať → Automatizácia** stlačte a podržte úchyt **=** vpravo od pravidla a potiahnite ho na iné miesto.

Navyše je veľmi ľahké a rýchle kedykoľvek upraviť akékoľvek podmienky alebo akcie, v priebehu sekúnd, priamo vo vašom smartfóne s AAPS; napríklad ak idete na veľmi výnimočnú hostinu. (Nezabudnite ho však na ďalší deň vrátiť na normálnu hodnotu.)

(full-closed-loop-troubleshooting)=

## Riešenie problémov

### Ako sa vrátiť k hybridnému uzavretému okruhu

Môžete zrušiť zaškrtnutie **automatizácií** súvisiacich s **FCL** a vrátiť sa k bolusom k jedlu a znovu zadávať sacharidy. Ak ste z hlavnej obrazovky odstránili tlačidlá **Inzulín** alebo **Kalkulačka**, pridajte ich späť v nastavení [panela Rýchleho spustenia](#quicklaunch) (vždy zostávajú dostupné pod položkou **Ošetrenia** v spodnej navigačnej lište). Pamätajte, že teraz je opäť na vás, aby ste si podávali bolusy k jedlu.

Môže byť rozumné robiť **FCL** iba pre jedlá (časové úseky), kde sú **automatizácie** úplne definované a zapnuté, a vypnúť iba tie pre ostatné časy jedál, keď chcete robiť **HCL** (alebo pre ne v prechodnom období ešte nemáte žiadne definované).

Napríklad je úplne možné, bez akýchkoľvek ďalších krokov po zadefinovaní **automatizácií** pre časové úseky večere, robiť **FCL** iba pri večeri, zatiaľ čo raňajky a obed riešite v **HCL**, ako ste zvyknutí.



### Sú stále splnené požiadavky pre FCL?

- Je základný **profil** stále správny?
- Zhoršila sa kvalita **CGM**?
- Pozrite si požiadavky (vyššie).

### Glykémia stúpa príliš vysoko

- Jedlá nie sú rozpoznané dostatočne rýchlo
    - Skontrolujte (ne)stabilitu Bluetooth
    - Skontrolujte, či by ste mohli nastaviť menšie delty na spustenie prvého **SMB**
    - Experiment with an aperitif, soup a couple of minutes before meal start
- SMB sú príliš slabé
    - Skontrolujte poradie **automatizácií** (napr.: veľká delta pred malou deltou)
    - Skontrolujte (v reálnom čase) na obrazovke pluginu **APS**, či hodinový bazál profilu a nastavené minúty (max. 120) obmedzujú povolenú veľkosť SMB
    - Skontrolujte (v reálnom čase) na obrazovke pluginu **APS**, či treba nastaviť väčšie % profilu
- Ak sú všetky nastavenia na limite, možno sa budete musieť zmieriť s dočasne vysokou glykémiou alebo upraviť stravu.
> Ak ste pripravení testovať vývojárske zostavenie, [Auto ISF](#Open-APS-features-auto-isf) umožňuje aj ďalej rozšírené veľkosti SMB. Niektorí používatelia vo svojom „FCL“ používajú aj malý predbolus. To však ovplyvňuje správanie krivky glykémie, a tým aj rozpoznávanie nárastov a spúšťanie **SMB**, a preto to nie je ľahké zaviesť s presvedčivým celkovým prínosom.
- Dôležité pozorovanie pilotných používateľov bolo, že to, ako sa vaša glykémia a krivka IOB blížia k začiatku jedla, veľmi ovplyvňuje, aký vysoký vrchol po sacharidoch dosiahnete: Pokles (napr. k nastavenému DC Pred jedlom), vybudovanie určitého IOB a krivka, ktorá sa už stáča k silnému kladnému zrýchleniu, veľmi pomáhajú udržať vrcholy nízko.

### Glykémia klesá príliš nízko

- Jedlá sú rozpoznané nesprávne
    - Skontrolujte, či by ste mohli nastaviť väčšie delty na spustenie prvého **SMB**
    - Click “User action” in the related Automation, so in the future you can ad hoc decide to block execution of the Automation if not meal-related
    - Aby malé jedlá nespúšťali **SMB** ako pri jedle, nastavte pri jedení malých jedál DC>100 (tak ako to aj tak robíte pri športe a pri jedle proti hypoglykémii)
- SMB podávajú celkovo príliš veľa inzulínu
    - Skontrolujte (v reálnom čase) na obrazovke pluginu **APS**, či treba nastaviť menšie **SMB max rozšírenie rozsahu**
    - Skontrolujte (v reálnom čase) na obrazovke pluginu **APS**, či treba nastaviť menšie **Percento profilu**
    - Pomer podávania SMB sa pravdepodobne dá nastaviť menší. Pamätajte, že v tomto prípade to platí plošne pre všetky **SMB** (všetky časové úseky),
- Problémy s „chvostom“ inzulínu po jedle
    - Možno budete musieť zjesť malé jedlo (keď vidíte predpoveď hypoglykémie) alebo glukózové tablety (ak ste už v hypoglykémii). Pamätajte však, že potrebné sacharidy, ktoré vám okruh v určitej chvíli môže ukázať, sú veľmi pravdepodobne prehnané, pretože okruh nemá absolútne žiadnu informáciu o tom, koľko sacharidov ste zjedli a koľko z nich ešte čaká na vstrebanie (vy to možno dokážete odhadnúť, vrátane tukov a bielkovín).
    - Cenná by bola informácia, či problém vzniká väčšinou už vo fáze nárastu glykémie. Potom môže byť jednoduchým riešením nastaviť nižší iobTH.
    - Ak potreba ďalších sacharidov nastáva často, zapíšte si, koľko gramov bolo treba (nepočítajte to, čo ste nakoniec zjedli navyše a čo si opäť vyžiadalo ďalší inzulín).  Potom pomocou hodnoty IC z profilu odhadnite, o koľko menej inzulínu mal **SMB** podať, a s touto informáciou pokračujte v ladení (pokiaľ ide o **percento profilu** v **automatizáciách**, alebo možno aj o nastavený iobTH). This may relate to the **SMBs** given when glucose was high, or also to the **SMBs** during the **BG** rise.
    - Je dosť možné, že budete musieť jednoducho prijať vyššie vrcholy **glykémie**, aby ste neklesli nízko. Or change diet to something with lower amounts of carbs, and higher amount of protein and fats.


### Viac informácií

Zostaňte v kontakte s ostatnými používateľmi **FCL**.

Diskusia o plne uzavretom okruhu pomocou automatizácií:

- Anglicky:   [Discord kanál](https://discord.gg/ChXj8BaKwA)

- Nemecky:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
