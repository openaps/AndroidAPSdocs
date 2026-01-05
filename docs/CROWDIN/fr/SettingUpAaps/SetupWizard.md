# Assistant de configuration

When you first start **AAPS** you are guided by the "**Setup Wizard**", to quickly setup all the basic configurations of your app in one go. **Setup Wizard** guides you, in order to avoid forgetting something crucial. For example, the **permission settings** are fundamental for setting up **AAPS** correctly.

However, it's not mandatory to get everything completely configured in the first run of using the **Setup Wizard** and you can easily exit the Wizard and come back to it later. There are three routes available after the **Setup Wizard** to further optimise/change the configuration. Ces options seront détaillées dans la prochaine section. Vous pouvez donc tout à fait sauter quelques points de l'Assistant de Configuration, vous pourrez facilement y revenir plus tard.

During, and directly after using the **Setup Wizard** you may not notice any significant observable changes in **AAPS**. To enable your **AAPS** loop, you have to follow the **Objectives** to enable feature after feature. You will start **Objective 1** at the end of the Setup Wizard. You are the master of **AAPS**, not the other way around.

```{admonition} Preview Objectives
:class: note
If you are keen to know the structure of the objectives, please read [Completing the objectives](../SettingUpAaps/CompletingTheObjectives.md) but then come back here to run the Setup Wizard first.

```

From previous experience, we are aware that new starters often put themselves under pressure to setup **AAPS** as fast as possible, which can lead to frustration as it is a big learning curve.

So, please take your time in configuring your loop, the benefits of a well-running **AAPS** loop are huge.

```{admonition} Ask for Help
:class: note
If there is an error in the documentation or you have a better idea for how something can be explained, you can ask for help from the community as explained at [Connect with other users](../GettingHelp/WhereCanIGetHelp.md).
```
## Message de bienvenue

Il s'agit juste d'un message de bienvenue que vous pouvez passer avec le bouton "SUIVANT" :

![Welcome](../images/setup-wizard/Wizard01.png)

## Contrat de licence

In the end user license agreement there is important information about the legal aspects of using **AAPS**. Veuillez le lire attentivement.

If you don't understand, or can't agree to the end user license agreement please don't use **AAPS** at all!

Si vous comprenez et êtes d'accord, veuillez cliquer sur le bouton "JE COMPRENDS ET J'ACCEPTE" et poursuivre avec l'Assistant de configuration :

![EULA](../images/setup-wizard/Wizard02.png)

## Autorisations requises

**AAPS** needs some requirements to operate correctly.

In the following screen you are asked several questions you have to agree to, to get **AAPS** working. L'assistant vous explique pourquoi il demande ces paramètres.

Sur cette page, nous nous efforçons de fournir davantage d'informations de contexte, de traduire un langage technique en langage courant ou d'expliquer la raison. Continue reading below to see each permission request.

![Permissions](../images/setup-wizard/Wizard03.png)

### Notifications

Android définit une autorisation spéciale pour les applications qui souhaitent vous envoyer des notifications.

While it is a good feature to disable notifications _e.g._ from  social media apps, it is essential that you allow **AAPS** to send you notifications.

Please click the first "ASK FOR PERMISSION" button:

![Notifications](../images/setup-wizard/Wizard04.png)

Sélectionnez l'application "AAPS" :

![AAPS over other apps](../images/setup-wizard/Wizard04-AndroidSettings1.png)

Activer "Autoriser la superposition sur d'autres applis" en faisant glisser le curseur vers la droite :

![image](../images/setup-wizard/Wizard04-AndroidSettings2.png)

Le curseur doit ressembler à ceci une fois activé :

![image](../images/setup-wizard/Wizard04-AndroidSettings3.png)

### Battery optimization

Battery consumption on smartphones is a consideration, as the performance of batteries is still quite limited. Therefore, the Android operating system on your smartphone is restrictive about allowing applications to run and consume CPU time, and therefore battery power.

However, **AAPS** needs to run regularly, _e.g._ to receive the glucose readings every few minutes and then apply the algorithm to decide how to deal with your glucose levels, based on your specifications. Par conséquent, nous devons l'autoriser à le faire, au niveau d'Android.

Vous le ferez en donnant cette autorisation.

Click the second "ASK FOR PERMISSION" button.

![Allow Background](../images/setup-wizard/Wizard05.png)

Cliquez "Autoriser" :

![Allow Background](../images/setup-wizard/Wizard05-Background.png)

### Storage permission

