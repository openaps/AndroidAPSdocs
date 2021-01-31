=====================================================
 Documentation du driver AndroidAPS pour la pompe à insuline Omnipod
=====================================================

Ces instructions permettent de configurer la pompe Omnipod Eros (**PAS Omnipod Dash**). Le pilote Omnipod est disponible dans AndroidAPS (AAPS) depuis la version 2.8.

**Ce logiciel est une partie d'un système de pancréas artificiel "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

.. contenus:: 
   :backlinks: entrée
   :depth: 2

Configuration matérielle et logicielle requise
==================================

* **Périphérique de communication Pod** 

  Composant qui permet la communication entre votre téléphone avec AndroidAPS et les Pods de génération Eros.

   -  |OrangeLink|  `Site internet OrangeLink <https://getrileylink.org/product/orangelink>`_    
   -  |RileyLink| `433MHz RileyLink <https://getrileylink.org/product/rileylink433>`__
   -  |EmaLink|  `Site internet Emalink <https://github.com/sks01/EmaLink>`__ - `Contact <mailto:getemalink@gmail.com>`__     
   -  |LoopLink|  `Site internet LoopLink <https://www.getlooplink.org/>`__ - `Contact <https://jameswedding.substack.com/>`__ - Non testé

* |Android_Phone| **Téléphone Mobile** 

  Composant qui utilisera AndroidAPS et enverra des commandes de contrôle au périphérique de communication Pod.

      +  Smartphone compatible du `driver Omnipod Android <https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit#gid=0>`__ avec une version AAPS 2.8 et les `composants <../index.html#composants>`__ associés

* |Omnipod_Pod| **Dispositif d'injection d'Insuline** 

  Composant qui interprétera les commandes reçues du périphérique de communication Pod en provenance de votre téléphone AndroidAPS.

      + Un nouveau pod Omnipod (génération Eros - **PAS DASH**)

Ces instructions supposent que vous commencez une nouvelle session pod; si ce n'est pas le cas, soyez patient et essayez de commencer ce processus lors de votre prochain changement de pod.

Avant de commencer
================

**SÉCURITÉ D'ABORD** - ne pas essayer ce processus dans un environnement où vous ne pouvez pas récupérer une erreur (pods supplémentaires, insuline, RileyLink chargé et les smartphones sont nécessaires).

**Votre PDM Omnipod ne fonctionnera plus après l'activation de votre pod par le driver AAPS Omnipod**. Vous avez précédemment utilisé votre PDM Omnipod pour envoyer des commandes à votre pod Omnipod Eros. Un pod Omnipod Eros ne permet qu'à un seul appareil de la communiquer avec lui. L'appareil qui active le pod avec succès est le seul appareil autorisé à communiquer avec lui à partir de ce moment. Cela signifie qu'une fois que vous activez un pod Omnipod Eros avec votre RileyLink via le pilote AAPS Omnipod, **vous ne pourrez plus utiliser votre PDM avec votre pod**. Le pilote AAPS Omnipod avec le RileyLink est maintenant votre PDM. *Cela ne veut pas dire que vous pouvez jeter votre PDM, il est recommandé de le garder comme une sauvegarde, et en cas d'urgence dans le cas où AAPS ne fonctionne pas correctement.*

**Vous pouvez configurer plusieurs RileyLinks, mais un seul RileyLink à la fois peut communiquer avec un pod.** Le pilote AAPS Omnipod supporte la possibilité d'ajouter plusieurs RileyLinks dans la configuration de RileyLink, cependant, un seul RileyLink à la fois peut être sélectionné pour la communication.

**Votre pod ne s'arrêtera pas lorsque le RileyLink sera hors de portée.** Lorsque votre RileyLink est hors de portée ou que le signal est bloqué pour communiquer avec le pod actif, votre pod continuera à injecter l'insuline basale. Lors de l'activation d'un pod, le profil basal défini dans AAPS sera programmé dans le nouveau pod. Si vous perdez le contact avec le pod, il retournera à ce profil de basal. Vous ne serez pas en mesure d'émettre de nouvelles commandes tant que le RileyLink ne reviendra pas à portée et rétablira la connexion.

**Les profils de débit de base de 30 min ne sont PAS pris en charge dans AndroidAPS.** Si vous êtes nouveau sur AndroidAPS et que vous configurez votre profil de débit de basal pour la première fois, veuillez noter que les débits de basal commençant par une demi-heure ne sont pas pris en charge et que vous devrez ajuster votre profil de débit de basal pour démarrer sur les heures. Par exemple, si vous avez un débit de basal de 1,1 unités qui commence à 09h30 et a une durée de 2 heures se terminant à 11h30, cela ne marchera pas.  Vous devrez mettre à jour ce taux de basal de 1,1 sur une plage horaire de 9h00 à 11h00 ou de 10h00 à 12h00.  Même si les changements de débit de basal du profil toutes les 30 min sont supportés par le matériel Omnipod lui-même, AndroidAPS n'est pas en mesure de les prendre en compte avec ses algorithmes actuellement.

Activation du pilote Omnipod dans AAPS
===================================

Vous pouvez activer le pilote Omnipod dans AAPS de **deux façons**:

Option 1 : L'Assistant de configuration
--------------------------

Après avoir installé une nouvelle version d'AndroidAPS, l'**Assistant de configuration** démarrera automatiquement.  Cela se produit également lors des mises à jour.  Si vous avez déjà exporté vos paramètres à partir d'une installation précédente, vous pouvez quitter l'assistant d'installation et importer vos anciens paramètres.  Pour les nouvelles installations, procédez comme suit.

Via l'**Assistant de configuration AAPS (2)** situé dans le coin supérieur droit **menu trois points (1)**, passez par les menus de l'assistant jusqu'à ce que vous arriviez à l'écran **Pompe**. Ensuite, sélectionnez le **bouton radio Omnipod (3)**.

    |Enable_Omnipod_Driver_1|  |Enable_Omnipod_Driver_2|

Sur le même écran, sous la sélection de la pompe, les **Paramètres du pilote Omnipod** s'affichent, dans la **Configuration du RileyLink** ajoutez votre appareil RileyLink en appuyant sur le texte **Non configuré**. 

Sur l'écran de **Recherche du RileyLink** appuyez sur le bouton **Rechercher** et sélectionnez votre RileyLink en scannant tous les périphériques Bluetooth disponibles et en sélectionnant votre RileyLink dans la liste. Lorsque c'est correctement sélectionné, vous êtes basculé sur l'écran de sélection de la pompe, qui affiche les paramètres du pilote Omnipod montrant votre RileyLink sélectionné avec l'adresse MAC listée. 

Appuyez sur le bouton **Suivant** pour continuer avec le reste de l'**Assistant de configuration**. Cela peut prendre jusqu'à une minute pour que le RileyLink sélectionné s'initialise et que le bouton **Suivant** devienne actif.

Les étapes détaillées sur la façon de configurer votre appareil de communication pod sont listées ci-dessous dans la section `Configuration RileyLink <#configuration-rileylink>`__.

**OU**

Option 2 : Le Générateur de configuration
----------------------------

Via le **menu hamburger** situé dans le coin supérieur gauche, sous le **Générateur de configuraiton (1)** ➜\ **Pompe**\ ➜\ **Omnipod** en sélectionnant le **bouton radio (2) Omnipod**. En sélectionnant la **case à cocher (4)** à côté de la **roue crantée (3)** cela affichera le menu Omnipod sous la forme d'un onglet intitulé **POD** dans l'interface AAPS. C'est ce que l'on appelle dans cette documentation l'onglet **Omnipod (POD)**.

    **REMARQUE :** Un moyen plus rapide d'accéder aux **paramètres Omnipod** est décrit ci-dessous dans la section `Paramètres Omnipod <#configuration-omnipod>`__ de ce document.

    |Enable_Omnipod_Driver_3| |Enable_Omnipod_Driver_4|

Vérification de la sélection du pilote Omnipod
----------------------------------------

*Remarque : Si vous avez quitté l'Assistant de configuration plus tôt sans sélectionner votre RileyLink, Le pilote Omnipod est activé mais vous devrez toujours sélectionner votre RileyLink.  Vous pouvez voir l'onglet Omnipod (POD) s'afficher comme ci-dessous*

