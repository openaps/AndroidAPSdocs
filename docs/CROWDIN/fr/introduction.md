# Introduction aux APS et à AAPS

## Qu'est ce qu'un "Système de Pancréas Artificiel” (APS)?

Un pancréas humain fait beaucoup de choses en plus de réguler la glycémie. Cependant, le terme **« Système de pancréas artificiel » (APS)** fait généralement référence à un système qui agit pour maintenir automatiquement les niveaux de glycémie dans les limites de la santé.

La façon basique de faire cela est de détecter les **niveaux de glycémies**, utiliser ces valeurs pour faire des **calculs**, puis d'injecter le montant correct (estimé) d'**insuline** dans le corps. Il répète le calcul régulièrement (quelques minutes), 24h/24, 7j/7. Il utilise des **alarmes** et des **alertes** pour informer l'utilisateur si une intervention ou une attention est nécessaire. Ce système est généralement composé d'un **capteur de glycémie **, d'une **pompe à insuline** et d'une **application** sur un smartphone.

Vous pouvez en savoir plus sur les différents systèmes de pancréas artificiels actuellement disponibles et en cours de développement dans cet article de synthèse de 2022 :

![Frontières](./images/FRONTIERS_Logo_Grey_RGB.png) [Future Directions in Closed-Loop Technology](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses) / Futures directions dans les technologies de boucle fermée (article en anglais).

Dans un avenir proche, certains systèmes dits de "double hormone" auront également la possibilité d'injecter du glucagon en plus de l'insuline, dans le but de prévenir les hypoglycémies sévères et de permettre un contrôle encore plus rigoureux de la glycémie.

