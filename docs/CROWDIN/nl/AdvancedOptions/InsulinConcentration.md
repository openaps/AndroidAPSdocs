(Insulin-Concentration)=
# Insulineconcentratie

```{warning}
Alle commerciële pompen zijn gemaakt voor gebruik met **ALLEEN** insuline U100. Een andere insulineconcentratie in een pomp gebruiken kan gevaarlijk zijn. Steeds meer gebruikers gebruiken AAPS met andere concentraties, maar de omrekening moet altijd beheerd worden en leidt vaak tot fouten (zelfs bij zeer ervaren gebruikers!).
```

## De basis van insuline herhaald

Dit hoofdstuk behandelt de belangrijkste begrippen over het meten en toedienen van insuline.

### De insuline-eenheid: een maat voor werking

Insuline wordt gemeten in **internationale eenheden (IE)**. Die meten de biologische werking (de kracht om de bloedsuiker te verlagen), niet alleen de fysieke massa.

- **Definitie:** 1 IE komt overeen met de werking van een bepaalde hoeveelheid insuline, gestandaardiseerd op **ongeveer 0,04167 mg**.
- **Belangrijk:** Een "eenheid" betekent hetzelfde biologische effect bij alle soorten insuline. Zo is de dosering altijd gelijk.

### Insulineconcentraties

Insuline bestaat in verschillende sterktes, uitgedrukt in het aantal eenheden per milliliter (ml).

- **U100:** De wereldwijde standaard, met **100 IE/ml**.
- **U200-U500:** Sterker geconcentreerde insulines (bijv. U200 heeft 200 IE/ml) voor kleinere injectievolumes.
- **U40/U50:** Minder gebruikelijke, historische concentraties (40 IE/ml en 50 IE/ml). **U40 vereist speciale U40-spuiten.**
- **Handmatig verdunnen:** Een klinische praktijk om sterk verdunde insuline te maken (bijv. U50, U10) voor zeldzame gevallen, zoals bij pasgeborenen of bij extreme gevoeligheid. Dit vraagt een zeer zorgvuldige bereiding door de apotheek.

```{admonition} Critical Warning
:class: danger
Een concentratie gebruiken met een apparaat dat er niet bij past is extreem gevaarlijk en kan een ernstige overdosis of onderdosis veroorzaken. **Controleer altijd drie keer of de insulineconcentratie past bij de specificaties van de spuit, pen of pomp.**
```

## Wanneer gebruik je een niet-standaard concentratie?

Insulinepompen zijn gemaakt voor U100-insuline, maar sommige medische situaties vragen om een niet-standaard concentratie. Deze situaties vragen extreme voorzichtigheid en een zeer zorgvuldige aanpak.

### Situatie 1: verdunde insuline voor zeer lage doses

- **Situatie:** Behandeling van diabetes type 1 bij zeer jonge baby's en peuters.
- **Probleem:** Ze hebben zo weinig insuline nodig dat de kleinste dosis die de pomp kan geven (bijv. 0,05 E) nog te groot kan zijn. Dan is een nauwkeurige glucoseregeling moeilijk en is het risico op hypoglykemie hoog.
- **Oplossing:** Gebruik sterk verdunde insuline (bijv. U10, dat is 10 IE/ml).
- **Effect:** Hierdoor wordt per eenheid insuline meer vloeistof toegediend. De "pakketjes" insuline worden groter in volume maar zwakker in concentratie. Zo zijn veel fijnere aanpassingen en een nauwkeurigere dosering mogelijk met de bestaande instellingen van de pomp.

```{admonition} Critical Safety Note on Dilution
:class: danger
Insuline verdunnen is een procedure met hoog risico. Doe dit nooit thuis zonder speciale training en medisch toezicht. Het moet gedaan worden door een zorgverlener of een getrainde verzorger, met een steriel verdunningsmiddel dat speciaal voor dat type insuline bedoeld is. **Gebruik nooit kraanwater, zoutoplossing of een andere vloeistof**, want dat kan de insuline onwerkzaam maken, de werking veranderen en gevaarlijke verontreinigingen toevoegen.
```

### Situatie 2: geconcentreerde insuline bij een hoge insulinebehoefte of sterke insulineresistentie

