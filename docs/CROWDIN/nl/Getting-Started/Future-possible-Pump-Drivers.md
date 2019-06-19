# Mogelijk toekomstige insulinepompen

Dit is een lijst van verschillende insulinepompen, en of ze geschikt zijn voor één van de beschikbare doe-het-zelf closed loop systemen (AndroidAPS, OpenAPS of Loop). Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

## Pompen waaraan wordt gewerkt

### Medtronic

**Status:** Sommige oudere versies van Medtronic pompen zijn geschikt om mee te loopen. Met andere systemen gebeurt dit al volop. Aan AndroidAPS wordt gewerkt. Nieuwere Medtronic modellen zijn NIET geschikt (zie kopje "Loopbare versies" verderop)

**Andere systemen:** Oudere modellen zijn al jaren geschikt voor OpenAPS en Loop. Over beide systemen is via Google een hoop informatie te vinden.

**Java implementaties:** Gedeeltelijk beschikbaar [Rountrip2](https://github.com/TC2013/Roundtrip2), en [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementatie status:** Werk in uitvoering. Zie [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Het meeste werk is gedaan op [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) om het framework en de commando's werkend te krijgen. Er is project (Medtronic) en tickets zijn geopend voor toekomstige ontwikkeling op die repository, ontwikkeling wordt gedaan op branch dev_medtronic (die daar de standaard branch is). Er is ook een gitter foom: RileyLinkAAPS/Lobby. AAPS. 0.10 test "release" is out, with about 95% of all functionality, at the moment what is missing is synhronization of TBRs and Pump "Delivery stopped" events. Project will probably be merged to main repository by end of July 2019. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware eisen voor AAPS:** RileyLink (met 916MHz antenne) + Android telefoon met Bluetooth

**Loopbare versies:** 512-522, 523 (Firmware 2.4A of lager), 554 (EU firmware 2.6A of lager, Canada firmware 2.7A of lager). Hetzelfde geldt voor 7xx versies. Alle andere versies worden nu niet ondersteund, en worden dat in de toekomst waarschijnlijk ook niet.

* * *

### Insulet Omnipod (with old Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Status:** (Opmerking: de Omnipod Eros is de huidige versie pods) Op dit moment nog niet ondersteund door de master-versie van AAPS. Daar wordt wel al een tijd aan gewerkt. Het Omnipod communicatieprotocol is al gedecodeerd, zie [OpenOmni](http://www.openomni.org/) en [OmniAPS Slack](https://omniaps.slack.com/). De Eros pods kunnen nu al worden gebruikt met andere systemen (zie hieronder), de precieze status voor AAPS lees je ook verderop (zie AAPS status).

**Other implementations:**

- Omnipy for AndroidAPS (stable in testing, requires Raspberry Pi as well as RileyLink, and specially modified AndroidAPS) [Omnipy](https://github.com/winemug/omnipy)
- OmniCore for AndroidAPS (not release yet, C# code running "natively" on Android, requires only RileyLink and specially modified AndroidAPS - next version of Omnipy project). [OmniCore](https://github.com/winemug/OmniCore)
- Loop (stable, released, requires RileyLink). [Loop](https://loopkit.github.io/loopdocs/)



**AAPS implementation status:** Work has started on [RileyLinkAAPS](https://github.com/bartsopers/RileyLinkAAPS/) for Omnipod (dev_omnipod branch) which will not require a Raspberry Pi, but this is not finished. Je kunt de voortgang volgen op https://omniaps.slack.com/ in kanaal 'android-driver'.

**Hardware eisen voor AAPS:** RileyLink (versie 2.x) met 433MHz antenne.

## 

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Status:** (Opmerking: Omnipod DASH is een nieuwe versie van de Omnipod, hij is in sommige landen al verkrijgbaar.) Wordt momenteel niet ondersteund. De DASH is een Loop-kandidaat, maar het communicatie-protocol van deze nieuwe pomp is momenteel onbekend. Selling of pump officially started in January 2019.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

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

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pompen die niet meer worden verkocht (fabrikanten zijn gestopt)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Status:** (Opmerking: Omnipod DASH is een nieuwe versie van de Omnipod, hij is in sommige landen al verkrijgbaar.) Wordt momenteel niet ondersteund. De pomp is een Loop-kandidaat, maar aangezien het communicatie-protocol op dit moment onbekend is, zie ik het niet snel gebeuren dat deze pomp wordt ondersteund.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompen die niet loopbaar zijn

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Status:** Niet loopbaar.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Status:** Niet loopbaar. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Status:** Niet loopbaar. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Eisen aan pompen die loopbaar zijn

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**Minimal requirement**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).