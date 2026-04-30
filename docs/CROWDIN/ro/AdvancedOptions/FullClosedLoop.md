# Full Closed Loop


The main attraction of Full Closed Looping **FCL** is that it has the potential to mimic an artificial pancreas and make daily management easier without having the need to bolus for meals.

Whilst **hybrid closed loop** ('HCL') is algorithm based, it still requires the user to manually deliver boluses prior to meals. Drept rezultat, bucla poate intra într-o oprire temporară (bazală temporară zero) pentru a preveni administrarea în exces a insulinei.

În **FCL** bolusurile legate de dimensiunea meselor nu mai sunt necesare: lăsați-le în baza algoritmului!  **AAPS** le poate permite fără ca utilizatorul să boluseze, și fără a face intrări de carbohidrați într-un mod numit 'mese neanunțate' **("UAM")**. **UAM** permite **AAPS** să tolereze mai bine intrările incorecte de carbohidrați fiind mai agresiv.

## La ce să ne așteptăm?

Există multe studii publicate cu privire la rezultatele favorabile pe care **FCL** le poate obține. Pentru lecturi suplimentare, vedeți:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) Biblioteca Națională de Medicină, PubMed [Prima utilizare a AndroidAPS cu livrare automată de insulină open-Source în Scenario-ul cu circuit închis complet: Pancreas4ALL Studiu pilot Randomizat](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov Biblioteca Națională de Medicină, Studiul clinic [Studiu de Fezabilitate și Siguranță al Studiului Automat cu Buclă Livrată de Insulină Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Succesul pentru **FCL** cere utilizatorului să:

- verifice dacă au îndeplinit cerințele **FCL**;
- creeze **Automatizări** care sunt adaptate nevoilor zilnice ale managementului lor; și
- ajusteze setările **AAPS** (în special **Automatizările**).


## Considerații generale de ce (nu) se trece de la HCL la FCL

**FCL** nu este pentru toată lumea:

- Unii utilizatori **FCL** ating TIR (70-180) aproximativ 90% și HbA1c sub 6%, dar alți utilizatori preferă un control mai strict. În special, reducerea la minimum a valorilor peste 140 mg/dl în dietele cu carbohidrați rapizi necesită probabil prebolusare.
- Reglarea **AAPS** poate fi dificilă. Nu este destinat acelor utilizatori care se simt copleșiți de AAPS.  Va trebui să dedicați câteva săptămâni pentru a ajusta și a regla **FCL**. Să dedicați acest timp poate duce la rezultate mai bune și la controlul **glicemiei**.
- Gestionarea meselor poate deveni mai ușoară, însă exercițiul fizic poate reprezenta încă o provocare în **FCL**. Celor mai mulți dintre noi ne place să limităm gustările din timpul sportului în încercarea de a controla greutatea corporală.
- Rămân încă dificultăți în a stabili un **FCL** pentru copii (discutat mai jos).


## Buclă hibridă închisă reglată bine

Este recomandabil să se stabilească mai întâi o **HCL** bine reglată înainte de a lua în considerare tranziția la **FCL**.  Succesul cu **FCL** necesită o reglare individualizată a setărilor utilizatorului astfel încât **AAPS** să poată oferi insulină pentru a imita îndeaproape modul reușit de buclă hibridă închisă al DUMNEAVOASTRĂ.

**FCL** cere utilizatorului să configureze și să regleze **Automatizările**. Cu toate acestea, utilizatorul trebuie să aibă o înțelegere sigură a nevoilor sale de gestionare a insulinei înainte de a se înhăma la **FCL**. Erorile pot fi mascate de contra-erori. Acest lucru poate crea un sistem **FCL** instabil, și îl poate face greu de corectat ulterior. Ar trebui să vă așteptați să atingeți un %TIR comparabil cu FCL așa cum vedeți astăzi în **HCL**.

**FCL este un sistem DIY creat din automatizări determinate de utilizator prin analizarea datelor sale atât din experiența de succes cu HCL și din experiența inițială cu FCL atunci când se ajustează setările.**

## Insulină rapidă (Lyumjev, Fiasp)

**FCL** necesită insulină rapidă.  Acesta este astfel încât la începutul creșterii **glicemiei**, **FCL** este în măsură să mențină **glicemia** în interval (prin definiție comună, sub 180 mg/dl (10 mmol/l)).

Un studiu de modelare (detalii vedeți LINK FullLoop V2/March2023; secțiunea 2.2) poate arăta în termeni cantitativi că <0>insulinele mai rapide</0>

Sursă:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- va rezulta în semnificativ mai puține vârfuri ale *glicemiei** decât ale insulinelor mai lente;
- tolerează primul bolus de la masă cu o întârziere de câteva minute fără a aduce la înălțimi inacceptabile ale vârfurilor; și
- minimizează efectul asupra vârfului **glicemiei** ale diferitelor cantități de carbohidrați (dimensiunea mesei).

**FCL** este puțin probabil să fie eficace cu altă insulină decât Lyumjev sau Fiasp, cu excepția cazului în care utilizatorul urmează o dietă foarte moderată până la mică de carbohidrați.

Cu toate acestea, Fiasp sau Lyumjev poate duce la ocluzii frecvente ale pompei, chiar și după optimizarea unor aspecte cum ar fi lungimea acului. Este important să fiți atent la canulă sau la durata de utilizare a pompei. Mulți utilizatori găsesc că 48 de ore sunt limita de eficacitate a insulinei, înainte de a rezulta un eșec al canulei/pompei.

## Cerințe preliminare

Valori **glicemice** și conectivitate Bluetooth stabilă sunt necesare pentru a asigura că **AAPS** poate funcționa în mod optim fără a pierde timp important. **FCL** necesită un sistem stabil din punct de vedere tehnic 24/7:

- your **CGM’s performance. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Similarly, **CGM** calibrations can produce jumpy results.
- how and where any **CGM** smoothing is done, and what this might imply for your tuning. Notably how delta is defined, and AAPS recognising this as being sign of a starting meal.
- bluetooth stability for the pump and CGM  pump;
- avoiding (or at least early recognition of) pump occlusion;
- data flow and your phone's apps used and difference between days of sensor usage;
- keeping all **AAPS** components well charged and in spare parts close proximity; and
- actioning cannula (or pod) changes always early enough to lower the risk of occlusion;

The above will vary depending on your **AAPS** component system and your lifestyle.

## Meal-related limitations

- Setting up a **FCL** may be easier for people whose diets do not consist of food components with a rapid high effect on **BG**, and meal patterns that do not wildly vary day-to-day. This does not necessarily mean low carb.

- Fat or protein rich diets, or slow digestion/gastroparesis, make things easier rather than harder for **FCL**  because late carbs nicely cover for inevitable “tails” of late action from bolus needed around peak time.

### Glycemic index and effect on blood glucose

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose ('EBG')

- Start moderate/low, and tune your **Profile's** settings. Only then, "test" meals with high **EBG**.
- Consider a < 50% initial bolus if consuming very high **EBG**.

1) **No EBG**: e.g. fresh meat, fish, eggs, bacon, oils, cheese. 2) **Low EBG**: e.g. fresh vegetables and berries, mushrooms, nuts, milk, yoghurt, cottage cheese. 3) **Moderate EBG**: e.g. whole grain bread/noodles, potatoes, wild rice, oats, dried fruits. 4) **High EBG**:e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **Very High EBG**: e.g. sugar, sweet drinks, fruit juices, cornflakes, candy, sweets, potato chips, salty pretzel sticks.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

