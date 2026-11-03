(github-build-apk)=

# Browser build – Step 4: Build the APK

```{note}
This is **Step 4** of the [Browser build](BrowserBuild.md). Prima completa il [Passo 3 – Autorizza Google Drive](BrowserBuildGoogleDrive.md).
```

## AAPS-CI GitHub Actions to Build the AAPS APK
 - Adatto a tutti gli utenti.

```{tab-set}

:::{tab-item} Wiki
### Run the Workflow to Build the Signed APK

1. In your GitHub copy of AndroidAPS, select Actions.
2. Espandi All Workflows.
3. Seleziona AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll down and tap Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Leave **Use workflow from** on the master branch. In **Select AAPS Version**, select the **AAPS** version you want to build (normally the newest one). Seleziona la [variante](#browserbuild-variant) (fullRelease) e tocca Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Vedrai il messaggio Workflow run was successfully requested. Aggiorna la pagina del browser e potrai seguire l'avanzamento della build. When the action completes, the AAPS CI action will show a green tick mark. You have successfully built the updated version of Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Install the AAPS APK

1. Apri il tuo Google Drive
2. Browse into AAPS, select the new version folder and you will find both the phone and Android Wear versions.

![Google Drive Location](../images/update/CI/GitHubActions5.png)
:::  

:::{tab-item} Video
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

## Build Version selection

**Only AAPS versions from 3.3.2.1 and above will build with the Browser method.**

Tap **Select AAPS Version** and pick the version to build. The newest version is at the top of the list.

![Select AAPS Version list](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Build Variants selection

*Note: both Android and Android Wear apps will be built automatically.*

  - Select the variant you need:
    - fullRelease: For regular pump usage with full functionality.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): For caregivers (requires [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` crea **AAPSClient3**, disponibile dalla versione 4.0 di **AAPS** (vedi [Informazioni su AAPSClient, AAPSClient2 e AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: per sostituire l'app o il controller del tuo micro

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Variants ending with “Debug” indicate that the APK will be built in debug mode, which is useful for developers for troubleshooting.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Quando la build riesce, l'apk viene salvato nel tuo Google Drive. Continue with [Transferring and Installing AAPS](TransferringAndInstallingAaps.md).

```{note}
From September 2026, Google's [Android developer verification](#android-developer-verification) may block installing the APK by tapping the file, depending on your country. Le soluzioni gratuite sono spiegate in quella pagina.
```

If the build fails, first [find out what went wrong in the build log](#aaps-ci-read-the-logs), then see [Browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md). To include a specific commit in your build, see [cherry-pick a commit](#github-cherry-pick).
