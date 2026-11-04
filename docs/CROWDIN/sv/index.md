# Välkommen till dokumentationen för AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 oktober 2026: Version 4.0.0 har släppts. Läs [versionsinformationen](#latestrelease) för att se vad som är nytt, och följ instruktionerna i [uppdateringsanvisningen](./Maintenance/UpdateToNewVersion.md) för att uppdatera.

```

Android APS (**AAPS**) är en app med öppen källkod för personer som lever med insulinberoende diabetes. Det är ett system för artificiell bukspottkörtel (APS) som körs på Android-telefoner. **AAPS** använder en algoritm från OpenAPS och försöker göra det som en riktig bukspottkörtel gör: hålla blodsockret inom friska gränser med hjälp av automatiserad insulindosering. För att använda **AAPS** behöver du **tre** kompatibla enheter: **(1)** en Android-telefon, **(2)** en kontinuerlig glukosmätare (CGM) och **(3)** en insulinpump som är godkänd av FDA/CE. Du kan också lägga till **(4)** molntjänster för att styra **AAPS** på distans, dela dina data och lagra dem på en rapportserver, och **(5)** en smartklocka.

Denna dokumentation förklarar hur du ställer in och använder **AAPS**. Du kan navigera i dokumentationen för **AAPS** antingen med menyn till vänster (och den praktiska funktionen **Sök i dokumentationen**) eller med [innehållsförteckningen](#index-aaps-documentation-index) längst ner på denna sida.

## Översikt över dokumentationen för AAPS ("dokumentationen")

I avsnitt **1) Komma igång** förklarar [Introduktion till APS och AAPS](Getting-Started/Introduction.md) den allmänna idén med vad ett system för artificiell bukspottkörtel (APS) är till för. Det beskriver bakgrunden till loopning i allmänhet, varför **AAPS** utvecklades, jämför **AAPS** med andra system och tar upp säkerhet. Det ger förslag på hur du kan prata med ditt vårdteam om **AAPS**, förklarar varför du måste bygga appen **AAPS** själv i stället för att bara ladda ner den, och ger en översikt över hur ett **AAPS**-system vanligtvis är anslutet. Det tar också upp tillgänglighet och vem som troligen har nytta av **AAPS**.

[Förberedelser inför start med AAPS](./Getting-Started/PreparingForAaps.md) ger mer information om säkerhet och om de telefoner, CGM-system (system för kontinuerlig glukosmätning) och insulinpumpar som är kompatibla med **AAPS**. Det ger en översikt över processen du kommer att gå igenom och en ungefärlig tidsplan tills du kan använda alla funktioner i **AAPS**. Detta avsnitt förbereder dig tekniskt så att du kan sätta ihop din **AAPS**-installation så snabbt och effektivt som möjligt. Underavsnittet [Kompatibla CGM-system](./Getting-Started/CompatiblesCgms.md) förklarar hur du optimerar din CGM-installation och vilka utjämningsalternativ som är bäst.

Nu när du har god förståelse för processen kan du börja sätta ihop din **AAPS**-loop.

Avsnitt **2) Bygga appen** förklarar varför du måste bygga appen **AAPS** själv i stället för att bara ladda ner den, och tar dig steg för steg genom att [bygga den](./SettingUpAaps/BuildingAaps.md) (i en webbläsare, med Android Studio eller från kommandoraden) och sedan överföra och installera den på din telefon. Det börjar med ett valfritt steg: att skapa ett [separat Google-konto](./UsefulLinks/DedicatedGoogleAccountForAaps.md) för dina byggen och säkerhetskopior. Det förklarar också [verifiering av Android-utvecklare](#android-developer-verification) (Android developer verification), en ändring som Google inför från september 2026 och som påverkar hur appar som du byggt själv installeras.

Avsnitt **3) Ställa in rapportservern** handlar om hur du väljer och [ställer in din rapportserver](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout eller Tidepool), så att du kan granska och dela dina data.

Avsnitt **4) [Konfigurera AAPS](./SettingUpAaps/SetupWizard.md)** handlar om hur du ställer in appen **AAPS** med installationsguiden, kopplar den till din CGM-app och till en riktig eller virtuell insulinpump, och kopplar **AAPS** till din rapportserver. Sedan får du lära känna allt som **AAPS** kan göra, genom en säker och noggrant avvägd process steg för steg. Det gör att du (eller ditt barn) känner dig van och trygg med alla nivåer och menyinställningar innan du går vidare till nästa fas, som vanligen kallas nästa "mål". Du fortsätter så tills du har tillräckligt med erfarenhet för att börja använda de mer avancerade alternativen i appen. Målen är utformade så att de steg för steg låser upp fler möjligheter i **AAPS** och tar dig från öppen loop till sluten loop.

Avsnitt **5) [Vardagen med AAPS](./DailyLifeWithAaps/AapsScreens.md)** tar upp viktiga funktioner i **AAPS**, så att du kan använda (och anpassa) **AAPS**. Det gäller till exempel att förstå skärmarna, aktiva kolhydrater (COB), känslighet, Dynamisk ISF, profilbyten, tillfälliga målvärden, förlängda kolhydrater (eCarbs), automatiseringar och att [granska dina data](./Maintenance/Reviewing.md) i historikläsaren och statistiken. Det tar också upp vanliga ämnen, till exempel hur du hanterar olika typer av måltider, byte av kanyl och sensor, uppdateringar av telefonen, byte till och från sommartid, [resor med AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) och träning. Vanliga frågor och svar finns i avsnittet om felsökning.

Avsnitt **6) [Fjärrfunktioner i AAPS](./RemoteFeatures/RemoteControl.md)** visar en verklig styrka hos **AAPS**. Det finns många möjligheter att skicka kommandon på distans till, eller att bara följa data från, **AAPS**. Detta är lika användbart för anhöriga som vill använda **AAPS** för barn och för vuxna med diabetes som vill följa sina blodsockervärden (och andra värden) enklare än bara på telefonen (på en klocka, i bilen _osv._), eller som vill att närstående också ska kunna följa deras data. Detta avsnitt ger också vägledning om Android Auto, så att du kan se dina blodsockervärden i bilen.

Avsnitt **7) [Smartklockor med Wear OS](./WearOS/BuildingAapsWearOS.md)** ger information och instruktioner för att använda en Android-smartklocka med **Wear OS** med de särskilda urtavlorna för **AAPS** eller med anpassade urtavlor, antingen för att fjärrstyra din telefon eller bara för att visa data.


Avsnitt **8) [Underhåll av AAPS](./Maintenance/ExportImportSettings.md)** handlar om hur du exporterar och säkerhetskopierar dina inställningar (vilket är mycket viktigt om du tappar bort eller förstör din telefon), visar den senaste versionsinformationen, beskriver hur du uppdaterar **AAPS** och förklarar vad som händer när en version når slutet av sin livslängd (end of life). Du kan räkna med en ny version och 2–3 obligatoriska uppdateringar per år. Du måste göra dessa uppdateringar, precis som med all programvara, eftersom mindre fel rättas och **AAPS** förbättras. Det finns ett särskilt felsökningsavsnitt om uppdateringar med de vanligaste frågorna.

Avsnitt **9) [Hjälp och felsökning](GettingHelp/WhereCanIGetHelp.md)** hjälper dig att hitta de bästa ställena för att få allmän hjälp med **AAPS**. Det är stället att gå till när något inte fungerar: navet för [felsökning](GettingHelp/GeneralTroubleshooting.md) samlar lösningar på de vanligaste problemen, ordnade efter ämne, och [Vanliga frågor för loopare](UsefulLinks/FAQ.md) besvarar frågor som ofta ställs. Detta är mycket viktigt, så att du snabbt kan komma i kontakt med andra, få svar på frågor och lösa de vanliga problemen. Många använder redan **AAPS** med framgång, men alla har någon gång en fråga som de inte kan lösa själva. Eftersom det finns så många användare får man oftast svar på sina frågor mycket snabbt, vanligtvis inom några timmar. Var inte rädd för att be om hjälp – det finns inga dumma frågor! Vi uppmuntrar användare på alla erfarenhetsnivåer att ställa så många frågor som de behöver för att komma igång på ett säkert sätt. Detta avsnitt innehåller allmän felsökning för **AAPS** och **AAPSClient** (en hjälpapp för att följa data) och förklarar hur du skickar dina **AAPS**-data (loggfiler) till utvecklarna, om du tror att ett tekniskt problem med **AAPS** behöver undersökas.

Avsnitt **10)** tar upp **[Avancerade alternativ i AAPS](./AdvancedOptions/FullClosedLoop.md)**, till exempel hur du går från att använda **AAPS** som hybrid sluten loop (med bolus till måltider _osv._) till helt sluten loop (utan bolus), hur du [finjusterar din profil](./GettingHelp/ProfileTuning.md) och använder Autotune, samt beskriver utvecklings- och engineering-lägen. De flesta användare klarar sig utmärkt med huvudversionen ("Master") av **AAPS** utan att titta på dessa alternativ. Detta avsnitt är för användare som redan har god kontroll och vill förbättra sin installation ytterligare.

I avsnitt **11) [Så kan du stödja AAPS](SupportingAaps/HowCanIHelp.md)** ger vi information om hur du kan stödja projektet. Du kan skänka pengar, utrustning eller kunskap. Du kan själv föreslå eller göra ändringar i dokumentationen, hjälpa till med [översättningen av dokumentationen](SupportingAaps/Translations.md) och dela dina data via projektet Open Humans.

Avsnitt **12) Resurser** innehåller arkiverad eller kompletterande dokumentation, bland annat ett underavsnitt för [vårdpersonal](UsefulLinks/ClinicianGuideToAaps.md) som är intresserad av teknik med öppen källkod för artificiell bukspottkörtel, till exempel **AAPS**, eller för patienter som vill dela sådan information med sin vårdpersonal. Detta ämne tas också upp i introduktionen. Detta avsnitt innehåller också fler referenser och resurser om diabetes och loopning. Där finns sidan [Ordlista](./UsefulLinks/Glossary.md), en lista över de förkortningar (eller korta namn) som används i **AAPS**. Här kan du till exempel ta reda på vad förkortningarna ISF eller TT betyder.


 ### Vill du komma igång med **AAPS**? Läs mer om **AAPS** i [Introduktion till APS och AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
Säkerheten i **AAPS** beror på säkerhetsfunktionerna i din hårdvara (telefon, pump, CGM). Använd bara en insulinpump och en CGM som fungerar fullt ut och är godkända av FDA/CE. Använd inte trasiga, modifierade eller egenbyggda insulinpumpar eller CGM-mottagare. Använd bara originaltillbehör (insättare, kanyler och insulinreservoarer) som tillverkaren har godkänt för din pump och CGM. Otestade eller modifierade tillbehör kan ge felaktiga värden och fel i insulindoseringen, vilket innebär en stor risk för användaren. 

Använd inte **AAPS** om du tar SGLT-2-hämmare (glifloziner), eftersom de sänker blodsockret. Du ökar risken för diabetesketoacidos (DKA) på grund av minskad insulintillförsel och risken för hypoglykemi på grund av sänkt blodsocker. 
```

