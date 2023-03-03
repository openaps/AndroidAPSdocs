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
- Lors de l'utilisation de websockets dans le plugin NS v3, les traitements entrés par l'interface utilisateur NS (bouton plus) et d'autres applications utilisant l'API v1 ne sont pas envoyées à AAPS. Cela sera corrigé dans la prochaine version de NS. Always use the same client (v1 or v3) in AAPS and AAPSClient until NS fully switch to v3 internaly. The same is valid for AAPS and AAPSClient itself.
- Les Websockets avec le plugin v3 fonctionnent de manière similiaire au plugin v1. Sans websockets activés,  AAPS télécharge régulièrement à partir de NS, ce qui devrait réduire la consommation d'énergie parce que NS n'est pas connecté de façon permanente. D'un autre côté, cela signifie des retards dans l'échange de données.
- Si vous utilisez xdrip comme source MGC, vous devez le sélectionner à nouveau après la mise à jour en raison de changements internes
- Tidepool peut être utilisé à la place de NS pour passer le premier objectif
- Si vous envoyez à xDrip+, vous devez configurer le plugin de synchronisation xDrip. Afin de transférer les glycémies d'AAPS vers xDrip, il doit être sélectionné comme source "xDrip+ Sync Follower"
- Si vous voulez basculer vers le pilote ComboV2, Ruffy doit être désinstallé et la pompe doit être à nouveau appairée à AAPS


### Modifications

- EOPatch2 / GlucomenDay pilote pompe @jungsomyeonggithub @MilosKozak
- Pilote pompe ComboV2 (pas besoin de Ruffy) @dv1
- * Support de DanaI coréenne @MilosKozak
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
- Correctif Cadran wear
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
- Nouveau thème [Basse résolution](Preferences-skin)
- Nouveau type de patient ["Grossesse"](Open-APS-features-overview-of-hard-coded-limits) @Brian Quinion
- Nouvelle présentation tablette de NSClient @MilosKozak
- NSClient transfert des paramètres insuline, sensibilité et les paramètres d'affichage directement à partir de l'écran principal AAPS @MilosKozak
- [Filtre des préférences](../Configuration/Preferences.md) @Brian Quinion
- Nouvelles icônes de pompe @Rig22 @teleriddler @osodebailar
- Nouveau [type d'insuline Lyumjev](Config-Builder-lyumjev)
- Améliorations de l'assistant de configuration @MilosKozak
- Améliorations de la sécurité @dlvoy
- Améliorations diverses et correctifs @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Quinion

(Releasenotes-version-2-7-0)=
## Version 2.7.0

Date de sortie : 24-09-2020

**Assurez vous de vérifier et ajuster vos paramètrages après la mise à jour vers la version 2.7 comme c'est décrit ici** [ici](../Installing-AndroidAPS/update2_7.md).

Vous devez au moins démarrer l'[objectif 10 (objectif 11 dans les anciennes versions)](Objectives-objective-10-automation) afin de continuer à utiliser la [fonction d'automatisation](../Usage/Automation.md) (tous les objectifs précédents doivent être complétés, sinon le démarrage de l'objectif 10 n'est pas possible). Si par exemple vous n'avez pas encore terminé l'examen dans l'[objectif 3](Objectives-objective-3-prove-your-knowledge) , vous devrez terminer l'examen avant de pouvoir commencer l'[objectif 10](Objectives-objective-10-automation). Cela n'affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !

### Nouvelles fonctionnalités majeures

