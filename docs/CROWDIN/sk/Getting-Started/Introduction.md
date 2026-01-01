# Úvod do APS a AAPS

## Čo je to „systém umelého pankreasu“?

Ľudský pankreas robí viacej vecí okrem regulácie hladiny cukru v krvi. Termín **„systém umelého pankreasu“ (APS)** sa však zvyčajne vzťahuje na systém, ktorý automaticky udržiava hladinu cukru v krvi v zdravých hodnotách.

Najzákladnejší spôsob, ako to dosiahnuť, je zistiť **hladinu glukózy**, použiť tieto hodnoty pre **výpočty** a následne dodať (predpokladané) správne množstvo **inzulínu** do tela. Výpočet sa opakuje každých pár minút, 24 hodín denne, 7 dní v týždni. Používa **alarmy** a **upozornenia** na informovanie používateľa, ak je potrebný jeho zásah alebo zvýšená pozornosť. Tento systém sa zvyčajne skladá z **glukózového senzora**, **inzulínovej pumpy** a **aplikácie** v telefóne.

Viac o ďalších systémoch umelého pankreasu, ktoré sa v súčasnosti používajú a vyvíjajú, si môžete prečítať v tomto článku z roku 2022:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Future Directions in Closed-Loop Technology](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses).

V blízkej budúcnosti budú niektoré takzvané „duálne hormónové“ systémy schopné podávať glukagón spolu s inzulínom s cieľom predchádzať závažným hypoglykémiám a umožniť ešte prísnejšiu kontrolu hladiny glukózy v krvi.

