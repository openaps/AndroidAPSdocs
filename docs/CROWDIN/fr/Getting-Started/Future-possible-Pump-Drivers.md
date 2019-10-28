# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes dont le support est en développement

### Medtronic

**Etat de la boucle :** Certaines anciennes versions de pompes sont bouclables, mais pas les modèles les plus récents (voir ci-dessous)

**Autres implémentations :** OpenAPS, Loop

**Implémentations Java :** Mise en oeuvre partielle disponible [Rountrip2](https://github.com/TC2013/Roundtrip2), et [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**Etat de l'implémentation AAPS :** En cours de développement. Voir [le fork AndroidAPS d'Andy](https://github.com/andyrozman/AndroidAPS), branche medtronic_andy. La plupart du travail a été effectué sur [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) pour obtenir le framework et les commandes de fonctionnement. Il ya un projet (Medtronic) et des tickets ouverts pour des développement futur sur ce standard, le développement est en cours sur la branche dev_medtronic (qui est à cet endroit la branche par défaut). Il y a aussi un site gitter : RileyLinkAAPS/Lobby. AAPS. 0.10 test "release" est sorti, avec environ 95% de toutes les fonctionnalités, en ce moment ce qui manque est la synhronisation des DBT et des événements "Arrêt d'injection" de la pompe. Le projet sera probablement fusionné à la branche principale d'ici la fin de juillet 2019. Pour plus de d'informations sur le projet ainsi que son calendrier, voir [Tableau de bord projet](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Configuration matérielle requise pour AAPS :** RileyLink (avec une antenne 916 MHz).

**Versions bouclables :** 512-522, 523 (Firmware 2.4A ou inférieure), 554 (UE firmware 2.6A ou inférieur, CA firmware 2.7A ou inférieur). Idem pour les versions 7xx. Tous les autres appareils ne sont pas supportés, et ne le seront probablement pas.

* * *

### Insulet Omnipod (avec les anciens Pods Eros) ([Page d'accueil](https://www.myomnipod.com/en-gb/about/how-to-use))

**Etat de la boucle :** Non pris en charge nativement par AAPS pour le moment. Le décodage du protocole Omnipod est terminé : [OpenOmni](http://www.openomni.org/) et [OmniAPS Slack](https://omniaps.slack.com/)

**Autres implémentations :**

- Omnipy pour AndroidAPS (stable lors des tests, nécessite un Raspberry Pi ainsi qu'un RileyLink, et une version d'AndroidAPS modifiée) [Omnipy](https://github.com/winemug/omnipy)
- OmniCore pour AndroidAPS (pas encore publié, le code C# fonctionne "nativement" sur Android, ne nécessite que le RileyLink et une version spécialement modifiées d'AndroidAPS - prochaine version du projet Omnipy). [OmniCore](https://github.com/winemug/OmniCore)
- Loop (stable, publié, nécessite RileyLink). [Loop](https://loopkit.github.io/loopdocs/)

**Implémentations Java : **Aucun jusqu'à présent.

**Etat d'implémentation AAPSb:** Le travail a commencé sur [RileyLinkAAPS](https://github.com/bartsopers/RileyLinkAAPS/) pour Omnipod (branche dev_omnipod) qui n'aura pas besoin d'un Pi Raspberry, mais ce n'est pas terminé. Vous pouvez suivre l'avancement sur https://omniaps.slack.com/ canal android-driver.

**Configuration matérielle requise pour AAPS :** RileyLink avec Omnipod firmware (2.x) et une antenne 433 MHz.

## Pompes qui sont Bouclable

### Omnipod DASH ([Page d'accueil](https://www.myomnipod.com/DASH))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est compatible de la Boucle, mais le protocole inconnu à l'heure actuelle. La vente de la pompe a officiellement commencé en janvier 2019.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Page d'accueil](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### EOFLOW ([Page d'accueil](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Accu-Chek Solo ([Page d'accueil](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. La vente de la pompe commencera fin de 2018, dans une sélection de pays de l'UE. Elle disposerait selon la rumeur d'application Android pour la contrôler.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

### Medtronic Bluetooth

**Commentaires :** Cette pompe sortira dans les prochaines années et devrait être prise en charge par le logiciel Tidepool Loop ([voir cet article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

* * *

## Pumps no longer sold (companies no longer operating)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. Pump is a Loop candidate, but since protocol is unknown at the time, I am not seeing this pump supported very soon.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Note about product:** It seems that company decided to exit the Pump Business. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pumps that aren't Loopable

### Tandem : (toutes) ([Page d'accueil](https://www.tandemdiabetes.com/))

**Etat de la boucle :** Non bouclable.

While ago they had firmware called T:AP (mentioned in this [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), which could be used in loop (its no longer available, since pump was upgraded to x2), but that was not intended for commercial use, just for experimental use only (research projects). I talked with one of directors of company and he assured my that Tandem pump will never be open, but they have created their own closed loop system, which they are calling Control-IQ (I think it is already available in USA, and should be available in 2020 in Eu).

* * *

### Animas Vibe

**Loop status:** Not loopable. No remote control possibility. **Note:** Pump is not being sold anymore. Company stopped working in Pump bussiness (J&J).

* * *

### Animas Ping

**Loop status:** Not loopable. It has bolus possibility, but no TBR one. **Note** Stopped beeing sold when Vibe came out.

## Exigences pour que les pompes soient bouclables

**Pré-requis**

- La pompe doit prendre en charge un contrôle à distance (Bluetooth, fréquence radio, etc.).
- Le protocole est piraté/documenté/etc.

**Exigences minimales**

- Définir le Débit de Basal Temporaire
- Obtenir l'état de la pompe
- Annuler le Débit de Basal Temporaire

**Pour oref1 (SMB) :**

- Définir le Bolus

**Préférable d'avoir**

- Annuler le Bolus en cours
- Obtenir le profil de basal (presque requis)
- Définir le profil de basal (souhaitable)
- Lire l'historique 

**Autres (pas nécessaire, mais souhaitable)**

- Définir un bolus étendu
- Annuler un bolus étendu
- Lire l'historique
- Lire le TDI

* * *

### Prise en charge d'autres pompes

Si vous avez d'autres pompes dont vous aimeriez voir l'état de bouclage, veuillez me contacter (@andyrozman sur gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).