# Bijwerken naar een nieuwe versie of branch

## Zelf bouwen, in plaats van downloaden

**AAPS** kun je niet downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven! Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

## Belangrijk:

- Werk zo snel mogelijk bij naar de nieuwe versie van **AAPS** als er een nieuwe release is.
- Als er een nieuwe release is, krijg je in de **AAPS** app zelf een informatiebalk over de nieuwe versie.
- De nieuwe versie wordt bij de release ook op Facebook aangekondigd.
- Lees na de release de [Release notes](ReleaseNotes.md) goed door, en stel je vragen aan de community op Facebook of Discord, voordat je gaat bijwerken.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## AAPS bijwerken door in de browser te bouwen

Heb je je AAPS app al eerder in de browser gebouwd? Volg de instructies voor de manier die je hebt gebruikt:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Er is geen fork om te synchroniseren.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## AAPS bijwerken met Android Studio

Volg [deze instructies](./UpdateComputerBuild.md).

## AAPS bijwerken via de opdrachtregel

Gebruik [dezelfde instructies](../SettingUpAaps/CLIBuild.md) als toen je AAPS eerder bouwde, maar haal de nieuwe wijzigingen op met git (pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Kijk in de [Release notes](../Maintenance/ReleaseNotes.md) of er speciale instructies zijn na de update.

Nadat je de nieuwe apk hebt geïnstalleerd:

- je kunt de versie van **AAPS** op je telefoon controleren: open linksboven het **menu** (☰) en kies dan **Over** (zie de schermafbeelding hieronder). kun je de huidige versie van **AAPS** bekijken;
- controleer of het importeren van de instellingen is uitgevoerd; en
- controleer je instellingen van **AAPS** onder **Instellingen** en zorg dat ze nog kloppen.

![Venster Over met de geïnstalleerde AAPS-versie](../images/about_dialog_version.png)