An artificial pancreas can be thought of as an [“autopilot for your diabetes”](https://www.artificialpancreasbook.com/). What does that mean?

Dans un avion, un pilote automatique ne fait pas tout le travail du pilote humain, ainsi le pilote ne peut pas dormir pendant la totalité du vol. Le pilote automatique facilite le travail du pilote. Il soulage le pilote du fardeau de la surveillance permanente de l’avion, lui permettant de se concentrer de temps à autre sur une surveillance de plus haut niveau. Le pilote automatique reçoit des signaux de divers capteurs. Un ordinateur les évalue en même temps que les spécifications du pilote, puis il effectue les ajustements nécessaires, en informant le pilote de tout motif de préoccupation. Le pilote n'a plus à se soucier de prendre constamment des décisions.

![image](./images/autopilot.png)

## Que signifie "boucle fermée hybride" ?

La meilleure solution pour le diabète de type 1 serait un « traitement fonctionnel » (probablement un implant de cellules pancréatiques protégées du système immunitaire). En attendant son arrivée, un pancréas artificiel « boucle fermée complète » serait probablement le meilleur choix. Il s'agit d'un système technologique qui n'a besoin d'aucune entrée utilisateur (comme les bolus d'insuline pour les repas, ou l'annonce d'une activité physique), avec une bonne régulation des taux de glycémie. Pour le moment, il n'existe pas de systèmes largement disponibles qui soient en boucle fermée « complète », ces systèmes ont tous besoin de quelques informations entrées par l'utilisateur. Les systèmes actuellement disponibles sont appelés boucles fermées « hybrides », car ils utilisent une combinaison de technologie automatisée et d’informations entrées par l'utilisateur.

## Comment et pourquoi la boucle a-t-elle commencé ?

Le développement de technologies commerciales pour les personnes atteintes de diabète de type 1 (DT1) est très lent. En 2013, la communauté TD1 a fondé le mouvement #WeAreNotWaiting (#nous n'attendronspas). Ses membres ont mis au point eux-mêmes des systèmes utilisant des technologies déjà approuvées (pompes à insuline et capteurs de glycémie) pour améliorer le contrôle du taux de glycémie, la sécurité et la qualité de vie. Ces systèmes sont connus sous le nom de systèmes DIY (do-it-yourself) car ils ne sont pas officiellement approuvés par les organismes de santé (FDA, NHS, CE, FR, etc). There are four main DIY systems available: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

La lecture du livre de Dana Lewis « Automated Insuline Delivery » (Injection automatisée d'insuline) est un excellent moyen de comprendre les fondements de la boucle DIY. You can access it [here](https://www.artificialpancreasbook.com/) for free (or buy a hardcopy of the book). If you want to understand more about [OpenAPS](https://openaps.org/what-is-openaps/), which **AAPS** has developed from, the [OpenAPS website](https://openaps.org/what-is-openaps/) is a great resource.

Several commercial hybrid closed loop systems have been launched, the most recent of which are [CamAPS FX](https://camdiab.com/) (UK and EU) and [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA and EU). Ceux-ci sont très différents des systèmes DIY principalement parce qu'ils incluent tous deux un « algorithme d'apprentissage » qui ajuste la quantité d'insuline délivrée en fonction de vos besoins d'insuline des jours précédents. De nombreuses membres de la communauté DIY ont déjà testé ces systèmes commerciaux et les ont comparés avec leur système de boucle DIY. You can find out more about how the different systems compare by asking on the dedicated Facebook groups for these systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## Qu'est-ce que Android APS (AAPS) ?

![image](./images/basic-outline-of-AAPS.png)

**Figure 1**. Description succinte du système APS d'Android (Artificial Pancréas System), AAPS.

Android APS (**AAPS**) is a hybrid closed loop system, or Artificial Pancreas System  (APS). It makes its insulin dosing calculations using established [OpenAPS](https://openaps.org/) algorithms (a set of rules) developed by the #WeAreNotWaiting type 1 diabetes community.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was developed in 2016 by Milos Kozak, for a family member with type 1 diabetes. Depuis ses débuts, **AAPS** a été sans cesse développé et amélioré par une équipe de développeurs informatiques bénévoles et d'autres passionnés qui ont une connexion avec le monde du diabète de type 1. Aujourd'hui, **AAPS** est utilisé par environ 10 000 personnes dans le monde entier. C'est un système hautement personnalisable et polyvalent, et parce qu'il est open source, il est également facilement compatible avec de nombreux autres logiciels et plateformes open-source pour le diabète. The fundamental components of the current **AAPS** system are outlined in **Figure 1** above.



## Quels sont les composants de base d'AAPS ?

Le « cerveau » d'AAPS est une **application** que vous construisez vous-même. Des instructions détaillées sont fournies pour la construire. You then install the **AAPS  app** on a [compatible](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY/edit?pli=1#gid=2097219952) **Android smartphone** (**1**). Un certain nombre d'utilisateurs préfèrent conserver leur boucle sur un téléphone distinct de leur téléphone principal. Vous pouvez donc par exemple utiliser un téléphone Android juste pour faire fonctionner votre boucle AAPS et utiliser votre téléphone habituel pour toutes vos autres activités.

The **Android smartphone** will also need to have another app installed on it as well as **AAPS**. This is either a modified Dexcom app called build-your-own dexcom app [**BYODA**](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) or [**Xdrip+**](https://xdrip.readthedocs.io/en/latest/install/usethedoc/). This additional app receives glucose data from a sensor (**2**) by bluetooth, and then sends the data internally on the phone to the **AAPS app**.

L'application **AAPS** utilise le processus de prise de décision (**algorithme**) d'OpenAPS. Les débutants commencent à utiliser l'algorithme de base **oref0** , mais il est possible de passer à l'utilisation de l'algorithme **oref1** plus récent au fur et à mesure que vous progressez avec AAPS. Le choix de l'algorithme (oref0 ou oref1) sera à effectuer en fonction de celui qui correspondra le mieux à votre situation.  Dans les deux cas, l'algorithme prend en compte plusieurs facteurs, et effectue des calculs rapides chaque fois qu'une nouvelle lecture provient du capteur de glycémie. The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by bluetooth. All the information can be sent by mobile data or wifi to the internet (**4**). Ces données peuvent également être partagées avec des abonnés, si souhaité, et/ou collectées pour analyse.

## Quels sont les avantages du système AAPS ?

L'algorithme OpenAPS utilisé par **AAPS** contrôle les glycémies en l'absence de saisie de l'utilisateur, selon les paramètres qu'il a définis (les plus importants étant les débits de basale, les facteurs de sensibilité à l'insuline, les ratios Glucides/Insuline, la durée d'activité de l'insuline, etc.) , en réagissant toutes les 5 minutes aux nouvelles données transmises par le capteur. de glycémie. Certains des avantages les plus appréciés de l'utilisation d'AAPS sont les options de réglage fin et adaptable à chaque personne, la possibilité de mise en place d'automatisations et une plus grande transparence du système pour le patient et le soignant. This can result in better control over your (or your dependant’s) diabetes, which in turn may give improved quality of life and increased peace of mind.

### **Specific advantages include:**

#### 1) Safety built-in
To read about the safety features of the algorithms, known as oref0 and oref1, [click here](https://openaps.org/reference-design/). The user is in control of their own safety constraints.

#### 1) **Hardware flexibility**

**AAPS** works with a wide range of insulin pumps and sensors. Ainsi, par exemple, si vous développez une allergie à la colle du capteur Dexcom, vous pourrez à la place, basculer vers un capteur Freestyle libre. Cela offre de la flexibilité au fur et à mesure que votre vie évolue. You don't have to rebuild or reinstall the **AAPS** app, just tick a different box in the app to change your hardware. AAPS is independent of particular pump drivers and also contains a "virtual pump" so users can safely experiment before using it on themselves.

#### 2) **Highly customisable, with wide parameters**

Users can easily add or remove modules or functionality, and **AAPS** can be used in both open and closed loop mode. Here are some examples of the possibilities with the **AAPS** system:

 a) The ability to set a lower glucose target 30 min before eating; you can set the target as low as 72 mg/dL (4.0 mmol/L).

 b) If you are insulin-resistant resulting in high blood sugars, **AAPS** allows you to set an **automation** rule  to activate when BG rises above 8 mmol/L (144 mg/dL), switching to (for example) a 120% profile (resulting in an 20% increase in basal and strengthening of other factors too, compared to your normal **profile** setting). L'automatisation prendra fin après la durée que vous aurez vous-même programmé. Une automatisation pourrait par exemple être configurée pour être active seulement certains jours de la semaine, ou certaines heures de la journée, ou même en certains lieux.

 c) Si votre enfant se retrouve sans prévenir sur un trampoline, **AAPS** permettra de suspendre l'injection d'insuline pour une période déterminée, directement via le téléphone.

 d) After reconnecting a tubed pump which has been disconnected for  swimming, **AAPS** will calculate the basal insulin you have missed while disconnected and deliver it carefully, according to your current BG. Any insulin not required can be overridden by just “cancelling” the missed basal.

 e) **AAPS** has the facility for you to set different profiles for different situations and easily switch between them. For example, features which make the algorithm quicker to bring down elevated BG (like supermicro boluses (“**SMB**”), unannounced meals, (“**UAM**”) can be set to only work during the daytime, if you are worried about night-time hypos.

These are all examples, the full range of features gives huge flexibility for daily life including sport, illness, hormone cycles _etc_. En résumé, c'est à l'utilisateur de décider comment utiliser cette flexibilité, et il n'y a pas une automatisation unique pour tout le monde.

#### 3) **Remote monitoring**
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, Xdrip+, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. Dans certaines applications (Xdrip+), vous pouvez également désactiver complètement les alarmes ce qui est génial si vous avez un nouveau capteur « en cours d'initialisation » ou en attente avec lequel vous ne voulez pas encore boucler.

#### 4) **Remote control**
A significant advantage of **AAPS** over commercial systems is that it is possible for followers, using authenticated text (SMS) commands or via an app ([Nightscout](https://nightscout.github.io/) or AAPSClient) to send a wide range of commands back to the **AAPS** system. Ce type de commande est largement utilisée par les parents d'enfants atteints de diabète de type 1 qui utilisent AAPS. It is very useful: for example, in the playground, if you want to pre-bolus for a snack from your own phone, and your child is busy playing. It is possible to monitor the system (_e.g._ Fitbit), send basic commands (_e.g._ Samsung Galaxy watch 4), or even run the entire AAPS system from a high-spec smartwatch (**5**) (_e.g._ LEMFO LEM14). In this last scenario, you don’t need to use a phone to run AAPS. As battery life on watches improves and technology becomes more stable, this last option is likely to become increasingly attractive.

#### 5) **No commercial constraints, due to open application interfaces**
Beyond the use of an open-source approach, which allows the source code of **AAPS** to be viewed at any time, the general principle of providing open programming interfaces gives other developers the opportunity to contribute new ideas too. **AAPS** is closely integrated with Nightscout. This accelerates development and allows users to add on features to make life with diabetes even more convenient. Good examples for such integrations are [NightScout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [Xdrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki?fbclid=IwAR1pupoCy-2GuXLS7tIO8HRkOC_536YqSxTK7eF0UrKkM1PuucFYRyPFvd0) etc. There is ongoing dialogue between open-source developers and those developing commercial systems. Many of the DIY innovations are gradually adopted by commercial systems, where developments are understandably slower, partly because interfaces between systems from different companies (pumps, apps, sensors _etc_) need to be carefully negotiated and licenced. This can also slow innovations which are convenient for the patient (or a small sub-population of patients, who have a very specific requirement) but do not generate any sizable profit.

#### 6) **Detailed app interface**
With **AAPS** it is easy to keep track of things like: pump insulin levels, cannula age, sensor age, pump battery age, insulin-on-board _etc_. Many actions can be done through the **AAPS** app (priming the pump, disconnecting the pump _etc_.), instead of on the pump itself, which means the pump can stay in your (or your dependant's) pocket or belt.

#### 7) **Accessibility and affordability**
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a world-class hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need to have a Nightscout account to set up **AAPS**, although the Nightscout account is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote control. Although **AAPS** itself is free, setting up Nightscout through one of the various platforms may incur a fee (€0 - €12), depending on what level of support you want (see comparison table) and whether you want to keep using Nightscout after setup or not. **AAPS** works with a wide range of affordable (starting from approx €150) Android phones. Different versions are available for specific locations and languages, and AAPS can also be used by people who are [blind](Safety-first-aaps-can-also-be-used-by-blind-people).

#### 8) **Support**
No automated insulin delivery system is perfect. Commercial and open-source systems share many common glitches in both communications and temporary hardware failure. There is support available from community of AAPS users on Facebook, Discord and Github who designed, developed and are currently using **AAPS**, all over the world. There are also Facebook support groups and help from clinic/commercial companies for the commercial APS systems -  it is worth speaking to the users, or former users of these systems to get feedback on the common glitches, the quality of the education programme and the level of ongoing support provided.

#### 9) **Predictability, transparency and safety**
**AAPS** is totally transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. You can see exactly what the system is doing, why it is doing it, and set its operational limits, which puts the control (and responsibility) in your hands. This can provide the user with confidence, and a sounder sleep.

#### 10) **Access to advanced features through development (dev) modes including full closed loop**
This **AAPS** documentation focuses on the mainstream **“master”** branch of **AAPS**. However, research and development is going on all the time. More experienced users may wish to explore the experimental features in the **development** branch. This includes integration of Dexcom G7, and automatically adjusting insulin delivery according to short-term sensitivity changes (DYNISF). The development innovations focus on strategies for full closed looping (not having to bolus for meals _etc._), and generally trying to make life with type 1 diabetes as convenient as possible.

#### 11) **Ability to contribute yourself to further improvements**
Type 1 diabetes can be highly frustrating and isolating. Having control over your own diabetes tech, with the possibility to “pay it forward” as soon as you are making progress by helping others on their journey can be really rewarding. You can educate yourself, discover the roadblocks and look for, and even contribute, to new developments and the documentation. There will be others in the community with the same quest that you can bounce ideas off and work with. This is the essence of #WeAreNotWaiting.

## Comment marche AAPS en comparaison aux Multiples Injections Quotidiennes (MDI) et à la boucle ouverte ?

Multiple daily injections (MDI, (a) in **Figure 2** below) usually involve giving an injection of a long-lasting insulin (_e.g._ Tresiba) once a day, with injections of faster-acting insulin (_e.g._ Novorapid, Fiasp) at mealtimes, or for corrections. Open pumping (b) involves using a pump to deliver basal at pre-programmed rates of rapid-acting insulin, and then boluses through the pump at mealtimes or for corrections. The basics of a looping system are that the looping app uses the sensor glucose data to instruct the pump to stop insulin delivery when it predicts you are heading for a low, and to give you extra insulin if your glucose levels are rising and predicted to go too high (c). Although this figure is oversimplified compared to real-life, it aims to demonstrate the key differences of the approaches. It is possible to achieve exceptionally good glucose control with any of these three approaches.

![21-06-23 AAPS glucose MDI etc](./images/basic-overview-mdi-open-and-closed-loop.png)


**Figure 2**. Basic overview of (a) MDI, (b) open-loop pumping and (c) hybrid closed loop pumping.

## Comment marche AAPS en comparaison aux autres systèmes de boucle?

As of June 25 2023, there are four major open source closed loop systems available: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (formerly FreeAPS X). The features of the different systems are shown in the table below:

The features of the different systems are shown in the table below:



| Devicestype | Nom                                                                       | [AAPS](https://wiki.aaps.app)             | [Boucle](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ----------- | ------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Téléphone   | Android                                                                   | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| Téléphone   | iPhone                                                                    | ![indisponible](./images/unavailable.png) | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| Rig         | tiny computer (1)                                                         | ![indisponible](./images/unavailable.png) | ![indisponible](./images/unavailable.png)     | ![disponible](./images/available.png)                 | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Dana I](../Configuration/DanaRS-Insulin-Pump.md)                         | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Dana RS](../Configuration/DanaRS-Insulin-Pump.md)                        | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [DanaR](../Configuration/DanaR-Insulin-Pump.md)                           | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Omnipod (Dash)](../Configuration/OmnipodDASH.md) (2)                     | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| POMPE       | [Omnipod (Eros)](../Configuration/OmnipodEros.md)                         | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| POMPE       | [Diaconn G8](../Configuration/DiaconnG8.md)                               | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [EOPatch 2](../Configuration/EOPatch2.md)                                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Medtrum TouchCare Nano](../Configuration/MedtrumNano.md)                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Medtrum TouchCare 300U](../Configuration/MedtrumNano.md)                 | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Roche Combo](../Configuration/Accu-Chek-Combo-Pump.md)                   | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Roche Insight](../Configuration/Accu-Chek-Insight-Pump.md)               | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| POMPE       | [Older Medtronic](../Configuration/MedtronicPump.md)                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC         | [Dexcom G7](../Hardware/DexcomG7.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [Dexcom One](../Hardware/DexcomG6.md)                                     | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [Dexcom G6](../Hardware/DexcomG6.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC         | [Dexcom G5](../Hardware/DexcomG5.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC         | [Dexcom G4](../Hardware/DexcomG4.md)                                      | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |
| MGC         | [Libre 3](../Hardware/Libre3.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![indisponible](./images/unavailable.png)      |
| MGC         | [Libre 2](../Hardware/Libre2.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [Libre 1](../Hardware/Libre1.md)                                          | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [Eversense](../Hardware/Eversense.md)                                     | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [MM640g/MM630g](../Hardware/MM640g.md)                                    | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [PocTech](../Hardware/PocTech.md)                                         | ![disponible](./images/available.png)     | ![indisponible](./images/unavailable.png)     | ![indisponible](./images/unavailable.png)             | ![disponible](./images/available.png)          |
| MGC         | [Nightscout comme source de glycémie](../Hardware/CgmNightscoutUpload.md) | ![disponible](./images/available.png)     | ![disponible](./images/available.png)         | ![disponible](./images/available.png)                 | ![disponible](./images/available.png)          |

_Table notes:_
1. A **rig** is a small computer which you carry around with you, without a monitor. One supported device type is Intel Edison + Explorer Board and the other Raspberry Pi + Explorer HAT or Adafruit RFM69HCW Bonnet. The first APS were based on this setup, as mobile phones were not capable of running the required algorithms. Use of these systems has declined, as the setup on mobile phones has become easier, and phones have a display included. Intel has also stopped selling the Intel Edison. The excellent OpenAPS algorithms **oref0** and **oref1** are now incorporated in AAPS and iAPS.
2. Omnipod Dash is the successor of Omnipod Eros. It supports bluetooth communication and does not need a rig gateway to communicate between the Omnipod and mobile phone. If you have a choice, we recommend use of the Dash instead of Eros.


An international peer-reviewed consensus statement containing practical guidance on open source looping was written by and for health-care professionals, and published in a leading medical journal in 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). It is well worth a read (including for your diabetes clinic) and summarises the main technical differences between the different open-source hybrid closed loop systems.

It is hard to get a “feel” for any system without using it, or talking to others who are using it, so do reach out to others on Facebook/Discord and ask. Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customisable settings and features,  discussed above. Some people can find this a little overwhelming in the beginning, but there is no rush to investigate all the possibilities at once, you can progress as slowly or as fast as you would like, and there is help available at every step of the way.


## AAPS utilise-t-il une intelligence artificielle ou un algorithme d’apprentissage ?

The current master version of **AAPS** (3.1.0.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. As such, the system is open and transparent in how it works, and has the ability to be understood not just by experts, but also by clinicians and patients. It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customised profile. A ‘learning system’ will do this adjustment for you automatically, but is likely to take longer to adjust the insulin delivery.

## Which system is right for me or my dependant?

Practically, your choice of system is often restricted by which pump you already have, or can obtain from your medical provider, and your choice of phone (Apple or Android). If you don’t yet have a pump you have the biggest choice of systems. Technology is continually evolving, pumps are being discontinued and new pumps and sensors are being released. Most open-source systems work with the main sensors (Libre and Dexcom) or are quickly adapted to work with new sensors a year or so after they are released (with a bit of time delay for safety and stability testing).

Most **AAPS** users report more time in range, HbA1c reductions, as well as quality of life improvements from having a system that can auto-adjust basal rates overnight during sleep, and this is true for most hybrid closed loop systems. Some people have a preference for a very simple system which is not very customisable (which means you may prefer a commercial system), and others find this lack of control very frustrating (you may prefer an open-source system). If you (or your dependant) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

It is important to note that the **AAPS** user needs to be proactive to troubleshoot and fix problems themselves, with help from the community. This is a very different mindset to that when using a commercial system. With **AAPS** a user has more control, but also the responsibility, and needs to be comfortable with that.

## Peut-on utiliser des systèmes open-source comme AAPS en toute sécurité ?

### Safety of the AAPS system
A more accurate question is probably “is it safe **compared** with my current insulin delivery system?” since no method of insulin delivery is without risk. There are many checks and balances in place with **AAPS**. A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer simulated set-up, which was an effective way to unobjectively trial how safe and effective the system is. More generally, it is estimated that over 10,000 individuals worldwide are using open-source automated-insulin delivery systems, and uptake continues to increase globally.

Any device that uses radio communications could be hacked, and this is true for a non-looping insulin pump as well. Currently, we are not aware of anyone attempting to harm individuals by hacking their diabetes-related medical equipment. However, there are multiple ways to protect against such risks:

1.  In the pump settings, limit both the max bolus allowed and max temporary basal settings to amounts that you believe are safest. These are hard limits that we do not believe any malicious hacker could circumvent.

2.  Set your CGM alarms enabled for both highs and lows.

3.  Monitor your insulin delivery online. Nightscout users can set additional alarms to alert for a wide variety of conditions, including conditions that are much more likely to occur than a malicious attack. In addition to highs and lows, Nightscout can display diagnostic data useful for verifying that the pump is operating as desired, including current IOB, pump temporary basal history, pump bolus history. It can also be configured to proactively alert users to undesirable conditions, such as predicted highs and lows, low insulin reservoir, and low pump battery.

If a malicious attack was made on your insulin pump, these strategies would significantly mitigate the risk. Every potential **AAPS** user needs to weigh the risks associated with using **AAPS**, versus the risks of using a different system.

#### Safety considerations around improving blood glucose control too fast

A rapid reduction in HbA1c and improved blood glucose control sounds appealing. However, reducing average blood glucose levels _too fast_ by starting any closed loop system can cause permanent damage, including to the eyes, and painful neuropathy that never goes away. This damage can be avoided simply by reducing levels more slowly. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a timeplan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](preparing-safety-first).

#### Medical safety around devices, consumable supplies and other medications

Use a tested, fully functioning FDA or CE approved insulin pump and CGM for an artificial pancreas loop. Les modifications matérielles ou logicielles de ces composants peuvent entraîner un dosage incorrect de l'insuline, causant un risque significatif pour l'utilisateur. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, do not use these for creating an AAPS system.

Use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer of your pump and CGM. L'utilisation de consommables non testés ou modifiés peut entraîner une imprécision du MGC et des erreurs de dosage de l'insuline. Insulin is highly dangerous when misdosed - please do not play with your life by hacking your supplies.

Do not take SGLT-2 inhibitors (gliflozins) when using **AAPS** as they incalculably lower blood sugar levels. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## Comment puis-je aborder AAPS avec mon équipe médicale ?

Users are encouraged to speak with their clinicians about their intention to use **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other DIY loop, for that matter). Transparency and trust between patient and doctor is paramount.

### Suggested approach:
Start a conversation with your clinician to determine their familiarity and attitude towards diabetic technology such as CGMs,  pumps, hybrid loops and commercial looping. Your clinician/endocrinologist should be aware of the basic technology and be willing to discuss with you recent advancements with commercial loop products available within their regions.

#### Local precedent

Obtain your clinicians/endocrinologists’ views on DIY loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with DIY looping?

Ask if your team has any patients under their care who already use DIY looping. Due to patient confidentiality, doctors cannot pass other patient’s details to you without obtaining the individual’s consent. However, if you want to, you **can** ask them to pass **your** contact details to an existing DIY looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss DIY looping. Clinicians are not obliged to do this, but some are happy to, since they realise the importance of peer-to-peer support in type 1 diabetes management. You may also find it useful to meet local friendly DIY loopers. This is of course up to you, and not entirely necessary.

#### National and International Precedent

If you feel unsupported by your team to loop with **AAPS**, the following discussion points may help:

a) The **AAPS** system has been designed BY patients and their caregivers. It has been designed ultimately for safety, but also drawing on in-depth patient experience. There are currently around **10,000** AAPS users worldwide. There is therefore likely to be other patients using DIY looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that DIY loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping commmunity.

c) Starting with **AAPS** involves a _gradual_ migration from “open” loop pumping, through low-glucose suspend, through to hybrid “closed” looping, by completing a number of objectives. There is therefore a structured programme, requiring the user to demonstrate a level of competence at each stage and fine-tuning their basic settings (basal, ISF and ICR) before they can close the loop.

d) Technical support is available to you from the DIY community through Github, Discord and Facebook closed groups.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). The streamlining of both CGM and insulin data will allow more effective use of your clinician’s time to review your reports and aid their discussions in assessing your progress.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](Resources/clinician-guide-to-AndroidAPS.md)

#### Support for DIY looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co led by Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, and co lead by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that DIY artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Recognition** that open-source automated insulin delivery (“AID”) systems can increase time in range (TIR) while reducing variability in blood glucose concentrations and the amount of hypo and hyperglycaemic episodes in various age groups, genders and communities;

c) **Recommendation** that healthcare workers should **support** type 1 patients or their caregivers who choose to manage their diabetes with an open source AID system;

d) Recommendation that healthcare workers should attempt to learn about all treatment options that might benefit patients including available open-source AID systems.  If health care professionals do not have resources to educate themselves, or have legal or regulatory concerns, they should consider **cooperating, or teaming up with other healthcare professionals** who do;

e) Emphasis that all users of CGMs should have real-time and open-access to **their own health data** at all times

f) Emphasis that these open source systems have not undergone the same regulatory evaluations as commercially available medical technologies, and there is no commercial technical support. However, **extensive community support is available**; and