The most difficult meals for **FCL** are those foods exclusively very high and high **EBG** components (see red in the picture): Not only does **BG** shoot up rapidly, but also there is little fat/protein/fibre component to balance the inevitable “tail” of insulin activity that would come with attempts to control the high glucose earlier on.

Erratic consumption of snacks and sweet drinks that are loaded with fast absorbing carbs is problematic for **FCL**.


## Preparing for activity/sports

When exercising or being active, with a pump or hybrid closed loop it is recommended that the user reduces **IOB** prior to exercise.

With **FCL**, the algorithm is tuned to detect **UAM** and automatically deliver insulin to counter **BG** rises.  A high **Temp Target** and lower **Profile Percentage** (effective already around meal start) should be set well in advance of any activity.

Unusual or erratic exercise activity levels present difficulties for **FCL**. Planning ahead is required for exercise (especially if you want to reduce the need for rescue carbs/snacks during sports low). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dl) **BG**  target, with “no **SMBs** at elevated target” selected in **AAPS*** preferences.

## Hurdles for kids

**FCL** can present extra challenges for children and these include:

- Lyumjev or Fiasp may not available or well tolerated.
- Hourly basal rate may very low, providing a poor basis for big **SMBs**.
- Diet may be rich in sweet components. With the typical low blood volume of a small body, strong tendency towards very high **BG** spikes.
- Growth hormones and going through marked changes of insulin sensitivity makes it difficult to keep the **FCL** accurately tuned.


