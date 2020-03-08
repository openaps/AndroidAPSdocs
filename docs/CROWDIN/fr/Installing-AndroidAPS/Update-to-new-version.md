# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Veuillez mettre à jour dès que possible quand une nouvelle version est disponible. Vous recevrez une [information dans la page d'accueil AndroidAPS](../Installing-AndroidAPS/Releasenotes.html#release-notes) à propos de la nouvelle version.
* À partir de la version 2.3, vous devez utiliser git pour la mise à jour. La mise à jour via le fichier zip ne fonctionne plus.
* Utilisez [Android Studio Version 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.
* [Les systèmes d'exploitation Windows 10 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#impossible-de-demarrer-le-processus-daemon) ne sont pas pris en charge par Android Studio 3.6.1.
* Si vous utilisez xDrip+ assurez vous de bien renseigner [identify receiver](../Configuration/xdrip#identify-receiver).
* Si vous utilisez Dexcom G6 avec l'application [Dexcom patchée](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app), vous aurez besoin de la version du [dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Accès rapide aux utilisateurs expérimentés

Veuillez sauter ce paragraphe si vous mettez à jour AAPS pour la première fois. L'accès rapide est destiné aux utilisateurs expérimentés. Votre étape suivante serait [d'installer git](../Installing-AndroidAPS/git-install.rst) si vous ne l'avez pas déjà.

Si vous avez déjà mis à jour AAPS dans les versions précédentes et que vous utilisez un PC, vous pouvez faire une mise à jour en quatre étapes simples :

1. [Exportez vos paramètres](../Usage/ExportImportSettings#how-to-export-settings) à partir de la version AAPS existante sur votre téléphone pour être à jour côté sauvegardes
2. [Mettez à jour la copie locale](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS -> Git -> Pull)
3. [Générez un APK signé](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Sélectionnez 'app' au lieu de 'wear' au passage !)
4. En fonction de votre [source de glycémie](../Configuration/BG-Source.rst) vérifiez bien [identify receiver](../Configuration/xdrip#identify-receiver) dans xDrip+ ou utilisez l'application Dexcom patchée à partir du [dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Installer git (si vous ne l'avez pas)

Suivez le manuel sur la [page d'installation de git](../Installing-AndroidAPS/git-install.rst).

## Mettez à jour votre copie locale

* Cliquez sur : VCS -> Git -> Pull
    
    ![Android Studio - GIT - Pull](../images/AndroidStudio361_Update01.png)

* Cliquez sur Pull (pas de changements dans la boîte de dialogue)
    
    ![Android Studio - GIT - Pull 2](../images/AndroidStudio361_Update02.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## Générer un APK signé

<!--- Text is maintained in page building-apk.md --->

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app".
* Select your key store path by clicking on "Choose existing...".
* Enter your passwords for key store and key.
* If the box to remember passwords is checked you don't have to enter them. In case the box was not checked during last build and you cannot remember the passwords refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Click "Next".

![Key store](../images/AndroidStudio361_Update05.png)

* Select build variant "fullRelease" (1.). 
* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)

![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.
* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".

![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".

![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.

![File location apk](../images/AndroidStudio361_35.png)

## Transférer le fichier APK sur le smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Vérifier la version d'AAPS sur le téléphone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## Dépannage

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).