# Viktiga funktioner i AAPS

## Loopläge

Loopens status visas på huvudskärmen med en av ikonerna nedan.

**AAPS** har flera looplägen, till exempel Sluten loop (1), Paus vid lågt blodsocker (LGS – 2) och Öppen loop (3).

Se [AAPS-skärmar > Huvudskärmen > Loopstatus](#AapsScreens-loop-status) för information om hur du väljer loopläge och om de andra ikonerna på bilden (4 till 6).

![Loopstatus](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Öppen loop

**AAPS** utvärderar hela tiden alla tillgängliga data (IOB, COB, BG ...) och ger förslag på behandling (tillfälliga basaldoser) om hur du vid behov kan justera din behandling.

Förslagen utförs inte automatiskt (som i sluten loop). Användaren måste själv föra in förslagen manuellt i pumpen (om du använder virtuell pump) eller utföra dem med en knapp om **AAPS** är ansluten till en riktig pump.

När **AAPS** har ett förslag visas posten **Loop** med en bricka i den nedre navigeringen på huvudskärmen. Tryck på den för att läsa förslaget (”Acceptera ny tillfällig basal”) med dos, varaktighet och orsak, och tryck sedan på **Utför** för att genomföra det:

![Förslag i öppen loop med knappen Utför](../images/screens/loop_tab.png)

Ett förslag gäller bara i några minuter. Om det är äldre än ungefär 9 minuter, eller om loopen har pausats eller pumpen kopplats från under tiden, avvisar **AAPS** förslaget och inget skickas till pumpen (*”Förslaget var för gammalt. Ingenting skickades till pumpen. Vänta tills nästa dyker upp.”*). Vänta på nästa förslag.

Det här alternativet är till för att lära känna hur **AAPS** fungerar, eller om du använder en pump som inte stöds. Du är i Öppen loop till slutet av **[Mål 5](#objectives-objective5)**, oavsett vad du väljer här.

(KeyAapsFeatures-LGS)=

### Paus vid lågt blodsocker (LGS)

I det här läget sätts [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) till noll.

Det betyder att **AAPS** kan minska basalen åt dig om blodsockret sjunker. Men om blodsockret stiger görs ingen automatisk korrigering. Dina basaldoser förblir desamma som i din aktuella **Profil**. Bara om IOB är negativ (efter en tidigare paus vid lågt blodsocker) ges extra insulin för att sänka **BG**.

Det här läget är tillgängligt från **[Mål 6](#objectives-objective6)**.

Förutom att du kan välja läget själv kan **AAPS** också byta till det här läget på egen hand: medan du arbetar med **[Mål 6](#objectives-objective6)**, och när det upptäcker dubbla BG-värden (se [BG-varningsskylt](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Sluten loop

**AAPS** utvärderar hela tiden alla tillgängliga data (IOB, COB, BG ...) och justerar automatiskt behandlingen vid behov (*dvs.* utan att du behöver göra något) för att nå det inställda [målintervallet eller målvärdet](#profile-glucose-targets) (bolus, tillfällig basaldos, avstängning av insulin för att undvika hypo osv.).

Sluten loop arbetar inom många säkerhetsgränser som kan ställas in individuellt.

Sluten loop är bara möjlig om du är på **[Mål 7](#objectives-objective7)** eller högre och använder en pump som stöds.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens är en algoritm som tittar på avvikelser i blodsockret (positiva/negativa/neutrala).
- Den försöker räkna ut hur känslig/resistent du är utifrån dessa avvikelser.
- Implementeringen av oref i **OpenAPS** använder en kombination av data från 24 och 8 timmar. Den använder det av de två som ger högst känslighet.
- Användare som kommer från oref1 märker troligen att systemet reagerar mindre dynamiskt på förändringar, eftersom känsligheten beräknas från antingen 24 eller 8 timmar.
- Ett kanylbyte eller profilbyte återställer Autosens-kvoten till 100 % (ett profilbyte med procent och varaktighet återställer inte autosens).
- Autosens justerar din basal och ISF (dvs. gör samma sak som ett profilbyte).
- Om du äter kolhydrater hela tiden under en längre period blir Autosens mindre effektivt under den perioden, eftersom kolhydrater inte tas med i beräkningarna av **BG**-delta.
- Avvikelserna omvandlas till en **känslighetskvot** (en procentsats): en kvot under 100 % betyder att AAPS tror att du är mer känslig för insulin än din **Profil** räknar med (så den sänker den faktiska basalen och höjer ISF-värdet), medan en kvot över 100 % betyder att du är mer resistent (så den höjer basalen och sänker ISF-värdet).
- Som standard hålls den här kvoten mellan 0,7 (70 %, mer känslig) och 1,2 (120 %, mer resistent), så att en period med ovanliga data inte kan få din dosering att hamna för långt från din **Profil**. De här gränserna kan justeras i de avancerade inställningarna för Känslighetsdetektering.
- Autosens och [Autotune](../AdvancedOptions/Autotune.md) löser samma grundproblem på olika tidsskalor: Autosens justerar din *pågående* dosering minut för minut utifrån de senaste 8–24 timmarna, medan Autotune långsamt skriver om själva din *Profil* utifrån flera veckors historik. Det är normalt och förväntat att köra båda – de kompletterar varandra i stället för att göra samma sak.

*En fullständig teknisk beskrivning av autosens-algoritmen finns i [OpenAPS dokumentation om Autosens](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, förkortning av **Super micro bolus**, är en funktion i OpenAPS som infördes från 2018 i algoritmen Oref1. Till skillnad från **AMA** använder **SMB** inte tillfälliga basaldoser för att styra glukosnivån, utan främst **små supermikrobolusar**. I situationer där **AMA** skulle lägga till 1,0 IU insulin med en tillfällig basaldos ger **SMB** flera supermikrobolusar i små steg med **5 minuters mellanrum**, t.ex. 0,4 IU, 0,3 IU, 0,2 IU och 0,1 IU. Samtidigt (av säkerhetsskäl) sätts den faktiska basaldosen till 0 IU/h under en viss tid för att förhindra överdos (**”tillfällig basal på noll”**). Det gör att systemet kan justera blodsockret snabbare än med den ökade tillfälliga basaldosen i **AMA**.

Tack vare SMB kan det räcka att tala om för systemet hur mycket kolhydrater du planerar att äta vid måltider med bara ”långsamma” kolhydrater och låta **AAPS** sköta resten. Det kan dock leda till högre toppar efter måltid (postprandiellt), eftersom förbolus inte är möjlig. Du kan också ge, vid behov med förbolus, en **startbolus** som **bara delvis** täcker kolhydraterna (t.ex. 2/3 av den uppskattade mängden) och låta **SMB** leverera resten av insulinet.

![SMB:er i IOB-grafen](../images/SMBs.png)

SMB:er visas i [IOB-grafen](#aaps-screens-iob) som blå trianglar. [Tryck och håll](#aaps-screens-graph-press-and-hold) på grafen vid en triangel för att se hur mycket insulin som levererades, eller använd [Behandlingshistorik](#aaps-screens-treatments).

**SMB** har några säkerhetsmekanismer:

1. **Största enskilda SMB-dos**  
  Den största enskilda SMB-dosen kan bara vara det minsta av följande värden:
  
        * värdet som motsvarar den aktuella basaldosen (justerad av autosens) under den tid som är inställd i ”Max antal minuter med basal som kan bli SMB”, t.ex. basalmängden för de kommande 30 minuterna, eller
        * hälften av den mängd insulin som behövs just nu, eller
        * den återstående delen av ditt maxIOB-värde i inställningarna.
      

2. **Låga tillfälliga basaldoser**  
  Låga tillfälliga basaldoser (kallas ”low temps”) eller tillfälliga basaldoser på 0 U/h (kallas ”zero-temps”) används oftare med **SMB**. Det är avsiktligt av säkerhetsskäl och har inga negativa effekter om **Profil** är rätt inställd. I huvudgrafen säger IOB-kurvan (tunn gul linje) mer än hur de tillfälliga basaldoserna ser ut.

3. **Oannonserade måltider**  
  Ytterligare beräkningar för att förutsäga hur glukosvärdet utvecklas, t.ex. med **UAM** (oannonserade måltider). Även utan att användaren matar in kolhydrater kan **UAM** automatiskt upptäcka en tydlig ökning av glukosnivån på grund av måltider, adrenalin eller annan påverkan och försöka justera den med **SMB**. För säkerhets skull fungerar detta också åt andra hållet och kan stoppa SMB tidigare om glukosvärdet sjunker oväntat snabbt. Därför ska UAM alltid vara aktivt med SMB.

SMB bestämmer inte på egen hand att insulin behövs – det bygger på samma sammanvägda BG-prognoser (slutligt BG, zero-temp, COB, UAM) som beskrivs i [hur AAPS gör prognoser till ett doseringsbeslut](#aaps-screens-how-predictions-become-a-dosing-decision). SMB och tillfällig basal på noll är helt enkelt de två verktyg som AAPS använder för att genomföra det beslutet.

**Du måste ha startat [mål 9](#objectives-objective9) för att kunna använda SMB.**

Se även [OpenAPS dokumentation om oref1/SMB](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) för en fullständig teknisk beskrivning, eller [Tims information om SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/) för en text från communityn.

Inställningarna för OpenAPS SMB beskrivs nedan.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Maximal basalhastighet

Den här säkerhetsinställningen avgör den högsta tillfälliga basaldos som insulinpumpen får leverera. Den kallas också **max-basal**.

Värdet anges i enheter per timme (U/h). Du bör ställa in ett rimligt värde. En bra rekommendation för den här parametern är:

**MAX-BASAL = HÖGSTA BASALDOS x 4**

Om till exempel den högsta basaldosen i din profil var 0,5 U/h kan du multiplicera den med 4 och få värdet 2 U/h.

**AAPS** begränsar det här värdet med en ”fast gräns” enligt [Inställningar > Säkerhet > Personens ålder](#preferences-patient-type). De fasta gränserna är följande:

- Barn: 2
- Tonåring: 5
- Vuxen: 10
- Insulinresistent vuxen: 12
- Gravid: 25

*Se även [översikt över fasta gränser](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### Max IOB för SMB

Det här värdet avgör den högsta mängden **aktivt insulin** (IOB från basal och bolus) som **AAPS** håller sig under när det körs i sluten loop. Det kallas också **maxIOB**.

Om aktuell IOB (t.ex. efter en måltidsbolus) är över det angivna värdet slutar loopen att dosera insulin tills IOB är under gränsen.

En bra start för den här parametern är:

      maxIOB = genomsnittlig måltidsbolus + 3x högsta basal per dygn
    

Var försiktig och tålmodig när du justerar **max-IOB**. Värdet är olika för alla och kan också bero på den genomsnittliga totala dygnsdosen (TDD).

**AAPS** begränsar det här värdet med en ”fast gräns” enligt [Inställningar > Säkerhet > Personens ålder](#preferences-patient-type). De fasta gränserna är följande:

- Barn: 7
- Tonåring: 13
- Vuxen: 22
- Insulinresistent vuxen: 30
- Gravid: 70

*Se även [översikt över fasta gränser](#Open-APS-features-overview-of-hard-coded-limits).*

Obs! När du använder **SMB** beräknas **max-IOB** på ett annat sätt än i AMA. I **AMA** är maxIOB en säkerhetsparameter för basal-**IOB**, medan den i SMB-läge också omfattar bolus-IOB.

### Använd dynamisk känslighet

Det här är funktionen [Dynamisk ISF](../DailyLifeWithAaps/DynamicISF.md). När den är aktiverad blir nya inställningar tillgängliga. Inställningarna förklaras på sidan [Dynamisk ISF](#dyn-isf-preferences).

### Använd Autosens

Det här är funktionen [Autosens](#Open-APS-features-autosens). När du använder Dynamisk ISF kan Autosens inte användas, eftersom de är två olika algoritmer som ändrar samma variabel (känsligheten).

Autosens tittar på avvikelser i blodsockret (positiva/negativa/neutrala). Den försöker räkna ut hur känslig/resistent du är utifrån dessa avvikelser och justerar basaldos och ISF utifrån dem.

När den är aktiverad blir nya inställningar tillgängliga.

#### Känslighet höjer målvärdet

Om det här alternativet är aktiverat kan känslighetsdetekteringen (autosens) höja målvärdet när känslighet upptäcks (under 100 %). I så fall höjs ditt målvärde med den procent som känsligheten har.

Om målvärdet ändras på grund av känslighetsdetekteringen visas det med grön bakgrund på huvudskärmen.

![Målvärde ändrat av autosens](../images/Home2020_DynamicTargetAdjustment.png)

Den här inställningen är tillgänglig när antingen ”Använd dynamisk känslighet” eller ”Använd Autosens” är aktiverad.

#### Insulinresistens sänker målvärde

Om det här alternativet är aktiverat kan känslighetsdetekteringen (autosens) sänka målvärdet när resistens upptäcks (över 100 %). I så fall sänks ditt målvärde med den procent som resistensen har.

Den här inställningen är tillgänglig när antingen ”Använd dynamisk känslighet” eller ”Använd Autosens” är aktiverad.

### Aktivera SMB

Aktivera detta för att använda SMB. Om det är inaktiverat ges inga **SMB:er**.

När den är aktiverad blir nya inställningar tillgängliga.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Aktivera SMB vid högt tillfälligt målvärde

Om den här inställningen är aktiverad ges **SMB:er** även om användaren har valt ett högt **Tillfälligt målvärde** (definierat som 100 mg/dl eller 5,6 mmol/l och högre, oavsett målvärdet i **Profil**). Var försiktig när du aktiverar den: **SMB:er** kan bli alltför aggressiva om dina inställningar inte är väl justerade eller om din **Profil** ändras ofta (till exempel hos barn).

När den här inställningen är inaktiverad stänger ett högt **Tillfälligt målvärde** av **SMB:er**. Om det här alternativet till exempel är inaktiverat kan **SMB:er** stängas av genom att du ställer in ett **Tillfälligt målvärde** på 100 mg/dl eller 5,6 mmol/l och högre. Det här alternativet stänger också av **SMB:er** oavsett vilket annat villkor som försöker aktivera SMB – utom vid ett lågt **Tillfälligt målvärde** som **Äta snart** (eller något **Tillfälligt målvärde** på 98 mg/dl eller 5,4 mmol/l och lägre), som fortfarande kan ge **SMB:er** för att föra **BG** mot målvärdet.

Den här inställningen slår inte på **SMB** av sig själv. Med ett högt tillfälligt målvärde ges **SMB** bara om någon av de andra inställningarna nedan (till exempel **Aktivera SMB alltid** eller **Aktivera SMB med COB**) också tillåter det.

(Open-APS-features-enable-smb-always)=

#### Aktivera SMB alltid

Om den här inställningen är aktiverad är SMB alltid aktiverat (oberoende av COB, tillfälliga målvärden eller bolusar). Om den här inställningen är aktiverad har de övriga aktiveringsinställningarna nedan ingen effekt. Men om **Aktivera SMB vid högt tillfälligt målvärde** är inaktiverad och ett högt tillfälligt målvärde är inställt, inaktiveras SMB.

Den här inställningen är bara tillgänglig om **AAPS** upptäcker att du använder en [pålitlig BG-källa](#GettingStarted-TrustedBGSource) med avancerad filtrering. FreeStyle Libre 1 räknas inte som en pålitlig källa, eftersom gamla BG-data kan upprepas i oändlighet om sensorn slutar fungera.

Data med brus kan få **AAPS** att tro att BG stiger mycket snabbt, så att onödiga SMB:er ges. Mer information om brus och utjämning av data finns [här](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Aktivera SMB med COB

Om den här inställningen är aktiverad är SMB aktiverat när COB är större än 0.

Den här inställningen visas inte om ”Aktivera SMB alltid” är påslagen.

#### Aktivera SMB vid lågt tillfälligt målvärde

Om den här inställningen är aktiverad är SMB aktiverat när ett tillfälligt målvärde är inställt (äta snart, träning, hypo, eget). Om den här inställningen är aktiverad men **Aktivera SMB vid högt tillfälligt målvärde** är inaktiverad, aktiveras SMB när ett lågt tillfälligt målvärde är inställt (98 mg/dl eller 5,4 mmol/l och lägre) men inaktiveras när ett högt tillfälligt målvärde är inställt.

Den här inställningen visas inte om ”Aktivera SMB alltid” är påslagen.

#### Aktivera SMB efter kolhydrater

Om den är aktiverad är SMB aktiverat i 6 timmar efter att kolhydrater har registrerats, även om COB har nått 0.

Av säkerhetsskäl är den här inställningen bara tillgänglig om **AAPS** upptäcker att du använder en pålitlig BG-källa. Den visas inte om ”Aktivera SMB alltid” är påslagen.

Den här inställningen är bara tillgänglig om **AAPS** upptäcker att du använder en [pålitlig BG-källa,](#GettingStarted-TrustedBGSource) med avancerad filtrering. FreeStyle Libre 1 räknas inte som en pålitlig källa, eftersom gamla BG-data kan upprepas i oändlighet om sensorn slutar fungera.

Data med brus kan få **AAPS** att tro att BG stiger mycket snabbt, så att onödiga SMB:er ges. Mer information om brus och utjämning av data finns [här](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Den här inställningen visas inte om ”Aktivera SMB alltid” är påslagen.

#### SMB-intervall

Den här funktionen begränsar hur ofta SMB:er ges. Det här värdet avgör den kortaste tiden mellan SMB:er. Observera att loopen körs varje gång ett nytt glukosvärde kommer in (oftast var 5:e minut). Dra ifrån 2 minuter så att loopen får extra tid att bli klar. Om du t.ex. vill att SMB ska kunna ges vid varje körning av loopen ställer du in 3 minuter.

Standardvärde: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Max antal minuter med basal som kan bli SMB

Det här är en viktig säkerhetsinställning. Det här värdet avgör hur mycket SMB som kan ges utifrån mängden basalinsulin under en viss tid, när den täcks av COB.

Ett högre värde gör att SMB kan bli mer aggressiv. Börja med standardvärdet 30 minuter. När du har fått lite erfarenhet kan du öka värdet i steg om 15 minuter och se hur det påverkar flera måltider.

Du bör inte ställa in högre värde än 90 minuter, eftersom algoritmen då kanske inte kan hantera ett sjunkande BG med basal 0 U/h (”zero-temp”). Du bör också ställa in larm, särskilt medan du fortfarande testar nya inställningar, så att du varnas i god tid innan du får en hypo.

Standardvärde: 30 min.

#### Max antal minuter med basal som kan bli SMB vid UAM

Med den här inställningen kan du justera styrkan på SMB under UAM, när det inte finns fler kolhydrater.

Standardvärde: samma som **Max antal minuter med basal som kan bli SMB**.

Den här inställningen visas bara om ”Aktivera SMB” och ”Aktivera UAM” är påslagna.

(enable-uam)=

### Aktivera UAM

Med det här alternativet aktiverat kan SMB-algoritmen känna igen oannonserade måltider. Det är till hjälp om du glömmer att tala om för **AAPS** att du äter kolhydrater, om du uppskattar kolhydraterna fel så att mängden som du har angett är fel, eller om en måltid med mycket fett och protein varar längre än väntat. Utan att kolhydrater har angetts kan UAM känna igen en snabb ökning av glukosnivån som beror på kolhydrater, adrenalin osv., och försöker justera den med SMB:er. Det fungerar också åt andra hållet: om glukosnivån sjunker snabbt kan SMB:er stoppas tidigare.

**Därför ska UAM alltid vara aktiverat när du använder SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Tröskelvärde för förslag om behov av kolhydrater

Minsta antal gram kolhydrater för att visa en varning med förslag om kolhydrater. Systemet föreslår att du äter extra kolhydrater när referensdesignen upptäcker att kolhydrater behövs. Då får du en avisering som kan snoozas i 5, 15 eller 30 minuter.

Aviseringar om att kolhydrater behövs kan skickas till Nightscout om du vill. Då visas och sänds ett meddelande.

De kolhydrater som behövs visas i vilket fall som helst i COB-delen på huvudskärmen.

![Visa behov av kolhydrater på huvudskärmen](../images/main/main_screen_carbs_required.png)

### Avancerade inställningar

En fullständig referens för alla parametrar (även inställningar som inte beskrivs här) finns i [OpenAPS dokumentation om inställningar och säkerhetsinställningar](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Använd alltid kort genomsnittligt delta** Om du aktiverar den här funktionen använder **AAPS** det korta genomsnittliga deltat/blodsockret från de senaste 15 minuterna i stället för enkelt delta. Det är oftast medelvärdet av de tre senaste värdena. Det hjälper **AAPS** att vara stabilare med datakällor som har brus, som xDrip och Libre.

**Säkerhetsmultiplikator för max daglig basal** Det här är en viktig säkerhetsgräns. Standardinställningen (som troligen inte behöver ändras) är 3. Det betyder att **AAPS** aldrig får ställa in en tillfällig basaldos som är mer än 3 gånger den högsta basaldosen per timme som är programmerad i användarens pump och/eller profil. Exempel: om din högsta basaldos är 1,0 U/h och säkerhetsmultiplikatorn för max daglig basal är 3, kan **AAPS** ställa in en tillfällig basaldos på högst 3,0 U/h (= 3 x 1,0 U/h).

Standardvärde: 3 (bör inte ändras om du inte verkligen behöver det och vet vad du gör)

**Nuvarande basal säkerhetsmultiplikator** Det här är en annan viktig säkerhetsgräns. Standardinställningen (som troligen inte heller behöver ändras) är 4. Det betyder att **AAPS** aldrig får ställa in en tillfällig basaldos som är mer än 4 gånger den aktuella basaldosen per timme som är programmerad i användarens pump och/eller profil.

Standardvärde: 4 (bör inte ändras om du inte verkligen behöver det och vet vad du gör)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** är en **experimentell** algoritm för vana användare. Den bygger på OpenAPS SMB och lägger till regler som gör insulinkänslighetsfaktorn (ISF) starkare eller svagare beroende på hur ditt glukosvärde beter sig.

Det är en utvecklingsfunktion: den kan bara slås på i en [dev-version](../AdvancedOptions/DevBranch.md) med **Engineering Mode** aktiverat. I en vanlig version är den alltid avstängd och visas därför inte i **Konfiguration → APS**. Att slutföra [Mål](../SettingUpAaps/CompletingTheObjectives.md) låser inte upp den.

När du har valt den innehåller dess **Inställningar** inställningarna för OpenAPS SMB samt gruppen **AutoISF-inställningar**:

- **Aktivera AutoISF**: slår på ISF-justeringarna. Utan den fungerar algoritmen som OpenAPS SMB.
- **AutoISF min** och **AutoISF max**: hur svag och hur stark ISF får bli, på samma sätt som gränserna för Autosens. Med standardvärdet 1,0 är effekten avstängd.
- **Vikter**: var och en styr en regel, och standardvärdet 0,0 stänger av regeln. 
  - när glukosvärdet **ökar allt snabbare** stärks ISF (mer insulin);
  - när glukosvärdet **bromsar in** försvagas ISF (mindre insulin);
  - när glukosvärdet är **under målvärdet** försvagas ISF;
  - när glukosvärdet är **över målvärdet** stärks ISF;
  - en vikt för **efter måltid** (post-prandial) och en vikt för **varaktighet** verkar efter måltider och när glukosvärdet är högt under lång tid.
- **SMB leveransförhållande** (med ett minimum, ett maximum och ett BG-intervall): hur stor del av det insulin som behövs som får ges som SMB.
- **Utökning av SMB maxintervall**: med vilken faktor den vanliga storleksgränsen för SMB ([max antal minuter med basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), 30 minuter som standard) får överskridas. Standardvärdet 1 ändrar ingenting. Upp till 5 är möjligt. Höj det här experimentella värdet långsamt och försiktigt.
- **IOB-tröskelprocent**: den procent av max IOB där SMB:er stängs av.

    {admonition} Bara för vana användare
    :class: danger
    Med standardvärdena ändrar Auto ISF ingenting. Varje värde som du höjer gör **AAPS** mer aggressivt. Ändra ett värde i taget, i små steg, och följ resultatet under flera dagar. Var mycket försiktig med ett värde för **AutoISF max** över 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Advanced Meal Assist (AMA)

AMA, förkortning av ”advanced meal assist” (avancerad måltidshjälp), är en funktion i OpenAPS från 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) gör att systemet kan höja den tillfälliga basalen snabbare efter en måltidsbolus om du anger kolhydrater på ett pålitligt sätt.

Mer information finns i [dokumentationen för OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximal basalhastighet (OpenAPS ”max-basal”)

Den här säkerhetsinställningen hindrar **AAPS** från att någonsin kunna ge en farligt hög basaldos och begränsar den tillfälliga basaldosen till x U/h. Du bör ställa in ett rimligt värde. En bra rekommendation är att ta den högsta basaldosen i din profil och multiplicera den med 4, och minst med 3. Om till exempel den högsta basaldosen i din profil är 1,0 U/h kan du multiplicera den med 4 och få värdet 4 U/h, och ställa in 4 som din säkerhetsparameter.

Du kan inte välja vilket värde som helst: av säkerhetsskäl finns en ”fast gräns” som beror på personens ålder. Den ”fasta gränsen” för maxIOB är lägre i AMA än i SMB. För barn är värdet lägst och för insulinresistenta vuxna är det högst.

De fasta parametrarna i **AAPS** är:

- Barn: 2
- Tonåring: 5
- Vuxen: 10
- Insulinresistent vuxen: 12
- Gravid: 25

*Se även [översikt över fasta gränser](#Open-APS-features-overview-of-hard-coded-limits).*

### Max IOB för AMA

Den här parametern begränsar den högsta basal-IOB där **AAPS** fortfarande arbetar. Om IOB är högre slutar systemet att ge extra basalinsulin tills basal-IOB är under gränsen.

Standardvärdet är 2, men du bör höja den här parametern långsamt för att se hur mycket den påverkar dig och vilket värde som passar bäst. Värdet är olika för alla och beror också på den genomsnittliga totala dygnsdosen (TDD). Av säkerhetsskäl finns en gräns som beror på personens ålder. Den ”fasta gränsen” för maxIOB är lägre i AMA än i SMB.

- Barn: 3
- Tonåring: 5
- Vuxen: 7
- Insulinresistent vuxen: 12
- Gravid: 25

*Se även [översikt över fasta gränser](#Open-APS-features-overview-of-hard-coded-limits).*

### Använd Autosens (AMA)

Här kan du välja om du vill använda [känslighetsdetektering](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) (autosens) eller inte.

### Autosens justerar målvärden

Om det här alternativet är aktiverat kan autosens också justera målvärden (förutom basal och ISF). Det gör att **AAPS** kan arbeta mer ”aggressivt” eller inte. Det faktiska målvärdet kan nås snabbare med detta.

### Avancerade inställningar

- Normalt behöver du inte ändra inställningarna i den här dialogrutan!
- Om du ändå vill ändra dem ska du se till att du förstår vad du gör – se den fullständiga referensen för parametrar i [OpenAPS dokumentation om inställningar och säkerhetsinställningar](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Använd alltid kort genomsnittligt delta** Om du aktiverar den här funktionen använder **AAPS** det korta genomsnittliga deltat/blodsockret från de senaste 15 minuterna i stället för enkelt delta. Det är oftast medelvärdet av de tre senaste värdena. Det hjälper **AAPS** att arbeta stabilare med datakällor som har brus, som xDrip och Libre.

**Säkerhetsmultiplikator för max daglig basal** Det här är en viktig säkerhetsgräns. Standardinställningen (som troligen inte behöver ändras) är 3. Det betyder att **AAPS** aldrig får ställa in en tillfällig basaldos som är mer än 3 gånger den högsta basaldosen per timme som är programmerad i användarens pump. Exempel: om din högsta basaldos är 1,0 U/h och säkerhetsmultiplikatorn för max daglig basal är 3, kan **AAPS** ställa in en tillfällig basaldos på högst 3,0 U/h (= 3 x 1,0 U/h).

Standardvärde: 3 (bör inte ändras om du inte verkligen behöver det och vet vad du gör)

**Nuvarande basal säkerhetsmultiplikator** Det här är en annan viktig säkerhetsgräns. Standardinställningen (som troligen inte heller behöver ändras) är 4. Det betyder att **AAPS** aldrig får ställa in en tillfällig basaldos som är mer än 4 gånger den aktuella basaldosen per timme som är programmerad i användarens pump.

Standardvärde: 4 (bör inte ändras om du inte verkligen behöver det och vet vad du gör)

**Bolus snooze DIA-divisor** Funktionen ”bolus snooze” verkar efter en måltidsbolus. **AAPS** sätter inga låga tillfälliga basaldoser efter en måltid under en tid som är DIA delat med parametern ”bolus snooze”. Standardvärdet är 2. Det betyder att med en DIA på 5 h blir ”bolus snooze” 5 h : 2 = 2,5 h lång.

Standardvärde: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Översikt över fasta gränser

|            | Barn | Tonåring | Vuxen | Insulinresistent vuxen | Gravid |
| ---------- | ---- | -------- | ----- | ---------------------- | ------ |
| MAXBOLUS   | 5    | 10       | 17    | 25                     | 60     |
| MINDIA     | 5    | 5        | 5     | 5                      | 5      |
| MAXDIA     | 9    | 9        | 9     | 9                      | 10     |
| MINIC      | 2    | 2        | 2     | 2                      | 0,3    |
| MAXIC      | 100  | 100      | 100   | 100                    | 100    |
| MAXIOB_AMA | 3    | 5        | 7     | 12                     | 25     |
| MAXIOB_SMB | 7    | 13       | 22    | 30                     | 70     |
| MAXBASAL   | 2    | 5        | 10    | 12                     | 25     |