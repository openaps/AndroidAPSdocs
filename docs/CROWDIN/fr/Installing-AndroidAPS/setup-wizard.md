# Assistant de configuration

Lorsque vous lancez **AAPS** pour la première fois, vous êtes guidé par l'"**Assistant de configuration**", pour configurer rapidement tous les paramètres de base de votre application. L'**Assistant de configuration** vous guide, afin d'éviter d'oublier quelque chose d'essentiel. Par exemple, les **paramètres d'autorisations** sont fondamentaux pour configurer correctement **AAPS**.

Cependant, il n'est pas obligatoire de tout configurer complètement lors de la première exécution de l'**Assistant de configuration** et vous pouvez facilement quitter l'Assistant et y revenir plus tard. Il y a trois possibilités après l'exécution de l'**Assistant de configuration** pour optimiser davantage/changer la configuration. Ces options seront détaillées dans la prochaine section. Vous pouvez donc tout à fait sauter quelques points de l'Assistant de Configuration, vous pourrez facilement y revenir plus tard.

Pendant, et juste après avoir l'exécution de l'**Assistant de configuration**, vous ne verrez pas forcément de changements notables se produire dans **AAPS**. Pour mettre en place votre boucle **AAPS**, vous devez suivre les **Objectifs** pour débloquer chaque fonctionnalité l'une après l'autre. Vous commencerez l'**Objectif 1** à la fin de l'Assistant de Configuration. C'est vous le maître d'**AAPS**, pas l'inverse.

```{admonition} Preview Objectives
:class: note
Si vous souhaitez connaître la structure des objectifs, veuillez lire [Compléter les objectifs](../Usage/completing-the-objectives.md) mais revenez ensuite ici pour lancer l'assistant de configuration d'abord.

```

D'expérience, nous savons que les personnes qui se lancent se mettent souvent la pression pour configurer **AAPS** le plus rapidement possible, ce qui peut entraîner de la frustration car il y a beaucoup de choses à apprendre.

Alors, prenez votre temps pour configurer votre boucle, les avantages d'une boucle **AAPS** bien configurée sont énormes.

```{admonition} Ask for Help
:class: note
Si vous trouvez une erreur dans la documentation ou si vous avez une suggestion pour mieux expliquer quelque chose, vous pouvez demander de l'aide à la communauté comme expliqué dans [Où trouver de l'aide](../Where-To-Go-For-Help/Connect-with-other-users.md).
```

## Guide pas à pas de l'assistant de configuration AAPS

### Message de bienvenue

Il s'agit juste d'un message de bienvenue que vous pouvez passer avec le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_125636.png)

### Contrat de licence

Dans l'accord de licence de l'utilisateur final, il y a des informations importantes sur les aspects légaux de l'utilisation de **AAPS**. Veuillez le lire attentivement.

Si vous ne comprenez pas, ou n'êtes pas d'accord avec le contrat de licence de l'utilisateur final, vous ne pouvez tout simplement pas utiliser **AAPS** !

Si vous comprenez et êtes d'accord, veuillez cliquer sur le bouton "JE COMPRENDS ET J'ACCEPTE" et poursuivre avec l'Assistant de configuration :

![image](../images/setup-wizard/Screenshot_20231202_125650.png)

### Autorisations requises

**AAPS** nécessite certains prérequis pour fonctionner correctement.

Dans les écrans suivants, on vous pose plusieurs questions auxquelles vous devez accepter de répondre pour que **AAPS** fonctionne. L'assistant vous explique pourquoi il demande ces paramètres.

Sur cette page, nous nous efforçons de fournir davantage d'informations de contexte, de traduire un langage technique en langage courant ou d'expliquer la raison.

Cliquez sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_125709.png)

La consommation de la batterie sur les smartphones reste une problématique, car la performance des batteries est encore assez limitée. Par conséquent, le système d'exploitation Android de votre smartphone restreint par défaut les applications qui consomment du temps processeur, et donc de la batterie.

Cependant, **AAPS** doit s'exécuter régulièrement, notamment pour recevoir les glycémies toutes les quelques minutes, puis appliquer l'algorithme qui décide comment gérer cette information, en fonction de vos spécifications. Par conséquent, nous devons l'autoriser à le faire, au niveau d'Android.

Vous le ferez en donnant cette autorisation.

Cliquez sur le bouton "DEMANDE D'AUTORISATION" :

![image](../images/setup-wizard/Screenshot_20231202_125721.png)

Cliquez "Autoriser" :

