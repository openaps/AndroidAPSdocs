# Aktualizácia v prehliadači (fork)

```{tip}
Zostavili ste AAPS pomocou **AAPS Builder**? Túto stránku nepotrebujete: pozrite [Aktualizácia AAPS pomocou AAPS Builder](#aaps-builder-updates).
```

## Zostavte si aplikáciu sami namiesto stiahnutia

**AAPS** nie je možné stiahnuť kvôli predpisom pre zdravotnícke pomôcky. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným! Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Potom namiesto tohto návodu postupujte podľa postupu [Zostavenie **AAPS** v prehliadači](../SettingUpAaps/BrowserBuild.md). Namiesto vytvorenia nového úložiska kľúčov musíte vybrať to, ktoré ste skopírovali zo svojho počítača.
Tento krok je povinný iba prvýkrát, pri ďalších aktualizáciách potom môžete postupovať podľa tohto návodu.
```

```{tip}
**Prechádzate na AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) je jednoduchšie zostavenie v prehliadači: nemusíte synchronizovať fork a aplikáciu si stiahnete priamo z GitHubu. Prechádzať nemusíte: tento návod naďalej funguje. Ak prejdete, najprv si zo svojho forku získajte kópiu úložiska kľúčov, ako je vysvetlené v časti [Prechod z predchádzajúceho zostavenia v prehliadači](#aaps-builder-from-fork). Inak nové zostavenie nebude môcť aktualizovať AAPS vo vašom telefóne.
```

## Prehľad aktualizácie na novú verziu AAPS v prehliadači

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [browser build troubleshooting](../GettingHelp/BrowserBuildTroubleshooting.md).

### Exportujte svoje nastavenia

Exportujte nastavenia z existujúcej verzie **AAPS** vo vašom telefóne. Možno ich nebudete potrebovať, ale opatrnosti nikdy nie je dosť.

Ak si nepamätáte, ako na to, pozrite si stránku [Vytváranie a obnova záloh](ExportImportSettings.md).

(Update-to-new-version-update-your-repo)=
### Aktualizujte svoj repozitár na GitHube

[Prihláste sa do GitHubu](https://github.com/login).

1. Vyberte Repositories.
2. Posuňte sa nadol a vyberte svoj vlastný repozitár AndroidAPS.

![Výber repozitára AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Overte, že používate svoju vlastnú kópiu AndroidAPS (Forked from nightscout/AndroidAPS)
4. Ťuknite na Sync Fork a aktualizujte ho (počet zaostávajúcich commitov sa môže od obrázka líšiť)



![Synchronizácia repozitára AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Ťuknite na Update Branch

![Aktualizácia repozitára AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Poznámka: ak ste svoju kópiu AndroidAPS omylom zmenili, uvidíte túto obrazovku. Zahoďte všetky zmeny (commity), aby ste sa vrátili k vydanej verzii.

![Zahodenie nechcených zmien](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Výborne.

![Repozitár je synchronizovaný](../images/update/CI/GitHubUpdate5.png)

### Spustite workflow na zostavenie podpísaného APK

1. Vo svojej kópii AndroidAPS na GitHube vyberte Actions.
2. Rozbaľte All Workflows.
3. Vyberte AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Posuňte sa nadol a ťuknite na Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Zobrazí sa správa Workflow run was successfully requested. Obnovte stránku v prehliadači a budete môcť sledovať priebeh zostavenia. Keď sa akcia dokončí, pri akcii AAPS CI sa zobrazí zelená fajka. You have successfully built the updated version of **AAPS**. To znamená, že APK pre hlavný telefón (Master) a pre hodinky (Wear) sa teraz ukladajú priamo na váš Disk Google (pozrite nižšie). APK AAPSClient si môžete stiahnuť z GitHub > nightscout > AndroidAPS [tu](https://github.com/nightscout/AndroidAPS/releases)


![Sledovanie workflowu](../images/update/CI/GitHubActions4.png)


### Nainštalujte APK AAPS

1. Otvorte svoj Disk Google
2. Prejdite do priečinka AAPS, vyberte priečinok s novou verziou a nájdete v ňom verziu pre telefón aj pre Android Wear.

![Umiestnenie na Disku Google](../images/update/CI/GitHubActions5.png)

```{note}
Od septembra 2026 môže [overovanie vývojárov pre Android](#android-developer-verification) od Googlu v závislosti od vašej krajiny zablokovať inštaláciu APK ťuknutím na súbor. Bezplatné riešenia sú vysvetlené na tej stránke.
```

Pokračujte [tu](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Riešenie problémov

Ak sa niečo pokazí, nepanikárte.

Zhlboka sa nadýchnite!

Potom skontrolujte, či už váš problém nie je opísaný: ak zostavujete pomocou **AAPS Builder**, pozrite [riešenie problémov s AAPS Builder](#aaps-builder-troubleshooting), inak pozrite [Riešenie problémov so zostavením v prehliadači](#aaps-ci-troubleshooting).

Ak potrebujete ďalšiu pomoc, obráťte sa na ostatných používateľov **AAPS** na [Facebooku](https://www.facebook.com/groups/AndroidAPSUsers) alebo [Discorde](https://discord.gg/4fQUWHZ4Mw).
