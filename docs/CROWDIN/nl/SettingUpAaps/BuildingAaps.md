# AAPS bouwen

## Zelf bouwen, in plaats van downloaden

**De AAPS-app (een apk-bestand) is niet te downloaden, vanwege de regels voor medische hulpmiddelen. Je mag de app legaal bouwen voor eigen gebruik, maar je mag geen kopie aan anderen geven!**

Zie de [FAQ-pagina](../UsefulLinks/FAQ.md) voor meer informatie.

---

Er zijn drie manieren om de AAPS-app te bouwen:

### Bouwen in de browser (aanbevolen)

You can build the app in a web browser using GitHub Actions. Op een Android-telefoon helpt de setup-pagina van [AAPS Builder](#aaps-builder) je stap voor stap, en je start elke build zelf. Op een computer of een iPhone kun je ook bouwen met een fork en de app opslaan in je Google Drive.

**[Volg deze instructies.](./BrowserBuild.md)**

----

### Bouwen met Android Studio

Je kunt de app op je computer bouwen met Android Studio. Vroeger was dit de enige manier om te bouwen, nu wordt Android Studio vooral gebruikt door ontwikkelaars die de code willen aanpassen.

**[Volg deze instructies.](./ComputerBuild.md)**

----

### Bouwen via de opdrachtregel

Deze optie is bedoeld voor wie AAPS liever lokaal via de opdrachtregel bouwt, zonder Android Studio te installeren.

**[Volg deze instructies.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Als de build mislukt

Elke manier van bouwen heeft een eigen hoofdstuk over probleemoplossing:

* **AAPS Builder**: [Probleemoplossing voor AAPS Builder](#aaps-builder-troubleshooting)
* **Bouwen in de browser** op een computer of een iPhone: [Bouwen in de browser: probleemoplossing](#aaps-ci-troubleshooting)
* **Android Studio**: [Problemen met Android Studio oplossen](../GettingHelp/TroubleshootingAndroidStudio.md)

Ben je je keystore of het wachtwoord ervan kwijt? Zie [AAPS opnieuw installeren met een nieuwe keystore](#reinstall-aaps).

Wordt de app wel gebouwd maar installeert hij niet op je telefoon, zie dan [AAPS overzetten en installeren](TransferringAndInstallingAaps.md).

Staat je probleem er niet bij, zie dan [Waar kan ik hulp krijgen?](../GettingHelp/WhereCanIGetHelp.md).
