(github-build-apk)=

# Compilation dans le navigateur – Étape 4 : compiler l'APK

```{note}
Ceci est l'**Étape 4** de la [Compilation dans le navigateur](BrowserBuild.md). Terminez d'abord l'[Étape 3 – Autoriser Google Drive](BrowserBuildGoogleDrive.md).
```

## GitHub Actions AAPS-CI pour compiler l'APK AAPS
 - Convient à la plupart des utilisateurs.

```{tab-set}

:::{tab-item} Wiki
### Lancer le workflow pour compiler l'APK signé

1. Dans votre copie GitHub d'AndroidAPS, sélectionnez Actions.
2. Développez All Workflows.
3. Choisissez AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Faites défiler vers le bas et appuyez sur Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Laissez **Use workflow from** sur la branche master. Dans **Select AAPS Version**, choisissez la version d'**AAPS** que vous voulez compiler (en général la plus récente). Choisissez la [variante](#browserbuild-variant) (fullRelease) et appuyez sur Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Vous verrez le message Workflow run was successfully requested. Actualisez la page de votre navigateur et vous pourrez suivre l'avancement de la compilation. Quand l'action est terminée, l'action AAPS CI affiche une coche verte. Vous avez compilé avec succès la nouvelle version d'Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Installer l'APK AAPS

1. Ouvrez votre Google Drive
2. Ouvrez le dossier AAPS, sélectionnez le dossier de la nouvelle version : vous y trouverez la version pour le téléphone et la version pour Android Wear.

![Google Drive Location](../images/update/CI/GitHubActions5.png)
:::

:::{tab-item} Vidéo
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## Choix de la version à compiler

**Seules les versions d'AAPS 3.3.2.1 et plus récentes peuvent être compilées avec la méthode dans le navigateur.**

Appuyez sur **Select AAPS Version** et choisissez la version à compiler. La version la plus récente est en haut de la liste.

![Liste Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Choix de la variante de compilation

*Remarque : les applications Android et Android Wear sont compilées toutes les deux automatiquement.*

  - Choisissez la variante dont vous avez besoin :
    - fullRelease : pour une utilisation normale avec la pompe, avec toutes les fonctions.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient) : pour les aidants (nécessite [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` compile **AAPSClient3**, disponible à partir de la version 4.0 d'**AAPS** (voir [À propos d'AAPSClient, AAPSClient2 et AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease : pour remplacer l'application ou la télécommande de votre pompe

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Les variantes qui finissent par « Debug » indiquent que l'APK sera compilé en mode debug, ce qui est utile aux développeurs pour le dépannage.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Quand la compilation a réussi, l'apk est enregistré dans votre Google Drive. Continuez avec [Transfert et installation de AAPS](TransferringAndInstallingAaps.md).

```{note}
À partir de septembre 2026, la [vérification des développeurs Android](#android-developer-verification) de Google peut bloquer l'installation de l'APK en appuyant sur le fichier, selon votre pays. Des solutions gratuites sont expliquées sur cette page.
```

Si la compilation échoue, [cherchez d'abord ce qui ne va pas dans le log de compilation](#aaps-ci-read-the-logs), puis consultez [Dépannage de la compilation dans le navigateur](../GettingHelp/BrowserBuildTroubleshooting.md). Pour inclure un commit précis dans votre compilation, voir [cherry-pick d'un commit](#github-cherry-pick).
