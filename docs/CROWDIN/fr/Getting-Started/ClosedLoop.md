# Qu'est ce qu'un Système de boucle fermée ?

```{image} ../images/autopilot.png
:alt: AAPS est comme un pilote automatique
```

Un système de boucle fermée du pancréas artificiel combine différents composants afin de vous faciliter la gestion du diabète. Dans son grand livre [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, une des fondatrices du mouvement "Open Source closed loop" (Boucle fermée en open Source), appelle cela ["pilote automatique pour votre diabète"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Mais qu'est-ce que cela signifie ?

**Pilot automatique dans un avion**

Le pilote automatique ne fait pas le travail complet et ne donne pas la possibilité au pilote de dormir pendant tout le vol. Il facilite le travail des pilotes. Il les soulage de la charge de la surveillance permanente de l'avion et de l'attitude de vol. Cela permet au pilote de se concentrer sur la surveillance de l'espace aérien et le contrôle des fonctions du pilote automatique.

Le pilote automatique reçoit des signaux de différents capteurs, un ordinateur les évalue avec les spécifications du pilote et effectue ensuite les ajustements nécessaires. Le pilote n'a plus à s'inquiéter des ajustements constants.

**Système de boucle fermée**

Il en va de même pour un système de boucle fermée du pancréas artificiel. Il ne fait pas tout le travail, vous devez toujours faire attention à votre diabète. Un système de boucle fermée combine les données du capteur d'une MGC/MGF avec vos spécifications de gestion du diabète telles que le taux de basal, le facteur de sensibilité à l'insuline (SI) et le ratio du glucides/insuline (G/I). De cette façon, il calcule les propositions de traitements et implémente ces petits ajustements permanents afin de garder votre diabète dans la plage cible et vous soulager. Cela vous laisse plus de temps pour votre vie "à côté" du diabète.

Tout comme vous ne voudriez pas monter dans un avion où seul un pilote automatique vole sans surveillance humaine, un système de boucle fermée vous aide à gérer votre diabète, mais a toujours besoin de votre soutien! **Même avec une boucle fermée, vous ne pouvez pas simplement oublier votre diabète !**

Tout comme le pilote automatique dépend des valeurs du capteur ainsi que des spécifications du pilote, un système de boucle fermée nécessite des entrées adaptées, telles que les débits de basal, la SI et le rapport G/I, pour vous aider à réussir.

## Systèmes de boucle fermée de pancréas artificiels en Open Source

À l'heure actuelle, il existe trois grands systèmes de boucle fermée en Open Source :

### AndroidAPS (AAPS)

AAPS est décrit en détail dans [cette documentation](./WhatisAndroidAPS.html). Il utilise un Smartphone Android pour le calcul et le contrôle de votre pompe à insuline. Il est en étroite collaboration avec OpenAPS (par ex. ils partagent les algorithmes).

Les [pompes](../Hardware/pumps.md) compatibles sont :

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod Dash](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- quelques anciennes [Pompes Medtronic](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) a été le premier système de boucle fermée Open Source. Il utilise un petit ordinateur comme un Raspberry Pi ou un Intel Edison.

Les pompes compatibles sont :

- quelques anciennes pompes Medtronic

### Loop pour iOS

[Loop pour iOS](https://loopkit.github.io/loopdocs/) est le système de boucle fermée Open Source à utiliser avec un iPhone Apple.

Les pompes compatibles sont :

- Omnipod Dash
- Omnipod Eros
- quelques anciennes pompes Medtronic