```{admonition} Disclaimer
:class: note

- All information och kod som beskrivs här är endast avsedd för information och utbildning. Du använder [Nightscout](https://nightscout.github.io/) och **AAPS** på egen risk. Använd inte informationen eller koden för att fatta medicinska beslut. Nightscout försöker för närvarande inte uppfylla HIPAA-kraven på integritet. 
- Kod från github.com används utan garanti eller formell support av något slag. Läs licensen (LICENSE) i detta repository för mer information.
- Alla produkt- och företagsnamn, varumärken, servicemärken, registrerade varumärken och registrerade servicemärken tillhör respektive ägare. De används endast i informationssyfte och betyder inte att vi har någon koppling till dem eller att de stöder oss.

**AAPS** har ingen koppling till och stöds inte av: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) eller [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Innehållsförteckning för dokumentationen för AAPS

```{toctree}
:caption: Using this documentation
:titlesonly:

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Komma igång

Introduktion till APS och AAPS <./Getting-Started/Introduction.md>
Förberedelser inför start med AAPS <./Getting-Started/PreparingForAaps.md>
Översikt över komponenterna <./Getting-Started/ComponentOverview.md>
- Kompatibla pumpar <./Getting-Started/CompatiblePumps.md>
- Kompatibla CGM-system <./Getting-Started/CompatiblesCgms.md>
- Telefoner  <./Getting-Started/Phones.md>
- Smartklockor och AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Bygga appen

