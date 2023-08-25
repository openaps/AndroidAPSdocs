# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. Vous recevrez une [information dans la page d'accueil AAPS](Releasenotes-release-notes) à propos de la nouvelle version.
* À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
* Utilisez **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** ou une version plus récente pour construire l'apk.
* [Les systèmes d'exploitation Windows 10 32 bits](troubleshooting_androidstudio-unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio 2020.3.1.
* Assurez-vous de lire les [Notes de version](../Installing-AndroidAPS/Releasenotes.md) pour la version actuelle

## Aperçu de la mise à jour de votre version d'AndroidAPS

1. [Exporter les paramètres](../Usage/ExportImportSettings-export-settings) à partir de la version AAPS existante sur votre téléphone. Vous n'en avez peut-être pas besoin, mais mieux vaut les sauver que regretter de ne pas l'avoir fait.
2. [Mettez à jour la copie locale](Update-to-new-version-update-your-local-copy) des fichiers sources d'AAPS (Git -> Fetch et Git -> Pull)
3. [Constuire un apk signé](Update-to-new-version-build-the-signed-apk)
4. [Transférez l'apk généré](Building-APK-transfer-apk-to-smartphone) sur votre téléphone et installez le
5. [Vérifier la version](Update-to-new-version-check-aaps-version-on-phone) dans AAPS
6. En fonction de votre [source de glycémie](../Configuration/BG-Source.md) vérifiez bien [identify receiver](xdrip-identify-receiver) dans xDrip+ ou utilisez l'application [BYODA (Construisez votre propre application Dexcom)](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Dans le cas où vous auriez des problèmes, allez voir la page spécifique de [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exporter les paramètres

Allez voir la page [Exporter & importer les paramètres](ExportImportSettings-export-settings) si vous ne vous souvenez plus comment faire.

(Update-to-new-version-update-your-local-copy)=

## 2. Mettez à jour votre copie locale

À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AAPS sur votre disque dur et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).

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

(Update-to-new-version-build-the-signed-apk)=

## 3. Construisez l'APK signé

Votre code source est maintenant la version actuellement publiée. Il est maintenant temps de construire l'apk signé comme c'est décrit dans la section [Générer un APK signé](Building-APK-generate-signed-apk).

## 4. Transférez l'apk

Vous devez transférer l'apk sur votre téléphone pour pouvoir l'installer.

Consultez les instructions pour [Transférer le fichier APK sur le smartphone](Building-APK-transfer-apk-to-smartphone)

## 5. Installer l'apk

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Les explications peuvent être trouvées sur internet (par ex. [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)). Remarque : Si vous avez effectué la compilation avec le même fichier de clés existant dans Android Studio, vous n'avez pas besoin de supprimer l'application existante sur votre téléphone. Lorsque vous installez l'apk, suivez les instructions pour installer les mises à jour. Pour d'autres scénarios comme la création d'un nouveau fichier de clés dans Android Studio pour votre apk signé, vous devrez d'abord supprimer l'ancienne application avant d'installer l'apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Vérifier la version d'AAPS sur le téléphone

Après avoir installer le nouvel apk, vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos". Vous devriez voir la version actuelle en résultat.

![Version installée d'AAPS](../images/Update_VersionCheck282.png)

# Résolution de problèmes

Si quelque chose ne va pas, ne paniquez pas.

Respirez un bon coup !

Ensuite, consultez la page [de dépannage d'Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) pour voir si votre problème est déjà documenté !