g) A recommendation that **regulation and legal frameworks** should be updated to ensure clarity on permitting ethical and effective treatment of such open source systems.

Another paper in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) also highlights the UK General Medical Council’s ‘consent guidance’ places a strong emphasis on doctor and patients making decisions together. The doctor should explain the potential benefits, risks, burdens and side-effects on DIY APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with a DIY system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Doctors (at least in the UK) are not prohibited from prescribing unlicensed medicines and can use their clinical discretion. They should therefore use their clinical judgement to decide if a DIY APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### The articles referenced above, and other useful links and position statements are listed below:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Why can’t I just download AAPS and use it straight away?

The **AAPS** app is not provided in Google Play - you have to build it from source code by yourself for legal reasons. **AAPS** is unlicensed, meaning that it does not have approval by any regulatory body authority in any country. **AAPS** is deemed to be carrying out a medical experiment on yourself, and is carried out at the user’s own risk.

Setting up the system requires patience, determination and the gradual development of technical knowledge. All the information and support can be found in these documents, elsewhere online, or from others who have already done it. Over 10,000 people have successfully built and are currently using **AAPS** worldwide.

The developers of **AAPS** take safety incredibly seriously, and want others to have a good experience of using **AAPS**. That is why it is essential that every user (or carer, if the user is a child):