Ett separat Google-konto för AAPS (valfritt) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Bygga AAPS <./SettingUpAaps/BuildingAaps.md>
- Bygge i webbläsaren <./SettingUpAaps/BrowserBuild.md>
- Bygge med Android Studio <./SettingUpAaps/ComputerBuild.md>
- Bygginstruktioner för kommandoraden <./SettingUpAaps/CLIBuild.md>
Överföra och installera AAPS på din telefon <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Ställa in rapportservern

Ställa in rapportservern <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Konfigurera AAPS

Installationsguiden i AAPS <./SettingUpAaps/SetupWizard.md>
Din AAPS-profil <./SettingUpAaps/YourAapsProfile.md>
Ändra konfigurationen i AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Konfiguration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Inställningar <./SettingUpAaps/Preferences.md>
Slutföra målen <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Vardagen med AAPS

AAPS-skärmar <./DailyLifeWithAaps/AapsScreens.md>
Viktiga funktioner i AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Beräkning av COB <./DailyLifeWithAaps/CobCalculation.md>
Känslighetsdetektering <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamisk ISF (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Profilbyte och procent av profil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Tillfälliga målvärden <./DailyLifeWithAaps/TempTargets.md>
Förlängda kolhydrater / "eCarbs" <./DailyLifeWithAaps/ExtendedCarbs.md>
Snabbknappar (bolus med ett tryck) <./DailyLifeWithAaps/QuickWizards.md>
Scener (förinställningar för olika situationer) <./DailyLifeWithAaps/Scenes.md>
Automation <./DailyLifeWithAaps/Automations.md>
Snabbstart (verktygsfält för snabbåtgärder på huvudskärmen) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets på hemskärmen <./DailyLifeWithAaps/Widgets.md>
Mat (din matdatabas) <./DailyLifeWithAaps/Food.md>
Global sökning <./DailyLifeWithAaps/GlobalSearch.md>
Granska dina data <./Maintenance/Reviewing.md>
AAPS för barn <./DailyLifeWithAaps/AapsForChildren.md>
Pumpar och kanyler <./DailyLifeWithAaps/PumpsAndCannulas.md>
Byte av tidszon och sommartid <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Fjärrfunktioner i AAPS

Fjärrövervakning <./RemoteFeatures/RemoteMonitoring.md>
Följa AAPS (utan att påverka AAPS-systemet) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Fjärrstyrning av AAPS <./RemoteFeatures/RemoteControl.md>
Appen AAPSClient <./RemoteFeatures/AapsClient.md>
Styrning huvudenhet ↔ klient (signerad fjärrstyrning) <./RemoteFeatures/ClientMasterControl.md>
SMS-kommandon <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Smartklockor med Wear OS

Bygga Wear-appen för AAPS <./WearOS/BuildingAapsWearOS.md>
Ställ in AAPS på din klocka med Wear OS <./WearOS/WearOsSmartwatch.md>
Styra AAPS från din smartklocka med Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Referensdokument för anpassade urtavlor <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Utbytessida för anpassade urtavlor <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Underhåll av AAPS

Skapa och återställa säkerhetskopior <./Maintenance/ExportImportSettings.md>
Versionsinformation <./Maintenance/ReleaseNotes.md>
Vad har ändrats i AAPS v4 <./Maintenance/V4Changes.md>
Uppdatera till en ny version eller gren <./Maintenance/UpdateToNewVersion.md>
- Uppdatera med bygge i webbläsaren (fork) <./Maintenance/UpdateBrowserBuild.md>
- Uppdatera med Android Studio <./Maintenance/UpdateComputerBuild.md>
Slut på support (End of life) <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Hjälp och felsökning

Var kan jag få hjälp? <./GettingHelp/WhereCanIGetHelp.md>
Allmän felsökning <./GettingHelp/GeneralTroubleshooting.md>
- Felsökning av Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Felsökning av NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Felsökning av Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Bygge i webbläsaren: felsökning <./GettingHelp/BrowserBuildTroubleshooting.md>
- Installera om AAPS med en ny keystore <./GettingHelp/ReinstallAaps.md>
- Komma åt loggfiler <./GettingHelp/AccessingLogFiles.md>
Vanliga frågor för loopare <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Avancerade alternativ i AAPS

Helt sluten loop <./AdvancedOptions/FullClosedLoop.md>
Finjustera AAPS-profilen <./GettingHelp/ProfileTuning.md>
Så använder du Autotune-pluginet <./AdvancedOptions/Autotune.md>
Insulinkoncentration <./AdvancedOptions/InsulinConcentration.md>
Utvecklingsgren <./AdvancedOptions/DevBranch.md>
Bygge i webbläsaren: cherry-picka en commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Så kan du stödja AAPS

Så kan du hjälpa till med AAPS <./SupportingAaps/HowCanIHelp.md>
Så redigerar du dokumentationen <./SupportingAaps/HowToEditTheDocs.md>
Så översätter du texter i AAPS-appen eller dokumentationen <./SupportingAaps/Translations.md>
Översättningsstatus för appen och dokumentationen <./SupportingAaps/StateOfTranslations.md>
Uppladdning till Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resurser

Ordlista <./UsefulLinks/Glossary.md>
Användbara resurser att läsa innan du börjar <./UsefulLinks/BackgroundReading.md>
För vårdpersonal – en allmän introduktion och guide till AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
