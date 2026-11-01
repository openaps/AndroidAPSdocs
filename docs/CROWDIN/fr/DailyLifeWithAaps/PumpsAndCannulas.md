# Pompes et canules

## Changement du set de perfusion : réservoir d'insuline et canule

La procédure décrite ci-dessous concerne seulement les pompes à tubulure. Elle ne s'applique pas aux pompes patch comme Omnipod, Medtrum Nano, Accu-Chek Solo, etc. Cette procédure est parfois appelée « changement de set » : un changement de set « complet » comprend le réservoir d'insuline et la canule, un changement de set « partiel » ne concerne que la canule.

Les pompes patch se remplissent et s'amorcent elles-mêmes dans leur propre assistant d'activation, et leur canule est déjà dans le corps. **AAPS** ne propose pas d'amorçage pour elles : **Amorcer/Remplir** n'apparaît ni dans le panneau **Gestion** ni dans QuickLaunch. Voir la page de votre pompe dans [Pompes compatibles](../Getting-Started/CompatiblePumps.md).

Le changement physique de la cartouche ou du réservoir ne peut pas se faire depuis **AAPS** : il doit être fait directement sur la pompe. Une fois le changement fait, il doit être enregistré manuellement dans **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Guide pour changer à la fois le réservoir de la pompe et la canule

1. Dans **AAPS**, déconnectez la pompe : appuyez sur l'[icône de la boucle](#AapsScreens-loop-status) sur l'écran principal et choisissez **Déconnecter la pompe** pour 1 heure. L'icône devient une prise grise, ce qui indique que la pompe est déconnectée.

2. Changez physiquement le réservoir d'insuline : déconnectez physiquement votre pompe du corps, puis changez le réservoir/la cartouche et la canule selon les instructions du fabricant.

3. Amorcez/remplissez la tubulure et la canule : cela peut se faire directement sur la pompe. Veillez à éliminer toutes les bulles d'air de la tubulure.

