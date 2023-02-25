# Foire Aux Questions (FAQ)

Comment ajouter des questions à la FAQ : suivez ces [instructions](../make-a-PR.md)

# Généralités

## Puis-je télécharger le fichier d'installation d'AndroidAPS ?

Non. Il n'y a pas de fichier apk téléchargeable pour AndroidAPS. Vous devez le [générer](../Installing-AndroidAPS/Building-APK.md) vous-même. En voici la raison :

AndroidAPS est utilisé pour contrôler votre pompe et injecter de l'insuline. Selon la réglementation actuelle, en Europe, tous les systèmes de classe IIa ou IIb, sont des dispositifs médicaux qui nécessitent une approbation réglementaire (un marquage CE) qui nécessitent diverses études et approbations. La distribution d'un dispositif non homologué est illégal. Des réglementations similaires existent dans d'autres parties du monde.

Ce règlement n'est pas limité qu'aux ventes (dans le sens d'obtenir de l'argent pour quelque chose), mais s'applique à n'importe quel moyen de distribution (même en accès gratuit). Construire vous même un appareil médical est la seule façon d'utiliser l'application en respectant ces règlements.

C'est pourquoi les apk ne sont pas disponibles.

(FAQ-how-to-begin)=

## Comment faire pour commencer ?

Tout d'abord, vous devez **obtenir des composants matériels de la boucle** :

