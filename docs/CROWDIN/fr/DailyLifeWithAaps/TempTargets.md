# Cibles temporaires

## Que sont les cibles temporaires et où puis-je les définir et les configurer ?

Une **cible temporaire** (en abrégé **CT**) est une fonction d'**AAPS** qui permet à l'utilisateur de modifier sa [plage cible de **glycémie**](#profile-glucose-targets) pour des activités prévues. Pour cela, **AAPS** modifie la quantité d'insuline donnée à l'utilisateur.

Une cible de glycémie, surtout si elle est de courte durée (moins de 4 heures), n'a pas besoin d'être la *valeur réelle* que vous attendez ou que vous voulez atteindre. C'est plutôt un bon moyen de dire à **AAPS** d'agir plus ou moins fortement, tout en gardant votre glycémie dans la cible.

Les cibles temporaires peuvent être définies dans ces limites :

|         | Cible Temp             |
| ------- | ---------------------- |
| Minimum | 4 mmol/l ou 72 mg/dl   |
| Maximum | 10 mmol/l ou 180 mg/dl |

**AAPS** propose trois préréglages de **cible temporaire** intégrés : pour l'exercice (**Activité**), les repas (**Repas imminent**) et une hypoglycémie prévue (**Hypo**). Ils se trouvent sur l'écran **Cible Temp** (**Gestion** → **Cible Temp**). Vous pouvez aussi l'ouvrir en appuyant simplement sur la **pastille de cible** de l'écran principal.

Les utilisateurs doivent avoir des attentes réalistes sur les résultats possibles quand ils choisissent une **cible temporaire** dans **AAPS**. La réussite pour atteindre une cible de **glycémie** voulue dépend de plusieurs facteurs, par exemple : la fiabilité des réglages **AAPS** de l'utilisateur, le contrôle global de la **glycémie**, l'**IA**, la sensibilité à l'insuline, la résistance à l'insuline, l'intensité de l'effort pendant l'exercice, etc.

Une **cible temporaire** peut avoir besoin d'environ 30 minutes ou plus pour atteindre une cible de **glycémie** voulue. **AAPS** ne peut pas atteindre une cible de **glycémie** avec un effet immédiat. Les utilisateurs doivent en tenir compte quand ils choisissent une **cible temporaire**.

The sections below summarize the features of **Temp-Target Activity**, **Temp-Target Eating soon** and **Temp-Target Hypo**. Les valeurs affichées sont les valeurs par défaut à l'installation — vous pouvez [ajuster chaque préréglage](#TempTargets-change-preset-defaults) selon vos besoins.

### CT - Activité

![CT Activité](../images/TempTarget2.png)

**Cible de glycémie (préréglage par défaut, ajustable)**

AAPS cherchera à atteindre 140 mg/dl ou 7,8 mmol/l pendant 1 h 30 min

**Autres points que les utilisateurs peuvent prendre en compte dans leur choix** :

Selon la **glycémie**, **AAPS** va « diminuer » l'insuline donnée pour atteindre la cible de **glycémie**. Si la cible de **glycémie** n'est pas dans la plage (c'est-à-dire au-dessus de la cible de **glycémie** choisie dans le **profil** de l'utilisateur), alors **AAPS** peut garder le débit basal.

En mode boucle fermée, les **SMB** :

- *peuvent être* désactivés (voir plus bas) ; et/ou
- le débit basal peut être activé si **AAPS** a une **IA** négative ou <0.

Les utilisateurs peuvent aussi envisager de :

- *choisir* cette **CT** 1–2 heures avant l'exercice prévu pour avoir moins d'IA (le bon moment pour cette CT varie selon les personnes) ; et
- *choisir* un profil temporaire (réduit) pendant la durée de l'activité prévue, pour avoir moins d'**IA** ;
- *s'assurer* que la **CT** est programmée pour être *désactivée* peu avant l'exercice, car l'**IA** est déjà réduite et certains utilisateurs ont une montée rapide de la **glycémie** après l'exercice.

### CT - Repas imminent

![CT Repas imminent](../images/TempTarget1.png)

**Cible de glycémie (préréglage par défaut, ajustable)**

AAPS cherchera à atteindre 90 mg/dl ou 5,0 mmol/l pendant 45 minutes

**Autres points que les utilisateurs peuvent prendre en compte dans leur choix** :

En mode boucle fermée, les **SMB** :

- restent activés ; et/ou
- le débit basal peut aussi être activé selon les réglages du **profil** de l'utilisateur.

Selon la **glycémie**, **AAPS** va « augmenter » l'insuline donnée, dans les limites des paramètres **AAPS** de l'utilisateur, pour atteindre la cible de **glycémie** voulue.

### CT - Hypo

![CT Hypo](../images/TempTarget3.png)

**Cible de glycémie (préréglage par défaut, ajustable)**

AAPS cherchera à atteindre 160 mg/dl ou 8,9 mmol/l pendant 1 heure

**Autres points que les utilisateurs peuvent prendre en compte dans leur choix** :

En mode boucle fermée, les **SMB** :

- *peuvent être* désactivés (voir plus bas) ; et/ou
- le débit basal peut être activé si **AAPS** a une **IA** négative ou <0.

(TempTargets-manage-v4)=

## Définir et gérer les cibles temporaires (Gestion → Cible Temp)

Dans **AAPS** v4, vous gérez vos **préréglages** de CT et vous démarrez une cible temporaire depuis l'écran **Gestion** (barre de navigation en bas) → **Cible Temp** (*« Gérer et définir des Cibles Temporaires »*).

![L'écran Cible Temp — carrousel de préréglages, éditeur et barre d'actions](../images/v4/TempTarget/tt_management.png)

L'écran a trois parties :

1. **Carrousel de préréglages** (en haut) — faites glisser pour parcourir vos préréglages de CT. Chaque carte affiche le **nom**, la **cible** et la **durée** du préréglage ; la CT en cours est mise en évidence.
2. **Éditeur** (au milieu) — la **Cible Temp** et la **Durée** qui seront vraiment appliquées, plus une date/heure d'**Activation**.
3. **Barre d'actions** (en bas) — **➕ ajouter**, **🗑️ supprimer** et le bouton **▶ activer**.

Quand vous sélectionnez une carte de préréglage, sa **cible** et sa **durée** sont chargées dans l'éditeur.

```{admonition} Préréglages intégrés et préréglages personnalisés :class: note Les préréglages intégrés — **Repas imminent**, **Activité** et **Hypo** — existent toujours et **ne peuvent pas être supprimés** (vous pouvez quand même modifier leurs valeurs et les enregistrer). Les préréglages que vous créez vous-même sont **personnalisés** : vous pouvez les modifier ou les supprimer librement.

    <br />### Activer une cible temporaire
    
    Faites glisser jusqu'au préréglage voulu (ses valeurs sont chargées dans l'éditeur), ajustez si besoin la **cible**/la **durée** dans l'éditeur, puis appuyez sur **▶ Activer**. Une confirmation affiche la cible exacte, la durée et la raison avant que quoi que ce soit démarre :
    
    ![Confirmation d'activation](../images/TempTarget8.png)
    
    Après votre confirmation, la cible temporaire démarre tout de suite (ou à l'heure d'**Activation** choisie) et dure pendant la **durée** définie.
    
    ```{admonition} Modifier les valeurs ne sert qu'une fois — cela ne change pas le préréglage
    :class: important
    La **cible** et la **durée** dans l'éditeur sont les valeurs que **Activer** va utiliser *tout de suite*. Si vous les changez, ce changement est **temporaire** : il s'applique seulement à cette activation et **ne modifie pas le préréglage enregistré**. Vous pouvez ainsi « ajuster et activer » une CT ponctuelle (par exemple activer *Activité* avec une cible un peu différente aujourd'hui) sans changer le préréglage de façon permanente.
    

### Enregistrer les changements dans un préréglage

Si vous *voulez* garder une valeur modifiée, **enregistrez**-la : quand l'éditeur est différent du préréglage sélectionné, une icône **Enregistrer** apparaît dans la barre d'outils du haut. Un appui sur cette icône enregistre la **cible** et la **durée** actuelles (et le nom, pour les préréglages personnalisés) dans le préréglage sélectionné. Pour les préréglages intégrés, un bouton **Rétablir aux valeurs par défaut** (↺) apparaît aussi dans la barre d'actions : il remet les valeurs par défaut du préréglage.

![Écran Cible Temp avec l'icône Enregistrer et le bouton Rétablir aux valeurs par défaut](../images/v4/TempTarget/tt_preset_save_revert.png)

La règle simple est donc :

- **Activer** → utilise les valeurs **une seule fois** (préréglage inchangé).
- **Enregistrer** → fait des valeurs les **nouvelles valeurs par défaut** du préréglage.

Pour remettre un préréglage intégré comme à l'installation, sélectionnez-le et appuyez sur le bouton **↺ Rétablir**. Il apparaît dans la barre d'actions seulement pour un préréglage **intégré** dont les valeurs sont différentes de ses valeurs d'usine, et il remet la **cible** et la **durée** d'origine de ce préréglage.

### Ajouter et supprimer des préréglages

- **➕ Ajouter** — crée un **nouveau préréglage personnalisé** à partir des valeurs actuelles de l'éditeur. La nouvelle carte apparaît dans le carrousel.
- **🗑️ Supprimer** — supprime le préréglage **personnalisé** sélectionné. Les préréglages intégrés (*Repas imminent*, *Activité*, *Hypo*) ne peuvent pas être supprimés.

Quand vous avez au moins deux préréglages **personnalisés**, vous pouvez aussi changer leur ordre dans le carrousel : appuyez sur l'icône **Réordonner** (⇅) dans la barre du haut, déplacez la carte du centre avec les **boutons de déplacement ◀ / ▶**, puis confirmez avec **✓**. Les préréglages intégrés gardent leur place — seuls les préréglages personnalisés peuvent être déplacés. (Les commandes sont les mêmes que pour [réordonner les profils](ProfileSwitch-ProfilePercentage.md).)

Vos préréglages font partie de la configuration synchronisée. Ils sont donc partagés entre votre maître et les clients associés.

### Autres façons de définir une cible temporaire

Une cible temporaire peut aussi être définie sans ouvrir cet écran :

- avec les **interrupteurs de CT de la boîte de dialogue Glucides** — voir [plus bas](#TempTargets-carbs-dialog),
- avec un **bouton de préréglage dans la [barre QuickLaunch](QuickLaunch.md)** — la catégorie *Modèles Cibles Temp* de *Configurer le lancement rapide* propose un bouton à un seul appui pour chacun de vos préréglages,
- depuis une **montre Wear OS** (l'élément de menu / la tuile **Cible Temp**),
- depuis un **client** associé — voir [Contrôle maître ↔ client](../RemoteFeatures/ClientMasterControl.md),
- dans un **[scénario](Scenes.md)** (l'action *Cible Temp*), ou
- depuis une règle d'**Automatisation** (*Démarrer la cible temp* / *Arrêter la cible temp*).

* * *

(TempTargets-where-can-i-select-a-temp-target)=

## Où puis-je choisir une cible temporaire ?

Le moyen le plus rapide est d'appuyer sur la **pastille de cible** de l'écran principal (elle affiche votre plage cible actuelle) :

![Pastille de cible sur l'écran principal](../images/TempTarget6.png)

Cela ouvre l'écran **Cible Temp** décrit plus haut — faites glisser jusqu'à un préréglage et appuyez sur **▶ Activer**. Le même écran est aussi accessible par **Gestion** → **Cible Temp**.

(TempTargets-carbs-dialog)= Quand vous saisissez des glucides, vous n'avez pas du tout besoin d'ouvrir l'écran **Cible Temp** : la **boîte de dialogue Glucides** (**Traitements** → **Glucides**) a en haut les interrupteurs **Début Traitement Hypo**, **Début Repas Imminent** et **Début Activités**. Activez-en un et le préréglage correspondant est activé en même temps que la saisie des glucides :

![Interrupteurs de CT dans la boîte de dialogue Glucides](../images/TempTarget5.png)

    {admonition} CT Hypo automatique
    :class: note
    Si vous ouvrez la **boîte de dialogue Glucides** pendant que votre glycémie est sous 72 mg/dl (4 mmol/l), **AAPS** active d'avance pour vous l'interrupteur **Début Traitement Hypo** (sauf si une cible temporaire plus haute avec une durée restante plus longue est déjà en cours).

(TempTargets-change-preset-defaults)=

## Où puis-je changer la cible temporaire par défaut et la remplacer par mes propres préférences ?

La **cible** et la **durée** de chaque préréglage se modifient directement sur l'écran **Cible Temp** — il n'y a plus d'entrée séparée pour cela dans les préférences :

1. Ouvrez l'écran **Cible Temp** (appuyez sur la pastille de cible, ou **Gestion** → **Cible Temp**).
2. Faites glisser jusqu'au préréglage que vous voulez changer.
3. Ajustez la **Cible Temp** et/ou la **Durée** dans l'éditeur.
4. Appuyez sur l'icône **Enregistrer** qui apparaît dans la barre d'outils du haut.

![Modifier un préréglage — icône Enregistrer dans la barre d'outils, Rétablir dans la barre d'actions](../images/TempTarget7.png)

Tant que l'éditeur est différent des valeurs d'usine d'un préréglage intégré, un bouton **↺ Rétablir** apparaît aussi dans la barre d'actions — appuyez dessus pour remettre la cible et la durée d'origine du préréglage.

## Comment annuler une cible temporaire ?

Pendant qu'une cible temporaire est en cours, la pastille de cible de l'écran principal affiche la cible et son temps restant. Appuyez dessus — sur l'écran **Cible Temp**, le préréglage en cours est mis en évidence comme **ACTIF**, et un bouton rouge **✗ Annuler** apparaît au bout de la barre d'outils en bas, juste à gauche du bouton **▶ Activer**. Appuyez dessus et confirmez :

![Annuler une cible temporaire en cours](../images/TempTarget9.png)

Une cible temporaire en cours peut aussi être arrêtée depuis une **montre Wear OS**, depuis un **client** associé, ou par une règle d'**Automatisation** (*Arrêter la cible temp*).

(TempTargets-hypo-temp-target)=

## Cible temporaire Hypo

La **cible temporaire Hypo** permet à **AAPS** d'éviter une glycémie basse chez l'utilisateur en réduisant l'apport d'insuline. Si l'utilisateur prévoit que sa **glycémie** va baisser : en général, **AAPS** devrait le gérer, mais cela dépend beaucoup de la stabilité des réglages **AAPS** de l'utilisateur. Une **cible temporaire Hypo** permet à l'utilisateur d'agir avant l'hypo prévue et de faire réduire l'insuline par **AAPS**.

Parfois, après la prise de glucides pour traiter une hypo, la **glycémie** de l'utilisateur peut monter vite, et **AAPS** corrigera cette **glycémie** qui monte vite en activant les **SMB**.

Certains utilisateurs veulent éviter que des **SMB** soient donnés pendant une **cible temporaire Hypo**. Pour cela, désactivez *« Activer les SMB avec Cibles Temp hautes »* dans **Paramètres** → **OpenAPS SMB** (voir plus bas) :

- Advanced, objective 9: the user can enable *“High temp target raises sensitivity”* for **Temp-Targets** of 100 mg/dL (5.6 mmol/L) or higher in OpenAPS SMB, **AAPS** will be more sensitive.

- Advanced, objective 9: the user can deactivate *“Enable SMB with high temp target”*, so that even if **AAPS** has COB > 0, “Enable SMB with low temp target” or “Enable SMB always” enabled and OpenAPS SMB active, **AAPS** will not give SMBs while high temp targets are active.

Remarque : si vous ouvrez la **boîte de dialogue Glucides** pendant que votre glycémie est sous 72 mg/dl ou 4 mmol/l, **AAPS** active automatiquement d'avance l'interrupteur **Début Traitement Hypo**.

(TempTargets-activity-temp-target)=

## Cible temporaire Activité

Avant et pendant l'exercice, l'utilisateur peut avoir besoin d'une cible plus haute pour éviter une hypoglycémie pendant l'activité.

Pour simplifier la **cible temporaire Activité**, l'utilisateur peut configurer une **cible temporaire - Activité** par défaut. Elle fait monter la **glycémie** en réduisant l'insuline, pour ralentir la baisse de la **glycémie** et éviter une hypoglycémie.

Les nouveaux utilisateurs d'**AAPS** peuvent avoir besoin de tester et de personnaliser les réglages par défaut de leur **cible temporaire Activité** pour que cette fonction marche au mieux pour eux. Chaque personne est différente pour obtenir une glycémie stable pendant l'exercice. Voir aussi la [section sport de la FAQ](#FAQ-sports).

Certains utilisateurs préfèrent aussi activer un **Changement de profil** (une baisse du profil < 100 % pour réduire l'insuline délivrée par **AAPS**) avant et pendant la **cible temporaire Activité**. Vous pouvez démarrer les deux en une seule étape : appuyez sur le nom du profil sur l'écran principal, appuyez sur le bouton rond **▶**, réglez un **Pourcentage** sous 100 % et une **Durée**, puis activez **Cible Temp / Activité**. Voir [Modifier le pourcentage du profil](#ProfileSwitch-change-percentage).

Avancé, objectif 9 : les utilisateurs peuvent activer *« Cible Temp haute augmente la sensibilité »* pour les **cibles temporaires** de 100 mg/dl (5,6 mmol/l) ou plus dans OpenAPS **SMB**. Une cible de 99 mg/dl (5,5 mmol/l) est une cible normale, ni haute ni basse. **AAPS** est alors plus sensible.

De plus, si *« Activer les SMB avec Cibles Temp hautes »* est désactivé, **AAPS** ne donnera pas de **SMB**, même avec des GA > 0, *« Activer les SMB avec Cibles Temp basses »* ou *« Activer en permanence les SMB »* activé et OpenAPS **SMB** actif.

(TempTargets-eating-soon-temp-target)=

## Cible temporaire Repas imminent

**Temp-Target Eating soon** can help accomplish a gentle drive down of **BG** and ensure there is ample **IOB** before eating.

This can be an important tool for those users who do not pre bolus, however the efficacy of **Temp-Target Eating soon** will depend on a number of factors including: the user’s settings, if they eat a low carb diet and whether they are using a fast acting insulin (like Fiasp or Lyumjev) in order to eliminate the need to pre bolus. Ordinarily, until users are experienced in **AAPS** they should expect to pre bolus when using **Temp-Target Eating soon** and this is particularly so, if eating a high carb diet.

Vous pouvez en savoir plus sur le « mode Repas imminent » dans l'article [« How to do “eating soon” mode »](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) (en anglais) ou [ici](https://diyps.org/tag/eating-soon-mode/).

Avancé, [objectif 9](#objectives-objective9) : si vous utilisez OpenAPS SMB et que *« Cibles Temp basses diminuent la sensibilité »* est activé, **AAPS** agit un peu plus fortement. Pour cette option, la **cible temporaire** doit être de 98 mg/dl (5,4 mmol/l) ou moins.

## Comment désactiver les SMB pendant les cibles temporaires ?

Pour cela, ouvrez **Paramètres** → **OpenAPS SMB** et désactivez *« Activer les SMB avec Cibles Temp hautes »*.

![Préférence Activer les SMB avec Cibles Temp hautes](../images/TempTargetSMB.png)

Ainsi, **AAPS** ne donnera pas de **SMB**, même avec des GA > 0, *« Activer les SMB avec Cibles Temp basses »* ou *« Activer en permanence les SMB »* activé et OpenAPS SMB actif.