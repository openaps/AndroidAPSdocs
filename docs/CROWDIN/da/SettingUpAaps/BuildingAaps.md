# Byg AAPS

## Byg selv i stedet for at downloade

**AAPS-appen (en apk-fil) kan ikke downloades på grund af reglerne for medicinsk udstyr. Det er lovligt at bygge appen til eget brug, men du må ikke give en kopi til andre!**

Se [Ofte stillede spørgsmål for loopere](../UsefulLinks/FAQ.md) for detaljer.

---

Der er tre måder at bygge AAPS-appen på:

### Build i browseren (anbefalet)

Du kan bygge appen i en webbrowser med GitHub Actions. Fra en Android-telefon guider opsætningssiden for [AAPS Builder](#aaps-builder) dig igennem det, og du starter selv hvert build. Fra en computer eller en iPhone kan du også bygge med en fork og gemme appen i din Google Drive.

**[Følg denne vejledning.](./BrowserBuild.md)**

----

### Build med Android Studio

Du kan bygge appen på din computer med Android Studio. Det var tidligere den eneste måde at bygge på, i dag bruges Android Studio mest af udviklere, som vil ændre i koden.

**[Følg denne vejledning.](./ComputerBuild.md)**

----

### Build med kommandolinjen

Denne mulighed er til dem, der foretrækker at bygge AAPS lokalt på kommandolinjen uden at installere Android Studio.

**[Følg denne vejledning.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Hvis build fejler

Hver måde at bygge på har sit eget afsnit om fejlfinding:

* **AAPS Builder**: [Fejlfinding af AAPS Builder](#aaps-builder-troubleshooting)
* **Build i browseren** fra en computer eller en iPhone: [Build i browseren: fejlfinding](#aaps-ci-troubleshooting)
* **Android Studio**: [Fejlfinding i Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Har du mistet dit keystore eller adgangskoden til det? Se [Geninstallation af AAPS med et nyt keystore](#reinstall-aaps).

Hvis appen er bygget, men ikke kan installeres på din telefon, så se [Overførsel og installation af AAPS på din telefon](TransferringAndInstallingAaps.md).

Hvis dit problem ikke står her, så se [Hvor kan jeg få hjælp?](../GettingHelp/WhereCanIGetHelp.md)
