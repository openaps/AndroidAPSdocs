# Fonctionnement de AAPS via votre montre connectée Wear OS

(Watchfaces-aaps-watchfaces)=

## Cadrans AAPS

```{warning}
Les cadrans **AAPS** classiques fonctionnent seulement sur Wear OS 5 et plus ancien, et Wear OS 5 les limite déjà. Sur **Wear OS 6 et plus récent**, l'application de la montre installe à la place un seul cadran au format Watch Face Format de Google : votre cadran personnalisé sous forme d'image, ou le **Cadran des complications**. Voir [Changements des cadrans Wear OS](#wearos-watchface-changes) pour ce qui ne fonctionne plus selon la version de Wear OS, et [le cadran installé par AAPS](#wearos-aaps-v4-watchface) pour Wear OS 6.
```

Sur Wear OS 5 et plus ancien, plusieurs cadrans classiques sont intégrés à l'application **AAPS** de la montre. Ils affichent la glycémie avec le delta, l'IA, le débit basal actif et un graphique des valeurs. Deux appuis fonctionnent sur ces cadrans :

* Appuyez deux fois sur la glycémie pour ouvrir le menu principal d'**AAPS**
* Appuyez deux fois sur le graphique pour changer sa période de temps

Sur toutes les versions de Wear OS, les [complications](#Watchfaces-complications) et les [tuiles](#WearOsSmartwatch-wear-os-tiles) décrites sur cette page fonctionnent avec tout cadran qui a de la place pour elles.

## Configuration

Activez **Montre** dans [**Configuration** > **Communication**](#Config-Builder-wear).

Pour faire un bolus ou d'autres actions depuis la montre, activez **Contrôle Montre**. Les options de l'assistant bolus pour la montre se règlent au même endroit : voir [Paramètres > Montre](#preferences-wear). Tant que **Contrôle Montre** est désactivé, le téléphone refuse tout traitement ou changement de mode envoyé depuis la montre, et la montre affiche *« Le contrôle par la montre est désactivé dans les paramètres Montre du téléphone. »*

Avec **Ouvrir le plugin** sur la carte **Montre**, vous ouvrez l'écran Montre :

![Écran du plugin Montre](../images/screens/wear_plugin.png)

La ligne du haut affiche le nom de la montre connectée, ou **(Pas de montre connectée)**. Depuis cet écran, vous pouvez

* Renvoyer toutes les données. Cela peut être utile si la montre n'a pas été connectée pendant un certain temps et que vous voulez envoyer les informations à la montre.
* Ouvrez le menu Paramètres de votre montre directement depuis votre téléphone.
* Choisir le cadran qu'**AAPS** installe sur la montre (**Cadran installé sur la montre** : votre cadran personnalisé, ou le cadran des complications). Cette carte s'affiche seulement quand une montre avec **Wear OS 6** ou plus récent est connectée. Voir [le cadran installé par AAPS](#wearos-aaps-v4-watchface).
* Gérer le **Cadran personnalisé** (la carte s'affiche quand une montre est connectée) : **Charger le cadran** envoie un cadran personnalisé à la montre, **Infos Cadran** affiche les détails du cadran chargé et les champs qu'il contient, **Plus de cadrans** ouvre le [site d'échange](../ExchangeSiteCustomWatchfaces/index.md) dans votre navigateur, et **Exporter le modèle** enregistre un modèle que vous pouvez modifier. Un aperçu du cadran chargé s'affiche sous les boutons. Voir [Passer à un cadran AAPS](#WearOS_changing-to-AAPS-watchface).

Vérifiez que les notifications d'AAPS ne sont pas bloquées sur la montre. La confirmation de l'action (par ex. bolus, cible temporaire) est envoyée par une notification que vous devrez glisser et cocher.

## Accès au menu principal d'AAPS

![Menu principal d'AAPS sur la montre](../images/wearos/main_menu.png)

Pour ouvrir le menu principal d'**AAPS**, utilisez l'une de ces méthodes :

* ouvrez **AAPS** depuis la liste des applications de la montre
* appuyez sur une complication **AAPS** qui ouvre le menu, voir [Paramètres liés aux complications](#WearOsSmartwatch-complication-settings)
* appuyez sur la tuile **Graphique Glycémie** dont l'**Action du clic** est réglée sur **Menu principal**, voir [Paramètres des tuiles](#WearOsSmartwatch-wear-os-tiles)
* sur un cadran **AAPS** classique, appuyez deux fois sur la glycémie

(WearOsSmartwatch-loop-status)=

## Écran État de la boucle

L'écran **État de la boucle** résume ce que fait la boucle, sans sortir votre téléphone. Ouvrez-le depuis le menu principal d'AAPS (**État de la boucle**, ou **États → Boucle**), ou en appuyant sur la complication **Glycémie**. Le menu **États** a aussi une page **Pompe** et une page **DTQ** avec les doses totales quotidiennes.

![Menu États : Pompe, Boucle et DTQ](../images/wearos/status_menu.png)

![Écran État de la boucle](../images/wearos/loop_status.png)

L'écran est une liste de cartes. Faites défiler vers le bas pour toutes les voir :

* **Mode** — le mode actuel (boucle fermée, boucle ouverte, AGB, suspendue, déconnectée…) et, pour un mode temporaire, le temps qu'il lui reste.
* **Résultat de la boucle** — quand la boucle a tourné pour la dernière fois, et le débit basal temporaire ou le SMB qu'elle a demandé.
* **Scénario** — seulement quand un [scénario](#scenes-from-watch) est actif : son nom, le temps restant (ou **Jusqu'à l'arrêt** pour un scénario sans heure de fin) et le scénario de **Suivi** qui démarre quand il se termine.
* **Cibles** — votre cible, et la cible temporaire si une cible temporaire est en cours.
* **Profil** — le nom du profil actif, avec son **Pourcentage** et son **Décalage horaire** quand ils ne sont pas aux valeurs par défaut. Un changement de profil temporaire est mis en évidence et affiche le temps qu'il lui reste et le profil auquel il revient quand il se termine (**Retourner à**).
* **Sensibilité** — les mêmes lignes que la puce de sensibilité sur l'écran principal du téléphone : la valeur Autosens et la SI du profil, la SI variable et la SI effective.

Une petite icône de scénario à côté d'un mode, d'une cible temporaire ou d'un changement de profil signifie qu'il a été **défini par le scénario actif**. La même icône s'affiche dans le sélecteur de **Mode**.

![Carte Profil avec un changement de profil temporaire défini par un scénario](../images/wearos/loop_status_profile_scene.png)

(WearOsSmartwatch-bolus-calculator)=

## L'assistant bolus sur la montre

Ouvrez **Assistant** depuis le menu principal d'**AAPS**, depuis la [tuile Actions](#WearOsSmartwatch-wear-os-tiles) ou depuis une complication réglée pour ouvrir l'assistant. Il passe par quelques pages, balayez de droite à gauche pour continuer :

| Glucides                                                           | Requête                                                             | Résultat                                                            | Calcul                                                                          | Confirmer                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| ![Page Glucides](../images/wearos/calculator/calculator_carbs.png) | ![Page Requête](../images/wearos/calculator/calculator_request.png) | ![Page Résultat](../images/wearos/calculator/calculator_result.png) | ![Détails du calcul](../images/wearos/calculator/calculator_result_details.png) | ![Page Confirmer](../images/wearos/calculator/calculator_confirm.png) |

1. **Glucides** : saisissez les glucides avec les boutons **+10**, **+5**, **−** et **+**.
2. **Requête** : la dernière page avant que le téléphone prenne le relais. Elle affiche ce que vous avez saisi : les glucides, et le type de repas, l'heure des glucides et le pourcentage si vous les utilisez, voir [Pages optionnelles](#WearOsSmartwatch-calculator-optional-pages). Appuyez sur la coche pour l'envoyer au téléphone, qui fait le calcul.
3. **Résultat** : le bolus proposé par **AAPS**, avec les glucides en dessous : les glucides maintenant et les eGlucides plus tard, l'heure des glucides et la cloche du rappel de repas. Ajustez la dose avec **−** et **+**, voir ci-dessous. Faites défiler vers le bas jusqu'à la carte **Calcul** : appuyez dessus pour voir toutes les lignes du calcul, comme sur le téléphone.
4. **Confirmer** : balayez jusqu'à la deuxième page et appuyez sur la coche. Le téléphone délivre le bolus et enregistre les glucides.

(WearOsSmartwatch-calculator-optional-pages)=

### Pages optionnelles

Trois paramètres de la montre ajoutent chacun une page après **Glucides**. Ils sont désactivés par défaut. Ouvrez le menu principal d'**AAPS**, puis **Paramètres** > **Interface**, et activez ceux que vous voulez ; quand plusieurs sont activés, les pages viennent dans cet ordre : **Type de repas**, **Heure des glucides**, **Pourcentage**. Les points en bas de l'assistant indiquent combien de pages il a.

| Paramètres                                                                                      | Type de repas                                                               | Heure des glucides                                                               | Pourcentage                                                                |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| ![Paramètres de l'assistant sur la montre](../images/wearos/calculator/calculator_settings.png) | ![Page Type de repas](../images/wearos/calculator/calculator_meal_type.png) | ![Page Heure des glucides](../images/wearos/calculator/calculator_carb_time.png) | ![Page Pourcentage](../images/wearos/calculator/calculator_percentage.png) |

* **Calculatrice Type de repas** : **Pain**, **Gâteau** ou **Pizza**, qui répartit les glucides d'un repas lent entre glucides maintenant et eGlucides plus tard, voir [Choisir le type de repas](#WearOsSmartwatch-wizard-meal-type).
* **Heure des glucides de l'Assistant** : les minutes avant de manger, avec une cloche **Régler l'alarme** pour le rappel de repas, voir [L'heure des glucides et le rappel de repas](#WearOsSmartwatch-wizard-carb-time).
* **Pourcentage de l'Assistant** : un pourcentage du bolus calculé, par exemple 70 % quand vous voulez une dose plus petite. Il commence au **Pourcentage de Bolus** des [paramètres de l'assistant bolus](#Preferences-deliver-this-part-of-bolus-wizard-result) du téléphone, 100 % si vous ne l'avez pas changé. Voir aussi la remarque sous [Ajuster le bolus sur la page de résultat](#WearOsSmartwatch-wizard-result).

(WearOsSmartwatch-wizard-result)=

### Ajuster le bolus sur la page de résultat

La page de résultat affiche le bolus proposé par **AAPS**, avec un bouton **−** et un bouton **+**. Utilisez-les pour ajuster la dose avant de la confirmer, sans revenir au téléphone.

| Proposé                                                                         | Plus                                                                                 | Moins                                                                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| ![Le bolus proposé](../images/wearos/calculator/calculator_result_proposed.png) | ![Le bolus augmenté de 0,20 U](../images/wearos/calculator/calculator_result_up.png) | ![Le bolus diminué de 0,10 U](../images/wearos/calculator/calculator_result_down.png) |

* Chaque appui change le bolus d'**un pas de votre pompe**, donc les quantités proposées correspondent toujours à ce que votre pompe peut vraiment délivrer.
* **Maintenez appuyé** un bouton pour continuer à changer la valeur. Plus vous maintenez, plus ça va vite.
* Vous ne pouvez pas descendre sous **0 U**, ni dépasser votre réglage de **bolus max**.

Le total en cours s'affiche sur la page de résultat, vous voyez donc toujours la quantité que vous allez confirmer. La modification s'affiche après les glucides, par exemple *(+0,20 U)*, et le bouton utilisé devient vert pour plus ou rouge pour moins.

Si **AAPS** a dû limiter la dose, par exemple parce que le bolus calculé dépasse votre réglage de **bolus max**, une ligne d'avertissement orange sous le total l'indique (par exemple *« Contrainte de Bolus appliquée »*). Il en est de même pour une quantité de glucides limitée.

```{admonition} Ce n'est pas la même chose que Pourcentage de l'Assistant :class: note Le paramètre **Pourcentage de l'Assistant** vous permet de saisir un *pourcentage* du bolus calculé **avant** l'affichage de la page de résultat. Les boutons **−** et **+** ajustent la *quantité finale* **sur** la page de résultat. Vous pouvez utiliser les deux.

    <br />(WearOsSmartwatch-wizard-meal-type)=
    
    ### Choisir le type de repas
    
    L'assistant de la montre peut répartir les glucides d'un repas lent entre glucides maintenant et eGlucides plus tard, comme le [type de glucides](#AapsScreens-carbs-type) de l'assistant du téléphone. Activez **Calculatrice Type de repas** dans **Paramètres** > **Interface** de la montre. Ce paramètre est désactivé par défaut, et la page **Type de repas** est alors sautée.
    
    * Après la saisie des glucides, une page **Type de repas** affiche trois icônes : **Pain**, **Gâteau** et **Pizza**. Appuyez sur une icône : son nom et les glucides qu'elle donne s'affichent sous les icônes, par exemple *65 g* pour le pain, ou *52+22 g* pour la pizza (52 g maintenant et 22 g d'eGlucides plus tard). **Pain** est le choix par défaut et garde tous les glucides maintenant.
    * Les pages Requête et Confirmer affichent les glucides de la même façon (*52+22 g*). La page de résultat affiche aussi quand les eGlucides commencent et combien de temps ils durent.
    * Le bolus est calculé seulement pour les glucides mangés maintenant. La répartition utilise les mêmes valeurs que l'assistant du téléphone.
    
    (WearOsSmartwatch-wizard-carb-time)=
    
    ### L'heure des glucides et le rappel de repas
    
    Quand **Heure des glucides de l'Assistant** est activé dans **Paramètres** > **Interface** de la montre, une page **Heure des glucides** suit les glucides : les minutes avant de manger, comme l'[heure des glucides](#aaps-screens-bolus-wizard) de l'assistant du téléphone. **Maintenant** est la valeur par défaut. **−** et **+** la changent par pas de 5 minutes, jusqu'à une heure avant ou après maintenant. Une heure dans le passé sert pour des glucides que vous avez déjà mangés.
    
    Avec une heure dans le futur, une cloche **Régler l'alarme** apparaît sous la valeur. Elle est activée par défaut, appuyez dessus pour la désactiver. Les pages Requête et Résultat affichent l'heure des glucides, par exemple *+30 min*, et la cloche. Le téléphone enregistre les glucides à cette heure, décale avec eux les eGlucides du type de repas, et démarre son rappel **C'est l'heure de manger**.
    
    | Résultat | Graphique glycémie | En cours | Heure de manger |
    | --- | --- | --- | --- |
    | ![Page de résultat avec une heure des glucides](../images/wearos/calculator/calculator_result_carb_time.png) | ![Le rappel dans le graphique glycémie](../images/wearos/eat_reminder/eat_reminder_graph.png) | ![Le rappel en cours](../images/wearos/eat_reminder/eat_reminder_running.png) | ![Le rappel sonne](../images/wearos/eat_reminder/eat_reminder_ringing.png) |
    
    Le rappel existe aussi sur la montre, il sonne donc aussi quand le téléphone est hors de portée :
    
    * L'écran **Graphique Glycémie**, la tuile **Graphique Glycémie** et le graphique du **Cadran des complications** affichent une ligne orange en pointillés à l'heure où le rappel sonne, avec les minutes restantes à côté.
    * Pendant qu'il est en cours, une notification silencieuse **C'est l'heure de manger** avec **Arrêt** et **+5 min** reste dans la liste des notifications. Elle revient si vous la balayez, jusqu'à la fin du rappel.
    * Quand l'heure est venue, la montre vibre, puis de nouveau toutes les 30 secondes pendant cinq minutes jusqu'à ce que vous répondiez. La notification propose **Silence** et **+5 min**, et la balayer coupe aussi le rappel.
    
    **Arrêt**, **Silence** et **+5 min** font la même chose sur la montre, sur le téléphone et sur un **AAPSClient**, et tous affichent le même rappel.
    
    (Watchfaces-complications)=
    
    ## Complications
    
    Une _complication_ est un terme de l'horlogerie traditionnelle : c'est un ajout au cadran principal, comme une autre petite fenêtre ou un petit cadran (avec la date, le jour de la semaine, la phase de la lune, etc.). Wear OS 2.0 apporte cette métaphore pour permettre aux fournisseurs de données personnalisés, comme la météo, les notifications, compteurs de fitness et plus encore, d'ajouter ces informations à tous les cadrans qui supportent les complications.
    
    L'application AAPS pour Wear OS prend en charge les complications depuis la version `2.6`, et permet à tout cadran tiers qui prend en charge les complications d'afficher les données d'AAPS (glycémie avec la tendance, IA, GA, etc.).
    
    Les complications servent aussi de **raccourci** vers les fonctions d'AAPS. En appuyant dessus, vous pouvez ouvrir les menus et dialogues de AAPS (selon la complication et la configuration).
    
    ![Le Cadran des complications, chaque emplacement rempli avec une complication AAPS](../images/wearos/complications_on_watchface.png)
    
    ### Types de complications
    
    L'application AAPS pour Wear OS fournit seulement des données brutes, selon des formats prédéfinis. Il revient au cadran récepteur de décider où et comment mettre en forme les complications, y compris sa mise en page, sa bordure, sa couleur et sa police. Parmi les nombreux types de complications Wear OS disponibles, AAPS utilise :
    
    * `SHORT TEXT` - Contient deux lignes de texte de 7 caractères chacune, parfois appelées valeur et étiquette. Il est généralement affiché à l'intérieur d'un cercle ou d'une petite pilule - l'un au-dessous de l'autre, ou côte à côte. C'est une complication très compacte. AAPS essaye de supprimer les caractères inutiles pour l'ajuster : en arrondissant les valeurs, en supprimant les zéros de début et de fin des valeurs, etc.
    * `LONG TEXT` - Contient deux lignes de texte d'environ 20 caractères chacune. Il est généralement affiché à l'intérieur d'un rectangle ou d'une longue pilule, l'un en dessous de l'autre. Il est utilisé pour plus de détails et des statuts textuels.
    * `RANGED VALUE` - Utilisé pour des valeurs dans une plage prédéfinie, comme un pourcentage. Il contient une icône, une étiquette et est généralement rendu en tant que cadran de progression circulaire.
    * `LARGE IMAGE` - Image de fond personnalisée qui peut être utilisée comme arrière-plan (si le cadran le permet).
    * `SMALL IMAGE` / `MONOCHROMATIC IMAGE` - Une petite icône. Dans un emplacement `SMALL IMAGE`, AAPS la dessine avec ses propres couleurs ; dans un emplacement `MONOCHROMATIC IMAGE`, c'est le cadran qui la colore.
    
    ### Configuration des complications
    
    Pour ajouter une complication au cadran, configurez-le par un appui long, puis appuyez sur l'icône d'engrenage en dessous. Selon la façon dont s'effectue le paramétrage du cadran - soit cliquez sur les espaces réservés, soit entrez dans le menu de paramétrage des complications du cadran. Les complications de AAPS sont regroupées dans le sous-menu AAPS.
    
    Quand vous configurez les complications dans un cadran, Wear OS présente et filtre la liste des complications qui sont adaptées à la zone sélectionnée dans le cadran. Si certaines complications ne sont pas dans la liste, c'est probablement parce qu'elle ne peut pas être utilisée à cet endroit.
    
    ### Complications fournies par AAPS
    
    AAPS fournit les complications ci-dessous. « Ouvre » indique ce que fait un appui quand **Action Appui Complication** est laissé sur **Défaut**, voir [Paramètres liés aux complications](#WearOsSmartwatch-complication-settings).
    
    **Glycémie**
    
    * **Glycémie** (`SHORT TEXT`, ouvre _État de la boucle_) : la glycémie avec la flèche de tendance sur la première ligne, l'âge de la valeur et le delta sur la deuxième.
    * **Glycémie (grande)** (`SHORT TEXT`, ouvre _Graphique Glycémie_) : la glycémie seule sur la première ligne, pour que le cadran puisse l'afficher en grand. L'âge et la flèche de tendance sont sur la deuxième ligne.
    * **Graphique Gly** (`SMALL IMAGE` / `LARGE IMAGE`, ouvre _Graphique Glycémie_) : le graphique glycémie sous forme d'image, pour les cadrans avec un emplacement d'image. C'est le graphique du **Cadran des complications**.
    * **État complet** (`LONG TEXT`, ouvre _Menu_) : la plupart des données sur une ligne : la glycémie avec la flèche de tendance, le delta et l'âge de la valeur, puis les glucides actifs, l'insuline active et le débit basal.
    * **État complet (transposé)** (`LONG TEXT`, ouvre _Menu_) : la même chose, avec les deux lignes inversées, pour les cadrans qui affichent seulement une des deux lignes d'un emplacement `LONG TEXT`.
    
    **Insuline et glucides**
    
    * **Icône IA** (`SHORT TEXT`, ouvre _Bolus_) : l'insuline active avec une icône de seringue.
    * **IA détaillée** (`SHORT TEXT`, ouvre _Bolus_) : l'insuline active totale sur la première ligne, les parts bolus et basal sur la deuxième.
    * **Icône GA** (`SHORT TEXT`, ouvre _Assistant_) : les glucides actifs avec une icône de glucides.
    * **GA détaillés** (`SHORT TEXT`, ouvre _Assistant_) : les glucides actifs maintenant sur la première ligne, les glucides encore à venir (eGlucides) sur la deuxième.
    * **GA & IA** (`SHORT TEXT`, ouvre _Assistant_) : l'insuline active sur la première ligne, les glucides actifs sur la deuxième.
    
    **Basal et cible**
    
    * **Débit Basal** (`SHORT TEXT`, ouvre _Menu_) : le débit basal actuel.
    * **Basal & IA** (`SHORT TEXT`, ouvre _Menu_) : l'insuline active sur la première ligne, le débit basal sur la deuxième.
    * **DB & Cible** (`SHORT TEXT`, ouvre _Cible Temp_) : la cible sur la première ligne, avec le temps restant quand une cible temporaire est en cours, et le débit basal sur la deuxième.
    * **Cible** (`SHORT TEXT`, ouvre _Cible Temp_) : la cible sur la première ligne et, pendant une cible temporaire, son temps restant sur la deuxième.
    * **DB, GA & IA** (`SHORT TEXT`, ouvre _Menu_) : le débit basal sur la première ligne, les glucides actifs et l'insuline active sur la deuxième.
    
    **Boucle et téléphone**
    
    * **Mode** (`SMALL IMAGE` / `ICON`, ouvre _le sélecteur de mode_) : le mode actuel de la boucle sous forme d'icône : boucle fermée, boucle ouverte, arrêt glycémie basse, suspendue, déconnectée ou désactivée. Un appui ouvre un sélecteur avec les changements de mode autorisés à ce moment, par exemple **Suspendre la boucle**, **Déconnecter la pompe**, **Reprendre la boucle** ou **Reconnecter la pompe**. Le même sélecteur se trouve dans le menu principal d'**AAPS** sous **Mode**.
    * **Batterie téléphone** (`RANGED VALUE` / `SHORT TEXT` / `ICON`, ouvre _États_) : la batterie du téléphone **AAPS**, sous forme de jauge avec une icône de batterie, de nombre, ou d'icône seule. Elle se met à jour avec les autres données d'**AAPS**, en général toutes les 5 minutes avec une nouvelle valeur.
    
    Le sélecteur de **Mode**, ouvert depuis la complication, le menu principal ou la tuile Mode :
    
    ![Sélecteur de mode avec les modes vers lesquels vous pouvez passer](../images/wearos/running_mode_picker.png)
    
    (WearOsSmartwatch-complication-settings)=
    
    ### Paramètres liés aux complications
    
    Dans le menu principal d'**AAPS** sur la montre, ouvrez **Paramètres** > **Complication** :
    
    ![Paramètres > Complication sur la montre](../images/wearos/settings_complication.png)
    
    * **Action Appui Complication** (par défaut `Défaut`) : ce qu'ouvre un appui sur une complication **AAPS**, pour toutes les complications à la fois :
      * _Défaut_ : ce qu'ouvre la complication elle-même, voir la liste ci-dessus
      * _Menu_ : le menu principal d'**AAPS**
      * _Assistant_ : l'assistant bolus
      * _Traitement_ : la boîte de dialogue de traitement, insuline et glucides
      * _eGlucides_ : la boîte de dialogue eGlucides
      * _États_ : le menu États
      * _Mode_ : le sélecteur de mode. Nécessite que **Contrôle Montre** soit activé dans les paramètres Montre du téléphone, sinon c'est le menu principal qui s'ouvre.
      * _Aucun_ : un appui ne fait rien
    * **Intervalle de temps du graphique glycémie** (par défaut `3 heures`) : combien d'heures affiche la complication **Graphique Gly** : 1, 3 ou 6. La tuile Graphique Glycémie a son propre paramètre.
    * **Unicode dans Complications** (par défaut `On`) : les complications utilisent des symboles Unicode comme `Δ` pour le delta, `⁞` comme séparateur et `⎍` pour le débit basal. Leur aspect dépend de la police du cadran. Mettez ce paramètre sur `Off` quand un cadran les affiche comme des carrés ou des blancs.
    
    (WearOsSmartwatch-wear-os-tiles)=
    
    ## Tuiles Wear OS
    
    Les tuiles sont les pages que vous atteignez en balayant depuis le cadran. **AAPS** en fournit sept, chacune avec un ensemble de quatre boutons au maximum. Un appui sur un bouton ouvre la boîte de dialogue correspondante sur la montre, ou vous demande de confirmer, puis le téléphone fait le travail. Une tuile est un raccourci, pas un affichage d'état : elle ne contient pas l'état de l'application du téléphone.
    
    Avant d'utiliser les tuiles, activez **Contrôle Montre** dans [Paramètres > Montre](#preferences-wear).
    
    ### Ajouter une tuile
    
    Il y a deux façons de faire, selon votre montre et votre téléphone :
    
    1. Sur la montre : balayez depuis le cadran au-delà de la dernière tuile jusqu'à **Ajouter une tuile** et choisissez une tuile **AAPS**. Sur la plupart des montres, un appui long sur une tuile ouvre aussi la vue pour ajouter et retirer des tuiles.
    2. Sur le téléphone, dans l'application compagnon de votre montre (**Galaxy Wearable** pour Samsung, **Wear OS** pour les autres marques) : ouvrez **Tuiles**, appuyez sur **Ajouter** et choisissez les tuiles **AAPS** que vous voulez. Vous pouvez changer l'ordre des tuiles en les faisant glisser.
    
    ![Les sept tuiles AAPS dans l'application compagnon](../images/wearos/tiles/tiles_list_companion_app.png)
    
    ### Paramètres des tuiles
    
    Les tuiles **Actions**, **Cible Temp**, **Graphique Glycémie** et **Scénario** ont des paramètres sur la montre. Ouvrez le menu principal d'**AAPS**, puis **Paramètres** > **Tuiles**, et choisissez la tuile. Un appui long sur la tuile ouvre aussi ses paramètres, sauf sur les montres Pixel. Les trois autres tuiles sont remplies depuis le téléphone et n'ont rien à régler sur la montre.
    
    | Menu principal | Paramètres | Tuiles |
    | --- | --- | --- |
    | ![Menu principal d'AAPS, Paramètres](../images/wearos/tiles/tile_settings_menu.png) | ![Paramètres, Tuiles](../images/wearos/tiles/tile_settings_settings.png) | ![Tuiles, choisir la tuile](../images/wearos/tiles/tile_settings_tiles.png) |
    
    Les paramètres d'une tuile sont une liste de ses quatre emplacements. Appuyez sur un emplacement pour choisir ce qu'il affiche, ou **Aucun** pour le laisser vide.
    
    | Appui long sur la tuile | Paramètres de la tuile Cible Temp |
    | --- | --- |
    | ![Appui long sur une tuile, appuyez sur le crayon](../images/wearos/tiles/tile_settings_long_press.png) | ![Paramètres de la tuile Cible Temp, une entrée par emplacement](../images/wearos/tiles/tile_settings_temp_target.png) |
    
    Chaque tuile a quatre emplacements. Une tuile avec plus d'entrées affiche les quatre premières.
    
    ### Tuile Actions
    
    ![Tuile Actions](../images/wearos/tiles/tile_actions.png)
    
    Des raccourcis vers les boîtes de dialogue de l'application **AAPS** de la montre. Choisissez-en jusqu'à quatre dans les paramètres de la tuile :
    
    * **Assist.** : l'assistant bolus, avec une saisie des glucides, un pourcentage optionnel [1] et un type de repas optionnel [2]
    * **Trait.** : insuline et glucides en une seule fois
    * **Insuline** : un bolus, saisi en unités
    * **Glucides** : des glucides, aussi des glucides étendus. Une quantité **négative** est acceptée, jusqu'à vos GA actuels, pour corriger des glucides saisis plus tôt. Les glucides retirés s'affichent sur le graphique glycémie de la montre.
    * **eGlucides** : des glucides étendus
    * **Cible Temp** : une cible temporaire avec une cible et une durée personnalisées
    * **Changement de profil** : un changement de profil avec pourcentage, décalage horaire et durée
    
    ![Paramètres de la tuile Actions : une entrée par emplacement](../images/wearos/tiles/tile_settings_actions.png)
    
    Les boîtes de dialogue ouvertes par les boutons. Balayez de droite à gauche pour atteindre la page suivante d'une boîte de dialogue, et appuyez sur la coche sur la dernière page pour envoyer la demande au téléphone :
    
    | Trait. | Insuline | Glucides | eGlucides | Cible Temp | Changement de profil |
    | --- | --- | --- | --- | --- | --- |
    | ![Boîte de dialogue Traitement, page insuline](../images/wearos/dialogs/dialog_treatment.png) | ![Boîte de dialogue Insuline](../images/wearos/dialogs/dialog_insulin.png) | ![Boîte de dialogue Glucides](../images/wearos/dialogs/dialog_carbs.png) | ![Boîte de dialogue eGlucides](../images/wearos/dialogs/dialog_ecarbs.png) | ![Boîte de dialogue Cible Temp, page durée](../images/wearos/dialogs/dialog_temp_target.png) | ![Boîte de dialogue Changement de profil](../images/wearos/dialogs/dialog_profile_switch.png) |
    
    [1] Dans **Paramètres** > **Interface** de la montre, activez **Pourcentage de l'Assistant** pour afficher la saisie du pourcentage dans l'assistant bolus. Le pourcentage par défaut vient du paramètre du téléphone [« Appliquer cette partie du résultat de l'assistant bolus en % »](#Preferences-deliver-this-part-of-bolus-wizard-result). Les autres paramètres de l'assistant sont ceux du téléphone sous **Paramètres** > **Paramètres de l'assistant bolus**.
    
    [2] Dans **Paramètres** > **Interface** de la montre, activez **Calculatrice Type de repas** pour afficher la page **Type de repas**, où vous choisissez **Pain**, **Gâteau** ou **Pizza** pour répartir les glucides d'un repas lent entre glucides maintenant et eGlucides plus tard. Voir [Choisir le type de repas](#WearOsSmartwatch-wizard-meal-type).
    
    ### Tuile Cible Temp
    
    ![Tuile Cible Temp](../images/wearos/tiles/tile_temp_target.png)
    
    Les cibles temporaires prédéfinies du téléphone. Réglez la durée et la cible de chaque cible prédéfinie sur le téléphone sous **Paramètres** > [Cibles temporaires par défaut](#Preferences-default-temp-targets). Choisissez-en jusqu'à quatre dans les paramètres de la tuile :
    
    * **Activité** : pour le sport
    * **Repas** : repas bientôt, une cible plus basse pour avoir plus d'insuline active au moment du repas
    * **Hypo** : une cible plus haute pendant le traitement d'une hypoglycémie
    * **Manuel** : une cible et une durée personnalisées
    * **Annuler** : arrête la cible temporaire en cours. Le bouton s'affiche seulement quand une cible temporaire est en cours.
    
    ### Tuile Assistant rapide
    
    ![Tuile Assistant rapide](../images/wearos/tiles/tile_quick_wizard.png)
    
    Les entrées [Assistant Rapide](#quickwizards) du téléphone pour lesquelles **Afficher sur la montre** est activé, pendant leurs heures de validité. Une entrée de glucides affiche ses glucides en g, une entrée d'insuline sa dose fixe en U. Un appui lance l'entrée après une confirmation sur la montre. Il n'y a rien à régler sur la montre : modifiez les entrées sur le téléphone, et activez **Afficher sur la montre** sous **Sélection du périphérique** pour chaque entrée que vous voulez sur la tuile. En dehors des heures de validité de toutes vos entrées, la tuile affiche **Aucune configuration disponible**.
    
    ![Une entrée Assistant Rapide avec Afficher sur la montre activé, et la tuile où elle apparaît](../images/quickwizard_watch_phone.png)
    
    ### Tuile Scénario
    
    ![Tuile Scénario](../images/wearos/tiles/tile_scene.png)
    
    Les [scénarios](#scenes-from-watch) du téléphone. Chacun des quatre emplacements est réglé sur **Automatique**, **Aucun** ou un scénario dans les paramètres de la tuile. Un emplacement **Automatique** prend le scénario suivant de la liste du téléphone qui n'est pas déjà pris par un autre emplacement. Un emplacement réglé sur un scénario qui n'existe plus sur le téléphone affiche **Indisponible**.
    
    ![Paramètres de la tuile Scénario, quatre emplacements réglés sur Automatique](../images/wearos/tiles/tile_settings_scene.png)
    
    ### Tuile Mode
    
    ![Tuile Mode](../images/wearos/tiles/tile_running_mode.png)
    
    Les [modes](#aaps-screens-running-mode) vers lesquels vous pouvez passer depuis le mode actuel, avec les mêmes icônes que sur le téléphone : boucle fermée, arrêt glycémie basse, boucle ouverte, désactiver la boucle, suspendre la boucle et déconnecter la pompe, ou reprendre et reconnecter pendant que l'un de ces modes est en cours. **Suspendre la boucle** et **Déconnecter la pompe** demandent d'abord une durée. Le téléphone décide quels modes sont proposés, la montre affiche les quatre premiers et laisse de côté **Désactiver la Boucle** quand **Suspendre la boucle** est dans la liste.
    
    ### Tuile Action Utilisateur
    
    ![Tuile Action Utilisateur](../images/wearos/tiles/tile_user_action.png)
    
    Un bouton pour chaque [automatisation](#automations-automation-triggers) du téléphone dont le déclencheur est **Actions utilisateur**. Un appui vous demande de confirmer, puis le téléphone exécute les actions de l'automatisation. Les boutons portent le nom des automatisations, donc donnez-leur des noms courts. Il n'y a rien à régler sur la montre.
    
    ### Tuile Graphique Glycémie
    
    ![Tuile Graphique Glycémie](../images/wearos/tiles/tile_bg_graph.png)
    
    La glycémie avec la flèche, le delta et l'âge, en dessous l'IA, les GA, le débit basal et la cible, et le graphique glycémie avec les prédictions, les bolus, les glucides et les SMB. Deux paramètres sur la montre : **Période de temps** (1, 3 ou 6 heures) et **Action du clic**, qui ouvre l'écran **Graphique Glycémie** complet, le **Menu principal** ou l'écran **Statut de la boucle**.
    
    ![L'écran Graphique Glycémie](../images/wearos/bg_graph.png)
    
    ![Paramètres de la tuile Graphique Glycémie : Période de temps et Action du clic](../images/wearos/tiles/tile_settings_bg_graph.png)
    
    ## Toujours allumé
    
    Cette section et la suivante concernent les cadrans **AAPS** classiques sur Wear OS 5 et plus ancien. Sur Wear OS 6, le **Cadran des complications** a son propre affichage toujours allumé, voir [le cadran installé par AAPS](#wearos-aaps-v4-watchface).
    
    L'autonomie de la batterie des montres Android Wear OS est un défi. Certaines montres tiennent jusqu'à 30 heures avant de devoir être rechargées. L'écran doit être éteint pour avoir une économie d'énergie optimale lorsqu'il n'est pas utilisé. La plupart des montres prennent en charge l'affichage « toujours allumé » (Always on).
    
    Depuis la version 3 d'AAPS, vous pouvez utiliser « Interface simplifiée » en mode toujours allumé. Cette interface ne contient que la glycémie, la direction et l'heure. Cette interface est optimisée pour économiser l'énergie : elle se met à jour moins souvent, affiche moins d'informations et allume moins de pixels pour économiser la batterie sur les écrans OLED.
    
    Le mode interface simplifiée est disponible pour les cadrans Digital Style et Custom (personnalisé). L'interface simplifiée est optionnelle et se configure dans les paramètres du cadran (appui long sur le cadran, puis « modifier » ou l'icône d'engrenage). Choisissez le paramètre « Interface simplifiée » et réglez-le sur « Toujours allumé » ou « Toujours allumé et pendant la charge ».
    
    ### Mode nuit
    
    Pendant la charge, il serait utile que l'écran reste « toujours allumé » et affiche votre glycémie pendant la nuit. Cependant, les cadrans standards sont trop lumineux et ont trop d'informations, et les détails sont difficiles à lire avec des yeux endormis. C'est pourquoi nous avons ajouté une option qui simplifie l'interface du cadran seulement pendant la charge, si elle est activée dans la configuration.
    
    Le mode interface simplifiée est disponible pour les cadrans Digital Style et Custom (personnalisé). L'interface simplifiée est optionnelle et se configure dans les paramètres du cadran (appui long sur le cadran, puis « modifier » ou l'icône d'engrenage). Choisissez le paramètre « Interface simplifiée » et réglez-le sur « Pendant la charge » ou « Toujours allumé et pendant la charge ».
    
    Les options pour les développeurs d'Android permettent à votre montre de rester allumée pendant la charge. Pour rendre les options pour les développeurs disponibles, voir la [documentation officielle](https://developer.android.com/training/wearables/get-started/debugging). Dans les options pour les développeurs, activez « Stay awake when charging » (rester allumé pendant la charge).
    
    Remarque : tous les écrans ne supportent pas bien le mode toujours allumé. Cela peut marquer l'écran de façon permanente (burn-in), en particulier sur les anciens écrans OLED. Les montres baissent généralement la luminosité de l'écran pour éviter ce marquage ; consultez le manuel de votre montre, le fabricant ou Internet pour obtenir des conseils.
    
    ![Cadran mode table de nuit](../images/Watchface_nightstand.jpg)
    
    ![Interface simplifiée](../images/Watchface_simplified_ui.png)
    
    (WearOsSmartwatch-phone-alarms)=
    
    ## Alarmes du téléphone sur la montre
    
    ![Une alarme du téléphone sur la montre](../images/wearos/alarm/phone_alarm_ringing.png)
    
    La montre affiche les alarmes du téléphone : vous voyez pourquoi le téléphone sonne et vous pouvez répondre depuis votre poignet. La montre vibre, puis de nouveau toutes les 30 secondes pendant cinq minutes jusqu'à ce que vous répondiez. Une notification affiche le titre et le texte de l'alarme, avec les mêmes réponses que le rappel [C'est l'heure de manger](#WearOsSmartwatch-wizard-carb-time) :
    
    * **Silence**, ou un balayage : l'alarme s'arrête, et l'écran d'alarme du téléphone se ferme.
    * **Muet 5 min** : l'alarme s'arrête et sonne de nouveau après cinq minutes, sur le téléphone et sur la montre.
    
    Deux types d'alarmes arrivent sur la montre :
    
    * L'écran d'alarme du téléphone (erreurs de pompe, alarmes d'automatisation, alarmes de glycémie) : **Silence** et **Muet 5 min**.
    * Les notifications urgentes avec un son, comme *Pompe hors de portée* ou une alarme Nightscout : **Silence** seulement. Le téléphone propose seulement **Fermer** pour celles-ci, et elles reviennent d'elles-mêmes tant que leur cause est présente.
    
    Le rappel *C'est l'heure de manger* n'est pas envoyé de cette façon : la montre le fait sonner elle-même.
    
    ## Raccourci de mise en veille des alertes
    
    La montre [affiche l'alarme](#WearOsSmartwatch-phone-alarms) elle-même ; le raccourci est une deuxième façon de la couper, avec un seul appui. Il est possible de créer un raccourci pour mettre en veille les alertes et alarmes d'AAPS. Couper le son depuis votre montre est pratique et plus rapide que de prendre votre téléphone. Remarque : vous devez quand même lire le message d'alarme sur votre téléphone et agir en conséquence, mais vous pouvez le faire plus tard. Quand votre montre a deux boutons, vous pouvez attribuer un bouton au programme `AAPS Mettre en veille l'alerte`.
    
    Pour lier le bouton sur la Samsung Watch 4, allez dans `Settings > Advanced Features > Customize Buttons > Double press > AAPS Snooze Alert`
    
    Sur un cadran avec des complications, une complication **Raccourci d'application** réglée sur **AAPS Mettre en veille l'alerte** fait la même chose avec un appui. La [configuration alternative du Cadran des complications](#wearos-complications-watchface-setup) utilise son emplacement en haut à droite pour cela.
    
    ### Mettre en veille xDrip
    
    Si vous utilisez xDrip et que xDrip est installé sur la montre, le raccourci « AAPS Mettre en veille l'alerte » met aussi en veille toutes les alarmes xDrip. 
    
    
    ## Conseils pour les performances et l'autonomie de la batterie
    
    Les montres Wear OS sont des appareils avec très peu d'énergie disponible. La taille de la montre limite la capacité de la batterie incluse. Même avec les progrès récents tant du côté matériel que du côté logiciel, les montres Wear OS nécessitent toujours une charge quotidienne.
    
    Si l'autonomie constatée est plus courte qu'une journée (du matin au soir), voici quelques conseils pour trouver la cause.
    
    Les principales sources de consommation de la batterie sont :
    
    * L'écran actif avec rétroéclairage allumé (pour LED) ou en mode pleine intensité (pour OLED)
    * L'affichage à l'écran
    * La communication radio par Bluetooth
    
    Comme nous ne pouvons pas faire de compromis sur la communication (nous avons besoin de données à jour) et que nous voulons afficher les données les plus récentes, la plupart des optimisations peuvent se faire sur le _temps d'affichage_ :
    
    * Les cadrans d'origine sont généralement mieux optimisés que les cadrans personnalisés téléchargés depuis la boutique.
    * Il est préférable d'utiliser des cadrans qui limitent la quantité de données affichées en mode inactif/veille.
    * Faites attention si vous combinez d'autres complications, comme des widgets météo tiers ou autres, qui utilisent des données de sources externes.
    * Commencez par des cadrans plus simples. Ajoutez une complication à la fois et observez comment elle affecte la durée de vie de la batterie.
    * Utilisez un thème sombre sur le cadran. Sur les écrans OLED, moins de pixels allumés signifie moins d'énergie consommée et moins de marquage de l'écran.
    * Vérifiez ce qui fonctionne le mieux sur votre montre : les cadrans AAPS standards ou d'autres cadrans avec les Complications AAPS.
    * Observez sur quelques jours, avec différents profils d'activités. La plupart des montres allument l'écran quand vous la regardez, quand vous bougez le poignet et lors d'autres actions liées à l'utilisation.
    * Vérifiez les paramètres généraux du système qui ont un effet sur les performances : notifications, délai du rétroéclairage / de l'écran actif, moments où le GPS est activé.
    * Consultez la [liste des téléphones et montres testés](#Phones-list-of-tested-phones) et [demandez à la communauté](../GettingHelp/WhereCanIGetHelp.md) l'expérience des autres utilisateurs et l'autonomie de batterie qu'ils constatent.
    * **Nous ne pouvons pas garantir que les données affichées sur le cadran ou la complication sont à jour**. Au final, c'est Wear OS qui décide quand mettre à jour un cadran ou une complication. Même lorsque l'application AAPS demande une mise à jour, le système peut décider de reporter ou d'ignorer les mises à jour pour préserver la batterie. En cas de doute et si la batterie de la montre est faible, vérifiez toujours dans l'application AAPS principale sur le téléphone.
    
    (Watchfaces-troubleshooting-the-wear-app)=
    
    ## Dépannage de l'application de la montre
    
    Si la montre n'affiche pas de données ou affiche des données anciennes, vérifiez d'abord la connexion entre la montre et le téléphone, voir [Dépannage de la communication entre la montre AAPS et le téléphone AAPS](#wear-os-watch-phone-communication). Pour une montre sous Wear OS 5, voir aussi les [recommandations générales de dépannage pour Wear OS 5](#wear-os-5-troubleshooting). Une complication qui ne se met pas à jour a les mêmes causes qu'une tuile ou un cadran qui ne se met pas à jour, vérifiez donc d'abord ceux-ci.
    
    ## D'autres cadrans AAPS personnalisés sont aussi disponibles
    
    [Ici](../ExchangeSiteCustomWatchfaces/index.md), vous pouvez télécharger des fichiers Zip avec des cadrans personnalisés faits par d'autres utilisateurs.
    
    ## Créer votre propre cadran
    
    Si vous voulez créer votre propre cadran, suivez le [guide ici](../ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md).
    
    Quand vous avez créé un cadran personnalisé, vous pouvez partager votre cadran personnalisé **AAPS** avec d'autres : le fichier zip peut être envoyé dans le dossier "ExchangeSiteCustomWatchfaces" par une Pull Request sur GitHub. Lors de la fusion de la Pull Request, l'équipe de documentation extraira le fichier CustomWatchface.png et ajoutera au début de son nom le nom du fichier Zip.
    
    (WearOsSmartwatch-complications-watchface-download)=
    
    ## Créer votre propre version du Cadran des complications
    
    Le **Cadran des complications** qu'**AAPS** installe sur Wear OS 6 (voir [le cadran installé par AAPS](#wearos-aaps-v4-watchface)) est fait avec **Watch Face Studio** de Samsung. Son fichier de projet est téléchargeable gratuitement : vous pouvez donc le modifier à votre goût, ou l'utiliser sur une montre avec Wear OS 5 ou plus ancien, où **AAPS** ne l'installe pas :
    
    [Cadran des complications (AAPS V4), zip](https://github.com/openaps/AndroidAPSdocs/raw/refs/heads/master/docs/_static/wearos/Complications_watchface_AAPS_V4.zip)
    
    Le zip contient quatre fichiers :
    
    * `AAPS V4_0_2.wfs` : le projet. Ouvrez-le dans [Watch Face Studio](https://developer.samsung.com/watch-face-studio/download.html), modifiez ce que vous voulez, et installez-le sur la montre depuis cet outil.
    * `com.watchfacestudio.aapsv4.apk` : le cadran tel quel, prêt à installer avec [adb](https://developer.android.com/tools/releases/platform-tools) : `adb install com.watchfacestudio.aapsv4.apk` avec la montre connectée en débogage ADB.
    * `README.txt` : les deux configurations de complications recommandées, les mêmes que sur la [page Wear OS](#wearos-complications-watchface-setup).
    * `AAPS V4.png` : un aperçu.
    
    ```{admonition} Ce n'est pas un cadran personnalisé
    :class: note
    Le zip n'est pas un cadran personnalisé pour **Charger le cadran** dans le plugin **Montre**, et le téléphone ne peut pas l'installer. Il doit être décompressé et installé sur la montre avec Watch Face Studio ou adb, comme ci-dessus.