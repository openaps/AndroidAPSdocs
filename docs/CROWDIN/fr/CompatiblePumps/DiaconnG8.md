# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Pump capabilities with AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually.

## Appairage Bluetooth de la pompe à insuline

- Tap the **menu** (☰) in the top-left corner.

![The menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

- Tap **Configuration** > **Pump** and select **Diaconn G8**.

![Configuration > Pump with the Diaconn G8 plugin](../images/v4/Configuration/configuration_pump_list_3.png)

Once it is selected, the **Diaconn G8** card shows two buttons, **Settings** and **Open plugin**:

![The Diaconn G8 plugin selected in Configuration > Pump](../images/v4/Pumps/diaconn_g8_enabled.png)

**Settings** opens the settings of the Diaconn G8 driver (see [Diaconn G8 insulin pump option setting](#diaconn-g8-insulin-pump-option-setting) below).

**Open plugin** (or **Manage** > **Pump**) opens the Diaconn G8 pump screen. Before a pump is paired it looks like this:

![Diaconn G8 pump screen before pairing](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 pairing starts from the **Pair** button on the pump screen; there is no **Selected pump** setting.
```

- On the pump screen, tap **Pair**. The **Diaconn Pump Pairing** screen opens and **AAPS** scans for nearby pumps.
- Tap your insulin pump's model number once it appears in the list (for example **DIACONN-65010**).

![Diaconn Pump Pairing screen scanning for pumps](../images/DiaconnG8/DiaconnG8_05.png)

- Il y a deux options pour vérifier votre numéro de modèle :

1. Les 5 derniers chiffres du numéro SN au dos de la pompe.
2. Cliquez sur le bouton O > Information > BLE > Derniers 5 chiffres.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Once you select your pump, a window appears asking for a PIN code. Enter the PIN number displayed on your pump to complete the connection.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

- When **Pairing successful!** is shown, tap **OK** to go back to the pump screen.

## Contrôle de l'état de la pompe et synchronisation des journaux

- Once your pump is connected, open the pump screen (**Manage** > **Pump**). It shows the pump status (battery, reservoir, last connection, last bolus, basal rate and more).
- Tap **Refresh** to connect to the pump, update the status and synchronize the logs.
- Tap **Pump history** to see the history read from the pump.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the pump status is shown on the pump screen (**Manage** > **Pump**) and synchronized with the **Refresh** button.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Dépannage Bluetooth

**Que faire dans le cas d'une connexion Bluetooth instable avec la pompe.**

### Method 1) Restart AAPS, then check the pump again

- Tap the **menu** (☰) in the top-left corner.
- Tap **Exit** at the bottom of the menu.

![The menu with the Exit entry at the bottom](../images/v4/Configuration/configuration_menu.png)

- Start **AAPS** again and check the connection to the pump.

### Method 2) If the first method doesn't work, disconnect Bluetooth and then reconnect.

- Appuyez et maintenez le bouton Bluetooth en haut pendant environ 3 secondes.

![image](../images/DiaconnG8/DiaconnG8_11.jpg)

- Cliquez sur le bouton Réglage de la pompe Diaconn G8 appairée.

![image](../images/DiaconnG8/DiaconnG8_12.jpg)

- Désappairage.

![image](../images/DiaconnG8/DiaconnG8_13.jpg)

- In **AAPS**, open the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**.
- Répétez le processus d'appairage Bluetooth pour la pompe (voir ci-dessus).

## Informations complémentaires

(diaconn-g8-insulin-pump-option-setting)=

### Réglage des options de pompe Diaconn G8

- **Configuration** > **Pump** > **Diaconn G8** > **Settings**
- Or, on the pump screen (**Manage** > **Pump**), tap the settings icon (cog wheel) in the top-right corner.

![Diaconn G8 driver settings](../images/v4/Pumps/diaconn_g8_settings.png)

- **Bolus speed** sets how fast the pump delivers a bolus.
- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an "Insulin Change" event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a "Site Change" event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically added as a note when a "Tube Change" event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a "Battery Change" event occurs. You can also record a battery change yourself with **Manage** > **Pump Battery Change**. (Note: Pour changer la pile, veuillez arrêter toutes les fonctions d'injection en cours avant de continuer.)
- **Diaconn Cloud Sync** sends the pump logs to the Diaconn Cloud.

![Menu d'actions du Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 a battery change is recorded with **Manage** > **Pump Battery Change**; there is no **Actions** tab.
```

### Fonction Bolus Étendu

- Si vous utilisez un bolus étendu, cela désactivera la boucle fermée.
- See [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.

## Where to get help

Development of the Diaconn G8 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
