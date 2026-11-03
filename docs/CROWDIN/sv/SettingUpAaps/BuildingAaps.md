# Bygga AAPS

## Bygg själv i stället för att ladda ned

**AAPS-appen (en apk-fil) finns inte att ladda ned, på grund av reglerna för medicintekniska produkter. Det är lagligt att bygga appen för eget bruk, men du får inte ge en kopia till andra!**

Se sidan [Vanliga frågor](../UsefulLinks/FAQ.md) för mer information.

---

Det finns tre sätt att bygga AAPS-appen:

### Bygga i webbläsaren (rekommenderas)

Du kan bygga appen i en webbläsare med hjälp av GitHub Actions. Från en Android-telefon guidar inställningssidan för [AAPS Builder](#aaps-builder) dig genom stegen, och du startar varje bygge själv. Från en dator eller en iPhone kan du också bygga med en fork och spara appen i din Google Drive.

**[Följ de här instruktionerna.](./BrowserBuild.md)**

----

### Bygga med Android Studio

Du kan bygga appen på din dator med Android Studio. Tidigare var detta det enda sättet att bygga, i dag används Android Studio mest av utvecklare som vill ändra i koden.

**[Följ de här instruktionerna.](./ComputerBuild.md)**

----

### Bygga från kommandoraden

Detta alternativ är för dig som vill bygga AAPS lokalt från kommandoraden, utan att installera Android Studio.

**[Följ de här instruktionerna.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Om bygget misslyckas

Varje byggmetod har ett eget avsnitt om felsökning:

* **AAPS Builder**: [Felsökning av AAPS Builder](#aaps-builder-troubleshooting)
* **Bygge i webbläsaren** från en dator eller en iPhone: [Bygge i webbläsaren: felsökning](#aaps-ci-troubleshooting)
* **Android Studio**: [Felsökning av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Har du tappat bort din keystore eller dess lösenord? Se [Installera om AAPS med en ny keystore](#reinstall-aaps).

Om appen har byggts men inte går att installera på din telefon, se [Överföra och installera AAPS](TransferringAndInstallingAaps.md).

Om ditt problem inte finns med här, se [Var kan jag få hjälp?](../GettingHelp/WhereCanIGetHelp.md).
