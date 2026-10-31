(quicklaunch)=
# QuickLaunch (lancement rapide)

**QuickLaunch** est la petite **barre d'actions rapides** qui flotte en bas de l'écran principal d'**AAPS**, juste au-dessus de la barre de navigation du bas. C'est une rangée personnalisable de boutons en un seul appui : vous choisissez les actions qui y figurent et leur ordre, pour que ce que vous faites le plus souvent soit toujours à un appui sur l'écran principal.

```{contents} Table of contents
:depth: 2
:local: true
```

![La barre QuickLaunch sur l'écran principal](../images/v4/QuickLaunch/quicklaunch_toolbar.png)

---

## Utiliser la barre

La barre se trouve sur l'**écran principal**, entre les graphiques et la barre de navigation du bas :

![La barre QuickLaunch à sa place sur l'écran principal](../images/v4/QuickLaunch/quicklaunch_overview.png)

- **Appuyez** sur une icône pour lancer son action — exactement comme si vous l'aviez ouverte depuis son écran habituel (un bolus ou un traitement affiche toujours d'abord sa confirmation habituelle).
- **Appuyez longuement** sur une icône pour voir une **info-bulle** avec le nom de l'action et une courte description.
- Si vous ajoutez **plus de boutons que l'écran ne peut en afficher**, les boutons en trop passent dans un **menu de débordement** (le bouton **⋮** à la fin de la barre).
- Chaque icône garde la **couleur** de son action (par ex. insuline, glucides, cible temporaire), pour être reconnue d'un coup d'œil.

```{admonition} The toolbar is always there
:class: note
Le dernier bouton est toujours **Configurer le lancement rapide** (la roue dentée **⚙️**). Il ne peut pas être retiré : vous pouvez donc toujours atteindre l'écran de configuration directement depuis la barre. Par défaut, la barre ne contient que deux boutons — l'**Assistant Bolus** et cette roue dentée.
```

---

## Configurer QuickLaunch

Appuyez sur la roue dentée **⚙️** de la barre (ou ouvrez **[Configuration](../SettingUpAaps/ConfigBuilder.md) → … → Configurer le lancement rapide**) pour ouvrir l'écran **Configurer le lancement rapide** (*« Personnaliser les boutons d'action rapide sur l'aperçu »*).

![Configurer le lancement rapide — Actions sélectionnées, puis le catalogue des actions à ajouter](../images/v4/QuickLaunch/quicklaunch_config.png)

L'écran a deux parties :

- **Actions sélectionnées** (en haut) — les boutons qui sont sur votre barre, dans l'ordre de la barre.
- Un **catalogue** en dessous — toutes les actions que vous pouvez ajouter, groupées par catégorie. Chaque entrée du catalogue a un bouton **➕** pour l'ajouter.

### Actions sélectionnées — réordonner, modifier, retirer

Chaque action sélectionnée a :

- une **poignée ⠿** — appuyez et faites glisser pour **réordonner** les boutons (l'ordre ici est l'ordre de la barre),
- un bouton **−** — pour la **retirer** de la barre,
- et, seulement pour un raccourci de **Profil**, un bouton **✏️** pour modifier son pourcentage et sa durée (voir [Raccourcis de profil](#profile-shortcuts)).

Les modifications s'appliquent **tout de suite** — il n'y a pas de bouton *Enregistrer* séparé. Une action ajoutée se place à la fin de la barre ; réordonnez-la ensuite.

---

## Les catégories d'actions

Le catalogue groupe tout ce que vous pouvez ajouter dans les catégories suivantes, dans cet ordre. Les catégories qui n'ont rien à proposer (par ex. si vous n'avez aucun scénario) ne sont simplement pas affichées.

### Traitement

Les boîtes de dialogue de traitement et de MGC de tous les jours :

- **Insuline** — faire un bolus manuellement.
- **Glucides** — enregistrer des glucides sans insuline.
- **Assistant Bolus** — ouvrir le calculateur de bolus.
- **Traitement** — enregistrer de l'insuline et des glucides en même temps.
- **MGC** — ouvrir votre application MGC (par ex. xDrip).
- **Étalonnage** — étalonner le capteur MGC.

### Careportal

Les événements Careportal et l'enregistrement de l'entretien du matériel :

- **Contrôle Glycémie**, **Remarque**, **Activité Physique**, **Question**, **Notification**,
- **Insertion Capteur**, **Changement pile pompe**, **Changement de site**, **Amorcer/Remplir**, **Rotation du site**.

**Amorcer/Remplir** et **Changement pile pompe** ne sont proposés que si votre pompe les utilise. Par exemple, les pompes patch se remplissent et changent de pile dans leurs propres étapes d'activation : ces entrées ne sont donc pas affichées pour elles (comme dans le panneau **Gestion**).

![La catégorie Careportal dans le catalogue](../images/v4/QuickLaunch/quicklaunch_categories_2.png)

Ce sont les mêmes entrées que celles des panneaux **[Traitements](#v4changes-treatments)** et **[Gestion](#v4changes-manage)** — QuickLaunch place simplement celles que vous utilisez sur l'écran principal.

### Gestion

Les écrans du panneau **[Gestion](#v4changes-manage)**, dans le même ordre, pour ouvrir depuis la barre celui que vous utilisez le plus :

- **Profil**, **Paramètres Insuline** (gérer et activer les configurations d'insuline — nommé volontairement autrement qu'**Insuline**, car ce bouton-là délivre un bolus), **Cible Temp**, **Assistant Rapide**, **Scénarii**, **Automatisation**, **Aliments**,
- **Mode** — fermer ou ouvrir la boucle, la suspendre ou déconnecter la pompe,
- **Clients autorisés** — seulement sur un maître ou un client associé.

Ces boutons ouvrent l'écran ; ils ne lancent rien par eux-mêmes. Pour lancer un scénario ou un Assistant Rapide en un appui, ajoutez-le depuis la catégorie **Scénarii** ou **Assistant rapide** ci-dessous.

![La catégorie Gestion dans le catalogue](../images/v4/QuickLaunch/quicklaunch_categories_manage.png) ![La catégorie Gestion, suite](../images/v4/QuickLaunch/quicklaunch_categories_manage_2.png)

### Assistant Rapide

Chacun de vos préréglages d'**[Assistant Rapide](QuickWizards.md)** peut être ajouté comme bouton : un repas habituel est alors à un appui depuis l'écran principal. Le bouton porte le nom du préréglage et affiche la quantité de glucides ou d'insuline ; un appui lance l'Assistant Rapide avec sa confirmation habituelle.

Les Assistants Rapides réglés pour s'afficher seulement sur la montre ne sont pas proposés. Un bouton d'Assistant Rapide sur la barre suit les mêmes règles que dans le panneau **Traitements** : il est masqué en dehors de sa [plage horaire de validité](#quickwizard_validity) et pendant un court moment après son utilisation. Il reste dans la configuration de votre barre et revient quand l'Assistant Rapide peut à nouveau être utilisé.

### Scénarii

Chaque **[scénario](Scenes.md)** activé peut être ajouté comme bouton. Un appui demande une confirmation, puis active le scénario (le même ensemble d'actions que depuis l'écran Scénarii). Cette catégorie n'apparaît que si vous avez au moins un scénario.

L'info-bulle et le catalogue affichent le même résumé que **Gestion → Scénarii**, par exemple *« 3 actions, 2 h → Retour au calme »*, où le nom après la flèche est le scénario suivant.

### Automatisation

Vos règles d'automatisation **action utilisateur** (celles que vous lancez à la main) peuvent être ajoutées comme boutons. Un appui demande une confirmation, puis exécute les actions de cette règle.

```{admonition} Automation buttons run on the master
:class: note
L'automatisation s'exécute sur le **maître** : les raccourcis d'automatisation ne sont donc proposés et exécutés que sur le maître. Ils ne sont pas disponibles sur un **[client](../RemoteFeatures/ClientMasterControl.md)** associé.
```

### Modèles Cibles Temp

Chacun de vos préréglages de **[Cible Temp](TempTargets.md)** peut être ajouté comme bouton (son nom, sa cible et sa durée sont affichés, par exemple *« Repas imminent — 5,0 mmol/l, 45 min »*). Un appui demande une confirmation, puis démarre cette cible temporaire.

![Les catégories dynamiques — Assistant rapide et Modèles Cibles Temp (Scénarii et Automatisation apparaissent quand vous en avez)](../images/v4/QuickLaunch/quicklaunch_dynamic.png)

(profile-shortcuts)=
### Profil

Chaque **[profil](ProfileSwitch-ProfilePercentage.md)** peut être ajouté comme **raccourci** qui fait un **changement de profil** en un seul appui. Contrairement à la plupart des raccourcis, un raccourci de Profil a son propre **pourcentage** et sa propre **durée**, que vous réglez après l'avoir ajouté, avec le bouton **✏️** :

- **Pourcentage** (30–250 %, par pas de 5 %) — ajuste le profil quand il est appliqué. 100 % l'utilise tel quel.
- **Durée** (0–10080 min, soit jusqu'à 7 jours, par pas de 10 min) — combien de temps dure le changement. **0 = Permanent** (jusqu'au prochain changement).

![Raccourcis de profil et catégories de plugins dans le catalogue](../images/v4/QuickLaunch/quicklaunch_categories.png)

Vous pouvez ainsi garder plusieurs boutons pour le **même** profil à des forces différentes — par exemple *« Profil 100 % »* et *« Profil 70 % pendant 2 h »* — et appliquer l'un ou l'autre en un seul appui. (Vous pouvez ajouter plusieurs fois le même profil avec des réglages différents.)

### Plugins

![Raccourcis de plugins dans le catalogue](../images/v4/QuickLaunch/quicklaunch_categories_6.png)

Enfin, tout **plugin activé** qui a son propre écran peut être ajouté comme raccourci pour l'ouvrir directement. Ils sont groupés par type de plugin — **Pompe**, **Source GLY**, **APS**, **Boucle**, **Calcul de Sensibilité**, **Lissage**, **Étalonnage**, **Restrictions**, **Communication** et **Général** — pour que vous puissiez, par exemple, aller directement à l'écran de votre pompe ou de la boucle depuis l'écran principal.

---

## QuickLaunch et maître/client

Contrairement à la plupart de vos paramètres, la **barre QuickLaunch est configurée par appareil** — elle est enregistrée **localement et n'est pas synchronisée** entre votre maître et les clients associés : chaque appareil garde donc ses propres boutons. (Elle *est* incluse dans une **sauvegarde/exportation** des paramètres : une restauration la remet donc sur le même appareil.)

Ce que chaque appareil peut mettre dans sa barre dépend quand même de ce qu'il a : les Assistants Rapides, les scénarios, les préréglages de cible temporaire et les profils sont tous synchronisés, donc le catalogue d'un client propose les mêmes éléments — vous les choisissez simplement par appareil. Quelques détails à connaître :

- Les boutons dont la cible n'existe plus (un Assistant Rapide, un scénario ou un préréglage supprimé, une règle désactivée) sont **ignorés automatiquement**.
- Les raccourcis d'**Automatisation** ne sont proposés et exécutés que sur le **maître** (l'automatisation s'exécute sur le maître). Les boutons de scénario, d'Assistant Rapide, de cible temporaire et de profil sont disponibles sur un client.
- Quand vous appuyez sur un bouton d'un client qui doit s'exécuter sur le maître (un bolus, une cible temporaire, un changement de profil ou un scénario), c'est le **maître** qui l'exécute et qui émet la confirmation. Voir [Contrôle maître ↔ client](../RemoteFeatures/ClientMasterControl.md).

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - quicklaunch_toolbar.png    (cropped close-up of the overview toolbar pill)
       - quicklaunch_overview.png   (full overview showing the toolbar in place)
       - quicklaunch_config.png     (Configure QuickLaunch: Selected actions + Treatment + start of Manage)
       - quicklaunch_dynamic.png    (catalog: Quick Wizard / Scenes / Automation / Temp Target Presets)
       - quicklaunch_categories.png (catalog: Profile shortcuts + plugin categories)
     No QuickLaunch action was actually run (nothing delivered; only scrolled).
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
