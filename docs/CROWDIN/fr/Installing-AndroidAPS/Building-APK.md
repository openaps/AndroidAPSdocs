# Construire l'APK

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir la [page FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## ## Remarques importantes

***Remarque*** : Utilisez [Android Studio Version 3.5.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

**Configuration onr demand** n'est pas pris en charge par la version actuelle du plug-in Android Gradle !

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

* [Installez Git](../Installing-AndroidAPS/git-install.rst)
* Installez et configurez Android Studio.
* Utilisez git pour cloner le code source du répertoire central Github où les développeurs ont mis le code réel pour l'application.
* Ouvrez le projet cloné dans Android Studio comme projet actif.
* Construisez l'APK signé.
* Transférez l'APK généré sur votre téléphone.

## Démarche pas à pas

Description détaillée des étapes nécessaires à la construction du fichier APK.

## Installer git (si vous ne l'avez pas)

Suivez le manuel sur la [page d'installation de git](../Installing-AndroidAPS/git-install.rst).

## Installez Android Studio

Les captures d'écran suivantes ont été prises à partir d'Android Studio Version 3.1.3. Votre écran peut être un peu différent selon la version d'Android Studio que vous utilisez. Mais vous devriez y arriver. L'aide de la communauté est fournie par exemple dans le [groupe Facebook AndroidAPS](https://www.facebook.com/groups/1900195340201874/) et [à d'autres endroits](../Where-To-Go-For-Help/Connect-with-other-users.md).

Installez [Android Studio](https://developer.android.com/studio/install.html) et configurez au premier démarrage.

Sélectionnez "Ne pas importer les paramètres" car vous n'avez pas eu d'utilisation préalable.

![Screenshot 1](../images/Installation_Screenshot_01.png)

Cliquez sur "Suivant".

![Capture d'écran 2](../images/Installation_Screenshot_02.png)

Sélectionnez l'installation "Standard" et cliquez sur "Suivant".

![Capture d'écran 3](../images/Installation_Screenshot_03.png)

Sélectionnez le thème de l'interface utilisateur que vous souhaitez. (Dans ce manuel, nous avons utilisé "Intellij". Puis cliquez sur "Suivant". C'est juste le jeu de couleurs. Vous pouvez choisir n'importe quel type (par ex. "Darcula" pour le mode sombre). Cette sélection n'a aucune influence sur la construction de l'APK.

![Capture d'écran 4](../images/Installation_Screenshot_04.png)

Cliquez sur "Suivant" dans la boîte de dialogue "Vérifier les paramètres".

![Capture d'écran 5](../images/Installation_Screenshot_05.png)

L'émulateur Android (pour émuler le smartphone sur votre PC ou Mac) n'est pas utilisé pour construire l'APK. Vous pouvez cliquer sur "Terminer" pour terminer l'installation et lire la documentation plus tard sur demande.

![Capture d'écran 6](../images/Installation_Screenshot_06.png)

Android Studio télécharge beaucoup de composants logiciels qu'il utilise. Vous pouvez cliquer sur le bouton "Afficher les détails" pour voir ce qui se passe, mais cela n'est pas du tout important.

![Capture d'écran 7](../images/Installation_Screenshot_07.png)

![Capture d'écran 8](../images/Installation_Screenshot_08.png)

Une fois les téléchargements terminés, cliquez sur le bouton "Terminer".

![Capture d'écran 9](../images/Installation_Screenshot_09.png)

* Applaudissements! applaudissements!!! vous avez maintenant terminé l'installation Android Studio et vous pouvez commencer à cloner le code source. Peut-être une courte pause serait la bienvenue ?

## Définir le chemin de git dans les préférences

### Windows

* Donnez l'information à Studio où git.exe est situé : Fichier - Paramètres
  
  ![Android Studio - ouvrir les paramètres](../images/Update_GitSettings1.png)

* Dans la fenêtre suivante : Contrôle de version - Git (Version Control - Git)

* Choisissez le chemin correct : .../Git<font color="#FF0000"><b>/bin</b></font>

* Assurez-vous que la méthode de mise à jour "Fusion" (merge) est sélectionnée.
  
  ![Android Studio - chemin GIT](../images/Update_GitSettings2a.png)

### Mac

* Si vous installez git via homebrew, il n'est pas nécessaire de modifier les préférences. Juste au cas où : on peut y accéder ici : Android Studio - Preferences.

## Télécharger le code et les composants supplémentaires

* Utilisez git clone dans Android Studio comme indiqué dans les captures d'écran ci-dessous. Sélectionnez "Check out project from Version Control" avec "Git" comme système de contrôle de version.

![Capture d'écran 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Renseignez l'URL vers l'adresse de base d'AndroidAPS ("https: //github.com/MilosKozak/AndroidAPS ") Et cliquez sur "clone".

![Capture d'écran 13](../images/Installation_Screenshot_13.png)

Android Studio va commencer le clonage. Ne cliquez pas sur "Background", car c'est rapide et cela rend les choses plus compliquées.

![Capture d'écran 14](../images/Installation_Screenshot_14.png)

Terminez la commande à partir du contrôle de version en ouvrant le projet en cliquant sur "Yes".

![Capture d'écran 15](../images/Installation_Screenshot_15.png)

Utilisez le standard "default gradle wrapper" et cliquez sur "OK".

![Capture d'écran 16](../images/Installation_Screenshot_16.png)

Lisez et fermez l'écran "Tip of Day" d'Android Studio en appuyant sur "Close".

![Capture d'écran 17](../images/Installation_Screenshot_17.png)

* Excellent, vous avez votre propre copie du code source et êtes prêt à démarrer la compilation.
* Maintenant, nous approchons de notre premier message d'erreur. Heureusement, Android Studio nous donnera directement la solution pour cela.

Cliquez sur "Install missing platform(s) and sync project" car Android Studio a besoin d'installer une plateforme manquante.

![Capture d'écran 18](../images/Installation_Screenshot_18.png)

Acceptez le contrat de licence en sélectionnant "Accept" et en cliquant sur "Next".

![Capture d'écran 19](../images/Installation_Screenshot_19.png)

Comme il est dit dans la boîte de dialogue, veuillez patienter jusqu'à ce que le téléchargement soit terminé.

![Capture d'écran 20](../images/Installation_Screenshot_20.png)

Maintenant, c'est fini. Veuillez cliquer sur "Finish".

![Capture d'écran 21](../images/Installation_Screenshot_21.png)

Aaaahhh, prochaine erreur. Mais Android Studio propose une solution similaire. Cliquez sur "Install Build Tools and sync project" car Android Studio a besoin de télécharger des outils complémentaires.

![Capture d'écran 22](../images/Installation_Screenshot_22.png)

Comme il est dit dans la boîte de dialogue, veuillez patienter jusqu'à ce que le téléchargement soit terminé.

![Capture d'écran 23](../images/Installation_Screenshot_23.png)

Maintenant, c'est fini. Veuillez cliquer sur "Finish".

![Capture d'écran 24](../images/Installation_Screenshot_24.png)

Et une autre erreur à gérer car Android Studio a à nouveau besoin de télécharger une plateforme manquante. Cliquez sur "Install missing platform(s) and sync project".

![Capture d'écran 25](../images/Installation_Screenshot_25.png)

Comme il est dit dans la boîte de dialogue, veuillez patienter jusqu'à ce que le téléchargement soit terminé.

![Capture d'écran 26](../images/Installation_Screenshot_26.png)

Maintenant, c'est fini. Veuillez cliquer sur "Finish".

![Capture d'écran 27](../images/Installation_Screenshot_27.png)

Cliquez sur "Install Build Tools and sync project" car Android Studio a besoin de télécharger des outils complémentaires.

![Capture d'écran 28](../images/Installation_Screenshot_28.png)

Comme il est dit dans la boîte de dialogue, veuillez patienter jusqu'à ce que le téléchargement soit terminé.

![Capture d'écran 29](../images/Installation_Screenshot_29.png)

Maintenant, c'est fini. Veuillez cliquer sur "Finish".

![Capture d'écran 30](../images/Installation_Screenshot_30.png)

Yes, les messages d'erreur sont partis et la première construction de gradle est en cours. Peut-être est-il temps de boire un peu d'eau?

![Capture d'écran 31](../images/Installation_Screenshot_31.png)

Android Studio recommande de mettre à jour le "gradle system". **Ne jamais mettre à jour gradle !** Cela pourrait entraîner des difficultés !

Veuillez cliquer sur "Don't remind me again for this project".

![Capture d'écran 32](../images/AS_NoGradleUpdate.png)

La construction est à nouveau en cours d'exécution.

![Capture d'écran 33](../images/Installation_Screenshot_33.png)

Yes, la première construction est réussie, mais ce n'est pas encore terminé.

![Capture d'écran 34](../images/Installation_Screenshot_34.png)

## Générer un APK signé

Dans le menu , sélectionnez "Build" puis "Generate Signed Bundle / APK...". (Le menu d'Android Studio a changé en septembre 2018. Dans les versions plus anciennes, sélectionnez “Build” puis “Generate Signed APK...”.)

Signer signifie que vous signez votre application générée mais de manière numérique comme une sorte d'empreinte digitale dans l'application elle-même. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez le lien [ici](https://developer.android.com/studio/publish/app-signing.html#generate-key). La sécurité est un sujet important et complexe et vous n'avez pas besoin de cela maintenant.

![Capture d'écran 39a](../images/Installation_Screenshot_39a.PNG)

Dans la boite de dialogue suivante, sélectionnez "APK" à la place de "Android App Bundle" et cliquez sur le bouton "Next".

![Capture d'écran 39b](../images/Installation_Screenshot_39b.PNG)

Sélectionnez "app" et cliquez sur "Next".

![Capture d'écran 40](../images/Installation_Screenshot_40.png)

Cliquez sur "Create new..." pour commencer la création de votre fichier de clés. Un fichier de clés dans ce cas n'est rien de plus qu'un fichier dans lequel les informations de signature sont stockées. Il est crypté et les informations sont sécurisées avec des mots de passe. Nous vous conseillons de le stocker dans votre dossier personnel et de vous rappeler des mots de passe, mais si vous perdez cette information, ce n'est pas très grave car vous devrez juste en créer un nouveau. Une bonne pratique consiste à sauvegarder ces informations avec soin.

![Capture d'écran 41](../images/Installation_Screenshot_41.png)

* Renseignez les informations de la boîte de dialogue suivante. 
  * Key store path : chemin d'accès au fichier de clés. **Ne pas enregistrer dans le même dossier que celui du projet. Vous devez utiliser un répertoire différent!**
  * Les champs password en dessous permettent une double vérification du mot de passe pour éviter les erreurs de frappe.
  * Alias est un nom pour la clé dont vous avez besoin. Vous pouvez laisser la valeur par défaut ou lui donner un nom spécifique.
  * Les champs password en dessous de la clé sont pour la clé elle-même. Comme précédemment double contrôle pour éviter les erreurs de frappe.
  * Vous pouvez laisser la validité par défaut de 25 ans.
  * Vous n'avez qu'à remplir le prénom et le nom de famille, mais n'hésitez pas à compléter les autres informations. Puis cliquez sur "OK".

![Capture d'écran 42](../images/Installation_Screenshot_42.png)

Renseignez les informations de la dernière boîte de dialogue et cliquez sur "Next".

![Capture d'écran 43](../images/Installation_Screenshot_43.png)

Sélectionnez "full" (ou "fullRelease") comme favori pour l'application générée. Sélectionnez V1 "Jar Signature" (V2 est optionnel) et cliquez sur "Finish". Les informations suivantes peuvent être importantes pour une utilisation ultérieure.

* 'Release' devrait être votre choix par défaut pour "Build Variants", 'Debug' est juste pour les personnes qui codent.
* Sélectionnez le type de génération que vous souhaitez complier. 
  * full / fullRelease (c'est-à-dire recommandations automatiquement adoptées en boucle fermée)
  * openloop (c'est à dire recommandations données à l'utilisateur pour des commandes manuelles)
  * pumpcontrol (c'est-à-dire télécommande pour la pompe, pas pour le bouclage)
  * nsclient (c'est-à-dire que les données de bouclage d'un autre utilisateur sont affichées et que des entrées de careportal peuvent être ajoutées)

![Capture d'écran 44](../images/Installation_Screenshot_44.png)

Dans le journal des événements, vous voyez que l'APK signé a été généré avec succès.

![Capture d'écran 45](../images/Installation_Screenshot_45.png)

Cliquez sur le lien "locate" dans le journal des événements.

![Capture d'écran 46](../images/Installation_Screenshot_46.png)

## Transférer le fichier APK sur le smartphone

Une fenêtre du gestionnaire de fichiers s'ouvre. Comme j'utilise Linux, il se peut que ce soit un peu différent sur votre système. Sur Windows, il y aura l'Explorateur de fichiers et sur Mac OS X le Finder. Vous devez voir le répertoire avec le fichier APK généré. Malheureusement, c'est le mauvais endroit car "wear-release.apk" n'est pas l'application signée "app" APK que nous recherchons.

![Capture d'écran 47](../images/Installation_Screenshot_47.png)

Veuillez sélectionner le répertoire AndroidAPS/app/full/release pour trouver le fichier "app-full-release.apk". Transférez ce fichier sur votre smartphone Android. Vous pouvez le faire comme vous voulez, c-à-d.

* Bluetooth
* envoi dans le cloud (Google Drive ou autres services cloud)
* connection de l'ordinateur et du téléphone par câble 
* par mail (Notez que certaines applications de messagerie ne permettent pas les pièces jointes apk, dans ce cas utiliser une autre méthode de transfert.)

Dans cet exemple, Gmail est utilisé car c'est assez simple. Pour installer l'application "auto-signée", vous devez autoriser Android sur votre smartphone à effectuer cette installation même si ce fichier est reçu via Gmail, ce qui est interdit par défaut. Si vous utilisez une autre solution, veuillez procéder en conséquence.

![Capture d'écran 48](../images/Installation_Screenshot_48.png)

Dans les paramètres de sécurité votre smartphone, il y a un paramètre "Sources inconnues" qu'il faut autoriser pour donner le droit d'installer les fichiers APK reçus par Gmail ou copiés manuellement sur le téléphone.

Autorisez "Sources inconnues". Après l'installation, vous pouvez le désactiver à nouveau.

![Installation à partir de sources inconnues](../images/Installation_Screenshot_49-50.png)

La dernière étape consiste à cliquer sur le fichier APK obtenu via Gmail et installer l'application. Si l'APK ne s'installe pas et que vous avez une version plus ancienne d'AndroidAPS sur votre téléphone (signé avec une autre clé), vous devrez au préalable la désinstaller. N'oubliez pas dans ce cas d'exporter vos paramètres auparavant !

Yes, vous l'avez et pouvez maintenant commencer à configurer AndroidAPS pour votre utilisation (MGC, pompe à insuline), etc.

## Identifier le récepteur si vous utilisez xDrip

[Voir la page xDrip](../Configuration/xdrip#identify-receiver)

## Dépannage

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).