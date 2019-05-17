# Mogelijk toekomstige insulinepompen

Dit is een lijst van verschillende insulinepompen, en of ze geschikt zijn voor één van de beschikbare doe-het-zelf closed loop systemen (AndroidAPS, OpenAPS of Loop). Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

## Pompen waaraan wordt gewerkt

### Medtronic

**Status:** Sommige oudere versies van Medtronic pompen worden op dit moment gebruikt om mee te loopen. De nieuwere modellen zijn NIET geschikt (zie kopje "Loopbare versies" verderop)

**OpenAPS, Loop:** Ja, geschikt (zie kopje "Loopbare versies" verderop)

**Java implementaties:** Gedeeltelijk beschikbaar [Rountrip2](https://github.com/TC2013/Roundtrip2), en [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementatie status:** Werk in uitvoering. Zie [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Het meeste werk is gedaan op [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) om het framework en de commando's werkend te krijgen. Er is project (Medtronic) en tickets zijn geopend voor toekomstige ontwikkeling op die repository, ontwikkeling wordt gedaan op branch dev_medtronic (die daar de standaard branch is). Er is ook een gitter foom: RileyLinkAAPS/Lobby. AAPS. 0.7 test "release" is uit, waarin zo'n 80% van alle functies al werkend zijn, wat alleen nog ontbreekt is een analyse van de pompgeschiedenis om de pompstatus te kunnen bepalen en om te kunnen bevestigen dat behandelingen zijn uitgevoerd of om nieuwe behandelingen te importeren. Voor details en timing zie [Andy's projectbord](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware eisen voor AAPS:** RileyLink (elke versie, zolang hij een 916MHz antenne heeft) + Android telefoon met Bluetooth

**Loopbare versies:** 512-522, 523 (Firmware 2.4A of lager), 554 (EU firmware 2.6A of lager, Canada firmware 2.7A of lager). Hetzelfde geldt voor 7xx versies. Alle andere versies worden nu niet ondersteund, en worden dat in de toekomst waarschijnlijk ook niet.

* * *

### Omnipod Eros ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Status:** (Opmerking: de Omnipod Eros is de huidige versie) Deze wordt beperkt ondersteund op dit moment.

**OpenAPS, Loop:** In Loop is de Omnipod beschikbaar voor testen door een breed publiek. Dat is de allerlaatste fase in het ontwikkelproces, er is ook al documentatie beschikbaar zodat beginners er ook mee aan de slag kunnen. Je hebt een Rileylink nodig (versie 2.x en 433MHz antenne) voor de communicatie tussen iPhone en pod. Een PDM heb je niet nodig. Zie loopdocs.org voor alle verdere informatie.

**Java implementaties:** Wordt aan gewerkt...

**AAPS implementatie status:** Wordt aan gewerkt, op twee manieren. Voor de eerste, waarbij alleen een Rileylink nodig is voor de communicatie tussen Android telefoon en pod: zie [RileyLinkAAPS voor Omnipod](https://github.com/ktomy/RileyLinkAAPS) (dev_omnipod branch). Er is hiervan nog geen volledig werkend prototype beschikbaar (de ontwikkelaar heeft de nodige wijzigingen voltooid voor Rileylink firmware 2.0, en is begonnen met het verzenden van opdrachten naar de pomp). Je kunt de voortgang volgen op https://omniaps.slack.com/ in kanaal 'android-driver'. De tweede manier is gemaakt door een andere gebruiker die wel al een werkend prototype heeft. Dit prototype heeft naast een Rileylink ook nog een Raspberry Pi nodig voor communicatie tussen Android telefoon en pod. Deze versie wordt inmiddels door een groeiend groepje mensen gebruikt. Wel is deze versie nog niet helemaal uitontwikkeld, daarom is er in de rest van deze wiki ook nog niets over beschreven. Elders zijn er wel instructies beschikbaar voor mensen die willen starten, op https://github.com/winemug kun je alle informatie vinden.

**Hardware eisen voor AAPS:** Wanneer het helemaal uitontwikkeld gaat zijn, heb je een RileyLink (versie 2.x en 433 MHz antenne) + Android telefoon met Bluetooth nodig.

## 

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Status:** (Opmerking: Omnipod DASH is een nieuwe versie van de Omnipod, hij is in sommige landen al verkrijgbaar.) Wordt momenteel niet ondersteund. De DASH is een Loop-kandidaat, maar het communicatie-protocol van deze nieuwe pomp is momenteel onbekend. De pomp is op dit moment op beperkte schaal verkrijgbaar in de VS (voor Nederland is nog niet bekend wanneer).

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Opmerkingen:** Er is momenteel geen concreet plan om met de Omnipod DASH aan de slag te gaan. Zodra we een java-implementatie hebben voor Omnipod Eros, zullen we die implementatie gebruiken als startpunt. Als het Omnipod Eros communicatie-protocol niet gewijzigd is, kunnen we misschien een paar maanden later een implementatie hebben, maar als het protocol is veranderd, kan het enige tijd duren.

* * *

### Ypsomed Pomp ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Status:** Versie 1 - 1.5 (Q2/2018) zijn geen Loop kandidaten. Hoewel ze wel Bluetooth-communicatie hebben, lijkt het erop dat de communicatie zeer beperkt is (éénrichtingsverkeer: Pomp->App). Misschien zal dit in volgende versies veranderen.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Status:** Momenteel niet ondersteund. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Status:** Is een Loop kandidaat. Bedrijf heeft zijn eigen beperkte half-Loop systeem (A6). Besturing dmv een iPhone App. Geen Android app beschikbaar op dit moment.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Status:** Is een Loop kandidaat. De afstandsbediening die ze gebruiken is feitelijk een aangepast Android-apparaat. (Pomp is momenteel alleen beschikbaar in Korea).

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Status:** Is een Loop kandidaat. Pump is vanaf eind 2018 in een beperkt aantal EU landen beschikbaar. Er gaan geruchten dat hij wordt aangestuurd met een Android app.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

## Pompen die niet meer worden verkocht (fabrikanten zijn gestopt)

### Cellnovo Pomp ([Homepage](https://www.cellnovo.com/en/homepage))

**Status:** Momenteel niet ondersteund. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Opmerking over product:** Het lijkt erop dat het bedrijf heeft besloten de insulinepomp industrie te verlaten. Je kunt meer lezen in dit [artikel](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompen die niet loopbaar zijn

### Tandem:(elk type) ([Homepage](https://www.tandemdiabetes.com/))

**Status:** Niet loopbaar.

Voorheen gebruikten ze firmware die T:AP heette (genoemd in dit [artikel](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)), dat in een loop gebruikt zou kunnen worden. Maar die firmware is niet meer beschikbaar, omdat de pomp is overgegaan naar x2. De T:AP firmware was overigens niet bedoeld voor commercieel gebruik, alleen voor experimenteel gebruik (onderzoeksprojecten). Ik heb met een van de directeuren van het bedrijf gesproken en hij heeft mij verzekerd dat Tandem pump nooit open zal zijn, maar ze hebben hun eigen closed loop-systeem gecreëerd, dat ze Control-IQ noemen (ik denk dat het al beschikbaar is in de VS en dat het in 2020 in de EU beschikbaar zou komen).

* * *

### Animas Vibe

**Status:** Niet loopbaar. Is niet op afstand bedienbaar. **Opmerking:** Deze pomp wordt niet meer verkocht. Bedrijf is gestopt met alle insulinepomp activiteiten (J&J).

* * *

### Animas Ping

**Status:** Niet loopbaar. Heeft bolus mogelijkheid, maar geen TBR mogelijkheid. **Opmerking** Werd sinds komst van de Vibe niet meer verkocht. En bedrijf is gestopt met alle insulinepomp activiteiten (J&J).

## Eisen aan pompen die loopbaar zijn

**Voorwaarden**

- Pump moet op één of andere manier op afstand bedienbaar zijn. (Bluetooth, radiofrequentie, etc)
- Communicatie-protocol is gehackt/gedocumenteerd/etc.

**Minimale vereisten**

- Heeft een mogelijkheid voor het instellen van Tijdelijke Basaalstanden
- De Pompstatus kan worden uitgelezen
- Heeft een mogelijkheid voor het annuleren van Tijdelijke Basaalstanden

**Voor oref1(SMB) of Bolussen:**

- Bolus kunnen instellen

**Fijn om te hebben**

- Annuleer Bolus
- Lees Basaalprofiel uit (is haast een vereiste)
- Stel Basaalprofiel in (leuk om te hebben)
- Lees geschiedenis uit 

**Overige (niet verplicht maar goed om te hebben)**

- Vertraagde bolus instellen
- Vertraagde bolus annuleren
- TDD (totale dag dosis) uitlezen
- 

* * *

### Ondersteuning overige pompen

Als je andere pompen hebt waarvan je wilt weten wat de status is, neem dan contact met mij op (@andyrozman op gitter). In toekomstige releases zullen een heleboel pomp configuraties worden toegevoegd aan de opties voor open loop (Je kunt die pompen dan kiezen in AAPS als Virtuele pomp en jouw instellingen worden geladen, zie [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).