![image](../images/setup-wizard/Screenshot_20231202_125750.png)

Android définit une autorisation spéciale pour les applications qui souhaitent vous envoyer des notifications.

Bien qu'il soit utile de pouvoir désactiver les notifications, _par ex._ des applications de réseaux sociaux, il est essentiel que vous permettiez à **AAPS** de vous envoyer des notifications.

Cliquez sur le bouton "DEMANDE D'AUTORISATION" :

![image](../images/setup-wizard/Screenshot_20231202_125813.png)

Sélectionnez l'application "AAPS" :

![image](../images/setup-wizard/Screenshot_20231202_125833.png)

Activer "Autoriser la superposition sur d'autres applis" en faisant glisser le curseur vers la droite :

![image](../images/setup-wizard/Screenshot_20231202_125843.png)

Le curseur doit ressembler à ceci une fois activé :

![image](../images/setup-wizard/Screenshot_20231202_125851.png)

Dans Android, l'utilisation du Bluetooth est liée à la capacité d'utiliser les services de localisation. Peut-être l'avez-vous vu aussi dans d'autres applications. Il est courant d'avoir besoin d'une autorisation de localisation si vous voulez utiliser le bluetooth.

**AAPS** utilise le bluetooth pour communiquer avec votre MGC et votre pompe à insuline si elles sont directement contrôlées par **AAPS** et non par une autre application utilisée par **AAPS**. Les détails peuvent différer d'une configuration à l'autre.

Cliquez sur le bouton "DEMANDE D'AUTORISATION" :

![image](../images/setup-wizard/Screenshot_20231202_125924.png)

Cette autorisation est importante. Sans cela, **AAPS** ne peut pas fonctionner correctement du tout.

Cliquez sur "Lorsque vous utilisez l'appli" :

![image](../images/setup-wizard/Screenshot_20231202_125939.png)

Cliquez sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_130002.png)

**AAPS** a besoin de stocker des informations sur la mémoire interne de votre smartphone. Ce stockage permanent sur la mémoire interne signifie que les fichiers seront toujours disponibles, même après le redémarrage de votre smartphone. D'autres données sont simplement perdues, car elles ne sont pas enregistrées sur la mémoire interne.

Cliquez sur le bouton "DEMANDE D'AUTORISATION" :

![image](../images/setup-wizard/Screenshot_20231202_130012.png)

Cliquez sur "Autoriser" :

![image](../images/setup-wizard/Screenshot_20231202_130022.png)

Vous êtes informé que vous devez redémarrer votre smartphone après ce changement pour qu'il prenne effet.

Veuillez **ne pas quitter l'Assistant de configuration maintenant**. Vous pourrez le faire après avoir terminé l'Assistant de Configuration.

Cliquez sur "OK" puis sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_130031.png)

### Mot de passe principal

Comme la configuration d'**AAPS** contient des données sensibles (par exemple la clé API pour accéder à votre serveur Nightscout), elle est cryptée par un mot de passe que vous allez définir ici.

La deuxième phrase est très importante, s'il vous plaît **NE PERDEZ PAS VOTRE MOT DE PASSE PRINCIPAL**. Assurez vous de le sauvegarder, _par ex._ sur Google Drive. Google Drive est pratique pour les sauvegardes car c'est Google qui le gère pour vous. Votre smartphone ou PC peuvent vous lâcher et vous pourriez ne pas avoir de sauvegarde locale. Si vous oubliez votre mot de passe principal, il peut être difficile de récupérer la configuration de votre profil et de progresser dans les **Objectifs** par la suite.

Après avoir saisi le mot de passe deux fois, veuillez cliquer sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_130122.png)

### Téléchargement Fabric

Ici vous pouvez autoriser l'envoi automatique des rapports d'erreur en cas de plantage, ainsi que de données sur l'utilisation de l'appli.

Ce n'est pas obligatoire, mais c'est une bonne pratique de l'activer.

Cela aide les développeurs à mieux comprendre votre utilisation de l'application et les informe des plantages qui se produisent.

Ils/Elles reçoivent :

1. Des informations quand l'application plante, ce qu'ils/elles ne sauraient pas autrement puisque dans leur propre configuration tout fonctionne correctement et
2. Dans les données envoyées (informations sur le plantage), il y a des informations sur les circonstances dans lesquelles le plantage s'est produit et quel type de configuration est utilisé.

Cela aide donc les développeurs à améliorer l'application.

