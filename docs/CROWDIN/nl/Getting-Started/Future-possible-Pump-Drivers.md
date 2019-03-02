# Mogelijk toekomstige insulinepompen

Dit is een lijst van verschillende insulinepompen, en of ze geschikt zijn voor één van de beschikbare doe-het-zelf closed loop systemen (AndroidAPS, OpenAPS of Loop). Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

## Pompen waaraan wordt gewerkt

### Accu-Chek Insight ([Homepage](https://www.accu-chek.co.uk/insulin-pumps/insight))

**Status:** Al een heel eind op weg, ervaren gebruikers zijn al in de laatste testfase met deze pomp.

**Loop, OpenAPS:** Nee

**Java implementaties:** Onder ontwikkeling

**AAPS implementatie status:** Verwachting (ja, verwachting!) is dat deze pomp binnen enkele weken gereed is voor AndroidAPS

**Hardware eisen voor AAPS:** Android telefoon met Bluetooth

**Loopbare pompversies:** alle

* * *

### Medtronic

**Status:** Sommige oudere versies van Medtronic pompen worden op dit moment gebruikt om mee te loopen. De nieuwere modellen zijn NIET geschikt (zie kopje "Loopbare versies" verderop)

**OpenAPS, Loop:** Ja, geschikt (zie kopje "Loopbare versies" verderop)

**Java implementaties:** Gedeeltelijk beschikbaar [Rountrip2](https://github.com/TC2013/Roundtrip2), en [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Work in progress. Zie [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Het meeste werk is gedaan op [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) om het framework en de commando's werkend te krijgen. Er is project (Medtronic) en tickets zijn geopend voor toekomstige ontwikkeling op die repository, ontwikkeling wordt gedaan op branch dev_medtronic (die daar de standaard branch is). Er is ook een gitter foom: RileyLinkAAPS/Lobby. AAPS. 0.7 test "release" is out, with about 80% of all functionality, missing is only History analysis to determine state of the pump and to confirm that Treatments were or to import new treatments. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware eisen voor AAPS:** RileyLink (elke versie) + Android telefoon met Bluetooth

**Loopbare versies:** 512-522, 523 (Firmware 2.4A of lager), 554 (EU firmware 2.6A of lager, Canada firmware 2.7A of lager). Hetzelfde geldt voor 7xx versies. Alle andere versies worden nu niet ondersteund, en worden dat in de toekomst waarschijnlijk ook niet.

* * *

### Omnipod Eros ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Status:** (Opmerking: de Omnipod Eros is de huidige versie) Deze wordt nog niet ondersteund op dit moment, maar het decoderen van het Omnipod protocol is grotendeels voltooid, zie [OpenOmni](http://www.openomni.org/) en [OmniAPS Slack](https://omniaps.slack.com/)

**OpenAPS, Loop:** Loop implementatie is in de beginfase; voor zover ik weet zijn ze erin geslaagd de pod te Initiëren en de eerste TBR te sturen. Zie [Openomni op github](https://github.com/openaps/openomni)

**Java implementaties:** Tot nu toe nog geen.

**AAPS implementatie status:** Werk is gestart op [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) voor Omnipod (dev_omnipod branch), maar het is nog geen helemaal werkend prototype (de ontwikkelaar heeft denodige wijzigingen voltooid voor RL firmware 2.0, en is begonnen met het verzenden van opdrachten naar de pomp). Je kunt de voortgang volgen op https://omniaps.slack.com/ in kanaal 'android-driver'. De ontwikkelaar houdt daar de vooruitgang bij. Een andere gebruiker heeft een prototype voor zijn zoon gemaakt, op dit moment is die nog niet ver genoeg om voor een groter publiek te testen. Op https://github.com/winemug kun je meer lezen.

**Hardware eisen voor AAPS:** RileyLink (versie 2.x) + Android telefoon met Bluetooth

## 

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Status:** (Opmerking: Omnipod DASH is een nieuwe versie van de Omnipod, hij is in sommige landen al verkrijgbaar.) Wordt momenteel niet ondersteund. De DASH is een Loop-kandidaat, maar het communicatie-protocol van deze nieuwe pomp is momenteel onbekend. 

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Opmerkingen:** Er is momenteel geen concreet plan om met de Omnipod DASH aan de slag te gaan. Zodra we een java-implementatie hebben voor Omnipod Eros, zullen we die implementatie gebruiken als startpunt. Als het Omnipod Eros communicatie-protocol niet gewijzigd is, kunnen we misschien een paar maanden later een implementatie hebben, maar als het protocol is veranderd, kan het enige tijd duren.

* * *

### Ypsomed Pomp ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Status:** Versie 1 - 1.5 (Q2/2018) zijn geen Loop kandidaten. Hoewel ze wel Bluetooth-communicatie hebben, lijkt het erop dat de communicatie zeer beperkt is (éénrichtingsverkeer: Pomp->App). Misschien zal dit in volgende versies veranderen.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Cellnovo Pomp ([Homepage](https://www.cellnovo.com/en/homepage))

**Status:** Momenteel niet ondersteund. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Status:** Is een Loop kandidaat. Bedrijf heeft zijn eigen beperkte half-Loop systeem (A6). Besturing dmv een iPhone App. Geen Android app beschikbaar op dit moment.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Status:** Is een Loop kandidaat. De externe controle die ze gebruiken is feitelijk een aangepast Android-apparaat. (Pomp is momenteel alleen beschikbaar in Korea).

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Status:** Is een Loop kandidaat. Pump zal eind 2018 in een beperkt aantal EU landen verkocht gaan worden. Er gaan geruchten dat hij wordt aangestuurd met een Android app.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### Tandem t:AP

**Status:** Is een Loop kandidaat.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

**NOTE:** This pump was mentioned in following [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), but I am not sure, if this is just t:slim with modified Firmware, or is this a new pump. So far I go no confirmation either way from writer of article, or from Tandem itself.

## Pompen die niet loopbaar zijn

### Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable (I am not 100% sure about this info), but they are planning to release different pump that will have remote control (at least bolus).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Eisen aan pompen die loopbaar zijn

**Prerequisite**

- Pump moet op één of andere manier op afstand bedienbaar zijn. (Bluetooth, radiofrequentie, etc)
- Communicatie-protocol is gehackt/gedocumenteerd/etc.

**Minimal requirement**

- Heeft een mogelijkheid voor het instellen van Tijdelijke Basaalstanden
- De Pompstatus kan worden uitgelezen
- Heeft een mogelijkheid voor het annuleren van Tijdelijke Basaalstanden

**For oref1(SMB) or Bolusing:**

- Bolus kunnen instellen

**Good to have**

- Annuleer Bolus
- Lees Basaalprofiel uit (is haast een vereiste)
- Stel Basaalprofiel in (leuk om te hebben)
- Lees geschiedenis uit 

**Other (not required but good to have)**

- Vertraagde bolus instellen
- Vertraagde bolus annuleren
- TDD (totale dag dosis) uitlezen
- 

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).