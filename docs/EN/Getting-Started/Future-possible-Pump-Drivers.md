# Future (possible) Pump Drivers

This is list of some Pumps floating around there, and status of support for them in any of Looping systems and then status in AAPS. On end there is some info, what is required for a pump to be "Loop capable".

## Pumps that are Loopable

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, communication is very limited and uni directional: Pump->App. By end of 2021, it is planned that company will release, new version nicknamed DOSE (1.6), which will allow setting bolus and TBR from their App. They plan to implement their own Loop in 2022, with their own application.
More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. It's BT enabled.

**Comments:** There are currently 2 groups working on driver, so after new version is released, we can expect to have AAPS support soon thereafter. One group is being supported by YpsoMed and helping with Medical trials that are happening in Australia, 2nd is working independently by reverse engineering original app. 

### Kaleido ([Homepage](https://www.hellokaleido.com/)) 

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.  

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/product/nanopump.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controllable via iPhone App. No Android app available at the moment.

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. 

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** There are some developers looking into decoding the protocol, but so far this is only in preliminary phases.

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not yet loopable.

While in the past company has decided not to allow their pumps to be controlled by external devices, it seems that last few years have been a game changer. Company decided to upgrade their t:slim X2 pump to be able to be controlled remotely (via t:connect app), which means that avenues are opened that we might be able to look forward to have control of pump via AAPS in the future. New pump firmware is planned to be released soon (this or next year, before their tubeless pump t:sport comes out). There are no details yet, what operations will be possible from t:connect (Bolus definitely, everything else unknown).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Is a Loop candidate. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US). 

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software
 ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).


### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands). 

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations)) 

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon. 

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)


## Pumps that aren't Loopable

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. 
**Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. 
**Note** Stopped being sold when Vibe came out.

## Requirements for pumps being loopable

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

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.
