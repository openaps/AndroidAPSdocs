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
* Protect your settings with a password or phone's biometric authentication (i.e. `child is using AAPS <../Children/Children.html>`_).
* Custom password should be used if you want to use master password just for securing `exported settings <../Usage/ExportImportSettings.html>`_.
* If you are using a custom password click on line "Settings password" to set password as described `above <../Configuration/Preferences2020.html#master-password>`_.

  .. image:: ../images/Pref2020_Protection.png
    :alt: Protection

Protection de l'Application
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* If app is protected you must enter password or use phone's biometric authentication to open AAPS.
* App will shut down immediately if wrong password is entered - but still run in the background if it was previously opened successfully.

Protection des bolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Bolus protection might be useful if AAPS is used by a small child and you `bolus via SMS <../Children/SMS-Commands.html>`_.
* In the example below you see the prompt for biometric protection. If biometric authentication does not work, click in the space above the white prompt and enter master password.

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
* Define which buttons are visible on the bottom of your home screen.
* With the increment figure you can define amount for the three buttons in carb and insulin dialogue for easy entry.

  .. image:: ../images/Pref2020_OV_Buttons.png
    :alt: Préférences > Boutons

Assistant Rapide
-----------------------------------------------------------
* If you have a frequent snack or meal, you can use the quick wizard button to easily enter amount or carbs and set calculation basics.
* In setup you define during which time period the button will be visible on your home screen - just one button per period.
* If you click the quick wizard button AAPS will calculate and propose a bolus for those carbs based on your current ratios (considering blood glucose value or insulin on board if set up). 
* The proposal has to be confirmed before insulin is delivered.

  .. image:: ../images/Pref2020_OV_QuickWizard.png
    :alt: Préférences > Bouton Assistant rapide
  
Cibles Temporaires par défaut
-----------------------------------------------------------
* `Temp targets (TT) <../Usage/temptarget.html#temp-targets>`_ allow you to define change your blood glucose target for a certain time period.
* With setting of default TT you can easily change your target for activity, eating soon etc.
* Press long on your target in the top right corner on the home screen or use the shortcuts in the orange “Carbs” button at the bottom.

  .. image:: ../images/Pref2020_OV_DefaultTT.png
    :alt: Préférences > Cibles temporaires par défaut
  
Quantité d'insuline par défaut pour Amorcer/Remplir
-----------------------------------------------------------
* If you want to fill tube or prime canula through AAPS you can do this through `actions tab <../Usage/CPbefore26.html#pump>`_.
* Pre-set values can be defined in this dialogue.

Fourchette de visualisation
-----------------------------------------------------------
* Define which part of the graph on the home screen shall be you target range and be filled with green background.

  .. image:: ../images/Pref2020_OV_Range2.png
    :alt: Préférences > Fourchette de visualisation

Raccourcir les titres des onglets
-----------------------------------------------------------
* See more tab titles on screen. 
* For example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.

  .. image:: ../images/Pref2020_OV_Tabs.png
    :alt: Préférences > Onglets

Afficher les notes dans les boîtes de dialogue
-----------------------------------------------------------
* Gives you the option to add short text notes to your treatments (bolus wizard, carbs, insulin...) 

  .. image:: ../images/Pref2020_OV_Notes.png
    :alt: Préférences > Notes dans les boîtes de dialogue
  
Voyants d'état
-----------------------------------------------------------
* Status lights give a visual warning for 
      
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Sensor age
   * Battery age
   * Battery level (%)

* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* In versions prior to AAPS 2.7 settings for status lights had to be made in Nightscout settings.

  .. image:: ../images/Pref2020_OV_StatusLights2.png
    :alt: Préférences > Voyants d'état

Paramètres Avancés
-----------------------------------------------------------
Deliver this part of bolus wizard result
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Paramètre général permettant de ne livrer qu'une partie du résultat de l'assistant de bolus. 
* Seul le pourcentage défini (doit être compris entre 10 et 100) du bolus calculé est délivré lors de l'utilisation de l'assistant bolus. 
* Le pourcentage est affiché dans l'assistant de bolus.

Superbolus
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Option to enable superbolus in bolus wizard.
* `Superbolus <https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/>`_ is a concept to "borrow" some insulin from basal rate in the next to hours to prevent spikes.

Traitements de sécurité
===========================================================
Age du patient
-----------------------------------------------------------
* Safety limits are set based on the age you select in this setting. 
* If you start hitting these hard limits (like max bolus) it's time to move one step up. 
* It's a bad idea to select higher then real age because it can lead to overdosing by entering the wrong value in insulin dialog (by skipping the decimal dot, for example). 
* If you want to know the actual numbers for these hard-coded safety limits, scroll to the algorithm feature you are using on `this page <../Usage/Open-APS-features.html>`_.

