# Llaç tancat complet

```{contents} In this page
:backlinks: entry
:depth: 2
```

El gran atractiu del llaç tancat complet (**FCL**) és que pot imitar un pàncrees artificial i fer més fàcil el control diari sense haver de posar bolus per als àpats.

Encara que el **llaç tancat híbrid** («HCL») funciona amb un algoritme, l'usuari ha de lliurar bolus manualment abans dels àpats. Com a resultat, el llaç pot fer una aturada temporal (basal temporal zero) per evitar lliurar massa insulina.

Amb el **FCL** ja no calen bolus segons la mida de l'àpat: deixeu-ho a l'algoritme!  **AAPS** pot gestionar els àpats sense que l'usuari doni cap bolus i sense introduir carbohidrats, en un mode anomenat «àpats no anunciats» **(«UAM»)**. **UAM** permet que **AAPS** toleri millor les entrades de carbohidrats incorrectes, perquè és més agressiu.

## Què podeu esperar?

Hi ha molts estudis publicats sobre els bons resultats que pot aconseguir el **FCL**. Per llegir-ne més, consulteu:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, assaig clínic [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Per tenir èxit amb el **FCL**, l'usuari ha de:

- comprovar si compleix els requisits del **FCL**;
- configurar **automatitzacions** adaptades a les necessitats del seu control diari; i
- ajustar amb precisió la configuració d'**AAPS** (sobretot les **automatitzacions**).


## Consideracions generals: per què passar (o no) d'HCL a FCL

El **FCL** no és per a tothom:

- Alguns usuaris de **FCL** aconsegueixen un TIR (70-180) d'un 90% i una HbA1c per sota del 6%; altres usuaris prefereixen un control més estricte. Sobretot, reduir al mínim els valors per sobre de 140 mg/dl amb dietes de carbohidrats ràpids probablement necessita un prebolus.
- Ajustar **AAPS** pot ser difícil. No és per als usuaris que se senten desbordats per AAPS.  Haureu de dedicar unes quantes setmanes a ajustar amb precisió el vostre **FCL**. Dedicar-hi aquest temps pot donar millors resultats i un millor control de la **glucèmia**.
- El control dels àpats pot ser més fàcil, però l'esport encara pot ser difícil amb el **FCL**. A la majoria de nosaltres ens agrada limitar els snacks per a l'esport per controlar el pes corporal.
- Encara és difícil establir un **FCL** per a nens (vegeu més avall).


## Llaç tancat híbrid ben ajustat

Es recomana tenir primer un **HCL** ben ajustat abans de pensar a passar al **FCL**.  L'èxit amb el **FCL** necessita un ajust molt personalitzat de la configuració de l'usuari, perquè **AAPS** pugui donar insulina imitant de prop el VOSTRE mode de llaç tancat híbrid que ja funciona bé.

El **FCL** necessita que l'usuari configuri i ajusti les seves **automatitzacions**. Però l'usuari ha d'entendre bé les seves necessitats d'insulina abans de començar amb el **FCL**. Uns errors poden quedar amagats per altres errors que els compensen. Això pot crear un sistema **FCL** inestable i difícil de corregir més tard. Amb el FCL podeu esperar arribar a un %TIR comparable al que veieu avui amb el vostre **HCL**.

**El FCL és una configuració pròpia (DIY) d'automatitzacions que l'usuari defineix analitzant les seves dades, tant del seu HCL que ja funciona bé com de les primeres experiències amb el FCL mentre ajusta la configuració.**

## Insulina ràpida (Lyumjev, Fiasp)

El **FCL** necessita una insulina ràpida.  Així, a l'inici de la pujada de **glucèmia** d'un àpat, el **FCL** pot mantenir la **glucèmia** dins del rang (segons la definició habitual, per sota de 180 mg/dl (10 mmol/l)).

Un estudi de modelització (detalls a LINK FullLoop V2/March2023; allà, secció 2.2) pot mostrar en xifres que les *insulines més ràpides*

Font:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- donaran pics de **glucèmia** molt més baixos que les insulines més lentes;
- toleren un primer bolus d'àpat uns minuts més tard sense pics massa alts; i
- reduir l'efecte de les diferents quantitats de carbohidrats (mides d'àpat) sobre el pic de **glucèmia**.

És poc probable que el **FCL** sigui eficaç amb una insulina que no sigui Lyumjev o Fiasp, tret que l'usuari faci una dieta de pocs carbohidrats o molt moderada.