**AAPS** needs to log information to the permanent storage of your smartphone. Ce stockage permanent sur la mémoire interne signifie que les fichiers seront toujours disponibles, même après le redémarrage de votre smartphone. D'autres données sont simplement perdues, car elles ne sont pas enregistrées sur la mémoire interne.

Click the first "ASK FOR PERMISSION" button:

![Allow Background](../images/setup-wizard/Wizard06.png)

Cliquez sur "Autoriser" :

![image](../images/setup-wizard/Wizard06-Memory.png)

Click "AAPS Directory". This opens the filesystem on your phone and allows you to choose where you want AAPS to store its information.

![AAPS Directory](../images/setup-wizard/Wizard07.png)

The default directory is **AAPS**, but you can use any dedicated directory of your liking. Create the directory if necessary, enter it, and choose "Use this folder":

![Select folder](../images/setup-wizard/Wizard07-Folder.png)

Confirm that you wish to grant access to **AAPS** to the selected directory:

![Select folder](../images/setup-wizard/Wizard07-Confirm.png)

Cliquez sur le bouton "SUIVANT" :

![Finish Permissions](../images/setup-wizard/Wizard08.png)

### Location

Android links the use of Bluetooth communication to the ability to use location services. Peut-être l'avez-vous vu aussi dans d'autres applications. It's common to need location permission if you want to access Bluetooth.

**AAPS** uses Bluetooth to communicate with your CGM and insulin pump if they are directly controlled by **AAPS** and not another app which is used by **AAPS**. Les détails peuvent différer d'une configuration à l'autre.

Click the first "ASK FOR PERMISSION" button:

![Allow Location](../images/setup-wizard/Wizard09.png)

Cette autorisation est importante. Otherwise **AAPS** can not work properly at all.

Cliquez sur "Lorsque vous utilisez l'appli" :

![Location](../images/setup-wizard/Wizard09-location.png)

Click the second "ASK FOR PERMISSION" button:

![Location 2](../images/setup-wizard/Wizard10.png)

Select "Allow all the time".

![Location all the time](../images/setup-wizard/Wizard10-allthetime.png)



Cliquez sur le bouton "SUIVANT" :

![Location 2](../images/setup-wizard/Wizard11.png)

## Master password

As the configuration of **AAPS** contains some sensitive data (_e.g._ API_KEY for accessing your Nightscout server) it is encrypted by a password you can set here.

The second sentence is very important, please **DO NOT LOSE YOUR MASTER PASSWORD**. Please make a note of it _e.g._ on Google Drive. Google Drive est pratique pour les sauvegardes car c'est Google qui le gère pour vous. Votre smartphone ou PC peuvent vous lâcher et vous pourriez ne pas avoir de sauvegarde locale. If you forget your Master Password, it can be difficult to recover your profile configuration and progress through the **Objectives** at a later date.

Après avoir saisi le mot de passe deux fois, veuillez cliquer sur le bouton "SUIVANT" :

![Mot de passe](../images/setup-wizard/Wizard12.png)

## Units (mg/dL <-> mmol/L)

Please select if your glucose values are in mg/dL or mmol/L and then please click the "NEXT" button:

![Units](../images/setup-wizard/Wizard13.png)

## Paramètres d'affichage

 Ici, vous pouvez définir les valeurs entre lesquelles la glycémie sera considérée comme "dans la cible". Vous pouvez le laisser tel quel pour l'instant et le modifier plus tard.

Les valeurs que vous choisissez n'affectent que l'affichage du graphique, et rien d'autre.

Your glucose target _e.g._ is configured separately in your profile.

Votre plage cible pour l'analyse du TIR (temps dans la plage cible) est configurée séparément dans votre serveur de reporting.

Cliquez sur le bouton "SUIVANT" :

![Range](../images/setup-wizard/Wizard14.png)

(SetupWizard-synchronization-with-the-reporting-server-and-more)=
## Synchronisation avec le serveur de reporting, etc

Ici, vous configurez le téléchargement des données vers votre serveur de reporting.

Vous pourriez également configurer d'autres éléments ici, mais pour cette première exécution, nous nous concentrerons simplement sur le serveur de reporting.

Si vous n'êtes pas en mesure de le configurer pour le moment, passez cette étape pour l'instant. Vous pouvez le configurer plus tard.

If you select an item here on the left tick box, on the right you can then ticking the visibility (eye) box, which will place this plugin in the upper menu on the **AAPS** home screen. Vous devriez cocher la case de visibilité si vous configurez votre serveur de reporting à ce stade.