- Une [pompe à insuline prise en charge](./Pump-Choices.md), 
- un [smartphone Android](Phones.md) (l'iOS d'Apple n'est pas pris en charge par AndroidAPS - vous pouvez vérifier [iOS Loop](https://loopkit.github.io/loopdocs/)), et 
- un système de [Mesure de Glycémie en Continu (MGC)](../Configuration/BG-Source.md). 

Deuxièmement, vous devez **configurer votre matériel**. Voir [exemple de configuration avec le tutoriel étape par étape](Sample-Setup.md).

Troisièmement, vous devez **configurer vos composants logiciels** : AAPS et la source MGC/MGF.

Quatrièmement, vous devez apprendre et **comprendre le fonctionnement de référence OpenAPS pour vérifier vos paramètres de traitement**. Le principe fondateur de boucle fermée est que votre débit de basal et vos ratios Glucides/Insuline (G/I) et Sensibilité à l'Insuline (SI) sont bien déterminés. Toutes les recommandations supposent que vos besoins en basal sont satisfaits et que les pics ou les creux que vous voyez sont le résultat d'autres facteurs qui nécessitent par conséquent des ajustements (exercices, stress, etc.). Les ajustements que la boucle fermée peut effectuer ont été limités pour des raisons de sécurité (voir Débit Basal Temporaire maximum autorisé dans [Conception de référence OpenAPS](https://openaps.org/reference-design/)), ce qui signifie que vous ne devez pas perdre de la marge de manœuvre pour corriger un débit de basal erroné. Si par exemple vous êtes souvent bas à l'approche d'un repas, il est probable que vos débits de basal nécessitent un ajustement. Vous pouvez utiliser [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) pour analyser un grand nombre de données pour voir comment les débit de basal et/ou la SI doivent être ajustés, et aussi si le ratio G/I doit être modifié. Vous pouvez aussi tester et configurer vos débits de basal [à l'ancienne](https://integrateddiabetes.com/basal-testing/).

## Quels sont les aspects pratiques de la boucle ?

### Protection par mot de passe

Si vous ne voulez pas que vos préférences soient facilement modifiées, vous pouvez protéger le menu Préférences par un mot de passe en sélectionnant dans les préférences "Mot de passe pour paramètres" et en tapant le mot de passe choisi. La prochaine fois que vous allez dans le menu Préférences, il demandera ce mot de passe avant d'aller plus loin. If you later want to remove the password option then go into "password for settings" and delete the text.

### Montres connectées Android Wear

Si vous envisagez d'utiliser l'application Android Wear pour créer un bolus ou modifier des paramètres à partir de votre montre connectée, vous devez vous assurer que les notifications d'AndroidAPS ne sont pas bloquées. La confirmation de l'action se fait par notification.

(FAQ-disconnect-pump)=

### Débrancher la pompe

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AndroidAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AndroidAPS Home Screen](Screenshots-loop-status).

### Recommandations non seulement basées sur une seule lecture MGC

For safety, recommendations made are based on not one CGM reading but the average delta. Therefore, if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

### Autres lectures

There are several blogs with good tips to help you understand the practicalities of looping:

- [Réglage fin des Paramètres](https://seemycgm.com/2017/10/29/fine-tuning-settings/) Voir ma MGC
- [Pourquoi la DAI est importante](https://seemycgm.com/2017/08/09/why-dia-matters/) Voir ma MGC
- [Limiter les pics de repas](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones et autosens](https://seemycgm.com/2017/06/06/hormones-2/) Voir ma MGC

## Quel équipement d'urgence est-il recommandé d'avoir sur soi ?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AndroidAPS it is strongly recommended to have the following additional equipment with or near to you:

- Pack de batteries et câbles pour charger votre smartphone, votre montre et, le cas échéant, votre lecteur BT ou votre périphérique de connection
- Piles de la Pompe
- Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.md) for AndroidAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## Comment puis-je fixer le capteur MGC/MGF en toute sécurité ?

You can tape it. There are several pre-perforated 'overpatches' for common CGM systems available (search Google, eBay or Amazon). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it. You can also purchase upper arm bracelets that fix the CGM/FGM with a band (search Google, eBay or Amazon).

# Paramètres AndroidAPS

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Durée d'Action de l'Insuline (DAI)

### Description & test

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

(FAQ-impact)=

### Impact

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Débits de basal (U/h)

### Description & test

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Impact

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Sensibilité à l'Insuline (SI) (mmol/l/U ou mg/dl/U)

### Description & test

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Impact

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

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

Tout d'abord, vérifiez votre débit de basal et faites un test de débits de basal sans glucides. S'il est correct et que votre glycémie est en train d'atteindre votre cible une fois que les glucides sont complètement absorbés, essayez de définir une cible temporaire pour "Début Repas imminent" dans AAPS un peu avant le repas ou réfléchissez à faire un prébolus avec un décalage horaire adapté vu avec votre diabétologue. Si votre glycémie est trop élevée après le repas et encore trop élevée une fois les glucides absorbés, pensez à diminuer votre G/I avec votre diabétologue. Si votre glycémie est trop élevée avec des GA et trop faible après l'absorption complète des glucides, pensez à augmenter votre ratio G/I et faite un prébolus avec un décalage horaire vu avec votre diabétologue.

# Autres paramètres

## Paramètres Nightscout

### AndroidAPS NSClient indique 'non autorisé' et ne télécharge pas les données. Que puis-je faire ?

Dans NSClient, vérifiez les 'Paramètres de connexion'. Peut-être n'êtes-vous pas connecté à un Wi-Fi autorisé ou vous avez activé "Uniquement pendant la charge" et votre câble de charge n'est pas branché.

## Paramètres MGC

### Pourquoi ne AndroidAPS indique 'la source de glycémie actuelle ne supporte pas de filtrage avancé' ?

Si vous utilisez un autre MGC/MGF que le Dexcom G5 ou G6 en mode natif xDrip, vous obtiendrez cette alerte dans l'onglet AAPS OpenAPS SMB. Voir [Lissage des données de glycémie](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) pour plus de détails.

## Pompe

### Où placer la pompe ?

Il y a de nombreuses possibilités de placer la pompe. Peu importe si vous êtes en boucle fermée ou pas.

### Piles

La boucle peut réduire la durée de vie de la pile de la pompe plus rapidement que la normale car le système interagit bien plus qu'un utilisateur manuel. Il est préférable de changer la pile à 25% car la communication devient alors difficile. Vous pouvez définir des alarmes d'avertissement pour la pile de la pompe à l'aide de la variable PUMP_WARN_BATT_P dans votre site Nightscout. Les astuces pour augmenter la durée de vie de la pile sont les suivantes :

- réduire la durée d'affichage de l'écran LCD (dans le menu des paramètres de la pompe)
- réduire la durée du rétro-éclairage (dans le menu des paramètres de la pompe)
- sélectionnez les paramètres de notification à un bip plutôt que de vibrer (dans le menu des paramètres de la pompe)
- appuyez uniquement sur les boutons de la pompe pour recharger, utilisez AndroidAPS pour afficher tout l'historique, le niveau de la pile et le volume du réservoir.
- l'application AndroidAPS peut souvent être fermée pour économiser de l'énergie ou de la RAM libre sur certains téléphones. Lorsque AndroidAPS est réinitialisé à chaque démarrage, il établit une connexion Bluetooth avec la pompe et relit l'historique des débits de basal et des bolus. Cela consomme de la batterie. Pour voir si c'est le cas, allez dans Préférences > NSClient et activer l'option 'Démarrage de l'app journaux vers NS'. Nightscout recevra un événement à chaque redémarrage d'AndroidAPS, ce qui facilite le suivi du problème. Pour réduire cette situation, inscrivez AndroidAPS sur la la liste blanche des paramètres de la batterie du téléphone, pour que le moniteur d'alimentation arrète de la fermer.
    
    Par exemple, pour l'inscire sur la liste blanche avec un téléphone Samsung fonctionnant sous Android Pie :
    
    - Accédez à Paramètres -> Maintenance de l'appareil -> Batterie 
    - Faites défiler jusqu'à ce que vous trouviez AndroidAPS et sélectionnez la 
    - Désélectionnez "Mettre l'application en veille"
    - AUSSI allez dans Paramètres -> Applications -> (Trois points en haut à droite de l'écran), sélectionnez "accès spécial" -> Optimiser util. de la batterie
    - Faites défiler jusqu'à AndroidAPS et assurez-vous qu'elle est désélectionnée.

- nettoyez les bornes de la pile avec un tampon d'alcool pour s'assurer qu'aucune cire ou draisse de fabrication ne reste.

- pour les [pompes Dana R/RS](../Configuration/DanaRS-Insulin-Pump.md) la procédure de démarrage établit un courant élevé à travers la batterie pour briser de manière ciblée le film passif (cela empêche la perte d'énergie pendant le stockage) mais cela ne suffit pas toujours à la casser à 100%. Supprimez et réinsérez la batterie 2 à 3 fois jusqu'à ce qu'elle affiche 100 % à l'écran, ou utilisez la clé de batterie pour faire un court circuit bref de la batterie avant de l'insérer en appliquant aux deux bornes une fraction de seconde.
- see also more tips for [particular types of battery](Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

### Changement des réservoirs et des canules

Le changement de cartouche ne peut pas être fait via AAPS, mais doit être effectué comme avant directement via la pompe.

- Faites un appui long sur "Boucle Ouverte" / "Boucle Fermée" de l'onglet Accueil de AndroidAPS et sélectionnez 'Suspendre la Boucle pour 1h'
- Now nnect the pump and change the reservoir as per pump instructions.
- Ainsi le remplissage de la tubulure et de la canule peuvent être faites directement sur la pompe. Dans ce cas utilisez le [bouton AMORCER/REMPLIR](CPbefore26-pump) dans l'onglet Actions pour uniquement enregistrer le changement.
- Une fois reconnecté à la pompe, continuez la boucle en appuyant sur "Suspendu (X m)".

Le changement d'une canule n'utilise cependant pas la fonction "Remplir tubulure" / "Remplir canule" de la pompe, mais remplit l'ensemble de perfusion et/ou la canule à l'aide d'un bolus qui n'apparaît pas dans l'historique des bolus. Cela signifie qu'il n'interrompt pas un débit de basal temporaire en cours d'exécution. On the Actions (Act) tab, use the [PRIME/FILL button](CPbefore26-pump) to set the amount of insulin needed to fill the infusion set and start the priming. Si la quantité n'est pas suffisante, répétez le remplissage. Vous pouvez définir les quantités par défaut dans les Préférences > Autres > Valeurs prédéfinies pour remplir&amorcer. Consultez les notices de vos canules et tubulures pour savoir combien d'unités doivent être injectées en fonction de la longueur de l'aiguille et de la longueur de la tubulure.

## Fonds d'écran

Vous pouvez trouver le fond d'écran AAPS pour votre téléphone sur la [page téléphones](Phones-phone-background).

## Utilisation quotidienne

### Hygiène

#### Que faire pour prendre une douche ou un bain?

Vous pouvez retirer la pompe pour prendre une douche ou un bain. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](FAQ-disconnect-pump).

### Travail

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](Profiles-time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Activités de loisirs

(FAQ-sports)=

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

- Faite un [changement de profil](../Usage/Profiles.md) < 100%.
- Set an [activity temp target](temptarget-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sexe

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](FAQ-disconnect-pump).

### Boire de l'alcool

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

- désactivation de la boucle fermée et traitement du diabète manuellement ou
- réglage d'une cible de temp élevées et désactivation des RNS pour éviter l'augmentation de l'IA par la boucle en raison d'un repas non signalé
- faire un changement de profil pour nettement moins de 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### En veille

#### Comment puis-je boucler pendant la nuit sans rayonnement smartphone et WIFI ?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Activez le mode avion de votre mobile.
2. Attendez que le mode avion soit actif.
3. Activez le Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Paramètres interapp basiques Identifier le récepteur](../images/xDrip_InterApp_NS.png)

### Voyager

#### Comment traiter les changements de fuseau horaire ?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Rubriques médicales

### Hospitalisation

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Rendez-vous médical avec votre diabétologue

#### Rapports

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Questions fréquentes sur Discord et leurs réponses...

## Mon problème n'est pas répertorié ici.

[Information to get help.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Mon problème n'est pas listé ici, mais j'ai trouvé la solution

[Information to get help.](Connect-with-other-users-i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS s’arrête tous les jours autour de la même heure.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## Comment organiser mes sauvegardes ?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## J'ai des problèmes, des erreurs lors de la construction de l'application.

Please

- check [Troubleshooting Android Studio](troubleshooting_androidstudio-troubleshooting-android-studio) for typical errors and
- suivre les conseils pour un accompagnement [pas à pas](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## Je suis coincé sur un objectif et j'ai besoin d'aide.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## Comment réinitialiser le mot de passe dans AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## Comment réinitialiser le mot de passe dans AAPS v3.x ?

If you forgot your password: Close AAPS. Put an empty file named PasswordReset (without any extensions) in phone_main_memory/AAPS/extra directory. Restart AAPS. The new AAPS password is the serial number of your pump. The serial for the Omnipod DASH pod is 4241. You can change the password via 3 dots menu, configuration wizard, unlock parameters.

## My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Erreur de compilation : file name too long

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alerte : Version Dev. La boucle fermée est désactivée

AndroidAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Assurez-vous qu'AAPS fonctionne en mode développeur : Placez un fichier nommé "engineering_mode" dans le dossier "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AndroidAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Où puis-je trouver les fichiers de paramètres ?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## Comment configurer les économies de batterie ?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AndroidAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. Sur le téléphone allez dans Paramètres->Applications et désactivez les économies de batterie pour : AAPS, xDrip ou BYODA/Dexcom app, l'application système Bluetooth (vous devrez peut-être d'abord afficher les applications système) Alternativement, désactivez entièrement toutes les économies de batterie sur le téléphone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

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