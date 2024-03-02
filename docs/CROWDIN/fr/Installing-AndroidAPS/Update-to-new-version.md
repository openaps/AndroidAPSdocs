# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AAPS** is not available to download, due to regulations concerning medical devices. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.

## Remarques importantes

* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](../Installing-AndroidAPS/Releasenotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* You need to use version **[Hedgehog (2023.1.1) or Iguana (2023.2.1)](https://developer.android.com/studio/)** of Android Studio. If your version is older, please update first Android Studio first! 

## Overview for updating to a new version of AAPS

1. [Export your settings](../Usage/ExportImportSettings-export-settings) from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Constuire un apk signé](Update-to-new-version-build-the-signed-apk)
4. [Transférez l'apk généré](Building-APK-transfer-apk-to-smartphone) sur votre téléphone et installez le
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. En fonction de votre [source de glycémie](../Configuration/BG-Source.md) vérifiez bien [identify receiver](xdrip-identify-receiver) dans xDrip+ ou utilisez l'application [BYODA (Construisez votre propre application Dexcom)](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Dans le cas où vous auriez des problèmes, allez voir la page spécifique de [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exporter les paramètres

Allez voir la page [Exporter & importer les paramètres](ExportImportSettings-export-settings) si vous ne vous souvenez plus comment faire.

(Update-to-new-version-update-your-local-copy)=

## 2. Mettez à jour votre copie locale

:::{admonition} WARNING :class: warning If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you! :::

* Open your existing AAPS project with Android Studio. Vous devrez peut-être sélectionner votre projet. (Double) click on the AAPS project.
    
    ![Android Studio - Sélectionnez un projet](../images/update/01_ProjectSelection.png)

* Dans la barre de menu d'Android Studio, sélectionnez Git -> Fetch
    
    ![Menu Android Studio - Git - Fetch](../images/update/02_GitFetch.png)

* Vous verrez un message dans le coin inférieur droit indiquant que Fetch a réussi.
    
    ![Menu Android Studio - Git - Fetch réussi](../images/update/03_GitFetchSuccessful.png)

* Dans la barre de menus, sélectionnez Git -> Pull
    
    ![Menu Android Studio - Git - Pull](../images/update/04_GitPull.png)

* Laissez toutes les options telles qu'elles sont (origin/master) et sélectionnez Pull
    
    ![Android Studio fenêtre de dialogue - Git - Pull](../images/update/05_GitPullOptions.png)

* Attendez tant que le téléchargement est en cours, vous verrez ceci comme des informations dans la barre du bas. Une fois terminé, vous verrez un message de réussite. Note: Les fichiers qui ont été mis à jour peuvent varier ! Ce n'est pas une indication
    
    ![Android Studio - Pull réussi](../images/update/06_GitPullSuccess.png)

* Gradle Sync s'exécutera quelques secondes pour télécharger des dépendances. Patientez jusqu'à ce que ce soit fini.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. Construisez l'APK signé

Votre code source est maintenant la version actuellement publiée. Il est maintenant temps de construire l'apk signé comme c'est décrit dans la section [Générer un APK signé](Building-APK-generate-signed-apk).

## 4. Transférez l'apk

Vous devez transférer l'apk sur votre téléphone pour pouvoir l'installer.

Consultez les instructions pour [Transférer le fichier APK sur le smartphone](Building-APK-transfer-apk-to-smartphone)

## 5. Installer l'apk

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). Remarque : Si vous avez effectué la compilation avec le même fichier de clés existant dans Android Studio, vous n'avez pas besoin de supprimer l'application existante sur votre téléphone. Lorsque vous installez l'apk, suivez les instructions pour installer les mises à jour. Pour d'autres scénarios comme la création d'un nouveau fichier de clés dans Android Studio pour votre apk signé, vous devrez d'abord supprimer l'ancienne application avant d'installer l'apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Vérifier la version d'AAPS sur le téléphone

Après avoir installer le nouvel apk, vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos". Vous devriez voir la version actuelle en résultat.

![Version installée d'AAPS](../images/Update_VersionCheck282.png)

# Résolution de problèmes

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Ensuite, consultez la page [de dépannage d'Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) pour voir si votre problème est déjà documenté !

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).