Dans cet exemple, nous sélectionnons Nightscout comme serveur de reporting, et nous allons le configurer.

```{admonition}  **NSClient** version
:class: Note

Click [here](#version3200) for the release notes of **AAPS** 3.2.0.0 which explain the differences between the top option **NSClient** (this is "v1", although it is not explicitly labelled) and the second option, **NSClient v3**.
```
Pour Tidepool, c'est encore plus simple, car vous n'avez besoin que de vos informations de connexion personnelles.

Après avoir fait votre sélection, cliquez sur le bouton Engrenage à côté de l'élément que vous avez sélectionné :

![Synchronization](../images/setup-wizard/Wizard15.png)

Ici, vous configurez l'accès au serveur de reporting Nightscout.

Veuillez cliquer sur "URL Nightscout" :

![NSClient](../images/setup-wizard/Wizard16.png)

Entrez l'URL Nightscout de votre serveur personnel. Il s'agit de l'URL que vous avez configurée vous-même, ou qui vous a été fournie par votre fournisseur Nightscout.

Cliquez sur le bouton "OK" :

![NSClient ULR](../images/setup-wizard/Wizard16-URL.png)

Enter your Nightscout access token. Il s'agit du jeton d'accès que vous avez défini pour votre serveur Nightscout. Sans ce jeton, l'accès ne fonctionnera pas.

If you don't have it at the moment please check the documentation for setting up the reporting server in the **AAPS** documentation.

After filling in the "**Nightscout access token**" and clicking "OK", please click on the "Synchronization" button:

![NSClient Token](../images/setup-wizard/Wizard16-Token.png)

Please select "Upload data to NS" if you already configured Nightscout in the previous steps of the Setup Wizard.

If you have stored profiles on Nightscout and want to download them to **AAPS**, enable "Receive profile store":

![Syncronization](../images/setup-wizard/Wizard16-Sync.png)


Retournez à l'écran précédent et cliquez sur "Option d'alarme" :

![Alarmes](../images/setup-wizard/Wizard16-Alarm.png)

Pour l'instant, laissez ces options désactivées. We only walked to the screen to make you familiar with possible options you might configure in the future. Pour le moment, vous n'en avez pas besoin.

Retournez à l'écran précédent et sélectionnez "Paramètres de connexion".

Ici vous pouvez affiner les conditions de téléchargement vers le serveur de reporting.

Caregivers must enable "use cellular connection" as otherwise the smartphone which serves the dependant/child can not upload data outside of WiFi range _e.g._ on the way to school.

Other **AAPS** users can disable the transfer via cellular connection if they want to save data or battery.

Si vous ne savez pas trop, laissez simplement tout coché.

Retournez à l'écran précédent et sélectionnez "Paramètres Avancés".

![Connection](../images/setup-wizard/Wizard16-Connect.png)

Activer "Démarrage AAPS entré dans NS" si vous souhaitez voir cette information dans le serveur de reporting. Cela peut vous aider à savoir à distance si et quand l'application a été redémarrée, en particulier en tant qu'aidant.

It might be interesting to see if **AAPS** is correctly configured now, but later it is usually not that important to be able to see **AAPS** stopping or starting in Nightscout.

Activer "Créer des messages d'erreur" et "Créer des annonces à partir des alertes Glucides requis".

Laissez la fonction "Ralentir les téléversements" désactivée. You would only use it in unusual circumstances if for example a lot of information is to be transferred to the Nightscout server, and the Nightscout server is being slow in processing this data.

Revenez deux fois en arrière, jusqu'à la liste des plugins et sélectionnez "SUIVANT" pour passer à la suite :

![image](../images/setup-wizard/Wizard16-App.png)

## Patient name

Here you can setup your name in **AAPS**.

Vous pouvez mettre ce que vous voulez. Ça sert uniquement à différencier les utilisateurs.

Pour rester simple, entrez simplement le prénom et nom de famille.

Appuyez sur "SUIVANT" pour passer à l'écran suivant.

![Nom](../images/setup-wizard/Wizard17.png)

## Patient type

Here you select your "Patient type" which is important, as the **AAPS** software has different limits, depending on the age of the patient. C'est important pour des raisons de sécurité et de sûreté.

Here is where you also configure the **maximum allowed bolus** for a meal. C'est-à-dire, le plus gros bolus dont vous avez besoin pour couvrir un repas standard. C'est une fonction de sécurité pour éviter de surdoser accidentellement lorsque vous faites un bolus pour le repas.

