# Posibles (futuros) drivers para Bombas

Esta es la lista de algunas Bombas que se van mencionando por ahí, y el grado de soporte a las mismas en cualquiera de los sistemas de Lazo cerrado y, a continuación, su situación respecto en AAPS. Al final hay alguna información, de lo que se requiere para que una bomba pueda ser utilizada para "Lazos Cerrados".

## Bombas compatibles

### Omnipod DASH ([Homepage ](https://www.myomnipod.com/DASH))

**Loop status:** Currently not supported by any of loop system. La bomba es candidata, pero el protocolo aún se desconoce. La venta de la bomba se inició oficialmente en enero de 2019.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Comments:** Group of developers is looking into protocol (by reverse engineering original app) and into solution for AAPS, now that pump has become available all over world. There are no estimations yet, when this will be available, or even when first testing will begin. If you are interested in progress, or are willing to help, group can be reachable on WeAreNotWaiting discord. Mention your interest in androidaps group and someone will give you more info.

* * *

### Bomba Ypsomed([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** los modelos 1 - 1.5 (2Q/2018) no son candidatos. While they do have BT communication, communication is very limited and uni directional: Pump->App. By end of 2021, it is planned that company will release, new version nicknamed DOSE (1.6), which will allow setting bolus and TBR from their App. They plan to implement their own Loop in 2022, with their own application. More info see this [page](https://www.mylife-diabetescare.com/en/loop-program.html)

**Hardware requirement for AAPS:** None. Está habilitada para BT.

**Comments:** There are currently 2 groups working on driver, so after new version is released, we can expect to have AAPS support soon thereafter. One group is being supported by YpsoMed and helping with Medical trials that are happening in Australia, 2nd is working independently by reverse engineering original app.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Medtrum A6/P6/C6 ([Homepage](https://www.medtrum.com/product/nanopump.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controllable via iPhone App. No Android app available at the moment.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. It seems to be BT enabled.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. It seems to be BT enabled.

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

### Tandem: t:sport ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Is a Loop candidate. Pump hasn't been released yet, but FDA process is already running, so it should be out sooner, rather than later (in US).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

* * *

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Bombas que ya no se venden (las compañías ya no operan)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Bombas incompatibles

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump business (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped being sold when Vibe came out.

## Requisitos para que una bombas sea compatible

**Prerequisite**

- La bomba debe disponer de algún tipo de control remoto. (BT, Radio frecuencia, etc)
- El protocolo está documentado/hackeado/etc.

**Minimal requirement**

- Establecer basales temporales
- Obtener estado
- Cancelar basales temporales

**For oref1(SMB) or Bolusing:**

- Fijar Bolo

**Good to have**

- Cancelar Bolo
- Obtener perfil basal (casi un requisito)
- Establecer Perfil Basal (recomendable)
- Leer historial 

**Other (not required but good to have)**

- Suministrar bolos extendidos
- Cancelar bolo extendido
- Leer historial
- Leer TDD

* * *

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.