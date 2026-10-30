# Bine ați venit la documentația AAPS

![imagine](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](./Maintenance/UpdateToNewVersion.md) to update.

```

Android APS (**AAPS**) este un program cu sursă deschisă pentru persoanele care trăiesc cu diabet de tip insulino-dependent. Este un sistem de tip pancreas artificial (APS) care rulează pe telefoanele inteligente cu Android. **AAPS** folosește algoritmul software OpenAPS și are ca scop preluarea sarcinilor unui pancreas adevărat; menținerea nivelului de zahăr din sânge în limite sănătoase prin utilizarea de doze automate de insulină. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## Prezentare generală a documentației AAPS

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Acesta subliniază informațiile generale ale sistemului de tip buclă închisă, de ce **AAPS** a fost dezvoltat, compară **AAPS** cu alte sisteme, și adresează problematica de siguranță. Vă dă sugestii despre cum să vorbiți cu medicul curant despre **AAPS**, explică de ce trebuie să construiți aplicația **AAPS** singur/ă în loc să o descărcați pur și simplu, și oferă o privire de ansamblu despre conectivitatea tipică a sistemului **AAPS**. De asemenea abordează tematica accesibilității și discută despre cine ar putea să beneficieze de pe urma **AAPS**.

[Pregătirea pentru AAPS](./Getting-Started/PreparingForAaps.md) oferă mai multe detalii despre elementele ce țin de siguranță, și despre telefoanele, senzorii de monitorizare continuă a glicemiei (CGM) și pompele de insulină compatibile cu **AAPS**. Oferă o privire de ansamblu despre procesul prin care veți trece, și oferă o cronologie aproximativă pentru obținerea unei funcționalități complete **AAPS**. Această secțiune vă pregătește din punct de vedere tehnic să vă puneți la punct configurarea **AAPS** cât mai repede și eficient posibil. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Acum că aveți o înțelegere solidă a procesului, puteți începe să faceți sistemul de buclă închisă **AAPS**.

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. Aceste Obiective sunt special concepute astfel încât să deblocheze treptat mai multe posibilități din cadrul **AAPS** și să treacă de la Bucla Deschisă la Bucla Închisă.

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. Întrebările obișnuite și răspunsurile sunt localizate în secțiunea de depanare.

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Există o gamă largă de posibilități pentru trimiterea de la distanță a comenzilor către sau pur și simplu urmărirea datelor din **AAPS**. Acest lucru este la fel de util pentru îngrijitorii care doresc să folosească **AAPS** pentru minori, și pentru adulții cu diabet, care fie doresc să își monitorizeze mai ușor nivelurile de zahăr (și alte metrice) și pe alte dispozitive (pe ceas, în mașină _șamd_) decât pe telefon, sau care au persoane apropiate care doresc să-i monitorizeze. Acestă secțiune oferă, de asemenea, ghidaj pentru utilizarea Android Auto astfel încât să puteți vedea nivelurile glicemiei în autoturism.

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. Te poți aștepta la o nouă versiune și 2-3 actualizări necesare pe an. Este necesar să faci aceste actualizări ca în cazul tuturor aplicațiilor software, deoarece erorile minore sunt eliminate, și apar îmbunătățiri ale **AAPS**. Există o secțiune dedicată depanării aspectelor ce țin de "actualizare" cu întrebările comune.

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. Acest lucru e foarte important pentru a putea intra în contact cu ceilalți cât mai repede posibil, pentru a clarifica întrebările și a rezolva capcanele obișnuite. O mulțime de persoane deja folosesc **AAPS** cu succes, dar cu toții avem la un moment dat o întrebare pe care nu o putem rezolva singuri. Datorită numărului mare de utilizatori, timpii de răspuns ai întrebărilor sunt de obicei foarte rapizi, de obicei doar câteva ore. Nu-ți face griji în legătură cu cerutul de ajutor, nu există nicio întrebare care să fie proastă! Încurajăm utilizatorii de orice/toate nivelurile de experiență să pună cât de multe întrebări sunt de părere că este necesar pentru a-i ajuta să pună în funcțiune sistemul în condiții de siguranță. Această secțiune include depanarea generală pentru **AAPS** și **AAPSClient** (o aplicație companion de urmărire) precum și explicarea felului în care se trimit datele **AAPS** (jurnalele) către dezvoltatori pentru investigații, dacă crezi că există o problemă tehnică cu **AAPS** ce necesită inspecție.

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. Majoritatea utilizatorilor se descurcă bine cu versiunea principală sau "Master" de **AAPS** fără să se mai uite la aceste opțiuni, această secțiune este pentru utilizatorii care au deja un control bun și caută să își îmbunătățească în continuare configurarea.

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. Poți dona bani, echipamente sau expertiză. Poți sugera/face modificări chiar tu în documentație, ajuta cu [traducerea documentației](SupportingAaps/Translations) și să îți furnizezi datele în cadrul proiectului Open Humans.

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. Mai multe referințe și resurse pentru diabet și sisteme buclă închisă sunt conținute, de asemenea, în această secțiune. It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. Aici trebuie venit pentru a afla ce înseamnă termenii ISF sau TT, spre exemplu.


 ### Doriți să începeți cu **AAPS**? Citiți mai multe despre **AAPS** în [Introducere](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: pericol
Siguranța **AAPS** se bazează pe caracteristicile de siguranță ale hardware-ului dumneavoastră (telefon, pompă, CGM). Utilizați numai o pompă de insulină și un senzor de monitorizare continuă a glicemiei (CGM) care sunt complet funcționale și aprobate de către FDA/CE. Nu utilizați echipamente, pompe de insulină și CGM, stricate, modificate sau auto-construite. Utilizați doar materialele consumabile originale (inseratoare, canule și rezervoare de insulină) aprobate de către producător pentru a fi utilizate cu pompa și cu senzorul dumneavoastră. Utilizarea unor materiale netestate sau modificate poate cauza inexactitate și erori în dozarea insulinei, ceea ce duce la riscuri semnificative pentru utilizator. 

Nu utilizați **AAPS** dacă iei inhibitori SGLT-2 (glifozine), deoarece aceștia scad concentrația de zahăr din sânge. Vă creșteți riscul de cetoacidoză diabetică (CAD) din cauza administrării reduse de insulină și de hipoglicemie din cauza scăderii nivelului de zahăr din sânge. 
```

