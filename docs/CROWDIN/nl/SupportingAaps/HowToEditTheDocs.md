# Hoe je de docs bewerkt

**Deze beschrijving is alleen voor het bewerken van de Engelse documentatie. Alle nieuwe informatie moet eerst in het Engels worden toegevoegd. Als je de wiki naar andere talen wilt vertalen (waarvoor dank!), dan gebruik je [crowdin](https://crowdin.com/project/androidapsdocs).**

Tips over het opmaken van tekst (kop, vet...) en het maken van links vind je in het deel ["Codesyntax"](#code-syntax) op deze pagina.

## Algemeen

Voor vragen, feedback of nieuwe ideeën kun je contact opnemen met het documentatieteam via [discord](https://discord.gg/4fQUWHZ4Mw).

Op een gegeven moment wordt je gevraagd een pull request (PR) te maken. Zo komen je wijzigingen in de documentatie echt op de AAPS-webpagina's, die op GitHub staan. Een PR maken is eigenlijk niet zo moeilijk, en het is een mooie manier om bij te dragen. Je leest deze documentatie nu omdat mensen zoals jij PR's hebben gemaakt. Maak je geen zorgen dat je een fout maakt of per ongeluk de verkeerde documenten bewerkt. Je wijzigingen worden bekeken voordat ze worden samengevoegd in de "officiële" repository van de AAPS-documentatie. Je kunt de originelen dus niet per ongeluk kapotmaken. De algemene werkwijze is:

- Maak wijzigingen en verbeteringen in code of documentatie door de bestaande inhoud te bewerken.
- Controleer nog een keer of je wijzigingen er goed uitzien.
- Schrijf kort op wat er veranderd is, zodat anderen de wijzigingen begrijpen.
- Maak een pull request. Daarmee vraag je de beheerders om je wijzigingen te gebruiken.
- Zij bekijken het en (1) voegen je wijzigingen samen (merge), (2) reageren op je wijzigingen, of (3) starten een nieuw document met je wijzigingen.

(Opmerking: leer je liever met beelden, dan is er [hier](https://youtu.be/4b6tsL0_kzg) een YouTube-video die de PR-werkwijze laat zien.)

In ons voorbeeld maken we een wijziging in AndroidAPSdocs. Dit kan op elke Windows-pc, Mac, enz. (elke computer met internettoegang).

1. Ga naar <https://github.com/openaps/AndroidAPSdocs> en klik rechtsboven op Fork om je eigen kopie van de repository te maken.

![Repo forken](../images/PR0.png)

2. Ga naar een willekeurige pagina en navigeer naar de pagina die je wilt bewerken. Je kunt rechtsboven op de link "Edit in GitHub" klikken. Dat kan alleen bij Engelse pagina's. 

![document bewerken](../images/PR1.png)

Of klik op het potloodicoon dat in de bovenste balk van de te bewerken pagina verschijnt. Je moet hiervoor al ingelogd zijn op je GitHub-account (heb je er nog geen, dan is die makkelijk aan te maken).

![RTD io](../images/PR2.png)

3. Met een van de opties in stap 2 wordt een nieuwe branch gemaakt in JOUW repository. Daar worden je wijzigingen opgeslagen. Maak je wijzigingen in het bestand.

We gebruiken markdown voor de pagina's van de docs. De bestanden hebben de extensie ".md". De Markdown-specificatie ligt niet vast. We gebruiken op dit moment de myst_parser voor onze markdown-bestanden. Let op dat je de juiste syntax gebruikt, zoals [hieronder beschreven](#code-syntax).

![Branch bewerken](../images/PR3.png)

4. Je hebt gewerkt in het tabblad "<>Edit file". Kies het tabblad "Preview changes" om met een frisse blik te controleren of alles wat je veranderd hebt eruitziet zoals je bedoelde (typfouten enz.). Zie je nog iets dat beter kan, ga dan terug naar het tabblad om te bewerken en maak meer verbeteringen. 

![voorbeeldweergave](../images/PR5.png)

5. Als je klaar bent met bewerken, scroll je naar onderaan de pagina. Schrijf in het vak onderaan je opmerkingen in het tekstveld met de tekst "Add an optional extended description...". De standaardtitel bevat de bestandsnaam. Schrijf als het kan een zin die de **reden** voor de wijziging uitlegt. De reden helpt reviewers te begrijpen wat je met de PR wilt bereiken.

![commit-opmerkingen](../images/PR4.png)

6. Klik op de groene knop "Propose file changes" of "Commit changes". Klik op de pagina die verschijnt op "Create Pull Request" en klik op de volgende pagina nog een keer op "Create Pull Request".

![pull request maken](../images/PR6.png)

7. Daarmee is de pull request (PR) geopend. GitHub geeft de PR een nummer. Dat staat na de titel en een hekje (#). Kom terug naar deze pagina om te kijken of er feedback is (of, als je GitHub-meldingen per e-mail krijgt, krijg je e-mails over alle activiteit op de PR). De wijziging staat nu in een lijst met PR's. Het team bekijkt die en geeft misschien feedback, voordat de wijziging in de hoofddocumentatie van AAPS komt! Wil je zien hoe het met de PR gaat, klik dan op het belletje rechtsboven in je GitHub-account. Daar zie je al je PR's.

![PR volgen](../images/PR7.png)

PS: Je fork en branch blijven gewoon in je eigen GitHub-account staan. Als je een melding krijgt dat je PR is samengevoegd (merged), kun je je branch verwijderen als je er klaar mee bent (de meldingen uit stap 8 geven een link om de branch te verwijderen zodra die gesloten of samengevoegd is). Volg je bij volgende wijzigingen deze werkwijze, dan begin je altijd met een bijgewerkte versie van de AndroidAPSdocs repositories. Kies je een andere manier om een PR te starten (bijvoorbeeld bewerken vanaf de master branch van je eigen fork), dan moet je zorgen dat je repo bijgewerkt is. Doe dan eerst een "compare" en voeg alle updates samen die er zijn sinds je je fork voor het laatst hebt bijgewerkt. Mensen vergeten vaak hun repo bij te werken. Daarom raden we aan om de PR-werkwijze hierboven te gebruiken, tot je gewend bent aan het doen van een "compare".

(edit-the-docs-code-syntax)=

## Codesyntax

We gebruiken markdown voor de pagina's van de documentatie. De bestanden hebben de extensie ".md".

Markdown is een heel eenvoudige taal voor tekstopmaak die de inhoud van de tekst scheidt van de opmaak.

De schrijver geeft bijvoorbeeld alleen aan dat een kop een kop van niveau 1 is. De markdown-verwerker maakt tijdens de verwerking de nodige HTML-code om de kop in HTML te tonen.

Het idee hierachter is dat

- de schrijver eerst aan de tekst denkt en niet aan de opmaak,
- de markdown-tekst uitwisselbaar is tussen verschillende markdown-tools, in plaats van bijvoorbeeld gesloten tools zoals Microsoft Windows, en
- je meerdere uitvoerformaten kunt maken uit één markdown-bestand.

Markdown is geen 100% vaste standaard, en we proberen zo dicht mogelijk bij de standaard te blijven, om

- we flexibel blijven om van markdown-tools te wisselen als dat nodig is of moet door nieuwe ontwikkelingen in markdown-tools en markdown SaaS-diensten, en
- vertaaldiensten te kunnen gebruiken om het Engels te vertalen naar een doeltaal zoals Frans of Duits. Die kunnen met markdown werken, maar niet met ingewikkelde opmaakcodes, omdat ze inhoud en opmaak niet van elkaar kunnen scheiden. Dat kan fataal zijn.

### Koppen

- Kop 1: `# headline`
- Kop 2: `## headline`
- Kop 3: `### headline`
- Kop 4: `#### headline`

We proberen meer niveaus van koppen te vermijden.

### Tekstopmaak

- **vet**: `**text**`
- *cursief*: `*text*`
- ***vet cursief***: `***text***`

### Genummerde lijst

    1. eerste
    1. tweede
    1. derde
    

1. eerste
2. tweede
3. derde

### Ongenummerde lijst

    - één element
    - nog een element
    - en nog een element
    

- één element
- nog een element
- en nog een element

### Lijst met meerdere niveaus

Je kunt lijsten in lijsten zetten door het volgende niveau 4 spaties verder naar rechts te laten inspringen dan het niveau ervoor.

    1. eerste
    1. tweede
    1. derde
      1. één element
      1. nog een element
      1. en nog een element
    1. vier
    1. vijf
    1. zes
    

1. eerste
2. tweede
3. derde 
    1. één element
    2. nog een element
    3. en nog een element
4. vier
5. vijf
6. zes

### Afbeeldingen

Om afbeeldingen toe te voegen gebruik je deze markdown-syntax.

- afbeeldingen: `![alt text](../images/file.png)`

Het type afbeelding moet PNG of JPEG zijn.

Namen van afbeeldingen moeten volgens een van de volgende naamregels zijn. In het voorbeeld gebruik ik png als extensie. Gebruik je JPEG, gebruik dan jpeg als extensie.

- `filename-image-xx.png` waarbij xx een uniek getal van twee cijfers is voor de afbeeldingen in dit bestand.
- `filename-image-xx.png` waarbij xx een betekenisvolle naam is die de auteur van het md-bestand kiest.

Afbeeldingen staan in de map images voor de Engelse taal. Crowdin zet ze automatisch door naar de andere talen. Daar hoef je niets voor te doen!

We vertalen op dit moment geen afbeeldingen: afbeeldingen moeten **zo weinig mogelijk tekst** bevatten, zodat ze ook toegankelijk zijn voor lezers die geen Engels lezen.

(make-a-PR-image-size)= Gebruik een redelijke grootte voor de afbeeldingen. Ze moeten leesbaar zijn op pc, tablet en mobiel.

- Schermafbeeldingen van webpagina's mogen maximaal **1050 pixels breed** zijn.
- Diagrammen van processen mogen maximaal **1050 pixels breed** zijn.
- Schermafbeeldingen van de app mogen maximaal **500 pixels breed** zijn. Zet ze niet naast elkaar als dat niet nodig is.
- Schermafbeeldingen van het horloge (**Wear OS**) mogen maximaal **360 pixels breed** zijn. Vergroot nooit een kleinere schermafbeelding.

### Links

#### Externe links

Externe links zijn links naar externe websites.

- externe link: `[alt text](www.url.tld)`

#### Interne links naar het begin van een md-bestand

Interne links naar pagina's zijn links naar het begin van een md-bestand dat op onze eigen server staat.

- interne link naar .md-pagina: `[alt text](../folder/file.md)`

#### Interne links naar referenties met een naam in de tekst

Interne links naar referenties met een naam zijn links naar een willekeurige plek in een md-bestand dat op onze eigen server staat, waar een referentie is gezet om naar te linken.

Zet een referentie met een naam op de plek in het doel-md-bestand waar je naartoe wilt springen.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

De naam van de referentie moet uniek zijn in alle md-bestanden van AndroidAPSDocs, en niet alleen in het md-bestand waarin hij staat!

Daarom is het goed om te beginnen met de bestandsnaam en daarna de referentienaam die je kiest.

Gebruik alleen kleine letters en zet koppeltekens tussen woorden.

Link daarna in de tekst die je schrijft naar deze referentie met dit soort link.

- Interne links naar referenties met een naam: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Notities, waarschuwingen, inklapbare notities

Je kunt notities en waarschuwingsvakken toevoegen aan de documentatie.

Je kunt ook inklapbare notities toevoegen voor gedetailleerde informatie, zodat gebruikers die niet in de details geïnteresseerd zijn niet afhaken bij het lezen van de tekst. Gebruik ze voorzichtig, want de documentatie moet zo makkelijk mogelijk te lezen zijn.

#### Notities

    ```{admonition} Kop van de notitie
    :class: note
    Dit is een notitie.
    ```
    

```{admonition} Kop van de notitie :class: note Dit is een notitie.

    <br />#### Waarschuwingen
    
    ````
    ```{admonition} Waarschuwing
    :class: warning
    Dit is een waarschuwing.
    

    ```{admonition} Kop van de waarschuwing
    :class: warning
    Dit is een waarschuwing.
    ```
    
    #### Inklapbare notities
    
    

    {admonition} meer gedetailleerde informatie voor geïnteresseerde lezers
    :class: dropdown
    
    Deze notitie is ingeklapt,
    dat betekent dat je hier langere tekst kunt toevoegen,
    zonder dat die veel ruimte op de pagina inneemt.
    

````

```{admonition} meer gedetailleerde informatie voor geïnteresseerde lezers :class: dropdown Deze notitie is ingeklapt, dat betekent dat je hier langere tekst kunt toevoegen, zonder dat die veel ruimte op de pagina inneemt.

```

## Tabellen

Vermijd tabellen met lange teksten. De inhoud is lastig op te maken in Markdown, ze passen meestal niet op de breedte van een telefoonscherm, en na vertaling zien ze er waarschijnlijk anders uit.

## Stijlgids

### Inhoud

1. Tips voor het schrijven in het Engels

2. Schrijfnotities specifiek voor AAPS

3. Handige bronnen

### ![Afbeelding](../images/styleguide01.png) 1\. Tips voor het schrijven in het Engels

#### Gebruik taal die past bij de lezer

Gebruik waar mogelijk eenvoudig Engels. Dat helpt lezers die geen moedertaalspreker zijn, en het maakt het vertalen van AAPS-documenten naar andere talen makkelijker. Schrijf alsof je een gesprek voert met de gebruiker. Stel je voor dat je aan een bureau zit tegenover de persoon voor wie je schrijft. Onthoud: de meeste AAPS-gebruikers hebben geen achtergrond in programmeren. Ook diabetes zelf heeft veel vakjargon en afkortingen. Denk eraan dat sommige mensen pas de diagnose hebben gekregen, minder ervaring hebben met diabetes dan jij, of een andere diabetesopleiding hebben gehad. Gebruik je een verkorte vorm of afkorting, schrijf die dan de eerste keer voluit, met de afkorting direct erna tussen haakjes, zoals “super micro bolus (SMB)”. Link ook naar de woordenlijst. Technische termen die de lezer misschien niet kent, kun je ook tussen haakjes toevoegen.

In plaats van: *“What causes high postprandial BG peaks in closed loop?"*

Gebruik: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?"*

##### Gebruik eenvoudige woorden die iedereen begrijpt

Een A-Z-lijst met andere woorden die je tekst makkelijker te begrijpen maken vind je hier:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Privacy en licenties:

Vooral als je video of schermafbeeldingen opneemt: zorg dat je je privégegevens (API-sleutel, wachtwoorden) niet laat zien. Zorg dat YouTube-video's niet openbaar vermeld zijn, en dat je een link uit de documentatie nodig hebt om ze te bekijken. Vestig geen aandacht op materiaal dat auteursrecht schendt (BYODA enz.).

#### Houd zinnen kort, kom ter zake

- Duidelijke tekst heeft zinnen van gemiddeld 15 tot 20 woorden.

- Dat betekent niet dat elke zin even lang moet zijn. Wees krachtig. Wissel af door korte zinnen (zoals de vorige) te mengen met langere zinnen (zoals deze).

- Houd het bij één hoofdidee per zin, plus misschien één ander punt dat erbij hoort.

- Soms schrijf je toch een lange zin, vooral als je iets ingewikkelds probeert uit te leggen. Maar de meeste lange zinnen kun je op een of andere manier opsplitsen.

- Haal zwakke woorden weg: “you can”, “there is/are/were”, “in order to”.

- Zet sleutelwoorden aan het begin van titels, zinnen en alinea's.

- Maak het visueel! Geef waar mogelijk een kort diagram, schermafbeelding of video.

#### Wees niet bang om instructies te geven

Opdrachten zijn de snelste manier om instructies te geven. Maar schrijvers zijn soms bang om opdrachten te geven en schrijven “you should do this” in plaats van gewoon “do this”. Misschien zijn mensen bang dat opdrachten te streng klinken. Dat los je vaak op door het woord 'please' ervoor te zetten. Maar als iets echt moet gebeuren, zeg je beter geen ‘please’, omdat de lezer dan de keuze krijgt om te weigeren.

In plaats van: *“You should just think of it as a complete statement."*

Gebruik: *“Think of it as a complete statement.”*

#### Gebruik vooral de bedrijvende vorm (actief), en niet de lijdende vorm (passief)

Voorbeeld van een **actief werkwoord**:

- *“The pump (onderwerp) delivers (werkwoord) the insulin (lijdend voorwerp).”*

“delivers” is hier een actief werkwoord. De zin zegt eerst wat er levert, en daarna wat er geleverd wordt.

Voorbeeld van een **passief werkwoord**:

- *“The insulin (subject) is delivered (verb) by the pump (object)”*

*“delivered”* is hier een passief werkwoord. Onderwerp en voorwerp zijn omgedraaid, vergeleken met de zin met het actieve werkwoord. We moesten de zin langer maken door “is” en “by the” toe te voegen. Overweeg ook om met het actieve werkwoord te beginnen.

In plaats van: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Gebruik: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Passieve werkwoorden kunnen problemen geven:

- Ze kunnen verwarrend zijn.

- Ze maken tekst vaak langdradiger.

- Ze maken tekst minder levendig.

##### Goed gebruik van de passieve vorm

Soms is het wel goed om de passieve vorm te gebruiken.

- Om iets minder vijandig te maken: 'this bill has not been paid' (passief) is zachter dan 'you have not paid this bill' (actief).

- Om de schuld niet op je te nemen: 'a mistake was made' (passief) in plaats van 'You made a mistake' (actief).

- Als je niet weet wie of wat de handeling doet: 'the England team has been picked'.

- Als het gewoon beter klinkt.

#### Vermijd naamwoordstijl (nominalisaties)

Een nominalisatie is de naam van iets dat geen fysiek voorwerp is, zoals een proces, techniek of emotie. Nominalisaties worden gevormd uit werkwoorden.

Bijvoorbeeld:

| Werkwoord | Nominalisatie |
| --------- | ------------- |
| complete  | completion    |
| introduce | introduction  |
| provide   | provision     |
| fail      | failure       |

Ze worden vaak gebruikt **in plaats van** de werkwoorden waar ze van komen, maar ze kunnen klinken alsof er eigenlijk niets gebeurt. Te veel ervan maakt een tekst saai en zwaar om te lezen.

In plaats van: *“The implementation of the method has been done by a team.”*

Gebruik: *“A team has implemented the method.”*

#### Gebruik lijsten waar dat past

Lijsten zijn heel goed om informatie op te delen. Er zijn twee hoofdsoorten lijsten:

- Een doorlopende zin met meerdere punten die aan het begin, in het midden of aan het eind genoemd worden.

- Losse opsommingstekens met een inleidende zin.

In de lijst met opsommingstekens hierboven is elk punt een volledige zin. Daarom begint elk punt met een hoofdletter en eindigt het met een punt. Gebruik opsommingstekens in plaats van nummers of letters. Die vestigen de aandacht op elk punt, zonder je extra informatie te geven om te verwerken.

#### Mythes ontkracht

- Je mag een zin beginnen met **and, but, because, so of however**.

- Je mag een infinitief splitsen (split infinitive). Je mag dus **“to boldly go”** zeggen.

- Je mag een zin eindigen met een voorzetsel. Eigenlijk is dat iets **we should stand up for**.

- En **je** mag hetzelfde **woord** twee keer in een zin gebruiken als **je** geen beter **woord** kunt vinden.

#### Schrijfstijl aanpassen aan het doel

Om de documentatie duidelijk en kort te houden, schrijven we verschillende delen van de documentatie in verschillende stijlen.

De stijl “uitleg” (explanation) gebruiken we voor de delen over introductie, achtergrond en kennis opbouwen.

De stijl “handleiding” (how-to guide, met zo weinig mogelijk uitleg) gebruiken we voor het bouwen en instellen van AAPS en voor sommige delen over probleemoplossing.

Een tutorial helpt de leerling om basisvaardigheden te krijgen. De gebruiker **leert door te doen**.

![Afbeelding](../images/styleguide02.png)

##### ![Afbeelding](../images/styleguide03.png) Tutorials (bijv. een kind leren eiwit te kloppen)

- de verteller spreekt de lezer direct aan: In deze tutorial ga **je** (we) kan in enkele zeldzame gevallen gebruikt worden om het gevoel “we doen dit samen” over te brengen

- Toekomende tijd -> om het einddoel te laten zien

- Gebiedende wijs -> om de taken te doen -> Concrete stappen - vermijd abstracte begrippen

- Verleden tijd -> om voltooide taken te laten zien -> Snelle en direct zichtbare resultaten

- Zo weinig mogelijk uitleg -> alleen wat echt nodig is om de taak te voltooien - **wat en waarom**

- Negeer opties/alternatieven/…. Geen dubbelzinnigheid

- Overgangen tussen stappen: sluit een stap af met een zin die logisch naar de volgende stap leidt. Voorbeeld: *Je hebt nu de Let’s Encrypt-client geïnstalleerd, maar voordat je certificaten aanvraagt, moet je zorgen dat alle nodige poorten open zijn. Daarvoor pas je in de volgende stap je firewall-instellingen aan.*

- Titel van de **tutorial** (kop niveau 1)

- Introductie (geen kop)

- Vereisten (kop niveau 2)

- Stappen:

- Stap 1 — Het eerste doen (kop niveau 2)

- Stap 2 — Het volgende doen (kop niveau 2)

- Stap n — Het laatste doen (kop niveau 2)

- Conclusie (kop niveau 2)
    
    - **De taal van tutorials**
        
        *In deze tutorial ga je…*
        
        Beschrijf wat de leerling zal bereiken (let op - niet: “je gaat leren…”).
        
        *Doe eerst x. Doe nu y. Nu je y hebt gedaan, doe je z.*
        
        Geen ruimte voor dubbelzinnigheid of twijfel.
        
        *We moeten altijd x doen voordat we y doen, omdat… (zie Uitleg voor meer details).*
        
        Leg handelingen zo kort mogelijk uit, in de eenvoudigste taal. Link naar een uitgebreidere uitleg.
        
        *Het resultaat ziet er ongeveer zo uit…*
        
        Geef je leerling duidelijke verwachtingen.
        
        *Let op dat… Onthoud dat…*
        
        Geef je leerling genoeg aanwijzingen, zodat die kan zien dat die op de goede weg is en weet waar die is.
        
        *Je hebt een veilige, hylomorfe stasis-machine met drie lagen gebouwd…*
        
        Beschrijf (en bewonder, op een rustige manier) wat je leerling heeft bereikt (let op - niet: “je hebt geleerd…”)

##### ![Afbeelding](../images/styleguide05.png) Handleidingen (how-to guides, bijv. een recept)

Een handleiding is bedoeld om een gebruiker die het al kan te helpen een bepaalde taak goed uit te voeren.

- HOE

- de verteller spreekt de lezer direct aan: In deze tutorial ga **je**

- Toekomende tijd -> om het einddoel te laten zien

- Voorwaardelijke gebiedende wijs -> om X te krijgen, doe y -> Concrete stappen - vermijd abstracte begrippen

- Zo weinig mogelijk uitleg -> alleen wat echt nodig is om de taak te voltooien -> **wat en waarom**

- Negeer opties/alternatieven/…. Geen dubbelzinnigheid, maar je kunt linken naar de referentie of de uitleg

- **Handleiding**: Titel (kop niveau 1)

- Alinea met introductie

- Optionele vereisten (alinea, of kop niveau 2 als het er meer dan 1 zijn)

- Stappen:

- Stap 1 — Het eerste doen (kop niveau 2)

- Stap 2 — Het volgende doen (kop niveau 2)

- Stap n — Het laatste doen (kop niveau 2)

- Alinea met conclusie
    
    - **De taal van handleidingen**
        
        *Deze handleiding laat je zien hoe je…*
        
        Beschrijf duidelijk het probleem of de taak die de handleiding de gebruiker leert oplossen.
        
        *Wil je x, doe dan y. Om w te bereiken, doe je z.*
        
        Gebruik een voorwaardelijke gebiedende wijs.
        
        *Zie de referentiegids van x voor een volledige lijst met opties.*
        
        Vul je praktische handleiding niet met alles wat de gebruiker maar kan doen met x.

##### ![Afbeelding](../images/styleguide07.png) Uitleg (bijv. de wetenschap achter waarom eiwit stijf wordt als je het klopt)

Een uitleg maakt het begrip van de lezer over een onderwerp duidelijker, dieper en breder.

- WAAROM

- Begin met **Over**

- Geef context, link ALLE relevante bronnen

- Bespreek opties/alternatieven

- Geef geen instructies of referentie (link ernaar)

- Noem wat onbekend is of nog verandert enz…

- **Over** Titel (kop niveau 1)

- Introductie (geen kop)

- Optionele vereisten (kop niveau 2)

- Subonderwerp 1 (kop niveau 2)

- Conclusie (kop niveau 2)
    
    - **De taal van uitleg**
    
    *De reden voor x is dat vroeger y…*
    
    Leg uit.
    
    *W is beter dan z, omdat…*
    
    Geef een oordeel en zelfs een mening waar dat past.
    
    *Een x in systeem y is te vergelijken met een w in systeem z. Maar…*
    
    Geef context die de lezer helpt.
    
    *Sommige gebruikers kiezen liever w (omdat z). Dit kan een goede aanpak zijn, maar…*
    
    Weeg alternatieven af.
    
    *Een x werkt als volgt samen met een y:…*
    
    Laat zien hoe het systeem van binnen werkt, zodat je begrijpt waarom iets doet wat het doet.

### 2\. Notities voor het schrijven/bijwerken specifiek voor AAPS

#### Auteur & redacteur

Zie het schrijven/bijwerken van de AAPS-documentatie als een proces in twee fasen. Die kunnen door dezelfde persoon op verschillende momenten worden gedaan, of door meer dan één persoon.

Een **auteur (bijv. jij!)** schrijft/bewerkt een deel van de documentatie in een korte, gewone spreektoon en geeft het dan door aan de redacteur.

De **redacteur (bijv. een andere AAPS-gebruiker, of de persoon die de pull request krijgt)** controleert of de stijlgids gevolgd is, en bewerkt het deel zodat het duidelijk en toegankelijk is. Daarbij haalt die zo veel mogelijk woorden weg (vooral bij delen in de stijl tutorial/handleiding). Het helpt soms om de tekst hardop te lezen.

#### Algemene punten voor AAPS

- Noem bij glucosewaarden steeds zowel mg/dl als mmol/l (doe dat ook bij schermafbeeldingen, als het kan).

- Gebruik overal “AAPS” en niet “Android APS”, zodat het overal hetzelfde is.

- Noem duidelijk voor welke versie van Android Studio/AAPS je schrijft, of van welke versie de schermafbeeldingen zijn.

### 3\. Handige bronnen

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>