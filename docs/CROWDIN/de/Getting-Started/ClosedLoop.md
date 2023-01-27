# Was ist ein Closed Loop-System?

```{image} ../images/autopilot.png
:alt: AAPS ist wie ein Autopilot
```

Ein Closed Loop System für eine künstliche Bauchspeicheldrüse kombiniert verschiedene Komponenten, um Dein Diabetes Management zu vereinfachen. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Aber was bedeutet das?

**Autopilot in an aircraft**

Der Autopilot erledigt nicht den kompletten Job und gibt dem Piloten daher nicht die Möglichkeit, während des gesamten Fluges zu schlafen. Er erleichtert die Arbeit der Piloten. Er entlastet sie von der permanenten Überwachung des Flugzeugs und der Fluglage. Dadurch kann sich der Pilot auf die Überwachung des Luftraums und die Kontrolle der Funktionen des Autopiloten konzentrieren.

Der Autopilot empfängt Signale von verschiedenen Sensoren, ein Computer wertet diese zusammen mit den Vorgaben der Piloten aus und nimmt dann die notwendigen Anpassungen vor. Der Pilot muss sich nicht mehr um die dauernden Justierungen kümmern.

**Closed Loop System**

Gleiches gilt für ein Closed Loop System für eine künstliche Bauchspeicheldrüse. Es macht nicht den kompletten Job für Dich, Du musst Dich weiter um Deinen Diabetes kümmern. Ein Closed Loop System kombiniert die Sensordaten aus einem CGM/FGM mit Deinen Vorgaben zum Diabetes Management wie Basalrate, Korrektur- und BE-Faktoren. Daraus errechnet es Behandlungsvorschläge und setzt diese permanenten kleinen Anpassungen um, um Deinen Diabetes im Zielbereich zu halten und Dich zu entlasten. So bleibt mehr Zeit für das Leben "neben" dem Diabetes.

Genauso wenig wie Du in ein Flugzeug steigen willst, in dem nur noch der Autopilot ohne menschliche Überwachung fliegt, hilft Dir ein Closed Loop System bei Deinem Diabetes Management, benötigt aber immer Deine Unterstützung! **Even with a closed loop you can't just forget your diabetes!**

So wie der Autopilot neben den Sensorwerten auf die Vorgaben der Piloten angewiesen ist, so braucht ein Closed Loop System passende Basalraten, Korrektur- und BE-Faktoren, um Dich erfolgreich unterstützen zu können.

## Open Source Closed Loop System für eine künstliche Bauchspeicheldrüse

Aktuell sind drei große Open Source Closed Loop Systeme verfügbar:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). AAPS verwendet ein Android Smartphone für die Berechnungen und die Steuerung Deiner Insulinpumpe. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. OpenAPS verwendet einen kleinen Computer wie Raspberry Pi oder Intel Edison.

Kompatible Insulinpumpen sind:

- some old Medtronic pumps

### Loop für iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Kompatible Insulinpumpen sind:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
