# Introduktion till APS och AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## Vad är ett ”system för artificiell bukspottkörtel”?

En mänsklig bukspottkörtel gör mycket mer än att reglera blodsockret. Men begreppet **”system för artificiell bukspottkörtel” (APS, Artificial Pancreas System)** betyder oftast ett system som automatiskt håller blodsockret inom friska gränser.

Det enklaste sättet att göra detta är att mäta **glukosnivåerna**, använda värdena för att göra **beräkningar** och sedan ge kroppen den (förutsagda) rätta mängden **insulin**. Systemet upprepar beräkningen med några minuters mellanrum, dygnet runt. Det använder **larm** och **varningar** för att tala om för användaren när det behövs ett ingrepp eller uppmärksamhet. Ett sådant system består oftast av en **glukossensor**, en **insulinpump** och en **styrenhet** som gör beräkningarna. I **AAPS** och andra system med öppen källkod är styrenheten en app i en telefon. I de flesta kommersiella system är det programvara som är inbyggd i själva pumpen, och en telefonapp används främst för att visa data och styra.

Om du vill veta mer om hur system med sluten loop har utvecklats och hur de fungerar är den här översiktsartikeln från 2022 en bra början. Tänk på att den är äldre än de flesta system som finns i dag, så den är ingen guide till vad som finns på marknaden nu:

