# Mise à jour avec un navigateur (fork)

```{tip}
Vous avez compilé AAPS avec **AAPS Builder** ? Vous n'avez pas besoin de cette page : consultez [Mettre à jour AAPS avec AAPS Builder](#aaps-builder-updates).
```

## Compiler vous-même au lieu de télécharger

**AAPS** n'est pas disponible au téléchargement, à cause des règles sur les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à d'autres personnes ! Consultez la [Foire Aux Questions (FAQ)](../UsefulLinks/FAQ.md) pour plus de détails.

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Suivez ensuite la [procédure de Compilation dans le navigateur d'**AAPS**](../SettingUpAaps/BrowserBuild.md) au lieu de ce guide. Au lieu de créer un nouveau keystore, vous devez sélectionner celui que vous avez copié depuis votre ordinateur.
Cette opération est obligatoire seulement la première fois. Ensuite, pour les mises à jour suivantes, vous pourrez suivre ce guide.
```

```{tip}
**Vous passez à AAPS Builder ?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) est la compilation dans le navigateur la plus simple : pas de fork à synchroniser, et vous téléchargez l'application directement depuis GitHub. Vous n'êtes pas obligé de changer : ce guide continue de fonctionner. Si vous changez, récupérez d'abord une copie de votre keystore depuis votre fork, comme expliqué dans [Venir de l'ancienne compilation dans le navigateur](#aaps-builder-from-fork). Sinon, la nouvelle compilation ne pourra pas mettre à jour AAPS sur votre téléphone.
```

## Vue d'ensemble de la mise à jour vers une nouvelle version d'AAPS avec un navigateur

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Si vous rencontrez des problèmes, consultez la page séparée [Dépannage de la compilation dans le navigateur](../GettingHelp/BrowserBuildTroubleshooting.md).

### Exporter les paramètres

Exportez vos paramètres depuis la version d'**AAPS** installée sur votre téléphone. Vous n'en aurez peut-être pas besoin, mais mieux vaut être prudent.

Consultez la page [Créer et restaurer des sauvegardes](ExportImportSettings.md) si vous ne savez plus comment faire.

(Update-to-new-version-update-your-repo)=
### Mettre à jour votre dépôt GitHub

[Connectez-vous à GitHub](https://github.com/login).

1. Sélectionnez Repositories (dépôts).
2. Faites défiler vers le bas et sélectionnez votre propre dépôt AndroidAPS.

![Sélectionner le dépôt AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Vérifiez que vous utilisez bien votre propre copie d'AndroidAPS (Forked from nightscout/AndroidAPS)
4. Appuyez sur Sync Fork pour la mettre à jour (le nombre de commits de retard peut être différent de l'image)



![Synchroniser le dépôt AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Appuyez sur Update Branch

![Mettre à jour le dépôt AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Remarque : si vous avez modifié votre copie d'AndroidAPS par erreur, vous verrez cet écran. Supprimez toutes les modifications (commits) pour revenir à la version publiée.

![Supprimer les modifications non voulues](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Bravo.

![Dépôt synchronisé](../images/update/CI/GitHubUpdate5.png)

### Lancer le workflow pour compiler l'APK signé

1. Dans votre copie GitHub d'AndroidAPS, sélectionnez Actions.
2. Développez All Workflows.
3. Sélectionnez AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Faites défiler vers le bas et appuyez sur Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Vous verrez le message Workflow run was successfully requested. Actualisez la page de votre navigateur et vous pourrez suivre l'avancement de la compilation. Quand l'action est terminée, l'action AAPS CI affiche une coche verte. You have successfully built the updated version of **AAPS**. Cela signifie que l'apk Master et l'apk Wear sont maintenant enregistrés directement dans votre Google Drive (voir ci-dessous). L'apk AAPSClient peut être téléchargé depuis Github > nightscout > AndroidAPS [ici](https://github.com/nightscout/AndroidAPS/releases)


![Suivre le workflow](../images/update/CI/GitHubActions4.png)


### Installer l'APK AAPS

1. Ouvrez votre Google Drive
2. Ouvrez le dossier AAPS, sélectionnez le dossier de la nouvelle version : vous y trouverez la version pour le téléphone et la version pour Android Wear.

![Emplacement dans Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
À partir de septembre 2026, la [vérification des développeurs Android](#android-developer-verification) de Google peut bloquer l'installation de l'APK en appuyant sur le fichier, selon votre pays. Des solutions gratuites sont expliquées sur cette page.
```

Continuez [ici](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Dépannage

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Vérifiez ensuite si votre problème est déjà décrit : consultez le [dépannage d'AAPS Builder](#aaps-builder-troubleshooting) si vous compilez avec **AAPS Builder**, sinon le [dépannage de la compilation dans le navigateur](#aaps-ci-troubleshooting).

Si vous avez besoin de plus d'aide, contactez d'autres utilisateurs d'**AAPS** sur [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou [Discord](https://discord.gg/4fQUWHZ4Mw).
