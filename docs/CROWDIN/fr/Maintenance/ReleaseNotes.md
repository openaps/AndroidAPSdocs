
# Notes de version

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

Veuillez suivre les instructions du [manuel de mise à jour](UpdateToNewVersion.md) pour passer à une nouvelle version. La section de dépannage de la page du manuel de mise à jour traite aussi les difficultés les plus fréquentes lors de la mise à jour d'**AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
Voir [Ce qui a changé dans AAPS v4](V4Changes.md) pour les changements de comportement notables — fonctionnalités déplacées, renommées ou supprimées.
```

Vous recevrez une notification comme celle-ci quand une nouvelle mise à jour est disponible :

![Infos de mise à jour](../images/AAPS_LoopDisable90days.png)

Si vous ne faites pas la mise à jour avant la date d'expiration, **AAPS** passera en boucle ouverte.

Voir [Fin de vie](EndOfLife.md) pour les dates de fin des versions d'AAPS.

**N'ignorez pas la notification.** Les nouvelles versions d'**AAPS** apportent des corrections de sécurité importantes. C'est pourquoi chaque utilisateur d'**AAPS** doit passer à la dernière version dès que possible. C'est un effort pour améliorer la sécurité de chaque utilisateur d'**AAPS** et de la communauté DIY. Merci de votre compréhension.

(maintenance-android-version-aaps-version)=

## Version d'Android et version AAPS

Si votre smartphone utilise une version d'Android plus ancienne qu'Android 12, vous ne pourrez pas utiliser AAPS v3.4 et plus, car il nécessite au moins Android 12.

Afin de permettre aux utilisateurs ayant une ancienne version d'Android d'utiliser une ancienne version de AAPS de nouvelles versions ont été poussées qui ne changent que la vérification de version. Aucune autre amélioration n'est incluse.

Trouvez votre version d'Android dans le tableau ci-dessous et utilisez la version d'**AAPS** correspondante. Le code est téléchargé depuis <https://github.com/nightscout/AndroidAPS> avec la branche indiquée.

| Votre version d'Android | Version d'AAPS à utiliser | Branche à télécharger                                            |
| ----------------------- | ------------------------- | ---------------------------------------------------------------- |
| Android 12 et supérieur | Dernière version          | [master](https://github.com/nightscout/AndroidAPS) (par défaut)  |
| Android 11              | **3.3.2.1**               | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10           | **3.2.0.4**               | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8               | **2.8.2.1**               | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7               | **2.6.2**                 | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## Version WearOS

- AAPS nécessite WearOS 3.0, 3.2 ou 3.5 (Android 11, niveau d'API 30) ou plus récent. Les montres WearOS 2 ne sont pas prises en charge.

```{tip}
WearOS 5, niveau d'API 34 (Android 14) a des [limites](#BuildingAapsWearOs-WearOS5).
```

(latestrelease)=

(version400)=

## Version 4.0.0

Date de sortie : 31-10-2026

### Nouvelles fonctionnalités
- Nouvelle interface utilisateur : application du téléphone reconstruite en Jetpack Compose @MilosKozak
- [Recherche globale](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- Migration vers Kotlin Multiplatform, client pour Windows, Mac, Linux (ordinateur) et iOS @MilosKozak
- [Scénarios](../DailyLifeWithAaps/Scenes.md) : enregistrez un ensemble d'actions et exécutez-les ensemble @MilosKozak
- [Contrôle maître ↔ client](../RemoteFeatures/ClientMasterControl.md) : envoyez des commandes d'un téléphone client vers le maître @MilosKozak
  - [Rôles des clients](#client-master-control-roles) : Lecture seule, Repas, Aidant ou Administrateur pour chaque client @MilosKozak
  - [Mode renforcé](#client-master-control-hardened-mode) : avec le contrôle par le client activé, le maître n'accepte les changements que des clients associés @MilosKozak
  - Appairage avec un QR code qui configure aussi Nightscout sur le client, ou avec un code PIN ; le secret d'appairage est remplacé juste après l'appairage @MilosKozak
  - [Propre jeton Nightscout](#client-master-control-own-token) pour chaque client, avec seulement les droits dont un client a besoin @MilosKozak
- Prise en charge de la [concentration de l'insuline](../AdvancedOptions/InsulinConcentration.md) (U200, U500) dans les pompes, l'assistant et les profils @Philoul @MilosKozak
- Gestion de l'insuline : catalogue d'insulines, surnoms, choix dans le profil et l'assistant @Philoul
- Plugin Étalonnage @MilosKozak
- [Lissage](../CompatibleCgms/SmoothingBloodGlucoseData.md) : Filtre de Kalman Unscented (UKF) @piecycle
- [Rotation du site](#Aapsscreens-site-rotation) : suivre et alterner les sites de perfusion @Philoul @MilosKozak
- Refonte d'[Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nouveaux [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accessibilité : l'application du téléphone fonctionne avec un lecteur d'écran - contrôles nommés, état lu à voix haute, descriptions des graphiques et titres pour parcourir rapidement @MilosKozak
- [Import des paramètres](../Maintenance/ExportImportSettings.md) : possibilité de garder les paramètres de la pompe @MilosKozak
- La notification permanente utilise les mises à jour en direct (live updates) d'Android, avec la prise en charge de la Now bar de Samsung et le delta @premnirmal
- Graphique Glycémie : [appui long](#aaps-screens-graph-press-and-hold) pour voir les valeurs à une mesure, sur chaque graphique de la vue d'ensemble @t1dude @olorinmaia
- Améliorations des performances @MilosKozak
- eGlucides automatiques dans l'Assistant Bolus @MilosKozak

### Nouveaux appareils
- **CareLevo** : nouveau [pilote de pompe](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2** : prise en charge @MilosKozak
- **Instara** : nouvelle source MGC @leohunt

### Améliorations des pilotes de pompe
- Écrans de pompe reconstruits pour Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn et Equil @MilosKozak
- **Omnipod Dash** : codes Ref comme sur le PDM et descriptions des erreurs lisibles, compensation de la dérive toujours active, meilleur signalement du type de bolus @nl-ruud
- **Omnipod** : date de fin ferme pour Dash et Eros @mcnelson
- **DanaR, RS** : émulateur de pompe pour les tests @MilosKozak
- **Equil** : émulateur de pompe pour les tests @MilosKozak
- Beaucoup de corrections pour les pompes et la boucle @MilosKozak et d'autres

### Wear OS
- [Application montre](../WearOS/WearOsSmartwatch.md) reconstruite en Compose, nouvelles tuiles et complications, installation automatique du cadran (Watch Face Push) sur Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponible pour WearOS 6.0 (GW7, GW8, GW9...) avec un cadran WFF dédié @Philoul @olorinmaia
- CustomWatchface peut maintenant contenir 5 emplacements de complication personnalisables (nouvelle fonction disponible seulement pour les anciennes montres) @Philoul
- Nouveau [cadran WFF basé sur les complications AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Corrections dans le résultat de l'Assistant Bolus et de l'Assistant Rapide @olorinmaia
- Nouvelles activités Graphique Glycémie et Mode dans le menu principal @olorinmaia
- Assistant Bolus : page [type de repas](#WearOsSmartwatch-wizard-meal-type) qui répartit les glucides comme l'assistant du téléphone, et [heure des glucides](#WearOsSmartwatch-wizard-carb-time) avec le rappel *heure de manger* sur la montre @olorinmaia
- [Alarmes du téléphone sur la montre](#WearOsSmartwatch-phone-alarms) : la montre affiche l'alarme et propose Silence et Muet 5 min @olorinmaia

### Compilation
- Workflows CI pour les compilations de tags/branches, correspondance des versions JDK @Angus-repo

### Contributeurs
@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Liste complète des changements : <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

(version3426)=

## Version 3.4.2.6

- Equil : stabilité améliorée @MilosKozak

(version3425)=

## Version 3.4.2.5

- Equil : correction d'une situation de concurrence (race condition) @MilosKozak

(version3424)=

## Version 3.4.2.4

- Corrections Equil @MilosKozak
- Correction de la synchronisation du profil NS @MilosKozak

(version3423)=

## Version 3.4.2.3
- Dash : résolution de la dérive @nl-ruud
- NSClientV3 : correction du trou dans les données après une reconnexion @MilosKozak
- Automatisation : correction de la désérialisation @MilosKozak
- Equil : correction du rapport de pile @MilosKozak
- Workflow de nettoyage @vanelsberg
- Equil : meilleure récupération après erreur @MilosKozak
- DanaRS : correction de la communication avec les pompes domestiques @MilosKozak
- Insight : correction de la synchronisation des DBT @MilosKozak
- Dash : correction d'un bug d'activation @nl-ruud

(version3422)=

## Version 3.4.2.2

- Correction de problèmes avec Equil et Medtronic
- Sécurité de Medtrum améliorée

(version3421)=

## Version 3.4.2.1

- Equil : correction de l'appairage et du dialogue de progression @MilosKozak

(version3420)=

## Version 3.4.2.0

Date de sortie : 04-02-2026

- Equil : correction de la résistance pour les différents modèles @hhfcvmars
- Tidepool : correction de la session @MilosKozak
- Medtrum : correction du parcours d'activation en évitant un double remplissage @MilosKozak
- GA : correction du calcul des GA (couvre un cas limite dangereux) @MilosKozak

(version3410)=

## Version 3.4.1.0

Date de sortie : 03-08-2026

### Cœur
- Correction de la gestion de l'heure d'été @MilosKozak
- Amélioration et unification de la détection de la cible normale (mgdl > 99, mmol > 5,5) @MilosKozak
- SMS : RESTART protégé par un code PIN @MilosKozak
- Maintenance : avertissement si un mauvais répertoire est choisi @MilosKozak

### Améliorations des pilotes de pompe
- **Omnipod Dash** : code du pilote BLE déplacé dans le module omnipod/common @jwoglom
- **Omnipod Dash** : tentative de correction de l'état de connexion @MilosKozak
- **Omnipod** : validation du profil avant l'activation du pod pour ne pas gaspiller de pods (#4534) @brianV
- **Medtronic** : correction du même type d'encodage affiché dans le dialogue des paramètres @mifi100
- **Medtronic** : préparation de classes communes pour les pompes (préparation Tandem) @andy-rozman
- **RileyLink** : correction de l'encodage (#4519) @mifi100
- **Equil** : compatibilité élargie avec d'autres pompes à insuline selon le préfixe du numéro de série (#4510) @hhfcvmars
- **Equil** : ajout de logs @MilosKozak
- **Diaconn G8** : correction d'un bug de synchronisation des logs et prise en charge du firmware 3.58+ @miyeongkim
- **Diaconn** : correction de la conversion de l'unité de durée des DBT @miyeongkim
- **Diaconn** : utilisation de commandQueue.loadEvents() pour la synchronisation de l'historique @miyeongkim
- Délivrance d'insuline autorisée quand la boucle est suspendue mais que la pompe est disponible @cschuijt

### Cloud / Sauvegarde
- Ajout de la sauvegarde vers Google Drive @Angus-repo
- Notification de l'interface quand l'état d'erreur du stockage cloud change @Angus-repo
- Stockage local et cloud possibles en même temps @Angus-repo

### Tidepool
- Amélioration de la migration Tidepool OAuth2 @MilosKozak
- Correction de l'état Tidepool BLOCKED sans fin, correction du refus des SSID vides @michaeln-synapse

### NSClient
- NSCv3 : meilleure reconnexion @MilosKozak

### Wear OS
- Affichage de la nouvelle IA dans le Résultat de l'Assistant si l'IA est utilisée dans les calculs @olorinmaia
- Correction de BolusProgress sur la montre avec la quantité totale @Philoul

### Interface
- Amélioration de l'icône ic_none de la Rotation du site @Philoul
- Correction du paramètre de gestion de la pompe de la rotation du site qui n'était pas utilisé @samfundev

### Contributeurs
@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

(version3400)=

## Version 3.4.0.0

Date de sortie : 31-12-2025

### Avant la mise à jour :
* Cette version nécessite Google Android 12.0 ou plus récent. Vérifiez la version de votre téléphone avant d'essayer la mise à jour.
* Mettez à jour vers la dernière version d'Android Studio, ou mieux, utilisez la compilation dans le navigateur.

### Nouvelles fonctionnalités
* Mode @MilosKozak
  * Affichage de l'[historique de l'état de la boucle](#AapsScreens-running-mode) dans les onglets des traitements
  * Affichage et modification de l'[état de la boucle depuis AAPSClient](#RemoteControl_aapsclient).<br>NB : nécessite le paramètre [NSClient > Synchronisation > Recevoir les événements de Mode](#Preferences-nsclient-synchronization)
* [Nouveaux MGC](../Getting-Started/CompatiblesCgms.md) : Glunovo, Intelligo, Sinocare
* Prise en charge de la [Rotation du site](#Aapsscreens-site-rotation) @Philoul
* Nouvelle [action d'automatisation](#automations-automation-action) : activer ou désactiver les SMB @MilosKozak
* Le MGC Syai est une [source fiable](#GettingStarted-TrustedBGSource) et prend en charge le filtrage avancé @MilosKozak

### Améliorations Wear OS
* consommation de batterie fortement réduite @MilosKozak
* améliorations et corrections de l'interface @olorinmaia
* code presque entièrement réécrit pour suivre le niveau actuel des bibliothèques (avant : WearOS 2) @MilosKozak
* 2 nouvelles complications pour des données étendues @Philoul
* Passage à un fournisseur de complications moderne avec DataStore @MilosKozak

### Corrections de fuites de mémoire
* Correction de fuites de mémoire dans le code @MilosKozak
* Ajout du signalement des fuites de mémoire LeakCanary dans Firebase Crashlytics @MilosKozak

### Améliorations des pilotes de pompe
* **DanaI** : correction des problèmes de déconnexion @MilosKozak
* **RileyLink** : communication plus rapide grâce à des délais réduits @mifi100
* **Medtrum** : ajout de l'affichage de l'heure d'activation et de l'âge du patch @vanelsberg, correction des majuscules du mot de passe @MilosKozak
* **Combo** : correction de situations de concurrence (race conditions) dans les tests @MilosKozak @dv1
* **Equil** : connexion optimisée, consommation de batterie réduite @MilosKozak

### Synchronisation Nightscout
* Meilleure déduplication en cas d'échec de NS @MilosKozak

### Améliorations UI/UX
* diverses améliorations @MilosKozak @Philoul @olorinmaia

### Automatisation
* Nouvelle action de contrôle des SMB - activer/désactiver les SMB par une automatisation @MilosKozak

### Tests
* Ajout de tests unitaires complets pour les pompes Equil, Eopatch, Dana et Medtronic @MilosKozak
* Meilleure stabilité et couverture des tests dans plusieurs modules @MilosKozak

### Tidepool
* Tidepool OAUTH2 (prise en charge de la nouvelle authentification Tidepool) @MilosKozak

(version3321)=

## Version 3.3.2.1

Date de sortie : 13-08-2025

- Correction de la connexion Bluetooth Omnipod sur Android 16
- Processus CI (compilation dans le navigateur)
- Correction de la conversion mmol-mgdl
- Correction d'un mauvais choix de l'heure dans les dialogues dans certains fuseaux horaires
- Correction de la lecture des clés en mode simple
- Correction des prédictions manquantes sur la montre
- Configuration améliorée
- Synchronisation complète NSCv3 améliorée

(version3300)=

## Version 3.3.2.0

Date de sortie : 27-03-2025

### Comment faire la mise à jour

* La [version d'Android Studio appelée "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou plus récente est nécessaire pour compiler cette version. Si vous avez déjà compilé une version 3.3.x, vous devez de nouveau mettre à jour Android Studio.

(version-enforcement)=

### À partir de cette version, les notifications et l'obligation de mise à jour ont été simplifiées et assouplies, et fonctionnent ainsi :
*  Pas d'expiration quand l'appareil est hors ligne (sans connexion à internet). Cela signifie qu'il n'y a plus de périodes de grâce de 60 et 90 jours.
*  Après l'expiration, le mode AGB est imposé
*  Vous recevrez des avertissements/notifications moins souvent :
   - 28 jours restants ou plus : tous les 7 jours
   - 27–14 jours restants : tous les 3 jours
   - ensuite une fois par jour
   - La notification est créée l'après-midi pour ne pas vous déranger la nuit
* Il n'y a que 2 types de notification
   - Nouvelle version disponible (sans effet sur AAPS)
   - L'application expire à une date future (toujours sans effet sur AAPS) / a expiré (AAPS passe en mode AGB)

### Nouveautés

* Commande SMS RESTART @MilosKozak
* Paramètres du changement de profil sur la montre @olorinmaia
* Mode sombre du cadran AAPS V2 @olorinmaia
* Améliorations de l'échange de données G7 @olorinmaia
* Configuration du widget @MilosKozak
* Améliorations de l'interface des boutons radio @olorinmaia
* Automatisation : choix de la position sur la carte @MilosKozak
* Version visible sur les écrans principaux @MilosKozak
* La compilation avec un système git existant est obligatoire (pas de téléchargement zip)
* Affichage de la version sur l'écran principal @MilosKozak
* Améliorations de l'envoi vers Tidepool @ConstantinMatheis

### Corrections de bugs

* Correction de la dissociation (unbonding) Dash @Andreas
* Corrections Garmin @robertbuessow @suside
* Correction de l'affichage de l'IA dans les dialogues @olorinmaia
* Améliorations de l'orthographe et de la validation des Objectifs @MilosKozak
* Correction de l'affichage des DBT émulés @MilosKozak
* Correction d'un contournement de la sécurité @tdrkDev

## Version 3.3.1.3

Date de sortie : 21-01-2025

### Corrections de bugs

* Dash : l'association (bonding) est optionnelle (désactivée par défaut) @MilosKozak
* Equil : correction des bolus de 10 U et plus, améliorations des alarmes @EquilHack
* Garmin : améliorations de la montre @swissalpine
* Améliorations de la montre @olorinmaia
* Contrôle de l'état de la boucle depuis la montre @tdrkDev
* Améliorations de la stabilité

*  **Une nouvelle [configuration de l'Authenticator](#sms-commands-authenticator-setup) peut être nécessaire.**

## Version 3.3.1.2

Date de sortie : 15-01-2025

### Comment faire la mise à jour

* La [version d'Android Studio appelée "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou plus récente est nécessaire pour compiler cette version. **Ce n'est pas la même chose que "Ladybug" tout court.** Si vous avez déjà compilé une version 3.3.x, vous devez de nouveau mettre à jour Android Studio.

### Corrections de bugs

* Dash : utilisation de l'association (bonding) sur Android 15+
* Bouton Dexcom rétabli sur la Vue d'ensemble
* Equil : possibilité de supprimer une pompe qui ne fonctionne pas
* Avertissement quand le facteur d'ajustement DynISF est à zéro
* NSCv3 : correction de la communication websocket sur les téléphones dont l'heure est légèrement différente
* Commandes SMS : correction de OneTimePassword. **Une nouvelle [configuration de l'Authenticator](#sms-commands-authenticator-setup) peut être nécessaire.**
* Correction d'un problème où certaines préférences ne pouvaient plus être modifiées.
* Correction de la réinitialisation du mot de passe maître avec la pompe virtuelle.
* Correction de l'import des gros fichiers de sauvegarde des paramètres.

## Version 3.3.1.0

Date de sortie : 06-01-2025

### Changements de l'interface

* [Ajout de couleurs pour distinguer AAPSClient et AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* Amélioration de la mise en page et des icônes des actions utilisateur

### Autres fonctionnalités

* Nouveau déclencheur d'automatisation : [nombre de pas](#screen-heart-rate-steps) @Roman Rihter
* Possibilité de tout recevoir lors de la synchronisation complète NSCv3 (y compris des données qui n'étaient pas synchronisées avant, comme les DBT) @MilosKozak
* NSClient v3 : les Notifications fonctionnent (_c.-à-d._ de AAPSClient vers AAPS) @MilosKozak

### Changements techniques et corrections de bugs

* Correction d'un plantage Insight @philoul
* Correction de la création de trop nombreuses entrées deviceStatus dans Nightscout @MilosKozak
* Correction de l'absorption des glucides @MilosKozak
* Correction de la couleur des boutons radio et des cases à cocher @MilosKozak
* Correction d'un bug dans la migration du pourcentage DynISF @MilosKozak
* Correction d'une notification DynISF mal placée @MilosKozak
* Correction d'un bug dans les cadrans de montre @philoul

## Version 3.3.0.0

Date de sortie : 29-12-2024

### Principales fonctionnalités

* La fonction **[SI dynamique](../DailyLifeWithAaps/DynamicISF.md)** n'est plus un plugin séparé, mais est maintenant une option du plugin [OpenAPS SMB](#Config-Builder-aps), avec quelques changements dans son comportement :
  * Le **Changement de profil** et le **Pourcentage de profil** sont maintenant pris en compte par le **SI dynamique** pour la force de la sensibilité dynamique
  * Le **SI** moyen des dernières 24 h est calculé et cette valeur est utilisée pour l'assistant bolus et le calcul des **GA**. La valeur **SI du profil** n'est plus du tout utilisée (sauf en solution de repli quand les données d'historique ne sont pas disponibles)
  * La page de documentation du SI dynamique a été réécrite. Veuillez lire la section importante [Points à prendre en compte lors de l'activation du SI dynamique](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [Activer « SMB toujours » et « SMB après glucides »](#Open-APS-features-enable-smb-always) pour les utilisateurs de FreeStyle Libre 2 et Libre 3
  * Remarque : nécessite la dernière version de xDrip+ ou de Juggluco.
* Nouveaux déclencheurs d'**Automatisation**
* Exports automatiques des paramètres

### Comment faire la mise à jour

* Avant la mise à jour :
  * **<span style="color:red">Cette version nécessite Google Android 11.0 ou plus récent</span>**. Vérifiez la version de votre téléphone avant d'essayer la mise à jour.
  * Si vous utilisez l'« ancien » pilote Combo avec l'appareil ruffy, passez au [pilote Combo natif](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) avant la mise à jour
  * Vous perdrez vos [graphiques supplémentaires](#AapsScreens-section-g-additional-graphs) de l'écran d'accueil pendant la mise à jour : notez à la main votre configuration actuelle si besoin, pour pouvoir les recréer après la mise à jour.
  * Les [problèmes de connexion Bluetooth que certaines personnes rencontrent sous Android 15](../Getting-Started/Phones.md) ne sont **PAS** résolus par cette version (c'est un problème d'Android, pas d'**AAPS**). Une correction est disponible dans la 3.3.1.2.
  * Le bouton BYODA de l'écran d'accueil n'est plus disponible à cause de limites d'Android. C'est corrigé dans la 3.3.1.2.
* Instructions de mise à jour : suivez le guide [Mise à jour vers une nouvelle version ou une branche](../Maintenance/UpdateToNewVersion.md).
  * La [version d'Android Studio appelée "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou plus récente est nécessaire pour compiler cette version. Si vous avez déjà une ancienne version d'Android Studio installée, vous devrez peut-être <span style="color:red">régler la version JVM sur 21</span>. Voir [Dépannage d'Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * Conseil - si vous ne voulez pas perdre votre historique **AAPS**, faites TOUJOURS une MISE À JOUR et NON une DÉSINSTALLATION/INSTALLATION. Par précaution, sauvegardez vos paramètres **AAPS** actuels et l'ancien APK pour pouvoir revenir à l'ancienne version en cas de problème.
* Après la mise à jour :
  * Réglez le nouveau [paramètre « Répertoire AAPS »](#preferences-maintenance-logdirectory), dans l'onglet Maintenance.

### Changements détaillés

#### MGC et pompes

* [Activer « SMB toujours » et « SMB après glucides »](#Open-APS-features-enable-smb-always) pour les utilisateurs de FreeStyle Libre 2 et Libre 3 @MilosKozak
* Améliorations du [pilote Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * Améliorations de la communication, avec un nouveau paramètre pour contourner des problèmes sur certains smartphones
  * Affichage du niveau du réservoir au début de l'activation
  * Correction d'un bug où l'activation revient au début et l'utilisateur ne peut pas terminer l'activation
  * Retour sur l'état de la synchronisation et autres clarifications
* Nouvelle pompe prise en charge : [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* Nouveaux MGC pris en charge : [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer et [Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* Pilote Insight réécrit en kotlin @Philoul
* Suppression de l'ancien pilote Combo qui dépendait de ruffy

#### Changements de l'interface

* [Mode simple](#preferences-simple-mode) activé par défaut sur une nouvelle installation @MilosKozak
* Nouvelles options de l'[Assistant Rapide](#Preferences-quick-wizard) @radicalb
  * L'Assistant Rapide utilise maintenant la même logique de calcul et d'affichage du bolus que la calculatrice. Vous pouvez maintenant utiliser le champ « heure des glucides » de l'Assistant Rapide pour faire un pré-bolus.
* Nouveau [menu d'échelle du graphique](#aaps-screens-main-graph) ; améliorations de l'interface du [menu des graphiques supplémentaires](#AapsScreens-activate-optional-information) @Philoul
* [Amélioration de la mise en page de Configuration](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * Les sections sont maintenant repliées par défaut. Utilisez la flèche pour les déplier.
* Sensibilité variable visible dans AAPSClient
* Améliorations de l'interface de l'Assistant Bolus @kenzo44
* Correction de l'affichage du texte dans les onglets des pompes avec le thème clair @jbr77rr

#### Autres fonctionnalités

* [Exports automatiques des paramètres](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* Nouveau [déclencheur d'Automatisation](#automations-automation-triggers) @vanelsberg
  * Activation du pod (pompe patch uniquement)
* Nouveaux [déclencheurs d'Automatisation](#automations-automation-triggers) @jbr77rr
  * Âge canule, Âge de l'insuline, Âge de la pile, Âge capteur, Niveau du réservoir, Niveau de la pile pompe
* Saisie de glucides négatifs autorisée @MilosKozak
* Nouveau paramètre [« Répertoire AAPS »](#preferences-maintenance-settings) pour choisir un répertoire de stockage différent de celui par défaut.
* Possibilité d'[enregistrer de l'insuline quand la pompe est suspendue](#aaps-screens-buttons-insulin) @jbr77rr
* [Objectif 2](#objectives-objective2) mis à jour @MilosKozak
  * Vérifier que le mot de passe maître est défini et connu
* Glucides aléatoires en mode test @MilosKozak
* Correction d'un bug dans le calcul de la DTQ @MilosKozak
* Commandes SMS : possibilité de [**ne pas** envoyer de SMS pour un changement de profil](#sms-commands-too-many-messages) venant de NS @MilosKozak

#### Montres connectées

* améliorations de la montre et des cadrans @Philoul @MilosKozak @olorinmaia
* Tuiles de montre à partir des actions d'Automatisation @Philoul
* Cadrans combinés d'AAPS, AAPSClient et AAPSClient2 pour suivre plusieurs patients @Philoul @MilosKozak
* EXTRA : show\_user\_actions\_on\_watch\_only @MilosKozak

#### Changements techniques

* [changement de l'emplacement des fichiers log](#Accessing-logfiles-accessing-logfiles)
* nouvelle structure des modules internes @MilosKozak
* couche de persistance séparée du code principal @MilosKozak
* fichiers de compilation réécrits en kts @MilosKozak
* algorithmes réécrits en kotlin pour de meilleures performances @MilosKozak
* beaucoup de nouveaux tests unitaires @MilosKozak et d'autres
* plus de code converti en kotlin @MilosKozak
* nouvelle gestion des préférences, xml \-\> kotlin @MilosKozak
* nouvelle configuration CI, CI exécutée sur nos propres serveurs @MilosKozak
* bibliothèques mises à jour à la dernière version, toml @MilosKozak
* migration vers kotlin 2.0, java 21 @MilosKozak

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Date de sortie : 27-02-2024

Cette version est la dernière qui prend en charge Android 10. Si vous ne pouvez pas passer à Android 11, [mettez à jour AAPS vers la 3.2.0.4](#update-aaps-3204).

### Modifications

- Prise en charge du G7 par xDrip
- Corrections Medtrum
- Correction de l'icône Automatisation
- Correction de la validation de l'objectif 1

(version3200)=

## Version 3.2.0.0 dédiée à @Philoul

Date de sortie : 23-10-2023

### Conseils importants

- NS 15 est requis
- Lors de l'utilisation de websockets dans le plugin NS v3, les traitements saisis par l'interface NS (bouton plus) et par d'autres applications qui utilisent l'API v1 ne sont pas envoyés à AAPS. Cela sera corrigé dans la prochaine version de NS. Utilisez toujours le même client (v1 ou v3) dans AAPS et AAPSClient, jusqu'à ce que NS passe entièrement à v3 en interne. Il en va de même pour AAPS et AAPSClient.
- Les websockets du plugin v3 fonctionnent de façon semblable au plugin v1. Sans websockets activés,  AAPS télécharge régulièrement à partir de NS, ce qui devrait réduire la consommation d'énergie parce que NS n'est pas connecté de façon permanente. En revanche, cela signifie des délais dans l'échange des données. Veuillez lire [ici](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) les remarques importantes de l'équipe de développement avant de l'utiliser !
- Si vous utilisez xdrip comme source MGC, vous devez le sélectionner à nouveau après la mise à jour en raison de changements internes
- Tidepool peut être utilisé à la place de NS pour passer le premier objectif
- Si vous envoyez à xDrip+, vous devez configurer le plugin de synchronisation xDrip. Pour recevoir les glycémies d'AAPS dans xDrip, « xDrip+ Sync Follower » doit être choisi comme source
- Si vous voulez basculer vers le pilote ComboV2, Ruffy doit être désinstallé et la pompe doit être à nouveau appairée à AAPS
- Pour utiliser le plugin DynISF, vous devez commencer l'Objectif 11 (tous les objectifs précédents doivent être terminés pour pouvoir commencer le 11)


### Modifications

- EOPatch2 / GlucomenDay pilote pompe @jungsomyeonggithub @MilosKozak
- Pilote pompe ComboV2 (pas besoin de Ruffy) @dv1
- Pilote Medtrum Nano @jbr7rr
- Support de la DanaI coréenne @MilosKozak
- Support du MGC Glunovo @christinadamianou
- Support G7 @MilosKozak @rICTx-T1D @khskekec
- Plugin NSClient v3 @MilosKozak
- Support Tidepool @MilosKozak
- Plugin Lissage @MilosKozak, @justmara, Lissage Exponentiel @nichi (Tsunami), Lissage moyen @jbr7rr
- Plugin DynamicISF @Chris Wilson, @tim2000s
- Cadran Garmin et support de la fréquence cardiaque @buessow
- Nouveau logo @thiagomsoares
- Nouveau cadran de montre @Philoul
- Correction de tonnes de problèmes de la version 3.1
- Possibilité d'ajouter des notes à plus d'endroits @Sergey Zorchenko
- Corrections de l'interface @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- Nouvelles commandes SMS LOOP LGS/CLOSED @pzadroga
- Traductions wear @Andries-Smit
- Communication xdrip déplacée dans un module séparé @MilosKozak
- Changements internes : mise à jour des versions de libs, migration rx3, nouvelle structure de modules @MilosKozak
- Corrections dans le Pilote Diaconn @miyeongkim
- plus d'options de maintenance de la base de données @MilosKozak
- AAPSClient transmet les informations si le téléphone principal est branché @MilosKozak
- Changement dans l'Assistant Bolus. Si la MGC n'est pas disponible, le pourcentage est ignoré (100% est utilisé)
- migration vers le système de compilation kts @MilosKozak
- meilleure intégration CI @MilosKozak @buessow
- nettoyage des tests @ryanhaining @MilosKozak
- plus de 110 000 nouvelles lignes de code, 240 000 lignes modifiées, 6884 fichiers modifiés

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)=
### Remarques importantes sur l'utilisation de l'API v3 ou v1 de Nightscout avec AAPS

v1 est l'ancien protocole utilisé pour échanger des données entre le site web NS et le serveur NS. Il a beaucoup de limites
- v1 n'envoie que 2 jours de données
- v1 envoie toutes les données des 2 jours à chaque reconnexion
- l'utilisation des websockets est obligatoire = connexion permanente, plus de consommation de batterie
- lors de déconnexions fréquentes, la connexion à NS est mise en pause pendant 15 minutes pour éviter une grande consommation de données

v3 est le nouveau protocole. Plus sûr et plus efficace
- avec les jetons, vous pouvez mieux définir les droits d'accès
- le protocole est plus efficace des deux côtés (AAPS et NS)
- Il peut lire jusqu'à 3 mois de données depuis NS
- vous pouvez choisir d'utiliser ou non les websockets sur chaque appareil (les utiliser signifie des mises à jour plus rapides, ne pas les utiliser signifie une consommation plus faible, mais des mises à jour plus lentes, c.-à-d. en minutes)
- NSClient n'est pas mis en pause lors des déconnexions

LIMITES
- NS 15 doit être utilisé avec AAPS 3.2
- v3 ne voit pas les mises à jour faites par le protocole v1 (cela sera probablement résolu dans une future version de NS)
- dans l'autre sens, à cause de l'ancienne méthode peu efficace de suivi des changements, v1 voit les changements faits par v3
- rappelez-vous que NS utilise encore v1 en interne pour le moment, il n'est donc pas possible de saisir des données par l'interface web de NS si vous utilisez v3. Vous devez utiliser AAPSClient ou les SMS si vous voulez saisir des données à distance

RÉGLAGE RECOMMANDÉ
- à cause de tout ce qui précède, vous devez choisir une seule méthode et l'utiliser sur tous les appareils (rappelez-vous qu'au moment de la rédaction, tous les autres outils d'envoi utilisent v1). Si vous décidez de passer à v3, choisissez v3 dans AAPS et dans tous les AAPSClient
- v3 est préféré pour son efficacité
- utiliser ou non les websockets avec v3 dépend de votre préférence
- il est FORTEMENT recommandé de laisser AAPS rassembler toutes les données, puis de les envoyer à NS comme seul outil d'envoi. Tous les autres appareils/applications doivent seulement lire depuis NS. Ainsi, vous éviterez les conflits et les erreurs de synchronisation. Cela vaut aussi pour l'envoi des données de glycémie vers NS avec Dexcom Share connector, etc.

(version3100)=

## Version 3.1.0

Date de sortie : 19-07-2022

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

## Version 3.0.0

Date de sortie : 31-01-2022

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

## Version 2.8.2

Date de sortie : 23-01-2021

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

(version-2811)= (important-hints-2-8-1-1)=

## Version 2.8.1.1

Date de sortie : 12-01-2021

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

(Releasenotes-version-2-8-0)=

## Version 2.8.0

Date de sortie : 01-01-2021

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

(Releasenotes-version-2-7-0)=

## Version 2.7.0

Date de sortie : 24-09-2020

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

(Releasenotes-version-2-6-1-4)=

## Version 2.6.1.4

Date de sortie : 04-05-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

## Version 2.6.1.3

Date de sortie : 03-05-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

## Version 2.6.1.2

Date de sortie : 19-04-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

## Version 2.6.1.1

Date de sortie : 06-04-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

## Version 2.6.1

Date de sortie : 21-03-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

(Releasenotes-version-2-6-0)=

## Version 2.6.0

Date de sortie : 29-02-2020

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

## Version 2.5.1

Date de sortie : 31-10-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

(Releasenotes-version-2-5-0)=

## Version 2.5.0

Date de sortie : 26-10-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

## Version 2.3

Date de sortie : 25-04-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

## Version 2.2.2

Date de sortie : 07-04-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

## Version 2.2

Date de sortie : 29-03-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

## Version 2.1

Date de sortie : 03-03-2019

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

## Version 2.0

Date de sortie : 03-11-2018

[Notes de version](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

## Version 1.0

```{admonition} First version of **AAPS**
:class: note

La première version de test a commencé en 2015 et la première version publiée date de 2016.

La chronologie exacte de ces versions n'est pas disponible pour le moment, mais comme cette question a été posée plusieurs fois, nous la notons ici.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