![Framtida utveckling](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Så kallade ”dubbelhormonsystem” ger glukagon tillsammans med insulin, för att förebygga svåra hypon och ge en ännu jämnare blodsockerkontroll. Ett första system av detta slag har godkänts i Europa, men det finns bara genom studier och projekt, och andra är fortfarande under utveckling. Inget av dem säljs ännu fritt.

En artificiell bukspottkörtel kan ses som en [”autopilot för din diabetes”](https://www.artificialpancreasbook.com/). Vad betyder det?

I ett flygplan gör autopiloten inte hela jobbet som den mänskliga piloten gör. Piloten kan inte sova under hela flygningen. Autopiloten hjälper piloten i arbetet. Den befriar piloten från bördan att hela tiden styra flygplanet, så att piloten kan koncentrera sig på den bredare övervakningen. Autopiloten tar emot signaler från olika sensorer. En dator bedömer data tillsammans med pilotens inställningar och gör sedan de justeringar som behövs, och den varnar piloten om något verkar fel. Piloten behöver inte längre hela tiden fatta beslut, och den här jämförelsen passar även för **AAPS**.

![image](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## Vad betyder hybrid sluten loop?

Den bästa lösningen för typ 1-diabetes vore ett ”funktionellt botemedel” (troligen ett implantat med bukspottkörtelceller som skyddas mot immunförsvaret). Medan communityn med typ 1-diabetes (T1D) väntar på det är en artificiell bukspottkörtel med ”helt sluten loop” troligen det näst bästa. Det är ett tekniskt system som inte behöver någon inmatning från användaren (som att ge bolus till måltider eller meddela träning) och som ändå reglerar blodsockret väl. Nästan alla system som används i vardagen är ”hybrida” slutna loopar, eftersom de kombinerar automatisk teknik och inmatning från användaren. De första systemen med helt sluten loop godkändes i Europa 2026, men inget av dem finns ännu brett tillgängligt.

## Hur och varför började loopningen?

Utvecklingen av kommersiell teknik för personer med typ 1-diabetes (T1D) går mycket långsamt. År 2013 grundade T1D-communityn rörelsen #WeAreNotWaiting. De utvecklade själva system med befintlig godkänd teknik (insulinpumpar och sensorer) för att förbättra blodsockerkontrollen, säkerheten och livskvaliteten. De kallas OS-AID-system (Open-Source Automated Insulin Delivery, automatisk insulintillförsel med öppen källkod), tidigare DIY-system, eftersom de inte är formellt godkända av hälsomyndigheter (FDA, NHS osv.). Det finns fyra stora OS-AID-system: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) och [Trio](https://triodocs.org).

Ett bra sätt att förstå grunderna i OS-AID-loopning är att läsa Dana Lewis bok ”Automated Insulin Delivery”. Du kan läsa den gratis [här](https://www.artificialpancreasbook.com/) (eller köpa boken i tryckt form). Om du vill förstå mer om [OpenAPS](https://openaps.org/what-is-openaps/), som **AAPS** har utvecklats från, är [OpenAPS webbplats](https://openaps.org/what-is-openaps/) en mycket bra källa.

Flera kommersiella system med hybrid sluten loop har också lanserats. De skiljer sig mycket från OS-AID-system, främst eftersom många av dem har en ”självlärande algoritm” som anpassar hur mycket insulin som ges efter ditt insulinbehov de senaste dagarna. Många i OS-AID-communityn har redan provat kommersiella system och jämfört dem med sitt OS-AID-system. Du kan ta reda på mer om hur de olika systemen skiljer sig genom att fråga i Facebook-grupperna för de systemen, i [AAPS Facebook-grupp](https://www.facebook.com/groups/AndroidAPSUsers/) eller på [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Vad är Android APS (AAPS)?

![image](../images/basic-outline-of-AAPS.png)

**Figur 1**. Grundläggande översikt över Android APS (Artificial Pancreas System), AAPS.

Android APS (**AAPS**) är ett system med hybrid sluten loop, eller ett system för artificiell bukspottkörtel (APS). Den beräknar insulindoserna med etablerade [OpenAPS](https://openaps.org/)-algoritmer (en uppsättning regler) som har utvecklats av T1D-communityn #WeAreNotWaiting.

Eftersom OpenAPS bara fungerar med vissa äldre insulinpumpar utvecklades **AAPS** (som kan användas med fler insulinpumpar) första gången 2016 för en familjemedlem med typ 1-diabetes. Sedan dess har **AAPS** hela tiden utvecklats och förbättrats av ett team av frivilliga utvecklare och andra entusiaster som har en koppling till typ 1-diabetes. I dag används **AAPS** av många tusen personer över hela världen. Det är ett mycket anpassningsbart och mångsidigt system. Eftersom det har öppen källkod fungerar det också lätt ihop med många andra program och plattformar för diabetes med öppen källkod. De grundläggande komponenterna i dagens **AAPS**-system visas i **Figur 1** ovan.



## Vilka är de grundläggande komponenterna i AAPS?

”Hjärnan” i AAPS är en **app** som du bygger själv. Det finns detaljerade steg-för-steg-instruktioner för detta. Sedan installerar du **AAPS-appen** på en [kompatibel](../Getting-Started/Phones.md) **Android-telefon** (**1**). En del användare vill ha sin loop på en separat telefon, inte på sin vanliga telefon. Du behöver alltså inte använda en Android-telefon till allt annat i livet, bara för att köra din AAPS-loop.

Förutom **AAPS** behöver **Android-telefonen** också ha en annan app installerad. Denna [extra app](../Getting-Started/CompatiblesCgms.md) tar emot glukosdata från en sensor (**2**) via Bluetooth och skickar sedan data internt i telefonen till **AAPS-appen**.

**AAPS-appen** använder en beslutsprocess (**algoritm**) från OpenAPS. Nybörjare börjar med den grundläggande algoritmen **oref0**, men det går att byta till den nyare algoritmen **oref1** när du har kommit längre med AAPS. Vilken algoritm du använder (oref0 eller oref1) beror på vilken som passar din situation bäst.  I båda fallen tar algoritmen hänsyn till många faktorer och gör snabba beräkningar varje gång ett nytt värde kommer från sensorn. Algoritmen skickar sedan instruktioner via Bluetooth till insulinpumpen (**3**) om hur mycket insulin den ska ge. All information kan skickas via mobildata eller Wi-Fi till internet (**4**). Dessa data kan också delas med följare om du vill, och/eller samlas in för analys. Du kan också parkoppla en [smartklocka](../Getting-Started/Watches.md) (**5**) med telefonen för att snabbt se dina data och, med vissa klockor, skicka enkla kommandon till **AAPS**.

## Vilka är fördelarna med AAPS?

OpenAPS-algoritmen som **AAPS** använder styr blodsockret utan inmatning från användaren, enligt de parametrar som användaren har ställt in (viktiga är basaldoser, insulinkänslighetsfaktorer, kolhydratkvoter, insulinets verkningstid osv.), och reagerar var 5:e minut på nya sensordata.

Några fördelar som användare av **AAPS** nämner är många alternativ för finjustering, **automatiseringar** och att systemet är mer öppet och tydligt för patienten/anhöriga. Det kan ge bättre kontroll över din diabetes (eller diabetesen hos någon du tar hand om), vilket i sin tur kan ge bättre livskvalitet och mer sinnesro.

Om du lägger ner tid kan **AAPS** leda till:

- mindre stress och börda med att sköta typ 1-diabetes;

- färre av de många vardagliga beslut som typ 1-diabetes kräver;

- personlig och dynamisk insulindosering baserad på realtidsdata, som kan minska behovet av att behandla hypon och minska antalet hyperglykemier;

- ökad kunskap om insulinbehandling och större trygghet att finjustera dina inställningar;

- möjlighet att skapa automatiska inställningar (**automatiseringar**) som är anpassade till din livsstil;

- bättre sömn och färre ingrepp under natten;

- fjärrövervakning och fjärrstyrning av insulintillförseln för anhöriga till personer med typ 1-diabetes; och

- enklare hantering av alla dina bärbara diabetesenheter (mottagare för kontinuerlig glukosmätning och enheter som styr insulinet) genom att använda en Android-telefon som styrs av **AAPS**.


Till sist kan **AAPS** ge personer bättre möjligheter att sköta sin diabetes, vilket ger stabila blodsockervärden och bättre hälsa på lång sikt.

### Några särskilda fördelar är:

#### 1) Inbyggd säkerhet
[Klicka här](https://openaps.org/reference-design/) om du vill läsa om säkerhetsfunktionerna i algoritmerna, som kallas oref0 och oref1. Användaren bestämmer själv sina säkerhetsgränser.

#### 2) Flexibel hårdvara

**AAPS** fungerar med många olika insulinpumpar och sensorer och ger flexibilitet när livet förändras. Om du till exempel blir allergisk mot limmet på Dexcom-sensorn kan du byta till en Libre-sensor i stället. Användare behöver inte bygga om eller installera om **AAPS**-appen. Välj bara en annan pump eller BG-källa i **Konfiguration** för att byta hårdvara. **AAPS** är oberoende av specifika pumpdrivrutiner och har också en ”virtuell pump”, så att användare kan experimentera säkert innan de använder det på sig själva.

#### 3) Mycket anpassningsbart, med många parametrar

Användarna kan enkelt lägga till eller ta bort moduler eller funktioner, och **AAPS** kan användas både med öppen och med sluten loop. Här är några exempel på vad som är möjligt med **AAPS**:

 a) Möjlighet att ställa in ett lägre **BG**-mål 30 min före måltid; du kan ställa in målet så lågt som 72 mg/dl (4,0 mmol/l).

 b) Om du är insulinresistent och får höga blodsockervärden kan du i **AAPS** ställa in en **automationsregel** som aktiveras när BG stiger över 8 mmol/l (144 mg/dl) och byter till (till exempel) en profil på 120 % (vilket ger 20 % mer basal och starkare värden även för andra faktorer, jämfört med din vanliga **profil**). Automatiseringen gäller under den schemalagda tid som du har ställt in. En sådan automatisering kan ställas in så att den bara är aktiv vissa veckodagar, vissa tider på dygnet och till och med på vissa platser.

 c) Om ditt barn plötsligt hoppar studsmatta utan förvarning kan du i **AAPS** pausa insulinet under en viss tid, direkt från telefonen.

 d) När du återansluter en slangpump som har varit frånkopplad under simning räknar **AAPS** ut hur mycket basalinsulin du har missat och ger det försiktigt, utifrån ditt aktuella BG. Insulin som inte behövs kan du hoppa över genom att bara ”avbryta” den missade basalen.

 e) I **AAPS** kan du ställa in olika profiler för olika situationer och enkelt byta mellan dem. Till exempel kan funktioner som gör att algoritmen snabbare sänker ett högt BG (som supermikrobolusar (”**SMB**”) och oannonserade måltider (”**UAM**”)) ställas in så att de bara fungerar på dagen, om du är orolig för hypon på natten.

Detta är bara exempel. Alla funktioner tillsammans ger stor flexibilitet i vardagen, till exempel vid idrott, sjukdom, hormoncykler _osv_. Till sist är det användaren som bestämmer hur flexibiliteten ska användas, och det finns ingen automatisering som passar alla.

#### 4) Fjärrövervakning
Det finns flera möjliga kanaler för övervakning (Sugarmate, Dexcom Follow, xDrip, Android Auto _osv._) som är användbara för föräldrar/anhöriga och för vuxna i vissa situationer (sömn/bilkörning) som behöver anpassningsbara larm. I vissa appar (xDrip) kan du också stänga av larmen helt, vilket är bra om du har en ny sensor som ”blötläggs” eller stabiliseras och som du inte vill loopa med ännu.

#### 5) Fjärrstyrning
En stor fördel med **AAPS** jämfört med kommersiella system är att följare kan skicka många olika kommandon tillbaka till **AAPS**, med autentiserade textkommandon (SMS) eller en parkopplad **AAPSClient**-app. Funktionen används mycket av föräldrar till barn med typ 1-diabetes som använder **AAPS**.

Fjärrstyrningen kan vara mycket användbar: till exempel på lekplatsen, om du vill ge en förbolus till ett mellanmål från din egen telefon medan ditt barn är upptaget med att leka. Det går också att övervaka systemet från en smartklocka (_t.ex._ Garmin) eller skicka enkla kommandon från den (_t.ex._ en Wear OS-klocka som Samsung Galaxy Watch).

#### 6) Inga kommersiella begränsningar, tack vare öppna programgränssnitt
Källkoden till **AAPS** är öppen och kan granskas när som helst. Dessutom ger principen med öppna programmeringsgränssnitt även andra utvecklare möjlighet att bidra med nya idéer. **AAPS** är nära integrerat med Nightscout. Det gör att utvecklingen går snabbare och att användarna kan lägga till funktioner som gör livet med diabetes ännu enklare. Bra exempel på sådana integrationer är [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) osv. Det pågår en dialog mellan utvecklare av öppen källkod och de som utvecklar kommersiella system. Många OS-AID-innovationer tas gradvis in i kommersiella system, där utvecklingen av förståeliga skäl går långsammare, bland annat eftersom gränssnitten mellan system från olika företag (pumpar, appar, sensorer _osv_) måste förhandlas och licensieras noggrant. Detta kan också bromsa innovationer som är praktiska för patienten (eller för en liten grupp patienter med mycket speciella behov) men som inte ger någon större vinst.

#### 7) Detaljerat appgränssnitt
Med **AAPS** är det lätt att hålla koll på saker som insulinmängden i pumpen, kanylens ålder, sensorns ålder, pumpbatteriets ålder, aktivt insulin (IOB) _osv_. Många åtgärder kan göras i **AAPS**-appen (förfylla pumpen, koppla från pumpen _osv_.) i stället för på själva pumpen, vilket betyder att pumpen kan ligga kvar i fickan eller sitta kvar i bältet (ditt eget eller hos någon du tar hand om).

#### 8) Tillgänglighet och låg kostnad
**AAPS** ger personer som i dag inte har råd att betala själva, eller som saknar finansiering/försäkring, tillgång till ett system med hybrid sluten loop som utvecklingsmässigt ligger flera år före de kommersiella systemen. Just nu behöver du en rapportserver (Nightscout eller Tidepool) för att sätta upp **AAPS**, men den behövs inte för att köra **AAPS**-loopen i vardagen. Många fortsätter att använda Nightscout för att samla in sina data och för fjärrövervakning. **AAPS** är gratis, men att sätta upp Nightscout via någon av de olika plattformarna kan kosta en avgift (0–12 €), beroende på hur mycket support du vill ha (se jämförelsetabellen) och om du vill fortsätta använda Nightscout efter installationen eller inte. **AAPS** fungerar med många prisvärda (från ca 150 €) [Android-telefoner](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Det finns olika versioner för olika platser och språk, och AAPS kan också användas av personer som är [blinda](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Stöd
Inget system för automatisk insulintillförsel är perfekt. Kommersiella system och system med öppen källkod har många gemensamma problem, både med kommunikation och med tillfälliga hårdvarufel. Det finns stöd från communityn av AAPS-användare på Facebook, Discord och GitHub, som har utformat, utvecklat och nu använder **AAPS** över hela världen. Det finns också supportgrupper på Facebook och hjälp från kliniker/företag för de kommersiella APS-systemen. Det är värt att prata med användare eller tidigare användare av dessa system för att få veta mer om vanliga problem, hur bra utbildningen är och hur mycket support man får över tid.

#### 10) Förutsägbarhet, öppenhet och säkerhet
**AAPS** är öppet, logiskt och förutsägbart, vilket kan göra det lättare att se när en inställning är fel och att justera den. Du kan se exakt vad systemet gör och varför det gör det, och du kan ställa in dess gränser. Det ger dig kontrollen (och ansvaret). Det kan ge användaren trygghet och en bättre sömn.

#### 11) Tillgång till avancerade funktioner genom utvecklingsversioner (dev), bland annat helt sluten loop
Den här **AAPS**-dokumentationen handlar om huvudgrenen **”master”** av **AAPS**. Men forskning och utveckling pågår hela tiden. Mer erfarna användare kan vilja prova de experimentella funktionerna i **utvecklingsgrenen**. Utvecklingen fokuserar på strategier för helt sluten loop (att inte behöva ge bolus till måltider _osv._) och på att göra livet med typ 1-diabetes så enkelt som möjligt.

#### 12) Möjlighet att själv bidra till nya förbättringar
Typ 1-diabetes kan vara mycket frustrerande och kan göra att man känner sig ensam. Att ha kontroll över sin egen diabetesteknik, och att kunna ”ge tillbaka” genom att hjälpa andra på deras väg så snart du själv gör framsteg, kan kännas mycket givande. Du kan lära dig själv, upptäcka hindren och leta efter, och till och med bidra till, ny utveckling och dokumentationen. Det finns andra i communityn med samma mål som du kan bolla idéer och samarbeta med. Detta är kärnan i #WeAreNotWaiting.

## Hur skiljer sig AAPS från MDI och öppen loop?

Flera dagliga injektioner (MDI, (a) i **Figur 2** nedan) innebär oftast en injektion med långverkande insulin (_t.ex._ Tresiba) en gång om dagen, och injektioner med snabbverkande insulin (_t.ex._ Novorapid, Fiasp) vid måltider eller för korrigeringar. Vid pumpbehandling utan loop (b) ger pumpen basal med snabbverkande insulin enligt förprogrammerade doser, och du ger bolus med pumpen vid måltider eller för korrigeringar. Grundidén med ett loopsystem är att loopappen använder glukosdata från sensorn för att säga åt pumpen att stoppa insulintillförseln när den förutser att du är på väg mot ett lågt värde, och att ge dig extra insulin om glukosnivån stiger och förutsägs bli för hög (c). Bilden är mycket förenklad jämfört med verkligheten, men den visar de viktigaste skillnaderna mellan metoderna. Det går att uppnå mycket bra glukoskontroll med alla tre metoderna.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figur 2**. Grundläggande översikt över (a) MDI, (b) pumpbehandling med öppen loop och (c) pumpbehandling med hybrid sluten loop.

## Hur skiljer sig AAPS från andra loopsystem?

Den 25 juni 2023 fanns det fyra stora system med öppen källkod för sluten loop: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) och [Trio](https://triodocs.org) (tidigare FreeAPS X). Egenskaperna hos de olika systemen visas i tabellen nedan:


| Enhetstyp | Namn                                                                | [AAPS](https://wiki.aaps.app)                   | [Loop](https://loopkit.github.io/loopdocs/)     | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)                    |
| --------- | ------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------- |
| Telefon   | Android                                                             | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| Telefon   | iPhone                                                              | ![inte tillgängligt](../images/unavailable.png) | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| Rigg      | liten dator (1)                                                     | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png) | ![tillgängligt](../images/available.png)              | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                 | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                  | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                 | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                 | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                       | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                         | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)    | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)         | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| PUMP      | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)       | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [Äldre Medtronic](../CompatiblePumps/MedtronicPump.md)              | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)              | ![tillgängligt](../images/available.png)        |
| PUMP      | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                         | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| PUMP      | [CareLevo](../CompatiblePumps/CareLevo.md)                          | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| CGM       | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)               | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [Dexcom One](../CompatibleCgms/DexcomG6.md)                         | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                          | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)              | ![tillgängligt](../images/available.png)        |
| CGM       | [Libre 3/3+](../CompatibleCgms/Libre3.md)                           | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [Libre 2/2+](../CompatibleCgms/Libre2.md)                           | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [Libre 1](../CompatibleCgms/Libre1.md)                              | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [Eversense](../CompatibleCgms/Eversense.md)                         | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png)       | ![tillgängligt](../images/available.png)        |
| CGM       | [MM640g/MM630g](../CompatibleCgms/MM640g.md)                        | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| CGM       | [PocTech](../CompatibleCgms/PocTech.md)                             | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| CGM       | [Ottai](../CompatibleCgms/OttaiM8.md)                               | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| CGM       | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                          | ![tillgängligt](../images/available.png)        | ![inte tillgängligt](../images/unavailable.png) | ![inte tillgängligt](../images/unavailable.png)       | ![inte tillgängligt](../images/unavailable.png) |
| CGM       | [Nightscout som BG-källa](../CompatibleCgms/CgmNightscoutUpload.md) | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)        | ![tillgängligt](../images/available.png)              | ![tillgängligt](../images/available.png)        |

