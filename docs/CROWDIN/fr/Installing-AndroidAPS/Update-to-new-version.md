# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. Vous recevrez une [information dans la page d'accueil AndroidAPS](../Installing-AndroidAPS/Releasenotes#notes-de-version) à propos de la nouvelle version.
* À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Les systèmes d'exploitation Windows 10 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio 2020.3.1.
* Make sure you read the [Release Notes](../Installing-AndroidAPS/Releasenotes) for the current version

## Overview for updating your AndroidAPS version

1. [Exporter les paramètres](../Usage/ExportImportSettings#exporter-les-parametres) à partir de la version AAPS existante sur votre téléphone. Vous n'en avez peut-être pas besoin, mais mieux vaut les sauver que regretter de ne pas l'avoir fait.
2. [Mettez à jour la copie locale](../Installing-AndroidAPS/Update-to-new-version#mettez-a-jour-votre-copie-locale) des fichiers sources d'AndroidAPS (Git -> Fetch et Git -> Pull)
3. [Générer un APK signé](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk)
4. [Transférez l'apk généré](../Installing-AndroidAPS/Building-APK#transferer-le-fichier-apk-sur-le-smartphone) sur votre téléphone et installez le
5. [Vérifier la version](#verifier-la-version-d-aaps-sur-le-telephone) dans AndroidAPS
6. En fonction de votre [source de glycémie](../Configuration/BG-Source.rst) vérifiez bien [identify receiver](../Configuration/xdrip#identifier-le-recepteur) dans xDrip+ ou utilisez l'application [BYODA (Construisez votre propre application Dexcom)](../Hardware/DexcomG6.html#si-vous-utilisez-g6-avec-votre-propre-application-dexcom).

Dans le cas où vous auriez des problèmes, allez voir la page spécifique de [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).

## 1. Exporter les paramètres

Allez voir la page [Exporter & importer les paramètres](../Usage/ExportImportSettings#exporter-les-parametres) si vous ne vous souvenez plus comment faire.

## 2. Mettez à jour votre copie locale

À partir de la version 2.7, l'emplacement du code a été déplacé vers <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AndroidAPS project with Android Studio. You might need to select your project. (Double) click on the AndroidAPS project.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message. Note: The files that were updated may vary! This is not an indication
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running a couple of seconds to download some dependencies. Wait until it is finished.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

## 3. Build the Signed APK

* Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK#generate-signed-apk).

## 4. Transfer the apk

You need to transfer the apk to your phone so you can install it. See the instructions for [Transfer APK to smartphone](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)

## 5. Vérifier la version d'AAPS sur le téléphone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![Version installée d'AAPS](../images/Update_VersionCheck282.png)

# Résolution de problèmes

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!