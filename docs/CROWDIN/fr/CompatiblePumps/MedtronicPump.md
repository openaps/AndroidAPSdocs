# Pompes Medtronic

Le pilote ne fonctionne pas avec les nouveaux modèles, y compris tous les modèles se terminant par G (530G, 600-series [630G, 640G, 670G], 700-series [770G, 780G], etc.).

Les combinaisons de modèles et de firmware suivantes sont compatibles :

- 512/712 (tout firmware)
- 515/715 (tout firmware)
- 522/722 (tout firmware)
- 523/723 (firmware 2.4A ou inférieur)
- 554/754 version EU (firmware 2.6A ou inférieur)
- 554/754 version canadienne (firmware 2.7A ou inférieur)

Vous pouvez trouver comment vérifier le firmware de la pompe dans la [documentation d'OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) et la [documentation de Loop](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

    {contents} Table des matières
    :depth: 1
    :local: true

## Fonctionnalités de la pompe avec AAPS

* Nécessite un appareil compatible RileyLink pour communiquer avec **AAPS**.
* Gestion automatique de l'heure d'été et des fuseaux horaires.

## Configuration matérielle et logicielle requise

- **Téléphone :** Le pilote Medtronic devrait fonctionner avec n'importe quel téléphone Android prenant en charge les connexions Bluetooth. **IMPORTANT : la gestion du Bluetooth diffère selon les fabricants de téléphones, donc le comportement peut changer d'un modèle de téléphone à l'autre. Par exemple, certains téléphones géreront différemment l'activation/la désactivation du Bluetooth. Cela peut gêner l'utilisateur quand AAPS doit se reconnecter à votre appareil de type Rileylink.**
- **Appareil compatible RileyLink :** les téléphones Android ne peuvent pas communiquer avec les pompes Medtronic sans un appareil séparé qui gère les communications. Cet appareil sera relié à votre téléphone via Bluetooth et à votre pompe via une connexion radio compatible. Le premier de ces appareils a été appelé un Rileylink mais un certain nombre d'autres options sont maintenant disponibles qui peuvent offrir des fonctionnalités supplémentaires.
    
    - Rileylink disponible sur [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink disponible sur [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (multiples options de modèles) disponible sur [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (demande un peu plus de bricolage), détails disponibles sur [github.com](https://github.com/ecc1/gnarl)

Un tableau comparatif des différents appareils compatibles Rileylink est disponible sur [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Configuration de la pompe

Les réglages suivants doivent être faits sur la pompe pour qu'AAPS puisse envoyer des commandes à distance. Les étapes pour faire chaque réglage sur une pompe Medtronic 715 sont indiquées entre parenthèses pour chaque paramètre. Les étapes exactes peuvent varier selon le type de pompe et/ou la version du firmware.

- **Activer le mode à distance sur la pompe** (sur la pompe, appuyez sur Act et allez dans Utilities -> Remote Options, choisissez On, puis dans l'écran suivant faites Add ID et ajoutez un ID quelconque, par exemple 111111). Au moins un ID doit figurer dans la liste Remote ID pour que la pompe accepte une communication à distance.
- **Réglez le basal maximum** (sur la pompe, appuyez sur Act et allez dans Basal puis choisissez Max Basal Rate). Par exemple, régler cette valeur à quatre fois votre débit basal standard maximum permet un débit basal temporaire de 400 %. La valeur maximale acceptée par la pompe est 34,9 unités par heure.
- **Réglez le bolus maximum** (sur la pompe, appuyez sur Act et allez dans Bolus puis choisissez Max Bolus). C'est le plus gros bolus que la pompe acceptera. La valeur maximale acceptée par la pompe est 25.
- **Réglez le profil sur Standard**. (sur la pompe, appuyez sur Act et allez dans Basal puis Select Patterns) La pompe n'a besoin que d'un seul profil, car AAPS gère les différents profils sur votre téléphone. Aucun autre profil n'est nécessaire.
- **Réglez le type de débit basal temporaire** (sur la pompe, appuyez sur Act et allez dans Basal puis Temp Basal Type). Choisissez Absolute (pas Percent).

## Configuration Medtronic du téléphone/d'AAPS

- **N'associez pas l'appareil compatible RileyLink depuis le menu Bluetooth de votre téléphone.** Une association depuis le menu Bluetooth du téléphone empêche AAPS de voir votre appareil compatible Rileylink quand vous suivez les instructions ci-dessous.
- Désactivez la rotation automatique de l'écran sur votre téléphone. Sur certains appareils, la rotation automatique de l'écran redémarre les sessions Bluetooth, ce qui pose des problèmes avec votre pompe Medtronic. 
- Il y a deux façons de configurer votre pompe Medtronic dans AAPS :

1. Utiliser l'assistant de configuration lors d'une nouvelle installation
2. Dans **Configuration** > **Pompe**, en choisissant **Medtronic**
    
    ![Configuration > Pompe avec le plugin Medtronic](../images/v4/Configuration/configuration_pump_list_3.png)
    
    Une fois choisie, la carte **Medtronic** affiche deux boutons, **Paramètres** et **Ouvrir le plugin** :
    
    ![Le plugin Medtronic choisi dans Configuration > Pompe](../images/v4/Pumps/medtronic_enabled.png)
    
    **Paramètres** ouvre les réglages du pilote Medtronic :
    
    ![Réglages du pilote Medtronic](../images/v4/Pumps/medtronic_settings.png)
    
    **Ouvrir le plugin** (ou **Gestion** > **Pompe**) ouvre l'écran de la pompe Medtronic. Avant l'appairage d'une pompe, il ressemble à ceci :
    
    ![Écran de la pompe Medtronic avant l'appairage](../images/v4/Pumps/medtronic_pump_screen.png)

Lors de la configuration de votre pompe Medtronic avec l'assistant de configuration, il est possible que vous ne puissiez pas terminer la configuration à cause de problèmes Bluetooth (p. ex. vous n'arrivez pas à vous connecter à la pompe). Si cela arrive, choisissez l'option pompe virtuelle pour terminer la configuration, puis poursuivez le dépannage en utilisant l'option 2.

Pour configurer AAPS avec votre pompe Medtronic, vous devez régler les éléments suivants dans **Paramètres** (voir l'image des réglages ci-dessus) :

- **Numéro de série de pompe** : indiqué au dos de votre pompe, il commence par SN. Saisissez uniquement les 6 chiffres affichés, sans aucune lettre (p. ex. 123456).
- **Type de pompe** : le modèle de pompe que vous utilisez (p. ex. 522). 
- **Fréquence de pompe** : il y a deux options, selon la région où votre pompe a été distribuée à l'origine. Consultez la [FAQ](#MedtronicPump-faq) si vous ne savez pas quelle option choisir) : 
    - pour États-Unis & Canada, la fréquence utilisée est 916 MHz
    - pour Mondial, la fréquence utilisée est 868 MHz
- **Basal Max sur Pompe (U/h)** : cette valeur doit être identique au réglage de votre pompe (voir Configuration de la pompe ci-dessus). Là encore, ce réglage doit être choisi avec soin, car il détermine la quantité d'insuline qu'AAPS peut délivrer via votre débit basal. Ce réglage fixe en pratique le débit basal temporaire maximum. Par exemple, régler cette valeur à quatre fois votre débit basal standard maximum permet un débit basal temporaire de 400 %. La valeur maximale acceptée par la pompe est 34,9 unités par heure.
- **Bolus Max sur Pompe (U)** (sur une heure) : cette valeur doit être identique au réglage de votre pompe (voir Configuration de la pompe ci-dessus). Ce réglage doit être bien réfléchi, car il détermine le plus gros bolus qu'AAPS pourra jamais faire.
- **Délai avant le début du Bolus (s)** : le nombre de secondes entre la demande d'un bolus et l'envoi réel de la commande à la pompe. Ce délai permet à l'utilisateur d'annuler le bolus si une commande de bolus a été envoyée par erreur. Il n'est pas possible d'annuler via AAPS un bolus qui a commencé. La seule façon d'annuler un bolus déjà commencé est de suspendre la pompe manuellement, puis de la relancer.
- **Encodage Medtronic** : détermine qui réalise l'encodage Medtronic. Il est préférable de choisir l'encodage matériel (c.-à-d. réalisé par l'appareil compatible RileyLink), car moins de données sont envoyées. Choisir l'encodage logiciel (c.-à-d. réalisé par AAPS) peut aider si vous constatez des déconnexions fréquentes. Ce réglage est ignoré si vos appareils RileyLink ont un firmware en version 0.x.
- **Type de batterie (vue d'alimentation)** : pour déterminer correctement le niveau de charge restant, vous devez choisir le type de pile AAA utilisée. Si une autre valeur que la vue simple est choisie, AAPS affiche le niveau de pile restant calculé, en pourcentage et en volts. Les options suivantes sont disponibles :
    
    - Non sélectionné (vue simple)
    - Alcaline (vue étendue)
    - Lithium (vue étendue)
    - NiZn (vue étendue)
    - NiMH (vue Étendue)
- **Utiliser le scan** : active la recherche Bluetooth avant la connexion à vos appareils compatibles Rileylink. Cela devrait rendre la connexion à l'appareil plus fiable.

- **Afficher le niveau de batterie transmis par OrangeLink/EmaLink/DiaLink** : cette fonction n'est prise en charge que par les appareils récents, comme l'EmaLink ou l'OrangeLink. La valeur est affichée comme **Batterie RileyLink** sur l'écran de la pompe Medtronic.
- **Définir des basals temp neutres** : par défaut, les pompes Medtronic émettent un bip à chaque heure pleine quand un débit basal temporaire est actif. Activer cette option peut réduire le nombre de bips entendus : un débit basal temporaire est interrompu au changement d'heure pour supprimer le bip.

(pairing-your-rileylink-compatible-device)=

### Appairer votre appareil compatible RileyLink

Votre appareil compatible RileyLink s'appaire depuis l'écran de la pompe Medtronic, pas depuis le menu Bluetooth de votre téléphone :

- Ouvrez l'écran de la pompe (**Gestion** > **Pompe**, ou **Ouvrir le plugin** sur la carte Medtronic dans **Configuration** > **Pompe**).
- Touchez **Appairer le RileyLink**. **AAPS** recherche les appareils compatibles RileyLink à proximité.
- Touchez votre appareil dans la liste. Quand **RileyLink appairé avec succès** s'affiche, touchez **OK**.

## Écran de la pompe Medtronic

Pour ouvrir l'écran de la pompe Medtronic, allez dans **Gestion** > **Pompe**. L'écran de la pompe affiche l'état actuel de la pompe, ainsi que quelques actions propres à Medtronic (voir l'image de l'écran de la pompe ci-dessus).

- **État du RileyLink** : l'état actuel de la connexion entre votre téléphone et l'appareil compatible RileyLink. Il doit toujours indiquer Connecté. Tout autre état peut demander une action de l'utilisateur. 
- **Batterie RileyLink** : le niveau actuel de la batterie de votre EmaLink ou OrangeLink. Affiché seulement si **Afficher le niveau de batterie transmis par OrangeLink/EmaLink/DiaLink** est activé dans les réglages Medtronic.
- **État de la pompe** : l'état actuel de la connexion à la pompe. Comme la pompe n'est pas connectée en permanence, c'est surtout l'icône de veille qui s'affiche. Il existe d'autres états possibles, comme « Réveil en cours » quand AAPS essaie d'envoyer une commande, ou d'autres commandes de pompe comme « Obtenir l'heure », « Définir DBT », etc.
- **Pile** : affiche l'état de la pile selon la valeur choisie pour **Type de batterie (vue d'alimentation)** dans les réglages Medtronic.
- **Dernière connexion** : il y a combien de temps a eu lieu la dernière connexion réussie à la pompe.
- **Dernier bolus** : il y a combien de temps le dernier bolus a été délivré avec succès.
- **Débit de Basal** : le débit basal de base qui tourne sur la pompe à cette heure dans votre profil actif.
- **Basale Temp** : le débit basal temporaire en cours, qui peut être de 0 unité par heure.
- **Réservoir** : Indique la quantité d'insuline présente dans le réservoir (mise à jour au minimum toutes les heures).
- **Erreurs** : Affiche une erreur en cas d'incident (le plus souvent il s'agit d'une erreur dans la configuration).

En bas de l'écran, il y a ces boutons :

- **Actualiser** sert à actualiser l'état actuel de la pompe. À utiliser seulement si la connexion a été perdue pendant longtemps, car cela demande une actualisation complète des données (lecture de l'historique, lecture/réglage de l'heure, lecture du profil, lecture de l'état de la pile, etc.).
- **Appairer le RileyLink** : trouve et appaire votre appareil compatible RileyLink (voir [ci-dessus](#pairing-your-rileylink-compatible-device)).
- **Historique pompe** : affiche l'historique de la pompe (voir [ci-dessous](#MedtronicPump-pump-history)).
- **Stats RL** : affiche les statistiques RL (voir [ci-dessous](#MedtronicPump-rl-status-rileylink-status)).
- **Réveil et Réglage** et **Réinitialiser le RileyLink** : voir [Actions](#medtronic-actions) ci-dessous.
- **Effacer le bloc Bolus** : affiché seulement peu de temps après un bolus, pendant qu'**AAPS** attend que la pompe ait fini de le délivrer. Toucher ce bouton met fin à cette attente.

(MedtronicPump-pump-history)=

## Historique pompe

![Écran de l'historique pompe avec ses boutons de filtre](../images/Medtronic03.png)

L'historique de la pompe est récupéré toutes les 5 minutes et stocké localement. Seules les 24 dernières heures d'historique sont conservées. Cela permet de voir facilement le comportement de la pompe si nécessaire. Seuls les éléments utiles à AAPS sont conservés ; les fonctions de configuration sans intérêt pour AAPS n'y figurent pas.

Touchez **Historique pompe** sur l'écran de la pompe pour l'ouvrir. Par défaut, **Tous** est sélectionné. Touchez un des boutons de filtre en haut (par exemple **Bolus**, **Basales** ou **Alarmes**) pour n'afficher qu'un seul type d'entrée.

(MedtronicPump-rl-status-rileylink-status)=

## État RL (état du RileyLink)

![État RileyLink - Paramètres](../images/Medtronic04.png) ![État RileyLink - Historique](../images/Medtronic05.png)

La fenêtre État RL a deux onglets :

- **Paramètres** : affiche les réglages de l'appareil compatible RileyLink : adresse configurée, appareil connecté, état de la connexion, erreur de connexion et versions du firmware du RileyLink. Le type d'appareil est toujours Pompe Medtronic, Modèle affiche votre modèle de pompe, Numéro de série est le numéro de la pompe configuré, Fréquence de pompe indique la fréquence utilisée, Dernière fréquence est la dernière fréquence utilisée.
- **Historique** : Affiche l'historique des communications, pour le RileyLink cela concerne les changements d'état et pour le Medtronic les commandes envoyées à la pompe.

(medtronic-actions)=

## Actions

Avec le pilote Medtronic, deux actions supplémentaires sont disponibles sur l'écran de la pompe (**Gestion** > **Pompe**) :

- **Réveil et Réglage** - Si AAPS ne s'est pas connecté à votre pompe pendant longtemps (il devrait se connecter toutes les 5 minutes), vous pouvez forcer un réglage (tune-up). AAPS essaie de contacter votre pompe en parcourant toutes les fréquences radio que votre pompe peut utiliser. Si une connexion réussit, la fréquence qui a fonctionné devient la fréquence par défaut. Pendant le réglage, l'état du RileyLink sur l'écran de la pompe l'indique. Si un réglage échoue (par exemple parce que la pompe était hors de portée), **AAPS** réessaie tout seul environ toutes les 10 minutes.
- **Réinitialiser le RileyLink** - Si vous réinitialisez votre appareil compatible RileyLink, vous devrez peut-être utiliser cette action pour que l'appareil soit reconfiguré (réglage de la fréquence, du type de fréquence et de l'encodage).

## Remarques importantes

### Configuration de NS : attention particulière nécessaire

AAPS utilise le numéro de série pour la synchronisation, et ce numéro de série est visible dans NS. Comme la connaissance du numéro de série d'une ancienne pompe Medtronic permet de commander la pompe à distance, prenez particulièrement soin de renforcer la sécurité de votre site NS pour éviter toute fuite du numéro de série de votre pompe. Voir https://nightscout.github.io/nightscout/security/

### Utilisateurs OpenAPS

Les utilisateurs d'OpenAPS doivent noter qu'AAPS avec Medtronic utilise une approche totalement différente de celle d'OpenAPS. Avec AAPS, vous interagissez avec la pompe principalement via votre téléphone. En utilisation normale, le seul moment où il faut probablement utiliser le menu de la pompe est le changement de réservoir. C'est très différent d'OpenAPS, où au moins une partie d'un bolus est en général délivrée avec les boutons de bolus rapide. Si la pompe est utilisée pour délivrer manuellement un bolus, il peut y avoir des problèmes si AAPS essaie d'en délivrer un au même moment. Des contrôles existent pour éviter les problèmes dans ces cas, mais il faut quand même éviter cela autant que possible.

### Journaux

Si vous devez dépanner le fonctionnement de votre pompe Medtronic, touchez l'icône de menu en haut à gauche de l'écran, puis choisissez Maintenance et Paramètres des journaux. Pour dépanner un problème Medtronic, il faut vérifier Pump, PumpComm et PumpBTComm.

### MGC Medtronic

La MGC Medtronic n'est actuellement PAS prise en charge.

### Utilisation manuelle de la pompe

Évitez de faire des bolus ou de régler des DBT manuellement sur votre pompe. Toutes ces commandes doivent être envoyées via AAPS. Si des commandes manuelles sont utilisées, il faut attendre au moins 3 minutes entre elles pour réduire le risque de problèmes.

### Changement de fuseau horaire et heure d'été, ou voyager avec une pompe Medtronic et AAPS

AAPS détecte automatiquement les changements de fuseau horaire et met à jour l'heure de la pompe quand votre téléphone passe à la nouvelle heure.

Voyager vers l'est signifie que vous ajoutez des heures à l'heure actuelle (p. ex. de GMT+0 à GMT+2), ce qui ne pose aucun problème car il n'y a pas de chevauchement (c.-à-d. qu'il est impossible d'avoir deux fois la même heure). Voyager vers l'ouest, en revanche, peut poser des problèmes, car vous revenez en fait en arrière dans le temps, ce qui peut donner des données IA incorrectes.

Les développeurs connaissent les problèmes liés aux voyages vers l'ouest, et une solution est à l'étude. Voir https://github.com/andyrozman/RileyLinkAAPS/issues/145 pour plus de détails. Pour l'instant, sachez que ce problème peut arriver et surveillez attentivement lors des changements de fuseau horaire.

### Un GNARL est-il un appareil compatible Rileylink totalement compatible ?

Le code GNARL prend en charge toutes les fonctions utilisées par le pilote Medtronic dans AAPS, il est donc totalement compatible. Notez bien que cela demande du travail en plus : vous devrez trouver du matériel compatible, puis charger le code GNARL sur l'appareil.

**Note de l'auteur :** Veuillez noter que le logiciel GNARL est encore expérimental et peu testé, et qu'il ne doit pas être considéré comme aussi sûr à utiliser qu'un RileyLink.

(MedtronicPump-faq)=

## Questions fréquentes

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Que faire si je perds la connexion au RileyLink et/ou à la pompe ?

Il existe plusieurs options pour essayer de résoudre les problèmes de connexion.

- Touchez **Réveil et Réglage** sur l'écran de la pompe (**Gestion** > **Pompe**) comme décrit ci-dessus.
- Désactivez le Bluetooth sur votre téléphone, attendez 10 secondes, puis réactivez-le. Cela force l'appareil Rileylink à se reconnecter au téléphone.
- Réinitialisez l'appareil Rileylink. Vous devez ensuite toucher **Réinitialiser le RileyLink** sur l'écran de la pompe (**Gestion** > **Pompe**).
- D'autres utilisateurs ont trouvé que les étapes suivantes permettent de rétablir la connexion quand les autres méthodes ont échoué : 
    1. Redémarrez le téléphone
    2. *Pendant* le redémarrage du téléphone, redémarrez l'appareil Rileylink
    3. Ouvrez AAPS et laissez la connexion se rétablir

### Comment déterminer la fréquence utilisée par ma pompe

![Modèle de pompe](../images/Medtronic06.png)

Au dos de la pompe, vous trouverez une ligne avec le numéro de modèle et un code spécial de 3 lettres. Les deux premières lettres indiquent le type de fréquence et la dernière indique la couleur. Voici les valeurs possibles pour la fréquence :

- NA - Amérique du Nord (pour la fréquence, vous devez choisir "États-Unis & Canada (916 MHz)")
- CA - Canada (pour la fréquence, vous devez choisir "États-Unis & Canada (916 MHz)")
- WW - Monde entier (pour la fréquence, vous devez choisir "Mondial (868 MHz)")

(MedtronicPump-pump-unreachable)=

### Comment corriger l'erreur « pump unreachable » (pompe hors de portée)

Certaines pompes Medtronic signalent une erreur « pump unreachable » (pompe hors de portée) après une mise à jour d'**AAPS**. Pour la corriger, changez le type d'encodage :

1. Allez dans **Configuration** > **Pompe** et touchez **Paramètres** sur la carte **Medtronic**.
2. Réglez **Encodage Medtronic** sur **Encodage matériel 4b6b**.

## Où obtenir de l'aide

Le développement du pilote Medtronic est fait par la communauté, de manière **bénévole**. Avant de demander de l'aide, merci de :

1. **Lire** la section de cette documentation qui concerne votre problème, pour vérifier comment la fonction doit marcher.
2. **Demander** sur le canal *#AAPS* sur [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md).
3. **Signaler un bug** en cherchant dans les [tickets existants](https://github.com/nightscout/AndroidAPS/issues) ; si le vôtre n'y est pas, ouvrez un [nouveau ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez vos [fichiers log](../GettingHelp/AccessingLogFiles.md).

Pour demander de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, la version d'**AAPS** et une description simple du problème (ce qui a changé, quand cela a fonctionné pour la dernière fois).