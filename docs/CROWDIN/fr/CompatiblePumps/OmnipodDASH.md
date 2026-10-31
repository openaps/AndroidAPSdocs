# Omnipod Dash

Ces instructions servent à configurer la pompe de génération **Omnipod DASH** **(PAS l'Omnipod Eros)**. Le pilote DASH est une façon bien établie de faire une boucle avec Omnipod.

```{contents} Table of contents
:depth: 1
:local: true
```

## Spécifications de l'Omnipod DASH

Caractéristiques principales de l'**Omnipod DASH** (« DASH ») :

- Les pods DASH se reconnaissent à leur **capuchon d'aiguille bleu** (l'ancien pod EROS a un capuchon d'aiguille transparent). Les pods sont par ailleurs identiques en termes de dimensions physiques.
- DASH n'a pas besoin d'un appareil de liaison/pont BLE (PAS besoin de RileyLink, OrangeLink ou EmaLink).
- La connexion Bluetooth du DASH n'est utilisée que pour envoyer une commande (par ex. un Bolus), et elle se déconnecte juste après la commande.
- **AAPS** attendra que le pod soit accessible pour envoyer les commandes.
- Lors de l'activation du pod, **AAPS** trouvera un nouveau pod DASH et s'y connectera.
- Portée attendue depuis le téléphone : 5–10 mètres (cela peut varier).

(omnipod-dash-constraints)=

## Omnipod DASH : restrictions et problèmes connus dans AAPS
- Le conseil général est d'utiliser **AAPS** sous Android 14 ou 16. La communauté a signalé de nombreux [problèmes](https://github.com/nightscout/AndroidAPS/issues/3471) avec Android 15. Mais si vous utilisez Android 15, vous devrez sans doute activer l'**Appairage Bluetooth** (dans la section **Paramètres Avancés** des [paramètres Dash](#omnipod-dash-advanced-settings)) pour bien activer et utiliser les Pods, voir [Dépannage général](../GettingHelp/GeneralTroubleshooting.md) pour plus d'infos sur les paramètres d'appairage.
- Les changements d'heure d'été et de fuseau horaire ne sont pas appliqués automatiquement. Après un changement d'heure, vous devez mettre à jour le pod à la main : appuyez sur **Actualiser** sur l'écran de la pompe DASH, puis appuyez sur **Définir l'heure** (affiché quand les fuseaux horaires du pod et du téléphone sont différents) ou faites un **Changement de profil** (voir [Changement de fuseau horaire pour l'Omnipod Dash](#timezone-traveling-with-pumps)).
- Dash ne prend en charge le débit basal que par pas de 0,05 U/h. Si vous essayez de définir le basal par pas de 0,01 dans votre **profil AAPS**, AAPS ne donnera pas d'avertissement, même si le pod arrondira le débit au pas de 0,05 supérieur. Si vous ouvrez l'**Historique Pod** sur l'écran de la pompe DASH, il affichera qu'un basal de 0,05 a été défini. Cela veut aussi dire que le débit basal le plus bas permis par le DASH dans **AAPS** est de 0,05 U/h.
- Le fichier de paramètres contient la session de Pod active. Exportez vos paramètres après chaque activation de Pod, et lisez [Exporter et importer les paramètres](#omnipod-dash-export-import) avant d'importer des paramètres.
- Quand un nouveau profil basal est défini, DASH suspend l'injection avant de définir le nouveau **Profil** basal. En cas d'interruption ou d'erreur de communication, le profil basal ne redémarrera pas automatiquement. Voir la section [Reprendre l'injection d'insuline](#omnipod-dash-resuming-insulin-delivery) pour plus de détails.
- Si les alertes sont configurées et que le pod va bientôt expirer, le pod continuera à biper jusqu'à ce que les alertes soient mises en silence, voir [Mettre en silence les alertes du Pod](#omnipod-dash-silencing-pod-alerts) pour plus de détails.
- Il existe plusieurs problèmes connus avec le Bluetooth qui peuvent causer des problèmes d'activation du pod. Voir [Dépannage Bluetooth](../GettingHelp/BluetoothTroubleshooting.md) pour les problèmes connus et leurs solutions.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## Configuration matérielle et logicielle requise

- L'Omnipod DASH se reconnaît à son capuchon d'aiguille bleu.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **Un téléphone Android compatible** avec le Bluetooth Low Energy (BLE) (voir [Téléphones](../Getting-Started/Phones.md) pour plus d'infos). Les informations suivantes vous aideront aussi pour d'autres points importants pour bien activer et utiliser le DASH sur un téléphone compatible :
    -  Le pilote Omnipod Dash d'**AAPS** se connecte au Pod DASH par Bluetooth.  
      **AAPS** établit automatiquement une nouvelle connexion Bluetooth avec le Pod à chaque fois qu'il doit envoyer une commande (par ex. un Bolus). Après l'envoi de la commande, la connexion Bluetooth est tout de suite coupée.
       - **REMARQUE :**
         - La connexion Bluetooth peut être interrompue ou perturbée par d'autres appareils Bluetooth reliés au téléphone qui fait tourner **AAPS**, comme des écouteurs, etc. Ces appareils peuvent causer des erreurs de connexion ou des problèmes d'activation du pod sur certains modèles de téléphones. Il est conseillé de consulter la liste des [configurations matérielles testées](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) pour connaître les configurations qui fonctionnent, quand vous choisissez le téléphone pour l'Omnipod DASH.
         - Il existe plusieurs problèmes connus avec le Bluetooth qui peuvent causer des problèmes d'activation du pod (voir [Dépannage](#troubleshooting) pour des conseils sur d'autres problèmes Bluetooth), en particulier la section [Problèmes liés au Bluetooth](#omnipod-dash-bluetooth-related-issues).
    - Le téléphone doit avoir **Android 12 ou plus récent**, avec **AAPS** compilé et installé selon les instructions [**Compilation d'AAPS**](../SettingUpAaps/BuildingAaps.md). Utilisez toujours la dernière version publiée.
- Un [**système de mesure du glucose en continu (MGC)**](../Getting-Started/CompatiblesCgms.md) compatible

Les instructions ci-dessous expliquent comment activer une nouvelle session de pod avec **AAPS**. Vous devriez attendre que votre Pod actuel soit proche de l'expiration, car vous devrez activer un nouveau Pod avec **AAPS**. Une fois qu'un pod est désactivé, il ne peut pas être réutilisé ni réactivé : la désactivation est définitive.

## Avant de commencer

Assurez-vous d'avoir lu et compris tout ce guide, la section **Avant de commencer**, ainsi que **[Restrictions et problèmes d'Omnipod et d'AAPS](#omnipod-dash-constraints)** pour éviter de tomber sur un problème connu.

### **LA SÉCURITÉ D'ABORD** - Vous **NE DEVEZ PAS** essayer de connecter **AAPS** à un pod pour la première fois sans avoir accès à tout ce qui suit :
1. Des pods en plus (3 ou plus en réserve)
2. De l'insuline et du matériel pour injections multiples (MDI) en réserve
3. Un PDM Omnipod qui fonctionne (au cas où **AAPS** ne fonctionne pas)
4. Un téléphone compatible est indispensable ! (Voir [Exigences matérielles et logicielles](#hardware-software-requirements))
5. La bonne version d'AAPS compilée et installée

### Votre PDM Omnipod Dash ne servira plus une fois que le pilote Dash d'AAPS aura activé votre pod.
- Avant d'utiliser **AAPS**, vous ou votre aidant avez dû gérer le Pod avec le PDM Omnipod (ou, dans certaines régions, une application sur téléphone) pour envoyer des commandes à votre DASH (par ex. un Bolus).
- Le DASH ne peut gérer la connexion que d'un seul appareil Bluetooth (par ex. PDM ou téléphone) pour gérer et envoyer des commandes.
- L'appareil qui a activé le pod avec succès est, à partir de ce moment, le seul appareil autorisé à communiquer avec ce Pod. Cela veut dire qu'une fois que vous avez activé un DASH avec votre téléphone Android et **AAPS**, **vous ne pourrez plus utiliser votre PDM avec ce pod !** Tant que ce Pod est actif, le pilote Dash d'**AAPS** sur votre téléphone Android est le nouveau PDM de votre pod.
- **NE JETEZ PAS votre PDM !** Il est recommandé de le garder comme secours et pour les urgences, par exemple si vous perdez votre téléphone ou si **AAPS** ne fonctionne pas correctement.

### Votre pod **NE S'ARRÊTERA PAS** d'injecter de l'insuline quand il n'est pas connecté à AAPS.
Les débits basaux par défaut sont programmés dans le pod lors de l'activation, comme défini dans le [**Profil**](../SettingUpAaps/YourAapsProfile.md) actif actuel.  
Tant qu'**AAPS** fonctionne, il envoie des commandes d'ajustement du débit basal qui durent au maximum 120 minutes.  
Si, pour une raison quelconque, le pod ne reçoit plus de nouvelles commandes (par exemple parce que la communication est perdue à cause de la distance Pod ➜ téléphone), le pod revient automatiquement aux débits basaux par défaut définis dans votre [**Profil**](../SettingUpAaps/YourAapsProfile.md).

### Les profils AAPS ne prennent pas en charge des plages de débit basal de 30 minutes
Si vous débutez avec **AAPS** et que vous configurez votre [**Profil**](../SettingUpAaps/YourAapsProfile.md) de débit basal pour la première fois, sachez que les débits basaux qui commencent à la demi-heure ne sont pas pris en charge. Par exemple, si sur votre PDM Omnipod vous avez un débit basal de 1,1 U qui commence à 09:30 et dure 2 heures jusqu'à 11:30, il n'est pas possible de reproduire exactement ce **Profil** basal dans **AAPS**.  
Vous devrez mettre ce débit basal de 1,1 U sur la plage 9:00–11:00 ou sur la plage 10:00–12:00. Même si le matériel du DASH prend en charge des pas de 30 minutes dans le **Profil** de débit basal, **AAPS** ne prend PAS en charge cette fonction.

### Les débits basaux de profil à 0 U/h ne sont PAS pris en charge dans AAPS
Même si le DASH prend en charge un débit basal à zéro, **AAPS** utilise des multiples du débit basal du **Profil** de l'utilisateur pour décider des traitements automatiques ; il ne peut pas fonctionner avec un débit basal à zéro.  
À la place, un débit basal temporaire à zéro peut être obtenu avec la fonction « Déconnecter la pompe », ou avec une combinaison Désactiver la boucle/Débit basal temporaire ou Suspendre la boucle/Débit basal temporaire.  
**REMARQUE :** Le débit basal le plus bas permis par le DASH dans **AAPS** est de 0,05 U/h.

## Choisir Dash dans AAPS

Il existe **deux** façons de choisir le pilote Omnipod DASH dans **AAPS** :

### Option 1 : Nouvelles installations

Quand vous installez **AAPS** pour la première fois, l'**Assistant de configuration** vous guide à travers les fonctions principales et les exigences d'installation d'**AAPS**. Quand vous arrivez à l'étape **Pompe**, choisissez **Omnipod Dash**.

![L'étape Pompe de l'assistant de configuration avec Omnipod Dash](../images/setup-wizard/Wizard-Pump-Omnipod.png)

Si vous n'êtes pas encore sûr, vous pouvez choisir **Pompe virtuelle** pour le moment et choisir **Omnipod Dash** plus tard, après avoir configuré **AAPS** (voir Option 2).

(omnipod-dash-option-2-config-builder)=
### Option 2 : l'écran Configuration

Sur une installation existante, vous pouvez choisir la pompe **Omnipod Dash** dans l'écran **Configuration** :

1. Ouvrez le **menu** (☰) en haut à gauche de l'écran principal et choisissez **Configuration**.
2. Appuyez sur **Pompe** et cochez le bouton radio de **Omnipod Dash** (*« Intégration de la pompe Omnipod Dash (le nouveau modèle Bluetooth, avec un bouchon d'aiguille bleu). »*).

3. Une fois choisie, la carte **Omnipod Dash** affiche deux boutons :
   - **Paramètres** ouvre les [paramètres Dash](#omnipod-dash-settings).
   - **Ouvrir le plugin** ouvre l'[écran de la pompe DASH](#omnipod-dash-tab).

   ![Le plugin Omnipod Dash activé dans Configuration > Pompe](../images/v4/Pumps/dash_enabled.png)

### Vérification de la sélection du pilote Omnipod

Pour vérifier qu'**Omnipod Dash** est choisi, ouvrez **Gestion** (navigation en bas de l'écran principal) et appuyez sur **Pompe**. L'écran de la pompe DASH s'ouvre, comme montré dans la section suivante.

(omnipod-dash-tab)=

## L'écran de la pompe DASH

L'écran de la pompe DASH sert à gérer vos pods : les activer et les désactiver, actualiser l'état du pod, mettre les alertes en silence et voir l'historique du pod. Ouvrez-le avec **Gestion** > **Pompe**, ou avec **Ouvrir le plugin** sur la carte **Omnipod Dash** dans **Configuration** > **Pompe**.

Voici l'écran sans pod actif :

![L'écran de la pompe DASH sans pod actif](../images/v4/Pumps/dash_pump_screen.png)

Et voici l'écran avec un pod actif :

![L'écran de la pompe DASH avec un pod actif](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

L'icône **Paramètres** (roue dentée) en haut à droite ouvre les [paramètres Dash](#omnipod-dash-settings).

***REMARQUE :** Si un champ de l'écran de la pompe affiche (incertain), appuyez sur **Actualiser** pour mettre à jour l'état du pod.*

### Champs

- **Adresse Bluetooth :** L'adresse Bluetooth du pod.

- **Qualité de connexion :** La fiabilité de la connexion d'**AAPS** au pod, affichée sous la forme *connexions réussies / toutes les tentatives de connexion :: taux de réussite*, par exemple `412/420 :: 98.10 %`. Après plus de 50 connexions réussies, la valeur devient jaune en dessous de 90 % et rouge en dessous de 70 %. Une valeur basse indique un problème Bluetooth (voir [Problèmes liés au Bluetooth](#omnipod-dash-bluetooth-related-issues)).

- **État de l'injection :** L'état brut de l'injection, tel que le pod le signale. Ce champ n'est affiché que dans les versions en mode ingénierie.

- **ID unique :** L'ID unique qu'**AAPS** a donné au pod lors de l'activation.

- **Numéro de lot :** Le numéro de lot de production du pod.

- **Numéro de série :** Le numéro de série du pod.

- **Version du firmware :** Les versions du firmware et du Bluetooth du pod.

- **Heure du Pod :** L'heure actuelle du pod, avec son fuseau horaire. Le texte devient rouge quand le fuseau horaire du pod est différent de celui du téléphone, et jaune quand l'heure du pod a plus de 10 minutes d'écart.

- **Pod expire le :** La date et l'heure d'expiration du pod (72 heures après l'activation). Le texte devient jaune pendant les 4 dernières heures avant ce moment. Il ne devient jamais rouge, car le pod continue à injecter de l'insuline après ce moment.

- **Fin matériel du Pod :** La fin de la période de grâce du pod (8 heures après **Pod expire le**, pour une durée de vie maximale du pod de 80 heures). Le texte devient jaune au début de la période de grâce (à **Pod expire le**) et rouge pendant les 4 dernières heures avant la fin matériel. Pendant la période de grâce, il affiche aussi le temps restant, par exemple *(17m restantes)*. Le pod arrête d'injecter de l'insuline à la fin matériel et doit être changé.

- **État du Pod :** L'état du pod : **Pas de Pod actif**, **Configuration en cours**, **En cours d'exécution**, **Suspendu** ou, après un défaut du pod, **ALARM**.

- **Dernière connexion :** Depuis combien de temps **AAPS** n'a pas communiqué avec le pod.

  - *À l'instant* - il y a moins de 10 secondes.

  - *Moins d'une minute* - il y a entre 10 et 60 secondes.

  - *Il y a XX minutes* - il y a plus d'1 minute (et *Il y a X heures et XX minutes* après une heure).

- **Dernier bolus :** La quantité du dernier bolus envoyé au pod et depuis combien de temps il a été donné. Un bolus non confirmé est marqué (incertain).

- **Débit de Basal :** Le débit basal programmé pour l'heure actuelle dans votre **Profil** basal.

- **Débit de Basal Temp. :** Le débit basal temporaire (DBT) en cours, avec son heure de début et sa durée. Ce champ n'est affiché que pendant qu'un DBT est en cours.

- **Réservoir :** Affiche *Over 50 U left* (plus de 50 U restantes) quand il reste plus de 50 unités dans le réservoir. En dessous de 50 unités, la quantité exacte est affichée. La valeur devient rouge en dessous de 20 unités.

- **Total injecté :** La quantité totale d'insuline injectée depuis le réservoir. Cela comprend l'insuline utilisée pour l'amorçage.

- **Dernières alertes Pod :** Les alertes actuellement actives sur le pod, par exemple *Le Pod expirera bientôt* ou *Niveau réservoir bas*.

- **Erreurs :** Le défaut du pod, si le pod est en panne, affiché en rouge sous la forme *Défaut du Pod :* suivi du code et du nom du défaut, par exemple *Défaut du Pod : 020 ALARM_OCCLUDED*. Consultez l'[Historique Pod](#omnipod-dash-view-pod-history) et les fichiers log pour les erreurs passées et des informations plus détaillées. Voir [Pannes du Pod](#omnipod-dash-pod-failures).

- **Notification du PDM :** Affichée seulement après un défaut du pod. Elle affiche le défaut comme le PDM Omnipod l'aurait affiché : un titre (par exemple *Occlusion détectée*, *Réservoir vide* ou *Pod expiré*), ce qui s'est passé (par exemple *L'injection d'insuline s'est arrêtée. Changez le Pod maintenant.*) et un code *Ref:*.

### Boutons

Les boutons en bas de l'écran de la pompe changent selon l'état du pod. Seuls les boutons utiles à ce moment-là sont affichés.

- **Actualiser :** Demande au pod son état actuel.
  - *Utilisez-le pour mettre à jour l'état du pod et pour effacer les champs qui affichent (incertain).*
  - *Voir la section [Dépannage](#omnipod-dash-troubleshooting) ci-dessous pour plus d'informations.*

- **Alertes silencieuses :** Arrête les bips d'alerte du pod (par exemple expiration du pod ou réservoir bas). Affiché seulement quand le pod a une alerte active. Voir [Mettre en silence les alertes du Pod](#omnipod-dash-silencing-pod-alerts).

- **Reprendre l'injection :** Reprend l'injection d'insuline sur un pod suspendu. Affiché seulement quand l'injection est suspendue. Voir [Reprendre l'injection d'insuline](#omnipod-dash-resuming-insulin-delivery).

- **Définir l'heure :** Met le pod au fuseau horaire de votre téléphone en renvoyant votre **Profil** basal. Affiché seulement quand le fuseau horaire du pod est différent de celui de votre téléphone.

- [**Activer Pod**](#omnipod-dash-activate-pod) : amorce et active un nouveau pod. Affiché quand aucun pod n'est actif.

- [**Désactiver Pod**](#omnipod-dash-deactivate-pod) : désactive le pod actif. Affiché dès qu'un pod est associé à **AAPS**, aussi quand une activation s'est arrêtée en cours de route (par exemple parce que le pod est tombé en panne pendant l'activation). **AAPS** vous demande de confirmer avant de désactiver le pod.

- **Tester bips :** Fait jouer un seul bip de test au pod.

- [**Historique Pod**](#omnipod-dash-view-pod-history) : affiche l'historique d'activité du pod actif.

- **Supprimer Pod :** Retire d'**AAPS** un pod dont l'activation n'est pas terminée. Affiché seulement quand l'activation d'un pod s'est arrêtée en cours de route. **AAPS** vous demande de confirmer. Après la suppression, **AAPS** ne peut plus communiquer avec ce pod : retirez-le de votre corps.

![Le menu Gestion du Pod](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, qui avait un menu **Gestion du Pod** séparé. Dans **AAPS** 4, toutes ces actions, y compris **Activer Pod**, **Désactiver Pod**, **Tester bips** et **Historique Pod**, sont des boutons avec un texte, directement sur l'écran de la pompe.
```

(omnipod-dash-activate-pod)=

## Activer Pod

1. Ouvrez l'écran de la pompe DASH (**Gestion** > **Pompe**) et appuyez sur **Activer Pod**. L'assistant d'activation s'ouvre.

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

   ```{admonition} Older screenshot
   :class: note
   La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Activer Pod** est un bouton directement sur l'écran de la pompe DASH, et non plus dans le menu **Gestion du Pod**.
   ```

   Si vous n'avez jamais activé de **Profil** dans **AAPS**, l'assistant affiche d'abord l'étape **Profil nécessaire** : choisissez le profil à appliquer lors de l'activation et continuez.

2. L'étape **Remplir Pod** s'affiche. Remplissez un nouveau pod avec assez d'insuline pour 3 jours, **au moins 80 unités**. Attendez deux bips du pod : ils indiquent que la quantité minimale de 80 unités a été remplie. Videz complètement la seringue de remplissage, même après avoir entendu les deux bips. N'enlevez pas encore le capuchon d'aiguille du pod.

   ***REMARQUE :** Quand vous calculez la quantité d'insuline nécessaire pour 3 jours, n'oubliez pas que l'amorçage du pod utilise environ 3–10 unités.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Assurez-vous que le nouveau pod et le téléphone avec **AAPS** sont près l'un de l'autre et appuyez sur **Suivant**.

3. Si vous utilisez plus d'une insuline dans **AAPS**, l'étape **Sélectionner l'insuline** s'affiche. Elle affiche l'insuline marquée **Active actuellement**. Si vous avez rempli le pod avec une autre insuline, appuyez sur **Changer** et choisissez-la. **AAPS** applique un **Changement de profil** avec cette insuline quand l'activation est terminée. Appuyez sur **Suivant**.

   ![L'étape Sélectionner l'insuline](../images/v4/Pumps/dash_wizard_select_insulin.png)

4. À l'étape **Initialiser Pod**, **AAPS** s'associe au nouveau pod et l'amorce. Vous entendez un clic suivi d'une série de tic-tac pendant que le pod s'amorce. Quand c'est terminé avec succès, le bouton **Suivant** apparaît. Appuyez sur **Suivant**.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

   ***REMARQUE** : Si un message d'erreur comme _Scan échoué_ ou _'Could not find an available pod for activation'_ (aucun pod disponible trouvé pour l'activation) apparaît (cela peut arriver), ne paniquez pas. Appuyez sur **Réessayer**. Dans la plupart des cas, l'activation continue alors avec succès.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

   Si le pod est en panne (par exemple parce que son temps d'activation a été dépassé), **Désactiver Pod** s'affiche à la place de **Réessayer**. Utilisez-le et recommencez avec un nouveau pod.

   Si vous appuyez sur **Annuler** avant la fin de l'activation, **AAPS** vous demande de confirmer que vous voulez quitter. Appuyez sur **OK** pour quitter l'assistant, ou sur **Annuler** pour rester.

   ![La confirmation pour quitter](../images/v4/Pumps/dash_wizard_exit_confirm.png)

5. Si vous gérez la rotation du site de la pompe dans **AAPS** (**Gérer la rotation du site de la pompe** dans les paramètres [Rotation du site](#Aapsscreens-site-rotation)), l'étape **Localisation du site** s'affiche. Choisissez sur le schéma du corps l'endroit où vous allez placer le pod et appuyez sur **Suivant**, ou appuyez sur **Ignorer**.

   ![L'étape Localisation du site](../images/v4/Pumps/dash_wizard_site_location.png)

6. Ensuite, préparez le site de perfusion pour le nouveau pod. Lavez-vous les mains pour éviter tout risque d'infection. Nettoyez le site de perfusion à l'eau et au savon ou avec une lingette à l'alcool, et laissez la peau sécher complètement à l'air avant de continuer. Si l'adhésif irrite votre peau, pensez à utiliser une lingette ou un spray de protection cutanée.

   À l'étape **Collez Pod**, enlevez le capuchon d'aiguille en plastique bleu du pod. Si la canule ou autre chose dépasse du pod, ou s'il a l'air anormal, **ARRÊTEZ** : appuyez sur **Annuler** et recommencez avec un nouveau pod. Si tout semble **OK**, enlevez le papier blanc qui protège l'adhésif et collez le pod sur le site choisi de votre corps.

   Ensuite, appuyez sur **Suivant**.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

7. Une fenêtre de confirmation apparaît : *Lorsque vous appuyez sur OK, la canule sera insérée.* **Appuyez sur OK SEULEMENT si vous êtes prêt à insérer la canule !**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

8. À l'étape **Insérer canule**, **AAPS** définit votre programme basal et le pod insère la canule. Cela peut prendre un peu de temps (1–2 minutes au maximum). **Soyez patient !**

   ***REMARQUE :** Il est conseillé de pincer la peau près du point d'insertion de la canule avant que la canule ne soit insérée. Cela aide l'aiguille à entrer en douceur et réduit le risque d'occlusions (blocages).*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

9. Quand la canule a été insérée avec succès, le bouton **Suivant** apparaît. Appuyez sur **Suivant**.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

10. L'étape **Pod activé** s'affiche. Vérifiez que la canule a été bien insérée, et changez le pod si vous pensez que ce n'est pas le cas.

    Appuyez sur **Terminer**.

    Félicitations ! Vous avez maintenant démarré une nouvelle session de pod.

    ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

11. Vous êtes de retour sur l'écran de la pompe DASH. Il affiche maintenant les informations de votre pod actif, y compris le débit basal actuel, le niveau du réservoir, l'insuline injectée, les erreurs et les alertes du pod. **Activer Pod** est remplacé par **Désactiver Pod** : vous ne pouvez pas activer un autre pod sans d'abord désactiver le pod actif.

    ***REMARQUE :** Pour plus de détails sur les informations affichées, voir [L'écran de la pompe DASH](#omnipod-dash-tab).*

    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

    ***REMARQUE :** Il est conseillé d'exporter vos paramètres APRÈS l'activation du pod. Exportez vos paramètres après chaque changement de pod et une fois par mois. Copiez le fichier de paramètres exporté dans un stockage en ligne (par exemple Google Drive) ou ailleurs que sur votre téléphone, au cas où vous perdriez votre téléphone (voir [**Exporter les paramètres**](../Maintenance/ExportImportSettings.md)).*

Si une activation précédente s'est arrêtée après l'amorçage du pod, appuyer sur **Activer Pod** reprend à l'étape **Collez Pod**.

(omnipod-dash-deactivate-pod)=

## Désactiver Pod

Dans des conditions normales, un pod dure trois jours (72 heures), plus une période de grâce de 8 heures après l'avertissement d'expiration du pod : 80 heures au total.

Pour désactiver un pod (parce qu'il a expiré ou parce qu'il est en panne) :

1. Ouvrez l'écran de la pompe DASH (**Gestion** > **Pompe**) et appuyez sur **Désactiver Pod**.

   ![Le bouton Désactiver Pod sur l'écran de la pompe DASH](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

2. À l'étape **Désactiver Pod**, appuyez sur **Suivant**. Une fenêtre demande *Un Pod qui a été désactivé ne peut plus être utilisé. Désactiver ce Pod maintenant ?* Appuyez sur **OK** pour commencer la désactivation du pod, ou sur **Annuler** pour le garder. La désactivation suspend toute injection d'insuline et ne peut pas être annulée.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

3. L'étape **Désactivation du Pod** s'affiche pendant qu'**AAPS** désactive le pod. Le pod bipe pour confirmer que la désactivation a réussi.

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, l'assistant affiche sa progression avec une rangée de points en haut, au lieu d'une barre de progression.
   ```

   Quand la désactivation est terminée avec succès, le bouton **Suivant** apparaît. Appuyez sur **Suivant**.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

   Si la désactivation échoue, un message d'erreur et un bouton **Supprimer Pod** s'affichent. Lisez [Supprimer un pod](#omnipod-dash-discard-pod) ci-dessous avant de l'utiliser. Vous pouvez aussi appuyer sur **Annuler** et réessayer **Désactiver Pod** plus tard.

4. L'étape **Pod désactivé** s'affiche. Retirez le pod de votre corps et appuyez sur **Terminer**.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Vous êtes de retour sur l'écran de la pompe DASH. Vérifiez que le champ **État du Pod** affiche **Pas de Pod actif** et que le bouton **Activer Pod** est de nouveau affiché.

   ![L'écran de la pompe DASH qui affiche Pas de Pod actif](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

(omnipod-dash-discard-pod)=

### Supprimer un pod

Ne supprimez un pod que si toute communication avec lui échoue sans arrêt. Si **AAPS** peut encore communiquer avec le pod, utilisez plutôt **Désactiver Pod**.

- **AAPS** vous demande de confirmer avant de supprimer le pod.
- Ensuite, **AAPS** ne peut plus communiquer avec ce pod.
- **L'injection d'insuline n'a PAS été suspendue**, car le pod n'a pas été désactivé correctement. **Retirez le pod de votre corps !**
- L'étape **Pod supprimé** confirme que l'état du pod a été supprimé. Appuyez sur **Terminer**. Vous pouvez maintenant activer un nouveau pod.

(omnipod-dash-resuming-insulin-delivery)=

## Reprendre l'injection d'insuline

**REMARQUE** : Lors des **Changements de profil**, comme avec le PDM, **AAPS** doit suspendre l'injection sur le pod avant de définir le nouveau **Profil** basal. Si la communication échoue entre les commandes de suspension et de reprise, l'injection peut rester suspendue. Lisez [**Injection suspendue**](#omnipod-dash-delivery-suspended) dans la section de dépannage pour plus de détails.

Quand l'injection d'insuline est suspendue, vous devez dire au pod de reprendre l'injection d'insuline. Quand la commande a été traitée avec succès, le pod injecte de nouveau l'insuline avec le débit basal de l'heure actuelle de votre **Profil** basal actif. Le pod accepte de nouveau les commandes de bolus, de **DBT** et de **SMB**.

1. Ouvrez l'écran de la pompe DASH et vérifiez que le champ **État du Pod** affiche **Suspendu**. Appuyez sur **Reprendre l'injection** pour dire au pod de reprendre l'injection normale d'insuline.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)

2. Quand la commande a réussi, le champ **État du Pod** affiche **En cours d'exécution** et le bouton **Reprendre l'injection** disparaît.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**, qui affichait une fenêtre de confirmation. Dans **AAPS** 4, vous vérifiez le résultat sur l'écran de la pompe DASH : le champ **État du Pod** affiche **En cours d'exécution** et le bouton **Reprendre l'injection** a disparu.
   ```

   Si la commande échoue, **AAPS** affiche une fenêtre d'avertissement qui commence par *Échec de la reprise de l'injection*. Appuyez sur **Actualiser** et réessayez.

   ![L'avertissement Échec de la reprise de l'injection](../images/v4/Pumps/dash_resume_failed.png)

(omnipod-dash-silencing-pod-alerts)=

## Mettre en silence les alertes du Pod

Cette section explique comment arrêter les bips du pod quand le pod approche de la fin de sa durée de vie. Le moment où ces bips commencent dépend des paramètres **Alertes** (voir [Paramètres Dash](#omnipod-dash-settings)) :

- **Rappel nombre d'heures avant l'expiration (72 heures) :** combien d'heures avant l'expiration à 72 heures le pod commence à biper.
- **Alerte nombre d'heures avant l'arrêt (80 heures) :** combien d'heures avant l'arrêt à 80 heures le pod bipe de nouveau.

La durée de vie maximale d'un pod est de 80 heures (3 jours et 8 heures). Mais le fabricant du pod recommande de ne pas dépasser 72 heures (3 jours).

***REMARQUE** : Le bouton **Alertes silencieuses** n'est affiché sur l'écran de la pompe DASH que si le pod a une alerte active, par exemple expiration du pod ou réservoir bas. Si le bouton **Alertes silencieuses** n'est pas affiché mais que vous entendez le pod biper, appuyez sur **Actualiser**.*

1. Quand l'heure du rappel est atteinte, le pod bipe pour vous dire qu'il va bientôt expirer et que vous devez le changer. Sur l'écran de la pompe DASH, le champ **Pod expire le (1)** affiche l'heure exacte d'expiration du pod (72 heures après l'activation). Le texte devient jaune 4 heures avant ce moment. Après ce moment, **Fin matériel du Pod** devient jaune et affiche le temps restant avant que le pod arrête d'injecter de l'insuline. Le champ **Dernières alertes Pod (2)** affiche **Le Pod expirera bientôt**, et le bouton **Alertes silencieuses (3)** s'affiche.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Appuyez sur **Alertes silencieuses**. **AAPS** envoie au pod la commande pour arrêter les bips d'expiration.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

   ```{admonition} Older screenshot
   :class: note
   La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, où cet écran était l'onglet **DASH**. Dans **AAPS** 4, le bouton **Alertes silencieuses** se trouve sur l'écran de la pompe DASH (**Gestion** > **Pompe**).
   ```

3. Quand les alertes ont été mises en silence, l'alerte n'est plus affichée dans le champ **Dernières alertes Pod**, le bouton **Alertes silencieuses** disparaît et le pod arrête ses bips d'expiration.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

   ```{admonition} Older screenshot
   :class: note
   La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, qui affichait une fenêtre de confirmation. Dans **AAPS** 4, vous vérifiez le résultat sur l'écran de la pompe DASH : l'alerte a disparu du champ **Dernières alertes Pod**.
   ```

   Si la commande échoue, **AAPS** affiche une fenêtre d'avertissement qui commence par *Échec alertes silencieuses*. Appuyez sur **Actualiser** et réessayez.

L'alerte de réservoir bas fonctionne de la même façon. Quand l'insuline restante dans le pod descend au **Nombre d'unités** défini dans les paramètres **Alertes**, le pod bipe. Le champ **Réservoir** affiche la quantité restante, le champ **Dernières alertes Pod** affiche **Niveau réservoir bas**, et le bouton **Alertes silencieuses** s'affiche. Appuyez sur **Alertes silencieuses** pour arrêter les bips, et prévoyez votre prochain changement de pod.

![L'écran de la pompe DASH avec une alerte Niveau réservoir bas](../images/v4/Pumps/dash_low_reservoir_alert.png)

(omnipod-dash-view-pod-history)=

## Voir l'historique du Pod

Cette section explique comment consulter l'historique de votre pod actif et le filtrer par type d'action. L'historique du pod affiche les commandes envoyées à votre pod actif et leurs résultats pendant sa durée de vie de trois jours (72–80 heures).

Il est utile pour vérifier les bolus, les DBT et les commandes de basal envoyés au pod. Les autres catégories aident au dépannage et montrent l'ordre des événements qui ont mené à une panne.

**REMARQUE :** **Seule la dernière commande peut être incertaine**. Les nouvelles commandes *ne sont pas envoyées* tant que la **dernière commande « incertaine » n'est pas « confirmée » ou « refusée »**. Pour « corriger » une commande incertaine, appuyez sur **Actualiser** sur l'écran de la pompe DASH.

1. Ouvrez l'écran de la pompe DASH et appuyez sur **Historique Pod**.

   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

   ```{admonition} Older screenshot
   :class: note
   La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Historique Pod** est un bouton directement sur l'écran de la pompe DASH, et non plus dans le menu **Gestion du Pod**.
   ```

2. L'écran **Historique Pod** s'ouvre avec le filtre **Tous** choisi. Il liste chaque commande avec son heure et son résultat, de la plus récente à la plus ancienne, groupées par jour. Utilisez les boutons de filtre en haut (par exemple **Bolus** ou **Basales**) pour n'afficher qu'un type de commande. Appuyez sur la flèche retour pour revenir à l'écran de la pompe DASH.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

   ```{admonition} Older screenshot
   :class: note
   La deuxième capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, où vous choisissiez le type de commande dans une liste **Type**. Dans **AAPS** 4, vous utilisez les boutons de filtre montrés dans la première capture d'écran.
   ```

   Pour les bolus, la quantité est suivie du type de bolus quand ce n'est pas un bolus normal, par exemple *0,05 U (SMB)* ou *0,05 U (Correction du basal)*. Une correction du basal est un très petit bolus (une impulsion du pod, 0,05 U) que le pilote envoie tout seul ; vous ne l'avez pas demandé.

   ```{admonition} Why basal corrections happen
   :class: note
   Le pod injecte l'insuline basale par impulsions de 0,05 U, réglées par une horloge interne. À chaque changement du débit basal (par exemple quand la boucle définit un nouveau **DBT**), le pod redémarre cette horloge, et l'impulsion qu'il était en train de compter est perdue. Comme la boucle change souvent le débit basal, surtout la nuit, le pod peut finir par injecter moins d'insuline basale que prévu.

   **AAPS** compare l'insuline basale que le pod indique avoir injectée avec ce qu'il aurait dû injecter. Quand le manque atteint une demi-impulsion ou plus, le pilote injecte une impulsion en plus comme correction du basal, pour que vous receviez quand même l'insuline basale demandée par votre profil et par la boucle. Aucune correction n'est envoyée pendant que le pod est suspendu, ou pendant qu'un **DBT** à zéro est en cours.
   ```

(omnipod-dash-settings)=

## Paramètres Dash

Il existe deux façons d'ouvrir les paramètres du pilote Dash :

- Appuyez sur l'icône **Paramètres** (roue dentée) en haut à droite de l'[écran de la pompe DASH](#omnipod-dash-tab).
- Ouvrez le **menu** (☰) en haut à gauche de l'écran principal et choisissez **Configuration** > **Pompe**. Sur la carte **Omnipod Dash**, appuyez sur **Paramètres**.

Les paramètres sont groupés en quatre sections dépliables : **Bips de confirmation**, **Alertes**, **Notifications** et **Paramètres Avancés**. Appuyez sur une section pour l'ouvrir :

![Les paramètres Dash](../images/v4/Pumps/dash_settings.png)

La plupart des paramètres sont des interrupteurs marche/arrêt.

### Bips de confirmation

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Bips de confirmation du pod pour l'injection et les changements de bolus, de basal, de SMB et de DBT.

**Bips bolus activés :**    Le pod bipe quand un bolus est injecté. Activé par défaut.

**Bips basal activés :**    Le pod bipe quand un nouveau débit basal est défini, ou quand le débit basal actif est annulé ou modifié. Désactivé par défaut.

**Bips SMB activés :**  Le pod bipe quand un SMB est injecté. Activé par défaut.

**Bips DBT activés :**  Le pod bipe quand un DBT est défini ou annulé. Désactivé par défaut.

### Alertes

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, ces paramètres se trouvent dans la section dépliable **Alertes**.
```

Alertes du pod pour l'expiration du pod, l'arrêt et le réservoir bas. Quand vous modifiez ces paramètres pendant qu'un pod est actif, **AAPS** envoie les nouveaux paramètres d'alerte au pod.

***REMARQUE :** Une notification **AAPS** est TOUJOURS affichée pour chaque alerte dès qu'**AAPS** a communiqué avec le pod après le déclenchement de l'alerte. Fermer la notification n'arrête PAS l'alerte du pod. Pour arrêter l'alerte, ouvrez l'écran de la pompe DASH et appuyez sur **Alertes silencieuses**.*

**Rappel d'expiration activé :**    Quand c'est activé, le pod bipe quand l'heure du rappel est atteinte. Activé par défaut.

**Rappel nombre d'heures avant l'expiration (72 heures) :** Combien d'heures avant l'expiration du pod à 72 heures le rappel commence (1 à 24 heures ; 4 par défaut).

**Alerte d'expiration activée :**   Quand c'est activé, le pod bipe quand l'heure de l'alerte est atteinte, et de nouveau 1 heure avant l'arrêt. Activé par défaut.

**Alerte nombre d'heures avant l'arrêt (80 heures) :**  Combien d'heures avant l'arrêt du pod à 80 heures l'alerte commence (1 à 8 heures ; 8 par défaut).

**Alerte Réservoir bas activée :**    Le pod vous alerte quand l'insuline restante dans le réservoir descend à la valeur de **Nombre d'unités**. Activé par défaut.

**Nombre d'unités :**    Le nombre d'unités auquel l'alerte de réservoir bas se déclenche (5 à 50 unités ; 20 par défaut).

### Notifications

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

Choisissez si **AAPS** joue un son avec ses notifications quand il n'est pas sûr qu'un DBT, un SMB ou un bolus a été injecté, et quand l'injection est suspendue.

***REMARQUE :** Ce sont seulement des notifications du téléphone ; le pod lui-même ne bipe pas.*

**Son pour les notifications DBT incertains activé :**  Joue un son avec la notification quand **AAPS** n'est pas sûr qu'un DBT a été défini.

**Son pour les notifications SMB incertains activé :**  Joue un son avec la notification quand **AAPS** n'est pas sûr qu'un SMB a été injecté.

**Son pour les notifications bolus incertains activé :**    Joue un son avec la notification quand **AAPS** n'est pas sûr qu'un bolus a été injecté.

**Son activé en cas de notification de pause d'injection :**     Joue un son avec la notification quand l'injection d'insuline est suspendue.

(omnipod-dash-advanced-settings)=

### Paramètres Avancés

![La section Paramètres Avancés](../images/v4/Pumps/dash_settings_advanced.png)

**Appairage Bluetooth :**  Appaire le pod avec le téléphone par Bluetooth. Essayez-le seulement si le pod n'arrive pas à garder une connexion stable, par exemple sous Android 15 (voir [Omnipod DASH : restrictions et problèmes connus dans AAPS](#omnipod-dash-constraints)). Quand il est activé, le téléphone affiche des demandes d'appairage que vous devez accepter. Laissez-le désactivé si le pod se connecte bien. Il n'a aucun effet en dessous d'Android 15. Désactivé par défaut.

## Âge de l'insuline et de la canule

La [ligne d'état](#screens-sensor-level-battery) de l'écran principal affiche l'âge de votre insuline et de votre canule. Avec Omnipod, cela fonctionne un peu différemment qu'avec les pompes à tubulure.

**AAPS** enregistre automatiquement un changement de canule et un changement d'insuline à chaque activation d'un pod. Cela remet à zéro l'âge de l'**Insuline** et de la **Canule** après chaque changement de pod. Vous n'avez pas besoin de les enregistrer vous-même avec **Amorcer/Remplir**. C'est parce que le pod insère la canule directement dans la peau là où il est collé : Omnipod n'utilise pas de tubulure.

L'âge de la **Pile pompe** n'est pas indiqué : la pile et le réservoir d'insuline sont intégrés dans chaque pod, et la pile dure toujours plus longtemps que le pod lui-même (80 heures au maximum).

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, où ces âges étaient affichés dans la section **Careportal** de l'onglet **Actions**. Dans **AAPS** 4, ils sont affichés dans la ligne d'état de l'écran principal.
```

### Niveau

**Niveau d'insuline**

Le niveau d'insuline affiché est la quantité indiquée par le pod. Mais le pod n'indique le niveau réel du réservoir que s'il est en dessous de 50 unités. Avant cela, *Over 50 U left* (plus de 50 U restantes) est affiché. La quantité indiquée n'est pas exacte : quand le pod indique « vide », dans la plupart des cas le réservoir contient encore quelques unités d'insuline.

L'écran de la pompe DASH affiche le niveau ainsi :

  * **Over 50 U left** (plus de 50 U restantes) - Le pod indique plus de 50 unités dans le réservoir.
  * **En dessous de 50 unités** - La quantité exacte d'insuline restante dans le réservoir, telle que le pod l'indique.

Remarque supplémentaire :
  * **SMS** - Renvoie la valeur, ou 50+U au-dessus de 50 unités, dans les réponses SMS.
  * **Nightscout** - Envoie une valeur de 50 à Nightscout au-dessus de 50 unités (version 14.07 et plus anciennes). Les versions plus récentes indiquent une valeur de 50+ au-dessus de 50 unités.

(omnipod-dash-troubleshooting)=

## Dépannage

Cette section présente des problèmes connus fréquents et leurs solutions pour l'utilisation de l'Omnipod DASH avec AAPS. Il existe aussi une section [Dépannage général](../GettingHelp/GeneralTroubleshooting.md) dans la documentation, qu'il faut lire car elle traite aussi de sujets utiles pour certains problèmes de Pod.

---

(omnipod-dash-bluetooth-related-issues)=

## Problèmes liés au Bluetooth

Pour les problèmes connus de connexion Bluetooth, de pertes de connexion avec la pompe/les pods, ou d'activation et de connexion, voir [Dépannage Bluetooth](../GettingHelp/BluetoothTroubleshooting.md)

---

(omnipod-dash-delivery-suspended)=

### Injection suspendue

  - Il n'y a plus de bouton de suspension. Si vous voulez « suspendre » le pod, vous pouvez définir un **DBT** à zéro pendant x minutes.
  - Lors des **Changements de profil**, DASH doit suspendre l'injection avant de définir le nouveau **Profil** basal. Si la communication échoue entre les deux commandes, l'injection peut rester suspendue. Dans ce cas :
     - Il n'y aura aucune injection d'insuline, y compris le basal, les SMB, les bolus manuels, etc.
     - Une notification peut indiquer qu'une des commandes n'est pas confirmée : cela dépend du moment où l'échec s'est produit.
     - **AAPS** essaiera de définir le nouveau profil basal toutes les 15 minutes.
     - **AAPS** affichera toutes les 15 minutes une notification indiquant que l'injection est suspendue, si l'injection est toujours suspendue (échec de la reprise de l'injection).
     - Le bouton [**Reprendre l'injection**](#omnipod-dash-resuming-insulin-delivery) est affiché sur l'écran de la pompe DASH si vous voulez reprendre l'injection à la main.
     - Si **AAPS** ne réussit pas à reprendre l'injection tout seul (cela arrive si le pod est hors de portée, si le son est coupé, etc.), le pod commencera à biper 4 fois par minute pendant 3 minutes, puis cela se répétera toutes les 15 minutes si l'injection reste suspendue plus de 20 minutes.
  - Pour les commandes non confirmées, appuyez sur **Actualiser** sur l'écran de la pompe DASH pour les confirmer ou les refuser.

*****REMARQUE :** Quand vous entendez des bips du pod, ne supposez pas que l'injection va continuer sans vérifier le téléphone. L'injection peut rester suspendue, ***vous devez donc vérifier !******

---
(omnipod-dash-pod-failures)=

### Pannes du Pod

- Les pods tombent parfois en panne pour des raisons variées, y compris des problèmes matériels du Pod lui-même.
- Il vaut mieux ne pas ouvrir de demandes d'assistance ou de remplacement auprès d'Insulet, car AAPS n'est pas une méthode approuvée pour utiliser les Pods.
- Une liste des codes de défaut est [**disponible ici**](https://github.com/openaps/openomni/wiki/Fault-event-codes) pour aider à trouver la cause.

Quand un pod tombe en panne, il arrête d'injecter de l'insuline et bipe sans arrêt. **AAPS** affiche une notification sur l'écran principal avec le code et le nom du défaut, et le code *Ref:*, par exemple *Défaut du Pod : 020 ALARM_OCCLUDED*. Appuyez sur **Fermer** pour fermer la notification. Cela n'arrête pas les bips du pod.

![Une notification de défaut du pod](../images/v4/Pumps/dash_pod_fault_notification.png)

Sur l'écran de la pompe DASH, le champ **État du Pod** affiche **ALARM**, le champ **Erreurs** affiche le défaut du pod, et le champ **Notification du PDM** l'explique, par exemple *Occlusion détectée. L'injection d'insuline a été arrêtée. Changez le Pod maintenant. Vérifiez votre glycémie*.

![L'écran de la pompe DASH après un défaut du pod](../images/v4/Pumps/dash_pump_screen_pod_fault.png)

Un pod en panne ne peut pas être réutilisé. Vérifiez votre glycémie, puis [désactivez le pod](#omnipod-dash-deactivate-pod) et activez-en un nouveau.

---
### Éviter les pannes de pod avec l'erreur 49

Cet échec est lié à un état du pod incorrect pour une commande ou à une erreur lors d'une commande d'injection d'insuline. Cela arrive quand le pilote et le Pod ne sont pas d'accord sur l'état réel. Le Pod (par mesure de sécurité intégrée) réagit alors avec un code d'erreur irrécupérable 49 (0x31) et devient ce que l'on appelle un « screamer » : le long bip agaçant qui ne peut être arrêté qu'en perçant un trou à l'endroit prévu au dos du Pod. L'origine exacte d'une « panne de pod 49 » est souvent difficile à trouver. Dans les situations où l'on soupçonne que cette panne peut arriver (par exemple lors de plantages de l'application, avec une version de développement ou lors d'une réinstallation).

---

### Alertes Pompe hors de portée

Quand aucune communication ne peut être établie avec le pod pendant un temps préconfiguré, une alerte « Pompe hors de portée » est déclenchée. Les alertes de pompe hors de portée se configurent en appuyant sur l'icône **Paramètres** (roue dentée) en haut à droite de l'écran principal, puis en choisissant **Alertes locales** ➜ **Seuil d'alerte pompe hors de portée**. La valeur recommandée est une alerte après **120** minutes.

---
(omnipod-dash-export-import)=
### Exporter et importer les paramètres

Exporter les paramètres d'**AAPS** vous permet de restaurer tous vos paramètres et vos Objectifs, par exemple après une réinstallation d'**AAPS** ou sur un nouveau téléphone. **Exportez vos paramètres juste après chaque activation de Pod** et copiez le fichier dans un endroit sûr en dehors de votre téléphone (par exemple Google Drive), pour pouvoir restaurer aussi le Pod actif. Voir [Créer et restaurer des sauvegardes](#ExportImportSettings-Settings-Export).

```{admonition} Importing settings can end your active Pod
:class: warning
Sur le téléphone qui gère déjà le Pod, laissez **Also replace pump settings** (remplacer aussi les paramètres de la pompe) décoché : la session du Pod est gardée et seuls les autres paramètres sont importés. Cochez-le seulement sur un nouveau téléphone, avec un fichier exporté pendant le Pod que vous portez maintenant. Voir [Pompes sans tubulure](#ExportImportSettings-tubeless-pumps).
```

Si les paramètres importés contiennent un Pod qui n'est plus actif, voir la section suivante.

---
### Importer des paramètres qui contiennent l'état d'un Pod inactif

Quand vous importez des paramètres qui contiennent les données d'un Pod qui n'est plus actif, AAPS essaiera de s'y connecter, ce qui échouera bien sûr. Vous ne pouvez pas activer un nouveau Pod dans cette situation.

Pour supprimer l'ancienne session de pod :
1. Sur l'écran de la pompe DASH, appuyez sur **Désactiver Pod**. La désactivation va très probablement échouer.
2. Quand elle échoue, appuyez sur **Supprimer Pod** et confirmez (voir [Supprimer un pod](#omnipod-dash-discard-pod)).
3. Une fois l'ancien pod supprimé, vous pouvez activer un nouveau pod.

### Erreur générique : java.lang.IllegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

Si vous recevez cette erreur en essayant d'initialiser un nouveau pod, c'est qu'**AAPS** échoue car il a encore les paramètres d'un ancien pod enregistrés dans sa configuration.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

Cela peut arriver si vous restaurez une sauvegarde, ou si la désactivation d'un pod échoue.

Pour résoudre le problème, appuyez sur **Annuler** pour quitter l'activation. Sur l'écran de la pompe DASH, appuyez sur **Supprimer Pod** s'il est affiché. Sinon, appuyez sur **Désactiver Pod**, et quand la désactivation échoue, appuyez sur **Supprimer Pod** (voir [Supprimer un pod](#omnipod-dash-discard-pod)).

Vous devriez maintenant pouvoir activer un nouveau pod.

---
### Réinstaller AAPS

Quand vous désinstallez **AAPS**, vous perdez tous vos paramètres, vos objectifs et la session de Pod en cours. **Pour les restaurer, assurez-vous d'avoir un fichier de paramètres exporté récent !**

Avec un Pod actif, utilisez un export fait pendant la session de Pod actuelle (voir [Exporter et importer les paramètres](#omnipod-dash-export-import)).

1. Exportez vos paramètres et gardez une copie dans un endroit sûr (par ex. Google Drive).
2. Désinstallez **AAPS** et redémarrez votre téléphone.
3. Installez la nouvelle version d'**AAPS**.
4. Importez vos paramètres.
5. Vérifiez toutes les préférences (vous pouvez aussi importer à nouveau les paramètres).
6. Activez un nouveau pod.
7. Ensuite : exportez les paramètres actuels.

---
### Mettre à jour AAPS vers une version plus récente

Dans la plupart des cas, il n'est pas nécessaire de désinstaller. Vous pouvez faire une installation « par-dessus » en lançant l'installation de la nouvelle version. C'est aussi possible pendant une session de Pod active.

1. Exporter les paramètres.
2. Installez la nouvelle version d'**AAPS**.
3. Vérifiez que l'installation a réussi
4. Faites REPRENDRE le Pod ou activez un nouveau pod.
5. Ensuite : exportez les paramètres actuels.

---
### Alertes du pilote Omnipod

Le pilote Omnipod Dash affiche diverses alertes qui lui sont propres sur l'**écran principal**. La plupart sont informatives et peuvent être fermées, tandis que certaines demandent une action de l'utilisateur pour résoudre la cause de l'alerte.

Voici un résumé des principales alertes que vous pouvez rencontrer :

- *Défaut du Pod : XXX NOM*, suivi de *Ref : ...* : le pod est en panne et a arrêté d'injecter de l'insuline. Changez le pod. Voir [Pannes du Pod](#omnipod-dash-pod-failures).
- *Pas de Pod actif* : aucune session de pod n'a été trouvée. Cette notification revient tant que vous n'avez pas activé un nouveau pod. Une fois un pod activé, elle disparaît automatiquement.
- *Injection d'insuline suspendue* : le pod a suspendu l'injection d'insuline. Voir [Reprendre l'injection d'insuline](#omnipod-dash-resuming-insulin-delivery).
- *Le paramétrage du profil de basal a peut-être échoué. L'injection peut être suspendue ! Actualisez manuellement l'état du Pod à partir de l'onglet Omnipod et reprenez l'injection si nécessaire.* La définition du **Profil** basal sur le pod a peut-être échoué. Appuyez sur **Actualiser** sur l'écran de la pompe DASH (le message parle toujours de « l'onglet Omnipod »), et appuyez sur **Reprendre l'injection** s'il est affiché.
- *Impossible de vérifier si le SMB (X U) a réussi. Actualisez l'état du pod pour confirmer ou refuser cette commande.* **AAPS** n'a pas pu confirmer que le **SMB** a été injecté. Appuyez sur **Actualiser** sur l'écran de la pompe DASH et vérifiez le champ **Dernier bolus**.
- *Statut de l'injection du bolus incertain. Rafraîchir le statut du pod pour confirmer ou refuser.* C'est la même chose pour un bolus normal : appuyez sur **Actualiser** sur l'écran de la pompe DASH.
- *L'heure du pod est différente de l'heure du téléphone. Changez de profil pour corriger le débit de basal.* Voir la remarque sur l'heure d'été et les fuseaux horaires dans [Omnipod DASH : restrictions et problèmes connus dans AAPS](#omnipod-dash-constraints).

(omnipod-dash-where-to-get-help-for-dash)=

## Où obtenir de l'aide

Tout le développement pour le DASH est fait par la communauté de manière **bénévole** ; gardez-le à l'esprit et suivez ces règles avant de demander de l'aide :

-  **Niveau 0 :** Lisez la section correspondante de cette documentation pour vous assurer que vous comprenez comment la fonctionnalité avec laquelle vous avez des difficultés est censée fonctionner.
-  **Niveau 1 :** Si vous rencontrez encore des problèmes que vous ne pouvez pas résoudre avec ce document, allez sur le canal *#AAPS* de **Discord** avec [ce lien d'invitation](https://discord.gg/4fQUWHZ4Mw). Il existe aussi de nombreux groupes Facebook et autres où vous pouvez poser vos questions (voir [**Où puis-je obtenir de l'aide ?**](../GettingHelp/WhereCanIGetHelp.md))
-  **Niveau 2 :** Cherchez dans les problèmes existants si votre problème a déjà été signalé dans [Issues](https://github.com/nightscout/AndroidAPS/issues) s'il existe, merci de le confirmer, de le commenter ou d'ajouter des informations sur votre problème. Sinon, créez un [nouveau problème (issue)](https://github.com/nightscout/AndroidAPS/issues) et joignez [vos fichiers log](../GettingHelp/AccessingLogFiles.md).
-  **Soyez patient - la plupart des membres de notre communauté sont des bénévoles de bonne nature, et résoudre les problèmes nécessite souvent du temps et de la patience de la part des utilisateurs et des développeurs.**

Quand vous demandez de l'aide, préparez les informations suivantes pour aider la communauté avec vos questions et problèmes précis :
- Marque et modèle du téléphone Android
- Version d'Android (par ex. 15 ou 16)
  - Avez-vous récemment mis à jour votre version d'Android ?
- La version d'**AAPS** que vous utilisez
- Une description simple du problème que vous rencontrez, en pensant aux points suivants
   - Est-ce que cela fonctionnait avant ?
   - Quand est-ce que cela a fonctionné ou pas ?
   - Avez-vous modifié la configuration ou les paramètres du profil ?
   - Avez-vous associé un nouvel appareil Bluetooth ?
   - Avez-vous mis à jour ou installé une nouvelle application ?
   - Combien de temps cela a-t-il fonctionné avant d'arrêter ?
