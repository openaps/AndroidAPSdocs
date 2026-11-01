
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

**Release notes of the latest version of each major release**. For all other versions, see the [releases on GitHub](https://github.com/nightscout/AndroidAPS/releases).

(latestrelease)=

(version400)=

**Version 4.0.0**

Date de sortie : 31-10-2026

**Nouvelles fonctionnalités**

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
- New [automation actions](#automations-automation-action): **Change smoothing** @olorinmaia, and **Run**, **Enable** or **Disable scene** @MilosKozak
- [Rotation du site](#Aapsscreens-site-rotation) : suivre et alterner les sites de perfusion @Philoul @MilosKozak
- Refonte d'[Autotune](../AdvancedOptions/Autotune.md) @Philoul
- Nouveaux [widgets](../DailyLifeWithAaps/Widgets.md) @MilosKozak @t1dude
- Accessibilité : l'application du téléphone fonctionne avec un lecteur d'écran - contrôles nommés, état lu à voix haute, descriptions des graphiques et titres pour parcourir rapidement @MilosKozak
- [Import des paramètres](../Maintenance/ExportImportSettings.md) : possibilité de garder les paramètres de la pompe @MilosKozak
- La notification permanente utilise les mises à jour en direct (live updates) d'Android, avec la prise en charge de la Now bar de Samsung et le delta @premnirmal
- Graphique Glycémie : [appui long](#aaps-screens-graph-press-and-hold) pour voir les valeurs à une mesure, sur chaque graphique de la vue d'ensemble @t1dude @olorinmaia
- Améliorations des performances @MilosKozak
- eGlucides automatiques dans l'Assistant Bolus @MilosKozak

**Nouveaux appareils**

- **CareLevo** : nouveau [pilote de pompe](../CompatiblePumps/CareLevo.md) @Kisu-Choi @MilosKozak
- **Dana-i2** : prise en charge @MilosKozak
- **Instara** : nouvelle source MGC @leohunt

**Améliorations des pilotes de pompe**

- Écrans de pompe reconstruits pour Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn et Equil @MilosKozak
- **Omnipod Dash** : codes Ref comme sur le PDM et descriptions des erreurs lisibles, compensation de la dérive toujours active, meilleur signalement du type de bolus @nl-ruud
- **Omnipod** : date de fin ferme pour Dash et Eros @mcnelson
- **DanaR, RS** : émulateur de pompe pour les tests @MilosKozak
- **Equil** : émulateur de pompe pour les tests @MilosKozak
- Beaucoup de corrections pour les pompes et la boucle @MilosKozak et d'autres

**Wear OS**

- [Application montre](../WearOS/WearOsSmartwatch.md) reconstruite en Compose, nouvelles tuiles et complications, installation automatique du cadran (Watch Face Push) sur Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface disponible pour WearOS 6.0 (GW7, GW8, GW9...) avec un cadran WFF dédié @Philoul @olorinmaia
- CustomWatchface peut maintenant contenir 5 emplacements de complication personnalisables (nouvelle fonction disponible seulement pour les anciennes montres) @Philoul
- Nouveau [cadran WFF basé sur les complications AAPS](#wearos-complications-watchface-setup) @olorinmaia
- Corrections dans le résultat de l'Assistant Bolus et de l'Assistant Rapide @olorinmaia
- Nouvelles activités Graphique Glycémie et Mode dans le menu principal @olorinmaia
- Assistant Bolus : page [type de repas](#WearOsSmartwatch-wizard-meal-type) qui répartit les glucides comme l'assistant du téléphone, et [heure des glucides](#WearOsSmartwatch-wizard-carb-time) avec le rappel *heure de manger* sur la montre @olorinmaia
- [Alarmes du téléphone sur la montre](#WearOsSmartwatch-phone-alarms) : la montre affiche l'alarme et propose Silence et Muet 5 min @olorinmaia

**Compilation**

- Workflows CI pour les compilations de tags/branches, correspondance des versions JDK @Angus-repo

**Contributeurs**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

Liste complète des changements : <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

**Version 3.4.2.6**

- Equil : stabilité améliorée @MilosKozak

---

(version3321)=

**Version 3.3.2.1**

Date de sortie : 13-08-2025

- Correction de la connexion Bluetooth Omnipod sur Android 16
- Processus CI (compilation dans le navigateur)
- Correction de la conversion mmol-mgdl
- Correction d'un mauvais choix de l'heure dans les dialogues dans certains fuseaux horaires
- Correction de la lecture des clés en mode simple
- Correction des prédictions manquantes sur la montre
- Configuration améliorée
- Synchronisation complète NSCv3 améliorée

---

(version3300)=

**Version 3.3.2.0**

Date de sortie : 27-03-2025

**Comment faire la mise à jour**

* La [version d'Android Studio appelée "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) ou plus récente est nécessaire pour compiler cette version. Si vous avez déjà compilé une version 3.3.x, vous devez de nouveau mettre à jour Android Studio.

(version-enforcement)=

**À partir de cette version, les notifications et l'obligation de mise à jour ont été simplifiées et assouplies, et fonctionnent ainsi :**

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

Other changes: [release notes on GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.3.2.0).

---

(version3204)=

**[Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)**

Date de sortie : 27-02-2024

Cette version est la dernière qui prend en charge Android 10. Si vous ne pouvez pas passer à Android 11, [mettez à jour AAPS vers la 3.2.0.4](#update-aaps-3204).

**Modifications**

- Prise en charge du G7 par xDrip
- Corrections Medtrum
- Correction de l'icône Automatisation
- Correction de la validation de l'objectif 1

---

**Version 2.8.2**

Date de sortie : 23-01-2021

[Notes de version](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

La première version de test a commencé en 2015 et la première version publiée date de 2016.

La chronologie exacte de ces versions n'est pas disponible pour le moment, mais comme cette question a été posée plusieurs fois, nous la notons ici.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
