# Mise à jour vers une nouvelle version ou une branche

## Compiler vous-même au lieu de télécharger

**AAPS** n'est pas disponible au téléchargement, à cause des règles sur les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à d'autres personnes ! Consultez la [Foire Aux Questions (FAQ)](../UsefulLinks/FAQ.md) pour plus de détails.

## Remarques importantes

- Mettez à jour vers la nouvelle version d'**AAPS** le plus tôt possible après sa publication.
- Quand une nouvelle version est disponible, vous recevez dans l'application **AAPS** un bandeau d'information sur la nouvelle version.
- La nouvelle version est aussi annoncée sur Facebook au moment de sa publication.
- Après la publication, lisez attentivement les [notes de version](ReleaseNotes.md) et posez vos questions à la communauté sur Facebook ou Discord avant de faire la mise à jour.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Mettre à jour AAPS avec la compilation dans le navigateur

Vous avez déjà compilé votre application AAPS avec un navigateur ? Suivez les instructions de la méthode que vous avez utilisée :

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Il n'y a pas de fork à synchroniser.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Mettre à jour AAPS avec Android Studio

Suivez [ces instructions](./UpdateComputerBuild.md).

## Mettre à jour AAPS en ligne de commande

Utilisez les [mêmes instructions](../SettingUpAaps/CLIBuild.md) que pour la compilation précédente d'AAPS, mais récupérez les nouvelles modifications avec git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Regardez dans les [notes de version](../Maintenance/ReleaseNotes.md) s'il y a des instructions particulières après la mise à jour.

Après avoir installé le nouvel apk :

- vous pouvez vérifier la version d'**AAPS** sur votre téléphone en ouvrant le **menu** (☰) en haut à gauche, puis **À propos** (voir la capture d'écran ci-dessous) ; vous pouvez voir la version actuelle d'**AAPS** ;
- vérifiez que l'import des paramètres a bien été fait ; et
- vérifiez les paramètres d'**AAPS** dans **Paramètres** et assurez-vous qu'ils sont toujours corrects.

![Fenêtre À propos avec la version d'AAPS installée](../images/about_dialog_version.png)