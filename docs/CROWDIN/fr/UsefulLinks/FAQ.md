# Foire Aux Questions (FAQ)

Comment ajouter des questions à la FAQ : suivez ces [instructions](../SupportingAaps/HowToEditTheDocs.md)

## Généralités

### Puis-je simplement télécharger le fichier d'installation d'AAPS ?

Non. Il n'existe pas de fichier apk d'AAPS à télécharger. Vous devez le [compiler](../SettingUpAaps/BuildingAaps.md) vous-même. En voici la raison :

AAPS est utilisé pour contrôler votre pompe et fournir de l'insuline. Selon la réglementation actuelle en Europe, tous les systèmes de classe IIa ou IIb sont des dispositifs médicaux qui nécessitent une approbation réglementaire (un marquage CE), ce qui demande diverses études et validations. La distribution d'un dispositif non homologué est illégale. Des réglementations similaires existent dans d'autres parties du monde.

Ce règlement n'est pas limité qu'aux ventes (dans le sens d'obtenir de l'argent pour quelque chose), mais s'applique à n'importe quel moyen de distribution (même en accès gratuit). Construire vous même un appareil médical est la seule façon d'utiliser l'application en respectant ces règlements.

C'est pourquoi les apk ne sont pas disponibles.

(FAQ-how-to-begin)=

### Comment faire pour commencer ?

Commencez par [Se préparer à démarrer avec AAPS](../Getting-Started/PreparingForAaps.md) : cette page vous guide en détail pour tout ce qui suit.

Tout d'abord, vous devez **obtenir des composants matériels de la boucle** :

