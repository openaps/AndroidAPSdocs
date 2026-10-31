(aapsclient-app)=
# L'application AAPSClient

**AAPSClient** est l'application complémentaire d'**AAPS** : une application pour un second téléphone, en général celui d'un aidant, qui **suit** la personne qui utilise **AAPS**. À partir de la version 4 d'**AAPS**, l'aidant peut aussi **contrôler** la boucle à distance avec des commandes signées. Les deux téléphones communiquent par votre site **Nightscout** ; aucune connexion directe entre les téléphones n'est nécessaire.

```{admonition} Wording used on this page
:class: note
- **Client** = un téléphone qui utilise **AAPSClient**.
- **Maître** = le téléphone **AAPS** principal, qui gère la pompe et fait tourner la boucle.
```

```{admonition} iPhone version in development
:class: note
**AAPSClient** fonctionne actuellement sur les téléphones Android. Une version iPhone d'**AAPSClient** est en développement et en phase de test précoce. Elle n'est pas encore publiée : elle n'est pas sur l'App Store et il n'y a rien à télécharger. Cette page sera mise à jour quand elle sera disponible.
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Ce qu'est AAPSClient (et ce qu'il n'est pas)

**AAPSClient** ressemble à **AAPS** et s'utilise de la même façon, mais il n'a **pas de boucle propre** :

- Il ne contient **pas d'algorithme APS**, pas d'**Objectifs** et **pas de pilotes de pompe** : il n'administre jamais d'insuline de lui-même.
- Les plugins utilisés seulement par l'application principale (**Communicateur SMS**, **Tidepool**, **Open Humans**) ne sont pas inclus non plus.
- Ce qu'il *contient* : la synchronisation **NSClientV3**, les plugins de source de glycémie, la diffusion **xDrip+** et les connecteurs **Wear OS** / **Garmin**, c'est-à-dire tout ce qu'il faut pour suivre et pour transmettre des commandes. Une montre **Garmin** connectée à un client peut afficher les données, mais les glucides qu'elle envoie ne sont pas saisis et elle ne peut pas connecter ou déconnecter la pompe : le client affiche un message, et vous les saisissez plutôt dans **AAPS**.

Tout ce que vous lancez depuis **AAPSClient** est vérifié, limité, confirmé et **exécuté par le maître** (le téléphone avec la pompe). La page [Contrôle maître ↔ client](ClientMasterControl.md) explique comment cela fonctionne : comment appairer les deux téléphones, comment le maître écrit le texte de confirmation que vous voyez, comment un bolus lancé sur le client est administré, et ce qui se passe quand le maître est hors ligne.

## Versions : AAPSClient, AAPSClient2 et AAPSClient3

Jusqu'à trois applications client peuvent être installées côte à côte sur le même téléphone suiveur, chacune suivant une personne **différente** : **AAPSClient** (icône hibou jaune), **AAPSClient2** (hibou bleu) et, nouveau dans la version 4 d'**AAPS**, **AAPSClient3** (hibou vert). Elles fonctionnent de la même façon. Seuls le nom et la couleur changent (icône de l'application, fond du widget et zone d'état sur l'écran d'accueil), pour que vous puissiez les distinguer. Chaque application est appairée avec son propre maître. Voir [À propos d'AAPSClient, AAPSClient2 et AAPSClient3](#remotecontrol-aapsclient-versions) pour plus de détails.

## Obtenir l'application

**AAPSClient** s'obtient de la même façon qu'**AAPS** : voir [Téléchargement et installation d'AAPSClient](#RemoteControl_aapsclient), puis installez-le comme l'application principale ([Transfert et installation](../SettingUpAaps/TransferringAndInstallingAaps.md)).

## Premier démarrage : un Assistant de configuration plus court

Au premier démarrage, **AAPSClient** lance le même **Assistant de configuration** que dans **AAPS**, mais avec beaucoup moins d'étapes : il n'y a pas de configuration du profil, de l'insuline, de la pompe, de l'APS ou des objectifs sur un suiveur :

1. **Bienvenue**, **accord de licence**, **autorisations** et **mot de passe principal** : identiques à l'application principale, voir l'[Assistant de configuration](../SettingUpAaps/SetupWizard.md).
2. Le client ne demande **pas** les **unités** ni les **lignes basse/haute** : il les reprend du téléphone principal dès qu'il est connecté à Nightscout. Vous pouvez les voir plus tard dans les **Paramètres**, où une petite **icône de téléphone** indique qu'ils sont [synchronisés avec le téléphone principal](#client-master-config-prefs). Ils ne peuvent être modifiés que lorsque le maître est joignable.
3. **Configurer depuis le maître** : sur le maître, ouvrez **Gestion → Clients autorisés**, ajoutez ce téléphone avec un **QR code** et appuyez ici sur **Scanner le QR code**. Un seul scan configure Nightscout avec un jeton propre à ce téléphone et, si le code permet l'appairage, appaire aussi le téléphone. Le téléphone prend aussi comme nom d'instance le nom sous lequel il a été ajouté sur le maître (les lettres accentuées deviennent des lettres simples, « Miloš » devient « Milos »). **Après le scan, la configuration est terminée** : l'assistant se ferme, car les étapes suivantes ne feraient que montrer ce que le code a fait. Sans QR code, passez cette étape. (Android seulement : le scanner n'est pas encore disponible sur iOS.)

   ![L'étape Configurer depuis le maître avec le bouton Scanner le QR code](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Communication** : la liste des plugins propose seulement ce dont un suiveur a besoin (NSClientV3, xDrip+, Montre, Applications compagnon externes, Garmin). Si vous n'avez pas scanné de QR code, activez **NSClientV3** et saisissez la **même URL Nightscout** que sur le téléphone principal ainsi qu'un jeton d'accès, avec les **websockets** activés, exactement comme décrit dans [Synchronisation](#RemoteControl_aapsclient).

   ![L'étape Communication sur le client](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Associer au maître** : cette étape existe **seulement** sur le client. Elle connecte cet appareil au maître par le canal de commande sécurisé, avec le code PIN, et prend le nom sous lequel le téléphone a été ajouté sur le maître, comme avec le QR code. **Après l'appairage, la configuration est terminée.** Vous pouvez aussi passer cette étape et appairer plus tard à tout moment depuis **Gestion → Associer au maître**.

   ![L'étape Associer au maître dans l'assistant du client](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Qui utilise ce téléphone ?** : seulement si vous n'avez pas appairé dans l'assistant ; le nom de la personne qui utilise ce téléphone. Il permet de distinguer cette instance dans les rapports et la synchronisation.

(aapsclient-pairing-with-the-master)=

## Appairage avec le maître

Sur le **maître**, ouvrez **Gestion → Clients autorisés** et ajoutez un client. Il y a deux façons d'appairer :

- **Avec un QR code** (le plus rapide, si le téléphone a un appareil photo) : scannez le code à l'étape « **Configurer depuis le maître** » de l'assistant ou depuis **Gestion → Associer au maître → Scanner le QR code**, et confirmez avec « **Utiliser** ». Cela configure aussi Nightscout.
- **Avec le code PIN** : sur le **client**, ouvrez l'étape de l'assistant ci-dessus (ou **Gestion → Associer au maître**), saisissez le code PIN à usage unique affiché sur le maître et appuyez sur « **Appairer** ». Le client montre alors à qui il va faire confiance ; confirmez avec « **Appairer** » :

![Confirmation sur le client avant de terminer l'appairage](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Depuis l'assistant, un appairage réussi termine la configuration et ouvre l'écran d'accueil. Sur le maître, le client apparaît comme **Actif** dans la liste [Clients autorisés](#client_master_master_setup). Ensuite, **Gestion → Associer au maître** affiche « *Déjà appairé* », le rôle du téléphone et si le mode renforcé est activé :

![Gestion → Associer au maître sur un client appairé : Déjà appairé, Rôle : Aidant, Mode renforcé activé](../images/v4/ClientMaster/pair_with_master_client.png) La procédure complète d'appairage, les détails de sécurité et le dépannage se trouvent sur [Contrôle maître ↔ client](#client_master_client_setup).

Après l'appairage, le client reçoit du maître son propre jeton Nightscout (si le maître a un jeton admin), avec seulement les droits dont un client a besoin, et n'utilise plus le jeton que vous avez peut-être saisi. **AAPSClient** n'écrit jamais lui-même de traitements ou de glycémies dans Nightscout : tout ce qu'il fait est envoyé au maître, qui l'écrit. Voir [Le jeton Nightscout propre au client](#client-master-control-own-token).

Le maître décide ce que ce téléphone peut faire avec son **[rôle](#client-master-control-roles)** (Lecture seule, Repas, Aidant ou Administrateur). **Gestion → Associer au maître** affiche le rôle du téléphone.

## L'écran d'accueil

L'écran d'accueil du client reflète la boucle suivie :

![Écran d'accueil d'AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **Glycémie, graphiques, IA/GA et profil** viennent de Nightscout, tels que le maître les a envoyés.
- L'**état de la boucle** affiché est celui du **maître** (un client n'a pas de boucle propre). Tant que le client n'a pas reçu de Nightscout le mode de fonctionnement du maître, la puce du mode de fonctionnement affiche un **point d'interrogation** (inconnu).
- La **carte d'état** affiche le réservoir et la pile de la **pompe suivie** ainsi que la batterie du téléphone qui envoie les données, d'après le statut de l'appareil dans Nightscout. Un client n'a pas de pompe : il n'y a donc nulle part dans l'application d'état de pompe local ni de gestion de pompe.
- La barre du bas propose **Traitements**, **Scénarii** et **Gestion** une fois le client appairé (seulement **Gestion** avant l'appairage). Il n'y a pas d'onglets pompe ou objectifs.

## Traitements et actions

Tout ce qui se trouve dans **Gestion** fonctionne comme dans l'application principale, avec une différence importante : sur un client, les actions qui changeraient le traitement (bolus, glucides, cibles temporaires, scénarii…) sont **masquées tant que l'appareil n'est pas appairé**. Une fois l'appareil appairé, elles sont **transmises au maître** pour confirmation et exécution : voir [Utiliser le contrôle à distance](#client-master-control).

L'entrée **Profil** est l'exception : elle est affichée même sur un client **non appairé**, mais s'ouvre en **consultation seule**. Le client affiche les profils qu'il reçoit par Nightscout (il en a besoin pour ses propres calculs), sans boutons pour modifier ou activer. Une fois le client **appairé**, la liste des profils est synchronisée avec le maître et vous pouvez modifier et activer des profils depuis le client comme toute autre action à distance.

Sur un client **non appairé**, **Gestion** propose seulement **Profil** et **Associer au maître** :

![L'écran Gestion sur un client non appairé : seulement Profil et Associer au maître](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

La bannière rouge « *Appareil maître inaccessible. Les modifications sont désactivées jusqu'à ce que la connexion soit rétablie.* » apparaît aussi sur un client non appairé. C'est normal : il n'y a pas encore de maître à joindre. La bannière disparaît une fois le client appairé et le maître en ligne.

Une fois le client appairé, les actions de traitement apparaissent :

![L'écran Gestion sur un client appairé, avec l'entrée Associer au maître](../images/v4/AapsClient/aapsclient_manage.png)

Il n'y a **pas d'entrée Pompe** : un client n'a pas de pompe.

Si le maître n'est pas joignable, la même bannière apparaît sur un client appairé : les actions de traitement sont grisées, et tout ce que vous essayez est bloqué avant d'être envoyé. Le client remarque que le maître est hors ligne quand vous essayez une action, et réactive les actions dès que le maître est de nouveau en ligne.

![L'écran Gestion sur un client appairé quand le maître est hors ligne : actions grisées sous la bannière](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Paramètres synchronisés avec le maître

La **configuration** des plugins actifs et beaucoup de **préférences** sont synchronisées entre le maître et ses clients appairés. Les éléments synchronisés sont marqués d'une petite **icône de téléphone** et sont désactivés (avec une bannière « *Appareil maître inaccessible* ») tant que le maître n'est pas joignable. Ceci est décrit dans [Modifier la configuration et les préférences](#client-master-config-prefs).

## AAPSClient sur une montre connectée

Une montre Wear OS peut être associée au téléphone **client** ; ses actions sont transmises par le client au maître. Voir [Wear OS](../WearOS/WearOsSmartwatch.md) et les [options de montre connectée dans Contrôle à distance](#RemoteControl_smartwatches).
