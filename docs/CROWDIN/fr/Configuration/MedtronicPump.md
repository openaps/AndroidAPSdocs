# Pompes Medtronic

**>>>> Le pilote de la pompe Medtronic est supporté à partir de la version 2.5 (master) d'AndroidAPS. Bien que ce soit le cas, le pilote Medtronic doit toujours être considéré comme une version bêta. Veuillez ne l'installer que si vous êtes un utilisateur expérimenté. Pour le moment, nous nous battons encore avec le problème du double bolus (nous recevons 2 bolus dans les traitements, ce qui lance le calcul de l'IA (si vous rencontrez ce bug, veuillez activer Double Bolus Logging dans le paramétrage du Medtronic et fournir vos logs)), ceci devrait être corrigé avec la prochaine version. <<<<**

* * *

Le pilote ne fonctionne qu'avec les anciennes pompes Medtronic (voir les détails ci-dessous). Ne fonctionne pas avec Medtronic 640G ou 670G.

* * *

Si vous avez commencé à utiliser le pilote Medtronic, merci de vous ajouter à cette [liste](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). C'est juste pour que nous puissions voir quels téléphones sont marchent bien et ceux qui sont moins bons (ou mauvais) pour ce pilote. Il y a une colonne appelée "BT restart". Il s'agit de vérifier si votre téléphone prend en charge l'activation/désactivation du BT, qui peut être utilisé lorsque la pompe n'est plus en mesure de se connecter, cela se produit de temps à autre. Si vous remarquez tout autre problème, veuillez le saisir dans la colonne "Comments".

* * *

## Configuration matérielle et logicielle requise

- **Téléphone :** le pilote Medtronic fonctionne avec n'importe quel téléphone qui supporte le BLE. **IMPORTANT : bien que le pilote fonctionne correctement sur tous les téléphones, ce n'est pas le cas pour l'activation/désactivation du Bluetooth (c'est obligatoire si vous perdez la connexion au RileyLink et le système ne peut pas se récupérer automatiquement ce qui arrive de temps en temps). Vous devez donc obtenir un appareil avec Android 7.0 - 8.1, dans le pire des cas, vous pouvez installer LineageOS 15.1 (requis 15.1 ou inférieur) sur votre téléphone. Nous sommes sur le problème avec Android 9, mais jusqu'à présent, nous n'avons pas trouvé de résolution (cela semble fonctionner sur certains modèles et pas sur d'autres, et parfois seulement de temps en temps).**
- **RileyLink/Gnarl :** Pour la communication avec la Pompe dont vous avez besoin dispositif qui convertit les commandes BT du Téléphone en commandes RF que la Pompe comprend. L'appareil qui fait cela s'appelle un RileyLink (vous pouvez l'obtenir ici [getrileylink.org](https://getrileylink.org/)). Vous avez besoin de la version stable de l'appareil, pour les plus anciens modèles c'est avec le firmware 0.9 (les versions plus anciennes peuvent ne pas fonctionner correctement) ou pour les modèles plus récents avec le firmware 2.2 (il y a des options de mise à jour disponible sur site RL). Si vous avez l'âme d'un aventurier, vous pouvez également essayer GNARL ([ici](https://github.com/ecc1/gnarl)), qui est une sorte de clone du RileyLink. 
- **Pompe :** Le pilote fonctionne uniquement avec les modèles et versions de firmware suivants : 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ou inférieur)
    - 554/754 version EU (firmware 2.6A ou inférieur)
    - 554/754 version canadienne (firmware 2.7A ou inférieure)
- La vérification du firmware est décrite dans la [documentation d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) et la [documentation de Loop](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Configuration de la pompe

- **Activer le mode distant sur la Pompe** (Utilitaires-> Remote Options, Sélectionnez Oui, et à l'écran suivant faites Ajouter ID et mettez un id factice (111111 par example). Vous devez avoir au moins un ID dans cette liste d'identifiants distants. Ces options peuvent varier selon les différents modèles de pompe. Cette étape est importante, car une fois définie, la pompe écoutera plus souvent la communication à distance.
- **Définir Basale Max** sur votre Pompe à votre "niveau de basale max entré dans votre profil STD" * 4 (si vous voulez avoir 400% DBT comme max). Ce nombre doit être inférieur à 35 (comme vous pouvez le voir dans la pompe).
- **Définir Bolus Max** sur votre pompe (25 max)
- **Définir profil sur STD**. Ce sera le seul profil que nous allons utiliser. Vous pouvez également désactiver.
- **Définir type DBT** sur Absolu (pas pourcentage)

## Configuration du téléphone / AndroidAPS

- **Ne pas associer RileyLink à votre téléphone.** Si vous avez appairé votre RileyLink, AndroidAPS ne pourra pas le trouver dans la configuration.
- Désactiver la rotation automatique sur votre téléphone (sur certains appareils, la rotation automatique redémarre le BT, ce que nous ne voulons pas).
- Vous pouvez configurer la pompe avec AndroidAPS de deux façons : 

1. Utilisation de l'assistant (sur une nouvelle installation)
2. Directement dans l'onglet de configuration (roue crantée sur le pilote Medtronic)

Si vous faites une nouvelle installation, vous serez directement dans l'assistant. Parfois, si votre connexion BT ne fonctionne pas parfaitement (impossible de se connecter à la pompe), vous ne pourrez pas terminer la configuration. Dans ce cas, sélectionnez la pompe virtuelle et une fois l'assistant terminé, vous pouvez utiliser l'option 2, qui permet de contourner la détection de la pompe.

![Paramètres MDT](../images/Medtronic01a.png)

Vous devez définir les éléments suivants : (voir photo ci-dessus)

- **Numéro de série de la pompe** : Vous pouvez trouver cela sur le côté arrière, entrée SN. Vous ne devez prendre que les chiffres, votre numéro de série est composé de 6 chiffres.
- **Type de pompe** : quel type de pompe vous avez (i.e. 522). 
- **Fréquence de la pompe** : Il y a deux versions de la pompe Medtronic utilisant des fréquences différentes (si vous n'êtes pas certain de quelle fréquence la pompe utilise, regardez [FAQ](../Configuration/MedtronicPump#faq)) : 
    - pour les US & le Canada, la fréquence utilisée est 916 Mhz
    - pour le reste du monde, la fréquence utilisée est de 868 Mhz
- **Bolus Max sur la Pompe (U)** (en une heure) : doit avoir la même valeur que sur la pompe. Cela limite la quantité d'insuline que vous pouvez avoir en Bolus. Si vous allez au delà, le Bolus ne sera pas défini et une erreur sera retournée. Le Max qui peut être utilisé est 25, mais surtout veuillez définir une valeur correcte pour vous-même afin de ne pas avoir de surdose d'insuline.
- **Basal Max sur la Pompe (U/h)** : Doit avoir la même valeur que sur la pompe. Cela limite la quantité de basal que vous pouvez avoir en une heure. Par exemple, si vous voulez avoir le DBT max fixé à 500% et que le débit de basal le plus élevé de votre profil est de 1.5 U, alors vous devez définir le Basal Max à au moins 7,5. Si ce paramètre est incorrect (par exemple, si l'un des débit de basal était au-dessus de cette valeur), la pompe renverrai une erreur.
- **Délai avant de démarrer le Bolus (s)** : C'est le délai avant que le bolus ne soit envoyé à la pompe, ainsi si vous changez d'avis, vous pouvez l'annnuler. L'annulation d'un bolus lors le bolus est en cours d'administration n'est pas pris en charge par la pompe (si vous voulez arrêter de bolus lors de l'exécution, vous devez suspendre la pompe et la reprendre ensuite).
- **Encodage Medtronic** : Ce paramètre défini si l'encodage 4b6b fait par les appareils Medtronic doit être fait dans AndroidAPS ou dans le RileyLink. Si vous avez un RileyLink avec un firmware 2.x, la valeur par défaut sera d'utiliser l'encodage matériel (= fait par le RileyLink), si vous avez un firmware 0.x, ce paramètre sera ignoré.
- **Type de batterie (Power View)** : Si vous voulez voir la charge de la pile de votre pompe, vous devez sélectionner le type de pile que vous utilisez (actuellement Lithium ou Alkaline sont supportées), cela changera l'affichage pour afficher le pourcentage et la tension.
- **Configuration RileyLink** : Vous trouverez votre appareil RileyLink/GNARL.
- **Définir des Basales temporaires neutres** est une option qui peut aider à empêcher les pompes Medtronic de biper à chaque heure. Si cette option est activée, elle annule une basale temporaire avant la fin de l'heure pour éviter que cela ne se produit.

## Onglet MEDTRONIC (MDT)

![Onglet MDT](../images/Medtronic02.png)

Sur l'onglet de la pompe, vous pouvez voir plusieurs lignes qui affichent l'état actuel des pompes (et des connexions).

- **État RileyLink**: Il affiche l'état de la connexion RileyLink. Le téléphone doit être connecté en permanence au RileyLink.
- **État de la pompe** : État de la connexion avec la pompe, il peut avoir plusieurs valeurs, mais surtout nous allons voir une icône de veille (lorsque la connexion à la pompe n'est pas active), lorsque la commande est en train de s'exécuter, nous pouvons voir "Réveil en cours", quand AAPS essaye se connecter à votre pompe ou une description de toute commande qui pourrait fonctionner sur la pompe (ex.: Obtenir l'heure de la pompe, Paramétrer TBR, etc).
- **Niveau batterie** : Affiche l'état de la pile en fonction de votre configuration. Il peut s'agir d'une simple icône indiquant si la pile est vide ou pleine (rouge si la pile devient critique, moins de 20%), ou un pourcentage et une tension.
- **Dernière connexion** : Heure de la dernière connexion réussie à la pompe.
- **Dernier Bolus** : Heure du dernier bolus délivré.
- **Taux du débit Basal** : Il s'agit du débit basal en cours sur la pompe à cette heure.
- **Basal temporaire** : Basal temporaire en cours d'exécution ou vide.
- **Réservoir** : Indique la quantité d'insuline présente dans le réservoir (mise à jour au minimum toutes les heures).
- **Erreurs** : Affiche une erreur en cas d'incident (le plus souvent il s'agit d'une erreur dans la configuration).

Sur la partie inférieure, nous avons 3 boutons :

- **Actualiser** est pour rafraîchir l'état. Cette action ne doit être utilisée que lorsque la connexion n'a pas été établie pendant longtemps, car cette action va réinitialiser les données relatives à la pompe (extraction de l'historique, heure de la pompe, récupération du profil, état de la pile, etc).
- **Historique de la Pompe** : Affiche l'historique de la pompe (voir [ci-dessous](../Configuration/MedtronicPump#pump-history))
- **État du RileyLink**: Affiche l'état du RileyLink (voir [ci-dessous](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Historique pompe

![Boîte de dialogue Historique pompe](../images/Medtronic03.png)

L'historique de la pompe est récupéré toutes les 5 minutes et stocké localement. L'historique est conservé sur les dernières 24 heures, donc les données les plus ancienne sont supprimées quand de nouvelles données sont ajoutées. Il s'agit d'un moyen simple de voir l'historique de la pompe (certaines entrées de la pompe peuvent ne pas être affichées, car elles ne sont pas pertinentes - par ex. la configuration des fonctions qui ne sont pas utilisées par AndroidAPS).

## État RL (RileyLink État)

![État RileyLink - Paramètres](../images/Medtronic04.png) ![État RileyLink - Historique](../images/Medtronic05.png)

La boîte de dialogue a deux onglets :

- **Paramètres** : Affiche les paramètres relatifs au RileyLink : adresse configurée, périphérique connecté, état de connexion, erreur de connexion et versions du firmware RileyLink. Le type d'appareil est toujours Pompe Medtronic, Modèle affiche votre modèle de pompe, Numéro de série est le numéro de la pompe configuré, Fréquence de pompe indique la fréquence utilisée, Dernière fréquence est la dernière fréquence utilisée.
- **Historique** : Affiche l'historique des communications, pour le RileyLink cela concerne les changements d'état et pour le Medtronic les commandes envoyées à la pompe.

## Actions

Lorsque le pilote Medtronic est sélectionné, 3 actions possibles peuvent être ajoutées à l'onglet Actions :

- **Réveil et Réglage** - Si vous voyez que AndroidAPS ne s'est pas connectée à votre pompe pendant un certain temps (il doit le faire toutes les 5 minutes), vous pouvez forcer la connexion. Cela tentera de communiquer avec la pompe, par la recherche de toutes les sous-fréquences sur laquelle la Pompe peut être contactée. S'il en trouve une, il la définira comme la fréquence par défaut. 
- **Réinitialiser la config. RileyLink** - Si vous réinitialisez votre RileyLink/GNARL, vous devez utiliser cette action pour que le périphérique puisse être reconfiguré (jeu de fréquences, types de fréquence, type d'encodage).
- **Effacer le bloc Bolus** - Lorsque vous démarrez le bolus, un bloc bolus est configuré, ce qui empêche l'envoi de toute commande à la pompe. Si vous arrêtez votre pompe et que vous la redémarrez (pour annuler le bolus), vous pouvez ensuite supprimer ce bloc. Cette option n'est présente que lorsqu'un bolus est en cours... 

## Remarques importantes

### Utilisateurs OpenAPS

Lorsque vous commencez à utiliser AndroidAPS, le contrôleur principal est AndroidAPS et toutes les commandes doivent passer par lui. L'envoi de bolus doit passer par AAPS et ne pas être fait sur la pompe. Nous avons un code en place qui détecte n'importe quelle commande exécutée sur la pompe, mais si vous pouvez vous devez éviter cela (je pense que nous avons corrigé tous les problèmes avec l'historique de la pompe et la synchronisation avec l'historique AAPS, mais de petits problèmes peuvent encore arriver, surtout si vous utilisez la "configuration" comme elle n'était pas destinée à être utilisée). Depuis que j'ai commencé à utiliser AndroidAPS avec ma pompe, je n'ai pas touché la pompe, sauf quand je dois changer le réservoir, et c'est de cette façon qu'il faut utiliser AndroidAPS.

### Journaux

Étant donné que le pilote Medtronic est très récent, vous devez activer les journaux, afin que nous puissions déboguer et corriger les problèmes, si de nouveaux devaient se produire. Cliquez sur l'icône hamburger dans le coin supérieur gauche, sélectionnez Maintenance et Paramètres Journal. Les options Pump, PumpComm, PumpBTComm doivent être cochées.

### RileyLink/GNARL

Lorsque vous redémarrez RileyLink ou GNARL, vous devez effectuer une nouvelle opération de Réglage (action "Réveil et Réglage"), ou renvoyer les paramètres de communication (action "Réinitialiser la config. RileyLink"), sinon la communication échouera.

### MGC

La MGC Medtronic n'est actuellement PAS prise en charge.

### Utilisation manuelle de la pompe

Vous devez normalement éviter de faire des traitements manuels sur votre pompe. Toutes les commandes (bolus, DBT) doivent passer par AndroidAPS, mais s'il vous arrive de faire des commandes manuelles, n'exécutez PAS de commandes à une fréquence inférieure à 3 minutes (donc si vous voulez faire 2 bolus, pour quelque raison que ce soit, le deuxième doit être lancé au minimum 3 minutes après le premier).

## Modifications de fuseau horaire, changements d'heure ou Voyage avec la pompe Medtronic et AndroidAPS

Une chose importante à savoir est que vous ne devez jamais désactiver la boucle quand vous voyagez (sauf si votre MGC ne marche pas en mode hors connexion). AAPS détecte automatiquement les changements d'heure et envoie une commande à la pompe pour la changer quand l'heure du téléphone est modifiée.

Maintenant si vous voyagez vers l'Est et vous changez de fuseau horaire avec l'ajout d'heures (par ex. de GMT+0 à GMT+2), l'historique de la pompe n'aura pas de problème et vous n'avez pas à vous inquiéter... Mais si vous voyagez vers l'ouest et que vos fuseaux horaires changent en supprimant les heures (de GMT +2 à GMT+0), alors la sychronisation peut poser des problèmes. En clair, cela signifie que pour les prochaines x heures, vous devez être prudent, parce que votre IA, peut être mal calculée.

Nous sommes conscient de ce problème, et nous étudions actuellement une solution possible (voir https://github.com/andyrozman/RileyLinkAAPS/issues/145), mais pour l'instant, ayez en tête cette information lorsque vous voyagez.

## Questions fréquentes

### Puis-je voir le niveau de batterie du RileyLink / GNARL ?

Non. Pour le moment, aucun de ces appareils ne prend en charge cela et ce ne sera probablement pas le cas à l'avenir.

### GNARL remplace-t-il complètement RileyLink ?

Oui. L'auteur de GNARL a ajouté toutes les fonctions utilisées par le pilote Medtronic. Toutes les communications de Medtronic sont supportées à ce jour (juin/2019). GNARL ne peut pas être utilisé pour la communication avec Omnipod. L'inconvénient de GNARL est que vous devez le compiler vous-même, et que vous devez avoir une version compatible du hardware.

**Note de l'auteur :** Veuillez noter que le logiciel GNARL est encore expérimental et légèrement testé, il ne devrait pas être considéré comme aussi sûr à utiliser qu'un RileyLink.

### Où puis-je obtenir RileyLink ou GNARL ?

Comme indiqué précédemment, vous pouvez obtenir ces appareils ici :

- RileyLink - Vous pouvez vous le procurer ici - [getrileylink.org](https://getrileylink.org/).
- GNARL - Vous pouvez obtenir des informations ici, mais le matériel doit être commandé ailleurs ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### Que faire si je perds la connexion à RileyLink et/ou à la pompe ?

1. Exécutez l'action "Réveil et Réglage", cela va essayer de trouver la bonne fréquence pour communiquer avec la pompe.
2. Désactivez le Bluetooth, attendez 10s et réactivez-le. Cela va forcer la reconnexion au RileyLink.
3. Réinitialisez le RileyLink, après cela, n'oubliez pas d'exécuter l'action "Réinitialiser la config. RileyLink".
4. Essayez 3 et 2 ensemble.
5. Réinitialisez RileyLink et réinitialisez le téléphone.

### Comment déterminer la fréquence utilisée par ma pompe

![Modèle de Pompe](../images/Medtronic06.png)

Si vous tournez votre pompe, à droite de la première ligne, vous verrez un code spécial à 3 lettres. Les deux premières lettres déterminent le type de fréquence et la dernière détermine la couleur. Voici les valeurs possibles pour la fréquence :

- NA - Amérique du Nord (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- CA - Canada (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- WW - Worldwide (pour la fréquence, vous devez sélectionner "Worldwide (868 Mhz)")