- **Situatie:** Behandeling van volwassenen of tieners met sterke insulineresistentie, of van mensen die plaatselijk pijn hebben door de toevoegingen in standaardinsuline.
- **Probleem:**
  1. **Hoge behoefte:** Een zeer hoge dagelijkse insulinebehoefte kan boven de maximale bolus of de maximale dagelijkse toediening van de pomp komen.
  1. **Pijn:** De conserveermiddelen in insuline kunnen prikken of irritatie geven bij de infusie.
- **Oplossing:** Gebruik een sterker geconcentreerde insuline, zoals U200 (200 IE/ml).
- **Effect:** Hiermee wordt de nodige insulinedosis in de helft van het volume toegediend. Voor de gebruiker moeten de interne instellingen van de pomp aangepast worden (bijv. basaalstanden en bolussen gehalveerd) vanwege de dubbele concentratie. Zo wordt het juiste aantal eenheden toegediend. Dit vermindert ook het volume van de mogelijk irriterende vloeistof die onder de huid wordt toegediend.

## Hoe beheer je de insulineconcentratie met AAPS (AAPS 3 en ouder)?

Niet-U100-insuline gebruiken in een AAPS-loop vraagt een zeer zorgvuldige configuratie, zodat de berekeningen van de software passen bij de insuline die echt wordt toegediend. Een veelgebruikte methode is "Een aangepast profiel gebruiken".

### Een aangepast profiel gebruiken

Bij deze methode laat je AAPS denken dat de patiënt minder insuline nodig heeft dan in werkelijkheid. Zo compenseer je dat de pomp sterker geconcentreerde insuline toedient dan waarvoor hij gemaakt is. Het voorbeeld hieronder gaat over U200-insuline in een pomp die voor U100 gemaakt is.

- **Het kernprobleem:** Een pomp voor U100 is gekalibreerd om **10 µL** te geven voor **1 eenheid**. Als je hem vult met U200 (1 eenheid U200 komt overeen met **5 µL** insuline) en je kiest **1 eenheid** op de pomp, dan geeft hij **10 µL** insuline. Maar dat volume bevat nu **2 eenheden U200-insuline**. Dit geeft een overdosis van 100%.
- **De oplossing "Profiel wissel 50%":** Om dit te corrigeren wordt het hele therapieprofiel van de patiënt in AAPS "twee keer zo zwak" gemaakt.
  1. De gebruiker maakt een nieuw profiel op basis van het standaard U100-profiel, met de functie "Profiel wissel **50%**".
  1. Dit maakt een nieuw profiel waarin:
     - de **basaalstanden** gehalveerd zijn.
     - de **insuline-koolhydraatratio (IC)** verdubbeld is (bijv. 1:10 g wordt 1:20 g).
     - de **Insulinegevoeligheidsfactor (ISF)** verdubbeld is (bijv. 1 eenheid verlaagt de BG met 50 mg/dl (2,8 mmol/l) wordt 1 eenheid verlaagt de BG met 100 mg/dl (5,6 mmol/l)).
- **Het gecorrigeerde resultaat:** AAPS denkt nu dat de patiënt maar de helft van de insuline nodig heeft. Als AAPS een bolus van **1 eenheid** berekent en geeft, levert de pomp (gemaakt voor U100 maar gevuld met U200) de **10 µL**. Daarin zitten **2 echte eenheden U200-insuline**. Omdat AAPS deze dosis berekende met een profiel van "halve sterkte", is deze toediening van **2 echte eenheden** de juiste, bedoelde dosis. De rekensom van de loop met "halve sterkte" past bij de toediening van de pomp met "dubbele sterkte".

