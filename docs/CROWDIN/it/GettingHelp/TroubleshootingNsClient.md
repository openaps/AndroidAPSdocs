(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Troubleshooting NSClient

NSClient ha bisogno di una comunicazione stabile con Nightscout. Una connessione instabile causa errori di sincronizzazione e un alto consumo di dati.

If nobody is following you on Nightscout you can choose to pause NSClient to save battery life or you can choose to setup NSClient so that it only connects when on Wi-Fi and/or during charging.

* Come riconoscere una connessione instabile?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Se vedi molte riconnessioni, c'è un problema.

* Restart

Come primo passo, riavvia Nightscout e poi il telefono, per vedere se il problema è permanente.

If your Nightscout is hosted on Heroku, you can restart Nightscout by: Logging into Heroku, click on your nightscout app name, click on the 'More' menu, then 'Restart all dynos'.

For other hosts, please follow your hosts guidance documentation.

* Problemi del telefono

Android può mettere il telefono in modalità di sospensione. Check if you have an exception for AAPS in your phones power options to allow it to run in the background all the time.

Check the NSClient again when in strong network signal location.

Try another phone.

* Nightscout

If your site is hosted on Azure, many people have found that connection issues have improved since moving to Heroku.

A workaround to connection issues in Azure is to set in Application settings HTTP protocol to 2.0 and Websockets to ON

    {admonition} Remote control needs websockets
    :class: important
    Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. If the websocket connection keeps dropping, remote control does not work. Data synchronization still works, but more slowly. Your Nightscout host must support websockets.

* No BG reading from Nightscout

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Se ricevi ancora un errore...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Segui queste istruzioni di Nightscout per controllare la dimensione del database e cancellare i dati](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Prima di cancellare i dati dal database, se non l'hai già fatto, valuta di donare i tuoi dati AAPS al progetto Open Humans (per la ricerca). Le istruzioni sono nella [pagina di configurazione di OpenHumans](../SupportingAaps/OpenHumans.md).