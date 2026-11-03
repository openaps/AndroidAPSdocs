(github-build-apk)=

# Bygge i webbläsaren – Steg 4: Bygg APK-filen

```{note}
Detta är **steg 4** av [Bygge i webbläsaren](BrowserBuild.md). Gör först klart [Steg 3 – Auktorisera Google Drive](BrowserBuildGoogleDrive.md).
```

## Bygg APK-filen för AAPS med AAPS-CI i GitHub Actions
 - Passar för de flesta användare.

```{tab-set}

:::{tab-item} Wiki
### Kör arbetsflödet som bygger den signerade APK-filen

1. I din kopia av AndroidAPS på GitHub väljer du Actions.
2. Fäll ut All Workflows.
3. Välj AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scrolla ned och tryck på Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Låt **Use workflow from** (använd arbetsflödet från) stå kvar på master-grenen. I **Select AAPS Version** (välj AAPS-version) väljer du den **AAPS**-version som du vill bygga (oftast den senaste). Välj [variant](#browserbuild-variant) (fullRelease) och tryck på Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Du ser meddelandet Workflow run was successfully requested. Uppdatera sidan i webbläsaren, så kan du följa hur bygget går. När körningen är klar visar AAPS CI en grön bock. Nu har du byggt den uppdaterade versionen av Android APS.

![Följ arbetsflödet](../images/update/CI/GitHubActions4.png)

### Installera APK-filen för AAPS

1. Öppna din Google Drive
2. Gå till mappen AAPS och välj mappen för den nya versionen. Där hittar du både telefonversionen och versionen för Android Wear.

![Plats i Google Drive](../images/update/CI/GitHubActions5.png)
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

## Välj version att bygga

**Bara AAPS-versioner från och med 3.3.2.1 kan byggas i webbläsaren.**

Tryck på **Select AAPS Version** och välj den version som ska byggas. Den senaste versionen ligger överst i listan.

![Listan Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Välj byggvariant

*Obs! Både Android-appen och Android Wear-appen byggs automatiskt.*

  - Välj den variant du behöver:
    - fullRelease: För vanlig användning med pump, med alla funktioner.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): För anhöriga och vårdare (kräver [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` bygger **AAPSClient3**, som finns från och med **AAPS** version 4.0 (se [Om AAPSClient, AAPSClient2 och AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: För att ersätta pumpens app/handenhet

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Varianter som slutar på ”Debug” betyder att APK-filen byggs i felsökningsläge (debug), vilket är användbart för utvecklare som letar efter fel.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

När bygget lyckas sparas APK-filen i din Google Drive. Fortsätt med [Överföra och installera AAPS](TransferringAndInstallingAaps.md).

```{note}
Från september 2026 kan Googles [verifiering av Android-utvecklare](#android-developer-verification) blockera installationen av APK-filen när du trycker på filen, beroende på vilket land du bor i. Kostnadsfria sätt att komma runt detta förklaras på den sidan.
```

Om bygget misslyckas: [ta först reda på vad som gick fel i byggloggen](#aaps-ci-read-the-logs), och läs sedan [Bygge i webbläsaren: felsökning](../GettingHelp/BrowserBuildTroubleshooting.md). Om du vill ta med en viss commit i ditt bygge, se [cherry-picka en commit](#github-cherry-pick).