Systém umelého pankreasu možno považovať za [„autopilota pre vašu cukrovku“](https://www.artificialpancreasbook.com/). Čo to znamená?

V lietadle autopilot nevykonáva všetku prácu pilota, pilot nemôže prespať celý let. Autopilot pomáha pilotovi pri práci. Zbavuje ich bremena neustáleho monitorovania lietadla, čo umožňuje pilotovi sústrediť sa z času na čas na širšie monitorovanie. Autopilot prijíma signály z rôznych senzorov, počítač ich vyhodnocuje spolu so špecifikáciami pilota a následne vykoná potrebné úpravy, pričom pilota upozorní na akékoľvek problémy. Pilot už nieje pod tlakom neustáleho rozhodovania.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Čo znamená hybridná uzavretá slučka?

Najlepším riešením pre diabetes 1. typu by bola „účinná liečba“ (pravdepodobne implantát pankreatických buniek, ktoré sú chránené pred imunitným systémom). Kým na to čakáme, systém umelého pankreasu s „úplne uzavretou slučkou“ je pravdepodobne ďalšou najlepšou vecou. Ide o technologický systém, ktorý nevyžaduje žiadny vstup od používateľa (ako napríklad podávanie inzulínu počas jedla) s dobrou reguláciou hladiny glukózy v krvi. V súčasnosti neexistujú žiadne bežne dostupné systémy, ktoré sú „plne“ uzavreté, všetky vyžadujú určitý vstup od používateľa. V súčasnosti dostupné systémy sa nazývajú „hybridné“ systémy s uzavretou slučkou, pretože využívajú kombináciu automatizovanej technológie a vstupu od používateľa.

## Ako a prečo sa začala používať uzavretá slučka?

Vývoj komerčnej technológie pre ľudí s diabetom 1. typu (T1D) je veľmi pomalý. V roku 2013 komunita ľudí s diabetes 1. typu založila hnutie #WeAreNotWaiting. Sami vyvinuli systémy s využitím existujúcej schválenej technológie (inzulínové pumpy a senzory) na zlepšenie kontroly hladiny glukózy v krvi, bezpečnosti a kvality života. Tieto systémy sú známe ako DIY (urob si sám), pretože nie sú formálne schválené zdravotníckymi orgánmi (FDA, NHS atď.). K dispozícii sú štyri hlavné systémy: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

Skvelým spôsobom, ako pochopiť základy DIY slučky, je prečítať si knihu Dany Lewisovej „Automated Insulin Delivery“ (Automatizované podávanie inzulínu). Knihu si môžete zadarmo pozrieť [tu](https://www.artificialpancreasbook.com/) (alebo si ju môžete kúpiť v tlačenej podobe). Ak sa chcete dozvedieť viac o [OpenAPS](https://openaps.org/what-is-openaps/), z ktorého sa vyvinul **AAPS**, [webová stránka OpenAPS](https://openaps.org/what-is-openaps/) je skvelým zdrojom.

Na trh bolo uvedených niekoľko komerčných hybridných systémov s uzavretou slučkou, z ktorých najnovšie sú [CamAPS FX](https://camdiab.com/) (Spojené kráľovstvo a EÚ) a [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA a EÚ). Tieto sa veľmi líšia od DIY systémov, najmä preto, že oba obsahujú „učiaci sa algoritmus“, ktorý upravuje množstvo podávaného inzulínu podľa vašich potrieb inzulínu z predchádzajúcich dní. Mnoho ľudí v DIY komunite už vyskúšalo tieto komerčné systémy a porovnalo ich so svojimi DIY systémami. Viac informácií o porovnaní rôznych systémov nájdete v skupinách na Facebooku určených pre tieto systémy, v [skupine AAPS na Facebooku](https://www.facebook.com/groups/AndroidAPSUsers/) alebo na [Discorde](https://discord.com/invite/4fQUWHZ4Mw).

## Čo je Android APS (AAPS)?

![image](../images/basic-outline-of-AAPS.png)

**Obrázok 1**. Základný prehľad systému umelého pankreasu (APS) pre systém Android, AAPS.

Android APS (**AAPS**) je hybridný systém s uzavretou slučkou alebo systém umelého pankreasu (APS). Výpočty dávkovania inzulínu vykonáva pomocou zavedených algoritmov [OpenAPS](https://openaps.org/) (súbor pravidiel) vyvinutých komunitou diabetikov 1. typu #WeAreNotWaiting.

Keďže OpenAPS je kompatibilný iba s určitými staršími inzulínovými pumpami, systém **AAPS** (ktorý je možné použiť so širšou škálou inzulínových púmp) vyvinul v roku 2016 Miloš Kozák pre člena rodiny s cukrovkou 1. typu. Od prvých dní systém **AAPS** neustále vyvíja a zdokonaľuje tím dobrovoľných počítačových vývojárov a ďalších nadšencov, ktorí majú spojenie so svetom diabetu 1. typu. Dnes systém **AAPS** používa približne 20 000 ľudí. Je to vysoko prispôsobiteľný a všestranný systém a keďže je open-source, je tiež ľahko kompatibilný s mnohými inými open-source softvérmi a platformami pre diabetes. Základné komponenty súčasného systému **AAPS** sú uvedené na **Obrázku 1** vyššie.



## Aké sú základné komponenty AAPS?

„Mozgom“ AAPS je  **aplikácia**, ktorú si sami vytvoríte. Na to existuje podrobný návod krok za krokom. Potom si nainštalujete **aplikáciu AAPS** na [kompatibilný](../Getting-Started/Phones.md) **smartfón so systémom Android** (**1**). Viacerí používatelia uprednostňujú svoju slučku na samostatnom telefóne pred svojím hlavným telefónom. Takže nemusíte nevyhnutne používať len váš hlavný telefón na všetky tieto veci ako v bežnom živote, na spustenie slučky AAPS vám postačí aj samostatný telefón.

Na **smartfóne so systémom Android** bude potrebné mať nainštalovanú aj ďalšiu aplikáciu okrem **AAPS**. Táto [dodatočná aplikácia](../Getting-Started/CompatiblesCgms.md) prijíma údaje o glukóze zo senzora (**2**) cez Bluetooth a potom tieto údaje odosiela interne z telefónu do **aplikácie AAPS**.

**Aplikácia AAPS** používa rozhodovací proces (**algoritmus**) z OpenAPS. Začiatočníci začínajú používať základný algoritmus **oref0**, ale počas štúdia AAPS je možné prejsť na novší algoritmus **oref1**. Ktorý algoritmus použijete (oref0 alebo oref1), závisí od toho, ktorý najlepšie vyhovuje vašej konkrétnej situácii.  V oboch prípadoch algoritmus zohľadňuje viacero faktorov a vykonáva rýchle výpočty vždy, keď zo senzora príde nový údaj. Algoritmus potom cez Bluetooth odošle inzulínovej pumpe (**3**) pokyny o tom, koľko inzulínu má podať. Všetky informácie je možné odoslať na internet prostredníctvom mobilných dát alebo Wi-Fi (**4**). Tieto údaje je možné v prípade potreby zdieľať aj so sledovateľmi a/alebo zhromažďovať na účely analýzy.

## Aké sú výhody systému AAPS?

Algoritmus OpenAPS používaný systémom **AAPS** riadi hladinu cukru v krvi bez zásahu používateľa podľa parametrov definovaných používateľom (dôležité sú bazálne dávky, faktory citlivosti na inzulín, pomery inzulínu k sacharidom, trvanie aktivity inzulínu atď.) a reaguje každých 5 minút na nové údaje zo senzora. Medzi uvádzané výhody používania AAPS patria rozsiahle možnosti jemného ladenia, automatizácia a zvýšená transparentnosť systému pre pacienta/opatrovateľa. To môže viesť k lepšej kontrole vašej(alebo diabetu blízkej osoby) cukrovky, čo môže následne priniesť zlepšenie kvality života a väčší pokoj v duši.

### **Medzi špecifické výhody patrí:**

#### 1) Zabudovaná bezpečnosť
Ak si chcete prečítať o bezpečnostných funkciách algoritmov známych ako oref0 a oref1, [kliknite sem](https://openaps.org/reference-design/). Používateľ má kontrolu nad vlastnými bezpečnostnými obmedzeniami.

#### 2) **Flexibilita hardvéru**

Systém **AAPS** funguje so širokou škálou inzulínových púmp a senzorov. Napríklad, ak sa u vás objaví alergia na lepidlo senzoru Dexcom, môžete namiesto toho prejsť na používanie senzora Libre. To ponúka flexibilitu pri životných zmenách. Nemusíte znova inštalovať ani preinštalovať aplikáciu **AAPS**, stačí zaškrtnúť iné políčko v aplikácii a zmeniť hardvér. AAPS nieje nezávislý od konkrétnych inzulínových púmp a obsahuje aj „virtuálnu pumpu“, takže používatelia môžu bezpečne experimentovať pred jeho použitím na sebe.

#### 3) **Vysoko prispôsobiteľné s veľkou škálou parametrov**

Používatelia môžu jednoducho pridávať alebo odoberať moduly alebo funkcie a **AAPS** sa dá používať v režime otvorenej aj uzavretej slučky. Tu je niekoľko príkladov možností systému **AAPS**:

 a) Možnosť nastaviť nižšiu cieľovú hodnotu glukózy 30 minút pred jedlom; cieľovú hodnotu môžete nastaviť už od 72 mg/dl (4,0 mmol/l).

 b) Ak trpíte inzulínovou rezistenciou, čo má za následok vysokú hladinu cukru v krvi, funkcia **AAPS** vám umožňuje nastaviť pravidlo **automatizácie**, ktoré sa aktivuje, keď hladina glukózy v krvi stúpne nad 8 mmol/l (144 mg/dl), čím sa prepne (napríklad) na profil 120 % (čo má za následok 20 % zvýšenie bazálnej dávky a posilnenie aj ďalších faktorov v porovnaní s vaším bežným nastavením **profilu**). Automatizácia bude trvať podľa nastaveného naplánovaného času. Takáto automatizácia by sa dala nastaviť tak, aby bola aktívna iba v určité dni v týždni, v určitých denných hodinách a dokonca aj na určitých miestach.

 c) Ak je vaše dieťa napr. začne skákať na trampolíne bez predchádzajúceho upozornenia, **AAPS** umožňuje pozastavenie inzulínu na stanovený čas priamo cez telefón.

 d) Po opätovnom pripojení pumpy, ktorá bola odpojená kvôli plávaniu, systém **AAPS** vypočíta bazálny inzulín, ktorý ste vynechali počas odpojenia, a opatrne ho podá podľa vašej aktuálnej glykémie. Akýkoľvek nepotrebný inzulín je možné prepísať jednoduchým „zrušením“ vynechanej bazálnej dávky.

 e) **AAPS** vám umožňuje nastaviť rôzne profily pre rôzne situácie a jednoducho medzi nimi prepínať. Napríklad funkcie, ktoré algoritmu umožňujú rýchlejšie znižovať zvýšenú glykémiu (ako napríklad supermikro bolusy („**SMB**“), neohlásené jedlá („**UAM**“), je možné nastaviť tak, aby fungovali iba počas dňa, ak sa obávate nočných hypoglykémií.

Toto všetko sú príklady, celá škála funkcií poskytuje obrovskú flexibilitu pre každodenný život vrátane športu, choroby, hormonálnych cyklov _atď._. V konečnom dôsledku je na používateľovi, aby sa rozhodol, ako túto flexibilitu využije, a na tento účel neexistuje univerzálne automatizované riešenie pre všetkých.

#### 4) **Vzdialené monitorovanie**
Existuje viacero možných monitorovacích systémov (Sugarmate, Dexcom Follow, xDrip+, Android Auto _atď._), ktoré sú užitočné pre rodičov/opatrovateľov a dospelých v určitých situáciách (spanie/jazda), ktorí potrebujú prispôsobiteľné upozornenia. V niektorých aplikáciách (xDrip+) môžete tiež úplne vypnúť alarmy, čo je skvelé, ak máte nový senzor, ktorý sa „zahrieva“ alebo usádza a s ktorým ešte nechcete slučkovať.

#### 5) **Vzdialené ovládanie**
Významnou výhodou systému **AAPS** oproti komerčným systémom je, že sledovatelia môžu pomocou overených textových príkazov (SMS) alebo prostredníctvom aplikácie ([Nightscout](https://nightscout.github.io/) alebo AAPSClient) posielať širokú škálu príkazov späť do systému **AAPS**. Toto hojne používajú rodičia detí s cukrovkou 1. typu, ktorí užívajú AAPS. Je to veľmi užitočné: napríklad na ihrisku, ak si chcete vopred dať bolus na desiatu z vlastného telefónu a vaše dieťa sa práve hrá. Je možné monitorovať systém (_napr._ Fitbit), odosielať základné príkazy (_napr._ Samsung Galaxy watch 4) alebo dokonca spúšťať celý systém AAPS z inteligentných hodiniek (**5**) (_napr._ LEMFO). V tomto poslednom prípade nepotrebujete na spustenie AAPS telefón. S predlžovaním výdrže batérie hodiniek a stabilnejšou technológiou sa táto posledná možnosť pravdepodobne stane čoraz atraktívnejšou.

#### 6) **Žiadne komerčné obmedzenia vďaka otvoreným aplikačným rozhraniam**
Okrem použitia open-source prístupu, ktorý umožňuje kedykoľvek zobraziť zdrojový kód **AAPS**, všeobecný princíp poskytovania otvorených programovacích rozhraní dáva aj iným vývojárom možnosť prispieť novými nápadmi. **AAPS** je úzko prepojený s Nightscoutom. To urýchľuje vývoj a umožňuje používateľom pridávať funkcie, ktoré im ešte viac spríjemnia život s cukrovkou. Dobrými príkladmi takýchto integrácií sú [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip+, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) atď. Medzi vývojármi open-source a tými, ktorí vyvíjajú komerčné systémy, prebieha neustále dialóg. Mnohé DIY inovácie postupne prijímajú komerčné systémy, kde je vývoj pochopiteľne pomalší, čiastočne preto, že rozhrania medzi systémami od rôznych spoločností (pumpy, aplikácie, senzory _atď._) je potrebné starostlivo prerokovať a licencovať. To môže tiež spomaliť inovácie, ktoré sú síce vhodné pre pacienta (alebo malú podskupinu pacientov, ktorí majú veľmi špecifické požiadavky), ale neprinášajú žiadny značný zisk.

#### 7) **Podrobné rozhranie aplikácie**
S **AAPS** je jednoduché sledovať veci, ako napríklad: hladiny inzulínu v pumpe, vek kanyly, vek senzora, vek batérie pumpy, IOB _atď._. Mnoho úkonov je možné vykonať prostredníctvom aplikácie **AAPS** (naplnenie pumpy, odpojenie pumpy _atď._), namiesto samotnej pumpy, čo znamená, že pumpa môže zostať vo vašom (alebo u osoby, na ktorej ste vyživovaná) vrecku alebo na opasku.

#### 8) **Dostupnosť a cenová dostupnosť**
**AAPS** poskytuje ľuďom, ktorí si v súčasnosti nemôžu dovoliť samofinancovanie alebo nemajú finančné prostriedky/poistenie, prístup k špičkovému hybridnému uzavretému systému, ktorý je koncepčne o roky pred komerčnými systémami, čo sa týka vývoja. Na nastavenie **AAPS** momentálne potrebujete účet Nightscout, hoci účet Nightscout nie je potrebný na každodenné fungovanie slučky **AAPS**. Mnoho ľudí naďalej používa Nightscout na zhromažďovanie svojich údajov a na diaľkové ovládanie. Hoci je samotný **AAPS** bezplatný, nastavenie Nightscout prostredníctvom jednej z rôznych platforiem môže byť spoplatnené (0 € – 12 €) v závislosti od požadovanej úrovne podpory (pozri porovnávaciu tabuľku) a od toho, či chcete Nightscout po nastavení naďalej používať alebo nie. **AAPS** funguje so širokou škálou cenovo dostupných (od približne 150 €) [telefónov s Androidom](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Pre konkrétne lokality a jazyky sú k dispozícii rôzne verzie a AAPS môžu používať aj ľudia, ktorí sú [nevidiaci](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) **Podpora**
Žiadny automatizovaný systém podávania inzulínu nie je dokonalý. Komerčné aj open-source systémy majú mnoho bežných problémov v komunikácii aj v dočasnom zlyhaní hardvéru. Podporu poskytuje komunita používateľov AAPS na Facebooku, Discorde a GitHube, ktorí navrhli, vyvinuli a v súčasnosti používajú **AAPS** po celom svete. Existujú aj skupiny podpory na Facebooku a pomoc od kliník/komerčných spoločností pre komerčné systémy APS – oplatí sa porozprávať s používateľmi alebo bývalými používateľmi týchto systémov, aby ste získali spätnú väzbu o bežných chybách, kvalite vzdelávacieho programu a úrovni poskytovanej priebežnej podpory.

#### 10) **Predvídateľnosť, transparentnosť a bezpečnosť**
**AAPS** je úplne transparentný, logický a predvídateľný, čo môže uľahčiť rozpoznanie nesprávneho nastavenia a jeho zodpovedajúcu úpravu. Presne vidíte, čo systém robí, prečo to robí a nastavíte si jeho prevádzkové limity, čo vám dáva kontrolu (a zodpovednosť). To môže používateľovi poskytnúť sebavedomie a zdravší spánok.

#### 11) **Prístup k pokročilým funkciám prostredníctvom vývojových (dev) režimov vrátane plne uzavretej slučky**
Táto dokumentácia **AAPS** sa zameriava na hlavnú vetvu **„master“** platformy **AAPS**. Výskum a vývoj však prebieha neustále. Skúsenejší používatelia si môžu pozrieť experimentálne funkcie vo **vývojárskej** verzii. Inovácie vo vývoji sa zameriavajú na stratégie pre plne uzavretú slučku (bez nutnosti bolusového podávania jedál _atď._) a vo všeobecnosti sa snažia čo najviac uľahčiť život ľuďom s cukrovkou 1. typu.

#### 12) **Schopnosť prispieť k ďalším zlepšeniam**
Diabetes 1. typu môže byť veľmi frustrujúci a izolujúci. Mať kontrolu nad vlastnou diabetickou technikou a posunúť svoje skúsenosti ďalej tým, že pomôžete iným keď sa už sám posúvate dopredu je veľmi povzbudzujúce a pomáha to iným. Môžete sa vzdelávať, objavovať prekážky a vyhľadávať, a dokonca aj prispievať k novému vývoju a dokumentácii. V komunite budú aj iní s rovnakým cieľom, s ktorými môžete vymieňať nápady a spolupracovať. Toto je podstata #WeAreNotWaiting.

## Ako je na tom AAPS v porovnaní s MDI a open loop režimom?

Multiple daily injections (MDI, (a) na **Obrázku 2** nižšie) zvyčajne zahŕňajú podávanie injekcie dlhodobo pôsobiaceho inzulínu (_napr._ Tresiba) jedenkrát denne s injekciami rýchlejšie pôsobiaceho inzulínu (_napr._ Novorapid, Fiasp) počas jedla alebo na korekciu. Otvorená slučka (b) zahŕňa použitie pumpy na podávanie bazálnej dávky rýchlo pôsobiaceho inzulínu vopred naprogramovanými rýchlosťami a následné bolusové podávanie pumpou počas jedla alebo na korekciu. Základom loop systému je, že aplikácia používa údaje zo senzora glukózy na to, aby pumpe dala pokyn na zastavenie podávania inzulínu, keď predpovedá, že sa blížite k nízkej hladine glukózy, a na podanie ďalšieho inzulínu, ak hladina glukózy stúpa a predpokladá sa, že bude príliš vysoká (c). Hoci je tento obrázok v porovnaní so skutočným životom príliš zjednodušený, jeho cieľom je demonštrovať kľúčové rozdiely medzi prístupmi. Ktorýmkoľvek z týchto troch spôsobov je možné dosiahnuť výnimočne dobrú kontrolu glukózy.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Obrázok 2**. Základný prehľad (a) MDI, (b) open-loop pumping a (c)  hybrid closed loop pumping.

## Ako je na tom AAPS v porovnaní s inými uzavretými/slučkovými systémami?

K 25. júnu 2023 boli k dispozícii štyri hlavné systémy s otvoreným zdrojovým kódom a uzavretou slučkou: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) a [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI) (predtým FreeAPS X). Vlastnosti rôznych systémov sú uvedené v tabuľke nižšie:


| Typ zariadenia | Názov                                                                     | [AAPS](https://wiki.aaps.app)             | [Uzavretý okruh](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Telefón        | Android                                                                   | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| Telefón        | iPhone                                                                    | ![unavailable](../images/unavailable.png) | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| Rig            | tiny computer (1)                                                         | ![unavailable](../images/unavailable.png) | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                       | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                      | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                        | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md) (2)                   | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| PUMPA          | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                       | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| PUMPA          | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                             | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Medtrum TouchCare Nano](../CompatiblePumps/MedtrumNano.md)               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)              | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)             | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| PUMPA          | [Starší Medtronic](../CompatiblePumps/MedtronicPump.md)                   | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| PUMPA          | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM            | [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [Dexcom One](../CompatibleCgms/DexcomG6.md)                               | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| CGM            | [Dexcom G5](../CompatibleCgms/DexcomG5.md)                                | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![available](../images/available.png)                 | ![available](../images/available.png)          |
| CGM            | [Libre 3](../CompatibleCgms/Libre3.md)                                    | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM            | [Libre 2](../CompatibleCgms/Libre2.md)                                    | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [Libre 1](../CompatibleCgms/Libre1.md)                                    | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [Eversense](../CompatibleCgms/Eversense.md)                               | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                              | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [PocTech](../CompatibleCgms/PocTech.md)                                   | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![available](../images/available.png)          |
| CGM            | [Ottai](../CompatibleCgms/OttaiM8.md)                                     | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM            | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                | ![available](../images/available.png)     | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)             | ![unavailable](../images/unavailable.png)      |
| CGM            | [Nightscout ako zdroj glykémie](../CompatibleCgms/CgmNightscoutUpload.md) | ![available](../images/available.png)     | ![available](../images/available.png)                 | ![available](../images/available.png)                 | ![available](../images/available.png)          |

_Poznámky k tabuľke:_
1. **Rig** je malý počítač, ktorý nosíte so sebou bez monitora. Jeden podporovaný typ zariadenia je Intel Edison + Explorer Board a druhý Raspberry Pi + Explorer HAT alebo Adafruit RFM69HCW Bonnet. Prvé APS boli založené na tomto nastavení, pretože mobilné telefóny neboli schopné spúšťať požadované algoritmy. Používanie týchto systémov kleslo, pretože nastavenie na mobilných telefónoch sa stalo jednoduchším a telefóny majú displej. Spoločnosť Intel tiež prestala predávať počítač Intel Edison. Vynikajúce algoritmy OpenAPS **oref0** a **oref1** sú teraz začlenené do AAPS a iAPS.
2. Omnipod Dash je nástupcom Omnipodu Eros. Podporuje komunikáciu cez Bluetooth a na komunikáciu medzi Omnipodom a mobilným telefónom nepotrebuje rig gateway. Ak máte na výber, odporúčame použiť Dash namiesto Erosa.


V roku 2022 vyšlo v prestížnom medicínskom časopise odporúčanie pre lekárov k open source loopingu, pripravené priamo odborníkmi z praxe: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Stojí za prečítanie a sumarizuje hlavné technické rozdiely medzi rôznymi hybridnými systémami s uzavretou slučkou s otvoreným zdrojovým kódom.

Je ťažké získať „cit“ o akomkoľvek systéme bez toho, aby ste ho používali alebo sa porozprávali s ostatnými, ktorí ho používajú, preto sa obráťte na ostatných na Facebooku/Discorde a opýtajte sa. Väčšina ľudí zisťuje, že systém **AAPS** je v porovnaní s inými hybridnými systémami s uzavretou slučkou (najmä komerčnými systémami) neuveriteľne sofistikovaný s obrovským množstvom potenciálne prispôsobiteľných nastavení a funkcií, ktoré boli uvedené vyššie. Pre niektorých ľudí to môže byť zo začiatku trochu náročné, ale nie je potrebné sa ponáhľať s preskúmaním všetkých možností naraz, môžete postupovať tak pomaly alebo rýchlo, ako chcete, a pomoc je k dispozícii na každom kroku.


## Používa AAPS umelú inteligenciu alebo nejaký algoritmus učenia?

Aktuálna verzia **AAPS** (3.3.1.3) neobsahuje žiadne algoritmy strojového učenia, viac parametrové modely inzulínovej odozvy ani umelú inteligenciu. Systém je preto otvorený a transparentný vo svojom fungovaní a je zrozumiteľný nielen pre odborníkov, ale aj pre lekárov a pacientov. To znamená, že ak máte prudko sa meniaci rozvrh (napríklad prechod zo stresujúceho týždňa v práci na dovolenku) a pravdepodobne budete potrebovať výrazne odlišné množstvo inzulínu, môžete okamžite prepnúť systém **AAPS** na spustenie slabšieho/silnejšieho prispôsobeného profilu. „Učiaci sa systém“ túto úpravu vykoná automaticky za vás, ale úprava podávania inzulínu bude pravdepodobne trvať dlhšie.

## Ktorý systém je pre mňa alebo osobu o ktorú sa starám ten správny?

V praxi je váš výber systému často obmedzený tým, akú pumpu už máte alebo si ju môžete zaobstarať od svojho lekára, a vaším telefónom (Apple alebo Android). Ak ešte nemáte pumpu, máte najväčší výber systémov. Technológia sa neustále vyvíja, pumpy sa vyraďujú z výroby a na trh sa uvádzajú nové pumpy a senzory. Väčšina systémov s otvoreným zdrojovým kódom pracuje s hlavnými senzormi (Libre a Dexcom) alebo sa rýchlo prispôsobí na prácu s novými senzormi približne rok po ich vydaní (s malým časovým oneskorením kvôli testovaniu bezpečnosti a stability).

Väčšina používateľov systému **AAPS** hlási dlhší čas v rozmedzí dávok, zníženie HbA1c, ako aj zlepšenie kvality života vďaka systému, ktorý dokáže automaticky upravovať bazálne dávky cez noc počas spánku, a to platí pre väčšinu hybridných systémov s uzavretou slučkou. Niektorí ľudia uprednostňujú veľmi jednoduchý systém, ktorý nie je veľmi prispôsobiteľný (čo znamená, že môžete uprednostniť komerčný systém), a iní považujú tento nedostatok kontroly za veľmi frustrujúci (môžete uprednostniť systém s otvoreným zdrojovým kódom). Ak vám (alebo osobe o ktorú sa staráte) bola nedávno diagnostikovaná cukrovka, bežnou cestou je najprv si zvyknúť na používanie MDI a glukózového senzora, potom prejsť na pumpu, ktorá má potenciál pre slučku, a nakoniec na **AAPS**, ale niektorí ľudia (najmä malé deti) môžu prejsť priamo na pumpu.

Je dôležité poznamenať, že používateľ **AAPS** musí byť proaktívny pri riešení problémov a ich oprave sám s pomocou komunity. Toto je veľmi odlišný spôsob myslenia od používania komerčného systému. S **AAPS**  má používateľ väčšiu kontrolu, ale aj zodpovednosť a musí sa s tým cítiť pohodlne.

## Je bezpečné používať open-source systémy ako AAPS?

### Bezpečnosť systému AAPS
Presnejšia otázka pravdepodobne znie: „Je to bezpečné **v porovnaní** s mojím súčasným systémom podávania inzulínu?“, keďže žiadna metóda podávania inzulínu nie je bez rizika. V systéme **AAPS** existuje veľa kontrolných mechanizmov. Nedávny  [článok](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) sa venoval použitiu **AAPS** v počítačom simulovanom nastavení, čo bol účinný spôsob, ako neobjektívne overiť bezpečnosť a účinnosť systému. Vo všeobecnosti sa odhaduje, že viac ako 10 000 jednotlivcov na celom svete používa automatizované systémy podávania inzulínu s otvoreným zdrojovým kódom a ich využívanie celosvetovo neustále rastie.

Akékoľvek zariadenie, ktoré používa rádiovú komunikáciu, by mohlo byť napadnuté hackermi, a to platí aj pre inzulínovú pumpu bez slučky. V súčasnosti si nie sme vedomí žiadneho pokusu o ublíženie jednotlivcom hackerským útokom na ich zdravotnícke zariadenia súvisiace s cukrovkou. Existuje však viacero spôsobov, ako sa pred takýmito rizikami chrániť:

1.  V nastaveniach pumpy obmedzte maximálny povolený bolus aj maximálny dočasný bazálny dávkovací režim na hodnoty, ktoré považujete za najbezpečnejšie. Toto sú pevne dané limity, o ktorých si nemyslíme, že by ich mohol obísť akýkoľvek hacker.

2.  Nastavte si alarmy CGM pre maximálne aj minimálne hodnoty.

3.  Sledujte si podávanie inzulínu online. Používatelia Nightscoutu si môžu nastaviť ďalšie alarmy, ktoré upozornia na širokú škálu podmienok vrátane podmienok, ktorých výskyt je oveľa pravdepodobnejší ako pri hackerskom útoku. Okrem maximálnych a minimálnych hodnôt dokáže Nightscout zobraziť diagnostické údaje užitočné na overenie, či pumpa funguje podľa potreby, vrátane aktuálneho IOB, histórie dočasných bazálnych dávok pumpy a histórie bolusových dávok pumpy. Dá sa tiež nakonfigurovať tak, aby proaktívne upozorňoval používateľov na nežiaduce podmienky, ako sú predpokladané maximálne a minimálne hodnoty, nízka hladina inzulínu v zásobníku a slabá batéria pumpy.

Ak by došlo k škodlivému útoku na vašu inzulínovú pumpu, takéto riešenie by toto riziko výrazne zmiernilo. Každý potenciálny používateľ **AAPS** musí zvážiť riziká spojené s používaním systému **AAPS** oproti rizikám používania iného systému.

#### Bezpečnostné aspekty týkajúce sa príliš rýchleho zlepšenia kontroly hladiny glukózy v krvi

Rýchle zníženie HbA1c a zlepšená kontrola hladiny glukózy v krvi znie lákavo. Príliš rýchle zníženie priemernej hladiny glukózy v krvi spustením akéhokoľvek systému s uzavretou slučkou však môže spôsobiť trvalé poškodenie, vrátane poškodenia očí, a bolestivú neuropatiu, ktorá nikdy nezmizne. Tomuto poškodeniu sa dá vyhnúť jednoducho pomalším znižovaním hladín. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a time plan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the safety section [here](#preparing-safety-first).

#### Bezpečnosť v oblasti zdravotníckych zariadení, spotrebného materiálu a iných liekov

Pre umelú pankreatickú slučku použite testovanú, plne funkčnú inzulínovú pumpu a CGM schválené FDA alebo CE. Úpravy hardvéru alebo softvéru týchto komponentov môžu spôsobiť neočakávané dávkovanie inzulínu, čo predstavuje značné riziko pre používateľa. Ak nájdete alebo vám ponúknu pokazené, upravené alebo svojpomocne vyrobené inzulínové pumpy alebo prijímače CGM, nepoužívajte ich na vytvorenie systému AAPS.

Používajte originálne pomôcky, ako sú zavádzače, kanyly a nádoby na inzulín schválené výrobcom pumpy a systému CGM. Používanie netestovaných alebo upravených pomôcok môže spôsobiť nepresnosť CGM a chyby v dávkovaní inzulínu. Inzulín je pri nesprávnom dávkovaní veľmi nebezpečný – nezahrávajte si so životom tým, že si obmedzíte zásoby.

Neužívajte inhibítory SGLT-2 (gliflozíny) počas užívania **AAPS**, pretože výrazne znižujú hladinu cukru v krvi. Kombinácia tohto efektu so systémom, ktorý znižuje bazálne dávky s cieľom zvýšiť glykémiu, je nebezpečná, viac podrobností o tom nájdete v hlavnej [sekcii o bezpečnosti](#preparing-safety-first).
## Ako môžem pristupovať ku diskusii o AAPS s mojím lekárom?

Odporúča sa, aby ste sa porozprávali so svojim lekárom pred použitím **AAPS**. Nebojte sa úprimne porozprávať so svojím diabetológom, ak máte v úmysle používať **AAPS** (alebo akúkoľvek inú DIY slučku). Transparentnosť a dôvera medzi pacientom a lekárom sú prvoradé.

### Odporúčaný prístup:
Porozprávajte sa  so svojím lekárom, aby ste zistili jeho znalosť a postoj k diabetickým technológiám, ako sú CGM, pumpy, hybridné slučky a komerčné slučky. Váš lekár/endokrinológ by mal byť oboznámený so základnou technológiou a mal by byť ochotný s vami prediskutovať najnovší pokrok v oblasti komerčných produktov slučky dostupných v regióne.

#### Miestne predpoklady

Opýtajte sa svojho lekára alebo endokrinológa na ich názor na DIY loop a komerčné loop systémy a zistite, čo o tom vedia. Sú oboznámení s **AAPS** a môžu sa s vami podeliť o nejaké užitočné skúsenosti s prácou s pacientmi s DIY slučkou?

Opýtajte sa svojho lekára, či má vo svojej starostlivosti nejakých pacientov, ktorí už používajú DIY looping. Z dôvodu dôvernosti údajov pacienta vám lekári nemôžu poskytnúť údaje o iných pacientoch bez ich súhlasu. Ak však chcete, **môžete** ich požiadať, aby poskytli **vaše** kontaktné údaje existujúcemu pacientovi, ktorý používa DIY looping, ak si lekár myslí, že by ste si s ním mohli „kľudne sadnúť“ a boli by ste radi, keby vás pacient kontaktoval a prediskutoval DIY looping. Lekári nie sú povinní to robiť, ale niektorí to robia radi, pretože si uvedomujú dôležitosť vzájomnej podpory pri liečbe diabetu 1. typu. Možno vám to pomôže stretnúť sa aj s miestnymi DIY loopermi. To je samozrejme na vás a nie je to úplne nevyhnutné.

#### Národné a medzinárodné predpoklady

Ak máte pocit, že váš lekár nemá skúsenosti s **AAPS**, nasledujúce body diskusie vám môžu pomôcť:

a) Systém **AAPS** navrhli pacienti a ich ošetrovatelia. Bol navrhnutý predovšetkým s ohľadom na bezpečnosť, ale aj na základe rozsiahlych skúseností pacientov. V súčasnosti je na celom svete približne **10 000** používateľov AAPS. Preto je pravdepodobné, že medzi ostatnými pacientmi sú aj pacienti používajúci DIY looping (či už o tom vedia alebo nie).

b) Nedávno vydané usmernenie publikované v medzinárodne poprednom lekárskom časopise [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ potvrdilo, že DIY slučky sú **bezpečné** a **účinné pri zlepšovaní kontroly diabetu** vrátane času v rozsahu. V popredných časopisoch ako [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ sa pravidelne objavujú články, ktoré zdôrazňujú pokrok komunity s DIY slučkou.

c) Začatie s **AAPS** zahŕňa _postupný_ prechod z „otvorenej slučky“ cez zastavovanie pri nízkej glykémii až po hybridné „uzavreté slučky“ splnením viacerých cieľov. Preto existuje štruktúrovaný program, ktorý od používateľa vyžaduje preukázanie určitej úrovne kompetencie v každej fáze a doladenie základných nastavení (bazálna dávka, ISF a ICR) predtým, ako bude môcť používať uzavretú slučku.

d) Technická podpora je vám k dispozícii od DIY komunity prostredníctvom GitHub, Discord a uzavretých skupín na Facebooku.

e) Na kontrole u lekára môžte poskytnúť **informácie o CGM alebo o inzulínovej pumpe** prostredníctvom Nightscout alebo Tidepool, buď vytlačené, alebo na monitore/tablete. Zjednodušenie údajov o CGM aj inzulíne umožní vášmu lekárovi efektívnejšie využiť čas na kontrolu vašich správ a pomôže mu pri diskusiách o vašom pokroku.

f) Ak váš lekár stále namieta, odovzdajte mu výtlačky referenčných článkov, na ktoré sa v texte odkazuje, a poskytnite mu odkaz na sekciu **AAPS** pre lekárov: [Pre lekárov – Všeobecný úvod a sprievodca **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Podpora pre DIY Loop od iných lekárov

Článok publikovaný v časopise [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (spoluvedú ho Kings’ and Guy’s a St Thomas’ NHS Foundation Trust a spolu s Dr. Sufyanom Hussainom, konzultantom diabetológom a hlavným prednášajúcim z King’s v Londýne) uvádza:

a) **Uistenie** pre odborníkov, že DIY systémy umelého pankreasu sú „bezpečnou a účinnou liečbou“ diabetu 1. typu a poskytuje usmernenia týkajúce sa odporúčaní, diskusií, podpory a dokumentácie;

b) **Uznanie**, že automatizované systémy podávania inzulínu („AID“) môžu predĺžiť čas v rozmedzí (TIR) ​​a zároveň znížiť variabilitu koncentrácií glukózy v krvi a počet hypoglykemických a hyperglykemických epizód v rôznych vekových skupinách, pohlaviach a komunitách;

c) **Odporúčanie**, aby zdravotnícki pracovníci **podporovali** pacientov s diabetom 1. typu alebo ich opatrovateľov, ktorí sa rozhodnú liečiť svoju cukrovku pomocou systému AID;

