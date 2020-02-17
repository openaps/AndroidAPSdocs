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
