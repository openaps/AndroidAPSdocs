# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir [FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Important notes

<font color="#FF0000"> <b>Remarque importante : A partir de la version 2.3, vous devez utiliser git pour mettre à jour. La mise à jour via le fichier zip ne fonctionne plus.</font></b>.

***Remarque*** : Utilisez [Android Studio Version 3.5.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

## Installer git (si vous ne l'avez pas)

### Windows

* N’importe quelle version de git devrait fonctionner. Par exemple <https://git-scm.com/download/win>
* Assurez-vous de noter le chemin d’installation. Vous en aurez besoin dans la prochaine étape.
  
  ![Chemin d'installation Git](../images/Update_GitPath.png)

* Redémarrez votre PC pour mettre à jour l'environnement système.

* Let Studio know where is git.exe located: File - Settings
  
  ![Android Studio - ouvrir les paramètres](../images/Update_GitSettings1.png)

* In the next window: Version Control - Git

* Choisissez le chemin correct : .../Git<font color="#FF0000"><b>/bin</b></font>

* Make sure update method "Merge" is selected.
  
  ![Android Studio - chemin GIT](../images/Update_GitSettings2a.png)

### Mac

* N’importe quelle version de git devrait fonctionner. Par exemple <https://git-scm.com/download/mac>
* Utilisez homebrew pour installer git: ```$ brew install git```.
* Pour plus de détails sur l'installation de git, voir la [documentation officielle](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où: on peut y accéder ici : Android Studio - Preferences.

## Mettez à jour votre copie locale

* Cliquez sur : VCS->Git->Fetch
  
  ![Android Studio - GIT - Fetch](../images/Update_Fetch.png)

## Sélectionnez une branche

* Si vous souhaitez changer de branche, sélectionnez une autre branche : master (dernière version) ou une autre version (merci de voir ci-dessous)
  
  ![](../images/UpdateAAPS1.png)

puis sortir (checkout) (vous pouvez utiliser « Checkout comme nouvelle branche » si « Checkout » n’est pas disponible.)

     ![](../images/UpdateAAPS2.png)
    

## Mise à jour de la branche depuis Github

* Appuyez sur Ctrl + T, sélectionnez la méthode Merge (fusion) et appuyez sur OK
  
  ![](../images/merge.png)

On the tray you'll see green message about updated project

## Générer un APK signé

<!--- Text is maintained in page building-apk.md ---> Dans le menu , sélectionnez "Build" puis "Generate Signed Bundle / APK...". (Le menu d'Android Studio a changé en septembre 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez le lien [ici](https://developer.android.com/studio/publish/app-signing.html#generate-key). La sécurité est un sujet important et complexe et vous n'avez pas besoin de cela maintenant.

![Capture d'écran 39a](../images/Installation_Screenshot_39a.PNG)

Dans la boite de dialogue suivante, sélectionnez "APK" à la place de "Android App Bundle" et cliquez sur le bouton "Next".

![Capture d'écran 39b](../images/Installation_Screenshot_39b.PNG)

Sélectionnez "app" et cliquez sur "Next".

![Capture d'écran 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Sélectionnez 'Remember passwords'.

Puis cliquez sur next.

![Key store path](../images/KeystorePathUpdate.PNG)

Sélectionnez "fullRelease" pour Buid Variants. Sélectionnez "V1 (Jar Signature)" (V2 est optionnel) et cliquez sur "Finish". Les informations suivantes peuvent être importantes pour une utilisation ultérieure.

* 'Release' devrait être votre choix par défaut pour "Build Variants", 'Debug' est juste pour les personnes qui codent.
* Sélectionnez le type de génération que vous souhaitez complier. 
  * full (c'est à dire recommandations automatiquement adoptées en boucle fermée)
  * openloop (c'est à dire les recommandations données à l'utilisateur commandes manuelles)
  * pumpcontrol (c'est-à-dire télécommande pour la pompe, pas pour le bouclage)
  * nsclient (c'est-à-dire que les données de bouclage d'un autre utilisateur sont affichées et que des entrées de careportal peuvent être ajoutées)

![Capture d'écran 44](../images/Installation_Screenshot_44.png)

Dans le journal des événements, vous voyez que l'APK signé a été généré avec succès.

![Capture d'écran 45](../images/Installation_Screenshot_45.png)

Cliquez sur le lien "locate" dans le journal des événements.

![Capture d'écran 46](../images/Installation_Screenshot_46.png)

## Transférer le fichier APK sur le smartphone

<!--- Text is maintained in page building-apk.md ---> Une fenêtre du gestionnaire de fichiers s'ouvre. Comme j'utilise Linux, il se peut que ce soit un peu différent sur votre système. Sur Windows, il y aura l'Explorateur de fichiers et sur Mac OS X le Finder. Vous devez voir le répertoire avec le fichier APK généré. Malheureusement, c'est le mauvais endroit car "wear-release.apk" n'est pas l'application signée "app" APK que nous recherchons.

![Capture d'écran 47](../images/Installation_Screenshot_47.png)

Veuillez sélectionner le répertoire AndroidAPS/app/full/release pour trouver le fichier "app-full-release.apk". Transférez ce fichier sur votre smartphone Android. Vous pouvez le faire à votre convenance, via le Bluetooth, en téléchageant sur le cloud, en connectant le smartphone à l'ordinateur avec un câble USB ou en utilisant la messagerie. J'utilise Gmail dans cet exemple car c'est assez simple pour moi. Je mentionne cela parce que pour installer l'application auto-signée, nous devons permettre à Android de faire cette installation sur notre smartphone même si ce fichier est reçu via Gmail qui est normalement interdit. Si vous utilisez une autre solution, veuillez procéder en conséquence.

![Capture d'écran 48](../images/Installation_Screenshot_48.png)

Dans les paramètres de sécurité votre smartphone, il y a un paramètre "Sources inconnues" qu'il faut autoriser pour donner le droit d'installer les fichiers APK reçus par Gmail ou copiés manuellement sur le téléphone.

Autorisez "Sources inconnues". Après l'installation, vous pouvez le désactiver à nouveau.

![Installation à partir de sources inconnues](../images/Installation_Screenshot_49-50.png)

La dernière étape consiste à cliquer sur le fichier APK obtenu via Gmail et installer l'application. Si l'APK ne s'installe pas et que vous avez une version plus ancienne d'AndroidAPS sur votre téléphone (signé avec une autre clé), vous devrez au préalable la désinstaller. N'oubliez pas dans ce cas d'exporter vos paramètres auparavant !

Yes, vous l'avez et pouvez maintenant commencer à configurer AndroidAPS pour votre utilisation (MGC, pompe à insuline), etc.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

# Troubleshooting

## Kotlin compiler warning

If build completed successfully but you get Kotlin compiler warnings then just ignore these warnings.

App was build successfully and can be transferred to phone.

![ignore Kotline compiler warning](../images/GIT_WarningIgnore.PNG)

## Could not download… / Offline Work

If you get a failure message like this

![Warning could not download](../images/GIT_Offline1.jpg)

make sure that ‘Offline work’ is disabled.

File -> Settings

![Settings offline work](../images/GIT_Offline2.jpg)

## Error: buildOutput.apkData must not be null

Sometimes you might get an error message when building the apk saying

      `Errors while building APK.`
    
      `Cause: buildOutput.apkData must not be null`
    

This is a known bug in Android Studio 3.5 and will probably not be fixed before Android Studio 3.6. Three options:

     1. Manually delete the three build folders (normal "build", build folder in "app" and build folder in "wear") and generate signed apk again.
     2. Set destination folder to project folder instead of app folder as described in [this video](https://www.youtube.com/watch?v=BWUFWzG-kag).
     3. Change apk destination folder (different location).
    

## No CGM data when using xDrip

[Identify receiver](../Configuration/xdrip#identify-receiver)

## Uncommitted changes

If you receive failure message like

![Failure uncommitted changes](../images/GIT_TerminalCheckOut0.PNG)

### Option 1

* In Android Studio select VCS -> GIT -> Reset HEAD ![Reset HEAD](../images/GIT_TerminalCheckOut3.PNG)

### Option 2

* Copy ‘git checkout --’ to clipboard (without quote signs)
* Switch to Terminal in Android Studio (lower left side of Android Studio window) ![Android Studio Terminal](../images/GIT_TerminalCheckOut1.PNG)

* Paste copied text and press return ![GIT checkout success](../images/GIT_TerminalCheckOut2.jpg)

## App not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* Make sure you have transferred the “app-full-release.apk” file to your phone.
* If "App not installed" is displayed on your phone follow these steps: 
  1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
  2. Uninstall AAPS on your phone.
  3. Enable airplane mode & turn off bluetooth.
  4. Install new version (“app-full-release.apk”)
  5. [Import settings](../Usage/Objectives#export-import-settings)
  6. Turn bluetooth back on and disable airplane mode

## App installed but old version

If you build the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed the merging step in the [update manual](../Installing-AndroidAPS/Update-to-new-version#updating-branch-from-github).

## None of the above worked

If non of the above tips helped you might consider building the app from scratch:

1. [Export settings](../Usage/Objectives#export-import-settings) (in AAPS version already installed on your phone)
2. Have your key password and key store password ready In case you have forgotten passwords you can try to find them in project files as described [here](https://youtu.be/nS3wxnLgZOo).
3.     Note down the path to your key store
      In Android Studio Build -> Generate Signed APK
      ![Key store path](../images/KeystorePath.PNG)
      
  
  4. Build app from scratch as described [here](../Installing-AndroidAPS/Building-APK#download-code-and-additional-components). Use existing key and key store.
4. When you have build the APK successfully delete the exiting app on your phone, transfer the new apk to your phone and install.
5. [Import settings](../Usage/Objectives#export-import-settings)

## Worst case scenario

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

Make sure to uninstall all files associated with Android Studio. Manuals can be found online i.e. <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>.

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK#install-android-studio) and **do not update gradle**.