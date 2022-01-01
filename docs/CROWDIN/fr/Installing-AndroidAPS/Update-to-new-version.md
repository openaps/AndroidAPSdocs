# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. Vous recevrez une [information dans la page d'accueil AndroidAPS](../Installing-AndroidAPS/Releasenotes#notes-de-version) à propos de la nouvelle version.
* À partir de la version 2.3, vous devez utiliser git pour la mise à jour. La mise à jour via le fichier zip ne fonctionne plus.
* À partir de la version 2.7, l'emplacement du code a été changé pou <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Si vous utilisez xDrip+ assurez vous de bien renseigner [identify receiver](../Configuration/xdrip#identify-receiver).
* Vous pouvez également utiliser Dexcom G6 avec la ['BYODA (Construisez votre propre application Dexcom)'](../Hardware/DexcomG6.html#si-vous-utilisez-g6-avec-votre-propre-application-dexcom).

## Accès rapide aux utilisateurs expérimentés

Veuillez sauter ce paragraphe si vous mettez à jour AAPS pour la première fois. L'accès rapide est destiné aux utilisateurs expérimentés. Votre étape suivante serait [d'installer git](../Installing-AndroidAPS/git-install.rst) si vous ne l'avez pas déjà.

Si vous avez déjà mis à jour AAPS dans les versions précédentes et que vous utilisez un PC, vous pouvez faire une mise à jour en quatre étapes simples :

1. [Exporter les paramètres](../Usage/ExportImportSettings#exporter-les-parametres) à partir de la version AAPS existante sur votre téléphone pour être à jour côté sauvegardes
2. [Mettez à jour la copie locale](../Installing-AndroidAPS/Update-to-new-version#mettez-a-jour-votre-copie-locale) (VCS -> Git -> Pull)
3. [Générez un APK signé](../Installing-AndroidAPS/Update-to-new-version#generer-un-apk-signe) (Sélectionnez 'app' au lieu de 'wear' au passage !)
4. En fonction de votre [source de glycémie](../Configuration/BG-Source.rst) vérifiez bien [identify receiver](../Configuration/xdrip#identifier-le-recepteur) dans xDrip+ ou utilisez l'application [BYODA (Construisez votre propre application Dexcom)](../Hardware/DexcomG6.html#si-vous-utilisez-g6-avec-votre-propre-application-dexcom).

## Installer git (si vous ne l'avez pas)

Suivez le manuel sur la [page d'installation de git](../Installing-AndroidAPS/git-install.rst).

## Mettez à jour votre copie locale

* À partir de la version 2.7, l'emplacement du code a été changé pou <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md). If you have already changed the URL or update from version 2.8.x, follow these steps:

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

* Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](../Installing-AndroidAPS/Building-APK.html#generate-signed-apk).

## Check AAPS version on phone

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About.

![AAPS version installed](../images/Update_VersionCheck282.png)

## Résolution de problèmes

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).