Dans la même idée, la deuxième limite concerne cette fois l'apport maximum en glucides permis.

Après avoir défini ces valeurs, appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Patient](../images/setup-wizard/Wizard18.png)

## Insuline utilisée

Sélectionnez le type d'insuline utilisée dans la pompe.

Les noms d'insuline affichés doivent vous parler.

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
For advanced users or medical studies there is the possibility to define with "Free-Peak Oref" a customised profile of how insulin acts. Please don't use it unless you are an expert, usually the pre-defined values work well for each branded insulin.
```

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Insuline](../images/setup-wizard/Wizard19.png)


## Source des glycémies

Sélectionnez d'où vous allez recevoir les glycémies. Please read the documentation for your [BG source](../Getting-Started/CompatiblesCgms.md).

Comme il existe diverses possibilités, nous n'expliquons pas la configuration de chacune ici. We are using xDrip+ in our example here:


![Source GLY](../images/setup-wizard/Wizard20.png)


Enable the visibility in the top level menu by clicking the check box on the right side.

Après avoir fait votre sélection, appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Select BG](../images/setup-wizard/Wizard20-Set.png)


Click on the cogwheel button to access the settings.

Cochez "Remonter les glycémies vers NS" et "Enregistrement du changement de capteur sur NS".

Revenez en arrière et cliquez sur "SUIVANT" pour passer à l'écran suivant :

![Upload](../images/setup-wizard/Wizard20-Upload.png)

(setup-wizard-profile)=
## Profil

Nous arrivons maintenant à une partie très importante de l'Assistant de configuration.

Please read the documentation about [profiles](../SettingUpAaps/YourAapsProfile.md) before you try to enter your profile details on the following screen.

```{admonition} Working profile required - no exceptions here !
:class: danger
An accurate profile is necessary to control the safe action of **AAPS**.

It's required that you have determined and discussed your profile with your doctor, and that it has been proven to work by successful basal rate, ISF and IC testing!

If a robot has an incorrect input it will fail - consistently. **AAPS** can only work with the information it is given. If your profile is too strong, you risk hypoglycemia, and if it is too weak, you risk hyperglycemia. 
```

Appuyez sur "SUIVANT" pour passer à l'écran suivant. Saisissez un "Nom de profil" :

![image](../images/setup-wizard/Wizard21.png)


Par la suite, vous pourrez avoir plusieurs profils si nécessaire. Nous n'en créons qu'un ici.

```{admonition} Profile only for tutorial - not for your usage
:class: information
The example profile here is only to show you how to enter data.

It is not intended to be an accurate profile or something very well optimised, because each person's needs are so different.