_Anteckningar till tabellen:_
1. En **rigg** är en liten dator utan skärm som du bär med dig. En enhetstyp som stöds är Intel Edison + Explorer Board, och den andra är Raspberry Pi + Explorer HAT eller Adafruit RFM69HCW Bonnet. De första APS-systemen byggde på denna lösning, eftersom mobiltelefoner inte kunde köra de algoritmer som behövdes. Dessa system används mindre nu, eftersom det har blivit enklare att installera på mobiltelefoner och telefoner har en inbyggd skärm. Intel har också slutat sälja Intel Edison. De utmärkta OpenAPS-algoritmerna **oref0** och **oref1** finns nu i AAPS och Trio.


Ett internationellt, sakkunniggranskat konsensusdokument med praktiska råd om loopning med öppen källkod skrevs av och för vårdpersonal och publicerades i en ledande medicinsk tidskrift 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Den är väl värd att läsa (även för din diabetesmottagning) och sammanfattar de viktigaste tekniska skillnaderna mellan de olika systemen med öppen källkod för hybrid sluten loop.

Det är svårt att få en ”känsla” för ett system utan att använda det eller prata med andra som använder det, så hör gärna av dig till andra på Facebook/Discord och fråga. De flesta tycker att **AAPS** är mycket avancerat jämfört med andra system med hybrid sluten loop (särskilt de kommersiella), med väldigt många inställningar och funktioner som kan anpassas, som beskrivs ovan. En del kan tycka att det är lite överväldigande i början, men det finns ingen brådska att utforska alla möjligheter på en gång. Du kan gå fram så långsamt eller så snabbt du vill, och det finns hjälp att få i varje steg.