Pour vérifier que vous avez activé le pilote Omnipod dans AAPS **glissez vers la gauche** depuis l'onglet **Aperçu**, où vous verrez maintenant un onglet **Omnipod** ou **POD**.

|Enable_Omnipod_Driver_5|

Configuration Omnipod
======================

Veuillez **glisser vers la gauche** jusqu'à l'onglet **Omnipod (POD)** où vous pourrez gérer toutes les fonctions du pod et du RileyLink (certaines de ces fonctions ne sont pas activées ou visibles sans une session de pod active):

    |refresh_pod_status| Rafraîchir la connectivité et l'état du Pod

    |pod_management| Gestion du Pod (activer, désactiver, tester les beep, stats du RileyLink et historique du Pod)

Configuration RileyLink
---------------

Si vous avez déjà appairé avec succès votre RileyLink dans l'assistant de configuration ou les étapes ci-dessus, alors procédez à `l'activation d'un Pod <#activation-dun-pod>`__ ci-dessous.

*Remarque : Un bon indicateur visuel indiquant que le RileyLink n'est pas connecté est que les boutons Insuline et Assistant de l'onglet Accueil seront manquants. Cela se produira également pendant environ les 30 premières secondes après le démarrage d'AAPS, car il se connecte activement au RileyLink.*

1. Assurez-vous que votre RileyLink est complètement chargé et mis en marche.

2. Après avoir sélectionné le pilote Omnipod, identifiez et sélectionnez votre RileyLink dans **Générateur de configuration (1)** ➜\ **Pompe**\ ➜\ **Omnipod**\ ➜\ **Roue crantée (2)** ➜\ **Configuration du RileyLink (3)** en appuyant sur **Non configuré** ou sur le texte de **l'adresse MAC (si présent)**.   

    Assurez-vous que votre batterie RileyLink est chargée et qu'il est `positionné à proximité <#positionnement-optimal-omnipod-et-rileylink>`__ (~30 cm de distance ou moins) de votre téléphone pour que AAPS l'identifie par son adresse MAC. Une fois sélectionné, vous pouvez continuer à activer votre première session de pod. Utilisez le bouton retour de votre téléphone pour revenir à l'interface principale AAPS.

    |RileyLink_Setup_1| |RileyLink_Setup_2|

3. Sur l'écran de **Sélection RileyLink** appuyez sur le bouton **Rechercher (4)** pour lancer un balayage bluetooth. **Sélectionnez votre RileyLink (5)** dans la liste des périphériques Bluetooth disponibles.

    |RileyLink_Setup_3| |RileyLink_Setup_4|

4. Après avoir sélectionné avec succès vous êtes revenu sur la page des paramètres Omnipod indiquant l'**adresse MAC du RileyLink actuellement sélectionné (6).** 

    |RileyLink_Setup_5|

5. Vérifiez que dans l'onglet **Omnipod (POD)** que l'**Etat du RileyLink (1)** apparaît comme étant **connecté.** Le champ **Etat du pod (2)** doit afficher **Aucun Pod actif**; si ce n'est pas le cas, veuillez réessayer l'étape précédente ou quitter AAPS pour voir si cela rafraîchit la connexion.

    |RileyLink_Setup_6|

Activation d’un Pod
----------------

Avant de pouvoir activer un pod, veuillez vous assurer que vous avez correctement configuré et connecté votre connexion RileyLink dans les paramètres d'Omnipod

*RAPPEL : La communication avec le Pod pour l'activation de celui-ci se fait sur des périodes limitées pour des raisons de sécurité. Avant d'être appairé le signal radio du Pod est plus faible, mais après l'appairage, il fonctionnera à pleine puissance. Lors de ces procédures, assurez-vous que votre pod est* `à proximité immédiate <#positionnement-optimal-omnipod-et-rileylink>`__ (~30 cm de distance ou moins) mais pas au dessus ou juste à côté du RileyLink.*

1. Naviguez vers l'onglet **Omnipod (POD)** et cliquez sur le bouton **GEST. POD (1)**, puis cliquez sur **Activer Pod (2)**.

    |Activate_Pod_1| |Activate_Pod_2|

2. L'écran **Remplir Pod ** s'affiche. Remplissez le nouveau pod avec au moins 85 unités d'insuline et écoutez le deux bips indiquant que le pod est prêt à être amorcé.

    |Activate_Pod_3|

    Assurez-vous que le nouveau pod et le RileyLink sont à proximité les uns des autres (~30 cm ou moins) et cliquez sur le bouton **Suivant**.

3. Sur l'écran **Initialiser le Pod**, le pod commencera à s'amorcer (vous entendrez un clic suivi d'une série de cliquetis quand le pod s'initialise). Si le RileyLink est hors de portée du pod en cours d'activation, vous recevrez un message d'erreur **Aucune réponse du Pod**. Si cela se produit, `rapprochez le RileyLink <#positionnement-optimal-omnipod-et-rileylink>`__ (~30 cm de distance ou moins) mais pas au dessus ni juste à côté du Pod et cliquez sur le bouton **Réessayer (1)**.

    |Activate_Pod_4| |Activate_Pod_5|

4. Une fois amorcé avec succès, une coche verte sera affichée et le bouton **Suivant** sera activé. Cliquez sur le bouton **Suivant** pour terminer l'initialisation de l'amorçage du pod et afficher l'écran **Coller Pod**.

    |Activate_Pod_6|

5. Ensuite, préparer le site de perfusion du nouveau pod. Retirez le capuchon en plastique du pod et le papier blanc de l'adhésif et appliquez le pod à l'endroit habituel sur votre corps. Une fois terminé, cliquez sur le bouton **Suivant**.

    |Activate_Pod_7|

6. La boîte de dialogue **Coller Pod** va maintenant apparaître. **Ne cliquez sur le bouton Ok QUE si vous êtes prêt à déployer la canule**.

    |Activate_Pod_8|

7. Après avoir appuyé sur **Ok**, il peut se passer un certain temps avant que l'Omnipod réponde et insère la canule (1-2 minutes maximum), donc soyez patient.

    Si le RileyLink est hors de portée du pod en cours d'activation, vous recevrez un message d'erreur **Aucune réponse du Pod**. Si cela se produit, rapprochez le RileyLink (~30 cm de distance ou moins) mais pas au dessus ni juste à côté du Pod et cliquez sur le bouton **Réessayer**.

    Si le RileyLink est hors de portée Bluetooth ou n'a pas de connexion active avec le téléphone, vous recevrez un message d'erreur **Pas de réponse du RileyLink**. Si cela se produit, rapprochez le RileyLink du téléphone et cliquez sur le bouton **Réessayer**.

    *REMARQUE : Avant d'insérer la canule, il est recommandé de pincer la peau près du point d'insertion de la canule. Cela permet une insertion en douceur de l'aiguille et réduira les risques d'occlusions.*

    |Activate_Pod_9|

    |Activate_Pod_10| |Activate_Pod_11|

8. Une coche verte s'affiche, et le bouton **Suivant** est activé si l'insertion de la canule a réussi. Cliquez sur le bouton **Suivant**.

    |Activate_Pod_12|

9. L'écran **Pod activé** s'affiche. Cliquez sur le bouton vert **Terminer**. Félicitations ! Vous avez démarré une nouvelle session de Pod actif.

    |Activate_Pod_13|

10. Le menu de **Gestion du pod** devrait maintenant s'afficher avec le bouton **Activer Pod (1)** *désactivé* et le bouton **Désactiver Pod (2)** *activé*. Ceci est dû au fait qu'un pod est maintenant actif et que vous ne pouvez pas activer un pod supplémentaire sans désactiver d'abord le pod actuellement actif.

    Cliquez sur le bouton Retour de votre téléphone pour retourner à l'écran de l'onglet **Omnipod (POD)** qui affichera maintenant les informations du Pod pour votre session de pod actif, y compris le débit de basal actuel, le niveau du réservoir du pod, l'insuline injectée, les erreurs du pod et les alertes.

    Pour plus de détails sur les informations affichées, allez dans l'onglet `Omnipod (POD) <#onglet-omnipod-pod>`__ de ce document.

    |Activate_Pod_14| |Activate_Pod_15|

Désactivation du Pod
------------------