d) Odporúčanie, aby sa zdravotnícki pracovníci pokúsili oboznámiť so všetkými možnosťami liečby, ktoré by mohli byť prospešné pre pacientov, vrátane dostupných systémov AID.  Ak zdravotnícki pracovníci nemajú zdroje na vzdelávanie alebo majú právne či regulačné obavy, mali by zvážiť **spoluprácu alebo spojenie s inými zdravotníckymi pracovníkmi**, ktorí ich majú;

e) Dôraz na to, že všetci používatelia CGM by mali mať kedykoľvek umožnený prístup k **svojim vlastným zdravotným údajom** v reálnom čase

f) Zdôraznenie, že tieto systémy neprešli rovnakými regulačnými hodnoteniami ako komerčne dostupné zdravotnícke technológie a neexistuje žiadna komerčná technická podpora. K dispozícii je však **rozsiahla podpora komunity**; a

g) Odporúčanie, aby sa aktualizovali **regulačné a právne rámce** s cieľom zabezpečiť jasnosť v tom, ako povoliť etické a efektívne zaobchádzanie s takýmito systémami s otvoreným zdrojovým kódom.

Ďalší článok v časopise [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) tiež zdôrazňuje, že „usmernenia k súhlasu“ britskej Všeobecnej lekárskej rady kladú silný dôraz na spoločné rozhodovanie lekára a pacienta. Lekár by mal vysvetliť potenciálne prínosy, riziká, záťaže a vedľajšie účinky DIY APS a môže odporučiť konkrétnu možnosť bez toho, aby na pacienta vyvíjal nátlak.

