# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Funktionalitäten bei der Nutzung mit AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually.

## Bluetooth-Pairing

- Tap the **menu** (☰) in the top-left corner.

![The menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

- Tap **Configuration** > **Pump** and select **Diaconn G8**.

![Configuration > Pump with the Diaconn G8 plugin](../images/v4/Configuration/configuration_pump_list_3.png)

Once it is selected, the **Diaconn G8** card shows two buttons, **Settings** and **Open plugin**:

![The Diaconn G8 plugin selected in Configuration > Pump](../images/v4/Pumps/diaconn_g8_enabled.png)

**Settings** opens the settings of the Diaconn G8 driver (see [Diaconn G8 insulin pump option setting](#diaconn-g8-insulin-pump-option-setting) below).

**Open plugin** (or **Manage** > **Pump**) opens the Diaconn G8 pump screen. Before a pump is paired it looks like this:

![Diaconn G8 pump screen before pairing](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![grafik](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 pairing starts from the **Pair** button on the pump screen; there is no **Selected pump** setting.
```

- On the pump screen, tap **Pair**. The **Diaconn Pump Pairing** screen opens and **AAPS** scans for nearby pumps.
- Tap your insulin pump's model number once it appears in the list (for example **DIACONN-65010**).

![Diaconn Pump Pairing screen scanning for pumps](../images/DiaconnG8/DiaconnG8_05.png)

- Es gibt zwei Möglichkeiten, um Deine Modellnummer zu überprüfen:

1. Die letzten 5 Ziffern der Seriennummer auf der Rückseite der Pumpe.
2. Drücke den = Button > Information > BLE > letzte 5 Ziffern.

![grafik](../images/DiaconnG8/DiaconnG8_06.jpg)

- Once you select your pump, a window appears asking for a PIN code. Enter the PIN number displayed on your pump to complete the connection.

 ![grafik](../images/DiaconnG8/DiaconnG8_07.jpg)

- When **Pairing successful!** is shown, tap **OK** to go back to the pump screen.

## Überprüfung des Pumpenstatus und Synchronisierung der Protokolle

- Once your pump is connected, open the pump screen (**Manage** > **Pump**). It shows the pump status (battery, reservoir, last connection, last bolus, basal rate and more).
- Tap **Refresh** to connect to the pump, update the status and synchronize the logs.
- Tap **Pump history** to see the history read from the pump.

![grafik](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 the pump status is shown on the pump screen (**Manage** > **Pump**) and synchronized with the **Refresh** button.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Bluetooth-Fehlerbehebung

**Was ist bei einer instabilen Bluetooth-Verbindung mit der Pumpe zu tun?**

### Method 1) Restart AAPS, then check the pump again

- Tap the **menu** (☰) in the top-left corner.
- Tap **Exit** at the bottom of the menu.

![The menu with the Exit entry at the bottom](../images/v4/Configuration/configuration_menu.png)

- Start **AAPS** again and check the connection to the pump.

### Method 2) If the first method doesn't work, disconnect Bluetooth and then reconnect.

- Halte die Bluetooth-Taste an der Oberseite etwa 3 Sekunden lang gedrückt.

![grafik](../images/DiaconnG8/DiaconnG8_11.jpg)

- Klicke auf den Button 'Einstellungen' auf der gekoppelten Diaconn G8 Insulinpumpe.

![grafik](../images/DiaconnG8/DiaconnG8_12.jpg)

- Entkoppeln.

![grafik](../images/DiaconnG8/DiaconnG8_13.jpg)

- In **AAPS**, open the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**.
- Wiederhole den Bluetooth-Pairing-Prozess für die Pumpe (siehe oben).

## Weitere Informationen

(diaconn-g8-insulin-pump-option-setting)=

### Options-Einstellungen für Diaconn G8 Insulinpumpe

- **Configuration** > **Pump** > **Diaconn G8** > **Settings**
- Or, on the pump screen (**Manage** > **Pump**), tap the settings icon (cog wheel) in the top-right corner.

![Diaconn G8 driver settings](../images/v4/Pumps/diaconn_g8_settings.png)

- **Bolus speed** sets how fast the pump delivers a bolus.
- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an "Insulin Change" event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a "Site Change" event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically added as a note when a "Tube Change" event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a "Battery Change" event occurs. You can also record a battery change yourself with **Manage** > **Pump Battery Change**. (Hinweis: Um die Batterie zu wechseln, stoppe bitte alle laufenden Injektionsvorgänge.)
- **Diaconn Cloud Sync** sends the pump logs to the Diaconn Cloud.

![Diaconn G8 Aktionsmenü](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
The screenshot above is from an earlier **AAPS** version. In **AAPS** 4 a battery change is recorded with **Manage** > **Pump Battery Change**; there is no **Actions** tab.
```

### Funktion verzögerter Bolus

- Wenn Du einen verzögerten Bolus verwendest, wird der "Closed Loop"-Modus deaktiviert.
- [Diese Seite](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) erklärt die Details, warum der Extended-Bolus in einem Closed-Loop-Umfeld nicht funktioniert.

## Wo ich Hilfe bekomme

Development of the Diaconn G8 driver is done by the community on a **volunteer** basis. Before requesting help, please:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).
