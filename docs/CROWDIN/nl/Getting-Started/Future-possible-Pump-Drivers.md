# Mogelijk toekomstige insulinepompen

Dit is een lijst van verschillende insulinepompen, en of ze geschikt zijn voor één van de beschikbare doe-het-zelf closed loop systemen (AndroidAPS, OpenAPS of Loop). Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

## 

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Status:** Wordt momenteel niet ondersteund door doe-het-zelf closed loop systemen. De DASH is een Loop-kandidaat, maar het communicatie-protocol van deze nieuwe pomp is momenteel onbekend. De verkoop van de DASH is officieel in januari 2019 gestart in Amerika. In Nederland is hij sinds december 2019 verkrijgbaar. In Belgie komt hij in 2021.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Opmerking:** De ontwikkelaars kijken naar de mogelijkheden om de Omnipod DASH ook voor doe-het-zelf systemen te gebruiken. Er zal worden gekeken om de officiële Dash APK te 'reverse engineeren', om zo te bepalen hoe de communicatie werkt. Op basis van die bevindingen zal het pad voorwaarts worden bepaald. Je kunt hier volgen wat de status is: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), maar verwacht niet dat dit binnenkort beschikbaar zal zijn. Op dit moment is er alleen maar een 'Proof Of Concept' (totdat Milestone 2 is voltooid).

* * *

### Ypsomed Pomp ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Status:** Versie 1 - 1.5 (Q2/2018) zijn geen Loop kandidaten. Hoewel ze wel Bluetooth-communicatie hebben, lijkt het erop dat de communicatie zeer beperkt is (éénrichtingsverkeer: Pomp->App). Bedrijf is van plan de pomp uit te breiden zodat er bolussen kunnen worden verstuurd naar de pomp (update gepland voor eind 2021) en later zullen ze andere functies toevoegen die nodig zijn om een Loop te maken. Hun officiële app zal dat in de toekomst ondersteunen (gepland voor 2022, geen exacte datum bekend). Omdat ze van plan zijn hun eigen Loop systeem te maken, zie deze [pagina](https://www.mylife-diabetescare.com/en/loop-program.html), zullen ze geen ondersteuning bieden aan ontwikkelaars van een doe-het-zelf loop, op dit moment tenminste.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Status:** Wordt momenteel niet ondersteund door doe-het-zelf closed loop systemen. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

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

**Status:** Is een Loop kandidaat. Pump zal eind 2018 in een beperkt aantal EU landen verkocht gaan worden. Er gaan geruchten dat hij kan worden bediend via een Android-app op speciale daarvoor aangepaste device.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

### Medtronic Bluetooth

**Opmerking:** Dit is de pomp waaraan Medtronic de komende jaren zal werken en die zal kunnen worden gebruikt met Tidepool Loop software ([zie dit artikel](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

### Willcare insulinepomp ([Homepage](http://en.shinmyungmedi.com))

**Status:** Op dit moment niet geschikt om mee te loopen, maar we werden benaderd door hen en ze hebben interesse getoond om de pomp aan te passen zodat hij loopbaar wordt. Het lijkt erop dat op dit moment alleen nog commando's voor het uitlezen/instellen van het profiel ontbreken.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

**Opmerking:** Aangezien het bedrijf is geïnteresseerd in integratie met AAPS, kunnen ze het wellicht zelf implementeren.

* * *

## Pompen die niet meer worden verkocht (fabrikanten zijn gestopt)

### Cellnovo Pomp ([zie businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Status:** Wordt momenteel niet ondersteund door doe-het-zelf closed loop systemen. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Opmerking over product:** Het lijkt erop dat het bedrijf heeft besloten de insulinepomp industrie te verlaten. Je kunt meer lezen in dit [artikel](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompen die niet loopbaar zijn

### Tandem:(elk type) ([Homepage](https://www.tandemdiabetes.com/))

**Status:** Niet loopbaar.

Voorheen gebruikten ze firmware die T:AP heette (genoemd in dit [artikel](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)), dat in een loop gebruikt zou kunnen worden. Maar die firmware is niet meer beschikbaar, omdat de pomp is overgegaan naar x2. De T:AP firmware was overigens niet bedoeld voor commercieel gebruik, alleen voor experimenteel gebruik (onderzoeksprojecten). Ik heb met een van de directeuren van het bedrijf gesproken en hij heeft mij verzekerd dat de Tandem pomp door hen nooit openlijk beschikbaar wordt gemaakt voor doe-het-zelf. Ze hebben wel hun eigen closed loop-systeem gecreëerd, dat ze Control-IQ noemen (ik denk dat het al beschikbaar is in de VS en dat het in 2020 in de EU beschikbaar zou komen).

* * *

### Animas Vibe

**Status:** Niet loopbaar. Is niet op afstand bedienbaar. **Opmerking:** Deze pomp wordt niet meer verkocht. Bedrijf is gestopt met alle insulinepomp activiteiten (J&J).

* * *

### Animas Ping

**Status:** Niet loopbaar. Heeft bolus mogelijkheid, maar geen TBR mogelijkheid. **Opmerking** Werd sinds komst van de Vibe niet meer verkocht. En bedrijf is gestopt met alle insulinepomp activiteiten (J&J).

## Eisen aan pompen die loopbaar zijn

**Voorwaarden**

- Pomp moet op één of andere manier op afstand bedienbaar zijn. (Bluetooth, radiofrequentie, etc)
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
- Lees geschiedenis uit
- 

* * *

### Ondersteuning overige pompen

Als je andere pompen hebt waarvan je wilt weten wat de status is, neem dan contact met mij op (@andyrozman op gitter). In toekomstige releases zullen een heleboel pomp configuraties worden toegevoegd aan de opties voor open loop (Je kunt die pompen dan kiezen in AAPS als Virtuele pomp en jouw instellingen worden geladen, zie [Feature request #157](https://github.com/nightscout/AndroidAPS/issues/157)).