# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir [FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* À partir de la version 2.3, vous devez utiliser git pour la mise à jour. La mise à jour via le fichier zip ne fonctionne plus.
* Utilisez [Android Studio Version 3.5.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.
* [Les systèmes d'exploitation Windows 10 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio 3.5.1.
* Si vous utilisez Dexcom G6 avec l'application [Dexcom patchée](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app), vous aurez besoin de la version du [dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Accès rapide aux utilisateurs expérimentés

Veuillez sauter ce paragraphe si vous mettez à jour AAPS pour la première fois. L'accès rapide est destiné aux utilisateurs expérimentés. Votre étape suivante serait [d'installer git](../Installing-AndroidAPS/git-install.rst) si vous ne l'avez pas déjà.

Si vous avez déjà mis à jour AAPS dans les versions précédentes et que vous utilisez un PC Windows, vous pouvez mettre à jour en deux étapes simples :

1. [Mettez à jour la copie locale](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
2. [Générez un APK signé](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Sélectionnez 'app' au lieu de 'wear' au passage !)

## Installer git (si vous ne l'avez pas)

Suivez le manuel sur la [page d'installation de git](../Installing-AndroidAPS/git-install.rst).

## Mettez à jour votre copie locale

* Cliquez sur : VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Cliquez sur Pull (pas de changements dans la boîte de dialogue)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Générer un APK signé

<!--- Text is maintained in page building-apk.md ---> Dans le menu , sélectionnez "Build" puis "Generate Signed Bundle / APK...". (Le menu d'Android Studio a changé en septembre 2018. Dans les anciennes versions, sélectionnez dans le menu « Build » puis « Generate Signed APK... ».)

  
La signature signifie que vous signez votre application générée mais de manière numérique comme une sorte d’empreinte digitale dans l’application elle-même. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez le lien [ici](https://developer.android.com/studio/publish/app-signing.html#generate-key). La sécurité est un sujet important et complexe et vous n'avez pas besoin de cela maintenant.

![Capture d'écran 39a](../images/Installation_Screenshot_39a.PNG)

Dans la boite de dialogue suivante, sélectionnez "APK" à la place de "Android App Bundle" et cliquez sur le bouton "Next".

![Capture d'écran 39b](../images/Installation_Screenshot_39b.PNG)

Sélectionnez "app" et cliquez sur "Next".

![Capture d'écran 40](../images/Installation_Screenshot_40.png)

Entrez le chemin d'accès au fichier de clés, entrez le mot de passe du fichier, sélectionnez l'alias de clé et entrez le mot de passe de la clé.

Sélectionnez 'Remember passwords'.

Puis cliquez sur next.

![Chemin du fichier de clés](../images/KeystorePathUpdate.PNG)

Sélectionnez "full" (ou "fullRelease") comme favori pour l'application générée. Sélectionnez V1 "Jar Signature" (V2 est optionnel) et cliquez sur "Finish". Les informations suivantes peuvent être importantes pour une utilisation ultérieure.

* 'Release' devrait être votre choix par défaut pour "Build Variants", 'Debug' est juste pour les personnes qui codent.
* Sélectionnez le type de génération que vous souhaitez complier. 
  * full / fullRelease (c'est-à-dire recommandations automatiquement adoptées en boucle fermée)
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

Veuillez sélectionner le répertoire AndroidAPS/app/full/release pour trouver le fichier "app-full-release.apk". Transférez ce fichier sur votre smartphone Android. Vous pouvez le faire de votre façon préférée :

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

## Vérifier la version d'AAPS sur le téléphone

Vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos".

![Version installée d'AAPS](../images/Update_VersionCheck.png)

## Dépannage

Voir la page spécifique [dépannage Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).