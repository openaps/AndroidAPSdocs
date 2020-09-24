Notes de Version
**************************************************
Veuillez suivre les instructions de la page `Mise à jour vers une nouvelle version <../Installing-AndroidAPS/Update-to-new-version.html>`_. Vous pouvez également trouver une section de dépannage répondant aux difficultés les plus courantes lors de la mise à jour dans la page du manuel de mise à jour.

Vous recevrez les informations suivantes dès qu'une nouvelle mise à jour sera disponible :

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Update info

Ensuite, vous avez 60 jours pour mettre à jour. Si vous ne faites pas de mise à jour au cours de ces 60 jours, AAPS retournera en mode AGB (Arrêt Glycémie Basse - cf. `glossaire <../Getting-Started/Glossary.html>`_) comme dans `l'objective 6 <../Usage/Objectives.html>`_.

Si vous ne mettez pas à jour pendant 30 jours supplémentaires (90 jours à partir de la nouvelle date de sortie), AAPS passe à Boucle Ouverte.

Veuillez comprendre que cette modification n'a pas pour but de vous corriger mais est due à des raisons de sécurité. Les nouvelles versions d'AndroidAPS fournissent non seulement de nouvelles fonctionnalités, mais aussi d'importants correctifs de sécurité. Il est donc nécessaire que chaque utilisateur mette à jour a.s.a.p.. Malheureusement, il y a toujours des remontés de bug provenant de très anciennes versions, donc il s'agit d'une tentative d'améliorer la sécurité pour chaque utilisateur et toute la communauté DIY. Merci pour votre compréhension.

Version 2.7.0
================
Date de sortie : 24-09-2020

Le dossier github à été déplacé vers https://github.com/nightscout/AndroidAPS. Si vous n'êtes pas familié avec git le plus simple pour faire la mise à jour est de supprimer le répertoire avec AndroidAPS et de faire un nouveau clone.

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk. La version du plugin Gradle doit être 3.6.4 et la Version de Gradle 5.6.4.

**Assurez vous de vérifier et ajuster vos paramètrages après la mise à jour vers la version 2.7 comme c'est décrit ici** `ici <../Installing-AndroidAPS/update2_7.html>`_.

Vous devez au moins démarrer l'objectif 11 afin de continuer à utiliser la fonction d'automatisation (tous les objectifs précédents doivent être complétés, sinon le démarrage de l'objectif 11 n'est pas possible).

Nouvelles fonctionnalités majeures
----------------------
* utilisation interne de l'injection de dépendance, bibliothèques mises à jour, code réécrit en kotlin @MilosKozak @AdrianLxM
* utilisation de modules pour les pompes Dana @MilosKozak
* `nouvelle mise en page, selection de thème <../Getting-Started/Screenshots.html>`_ @MilosKozak
* nouvelle `mise en page des voyants d'états <../Configuration/Preferences.html#voyants-d-etat>`_ @MilosKozak
* `multiple graphs support <../Getting-Started/Screenshots.html#section-f---main-graph>`_ @MilosKozak
* `Assistant Profil <../Configuration/profilehelper.html>`_ @MilosKozak
* visualization of `dynamic target adjustment <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* nouvelle `mise en page des préférences <../Configuration/Preferences.html>`_ @MilosKozak
* Mise à jour de l'algorithme SMB @Tornado-Tim
* `Mode Arrêt Glycémie Basse <../Configuration/Preferences.html#mode-aps>`_ @Tornado-Tim
* `notifications glucides requis <../Configuration/Preferences.html#notification-glucides-requis>`_ @twain47 @Tornado-Tim
* Careportal supprimé (déplacé vers Actions) @MilosKozak
* `nouveau format chiffré des sauvegardes <../Usage/ExportImportSettings.html>`_ @dlvoy
* `nouvelle authentication SMS TOTP <../Children/SMS-Commands.html>`_ @dlvoy
* `nouvelles commandes SMS PUMP CONNECT, DISCONNECT <../Children/SMS-Commands.html#commandes>`_ @Lexsus
* meilleure prise en charge des petits débits de basale sur les pompes Dana @Mackwe
* petits correctifs Insight @TebbeUbben @MilosKozak
* option `"Langue par défaut" <../Configuration/Preferences.html#general>`_ @MilosKozak
* icônes vectorielles @Philoul
* `set neutral temps for MDT pump <../Configuration/MedtronicPump.html#configuration-of-phoneandroidaps>`_ @Tornado-Tim
* amélioration de l'Historique @MilosKozak
* suppression de l'algorithme OpenAPS MA @Tornado-Tim
* suppression de la sensibilité Oref0 @Tornado-Tim
* `protection biométrique ou par mot de passe <../Configuration/Preferences.html#protection>`_ pour les paramètres, bolus @MilosKozak
* `nouveau déclencheur d'automatisation <../Usage/Automation.html>`_ @PoweRGbg
* `Téléversement Open Humans <../Configuration/OpenHumans.html>`_

