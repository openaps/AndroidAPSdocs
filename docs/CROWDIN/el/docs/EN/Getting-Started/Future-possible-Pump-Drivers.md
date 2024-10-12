# Μελλοντικοί (πιθανοί) οδηγοί αντλιών

Αυτή είναι μια λίστα με ορισμένες Αντλίες που επιπλέουν γύρω από αυτό, και την κατάσταση υποστήριξης γι 'αυτούς σε οποιοδήποτε από τα συστήματα κυκλώματος και στη συνέχεια την κατάσταση στο AAPS. Στο τέλος υπάρχουν κάποιες πληροφορίες, τι απαιτείται για να είναι μια αντλία "ικανή για κύκλωμα".

## Αντλίες που είναι για κύκλωμα

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, communication is very limited and uni directional: Pump->App. In June 2022 (in Germany) company released, new version nicknamed DOSE (1.6), which allows setting bolus and TBR from their App. Plan to implement their own Loop was cancelled and they decided to partner up with CamAPS (support already implemented) and use their loop solution. More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. It's BT enabled.

**Comments:** Dose version of pump had very heavy encryption added, so there is big probababilty that this pump won't be supported by AAPS in near future (or ever). We had developer working with Ypsomed and helping with medical trials, so maybe his version of driver will be alowed to be released, but this is just small possibility of that. You can find more information on our discord in channel "ypsopump-talk".

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

* * *

### Equil (pump from Aidex/GlucoRx/MicroTechMD) ([Homepage](https://www.glucorx.ie/glucorx-equil/))

**Loop status:** Is a Loop candidate.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comment:** Some people started looking into supporting pump in AAPS, but this is still in beginning phases. You can find more information on our discord in channel "equil".

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

* * *

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

* * *

### Tandem: t:Mobi & t:slim X3 & t:Mobi Tubeless ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** All 3 pumps will be Loop candidates.

They plan to release t:Mobi first (previously called t:sport) at end of 2022 or in 2023. Afterwards they will release t:slim X3 (2023 maybe) and after that t:Mobi Tubeless. t:mobi's will be controlable only over phone app, while X3 will look similar as X2, with some new nifty features (remote update of firmware, remote control over phone app, etc).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Αντλίες που δεν είναι για κύκλωμα

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Απαιτήσεις αντλιών για να είναι συμβατές με κύκλωμα

**Prerequisite**

- Η αντλία πρέπει να υποστηρίζει κάποιο είδος τηλεχειρισμού. (BT, Radio frequency, etc)
- Το πρωτόκολλο παραβιάζεται / τεκμηριώνεται / κλπ.

**Minimal requirement**

- Ορισμός συχνότητας προσωρινού βασικού ρυθμού
- Get Status
- Ακύρωση συχνότητας προσωρινού βασικού ρυθμού

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Ακύρωση του Bolus
- Αποκτήστε βασικό προφίλ (σχεδόν απαραίτητο)
- Ορίστε βασικό προφίλ (ωραίο να έχετε)
- Διαβάστε το Ιστορικό 

**Other (not required but good to have)**

- Ορίστε εκτεταμένο bolus
- Cancel Extended Bolus
- Διαβάστε το Ιστορικό
- Read TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.