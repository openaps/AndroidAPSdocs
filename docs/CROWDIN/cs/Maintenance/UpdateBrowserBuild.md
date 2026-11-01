# Aktualizace v prohlížeči (fork)

```{tip}
Sestavili jste AAPS pomocí **AAPS Builder**? Tuto stránku nepotřebujete: viz [Aktualizace AAPS s AAPS Builder](#aaps-builder-updates).
```

## Sestavte si aplikaci sami, místo stažení

**AAPS** nelze stáhnout kvůli předpisům pro zdravotnické prostředky. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným! Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Potom místo tohoto návodu postupujte podle [postupu Sestavení **AAPS** v prohlížeči](../SettingUpAaps/BrowserBuild.md). Místo vytvoření nového úložiště klíčů musíte vybrat to, které jste zkopírovali ze svého počítače.
Tento krok je povinný jen poprvé, při dalších aktualizacích pak budete moci postupovat podle tohoto návodu.
```

```{tip}
**Přecházíte na AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) je jednodušší sestavení v prohlížeči: žádný fork k synchronizaci a aplikaci stáhnete přímo z GitHubu. Přecházet nemusíte: tento návod funguje dál. Pokud přejdete, nejprve si ze svého forku získejte kopii úložiště klíčů, jak je popsáno v části [Přechod z předchozího sestavení v prohlížeči](#aaps-builder-from-fork). Jinak nové sestavení nebude moci aktualizovat AAPS ve vašem telefonu.
```

## Přehled aktualizace na novou verzi AAPS v prohlížeči

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

### Exportujte své nastavení

Exportujte nastavení ze stávající verze **AAPS** ve svém telefonu. Možná ho nebudete potřebovat, ale opatrnosti není nikdy dost.

Pokud si nepamatujete, jak to udělat, podívejte se na stránku [Vytváření a obnova záloh](ExportImportSettings.md).

(Update-to-new-version-update-your-repo)=
### Aktualizujte svůj repozitář na GitHubu

[Přihlaste se na GitHub](https://github.com/login).

1. Vyberte Repositories (repozitáře).
2. Sjeďte dolů a vyberte svůj vlastní repozitář AndroidAPS.

![Výběr repozitáře AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Ověřte, že používáte svou vlastní kopii AndroidAPS (Forked from nightscout/AndroidAPS)
4. Klepnutím na Sync fork ji aktualizujte (počet commitů, o které je pozadu, se může od obrázku lišit)



![Synchronizace repozitáře AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Klepněte na Update branch

![Aktualizace repozitáře AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Poznámka: pokud jste svou kopii AndroidAPS omylem upravili, uvidíte tuto obrazovku. Zahoďte všechny změny (commity), abyste se vrátili k vydané verzi.

![Zahození nechtěných úprav](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Výborně.

![Repozitář je synchronizovaný](../images/update/CI/GitHubUpdate5.png)

### Spusťte workflow pro sestavení podepsaného APK

1. Ve své kopii AndroidAPS na GitHubu vyberte Actions.
2. Rozbalte All workflows (všechna workflow).
3. Vyberte AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Sjeďte dolů a klepněte na Run workflow.

![Run workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run workflow](../images/update/CI/GitHubActions3.png)

6. Zobrazí se zpráva „Workflow run was successfully requested.“ Obnovte stránku v prohlížeči a budete moci sledovat průběh sestavení. Když akce skončí, zobrazí se u akce AAPS CI zelená značka zaškrtnutí. You have successfully built the updated version of **AAPS**. To znamená, že APK pro hlavní telefon (Master) a pro Wear se nyní ukládají přímo na váš Disk Google (viz níže). APK AAPSClient si můžete stáhnout z Github > nightscout > AndroidAPS [zde](https://github.com/nightscout/AndroidAPS/releases)


![Sledování workflow](../images/update/CI/GitHubActions4.png)


### Nainstalujte APK AAPS

1. Otevřete svůj Disk Google
2. Otevřete složku AAPS, vyberte složku nové verze a najdete v ní verzi pro telefon i pro Android Wear.

![Umístění na Disku Google](../images/update/CI/GitHubActions5.png)

```{note}
Od září 2026 může [ověřování vývojářů pro Android](#android-developer-verification) od Googlu podle vaší země blokovat instalaci APK klepnutím na soubor. Bezplatná řešení jsou vysvětlena na té stránce.
```

Pokračujte [zde](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Řešení problémů

Pokud se něco pokazí, nepanikařte.

Nadechněte se!

Potom zkontrolujte, zda už váš problém není popsán: viz [Řešení problémů s AAPS Builder](#aaps-builder-troubleshooting), pokud sestavujete pomocí **AAPS Builder**, jinak [Sestavení v prohlížeči: řešení problémů](#aaps-ci-troubleshooting).

Pokud potřebujete další pomoc, obraťte se na ostatní uživatele **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) nebo [Discordu](https://discord.gg/4fQUWHZ4Mw).
