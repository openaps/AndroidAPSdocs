# Pompes Medtronic

**>>>> Le pilote de la pompe Medtronic est supporté à partir de la version 2.5 (master) d'AndroidAPS. Bien que ce soit le cas, le pilote Medtronic doit toujours être considéré comme une version bêta. Veuillez ne l'installer que si vous êtes un utilisateur expérimenté. Pour le moment, nous nous battons encore avec le problème du double bolus (nous recevons 2 bolus dans les traitements, ce qui lance le calcul de l'IA (si vous rencontrez ce bug, veuillez activer Double Bolus Logging dans le paramétrage du Medtronic et fournir vos logs)), ceci devrait être corrigé avec la prochaine version. <<<<**

* * *

Le pilote ne fonctionne qu'avec les anciennes pompes Medtronic (voir les détails ci-dessous). Ne fonctionne pas avec Medtronic 640G ou 670G.

* * *

Si vous avez commencé à utiliser le pilote Medtronic, merci de vous ajouter à cette [liste](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). C'est juste pour que nous puissions voir quels téléphones sont marchent bien et ceux qui sont moins bons (ou mauvais) pour ce pilote. Il y a une colonne appelée "BT restart". Il s'agit de vérifier si votre téléphone prend en charge l'activation/désactivation du BT, qui peut être utilisé lorsque la pompe n'est plus en mesure de se connecter, cela se produit de temps à autre. Si vous remarquez tout autre problème, veuillez le saisir dans la colonne "Comments".

* * *

## Configuration matérielle et logicielle requise

- **Téléphone :** le pilote Medtronic fonctionne avec n'importe quel téléphone qui supporte le BLE. **IMPORTANT : bien que le pilote fonctionne correctement sur tous les téléphones, ce n'est pas le cas pour l'activation/désactivation du Bluetooth (c'est obligatoire si vous perdez la connexion au RileyLink et le système ne peut pas se récupérer automatiquement ce qui arrive de temps en temps). Vous devez donc obtenir un appareil avec Android 6.0 - 8.1, dans le pire des cas, vous pouvez installer LineageOS 15.1 (requis 15.1 ou inférieur) sur votre téléphone. Nous sommes sur le problème avec Android 9, mais jusqu'à présent, nous n'avons pas trouvé de résolution (cela semble fonctionner sur certains modèles et pas sur d'autres, et parfois seulement de temps en temps).**
- **RileyLink/Gnarl :** Pour la communication avec la Pompe dont vous avez besoin dispositif qui convertit les commandes BT du Téléphone en commandes RF que la Pompe comprend. L'appareil qui fait cela s'appelle un RileyLink (vous pouvez l'obtenir ici [getrileylink.org](https://getrileylink.org/)). Vous avez besoin de la version stable de l'appareil, pour les plus anciens modèles c'est avec le firmware 0.9 (les versions plus anciennes peuvent ne pas fonctionner correctement) ou pour les modèles plus récents avec le firmware 2.2 (il y a des options de mise à jour disponible sur site RL). Si vous avez l'âme d'un aventurier, vous pouvez également essayer GNARL ([ici](https://github.com/ecc1/gnarl)), qui est une sorte de clone du RileyLink. 
- **Pompe :** Le pilote fonctionne uniquement avec les modèles et versions de firmware suivants : 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (firmware 2.4A ou inférieur)
    - 554/754 version EU (firmware 2.6A ou inférieur)
    - 554/754 version canadienne (firmware 2.7A ou inférieure)

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

![Paramètres MDT](../images/Medtronic01.png)

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

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arrise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### MGC

La MGC Medtronic n'est actuellement PAS prise en charge.

### Utilisation manuelle de la pompe

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Modifications de fuseau horaire, changements d'heure ou Voyage avec la pompe Medtronic et AndroidAPS

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## Questions fréquentes

### Puis-je voir le niveau de batterie du RileyLink / GNARL ?

Non. Pour le moment, aucun de ces appareils ne prend en charge cela et ce ne sera probablement pas le cas à l'avenir.

### GNARL remplace-t-il complètement RileyLink ?

Oui. L'auteur de GNARL a ajouté toutes les fonctions utilisées par le pilote Medtronic. Toutes les communications de Medtronic sont supportées à ce jour (juin/2019). GNARL ne peut pas être utilisé pour la communication avec Omnipod. L'inconvénient de GNARL est que vous devez le compiler vous-même, et que vous devez avoir une version compatible du hardware.

**Note de l'auteur :** Veuillez noter que le logiciel GNARL est encore expérimental et légèrement testé, il ne devrait pas être considéré comme aussi sûr à utiliser qu'un RileyLink.

### Où puis-je obtenir RileyLink ou GNARL ?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### Que faire si je perds la connexion à RileyLink et/ou à la pompe ?

1. Run "Wake Up and Tune" action, this will try to find right frequency to communicate with pump.
2. Disable Bluetooth, wait 10s and enable it again. This will force reconnecting to RileyLink.
3. Reset RileyLink, after you do that do not forget to run "Reset RileyLink Config" action.
4. Try 3 and 2 together.
5. Reset RileyLink and reset phone.

### Comment déterminer la fréquence utilisée par ma pompe

![Modèle de Pompe](../images/Medtronic06.png)

Si vous tournez votre pompe, à droite de la première ligne, vous verrez un code spécial à 3 lettres. Les deux premières lettres déterminent le type de fréquence et la dernière détermine la couleur. Voici les valeurs possibles pour la fréquence :

- NA - Amérique du Nord (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- CA - Canada (pour la fréquence, vous devez sélectionner "US & Canada (916 MHz)")
- WW - Worldwide (pour la fréquence, vous devez sélectionner "Worldwide (868 Mhz)")