```{admonition} Critical Risks and Common Errors
:class: caution

Deze methode brengt grote risico's mee, omdat de gegevens in de app blijvend niet overeenkomen met de fysieke werkelijkheid.

**De belangrijkste fout: het verschil bij een "externe bolus"**

De meest gemaakte fout gebeurt bij het toedienen en vastleggen van insuline **buiten** het systeem van AAPS en de pomp.

- **De situatie:** AAPS berekent met het aangepaste profiel een bolus van **5 eenheden** voor een maaltijd. De gebruiker spuit dit met een U200-pen.
- **De dubbele fout:**
  1. **Verkeerde dosis gekozen:** De gebruiker denkt "AAPS berekent 5 eenheden" en verwacht, omdat het een U200-pen is, zonder omrekening **5 echte eenheden U200** te geven. Maar omdat het profiel gehalveerd is, heeft het lichaam eigenlijk **10 echte eenheden** nodig. Dit is een **onderdosis van 50%**, die tot hyperglykemie kan leiden.
  1. **Verkeerde berekening van insuline aan boord (IOB) (IOB te hoog):** Als de gebruiker deze externe bolus in AAPS vastlegt, voert hij **5 eenheden** in. Dit is fout. Omdat het AAPS-profiel voor U200 is, geldt: **1 eenheid in AAPS is 2 echte eenheden**. De 5 echte eenheden die met de pen gegeven zijn, moeten dus als **2,5 eenheden** in de app vastgelegd worden. Door 5 eenheden vast te leggen schat de gebruiker de IOB 100% te hoog in. AAPS denkt nu dat er 5 "geconcentreerde eenheden" aan boord zijn (gelijk aan 10 echte eenheden), terwijl er maar 5 echte eenheden actief zijn. Daardoor kan de loop de basale insuline stoppen of volgende bolussen verlagen. Dat maakt het risico op hyperglykemie door de eerste onderdosis nog groter.

**Andere risico's:**

- **Misleidende gegevens en rapporten:** Alle gegevens in AAPS of Nightscout - ook IOB, de totale dagdosis (TDD) en historische rapporten - zijn in "geconcentreerde eenheden". Dit geeft de gebruiker en het medisch team een vertekend beeld. Een arts die een rapport bekijkt, ziet misschien een TDD van 30 eenheden en beseft niet dat de patiënt eigenlijk 60 echte eenheden kreeg. Dat leidt tot een verkeerde beoordeling van de therapie.
- **Veranderd denkbeeld:** Na langer gebruik gaat de gebruiker "denken" in de gehalveerde waarden van de app. Hij onthoudt dat zijn ISF 100 mg/dl (5,6 mmol/l) is of zijn basaal 0,5 E/u, en vergeet dat dit "geconcentreerde" waarden zijn. Dit maakt de gebruiker gevaarlijk afhankelijk van het systeem, en hij verliest het gevoel voor zijn echte insulinebehoefte. Dat is juist belangrijk voor de veiligheid als de pomp uitvalt of de app problemen heeft.

**Conclusie:** Deze methode vraagt absolute waakzaamheid. De gebruiker moet steeds omrekenen tussen een "geconcentreerde wereld" in de app en de fysieke wereld. Elke externe insulinetoediening en elke keer dat iemand de gegevens bekijkt, doorbreekt dit denkbeeld en geeft een ernstig risico. Het verandert de betekenis van elk getal in het systeem.
```

## De concentratieparameter gebruiken (nieuw in AAPS 4.0)

Om de risico's van een aangepast profiel te verminderen, is er een nieuwe functie die de insulineconcentratie direct in AAPS beheert. Deze functie rekent automatisch om, zodat de hoofdapp altijd werkt in **echte internationale eenheden (IE)**.

### Hoe het werkt: automatische omrekening

Het basisprincipe is een duidelijke scheiding tussen de logica van de app en de communicatie met de pomp:

- **AAPS gebruikt internationale eenheden:** De database, algoritmes, rapporten en logs van AAPS **gebruiken altijd echte IE**. Dit betekent dat je IOB, TDD en therapie-instellingen (basaal, ISF, IC) de echte biologische insuline-eenheden weergeven.
- **Het pompstuurprogramma gebruikt geconcentreerde eenheden:** Alle waarden die naar het pompstuurprogramma gaan of ervan komen, worden automatisch omgerekend naar "geconcentreerde eenheden" (CU) in het pompstuurprogramma, op basis van de gekozen concentratie.
  - **Voorbeeld met U200:** Als de gebruiker een **bolus van 1 eenheid** vraagt, krijgt het pompstuurprogramma **0,5 CU (geconcentreerde eenheden)** voordat het dit naar de pomp stuurt. De pomp (ingesteld voor U100) geeft dan **5 µL**. Daarin zit **1 IE U200-insuline**.

### Voordelen en overgebleven risico's

**Voordelen:**

- Er is geen aangepast profiel meer nodig, en dus ook geen fouten bij het omrekenen in je hoofd.
- Gebruikers kunnen altijd "denken" in echte IE.
- Voor een externe bolus met een pen kies je gewoon de gewenste hoeveelheid insuline op de pen (welke pen en welke insulineconcentratie je ook gebruikt). Er is geen omrekening nodig, omdat U100- en U200-pennen altijd IE gebruiken om de eenheden te kiezen.
- Alle rapporten en gegevens van AAPS (TDD, IOB) zijn in echte IE. Dat is duidelijk voor de gebruiker en het medisch team.
- Het risico op verkeerd berekende externe bolussen verdwijnt, omdat ze in echte IE vastgelegd worden.

