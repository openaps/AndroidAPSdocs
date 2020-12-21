Objectifs
**************************************************

AndroidAPS a une série d'objectifs qui doivent être complétés pour vous guider à travers les fonctionnalités et les paramètres de la boucle sécurisée.  Ils s'assurent que vous avez correctement configuré tout ce qui est détaillé dans les sections ci-dessus, et que vous comprenez ce que votre système fait et pourquoi vous pouvez lui faire confiance.

Si vous **mettez à jour les téléphones** alors vous pouvez `exporter vos paramètres <../Usage/ExportImportSettings.html>`_ pour garder votre progression à travers les objectifs. Non seulement vos progrès à travers les objectifs de l'être sauvés, mais également vos paramètres de sécurité, tels que max bolus etc.  Si vous n'exportez pas et n'importez pas vos paramètres, vous devrez recommencer les objectifs depuis le début.  C'est une bonne idée de `sauvegarder vos paramètres <../Usage/ExportImportSettings.html>`_ souvent juste au cas où.

Si vous voulez revenir en arrière sur les objectifs terminés voir les `explications ci-dessous <../Usage/Objectives.html#retour-arriere-dans-les-objectifs>`_.
 
Objectif 1 : Paramétrage de la visualisation et la surveillance des données, analyse des débits Basal et des ratios
====================================================================================================
* Sélectionnez la source de glycémie adaptée à votre configuration.  Voir `Source GLY <../Configuration/BG-Source.html>`_ pour plus d'informations.
* Sélectionnez la bonne pompe dans le générateur de configuration (sélectionnez la Pompe virtuelle si vous utilisez un modèle de pompe sans pilote AndroidAPS pour le bouclage) afin de vous assurer que votre pompe peut communiquer avec AndroidAPS.  
* Si vous utilisez la pompe DanaR, assurez-vous d'avoir suivi les instructions `Pompe à insuline DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ pour assurer le lien entre la pompe et AndroidAPS.
* Suivez les instructions de la page `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ pour s'assurer que Nightscout peut recevoir et afficher ces données.
* Notez que l'URL dans NSClient doit être **SANS /api/v1/** à la fin - voir les `paramètres NSClient dans les Préférences <../Configuration/Preferences.html#ns-client>`_.

*Vous devrez peut-être attendre la prochaine lecture de glycémie avant qu'AndroidAPS ne la reconnaisse.*

Objectif 2 : Apprendre comment contrôler AndroidAPS
==================================================
* Exécutez différentes actions dans AndroidAPS tel que décrit dans cet objectif.
* Cliquez sur le texte orange "Pas encore terminé" pour accéder à la liste des tâches.
* Des liens seront fournis pour vous guider si vous n'êtes pas encore familiarisé avec une action spécifique.

   .. image:: ../images/Objective2_V2_5.png
     :alt: Screenshot objective 2

Objective 3: Prove your knowledge
==================================================
* Passez un examen à choix multiples pour tester vos connaissances d'AndroidAPS.
* Cliquez sur le texte orange "Pas encore terminé" pour accéder à la page avec la question et répondre aux options.

   .. image:: ../images/Objective3_V2_5.png
     :alt: Screenshot objective 3

* Des liens sont fournis pour vous guider si vous n'êtes pas certain d'avoir les bonnes réponses.

Objectif 4 : Démarrage de la boucle ouverte
==================================================
* Sélectionnez la Boucle Ouverte soit à partir des Préférences, soit en faisant un appui long sur le bouton de boucle en haut à gauche de l'écran d'accueil.
* Travaillez dans les `Préférences <../Configuration/Preferences.html>`_ pour la configurer pour vous.
* Adoptez manuellement au moins 20 suggestions de débits de base temporaires sur une période de 7 jours; saisissez-les sur votre pompe et confirmez dans AndroidAPS que vous les avez acceptés.  Assurez-vous que ces données apparaissent bien dans AndroidAPS et dans Nightscout.
* Activez des `Cibles temporaires <../Usage/temptarget.html>`_, si nécessaire. Utilisez des cibles temp. hypo temp pour éviter que le système ne corrige trop fortement une augmentation de la glycémie après une hypo. 

Réduire le nombre de notifications
--------------------------------------------------
* Pour réduire le nombre de décisions à prendre en mode Boucle Ouverte, définissez une large plage cible comme 90 - 150 mg/dl ou 5,0 - 8,5 mmol/l. * Vous pouvez même augmenter encore la limite supérieure (ou désactiver la Boucle ouverte) pendant la nuit. 
* Dans les Préférences, vous pouvez définir un pourcentage minimum pour suggérer un changement de débit de basal.

   .. image:: ../images/OpenLoop_MinimalRequestChange2.png
     :alt: Boucle ouverte Changement minimum
     
