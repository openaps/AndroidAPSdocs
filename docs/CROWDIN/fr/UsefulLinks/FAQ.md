# Foire Aux Questions (FAQ)

How to add questions to the FAQ: Follow the these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

Non. There is no downloadable apk file for AAPS. You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. En voici la raison :

AAPS is used to control your pump and give insulin. Selon la réglementation actuelle, en Europe, tous les systèmes de classe IIa ou IIb, sont des dispositifs médicaux qui nécessitent une approbation réglementaire (un marquage CE) qui nécessitent diverses études et approbations. La distribution d'un dispositif non homologué est illégal. Des réglementations similaires existent dans d'autres parties du monde.

Ce règlement n'est pas limité qu'aux ventes (dans le sens d'obtenir de l'argent pour quelque chose), mais s'applique à n'importe quel moyen de distribution (même en accès gratuit). Construire vous même un appareil médical est la seule façon d'utiliser l'application en respectant ces règlements.

C'est pourquoi les apk ne sont pas disponibles.

(FAQ-how-to-begin)=

### How to begin?

Tout d'abord, vous devez **obtenir des composants matériels de la boucle** :

- A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
- an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. Toutes les recommandations supposent que vos besoins en basal sont satisfaits et que les pics ou les creux que vous voyez sont le résultat d'autres facteurs qui nécessitent par conséquent des ajustements (exercices, stress, etc.). Les ajustements que la boucle fermée peut effectuer ont été limités pour des raisons de sécurité (voir Débit Basal Temporaire maximum autorisé dans [Conception de référence OpenAPS](https://openaps.org/reference-design/)), ce qui signifie que vous ne devez pas perdre de la marge de manœuvre pour corriger un débit de basal erroné. Si par exemple vous êtes souvent bas à l'approche d'un repas, il est probable que vos débits de basal nécessitent un ajustement. You can use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

Si vous ne voulez pas que vos préférences soient facilement modifiées, vous pouvez protéger le menu Préférences par un mot de passe en sélectionnant dans les préférences "Mot de passe pour paramètres" et en tapant le mot de passe choisi. La prochaine fois que vous allez dans le menu Préférences, il demandera ce mot de passe avant d'aller plus loin. Si plus tard vous souhaitez supprimer l'option de mot de passe, allez dans "Mot de passe pour paramètres" et supprimez le texte.

#### Android Wear Smartwatches

If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AAPS are not blocked. La confirmation de l'action se fait par notification.

(FAQ-disconnect-pump)=

