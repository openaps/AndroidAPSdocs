# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AAPS** is not available to download, due to regulations concerning medical devices. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Remarques importantes

* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* You need to use version **[Hedgehog (2023.1.1) or Iguana (2023.2.1)](https://developer.android.com/studio/)** of Android Studio. If your version is older, please update first Android Studio first! 

## Overview for updating to a new version of AAPS

1. [Export your settings](ExportImportSettings.md) from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.
2. [Update local copy](#2-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Constuire un apk signé](#3-build-the-signed-apk)
4. [Transfer the built apk](#4-transfer-the-apk) to your phone and install it
5. [Check the version](#6-check-aaps-version-on-phone) in AAPS
6. Depending on your [BG source](../Getting-Started/CompatiblesCgms.md) make sure to [identify receiver](../CompatibleCgms/xDrip.md#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../CompatibleCgms/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

## 1. Exporter les paramètres

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Mettez à jour votre copie locale

    {admonition} WARNING
    :class: warning
    If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!

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

Votre code source est maintenant la version actuellement publiée. It's time to build the signed apk from it as described in the [build signed apk section](../SettingUpAaps/BuildingAaps.md#build-the-aaps-signed-apk).

## 4. Transférez l'apk

Vous devez transférer l'apk sur votre téléphone pour pouvoir l'installer.

See the instructions for [Transfer APK to smartphone](../SettingUpAaps/TransferringAndInstallingAaps.md)

## 5. Installer l'apk

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). Remarque : Si vous avez effectué la compilation avec le même fichier de clés existant dans Android Studio, vous n'avez pas besoin de supprimer l'application existante sur votre téléphone. Lorsque vous installez l'apk, suivez les instructions pour installer les mises à jour. Pour d'autres scénarios comme la création d'un nouveau fichier de clés dans Android Studio pour votre apk signé, vous devrez d'abord supprimer l'ancienne application avant d'installer l'apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Vérifier la version d'AAPS sur le téléphone

Après avoir installer le nouvel apk, vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos". Vous devriez voir la version actuelle en résultat.

![Version installée d'AAPS](../images/Update_VersionCheck282.png)

## Troubleshooting

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Then see the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) if your problem is already documented!

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).