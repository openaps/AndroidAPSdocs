# Benvinguts a la documentació d'AAPS

![imatge](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 d'octubre de 2026: ja ha sortit la versió 4.0.0. Consulteu les [Notes de la versió](#latestrelease) per veure les novetats i seguiu les instruccions del [manual d'actualització](./Maintenance/UpdateToNewVersion.md) per actualitzar.

```

Android APS (**AAPS**) és una aplicació de codi obert per a persones amb diabetis que depenen de la insulina. És un sistema de pàncrees artificial (APS) que funciona en telèfons intel·ligents Android. **AAPS** fa servir un algoritme d'OpenAPS i intenta fer el mateix que un pàncrees real: mantenir la glucèmia dins de límits saludables amb dosificació automàtica d'insulina. Per fer servir **AAPS** necessiteu **tres** dispositius compatibles: **(1)** un telèfon Android, **(2)** un monitor continu de glucosa (CGM) i **(3)** una bomba d'insulina aprovada per la FDA/CE. També podeu afegir **(4)** serveis al núvol per controlar **AAPS** a distància, compartir les vostres dades i desar-les en un servidor d'informes, i **(5)** un rellotge intel·ligent.

Aquesta documentació explica com configurar i fer servir **AAPS**. Podeu navegar per la documentació d'**AAPS** amb el menú de l'esquerra (i la pràctica funció **Cerca a la documentació**), o amb l'[índex](#index-aaps-documentation-index) al final d'aquesta pàgina.

## Visió general de la documentació d'AAPS («la documentació»)

A la secció **1) Primers passos**, la [Introducció a APS i AAPS](Getting-Started/Introduction.md) explica la idea general de què ha de fer un sistema de pàncrees artificial (APS). Explica la base del llaç en general, per què es va desenvolupar **AAPS**, compara **AAPS** amb altres sistemes i parla de la seguretat. Dona consells per parlar d'**AAPS** amb el vostre equip mèdic, explica per què heu de compilar vosaltres mateixos l'aplicació **AAPS** en lloc de només descarregar-la, i dona una visió general de les connexions típiques d'un sistema **AAPS**. També parla de l'accessibilitat i de qui pot treure profit d'**AAPS**.

[Preparació per començar amb AAPS](./Getting-Started/PreparingForAaps.md) dona més detalls sobre la seguretat i sobre els telèfons, els CGM (monitors continus de glucosa) i les bombes d'insulina compatibles amb **AAPS**. Dona una visió general del procés que seguireu i un calendari aproximat per arribar a fer servir totes les funcions d'**AAPS**. Aquesta secció us prepara tècnicament per muntar el vostre sistema **AAPS** de la manera més ràpida i eficient possible. La subsecció [CGM compatibles](./Getting-Started/CompatiblesCgms.md) explica com optimitzar la configuració del vostre CGM i quines opcions de suavitzat són les millors.

Ara que enteneu bé el procés, podeu començar a muntar el vostre llaç **AAPS**.

La secció **2) Compilar l'aplicació** explica per què heu de compilar vosaltres mateixos l'aplicació **AAPS** en lloc de només descarregar-la, i us guia pas a pas per [compilar-la](./SettingUpAaps/BuildingAaps.md) (amb un navegador, Android Studio o la línia d'ordres) i després transferir-la i instal·lar-la al vostre telèfon. Comença amb un pas opcional: crear un [compte de Google dedicat](./UsefulLinks/DedicatedGoogleAccountForAaps.md) per guardar les vostres compilacions i còpies de seguretat. També explica la [verificació de desenvolupadors d'Android](#android-developer-verification), un canvi que Google aplica a partir de setembre de 2026 i que afecta com s'instal·len les aplicacions compilades per un mateix.

La secció **3) Configurar el servidor d'informes** explica com triar i [configurar el vostre servidor d'informes](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout o Tidepool) perquè pugueu revisar i compartir les vostres dades.

La secció **4) [Configurar AAPS](./SettingUpAaps/SetupWizard.md)** explica com configurar l'aplicació **AAPS** amb l'assistent de configuració, com connectar-la amb la vostra aplicació de CGM i amb una bomba d'insulina real o virtual, i com connectar **AAPS** amb el vostre servidor d'informes. Després coneixereu tot el que **AAPS** pot fer, amb un procés pas a pas, segur i al ritme adequat. Així us assegureu que vosaltres (o el vostre fill) coneixeu bé i us sentiu còmodes amb tots els nivells i menús de configuració abans de passar a la fase següent, que s'anomena el següent «objectiu». Continueu així fins que tingueu prou experiència per començar a fer servir les opcions més avançades de l'aplicació. Aquests objectius estan pensats per desbloquejar a poc a poc més possibilitats d'**AAPS** i passar del llaç obert al llaç tancat.

La secció **5) [Vida diària amb AAPS](./DailyLifeWithAaps/AapsScreens.md)** explica les funcions principals d'**AAPS**, per ajudar-vos a fer servir (i personalitzar) **AAPS**. Això inclou entendre les pantalles, els carbohidrats a bord, la sensibilitat, l'ISF dinàmic, els canvis de perfil, els objectius temporals, els carbohidrats estesos (o e-carbs), les automatitzacions i [revisar les vostres dades](./Maintenance/Reviewing.md) a l'historial i a les estadístiques. També parla de temes freqüents com gestionar diferents tipus d'àpats, els canvis de cànula i de sensor, les actualitzacions del telèfon, els canvis d'horari d'estiu, [viatjar amb AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) i l'esport. Les preguntes i respostes habituals es troben a la secció de resolució de problemes.

La secció **6) [Funcions remotes d'AAPS](./RemoteFeatures/RemoteControl.md)** mostra un punt fort real d'**AAPS**. Hi ha moltes possibilitats per enviar ordres a distància a **AAPS** o simplement seguir-ne les dades. Això és igual d'útil per als cuidadors que volen fer servir **AAPS** per a menors, i per als adults amb diabetis que volen controlar la glucèmia (i altres dades) de manera més còmoda que només al telèfon (en un rellotge, al cotxe, _etc._), o que volen que altres persones properes també puguin veure les dades. Aquesta secció també explica com fer servir Android Auto per veure la glucèmia al cotxe.

La secció **7) [Rellotges intel·ligents Wear OS](./WearOS/BuildingAapsWearOS.md)** dona informació i procediments per fer servir un rellotge intel·ligent Android **Wear OS** amb els watchfaces dedicats d'**AAPS** o amb watchfaces personalitzats, com a control remot del vostre telèfon o només com a pantalla.


La secció **8) [Manteniment d'AAPS](./Maintenance/ExportImportSettings.md)** explica com exportar i fer una còpia de seguretat de la vostra configuració (molt important si perdeu o trenqueu el telèfon), dona les notes de la darrera versió, explica com actualitzar **AAPS** i què passa quan una versió arriba a la fi del suport. Podeu esperar una versió nova i 2–3 actualitzacions obligatòries cada any. Com amb qualsevol programari, heu de fer aquestes actualitzacions, perquè s'hi corregeixen errors petits i s'hi fan millores a **AAPS**. Hi ha una secció específica de resolució de problemes d'«actualització» amb les preguntes habituals.

La secció **9) [Ajuda i resolució de problemes](GettingHelp/WhereCanIGetHelp.md)** us ha d'indicar els millors llocs on trobar ajuda general amb **AAPS**. És l'únic lloc on heu d'anar quan alguna cosa no funciona: la pàgina de [Resolució de problemes](GettingHelp/GeneralTroubleshooting.md) recull, per temes, les solucions als problemes més habituals, i les [Preguntes freqüents](UsefulLinks/FAQ.md) responen les preguntes més comunes. Això és molt important per poder contactar amb altres persones tan aviat com sigui possible, aclarir dubtes i resoldre els problemes habituals. Molta gent ja fa servir **AAPS** amb èxit, però tothom té en algun moment una pregunta que no pot resoldre sol. Com que hi ha molts usuaris, les respostes a les preguntes solen arribar molt de pressa, normalment en poques hores. No tingueu por de demanar ajuda: no hi ha preguntes ximples! Animem els usuaris de qualsevol nivell d'experiència a fer totes les preguntes que creguin necessàries per començar a fer-lo servir de manera segura. Aquesta secció inclou la resolució de problemes general d'**AAPS** i d'**AAPSClient** (una aplicació complementària per seguir les dades), i explica com enviar les vostres dades d'**AAPS** (fitxers de registre) als desenvolupadors perquè les investiguin, si creieu que cal revisar un problema tècnic d'**AAPS**.

La secció **10)** explica les **[Opcions avançades d'AAPS](./AdvancedOptions/FullClosedLoop.md)**, com ara passar de fer servir **AAPS** en llaç tancat híbrid (amb bolus per als àpats, _etc._) al llaç tancat complet (sense bolus), com [ajustar el vostre perfil](./GettingHelp/ProfileTuning.md) i fer servir Autotune, i dona detalls dels modes de desenvolupament i d'enginyeria. La majoria d'usuaris funcionen molt bé amb la versió principal («Master») d'**AAPS** sense mirar aquestes opcions. Aquesta secció és per als usuaris que ja tenen un bon control i volen millorar encara més el seu sistema.

A la secció **11) [Com donar suport a AAPS](SupportingAaps/HowCanIHelp.md)** donem informació perquè pugueu donar suport a aquest projecte. Podeu donar diners, material o coneixements. Podeu proposar o fer vosaltres mateixos canvis a la documentació, ajudar amb la [traducció de la documentació](SupportingAaps/Translations.md) i compartir les vostres dades amb el projecte Open Humans.

La secció **12) Recursos** conté documentació arxivada o addicional, amb una subsecció per als [professionals sanitaris](UsefulLinks/ClinicianGuideToAaps.md) interessats en la tecnologia de pàncrees artificial de codi obert com **AAPS**, o per als pacients que volen compartir aquesta informació amb els seus metges. La introducció també parla d'aquest tema. Aquesta secció també conté més referències i recursos sobre la diabetis i el llaç. Inclou el [Glossari](./UsefulLinks/Glossary.md), una llista de les sigles (o noms curts) que es fan servir a **AAPS**. Aquí podeu trobar, per exemple, què volen dir els termes ISF o TT.


 ### Voleu començar a fer servir **AAPS**? Llegiu més sobre **AAPS** a la [Introducció a APS i AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
La seguretat d'**AAPS** depèn de les funcions de seguretat del vostre maquinari (telèfon, bomba, CGM). Feu servir només una bomba d'insulina i un CGM que funcionin perfectament i que estiguin aprovats per la FDA/CE. No feu servir bombes d'insulina ni receptors de CGM trencats, modificats o fets per vosaltres mateixos. Feu servir només consumibles originals (aplicadors, cànules i reservoris d'insulina) aprovats pel fabricant per a la vostra bomba i el vostre CGM. Fer servir consumibles no provats o modificats pot causar imprecisions i errors en la dosi d'insulina, i això és un risc important per a l'usuari. 

No feu servir **AAPS** si preneu inhibidors de l'SGLT-2 (gliflozines), perquè fan baixar la glucèmia. Augmenta el risc de cetoacidosi diabètica (CAD) perquè es lliura menys insulina, i el risc d'hipoglucèmia perquè baixa la glucèmia. 
```

