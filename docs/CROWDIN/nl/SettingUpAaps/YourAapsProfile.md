# Je AAPS-profiel

Je **AAPS-profiel** is een set van vier belangrijke parameters. Ze bepalen hoe **AAPS** insuline moet geven op basis van je sensorglucosewaarden. Dit zijn de belangrijkste parameters waarop **AAPS** is gebouwd. Als je verder komt in de **Doelen**, krijg je toegang tot meer instelbare parameters (zoals de SMB-instellingen). Maar hoe goed deze functies werken, hangt af van een correct onderliggend **Profiel**. Het **Profiel** bevat:
* [glucosestreefwaarden](#profile-glucose-targets),
* [basaalstanden](#your-aaps-profile-basal-rates) (BR),
* [insulinegevoeligheidsfactoren](#your-aaps-profile-insulin-sensitivity-factor) (ISF) en
* [insuline-koolhydraatratio's](#your-aaps-profile-insulin-to-carbs-ratio) (IC of ICR).

```{admonition} Where did DIA go?
:class: note
De **werkingsduur van insuline (DIA)** is geen onderdeel meer van je **Profiel**. Die stel je nu per insuline in — zie [Beheren → Insuline instellingen](#Config-Builder-insulin-dia).
```

Als onderdeel van het werken met **AAPS** moet je steeds blijven controleren of de instellingen van je **Profiel** kloppen. Het is aan te raden om de instellingen te doen in de volgorde waarin ze hier staan. Zorg dat één instelling goed is voordat je een andere verandert. Werk in kleine stappen in plaats van grote veranderingen in één keer te maken. Vergeet niet om na elke wijziging het nieuwe profiel te activeren. Maak regelmatig een [back-up van je **Profiel**](#YourAapsProfile_Profile-backup)-instellingen door je instellingen te exporteren.

De instellingen van je **Profiel** beïnvloeden elkaar. Je kunt 'verkeerde' instellingen hebben die in sommige situaties goed samenwerken, maar in andere niet. Bijvoorbeeld als een te hoge basaal samenvalt met een te hoge **CR**. Je moet de instellingen dus elk apart bekijken en controleren of ze in verschillende situaties goed samenwerken.

Je kunt [Autotune](https://autotuneweb.azurewebsites.net/) gebruiken als hulp bij het nadenken, maar volg het niet blindelings: het werkt misschien niet goed voor jou of niet in alle situaties.

```{admonition} Your diabetes may vary
:class: note
**Profielen** verschillen sterk van persoon tot persoon.

Voor basaalstanden (BR), insulinegevoeligheidsfactoren (ISF) en insuline-koolhydraatratio's (IC of ICR) verschillen de absolute waarden en de trends in insulinebehoefte sterk per persoon. Dat hangt af van je lichaam, geslacht, leeftijd, conditie enz., en ook van factoren op korte termijn zoals ziekte en recente sport. Voor meer uitleg hierover is het boek [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) van Adam Brown een uitstekend boek om te lezen.

```

De laatste vier parameters (glucosestreefwaarden, basaalstanden, insulinegevoeligheidsfactoren en insuline-koolhydraatratio's) kunnen over een periode van 24 uur verschillende waarden hebben, zo nodig per uur anders.

![Basaal per uur anders](../images/MaxDailyBasal2.png)

Hieronder zie je screenshots uit **AAPS** van een _voorbeeld_profiel. Let op: het voorbeeldprofiel hieronder heeft veel tijdstippen. Als je net met **AAPS** begint, is je profiel waarschijnlijk veel eenvoudiger.

![Voorbeeld van een actief profiel](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Glucosestreefwaarden

### Beschrijving

Je **BG-streefwaarde** is een kernwaarde: alle berekeningen van **AAPS** zijn erop gebaseerd. Het is iets anders dan het doelbereik waarin je je bloedglucosewaarden meestal probeert te houden. De streefwaarde wordt gebruikt in de berekeningen van **AAPS**: als **AAPS** voorspelt dat je **BG** buiten het streefbereik komt, onderneemt het actie om je weer in dat bereik te brengen.

Binnen die grenzen kun je de streefwaarden instellen:

|         | _Lage_ streefwaarde    | _Hoge_ streefwaarde      |
| ------- | ---------------------- | ------------------------ |
| Minimum | 4,4 mmol/l of 80 mg/dl | 5 mmol/l of 90 mg/dl     |
| Maximum | 10 mmol/l of 180 mg/dl | 11,1 mmol/l of 200 mg/dl |

### Effect

Als de streefwaarde in je **Profiel** heel breed is (bijvoorbeeld 3 mmol/l of meer [50 mg/dl of meer] breed), zie je vaak weinig actie van **AAPS**. Dit komt doordat het **BG**-niveau ergens in dat brede bereik wordt voorspeld. Daardoor zal **AAPS** waarschijnlijk geen tijdelijke basaalstanden geven.

### Hoe stel je het in

De **afbeelding hieronder** toont een voorbeeld van hoe de streefwaarde in een **AAPS**-profiel kan worden ingesteld.

![Streefdoel](../images/Profile_Target.png)

De **BG**-streefwaarden stel je in naar je eigen voorkeuren en behoeften. Als je bijvoorbeeld bang bent voor hypo's in de nacht, kun je van 21:00 tot 07:00 uur je streefwaarde iets hoger zetten, op 117 mg/dl (6,5 mmol/l). Wil je zeker weten dat je 's ochtends genoeg insuline aan boord (IOB) hebt voordat je voor het ontbijt bolust, dan kun je van 7:00 tot 8:00 uur een lagere streefwaarde van 81 mg/dl (4,5 mmol/l) instellen.

In een [open loop](#KeyAapsFeatures-OpenLoop), vooral tijdens [de eerste doelen](../SettingUpAaps/CompletingTheObjectives.md), kan een breed streefbereik een goede keuze zijn terwijl je leert hoe **AAPS** werkt en je **Profiel** bijstelt.<br/> In een [gesloten loop](#KeyAapsFeatures-ClosedLoop) (vanaf **[Doel 6](#objectives-objective6)**) is het aan te raden het bereik kleiner te maken, tot je voor elk moment van de dag één streefwaarde hebt (_Lage_ streefwaarde = _Hoge_ streefwaarde). Zo reageert **AAPS** snel op schommelingen in de **BG**.

(your-aaps-profile-basal-rates)=

## Basaalstanden

### Beschrijving

Je basaalstand (eenheden/uur) zorgt voor achtergrondinsuline. Die houdt je glucosewaarden stabiel als je niet eet of sport.

De insulinepomp geeft om de paar minuten kleine hoeveelheden snelwerkende insuline. Zo voorkomt hij dat de lever te veel glucose afgeeft, en helpt hij glucose de lichaamscellen in. Basale insuline is meestal 40–50% van je totale dagelijkse dosis (TDD), afhankelijk van je voeding. De behoefte volgt meestal een dagritme (circadiaan ritme), met één piek en één dal in 24 uur. Voor meer informatie is hoofdstuk 6 van [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) van Gary Scheiner heel nuttig.

De meeste diabetesverpleegkundigen voor type 1 (en mensen met type 1 diabetes!) zijn het erover eens dat je eerst je basaalstanden goed moet krijgen, voordat je je ISF en ICR probeert te verbeteren.

### Effect

Met kloppende basaalstanden word je wakker binnen het bereik, en kun je maaltijden overslaan, of eerder of later op de dag eten, zonder hoog of laag te gaan.

Een te hoge basaalstand kan leiden tot lage BG-waarden. En andersom.

**AAPS** gebruikt de standaard basaalstand als basislijn. Als de basaalstand te hoog is, telt een ‘zero temp’ (tijdelijke basaal van 0) als een grotere negatieve IOB dan zou moeten. Daardoor geeft **AAPS** daarna meer correcties dan nodig om de IOB uiteindelijk naar nul te brengen.

Een te hoge basaalstand geeft dus lage **BG-waarden**, zowel door de standaard basaalstand zelf als enkele uren later, wanneer **AAPS** naar de streefwaarde corrigeert.

Omgekeerd kan een te lage basaalstand leiden tot hoge BG-waarden, en lukt het dan niet om de waarden naar de streefwaarde te brengen.

### Hoe stel je het in

De **afbeelding hieronder** toont een voorbeeld van hoe de basaalstanden in een **AAPS**-profiel kunnen worden ingesteld.

![Basaalstanden](../images/Profile_BasalRates.png)

Je basaalstanden goed instellen gaat met vallen en opstaan, en doe je in overleg met je diabetesteam.

Er zijn methoden om de basaal te testen. Daarbij kijk je meestal naar je basaalstanden en insulinebehoefte tijdens <u>periodiek</u> vasten verspreid over een periode van 24 uur. Je moet je basaalstanden voor de hele dag testen, maar het is niet aan te raden om 24 uur achter elkaar te vasten. Dit komt doordat het lichaam dan mechanismen zoals hormonen inzet om dit te compenseren. Een aanbevolen manier is om op 3 verschillende dagen 8 uur te vasten.

De aanbevolen methode is de loop te pauzeren (voor de veiligheid kun je AAPS op [**LGS**](#KeyAapsFeatures-LGS) zetten om lage waarden te voorkomen, zoals bij het halen van [doel 6](#objectives-objective6)). Dan gaat de pomp terug naar je standaard basaalstand. Kijk hoe je **BG** verandert: als die daalt, is de basaalstand te hoog. En andersom.<br/> Een andere methode (misschien lastiger) is de loop te laten draaien en te kijken hoe de **IOB** verandert. Als de **IOB** negatief is, is je basaalstand te hoog. En andersom. Let op: deze methode hangt af van de **ISF** om de **BG** te corrigeren. Andere waarden moeten dus redelijk goed zijn ingesteld om deze methode te laten werken.<br/> Een andere manier om je basaalstanden aan te passen is in de nacht te kijken wat de loop doet, als alle COB zijn opgenomen. Deze methode is vooral handig bij kinderen, als vasten moeilijk is of als de insulinebehoefte vaak verandert. [Dr. Saleh Adi van Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo) laat nuttige manieren zien om BG-lijnen in de nacht te analyseren, zodat je je basaalstanden kunt verbeteren.

Zie [hier](../GettingHelp/ProfileTuning.md) hoe je je basaalprofiel kunt bijstellen door patronen in de gesloten loop te analyseren.

Als je iets verandert op basis van je basaaltest, pas het **Profiel** dan 1 tot 2 uur (afhankelijk van je soort insuline) vóór de stijging/daling aan. Herhaal de test zo vaak als nodig, tot je tevreden bent met je instellingen voor de **basaalstanden**.

(your-aaps-profile-basal-not-compatible)=
#### Melding: "Basaalstand is niet compatibel met de huidige pomp"

Elke pomp heeft grenzen: een laagste en een hoogste basaalstand die hij kan geven. Bij sommige pompen (bijvoorbeeld Dana, Accu-Chek Combo, Medtronic en Diaconn G8) kan de basaalstand ook alleen op het hele uur veranderen. **AAPS** controleert je profiel tegen de pomp die je gebruikt, **nadat** het gekozen percentage is toegepast.

Als een basaalstand buiten deze grenzen valt, toont het scherm **Activeer** deze melding en blijft de knop **Activeer** grijs:

![Scherm Activeer met de melding "Basaalstand is niet compatibel met de huidige pomp"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

Bijvoorbeeld: met een basaalstand van 0,10 E/u in de nacht en een profielpercentage van 35% zou **AAPS** 0,035 E/u moeten geven. Dat is minder dan een Dana-pomp kan geven (0,04 E/u).

Om dit op te lossen kun je:

* een ander percentage kiezen: een **hoger** percentage als een basaalstand te laag wordt, een **lager** percentage als een basaalstand te hoog wordt, of
* [het profiel bewerken](#your-aaps-profile-create-and-edit-profiles) en de basaalstand aanpassen.

In de profieleditor kun je basaalstanden alleen op een heel uur laten beginnen. Een basaalstand die bijvoorbeeld om 06:30 begint, kan alleen uit een ouder profiel komen, bijvoorbeeld nadat je bent overgestapt op een pomp die dat niet ondersteunt.

(your-aaps-profile-insulin-sensitivity-factor)=

## Insulinegevoeligheidsfactor (ISF)

### Beschrijving

De insulinegevoeligheidsfactor (soms correctiefactor genoemd) geeft aan hoeveel je bloedglucose daalt door 1 eenheid insuline.

**In mg/dl:** Als je een **ISF** van 40 hebt, verlaagt elke eenheid insuline je bloedglucose met ongeveer 40 mg/dl (je bloedglucose daalt bijvoorbeeld van 140 mg/dl naar 100 mg/dl).

**In mmol/l:** Als je een **ISF** van 1,5 hebt, verlaagt elke eenheid insuline je bloedglucose met ongeveer 1,5 mmol/l (bijvoorbeeld van 8 mmol/l naar 6,5 mmol/l).

Uit deze voorbeelden zie je: hoe _kleiner_ de **ISF**-waarde, hoe minder gevoelig je bent voor insuline. Als je je ISF dus verlaagt van 40 naar 35 (mg/dl) of van 1,5 naar 1,3 (mmol/l), noemt men dat vaak je **ISF** sterker maken. Omgekeerd: als je de **ISF**-waarde verhoogt van 40 naar 45 (mg/dl) of van 1,5 naar 1,8 (mmol/l), maak je je **ISF** zwakker.

### Effect

A **lower / stronger ISF** (e.g. 40 instead of 50) means insulin drops your **BG** less per unit. Dit leidt tot een agressievere / sterkere correctie door de loop met **meer insuline**. Als je **ISF** te sterk is (kleine waarde), kan dit leiden tot een lage **BG**.

A **higher / weaker ISF** (e.g. 45 instead of 35) means insulin drops your **BG** more per unit. Dit leidt tot een minder agressieve / zwakkere correctie van de loop met **minder insuline**. Als je **ISF** te zwak is (grote waarde), kan dit leiden tot een hoge **BG**.

**Voorbeeld:**
* De **BG** is 190 mg/dl (10,5 mmol/l) en de streefwaarde is 100 mg/dl (5,6 mmol/l).
* Je wilt dus een correctie van `190 - 100 = 90 mg/dL` of `10.5 - 5.6 = 4.9 mmol/L`
* Als `ISF = 30` -> `90 / 30 = 3` of `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 eenheden insuline
* Als `ISF = 45` -> `90 / 45 = 2` of `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 eenheden insuline

Een **ISF** die te laag is (en dus agressiever, dit komt vaak voor) kan leiden tot ‘overcorrecties’, omdat **AAPS** berekent dat je meer insuline nodig hebt om een hoge **BG** te corrigeren dan echt nodig is. Dit kan leiden tot ‘achtbaan’-BG-waarden (vooral bij vasten), zoals te zien is op de afbeelding hieronder. In dat geval moet de **ISF**-waarde omhoog, zodat **AAPS** minder agressief wordt. Zo geeft **AAPS** kleinere correctiedoses en voorkom je dat een hoge **BG** te veel wordt gecorrigeerd en dan een lage **BG** geeft.

![ISF te laag](../images/isf.jpg)

Omgekeerd kan een te hoog ingestelde **ISF** leiden tot ondercorrecties. Je **BG** blijft dan boven de streefwaarde – vooral 's nachts goed te zien.

### Hoe stel je het in

Zie de **afbeelding hieronder** voor een voorbeeld van hoe ISF-waarden in een **AAPS**-profiel kunnen worden ingesteld.

![Profiel ISF](../images/Profile_ISF.png)

Een eenvoudig startpunt voor je ISF overdag is om die te baseren op je totale dagelijkse dosis (TDD) met de 1700-regel (94-regel voor mmol/l). Meer details staan in hoofdstuk 7 van [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) van Gary Scheiner.

| 1700 (als je in mg/dl meet) of 94 (mmol/l) / TDD = ongeveer de ISF.<br/><br/>Voorbeeld: TDD = 40 E<br/>ISF ongeveer (mg/dl) = 1700/40 = 43<br/>ISF ongeveer (mmol/l) = 94/40 = 2,4 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                            |

Als je basaalstanden kloppen, kun je dit testen: zet de loop in de pauzestand, controleer dat de **IOB** nul is en neem een paar druivensuikertabletten om op een stabiel ‘hoog’ niveau te komen.

Neem daarna een geschatte hoeveelheid insuline (volgens de huidige 1/ISF) om bij je BG-streefwaarde te komen.

Pas op, want deze waarde wordt vaak te laag ingesteld. Te laag betekent dat 1 E je BG sneller laat dalen dan verwacht.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Insuline-koolhydraatratio (ICR)

### Beschrijving

De **ICR** geeft aan hoeveel gram koolhydraten één eenheid insuline afdekt.

Sommige mensen gebruiken ook **I:C** als afkorting in plaats van **ICR**, of spreken van koolhydraatratio: **CR**.

Een insuline-koolhydraatratio van 1 op 10 (1:10) betekent bijvoorbeeld dat je 1 E insuline neemt voor elke 10 gram koolhydraten die je eet. Voor een maaltijd van 25 g koolhydraten heb je dan 2,5 E insuline nodig.

Als je **ICR** zwakker is (hogere waarde), bijvoorbeeld 1:20, heb je maar 0,5 E insuline nodig voor 10 g koolhydraten. Voor een maaltijd van 25 g koolhydraten heb je dan 25/20 = 1,25 E insuline nodig.

Het is normaal om op verschillende momenten van de dag een andere **ICR** te hebben, door hormonen en lichamelijke activiteit. Veel mensen hebben hun laagste/sterkste **ICR** rond het ontbijt, omdat ze dan vaak meer insulineresistent zijn. Een volwassene kan bijvoorbeeld een **ICR** hebben van 1:8 bij het ontbijt, 1:10 bij de lunch en 1:10 bij het avondeten. Maar dit patroon geldt niet voor iedereen: sommige mensen zijn 's avonds meer insulineresistent en hebben dan een sterkere/kleinere **ICR** nodig.

> **Opmerking:**
> 
> In sommige Europese landen werden broodeenheden gebruikt om te bepalen hoeveel insuline nodig is voor eten. In het begin was 1 broodeenheid gelijk aan 12 g koolhydraten, later gingen sommigen over op 10 g koolhydraten.
> 
> In dit model lag de hoeveelheid koolhydraten vast en was de hoeveelheid insuline variabel. ("Hoeveel insuline is nodig voor één broodeenheid?")
> 
> Bij de **ICR** ligt de hoeveelheid insuline vast en is de hoeveelheid koolhydraten variabel. ("Hoeveel gram koolhydraten kan iemand eten bij één eenheid insuline?")
> 
> Voorbeeld:
> 
> Broodeenheidfactor (BE = 12 g koolhydraten): 2,4 E/BE -> Je hebt 2,4 eenheden insuline nodig als je één broodeenheid eet.
> 
> Bijbehorende **ICR**: 12 g / 2,4 E = 5,0 g/E -> 5,0 g koolhydraten kan worden afgedekt met één eenheid insuline.
> 
> BE-factor 2,4 E / 12 g   ===>   IC = 12 g / 2,4 E = 5,0 g/E
> 
> Conversion tables are available online, e.g. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Effect

Een **lagere / sterkere ICR** betekent minder eten per eenheid, dus je krijgt meer insuline voor een vaste hoeveelheid koolhydraten. Kan ook ‘agressiever’ worden genoemd. Als je IC te sterk is, krijg je te veel insuline. Dit kan leiden tot lage **BG-waarden**.

Een **hogere / zwakkere ICR** = meer eten per eenheid, dus je krijgt minder insuline voor een vaste hoeveelheid koolhydraten. Kan ook ‘minder agressief’ worden genoemd. Als je IC te zwak is, krijg je minder insuline dan je nodig hebt. Dit kan leiden tot hoge **BG-waarden**.

### Hoe stel je het in

De **afbeelding hieronder** toont een voorbeeld van de **ICR** van een gebruiker en hoe die in een **AAPS-profiel** kan worden ingesteld. Bij het invullen van deze waarden vul je het laatste deel van de verhouding in. Een insuline-koolhydraatratio van 1:3,5 vul je dus gewoon in als “3,5”.

![Profiel ICR](../images/Profile_ICR.png)

Als je **BG** hoger blijft dan voor het eten, nadat een maaltijd is verteerd en de **IOB** weer nul is, is je **ICR** waarschijnlijk te zwak (_d.w.z._ het getal is te hoog en moet stap voor stap omlaag). Omgekeerd: als je **BG** lager is dan voor het eten, is de **ICR** te sterk (_d.w.z._ het getal is te klein en moet stap voor stap omhoog).

Als je basaalstanden kloppen, kun je dit testen: controleer dat de **IOB** nul is en dat je binnen het bereik zit, eet een precies bekende hoeveelheid koolhydraten en neem een geschatte hoeveelheid insuline op basis van je huidige insuline-koolhydraatratio. Het beste is om eten te eten dat je normaal op dat moment van de dag eet, en de koolhydraten precies te tellen.

## Veelgestelde vragen over het profiel

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### Waarom het belangrijk is dat je profiel klopt

**Waarom moet ik mijn profielinstellingen goed krijgen? Kan de loop dat niet gewoon regelen?**

Een hybride gesloten loop _kan_ proberen de insulinetoediening aan te passen om een slechte glucoseregeling door verkeerde waarden in het **Profiel** te beperken. Dat kan het bijvoorbeeld doen door geen insuline meer te geven als je naar een hypo gaat. Maar je krijgt een veel betere glucoseregeling als de instellingen van je **Profiel** al zo dicht mogelijk bij wat je lichaam nodig heeft liggen. Dit is een van de redenen dat **AAPS** doelen in stappen gebruikt om van een open loop met pomp naar een hybride gesloten loop te gaan. Daarnaast zijn er momenten waarop je de loop moet openen (opwarmen van de sensor, sensorstoring _enz._), soms midden in de nacht. Ook dan wil je dat je instellingen kloppen.

Als je met **AAPS** begint na een ander open of gesloten loopsysteem met pomp, heb je al een redelijk idee welke waarden je kunt gebruiken voor basaalstanden (**BR**), insulinegevoeligheidsfactoren (**ISF**) en insuline-koolhydraatratio's (**ICR**).

Als je overstapt van injecties (MDI) naar **AAPS**, is het goed om eerst te lezen hoe je de overstap van MDI naar een pomp maakt. Plan de overstap zorgvuldig en overleg met je diabetesteam. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) van John Walsh & Ruth Roberts en [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) van Gary Scheiner zijn heel nuttig.

### Wat veroorzaakt hoge pieken na de maaltijd in een gesloten loop?
Controleer eerst je basaalstand en doe een basaaltest zonder koolhydraten. Als die klopt en je **BG** daalt naar je streefwaarde nadat de koolhydraten helemaal zijn opgenomen, zet dan enige tijd voor de maaltijd een tijdelijk streefdoel 'binnenkort eten' in **AAPS**, of bespreek met je endocrinoloog een geschikte tijd voor een pre-bolus. <br/> Als je **BG** te hoog is na de maaltijd en nog steeds te hoog nadat de koolhydraten helemaal zijn opgenomen, overleg dan met je endocrinoloog om je **ICR** te verlagen. Als je **BG** te hoog is zolang er **COB** is, en te laag nadat de koolhydraten helemaal zijn opgenomen, overleg dan met je endocrinoloog over het verhogen van je **ICR** en over een geschikte tijd voor een pre-bolus.

### Mijn BG blijft hoog en de loop brengt hem niet omlaag
Mogelijke redenen waarom **AAPS** niet genoeg insuline geeft:
* **ISF** is niet sterk genoeg
* De basaalstand is misschien niet sterk genoeg
* Een veiligheidsinstelling kan ingrijpen, zoals **maxIOB**. Of **SMB** staat op dit moment uit, afhankelijk van je instellingen.
* Er is een automatisering ingesteld die **AAPS** heeft overschreven.

Zie ook [Je AAPS-profiel afstellen](../GettingHelp/ProfileTuning.md).

### Ik heb een negatieve IOB, is dat een probleem?
Negatieve **IOB** betekent dat de absolute hoeveelheid insuline (basaal + bolus) in je lichaam lager is dan de basaal. Daardoor geeft **AAPS** meer insuline zodra de **BG** begint te stijgen, omdat het denkt dat er insuline ontbreekt. Dit kan later een lage **BG** geven.

Hier zijn enkele redenen waarom je een negatieve IOB kunt hebben, en wat je dan moet doen:
* een te sterke basaal: pas je **Profiel** aan
* te veel bolus bij de vorige maaltijd: pas je **Profiel** aan of controleer of je op het juiste moment bolust.
* DIA te kort ingesteld voor je soort insuline, waardoor insuline zich opstapelt: pas dit aan in [Beheren → Insuline instellingen](#Config-Builder-insulin-dia)
* lichamelijke activiteit: gebruik de volgende keer tijdens de activiteit een lager [Profiel percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md), omdat je dan gevoeliger bent voor insuline.

## Je profielen beheren

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Profielen maken en bewerken

In **AAPS** v4 staan je profielen op het scherm **Beheren** (navigatie onderaan) → **Profiel**. Ze worden getoond als kaarten waar je doorheen kunt vegen, met een actiebalk (**➕ Toevoegen**, **✏️ Bewerk**, **⧉ Dupliceren**, **🗑️ Verwijderen**, **▶ Activeer**). Voor het beheren en activeren van een profiel, zie [Profielen beheren en activeren](#ProfileSwitch-manage-v4). Kom je van **AAPS** v3, waar profielen een eigen tabblad hadden? Zie [Wat is er veranderd in AAPS v4](#v4changes-manage).

Tik op **✏️ Bewerk** om de editor te openen. Stel de **naam** en de **eenheden** van het profiel in en vul dan de vier schema's in via de tabbladen:

- **KH-ratio** — insuline-koolhydraatratio (g/E)
- **ISF** — insulinegevoeligheidsfactor
- **BAS** — basaalstanden
- **DOEL** — streefbereik

![De profieleditor — tabbladen KH-ratio / ISF / BAS / DOEL](../images/setup-wizard/Wizard-Profile-IC.png)

Elk schema is een lijst van **tijdblokken**: voeg een blok toe, stel de begintijd en de waarde in en tik dan op **Opslaan**.

Als je iets verandert in je **Profiel**, let er dan op dat je het juiste **Profiel** bewerkt: de kaart van het profiel dat in gebruik is, is gemarkeerd met **ACTIEF**, maar de kaart die op het scherm is gekozen kan een ander profiel zijn.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Een profiel vanaf nul maken voor een kind

De [Profielhulp](#aaps-screens-profile-helper) (menu ☰ → **Profielhulp**) kan je helpen een profiel te maken voor een kind (tot 18 jaar).

**Belangrijke opmerking:**

**Profielhulp is bedoeld om je te helpen een eerste profiel voor je kind te vinden. Ook al is het gebaseerd op gegevens van twee verschillende ziekenhuizen: overleg altijd met je medische team voordat je een nieuw profiel gebruikt!**

Profielhulp biedt gegevens van twee verschillende ziekenhuizen voor kinderen om een eerste profiel te vinden voor je kind tot 18 jaar.

![Profielhulp kinderen 1](../images/ProfileHelperKids1.png)

1. Zorg dat je op het tabblad **Profiel 1** bent.
2. Zorg dat bij **Profieltype** "Basis profiel" is gekozen.
3. Pas het Basis profiel (gebaseerd op de gegevens van een ziekenhuis) aan door de leeftijd van je kind in te vullen en óf de TDD Totaal **óf** het gewicht.
4. Ga naar het tabblad **Profiel 2**.
5. Tik op **Profieltype** en kies "DPV Basis profiel".
6. Pas het DPV Basis profiel (gebaseerd op de gegevens van een ander ziekenhuis) aan door de leeftijd van je kind, de TDD Totaal en het percentage basaal in te vullen. Let op: de DPV-gegevens geven alleen **basaalstanden**. Daarom worden IC en ISF voor dit profiel als nul getoond.
7. Open the **Comparison** tab. Er wordt een vergelijking van de twee aangepaste profielen getoond (zie screenshot hieronder).
8. Als je je profiel wilt gaan bijstellen op basis van een van deze voorstellen, gebruik dan de knop **Dupliceren** onderaan de vergelijking.

![Profielhulp kinderen 2](../images/ProfileHelperKids2.png)

### Profiel wisselen

Zie [Profiel wissel & Profiel percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Een profiel wissel klonen naar een nieuw profiel

![Profiel wissel](../images/TreatmentsView4.png)

De [Behandelingen geschiedenis](#aaps-screens-treatments) toont alle eerdere **Profiel wisselingen**. Op het tabblad **Profiel wissel** kun je een eerdere **Profiel wissel** gebruiken als basis voor een nieuw **Profiel**. In dat geval worden de tijdverschuiving en het percentage toegepast op het nieuwe lokale profiel. Gebruik de knop **Dupliceren** op regel **2**.

Je kunt nu naar het [scherm Profiel](#your-aaps-profile-create-and-edit-profiles) (**Beheren → Profiel**) gaan om het nieuwe profiel te bewerken.

(YourAapsProfile_Profile-backup)=
### Back-up van het profiel

Je **Profielen** zijn een kerninstelling van je loopsysteem. Ze zijn erg gevoelig en je wilt ze zeker niet kwijtraken.

* Je **Profielen** worden opgeslagen in de database van **AAPS**.
* Als **NSClientV3** is ingesteld (zie [Synchronisatie](#SetupWizard-synchronization-with-the-reporting-server-and-more)), worden je **Profielen** ook automatisch naar Nightscout geüpload.
* Ze maken ook deel uit van de [geëxporteerde instellingen](../Maintenance/ExportImportSettings.md). Zorg dus dat je een back-up op een veilige plek hebt.

### Profielen bewerken vanuit Nightscout

Als dit is ingeschakeld, kan **AAPS** wijzigingen in het **Profiel** ontvangen die direct in Nightscout zijn gemaakt. De instelling heet "**Ontvang profielgegevens van NS**" en hoort bij de opties voor **Nightscout-gegevensacceptatie** (het accepteren van gegevens uit Nightscout staat standaard uit, zie de [stap Client besturing van de Setup Wizard](../SettingUpAaps/SetupWizard.md)). Je vindt de instelling snel met de **zoekbalk** op het hoofdscherm. Zolang client besturing aan staat, is deze instelling verborgen en neemt **AAPS** geen profielwijzigingen uit Nightscout over ([beveiligde modus](#client-master-control-hardened-mode)). Bewerk het profiel dan op een gekoppelde client, of laad het één keer met **Volledige synchronisatie**.

Dit kan handig zijn als je grote wijzigingen gaat maken in een uitgebreider **Profiel**. Ze zijn makkelijker in te voeren via de webinterface, _bijv._ om gegevens met de hand uit een spreadsheet over te nemen.

Hiervoor is het wel belangrijk om in de Nightscout-editor het hele **databaserecord** met meerdere profielen te klonen (blauwe pijl op de screenshot hieronder). De nieuwe databaserecords krijgen dan de huidige datum. Na het opslaan kun je het gewijzigde/nieuwe **Profiel** in **AAPS** activeren met een gewone [Profiel wissel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

![Databaserecords klonen](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Twee profielen vergelijken

Je kunt ook de [Profielhulp](#aaps-screens-profile-helper) (menu ☰ → **Profielhulp**) gebruiken om twee verschillende profielen of profiel wissels te vergelijken (een percentage van een van je profielen dat eerder in een [profiel wissel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) is gebruikt).

![Profielhulp 1](../images/ProfileHelper1.png)

1. Zorg dat je op het tabblad **Profiel 1** bent.
2. Kies bij **Profieltype** "Beschikbare profielen" om te kiezen uit alle opgeslagen **Profielen**.
3. Kies het **Profiel** waarmee je wilt vergelijken.
4. Ga naar het tabblad **Profiel 2**.
5. Kies bij **Profieltype** "Profiel wissel" om te kiezen uit de geschiedenis van al je **Profiel wisselingen**.
6. Kies de **Profiel wissel** waarmee je wilt vergelijken.
7. Open the **Comparison** tab. Er wordt een vergelijking van de twee profielen getoond (zie screenshot hieronder).

![Profielhulp 2](../images/ProfileHelper2.png)
