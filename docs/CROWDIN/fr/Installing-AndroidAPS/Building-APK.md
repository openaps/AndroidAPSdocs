# Construire l'APK

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir [FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## ## Remarques importantes

**Veuillez noter** Avec AndroidAPS version 2.3, il n'est pas possible de construire l'APK avec la dernière version d'Android Studio. Veuillez utiliser Android Studio 3.4 à partir de [ici](https://developer.android.com/studio/archive?).

**Veuillez noter** lors de la construction d'AndroidAPS 2.0 apk : **Configuration on demand** n'est pas supporté par la version actuelle du plugin Android Gradle !

Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

* Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
* Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
* Décochez la case Configure on demand.
* Cliquez sur Appliquer ou OK.

* * *

### Cet article est divisé en deux parties.

* La partie "aperçu" indique les étapes nécessaires pour construire le fichier APK.
* Dans la partie "pas à pas", vous trouverez les captures d'écran d'une installation concrète. Les versions d'Android Studio - l'environnement de développement logiciel que nous utiliserons pour construire l'APK - changent très rapidement. Les exemples ne seront donc pas identiques à votre installation, mais cela devrait vous donner un bon point de départ. Android Studio fonctionne sous Windows, Mac OS X et Linux et il peut y avoir de petites différences entre chaque plateforme. Si vous trouvez que quelque chose d'important est incorrect ou manquant, merci d'informer le groupe facebook "utilisateurs AndroidAPS" ou dans les chats Gitter [Android APS](https://gitter.im/MilosKozak/AndroidAPS) ou [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby) afin que nous puissions y remédier.

## Overview

En général, les étapes nécessaires pour construire le fichier APK sont :

* Installez Git
* Installez et configurez Android Studio.
* Utilisez git pour cloner le code source du répertoire central Github où les développeurs ont mis le code réel pour l'application.
* Ouvrez le projet cloné dans Android Studio comme projet actif.
* Construisez l'APK signé.
* Transférez l'APK généré sur votre téléphone.

## Démarche pas à pas

Description détaillée des étapes nécessaires à la construction du fichier APK.

## Installer git (si vous ne l'avez pas)

### Windows

* Any git version should work. For example <https://git-scm.com/download/win>
* Make sure to note down the installation path. Vous en aurez besoin plus tard après avoir installé Android Studio.
  
  ![Git installation path](../images/Update_GitPath.png)

### Mac

* Any git version should work. For example <https://git-scm.com/download/mac>
* Use homebrew to install git: ```$ brew install git```.
* For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

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

The Android emulator (to emulate the smartphone on your PC or Mac) is not used to build the APK. You can click "Finish" to finish the installation and read the documentation later on demand.

![Screenshot 6](../images/Installation_Screenshot_06.png)

Android Studio is downloading a lot of software components it uses. You can click on the "Show Details" button to the what happens but that's not important at all.

![Screenshot 7](../images/Installation_Screenshot_07.png)

![Screenshot 8](../images/Installation_Screenshot_08.png)

After the downloads are completed click the "Finish" button.

![Screenshot 9](../images/Installation_Screenshot_09.png)

* Applause, applause you have now finished the Android Studio installation and can start cloning the source code. Maybe it's time for a short break?

## Set git path in preferences

### Windows

* Let Studio know where is git.exe located: File - Settings
  
  ![Android Studio - open settings](../images/Update_GitSettings1.png)

* In the next window: Version Control - Git

* Choose correct path: .../Git<font color="#FF0000"><b>/bin</b></font>

* Make sure update method "Merge" is selected.
  
  ![Android Studio - GIT path](../images/Update_GitSettings2a.png)

### Mac

* If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

## Download code and additional components

* Use git clone in Android Studio as shown in screenshots below. Select "Check out project from Version Control" with "Git" as concrete version control system.

![Screenshot 10](../images/Installation_Screenshot_10.png)

![Version_Control_Git](../images/Version_Control_Git.png)

Fill in the URL to the main AndroidAPS repository ("https://github.com/MilosKozak/AndroidAPS") and click "clone".

![Screenshot 13](../images/Installation_Screenshot_13.png)

Android Studio will start cloning. Don't click "Background" as it goes fast and makes things more complicated at the moment.

![Screenshot 14](../images/Installation_Screenshot_14.png)

Finish the checkout from version control with opening the project by clicking "Yes".

![Screenshot 15](../images/Installation_Screenshot_15.png)

Use the standard "default gradle wrapper" and click "OK".

![Screenshot 16](../images/Installation_Screenshot_16.png)

Read and close the "Tip of Day" screen of Android Studio by pressing "Close".

![Screenshot 17](../images/Installation_Screenshot_17.png)

* Excellent, you have your own copy of the source code and are ready to start the build.
* Now we are approaching our first error message. Fortunately, Android Studio will directly give us the solution for this.

Click "Install missing platform(s) and sync project" as Android Studio needs to install a missing platform.

![Screenshot 18](../images/Installation_Screenshot_18.png)

Accept the license agreement by selecting "Accept" and clicking "Next".

![Screenshot 19](../images/Installation_Screenshot_19.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 20](../images/Installation_Screenshot_20.png)

Now it's finished. Please click "Finish".

![Screenshot 21](../images/Installation_Screenshot_21.png)

Aaaahhh, next error. But Android Studio suggests a similar solution. Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Screenshot 22](../images/Installation_Screenshot_22.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 23](../images/Installation_Screenshot_23.png)

