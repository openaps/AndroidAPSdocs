# Oppdatere til en ny versjon eller gren

## Bygg selv i stedet for å laste ned

**AAPS** kan ikke lastes ned, på grunn av regelverket for medisinsk utstyr. Det er lovlig å bygge appen til eget bruk, men du må ikke gi en kopi til andre! Se [FAQ-siden](../UsefulLinks/FAQ.md) for detaljer.

## Viktige merknader

- Oppdater til den nye versjonen av **AAPS** så snart som mulig etter at en ny utgivelse er tilgjengelig.
- Når en ny utgivelse er tilgjengelig, får du et informasjonsbanner om den nye versjonen i selve **AAPS**-appen.
- Den nye versjonen blir også kunngjort på Facebook når den gis ut.
- Etter utgivelsen bør du lese [Versjonsnotater](ReleaseNotes.md) nøye og avklare eventuelle spørsmål med fellesskapet på Facebook eller Discord før du går videre med oppdateringen.
- Oppdaterer du fra **AAPS** 3.x? Les [Hva er endret i AAPS v4](V4Changes.md) først: der finner du funksjonene som er flyttet, har fått nytt navn eller er fjernet.
- Ikke glem å [eksportere innstillingene dine](ExportImportSettings.md). Når du importerer dem igjen etter oppdateringen, velger du om pumpeinnstillingene også skal erstattes.

## Oppdatere AAPS med nettleserbygg

Har du allerede bygget AAPS-appen din med en nettleser? Følg instruksjonene for den metoden du brukte:

- **AAPS Builder**: du bygger fra siden **Build AAPS** i ditt private repository (vanligvis kalt `my-aaps`) og laster ned appen fra GitHub. Følg [Oppdatering av AAPS med AAPS Builder](#aaps-builder-updates). Det er ingen fork å synkronisere.
- **Fork og forberedelsesfil**: du kjører arbeidsflyten **AAPS-CI** i din egen kopi (fork) av AndroidAPS, et repository kalt `AndroidAPS` i GitHub-kontoen din, og appen havner i Google Drive. Følg [Oppdatere med en nettleser (fork)](./UpdateBrowserBuild.md).

## Oppdatere AAPS med Android Studio

Følg [disse instruksjonene](./UpdateComputerBuild.md).

## Oppdatere AAPS med kommandolinjen

Bruk [de samme instruksjonene](../SettingUpAaps/CLIBuild.md) som da du bygde AAPS sist, men hent nye endringer med git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Etter oppdateringen

Disse stegene er de samme for alle byggemetoder. Sjekk i [Versjonsnotater](../Maintenance/ReleaseNotes.md) om det er noen spesielle instruksjoner etter oppdateringen.

Etter at du har installert den nye APK-filen:

- du kan kontrollere versjonen av **AAPS** på telefonen ved å åpne **menyen** (☰) øverst til venstre og deretter **Om** (som på skjermbildet nedenfor). Du kan se hvilken versjon av **AAPS** du har;
- pass på at innstillingene er importert; og
- sjekk innstillingene i **AAPS** under **Innstillinger** og pass på at de fortsatt er riktige.

![Om-dialogen med den installerte AAPS-versjonen](../images/about_dialog_version.png)