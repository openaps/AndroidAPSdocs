# Qu'est ce qu'un Système de boucle fermée ?

```{image} ../images/autopilot.png
:alt: AAPS est comme un pilote automatique
```

Un système de boucle fermée du pancréas artificiel combine différents composants afin de vous faciliter la gestion du diabète. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Mais qu'est-ce que cela signifie ?

**Autopilot in an aircraft**

Le pilote automatique ne fait pas le travail complet et ne donne pas la possibilité au pilote de dormir pendant tout le vol. Il facilite le travail des pilotes. Il les soulage de la charge de la surveillance permanente de l'avion et de l'attitude de vol. Cela permet au pilote de se concentrer sur la surveillance de l'espace aérien et le contrôle des fonctions du pilote automatique.

Le pilote automatique reçoit des signaux de différents capteurs, un ordinateur les évalue avec les spécifications du pilote et effectue ensuite les ajustements nécessaires. Le pilote n'a plus à s'inquiéter des ajustements constants.

**Closed Loop System**

Il en va de même pour un système de boucle fermée du pancréas artificiel. Il ne fait pas tout le travail, vous devez toujours faire attention à votre diabète. Un système de boucle fermée combine les données du capteur d'une MGC/MGF avec vos spécifications de gestion du diabète telles que le taux de basal, le facteur de sensibilité à l'insuline (SI) et le ratio du glucides/insuline (G/I). De cette façon, il calcule les propositions de traitements et implémente ces petits ajustements permanents afin de garder votre diabète dans la plage cible et vous soulager. Cela vous laisse plus de temps pour votre vie "à côté" du diabète.

Tout comme vous ne voudriez pas monter dans un avion où seul un pilote automatique vole sans surveillance humaine, un système de boucle fermée vous aide à gérer votre diabète, mais a toujours besoin de votre soutien! **Even with a closed loop you can't just forget your diabetes!**

Tout comme le pilote automatique dépend des valeurs du capteur ainsi que des spécifications du pilote, un système de boucle fermée nécessite des entrées adaptées, telles que les débits de basal, la SI et le rapport G/I, pour vous aider à réussir.

## Systèmes de boucle fermée de pancréas artificiels en Open Source

À l'heure actuelle, il existe trois grands systèmes de boucle fermée en Open Source :

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Il utilise un Smartphone Android pour le calcul et le contrôle de votre pompe à insuline. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod Dash](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Il utilise un petit ordinateur comme un Raspberry Pi ou un Intel Edison.

Les pompes compatibles sont :

- some old Medtronic pumps

### Loop pour iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Les pompes compatibles sont :

- Omnipod Dash
- Omnipod Eros
- some old Medtronic pumps
