# Future (possible) Pump Drivers

This is list of some Pumps floating around there, and status of support for them in any of Looping systems and then status in AAPS. On end there is some info, what is required for a pump to be "Loop capable".

```{contents} Table of contents
:depth: 1
:local: true
```

## Pumps that are Loopable

### Kaleido ([Homepage](https://www.hellokaleido.com/)) 

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Omnipod 5 ([Homepage](https://www.omnipod.com/))

**Loop status:** Loop candidate, being worked on. A community [reverse-engineering effort](https://nightscout.github.io/omnipod-five/) for the Omnipod 5 is underway.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled.

### Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Loop candidate, driver in development. The Tandem Bluetooth protocol has been reverse-engineered and a t:Mobi driver is being developed for AAPS in phases. An early phase (pairing, communication, reading status, switching the pump out of Control-IQ mode, getting/setting the basal profile and temporary basal rates, oref0 with TBRs only) is working, while later work on bolus delivery, cartridge changes, pump-history parsing and alerts is still in progress. Work on Trio and Loop is happening in parallel.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled. Initial pairing currently also needs Tandem's companion app.

```{admonition} Not safe for real use yet
:class: warning

The t:Mobi driver is **experimental and for development testing only**. Important safety checks (such as reconciling treatments against the pump's own history) are not yet implemented. It must **not** be used to deliver insulin to a person or animal. Wait for an official, released AAPS version that lists t:Mobi as supported before relying on it.
```

**Comments:** t:Mobi has no screen, but it has an Easy Bolus button so you can still dose insulin when away from your phone, and two multicolor lights for simplified alerts. Note that while you are away from your phone AAPS is not looping (you are in full manual mode) unless you switch the pump back to Control-IQ first. Availability is still expanding: rumours suggest the UK around the end of 2026 and the EU in 2027.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Hardware requirement for AAPS:** None. It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled.

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands). 

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Pumps no longer sold (companies no longer operating)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## Pumps that aren't Loopable

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

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
