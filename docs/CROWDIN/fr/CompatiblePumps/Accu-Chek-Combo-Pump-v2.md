# Accu-Chek Combo

**Ce logiciel est un système "Do it yourself" (faire soi-même), et ce n’est pas un produit fini destiné à la mise sur le marché. VOUS devez obligatoirement lire, apprendre et comprendre ce système, y compris la façon de l’utiliser. Ce logiciel ne fait pas toute la gestion de votre diabète pour vous, mais il peut améliorer votre diabète et votre qualité de vie si vous êtes prêt à y consacrer le temps nécessaire. Ne vous précipitez pas, mais laissez vous le temps d’apprendre. Attention, vous êtes le seul responsable de ce que vous faite avec ce système.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

Roche is withdrawing from the insulin pump market to refocus its diabetes portfolio on the Accu-Chek SmartGuide CGM. It has communicated the end of sales of both the Accu-Chek Combo and Accu-Chek Insight pumps; its remaining Accu-Chek Solo micropump is also being wound down (last deliveries in Germany at the end of 2025). The change is being rolled out by region, starting in Germany, with other European markets expected to follow. If you rely on this pump, plan ahead for a transition to a supported pump.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Automatic DST and timezone handling.

## Configuration matérielle et logicielle requise

* Une pompe Roche Accu-Chek Combo (avec n’importe quel firmware, ils fonctionnent tous).
* Un dispositif Accu-Chek Smartpix V1 ou Accu-Chek Realtyme, ainsi que le logiciel de configuration Accu-Chek 360. (Sur demande Roche envoie gratuitement ces dispositifs Smartpix et la configuration logiciel à leurs clients, sauf en France ou il faut contacter son prestataire).
* A compatible phone running Android 12 or newer. See [release notes](#maintenance-android-version-aaps-version) for details.
* The **AAPS** app installed on your phone.

Certains téléphones peuvent fonctionner mieux que d'autres, en fonction de la qualité du Bluetooth et s'ils ont une logique supplémentaire agressive d'économie d'énergie. A list of phones can be found in the [AAPS Phones](#Phones-list-of-tested-phones) document. Cette liste n’est pas une liste complète. Elle reflète l’expérience personnelle de quelques utilisateurs. Nous vous encourageons à partager également votre expérience et ainsi aider les autres.

(combov2-before-you-begin)=
## Avant de commencer

**SÉCURITÉ AVANT TOUT** - ne pas tenter ce processus si vous ne pouvez pas récupérer en cas d'erreur. Gardez votre appareil Smartpix / Realtyme à portée de main, ainsi que le logiciel de configuration 360. Planifiez de passer environ une heure pour tout configurer et vérifier que tout fonctionne correctement.

Soyez conscient des limitations suivantes :

* Extended bolus and multiwave bolus are currently not supported (you can use [Extended Carbs](../DailyLifeWithAaps/ExtendedCarbs.md) instead).
* Un seul profil de basal (le premier) est pris en charge.
* The lowest basal rate in your **Profile** is 0.05 U/h. **AAPS** refuses a **Profile** with a lower rate. The Combo rounds basal rates to its own steps (0.01 U/h below 1 U/h, 0.05 U/h up to 10 U/h, 0.1 U/h above). **AAPS** uses the rates the pump really gives.
* Temporary basal rates are limited to 500% of the current basal rate. **AAPS** takes this limit into account.
* La boucle est désactivée si le profil actif sur la pompe n'est pas le profil no. 1. This continues until profile no. 1 is made the active one; when that is done, the next time AAPS connects (either on its own after a while or because you tap **Refresh** on the Accu-Chek Combo pump screen), it will notice that profile no. 1 is the current one, and enable the loop again.
* Si la boucle demande l'annulation d'un DBT en cours, le Combo fixera un DBT de 90% ou 110% pendant 15 minutes à la place. Cela est dû au fait que l'annulation d'un DBT provoque une alerte sur la pompe qui provoque de nombreuses vibrations, et ces vibrations ne peuvent pas être désactivées.
* La stabilité de la connexion Bluetooth varie en fonction des téléphones utilisés. La perte de connection provoque des alertes "pompe injoignable", pendant laquelle aucune connexion avec la pompe n'est établie. If that error occurs, make sure Bluetooth is enabled, tap **Refresh** on the pump screen (**Manage** > **Pump**) to see if this was caused by an intermitted issue and if still no connection is established, reboot the phone which should usually fix this.
* Il y a une autre problème où le redémarrage du téléphone n'aide pas. Il s'agit de presser un bouton sur la pompe (pour réinitialiser le Bluetooth de la pompe) afin que celle-ci accepte de nouveau les connexions du téléphone.
* Le paramétrage d'un DBT sur la pompe doit être évité puisque la boucle assure le contrôle des DBT. La détection d'un nouveau DBT sur la pompe peut prendre jusqu'à 20 minutes et l'effet du DBT est seulement comptabilisé à l’instant où il est détecté, donc dans le pire des cas, il peut y avoir 20 minutes d’un DBT qui n’est pas pris en compte dans l’IA.

The driver is currently written to support the following languages on the Combo. (This is unrelated to the language in AAPS - it is the language shown on the Combo's LCD itself.)

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

* Open the **menu** (☰) in the top-left corner, go to [**Configuration** > **Pump**](../SettingUpAaps/ConfigBuilder.md) and select **Accu-Chek Combo**.

  ![Configuration > Pump with the Accu-Chek Combo plugin](../images/v4/Configuration/configuration_pump_list_1.png)

  Once it is selected, the **Accu-Chek Combo** card shows two buttons, **Settings** and **Open plugin**:

  ![The Accu-Chek Combo plugin selected in Configuration > Pump](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Settings** opens the settings of the Accu-Chek Combo driver (see [Settings](#combov2-preferences) below):

  ![Accu-Chek Combo driver settings](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Open plugin** (or **Manage** > **Pump**) opens the Accu-Chek Combo pump screen. Before a pump is paired it shows **Not paired to a pump**:

  ![Accu-Chek Combo pump screen before pairing](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* On the pump screen, tap **Pairing**. The **Pair with pump** screen opens. Follow the steps shown on screen, then tap **Start pairing**. When Android asks for permission to make the phone visible to other Bluetooth devices, tap **Allow**. Eventually, the Combo shows a 10-digit pairing PIN on its screen, and **AAPS** asks for it. Enter that PIN in the **10-digit PIN** field.

  ![The Pair with pump screen with the Start pairing button](../images/combo/combov2-pairing-screen-1.png)

  ![Android asking to make the phone visible to other Bluetooth devices](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Combo pairing in progress, scanning for the pump](../images/combo/combov2-pairing-screen-2.png)

  The next pictures are from an older **AAPS** version. The steps and texts are the same, but the screens look slightly different.

  ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-3.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-4.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-5.png)

* If the PIN is entered incorrectly, **AAPS** shows **PIN did not work. Check if there was a typo. If this keeps happening, cancel and retry pairing.**

  ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* When **Successfully paired with Combo** is shown, tap **OK**. You return to the pump screen, which now shows the pump status (see [Accu-Chek Combo pump screen contents](#combov2-tab-contents) below). The **Pairing** button is replaced by **Unpair**.

* Pour vérifier votre configuration (avec la pompe **déconnectée** de toute canule pour être sûr!) utilisez AAPS pour définir un TBR de 500% pendant 15 min et émettre un bolus. La pompe doit normalement avoir un DBT en cours et un bolus dans l'historique. AAPS doit aussi de son côté montrer le DBT actif et le bolus délivré.

* Sur la Combo, il est recommandé d'activer le verrouillage des touches pour éviter de faire un bolus depuis la pompe, en particulier si la pompe a été utilisée avant et que l'utilisation de la fonction "bolus rapide" était une habitude.

## Remarques sur l'appairage

L'Accu-Chek Combo a été développé avant la sortie du Bluetooth 4.0, et seulement un an après la première version d'Android. C'est pourquoi sa façon d'appairer avec d'autres appareils n'est pas entièrement compatible avec la façon dont cela se fait dans Android aujourd'hui. Pour contourner complètement cette situation, AAPS aurait besoin d'autorisations de niveau système, qui ne sont disponibles que pour les applications système. Celles-ci sont installées par les fabricants de téléphones dans le téléphone - les utilisateurs ne peuvent pas installer d'applications système.

The consequence of this is that pairing will never be 100% without problems. En particulier, pendant l'appairage, la boîte de dialogue du PIN Bluetooth d'Android peut s'afficher brièvement et disparaître automatiquement. Mais parfois, il reste à l’écran et demande un PIN à 4 chiffres. (Il ne faut pas confondre cela avec le code PIN d'appairage Combo à 10 chiffres) Ne saisissez rien, appuyez simplement sur Annuler. Si l'appairage ne se poursuit pas, suivez les instructions à l'écran pour recommencer la tentative d'appairage.

(combov2-tab-contents)=
## Accu-Chek Combo pump screen contents

To open the pump screen, go to **Manage** > **Pump**. Once a pump is paired, it shows the following information (items are listed from top to bottom):

![Screenshot of the Accu-Chek Combo pump screen with pairing (older AAPS version)](../images/combo/combov2-tab-with-pairing.png)

1. **Driver state**: The driver can be in one of the following states:
   - **Disconnected**: There is no Bluetooth connection; the driver is in this state most of the time, and only connects to the pump when needed - this saves power
   - **Connecting**
   - **Checking pump**: the pump is connected, but the driver is currently performing safety checks to ensure that everything is OK and up to date
   - **Ready**: the driver is ready to accept commands from AAPS
   - **Suspended**: the pump is suspended (shown as "stopped" in the Combo)
   - A description of the command being executed, for example **Setting basal profile** or **Updating pump status**
   - **Error**: an error occurred; the connection was terminated, any ongoing command was aborted
2. **Last connection**: How many minutes ago the driver successfully connected to the Combo; if this goes beyond 30 minutes, this item is shown with a red color
3. **Battery**: Battery level; the Combo only indicates **Full**, **Low** or **Empty**, and does not offer anything more accurate (like a percentage), so only these three levels are shown here
4. **Reservoir**: How many IU are currently in the Combo's reservoir
5. **Last bolus**: How many minutes ago the last bolus was delivered; if none was delivered yet after AAPS was started, this is not shown
6. **Temp basal**: Details about the currently active temporary basal; if none is currently active, this is not shown
7. **Base basal rate**: Currently active base basal rate ("base" means the basal rate without any active TBR influencing the basal rate factor)
8. **Serial number**: Combo serial number as indicated by the pump (this corresponds to the serial number shown on the back of the Combo)
9. **Bluetooth address**: The Combo's 6-byte Bluetooth address, shown in the `XX:XX:XX:XX:XX:XX` format

While the driver is doing something (for example, setting a basal profile), a box below the list describes the current activity, with a thin progress bar showing the progress.

Le Combo peut être commandé via Bluetooth en mode _terminal à distance_ ou en mode _commande_. The remote-terminal mode corresponds to the "remote control mode" on the Combo's meter, which mimics the pump's LCD and four buttons. Some commands have to be performed in this mode by the driver, since they have no counterpart in the command mode. That latter mode is much faster, but, as said, limited in scope. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing. When the driver switches to the command mode however, that field is left blank.

(You do not influence this; the driver fully decides on its own what mode to use. This is merely a note for you to know why sometimes you can see Combo frames in that field.)

At the bottom, there are these buttons:

- **Refresh**: Triggers an immediate pump status update. It is also used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](#combov2-alerts)). You can only tap it when the driver is disconnected, suspended or in the error state.
- **Unpair**: Unpairs the paired Combo from **AAPS** and Android, after you confirm **Do you really want to unpair the pump?**. When no pump is paired, this button is replaced by **Pairing**.

(combov2-preferences)=
## Paramètres

These settings are available for the Combo driver (**Configuration** > **Pump** > **Accu-Chek Combo** > **Settings**, or the settings icon (cog wheel) on the pump screen). Items are listed from top to bottom:

1. **Discovery duration (in seconds)**: When pairing, the driver makes the phone discoverable by the pump. This controls how long that discoverability lasts. By default, the maximum (300 seconds = 5 minutes) is selected. Android does not allow for discoverability to last indefinitely, so a duration has to be chosen.
2. **Autodetect and automatically enter insulin reservoir change**: If enabled, the driver enters the "reservoir change" that you would normally enter yourself with **Manage** > **Prime/Fill**. This is explained [in further detail below](#combov2-autodetections).
3. **Autodetect and automatically enter battery change**: If enabled, the driver enters the "battery change" that you would normally enter yourself with **Manage** > **Pump Battery Change**. This is explained [in further detail below](#combov2-autodetections).
4. **Enable verbose Combo logging**: This greatly expands the amount of logging done by the driver. **CAUTION**: Do not enable this unless asked to by a developer. Otherwise, this can add a lot of noise to **AAPS** logs and lessen their usefulness.

Pairing and unpairing are done on the pump screen, not in the settings (see above).

(combov2-autodetections)=
## Autodetecting and automatically entering battery and reservoir changes

The driver is capable of detecting battery and reservoir changes by keeping track of the battery and reservoir levels. If the battery level was reported by the Combo as low the last time the pump status was updated, and now, during the new pump status update, the battery level shows up as normal, then the driver concludes that the user must have replaced the battery. The same logic is used for the reservoir level: If it now is higher than before, this is interpreted as a reservoir change.

This only works if the battery and reservoir are replaced when these levels are reported as low _and_ the battery and reservoir are sufficiently filled.

These autodetections can be turned off in the driver [settings](#combov2-preferences).

(combov2-alerts)=
## Alerts (warnings and errors) and how they are handled

The Combo shows alerts as remote-terminal screens. Warnings are shown with a "Wx" code (x is a digit), along with by a short description. One example is "W7", "TBR OVER". Errors are similar, but show up with an "Ex" code instead.

Certain warnings are automatically dismissed by the driver. These are:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main screen
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main screen
- W3, W6, W7, W8 : these are all purely informational for the user, so it is safe for the driver to auto-dismiss them

Other warnings are _not_ automatically dismissed. Also, errors are _never_ automatically dismissed. Both of these are handled the same way: They cause the driver to produce an alert dialog on top of the AAPS UI, and also cause it to abort any ongoing command execution. The driver then switches to the "error" state (see [the Accu-Chek Combo pump screen contents above](#combov2-tab-contents)). This state does not allow for any command execution. The user has to handle the error on the pump; for example, an occlusion error may require replacing the cannula. Once the user took care of the error, normal operation can be resumed by tapping **Refresh** on the Accu-Chek Combo pump screen. The driver then connects to the Combo and updates its status, checking for whether an error is still shown on screen etc. Also, the driver auto-refreshes the pump status after a while, so manually pressing that button is not mandatory.

Bolusing is a special case. It is done in the Combo's command mode, which does not report mid-bolus that an alert appeared. As a consequence, the driver cannot automatically dismiss warnings _during_ a bolus. This means that unfortunately, the pump will be beeping until the bolus is finished. The most common mid-bolus alert typically is W1 "reservoir low". **Don't** dismiss Comnbo warnings on the pump itself manually during a bolus. You risk interrupting the bolus. The driver will take care of the warning once the bolus is over.

Alerts that happen while the driver is not connected to the Combo will not be noticed by the driver. The Combo has no way of automatically pushing that alert to the phone; it is always the phone that has to initiate the connection. As a consequence, the alert will persist until the driver connects to the pump. You can tap **Refresh** on the pump screen to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**IMPORTANT**: If an error occurs, or a warning shows up that isn't one of those that are automatically dismissed, the driver enters the error state. In that state, the loop **WILL BE BLOCKED** until the pump status is refreshed! It is unblocked after the pump status is updated (either by tapping **Refresh** or by the driver's eventual auto-update) and no error is shown anymore.

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

(combov2-tips-for-basic-usage)=
## Tips for basic usage

### How to ensure smooth operations

* Always **carry the smartphone with you**, leave it next to your bed at night. As your pump may lay behind or under you body while you sleep, a higher position (on a shelf or board) works best.
* Always make sure that the pump battery is as full as possible. See the battery section for tipps regarding the battery.
* Whenever possible, only operate the pump via the AAPS app. To facilitate this, activate the key lock on the pump under **PUMP SETTINGS / KEY LOCK / ON**. Only when changing the battery or the cartridge, it is necessary to use the pump's keys.

![Keylock](../images/combo/combo-tips-keylock.png)

### Pump not reachable. What to do?

#### Activate pump unreachable alarm
* In **AAPS**, tap the **Settings** (gear) icon at the top right of the main screen, go to **Local alerts**, activate **Alert if pump is unreachable** and set **Pump unreachable threshold** to **31** minutes.
* This will give you enough time to not trigger the alarm when leaving the room while your phone is left on the desk, but informs you if the pump cannot be reached for a time that exceeds the duration of a temporary basal rate.

#### Restore reachability of the pump

* When AAPS reports a **pump unreachable** alarm, first release the keylock and **press any key on the pump** (e.g. "down" button). As soon as the pump display has turned off, tap **Refresh** on the Accu-Chek Combo pump screen (**Manage** > **Pump**). Mostly then the communication works again.
* If that does not help, reboot your smartphone. After the restart, AAPS will be reactivated and a new connection will be established with the pump.

* The tests with different smartphones have shown that certain smartphones trigger the "pump unreachable" error more often than others. See [AAPS Phones](#Phones-list-of-tested-phones) for successfully tested smartphones.

#### Root causes and consequences of frequent communication errors
* On phones with **low memory** (or **aggressive power-saving** settings), AAPS is often shut down. You can tell by the fact that the treatment buttons (QuickLaunch toolbar) on the main screen are not shown when opening AAPS because the system is initializing. This can trigger "pump unreachable alarms" at startup. In the **Last connection** field of the pump screen (**Manage** > **Pump**), you can check when AAPS last communicated with the pump.

![No connection to pump](../images/combo/combov2-tips-no-connection-to-pump.png)

* This error can drain the pump's battery faster because the basal profile is read from the pump when the app is restarted.
* It also increases the likelihood of causing the error that causes the pump to reject all incoming connections until a button on the pump is pressed.

### Cancellation of temporary basal rate fails
* Occasionally, AAPS cannot automatically cancel a **TBR CANCELED** alert. Then you have to either tap **Refresh** on the Accu-Chek Combo pump screen or the alarm on the pump will need to be confirmed.

### Pump battery considerations

#### Changing the battery
* After a **low battery** alarm, the battery should be changed as soon as possible to always have enough energy for a reliable Bluetooth communication with the smartphone, even if the phone is within a wider distance of the pump.
* Even after a **low battery** alarm, the battery might be used for a significant amount of time. However, it is recommended to always have a fresh battery with you after a "low battery" alarm rang.
* Before changing the battery, press on the **Loop** symbol on the main screen and select **Suspend loop** for 1 hour.
* Wait for the pump to communicate with the pump and the Bluetooth logo on the pump has faded.

![Bluetooth enabled](../images/combo/combo-tips-compo.png)

* Release the key lock on the pump, put the pump into stop mode, confirm a possibly canceled temporary basal rate, and change the battery quickly.
* You don't need to re-set the pump's clock after the battery change: AAPS automatically updates the pump's date and time.
* Then put the pump back in run mode select **Resume** when pressing on the **Suspended Loop** icon on the main screen.
* AAPS will re-set a necessary temporary basal rate with the arrival of the next blood sugar value.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Battery type and causes of short battery life
* As intensive Bluetooth communication consumes a lot of energy, only use **high-quality batteries** like Energizer Ultimate Lithium, the "power one"s from the "large" Accu-Chek service pack, or if you are going for a rechargeable battery, use Eneloop batteries.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

Ranges for typical life time of the different battery types are as follows:
* **Energizer Ultimate Lithium**: 4 to 7 weeks
* **Power One Alkaline** (Varta) from the service pack: 2 to 4 weeks
* **Eneloop rechargeable** batteries (BK-3MCCE): 1 to 3 weeks

If your battery life is significantly shorter than the ranges given above, please check the following possible causes:
* There are some variants of the screw-on battery cap of the Combo pump, which partially short circuit the batteries and drain them quickly. The caps without this problem can be recognized by the golden metal contacts.
* If the pump clock does not "survive" a short battery change, it is likely that the capacitor is broken which keeps the clock running during a brief power outage. In this case, a replacement of the pump by Roche might help, which is not a problem during the warranty period.
* The smart phone hardware and software (Android operating system and Bluetooth stack) also impact the battery lifetime of the pump, even though the exact factors are not completely known yet. If you have the opportunity, try another smartphone and compare battery lifetimes.

### Extended bolus, multiwave bolus
The OpenAPS algorithm does not support a parallel extended bolus or multiwave bolus. But a similar treatment can be achieved by the following alternatives:
* Use **e-Carbs** when entering carbs or using the Bolus wizard by entering the carbs of the full meal and the duration you expect the carbs to arrive as glucose in your blood. The system will then calculate small carbs equally distributed over the whole duration which will cause th algorithm to provide equivalent insulin dosing while still permanently checking the overall rise/decrease of the blood glucose level. For a multiwave bolus approach, you can also combine a smaller immediate bolus with e-carbs.
* Before eating, set a temporary **Eating Soon** target with glucose 80 for several hours (press the target on the main screen, or **Manage** > **Temp Target**). The duration should be based on the interval you would choose for an extended bolus. This will keep your target lower than usual and therefore increase the amount of insulin delivered.
* Then use the **Bolus wizard** to enter the full carbs of the meal, but do not directly apply the values it suggests. If a multiwave-like bolus is to be delivered, correct the insulin dosage down. Depending on the meal, the algorithm now has to deliver additional SMBs or higher temporary basal rates to counteract the increase in blood sugar. Here, the safety limitation of the basal rate (Max IE / h, Maximum basal IOB) should be very carefully experimented with and, if necessary, temporarily changed.

* Don't use the extended or multiwave bolus directly on the pump. The driver does not support them (see [Before you begin](#combov2-before-you-begin)); if a multiwave bolus is given on the pump anyway, **AAPS** records it from the pump history as a normal bolus plus an extended bolus, so it is counted in IOB. An extended bolus does not work in a closed loop environment (see [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details).

### Alarms at bolus delivery
* After each bolus, the driver reads the pump's bolus history. This is a safety mechanism to correctly calculate insulin on board (IOB), even when a bolus is delivered directly from the pump.
* Before a bolus, if the pump history has a bolus that **AAPS** did not know about (for example, a bolus given directly on the pump), the requested bolus is **not given**, because it was calculated without that insulin. **AAPS** shows **The pump history has a bolus that AAPS did not know about. The requested bolus was not given...** Check the bolus history on the pump and your IOB. If a bolus is still needed, calculate it again. This also applies when the unknown bolus is found on a new connection.
* If the bolus was given but the pump history also had other boluses that **AAPS** did not know about, they are recorded now and **AAPS** asks you to check IOB before the next bolus.
* If the connection to the pump is lost **during** a bolus, **AAPS** does not record 0 U: it shows how much the pump had given by then and warns that the pump may still give the rest. **Do not bolus again.** **AAPS** reads the real amount from the pump history at the next connection.
* If the connection is lost while **AAPS** sends the bolus, it is not known whether the pump got it. Check the bolus history on the pump before the next bolus.
* If **AAPS** cannot confirm that a bolus was delivered, it shows **Bolus delivery failed. It appears no bolus was delivered. To be sure, please check the pump to avoid a double bolus and then bolus again.** Boluses are never retried automatically.

## Where to get help

Development of the Combo driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