Maximum Bolus autorisé [U]
-----------------------------------------------------------
* Defines maximum amount of bolus insulin that AAPS is allowed to deliver at once. 
* Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. 
* Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale d’insuline de bolus que vous êtes susceptible d’avoir besoin pour un repas ou pour une dose de correction. 
* This restriction is also applied to the results of the bolus calculator.

Maximum de Glucides autorisé [g]
-----------------------------------------------------------
* Defines the maximum amount of carbs that AAPS bolus calculator is allowed to dose for.
* Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. 
* Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale de glucides que vous êtes susceptible d’avoir dans d'un repas.

Boucle
===========================================================
Mode APS
-----------------------------------------------------------
* Toggle between open and closed looping as well as low glucose suspend (LGS)
* **Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.  
* **Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.  
* **Low glucose suspend** gives you the possibility to enter into Low Glucose Suspend without the need for the reverting an objective.

Changement minimum [%]
-----------------------------------------------------------
* Lorsque vous utilisez le mode boucle ouverte, vous recevrez des notifications chaque fois que le programme AAPS vous recommande d'ajuster le débit de basal. 
* To reduce number of notifications you can either use a wider BG target range or increase percentage of the minimal request rate.
* Ce paramètre défini le changement relatif minimum qui déclenchera une notification.

Advanced Meal Assist (AMA) or Super Micro Bolus (SMB)
===========================================================
Depending on your settings in `config builder <../Configuration/Config-Builder.html>`_ you can choose between two algorithms:

* `Advanced meal assist (OpenAPS AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ - state of the algorithm in 2017
* `Super Micro Bolus (OpenAPS SMB) <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ - most recent algorithm for advanced users

OpenAPS AMA settings
-----------------------------------------------------------
* Allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. 
* More details about the settings and Autosens can be found in the `OpenAPS docs <http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html>`_.

Débit max en U/h pour une Basal Temp.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. 
* The value is measured in units per hour (U/h). 
* Il est conseillé de definir cette valuer de facon raisonnable et sensée. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. 
* For example, if the highest basal rate in your profile was 0.5 U/h you could multiply that by 4 to get a value of 2 U/h.
* See also `detailed feature description <../Usage/Open-APS-features.html#max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal>`_.

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
* `Autosens <../Usage/Open-APS-features.html#autosens>`_ looks at blood glucose deviations (positive/negative/neutral).
* It will try and figure out how sensitive/resistant you are based on these deviations and adjust basal rate and ISF based on these deviations.
* If you select "Autosens adjust target, too" the algorithm will also modify your glucose target.

Paramètres Avancés
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

Paramètres OpenAPS SMB
-----------------------------------------------------------
* In contrast to AMA, `SMB <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ does not use temporary basal rates to control glucose levels, but mainly small super micro boluses.
* You must have started `objective 10 <../Usage/Objectives.html#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb>`_ to use SMB.
* The first three settings are explained `above <./Configuration/Preferences2020.html#max-u-h-a-temp-basal-can-be-set-to>`_.
* Details on the different enable options are described in `OpenAPS feature section <../Usage/Open-APS-features.html#enable-smb>`_.
* *How frequently SMBs will be given in min* is a restriction for SMB to be delivered only every 4 min by default. This value prevents the system from issuing SMB too often (for example in case of a temp target being set). You should not change this setting unless you know exactly about consequences. 
* If sensitivity raises / lowers target is enabled `Autosens <../Usage/Open-APS-features.html#autosens>`_ will modify your glucose target according to your blood glucose deviations.
* If target is modified it will be displayed with a green background on your home screen.

  .. image:: ../images/Home2020_DynamicTargetAdjustment.png
    :alt: Target modified by autosens
  
Notification glucides requis
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* This feature is only available if SMB algorithm is selected.
* Eating of additional carbs will be suggested when the reference design detects that it requires carbs.
* In this case you will receive a notification which can be snoozed for 5, 15 or 30 minutes.
* Additionally the required carbs will be displayed in the COB section on your home screen.
* A threshold can  be defined - minimum amount of carbs needed to trigger notification. 
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

  .. image:: ../images/Pref2020_CarbsRequired.png
    :alt: Afficher les glucides requis sur l'écran d'accueil
  
Paramètres Avancés
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* Normally you do not have to change the settings in this dialogue!
* If you want to change them anyway make sure to read about details in `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html#>`_ and to understand what you are doing.

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
* The min_5m_carbimpact does define the default carb absorption impact per 5 minutes. For more details see `OpenAPS docs <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html?highlight=carbimpact#min-5m-carbimpact>`_.
* Standard value for AMA is 5, for SMB it's 8.
* The COB graph on the home screen indicates when min_5m_impact is being used by putting an orange circle at the top.

  .. image:: ../images/Pref2020_min_5m_carbimpact.png
    :alt: Graphique GA
  
