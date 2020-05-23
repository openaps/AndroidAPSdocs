# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. En fin de compte, il y a quelques informations de ce qui est nécessaire pour qu'une pompe soit "bouclable".

## Pompes dont le support est en développement

### Insulet Omnipod (avec les "anciens" Pods Eros) ([Page d'accueil](https://www.myomnipod.com/en-gb/about/how-to-use))

**Etat de la boucle :** Non pris en charge nativement par AAPS pour le moment. Le décodage du protocole Omnipod est terminé : [OpenOmni](http://www.openomni.org/) et [OmniAPS Slack](https://omniaps.slack.com/)

**Autres implémentations :**

- Omnipy pour AndroidAPS (stable lors des tests, nécessite un Raspberry Pi ainsi qu'un RileyLink, et une version spécialement modifiées d'AndroidAPS) 
- OmniCore pour AndroidAPS (pas encore publié, le code C# fonctionne "nativement" sur Android, ne nécessite que le RileyLink et une version spécialement modifiées d'AndroidAPS - prochaine version du projet Omnipy).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (stable, validée, nécessite un RileyLink).

**Implémentations Java : **Aucune jusqu'à présent.

**Etat de l'implémentation AAPS :** Le travail sur un pilote Java natif pour Omnipod sur AAPS progresse [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (branche omnipod_eros). Il ne nécessite pas de Raspberry Pi. Vous pouvez suivre la progression sur [le OmniAPS Slack](https://omniaps.slack.com/) sur la chaine android-driver. Une première version d'essai publique a été publiée en janvier 2020, et le travail se poursuit pour la stabiliser. Version actuelle 0.3 (mars)

**Configuration matérielle requise pour AAPS :** RileyLink avec Omnipod firmware (2.x) et une antenne 433 MHz.

## Pompes qui sont Bouclable

### Omnipod DASH ([Page d'accueil](https://www.myomnipod.com/DASH))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est compatible de la Boucle, mais le protocole est inconnu à l'heure actuelle. La vente de la pompe a démarré officiellement en janvier 2019.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Commentaires :** Nous étudions le développement d'Omnipod DASH, mais le problème en ce moment est que Dash n'est pas encore disponible en Europe (où sont la plupart des développeurs de AAPS) et que le protocole de communication est inconnu. Nous allons essayer de procéder à un reverse engineering du fichier APK de l'application Dash officielle, afin de déterminer le fonctionnement de la communication, puis de la mettre en œuvre sur la base de ces résultats. Vous pouvez suivre ce qui se passe ici : [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), mais ne vous attendez pas à ce que cela soit disponible rapidement. C'est à l'heure actuelle uniquement le Proof Of Concept (jusqu'à la fin du jalon 2).

* * *

### Pompe Ypsomed ([Page d'accueil](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Etat de la boucle :** Version 1-1.5 (2ème trimestre 2018) ne sont pas candidates à la boucle. Bien qu'elles aient une communication bluetooth, il semble que la communication soit très limitée (unidirectionnelle : Pompe->Appli). Peut-être que cela changera dans les prochaines versions. Il semble que nous aurons une version bouclable début 2021, voir cet [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

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

### Pompe Insuline Willcare ([Homepage](http://en.shinmyungmedi.com))

**Etat de la boucle :** Pour le moment non candidat à la boucle, mais nous avons contacté leurs équipes et ils sont intéresser à étendre les fonctionnalités de leur pompe pour la rendre bouclable (pour le moment, je pense qu'il ne manque que les commandes de récupération et de définition des profils).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

**Remarque :** Comme l'entreprise est intéressée elle même à l'intégration à AAPS, elle pourrait mettre en œuvre cette implémentation elle-même.

* * *

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Pompe Cellnovo ([page d'accueil](https://www.cellnovo.com/en/homepage))

**Etat de la boucle :** Actuellement non prise en charge par aucun système de boucle. La pompe est un candidat à la boucle, mais comme le protocole est inconnu à l'heure actuelle, je ne vois pas cette pompe prise en charge rapidement.

**Configuration matérielle requise pour AAPS :** Probablement aucune. Elle dispose du Bluetooth.

**Remarque sur le produit :** Il semble que l'entreprise ait décidé d'abandonner le business des pompes. Vous pouvez en voir plus dans cet [article](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Pompes qui ne sont pas bouclable

### Tandem : (toutes) ([Page d'accueil](https://www.tandemdiabetes.com/))

**Etat de la boucle :** Non bouclable.

Il y quelque temps, il y avait un firmware appelé T:AP (mentionné dans cet [article](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&)), qui pouvait être utilisé en boucle (il n'est plus disponible car la pompe a été mise à niveau vers x2), mais il n'était pas destiné à un usage commercial, uniquement à titre expérimental (projets de recherche). J'ai parlé avec un des directeurs de l'entreprise et il m'a assuré que la pompe Tandem ne sera jamais ouverte, mais qu'ils ont créé leur propre système de boucle fermée, qu'ils appellent Contrôle-IQ (je pense qu'elle est déjà disponible aux USA, et devrait être disponible en 2020 en Europe).

* * *

### Animas Vibe

**Etat de la boucle :** Non bouclable. Aucune possibilité de contrôle à distance. **Remarque :** La pompe n'est plus vendue. L'entreprise a abandonné le business de la pompe (J&J).

* * *

### Animas Ping

**Etat de la boucle :** Non bouclable. Il a une possibilité de bolus, mais pas de DBT. **Remarque :** n'est plus vendues depuis la sortie de la Vibe.

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

Si vous avez d'autres pompes dont vous aimeriez voir l'état de bouclage, veuillez me contacter (@andyrozman sur gitter). Dans les versions à venir, de nombreuses configurations de pompe seront ajoutées afin de permettre une boucle ouverte (vous pourrez sélectionner un type de pompe virtuel dans la configuration et vos paramètres seront chargés - [Demande de fonctionnalité #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).