Veuillez activer le "Téléchargement Fabric" en faisant glisser le curseur vers la droite :

![image](../images/setup-wizard/Screenshot_20231202_130136.png)

De plus, vous pouvez renseigner un moyen de contact si jamais si les développeurs ont besoin de vous contacter pour des questions ou des préoccupations urgentes :

![image](../images/setup-wizard/Screenshot_20231202_130147.png)

Après avoir rempli vos "informations de contact", cliquez sur le bouton "OK". Vous pouvez y mettre votre nom sur Facebook, Discord, ... Mettez juste ce qui est le plus simple pour vous pour qu'on puisse vous contacter :

![image](../images/setup-wizard/Screenshot_20231202_135748.png)

Cliquez sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_135807.png)

### Unités (mg/dL <-> mmol/L)

Veuillez sélectionner si vos glycémies sont en mg/dL ou mmol/L, puis cliquez sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_135830.png)

### Paramètres d'affichage

Ici, vous pouvez définir les valeurs entre lesquelles la glycémie sera considérée comme "dans la cible". Vous pouvez le laisser tel quel pour l'instant et le modifier plus tard.

Les valeurs que vous choisissez n'affectent que l'affichage du graphique, et rien d'autre.

Votre cible de glycémie, elle, est configurée ailleurs, dans votre profil.

Votre plage cible pour l'analyse du TIR (temps dans la plage cible) est configurée séparément dans votre serveur de reporting.

Cliquez sur le bouton "SUIVANT" :

![image](../images/setup-wizard/Screenshot_20231202_135853.png)

### Synchronisation avec le serveur de reporting, etc

Ici, vous configurez le téléchargement des données vers votre serveur de reporting.

Vous pourriez également configurer d'autres éléments ici, mais pour cette première exécution, nous nous concentrerons simplement sur le serveur de reporting.

Si vous n'êtes pas en mesure de le configurer pour le moment, passez cette étape pour l'instant. Vous pouvez le configurer plus tard.

Sur cette page, quand vous activez un élément (plugin) avec la case à cocher à gauche, vous pouvez alors choisir de cocher la case de visibilité (œil) sur la droite. Quand cette case de visibilité est cochée, le plugin sera accessible directement depuis le menu supérieur sur l'écran d'accueil de **AAPS**. Vous devriez cocher la case de visibilité si vous configurez votre serveur de reporting à ce stade.

Dans cet exemple, nous sélectionnons Nightscout comme serveur de reporting, et nous allons le configurer.

```{admonition} Make sure to choose the correct **NSClient** version for your needs! 
:class: Note
Cliquez [ici](./Releasenotes.md) pour les notes de version de **AAPS** 3.2.0.2 qui expliquent les différences entre l'option du haut **NSClient** (il s'agit de la "v1", même si ce n'est pas indiqué dans le libellé) et la deuxième option, **NSClient v3**. 

Les utilisateurs de Nightscout devraient choisir **NSClient v3**, sauf si vous voulez surveiller ou envoyer des traitements à distance via Nightscout (_par ex._ en tant que parent ou aidant, utilisant **AAPS** pour un enfant), dans ce cas, choisissez la première option "**NSClient**" jusqu'à nouvel ordre. 
```

Pour Tidepool, c'est encore plus simple, car vous n'avez besoin que de vos informations de connexion personnelles.

Après avoir fait votre sélection, cliquez sur le bouton Engrenage à côté de l'élément que vous avez sélectionné :

![image](../images/setup-wizard/Screenshot_20231202_140916.png)

Ici, vous configurez l'accès au serveur de reporting Nightscout.

Veuillez cliquer sur "URL Nightscout" :

![image](../images/setup-wizard/Screenshot_20231202_140952.png)

Entrez l'URL Nightscout de votre serveur personnel. Il s'agit de l'URL que vous avez configurée vous-même, ou qui vous a été fournie par votre fournisseur Nightscout.

Cliquez sur le bouton "OK" :

![image](../images/setup-wizard/Screenshot_20231202_141051.png)

Entrez votre jeton d'accès nightscout. Il s'agit du jeton d'accès que vous avez défini pour votre serveur Nightscout. Sans ce jeton, l'accès ne fonctionnera pas.

Si vous ne l'avez pas pour le moment, veuillez lire la page sur la mise en place du serveur de reporting dans la documentation **AAPS**.

Après avoir rempli le "**jeton d'accès NS**" et cliqué sur "OK", veuillez cliquer sur le bouton "Synchronisation" :