Now it's finished. Please click "Finish".

![Screenshot 24](../images/Installation_Screenshot_24.png)

And another error to handle as Android Studio needs to download again a missing platform. Click "Install missing platform(s) and sync project".

![Screenshot 25](../images/Installation_Screenshot_25.png)

As it is said in the dialog please wait until the download is finished.

![Screenshot 26](../images/Installation_Screenshot_26.png)

Now it's finished. Please click "Finish".

![Capture d'écran 27](../images/Installation_Screenshot_27.png)

Click "Install Build Tools and sync project" as Android Studio needs to download missing Tools.

![Capture d'écran 28](../images/Installation_Screenshot_28.png)

As it is said in the dialog please wait until the download is finished.

![Capture d'écran 29](../images/Installation_Screenshot_29.png)

Now it's finished. Please click "Finish".

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

Cliquez sur "Create new..." pour commencer la création de votre fichier de clés. Un fichier de clés dans cette affaire n'est rien de plus qu'un fichier dans lequel les informations de signature est stockée. Il est crypté et les informations sont sécurisées avec des mots de passe. Nous vous conseillons de le stocker dans votre dossier personnel et de vous rappeler des mots de passe, mais si vous perdez cette information, ce n'est pas très grave car vous devrez juste en créer un nouveau. Une bonne pratique consiste à sauvegarder ces informations avec soin.

![Capture d'écran 41](../images/Installation_Screenshot_41.png)

* Renseignez les informations de la boîte de dialogue suivante. 
  * Key store path : chemin d'accès au fichier de clés
  * Les champs password en dessous permettent une double vérification du mot de passe pour éviter les erreurs de frappe.
  * Alias est un nom pour la clé dont vous avez besoin. Vous pouvez laisser la valeur par défaut ou lui donner un nom spécifique.
  * Les champs password en dessous de la clé sont pour la clé elle-même. Comme précédemment double contrôle pour éviter les erreurs de frappe.
  * Vous pouvez laisser la validité par défaut de 25 ans.
  * Vous n'avez qu'à remplir le prénom et le nom de famille, mais n'hésitez pas à compléter les autres informations. Puis cliquez sur "OK".

![Capture d'écran 42](../images/Installation_Screenshot_42.png)

Renseignez les informations de la dernière boîte de dialogue et cliquez sur "Next".

![Capture d'écran 43](../images/Installation_Screenshot_43.png)

Sélectionnez "fullRelease" pour Buid Variants. Sélectionnez "V1 (Jar Signature)" (V2 est optionnel) et cliquez sur "Finish". Les informations suivantes peuvent être importantes pour une utilisation ultérieure.

* 'Release' devrait être votre choix par défaut pour "Build Variants", 'Debug' est juste pour les personnes qui codent.
* Sélectionnez le type de génération que vous souhaitez complier. 
  * full (c'est à dire recommandations automatiquement adoptées en boucle fermée)
  * openloop (i.e. recommendations given to user to manually enact)
  * pumpcontrol (c'est-à-dire télécommande pour la pompe, pas pour le bouclage)
  * nsclient (c'est-à-dire que les données de bouclage d'un autre utilisateur sont affichées et que des entrées de careportal peuvent être ajoutées)

![Capture d'écran 44](../images/Installation_Screenshot_44.png)

Dans le journal des événements, vous voyez que l'APK signé a été généré avec succès.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Click the "locate" link in the event log.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Transfer APK to smartphone

A file manager window opens. It might look a bit different on your system as I am using Linux. On Windows there will be the File Explorer and on Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. You can do it on your preferred way, i.e. Bluetooth, cloud upload, connect computer and phone by cable or use email. I use Gmail here in this example as it is fairly simple for me. I mention this because to install the self-signed app we need to allow Android on our smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Select "Allow from this source". After the installation, you can disable it again.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.