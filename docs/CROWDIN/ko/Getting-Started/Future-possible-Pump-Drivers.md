# 가능한 펌프 드라이버.

아래는 현재 유효한 펌프리스트이며, AAPS의 상태 및 루핑시스템의 지원과 관련된 것입니다. 펌프에서 루프를 가능하게 하기 위해서 요구되는 정보들이 포함되어있습니다.

## Pumps whose support is in development

### Medtronic

**Loop status:** Some of older versions of pumps are loopable, but not the newer models (see below)

**추가적인 기능:** OpenAPS, Loop

**자바 기능:** 일부 기능이 가능합니다. [Rountrip2](https://github.com/TC2013/Roundtrip2)과 [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**AAPS implementation status:** Work in progress. See [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), branch medtronic_andy. Most of work was done on [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) to get framework and commands working. 프로젝트 (Medtronic) 가 있으며, 향 후 개발을 위해서 티켓이 발급되어있습니다. 이 건은 branch dev_medtronic (기본사항) 에서 이루어집니다. RileyLinkAAPS/Lobby에 gitter room이 있습니다. AAPS 0.10 test "release" is out, with about 95% of all functionality, at the moment what is missing is synhronization of TBRs and Pump "Delivery stopped" events. Project will probably be merged to main repository by end of July 2019. For details and timing see [Project board](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

**루프가능한 버젼:** 512-522, 523 (Fw 2.4A 또는 이전버젼), 554 (EU firmware 2.6A 또는 이전버젼, CA firmware 2.7A 또는 이전버젼. 7xx버젼과 동일함. 다른 장치들은 지원이 되지 않으며, 앞으로도 계획은 없습니다.

* * *

### Insulet Omnipod (with "old" Eros Pods) ([Homepage](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy for AndroidAPS (stable in testing, requires Raspberry Pi as well as RileyLink, and specially modified AndroidAPS) 
- OmniCore for AndroidAPS (not release yet, C# code running "natively" on Android, requires only RileyLink and specially modified AndroidAPS - next version of Omnipy project).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stable, released, requires RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version is expected to be released around January 2020.

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Pumps that are Loopable

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Loop status:** Currently not supported by any of loop system. 펌프는 루프 검토대상이나, 프로토콜에 대해서는 알려져있지 않습니다. Selling of pump officially started in January 2019.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. It's BT enabled.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**루프 상태:** Version 1 - 1.5 (2Q/2018)는 루프 검토대상이 아닙니다. BT통신 기능이 있지만, 통신기능은 제한적으로 보여집니다 (Pump에서 App으로 보내지는 일방적인 교신). 하지만 다음 버젼에서는 변경될 수도 있습니다.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. It's BT enabled.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. 펌프는 루프 검토대상이나, 프로토콜이 현재 알려지지 않으므로 이 펌프는 당분간 검토되지 않을 듯 합니다.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. It's BT enabled.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. (A6)라는 제한된 루프시스템을 가지고 있습니다. iPhone App으로 통제가능하나 안드로이드 App은 가능하지 않습니다.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. BT기능이 가능할 것으로 보여집니다.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. BT기능이 가능할 것으로 보여집니다.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app for control.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. BT기능이 가능할 것으로 보여집니다.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status:** Currently not supported by any of loop system. 펌프는 루프 검토대상이나, 프로토콜이 현재 알려지지 않으므로 이 펌프는 당분간 검토되지 않을 듯 합니다.

**AAPS의 하드웨어 요구사항:** 별도 요구사항은 없을것으로 보여집니다. It's BT enabled.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumps that aren't Loopable

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Not loopable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

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

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).