* De plus, vous n'avez pas besoin d'agir toutes les 5 minutes sur toutes les suggestions...

Objectif 5 : Compréhension de la Boucle Ouverte, y compris les propositions de débits Basal temporaires
====================================================================================================
* Commencez à comprendre le raisonnement qu'il y a derrière chaque recommandation de basal temporaire en regardant `Comprendre la logique de détermination basale <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ ainsi que les `lignes de prédiction dans l'écran d'accueil AndroidAPS <../Getting-Started/Screenshots.html#section-e>`_/Nightscout et le résumé des résultats des calculs dans votre onglet OpenAPS.
 
Vous voudrez définir votre objectif plus haut que d'habitude jusqu'à ce que vous ayez confiance dans les calculs et les paramètres.  Le système permet

* une cible basse au minimum de 72 mg/dl (4 mmol/l) ou un maximum de 180 mg/dl (10 mmol/l) 
* une cible haute au minimum de 90 mg/dl (5 mmol/l) et au maximum de 225 mg/dl (15 mmol/l)
* une cible temporaire en tant que simple valeur peut être n'importe où entre 72 mg/dl et 225 mg/dl (4 mmol/l et 15 mmol/l)

La cible est la valeur sur laquelle les calculs sont basés, et n'est pas la même que la page dans laquelle vous souhaitez avoir vos glycémies.  Si votre cible est très large (disons 50 mg/dl [3 mmol/l] ou plus de large), vous aurez souvent peu d'action de AAPS. C'est dû au fait que la glycémie devrait finalement se situer quelque part dans cette large plage, et par conséquent, peu de débits de base temporaires sont suggérés. 

Vous pouvez essayer d'ajuster vos cibles pour qu'elles soient plus proches les unes des autres (disons 20 mg/dl [1 mmol/l] ou moins de large) et observer comment le comportement de votre système change en conséquence.  

Vous pouvez afficher une plage plus large (lignes vertes) sur le graphique pour la zone dans laquelle vous souhaitez maintenir votre glycémie en entrant différentes valeurs dans `Préférences <../Configuration/Preferences.html>`_ > Fourchette de visualisation.
 
.. image:: ../images/sign_stop.png
  :alt: Stop sign

Arrêtez-vous ici si vous est en boucle ouverte avec une pompe virtuelle - ne cliquez pas sur Vérifier à la fin de cet objectif.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ./images/blank.png
  :alt: blank

Objectif 6 : Démarrage de la boucle fermée avec le système AGB ( Arrêt pour Glycémie Basse )
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Warning sign
  
La boucle fermée ne corrigera pas les valeurs de glycémies élevées dans l'objectif 6, car elle est limitée à la suspension glycémie basse. Les hyperglycémies doivent être corrigées manuellement par vous !
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Sélectionnez Boucle Fermée soit dans `Préférences <../Configuration/Preferences.html>`_ soit en faisant un appui long sur le bouton Boucle Ouverte en haut à gauche de l'écran d'accueil.
* Définissez votre plage cible légèrement au dessus de ce que vous visez habituellement, juste pour être en sécurité.
* Surveillez comment les basales temporaires sont actives en regardant le texte bleu de la basale sur l'écran d'accueil, ou le rendu de la basale en bleu sur le graphique de l'écran d'accueil.
* Assurez-vous que vos paramètres ont fonctionnés avec AndroidAPS pour éviter d'avoir à traiter des hypoglycémies sur une période de 5 jours.  Si vous avez encore des hypoglycémies sévères ou fréquentes, alors envisagez de réajuster votre DAI, basal, SI et ratio G/I.
* Vous n'avez pas à changer vos paramètres. Au cours de l'objectif 6, le paramètre maxIA est automatiquement défini sur zéro. Le remplacement par zéro de ce paramètre sera annulé lorsque vous serez à l'objectif 7.
* Le système remplacera vos paramètres maxIA par zéro, ce qui signifie que si la glycémie diminue, il peut réduire le débit de base pour vous, mais si la glycémie augmente, il n'augmentera le débit de base que si l'IA est négative (liée à un Arrêt Glycémie Basse précédent), sinon les débits de base resteront les mêmes que ceux de votre profil sélectionné.  

   .. image:: ../images/Objective6_negIOB.png
     :alt: Exemple IA négative

