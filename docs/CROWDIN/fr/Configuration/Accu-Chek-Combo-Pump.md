# Pompe Accu-Chek Combo

**Ce logiciel est un système "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Ce logiciel ne fait pas toute la gestion de votre diabète pour vous, mais il peut améliorer votre diabète et votre qualité de vie si vous êtes prêt à y consacrer le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

## Configuration matérielle requise

* Une pompe Roche Accu-Chek Combo (avec n’importe quel firmware, ils fonctionnent tous)
* Un dispositif Accu-Chek Smartpix V1 ou Accu-Chek Realtyme, ainsi que le logiciel de configuration Accu-Chek 360. (Sur demande Roche envoie gratuitement ces dispositifs Smartpix et la configuration logiciel à leurs clients, sauf en France ou il faut contacter son prestataire).
* Un téléphone compatible : un smarphone Android avec comme système LineageOS 14.1 (anciennement CyanogenMod) ou Android 8.1 (Oreo). 
* LineageOS 14.1 (ou plus) doit être une version récente d’au moins juin 2017 car les changements nécessaires pour se connecter à la pompe Combo ont été mis en œuvre seulement à ce moment-là. 
* Une liste de téléphones compatibles se trouvent dans le document [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).
* Cette liste n’est pas une liste complète. Elle reflète l’expérience personnelle de quelques utilisateurs. Nous vous encourageons à partager également votre expérience et ainsi aider les autres.
* Ayez bien en tête que bien qu'Android 8.1 autorise la communication avec le Combo, il y a toujours des problèmes avec AAPS sur 8.1.
* Pour les utilisateurs avancés, il est possible d'effectuer l'appairage sur un téléphone rooté et de le transférer vers un autre téléphone qui doit également être rooté pour l'utiliser avec Ruffy/AAPS. Ceci permet d'utiliser des téléphones avec [Android 8.1](https://github.com/gregorybel/combo-pairing/blob/master/README.md) mais n'a pas été largement testé.

## Limitations

* Les bolus étendus et les bolus mixtes ne sont pas pris en charge (voir [Glucides étendus](../Usage/Extended-Carbs.rst) à la place).
* Seulement un profil de basal est pris en charge.
* Setting a basal profile other than 1 on the pump or delivering extended boluses or multiwave boluses from the pump interferes with TBRs and forces the loop into low-suspend only mode for 6 hours as the the loop can't run safely under these conditions.
* It's currently not possible to set the time and date on the pump, so [daylight saving time changes](../Usage/Timezone-traveling.html#accu-chek-combo) have to be performed manually (you may disable the phone's automatic clock update in the evening and change it back in the morning together with the pump clock to avoid an alarm during the night).
* Actuellement, seuls les débits de basals de 0,05 à 10 U/h sont supportés. This also applies when modifying a profile, e.g. when increasing to 200%, the highest basal rate must not exceed 5 U/h since it will be doubled. De même, en réduisant à 50%, le taux basal le plus bas doit être au moins 0,10 U/h.
* If the loop requests a running TBR to be cancelled the Combo will set a TBR of 90% or 110% for 15 minutes instead. This is because cancelling a TBR causes an alert on the pump which causes a lot of vibrations.
* Occasionally (every couple of days or so) AAPS might fail to automatically cancel a TBR CANCELLED alert, which the user then needs to deal with (by pressing the refresh button in AAPS to transfer the warning to AAPS or confirming the alert on the pump).
* Bluetooth connection stability varies with different phones, causing "pump unreachable" alerts, where no connection to the pump is established anymore. 
* If that error occurs, make sure Bluetooth is enabled, press the Refresh button in the Combo tab to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this. 
* There is another issue were a restart doesn't help but a button on the pump must be pressed (which resets the pump's Bluetooth), before the pump accepts connections from the phone again. 
* There is very little that can be done to remedy either of those issues at this point. So if you see those errors frequently your only option at this time is to get another phone that's known to work well with AndroidAPS and the Combo (see above).
* Un bolus délivré à partir de la pompe ne sera pas toujours détecté immédiatement (il faut vérifier à chaque fois qu'AndroidAPS est bien connecté à la pompe), et cela peut prendre jusqu'à 20 minutes dans le pire des cas. 
* Les bolus sur la pompe sont toujours vérifiés avant un DBT élevé ou un bolus délivré par AAPS, mais en raison des limitations, AAPS refusera ensuite de délivrer le DBT/Bolus comme il a été calculé sous de fausses prédictions. (-> La solution est de ne pas délivrer de bolus via la pompe! See chapter [Usage](#usage) below)
* Le paramétrage d'un DBT sur la pompe doit être évité puisque la boucle assure le contrôle des DBT. La détection d'un nouveau DBT sur la pompe peut prendre jusqu'à 20 minutes et l'effet du DBT est seulement comptabilisé à l’instant où il est détecté, donc dans le pire des cas, il peut y avoir 20 minutes d’un DBT qui n’est pas pris en compte dans l’IA. 

## Paramètres

* Configurez la pompe en utilisant le logiciel de configuration Accu-Chek 360. 
* Si vous n’avez pas le logiciel, veuillez contacter votre prestataire en france ou la hotline Accu-Chek dans les autres pays. Ils envoient généralement aux utilisateurs enregistrés un CD ou une clé USB avec le logiciel de configuration de la pompe et un périphérique de connexion infrarouge USB SmartPix (le périphérique Realtyme fonctionne aussi si vous en avez). Ou cherchez sur un forum de votre pays.
* **Required settings** (marked green in screenshots):
    
    * Set/leave the menu configuration as "Standard", this will show only the supported menus/actions on the pump and hide those which are unsupported (extended/multiwave bolus, multiple basal rates), which cause the loop functionality to be restricted when used because it's not possible to run the loop in a safe manner when used.
    * Vérifiez le *Quick Info Text* est défini à "QUICK INFO" (sans les guillemets, trouvés sous *Insulin Pump Options*).
    * Paramétrez le DBT *Maximum Adjustment* à 500%
    * Désactivez *Signal End of Temporary Basal Rate*
    * Paramétrez le DBT *Duration increment* à 15min
    * Activez le Bluetooth

* **Recommended settings** (marked blue in screenshots)
    
    * Définissez une alarme de cartouche basse à votre convenance
    * Configurez un bolus max adapté à votre thérapie afin de se protéger contre les bugs logiciel et matériel
    * De même, configurez une durée maximale de débit de basal temporaire DBT en tant que protection. Allow at least 3 hours, since the option to disconnect the pump for 3 hours sets a 0% for 3 hours.
    * Activez le verrouillage des touches sur la pompe pour empêcher les bolus via la pompe, when the pump was used before and quick bolusing was a habit.
    * Définissez un délai d'affichage et de menu aux valeurs minimales respectivement de 5,5s et 5s. This allows the AAPS to recover more quickly from error situations and reduces the amount of vibrations that can occur during such errors

![Capture d’écran de réglages du menu utilisateur](../images/combo/combo-menu-settings.png)

![Capture d'écran des paramètres DBT](../images/combo/combo-tbr-settings.png)

![Capture d'écran des paramètres de bolus](../images/combo/combo-bolus-settings.png)

![Capture d'écran des paramètres de cartouche d'insuline](../images/combo/combo-insulin-settings.png)

* Installez AndroidAPS comme décrit dans la [documentation AndroidAPS](../Installing-AndroidAPS/Building-APK.html).
* Make sure to read the docs to understand how to setup AndroidAPS.
* Select the **MDI plugin** in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
* Clonez [ruffy](https://github.com/MilosKozak/ruffy) à partir de github avec git.
* Installez la Ruffy et utilisez le pour appairer la pompe.
    
    * Si elle ne fonctionne pas après plusieurs tentatives, passez à la branche `pairing`, appairez la pompe puis reprenez le fil de cette page.
    * Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. 
    * Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code.
    * Si vous n’avez pas réussi l’appairage de la pompe (disons après 10 tentatives), essayez d’attendre jusqu'à 10s avant de confirmer l’appairage sur la pompe (lorsque le nom du téléphone est affiché sur la pompe). 
    * Si vous avez configuré ci-dessus le délai d'affichage du menu à 5s, vous devez l'augmenter à nouveau. Certains utilisateurs ont signalé qu'ils avaient eu besoin de le faire. 
    * Enfin, envisagez de passer dans une autre pièce en cas d’interférence avec des ondes radio. Au moins un utilisateur a immédiatement résolu les problèmes d'appairage en changeant simplement de pièce.

* Quand AAPS utilise Ruffy, l'application Ruffy ne peut pas être utilisée. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.

* If the pump is completely new, you need to **do one bolus on the pump**, so the pump creates a first history entry.
* Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump.
* Then activate the [Combo plugin](../Configuration/Config-Builder.html#pump). 
* Press the *Refresh* button on the Combo tab to initialize the pump.
* Pour vérifier votre configuration, avec la pompe **déconnectée**, utilisez AAPS pour définir un DBT de 500% pendant 15 min et faite un bolus.
* La pompe doit normalement avoir un DBT en cours et un bolus dans l'historique. AAPS doit aussi de son côté montrer le DBT actif et le bolus délivré.

## Why does pairing with the pump not work with the app "ruffy"?

Il y a plusieurs raisons possibles. Essayez les étapes suivantes :

1. Insérer une **pile neuve ou un accu complètement chargé** dans la pompe. Consultez la section "Considérations relatives à la pile" pour plus de détails. Assurez-vous que la pompe est très proche du smartphone.

![Le Combo doit être proche du téléphone](../images/Combo_next_to_Phone.png)

2. Désactivez ou supprimez tous les autres périphériques bluetooth afin qu'ils ne soient pas en mesure d'établir une connexion au téléphone pendant que l'appairage est en cours. Toute communication bluetooth parallèle ou demande de connexions peut perturber le processus d'appairage.
3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.
4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Assurez-vous que AAPS n'exécute pas la boucle en arrière-plan. Désactivez la boucle dans AAPS.
6. Maintenant, démarrez ruffy sur le téléphone. Vous pouvez appuyer sur Reset! et supprimer l'ancienne liaison. Puis appuyez sur Connect!.
7. Dans le menu Bluetooth de la pompe, allez à **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!**
    
    * Step 6 and 7 have to be done in a short timing.

8. A présent, la pompe doit afficher le nom BT du téléphone à sélectionner pour l'appairage. Here it is important to wait at least 5s before you hit the select button on Pump. Sinon, la Pompe n'enverra pas correctement la demande d'appairage au téléphone.

* Si le délai d'affichage de l'écran de la pompe Combo est défini sur 5s, vous pouvez essayer avec 40s (paramètre d'origine). From experience the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully Pair. 
* Plus tard, vous devrez le redéfinir sur 5 s pour répondre aux paramètrage du combo dans AAPS.
* If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Vérifiez que vous exécutez une version de **LineageOS ≥ 14.1** ou **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. Vous pouvez trouver la liste des téléphones déjà utilisés avec succès sous \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

9. Ensuite la pompe doit afficher un code de sécurité à 10 chiffres, et Ruffy affiche un écran pour le renseigner. Donc entrez le dans Ruffy et vous devriez être prêt à partir.
10. Redémarrer le téléphone.
11. Maintenant, vous pouvez redémarrer la boucle AAPS.

## Utilisation

* Gardez à l'esprit qu'il ne s'agit pas d'un produit, en particulier in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. 
* It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
* Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
* Read the [AAPS docs](..index.html) to learn about and understand AndroidAPS.
* Cette intégration utilise la même fonctionnalité que le lecteur fournit avec le Combo.
* Le lecteur permet de reproduire l'écran de la pompe et de transférer à la pompe les appuis sur les touches. 
* The connection to the pump and this forwarding is what the ruffy app does. 
* A 'scripter' components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly.
* AAPS interagit ensuite avec l'automate pour appliquer les commandes de la boucle et pour administrer des bolus.
* This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for) and setting a TBR or giving a bolus causes the pump to vibrate.
* The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. 
* Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why **all inputs should be done in AndroidAPS**). 
* Ne faites pas ou n'annulez pas de DBT sur la pompe. La boucle assure le contrôle des DBT et ne peut pas fonctionner de manière fiable autrement, car il n'est pas possible de déterminer l'heure exacte du début d'un DBT qui a été défini par l'utilisateur sur la pompe.
* Le profil 1 de la pompe pour les débits de basal est lu au démarrage de l'application et est mis à jour par AAPS.
* The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
* Il est recommandé d'activer le verrouillage sur la pompe pour empêcher l'utilisation de boulons à partir de la pompe, en particulier when the pump was used before and using the "quick bolus" feature was a habit.
* Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
* When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (**boluses are NOT retried** for safety reasons). 
* Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). 
* If the pump's alarm continues, automatic confirmation failed, in which case the user needs to confirm the alarm manually.
* When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. 
* If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
* When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
* For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen.
* Une erreur déclenchera une notification urgente. 
* AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
* After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
* If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Redémarrer AAPS redémarrera à nouveau Ruffy.
* Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
* Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).