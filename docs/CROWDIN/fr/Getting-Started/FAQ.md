# Foire Aux Questions (FAQ)

Comment ajouter des questions à la FAQ : suivez ces [instructions](../make-a-PR.md)

# Généralités

## Can I just download the AAPS installation file?

Non. There is no downloadable apk file for AAPS. Vous devez le [générer](../Installing-AndroidAPS/Building-APK.md) vous-même. En voici la raison :

AAPS is used to control your pump and give insulin. Selon la réglementation actuelle, en Europe, tous les systèmes de classe IIa ou IIb, sont des dispositifs médicaux qui nécessitent une approbation réglementaire (un marquage CE) qui nécessitent diverses études et approbations. La distribution d'un dispositif non homologué est illégal. Des réglementations similaires existent dans d'autres parties du monde.

Ce règlement n'est pas limité qu'aux ventes (dans le sens d'obtenir de l'argent pour quelque chose), mais s'applique à n'importe quel moyen de distribution (même en accès gratuit). Construire vous même un appareil médical est la seule façon d'utiliser l'application en respectant ces règlements.

C'est pourquoi les apk ne sont pas disponibles.

(FAQ-how-to-begin)=

## Comment faire pour commencer ?

Tout d'abord, vous devez **obtenir des composants matériels de la boucle** :

