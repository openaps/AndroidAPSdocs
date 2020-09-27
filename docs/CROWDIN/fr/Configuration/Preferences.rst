Préférences
***********************************************************
* Ouvrez les préférences en cliquant sur le menu trois points en haut à droite de l'écran.

  .. image:: ../images/Pref2020_Open.png
    :alt: Ouvrir les préférences

* Vous pouvez accéder directement aux préférences d'un certain onglet (par ex. onglet pompe) en sélectionnant cet onglet et en cliquant sur Préférences du plugin.

  .. image:: ../images/Pref2020_OpenPlugin.png
    :alt: Ouvrir les préférences du plugin
    
* Les sous-menus peuvent être ouverts en cliquant sur le triangle situé sous le titre du sous-menu.

  .. image:: ../images/Pref2020_Submenu.png
    :alt: Ouvrir le sous-menu

Général
===========================================================

**Unités**

* Définissez les unités mmol/l ou mg/dl selon vos préférences.

**Langue**

* Nouvelle option pour utiliser la langue par défaut du téléphone (recommandé). 
* Si vous voulez AAPS dans une autre langue que la langue du téléphone, vous pouvez choisir parmi une large variété.
* Si vous utilisez des langues différentes, vous pouvez parfois voir un mélange de langues. Cela est dû à un problème Android, le remplacement de la langue par défaut d'Android parfois ne fonctionne pas.

  .. image:: ../images/Pref2020_General.png
    :alt: Préférences > Général

**Nom du patient**

* Peut être utilisé si vous devez différencier plusieurs configurations (par ex. deux enfants DT1 de votre famille).

Protection
-----------------------------------------------------------
Mot de passe principal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Nécessaire pour pouvoir `exporter les paramètres <../Usage/ExportImportSettings.html>`_ car ils sont chiffrés depuis la version 2.7.

   **La protection biométrique ne fonctionne pas sur les téléphones OnePlus. C'est un problème connu de OnePlus.**

* Ouvrez les préférences (menu trois points en haut à droite de l'écran d'accueil)
* Cliquez sur le triangle sous " Général "
* Cliquez sur " Mot de passe principal "
* Entrez le mot de passe, confirmez le et cliquez sur OK.

  .. image:: ../images/MasterPW.png
    :alt: Définir le mot de passe principal
  
