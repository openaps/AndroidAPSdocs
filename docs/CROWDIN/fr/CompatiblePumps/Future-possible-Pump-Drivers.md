# Pilotes de pompe futurs (possibles)

Voici une liste de certaines pompes et leur statut de prise en charge dans l'un des systèmes en boucle, puis leur statut dans AAPS. À la fin, vous trouverez quelques informations sur ce qu'il faut pour qu'une pompe soit « bouclable ».

    {contents} Table des matières
    :depth: 1
    :local: true

## Pompes en phase d'intégration dans AAPS

**Bientôt disponible :** les pilotes de ces pompes sont en développement et fonctionnent déjà dans des versions de test.

Omnipod 5 ([Page d'accueil](https://www.omnipod.com/))

![Pilote Omnipod 5 en développement](../images/future-pumps/omnipod5-driver.png)

Tandem : t:Mobi ([Page d'accueil](https://www.tandemdiabetes.com/))

![Pilote Tandem t:Mobi en développement](../images/future-pumps/tandem-mobi-driver.png)

## Pompes qui sont bouclables

### Kaleido ([Page d'accueil](https://www.hellokaleido.com/))

**État de la boucle :** La pompe est candidate à la boucle, mais le protocole est inconnu pour le moment. Le fabricant ne s'intéresse pas à l'open source.

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

### Tandem : t:slim X3 ([Page d'accueil](https://www.tandemdiabetes.com/about-us/pipeline))

**État de la boucle :** Peut-être candidate à la boucle dans le futur. On espère que la t:slim X3 permettra un contrôle complet depuis un téléphone, ce qui rendrait possible sa prise en charge par AAPS, mais le calendrier et les fonctions sont encore inconnus.

**Configuration matérielle requise pour AAPS :** Aucune. Elle devrait avoir le Bluetooth.

**Commentaires :** Pas encore sortie. La t:slim X3 semble être sans cesse repoussée dans les plans de Tandem, au profit de la t:Mobi (y compris une version sans tubulure) et de la Sigi (leur pompe patch).

### Twiist ([Page d'accueil](https://www.twiist.com/))

**État de la boucle :** Candidate à la boucle.

**Configuration matérielle requise pour AAPS :** Aucune. Elle a le Bluetooth.

### Pompe à insuline Willcare ([Page d'accueil](http://shinmyungmedi.com/en/))

**État de la boucle :** Pour le moment, elle n'est pas candidate à la boucle, mais leur équipe nous a contactés et ils veulent faire évoluer leur pompe pour la rendre bouclable (pour le moment, je pense qu'il ne manque que les commandes de lecture et de définition du profil).

**Configuration matérielle requise pour AAPS :** Aucune. Il semble qu'elle dispose du Bluetooth.

**Commentaires :** Comme l'entreprise est intéressée par une intégration à AAPS, elle pourrait faire l'implémentation elle-même.

### Ypsopump ([Page d'accueil](https://www.ypsomed.com/))

**État de la boucle :** Candidate à la boucle. Le protocole Bluetooth de la pompe a été décodé par rétro-ingénierie par la communauté ; il est donc possible en principe de communiquer avec elle.

**Configuration matérielle requise pour AAPS :** Aucune. Elle a le Bluetooth.

**Commentaires :** L'Ypsopump protège sa communication Bluetooth avec un chiffrement tiers très fort. Travailler avec ce chiffrement est techniquement difficile, ce qui rend dur le développement et la maintenance d'un pilote fiable. Il n'existe pas encore de pilote AAPS prêt pour l'utilisation réelle.

## Pompes plus vendues (les entreprises ne fonctionnent plus)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Commentaires :** Fin de la prise en charge en mars 2025.

## Pompes qui ne sont pas bouclables

### Medtronic Bluetooth

**Commentaires :** Medtronic s'est [retiré](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem : t:slim X2 ([Page d'accueil](https://www.tandemdiabetes.com/))

**Commentaires :** Le protocole Bluetooth de Tandem a été décodé par rétro-ingénierie, mais sur la t:slim X2, seuls les bolus peuvent être délivrés — le débit basal ne peut pas être contrôlé — elle ne peut donc pas être utilisée de façon sûre en boucle. Cela a peu de chances de changer, sauf si Tandem permet le contrôle complet de la X2 depuis un téléphone, ce qui arrivera plus probablement avec la t:slim X3.

### Accu-Chek Solo

**Commentaires :** La communauté n'a pas réussi à communiquer avec la pompe Solo.

## Exigences pour que les pompes soient bouclables

**Prérequis**

- La pompe doit prendre en charge un contrôle à distance (Bluetooth, fréquence radio, etc.).
- Le protocole est piraté/documenté/etc.

**Exigences minimales**

- Définir le Débit de Basal Temporaire
- Obtenir l'état de la pompe
- Annuler le Débit de Basal Temporaire

**Pour oref1 (SMB) ou les bolus :**

- Définir le Bolus

**Souhaitable**

- Annuler le Bolus en cours
- Obtenir le profil de basal (presque requis)
- Définir le profil de basal (souhaitable)
- Lire l'historique 

**Autres (pas nécessaire, mais souhaitable)**

- Définir un bolus étendu
- Annuler Bolus étendu
- Lire l'historique
- Lire la DTQ

### Prise en charge d'autres pompes

Si vous voulez connaître l'état d'autres pompes, contactez-nous sur Discord.