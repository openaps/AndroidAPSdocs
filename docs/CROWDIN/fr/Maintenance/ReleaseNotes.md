
# Notes de Version

Please follow the instructions in the [update manual](UpdateToNewVersion). The troubleshooting section also addresses the most common difficulties encountered when updating **AAPS** on the update manual page.

You will receive the information as soon as a new update is available. If you do not update until expiration date **AAPS** will switch to Open Loop.

![Update info](../images/AAPS_LoopDisable90days.png)

This prompt is important, should not be ignored and is not intended to bug you. New versions of **AAPS** do not only provide new features but also important safety fixes. Therefore it is necessary that every **AAPS** user updates to the latest version a.s.a.p. Unfortunately there are still bug reports from very old versions so this an effort to try to improve the safety for each **AAPS** user and the DIY community. Thank you for your understanding.

```{admonition} First version of **AAPS**
:class: note

La première version de test a déjà commencé en 2015. In 2016 has been the first released version.

The chronology of these releases is not available at the moment but as this question is asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)

(maintenance-android-version-aaps-version)=

## Version d'Android et version AAPS

If your smartphone uses an Android Version older than Android 11 you will not be able to use AAPS v3.3 and up as it requires at least Android 11.

Afin de permettre aux utilisateurs ayant une ancienne version d'Android d'utiliser une ancienne version de AAPS de nouvelles versions ont été poussées qui ne changent que la vérification de version. Aucune autre amélioration n'est incluse.

### Android 11 and up

- Utiliser la dernière version d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS>

### Android 9,10

- Use AAPS version **3.2.0.4**
- Download AAPS Code from <https://github.com/nightscout/AndroidAPS> branch 3.2.0.4

### Android 8

- Utiliser la version **2.8.2.1** d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS> branche 2.8.2.1

### Android 7

- Utiliser la version **2.6.2** d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS> branche 2.6.2

## WearOS version

- AAPS requires at least WearOS API level 28 (Android 9)

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version3321)=

## Version 3.3.2.1

Release date: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Fix mmol-mgdl conversion
- Fix wrong time selection in dialogs in some timezones
- Fix reading keys in simple mode
- Fix missed predictions on wear
- Improved ConfigBuilder
- Improved NSCv3 full sync

(version3300)=

## Version 3.3.2.0

Release date: 27-03-2025

### How to upgrade

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

### Starting this version, notification and version enforcement has been simplified and softed and works following way:
*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  You'll receive warning/notifications less often:
   - 28+ days remaining: every 7 days
   - 27-14 days remaining: every 3 days
   - then once a day
   - Notification will be generated after noon to not bother you during nights
* There are only 2 kinds of notification
   - New version available (has no effect on AAPS)
   - Application is expiring on some date in the future (still no effect on AAPS) / has expired (AAPS will turn into LGS mode)

### News

* SMS RESTART command @MilosKozak
* Watch Profile switch parameters @olorinmaia
* Dark mode AAPS V2 watchface @olorinmaia
* G7 data exchange improvements @olorinmaia
* Widget configuration @MilosKozak
* Radiobuttons UI improvements @olorinmaia
* Automation: position choosing from map @MilosKozak
* Version visible on main screens @MilosKozak
* Compilation with existing git system in enforced (no zip downloads)
* Show version on main screen @MilosKozak
* Tidepool upload improvements @ConstantinMatheis

### Bug fixes

* Dash unbonding fix @Andreas
* Garmin fixes @robertbuessow @suside
* Fix of IOB displaying in dialogs @olorinmaia
* Objectives spelling and validation improvements @MilosKozak
* Fixed rendering of emulated TBRs @MilosKozak
* Fixed bypassing security @tdrkDev

## Version 3.3.1.3

Release date: 21-01-2025

### Bug fixes

* Dash: bonding is optional (default off) @MilosKozak
* Equil: fixed bolud 10+U, alarm improvements @EquilHack
* Garmin: watch improvements @swissalpine
* Watch improvements @olorinmaia
* Control loop status from watch @tdrkDev
* Stability improvements

*  **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**

## Version 3.3.1.2

Release date: 15-01-2025

### How to upgrade

* [Android Studio version called "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. **This is not the same as plain "Ladybug".** If you already built a 3.3.x version, you need to upgrade Android Studio again.

### Bug fixes

* Dash: use bonding on Android 15+
* Restored Dexcom button on Overview
* Equil: allowed remove non working pump
* Warn when DynISF Adjustment Factor is zero
* NSCv3: resolve websocket communication on phones with slightly different time
* SMS Commands: fix OneTimePassword. **New [setup of Authenticator](#sms-commands-authenticator-setup) may be needed.**
* Fix issue where some preferences could not be edited anymore.
* Fix reset of master password with virtual pump.
* Fixed import of large settings backup files.

## Version 3.3.1.0

Release date: 06-01-2025

### UI changes

* [Added colors to differentiate between AAPSClient and AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Improved Users actions layout and icons

### Other functionalities

* New automation trigger : [steps count](#screen-heart-rate-steps) @Roman Rihter
* Allow to receive everything on NSCv3 full sync (including data previously not synced such as TBR) @MilosKozak
* NSClient v3 : make Announcement work (_i.e._ from AAPSClient to AAPS) @MilosKozak

### Technical changes & bug fixes

* Fix Insight crash @philoul
* Fix creation of extra-numerous deviceStatus entries in Nightscout @MilosKozak
* Fix carbs absorption @MilosKozak
* Fixed color of RadioButtons & CheckBoxes @MilosKozak
* Fixed bug in DynISF percentage migration @MilosKozak
* Resolved misplaced DynISF notification @MilosKozak
* Fixed bug in watchfaces @philoul

## Version 3.3.0.0

Release date: 29-12-2024

### Main features

* **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** feature is no more a dedicated plugin, but is now included as an option of [OpenAPS SMB](#Config-Builder-aps) plugin, along with some changes in its behaviour:
  * **Profile Switch** and **Profile Percentage** is now taken into account for **Dynamic ISF** in respect of dynamic sensitivity strengthness
  * The average **ISF** of the last 24h is calculated and this value is used for bolus wizard and **COB** calculation. **Profile ISF** value is not used at all (except fallback when history data is not available)
  * DynamicISF documentation page has been rewritten. Please read the important section [Things to consider when activating Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users
  * Note : Requires latest version of xDrip+ or Juggluco.
* New **Automation** triggers
* Unattended settings exports

### How to upgrade

* Before upgrading:
  * **<span style="color:red">This version requires Google Android 11.0 or above</span>**. Check your phone version before attempting to update.
  * If you use the “old” Combo driver with ruffy device, migrate to the [native Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) before update
  * You will lose your [additional graphs](#AapsScreens-section-g-additional-graphs) on the HomeScreen during upgrade: make a manual note of your current configuration if needed, so that you can recreate them after upgrade.
  * The [Bluetooth connectivity issues some people encounter on Android 15](../Getting-Started/Phones.md) are **NOT** solved by this release (this is an Android issue, not **AAPS**). A fix is available in 3.3.1.2.
  * The BYODA button on the homescreen is no longer available due to Android limitations. This is fixed in 3.3.1.2.
* Update instructions: follow the [Update to a new version](../Maintenance/UpdateToNewVersion.md) guide.
  * [Android Studio version called "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already have an older version of Android Studio installed, you may need to <span style="color:red">configure the JVM version to 21</span>. See [Troubleshooting Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Tip - if you do not want to lose your **AAPS** history ALWAYS do an UPDATE and NOT an UNINSTALL/INSTALL. As a precaution, back up your current **AAPS** settings and old APK to revert to an old version should anything go wrong.
* After upgrading:
  * Set the new [“AAPS directory” setting](#preferences-maintenance-logdirectory), in the Maintenance tab.

### Detailed changes

#### CGMs and Pumps

* [Enable “SMB always” and “SMB after carbs”](#Open-APS-features-enable-smb-always) for FreeStyle Libre 2 and Libre 3 users @MilosKozak
* [Medtrum driver](../CompatiblePumps/MedtrumNano.md) improvements @jbr77rr
  * Communication improvements, including new setting to workaround problems on some smartphones
  * Show reservoir level at start of activation
  * Fix bug where activation returns to start and user cannot finish the activation
  * Feedback for sync status and other clarifications
* New supported pump : [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* New supported CGMs : [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer and [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Insight driver rewritten to kotlin @Philoul
* Removed old ruffy dependent Combo driver

#### UI changes

* [Simple mode](#preferences-simple-mode) activated by default on fresh install @MilosKozak
* New [QuickWizard](#Preferences-quick-wizard) options @radicalb
  * The QuickWizard now uses the same logic for bolus calculation and display as the calculator. You can now use the “carb time” field in QuickWizard  to pre-bolus.
* New [graph scale menu](#aaps-screens-main-graph); [additional graphs menu](#AapsScreens-activate-optional-information) UI improvements @Philoul
* [ConfigBuilder layout improvement](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Sections are now collapsed by default. Use arrow to expand.
* Variable sensitivity visible in AAPSClient
* BolusWizard UI improvements @kenzo44
* Fix text display in pump tabs when using light theme @jbr77rr

#### Other functionalities

* [Unattended settings exports](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* New [Automation trigger](#automations-automation-triggers) @vanelsberg
  * Pod Activation (patch pump only)
* New [Automation triggers](#automations-automation-triggers) @jbr77rr
  * Cannula age, Insulin age, Battery age, Sensor age, Reservoir level, Pump battery level
* Allowing negative carbs entry @MilosKozak
* New Parameter [“AAPS directory”](#preferences-maintenance-settings) to choose a storage directory different from the default one.
* Allow for [insulin records when pump suspended](#aaps-screens-buttons-insulin) @jbr77rr
* Updated [Objective 2](#objectives-objective2) @MilosKozak
  * Check that master password is set and known
* Random carbs in test mode @MilosKozak
* Fixed bug in TDD calculation @MilosKozak
* SMS Commands : allow to [**not** send SMS for profile change](#sms-commands-too-many-messages) coming from NS @MilosKozak

#### Montres connectées

* wear and watchfaces improvement @Philoul @MilosKozak @olorinmaia
* Watch tiles from Automation actions @Philoul
* Combined watchfaces from AAPS, AAPSClient and AAPSClient2 to monitor more patients @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

#### Technical changes

* [log files location change](#Accessing-logfiles-accessing-logfiles)
* new internal modules structure @MilosKozak
* split persistence layer from main code @MilosKozak
* build files rewritten to kts @MilosKozak
* algorithms rewritten to kotlin for better performance @MilosKozak
* tons of new unit tests @MilosKozak and others
* more code converted to kotlin @MilosKozak
* new preferences management, xml \-\> kotlin @MilosKozak
* new CI configuration, run CI on own servers @MilosKozak
* libraries updated to latest version, toml @MilosKozak
* migration to kotlin 2.0, java 21 @MilosKozak

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release date: 27-02-2024

This version is the last one supporting Android 10. If you cannot upgrade to Android 11, [update AAPS to 3.2.0.4](#update-aaps-3204).

### Modifications

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

(version3200)=

## Version 3.2.0.0 dedicated to @Philoul

Release date: 23-10-2023

### Conseils importants

- NS 15 is required
- Lors de l'utilisation de websockets dans le plugin NS v3, les traitements entrés par l'interface utilisateur NS (bouton plus) et d'autres applications utilisant l'API v1 ne sont pas envoyées à AAPS. Cela sera corrigé dans la prochaine version de NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internally. Il en va de même pour AAPS et AAPSClient.
- Websockets in v3 plugin work in a similar manner as v1 plugin. Sans websockets activés,  AAPS télécharge régulièrement à partir de NS, ce qui devrait réduire la consommation d'énergie parce que NS n'est pas connecté de façon permanente. On the opposite side it means delays in exchanging data. Please read [here](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) the important comments from the dev team before you use it!
- Si vous utilisez xdrip comme source MGC, vous devez le sélectionner à nouveau après la mise à jour en raison de changements internes
- Tidepool peut être utilisé à la place de NS pour passer le premier objectif
- Si vous envoyez à xDrip+, vous devez configurer le plugin de synchronisation xDrip. In order to receive BGs from AAPS in xDrip, “xDrip+ Sync Follower” must be selected as source
- Si vous voulez basculer vers le pilote ComboV2, Ruffy doit être désinstallé et la pompe doit être à nouveau appairée à AAPS
- In order to use DynISF plugin you have to start Objective 11 (all previous must be in finished state to allow start of 11)


### Modifications

- EOPatch2 / GlucomenDay pilote pompe @jungsomyeonggithub @MilosKozak
- Pilote pompe ComboV2 (pas besoin de Ruffy) @dv1
- Medtrum Nano driver @jbr7rr
- * Support de DanaI coréenne @MilosKozak
- Support du MGC Glunovo @christinadamianou
- Support G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Support Tidepool @MilosKozak
- Plugin Lissage @MilosKozak, @justmara, Lissage Exponentiel @nichi (Tsunami), Lissage moyen @jbr7rr
- DynamicISF plugin @Chris Wilson, @tim2000s
- Garmin watchface & HeartRate support @buessow
- New logo @thiagomsoares
- New watchface @Philoul
- Correction de tonnes de problèmes de la version 3.1
- Ajout des notes dans plus de dialogues @Sergey Zorchenko
- UI fixes @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- Nouvelles commandes SMS LOOP LGS/CLOSED @pzadroga
- Traductions wear @Andries-Smit
- Communication xdrip déplacée vers un plugin séparé @MilosKozak
- Changements internes : mise à jour des versions de libs, migration rx3, nouvelle structure de modules @MilosKozak
- Corrections dans le Pilote Diaconn @miyeongkim
- more database maintenance options @MilosKozak
- AAPSClient transmet les informations si le téléphone principal est branché @MilosKozak
- Change in BolusWizard. Si la MGC n'est pas disponible, le pourcentage est ignoré (100% est utilisé)
- migration to kts build system @MilosKozak
- improved CI integration @MilosKozak @buessow
- tests cleanup @ryanhaining @MilosKozak
- new 110k+ lines of code, changed 240k lines, 6884 changed files

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Important comments on using v3 versus v1 API for Nightscout with AAPS

v1 is the old protocol used for exchanging data between NS web site and NS server. It has many limitations
- v1 sends only 2 days of data
- v1 send all 2 days data on every reconnection
- using websockets is mandatory = permanent connection, more battery compsumption
- during frequent disconnects to NS connection is paused for 15 minutes to prevent high data usage

v3 is new protocol. More safe and efficient
- while using tokens you can better define access rights
- protocol is more efficient on both sides (AAPS & NS)
- It can read up to 3 months of data from NS
- you can choose to use or to not use websockets on every device (using means faster updates, not using means lower power compsumption, but slower updates ie. minutes)
- NSClient is not paused on disconnections

LIMITATIONS
- NS 15 must be used with AAPS 3.2
- v3 doesn't see updates done by v1 protocol (probably it will be resolved in some future version of NS)
- in opposite because of old uneffective method of tracking changes v1 see changes done by v3
- remember NS still uses v1 internally so far thus is not possible to enter data through NS web UI if you are using v3. You must use AAPSClient on SMS if you want enter data remotely

RECOMMENDED SETTING
- because of all above you should choose only one method and use it on all devices (remember all other uploaders at time of writing this are using v1). If you decide to go to v3, select v3 in AAPS and all AAPSClients
- v3 is preferred because of efficiency
- using websockets or not using with v3 depends on your preference
- it HIGHLY recommended to let AAPS gather all data and then upload it to NS as a single uploader. All other devices/applications should only read from NS. By doing it you'll prevent conflicts and sync errors. This is valid for getting BG data to NS using Dexcom Share connector etc. too

(version3100)=

## Version 3.1.0

Date de sortie : 19-07-2022

(Releasenotes-important-hints-3-1-0)=
### Conseils importants

- après la mise à jour désinstallez l'application Wear et installez la nouvelle version
- Utilisateurs d'Omnipod : faites la mise à jour lors d'un changement de pod !!!

### Modifications

- correction des problèmes de la version 3.0
- correction du blocage de l'application @MilosKozak
- correction du driver DASH @avereha
- correction du driver Dana @MilosKozak
- Amélioration énorme de l'interface UI, nettoyage et standardisation, migration vers "material design", styles, thème blanc, nouvelles icônes. @Andries-Smit @MilosKozak @osodebailar @Philoul
- widget @MilosKozak
- support MGC Aidex @andyrozman @markvader (seulement Pumpcontrol)
- Watch [Wear OS tiles](#WearOsSmartwatch-wear-os-tiles), translations @Andries-Smit
- code Wear refactorisé. Plus compatible avec les versions précédentes @MilosKozak
- améliorations a11y @Andries-Smith
- nouvelle option de protection par code PIN @Andries-Smit
- modification de l'échelle graphique possible à partir du menu @MilosKozak
- plus de statistiques disponibles @MilosKozak
- Plugin MIQ supprimé en faveur de la pompe virtuelle
- nouvelle action d'automatisation : Arrêter le traitement (règles suivantes)

## Version 3.0.0

Date de sortie : 31-01-2022

(Releasenotes-important-hints-3-0-0)=
### Conseils importants

- **La version minimale d'Android est maintenant 9.0.**
- **Les données ne sont pas migrées vers la nouvelle base de données.** Ne vous plaignez pas, c'est un changement si énorme que ce n'est tout simplement pas possible. Ainsi après la mise à jour de l'IA, GA, traitements, etc seront effacés. You have to create new [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) and start with zero IOB and COB. Planifiez la mise à jour avec soin !!! C'est mieux si vous le faites sans insuline et glucides actifs
- Utiliser la même version d'AAPS et de NSClient

**Make sure to check and adjust settings after updating to 3.0 as described** [here](../Maintenance/Update3_0.md).

### Etapes de préparation

**Au moins deux jours avant la mise à jour :**

- Désactivez Dexcom Bridge dans Nightscout
- si vous utilisez G5/G6 et xDrip en tant que collecteur, vous devez mettre à jour xDrip vers une version "nocturne" plus récente que le 14 janvier 2022
- si vous utilisez G5/G6 et allez basculer vers BYODA car elle est recommandée pour tirer parti du lissage à postérioiri (vous pouvez toujours utiliser xDrip à d'autres fins, xDrip peut recevoir des données de BYODA)

### Modifications

- 100k lignes changées, 105k nouvelles lignes de code

- [Omnipod DASH support](../CompatiblePumps/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Dana-i support](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

- [Support de la DiaconnG8](../CompatiblePumps/DiaconnG8.md)

- Support de Glunovo

- Base de données interne mise à niveau vers Room @MilosKozak @Tebbe @AdrianLxm @Philoul @andyrozman

- Beaucoup de code réécrit en Kotlin @MilosKozak

- Nouvelle interface interne pour les pilotes des pompes

- NSClient réécrit pour une meilleure synchronisation et une personnalisation plus détaillée @MilosKozak

  - La suppression des enregistrements de NS n'est pas autorisée (uniquement l'invalidation via NSClient)
  - La modification des enregistrements à partir de NS n'est pas autorisée
  - Paramètres de synchronisation disponibles sans le mode ingénierie (pour les parents)
  - Possibilité de resynchroniser les données

- Changement de comportement du changement de profil. Maintenant, on fait la différence entre le Changement de profil *(demandé par l'utilisateur)* et le changement de profil *(une fois exécuté par pompe)* @MilosKozak @Tebbe

- Vous pouvez démarrer la cible temporaire Activité lors de la création du changement de profil @MilosKozak

- NSProfile est supprimé, seul le Profil local peut être utilisé. Local profile can be [synced to NS](#Update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Forgotten [master password reset procedure](#Update3_0-reset-master-password) @MilosKozak

- Enregisrement des Actions utilisateur @Philoul

- Nouveau déclencheur d'automatisation sur la valeur des Cibles Temp. @Philoul

- Nouvelle action d'automatisation Careportal @Philoul

- Ajout un rappel bolus dans le dialogue Glucides @Philoul

- Amélioration de l'Assistant Bolus

- Améliorations de l'interface utilisateur @MilosKozak

- Nouveaux boutons Action utilisateur pour l'automatisation @MilosKozak

- Nouvelle mise en page de l'automatisation @MilosKozak

- Historique mis à jour et corrigé @MilosKozak

- Objective9 supprimé @MilosKozak

- Correction d'un bug associé aux données instables de la MGC @MilosKozak

- Amélioration de la communication DanaR et DanaRS @MilosKozak

- Intégration de CircleCI @MilosKozak

- Changement d'emplacement des fichiers:

  - /AAPS/extra (mode ingénierie)
  - /AAPS/logs /AAPS/exports
  - /AAPS/preferences

## Version 2.8.2

Date de sortie : 23-01-2021

- Please see also [important hints for version 2.8.1.1](#version-2811) below.

### Modifications

- améliorations de la stabilité
- plus de réglages pour Android 8+
- amélioration des icônes
- amélioration de la montre
- Corrections NSClient
- Le conseiller Bolus fonctionne maintenant avec les versions Pumpcontrol et NSClient

(version-2811)=

## Version 2.8.1.1

Date de sortie : 12-01-2021

(important-hints-2-8-1-1)=
### Conseils importants

- L'option **NS_UPLOAD_ONLY** a été forcée à ON pour tous les utilisateurs de la version 2.8.1.
- Si vous utilisez NSClient pour entrer les CT, les glucides ou les changements de profil, vous devez le désactiver dans AAPS mais **seulement dans le cas où votre synchronisation fonctionne bien** (càd. vous ne voyez pas de changements de données indésirables tels que la modification automatique de CT, DBT etc.).
- ATTENTION : NE PAS le faire si vous avez une autre application qui gère les traitements (comme xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY ne peut être désactivé que si le mode ingénierie est activé.

### Changements majeurs

- RileyLink, Omnipod et la pompe MDT améliorations et corrections
- NS_UPLOAD_ONLY forcé
- correction pour SMB & appli. Dexcom
- Correctif Cadran wear
- rapport de plantage amélioré
- gradle reverted to allow direct watchface installation
- corrections de l'automatisation
- amélioration du driver RS
- divers plantages corrigés
- corrections de bugs et améliorations de l'Interface Utilisateur
- nouvelles traductions

(Releasenotes-version-2-8-0)=
## Version 2.8.0

Date de sortie : 01-01-2021

### Conseils importants

- **La version minimale d'Android est 8.0 maintenant.** Pour les anciennes versions d'Android, vous pouvez toujours utiliser la version 2.6.1.4 de l'ancien dépôt.
- [Objectives have changed.](#objectives-objective3) **Finish not completed objectives before update.**
- Le dossier github est toujours sur <https://github.com/nightscout/AndroidAPS>. If you are not familiar with git the easiest way for update is remove directory with AAPS and do a [new clone](../SettingUpAaps/BuildingAaps.md).
- Utilisez [Android Studio 4.1.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- [Omnipod Eros support](../CompatiblePumps/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and special thanks to @ps2 @itsmojo, everybody else involved in the Loop driver for Omnipod and @jlucasvt from GetRileyLink.org
- [bolus advisor](#Preferences-quick-wizard) & [eating reminder](#AapsScreens-section-j) @MilosKozak
- New watchface @rICTx-T1D
- Améliorations de la connexion Dana RS @MilosKozak
- Suppression de "Valeurs MGC inchangées" pour les SMB pour l'application native Dexcom
- New [Low Resolution Skin](#Preferences-skin)
- New ["Pregnant" patient type](#Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Nouvelle présentation tablette de NSClient @MilosKozak
- NSClient transfer insulin, sensitivity and display settings directly from main AAPS @MilosKozak
- [Preferences filter](../SettingUpAaps/Preferences.md) @Brian Quinion
- Nouvelles icônes de pompe @Rig22 @teleriddler @osodebailar
- New [insulin type Lyumjev](#Config-Builder-lyumjev)
- Améliorations de l'assistant de configuration @MilosKozak
- Améliorations de la sécurité @dlvoy
- Améliorations diverses et correctifs @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Version 2.7.0

Date de sortie : 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Maintenance/Update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](#objectives-objective10) in order to continue using [Automation feature](../DailyLifeWithAaps/Automations.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](#objectives-objective3) yet, you will have to complete the exam before you can start objective 11. Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

### Nouvelles fonctionnalités majeures

- utilisation interne de l'injection de dépendance, bibliothèques mises à jour, code réécrit en kotlin @MilosKozak @AdrianLxM
- utilisation de modules pour les pompes Dana @MilosKozak
- [new layout, layout selection](../DailyLifeWithAaps/AapsScreens.md) @MilosKozak
- new [status lights layout](#Preferences-status-lights) @MilosKozak
- [multiple graphs support](#AapsScreens-activate-optional-information) @MilosKozak
- [Profile helper](../SettingUpAaps/YourAapsProfile.md) @MilosKozak
- visualization of [dynamic target adjustment](#AapsScreens-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- new [preferences layout](../SettingUpAaps/Preferences.md) @MilosKozak
- Mise à jour de l'algorithme SMB @Tornado-Tim
- [Low glucose suspend mode](#Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](#key-aaps-features-minimal-carbs-required-for-suggestion) @twain47 @Tornado-Tim
- Careportal supprimé (déplacé vers Actions) @MilosKozak
- [new encrypted backup format](ExportImportSettings.md) @dlvoy
- [new SMS TOTP authentication](../RemoteFeatures/SMSCommands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](#SMSCommands-commands) commands @Lexsus
- meilleure prise en charge des petits débits de basale sur les pompes Dana @Mackwe
- petits correctifs Insight @TebbeUbben @MilosKozak
- ["Default language" option](#Preferences-general) @MilosKozak
- icônes vectorielles @Philoul
- [set neutral temps for MDT pump](#MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- amélioration de l'Historique @MilosKozak
- suppression de l'algorithme OpenAPS MA @Tornado-Tim
- suppression de la sensibilité Oref0 @Tornado-Tim
- [Biometric or password protection](#Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../DailyLifeWithAaps/Automations.md) @PoweRGbg
- [Open Humans uploader](../SupportingAaps/OpenHumans.md) @TebbeUbben @AdrianLxM
- Nouvelle documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Version 2.6.1.4

Date de sortie : 04-05-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Insight: Désactivation de la vibration sur bolus pour le firmware version 3 - Deuxième tentative
- Sinon, identique à 2.6.1.3. La mise à jour est facultative.

## Version 2.6.1.3

Date de sortie : 03-05-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Insight: Désactivation de la vibration sur bolus pour le firmware version 3
- Sinon, identique à 2.6.1.2. La mise à jour est facultative.

## Version 2.6.1.2

Date de sortie : 19-04-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Correction du plantage dans le service Insight
- Sinon, identique à 2.6.1.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1.1

Date de sortie : 06-04-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Résout le problème de commande SMS CARBS avec la pompe Combo
- Sinon, identique à 2.6.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1

Date de sortie : 21-03-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Permet de ne rentrer que `https://` dans les paramètres NSClient
- Fixed [BGI](../UsefulLinks/Glossary.md) displaying bug on watches
- Correction de petits bugs de l'interface utilisateur
- Correction plantages Insight
- Correction glucides futurs avec pompe Combo
- Fixed LocalProfile -> NS sync
- Amélioration des alertes Insight
- Amélioration de la détection des bolus depuis l'historique de la pompe
- Correction des paramètres de connexion NSClient (wifi, en charge)
- Correction de l'envoi des calibrations vers xDrip

