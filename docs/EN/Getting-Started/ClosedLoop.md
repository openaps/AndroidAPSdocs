# What is a Closed Loop System?

```{image} ../images/autopilot.png
:alt: AAPS is like an autopilot
```

An artificial pancreas closed loop system combines different components in order to make diabetes management easier for you.
In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). But what does that mean?

**Autopilot in an aircraft**

The autopilot does not do the complete job and does not give the possibility to the pilot to sleep throughout the entire flight. It facilitates the work of the pilots. It relieves them of the burden of permanently monitoring the aircraft and the flight attitude. This allows the pilot to concentrate on monitoring the airspace and controlling the autopilot's functions.

The autopilot receives signals from various sensors, a computer evaluates them together with the pilot's specifications and then makes the necessary adjustments. The pilot no longer has to worry about the constant adjustments.

**Closed Loop System**

The same applies to an artificial pancreas closed loop system. It does not do the whole job, you still have to take care of your diabetes. A closed loop system combines the sensor data from a CGM/FGM with your diabetes management specifications such as basal rate, insulin sensitivity factor and carb ratio. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. This leaves more time for your life "next to" diabetes.

Just as you don't want to get on a plane where only the autopilot flies without human supervision, a closed loop system helps you with your diabetes management, but always needs your support! **Even with a closed loop you can't just forget your diabetes!**

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.

## Open Source Artificial Pancreas Closed Loop Systems

At present there are three major open source closed loop systems available:

### AndroidAPS (AAPS)

AAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. It uses a small computer such as Raspberry Pi or Intel Edison.

Compatible pumps are:

- some old Medtronic pumps

### Loop for iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Compatible pumps are:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
