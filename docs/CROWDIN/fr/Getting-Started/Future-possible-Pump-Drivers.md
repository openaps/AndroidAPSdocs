# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes qui sont Bouclable

### Omnipod DASH ([Page d'accueil](https://www.myomnipod.com/DASH))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est compatible de la Boucle, mais le protocole inconnu à l'heure actuelle. La vente de la pompe a officiellement commencé en janvier 2019.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Commentaires :** Nous étudions le développement d'Omnipod DASH, mais le problème en ce moment est que Dash n'est pas encore disponible en Europe (où sont la plupart des développeurs de AAPS) et que le protocole de communication est inconnu. Nous allons essayer de procéder à l’ingénierie inverse du fichier APK de l'application Dash officielle, afin de déterminer le fonctionnement de la communication, puis de la mettre en œuvre sur la base de ces résultats. Vous pouvez suivre ce qui se passe ici : [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), mais ne vous attendez pas à ce que cela soit disponible rapidement. C'est à l'heure actuelle uniquement le Proof Of Concept (jusqu'à la fin du jalon 2).

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Etat de la boucle :** Version 1-1.5 (2Q/2018) ne sont pas candidates à la boucle. Bien qu'elles aient une communication bluetooth, il semble que la communication soit très limitée (unidirectionnelle : Pompe->Appli). Peut-être que cela changera dans les prochaines versions. Il semble que nous aurons une version bouclable début 2021, voir cet [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Page d'accueil](http://www.medtrum.com/P6.html))

**Etat de la boucle :** Candidat à la boucle. L'entreprise dispose de son propre système de demi-boucle limité (A6). Controlable via une application iPhone. Aucune application Android disponible pour le moment.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### EOFLOW ([Page d'accueil](http://www.eoflow.com/eng/main/main.html))

**Etat de la boucle :** Candidat à la boucle. La télécommande qu'ils utilisent est en fait un périphérique Android modifié. (La pompe n'est actuellement disponible qu'en Corée).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Accu-Chek Solo ([Page d'accueil](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Etat de la boucle :** Candidat à la boucle. La vente de la pompe commencera fin de 2018, dans une sélection de pays de l'UE. Elle disposerai, selon la rumeur, d'une application Android sur un appareil spécifique pour la contrôler.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

### Medtronic Bluetooth

**Commentaires :** Cette pompe sortira dans les prochaines années et devrait être prise en charge par le logiciel Tidepool Loop ([voir cet article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Pompe Insuline Willcare ([Page d'accueil](http://en.shinmyungmedi.com))

**Etat de la boucle :** Pour le moment non candidat à la boucle, mais nous avons contacté leurs équipes et ils sont intéresser à étendre les fonctionnalités de leur pompe pour la rendre bouclable (pour le moment, je pense qu'il ne manque que les commandes de récupération et de définition des profils).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

**Remarque :** Comme l'entreprise est intéressée elle même à l'intégration à AAPS, elle pourrait mettre en œuvre cette implémentation elle-même.

* * *

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Pompe Cellnovo ([voir businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Remarque sur le produit :** Il semble que l'entreprise ait décidé d'abandonner le business des pompes. You can see more in this [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

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

If you have any other pumps you would like to see status on, please contact me (@andyrozman on gitter). In future release a lot of Pump configurations will be added to be Open loopable (you will be able to select Virtual Pump Type in configuration and your settings will be loaded - [Feature request #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).