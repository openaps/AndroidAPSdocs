# DanaR

*Aquestes instruccions serveixen per configurar l'aplicació i la bomba si teniu una DanaR. Si en lloc d'això teniu la DanaRS, que va sortir el 2017, vegeu [DanaRS, Dana-i i Dana-i2](./DanaRS-Insulin-Pump.md).*

## Capacitats de la bomba amb AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Timezone and DST changes need no special action, as the pump does not use its own history.

## Configuració

* A la bomba, aneu a Main Menu > Setting > User Option
* Activeu "8. Extended Bolus"

![Bomba DanaR](../images/danar1.png)

* Aneu a Main Menu > Setting > Discovery
* In phone settings go to Bluetooth, scan for nearby devices, select your DanaR serial number and input your password (Pairing password is 0000). Si la DanaR no apareix a la cerca, reinicieu el telèfon, traieu la pila de la DanaR, torneu-la a posar i repetiu aquests dos passos.

* In **AAPS**, open the **menu** (☰) in the top-left corner, go to **Configuration** > **Pump** and select the type of DanaR you have (**DanaR**, **DanaR Korean** or **DanaRv2**).
  
  ![Configuration > Pump with the DanaR plugins](../images/v4/Configuration/configuration_pump_list_1.png)

* Open the pump screen: tap **Open plugin** on the DanaR card (or go to **Manage** > **Pump**).

* Tap **Pairing**. On the pairing screen: 
  * Enter your pump password under **Pump password** (default password is 1234).
  * Under **Select paired device**, tap your DanaR serial number. If the list is empty, tap **Open Bluetooth settings** and pair the pump with your phone first (see the step above). When you come back to **AAPS**, the pump appears in the list. If it does not, tap the refresh icon.
  * Tap **Pairing**. **AAPS** connects to the pump and checks the password.
* To change the driver settings, tap **Settings** on the DanaR card in **Configuration** > **Pump**: 
  * **Bolus speed** (DanaR and DanaRv2): change the default bolus speed (12 s/U, 30 s/U or 60 s/U).
  * **Use extended boluses for >200%** (DanaR and DanaR Korean): enable this if you want **AAPS** to allow a basal rate above 200%. Note this means you cannot loop with high TBRs while using extended boluses for food.
* Configureu el pas de la basal a la bomba a 0,01 U/h
* Set bolus step on pump to 0.1 U. **AAPS** reads the bolus step from the pump and uses it for every bolus.
* Activar els bolus estesos a la bomba

## Canvi de fus horari amb la bomba Dana R

Per a informació sobre viatjar entre fusos horaris, vegeu la secció [Canvi de fus horari amb bombes](#timezone-traveling-danarv2-danars).

## On trobar ajuda

Development of the DanaR driver is done by the community on a **volunteer** basis. Abans de demanar ajuda:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

When asking for help, include your phone make and model, Android version, **AAPS** version, and a plain-English description of the problem (what changed, when it last worked).