Protection des paramètres
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Protégez vos paramètres avec un mot de passe ou l'authentification biométrique du téléphone (par ex. si votre `enfant utilise AAPS <../Children/Children.html>`_).
* Le mot de passe personnalisé doit être utilisé si vous voulez juste utiliser le mot de passe principal pour sécuriser `les paramètres exportés <../Usage/ExportImportSettings.html>`_.
* Si vous utilisez un mot de passe personnalisé, cliquez sur la ligne "Mot de passe des paramètres" pour définir le mot de passe comme décrit `ci-dessus <../Configuration/Preferences2020.html#mot-de-passe-principal>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Protection

Protection de l'Application
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Si l'application est protégée, vous devez entrer un mot de passe ou utiliser l'authentification biométrique du téléphone pour ouvrir AAPS.
* L'application s'arrêtera immédiatement si un mot de passe erroné est entré, mais s'exécute toujours en arrière-plan si elle a déjà été ouverte avec succès.

Protection des bolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* La protection des bolus peut être utile si AAPS est utilisé par un petit enfant et que vous effectuez les `bolus par SMS <../Children/SMS-Commands.html>`_.
* Dans l'exemple ci-dessous, vous voyez l'invite de protection biométrique. Si l'authentification biométrique ne fonctionne pas, cliquez dans la zone au-dessus de l'invite blanche et entrez le mot de passe principal.

  .. image:: ../images/Pref2020_PW.png
    :alt: Protection biométrique

Thème
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Vous pouvez choisir parmi trois thèmes :

  .. image:: ../images/Pref2020_Skin.png
    :alt: Sélectionnez le thème

* La différence dépend de l'orientation du téléphone

Orientation portrait
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* **Thème d'origine** et **Les boutons sont toujours affichés en bas de l'écran** sont identiques
* **Grand écran** a une taille de graphiques augmentée comparé aux autres thèmes

Orientation paysage
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
* En utilisant **Thème d'origine** et **Grand écran**, vous devez défiler vers le bas pour voir les boutons en bas de l'écran
* **Grand écran** a une taille de graphiques augmentée comparé aux autres thèmes

  .. image:: ../images/Screenshots_Skins.png
    :alt: Thèmes selon l'orientation du téléphone

Aperçu
===========================================================

* Dans la section Aperçu, vous pouvez définir les préférences de l'écran d'accueil.

  .. image:: ../images/Pref2020_OverviewII.png
    :alt: Préférences > Aperçu

Garder l'écran allumé
-----------------------------------------------------------
* Utile lors d'une présentation. 
* Cela consomme beaucoup d'énergie, il est donc prudent de brancher votre téléphone sur un chargeur.

Boutons
-----------------------------------------------------------
* Définissez quels boutons sont visibles en bas de votre écran d'accueil.
* Avec les paramètres incrément, vous pouvez définir les quantités pour les trois boutons des boîtes de dialogue glucides et insuline pour une entrée facile.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Préférences > Boutons

Assistant Rapide
-----------------------------------------------------------
* Si vous avez une collation ou un repas fréquent, vous pouvez utiliser le bouton Assistant Rapide pour entrer facilement la quantité de glucides et définir les règles de calcul.
* Dans le paramétrage, vous définissez au cours de quelle période le bouton sera visible sur votre écran d'accueil - ne définissez qu'un bouton par période.
* Si vous cliquez sur le bouton Assistant Rapide, AAPS calculera et proposera un bolus pour ces glucides en fonction de vos valeurs actuelles (glycémie ou insuline active si configurées). 
* La proposition doit être confirmée avant l'injection de l'insuline.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Préférences > Bouton Assistant rapide
  
Cibles Temporaires par défaut
-----------------------------------------------------------
* Les `Cibles Temporaires (CT) <../Usage/temptarget.html#cibles-temporaires>`_ vous permettent de définir une nouvelle cible de glycémie pour une certaine durée.
* Avec la configuration de CT par défaut, vous pouvez facilement changer vos cibles d'activité, de repas imminent, etc.
* Faites un appui long sur votre cible dans le coin supérieur droit de l'écran d'accueil ou utilisez les raccourcis dans le bouton orange « Glucides » en bas.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Préférences > Cibles temporaires par défaut
  
Insuline par défaut pour Amorcer/Remplir
-----------------------------------------------------------
* Si vous voulez remplir la tubulure ou amorcer la canule avec AAPS, vous pouvez le faire via `l'onglet actions <../Usage/CPbefore26.html#pump>`_.
* Les valeurs prédéfinies peuvent être configurées dans cette boite de dialogue.

Fourchette de visualisation
-----------------------------------------------------------
* Définissez quelle partie du graphique sur l'écran d'accueil doit être votre plage cible et sera remplie avec fond vert.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Préférences > Fourchette de visualisation

Raccourcir les titres des onglets
-----------------------------------------------------------
* Permet de voir plus de onglets à l'écran. 
* Par exemple, l'onglet "OpenAPS AMA" devient "OAPS", "Objectifs" devient "OBJ" etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Préférences > Onglets

Afficher les notes dans les boîtes de dialogue
-----------------------------------------------------------
* Vous permet d'ajouter des textes courts de notes à vos traitements (assistant bolus, glucides, insuline...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Préférences > Notes dans les boîtes de dialogue
  
Voyants d'état
-----------------------------------------------------------
* Les voyants d'état donnent une alerte visuelle pour 
      
   * Âge de la canule
   * Âge de l'insuline (jours d'utilisation du réservoir)
   * Niveau du réservoir (unités)
   * Âge du capteur
   * Âge de la pile
   * Niveau de la pile (%)

* Si le seuil d'alerte est dépassé, les valeurs seront affichées en jaune.
* Si le seuil critique est dépassé, les valeurs seront affichées en rouge.
* Dans les versions antérieures à AAPS 2.7 le paramètrage des seuils pour les voyants d'état être effectué dans Nightscout.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Préférences > Voyants d'état