* Si votre IA basale est négative (voir copie d'écran ci-dessus) un DBT > 100% peut également être diffusé à l'objectif 6.
* Vous pouvez subir temporairement des pics de glycémie à la suite d'hypos sans pouvoir augmenter le débit de base sur le rebond.

Objectif 7 : Réglage de la Boucle Fermée, augmentation de l'IA (Insuline Active) maximale au dessus de 0 et abaissement progressif des cibles glycémiques
====================================================================================================
* Augmentez votre 'IA totale maximale pour OpenAPS [U]' (appelée 'max-IOB' dans OpenAPS) au dessus de 0 sur une période de 1 jour, la recommandation par défaut est "moyenne bolus repas + 3 x max basal quotidienne"(pour l'algorithme SMB) ou "3 x max basal quotidienne" (pour les algorithme AMA plus anciens) mais devez augmenter très lentement jusqu'à ce que vous trouviez vos propres paramètres qui marchent pour vous (max basal quotidienne = le débit de base maximum sur l'ensemble des plages horaires de la journée).

  Cette recommandation doit être considérée comme un point de départ. Si vous paramétrez 3 x et que vous constatez des variations dures et rapides, alors diminuez cette valeur. Si vous êtes très résistant, augmentez la un peu à la fois.

   .. image:: ../images/MaxDailyBasal2.png
     :alt: max daily basal

* Une fois confiant sur la quantité d'IA qui convient à votre profil de boucle, réduisez ensuite vos cibles jusqu'au niveau souhaité.


Objectif 8 : Ajustement des débits Basal et des ratios si nécessaire, puis activation de la fonction auto-sens
====================================================================================================
* Vous pouvez utiliser `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ pour vérifier que votre basale reste précise ou faire un test de basal traditionnel.
* Activez `autosens <../Usage/Open-APS-features.html>`_ sur une période de 7 jours et regardez la ligne blanche dans le graphique de l'écran d'accueil qui montre comment la sensibilité à l'insuline augmente ou diminue selon l'exercice physique, le cycle hormonal etc, et gardez un oeil sur l'onglet OpenAPS qui indique comment AndroidAPS ajuste les basales et/ou les cibles en conséquence.

*N'oubliez pas d'enregistrer votre Bouclage dans `ce formulaire <http://bit.ly/nowlooping>`_ en indiquant AndroidAPS comme votre type de logiciel de boucle DIY, si vous ne l'avez pas déjà fait.*


Objective 9 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB
====================================================================================================
* Avant la version 2.7 de AAPS, l'aide aux repas (MA) était l'algorithme de base pour AAPS et l'accomplissement de l'objectif 8 était nécessaire pour activer `l'Assistance Améliorée Repas AAR (AMA) <. /Utilisation/Open-APS-features.html#assistance-amelioree-repas-aar>`_.
* Comme l'`Assistance Améliorée Repas (AMA) <../Usage/Open-APS-features.html#assistance-amelioree-repas-aar>`_ est l'algorithme standard de la version 2.7 d'AAPS, utilisez les 28 jours suivants pour essayer des fonctionnalités que vous n'avez pas encore utilisées et acquérir plus de confiance avec votre système de boucle fermée .


Objectif 10 : Activation de fonctionnalités supplémentaires pour l'utilisation en journée, telles que la fonction SMB
====================================================================================================
* Vous devez lire le `chapitre SMB dans ce wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ et le `chapitre oref1 dans la documentation openAPS <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ pour comprendre comment les SMB fonctionnent, en particulier ce qu'il y a derrière le zéro-temp.
* Puis vous devez `augmenter le maxIA <../Usage/Open-APS-features.html#ia-totale-maximale-pour-openaps-u-openaps-max-ia>`_ pour que les SMB marchent correctement. maxIA inclu maintenant toutes les IA, pas seulement la basale ajoutée. Autrement dit, si vous faites un bolus de 8 U pour un repas et que maxIA est à 7 U, aucun SMB ne sera délivré jusqu'à ce que l'IA redescende en dessous de 7 U. Un bon début est maxIA = bolus moyen des repas + 3 x basale max quotidienne (basale max quotidienne = débit horaire max de basale sur n'importe quelle période de la journée - voir `Objectif 7 <../Usage/Objectives.html#objectif-7-reglage-de-la-boucle-fermee-augmentation-de-l-ia-insuline-active-maximale-au-dessus-de-0-et-abaissement-progressif-des-cibles-glycemiques>`_ pour une illustration)
* la valeur par défaut de min_5m_carbimpact est passée de 3 à 8 entre AMA et SMB. Si vous passez de AMA vers SMB, vous devez la modifier manuellement.


Objectif 11: Automatisation
====================================================================================================
* Vous devez commencer l'objectif 11 pour pouvoir utiliser l'`Automatisation <../Usage/Automation.html>`_.
* Assurez-vous d'avoir complété tous les objectifs, y compris l'examen `<../Usage/Objectives.html#objective-3-prouvez-ses-connaissances>`_.
* Compléter les objectifs précédents n’affectera pas les autres objectifs que vous avez déjà terminés. Vous conserverez tous les objectifs terminés !


Retour arrière dans les Objectifs
====================================================================================================
Si vous voulez revenir en arrière sur les objectifs terminés pour quelque raison que ce soit, vous pouvez le faire en cliquant sur "Refaire l'objectif".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Retour arrières objectifs
