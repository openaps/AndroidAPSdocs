(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Resolució de problemes de NSClient

NSClient necessita una comunicació estable amb Nightscout. Una connexió inestable provoca errors de sincronització i un gran consum de dades.

Si ningú no us segueix a Nightscout, podeu posar en pausa NSClient per estalviar bateria, o podeu configurar NSClient perquè només es connecti amb Wi-Fi i/o mentre es carrega.

* Com detectar una connexió inestable?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Si veieu moltes reconnexions, hi ha un problema.

* Reiniciar

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

Si el vostre Nightscout està allotjat a Heroku, podeu reiniciar Nightscout així: inicieu la sessió a Heroku, feu clic al nom de la vostra aplicació de Nightscout, feu clic al menú 'More' i després a 'Restart all dynos'.

Per a altres proveïdors, seguiu la documentació del vostre proveïdor.

* Problemes del telèfon

Android pot posar el telèfon en mode de repòs. Comproveu si teniu una excepció per a AAPS a les opcions d'energia del telèfon, perquè pugui funcionar sempre en segon pla.

Torneu a comprovar NSClient en un lloc amb bon senyal de xarxa.

Proveu amb un altre telèfon.

* Nightscout

Si el vostre lloc està allotjat a Azure, molta gent ha vist que els problemes de connexió han millorat després de passar a Heroku.

Una solució per als problemes de connexió a Azure és posar, a la configuració de l'aplicació (Application settings), el protocol HTTP a 2.0 i Websockets a ON

    {admonition} Remote control needs websockets
    :class: important
    Websockets are **mandatory** for remote control from **AAPSClient**, on both phones. If the websocket connection keeps dropping, remote control does not work. Data synchronization still works, but more slowly. Your Nightscout host must support websockets.

* No hi ha valors de glucèmia de Nightscout

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Si encara teniu un error...

Comproveu la mida de la vostra base de dades a MongoDB (o amb el plugin de mida de la base de dades a Nightscout). Si feu servir el nivell gratuït de MongoDB, 496 MB vol dir que està plena i cal netejar-la. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Abans d'esborrar dades de la base de dades, i si encara no ho heu configurat, penseu a donar les vostres dades d'AAPS al projecte Open Humans (per a la recerca). Les instruccions són a la [pàgina de configuració d'Open Humans](../SupportingAaps/OpenHumans.md).