* Une [pompe à insuline compatible](../Getting-Started/CompatiblePumps.md), 
* un [smartphone Android](../Getting-Started/Phones.md) (Apple iOS n'est pas pris en charge par AAPS - vous pouvez regarder [iOS Loop](https://loopkit.github.io/loopdocs/)) et
* un [système de mesure du glucose en continu](../Getting-Started/CompatiblesCgms.md). 

Ensuite, vous devez **configurer vos composants logiciels** : [AAPS](../SettingUpAaps/BuildingAaps.md), [la source MGC/MGF](../Getting-Started/CompatiblesCgms.md) et un [serveur de rapports](../SettingUpAaps/SettingUpTheReportingServer.md).

Enfin, vous devez apprendre et **comprendre la conception de référence OpenAPS pour vérifier vos paramètres de traitement**. Le principe de base de la boucle fermée est que votre [débit basal et votre ratio glucides](../SettingUpAaps/YourAapsProfile.md) sont justes. Toutes les recommandations supposent que vos besoins en basal sont satisfaits et que les pics ou les creux que vous voyez sont le résultat d'autres facteurs qui nécessitent par conséquent des ajustements (exercices, stress, etc.). Les ajustements que la boucle fermée peut effectuer ont été limités pour des raisons de sécurité (voir Débit Basal Temporaire maximum autorisé dans [Conception de référence OpenAPS](https://openaps.org/reference-design/)), ce qui signifie que vous ne devez pas perdre de la marge de manœuvre pour corriger un débit de basal erroné. Si, par exemple, la boucle règle souvent un débit basal temporaire bas à l'approche d'un repas, il est probable que votre débit basal doive être ajusté. Vous pouvez utiliser [Autotune](#autotune-how-autotune-calculates-adjustments) pour analyser un grand nombre de données et savoir si et comment les débits basaux et/ou la SI doivent être ajustés, et aussi si le ratio glucides doit être modifié. Vous pouvez aussi tester et régler votre débit basal [à l'ancienne](https://integrateddiabetes.com/basal-testing/).

### Quels sont les aspects pratiques de la boucle ?

#### Protection par mot de passe

Si vous ne voulez pas que vos paramètres puissent être modifiés facilement, vous pouvez les protéger par un mot de passe, un code PIN ou l'authentification biométrique de votre téléphone (empreinte digitale, visage). Ouvrez **Paramètres** > **Protection** > **Protection des paramètres** et choisissez le type de protection. Au même endroit, vous pouvez aussi protéger toute l'application ou seulement les bolus. Voir [Protection des paramètres](#Preferences-settings-protection) pour plus de détails.

#### Montres connectées Android Wear

Si vous utilisez l'application montre d'AAPS pour faire un bolus ou modifier des paramètres, chaque demande doit être confirmée sur la montre : après l'envoi, la montre affiche un résumé avec un bouton **CONFIRMER**. Voir [Contrôle à distance depuis une montre Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Déconnecter la pompe

Si vous retirez votre pompe pour la douche, le bain, la natation, le sport ou d'autres activités, vous devez indiquer à AAPS qu'aucune insuline n'est délivrée, pour que l'IA reste correcte.

La pompe peut être déconnectée avec l'[icône de la boucle](#AapsScreens-loop-status) sur l'écran principal d'AAPS : appuyez dessus et choisissez **Déconnecter la pompe** avec la durée dont vous avez besoin. Si l'activité dure plus longtemps que prévu, appuyez de nouveau sur l'icône et choisissez une nouvelle durée : vous n'avez pas besoin de reconnecter la pompe avant. Voir [Déconnecter la pompe pour la douche ou une activité](#pumps-cannulas-disconnecting) pour savoir comment éviter un manque d'insuline lors de longues déconnexions.

#### Recommandations qui ne sont pas basées sur une seule lecture MGC

Pour plus de sécurité, les recommandations faites ne sont pas basées sur une unique lecture MGC, mais sur le delta moyen. Par conséquent, si vous manquez certaines lectures, cela peut prendre un certain temps après avoir récupéré les données avant que AAPS ne lance de nouveau la boucle.

#### Autres lectures

Plusieurs blogs donnent de bons conseils pour vous aider à comprendre les aspects pratiques de la boucle. Certains ne sont plus en ligne : les liens ci-dessous marqués « copie archivée » ouvrent une copie enregistrée sur Internet Archive.

    * [Ajuster finement les paramètres (Fine-tuning Settings)](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (copie archivée)
    * [Pourquoi la DAI est importante (Why DIA matters)](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (copie archivée)
    * [Limiter les pics après les repas (Limiting meal spikes)](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones et autosens (Hormones and autosens)](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (copie archivée)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Quel équipement d'urgence est-il recommandé d'avoir sur soi ?

Vous devez avoir avec vous le même équipement d'urgence que toute autre personne diabétique de type 1 traitée par pompe à insuline. Quand vous bouclez avec AAPS, il est fortement recommandé d'avoir les équipements supplémentaires suivants avec ou près de vous :

* Batterie externe et câbles pour charger votre smartphone, votre montre et, si besoin, votre lecteur BT ou votre Link
* Piles de la Pompe
* Un accès à vos sauvegardes, sur le téléphone et dans le cloud (par ex. Google Drive, Dropbox), pour pouvoir réinstaller AAPS sur un autre téléphone (voir [Créer et restaurer des sauvegardes](../Maintenance/ExportImportSettings.md)) : 
  * l'[apk](../SettingUpAaps/BuildingAaps.md) actuel d'AAPS et des autres applications que vous utilisez (par ex. xDrip, Juggluco, BYODA).
  * votre fichier keystore (créé lors de la compilation de l'apk) et son mot de passe,
  * vos derniers fichiers d'export des paramètres d'AAPS et de vos autres applications,
  * votre mot de passe principal **AAPS** : sans lui, vous ne pouvez pas importer le fichier de paramètres.

(FAQ-organize-backups)=

#### Comment organiser mes sauvegardes ?

Exportez les paramètres très régulièrement : après chaque changement de pod ou de réservoir, après une modification de votre profil, quand vous avez validé un objectif, si vous changez de pompe… Même si rien ne change, exportez une fois par mois. Conservez plusieurs anciens fichiers d'exportation.

**AAPS** peut le faire pour vous : il peut exporter vos paramètres automatiquement (par exemple avec une [Automatisation](#ExportImportSettings-Automating-Settings-Export) après chaque changement de pod) et enregistrer l'export directement dans un dossier cloud (Google Drive). Voir [Créer et restaurer des sauvegardes](../Maintenance/ExportImportSettings.md).

### Comment puis-je fixer le capteur MGC/MGF en toute sécurité ?

Vous pouvez le coller. Il existe plusieurs « overpatchs » pré-troués adaptés aux systèmes MGC disponibles (recherchez sur Google, eBay ou Amazon). Certains utilisateurs de la boucle utilisent du ruban de kinésiologie standard ou du Rocktape, moins chers.

Vous pouvez le fixer. Vous pouvez également acheter un brassard pour maintenir le MGC/MGF en place (recherche Google, eBay ou Amazon).

## Algorithme APS

### Pourquoi OpenAPS AMA affiche-t-il "dia: 3" alors que j'ai une autre DAI dans mon profil ?

Quand **OpenAPS AMA** est sélectionné dans **Configuration** > **APS**, **Ouvrir le plugin** affiche les données envoyées à l'algorithme. Dans sa section **Profil**, `dia` vaut toujours 3.0 ou moins :

![Écran du plugin OpenAPS AMA avec dia 3.0 dans les données du profil](../images/screens/openaps_ama_plugin.png)

Dans l'AMA, DAI ne signifie pas "Durée d'Action de l'Insuline". C'est un paramètre qui était autrefois lié à la DAI. Maintenant, cela signifie "à quel moment la correction devrait être terminée". Cela n'a rien à voir avec le calcul de l'IA. Dans OpenAPS SMB, ce paramètre n'est plus nécessaire.

## Autres paramètres

### Paramètres Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (ou AAPS) n'envoie pas de données : « Bloqué par… ». Que puis-je faire ?

Le statut NSClient indique pourquoi aucune donnée n'est envoyée :

* **Bloqué par les options de connectivité** : les paramètres de connexion n'autorisent pas la connexion actuelle. Par exemple, vous utilisez les données mobiles mais seul le Wi-Fi est autorisé, ou vous n'êtes pas sur un des réseaux Wi-Fi autorisés (SSID).
* **Bloqué par les options de recharge** : les paramètres de connexion autorisent la synchronisation seulement pendant la recharge du téléphone (ou seulement sur batterie), et ce n'est pas le cas en ce moment.
* **Aucune connectivité** : le téléphone n'a pas de connexion Internet.

Vérifiez les [paramètres de connexion NSClient](#Preferences-nsclient) : **Utiliser les données mobiles**, **Utiliser l'itinérance**, **Utiliser le WiFi**, **SSID WiFi**, **Synchroniser sur batterie** et **Synchroniser pendant la charge**.

### Paramètres MGC

(FAQ-advanced-filtering)=

#### Pourquoi AAPS indique-t-il « SMB toujours et après glucides désactivés car la source GLY active ne prend pas en charge le filtrage avancé » ?

**Activer en permanence les SMB** et **Activer les SMB après les glucides** ne peuvent être utilisés qu'avec une [source de glycémie fiable](#GettingStarted-TrustedBGSource) : un capteur et une application MGC qui peuvent indiquer à **AAPS** de quel capteur viennent les valeurs. Avec toute autre source de glycémie, **AAPS** désactive ces deux options et affiche ce message. Consultez la liste des sources fiables et, si votre capteur y figure, vérifiez que vous utilisez une des applications MGC indiquées pour lui. Voir aussi [Lissage des données de glycémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pompe

#### Piles

La boucle peut vider la pile de la pompe plus vite qu'une utilisation normale, car le système communique beaucoup plus souvent par Bluetooth qu'un utilisateur en mode manuel. Il est préférable de changer la pile à 25 %, car la communication devient alors difficile. Vous pouvez définir des alarmes d'avertissement pour la pile de la pompe à l'aide de la variable PUMP_WARN_BATT_P dans votre site Nightscout. Les astuces pour augmenter la durée de vie de la pile sont les suivantes :

* réduire la durée d'affichage de l'écran LCD (dans le menu des paramètres de la pompe)
* réduire la durée du rétro-éclairage (dans le menu des paramètres de la pompe)
* sélectionnez les paramètres de notification à un bip plutôt que de vibrer (dans le menu des paramètres de la pompe)
* appuyez sur les boutons de la pompe seulement pour la recharge ; utilisez AAPS pour voir tout l'historique, le niveau de la pile et le volume du réservoir.
* Sur certains téléphones, l'application AAPS peut être souvent fermée pour économiser l'énergie ou libérer de la RAM. Quand AAPS est réinitialisé à chaque démarrage, il établit une connexion Bluetooth avec la pompe et relit le débit basal actuel et l'historique des bolus. Cela consomme de la batterie. Pour voir si cela se produit, activez **Enregistrer les démarrages AAPS dans NS** dans les **Paramètres Avancés** de NSClient : Nightscout recevra un événement à chaque redémarrage d'AAPS, ce qui permet de suivre facilement le problème. Pour limiter ce problème, désactivez l'optimisation de la batterie pour AAPS afin que le téléphone arrête de le fermer : voir [économies de batterie](#FAQ-battery-savings) ci-dessous.
* nettoyez les bornes de la pile avec une lingette à l'alcool pour vous assurer qu'il ne reste aucune cire ou graisse de fabrication.
* pour les [pompes Dana R/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md), la procédure de démarrage fait passer un courant élevé dans la pile pour casser volontairement le film de passivation (qui évite la perte d'énergie pendant le stockage), mais cela ne le casse pas toujours à 100 %. Retirez et réinsérez la pile 2 à 3 fois jusqu'à ce qu'elle affiche 100 % à l'écran, ou utilisez la clé de la pile pour court-circuiter brièvement la pile avant de l'insérer : posez la clé sur les deux bornes pendant une fraction de seconde.
* voir aussi d'autres conseils pour [certains types de piles](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changement des réservoirs et des canules

Le réservoir doit être changé directement sur la pompe, puis le changement est enregistré dans **AAPS**. Suivez le [guide pas à pas pour changer le réservoir et la canule de la pompe](#pumps-cannulas-changing-reservoir-and-cannula).

### Fond d'écran

Vous trouverez le fond d'écran AAPS pour votre téléphone sur la [page Téléphones](#Phones-phone-wallpaper).

### Utilisation quotidienne

Beaucoup des situations ci-dessous peuvent être préparées une seule fois sous forme de [scénario](#scenes) : un préréglage qui change le profil, la cible temporaire et d'autres paramètres en un seul appui. **AAPS** propose des modèles prêts à l'emploi, par exemple *Exercice*, *Sommeil*, *Alcool* ou *Baignade*.

#### Hygiène

(what-to-do-when-taking-a-shower-or-bath)=

##### Que faire pour prendre une douche ou un bain ?

Vous pouvez retirer la pompe pour prendre une douche ou un bain. Pour ce court laps de temps, vous n'en avez peut-être pas besoin, mais vous devez indiquer à AAPS que vous avez déconnecté la pompe pour que les calculs de l'IA soient corrects. Voir la [description ci-dessus](#FAQ-disconnect-pump). Le modèle de [scénario](#scenes) *Baignade* le fait pour vous.

#### Travail

Selon votre travail, vous pouvez choisir d'utiliser des paramètres de traitement différents les jours de travail. Si vous utilisez la boucle, pensez à un [changement de profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) pour votre journée de travail habituelle. Par exemple, vous pouvez passer à un profil supérieur à 100 % si vous avez un emploi moins fatigant (par ex. assis derrière un bureau), ou moins de 100 % si vous êtes actif et debout toute la journée. Vous pouvez aussi envisager une cible temporaire haute ou basse ou un [décalage horaire de votre profil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) quand vous travaillez beaucoup plus tôt ou plus tard que d'habitude, ou si vous travaillez en horaires décalés. Vous pouvez aussi créer un deuxième profil (par ex. « maison » et « jour de travail ») et faire chaque jour un changement de profil vers le profil dont vous avez réellement besoin, ou enregistrer vos paramètres de jour de travail comme [scénario](#scenes).

### Activités de loisirs

(FAQ-sports)=

#### Sports

Vous devez retravailler vos vieilles habitudes sportives à partir de l'époque "d'avant-boucle". Si vous consommez simplement des glucides de sportifs comme avant, la boucle fermée les reconnaîtra et les corrigera en conséquence.

Vous auriez donc plus de glucides actifs, mais en même temps la boucle les compenserait en délivrant de l'insuline.

Lors de la boucle, vous devriez essayer ces étapes :

* Make a [profile switch](#ProfileSwitch-change-percentage) below 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Réglez une [cible temporaire d'activité](#TempTargets-activity-temp-target) au-dessus de votre cible habituelle. Avec un pourcentage inférieur à 100 % et une durée, le même écran **Activer** propose un interrupteur **Cible Temp / Activité** qui lance les deux en même temps.
* Si vous utilisez les SMB, vérifiez que [« Activer les SMB avec Cibles Temp hautes »](#Open-APS-features-enable-smb-with-high-temp-targets) et [« Activer en permanence les SMB »](#Open-APS-features-enable-smb-always) sont désactivés.

Le pré-traitement et le post-traitement de ces paramètres sont importants. Faites les changements suffisamment tôt avant le sport et tenez compte de l'effet du remplissage des muscles (en glycogène).

Les modèles de [scénario](#scenes) *Exercice* et *Nuit après exercice* regroupent ces paramètres, pour que vous puissiez les lancer en un seul appui. Si vous faites du sport régulièrement à la même heure (par ex. un cours de sport dans votre salle), vous pouvez utiliser l'[automatisation](../DailyLifeWithAaps/Automations.md) pour lancer le changement de profil et la CT, ou le scénario. L'automatisation basée sur l'emplacement peut également être une idée, mais rend l'anticipation du traitement plus difficile.

Le pourcentage du changement de profil, la valeur de votre cible temporaire d'activité et le meilleur moment pour effectuer ces changements sont propres à chacun. Commencez prudemment si vous recherchez la valeur qui vous convient (commencez par un pourcentage faible et une CT plus élevée).

#### Sexe

Vous pouvez retirer la pompe pour être « libre », mais vous devez l'indiquer à AAPS pour que les calculs de l'IA soient corrects. Voir la [description ci-dessus](#FAQ-disconnect-pump).

#### Boire de l'alcool

La consommation d'alcool est dangereuse en mode boucle fermée, car l'algorithme ne peut pas prévoir correctement l'effet de l'alcool sur la glycémie. Vous devez trouver votre propre méthode pour gérer cela avec les fonctions suivantes d'AAPS :

* désactivation de la boucle fermée et traitement du diabète manuellement ou
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unannounced meal or
* faire un [changement de profil](#ProfileSwitch-change-percentage) nettement inférieur à 100 % 

Le modèle de [scénario](#scenes) *Alcool* est un point de départ que vous pouvez adapter à votre propre méthode.

Lorsque vous buvez de l'alcool, vous devez toujours avoir un œil sur votre MGC pour éviter manuellement une hypoglycémie en mangeant des glucides.

#### Sommeil

##### Comment utiliser la boucle la nuit sans ondes mobiles ni Wi-Fi ?

De nombreux utilisateurs mettent le téléphone en mode avion la nuit. Si vous voulez que la boucle vous aide pendant votre sommeil, procédez comme suit (cela fonctionne seulement si votre application MGC tourne sur le même téléphone qu'AAPS, comme xDrip, Juggluco ou BYODA ; cela ne fonctionnera PAS si vous recevez les glycémies via Nightscout) :

1. Activez le mode avion de votre mobile.
2. Attendez que le mode avion soit actif.
3. Activez le Bluetooth.

Maintenant vous ne recevez pas d'appels téléphonique, et vous n'êtes pas connecté à Internet. Mais la boucle est toujours en cours.

Certaines personnes ont eu des problèmes de diffusion locale (AAPS ne reçoit pas les glycémies de xDrip) quand le téléphone est en mode avion. Dans xDrip, allez dans Settings > Inter-app settings > Identify receiver et saisissez `info.nightscout.androidaps`.

![xDrip Paramètres inter-applications de base Identify receiver](../images/xDrip_InterApp_NS.png)

Si vous voulez d'autres paramètres la nuit (par exemple une cible plus haute), le modèle de [scénario](#scenes) *Sommeil* est un bon point de départ.

#### Voyages

##### Comment gérer les changements de fuseau horaire ?

Avec les pompes Dana R et Dana R coréenne, vous n'avez rien à faire. Pour les autres pompes, voir la page [Changement de fuseau horaire et heure d'été](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) pour plus de détails.

### Sujets médicaux

#### Hospitalisation

Si vous voulez partager des informations sur AAPS et la boucle DIY avec vos médecins, vous pouvez imprimer le [guide d'AAPS pour les médecins](../UsefulLinks/ClinicianGuideToAaps.md).

#### Rendez-vous médical avec votre diabétologue

##### Rapports

Vous pouvez montrer vos rapports Nightscout (https://YOUR-NS-SITE.com/report) ou consulter [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Questions fréquentes sur Discord et leurs réponses...

### Mon problème n'est pas répertorié ici.

Voir [où obtenir de l'aide](../GettingHelp/WhereCanIGetHelp.md). Si vous avez trouvé la solution vous-même, **rappelez-nous de l'ajouter à cette liste !**

### Compilation et installation

(FAQ-build-errors)=

#### J'ai des problèmes ou des erreurs lors de la compilation de l'application.

Consultez la page de dépannage correspondant à votre façon de compiler **AAPS** (voir [Compilation d'AAPS](../SettingUpAaps/BuildingAaps.md)) :

* compilation dans un navigateur : [Dépannage de la compilation dans le navigateur](#aaps-ci-troubleshooting),
* compilation avec Android Studio : [Dépannage d'Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Erreur de compilation : file name too long

Cette erreur peut arriver lors de la compilation avec Android Studio : la compilation s'arrête avec une erreur qui indique que le nom de fichier est trop long. Solutions possibles : Déplacez vos sources dans un dossier plus proche de la racine de votre disque (par ex. "C:\src\AndroidAPS").

Depuis Android Studio : Assurez-vous que la synchronisation et l'indexage "Gradle" sont terminés après avoir ouvert le projet et effectué un Pull depuis GitHub. Exécutez Build->Clean Project avant de faire un Rebuild Project. Exécutez File->Invalidate Caches and Restart Android Studio.

(FAQ-running-dev-version)=

#### Alerte : Version Dev. La boucle fermée est désactivée

**AAPS** affiche ce message quand vous utilisez une version de développement (dev) sans le mode ingénierie : dans une version dev, la boucle fermée fonctionne seulement en mode ingénierie.

La version dev sert aux tests, pas à une vraie utilisation de la boucle : lisez [Branche de développement](../AdvancedOptions/DevBranch.md) avant d'aller plus loin.

Pour activer le mode ingénierie :

1. Placez un fichier nommé `engineering_mode` dans le sous-dossier `extra` de votre répertoire AAPS (le dossier choisi dans l'assistant de configuration, en général `AAPS/extra`). N'importe quel fichier convient, tant qu'il porte le bon nom.
2. Redémarrez **AAPS** pour qu'il trouve le fichier.

Astuce : faites une copie d'un fichier log existant et renommez-la en "engineering_mode" (attention : sans extension de fichier !).

### Objectifs

#### Je suis coincé sur un objectif et j'ai besoin d'aide.

Lisez d'abord [Compléter les objectifs](../SettingUpAaps/CompletingTheObjectives.md). Si vous êtes toujours bloqué, faites une capture d'écran de la question et des réponses et publiez-la sur le canal AAPS de Discord. N'oubliez pas de préciser quelles options vous choisissez (ou pas) et pourquoi. Vous obtiendrez des conseils et de l'aide, mais vous devrez trouver les réponses vous-même.

### Paramètres, mots de passe et sauvegardes

(FAQ-reset-master-password)=

#### Comment réinitialiser le mot de passe principal ?

Si vous avez oublié votre mot de passe principal, vous pouvez le réinitialiser au numéro de série de votre pompe :

1. Créez un fichier vide nommé `PasswordReset` (sans extension de fichier) dans le sous-dossier `extra` de votre répertoire AAPS (en général `AAPS/extra`).
2. Redémarrez **AAPS**. Votre pompe doit être connectée : **AAPS** affiche « En attente de la pompe… » et doit lire le numéro de série de la pompe dans les 30 secondes.
3. **AAPS** affiche « Mot de passe défini ! » : votre mot de passe principal est maintenant le **numéro de série de la pompe**. Le fichier `PasswordReset` est supprimé automatiquement.
4. Ouvrez **Paramètres** > **Protection** > **Mot de passe principal** et définissez un nouveau mot de passe.

Si la pompe n'est pas jointe à temps, rien ne change : vérifiez la connexion de la pompe et réessayez.

Cela réinitialise seulement le mot de passe principal. Un mot de passe ou code PIN des paramètres, de l'application ou des bolus n'est pas réinitialisé, mais vous pouvez toujours utiliser le mot de passe principal à leur place.

    {admonition} Anciens fichiers de paramètres
    :class: warning
    Les fichiers de paramètres exportés avec l'ancien mot de passe principal ne peuvent être importés qu'avec cet ancien mot de passe.

(FAQ-where-are-settings-files)=

#### Où puis-je trouver les fichiers de paramètres ?

Les fichiers de paramètres sont enregistrés dans le sous-dossier `preferences` du répertoire AAPS choisi dans l'[assistant de configuration](#SetupWizard-StoragePermission) (par exemple `/internal storage/AAPS/preferences`). Si vous avez configuré un dossier cloud (Google Drive), vos exports peuvent aussi y être enregistrés. Voir [Créer et restaurer des sauvegardes](../Maintenance/ExportImportSettings.md).

ATTENTION : veillez à ne pas perdre votre mot de passe, car sans lui vous ne pourrez pas importer un fichier de paramètres chiffré !

(FAQ-import-settings-earlier-versions)=

#### Comment importer les paramètres d'anciennes versions d'AAPS dans AAPS v3 ou v4 ?

Vous pouvez seulement importer (dans AAPS v3 ou v4) des paramètres exportés avec AAPS v2.8x ou plus récent. Si vous utilisiez une version d'AAPS antérieure à v2.8x ou si vous devez utiliser des exports de paramètres antérieurs à v2.8x, vous devez d'abord installer AAPS v2.8. Importez les anciens paramètres de v2.x dans v2.8. Après avoir vérifié que tout est correct, vous pouvez exporter les paramètres depuis v2.8. Installez la version actuelle d'AAPS et importez-y les paramètres de v2.8.

Si vous utilisez la même clé pour compiler l'ancienne et la nouvelle version, vous n'aurez même pas besoin d'importer les paramètres. Vous pouvez installer la nouvelle version par-dessus l'ancienne.

De nouveaux objectifs ont été ajoutés. Vous devrez les valider.

(FAQ-delete-treatments)=

#### Où puis-je supprimer des traitements ?

Ouvrez le **menu** (☰) et choisissez **Historique Traitements**. Faites un appui long sur une entrée pour la sélectionner, appuyez sur d'autres entrées si besoin, puis appuyez sur l'icône **corbeille** et confirmez. Voir [Historique Traitements](#aaps-screens-treatments).

### Problèmes de téléphone et de connexion

(FAQ-aaps-stops)=

#### AAPS s’arrête tous les jours autour de la même heure.

* Sur certains téléphones, Google Play Protect peut arrêter **AAPS** chaque matin. Si cela arrive, allez dans les options de Google Play et désactivez **Google Play Protect**.
* Recherchez les applications de « nettoyage » (par ex. CCleaner) et désinstallez-les.
* Désactivez toutes les optimisations de batterie pour **AAPS** (voir [économies de batterie](#FAQ-battery-savings) ci-dessous).

(FAQ-battery-savings)=

#### Comment configurer les économies de batterie ?

Votre téléphone peut mettre en pause **AAPS** et les applications liées (application MGC, Bluetooth) quand vous ne l'utilisez pas. **AAPS** ne peut alors plus faire son travail, et les connexions Bluetooth avec le capteur et la pompe (ou le RileyLink) peuvent être coupées, ce qui provoque des alertes « pompe hors de portée » et des erreurs de communication.

Désactivez l'optimisation de la batterie pour **AAPS**, votre application MGC (par ex. xDrip) et l'application système Bluetooth. La façon de le faire dépend de la marque, du modèle et de la version Android du téléphone :

* voir [Optimisation de la batterie](#generaltroubleshooting-android-related-issues) pour les téléphones Pixel, Samsung et Huawei,
* dans **AAPS**, ouvrez le **menu** (☰) > **À propos** et appuyez sur **Garder l'appli en arrière plan ?**, ou consultez [Don't kill my app](https://dontkillmyapp.com/) pour les autres marques.

Si vous n'êtes pas sûr que les économies de batterie causent votre problème, vous pouvez désactiver temporairement toutes les économies de batterie du téléphone : votre batterie se videra plus vite, mais vous verrez vite si le problème disparaît.

(FAQ-pump-unreachable-alerts)=

#### Alertes « Pompe hors de portée » plusieurs fois par jour ou la nuit.

Votre téléphone met peut-être en pause **AAPS** ou même le Bluetooth, ce qui fait perdre la connexion avec la pompe ou le RileyLink (voir [économies de batterie](#FAQ-battery-savings) ci-dessus).

Vous pouvez aussi changer le moment où l'alerte est déclenchée : appuyez sur l'icône **Paramètres** (engrenage) en haut à droite de l'écran principal, puis choisissez **Alertes locales** > **Seuil d'alerte pompe hors de portée** (30 à 300 minutes). Consultez la page de votre pompe : certaines recommandent une valeur, par ex. 120 minutes pour l'[Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mon Link/ma pompe/mon pod ne répond pas (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaLink).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump).

Essayez d'abord le bouton **Réinitialiser le RileyLink** sur l'écran de la pompe (voir la page de votre pompe : [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Si cela n'aide pas, le moyen le plus simple pour que tous ces éléments fonctionnent de nouveau ensemble est :

1. Éteignez le Link.
2. Quittez **AAPS** (**menu** (☰) > **Quitter**).
3. Faites un appui long sur l'icône **AAPS**, ouvrez les **Infos sur l'appli** d'Android, appuyez sur **Forcer l'arrêt**, puis **Stockage** > **Vider le cache** (n'effacez PAS le stockage/les données !).
4. Rarement, certains téléphones doivent être redémarrés à cette étape. Vous pouvez essayer sans redémarrer.
5. Allumez le Link.
6. Démarrez **AAPS**.
7. Sur l'écran de la pompe, appuyez sur **Appairer le RileyLink** et sélectionnez de nouveau votre Link.

### Contrôle à distance

(FAQ-aapsclient)=

#### Configurer et utiliser l'application à distance AAPSClient

**AAPSClient** est une application séparée qui permet à un aidant de suivre et de contrôler **AAPS** à distance. Depuis **AAPS** v4, contrôler **AAPS** depuis AAPSClient nécessite un appairage unique entre les deux applications. Voir :

* [L'application AAPSClient](#aapsclient-app) : installation, premier démarrage et appairage,
* [Contrôle maître ↔ client](#client-master-control) : ce qui peut être contrôlé et comment fonctionne l'appairage,
* [AAPSClient sur une montre connectée](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Les traitements que je saisis sur le site Nightscout ne sont pas appliqués

C'est le [mode renforcé](#client-master-control-hardened-mode). Tant que le contrôle par le client est activé (toujours en mode simple), **AAPS** accepte les modifications seulement des clients appairés, pas du site Nightscout ni d'autres applications. Saisissez-les plutôt sur un **AAPSClient** appairé.

### Alertes et avertissements

#### J'ai un badge d'avertissement rouge (triangle rouge) / AAPS n'active pas la boucle fermée / La boucle reste en AGB / J'avais un triangle jaune

Le badge d'avertissement rouge sur le raccourci de la source GLY est une fonction de sécurité d'AAPS. Voir [Signe d'avertissement glycémie](#aaps-screens-bg-warning-sign) pour l'explication complète.

Un badge d'avertissement rouge sur le raccourci de la source GLY dans la barre du bas (le triangle rouge des anciennes versions) signifie que vous avez des glycémies en double et qu'AAPS ne peut pas calculer précisément les deltas. Une boucle fermée passe en mode **Arrêt Glycémie Basse** : elle réduit ou arrête toujours votre débit basal pour vous protéger des hypoglycémies, mais elle ne donne pas d'insuline de correction. Vous devez supprimer une glycémie de chaque valeur en double pour effacer l'avertissement. Appuyez sur le raccourci pour ouvrir l'[écran de la source GLY](#aaps-screens-bg-source) : le doublon est surligné en rouge. Faites un appui long sur une ligne à supprimer, cochez une ligne de chaque doublon et appuyez sur l'icône corbeille. Vous devrez peut-être réinitialiser les bases de données d'AAPS s'il y a trop de glycémies en double. Dans ce cas, vous perdrez aussi les statistiques, l'IA, les GA et le profil sélectionné.

Quand l'avertissement a disparu, AAPS ne revient pas tout seul en **Boucle Fermée**. Appuyez sur l'icône de la boucle sur l'écran principal et choisissez de nouveau **Boucle Fermée**.

Origine possible du problème : xDrip et/ou NS complètent les glycémies manquantes (backfill).

Le triangle jaune des anciennes versions signalait un délai instable entre les lectures de glycémie (glycémies pas reçues régulièrement toutes les 5 min, ou glycémies manquantes), ce qui arrive souvent avec un Libre ou après un changement de transmetteur G6. **AAPS** 4 ne l'affiche plus : il recalcule les valeurs en arrière-plan et la boucle fonctionne correctement.

### Omnipod Dash

(FAQ-move-dash-pod)=

#### Puis-je déplacer un Pod DASH actif vers un autre téléphone ?

L'état du Pod est inclus dans les paramètres exportés : un Pod actif peut donc être déplacé vers un autre téléphone en exportant les paramètres juste avant le transfert et en les important sur l'autre téléphone. Ce n'est pas officiellement pris en charge et vous risquez de perdre le Pod : si possible, essayez quand votre Pod est sur le point d'expirer.

Lisez d'abord ces sections :

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported while wearing your current Pod,
* [Jeter un pod](#omnipod-dash-discard-pod), pour retirer ensuite le Pod de l'ancien téléphone. Gardez l'ancien téléphone en mode avion jusqu'à ce que le Pod soit jeté, pour que les deux téléphones ne communiquent jamais avec le Pod en même temps.