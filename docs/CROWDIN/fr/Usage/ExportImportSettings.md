# Export/Import des paramètres

## Quand dois-je exporter les paramètres ?

Préparez-vous aux imprévus. Vous pouvez modifier des paramètres importants par accident et avoir des problèmes pour annuler les modifications. Votre téléphone pourrait se casser ou être volé. Pour revenir facilement à l'état où vous étiez, les paramètres doivent être exportés régulièrement.

La meilleure pratique consiste à exporter les paramètres après un changement ou la réalisation d'un objectif.

Les paramètres exportés doivent être copiés sur un stockage cloud ou sur votre ordinateur, c'est mieux si vous utilisez deux emplacements différents. Ainsi vous serez prêt en cas de perte ou de dommages de votre téléphone AAPS et vous ne serez pas obligé de tout recommencer à partir de zéro.

Sur un ordinateur Windows 10, cela ressemble à ceci :

```{image} ../images/AAPS_ExImportSettingsWin.png
:alt: "AndroidAPS Pr\xE9f\xE9rences t\xE9l\xE9phone connect\xE9 \xE0 l'ordinateur"
```

## Informations exportées

Entre autres, les informations suivantes font partie des paramètres exportés :

- [Evènement d'automatisation](../Usage/Automation.md)
- Paramètres du [Générateur de configuration](../Configuration/Config-Builder.md)
- Paramètres des [Profils locaux](../Configuration/Config-Builder#profil-local)
- Résultats des [Objectifs](../Usage/Objectives.md) y compris les résultats de l'objectif 3 [Prouver ses connaissances](../Usage/Objectives#objectif-3-prouver-ses-connaissances)
- [Préférences](../Configuration/Preferences.md) y compris les paramètres [NSClient](../Configuration/Preferences#nsclient)

## Format de sauvegarde chiffré

La sauvegarde des paramètres est chiffrée par un mot de passe principal qui peut être défini dans [Préférences](../Configuration/Preferences#mot-de-passe-principal) .

## Exporter les paramètres

- Menu Hamburger (coin supérieur gauche de l'écran)
- Maintenance
- Exporter les paramètres

```{image} ../images/AAPS_ExportSettings1.png
:alt: "AndroidAPS exporter les param\xE8tres 1"
```

- La date et l'heure d'exportation seront automatiquement ajoutées au nom du fichier et affichées avec le chemin.
- Cliquez sur 'OK'.
- Entrez le [mot de passe principal](../Configuration/Preferences#mot-de-passe-principal) et cliquez 'OK'.
- L'exportation réussie sera affichée en bas de l'écran.

```{image} ../images/AAPS_ExportSettings2.png
:alt: "AndroidAPS exporter les param\xE8tres 2"
```

## Importer les paramètres

**Ne pas importer les paramètres pendant une session Pod active** - voir la page [Omnipod pour plus de détails](../Configuration/OmnipodEros#importer-les-parametres-aaps-de-versions-precedentes).

- Menu Hamburger (coin supérieur gauche de l'écran)
- Maintenance
- Importez les paramètres

```{image} ../images/AAPS_ImportSettings1.png
:alt: "AndroidAPS importer les param\xE8tres 1"
```

- Tous les fichiers présents dans le dossier AAPS/préférences/ de votre téléphone seront affichés dans la liste.
- Sélectionnez un fichier.
- Confirmez l'importation en cliquant sur 'OK'.
- Entrez le [mot de passe principal](../Configuration/Preferences#mot-de-passe-principal) et cliquez 'OK'.

```{image} ../images/AAPS_ImportSettings2.png
:alt: "AndroidAPS importer les param\xE8tres 2"
```

- Les détails du fichier de préférences seront affichés.
- C'est la dernière possibilité pour annuler l'importation.
- Cliquez sur 'Importer'.
- Confirmez le message en cliquant sur 'OK'.
- AAPS sera redémarré afin d'activer les préférences importées.

### Remarque pour les utilisateurs de Dana RS

- Comme les paramètres de connexion de la pompe sont également importés dans AAPS sur votre nouveau téléphone, il va déjà "connaître" la pompe et donc ne démarrera pas une analyse bluetooth.
- Veuillez associer manuellement le nouveau téléphone et la pompe.

### Importer les paramètres des versions précédentes (avant AAPS 2.7)

- L'ancien fichier de paramètres (appelé 'AndroidAPSPreferences' - sans extension de fichier) doit être dans le dossier racine de votre smartphone (/storage/emulated/0).
- Ne mettez pas l'ancien fichier dans le même dossier que celui des nouveaux paramètres exportés (AAPS/préférences).
- Vous trouverez l'ancien fichier en bas de la liste dans la boîte de dialogue d'importation.

## Transférer les paramètres

- La meilleure façon de transférer des fichiers de paramètres sur un nouveau téléphone est via un câble USB ou un service cloud (par ex. Google Drive).
- Des aides peuvent être trouvées sur le web, par ex. [Aide Android](https://support.google.com/android/answer/9064445?hl=fr).
- Si vous rencontrez des problèmes avec le fichier transféré, essayez de transférer le fichier par d'une autre façon.