Don't use it for actually looping!
```

Enter your [Duration of insulin Action (DIA)](#your-aaps-profile-duration-of-insulin-action) in hours. Ensuite, appuyez sur "G/I":

![DIA](../images/setup-wizard/Wizard21-Name.png)

Enter your [IC](#your-aaps-profile-insulin-to-carbs-ratio) values:

![IC](../images/setup-wizard/Wizard21-IC.png)

Appuyez sur "SI". Enter your [ISF values](#your-aaps-profile-insulin-sensitivity-factor):

![ISF](../images/setup-wizard/Wizard21-ISF.png)


Appuyez sur "BAS". Enter your [basal values](#your-aaps-profile-basal-rates):

![image](../images/setup-wizard/Wizard21-Basal.png)


Appuyez sur "CIBLE". Entrez votre glycémie cible.

For open looping this target can be a wider range, as otherwise **AAPS** notifies you permanently to change the temporary basal rate or another setting, which can be exhausting.

Plus tard, pour la boucle fermée, vous n'aurez généralement qu'une valeur unique en maximum et minimum. That makes it easier for **AAPS** to hit the target and give you better overall diabetes control.

Saisissez les valeurs cibles :

![Cible](../images/setup-wizard/Wizard22.png)

Enregistrez le profil en cliquant sur "ENREGISTRER" :

![Save](../images/setup-wizard/Wizard22-Save.png)


After saving, a new button "Activate Profile" appears.

```{admonition} Several defined but only one active profile
:class: information
Vous pouvez sauvegarder plusieurs profils, mais il n'y aura jamais qu'un seul profil actif à tout moment.
```

Appuyez sur "Activer le Profil" :

![image](../images/setup-wizard/Wizard22-Activate.png)





La boîte de dialogue de changement de profil apparaît. Pour cette fois, laissez les valeurs prédéfinies.

```{admonition} Several defined but only one active profile
:class: information
Vous apprendrez plus tard comment utiliser cette boite de dialogue pour gérer des situations telles que la maladie ou le sport, quand vous devez modifier votre profil en fonction des circonstances.
```


Appuyez sur "OK" :


![Switch](../images/setup-wizard/Wizard22-Switch.png)



Un message de confirmation pour le changement de profil apparaît.

Vous pouvez le confirmer en appuyant sur "OK". Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Ok](../images/setup-wizard/Wizard22-SwitchOk.png)

Votre profil a bien été défini :

![Info](../images/setup-wizard/Wizard22-Info.png)


## Pompe à insuline



Vous allez maintenant sélectionner votre pompe à insuline.

Une boîte de dialogue d'avertissement importante apparait. Veuillez la lire et appuyez sur "OK".

Si vous avez déjà configuré votre profil dans les étapes précédentes et que vous savez comment connecter votre pompe, n'hésitez pas à la connecter maintenant.

Otherwise, leave the Setup Wizard, using the arrow in the top left corner and let **AAPS** first show you some blood glucose values. Vous pouvez revenir à tout moment ou accéder directement à la configuration (sans utiliser l'Assistant).

Please read the documentation for your [insulin pump](../Getting-Started/CompatiblePumps.md).

Appuyez sur "SUIVANT" pour passer à l'écran suivant.

![Pump Warning](../images/setup-wizard/Wizard23.png)


Dans notre cas, nous sélectionnons "Pompe virtuelle".

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Pump](../images/setup-wizard/Wizard23-Pump.png)

## APS algorithm

Choisissez l'algorithme SMB OpenAPS comme algorithme APS. Despite the name the SMB feature of the algorithm is disabled until you are familiar with AAPS and already worked through the first objectives. L'algorithme OpenAPS SMB est plus récent et de manière générale meilleur par rapport à OpenAPS AMA de toute façon.

La raison pour laquelle le SMB est désactivé au début est que la fonction SMB permet une réaction plus rapide à l'augmentation de la glycémie, en remplaçant une augmentation de la basale par un Super Micro Bolus. As in the beginning your profile is in general not as good as after some time of experience the feature is disabled in the beginning.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA is the most basic algorithm which does not support micro boluses to correct high values. There might be circumstances where it is better to use this algorithm but it is not the recommendation.
```

Appuyez sur le bouton Engrenage pour voir les détails :

![APS](../images/setup-wizard/Wizard24.png)


Parcourez seulement les options et ne changez rien ici.

Due to the limitations which are imposed by the **Objectives** you can't use either "closed loop" or "SMB features" at the moment anyway.

Revenez en arrière et cliquez sur "SUIVANT" pour passer à l'écran suivant :

![Paramètres](../images/setup-wizard/Wizard24-Settings.png)

## Estimation de Sensibilité

Let "Sensitivity Oref1" the standard for the sensitivity plugins selected.

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![Sensitivity](../images/setup-wizard/Wizard25.png)

## Commencer l'objectif 1

Vous entrez maintenant les Objectifs. The qualification for access to further **AAPS** features.

Ici, nous commençons l'objectif 1, même si pour le moment notre configuration n'est pas complètement terminée et ne permet pas de valider cet objectif.

Nous n'en sommes qu'au début.

Appuyez sur le bouton vert "DÉPART" pour démarrer l'objectif 1 :

![Objectives](../images/setup-wizard/Wizard26.png)

Vous voyez que vous avez déjà complété certaines parties, alors que d'autres restent à faire.

Appuyez sur "TERMINER" pour passer à l'écran suivant.

![Done](../images/setup-wizard/Wizard26-Started.png)

You are coming to the home screen of **AAPS**.

Here you find the information message in **AAPS** that you set your profile.

Cela a été fait lorsque nous avons basculé vers notre nouveau profil.

Vous pouvez cliquer sur "MASQUER" et il disparaîtra.

![image](../images/setup-wizard/Wizard26-Done.png)

If you accidentally leave the Setup Wizard at any point, you can either simply re-start the Wizard, or change the [configuration of the AAPS loop](../SettingUpAaps/ChangeAapsConfiguration.md) manually.

If your **AAPS** loop is now fully setup, please move on to the next section ["Completing the objectives"](../SettingUpAaps/CompletingTheObjectives.md).