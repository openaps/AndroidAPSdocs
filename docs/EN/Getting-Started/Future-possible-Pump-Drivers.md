# Future (possible) Pump Drivers

This is list of some Pumps floating around there, and status of support for them in any of Looping systems and then status in AAPS. On end there is some info, what is required for a pump to be "Loop capable".

## Pumps that support is in development

### Medtronic

**Loop status:** Some of older versions of pumps are loopable, but not the newer models (see down)

**Other implementations:** OpenAPS, Loop

**Java implementations:**  Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Starting. See [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Most of work was done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. There is project (Medtronic) and tickets opened for future development on that repository, development is being done on branch dev_medtronic (which is default branch there). There is also gitter room: RileyLinkAAPS/Lobby.
AAPS. 0.4 test "release" is out, with about 80% of all functionality, missing is only History reading and parsing. Work is progressing according to plan, end of development estimated by middle of December. 

**Hardware requirement for AAPS:** RileyLink (any)

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.


***


### Insulet Omnipod ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported at the moment, but decoding of the Omnipod protocol is mostly finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:** Loop (implementation is in the beginning stages; as far as I know, they managed to Init the pod and send the first TBR). See [Openomni on github](https://github.com/openaps/openomni)

**Java implementations:**  None till now.

**AAPS implementation status:** 
Work has started on [RileyLinkAAPS](https://github.com/ktomy/RileyLinkAAPS) for Omnipod (dev_omnipod branch), but it is far from working prototype (developer has finished changes for RL firmware 2.0, and started with sending packets to pump). You can follow progress on https://omniaps.slack.com/ channel android-driver. Developer is posting progress there.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x)



## Pumps that are Loopable


### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH_FAQs))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump will start in January 2019 (they are doing pre-sales now in USA).

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

**Comments:** Omnipod DASH is currently not in the plan. Once we have a java implementation for standard Omnipod, we will work from that implementation. If (omnipod) protocol hasn't changed, we might have an implementation a few months later, but if the protocol has changed then it might take some time.

***


### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))


**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

***


### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage)) 

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



## Pumps that aren't Loopable


### Tandem:X2 ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable (I am not 100% sure about this info), but they are planning to release different pump that will have remote control (at least bolus). 


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