Version 2.6.1.4
================
Date de sortie : 04-05-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
----------------------
* Insight: Désactivation de la vibration sur bolus pour le firmware version 3 - Deuxième tentative
* Sinon, identique à 2.6.1.3. La mise à jour est facultative. 

Version 2.6.1.3
================
Date de sortie : 03-05-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
-----
* Insight: Désactivation de la vibration sur bolus pour le firmware version 3
* Sinon, identique à 2.6.1.2. La mise à jour est facultative. 

Version 2.6.1.2
================
Date de sortie : 19-04-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
-----
* Correction du plantage dans le service Insight
* Sinon, identique à 2.6.1.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

Version 2.6.1.1
================
Date de sortie : 06-04-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
-----
* Résout le problème de commande SMS CARBS avec la pompe Combo
* Sinon, identique à 2.6.1. Si vous n'êtes pas affecté par ce bug, vous n'avez pas besoin de mettre à niveau.

Version 2.6.1
==============
Date de sortie : 21-03-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
-----
* Permet de ne rentrer que https:// dans les paramètres NSClient
* Correction bug d'affichage `Impact Glycémique <../Getting-Started/Glossary.html>`_ sur les montres
* Correction de petits bugs de l'interface utilisateur
* Correction plantages Insight
* Correction glucides futurs avec pompe Combo
* Correction `Profil Local -> NS sync <../Configuration/Config-Builder.html#remonter-les-profils-locaux-sur-nightscout>`_
* Amélioration des alertes Insight
* Amélioration de la détection des bolus depuis l'historique de la pompe
* Correction des paramètres de connexion NSClient (wifi, en charge)
* Correction de l'envoi des calibrations vers xDrip

Version 2.6.0
==============
Date de sortie : 29-02-2020

Utilisez `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ ou une version plus récente pour construire l'apk.

Nouvelles fonctionnalités majeures
-----
* Petites modifications de l'affichage (page d'accueil...)
* Onglet/Menu Careportal supprimé - plus de détails `ici <../Usage/CPbefore26.html>`_
* Nouveau `plugin Profil Local <../Configuration/Config-Builder.html#profil-local-recommande>`_

  * Le profil local peut contenir plusieurs profils
  * Les profils peuvent être dupliqués et modifiés
  * Possibilité de télécharger les profils vers NS
  * Les anciens changements de profil peuvent être dupliqués veres un nouveau profil local (décalage horaire et pourcentage appliqués)
  * Sélecteur pour les cibles temps
* Le Profil Simple est supprimé
* La fonction `Bolus étendus <../Usage/Extended-Carbs.html#bolus-etendu>`_ désactive la boucle fermée
* Plugin MDT : Correction du bug entrées dupliquées
* Les unités ne sont pas définies dans le profil mais c'est un paramètre global
* Ajout de nouveaux paramètres à l'assistant de démarrage
* Diverses améliorations internes et de l'interface
* `Complications pour la montre <../Configuration/Watchfaces.html>`_
* Nouvelles `commandes SMS <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Correction de la prise en charge des langues
* Objectifs : `Possibilité de faire un retour arrière <../Usage/Objectives.html#retour-arriere-dans-les-objectifs>`_, Time fetching dialog
* Automatisation : `Possibilité de trier <../Usage/Automation.html#tri-des-regles-d-automatisation>`_
* Automatisation : correction de bug quand l'automatisation fonctionnait avec une boucle désactivée
* Nouvelle ligne d'état pour la Combo
* Amélioration de l'état des Glucides
* Correction synchronisation Cibles Temp avect NS
* Nouvelle activité Statistiques
* Bolus étendus autorisés en mode boucle ouverte
* Support des alarmes Android 10
* Des tonnes de nouvelles traductions

Version 2.5.1
==================================================
Date de sortie : 31-10-2019

Veuillez lire les `Remarques importantes <../Installing-AndroidAPS/Releasenotes.html#remarques-importantes>`_ et`limitations <../Installing-AndroidAPS/Releasenotes.html#cette-mise-a-jour-est-elle-pour-moi-n-est-actuellement-pas-pris-en-charge>`_ listées pour la `version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`_. 
* Correction d'un bug dans le statut du réseau qui entraînait des plantages fréquent (pas critique mais gaspillerait beaucoup d'énergie).
* Nouvelle gestion des versions qui permettra de faire des mises à jour mineures sans déclencher la notification de mise à jour.

