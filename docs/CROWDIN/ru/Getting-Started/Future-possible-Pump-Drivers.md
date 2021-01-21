# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

## Pumps that are Loopable

### Omnipod DASH ([Homepage](https://www.myomnipod.com/DASH))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Ypsomed Pump ([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Company is planning to extend the pump to support remote bolusing (update planned for end of 2021) and later on they plan to add other functions required to create a Loop. Their official app will support that in the future (planned for 2022 no exact date known). As they plan to have their own Loop system see this [page](https://www.mylife-diabetescare.com/en/loop-program.html), they won't be offering any support to any developers on any DIY loop, at least for now.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Требования к оборудованию для AAPS:** По-видимому, никаких. Похоже, что блутус-связь имеется.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Похоже, что блутус-связь имеется.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Статус реализации:** В настоящее время не поддерживается какой-либо системой ИПЖ. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Требования к оборудованию для AAPS:** По-видимому, никаких. В помпе есть блутус-связь.

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

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

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

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #157](https://github.com/nightscout/AndroidAPS/issues/157)).