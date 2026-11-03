# Uppdatera till en ny version eller gren

## Bygg själv i stället för att ladda ned

**AAPS** kan inte laddas ned, på grund av regler för medicintekniska produkter. Det är lagligt att bygga appen för eget bruk, men du får inte ge en kopia till andra! Se sidan [Vanliga frågor](../UsefulLinks/FAQ.md) för mer information.

## Viktigt att veta

- Uppdatera till den nya versionen av **AAPS** så snart som möjligt efter att en ny version har släppts.
- När en ny version finns får du ett informationsmeddelande om den nya versionen i själva appen **AAPS**.
- Den nya versionen meddelas också på Facebook när den släpps.
- När en version har släppts, läs [versionsinformationen](ReleaseNotes.md) noga och ställ eventuella frågor till gemenskapen på Facebook eller Discord innan du uppdaterar.
- Uppdaterar du från **AAPS** 3.x? Läs först [Vad har ändrats i AAPS v4](V4Changes.md): där ser du vilka funktioner som har flyttats, bytt namn eller tagits bort.
- Glöm inte att [exportera dina inställningar](ExportImportSettings.md). När du importerar dem igen efter uppdateringen väljer du om även pumpinställningarna ska ersättas.

## Uppdatera AAPS med bygge i webbläsaren

Har du redan byggt din AAPS-app i webbläsaren? Följ instruktionerna för den metod som du använde:

- **AAPS Builder**: du bygger från sidan **Build AAPS** i ditt privata repo (oftast med namnet `my-aaps`) och laddar ned appen från GitHub. Följ [Uppdatera AAPS med AAPS Builder](#aaps-builder-updates). Det finns ingen fork att synkronisera.
- **Fork och förberedelsefil**: du kör arbetsflödet **AAPS-CI** i din egen kopia (fork) av AndroidAPS, ett repo med namnet `AndroidAPS` på ditt GitHub-konto, och appen hamnar i din Google Drive. Följ [Uppdatera med bygge i webbläsaren (fork)](./UpdateBrowserBuild.md).

## Uppdatera AAPS med Android Studio

Följ [dessa instruktioner](./UpdateComputerBuild.md).

## Uppdatera AAPS från kommandoraden

Använd [samma instruktioner](../SettingUpAaps/CLIBuild.md) som när du byggde AAPS tidigare, men hämta de nya ändringarna med git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Efter uppdateringen

De här stegen är desamma för alla sätt att bygga. Kontrollera i [versionsinformationen](../Maintenance/ReleaseNotes.md) om det finns särskilda instruktioner efter uppdateringen.

När du har installerat den nya APK:n:

- kan du kontrollera versionen av **AAPS** på telefonen: öppna **Meny** (☰) uppe till vänster och sedan **Om** (se skärmbilden nedan). kan du se den aktuella versionen av **AAPS**;
- se till att du har importerat dina inställningar; och
- kontrollera inställningarna för **AAPS** under **Inställningar** och se till att de fortfarande stämmer.

![Dialogrutan Om med den installerade AAPS-versionen](../images/about_dialog_version.png)