## Enabling boosted SMBs: safety

In **HCL** safety restrictions are implemented regarding bolus sizes that can be automatically given by the loop.

**FCL** loopers no longer need to give a sizable bolus around meal start. The impact of this means that restrictions in size limits for **SMBs** must be widened to make the loop capable of delivering large enough **SMBs**.

If you are operating with **AAPS** in the Master release, it is suggested **AAPS**' Preferences are set up with the maximum allowed **SMB** size so that **FCL** can give (maxUAMSMBBasalMinutes=120, i.e. 2 hours worth of basal at that daytime).

If your basal rate is very low, the resulting **SMB** limits might be too low to allow sufficient control to tackle postprandial **BG** rises. One possible solution is to avoid diets that cause strong **BG** spikes and later switches to a **AAPS** dev variant that offers a new parameter in **SMB** delivery settings: smb_max_range_extension. This will expand the standard maximum of 2 hours worth of basal by a factor of >1. (Additionally, the default 50% **SMB** delivery ratio might be elevated in dev. variante).

**Urmează instrucțiunile pentru a activa AAPS să imite bolusarea ta prin intermediul a două SMB**.

Verificați periodic fila **SMB** pentru a vedea dacă valorile **SMB** permise sunt suficiente pentru a administra insulina necesară buclei în perioada de început a meselor.

Dacă nu, eforturile dumneavoastră de ajustare vor fi câteodată în zadar!


```{admonition} Boosting **ISF** can become dangerous
:class: pericol

Observați cu atenție/analizați dimensiunile **SMB** la scurt timp după ce ați început mesa. Ajustați în trepte și nu modificați mai mult de 1 sau 2 parametri deodată.

Setările **AAPS'** trebuie să fie suficient de bine configurate pentru a face față (!) unei varietăți de mese.
```

## Detectarea mesei/ Automatizările dumneavoastră pentru amplificare

Pentru succesul **FCL**, **ISF** este parametrul cheie de ajustare. Când se utilizeaza **AAPS** varianta master + **Automatizări**, **o schimbare de profil > 100% trebuie să fie declanșată în mod automat la momentul recunoașterii mesei** (prin diferențele dintre citirile de glicemie, delta), și să propună un **ISF** mărit.

**AAPS** master permite până la o mărire temporară de 130% a **Profilului** în modul **HCL**. Amplificarea **ISF** se face în 3 pași:

- Pasul 1 - revizuiește **ISF-ul** care este aplicabil pentru această oră de masă în cadrul **Profilulului**, și vedeți dacă spre exemplu Autosens sugerează o modificare care ia în considerare starea curentă (ultimele câteva ore) de sensibilitate la insulină a organismului.
- Pasul 2 - aplică un factor (1/Profile%, așa cum este setat în **Automatizări**) pentru a crește **ISF**.
- Pasul 3 - verifică dacă **ISF** sugerat se încadrează în limitele de siguranță stabilite.

### Șabloanele de automatizare pentru FCL

Cutii de bifat în partea de sus. Aveți opțiunea:

- În lista dumneavoastră de **Automatizări**, poți bifa semnul de înregistrare (la stânga fiecărui câmp) Oprit => Acest lucru dezactivează **Automatizarea**. De exemplu, puteți face asta pentru toate **Automatizările** **FCL** asociate cu micul dejun pentru a merge pe varianta **HCL** pentru micul dejun.

