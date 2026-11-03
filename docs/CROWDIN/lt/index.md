# Sveiki atvykę į AAPS dokumentaciją

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

2026 m. spalio 31 d.: išleista 4.0.0 versija. Peržiūrėkite [versijų pastabas](#latestrelease), kad sužinotumėte, kas naujo, ir atnaujinkite pagal [atnaujinimo instrukcijas](./Maintenance/UpdateToNewVersion.md).

```

Android APS (**AAPS**) yra atvirojo kodo programėlė žmonėms, sergantiems nuo insulino priklausomu diabetu. Tai dirbtinės kasos sistema (APS), veikianti Android išmaniuosiuose telefonuose. **AAPS** naudoja OpenAPS programinės įrangos algoritmą ir siekia daryti tai, ką daro tikra kasa: automatiškai dozuodama insuliną palaikyti sveiką glikemiją. Norint naudoti **AAPS**, reikia **trijų** suderinamų įrenginių: **(1)** Android telefono, **(2)** nuolatinės gliukozės matavimo sistemos (NGJ) ir **(3)** FDA/CE patvirtintos insulino pompos. Taip pat galite pridėti **(4)** debesijos paslaugas, kad galėtumėte nuotoliniu būdu valdyti **AAPS**, dalytis duomenimis ir saugoti juos ataskaitų serveryje, ir **(5)** išmanųjį laikrodį.

Šioje dokumentacijoje paaiškinama, kaip nustatyti ir naudoti **AAPS**. Po **AAPS** dokumentaciją galite naršyti per meniu kairėje (ir patogią paieškos funkciją **Search docs**) arba per šio puslapio apačioje esantį [turinį](#index-aaps-documentation-index).

## AAPS dokumentacijos apžvalga

**1) Pradžia** skyriuje esantis [Įvadas į APS ir AAPS](Getting-Started/Introduction.md) paaiškina bendrą dirbtinės kasos sistemos (APS) paskirtį. Jame aprašomas ciklo naudojimo pagrindas, kodėl buvo sukurta **AAPS**, **AAPS** palyginimas su kitomis sistemomis ir saugumo klausimai. Jame rasite patarimų, kaip kalbėtis apie **AAPS** su savo gydytojais, paaiškinama, kodėl **AAPS** programėlę turite susikurti patys, o ne tiesiog atsisiųsti, ir pateikiama įprastų **AAPS** sistemos ryšių apžvalga. Jame taip pat aptariamas prieinamumas ir tai, kam **AAPS** gali būti naudinga.

Puslapyje [Pasirengimas pradėti naudoti AAPS](./Getting-Started/PreparingForAaps.md) išsamiau aprašomi saugumo klausimai, taip pat telefonai, NGJ (nuolatinės gliukozės matavimo sistemos) ir insulino pompos, suderinami su **AAPS**. Jame pateikiama viso proceso apžvalga ir apytikris laikas, per kurį pasieksite visas **AAPS** funkcijas. Šis skyrius techniškai paruošia jus kuo greičiau ir efektyviau surinkti savo **AAPS** sistemą. Poskyris [Suderinami NGJ](./Getting-Started/CompatiblesCgms.md) paaiškina, kaip optimaliai nustatyti NGJ ir kurios glodinimo parinktys geriausios.

Dabar, kai gerai suprantate procesą, galite pradėti rinkti savo **AAPS** ciklą.

Skyriuje **2) Programėlės kūrimas** paaiškinama, kodėl **AAPS** programėlę turite susikurti patys, o ne tiesiog atsisiųsti, ir žingsnis po žingsnio aprašoma, kaip [ją sukurti](./SettingUpAaps/BuildingAaps.md) (naršyklėje, su Android Studio arba komandine eilute), o paskui perkelti ir įdiegti telefone. Jis prasideda nebūtinu žingsniu – [atskiros Google paskyros](./UsefulLinks/DedicatedGoogleAccountForAaps.md) sukūrimu, kurioje bus saugomi jūsų sukurti failai ir atsarginės kopijos. Jame taip pat paaiškinamas [Android kūrėjų tapatybės patikrinimas](#android-developer-verification) – pakeitimas, kurį Google diegia nuo 2026 m. rugsėjo ir kuris paveikia pačių sukurtų programėlių diegimą.

Skyriuje **3) Ataskaitų serverio nustatymas** aprašoma, kaip pasirinkti ir [nustatyti ataskaitų serverį](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout arba Tidepool), kad galėtumėte peržiūrėti savo duomenis ir jais dalytis.

Skyriuje **4) [AAPS konfigūravimas](./SettingUpAaps/SetupWizard.md)** aprašoma, kaip nustatyti **AAPS** programėlę su sąrankos vedliu, susieti ją su NGJ programėle ir tikra arba virtualia insulino pompa, taip pat kaip susieti **AAPS** su ataskaitų serveriu. Paskui saugiai, atsargiai ir žingsnis po žingsnio susipažinsite su viskuo, ką gali **AAPS**. Taip užtikrinama, kad jūs (arba jūsų vaikas) gerai susipažintumėte ir drąsiai naršytumėte visus lygius ir meniu nustatymus prieš pereidami į kitą etapą, paprastai vadinamą kitu mokymo etapu. Taip tęsiate tol, kol įgysite pakankamai patirties pradėti naudoti išplėstines programėlės parinktis. Šie mokymo etapai sukurti taip, kad palaipsniui atrakintų vis daugiau **AAPS** galimybių ir padėtų pereiti nuo atviro ciklo prie uždaro ciklo.

Skyriuje **5) [Kasdienis gyvenimas su AAPS](./DailyLifeWithAaps/AapsScreens.md)** aprašomos pagrindinės **AAPS** funkcijos, kad galėtumėte naudoti (ir pritaikyti sau) **AAPS**. Čia aprašoma, kaip suprasti ekranus, aktyvius angliavandenius (AAO), jautrumą, dinaminį JIF, profilio keitimą, laikinus tikslus, ištęstus angliavandenius (i-AV), automatizaciją ir kaip [peržiūrėti savo duomenis](./Maintenance/Reviewing.md) istorijoje ir statistikoje. Taip pat aptariamos dažnos temos: kaip elgtis su skirtingų tipų valgiais, kaniulės ir jutiklio keitimu, telefono atnaujinimais, vasaros laiko pakeitimais, [kelionėmis su AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) ir sportu. Dažni klausimai ir atsakymai yra trikčių šalinimo skyriuje.

Skyriuje **6) [AAPS nuotolinės funkcijos](./RemoteFeatures/RemoteControl.md)** parodoma viena tikrų **AAPS** stiprybių. Yra daug būdų nuotoliniu būdu siųsti komandas į **AAPS** arba tiesiog sekti jos duomenis. Tai taip pat naudinga prižiūrintiems asmenims, kurie nori naudoti **AAPS** nepilnamečiams, ir suaugusiesiems su diabetu, kurie nori patogiau stebėti savo glikemiją (ir kitus rodiklius) ne tik telefone (laikrodyje, automobilyje _ir pan._) arba nori, kad jų duomenis stebėtų ir artimi žmonės. Šiame skyriuje taip pat rasite nurodymus, kaip naudoti Android Auto, kad galėtumėte matyti glikemiją automobilyje.

Skyriuje **7) [Wear OS išmanieji laikrodžiai](./WearOS/BuildingAapsWearOS.md)** pateikiama informacija ir nurodymai, kaip naudoti Android **Wear OS** išmanųjį laikrodį su specialiais **AAPS** ciferblatais arba pasirinktiniais ciferblatais – telefonui valdyti nuotoliniu būdu arba tik duomenims rodyti.


Skyriuje **8) [AAPS priežiūra](./Maintenance/ExportImportSettings.md)** aprašoma, kaip eksportuoti nustatymus ir sukurti jų atsarginę kopiją (tai labai svarbu, jei telefoną pamestumėte ar sugadintumėte), pateikiamos naujausios versijų pastabos, išsamiai aprašoma, kaip atnaujinti **AAPS**, ir paaiškinama, kas nutinka, kai versijos galiojimas baigiasi. Galite tikėtis vienos naujos versijos ir 2–3 privalomų atnaujinimų per metus. Kaip ir su visa programine įranga, šiuos atnaujinimus atlikti privaloma, nes juose ištaisomos smulkios klaidos ir patobulinama **AAPS**. Yra atskiras trikčių šalinimo skyrius apie atnaujinimą su dažnais klausimais.

Skyrius **9) [Pagalba ir trikčių šalinimas](GettingHelp/WhereCanIGetHelp.md)** padės rasti geriausias vietas, kur gauti bendros pagalbos dėl **AAPS**. Tai vienintelė vieta, į kurią reikia kreiptis, kai kas nors neveikia: puslapyje [Bendrasis trikčių šalinimas](GettingHelp/GeneralTroubleshooting.md) pagal temas surinkti dažniausių problemų sprendimai, o [DUK](UsefulLinks/FAQ.md) atsako į dažnus klausimus. Tai labai svarbu, kad galėtumėte kuo greičiau susisiekti su kitais, išsiaiškinti klausimus ir išspręsti įprastas problemas. Daug žmonių jau sėkmingai naudoja **AAPS**, tačiau kiekvienam kada nors kyla klausimas, kurio jis negali išspręsti pats. Kadangi naudotojų yra daug, į klausimus paprastai atsakoma labai greitai, dažniausiai per kelias valandas. Nebijokite prašyti pagalbos, kvailų klausimų nebūna! Raginame visų patirties lygių naudotojus užduoti tiek klausimų, kiek reikia, kad galėtų saugiai pradėti naudoti sistemą. Šiame skyriuje rasite bendrą **AAPS** ir **AAPSClient** (papildomos sekimo programėlės) trikčių šalinimą, taip pat paaiškinimą, kaip nusiųsti savo **AAPS** duomenis (žurnalų failus) kūrėjams, jei manote, kad **AAPS** techninę problemą reikia ištirti.

Skyriuje **10)** aprašomos **[išplėstinės AAPS parinktys](./AdvancedOptions/FullClosedLoop.md)**, pavyzdžiui, kaip nuo **AAPS** naudojimo hibridiniu uždaru ciklu (bolusai valgiui _ir pan._) pereiti prie visiškai uždaro ciklo (be bolusų), kaip [derinti profilį](./GettingHelp/ProfileTuning.md) ir naudoti Autotune, taip pat išsamiai aprašomi kūrimo ir inžineriniai režimai. Daugumai naudotojų visiškai pakanka pagrindinės („Master“) **AAPS** versijos be šių parinkčių. Šis skyrius skirtas naudotojams, kurie jau gerai kontroliuoja diabetą ir nori dar labiau patobulinti savo sistemą.

Skyriuje **11) [Kaip prisidėti prie AAPS](SupportingAaps/HowCanIHelp.md)** pateikiame informaciją, kaip galite paremti šį projektą. Galite paaukoti pinigų, įrangos arba pasidalyti savo žiniomis. Galite patys siūlyti ar daryti dokumentacijos pakeitimus, padėti [versti dokumentaciją](SupportingAaps/Translations.md) ir pateikti savo duomenis per Open Humans projektą.

Skyriuje **12) Ištekliai** rasite archyvinę ar papildomą dokumentaciją, įskaitant poskyrį [gydytojams](UsefulLinks/ClinicianGuideToAaps.md), kurie domisi atvirojo kodo dirbtinės kasos technologijomis, tokiomis kaip **AAPS**, arba pacientams, kurie nori pasidalyti tokia informacija su savo gydytojais. Ši tema aptariama ir įvade. Šiame skyriuje taip pat rasite daugiau informacijos ir išteklių apie diabetą ir ciklo naudojimą. Jame yra [Terminų žodynas](./UsefulLinks/Glossary.md) – visoje **AAPS** naudojamų santrumpų (arba trumpinių) sąrašas. Čia sužinosite, pavyzdžiui, ką reiškia terminai JIF (ISF) arba LT (TT).


 ### Norite pradėti naudoti **AAPS**? Daugiau apie **AAPS** skaitykite skyriuje [Įvadas į APS ir AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
**AAPS** saugumas priklauso nuo jūsų įrangos (telefono, pompos, NGJ) saugumo funkcijų. Naudokite tik visiškai veikiančią FDA/CE patvirtintą insulino pompą ir NGJ. Nenaudokite sugedusių, modifikuotų ar pačių pasigamintų insulino pompų ar NGJ imtuvų. Naudokite tik originalias gamintojo patvirtintas jūsų pompai ir NGJ skirtas eksploatacines medžiagas (įvediklius, kaniules ir insulino rezervuarus). Neišbandytos ar modifikuotos eksploatacinės medžiagos gali sukelti netikslumų ir insulino dozavimo klaidų, o tai naudotojui labai pavojinga. 

Nenaudokite **AAPS**, jei vartojate SGLT-2 inhibitorius (gliflozinus), nes jie mažina glikemiją. Tai didina diabetinės ketoacidozės (DKA) riziką dėl sumažėjusio insulino tiekimo ir hipoglikemijos riziką dėl sumažėjusios glikemijos. 
```

```{admonition} Disclaimer
:class: note

- Visa čia aprašyta informacija ir kodas skirti tik informavimo ir mokymo tikslams. [Nightscout](https://nightscout.github.io/) ir **AAPS** naudojate savo rizika. Nenaudokite šios informacijos ar kodo medicininiams sprendimams priimti. Nightscout šiuo metu nesiekia atitikti HIPAA privatumo reikalavimų. 
- Kodas iš github.com naudojamas be jokių garantijų ir be jokio oficialaus palaikymo. Norėdami gauti daugiau informacijos, perskaitykite šios saugyklos LICENCIJĄ.
- Visi gaminių ir įmonių pavadinimai, prekių ženklai, paslaugų ženklai, registruoti prekių ženklai ir registruoti paslaugų ženklai priklauso atitinkamiems jų savininkams. Jie naudojami tik informaciniais tikslais ir nereiškia jokio ryšio su jais ar jų pritarimo.

**AAPS** nėra susijusi su šiomis įmonėmis ir jos nepalaiko: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ar [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS dokumentacijos turinys

```{toctree}
:caption: Using this documentation
:titlesonly:

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Pradžia

Įvadas į APS ir AAPS <./Getting-Started/Introduction.md>
Pasirengimas pradėti naudoti AAPS <./Getting-Started/PreparingForAaps.md>
Komponentų apžvalga <./Getting-Started/ComponentOverview.md>
- Suderinamos pompos <./Getting-Started/CompatiblePumps.md>
- Suderinami NGJ <./Getting-Started/CompatiblesCgms.md>
- Suderinami telefonai  <./Getting-Started/Phones.md>
- Suderinami išmanieji laikrodžiai  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Programėlės kūrimas

Atskira Google paskyra AAPS (nebūtina) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
AAPS kūrimas <./SettingUpAaps/BuildingAaps.md>
- Kūrimas naršyklėje <./SettingUpAaps/BrowserBuild.md>
- Kūrimas su Android Studio <./SettingUpAaps/ComputerBuild.md>
- Kūrimas komandine eilute (CLI) <./SettingUpAaps/CLIBuild.md>
AAPS perkėlimas ir įdiegimas <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Ataskaitų serverio nustatymas

Ataskaitų serverio nustatymas <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Settings <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Kasdienis gyvenimas su AAPS

AAPS ekranai <./DailyLifeWithAaps/AapsScreens.md>
Pagrindinės AAPS funkcijos <./DailyLifeWithAaps/KeyAapsFeatures.md>
AAO apskaičiavimas <./DailyLifeWithAaps/CobCalculation.md>
Jautrumo nustatymas <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dinaminis JIF <./DailyLifeWithAaps/DynamicISF.md>
Profilio keitimas ir profilio procentas <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Laikini tikslai <./DailyLifeWithAaps/TempTargets.md>
Ištęsti angliavandeniai <./DailyLifeWithAaps/ExtendedCarbs.md>
Greitasis vedlys <./DailyLifeWithAaps/QuickWizards.md>
Scenarijai <./DailyLifeWithAaps/Scenes.md>
Automatizacija <./DailyLifeWithAaps/Automations.md>
QuickLaunch įrankių juosta <./DailyLifeWithAaps/QuickLaunch.md>
Pagrindinio ekrano valdikliai <./DailyLifeWithAaps/Widgets.md>
Maisto duomenų bazė <./DailyLifeWithAaps/Food.md>
Visuotinė paieška <./DailyLifeWithAaps/GlobalSearch.md>
Duomenų peržiūra <./Maintenance/Reviewing.md>
AAPS vaikams <./DailyLifeWithAaps/AapsForChildren.md>
Pompos ir kaniulės <./DailyLifeWithAaps/PumpsAndCannulas.md>
Laiko juostos keitimas ir vasaros laikas <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) AAPS nuotolinės funkcijos

