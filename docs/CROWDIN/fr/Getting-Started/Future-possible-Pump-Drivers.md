# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes qui sont Bouclable

### Omnipod DASH ([Page d'accueil](https://www.myomnipod.com/DASH))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est compatible de la Boucle, mais le protocole inconnu à l'heure actuelle. La vente de la pompe a officiellement commencé en janvier 2019.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Comments:** Group of developers is looking into protocol (by reverse engineering original app) and into solution for AAPS, now that pump has become available all over world. There are no estimations yet, when this will be available, or even when first testing will begin. If you are interested in progress, or are willing to help, group can be reachable on WeAreNotWaiting discord. Mention your interest in androidaps group and someone will give you more info.

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Etat de la boucle :** Version 1-1.5 (2Q/2018) ne sont pas candidates à la boucle. Bien qu'elles aient le BT, la communication est très limitée et uni directionnelle: Pompe->App. Fin de 2021, il est prévu que la société sorte la nouvelle version appelée DOSE (1.6), ce qui permettra de définir des Bolus et des TBR à partir de leur application. Ils prévoient d'implémenter leur propre Boucle en 2022, avec leur propre application. Plus d'infos voir cette page [](https://www.mylife-diabetescare.com/en/loop-program.html)

**Configuration matérielle requise pour AAPS :** Aucune. Elle dispose du Bluetooth.

**Commentaires:** Il y a actuellement 2 groupes qui travaillent sur le driver, donc après la sortie de la nouvelle version, nous pouvons espérer avoir le support AAPS rapidement. Un groupe est soutenu par YpsoMed et aide aux essais médicaux qui se déroulent en Australie, le 2ème travaille indépendamment par "reverse engineering" de l'application originale.

* * *

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

* * *

### Medtrum A6/P6/C6 ([Page d'accueil](https://www.medtrum.com/product/nanopump.html))

**Etat de la boucle :** Candidat à la boucle. L'entreprise dispose de son propre système de demi-boucle limité (A6). Controlable via une application iPhone. Aucune application Android disponible pour le moment.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### EOFLOW ([Page d'accueil](http://www.eoflow.com/eng/main/main.html))

**Etat de la boucle :** Candidat à la boucle. La télécommande qu'ils utilisent est en fait un périphérique Android modifié. (La pompe n'est actuellement disponible qu'en Corée).

**Configuration matérielle requise pour AAPS :** Probablement aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Accu-Chek Solo ([Page d'accueil](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Etat de la boucle :** Candidat à la boucle.

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

**Commentaires :** Il y a quelques développeurs qui travaillent sur le décodage du protocole, mais pour l'instant ce n'est qu'en phases préliminaires.

* * *

### Tandem : t:slim X2 ([Page d'accueil](https://www.tandemdiabetes.com/))

**Etat de la boucle :** Non bouclable pour l'instant.

Alors que dans le passé, la société avait décidé d'interdire le contrôle de leurs pompes par des dispositifs externes, Il semble que ces dernières années les règles du jeu aient changées. L'entreprise a décidé de mettre à jour sa pompe t:slim X2 pour pouvoir la contrôler à distance (via l'application t:connect), ce qui signifie que des pistes sont ouvertes que nous puissions être en mesure d'intégrer la pompe dans AAPS à l'avenir. Un nouveau firmware de pompe est prévu bientôt (cette année ou l'année prochaine, avant la sortie de leur pompe sans tubulure t:sport). Il n'y a pas encore de détails sur les opérations possibles à partir de t:connect (Bolus sans aucun doute, tout le reste est inconnu).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Tandem : t:sport ([Page d'accueil](https://www.tandemdiabetes.com/about-us/pipeline))

**Etat de la boucle :** Candidat à la boucle. La pompe n'est pas encore sortie, mais le processus FDA est déjà en cours, donc elle devrait être disponible sans doute rapidement (aux US).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

* * *

### Medtronic Bluetooth

**Commentaires :** Cette pompe sortira dans les prochaines années et devrait être prise en charge par le logiciel Tidepool Loop ([voir cet article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Pompe Insuline Willcare ([Homepage](http://en.shinmyungmedi.com))

**Etat de la boucle :** Pour le moment non candidat à la boucle, mais nous avons contacté leurs équipes et ils sont intéresser à étendre les fonctionnalités de leur pompe pour la rendre bouclable (pour le moment, je pense qu'il ne manque que les commandes de récupération et de définition des profils).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

**Remarque :** Comme l'entreprise est intéressée elle même à l'intégration à AAPS, elle pourrait mettre en œuvre cette implémentation elle-même.

* * *

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Pompe Cellnovo ([voir businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Remarque sur le produit :** Il semble que l'entreprise ait décidé d'abandonner le business des pompes. Vous pouvez en voir plus dans cet [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompes qui ne sont pas bouclable

### Animas Vibe

**Etat de la boucle :** Non bouclable. Aucune possibilité de contrôle à distance. **Remarque :** La pompe n'est plus vendue. L'entreprise a abandonné le business de la pompe (J&J).

* * *

### Animas Ping

**Etat de la boucle :** Non bouclable. Il a une possibilité de bolus, mais pas de DBT. **Remarque** N'est plus vendue depuis la sortie de la Vibe.

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
- Annuler Bolus étendu
- Lire l'historique
- Lire le TDI

* * *

### Prise en charge d'autres pompes

Si vous avez d'autres pompes dont vous aimeriez voir l'état de bouclage, veuillez nous contacter sur discord.