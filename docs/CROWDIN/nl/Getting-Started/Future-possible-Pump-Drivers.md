# Mogelijk toekomstige insulinepompen

Dit is een lijst van verschillende insulinepompen, en of ze geschikt zijn voor één van de beschikbare doe-het-zelf closed loop systemen (AndroidAPS, OpenAPS of Loop). Op het einde van deze pagina staat algemene info over welke software-mogelijkheden een pomp moet beschikken om überhaupt "loopbaar" te kunnen zijn.

## Pompen waaraan wordt gewerkt

### Insulet Omnipod (with "old" Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy voor AndroidAPS (stabiel in tests, vereist Raspberry Pi en RileyLink, en een speciale versie van AndroidAPS. Enkele tientalen mensen gebruiken dit al in het dagelijks leven.) Lees meer op Omnipy 
- OmniCore voor AndroidAPS (nog niet vrijgegeven, is geschreven in C# programmeertaal die "native" op Android draait. Heeft alleen een RileyLink nodig en een speciale versie van AndroidAPS. NB: dit is de opvolger van het Omnipy project).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stabiel, released, vereist RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version was released in January 2020, and work is beeing done towards stabilization. Current version 0.3 (March)

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## 

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions. It seems that we will get loopable version in begining of 2021, see this [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Het lijkt erop dat hij Bluetooth gebruikt.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](https://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Het lijkt erop dat hij Bluetooth gebruikt.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pompen die niet meer worden verkocht (fabrikanten zijn gestopt)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware eisen voor AAPS:** Waarschijnlijk geen. Want gebruikt Bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompen die niet loopbaar zijn

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

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
- Lees geschiedenis uit
- Lees TDD uit

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).