```{admonition} Disclaimer
:class: note

- Tota la informació i el codi que es descriuen aquí són només per a finalitats informatives i educatives. Feu servir [Nightscout](https://nightscout.github.io/) i **AAPS** sota la vostra responsabilitat, i no feu servir la informació ni el codi per prendre decisions mèdiques. Actualment, Nightscout no intenta complir la normativa de privadesa HIPAA. 
- El codi de github.com es fa servir sense cap garantia ni suport formal de cap mena. Llegiu la LICENSE d'aquest repositori per a més detalls.
- Tots els noms de productes i empreses, marques comercials, marques de servei, marques registrades i marques de servei registrades són propietat dels seus titulars. El seu ús és només informatiu i no indica cap relació amb ells ni cap aval per part seva.

**AAPS** no té cap relació amb aquestes empreses ni té el seu aval: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) o [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Índex de la documentació d'AAPS

```{toctree}
:caption: Ús d'aquesta documentació
:titlesonly:

Canviar l'idioma i la versió <./NavigateDoc/ChangeLanguageVersion.md>
Cercar a la documentació <./NavigateDoc/SearchDoc.md>
Actualitzacions i canvis de la documentació <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Primers passos

Introducció a APS i AAPS <./Getting-Started/Introduction.md>
Preparació per començar amb AAPS <./Getting-Started/PreparingForAaps.md>
Visió general dels components <./Getting-Started/ComponentOverview.md>
- Bombes compatibles <./Getting-Started/CompatiblePumps.md>
- CGM compatibles <./Getting-Started/CompatiblesCgms.md>
- Telèfons <./Getting-Started/Phones.md>
- Rellotges intel·ligents i AAPS <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Compilar l'aplicació

