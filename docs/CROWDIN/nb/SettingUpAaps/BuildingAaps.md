# Building AAPS

## Build yourself instead of download

**AAPS-appen (en apk-fil) er ikke tilgjengelig for nedlasting, på grunn av regelverket for medisinsk utstyr. It is legal to build the app for your own use, but you must not give a copy to others!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

Det finnes tre metoder for å bygge AAPS-appen:

### Bygge med en nettleser (anbefalt)

Du kan bygge appen med smarttelefonen din ved hjelp av GitHub Actions. Fra en Android-telefon leder oppsettsiden for [AAPS Builder](#aaps-builder) deg gjennom det, og du starter hvert bygg selv. Fra en datamaskin eller en iPhone kan du også bygge med en fork og lagre appen i Google Drive.

**[Følg disse instruksjonene.](./BrowserBuild.md)**

----

### Bygge med Android Studio

Du kan bygge appen på datamaskinen din med Android Studio. Dette var tidligere det eneste alternativet for bygging, i dag brukes Android Studio mest av utviklere som vurderer å gjøre endringer i koden.

**[Følg disse instruksjonene.](./ComputerBuild.md)**

----

### Bygge med kommandolinjen

Dette alternativet er ment for dem som foretrekker å bygge AAPS lokalt på kommandolinjen, uten å installere Android Studio.

**[Følg disse instruksjonene.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Hvis byggingen mislykkes

Hver byggemetode har sin egen del om feilsøking:

* **AAPS Builder**: [Feilsøking av AAPS Builder](#aaps-builder-troubleshooting)
* **Nettleserbygg** fra en datamaskin eller en iPhone: [Feilsøking av nettleserbygg](#aaps-ci-troubleshooting)
* **Android Studio**: [Feilsøking av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Har du mistet keystore-filen eller passordet til den? See [Reinstalling AAPS with a new keystore](#reinstall-aaps).

Hvis appen blir bygd, men ikke lar seg installere på telefonen, se [Overføre og installere AAPS](TransferringAndInstallingAaps.md).

Hvis problemet ditt ikke står på listen, se [Hvor kan jeg få hjelp](../GettingHelp/WhereCanIGetHelp.md).
