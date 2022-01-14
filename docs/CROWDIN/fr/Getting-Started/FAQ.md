# Foire Aux Questions (FAQ)

Comment ajouter des questions à la FAQ : suivez ces [instructions](../make-a-PR.md)

# Généralités

## Puis-je télécharger le fichier d'installation d'AndroidAPS ?

Non. Il n'y a pas de fichier apk téléchargeable pour AndroidAPS. Vous devez le [générer](../Installing-AndroidAPS/Building-APK.md) vous-même. En voici la raison :

AndroidAPS est utilisé pour contrôler votre pompe et injecter de l'insuline. Under current regulations in Europe, all systems classed as IIa or IIb are medical devices that require regulatory approval (a CE mark) which needs various studies and sign offs. La distribution d'un dispositif non homologué est illégal. Des réglementations similaires existent dans d'autres parties du monde.

This regulation is not restricted just to sales (in the meaning of getting money for something) but applies to any distribution (even giving away for free). Building a medical device for yourself is the only way to use the app within these regulations.

C'est pourquoi les apk ne sont pas disponibles.

## Comment faire pour commencer ?

Tout d'abord, vous devez **obtenir des composants matériels de la boucle** :

* Une [pompe à insuline prise en charge](./Pump-Choices.md), 
* un [smartphone Android](Phones.md) (l'iOS d'Apple n'est pas pris en charge par AndroidAPS - vous pouvez vérifier [iOS Loop](https://loopkit.github.io/loopdocs/)), et 
* un système de [Mesure de Glycémie en Continu (MGC)](../Configuration/BG-Source.rst). 

Deuxièmement, vous devez **configurer votre matériel**. Voir [exemple de configuration avec le tutoriel étape par étape](Sample-Setup.md).

Troisièmement, vous devez **configurer vos composants logiciels** : AndroidAPS et la source MGC/MGF.

Quatrièmement, vous devez apprendre et **comprendre le fonctionnement de référence OpenAPS pour vérifier vos paramètres de traitement**. Le principe fondateur de boucle fermée est que votre débit de basal et vos ratios Glucides/Insuline (G/I) et Sensibilité à l'Insuline (SI) sont bien déterminés. Toutes les recommandations supposent que vos besoins en basal sont satisfaits et que les pics ou les creux que vous voyez sont le résultat d'autres facteurs qui nécessitent par conséquent des ajustements (exercices, stress, etc.). Les ajustements que la boucle fermée peut effectuer ont été limités pour des raisons de sécurité (voir Débit Basal Temporaire maximum autorisé dans [Conception de référence OpenAPS](https://openaps.org/reference-design/)), ce qui signifie que vous ne devez pas perdre du dosage autorisé pour corriger un débit de basal erroné. Si par exemple vous êtes souvent bas à l'approche d'un repas, il est probable que vos débits de basal nécessitent un ajustement. Vous pouvez utiliser [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) pour analyser un grand nombre de données pour voir comment les débit de basal et/ou la SI doivent être ajustés, et aussi si le ratio G/I doit être modifié. Vous pouvez aussi tester et configurer vos débits de basal [à l'ancienne](https://integrateddiabetes.com/basal-testing/).

## Quels sont les aspects pratiques de la boucle ?

### Protection par mot de passe

Si vous ne voulez pas que vos préférences soient facilement modifiées, vous pouvez protéger le menu Préférences par un mot de passe en sélectionnant dans les préférences "Mot de passe pour paramètres" et en tapant le mot de passe choisi. La prochaine fois que vous allez dans le menu Préférences, il demandera ce mot de passe avant d'aller plus loin. Si plus tard vous souhaitez supprimer l'option de mot de passe, allez dans "Mot de passe pour paramètres" et de supprimez le texte.

### Montres connectées Android Wear

Si vous envisagez d'utiliser l'application Android Wear pour créer un bolus ou modifier des paramètres à partir de votre montre connectée, vous devez vous assurer que les notifications d'AndroidAPS ne sont pas bloquées. La confirmation de l'action se fait par notification.

### Débrancher la pompe

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AndroidAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AndroidAPS Home Screen](./Screenshots.md#loop-status).

### Recommandations non seulement basées sur une seule lecture MGC

Pour plus de sécurité, les recommandations faites ne sont pas basées sur une unique lecture MGC, mais sur le delta moyen. Par conséquent, si vous manquez quelques données, cela peut prendre un certain temps après la lecture de nouvelles données avant qu'AndroidAPS n'active à nouveau la boucle fermée.

### Autres lectures

Il y a plusieurs blogs avec de bons conseils pour vous aider à comprendre les aspects pratiques de la boucle :

* [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
* [Pourquoi la DAI est importante](https://seemycgm.com/2017/08/09/why-dia-matters/) Voir ma MGC
* [Limiter les pics de repas](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
* [Hormones et autosens](https://seemycgm.com/2017/06/06/hormones-2/) Voir ma MGC

## Ce que l'équipement d'urgence est recommandé d'avoir sur soi ?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AndroidAPS it is strongly recommended to have the following additional equipment with or near to you:

* Battery pack and cables to charge your smartphone, watch and (if needed) BT reader or Link device
* Piles de la Pompe
* Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.rst) for AndroidAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## How can I safely and securely attach the CGM/FGM?

You can tape it. There are several pre-perforated 'overpatches' for common CGM systems available (search Google, eBay or Amazon). Certains Boucleur utilisent également des cassettes Kinesi standard ou des cassettes rock moins chères.

You can fix it. You can also purchase upper arm bracelets that fix the CGM/FGM with a band (search Google, eBay or Amazon).

# Paramètres AndroidAPS

La liste suivante a pour but de vous aider à optimiser les paramètres. Il peut être préférable de commencer par le haut et de travailler vers le bas. Essayez de valider un seul paramètre avant d'en changer un autre. Travaillez avec de petites étapes plutôt que de faire de grands changements à la fois. Vous pouvez utiliser [Autotune](https://autotuneweb.azurewebsites.net/) pour guider votre réflexion, même si elle ne doit pas être suivie aveuglément : elle peut ne pas fonctionner correctement pour vous ou en toutes circonstances. Notez que les paramètres interagissent les uns avec les autres - vous pouvez avoir des paramètres "erronés" qui fonctionnent bien ensemble dans certaines circonstances (par exemple si une basal trop élevé se produit en même temps qu'une Gly trop élevée) mais pas dans d'autres. Cela signifie que vous devez tenir compte de tous les paramètres et vérifier qu'ils fonctionnent ensemble dans une variété de circonstances.

## Durée d'Action de l'Insuline (DAI)

### Description & test

La durée que met l'insuline pour descendre à zéro.

C'est très souvent paramétré trop court. La plupart des gens voudront au moins 5 heures, voire 6 ou 7 heures.

### Impact

Une DAI trop courte peut conduire à des hypoglycémies. Et vice-versa.

Si la DAI est trop courte, AAPS pensera que votre bolus précédent est entièrement consommé trop tôt, et si la glycémie est encore élevée, il vous injectera plus d'insuline. (En pratique, il n’attend pas aussi longtemps, mais il prédit ce qui va se passer et continue d’ajouter de l’insuline). Cela crée essentiellement un «empilement d'insuline» dont AAPS n'est pas au courant.

L'exemple d'une DAI trop courte est une hyperglycémie suivie d'une correction excessive de AAPS et d'une hypoglycémie derrière.

## Débits de basal (U/h)

### Description & test

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. Et vice-versa.

### Impact

Too high basal rate can lead to low BGs. Et vice-versa.

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

**Exemple :**

* BG is 190 mg/dl (10,5 mmol) and target is 100 mg/dl (5,6 mmol). 
* So, you want correction of 90 mg/dl (= 190 - 110).
* ISF = 30 -> 90 / 30 = 3 units of insulin
* ISF = 45 -> 90 / 45 = 2 units of insulin

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Rapport Glucides/Insuline (G/I) (g/U)

### Description & test

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

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

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# Algorithme APS

## Pourquoi est-ce que cela montre "dia: 3" dans l'onglet "OPENAPS AMA" même si j'ai une DAI différente dans mon profil ?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Profil

### Pourquoi utiliser une DAI min. de 5h (heure de fin de l'insuline) au lieu de 2-3h ?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Pourquoi la boucle réduit-elle fréquemment ma glycémie à des valeurs hypoglycémiques sans GA ?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Quelles sont les causes des pics post-prandiaux en boucle fermée ?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Autres paramètres

## Paramètres Nightscout

### AndroidAPS NSClient indique 'non autorisé' et ne télécharge pas les données. Que puis-je faire ?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## Paramètres MGC

### Pourquoi ne AndroidAPS indique 'la source de glycémie actuelle ne supporte pas de filtrage avancé' ?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pompe

### Où placer la pompe ?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Piles

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changement des réservoirs et des canules

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Also priming and filling tube and cannula can be done directly on the pump. In this case use [PRIME/FILL button](../Usage/CPbefore26#pump) in the actions tab just to record the change.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Fonds d'écran

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Utilisation quotidienne

### Hygiène

#### Que faire pour prendre une douche ou un bain?

You can remove the pump while taking a shower or bath. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Travail

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when working much earlier or later than regular, of if you work different shifts. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Activités de loisirs

### Sports

Vous devez retravailler vos vieilles habitudes sportives à partir de l'époque "d'avant-boucle". Si vous consommez simplement des glucides de sportifs comme avant, la boucle fermée les reconnaîtra et les corrigera en conséquence.

Donc, vous auriez plus de glucides à bord, mais en même temps, la boucle les neutraliserait en libérerant de l'insuline.

Lors de la boucle, vous devriez essayer ces étapes :

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Le pré-traitement et le post-traitement de ces paramètres sont importants. Faite les changements suffisament tôt avant le sport et tenez compte de l'effet sur les muscles après.

Si vous faites du sport régulièrement au même moment (par exemple entrainement régulier dans votre salle de sport), vous pouvez envisager d'utiliser des règles [d'automatisation](../Usage/Automation.rst) pour faire des changements de profil et mettre des CT. L'automatisation basée sur l'emplacement peut également être une idée, mais rend l'anticipation du traitement plus difficile.

Le pourcentage du changement de profil, la valeur de votre cible temporaire d'activité et le meilleur moment pour effectuer ces changements sont propres à chacun. Commencez prudemment si vous recherchez la valeur qui vous convient (commencez par un pourcentage faible et une CT plus élevée).

### Sexe

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ#disconnect-pump).

### Boire de l'alcool

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### En veille

#### Comment puis-je boucler pendant la nuit sans rayonnement smartphone et WIFI ?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

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