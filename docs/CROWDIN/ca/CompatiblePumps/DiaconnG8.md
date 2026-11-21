# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Capacitats de la bomba amb AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually.

## Emparellament Bluetooth de la bomba d'insulina

- Tap the **menu** (☰) in the top-left corner.

![The menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

- Tap **Configuration** > **Pump** and select **Diaconn G8**.

![Configuration > Pump with the Diaconn G8 plugin](../images/v4/Configuration/configuration_pump_list_3.png)

Once it is selected, the **Diaconn G8** card shows two buttons, **Settings** and **Open plugin**:

![The Diaconn G8 plugin selected in Configuration > Pump](../images/v4/Pumps/diaconn_g8_enabled.png)

**Settings** opens the settings of the Diaconn G8 driver (see [Diaconn G8 insulin pump option setting](#diaconn-g8-insulin-pump-option-setting) below).

**Open plugin** (or **Manage** > **Pump**) opens the Diaconn G8 pump screen. Abans d'emparellar una bomba, es veu així:

![Diaconn G8 pump screen before pairing](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![imatge](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 pairing starts from the **Pair** button on the pump screen; there is no **Selected pump** setting.
```

- On the pump screen, tap **Pair**. The **Diaconn Pump Pairing** screen opens and **AAPS** scans for nearby pumps.
- Tap your insulin pump's model number once it appears in the list (for example **DIACONN-65010**).

![Diaconn Pump Pairing screen scanning for pumps](../images/DiaconnG8/DiaconnG8_05.png)

- Hi ha dues maneres de comprovar el número de model:

1. Els 5 últims dígits del número de sèrie (SN) a la part de darrere de la bomba.
2. Premeu el botó O > Information > BLE > els 5 últims dígits.

![imatge](../images/DiaconnG8/DiaconnG8_06.jpg)

- Once you select your pump, a window appears asking for a PIN code. Enter the PIN number displayed on your pump to complete the connection.

 ![imatge](../images/DiaconnG8/DiaconnG8_07.jpg)

- When **Pairing successful!** is shown, tap **OK** to go back to the pump screen.

## Comprovació de l'estat de la bomba i sincronització del registre

- Once your pump is connected, open the pump screen (**Manage** > **Pump**). It shows the pump status (battery, reservoir, last connection, last bolus, basal rate and more).
- Tap **Refresh** to connect to the pump, update the status and synchronize the logs.
- Tap **Pump history** to see the history read from the pump.

![imatge](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the pump status is shown on the pump screen (**Manage** > **Pump**) and synchronized with the **Refresh** button.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Resolució de problemes de Bluetooth

**Què fer si la connexió Bluetooth amb la bomba és inestable.**

### Method 1) Restart AAPS, then check the pump again

- Tap the **menu** (☰) in the top-left corner.
- Tap **Exit** at the bottom of the menu.

![The menu with the Exit entry at the bottom](../images/v4/Configuration/configuration_menu.png)

- Start **AAPS** again and check the connection to the pump.

### Method 2) If the first method doesn't work, disconnect Bluetooth and then reconnect.

- Manteniu premut el botó Bluetooth de la part de dalt durant uns 3 segons.

![imatge](../images/DiaconnG8/DiaconnG8_11.jpg)

- Premeu el botó Setting de la bomba d'insulina Diaconn G8 emparellada.

![imatge](../images/DiaconnG8/DiaconnG8_12.jpg)

- Desemparelleu-la (Unpair).

![imatge](../images/DiaconnG8/DiaconnG8_13.jpg)

- In **AAPS**, open the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**.
- Repetiu el procés d'emparellament Bluetooth de la bomba (vegeu més amunt).

## Més informació

(diaconn-g8-insulin-pump-option-setting)=

### Configuració de les opcions de la bomba d'insulina Diaconn G8

- **Configuration** > **Pump** > **Diaconn G8** > **Settings**
- Or, on the pump screen (**Manage** > **Pump**), tap the settings icon (cog wheel) in the top-right corner.

![Diaconn G8 driver settings](../images/v4/Pumps/diaconn_g8_settings.png)

- **Bolus speed** sets how fast the pump delivers a bolus.
- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an "Insulin Change" event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a "Site Change" event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically added as a note when a "Tube Change" event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a "Battery Change" event occurs. You can also record a battery change yourself with **Manage** > **Pump Battery Change**. (Nota: per canviar la pila, atureu primer totes les funcions d'injecció en curs.)
- **Diaconn Cloud Sync** sends the pump logs to the Diaconn Cloud.

![Menú d'accions de la Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 a battery change is recorded with **Manage** > **Pump Battery Change**; there is no **Actions** tab.
```

### Funció de bolus estès

- Si feu servir el bolus estès, es desactivarà el llaç tancat.
- Vegeu [aquesta pàgina](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) per saber per què el bolus estès no funciona en un entorn de llaç tancat.

## On trobar ajuda

Development of the Diaconn G8 driver is done by the community on a **volunteer** basis. Abans de demanar ajuda:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
