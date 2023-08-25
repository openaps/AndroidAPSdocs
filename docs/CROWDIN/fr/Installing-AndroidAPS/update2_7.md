# Vérifications nécessaires après la mise à jour vers AndroidAPS 2.6

- Le code du programme a été changé de façon significative lors du passage à AAPS 2.7.
- Par conséquent, il est important de faire des changements ou de vérifier les paramètres après la mise à jour.
- Veuillez consulter les [notes de version](Releasenotes-version-2-7-0) pour plus de détails sur les nouvelles fonctions et les améliorations.

## Vérifier la source de glycémie

- Vérifiez si la source de glycémie est correcte après la mise à jour.
- En particulier quand vous utilisez [xDrip+](../Configuration/xdrip.md) il peut arriver que la source soit remplacée par l'application Dexcom patchée.
- Ouvrez la [Configuration](Config-Builder-bg-source) (menu hamburger en haut à gauche de l'écran d'accueil)
- Faites défiler vers le bas jusqu'à "Source des glycémies".
- Sélectionnez la bonne source de glycémie si des changements sont nécessaires.

```{image} ../images/ConfBuild_BG.png
:alt: source Gly
```

## Terminer les objectifs

- AAPS 2.7 contient un nouvel objectif 11 (dans les dernières versions renuméroté à 10!) pour l'[automatisation](../Usage/Automation.md).
- Vous devez avoir fini les autres objectfs ([objectifs 3 et 4](Objectives-objective-3-prove-your-knowledge)) pour pouvoir faire l'[objectif 11](Objectives-objective-10-automation).
- Si par exemple vous n'avez pas encore terminé l'examen dans l'[objectif 3](../Usage/Objectives-objective-3-prove-your-knowledge) , vous devrez terminer l'examen avant de pouvoir commencer l'[objectif 10](Objectives-objective-10-automation).
- Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

## Définir le mot de passe principal

- Nécessaire pour pouvoir [exporter les paramètres](../Usage/ExportImportSettings.md) car ils sont chiffrés depuis la version 2.7.
- Ouvrez les préférences (menu trois points en haut à droite de l'écran d'accueil)
- Cliquez sur le triangle sous " Général "
- Cliquez sur " Mot de passe principal "
- Entrez le mot de passe, confirmez le et cliquez sur OK.

```{image} ../images/MasterPW.png
:alt: Définir le mot de passe principal
```

## Exporter les paramètres

- AAPS 2.7 utilise un nouveau format de sauvegarde chiffré.
- Vous devez [exporter vos paramètres](../Usage/ExportImportSettings.md) après la mise à jour vers la version 2.7.
- Les fichiers de paramètres des versions précédentes ne peuvent être que importés dans AAPS 2.7. L'exportation sera dans le nouveau format.
- Assurez-vous de stocker vos paramètres exportés non seulement sur votre téléphone, mais également dans au moins un autre endroit sûr (votre pc, stockage cloud...).
- Si vous construisez l'apk AAPS 2.7 avec le même fichier de clés que dans les versions précédentes, vous pouvez installer la nouvelle version sans supprimer la version précédente.
- Tous les paramètres ainsi que les objectifs terminés resteront tels qu'ils étaient dans la version précédente.
- Si vous avez perdu votre fichier de clés, construisez la version 2.7 avec un nouveau fichier de clés et importez les paramètres de la version précédente, comme c'est décrit dans la section [dépannage](troubleshooting_androidstudio-lost-keystore).

## Autosens (un indice - aucune action nécessaire)

- Autosens est changé pour un modèle qui reproduit la conception de référence avec une commutation dynamique.
- Autosens bascule maintenant entre une fenêtre de 24 heures et une de 8 heures pour calculer la sensibilité. Il choisira celle qui est le plus sensible.
- Les utilisateurs qui utilisaient oref1 remarqueront probablement que le système peut être moins dynamique en raison de la variation de sensibilité entre 24 heures et 8 heures.

## Définir le mot de passe de la pompe Dana RS (si vous utilisez une Dana RS)

- Le mot de passe Pump pour [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) n'était pas été vérifié dans les versions précédentes.
- Ouvrez les préférences (menu trois points en haut à droite de l'écran d'accueil)
- Faites défiler vers le bas et cliquez sur triangle à côté de "Dana RS".
- Cliquez sur "Mot de passe pompe (v1 uniquement)"
- Entrez le mot de passe de la pompe (Le [mot de passe par défaut](DanaRS-Insulin-Pump-default-password) est différent selon la version du firmware) et cliquez sur OK.

```{image} ../images/DanaRSPW.png
:alt: Définir le mot de passe Dana RS
```

Pour changer le mot de passe sur Dana RS, suivez les instructions sur la [page DanaRS](DanaRS-Insulin-Pump-change-password-on-pump).