4. Posez la nouvelle canule sur le corps. Une fois la canule insérée et l'aiguille retirée, la canule posée contient un petit espace d'air qui doit aussi être amorcé. Pour l'indiquer à **AAPS** et amorcer le site : ouvrez **Amorcer/Remplir** (dans le panneau d'état étendu de l'écran principal, dans le panneau **Gestion** ou avec un bouton [QuickLaunch](QuickLaunch.md)) et cochez **Enregistrer le changement de site de la pompe** et/ou **Enreg. changement de réservoir** selon le cas, pour enregistrer le changement. Appuyez ensuite sur la quantité d'amorçage de canule par défaut (elle est en général d'environ 0,3 U, mais vérifiez que cette valeur convient à votre canule) et choisissez **OK**. Lisez le message de résumé et confirmez l'amorçage en appuyant sur **OK**.

   ![Amorcer/Remplir dans le panneau Gestion avec une pompe à tubulure](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Reconnectez la pompe dans **AAPS** : appuyez sur l'icône de prise grise et choisissez **Reconnecter la pompe** pour reprendre la boucle.

### Informations utiles sur les changements d'insuline et de canule

* Enregistrer un changement de site de la pompe remet Autosens à 100 %. Cela remet aussi à zéro les voyants d'état et les âges de la canule et de l'insuline correspondants sur l'écran principal d'**AAPS**.

* Vous pouvez régler les quantités d'amorçage par défaut dans les paramètres **Amorcer/Remplir** — tapez « amorcer » dans la barre de recherche de l'écran principal pour les ouvrir (voir [Préférences](../SettingUpAaps/Preferences.md)). Consultez la notice dans votre boîte de canules pour savoir combien d'unités il faut amorcer pour votre canule (cela dépend de la longueur de l'aiguille et de la tubulure).

* L'insuline délivrée avec la fonction d'amorçage n'est pas prise en compte par **AAPS** pour calculer l'insuline active (IA), et elle est marquée « Amorcer » dans l'[Historique Traitements](#aaps-screens-treatments).

* Toute insuline donnée en bolus depuis la pompe pendant une déconnexion de la pompe n'est pas non plus prise en compte par **AAPS**. Si vous faites un bolus directement depuis la pompe pendant qu'**AAPS** est déconnecté, vous pouvez, une fois la pompe reconnectée, déclarer cette insuline (sans la délivrer) dans la boîte de dialogue **Insuline** (voir [Déclarer de l'insuline délivrée sans faire de bolus](#pumps-cannulas-announce-insulin) ci-dessous).

### Problèmes de canule, de site de perfusion, de tubulure et/ou de pompe

Si vous êtes sûr de ne pas avoir reçu d'insuline pendant une certaine période, alors qu'**AAPS** l'a enregistrée, et que vous savez exactement quand le problème a commencé (_par ex._ vous retirez la canule et voyez qu'elle s'est pliée pendant la pose), vous pouvez le corriger dans **AAPS**. Gardez en tête que l'insuline a peut-être bien été délivrée, mais qu'elle agit lentement pour une raison quelconque.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Ne supprimez une délivrance d'insuline dans **AAPS** qu'avec une EXTRÊME prudence, au cas où l'insuline _aurait_ réellement été délivrée, et surveillez de près votre glycémie pendant les 24 h suivantes.
```

Pour supprimer les bolus et les SMB dont vous savez qu'ils n'ont pas été délivrés, ouvrez le **menu** (☰), choisissez [Historique Traitements](#aaps-screens-treatments) et, dans l'onglet **Glucides et bolus**, supprimez avec prudence les bolus enregistrés à partir du moment où le problème a commencé. Cela corrige la valeur d'« insuline active » (IA), qui est essentielle pour les calculs d'**AAPS** ; si vous revenez maintenant à l'écran principal, vous verrez que l'IA a baissé. Attention : vous ne pouvez pas supprimer l'insuline basale qu'**AAPS** considère comme délivrée, elle sera donc toujours prise en compte par **AAPS**.

Dans les cas moins évidents de problèmes de délivrance d'insuline, _par ex._ fuites, occlusions ou « tunnel » le long de la canule, où vous ne savez pas quand le problème a commencé ou pensez qu'une partie de l'insuline a été délivrée, vous devez être prudent. Vous pouvez remarquer ces problèmes en « sentant » l'odeur de l'insuline, en voyant un adhésif mouillé, en ayant des glycémies élevées ou en recevant une alarme. Comme vous ne saurez jamais combien d'insuline est arrivée dans votre peau (et pourrait commencer à agir après un moment), il sera difficile de savoir quelle quantité d'insuline il faut déduire de la valeur actuelle d'« insuline active » (IA). Une stratégie consiste à suspendre la boucle pendant 5 heures (ou pendant votre durée d'action de l'insuline) après avoir résolu le problème de délivrance d'insuline, puis à reprendre la boucle. Ainsi, l'IA sera correcte quand vous relancerez la boucle.

(pumps-cannulas-disconnecting)=
## Déconnecter la pompe pour la douche ou une activité

Si vous retirez votre pompe pour la douche, le bain, la natation, un sport de contact ou d'autres activités, vous devez indiquer à **AAPS** qu'aucune insuline n'est délivrée, pour que l'IA reste correcte. La pompe peut être déconnectée avec l'[icône de la boucle](#AapsScreens-loop-status) sur l'écran principal : appuyez dessus et choisissez **Déconnecter la pompe** avec la durée voulue. Si l'activité dure plus longtemps que prévu, ouvrez à nouveau la même boîte de dialogue et choisissez une nouvelle durée sous **Déconnecter la pompe** : la déconnexion est prolongée et la nouvelle durée commence maintenant. Vous n'avez pas besoin de reconnecter d'abord.

Comme vous ne recevez pas d'insuline pendant que la pompe est déconnectée, vous devez la reconnecter toutes les deux heures pour rattraper le basal manquant. Vous pouvez le faire en vous reconnectant et en faisant un bolus des quantités de basal manquantes (_par ex._ des deux dernières heures) avant de vous déconnecter à nouveau. Cela aide à éviter un manque d'insuline grave, qui pourrait provoquer une acidocétose diabétique (ACD). S'il n'est pas pratique de reconnecter la pompe pendant l'activité (site de la canule couvert par une combinaison de plongée, _etc._), pensez plutôt à une injection au stylo. Cette injection manuelle peut être enregistrée dans **AAPS**, et pas forcément au moment de l'injection (notez simplement l'heure de l'injection) : vous pouvez déclarer l'insuline et indiquer l'heure réelle de l'injection quand vous reconnectez la pompe.

(pumps-cannulas-announce-insulin)=
## Déclarer de l'insuline délivrée sans faire de bolus

To announce insulin delivered from the pump either while **AAPS** was disconnected, or from pen injections: open the [Insulin dialog](#aaps-screens-buttons-insulin) (**Treatments** in the bottom navigation, or a QuickLaunch button), enter the amount in units and enable **Bolus will be recorded only (not delivered by pump)**. Une ligne **Heure** (réglée sur **Maintenant**) vous permet alors d'enregistrer l'heure réelle de l'injection : vous pouvez l'ignorer si l'injection est récente. Si le bolus a été donné il y a un certain temps, utilisez **-** pour reculer l'heure (_par ex._ -30 min), ou ouvrez la ligne avec le chevron pour choisir la date et l'heure exactes. **AAPS** tiendra alors compte de la durée d'action de l'insuline et calculera en conséquence l'insuline restante dans le corps.

Si vous utilisez **AAPS** en tant qu'aidant, vous pouvez très facilement déconnecter (et reconnecter) la pompe à distance par [commande SMS](../RemoteFeatures/SMSCommands.md), avec des commandes comme "pump disconnect 120" et "pump connect 120". La durée de la déconnexion à distance va de 1 à 120 min (dans cet exemple, elle est de 120 minutes). C'est très utile si le téléphone **AAPS** est difficile d'accès pour vous : rangé dans la ceinture de pompe d'un enfant qui court vers la piscine, ou bien gardé de près (ou utilisé) par un adolescent.

## Reconnecter la pompe après l'activité

Après une longue déconnexion (1–2 heures), il est assez fréquent qu'**AAPS** calcule que vous avez maintenant une IA négative. Quand vous reconnectez la pompe, selon votre préférence, votre glycémie actuelle, le repas prévu ou l'activité suivante, vous pouvez soit :

a) Reconnectez simplement la pompe dans **AAPS** (du gris au vert, pour la boucle fermée) et laissez **AAPS** recommencer à délivrer de l'insuline

_ou_

b) Si vous voulez être plus agressif (par exemple, si vous allez vers une hyperglycémie), vous pouvez ouvrir l'[Assistant Bolus](#aaps-screens-bolus-wizard) et faire un bolus pour zéro glucide, pour délivrer immédiatement sous forme de bolus l'insuline manquante calculée.

Le choix de la stratégie est très personnel : le mieux est d'essayer pour trouver ce qui vous convient.


(Aapsscreens-site-rotation)=
## Rotation du site

**Gestion → Rotation du site** ouvre la boîte de dialogue Rotation du site en mode Affichage :

- Avec les deux boutons du haut (icône de canule et icône de capteur), vous pouvez afficher seulement les sites de canule, seulement les sites de capteur, ou les deux
- Tous les changements de canule et de capteur des 45 derniers jours sont disponibles.
- Appuyez sur une zone, ou sur une entrée de la liste ci-dessous, pour filtrer la liste et ne garder que les entrées de la zone choisie. La zone sélectionnée sera surlignée de couleur vert clair.
- Appuyez sur l'icône **crayon** à côté d'une entrée pour ouvrir le mode Édition et modifier sa localisation du site, sa flèche ou sa remarque

![Mode Affichage](../images/SiteRotation/ViewMode.png)

- L'icône **roue dentée** (en haut à droite) ouvre les paramètres : **Profil utilisateur pour la rotation du site** ouvre une boîte de dialogue où vous choisissez **Homme**, **Femme** ou **Enfant**, et les interrupteurs **Gérer la rotation du site de la pompe** et **Gérer la rotation du site MGC** choisissent les sites que vous gérez.

![Paramètres](../images/SiteRotation/Settings.png)

![Boîte de dialogue Profil utilisateur pour la rotation du site](../images/SiteRotation/Type.png)

*Note: this setting decides whether the Site Rotation dialog (Edit mode) opens automatically when a new entry is made with the "Prime/Fill" button or the "Sensor Insert" button.*

- Pour un changement de site fait directement sur la pompe, vous devez ouvrir le mode Affichage et éditer la nouvelle entrée pour choisir la localisation et la flèche

Le mode Édition vous permet de choisir la localisation, la flèche et la remarque de l'entrée sélectionnée :

- L'entrée en cours d'édition est affichée sous les images du corps, avec l'icône de son type (canule ou capteur)
- Les vues de face et de dos sont affichées côte à côte : appuyez sur la zone où vous l'avez posé
- Once a site is selected (highlighted in green), the list below shows all entries made in this site in the past 45 days.

![Mode Édition](../images/SiteRotation/EditMode.png)

- Vous pouvez ajouter une flèche (facultatif) en appuyant sur l'icône de flèche à droite de l'entrée : la boîte de dialogue **Sélectionner flèche** vous permet d'indiquer une sous-zone ou l'orientation du pod

![Position](../images/SiteRotation/EditModeSub.png)

- Vous pouvez aussi ajouter une **Remarque** sur le site choisi
- Appuyez sur l'icône **enregistrer** (en haut à droite) pour enregistrer le site

Le filtrage peut se faire graphiquement sur l'image, ou en appuyant sur un événement de la liste Pour retirer le filtre, appuyez simplement sur l'image en dehors des sites

![Filtrage](../images/SiteRotation/Filtering.png)
