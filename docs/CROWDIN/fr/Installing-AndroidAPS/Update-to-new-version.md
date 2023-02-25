# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. You will receive an [information on the AndroidAPS home screen](Releasenotes-release-notes) about the new version.
* À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
* Utilisez **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** ou une version plus récente pour construire l'apk.
* [Windows 10 32-bit systems](troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Make sure you read the [Release Notes](../Installing-AndroidAPS/Releasenotes.md) for the current version

## Aperçu de la mise à jour de votre version d'AndroidAPS

1. [Export your settings](../Usage/ExportImportSettings-export-settings) from the existing AAPS version on your phone. Vous n'en avez peut-être pas besoin, mais mieux vaut les sauver que regretter de ne pas l'avoir fait.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Constuire un apk signé](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Building-APK-transfer-apk-to-smartphone) to your phone and install it
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Dans le cas où vous auriez des problèmes, allez voir la page spécifique de [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exporter les paramètres

See the [Export & import settings](ExportImportSettings-export-settings) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Mettez à jour votre copie locale

À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Ouvrez votre projet AndroidAPS existant avec Android Studio. Vous devrez peut-être sélectionner votre projet. (Double) cliquez sur le projet AndroidAPS.
    
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

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](Building-APK-generate-signed-apk).

## 4. Transférez l'apk

You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](Building-APK-transfer-apk-to-smartphone)

## 5. Installer l'apk

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Les explications peuvent être trouvées sur internet (par ex. [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)). Note: If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates. For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Vérifier la version d'AAPS sur le téléphone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)

# Résolution de problèmes

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!