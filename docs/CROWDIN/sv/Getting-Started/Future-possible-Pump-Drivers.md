# Future (possible) Pump Drivers

This is list of some Pumps floating around there, and status of support for them in any of Looping systems and then status in AAPS. On end there is some info, what is required for a pump to be "Loop capable".

## Medtronic

**Loop status:** Some of older versions of pumps are loopable, but not the newer models (see down)

**Other implementations:** OpenAPS, Loop

**Java implementations:** Partial implementation available [Rountrip2](https://github.com/TC2013/Roundtrip2), and [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) - extensions of RT2 is almost complete

**AAPS implementation status:** Starting. See [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch riley_link_medtronic (default branch). Status: Base integration done (Medtronic Tab), we have now Medtronic virtual pump. At the moment most of work is being done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. There is project (Medtronic) and tickets opened for future development on that repository, development is being done on branch dev_medtronic (which is default branch there). There is also gitter room: RileyLinkAAPS/Lobby. Test integration to AAPS is already happening, but its not ready yet for testing.

**Hardware requirement for AAPS:** RileyLink

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

## Insulet Omnipod

**Loop status:** Not supported at the moment, but there is a lot of work going on on decoding the Omnipod protocol - [OpenOmni](http://www.openomni.org/).

**Other implementations:** Loop (implementation is at beggining, as far as I know, they managed to Init the pod, and send the first TBR). See [Openomni on github](https://github.com/openaps/openomni)

**Java implementations:** None.

**AAPS implementation status:** Work has started on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) for Omnipod (dev_omnipod branch), but it is far from working prototype (developer started working on changes needed for RL firmware 2.0). You can follow progress on https://omniaps.slack.com/ channel android-driver. Developer is posting progress there.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.0)

**Comments:** Omnipod DASH is currently not in the plan. Once we have java implementation for standard Omnipod, we will work from that implementation. If (omnipod) protocol hasn't changed, we might have implementation few months later, if protocol has changed then it might take some time.

* * *

## Ypsomed Pump

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in next versions.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

* * *

## Cellnovo Pump

**Loop status:** Currently not supported by any of loop system. Pump is Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Hardware requirement for AAPS:** Probably none. It's BT enabled.

* * *

## Animas Vibe

**Loop status:** Not loopable. No remote control possibility.

* * *

## Animas Ping

**Loop status:** Currently not supported by any of Loop systems, but it might be a candidate, since it does have some kind of remote possibility. Since its much older pump, it might never get supported anywhere.

* * *

## Requirements for pump being loopable

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
- Get Basal Profile
- Set Basal Profile
- Read History 

**Other**

- Set Extended Bolus
- Cancel Extended Bolus

* * *

## Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).