# Omnipod Eros

Ces instructions servent à configurer la pompe de génération Omnipod Eros (**PAS l'Omnipod Dash**).

```{admonition} Omnipod Eros is being phased out
:class: note

Le [système Omnipod](https://www.omnipod.com/current-podders/resources/omnipod-system) (l'Omnipod d'origine, composé du gestionnaire personnel de diabète (PDM) et du Pod) est en cours d'arrêt, et la date de fin dépend du pays. Par exemple, il ne sera plus disponible au Canada après le 30 juin 2026. Si vous dépendez de la pompe Eros, préparez à l'avance le passage à une pompe prise en charge.
```

**Ce logiciel est une partie d'un système de pancréas artificiel "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Vous êtes seul responsable de ce que vous faites avec ce système.**

```{contents} Table of contents
:depth: 1
:local: true
```

## Configuration matérielle et logicielle requise

- **Périphérique de communication Pod**

> Composant qui permet la communication entre votre téléphone avec AAPS et les Pods de génération Eros.
> 
> > - ![OrangeLink](../images/omnipod/OrangeLink.png)  [Site internet OrangeLink](https://getrileylink.org/product/orangelink)
> > - ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433MHz](https://getrileylink.org/product/rileylink433)
> > - ![EmaLink](../images/omnipod/EmaLink.png)  [Site internet Emalink](https://github.com/sks01/EmaLink) - [Contact](mailto:getemalink@gmail.com)
> > - ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact](mailto:Boshetyn@ukr.net)
> > - ![LoopLink](../images/omnipod/LoopLink.png)  [Site internet LoopLink](https://www.getlooplink.org/) - [Contact](https://jameswedding.substack.com/) - Non testé

- ![Android_phone](../images/omnipod/Android_phone.png)  **Téléphone Mobile**

> Composant qui utilisera AAPS et enverra des commandes de contrôle au périphérique de communication Pod.
> 
> > - Un [téléphone Android](#Phones-list-of-tested-phones) compatible, avec **AAPS** et les composants associés configurés.

- ![Omnipod_Pod](../images/omnipod/Omnipod_Pod.png)  **Dispositif d'injection d'Insuline**

> Composant qui interprétera les commandes reçues du périphérique de communication Pod en provenance de votre téléphone AAPS.
> 
> > - Un nouveau pod Omnipod (génération Eros - **PAS DASH**)

Ces instructions supposent que vous commencez une nouvelle session de pod. Si ce n'est pas le cas, soyez patient et commencez ce processus lors de votre prochain changement de pod.

Sur cette page, **RileyLink** désigne n'importe lequel des périphériques de communication pod listés ci-dessus.

## Avant de commencer

**SÉCURITÉ D'ABORD** - ne pas essayer ce processus dans un environnement où vous ne pouvez pas récupérer une erreur (pods supplémentaires, insuline, RileyLink chargé et les smartphones sont nécessaires).

**Votre PDM Omnipod ne fonctionnera plus après l'activation de votre pod par le driver AAPS Omnipod**. Vous avez précédemment utilisé votre PDM Omnipod pour envoyer des commandes à votre pod Omnipod Eros. Un pod Omnipod Eros ne permet qu'à un seul appareil de communiquer avec lui. L'appareil qui active le pod avec succès est le seul appareil autorisé à communiquer avec lui à partir de ce moment. Cela signifie qu'une fois que vous activez un pod Omnipod Eros avec votre RileyLink via le pilote AAPS Omnipod, **vous ne pourrez plus utiliser votre PDM avec votre pod**. Le pilote AAPS Omnipod avec le RileyLink est maintenant votre PDM. *Cela ne veut PAS dire que vous devez jeter votre PDM. Il est recommandé de le garder comme secours, et pour les urgences si AAPS ne fonctionne pas correctement.*

**Un seul RileyLink à la fois peut communiquer avec un pod.** **AAPS** se souvient d'un seul RileyLink appairé. Si vous en appairez un autre, il remplace le précédent.

**Votre pod ne s'arrêtera pas lorsque le RileyLink sera hors de portée.** Lorsque votre RileyLink est hors de portée ou que le signal est bloqué pour communiquer avec le pod actif, votre pod continuera à injecter l'insuline basale. Lors de l'activation d'un pod, le profil basal défini dans AAPS sera programmé dans le nouveau pod. Si vous perdez le contact avec le pod, il retournera à ce profil de basal. Vous ne pourrez pas envoyer de nouvelles commandes tant que le RileyLink ne sera pas revenu à portée et n'aura pas rétabli la connexion.

**Les profils de débit basal par pas de 30 min ne sont PAS pris en charge dans AAPS.** Si vous débutez avec AAPS et que vous configurez votre profil de débit basal pour la première fois, sachez que les débits basaux qui commencent à la demi-heure ne sont pas pris en charge : vous devrez ajuster votre profil de débit basal pour qu'il commence à l'heure pile. Par exemple, si vous avez un débit de basal de 1,1 unités qui commence à 09h30 et a une durée de 2 heures se terminant à 11h30, cela ne marchera pas.  Vous devrez mettre à jour ce taux de basal de 1,1 soit sur une plage horaire de 9h00 à 11h00 soit de 10h00 à 12h00.  Même si les changements de débit de basal du profil toutes les 30 min sont supportés par le matériel Omnipod lui-même, AAPS n'est pas en mesure de les prendre en compte avec ses algorithmes actuellement.

## Activation du pilote Omnipod dans AAPS

Vous pouvez activer le pilote Omnipod dans AAPS de **deux façons** :

### Option 1 : L'Assistant de configuration

Après l'installation d'une nouvelle version d'AAPS, l'**Assistant de configuration** démarre automatiquement. Si vous avez déjà exporté vos paramètres depuis une installation précédente, vous pouvez les importer dans l'assistant. Pour une nouvelle installation, continuez ci-dessous.

Suivez l'[Assistant de configuration](../SettingUpAaps/SetupWizard.md) jusqu'à l'étape **Pompe**, puis choisissez **Omnipod Eros** (la description indique « Intégration de la pompe Omnipod Eros »).

![L'étape Pompe de l'assistant de configuration avec Omnipod Eros](../images/setup-wizard/Wizard-Pump-Omnipod.png)

L'Assistant de configuration n'appaire pas votre RileyLink. Une fois l'assistant terminé, ouvrez l'écran de la pompe Omnipod et appairez le RileyLink comme décrit dans la section [Configuration RileyLink](#OmnipodEros-rileylink-setup).

**OU**

### Option 2 : l'écran Configuration

Ouvrez le **menu** (☰) en haut à gauche > **Configuration** > **Pompe** et cochez le **bouton radio** de **Omnipod Eros**.

Une fois choisie, la carte **Omnipod Eros** affiche deux boutons, **Paramètres** et **Ouvrir le plugin** :

![Le plugin Omnipod Eros activé dans Configuration > Pompe](../images/v4/Pumps/omnipod_enabled.png)

**Paramètres** ouvre les paramètres du pilote Omnipod (voir [Paramètres Omnipod](#OmnipodEros-omnipod-settings)) :

![Paramètres du pilote Omnipod](../images/v4/Pumps/omnipod_settings.png)

**Ouvrir le plugin** ouvre l'écran de la pompe Omnipod. Vous pouvez aussi l'ouvrir à tout moment depuis l'écran principal avec **Gestion** > **Pompe**. Cette page l'appelle l'**écran de la pompe Omnipod**. Avant d'appairer un RileyLink et d'activer un pod, il ressemble à ceci :

![L'écran de la pompe Omnipod avant l'appairage](../images/v4/Pumps/omnipod_pump_screen.png)

### Vérification de la sélection du pilote Omnipod

Pour vérifier que vous avez activé le pilote Omnipod, ouvrez **Gestion** > **Pompe** depuis l'écran principal. Vous devriez voir l'écran de la pompe **Omnipod Eros** montré ci-dessus. Si vous n'avez pas encore appairé de RileyLink, **État du RileyLink** affiche **Non démarré** et **État du Pod** affiche **Pas de Pod actif**.

## Configuration Omnipod

Toutes les fonctions du pod et du RileyLink sont des boutons sur l'[écran de la pompe Omnipod](#OmnipodEros-omnipod-pod-tab) (**Gestion** > **Pompe**). Certains boutons n'apparaissent que dans certaines situations, par exemple quand un pod est actif.

> ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png) Rafraîchir la connectivité et l'état du Pod
> 
> ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png) Gestion du Pod (activer, désactiver, tester les bips, stats du RileyLink et historique du Pod)

```{admonition} Older screenshot
:class: note
Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, il n'y a plus de bouton **POD MGMT** ni de menu Gestion du Pod : **Actualiser** et toutes les actions de gestion du pod sont des boutons sur l'écran de la pompe Omnipod.
```

(OmnipodEros-rileylink-setup)=

### Configuration RileyLink

Si vous avez déjà appairé votre RileyLink, passez à la section [Activation d'un Pod](#OmnipodEros-activating-a-pod) ci-dessous.

*Remarque : Un bon signe visuel que le RileyLink n'est pas connecté est l'absence des boutons de traitement (barre d'outils QuickLaunch) sur l'écran principal. Cela se produira également pendant environ les 30 premières secondes après le démarrage d'AAPS, car il se connecte activement au RileyLink.*

1. Assurez-vous que votre RileyLink est complètement chargé et allumé.

2. Placez le RileyLink [près de votre téléphone](#OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 cm ou moins).

3. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Appairer le RileyLink**.

4. L'écran **Appairer le RileyLink** commence tout de suite à rechercher les appareils Bluetooth. Appuyez sur votre RileyLink dans la liste des appareils trouvés.

   ![L'écran Appairer le RileyLink pendant la recherche d'appareils](../images/omnipod/eros_pair_rileylink_scanning.png)

5. Quand **RileyLink appairé avec succès** s'affiche avec le nom et l'adresse de votre appareil, appuyez sur **OK**.

6. De retour sur l'écran de la pompe Omnipod, vérifiez que **État du RileyLink** passe à **Connecté**. **État du Pod** devrait afficher **Pas de Pod actif**. Si le RileyLink ne se connecte pas, appuyez sur **Réinitialiser le RileyLink**, ou redémarrez **AAPS**.

![RileyLink_Setup_1](../images/omnipod/RileyLink_Setup_1.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

![RileyLink_Setup_3](../images/omnipod/RileyLink_Setup_3.png) ![RileyLink_Setup_4](../images/omnipod/RileyLink_Setup_4.png)

![RileyLink_Setup_5](../images/omnipod/RileyLink_Setup_5.png)

![RileyLink_Setup_6](../images/omnipod/RileyLink_Setup_6.png)

```{admonition} Older screenshot
:class: note
Les six captures d'écran ci-dessus (après l'étape 6) viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, vous appairez le RileyLink avec le bouton **Appairer le RileyLink** sur l'écran de la pompe Omnipod, et non plus avec **Configuration RileyLink** dans les paramètres Omnipod, et la recherche démarre automatiquement.
```

```{note}
Pour passer à un autre RileyLink (par exemple un appareil de secours), appuyez à nouveau sur **Appairer le RileyLink** et choisissez le nouvel appareil. Il remplace celui appairé avant. Vous n'avez pas besoin de supprimer l'ancien appareil d'abord.
```

(OmnipodEros-activating-a-pod)=

### Activation d’un Pod

Avant de pouvoir activer un pod, assurez-vous que votre RileyLink est appairé et que **État du RileyLink** affiche **Connecté**. Le bouton **Activer Pod** reste désactivé tant que le RileyLink n'est pas prêt.

*RAPPEL : Pour des raisons de sécurité, la communication avec le Pod pour l'appairage lors de l'activation ne fonctionne qu'à une portée limitée. Avant d'être appairé le signal radio du Pod est plus faible, mais après l'appairage, il fonctionnera à pleine puissance. Pendant ces procédures, assurez-vous que votre pod est* [tout près](#OmnipodEros-optimal-omnipod-and-rileylink-positioning) *(~30 cm ou moins), mais pas au-dessus du RileyLink ni juste à côté.*

01. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Activer Pod**.

    Si vous n'avez jamais activé de profil, une étape **Profil nécessaire** s'affiche d'abord. Sélectionnez le profil à appliquer lors de l'activation.

    > ![Activate_Pod_1](../images/omnipod/Activate_Pod_1.png) ![Activate_Pod_2](../images/omnipod/Activate_Pod_2.png) 
    > 
    > ```{admonition} Older screenshot
    >     :class: note
    >     Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Activer Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu **POD MGMT**.
    > ```

02. L'écran **Remplir Pod** s'affiche. Remplissez un nouveau pod avec assez d'insuline pour 3 jours et attendez deux bips. Ils indiquent que la quantité minimale de 80 unités a été remplie. Videz complètement la seringue de remplissage, même après avoir entendu les deux bips. Lors du calcul de la quantité totale d'insuline dont vous avez besoin pendant 3 jours, veuillez prendre en compte que l'amorçage du pod utilisera de 12 à 15 unités. N'enlevez pas encore le capuchon d'aiguille du pod.

    > ![Activate_Pod_3](../images/omnipod/Activate_Pod_3.png)
    > 
    > Assurez-vous que le nouveau pod et le RileyLink sont tout près l'un de l'autre (~30 cm ou moins) et appuyez sur **Suivant**.

03. **Sélectionner l'insuline** (affiché seulement si vous avez configuré plus d'une insuline) : choisissez l'insuline avec laquelle vous remplissez le pod et appuyez sur **Suivant**. Un changement de profil avec cette insuline est appliqué après l'activation.

04. Sur l'écran **Initialiser Pod**, le pod commence à s'amorcer (vous entendrez un clic suivi d'une série de tic-tac pendant que le pod s'amorce). Si le RileyLink est hors de portée du pod en cours d'activation, vous recevrez le message d'erreur **Pas de réponse du Pod**. Dans ce cas, [rapprochez le RileyLink](#OmnipodEros-optimal-omnipod-and-rileylink-positioning) du Pod (~30 cm ou moins), mais pas au-dessus du Pod ni juste à côté, et appuyez sur **Réessayer**.

    > ![Activate_Pod_4](../images/omnipod/Activate_Pod_4.png) ![Activate_Pod_5](../images/omnipod/Activate_Pod_5.png)

05. Quand l'amorçage a réussi, une coche verte s'affiche et le bouton **Suivant** devient actif. Appuyez sur **Suivant**.

    > ![Activate_Pod_6](../images/omnipod/Activate_Pod_6.png)

06. **Localisation du site** (affiché seulement si **Gérer la rotation du site de la pompe** est activé dans [Rotation du site](#Aapsscreens-site-rotation)) : choisissez l'endroit où vous placez le pod sur votre corps et appuyez sur **Suivant**.

07. L'écran **Collez Pod** s'affiche. Préparez le site de perfusion du nouveau pod. Retirez le capuchon d'aiguille en plastique du pod et la protection en papier blanc de l'adhésif, puis collez le pod à l'endroit choisi sur votre corps. Si la canule dépasse, appuyez sur **Annuler** et jetez le pod. Ensuite, appuyez sur **Suivant**.

    > ![Activate_Pod_7](../images/omnipod/Activate_Pod_7.png)

08. Une boîte de dialogue de confirmation s'affiche : « Lorsque vous appuyez sur OK, la canule sera insérée ». **Appuyez sur OK SEULEMENT si vous êtes prêt à insérer la canule**.

    > ![Activate_Pod_8](../images/omnipod/Activate_Pod_8.png)

09. Sur l'écran **Insérer canule**, l'Omnipod peut mettre un peu de temps à répondre et à insérer la canule (1 à 2 minutes au maximum) : soyez patient.

    > Si le RileyLink est hors de portée du pod en cours d'activation, vous recevrez le message d'erreur **Pas de réponse du Pod**. Dans ce cas, rapprochez le RileyLink du Pod (~30 cm ou moins), mais pas au-dessus du Pod ni juste à côté, et appuyez sur **Réessayer**.
    > 
    > Si le RileyLink est hors de portée Bluetooth ou n'a pas de connexion active avec le téléphone, vous recevrez le message d'erreur **Aucune réponse du RileyLink**. Dans ce cas, rapprochez le RileyLink du téléphone et appuyez sur **Réessayer**.
    > 
    > *REMARQUE : Avant d'insérer la canule, il est recommandé de pincer la peau près du point d'insertion de la canule. Cela permet une insertion en douceur de l'aiguille et réduira les risques d'occlusions.*
    > 
    > ![Activate_Pod_9](../images/omnipod/Activate_Pod_9.png)
    > 
    > ![Activate_Pod_10](../images/omnipod/Activate_Pod_10.png) ![Activate_Pod_11](../images/omnipod/Activate_Pod_11.png)

10. Une coche verte s'affiche, et le bouton **Suivant** est activé en cas d'insertion de canule réussie. Appuyez sur **Suivant**.

    > ![Activate_Pod_12](../images/omnipod/Activate_Pod_12.png)

11. L'écran **Pod activé** s'affiche. Vérifiez que la canule a été insérée correctement, et changez votre pod si vous pensez que ce n'est pas le cas. Appuyez sur **Terminer**. Félicitations ! Vous avez démarré une nouvelle session de Pod actif.

    > ![Activate_Pod_13](../images/omnipod/Activate_Pod_13.png) 
    > 
    > ```{admonition} Older screenshot
    >     :class: note
    >     Les captures d'écran des étapes 2 à 11 viennent d'une version plus ancienne d'**AAPS** et peuvent être différentes dans **AAPS** 4. Les étapes **Sélectionner l'insuline** et **Localisation du site** ne sont pas montrées.
    > ```

12. Vous revenez à l'écran de la pompe Omnipod. Le bouton **Activer Pod** est remplacé par **Désactiver Pod**, car vous ne pouvez pas activer un autre pod sans d'abord désactiver le pod actif.

    L'écran de la pompe affiche maintenant les informations sur votre pod actif, y compris le débit basal actuel, le niveau du réservoir, l'insuline injectée, les erreurs et les alertes du pod. Pour plus de détails, voir la section [Écran de la pompe Omnipod](#OmnipodEros-omnipod-pod-tab).

    ![Activate_Pod_14](../images/omnipod/Activate_Pod_14.png) ![Activate_Pod_15](../images/omnipod/Activate_Pod_15.png)

    ```{admonition} Older screenshot
    :class: note
    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, il n'y a plus de menu Gestion du Pod : vous revenez directement à l'écran de la pompe Omnipod, où **Désactiver Pod** remplace **Activer Pod**.
    ```

```{note}
Si l'activation a été interrompue après l'amorçage (par exemple parce que l'application a été fermée), appuyez à nouveau sur **Activer Pod**. L'assistant reprend aux étapes d'insertion de la canule.
```

### Désactivation du Pod

En utilisation normale, la durée de vie d'un pod est de l'ordre de trois jours (72 heures) et de 8 heures supplémentaires après l'expiration du pod soit un total de 80 heures d'utilisation du pod.

Pour désactiver un pod (soit après son expiration soit à cause d'une erreur du pod) :

1. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Désactiver Pod**.

   > ![Deactivate_Pod_1](../images/omnipod/Deactivate_Pod_1.png) ![Deactivate_Pod_2](../images/omnipod/Deactivate_Pod_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Désactiver Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu **POD MGMT**.
   > ```

2. Sur l'écran **Désactiver Pod**, assurez-vous d'abord que le RileyLink est tout près du pod, mais pas au-dessus du pod ni juste à côté. Puis appuyez sur **Suivant**. Une fenêtre demande *Un Pod qui a été désactivé ne peut plus être utilisé. Désactiver ce Pod maintenant ?* Appuyez sur **OK** pour commencer la désactivation du pod, ou sur **Annuler** pour le garder. La désactivation suspend toute injection d'insuline et ne peut pas être annulée.

   > ![Deactivate_Pod_3](../images/omnipod/Deactivate_Pod_3.png)

3. L'écran **Désactivation du Pod** s'affiche, et le pod émet un bip de confirmation quand la désactivation a réussi.

   > ![Deactivate_Pod_4](../images/omnipod/Deactivate_Pod_4.png)
   > 
   > **SI la désactivation échoue** et que vous n'entendez pas de bip de confirmation, vous pouvez recevoir le message **Aucune réponse du RileyLink** ou **Pas de réponse du Pod**. Appuyez sur **Réessayer** pour essayer à nouveau la désactivation. Si la désactivation échoue encore, appuyez sur **Supprimer Pod** et confirmez. **AAPS** oublie alors le pod. L'injection d'insuline n'a **pas** été suspendue : retirez donc le pod de votre corps. Si votre pod émet une alarme continue (« screamer »), vous devrez peut-être l'arrêter à la main (avec une épingle ou un trombone), car **Supprimer Pod** ne l'arrête pas.
   > 
   > > ![Deactivate_Pod_5](../images/omnipod/Deactivate_Pod_5.png)  ![Deactivate_Pod_6](../images/omnipod/Deactivate_Pod_6.png)

4. Une coche verte s'affiche quand la désactivation a réussi. Appuyez sur **Suivant** pour afficher l'écran **Pod désactivé**. Vous pouvez maintenant retirer votre pod, car la session active a été désactivée.

   > ![Deactivate_Pod_7](../images/omnipod/Deactivate_Pod_7.png)

5. Appuyez sur **Terminer** pour revenir à l'écran de la pompe Omnipod.

   > ![Deactivate_Pod_8](../images/omnipod/Deactivate_Pod_8.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran des étapes 2 à 5 viennent d'une version plus ancienne d'**AAPS** et peuvent être différentes dans **AAPS** 4.
   > ```

6. Sur l'écran de la pompe Omnipod, vérifiez que **État du RileyLink** affiche **Connecté** et que **État du Pod** affiche **Pas de Pod actif**.

   > ![Deactivate_Pod_9](../images/omnipod/Deactivate_Pod_9.png)  ![Deactivate_Pod_10](../images/omnipod/Deactivate_Pod_10.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Terminer** vous ramène directement à l'écran de la pompe Omnipod ; il n'y a plus de menu Gestion du Pod ni d'onglet **Omnipod (POD)**.
   > ```

### Suspendre et reprendre l'injection d'Insuline

La procédure ci-dessous montre comment suspendre et reprendre l'injection d'insuline.

*REMARQUE - si vous ne voyez pas de bouton **Suspendre***, c'est qu'il est masqué par défaut. Activez **Montrer le bouton "Suspendre" dans l'onglet Omnipod** dans les [paramètres Omnipod](#OmnipodEros-omnipod-settings), sous **Autres**.

#### Suspendre l'injection d’Insuline

Utilisez cette commande pour placer le pod actif dans un état suspendu. Dans cet état suspendu, le pod n'injecte plus d'insuline. Cette commande imite la fonction de suspension que le PDM Omnipod d'origine envoie à un pod actif.

1. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Suspendre**. La commande de suspension est envoyée au pod actif par le RileyLink.

2. Quand le pod a suspendu toute injection d'insuline, **État du Pod** affiche **Suspendu** et le bouton **Suspendre** est remplacé par **Reprendre l'injection**.

   > ![Suspend_Insulin_Delivery_1](../images/omnipod/Suspend_Insulin_Delivery_1.png) ![Suspend_Insulin_Delivery_2](../images/omnipod/Suspend_Insulin_Delivery_2.png)
   > 
   > ![Suspend_Insulin_Delivery_3](../images/omnipod/Suspend_Insulin_Delivery_3.png)
   > 
   > ![Suspend_Insulin_Delivery_4](../images/omnipod/Suspend_Insulin_Delivery_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, ces étapes se font sur l'écran de la pompe Omnipod, et non plus dans l'onglet **Omnipod (POD)**, et le résultat s'affiche dans **État du Pod**.
   > ```

Si la commande échoue, une boîte de dialogue **Attention** affiche « Échec pour suspendre l'injection » avec la raison. Vérifiez la connexion du RileyLink et réessayez.

#### Reprendre l'injection d'insuline

Utilisez cette commande pour demander au pod actif, actuellement suspendu, de reprendre l'injection d'insuline. Une fois la commande exécutée avec succès, l'insuline sera à nouveau injectée normalement avec le débit de basal défini dans le profil actif pour l'heure actuelle. Le pod acceptera à nouveau les commandes pour les bolus, DBT, et SMB.

1. Ouvrez l'écran de la pompe Omnipod et vérifiez que **État du Pod** affiche **Suspendu**. Appuyez sur **Reprendre l'injection**.

2. Quand la commande réussit, **État du Pod** affiche à nouveau **En cours d'exécution** et le bouton **Reprendre l'injection** disparaît (le bouton **Suspendre** s'affiche à nouveau si vous l'avez activé).

   > ![Resume_Insulin_Delivery_1](../images/omnipod/Resume_Insulin_Delivery_1.png) ![Resume_Insulin_Delivery_2](../images/omnipod/Resume_Insulin_Delivery_2.png)
   > 
   > ![Resume_Insulin_Delivery_3](../images/omnipod/Resume_Insulin_Delivery_3.png)
   > 
   > ![Resume_Insulin_Delivery_4](../images/omnipod/Resume_Insulin_Delivery_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, ces étapes se font sur l'écran de la pompe Omnipod, et non plus dans l'onglet **Omnipod (POD)**, et le résultat s'affiche dans **État du Pod**.
   > ```

Si la commande échoue, une boîte de dialogue **Attention** affiche « Échec de la reprise de l'injection » avec la raison. Vérifiez la connexion du RileyLink et réessayez.

### Mettre en silence les alertes du Pod

*REMARQUE - Le bouton **Alertes silencieuses** ne s'affiche sur l'écran de la pompe Omnipod que lorsque le pod a une alerte active (par exemple l'alerte d'expiration du pod ou de réservoir bas), et seulement si **Rendre automatiquement silencieuses les alertes Pod** est désactivé.*

La procédure ci-dessous montre comment arrêter les bips du pod qui commencent quand le pod atteint l'heure d'avertissement avant son expiration. Cette heure d'avertissement est définie avec **Alerte nombre d'heures avant l'arrêt (80 heures)** dans les paramètres **Alertes** d'Omnipod. La durée de vie maximale d'un pod est de 80 heures (3 jours 8 heures), cependant Insulet recommande de ne pas dépasser la limite de 72 heures (3 jours).

*REMARQUE - Si vous avez activé **Rendre automatiquement silencieuses les alertes Pod** dans les paramètres **Alertes** d'Omnipod, **AAPS** arrête l'alerte automatiquement à la prochaine communication avec le pod, et vous n'avez PAS besoin de le faire à la main.*

1. Quand l'heure d'avertissement est atteinte, le pod bipe pour vous dire qu'il va bientôt expirer et qu'il doit être changé. Sur l'écran de la pompe Omnipod, **Pod expire le** affiche l'heure exacte d'expiration du pod (72 heures après l'activation) ; le texte devient **jaune** 4 heures avant. **Fin matériel du Pod** indique quand le pod arrête d'injecter de l'insuline. **Dernières alertes Pod** affiche **Le Pod expirera bientôt**, et le bouton **Alertes silencieuses** apparaît. **AAPS** affiche aussi une notification sur l'expiration prochaine du pod.

   > ![Acknowledge_Alerts_1](../images/omnipod/Acknowledge_Alerts_1.png) ![Acknowledge_Alerts_2](../images/omnipod/Acknowledge_Alerts_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, le bouton **ACK ALERTS** s'appelle **Alertes silencieuses** et se trouve sur l'écran de la pompe Omnipod.
   > ```

2. Appuyez sur **Alertes silencieuses**. Le RileyLink envoie au pod la commande pour arrêter les bips d'avertissement d'expiration.

   > ![Acknowledge_Alerts_3](../images/omnipod/Acknowledge_Alerts_3.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, le bouton s'appelle **Alertes silencieuses**.
   > ```

3. Quand les alertes sont arrêtées, le pod bipe deux fois. **Dernières alertes Pod** n'affiche plus l'avertissement, le bouton **Alertes silencieuses** disparaît et le pod arrête ses bips d'avertissement d'expiration.

   > ![Acknowledge_Alerts_4](../images/omnipod/Acknowledge_Alerts_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, le résultat s'affiche sur l'écran de la pompe Omnipod : l'avertissement disparaît de **Dernières alertes Pod**.
   > ```

Si la commande échoue (par exemple si le RileyLink est hors de portée du pod), une boîte de dialogue **Attention** affiche « Échec alertes silencieuses » avec la raison. Rapprochez le RileyLink du pod et réessayez.

![Acknowledge_Alerts_5](../images/omnipod/Acknowledge_Alerts_5.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, la boîte de dialogue **Attention** affiche « Échec alertes silencieuses » avec la raison.
```

(OmnipodEros-view-pod-history)=

### Voir l'historique du Pod

Cette section vous montre comment revoir l'historique du pod actif et filtrer selon les catégories d'action. L'outil historique du pod vous permet de visualiser les actions et résultats effectués dans votre pod actuellement actif pendant sa durée de vie de trois jours (72 à 80 heures).

Cette fonction est utile pour vérifier les bolus, les DBT, les changements de basal qui ont été donnés, mais vous pouvez ne pas être sûr qu'ils soient terminés. Les catégories restantes sont utiles en général pour résoudre les problèmes et déterminer l'ordre des événements qui ont conduit à un échec.

*REMARQUE :* Les commandes **incertaines** apparaîtront dans l'historique du pod, cependant en raison de leur nature, vous ne pouvez pas être sûr de leur exactitude.

1. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Historique Pod**.

   > ![Pod_History_1](../images/omnipod/Pod_History_1.png) ![Pod_History_2](../images/omnipod/Pod_History_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Historique Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu **POD MGMT**.
   > ```

2. L'écran **Historique Pod** liste toutes les actions du pod et leurs résultats, les plus récentes en premier, regroupées par jour. Par défaut, **Tous** est sélectionné. Appuyez sur un des boutons de filtre en haut pour n'afficher qu'une seule catégorie. Utilisez la flèche de retour en haut à gauche pour revenir à l'écran de la pompe Omnipod.

   > ![L'écran Historique Pod avec les boutons de filtre](../images/omnipod/Pod_History_3.png)

   > ![Pod_History_4](../images/omnipod/Pod_History_4.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    La deuxième capture d'écran vient d'une version plus ancienne d'**AAPS** et peut être différente dans **AAPS** 4.
   > ```

### Voir les paramètres et l'historique du RileyLink

L'écran **Stats RileyLink** affiche les paramètres de votre RileyLink et du pod actif, ainsi que l'historique de communication des deux. Il a deux onglets : **Paramètres** et **Historique**.

Le bouton **Stats RileyLink** est masqué par défaut. Pour l'afficher sur l'écran de la pompe Omnipod, activez **Afficher le bouton Stats RileyLink dans le menu de gestion du pod** dans les [paramètres Omnipod](#OmnipodEros-omnipod-settings), sous **Autres**.

#### Réétablir manuellement la communication Bluetooth du périphérique de communication Pod

Si votre périphérique de communication pod a été hors de portée Bluetooth de votre téléphone pendant un moment, **État du RileyLink** peut afficher **RileyLink hors de portée** sur l'écran de la pompe Omnipod. **AAPS** se reconnecte normalement tout seul quand l'appareil revient à portée. Sinon :

1. Assurez-vous que le RileyLink est allumé, chargé et près de votre téléphone.

2. Sur l'écran de la pompe Omnipod, appuyez sur **Réinitialiser le RileyLink**. Un message confirme **Configuration du RileyLink réinitialisée**. Voir les [remarques sur Réinitialiser le RileyLink](#OmnipodEros-reset-rileylink-config-notes) ci-dessous.

3. Si la **Connexion Bluetooth** ne se rétablit pas, essayez de **désactiver** manuellement le Bluetooth de votre téléphone, puis de le **réactiver**.

4. S'il ne se reconnecte toujours pas, appuyez sur **Appairer le RileyLink** et choisissez à nouveau votre RileyLink.

5. Après une reconnexion réussie, **État du RileyLink** affiche **Connecté**. Vous pouvez aussi vérifier **État de la connexion** dans l'onglet **Paramètres** de l'écran **Stats RileyLink**. Félicitations, vous avez maintenant reconnecté votre périphérique de communication pod à AAPS !

![RileyLink_Bluetooth_Reset_1](../images/omnipod/RileyLink_Bluetooth_Reset_1.png) ![RileyLink_Bluetooth_Reset_2](../images/omnipod/RileyLink_Bluetooth_Reset_2.png)

![RileyLink_Bluetooth_Reset_3](../images/omnipod/RileyLink_Bluetooth_Reset_3.png)

![RileyLink_Bluetooth_Reset_4](../images/omnipod/RileyLink_Bluetooth_Reset_4.png)

![RileyLink_Bluetooth_Reset_5](../images/omnipod/RileyLink_Bluetooth_Reset_5.png)

```{admonition} Older screenshot
:class: note
Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, vous vous reconnectez avec **Réinitialiser le RileyLink** ou **Appairer le RileyLink** sur l'écran de la pompe Omnipod, et non plus avec le bouton d'actualisation de l'écran des paramètres RileyLink.
```

#### Paramètres du périphérique de communication pod et du Pod Actif

Cet écran affiche les informations et l'état du périphérique de communication pod appairé et du pod Omnipod Eros actif. Les informations s'actualisent automatiquement.

1. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**) et appuyez sur **Stats RileyLink**. L'onglet **Paramètres** affiche votre **RileyLink** appairé et le pod actif (**Appareil**).

   > ![RileyLink_Statistics_Settings_1](../images/omnipod/RileyLink_Statistics_Settings_1.png) ![RileyLink_Statistics_Settings_2](../images/omnipod/RileyLink_Statistics_Settings_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Stats RileyLink** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu **POD MGMT**.
   > ```

   > ![RileyLink_Statistics_Settings_3](../images/omnipod/RileyLink_Statistics_Settings_3.png)

##### Champs RileyLink

> - **Adresse :** Adresse MAC du périphérique de communication pod appairé.
> - **Nom :** Nom Bluetooth du périphérique de communication pod appairé.
> - **Niveau batterie :** Le niveau de batterie actuel du périphérique de communication pod connecté. Affiché seulement quand **Afficher le niveau de batterie transmis par OrangeLink/EmaLink/DiaLink** est activé.
> - **État de la connexion :** l'état actuel de la connexion Bluetooth entre le périphérique de communication pod et le téléphone qui exécute AAPS.
> - **Erreur de Connexion :** S'il y a une erreur avec la connexion Bluetooth du périphérique de communication pod, les détails s'affichent ici.
> - **Version du firmware :** Version actuelle du firmware installée sur le périphérique de communication pod connecté.

##### Champs Appareil - avec un Pod actif

> - **Type d'appareil :** Le type d'appareil qui communique avec le périphérique de communication pod (Omnipod (Eros)).
> - **Appareils configurés :** Le modèle de l'appareil configuré pour communiquer avec le périphérique de communication pod.
> - **Appareil connecté :** Le modèle de l'appareil qui communique en ce moment avec le périphérique de communication pod.
> - **Numéro de série de pompe :** Numéro de série du pod actuellement activé.
> - **Fréquence de pompe :** La fréquence radio utilisée pour communiquer avec le pod.
> - **Dernière fréquence utilisée :** La dernière fréquence radio connue que le pod a utilisée pour communiquer avec le périphérique de communication pod.
> - **Dernier contact appareil :** Date et heure du dernier contact que le périphérique de communication pod a eu avec le pod.

(omnipod-eros-rileylink-and-active-pod-history)=
#### RileyLink et historique du Pod Actif

Cet onglet liste, les plus récents en premier, chaque état ou action du RileyLink ou du pod connecté. L'historique n'est disponible que pour le pod actif. Après un changement de pod, cet historique est effacé, et seuls les événements du nouveau pod activé sont enregistrés et affichés.

1. Ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**), appuyez sur **Stats RileyLink** puis sur l'onglet **Historique**.

   > ![RileyLink_Statistics_History_1](../images/omnipod/RileyLink_Statistics_History_1.png) ![RileyLink_Statistics_History_2](../images/omnipod/RileyLink_Statistics_History_2.png) 
   > 
   > ```{admonition} Older screenshot
   >    :class: note
   >    Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Stats RileyLink** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu **POD MGMT**.
   > ```

   > ![RileyLink_Statistics_History_3](../images/omnipod/RileyLink_Statistics_History_3.png)

##### Champs

Chaque entrée affiche :

> - **Appareil :** L'appareil auquel l'action ou l'état se rapporte.
> - **Heure :** L'heure de l'événement.
> - **État ou action :** L'état de l'appareil ou l'action qu'il a effectuée.

(OmnipodEros-omnipod-pod-tab)=

## Écran de la pompe Omnipod

Voici l'explication des champs d'état et des boutons de l'**écran de la pompe Omnipod** (**Gestion** > **Pompe**, ou **Configuration** > **Pompe** > **Ouvrir le plugin**).

L'icône roue dentée en haut à droite ouvre les [paramètres Omnipod](#OmnipodEros-omnipod-settings).

*REMARQUE : Si un champ d'état affiche (incertain), appuyez sur **Actualiser** pour actualiser l'état du pod et l'effacer.*

![Écran de la pompe Omnipod](../images/v4/Pumps/omnipod_pump_screen.png)

![Omnipod_Tab](../images/omnipod/Omnipod_Tab.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**, où cet écran était l'onglet **Omnipod (POD)**. Dans **AAPS** 4, c'est l'écran de la pompe Omnipod, et certains noms de champs et de boutons sont différents.
```

### Champs

- **État du RileyLink :** Affiche l'état actuel de la connexion du RileyLink. Les erreurs sont affichées en rouge.

- *Non démarré* - aucun RileyLink n'est encore appairé, ou la connexion n'a pas démarré.
- *RileyLink hors de portée* - le périphérique de communication pod n'est pas à portée Bluetooth du téléphone, est éteint ou a une panne qui empêche la communication Bluetooth.
- *RileyLink prêt* - le périphérique de communication pod est allumé et en train d'établir la connexion Bluetooth.
- *Connecté* - Le périphérique de communication pod est allumé, connecté et capable de communiquer via Bluetooth.

- **ID unique :** Affiche l'adresse du pod actif.

- **Numéro de lot :** Affiche le numéro de lot du pod actif.

- **Numéro de série :** Affiche le numéro de série (TID) du pod.

- **Version du firmware :** Affiche la version du firmware du pod actif.

- **Heure du Pod :** Affiche l'heure actuelle sur le pod actif. Il est mis en évidence quand il a plus de 5 minutes d'écart avec l'heure du téléphone.

- **Pod expire le :** Affiche la date et l'heure d'expiration du pod actif. Le texte devient jaune pendant les 4 dernières heures avant ce moment. Il ne devient jamais rouge, car le pod continue à injecter de l'insuline après ce moment.

- **Fin matériel du Pod :** Affiche la fin de la période de grâce du pod (8 heures après **Pod expire le**, pour une durée de vie maximale du pod de 80 heures). Le texte devient jaune au début de la période de grâce (à **Pod expire le**) et rouge pendant les 4 dernières heures avant la fin matériel. Pendant la période de grâce, il affiche aussi le temps restant, par exemple *(17m restantes)*. Le pod arrête d'injecter de l'insuline à la fin matériel et doit être changé.

- **État du Pod :** Affiche l'état du pod actif (par exemple **Pas de Pod actif**, **En cours d'exécution** ou **Suspendu**).

- **Dernière connexion :** Affiche la dernière fois qu'une communication avec le pod actif a réussi. Le texte devient rouge quand le [seuil d'alerte pompe hors de portée](#OmnipodEros-troubleshooting) est dépassé.

- *À l'instant* - il y a moins de 20 secondes.
- *Moins d'une minute* - plus de 20 secondes mais moins de 60 secondes.
- *il y a 1 minute* - plus de 60 secondes mais moins de 120 secondes (2 min)
- *il y a XX minutes* - il y a plus de 2 minutes comme défini par la valeur de XX

- **Dernier bolus :** Affiche la dose du dernier bolus envoyé au pod actif et, entre parenthèses, depuis combien de temps il a été donné.

- **Débit de Basal :** Affiche le débit basal programmé pour l'heure actuelle dans le profil de débit basal.

- **Débit de Basal Temp. :** Affiché seulement pendant qu'un débit basal temporaire est en cours. Il est affiché sous la forme suivante :

- Unités/heure @ heure du DBT (minutes exécutées/minutes totales prévues du DBT)
- *Exemple :* 0.00U/h @18:25 (90/120 minutes)

- **Réservoir :** Affiche **Over 50 U left** (plus de 50 U restantes) quand il reste plus de 50 unités dans le réservoir. En dessous de cette valeur, le nombre approximatif d'unités est affiché. Le texte devient rouge en dessous du seuil de réservoir bas défini dans les [paramètres Alertes](#OmnipodEros-omnipod-settings).

- **Total injecté :** Affiche le nombre total d'unités d'insuline injectées depuis le réservoir. *Notez que c'est une approximation, car l'amorçage et le remplissage du pod ne sont pas des processus exacts.*

- **Dernières alertes Pod :** Réservé aux alertes en cours sur le pod actif. Normalement utilisé lorsque la date d'expiration du pod est au delà de 72 heures et que des alertes sonores natives sont en cours d'exécution.

- **Erreurs :** Affiche la dernière erreur rencontrée (en rouge). Consultez l'[Historique Pod](#OmnipodEros-view-pod-history), l'[historique du RileyLink](#omnipod-eros-rileylink-and-active-pod-history) et les fichiers log pour les erreurs passées et des informations plus détaillées.

### Boutons

Les boutons en bas de l'écran de la pompe changent selon la situation. Les boutons qui ne peuvent pas être utilisés pour le moment sont grisés, par exemple quand le RileyLink n'est pas connecté.

**Boutons d'état du pod** (affichés quand un pod est actif) :

- **Actualiser :** Envoie une commande d'actualisation au pod actif pour mettre à jour son état. Utilisez-le pour actualiser l'état du pod et effacer les champs d'état qui contiennent le texte (incertain). Voir la section [Dépannage](#OmnipodEros-troubleshooting) ci-dessous pour plus d'informations.

  ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, c'est un bouton avec le texte **Actualiser** sur l'écran de la pompe Omnipod.
  ```

- **Alertes silencieuses :** Arrête les bips et les notifications d'expiration du pod et de réservoir bas. Affiché seulement quand le pod a une alerte active et que **Rendre automatiquement silencieuses les alertes Pod** est désactivé. Une fois les alertes arrêtées, le bouton disparaît.

  ![ack_alerts](../images/omnipod/ICONS/omnipod_overview_ack_alerts.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, ce bouton s'appelle **Alertes silencieuses**.
  ```

- **Définir l'heure :** Met à jour l'heure du pod avec l'heure actuelle de votre téléphone. Affiché seulement quand l'heure du pod a plus de 5 minutes d'écart avec l'heure du téléphone.

  ![set_time](../images/omnipod/ICONS/omnipod_overview_set_time.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, c'est un bouton avec le texte **Définir l'heure** sur l'écran de la pompe Omnipod.
  ```

- **Suspendre :** Suspend l'injection d'insuline sur le pod actif. Affiché seulement s'il est activé dans les paramètres (**Montrer le bouton "Suspendre" dans l'onglet Omnipod**).

  ![suspend](../images/omnipod/ICONS/omnipod_overview_suspend.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, c'est un bouton avec le texte **Suspendre** sur l'écran de la pompe Omnipod.
  ```

- **Reprendre l'injection :** Reprend l'injection d'insuline sur le pod actif suspendu. Affiché seulement pendant que le pod est suspendu.

  ![resume](../images/omnipod/ICONS/omnipod_overview_resume.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, c'est un bouton avec le texte **Reprendre l'injection** sur l'écran de la pompe Omnipod.
  ```

**Boutons de gestion du pod et du RileyLink :**

![Omnipod_Tab_Pod_Management](../images/omnipod/Omnipod_Tab_Pod_Management.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, il n'y a plus de menu Gestion du Pod : ces actions sont des boutons directement sur l'écran de la pompe Omnipod.
```

- **Activer Pod :** Amorce et active un nouveau pod. Affiché quand aucun pod n'est actif. Il n'est actif que quand le RileyLink est connecté.

  ![activate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Activer Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

- **Désactiver Pod :** Désactive le pod actif. Affiché dès qu'un pod est appairé, aussi quand une activation s'est arrêtée en cours de route (par exemple parce que le pod est tombé en panne pendant l'activation). Il n'est actif que quand le RileyLink est connecté. **AAPS** vous demande de confirmer avant de désactiver le pod.

- Utilisez cette commande pour désactiver un pod qui hurle (« screamer », erreur 49).
- Si la désactivation échoue, l'assistant de désactivation propose l'option **Supprimer Pod**.

  ![deactivate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Désactiver Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

- **Tester bips :** Fait jouer un seul bip de test au pod quand vous appuyez dessus. Affiché quand un pod est appairé.

  ![play_test_beep](../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Tester bips** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

- **Historique Pod :** Affiche l'historique d'activité du pod actif. Voir [Voir l'historique du Pod](#OmnipodEros-view-pod-history).

  ![pod_history](../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Historique Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

- **Appairer le RileyLink :** Recherche votre périphérique de communication pod et l'appaire. Voir [Configuration RileyLink](#OmnipodEros-rileylink-setup).

- **Stats RileyLink :** Ouvre l'écran Stats RileyLink, qui a deux onglets. Affiché seulement s'il est activé dans les paramètres (**Afficher le bouton Stats RileyLink dans le menu de gestion du pod**).

- **Paramètres** - affiche les paramètres du RileyLink et du pod actif
- **Historique** - affiche l'historique de communication du RileyLink et du Pod

  ![rileylink_stats](../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Stats RileyLink** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

- **Réinitialiser le RileyLink :** Réinitialise la configuration du périphérique de communication pod connecté. Quand la communication démarre, des données précises sont envoyées au RileyLink et y sont enregistrées :

- Les registres de mémoire sont définis
- Les protocoles de communication sont définis
- La fréquence radio accordée est définie
  > 
  > Voir les [remarques supplémentaires](#OmnipodEros-reset-rileylink-config-notes) ci-dessous.

  ![reset_rileylink_config](../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, ce bouton s'appelle **Réinitialiser le RileyLink** et se trouve sur l'écran de la pompe Omnipod.
  ```

- **Supprimer Pod :** Supprime l'état d'un pod qui ne répond pas, après une confirmation. Affiché seulement quand un pod a été démarré mais n'est pas complètement appairé, car une vraie désactivation n'est alors plus possible :

- Un **pod n'est pas complètement appairé** et ignore donc les commandes de désactivation.
- Un **pod est bloqué** entre deux étapes pendant l'appairage.
- Un **pod ne s'appaire tout simplement pas.**
  > 
  > Une fois un pod supprimé, **AAPS** ne peut plus communiquer avec lui. Retirez le pod de votre corps.

  ![discard_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png)

  ```{admonition} Older screenshot
  :class: note
  La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, **Supprimer Pod** est un bouton sur l'écran de la pompe Omnipod, et non plus dans le menu Gestion du Pod.
  ```

(OmnipodEros-reset-rileylink-config-notes)=

#### *Remarques sur Réinitialiser le RileyLink*

- L'utilisation principale de cette fonction est lorsque le dispositif de communication de pod actuellement actif ne répond pas et que la communication est dans un état bloqué.
- Si le périphérique de communication pod a été éteint puis rallumé, appuyez sur **Réinitialiser le RileyLink** pour que ces paramètres de communication soient à nouveau définis dans le périphérique de communication pod.
- Si cela n'est PAS fait, AAPS devra être redémarré après la mise sous tension du périphérique de communication pod.
- Vous **N'AVEZ PAS BESOIN** d'appuyer sur ce bouton quand vous passez d'un périphérique de communication pod à un autre.

(OmnipodEros-omnipod-settings)=

## Paramètres Omnipod

Pour ouvrir les paramètres du pilote Omnipod, vous pouvez :

- appuyer sur l'icône roue dentée en haut à droite de l'écran de la pompe Omnipod (**Gestion** > **Pompe**), ou
- ouvrir le **menu** (☰) en haut à gauche > **Configuration** > **Pompe** et appuyer sur **Paramètres** sur la carte **Omnipod Eros**.

![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png)

```{admonition} Older screenshot
:class: note
La capture d'écran ci-dessus vient d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, vous ouvrez les paramètres avec **Paramètres** sur la carte **Omnipod Eros** ou avec l'icône roue dentée de l'écran de la pompe Omnipod, et non plus avec la roue dentée des paramètres dans **Configuration** ou le menu à 3 points.
```

Les paramètres sont regroupés comme listé ci-dessous. Appuyez sur un groupe pour le déplier. La plupart des éléments sont des interrupteurs que vous pouvez activer ou désactiver :

![Paramètres du pilote Omnipod](../images/v4/Pumps/omnipod_settings.png)

*REMARQUE : Un astérisque (\*) indique que le paramètre par défaut est activé.*

### RileyLink

Paramètres du périphérique de communication pod. L'appareil lui-même s'appaire avec le bouton **Appairer le RileyLink** sur l'écran de la pompe (voir [Configuration RileyLink](#OmnipodEros-rileylink-setup)).

- **Utiliser le scan :** Fait une recherche avant de se connecter à l'OrangeLink. Cela peut améliorer les connexions. Cela peut aussi être utilisé avec d'autres clones du RileyLink si nécessaire.

- **Afficher le niveau de batterie transmis par OrangeLink/EmaLink/DiaLink :** Affiche le niveau réel de la batterie de l'OrangeLink/EmaLink/DiaLink. Il est **fortement recommandé** à tous les utilisateurs d'OrangeLink/EmaLink/DiaLink d'activer ce paramètre.

- NE FONCTIONNE PAS avec le RileyLink original.
- Peut ne pas marcher avec des alternatives au RileyLink.
- Activé - Indique le niveau de batterie actuel des périphériques de communication de pod.
- Désactivé - Indique n/a.

- **Activer l'enregistrement des changements de pile dans Actions :** Disponible seulement quand le paramètre d'affichage de la batterie ci-dessus est activé. Certains périphériques de communication pod utilisent des piles normales que vous pouvez changer. Quand ce paramètre est activé, vous pouvez enregistrer une [entrée careportal](#aaps-screens-careportal) **Changement pile pompe** pour noter le changement et remettre à zéro l'âge de la pile.

### Bips de confirmation

Fournit des bips de confirmation du pod pour l'injection et les changements de bolus, de basal, de SMB et de DBT.

- **\*Bips bolus activés :** Active ou désactive les bips de confirmation quand un bolus est injecté.
- **Bips basal activés :** Active ou désactive les bips de confirmation quand un nouveau débit basal est défini, quand le débit basal actif est annulé ou quand le débit basal actuel est modifié.
- **\*Bips SMB activés :** Active ou désactive les bips de confirmation quand un SMB est injecté.
- **Bips DBT activés :** Active ou désactive les bips de confirmation lorsqu'un DBT est défini ou annulé.

### Alertes

Fournit des alertes AAPS et des notifications Nightscout pour l'arrêt, l'expiration des pod, le niveau de réservoir bas, en fonction des seuils définis.

*Notez qu'une notification AAPS sera TOUJOURS émise pour toute alerte, après la première communication avec le pod depuis le déclenchement de l'alerte. Fermer la notification n'arrête PAS l'alerte, SAUF si **Rendre automatiquement silencieuses les alertes Pod** est activé. Pour arrêter l'alerte À LA MAIN, ouvrez l'écran de la pompe Omnipod et appuyez sur **Alertes silencieuses**.*

- **\*Rappel d'expiration activé :** Quand il est activé, le pod bipe quand l'heure définie ci-dessous est atteinte.
- **Alerte nombre d'heures avant l'arrêt (80 heures) :** Le nombre d'heures avant l'arrêt du pod (80 heures après l'activation) auquel le rappel d'expiration se déclenche (de 1 à 8 heures, 8 par défaut).
- **\*Alerte Réservoir bas activée :** Active ou désactive une alerte quand le nombre d'unités restantes dans le pod atteint la limite de réservoir bas définie dans le champ « Nombre d'unités ».
- **Nombre d'unités :** Le nombre d'unités auquel l'alerte de réservoir bas du pod se déclenche (de 5 à 50, 20 par défaut).
- **Rendre automatiquement silencieuses les alertes Pod :** Quand il est activé, une notification est toujours émise, mais l'alerte est arrêtée automatiquement à la prochaine communication avec le pod après le début de l'alerte.

### Notifications

Fournit des notifications AAPS et des alertes audibles sur le téléphone lorsqu'il n'est pas certain que les événements DBT, SMB ou bolus aient réussi.

*REMARQUE : Ce ne sont que des notifications, aucun bip d'alerte n'est émis.*

- **\*Son pour les notifications DBT incertains activé :** Activez ou désactivez ce paramètre pour déclencher une alerte sonore et une notification visuelle quand AAPS n'est pas sûr qu'un DBT a bien été défini.
- **\*Son pour les notifications SMB incertains activé :** Activez ou désactivez ce paramètre pour déclencher une alerte sonore et une notification visuelle quand AAPS n'est pas sûr qu'un SMB a bien été injecté.
- **\*Son pour les notifications bolus incertains activé :** Activez ou désactivez ce paramètre pour déclencher une alerte sonore et une notification visuelle quand AAPS n'est pas sûr qu'un bolus a bien été injecté.

### Autres

Fournit des paramètres avancés pour aider au débogage.

- **Montrer le bouton "Suspendre" dans l'onglet Omnipod :** Masque ou affiche le bouton **Suspendre** sur l'écran de la pompe Omnipod.
- **Afficher le bouton Journal d'impulsions dans le menu de gestion des pods :** Ce paramètre est toujours listé, mais la version actuelle de l'écran de la pompe n'a pas de bouton **Enreg. Pulse**.

- **Afficher le bouton Stats RileyLink dans le menu de gestion du pod :** Masque ou affiche le bouton **Stats RileyLink** sur l'écran de la pompe Omnipod.
- **\*Changement d'heure ou fuseau horaire Activé :** Permet de détecter automatiquement les changements de fuseau horaire si le téléphone est utilisé dans une région où l'heure d'été est appliquée.

### Changement ou suppression d'un périphérique de communication pod actif (RileyLink)

Il existe de nombreux modèles alternatifs au RileyLink d'origine (comme l'OrangeLink ou l'EmaLink), et vous pouvez avoir besoin de plusieurs exemplaires ou d'un exemplaire de secours du même périphérique de communication pod : vous devrez peut-être passer à un autre appareil.

Pour changer d'appareil, ouvrez l'écran de la pompe Omnipod (**Gestion** > **Pompe**), appuyez sur **Appairer le RileyLink** et choisissez le nouvel appareil, comme décrit dans [Configuration RileyLink](#OmnipodEros-rileylink-setup). Le nouvel appareil remplace celui appairé avant.

![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

![RileyLink_Setup_Add_1](../images/omnipod/RileyLink_Setup_Add_1.png)

![RileyLink_Setup_Add_2](../images/omnipod/RileyLink_Setup_Add_2.png)

![RileyLink_Setup_Add_3](../images/omnipod/RileyLink_Setup_Add_3.png) ![RileyLink_Setup_Add_4](../images/omnipod/RileyLink_Setup_Add_4.png)

```{admonition} Older screenshot
:class: note
Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, vous ajoutez un appareil avec **Appairer le RileyLink** sur l'écran de la pompe Omnipod, et non plus avec **Configuration RileyLink** dans les paramètres Omnipod, et la recherche démarre automatiquement.
```

Il n'y a pas de bouton séparé pour supprimer un appareil appairé. Si vous n'utilisez plus un RileyLink, appairez simplement le nouveau quand vous en avez besoin.

![RileyLink_Setup_Remove_1](../images/omnipod/RileyLink_Setup_Remove_1.png)

![RileyLink_Setup_Remove_2](../images/omnipod/RileyLink_Setup_Remove_2.png)

![RileyLink_Setup_Remove_3](../images/omnipod/RileyLink_Setup_Remove_3.png)

![RileyLink_Setup_Remove_4](../images/omnipod/RileyLink_Setup_Remove_4.png)

```{admonition} Older screenshot
:class: note
Les captures d'écran ci-dessus viennent d'une version plus ancienne d'**AAPS**. Dans **AAPS** 4, il n'y a plus de bouton **Supprimer** : appairer un nouveau RileyLink remplace le précédent.
```

## Ligne d'état et careportal

Certains éléments sont propres à la façon dont le pod Omnipod diffère des pompes à tubulure, en particulier après la pose d'un nouveau pod.

Les âges de l'**insuline** et de la **canule** dans la [ligne d'état](#screens-sensor-level-battery) de l'écran principal sont **remis** à 0 jour et 0 heure **après chaque changement de pod**. C'est dû à la façon dont la pompe Omnipod est construite et opérationnelle. La **pile de la pompe** et le **réservoir d'insuline** sont intégrés à l'intérieur de chaque pod. Puisque le pod insère la canule directement dans la peau au niveau du site d'application pod, il n'y a pas de tubulure traditionnelle dans les pompes Omnipod. *Par conséquent, après un changement de pod, l'âge de chacune de ces valeurs sera automatiquement réinitialisé à zéro.* **L'âge de la pile pompe** n'est pas indiqué car la durée de vie de la pile du pod sera toujours plus grande que celle du pod (maximum 80 heures).

![Expanded status panel of a patch pump: cannula and insulin ages at 0h after a pod change, no pump battery row](../images/omnipod/Actions_Tab.png)

### Niveaux

**Niveau d'insuline**

L'affichage de la quantité d'insuline dans le Pod Omnipod Eros n'est pas exact. En effet, on ne sait pas exactement combien d'insuline a été mise dans le pod, seulement qu'au moins 80 unités ont été remplies quand les 2 bips retentissent pendant le remplissage du pod. Un Pod peut contenir au maximum 200 unités. L'amorçage peut aussi créer des écarts, car ce n'est pas un processus exact. Avec ces deux facteurs, le pilote Omnipod a été écrit pour donner la meilleure estimation de l'insuline restant dans le réservoir.

> - **Au-delà de 50 unités** - Affiche la valeur de 50+U lorsque plus de 50 unités sont actuellement dans le réservoir.
> - **En dessous de 50 unités** - Affiche la quantité approximative d'insuline restante dans le réservoir.
> - **SMS** - Renvoie la valeur ou 50+U pour les réponses SMS
> - **Nightscout** - Envoie la valeur 50 à Nightscout quand il reste plus de 50 unités (version 14.07 et antérieures).  Les versions plus récentes affichent la valeur 50+ quand il reste plus de 50 unités.

**Niveau pile**

L'affichage du niveau de batterie est un paramètre qui peut être activé pour afficher le niveau de batterie actuel des périphériques de communication pod comme l'OrangeLink, l'EmaLink ou le DiaLink.  Le matériel RileyLink ne peut pas indiquer son niveau de batterie.  Le niveau batterie est actualisé après chaque communication avec le pod, donc lors de la charge on peut ne pas avoir une augmentation linéaire.  Une mise à jour manuelle actualisera le niveau de batterie.  Lorsqu'un périphérique de communication Pod est déconnecté, la valeur 0% sera indiquée.

> - **Le matériel RileyLink NE PEUT PAS indiquer son niveau de batterie**
> - **Le paramètre « Afficher le niveau de batterie transmis par OrangeLink/EmaLink/DiaLink » DOIT être activé dans les paramètres Omnipod pour afficher le niveau de batterie**
> - **L'affichage du niveau de batterie fonctionne UNIQUEMENT avec les appareils OrangeLink, EmaLink et DiaLink**
> - **L'affichage du niveau de batterie PEUT fonctionner pour d'autres appareils (en dehors du RileyLink)**
> - **SMS** - Renvoie en retour le niveau de batterie actuel quand une valeur existe, la valeur n/a ne sera pas renvoyée
> - **Nightscout** - Le niveau de batterie est envoyé quand une valeur réelle existe, la valeur n/a n'est pas envoyée

(OmnipodEros-troubleshooting)=

## Dépannage

### Pannes du Pod

Les pods tombent parfois en panne pour des raisons variées, y compris des problèmes matériels du Pod lui-même. Il vaut mieux ne pas signaler ces pannes à Insulet, car AAPS n'est pas une utilisation approuvée. Une liste de codes défaut peut être trouvée [ici](https://github.com/openaps/openomni/wiki/Fault-event-codes) pour aider à trouver les causes.

### Éviter les pannes de pod avec l'erreur 49

Cet échec est lié à un état du pod incorrect pour une commande ou à une erreur lors d'une commande d'injection d'insuline. Nous vous conseillons de régler la synchronisation Nightscout sur *envoi uniquement* : laissez désactivées toutes les options « Recevoir ... depuis NS » dans les paramètres de synchronisation du client Nightscout (voir [Nightscout](../SettingUpAaps/Nightscout.md)) pour éviter des pannes possibles.

### Alertes Pompe hors de portée

Nous vous conseillons de régler les alertes pompe hors de portée sur **120 minutes**. Appuyez sur l'icône **Paramètres** (roue dentée) en haut à droite de l'écran principal, choisissez **Alertes locales** > **Seuil d'alerte pompe hors de portée** et réglez-le sur **120**.

(OmnipodEros-import-settings-from-previous-aaps)=
### Importer les paramètres AAPS de versions précédentes

```{admonition} Importing settings can end your active Pod
:class: warning
Sur le téléphone qui gère déjà le Pod, laissez **Also replace pump settings** (remplacer aussi les paramètres de la pompe) décoché : la session du Pod est gardée et seuls les autres paramètres sont importés. Cochez cette option uniquement avec un fichier exporté pendant le Pod que vous portez en ce moment. Voir [Pompes sans tubulure](#ExportImportSettings-tubeless-pumps).
```

La façon la plus sûre de réinstaller **AAPS** est entre deux Pods :

1. Désactiver votre session pod. Vérifiez que vous n'avez pas de session de pod active.
2. Exportez vos paramètres et gardez-en une copie dans un endroit sûr.
3. Désinstallez la version précédente d'AAPS et redémarrez votre téléphone.
4. Installez la nouvelle version d'AAPS et vérifiez que vous n'avez pas de session de pod active.
5. Importez vos paramètres et activez votre nouveau pod.

### Alertes du pilote Omnipod

Notez que le pilote Omnipod affiche plusieurs alertes qui lui sont propres sur l'**écran principal**. La plupart sont informatives et peuvent être fermées, tandis que certaines indiquent à l'utilisateur une action à faire pour résoudre la cause de l'alerte. Voici un résumé des principales alertes que vous pouvez rencontrer :

#### Pas de Pod actif

Aucune session de Pod actif détectée. Cette alerte peut être temporairement rejetée en appuyant sur **REPORT ALARME** mais elle se déclenchera tant qu'un nouveau pod n'a pas été activé. Une fois un pod activé, cette alerte disparaît automatiquement.

#### Pod suspendu

Alerte informative que le Pod a été suspendu.

#### Echec Paramétrage Profil Basal. L'injection peut être suspendue ! Veuillez actualiser manuellement l'état du Pod à partir de l'onglet Omnipod et reprendre l'injection si nécessaire.

Alerte informative indiquant que le réglage du profil basal du Pod a échoué. Ouvrez l'écran de la pompe Omnipod et appuyez sur **Actualiser**, puis sur **Reprendre l'injection** si nécessaire.

#### Impossible de vérifier si le bolus SMB a réussi. Si vous êtes sûr que le Bolus n'a pas réussi, vous devez supprimer manuellement l'entrée SMB dans les traitements.

Alerte indiquant que la réussite du bolus SMB n'a pas pu être vérifiée. Vérifiez le champ **Dernier bolus** sur l'écran de la pompe Omnipod pour voir si le SMB a réussi. Si ce n'est pas le cas, supprimez l'entrée des traitements.

#### Incertain si l'action "Bolus/DBT/SMB" est terminée, merci de vérifier manuellement s'il a réussi.

En raison de la façon dont le RileyLink et l'Omnipod communiquent, des situations peuvent se produire où le fait qu'une commande ait été traitée avec succès est *incertain*. Il était nécessaire d'informer l'utilisateur de cette incertitude.

Voici quelques exemples de cas où une notification incertaine peut se produire.

- **Bolus** - Les bolus incertains ne peuvent pas être vérifiés automatiquement. La notification restera jusqu'au prochain bolus mais un rafraîchissement manuel du pod effacera le message. *Par défaut, les bips d'alertes sont activés pour ce type de notification car l'utilisateur devra les vérifier manuellement.*
- **DBT, états du Pod, changements de profil, changements d'heure** - un rafraîchissement manuel du pod effacera le message.
- **Écart d'heure du Pod -** Quand l'heure du pod et celle de votre téléphone sont trop différentes, la boucle AAPS a du mal à fonctionner et à faire des prédictions et des recommandations de dose précises. Si l'écart d'heure entre le pod et le téléphone dépasse 5 minutes, un bouton **Définir l'heure** apparaît sur l'écran de la pompe Omnipod. Appuyez sur **Définir l'heure** pour synchroniser l'heure du pod avec celle du téléphone. Si **État du Pod** affiche ensuite **Suspendu**, appuyez sur **Reprendre l'injection** pour que le pod reprenne son fonctionnement normal.

## Bonnes pratiques

(OmnipodEros-optimal-omnipod-and-rileylink-positioning)=

### Positionnement optimal Omnipod et RileyLink

L'antenne utilisée sur le RileyLink pour communiquer avec un pod Omnipod est une antenne spirale hélicoïdale à 433 MHz. En raison de sa construction, elle émet un signal omnidirectionnel en forme de beignet en trois dimensions, l'axe z représentant l'antenne verticale. Cela signifie qu'il y a des positions optimales pour le positionnement du RileyLink, en particulier lors des séquences d'activation et de désactivation.

![Toroid_w_CS](../images/omnipod/Toroid_w_CS.png)

> *(Fig 1. Tracé graphique de l'antenne hélicoïdale en spirale dans un diagramme omnidirectionnel*)

Pour des raisons de sécurité, l'*activation* d'un pod doit être faite à une distance *plus courte (~30 cm ou moins)* que les autres opérations, comme donner un bolus, définir un DBT ou simplement actualiser l'état du pod. En raison de la nature de la transmission du signal à partir de l'antenne RileyLink, il n'est PAS recommandé de placer le pod au dessus du RileyLink ou juste à côté de celui-ci.

L'image ci-dessous montre le positionnement optimal du RileyLink lors des procédures d'activation et de désactivation du pod. Le pod peut être activé dans d'autres positions mais vous aurez le plus de chance de réussir en utilisant la même position que dans l'image ci-dessous.

*Remarque : Si après avoir positionné le pod de manière optimale, la communication RileyLink échoue, cela peut être dû à une batterie faible qui réduit la portée de transmission de l'antenne du RileyLink. Pour éviter ce problème, assurez-vous que le RileyLink est correctement chargé ou connecté directement à un câble de charge durant ce processus.*

![Omnipod_pod_and_RileyLink_Position](../images/omnipod/Omnipod_pod_and_RileyLink_Position.png)

## Où obtenir de l'aide

Tout le développement du pilote Omnipod est fait par la communauté de manière bénévole ; nous vous demandons donc d'être attentif et de suivre ces règles quand vous demandez de l'aide :

- **Niveau 0 :** Lisez la section correspondante de cette documentation pour vous assurer que vous comprenez comment la fonctionnalité avec laquelle vous avez des difficultés est censée fonctionner.
- **Niveau 1 :** Si vous rencontrez toujours des problèmes que vous n'arrivez pas à résoudre en utilisant ce document, alors veuillez aller sur la chaine *#androidaps* sur **Discord** avec [ce lien d'invitation](https://discord.gg/4fQUWHZ4Mw).
- **Niveau 2 :** Cherchez dans les tickets existants si votre problème a déjà été signalé ; sinon, créez un nouveau [ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez-y vos [fichiers log](../GettingHelp/AccessingLogFiles.md).
- **Soyez patient - la plupart des membres de notre communauté sont des bénévoles de bonne nature, et résoudre les problèmes nécessite souvent du temps et de la patience de la part des utilisateurs et des développeurs.**
