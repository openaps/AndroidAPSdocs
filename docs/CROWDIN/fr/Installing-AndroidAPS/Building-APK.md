# Construire l'APK

## Construire vous-même au lieu de télécharger

**AAPS is not available as download due to regulation for medical devices. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Please use **[Android Studio Giraffe" (2022.3.1)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 32-bit systems](troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## Configuration recommandée de l'ordinateur pour construire un fichier apk

<table class="tg">
  
<thead>
  <tr>
    <th class="tg-baqh">OS (seulement 64 bits)</th>
    <th class="tg-baqh">Windows 8 ou supérieur</th>
    <th class="tg-baqh">Mac OS 10.14 ou supérieur</th>
    <th class="tg-baqh">N'importe quel Linux prend en charge Gnome, KDE, ou Unity DE;&nbsp;&nbsp;GNU C Library 2.31 ou ultérieure</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">CPU (seulement 64 bits)</td>
    <td class="tg-baqh">architecture processeur x86_64 ; Core Intel de 2ème génération ou plus récente, ou processeur AMD prenant en charge un <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor Windows</span></a></td>
    <td class="tg-baqh">Intel Core de 2ème génération ou plus récente, ou processeur AMD prenant en charge un <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">architecture du processeur x86_64, Intel Core de 2ème génération ou plus récent ou processeur AMD avec support pour la virtualisation AMD (AMD-V) et SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Disque</td>
    <td class="tg-baqh" colspan="3"><p align="center">Au moins 30 Go d'espace libre. Un SSD est recommandé.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Résolution</td>
    <td class="tg-baqh" colspan="3"><p align="center">Minimum 1280 x 800 <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">Internet</td>
    <td class="tg-baqh" colspan="3"><p align="center">Haut débit</td>
  </tr>
</tbody>
</table>

Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system. **Il est fortement recommandé d'utiliser un SSD (Solid State Disk) au lieu d'un HDD (Hard Disk Drive) car cela prend moins de temps lorsque vous construisez le fichier apk d'installation d'AAPS.** Recommandé signifie que c'est juste conseillé mais que ce n'est pas obligatoire. Cependant, vous pouvez toujours utiliser un disque dur lorsque vous construisez un fichier apk, mais notez que le processus de construction peut prendre beaucoup de temps à s'exécuter, si bien qu'une fois démarré, vous pouvez le laisser fonctionner sans surveillance.

* * *

### Cet article est divisé en deux parties.

* La partie "aperçu" indique les étapes nécessaires pour construire le fichier APK.
* Dans la partie "pas à pas", vous trouverez les captures d'écran d'une installation complète. Les versions d'Android Studio - l'environnement de développement logiciel que nous utiliserons pour construire l'APK - changent très rapidement. Les exemples ne seront donc pas identiques à votre installation, mais cela devrait vous donner un bon point de départ. Android Studio fonctionne sous Windows, Mac OS X et Linux et il peut y avoir de petites différences entre chaque plateforme. If you find that something important is wrong or missing, please inform the facebook group "AAPS users" or in the Discord chat [Android APS](https://discord.gg/4fQUWHZ4Mw) so that we can have a look at this.

## Aperçu

En général, les étapes nécessaires pour construire le fichier APK sont :

1. [Installer Git](../Installing-AndroidAPS/git-install.md)
2. [Installer Android Studio](Building-APK-install-android-studio)
3. [Définir le chemin d’accès git dans Android Studio](Building-APK-set-git-path-in-preferences)
4. [Download AAPS code](Building-APK-download-AAPS-code)
5. [Télécharger Android SDK](Building-APK-download-android-sdk)
6. [Générer l'application](Building-APK-generate-signed-apk) (générer un fichier apk signé)
7. [Transférer le fichier apk sur votre téléphone](Building-APK-transfer-apk-to-smartphone)
8. [Identifier le récepteur si vous utilisez xDrip+](xdrip-identify-receiver)

## Démarche pas à pas

Description détaillée des étapes nécessaires à la construction du fichier APK.

## Installer git (si vous ne l'avez pas)

Suivez la documentation sur la [page d'installation de git](../Installing-AndroidAPS/git-install.md).

(Building-APK-install-android-studio)=

## Installer Android Studio

Les captures d'écran suivantes ont été prises à partir de Android Studio Version Arctic Fox | 2020.3.1. Les écrans peuvent changer dans les versions futures d'Android Studio. Mais vous devriez y arriver. Vous pouvez demande de [l'aide auprès de la commauté](../Where-To-Go-For-Help/Connect-with-other-users.md).

Une des choses les plus importantes lors de l'installation d'Android Studio : **Soyez patient !** Au cours de l'installation et de la configuration, Android Studio télécharge beaucoup de choses ce qui prendra du temps.

Téléchargez [Android Studio ici](https://developer.android.com/studio/install.html) et installez le sur votre ordinateur.

Au premier démarrage, vous trouverez l'assistant d'installation :

Sélectionnez "Do not import settings" car vous n'avez pas eu d'utilisation préalable.

![Ne pas importer les paramètres](../images/studioSetup/01_ImportSettings.png)

Décidez si vous voulez partager les données avec Google ou non.

![Partager des données avec Google](../images/studioSetup/02_DataSharing.png)

Dans l'écran suivant, cliquez sur "Next".

![Écran d'accueil](../images/studioSetup/03_Welcome.png)

Sélectionnez l'installation "Standard" et cliquez sur "Next".

![Installation standard](../images/studioSetup/04_InstallType.png)

Sélectionnez le thème de l'interface utilisateur que vous souhaitez (dans ce manuel, nous avons utilisé "Light"). Cliquez ensuite sur "Next".

> ***Remarque :*** Ce n'est que le modèle de couleurs. Vous pouvez choisir n'importe quel type (par ex. "Darcula" pour le mode sombre). Cette sélection n'a aucune influence sur la construction de l'APK, mais les captures d'écran suivantes peuvent être différentes.

![Couleur de l'interface](../images/studioSetup/05_UITheme.png)

Click "Next" on the "Verify Settings" dialog.

![Vérifiez les paramètres](../images/studioSetup/06_Overview.png)

Click on all three license agreement parts and select "Agree". When you have agreed to all, the "Finish" button will be enabled and you can "Finish".

    ![Agree license agreements](../images/studioSetup/07_LicenseAgreement.png)
    

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/studioSetup/08_Downloading.png)

(Building-APK-download-AAPS-code)=

## Download AAPS code

* On the Android Studio welcome screen select "Projects" (1) on the left and then "Get from VCS" (2).
    
    ![Android Studio wizard](../images/studioSetup/20_ProjectVCS.png)
    
    * If you already opened Android Studio and do not see the welcome screen anymore select File (1) > New (2) > Project from Version Control... (3)
        
        ![Check out project from version control within Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * We will now tell Android Studio were to get the code from:
    
    * Make sure you have selected "Repository URL" on the left (1).
    
    * Check if "Git" is selected as version control (2).
    * Copy and paste the URL ```https://github.com/nightscout/AndroidAPS``` to the main AAPS repository into the URL textbox (3).
    * Choose the directory where you want to save the cloned code (4).
        
        ![Clone Git](../images/studioSetup/21_CloneURL.png)

* Click button "Clone" (5).
    
    ![Clone repository](../images/studioSetup/22_Cloning.png)

* Do not click "Background" while repository is cloned!

* After the repository is cloned successfully, Android Studio will open the cloned project.

* You will be asked whether you want to trust the project. Click on "Trust project"!
    
    ![Trust project](../images/studioSetup/23_TrustProject.png)

* In the status bar at the bottom you will see the information that Android Studio is running background tasks.
    
    ![Background tasks](../images/studioSetup/24_GradleSyncRunning.png)

* Windows only: Grant access if your firewall is asking for permission.
    
    ![Firewall permission java](../images/AndroidStudio361_18.png)

* Once the background tasks are finished you will probably see an error saying that errors occurred (1) or (2) or (3).
    
    ![SDK licence](../images/studioSetup/25_SyncFailed.png)
    
    Don't worry, this will be solved soon!

(Building-APK-set-git-path-in-preferences)=

## Set git path in preferences

Make sure [git is installed](../Installing-AndroidAPS/git-install.md) on your computer and you have restarted your computer since installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.md).

* In the menu, go to File (1) > Settings (2) (or Android Studio > Preferences on Mac).
    
    ![Ouvrir les paramètres](../images/studioSetup/30_Settings.png)

* Double-click "Version Control" (1) to open the sub-menu.

* Click Git (2).
* Make sure update method "Merge" (3) is selected.
* Check if Android Studio can locate path to git.exe automatically by clicking the button "Test" (4).
    
    ![Android Studio settings](../images/studioSetup/11_GitPath.png)

* If automatic setting is successful git version will be displayed next to the path.
    
    ![Git version displayed](../images/studioSetup/12_GitVersion.png)

* Eventually git.exe cannot be found automatically or the Test will result in an error (1):
    
    ![Git not found](../images/studioSetup/13_GitVersionError.png)
    
    In this case click on the folder icon (2).

* Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find "git.exe" if you are unsure where git has been installed. You are looking for a file named "git.exe", located in **\bin** folder.

* Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3) and click "OK" (4).
    
    ![Select git manually](../images/studioSetup/14_GitManualSelection.png)

* Check your selected git path again with the "Test" button as described above.

* When the git version is displayed next to the path (see screenshot above), close settings window by clicking "OK" button (5).

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>.
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

(Building-APK-download-android-sdk)=

## Télécharger Android SDK

* In the menu, go to File (1) > Settings (2) (or Android Studio > Preferences on Mac).
    
    ![Ouvrir les paramètres](../images/studioSetup/30_Settings.png)

* Double-click on Languages & Frameworks to open its submenu (1).

* Select Android SDK (2).
* Tick the box left of "Android 9.0 (Pie)" (3) (API Level 28).
    
    ![Paramètres SDK](../images/studioSetup/31_AndroidSDK.png)

* Confirmez les modifications en cliquant sur OK.
    
    ![Confirmer les modifications SDK](../images/studioSetup/32_ConfirmSDK.png)

* Wait until the SDK download and installation is finished.
    
    ![Wait during SDK installation](../images/studioSetup/34_DownloadSDK.png)

* When SDK installation is completed the "Finish" button will turn blue. Click this button.
    
    ![Finish SDK installation](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio might recommend to update the gradle system. **Never update gradle!** This will lead to difficulties!

* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "upgrade" (1).
    
    ![Pas de mise à jour de Gradle](../images/studioSetup/36_GradleUpdateRequest.png)

* In the dialog box the select "Don't remind me again for this project" (2).
    
    ![Pas de mise à jour de Gradle](../images/studioSetup/37_GradleUpdateDeny.png)

* Restart Android Studio before you continue.

(Building-APK-generate-signed-apk)=

## Générer un APK signé

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Après le démarrage d'Android Studio, attendez que toutes les tâches en arrière-plan soient terminées.
    
    ![Attendre les tâches en arrière-plan](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Avertissement :*** Si des erreurs se produisent, ne continuez pas avec les étapes suivantes. \ Consulter la [section dépannage](../Installing-AndroidAPS/troubleshooting_androidstudio) pour les problèmes connus !
    
    ![Erreur de synchronisation Gradle](../images/studioSetup/41_GradleSyncError.png)

* Cliquez sur "Build" (1) dans la barre de menus et sélectionnez "Generate Signed Bundle / APK ..." (2).
    
    ![Génération de l'apk](../images/studioSetup/42_MenuBuild.png)

* Sélectionnez "APK" (1) au lieu de "Android App Bundle" et cliquez sur "Next" (2).
    
    ![APK au lieu du bundle](../images/studioSetup/43_Apk.png)

* Make sure that module is set to "AndroidAPS.app" (1).

* Cliquez sur "Create new..." (2) pour commencer la création de votre fichier de clés.
    
    ***Remarque :*** Un fichier de clés dans ce cas n'est rien de plus qu'un fichier dans lequel les informations de signature sont stockées. Il est crypté et les informations sont sécurisées avec des mots de passe.
    
    ![Créer le fichier de clés](../images/studioSetup/44_KeystoreNew.png)

* Cliquez sur le symbole dossier pour sélectionner un chemin d'accès sur votre ordinateur pour votre fichier de clés.
    
    ![Créer le fichier de clés](../images/studioSetup/45_KeystoreDialog.png)

* Sélectionnez le répertoire dans lequel votre fichier de clés doit être sauvé (1).
    
    ![Créer le fichier de clés](../images/studioSetup/46_KeystorePath.png)
    
    ***Attention : Ne pas le mettre dans le même répertoire que celui du projet. Vous devez utiliser un dossier différent !*** Un bon emplacement peut être votre répertoire d'accueil.

* Tapez un nom de fichier pour votre fichier de clés (2) et confirmez avec "OK" (3).

* Entrez (2) et confirmez (3) le mot de passe de votre fichier de clés.![Sélectionner le chemin d'accès du fichier de clés](../images/studioSetup/47_KeystoreDialog.png)
    
    ***Remarque :*** Les mots de passe pour le stockage de clés et la clé ne doivent pas être très sophistiqués. Assurez vous de bien vous en souvenir ou notez le dans un endroit sûr. Si plus tard vous avez oublié vos mots de passe, allez voir la page [Dépannages d'Android Studio - Certificats perdus](troubleshooting_androidstudio-lost-keystore).

* Entrez un alias (4) pour votre clé. Choisissez ce que vous voulez.

* Entrez (5) et confirmez (6) le mot de passe de votre clé.

* La validité (7) est de 25 ans par défaut. Vous n'avez pas à modifier la valeur par défaut.

* Le prénom et le nom sont obligatoires (8). Toutes les autres informations sont facultatives.

* Cliquez sur "OK" (9) lorsque vous avez terminé.

* Assurez-vous que la case permettant de mémoriser les mots de passe est cochée (1). So you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version).

* Cliquez sur "Next" (2).
    
    ![Mémoriser les mots de passe](../images/studioSetup/48_KeystoreSave.png)

* Sélectionnez la variante de compilation "fullRelease" (1) et appuyez sur "Finish".
    
    ![Sélectionnez la variante de build](../images/studioSetup/49_BuildVariant.png)

* Android Studio affichera "Gradle Build running" en bas de page. Cela prend un certain temps, selon votre ordinateur et votre connexion Internet. **Soyez patient !**
    
    ![Exécution Gradle](../images/studioSetup/50_GradleRunning.png)

* Android Studio affiche l'information "Generate Signed APK" quand la génération est terminée.
    
    ![Compilation terminée](../images/studioSetup/51_BuildFinished.png)

* Dans le cas ou la génération n'a pas réussie, référez vous à la [section dépannage](../Installing-AndroidAPS/troubleshooting_androidstudio).

* Cliquez sur la notification pour la développer.

* Cliquez sur le lien "locate".
    
    ![Localiser le fichier compilé](../images/studioSetup/52_BuildLocate.png)
    
    * Si la notification est supprimée, vous pouvez toujours ouvrir le "Journal des événements" et sélectionner le même lien ici.![Génération réussie - journal des événements](../images/studioSetup/53_EventLog.png)

* Votre gestionnaire de fichiers/explorateur va s'ouvrir. Naviguez vers le répertoire "full" (1) > "release" (2).
    
    ![Emplacement du fichier apk](../images/studioSetup/54_APKlocation.png)

* Le fichier que vous cherchez est "app-full-release.apk" (3).

(Building-APK-transfer-apk-to-smartphone)=

## Transférer le fichier APK sur le smartphone

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## Résolution de problèmes

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).