## Använder AAPS artificiell intelligens eller någon självlärande algoritm?

Den nuvarande versionen av **AAPS** (4.0) har inga algoritmer för maskininlärning, inga modeller för insulinsvar med flera parametrar och ingen artificiell intelligens. Därför är systemet öppet och tydligt i hur det fungerar, och det kan förstås inte bara av experter utan också av vårdpersonal och patienter. Det betyder också att om ditt schema varierar kraftigt (kanske från en stressig vecka på jobbet till en avkopplande semester) och du troligen behöver en helt annan mängd insulin, kan du direkt låta **AAPS** köra en svagare/starkare anpassad profil. Ett ”självlärande system” gör denna justering automatiskt åt dig, men det tar troligen längre tid för det att anpassa insulintillförseln.

(which-system-is-right-for-me-or-my-dependent)=
## Vilket system passar mig eller någon jag tar hand om?

I praktiken begränsas ditt val av system ofta av vilken pump du redan har eller kan få från din vårdgivare, och av ditt val av telefon (Apple eller Android). Om du ännu inte har en pump har du störst valfrihet bland systemen. Tekniken utvecklas hela tiden. Pumpar slutar säljas och nya pumpar och sensorer kommer ut. De flesta system med öppen källkod fungerar med de vanligaste sensorerna (Libre och Dexcom) eller anpassas snabbt till nya sensorer ungefär ett år efter att de har släppts (med en viss fördröjning för att testa säkerhet och stabilitet).