Paramètres Avancés
-----------------------------------------------------------
Injecter cette partie de Bolus calculée par l’assistant
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Paramètre général permettant de ne livrer qu'une partie du résultat de l'assistant de bolus. 
* Seul le pourcentage défini (doit être compris entre 10 et 100) du bolus calculé est délivré lors de l'utilisation de l'assistant bolus. 
* Le pourcentage est affiché dans l'assistant de bolus.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Activer les Superbolus dans l'Assistant.
* le principe des `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ est "d'emprunter" de l'insuline du débit de basal dans les deux prochaines heures pour éviter les pics.

Traitements de sécurité
===========================================================
Age du patient
-----------------------------------------------------------
* Les limites de sécurité sont établies en fonction de l'âge sélectionné dans ce paramètre. 
* Si vous commencez à atteindre ces limites restrictives (comme le Maximum Bolus), il est temps de changer d’un cran. 
* C’est une mauvaise idée de selectionner un âge supérieur a l'âge réel car cela peut conduire à un surdosage lorsque l'on entre une valeur incorrecte dans la boîte de dialogue de l’insuline (en oubliant le point décimal ou la virgule par exemple). 
* Si vous voulez connaître les valeurs réelles de ces limites de sécurité codées en dur, faites défiler jusqu'à l'algorithme que vous utilisez sur `cette page <../Usage/Open-APS-features.html>`_.

Maximum Bolus autorisé [U]
-----------------------------------------------------------
* Défini la quantité maximale d’insuline que AAPS est autorisé à administrer en une fois lors d'un bolus. 
* Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. 
* Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale d’insuline de bolus que vous êtes susceptible d’avoir besoin pour un repas ou pour une dose de correction. 
* Cette restriction s’applique également aux résultats de l'assistant bolus.

Maximum de Glucides autorisé [g]
-----------------------------------------------------------
* défini la quantité maximale de glucides que l'assistant bolus de AAPS est autorisée à utiliser.
* Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. 
* Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale de glucides que vous êtes susceptible d’avoir dans d'un repas.

Boucle
===========================================================
Mode APS
-----------------------------------------------------------
* Basculer entre les boucles ouvertes et fermées ainsi que le mode arrêt glycémie basses (AGB)
* **La Boucle Ouverte** signifie que les suggestions de DBT (Débit de Basal Temporaire) sont calculées à partir de vos données et apparaissent sous forme d’une notification, mais vous devez choisir manuellement de les accepter et de les entrer manuellement sur votre pompe.  
* **La Boucle fermée** signifie que les suggestions DBT (Débit de Basal Temporaire) sont automatiquement envoyées à votre pompe sans confirmation ou entrée de votre part.  
* **Arrêt Glycémie Basse** vous donne la possibilité de revenir au mode Arrêt Glycémie basse sans avoir besoin de refaire un objectif.

Changement minimum [%]
-----------------------------------------------------------
* Lorsque vous utilisez le mode boucle ouverte, vous recevrez des notifications chaque fois que le programme AAPS vous recommande d'ajuster le débit de basal. 
* Pour réduire le nombre de notifications, vous pouvez utiliser une plage cible de glycémie plus étendue ou augmenter le pourcentage de changement minimal.
* Ce paramètre défini le changement relatif minimum qui déclenchera une notification.

Assistance Améliorée Repas (AAR ou AMA) ou Super Micro Bolus (SMB)
===========================================================
Selon vos paramètres dans le `Générateur de configuration <../Configuration/Config-Builder.html>`_ vous pouvez choisir entre deux algorithmes :

* `Assistance Améliorée Repas (OpenAPS AMA) <../Usage/Open-APS-features.html#assistance-amelioree-repas-aar>`_ - état de l'algorithme en 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - algorithme le plus récent pour les utilisateurs avancés