- utilisation interne de l'injection de dépendance, bibliothèques mises à jour, code réécrit en kotlin @MilosKozak @AdrianLxM
- utilisation de modules pour les pompes Dana @MilosKozak
- [nouvelle mise en page, selection de thème](../Getting-Started/Screenshots.md) @MilosKozak
- nouvelle [mise en page des voyants d'états](Preferences-status-lights) @MilosKozak
- [support de graphiques multiples](Screenshots-section-f-main-graph) @MilosKozak
- [Assistant Profil](../Configuration/profilehelper.md) @MilosKozak
- visualisation du [réglage dynamique de la cible](Screenshots-visualization-of-dynamic-target-adjustment) @Tornado-Tim
- nouvelle [mise en page des préférences](../Configuration/Preferences.md) @MilosKozak
- Mise à jour de l'algorithme SMB @Tornado-Tim
- [Mode Arrêt Glycémie Basse](Preferences-aps-mode) @Tornado-Tim
- [notifications glucides requis](Preferences-carb-required-notification) @twain47 @Tornado-Tim
- Careportal supprimé (déplacé vers Actions) @MilosKozak
- [nouveau format chiffré des sauvegardes](../Usage/ExportImportSettings.md) @dlvoy
- [nouvelle authentication SMS TOTP](../Children/SMS-Commands.md) @dlvoy
- [nouvelles commandes SMS PUMP CONNECT, DISCONNECT](SMS-Commands-commands) @Lexsus
- meilleure prise en charge des petits débits de basale sur les pompes Dana @Mackwe
- petits correctifs Insight @TebbeUbben @MilosKozak
- option ["Langue par défaut"](Preferences-general) @MilosKozak
- icônes vectorielles @Philoul
- [définir une basal temp neutre pour les pompes MDT](MedtronicPump-configuration-of-the-pump) @Tornado-Tim
- amélioration de l'Historique @MilosKozak
- suppression de l'algorithme OpenAPS MA @Tornado-Tim
- suppression de la sensibilité Oref0 @Tornado-Tim
- [protection biométrique ou par mot de passe](Preferences-protection) pour les paramètres, bolus @MilosKozak
- [nouveau déclencheur d'automatisation](../Usage/Automation.md) @PoweRGbg
- [Téléversement Open Humans](../Configuration/OpenHumans.md) @TebbeUbben @AdrianLxM
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
- Correction bug d'affichage [Impact Glycémique](../Getting-Started/Glossary.md) sur les montres
- Correction de petits bugs de l'interface utilisateur
- Correction plantages Insight
- Correction glucides futurs avec pompe Combo
- Correction [Profil Local -> NS sync](Config-Builder-upload-local-profiles-to-nightscout)
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

- Onglet/Menu Careportal supprimé - plus de détails [ici](../Usage/CPbefore26.md)

- Nouveau [Plugin Profil Local](Config-Builder-local-profile)

  - Le profil local peut contenir plusieurs profils
  - Les profils peuvent être dupliqués et modifiés
  - Possibilité de télécharger les profils vers NS
  - Les anciens changements de profil peuvent être dupliqués veres un nouveau profil local (décalage horaire et pourcentage appliqués)
  - Sélecteur pour les cibles temps

- Le Profil Simple est supprimé

- [Bolus étendu](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - la boucle fermée sera désactivée

- Plugin MDT : Correction du bug entrées dupliquées

- Les unités ne sont pas définies dans le profil mais c'est un paramètre global

- Ajout de nouveaux paramètres à l'assistant de démarrage

- Diverses améliorations internes et de l'interface

- [Complications Montre](../Configuration/Watchfaces.md)

- Nouvelles [commandes SMS](../Children/SMS-Commands.md) BOLUS-MEAL, SMS, CARBS, TARGET, HELP

- Correction de la prise en charge des langues

- Objectifs : [Possibilité de faire un retour arrière](Objectives-go-back-in-objectives), fenêtre de navigation entre objectifs

- Automatisation : [Possibilité de trier](Automation-sort-automation-rules)

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

Veuillez lire les [Remarques importantes](Releasenotes-important-notes-2-5-0) et [limitations](Releasenotes-is-this-update-for-me-currently-is-not-supported) listées pour la [version 2.5.0](Releasenotes-version-2-5-0). \* Correction d'un bug dans le statut du réseau qui entraînait des plantages fréquent (pas critique mais gaspillerait beaucoup d'énergie). \* Nouvelle gestion des versions qui permettra de faire des mises à jour mineures sans déclencher la notification de mise à jour.

(Releasenotes-version-2-5-0)=
## Version 2.5.0

Date de sortie : 26-10-2019

(Releasenotes-important-notes-2-5-0)=

### Remarques importantes

- Veuillez utiliser [Android Studio Version 3.5.1](https://developer.android.com/studio/) ou plus récent pour [construire l'apk](../Installing-AndroidAPS/Building-APK.md) ou le [mettre à jour](../Installing-AndroidAPS/Update-to-new-version.html).
- Si vous utilisez xDrip [identify receiver](xdrip-identify-receiver) doit être défini.
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
- Support des anciennes [pompes Medtronic](../Configuration/MedtronicPump.md) (besoin de RileyLink)
- Nouveau [plugin d'Automatisation](../Usage/Automation.md)
- Autoriser [uniquement la partie bolus](Preferences-advanced-settings-overview) à partir de l'assistant bolus (calculatrice)
- Affichage de l'activité de l'insuline
- Ajustement des prévisions de l'IA par le résultat autosens
- Nouveau support pour les apk des applications Dexcom patchées ([dossier 2.4](https://github.com/dexcomapp/dexcomapp/tree/master/2.4))
- Vérificateur de signature
- Autorisation de contourner les objectifs pour les utilisateurs d'OpenAPS
- Nouveau [objectifs](../Usage/Objectives.md) - examen de connaissance de l'application (Si vous avez au minimum démarré l'objectif "Démarrer une boucle ouverte" dans les versions précédentes, l'examen est optionnel.)
- Correction d'un bug dans les pilotes Dana\*, où une différence de temps erronée a été signalée
- Correction d'un bug dans le [communicateur SMS](../Children/SMS-Commands.md)

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

- [Correction Changement d'heure](Timezone-traveling-time-adjustment-daylight-savings-time-dst)
- Correctif Wear
- Mise à jour du plugin [SMS](../Children/SMS-Commands.md)
- Retour arrière dans les Objectifs.
- Arrêt de la boucle si le téléphone est plein

## Version 2.1

Date de sortie : 03-03-2019

### Nouvelles fonctionnalités majeures

- Support de l'[Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) (par Tebbe Ubben et JamOrHam)
- Voyants d'état sur l'écran principal (Nico Schmitz)
- Aide sur les changements d'heure (Roumen Georgiev)
- Correctif des nom de profil venant de NS (Johannes Mockenhaupt)
- Correctifs Interface utilisateur (Johannes Mockenhaupt)
- Support de la mise à jour G5 (Tebbe Ubben et Milos Kozak)
- Support des sources de GLY G6, Poctech, Tomato, Eversense (Tebbe Ubben et Milos Kozak)
- Correctifs désactivation des SMB à partir des préférences (Johannes Mockenhaupt)

### Divers

- Si vous n'utilisez pas la valeur par défaut de `smbmaxminutes` vous devez configurer à nouveau cette valeur

## Version 2.0

Date de sortie : 03-11-2018

### Nouvelles fonctionnalités majeures

- Support de oref1/SMB ([documentation oref1](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)) Assurez-vous de bien lire la documentation pour savoir ce que vous pouvez attendre des SMB, comment il fonctionne, ce qu'il peut faire et comment l'utiliser pour qu'il marche en douceur.
- Support de la pompe [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
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
- Boutons de traitement : l'ancien bouton de traitement est encore disponible, mais masqué par défaut. La visibilité des boutons peut maintenant être configurée. Ajout de deux nouveaux boutons insuline et glucides (qui inclut [eGluc/glucides étendus](../Usage/Extended-Carbs.md))
- [Lignes de prédiction colorées](../Getting-Started/Screenshots-prediction-lines)
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

### Divers

- L'application utilise maintenant des tiroirs pour afficher tous les plugins; les plugins sélectionnés comme visibles dans le générateur de configuration sont affichés en tant qu'onglet en haut de l'écran (favoris)
- Remplacement des onglets de la Configuration et des objectifs, ajout de descriptions
- Nouvelle icône d'application
- Beaucoup d'améliorations et de correctifs
- Alerte indépendante de Nightscout si la pompe est injoignable pendant une durée longue (par ex. si la pile de la pompe est à plat) et pour des lectures de GLY manquées (voir *Alertes locales* dans les paramètres)
- Option pour garder l'écran allumé
- Option pour afficher les notifications AAPS comme des notifications Android
- Filtrage avancé (permettant de toujours activer SMB et pendant 6h après les repas) pris en charge avec l'application Dexcom patchée ou xDrip+ avec le mode natif G5 en tant que source GLY.