![image](../images/setup-wizard/Screenshot_20231202_141131.png)

Vous pouvez sélectionner "Télécharger des données vers NS" si vous avez bien configuré Nightscout lors des étapes précédentes de l'Assistant de Configuration.

Si vous avez des profils enregistrés sur Nightscout et que vous souhaitez les récupérer sur **AAPS**, activez "Recevoir les profils sauvegardés" :

![image](../images/setup-wizard/Screenshot_20231202_141219.png)

Retournez à l'écran précédent et cliquez sur "Option d'alarme" :

![image](../images/setup-wizard/Screenshot_20231202_141310.png)

Pour l'instant, laissez ces options désactivées. Nous vous avons simplement amenés sur cet écran pour vous montrer les différentes options que vous pourriez utiliser à l'avenir. Pour le moment, vous n'en avez pas besoin.

Retournez à l'écran précédent et sélectionnez "Paramètres de connexion".

Ici vous pouvez affiner les conditions de téléchargement vers le serveur de reporting.

Les aidants doivent activer "Utiliser la connexion mobile" sinon le smartphone qui sert au dépendant/enfant ne peut pas télécharger les données en dehors de la portée du WiFi, par exemple sur le chemin de l'école.

Les autres utilisateurs d'**AAPS** peuvent désactiver le transfert via la connexion mobile s'ils veulent économiser de la bande passante ou de la batterie.

Si vous ne savez pas trop, laissez simplement tout coché.

Retournez à l'écran précédent et sélectionnez "Paramètres Avancés".

![image](../images/setup-wizard/Screenshot_20231202_141326.png)

Activer "Démarrage AAPS entré dans NS" si vous souhaitez voir cette information dans le serveur de reporting. Cela peut vous aider à savoir à distance si et quand l'application a été redémarrée, en particulier en tant qu'aidant.

Ça peut être intéressant pour le moment, pour vérifier qu'**AAPS** est correctement configuré, mais par la suite, il n'est généralement plus si important de voir dans Nightscout les arrêts et démarrages d'**AAPS**.

Activer "Créer des messages d'erreur" et "Créer des annonces à partir des alertes Glucides requis".

Laissez la fonction "Ralentir les téléversements" désactivée. Cette option n'est utile que dans un contexte particulier, si par exemple vous avez beaucoup de données à envoyer au serveur Nightscout, et que ce serveur est lent à traiter les données.

Revenez deux fois en arrière, jusqu'à la liste des plugins et sélectionnez "SUIVANT" pour passer à la suite :

![image](../images/setup-wizard/Screenshot_20231202_141351.png)

### Nom du patient

Ici, vous pouvez configurer votre nom dans **AAPS**.

Vous pouvez mettre ce que vous voulez. Ça sert uniquement à différencier les utilisateurs.

Pour rester simple, entrez simplement le prénom et nom de famille.

Appuyez sur "SUIVANT" pour passer à l'écran suivant.

![image](../images/setup-wizard/Screenshot_20231202_141445.png)

### Type de patient

Sélectionnez ici votre "Type de patient". Ce paramètre important définit différentes limites dans **AAPS**, en fonction de l'âge du patient. C'est important pour des raisons de sécurité et de sûreté.

C'est aussi ici que vous configurez le **bolus maximum autorisé** pour un repas. C'est-à-dire, le plus gros bolus dont vous avez besoin pour couvrir un repas standard. C'est une fonction de sécurité pour éviter de surdoser accidentellement lorsque vous faites un bolus pour le repas.

Dans la même idée, la deuxième limite concerne cette fois l'apport maximum en glucides permis.

Après avoir défini ces valeurs, appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_141817.png)

### Insuline utilisée

Sélectionnez le type d'insuline utilisée dans la pompe.

Les noms d'insuline affichés doivent vous parler.

```{admonition} Don't use the "Free-Peak Oref" unless you know what you are doing
:class: danger
Pour les utilisateurs avancés ou les études médicales, il est possible de définir avec "Profil d'insuline ajustable Oref" un profil personnalisé de la façon dont l'insuline agit. Veuillez ne pas l'utiliser à moins d'être un expert, généralement les valeurs prédéfinies fonctionnent bien pour chaque marque d'insuline.
```

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_141840.png)

### Source des glycémies

Sélectionnez d'où vous allez recevoir les glycémies. Please read the documentation for your [BG source](../Getting-Started/CompatiblesCgms.md).

Comme il existe diverses possibilités, nous n'expliquons pas la configuration de chacune ici. Nous utilisons Dexcom G6 avec l'application BYODA dans notre exemple ici :