Però Fiasp o Lyumjev poden provocar oclusions freqüents de la bomba, fins i tot després d'optimitzar coses com la llargada de l'agulla. És important vigilar el temps de la cànula o del pod. Molts usuaris veuen que 48 hores és el límit d'eficàcia de la insulina abans que la cànula o el pod fallin.

## Requisits

Calen valors de **glucèmia** i una connexió Bluetooth estable perquè **AAPS** pugui funcionar de manera òptima sense perdre temps valuós. El **FCL** necessita un sistema tècnicament estable 24 hores al dia, 7 dies a la setmana:

- el **rendiment del vostre CGM**. El vostre CGM no ha de donar valors de **glucèmia** amb salts que el **FCL** pugui interpretar per error com a signe de l'inici d'un àpat. De la mateixa manera, les calibracions del **CGM** poden donar valors amb salts.
- com i on es fa el suavitzat del **CGM**, i què pot implicar per al vostre ajust. Sobretot com es defineix la delta, i que AAPS la reconegui com a signe de l'inici d'un àpat.
- l'estabilitat del Bluetooth de la bomba i del CGM;
- evitar l'oclusió de la bomba (o almenys detectar-la aviat);
- el flux de dades, les aplicacions del telèfon que feu servir i la diferència entre els dies d'ús del sensor;
- tenir tots els components d'**AAPS** ben carregats i les peces de recanvi a prop; i
- fer els canvis de cànula (o de pod) sempre prou aviat per reduir el risc d'oclusió;

Tot això canvia segons els components del vostre sistema **AAPS** i el vostre estil de vida.

## Limitacions relacionades amb els àpats

- Configurar un **FCL** pot ser més fàcil per a persones amb una dieta sense aliments que pugin la **glucèmia** ràpidament i molt, i amb àpats que no canvien gaire d'un dia a l'altre. Això no vol dir necessàriament una dieta de pocs carbohidrats.

- Les dietes riques en greixos o proteïnes, o una digestió lenta o gastroparèsia, fan les coses més fàcils, no més difícils, per al **FCL**, perquè els carbohidrats tardans cobreixen bé les inevitables «cues» d'acció tardana dels bolus necessaris al voltant del pic.

### Índex glucèmic i efecte sobre la glucèmia

La dificultat del mode **UAM** creix amb l'«efecte sobre la glucèmia» («EBG»)

- Comenceu de manera moderada o baixa i ajusteu la configuració del vostre **perfil**. Només després, «proveu» àpats amb un **EBG** alt.
- Penseu en un bolus inicial de < 50% si mengeu aliments amb un **EBG** molt alt.

1) **Sense EBG**: per exemple carn fresca, peix, ous, cansalada, olis, formatge. 2) **EBG baix**: per exemple verdures fresques i fruits del bosc, bolets, fruits secs, llet, iogurt, mató. 3) **EBG moderat**: per exemple pa o pasta integral, patates, arròs salvatge, civada, fruita seca. 4) **EBG alt**: per exemple pa de blat, baguet, pa de motlle, gofres, galetes, puré de patates, pasta, arròs. 5) **EBG molt alt**: per exemple sucre, begudes ensucrades, sucs de fruita, cornflakes, caramels, dolços, patates xips, bastonets salats (pretzels).

![Índex glucèmic i efecte sobre la glucèmia](../images/fullClosedLoop01.png)

Els àpats més difícils per al **FCL** són els que tenen només components d'**EBG** molt alt i alt (vegeu el vermell a la imatge): la **glucèmia** no només puja molt ràpid, sinó que també hi ha pocs greixos, proteïnes o fibra per compensar la inevitable «cua» d'activitat de la insulina que ve quan s'intenta controlar abans la glucèmia alta.

Menjar snacks i begudes ensucrades amb carbohidrats d'absorció ràpida de manera irregular és un problema per al **FCL**.


## Preparar-se per a l'activitat física i l'esport

Quan feu esport o esteu actius, amb una bomba o amb un llaç tancat híbrid es recomana que l'usuari redueixi la **IOB** abans de l'esport.

Amb el **FCL**, l'algoritme està ajustat per detectar **UAM** i lliurar insulina automàticament per contrarestar les pujades de **glucèmia**.  Cal posar un **objectiu temporal** alt i un **percentatge del perfil** més baix (que ja tinguin efecte cap a l'inici de l'àpat) amb molta antelació abans de qualsevol activitat.

