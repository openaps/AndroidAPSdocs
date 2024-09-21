# Transfert et installation de AAPS sur votre smartphone

Dans le chapitre précédent, [Compilation d'**AAPS**](../building-AAPS.md), vous avez compilé l'application **AAPS** (qui est un fichier .apk) sur votre ordinateur.

La prochaine étape consiste à **transférer** le fichier APK **AAPS** (ainsi que d'autres applications dont vous pourriez avoir besoin, comme BYODA, Xdrip+ ou une autre application MGC) sur votre smartphone Android, puis à **installer** la/les application(s).

Après avoir installé **AAPS** sur votre smartphone, vous pourrez passer à la [**configuration de la boucle AAPS**](configuring-the-AAPS-loop.md).

Plusieurs possibilités existent pour transférer le fichier APK de **AAPS** de votre ordinateur vers le smartphone. Nous détaillons ici deux de ces possibilités :

- Option 1 - Utilisez votre Google drive (Gdrive)
- Option 2 - Utiliser un câble USB

Veuillez noter que le transfert par email peut être compliqué, nous vous déconseillons cette méthode.

## Option 1. Utiliser Google Drive pour transférer des fichiers

Ouvrez [Google.com](https://www.google.com/) dans votre navigateur Web et connectez-vous à votre compte Google.

Sur le coin supérieur droit, sélectionnez l'application Drive dans le menu Google.

![Démarrer l'application Drive](../images/GoogleDriveInWebbrowser.png)

Dans l'application Google Drive, faites un clic droit dans la zone libre en dessous des fichiers et dossiers et sélectionnez "Importer un fichier".

![Télécharger le fichier apk avec l'application Google Drive](../images/GoogleDriveUploadFile.png)

Vous devriez maintenant voir le fichier APK téléchargé sur Google Drive.

### Utiliser l'application Google Drive pour installer le fichier APK

Passez sur votre téléphone portable et lancez l'application Google Drive. Il s'agit d'une application installée par défaut, que vous retrouverez avec les autres applications Google ou en faisant une recherche sur le nom de l'application.

![démarrer l'application Google Drive](../images/GoogleDriveMobileAPPLaunch.png)

Lancez l'installation de l'APK en double-cliquant sur le nom de fichier dans l'application Google Drive sur le smartphone.

![lancer l'installation de l'APK](../images/GoogleDriveMobileUploadedAPK.png)

Si vous recevez une notification de sécurité vous indiquant que vous n'êtes pas autorisé.e à installer des applications depuis Google Drive pour le moment, veuillez l'autoriser temporairement. Pensez à le désactiver par la suite car cela représente un risque de sécurité si vous le laissez activé en permanence.

![Notification de sécurité Google Drive](../images/GoogleDriveMobileMissingSecuritySetting.png)

![Notification de sécurité Google Drive](../images/GoogleDriveMobileMissingSecuritySetting.png)

Une fois l'installation terminée, vous en avez terminé pour cette étape.

Vous devriez voir l'icône **AAPS** et pouvoir ouvrir l'application.

```{warning}
**AVIS DE SÉCURITÉ IMPORTANT**
Avez-vous pensé à désactiver l'autorisation d'installation depuis Google Drive ?
```

## Vous pouvez maintenant continuer avec la [configuration de la boucle AAPS](../Installing-AndroidAPS/setup-wizard.md).

## Option 2. Utiliser un câble USB pour transférer des fichiers

La deuxième façon de transférer le fichier APK d'AAPS est avec un [câble USB](https://support.google.com/android/answer/9064445?hl=fr).

Transférez le fichier depuis son emplacement sur votre ordinateur vers le dossier "Downloads" sur le téléphone.

Sur votre téléphone, vous devez autoriser l'installation à partir de sources inconnues. Vous trouverez les explications pour ce faire sur Internet (_par exemple_ [ici](https://www.expressvpn.com/fr/support/vpn-setup/enable-apk-installs-android/) ou [ici](https://www.frandroid.com/comment-faire/tutoriaux/184151_comment-installer-un-fichier-apk-sur-son-terminal-android)).

Une fois que vous avez transféré le fichier en le faisant glisser de votre ordinateur à votre smartphone, pour l'installer, ouvrez le dossier "Downloads" sur le téléphone, cliquez sur l'APK AAPS et sélectionnez "installer". Vous pouvez ensuite passer à l'étape suivante, [Assistant de configuration](../Installing-AndroidAPS/setup-wizard.md), qui vous aidera à configurer l'application **AAPS** et à mettre en place la boucle sur votre smartphone.
