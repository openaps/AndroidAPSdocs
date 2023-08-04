# Construire l'APK

## Construire vous-même au lieu de télécharger

**AAPS is not available as download due to regulation for medical devices. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Utilisez **[Android Studio Version 2020.3.1](https://developer.android.com/studio/)** ou une version plus récente pour construire l'apk.
* [Les systèmes d'exploitation Windows 10 32 bits](troubleshooting_androidstudio-unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio 2020.3.1

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

Veuillez garder à l'esprit que et **CPU 64 bits et un système d'exploitation 64 bits sont des conditions obligatoires.** Si votre système ne répond pas à cette condition, vous devez modifier le matériel ou le logiciel affecté ou tout le système. **Il est fortement recommandé d'utiliser un SSD (Solid State Disk) au lieu d'un HDD (Hard Disk Drive) car cela prend moins de temps lorsque vous construisez le fichier apk d'installation d'AAPS.** Recommandé signifie que c'est juste conseillé mais que ce n'est pas obligatoire. Cependant, vous pouvez toujours utiliser un disque dur lorsque vous construisez un fichier apk, mais notez que le processus de construction peut prendre beaucoup de temps à s'exécuter, si bien qu'une fois démarré, vous pouvez le laisser fonctionner sans surveillance.

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

Cliquez sur "Finish" dans la boite de dialogue "Verify Settings".

![Vérifiez les paramètres](../images/studioSetup/06_Verify.png)

Attendez qu'Android Studio télécharge des composants supplémentaires et soyez patient. Une fois que tout est téléchargé, le bouton "Finish" devient bleu. Cliquez sur le bouton maintenant.

![Téléchargement des composants](../images/studioSetup/07_Downloading.png)

(Building-APK-set-git-path-in-preferences)=

## Définir le chemin de git dans les préférences

Assurez-vous que [git est installé](../Installing-AndroidAPS/git-install.md) sur votre ordinateur et que vous avez redémarré votre ordinateur après l'installation.

Sur l'écran d'accueil d'Android Studio cliquez sur "Customize" (1) à gauche, puis sélectionnez le lien "All settings..." (2):

![Paramètres Android Studio à partir de l'écran d'accueil](../images/studioSetup/10_WizardSettings.png)

### Windows

* En tant qu'utilisateur de Windows, assurez-vous que vous avez redémarré votre ordinateur après [avoir installé Git](../Installing-AndroidAPS/git-install.md).

* Double-cliquez sur "Version Control" (1) pour ouvrir le sous-menu.

* Cliquez sur Git (2).
* Assurez-vous que la méthode de mise à jour "Merge" (3) est sélectionnée.
* Vérifiez si Android Studio peut localiser le chemin d'accès à git.exe automatiquement en cliquant sur le bouton "Test" (4).
    
    ![Paramètres Android Studio](../images/studioSetup/11_GitPath.png)

* Si la configuration automatique est réussie, la version de git s'affiche sous chemin d'accès.
    
    ![Version Git affichée](../images/studioSetup/12_GitVersion.png)

* Éventuellement git.exe peut ne pas être trouvé automatiquement ou le test entraînera une erreur (1) :
    
    ![Git non trouvé](../images/studioSetup/13_GitVersionError.png)
    
    Dans ce cas, cliquez sur l'icône de dossier (2).

* Utilisez la [fonction de recherche](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) dans l'explorateur windows pour trouver "git.exe" si vous n'êtes pas sûr de l'endroit ou il a été installé. Vous cherchez un fichier nommé "git.exe", situé dans le dossier **\bin**.

* Sélectionnez le chemin d'accès à git.exe et vérifiez que vous avez sélectionné le dossier ** \bin\ ** (3) et cliquez sur "OK" (4).
    
    ![Sélectionnez git manuellement](../images/studioSetup/14_GitManualSelection.png)

* Vérifiez à nouveau votre chemin d'accès git sélectionné avec le bouton "Test" comme décrit ci-dessus.

* Lorsque la version de git est affichée sous le chemin (voir la capture d'écran ci-dessus), fermez la fenêtre de configuration en cliquant sur le bouton "OK" (5).

### Mac

* N’importe quelle version de git devrait fonctionner. Par exemple <https://git-scm.com/download/mac>.
* Utilisez homebrew pour installer git: ```$ brew install git```.
* Pour plus de détails sur l'installation de git, voir la [documentation officielle](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.

(Building-APK-download-AAPS-code)=

## Download AAPS code

* Sur l'écran d'accueil d'Android Studio, sélectionnez "Projects" (1) à gauche, puis "Get from VCS" (2).
    
    ![Assistant Android Studio](../images/studioSetup/20_ProjectVCS.png)
    
    * Si vous avez déjà ouvert Android Studio et que vous ne voyez plus l'écran d'accueil, sélectionnez File (1.) > New (2.) > Project from Version Control ... (3)
        
        ![Charger le projet à partir du contrôle de version dans Android Studio](../images/AndroidStudio_FileNew.PNG)
    
    * Nous allons maintenant indiquer à Android Studio d'où recevoir le code :
    
    * Assurez-vous d'avoir sélectionné "Repository URL" sur la gauche (1).
    
    * Vérifier si "Git" est sélectionné comme contrôle de version (2).
    * Copiez et collez l'URL ```https://github.com/nightscout/AndroidAPS``` to the main AAPS repository into the URL textbox (3).
    * Choisissez le répertoire dans lequel vous voulez enregistrer le code cloné (4).
        
        ![Clone Git](../images/studioSetup/21_CloneURL.png)

* Cliquez sur le bouton "Clone" (5).
    
    ![Cloner le répertoire](../images/studioSetup/22_Cloning.png)

* Ne cliquez pas sur "Background" pendant que le répertoire est cloné !

* Une fois que le dépôt a été cloné avec succès, Android Studio ouvrira le projet cloné.

* On vous demandera si vous voulez faire confiance au projet. Cliquez sur "Trust project" !
    
    ![Faire confiance au projet](../images/studioSetup/23_TrustProject.png)

* Dans le coin inférieur droit, vous verrez l'information qu'Android Studio exécute les tâches d'arrière-plan.
    
    ![Tâches d'arrière-plan](../images/studioSetup/24_GradleSyncRunning.png)

* Accorder l'accès si votre pare-feu demande l'autorisation.
    
    ![Autorisation java dans le pare-feu](../images/AndroidStudio361_18.png)

* Une fois que les tâches de fond sont terminées, vous verrez probablement une erreur indiquant que des erreurs se sont produites (1) ou (2) ou (3).
    
    ![Licence SDK](../images/studioSetup/25_SyncFailed.png)
    
    Ne vous inquiétez pas, cela sera bientôt résolu!

(Building-APK-download-android-sdk)=

## Télécharger Android SDK

* In the menu, go to File (1) > Settings (2) (or Android Studio > Preferences on Mac).
    
    ![Ouvrir les paramètres](../images/studioSetup/30_Settings.png)

* Double-cliquez sur "Appearance & Behaviour" pour ouvrir son sous-menu (1).

* Double-cliquez sur "System Settings" (2) et sélectionnez "Android SDK" (3).
* Cochez la case à gauche de "Android 9.0 (Pie)" (4.) (API niveau 28).
    
    ![Paramètres SDK](../images/studioSetup/31_AndroidSDK.png)

* Confirmez les modifications en cliquant sur OK.
    
    ![Confirmer les modifications SDK](../images/studioSetup/32_ConfirmSDK.png)

* Acceptez le contrat de licence (1) et cliquez sur « Next» (2).
    
    ![Accepter la licence SDK](../images/studioSetup/33_ConfirmLicense.png)

* Attendez que le téléchargement et l'installation du SDK soient terminés.
    
    ![Attendre lors de l'installation du SDK](../images/studioSetup/34_DownloadSDK.png)

* Lorsque l'installation du SDK est terminée, le bouton "Finish" devient bleu. Cliquez sur ce bouton.
    
    ![Terminer l'installation du SDK](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio recommande de mettre à jour le "gradle system". **Ne jamais mettre à jour gradle !** Cela pourrait entraîner des difficultés !

* If you see an information on the lower right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text "upgrade" (1).
    
    ![Pas de mise à jour de Gradle](../images/studioSetup/36_GradleUpdateRequest.png)

* Dans la boîte de dialogue sélectionnez "Don't remind me again for this project" (2).
    
    ![Pas de mise à jour de Gradle](../images/studioSetup/37_GradleUpdateDeny.png)

* Redémarrez Android Studio avant de continuer.

(Building-APK-generate-signed-apk)=

## Générer un APK signé

Signer signifie que vous signez votre application générée mais d'une façon numérique comme une sorte d'empreinte digitale intégrée dans l'application elle-même. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez [ce lien](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Après le démarrage d'Android Studio, attendez que toutes les tâches en arrière-plan soient terminées.
    
    ![Attendre les tâches en arrière-plan](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***Avertissement :*** Si des erreurs se produisent, ne continuez pas avec les étapes suivantes. \ Consulter la [section dépannage](../Installing-AndroidAPS/troubleshooting_androidstudio) pour les problèmes connus !
    
    ![Erreur de synchronisation Gradle](../images/studioSetup/41_GradleSyncError.png)

* Cliquez sur "Build" (1) dans la barre de menus et sélectionnez "Generate Signed Bundle / APK ..." (2).
    
    ![Génération de l'apk](../images/studioSetup/42_MenuBuild.png)

* Sélectionnez "APK" (1) au lieu de "Android App Bundle" et cliquez sur "Next" (2).
    
    ![APK au lieu du bundle](../images/studioSetup/43_Apk.png)

* Make sure that module is set to "AAPS.app" (1).

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

La façon la plus facile de transférer le fichier app-full-release.apk dans votre téléphone est via [un câble USB ou Google Drive](https://support.google.com/android/answer/9064445?hl=en). Veuilez noter que le transfert par email peut entraîner des difficultés et n'est pas la méthode conseillée.

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Les explications peuvent être trouvées sur internet (par ex. [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)).

## Résolution de problèmes

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).