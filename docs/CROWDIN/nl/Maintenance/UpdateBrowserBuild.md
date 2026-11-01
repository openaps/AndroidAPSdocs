# Bijwerken met een browser (fork)

```{tip}
Heb je AAPS gebouwd met **AAPS Builder**? Dan heb je deze pagina niet nodig: zie [AAPS bijwerken met AAPS Builder](#aaps-builder-updates).
```

## Zelf bouwen, in plaats van downloaden

**AAPS** kun je niet downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven! Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

```{note}
In case you want to upgrade **AAPS** with a browser for the first time: copy your back-up keystore file to your Google Drive. Volg daarna de [procedure om **AAPS** in de browser te bouwen](../SettingUpAaps/BrowserBuild.md) in plaats van deze handleiding. Maak geen nieuwe keystore, maar kies de keystore die je van je computer hebt gekopieerd.
Dit hoeft alleen de eerste keer. Voor de volgende updates kun je deze handleiding volgen.
```

```{tip}
**Overstappen naar AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) is de eenvoudigere manier om in de browser te bouwen: je hoeft geen fork te synchroniseren en je downloadt de app direct van GitHub. Je hoeft niet over te stappen: deze handleiding blijft werken. Stap je over? Haal dan eerst een kopie van je keystore uit je fork, zoals uitgelegd in [Overstappen van de vorige manier van bouwen in de browser](#aaps-builder-from-fork). Anders kan de nieuwe build de AAPS op je telefoon niet bijwerken.
```

## Overzicht: bijwerken naar een nieuwe versie van AAPS met een browser

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Heb je problemen? Zie dan de aparte pagina [Bouwen in de browser: probleemoplossing](../GettingHelp/BrowserBuildTroubleshooting.md).

### Exporteer je instellingen

Exporteer je instellingen uit de **AAPS**-versie die nu op je telefoon staat. Misschien heb je ze niet nodig, maar het is beter om het zeker te doen.

Weet je niet meer hoe dit moet? Kijk dan op de pagina [Back-ups maken en terugzetten](ExportImportSettings.md).

(Update-to-new-version-update-your-repo)=
### Werk je GitHub-repository bij

[Log in op GitHub](https://github.com/login).

1. Kies Repositories.
2. Scroll naar beneden en kies je eigen AndroidAPS-repository.

![AndroidAPS-repo kiezen](../images/update/CI/GitHubUpdate1.png)

3. Controleer of je je eigen kopie van AndroidAPS gebruikt (Forked from nightscout/AndroidAPS)
4. Tik op Sync Fork om hem bij te werken (het aantal commits achterstand kan anders zijn dan op de afbeelding)



![AndroidAPS-repo synchroniseren](../images/update/CI/GitHubUpdate2.png)

5. Tik op Update Branch

![AndroidAPS-repo bijwerken](../images/update/CI/GitHubUpdate3.png)

Let op: als je je kopie van AndroidAPS per ongeluk hebt gewijzigd, zie je dit scherm. Gooi alle wijzigingen (commits) weg (Discard) om terug te gaan naar de uitgebrachte versie.

![Ongewenste wijzigingen weggooien](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of **AAPS**. Goed gedaan.

![Repo gesynchroniseerd](../images/update/CI/GitHubUpdate5.png)

### Start de workflow om de ondertekende APK te bouwen

1. Kies in je GitHub-kopie van AndroidAPS Actions.
2. Klap All Workflows uit.
3. Kies AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll naar beneden en tik op Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Je ziet de melding Workflow run was successfully requested. Vernieuw de pagina in je browser. Dan kun je de voortgang van het bouwen volgen. Als de actie klaar is, toont de AAPS CI-actie een groen vinkje. You have successfully built the updated version of **AAPS**. Dit betekent dat de Master- en Wear-apk nu direct in je Google Drive worden opgeslagen (zie hieronder). De AAPSClient apk kun je downloaden via Github > nightscout > AndroidAPS [hier](https://github.com/nightscout/AndroidAPS/releases)


![Workflow volgen](../images/update/CI/GitHubActions4.png)


### Installeer de AAPS APK

1. Open je Google Drive
2. Ga naar de map AAPS en kies de map met de nieuwe versie. Daar vind je zowel de versie voor de telefoon als die voor Android Wear.

![Locatie in Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
Vanaf september 2026 kan Google's [Android developer verification](#android-developer-verification) het installeren van de APK door op het bestand te tikken blokkeren, afhankelijk van je land. Gratis oplossingen worden op die pagina uitgelegd.
```

Ga [hier](#Update-to-new-version-check-aaps-version-on-phone) verder

(update-browser-build-troubleshooting)=

## Probleemoplossing

Gaat er iets mis? Geen paniek.

Haal even diep adem!

Kijk daarna of je probleem al beschreven is: zie [Probleemoplossing voor AAPS Builder](#aaps-builder-troubleshooting) als je bouwt met **AAPS Builder**, of anders [Bouwen in de browser: probleemoplossing](#aaps-ci-troubleshooting).

Heb je meer hulp nodig? Vraag het dan aan andere **AAPS**-gebruikers op [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) of [Discord](https://discord.gg/4fQUWHZ4Mw).