De flesta **AAPS**-användare berättar om mer tid i målområdet, lägre HbA1c och bättre livskvalitet tack vare ett system som kan justera basaldoserna automatiskt under natten medan de sover. Detta gäller för de flesta system med hybrid sluten loop. En del föredrar ett mycket enkelt system som inte går att anpassa så mycket (då passar ett kommersiellt system kanske bättre), medan andra tycker att denna brist på kontroll är mycket frustrerande (då passar ett system med öppen källkod kanske bättre). Om du (eller någon du tar hand om) nyligen har fått diagnosen är en vanlig väg att först vänja sig vid MDI tillsammans med en glukossensor, sedan gå över till en pump som kan användas i en loop och sedan till **AAPS**. Men en del (särskilt små barn) går direkt till en pump.

Det är viktigt att komma ihåg att **AAPS**-användaren själv måste vara aktiv och felsöka och lösa problem, med hjälp från communityn. Detta är ett helt annat förhållningssätt än när man använder ett kommersiellt system. Med **AAPS** har användaren mer kontroll, men också ansvaret, och måste känna sig trygg med det.

## Är det säkert att använda system med öppen källkod som AAPS?

### Säkerheten i AAPS
En mer exakt fråga är troligen ”är det säkert **jämfört** med mitt nuvarande sätt att ta insulin?”, eftersom inget sätt att ge insulin är helt utan risk. Det finns många kontroller och skydd i **AAPS**. En ny [artikel](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) undersökte användningen av **AAPS** i en datorsimulerad miljö, vilket var ett effektivt sätt att objektivt testa hur säkert och effektivt systemet är. Mer allmänt använder många tusen personer över hela världen system med öppen källkod för automatisk insulintillförsel, och antalet ökar hela tiden.

Alla enheter som använder radiokommunikation kan hackas, och det gäller även en insulinpump som inte används i en loop. Just nu känner vi inte till att någon har försökt skada personer genom att hacka deras medicinska diabetesutrustning. Men det finns flera sätt att skydda sig mot sådana risker:

1.  Begränsa i pumpens inställningar både den högsta tillåtna bolusen och den högsta tillfälliga basalen till de mängder som du anser är säkrast. Detta är fasta gränser som vi inte tror att någon illasinnad hackare kan ta sig förbi.