- Pentru fiecare regulă de **Automatizare** puteți bifa căsuța pentru acțiunea utilizatorului =>, atunci acțiunile definite nu vor fi executate în mod automat când se întrunesc condițiile. Mai degrabă, ecranul principal **AAPS** vă va avertiza ori de câte ori **FCL** va da automat un **SMB**. Aveți apoi posibilitatea să spuneți "da" sau "nu". Acest lucru este extrem de util în faza de reglare.

Această caracteristică poate fi utilă în anumite situații cum ar fi sindromul "picioare pe podea" în care apare o creștere bruscă a **glicemiei** la trezirea de dimineață, dar utilizatorul vrea să prevină un răspuns complet automat de tip "micul dejun a început".

Secțiunea de mai jos oferă îndrumări despre modul de grupare al **Automatizărilor** Condiții și modul de abordare al situațiilor în care **AAPS** ar trebui să crească (sau să diminueze) administrarea de insulină. Deoarece **ISF** nu poate fi ajustat direct, creșterea **Procentajului de profil** peste 100% va face același lucru pentru ceea ce vrem.

### SMB automatizate la creștere glicemiei

Cheia pentru succesul **FCL** **la începutul creșterilor glicemice de după mese, SMB automate și foarte mari trebuie administrate prin buclă cât mai repede posibil** "pentru a prinde din urmă" **IOB** necesar (comparativ cu bolusul administrat tipic pentru o masă similară în **HCL**!)

Pentru a realiza acest lucru, datele de la **HCL** ar trebui analizate pentru a se determina care **delta** ar putea să nu aibă legătură cu masa și care ar putea fi delta care ar putea avea legătură.

- Pentru că puteți defini **Automatizarea** într-o fereastră de timp predefinită, trebuie doar să analizați acolo.
- Dacă aveți mese foarte diferite (de exemplu un mic dejun bogat în carbohidrați; dar la prânz cu carbohidrați mai puțini) puteți alege să aveți două (seturi) diferite de **Automatizări** pentru fiecare interval orar.
- Excludeți nopțile dacă vedeți sărituri ocazionale cauzate de hipoglicemiile de compresie
- De obicei, doar prin folosirea delta din ultimele 5 minute a fost suficient.
- Dar puteți folosi o delta medie. Prin compararea diferențelor (detlta) în condițiile **Automatizărilor** dumneavoastră ați putea defini chiar și acțiuni de agresivitate diferită în funcție dacă creșterea **glicemiei** este într-o manieră accelerată sau nu.

> ( delta – media scurtă delta )>n este un termen care ar putea fi utilizat pentru detectarea accelerării, pentru a declanșa primul **SMB** la cel mai scurt timp semn de creștere a **glicemiei**. -                                                                             
> Atenție: nu se poate folosi cu **valori ale CGM-ului care sunt slabe sau foarte omogenizate!

Un **CGM** cu date nepotrivite pune utilizatorul într-o poziție proastă deoarece, pentru a fi în siguranță, ai nevoie să "îndiguiești" definiția ta de delta, care ar putea fi sigur un semn al unei mese începute. Asta înseamnă:

- **FCL** pierde timp suplimentar, ce rezultă în vârfuri **glicemice** mai mari și %**TIR** mai mic;
- nu puteți folosi un delta de mai devreme sau mai mic care ar putea să declanșeze, de asemenea în absența unei mese, **SMB** care să țină loc de bolusul utilizatorului în **FCL**.

