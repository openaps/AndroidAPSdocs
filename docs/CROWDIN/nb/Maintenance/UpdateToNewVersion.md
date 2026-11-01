# Oppdatere til en ny versjon eller gren

## Bygg selv i stedet for å laste ned

**AAPS** kan ikke lastes ned, på grunn av regelverket for medisinsk utstyr. Det er lovlig å bygge appen til eget bruk, men du må ikke gi en kopi til andre! Se [FAQ-siden](../UsefulLinks/FAQ.md) for detaljer.

## Viktige merknader

- Oppdater til den nye versjonen av **AAPS** så snart som mulig etter at en ny utgivelse er tilgjengelig.
- Når en ny utgivelse er tilgjengelig, får du et informasjonsbanner om den nye versjonen i selve **AAPS**-appen.
- Den nye versjonen blir også kunngjort på Facebook når den gis ut.
- Etter utgivelsen bør du lese [versjonsnotatene](ReleaseNotes.md) nøye og avklare eventuelle spørsmål med fellesskapet på Facebook eller Discord før du går videre med oppdateringen.
- Ikke glem å eksportere innstillingene i **AAPS**.

## Oppdatere AAPS med nettleserbygg

Har du allerede bygget AAPS-appen din med en nettleser? Følg instruksjonene for den metoden du brukte:

- **AAPS Builder** (ditt private repository, vanligvis kalt `my-aaps`): [Oppdatering av AAPS med AAPS Builder](#aaps-builder-updates). Det er ingen fork å synkronisere.
- **Fork og forberedelsesfil** (din egen kopi av AndroidAPS): [Oppdatere med en nettleser (fork)](./UpdateBrowserBuild.md).

## Oppdatere AAPS med Android Studio

Følg [disse instruksjonene](./UpdateComputerBuild.md).

## Oppdatere AAPS med kommandolinjen

Bruk [de samme instruksjonene](../SettingUpAaps/CLIBuild.md) som da du bygde AAPS sist, men hent nye endringer med git.

(Update-to-new-version-check-aaps-version-on-phone)=

### Kontroller AAPS-versjonen på telefonen

Sjekk i [versjonsnotatene](../Maintenance/ReleaseNotes.md) om det er noen spesielle instruksjoner etter oppdateringen.

Etter at du har installert den nye APK-filen:

- du kan kontrollere versjonen av **AAPS** på telefonen ved å åpne **menyen** (☰) øverst til venstre og deretter **Om** (som på skjermbildet nedenfor). Du kan se hvilken versjon av **AAPS** du har;
- pass på at innstillingene er importert; og
- sjekk innstillingene i **AAPS** under **Innstillinger** og pass på at de fortsatt er riktige.

![Om-dialogen med den installerte AAPS-versjonen](../images/about_dialog_version.png)