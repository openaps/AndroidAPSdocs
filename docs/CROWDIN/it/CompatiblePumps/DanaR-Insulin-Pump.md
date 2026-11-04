# DanaR

*These instructions are for configuring the app and your pump if you have a DanaR. Visit [DanaRS Insulin Pump](./DanaRS-Insulin-Pump.md) if you have the DanaRS launched in 2017 instead.*

## Funzioni del micro con AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* Timezone and DST changes need no special action, as the pump does not use its own history.

## Configurazione

* Sul micro vai su Main Menu > Setting > User Option
* Attiva "8. Extended Bolus"

![Micro DanaR](../images/danar1.png)

* Go to Main Menu > Setting > Discovery
* Nelle impostazioni del telefono vai su Bluetooth, cerca i dispositivi vicini, seleziona il numero di serie del tuo DanaR e inserisci la password (la password di associazione è 0000). If DanaR is not showing in scan then restart phone and take DanaR battery out, replace and start these two steps again.

* In **AAPS** apri il **menu** (☰) in alto a sinistra, vai su **Configurazione** > **Micro** e seleziona il tipo di DanaR che hai (**DanaR**, **DanaR Korean** o **DanaRv2**).
  
  ![Configurazione > Micro con i plugin DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Apri la schermata del micro: tocca **Apri plugin** sulla scheda DanaR (oppure vai su **Gestisci** > **Micro**).

* Tap **Pairing**. On the pairing screen: 
  * Inserisci la password del micro in **Password micro** (la password predefinita è 1234).
  * In **Seleziona dispositivo associato** tocca il numero di serie del tuo DanaR. If the list is empty, tap **Open Bluetooth settings** and pair the pump with your phone first (see the step above). When you come back to **AAPS**, the pump appears in the list. Se non compare, tocca l'icona di aggiornamento.
  * Tap **Pairing**. **AAPS** si connette al micro e controlla la password.
* Per cambiare le impostazioni del driver, tocca **Impostazioni** sulla scheda DanaR in **Configurazione** > **Micro**: 
  * **Velocità bolo** (DanaR e DanaRv2): cambia la velocità predefinita del bolo (12 s/U, 30 s/U o 60 s/U).
  * **Use extended boluses for >200%** (DanaR and DanaR Korean): enable this if you want **AAPS** to allow a basal rate above 200%. Note this means you cannot loop with high TBRs while using extended boluses for food.
* Set basal step on pump to 0.01 U/h
* Set bolus step on pump to 0.1 U. **AAPS** reads the bolus step from the pump and uses it for every bolus.
* Enable extended boluses on pump

## Timezone traveling with Dana R pump

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).

## Dove trovare aiuto

Development of the DanaR driver is done by the community on a **volunteer** basis. Prima di chiedere aiuto, per favore:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

Quando chiedi aiuto, indica marca e modello del telefono, versione di Android, versione di **AAPS** e una descrizione semplice del problema (cosa è cambiato, quando ha funzionato l'ultima volta).