- Une [pompe à insuline prise en charge](./Pump-Choices.md), 
- an [Android smartphone](Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- un système de [Mesure de Glycémie en Continu (MGC)](../Configuration/BG-Source.md). 

Deuxièmement, vous devez **configurer votre matériel**. Voir [exemple de configuration avec le tutoriel étape par étape](Sample-Setup.md).

Thirdly, you have to **setup your software components**: AAPS and CGM/FGM source.

Quatrièmement, vous devez apprendre et **comprendre le fonctionnement de référence OpenAPS pour vérifier vos paramètres de traitement**. Le principe fondateur de boucle fermée est que votre débit de basal et vos ratios Glucides/Insuline (G/I) et Sensibilité à l'Insuline (SI) sont bien déterminés. Toutes les recommandations supposent que vos besoins en basal sont satisfaits et que les pics ou les creux que vous voyez sont le résultat d'autres facteurs qui nécessitent par conséquent des ajustements (exercices, stress, etc.). Les ajustements que la boucle fermée peut effectuer ont été limités pour des raisons de sécurité (voir Débit Basal Temporaire maximum autorisé dans [Conception de référence OpenAPS](https://openaps.org/reference-design/)), ce qui signifie que vous ne devez pas perdre de la marge de manœuvre pour corriger un débit de basal erroné. Si par exemple vous êtes souvent bas à l'approche d'un repas, il est probable que vos débits de basal nécessitent un ajustement. Vous pouvez utiliser [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) pour analyser un grand nombre de données pour voir comment les débit de basal et/ou la SI doivent être ajustés, et aussi si le ratio G/I doit être modifié. Vous pouvez aussi tester et configurer vos débits de basal [à l'ancienne](https://integrateddiabetes.com/basal-testing/).

## Quels sont les aspects pratiques de la boucle ?

### Protection par mot de passe

Si vous ne voulez pas que vos préférences soient facilement modifiées, vous pouvez protéger le menu Préférences par un mot de passe en sélectionnant dans les préférences "Mot de passe pour paramètres" et en tapant le mot de passe choisi. La prochaine fois que vous allez dans le menu Préférences, il demandera ce mot de passe avant d'aller plus loin. Si plus tard vous souhaitez supprimer l'option de mot de passe, allez dans "Mot de passe pour paramètres" et supprimez le texte.

### Montres connectées Android Wear

If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AAPS are not blocked. La confirmation de l'action se fait par notification.

(FAQ-disconnect-pump)=

### Débrancher la pompe

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](Screenshots-loop-status).

### Recommandations non seulement basées sur une seule lecture MGC

Pour plus de sécurité, les recommandations faites ne sont pas basées sur une unique lecture MGC, mais sur le delta moyen. Therefore, if you miss some readings it may take a while after getting data back before AAPS kicks in looping again.

### Autres lectures

Il y a plusieurs blogs avec de bons conseils pour vous aider à comprendre les aspects pratiques de la boucle :

- [Réglage fin des Paramètres](https://seemycgm.com/2017/10/29/fine-tuning-settings/) Voir ma MGC
- [Pourquoi la DAI est importante](https://seemycgm.com/2017/08/09/why-dia-matters/) Voir ma MGC
- [Limiter les pics de repas](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones et autosens](https://seemycgm.com/2017/06/06/hormones-2/) Voir ma MGC

## Quel équipement d'urgence est-il recommandé d'avoir sur soi ?

Vous devez avoir le même équipement d'urgence avec vous, comme tous les autres diabétique de T1 avec une pompe à insuline. When looping with AAPS it is strongly recommended to have the following additional equipment with or near to you:

- Pack de batteries et câbles pour charger votre smartphone, votre montre et, le cas échéant, votre lecteur BT ou votre périphérique de connection
- Piles de la Pompe
- Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## Comment puis-je fixer le capteur MGC/MGF en toute sécurité ?

Vous pouvez le coller. Il existe plusieurs « overpatchs » pré-troués adaptés aux systèmes MGC disponibles (recherchez sur Google, eBay ou Amazon). Certains boucleur utilisent également des pansements hydrofilm standard ou des bandes adhésives moins chères.

Vous pouvez le fixer. Vous pouvez également acheter un brassard pour maintenir le MGC/MGF en place (recherche Google, eBay ou Amazon).

# AAPS settings

La liste suivante a pour but de vous aider à optimiser les paramètres. Il peut être préférable de commencer par le haut et de travailler vers le bas. Essayez de valider un seul paramètre avant d'en changer un autre. Travaillez avec de petites étapes plutôt que de faire de grands changements à la fois. Vous pouvez utiliser [Autotune](https://autotuneweb.azurewebsites.net/) pour guider votre réflexion, même s'il ne doit pas être suivie aveuglément : il peut ne pas fonctionner correctement pour vous ou en toutes circonstances. Notez que les paramètres interagissent les uns avec les autres - vous pouvez avoir des paramètres "erronés" qui fonctionnent bien ensemble dans certaines circonstances (par exemple si une basal trop élevé se produit en même temps qu'une Gly trop élevée) mais pas dans d'autres. Cela signifie que vous devez tenir compte de tous les paramètres et vérifier qu'ils fonctionnent ensemble dans une variété de circonstances.

## Durée d'Action de l'Insuline (DAI)

### Description & test

La durée que met l'insuline pour descendre à zéro.

C'est très souvent paramétré trop court. La plupart des gens voudront au moins 5 heures, voire 6 ou 7 heures.

(FAQ-impact)=

### Impact

Une DAI trop courte peut conduire à des hypoglycémies. Et vice-versa.

Si la DAI est trop courte, AAPS pensera que votre bolus précédent est entièrement consommé trop tôt, et si la glycémie est encore élevée, il vous injectera plus d'insuline. (En pratique, il n’attend pas aussi longtemps, mais il prédit ce qui va se passer et continue d’ajouter de l’insuline). Cela crée essentiellement un «empilement d'insuline» dont AAPS n'est pas au courant.

L'exemple d'une DAI trop courte est une hyperglycémie suivie d'une correction excessive de AAPS et d'une hypoglycémie derrière.

## Débits de basal (U/h)

### Description & test

La quantité d'insuline nécessaire, pendant une durée d'une heure, pour maintenir glycémie à un niveau stable.

Testez vos débits de basal en suspendant la boucle, en jeûnant, en attendant 5 heures après la nourriture, et en voyant comment la glycémie change. Répétez plusieurs fois.

Si la glycémie baisse, le débit de basal est trop élevé. Et vice-versa.

### Impact

Un débit de basal trop élevé peut conduire à des hypoglycémies. Et vice-versa.

'Principes de base' de AAPS par rapport au débit de basal par défaut. Si le débit de basal est trop élevé, un « zéro-temp » comptabilisera une IA négative plus importante qu’il ne le devrait. Cela conduira AAPS à faire des corrections plus importante qu'il ne le devrait pour amener l'IA à zéro.

Ainsi, un débit de base trop élevé créera des hypoglycémies, à la fois avec le débit par défaut, mais également pendant quelques heures, lorsque AAPS fera les corrections pour atteindre la cible.

Inversement, un débit de basal trop faible peut conduire à des hyperglycémie, et une impossibilité à ramener les niveaux vers la cible.

## Sensibilité à l'Insuline (SI) (mmol/l/U ou mg/dl/U)

### Description & test

La diminution de glycémie prévue suite à l'administration d'1U d'insuline (en anglais ISF).

En supposant que le débit de base est correct, vous pouvez la tester en suspendant la boucle, en vérifiant que l'IA est nulle, et en prenant quelques carrés de sucre pour atteindre un niveau de glycémie "élevé" et stable.

Ensuite, prenez la quantité estimée d'insuline pour atteindre votre glycémie cible : (Gly élevée - Gly Cible) / SI

Soyez prudent, car elle est bien souvent trop faible. Trop basse signifie qu'1 U va faire baisser la glycémie plus vite que prévu.

### Impact

**Une SI plus basse** (par exemple 40 au lieu de 50) signifie que l'insuline va moins faire baisser votre glycémie pour une unité. Ceci conduit à une correction plus agressive / plus forte de la boucle avec **plus d'insuline**. Si elle est trop basse, cela peut conduire à des hypoglycémies.

**Une ISF plus haute** (par exemple 45 au lieu de 35) signifie que l'insuline va plus faire baisser votre glycémie pour une unité. Ceci conduit à une correction moins agressive / plus faible de la boucle avec **moins d'insuline**. Si elle est trop élevée, cela peut conduire à des hyperglycémies.

**Par exemple :**

- Glycémie est à 190 mg/dl (10,5 mmol) et la cible est à 100 mg/dl (5,6 mmol). 
- Donc, vous voulez une correction de 90 mg/dl (= 190 - 100).
- SI = 30 -> 90 / 30 = 3 unités d'insuline
- SI = 45 -> 90 / 45 = 2 unités d'insuline

Une SI trop faible (pas rare) peut entraîner des "sur-corrections", car AAPS pense qu'il a besoin de plus d'insuline que nécessaire pour corriger une glycémie élevée. Cela peut conduire à des glycémies en "montagnes russes" (surtout à jeun). Dans ce cas, vous devez augmenter votre SI. Cela conduira AAPS à donner de plus petites doses de correction, et évitera une sur-correction d'une hyperglycémie suivie d'une hypoglycémie.

Inversement, une SI trop élevée peut entraîner une sous-correction, ce qui signifie que votre glycémie reste au-dessus de la cible – c'est particulièrement perceptible après une nuit.

## Rapport Glucides/Insuline (G/I) (g/U)

### Description & test

La quantité de glucides en grammes pour chaque unité d'insuline.

En anglais les acronymes utilisés sont I:C, IC ou également Ratio Carbone (CR).

En supposant que le débit de basal est correct, vous pouvez tester en vérifiant que l'IA est nulle et que vous êtes à l'objectif glycémique, en mangeant une quantité exacte de glucides connue, et en prenant la valeur estimée d'insuline basée sur le rapport actuel de G/I. Le mieux est de manger de la nourriture de votre mangez habituellement à ce moment de la journée et de compter ses glucides précisément.

> **REMARQUE :**
> 
> Dans certains pays européens, des unités de pain ont été utilisées pour déterminer la quantité d'insuline nécessaire à l'alimentation. A l'origine 1 unité de pain est équivalent à 12g de glucides, mais plus tard certains ont changés la référence à 10g de glucides.
> 
> Dans ce modèle, la quantité de glucides est la référence et la quantité d'insuline variable. ("Quelle quantité d'insuline est nécessaire pour couvrir une unité de pain?")
> 
> Lors de l'utilisation du ratio G/I, la quantité d'insuline est la référence et la quantité de glucides est variable. ("Combien de glucides peuvent être couverts par une unité d'insuline?")
> 
> Exemple :
> 
> Facteur pour une unité de pain (1 UP = 12g glucides) : 2,4 U/UP -> Vous avez besoin de 2,4 unités d'insuline quand vous mangez 1 UP.
> 
> G/I correspondant : 12g / 2,4 U = 5,0 g/U -> 5,0g de glucides peuvent être couverts avec une unité d'insuline.
> 
> Facteur d'UP 2,4 U / 12g ===> G/I = 12g / 2,4 U = 5,0 g/U
> 
> Les tables de conversion sont disponibles en ligne : [ici](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impact

**Diminution du G/I ** = moins de glucides par unité, c'est à dire que vous avez besoin de plus d'insuline pour une quantité fixe de glucides. Peut aussi être appelé "plus agressif".

**Augmentation du G/I** = plus de glucides par unité, c'est à dire que vous avez besoin de moins d'insuline pour une quantité fixe de glucides. Peut aussi être appelé "moins agressif".

Si, après que le repas ait été digéré et que l'IA est revenu à zéro, votre glycémie reste plus élevée qu'avant avoir mangé, il y a de fortes chances que le ratio G/I soit trop élevé. Inversement, si votre glycémie est inférieure à celle précédent le repas, le ratio G/I est trop faible.

# Algorithme APS

## Pourquoi est-ce que cela montre "dia: 3" dans l'onglet "OPENAPS AMA" même si j'ai une DAI différente dans mon profil ?

![AMA 3h](../images/Screenshot_AMA3h.png)

Dans l'AMA, DAI ne signifie pas "Durée d'Action de l'Insuline". C'est un paramètre qui était connecté au DAI. Maintenant, cela signifie "à quel moment la correction devrait être terminée". Cela n'a rien à voir avec le calcul de l'IA. Dans OpenAPS SMB, ce paramètre n'est plus nécessaire.

## Profil

### Pourquoi utiliser une DAI min. de 5h (heure de fin de l'insuline) au lieu de 2-3h ?

Bien expliqué dans [cet article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). N'oubliez pas d'`ACTIVER LE PROFIL` après avoir changé votre DAI.

### Pourquoi la boucle réduit-elle fréquemment ma glycémie à des valeurs hypoglycémiques sans GA ?

Tout d'abord, vérifiez votre débit de basal et faites un test de débits de basal sans glucides. S'il est correct, c'est généralement provoqué par une SI trop faible. Une SI trop basse ressemble généralement à ceci :

![SI trop faible](../images/isf.jpg)

### Quelles sont les causes des pics post-prandiaux en boucle fermée ?

Tout d'abord, vérifiez votre débit de basal et faites un test de débits de basal sans glucides. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. Si votre glycémie est trop élevée après le repas et encore trop élevée une fois les glucides absorbés, pensez à diminuer votre G/I avec votre diabétologue. Si votre glycémie est trop élevée avec des GA et trop faible après l'absorption complète des glucides, pensez à augmenter votre ratio G/I et faite un prébolus avec un décalage horaire vu avec votre diabétologue.

# Autres paramètres

## Paramètres Nightscout

### AAPS NSClient says 'not allowed' and does not upload data. Que puis-je faire ?

Dans NSClient, vérifiez les 'Paramètres de connexion'. Peut-être n'êtes-vous pas connecté à un Wi-Fi autorisé ou vous avez activé "Uniquement pendant la charge" et votre câble de charge n'est pas branché.

## Paramètres MGC

### Why does AAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AAPS OpenAPS-tab. Voir [Lissage des données de glycémie](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) pour plus de détails.

## Pompe

### Où placer la pompe ?

Il y a de nombreuses possibilités de placer la pompe. Peu importe si vous êtes en boucle fermée ou pas.

### Piles

La boucle peut réduire la durée de vie de la pile de la pompe plus rapidement que la normale car le système interagit bien plus qu'un utilisateur manuel. Il est préférable de changer la pile à 25% car la communication devient alors difficile. Vous pouvez définir des alarmes d'avertissement pour la pile de la pompe à l'aide de la variable PUMP_WARN_BATT_P dans votre site Nightscout. Les astuces pour augmenter la durée de vie de la pile sont les suivantes :

- réduire la durée d'affichage de l'écran LCD (dans le menu des paramètres de la pompe)
- réduire la durée du rétro-éclairage (dans le menu des paramètres de la pompe)
- sélectionnez les paramètres de notification à un bip plutôt que de vibrer (dans le menu des paramètres de la pompe)
- only press the buttons on the pump to reload, use AAPS to view all history, battery level and reservoir volume.
- AAPS app may often be closed to save energy or free RAM on some phones. When AAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. Cela consomme de la batterie. Pour voir si c'est le cas, allez dans Préférences > NSClient et activer l'option 'Démarrage de l'app journaux vers NS'. Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, whitelist AAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    Par exemple, pour l'inscire sur la liste blanche avec un téléphone Samsung fonctionnant sous Android Pie :
    
    - Accédez à Paramètres -> Maintenance de l'appareil -> Batterie 
    - Scroll until you find AAPS and select it
    - Désélectionnez "Mettre l'application en veille"
    - AUSSI allez dans Paramètres -> Applications -> (Trois points en haut à droite de l'écran), sélectionnez "accès spécial" -> Optimiser util. de la batterie
    - Scroll to AAPS and make sure it is de-selected.

- nettoyez les bornes de la pile avec un tampon d'alcool pour s'assurer qu'aucune cire ou draisse de fabrication ne reste.

- pour les [pompes Dana R/RS](../Configuration/DanaRS-Insulin-Pump.md) la procédure de démarrage établit un courant élevé à travers la batterie pour briser de manière ciblée le film passif (cela empêche la perte d'énergie pendant le stockage) mais cela ne suffit pas toujours à la casser à 100%. Supprimez et réinsérez la batterie 2 à 3 fois jusqu'à ce qu'elle affiche 100 % à l'écran, ou utilisez la clé de batterie pour faire un court circuit bref de la batterie avant de l'insérer en appliquant aux deux bornes une fraction de seconde.
- see also more tips for [particular types of battery](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

### Changement des réservoirs et des canules

The change of cartridge cannot be done via AAPS but must be carried out as before directly via the pump.

- Long press on "Open Loop"/"Closed Loop" on the Home tab of AAPS and select 'Suspend Loop for 1h'
- Now nnect the pump and change the reservoir as per pump instructions.
- Ainsi le remplissage de la tubulure et de la canule peuvent être faites directement sur la pompe. Dans ce cas utilisez le [bouton AMORCER/REMPLIR](CPbefore26-pump) dans l'onglet Actions pour uniquement enregistrer le changement.
- Une fois reconnecté à la pompe, continuez la boucle en appuyant sur "Suspendu (X m)".

Le changement d'une canule n'utilise cependant pas la fonction "Remplir tubulure" / "Remplir canule" de la pompe, mais remplit l'ensemble de perfusion et/ou la canule à l'aide d'un bolus qui n'apparaît pas dans l'historique des bolus. Cela signifie qu'il n'interrompt pas un débit de basal temporaire en cours d'exécution. On the Actions (Act) tab, use the [PRIME/FILL button](CPbefore26-pump) to set the amount of insulin needed to fill the infusion set and start the priming. Si la quantité n'est pas suffisante, répétez le remplissage. Vous pouvez définir les quantités par défaut dans les Préférences > Autres > Valeurs prédéfinies pour remplir&amorcer. Consultez les notices de vos canules et tubulures pour savoir combien d'unités doivent être injectées en fonction de la longueur de l'aiguille et de la longueur de la tubulure.

## Fonds d'écran

You can find the AAPS wallpaper for your phone on the [phones page](Phones-phone-background).

## Utilisation quotidienne

### Hygiène

#### Que faire pour prendre une douche ou un bain?

Vous pouvez retirer la pompe pour prendre une douche ou un bain. Pour ce court laps de temps, vous pouvez ne pas en avoir besoin, mais vous devez dire à AAPS que vous avez été déconnecté pour que les calculs IOB soient corrects. Voir [description ci-dessus](FAQ-disconnect-pump).

### Travail

Selon votre de travail, vous pouvez peut-être utiliser différents paramètres de traitement pendant les jours travaillés. En tant que boucleur, vous devriez envisager un [changement de profil](../Usage/Profiles.md) pour votre journée de travail habituelle. Par exemple, vous pouvez passer à un profil supérieur à 100 % si vous avez un emploi moins fatigant (par ex. assis derrière un bureau), ou moins de 100 % si vous êtes actif et debout toute la journée. You could also consider a high or low temporary target or a [time shift of your profile](Profiles-time-shift) when working much earlier or later than regular, of if you work different shifts. Vous pouvez aussi créer un second profil (par exemple "maison" et "jour de travail") et faire un changement de profil quotidien vers le profil dont vous avez besoin.

## Activités de loisirs

(FAQ-sports)=

### Sports

Vous devez retravailler vos vieilles habitudes sportives à partir de l'époque "d'avant-boucle". Si vous consommez simplement des glucides de sportifs comme avant, la boucle fermée les reconnaîtra et les corrigera en conséquence.

Donc, vous auriez plus de glucides à bord, mais en même temps, la boucle les neutraliserait en libérerant de l'insuline.

Lors de la boucle, vous devriez essayer ces étapes :

- Faite un [changement de profil](../Usage/Profiles.md) < 100%.
- Set an [activity temp target](temptarget-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](Open-APS-features#enable-smb-always) are disabled.

Le pré-traitement et le post-traitement de ces paramètres sont importants. Faite les changements suffisament tôt avant le sport et tenez compte de l'effet sur les muscles après.

Si vous faites du sport régulièrement au même moment (par exemple entrainement régulier dans votre salle de sport), vous pouvez envisager d'utiliser des règles [d'automatisation](../Usage/Automation.md) pour faire des changements de profil et mettre des CT. L'automatisation basée sur l'emplacement peut également être une idée, mais rend l'anticipation du traitement plus difficile.

Le pourcentage du changement de profil, la valeur de votre cible temporaire d'activité et le meilleur moment pour effectuer ces changements sont propres à chacun. Commencez prudemment si vous recherchez la valeur qui vous convient (commencez par un pourcentage faible et une CT plus élevée).

### Sexe

You can remove the pump to be 'free', but you should tell AAPS so that the IOB calculations are correct. Voir [description ci-dessus](FAQ-disconnect-pump).

### Boire de l'alcool

La consommation d'alcool est dangereux en mode boucle fermée car l'algorithme ne peut pas prévoir correctement l'impact de l'alcool sur la glycémie. You have to check out your own method for treating this using the following functions in AAPS:

- désactivation de la boucle fermée et traitement du diabète manuellement ou
- réglage d'une cible de temp élevées et désactivation des RNS pour éviter l'augmentation de l'IA par la boucle en raison d'un repas non signalé
- faire un changement de profil pour nettement moins de 100% 

Lorsque vous buvez de l'alcool, vous devez toujours avoir un œil sur votre MGC pour éviter manuellement une hypoglycémie en mangeant des glucides.

### En veille

#### Comment puis-je boucler pendant la nuit sans rayonnement smartphone et WIFI ?

De nombreux utilisateurs mettent le téléphone en mode avion la nuit. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Activez le mode avion de votre mobile.
2. Attendez que le mode avion soit actif.
3. Activez le Bluetooth.

Maintenant vous ne recevez pas d'appels téléphonique, et vous n'êtes pas connecté à Internet. Mais la boucle est toujours en cours.

Certaines personnes ont découvert des problèmes de diffusion locale (AAPS ne recevant pas les valeurs Gly de xDrip+) lorsque le téléphone est en mode avion. Dans xDrip+ accédez à Paramètres > Paramètres Inter-app > Identifiez le récepteur, et entrez `info.nightscout.androidaps`.

![xDrip+ Paramètres interapp basiques Identifier le récepteur](../images/xDrip_InterApp_NS.png)

### Voyager

#### Comment traiter les changements de fuseau horaire ?

Avec les pompes Dana R et Dana R coréenne, vous n'avez rien à faire. Pour d'autres pompes, consultez la page [voyager avec différents fuseaux horaires avec une pompe](../Usage/Timezone-traveling.md) pour plus de détails.

## Rubriques médicales

### Hospitalisation

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Rendez-vous médical avec votre diabétologue

#### Rapports

Vous pouvez montrer vos rapports Nightscout (https://YOUR-NS-SITE.com/report) ou consulter [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Questions fréquentes sur Discord et leurs réponses...

## Mon problème n'est pas répertorié ici.

[Informations pour obtenir de l'aide.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Mon problème n'est pas listé ici, mais j'ai trouvé la solution

[Informations pour obtenir de l'aide.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Rappelez-nous d'ajouter votre solution à cette liste!**

## AAPS s’arrête tous les jours autour de la même heure.

Arrêter la protection Google Play. Vérifiez que les applications "nettoyant" (par ex. CCleaner, etc.) et désinstallez-les. AAPS / Menu 3 points / À propos / Suivre le lien "Garder l'application en cours d'exécution en arrière-plan" pour arrêter toutes les optimisations de batterie.

## Comment organiser mes sauvegardes ?

Exporter les paramètres très régulièrement : après chaque changement de pod, après modification de votre profil, lorsque vous avez terminé et validé un objectif, si vous changez votre pompe… Même si rien ne change, exportez une fois par mois. Conserver plusieurs anciens fichiers d'exportation.

Copiez sur un lecteur internet (Dropbox, Google etc) : toutes les apks que vous avez utilisés pour installer des applications sur votre téléphone (AAPS, xDrip, BYODA, Patched LibreLink…) ainsi que les fichiers de configuration exportés de toutes vos applications.

## J'ai des problèmes, des erreurs lors de la construction de l'application.

Veuillez

- vérifier [Dépannage d'Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) pour les erreurs typiques et
- suivre les conseils pour un accompagnement [pas à pas](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## Je suis coincé sur un objectif et j'ai besoin d'aide.

Effectuez une capure d'écran avec la question et les réponses. Postez les sur la chaine AAPS sur Discord. N'oubliez pas de préciser quelles options vous choisissez (ou pas) et pourquoi. Vous obtiendrez des conseils et de l'aide, mais vous devrez trouver les réponses vous-même.

## Comment réinitialiser le mot de passe dans AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## Comment réinitialiser le mot de passe dans AAPS v3.x ?

You find the documentation [here](update3_0-reset-master-password).

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

La façon la plus simple de faire travailler toutes ces pièces ensemble est de : 1/ Supprimer le lien depuis AAPS 2/ Éteindre le lien 3/ Sélectionner le menu 3 points AAPS pour quitter AAPS 4/ Faire un appui long sur l'icône AAPS, menu Android, infos sur l'application AAPS, Forcer l'arrêt AAPS, puis Supprimer la mémoire cache (Ne pas supprimer la mémoire principale !) 4bis/ Rarement certains téléphones peuvent avoir besoin d'un redémarrage ici. You can try without reboot. 5/ Allumer le smartphone 6/ Démarrer AAPS 7/ Sélectionner l'onglet Pod, menu à 3 points, recherche et connexion

## Erreur de compilation : file name too long

While trying to build I get an error stating the file name is too long. Solutions possibles : Déplacez vos sources vers un répertoire plus proche du répertoire racine de votre disque (par exemple "c:\src\AAPS-EROS").

Depuis Android Studio : Assurez-vous que la synchronisation et l'indexage "Gradle" sont terminés après avoir ouvert le projet et effectué un Pull depuis GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alerte : Version Dev. La boucle fermée est désactivée

AAPS is not running in "developer mode". AAPS shows the following message: "running dev version. La boucle fermée est désactivée".

Make sure AAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Où puis-je trouver les fichiers de paramètres ?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## Comment configurer les économies de batterie ?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Pump unreachable alerts several times a day or at night.

Votre téléphone peut suspendre les services AAPS ou même le Bluetooth, ce qui lui fait perdre la connexion au RL (voir les économies de batterie) Pensez à configurer les alertes injoignables à 120 minutes en allant dans le menu à trois points en haut à droite sélection Préférences->Alertes Locales >Seuil d'alerte pompe hors de portée [min].

## Où puis-je supprimer les traitements dans AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the NSClient remote app

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

Pour activer la fonctionnalité à distance NSClient, vous devez : 1) Installez l'application distante NSClient (la version doit correspondre à la version AAPS utilisé) 2) Exécutez l'application NSClient et passez par l'assistant de configuration pour accorder les autorisations requises et configurer l'accès à votre site Nightscout. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activer le profil dans l'application distante NSClient > Profil Après avoir fait cela, le profil sera défini, NSClient devrait afficher toutes les données d'AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPS NSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or NSClient remote.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. Si le triangle jaune est lié au changement de transmetteur G6, il disparaîtra après plusieurs heures (environ 24h). Dans le cas du Freestyle Libre, le triangle jaune restera. La boucle peut être fermée et fonctionnera correctement.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. Cela assure qu'il n'y a pas de commandes en cours d'exécution ou en file d'attente actives lorsque DASH perd la connexion 2) Mettez le téléphone en mode avion pour désactiver le BT (ainsi que le WiFi et les données mobiles). This way it is guaranteed AAPS and DASH can not communicate. 3) Exporter les paramètres (ce qui inclut l'état de DASH) 4) Copier le fichier de paramètres juste exporté depuis le téléphone (comme il est en mode avion et nous ne voulons pas changer cela, la façon la plus simple est d'utiliser le câble USB) 5) Copiez le fichier de paramètres sur le téléphone alternatif. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". Ceci est sûr car le téléphone n'a aucun moyen de communiquer avec DASH pour désactiver le Pod (il est toujours en mode avion) 2) La désactivation entraînera une erreur de communication - c'est normal. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## Comment importer les paramètres des versions antérieures d'AAPS dans AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.