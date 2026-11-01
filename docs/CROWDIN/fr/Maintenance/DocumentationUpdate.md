# Mises à jour et modifications de la documentation

## Octobre 2026

- [Browser build with AAPS Builder](#aaps-builder): build workflow version 8, now maintained by the AAPS developers in the [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) repository. Setting up is one step shorter: [step 1](#aaps-builder-step1) of the [setup page](#aaps-builder-setup) creates your private repository as a copy of that repository, with the build workflow already in it, so there is no workflow to add any more. From now on the build steps are updated for you: your repository runs the version released by the AAPS developers at every build, without any change on your side (and still no automatic build). The build itself does not change, and your existing repository keeps working. To get these automatic updates, replace your `.github/workflows/build.yml` once as explained in [Updating AAPS](#aaps-builder-updates). Your `KEYSTORE_SET` secret stays as it is. The optional [Google Drive step](#aaps-builder-google-drive) now works on the setup page itself, on a phone or a computer: no preparation file needed @psonnera
- [Montres connectées et AAPS](#watches-external-companion-apps) : la section **Samsung Tizen** devient **Applications compagnon externes** et liste les applications qui lisent la diffusion (broadcast) d'**AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) 0.5 et plus récent se connecte directement à **AAPS** sans xDrip+ : étapes de configuration ajoutées, aussi résumées dans [Configuration](#external-companion-apps), [Wear OS](../WearOS/WearOsSmartwatch.md) et [Surveillance à distance](../RemoteFeatures/RemoteMonitoring.md). Montres Bluejay : GTS arrêtée, modèle actuel mis à jour @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : workflow de compilation version 6. Les étapes de compilation utilisent maintenant des versions exactes et vérifiées des outils GitHub et de la machine de compilation. La compilation explique aussi clairement quand un mauvais texte a été collé dans le secret `KEYSTORE_SET`. La [page de configuration](#aaps-builder-setup) fait maintenant partie de la documentation et est traduite. Elle vérifie votre nom d'utilisateur GitHub et donne une aide plus claire pour le secret, pour « Page not found » (404) et pour l'application GitHub. Si votre fichier `.github/workflows/build.yml` indique la version 5 ou antérieure, remplacez-le comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- [Installateur web AAPS](#web-installer) : c'est maintenant une page de la documentation, traduite comme les autres. L'ancienne adresse fonctionne toujours @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : la version 3 du workflow de compilation ajoute la variante `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 et plus récent). Pour la compiler, remplacez votre fichier `.github/workflows/build.yml` comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md) : suppression de l'application Dexcom G7 patchée (DiaKEM), qui ne fonctionne plus pour les nouvelles installations @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : workflow de compilation version 2. Les compilations hebdomadaires automatiques sont supprimées (pas de planification, pas de variables `AUTO_BUILD` / `AUTO_VARIANT`, pas de tags `built/…`) : chaque compilation est lancée par vous, avec la version et la variante que vous choisissez, et le workflow a seulement un accès en lecture à votre dépôt. Si votre fichier `.github/workflows/build.yml` indique la version 1, remplacez-le comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates). Ajout de captures d'écran pour chaque étape @psonnera
- [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : le workflow de compilation fait maintenant partie de cette documentation. Plus de dépôt modèle (template) : vous créez un dépôt privé vide et vous ajoutez le workflow depuis la page de configuration (nouvelle étape 2). Le workflow ne vérifie plus les mises à jour dans un dépôt externe. Si vous avez créé votre dépôt à partir de l'ancien modèle, remplacez `.github/workflows/build.yml` par le workflow de la page de configuration, comme expliqué dans [Mise à jour d'AAPS](#aaps-builder-updates) @psonnera
- Nouvelle page [Compilation dans le navigateur avec AAPS Builder](#aaps-builder) : compilez AAPS depuis un téléphone Android avec une page de configuration hébergée sur ce site, avec des compilations hebdomadaires automatiques et sans fichier de préparation. Elle remplace les instructions Android de la compilation dans le navigateur (pages File Manager Plus supprimées). AAPS Builder créé par @dio99, documentation par @psonnera

## Août 2026

- [Transfert et installation d'AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md) : la page *Vérification des développeurs Android* est intégrée au guide d'installation ; ajout de l'[installateur web](#android-developer-verification-web) (installe l'APK directement depuis le navigateur, sans vérification) et de l'ADB sans fil @psonnera

## Juillet 2026

- [Introduction](../Getting-Started/Introduction.md) : vérification de l'exactitude de la section APS. Correction du titre et du lien de la citation Frontiers, présentée maintenant comme un contexte et non comme un guide actuel du marché ; mise à jour des affirmations sur le bi-hormonal et la boucle fermée complète ; précision que le contrôleur n'est pas toujours une application de téléphone ; suppression des noms de marques commerciales et des nombres d'utilisateurs sans source ; et correction d'OS-AID en *Open-Source Automated Insulin Delivery* @psonnera
- [Glossaire](../UsefulLinks/Glossary.md) : ajout des entrées **AID**, **FCL**, **HCL** et **OS-AID**, avec des liens depuis **APS** et **Boucle fermée** @psonnera
- Nouvelle page [Vérification des développeurs Android](#android-developer-verification) : effet de la future exigence de vérification de Google sur l'installation des applications compilées soi-même, avec des méthodes d'installation gratuites (ADB, procédure avancée, compte de distribution limitée) @psonnera

## Juin 2026

- [Compilation dans le navigateur](#browser-build) : réorganisée en un parcours sur plusieurs pages qui commence par les choix à faire (Fork → keystore Option 1/Option 2 avec une page dédiée par appareil → Google Drive → Compilation → Dépannage) ; suppression des onglets imbriqués, et l'installation de File Manager Plus devient une étape bien visible @psonnera
- [Introduction](../Getting-Started/Introduction.md) : la terminologie passe de *DIY* à *OS-AID* (Open-Source Automated Insulin Delivery, administration automatisée d'insuline open source) ; ajout de Trio et Stelo ; mise à jour du tableau de compatibilité pompes/MGC @tmhastings

## Mars 2026

- [Ajout de l'option de compilation en ligne de commande (CLI)](../SettingUpAaps/CLIBuild.md) @je-l
- *Compilation sur ordinateur* renommée en *Compilation avec Android Studio*. Conservation des noms de fichiers dans les URL.

## Janvier 2025

- [3.4](#version3400) release and documentation update roll-up (Wizard, Computer build versions, Config Builder)
- Mise à jour de la liste des MGC. Dexcom G5, Tomato et Glimp supprimés.
- [Interface de rotation du site](#Aapsscreens-site-rotation)
- [Mode de fonctionnement](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## Décembre 2025

- [Ajuster le profil AAPS](../GettingHelp/ProfileTuning.md) par @robrub

## Octobre 2025

- DiaKEM : les nouvelles installations ne fonctionnent plus depuis la mise à jour des serveurs @psonnera
- Suppression de l'application Libre 2 patchée (obsolète) : elle ne fonctionne pas avec les nouveaux capteurs @psonnera
- Refonte de la page Omnipod Dash @XiTatiON

## Août 2025

- Mise à jour des versions et des prérequis d'Android Studio
- Ajout de la version [3.3.2.1](#version3321), suppression des références à Android 16 (corrigé)
- Ajout de la [Compilation dans le navigateur](#browser-build) @Angus

## Mai 2025

- Ajout de la [page de mise à jour vers 3.2.0.4](#update-aaps-3204) @psonnera

## Janvier 2025

- Assistant rapide : [fonction d'appui long](#Preferences-quick-wizard) @emilise
- Page [SI dynamique](../DailyLifeWithAaps/DynamicISF.md) réécrite @emilise

## Décembre 2024

- Documentation de la [version 3.3](#version3300) @emilise

## Novembre 2024

- Mise à jour de [Votre profil AAPS](../SettingUpAaps/YourAapsProfile.md) @emilise
- Réorganisation du contenu sur les [montres connectées Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## Octobre 2024

- Mise à jour de plusieurs pages :
  - [Combien de temps cela prendra-t-il](#preparing-how-long-will-it-take), [Vue d'ensemble des composants](../Getting-Started/ComponentOverview.md), [Compléter les objectifs](../SettingUpAaps/CompletingTheObjectives.md), [Votre profil AAPS](../SettingUpAaps/YourAapsProfile.md), [Configuration](../SettingUpAaps/ConfigBuilder.md) et [Préférences](../SettingUpAaps/Preferences.md), [Écrans AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [Calcul GA](../DailyLifeWithAaps/CobCalculation.md), [SI dynamique](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Instructions de compilation pour Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- Travail technique (processus de déploiement de la documentation, organisation des fichiers...) @psonnera et @emilise

***

Historique manquant de mars 2022 à septembre 2024

Avec la refonte de la 3.2, certaines informations obsolètes ont été supprimées. Vous pouvez les trouver dans la version précédente de la documentation :

La documentation d'AAPS 3.1 est disponible [ici](https://androidaps.readthedocs.io/en/3.1/index.html).

***

## Février 2022

- [Signe d'avertissement de qualité de la glycémie](#aaps-screens-bg-warning-sign) @tanja
- [Mise à jour pompe Medtronic](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Vérifications nécessaires après la mise à jour vers AAPS 3.0](Update3_0.md) @tanja
- [Omnipod Dash](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Mise à jour des docs pour AAPS 3.0 (en partie) @xJoe
- [Wear OS pour AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

## Janvier 2022

- [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - mise à jour @tanja

## Décembre 2021

- [Compiler l'APK](../SettingUpAaps/BuildingAaps.md) - mise à jour Android Studio Arctic Fox | 2020.3.1 @tanja
- Ajout d'informations sur [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) @MilosKozak

## Novembre 2021

- Bonnes pratiques pour calibrer un capteur Libre 2
- [SI](../UsefulLinks/FAQ.md) : nouvelle explication de son effet
- Mise à jour du [dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Suppression de l'application [Dexcom](../CompatibleCgms/DexcomG6.md) patchée, car elle est obsolète

## Octobre 2021

- [Notes de version](ReleaseNotes.md) AAPS 3.0 bêta

## Septembre 2021

- Configuration d'ordinateur recommandée pour [compiler l'application AAPS](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

## Juin 2021

- [Installation manuelle (sideload) des cadrans](../WearOS/WearOsSmartwatch.md)

## Avril 2021

- Liste des [appareils de communication](#CompatiblePumps-additional-communication-device) pour les pompes Omnipod et Medtronic
- Prédictions AAPS dans [Nightscout](#Nightscout-manual-nightscout-setup)

## Mars 2021

- La communication de développement a été déplacée de gitter vers [discord](https://discord.gg/4fQUWHZ4Mw)

## Février 2021

- Nouvelle barre de navigation et [changement de langue](../NavigateDoc/ChangeLanguageVersion.md)

## Janvier 2021

- [Onglet Actions](#screens-action-tab) - plus de détails sur la page « Écrans AAPS »
- Dexcom G6 avec [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- [Niveau de batterie](#screens-sensor-level-battery) du lecteur Libre smart reader
- [Objectifs](#objectives-objective3) - nouvelles questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

## Décembre 2020

- [Libre 2](../CompatibleCgms/Libre2.md) - l'application patchée ne fonctionne pas avec les capteurs américains
- [Limites OpenAPS codées en dur](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 : installation manuelle des services Google Play

## Octobre 2020

- Accu-Chek Combo - mise à jour [ajustement de l'heure lors du passage à l'heure d'été](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - option pour [envoyer les valeurs absolues](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - plus de détails sur l'[emplacement du dossier](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - mise à jour de l'état
- [Commandes SMS - Synchronisation de l'heure](../RemoteFeatures/SMSCommands.md)

## Septembre 2020

- Mise à jour majeure pour la nouvelle version AAPS 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

## Juin 2020

- Libre 2 - plus de détails sur l'application Libre Link patchée et l'utilisation des transmetteurs Bluetooth
- [Voyager avec un changement de fuseau horaire](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) avec un Libre 2

## Mai 2020

- [Bolus étendus uniquement pour les pompes Dana + Insight](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight : désactiver la vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x seulement)
- [Changement minimal de demande](#Preferences-minimal-request-change) pour réduire le nombre de notifications en mode boucle ouverte
- Application Libre Link patchée - vérifier si elle est correctement patchée
- [Lignes de prédiction](#aaps-screens-prediction-lines) - plus de détails

## Avril 2020

- Insuline saisie à une heure passée (par ex. injectée à la seringue)
- La prise en charge Android 6 sera interrompue dans la prochaine version majeure

## Mars 2020

- [Compiler l'apk avec Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS avec firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **ne peut pas être utilisée avec AAPS pour le moment !**
- [Bolus étendu et passage en boucle ouverte](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Mettre à jour l'apk avec Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

## Février 2020

- Avertissement pour l'automatisation
- [Autosens](#Open-APS-features-autosens) - courte explication
- Alternatives à Careportal
- Fonction [Bolus étendu](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) - la boucle fermée sera désactivée
- Nouveau [plugin Profil local](../SettingUpAaps/ConfigBuilder.md)
- Exemple de configuration - mise à jour Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Complications Montre](../WearOS/WearOsSmartwatch.md)

## Janvier 2020

- [Correction manuelle des glucides](#screens-bolus-carbs) pour les saisies de glucides erronées
- [Taille des images](../SupportingAaps/HowToEditTheDocs.md) lors de la modification de la documentation

## Décembre 2019

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - configuration avec captures d'écran
- [Accu-Chek Insight et Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - solution de contournement pour l'utilisation
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 et plus récentes prises en charge
- [Cadrans](../WearOS/WearOsSmartwatch.md) - mise à jour majeure, beaucoup plus de détails
- [Complications de cadran](#Watchfaces-complications) - utilisez votre cadran préféré avec les données AAPS

## Novembre 2019

- [Automatisation - Désactiver quand vous désactivez la boucle](../DailyLifeWithAaps/Automations.md)
- [Remplacement du transmetteur Dexcom G6](#xdrip-replace-transmitter)
- [Bolus étendu - pourquoi ils ne fonctionnent pas dans un contexte de boucle](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Écran d'accueil - lignes sur le graphique](#aaps-screens-main-graph)
- [Insight - Désactiver les valeurs absolues dans NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Pompe Medtronic - doubles entrées possibles](../CompatiblePumps/MedtronicPump.md)
- [Nouveau tutoriel Freestyle Libre 2](../CompatibleCgms/Libre2.md)
- [Changement de profil avec pourcentage - exemple](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [Mise à jour commandes SMS](../RemoteFeatures/SMSCommands.md)
- [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Dépannage - collection de liens](../GettingHelp/GeneralTroubleshooting.md)
- Mise à jour - guide rapide pour les utilisateurs expérimentés
- Docs - mise à jour [modification](#edit-the-docs-code-syntax) et [traduction](#translations-translation-of-the-documentation).

## Octobre 2019

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [AccuChek Insight - options d'enregistrement](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Calcul des GA sur une page distincte](../DailyLifeWithAaps/CobCalculation.md)
- [GA - détection d'une valeur de GA incorrecte](#CobCalculation-detection-of-wrong-cob-values)
- [Dépannages spécifiques à Dexcom G6](#DexcomG6-troubleshooting-g6)
- [Mise à jour des objectifs version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Mise à jour des préférences](../SettingUpAaps/Preferences.md)
- [Inhibiteurs SGLT-2 - ne pas utiliser lors de la boucle](#PreparingForAaps-no-sglt-2-inhibitors)
- [Dépannage des commandes SMS](#SMSCommands-troubleshooting)
- [xDrip - Mise à jour du remplacement de l'émetteur G6](#xdrip-replace-transmitter)

## Septembre 2019

- [Automatisation](../DailyLifeWithAaps/Automations.md)
- [Assistant Bolus](#AapsScreens-wrong-cob-detection) - absorption lente des glucides
- [Sécurité Nightscout](#Nightscout-security-considerations)
- [Décalage horaire du profil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (plus de détails)
- [Surveillance à distance](../RemoteFeatures/RemoteMonitoring.md)
- [Qu'est-ce qu'un système à boucle fermée ?](#Introduction-what-does-hybrid-closed-loop-mean)

## Août 2019

- Région de l'application Dexcom G6 patchée
- [Nouveau transmetteur Dexcom G6](#xdrip-connect-g6-transmitter-for-the-first-time) (« firefly » / 8G...)
- De quoi ai-je besoin ? - nouvelle structure et informations supplémentaires
- Nouvelle structure