Paramètres OpenAPS AMA
-----------------------------------------------------------
* Permet au système de reagir plus rapidement après un bolus de repas SI vous entrez les Glucides de manière fiable. 
* Plus de détail sur les paramètres et l'Autosens peuvent être trouvés dans la `documentation OpenAPS <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Débit max en U/h pour une Temp Basal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Existe comme une limite de sécurité pour empêcher AAPS d'etre capable d'administrer un dosage de Basal dangereusement élevé. 
* La valeur est definie en Unités d'insuline par heure (U/h). 
* Il est conseillé de definir cette valuer de facon raisonnable et sensée. Une bonne recommandation est de prendre le **débit de basal le plus élevé** de votre profil et de le **multiplier par 4**. 
* Par exemple, si le dosage basal le plus élevé de votre profil est de 0,5 U/h, vous pourriez le multiplier par 4 pour obtenir la valeur de 2 U/h.
* Voir également la `description détaillée de la fonctionnalité <../Usage/Open-APS-features.html#max-u-h-pour-le-debit-temp-basal-openaps-max-basal>`_.

L'IA basal maximum que l'OpenAPS pourra délivrer [U]
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Une quantité d'insuline basale supplémentaire (en unités) a pu s'accumuler dans votre corps, en plus de votre profil basal normal. 
* Une fois cette valeur atteinte, AAPS cessera de délivrer de l'insuline basale supplémentaire jusqu'à ce que votre Insuline basale Active (IA) aie diminuée et soit de nouveau dans cette plage. 
* Cette valeur **ne prend pas en compte pas l'Insuline Active IA des bolus**, mais seulement la Basal.
* Cette valeur est calculée et surveillée indépendamment de votre débit de basal normal. Ce n'est que l'insuline basale additionnelle en plus du débit normal qui est pris en compte.

Lorsque vous commencez à boucler, **il est conseillé de mettre l'IA basal Max à 0** pour une période de temps, pendant que vous vous habituez au système. Cela empêche AAPS de donner de l'insuline basale supplémentaire. Pendant ce temps, AAPS sera toujours en mesure de limiter ou de désactiver votre insuline basale pour prévenir l'hypoglycémie. C'est une étape importante pour :

* Avoir un certain temps pour s'habituer en toute sécurité au système AAPS et surveiller son fonctionnement.
* Profiter de l'occasion pour parfaire votre profil basal et votre Sensibilité à l'Insulin (SI).
* Voir comment AAPS limite votre insuline basale pour prévenir l'hypoglycémie.

Lorsque vous vous sentez à l'aise, vous pouvez autoriser le système à commencer à vous donner de l'insuline basale supplémentaire, en augmentant la valeur de l'IA basal Max. Une bonne recommandation est de prendre le **débit de basal maximum** de votre profil et de le **multiplier par 3**. Par exemple, si le débit de basal le plus élevé dans votre profil est de 0,5 U/h, vous pourriez le multiplier par 3 pour obtenir la valeur de 1,5 U.

* Vous pouvez commencer prudemment avec cette valeur et l'augmenter lentement avec le temps. 
* Ce ne sont que des lignes directrices; chacun a un corps différent. Vous trouverez peut-être que vous avez besoin plus ou moins que ce qui est recommandé ici, mais commencez toujours prudemment et ajustez lentement.

**Remarque : En tant que fonction de sécurité, l'IA Max Basal est limitée à 7 U.**

Autosens
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ regarde les écarts de glycémie (positifs/negatifs/neutres).
* Il essaiera de comprendre à quel point vous êtes sensible/résistant en fonction de ces écarts et ajustera le débit basal et la SI en fonction de ces écarts.
* Si vous sélectionnez "Autosens ajuste aussi les cibles" l'algorithme modifiera également votre cible de glycémie.

