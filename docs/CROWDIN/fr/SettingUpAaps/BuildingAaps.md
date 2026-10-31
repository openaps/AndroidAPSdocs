# Compilation d'AAPS

## Compiler vous-même au lieu de télécharger

**L'application AAPS (le fichier apk) n'est pas disponible en téléchargement, en raison de la réglementation concernant les dispositifs médicaux. Il est légal de compiler l'application pour votre usage personnel, mais vous ne devez en aucun cas en donner une copie à d'autres personnes !**

Consultez la [Foire Aux Questions (FAQ)](../UsefulLinks/FAQ.md) pour plus de détails.

---

Il existe trois méthodes pour compiler l'application AAPS :

### Compiler avec un navigateur (recommandé)

Vous pouvez compiler l'application avec votre smartphone en utilisant GitHub Actions. Depuis un téléphone Android, la page de configuration [AAPS Builder](#aaps-builder) vous guide pas à pas, et vous lancez vous-même chaque compilation. Depuis un ordinateur ou un iPhone, vous pouvez aussi compiler avec un fork et enregistrer l'application dans votre Google Drive.

**[Suivez ces instructions.](./BrowserBuild.md)**

----

### Compiler avec Android Studio

Vous pouvez compiler l'application sur votre ordinateur avec Android Studio. C'était autrefois la seule méthode de compilation ; aujourd'hui, Android Studio est surtout utilisé par les développeurs qui envisagent de modifier le code.

**[Suivez ces instructions.](./ComputerBuild.md)**

----

### Compiler en ligne de commande

Cette méthode est destinée à ceux qui préfèrent compiler AAPS en ligne de commande sur leur ordinateur, sans installer Android Studio.

**[Suivez ces instructions.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Si la compilation échoue

Chaque méthode de compilation a sa propre section de dépannage :

* **AAPS Builder** : [Dépannage d'AAPS Builder](#aaps-builder-troubleshooting)
* **Compilation dans le navigateur** depuis un ordinateur ou un iPhone : [Dépannage de la compilation dans le navigateur](#aaps-ci-troubleshooting)
* **Android Studio** : [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Vous avez perdu votre keystore ou son mot de passe ? Voir [Réinstaller AAPS avec un nouveau keystore](#reinstall-aaps).

Si l'application est compilée mais ne s'installe pas sur votre téléphone, voir [Transfert et installation de AAPS sur votre smartphone](TransferringAndInstallingAaps.md).

Si votre problème n'est pas dans la liste, voir [Où puis-je obtenir de l'aide ?](../GettingHelp/WhereCanIGetHelp.md).