- builds the AAPS system themself and works through the **objectives** so that they have reasonably good personalised settings and understand the basics of how **AAPS** works by the time they “close the loop”;

- backs up their system by exporting and saving important files (like keystore and settings .json file) somewhere safe, so you can setup again quickly if needed;

- updates to newer master versions as and when they become available; and

- gèrent et surveillent le système pour s’assurer qu’il fonctionne correctement.

## What is the connectivity of the AAPS system?

**Figure 3 (below)** shows one example of the **AAPS** system for a user who do not require any followers interacting with the system. Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS connectivity no followers](./images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and requires a monitor and send adjust the system remotely (like a child with type 1 diabetes). Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS overview with followers](./images/AAPS-overview-with-followers.png)

## How does AAPS get continually developed and improved?

Most **AAPS** users use the fully tested **master** version of AAPS, which has been tested for bugs and problems, before being released to the community. Behind the scenes, the developers try out new improvements, and test these out in “developer” (**dev**) versions of **AAPS** with a user community who are happy to do bug updates at short notice. If the improvements work well, they are then released as a new “master” version of **AAPS**. Any new master release is announced on the Facebook group, so that the mainstream **AAPS** users can read about and update to the new master version.

Some experienced and confident **AAPS** users conduct experiments with emerging technologies and with dev versions of the **AAPS** app, which can be interesting for the less adventurous users to read about, without having to do it themselves! People tend to share these experiments on the Facebook group too.

