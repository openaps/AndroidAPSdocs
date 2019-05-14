# Future (possible) Pump Drivers

This is list of some Pumps floating around there, and status of support for them in any of Looping systems and then status in AAPS. On end there is some info, what is required for a pump to be "Loop capable".

## Pumps whose support is in development

### Medtronic

**Loop status:** Some of older versions of pumps are loopable, but not the newer models (see below)

**Other implementations:** OpenAPS, Loop

**Java implementations:**  Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Work in progress. See [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Most of work was done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. There is project (Medtronic) and tickets opened for future development on that repository, development is being done on branch dev_medtronic (which is default branch there). There is also gitter room: RileyLinkAAPS/Lobby.
AAPS. 0.7 test "release" is out, with about 80% of all functionality, missing is only History analysis to determine state of the pump and to confirm that Treatments were or to import new treatments. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware requirement for AAPS:** RileyLink (any)

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.


***


### Insulet Omnipod (Eros pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Using the [Omnipy system](https://github.com/winemug/omnipy/wiki), Omnipod is currently loopable with AndroidAPS but this requires a Raspberry Pi in addition to a RileyLink (433mhz, firmware 2.x). This system is considered 'in testing' but is stable.

**AAPS implementation status:** Work has started on [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch) which will not require a Raspberry Pi, but this is not finished. You can follow progress on https://omniaps.slack.com/ channel android-driver.

In addition, work has also started on [Omnicore](https://github.com/winemug/OmniCore/wiki) which is an alternative implementation on android which does not require the Raspberry Pi. This is not finished. You can follow progress on https://omnicore-pdm.slack.com/ channel omnicore.

**Other implementations:** [Loop with Omnipod](
https://loopkit.github.io/loopdocs/setup/requirements/omnipod-pump/) is available but also considered 'in-testing' / an experimental feature branch.

**Java implementations:**  None till now.

**Hardware requirement for AAPS:** RileyLink 433mhz with Omnipod firmware (2.x)



## Pumps that are Loopable


### Omnipod (DASH pods) ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate. Pump available in USA but not yet Europe. 

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Comments:** Initial decoding underway but developement may be some time. You can follow progress on https://omnicore-pdm.slack.com/ channel dash-dev.

***


### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))


**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

***


### Kaleido ([Homepage](https://www.hellokaleido.com/)) 

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.  

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

***


### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

***

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.


***

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app for control.

**Hardware requirement for AAPS:** Probably none. It seems to be BT enabled.

***


## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage)) 

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon. 

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)


## Pumps that aren't Loopable


### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable. 

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu). 


***


### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. 
**Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).



***


### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. 
**Note** Stopped beeing sold when Vibe came out.





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


***


### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).