(Releasenotes-version-2-6-0)=
## Version 2.6.0

Date de sortie : 29-02-2020

Utilisez [Android Studio 3.6.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- Petites modifications de l'affichage (page d'accueil...)

- Careportal tab / menu removed

- New Local Profile plugin

  - Le profil local peut contenir plusieurs profils
  - Les profils peuvent être dupliqués et modifiés
  - Possibilité de télécharger les profils vers NS
  - Les anciens changements de profil peuvent être dupliqués veres un nouveau profil local (décalage horaire et pourcentage appliqués)
  - Vertical NumberPicker for targets

- Le Profil Simple est supprimé

- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- Plugin MDT : Correction du bug entrées dupliquées

- Les unités ne sont pas définies dans le profil mais c'est un paramètre global

- Ajout de nouveaux paramètres à l'assistant de démarrage

- Diverses améliorations internes et de l'interface

- [Complications Montre](../WearOS/WearOsSmartwatch.md)

- New [SMS commands](../RemoteFeatures/SMSCommands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Correction de la prise en charge des langues

- Objectives: [Allow to go back](#CompletingTheObjectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](#Automations-the-order-of-the-automations-in-the-list-matters)

- Automatisation : correction de bug quand l'automatisation fonctionnait avec une boucle désactivée

- Nouvelle ligne d'état pour la Combo

- Amélioration de l'état des Glucides

- Correction synchronisation Cibles Temp avect NS

- Nouvelle activité Statistiques

- Bolus étendus autorisés en mode boucle ouverte

- Support des alarmes Android 10

- Des tonnes de nouvelles traductions

## Version 2.5.1

Date de sortie : 31-10-2019

Please note the [important notes](#Releasenotes-version-2-5-0) and [limitations](#Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](#Releasenotes-version-2-5-0). \* Correction d'un bug dans le statut du réseau qui entraînait des plantages fréquent (pas critique mais gaspillerait beaucoup d'énergie). \* Nouvelle gestion des versions qui permettra de faire des mises à jour mineures sans déclencher la notification de mise à jour.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Date de sortie : 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Remarques importantes

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../SettingUpAaps/BuildingAaps.md) or [update](UpdateToNewVersion).
- If you are using xDrip [identify receiver](#xdrip-identify-receiver) must be set.
- Si vous utilisez le Dexcom G6 avec l'application Dexcom patchée, vous aurez besoin de la version présente dans le [dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp est pris en charge à partir de la version 4.15.57 et plus récente.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Cette mise à jour est-elle pour moi? N'est actuellement PAS pris en charge

- Android 5 and inférieurs
- Poctech
- 600SeriesUploader
- Dexcom patchés présents dans le répertoire 2.3

### Nouvelles fonctionnalités majeures

- Changement interne de targetSDK à 28 (Android 9), prise en charge de jetpack
- Prise en charge de RxJava2, Okhttp3, Retrofit
- Old [Medtronic pumps](../CompatiblePumps/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../DailyLifeWithAaps/Automations.md)
- Allow to [bolus only part](#Preferences-advanced-settings-overview) from bolus wizard calculation
- Affichage de l'activité de l'insuline
- Ajustement des prévisions de l'IA par le résultat autosens
- Nouveau support pour les apk des applications Dexcom patchées ([dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Vérificateur de signature
- Autorisation de contourner les objectifs pour les utilisateurs d'OpenAPS
- New [objectives](../SettingUpAaps/CompletingTheObjectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Correction d'un bug dans les pilotes Dana\*, où une différence de temps erronée a été signalée
- Fixed bug in [SMS communicator](../RemoteFeatures/SMSCommands.md)

## Version 2.3

Date de sortie : 25-04-2019

### Nouvelles fonctionnalités majeures

- Correctif de sécurité important pour Insight (vraiment important si vous utilisez Insight !)
- Correctif du Navigateur-Historique
- Correction des Calculs Delta
- Mises à jour des langues
- Vérification de GIT et avertissement de la mise à niveau gradle
- Plus de tests automatiques
- Correction d'un crash potentiel dans le service d'Alarm Sonore (merci @lee-b !)
- Correction de la diffusion de données Gly (fonctionne indépendamment des droits SMS maintenant !)
- Nouveau vérificateur de version

## Version 2.2.2

Date de sortie : 07-04-2019

### Nouvelles fonctionnalités majeures

- Correctif Autosens : désactiver CT réhausse/diminue la cible
- Nouvelles traductions
- Correctifs du pilote Insight
- Correctif plugin SMS

## Version 2.2

Date de sortie : 29-03-2019

### Nouvelles fonctionnalités majeures

- [Correction Changement d'heure](#time-adjustment-daylight-savings-time-dst)
- Correctif Wear
- [SMS plugin](../RemoteFeatures/SMSCommands.md) update
- Retour arrière dans les Objectifs.
- Arrêt de la boucle si le téléphone est plein

## Version 2.1

Date de sortie : 03-03-2019

### Nouvelles fonctionnalités majeures

- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Voyants d'état sur l'écran principal (Nico Schmitz)
- Aide sur les changements d'heure (Roumen Georgiev)
- Fix processing profile names coming from NS (Johannes Mockenhaupt)
- Correctifs Interface utilisateur (Johannes Mockenhaupt)
- Support de la mise à jour G5 (Tebbe Ubben et Milos Kozak)
- Support des sources de GLY G6, Poctech, Tomato, Eversense (Tebbe Ubben et Milos Kozak)
- Correctifs désactivation des SMB à partir des préférences (Johannes Mockenhaupt)

### Misc

- Si vous n'utilisez pas la valeur par défaut de `smbmaxminutes` vous devez configurer à nouveau cette valeur

## Version 2.0

Date de sortie : 03-11-2018

### Nouvelles fonctionnalités majeures

- Support de oref1/SMB ([documentation oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Assurez-vous de bien lire la documentation pour savoir ce que vous pouvez attendre des SMB, comment il fonctionne, ce qu'il peut faire et comment l'utiliser pour qu'il marche en douceur.
- Accu-Chek Combo pump support
- Assistant de configuration : vous guide dans le processus de configuration d'AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Paramètres à ajuster lors du passage d'AMA à SMB

- L'objectif 10 doit être démarré pour pouvoir activer les SMB (l'onglet SMB montre généralement les restrictions appliquées)

- maxIA inclu maintenant \_tous\_ les IA, plus seulement la basal ajoutée. En d'autres termes, s'il y a eu un bolus de 8 U pour un repas et maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA repasse en dessous de 7 U.

- la valeur par défaut de min_5m_carbimpact est passée de 3 à 8 entre AMA et SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement

- Remarque lors de la construction de l'apk d'AAPS 2.0 : Configuration on demand n'est pas supporté par la version actuelle du plugin Android Gradle ! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

  - Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
  - Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
  - Décochez la case Configure on demand.
  - Cliquez sur Appliquer ou OK.

(Releasenotes-overview-tab)=
### Onglet Aperçu (Accueil)

- Le ruban du haut donne accès à Suspendre/Désactiver la boucle, consulter/changer le profil et démarrer/arrêter les cibles temp. (CT). Les CT utilisent des paramètres par défauts configurés dans les préférences. La nouvelle option CT Hypo est une cible temp. haute pour empêcher la boucle de corriger trop agressivement les glucides de secours.
- Boutons de traitement : l'ancien bouton de traitement est encore disponible, mais masqué par défaut. La visibilité des boutons peut maintenant être configurée. New insulin button, new carbs button (including [eCarbs/extended carbs](../DailyLifeWithAaps/ExtendedCarbs.md))
- [Lignes de prédiction colorées](#aaps-screens-prediction-lines)
- Option pour afficher un champ de notes dans les boites de dialogue insuline/glucides/calculatrice et amorcer+remplir, qui sont téléchargées dans NS
- Mise à jour de la boîte de dialogue amorcer/remplir qui permet l'amorçage et créé une entrée Careportal pour le changement de site et le changement de cartouche

### Montre

- Variante séparée de compilation supprimée, incluse maintenant dans la version complète standard. Pour utiliser des commandes bolus à partir de la montre, activez ce paramètre sur le téléphone
- L'assistant ne demande maintenant que les glucides (et le pourcentage s'il est activé dans les paramètres de la montre). Les paramètres pris en comptes dans le calcul peuvent être configurés dans les paramètres du téléphone
- les confirmations et boîtes de dialogue fonctionnent maintenant sous wear OS 2.0
- Ajout des eGlucides dans le menu

### Nouveaux plugins

- Application PocTech en tant que source GLY
- Application Dexcom patchée en tant que source GLY
- plugin de sensibilité oref1

### Misc

- L'application utilise maintenant des tiroirs pour afficher tous les plugins; les plugins sélectionnés comme visibles dans le générateur de configuration sont affichés en tant qu'onglet en haut de l'écran (favoris)
- Remplacement des onglets de la Configuration et des objectifs, ajout de descriptions
- Nouvelle icône d'application
- Beaucoup d'améliorations et de correctifs
- Alerte indépendante de Nightscout si la pompe est injoignable pendant une durée longue (par ex. si la pile de la pompe est à plat) et pour des lectures de GLY manquées (voir *Alertes locales* dans les paramètres)
- Option pour garder l'écran allumé
- Option pour afficher les notifications AAPS comme des notifications Android
- Filtrage avancé (permettant de toujours activer SMB et pendant 6h après les repas) pris en charge avec l'application Dexcom patchée ou xDrip+ avec le mode natif G5 en tant que source GLY.