![image](../images/setup-wizard/Screenshot_20231202_141912.png)

Si vous utilisez Dexcom G6 avec BYODA, cochez la case côté droit pour que cet élément soit visible dans le menu supérieur d'AAPS.

Après avoir fait votre sélection, appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_141925.png)

Si vous utilisez Dexcom G6 avec BYODA, cliquez sur le bouton Engrenage pour accéder aux paramètres de BYODA.

Cochez "Remonter les glycémies vers NS" et "Enregistrement du changement de capteur sur NS".

Revenez en arrière et cliquez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_141958.png)

### Profil

Nous arrivons maintenant à une partie très importante de l'Assistant de configuration.

Veuillez lire la documentation sur les profils avant d'essayer de saisir les données de votre profil à l'écran suivant.

```{admonition} Working profile required - no exceptions here !
:class: danger
Un profil bien étudié est nécessaire pour assurer l'utilisation en toute sécurité d'**AAPS**

Il est impératif que vous ayez déterminé et discuté de votre profil avec votre équipe médicale, et que ce profil soit validé par des tests concluants sur la basale, la SI et les ratios G/I !

Si on donne à un robot des paramètres incorrects, il échouera - systématiquement. **AAPS** ne fonctionne qu'avec les informations qui lui sont fournies. Si votre profil est trop fort, vous risquez l'hypoglycémie, et s'il est trop faible, vous risquez l'hyperglycémie. 
```

Appuyez sur "SUIVANT" pour passer à l'écran suivant. Saisissez un "Nom de profil" :

![image](../images/setup-wizard/Screenshot_20231202_142027.png)

Par la suite, vous pourrez avoir plusieurs profils si nécessaire. Nous n'en créons qu'un ici.

```{admonition} Profile only for tutorial - not for your usage
:class: information
Le profil donné ici en exemple n'est là que pour vous montrer comment entrer les données.

Les données montrées ici ne sont pas celles d'un profil précis ni très optimisées, car les besoins de chaque personne sont complètement différents.

Ne les utilisez pas réellement pour votre boucle !
```

Entrez votre Durée d'action de l'insuline (DAI) en heures. Ensuite, appuyez sur "G/I":

![image](../images/setup-wizard/Screenshot_20231202_142143.png)

Entrez vos valeurs de ratio glucides / insuline :

![image](../images/setup-wizard/Screenshot_20231202_142903.png)

Appuyez sur "SI". Entrez vos valeurs de sensibilité à l'insuline :

![image](../images/setup-wizard/Screenshot_20231202_143009.png)

Appuyez sur "BAS". Entrez vos valeurs de débit basal :

![image](../images/setup-wizard/Screenshot_20231202_143623.png)

Appuyez sur "CIBLE". Entrez votre glycémie cible.

En boucle ouverte, vous pouvez utiliser une plage assez large, sinon **AAPS** vous notifiera en permanence pour changer le taux basal temporaire ou un autre paramètre, ce qui peut être épuisant.

Plus tard, pour la boucle fermée, vous n'aurez généralement qu'une valeur unique en maximum et minimum. **AAPS** aura ainsi plus de facilité à atteindre la cible et vous donnera un meilleur contrôle global du diabète.

Saisissez les valeurs cibles :

![image](../images/setup-wizard/Screenshot_20231202_143709.png)

Enregistrez le profil en cliquant sur "ENREGISTRER" :

![image](../images/setup-wizard/Screenshot_20231202_143724.png)

Après avoir enregistré, un nouveau bouton "Activer le Profil" apparaît.

```{admonition} Several defined but only one active profile
:class: information
Vous pouvez sauvegarder plusieurs profils, mais il n'y aura jamais qu'un seul profil actif à tout moment.
```

Appuyez sur "Activer le Profil" :

![image](../images/setup-wizard/Screenshot_20231202_143741.png)

La boîte de dialogue de changement de profil apparaît. Pour cette fois, laissez les valeurs prédéfinies.

```{admonition} Several defined but only one active profile
:class: information
Vous apprendrez plus tard comment utiliser cette boite de dialogue pour gérer des situations telles que la maladie ou le sport, quand vous devez modifier votre profil en fonction des circonstances.
```

Appuyez sur "OK" :

![image](../images/setup-wizard/Screenshot_20231202_143808.png)

Un message de confirmation pour le changement de profil apparaît.

Vous pouvez le confirmer en appuyant sur "OK". Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_143822.png)

