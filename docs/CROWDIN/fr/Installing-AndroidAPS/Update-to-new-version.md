# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes.md#release-notes) about the new version.
* À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
* Utilisez **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** ou une version plus récente pour construire l'apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio.md#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Assurez-vous de lire les [Notes de version](../Installing-AndroidAPS/Releasenotes) pour la version actuelle

## Aperçu de la mise à jour de votre version d'AndroidAPS

1. [Export your settings](../Usage/ExportImportSettings.md#export-settings) from the existing AAPS version on your phone. Vous n'en avez peut-être pas besoin, mais mieux vaut les sauver que regretter de ne pas l'avoir fait.
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Constuire un apk signé](../Installing-AndroidAPS/Update-to-new-version.md#build-the-signed-apk)
4. [Transfer the built apk](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone) to your phone and install it
5. [Vérifier la version](#verifier-la-version-d-aaps-sur-le-telephone) dans AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](../Configuration/xdrip.md#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app).

Dans le cas où vous auriez des problèmes, allez voir la page spécifique de [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exporter les paramètres

See the [Export & import settings](../Usage/ExportImportSettings.md#export-settings) page if you don't remember how to do this.

## 2. Mettez à jour votre copie locale

À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS sur votre disque dur et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).

Si vous avez déjà modifié l'URL ou ou que vous faite la mise à jour à partir de la version 2.8.x, suivez ces étapes :

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

## 3. Construisez l'APK signé

Votre code source est maintenant la version actuellement publiée. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk).

## 4. Transférez l'apk

Vous devez transférer l'apk sur votre téléphone pour pouvoir l'installer.

See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK.md#transfer-apk-to-smartphone)

## 5. Installer l'apk

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Les explications peuvent être trouvées sur internet (par ex. [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)). Remarque : Si vous avez effectué la compilation avec le même fichier de clés existant dans Android Studio, vous n'avez pas besoin de supprimer l'application existante sur votre téléphone. Lorsque vous installez l'apk, suivez les instructions pour installer les mises à jour. Pour d'autres scénarios comme la création d'un nouveau fichier de clés dans Android Studio pour votre apk signé, vous devrez d'abord supprimer l'ancienne application avant d'installer l'apk.

## 6. Vérifier la version d'AAPS sur le téléphone

Après avoir installer le nouvel apk, vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos". Vous devriez voir la version actuelle en résultat.

![Version installée d'AAPS](../images/Update_VersionCheck282.png)

# Résolution de problèmes

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Ensuite, consultez la page [de dépannage d'Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) pour voir si votre problème est déjà documenté !