You can read more about some of these experiments and discussion on emerging tech here:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Who can benefit from AAPS?

| Type d'utilisateur                          |
| ------------------------------------------- |
| ✔️ type 1 diabetic                          |
| ✔️ caregiver or parent of a type 1 diabetic |
| ✔️ blind users type 1 diabetic              |
| ✔️ *clincians and healthcare professionals  |

The above table assumes that the user has access to both continuous gluocse monitor and insulin pump.

*All data from **AAPS** can be made available to healthcare professionals via data sharing platforms, including Nightscout that provides logging and real time monitoring of CGM data, insulin delivery, carbohydrate entries, predictions and settings. Nightscout records include daily and weekly reports which can aid healthcare professionals' discussions with type 1 patients with more accurate data on glycemic control and any behavioural considerations.

### Accessibility for users AAPS who are partially or completely blind

#### Day to day AAPS use:
AAPS can be used by blind people. On Android devices, the operating system has a program called TalkBack. This allows screen orientation via voice output as part of the operating system. By using TalkBack you can operate both your smartphone and AAPS without needing to be able to see.

#### Building the AAPS app:
As a user you will build the AAPS app in Android Studio. Many people use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the “Java Access Bridge” component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

How you do this depends on your operating system, two methods are outlined below:

1) In the Windows Start menu, enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Open the "Ease of Access Centre".