2.  Aktivera CGM-larmen för både höga och låga värden.

3.  Övervaka din insulintillförsel online. Nightscout-användare kan ställa in extra larm för många olika situationer, även situationer som är mycket mer sannolika än en illasinnad attack. Förutom höga och låga värden kan Nightscout visa diagnostiska data som hjälper dig att kontrollera att pumpen fungerar som den ska, bland annat aktuellt IOB, pumpens historik för tillfälliga basaler och pumpens bolushistorik. Nightscout kan också ställas in så att det i förväg varnar användaren för oönskade situationer, till exempel förutsagda höga och låga värden, lite insulin i reservoaren och lågt pumpbatteri.

Om någon gjorde en illasinnad attack mot din insulinpump skulle dessa åtgärder minska risken kraftigt. Varje blivande **AAPS**-användare måste väga riskerna med att använda **AAPS** mot riskerna med att använda ett annat system.

#### Säkerhet när blodsockerkontrollen förbättras för snabbt

En snabb sänkning av HbA1c och bättre blodsockerkontroll låter lockande. Men att sänka den genomsnittliga blodsockernivån _för snabbt_ när man börjar med ett system med sluten loop kan orsaka bestående skador, bland annat på ögonen, och smärtsam neuropati som aldrig går över. Dessa skador kan undvikas helt enkelt genom att sänka nivåerna långsammare. Om du just nu har ett högt HbA1c och ska börja med AAPS (eller något annat system med sluten loop), prata med ditt vårdteam om denna risk innan du börjar och kom överens med dem om en tidsplan. Mer allmän information om hur du sänker dina glukosnivåer på ett säkert sätt, med länkar till medicinsk litteratur, finns i avsnittet om säkerhet [här](#preparing-safety-first).

#### Medicinsk säkerhet kring enheter, förbrukningsmaterial och andra läkemedel

Använd en testad, fullt fungerande FDA- eller CE-godkänd insulinpump och CGM för en loop med artificiell bukspottkörtel. Ändringar i hårdvara eller programvara hos dessa komponenter kan ge oväntad insulindosering och innebär en stor risk för användaren. Om du hittar eller blir erbjuden trasiga, modifierade eller hemmabyggda insulinpumpar eller CGM-mottagare ska du inte använda dem för att bygga ett AAPS-system.

Använd originalmaterial som införare, kanyler och insulinbehållare som är godkända av tillverkaren av din pump och CGM. Otestat eller ändrat material kan göra CGM-värdena felaktiga och ge fel insulindoser. Insulin är mycket farligt vid fel dosering. Lek inte med ditt liv genom att manipulera ditt material.

Ta inte SGLT-2-hämmare (glifloziner) när du använder **AAPS**, eftersom de sänker blodsockret på ett sätt som inte går att beräkna. Att kombinera denna effekt med ett system som sänker basaldoserna för att höja BG är farligt. Mer information finns i det huvudsakliga [avsnittet om säkerhet](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Hur kan jag ta upp AAPS med mitt vårdteam?

Användare uppmuntras att prata med sin vårdpersonal om att de vill använda **AAPS**. Var inte rädd för att ha ett ärligt samtal med ditt diabetesteam om du tänker använda **AAPS** (eller någon annan OS-AID-loop). Öppenhet och förtroende mellan patient och läkare är mycket viktigt.

### Förslag på hur du kan gå till väga:
Börja ett samtal med din läkare för att ta reda på hur väl hen känner till och vad hen tycker om diabetesteknik som CGM, pumpar, hybridloopar och kommersiella loopsystem. Din läkare/endokrinolog bör känna till grundtekniken och vara villig att diskutera nya framsteg med kommersiella loopsystem som finns i regionen.

#### Lokala exempel

Ta reda på vad din läkare/endokrinolog tycker om OS-AID-loopar _jämfört med_ kommersiella loopar, och bedöm hur mycket hen vet om området. Känner hen till **AAPS**, och kan hen dela med sig av användbara erfarenheter av att arbeta med patienter som använder OS-AID-loopning?

Fråga om ditt team har patienter som redan använder OS-AID-loopning. På grund av sekretess får läkare inte lämna ut uppgifter om andra patienter till dig utan att patienten har gett sitt samtycke. Men om du vill **kan** du be dem att ge **dina** kontaktuppgifter till en patient som redan använder OS-AID-loopning, om läkaren tror att ni skulle ”klicka”. Säg att du gärna blir kontaktad av patienten för att prata om OS-AID-loopning. Läkare är inte skyldiga att göra detta, men en del gör det gärna eftersom de förstår hur viktigt stöd från andra patienter är vid typ 1-diabetes. Det kan också vara bra att träffa trevliga OS-AID-loopare i närheten. Detta bestämmer du förstås själv, och det är inte helt nödvändigt.

#### Nationella och internationella exempel

Om du känner att ditt team inte stöttar dig i att loopa med **AAPS** kan följande diskussionspunkter hjälpa:

a) **AAPS** har utvecklats AV patienter och deras anhöriga. Det har framför allt utformats för säkerhet, men bygger också på patienters djupa erfarenhet. Det finns många tusen **AAPS**-användare över hela världen. Därför finns det troligen andra patienter på din mottagning som använder OS-AID-loopning (oavsett om mottagningen vet om det eller inte).

b) Nyligen publicerad, sakkunniggranskad vägledning i den internationellt ledande medicinska tidskriften [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_) har bekräftat att OS-AID-loopar är **säkra** och **effektiva för att förbättra diabeteskontrollen**, bland annat tiden i målområdet. Ledande tidskrifter som [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) publicerar regelbundet artiklar som lyfter fram framstegen i OS-AID-communityn.

