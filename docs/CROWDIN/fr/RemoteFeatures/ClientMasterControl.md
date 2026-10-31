(client-master-control)=
# Contrôle maître ↔ client (contrôle à distance signé)

Depuis la version 4 d'**AAPS**, un téléphone suiveur avec **AAPSClient** peut faire beaucoup plus qu'*annoncer* des traitements via Nightscout : une fois **appairé** avec le téléphone principal, il peut envoyer des **commandes signées** que le téléphone principal (le **maître**) vérifie, confirme et exécute — y compris un **bolus d'insuline** sur la pompe du maître.

Cette page explique comment cela fonctionne, comment le configurer et comment l'utiliser.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Maître** = le téléphone **AAPS** principal, qui a la pompe et fait tourner la boucle (l'application `full`).
- **Client** = un téléphone **AAPSClient** sans pompe, qui suit le maître et peut maintenant aussi le *contrôler*.
- Les deux téléphones doivent être connectés au **même** site Nightscout. Toute la communication passe toujours par Nightscout — aucune connexion directe entre les téléphones n'est nécessaire.
```

---

## Comment ça fonctionne

```{admonition} Coming from AAPS v3?
:class: note
Dans **AAPS** v3, **AAPSClient** pouvait seulement écrire dans Nightscout des traitements careportal non signés, et ne pouvait pas faire de bolus. Le contrôle à distance demande maintenant un [appairage](#client_master_master_setup) unique. Voir aussi [Ce qui a changé dans AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 utilise un canal dédié **Client-Control**. Il passe toujours par votre site Nightscout (dans la collection `settings`), mais chaque message est **signé de façon cryptographique** avec un secret que seuls les deux téléphones connaissent. Le secret est transmis une seule fois, pendant l'**appairage**, et remplacé par un nouveau juste après, il ne circule donc jamais en clair.

Le principe de base : **c'est le maître qui décide** :

1. Le client envoie une *intention* (« bolus 2 U », « démarrer le scénario Exercice », « définir cette cible temporaire »…).
2. Le **maître** recalcule l'action et la **limite** selon ses **propres** données actuelles (profil, IA, GA, cible temporaire actuelle, pompe), et **écrit lui-même la confirmation exacte** que l'utilisateur verra.
3. Le client (ou la montre) affiche le texte de confirmation du **maître** — il ne crée jamais le sien.
4. Après confirmation, le maître **exécute l'action une seule fois** et renvoie le résultat au client.

Ce que cela veut dire pour vous :

- **Commandes signées** : seuls les clients que vous avez appairés peuvent envoyer des commandes (secret d'appairage et signature propres à chaque client). Les commandes anciennes ou rejouées sont refusées.
- **Un rôle pour chaque client** : vous décidez ce que chaque client peut faire, de *Lecture seule* à *Administrateur* — voir [Rôles des clients](#client-master-control-roles).
- **Bolus d'insuline depuis un client** : le maître le délivre sur sa pompe, et le client affiche la progression de l'injection.
- **Le maître décide** : il limite chaque action selon ses propres contraintes et écrit la confirmation affichée sur le client.
- **Seuls les clients appairés modifient le traitement** : quand le contrôle par le client est activé, le maître n'accepte plus les traitements ou modifications saisis directement dans Nightscout — voir [Mode renforcé](#client-master-control-hardened-mode).
- **Chaque client a son propre jeton Nightscout**, avec seulement les droits dont un client a besoin — voir [Le jeton Nightscout propre au client](#client-master-control-own-token).
- **Maître hors ligne** : les actions sont bloquées avec un message clair.
- **Révoquer un client** se fait en un seul appui (par client), ou utilisez l'interrupteur du maître pour arrêter tous les clients.

Actions possibles depuis un client : **bolus**, **glucides / eGlucides**, **cible temporaire** (définir et annuler), **changement de profil**, changement de **boucle / mode de fonctionnement**, **débit basal temporaire** (définir et annuler), **bolus étendu** (définir et annuler), **choix de l'insuline** et **[scénarios](../DailyLifeWithAaps/Scenes.md)**. Une partie des **préférences** est aussi synchronisée dans les deux sens entre le maître et les clients.

---

## Rôles et prérequis

```{admonition} Before you start
:class: important
- Le **maître** utilise la version normale `full` d'**AAPS** et est connecté à votre pompe.
- Le **maître** utilise **NSClientV3** avec votre Nightscout et affiche *connecté*. Donnez-lui un **jeton admin** de votre Nightscout : avec lui, le maître peut créer un jeton propre pour chaque client et le montrer au client sous forme de QR code.
- Le **client** utilise **[AAPSClient](AapsClient.md)** (ou **AAPSClient2** / **AAPSClient3** pour d'autres patients — voir [À propos d'AAPSClient, AAPSClient2 et AAPSClient3](#remotecontrol-aapsclient-versions)). Il doit utiliser le **même** Nightscout. Si vous le configurez avec le QR code du maître, le client reçoit l'adresse et le jeton Nightscout du maître ; sinon, configurez d'abord vous-même **NSClientV3** sur le client.
- Les **websockets** sont nécessaires sur les deux téléphones : les commandes n'arrivent au maître que par la connexion websocket. Quand le contrôle par le client est activé, **AAPS** garde les websockets activés, sur le maître et sur les clients appairés.
```

L'appairage et la synchronisation sont deux choses différentes :

- La **synchronisation** (données : glycémie, traitements, profil) se configure comme avant — voir [Synchronisation](#RemoteControl_aapsclient). Le QR code du maître peut le faire pour vous sur le client.
- L'**appairage** (contrôle : le canal de commandes signées décrit ici) est la nouvelle étape ci-dessous.

---

## Configuration

(client_master_master_setup)=
### 1. Sur le maître — activer le contrôle et ajouter un client

Sur le maître, ouvrez l'écran **Gestion** et choisissez **Clients autorisés**.

Activez **Autoriser le contrôle client** (il est **désactivé** par défaut). C'est l'interrupteur général du maître : quand il est désactivé, aucun client ne peut envoyer de commandes, mais vos clients appairés sont gardés, et vous pouvez le réactiver plus tard. L'activer active aussi le [Mode renforcé](#client-master-control-hardened-mode), affiché comme « *Mode renforcé activé* » avec un **(i)** qui l'explique. En [mode simple](#preferences-simple-mode), le contrôle par le client est toujours activé, donc l'interrupteur n'est pas affiché.

![Écran Clients autorisés sur le maître](../images/v4/ClientMaster/authorized_clients_master.png)

Appuyez sur le bouton **+** (en bas à droite) pour ajouter un client. Dans la fenêtre **Nouveau client** :

1. Saisissez un **nom d'appareil**, pour le reconnaître dans la liste.
2. Choisissez **comment le téléphone est configuré** (voir le tableau ci-dessous).
3. Choisissez son **[rôle](#client-master-control-roles)**. Rien n'est choisi pour vous : le bon rôle dépend de la personne qui utilise le téléphone.

![Fenêtre Nouveau client sur le maître : nom de l'appareil, comment le téléphone est configuré, et son rôle](../images/v4/ClientMaster/new_client_master.png)

| Méthode                               | Ce que reçoit le nouveau téléphone                                                | À utiliser quand                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **QR code : Nightscout et appairage** | l'adresse Nightscout, son propre jeton Nightscout et l'appairage, en un seul scan | le nouveau téléphone a un appareil photo : la méthode la plus rapide, rien à saisir                                        |
| **QR code : Nightscout uniquement**   | l'adresse Nightscout et son propre jeton Nightscout, sans appairage               | le téléphone doit seulement **afficher** les données et ne jamais envoyer de commandes                                     |
| **PIN**                               | seulement l'appairage ; il garde ses paramètres Nightscout actuels                | le téléphone n'a pas d'appareil photo (ou le maître ne peut pas créer de jetons) ; il doit déjà être connecté à Nightscout |

Les deux méthodes par QR code demandent un **jeton admin** dans les paramètres **NSClientV3** du maître, car le maître crée le jeton du client dans Nightscout. Sans ce jeton, les options QR code sont affichées mais ne peuvent pas être choisies, et la fenêtre explique pourquoi ; le **PIN** fonctionne toujours.

#### Avec un QR code

Appuyez sur **OK** : le maître crée le jeton Nightscout du client et affiche un **QR code**. Un code qui appaire aussi est valable environ **deux minutes** ; l'écran affiche un compte à rebours et se ferme tout seul quand le client est appairé. Scannez-le sur le nouveau téléphone comme décrit dans [Sur le client](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Toute personne qui voit le QR code peut lire votre Nightscout, et un code qui appaire contient aussi l'appairage. Montrez-le seulement au nouveau téléphone. **AAPS** bloque les captures d'écran tant que le code est affiché.
```

![L'écran QR code du maître avec son compte à rebours (code flouté)](../images/v4/ClientMaster/qr_code_master.png)

#### Avec un PIN

Appuyez sur **OK** : le maître affiche un **code PIN d'appairage** à 8 chiffres, en deux groupes de quatre (par exemple `1234 5678`). Ce PIN est à **usage unique** et **expire après environ deux minutes**.

![Écran d'appairage du maître avec le PIN à usage unique (le PIN affiché ici a expiré)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
Le PIN protège le secret d'appairage qui est échangé via Nightscout. Partagez-le seulement avec l'appareil que vous appairez, ne le publiez pas, et laissez-le expirer si vous ne l'utilisez pas. Vous pouvez toujours créer un nouveau PIN en appuyant de nouveau sur **+**.
```

(client_master_client_setup)=
### 2. Sur le client — associer au maître

#### Scanner le QR code

Vous pouvez scanner le QR code du maître à deux endroits :

- dans l'**Assistant de configuration** du client, à l'étape « **Configurer depuis le maître** », qui vient avant l'étape Nightscout. Un seul scan configure alors Nightscout et, avec un code qui appaire, aussi l'appairage, donc la configuration est terminée : l'assistant se ferme et l'écran d'accueil s'ouvre ;
- plus tard, à tout moment, depuis **Gestion → Associer au maître → Scanner le QR code**.

La première fois, **AAPSClient** demande l'autorisation d'utiliser l'**appareil photo**. Si vous la refusez, l'écran indique que l'appareil photo est nécessaire, et vous pouvez l'autoriser avec **Essayer à nouveau** ou appairer avec le PIN à la place.

Pointez l'appareil photo vers le code. Le client affiche ce que fait le code — l'adresse Nightscout et, pour un code qui appaire, le maître avec lequel il appaire — et demande « **Utiliser ce code ?** ». Appuyez sur **Utiliser** : le client active **NSClientV3**, remplace son adresse et son jeton Nightscout par ceux du code et active les websockets. Un code qui appaire appaire aussi le téléphone ; celui-ci dit bonjour au maître dès qu'il est connecté à Nightscout.

![L'étape Configurer depuis le maître de l'assistant du client](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
Le scanner n'est pas encore disponible sur iOS, et un ordinateur n'a pas d'appareil photo : utilisez le PIN dans ces cas.
```

#### Saisir le PIN

Sur le client, ouvrez **Gestion → Associer au maître** (ou l'étape **Associer au maître** de l'assistant, après l'étape Nightscout), **saisissez le code PIN à 8 chiffres** affiché sur le maître et appuyez sur **Appairer**. Le client utilise le PIN pour récupérer de façon sûre l'offre d'appairage via Nightscout, puis demande « **Associer avec ce maître ?** » et affiche l'identifiant du maître. Appuyez sur **Appairer** pour confirmer (voir [Appairage avec le maître](#aapsclient-pairing-with-the-master) pour une capture d'écran).

![Écran Associer au maître sur le client avant l'appairage — saisissez le PIN ici](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Après l'appairage

Une fois appairé, un client envoie un **Hello** au maître et apparaît dans la liste **Clients autorisés** du maître comme **Actif**, avec l'heure de *« dernière connexion »*. Le client connaît son [rôle](#client-master-control-roles) grâce à l'appairage, il affiche donc tout de suite les bons boutons. Un appairage fait dans l'Assistant de configuration termine l'assistant. Dans la même étape, les deux téléphones remplacent le secret d'appairage par un nouveau qui n'a jamais circulé (voir [Notes de sécurité](#client-master-control-security)), et un client configuré avec le PIN reçoit son propre jeton Nightscout (voir [Le jeton Nightscout propre au client](#client-master-control-own-token)). Un client peut être appairé avec **un seul** maître à la fois ; pour appairer avec un autre maître, utilisez d'abord **Dissocier**.

![Écran Associer au maître sur le client (déjà appairé)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Gérer les clients

Depuis l'écran **Clients autorisés** du maître, vous pouvez à tout moment :

- **Changer le rôle** d'un client avec la rangée de quatre boutons sous son nom. Le nouveau rôle s'applique tout de suite, sans nouvel appairage.
- **Voir avec quel jeton Nightscout** un client écrit : « *Propre jeton Nightscout* » est ce que vous voulez. Une ligne rouge « *Utilise le jeton Nightscout …, qui a plus de droits qu'un client n'en a besoin* » veut dire que le client utilise encore un jeton avec plus de droits, en général votre jeton admin — voir [Le jeton Nightscout propre au client](#client-master-control-own-token).
- **Révoquer** un seul client — appuyez sur l'icône **corbeille** à côté de lui. Le client ne peut plus envoyer de commandes tant qu'il n'est pas appairé de nouveau. Son propre jeton Nightscout est aussi supprimé, il ne peut donc plus lire votre Nightscout non plus.
- **Arrêter tout contrôle** sans perdre les appairages — désactivez **Autoriser le contrôle client**.

Les téléphones configurés avec **QR code : Nightscout uniquement** sont listés sous les clients, dans « **Lecture Nightscout uniquement** ». Pour chacun d'eux, vous pouvez afficher de nouveau le QR code (pour reconfigurer le même téléphone) ou supprimer son jeton, ce qui met fin à son accès à votre Nightscout.

![Clients autorisés avec un client appairé (boutons de rôle, propre jeton Nightscout) et un téléphone dans Lecture Nightscout uniquement](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Rôles des clients

Chaque client appairé a un **rôle**. Le maître le vérifie pour chaque commande, et le client affiche seulement ce que son rôle permet. Un nouveau rôle s'applique tout de suite, sans nouvel appairage. Les rôles s'ajoutent les uns aux autres : chacun peut faire tout ce que peut faire le précédent.

| Rôle               | Le client peut                                                                                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lecture seule**  | seulement afficher les données. Il reste appairé, il est donc prêt quand vous lui donnez un rôle plus élevé.                                                                                                                                                                                                 |
| **Repas**          | faire un bolus, utiliser l'assistant bolus et l'Assistant Rapide, saisir des glucides et arrêter un bolus en cours. Les glucides saisis ici peuvent amener la boucle à donner plus d'insuline.                                                                                                               |
| **Aidant**         | tout faire comme un utilisateur dans **AAPS** : cibles temporaires, changements de profil et d'insuline, mode de la boucle, débit basal temporaire, bolus étendu, scénarios, événements careportal, étalonnages et suppression d'enregistrements. Il ne peut pas modifier les paramètres ni les préréglages. |
| **Administrateur** | tout faire, paramètres et préréglages compris (Assistant Rapide, préréglages de cibles temporaires, scénarios, profils, automatisation, insuline).                                                                                                                                                           |

Le **(i)** en haut de l'écran **Clients autorisés** affiche la même explication. Sur le client, **Gestion → Associer au maître** affiche le rôle du téléphone.

---

(client-master-control-hardened-mode)=
## Mode renforcé

Quand **Autoriser le contrôle client** est activé, le maître est en **mode renforcé** : il accepte les modifications uniquement des clients appairés. Il n'accepte **pas** les traitements, cibles temporaires, changements de profil, changements de mode de fonctionnement ou suppressions faits directement dans Nightscout, par exemple sur le site web Nightscout ou dans d'autres applications.

- Les paramètres pour accepter des données de Nightscout (**NSClientV3 → Synchronisation**) sont masqués tant que le mode renforcé est activé ; **AAPS** les utilise comme s'ils étaient désactivés.
- Le maître continue d'**envoyer** toutes ses données à Nightscout, glycémies comprises, et garde les **websockets** activés.
- Si le maître reçoit ses **glycémies depuis Nightscout**, il continue de les prendre là-bas.
- Pour charger l'historique sur un **nouveau** maître, utilisez **Synchronisation complète** dans **NSClientV3** : elle prend tout ce qui est dans Nightscout, profils compris.
- Les [commandes SMS](SMSCommands.md) ne sont pas concernées.

Un client appairé suit le mode renforcé du maître : il garde les websockets activés, et les mêmes paramètres Nightscout sont masqués sur lui. Un client non appairé garde ses propres paramètres.

Le [mode simple](#preferences-simple-mode) active toujours le mode renforcé. Pour le désactiver, quittez le mode simple et désactivez **Autoriser le contrôle client** sur le maître.

```{admonition} Why hardened mode
:class: note
Tout ce qu'un client appairé envoie est signé, vérifié et confirmé par le maître. Un traitement saisi sur le site web Nightscout ne l'est pas : toute personne ayant un accès en écriture à votre Nightscout pourrait l'ajouter. En mode renforcé, seules les commandes signées peuvent changer ce que fait le maître.
```

---

(client-master-control-own-token)=
## Le jeton Nightscout propre au client

Un client n'a pas besoin d'un jeton admin. Il lit seulement votre Nightscout et l'utilise pour envoyer ses commandes au maître ; il n'envoie lui-même aucune donnée. Le maître donne donc à chaque client un jeton Nightscout propre, avec seulement ces droits :

- tout lire,
- écrire dans la collection `settings`, le canal vers le maître,
- mettre en pause (snooze) les alarmes Nightscout.

Le jeton appartient à un rôle Nightscout nommé **`aaps-client`**, que le maître crée la première fois qu'il en a besoin. Vous pouvez voir le rôle et les jetons (nommés `aaps-` suivi du nom du client) dans les **Admin tools** (outils d'administration) de votre site Nightscout. Si le rôle y est modifié, le maître le remet comme avant la prochaine fois qu'il crée un jeton ou que vous ouvrez **Clients autorisés**.

Comment un client reçoit son jeton :

- **Configuré avec un QR code** : le jeton est dans le code.
- **Appairé avec le PIN** (ou appairé avant que cette fonction existe) : après l'appairage, le maître envoie au client son propre jeton par le canal appairé, chiffré. Le client vérifie d'abord qu'une connexion avec ce jeton fonctionne, puis l'utilise à la place du jeton qu'il avait. Cela demande un jeton admin sur le maître ; sans lui, le client garde son jeton, et sa carte sur le maître affiche la ligne rouge.

**Un client garde son propre jeton.** Dès que le maître a vu un client écrire avec son propre jeton, il n'accepte les commandes de ce client qu'avec ce jeton. Une commande écrite avec un autre jeton (par exemple un jeton admin saisi plus tard dans le client, ou le jeton d'un autre client) est refusée, même si le client est appairé, et le client affiche « *Le maître l'a refusé : ce téléphone écrit sur Nightscout avec un autre jeton que le sien* ». Sa carte sur le maître l'indique en rouge. Le client apparaît toujours en ligne, vous pouvez donc voir ce qui ne va pas. Pour corriger cela, supprimez le client sur le maître et ajoutez-le de nouveau.

Le maître ne supprime ni ne modifie jamais un jeton Nightscout qu'il n'a pas créé (un jeton avec d'autres rôles que `aaps-client`) : ces jetons sont les vôtres. Il supprime le jeton propre d'un client quand vous supprimez ce client.

---

## Utiliser le contrôle à distance

### Lancer une action depuis le client

Utilisez le client exactement comme le téléphone principal lui-même : ouvrez **Glucides**, **Insuline**, **Cible Temp**, **Profil**, **Scénarii**, le panneau **Gestion**, etc., et saisissez les valeurs.

Quand vous confirmez, le client affiche brièvement **« Connexion au maître… »**, le **maître** calcule et limite l'action, puis le client affiche la **confirmation du maître lui-même** — exactement les lignes, valeurs et couleurs que le maître afficherait sur son propre écran. Vérifiez-les et appuyez sur **OK** pour continuer.

![Une confirmation de scénario écrite par le maître et affichée sur le client](../images/v4/ClientMaster/confirmation_master_authored.png)

C'est la même chose pour une simple saisie de glucides — la quantité affichée pour confirmation est celle calculée par le maître :

![Confirmation de glucides écrite par le maître](../images/v4/ClientMaster/carbs_confirmation_client.png)

Après votre confirmation, le maître exécute l'action une seule fois et le résultat s'affiche sur le client.

### Bolus d'insuline depuis un client

C'est la principale nouvelle fonction de la v4. Un bolus lancé sur un client est **délivré par le maître sur sa pompe** ; le maître le limite selon ses propres contraintes, et le client affiche la **progression de l'injection en direct** pendant le bolus (et une alarme si la pompe signale un échec).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Un client ne décide jamais seul de la quantité délivrée. Le maître la recalcule et la limite, vous confirmez la quantité écrite par le maître, et c'est seulement ensuite qu'elle est délivrée.
```

(clientmastercontrol-when-the-master-is-offline)=
### Quand le maître est hors ligne

Si le maître n'est pas joignable (téléphone éteint ou en veille, pas connecté à Nightscout, ou websockets coupés), les actions de contrôle sur le client sont **bloquées avant tout envoi**, et vous recevez un message clair. Rien n'est appliqué à moitié.

![Message du client quand le maître est hors ligne](../images/v4/ClientMaster/master_offline_error.png)

Le client vérifie de nouveau automatiquement si le maître est joignable et réactive le contrôle dès que le maître est de nouveau en ligne.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (montre) sur un client

Une montre associée à un téléphone **client** transmet ses actions au maître en passant par le client (montre → client → maître). La montre affiche les lignes de confirmation du **maître** et le vrai résultat, comme le téléphone. La configuration de la montre n'a pas changé — voir [Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Modifier la configuration et les préférences

L'appairage ne sert pas seulement à transmettre des actions ponctuelles — il garde aussi la **configuration** et de nombreuses **préférences** identiques entre le maître et ses clients.

### Configuration (quels plugins sont actifs)

Les **plugins** actifs (algorithme APS, sensibilité, lissage, …) sont choisis sur le **maître** et **copiés** sur chaque client appairé. Sur un client, ces choix sont marqués d'une petite **icône de téléphone** dans l'écran [Configuration](#configuration_sync_icon) — modifiez-les sur le maître et les clients suivent automatiquement, et inversement.

Sur un client, l'icône de téléphone apparaît sur *Lissage*, *Étalonnage*, *Calcul de Sensibilité* et *APS* (synchronisés depuis le maître), mais pas sur *Communication* :

![Liste Configuration sur un client — l'icône de téléphone marque les catégories synchronisées avec le maître](../images/v4/ClientMaster/configuration_client.png)

Les paramètres de connexion propres à chaque appareil — surtout l'**URL Nightscout / le jeton d'accès de NSClient** — ne sont *pas* synchronisés. Chaque téléphone a les siens ; sur un client, ils viennent du QR code du maître, ou vous les saisissez vous-même.

### Profils

Votre **liste de profils** est aussi synchronisée entre le maître et ses clients appairés. Sur un client appairé, **Gestion → Profil** affiche les mêmes profils que le maître ; vous pouvez **modifier** un profil ou en **activer** un, et — comme pour toutes les autres commandes — la modification est envoyée au **maître**, appliquée là-bas, puis synchronisée en retour.

La première fois que vous activez un profil sur un client nouvellement installé, le client peut afficher « *Aucune insuline n'est encore utilisée* » et vous demander de **choisir l'insuline**. Choisissez l'insuline active sur le maître (**Gestion → Paramètres Insuline** sur le maître l'affiche).

Sur un client **non appairé**, l'écran Profil est toujours disponible mais en **lecture seule** : le client affiche les profils qu'il reçoit via Nightscout (il en a besoin pour ses propres calculs), mais il n'y a pas de bouton pour modifier ou activer — il n'y a pas de maître à qui envoyer la modification.

### Préférences

Une partie des **préférences** est **bidirectionnelle** : vous pouvez les modifier sur le **maître ou sur un client appairé**, et la modification est synchronisée de l'autre côté. Quand vous modifiez une telle préférence sur un client, elle est envoyée au maître par le canal signé, appliquée là-bas, et la valeur qui fait foi est renvoyée — ce que vous voyez sur le client est donc toujours ce que le maître a enregistré. Si la même préférence est modifiée sur deux appareils presque en même temps, c'est la **modification la plus récente qui l'emporte**. Pour un paramètre avec un curseur, la nouvelle valeur est envoyée quand vous levez le doigt.

Dans les paramètres, la même petite **icône de téléphone** marque chaque préférence synchronisée. Dans l'exemple ci-dessous, *Coupure d'absorption* est synchronisée (icône de téléphone), alors que les paramètres sans icône sont propres à l'appareil :

![Les paramètres d'un plugin — l'icône de téléphone marque les préférences synchronisées](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Comme le maître fait foi pour la valeur enregistrée, modifier depuis un client un élément de configuration contrôlé par le maître ou une préférence bidirectionnelle demande que le maître soit **joignable**. Quand le maître est hors ligne, ces contrôles sont désactivés sur le client (voir [Quand le maître est hors ligne](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Notes de sécurité

```{admonition} How the channel is protected
:class: tip
- **Secret d'appairage** : le maître le donne une seule fois au client — protégé par le PIN dans un document Nightscout, ou dans le QR code — et les deux le stockent chiffré.
- **Un nouveau secret juste après l'appairage** : le premier message du client après l'appairage lance un échange de clés, et à partir de là les deux téléphones utilisent un secret qui n'a jamais circulé. Un secret que quelqu'un a peut-être vu (un QR code photographié, une offre PIN lue dans Nightscout) ne sert plus à rien ensuite. Les téléphones appairés avant que cette fonction existe font la même chose une fois après la mise à jour.
- **Chaque commande est signée** (HMAC). Le maître refuse tout ce dont la signature ne correspond pas à un client appairé.
- **Le rejeu est empêché** par un compteur croissant propre à chaque client, et chaque commande **expire** après une courte durée de vie.
- **Droits minimaux dans Nightscout** : chaque client a son [propre jeton Nightscout](#client-master-control-own-token), qui peut seulement lire, et écrire dans le canal de contrôle client. Dès qu'il l'a utilisé, le maître n'accepte ses commandes qu'avec ce jeton. Supprimer le client supprime ce jeton.
- **Seules les modifications signées** : en [mode renforcé](#client-master-control-hardened-mode), le maître ignore les modifications du traitement saisies directement dans Nightscout.
- **Le maître signe ce qu'il partage** : les paramètres, la liste des clients et le signal « le maître est en vie » que le maître met dans Nightscout pour ses clients portent la signature du maître. Un client ne les accepte que si la signature est celle du maître, donc le jeton d'un autre client ne peut pas les modifier. Le client apprend la clé du maître lors de l'appairage, ou depuis le QR code pour un téléphone qui lit seulement Nightscout. Un document refusé apparaît dans le journal NSClient comme « *✕ SETTINGS … refused* ».
- **Vous gardez le contrôle** : donnez à chaque client le [rôle](#client-master-control-roles) dont il a besoin, révoquez un client en un seul appui, ou désactivez tout avec **Autoriser le contrôle client**.
```

```{admonition} After restoring a backup
:class: warning
Si un client est restauré depuis une sauvegarde qui fait reculer son compteur de commandes, le maître refusera ses commandes suivantes comme des rejeux. Il suffit de **dissocier puis appairer de nouveau** pour résoudre le problème.
```

---

(client-master-control-troubleshooting)=

## Dépannage

| Symptôme                                                                                                         | Ce qu'il faut vérifier                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Le client indique que le **maître est hors ligne**                                                               | Téléphone maître allumé et **AAPS** en marche ; les deux téléphones connectés dans **NSClientV3** ; **websockets** activés sur les deux ; même site Nightscout.                                                                                                                                                                                                                                |
| Le client indique qu'il n'est **pas appairé**                                                                    | Appairez de nouveau depuis **Gestion → Associer au maître**. Vérifiez que le client est **Actif** dans la liste **Clients autorisés** du maître.                                                                                                                                                                                                                                               |
| Commande **refusée** par le maître                                                                               | Le maître vérifie de nouveau la commande avec son état actuel — par ex. le profil choisi n'existe plus, ou le type de pompe ne correspond pas. Vérifiez sur le maître.                                                                                                                                                                                                                         |
| Les commandes fonctionnent mais sont **lentes**                                                                  | Activez les **websockets** sur les deux téléphones (sinon les applications utilisent une interrogation régulière, plus lente).                                                                                                                                                                                                                                                                 |
| L'appairage est annulé avec *« Le secret d'appairage n'a pas pu être stocké »*                                   | Rien n'a été changé. Recommencez l'appairage ; si cela échoue encore, redémarrez **AAPSClient** et réessayez une fois.                                                                                                                                                                                                                                                                         |
| Rien ne se passe après l'appairage                                                                               | Vérifiez que **Autoriser le contrôle client** est ACTIVÉ sur le maître, et que le maître est connecté à Nightscout.                                                                                                                                                                                                                                                                            |
| Les options QR code ne peuvent pas être choisies dans la fenêtre **Nouveau client**                              | La fenêtre explique pourquoi. *Pas un jeton admin* : donnez au maître un jeton admin de votre Nightscout, ou ajoutez le client avec le **PIN**. *Non connecté* : attendez que le maître affiche *connecté* dans **NSClientV3**.                                                                                                                                                                |
| *« Nightscout a un jeton avec ce nom et d'autres droits »*                                                       | Un de vos propres jetons Nightscout s'appelle `aaps-` suivi de ce nom. Choisissez un autre nom pour le client.                                                                                                                                                                                                                                                                                 |
| *« Un client portant ce nom est déjà dans la liste »*                                                            | Choisissez un autre nom, ou supprimez d'abord ce client.                                                                                                                                                                                                                                                                                                                                       |
| Le client affiche *« Ce code provient d'une autre version d'AAPS »*                                              | Le maître et le client doivent utiliser la **même** version d'**AAPS**. Mettez à jour le plus ancien.                                                                                                                                                                                                                                                                                          |
| Le client affiche *« Ce code a expiré »*                                                                         | Un code qui appaire est valable environ deux minutes. Ajoutez de nouveau le client sur le maître pour obtenir un nouveau code.                                                                                                                                                                                                                                                                 |
| Le client affiche *« Ce téléphone est déjà appairé »*                                                            | Dissociez-le d'abord (**Gestion → Associer au maître → Dissocier**), puis scannez de nouveau. Un code **Nightscout uniquement** fonctionne aussi sur un téléphone appairé.                                                                                                                                                                                                                     |
| Le client affiche *« Le maître l'a refusé : ce téléphone écrit sur Nightscout avec un autre jeton que le sien »* | Le client utilisait avant son propre jeton Nightscout et écrit maintenant avec un autre, par exemple après qu'un jeton a été saisi dans ses paramètres Nightscout. Supprimez le client sur le maître et ajoutez-le de nouveau (voir [Le jeton Nightscout propre au client](#client-master-control-own-token)).                                                                                 |
| Le journal NSClient du client affiche *« ✕ SETTINGS … refused »* et ses paramètres ne suivent plus le maître     | Quelqu'un d'autre a écrit le document de paramètres du maître, ou le maître a une nouvelle clé (par exemple après l'effacement de ses données). Un client appairé prend la nouvelle clé tout seul la prochaine fois qu'il se connecte à Nightscout. Un téléphone qui lit seulement Nightscout a de nouveau besoin du QR code du maître (**Lecture Nightscout uniquement → afficher le code**). |
| La carte du client affiche *« Utilise le jeton Nightscout … »* en rouge                                          | Le client écrit encore avec un jeton qui a plus de droits que nécessaire. Le maître lui envoie son propre jeton après l'appairage, mais seulement si le maître a un jeton admin. Vérifiez le jeton du maître, ou configurez de nouveau le client avec un QR code.                                                                                                                              |
| Un client ne peut plus lire Nightscout                                                                           | Son jeton a été supprimé, par exemple parce que le client a été supprimé sur le maître. Ajoutez-le de nouveau.                                                                                                                                                                                                                                                                                 |
| Les traitements saisis sur le site web Nightscout ne sont pas appliqués                                          | C'est normal en [mode renforcé](#client-master-control-hardened-mode) : saisissez-les plutôt sur un client appairé.                                                                                                                                                                                                                                                                            |

Pour les problèmes de Nightscout / de synchronisation, voir d'abord [Dépannage NSClient](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