Version 2.5.0
==================================================
Date de sortie : 26-10-2019

Remarques importantes
--------------------------------------------------
* Veuillez utiliser `Android Studio Version 3.5.1 <https://developer.android.com/studio/>`_ ou plus récent pour `construire l'apk <../Installing-AndroidAPS/Building-APK.html>`_ ou le `mettre à jour <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* Si vous utilisez xDrip `identify receiver <../Configuration/xdrip.html#identifier-le-recepteur>`_ doit être défini.
* Si vous utilisez Dexcom G6 avec l'application `Dexcom patchée <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ vous aurez besoin de la version du `Dossier 2.4<https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.
* Glimp est pris en charge à partir de la version 4.15.57 et plus récente.

Cette mise à jour est-elle pour moi? N'est actuellement PAS pris en charge
--------------------------------------------------
* Android 5 and inférieurs
* Poctech
* 600SeriesUploader
* Dexcom patchés présents dans le répertoire 2.3

Nouvelles fonctionnalités majeures
--------------------------------------------------
* Changement interne de targetSDK à 28 (Android 9), prise en charge de jetpack
* Prise en charge de RxJava2, Okhttp3, Retrofit
* Support des anciennes `pompes Medtronic <../Configuration/MedtronicPump.html>`_ (besoin de RileyLink)
* Nouveau `plugin d'Automatisation <../Usage/Automation.html>`_
* Autoriser `uniquement la partie bolus <../Configuration/Preferences.html#advanced-settings>`_ à partir de l'assistant bolus (calculatrice)
* Affichage de l'activité de l'insuline
* Ajustement des prévisions de l'IA par le résultat autosense
* Nouveau support pour les apk des applications Dexcom patchées (`dossier 2.4 <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Vérificateur de signature
* Autorisation de contourner les objectifs pour les utilisateurs d'OpenAPS
* Nouveau `objectifs <../Usage/Objectives.html>`_ - examen de connaissance de l'application
   
   (Si vous avez au minimum démarré l'objectif "Démarrer une boucle ouverte" dans les versions précédentes, l'examen est optionnel.)
* Correction d'un bug dans les pilotes Dana*, où une différence de temps erronée a été signalée
* Correction d'un bug dans le `communicateur SMS <../Children/SMS-Commands.html>`_

Version 2.3
==================================================
Date de sortie : 25-04-2019

Nouvelles fonctionnalités majeures
--------------------------------------------------
Correctif de sécurité important pour Insight (vraiment important si vous utilisez Insight !)
* Correctif du Navigateur-Historique
* Correction des Calculs Delta
* Mises à jour des langues
* Vérification de GIT et avertissement de la mise à niveau gradle
* Plus de tests automatiques
* Correction d'un crash potentiel dans le service d'Alarm Sonore (merci @lee-b !)
* Correctif diffusion des glycémies (fonctionne maintenant independemment des autorisations SMS maintenant!)
* Nouveau vérificateur de version


Version 2.2.2
==================================================
Date de sortie : 07-04-2019

Nouvelles fonctionnalités majeures
--------------------------------------------------
* Correctif Autosens : désactiver CT réhausse/diminue la cible
* Nouvelles traductions&nbsp;
* Correctifs du pilote Insight
* Correctif plugin SMS


Version 2.2
==================================================
Date de sortie : 29-03-2019

Nouvelles fonctionnalités majeures
--------------------------------------------------
* `Correctif changement d'heure <../Usage/Timezone-traveling.html##changements-heure-d-ete-heure-d-hiver>`_
* Correctif Wear
* `Correctif plugin SMS <../Children/SMS-Commands.html>`_
* Retour arrière dans les Objectifs.
* Arrêt de la boucle si le téléphone est plein


Version 2.1
==================================================
Date de sortie : 03-03-2019

Nouvelles fonctionnalités majeures
--------------------------------------------------
* Support de l'`Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ (par Tebbe Ubben et JamOrHam)
* Voyants d'état sur l'écran principal (Nico Schmitz)
* Aide sur les changements d'heure (Roumen Georgiev)
* Correctif des nom de profil venant de NS (Johannes Mockenhaupt)
* Correctifs Interface utilisateur (Johannes Mockenhaupt)
* Support de la mise à jour G5 (Tebbe Ubben et Milos Kozak)
* Support des sources de GLY G6, Poctech, Tomato, Eversense (Tebbe Ubben et Milos Kozak)
* Correctifs désactivation des SMB à partir des préférences (Johannes Mockenhaupt)

Divers
--------------------------------------------------
* Si vous n'utilisez pas la valeur par défaut de `smbmaxminutes` vous devez configurer à nouveau cette valeur


Version 2.0
==================================================
Date de sortie : 03-11-2018

Nouvelles fonctionnalités majeures
--------------------------------------------------
* Support de oref1/SMB (`documentation oref1 <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Assurez-vous de bien lire la documentation pour savoir ce que vous pouvez attendre des SMB, comment il fonctionne, ce qu'il peut faire et comment l'utiliser pour qu'il marche en douceur.
* Support de la pompe `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* Assistant de configuration : vous guide dans le processus de configuration d'AndroidAPS

Paramètres à ajuster lors du passage d'AMA à SMB
--------------------------------------------------
* L'objectif 10 doit être démarré pour pouvoir activer les SMB (l'onglet SMB montre généralement les restrictions appliquées)
* maxIA inclu maintenant _tous_ les IA, plus seulement la basal ajoutée. En d'autres termes, s'il y a eu un bolus de 8 U pour un repas et maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA repasse en dessous de 7 U.
* la valeur par défaut de min_5m_carbimpact est passée de 3 à 8 entre AMA et SMB. Si vous effectuez une mise à niveau depuis AMA vers SMB, vous devez la modifier manuellement
* Remarque lors de la construction de l'apk d'AndroidAPS 2.0 : Configuration on demand n'est pas supporté par la version actuelle du plugin Android Gradle ! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

   * Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
   * Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
   * Décochez la case Configure on demand.
   * Cliquez sur Appliquer ou OK.

Onglet Vue d'ensemble
--------------------------------------------------
* Le ruban du haut donne accès à Suspendre/Désactiver la boucle, consulter/changer le profil et démarrer/arrêter les cibles temp. (CT). Les CT utilisent des paramètres par défauts configurés dans les préférences. La nouvelle option CT Hypo est une cible temp. haute pour empêcher la boucle de corriger trop agressivement les glucides de secours.
* Boutons de traitement : l'ancien bouton de traitement est encore disponible, mais masqué par défaut. La visibilité des boutons peut maintenant être configurée. Ajout de deux nouveaux boutons insuline et glucides (qui inclut `eGluc/glucides étendus <../Usage/Extended-Carbs.html>`_)
* `Lignes de prédiction colorées <../Getting-Started/Screenshots.html#section-e>`_
* Option pour afficher un champ de notes dans les boites de dialogue insuline/glucides/calculatrice et amorcer+remplir, qui sont téléchargées dans NS
* Mise à jour de la boîte de dialogue amorcer/remplir qui permet l'amorçage et créé une entrée Careportal pour le changement de site et le changement de cartouche

Montre
--------------------------------------------------
* Variante séparée de compilation supprimée, incluse maintenant dans la version complète standard. Pour utiliser des commandes bolus à partir de la montre, activez ce paramètre sur le téléphone
* L'assistant ne demande maintenant que les glucides (et le pourcentage s'il est activé dans les paramètres de la montre). Les paramètres pris en comptes dans le calcul peuvent être configurés dans les paramètres du téléphone
* les confirmations et boîtes de dialogue fonctionnent maintenant sous wear OS 2.0
* Ajout des eGlucides dans le menu

Nouveaux plugins
--------------------------------------------------
* Application PocTech en tant que source GLY
* Application Dexcom patchée en tant que source GLY
* plugin de sensibilité oref1

Divers
--------------------------------------------------
* L'application utilise maintenant des tiroirs pour afficher tous les plugins; les plugins sélectionnés comme visibles dans le générateur de configuration sont affichés en tant qu'onglet en haut de l'écran (favoris)
* Remplacement des onglets du générateur de configuration et des objectifs, ajout de descriptions
* Nouvelle icône d'application
* Beaucoup d'améliorations et de correctifs
* Alerte indépendante de Nightscout si la pompe est injoignable pendant une durée longue (par ex. si la pile de la pompe est à plat) et pour des lectures de GLY manquées (voir _Alertes locales_ dans les paramètres)
* Option pour garder l'écran allumé
* Option pour afficher les notifications AAPS comme des notifications Android
* Filtrage avancé (permettant de toujours activer SMB et pendant 6h après les repas) pris en charge avec l'application Dexcom patchée ou xDrip+ avec le mode natif G5 en tant que source GLY.
