# Mise à jour avec Android Studio

## Compiler vous-même au lieu de télécharger

**AAPS** n'est pas disponible au téléchargement, à cause des règles sur les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à d'autres personnes ! Consultez la [Foire Aux Questions (FAQ)](../UsefulLinks/FAQ.md) pour plus de détails.

```{note}
In case you want to build **AAPS** on a new computer: copy your back-up keystore file to the new computer. Suivez ensuite la [procédure de première compilation d'**AAPS**](../SettingUpAaps/BuildingAaps.md) au lieu de ce guide. La seule différence : au lieu de créer un nouveau keystore, vous pouvez sélectionner celui que vous avez copié sur le nouvel ordinateur.
```

## Vue d'ensemble de la mise à jour vers une nouvelle version d'AAPS avec Android Studio

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Si vous rencontrez des problèmes, consultez la page séparée [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

### Exporter les paramètres

Exportez vos paramètres depuis la version d'**AAPS** installée sur votre téléphone. Vous n'en aurez peut-être pas besoin, mais mieux vaut être prudent.

Consultez la page [Créer et restaurer des sauvegardes](ExportImportSettings.md) si vous ne savez plus comment faire.

### Vérifier votre version d'Android Studio

La version minimale nécessaire est décrite dans les [instructions de compilation](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Si votre version est plus ancienne, [mettez d'abord Android Studio à jour](#Building-APK-install-android-studio) !

(Update-to-new-version-update-your-local-copy)=
### Mettre à jour votre copie locale

* Ouvrez votre projet AAPS existant avec Android Studio. Vous devrez peut-être sélectionner votre projet. Cliquez (double-clic) sur le projet AAPS.

  ![Android Studio - Sélectionnez un projet](../images/update/01_ProjectSelection.png)

* Dans la barre de menus d'Android Studio, sélectionnez Git -> Fetch

   ![Menu Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* Vous verrez un message dans le coin inférieur droit indiquant que Fetch a réussi.

   ![Menu Android Studio - Git - Fetch réussi](../images/update/03_GitFetchSuccessful.png)

* Dans la barre de menus, sélectionnez maintenant Git -> Pull

   ![Menu Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Laissez toutes les options telles qu'elles sont (origin/master) et sélectionnez Pull

   ![Android Studio - Git - Fenêtre Pull](../images/update/05_GitPullOptions.png)

* Attendez pendant le téléchargement. Vous voyez l'avancement dans la barre du bas. Une fois terminé, vous verrez un message de réussite.

  ```{note}
  Les fichiers mis à jour peuvent être différents ! Ce n'est pas le signe d'un problème.
  ```

   ![Android Studio - Pull réussi](../images/update/06_GitPullSuccess.png)

* Gradle Sync va se lancer pour télécharger quelques dépendances. Patientez jusqu'à ce que ce soit fini.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### Vérifier la version de JVM

Cette vérification est surtout utile si vous avez déjà compilé une version précédente d'**AAPS** sur le même ordinateur.

Regardez dans les [instructions de compilation](#Building-APK-recommended-specification-of-computer-for-building-apk-file) la version de JVM nécessaire pour la version d'**AAPS** que vous compilez maintenant. Suivez ensuite les étapes décrites dans [Incompatible Gradle JVM](#incompatible-gradle-jvm) pour vérifier que vous utilisez la bonne version.

(Update-to-new-version-build-the-signed-apk)=
### Compiler l'APK signé

Votre code source est maintenant la version publiée actuelle, et tous les prérequis ont été vérifiés. Il est temps de compiler l'apk signé comme décrit dans la [section Compiler l'apk signé](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transférer et installer l'apk
Vous devez transférer l'apk sur votre téléphone pour pouvoir l'installer.

```{note}
Si vous avez compilé avec le même keystore existant dans Android Studio, vous n'avez pas besoin de supprimer l'application existante sur votre téléphone. Lorsque vous installez l'apk, suivez les instructions pour installer les mises à jour.
Pour d'autres cas, comme la création d'un nouveau keystore dans Android Studio pour votre apk signé, vous devrez supprimer l'ancienne application avant d'installer l'apk. **N'oubliez pas d'exporter vos paramètres !**
```

Consultez les instructions de [Transfert et installation de AAPS sur votre smartphone](../SettingUpAaps/TransferringAndInstallingAaps.md). Là où la [vérification des développeurs Android](#android-developer-verification) de Google est appliquée (à partir de septembre 2026, selon votre pays), installez avec [ADB](#android-developer-verification-adb) au lieu d'appuyer sur le fichier APK.

Continuez [ici](#Update-to-new-version-check-aaps-version-on-phone).

(update-computer-build-troubleshooting)=

## Dépannage

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Then check if your problem is already documented on the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

Si vous avez besoin de plus d'aide, contactez d'autres utilisateurs d'**AAPS** sur [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou [Discord](https://discord.gg/4fQUWHZ4Mw).