Paramètres Avancés
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normalement, vous n'avez pas à modifier les paramètres dans cette boîte de dialogue !
* Si vous voulez quand même les changer, lisez en détail la `documentation OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ et assurez-vous de bien comprendre ce que vous faites.

Paramètres OpenAPS SMB
-----------------------------------------------------------
* Contrairement à AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ n'utilise pas de les débits de basal temporaires pour contrôler la glycémie, mais principalement les petits super micro-bolus.
* Vous devez avoir démarré `l'objectif 10 <../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ pour utiliser les SMB.
* Les trois premiers paramètres sont expliqués `ci-dessus <./Configuration/Preferences20.html#debit-max-en-u-h-pour-une-temp-basal>`_.
* Les détails sur les différentes options d'activation sont décrits dans la section `Fonctionnalités OpenAPS <../Usage/Open-APS-features.html#activer-smb>`_.
* *La fréquence à laquelle les SMB seront donnés en min* est une restriction pour que le SMB ne soit distribué que toutes les 4 minutes par défaut. Cette valeur empêche le système d'émettre trop souvent des SMB (par exemple dans le cas où une cible temporaire a été définie). Vous ne devriez pas modifier ce paramètre sauf si vous en connaissez exactement les conséquences. 
* Si 'Sensibilité augmente la cible' ou 'Résistance diminue la cible' est activée, `Autosens <../Usage/Open-APS-features.html#autosens>`_ modifiera votre cible glycémique en fonction de vos écarts de glycémie.
* Si la cible est modifiée, elle sera affichée avec un fond vert sur votre écran d'accueil.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Cible modifiée par Autosens
  
Notification glucides requis
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Cette fonctionnalité n'est disponible que si l'algorithme SMB est sélectionné.
* Eating of additional carbs will be suggested when the reference design detects that it requires carbs.
* In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.
* Additionally the required carbs will be displayed in the COB section on your home screen.
* A threshold can  be defined - minimum amount of carbs needed to trigger notification. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Afficher les glucides requis sur l'écran d'accueil
  
Paramètres Avancés
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normalement, vous n'avez pas à modifier les paramètres dans cette boîte de dialogue !
* Si vous voulez quand même les changer, lisez en détail la `documentation OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ et assurez-vous de bien comprendre ce que vous faites.

Paramètres d’absorption
===========================================================

  .. image:: ../images/Pref2020_Absorption.png
    :alt: Paramètres d'absorption

min_5m_carbimpact
-----------------------------------------------------------
* The algorithm uses BGI (blood glucose impact) to determine when carbs are absorbed. 
* The value is only used during gaps in CGM readings or when physical activity “uses up” all the blood glucose rise that would otherwise cause AAPS to decay COB. 
* At times when carb absorption can’t be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. De base, c'est une sécurité intégrée.
* To put it simply: The algorithm "knows" how your BGs *should* behave when affected by the current dose of insulin etc. 
* Whenever there is a positive deviation from the expected behaviour, some carbs are absorbed/decayed. Big change=many carbs etc. 
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. Pour plus de détails, voir la `documentation OpenAPS <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* La valeur standard pour AMA est de 5, pour SMB c'est 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: Graphique GA
  
Durée max d’absorption d'un repas
-----------------------------------------------------------
* Si vous mangez souvent des repas riches en matières grasses ou en protéines, vous devrez augmenter votre temps d'absorption des repas.

Paramètres avancés - Ratio autosens
-----------------------------------------------------------
* Définit les ratios min. et max. `Autosens <../Usage/Open-APS-features.html#autosens>`_.
* Normalement les valeurs standards (max. 1,2 et min. 0,7) ne devrait pas être modifiées.

Paramètres de la pompe
===========================================================
Les options ici varient selon le pilote de pompe que vous avez sélectionné dans le `Générateur de configuration <../Configuration/Config-Builder.html#pompe>`_.  Appairez et réglez votre pompe selon les instructions relatives à la pompe :

* `Pompe à Insuline DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `Pompe à Insuline DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Pompe Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Pompe Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Pompe Medtronic <../Configuration/MedtronicPump.html>`_

Si vous utilisez AndroidAPS pour une boucle ouverte, vérifiez que vous avez sélectionné Pompe virtuelle Pump dans le Générateur de configuration.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Définissez votre *URL Nightscout* (par ex. https://yourwebsitename.herokuapp.com) et l'*API secret* (un mot de passe de 12 caractères enregistré dans vos variables Heroku).
* Cela permet de lire et d'écrire des données entre le site Nightscout et AndroidAPS.  
* Vérifiez deux fois les fautes de frappe ici si vous êtes coincé dans l'objectif 1.
* **Vérifiez bien que l'URL est SANS /api/v1/ à la fin.**
* *Log app start to NS* enregistre une note dans Careportal Nightscout à chaque démarrage de l'application.  L'application ne devrait pas avoir besoin de démarrer plus d'une fois par jour; si c'est plus souvent, cela suggère un problème (par ex. l'optimisation de la batterie n'est pas désactivée pour AAPS). 
* Si activé, les modifications du `profil local <../Configuration/Config-Builder.html#profil-local-recommande>`_ sont envoyées sur votre site Nightscout.

