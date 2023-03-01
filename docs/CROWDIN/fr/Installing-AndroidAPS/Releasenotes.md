(Releasenotes-release-notes)=
# Notes de Version

Veuillez suivre les instructions de la page [Mise à jour vers une nouvelle version](../Installing-AndroidAPS/Update-to-new-version.md). Vous pouvez également trouver une section de dépannage répondant aux difficultés les plus courantes lors de la mise à jour dans la page du manuel de mise à jour.

Vous recevrez les informations suivantes dès qu'une nouvelle mise à jour sera disponible :

```{image} ../images/AAPS_LoopDisable90days.png
:alt: Information de mise à jour
```

Ensuite, vous avez 60 jours pour mettre à jour. Si vous ne faites pas de mise à jour au cours de ces 60 jours, AAPS retournera en mode AGB (Arrêt Glycémie Basse - cf. [glossaire](../Getting-Started/Glossary.md)) comme dans [l'objective 6](../Usage/Objectives.html).

Si vous ne mettez pas à jour pendant 30 jours supplémentaires (90 jours à partir de la nouvelle date de sortie), AAPS passe à Boucle Ouverte.

Veuillez comprendre que cette modification n'a pas pour but de vous corriger mais est due à des raisons de sécurité. Les nouvelles versions d'AAPS fournissent non seulement de nouvelles fonctionnalités, mais aussi d'importants correctifs de sécurité. Il est donc nécessaire que chaque utilisateur mette à jour a.s.a.p.. Malheureusement, il y a toujours des remontés de bug provenant de très anciennes versions, donc il s'agit d'une tentative d'améliorer la sécurité pour chaque utilisateur et toute la communauté DIY. Merci pour votre compréhension.

```{admonition} First version of AAPS
:class: note

La première version de test a déjà commencé en 2015. La première version a été publiée en 2016.

La chronologie de ces versions n'est pas disponible pour le moment, mais comme cette question est posée plusieurs fois, nous la documenterons ici.

```

## Version d'Android et version AAPS

Si votre smartphone utilise une version d'Android antérieure à Android 9, vous ne pourrez pas utiliser AAPS v3 et supérieur car il nécessite au moins Android 9.

Afin de permettre aux utilisateurs ayant une ancienne version d'Android d'utiliser une ancienne version de AAPS de nouvelles versions ont été poussées qui ne changent que la vérification de version. Aucune autre amélioration n'est incluse.

### Android 9 et supérieur

- Utiliser la dernière version d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS>

### Android 8

- Utiliser la version **2.8.2.1** d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS> branche 2.8.2.1

### Android 7

- Utiliser la version **2.6.2** d'AAPS
- Téléchargez le code AAPS depuis <https://github.com/nightscout/AndroidAPS> branche 2.6.2

## Version 3.2.0

Date de sortie : XX-XX-2023

### Conseils importants

- NS 15 est requis. Pour le moment la branche "dev" du dépôt principal NS
- Lors de l'utilisation de websockets dans le plugin NS v3, les traitements entrés par l'interface utilisateur NS (bouton plus) et d'autres applications utilisant l'API v1 ne sont pas envoyées à AAPS. Cela sera corrigé dans la prochaine version de NS.
- Les Websockets avec le plugin v3 fonctionnent de manière similiaire au plugin v1. Sans websockets activés,  AAPS télécharge régulièrement à partir de NS, ce qui devrait réduire la consommation d'énergie parce que NS n'est pas connecté de façon permanente. D'un autre côté, cela signifie des retards dans l'échange de données.
- Si vous utilisez xdrip comme source MGC, vous devez le sélectionner à nouveau après la mise à jour en raison de changements internes
- Tidepool peut être utilisé à la place de NS pour passer le premier objectif
- Si vous envoyez à xDrip+, vous devez configurer le plugin de synchronisation xDrip. Afin de transférer les glycémies d'AAPS vers xDrip, il doit être sélectionné comme source "xDrip+ Sync Follower"
- If you want to switch to ComboV2 driver, Ruffy must be uninstalled and pump paired again to AAPS


### Modifications

- EOPatch2 / GlucomenDay pilote pompe @jungsomyeonggithub @MilosKozak
- Pilote pompe ComboV2 (pas besoin de Ruffy) @dv1
- Korean DanaI support @MilosKozak
- Support du MGC Glunovo @christinadamianou
- Support G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Support Tidepool @MilosKozak
- Plugin Lissage @MilosKozak, @justmara, Lissage Exponentiel @nichi (Tsunami), Lissage moyen @jbr7rr
- Correction de tonnes de problèmes de la version 3.1
- Ajout des notes dans plus de dialogues @Sergey Zorchenko
- Correction de l'Interface Utilisateur @MilosKozak @osodebailar @Andries-Smit @yodax @philoul @dv1 @paravoid
- Nouvelles commandes SMS LOOP LGS/CLOSED @pzadroga
- Traductions wear @Andries-Smit
- Communication xdrip déplacée vers un plugin séparé @MilosKozak
- Changements internes : mise à jour des versions de libs, migration rx3, nouvelle structure de modules @MilosKozak
- Corrections dans le Pilote Diaconn @miyeongkim
- AAPSClient transmet les informations si le téléphone principal est branché @MilosKozak
- + de 125k nouvelles lignes de code, 150k lignes changées

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
- Montre `les tuiles de Wear OS <../Configuration/Configuration/Watchfaces.mdl#wear-os-tiles>`, traductions @Andries-Smit
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
- **Les données ne sont pas migrées vers la nouvelle base de données.** Ne vous plaignez pas, c'est un changement si énorme que ce n'est tout simplement pas possible. Ainsi après la mise à jour de l'IA, GA, traitements, etc seront effacés. Vous devez créer un nouveau [changement de profil](../Usage/Profiles.md) et commencer avec zéro IA et GA. Planifiez la mise à jour avec soin !!! C'est mieux si vous le faites sans insuline et glucides actifs
- Utiliser la même version d'AAPS et de NSClient

**Assurez vous de vérifier et ajuster vos paramètrages après la mise à jour vers la version 3.0 comme c'est décrit** [ici](../Installing-AndroidAPS/update3_0.md).

### Etapes de préparation

**Au moins deux jours avant la mise à jour :**

- Désactivez Dexcom Bridge dans Nightscout
- si vous utilisez G5/G6 et xDrip en tant que collecteur, vous devez mettre à jour xDrip vers une version "nocturne" plus récente que le 14 janvier 2022
- si vous utilisez G5/G6 et allez basculer vers BYODA car elle est recommandée pour tirer parti du lissage à postérioiri (vous pouvez toujours utiliser xDrip à d'autres fins, xDrip peut recevoir des données de BYODA)

### Modifications

- 100k lignes changées, 105k nouvelles lignes de code

- [Support de l'Omnipod DASH](../Configuration/OmnipodDASH.md) @AdrianLxM @avereha @bartsopers @vanelsberg

- [Support de Dana-i](../Configuration/DanaRS-Insulin-Pump.md) @MilosKozak

- [Support de la DiaconnG8](../Configuration/DiaconnG8.md)

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

- NSProfile est supprimé, seul le Profil local peut être utilisé. Le profil local peut être [synchronisé avec NS](update3_0-nightscout-profile-cannot-be-pushed). @MilosKozak.

- Procédure de [réinitialisation du mot de passe principal](update3_0-reset-master-password) en cas d'oubli @MilosKozak

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

- Veuillez voir aussi les [conseils importants pour la version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) ci-dessous.

### Modifications

- améliorations de la stabilité
- plus de réglages pour Android 8+
- amélioration des icônes
- amélioration de la montre
- Corrections NSClient
- Le conseiller Bolus fonctionne maintenant avec les versions Pumpcontrol et NSClient

## Version 2.8.1.1

Date de sortie : 12-01-2021

(conseils-importants-2-8-1-1)
### Conseils importants

- L'option **NS_UPLOAD_ONLY** a été forcée à ON pour tous les utilisateurs de la version 2.8.1.
- Si vous utilisez NSClient pour entrer les CT, les glucides ou les changements de profil, vous devez le désactiver dans AAPS mais **seulement dans le cas où votre synchronisation fonctionne bien** (càd. vous ne voyez pas de changements de données indésirables tels que la modification automatique de CT, DBT etc.).
- ATTENTION : NE PAS le faire si vous avez une autre application qui gère les traitements (comme xDrip broadcast/upload/sync...).
- NS_UPLOAD_ONLY ne peut être désactivé que si le mode ingénierie est activé.

### Changements majeurs

- RileyLink, Omnipod et la pompe MDT améliorations et corrections
- NS_UPLOAD_ONLY forcé
- correction pour SMB & appli. Dexcom
- watchface fixes
- rapport de plantage amélioré
- gradle restauré pour permettre l'installation directe des cadrans de montres
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
- [Les objectifs ont changé.](Objectives-objective-3-prove-your-knowledge) **Finissez les objectifs non terminés avant la mise à jour.**
- Le dossier github est toujours sur <https://github.com/nightscout/AndroidAPS>. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AAPS et de faire un [nouveau clone](../Installing-AndroidAPS/Building-APK.md).
- Utilisez [Android Studio 4.1.1](https://developer.android.com/studio/) ou une version plus récente pour construire l'apk.

### Nouvelles fonctionnalités majeures

- [Support de l'Omnipod Eros](../Configuration/OmnipodEros.md) @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda et merci spécial à @ps2 @itsmojo, et à toutes les autres personnes impliquées dans le développement du driver pour Omnipod ainsi que @jlucasvt de GetRileyLink.org
- [Assistant bolus](Preferences-bolus-advisor) & [Rappel repas](Screenshots-eating-reminder) @MilosKozak
- [Nouveau cadran](Watchfaces-new-watchface-as-of-AAPS-2-8) @rICTx-T1D
- Améliorations de la connexion Dana RS @MilosKozak
- Suppression de "Valeurs MGC inchangées" pour les SMB pour l'application native Dexcom
- New [Low Ressolution Skin](Preferences-skin)
- New ["Pregnant" patient type](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Nouvelle présentation tablette de NSClient @MilosKozak
- NSClient transfert des paramètres insuline, sensibilité et les paramètres d'affichage directement à partir de l'écran principal AAPS @MilosKozak
- [Filtre des préférences](../Configuration/Preferences.md) @Brian Quinion
- Nouvelles icônes de pompe @Rig22 @teleriddler @osodebailar
- New [insulin type Lyumjev](Config-Builder-lyumjev)
- Améliorations de l'assistant de configuration @MilosKozak
- Améliorations de la sécurité @dlvoy
- Améliorations diverses et correctifs @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Version 2.7.0

Date de sortie : 24-09-2020

**Make sure to check and adjust settings after updating to 2.7 as described** [here](../Installing-AndroidAPS/update2_7.md).

You need at least start [objective 11 (in later versions objective 10!)](Objectives-objective-10-automation) in order to continue using [Automation feature](../Usage/Automation.md) (all previous objectives must be completed otherwise starting Objective 11 is not possible). If for example you did not finish the exam in [objective 3](Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation). Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

### Nouvelles fonctionnalités majeures

- internal use of dependency injection, updates libraries, code rewritten to kotlin @MilosKozak @AdrianLxM
- utilisation de modules pour les pompes Dana @MilosKozak
- [nouvelle mise en page, selection de thème](../Getting-Started/Screenshots.md) @MilosKozak
- new [status lights layout](Preferences-status-lights) @MilosKozak
- [multiple graphs support](Screenshots-section-f-main-graph) @MilosKozak
- [Assistant Profil](../Configuration/profilehelper.md) @MilosKozak
- visualization of [dynamic target adjustment](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- nouvelle [mise en page des préférences](../Configuration/Preferences.md) @MilosKozak
- Mise à jour de l'algorithme SMB @Tornado-Tim
- [Low glucose suspend mode](Preferences-aps-mode) @Tornado-Tim
- [carbs required notifications](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- removed Careportal (moved to Actions) @MilosKozak
- [nouveau format chiffré des sauvegardes](../Usage/ExportImportSettings.md) @dlvoy
- [nouvelle authentication SMS TOTP](../Children/SMS-Commands.md) @dlvoy
- [new SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) commands @Lexsus
- meilleure prise en charge des petits débits de basale sur les pompes Dana @Mackwe
- petits correctifs Insight @TebbeUbben @MilosKozak
- ["Default language" option](Preferences-general) @MilosKozak
- icônes vectorielles @Philoul
- [set neutral temps for MDT pump](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- History browser improvements @MilosKozak
- removed OpenAPS MA algorithm @Tornado-Tim
- removed Oref0 sensitivity @Tornado-Tim
- [Biometric or password protection](Preferences-protection) for settings, bolus @MilosKozak
- [new automation trigger](../Usage/Automation.md) @PoweRGbg
- [Open Humans uploader](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
- New documentation @Achim

(Releasenotes-version-2-6-1-4)=
## Version 2.6.1.4

Date de sortie : 04-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Insight: Disable vibration on bolus for firmware version 3 - second attempt
- Otherwise is equal to 2.6.1.3. La mise à jour est facultative.

## Version 2.6.1.3

Date de sortie : 03-05-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Insight: Disable vibration on bolus for firmware version 3
- Otherwise is equal to 2.6.1.2. La mise à jour est facultative.

## Version 2.6.1.2

Date de sortie : 19-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Fix crashing in Insight service
- Otherwise is equal to 2.6.1.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1.1

Date de sortie : 06-04-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Resolves SMS CARBS command issue while using Combo pump
- Otherwise is equal to 2.6.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

## Version 2.6.1

Date de sortie : 21-03-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Allow to enter only `https://` in NSClient settings
- Fixed [BGI](../Getting-Started/Glossary.md) displaying bug on watches
- Fixed small UI bugs
- Fixed Insight crashes
- Fixed future carbs with Combo pump
- Fixed [LocalProfile -> NS sync](Config-Builder-upload-local-profiles-to-nightscout)
- Insight alerts improvements
- Improved detection of boluses from pump history
- Fixed NSClient connection settings (wifi, charging)
- Fixed sending of calibrations to xDrip

(Releasenotes-version-2-6-0)=
## Version 2.6.0

Date de sortie : 29-02-2020

Please use [Android Studio 3.6.1](https://developer.android.com/studio/) or newer to build the apk.

### Nouvelles fonctionnalités majeures

- Small design changes (startpage...)

- Careportal tab / menu removed - more details [here](../Usage/CPbefore26.md)

- New [Local Profile plugin](Config-Builder-local-profile)

  - Local profile can hold more than 1 profile
  - Profiles can be cloned and edited
  - Ability of upload profiles to NS
  - Old profile switches can be cloned to new profile in LocalProfile (timeshift and percentage is applied)
  - Veritical NumberPicker for targets

- SimpleProfile is removed

- [Extended bolus](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled

- MDT plugin: Fixed bug with duplicated entries

- Units are not specified in profile but it's global setting

- Added new settings to startup wizard

- Different UI and internal improvements

- [Wear complications](../Configuration/Watchfaces.md)

- New [SMS commands](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Fixed language support

- Objectives: [Allow to go back](Objectives-go-back-in-objectives), Time fetching dialog

- Automation: [allow sorting](Automation-sort-automation-rules)

- Automation: fixed bug when automation was running with disabled loop

- New status line for Combo

- GlucoseStatus improvement

- Fixed TempTarget NS sync

- New statistics activity

- Allow Extended bolus in open loop mode

- Android 10 alarm support

- Tons on new translations

## Version 2.5.1

Date de sortie : 31-10-2019

Please note the [important notes](Releasenotes-important-notes-2-5-0) and [limitations](Releasenotes-is-this-update-for-me-currently-is-not-supported) listed for [version 2.5.0](Releasenotes-version-2-5-0). \* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things). \* New versioning that will allow to do minor updates without triggering the update-notification.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Date de sortie : 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Remarques importantes

- Please use [Android Studio Version 3.5.1](https://developer.android.com/studio/) or newer to [build the apk](../Installing-AndroidAPS/Building-APK.md) or [update](../Installing-AndroidAPS/Update-to-new-version.html).
- If you are using xDrip [identify receiver](xdrip-identify-receiver) must be set.
- If you are using Dexcom G6 with the patched Dexcom app you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).
- Glimp is supported from version 4.15.57 and newer.

(Releasenotes-is-this-update-for-me-currently-is-not-supported)=
### Cette mise à jour est-elle pour moi? N'est actuellement PAS pris en charge

- Android 5 and lower
- Poctech
- 600SeriesUploader
- Patched Dexcom from 2.3 directory

### Nouvelles fonctionnalités majeures

- Internal change of targetSDK to 28 (Android 9), jetpack support
- RxJava2, Okhttp3, Retrofit support
- Old [Medtronic pumps](../Configuration/MedtronicPump.md) support (RileyLink need)
- New [Automation plugin](../Usage/Automation.md)
- Allow to [bolus only part](Preferences-advanced-settings-overview) from bolus wizard calculation
- Rendering insulin activity
- Adjusting IOB predictions by autosens result
- New support for patched Dexcom apks ([2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Signature verifier
- Allow to bypass objectives for OpenAPS users
- New [objectives](../Usage/Objectives.md) - exam, application handling (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
- Fixed bug in Dana\* drivers where false time difference was reported
- Fixed bug in [SMS communicator](../Children/SMS-Commands.md)

## Version 2.3

Date de sortie : 25-04-2019

### Nouvelles fonctionnalités majeures

- Important safety fix for Insight (really important if you use Insight!)
- Fix History-Browser
- Fix delta calculations
- Language updates
- Check for GIT and warn on gradle upgrade
- More automatic testing
- Fixing potential crash in AlarmSound Service (thanks @lee-b !)
- Fix broadcast of BG data (works independently of SMS permission now!)
- New Version-Checker

## Version 2.2.2

Date de sortie : 07-04-2019

### Nouvelles fonctionnalités majeures

- Autosens fix: deactivate TT raises/lowers target
- New translations
- Insight driver fixes
- SMS plugin fix

## Version 2.2

Date de sortie : 29-03-2019

### Nouvelles fonctionnalités majeures

- [DST fix](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Wear Update
- [SMS plugin](../Children/SMS-Commands.md) update
- Go back in objectives.
- Stop loop if phone disk is full

## Version 2.1

Date de sortie : 03-03-2019

### Nouvelles fonctionnalités majeures

- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) support (by Tebbe Ubben and JamOrHam)
- Status lights on main screen (Nico Schmitz)
- Daylight saving time helper (Roumen Georgiev)
- Fix processing profile names comming from NS (Johannes Mockenhaupt)
- Fix UI blocking (Johannes Mockenhaupt)
- Support for updated G5 app (Tebbe Ubben and Milos Kozak)
- G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
- Fixed disabling SMB from preferences (Johannes Mockenhaupt)

### Divers

- If you are using non default `smbmaxminutes` value you have to setup this value again

## Version 2.0

Date de sortie : 03-11-2018

### Nouvelles fonctionnalités majeures

- oref1/SMB support ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achieve and how to use it so it can operate smoothly.
- [\_Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) pump support
- Setup wizard: guides you through the process of setting up AAPS

(Releasenotes-settings-to-adjust-when-switching-from-ama-to-smb)=
### Paramètres à ajuster lors du passage d'AMA à SMB

- Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)

- maxIOB now includes \_all\_ IOB, not just added basal. En d'autres termes, s'il y a eu un bolus de 8 U pour un repas et maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA repasse en dessous de 7 U.

- min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement

- Note when building AAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

  - Open the Preferences window by clicking File > Settings (on Mac, Android Studio > Preferences).
  - In the left pane, click Build, Execution, Deployment > Compiler.
  - Uncheck the Configure on demand checkbox.
  - Click Apply or OK.

(Releasenotes-overview-tab)=
### Onglet Aperçu (Accueil)

- Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). Les CT utilisent des paramètres par défauts configurés dans les préférences. La nouvelle option CT Hypo est une cible temp. haute pour empêcher la boucle de corriger trop agressivement les glucides de secours.
- Treatment buttons: old treatment button still available, but hidden by default. La visibilité des boutons peut maintenant être configurée. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
- [Colored prediction lines](../Getting-Started/Screenshots-prediction-lines)
- Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
- Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Montre

- Separate build variant dropped, included in regular full build now. Pour utiliser des commandes bolus à partir de la montre, activez ce paramètre sur le téléphone
- Wizard now only asks for carbs (and percentage if enabled in watch settings). Les paramètres pris en comptes dans le calcul peuvent être configurés dans les paramètres du téléphone
- confirmations and info dialogs now work on wear 2.0 as well
- Added eCarbs menu entry

### Nouveaux plugins

- PocTech app as BG source
- Dexcom patched app as BG source
- oref1 sensitivity plugin

### Divers

- App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
- Overhaul for config builder and objectives tabs, adding descriptions
- New app icon
- Lots of improvements and bugfixes
- Nightscout-independent alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
- Option to keep screen on
- Option to show notification as Android notification
- Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