Then open “Use computer without a display” with Enter.

Under hear text read aloud select "turn on narrator" and "turn on audio display", and click "apply"

or:

2) Press Windows key and enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Press the letter C to get to “Center for Ease of Use”, open with Enter.

Then open “Use computer without a screen” with Enter.

There, at the bottom, you will find the checkbox “Enable Java Access Bridge”, select it.

Done, just close the window! The screen reader should work now.



## What benefits can I get from AAPS?

With investment of your time, **AAPS** can potentially lead to:

- alleviating the stress and burden of managing type 1 diabetes;

- reducing the multitude of mundane decisions that arise from type 1 diabetes;

- the provision of personalised and dynamic insulin dosing based on real-time data which can cut down the need for hypo treatments and reduce hyperglycemia episodes;

- an increased knowledge of insulin management and confidence to better fine tune your settings;

- the ability to create automatic settings (**automations**) that are tailored to fit in with your lifestyle;

- improved sleep quality and overall reduction in the frequency of nighttime interventions;

- remote monitoring and administration of insulin delivery for caregivers of type 1 diabetics; and

- streamlining of all your portable diabetic equipment (continuous glucose monitor receiver and insulin controlling devices) by using an Android phone controlled by **AAPS**.

Ultimately, **AAPS** can empower individuals to better manage their diabetes, resulting in stable blood sugars and improved long term health outcomes.

Interested in how to get started with setting up AAPS? Take a look at the [preparing](preparing.md) section.