Durée max d’absorption d'un repas
-----------------------------------------------------------
* Si vous mangez souvent des repas riches en matières grasses ou en protéines, vous devrez augmenter votre temps d'absorption des repas.

Advanced settings - autosens ratio
-----------------------------------------------------------
* Define min. and max. `autosens <../Usage/Open-APS-features.html#autosens>`_ ratio.
* Normally standard values (max. 1.2 and min. 0.7) should not be changed.

Paramètres de la pompe
===========================================================
The options here will vary depending on which pump driver you have selected in `Config Builder <../Configuration/Config-Builder.html#pump>`_.  Appairez et réglez votre pompe selon les instructions relatives à la pompe :

* `DanaR Insulin Pump <../Configuration/DanaR-Insulin-Pump.html>`_ 
* `DanaRS Insulin Pump <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu Chek Combo Pump <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu Chek Insight Pump <../Configuration/Accu-Chek-Insight-Pump.html>`_ 
* `Medtronic Pump <..//Configuration/MedtronicPump.html>`_

Si vous utilisez AndroidAPS pour une boucle ouverte, vérifiez que vous avez sélectionné Pompe virtuelle Pump dans le Générateur de configuration.

NSClient
===========================================================

  .. image:: ../images/Pref2020_NSClient.png
    :alt: NSClient

* Set your *Nightscout URL* (i.e. https://yourwebsitename.herokuapp.com) and the *API secret* (a 12 character password recorded in your Heroku variables).
* This enables data to be read and written between both the Nightscout website and AndroidAPS.  
* Vérifiez deux fois les fautes de frappe ici si vous êtes coincé dans l'objectif 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
* *Log app start to NS* will record a note in your Nightscout careportal entries every time the app is started.  The app should not be needing to start more than once a day; more frequently than this suggests a problem (i.e. battery optimization not disabled for AAPS). 
* If activated changes in `local profile <../Configuration/Config-Builder.html#local-profile-recommended>`_ are uploaded to your Nightscout site.

Paramètres de connexion
-----------------------------------------------------------

  .. image:: ../images/ConfBuild_ConnectionSettings.png
    :alt: Paramètres de connexion NSClient  
  
* Restrict Nightscout upload to Wi-Fi only or even to certain Wi-Fi SSIDs.
* If you want to use only a specific WiFi network you can enter its WiFi SSID. 
* Multiple SSIDs can be separated by semicolon. 
* Pour supprimer tous les SSID, entrez un espace dans la zone.

Options d'alarme
-----------------------------------------------------------
* Alarm options allows you to select which default Nightscout alarms to use through the app.  
* For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your `Heroku variables <http://www.nightscout.info/wiki/welcome/website-features#customalarms>`_. 
* They will only work whilst you have a connection to Nightscout and are intended for parent/carers. 
* If you have the CGM source on your phone (i.e. xDrip+ or Dexcom patched app) then use those alarms instead.

Paramètres Avancés
-----------------------------------------------------------

  .. image:: ../images/Pref2020_NSClientAdv.png
    :alt: NS Client advanced settings

* Most options in advanced settings are self-explanatory.
* *Enable local broadcasts* will share your data to other apps on the phone such as xDrip+. 

  * Dexcom patched app does not broadcast directly to xDrip+. 
  * You need to `go through AAPS <../Configuration/Config-Builder.html#bg-source>`_ and enable local broadcast in AAPS to use xDrip+ alarms.
  
* *Always use basal absolute values* must be activated if you want to use Autotune properly. See `OpenAPS documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/understanding-autotune.html>`_ for more details on Autotune.
* **Do not activate this when using `Insight pump <../Configuration/Accu-Chek-Insight-Pump#settings-in-aaps>`_!**  It would lead to false TBR settings in Insight pump.

Communicateur SMS
===========================================================
* Options will only be displayed if SMS communicator is selected in `Config Builder <../Configuration/Config-Builder.html#sms-communicator>`_.
* This setting allows remote control of the app by texting instructions to the patient's phone which the app will follow such as suspending loop, or bolusing.  
* Further information is described in `SMS Commands <../Children/SMS-Commands.html>`_.
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

* You can help develop AAPS further by sending crash reports to the developers.

Paramètres de maintenance
===========================================================

  .. image:: ../images/Pref2020_Maintenance.png
    :alt: Paramètres de maintenance

* Standard recipient of logs is logs@androidaps.org.
* If you select *Encrypt exported settings* these are encrypted with your `master password <../Configuration/Preferences.html#master-password>`_. In this case master password has to be entered each time settings are exported or imported.