c) Att börja med **AAPS** innebär en _gradvis_ övergång från pumpbehandling med ”öppen” loop, via paus vid lågt blodsocker, till ”sluten” hybridloop, genom att klara ett antal mål. Det finns alltså ett strukturerat program där användaren måste visa att hen klarar varje steg och finjusterar sina grundinställningar (basal, ISF och KH-kvot) innan hen kan sluta loopen.

d) Teknisk support finns att få från OS-AID-communityn via GitHub, Discord och slutna Facebook-grupper.

e) Du kan visa **både CGM-data och information om insulin/loop/pump** som gemensamma rapporter vid läkarbesöken (via Nightscout eller Tidepool), antingen utskrivna eller på skärmen (om du tar med en bärbar dator eller surfplatta). När både CGM- och insulindata finns samlade kan din läkare använda sin tid bättre för att granska rapporterna, och det hjälper er i samtalen om hur det går för dig.

f) Om ditt team fortfarande är starkt emot, ge din läkare utskrifter av de vetenskapliga artiklarna som länkas här i texten, och ge hen länken till **AAPS**-avsnittet för vårdpersonal: [För vårdpersonal – en allmän introduktion och guide till **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Stöd för OS-AID-loopning från annan vårdpersonal

Artikeln som publicerades i [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (ledd av King’s och Guy’s and St Thomas’ NHS Foundation Trust, och medledd av Dr Sufyan Hussain, överläkare i diabetologi och hedersuniversitetslektor vid King’s i London) ger:

a) **Försäkran** till vårdpersonal om att OS-AID-system för artificiell bukspottkörtel / öppen källkod är ett ”säkert och effektivt behandlingsalternativ” för typ 1-diabetes, med vägledning om rekommendationer, samtal, stöd och dokumentation;

b) **Erkännande** av att system med öppen källkod för automatisk insulintillförsel (”AID”) kan öka tiden i målområdet (TIR) och samtidigt minska variationen i blodsocker och antalet hypo- och hyperglykemier i olika åldersgrupper, kön och grupper;

c) **Rekommendation** att vårdpersonal ska **stötta** patienter med typ 1-diabetes eller deras anhöriga som väljer att sköta sin diabetes med ett AID-system med öppen källkod;

d) Rekommendation att vårdpersonal ska försöka lära sig om alla behandlingsalternativ som kan gynna patienterna, även tillgängliga AID-system med öppen källkod.  Om vårdpersonal inte har resurser att utbilda sig själv, eller har juridiska frågor eller frågor om regelverk, bör de överväga att **samarbeta med annan vårdpersonal** som har det;

e) Betoning av att alla som använder CGM alltid ska ha fri tillgång i realtid till **sina egna hälsodata**

f) Betoning av att dessa system med öppen källkod inte har genomgått samma myndighetsgranskning som kommersiellt tillgänglig medicinsk teknik, och att det inte finns någon kommersiell teknisk support. Men **det finns omfattande stöd från communityn**; och

g) En rekommendation att **regelverk och lagar** bör uppdateras så att det blir tydligt att etisk och effektiv behandling med sådana system med öppen källkod är tillåten.

En annan artikel i [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) visar också att brittiska General Medical Councils ”consent guidance” (riktlinjer om samtycke) lägger stor vikt vid att läkare och patienter fattar beslut tillsammans. Läkaren bör förklara möjliga fördelar, risker, bördor och biverkningar med OS-AID APS och kan rekommendera ett visst alternativ utan att pressa patienten.

Till sist är det patienten som ska väga dessa faktorer, tillsammans med andra icke-kliniska frågor som är viktiga för hen, och bestämma vilket behandlingsalternativ hen vill ta emot, om något.

Om en läkare på mottagningen upptäcker att en patient loopar med ett OS-AID-system är läkaren inte befriad från sin skyldighet att följa upp patienten bara för att hen inte skrev ut just den teknik som patienten använder. Vårdpersonal måste fortsätta att följa upp patienterna.

Läkare (åtminstone i Storbritannien) är inte förbjudna att skriva ut olicensierade läkemedel och kan använda sitt kliniska omdöme. De bör därför använda sitt kliniska omdöme för att avgöra om en OS-AID APS passar en viss patient och diskutera vad de ser som för- och nackdelar med patienten.

#### Artiklarna ovan och andra användbara länkar och ståndpunkter finns i listan nedan:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Ståndpunkt från Berlin Institute of Health, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (ståndpunkt och guide från Diabetes Canada) [_Canadian Journal of Diabetes_ (2023), _47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Nederländerna (EN/NL) – för vårdpersonal – [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Resultat från OPEN-projektet, ett EU-finansierat projekt om Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Varför kan jag inte bara ladda ner AAPS och börja använda det direkt?

**AAPS**-appen finns inte i Google Play. Av juridiska skäl måste du själv bygga den från källkoden. **AAPS** är inte licensierat, vilket betyder att det inte är godkänt av någon myndighet i något land. Att använda **AAPS** räknas som att du gör ett medicinskt experiment på dig själv, och det sker på användarens egen risk.

Att sätta upp systemet kräver tålamod, beslutsamhet och att du gradvis bygger upp teknisk kunskap. All information och hjälp finns i den här dokumentationen, på andra ställen på nätet eller hos andra som redan har gjort det. Många tusen personer har byggt och använder nu **AAPS** över hela världen.