V konečnom dôsledku je na pacientovi, aby zvážil tieto faktory spolu s akýmikoľvek neklinickými problémami, ktoré sú pre neho relevantné, a rozhodol sa, ktorú možnosť liečby, ak vôbec nejakú, prijme.

Ak lekár v ambulancii zistí, že jeho pacient používa slučku s vlastným systémom, nie je oslobodený od povinnosti monitorovať pacienta len preto, že mu nepredpísal konkrétnu technológiu, ktorú pacient používa; lekári musia pacientov naďalej monitorovať.

Lekári (aspoň v Spojenom kráľovstve) nemajú zakázané predpisovať nelicencované lieky a môžu využiť svoje klinické uváženie. Preto by mali na základe svojho úsudku rozhodnúť, či je APS vhodná pre konkrétneho pacienta, a prediskutovať s pacientom jej výhody a nevýhody.

#### Články uvedené vyššie a ďalšie užitočné odkazy a stanoviská sú uvedené nižšie:

1. Automatizované podávanie inzulínu: medzinárodné vyhlásenie a praktické usmernenie pre zdravotníckych pracovníkov [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. Svojpomocne vyrobený „bionický pankreas“ mení starostlivosť o diabetes – čo bude ďalej? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Predpisovanie neschválených zdravotníckych pomôcok? Prípad umelých pankreasových DIY systémov [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Automatizované podávanie inzulínu svojpomocne: Príručka používateľa pre zdravotníckych pracovníkov (stanovisko a príručka Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Holandsko (EN/NL) – pre lekárov - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. Prvé použitie automatizovaného podávania inzulínu s otvoreným zdrojovým kódom pre systém AndroidAPS v scenári s plne uzavretou slučkou: Randomizovaná pilotná štúdia Pancreas4ALL [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Deti predškolského a školského veku profitujú z prechodu z pumpy so senzormi na hybridný uzavretý systém AndroidAPS: Retrospektívna analýza [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Výsledky projektu OPEN, projektu financovaného EÚ zameraného na výsledky dôkazov pacientov s novou DIY technológiou umelého pankreasu (https://www.open-diabetes.eu/publications)



## Prečo si nemôžem jednoducho stiahnuť AAPS a hneď ho používať?

Aplikácia **AAPS** nie je dostupná v službe Google Play – z právnych dôvodov si ju musíte vytvoriť sami zo zdrojového kódu. **AAPS** nemá licenciu, čo znamená, že nemá schválenie od žiadneho regulačného orgánu v žiadnej krajine. **AAPS** je v podstate experiment, ktorý skúšate  sami na sebe teda použitie je len na vlastné riziko.

Nastavenie systému si vyžaduje trpezlivosť, odhodlanie a postupný rozvoj technických znalostí. Všetky informácie a podporu možno nájsť v týchto dokumentoch, online alebo od iných, ktorí už systém používajú. Viac ako 10 000 ľudí na celom svete úspešne vytvorilo a v súčasnosti používa **AAPS**.

Vývojári systému **AAPS** berú bezpečnosť nesmierne vážne a chcú, aby ostatní mali s používaním systému **AAPS** dobrú skúsenosť. Preto je nevyhnutné, aby každý používateľ (alebo opatrovateľ, ak je používateľom dieťa):

- si sám zostaví systém AAPS a prepracuje sa cez jeho **ciele** tak, aby mal primerane dobré nastavenia a porozumel základom fungovania **AAPS** v čase, keď začne používať „uzavretú slučku“;

- zálohuje svoj systém exportovaním a uložením dôležitých súborov (ako napríklad keystore a súbor nastavení .json) na bezpečné miesto, aby ste ho v prípade potreby mohli rýchlo znova nastaviť;

- aktualizácie na novšie hlavné verzie hneď, ako budú k dispozícii; a

- udržiava a monitoruje systém, aby sa zabezpečilo jeho správne fungovanie.

## Aká je konektivita systému AAPS?

**Obrázok 3 (nižšie)** je ukázaný príklad **AAPS** nastavenia pre človeka, ktorý nepotrebuje, aby systém sledovali ďalší ľudia. Integrovať je možné aj ďalší open-source softvér a platformy, ktoré nie sú zobrazené.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Obrázok 4 (nižšie)** zobrazuje plné využitie systému **AAPS** pre používateľa, ktorý má sledovateľov a potrebuje monitorovať a odosielať nastavenia systému na diaľku (ako napríklad dieťa s cukrovkou 1. typu). Integrovať je možné aj ďalší open-source softvér a platformy, ktoré nie sú zobrazené.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Ako sa AAPS neustále vyvíja a vylepšuje?

Väčšina používateľov **AAPS** používa plne otestovanú **hlavnú** verziu AAPS, ktorá bola pred vydaním komunite testovaná na chyby a problémy. Na pozadí vývojári testujú nové vylepšenia vo „vývojárskych“ (**dev**) verziách **AAPS** s komunitou používateľov, ktorí nemajú problém rýchlo nahlásiť chyby. Ak vylepšenia fungujú dobre, sú potom vydané ako nová „hlavná“ verzia **AAPS**. Každé nové vydanie hlavnej verzie je oznámené v skupine na Facebooku, aby si o nej mohli prečítať používatelia **AAPS** a aktualizovať ju na novú verziu.

Niektorí skúsení používatelia aplikácie **AAPS** experimentujú s novými technológiami a s vývojárskymi verziami **AAPS**, o ktorých si môžu menej odvážni používatelia prečítať zaujímavé informácie bez toho, aby to museli robiť sami! Výsledky týchto experimentov ľudia zdieľajú aj v skupine na Facebooku.

Viac o niektorých z týchto experimentov a diskusii o vznikajúcich technológiách si môžete prečítať tu:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Kto môže mať úžitok z AAPS?

| Typ používateľa                              |
| -------------------------------------------- |
| ✔️ diabetik 1. typu                          |
| ✔️ opatrovateľ alebo rodič diabetika 1. typu |
| ✔️ nevidiaci užívatelia s diabetom 1. typu   |
| ✔️ *lekári a zdravotnícki pracovníci         |

Vyššie uvedená tabuľka predpokladá, že používateľ má prístup k CGM aj inzulínovej pumpe.

*Všetky údaje z **AAPS** môžu byť sprístupnené zdravotníkom prostredníctvom platforiem na zdieľanie údajov vrátane Nightscout, ktorá poskytuje záznamy a monitorovanie údajov CGM v reálnom čase, podávania inzulínu, zadaných sacharidov, predikcii a nastavení. Záznamy Nightscout zahŕňajú denné a týždenné správy, ktoré môžu pomôcť zdravotníkom pri diskusiách s pacientmi s diabetom 1. typu s presnejšími údajmi o kontrole glykémie a aj otom ako sa pacient správa.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Dostupnosť pre používateľov AAPS, ktorí sú čiastočne alebo úplne nevidiaci

#### Každodenné používanie AAPS:
AAPS môžu používať aj nevidiaci ľudia. Na zariadeniach so systémom Android má operačný systém program s názvom TalkBack. To umožňuje orientáciu na obrazovke pomocou hlasového výstupu ako súčasť operačného systému. Pomocou aplikácie TalkBack môžete ovládať svoj smartfón aj AAPS bez toho, aby ste museli vidieť.

#### Zostavenie aplikácie AAPS:
Ako používateľ vytvoríte aplikáciu AAPS v Android Studiu. Mnoho ľudí na to používa systém Microsoft Windows, kde je k dispozícii čítačka obrazovky podobná ako na androide TalkBack. Keďže Android Studio je aplikácia v jazyku Java, musí byť v ovládacom paneli povolená súčasť „Java Access Bridge“. V opačnom prípade čítačka obrazovky počítača nebude v programe Android Studio fungovať.

Spôsob, ako to urobíte, závisí od vášho operačného systému, nižšie sú uvedené dve metódy:

1) V ponuke Štart systému Windows zadajte do vyhľadávača „Ovládací panel“ a otvorte ho. Otvorí sa: „Všetky položky v ovládacom paneli“.

Otvorte „Centrum zjednodušenia prístupu“.

Potom pomocou Enteru otvorte možnosť „Používať počítač bez displeja“.

V nastaveniach hear text čítať nahlas vyberte „zapnúť čítačku“ a „zapnúť zvukový displej“ a kliknite na „Použiť“

alebo:

2) Stlačte kláves Windows a do vyhľadávacieho poľa zadajte „Ovládací panel“, otvorte ho klávesom Enter. Otvorí sa: „Všetky položky v ovládacom paneli“.

Stlačením písmena C sa dostanete do „Centrum pre jednoduché používanie“ a otvorte ho klávesom Enter.

Potom pomocou klávesu Enter otvorte možnosť „Používať počítač bez obrazovky“.

Tam, v dolnej časti, nájdete políčko „Povoliť most prístupu Java“, začiarknite ho.

Hotovo, už len zatvorte okno! Čítačka obrazovky by teraz mala fungovať.



## Aké výhody môžem získať od AAPS?

S investovaním vášho času môže **AAPS** potenciálne viesť k:

- zmiernenie stresu a záťaže spojenej so zvládaním cukrovky 1. typu;

- zníženie množstva každodenných rozhodnutí, ktoré vyplývajú z cukrovky 1. typu;

- dávkovaniu inzulínu individuálne a priamo na základe údajov v reálnom čase, čo môže znížiť počet hyperglykémií;

- lepšej znalosti o liečbe inzulínom a sebavedomiu na lepšie doladenie nastavení;

- možnosť vytvárať automatické nastavenia (**automatizácie**), ktoré sú prispôsobené vášmu životnému štýlu;

- zlepšenej kvalite spánku a celkové zníženie frekvencie nočných zásahov;

- diaľkové monitorovanie a podávanie inzulínu pre opatrovateľov diabetikov 1. typu; a

- zefektívnenie všetkých vašich prenosných diabetických zariadení (CGM prijímač a zariadenia na kontrolu inzulínu) pomocou telefónu so systémom Android ovládaného systémom **AAPS**.


**AAPS** môže v konečnom dôsledku umožniť jednotlivcom lepšie zvládať cukrovku, čo vedie k stabilnej hladine cukru v krvi a zlepšeniu dlhodobých zdravotných výsledkov.

Zaujíma vás, ako začať s nastavením AAPS? Pozrite sa do sekcie [príprava](../Getting-Started/PreparingForAaps.md).
