# Mise à jour vers une nouvelle version ou une branche

## Construire vous-même au lieu de télécharger

**AndroidAPS n'est pas disponible en téléchargement en raison de la réglementation concernant les dispositifs médicaux. Il est légal de construire l'application pour votre usage personnel, mais vous ne devez en aucun cas donner une copie à d'autres personnes ! Voir [FAQ](../Getting-Started/FAQ.md) pour plus de détails.**

## Remarques importantes

* As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.
* Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to build the apk.
* [Les systèmes d'exploitation Windows 10 32 bits](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) ne sont pas pris en charge par Android Studio 3.5.1.
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Quick walk-through for experienced users

Please skip this paragraph if you update for the first time. The quick walk-through is for experienced users. Your next step would be to [install git](../Installing-AndroidAPS/git-install.rst) if you do not have it already.

If you already updated AAPS in previous versions and use a Windows PC you can update in two simple steps:

1. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
2. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)

## Installer git (si vous ne l'avez pas)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Update your local copy

* Click: VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Click Pull (no changes in dialog field)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Générer un APK signé

<!--- Text is maintained in page building-apk.md ---> Dans le menu , sélectionnez "Build" puis "Generate Signed Bundle / APK...". (Le menu d'Android Studio a changé en septembre 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

  
Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. C'est nécessaire car Android a une règle qui impose de n'accepter que du code signé pour des raisons de sécurité. Pour plus d'informations sur ce sujet, suivez le lien [ici](https://developer.android.com/studio/publish/app-signing.html#generate-key). La sécurité est un sujet important et complexe et vous n'avez pas besoin de cela maintenant.

![Capture d'écran 39a](../images/Installation_Screenshot_39a.PNG)

Dans la boite de dialogue suivante, sélectionnez "APK" à la place de "Android App Bundle" et cliquez sur le bouton "Next".

![Capture d'écran 39b](../images/Installation_Screenshot_39b.PNG)

Sélectionnez "app" et cliquez sur "Next".

![Capture d'écran 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Select "full" (or "fullRelease") as flavour for the generated app. Select V1 "Jar Signature" (V2 is optional) and click "Finish". Les informations suivantes peuvent être importantes pour une utilisation ultérieure.

* 'Release' devrait être votre choix par défaut pour "Build Variants", 'Debug' est juste pour les personnes qui codent.
* Sélectionnez le type de génération que vous souhaitez complier. 
  * full / fullRelease (i.e. recommendations automatically enacted in closed looping)
  * openloop (i.e. recommendations given to user to manually enact)
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

Veuillez sélectionner le répertoire AndroidAPS/app/full/release pour trouver le fichier "app-full-release.apk". Transférez ce fichier sur votre smartphone Android. You can do it on your preferred way:

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. Si vous utilisez une autre solution, veuillez procéder en conséquence.

![Capture d'écran 48](../images/Installation_Screenshot_48.png)

Dans les paramètres de sécurité votre smartphone, il y a un paramètre "Sources inconnues" qu'il faut autoriser pour donner le droit d'installer les fichiers APK reçus par Gmail ou copiés manuellement sur le téléphone.

Autorisez "Sources inconnues". Après l'installation, vous pouvez le désactiver à nouveau.

![Installation à partir de sources inconnues](../images/Installation_Screenshot_49-50.png)

La dernière étape consiste à cliquer sur le fichier APK obtenu via Gmail et installer l'application. Si l'APK ne s'installe pas et que vous avez une version plus ancienne d'AndroidAPS sur votre téléphone (signé avec une autre clé), vous devrez au préalable la désinstaller. N'oubliez pas dans ce cas d'exporter vos paramètres auparavant !

Yes, vous l'avez et pouvez maintenant commencer à configurer AndroidAPS pour votre utilisation (MGC, pompe à insuline), etc.

## Check AAPS version on phone

Vous pouvez vérifier la version AAPS sur votre téléphone en cliquant sur le menu 3 points en haut à droite puis sur "à propos".

![AAPS version installed](../images/Update_VersionCheck.png)

## Dépannage

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).