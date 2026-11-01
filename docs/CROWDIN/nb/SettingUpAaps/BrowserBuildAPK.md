(github-build-apk)=

# Nettleserbygg – Steg 4: Bygg APK-filen

```{note}
Dette er **steg 4** av [Nettleserbygg](BrowserBuild.md). Fullfør først [Steg 3 – Autoriser Google Drive](BrowserBuildGoogleDrive.md).
```

## AAPS-CI GitHub Actions for å bygge AAPS-APK-filen
 - Passer for vanlige brukere.

```{tab-set}

:::{tab-item} Wiki
### Kjør arbeidsflyten for å bygge den signerte APK-filen

1. I GitHub-kopien din av AndroidAPS velger du Actions.
2. Utvid All Workflows.
3. Velg AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Bla nedover og trykk på Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. La **Use workflow from** stå på master-grenen. I **Select AAPS Version** velger du den **AAPS**-versjonen du vil bygge (vanligvis den nyeste). Velg [varianten](#browserbuild-variant) (fullRelease) og trykk Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Du ser meldingen Workflow run was successfully requested. Oppdater nettlesersiden, så kan du følge med på hvordan bygget går. Når handlingen er ferdig, viser AAPS CI-handlingen en grønn hake. Du har nå bygget den oppdaterte versjonen av Android APS.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### Installer AAPS-APK-filen

1. Åpne din Google Drive
2. Gå inn i AAPS, velg mappen for den nye versjonen, og der finner du både telefon- og Android Wear-versjonen.

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

## Valg av byggversjon

**Bare AAPS-versjoner fra 3.3.2.1 og nyere kan bygges med nettlesermetoden.**

Trykk **Select AAPS Version** og velg versjonen du vil bygge. Den nyeste versjonen ligger øverst i listen.

![Listen Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Valg av byggvariant

*Merk: både Android- og Android Wear-appene bygges automatisk.*

  - Velg varianten du trenger:
    - fullRelease: for vanlig bruk med pumpe og full funksjonalitet.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): for omsorgspersoner (krever [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` bygger **AAPSClient3**, tilgjengelig fra **AAPS** versjon 4.0 (se [Om AAPSClient, AAPSClient2 og AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: for å erstatte pumpeappen/pumpekontrolleren din

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Varianter som slutter på «Debug», betyr at APK-filen bygges i feilsøkingsmodus, som er nyttig for utviklere ved feilsøking.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Når bygget lykkes, lagres APK-filen i din Google Drive. Fortsett med [Overføre og installere AAPS](TransferringAndInstallingAaps.md).

```{note}
Fra september 2026 kan Googles [Android-utviklerverifisering](#android-developer-verification) blokkere installering av APK-filen ved å trykke på filen, avhengig av hvilket land du er i. Gratis løsninger er forklart på den siden.
```

Hvis bygget feiler, [finn først ut hva som gikk galt i byggloggen](#aaps-ci-read-the-logs), og se deretter [Nettleserbygg: feilsøking](../GettingHelp/BrowserBuildTroubleshooting.md). For å ta med en bestemt commit i bygget ditt, se [velge ut en enkelt commit (cherry-pick)](#github-cherry-pick).