Els nivells d'activitat física inusuals o irregulars són un problema per al **FCL**. Per a l'esport cal planificar amb antelació (sobretot si voleu reduir la necessitat de carbohidrats o snacks de rescat per hipoglucèmies durant l'esport). Després d'un dia actiu, es recomana posar un **percentatge del perfil** més baix per a la nit, un cop el sopar està ben digerit: a les **automatitzacions**, poseu un objectiu de **glucèmia** elevat (>100 mg/dl), amb **Activar SMB amb objectiu temporal alt** desactivat a la **Configuració** d'**AAPS**.

## Dificultats per als nens

El **FCL** pot tenir dificultats extra amb els nens, per exemple:

- Lyumjev o Fiasp poden no estar disponibles o no ser ben tolerades.
- La taxa basal horària pot ser molt baixa i donar poca base per a **SMB** grans.
- La dieta pot ser rica en aliments dolços. Amb el poc volum de sang típic d'un cos petit, hi ha una forta tendència a pics de **glucèmia** molt alts.
- Les hormones del creixement i els canvis forts de sensibilitat a la insulina fan difícil mantenir el **FCL** ben ajustat.


## Activar SMB reforçats: seguretat

En l'**HCL** hi ha límits de seguretat per a la mida dels bolus que el llaç pot donar automàticament.

Els usuaris de **FCL** ja no han de donar un bolus gran a l'inici de l'àpat. Per això, els límits de mida dels **SMB** s'han d'ampliar perquè el llaç pugui lliurar **SMB** prou grans.

Si feu servir **AAPS** de la versió Master, es recomana configurar la **Configuració** d'**AAPS** amb la mida màxima d'**SMB** permesa que el **FCL** pot donar (maxUAMSMBBasalMinutes=120, és a dir, 2 hores de basal d'aquella hora del dia).

Si la vostra taxa basal és molt baixa, els límits d'**SMB** que en resulten poden ser massa baixos per controlar prou les pujades de **glucèmia** després dels àpats. Una solució possible és evitar les dietes que provoquen pics forts de **glucèmia**. L'algoritme [Auto ISF](#Open-APS-features-auto-isf) (només disponible en una compilació dev amb el mode enginyeria) té una opció **Extensió màxima del rang d'SMB** que amplia el màxim estàndard de 2 hores de basal amb un factor >1, i us permet pujar la **Ràtio de lliurament d'SMB** per defecte del 50%.

**Seguiu les instruccions perquè AAPS imiti els vostres bolus amb uns quants SMB**.

Comproveu de tant en tant la pantalla del plugin **APS** (**Configurador → APS → Obrir plugin**) per veure si els **SMB** permesos són prou grans per lliurar la insulina que el llaç necessita a l'inici dels àpats.

Si no és així, de vegades els vostres esforços d'ajust no serviran de res!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Observeu i analitzeu amb atenció la mida dels **SMB** poc després de començar l'àpat. Ajusteu pas a pas i no canvieu més d'1 o 2 paràmetres alhora.

La configuració d'**AAPS** ha d'estar prou ben feta per a la (vostra!) varietat d'àpats.
```

## Detecció d'àpats i les vostres automatitzacions de reforç

Per a un **FCL** amb èxit, l'**ISF** és el paràmetre d'ajust clau. Quan feu servir **AAPS** Master + **automatitzacions**, **un canvi de perfil de > 100% s'ha d'activar automàticament quan es detecta un àpat** (per les deltes de glucèmia), i donar l'**ISF** més agressiu.

**AAPS** Master permet un **perfil** temporal de fins al 130% en el mode **HCL**. L'impuls de l'**ISF** es fa en 3 passos:

- Pas 1 - reviseu l'**ISF** del **perfil** per a l'hora d'aquest àpat, i mireu si, per exemple, Autosens suggereix un canvi que tingui en compte la sensibilitat a la insulina actual del cos (de les últimes hores).
- Pas 2 - apliqueu un factor (1/Perfil%, com s'ha establert a l'**automatització**) per reforçar l'**ISF**.
- Pas 3 - comproveu que l'**ISF** suggerit és dins dels límits de seguretat establerts.

### Plantilles d'automatització per al FCL

Caselles per marcar a la part de dalt. Teniu l'opció:

- A la vostra llista d'**automatitzacions**, podeu desmarcar la casella (a l'esquerra de cada camp) => Això desactiva aquella **automatització**. Per exemple, podeu fer-ho per a totes les **automatitzacions** **FCL** de l'esmorzar per passar a **HCL** en els esmorzars.

- Per a cada regla d'**automatització** podeu marcar la casella Acció de l'usuari => aleshores les accions definides no s'executaran automàticament quan es compleixin les condicions. En canvi, la pantalla principal d'**AAPS** us avisarà cada vegada que el vostre **FCL** donaria automàticament un **SMB**. Llavors podeu dir «sí» o «no». Això és molt útil durant la fase d'ajust.

Aquesta funció pot ser útil en certes situacions, com la síndrome del «peu a terra», quan la **glucèmia** puja de cop en llevar-se al matí, però l'usuari vol evitar una resposta totalment automàtica d'«esmorzar començat».

La secció següent explica com agrupar les condicions de les **automatitzacions** i com tractar les situacions en què **AAPS** hauria d'augmentar (o reduir) el lliurament d'insulina. Com que l'**ISF** no es pot ajustar directament, pujar el **percentatge del perfil** per sobre del 100% fa el mateix per al nostre objectiu.

### SMB grans automàtics quan puja la glucèmia

La clau d'un **FCL** amb èxit: **a l'inici de les pujades de glucèmia per àpats, el llaç ha de donar SMB automàtics molt grans tan ràpid com sigui possible** per «recuperar» la **IOB** necessària (compareu amb el bolus que poseu normalment per a un àpat semblant amb **HCL**!)

Per aconseguir-ho, cal analitzar les dades del vostre **HCL** per decidir quines **deltes** poden no ser d'un àpat i quines sí.

- Com que podeu definir l'**automatització** dins d'una franja horària, només cal que analitzeu aquella franja.
- Si feu àpats molt diferents (per exemple, un esmorzar amb força carbohidrats però un dinar amb pocs carbohidrats), podeu fer dues automatitzacions (o dos grups d'**automatitzacions**) diferents, una per a cada franja horària.
- Excloeu les nits si veieu salts ocasionals per hipoglucèmies de compressió.
- Normalment n'hi ha prou amb la delta dels últims 5 minuts.
- Però també podeu fer servir una de les deltes mitjanes. Si compareu les deltes a les condicions de les vostres **automatitzacions**, fins i tot podeu definir accions més o menys agressives segons si la **glucèmia** puja de manera accelerada o no.

> ( delta – delta mitjana curta )>n   és una expressió que es pot fer servir per detectar l'acceleració , per activar el primer **SMB** al primer signe de pujada de la **glucèmia**. -                                                                             
> Atenció: no es pot fer servir amb valors de **CGM** dolents o molt suavitzats!

Un **CGM** amb dades irregulars posa l'usuari en una mala situació, perquè, per anar sobre segur, heu de ser «conservadors» a l'hora de definir quina delta és segur un signe de l'inici d'un àpat. Això vol dir:

- el **FCL** perd temps addicional, i això dona pics de **glucèmia** més alts i un %**TIR** més baix;
- no podeu fer servir una delta més primerenca o més petita, que podria activar també sense àpat els **SMB** que en el **FCL** han de substituir el bolus de l'usuari.

A més, les primeres pujades després d'un àpat tenen una **iob baixa**. Amb això en ment, una automatització (#1) per al sopar pot ser així:

![Automatització #1: una delta de 8 o més i una IOB per sota de 4 al vespre inicia el perfil al 130% durant 12 min](../images/fullClosedLoop02.png)

Automatització #1

Si es compleixen les condicions, **AAPS** donaria 1 o 2 **SMB** en els 12 minuts següents, amb un **ISF** reforçat segons el **percentatge del perfil** elevat establert (a l'exemple, un 30% més d'insulinReq). Mentre es compleixin aquestes condicions, la regla d'**automatització**  s'allarga 12 minuts més. Un àpat amb pocs carbohidrats pot fer pujar la **glucèmia** més lentament. És útil tenir una altra automatització (#2) que s'activi amb una delta més baixa i doni un impuls d'insulina més suau.

![Automatització #2: una delta de 5 o més i una IOB per sota de 5,5 inicia el perfil al 115% durant 12 min](../images/fullClosedLoop03.png)

La mateixa **automatització** probablement també s'activarà en àpats amb més carbohidrats, un cop acabada la pujada forta definida a l'automatització #1.

Heu d'«escalonar» aquestes dues (+ potser una tercera) **automatitzacions** perquè encaixin amb el que veieu en els vostres àpats (varietat) => Trobar la mida dels salts, els criteris de **iob** i els reforços adequats serà un procés d'ajust repetit.  A més, si a les condicions hi poseu les franges horàries adequades, podeu fer fàcilment automatitzacions diferents per als diferents àpats del dia (esmorzar, dinar, sopar).

Tingueu en compte que, encara a la fase de pujada (!), cal bloquejar el «desbordament» de **iob**, perquè els efectes tardans de la **insulina** (la «**cua**» després de 3-5 hores) no superin la capacitat de frenada del llaç amb basal temporal zero («treure» basal per reduir el risc d'hipoglucèmia).

Amb àpats grans hi ha **de vegades una segona pujada**. En aquell moment, normalment la iob també ha baixat una mica, i les automatitzacions més agressives tornen a fer efecte. (Comproveu que la condició de iob de l'automatització #2 no és massa baixa perquè això passi).

Poc després dels primers **SMB** ve una **fase equilibrada**, en què un lliurament moderat d'insulina hauria de cobrir els carbohidrats addicionals absorbits. (Excepte en àpats amb pocs carbohidrats, en què el llaç pot veure una pujada de **glucèmia** massa feble i passar ja ara a basal temporal zero).

En aquesta fase, la pantalla principal d'**AAPS** (on veieu cob=0 en el llaç complet amb **UAM**) pot demanar més carbohidrats necessaris. En el mode **UAM** això només vol dir que podeu fer una comprovació aproximada: és probable que hi hagi aquesta quantitat de carbohidrats encara sense absorbir al vostre cos, de l'àpat de fa més o menys una hora (del qual no vau donar cap informació al llaç)?


### Llindar de iob

Sovint, les **automatitzacions** #1 i/o #2 fan pujar la iob a nivells que normalment són suficients per als **vostres** àpats. Per a un ajust personalitzat, mireu a les vostres dades de l'**HCL** els valors màxims de iob en àpats ben controlats (sovint: el vostre bolus d'àpat), i a partir de quina quantitat al final va venir una hipoglucèmia (o calien carbohidrats extra).

Els **llindars de iob** raonables a partir dels quals cal reduir l'agressivitat del llaç poden no ser els mateixos per a tots els àpats. Però sobretot en la primera hora després de començar un àpat, que és molt important en el mode **UAM**. Serà diferent per a cada usuari. Per a alguns usuaris s'absorbeixen només uns 30 g/hora, i pot ser possible definir una **iob** útil que no depengui de l'àpat exacte.

Per a àpats excepcionals, o per baixar-lo si després feu esport, el llindar de **iob** es pot canviar ràpidament a la vostra **automatització**.

L'automatització (#3), «iobTH reached => **SMBs** off», està definida per acabar (o fer una pausa fins que arribi una altra onada de pujada per carbohidrats) el reforç agressiu dels **SMB**.

![Automatització #3: una IOB de 5,5 o més sense cap objectiu temporal actiu inicia un objectiu temporal de 111 mg/dl](../images/fullClosedLoop04.png)

Automatització #3

Diu al llaç que per sobre del vostre **llindar de iob** és millor no fer servir més **SMB**

- L'exemple ho fa posant OT=111 (un valor una mica arbitrari; trieu un número >100 que reconegueu fàcilment com el vostre tall automàtic dels **SMB**)
- A **AAPS**, a [Configuració → OpenAPS SMB](#Preferences-openaps-smb-settings), en general no permeteu **SMB** amb un objectiu elevat.                                                                                                                   
  Aleshores, la insulina necessària s'haurà de lliurar amb molta més prudència pel coll d'ampolla de les **TBR**

**Atenció: l'automatització #3 només funciona quan no hi ha cap OT actiu.** Per tant, si heu fet servir un EatingSoonTT, a aquella hora ja ha d'haver acabat. Normalment hauria de ser 30–40 minuts després de començar l'àpat.

Una manera de fer-ho és configurar una condició d'**automatització** que acabi un possible EatingSoonTT actiu amb la condició **iob**>65% * iobTH.
> Maneres de treballar amb EatingSoonTT Alguns usuaris del llaç posen un EatingSoonTT una hora o més abans de començar l'àpat (amb el botó d'OT, o de manera automàtica amb un objectiu de **glucèmia** més baix al **perfil** si els horaris dels àpats són força fixos), només per assegurar una **glucèmia** inicial baixa i una **iob** una mica més alta. Però, si el **FCL** sempre va cap a l'objectiu, això pot no aportar gaire, i potser preferiu definir una **automatització** que posi un EatingSoonTT quan es detecta l'inici d'un àpat (delta de glucèmia, o acceleració = delta > delta mitjana). Un **OT** baix és important en aquesta fase, perquè el llaç calcula cada **SMB** amb (glucèmia prevista menys OT)/sens; per tant, un OT baix fa més gran l'insulinReq resultant.

Després dels primers **SMB** reforçats, el vostre iobTH i l'**automatització** #3 haurien de trobar un bon equilibri: limitar el pic de glucèmia, però sense provocar una hipoglucèmia després de l'àpat.

Si el vostre esmorzar té molts més o molts menys carbohidrats que el vostre sopar mitjà, us pot anar bé definir **automatitzacions** per a les hores del dia corresponents, amb un **iobTH** diferent (i potser també deltes diferents i un **percentatge del perfil** diferent). Tots dos, vosaltres en definir el vostre ventall d'àpats i la configuració (sobretot l'**iobTH**), i el llaç en gestionar la corba de **glucèmia**, heu d'acceptar uns certs pics per reduir el perill d'hipoglucèmia cap al final de la **DIA** dels **SMB**.

### Estancament amb glucèmia alta

Si després d'un àpat «ric» veieu un estancament llarg amb **glucèmia alta**, l'**automatització** #4 (més avall), «post-meal High», ajuda amb la resistència per àcids grassos: després d'àpats de diversos plats, una pizza gran i greixosa o un sopar de raclette, la corba de glucèmia pot fer dues gepes o, molt sovint, un altiplà alt i llarg.

![Automatització #4: una glucèmia per sobre de 160 mg/dl i Autosens per sota del 120% inicia el perfil al 120% durant 15 min](../images/fullClosedLoop05.png)

Automatització #4

![Automatització #5: perfil al 120% i glucèmia per sota de 150 mg/dl torna al perfil normal](../images/fullClosedLoop06.png)

Automatització #5

L'automatització #4, «post-meal High», també és útil en el llaç tancat híbrid.

A més, cal una automatització de finalització, la #5, «Stop pmH», per reduir l'agressivitat de l'administració d'insulina tan aviat com la glucèmia baixi. (Però sovint el llaç ja limitarà igualment més insulina per evitar una hipoglucèmia, perquè la glucèmia prevista ja és baixa).

## Prevenció d'hipoglucèmies

El problema principal és que el **FCL** amb **UAM** (sense entrades de carbohidrats) **no pot saber quants grams de carbohidrats queden per absorbir**, i que podrien consumir aquella insulina de la «cua» sense que patiu una hipoglucèmia.

Amb **SMB** reforçats, el **FCL** ha «recuperat» el que abans fèiem amb un bolus d'àpat. Però **al final de l'activitat de la insulina (la «cua»), evitar una hipoglucèmia pot ser un tema seriós**.

Per preparar-se per al **FCL**, l'usuari ha de mirar amb atenció l'**evolució de la iob en el temps** en els àpats típics, i valorar **quan és massa i com es pot evitar ajustant les automatitzacions**. Això és possible perquè tenim diversos «cargols» per ajustar. Pot ser difícil fer-ho bé

En general, no té sentit continuar optimitzant la configuració per a un sol tipus d'àpat. Quan tingueu una configuració prou bona, per exemple per a un tipus de dinar que feu sovint, proveu com funciona amb altres tipus d'àpat i com hauríeu de trobar un «compromís».

Per evitar una hipoglucèmia a les hores 3–5 després de l'àpat, reduïu l'agressivitat abans que s'acumuli massa iob. Maneres concretes:

- Feu l'**ISF** cada vegada més suau ja durant la pujada de la glucèmia, com als exemples d'automatització #1 i #2.
- Definiu el llindar de iob a partir del qual **AAPS** es torna molt més prudent (automatització #3, més amunt). Tingueu en compte que aquesta **iob** es pot superar amb l'últim **SMB** abans que s'apliqués, i després encara més amb TBR si el llaç veu insulinReq. Els carbohidrats que s'absorbeixen faran baixar la iob.
- El llindar de iob es podria diferenciar segons els àpats: si cloneu les automatitzacions, podeu diferenciar fàcilment les franges d'esmorzar, dinar i sopar (o fins i tot llocs, com el menjador de la feina o a casa de la sogra, etc.)
> Dins d'aquestes franges horàries podríeu diferenciar encara més amb OT diferents per a pocs carbohidrats o carbohidrats ràpids, etc. Així podeu «codificar» diferents tipus d'àpat que poden passar a aquesta hora del dia i activar-los amb **automatitzacions** ajustades especialment per a ells. Probablement no cal, tret que els vostres hàbits alimentaris canviïn molt.

Abans d'un àpat especial, podeu pujar el llindar de **iob** o fer un altre canvi a qualsevol de les vostres automatitzacions en menys de 5 segons, directament al vostre telèfon amb AAPS (**Gestionar → Automatització**).

El perill d'hipoglucèmia unes hores després de l'àpat depèn sobretot de si la composició de l'àpat era tal que les **cues d'insulina de lluitar contra la major part dels carbohidrats** seran **consumides per «carbohidrats estesos»** (absorció de carbohidrats excessiva o retardada, proteïnes, greixos, fibra).

Amb el temps aprendreu patrons i ajustareu les vostres automatitzacions. Potser fins i tot canviareu una mica els vostres hàbits alimentaris, per exemple amb un petit(!) snack tardà de tant en tant, que pot ajudar a mantenir un bon **equilibri entre l'activitat de la insulina i l'absorció de carbohidrats** durant **tot** el temps de l'àpat (digestió, absorció). Així la vida és més fàcil per al llaç (i per a vosaltres).

### Ordre de les automatitzacions programades

Hi pot haver problemes quan les definicions de les **automatitzacions** se superposen. Exemple: el problema és que delta >8 també és delta >5, és a dir, hi pot haver dues **automatitzacions** que competeixen. Què fa el llaç llavors? Sempre decideix segons l'ordre en què apareixen les vostres **automatitzacions** a **Gestionar → Automatització**.  Exemple: la regla delta > +8 ha d'anar primer (i llançar l'impuls més fort si es compleixen totes les condicions); després ve la comprovació de delta >5 (amb una resposta més suau). Si es fa a l'inrevés, la regla delta>8 no s'aplicaria mai, perquè la delta>5 ja s'aplica i el cas queda tancat.
> Consell per a les automatitzacions: canviar l'ordre és molt fàcil. A **Gestionar → Automatització**, manteniu premut el tirador **=** a la dreta d'una regla i arrossegueu-la a una altra posició.

A més, és molt fàcil i ràpid ajustar qualsevol condició o acció en qualsevol moment, en pocs segons, directament al vostre telèfon amb AAPS; per exemple, si aneu a un àpat molt especial. (Però no oblideu tornar-ho a posar normal per al dia següent).

(full-closed-loop-troubleshooting)=

## Resolució de problemes

### Com tornar al llaç tancat híbrid

Podeu desmarcar les caselles de les **automatitzacions** del vostre **FCL**, tornar a posar bolus per als àpats i tornar a introduir els carbohidrats. Si havíeu tret els botons **Insulina** o **Calculadora** de la pantalla principal, torneu-los a afegir a la configuració de la [barra d'accés ràpid](#quicklaunch) (sempre continuen disponibles a **Tractaments** a la navegació inferior). Tingueu en compte que ara torna a ser cosa vostra posar el bolus per als àpats.

Pot ser bona idea fer **FCL** només per als àpats (franges horàries) en què les **automatitzacions** estan ben definides i marcades, i desmarcar només les dels altres àpats en què voleu fer **HCL** (o en què encara no n'heu definit cap, en el període de transició).

Per exemple, és totalment possible, sense passos extra un cop definides les **automatitzacions** per a la franja del sopar, fer **FCL** només per als sopars, mentre l'esmorzar i el dinar es fan amb **HCL** com esteu acostumats.



### Encara es compleixen els requisits per al FCL?

- El **perfil** bàsic encara és correcte?
- Ha empitjorat la qualitat del **CGM**?
- Consulteu els requisits (més amunt).

### La glucèmia puja massa

- Els àpats no es detecten prou aviat
    - Comproveu l'(in)estabilitat del Bluetooth
    - Comproveu si podeu posar deltes més petites per activar el primer **SMB**
    - Proveu amb un aperitiu o una sopa uns minuts abans de començar l'àpat
- Els SMB són massa febles
    - Comproveu l'ordre de les **automatitzacions** (per exemple: delta gran abans que delta petita)
    - Comproveu (en temps real) a la pantalla del plugin **APS** si la basal horària del perfil i els minuts establerts (màx. 120) limiten la mida d'SMB permesa
    - Comproveu (en temps real) a la pantalla del plugin **APS** si cal posar un %perfil  més gran
- Si tota la vostra configuració ja és al límit, potser haureu d'acceptar la hiperglucèmia temporal o canviar la vostra dieta.
> Si esteu preparats per provar una compilació dev, [Auto ISF](#Open-APS-features-auto-isf) també permet SMB encara més grans. Alguns usuaris també fan servir un petit prebolus en el seu «FCL». Però això afecta el comportament de la corba de glucèmia i, per tant, la detecció de pujades i els **SMB** activats; per això no és fàcil de fer amb un benefici global clar.
- Una observació important dels usuaris pilot és que la manera com les corbes de glucèmia i de iob arriben a l'inici de l'àpat influeix molt en el pic que provoquen els carbohidrats: Baixar (per exemple cap a un EatingSoonTT establert), acumular una mica de iob i tenir la corba ja cap a una acceleració positiva forta sembla molt útil per mantenir els pics baixos.

### La glucèmia baixa massa

- Es detecten àpats per error
    - Comproveu si podeu posar deltes més grans per activar el primer **SMB**
    - Marqueu «Acció de l'usuari» a l'automatització corresponent; així en el futur podreu decidir en cada moment bloquejar l'execució de l'automatització si no és per un àpat
    - Per evitar que els snacks activin **SMB** com si fossin un àpat, poseu un OT>100 quan mengeu un snack (com faríeu igualment per a l'esport i per als snacks contra la hipoglucèmia)
- En total, els SMB lliuren massa insulina
    - Comproveu (en temps real) a la pantalla del plugin **APS** si cal posar més petita l'**Extensió màxima del rang d'SMB**
    - Comproveu (en temps real) a la pantalla del plugin **APS** si cal posar més petit el **percentatge del perfil**
    - Probablement podeu posar més petita la ràtio de lliurament d'SMB. Tingueu en compte que en aquest cas s'aplica a tots els **SMB** (totes les franges horàries),
- Problemes amb la «cua» d'insulina després dels àpats
    - Potser haureu de menjar un snack (si veieu una predicció d'hipoglucèmia) o prendre pastilles de glucosa (si ja sou en zona d'hipoglucèmia). Però tingueu en compte que els carbohidrats necessaris que el llaç us pot indicar en algun moment són molt probablement exagerats, perquè el llaç no té cap informació sobre els carbohidrats que heu menjat i que encara esperen ser absorbits (mentre que vosaltres potser podeu endevinar quants més en queden, també dels greixos i les proteïnes).
    - Una informació valuosa seria saber si el problema ja ve sobretot de la fase de pujada de la glucèmia. Aleshores, posar un iobTH més baix pot ser una solució fàcil.
    - Si sovint necessiteu carbohidrats addicionals, anoteu quants grams calien (sense comptar el que potser vau prendre de més i que va tornar a necessitar insulina extra).  Després feu servir el valor IC del vostre perfil per calcular quanta insulina menys hauria d'haver lliurat l'**SMB**, i feu servir aquesta informació per al vostre ajust (el **percentatge del perfil** a les **automatitzacions**, o potser també el vostre iobTH). Això pot estar relacionat amb els **SMB** donats quan la glucèmia era alta, o també amb els **SMB** durant la pujada de la **glucèmia**.
    - Pot ser que simplement hàgiu d'acceptar pics de **glucèmia** més alts per no baixar massa. O canvieu la dieta a una amb menys carbohidrats i més proteïnes i greixos.


### Més informació

Assegureu-vos de mantenir el contacte amb altres usuaris de **FCL**.

Debat sobre el llaç tancat complet amb automatitzacions:

- Anglès:   [Canal de Discord](https://discord.gg/ChXj8BaKwA)

- Alemany:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
