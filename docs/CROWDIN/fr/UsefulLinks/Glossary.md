# Glossaire

**AAPS** = AndroidAPS est le nom de l'application Android.

**AAPSClient** = l'application de suivi pour les aidants. Sur un téléphone suiveur, elle suit l'**AAPS** d'un utilisateur via son site **Nightscout** et, une fois associée au téléphone **AAPS**, le contrôle à distance. À ne pas confondre avec **NSClient**. Plus d'infos → [Wiki - « L'application AAPSClient »](../RemoteFeatures/AapsClient.md) et [Contrôle maître ↔ client](#client-master-control).

**Activity** (Activité) = activité de l'insuline, qui représente la vitesse de baisse de l'IA. Voir [Wiki - « DIA »](#Config-Builder-insulin-dia) et le **BGI** qui y est lié.

**AID** = Automated Insulin Delivery (administration automatisée d'insuline). Le terme utilisé en général en pratique clinique et en recherche pour un système qui ajuste automatiquement l'administration d'insuline à partir des données du **CGM**. **APS** et **closed loop** (boucle fermée) veulent dire la même chose → voir aussi **OS-AID**.

**APS** = Artificial Pancreas System (système de pancréas artificiel) → voir aussi **AID**.

**AMA** = Advanced Meal Assist (assistance de repas avancée). Un algorithme qui permet à **AAPS** d'augmenter le débit basal de l'utilisateur de façon plus agressive après un bolus de repas. Plus d'infos → [Wiki - « Advanced Meal Assist (AMA) »](#Open-APS-features-advanced-meal-assist-ama).

**Adjustment Factor** (facteur d'ajustement) = utilisé dans le **SI dynamique** ; c'est une valeur entre 1 % et 300 % réglée dans les **Paramètres** de l'utilisateur. Il agit comme un multiplicateur sur la valeur de la **TDD**. Voir [Wiki - Facteur d'ajustement DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = un système qui affiche certaines fonctions d'un smartphone Android, dont **AAPS**, sur l'écran d'une voiture. Plus d'infos → [Wiki - « Android Auto »](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (paquet d'application Android). Un fichier d'installation de logiciel. Plus d'infos → [Wiki - « Compilation d'AAPS »](../SettingUpAaps/BuildingAaps.md).

**Autosens** = calcul de la sensibilité à l'insuline sur une fenêtre de 24 heures et de 8 heures, etc. Plus d'infos → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = plateforme de cloud computing pour héberger l'application web **Nightscout** → voir aussi **Nightscout**.

**BAT** = voyant d'état pour la pile de pompe faible, affiché dans la ligne d'état de l'écran principal d'**AAPS** → voir aussi **CAN** / **RES** / **SEN**.

**BG** = blood glucose (glycémie).

**BGI** = blood glucose impact (impact sur la glycémie). La mesure dans laquelle la glycémie (**BG**) « devrait » monter ou descendre en fonction de l'activité de l'insuline seule.

**BG source** (Source GLY) = un réglage d'AAPS qui configure la source des données de glycémie. Voir [Wiki - Source GLY](#Config-Builder-bg-source)

**Bridge** (pont) = un appareil supplémentaire qui transforme un **FGM** en **CGM**.

**BR** = Basal Rate (débit basal). La quantité d'insuline dans une plage horaire donnée pour maintenir la glycémie (**BG**) à un niveau stable. → voir aussi **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (compilez votre propre application Dexcom). Une façon de générer votre propre application Dexcom pour lire les données du capteur Dexcom G6.

**CAGE** = Cannula AGE (âge de la canule). Affiché sur l'écran principal d'**AAPS** et dans Nightscout, selon les saisies **Amorcer/Remplir** du careportal de l'utilisateur → voir aussi **Nightscout**.

**CAN** = voyant d'état pour un changement de canule en retard, affiché dans la ligne d'état de l'écran principal d'**AAPS** → voir aussi **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (MGC, mesure du glucose en continu) → voir aussi **FGM**.

**Closed Loop** (boucle fermée) = un système en boucle fermée qui ajuste automatiquement le débit basal de l'utilisateur selon un algorithme d'**AAPS** et les réglages du **Profil** de l'utilisateur, sans demander l'accord de l'utilisateur. Plus d'infos → Wiki - « boucle fermée » et voir aussi **HCL** / **FCL**.

**COB** = Carbs On Board (GA, glucides actifs). C'est la quantité de glucides encore en cours de digestion chez l'utilisateur → voir aussi IOB.

**CSF** = Carbs Sensitivity Factor (facteur de sensibilité aux glucides). c.-à-d. de combien la glycémie (**BG**) de l'utilisateur augmente pour 1 g de glucides absorbés.

**DIA** = Duration of Insulin Action (DAI, Durée d'Action de l'Insuline). Plus d'infos → [Wiki - « DIA »](#Config-Builder-insulin-dia) et voir aussi → [DIABETTECH - « DIA »](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Savings Time (heure d'été). Voir [Wiki - Changement de fuseau horaire et heure d'été](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (ou DynISF)** (SI dynamique) = une fonction d'**AAPS** qui adapte le facteur de sensibilité à l'insuline (**ISF**) de façon dynamique, selon la **TDD** et la glycémie (**BG**) de l'utilisateur.

**eCarbs** = extended Carbs (eGlucides, glucides étendus). Glucides répartis sur plusieurs heures (p. ex. pour couvrir les graisses et les protéines), ce qui permet à **AAPS** de répartir l'insuline comme un bolus étendu. Plus d'infos → [Wiki - « Glucides étendus / eGlucides »](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (boucle fermée complète). Une boucle qui n'a besoin d'aucune saisie de l'utilisateur au moment des repas : pas de comptage des glucides et pas de bolus de repas. Plus d'infos → Wiki - « boucle fermée complète » et voir aussi **HCL**.

**FGM** = Flash Glucose Monitor (mesure flash du glucose), comme le Freestyle Libre d'Abbott. Plus d'infos → Wiki - « Source GLY » et voir aussi « CGM ».

**git** = un outil utilisé pour stocker et télécharger le code source d'**AAPS**.

**GitHub** = un service web qui héberge le code source d'**AAPS** et sa gestion de versions (suivi des modifications des fichiers et coordination du travail sur ces fichiers, surtout en équipe), et qui peut aussi compiler l'application. Il est aussi nécessaire pour les mises à jour de l'**APK**. Plus d'infos → Wiki - « mise à jour de l'APK ».

**Glimp** = une application pour collecter les valeurs du Freestyle Libre.

**HCL (ou Hybrid Closed Loop)** (boucle fermée hybride) = une boucle qui automatise l'administration d'insuline entre les repas, mais où l'utilisateur doit toujours faire un bolus pour les repas. Presque tous les systèmes utilisés au quotidien, dont **AAPS**, sont des boucles fermées hybrides → voir aussi **FCL** / **Closed Loop**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (G/I, Rapport Glucides / Insuline). Notez que, par convention, l'unité est g/U, même si l'acronyme suggère l'inverse.

**IOB** = Insulin On Board (IA, insuline active). Insuline active dans le corps de l'utilisateur. Voir [Wiki - Insuline active (IA)](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (SI, facteur de sensibilité à l'insuline). La baisse de glycémie attendue pour une unité d'insuline. L'unité est soit mg/dl/U, soit mmol/l/U. Ces valeurs ne sont pas équivalentes sans conversion !

**Keystore (ou JKS)** = un Java Key Store (magasin de clés Java), un fichier chiffré qui contient vos certificats et clés de développeur personnels, nécessaires pour compiler (et recompiler) votre **AAPS**.

**LGS** = Low Glucose Suspend (AGB, Arrêt Glycémie Basse). Voir [Wiki - Arrêt Glycémie Basse](#KeyAapsFeatures-LGS)

**LineageOS** = système d'exploitation libre et open source pour smartphones, etc. Si vous utilisez une Accu-Chek Combo, voir [Wiki - Pompe Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Log files** (Fichiers journaux) = les enregistrements d'**AAPS** sur les actions de l'utilisateur (utiles pour le dépannage et le débogage). Plus d'infos → [Wiki - « Accès aux fichiers log »](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = IOB total maximum (IA max). C'est une fonction de sécurité qui empêche **AAPS** de délivrer plus d'insuline que les réglages de l'utilisateur ne le permettent. Plus d'infos → [Wiki - « IA totale maximale qu'OpenAPS ne peut pas dépasser »](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = fonction de sécurité qui calcule une absorption des glucides par défaut quand l'absorption ne peut pas être déterminée à partir des réactions de la glycémie de l'utilisateur. Plus d'infos → [Wiki - « Préférences »](#Preferences-min_5m_carbimpact).

**Nightscout** = projet open source pour consulter et rapporter les données du **CGM**. Le centre de données principal pour les données **AAPS** de l'utilisateur. Il peut générer des rapports pour consulter l'historique des données **Nightscout** de l'utilisateur, comme l'HbA1c estimée, le temps dans la cible, ou chercher des tendances dans les données avec un graphique en percentiles, etc.

**Nightscout** → voir aussi **Nightscout Reporter**. C'est particulièrement utile pour les parents qui suivent la gestion du diabète de leur enfant.

**Nightscout Reporter Tool** = un outil qui génère des rapports PDF à partir des données de l'application web Nightscout. Voir « Nightscout Reporter », « NS Reporter » sur Facebook.

**NSClient** (**NSClientV3**) = le plugin d'**AAPS** qui synchronise les données avec **Nightscout** (**Configuration** → **Communication**). Ce n'est pas la même chose qu'**AAPSClient**, l'application de suivi. Plus d'infos → [Wiki - « NSClient »](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (système de pancréas artificiel ouvert), le projet précurseur et la base d'AAPS.

**Open Loop system** (boucle ouverte) = une fonction d'**AAPS** qui recommande des ajustements, que l'utilisateur doit réaliser lui-même dans **AAPS**. Plus d'infos → [Wiki - « Boucle ouverte »](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = détection de sensibilité et « reference design implementation version 0/1 » (implémentation de référence, version 0/1). C'est l'algorithme principal derrière OpenAPS Wiki - détection de sensibilité.

**OS-AID** = Open-Source Automated Insulin Delivery (administration automatisée d'insuline open source). Un système **AID** construit à partir de logiciels open source, comme **AAPS**, **OpenAPS**, Loop ou Trio. Ces systèmes ne sont pas officiellement approuvés par les autorités de santé (FDA, NHS, etc.) → voir aussi **AID**.

**Peak time** (Pic) = moment de l'effet maximal de l'insuline injectée. Plus d'infos → [Wiki - « Durée d'action de l'insuline (DAI) et pic »](#Config-Builder-insulin-dia).

**PH** = Pump History (historique pompe). On peut le consulter dans l'historique des traitements d'**AAPS** : ouvrez le **menu** (☰) en haut à gauche de l'écran principal et sélectionnez **Traitements**.

**Predictions** (prédictions) = prédictions de la glycémie (**BG**) future, selon différents calculs. Plus d'infos → [Wiki - « courbes de prédiction »](#aaps-screens-prediction-lines).

**Profile** (Profil) = les réglages de traitement de base de l'utilisateur (débit basal, **DIA**, **IC**, **ISF**, cible de glycémie (**BG**)). **AAPS** utilise seulement les profils créés dans **AAPS** (**Gestion** → **Profil**), mais les **Profils** **Nightscout** peuvent être copiés (synchronisés) dans **AAPS**. Plus d'infos → [Wiki - « Votre profil AAPS »](../SettingUpAaps/YourAapsProfile.md).

**Profile switch** (Changement de profil) = passage (temporaire) du **Profil** de l'utilisateur à un autre **Profil** enregistré dans **AAPS**.

**Profile Percentage** (pourcentage de profil) = une hausse ou une baisse (temporaire) en pourcentage appliquée au **Profil** de l'utilisateur pendant une durée choisie.

**RES** = voyant d'état pour un changement de réservoir en retard, affiché dans la ligne d'état de l'écran principal d'**AAPS** → voir aussi **BAT** / **CAN** / **SEN**.

**RileyLink** = appareil open source qui fait le pont entre le Bluetooth Low Energy (BLE) et la communication radio 916 MHz (pour les anciennes pompes Medtronic) ou 433 MHz (pour les pompes Omnipod Eros).

**SAGE** = sensor age (âge du capteur). Il est affiché sur l'écran principal d'**AAPS** et dans **Nightscout**, selon les saisies **Insertion Capteur** du careportal de l'utilisateur → voir aussi **Nightscout**.

**SEN** = voyant d'état pour un changement de capteur en retard, affiché dans la ligne d'état de l'écran principal d'**AAPS** → voir aussi **BAT** / **CAN** / **RES**.

**Sensitivity detection** (Calcul de Sensibilité) = calcul de la sensibilité à l'insuline due à l'exercice, aux hormones, etc. voir aussi → [DIABETTECH - « Autosens »](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensor noise** (bruit du capteur) = terme qui décrit des lectures instables du **CGM**, qui donnent des valeurs de glycémie (**BG**) qui « sautent ». Plus d'infos → [Wiki - « Lissage des données de glycémie »](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. Une fonction d'**AAPS** pour délivrer l'insuline plus vite afin de corriger la glycémie (**BG**). Plus d'infos → [Wiki - « **SMB** »](#Open-APS-features-super-micro-bolus-smb) et voir aussi **UAM**.

**Super bolus** (Superbolus) = transfert d'insuline basale vers le bolus pour corriger la glycémie (**BG**) plus vite.

**TBB** = total base basal (total basal de base, somme du débit basal sur 24 heures) → voir aussi **TBR** / **TDD**.

**TBR** = temporary basal rate (DBT, débit basal temporaire) → voir aussi **TBB** / **TDD**.

**TDD** = total daily dose (DTQ, dose totale quotidienne : bolus + basal par jour) → voir aussi **TBB** / **TBR**.

**TT** = temporary target (CT, cible temporaire) : hausse ou baisse temporaire de la cible (plage) de glycémie (**BG**) de l'utilisateur, p. ex. pour un repas ou une activité sportive. Plus d'infos → [Wiki - « Cibles temporaires »](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (RNS, repas non signalés). Détection d'une hausse importante de la glycémie (**BG**) due aux repas, à l'adrénaline ou à d'autres influences, et tentative de la corriger. Plus d'infos → [Wiki - « RNS (UAM) »](#enable-uam) et voir aussi **SMB**.

**Virtual pump** (Pompe virtuelle) = une fonction d'**AAPS** qui permet à l'utilisateur d'essayer les fonctions d'**AAPS**, ou aux personnes diabétiques dont la pompe n'a pas de pilote **AAPS** de boucler → voir aussi **Open Loop**.

**Wallpaper** (fond d'écran) = image d'arrière-plan d'**AAPS**, voir la page des téléphones.

**xDrip** = logiciel open source pour lire les systèmes **CGM**.

**Zero-temp** = débit basal temporaire à 0 % (aucune insuline basale délivrée).

→ voir aussi [la documentation OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)