Votre profil a bien été défini :

![image](../images/setup-wizard/Screenshot_20231202_143833.png)

### Pompe à insuline

Vous allez maintenant sélectionner votre pompe à insuline.

Une boîte de dialogue d'avertissement importante apparait. Veuillez la lire et appuyez sur "OK".

Si vous avez déjà configuré votre profil dans les étapes précédentes et que vous savez comment connecter votre pompe, n'hésitez pas à la connecter maintenant.

Sinon, quittez l'Assistant de configuration en utilisant la flèche en haut à gauche et laissez **AAPS** vous montrer d'abord quelques valeurs de glycémie. Vous pouvez revenir à tout moment ou accéder directement à la configuration (sans utiliser l'Assistant).

Please read the documentation for your [insulin pump](../Getting-Started/CompatiblePumps.md).

Appuyez sur "SUIVANT" pour passer à l'écran suivant.

![image](../images/setup-wizard/Screenshot_20231202_143909.png)

Dans notre cas, nous sélectionnons "Pompe virtuelle".

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_143935.png)

### Algorithme APS

Choisissez l'algorithme SMB OpenAPS comme algorithme APS. Malgré son nom, la fonctionnalité SMB de l'algorithme est désactivée jusqu'à ce que vous soyez familier avec AAPS et ayez déjà travaillé sur les premiers objectifs. L'algorithme OpenAPS SMB est plus récent et de manière générale meilleur par rapport à OpenAPS AMA de toute façon.

La raison pour laquelle le SMB est désactivé au début est que la fonction SMB permet une réaction plus rapide à l'augmentation de la glycémie, en remplaçant une augmentation de la basale par un Super Micro Bolus. Généralement, quand on commence, le profil n'est pas encore suffisamment précis, c'est pourquoi cette fonctionnalité est désactivée au début.

```{admonition} Only use the older algorithm **OpenAPS AMA** if you know what you are doing
:class: information
OpenAPS AMA est l'algorithme le plus basique et ne prend pas en charge les microbolus pour corriger les valeurs élevées. Il y a peut-être des cas où il est préférable d'utiliser cet algorithme mais ce n'est pas la recommandation.
```

Appuyez sur le bouton Engrenage pour voir les détails :

![image](../images/setup-wizard/Screenshot_20231202_144014.png)

Parcourez seulement les options et ne changez rien ici.

En raison des limitations imposées par les **Objectifs**, vous ne pouvez de toute façon pas utiliser les fonctionnalités "boucle fermée" ou "SMB" pour le moment.

Revenez en arrière et cliquez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_144025.png)

### Mode APS

Laissez "Boucle ouverte" sélectionné.

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_144049.png)

### Estimation de Sensibilité

Gardez le plugin standard "Sensibilité Oref1" sélectionné par défaut.

Appuyez sur "SUIVANT" pour passer à l'écran suivant :

![image](../images/setup-wizard/Screenshot_20231202_144101.png)

### Commencer l'objectif 1

Vous entrez maintenant les Objectifs. Un passage obligé pour accéder à d'autres fonctionnalités **AAPS**.

Ici, nous commençons l'objectif 1, même si pour le moment notre configuration n'est pas complètement terminée et ne permet pas de valider cet objectif.

Nous n'en sommes qu'au début.

Appuyez sur le bouton vert "DÉPART" pour démarrer l'objectif 1 :

![image](../images/setup-wizard/Screenshot_20231202_144113.png)

Vous voyez que vous avez déjà complété certaines parties, alors que d'autres restent à faire.

Appuyez sur "TERMINER" pour passer à l'écran suivant.

![image](../images/setup-wizard/Screenshot_20231202_144135.png)

Vous arrivez à l'écran d'accueil d'**AAPS**.

Vous retrouvez le message d'information comme quoi vous avez défini votre profil.

Cela a été fait lorsque nous avons basculé vers notre nouveau profil.

Vous pouvez cliquer sur "MASQUER" et il disparaîtra.

![image](../images/setup-wizard/Screenshot_20231202_144156.png)

Si vous quittez accidentellement l'Assistant de configuration à un moment donné, vous pouvez soit simplement redémarrer l'Assistant, soit changer manuellement la [configuration de la boucle AAPS](../Installing-AndroidAPS/change-configuration.md).

Si votre boucle AAPS est maintenant entièrement configurée, veuillez passer à la section suivante ["Compléter les objectifs"](../Usage/completing-the-objectives.md).
