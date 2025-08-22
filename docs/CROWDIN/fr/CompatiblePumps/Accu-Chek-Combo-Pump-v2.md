- - -
orphan: true
- - -

# Pompe Accu-Chek Combo

**Ce logiciel est un système "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Ce logiciel ne fait pas toute la gestion de votre diabète pour vous, mais il peut améliorer votre diabète et votre qualité de vie si vous êtes prêt à y consacrer le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

## Configuration matérielle et logicielle requise

* Une pompe Roche Accu-Chek Combo (avec n’importe quel firmware, ils fonctionnent tous).
* Un dispositif Accu-Chek Smartpix V1 ou Accu-Chek Realtyme, ainsi que le logiciel de configuration Accu-Chek 360. (Sur demande Roche envoie gratuitement ces dispositifs Smartpix et la configuration logiciel à leurs clients, sauf en France ou il faut contacter son prestataire).
* Un téléphone compatible. Android 9 (Pie) ou plus récent. Si vous utilisez LineageOS, la version minimale supportée est 16.1. See [release notes](#maintenance-android-version-aaps-version) for details.
* L'application AAPS installée sur votre téléphone.

Certains téléphones peuvent fonctionner mieux que d'autres, en fonction de la qualité du Bluetooth et s'ils ont une logique supplémentaire agressive d'économie d'énergie. A list of phones can be found in the [AAPS Phones](#Phones-list-of-tested-phones) document. Cette liste n’est pas une liste complète. Elle reflète l’expérience personnelle de quelques utilisateurs. Nous vous encourageons à partager également votre expérience et ainsi aider les autres.

(combov2-before-you-begin)=
## Avant de commencer

**SÉCURITÉ AVANT TOUT** - ne pas tenter ce processus si vous ne pouvez pas récupérer en cas d'erreur. Gardez votre appareil Smartpix / Realtyme à portée de main, ainsi que le logiciel de configuration 360. Planifiez de passer environ une heure pour tout configurer et vérifier que tout fonctionne correctement.

Soyez conscient des limitations suivantes :

* Extended bolus and multiwave bolus are currently not supported (you can use [Extended Carbs](../DailyLifeWithAaps/ExtendedCarbs.md) instead).
* Un seul profil de basal (le premier) est pris en charge.
* La boucle est désactivée si le profil actif sur la pompe n'est pas le profil no. 1. Cela continuera jusqu'à ce que le profil no. 1 soit rendu actif; lorsque cela est fait, la prochaine fois que AAPS se connecte (soit par lui-même après un certain temps ou soit parce que l'utilisateur appuie sur le bouton Rafraîchir dans l'interface utilisateur combov2), il verra que le profil no. 1 est actif, et réactivera la boucle.
* Si la boucle demande l'annulation d'un DBT en cours, le Combo fixera un DBT de 90% ou 110% pendant 15 minutes à la place. Cela est dû au fait que l'annulation d'un DBT provoque une alerte sur la pompe qui provoque de nombreuses vibrations, et ces vibrations ne peuvent pas être désactivées.
* La stabilité de la connexion Bluetooth varie en fonction des téléphones utilisés. La perte de connection provoque des alertes "pompe injoignable", pendant laquelle aucune connexion avec la pompe n'est établie. Si cette erreur survient, assurez-vous que Bluetooth est activé, puis appuyez sur le bouton Rafraichir dans l'onglet Combo pour voir si cela a été causé par un problème intermittent. Si aucune connexion n'est encore établie, le redémarrage du téléphone devrait normalement corriger cela.
* Il y a une autre problème où le redémarrage du téléphone n'aide pas. Il s'agit de presser un bouton sur la pompe (pour réinitialiser le Bluetooth de la pompe) afin que celle-ci accepte de nouveau les connexions du téléphone.
* Le paramétrage d'un DBT sur la pompe doit être évité puisque la boucle assure le contrôle des DBT. La détection d'un nouveau DBT sur la pompe peut prendre jusqu'à 20 minutes et l'effet du DBT est seulement comptabilisé à l’instant où il est détecté, donc dans le pire des cas, il peut y avoir 20 minutes d’un DBT qui n’est pas pris en compte dans l’IA.

Si vous avez utilisé l'ancien pilote Combo qui dépend de l'application distincte Ruffy, et que vous voulez passer à ce nouveau pilote Notez que le jumelage doit être fait à nouveau - Ruffy et le nouveau pilote Combo ne sont pas en mesure de partager des informations d'appairage. Aussi, assurez-vous que Ruffy ne fonctionne _pas_. En cas de doute, appuyez longuement sur l'icône de l'application Ruffy pour afficher un menu contextuel. Dans ce menu, appuyez sur l'icône "Information". Dans l'interface qui vient de s'ouvrir, appuyez sur "Forcer l'arrêt". De cette façon, vous êtes sûr qu'aucune instance Ruffy active ne peut pas interférer avec le nouveau pilote.

De plus, si vous migrez depuis l'ancien pilote, soyez conscient que le nouveau pilote communique une commande bolus d'une manière complètement différente de celle du Combo qui est beaucoup plus rapide, donc ne soyez pas surpris quand un bolus commence immédiatement quel que soit le dosage. De plus, les suggestions générales, les trucs et astuces etc. ne s'applique pas ici à la gestion de l'appairage Ruffy et des problèmes de connexion car il s'agit d'un pilote entièrement nouveau qui ne partage aucun code avec l'ancien.

This new driver is currently written to support the following languages on the Combo. (This is unrelated to the language in AAPS - it is the language shown on the Combo's LCD itself.)

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
* Finnish
* Norvégien
* Portugais
* Suédois
* Danois
* Allemand
* Slovenian
* Lithuanien

**Important**: If your pump is set to a language that is not part of this list, please contact the developers, and set the pump's language to one in this list. Otherwise, the driver won't work properly.

## Configuration du téléphone

Il est très important de s'assurer que les optimisations de batterie sont désactivées. AAPS détecte déjà automatiquement quand il est soumis à ces optimisations, et demande dans son interface utilisateur que celles-ci soient désactivées. Mais, sur les téléphones Android modernes, le Bluetooth _lui-même_ est une application (une application système). Et, généralement, cette "application Bluetooth" est exécutée _avec des optimisations de batterie activées_ par défaut. Par conséquent, Bluetooth peut refuser de répondre lorsque le téléphone cherche à économiser de l'énergie parce qu'il tue l'application Bluetooth. Cela signifie que dans les paramètres de cette application système Bluetooth, les optimisations de batterie doivent également être désactivées. Malheureusement, l'application système Bluetooth diffère d'un téléphone à l'autre. Dans Android, allez dans Réglages -> Applications -> Voir toutes les N applications (N = le nombre d'applications sur votre téléphone). Ensuite, ouvrez le menu en haut à droite, appuyez sur "Afficher le système" ou "Afficher les applications système" ou "Toutes les applications". Maintenant, dans la liste des applications nouvellement développées, recherchez une application « Bluetooth ». Sélectionnez-la, et sur son interface "App info", appuyez sur "Batterie". Là, désactivez les optimisations de batterie (parfois appelées "utilisation de la batterie").

## Paramétrage Combo

* Configurez la pompe à l'aide du logiciel de configuration Accu-Chek 360. Si vous n’avez pas le logiciel, veuillez contacter votre prestataire en france ou la hotline Accu-Chek dans les autres pays. Ils envoient généralement aux utilisateurs enregistrés un CD ou une clé USB avec le logiciel de configuration de la pompe et un périphérique de connexion infrarouge USB SmartPix (le périphérique Realtyme fonctionne aussi si vous en avez). Ou cherchez sur un forum de votre pays.

  - **Paramètres requis** (marqués en vert dans les captures d'écran) :

     * Choisissez ou laissez la configuration du menu sur "Standard", cela affichera uniquement les menus et actions pris en charge sur la pompe, et masquera ceux qui ne sont pas supportés par AAPS (bolus duo/carré, débits de base multiples) et qui entraînent une limitation du fonctionnement de la boucle lors de leurs utilisation, et donc ne permet pas une exécution sécurisée de la boucle.
     * Vérifiez le _Quick Info Text_ est défini à "QUICK INFO" (sans les guillemets, trouvés sous _Options de la pompe à insuline_).
     * Paramétrez le DBT _Maximum Adjustment_ à 500%
     * Désactivez _Signal End of Temporary Basal Rate_
     * Paramétrez le DBT _Duration increment_ à 15min
     * Activez le Bluetooth

  - **Paramètres recommandés** (marqués en bleu dans les captures d'écran) :

     * Définissez une alarme de cartouche basse à votre convenance
     * Configurez un bolus max adapté à votre thérapie afin de se protéger contre les bugs logiciel et matériel
     * De même, configurez une durée maximale de débit de basal temporaire DBT en tant que protection. Autorisez au moins 3 heures, puisque l'option de déconnecter la pompe pendant 3 heures défini un DBT à 0% pendant 3 heures.
     * Activez le verrouillage des touches sur la pompe pour éviter de faire bolus depuis la pompe, par exemple lorsque la pompe a été utilisée avant et que le bolus rapide était une habitude.
     * Définissez un délai d'affichage et de menu aux valeurs minimales respectivement de 5,5s et 5s. Cela permet à AAPS de récupérer plus rapidement de situations d’erreur et réduit la quantité de vibrations qui peuvent se produire pendant ces erreurs.

  ![Capture d’écran de réglages du menu utilisateur](../images/combo/combo-menu-settings.png)

  ![Capture d'écran des paramètres DBT](../images/combo/combo-tbr-settings.png)

  ![Capture d'écran des paramètres de bolus](../images/combo/combo-bolus-settings.png)

  ![Capture d'écran des paramètres de cartouche d'insuline](../images/combo/combo-insulin-settings.png)

## Activation du pilote et appairage avec la Combo

* Select the "Accu-Chek Combo" driver in [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md). **Important**: Il y a l'ancien pilote, appelé "Accu-Chek Combo (Ruffy)", dans cette liste également. Ne _pas_ sélectionner celui-ci.

  ![Screenshot of Config Builder Combo](../images/combo/combov2-config-builder.png)

* Appuyez sur la roue crantée pour ouvrir les paramètres du pilote.

* Dans l'interface utilisateur des paramètres, appuyez sur le bouton 'Associer avec la pompe' en haut de l'écran. Ceci ouvre l'interface utilisateur Combo. Suivez les instructions affichées à l'écran pour commencer l'appairage. Lorsque Android demande l'autorisation de rendre le téléphone visible par d'autres appareils Bluetooth, appuyez sur "Autoriser". Finalement, la Combo affichera un code PIN d'appairage à 10 chiffres personnalisé sur son écran, et le pilote le demandera. Entrez ce code PIN dans le champ correspondant.

  ![Screenshot of Combo Pairing UI 1](../images/combo/combov2-pairing-screen-1.png)

  ![Screenshot of Combo Pairing UI 2](../images/combo/combov2-pairing-screen-2.png)

  ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-3.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-4.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-5.png)

* Quand le pilote demande le code PIN à 10 chiffres qui est affiché sur le combo et que le code n'est pas entré correctement, ceci est affiché : ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Une fois l'appairage terminé, l'interface utilisateur est fermée en appuyant sur le bouton OK de la boite de dialogue qui confirme l'appairage. Après sa fermeture, vous retournez à l'interface utilisateur des paramètres du pilote. Le bouton "Appairer la pompe" devrait maintenant être grisé et désactivé.

  L'onglet Accu-Chek Combo ressemble à ceci après l'appairage réussi :

  ![Screenshot of Accu-Chek Combo tab with pairing](../images/combo/combov2-tab-with-pairing.png)

  si toutefois il n'y a pas d'appairage avec la Combo, l'onglet ressemble à ceci à la place:

  ![Screenshot of Accu-Chek Combo tab without pairing](../images/combo/combov2-tab-without-pairing.png)

* Pour vérifier votre configuration (avec la pompe **déconnectée** de toute canule pour être sûr!) utilisez AAPS pour définir un TBR de 500% pendant 15 min et émettre un bolus. La pompe doit normalement avoir un DBT en cours et un bolus dans l'historique. AAPS doit aussi de son côté montrer le DBT actif et le bolus délivré.

* Sur la Combo, il est recommandé d'activer le verrouillage des touches pour éviter de faire un bolus depuis la pompe, en particulier si la pompe a été utilisée avant et que l'utilisation de la fonction "bolus rapide" était une habitude.

## Remarques sur l'appairage

L'Accu-Chek Combo a été développé avant la sortie du Bluetooth 4.0, et seulement un an après la première version d'Android. C'est pourquoi sa façon d'appairer avec d'autres appareils n'est pas entièrement compatible avec la façon dont cela se fait dans Android aujourd'hui. Pour contourner complètement cette situation, AAPS aurait besoin d'autorisations de niveau système, qui ne sont disponibles que pour les applications système. Celles-ci sont installées par les fabricants de téléphones dans le téléphone - les utilisateurs ne peuvent pas installer d'applications système.

La conséquence, c'est que l'appairage ne sera jamais à 100 % sans problème, même s'il est grandement amélioré dans ce nouveau pilote. En particulier, pendant l'appairage, la boîte de dialogue du PIN Bluetooth d'Android peut s'afficher brièvement et disparaître automatiquement. Mais parfois, il reste à l’écran et demande un PIN à 4 chiffres. (Il ne faut pas confondre cela avec le code PIN d'appairage Combo à 10 chiffres) Ne saisissez rien, appuyez simplement sur Annuler. Si l'appairage ne se poursuit pas, suivez les instructions à l'écran pour recommencer la tentative d'appairage.

(combov2-tab-contents)=
## Contenu de l'onglet Accu-Chek Combo

L'onglet affiche les informations suivantes lorsqu'une pompe a été appairée (les éléments sont listés de haut en bas) :

![Screenshot of Accu-Chek Combo tab with pairing](../images/combo/combov2-tab-with-pairing.png)

1. _État du pilote_: Le pilote peut être dans l'un des états suivants :
   - "Déconnecté" : Il n'y a pas de connexion Bluetooth; le pilote est dans cet état la plupart du temps, et ne se connecte à la pompe que si nécessaire - cela économise de l'énergie
   - "Connexion en cours"
   - "Vérification de la Pompe" : la pompe est connectée, mais le pilote effectue actuellement des contrôles de sécurité pour s'assurer que tout est correct et à jour
   - "Prêt" : le pilote est prêt à accepter les commandes d'AAPS
   - "Suspendue" : la pompe est suspendue (affichée comme "arrêté" dans la Combo)
   - "Exécution de la commande" : une commande AAPS est en cours d'exécution
   - "Erreur" : une erreur est survenue ; la connexion a été interrompue, toute commande en cours a été interrompue
2. _Dernière connexion_: Combien de minutes plus tôt, le pilote s'est connecté avec succès à la Combo ; si cela dépasse 30 minutes, cet élément est affiché avec une couleur rouge
3. _Actuellement en activité_: Détails supplémentaires sur ce que la pompe fait actuellement, c'est également là où une fine barre de progression peut afficher la progression d'exécution d'une commande, comme par exemple définir un profil de basal
4. _Pile_: niveau de la pile, la Combo indique uniquement "plein", "faible", "vide", "pile", et n'offre rien de plus précis (comme un pourcentage), donc seuls ces trois niveaux sont affichés ici.
5. _Réservoir_: Combien d'unités sont actuellement dans le réservoir de la Combo
6. _Dernier bolus_: Il y a combien de minutes le dernier bolus a été injecté, si aucun bolus n'a encore été injecté après le démarrage d'AAPS, ce champ est vide
7. _Basal temporaire_: Détails sur le basal temporaire actuellement actif, si aucun n'est actuellement actif, ceci est vide
8. _Débit de Base_: Débit Basal actif (« base» signifie le débit Basal sans aucun DBT actif influant sur le facteur de débit Basal)
9. _Numéro de série_: Numéro de série de la Combo tel qu'indiqué par la pompe (cela correspond au numéro de série affiché à l'arrière de la Combo)
10. _Adresse Bluetooth_: Adresse Bluetooth 6 octets du Combo, affichée au format `XX:XX:XX:XX:XX:XX:XX:XX`

Le Combo peut être commandé via Bluetooth en mode _terminal à distance_ ou en mode _commande_. The remote-terminal mode corresponds to the "remote control mode" on the Combo's meter, which mimics the pump's LCD and four buttons. Some commands have to be performed in this mode by the driver, since they have no counterpart in the command mode. That latter mode is much faster, but, as said, limited in scope. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing at the bottom. When the driver switches to the command mode however, that field is left blank.

(The user does not influence this; the driver fully decides on its own what mode to use. This is merely a note for users to know why sometimes they can see Combo frames in that field.)

At the very bottom, there is the "Refresh" button. This triggers an immediate pump status update. It also is used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](#combov2-alerts)).

## Préférences

These preferences are available for the combo driver (items are listed from top to bottom):

![Screenshot of Accu-Chek Combo preferences](../images/combo/combov2-preferences.png)

1. _Pair with pump_: This is a button that can be pressed to pair with a Combo. It is disabled if a pump is already paired.
2. _Unpair pump_: Unpairs a paired Combo; the polar opposite of item no. 1. It is disabled if no pump is paired.
3. _Discovery duration (in seconds)_: When pairing, the drivers makes the phone discoverable by the pump. This controls how long that discoverability lasts. By default, the maximum (300 seconds = 5 minutes) is selected. Android does not allow for discoverability to last indefinitely, so a duration has to be chosen.
4. _Autodetect and automatically enter insulin reservoir change_: If enabled, the "reservoir change" action that is normally done by the user through the "prime/fill" button in the Action tab. This is explained [in further detail below](#combov2-autodetections).
5. _Autodetect and automatically enter battery change_: If enabled, the "battery change" action that is normally done by the user through the "pump battery change" button in the Action tab. This is explained [in further detail below](#combov2-autodetections).
6. _Enable verbose Combo logging_: This greatly expands the amount of logging done by the driver. **CAUTION**: Do not enable this unless asked to by a developer. Otherwise, this can add a lot of noise to AndroidAPS logs and lessen their usefulness.

Most users only ever use the top two items, the _Pair with pump_ and _Unpair pump_ buttons.

(combov2-autodetections)=
## Autodetecting and automatically entering battery and reservoir changes

The driver is capable of detecting battery and reservoir changes by keeping track of the battery and reservoir levels. If the battery level was reported by the Combo as low the last time the pump status was updated, and now, during the new pump status update, the battery level shows up as normal, then the driver concludes that the user must have replaced the battery. The same logic is used for the reservoir level: If it now is higher than before, this is interpreted as a reservoir change.

This only works if the battery and reservoir are replaced when these levels are reported as low _and_ the battery and reservoir are sufficiently filled.

These autodetections can be turned off in the Preferences UI.

(combov2-alerts)=
## Alerts (warnings and errors) and how they are handled

The Combo shows alerts as remote-terminal screens. Warnings are shown with a "Wx" code (x is a digit), along with by a short description. One example is "W7", "TBR OVER". Errors are similar, but show up with an "Ex" code instead.

Certain warnings are automatically dismissed by the driver. These are:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main tab
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main tab
- W3, W6, W7, W8 : these are all purely informational for the user, so it is safe for the driver to auto-dismiss them

Other warnings are _not_ automatically dismissed. Also, errors are _never_ automatically dismissed. Both of these are handled the same way: They cause the driver to produce an alert dialog on top of the AAPS UI, and also cause it to abort any ongoing command execution. The driver then switches to the "error" state (see [the Accu-Chek Combo tab contents description above](#combov2-tab-contents)). This state does not allow for any command execution. The user has to handle the error on the pump; for example, an occlusion error may require replacing the cannula. Once the user took care of the error, normal operation can be resumed by pressing the "Refresh" button on the Accu-Chek Combo tab. The driver then connects to the Combo and updates its status, checking for whether an error is still shown on screen etc. Also, the driver auto-refreshes the pump status after a while, so manually pressing that button is not mandatory.

Bolusing is a special case. It is done in the Combo's command mode, which does not report mid-bolus that an alert appeared. As a consequence, the driver cannot automatically dismiss warnings _during_ a bolus. This means that unfortunately, the pump will be beeping until the bolus is finished. The most common mid-bolus alert typically is W1 "reservoir low". **Don't** dismiss Comnbo warnings on the pump itself manually during a bolus. You risk interrupting the bolus. The driver will take care of the warning once the bolus is over.

Alerts that happen while the driver is not connected to the Combo will not be noticed by the driver. The Combo has no way of automatically pushing that alert to the phone; it is always the phone that has to initiate the connection. As a consequence, the alert will persist until the driver connects to the pump. Users can press the "Refresh" button to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**IMPORTANT**: If an error occurs, or a warning shows up that isn't one of those that are automatically dismissed, the driver enters the error state. In that state, the loop **WILL BE BLOCKED** until the pump status is refreshed! It is unblocked after the pump status is updated (either by manual "Refresh" button press or by the driver's eventual auto-update) and no error is shown anymore.

## Things to be careful about when using the Combo

* Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. Il est fortement conseillé de NE PAS utiliser ce système lorsque la personne n'est pas en mesure de bien le comprendre entièrement.
* Due to the way the Combo's remote control functionality works, several operations (especially setting a basal profile) are slow compared to other pumps. This is an unfortunate limitation of the Combo that cannot be overcome.
* Ne faites pas ou n'annulez pas de DBT sur la pompe. The loop assumes control of TBRs and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
* Don't press any buttons on the pump while AAPS communicates with the pump (the Bluetooth logo is shown on the pump while it is connected to AAPS). Doing that will interrupt the Bluetooth connection. Only do that if there are problems with establishing a connection (see [the "Before you begin" section above](#combov2-before-you-begin)).
* Don't press any buttons while the pump is bolusing. In particular, don't try to dismiss alerts by pressing buttons. See [the section about alerts](#combov2-alerts) for a more detailed explanation why.

## Checklist for when no connection can be established with the Combo

The driver does its best to connect to the Combo, and uses a couple of tricks to maximize reliability. Still, sometimes, connections aren't established. Here are some steps to take for trying to remedy this situation.

1. Press a button on the Combo. Sometimes, the Combo's Bluetooth stack becomes non-responsive, and does not accept connections anymore. By pressing a button on the Combo and making the LCD show something, the Bluetooth stack is reset. Most of the time, this is the only step that's needed to fix the connection issues.
2. Restart the phone. This may be needed if there is an issue with the phone's Bluetooth stack itself.
3. If the Combo's battery cap is old, consider replacing it. Old battery caps can cause issues with the Combo's power supply, which affect Bluetooth.
4. If connection attempts still keep failing, consider unpairing and then re-pairing the pump.
