# Accu-Chek Combo

**Ce logiciel est un système "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Ce logiciel ne fait pas toute la gestion de votre diabète pour vous, mais il peut améliorer votre diabète et votre qualité de vie si vous êtes prêt à y consacrer le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Vous êtes seul responsable de ce que vous faites avec ce système.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

Roche se retire du marché des pompes à insuline pour recentrer son activité diabète sur le MGC Accu-Chek SmartGuide. Roche a annoncé la fin des ventes des pompes Accu-Chek Combo et Accu-Chek Insight ; sa dernière micropompe, l'Accu-Chek Solo, est aussi en cours d'arrêt (dernières livraisons en Allemagne fin 2025). Ce changement se fait région par région. Il commence en Allemagne, et les autres marchés européens devraient suivre. Si vous dépendez de cette pompe, préparez à l'avance le passage à une pompe prise en charge.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Fonctionnalités de la pompe avec AAPS

* Communique avec **AAPS** par le Bluetooth natif de votre téléphone, sans appareil de communication supplémentaire.
* Gestion automatique de l'heure d'été et des fuseaux horaires.

## Configuration matérielle et logicielle requise

* Une pompe Roche Accu-Chek Combo (avec n’importe quel firmware, ils fonctionnent tous).
* Un dispositif Accu-Chek Smartpix V1 ou Accu-Chek Realtyme, ainsi que le logiciel de configuration Accu-Chek 360. (Sur demande Roche envoie gratuitement ces dispositifs Smartpix et la configuration logiciel à leurs clients, sauf en France ou il faut contacter son prestataire).
* Un téléphone compatible sous Android 12 ou plus récent. Voir les [notes de version](#maintenance-android-version-aaps-version) pour plus de détails.
* L'application **AAPS** installée sur votre téléphone.

Certains téléphones peuvent fonctionner mieux que d'autres, en fonction de la qualité du Bluetooth et s'ils ont une logique supplémentaire agressive d'économie d'énergie. Une liste de téléphones se trouve dans le document [Téléphones AAPS](#Phones-list-of-tested-phones). Cette liste n’est pas une liste complète. Elle reflète l’expérience personnelle de quelques utilisateurs. Nous vous encourageons à partager également votre expérience et ainsi aider les autres.

(combov2-before-you-begin)=
## Avant de commencer

**SÉCURITÉ AVANT TOUT** - ne pas tenter ce processus si vous ne pouvez pas récupérer en cas d'erreur. Gardez votre appareil Smartpix / Realtyme à portée de main, ainsi que le logiciel de configuration 360. Planifiez de passer environ une heure pour tout configurer et vérifier que tout fonctionne correctement.

Soyez conscient des limitations suivantes :

* Le bolus étendu et le bolus mixte ne sont pas pris en charge pour le moment (vous pouvez utiliser les [Glucides étendus](../DailyLifeWithAaps/ExtendedCarbs.md) à la place).
* Un seul profil de basal (le premier) est pris en charge.
* Le débit basal le plus bas de votre **Profil** est de 0,05 U/h. **AAPS** refuse un **Profil** avec un débit plus bas. Le Combo arrondit les débits basaux à ses propres pas (0,01 U/h sous 1 U/h, 0,05 U/h jusqu'à 10 U/h, 0,1 U/h au-dessus). **AAPS** utilise les débits que la pompe délivre vraiment.
* Les débits basaux temporaires sont limités à 500 % du débit basal actuel. **AAPS** tient compte de cette limite.
* La boucle est désactivée si le profil actif sur la pompe n'est pas le profil no. 1. Cela continue jusqu'à ce que le profil n° 1 soit rendu actif ; ensuite, à la prochaine connexion d'AAPS (soit de lui-même après un certain temps, soit parce que vous appuyez sur **Actualiser** dans l'écran de la pompe Accu-Chek Combo), AAPS verra que le profil n° 1 est le profil actuel et réactivera la boucle.
* Si la boucle demande l'annulation d'un DBT en cours, le Combo fixera un DBT de 90% ou 110% pendant 15 minutes à la place. Cela est dû au fait que l'annulation d'un DBT provoque une alerte sur la pompe qui provoque de nombreuses vibrations, et ces vibrations ne peuvent pas être désactivées.
* La stabilité de la connexion Bluetooth varie selon les téléphones. Cela provoque des alertes « pompe hors de portée », quand aucune connexion avec la pompe n'est plus établie. Si cette erreur se produit, vérifiez que le Bluetooth est activé, appuyez sur **Actualiser** dans l'écran de la pompe (**Gestion** > **Pompe**) pour voir si le problème était passager et, si aucune connexion n'est toujours établie, redémarrez le téléphone, ce qui corrige en général le problème.
* Il existe un autre problème où un redémarrage n'aide pas : il faut appuyer sur un bouton de la pompe (ce qui réinitialise la pile Bluetooth de la pompe) avant que la pompe accepte à nouveau les connexions du téléphone.
* Le paramétrage d'un DBT sur la pompe doit être évité puisque la boucle assure le contrôle des DBT. La détection d'un nouveau DBT sur la pompe peut prendre jusqu'à 20 minutes et l'effet du DBT est seulement comptabilisé à l’instant où il est détecté, donc dans le pire des cas, il peut y avoir 20 minutes d’un DBT qui n’est pas pris en compte dans l’IA.

Le pilote est actuellement écrit pour prendre en charge les langues suivantes sur le Combo. (Cela n'a rien à voir avec la langue d'AAPS : c'est la langue affichée sur l'écran LCD du Combo lui-même.)

* Anglais
* Espagnol
* Français
* Italien
* Russe
* Turque
* Polonais
* Tchèque
* Hongrois
* Slovaque
* Roumain
* Croate
* Hollandais
* Grec
* Finnois
* Norvégien
* Portugais
* Suédois
* Danois
* Allemand
* Slovène
* Lithuanien

**Important** : si votre pompe est réglée sur une langue qui n'est pas dans cette liste, contactez les développeurs et réglez la langue de la pompe sur une langue de cette liste. Sinon, le pilote ne fonctionnera pas correctement.

## Configuration du téléphone

Il est très important de s'assurer que les optimisations de batterie sont désactivées. AAPS détecte déjà automatiquement quand il est soumis à ces optimisations, et demande dans son interface utilisateur que celles-ci soient désactivées. Mais, sur les téléphones Android modernes, le Bluetooth _lui-même_ est une application (une application système). Et, généralement, cette "application Bluetooth" est exécutée _avec des optimisations de batterie activées_ par défaut. Par conséquent, Bluetooth peut refuser de répondre lorsque le téléphone cherche à économiser de l'énergie parce qu'il tue l'application Bluetooth. Cela signifie que dans les paramètres de cette application système Bluetooth, les optimisations de batterie doivent également être désactivées. Malheureusement, la façon de trouver cette application système Bluetooth diffère d'un téléphone à l'autre. Dans Android, allez dans Réglages -> Applications -> Voir toutes les N applications (N = le nombre d'applications sur votre téléphone). Ensuite, ouvrez le menu en haut à droite, appuyez sur "Afficher le système" ou "Afficher les applications système" ou "Toutes les applications". Maintenant, dans la liste des applications nouvellement développées, recherchez une application « Bluetooth ». Sélectionnez-la, et sur son interface "App info", appuyez sur "Batterie". Là, désactivez les optimisations de batterie (parfois appelées "utilisation de la batterie").

## Paramétrage Combo

* Configurez la pompe à l'aide du logiciel de configuration Accu-Chek 360. Si vous n’avez pas le logiciel, veuillez contacter votre prestataire en france ou la hotline Accu-Chek dans les autres pays. Ils envoient généralement aux utilisateurs enregistrés un CD ou une clé USB avec le logiciel de configuration de la pompe et un périphérique de connexion infrarouge USB SmartPix (le périphérique Realtyme fonctionne aussi si vous en avez). Ou cherchez sur un forum de votre pays.

  - **Paramètres requis** (marqués en vert dans les captures d'écran) :

     * Choisissez ou laissez la configuration du menu sur "Standard", cela affichera uniquement les menus et actions pris en charge sur la pompe, et masquera ceux qui ne sont pas supportés par AAPS (bolus duo/carré, débits de base multiples) et qui entraînent une limitation du fonctionnement de la boucle lors de leurs utilisation, et donc ne permet pas une exécution sécurisée de la boucle.
     * Vérifiez que le _Quick Info Text_ est défini sur « QUICK INFO » (sans les guillemets, dans _Options de la pompe à insuline_).
     * Paramétrez le DBT _Maximum Adjustment_ à 500 %
     * Désactivez _Signal End of Temporary Basal Rate_
     * Paramétrez le DBT _Duration increment_ à 15 min
     * Activez le Bluetooth

  - **Paramètres recommandés** (marqués en bleu dans les captures d'écran) :

     * Définissez une alarme de cartouche basse à votre convenance
     * Configurez un bolus max adapté à votre thérapie afin de se protéger contre les bugs logiciel et matériel
     * De même, configurez une durée maximale de débit de basal temporaire DBT en tant que protection. Autorisez au moins 3 heures, car l'option de déconnecter la pompe pendant 3 heures définit un DBT de 0 % pendant 3 heures.
     * Activez le verrouillage des touches sur la pompe pour éviter de faire bolus depuis la pompe, par exemple lorsque la pompe a été utilisée avant et que le bolus rapide était une habitude.
     * Définissez un délai d'affichage et de menu aux valeurs minimales respectivement de 5,5s et 5s. Cela permet à AAPS de récupérer plus rapidement de situations d’erreur et réduit la quantité de vibrations qui peuvent se produire pendant ces erreurs.

  ![Capture d’écran de réglages du menu utilisateur](../images/combo/combo-menu-settings.png)

  ![Capture d'écran des paramètres DBT](../images/combo/combo-tbr-settings.png)

  ![Capture d'écran des paramètres de bolus](../images/combo/combo-bolus-settings.png)

  ![Capture d'écran des paramètres de cartouche d'insuline](../images/combo/combo-insulin-settings.png)

## Activation du pilote et appairage avec la Combo

* Ouvrez le **menu** (☰) en haut à gauche, allez dans [**Configuration** > **Pompe**](../SettingUpAaps/ConfigBuilder.md) et choisissez **Accu-Chek Combo**.

  ![Configuration > Pompe avec le plugin Accu-Chek Combo](../images/v4/Configuration/configuration_pump_list_1.png)

  Une fois choisie, la carte **Accu-Chek Combo** affiche deux boutons, **Paramètres** et **Ouvrir le plugin** :

  ![Le plugin Accu-Chek Combo choisi dans Configuration > Pompe](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Paramètres** ouvre les paramètres du pilote Accu-Chek Combo (voir [Paramètres](#combov2-preferences) ci-dessous) :

  ![Paramètres du pilote Accu-Chek Combo](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Ouvrir le plugin** (ou **Gestion** > **Pompe**) ouvre l'écran de la pompe Accu-Chek Combo. Avant l'appairage d'une pompe, il affiche **Pompe non appairée** :

  ![Écran de la pompe Accu-Chek Combo avant l'appairage](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* Dans l'écran de la pompe, appuyez sur **Appairage**. L'écran **Appairer la pompe** s'ouvre. Suivez les étapes affichées à l'écran, puis appuyez sur **Démarrer l'appairage**. Quand Android demande l'autorisation de rendre le téléphone visible pour les autres appareils Bluetooth, appuyez sur **Autoriser**. Au bout d'un moment, le Combo affiche un code PIN d'appairage à 10 chiffres sur son écran, et **AAPS** le demande. Saisissez ce code PIN dans le champ **Code PIN à 10 chiffres**.

  ![L'écran Appairer la pompe avec le bouton Démarrer l'appairage](../images/combo/combov2-pairing-screen-1.png)

  ![Android demande de rendre le téléphone visible pour les autres appareils Bluetooth](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Appairage du Combo en cours, recherche de la pompe](../images/combo/combov2-pairing-screen-2.png)

  Les images suivantes viennent d'une ancienne version d'**AAPS**. Les étapes et les textes sont les mêmes, mais les écrans sont un peu différents.

  ![Capture d'écran de l'interface d'appairage Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Capture d'écran de l'interface d'appairage Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Capture d'écran de l'interface d'appairage Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Si le code PIN est mal saisi, **AAPS** affiche **Le code PIN n'a pas fonctionné. Vérifiez s'il y a eu une faute de frappe. Si cela persiste, annulez et recommencez l'appairage.**

  ![Capture d'écran de l'interface d'appairage Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Quand **Appairage réussi avec Combo** s'affiche, appuyez sur **OK**. Vous revenez à l'écran de la pompe, qui affiche maintenant l'état de la pompe (voir [Contenu de l'écran de la pompe Accu-Chek Combo](#combov2-tab-contents) ci-dessous). Le bouton **Appairage** est remplacé par **Dissocier**.

* Pour vérifier votre configuration (avec la pompe **déconnectée** de toute canule, par sécurité !), utilisez AAPS pour définir un DBT de 500 % pendant 15 min et faire un bolus. La pompe doit normalement avoir un DBT en cours et un bolus dans l'historique. AAPS doit aussi de son côté montrer le DBT actif et le bolus délivré.

* Sur la Combo, il est recommandé d'activer le verrouillage des touches pour éviter de faire un bolus depuis la pompe, en particulier si la pompe a été utilisée avant et que l'utilisation de la fonction "bolus rapide" était une habitude.

## Remarques sur l'appairage

L'Accu-Chek Combo a été développé avant la sortie du Bluetooth 4.0, et seulement un an après la première version d'Android. C'est pourquoi sa façon d'appairer avec d'autres appareils n'est pas entièrement compatible avec la façon dont cela se fait dans Android aujourd'hui. Pour contourner complètement cette situation, AAPS aurait besoin d'autorisations de niveau système, qui ne sont disponibles que pour les applications système. Celles-ci sont installées par les fabricants de téléphones dans le téléphone - les utilisateurs ne peuvent pas installer d'applications système.

Pour cette raison, l'appairage ne se fera jamais à 100 % sans problème. En particulier, pendant l'appairage, la boîte de dialogue du PIN Bluetooth d'Android peut s'afficher brièvement et disparaître automatiquement. Mais parfois, il reste à l’écran et demande un PIN à 4 chiffres. (Il ne faut pas confondre cela avec le code PIN d'appairage Combo à 10 chiffres) Ne saisissez rien, appuyez simplement sur Annuler. Si l'appairage ne se poursuit pas, suivez les instructions à l'écran pour recommencer la tentative d'appairage.

(combov2-tab-contents)=
## Contenu de l'écran de la pompe Accu-Chek Combo

Pour ouvrir l'écran de la pompe, allez dans **Gestion** > **Pompe**. Quand une pompe est appairée, il affiche les informations suivantes (de haut en bas) :

![Capture d'écran de l'écran de la pompe Accu-Chek Combo avec appairage (ancienne version d'AAPS)](../images/combo/combov2-tab-with-pairing.png)

1. **État du pilote** : le pilote peut être dans l'un des états suivants :
   - **Déconnectée** : il n'y a pas de connexion Bluetooth ; le pilote est dans cet état la plupart du temps et se connecte à la pompe seulement quand c'est nécessaire, ce qui économise de l'énergie
   - **Connexion en cours**
   - **Vérification de la pompe** : la pompe est connectée, mais le pilote fait des contrôles de sécurité pour s'assurer que tout est correct et à jour
   - **Prêt** : le pilote est prêt à recevoir des commandes d'AAPS
   - **Suspendu** : la pompe est suspendue (affiché « stopped » [arrêtée] sur le Combo)
   - Une description de la commande en cours, par exemple **Définir le profil basal** ou **Mise à jour de l'état pompe**
   - **Erreur** : une erreur s'est produite ; la connexion a été coupée et toute commande en cours a été interrompue
2. **Dernière connexion** : il y a combien de minutes le pilote s'est connecté au Combo avec succès ; si cela dépasse 30 minutes, cette ligne est affichée en rouge
3. **Pile** : niveau de la pile ; le Combo indique seulement **Pleine**, **Faible** ou **Vide**, et ne donne rien de plus précis (comme un pourcentage), donc seuls ces trois niveaux sont affichés ici
4. **Réservoir** : nombre d'unités actuellement dans le réservoir du Combo
5. **Dernier bolus** : il y a combien de minutes le dernier bolus a été délivré ; si aucun bolus n'a été délivré depuis le démarrage d'AAPS, cette ligne n'est pas affichée
6. **Basal temp.** : détails du débit basal temporaire actif ; si aucun n'est actif, cette ligne n'est pas affichée
7. **Débit de basal** : débit basal de base actif (« de base » signifie le débit basal sans aucun DBT actif qui modifie le facteur du débit basal)
8. **Numéro de série** : numéro de série du Combo indiqué par la pompe (il correspond au numéro de série affiché au dos du Combo)
9. **Adresse Bluetooth** : adresse Bluetooth de 6 octets du Combo, affichée au format `XX:XX:XX:XX:XX:XX`

Pendant que le pilote fait quelque chose (par exemple définir un profil basal), un cadre sous la liste décrit l'activité en cours, avec une fine barre de progression.

Le Combo peut être commandé via Bluetooth en mode _terminal à distance_ ou en mode _commande_. Le mode terminal à distance correspond au « mode télécommande » du lecteur de glycémie du Combo, qui imite l'écran LCD et les quatre boutons de la pompe. Certaines commandes doivent être exécutées dans ce mode par le pilote, car elles n'ont pas d'équivalent dans le mode commande. Ce dernier mode est beaucoup plus rapide mais, comme indiqué, limité dans ses possibilités. Quand le mode terminal à distance est actif, l'écran actuel du terminal à distance est affiché dans le champ situé juste au-dessus du dessin du Combo. Par contre, quand le pilote passe en mode commande, ce champ reste vide.

(Vous n'avez pas d'influence sur cela ; le pilote décide seul du mode à utiliser. Cette remarque explique seulement pourquoi vous voyez parfois des images du Combo dans ce champ.)

En bas, il y a ces boutons :

- **Actualiser** : lance une mise à jour immédiate de l'état de la pompe. Il sert aussi à dire à AAPS qu'une erreur trouvée avant est maintenant corrigée et qu'AAPS peut vérifier à nouveau que tout est correct (plus de détails ci-dessous dans [la section sur les alertes](#combov2-alerts)). Vous pouvez appuyer dessus seulement quand le pilote est déconnecté, suspendu ou dans l'état d'erreur.
- **Dissocier** : dissocie le Combo appairé d'**AAPS** et d'Android, après que vous avez confirmé **Voulez-vous vraiment dissocier la pompe ?**. Quand aucune pompe n'est appairée, ce bouton est remplacé par **Appairage**.

(combov2-preferences)=
## Paramètres

Ces paramètres sont disponibles pour le pilote Combo (**Configuration** > **Pompe** > **Accu-Chek Combo** > **Paramètres**, ou l'icône des paramètres (roue dentée) dans l'écran de la pompe). Les éléments sont listés de haut en bas :

1. **Durée de recherche (en secondes)** : pendant l'appairage, le pilote rend le téléphone visible pour la pompe. Ce paramètre règle la durée de cette visibilité. Par défaut, la valeur maximale (300 secondes = 5 minutes) est choisie. Android ne permet pas une visibilité sans limite de temps, il faut donc choisir une durée.
2. **Détection et enregistrement automatique du changement du réservoir** : si activé, le pilote enregistre le « changement de réservoir » que vous enregistreriez normalement vous-même avec **Gestion** > **Amorcer/Remplir**. Ceci est expliqué [plus en détail ci-dessous](#combov2-autodetections).
3. **Détection et enregistrement automatique du changement de pile** : si activé, le pilote enregistre le « changement de pile » que vous enregistreriez normalement vous-même avec **Gestion** > **Changement pile pompe**. Ceci est expliqué [plus en détail ci-dessous](#combov2-autodetections).
4. **Activer les informations log détaillées de la Combo** : cela augmente fortement la quantité de logs écrits par le pilote. **ATTENTION** : n'activez pas cette option sauf si un développeur vous le demande. Sinon, cela peut ajouter beaucoup de bruit dans les logs d'**AAPS** et les rendre moins utiles.

L'appairage et la dissociation se font dans l'écran de la pompe, pas dans les paramètres (voir ci-dessus).

(combov2-autodetections)=
## Détection et enregistrement automatique des changements de pile et de réservoir

Le pilote peut détecter les changements de pile et de réservoir en suivant les niveaux de la pile et du réservoir. Si le Combo a signalé un niveau de pile faible lors de la dernière mise à jour de l'état de la pompe, et que maintenant, lors de la nouvelle mise à jour, le niveau de pile est normal, le pilote en conclut que l'utilisateur a changé la pile. La même logique est utilisée pour le niveau du réservoir : s'il est maintenant plus élevé qu'avant, cela est compris comme un changement de réservoir.

Cela ne marche que si la pile et le réservoir sont changés quand ces niveaux sont signalés comme bas _et_ si la pile et le réservoir sont suffisamment remplis.

Ces détections automatiques peuvent être désactivées dans les [paramètres](#combov2-preferences) du pilote.

(combov2-alerts)=
## Alertes (avertissements et erreurs) et leur gestion

Le Combo affiche les alertes sous forme d'écrans du terminal à distance. Les avertissements s'affichent avec un code « Wx » (x est un chiffre), avec une courte description. Un exemple est « W7 », « TBR OVER ». Les erreurs sont similaires, mais elles s'affichent avec un code « Ex ».

Certains avertissements sont acquittés automatiquement par le pilote. Ce sont :

- W1 « reservoir low » (réservoir bas) : le pilote le transforme en avertissement « réservoir bas » affiché sur l'écran principal d'AAPS
- W2 « battery low » (pile faible) : le pilote le transforme en avertissement « pile faible » affiché sur l'écran principal d'AAPS
- W3, W6, W7, W8 : ils sont tous purement informatifs pour l'utilisateur, le pilote peut donc les acquitter automatiquement sans risque

Les autres avertissements ne sont _pas_ acquittés automatiquement. De plus, les erreurs ne sont _jamais_ acquittées automatiquement. Les deux sont gérés de la même façon : le pilote affiche une boîte de dialogue d'alerte par-dessus l'interface d'AAPS, et il interrompt toute commande en cours. Le pilote passe alors dans l'état « erreur » (voir [le contenu de l'écran de la pompe Accu-Chek Combo ci-dessus](#combov2-tab-contents)). Dans cet état, aucune commande ne peut être exécutée. L'utilisateur doit gérer l'erreur sur la pompe ; par exemple, une erreur d'occlusion peut demander de changer la canule. Une fois que l'utilisateur a réglé l'erreur, le fonctionnement normal peut reprendre en appuyant sur **Actualiser** dans l'écran de la pompe Accu-Chek Combo. Le pilote se connecte alors au Combo et met à jour son état. Il vérifie par exemple si une erreur est toujours affichée à l'écran. De plus, le pilote actualise automatiquement l'état de la pompe après un certain temps, il n'est donc pas obligatoire d'appuyer sur ce bouton.

Le bolus est un cas particulier. Il est fait dans le mode commande du Combo, qui ne signale pas pendant le bolus qu'une alerte est apparue. Par conséquent, le pilote ne peut pas acquitter automatiquement les avertissements _pendant_ un bolus. Cela signifie que, malheureusement, la pompe va biper jusqu'à la fin du bolus. L'alerte la plus fréquente pendant un bolus est en général W1 « reservoir low » (réservoir bas). **N'acquittez pas** vous-même les avertissements du Combo sur la pompe pendant un bolus. Vous risquez d'interrompre le bolus. Le pilote s'occupera de l'avertissement une fois le bolus terminé.

Les alertes qui arrivent quand le pilote n'est pas connecté au Combo ne sont pas vues par le pilote. Le Combo ne peut pas envoyer de lui-même cette alerte au téléphone ; c'est toujours le téléphone qui doit lancer la connexion. Par conséquent, l'alerte reste active jusqu'à ce que le pilote se connecte à la pompe. Vous pouvez appuyer sur **Actualiser** dans l'écran de la pompe pour lancer une connexion et laisser le pilote gérer l'alerte tout de suite (au lieu d'attendre qu'AAPS décide lui-même de lancer une connexion).

**IMPORTANT** : si une erreur se produit, ou si un avertissement apparaît qui ne fait pas partie de ceux acquittés automatiquement, le pilote passe dans l'état d'erreur. Dans cet état, la boucle **SERA BLOQUÉE** jusqu'à ce que l'état de la pompe soit actualisé ! Elle est débloquée après la mise à jour de l'état de la pompe (en appuyant sur **Actualiser** ou par la mise à jour automatique du pilote) si aucune erreur n'est plus affichée.

## Points d'attention lors de l'utilisation du Combo

* N'oubliez pas que ce n'est pas un produit fini : surtout au début, l'utilisateur doit surveiller et comprendre le système, ses limites et la façon dont il peut échouer. Il est fortement conseillé de NE PAS utiliser ce système lorsque la personne n'est pas en mesure de bien le comprendre entièrement.
* À cause du fonctionnement de la télécommande du Combo, plusieurs opérations (surtout la définition d'un profil basal) sont lentes par rapport à d'autres pompes. C'est une limite du Combo qu'on ne peut malheureusement pas contourner.
* Ne définissez pas et n'annulez pas de DBT sur la pompe. La boucle prend le contrôle des DBT et ne peut pas fonctionner de façon fiable autrement, car il n'est pas possible de connaître l'heure de début d'un DBT défini par l'utilisateur sur la pompe.
* N'appuyez sur aucun bouton de la pompe pendant qu'AAPS communique avec elle (le logo Bluetooth est affiché sur la pompe tant qu'elle est connectée à AAPS). Cela interrompt la connexion Bluetooth. Faites-le seulement s'il y a des problèmes pour établir une connexion (voir [la section « Avant de commencer » ci-dessus](#combov2-before-you-begin)).
* N'appuyez sur aucun bouton pendant que la pompe fait un bolus. En particulier, n'essayez pas d'acquitter les alertes en appuyant sur les boutons. Voir [la section sur les alertes](#combov2-alerts) pour une explication plus détaillée.

## Liste de contrôle quand aucune connexion ne peut être établie avec le Combo

Le pilote fait de son mieux pour se connecter au Combo et utilise quelques astuces pour rendre la connexion plus fiable. Malgré tout, parfois, les connexions ne s'établissent pas. Voici quelques étapes pour essayer de corriger cette situation.

1. Appuyez sur un bouton du Combo. Parfois, la pile Bluetooth du Combo ne répond plus et n'accepte plus de connexions. En appuyant sur un bouton du Combo pour que l'écran LCD affiche quelque chose, la pile Bluetooth est réinitialisée. La plupart du temps, c'est la seule étape nécessaire pour corriger les problèmes de connexion.
2. Redémarrez le téléphone. Cela peut être nécessaire s'il y a un problème avec la pile Bluetooth du téléphone elle-même.
3. Si le capuchon de pile du Combo est ancien, pensez à le remplacer. Les anciens capuchons de pile peuvent causer des problèmes d'alimentation du Combo, ce qui affecte le Bluetooth.
4. Si les tentatives de connexion échouent toujours, pensez à dissocier puis appairer à nouveau la pompe.

(combov2-tips-for-basic-usage)=
## Conseils pour l'utilisation de base

### Comment assurer un bon fonctionnement

* Gardez toujours **le smartphone avec vous**, et laissez-le à côté de votre lit la nuit. Comme votre pompe peut se trouver derrière ou sous votre corps pendant votre sommeil, une position plus haute (sur une étagère ou une planche) est la meilleure.
* Vérifiez toujours que la pile de la pompe est aussi pleine que possible. Voir la section sur les piles pour des conseils sur la pile.
* Quand c'est possible, utilisez la pompe uniquement via l'application AAPS. Pour cela, activez le verrouillage des touches sur la pompe dans **PUMP SETTINGS / KEY LOCK / ON**. Ce n'est que lorsque vous changez la pile ou la cartouche qu'il est nécessaire d'utiliser les touches de la pompe.

![Verrouillage des touches](../images/combo/combo-tips-keylock.png)

### Pompe hors de portée. Que faire ?

#### Activer l'alerte pompe hors de portée
* Dans **AAPS**, appuyez sur l'icône **Paramètres** (roue dentée) en haut à droite de l'écran principal, allez dans **Alertes locales**, activez **Alerte si la pompe est hors de portée** et réglez **Seuil d'alerte pompe hors de portée** sur **31** minutes.
* Cela vous laisse assez de temps pour ne pas déclencher l'alarme quand vous quittez la pièce en laissant le téléphone sur le bureau, mais vous prévient si la pompe ne peut pas être jointe pendant une durée plus longue que celle d'un débit basal temporaire.

#### Rétablir la connexion avec la pompe

* Quand AAPS signale une alarme **pompe hors de portée**, déverrouillez d'abord les touches et **appuyez sur n'importe quelle touche de la pompe** (par ex. le bouton « bas »). Dès que l'écran de la pompe s'est éteint, appuyez sur **Actualiser** dans l'écran de la pompe Accu-Chek Combo (**Gestion** > **Pompe**). La plupart du temps la communication fonctionnera à nouveau.
* Si cela ne marche pas, redémarrez votre smartphone. Après le redémarrage, AAPS sera réactivé et une nouvelle connexion sera établie avec la pompe.

* Les tests avec différents smartphones ont montré que certains smartphones déclenchent l'erreur « pompe hors de portée » plus souvent que d'autres. Voir [Téléphones AAPS](#Phones-list-of-tested-phones) pour les smartphones testés avec succès.

#### Causes et conséquences des erreurs de communication fréquentes
* Sur les téléphones avec **peu de mémoire** (ou des réglages d'**économie d'énergie agressifs**), AAPS est souvent arrêté. Vous le voyez au fait que les boutons de traitement (barre QuickLaunch) de l'écran principal ne sont pas affichés à l'ouverture d'AAPS, car le système est en cours d'initialisation. Cela peut déclencher une alerte "Pompe hors de portée" au démarrage. Dans le champ **Dernière connexion** de l'écran de la pompe (**Gestion** > **Pompe**), vous pouvez voir quand AAPS a communiqué avec la pompe pour la dernière fois.

![Aucune connexion à la pompe](../images/combo/combov2-tips-no-connection-to-pump.png)

* Cette erreur peut vider la pile de la pompe plus rapidement car le profil basal est lu à partir de la pompe lorsque l'application est redémarrée.
* Cela augmente également la probabilité de provoquer l'erreur qui amène la pompe à rejeter toutes les connexions entrantes jusqu'à ce qu'un bouton de la pompe soit enfoncé.

### Échec de l'annulation du débit basal temporaire
* Parfois, AAPS ne peut pas acquitter automatiquement une alerte **TBR CANCELED**. Vous devez alors soit appuyer sur **Actualiser** dans l'écran de la pompe Accu-Chek Combo, soit confirmer l'alarme sur la pompe.

### Considérations relatives à la pile

#### Changer la pile
* Après une alarme **Pile pompe faible**, la pile doit être changée le plus rapidement possible pour toujours avoir l'énergie nécessaire à une communication Bluetooth fiable avec le smartphone, même si le téléphone se trouve à une grande distance de la pompe.
* Même après une alarme **Pile pompe faible**, la pile peut être utilisée pour une durée significative. Il est cependant recommandé d'avoir toujours une pile neuve avec vous après une alarme « pile faible ».
* Avant de changer la pile, appuyez sur le symbole **Boucle** de l'écran principal et choisissez **Suspendre la boucle** pendant 1 heure.
* Attendez que le téléphone communique avec la pompe et que le logo Bluetooth sur la pompe disparaisse.

![Bluetooth activé](../images/combo/combo-tips-compo.png)

* Déverrouillez les touches de la pompe, mettez la pompe à l'arrêt, confirmez si nécessaire l'annulation du débit de base temporaire et changez rapidement la pile.
* Vous n'avez pas besoin de régler à nouveau l'horloge de la pompe après le changement de pile : AAPS met à jour automatiquement la date et l'heure de la pompe.
* Remettez ensuite la pompe en mode marche et choisissez **Reprendre** en appuyant sur l'icône **La Boucle est suspendue** de l'écran principal.
* AAPS redéfinira un débit basal temporaire si nécessaire à l'arrivée de la prochaine valeur de glycémie.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Type de pile et causes de faible autonomie
* Comme une communication Bluetooth intensive consomme beaucoup d'énergie, utilisez uniquement des **piles de haute qualité** comme les Energizer Ultimate Lithium, les « Power One » du « grand » service pack Accu-Chek ou, si vous choisissez une pile rechargeable, des piles Eneloop.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Voici les durées de vie habituelles des différents types de piles :
* **Energizer Ultimate Lithium** : 4 à 7 semaines
* Piles **Power One Alkaline** (Varta) du service pack : 2 à 4 semaines
* Piles **Eneloop rechargeables** (BK-3MCCE) : 1 à 3 semaines

Si la durée de vie de votre pile est significativement inférieure à celle indiquée ci-dessus, vérifiez les causes possibles suivantes :
* Il existe des variantes du capuchon de pile à visser de la pompe Combo qui court-circuitent partiellement les piles et les vident rapidement. Les capuchons sans ce problème sont reconnaissables par les contacts dorés.
* Si l'horloge de la pompe ne « survit » pas à un court changement de pile, le condensateur qui maintient l'horloge en marche pendant une brève coupure de courant est probablement cassé. Dans ce cas, un remplacement de la pompe par Roche peut aider, ce qui ne pose pas de problème pendant la période de garantie.
* Le matériel et le logiciel du smartphone (système Android et pile Bluetooth) ont aussi un effet sur la durée de vie de la pile de la pompe, même si les facteurs exacts ne sont pas encore tout à fait connus. Si vous en avez l'occasion, essayez un autre smartphone et comparez la durée de vie de la pile.

### Bolus étendus, bolus mixtes
L'algorithme OpenAPS ne prend pas en charge un bolus étendu en parallèle ni un bolus mixte. Mais un traitement similaire peut être obtenu avec les alternatives suivantes :
* Utilisez les **eGlucides** en saisissant des glucides ou en utilisant l'Assistant Bolus : saisissez les glucides du repas complet et la durée pendant laquelle vous pensez que ces glucides arriveront sous forme de glucose dans votre sang. Le système calcule alors de petites quantités de glucides réparties de façon égale sur toute la durée, ce qui amène l'algorithme à délivrer des doses d'insuline équivalentes tout en vérifiant en permanence la hausse ou la baisse globale de la glycémie. Pour une approche de type bolus mixte, vous pouvez aussi combiner un petit bolus immédiat avec des eGlucides.
* Avant de manger, définissez une cible temporaire **Repas imminent** avec une glycémie de 80 pendant plusieurs heures (appuyez sur la cible dans l'écran principal, ou **Gestion** > **Cible Temp**). La durée doit correspondre à l'intervalle que vous choisiriez pour un bolus étendu. Votre cible restera ainsi plus basse que d'habitude, ce qui augmentera la quantité d'insuline délivrée.
* Utilisez ensuite l'**Assistant Bolus** pour saisir tous les glucides du repas, mais n'appliquez pas directement les valeurs proposées. Si un bolus de type mixte doit être délivré, corrigez la dose d'insuline à la baisse. Selon le repas, l'algorithme doit maintenant fournir des SMB supplémentaires ou des débits de basal temporaires plus élevés pour contrer l'augmentation de la glycémie. Ici, la limite de sécurité du débit basal (Max U/h, IA basale maximale) doit être testée avec beaucoup de prudence et, si nécessaire, modifiée temporairement.

* N'utilisez pas le bolus étendu ou le bolus mixte directement sur la pompe. Le pilote ne les prend pas en charge (voir [Avant de commencer](#combov2-before-you-begin)) ; si un bolus mixte est quand même fait sur la pompe, **AAPS** l'enregistre depuis l'historique de la pompe comme un bolus normal plus un bolus étendu, il est donc compté dans l'IA. Un bolus étendu ne fonctionne pas en boucle fermée (voir [cette page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) pour plus de détails).

### Alarmes à l'administration du bolus
* Après chaque bolus, le pilote lit l'historique des bolus de la pompe. C'est un mécanisme de sécurité pour calculer correctement l'insuline active (IA), même quand un bolus est délivré directement depuis la pompe.
* Avant un bolus, si l'historique de la pompe contient un bolus qu'**AAPS** ne connaissait pas (par exemple un bolus fait directement sur la pompe), le bolus demandé n'est **pas délivré**, car il a été calculé sans cette insuline. **AAPS** affiche **L'historique de la pompe contient un bolus qu'AAPS ne connaissait pas. Le bolus demandé n'a pas été délivré...** Vérifiez l'historique des bolus sur la pompe et votre IA. Si un bolus est toujours nécessaire, calculez-le à nouveau. Cela s'applique aussi quand le bolus inconnu est trouvé lors d'une nouvelle connexion.
* Si le bolus a été délivré mais que l'historique de la pompe contenait aussi d'autres bolus qu'**AAPS** ne connaissait pas, ils sont maintenant enregistrés et **AAPS** vous demande de vérifier l'IA avant le prochain bolus.
* Si la connexion à la pompe est perdue **pendant** un bolus, **AAPS** n'enregistre pas 0 U : il affiche la quantité déjà délivrée par la pompe et prévient que la pompe peut encore délivrer le reste. **Ne refaites pas de bolus.** **AAPS** lit la quantité réelle dans l'historique de la pompe à la prochaine connexion.
* Si la connexion est perdue pendant qu'**AAPS** envoie le bolus, on ne sait pas si la pompe l'a reçu. Vérifiez l'historique des bolus sur la pompe avant le prochain bolus.
* Si **AAPS** ne peut pas confirmer qu'un bolus a été délivré, il affiche **Administration bolus échouée. Il semble qu’aucun bolus n’a été administré. Pour être sûr, veuillez vérifier la pompe pour éviter un double bolus ensuite refaire le bolus une nouvelle fois.** Les bolus ne sont jamais relancés automatiquement.

## Où obtenir de l'aide

Le développement du pilote Combo est fait par la communauté, de façon **bénévole**. Avant de demander de l'aide, merci de :

1. **Lisez** la section correspondante de cette documentation pour vérifier comment la fonction doit marcher.
2. **Demandez** sur le canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw), ou dans un des autres [canaux de la communauté](../GettingHelp/WhereCanIGetHelp.md).
3. **Signalez un bug** : cherchez d'abord dans les [tickets existants](https://github.com/nightscout/AndroidAPS/issues) ; si le vôtre n'y est pas, ouvrez un [nouveau ticket](https://github.com/nightscout/AndroidAPS/issues) et joignez vos [fichiers log](../GettingHelp/AccessingLogFiles.md).

Quand vous demandez de l'aide, indiquez la marque et le modèle de votre téléphone, la version d'Android, la version d'**AAPS** et une description simple du problème (ce qui a changé, quand cela a fonctionné pour la dernière fois).
