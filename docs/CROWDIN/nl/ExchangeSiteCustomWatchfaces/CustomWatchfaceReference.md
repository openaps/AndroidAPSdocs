# Referentiedocument voor aangepaste watchfaces

Deze pagina is voor ontwerpers van nieuwe watchfaces. Hij geeft alle sleutelwoorden en functies die je kunt gebruiken als je een nieuwe watchface wilt maken of animeren.

- Nieuwe functies en keys in Custom Watchface V2 (Wear-apk 3.3.0 of hoger) vind je [hier](#cwf-reference-new-v2-features)

## Formaat van aangepaste watchfaces

Custom Watchface is een open formaat, ontworpen voor AAPS en gekoppeld aan de nieuwe watchface "AAPS (Custom)" op het horloge.

Het watchface-bestand is een gewoon zip-bestand. Maar om als watchface-bestand herkend te worden, moet het zip-bestand de volgende bestanden bevatten:

- Eén afbeeldingsbestand met de naam CustomWatchface (dit kan een bitmapbestand `CustomWatchface.jpg` of `CustomWatchface.png` zijn, of een vectorbestand `CustomWatchface.svg`). Dit bestand is het kleine icoon waarmee je de watchface kiest als je op de knop "Laad Watchface" klikt. Het is ook de afbeelding die je in de Wear-plugin van AAPS ziet.
- Eén bestand met de naam `CustomWatchface.json` (zie [JSON-structuur](#cwf-reference-json-structure) hieronder). Dit tweede bestand is het hoofdbestand. Het bevat alle informatie die nodig is om de watchface te ontwerpen. Dit json-bestand moet geldig zijn (dit is waarschijnlijk het lastigste punt als je het bestand met de hand in een teksteditor bewerkt, want één komma te weinig of te veel is genoeg om het json-formaat te breken). Dit JSON-bestand moet ook een blok `"metadata"` bevatten, met een key `"name"` die niet leeg is. Dit wordt de naam van je aangepaste watchface (zie [Instellingen van de metadata](#cwf-reference-metadata-settings) hieronder)
- het zip-bestand moet zo klein mogelijk zijn (kleiner dan ongeveer 500 kb). Als dit bestand te groot is, wordt het gewoon geblokkeerd en niet naar het horloge verstuurd.

Het zip-bestand kan ook een aantal extra bronbestanden bevatten:

- Vaste bestandsnamen voor afbeeldingen die gebruikt worden in standaard views van de watchface (zoals `Background`, `CoverChart`... zie [Lijst van vaste bronbestanden](#cwf-reference-list-of-hardcoded-resource-files) hieronder). Al deze bestanden kunnen in `jpg`-, `png`- of `svg`-formaat zijn. maar voor de meeste moet je `png` of `svg` gebruiken, omdat die transparantie ondersteunen (jpg-bestanden zijn kleiner dan png, maar hebben geen transparantie). Let op: de beste kwaliteit bij de kleinste bestandsgrootte krijg je meestal met svg-bestanden (vectorformaat).
- Extra bronbestanden met vrije namen. Deze extra bestanden kunnen afbeeldingen of lettertypebestanden zijn (voor lettertypen worden de formaten `ttf` en `otf` geaccepteerd). Let op: voor deze extra bestanden wordt de `filename` (zonder extensie) gebruikt als keyValue in het JSON-bestand, om aan te geven waar of wanneer deze bestanden gebruikt worden.
  - afbeeldingen worden vaak gebruikt als achtergrond van tekstviews of voor een dynamische animatie (zoals het batterijniveau van 0% tot 100%)
  - met lettertypebestanden kun je eigen lettertypen in je watchface gebruiken

(cwf-reference-json-structure)=

## JSON-structuur

JSON-bestanden kun je bewerken in de teksteditor Notepad (of notepad++) (kies liever notepad++, dat JSON herkent en kleuren gebruikt)

- het bevat keys `"string_key":` en key-waarden. Dit kunnen teksten zijn zoals `"key value"`, gehele getallen, booleans zoals `true` of `false`, of een blok gegevens.
- elke waarde wordt gescheiden door een komma `,`
- Een blok gegevens begint met `{` en eindigt met `}`
- het json-bestand is één groot blok, dus het begint met `{` en eindigt met `}`. In dit bestand hoort elk ingesloten blok bij een `"key"` die uniek moet zijn binnen het blok
- Om het json-bestand beter leesbaar te maken, springt de tekst meestal in (elke nieuwe key staat op een nieuwe regel, elk nieuw blok schuift 4 spaties naar rechts)

(cwf-reference-metadata-settings)=

### Instellingen van de metadata

Dit blok is het eerste blok in het json-bestand en is verplicht. Het bevat alle informatie over deze watchface, zoals de naam, de auteur, de datum van maken of bijwerken, de versie van de auteur of de versie van de plugin.

Hieronder zie je een voorbeeld van een metadata-blok:

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template"
},
```

Let op: de `/` in de datum is een speciaal teken. Om in het json-bestand goed herkend te worden, moet je er een "escape"-teken `\` voor zetten.

In sommige json-bestanden zie je een extra key `"filename"`. Deze key wordt automatisch gemaakt of bijgewerkt als de aangepaste watchface in AAPS wordt geladen (hij wordt gebruikt om de gebruiker de naam van het zip-bestand in de map exports te tonen). Je kunt deze key dus uit het metadata-blok verwijderen.

(cwf-reference-general-parameter-settings)=

### Instellingen van algemene parameters

Na het eerste blok met metadata stel je een aantal algemene parameters in (zie [Lijst van algemene parameters](#cwf-reference-list-of-general-parameters) hieronder). Hiermee stel je de kleuren van de grafiek in (koolhydraten, bolus, BG-waarden...), en ook de standaardkleuren voor waarden binnen bereik, hyper of hypo (standaardkleuren van de BG-waarde en de pijlen)

Hieronder zie je een voorbeeld van algemene parameters

```text
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### Instellingen van ImageView

Een eigen afbeelding stel je in met de juiste bestandsnaam die hoort bij elke ImageView in de layout van de aangepaste watchface. Het json-blok is er dan alleen om de positie en de grootte te bepalen, of de view zichtbaar is of niet, en eventueel om de kleur aan te passen:

Hieronder zie je een voorbeeld van een Image-blok voor second_hand (in dit geval zit er geen afbeelding in het zip-bestand, dus wordt de standaard afbeelding van de secondewijzer gebruikt, maar met een eigen kleur).

```text
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
Om second_hand de standaard BG-kleur te geven (lowRange, midRange of highRange), hoef je alleen de laatste regel te wijzigen met de keyValue `bgColor`

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### Instellingen van TextView

TextView heeft meer parameters dan ImageView: je kunt de rotatie instellen (geheel getal in graden), textsize (geheel getal in pixels), gravity (om te bepalen of de tekst gecentreerd is (standaard waarde), of links of rechts uitgelijnd), het lettertype (font), fontStyle en fontColor, en ook de achtergrondkleur van de TextView

```text
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Let op: als je een view niet in je watchface wilt gebruiken, zet dan de key `"visibility"` op `"gone"`, maar zet ook de grootte en de positie buiten het zichtbare gebied, zo:

```text
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Als de grootte en de positie binnen het zichtbare gebied liggen, kan de verborgen waarde soms even "flitsen" als de watchface ververst.

Als je de achtergrondafbeelding van een text view wilt aanpassen, gebruik dan de key `"background":` en zet de bestandsnaam van een afbeelding uit het zip-bestand als keyValue. Je kunt ook alleen de achtergrondkleur veranderen met de key `"color:"`.

```json
"background": "fileName"
```

Je hebt ook 4 speciale textViews (freetext1 tot freetext4). Deze hebben een speciale parameter `"textvalue":`, waarmee je bijvoorbeeld een label kunt instellen

(cwf-reference-chartview-settings)=

### Instellingen van ChartView

De Chart view is een heel speciale view. Hij kan sommige parameters delen met ImageView of met TextView...

De standaardinstellingen voor deze view zijn heel eenvoudig:

```text
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
De 2 extra parameters die je voor de Chart view kunt opnemen zijn een achtergrondkleur (standaard transparant) met de key `"color"`, of een achtergrondafbeelding met de key `"background"`.

(cwf-reference-how-to-build-watchface)=

## Zo bouw/ontwerp je je eerste watchface

### Benodigde tools

- Teksteditor: mijn advies is NotePad++ (of iets vergelijkbaars). Dat is een eenvoudige teksteditor, maar het voordeel is dat je de tekst met kleurcodes opgemaakt ziet, zodat je fouten makkelijker vindt. elke eenvoudige teksteditor is goed genoeg. Het doel is namelijk om json-informatie aan te passen.
- Afbeeldingseditor (bitmap en/of vector)
  - Als je bitmaps gebruikt
    - De afbeeldingseditor moet transparantie aankunnen (nodig voor alle afbeeldingen boven de achtergrond) en het png-formaat (als je bitmapafbeeldingen gebruikt)
    - De achtergrondafbeelding mag in jpg-formaat zijn (kleiner dan png)
    - Met de afbeeldingseditor moet je grafische objecten in pixels kunnen meten (dit kan een eenvoudig vierkant zijn) (boven, links, breedte, hoogte)
    - De afbeeldingseditor moet kleuren kunnen tonen met een RRGGBB-code in hexadecimaal
    - De afbeeldingseditor moet afbeeldingen kunnen schalen naar 400px x 400px (heel belangrijk om met deze resolutie te werken)
  - Als je vectoren gebruikt
    - Vectorafbeeldingen moeten in svg-formaat geëxporteerd worden

### Gebruik een template, zodat je niet vanaf nul begint

Als je je eerste watchface wilt ontwerpen, begin je het beste met de standaard watchface (zo heb je zeker de nieuwste versie, met alle beschikbare views in de juiste volgorde)

- Je krijgt het zip-bestand door in de Wear-plugin op de knop "Exporteer template" te klikken. Het zip-bestand staat daarna in de map AAPS/exports
- Let op: er moet een horloge met AAPS verbonden zijn om de knoppen voor de aangepaste watchface te zien (maar je hebt het horloge ook nodig om je aangepaste watchface te controleren, te testen en af te stellen)

De standaard watchface is heel eenvoudig. Het zip-bestand bevat maar 2 bestanden:

- CustomWatchface.png (afbeelding van de standaard watchface voor het kiezen van de watchface)
- CustomWatchface.json

### Organiseer je bestanden op je computer

Het makkelijkst werk je met de telefoon aan de computer verbonden, en met twee aparte mappen:

- een verkenner, geopend in een aparte map met alle bestanden (json, bitmapafbeeldingen, vectorafbeeldingen, lettertypen) en het bestand CustomWatchface.zip
- een tweede verkenner (of een aangepaste mappenboom), geopend op de map Telefoon/AAPS/exports

Zo werk je heel makkelijk: elke keer als je het json-bestand in een teksteditor aanpast, of een afbeelding in de afbeeldingseditor (bitmap of vector), hoef je alleen:

1. je wijzigingen in elke app op te slaan
2. alle bestanden naar het bestand CustomWatchface.zip te slepen
3. CustomWatchface.zip naar de map AAPS/exports van de telefoon te slepen
4. CustomWatchface naar het horloge te sturen om het resultaat te bekijken

### Aanpassing van de watchface voorbereiden

Als eerste stap moet je een naam voor de watchface bepalen (nodig om hem makkelijk te kiezen bij het testen), en beginnen met het aanpassen van de metadata-keys aan het begin van het json-bestand

Daarna moet je bepalen welke informatie je wilt tonen, dus welke views zichtbaar of verborgen moeten zijn.

- wil je seconden tonen of niet?
- wil je een analoog of een digitaal horloge ontwerpen (of allebei...)

Nu kun je het json-bestand aanpassen. Zet de key `"visibility":` van elke view op `"visible"` of `"gone"` (als je de view wilt houden of niet)

Je kunt ook al beginnen met het ongeveer instellen van de boven- en linkermarge en de breedte en hoogte, om de watchface te organiseren (deze waarden stel je later precies in met de afbeeldingseditor)

Let op: alles wordt ontworpen binnen een **rechthoek van 400px x 400px**. Alles krijgt dus een positie in absolute coördinaten binnen deze grootte.

Als je je eerste watchface ontwerpt, moet je weten dat alles in lagen is opgebouwd, van achter naar voor. Elke view (ImageView of TextView) kan dus iets verbergen wat erachter ligt...



![Lagen van CustomWatchface](../images/CustomWatchface_1.jpg)



In het json-bestand staan alle views ook in volgorde van achter naar voor (zo onthoud je makkelijker wat achter wat ligt...)

Als je je eerste aangepaste watchface ontwerpt of aanpast, begin dan met eenvoudige dingen: verander de zichtbaarheid van een paar views, voeg een eigen achtergrondafbeelding toe zonder het json-bestand te wijzigen...

### Kleuren beheren

In het json-bestand heb je meerdere keys om kleuren op te geven: `"color"` en `"fontColor"` voor views, maar ook `"highColor"`, `"midColor"`, `"lowColor"`, ... (zie [Lijst van algemene parameters](#cwf-reference-list-of-general-parameters))

Kleuren worden opgegeven met een tekstveld dat begint met `#`, gevolgd door RRGGBB-waarden (Rood, Groen, Blauw) in hexadecimaal formaat:

- `"#FFFFFF"` is wit, `"#000000"` is zwart, `"#FF0000"` is rood...

Je kunt ook 2 extra waarden toevoegen voor de alfalaag, om een transparantieniveau op te geven (AARRGGBB):

- `"#00000000"` is helemaal transparant, en `"#FF000000"` is helemaal ondoorzichtig (dus `"#FF000000"` is hetzelfde als `"#000000"`)

Je kunt ook de speciale keyvalue `"bgColor"` gebruiken om automatisch `"highColor"`, `"midColor"` of `"lowColor"` uit de algemene parameters te gebruiken, volgens de BG-waarde:

- `"fontColor": "bgColor",` stelt de tekstkleur van de view automatisch in volgens de BG-waarde
- Let op: de views `sgv` (voor de BG-waarde) en `direction` (voor de trendpijl) gebruiken automatisch de BG-kleuren uit de algemene parameters (als je voor deze 2 views andere kleuren wilt, moet je de geavanceerde functie [dynData](#cwf-reference-dyndata-feature) gebruiken, met een kleur in één stap...)

Meer informatie over ImageViews en de key `"color":` vind je in het aparte hoofdstuk [Kleur van een afbeelding aanpassen](#cwf-reference-tune-image-color) hieronder.

### Vaste afbeeldingen (Hardcoded) opnemen

de makkelijkste manier om je watchface aan te passen is om afbeeldingen met speciale namen in het zip-bestand op te nemen (zie [Lijst van vaste bronbestanden](#cwf-reference-list-of-hardcoded-resource-files))

- Afbeeldingen moeten in `.jpg`-, `.png`- of `.svg`-formaat zijn. maar let op: jpg ondersteunt geen transparantie, dus gebruik het alleen voor de achtergrondlaag. Gebruik voor alle tussenliggende lagen (cover_chart, cover_plate, wijzers) een `.png`- of `.svg`-afbeelding

- Als je een editor voor vectorafbeeldingen hebt (zoals Illustrator), kies dan dit formaat. Het geeft kleine tekstbestanden met de extensie `.svg` en de beste kwaliteit.
- Let erop dat je de exacte bestandsnaam gebruikt (ook hoofdletters en kleine letters)

Als je nu een eigen achtergrondafbeelding wilt, hoef je alleen een bestand met de naam `Background.jpg` in het zip-bestand op te nemen (zonder iets anders te veranderen). Stuur het zip-bestand naar het horloge en bekijk het resultaat!

Als je hour_hand, minute_hand of second_hand voor een analoog horloge wilt aanpassen, voeg dan gewoon `HourHand.png` (of `HourHand.svg`), `MinuteHand.png` en `SecondHand.png` toe.

- deze afbeeldingen draaien automatisch rond het midden van de afbeelding. De afbeeldingen moeten dus op 00:00:00 staan (en voor een analoog horloge over het "hele scherm" gebruik je een grootte van 400 x 400 px op positie boven 0, links 0)

In de [Lijst van vaste bronbestanden](#cwf-reference-list-of-hardcoded-resource-files) zie je ook dat er voor elke image view twee extra vaste bestandsnamen zijn, met `High` en `Low` (je kunt bijvoorbeeld andere afbeeldingen met de naam `BackgroundHigh.jpg` en `BackgroundLow.jpg` in het zip-bestand opnemen). dan verandert de afbeelding automatisch volgens je BG-niveau (binnen bereik, hyper of hypo). Zie de watchface AIMICO als voorbeeld.

(cwf-reference-tune-image-color)=

### Kleur van een afbeelding aanpassen

De key `"color"` kan gebruikt worden om de standaard kleur van een afbeelding aan te passen:

- op de background view stelt hij de achtergrondkleur in (standaard zwart)
- op cover_plate (eenvoudige wijzerplaat) of op de wijzers vervangt hij de standaard kleur (wit) door de opgegeven kleur (ook `"bgColor"`)

Als je de key `"color"` op een bitmapafbeelding (`.jpg` of `.png`) toepast, geeft de kleur een interessant effect op de kleurverzadiging. Zo herken je je bitmap nog steeds.

Tot slot: op een `.svg`-afbeelding heeft de key `"color"` geen effect. De kleuren van vectorbestanden liggen vast in de afbeelding. Als je kleuren wilt veranderen, moet je meerdere `svg`-bestanden opnemen en de geavanceerde functie [dynData](#cwf-reference-dyndata-feature) gebruiken om te wisselen

### Extra lettertypen gebruiken voor TextViews

In de wear-apk zitten al een aantal standaard lettertypen (zie de font-keys in het hoofdstuk [Key-waarden](#cwf-reference-key-values)). Maar als je extra lettertypen wilt gebruiken die niet standaard beschikbaar zijn, kun je extra lettertypen in het zip-bestand opnemen:

- de 2 geaccepteerde lettertypeformaten zijn `.ttf`- en `.otf`-bestanden
- als je een eigen lettertype in het zip-bestand opneemt, bijvoorbeeld een bestand met de naam `myCustomFont.ttf`, dan gebruik je de bestandsnaam om het in het json-bestand voor een TextView te gebruiken:

```
"font": "myCustomFont",
```

Onthoud dat sommige lettertypen in grote bestanden zitten (en de grootte van het zip-bestand is beperkt). Als je maar heel weinig tekens gebruikt (cijfers, `.`, `,`), kun je dus gratis tools gebruiken om ongebruikte tekens te verwijderen (bijvoorbeeld [hier](https://products.aspose.app/font/generator/ttf-to-ttf)) en zo het lettertypebestand kleiner te maken.

(cwf-reference-advanced-features)=

## Geavanceerde functies

(cwf-reference-preference-feature)=

### Functie Preferences (voorkeuren)

CustomWatchface kan automatisch sommige instellingen van het horloge aanpassen, zodat de watchface goed wordt weergegeven (als de gebruiker daar in de Wear-instellingen toestemming voor geeft).

Maar gebruik deze functie voorzichtig. De instellingen zijn gedeeld met alle andere watchfaces. Houd je bij deze functie dus aan een paar regels:

- stel nooit instellingen in die over verborgen views gaan
- probeer zo veel mogelijk views zichtbaar te maken
- maak sommige views gerust breder dan nodig:
  - TBR kan als percentage getoond worden (smal), maar ook als absolute waarde (veel breder)
  - delta of gem. delta met gedetailleerde informatie kan breed zijn
  - hetzelfde geldt voor iob2: deze view kan de totale iob tonen, maar als gedetailleerde iob is gekozen, kan de tekst heel lang worden

Als je toch heel specifieke instellingen nodig hebt voor een goede weergave (in het voorbeeld hieronder: als er niet genoeg ruimte is voor gedetailleerde iob, kun je deze parameter op je horloge "forceren" naar `false`), kun je in het metadata-blok een instellingsbeperking opnemen, zoals hier

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template",
    "key_show_detailed_iob": false
},
```

Als de gebruiker de aangepaste watchface toestemming geeft om parameters van het horloge te wijzigen (instelling in de Wear-plugin), dan wordt "Toon gedetailleerde IOB" op "uit" gezet en daar vergrendeld. Deze parameter kan dan niet meer worden gewijzigd, totdat de toestemming in de parameters van de Wear-plugin wordt uitgezet of een andere watchface wordt gekozen.

- Let op: als een gebruiker een watchface kiest, ziet hij bij het kiezen het aantal "vereiste parameters"

In het voorbeeld hieronder heeft de watchface Gota één vereiste parameter. Als er geen toestemming is gegeven, wordt dit aantal in het wit getoond. Als er wel toestemming is gegeven, wordt deze parameter ingesteld en op het horloge vergrendeld (in dat geval is het getal oranje)

![Vereiste parameters](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### Functie TwinView

Met twin views kun je de positie van een view makkelijk aanpassen aan de views die zichtbaar zijn. Dit is niet zo krachtig als een layout die helemaal uit LinearLayout bestaat, maar het werkt voor veel gewone situaties.

In het voorbeeld hieronder zie je de watchface AAPS (Cockpit) met alle views zichtbaar in de instellingen, en dezelfde watchface met "Toon rig batterij" uit en "Show avg delta" uit

![Twin Views](../images/CustomWatchface_3.jpg)

Je ziet dat als een van de twin views verborgen is, de andere verschuift naar het midden

in dit voorbeeld zie je dat in het blok `"uploader_battery"` de key `"twinView":` is toegevoegd om de view `"rig_battery"` aan te wijzen, en in het blok `"rig_battery"` wijst de key `"twinView":` naar `"uploader_battery"` als twin. Daarna bepaalt de extra key `"leftOffsetTwinHidden":` hoeveel pixels de view verschuift als de twin verborgen is.

Om dit getal te berekenen: het verschil tussen de leftMargin van de twee twin views is 50 pixels, dus om in het midden te blijven is de verschuiving de helft, in de ene of de andere richting.

Als de twin views onder elkaar staan, moet je de key `"topOffsetTwinHidden":` gebruiken

```text
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### Functie DynData

DynData is de krachtigste functie als je animaties in je watchface wilt opnemen, op basis van interne waarden (zoals de BG-waarde, het BG-niveau, delta, % batterij... zie de lijst met beschikbare gegevens [hier](#cwf-reference-dyndata-key-values))

Om deze functie uit te leggen, gebruik ik het voorbeeld van de watchface AAPS (SteamPunk):

![CustomWatchface_4](../images/CustomWatchface_4.png)

In deze watchface moeten we rechts de [rotatie van de BG-waarde](#cwf-reference-background-management) (van 30 graden tot 330 graden) beheren, het [dynamische bereik van avg_delta](#cwf-reference-avg-delta-management) (schaal tot 5 mgdl, 10 mgdl of 20 mgdl, afhankelijk van de waarde), de [rotatie van de wijzer](#cwf-reference-dynamic-rotation-management) die gelijk moet lopen met de schaal, en ook de verschillende lagen van de views...

Om deze watchface te kunnen maken, zie je hieronder alle afbeeldingen die in het zip-bestand zitten:

Let op: om de transparantie te kunnen zien, staan al deze afbeeldingen op een gele achtergrond met een rood kader eromheen

![Afbeeldingen van Steampunk](../images/CustomWatchface_5.jpg)

- Op de eerste rij worden Background.jpg en CoverPlate.png automatisch gekoppeld aan de bijbehorende view (standaard bestandsnamen van views), en steampunk_pointer.png wordt beheerd door dynData
- Op de tweede rij zie je de 3 schalen voor het dynamische bereik van avg_delta. Die worden ook door dynData beheerd
- Op de derde rij wordt chartBackground.jpg met de hand aan de chart view gekoppeld, en de bestanden HourHand.png en MinuteHand.png worden automatisch aan de bijbehorende views gekoppeld

(cwf-reference-background-management)=

#### Beheer van de achtergrond

Eerst de afbeelding van de BG-waarde: hier is geen keuze, die kan alleen in de achtergrondlaag liggen (anders ligt hij vóór de chart view en is de grafiek niet zichtbaar!). We moeten dus de BG-waarde aan de achtergrond koppelen, en daarna de achtergrondafbeelding laten draaien volgens de BG-waarde.

In het blok `"background"` nemen we 2 speciale keys op om deze rotatie te maken:

```text
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
De key `"dynData":` bepaalt welk blok gebruikt wordt voor de animatie (waarde, bereik, omzetting...). Hier heet dit blok "rotateSgv" (kies een duidelijke naam als je deze functie gebruikt),

`"rotationOffset": true,` bepaalt dat de animatie volgens de waarde een rotatie moet zijn. (andere beschikbare keys zijn `"leftOffset"` en `"topOffset"`, als je een schuifbalk wilt maken)

Nu gaan we naar het einde van het bestand, na de laatste view:

```text
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
Je ziet dat we na de laatste view (`"second_hand"`) een nieuw blok `"dynData": { ... }` hebben toegevoegd, dat alle animaties bevat:

Het blok dat in de view `"background"` werd genoemd, heet `"rotateSgv"`. Het is het eerste blok dat je in `"dynData"` vindt!

Dit blok is eenvoudig: de eerste key heet `"valueKey":` en bepaalt welke waarde gebruikt wordt. in dit geval is `"sgv"` een "keyValue" voor de BG-waarde (let op: meestal heeft de keyValue dezelfde naam als de view die deze informatie toont).

Voor de BG-waarde is de standaard min data 39 mgdl en de max data 400 mgdl (zie [DynData-key-waarden](#cwf-reference-dyndata-key-values) hieronder voor alle beschikbare keyValues en de bijbehorende min/max-waarden).

In het blok `"rotateSgv"` worden de twee extra keys (`"minData":` en `"maxData":`) gebruikt om de minimale en maximale waarde op 30 en 330 te zetten. Met deze min- en maxwaarden kunnen we de waarde van de gegevens direct gebruiken (zonder omzetting) om de achtergrond in graden te laten draaien. In deze situatie worden alle BG-waarden boven 330 mgdl begrensd op 330, de bovengrens van de afbeelding.

#### Beheer van de grafiek

De standaard achtergrond van de grafiek is transparant. Om de BG-schaal in de achtergrondafbeelding te verbergen, moeten we dus een aparte achtergrondafbeelding opnemen (deze afbeelding bevat de schaduwen van de Steampunk-watchface). De link naar het bestand chartBackground.jpg wordt gemaakt met de key `"background":`

Natuurlijk moeten de grootte en de positie van de view tot op de pixel kloppen!

```text
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### Beheer van de gem. delta

Om het dynamische bereik van de gem. delta te beheren, gebruiken we de vier freetext views. freetext1 wordt gebruikt voor de schaal (afbeelding), en freetext2 tot freetext4 voor de rotatie van de wijzer volgens de schaal.

**freetext1**

Zoals eerder uitgelegd, liggen freetext views vóór de grafiek en vóór de achtergrond. Daarom hebben we transparante delen opgenomen, zodat deze afbeeldingen te zien zijn (rechterkant en onderkant van de afbeelding)

Let op: het weggehaalde onderste deel van deze afbeeldingen is gebruikt als achtergrond van de grafiek, zodat alles perfect aansluit.

```text
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
Voor deze view nemen we de link op naar een ander `"dynData"`-blok met de naam `avgDeltaBackground`. Dit blok beheert de schaal van avgDelta volgens de waarde van avgDelta.

```text
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":` legt de link met de waarde `"avg_delta"`
- min- en maxData beperken het bereik ook tot de hoogste waarde die in deze watchface beschikbaar is (van -20 mgdl tot 20 mgdl). Voor mmol-gebruikers: onthoud dat alle interne waarden in AAPS altijd in mgdl zijn.

Hier zien we hoe je een dynamische achtergrondafbeelding volgens de waarde beheert.

`"invalidImage":` is de key voor de afbeelding die getoond wordt als de gegevens ongeldig zijn (of ontbreken). Hier leggen we de link naar een extra afbeelding in het zip-bestand met een schaal van 5 mgdl

Daarna gebruiken we een reeks afbeeldingen, van `"image1":` tot `"image8":`. Het aantal afbeeldingen bepaalt het aantal stappen tussen `minData` en `maxData`.

- `image1` bepaalt de afbeelding die getoond wordt als avg_delta gelijk is aan of dicht bij `minData` ligt, en de afbeelding met het hoogste nummer (hier `image8`) bepaalt de afbeelding die getoond wordt als avg_delta gelijk is aan of dicht bij `maxData` ligt
- tussen -20 mgdl en 20 mgdl is het totale bereik 40 mgdl. Gedeeld door 8 (het aantal afbeeldingen) krijgen we 8 stappen van 5 mgdl
- Nu kunnen we achtergrondafbeeldingen aan de waarde van avg_delta koppelen, te beginnen bij de laagste waarden: tussen -20 en -15, en ook tussen -15 en -10, gebruiken we `steampunk_gauge_mgdl_20` voor de schaal, dan tussen -10 en -5 `steampunk_gauge_mgdl_10`, en zo verder tot +15 en +20, waar we weer de achtergrondafbeelding `steampunk_gauge_mgdl_20` gebruiken

(cwf-reference-dynamic-rotation-management)=

**freetext2 tot freetext4**

Voor deze views combineren we dynamische afbeeldingen met de rotatiefunctie die eerder is uitgelegd:

```text
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
Hier hoort elke view bij een eigen schaal (en is dus gekoppeld aan een eigen dynData-blok). Je ziet ook dat de key `"rotationOffset":` voor deze 3 views aan staat. Kijk nu naar het eerste dynData-blok:

```text
"avgDelta5": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "rotationOffset": {
        "minValue": -120,
        "maxValue": 120
    },
    "invalidImage": "null",
    "image1": "null",
    "image2": "null",
    "image3": "null",
    "image4": "steampunk_pointer",
    "image5": "steampunk_pointer",
    "image6": "null",
    "image7": "null",
    "image8": "null"
},
```
Ook al wordt het dynamische bereik hier alleen gebruikt tussen -5 en +5 avg_delta, het is belangrijk om het totale bereik van -20 tot +20 mgdl te houden. Zo blijft de wijzer gelijk lopen met de achtergrond als de schaal wisselt. Daarom houden we hetzelfde totale bereik als voor `avgDeltaBackground` en hetzelfde aantal stappen (8 afbeeldingen).

Je ziet dat `"invalidImage"` en ook een aantal `"imagexx"` de key-waarde `"null"` hebben (dit mag elke tekst zijn die niet als bestandsnaam in het zip-bestand bestaat). Als een bestandsnaam niet gevonden wordt, is de achtergrondafbeelding van de view transparant. Met deze instelling is de wijzer dus alleen zichtbaar bij stap 4 en stap 5 (gem. delta tussen -5 mgdl en +5 mgdl), en niet buiten dit bereik.

Nu zien we een nieuw blok `"rotationOffset":` met daarin twee keys: `"minValue":` en `"maxValue":`. Deze waarden worden gebruikt voor de omzetting tussen de interne gegevens (in mgdl) en de rotatiehoek die we willen.

- De Steampunk-watchface is zo ontworpen dat de wijzer maximaal van -30 graden tot 30 graden draait. Volgens de schaal (hier van -5 mgdl tot 5 mgdl) willen we dus 30 graden voor deze waarden. Omdat `minData` en `maxData` 4 keer groter zijn, zijn de bijbehorende minValues en maxValues 4 * 30 graden, dus -120 en +120 graden. Maar bij elke rotatie boven of onder +-30 graden is de wijzer verborgen (geen afbeelding zichtbaar), en de wijzer is alleen zichtbaar bij waarden tussen -5 en +5 mgdl... Dat is precies wat we hier willen.

De andere dynData-blokken worden op dezelfde manier gemaakt, om `"avgDelta10"` en `"avgDelta20"` aan te passen

#### loop view

in de Steampunk-watchface zijn de groene en rode pijlen van de loop (voor de status) uitgezet. Ook dit wordt beheerd met een apart dynData-blok dat bij de loop view hoort.

```text
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Omdat dit blok alleen door de loop view wordt aangeroepen, en de standaard gegevens van deze view de loop-informatie zijn, is de key `"valueKey":` niet verplicht.

De standaard `minData` en `maxData` voor de loop zijn 0 min en 28 min. Met twee afbeeldingen worden alle waarden onder 14 min dus getoond met achtergrond `image1`, en alle waarden boven 14 min met `image2`. 14 min is precies de grens waarop de groene pijl in een rode pijl verandert.

In dit voorbeeld zitten de bestanden `greyArrows`, `greenArrows` en `redArrows` niet in het zip-bestand. Deze pijlen worden dus gewoon weggehaald (onzichtbaar). Maar je kunt dit blok ook "zoals het is" gebruiken als je de statuspijlen wilt aanpassen met eigen achtergrondafbeeldingen.

#### views rig_battery en uploader_battery

Om het overzicht van de functie dynData af te ronden, kijken we naar het beheer van de batterij. Het idee is hier om de tekstkleur aan te passen aan het batterijniveau (van 0 tot 100%)

```text
"uploader_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 100,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "rig_battery",
    "topOffsetTwinHidden": -13
},
"rig_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 74,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "uploader_battery",
    "topOffsetTwinHidden": 13
},
```
Je ziet hier dat deze twee views hetzelfde `dynData`-blok delen, met de naam `batteryIcons`. Dat kan, omdat standaard de gegevens van de view zelf gekoppeld zijn (dus zonder een key `"valueKey":` in het blok `batteryIcons` wordt het toegepast op de gegevens van `uploader_battery` of van `rig_battery`, afhankelijk van de view).

Let op: deze twee views gebruiken ook de functie TwinView, die [hier](#cwf-reference-twinview-feature) wordt uitgelegd.

Laten we nu naar het dynData-blok kijken:

```text
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
Hier gebruiken we precies dezelfde logica als voor de dynamische achtergrondafbeelding, maar met eigen keys (`"invalidFontColor"` en `"fontColor1"` tot `"fontColor5"` om 5 stappen van elk 20% te maken).

- `"fontColor1"` (donkerrood) wordt gebruikt voor alle waarden onder 20%, en wit voor alle waarden boven deze grens.
- Als je de grens wilt verlagen naar "onder 10%", voeg je gewoon 5 extra keys toe, van `"fontColor6"` tot `"fontColor10"`. Je kunt ook elke kleur aanpassen als je een geleidelijke overgang wilt van groen naar geel, oranje en rood...

(cwf-reference-dynpref-feature)=

### Functie DynPref

Voordat je dit hoofdstuk leest, moet je begrijpen hoe [dynData](#cwf-reference-dyndata-feature) werkt, want DynPref is een geavanceerd gebruik van DynData: je kunt nu elk DynData-blok aanpassen volgens de instellingen van de gebruiker:

Om de functie DynPref uit te leggen, gebruiken we twee voorbeelden:

- De Steampunk-watchface (eenvoudig gebruik om een mgdl- en een mmol-versie in dezelfde watchface op te nemen; de watchface wisselt automatisch volgens de eenheid die in AAPS is gekozen).
- De watchface AAPS V2 combineert verschillende instellingen om de tekstkleur en de achtergrond te beheren volgens de instellingen dark en match divider.

#### Eenvoudig gebruik van dynPref in de Steampunk-watchface

In Steampunk hebben we twee sets afbeeldingen, afhankelijk van de eenheid: de afbeelding `background`, die de BG-schaal bevat en draait volgens de BG-waarde. en `freeText1`, die de dynamische schaal volgens de waarde van avgDelta bevat. Om één watchface te hebben die automatisch de juiste eenheid toont, moeten we de afbeelding kiezen volgens de gekozen eenheid.

Daarvoor vervangen we in het view-blok de key `dynData` door een key `dynPref`:

```text
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
Het gebruik van `dynPref`-keys lijkt heel veel op de `dynData`-keys uit het vorige hoofdstuk

Nu kijken we naar het einde van het json-bestand, na het blok `dynData`:

```text
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
Je ziet dat de dynPref-key uit het view-blok `background` (`"dynPref": "rotateSgv"`) voorkomt in het json-blok `dynPref` aan het einde van het json-bestand:

Dit blok moet een key `"prefKey"` bevatten, die bepaalt welke instelling gebruikt wordt. In dit voorbeeld is de key `"key_units"` gekoppeld aan de eenheid die in AAPS op de telefoon gekozen is. De waarde is `"true"` als de gekozen eenheid mgdl is, en `"false"` als de gekozen eenheid mmol is.

Daarna vind je twee json-blokken in het "dynData"-formaat. Welk blok gebruikt wordt, hangt af van de gekozen instelling

Let op: de vaste ("HardCoded") bestandsnaam voor de achtergrondafbeelding is nu vervangen door een dynamische afbeelding, die hetzelfde blijft wat de BG-waarde ook is (bestand `Background_mgdl.png` als key_units "true" is, `Background_mmol.png` als key_units false is). We voegen ook een key `"invalidImage"` toe, zodat er altijd een achtergrondafbeelding is, ook als er nog geen gegevens van de telefoon zijn ontvangen.

#### Verschillende instellingen combineren in dynPref met AAPS V2

Meestal stel je een instelling niet in voor "dynamisch gedrag", maar alleen voor het resultaat van wat je kiest. Maar in dynPref wordt het als een dynamische functie gezien...

- waar je in `dynData` één volledig blok met parameters opgeeft (met afbeeldingen, fontColor, Color, ...), kun je met `dynPref` elke parameter combineren volgens een bepaalde instelling.
- Hier zien we hoe de instelling match divider gekoppeld wordt aan de instelling dark: als deze aan staat (true), wordt witte tekst op een zwarte achtergrond getoond bij een donkere watchface (parameter dark true), of zwarte tekst op een witte achtergrond bij een lichte watchface (dark false)...

Laten we eerst naar het begin van het json-bestand kijken:

```text
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"` bepaalt het dynPref-blok voor alle standaardkleuren buiten de views. Deze kleuren worden aangepast volgens de parameter dark in `"prefColorDark"`:

En aan het einde, in het blok `dynPref`, heb je een apart dynPref-blok voor de standaardkleuren:

```text
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
Het verschil tussen dit dynPref-blok en de andere gewone dynPref-blokken voor views is dat je hier geen dynData-blok hebt voor elke waarde van de parameter `"key_dark"`, maar alleen de lijst met de hoofdkleuren (`highColor`, `midColor`, ...)

Laten we nu kijken naar de items in de "divider-banner" (in het voorbeeld hieronder de view `"basalRate"`, gekoppeld aan de dynPref-view `"matchDivider"`):

```text
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
Daarna zie je in het dynPref-blok dat de parameter Match divider (key `key_match_divider`) de 2 blokken "true" en "false" bevat. Maar deze twee blokken bepalen alleen dat de view óf het dynBlock "dark" gebruikt (dus precies dezelfde achtergrond- en tekstkleur als de andere views buiten de banner), óf het dynBLock "white", dat de achtergrond en de tekst de tegenovergestelde kleuren geeft...

```text
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
Let op: hier zit je in een "dynData"-blok. Om een color of een fontColor te bepalen, gebruik je dus een dynData (hier niet opgegeven) en één enkele stap (`"color1"` en `'fontColor1'` worden gebruikt)

- voor alle parameters behalve `image` is de standaard "ongeldige waarde" (als die niet apart is ingesteld met de key `"invalidColor"` of `"invalidFontColor"`) `"color1"` en `"fontColor1"`.



Daarna zien we een derde voorbeeld met de iob views (`iob1` en `iob2`), waar we kleinere tekst gebruiken voor gedetailleerde iob en grotere tekst voor de totale iob:

```text
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
Je ziet in de standaard view-instellingen de tekstgrootte (19 bij `iob1` en 24 bij `iob2`) en de twee verschillende `dynPref`-blokken die de textsize (volgens de parameter gedetailleerde iob) en de kleuren (volgens de parameter dark) moeten aanpassen

```text
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
Je ziet hier dat volgens de parameter gedetailleerde iob (key `"key_show_detailed_iob"`) de textsize een vaste waarde krijgt die groter is dan de standaard (24 in plaats van 19) als deze "true" is. Dit gebeurt met de "stap"-functie van textsize, met maar één waarde, dus één stap... (let op: voor alle parameters behalve afbeeldingen wordt textsize1 gebruikt voor ongeldige gegevens als invalidTextSize niet is ingesteld)

Daarna wordt het dynPref-blok "dark" gebruikt om color en fontColor in te stellen

In dit voorbeeld is het dynData-blok dat voor de view iob1 gebruikt wordt, als gedetailleerde IOB aan staat en dark aan staat:

```text
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

De tekst is dus wit op een zwarte achtergrond, en de grootte 24 vervangt de standaard grootte 19 uit de view

Het dynData-blok dat voor dezelfde view iob1 gebruikt wordt als gedetailleerde IOB uit staat en dark uit staat, is:

```text
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Nu is de tekst zwart op een witte achtergrond, met een grootte van 19

#### Tips en trucs voor dynPref

- Je kunt zoveel instellingen combineren als je wilt, maar let op: het aantal blokken dat je moet beschrijven kan heel snel groeien (exponentieel). Als je 3 parameters aan elkaar koppelt en alle situaties wilt bepalen, moet je 8 blokken beschrijven, als elke parameter maar 2 waarden heeft...
- Let op dat je geen "oneindige lus" maakt (bijvoorbeeld als blok dynpref1 aangevuld wordt door blok dynpref2, dat weer aangevuld wordt door blok dynpref1...). In dat geval worden de dynPref-blokken als ongeldig gezien...
- Vergeet niet de numerieke index achter de key te zetten (als je bijvoorbeeld de key `"textsize"` in een view gebruikt, moet je `"textsize1"` gebruiken in het waardeblok van dynPref, omdat het een "dynData"-formaat is, in dit geval gekoppeld aan een waarde met één stap)
- Er mag maar één key `"valueKey"` per view ingesteld worden. Als het uiteindelijke `dynData`-blok uit meerdere `dynPref`-blokken wordt opgebouwd, neem dan niet meerdere `"valueKey"` op (en ook niet de bijbehorende `"minData"`, `"maxData"`, ...)

(cwf-reference-new-v2-features)=

### Nieuwe functies in CustomWatchface V2 (AAPS V3.3.0 of hoger)

Let op: watchfaces die deze nieuwe functies of views gebruiken, hebben de nieuwste wear-apk nodig, gebouwd vanaf versie 3.3.0 van AAPS.

Als je een "v2"-zip gebruikt met een horloge dat CustomWachface V1 heeft, mist er informatie of staat er verkeerde inhoud in de watchface.

CustomWatchface V2 heeft deze nieuwe functies:

- [Nieuwe Status view](#cwf-reference-new-status-feature)
- [Nieuwe TempTarget view](#cwf-reference-new-temp-target-feature)
- [Nieuwe view voor het reservoirniveau](#cwf-reference-new-reservoir-level-feature)
- [Nieuwe opmaakfunctie](#cwf-reference-new-formating-feature)
- [Externe gegevens tonen voor volgers](#cwf-reference-show-external-datas) (tot 3 sets gegevens in één watchface, voor AAPS, AAPSCLIENT en AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Nieuwe Status view

De key van deze view is `"status"`. Het bijbehorende blok zit automatisch in de template die uit de wear-apk "Custom Watchface V2" wordt geëxporteerd (gebouwd vanaf AAPS versie 3.3.0 of hoger)

Deze view zat al in de eerdere watchfaces AAPS (NoChart), AAPS (BigChart) en AAPS (Large), en bevat een tekstwaarde (gemaakt in de wear-apk).

Deze eerdere watchfaces zijn verwijderd en in AAPS 3.3.0 vervangen door 3 nieuwe aangepaste watchfaces.

- de minimale informatie is de IOB-waarde (altijd zichtbaar, wat de IOB-parameter op het horloge ook is)
- daarna heb je de gedetailleerde IOB-waarden (BolusIOB|BasalIOB), als die in de instellingen aan staan
- en de BGI-waarde (ook als die in de instellingen aan staat)

Deze view `"status"` is gekoppeld aan de key `"key_show_loop_status"` (in dynPref) om de zichtbaarheid te beheren.

In V1 kon deze view gemaakt worden met de bestaande views `"iob1"`, `"iob2"` en `"bgi"`, maar daarvoor waren ingewikkelde dynPref-instellingen nodig om de ruimte tussen de informatie te beheren, afhankelijk van de instellingen die op het horloge gekozen zijn.

(cwf-reference-new-temp-target-feature)=

#### Nieuwe TempTarget view

De key van deze view is `"tempTarget"`. Het bijbehorende blok zit automatisch in de template die uit de wear-apk "Custom Watchface V2" wordt geëxporteerd (gebouwd vanaf AAPS versie 3.3.0 of hoger).

Hij toont in de watchface:

- Streefdoel van het profiel (één waarde of min-max streefdoelwaarden) (standaardkleur wit)
- Door de loop aangepast streefdoel (standaardkleur groen)
- Tijdelijk streefdoel ingesteld door de gebruiker (standaardkleur geel)

Deze view `"tempTarget"` is gekoppeld aan de key `"key_show_temp_target"` (in dynPref) om de zichtbaarheid te beheren.

De DynData-key (gekoppeld aan de kleurinformatie) is `"tempTarget"` (standaard DynData-key van de TempTarget view)

De DynData-waarde is:

- 0 (streefdoel van het profiel),
- 1 (streefdoel van de loop) of
- 2 (tijdelijk streefdoel van de gebruiker)

Let op: deze view is ook beschikbaar voor externe gegevens (zie [hieronder](#cwf-reference-show-external-datas)), met de keys `"tempTarget_Ext1"` en `"tempTarget_Ext2"` (view en DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Nieuwe view voor het reservoirniveau

De key van deze view is `"reservoir"`. Het bijbehorende blok zit automatisch in de template die uit de wear-apk "Custom Watchface V2" wordt geëxporteerd (gebouwd vanaf AAPS versie 3.3.0 of hoger).

Deze view toont het reservoirniveau (in `U`), standaard in het wit, geel bij het waarschuwingsniveau en rood bij het urgente niveau

Deze view `"reservoir"` is gekoppeld aan de key `"key_show_reservoir_level"` (in dynPref) om de zichtbaarheid te beheren.

De DynData-keys die bij het reservoirniveau horen zijn:

-  `"reservoir"` (standaard DynData-key van de view voor het reservoirniveau), gekoppeld aan het niveau in insuline-eenheden `U`
  - Minimale waarde is 0,0 E
  - Maximale waarde is 500,0 E
-  `"reservoirLevel"`
  - 0 (standaard niveau, standaard witte kleur)
  - 1 (waarschuwingsniveau, standaard gele kleur)
  - 2 (urgent niveau, standaard rode kleur)

Let op: deze view is ook beschikbaar voor externe gegevens (zie [hieronder](#cwf-reference-show-external-datas)), met de keys `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` en `"reservoirLevel_Ext2"` (view en DynData).

(cwf-reference-new-formating-feature)=

#### Nieuwe opmaakfunctie voor DynData of DynPref

Je kunt nu een eigen opmaak instellen voor de ruwe waarden die het horloge ontvangt en die in de [tabel met dyndata-key-waarden](#cwf-reference-dyndata-key-values) hieronder staan.

Om te laten zien hoe deze functie werkt, nemen we als voorbeeld de watchface AAPS (Large) en kijken we naar het resultaat, afhankelijk van de waarde "tijd geleden" en of de nieuwe view "status" zichtbaar is of niet:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- In de eerste schermafbeelding links is de status view zichtbaar (met IOB, gedetailleerde IOB en BGI). Er is dus maar 1/3 van de regel beschikbaar om de timestamp te tonen (heel compacte informatie met `1'`, en voor de batterij van de uploader `U: 55%`)
- In de tweede schermafbeelding is de view `status` verborgen in de parameters van het horloge. Er is dus veel ruimte om het volledige label voor de timestamp en de batterij van de uploader te tonen (`1 minute ago` en `Uploader : 55%`)
- In de derde schermafbeelding rechts zijn de instellingen op het horloge precies hetzelfde, maar nu is de timestamp veranderd en hoger dan "1". nu kan de aangepaste watchface het label tonen, bijgewerkt met enkelvoud en meervoud (`2 minutes ago`)

Ik leg hieronder niet uit hoe alle views in het zip-bestand beheerd worden (positie van elke view volgens verschillende instellingen). Ik richt me alleen op hoe we de opmaakfunctie en de bijbehorende dynamische waarde in de watchface AAPS (Large) beheren.



**Deze functie heeft een "dynamisch blok" nodig** (dit kan een `dynData`-blok of een `dynPref`-blok zijn)

- Voor de watchface AAPS (Large) wilden we het formaat aanpassen aan de parameters (kort of lang formaat, afhankelijk van de zichtbaarheid van de view `status`). Daarom hebben we daarvoor een `dynPref`-blok gebruikt.

Laten we eerst met de views beginnen:

```text
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
hier is de belangrijkste key `"dynValue"`: met deze key wordt het dynamisch beheer van de ruwe waarde aangezet. de boolean erachter (true of false) bepaalt of de waarde wel of niet "omgezet" wordt

- `false`: de ruwe waarde wordt gebruikt zoals hij is, zonder beperking of omzetting
- `true`: de ruwe waarde wordt omgezet (met de keys `minData` en `maxData` in het dynData-blok, en met `minValue` en `maxValue` uit dynData)

Voor deze watchface worden de ruwe waarden zonder omzetting gebruikt. Voor beide views staat de key `"dynValue"` dus op `false`.



Nu kijken we naar het blok `"uploader"` in `"dynPref"`:

```text
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
Standaard is de view `"uploader_battery"` gekoppeld aan `"uploader_battery"`, dus je hoeft geen aparte regel toe te voegen met

`"valueKey": "uploader_battery"` (minimale waarde 0, maximale waarde 100, en de ruwe waarde is het batterijpercentage van de telefoon)

De opmaakstring staat in de key `"textvalue1"` (de keys `"textvalue1"`, `"textvalue2"`, enz. zijn gekoppeld aan de key `"textvalue"`, die in het blok `view` kan staan)

- De key `"textvalue"` kan met opmaakinformatie in het view-blok gebruikt worden (in dat geval is de opmaak vast, wat de waarde of de instellingen ook zijn)
- Als je de opmaak wilt aanpassen volgens instellingen of waarden, kun je alle functies van dynData gebruiken. De speciale keys zijn `"invalidTextValue"` (zonder "opmaakinformatie", omdat de waarde niet geldig is) en `"textvalue1"`, `"textvalue2"`... (en zoveel waarden als je stappen wilt tussen minData en maxData)
- de extra `"dynPref"`-keys worden gebruikt om andere blokken te bepalen, voor verschillen in positie en kleur, afhankelijk van de zichtbare views en de instellingen dark en matchDivider

De syntax van de opmaakstring is als volgt: `%[flags][width][.precision]f`

- `%` is het begin van een opmaak, `f` is het einde en moet gebruikt worden voor de omzetting van een Double-waarde.
  - Let op: als je het teken `%` in je tekst wilt gebruiken, moet je `%%` schrijven, om aan te geven dat het geen opmaakstring is maar een procentteken.
- `[flag]` is niet verplicht. Meestal is het `+` als je altijd een teken voor het getal wilt, of `(` als je negatieve waarden tussen haakjes wilt
- `[width]` is niet verplicht en bepaalt het minimale aantal tekens in de uitvoer
- `[.precision]` bepaalt het aantal cijfers na de decimale komma.
  - Let op: de waarden zijn van het type Double, dus het is verstandig om altijd een precisie in te stellen (anders krijg je door de precisie van kotlin veel tekens na de komma)

In het voorbeeld hierboven toont `%.0f` de Double-waarde dus als een geheel getal



Laten we nu naar het dynPref-blok van timestamp kijken, om enkelvoud en meervoud te beheren:

```text
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- als hier de view `status` zichtbaar is (dus de key `"key_show_loop_status"` is `true`), wordt één formaat gebruikt (`"textvalue1"`), met `'` als "eenheid"
- als de view `status` verborgen is, worden 2 verschillende formaten gebruikt: één voor 0 of 1 in het enkelvoud, en een ander voor waarden vanaf 2 in het meervoud
  - `"minData"` en `"maxData"` worden gebruikt om het bereik te bepalen, zodat de overgang van enkelvoud naar meervoud tussen de waarden 1 en 2 gebeurt
  - Let op: `"maxData"` (geheel getal) staat op 3 en niet op 2, omdat de Double-gegevens in het systeem geen gehele getallen zijn. Een waarde net boven of net onder 1 kan dan het enkelvoud of het meervoud krijgen, ook als de waarde na afronden gelijk is aan 1.

- Voor de view `timestamp` is het belangrijk om de key `"dynValue"` op `false` te zetten. Anders worden door de opmaak (enkelvoud/meervoud) alle waarden boven 3 begrensd op `3 minutes ago`, door de omzetting met `maxData`...



**Extra opmerkingen over de opmaakfunctie**

- onthoud dat alleen de dynamische waarden beschikbaar zijn die [hier](#cwf-reference-dyndata-key-values) staan
- Alle `BG`-waarden zijn in mgdl. Als je de opmaakfunctie wilt gebruiken om waarden in mmol te tonen, moet je zelf de omzetting van mgdl naar mmol regelen. In een `dynData`- of `dynPref`-blok moet de key voor het blok met `"minValue"` en `"maxValue"` voor de omzetting van de waarde `"dynValue": { ...  }` heten. (zie [DynData-keys](#cwf-reference-dyndata-keys))
- Als je in een view een vaste opmaakstring wilt gebruiken, met de key `"textvalue"` om het formaat te bepalen en de key `"dynValue"` om de dynamische waarde te gebruiken, dan moet je ook een `"dynData"`- of `"dynPref"`-blok gebruiken (ook als dat leeg is) om de opmaakfunctie te kunnen gebruiken.
- `"textvalue1"`, `"textvalue2"` tot textvalue*n* kunnen ook zonder opmaakfunctie gebruikt worden, om een stap van de double-waarde te vervangen door een eigen tekstlabel (bijvoorbeeld met de key-waarde `"day_name"` en zeven stappen om eigen namen voor de dagen van de week te bepalen, ... )

- Voor de volledige documentatie kun je [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html) bekijken

(cwf-reference-show-external-datas)=

#### Externe gegevens tonen voor volgers

Custom Watchface kan nu op dezelfde watchface tot 3 sets gegevens tonen: AAPS, AAPSCLIENT en AAPSCLIENT2

Om deze functie te gebruiken, moet je:

- minstens 2 van de volgende 3 apps op de telefoon geïnstalleerd hebben (AAPS, AAPSCLIENT, AAPSCLIENT2)
- Broadcast data aanzetten in AAPSCLIENT en/of AAPSCLIENT2, om gegevens te versturen naar de hoofdapp die met CustomWatchface synchroniseert (AAPS of AAPSCLIENT)
- Gebruik een CustomWatchface met views waarvan de key `_Ext1` of `_Ext2` bevat (zie [Overzicht van Key en KeyValue](#cwf-reference-key-and-keyvalue-reference) hieronder)

Let op: als de hoofdapp op de telefoon AAPSCLIENT is en de tweede app die gegevens verstuurt AAPSCLIENT2 is, moet je de parameter `Switch external data in watchface` aanzetten in de parameters van Custom Watchface, als je een watchface gebruikt met standaard views en extra Ext1-views (Ext1 is gekoppeld aan AAPSCLIENT en Ext2 aan AAPSCLIENT2)

Daarnaast zijn er drie nieuwe views toegevoegd (`"patient_name"`, `"patient_name_Ext1"` en `"patient_name_Ext2"` *) om automatisch de naam van de patiënt (ingesteld in de instellingen van AAPS) in de watchface te tonen (zie het voorbeeld hieronder)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Overzicht van Key en KeyValue

(cwf-reference-list-of-metadata-keys)=

### Lijst van metadata-keys

(cwf-reference-list-of-standard-metadata-keys)=

#### Lijst van standaard metadata-keys met informatie

| Key                | Commentaar                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Naam van de aangepaste watchface                                                                                             |
| `"author"`         | Naam of pseudoniem van de auteur(s)                                                                                          |
| `"created_at"`     | Datum van maken (of bijwerken). Let op: `/` is een speciaal teken, dus als je het in de datum gebruikt, zet er dan `\` voor |
| `"cwf_version"`    | Watchface-plugin die past bij het ontwerp van je watchface                                                                   |
| `"author_version"` | De auteur kan hier de versie van zijn watchface opgeven                                                                      |
| `"comment"`        | Vrije tekst om informatie of beperkingen van deze watchface te geven                                                         |

(cwf-reference-preference-keys)=

#### Keys voor instellingen

| Key                           | Standaard waarde en commentaar                                                                                                                                                                                                                                                                |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true vergrendelt gedetailleerde IOB-gegevens op view `iob2`; dan toont `iob1` (als die zichtbaar is en niet door een icoon vervangen) de totale iob.<br />false vergrendelt de totale iob op view `iob2`. kan gebruikt worden als `iob2` te smal is om gedetailleerde iob goed te tonen |
| `"key_show_detailed_delta"`   | false (alleen als het ontwerp niet past bij de breedte van gedetailleerde delta voor de views `delta` en `avg_delta`)                                                                                                                                                                         |
| `"key_show_bgi"`              | true als je ontwerp `bgi`-informatie nodig heeft                                                                                                                                                                                                                                              |
| `"key_show_iob"`              | true als je ontwerp de views `iob1` of `iob2` nodig heeft                                                                                                                                                                                                                                     |
| `"key_show_cob"`              | true als je ontwerp de views `cob1` of `cob2` nodig heeft                                                                                                                                                                                                                                     |
| `"key_show_delta"`            | true als je ontwerp `delta`-informatie nodig heeft                                                                                                                                                                                                                                            |
| `"key_show_avg_delta"`        | true als je ontwerp `avg_delta`-informatie nodig heeft                                                                                                                                                                                                                                        |
| `"key_show_temp_target"`      | true als je ontwerp `tempTarget`-informatie nodig heeft                                                                                                                                                                                                                                       |
| `"key_show_reservoir_level"`  | true als je ontwerp `reservoir`-informatie nodig heeft                                                                                                                                                                                                                                        |
| `"key_show_uploader_battery"` | true als je ontwerp `uploader_battery`-informatie (batterij van de telefoon) nodig heeft                                                                                                                                                                                                      |
| `"key_show_rig_battery"`      | true als je ontwerp `rig_battery`-informatie nodig heeft                                                                                                                                                                                                                                      |
| `"key_show_temp_basal"`       | true als je ontwerp `basalRate`-informatie nodig heeft                                                                                                                                                                                                                                        |
| `"key_show_direction"`        | true als je ontwerp `direction`-informatie (pijlen voor de BG-trend) nodig heeft                                                                                                                                                                                                              |
| `"key_show_ago"`              | true als je ontwerp `timestamp`-informatie (minuten geleden sinds de laatst ontvangen BG) nodig heeft                                                                                                                                                                                         |
| `"key_show_bg"`               | true als je ontwerp `sgv`-informatie (BG-waarde) nodig heeft                                                                                                                                                                                                                                  |
| `"key_show_loop_status"`      | true als je ontwerp `loop`-informatie (loop-status en tijd geleden) nodig heeft                                                                                                                                                                                                               |
| `"key_show_week_number"`      | true als je ontwerp `week_number`-informatie nodig heeft                                                                                                                                                                                                                                      |
| `"key_show_date"`             | true als je ontwerp de informatie `Date`, `Month` of `Day of the week` nodig heeft                                                                                                                                                                                                            |

#### Interne keys

| Key                   | Commentaar                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"filename"`          | Deze key wordt automatisch gemaakt (of bijgewerkt) als de watchface wordt geladen, en bevat de naam van het lokale zip-bestand in de map exports                                                                        |
| `"cwf_authorization"` | deze key wordt gemaakt (als de watchface wordt geladen) en bijgewerkt elke keer als de toestemmingsinstelling in de Wear-instellingen verandert. Hij wordt gebruikt om de toestemming met het horloge te synchroniseren |

(cwf-reference-list-of-general-parameters)=

### Lijst van algemene parameters

| Key                      | Commentaar                                                                                                                                                                                                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"` (standaard geel): kleur van de BG-waarde, de trendpijlen en de BG-waarde in de grafiek als de BG boven de bovengrens is (hyper)                                                                                                                                        |
| `"midColor"`             | `"#00FF00"` (standaard groen): kleur van de BG-waarde, de trendpijlen en de BG-waarde in de grafiek als de BG binnen bereik is                                                                                                                                                     |
| `"lowColor"`             | `"#FF0000"` (standaard rood): kleur van de BG-waarde, de trendpijlen en de BG-waarde in de grafiek als de BG onder de ondergrens is (hypo)                                                                                                                                         |
| `"lowBatColor"`          | `"#E53935"` (standaard donkerrood): kleur van `uploader_battery` als de waarde laag is (onder 20%, nog te bevestigen)                                                                                                                                                              |
| `"carbColor"`            | `"#FB8C00"` (standaard oranje): kleur van de koolhydratenpunten in de grafiek                                                                                                                                                                                                      |
| `"basalBackgroundColor"` | `"#0000FF"` (standaard donkerblauw): kleur van de TBR-curve in de grafiek                                                                                                                                                                                                          |
| `"basalCenterColor"`     | `"#64B5F6"` (standaard lichtblauw): kleur van de bolus- of SMB-punten in de grafiek                                                                                                                                                                                                |
| `"gridColor"`            | `"#FFFFFF"` (standaard wit): kleur van de lijnen en de tekst van de schaal in de grafiek                                                                                                                                                                                           |
| `"pointSize"`            | 2 (standaard): grootte van de punten in de grafiek (1 voor kleine punten, 2 voor grote punten)                                                                                                                                                                                     |
| `"enableSecond"`         | false (standaard): bepaalt of de watchface seconden toont in de views `time`, `second` of `second_hand`. het is belangrijk dat de zichtbaarheid van de views en deze algemene instelling bij elkaar passen. Deze instelling zorgt ervoor dat de tijd elke seconde wordt bijgewerkt |
| `"dayNameFormat"`        | "E" (standaard): van "E" tot "EEEE" bepaalt het formaat van de dagnaam (nummer, korte naam, volledige naam), nog te bevestigen                                                                                                                                                     |
| `"monthFormat"`          | "MMM" (standaard): van "M" tot "MMMM" bepaalt het formaat van de maand (nummer, korte naam, volledige naam)                                                                                                                                                                        |

(cwf-reference-list-of-hardcoded-resource-files)=

### Lijst van vaste bronbestanden

Bij de meeste afbeeldingen kun je met de toevoeging High en Low de afbeelding aanpassen aan het BG-niveau (binnen bereik, hyper of hypo)

| Bestandsnamen                                                   | Commentaar                                                                                                                                                                                                 |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomWatchface                                                 | Afbeelding die getoond wordt bij het kiezen van de watchface en in de Wear-plugin                                                                                                                          |
| Background,<br />BackgroundHigh,<br />BackgroundLow | geen (standaard zwart): achtergrondafbeelding. de achtergrond is altijd zichtbaar, en de standaardkleur is zwart als er geen afbeelding is. De kleur kan worden aangepast aan het ontwerp van de watchface |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | geen (standaard): afbeelding vóór de grafiek (er moet transparantie zijn om de grafiek erachter te zien). Kan gebruikt worden om de randen van de grafiek te begrenzen                                     |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | eenvoudige wijzerplaat (standaard): afbeelding vóór alle tekstwaarden. transparantie is verplicht om alle waarden te zien die erachter liggen                                                              |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (standaard): afbeelding van de uurwijzer. er is een standaard afbeelding, die je een kleur kunt geven die past bij een analoog ontwerp. Let op: de draaias is het midden van de afbeelding       |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (standaard): afbeelding van de minutenwijzer. er is een standaard afbeelding, die je een kleur kunt geven die past bij een analoog ontwerp. Let op: de draaias is het midden van de afbeelding |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (standaard): afbeelding van de secondewijzer. er is een standaard afbeelding, die je een kleur kunt geven die past bij een analoog ontwerp. Let op: de draaias is het midden van de afbeelding |
| ArrowNone                                                       | ?? (standaard): afbeelding die getoond wordt als er geen geldige pijl is.                                                                                                                                  |
| ArrowDoubleUp                                                   | ↑↑ (standaard): afbeelding van een dubbele pijl omhoog                                                                                                                                                     |
| ArrowSingleUp                                                   | ↑ (standaard): afbeelding van een enkele pijl omhoog                                                                                                                                                       |
| Arrow45Up                                                       | ↗ (standaard): afbeelding van een schuine pijl omhoog (45 graden)                                                                                                                                          |
| ArrowFlat                                                       | → (standaard): afbeelding van een vlakke pijl                                                                                                                                                              |
| Arrow45Down                                                     | ↘ (standaard): afbeelding van een schuine pijl omlaag (45 graden)                                                                                                                                          |
| ArrowSingleDown                                                 | ↓ (standaard): afbeelding van een enkele pijl omlaag                                                                                                                                                       |
| ArrowDoubleDown                                                 | ↓↓ (standaard): afbeelding van een dubbele pijl omlaag                                                                                                                                                     |

Voor elke bestandsnaam hierboven kan de extensie `.jpg`, `.png` of `.svg` zijn. Maar let op: `.jpg` ondersteunt geen transparantie (dus de meeste bestanden moeten .png of .svg zijn, om views erachter niet te verbergen...)

(cwf-reference-list-of-view-keys)=

### Lijst van view-keys

Deze lijst staat in volgorde van achtergrond naar voorgrond. Het is heel belangrijk om deze volgorde te kennen als je je watchface opbouwt, omdat sommige afbeeldingen of teksten door andere afbeeldingen verborgen kunnen worden.

Let op: alle keys die eindigen op `_Ext1` of `_Ext2` zijn nieuw en bedoeld voor watchfaces met meerdere gebruikers.

| Key                                                                                    | Type view           | Gekoppelde gegevens                                                                                                                                                         | DynData-key                                                                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Image View          |                                                                                                                                                                             |                                                                                                                                                  |
| `"chart"`                                                                              | Speciale Chart View | Grafische curves                                                                                                                                                            |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Image View          |                                                                                                                                                                             |                                                                                                                                                  |
| `"freetext1"`                                                                          | Text View           |                                                                                                                                                                             |                                                                                                                                                  |
| `"freetext2"`                                                                          | Text View           |                                                                                                                                                                             |                                                                                                                                                  |
| `"freetext3"`                                                                          | Text View           |                                                                                                                                                                             |                                                                                                                                                  |
| `"freetext4"`                                                                          | Text View           |                                                                                                                                                                             |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Text View           | Naam patiënt                                                                                                                                                                |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Text View           | IOB-label of totale IOB                                                                                                                                                     |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Text View           | Totale IOB of gedetailleerde IOB                                                                                                                                            |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Text View           | Khd-label                                                                                                                                                                   |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Text View           | COB-waarde                                                                                                                                                                  |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Text View           | Korte delta (5 min)                                                                                                                                                         | delta  
delta_Ext1<br/>delta_Ext2                                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Text View           | Gem. delta (15 min)                                                                                                                                                         | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Text View           | BG-streefdoel (één waarde of min-max streefdoelwaarden)                                                                                                                     | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Text View           | Reservoir niveau                                                                                                                                                            | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Text View           | batterijniveau van de telefoon (%)                                                                                                                                          | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Text View           | batterijniveau van de rig (%)                                                                                                                                               | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Text View           | % of absolute waarde                                                                                                                                                        |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi_Ext2"` *                              | Text View           | mgdl/(5 min) of mmol/(5 min)                                                                                                                                                |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Text View           | Samenvatting van IOB (wat de IOB-instelling op het horloge ook is), gedetailleerde IOB (volgens de instelling op het horloge) en BGI (volgens de instelling op het horloge) |                                                                                                                                                  |
| `"time"`                                                                               | Text View           | HH:MM of HH:MM:SS                                                                                                                                                           |                                                                                                                                                  |
| `"hour"`                                                                               | Text View           | HH                                                                                                                                                                          |                                                                                                                                                  |
| `"minute"`                                                                             | Text View           | MM                                                                                                                                                                          |                                                                                                                                                  |
| `"second"`                                                                             | Text View           | SS                                                                                                                                                                          |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Text View           | AM of PM                                                                                                                                                                    |                                                                                                                                                  |
| `"day_name"`                                                                           | Text View           | naam van de dag (zie dayNameFormat)                                                                                                                                         | day_name                                                                                                                                         |
| `"day"`                                                                                | Text View           | DD datum                                                                                                                                                                    | day                                                                                                                                              |
| `"week_number"`                                                                        | Text View           | (WW) weeknummer                                                                                                                                                             | week_number                                                                                                                                      |
| `"month"`                                                                              | Text View           | naam van de maand (zie monthFormat)                                                                                                                                         |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Text View           | minuten geleden sinds de laatste run, en status (gekleurde pijlen op de achtergrond). De gekleurde pijlen kun je aanpassen met DynData                                      | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Image View          | TrendArrows                                                                                                                                                                 | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Text View           | geheel getal (minuten geleden)                                                                                                                                              | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Text View           | sgv-waarde (mgdl of mmol)                                                                                                                                                   | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Image View          |                                                                                                                                                                             |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Image View          |                                                                                                                                                                             |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Image View          |                                                                                                                                                                             |                                                                                                                                                  |
| `"second_hand"`                                                                        | Image View          |                                                                                                                                                                             |                                                                                                                                                  |

**View toegevoegd in Custom Watchface V2.0 of hoger (beschikbaar in de wear-apk van AAPS 3.3.0 of hoger)*

(cwf-reference-list-of-json-keys)=

### Lijst van json-keys

(cwf-reference-common-keys)=

#### Algemene keys

 die je bij alle soorten views kunt gebruiken (Text View, Image View, grafiek-view)

| Key                      | type    | commentaar / waarde                                                                                                                                                                                            |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"width"`                | int     | breedte van de view in pixels                                                                                                                                                                                  |
| `"height"`               | int     | hoogte van de view in pixels                                                                                                                                                                                   |
| `"topmargin"`            | int     | bovenmarge in pixels                                                                                                                                                                                           |
| `"leftmargin"`           | int     | linkermarge in pixels                                                                                                                                                                                          |
| `"rotation"`             | int     | rotatiehoek in graden                                                                                                                                                                                          |
| `"visibility"`           | string  | zie de tabel met key-waarden                                                                                                                                                                                   |
| `"dynData"`              | string  | naam van het key-blok dat bepaalt welke dynamische gegevens gekoppeld worden, met de bijbehorende animatie (kleuren, afbeelding, verschuiving, rotatie)<br />`"dynData": "customName",` (zie hieronder)  |
| `"leftOffset"`           | boolean | neem deze key op met key-waarde true om horizontale verschuiving (positieve of negatieve waarde) volgens de dynData-waarde aan te zetten                                                                       |
| `"topOffset"`            | boolean | neem deze key op met key-waarde true om verticale verschuiving (positieve of negatieve waarde) volgens de dynData-waarde aan te zetten                                                                         |
| `"rotationOffset"`       | boolean | neem deze key op met key-waarde true om rotatie (positieve of negatieve waarde) volgens de dynData-waarde aan te zetten                                                                                        |
| `"twinView"`             | string  | key van de andere view (meestal heeft de andere view ook de parameter twinView, met daarin de key van deze view)                                                                                               |
| `"topOffsetTwinHidden"`  | int     | aantal pixels waarmee de view verticaal verschuift als de twin view verborgen is (positieve of negatieve waarde)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2                  |
| `"leftOffsetTwinHidden"` | int     | aantal pixels waarmee de view horizontaal verschuift als de twin view verborgen is (positieve of negatieve waarde)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2              |
| `"dynPref"`              | string  | naam van het key-blok dat bepaalt welke dynamische instelling gekoppeld wordt, met de bijbehorende animatie (kleuren, afbeelding, verschuiving, rotatie)<br />`"dynPref": "customName",` (zie hieronder) |

(cwf-reference-textview-keys)=

#### TextView-keys

| Key            | type    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   | int     | lettergrootte in pixels (onthoud dat een lettertype een boven- en ondermarge kan hebben, dus de echte tekstgrootte is meestal kleiner dan het ingestelde aantal pixels). Let op: de grootte moet kleiner zijn dan de hoogte van de view, anders wordt de tekst afgesneden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `"gravity"`    | string  | zie de tabel met key-waarden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"font"`       | string  | zie de tabel met key-waarden voor de beschikbare lettertypen.<br />Kan ook de bestandsnaam (zonder extensie) zijn van een lettertype in het zip-bestand                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `"fontStyle"`  | string  | zie de tabel met key-waarden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"fontColor"`  | string  | Beheert de kleur van het lettertype<br />`"#RRGGBB"`: kleurcode in RGB-formaat, hexadecimale waarden, #FF0000 is rood<br />`"#AARRGGBB"`: AA bevat de alfa-informatie (transparantie), 00 is transparant, FF is ondoorzichtig<br />`"bgColor"`: de keyValue bgColor is een makkelijke manier om highColor, midColor of lowColor te gebruiken, volgens de BG-waarde                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `"allCaps"`    | boolean | true als je de tekst in hoofdletters wilt (vooral voor de naam van de dag of de maand)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `"background"` | string  | `resource_filename`: je kunt een afbeelding als achtergrond van de text view opnemen (het bestand wordt geschaald naar de hoogte en breedte van de text view, maar de verhouding van de afbeelding blijft gelijk). de tekstwaarde ligt vóór de achtergrondafbeelding.<br />- Let op: deze key kan ook voor de view `chart` gebruikt worden, om een eigen achtergrond voor de grafiek in te stellen, vóór de achtergrondafbeelding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"color"`      | string  | Beheert de achtergrondkleur van de view, of past de kleur van een afbeelding aan (alleen bij bitmaps)<br />`"#RRGGBB"`: kleurcode in RGB-formaat, hexadecimale waarden, #FF0000 is rood<br />`"#AARRGGBB"`: AA bevat de alfa-informatie (transparantie), 00 is transparant, FF is ondoorzichtig<br />`"bgColor"`: de keyValue bgColor is een makkelijke manier om highColor, midColor of lowColor te gebruiken, volgens de BG-waarde<br />- Voor de standaard ingebouwde afbeeldingen (wijzer, wijzerplaat) wordt de kleur direct toegepast. Voor een bitmapafbeelding (jpg of png) wordt een filter met verzadigingsverloop op de afbeelding toegepast<br />- Voor svg heeft deze parameter geen effect (de kleur van svg-bestanden kan niet worden veranderd)<br />- Let op: deze key kan ook voor de view `chart` gebruikt worden, om een eigen achtergrond voor de grafiek in te stellen, vóór de achtergrondafbeelding |
| `"textvalue"`  | string  | Key alleen voor de 4 free text views in de layout (van freetext1 tot freetext4). Hiermee stel je de tekst in die getoond wordt (dit kan een label zijn, of alleen `:` als je een scheidingsteken wilt tussen de uur view en de minuut view...)  
Vanaf Custom Watchface plugin v2 (AAPS 3.3) kan textvalue ook een opmaakstring bevatten voor de andere textViews (te gebruiken met de key `dynValue` en `dynData` of `dynPref`). bijvoorbeeld                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"dynValue"`*  | boolean | true als je de ruwe waarde (double) wilt opnemen. Handig samen met de key `textvalue`, als je een eigen formaat wilt om de waarde te tonen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Key toegevoegd in Custom Watchface V2.0 of hoger (beschikbaar in de wear-apk van AAPS 3.3.0 of hoger)*

(cwf-reference-imageview-keys)=

#### ImageView-keys

| Key       | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Beheert de achtergrondkleur van de view, of past de kleur van een afbeelding aan (alleen bij bitmaps)<br />`"#RRGGBB"`: kleurcode in RGB-formaat, hexadecimale waarden, #FF0000 is rood<br />`"#AARRGGBB"`: AA bevat de alfa-informatie (transparantie), 00 is transparant, FF is ondoorzichtig<br />`"bgColor"`: de keyValue bgColor is een makkelijke manier om highColor, midColor of lowColor te gebruiken, volgens de BG-waarde<br />- Voor de standaard ingebouwde afbeeldingen (wijzer, wijzerplaat) wordt de kleur direct toegepast. Voor een bitmapafbeelding (jpg of png) wordt een filter met verzadigingsverloop op de afbeelding toegepast<br />- Voor svg heeft deze parameter geen effect (de kleur van svg-bestanden kan niet worden veranderd)<br />- Let op: deze key kan ook voor de view `chart` gebruikt worden, om een eigen achtergrond voor de grafiek in te stellen, vóór de achtergrondafbeelding |

(cwf-reference-chartview-keys)=

#### ChartView-keys

| Key            | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Beheert de achtergrondkleur van de view, of past de kleur van een afbeelding aan (alleen bij bitmaps)<br />`"#RRGGBB"`: kleurcode in RGB-formaat, hexadecimale waarden, #FF0000 is rood<br />`"#AARRGGBB"`: AA bevat de alfa-informatie (transparantie), 00 is transparant, FF is ondoorzichtig<br />`"bgColor"`: de keyValue bgColor is een makkelijke manier om highColor, midColor of lowColor te gebruiken, volgens de BG-waarde<br />- Voor de standaard ingebouwde afbeeldingen (wijzer, wijzerplaat) wordt de kleur direct toegepast. Voor een bitmapafbeelding (jpg of png) wordt een filter met verzadigingsverloop op de afbeelding toegepast<br />- Voor svg heeft deze parameter geen effect (de kleur van svg-bestanden kan niet worden veranderd)<br />- Let op: deze key kan ook voor de view `chart` gebruikt worden, om een eigen achtergrond voor de grafiek in te stellen, vóór de achtergrondafbeelding |
| `"background"` | string | `resource_filename`: je kunt een afbeelding als achtergrond van de text view opnemen (het bestand wordt geschaald naar de hoogte en breedte van de text view, maar de verhouding van de afbeelding blijft gelijk). de tekstwaarde ligt vóór de achtergrondafbeelding.<br />- Let op: deze key kan ook voor de view `chart` gebruikt worden, om een eigen achtergrond voor de grafiek in te stellen, vóór de achtergrondafbeelding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

(cwf-reference-key-values)=

### Key-waarden

| Key-waarde                   | key        | comment                                                                                             |
| ---------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `"gone"`                     | visibility | view verborgen                                                                                      |
| `"visible"`                  | visibility | view zichtbaar in de watchface (maar de zichtbaarheid kan in de parameters aan- of uitgezet worden) |
| `"center"`                   | gravity    | tekst is verticaal en horizontaal gecentreerd in de view                                            |
| `"left"`                     | gravity    | tekst is verticaal gecentreerd, maar links uitgelijnd in de view                                    |
| `"right"`                    | gravity    | tekst is verticaal gecentreerd, maar rechts uitgelijnd in de view                                   |
| `"sans_serif"`               | font       |                                                                                                     |
| `"default"`                  | font       |                                                                                                     |
| `"default_bold"`             | font       |                                                                                                     |
| `"monospace"`                | font       |                                                                                                     |
| `"serif"`                    | font       |                                                                                                     |
| `"roboto_condensed_bold"`    | font       |                                                                                                     |
| `"roboto_condensed_light"`   | font       |                                                                                                     |
| `"roboto_condensed_regular"` | font       |                                                                                                     |
| `"roboto_slab_light"`        | font       |                                                                                                     |
| `"normal"`                   | fontStyle  |                                                                                                     |
| `"bold"`                     | fontStyle  |                                                                                                     |
| `"bold_italic"`              | fontStyle  |                                                                                                     |
| `"italic"`                   | fontStyle  |                                                                                                     |

(cwf-reference-dyndata-keys)=

### DynData-keys

| Key                       | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | blok   | bepaalt het blok met alle dynamische gegevensblokken die voor de views gebruikt worden. meestal na de laatste view.<br />Alle keys in dit blok worden gebruikt als key-waarde in het view-blok:<br />`"dynData": { dynData blocks }`<br />en elk blok heeft een eigen naam en bevat een aantal keys:<br />`"customName": { one dynData block }`                                                                                                                                                                             |
| `"valueKey"`              | string | naam van de dynamische gegevens die gebruikt worden (meestal dezelfde als de bijbehorende view-key).<br />Als deze er niet is, worden standaard de waarden gebruikt van de view die dit blok gebruikt. <br />je kunt bijvoorbeeld één blok maken om het batterijpercentage aan te passen zonder valueKey op te geven, en daarna hetzelfde blok gebruiken voor uploader_battery en rig_battery                                                                                                                                         |
| `"minData"`               | int    | bepaalt de minimale waarde van de AAPS-gegevens waarmee rekening wordt gehouden. Bijvoorbeeld: als de waarde sgv is (intern in mgdl) en minData staat op 50, worden alle BG-waarden onder 50 mgdl op 50 gezet.<br />- Let op: minData en maxData worden gebruikt om de dynamische waarden te berekenen (in pixels of in graden).                                                                                                                                                                                                              |
| `"maxData"`               | int    | bepaalt de maximale waarde van de AAPS-gegevens waarmee rekening wordt gehouden. Bijvoorbeeld: als de waarde sgv is (intern in mgdl) en maxData staat op 330, worden alle BG-waarden boven 330 mgdl op 330 gezet.                                                                                                                                                                                                                                                                                                                                   |
| `"leftOffset"`            | blok   | Bepaalt de horizontale verschuiving van de view in pixels, volgens de min- en maxwaarden.<br />- Het bevat de keys minValue, maxValueKey en invalidValue (niet verplicht)<br />- Als de gegevens kleiner dan of gelijk aan minData zijn, verschuift de view minValue pixels, en als de gegevens groter dan of gelijk aan maxData zijn, verschuift de view maxValue pixels<br />Let op: om deze verschuiving toe te passen moet `leftOffset` in de view op true staan                                                              |
| `"topOffset"`             | blok   | Bepaalt de verticale verschuiving van de view in pixels, volgens de min- en maxwaarden.<br />- Het bevat de keys minValue, maxValueKey en invalidValue (niet verplicht)<br />- Als de gegevens kleiner dan of gelijk aan minData zijn, verschuift de view minValue pixels, en als de gegevens groter dan of gelijk aan maxData zijn, verschuift de view maxValue pixels<br />Let op: om deze verschuiving toe te passen moet topOffset in de view op true staan                                                                   |
| `"rotationOffset"`        | blok   | Bepaalt de rotatiehoek van de view in graden, volgens de min- en maxwaarden.<br />- Het bevat de keys `minValue`, `maxValue` en `invalidValue` (niet verplicht)<br />- Als de gegevens kleiner dan of gelijk aan `minData` zijn, draait de view `minValue` graden, en als de gegevens groter dan of gelijk aan `maxData` zijn, draait de view `maxValue` graden<br />Let op: om deze rotatie toe te passen moet `rotationOffset` in de view op true staan                                                                         |
| `"dynValue"`*             | blok   | Bepaalt de omzetting van dynValue van het min- en max-bereik naar de min- en maxwaarden in pixels.<br />- Het bevat de keys `minValue`, `maxValue` en `invalidValue` (niet verplicht)<br />- Als de gegevens kleiner dan of gelijk aan `minData` zijn, is de verstuurde dynValue minValue (omgezet naar double), en als de gegevens groter dan of gelijk aan `maxData` zijn, is de berekende dynValue maxValue (omgezet naar double)<br />Let op: om deze omzetting toe te passen moet de key `dynValue` in de view op true staan |
| `"minValue"`              | int    | resultaatwaarde die op de view wordt toegepast (key alleen bruikbaar in een blok leftOffset, topOffset of rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"maxValue"`              | int    | resultaatwaarde die op de view wordt toegepast (key alleen bruikbaar in een blok leftOffset, topOffset of rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `"invalidValue"`          | int    | resultaatwaarde die op de view wordt toegepast als de gegevens ongeldig zijn (key alleen bruikbaar in een blok leftOffset, topOffset of rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                             |
| `"invalidImage"`          | string | `resource_filename` die gebruikt wordt voor de ImageView of de achtergrond van de TextView als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                            |
| image*1_to_n*           | string | `resource_filename`: afbeelding voor elke stap tussen minData (of dicht bij minData) met `"image1"` en maxData (of dicht bij maxData) met image*n*<br />Als je bijvoorbeeld 5 afbeeldingen opneemt (van image1 tot image5), wordt het bereik tussen minData en maxData in 5 stappen verdeeld, en wordt de afbeelding getoond die bij de waarde van de gegevens hoort                                                                                                                                                                          |
| `"invalidFontColor"`      | string | Beheert de stappen van fontColor als de gegevens ongeldig zijn<br />`"#RRGGBB"` of `"#AARRGGBB"`: kleur die gebruikt wordt als er ongeldige gegevens ontvangen worden (kan transparant zijn als AA=00)                                                                                                                                                                                                                                                                                                                                        |
| fontColor*1_to_n*       | string | Beheert de stappen van fontColor<br />`"#RRGGBB"` of `"#AARRGGBB"`: kleur voor elke stap tussen minData (of dicht bij minData) met `"fontColor1"` en maxData (of dicht bij maxData) met fontColor*n*                                                                                                                                                                                                                                                                                                                                          |
| `"invalidColor"`          | string | Beheert de stappen van de achtergrondkleur of de kleur van de afbeelding als de gegevens ongeldig zijn<br />`"#RRGGBB"` of `"#AARRGGBB"`: kleur die gebruikt wordt als er ongeldige gegevens ontvangen worden (kan transparant zijn als AA=00)                                                                                                                                                                                                                                                                                                |
| color*1_to_n*           | string | Beheert de stappen van de achtergrondkleur of de kleur van de afbeelding<br />`"#RRGGBB"` of `"#AARRGGBB"`: kleur voor elke stap tussen minData (of dicht bij minData) met `"color1"` en maxData (of dicht bij maxData) met color*n*                                                                                                                                                                                                                                                                                                          |
| `"invalidTextSize"`       | int    | Beheert de stappen van de tekstgrootte als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| textsize*1_to_n*        | int    | Beheert de tekstgrootte voor elke stap tussen minData (of dicht bij minData) met `"textsize1"` en maxData (of dicht bij maxData) met textsize*n*                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"invalidLeftOffset"`     | int    | Beheert de stappen van leftOffset als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| leftOffset*1_to_n*      | int    | Beheert de leftOffset voor elke stap tussen minData (of dicht bij minData) met `"leftOffset1"` en maxData (of dicht bij maxData) met leftOffset*n*<br />Let op: kan met dynPref gebruikt worden om een view te verschuiven als een andere verborgen is...                                                                                                                                                                                                                                                                                     |
| `"invalidTopOffset"`      | int    | Beheert de stappen van topOffset als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| topOffset*1_to_n*       | int    | Beheert de topOffset voor elke stap tussen minData (of dicht bij minData) met topOffset1 en maxData (of dicht bij maxData) met topOffset*n*<br />Let op: kan met dynPref gebruikt worden om een view te verschuiven als een andere verborgen is...                                                                                                                                                                                                                                                                                            |
| `"invalidRotationOffset"` | int    | Beheert de stappen van rotationOffset als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| rotationOffset*1_to_n*  | int    | Beheert de rotationOffset voor elke stap tussen minData (of dicht bij minData) met rotationOffset1 en maxData (of dicht bij maxData) met rotationOffset*n*                                                                                                                                                                                                                                                                                                                                                                                          |
| `"invalidTextvalue"`*     | string | Beheert textvalue als de gegevens ongeldig zijn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| textvalue*1_to_n* *     | string | Beheert de textvalue voor elke stap tussen minData (of dicht bij minData) met textvalue1 en maxData (of dicht bij maxData) met textvalue*n*<br />Let op: kan een opmaakstring bevatten als `"dynValue"` in de view op true staat                                                                                                                                                                                                                                                                                                              |

**Key toegevoegd in Custom Watchface V2.0 of hoger (beschikbaar in de wear-apk van AAPS 3.3.0 of hoger)*

(cwf-reference-dyndata-key-values)=

### DynData-key-waarden

| Key-waarde                                                                                  | key      | comment                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | standaard minData = 39 mgdl<br />standaard maxData = 400 mgdl<br />- Let op: de echte maxData hangt af van je sensor, en de eenheid van interne waarden is altijd mgdl                                                                                                   |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | standaard minData = -1 (hypo)<br />standaard maxData = 1 (hyper)<br />als BG binnen bereik is = 0                                                                                                                                                                        |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | standaard minData = 1 (dubbel omlaag)<br />standaard maxValue = 7 (dubbel omhoog)<br />vlakke pijl = 4<br />fout of ontbrekende gegevens = 0 (??)                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | standaard minData = -25 mgdl<br />standaard maxData = 25 mgdl<br />- Let op: de echte min- en maxData kunnen hoger zijn, en de eenheid van interne waarden is altijd mgdl                                                                                                |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | standaard minData = -25 mgdl<br />standaard maxData = 25 mgdl<br />- Let op: de echte min- en maxData kunnen hoger zijn, en de eenheid van interne waarden is altijd mgdl                                                                                                |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | standaard minData = 0 (streefdoel van het profiel)<br />standaard maxData = 2 (tijdelijk streefdoel)<br />streefdoel aangepast door de loop = 1<br/>standaard of ontbrekende informatie = 0                                                                        |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | standaard minData = 0 E<br />standaard maxData = 500 E                                                                                                                                                                                                                         |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | standaard minData = 0 (standaard kleur)<br/>standaard maxData = 2 (urgente kleur)<br/>waarschuwingskleur = 1                                                                                                                                                             |
| `"uploader_battery"`                                                                        | valueKey | standaard minData = 0 %<br />standaard maxData = 100%                                                                                                                                                                                                                          |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | standaard minData = 0 %<br />standaard maxData = 100%                                                                                                                                                                                                                          |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | standaard minData = 0 min<br />standaard maxData = 60 min                                                                                                                                                                                                                      |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | standaard minData = 0 min<br />standaard maxData = 28 min<br />- Let op: de statuspijlen zijn groen onder 14 min en rood boven 14 min. Als je 2 afbeeldingen gebruikt, kun je met de standaard min- en maxData de statusachtergrond vervangen door je eigen afbeeldingen |
| `"day"`                                                                                     | valueKey | standaard minData = 1<br />standaard maxData = 31                                                                                                                                                                                                                              |
| `"day_name"`                                                                                | valueKey | standaard minData = 1<br />standaard maxData = 7                                                                                                                                                                                                                               |
| `"month"`                                                                                   | valueKey | standaard minData = 1<br />standaard maxData = 12                                                                                                                                                                                                                              |
| `"week_number"`                                                                             | valueKey | standaard minData = 1<br />standaard maxData = 53                                                                                                                                                                                                                              |

**Key toegevoegd in Custom Watchface V2.0 of hoger (beschikbaar in de wear-apk van AAPS 3.3.0 of hoger)*

(cwf-reference-dynpref-keys)=

### DynPref-keys

| Key              | type   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | blok   | bepaalt het blok met alle dynamische instellingsblokken die voor de views gebruikt worden. Meestal na de laatste view of na het blok dynData.<br />Alle keys in dit blok worden gebruikt als key-waarde in het view-blok:<br />`"dynPref": { dynPref blocks }`<br />en elk blok heeft een eigen naam en bevat een aantal keys:<br />`"customName": { one dynPref block }`                                                                                                                                                                               |
| `"dynPref"`      | string | *In een view-blok*<br />naam van het dynamische dynPref-blok dat gebruikt wordt (meestal dezelfde als de bijbehorende view-key of de bijbehorende instelling).                                                                                                                                                                                                                                                                                                                                                                                                            |
| `"dynPref"`      | string | *In een gedeeltelijk dynData-blok binnen een dynPref-blok*<br />naam van het dynamische dynPref-blok dat gebruikt wordt om het dynData-blok aan te vullen. Zo kun je een dynData-blok aanpassen volgens meerdere instellingen                                                                                                                                                                                                                                                                                                                                             |
| `"dynPrefColor"` | string | deze key hoort alleen bij het hoofdblok met alle hoofdkleuren (highColor, midColor, lowColor, kleuren van de grafiek...). je gebruikt hem als je de hoofdkleuren wilt aanpassen volgens instellingen                                                                                                                                                                                                                                                                                                                                                                            |
| `"prefKey"`      | string | bepaalt de waarde van de instellingskey die gebruikt wordt om de instellingen van de gebruiker op te halen (zie [PrefKey-waarden](#cwf-reference-prefkey-values) hieronder). Deze key moet in een `dynPref`-blok gebruikt worden.<br />Daarna moet het `dynPref`-blok, afhankelijk van de instellingskey, evenveel keys bevatten als prefKey waarden heeft.<br />Let op: de meeste instellingen zijn "Boolean", dus in het dynPref-blok vind je meestal deze twee dynData-blokken: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | blok   | de meeste instellingen geven een boolean `"true"` of `"false"`. Hier geef je het dynData-blok op dat gebruikt wordt als de instelling die de gebruiker koos true is.<br />Let op: als het blok ook een key `"dynPref":` bevat, wordt het dynData-blok samengevoegd met het andere blok. Zo kun je bijvoorbeeld de kleur aanpassen volgens de ene instelling, en de tekstgrootte volgens een andere instelling                                                                                                                                                             |
| `"false"`        | blok   | de meeste instellingen geven een boolean `"true"` of `"false"`. Hier geef je het dynData-blok op dat gebruikt wordt als de instelling die de gebruiker koos false is.<br />Let op: als het blok ook een key `"dynPref":` bevat, wordt het dynData-blok samengevoegd met het andere blok. Zo kun je bijvoorbeeld de kleur aanpassen volgens de ene instelling, en de tekstgrootte volgens een andere instelling                                                                                                                                                            |

(cwf-reference-prefkey-values)=

### PrefKey-waarden

Alle keys uit het hoofdstuk [Keys voor instellingen](#cwf-reference-preference-keys) hierboven kunnen gebruikt worden om parameters van views aan te passen

Je kunt ook deze extra keys hieronder gebruiken, die in de speciale parameters van AAPS (Custom) zitten:

| Key                   | type    | comment                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: als de gekozen eenheid in AAPS mgdl is<br />*false*: als de gekozen eenheid in AAPS mmol is                                                                                                                                                                                                                                                                                                         |
| `"key_dark"`          | boolean | *true*: om een donkere achtergrond te gebruiken<br />*false*: om een lichte achtergrond te gebruiken<br />Let op: deze parameter wordt vaak gebruikt in eerdere AAPS-watchfaces (AAPS, AAPS V2...)                                                                                                                                                                                                    |
| `"key_match_divider"` | boolean | *true*: divider opgenomen in AAPS, AAPS v2-watchfaces zijn niet zichtbaar<br />*false*: divider opgenomen in AAPS, AAPS v2-watchfaces zijn zichtbaar<br />Let op: deze instelling wordt vaak gecombineerd met de instelling dark (met de key `dynPref` in het `dynData`-blok) om de tekstkleur (en de achtergrond) in dezelfde of juist de tegenovergestelde kleur van de parameter dark te zetten... |