În plus, primele creșteri de după o masă sunt caracterizate de o prezență **mică IOB**. Așadar, o Automatizare(#1) pentru o cină ar putea arăta în felul următor:

![8 mg salt 130% ioby4](../images/fullClosedLoop02.png)

Automatizarea #1

Dacă condițiile sunt îndeplinite, **AAPS** ar da 1 sau 2 **SMB** în următoarele 12 minute, utilizând un **ISF** amplificat conform **Procentajului de profil**ridicat setat (în exemplu, o amplificare de 30% a insulinReq). Atâta timp cât se întrunesc aceste condiții, regula de **Automatizare** se extinde cu alte 12 minute. O masă cu carbohidrați puțini poate avea caracteristici de creștere mai lentă a **glicemiei**. Ar putea beneficia de o altă automatizare (#2) care s-ar declanșa la o delta inferioară și ar oferi o amplificare mai mică în ceea ce privește insulina.

![>=5mg jump 115%, iob<5.5](../images/fullClosedLoop03.png)

The same **Automation** probably will kick in also in higher carb meals, once the steep rise as defined in Automation#1 is over.

You need to “stage” these two (+ maybe a third) **Automations** to fit with what you see in your meal (variety) => Setting appropriate jump sizes, **iob** criteria, and amplifications will be an iterative tuning process.  Also, if you include appropriate time slots in the Conditions, you can easy do different Automations for your different daily meals times (breakfast, lunch, dinner).

Note that, still in the rise phase (!), the "overflow" of **iob** must be blocked so that the late effects of the **insulin** (the "**tail**" after 3-5 hours) will not exceed the braking capacity of the loop through zero-temping (“taking away” basal, to reduce hypo risk).

With large meals there is **sometimes a second increase**. By then, usually also the iob has dropped a bit, and the more aggressive Automations take effect again. (Check that your iob condition in Automation #2 is not set too low to for this to happen).

Soon after a few initial **SMBs** are given comes a **balanced phase** where moderate delivery of insulin should cover the additional carbs absorbed. (Except in low carb meals, where the loop might see too weak of a**BG** rise, and go into zero-temping right away already now).

The **AAPS** main screen (where you see cob=0 in **UAM** full loop) might in this phase ask for more carbs required. In **UAM** mode that simply means, you could make a very rough plausibility check: Is that amount of carbs likely in your body, un-absorbed from your meal just about an hour ago (about which you gave your loop no info)?


### iob threshold

Often, **Automations** #1 and/or #2 make iob rise to heights that typically are enough for **your** meals. For personalised tuning, look in your **HCL** data at the max iob values that occur with well-managed meals (often: your meal bolus), and above which magnitude a hypo (or requirement for extra carbs) occurred at the end.

Sensible **iob thresholds** at which you should reduce aggressiveness of your loop, might not be the same for every meal. But especially in the first hour after the start of a meal, which is very crucial in the **UAM** mode. It will defer to for each user. For some users just about 30g/hour get absorbed, and to define a meaningful **iob** independent of the exact meal can be possible.

For exceptional meals, or to lower it if sports follow, the **iob** threshold can rapidly be set differently in your **Automation**.

Automation(#3),”iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop04.png)

Automation #3

It tells the loop that above your set **iob threshold** it's better not to use any more **SMBs**

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognise as your automated **SMB** shut-off)
- In **AAPS' Preferences/ SMB** Settings generally do not allow **SMB** at elevated target).                                                                                                                   
  The insulin required will then have to be delivered with much more caution through the bottleneck of **TBRs**

**Caution: Automation #3 only works when there is no active TT.** So, in case you worked with EatingSoonTT, it must be ended by that time, which usually should be 30-40 minutes after meal start.

One way to do this is to set up an **Automation** Condition that ends an eventually running EatingSoonTT under the Condition **iob**>65% * iobTH.
> Ways to work with EatingSoonTT Some loopers set (by pressing the TT button, or automated via a lowered **Profile** **BG** target if eating time slots are fairly fixed) an EatingSoonTT roughly an hour or more before meal start, just to guarantee a low starting **BG** and slightly increased  **iob**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefere to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). A low **TT** is important in this stage because any **SMB** is calculated by your loop using (predicted glucose minus TT)/sens, so a small TT makes the resulting insulinReq bigger.

After the first boosted **SMB**s were given, your set iobTH and *Automation** #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

If your breakfast substantially deviates in carb content from your average dinner, you may benefit from defining **Automations** that apply in the respective times of day, and have different **iobTH** (possibly also different deltas, and different **Percentage Profile** set). Both, you with defining your meal spectrum and settings (notably, **iobTH**), and the loop managing the unfolding **BG** curve, must accept certain peak heights for reducing hypo danger towards the end of the **DIAs** from **SMBs**.

### Stagnation at high bg values

In case, after a “rich” meal, a long-lasting stagnation with **high BG** value is seen, **Automation** #6 (below, left),"post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop05.png)

Automation #4

![iob >5.5...111 TT = SMBs off 16m](../images/fullClosedLoop06.png)

Automation #5

Automation #4, “post-meal High”, is also suitable in hybrid closed loop.

In addition, a termination-Automation #5, “Stop pmH”, is needed, so that the aggressiveness of the insulin administration is reduced, as soon as the glucose value is falling. (However, often the loop will limit more insulin anyways for hypo prevention because predicted glucose runs low already).

## Hypo prevention

The core problem is that the **UAM** **FCL** (without carb inputs) can have **no idea how many g of carbs are still available** for absorption, and might use up that “tail” insulin, without you going into a hypo from it.

Using boosted **SMBs**, the **FCL** “caught up” with what we formerly did with a meal bolus. But, **at the “tail” end of insulin activity, hypo prevention can become a serious topic**.

In preparation for **FCL**, the user must take a closer look at the **time course of iob** for typical meals, and judge **when it becomes too much, and how you can catch that by tuning your Automations**. That is possible because we have several adjusting screws. It can be a challenge to get this right

Generally, it makes no sense to keep optimising settings for one kind of meal. Once you have a good-enough setting e.g. for one kind of lunch you frequently have, test how this works with other kinds, and how you would “compromise”.

Pentru a preveni hipoglicemia în orele 3-5 de după masă, reduceți agresivitatea înainte ca prea mult IOB să se acumuleze. Abordări specifice:

- Faceți ca **ISF** să fie din ce în ce mai blând deja în timpul creșterii de glicemie, ca în exemplele date de Automatizare #1 și #2.
- Definiți pragul de IOB, dincolo de care **AAPS** devine semnificativ mai prudent (Automatizarea #3, de mai sus). Atenție acest **IOB** poate fi depășit de ultimul **SMB** înainte de a intra în vigoare; și mai departe de către RBT, dacă în buclă se observă absorbția de carbohidrați insulinReq va fi asigurată o mișcare contraactivă spre un IOB mai mic.
- Pragul de IOB poate fi diferențiat în funcție de mese: prin clonarea automatizărilor, se poate diferenția cu ușurință pentru intervalele orare de mic dejun, prânz și cină (sau chiar pentru locuri geografice, cum ar fi cantina companiei sau soacra șamd)
> S-ar putea diferenția și mai mult în aceste intervale orare, prin stabilirea unor ținte temporare diferite pentru carbohidrați înceți față de carbohidrați rapizi, șamd și, prin urmare, să se poată "programa pentru" diferite tipuri de masă care pot apărea în acest moment al zilei, și prin apeluri la **Automatizările** special ajustate pentru ele. Acest lucru nu este probabil necesar, cu excepția cazului în care obiceiurile dumneavoastră alimentare variază mult.

Before a special meal challenge, you can raise your **iob** threshold, or make another change in any of your Automations within under 5 seconds, right from your AAPS main screen (burger top left; or **Automations** tab, depending how you configured your **AAPS**).

The hypo danger some hours after the meal is essentially a question of whether your meal composition was such, that the **insulin tails from fighting the bulk of carbs** will be **consumed by “extended carbs”** (excessive/delayed carb absorption/protein/fat/fibre).

Over time you will learn patterns, tune your Automations – maybe even adjust your eating habits a bit, e.g. just enjoy the occasional late little(!) snack that may help maintain a good **balance of insulin activity and carb absorption** for the **entire** meal (digestion, absorption) time, and thus make life for your loop (and for yourself) easier.

### Order of programmed Automations

Problems can arise with overlapping definitions in **Automations**. Example: The problem is that delta >8 is also delta >5, i.e. there may be two competing **Automations** What does the loop do then? It always decides according to the sequence in which your **Automations** appear when looking into the burger menu / AdAPS main screen.  Example: The delta > +8 rule must come first (and launch the strongest boost if all conditions apply); then comes the check for delta >5 (and a milder response). If done the other way round, the delta>8 rule would never come into effect because the delta>5 already applies, case closed.
> Tip for Automations: Order changes are very easy to make. Press on a list entry in **AAPS/Automations** and the user rearrange the **Automations** in question to another position.

Also it is very easy and quick to adjust any conditions or actions at any time, within seconds, just on your AAPS smartphone; for instance if you head into a very special eating event. (But don’t forget to set it back to normal on/for the next day).

## Depanare

### How to get back into Hybrid Closed Loop

You can un-click the top boxes in the **Automations** related to your **FCL**, and go back to bolusing for meals and make carb inputs again. You may have to go to **AAPS** Preferences/Overview/Buttons and get your Buttons “Insulin, Calculator…” back for your **AAPS** main screen. Be aware that now it is again up to you to bolus for meals.

It may be wise to do **FCL** only for meals (time slots) where **Automations** are fully defined and clicked on, and un-click only those for the other meal times when you like to do **HCL** (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after **Automations** for dinner time slots are defined, to do **FCL** only for dinners, while breakfast and lunch are done in a **HCL** as you are used to.



### Are the pre-conditions for FCL still given?

- Is the basic **Profile** still correct?
- Has the **CGM** quality deteriorated
- Refer to pre-requisites (above).

### Glucose goes too high

- Meals are not recognized asap
    - Check regarding Bluetooth (in)stability
    - Check whether you could set smaller deltas to trigger first **SMB**
    - Experiment with an aperetif, soup acouple of minutes before meal start
- SMBs are too weak
    - Check order of **Automations** (e.g.: big delta before small delta)
    - Check (real-time) in **SMB** tab whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in**SMB** tab whether %profile must  be set bigger
- If all your settings are at the limit, you may have to live with the temporary high, or adjust your diet.
> If you are ready to use AAPS dev variants, you could also employ one that allows further expanded SMB sizes. Some users also resort to using a small pre-bolus in their “FCL”. However, this interferes with how glucose curve and hence detection of rises and triggered **SMBs** behave, and is therefore not easy to implement with convincing overall benefit.
- An important observation by pilot users was, that how your glucose and iob curves approach meal start matters a lot regarding how you peak from carbs: Going down (e.g. towards a set EatingSoonTT), building some iob, and curving already towards strong positive acceleration seems very helpful to keep peaks low.

### Glucose goes too low

- Meals are falsely recognized
    - Check whether you could set bigger deltas to trigger first **SMB**
    - Click “User action” in the related Automation, so in the futurte you can ad hoc decide to block execution of the Automatiojn if not meal-related
    - To prevent snacks from triggering **SMBs** as for a meal, set a TT>100 when snacking (as you would do in sports and for anti-hypo snacks, anyways)
- SMBs deliver overall too much insulin
    - Check (real-time) in **SMB** tab whether **SMB** range extension must be set smaller
    - Check (real-time) in **SMB**tab whether **Percentage Profile** must  be set smaller
    - SMB delivery ratio probably can be set smaller. Note in this case, it works across the board for all **SMBs** (all time slots),
- Problems with insulin “tail” after meals
    - You may need to take a snack (seeing hypo prediction) or glucose tablets (if already in hypo zone). But note that the carbs required the loop might tell you at some point are very likely exaggerated as the loop has absolutely zero info on your carb intake (while you may be able to guess how much more, incl. from fats and proteins) is still waiting to be absorbed.
    - A valuable information would be whether the problem originates mostly in the bg rise phase already. Then setting a lower iobTH might be an easy remedy.
    - If the need for additional carbs happens frequently, note down how many grams were needed (not counting what you eventually took too much and required extra insulin again).  Then use your profile IC value to estimate how much insulin less the **SMB** should have delivered, and go with this info into your tuning (regarding the **Percentage Profile** in **Automations**, or maybe also your set iobTH). This may relate to the**SMBs** given when glucose was high, or also extending regarding also the **SMBs** during the **BG** rise.
    - It could well be that you simply have to accept higher **BG** peaks for not going low. Or change diet to something with lower amounts of carbs, and higher amount of proteien and fats.


### More info

Make sure you stay in touch with other **FCL** users.

Discussion Full Closed Loop using Automations:

- English:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- German:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
