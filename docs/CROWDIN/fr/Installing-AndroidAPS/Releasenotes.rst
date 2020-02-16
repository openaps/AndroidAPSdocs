Notes de Version
**************************************************
Veuillez suivre les instructions de la page `Mise à jour vers une nouvelle version <../Installing-AndroidAPS/Update-to-new-version.html>`_. Vous pouvez également trouver une section de dépannage répondant aux difficultés les plus courantes lors de la mise à jour dans la page du manuel de mise à jour.

Vous recevrez les informations suivantes dès qu'une nouvelle mise à jour sera disponible :

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Update info

Ensuite, vous avez 60 jours pour mettre à jour. Si vous ne faites pas de mise à jour au cours de ces 60 jours, AAPS retournera en mode AGB (Arrêt Glycémie Basse - cf. `glossaire <../Getting-Started/Glossary.html>`_) comme dans `l'objective 6 <../Usage/Objectives.html>`_.

Si vous ne mettez pas à jour pendant 30 jours supplémentaires (90 jours à partir de la nouvelle date de sortie), AAPS passe à Boucle Ouverte.

Veuillez comprendre que cette modification n'a pas pour but de vous corriger mais est due à des raisons de sécurité. Les nouvelles versions d'AndroidAPS fournissent non seulement de nouvelles fonctionnalités, mais aussi d'importants correctifs de sécurité. Il est donc nécessaire que chaque utilisateur mette à jour a.s.a.p.. Malheureusement, il y a toujours des remontés de bug provenant de très anciennes versions, donc il s'agit d'une tentative d'améliorer la sécurité pour chaque utilisateur et toute la communauté DIY. Merci pour votre compréhension.

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

Cette mise à jour est-elle pour moi? N'est actuellement PAS pris en charge
--------------------------------------------------
* Android 5 and inférieurs
* Poctech
* 600SeriesUploader
* Glimp
   Glimp cesse de fonctionner lorsque vous êtes hors ligne. Le développeur de Glimp doit mettre à jour l'application pour utiliser la diffusion SDK28 .
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
* `DST fix <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Wear Update
* `SMS plugin <../Children/SMS-Commands.html>`_ update
* Go back in objectives.
* Stop loop if phone disk is full


Version 2.1
==================================================
Date de sortie : 03-03-2019

Nouvelles fonctionnalités majeures
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Status lights on main screen (Nico Schmitz)
* Daylight saving time helper (Roumen Georgiev)
* Fix processing profile names comming from NS (Johannes Mockenhaupt)
* Fix UI blocking (Johannes Mockenhaupt)
* Support for updated G5 app (Tebbe Ubben and Milos Kozak)
* G6, Poctech, Tomato, Eversense BG source support (Tebbe Ubben and Milos Kozak)
* Fixed disabling SMB from preferences (Johannes Mockenhaupt)

Divers
--------------------------------------------------
* If you are using non default `smbmaxminutes` value you have to setup this value again


Version 2.0
==================================================
Date de sortie : 03-11-2018

Nouvelles fonctionnalités majeures
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Setup wizard: guides you through the process of setting up AndroidAPS

Paramètres à ajuster lors du passage d'AMA à SMB
--------------------------------------------------
* Objective 10 must be started for SMBs to be enabled (SMB tab generally shows what restrictions apply)
* maxIOB now includes _all_ IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U.
* min_5m_carbimpact default has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manualy
* Note when building AndroidAPS 2.0 apk: Configuration on demand is not supported by the current version of the Android Gradle plugin! Si votre construction échoue avec une erreur concernant la "configuration sur demande", faites les actions suivantes :

   * Ouvrez la fenêtre Préférences en cliquant sur File > Settings (sur Mac, Android Studio > Preferences).
   * Dans le panneau de gauche, cliquez sur Build, Execution, Deployment > Compiler.
   * Décochez la case Configure on demand.
   * Cliquez sur Appliquer ou OK.

Overview tab
--------------------------------------------------
* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#section-e>`_
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

Montre
--------------------------------------------------
* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

Nouveaux plugins
--------------------------------------------------
* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

Divers
--------------------------------------------------
* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see _Local alerts_ in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.
