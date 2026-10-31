(github-build-apk)=

# Bouwen in de browser – Stap 4: De APK bouwen

```{note}
Dit is **Stap 4** van [Bouwen in de browser](BrowserBuild.md). Rond eerst [Stap 3 – Google Drive autoriseren](BrowserBuildGoogleDrive.md) af.
```

## AAPS-CI GitHub Actions om de AAPS APK te bouwen
 - Geschikt voor gewone gebruikers.

```{tab-set}

:::{tab-item} Wiki
### De workflow starten om de ondertekende APK te bouwen

1. Kies in je GitHub-kopie van AndroidAPS Actions.
2. Klap All Workflows uit.
3. Kies AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll naar beneden en tik op Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Laat **Use workflow from** op de master branch staan. Kies bij **Select AAPS Version** de **AAPS**-versie die je wilt bouwen (meestal de nieuwste). Kies de [variant](#browserbuild-variant) (fullRelease) en tik op Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Je ziet de melding Workflow run was successfully requested. Vernieuw de pagina in je browser. Dan kun je de voortgang van het bouwen volgen. Als de actie klaar is, toont de AAPS CI-actie een groen vinkje. Je hebt de bijgewerkte versie van Android APS gebouwd.

![Monitor Workflow](../images/update/CI/GitHubActions4.png)

### De AAPS APK installeren

1. Open je Google Drive
2. Ga naar de map AAPS en kies de map met de nieuwe versie. Daar vind je zowel de versie voor de telefoon als die voor Android Wear.

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

## Versie kiezen om te bouwen

**Alleen AAPS-versies vanaf 3.3.2.1 kunnen met de browsermethode gebouwd worden.**

Tik op **Select AAPS Version** en kies de versie die je wilt bouwen. De nieuwste versie staat bovenaan de lijst.

![Lijst Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Buildvariant kiezen

*Let op: de apps voor Android en Android Wear worden allebei automatisch gebouwd.*

  - Kies de variant die je nodig hebt:
    - fullRelease: voor normaal gebruik met een pomp, met alle functies.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): voor verzorgers (vereist [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` bouwt **AAPSClient3**, beschikbaar vanaf **AAPS**-versie 4.0 (zie [Over AAPSClient, AAPSClient2 en AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: om je pomp-app/controller te vervangen

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Varianten die eindigen op “Debug” betekenen dat de APK in debugmodus wordt gebouwd. Dat is handig voor ontwikkelaars bij het zoeken naar fouten.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Als het bouwen lukt, wordt de apk in je Google Drive opgeslagen. Ga verder met [AAPS overzetten en installeren](TransferringAndInstallingAaps.md).

```{note}
Vanaf september 2026 kan Google's [Android developer verification](#android-developer-verification) het installeren van de APK door op het bestand te tikken blokkeren, afhankelijk van je land. Gratis oplossingen worden op die pagina uitgelegd.
```

Als het bouwen mislukt, [zoek dan eerst in het buildlog uit wat er fout ging](#aaps-ci-read-the-logs) en bekijk daarna [Bouwen in de browser: probleemoplossing](../GettingHelp/BrowserBuildTroubleshooting.md). Om een bepaalde commit in je build op te nemen, zie [een commit cherry-picken](#github-cherry-pick).
