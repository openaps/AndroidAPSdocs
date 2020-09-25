# Construire l'APK

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* Utilisez **[Android Studio Version 3.6.1](https://developer.android.com/studio/)** ou une version plus récente pour construire l'apk.
* [Les systèmes d'exploitation Windows 10 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#impossible-de-demarrer-le-processus-daemon) ne sont pas pris en charge par Android Studio 3.6.1.

**Configuration on demand** n'est pas pris en charge par la version actuelle du plug-in Android Gradle !

Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

* Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
* Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
* Décochez la case Configure on demand.
* Cliquez sur Appliquer ou OK.

* * *

### Cet article est divisé en deux parties.

* La partie "aperçu" indique les étapes nécessaires pour construire le fichier APK.
* Dans la partie "pas à pas", vous trouverez les captures d'écran d'une installation concrète. Les versions d'Android Studio - l'environnement de développement logiciel que nous utiliserons pour construire l'APK - changent très rapidement. Les exemples ne seront donc pas identiques à votre installation, mais cela devrait vous donner un bon point de départ. Android Studio fonctionne sous Windows, Mac OS X et Linux et il peut y avoir de petites différences entre chaque plateforme. Si vous trouvez que quelque chose d'important est incorrect ou manquant, merci d'informer le groupe facebook "utilisateurs AndroidAPS" ou dans les chats Gitter [Android APS](https://gitter.im/MilosKozak/AndroidAPS) ou [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) afin que nous puissions y remédier.

## Aperçu

En général, les étapes nécessaires pour construire le fichier APK sont :

1. [Installer Git](../Installing-AndroidAPS/git-install.rst)
2. [Installer Android Studio](../Installing-AndroidAPS/Building-APK#installez-android-studio)
3. [Définir le chemin d’accès git dans Android Studio](../Installing-AndroidAPS/Building-APK#definir-le-chemin-de-git-dans-les-preferences)
4. [Télécharger le code AndroidAPS](../Installing-AndroidAPS/Building-APK#telecharger-le-code-androidaps)
5. [Télécharger Android SDK](../Installing-AndroidAPS/Building-APK#telecharger-android-sdk)
6. [Générer l'application](../Installing-AndroidAPS/Building-APK#generer-un-apk-signe) (générer un fichier apk signé)
7. [Transférer le fichier apk sur votre téléphone](../Installing-AndroidAPS/Building-APK#transferer-le-fichier-apk-sur-le-smartphone)
8. [Identifier le récepteur si vous utilisez xDrip+](../Installing-AndroidAPS/Building-APK#identifier-le-recepteur-si-vous-utilisez-xdrip)

## Démarche pas à pas

Description détaillée des étapes nécessaires à la construction du fichier APK.

## Installer git (si vous ne l'avez pas)

Suivez le manuel sur la [page d'installation de git](../Installing-AndroidAPS/git-install.rst).

## Installez Android Studio

Les captures d'écran suivantes ont été prises à partir d'Android Studio Version 3.6.1. Votre écran peut être un peu différent selon la version d'Android Studio que vous utilisez. Mais vous devriez y arriver. Vous pouvez demande de [l'aide auprès de la commauté](../Where-To-Go-For-Help/Connect-with-other-users.md).

Une des choses les plus importantes lors de l'installation d'Android Studio : **Soyez patient !** Au cours de l'installation et de la configuration, Android Studio télécharge beaucoup de choses ce qui prendra du temps.

Installez [Android Studio](https://developer.android.com/studio/install.html) et configurez le au premier démarrage.

Sélectionnez "Do not import settings" car vous n'avez pas eu d'utilisation préalable.

![Ne pas importer les paramètres](../images/AndroidStudio361_01.png)

Décidez si vous voulez partager les données avec Google ou non.

![Partager des données avec Google](../images/AndroidStudio361_02.png)

Dans l'écran suivant, cliquez sur "Next".

![Écran d'accueil](../images/AndroidStudio361_03.png)

Sélectionnez l'installation "Standard" et cliquez sur "Next".

![Installation standard](../images/AndroidStudio361_04.png)

Sélectionnez le thème de l'interface utilisateur que vous souhaitez (dans ce manuel, nous avons utilisé "Light"). Cliquez ensuite sur "Next". C'est juste le jeu de couleurs. Vous pouvez choisir n'importe quel type (par ex. "Darcula" pour le mode sombre). Cette sélection n'a aucune influence sur la construction de l'APK.

![Couleur de l'interface](../images/AndroidStudio361_05.png)

Cliquez sur "Finish" dans la boite de dialogue "Verify Settings".

![Vérifiez les paramètres](../images/AndroidStudio361_06.png)

Attendez qu'Android Studio télécharge des composants supplémentaires et soyez patient. Une fois que tout est téléchargé, le bouton "Finish" devient bleu. Cliquez sur le bouton maintenant.

![Téléchargement des composants](../images/AndroidStudio361_07.png)

## Définir le chemin de git dans les préférences

Assurez-vous que [git est installé](../Installing-AndroidAPS/git-install.rst) sur votre ordinateur.

Sur l'écran d'accueil d'Android Studio, cliquez sur le petit triangle (1. de la capture d'écran ci-dessous) et sélectionnez "Settings" (2.).

![Paramètres Android Studio à partir de l'écran d'accueil](../images/AndroidStudio361_08.png)

### Windows

* Cliquez sur le petit triangle en regard de Version Control (1.) pour ouvrir le sous-menu.
* Cliquez sur Git (2.).
* Assurez-vous que la méthode de mise à jour "Merge" (3.) est sélectionnée.
* Vérifiez si Android Studio peut localiser le chemin d'accès à git.exe automatiquement en cliquant sur le bouton "Test" (4.)
    
    ![Paramètres Android Studio](../images/AndroidStudio361_09.png)

* Si la configuration automatique est réussie, la version de git s'affiche.

* Cliquez sur "OK" dans la boîte de dialogue (1.) et sur "OK" dans la fenêtre des paramètres (2.).
    
    ![Installation automatique de git réussie](../images/AndroidStudio361_10.png)

* Si le fichier git.exe n'est pas trouvé, cliquez sur "OK" dans la boite de diablogue (1.) puis sur le bouton avec les 3 petits points (2.).

* Utilisez la [fonction de recherche](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) dans l'explorateur windows pour trouver "git.exe" si vous n'êtes pas sûr de l'endroit ou il est. Vous chercher un fichier git.exe situé dans un dossier \bin\.
* Sélectionnez le chemin d'accès à git.exe et vérifiez que vous avez sélectionné le dossier ** \bin\ ** (3.) et cliquez sur "OK" (4.).
* Fermez la fenêtre des paramètres en cliquant sur le bouton "OK" (5.).
    
    ![Echec de l'installation automatique de git](../images/AndroidStudio361_11.png)

* **Redémarrez votre PC pour mettre à jour l'environnement système.**

### Mac

* N’importe quelle version de git devrait fonctionner. Par exemple <https://git-scm.com/download/mac>.
* Utilisez homebrew pour installer git: ```$ brew install git```.
* Pour plus de détails sur l'installation de git, voir la [documentation officielle](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.

## Télécharger le code AndroidAPS

* **Si vous n'avez pas encore redémarré votre ordinateur après avoir défini le chemin d'accès à git dans les préférences, faites le maintenant. L'environnement système doit être mis à jour.**

* Il y a deux options pour démarrer un nouveau projet :
    
    * Sur l'écran d'accueil d'Android Studio, cliquez sur "Get from version control"
        
        ![Charger le projet à partir du contrôle de version à partir de l'écran d'accueil](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * Si vous avez déjà ouvert Android Studio et que vous ne voyez plus l'écran d'accueil, sélectionnez File (1.) > New (2.) > Project from Version Control ... (3.)
        
        ![Charger le projet à partir du contrôle de version dans Android Studio](../images/AndroidStudio_FileNew.PNG)

* Renseignez l'URL vers l'adresse de base d'AndroidAPS (https://github.com/nightscout/AndroidAPS) (1.).

* Choisissez le répertoire dans lequel vous voulez enregistrer le code cloné. (2.)
* Cliquez sur le bouton "Clone" (3.).
    
    ![Cloner le répertoire](../images/AndroidStudio_NewURL.PNG)

* Ne cliquez pas sur "Background" pendant que le répertoire est cloné !
    
    ![Aucune action en arrière-plan](../images/AndroidStudio_NoBackground.png)

* Une fois le clonage du répertoire réussi, ouvrez votre copie locale en cliquant sur "Yes".
    
    ![Ouvrir le projet](../images/AndroidStudio361_16.png)

* Dans le coin inférieur droit, vous verrez qu'Android Studio exécute les tâches d'arrière-plan en information.
    
    ![Tâches d'arrière-plan](../images/AndroidStudio361_17.png)

* Accorder l'accès si votre pare-feu demande l'autorisation.
    
    ![Autorisation java dans le pare-feu](../images/AndroidStudio361_18.png)

* Une fois les tâches en arrière-plan terminées, vous verrez probablement le message d'erreur suivant :
    
    ![Licence SDK](../images/AndroidStudio361_19.png)

## Télécharger Android SDK

* Cliquez sur File > Settings.
    
    ![Ouvrir les paramètres](../images/AndroidStudio361_20.png)

* Cliquez sur le petit triangle à côté de Appearance & Behaviour (1.).

* Cliquez sur le petit triangle à côté de System Settings (2.) et sélectionnez Android SDK (3.)
* Cochez la case à gauche de "Android 9.0 (Pie)" (4.) (API niveau 28).
    
    ![Paramètres SDK](../images/AndroidStudio361_21.png)

* Confirmez les modifications en cliquant sur OK.
    
    ![Confirmer les modifications SDK](../images/AndroidStudio361_22.png)

* Accepter le contrat de licence (1.) et cliquer sur "Next" (2.).
    
    ![Accepter la licence SDK](../images/AndroidStudio361_23.png)

* Attendez que l'installation soit terminée.
    
    ![Attendre lors de l'installation du SDK](../images/AndroidStudio361_24.png)

* Lorsque l'installation du SDK est terminée, le bouton "Finish" devient bleu. Cliquez sur ce bouton.
    
    ![Terminer l'installation du SDK](../images/AndroidStudio361_25.png)

* Android Studio recommande de mettre à jour le "gradle system". **Ne jamais mettre à jour gradle !** Cela pourrait entraîner des difficultés !

* Si vous voyez dans le coin inférieur droit une information indiquant que le plugin Android Gradle Plugin est près à être mis à jour, cliquez sur le texte "update" (1.) et dans la boite de dialogue sur "Don't remind me again for this project" (2.).
    
    ![Pas de mise à jour de Gradle](../images/AndroidStudio361_26.png)

## Générer un APK signé

Signer signifie que vous signez votre application générée mais d'une façon numérique comme une sorte d'empreinte digitale intégrée dans l'application elle-même. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez [ce lien](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Cliquez sur "Build" dans la barre de menus et sélectionnez "Generate Signed Bundle / APK ...".
    
    ![Génération de l'apk](../images/AndroidStudio361_27.png)

* Sélectionnez "APK" (1.) au lieu de "Android App Bundle" et cliquez sur "Suivant" (2.).
    
    ![APK au lieu du bundle](../images/AndroidStudio361_28.png)

* Assurez-vous que le module est défini sur "app" (1.).

* Cliquez sur "Create new..." (2.) pour commencer la création de votre fichier de clés.
    
    Un fichier de clés dans ce cas n'est rien de plus qu'un fichier dans lequel les informations de signature sont stockées. Il est crypté et les informations sont sécurisées avec des mots de passe.
    
    ![Créer le fichier de clés](../images/AndroidStudio361_29.png)

* Cliquez sur le symbole de dossier (1.) pour sélectionner votre chemin d'accès au fichier de clés.

* Sélectionnez le répertoire dans lequel votre fichier de clés doit être sauvé (2.). **Ne pas le mettre dans le même répertoire que celui du projet. Vous devez utiliser un autre répertoire !** Une option peut être dans votre dossier d'accueil.
* Entrez le nom de votre fichier de clés (3.).
* Cliquez sur "OK" (4.).
* Les mots de passe pour le fichier de clés et la clé ne doivent pas être très compliqués. Assurez vous de bien vous en souvenir ou notez le dans un endroit sûr. Si plus tard vous avez oublié vos mots de passe, allez voir la page [Dépannages d'Android Studio - Certificats perdus](../Installing-AndroidAPS/troubleshooting_androidstudio#certificats-perdus).
* Entrez (5.) et confirmez (6.) le mot de passe de votre fichier de clé.
* Faites de même pour votre clé (7. + 8.).
* La validité (9.) est de 25 ans par défaut. Vous n'avez pas à modifier la valeur par défaut.
* Le prénom et le nom sont obligatoires (10.). Toutes les autres informations sont facultatives.
* Cliquez sur "OK" (11.) lorsque vous avez terminé.
    
    ![Chemin du fichier de clés](../images/AndroidStudio361_30.png)

* Assurez-vous que la case permettant de mémoriser les mots de passe est cochée (1.). Ainsi vous n'aurez pas à les saisir à nouveau la prochaine fois que vous génèrerez le fichier apk (par ex. en faisant une mise à jour avec une nouvelle version d'AndroidAPS).

* Cliquez sur "Next" (2.).
    
    ![Mémoriser les mots de passe](../images/AndroidStudio361_31.png)

* Sélectionnez la variante "fullRelease" (1.).

* Cochez les cases V1 et V2 pour les versions de signature (2.).
* Cliquez sur "Finish". (3.)
    
    ![Génération terminée](../images/AndroidStudio361_32.png)

* Android Studio affiche l'information "APK(s) generated successfully..." quand la génération est terminée.

* Dans le cas ou la génération n'a pas réussie, référez vous à la [section dépannage](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* La façon la plus facile de trouver l'apk est de cliquer sur "Event log".
    
    ![Génération réussie - journal des événements](../images/AndroidStudio361_33.png)

* Dans la section "event log" cliquez sur "locate".
    
    ![Journal des événements - localiser apk](../images/AndroidStudio361_34.png)

* Le fichier que vous cherchez est "app-full-release.apk".
    
    ![Emplacement du fichier apk](../images/AndroidStudio361_35.png)

## Transférer le fichier APK sur le smartphone

La façon la plus facile de transférer le fichier app-full-release.apk dans votre téléphone est via [un câble USB ou Google Drive](https://support.google.com/android/answer/9064445?hl=fr). Veuilez noter que le transfert par email peut entraîner des difficultés et n'est pas la méthode conseillée.

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Les explications peuvent être trouvées sur internet (par ex. [ici](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.androidcentral.com/unknown-sources)).

## Identifier le récepteur si vous utilisez xDrip+

[Voir la page xDrip+](../Configuration/xdrip#identifier-le-recepteur)

## Dépannage

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).