Paramètres de connexion
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: Paramètres de connexion NSClient  
  
* Restreignez le téléchargement de Nightscout au Wi-Fi seulement ou même à certains SSID Wi-Fi.
* Si vous souhaitez utiliser uniquement un réseau WiFi spécifique, vous pouvez entrer son SSID. 
* Plusieurs SSID peuvent être séparés par un point-virgule. 
* Pour supprimer tous les SSID, entrez un espace dans la zone.

Options d'alarme
-----------------------------------------------------------
* Les options d'alarme vous permettent de sélectionner les alarmes Nightscout par défaut à utiliser via l'application.  
* Pour que les alarmes sonnent, vous devez définir les valeurs de seuil des alarmes Urgent High, High, Low et Urgent Low dans vos `variables Heroku <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* Elles ne fonctionneront que si vous avez une connexion avec Nightscout et sont destinées aux parents/aidants. 
* Si vous avez la source MGC sur votre téléphone (par ex. xDrip+ ou l'application Dexcom patchée), utilisez ces alarmes à la place.

Paramètres Avancés
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: Paramètres avancés NSClient

* La plupart des options dans les paramètres avancés sont explicites.
* *Activer les transmissions locales* partagera vos données vers d'autres applications sur le téléphone, telles que xDrip+. 

  * L'application Dexcom patchée ne diffuse pas directement vers xDrip+. 
  * Vous devez `passer par AAPS <../Configuration/Config-Builder.html#source-gly>`_ et activer la diffusion locale dans AAPS pour utiliser les alarmes xDrip+.
  
* *Utiliser toujours les valeurs absolues du basal* doit être activé si vous souhaitez utiliser Autotune correctement. Voir la `documentation OpenAPS <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ pour plus de détails sur Autotune.
* **Do not activate this when using `Insight pump <../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps>`_!**  It would lead to false TBR settings in Insight pump.

Communicateur SMS
===========================================================
* Les options ne seront affichées que si le Communicateur SMS est sélectionné dans le `Générateur de configuration <../Configuration/Config-Builder.html#communicateur-sms>`_.
* Ce paramètre permet de contrôler à distance de l'application en envoyant des instructions au téléphone du patient que l'application appliquera comme Suspendre la boucle ou un bolus.  
* De plus amples informations sont décrites dans `Commandes SMS <../Children/SMS-Commands.html>`_.
* Additional safety can be obtained through use of an authenticator app or additional PIN at token end.

Automatisation
===========================================================
Sélectionnez le service de localisation à utiliser :

* Utiliser la localisation passive : AAPS ne prend la localisation que si d'autres applications la demandent
* Utiliser la localisation par le réseau : Localisation de votre Wifi
* Utiliser la localisition GPS (Attention ! Peut entrainer une consommation excessive de la batterie !)

Alertes locales
===========================================================

  .. image:: ../images/Pref2020_LocalAlerts.png
    :alt: Alertes locales

* Les paramètres doivent être explicites.

Choix de données
===========================================================

  .. image:: ../images/Pref2020_DataChoice.png
    :alt: Choix de données

* Vous pouvez aider davantage au développement d'AAPS en envoyant des rapports de plantage aux développeurs.

Paramètres de maintenance
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Paramètres de maintenance

* Le destinataire standard des journaux est logs@androidaps.org.
* Si vous sélectionnez *Chiffrer les paramètres exportés* ces paramètres sont chiffrés avec votre mot de passe principal <../Configuration/Preferences.html#mot-de-passe-principal>`_. Dans ce cas, le mot de passe principal doit être entré à chaque fois que les paramètres sont exportés ou importés.