**Overgebleven risico's:**

- **Overgang in denken:** Gebruikers die overstappen van de methode met het "aangepaste profiel" moeten hun profiel terugzetten naar het juiste echte profiel (dus twee keer zo sterk als ze van U200 komen). Ze hebben ook tijd nodig om hun **denkbeeld** aan te passen. Na de gewenning aan "geconcentreerde" waarden in de app moeten ze opnieuw leren de **echte, niet-verborgen IE-waarden** te vertrouwen die overal getoond worden. In deze periode van aanpassing is er een risico op verkeerd lezen.
- **Handmatige bolus op de pomp:** Als je de bolusfunctie van de pomp zelf gebruikt (buiten AAPS om), krijg je een overdosis van 100%, omdat de pomp U200-insuline geeft met volumeberekeningen voor U100.
- **Algemene waarschuwing:** Niet-standaard concentraties gebruiken blijft een geavanceerde procedure met risico's en wordt officieel niet aanbevolen.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Plak een blijvende notitie **"U200-insuline"** op je pomp als herinnering, zodat je het nooit vergeet!
```

### Weergave in de gebruikersinterface

Voor de duidelijkheid toont de gebruikersinterface waar nodig zowel echte als geconcentreerde eenheden. Let op: de gebruikersinterface blijft hetzelfde als de huidige insuline U100 is.

**Voorbeelden van de weergave:**

- **Dialoog Bolus voortgang:**
  - De dialoog Bolus voortgang hoort bij de kern van de AAPS-app. Daarom wordt alleen de informatie in IE getoond (gelijk aan de keuze van de gebruiker): **`2,50 E / 10,00 E toegediend`**
- **Interface van het pompstuurprogramma (huidige status):**
  - In het pompoverzicht wordt de toegediende hoeveelheid in beide eenheden getoond, bijvoorbeeld als `U200` gekozen is: **`Laatste bolus: 10 E (5 CU) (10')`**

**Let op:** Beide eenheden (E en CU) zijn alleen zichtbaar in het hoofdoverzicht van de pomp. Afhankelijk van je pomp kunnen er andere schermen zijn waar alleen de geconcentreerde eenheden getoond worden. Historische gegevens in pompstuurprogramma's blijven meestal in "geconcentreerde eenheden".

### De functie inschakelen

Vanwege de veiligheidsrisico's staat deze parameter standaard niet aan. Om hem aan te zetten: rond Doel 3 af en schakel **Insuline concentratie ondersteuning** in bij Algemene instellingen.

### Een nieuwe insuline met een andere concentratie maken

Om een insuline met een andere concentratie te maken, open je eerst **Beheren → Insuline instellingen**.

- Klik op het "+"-icoon onder aan het scherm.
- Kies de nieuwe gewenste concentratie in het keuzemenu (U10, U20, U50, U100 en U200 zijn beschikbaar).
  - Verdunde concentraties zoals U10, U20 of U50 zijn voor kinderen met zeer lage basaalstanden.
  - U200 is vooral voor volwassenen met een hoge insulinebehoefte.

  ![Het keuzemenu voor de concentratie in Insuline instellingen](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Pas de piektijd en de Duur van insuline activiteit (DIA) aan, en geef de insuline eventueel een eigen naam (optioneel).
- Gebruik de knop Opslaan rechtsboven in het scherm.

Nu is de insuline gemaakt, maar je kunt hem niet direct kiezen in **Insuline instellingen**.

### Concentratie wisselen van U100 naar Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Om veiligheidsredenen legt AAPS een concentratiewissel alleen vast bij een reservoirwissel of een patch/pod-wissel.
```

Als je begint met U100-insuline, passen je profiel, historische gegevens en rapporten al bij de standaard van internationale eenheden. De wissel is dan heel "makkelijk":

- Bij een patch/pod-pomp is er een aparte stap bij het wisselen van de pomp, waarin je de insuline kiest die je erin doet.
- Bij een slangpomp klik je in het Overzicht (uitgevouwen statusbalk) op de knop Prime/Vul (voor de insulinewissel) en daarna op de knop "Wissel".

1. Kies de gewenste concentratie in het keuzemenu (bijv. `U200`).
1. Kies daaronder de juiste insuline. Totdat je bevestigt, staat boven de naam **Wordt geactiveerd** (in plaats van **Momenteel actief**).

   ![Een gekozen insuline die nog niet bevestigd is: Wordt geactiveerd](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Belangrijk:** de concentratiewissel wordt pas in AAPS vastgelegd nadat de profiel wissel op de pomp is toegepast.
   - Deze stap is verplicht voor alle patch/pod-pompen.
   - Bij slangpompen wacht je tot de profiel wissel op de pomp is toegepast, of doe je dit in **Beheren → Profiel** of **Insuline instellingen**.

Dat is alles!

Als er een tijdelijke **Profiel wissel** (een met een tijdsduur) loopt wanneer je de insuline wisselt, krijgt ook het profiel dat terugkomt na het einde van die tijdelijke wissel de nieuwe insuline. De oude insuline komt niet terug.

### Concentratie wisselen voor gebruikers met U200-insuline en een profiel van 50% (AAPS 4)

Als je begint met U200 die al in je pomp zit, maar met een profiel van 50%, moet je extra stappen doen vergeleken met de standaard wissel vanaf U100-insuline.

Onthoud: het moeilijkste is waarschijnlijk niet de wissel goed doen in AAPS, maar je hersenen opnieuw leren om in "IE" te denken in plaats van in "CU". Alle standaardwaarden voor bolussen (ontbijt, lunch, avondeten...) worden twee keer zo hoog, en dat geldt ook voor je TDD's, basaalstanden enz. Wees de eerste weken heel voorzichtig om geen fouten te maken, totdat je "weer denkt" in internationale eenheden.

- Maak eerst een nieuw profiel met alle waarden in internationale eenheden:
  - Doe een tijdelijke profiel wissel van 200% op je standaard lopende profiel.
  - Open het menu (☰) → **Behandelingen**, ga naar het tabblad **Profiel wissel** en dupliceer het nieuwe profiel van 200% (zie [Een profiel wissel dupliceren](#your-aaps-profile-clone-profile-switch)).
  - Ga terug naar je standaardprofiel tot de volgende reservoir- of patchwissel.
  - Ga naar **Beheren → Profiel** en geef dit nieuwe profiel een duidelijke naam (dit wordt je toekomstige profiel bij de U200-insuline die in AAPS 4 is ingesteld).
- Als je de functie Dynamische ISF (DynISF) gebruikt, moet je die minstens een week uitschakelen:
  - Al je geschiedenis in AAPS of Nightscout staat in de verkeerde eenheden (CU): de helft van de echte waarde in internationale eenheden. Wacht minstens een week met de U200-insuline in gebruik voordat je het weer inschakelt.
- Nu ben je klaar om bij de volgende insulinewissel of podwissel van insuline te wisselen (met een nieuwe U200 die is ingesteld in **Insuline instellingen**).
- Als de nieuwe U200-insuline goed is toegepast, vergeet dan niet het nieuwe standaardprofiel uit de eerste stap toe te passen.

## Hoe beheer je externe bolussen met verschillende pennen?

### Met U200-insuline en een profiel van 50% (AAPS 3)

Onthoud dat alle schaalverdelingen op pennen in internationale eenheden zijn. Welke pen je ook gebruikt (U100, U200): als je een pen gebruikt voor een externe bolus, moet je in beide richtingen omrekenen:

- Van AAPS naar de pen: als de Calculator een bolus voorstelt, of als je zelf een hoeveelheid in gedachten hebt, vermenigvuldig die dan met 2 als je de hoeveelheid op de pen kiest, vergeleken met dezelfde bolus via AAPS.
- Van de pen naar AAPS: als je een hoeveelheid op de pen hebt gekozen voor een externe bolus, deel die dan door 2 om de juiste hoeveelheid in AAPS vast te leggen (knop Insuline, externe bolus). Zo is de IOB-berekening in CU (geconcentreerde eenheden) juist.

### Met U200-insuline en het concentratiebeheer van AAPS 4

Met het interne concentratiebeheer in AAPS is het veel eenvoudiger: kies gewoon de gewenste hoeveelheid op de pen (welke pen en welke insuline je ook gebruikt) en leg die vast in AAPS.

- Als je bij de knop Insuline een externe bolus kiest, kun je elk type insuline kiezen dat in **Insuline instellingen** is ingesteld (vooral U100 en U200 voor pennen). Zo krijg je een zeer nauwkeurig berekende IOB, ook als de piek/DIA van de insuline in de pen heel anders is dan de piek/DIA van de insuline in de pomp.
