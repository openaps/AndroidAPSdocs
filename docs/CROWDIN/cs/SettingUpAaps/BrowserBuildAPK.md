(github-build-apk)=

# Sestavení v prohlížeči – Krok 4: Sestavte APK

```{note}
Toto je **krok 4** návodu [Sestavení v prohlížeči](BrowserBuild.md). Nejprve dokončete [Krok 3 – Autorizujte Disk Google](BrowserBuildGoogleDrive.md).
```

## AAPS-CI v GitHub Actions pro sestavení APK aplikace AAPS
 - Vhodné pro běžné uživatele.

```{tab-set}

:::{tab-item} Wiki
### Spusťte workflow pro sestavení podepsaného APK

1. Ve své kopii AndroidAPS na GitHubu vyberte Actions.
2. Rozbalte All workflows (všechna workflow).
3. Vyberte AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Sjeďte dolů a klepněte na Run workflow.

![Spuštění workflow](../images/update/CI/GitHubActions2.png)

5. Pole **Use workflow from** ponechte na větvi master. V poli **Select AAPS Version** vyberte verzi **AAPS**, kterou chcete sestavit (obvykle nejnovější). Vyberte [variantu](#browserbuild-variant) (fullRelease) a klepněte na Run workflow.



![Spuštění workflow](../images/update/CI/GitHubActions3.png)

6. Zobrazí se zpráva „Workflow run was successfully requested.“ Obnovte stránku v prohlížeči a budete moci sledovat průběh sestavení. Když akce skončí, zobrazí se u akce AAPS CI zelená značka zaškrtnutí. Úspěšně jste sestavili aktualizovanou verzi Android APS.

![Sledování workflow](../images/update/CI/GitHubActions4.png)

### Nainstalujte APK aplikace AAPS

1. Otevřete svůj Disk Google
2. Otevřete složku AAPS, vyberte složku nové verze a najdete v ní verzi pro telefon i pro Android Wear.

![Umístění na Disku Google](../images/update/CI/GitHubActions5.png)
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

## Výběr verze pro sestavení

**Metodou v prohlížeči lze sestavit jen verze AAPS 3.3.2.1 a novější.**

Klepněte na **Select AAPS Version** a vyberte verzi, kterou chcete sestavit. Nejnovější verze je nahoře v seznamu.

![Seznam Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## Výběr varianty sestavení

*Poznámka: automaticky se sestaví aplikace pro Android i pro Android Wear.*

  - Vyberte variantu, kterou potřebujete:
    - fullRelease: pro běžné používání s pumpou, se všemi funkcemi.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): pro pečovatele (vyžaduje [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` sestaví **AAPSClient3**, dostupný od verze **AAPS** 4.0 (viz [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: jako náhrada aplikace / ovladače vaší pumpy

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Variants ending with “Debug” indicate that the APK will be built in debug mode, which is useful for developers for troubleshooting.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

Když sestavení proběhne úspěšně, APK se uloží na váš Disk Google. Pokračujte na stránce [Přenos a instalace AAPS](TransferringAndInstallingAaps.md).

```{note}
Od září 2026 může [ověřování vývojářů pro Android](#android-developer-verification) od Googlu podle vaší země blokovat instalaci APK klepnutím na soubor. Bezplatná řešení jsou vysvětlena na té stránce.
```

Pokud sestavení selže, nejprve [zjistěte v protokolu sestavení, co se pokazilo](#aaps-ci-read-the-logs), a potom se podívejte na stránku [Sestavení v prohlížeči: řešení problémů](../GettingHelp/BrowserBuildTroubleshooting.md). Pokud chcete do sestavení zahrnout konkrétní commit, viz [cherry-pick commitu](#github-cherry-pick).
