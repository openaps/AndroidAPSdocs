(food)=
# Aliments (votre base de données d'aliments)

La base de données **Aliments** est votre liste personnelle d'aliments enregistrés. Chaque entrée enregistre les **glucides** d'un aliment (et, si vous le voulez, ses lipides, protéines, énergie et une catégorie). Vous pouvez ainsi garder au même endroit ce que vous mangez souvent, et démarrer un bolus depuis un aliment enregistré avec ses glucides déjà remplis.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Ouvrir la base de données d'aliments

Ouvrez l'écran **Gestion** (navigation en bas) et choisissez **Aliments** (*« Gérer les entrées de la base de données alimentaire »*). Dans **AAPS** v4, Aliments **n'est plus un plugin** — il n'y a rien à activer ; c'est un écran à part, ouvert depuis le [panneau Gestion](#v4changes-manage).

---

## La liste des aliments

Vos aliments sont affichés dans une liste que vous pouvez faire défiler. Chaque ligne affiche le **nom** de l'aliment, sa **portion / unité / catégorie** et ses **glucides** :

![La liste de la base de données d'aliments, avec la recherche et le bouton d'ajout](../images/v4/Food/food_list.png)

- **🔍 Recherche** (en haut) — filtre la liste par **nom** (sans tenir compte des majuscules/minuscules).
- **Filtre par catégorie** — des puces permettent de réduire la liste à une **catégorie** ; quand une catégorie est choisie, des puces de **sous-catégorie** apparaissent pour elle. (Appuyez à nouveau sur une puce sélectionnée pour l'effacer.)
- **➕** (en bas à droite) — ajoute un nouvel aliment (voir ci-dessous).
- Appuyez sur une ligne pour **modifier** cet aliment.

Si la liste (ou le filtre actuel) n'a aucune entrée, l'écran affiche **Aucune donnée**.

---

## Ajouter et modifier un aliment

Appuyez sur **➕** pour ajouter, ou appuyez sur une ligne existante pour la modifier. Un éditeur s'ouvre dans un panneau en bas de l'écran (**Ajouter un aliment** / **Éditer un aliment**) :

![L'éditeur d'aliment — nom, catégorie, portion, glucides et macronutriments](../images/v4/Food/food_editor.png)

Les champs sont :

- **Nom** — obligatoire (vous ne pouvez pas enregistrer sans lui).
- **Catégorie** et **Sous-catégorie** — facultatifs, servent à grouper/filtrer les aliments.
- **Portion** et **Unité** — la taille habituelle d'une portion ; **Unité** vaut **g** par défaut.
- **Glucides (g)** — la quantité de glucides de l'aliment.
- **Lipides (g)**, **Protéines (g)**, **Énergie (kJ)** — valeurs nutritionnelles facultatives.

Appuyez sur **Enregistrer** pour l'enregistrer, ou sur **Annuler** pour l'abandonner. Quand vous modifiez un aliment existant, l'éditeur a aussi un bouton **Supprimer**.

```{admonition} Deleting is undoable
:class: note
La suppression d'un aliment affiche un message **« Aliment supprimé »** avec une action **Annuler**, donc une suppression par erreur est facile à annuler.
```

---

## Utiliser un aliment pour un bolus

Chaque ligne d'aliment a un bouton **calculatrice**. Un appui ouvre l'**Assistant Bolus** avec les **glucides** de cet aliment déjà remplis et le **nom** de l'aliment ajouté comme remarque du traitement — vous confirmez et injectez sans saisir à nouveau les glucides.

```{admonition} The carbs value is used as-is
:class: note
Le nombre de **glucides** enregistré pour l'aliment est passé tel quel à l'assistant — **AAPS** ne le multiplie pas par la portion ni par la quantité que vous avez mangée. Si votre quantité est différente, ajustez les glucides dans l'assistant avant de confirmer. (Il n'y a pas de choix d'aliment *dans* l'Assistant Bolus ni dans la boîte de dialogue Glucides ; vous partez de la ligne de l'aliment ici.)
```

---

## D'où viennent les aliments (synchronisation Nightscout)

La base de données d'aliments est partagée via **Nightscout**, mais **dans un seul sens** :

- **Téléchargement :** **AAPS** **lit** les aliments de la **base de données d'aliments** de votre site Nightscout et garde la liste locale synchronisée avec elle. Cela fait partie de la synchronisation NSClient, donc un **client/suiveur** associé reçoit aussi les mêmes aliments.
- **Envoi :** **AAPS** n'envoie **pas** les aliments **vers** Nightscout — NSClient ne permet pas d'envoyer des entrées d'aliments. Les aliments que vous créez ou modifiez **dans AAPS** restent donc **sur cet appareil** et ne sont pas transmis à Nightscout ni à vos autres appareils.

```{admonition} Maintain your shared list in Nightscout
:class: important
Comme les aliments sont **seulement téléchargés**, pour partager une seule liste d'aliments entre votre téléphone, votre suiveur/[client](../RemoteFeatures/ClientMasterControl.md) et le reste de votre installation, il faut la gérer dans **Nightscout** (avec son éditeur d'aliments intégré). **AAPS** récupérera ces entrées. Un aliment ajouté seulement dans **AAPS** reste local à cet appareil — et y reste : un téléchargement reconnaît les entrées Nightscout par leur ID Nightscout, il ajoute et met à jour celles-ci, mais n'écrase et ne supprime jamais un aliment que vous avez créé localement (un aliment est supprimé seulement quand sa copie Nightscout est supprimée dans Nightscout).

Notez que la base de données d'aliments ne fait **pas** non plus partie du canal de contrôle signé maître ↔ client — elle passe uniquement comme données Nightscout.
```

---

## Pas sur la montre

La base de données d'aliments est une fonction du **téléphone** — il n'y a pas de navigateur d'aliments, de tuile ni de menu sur une **montre Wear OS**.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