#### Disconnect pump

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](#AapsScreens-loop-status).

#### Recommendations not only based on one single CGM reading

Pour plus de sécurité, les recommandations faites ne sont pas basées sur une unique lecture MGC, mais sur le delta moyen. Therefore, if you miss some readings it may take a while after getting data back before AAPS kicks in looping again.

#### Further readings

Il y a plusieurs blogs avec de bons conseils pour vous aider à comprendre les aspects pratiques de la boucle :

- [Réglage fin des Paramètres](https://seemycgm.com/2017/10/29/fine-tuning-settings/) Voir ma MGC
- [Pourquoi la DAI est importante](https://seemycgm.com/2017/08/09/why-dia-matters/) Voir ma MGC
- [Limiter les pics de repas](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones et autosens](https://seemycgm.com/2017/06/06/hormones-2/) Voir ma MGC

### What emergency equipment is recommended to take with me?

Vous devez avoir le même équipement d'urgence avec vous, comme tous les autres diabétique de T1 avec une pompe à insuline. When looping with AAPS it is strongly recommended to have the following additional equipment with or near to you:

- Pack de batteries et câbles pour charger votre smartphone, votre montre et, le cas échéant, votre lecteur BT ou votre périphérique de connection
- Piles de la Pompe
- Current [apk](../SettingUpAaps/BuildingAaps.md) and [preferences files](../Maintenance/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

### How can I safely and securely attach the CGM/FGM?

Vous pouvez le coller. Il existe plusieurs « overpatchs » pré-troués adaptés aux systèmes MGC disponibles (recherchez sur Google, eBay ou Amazon). Certains boucleur utilisent également des pansements hydrofilm standard ou des bandes adhésives moins chères.

Vous pouvez le fixer. Vous pouvez également acheter un brassard pour maintenir le MGC/MGF en place (recherche Google, eBay ou Amazon).

## APS algorithm

### Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

Dans l'AMA, DAI ne signifie pas "Durée d'Action de l'Insuline". C'est un paramètre qui était connecté au DAI. Maintenant, cela signifie "à quel moment la correction devrait être terminée". Cela n'a rien à voir avec le calcul de l'IA. Dans OpenAPS SMB, ce paramètre n'est plus nécessaire.

## Other settings

### Nightscout settings

#### AAPSClient says 'not allowed' and does not upload data. What can I do?

In AAPSClient check 'Connection settings'. Peut-être n'êtes-vous pas connecté à un Wi-Fi autorisé ou vous avez activé "Uniquement pendant la charge" et votre câble de charge n'est pas branché.

### CGM settings

#### Why does AAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AAPS OpenAPS-tab. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

### Pump

#### Where to place the pump?

Il y a de nombreuses possibilités de placer la pompe. Peu importe si vous êtes en boucle fermée ou pas.

#### Batteries

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

- for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Supprimez et réinsérez la batterie 2 à 3 fois jusqu'à ce qu'elle affiche 100 % à l'écran, ou utilisez la clé de batterie pour faire un court circuit bref de la batterie avant de l'insérer en appliquant aux deux bornes une fraction de seconde.
- see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

The change of cartridge cannot be done via AAPS but must be carried out as before directly via the pump.

- Long press on "Open Loop"/"Closed Loop" on the Home tab of AAPS and select 'Suspend Loop for 1h'
- Now nnect the pump and change the reservoir as per pump instructions.
- Ainsi le remplissage de la tubulure et de la canule peuvent être faites directement sur la pompe. In this case use [PRIME/FILL button](#screens-action-tab) in the actions tab just to record the change.
- Une fois reconnecté à la pompe, continuez la boucle en appuyant sur "Suspendu (X m)".

Le changement d'une canule n'utilise cependant pas la fonction "Remplir tubulure" / "Remplir canule" de la pompe, mais remplit l'ensemble de perfusion et/ou la canule à l'aide d'un bolus qui n'apparaît pas dans l'historique des bolus. Cela signifie qu'il n'interrompt pas un débit de basal temporaire en cours d'exécution. On the Actions (Act) tab, use the [PRIME/FILL button](#screens-action-tab) to set the amount of insulin needed to fill the infusion set and start the priming. Si la quantité n'est pas suffisante, répétez le remplissage. Vous pouvez définir les quantités par défaut dans les Préférences > Autres > Valeurs prédéfinies pour remplir&amorcer. Consultez les notices de vos canules et tubulures pour savoir combien d'unités doivent être injectées en fonction de la longueur de l'aiguille et de la longueur de la tubulure.

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

#### Hygiene

##### What to do when taking a shower or bath?

Vous pouvez retirer la pompe pour prendre une douche ou un bain. Pour ce court laps de temps, vous pouvez ne pas en avoir besoin, mais vous devez dire à AAPS que vous avez été déconnecté pour que les calculs IOB soient corrects. See [description above](#FAQ-disconnect-pump).

#### Work

Selon votre de travail, vous pouvez peut-être utiliser différents paramètres de traitement pendant les jours travaillés. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. Par exemple, vous pouvez passer à un profil supérieur à 100 % si vous avez un emploi moins fatigant (par ex. assis derrière un bureau), ou moins de 100 % si vous êtes actif et debout toute la journée. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, of if you work different shifts. Vous pouvez aussi créer un second profil (par exemple "maison" et "jour de travail") et faire un changement de profil quotidien vers le profil dont vous avez besoin.

### Leisure activities

(FAQ-sports)=

#### Sports

Vous devez retravailler vos vieilles habitudes sportives à partir de l'époque "d'avant-boucle". Si vous consommez simplement des glucides de sportifs comme avant, la boucle fermée les reconnaîtra et les corrigera en conséquence.

Donc, vous auriez plus de glucides à bord, mais en même temps, la boucle les neutraliserait en libérerant de l'insuline.

Lors de la boucle, vous devriez essayer ces étapes :

- Make a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

Le pré-traitement et le post-traitement de ces paramètres sont importants. Faite les changements suffisament tôt avant le sport et tenez compte de l'effet sur les muscles après.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) for profile switch and TT. L'automatisation basée sur l'emplacement peut également être une idée, mais rend l'anticipation du traitement plus difficile.

Le pourcentage du changement de profil, la valeur de votre cible temporaire d'activité et le meilleur moment pour effectuer ces changements sont propres à chacun. Commencez prudemment si vous recherchez la valeur qui vous convient (commencez par un pourcentage faible et une CT plus élevée).

#### Sex

You can remove the pump to be 'free', but you should tell AAPS so that the IOB calculations are correct. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

La consommation d'alcool est dangereux en mode boucle fermée car l'algorithme ne peut pas prévoir correctement l'impact de l'alcool sur la glycémie. You have to check out your own method for treating this using the following functions in AAPS:

- désactivation de la boucle fermée et traitement du diabète manuellement ou
- réglage d'une cible de temp élevées et désactivation des RNS pour éviter l'augmentation de l'IA par la boucle en raison d'un repas non signalé
- faire un changement de profil pour nettement moins de 100% 

Lorsque vous buvez de l'alcool, vous devez toujours avoir un œil sur votre MGC pour éviter manuellement une hypoglycémie en mangeant des glucides.

#### Sleeping

##### How can I loop during the night without mobile and WIFI radiation?

De nombreux utilisateurs mettent le téléphone en mode avion la nuit. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Activez le mode avion de votre mobile.
2. Attendez que le mode avion soit actif.
3. Activez le Bluetooth.

Maintenant vous ne recevez pas d'appels téléphonique, et vous n'êtes pas connecté à Internet. Mais la boucle est toujours en cours.

Certaines personnes ont découvert des problèmes de diffusion locale (AAPS ne recevant pas les valeurs Gly de xDrip+) lorsque le téléphone est en mode avion. Dans xDrip+ accédez à Paramètres > Paramètres Inter-app > Identifiez le récepteur, et entrez `info.nightscout.androidaps`.

![xDrip+ Paramètres interapp basiques Identifier le récepteur](../images/xDrip_InterApp_NS.png)

#### Travelling

##### How to deal with time zone changes?

Avec les pompes Dana R et Dana R coréenne, vous n'avez rien à faire. For other pumps see [time zone travelling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

Vous pouvez montrer vos rapports Nightscout (https://YOUR-NS-SITE.com/report) ou consulter [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Frequent questions on Discord and their answers...

### My problem is not listed here.

[Informations pour obtenir de l'aide.](../GettingHelp/WhereCanIGetHelp.md)

### My problem is not listed here but I found the solution

[Informations pour obtenir de l'aide.](../GettingHelp/WhereCanIGetHelp.md)

**Rappelez-nous d'ajouter votre solution à cette liste!**

### AAPS stops everyday around the same time.

Arrêter la protection Google Play. Vérifiez que les applications "nettoyant" (par ex. CCleaner, etc.) et désinstallez-les. AAPS / Menu 3 points / À propos / Suivre le lien "Garder l'application en cours d'exécution en arrière-plan" pour arrêter toutes les optimisations de batterie.

### How to organize my backups ?

Exporter les paramètres très régulièrement : après chaque changement de pod, après modification de votre profil, lorsque vous avez terminé et validé un objectif, si vous changez votre pompe… Même si rien ne change, exportez une fois par mois. Conserver plusieurs anciens fichiers d'exportation.

Copiez sur un lecteur internet (Dropbox, Google etc) : toutes les apks que vous avez utilisés pour installer des applications sur votre téléphone (AAPS, xDrip, BYODA, Patched LibreLink…) ainsi que les fichiers de configuration exportés de toutes vos applications.

### I have problems, errors building the app.

Veuillez

- check [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) for typical errors and
- suivre les conseils pour un accompagnement [pas à pas](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### I'm stuck on an objective and need help.

Effectuez une capure d'écran avec la question et les réponses. Postez les sur la chaine AAPS sur Discord. N'oubliez pas de préciser quelles options vous choisissez (ou pas) et pourquoi. Vous obtiendrez des conseils et de l'aide, mais vous devrez trouver les réponses vous-même.

### How to reset the password in AAPS v2.8.x ?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

### How to reset the password in AAPS v3.x

You find the documentation [here](#Update3_0-reset-master-password).

### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

La façon la plus simple de faire travailler toutes ces pièces ensemble est de : 1/ Supprimer le lien depuis AAPS 2/ Éteindre le lien 3/ Sélectionner le menu 3 points AAPS pour quitter AAPS 4/ Faire un appui long sur l'icône AAPS, menu Android, infos sur l'application AAPS, Forcer l'arrêt AAPS, puis Supprimer la mémoire cache (Ne pas supprimer la mémoire principale !) 4bis/ Rarement certains téléphones peuvent avoir besoin d'un redémarrage ici. You can try without reboot. 5/ Allumer le smartphone 6/ Démarrer AAPS 7/ Sélectionner l'onglet Pod, menu à 3 points, recherche et connexion

### Build error: file name too long

While trying to build I get an error stating the file name is too long. Solutions possibles : Déplacez vos sources vers un répertoire plus proche du répertoire racine de votre disque (par exemple "c:\src\AAPS-EROS").

Depuis Android Studio : Assurez-vous que la synchronisation et l'indexage "Gradle" sont terminés après avoir ouvert le projet et effectué un Pull depuis GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

### Alert: Running dev version. Closed loop is disabled

AAPS is not running in "developer mode". AAPS shows the following message: "running dev version. La boucle fermée est désactivée".

Make sure AAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

### Where can I find settings files?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

### How to configure battery savings?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

### Pump unreachable alerts several times a day or at night.

Votre téléphone peut suspendre les services AAPS ou même le Bluetooth, ce qui lui fait perdre la connexion au RL (voir les économies de batterie) Pensez à configurer les alertes injoignables à 120 minutes en allant dans le menu à trois points en haut à droite sélection Préférences->Alertes Locales >Seuil d'alerte pompe hors de portée [min].

### Where can I delete treatments in AAPS v3 ?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

### Configuring and Using the AAPSClient remote app

AAPS can be monitored and controlled remotely via the AAPSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the AAPSClient (remote) app is distinct from the NSClient configuration in AAPS, and the AAPSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'AAPSClient remote' and 'AAPS remote Wear' apps.

To enable AAPSClient remote functionality you must: 1) Install the AAPSClient remote app (the version should match the version of AAPS being used) 2) Run the AAPSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the AAPSClient remote app to your Nightscout site. Once this is done, AAPSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and AAPSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or AAPSClient remote.

If you'd like to monitor/control AAPS via the AAPSClient remote Wear App, you'll need both AAPSClient remote and the associated Wear app to be installed. To compile the AAPSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the AAPSClient variant.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. Si le triangle jaune est lié au changement de transmetteur G6, il disparaîtra après plusieurs heures (environ 24h). Dans le cas du Freestyle Libre, le triangle jaune restera. La boucle peut être fermée et fonctionnera correctement.

### Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

### Procedure I follow in this:

1) Suspend the DASH pump. Cela assure qu'il n'y a pas de commandes en cours d'exécution ou en file d'attente actives lorsque DASH perd la connexion 2) Mettez le téléphone en mode avion pour désactiver le BT (ainsi que le WiFi et les données mobiles). This way it is guaranteed AAPS and DASH can not communicate. 3) Exporter les paramètres (ce qui inclut l'état de DASH) 4) Copier le fichier de paramètres juste exporté depuis le téléphone (comme il est en mode avion et nous ne voulons pas changer cela, la façon la plus simple est d'utiliser le câble USB) 5) Copiez le fichier de paramètres sur le téléphone alternatif. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". Ceci est sûr car le téléphone n'a aucun moyen de communiquer avec DASH pour désactiver le Pod (il est toujours en mode avion) 2) La désactivation entraînera une erreur de communication - c'est normal. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.