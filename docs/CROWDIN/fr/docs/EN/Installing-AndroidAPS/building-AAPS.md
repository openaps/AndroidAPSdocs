# Compilation d'AAPS

## Construire vous-même au lieu de télécharger

**L'application AAPS (le fichier apk) n'est pas disponible en téléchargement, en raison de la réglementation concernant les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à quelqu'un d'autre !**

Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## Prérequis matériels et logiciels pour la compilation de AAPS

- Please use the **[Android Studio version called at least Hedgehog (2023.1.1) or one more recent like Iguana, Jellyfish, Koala or Ladybug](https://developer.android.com/studio/)** to build the apk. Older versions of Android Studio need to be updated first!
- Les systèmes [Windows 32-bit systems](troubleshooting_androidstudio-unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio. Veuillez garder à l'esprit qu'à la fois **le processeur (CPU 64 bits) et le système d'exploitation 64 bits sont des conditions obligatoires**. Si votre système NE satisfait PAS à cette condition, vous devez changer le matériel ou le système d'exploitation qui pose problème, ou tout le système.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**Il est fortement recommandé (non obligatoire) d'utiliser un disque dur SSD au lieu d'un HDD car cela prendra moins de temps lorsque vous compilerez le fichier apk de AAPS.**  Vous pouvez malgré tout utiliser un disque HDD lorsque vous compilez le fichier apk de **AAPS**. Si vous le faites, le processus de compilation peut prendre beaucoup de temps avant de se terminer, mais une fois lancé, vous pouvez le laisser tourner sans surveillance.

## Aide et support pour le processus de compilation

Si vous rencontrez des difficultés dans le processus de compilation de l'application **AAPS**, il existe une page dédiée au [**dépannage d'Android Studio**](../Installing-AndroidAPS/troubleshooting_androidstudio), veuillez la consulter en premier lieu.

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). Si vous voulez changer quelque chose vous-même (mettre à jour les captures d'écran _etc_), veuillez soumettre un [pull request (PR)](../make-a-PR.md).

## Guide pas à pas pour compiler l'application AAPS

```{admonition} WARNING
:class: warning
If you have built AAPS before, you don't need to take all the following steps again.
Please jump directly to the [update guide](../Installing-AndroidAPS/Update-to-new-version)!
```

Les grandes étapes pour construire le fichier apk **AAPS** sont les suivantes :

4.1 [Installer Git](Install-Git)

4.2 [Installer Android Studio](Building-APK-install-android-studio)

4.3 [Télécharger le code source AAPS](Building-APK-download-AAPS-code)

4.4. [Définir le chemin Git dans les préférences d'Android Studio](Building-APK-set-git-path-in-preferences)

4.5. [Compiler l'APK AAPS signé](Building-APK-generate-signed-apk)

Dans ce guide, vous trouverez des captures d'écran de la compilation du fichier apk de **AAPS** à titre d'_exemple_. Étant donné que  **Android Studio** - le logiciel que nous utilisons pour compiler l'apk **AAPS** - est régulièrement mis à jour, ces captures d'écran peuvent ne pas être identiques à votre installation, mais vous devriez toujours arriver à les suivre.

Puisque **Android Studio** fonctionne sous Windows, Mac OS X et Linux, il peut également y avoir de légères différences dans les étapes en fonction de la plate-forme.
Veuillez noter qu'**Android Studio** n'est pas disponible en français, toutes les instructions relatives au logiciel seront données en anglais et français.

(Install-Git)=

### Installer Git (si ce n'est déjà fait)

```{admonition} Why Git? 
:class: dropdown

Git is known as a “_Versioning Control System_” (VCS).\
Git is a program that allows you to track changes in code and to collaborate with others. You will use Git to make a copy of the **AAPS** source code from the GitHub website to your local computer. Then, you will use Git on your computer to build the **AAPS** application (apk). 
```

#### Étapes pour l'installation de Git

1. Vérifiez que vous n'avez pas déjà installé **Git**. Pour cela, tapez "git" dans la barre de recherche de Windows : si vous voyez **"Git bash"** ou **Git-autre chose**, c'est qu'il est déjà installé. Dans ce cas, vous pouvez passer directement à [l'installation d'Android Studio](Building-APK-install-android-studio) :

![Git installé](../images/Building-the-App/001_check_git_installed.png)

2. If you don’t have Git installed, download and install the latest version for your system from the "Download" section on [**here**](https://git-scm.com/downloads). N'importe quelle version récente de Git devrait fonctionner, sélectionnez la version correspondant à votre système d'exploitation : Mac, Windows ou Linux.

**Note pour les utilisateurs de Mac :** la page Web de Git vous proposera également d'installer un programme supplémentaire appelé "homebrew" pour faciliter l'installation. Si vous installez Git via homebrew, vous n'avez pas besoin de modifier la configuration.

(Make_a_note_of_Git_path)=

- Pendant l'installation, lorsque vous êtes invité à "sélectionner l'emplacement de destination", notez _où_ Git va s'installer (le "**chemin d'installation**"), vous en aurez besoin plus tard. Ca devrait ressembler à "C:\Program Files\Git\cmd\git.exe"

- Au fur et à mesure que vous avancez sur les différentes étapes de l'installation de Git, validez simplement en gardant les options par défaut.

- Après l'installation, si vous avez oublié de noter l'endroit où Git a été installé, vous pouvez le trouver comme suit : tapez "git" dans la barre de recherche du PC, cliquez avec le bouton droit sur "Git bash", sélectionnez "Ouvrir l'emplacement du fichier", survolez l'icône "Git bash" avec votre souris, ce qui vous indiquera alors où il est installé.

- Redémarrez votre ordinateur avant de continuer.

(Building-APK-install-android-studio)=

### Installer Android Studio

- \*\*Vous devez rester connecté à internet pour les prochaines étapes, étant donné qu'Android Studio va télécharger différentes mises à jour \*\*

```{admonition} What is Android Studio?
:class: dropdown
Android Studio is a program which runs on your computer. It allows you to download source code from the internet (using Git) and build smartphone (and smartwatch) apps. You cannot "break" a current, looping version of **AAPS** which you might have running on a smartphone by building a new or updated app on your PC with Android Studio, these are totally separate processes. 
```

Une des choses les plus importantes lors de l'installation d'Android Studio : **Soyez patient(e)** ! Lors du processus d'installation et de configuration, Android Studio télécharge beaucoup de choses, ce qui prendra du temps.

Any version of Android Studio like version Hedgehog or any newer is suitable. With version Ladybug, you might need to do one extra step, but it's doable!

```{admonition} Different UI
:class: warning
Import note: Android Studio changed its UI during the last releases. This guide will show you the steps with the *new UI* in "Ladybug". If you still use the older UI, you might want to change Android Studio to the new UI first following [these instructions](NewUI).
```

Download the [current version of Android Studio](https://developer.android.com/studio) or an older version from the [**Archives**](https://developer.android.com/studio/archive) and accept the download agreements.

![DownloadAndroidStudio](../images/Building-the-App/010_DownloadLadybug.png)

Once the download is finished, start the downloaded application to install it on your computer.
You might need to accept/confirm some warnings about downloaded apps from Windows!

Install Android Studio by clicking "Next", as shown in the following screenshots. You do **not** need to change any settings!

![Welcome\_to\_Android\_Studio\_Setup](../images/Building-the-App/011_InstallLadybug.png)

![Choose\_components](../images/Building-the-App/012_InstallLadybug.png)

![Configuration\_Settings](../images/Building-the-App/013_InstallLadybug.png)

Now click on "Install":

![Choose\_start\_Menu\_Folder](../images/Building-the-App/014_InstallLadybug.png)

Once it's completed, press "Next"

![Installation\_Complete](../images/Building-the-App/015_InstallLadybug.png)

In the last step, click on "Finished" to start Android Studio for the first time.

![Completing\_Android\_Studio\_Setup](../images/Building-the-App/016_InstallLadybug.png)

You will be asked if you want to help improve Android Studio. Choose the option to your liking, it won't make any difference for the following steps.

![Help\_improve\_Android\_Studio](../images/Building-the-App/020_ImproveAS.png)

The welcome screen greets you to the installation of Android Studio. Press "Next".

![Welcome](../images/Building-the-App/022_WelcomeAndroidStudioInstallation.png)

Select "Standard" as installation type.

![Install\_Type](../images/Building-the-App/023_DefaultInstallation.png)

Verify the settings by clicking "Next" again.

![Verify\_Settigns](../images/Building-the-App/024_DefaultInstallation.png)

Now you need to accept the license agreements. You have two sections (1 + 3) on the left side which you have to select one after the other and each select "Accept" (2 + 4) on the right side.

Then the "Finish" (5) button can be clicked.

![License\_Agreement](../images/Building-the-App/025_LicenseAgreement.png)

Some Android packages will now be downloaded and installed. Be patient and wait.

When it's finished, you will find the following screen where you can select "Finish" again.

![Downloading\_Components](../images/Building-the-App/026_DownloadFinished.png)

You will now see the Welcome screen of Android Studio.

![Welcome\_to\_Android\_Studio](../images/Building-the-App/031_WelcomeAndroidStudio.png)

(Building-APK-download-AAPS-code)=

### Télécharger le code source AAPS

```{admonition} Why can it take a long time to download the AAPS code?
:class: dropdown

The first time **AAPS** is downloaded, Android Studio will connect over the internet to the Github website to download the source code for **AAPS**. This should take about 1 minute. 

Android Studio will then use **Gradle** (a development tool for Android apps) to identify other components needed to build these items on your computer. 
```

Sur l'écran d'accueil d'Android Studio, vérifiez que "**Projects/Projets**" (1) est en surbrillance sur la gauche.

Ensuite, cliquez sur "**Get from VCS/Obtenir depuis VCS**" (2) sur la droite :

![Get\_from\_VCS](../images/Building-the-App/032_GetVCS.png)

Nous allons maintenant indiquer à Android Studio où aller chercher le code :

![Get from Version Control](../images/Building-the-App/033_CloneGit.png)

- "Repository URL/URL du dépôt" devrait être sélectionné (par défaut) à gauche (1).

- "Git" devrait être sélectionné (par défaut) comme système de contrôle de version (2).

- Copiez maintenant cette URL :
  ```
  https://github.com/nightscout/AndroidAPS.git
  ```
  et collez-la dans la zone de texte de l'URL (3).

- Check the (default) directory for saving the cloned code exists on your computer and doesn't already exists (4). You can change it to some directoy, but please remember where you stored it!

- Cliquez sur le bouton "Clone" (5).

```{admonition} INFORMATION
:class: information
Make a note of the directory. It is where your sourcecode is stored!
```

Vous allez alors voir un écran vous indiquant que le dépôt est en train d'être cloné (cloning repository) :

![cloning\_repository](../images/Building-the-App/034_CloningProgress.png)

At some point, Android Studio will close and start again. You may be asked whether you want to trust the project. Cliquez sur "Trust project/Faire confiance au projet" :

![Trust project](../images/Building-the-App/035_TrustProject.png)

Pour les utilisateurs de Windows : Si votre pare-feu demande la permission, autorisez l'accès :

![Firewall permission java](../images/AndroidStudio361_18.png)

Une fois le dépôt cloné avec succès, Android Studio ouvrira le projet en question.

(NewUI)=

```{admonition} New UI
:class: information
Android Studio changed its UI recently. New installations of Android Studio use the new UI by default!

Only if your Android Studio looks different, you might need to switch to the new UI:
Click on the hamburger menu on the top left, then select **Settings** (or **Preferences** on Apple computers).
In **Appearance & Behaviour**, go to **New UI** and tick **Enable new UI**. Then restart Android Studio to start using it.

If you don't find the option **New UI** don't worry: you are already using it!
```

When Android Studio opened, wait patiently (this may take a few minutes), and particularly, **do not** update the project as suggested in the pop-up.

Android Studio will start a "Gradle project sync" automatically, which will take a couple of minutes to finish. You can see it (still) running:

![AS\_download\_dependencies](../images/Building-the-App/036_GradleSyncing.png)

```{admonition} NEVER UPDATE GRADLE!
:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties.
```

Only on windows computers: You might get a notification about windows defender running: Click on **Automatically** and confirm, it will make the build run faster!

![Windows Defender](../images/Building-the-App/037_WindowsDefender.png)

You can leave the gradle sync running and follow the next steps already.

(Building-APK-set-git-path-in-preferences)=

### Set Git path in Android Studio preferences

Maintenant, nous allons dire à Android Studio où trouver Git, tel que vous l'avez installé [juste avant](Install-Git).

- Pour les utilisateurs de Windows : assurez-vous que vous avez redémarré votre ordinateur après avoir [installé Git](Install-Git). If not, restart now and re-open Android Studio

In the top left corner of **Android Studio**, open the hamburger menu and navigate to **File** > **Settings** (on Windows) or **Android Studio** > **Preferences** (on Mac).
This opens the following window, click to expand the dropdown called **Version Control** (1) and select **Git**

![Version\_control\_Git](../images/Building-the-App/038_SettingsGit.png)

Check if **Android Studio** can automatically locate the correct **Path to Git executable** automatically by clicking the button "Test" (1):

![Git Executable](../images/Building-the-App/039_GitTest.png)

Si la détection automatique réussit, la version de **Git** s'affiche sous chemin d'accès.

![Git\_version\_displayed](../images/Building-the-App/039_GitTestSuccess.png)

If you find that **git.exe** is not found automatically, or that clicking "Test" results in an error (1), you can either

- manually enter the path which you saved [earlier](Make_a_note_of_Git_path), or
- click on the folder icon (1) and manually navigating to the directory where **git.exe** was installed [earlier](Make_a_note_of_Git_path)
- Verify your settings with the **Test** button!

  ![Git not found](../images/Building-the-App/039_GitTestError.png)

(Building-APK-generate-signed-apk)=

### Compilez l'APK AAPS signé

```{admonition} Why does the AAPS app need to be "signed"?
:class: dropdown

Android requires each app to be _signed_, to ensure that it can only be updated later from the same trusted source that released the original app. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key). 

For our purposes, this just means that we generate a signing or "keystore" file and use it when we build the **AAPS** app.
```

**Important: Make sure the gradle sync is finished successfully before proceeding!**

Click the hamburger menu on the top left to open the menu bar.
Select **Build** (1), then select **Generate Signed App Bundle / APK** (2)

![Build apk](../images/Building-the-App/040_GenerateSignedAPK.png)

Sélectionnez "APK" au lieu de "Android App Bundle" et cliquez sur "Next" :

![APK instead of bundle](../images/Building-the-App/041_APK.png)

Sur l'écran suivant, vérifiez que le "Module" sélectionné est bien "AAPS.app" (1).

(Building-APK-wearapk)=

```{admonition} INFORMATION!
:class: information
If you want to create the apk for your watch, you now need to select AAPS.wear!
```

![Create\_key\_store](../images/Building-the-App/042_CreateNewKey.png)

Cliquez sur "Create new.../Créer nouveau..." (2) pour commencer la création de votre fichier de clés.

```{admonition} INFORMATION!
:class: information
You will only need to create the keystore once.
If you have build AAPS before, do NOT create a new keystore but select your existing one and enter its passwords!
```

**_Note:_** Le fichier de clés contient les informations nécessaires pour signer l'application. Il est crypté et les informations sont sécurisées avec un mot de passe.

![Create key store](../images/Building-the-App/043_Keystore.png)

- Click the "folder" symbol (1) to select a path on your computer for your key store.

  Do **not** use the directory where you stored your sourcecode but some directory that you would also transfer to a new computer.

```{admonition} WARNING!
:class: warning
Make sure to note down for yourself where your keystore is stored. You will need it when you build the next AndroidAPS update!
```

- Now choose a simple password (and make a note of it), enter it in the password box (2), and confirm it (2).

  Les mots de passe du fichier de clés et de la clé n'ont pas besoin d'être très complexes. Si jamais vous perdez votre mot de passe, consultez la page Dépannage : [Fichier de clés perdu](troubleshooting_androidstudio-lost-keystore).

- L'alias par défaut (3) de votre clé est "key0", laissez-le tel quel.

- Il vous faut maintenant un mot de passe pour la clé. Pour simplifier, vous pouvez si vous le souhaitez, utiliser le même mot de passe que pour le fichier de clés au-dessus. Enter a password (4) and confirm it.

```{admonition} WARNING!
:class: warning
Note down these passwords! You will need them when you build the next AAPS update!
```

- The validity is 25 years by default, leave it as it is.

- Enter your first and last name (5). No other information needs to be added but you are free to do (6-7).

- Cliquez sur "OK" (8) pour continuer :

On the **Generate signed App Bundle or APK** page, the path to your keystore will now be displayed. Now re-enter the Key Store password (1) and Key password (2), and tick the box (3) to remember passwords, so you don't have to enter them again next time you build the apk (i.e. when updating to a new AAPS version). Cliquez sur "Next/Suivant" (4):

![Remember passwords](../images/Building-the-App/044_RememberPwd.png)

On the next screen, select build variant "fullRelease" (2) and click "Create" (3). You should remember the directory displayed at (1), as later you will find your built apk file there!

![Select build variant](../images/Building-the-App/045_BuildPath.png)

Android Studio va maintenant compiler l'APK **AAPS**. It will show "Gradle Build running" (2) at the bottom right. The process takes some time, depending on your computer and internet connection, so **be patient!** If you want to watch the progress of the build, click on the small hammer "build" (1) at the bottom of Android Studio:

![Gradle Running](../images/Building-the-App/046_BuildRunning.png)

Vous pouvez maintenant voir la compilation en cours :

![Android\_Studio\_building](../images/Building-the-App/047_BuildDetails.png)

Le message "BUILD SUCCESSFUL / COMPILATION RÉUSSIE" s'affiche quand la génération est terminée. Vous verrez peut-être une notification sur laquelle vous pouvez cliquer "locate/localiser". If you miss this, click on the notification icon (1) and then on **locate** (2) at the very bottom of the screen to bring up the Notifications:

![Build finished](../images/Building-the-App/049_ReopenNotification.png)

_If the build was not successful, refer to the [Android Studio Troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio)._

Dans la fenêtre des notifications, cliquez sur le lien bleu "locate/trouver" :

![Locate build](../images/Building-the-App/048_BuildFinished.png)
Your file manager will open and show you the build apk file that you have just built.

![File location apk](../images/Building-the-App/050_LocateAPK.png)

Félicitations ! Now you have built the **AAPS** apk file, you will be transferring this file to your smartphone in the next section of the docs.

Move to the next stage of [Transferring and Installing **AAPS**](Transferring-and-installing-AAPS.md).