```{admonition} Disclaimer
:class: notă

- Toate informațiile și codul descrise aici sunt destinate exclusiv scopurilor informative și educaționale. Folosiți [Nightscout](https://nightscout.github.io/) și **AAPS** pe propriul risc, și nu utilizați informațiile sau codul pentru a lua decizii medicale. În prezent, Nightscout nu face nicio încercare de respectare a confidențialității HIPAA. 
- Folosirea codului de pe github.com este fără garanție sau suport formal de orice fel. Vă rugăm să examinați fișierul LICENSE al acestui depozit pentru mai multe detalii.
- Toate numele produselor și firmelor, mărcile comerciale, mărcile de serviciu, mărcile înregistrate și mărcile de serviciu înregistrate sunt proprietatea titularilor lor. Utilizarea lor este în scop informativ și nu implică nicio afiliere sau aprobare din partea acestora.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation)=

## Indexul documentației AAPS

```{toctree}
:caption: Using this documentation

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Build the app

Dedicated Google account for AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Setting up the reporting server

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Scenes <./DailyLifeWithAaps/Scenes.md>
Automations <./DailyLifeWithAaps/Automations.md>
QuickLaunch toolbar <./DailyLifeWithAaps/QuickLaunch.md>
Home screen widgets <./DailyLifeWithAaps/Widgets.md>
Food database <./DailyLifeWithAaps/Food.md>
Global search <./DailyLifeWithAaps/GlobalSearch.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote control <./RemoteFeatures/RemoteControl.md>
The AAPSClient app <./RemoteFeatures/AapsClient.md>
Master ↔ Client control <./RemoteFeatures/ClientMasterControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Help & Troubleshooting

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting (start here) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
- Troubleshooting NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser build troubleshooting <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalling AAPS (new keystore) <./GettingHelp/ReinstallAaps.md>
- Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulin concentration <./AdvancedOptions/InsulinConcentration.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Browser build: cherry-pick a commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossary <./UsefulLinks/Glossary.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
For Clinicians <./UsefulLinks/ClinicianGuideToAaps.md>
```
