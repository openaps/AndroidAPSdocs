# Referensdokument för anpassade urtavlor

Denna sida är för dig som designar nya urtavlor. Den listar alla nyckelord och funktioner som finns när du vill skapa eller animera en ny urtavla.

- Nya funktioner och nycklar i Custom Watchface V2 (Wear-apk 3.3.0 eller senare) finns [här](#cwf-reference-new-v2-features)

## Formatet Custom Watchface

Custom Watchface är ett öppet format som är designat för AAPS och hör till den nya urtavlan "AAPS (anpassad)" som finns på klockan.

Filen för urtavlan är en vanlig zip-fil. Men för att kännas igen som en fil för urtavla måste zip-filen innehålla följande filer:

- En bildfil med namnet CustomWatchface (kan vara en bitmappsfil `CustomWatchface.jpg`, `CustomWatchface.png` eller en vektorfil `CustomWatchface.svg`). Denna fil är den lilla ikonen som används för att välja urtavlan när du klickar på knappen "Ladda urtavla", och även bilden som syns i pluginet Klocka (Wear) i AAPS.
- En fil med namnet `CustomWatchface.json` (se [JSON-struktur](#cwf-reference-json-structure) nedan). Den andra filen är huvudfilen. Den innehåller all information som behövs för att designa urtavlan. JSON-filen måste vara giltig (detta är troligen det svåraste när du redigerar filen för hand i en textredigerare, eftersom ett kommatecken som saknas eller är för mycket räcker för att förstöra JSON-formatet). JSON-filen måste också innehålla ett `"metadata"`-block med nyckeln `"name"` och ett värde som inte är tomt. Detta blir namnet på din anpassade urtavla (se [Inställningar för metadata](#cwf-reference-metadata-settings) nedan)
- zip-filen ska vara så liten som möjligt (mindre än cirka 500 kB). Om filen är för stor blockeras den och skickas inte till klockan.

Zip-filen kan också innehålla några extra resursfiler:

- Fasta filnamn för bilder som används i standardvyer på urtavlan (som `Background`, `CoverChart`... se [Lista över fasta resursfiler](#cwf-reference-list-of-hardcoded-resource-files) nedan). Alla dessa filer kan vara i formatet `jpg`, `png` eller `svg`. men för de flesta måste du använda `png` eller `svg`, som hanterar genomskinlighet (jpg-filer är mindre än png-filer, men har ingen genomskinlighet). Observera att du oftast får bäst kvalitet med minst filstorlek med svg-filer (vektorformat).
- Extra resursfiler med fria namn. Dessa extra filer kan vara bildfiler eller teckensnittsfiler (för teckensnitt accepteras formaten `ttf` och `otf`). Observera att för dessa extra filer används `filename` (utan filändelse) som keyValue i JSON-filen, för att ange var eller när filerna ska användas.
  - bildfiler används ofta som bakgrund i textvyer eller för dynamisk animering (till exempel batterinivå från 0 % till 100 %)
  - med teckensnittsfiler kan du använda egna teckensnitt i din urtavla

(cwf-reference-json-structure)=

## JSON-struktur

JSON-filer kan redigeras i textredigeraren Notepad (eller Notepad++). Notepad++ är att föredra eftersom den känner igen JSON och använder färgformatering

- den innehåller strängnycklar `"string_key":` och nyckelvärden. Nyckelvärden kan vara strängar som `"key value"`, heltal, booleska värden som `true`eller `false` eller ett datablock.
- varje värde avgränsas med ett kommatecken `,`
- Ett datablock börjar med `{`  och slutar med `}`
- JSON-filen är ett enda stort block, så den börjar med  `{`  och slutar med `}`. I filen hör alla inre block till en `"key"` som måste vara unik i blocket
- För att JSON-filen ska bli lättare att läsa är den oftast indragen (varje ny nyckel står på en ny rad, varje nytt block flyttas 4 mellanslag åt höger)

(cwf-reference-metadata-settings)=

### Inställningar för metadata

Detta block är det första blocket i JSON-filen och det är obligatoriskt. Det innehåller all information om denna urtavla, som namnet, författaren, datum då den skapades eller uppdaterades, författarens version eller pluginets version.

Här nedan finns ett exempel på ett metadata-block:

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

Observera att `/` som används i datumet är ett specialtecken. För att det ska tolkas rätt i JSON-filen måste du sätta ett "escape"-tecken `\` framför det

I vissa JSON-filer ser du en extra nyckel `"filename"`. Den nyckeln skapas eller uppdateras automatiskt när den anpassade urtavlan laddas i AAPS (den används för att visa användaren zip-filens namn i mappen exports), så du kan ta bort den nyckeln från metadata-blocket.

(cwf-reference-general-parameter-settings)=

### Allmänna parametrar

Efter det första blocket med metadata ställer du in några allmänna parametrar (se [Lista över allmänna parametrar](#cwf-reference-list-of-general-parameters) nedan). Med dem kan du ställa in grafens färger (kolhydrater, bolus, BG-värden...) och även standardfärger för värden inom målområdet, hyper eller hypo (standardfärger för BG-värde och pilar)

Här nedan finns ett exempel på allmänna parametrar

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

### Inställningar för ImageView

En egen bild kan anpassas med rätt filnamn för varje ImageView som finns i layouten för den anpassade urtavlan. JSON-blocket används då bara för att ange position, storlek, om vyn är synlig eller inte och eventuellt för att justera färgen:

Här nedan finns ett exempel på ett bildblock för second_hand (i det här fallet finns ingen bild i zip-filen, så standardbilden för sekundvisaren används, men med en egen färg).

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
För att second_hand ska få BG-standardfärgen (lowRange, midRange eller highRange) behöver du bara ändra den sista raden med keyValue `bgColor`

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### Inställningar för TextView

TextView har fler parametrar än ImageView: du kan justera rotation (heltal i grader), textsize (heltal i pixlar), gravity (anger om textvärdet ska vara centrerat (standardvärde) eller vänster- eller högerjusterat), ställa in font, fontStyle och fontColor, och även bakgrundsfärgen för TextView

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
Observera att om du inte vill använda en vy på din urtavla ska du sätta nyckeln `"visibility"` till `"gone"`, men även sätta storlek och position utanför det synliga området, så här:

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
Om storlek och position ligger inom det synliga området kan det dolda värdet "blinka" till när urtavlan uppdateras.

Om du vill anpassa bakgrundsbilden för en textvy kan du använda nyckeln `"background":` och ange filnamnet på en bild i zip-filen som keyValue. Du kan också bara ändra bakgrundsfärgen med nyckeln `"color:"`.

```json
"background": "fileName"
```

Det finns också 4 särskilda textvyer (med namnen freetext1 till freetext4) som har en särskild parameter `"textvalue":`. Den kan till exempel användas för att sätta en etikett

(cwf-reference-chartview-settings)=

### Inställningar för ChartView

Grafvyn är en mycket speciell vy som kan dela vissa parametrar med ImageView eller med TextView...

Standardinställningarna för denna vy är mycket enkla:

```text
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
De 2 extra parametrar du kan använda för grafvyn är en bakgrundsfärg (standard är genomskinlig) med nyckeln `"color"` eller en bakgrundsbild med nyckeln `"background"`.

(cwf-reference-how-to-build-watchface)=

## Så bygger och designar du din första urtavla

### Verktyg som behövs

- Textredigerare: Mitt råd är att använda Notepad++ (eller liknande). Det är en enkel textredigerare, men fördelen är att du ser formaterad text med färgkoder, så det är lättare att hitta fel. vilken enkel textredigerare som helst duger. Eftersom syftet är att justera informationen i JSON-filen.
- Bildredigerare (bitmapp och/eller vektor)
  - Om du använder bitmapp
    - Bildredigeraren ska kunna hantera genomskinlighet (krävs för alla bilder ovanför bakgrunden) och png-format (om du använder bitmappsbilder)
    - Bakgrundsbilden kan vara i jpg-format (mindre än png)
    - Bildredigeraren ska låta dig mäta grafiska objekt i pixlar (det kan vara en enkel kvadrat) (överkant, vänsterkant, bredd, höjd)
    - Bildredigeraren ska kunna visa färger med RRGGBB-kod i hexadecimal form
    - Bildredigeraren ska kunna ändra bildens storlek till 400px x 400px (mycket viktigt att arbeta med denna upplösning)
  - Om du använder vektor
    - Vektorbilder ska exporteras i svg-format

### Hämta en mall så att du inte börjar från noll

När du vill designa din första urtavla är det bäst att börja med standardurtavlan (då har du den senaste versionen med alla tillgängliga vyer i rätt ordning)

- Du får zip-filen genom att klicka på knappen "Exportera mall" i pluginet Klocka (Wear). Zip-filen hamnar i mappen AAPS/exports
- Observera att en klocka måste vara ansluten till AAPS för att du ska se knapparna för anpassad urtavla (men du behöver ändå klockan för att kontrollera, testa och justera din anpassade urtavla)

Standardurtavlan är mycket enkel och zip-filen innehåller bara 2 filer:

- CustomWatchface.png (bild på standardurtavlan för val av urtavla)
- CustomWatchface.json

### Ordna dina filer på datorn

Enklast är att ha telefonen ansluten till datorn och arbeta med två särskilda mappar:

- ett filhanterarfönster öppet i en egen mapp med alla filer (json, bitmappsbilder, vektorbilder, teckensnitt) och filen CustomWatchface.zip
- ett annat filhanterarfönster (eller en anpassad mappvy) öppet med mappen Phone/AAPS/exports

Då blir arbetet mycket enkelt: varje gång du ändrar JSON-filen i en textredigerare eller en bild i en bildredigerare (bitmapp eller vektor) behöver du bara:

1. spara ändringarna i varje app
2. dra och släppa alla filer i filen CustomWatchface.zip
3. dra och släppa CustomWatchface.zip i mappen AAPS/exports på telefonen
4. skicka CustomWatchface till klockan för att kontrollera resultatet

### Börja anpassa urtavlan

Först ska du ge urtavlan ett namn (behövs för att lätt kunna välja den när du testar) och börja justera metadata-nycklarna i början av JSON-filen

Sedan ska du bestämma vilken information du vill visa, alltså vilka vyer som ska vara synliga eller dolda.

- ska urtavlan visa sekunder eller inte?
- vill du designa en analog klocka eller en digital klocka (eller båda...)

Nu kan du börja ändra JSON-filen. Sätt nyckeln `"visibility":` för varje vy till `"visible"` eller `"gone"` (beroende på om du vill behålla vyn eller inte)

Du kan också börja justera värdena för övre och vänster marginal, bredd och höjd ungefär, för att börja ordna urtavlan (dessa värden justeras senare med bildredigeraren)

Obs: allt designas inom en **rektangel på 400px x 400px**. Allt placeras alltså med absoluta koordinater inom denna yta.

När du designar din första urtavla måste du veta att allt är ordnat i lager från bakgrunden till förgrunden. Varje vy (ImageView eller TextView) kan alltså dölja något som ligger bakom...



![Lager i CustomWatchface](../images/CustomWatchface_1.jpg)



I JSON-filen är alla vyer sorterade från bakgrunden till förgrunden (det hjälper dig att komma ihåg vad som ligger bakom vad...)

När du designar eller anpassar din första egna urtavla, börja med enkla saker: ändra synligheten för några vyer, lägg till en egen bakgrundsbild utan att ändra JSON-filen...

### Hantera färger

I JSON-filen finns flera nycklar för att ange färger: `"color"`, `"fontColor"`för vyer, men också `"highColor"`, `"midColor"`, `"lowColor"`, ... (se [Lista över allmänna parametrar](#cwf-reference-list-of-general-parameters))

Färger anges med ett textfält som börjar med `#` följt av RRGGBB-värden (röd, grön, blå) i hexadecimalt format:

- `"#FFFFFF"` är vit, `"#000000"` är svart, `"#FF0000"` är röd...

Du kan också lägga till 2 extra värden för alfakanalen och ange en nivå av genomskinlighet (AARRGGBB):

- `"#00000000"`är helt genomskinlig, och `"#FF000000"` är helt ogenomskinlig ( alltså är  `"#FF000000"` detsamma som  `"#000000"`)

Du kan också använda det särskilda nyckelvärdet `"bgColor"` för att automatiskt använda `"highColor"`, `"midColor"`, `"lowColor"` från de allmänna parametrarna, beroende på BG-värdet:

- `"fontColor": "bgColor",` sätter automatiskt vyns teckenfärg efter BG-värdet
- Observera att vyerna `sgv` (för BG-värde) och `direction` (för trendpil) automatiskt använder BG-färgerna från de allmänna parametrarna (om du vill ha andra färger för dessa 2 vyer måste du använda den avancerade funktionen [dynData](#cwf-reference-dyndata-feature) med en färg i ett steg...)

Mer information om ImageView och nyckeln `"color":` finns i kapitlet [Ändra bildens färg](#cwf-reference-tune-image-color) nedan.

### Lägg till fasta bilder

det enklaste sättet att börja anpassa din urtavla är att lägga in några bilder med särskilda namn i zip-filen (se [Lista över fasta resursfiler](#cwf-reference-list-of-hardcoded-resource-files))

- Bilden ska vara i formatet `.jpg`, `.png` eller `.svg`. men var försiktig: jpg hanterar inte genomskinlighet och ska därför bara användas för bakgrundslagret. För alla mellanliggande lager (cover_chart, cover_plate, visare) använd antingen en `.png`- eller en `.svg`-bild

- Om du har en vektorbaserad bildredigerare (till exempel Illustrator) är detta format att föredra. Det ger små textfiler med filändelsen `.svg` och bäst kvalitet.
- Var noga med att använda exakt rätt filnamn (även stora och små bokstäver)

Om du vill ha en egen bakgrundsbild behöver du nu bara lägga in en fil med namnet `Background.jpg` i zip-filen (utan att ändra något annat). Skicka zip-filen till klockan och kontrollera resultatet!

Om du vill anpassa hour_hand, minute_hand eller second_hand för en analog klocka, lägg helt enkelt till `HourHand.png` (eller `HourHand.svg`), `MinuteHand.png` och `SecondHand.png`.

- dessa bilder roterar automatiskt runt bildens mittpunkt, så bilderna ska visa 00:00:00 (och för en analog klocka som fyller hela ytan, använd storleken 400 x 400 px placerad överst 0 vänster 0)

I [Lista över fasta resursfiler](#cwf-reference-list-of-hardcoded-resource-files) ser du också att varje bildvy har två extra fasta filnamn `High` och `Low` (du kan till exempel lägga in andra bilder med namnen `BackgroundHigh.jpg` och `BackgroundLow.jpg` i zip-filen). då ändras bilden automatiskt efter din BG-nivå (inom målområdet, hyper eller hypo). Se urtavlan AIMICO som exempel.

(cwf-reference-tune-image-color)=

### Ändra bildens färg

Nyckeln `"color"` kan användas för att ändra standardbildens färg:

- på bakgrundsvyn sätter den bakgrundsfärgen (standard svart)
- på cover_plate (enkel sifferskiva) eller visare ersätter den standardbildens färg (vit) med den angivna färgen (även `"bgColor"`)

När du använder nyckeln `"color"` på en bitmappsbild (`.jpg` eller `.png`) ger färgen en intressant effekt på färgmättnaden. Du känner alltså fortfarande igen din bitmappsbild.

Till sist: på en bildfil i formatet `.svg` har nyckeln `"color"`ingen effekt. Färgen i vektorfiler är fast i bilden. Om du vill ändra färger måste du lägga in flera `svg`-filer och använda den avancerade funktionen [dynData](#cwf-reference-dyndata-feature) för att byta mellan dem

### Använd extra teckensnitt för TextView

Flera standardteckensnitt finns redan i Wear-apk:n (se teckensnittsnycklarna i kapitlet [Nyckelvärden](#cwf-reference-key-values)). Men om du vill använda extra teckensnitt som inte finns som standard kan du lägga in dem i zip-filen:

- de 2 tillåtna teckensnittsformaten är filer av typen `.ttf` och `.otf`
- om du lägger till ett eget teckensnitt i zip-filen, till exempel en fil med namnet `myCustomFont.ttf`, använder du filnamnet för teckensnittet i JSON-filen för en TextView:

```
"font": "myCustomFont",
```

Tänk på att vissa teckensnitt kan ligga i stora filer (och zip-filen har en maximal storlek). Om du bara använder mycket få tecken (siffror, `.`, `,`) kan du alltså använda gratisverktyg för att ta bort tecken som inte används (till exempel [här](https://products.aspose.app/font/generator/ttf-to-ttf)) och på så sätt minska teckensnittets storlek.

(cwf-reference-advanced-features)=

## Avancerade funktioner

(cwf-reference-preference-feature)=

### Funktionen Inställningar

CustomWatchface kan automatiskt ändra vissa klockinställningar så att urtavlan visas rätt (om användaren har gett behörighet i inställningarna för Wear).

Men använd denna funktion med försiktighet. Inställningarna är gemensamma för alla urtavlor. Följ därför några regler för denna funktion:

- ställ aldrig in inställningar för dolda vyer
- försök att ha så många synliga vyer som möjligt
- du kan gärna göra vissa vyer bredare än nödvändigt:
  - Tillfällig basal (TBR) kan visas i procent (liten bredd) men också som absoluta värden (mycket bredare)
  - delta eller genomsnittlig delta med detaljerad information kan bli bred
  - samma sak för iob2: denna vy kan visa total IOB, men om detaljerad IOB är vald kan texten bli mycket lång

Om du ändå behöver vissa mycket speciella inställningar för att visningen ska bli rätt (i exemplet nedan, om det inte finns plats för detaljerad IOB, kan du "tvinga" denna parameter till `false` på klockan), kan du lägga till en inställningsbegränsning i metadata-blocket, så här

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

Om användaren tillåter att den anpassade urtavlan ändrar klockans parametrar (inställning i pluginet Klocka (Wear)) sätts "Visa detaljerad IOB" till "av" och låses i läget av (parametern kan inte ändras förrän behörigheten stängs av i inställningarna för pluginet Klocka (Wear) eller en annan urtavla väljs)

- Observera att användaren ser antalet "krävda parametrar" när hen väljer en urtavla

I exemplet nedan har urtavlan Gota en krävd parameter. Om behörighet inte har getts visas den i vitt. Om behörighet har getts sätts och låses denna parameter på klockan (då visas siffran i orange)

![Krävda parametrar](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### Funktionen TwinView

Tvillingvyer gör det enkelt att justera en vys position beroende på vilka vyer som är synliga. De är inte lika kraftfulla som en layout som helt består av LinearLayout, men de klarar många vanliga fall.

I exemplet nedan ser du urtavlan AAPS (Cockpit) med alla vyer synliga i inställningarna, och samma urtavla med "Visa riggens batterinivå" avstängd och "Visa genomsnittlig delta" avstängd

![Tvillingvyer](../images/CustomWatchface_3.jpg)

Du ser att när en av tvillingvyerna är dold flyttas den andra så att den hamnar i mitten

i detta exempel ser du att i blocket `"uploader_battery"` har nyckeln `"twinView":` lagts till för att ange vyn `"rig_battery"`, och i blocket `"rig_battery"`  anger nyckeln `"twinView":` `"uploader_battery"` som tvilling. Den extra nyckeln `"leftOffsetTwinHidden":` anger sedan hur många pixlar vyn ska flyttas när tvillingen är dold.

För att räkna ut talet: skillnaden mellan leftMargin för de två tvillingvyerna är 50 pixlar, så förskjutningen som behövs för att stå i mitten är hälften åt det ena eller det andra hållet.

Om tvillingvyerna är placerade vertikalt måste du använda nyckeln `"topOffsetTwinHidden":`

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

### Funktionen DynData

DynData är den mest kraftfulla funktionen om du vill lägga in animeringar på din urtavla utifrån vissa interna värden (som BG-värde, BG-nivå, delta, batteri i %... se listan över tillgängliga data [här](#cwf-reference-dyndata-key-values))

För att visa denna funktion använder jag urtavlan AAPS (SteamPunk) som exempel:

![CustomWatchface_4](../images/CustomWatchface_4.png)

På denna urtavla måste vi hantera [rotationen av BG-värdet](#cwf-reference-background-management) (från 30 grader till 330 grader) till höger, [det dynamiska intervallet för avg_delta](#cwf-reference-avg-delta-management) (skala upp till 5 mgdl, 10 mgdl eller 20 mgdl beroende på värdet), [visarens rotation](#cwf-reference-dynamic-rotation-management) som måste stämma med skalan, och även vyernas olika lager...

Här nedan ser du alla bilder som finns i zip-filen och som behövs för denna urtavla:

Obs: för att du ska kunna se genomskinligheten ligger alla bilder på en gul bakgrund och omges av en röd ruta

![Steampunk-bilder](../images/CustomWatchface_5.jpg)

- På första raden kopplas Background.jpg och CoverPlate.png automatiskt till sina vyer (standardfilnamn för vyerna), och steampunk_pointer.png hanteras av dynData
- På andra raden ser du de 3 skalorna för det dynamiska intervallet för avg_delta, som också hanteras av dynData
- På tredje raden kopplas chartBackground.jpg manuellt till grafvyn, och HourHand.png och MinuteHand.png kopplas automatiskt till sina vyer

(cwf-reference-background-management)=

#### Hantering av bakgrund

Först, när det gäller bilden för BG-värdet finns inget val: den kan bara ligga i bakgrundslagret (annars hamnar den framför grafvyn och grafen syns inte!). Vi måste alltså koppla BG-värdet till bakgrunden och sedan rotera bakgrundsbilden efter BG-värdet.

I blocket `"background"` lägger vi till 2 särskilda nycklar för denna rotation:

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
Nyckeln `"dynData":` anger vilket block som ska användas för animeringen (värde, intervall, konvertering...). Här fick blocket namnet "rotateSgv" (välj ett tydligt namn när du använder denna funktion),

`"rotationOffset": true,` anger att animeringen efter värdet ska vara en rotation. (andra tillgängliga nycklar är `"leftOffset"` och `"topOffset"` om du vill skapa ett skjutreglage)

Nu går vi till slutet av filen, efter den sista vyn:

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
Du ser att efter den sista vyn (`"second_hand"`) har vi lagt till ett nytt block `"dynData": { ... }` som  innehåller alla animeringar:

Blocket som angavs i vyn `"background"`fick namnet `"rotateSgv"`. Det är det första blocket du hittar i `"dynData"`!

Detta block är enkelt: den första nyckeln heter `"valueKey":` och anger vilket värde som ska användas. i detta fall är `"sgv"` ett "keyValue" som anger BG-värdet (observera att keyValue i de flesta fall har samma namn som vyn som visar informationen).

För BG-värdet är standard för min data 39 mgdl och max data 400 mgdl (se [Nyckelvärden för DynData](#cwf-reference-dyndata-key-values) nedan för alla tillgängliga keyValues och tillhörande min/max-värden).

I blocket `"rotateSgv"` används de två extra nycklarna (`"minData":` och `"maxData":`) för att sätta min- och maxdata till 30 och 330. Med dessa min- och maxvärden kan vi använda datavärdet direkt (utan konvertering) för att rotera bakgrunden i grader. I detta fall begränsas alla BG-värden över 330 mgdl till 330, som är bildens övre gräns.

#### Hantering av graf

Grafens standardbakgrund är genomskinlig. För att dölja BG-skalan i bakgrundsbilden måste vi därför lägga till en egen bakgrundsbild för grafen (denna bild innehåller Steampunk-urtavlans skuggor). Länken till filen chartBackground.jpg görs med nyckeln `"background":`

Vyns storlek och position måste förstås stämma på pixeln!

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

#### Hantering av avg delta

För att hantera det dynamiska intervallet för avg delta använder vi de fyra freetext-vyerna. freetext1 används för bildskalan, och freetext2 till freetext4 används för visarens rotation enligt skalan.

**freetext1**

Som sagts tidigare ligger freetext-vyerna framför grafen och framför bakgrunden. Därför har vi lagt in genomskinliga ytor så att dessa bilder syns (bildens högra del och nedre del)

Observera att den borttagna nedre delen av dessa bilder har använts som bakgrund för grafen så att allt passar perfekt ihop.

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
För denna vy lägger vi till en länk till ett annat `"dynData"`block med namnet `avgDeltaBackground`. Detta block hanterar skalan för avgDelta efter värdet på avgDelta.

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
- `"valueKey":` skapar länken till värdet `"avg_delta"`
- min- och maxData begränsar också intervallet till det största värde som finns på denna urtavla (från -20 mgdl till 20 mgdl). För dig som använder mmol: kom ihåg att alla interna värden i AAPS alltid är i mgdl.

Nu ser vi hur den dynamiska bakgrundsbilden hanteras efter värdet.

`"invalidImage":` är nyckeln för bilden som ska visas när data är ogiltiga (eller saknas). Här länkar vi till en extra resursbild i zip-filen med skalan 5 mgdl

Sedan använder vi en serie bilder, från `"image1":` till `"image8":`. Antalet bilder anger antalet steg mellan `minData` och `maxData`.

- `image1` anger bilden som ska visas när avg_delta är lika med eller nära `minData`, och bilden med högst nummer (här `image8`) anger bilden som ska visas när avg_delta är lika med eller nära `maxData`
- mellan -20 mgdl och 20 mgdl är hela intervallet 40 mgdl. Delat med 8 (antalet bilder) får vi 8 steg på 5 mgdl
- Nu kan vi koppla bakgrundsbilder till värdet på avg_delta, från de lägsta värdena: mellan -20 och -15, och även mellan -15 och -10 använder vi  `steampunk_gauge_mgdl_20` som skala, sedan mellan -10 och -5 `steampunk_gauge_mgdl_10`, och så vidare till +15 och +20 där vi återigen använder bakgrundsbilden `steampunk_gauge_mgdl_20`

(cwf-reference-dynamic-rotation-management)=

**freetext2 till freetext4**

För dessa vyer kombinerar vi dynamiska bilder med rotationsfunktionen som beskrevs ovan:

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
Här har varje vy en egen skala (och är därför kopplad till ett eget dynData-block). Du ser också att nyckeln `"rotationOffset":` är aktiverad för dessa 3 vyer. Nu tittar vi på det första dynData-blocket:

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
Även om det dynamiska intervallet bara används mellan -5 och +5 för avg_delta är det viktigt att behålla hela intervallet -20, +20 mgdl, så att visaren följer bakgrunden när skalan byts. Därför behåller vi samma totala intervall som för `avgDeltaBackground`  och samma antal steg (8 bilder).

Observera att både `"invalidImage"` och flera `"imagexx"` har nyckelvärdet `"null"` (det kan vara vilken sträng som helst som inte finns som filnamn i zip-filen). När ett filnamn inte hittas blir vyns bakgrundsbild genomskinlig. Inställningen gör alltså att visaren bara syns för steg 4 och steg 5 (avg delta mellan -5 mgdl och +5 mgdl) och inte syns utanför detta intervall.

Nu ser vi ett nytt block `"rotationOffset":` som innehåller två nycklar `"minValue":` och `"maxValue":`. Dessa värden används för att konvertera mellan interna data (i mgdl) och den rotationsvinkel vi vill ha.

- Steampunk-urtavlan är designad för att visaren ska rotera högst från -30 grader till 30 grader. Enligt skalan (här från -5 mgdl till 5 mgdl) vill vi alltså ha 30 grader för dessa värden. Eftersom `minData` och `maxData`är 4 gånger större blir motsvarande minValue och maxValue 4 * 30 grader, alltså -120 och +120 grader. Men vid all rotation över eller under +-30 grader döljs visaren (ingen bild syns), och visaren syns bara för värden mellan -5 och +5 mgdl... Det är precis vad vi vill här.

De andra dynData-blocken anges på samma sätt för att anpassa `"avgDelta10"`och `"avgDelta20"`

#### Vyn loop

på Steampunk-urtavlan är loopens gröna och röda pilar (för status) avstängda. Detta hanteras också med ett eget dynData-block som är kopplat till vyn loop.

```text
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Eftersom detta block bara anropas av vyn loop, och vyns standarddata är loopinformation, är nyckeln `"valueKey":` valfri.

Standardvärden för `minData` och `maxData` för loop är 0 min och 28 min. Med två bilder visas alltså alla värden under 14 min med bakgrunden `image1` och alla värden över 14 min med `image2`. 14 min är exakt gränsen där den gröna pilen byts mot den röda pilen.

I detta exempel finns filerna `greyArrows`, `greenArrows` och `redArrows` inte i zip-filen, så pilarna tas bara bort (osynliga). Men du kan använda detta block "som det är" om du vill anpassa statuspilarna med egna bakgrundsbilder.

#### Vyerna rig_battery och uploader_battery

Som avslutning på genomgången av funktionen dynData tittar vi på hur batteriet hanteras. Tanken här är att anpassa textens färg efter batterinivån (från 0 till 100 %)

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
Här ser du att båda vyerna delar samma `dynData`-block med namnet `batteryIcons`. Det går eftersom de kopplade data som standard är vyns egna data (utan nyckeln `"valueKey":` i blocket  `batteryIcons` används alltså data från `uploader_battery` eller `rig_battery` beroende på vyn).

Observera att dessa två vyer också använder funktionen TwinView som beskrivs [här](#cwf-reference-twinview-feature).

Nu tittar vi på dynData-blocket:

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
Här använder vi exakt samma logik som för den dynamiska bakgrundsbilden, men med egna nycklar (`"invalidFontColor"` och  `"fontColor1"` till `"fontColor5"` för att ange 5 steg på 20 % vardera).

- `"fontColor1"` (mörkröd) används för alla värden under 20 %, och vit används för alla värden över denna gräns.
- Om du vill sänka gränsen till "under 10 %" behöver du bara lägga till 5 extra nycklar från `"fontColor6"` till `"fontColor10"` . Du kan också justera varje färg om du vill ha en gradvis övergång från grönt till gult, orange och rött...

(cwf-reference-dynpref-feature)=

### Funktionen DynPref

Innan du läser detta kapitel måste du förstå hur [dynData](#cwf-reference-dyndata-feature) fungerar, eftersom DynPref är en avancerad användning av DynData: nu kan du anpassa varje DynData-block efter de inställningar som användaren har valt:

För att visa funktionen DynPref använder vi två exempel:

- Steampunk-urtavlan (enkel användning för att ha en mgdl-version och en mmol-version i samma urtavla. Urtavlan växlar automatiskt efter den enhet som är vald i AAPS).
- Urtavlan AAPS V2 kombinerar olika inställningar för att hantera textfärg och bakgrund utifrån inställningarna för mörkt läge och matchande avdelare.

#### Enkel användning av dynPref på Steampunk-urtavlan

På Steampunk-urtavlan har vi två uppsättningar bilder beroende på enhet: bilden `background` som har BG-skalan och roterar efter BG-värdet. och `freeText1` som innehåller den dynamiska skalan efter värdet på avgDelta. För att ha en urtavla som automatiskt visar rätt enhet måste bilden väljas efter den valda enheten.

För att göra det ersätter vi nyckeln `dynData` med en nyckel `dynPref`i vyns block:

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
Nycklarna `dynPref`används nästan som nycklarna `dynData`som beskrevs i föregående kapitel

Nu tittar vi på slutet av JSON-filen, efter blocket `dynData`:

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
Du ser att dynPref-nyckeln som anges i vyblocket `background` (`"dynPref": "rotateSgv"`) finns i JSON-blocket `dynPref` i slutet av JSON-filen:

Detta block måste innehålla en nyckel `"prefKey"`som anger vilken inställning som ska användas. I detta exempel är nyckeln `"key_units"` kopplad till den enhet som är vald i AAPS på telefonen. Värdet är `"true"`om den valda enheten är mgdl och `"false"`om den valda enheten är mmol.

Sedan hittar du två JSON-block som använder formatet "dynData" och som används beroende på den valda inställningen

Observera att det "fasta" filnamnet för bakgrundsbilden nu ersätts av en dynamisk bild som är densamma oavsett BG-värde (filen `Background_mgdl.png`om key_units är "true", `Background_mmol.png` om key_units är false). Vi lägger också till nyckeln `"invalidImage"` så att det alltid finns en bakgrundsbild, även om inga data har tagits emot från telefonen.

#### Kombinera olika inställningar i dynPref med AAPS V2

Oftast när du ställer in en inställning är det inte för att få ett "dynamiskt beteende", utan bara för att få resultatet enligt det du väljer. Men i dynPref räknas det som en dynamisk funktion...

- med `dynData`anger du ett helt block med parametrar (med bilder, fontColor, Color, ...), med `dynPref` kan du kombinera varje parameter efter en viss inställning.
- Här ser vi hur inställningen för matchande avdelare kopplas till inställningen för mörkt läge. När den är aktiverad (true) visas vit text på svart bakgrund på en mörk urtavla (parametern för mörkt läge true) eller svart text på vit bakgrund på en ljus urtavla (mörkt läge false)...

Först tittar vi på början av JSON-filen:

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
`"dynPrefColor": "prefColorDark"` anger dynPref-blocket för alla standardfärger utanför vyerna. Dessa färger justeras efter parametern för mörkt läge i `"prefColorDark"`:

Och i slutet, i blocket `dynPref`, finns ett särskilt dynPref-block för standardfärgerna:

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
Skillnaden mellan detta dynPref-block och de andra vanliga dynPref-blocken för vyer är att du här inte har ett dynData-block för varje värde av parametern `"key_dark"`, utan bara listan över huvudfärgerna (`highColor`, `midColor` , ...)

Nu tittar vi på det som ingår i "avdelarbanderollen" (i exemplet nedan vyn `"basalRate"` som är kopplad till dynPref-vyn `"matchDivider"`):

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
I dynPref-blocket ser du att parametern för matchande avdelare (nyckeln `key_match_divider`) innehåller de 2 blocken "true" och "false". Men dessa två block används bara för att ange att vyn ska använda antingen dynBlock "dark" (alltså exakt samma bakgrunds- och textfärg som de andra vyerna utanför banderollen) eller dynBLock "white" som sätter motsatta färger för bakgrund och text...

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
Observera att du här är i ett "dynData"-block. För att ange en färg eller en fontColor använder du alltså en dynData (anges inte här) och ett enda steg (`"color1"` och `'fontColor1'` används)

- för alla parametrar utom `image` blir standardvärdet för "ogiltigt värde" (om det inte anges särskilt med nyckeln `"invalidColor"` eller `"invalidFontColor"`) `"color1"` och `"fontColor1"`.



Sedan ser vi ett tredje exempel med IOB-vyerna (`iob1` och `iob2`), där vi använder mindre text för detaljerad IOB och större text för total IOB:

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
I vyernas standardinställningar ser du textstorleken (19 för `iob1` och 24 för `iob2`) och de två olika `dynPref`-blocken som ska anpassa textsize (efter parametern för detaljerad IOB) och färger (efter parametern för mörkt läge)

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
Här ser du att beroende på parametern för detaljerad IOB (nyckeln `"key_show_detailed_iob"`) sätts textsize till ett fast värde som är större än standard (24 i stället för 19) när den är "true". Det görs med funktionen "steg" för textsize, med bara ett värde, alltså ett steg... (observera att för alla parametrar utom bilder används textsize1 för ogiltiga data om invalidTextSize inte är satt)

Sedan används dynPref-blocket "dark" för att sätta color och fontColor

I detta exempel blir dynData-blocket som används för vyn iob1, om detaljerad IOB är på och mörkt läge är på:

```text
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

Texten blir alltså vit på svart bakgrund, och storleken 24 ersätter standardstorleken 19 som är satt i vyn

dynData-blocket som används för samma vy iob1, om detaljerad IOB är av och mörkt läge är av, blir:

```text
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Nu blir texten svart på vit bakgrund med storleken 19

#### Tips och tricks för dynPref

- Du kan kombinera så många inställningar du vill, men var försiktig: antalet block som måste beskrivas kan öka mycket snabbt (exponentiellt). Om du kedjar 3 parametrar och vill ange alla situationer måste du beskriva 8 block, om varje parameter bara har 2 värden...
- Var försiktig så att du inte bygger en "oändlig loop" (till exempel om block dynpref1 ska kompletteras av block dynpref2, som ska kompletteras av block dynpref1...). I så fall räknas dynPref-blocken som ogiltiga...
- Glöm inte att lägga till sifferindex efter nyckeln (när du till exempel använder nyckeln `"textsize"`i en vy måste du använda `"textsize1"`i värdeblocket för dynPref, eftersom det är formatet "dynData" och alltså kopplat till ett värde med ett enda steg i detta fall)
- Bara en nyckel `"valueKey"` ska anges för en vy. Om det slutliga `dynData`-blocket byggs av flera `dynPref`-block, lägg alltså inte in flera `"valueKey"`  (och tillhörande `"minData"`, `"maxData"`, ...)

(cwf-reference-new-v2-features)=

### Nya funktioner i CustomWatchface V2 (AAPS V3.3.0 eller senare)

Observera att urtavlor som använder dessa nya funktioner eller vyer kräver den senaste Wear-apk:n byggd från version 3.3.0 av AAPS.

Om du använder en zip-fil för "v2" med en klocka som har CustomWatchface V1 kommer information att saknas eller visas fel på urtavlan.

CustomWatchface V2 har dessa nya funktioner:

- [Ny vy: Status](#cwf-reference-new-status-feature)
- [Ny vy: TempTarget (tillfälligt målvärde)](#cwf-reference-new-temp-target-feature)
- [Ny vy: Reservoarnivå](#cwf-reference-new-reservoir-level-feature)
- [Ny funktion för formatering](#cwf-reference-new-formating-feature)
- [Visa externa data för följare](#cwf-reference-show-external-datas) (upp till 3 uppsättningar data på en enda urtavla, för AAPS, AAPSCLIENT och AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Ny vy: Status

Nyckeln för denna vy är `"status"`, och tillhörande block ingår automatiskt i mallen som exporteras från Wear-apk:n "Custom Watchface V2" (byggd från AAPS version 3.3.0 eller senare)

Denna vy fanns i de tidigare urtavlorna AAPS (NoChart), AAPS (BigChart) och AAPS (Large) och innehåller ett strängvärde (byggt i Wear-apk:n).

Dessa tidigare urtavlor har tagits bort och ersatts av 3 nya anpassade urtavlor i AAPS 3.3.0.

- den minsta informationen är IOB-värdet (syns alltid, oavsett IOB-parameter på klockan)
- sedan finns detaljerade IOB-värden (BolusIOB|BasalIOB) om det är aktiverat i inställningarna
- och BGI-värdet (också om det är aktiverat i inställningarna)

Vyn `"status"` är kopplad till nyckeln `"key_show_loop_status"` (i dynPref) för att styra synligheten.

I V1 kunde detta hanteras med de befintliga vyerna `"iob1"`, `"iob2"` och `"bgi"`  men då behövdes komplicerade dynPref-inställningar för att hantera avståndet mellan varje information beroende på olika inställningar som valts på klockan.

(cwf-reference-new-temp-target-feature)=

#### Ny vy: TempTarget (tillfälligt målvärde)

Nyckeln för denna vy är `"tempTarget"`, och tillhörande block ingår automatiskt i mallen som exporteras från Wear-apk:n "Custom Watchface V2" (byggd från AAPS version 3.3.0 eller senare).

Den visar på urtavlan:

- Profilens målvärde (ett värde eller min–max-målvärden) (standardfärg vit)
- Målvärde justerat av loopen (standardfärg grön)
- Tillfälligt målvärde som användaren har satt (standardfärg gul)

Vyn `"tempTarget"` är kopplad till nyckeln `"key_show_temp_target"` (i dynPref) för att styra synligheten.

DynData-nyckeln (kopplad till färginformationen) är `"tempTarget"` (standardnyckel för DynData som hör till vyn TempTarget)

DynData-värdet är:

- 0 (profilens målvärde),
- 1 (loopens målvärde) eller
- 2 (användarens tillfälliga målvärde)

Observera att denna vy också finns för externa data (se [nedan](#cwf-reference-show-external-datas)) med nycklarna `"tempTarget_Ext1"` och  `"tempTarget_Ext2"` (vy och DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Ny vy: Reservoarnivå

Nyckeln för denna vy är `"reservoir"`, och tillhörande block ingår automatiskt i mallen som exporteras från Wear-apk:n "Custom Watchface V2" (byggd från AAPS version 3.3.0 eller senare).

Denna vy visar reservoarnivån (i `U`) med vit som standardfärg, gul vid varningsnivå och röd vid akut nivå

Vyn `"reservoir"` är kopplad till nyckeln `"key_show_reservoir_level"` (i dynPref) för att styra synligheten.

DynData-nycklarna som hör till reservoarnivån är:

-  `"reservoir"`  (standardnyckel för DynData som hör till vyn Reservoarnivå), kopplad till nivån i insulin `U`
  - Minvärde är 0,0 U
  - Maxvärde är 500,0 U
-  `"reservoirLevel"`
  - 0 (standardnivå, vit färg som standard)
  - 1 (varningsnivå, gul färg som standard)
  - 2 (akut nivå, röd färg som standard)

Observera att denna vy också finns för externa data (se [nedan](#cwf-reference-show-external-datas)) med nycklarna `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` och  `"reservoirLevel_Ext2"` (vy och DynData).

(cwf-reference-new-formating-feature)=

#### Ny funktion för formatering i DynData eller DynPref

Nu kan du hantera en egen formatering av råvärden som klockan tar emot och som finns i [tabellen över nyckelvärden för dyndata](#cwf-reference-dyndata-key-values) nedan.

För att visa hur denna funktion fungerar tar vi urtavlan AAPS (Large) som exempel och tittar på resultatet beroende på värdet "tid sedan" och om den nya vyn "status" är synlig eller inte:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- På den första skärmbilden till vänster är statusvyn synlig (med IOB, detaljerad IOB och BGI). Bara 1/3 av raden finns då för att visa timestamp (mycket kompakt information med `1'`, och för uppladdarens batteri `U: 55%`)
- På den andra skärmbilden har vyn `status`dolts i klockans parametrar. Nu finns det mycket plats för att visa hela etiketten för timestamp och uppladdarens batteri (`1 minute ago` och `Uploader : 55%`)
- På den tredje skärmbilden till höger är inställningen på klockan exakt densamma, men timestamp har ändrats och är över "1". nu kan den anpassade urtavlan visa etiketten uppdaterad med plural (`2 minutes ago`)

Jag förklarar inte här hur alla vyer hanteras i zip-filen (placeringen av varje vy beroende på olika inställningar). Jag fokuserar bara på hur vi hanterar formateringsfunktionen och tillhörande dynamiska värde på urtavlan AAPS (Large).



**Denna funktion kräver ett "dynamiskt block"** (det kan vara antingen ett `dynData`-block eller ett `dynPref`-block)

- För urtavlan AAPS (Large) ville vi att formatet skulle anpassas efter parametrarna (kort eller långt format beroende på om vyn `status` syns), så vi använde ett `dynPref`-block för det.

Först börjar vi med vyerna:

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
här är den viktigaste nyckeln `"dynValue"`: med denna nyckel aktiveras dynamisk hantering av råvärdet. det booleska värdet (true eller false) anger om värdet ska "konverteras eller inte"

- `false`: råvärdet används som det är, utan begränsning eller konvertering
- `true`: råvärdet konverteras (med nycklarna `minData` och `maxData` i dynData-blocket och med `minValue` och `maxValue` som anges i dynData)

På denna urtavla används råvärdena utan konvertering, så för båda vyerna har nyckeln `"dynValue"` satts till `false`.



Nu tittar vi på blocket `"uploader"` som anges i `"dynPref"`:

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
Som standard är vyn  `"uploader_battery"` kopplad till `"uploader_battery"` , så du behöver inte lägga till en egen rad med

`"valueKey": "uploader_battery"` (minvärde 0, maxvärde 100, och råvärdet är telefonens batterinivå i procent)

Formatsträngen finns i nyckeln `"textvalue1"` (nycklarna `"textvalue1"`, `"textvalue2"` osv. är kopplade till nyckeln `"textvalue"` som kan finnas i blocket `view`)

- Nyckeln `"textvalue"`  kan användas med formateringsinformation i vyblocket (då är formatet statiskt, oavsett värde eller inställningar)
- Om du vill ändra formateringen efter inställningar eller värden kan du använda hela funktionen dynData. De särskilda nycklarna är `"invalidTextValue"` (utan "formateringsinformation" eftersom värdet inte är giltigt) och `"textvalue1"`, `"textvalue2"`... (och så många värden du vill för att hantera stegen mellan minData och maxData)
- de extra `"dynPref"`-nycklarna används för att ange andra block för variation i position och färg, beroende på synliga vyer och inställningarna för mörkt läge och matchande avdelare

När det gäller formatsträngen är syntaxen följande: `%[flags][width][.precision]f`

- `%` är början på en formatering, `f` är slutet och ska användas för att konvertera Double-värden.
  - Observera att om du vill använda tecknet `%` i din sträng måste du skriva `%%` för att ange att det inte är en formatsträng utan ett procenttecken.
- `[flag]` är valfri. Den kan främst vara `+` om du alltid vill ha ett tecken före talet, eller `(` om du vill ha negativa värden inom parentes
- `[width]`  är valfri och anger minsta antal tecken som ska skrivas ut
- `[.precision]` anger antalet decimaler efter decimaltecknet.
  - Observera att värdena är av typen Double, så det är klokt att alltid ange en precision (för att undvika många tecken efter decimaltecknet på grund av precisionen i Kotlin)

I exemplet ovan visar alltså `%.0f` Double-värdet som ett heltal



Nu tittar vi på dynPref-blocket för timestamp för att hantera plural:

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
- om vyn `status` är synlig (alltså nyckeln  `"key_show_loop_status"` är `true`) används ett enda format (`"textvalue1"`), med `'`  som "enhet"
- om vyn `status` är dold används 2 olika format: ett för 0 eller 1 i singular, och ett annat format för värden över 2 i plural
  - `"minData"` och `"maxData"` används för att ange intervallet och se till att bytet från singular till plural sker mellan värdena 1 och 2
  - Observera att `"maxData"` (heltal) har satts till 3 och inte 2. Det beror på att Double-data i systemet inte är heltal, så ett värde lite över eller lite under 1 kan få singular- eller pluralformat även om värdet är 1 efter avrundning till heltal.

- För vyn `timestamp` är det viktigt att sätta nyckeln `"dynValue"` till `false`. Annars begränsas alla värden över 3 till `3 minutes ago` på grund av formateringen (singular/plural) och konverteringen med `maxData`...



**Fler kommentarer om formateringsfunktionen**

- kom ihåg att de enda dynamiska värden som finns är de som listas [här](#cwf-reference-dyndata-key-values)
- Alla `BG`-värden är i enheten mgdl. Om du vill använda formateringsfunktionen för att visa värden i mmol måste du själv konvertera från mgdl till mmol. I ett `dynData`- eller `dynPref`-block ska nyckeln som namnger blocket med `"minValue"`och `"maxValue"` för konvertering av värdet heta `"dynValue": { ...  }`. (se [DynData-nycklar](#cwf-reference-dyndata-keys))
- Om du i en vy vill använda en statisk formatsträng, med nyckeln `"textvalue"` för att ange formatet och nyckeln `"dynValue"` för att använda det dynamiska värdet, måste du också använda ett `"dynData"`- eller ett `"dynPref"`block (även om det är tomt) för att kunna använda formateringsfunktionen.
- `"textvalue1"`, `"textvalue2"` till textvalue*n* kan användas utan formateringsfunktionen för att ersätta double-värdets steg med en egen textetikett (till exempel med nyckelvärdet `"day_name"` och sju steg för att ange egna namn på veckodagarna, ... )

- Fullständig dokumentation finns i [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Visa externa data för följare

En anpassad urtavla kan nu visa upp till 3 uppsättningar data på samma urtavla: AAPS, AAPSCLIENT och AAPSCLIENT2

För att använda denna funktion måste du:

- ha minst 2 av följande 3 appar installerade på telefonen (AAPS, AAPSCLIENT, AAPSCLIENT2)
- aktivera sändning av data ("Sänd data till klocka") i AAPSCLIENT och/eller AAPSCLIENT2, så att data skickas till huvudappen som synkar med CustomWatchface (AAPS eller AAPSCLIENT)
- Använd en anpassad urtavla som har vyer med nycklar som innehåller `_Ext1` eller `_Ext2` (se [Referens för Key och KeyValue](#cwf-reference-key-and-keyvalue-reference) nedan)

Observera att om huvudappen på telefonen är AAPSCLIENT och den andra appen som sänder data är AAPSCLIENT2, måste du aktivera parametern `Switch external data in watchface` ("Växla externa data i urtavlan") bland parametrarna för anpassad urtavla, om du använder en urtavla med standardvyer och de extra vyerna Ext1 (Ext1 är kopplad till AAPSCLIENT och Ext2 till AAPSCLIENT2)

Dessutom har tre nya vyer (`"patient_name"` , `"patient_name_Ext1"`  och `"patient_name_Ext2"` *) lagts till så att patientens namn (som anges i inställningarna i AAPS) automatiskt kan visas på urtavlan (se exemplet nedan)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Referens för Key och KeyValue

(cwf-reference-list-of-metadata-keys)=

### Lista över metadata-nycklar

(cwf-reference-list-of-standard-metadata-keys)=

#### Lista över nycklar för standardinformation i metadata

| Nyckel             | Kommentar                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Namn på den anpassade urtavlan                                                                                                                |
| `"author"`         | Namn eller pseudonym för författaren/författarna                                                                                              |
| `"created_at"`     | Datum då den skapades (eller uppdaterades). Var försiktig: `/` är ett specialtecken, så om du använder det i datumet ska du sätta `\`framför |
| `"cwf_version"`    | Plugin för urtavla som är kompatibelt med designen av din urtavla                                                                             |
| `"author_version"` | Här kan författaren ange versionen av sin urtavla                                                                                             |
| `"comment"`        | Fritext som kan användas för att ge information om eller begränsningar för urtavlan                                                           |

(cwf-reference-preference-keys)=

#### Inställningsnycklar

| Nyckel                        | Standardvärde och kommentar                                                                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true låser detaljerade IOB-data i vyn `iob2`. Då visar `iob1` (om den är synlig och inte ersatt av en ikon) total IOB.<br />false låser total IOB i vyn `iob2`. kan användas om `iob2`är för smal för att visa detaljerad IOB rätt |
| `"key_show_detailed_delta"`   | false (bara om designen inte klarar bredden på detaljerad delta i vyerna `delta`och `avg_delta`)                                                                                                                                         |
| `"key_show_bgi"`              | true om din design kräver informationen `bgi`                                                                                                                                                                                            |
| `"key_show_iob"`              | true om din design kräver vyerna `iob1` eller `iob2`                                                                                                                                                                                     |
| `"key_show_cob"`              | true om din design kräver vyerna `cob1` eller `cob2`                                                                                                                                                                                     |
| `"key_show_delta"`            | true om din design kräver informationen `delta`                                                                                                                                                                                          |
| `"key_show_avg_delta"`        | true om din design kräver informationen `avg_delta`                                                                                                                                                                                      |
| `"key_show_temp_target"`      | true om din design kräver informationen `tempTarget`                                                                                                                                                                                     |
| `"key_show_reservoir_level"`  | true om din design kräver informationen `reservoir`                                                                                                                                                                                      |
| `"key_show_uploader_battery"` | true om din design kräver informationen `uploader_battery` (telefonens batteri)                                                                                                                                                          |
| `"key_show_rig_battery"`      | true om din design kräver informationen `rig_battery`                                                                                                                                                                                    |
| `"key_show_temp_basal"`       | true om din design kräver informationen `basalRate`                                                                                                                                                                                      |
| `"key_show_direction"`        | true om din design kräver informationen `direction` (pilar för BG-förändring)                                                                                                                                                            |
| `"key_show_ago"`              | true om din design kräver informationen `timestamp` (minuter sedan senast mottagna BG)                                                                                                                                                   |
| `"key_show_bg"`               | true om din design kräver informationen `sgv` (BG-värde)                                                                                                                                                                                 |
| `"key_show_loop_status"`      | true om din design kräver informationen `loop` (loopstatus och tid sedan)                                                                                                                                                                |
| `"key_show_week_number"`      | true om din design kräver informationen `week_number`                                                                                                                                                                                    |
| `"key_show_date"`             | true om din design kräver informationen `Date`, `Month` eller `Day of the week`                                                                                                                                                          |

#### Interna nycklar

| Nyckel                | Kommentar                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"filename"`          | Denna nyckel skapas (eller uppdateras) automatiskt när urtavlan laddas och innehåller namnet på den lokala zip-filen i mappen exports                                                      |
| `"cwf_authorization"` | denna nyckel skapas (när urtavlan laddas) och uppdateras varje gång behörighetsinställningen ändras i inställningarna för Wear. Den används för att synkronisera behörigheten till klockan |

(cwf-reference-list-of-general-parameters)=

### Lista över allmänna parametrar

| Nyckel                   | Kommentar                                                                                                                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"highColor"`            | `"#FFFF00"`(standard gul): Färg på BG-värde, trendpilar och BG-värden i grafen om BG är över övre gränsen (hyper)                                                                                                                          |
| `"midColor"`             | `"#00FF00"`(standard grön): Färg på BG-värde, trendpilar och BG-värden i grafen om BG är inom målområdet                                                                                                                                   |
| `"lowColor"`             | `"#FF0000"`(standard röd): Färg på BG-värde, trendpilar och BG-värden i grafen om BG är under nedre gränsen (hypo)                                                                                                                         |
| `"lowBatColor"`          | `"#E53935"`(standard mörkröd): Färg på `uploader_battery` när värdet är lågt (under 30 %)                                                                                                                                                  |
| `"carbColor"`            | `"#FB8C00"`(standard orange): Färg på kolhydratpunkter i grafen                                                                                                                                                                            |
| `"basalBackgroundColor"` | `"#0000FF"`(standard mörkblå): Färg på kurvan för tillfällig basal (TBR) i grafen                                                                                                                                                          |
| `"basalCenterColor"`     | `"#64B5F6"`(standard ljusblå): Färg på bolus- eller SMB-punkter i grafen                                                                                                                                                                   |
| `"gridColor"`            | `"#FFFFFF"`(standard vit): Färg på linjer och skalans text i grafen                                                                                                                                                                        |
| `"pointSize"`            | 2 (standard): storlek på punkter i grafen (1 för små punkter, 2 för stora punkter)                                                                                                                                                         |
| `"enableSecond"`         | false (standard): anger om urtavlan ska visa sekunder eller inte i vyerna `time`, `second` eller `second_hand`. det är viktigt att vyernas synlighet stämmer med denna övergripande inställning, som gör att tiden uppdateras varje sekund |
| `"dayNameFormat"`        | "E" (standard): från "E" till "EEEE" anger format för veckodagens namn (nummer, kort namn, fullständigt namn)                                                                                                                              |
| `"monthFormat"`          | "MMM" (standard): från "M" till "MMMM" anger format för månad (nummer, kort namn, fullständigt namn)                                                                                                                                       |

(cwf-reference-list-of-hardcoded-resource-files)=

### Lista över fasta resursfiler

För de flesta bilder kan du med suffixen High och Low anpassa bilden efter BG-nivån (inom målområdet, hyper eller hypo)

| Filnamn                                                         | Kommentar                                                                                                                                                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomWatchface                                                 | Bild som visas när du väljer urtavla och i pluginet Klocka (Wear)                                                                                                   |
| Background,<br />BackgroundHigh,<br />BackgroundLow | ingen (standard svart): Bakgrundsbild. bakgrunden syns alltid och standardfärgen är svart om ingen bild finns. Färgen kan ändras så att den passar urtavlans design |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | ingen (standard): Bild framför grafen (genomskinlighet behövs för att grafen bakom ska synas). Kan användas för att begränsa grafens kanter                         |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | enkel sifferskiva (standard): bild framför alla textvärden. genomskinlighet krävs för att alla värden bakom ska synas                                               |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (standard): bild på timvisaren. en standardbild finns och kan färgas så att den passar en analog design. Obs: rotationsaxeln är bildens mittpunkt         |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (standard): bild på minutvisaren. en standardbild finns och kan färgas så att den passar en analog design. Obs: rotationsaxeln är bildens mittpunkt     |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (standard): bild på sekundvisaren. en standardbild finns och kan färgas så att den passar en analog design. Obs: rotationsaxeln är bildens mittpunkt    |
| ArrowNone                                                       | ?? (standard): bild som visas när ingen giltig pil finns.                                                                                                           |
| ArrowDoubleUp                                                   | ↑↑ (standard): bild på dubbel pil uppåt                                                                                                                             |
| ArrowSingleUp                                                   | ↑ (standard): bild på enkel pil uppåt                                                                                                                               |
| Arrow45Up                                                       | ↗ (standard): bild på pil 45 grader uppåt                                                                                                                           |
| ArrowFlat                                                       | → (standard): bild på vågrät pil                                                                                                                                    |
| Arrow45Down                                                     | ↘ (standard): bild på pil 45 grader nedåt                                                                                                                           |
| ArrowSingleDown                                                 | ↓ (standard): bild på enkel pil nedåt                                                                                                                               |
| ArrowDoubleDown                                                 | ↓↓ (standard): bild på dubbel pil nedåt                                                                                                                             |

För varje filnamn ovan kan filändelsen vara `.jpg`, `.png` eller `.svg`. Men var försiktig: `.jpg`hanterar inte genomskinlighet (så de flesta filer ska vara .png eller .svg för att inte dölja vyer som ligger bakom...)

(cwf-reference-list-of-view-keys)=

### Lista över vy-nycklar

Listan är sorterad från bakgrund till förgrund. Det är mycket viktigt att känna till denna ordning när du ordnar din urtavla, eftersom vissa bilder eller texter kan döljas av andra bilder.

Obs: alla nycklar som slutar med `_Ext1` eller `_Ext2` är nya och gäller urtavlor för flera användare.

| Nyckel                                                                                 | Typ av vy       | Kopplade data                                                                                                                                          | DynData-nyckel                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"chart"`                                                                              | Särskild grafvy | Grafiska kurvor                                                                                                                                        |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"freetext1"`                                                                          | Textvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"freetext2"`                                                                          | Textvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"freetext3"`                                                                          | Textvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"freetext4"`                                                                          | Textvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Textvy          | Patientens namn                                                                                                                                        |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Textvy          | IOB-etikett eller total IOB                                                                                                                            |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Textvy          | Total IOB eller detaljerad IOB                                                                                                                         |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Textvy          | Etikett för kolhydrater                                                                                                                                |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Textvy          | COB-värde                                                                                                                                              |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Textvy          | Kort delta (5 min)                                                                                                                                     | delta<br/>delta_Ext1<br/>delta_Ext2                                                                                                  |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Textvy          | Genomsnittlig delta (15 min)                                                                                                                           | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Textvy          | BG-målvärde (ett värde eller min–max-målvärden)                                                                                                        | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Textvy          | Reservoarnivå                                                                                                                                          | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Textvy          | telefonens batterinivå (%)                                                                                                                             | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Textvy          | riggens batterinivå (%)                                                                                                                                | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Textvy          | % eller absolut värde                                                                                                                                  |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi_Ext2"` *                              | Textvy          | mgdl/(5 min) eller mmol/(5 min)                                                                                                                        |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Textvy          | Sammanfattning av IOB (oavsett IOB-inställning på klockan), detaljerad IOB (enligt inställningen på klockan) och BGI (enligt inställningen på klockan) |                                                                                                                                                  |
| `"time"`                                                                               | Textvy          | HH:MM eller HH:MM:SS                                                                                                                                   |                                                                                                                                                  |
| `"hour"`                                                                               | Textvy          | HH                                                                                                                                                     |                                                                                                                                                  |
| `"minute"`                                                                             | Textvy          | MM                                                                                                                                                     |                                                                                                                                                  |
| `"second"`                                                                             | Textvy          | SS                                                                                                                                                     |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Textvy          | AM eller PM                                                                                                                                            |                                                                                                                                                  |
| `"day_name"`                                                                           | Textvy          | veckodagens namn (jfr dayNameFormat)                                                                                                                   | day_name                                                                                                                                         |
| `"day"`                                                                                | Textvy          | DD datum                                                                                                                                               | day                                                                                                                                              |
| `"week_number"`                                                                        | Textvy          | (WW) veckonummer                                                                                                                                       | week_number                                                                                                                                      |
| `"month"`                                                                              | Textvy          | månadens namn (jfr monthFormat)                                                                                                                        |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Textvy          | minuter sedan senaste körning och status (färgade pilar i bakgrunden). De färgade pilarna kan anpassas med DynData                                     | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Bildvy          | TrendArrows                                                                                                                                            | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Textvy          | heltal (minuter sedan)                                                                                                                                 | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Textvy          | sgv-värde (mgdl eller mmol)                                                                                                                            | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |
| `"second_hand"`                                                                        | Bildvy          |                                                                                                                                                        |                                                                                                                                                  |

**Vy som lagts till i Custom Watchface V2.0 eller senare (finns i Wear-apk för AAPS 3.3.0 eller senare)*

(cwf-reference-list-of-json-keys)=

### Lista över JSON-nycklar

(cwf-reference-common-keys)=

#### Gemensamma nycklar

 som kan användas för alla typer av vyer (textvy, bildvy, grafvy)

| Nyckel                   | typ     | kommentar / värde                                                                                                                                                                                |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"width"`                | int     | vyns bredd i pixlar                                                                                                                                                                              |
| `"height"`               | int     | vyns höjd i pixlar                                                                                                                                                                               |
| `"topmargin"`            | int     | övre marginal i pixlar                                                                                                                                                                           |
| `"leftmargin"`           | int     | vänster marginal i pixlar                                                                                                                                                                        |
| `"rotation"`             | int     | rotationsvinkel i grader                                                                                                                                                                         |
| `"visibility"`           | string  | se tabellen över nyckelvärden                                                                                                                                                                    |
| `"dynData"`              | string  | namnet på nyckelblocket som anger vilka dynamiska data som ska kopplas och tillhörande animering (färger, bild, förskjutning, rotation)<br />`"dynData": "customName",` (se nedan )        |
| `"leftOffset"`           | boolean | lägg till denna nyckel med nyckelvärdet true för att aktivera vågrät förskjutning (positivt eller negativt värde) utifrån dynData-värdet                                                         |
| `"topOffset"`            | boolean | lägg till denna nyckel med nyckelvärdet true för att aktivera lodrät förskjutning (positivt eller negativt värde) utifrån dynData-värdet                                                         |
| `"rotationOffset"`       | boolean | lägg till denna nyckel med nyckelvärdet true för att aktivera rotation (positivt eller negativt värde) utifrån dynData-värdet                                                                    |
| `"twinView"`             | string  | nyckeln för den andra vyn (oftast har den andra vyn också parametern twinView med nyckeln för denna vy)                                                                                          |
| `"topOffsetTwinHidden"`  | int     | antal pixlar som vyns position ska flyttas lodrätt om tvillingvyn är dold (positivt eller negativt värde)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2           |
| `"leftOffsetTwinHidden"` | int     | antal pixlar som vyns position ska flyttas vågrätt om tvillingvyn är dold (positivt eller negativt värde)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2         |
| `"dynPref"`              | string  | namnet på nyckelblocket som anger vilken dynamisk inställning som ska kopplas och tillhörande animering (färger, bild, förskjutning, rotation)<br />`"dynPref": "customName",` (se nedan ) |

(cwf-reference-textview-keys)=

#### TextView-nycklar

| Nyckel         | typ     | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   | int     | teckenstorlek i pixlar (kom ihåg att ett teckensnitt kan ha marginal upptill och nedtill, så den verkliga textstorleken blir oftast mindre än det angivna antalet pixlar). Observera att storleken ska vara mindre än vyns höjd för att texten inte ska klippas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `"gravity"`    | string  | se tabellen över nyckelvärden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `"font"`       | string  | se tabellen över nyckelvärden för tillgängliga teckensnitt.<br />Kan också vara filnamnet (utan filändelse) för teckensnitt som finns i zip-filen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"fontStyle"`  | string  | se tabellen över nyckelvärden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `"fontColor"`  | string  | Hanterar teckenfärgen<br />`"#RRGGBB"`: färgkod i RGB-format, hexadecimala värden #FF0000 är röd<br />`"#AARRGGBB"`: AA innehåller alfainformation (genomskinlighet), 00 är genomskinlig, FF är ogenomskinlig<br />`"bgColor"`: nyckelvärdet bgColor är ett enkelt sätt att använda highColor, midColor eller lowColor beroende på BG-värdet                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"allCaps"`    | boolean | true om du vill ha texten med versaler (främst veckodagens namn eller månadens namn)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `"background"` | string  | `resource_filename` du kan lägga in en resursbild som bakgrund för textvyn (resursfilen skalas om så att den passar textvyns höjd och bredd, men bildens proportioner behålls). textvärdet ligger framför bakgrundsbilden.<br />- Observera att denna nyckel också kan användas för vyn `chart` för att sätta en egen bakgrund för grafen, framför bakgrundsbilden                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `"color"`      | string  | Hanterar vyns bakgrundsfärg eller justerar bildens färg (bara bitmapp)<br />`"#RRGGBB"`: färgkod i RGB-format, hexadecimala värden #FF0000 är röd<br />`"#AARRGGBB"`: AA innehåller alfainformation (genomskinlighet), 00 är genomskinlig, FF är ogenomskinlig<br />`"bgColor"`: nyckelvärdet bgColor är ett enkelt sätt att använda highColor, midColor eller lowColor beroende på BG-värdet<br />- För inbyggda standardbilder (visare, sifferskiva) används färgen direkt. För bitmappsbilder (jpg eller png) används ett filter för mättnadsgradient på bilden<br />- För svg har denna parameter ingen effekt (färgen i svg-filer kan inte ändras)<br />- Observera att denna nyckel också kan användas för vyn `chart` för att sätta en egen bakgrund för grafen, framför bakgrundsbilden |
| `"textvalue"`  | string  | Nyckel som gäller de 4 fritextvyerna i layouten (från freetext1 till freetext4). Med den kan du ange texten som ska visas (det kan vara en etikett, eller bara `:` om du vill lägga till en avgränsare mellan timvyn och minutvyn...)  
Från Custom Watchface plugin v2 (AAPS 3.3) kan textvalue användas för att ange en formatsträng för de andra textvyerna (används med nyckeln `dynValue` och `dynData` eller `dynPref`). till exempel                                                                                                                                                                                                                                                                                                                                                                                         |
| `"dynValue"`*  | boolean | true om du vill använda råvärdet (double). Användbar med nyckeln `textvalue` om du vill ha ett eget format för att visa värdet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Nyckel som lagts till i Custom Watchface V2.0 eller senare (finns i Wear-apk för AAPS 3.3.0 eller senare)*

(cwf-reference-imageview-keys)=

#### ImageView-nycklar

| Nyckel    | typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Hanterar vyns bakgrundsfärg eller justerar bildens färg (bara bitmapp)<br />`"#RRGGBB"`: färgkod i RGB-format, hexadecimala värden #FF0000 är röd<br />`"#AARRGGBB"`: AA innehåller alfainformation (genomskinlighet), 00 är genomskinlig, FF är ogenomskinlig<br />`"bgColor"`: nyckelvärdet bgColor är ett enkelt sätt att använda highColor, midColor eller lowColor beroende på BG-värdet<br />- För inbyggda standardbilder (visare, sifferskiva) används färgen direkt. För bitmappsbilder (jpg eller png) används ett filter för mättnadsgradient på bilden<br />- För svg har denna parameter ingen effekt (färgen i svg-filer kan inte ändras)<br />- Observera att denna nyckel också kan användas för vyn `chart` för att sätta en egen bakgrund för grafen, framför bakgrundsbilden |

(cwf-reference-chartview-keys)=

#### ChartView-nycklar

| Nyckel         | typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Hanterar vyns bakgrundsfärg eller justerar bildens färg (bara bitmapp)<br />`"#RRGGBB"`: färgkod i RGB-format, hexadecimala värden #FF0000 är röd<br />`"#AARRGGBB"`: AA innehåller alfainformation (genomskinlighet), 00 är genomskinlig, FF är ogenomskinlig<br />`"bgColor"`: nyckelvärdet bgColor är ett enkelt sätt att använda highColor, midColor eller lowColor beroende på BG-värdet<br />- För inbyggda standardbilder (visare, sifferskiva) används färgen direkt. För bitmappsbilder (jpg eller png) används ett filter för mättnadsgradient på bilden<br />- För svg har denna parameter ingen effekt (färgen i svg-filer kan inte ändras)<br />- Observera att denna nyckel också kan användas för vyn `chart` för att sätta en egen bakgrund för grafen, framför bakgrundsbilden |
| `"background"` | string | `resource_filename` du kan lägga in en resursbild som bakgrund för textvyn (resursfilen skalas om så att den passar textvyns höjd och bredd, men bildens proportioner behålls). textvärdet ligger framför bakgrundsbilden.<br />- Observera att denna nyckel också kan användas för vyn `chart` för att sätta en egen bakgrund för grafen, framför bakgrundsbilden                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

(cwf-reference-key-values)=

### Nyckelvärden

| Nyckelvärde                  | nyckel     | comment                                                                         |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------- |
| `"gone"`                     | visibility | vyn är dold                                                                     |
| `"visible"`                  | visibility | vyn är synlig på urtavlan (men synligheten kan slås på eller av i parametrarna) |
| `"center"`                   | gravity    | texten är centrerad lodrätt och vågrätt i vyn                                   |
| `"left"`                     | gravity    | texten är centrerad lodrätt men vänsterjusterad i vyn                           |
| `"right"`                    | gravity    | texten är centrerad lodrätt men högerjusterad i vyn                             |
| `"sans_serif"`               | font       |                                                                                 |
| `"default"`                  | font       |                                                                                 |
| `"default_bold"`             | font       |                                                                                 |
| `"monospace"`                | font       |                                                                                 |
| `"serif"`                    | font       |                                                                                 |
| `"roboto_condensed_bold"`    | font       |                                                                                 |
| `"roboto_condensed_light"`   | font       |                                                                                 |
| `"roboto_condensed_regular"` | font       |                                                                                 |
| `"roboto_slab_light"`        | font       |                                                                                 |
| `"normal"`                   | fontStyle  |                                                                                 |
| `"bold"`                     | fontStyle  |                                                                                 |
| `"bold_italic"`              | fontStyle  |                                                                                 |
| `"italic"`                   | fontStyle  |                                                                                 |

(cwf-reference-dyndata-keys)=

### DynData-nycklar

| Nyckel                    | typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | block  | anger blocket med alla dynamiska datablock som används för vyerna. oftast efter den sista vyn.<br />Alla nycklar som anges i detta block används som nyckelvärde i vyblocket:<br />`"dynData": { dynData blocks }`<br />och varje block anges med ett eget namn och flera nycklar inuti:<br />`"customName": { one dynData block }`                                                                                                                                                                                     |
| `"valueKey"`              | string | namnet på de dynamiska data som ska användas (oftast samma som nyckeln för den kopplade vyn).<br />Om den saknas används som standard värdena för den vy som använder detta block. <br />du kan till exempel ange ett block för att anpassa batterinivåns procent utan att ange valueKey, och sedan använda samma block för att anpassa uploader_battery och rig_battery                                                                                                                                                          |
| `"minData"`               | int    | anger det lägsta värde som ska tas med för AAPS-data: om värdet till exempel är sgv (enhet mgdl internt) och minData är satt till 50, sätts alla BG-värden under 50 mgdl till 50.<br />- Observera att minData och maxData används för att beräkna dynamiska värden (i pixlar eller i grader).                                                                                                                                                                                                                                            |
| `"maxData"`               | int    | anger det högsta värde som ska tas med för AAPS-data: om värdet till exempel är sgv (enhet mgdl internt) och maxData är satt till 330, sätts alla BG-värden över 330 mgdl till 330.                                                                                                                                                                                                                                                                                                                                                             |
| `"leftOffset"`            | block  | Anger vyns vågräta förskjutning i pixlar enligt min- och maxvärdena.<br />- Det innehåller nyckeln `minValue`, nyckeln `maxValue` och nyckeln `invalidValue` (valfri)<br />- Om data är under eller lika med minData flyttas vyn minValue pixlar, och om data är över eller lika med maxData flyttas vyn maxValue pixlar<br />Observera att `leftOffset` måste vara satt till true i vyn för att förskjutningen ska användas                                                                                                  |
| `"topOffset"`             | block  | Anger vyns lodräta förskjutning i pixlar enligt min- och maxvärdena.<br />- Det innehåller nyckeln `minValue`, nyckeln `maxValue` och nyckeln `invalidValue` (valfri)<br />- Om data är under eller lika med minData flyttas vyn minValue pixlar, och om data är över eller lika med maxData flyttas vyn maxValue pixlar<br />Observera att topOffset måste vara satt till true i vyn för att förskjutningen ska användas                                                                                                     |
| `"rotationOffset"`        | block  | Anger vyns rotationsvinkel i grader enligt min- och maxvärdena.<br />- Det innehåller nyckeln `minValue`, nyckeln `maxValue` och nyckeln `invalidValue` (valfri)<br />- Om data är under eller lika med `minData` roterar vyn `minValue` grader, och om data är över eller lika med `maxData` roterar vyn `maxValue` grader<br />Observera att `rotationOffset` måste vara satt till true i vyn för att rotationen ska användas                                                                                               |
| `"dynValue"`*             | block  | Anger konverteringen av dynValue från min- och maxintervallet till min- och maxvärden.<br />- Det innehåller nyckeln `minValue`, nyckeln `maxValue` och nyckeln `invalidValue` (valfri)<br />- Om data är under eller lika med `minData` blir det skickade dynValue minValue (konverterat till double), och om data är över eller lika med `maxData` blir det beräknade dynValue maxValue (konverterat till double)<br />Observera att nyckeln `dynValue` måste vara satt till true i vyn för att konverteringen ska användas |
| `"minValue"`              | int    | resultatvärde som ska användas för vyn (nyckeln gäller bara i ett block leftOffset, topOffset eller rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"maxValue"`              | int    | resultatvärde som ska användas för vyn (nyckeln gäller bara i ett block leftOffset, topOffset eller rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"invalidValue"`          | int    | resultatvärde som ska användas för vyn om data är ogiltiga (nyckeln gäller bara i ett block leftOffset, topOffset eller rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                         |
| `"invalidImage"`          | string | `resource_filename` som ska användas för ImageView eller bakgrunden i TextView om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| image*1_to_n*           | string | `resource_filename` bild som ska användas för varje steg mellan minData (eller nära minData) med `"image1"` och maxData (eller nära maxData) med image*n*<br />Om du till exempel lägger in 5 bilder (från image1 till image5) delas intervallet mellan minData och maxData i 5 steg, och beroende på datavärdet visas motsvarande bild                                                                                                                                                                                                   |
| `"invalidFontColor"`      | string | Hanterar steg för fontColor om data är ogiltiga<br />`"#RRGGBB"` eller `"#AARRGGBB"`: färg som används om ogiltiga data tas emot (kan vara genomskinlig om AA=00)                                                                                                                                                                                                                                                                                                                                                                         |
| fontColor*1_to_n*       | string | Hanterar steg för fontColor<br />`"#RRGGBB"` eller `"#AARRGGBB"`: färg som används för varje steg mellan minData (eller nära minData) med `"fontColor1"` och maxData (eller nära maxData) med fontColor*n*                                                                                                                                                                                                                                                                                                                                |
| `"invalidColor"`          | string | Hanterar steg för bakgrundsfärg eller bildfärg om data är ogiltiga<br />`"#RRGGBB"` eller `"#AARRGGBB"`: färg som används om ogiltiga data tas emot (kan vara genomskinlig om AA=00)                                                                                                                                                                                                                                                                                                                                                      |
| color*1_to_n*           | string | Hanterar steg för bakgrundsfärg eller bildfärg<br />`"#RRGGBB"` eller `"#AARRGGBB"`: färg som används för varje steg mellan minData (eller nära minData) med `"color1"` och maxData (eller nära maxData) med color*n*                                                                                                                                                                                                                                                                                                                     |
| `"invalidTextSize"`       | int    | Hanterar steg för textstorlek om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| textsize*1_to_n*        | int    | Hanterar textstorleken för varje steg mellan minData (eller nära minData) med `"textsize1"` och maxData (eller nära maxData) med textsize*n*                                                                                                                                                                                                                                                                                                                                                                                                    |
| `"invalidLeftOffset"`     | int    | Hanterar steg för leftOffset om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| leftOffset*1_to_n*      | int    | Hanterar leftOffset för varje steg mellan minData (eller nära minData) med `"leftOffset1"` och maxData (eller nära maxData) med leftOffset*n*<br />Obs: kan användas med dynPref för att flytta en vy när en annan är dold...                                                                                                                                                                                                                                                                                                             |
| `"invalidTopOffset"`      | int    | Hanterar steg för topOffset om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| topOffset*1_to_n*       | int    | Hanterar topOffset för varje steg mellan minData (eller nära minData) med topOffset1 och maxData (eller nära maxData) med topOffset*n*<br />Obs: kan användas med dynPref för att flytta en vy när en annan är dold...                                                                                                                                                                                                                                                                                                                    |
| `"invalidRotationOffset"` | int    | Hanterar steg för rotationOffset om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| rotationOffset*1_to_n*  | int    | Hanterar rotationOffset för varje steg mellan minData (eller nära minData) med rotationOffset1 och maxData (eller nära maxData) med rotationOffset*n*                                                                                                                                                                                                                                                                                                                                                                                           |
| `"invalidTextvalue"`*     | string | Hanterar textvalue om data är ogiltiga                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| textvalue*1_to_n* *     | string | Hanterar textvalue för varje steg mellan minData (eller nära minData) med textvalue1 och maxData (eller nära maxData) med textvalue*n*<br />Obs: kan innehålla en formatsträng om `"dynValue"` är satt till true i vyn                                                                                                                                                                                                                                                                                                                    |

**Nyckel som lagts till i Custom Watchface V2.0 eller senare (finns i Wear-apk för AAPS 3.3.0 eller senare)*

(cwf-reference-dyndata-key-values)=

### Nyckelvärden för DynData

| Nyckelvärde                                                                                 | nyckel   | comment                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | standard minData = 39 mgdl<br />standard maxData = 400 mgdl<br />- Observera att verklig maxData beror på din sensor och att enheten alltid är mgdl för interna värden                                                                                               |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | standard minData = -1 (hypo)<br />standard maxData = 1 (hyper)<br />om BG är inom målområdet = 0                                                                                                                                                                     |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | standard minData = 1 (dubbel nedåt)<br />standard maxData = 7 (dubbel uppåt)<br />vågrät pil = 4<br />Fel eller saknade data = 0                                                                                                                               |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | standard minData = -25 mgdl<br />standard maxData = 25 mgdl<br />- Observera att verklig min- och maxData kan vara högre, och att enheten alltid är mgdl för interna värden                                                                                          |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | standard minData = -25 mgdl<br />standard maxData = 25 mgdl<br />- Observera att verklig min- och maxData kan vara högre, och att enheten alltid är mgdl för interna värden                                                                                          |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | standard minData = 0 (profilens målvärde)<br />standard maxData = 2 (tillfälligt målvärde)<br />Målvärdet är justerat av loopen = 1<br/>Standard eller information saknas = 0                                                                                  |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | standard minData = 0 U<br />standard maxData = 500 U                                                                                                                                                                                                                       |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | standard minData = 0 (standardfärg)<br/>standard maxData = 2 (färg för akut nivå)<br/>Varningsfärg = 1                                                                                                                                                               |
| `"uploader_battery"`                                                                        | valueKey | standard minData = 0 %<br />standard maxData = 100%                                                                                                                                                                                                                        |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | standard minData = 0 %<br />standard maxData = 100%                                                                                                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | standard minData = 0 min<br />standard maxData = 60 min                                                                                                                                                                                                                    |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | standard minData = 0 min<br />standard maxData = 28 min<br />- Observera att statuspilarna är gröna under 14 min och röda över 14 min. Om du lägger in 2 bilder kan du alltså ersätta statusbakgrunden med dina egna bilder med standardvärdena för min- och maxData |
| `"day"`                                                                                     | valueKey | standard minData = 1<br />standard maxData = 31                                                                                                                                                                                                                            |
| `"day_name"`                                                                                | valueKey | standard minData = 1<br />standard maxData = 7                                                                                                                                                                                                                             |
| `"month"`                                                                                   | valueKey | standard minData = 1<br />standard maxData = 12                                                                                                                                                                                                                            |
| `"week_number"`                                                                             | valueKey | standard minData = 1<br />standard maxData = 53                                                                                                                                                                                                                            |

**Nyckel som lagts till i Custom Watchface V2.0 eller senare (finns i Wear-apk för AAPS 3.3.0 eller senare)*

(cwf-reference-dynpref-keys)=

### DynPref-nycklar

| Nyckel           | typ    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | block  | anger blocket med alla dynamiska inställningsblock som används för vyerna. Oftast efter den sista vyn eller efter blocket dynData.<br />Alla nycklar som anges i detta block används som nyckelvärde i vyblocket:<br />`"dynPref": { dynPref blocks }`<br />och varje block anges med ett eget namn och flera nycklar inuti:<br />`"customName": { one dynPref block }`                                                                                                                                    |
| `"dynPref"`      | string | *I ett vyblock*<br />namnet på det dynPref-block som ska användas (oftast samma som nyckeln för den kopplade vyn eller den kopplade inställningen).                                                                                                                                                                                                                                                                                                                                                                          |
| `"dynPref"`      | string | *I ett delvis dynData-block som ingår i ett dynPref-block*<br />namnet på det dynPref-block som ska användas för att komplettera dynData-blocket. Med detta kan du anpassa ett dynData-block efter flera inställningar                                                                                                                                                                                                                                                                                                       |
| `"dynPrefColor"` | string | denna nyckel gäller bara huvudblocket med alla huvudfärger (highColor, midColor, lowColor, grafens färger...). du använder den om du vill anpassa huvudfärgerna efter inställningar                                                                                                                                                                                                                                                                                                                                                |
| `"prefKey"`      | string | anger inställningsnyckelns värde som används för att hämta användarens inställningar (se [PrefKey-värden](#cwf-reference-prefkey-values) nedan). Denna nyckel ska användas i ett `dynPref`-block.<br />Beroende på inställningsnyckeln ska blocket `dynPref`innehålla lika många nycklar som prefKey har värden.<br />Observera att de flesta inställningar är "booleska", så i dynPref-blocket finns oftast dessa två dynData-block: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | block  | de flesta inställningar ger ett booleskt värde `"true"` eller `"false"`. Du anger det dynData-block som ska användas om inställningen som användaren har valt är true.<br />Observera att om blocket också innehåller en nyckel `"dynPref":`slås dynData-blocket ihop med det andra blocket. Med detta kan du till exempel anpassa färgen efter en inställning och textstorleken efter en annan inställning                                                                                                                  |
| `"false"`        | block  | de flesta inställningar ger ett booleskt värde `"true"` eller `"false"`. Du anger det dynData-block som ska användas om inställningen som användaren har valt är false.<br />Observera att om blocket också innehåller en nyckel `"dynPref":`slås dynData-blocket ihop med det andra blocket. Med detta kan du till exempel anpassa färgen efter en inställning och textstorleken efter en annan inställning                                                                                                                 |

(cwf-reference-prefkey-values)=

### PrefKey-värden

Alla nycklar i kapitlet [Inställningsnycklar](#cwf-reference-preference-keys) ovan kan användas för att anpassa vyernas parametrar

Du kan också använda dessa extra nycklar nedan, som ingår i de särskilda parametrarna för AAPS (anpassad):

| Nyckel                | typ     | comment                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: om enheten som är vald i AAPS är mgdl<br />*false*: om enheten som är vald i AAPS är mmol                                                                                                                                                                                                                                                             |
| `"key_dark"`          | boolean | *true*: för att använda en mörk bakgrund<br />*false*: för att använda en ljus bakgrund<br />Obs: denna parameter används ofta i tidigare AAPS-urtavlor (AAPS, AAPS V2...)                                                                                                                                                                              |
| `"key_match_divider"` | boolean | *true*: avdelare som ingår i AAPS, AAPS v2-urtavlor syns inte<br />*false*: avdelare som ingår i AAPS, AAPS v2-urtavlor syns<br />Obs: denna inställning kombineras ofta med inställningen för mörkt läge (med nyckeln `dynPref` i blocket `dynData`) för att sätta textfärg (och bakgrund) i samma eller motsatt färg som parametern för mörkt läge... |