Nuotolinis stebėjimas <./RemoteFeatures/RemoteMonitoring.md>
Tik sekimas <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Nuotolinis valdymas <./RemoteFeatures/RemoteControl.md>
Programėlė AAPSClient <./RemoteFeatures/AapsClient.md>
Pagrindinio įrenginio ↔ kliento valdymas <./RemoteFeatures/ClientMasterControl.md>
SMS komandos <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS išmanieji laikrodžiai

AAPS Wear OS laikrodžiams <./WearOS/BuildingAapsWearOS.md>
Išmaniojo laikrodžio naudojimas <./WearOS/WearOsSmartwatch.md>
Nuotolinis valdymas <./RemoteFeatures/RemoteControlWearOS.md>
Pasirinktinio ciferblato žinynas <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Pasirinktinių ciferblatų mainų svetainė <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork, AAPS-CI) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Pagalba ir trikčių šalinimas

Kur gauti pagalbos dėl AAPS <./GettingHelp/WhereCanIGetHelp.md>
Bendrasis trikčių šalinimas (pradėkite čia) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth trikčių šalinimas <./GettingHelp/BluetoothTroubleshooting.md>
- NSClient trikčių šalinimas <./GettingHelp/TroubleshootingNsClient.md>
- Android Studio trikčių šalinimas <./GettingHelp/TroubleshootingAndroidStudio.md>
- Kūrimas naršyklėje: trikčių šalinimas <./GettingHelp/BrowserBuildTroubleshooting.md>
- AAPS įdiegimas iš naujo (nauja raktų saugykla) <./GettingHelp/ReinstallAaps.md>
- Žurnalų failų gavimas <./GettingHelp/AccessingLogFiles.md>
DUK <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Išplėstinės AAPS parinktys

Visiškai uždaras ciklas <./AdvancedOptions/FullClosedLoop.md>
Profilio derinimo vadovas <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulino koncentracija <./AdvancedOptions/InsulinConcentration.md>
Kūrimo atšaka (dev) <./AdvancedOptions/DevBranch.md>
Kūrimas naršyklėje: vieno pakeitimo įtraukimas (cherry-pick) <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Kaip prisidėti prie AAPS

Kaip padėti <./SupportingAaps/HowCanIHelp.md>
Kaip redaguoti dokumentaciją <./SupportingAaps/HowToEditTheDocs.md>
Programėlės ir dokumentacijos vertimas <./SupportingAaps/Translations.md>
Vertimų būsena <./SupportingAaps/StateOfTranslations.md>
Open Humans duomenų įkėlimas <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ištekliai

Terminų žodynas <./UsefulLinks/Glossary.md>
Bendri diabeto ir ciklo ištekliai <./UsefulLinks/BackgroundReading.md>
Gydytojams <./UsefulLinks/ClinicianGuideToAaps.md>
```