En utilisation normale, la durée de vie d'un pod est de l'ordre de trois jours (72 heures) et de 8 heures supplémentaires après l'expiration du pod soit un total de 80 heures d'utilisation du pod.

Pour désactiver un pod (soit après son expiration soit à cause d'une erreur du pod) :

1. Allez dans l'onglet **Omnipod (POD)**, cliquez sur le bouton **GEST. POD (1)** sur l'écran **Gestion du Pod** cliquez sur le bouton **Désactiver Pod (2)**.

    |Deactivate_Pod_1| |Deactivate_Pod_2|

2. Sur l'écran **Désactiver Pod**, commencez par vérifier que le RileyLink se trouve à proximité du pod mais ni au dessus' ni juste à côté du pod, puis cliquez sur le bouton **Suivant** pour commencer le processus de désactivation du Pod.

    |Deactivate_Pod_3|

3. L'écran **Désactivation Pod** apparaîtra et vous recevrez un bip de confirmation du pod que la désactivation a réussi.

    |Deactivate_Pod_4|

    **SI la désactivation échoue** et que vous ne recevez pas de bip de confirmation, vous pouvez recevoir un message **Pas de réponse du RileyLink** ou **Pas de réponse du Pod**. Veuillez cliquer sur le bouton **Réessayer (1)** pour essayer à nouveau de le désactiver. Si la désactivation continue à échouer, veuillez cliquer sur le bouton **Supprimer Pod (2)** pour le supprimer. Vous pouvez maintenant supprimer votre pod car la session active a été désactivée. Si votre Pod se met à hurler, vous devrez peut-être couper le son manuellement (à l'aide d'une épingle ou d'un trombone) car le bouton **Supprimer Pod (2)** ne le fera pas taire.
	
	|Deactivate_Pod_5| |Deactivate_Pod_6|

4. Une coche verte apparaîtra une fois la désactivation réussie. Cliquez sur le bouton **Suivant** pour afficher l'écran de Pod désactivé. Vous pouvez maintenant supprimer votre pod car la session active a été désactivée.

    |Deactivate_Pod_7|

5. Cliquez sur le bouton vert pour retourner à l'écran **Gestion du pod**.

    |Deactivate_Pod_8|

6. Vous êtes maintenant retourné dans le menu de **Gestion du pod**, appuyez sur le bouton retour de votre téléphone pour retourner à l'onglet **Omnipod (POD)**. Vérifiez que le champ **État du RileyLink :** indique **Connecté** et que le champ **État du Pod :** affiche un message **Pas de Pod actif**.

    |Deactivate_Pod_9| |Deactivate_Pod_10|

Suspendre et reprendre l'injection d'Insuline
----------------------------------------

Le processus ci-dessous vous montre comment suspendre et reprendre l'injection d'insuline par la pompe.

*REMARQUE : si vous ne voyez pas de bouton SUSPENDRE*, son affichage n'a pas été activé dans l'onglet Omnipod (POD). Activez **Montrer le bouton Suspendre l'injection dans l'onglet Omnipod** dans les paramètres `Omnipod <#parametres-omnipod>`__ sous **Autres**.

Suspendre l'injection d’Insuline
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Utilisez cette commande pour placer le pod actif dans un état suspendu. Dans cet état suspendu, la pod n'injectera plus aucune insuline. Cette commande imite la fonction de suspension que le PDM Omnipod d'origine envoie à un pod actif.

1. Allez dans l'onglet **Omnipod (POD)** et cliquez sur le bouton **SUSPENDRE (1)**. La commande de suspension est envoyée depuis le RileyLink vers le pod actif et le bouton **SUSPENDRE (3)** sera grisé. L'**État Pod (2)** affichera **SUSPRENDRE L'INJECTION**.

    |Suspend_Insulin_Delivery_1| |Suspend_Insulin_Delivery_2|

2. Lorsque la commande de suspension est confirmée avec succès par le RileyLink, une boîte de dialogue de confirmation affiche le message **Toutes les injections d'insuline ont été suspendues.**. Cliquez sur **OK** pour confirmer et continuer.

    |Suspend_Insulin_Delivery_3|

3. Votre pod actif a maintenant suspendu toute injection d'insuline. L'onglet **Omnipod (POD)** mettra à jour l' **état du Pod (1)** vers **Suspendu**. Le bouton **SUSPENDRE** sera remplacer par un nouveau bouton **Reprendre l'injection (2)**

    |Suspend_Insulin_Delivery_4|

Reprendre l'injection d'insuline
~~~~~~~~~~~~~~~~~~~~~~~~~

Utilisez cette commande pour demander au pod actif, actuellement suspendu, de reprendre l'injection d'insuline. Une fois la commande exécutée avec succès, l'insuline sera à nouveau injectée normalement avec le débit de basal défini dans le profil actif pour l'heure actuelle. Le pod acceptera à nouveau les commandes pour les bolus, DBT, et SMB.

1. Allez dans l'onglet **Omnipod (POD)** et assurez-vous que le champ **État Pod (1)** affiche **Suspendu**, puis appuyez sur le bouton **Reprendre l'injection (2)** pour demander au pod actuel de reprendre l'injection normale d'insuline. Un message **REPRENDRE L'INJECTION** s'affichera dans le champ **État Pod (3)** indiquant que le RileyLink envoie activement la commande au pod suspendu.

    |Resume_Insulin_Delivery_1| |Resume_Insulin_Delivery_2|

2. Lorsque la commande Reprendre l'injection est confirmée avec succès par le RileyLink, une boîte de dialogue de confirmation affiche le message **L'injection de l'insuline a été reprise**. Cliquez sur **OK** pour confirmer et continuer.

    |Resume_Insulin_Delivery_3|

3. L'onglet **Omnipod (POD)** mettra à jour le champ **État du pod (1)** pour afficher **EN COURS D'EXÉCUTION** et le bouton **Reprendre l'injection** sera maintenant remplacé par le bouton **SUSPENDRE (2)**.

    |Resume_Insulin_Delivery_4|

Valider les alertes Pod
------------------------

*REMARQUE - si vous ne voyez pas de bouton ACCEPTER ALERTES, c'est parce qu'il n'est affiché dans l'onglet Omnipod (POD) QUE si l'alerte d'expiration pod ou l'alerte de réservoir bas ont été déclenchées.*

Le processus ci-dessous vous montrera comment accepter et arêter les bips du pod qui se produisent lorsque la durée d'activité du pod atteint le seuil d'alerte avant son expiration 72 heures (3 jours) après son activation. Ce délai d'avertissement est défini dans le paramètrage **Heures avant arrêt** des alertes Omnipod. La durée de vie maximale d'un pod est de 80 heures (3 jours 8 heures), cependant Insulet recommande de ne pas dépasser la limite de 72 heures (3 jours).

*REMARQUE - Si vous avez activé le paramètre "Accepter automatiquement les alertes Pod" dans les alertes Omnipod, cette alerte sera traitée automatiquement après la première occurrence et vous n'aurez PAS à l'arrêter manuellement.*

1. Lorsque le délai d'avertissement défini dans **Heures avant l'arrêt** est atteint, le pod émettra un bip d'avertissement pour vous informer qu'il approche de sa date d'expiration et qu'un changement de pod sera bientôt nécessaire. Vous pouvez le vérifier dans l'onglet **Omnipod (POD)**, le champ **Pod expiré : (1)** affichera l'heure exacte où le pod expirera (72 heures après l'activation) et le texte basculera en **rouge** après ce délai, et dessous dans le champ **Alertes Pod actives (2)** où le message de statut **Le Pod expire bientôt** est affiché. Ceci déclenchera l'affichage du bouton **ACCEPTER ALERTES (3)**. Une **notification système (4)** vous informera également de l'expiration imminente du pod

    |Acknowledge_Alerts_1| |Acknowledge_Alerts_2|

2. Allez dans l'onglet **Omnipod (POD)** et appuyez sur le bouton **ACCEPTER ALERTES (2)**. Le RileyLink envoie la commande au pod pour désactiver le bip d'avertissement d'expiration du pod et met à jour le champ **Etat pod (1)** avec **VALIDER LES ALERTES**.

    |Acknowledge_Alerts_3|

3. Lors de la **désactivation réussie** des alertes, **2 bips** seront émis par le pod actif et une boîte de dialogue de confirmation affichera le message **Les alertes actives ont été acceptées.**. Cliquez sur le bouton **OK** pour confirmer et fermer la boîte de dialogue.

    |Acknowledge_Alerts_4|

    Si le RileyLink est hors de portée du pod alors que la commande d'acceptation des alertes est en cours de traitement, un message d'avertissement affichera 2 options. **Coupure son (1)** fera taire cette alerte. **OK (2)** confirmera cette alerte et permettra à l'utilisateur d'essayer d'accepter à nouveau les alertes.

    |Acknowledge_Alerts_5|

4. Allez dans l'onglet **Omnipod (POD)** sous le champ **Alertes Pod actives** le message d'avertissement n'est plus affiché et le pod actif n'émettra plus de bips d'avertissement d'expiration du pod.

Voir l'historique du Pod
----------------

Cette section vous montre comment revoir l'historique du pod actif et filtrer selon les catégories d'action. L'outil historique du pod vous permet de visualiser les actions et résultats effectués dans votre pod actuellement actif pendant sa durée de vie de trois jours (72 à 80 heures).

Cette fonction est utile pour vérifier les bolus, les DBT, les changements de basal qui ont été donnés, mais vous pouvez ne pas être sûr qu'ils soient terminés. Les catégories restantes sont utiles en général pour résoudre les problèmes et déterminer l'ordre des événements qui ont conduit à un échec.

*REMARQUE :*
Les commandes **incertaines** apparaîtront dans l'historique du pod, cependant en raison de leur nature, vous ne pouvez pas être sûr de leur exactitude.

1. Allez dans l'onglet **Omnipod (POD)** et appuyez sur le bouton **GEST. POD (1)** pour accéder au menu de **Gestion du pod** puis appuyez sur le bouton **Historique pod (2)** pour accéder à l'écran d'historique du pod.

    |Pod_History_1| |Pod_History_2|

2. Sur l'écran **Historique Pod** la catégorie par défaut **Tous (1)** est affichée avec la **Date / Heure (2)** de tous les pods **Actions (3)** et **Résultats (4)** dans l'ordre chronologique inverse. Utilisez le **bouton retour** de votre téléphone **2 fois** pour retourner à l'onglet **Omnipod (POD)** dans l'interface principale AAPS.

    |Pod_History_3| |Pod_History_4|

Voir les paramètres et l'historique du RileyLink
-----------------------------------

Cette section vous montre comment revoir les paramètres de votre pod actif et du RileyLink ainsi que l'historique de la communication de chacun d'eux. Cette fonctionnalité, une fois sélectionnée, est divisée en deux sections : **Paramètres** et **Historique**.

L'utilisation principale de cette fonction est lorsque votre périphérique de communication pod est hors de la portée Bluetooth de votre téléphone après une période de temps et que l'**État du RileyLink** signale **RileyLink hors de portée**. Le bouton **ACTUALISER** de l'onglet principal **Omnipod (POD)** va essayer de rétablir manuellement la communication Bluetooth avec le RileyLink actuellement configuré dans les paramètres Omnipod.

Dans le cas où le bouton **ACTUALISER** de l'onglet principal **Omnipod (POD)** ne restaure pas la connexion avec le périphérique de communication pod, suivez les étapes supplémentaires ci-dessous pour une reconnexion manuelle.

Réétablir manuellement la communication Bluetooth du périphérique de communication Pod
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Depuis l'onglet **Omnipod (POD)** lorsque l'**État du RileyLink : (1)** signale **RileyLink hors de portée** appuyez sur le bouton **GEST. POD (2)** pour accéder au menu de **Gestion du Pod**. Dans le menu de **Gestion du pod** vous verrez une notification montrant une recherche active d'une connexion RileyLink, appuyez sur le bouton **Stats RileyLink (3)** pour accéder à l'écran **Paramètres RileyLink**.

    |RileyLink_Bluetooth_Reset_1| |RileyLink_Bluetooth_Reset_2|

2. Dans l'écran **Paramètres RileyLink (1)** sous la section **RileyLink (2)** vous pouvez confirmer à la fois l'état de la connexion Bluetooth et l'erreur dans les champs **État de la connexion et Erreur de Connexion : (3)**. Les états *Erreur Bluetooth* et *RileyLink hors de portée* doivent être affichés. Démarrez une reconnexion manuelle du Bluetooth en appuyant sur le bouton **Actualiser (4)** dans le coin inférieur droit.

    |RileyLink_Bluetooth_Reset_3|
    
    Si le périphérique de communication pod ne répond pas ou est hors de portée du téléphone pendant le traitement de la reconnexion Bluetooth, un message d'alerte affichera 2 options.

   **Coupure son (1)** fera taire cette alerte.
   * **OK (2)** confirmera cette alerte et permettra à l'utilisateur d'essayer de ré-établir la connexion Bluetooth à nouveau.
	
    |RileyLink_Bluetooth_Reset_4|	
	
3. Si la **Connexion Bluetooth** ne se rétablit pas, essayez de **désactiver** manuellement le Bluetooth de votre téléphone, puis de le **réactiver**.

4. Après avoir réussi la reconnexion Bluetooth du RileyLink, le champ **État de la connexion : (1)** devrait signaler **RileyLink prêt**. Félicitations, vous avez maintenant reconnecté votre périphérique de communication pod à AAPS !

    |RileyLink_Bluetooth_Reset_5|

Paramètres du périphérique de communication pod et du Pod Actif
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Cet écran vous montre les informations, états et paramètres de configuration à la fois du périphérique de communication pod actuellement configuré, et du pod Omnipod Eros actuellement actif. 

1. Allez dans l'onglet **Omnipod (POD**) et appuyez sur le bouton **GEST. POD (1)** pour accéder au menu de **Gestion du Pod** puis appuyez sur le bouton **Stats RileyLink (2)** pour afficher les paramètres du **RileyLink (3)** et du pod actif **Appareil (4)**.

    |RileyLink_Statistics_Settings_1| |RileyLink_Statistics_Settings_2|

    |RileyLink_Statistics_Settings_3|
    
Champs RileyLink (3)
++++++++++++++++++++

	* **Adresse :** Adresse MAC du périphérique de communication pod sélectionné défini dans les paramètres Omnipod.
	* **Nom :** Nom d’identification Bluetooth du périphérique de communication pod sélectionné défini dans les paramètres Bluetooth de votre téléphone.
	* **Niveau batterie :** Affiche le niveau de batterie actuel du périphérique de communication pod connecté
	* **Appareil connecté :** Modèle du pod Omnipod qui communique actuellement avec le périphérique de communication pod (actuellement seuls les pods Eros fonctionnent avec le RileyLink)
	* **État de la connexion :** l'état actuel de la connexion Bluetooth entre le périphérique de communication pod et le téléphone qui exécute AAPS.
	* **Erreur de Connexion :** S'il y a une erreur Bluetooth avec le périphérique de communication pod, les détails seront affichés ici.
	* **Version du firmware :** Version actuelle du firmware installée sur le périphérique de communication pod connecté.

Champs Appareil (4) - Avec un Pod actif
++++++++++++++++++++++++++++++++++++++

	* **Type d'appareil :** Le type d'appareil qui communique avec le périphérique de communication pod (pompe Omnipod)
	* **Appareils configurés :** Le modèle de l'appareil actif connecté au périphérique de communication pod (le nom du modèle actuel du pod Omnipod, qui est Eros)
	* **Numéro de série de pompe :** Numéro de série du pod actuellement activé
	* **Fréquence de pompe :** Fréquence radio que le périphérique de communication pod a ajustée pour communiquer avec le pod.
	* **Dernière fréquence utilisée :** Dernière fréquence radio connue que le pod a utilisé pour communiquer avec le périphérique de communication pod.
	* **Dernier contact appareil :** Date et heure du dernier contact que le périphérique de communication pod a eu avec le pod.
	* ** Bouton Actualiser** Actualiser manuellement les informations de cette page.

RileyLink et historique du Pod Actif
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Cet écran montre les informations dans l'ordre chronologique inverse de chaque état ou action que le RileyLink ou le pod actuellement connecté fait ou a fait. L'historique complet n'est disponible que pour le pod actuellement actif, après un changement de pod, cet historique sera effacé et seuls les événements du pod nouvellement activé seront enregistrés et affichés.

1. Allez dans l'onglet **Omnipod (POD)** et appuyez sur le bouton **GEST. POD (1)** pour accéder au menu de **Gestion du pod** puis appuyez sur le bouton **Stats Rileylink (2)** pour accéder à l'écran **Paramètres** et **Historique**. Cliquez sur le texte **HISTORIQUE (3)** pour afficher l'historique complet du RileyLink et de la session du pod actif.

    |RileyLink_Statistics_History_1| |RileyLink_Statistics_History_2|

    |RileyLink_Statistics_History_3|
    
Champs
++++++
    
   * **Date & Heure** : horodatage de chaque événement dans l'ordre chronologique inverse.
   * **Appareil :** L'appareil concerné par l'action ou l'état courant.
   * **État ou Action :** L'état courant ou l'action effectuée par l'appareil.

Onglet Omnipod (POD)
=================

Vous trouverez ci-dessous une explication de la mise en page et la signification des champs et icônes de l'onglet **Omnipod (POD)** de l'interface principale AAPS.

*REMARQUE : Si un message dans les champs d'état de l'onglet Omnipod (POD) indique (incertain), vous devez appuyer sur le bouton Actualiser pour l'effacer et actualiser l'état du pod.*

|Omnipod_Tab|

Champs
------

* **État RileyLink :** Affiche l'état actuel de la connexion du RileyLink

   - *RileyLink hors de portée* - Le périphérique de communication pod n'est pas à portée Bluetooth du téléphone, éteint ou a un problème empêchant la communication Bluetooth.
   - *RileyLink Prêt* - le périphérique de communication pod est allumé et initialise la connexion Bluetooth
   - *Connecté* - Le périphérique de communication pod est allumé, connecté et capable de communiquer via Bluetooth.

* **Adresse Pod :** Affiche l'adresse courante dans laquelle le pod actif est référencé
* **LOT :** Affiche le numéro de LOT du pod actif
* **TID :** Affiche le numéro de série du pod.
* **Version du firmware :** Affiche la version du firmware du pod actif.
* **Heure du Pod :** Affiche l'heure actuelle sur le pod actif.
* **Expiration Pod :** Affiche la date et l'heure à laquelle le pod actif expirera.
* **État du Pod :** Affiche l'état du pod actif.
* **Dernière connexion :** Affiche l'heure de la dernière communication avec le pod actif.

   - *À l'instant* - il y a moins de 20 secondes.
   - *Moins d'une minute* - il y a plus de 20 secondes mais moins de 60 secondes.
   - Il y a *1 minute* - plus de 60 secondes mais moins de 120 secondes (2 min)
   - Il y a *XX minutes* - il y a plus de 2 minutes comme indiqué par la valeur de XX

* **Dernier bolus :** Affiche le dernier bolus envoyé au pod actif et il y a combien de temps entre parenthèses.
* **Débit de Basal :** Affiche le débit Basal courant en ce moment, à partir du débit de basal du profil.
* **Débit de Basal Temp. :** Affiche le débit de basal Temporaire actuellement en cours d'exécution dans le format suivant

   - Unités/heure @ heure du DBT (minutes exécutées/minutes totales prévues du DBT)
   - *Exemple :* 0.00U/h @18:25 (90/120 minutes)

* **Réservoir:** Affiche Plus de 50 U restantes à gauche lorsque plus de 50 unités sont dans le réservoir. Sous cette valeur, les unités exactes sont affichées en jaune.
* **Total injecté :** Affiche le nombre total d'unités d'insuline injectées depuis le réservoir du pod actif. *Notez que c'est une approximation comme amorçage et le remplissage du pod n'est pas un processus exact.*
* **Erreurs :** Affiche la dernière erreur rencontrée. Consulter l'historique du `Pod <#voir-l-historique-du-pod>`__, `l'historique du RileyLink <#rileylink-et-historique-du-pod-actif>`__ et les fichiers log pour les erreurs passées et des informations plus détaillées.
* **Alertes Pod actif :** Réservées pour les alertes en cours sur le pod actif. Normalement utilisé lorsque la date d'expiration du pod est au delà de 72 heures et que des alertes sonores natives sont en cours d'exécution.

Icônes
-----

.. table:: 

   ====================  ===========================================
   |refresh_pod_status|  **ACTUALISER :** 
   			 
			 Envoie une commande d'actualisation au pod actif pour mettre à jour la communication
			 
			 * A utiliser pour actualiser l'état du pod et rejeter les champs qui contiennent le texte (incertain).
			 * Voir la section `Dépannage <#depannage>`__ ci-dessous pour plus d'informations.

   |pod_management|   	 **GEST. POD :**

			 Permet d'accéder au menu de gestion du pod
   |ack_alerts|		 **ACCEPTER ALERTES:**
   			 
			 Lorsque vous cliquez dessus, cela désactivera les bips d'expiration du pod et les notifications. 
			 
			 * Le bouton ne s'affiche que lorsque la durée d'utilisation du pod dépasse le seuil d'alerte d'expiration
			 * En cas de désactivation réussi, cette icône n'apparaîtra plus.
			 
   |set_time|		 **DÉFINIR L'HEURE :**
   
			 Lorsque vous cliquez dessus, cela mettra à jour l'heure du pod avec l'heure actuelle de votre téléphone.
   |suspend|  		 **SUSPENDRE:**
   
			 Suspend le pod actif
   |resume| 		 **REPRENDRE L'INJECTION :**
   
			 Réactive l'injection d'insuline du pod actif actuellement suspendu
   ====================  ===========================================


Menu de Gestion du pod
-------------------

Vous trouverez ci-dessous une explication de la mise en page et de la signification des icônes de la page **Gestion du Pod** accessible depuis l'onglet **Omnipod (POD)**.

|Omnipod_Tab_Pod_Management|

.. table:: 

   =========================  ===========================================
   |activate_pod|	      **Activer Pod**
   
   			      Amorce et active un nouveau pod

   |deactivate_pod|	      **Désactiver Pod**
 
 			      Désactive le pod actuellement actif.
			 
		   	      * Un pod partiellement appairé ignore cette commande.
			      * Utilisez cette commande pour désactiver un pod urlant (erreur 49).
			      * Si le bouton est désactivé (grisé), utilisez le bouton Supprimer Pod.

   |play_test_beep| 	      **Tester bips**
 
 			      Joue un bip de test unique sur le pod quand vous cliquez dessus.

   |discard_pod|	      **Supprimer Pod**

			      Désactive et supprime l'état d'un pod qui ne répond pas lorsque vous cliquez dessus.
			      
			      Le bouton ne s'affiche que dans des cas très particuliers où la désactivation correcte n'est plus possible :

			      * Un **pod n'est pas complètement appairé** et ignore donc les commandes de désactivation.
			      * Un **pod est bloqué** pendant le processus d'appairage entre deux étapes
	 		      * Un **pod ne s'appaire tout simplement pas.**

   |pod_history| 	      **Historique Pod** 
   
   			      Affiche l'historique de l'activité du pod actif

   |rileylink_stats| 	      **Stats RileyLink :**
   
   			      Naviguer vers l'écran des statistiques du RileyLink qui affiche les paramètres actuels et l'historique de la connexion du RileyLink

			      * **Paramètres** - affiche les paramètres du RileyLink et du pod actif
			      * **Historique** - affiche l'historique de communication du RileyLink et du Pod

   |reset_rileylink_config|   **Réinit config. RileyLink** 
   
   			      Lorsque vous cliquez dessus, ce bouton réinitialise la configuration du périphérique de communication pod actuellement connecté. 
			      
			      * Lorsque la communication est démarrée, des données spécifiques sont envoyées et placées dans le RileyLink 
			      
			        - Les registres de mémoire sont définis
				- Les protocoles de communication sont définis
				- La fréquence radio réglée est définie
				
			      * Voir les `remarques additionnelles <#remarque-concernant-reinit-config-rileyLink>`__ à la fin de ce tableau

   |pulse_log|		      **Lire journal d'impulsion :** 
    
    			      Copie le journal d'impulsion du pod actif dans le presse-papiers
   =========================  ===========================================			    

*Remarque concernant Réinit config. RileyLink*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* L'utilisation principale de cette fonction est lorsque le dispositif de communication de pod actuellement actif ne répond pas et que la communication est dans un état bloqué.
* Si le périphérique de communication du pod est éteint puis rallumé, le bouton **Réinit config. RileyLink** doit être appuyé, afin de définir les paramètres dans le périphérique de communication pod.
* Si cela n'est PAS fait, AAPS devra être redémarré après la mise sous tension du périphérique de communication pod.
* Ce bouton **NE DOIT PAS** être appuyé lors du basculement entre les différents périphériques de communication du pod

Paramètres Omnipod
================

Les paramètres du pilote Omnipod sont configurables à partir du **menu hamburger** en haut à gauche sous **Générateur de configuration**\ ➜\ **Pompe**\ ➜\ **Omnipod**\ ➜\ **Roue crantée (2)** en sélectionnant le **bouton radio (1)** intitulé **Omnipod**. En sélectionnant la **case à cocher (3)** à côté de la **roue crantée (2)** cela affichera le menu Omnipod sous la forme d'un onglet intitulé **OMNIPOD** ou **POD** dans l'interface AAPS. C'est ce que l'on appelle dans cette documentation l'onglet **Omnipod (POD)**.

|Omnipod_Settings_1|

**REMARQUE :** Un moyen plus rapide d'accéder aux **paramètres Omnipod** est d'accéder au **menu 3 points (1)** dans le coin supérieur droit de l'onglet **Omnipod (POD)** et de sélectionner **Préférences de Omnipod (2)** dans le menu déroulant.

|Omnipod_Settings_2|

Les groupes de paramètres sont listés ci-dessous; vous pouvez les activer ou les désactiver via un commutateur pour la plupart des entrées décrites ci-dessous :

|Omnipod_Settings_3|

*REMARQUE : Un astérisque (\*) indique que le paramètre par défaut est activé.*

RileyLink
---------

Permet de rechercher un appareil RileyLink. Le pilote Omnipod ne peut pas sélectionner plus d'un périphérique de communication pod à la fois.

* **Afficher le niveau de batterie transmis par OrangeLink/EmaLink :** indique le niveau de batterie réel de l'OrangeLink/EmaLink. Il est **fortement recommandé** à tous les utilisateurs d'OrangeLink/EmaLink d'activer ce paramètre.

	+ NE FONCTIONNE PAS avec le RileyLink original.
	+ Peut ne pas marcher avec des alternatives au RileyLink.
	+ Activé - Indique le niveau de batterie actuel des périphériques de communication de pod.
	+ Désactivé - Indique n/a.
* **Activer l'enregistrement des changements de pile dans Actions :** Dans le menu Actions le bouton de changement de pile est activé SI vous avez activé ce paramètre ET le paramètre de rapport de la batterie ci-dessus.  Certains appareils de communication pods ont maintenant la possibilité d’utiliser des piles ordinaires qui peuvent être changées.  Cette option vous permet d'enregistrer et de réinitialiser l'âge de la pile.

Bips de confirmation
------------------

Paramètre les bips de confirmation du pod pour l'injection et les modifications de bolus, basal, SMB et DBT.

* **\*Bips bolus activés :** Active ou désactive les bips de confirmation lorsqu'un bolus est injecté.
* **\*Bips basal activés :** Active ou désactive les bips de confirmation lorsqu'un nouveau débit de basal est défini. le débit de basal actif est annulé ou le débit de basal actuel est changé.
* **\*Bips SMB activés :** Active ou désactive les bips de confirmation lorsqu'un SMB est injecté.
* **Bips DBT activés :** Active ou désactive les bips de confirmation lorsqu'un DBT est défini ou annulé.

Alertes
------

Provides AAPS alerts and Nightscout announcements for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the Omnipod (POD) tab and press the ACK ALERTS button.*
	
* **\*Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **\*Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.
* **Automatically acknowledge Pod alerts:** When enabled a notification will still be issued however immediately after the first pod communication contact since the alert was issued it will now be automatically acknowledged and the alert will be dismissed.

Notifications
-------------

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus events were successful. 

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **\*Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **\*Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
   
Autres
-----

Provides advanced settings to assist debugging.
	
* **Show Suspend Delivery button in Omnipod tab:** Hide or display the suspend delivery button in the **Omnipod (POD)** tab.
* **Show Pulse log button in Pod Management menu:** Hide or display the pulse log button in the **Pod Management** menu.
* **Show RileyLink Stats button in Pod Management menu:** Hide or display the RileyLink Stats button in the **Pod Management** menu.
* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

Switching or Removing an Active Pod Communication Device (RileyLink)
--------------------------------------------------------------------

With many alternative models to the original RileyLink available or the need have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration. 

The following steps will show how to **Remove** and existing pod communication device (RileyLink) as well as **Add** a new pod communication device.  Executing both **Remove** and **Add** steps will switch your device.

1. Access the **RileyLink Selection** menu by selecting the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu. On the **Omnipod Settings** menu under **RileyLink Configuration (3)** press the **Not Set** (if no device is selected) or **MAC Address** (if a device is present) text to open the **RileyLink Selection** menu. 

    |Omnipod_Settings_2| |RileyLink_Setup_2|  

Remove Currently Selected Pod Communication Device (RileyLink)
--------------------------------------------------------------

This process will show how to remove the currently selected pod communication device (RileyLink) from the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **MAC Address (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Remove_1|

2. On the **RileyLink Selection** menu the press **Remove (2)** button to remove **your currently selected RileyLink (3)**

    |RileyLink_Setup_Remove_2|

3. At the confirmation prompt press **Yes (4)** to confirm the removal of your device.

    |RileyLink_Setup_Remove_3|
    
4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device.

    |RileyLink_Setup_Remove_4|

Add Currently Selected Pod Communication Device (RileyLink)
-----------------------------------------------------------

This process will show how to add a new pod communication device to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Add_1|
    
2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

    |RileyLink_Setup_Add_2|

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device.

    |RileyLink_Setup_Add_3| |RileyLink_Setup_Add_4|
    

Onglet Actions (ACT)
=================

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. This is done because of how the Omnipod pump is built and operates. The **pump battery** and **insulin reservoir** are self contained inside of each pod. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours).

  |Actions_Tab|

Niveaux
------

**Niveau d'insuline**

Reporting of the amount of insulin in the Omnipod Eros Pod is not exact.  This is because it is not known exactly how much insulin was put in the pod, only that when the 2 beeps are triggered while filling the pod that over 85 units have been injected. A Pod can hold a maximum of 200 units. Priming can also introduce variance as it is not and exact process.  With both of these factors, the Omnipod driver has been written to give the best approximation of insulin remainin in the reservoir.  

  * **Abover 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
  * **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir. 
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.


**Niveau batterie**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communicaton devices like the OrangeLink and EmaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communicaton device is disconnected a value of 0% will be reported.

  * **RileyLink hardware is NOT capable of report battery level** 
  * **Use battery level reported by OrangeLink/EmaLink Setting MUST be enabled in the Omnipod settings to reporting battery level values**
  * **Battery Level ONLY works for OrangeLink and EmaLink Devices**
  * **Battery Level reporting MAY work for other devices (excluding RileyLink)**
  * **SMS** - Returns current battery level as a response when an actual level exists, a value of n/a will not be returned.
  * **Nightscout** - Battery level is reported when an actual level exists, value of n/a will not be reported


Dépannage
===============

Erreurs Pod
------------

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be found `here <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__ to help determine the cause.

Preventing error 49 pod failures
--------------------------------

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. We recommend users to switch to the Nightscout client to *upload only (Disable sync)* under the **Config Builder**\ ➜\ **General**\ ➜\ **NSClient**\ ➜\ **cog wheel**\ ➜\ **Advanced Settings** to prevent possible failures.

Alertes Pompe hors de portée
-----------------------

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]** and setting this to **120**.

Importer les paramètres AAPS de versions précédentes
----------------------------------

Please note that importing settings has the possibility to import an outdated Pod status. As a result, you may lose an active Pod. It is therefore strongly recommended that you **do not import settings while on an active Pod session**.

1. Deactivate your pod session. Verify that you do not have an active pod session.
2. Export your settings and store a copy in a safe place.
3. Uninstall the previous version of AAPS and restart your phone.
4. Install the new version of AAPS and verify that you do not have an active pod session.
5. Import your settings and activate your new pod.

Alertes Pilote Omnipod
---------------------

please note that the Omnipod driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

Pas de Pod actif
~~~~~~~~~~~~~

No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically silenced.

Pod suspendu
~~~~~~~~~~~~~

Alerte informative que le Pod a été suspendu.

Echec Paramétrage Profil Basal. La livraison peut être suspendue ! Veuillez actualiser manuellement l'état du Pod à partir de l'onglet Omnipod et reprendre l'injection si nécessaire..
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alerte informative que le réglage du profil basal du Pod a échoué, et vous devrez appuyer sur *Actualiser* dans l'onglet Omnipod.

Impossible de vérifier si le bolus SMB a réussi. Si vous êtes sûr que le Bolus n'a pas réussi, vous devez supprimer manuellement l'entrée SMB dans les traitements.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alerte que le bolus SMB n'a pas pu être vérifié, vous devrez vérifier le champ *Dernier bolus* dans l'onglet Omnipod pour voir si le bolus SMB a bien été fait et dans le cas contraire supprimer l'entrée dans l'onglet Traitements.

Incertain si l'action "Bolus/DBT/SMB" est terminée, merci de vérifier manuellement s'il a réussi.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

En raison de la façon dont le RileyLink et l'Omnipod communiquent, des situations peuvent se produire où le fait qu'une commande ait été traitée avec succès est *incertain*. La nécessité d'informer l'utilisateur de cette incertitude était nécessaire.

Voici quelques exemples de cas où une notification incertaine peut se produire.

* **Bolus** - Les bolus incertains ne peuvent pas être vérifiés automatiquement. La notification restera jusqu'au prochain bolus mais un rafraîchissement manuel du pod effacera le message. *Par défaut, les bips d'alertes sont activés pour ce type de notification car l'utilisateur devra les vérifier manuellement.*
* **DBT, états du Pod, changements de profil, changements d'heure** - un rafraîchissement manuel du pod effacera le message. Par défaut, les bips d'alerte sont désactivés pour ce type de notification.
* **Décalage de l'heure du pod -** Lorsque l'heure du pod et l'heure de votre téléphone sont décalés, il est difficile pour la boucle AAPS de fonctionner et de faire des prédictions et des recommandations de posologie précises. If the time deviation between the pod and the phone is more than 5 minutes then AAPS will report the pod is in a Suspended state under Pod status with a HANDLE TIME CHANGE message. Une icône supplémentaire **Définir l'heure** apparaîtra au bas de l'onglet Omnipod (POD). Cliquer sur Définir l'heure synchronisera l'heure sur le pod avec l'heure sur le téléphone, puis vous pouvez cliquer sur le bouton REPRENDRE L'INJECTION pour continuer les opérations normales de pod.

Bonnes pratiques
==============

Positionnement optimal Omnipod et RileyLink
-----------------------------------------

L'antenne utilisée sur le RileyLink pour communiquer avec un pod Omnipod est une antenne spirale hélicoïdale à 433 MHz. En raison de ses propriétés de construction, il émet un signal omnidirectionnel comme un donuts à trois dimensions avec l'axe z représentant l'antenne verticale. Cela signifie qu'il y a des positions optimales pour le positionnement du RileyLink, en particulier lors des séquences d'activation et de désactivation.

|Toroid_w_CS|

    *(Fig 1. Tracé graphique de l'antenne hélicoïdale en spirale dans un diagramme omnidirectionnel*)

Pour des raisons de sécurité, l'*activation* d'un pod doit être faite à une distance *plus proche (~30 cm ou moins)* que les autres opérations telles que donner un bolus paramétrer un DBT ou simplement rafraîchir l'état du pod. En raison de la nature de la transmission du signal à partir de l'antenne RileyLink, il n'est PAS recommandé de placer le pod au dessus du RileyLink ou juste à côté de celui-ci.

L'image ci-dessous montre le positionnement optimal du RileyLink lors des procédures d'activation et de désactivation du pod. Le pod peut être activé dans d'autres positions mais vous aurez le plus de chance de réussir en utilisant la même position que dans l'image ci-dessous.

*Remarque : Si après avoir positionné le pod de manière optimale, la communication RileyLink échoue, cela peut être dû à une batterie faible qui réduit la portée de transmission de l'antenne du RileyLink. Pour éviter ce problème, assurez-vous que le RileyLink est correctement chargé ou connecté directement à un câble de charge durant ce processus.*

|Omnipod_pod_and_RileyLink_Position|

Où trouver de l'aide pour le pilote Omnipod
====================================

Tout le travail de développement du pilote Omnipod est fait par la communauté par des bénévoles; nous vous demandons donc d'être attentif et d'utiliser les directives suivantes lorsque vous demandez de l'aide :

- **Niveau 0 :** Lisez la section correspondante de cette documentation pour vous assurer que vous comprenez comment la fonctionnalité avec laquelle vous avez des difficultés est censée fonctionner.
- **Niveau 1 :** Si vous rencontrez toujours des problèmes que vous n'arrivez pas à résoudre en utilisant ce document, alors veuillez aller sur la chaine `AndroidAPS <https://gitter.im/MilosKozak/AndroidAPS>`__ sur **Gitter** ou sur la chaine *#androidaps* sur **Discord** en utilisant `ce lien d'invitation <https://discord.com/invite/NhEUtzr>`__.
- **Niveau 2 :** Rechercher dans les problèmes existants pour voir si votre problème a déjà été signalé; si ce n'est pas le cas, veuillez créer une nouvelle `fiche <https://github.com/nightscout/AndroidAPS/issues>`__ et joignez vos `fichiers log <../Usage/Accessing-logfiles.html>`__.
- **Soyez patient - la plupart des membres de notre communauté sont des bénévoles de bonne nature, et résoudre les problèmes nécessite souvent du temps et de la patience de la part des utilisateurs et des développeurs.**



..
	Alias des ressources d'images Omnipod pour référencer les images par leur nom avec plus de flexibilité de positionnement


..
	Icônes de l'interface

..
	Aperçu de l'onglet Omnipod (POD)

.. |ack_alerts|                    image:: ../images/omnipod/ICONS/omnipod_overview_ack_alerts.png
.. |pod_management|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management.png
.. |refresh_pod_status|            image:: ../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png
.. |resume|               	   image:: ../images/omnipod/ICONS/omnipod_overview_resume.png
.. |set_time|                      image:: ../images/omnipod/ICONS/omnipod_overview_set_time.png
.. |suspend|                       image:: ../images/omnipod/ICONS/omnipod_overview_suspend.png

..
	Onglet de Gestion du pod

.. |activate_pod|                  image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png
.. |deactivate_pod|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png
.. |discard_pod|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png
.. |play_test_beep|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png
.. |pod_history|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png
.. |pulse_log|                     image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png
.. |reset_rileylink_config|        image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png
.. |rileylink_stats|               image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png


..
	Images de la section pédagogique
	
..
	Configuration matérielle et logicielle requise
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|				image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |Android_phone|			image:: ../images/omnipod/Android_phone.png	
.. |Omnipod_Pod|			image:: ../images/omnipod/Omnipod_Pod.png
	
..
		Valider les alertes
.. |Acknowledge_Alerts_1|               image:: ../images/omnipod/Acknowledge_Alerts_1.png
.. |Acknowledge_Alerts_2|               image:: ../images/omnipod/Acknowledge_Alerts_2.png
.. |Acknowledge_Alerts_3|               image:: ../images/omnipod/Acknowledge_Alerts_3.png
.. |Acknowledge_Alerts_4|               image:: ../images/omnipod/Acknowledge_Alerts_4.png
.. |Acknowledge_Alerts_5|               image:: ../images/omnipod/Acknowledge_Alerts_5.png

..
	Onglet Actions
.. |Actions_Tab|                  		image:: ../images/omnipod/Actions_Tab.png

..
	Activer le Pod
.. |Activate_Pod_1|                     image:: ../images/omnipod/Activate_Pod_1.png
.. |Activate_Pod_2|                     image:: ../images/omnipod/Activate_Pod_2.png
.. |Activate_Pod_3|                     image:: ../images/omnipod/Activate_Pod_3.png
.. |Activate_Pod_4|                     image:: ../images/omnipod/Activate_Pod_4.png
.. |Activate_Pod_5|                     image:: ../images/omnipod/Activate_Pod_5.png
.. |Activate_Pod_6|                     image:: ../images/omnipod/Activate_Pod_6.png
.. |Activate_Pod_7|                     image:: ../images/omnipod/Activate_Pod_7.png
.. |Activate_Pod_8|                     image:: ../images/omnipod/Activate_Pod_8.png
.. |Activate_Pod_9|                     image:: ../images/omnipod/Activate_Pod_9.png
.. |Activate_Pod_10|                    image:: ../images/omnipod/Activate_Pod_10.png
.. |Activate_Pod_11|                    image:: ../images/omnipod/Activate_Pod_11.png
.. |Activate_Pod_12|                    image:: ../images/omnipod/Activate_Pod_12.png
.. |Activate_Pod_13|                    image:: ../images/omnipod/Activate_Pod_13.png
.. |Activate_Pod_14|                    image:: ../images/omnipod/Activate_Pod_14.png
.. |Activate_Pod_15|                    image:: ../images/omnipod/Activate_Pod_15.png

..
	Désactiver Pod
.. |Deactivate_Pod_1|                   image:: ../images/omnipod/Deactivate_Pod_1.png
.. |Deactivate_Pod_2|                   image:: ../images/omnipod/Deactivate_Pod_2.png
.. |Deactivate_Pod_3|                   image:: ../images/omnipod/Deactivate_Pod_3.png
.. |Deactivate_Pod_4|                   image:: ../images/omnipod/Deactivate_Pod_4.png
.. |Deactivate_Pod_5|                   image:: ../images/omnipod/Deactivate_Pod_5.png
.. |Deactivate_Pod_6|                   image:: ../images/omnipod/Deactivate_Pod_6.png
.. |Deactivate_Pod_7|                   image:: ../images/omnipod/Deactivate_Pod_7.png
.. |Deactivate_Pod_8|                   image:: ../images/omnipod/Deactivate_Pod_8.png
.. |Deactivate_Pod_9|                   image:: ../images/omnipod/Deactivate_Pod_9.png
.. |Deactivate_Pod_10|                  image:: ../images/omnipod/Deactivate_Pod_10.png

..
	Activation du pilote Omnipod dans AAPS
.. |Enable_Omnipod_Driver_1|            image:: ../images/omnipod/Enable_Omnipod_Driver_1.png
.. |Enable_Omnipod_Driver_2|            image:: ../images/omnipod/Enable_Omnipod_Driver_2.png
.. |Enable_Omnipod_Driver_3|            image:: ../images/omnipod/Enable_Omnipod_Driver_3.png
.. |Enable_Omnipod_Driver_4|            image:: ../images/omnipod/Enable_Omnipod_Driver_4.png
.. |Enable_Omnipod_Driver_5|            image:: ../images/omnipod/Enable_Omnipod_Driver_5.png

..
	Positionnement optimal du RileyLink et du pod Omnipod
.. |Omnipod_pod_and_RileyLink_Position|	image:: ../images/omnipod/Omnipod_pod_and_RileyLink_Position.png
.. |Toroid_w_CS|                  		image:: ../images/omnipod/Toroid_w_CS.png

..
	Paramètres Omnipod
.. |Omnipod_Settings_1|                 image:: ../images/omnipod/Omnipod_Settings_1.png
.. |Omnipod_Settings_2|                 image:: ../images/omnipod/Omnipod_Settings_2.png
.. |Omnipod_Settings_3|                 image:: ../images/omnipod/Omnipod_Settings_3.png

..
	Onglet Omnipod
.. |Omnipod_Tab|                  		image:: ../images/omnipod/Omnipod_Tab.png
.. |Omnipod_Tab_Pod_Management|         image:: ../images/omnipod/Omnipod_Tab_Pod_Management.png

..
	Historique Pod
.. |Pod_History_1|                  	image:: ../images/omnipod/Pod_History_1.png
.. |Pod_History_2|                  	image:: ../images/omnipod/Pod_History_2.png
.. |Pod_History_3|                  	image:: ../images/omnipod/Pod_History_3.png
.. |Pod_History_4|                  	image:: ../images/omnipod/Pod_History_4.png

..
	Reprendre l'injection d'insuline
.. |Resume_Insulin_Delivery_1|          image:: ../images/omnipod/Resume_Insulin_Delivery_1.png
.. |Resume_Insulin_Delivery_2|          image:: ../images/omnipod/Resume_Insulin_Delivery_2.png
.. |Resume_Insulin_Delivery_3|          image:: ../images/omnipod/Resume_Insulin_Delivery_3.png
.. |Resume_Insulin_Delivery_4|          image:: ../images/omnipod/Resume_Insulin_Delivery_4.png

..
	Réinitialisation Bluetooth RileyLink
.. |RileyLink_Bluetooth_Reset_1|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_1.png
.. |RileyLink_Bluetooth_Reset_2|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_2.png
.. |RileyLink_Bluetooth_Reset_3|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_3.png
.. |RileyLink_Bluetooth_Reset_4|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_4.png
.. |RileyLink_Bluetooth_Reset_5|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_5.png

..
	Configuration RileyLink
.. |RileyLink_Setup_1|                  image:: ../images/omnipod/RileyLink_Setup_1.png
.. |RileyLink_Setup_2|                  image:: ../images/omnipod/RileyLink_Setup_2.png
.. |RileyLink_Setup_3|                  image:: ../images/omnipod/RileyLink_Setup_3.png
.. |RileyLink_Setup_4|                  image:: ../images/omnipod/RileyLink_Setup_4.png
.. |RileyLink_Setup_5|                  image:: ../images/omnipod/RileyLink_Setup_5.png
.. |RileyLink_Setup_6|                  image:: ../images/omnipod/RileyLink_Setup_6.png

..
	Configuration RileyLink Ajouter un Appareil
.. |RileyLink_Setup_Add_1|                  image:: ../images/omnipod/RileyLink_Setup_Add_1.png
.. |RileyLink_Setup_Add_2|                  image:: ../images/omnipod/RileyLink_Setup_Add_2.png
.. |RileyLink_Setup_Add_3|                  image:: ../images/omnipod/RileyLink_Setup_Add_3.png
.. |RileyLink_Setup_Add_4|                  image:: ../images/omnipod/RileyLink_Setup_Add_4.png

..
	Configuration RileyLink Supprimer un Appareil
.. |RileyLink_Setup_Remove_1|                  image:: ../images/omnipod/RileyLink_Setup_Remove_1.png
.. |RileyLink_Setup_Remove_2|                  image:: ../images/omnipod/RileyLink_Setup_Remove_2.png
.. |RileyLink_Setup_Remove_3|                  image:: ../images/omnipod/RileyLink_Setup_Remove_3.png
.. |RileyLink_Setup_Remove_4|                  image:: ../images/omnipod/RileyLink_Setup_Remove_4.png

..
	Historique Statistiques RileyLink
.. |RileyLink_Statistics_History_1|     image:: ../images/omnipod/RileyLink_Statistics_History_1.png
.. |RileyLink_Statistics_History_2|     image:: ../images/omnipod/RileyLink_Statistics_History_2.png
.. |RileyLink_Statistics_History_3|     image:: ../images/omnipod/RileyLink_Statistics_History_3.png

..
	État RileyLink - Paramètres
.. |RileyLink_Statistics_Settings_1|    image:: ../images/omnipod/RileyLink_Statistics_Settings_1.png
.. |RileyLink_Statistics_Settings_2|    image:: ../images/omnipod/RileyLink_Statistics_Settings_2.png
.. |RileyLink_Statistics_Settings_3|    image:: ../images/omnipod/RileyLink_Statistics_Settings_3.png

..
	Suspendre l'injection d’Insuline
.. |Suspend_Insulin_Delivery_1|         image:: ../images/omnipod/Suspend_Insulin_Delivery_1.png
.. |Suspend_Insulin_Delivery_2|         image:: ../images/omnipod/Suspend_Insulin_Delivery_2.png
.. |Suspend_Insulin_Delivery_3|         image:: ../images/omnipod/Suspend_Insulin_Delivery_3.png
.. |Suspend_Insulin_Delivery_4|         image:: ../images/omnipod/Suspend_Insulin_Delivery_4.png
