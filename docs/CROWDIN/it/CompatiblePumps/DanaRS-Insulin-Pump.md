# DanaRS, Dana-i e Dana-i2

*These instructions are for configuring the app and your pump if you have a DanaRS from 2017 onwards, a Dana-i or a Dana-i2. Visit [DanaR Insulin Pump](./DanaR-Insulin-Pump.md) if you have the original DanaR instead.*

**Il Dana-i2 si può usare da AAPS versione 4.0 in poi.** Usa lo stesso driver **Dana-i/RS** del Dana-i.

* In DanaRS/i/i2 pump "BASAL A" is used by the app. Existing data gets overwritten.

    {contents} Indice
    :depth: 1
    :local: true

## Funzioni del micro con AAPS

* Communicates with **AAPS** over your phone's native Bluetooth, without an additional communication device.
* DST and timezone changes must be handled manually (see [Timezone traveling](#timezone-traveling-danarv2-danars)).

(DanaRS-Insulin-Pump-pairing-pump)=

## Pairing pump

* Apri il **menu** (☰) in alto a sinistra nella schermata principale di **AAPS** e seleziona **Configurazione**.
* Tocca **Micro** e seleziona **Dana-i/RS**.
    
    ![Configurazione > Micro con il plugin Dana-i/RS](../images/v4/Configuration/configuration_pump_list_2.png)
    
    Once it is selected, the **Dana-i/RS** card shows two buttons, **Settings** and **Open plugin**:
    
    ![Il plugin Dana-i/RS selezionato in Configurazione > Micro](../images/v4/Pumps/dana_i_rs_enabled.png)
    
    **Impostazioni** apre le impostazioni del driver Dana-i/RS:
    
    ![Impostazioni del driver Dana-i/RS](../images/v4/Pumps/dana_i_rs_settings.png)
    
    **Apri plugin** (oppure **Gestisci** > **Micro**) apre la schermata del micro Dana-i/RS. Before a pump is paired it looks like this:
    
    ![Dana-i/RS pump screen before pairing](../images/v4/Pumps/dana_i_rs_pump_screen.png)

* On the pump screen, tap **Pairing**. **AAPS** scans for nearby pumps.

* Tap the entry for your pump in the list.
    
    ![The Pairing screen listing a Dana pump found by the scan](../images/DanaRS_i_Pairing.png)

* **You have to confirm the pairing on the pump!** This works the same way as other Bluetooth pairings you may know (for example, smartphone and car audio).
    
    ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Follow the pairing process based on the type and firmware of your pump:
    
    * Per il DanaRS v1, **AAPS** chiede la **Password micro (solo v1)**. Inserisci la password del micro (vedi [Password predefinita](#DanaRS-Insulin-Pump-default-password)).
    * Per il DanaRS v3, **AAPS** ti chiede di premere OK sul micro e di digitare le 2 sequenze di numeri e lettere mostrate sul micro. Tieni acceso il display del micro premendo il pulsante meno finché non hai finito. Poi tocca **Fatto**.
    * For Dana-i and Dana-i2, the standard Android pairing dialog appears. Inserisci il numero di 6 cifre mostrato sul micro.

* When **Pairing successful!** is shown, tap **Done**.
    
    ![Pairing successful!](../images/v4/Pumps/dana_i_rs_pairing_success.png)
    
    You are back on the pump screen, which now shows your pump's status.
    
    ![Dana-i/RS pump screen after pairing](../images/v4/Pumps/dana_i_rs_pump_screen_paired.png)

* In **Settings**, select **Bolus speed** to change the default bolus speed (12 s/U, 30 s/U or 60 s/U).

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide).
* Set bolus step on pump to 0.05 U using Doctors menu (see pump user guide). **AAPS** reads the basal and bolus steps from the pump and uses them for every bolus, so a bolus always matches the step set on the pump. The pump screen shows them in the **Basal/Bolus step** row.
* Enable extended boluses on pump

### Opzioni mostrate solo per alcuni modelli

* **Auto lock**: on a Dana-i2, the **User options** screen (on the pump screen, **Manage** > **Pump**) has an **Auto lock** switch for the pump's auto lock setting. Dopo averlo cambiato, premi **Salva opzioni nel micro**.
* **Easy mode**: on pump models that have an easy menu mode, the pump screen shows an **Easy mode** row with **On** or **Off**.
* If a Dana-i2 refuses a bolus, **AAPS** shows the reason, for example *Pump is not primed*, *Not enough insulin in the reservoir* or *Easy sleep mode is on in the pump*.

(DanaRS-Insulin-Pump-default-password)=

### Password predefinita

* Per i DanaRS con firmware v1 e v2 la password predefinita è 1234.
* For DanaRS with firmware v3 or Dana-i the default password is derived from the manufacturing date and calculates as MMDD where MM is the month and DD is the day, the pump was produced (i.e. '0124' representing month 01 and day 24).
    
    * Dal MAIN MENU seleziona REVIEW, poi apri SHIPPING INFORMATION dal sottomenu
    * Il numero 3 è la data di produzione. 
    * For v3/i this password is used only for locking menu on pump. It's not used for communication and it's not necessary to enter it in AAPS.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Cambiare la password sul micro

* Premi il pulsante OK sul micro
* Nel menu principale seleziona "OPTION" (spostati a destra premendo più volte il pulsante freccia)
    
    ![DanaRS menu principale](../images/DanaRSPW_01_MainMenu.png)

* Nel menu delle opzioni seleziona "USER OPTION"
    
    ![DanaRS menu opzioni](../images/DanaRSPW_02_OptionMenu.png)

* Usa il pulsante freccia per scorrere fino a "11. password"
    
    ![DanaRS 11. Password](../images/DanaRSPW_03_11PW.png)

* Premi OK per inserire la vecchia password.

* Inserisci la **vecchia password** (per la password predefinita vedi [sopra](#DanaRS-Insulin-Pump-default-password)) e premi OK
    
    ![DanaRS inserire la vecchia password](../images/DanaRSPW_04_11PWenter.png)

* Se qui inserisci una password sbagliata, non comparirà nessun messaggio di errore!

* Imposta la **nuova password** (cambia i numeri con i pulsanti + e - / spostati a destra con il pulsante freccia).
    
    ![DanaRS nuova password](../images/DanaRSPW_05_PWnew.png)

* Conferma con il pulsante OK.

* Premi OK per salvare l'impostazione.
    
    ![DanaRS salvare la nuova password](../images/DanaRSPW_06_PWnewSave.png)

* Scendi fino a "14. EXIT" e premi OK per uscire.
    
    ![DanaRS uscire](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Errori specifici del Dana RS

### Errore durante l'erogazione di insulina

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Allarme erogazione insulina](../images/DanaRS_Error_bolus.png)

* Nella maggior parte dei casi è solo un problema di comunicazione e viene erogata la quantità corretta di insulina.
* Check in the pump history that the correct bolus was given. Puoi farlo sul micro stesso, oppure in **AAPS** nella schermata del micro (**Gestisci** > **Micro**) > **Storico micro** > **Boli**.
* Delete the error entry in [treatments](#screens-bolus-carbs) if you wish.
* La quantità reale viene letta e registrata alla connessione successiva. Per forzarlo, tocca **Aggiorna** nella schermata del micro, oppure aspetta la connessione successiva.

## Nota speciale per il cambio di telefono

When switching to a new phone the following steps are necessary:

* [Esporta impostazioni](../Maintenance/ExportImportSettings.md) sul vecchio telefono
* Trasferire le impostazioni dal vecchio al nuovo telefono

### DanaRS v1

* **Manually pair** Dana RS with the new phone
* If you tick **Also replace pump settings** when importing, the pump connection settings are imported too and AAPS on your new phone will already "know" the pump and therefore not start a Bluetooth scan. Therefore new phone and pump must be paired manually.
* Installa AAPS sul nuovo telefono.
* [Importa impostazioni](../Maintenance/ExportImportSettings.md) sul nuovo telefono

### DanaRS v3, Dana-i, Dana-i2

* Start pairing procedure as described [above](#DanaRS-Insulin-Pump-pairing-pump).
* Sometimes you may need to clear the pairing information in **AAPS** first. On the pump screen (**Manage** > **Pump**), tap **Unpair** and confirm **Reset pairing information?**. Then tap **Pairing** again.

## Timezone traveling with DanaRS, Dana-i and Dana-i2 pumps

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-danarv2-danars).

## Dove trovare aiuto

Development of the DanaRS/Dana-i/Dana-i2 driver is done by the community on a **volunteer** basis. Prima di chiedere aiuto, per favore:

1. **Read** the relevant section of this documentation to confirm how the feature is meant to work.
2. **Ask** on the *#AAPS* channel on [Discord](https://discord.gg/4fQUWHZ4Mw), or in one of the other [community channels](../GettingHelp/WhereCanIGetHelp.md).
3. **Report a bug** by searching the [existing issues](https://github.com/nightscout/AndroidAPS/issues); if yours is not listed, open a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../GettingHelp/AccessingLogFiles.md).

Quando chiedi aiuto, indica marca e modello del telefono, versione di Android, versione di **AAPS** e una descrizione semplice del problema (cosa è cambiato, quando ha funzionato l'ultima volta).