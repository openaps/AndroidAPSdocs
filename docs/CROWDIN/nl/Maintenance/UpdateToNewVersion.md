# Bijwerken naar een nieuwe versie of branch

## Zelf bouwen, in plaats van downloaden

**AAPS** kun je niet downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven! Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

## Belangrijk:

- Werk zo snel mogelijk bij naar de nieuwe versie van **AAPS** als er een nieuwe release is.
- Als er een nieuwe release is, krijg je in de **AAPS** app zelf een informatiebalk over de nieuwe versie.
- De nieuwe versie wordt bij de release ook op Facebook aangekondigd.
- Lees na de release de [Release notes](ReleaseNotes.md) goed door, en stel je vragen aan de community op Facebook of Discord, voordat je gaat bijwerken.
- Vergeet niet de instellingen van **AAPS** te exporteren.

## AAPS bijwerken door in de browser te bouwen

Heb je je AAPS app al eerder in de browser gebouwd? Volg de instructies voor de manier die je hebt gebruikt:

- **AAPS Builder** (je privé-repository, meestal met de naam `my-aaps`): [AAPS bijwerken met AAPS Builder](#aaps-builder-updates). Er is geen fork om te synchroniseren.
- **Fork en voorbereidingsbestand** (je eigen kopie van AndroidAPS): [Bijwerken met een browser (fork)](./UpdateBrowserBuild.md).

## AAPS bijwerken met Android Studio

Volg [deze instructies](./UpdateComputerBuild.md).

## AAPS bijwerken via de opdrachtregel

Gebruik [dezelfde instructies](../SettingUpAaps/CLIBuild.md) als toen je AAPS eerder bouwde, maar haal de nieuwe wijzigingen op met git (pull).

(Update-to-new-version-check-aaps-version-on-phone)=

### Controleer de AAPS-versie op je telefoon

Kijk in de [Release notes](../Maintenance/ReleaseNotes.md) of er speciale instructies zijn na de update.

Nadat je de nieuwe apk hebt geïnstalleerd:

- je kunt de versie van **AAPS** op je telefoon controleren: open linksboven het **menu** (☰) en kies dan **Over** (zie de schermafbeelding hieronder). kun je de huidige versie van **AAPS** bekijken;
- controleer of het importeren van de instellingen is uitgevoerd; en
- controleer je instellingen van **AAPS** onder **Instellingen** en zorg dat ze nog kloppen.

![Venster Over met de geïnstalleerde AAPS-versie](../images/about_dialog_version.png)