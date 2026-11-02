# Ako upravovať dokumentáciu

**Tento popis platí iba pre úpravy anglickej dokumentácie. Všetky nové informácie sa musia najprv pridať v angličtine. Ak chcete prekladať do iných jazykov (ďakujeme), použite prosím [crowdin](https://crowdin.com/project/androidapsdocs).**

For hints how to format text (headline, bold...) and set links please see the ["code syntax"](#edit-the-docs-code-syntax) section of this page.

## Všeobecne

S otázkami, spätnou väzbou alebo novými nápadmi sa môžete obrátiť na tím dokumentácie cez [discord](https://discord.gg/4fQUWHZ4Mw).

V istom momente vám niekto navrhne, aby ste vytvorili pull request (PR). Takto sa vaše zmeny v dokumentácii naozaj dostanú na webové stránky AAPS, ktoré sú uložené na GitHube. Vytvoriť PR v skutočnosti nie je ťažké a je to skvelý spôsob, ako prispieť. Túto dokumentáciu práve čítate preto, že ľudia ako vy vytvárali PR. Nebojte sa, že urobíte chybu alebo omylom upravíte nesprávne dokumenty. Vaše zmeny sa skontrolujú predtým, ako sa zlúčia do „oficiálneho“ repozitára dokumentácie AAPS. Pôvodné dokumenty počas tohto postupu omylom pokaziť nemôžete. Všeobecný postup je:

- Upravte a vylepšite kód alebo dokumentáciu úpravou existujúceho obsahu.
- Skontrolujte, či vaše úpravy vyzerajú dobre.
- Napíšte pár poznámok o tom, čo sa zmenilo, aby ostatní úpravám porozumeli.
- Vytvorte pull request, ktorým požiadate správcov, aby vaše zmeny použili.
- Správcovia zmeny skontrolujú a buď (1) vaše zmeny zlúčia, (2) vám k zmenám napíšu komentár, alebo (3) s vašimi zmenami založia nový dokument.

(Poznámka: Ak sa radšej učíte vizuálne, [tu](https://youtu.be/4b6tsL0_kzg) je video na YouTube, ktoré ukazuje postup pri PR.)

V našom príklade urobíme úpravu v AndroidAPSdocs. Dá sa to urobiť na akomkoľvek počítači s Windows, na Macu atď. (na akomkoľvek počítači s prístupom na internet).

1. Prejdite na <https://github.com/openaps/AndroidAPSdocs> a vpravo hore kliknite na Fork. Tak si vytvoríte vlastnú kópiu repozitára.

![Fork repozitára](../images/PR0.png)

2. Prejdite na ľubovoľnú stránku a nájdite stránku, ktorú chcete upraviť. Môžete kliknúť na odkaz „Edit in GitHub“ v pravom hornom rohu. Dá sa to iba na anglických stránkach. 

![úprava dokumentu](../images/PR1.png)

Alebo kliknite na ikonu ceruzky, ktorá sa zobrazí v hornej lište obsahu stránky, ktorú chcete upraviť. Na to musíte byť prihlásení do svojho účtu GitHub (ak ho nemáte, založíte si ho jednoducho).

![RTD io](../images/PR2.png)

3. Ktorákoľvek z možností v kroku 2 vytvorí vo VAŠOM repozitári novú vetvu, do ktorej sa uložia vaše úpravy. Upravte súbor.

Pre stránky dokumentácie používame Markdown. The files have the suffix ".md". The Markdown specification is not fixed and we use at the moment the myst_parser for our markdown files. Take care to use the correct syntax as [described below](#edit-the-docs-code-syntax).

![úprava vo vetve](../images/PR3.png)

4. Doteraz ste pracovali na karte „<>Edit file“. Select the "Preview changes" tab for a fresh look to make sure everything you changed looks like you meant it to (check for typos). Ak vidíte, že treba niečo vylepšiť, vráťte sa na kartu úprav a urobte ďalšie úpravy. 

![režim náhľadu](../images/PR5.png)

5. Keď úpravy dokončíte, posuňte sa na koniec stránky. V poli dole napíšte svoje komentáre do textového poľa s nápisom „Add an optional extended description...“. Predvolený názov obsahuje názov súboru. Skúste pridať vetu, ktorá vysvetľuje **dôvod** zmeny. Keď uvediete dôvod, recenzenti ľahšie pochopia, čo chcete pomocou PR dosiahnuť.

![komentáre k commitu](../images/PR4.png)

6. Kliknite na zelené tlačidlo „Propose file changes“ alebo „Commit changes“. Na stránke, ktorá sa zobrazí, kliknite na „Create Pull Request“ a na ďalšej stránke znova kliknite na „Create Pull Request“.

![vytvorenie pull requestu](../images/PR6.png)

7. Tým je otvorenie pull requestu (PR) dokončené. GitHub pridelí PR číslo, ktoré nájdete za názvom a znakom mriežky (#). Na túto stránku sa vracajte a kontrolujte spätnú väzbu (alebo, ak vám GitHub posiela upozornenia e-mailom, dostanete e-maily o každej aktivite v PR). Úprava bude teraz v zozname PR, ktoré tím skontroluje a prípadne k nim dá spätnú väzbu, kým ich zapracuje do hlavnej dokumentácie AAPS! Ak chcete sledovať, ako PR postupuje, kliknite na ikonu zvončeka v pravom hornom rohu svojho účtu GitHub a uvidíte všetky svoje PR.

![sledovanie PR](../images/PR7.png)

PS: Váš fork a vetva zostanú vo vašom osobnom účte GitHub. After you get a notification that your PR has been merged, you can delete your branch if you are done with it (Step 7's notification area will provide a link to delete the branch once it has been closed or merged). Ak budete pri ďalších úpravách postupovať takto, úpravy vždy začnú z aktuálnej verzie repozitárov AndroidAPSdocs. If you choose to use another method to start a PR (e.g., editing starting from your forked repo's master branch as the starting point), you will need to ensure your repo is up-to-date by performing a "compare" first and merging in any updates that have happened since you last updated your fork. Keďže ľudia často zabúdajú svoje repozitáre aktualizovať, odporúčame používať vyššie opísaný postup PR, kým sa s „compare“ (porovnaním) nezoznámite.

(edit-the-docs-code-syntax)=

## Syntax kódu

Pre stránky dokumentácie používame Markdown. Súbory majú príponu „.md“.

Markdown je veľmi jednoduchý jazyk na formátovanie textu, ktorý oddeľuje obsah textu od jeho formátovania.

Autor napr. iba označí nadpis ako nadpis 1. úrovne a procesor Markdownu pri spracovaní vytvorí potrebný kód HTML, ktorý nadpis zobrazí v HTML.

Myšlienka je taká, že

- autor má najprv myslieť na text, a nie na formátovanie,
- the markdown text is open for exchange between different markdown tools instead of e.g. proprietary tools like Microsoft Word and
- z jedného súboru Markdown môžete vytvoriť viac výstupných formátov.

Markdown nie je 100 % pevný štandard a snažíme sa držať čo najbližšie k štandardu, aby sme

- zostali pružní a mohli meniť nástroje Markdown podľa potreby alebo vtedy, keď si to vynúti ďalší vývoj nástrojov Markdown a služieb SaaS pre Markdown, a
- mohli používať prekladateľské služby na preklad z angličtiny do cieľového jazyka, napríklad do francúzštiny alebo nemčiny. Tie si poradia s Markdownom, ale nie so zložitými formátovacími kódmi, pretože nevedia oddeliť obsah od rozloženia, a to môže byť fatálne.

### Nadpisy

- Nadpis 1: `# headline`
- Nadpis 2: `## headline`
- Nadpis 3: `### headline`
- Nadpis 4: `#### headline`

Ďalším úrovniam nadpisov sa snažíme vyhnúť.

### Formát textu

- **tučné**: `**text**`
- *kurzíva*: `*text*`
- ***tučná kurzíva***: `***text***`

### Číslovaný zoznam

    1. prvý
    1. druhý
    1. tretí
    

1. prvý
2. druhý
3. tretí

### Nečíslovaný zoznam

    - jeden prvok
    - ďalší prvok
    - a ešte jeden prvok
    

- jeden prvok
- ďalší prvok
- a ešte jeden prvok

### Viacúrovňový zoznam

Zoznam vložíte do zoznamu tak, že ďalšiu úroveň odsadíte o 4 medzery viac doprava ako predchádzajúcu.

    1. prvý
    1. druhý
    1. tretí
      1. jeden prvok
      1. ďalší prvok
      1. a ešte jeden prvok
    1. štvrtý
    1. piaty
    1. šiesty
    

1. prvý
2. druhý
3. tretí 
    1. jeden prvok
    2. ďalší prvok
    3. a ešte jeden prvok
4. štvrtý
5. piaty
6. šiesty

### Obrázky

Na vloženie obrázkov použite túto syntax Markdown.

- obrázky: `![alt text](../images/file.png)`

Obrázok má byť vo formáte PNG alebo JPEG.

Image names should conform to one of the following naming rules. V príklade používam príponu png. Ak použijete JPEG, použite namiesto toho príponu jpeg.

- `filename-image-xx.png`, kde xx je jedinečné dvojciferné číslo obrázka v tomto súbore.
- `filename-image-xx.png` where xx is a meaningful name chosen by the author of the md file.

Obrázky sú uložené v priečinku images pre anglický jazyk a Crowdin ich automaticky prenesie do ostatných jazykov. Nemusíte pre to nič robiť!

Obrázky momentálne neprekladáme: obrázky majú obsahovať **čo najmenej textu**, aby boli prístupné aj čitateľom, ktorí nehovoria po anglicky.

(make-a-PR-image-size)= Obrázky majú mať primeranú veľkosť, aby boli čitateľné na počítači, tablete aj mobile.

- Snímky obrazovky z webových stránok majú mať šírku najviac **1050 pixelov**.
- Diagramy priebehu procesov majú mať šírku najviac **1050 pixelov**.
- Snímky obrazovky z aplikácie majú mať šírku najviac **500 pixelov**. Ak to nie je nutné, nedávajte ich vedľa seba.
- Snímky obrazovky z hodiniek (**Wear OS**) majú mať šírku najviac **360 pixelov**. Menšiu snímku obrazovky nikdy nezväčšujte.

### Odkazy

#### Externé odkazy

Externé odkazy sú odkazy na externé webové stránky.

- externý odkaz: `[alt text](www.url.tld)`

#### Interné odkazy na začiatok súboru md

Interné odkazy na stránky sú odkazy na začiatok súboru md, ktorý je na našom vlastnom serveri.

- interný odkaz na stránku .md: `[alt text](../folder/file.md)`

#### Interné odkazy na pomenované odkazy v texte

Interné odkazy na pomenované odkazy v texte sú odkazy na ľubovoľné miesto v súbore md, ktorý je na našom vlastnom serveri a kde bol nastavený odkaz (referencia), na ktorý sa dá odkázať.

Na miesto v cieľovom súbore md, kam chcete skočiť, pridajte pomenovaný odkaz (referenciu).

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

Pomenovaný odkaz musí byť jedinečný vo všetkých súboroch md v AndroidAPSDocs, nielen v súbore md, v ktorom sa nachádza!

Preto je dobré začať názvom súboru a potom pridať zvolený názov odkazu.

Používajte iba malé písmená a slová spájajte pomlčkou.

Potom na tento odkaz odkážte v texte, ktorý píšete, pomocou tohto typu odkazu.

- Interné odkazy na pomenované odkazy v texte: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Poznámky, varovania, zbaliteľné poznámky

Do dokumentácie môžete pridať rámčeky s poznámkami a varovaniami.

Furthermore you can add collapsing notes for detailed information, so that users who are not interested in the details are not put off reading the text. Používajte ich opatrne, pretože dokumentácia má byť čo najľahšie čitateľná.

#### Poznámky

    ```{admonition} Nadpis poznámky
    :class: note
    Toto je poznámka.
    ```
    

```{admonition} Nadpis poznámky :class: note Toto je poznámka.

    <br />#### Varovania
    
    ````
    ```{admonition} Varovanie
    :class: warning
    Toto je varovanie.
    

    ```{admonition} Warning headline
    :class: warning
    This is a warning.
    ```
    
    #### Zbaliteľné poznámky
    
    

    {admonition} podrobnejšie čítanie pre záujemcov
    :class: dropdown
    
    Táto poznámka je zbalená,
    čo znamená, že sem môžete pridať dlhší obsah
    bez toho, aby zaberal veľa miesta na stránke.
    

````

```{admonition} podrobnejšie čítanie pre záujemcov :class: dropdown Táto poznámka je zbalená, čo znamená, že sem môžete pridať dlhší obsah bez toho, aby zaberal veľa miesta na stránke.

```

## Tabuľky

Avoid using tables with long texts as the content is difficult to set in Markdown, they will usually not fit in a mobile phone screen width, and probably won't display the same after translation.

## Príručka štýlu

### Obsah

1. Tipy na písanie v angličtine

2. Poznámky k písaniu špecifické pre AAPS

3. Užitočné odkazy

### ![Obrázok](../images/styleguide01.png) 1\. Tipy na písanie v angličtine

#### Používajte jazyk primeraný čitateľovi

Kde sa dá, používajte jednoduchú angličtinu. Pomáha to čitateľom, pre ktorých angličtina nie je materinský jazyk, a tiež uľahčuje preklad dokumentov AAPS do iných jazykov. Píšte tak, akoby ste sa s používateľom rozprávali. Predstavte si, že sedíte pri stole oproti človeku, pre ktorého píšete. Pamätajte – väčšina používateľov AAPS nemá skúsenosti s programovaním. Aj samotný diabetes má veľa odborných výrazov a skratiek. Myslite na to, že niektorí ľudia môžu mať diabetes len krátko, nemusia mať s diabetom toľko skúseností ako vy, alebo mohli o diabete dostať iné školenie. Ak použijete skrátený výraz alebo skratku, pri prvom použití ju napíšte celú a skratku uveďte hneď za ňou v zátvorke, napríklad „super micro bolus (SMB)“. Odkážte aj na slovník. Odborné výrazy, ktoré čitateľ nemusí poznať, môžete tiež doplniť do zátvorky.

Instead of: *“What causes high postprandial BG peaks in closed loop?”*

Use: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?”*

##### Používajte jednoduché slová, ktorým rozumie každý

Abecedný zoznam (A–Z) náhradných slov, s ktorými bude váš text zrozumiteľnejší, nájdete tu:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Ochrana súkromia a licencie:

Najmä keď nahrávate video alebo robíte snímky obrazovky, dajte pozor, aby ste nezverejnili svoje súkromné údaje (kľúč API, heslá). Uistite sa, že obsah na YouTube nie je verejne v zozname (je „unlisted“) a dá sa pozrieť iba cez odkaz z dokumentácie. Neupozorňujte na materiály, ktoré porušujú autorské práva (BYODA atď.).

#### Píšte krátke vety, choďte priamo k veci

- Zrozumiteľný text má mať priemernú dĺžku vety 15 až 20 slov.

- To neznamená, že každá veta musí byť rovnako dlhá. Píšte úderne. Text oživíte, keď budete striedať krátke vety (ako tá predchádzajúca) s dlhšími (ako táto).

- V jednej vete sa držte jednej hlavnej myšlienky, prípadne ešte jedného súvisiaceho bodu.

- Občas aj tak napíšete dlhú vetu, najmä keď vysvetľujete niečo zložité. Väčšinu dlhých viet však môžete nejako rozdeliť.

- Vynechajte slabé slová: „you can“, „there is/are/were“, „in order to“.

- Kľúčové slová dávajte na začiatok nadpisov, viet a odsekov.

- Ukazujte! Kde sa dá, pridajte krátky diagram, snímku obrazovky alebo video.

#### Nebojte sa dávať pokyny

Príkazy sú najrýchlejší spôsob, ako dávať pokyny, ale autori sa niekedy príkazov boja a namiesto „do this“ píšu „you should do this“. Možno sa ľudia obávajú, že príkazy znejú príliš tvrdo. Často to vyriešite tak, že na začiatok pridáte slovo „please“. Ak sa však niečo urobiť musí, je lepšie „please“ nepísať, pretože to čitateľovi dáva možnosť odmietnuť.

Instead of: *“You should just think of it as a complete statement.”*

Použite: *“Think of it as a complete statement.”*

#### Väčšinou používajte slovesá v činnom rode, nie v trpnom rode

Príklad slovesa v **činnom rode**:

- *“The pump (subject) delivers (verb) the insulin (object).”*

„delivers“ je tu sloveso v činnom rode. Veta hovorí, kto podáva, skôr než povie, čo sa podáva.

Príklad slovesa v **trpnom rode**:

- *“The insulin (subject) is delivered (verb) by the pump (object).”*

*“delivered”* is a passive verb here. Podmet a predmet sú v porovnaní s vetou v činnom rode vymenené. Vetu sme museli predĺžiť pridaním „is“ a „by the“. Zvážte tiež, či vetu nezačať slovesom v činnom rode.

Namiesto: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Použite: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Trpný rod môže spôsobovať problémy:

- Môže byť mätúci.

- Text je s ním často zbytočne rozvláčny.

- Text je s ním menej živý.

##### Kedy je trpný rod vhodný

Niekedy môže byť trpný rod vhodný.

- Aby niečo neznelo nepriateľsky – 'this bill has not been paid' (trpný rod) znie mäkšie ako 'you have not paid this bill' (činný rod).

- Aby ste sa vyhli obviňovaniu – 'a mistake was made' (trpný rod) namiesto 'You made a mistake' (činný rod).

- Keď neviete, kto alebo čo dej vykonáva – 'the England team has been picked'.

- Keď to jednoducho znie lepšie.

#### Vyhýbajte sa nominalizáciám

Nominalizácia je pomenovanie niečoho, čo nie je fyzický predmet, napríklad procesu, techniky alebo emócie. Nominalizácie vznikajú zo slovies.

Napríklad:

| Sloveso   | Nominalizácia |
| --------- | ------------- |
| complete  | completion    |
| introduce | introduction  |
| provide   | provision     |
| fail      | failure       |

Často sa používajú **namiesto** slovies, z ktorých vznikli, ale môžu pôsobiť, akoby sa v skutočnosti nič nedialo. Keď ich je priveľa, text je veľmi nudný a ťažko sa číta.

Namiesto: *“The implementation of the method has been done by a team.”*

Použite: *“A team has implemented the method.”*

#### Kde je to vhodné, používajte zoznamy

Zoznamy sú výborné na rozdelenie informácií. Existujú dva hlavné typy zoznamov:

- Súvislá veta, v ktorej je niekoľko bodov zoznamu vyčlenených na začiatku, v strede alebo na konci.

- Samostatné odrážky s úvodnou vetou.

Vo vyššie uvedenom zozname s odrážkami je každý bod celou vetou, preto každý začína veľkým písmenom a končí bodkou. Používajte odrážky, nie čísla alebo písmená, pretože upriamujú pozornosť na každý bod a čitateľ nemusí spracovať ďalšie informácie.

#### Vyvracanie mýtov

- Vetu môžete začať slovami **and, but, because, so or however**.

- Infinitív môžete rozdeliť (split infinitive). Môžete teda povedať **“to boldly go”**.

- Vetu môžete ukončiť predložkou. In fact, it is something **we should stand up for**.

- And **you** can use the same **word** twice in a sentence if **you** can't find a better **word**.

#### Optimalizácia štýlu písania podľa účelu

Aby bola dokumentácia jasná a krátka, rôzne časti dokumentácie píšeme rôznymi štýlmi.

Štýl „vysvetlenie“ (explanation) sa používa pre úvod, pozadie a časti, ktoré rozvíjajú znalosti.

Štýl „návod“ (how-to guide) s minimom vysvetľovania sa používa pre zostavenie a konfiguráciu AAPS a pre niektoré časti riešenia problémov.

Výukový materiál (tutorial) pomáha žiakovi získať základné zručnosti. Používateľ sa bude **učiť tým, že to robí**.

![Obrázok](../images/styleguide02.png)

##### ![Obrázok](../images/styleguide03.png) Výukové materiály (tutorials) (napr. učíme dieťa šľahať bielky)

- rozprávač sa priamo obracia na čitateľa: In this tutorial **you** will (we) sa dá v zriedkavých prípadoch použiť na vyjadrenie myšlienky „sme v tom spolu“

- Budúci čas -> na ukázanie konečného cieľa

- Rozkazovací spôsob -> na vykonanie úloh -> Konkrétne kroky - vyhnite sa abstraktným pojmom

- Minulý čas -> na ukázanie splnených úloh -> Rýchle a hneď viditeľné výsledky

- Minimum vysvetlení -> iba to, čo je nutné na splnenie úlohy - **čo a prečo**

- Ignorujte možnosti/alternatívy/…. Žiadna nejednoznačnosť

- Prechody medzi krokmi: krok ukončite vetou, ktorá logicky vedie k ďalšiemu kroku. Example: *You have now installed the Let’s Encrypt client, but before obtaining certificates, you need to make sure that all required ports are open. To do this, you will update your firewall settings in the next step.*

- **Výukový materiál**: názov (nadpis 1. úrovne)

- Úvod (bez nadpisu)

- Požiadavky (nadpis 2. úrovne)

- Kroky:

- Krok 1 — Prvá úloha (nadpis 2. úrovne)

- Krok 2 — Ďalšia úloha (nadpis 2. úrovne)

- Krok n — Posledná úloha (nadpis 2. úrovne)

- Záver (nadpis 2. úrovne)
    
    - **Jazyk výukových materiálov**
        
        *In this tutorial, you will…*
        
        Popíšte, čo žiak dosiahne (pozor – nie: „you will learn…“).
        
        *First, do x. Now, do y. Now that you have done y, do z.*
        
        Žiadny priestor pre nejednoznačnosť alebo pochybnosti.
        
        *We must always do x before we do y because… (see Explanation for more details).*
        
        Akcie vysvetľujte čo najmenej a čo najjednoduchším jazykom. Odkážte na podrobnejšie vysvetlenie.
        
        *The output should look something like this…*
        
        Povedzte žiakovi jasne, čo má očakávať.
        
        *Notice that… Remember that…*
        
        Dajte žiakovi veľa vodítok, ktoré mu pomôžu overiť si, že je na správnej ceste, a zorientovať sa.
        
        *You have built a secure, three-layer hylomorphic stasis engine…*
        
        Popíšte (a mierne obdivujte) to, čo žiak dosiahol (pozor – nie: „you have learned…“)

##### ![Obrázok](../images/styleguide05.png) Návody (how-to guides) (napr. recept)

Cieľom návodu je pomôcť používateľovi, ktorý už má potrebné znalosti, správne vykonať konkrétnu úlohu.

- AKO

- narrator directly talks to the reader: In this guide **you** will

- Budúci čas -> na ukázanie konečného cieľa

- Podmienený rozkazovací spôsob -> ak chcete X, urobte Y -> Konkrétne kroky - vyhnite sa abstraktným pojmom

- Minimum vysvetlení -> iba to, čo je nutné na splnenie úlohy -> **čo a prečo**

- Ignorujte možnosti/alternatívy/…. Žiadna nejednoznačnosť, ale môžete odkázať na referenčnú položku alebo na vysvetlenie

- **Návod**: názov (nadpis 1. úrovne)

- Úvodný odsek

- Voliteľné požiadavky (odsek alebo nadpis 2. úrovne, ak je ich viac ako 1)

- Kroky:

- Krok 1 — Prvá úloha (nadpis 2. úrovne)

- Krok 2 — Ďalšia úloha (nadpis 2. úrovne)

- Krok n — Posledná úloha (nadpis 2. úrovne)

- Záverečný odsek
    
    - **Jazyk návodov**
        
        *This guide shows you how to…*
        
        Jasne popíšte problém alebo úlohu, ktorú návod pomôže používateľovi vyriešiť.
        
        *If you want x, do y. To achieve w, do z.*
        
        Používajte podmienený rozkazovací spôsob.
        
        *Refer to the x reference guide for a full list of options.*
        
        Nezahlcujte praktický návod všetkým, čo by používateľ mohol v súvislosti s x urobiť.

##### ![Obrázok](../images/styleguide07.png) Vysvetlenie (napr. vedecké vysvetlenie, prečo bielky pri šľahaní stuhnú)

Vysvetlenie objasňuje, prehlbuje a rozširuje to, ako čitateľ rozumie danej téme.

- PREČO

- Začnite s **About** (O téme)

- Uveďte súvislosti, odkážte na VŠETKY súvisiace zdroje

- Rozoberte možnosti/alternatívy

- Nedávajte pokyny ani referenčné údaje (odkážte na ne)

- Uveďte, čo nie je známe, čo sa mení atď.…

- **About** (O téme): názov (nadpis 1. úrovne)

- Úvod (bez nadpisu)

- Voliteľné požiadavky (nadpis 2. úrovne)

- Podtéma 1 (nadpis 2. úrovne)

- Záver (nadpis 2. úrovne)
    
    - **Jazyk vysvetlení**
    
    *The reason for x is because historically, y…*
    
    Vysvetľujte.
    
    *W is better than z, because…*
    
    Offer judgements and even opinions where appropriate.
    
    *An x in system y is analogous to a w in system z. However…*
    
    Uveďte súvislosti, ktoré čitateľovi pomôžu.
    
    *Some users prefer w (because z). This can be a good approach, but…*
    
    Porovnajte alternatívy.
    
    *An x interacts with a y as follows:…*
    
    Odhaľte vnútorné tajomstvá mechanizmu, aby čitateľ pochopil, prečo niečo robí to, čo robí.

### 2\. Poznámky k písaniu a aktualizácii špecifické pre AAPS

#### Autor a editor

Písanie a aktualizáciu dokumentácie AAPS si predstavte ako proces, ktorý má dve fázy. Môže ich vykonať tá istá osoba v rôznom čase, alebo viac ľudí.

**Autor (napr. vy!)** napíše alebo upraví časť dokumentácie stručným konverzačným tónom a potom ju odovzdá editorovi.

**Editor (napr. iný používateľ AAPS alebo človek, ktorý dostane pull request)** skontroluje, či text dodržiava príručku štýlu, upraví časť tak, aby bola jasná a prístupná, a odstráni čo najviac slov (najmä v častiach typu výukový materiál/návod). Môže pomôcť, keď si text prečítate nahlas.

#### Všeobecné body k AAPS

- Pri hodnotách glykémie uvádzajte vždy obe jednotky mg/dl aj mmol/l (ak je to možné, myslite na to aj pri snímkach obrazovky).

- Kvôli jednotnosti používajte „AAPS“, nie „Android APS“.

- Jasne uveďte verziu Android Studia/AAPS, pre ktorú píšete alebo z ktorej sú snímky obrazovky.

### 3\. Užitočné odkazy

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>