Un compte de Google dedicat per a AAPS (opcional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Compilar AAPS <./SettingUpAaps/BuildingAaps.md>
- Compilació al navegador <./SettingUpAaps/BrowserBuild.md>
- Compilació amb Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instruccions de compilació des de la línia d'ordres <./SettingUpAaps/CLIBuild.md>
Transferir i instal·lar AAPS al vostre telèfon <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Configurar el servidor d'informes

Configurar el servidor d'informes <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configurar AAPS

Assistent de configuració d'AAPS <./SettingUpAaps/SetupWizard.md>
El vostre perfil d'AAPS <./SettingUpAaps/YourAapsProfile.md>
Fer canvis a la configuració d'AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configurador (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Configuració <./SettingUpAaps/Preferences.md>
Completar els objectius <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Vida diària amb AAPS

Pantalles d'AAPS <./DailyLifeWithAaps/AapsScreens.md>
Funcions principals d'AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Càlcul del COB <./DailyLifeWithAaps/CobCalculation.md>
Detecció de sensibilitat <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
ISF dinàmic (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
Canvi de perfil i percentatge del perfil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Objectius temporals <./DailyLifeWithAaps/TempTargets.md>
Carbohidrats estesos / «e-carbs» <./DailyLifeWithAaps/ExtendedCarbs.md>
Assistents ràpids (bolus amb un toc) <./DailyLifeWithAaps/QuickWizards.md>
Escenes (configuracions per a cada situació) <./DailyLifeWithAaps/Scenes.md>
Automatització <./DailyLifeWithAaps/Automations.md>
Accés ràpid (barra d'accions ràpides del resum) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets de la pantalla d'inici <./DailyLifeWithAaps/Widgets.md>
Aliments (la vostra base de dades d'aliments) <./DailyLifeWithAaps/Food.md>
Cerca global <./DailyLifeWithAaps/GlobalSearch.md>
Revisar les vostres dades <./Maintenance/Reviewing.md>
AAPS per a nens <./DailyLifeWithAaps/AapsForChildren.md>
Bombes i cànules <./DailyLifeWithAaps/PumpsAndCannulas.md>
Canvi de fus horari i horari d'estiu <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Funcions remotes d'AAPS

Monitoratge remot <./RemoteFeatures/RemoteMonitoring.md>
Seguir AAPS (sense interacció amb el sistema AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Control remot d'AAPS <./RemoteFeatures/RemoteControl.md>
L'aplicació AAPSClient <./RemoteFeatures/AapsClient.md>
Control principal ↔ client (control remot signat) <./RemoteFeatures/ClientMasterControl.md>
Ordres SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Rellotges intel·ligents Wear OS

Compilar l'aplicació AAPS per a Wear OS <./WearOS/BuildingAapsWearOS.md>
Configurar AAPS al vostre rellotge Wear OS <./WearOS/WearOsSmartwatch.md>
Controlar AAPS amb el vostre rellotge Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Document de referència de watchfaces personalitzats <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Lloc d'intercanvi de watchfaces personalitzats <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Manteniment d'AAPS

Crear i restaurar còpies de seguretat <./Maintenance/ExportImportSettings.md>
Notes de la versió <./Maintenance/ReleaseNotes.md>
Què ha canviat a AAPS v4 <./Maintenance/V4Changes.md>
Actualitzar a una nova versió o branca <./Maintenance/UpdateToNewVersion.md>
- Actualitzar amb el navegador (fork) <./Maintenance/UpdateBrowserBuild.md>
- Actualitzar amb Android Studio <./Maintenance/UpdateComputerBuild.md>
Fi del suport <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Ajuda i resolució de problemes

On puc trobar ajuda? <./GettingHelp/WhereCanIGetHelp.md>
Resolució de problemes <./GettingHelp/GeneralTroubleshooting.md>
- Problemes relacionats amb el Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Resolució de problemes de NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Resolució de problemes d'Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Compilació al navegador: resolució de problemes <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstal·lar AAPS amb un nou magatzem de claus <./GettingHelp/ReinstallAaps.md>
- Accés als fitxers de registre <./GettingHelp/AccessingLogFiles.md>
Preguntes freqüents per a usuaris del llaç <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Opcions avançades d'AAPS

Llaç tancat complet <./AdvancedOptions/FullClosedLoop.md>
Ajustar el perfil d'AAPS <./GettingHelp/ProfileTuning.md>
Com utilitzar el plugin Autotune <./AdvancedOptions/Autotune.md>
Concentració d'insulina <./AdvancedOptions/InsulinConcentration.md>
Branca de desenvolupament <./AdvancedOptions/DevBranch.md>
Compilació al navegador: cherry-pick d'un commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Com donar suport a AAPS

Com ajudar AAPS <./SupportingAaps/HowCanIHelp.md>
Com editar la documentació <./SupportingAaps/HowToEditTheDocs.md>
Com traduir textos de l'aplicació AAPS o de la documentació <./SupportingAaps/Translations.md>
Estat de la traducció de l'aplicació i de la documentació <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Recursos

Glossari <./UsefulLinks/Glossary.md>
Recursos útils per llegir abans de començar <./UsefulLinks/BackgroundReading.md>
Per a professionals sanitaris – Introducció general i guia d'AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