Utvecklarna av **AAPS** tar säkerheten på mycket stort allvar och vill att andra ska få en bra upplevelse av att använda **AAPS**. Därför är det viktigt att varje användare (eller anhörig, om användaren är ett barn):

- bygger AAPS-systemet själv och går igenom **målen**, så att hen har ganska bra personliga inställningar och förstår grunderna i hur **AAPS** fungerar innan hen ”sluter loopen”;

- säkerhetskopierar sitt system genom att exportera och spara viktiga filer (som keystore och inställningsfilen .json) på ett säkert ställe, så att systemet snabbt kan sättas upp igen om det behövs;

- uppdaterar till nya master-versioner när de blir tillgängliga; och

- underhåller och övervakar systemet så att det fungerar som det ska.

## Hur är AAPS-systemet uppkopplat?

**Figur 3 (nedan)** visar ett exempel på **AAPS**-systemet för en användare som inte behöver några följare som påverkar systemet. Även annan programvara och andra plattformar med öppen källkod som inte visas kan integreras.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Figur 4 (nedan)** visar alla möjligheter med **AAPS**-systemet för en användare som har följare och behöver övervaka och justera systemet på distans (som ett barn med typ 1-diabetes). Även annan programvara och andra plattformar med öppen källkod som inte visas kan integreras.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## Hur utvecklas och förbättras AAPS hela tiden?

De flesta **AAPS**-användare använder den fullt testade **master**-versionen av AAPS, som har testats för buggar och problem innan den släpps till communityn. Bakom kulisserna provar utvecklarna nya förbättringar och testar dem i ”utvecklarversioner” (**dev**) av **AAPS** tillsammans med användare som gärna uppdaterar med buggrättningar med kort varsel. Om förbättringarna fungerar bra släpps de sedan som en ny ”master”-version av **AAPS**. Varje ny master-version meddelas i Facebook-gruppen, så att vanliga **AAPS**-användare kan läsa om den och uppdatera till den nya master-versionen.

En del erfarna och självsäkra **AAPS**-användare gör experiment med ny teknik och med dev-versioner av **AAPS**-appen. Det kan vara intressant för mindre äventyrliga användare att läsa om, utan att behöva göra det själva! Dessa experiment delas ofta också i Facebook-gruppen.

Du kan läsa mer om några av dessa experiment och diskussioner om ny teknik här:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Vem kan ha nytta av AAPS?

| Användartyp                                                 |
| ----------------------------------------------------------- |
| ✔️ person med typ 1-diabetes                                |
| ✔️ anhörig eller förälder till en person med typ 1-diabetes |
| ✔️ blinda användare med typ 1-diabetes                      |
| ✔️ *läkare och annan vårdpersonal                           |

Tabellen ovan förutsätter att användaren har tillgång till både en kontinuerlig glukosmätare (CGM) och en insulinpump.

*Alla data från **AAPS** kan göras tillgängliga för vårdpersonal via plattformar för datadelning, bland annat Nightscout som loggar och visar i realtid CGM-data, insulintillförsel, kolhydrater, prognoser och inställningar. Rapporterna i Nightscout, per dag och per vecka, kan hjälpa vårdpersonal i samtal med patienter med typ 1-diabetes, med mer exakta data om glukoskontroll och om beteende.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Tillgänglighet för AAPS-användare som är delvis eller helt blinda

#### AAPS i vardagen:
AAPS kan användas av blinda personer. På Android-enheter har operativsystemet ett program som heter TalkBack. Med det kan du orientera dig på skärmen med hjälp av uppläsning, som en del av operativsystemet. Med TalkBack kan du använda både din telefon och AAPS utan att behöva se.

#### Bygga AAPS-appen:
Som användare bygger du AAPS-appen i Android Studio. Många använder Microsoft Windows till detta, och där finns en skärmläsare som liknar TalkBack. Eftersom Android Studio är ett Java-program måste komponenten ”Java Access Bridge” vara aktiverad i Kontrollpanelen. Annars läser datorns skärmläsare inte upp något i Android Studio.

Hur du gör detta beror på ditt operativsystem. Två sätt beskrivs nedan:

1) Skriv ”Kontrollpanelen” (Control Panel) i sökfältet i Windows Start-meny och öppna med Enter. Då öppnas ”Alla objekt på Kontrollpanelen” (All Control Panel Items).

Öppna ”Hjälpmedelscenter” (Ease of Access Centre).

Öppna sedan ”Använd datorn utan bildskärm” (Use computer without a display) med Enter.

Under **Hear text read aloud** (Hör text läsas upp) väljer du **turn on narrator** (aktivera Skärmläsaren) och **turn on audio display** (aktivera ljudbeskrivning), och klickar sedan på **apply** (Verkställ).

eller:

2) Tryck på Windows-tangenten och skriv ”Kontrollpanelen” (Control Panel) i sökfältet, öppna med Enter. Då öppnas ”Alla objekt på Kontrollpanelen” (All Control Panel Items).

Tryck på bokstaven H (E i engelska Windows) för att komma till ”Hjälpmedelscenter” (Ease of Access Centre), öppna med Enter.

Öppna sedan ”Använd datorn utan bildskärm” (Use computer without a display) med Enter.

Längst ner hittar du kryssrutan ”Aktivera Java Access Bridge” (Enable Java Access Bridge). Markera den.

Klart, stäng bara fönstret! Skärmläsaren bör fungera nu.



Vill du veta hur du kommer igång med att sätta upp AAPS? Läs avsnittet om [förberedelser](../Getting-Started/PreparingForAaps.md).
