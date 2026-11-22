(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Resolució de problemes de NSClient

NSClient necessita una comunicació estable amb Nightscout. Una connexió inestable provoca errors de sincronització i un gran consum de dades.

Si ningú no us segueix a Nightscout, podeu posar en pausa NSClient per estalviar bateria, o podeu configurar NSClient perquè només es connecti amb Wi-Fi i/o mentre es carrega.

* Com detectar una connexió inestable?

Obriu la pantalla de NSClient (**Configurador** > **Comunicació** > **NSClientV3** > **Obrir plugin**) i mireu l'**Estat** i el registre. Amb els websockets activats, l'estat hauria de quedar «connectat» (connected), gairebé sense missatges de reconnexió al registre. Si veieu moltes reconnexions, hi ha un problema.

* Reiniciar

Com a primer pas, reinicieu Nightscout i després el telèfon per veure si el problema és permanent.

Si el vostre Nightscout està allotjat a Heroku, podeu reiniciar Nightscout així: inicieu la sessió a Heroku, feu clic al nom de la vostra aplicació de Nightscout, feu clic al menú 'More' i després a 'Restart all dynos'.

Per a altres proveïdors, seguiu la documentació del vostre proveïdor.

* Problemes del telèfon

Android pot posar el telèfon en mode de repòs. Comproveu si teniu una excepció per a AAPS a les opcions d'energia del telèfon, perquè pugui funcionar sempre en segon pla.

Torneu a comprovar NSClient en un lloc amb bon senyal de xarxa.

Proveu amb un altre telèfon.

* Nightscout

Si el vostre lloc està allotjat a Azure, molta gent ha vist que els problemes de connexió han millorat després de passar a Heroku.

Una solució per als problemes de connexió a Azure és posar, a la configuració de l'aplicació (Application settings), el protocol HTTP a 2.0 i Websockets a ON

    {admonition} El control remot necessita websockets
    :class: important
    Els websockets són **obligatoris** per al control remot des d'**AAPSClient**, als dos telèfons. Si la connexió websocket es talla sovint, el control remot no funciona. La sincronització de dades continua funcionant, però més lentament. El vostre proveïdor de Nightscout ha de permetre websockets.

* No hi ha valors de glucèmia de Nightscout

Si **AAPS** es connecta bé a Nightscout però la glucèmia es mostra com a N/A: a la [configuració de NSClientV3](#Preferences-nsclient), obriu **Sincronització** i activeu **Rebre dades de CGM de NS**. Aquesta opció està amagada mentre el control del client està activat ([mode reforçat](#client-master-control-hardened-mode)); en aquest cas, comproveu que **Glucèmia NSClient** està seleccionat a **Configurador** → **Origen glucèmia**.

* Si encara teniu un error...

Comproveu la mida de la vostra base de dades a MongoDB (o amb el plugin de mida de la base de dades a Nightscout). Si feu servir el nivell gratuït de MongoDB, 496 MB vol dir que està plena i cal netejar-la. [Seguiu aquestes instruccions de Nightscout per comprovar la mida de la base de dades i esborrar dades](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Abans d'esborrar dades de la base de dades, i si encara no ho heu configurat, penseu a donar les vostres dades d'AAPS al projecte Open Humans (per a la recerca). Les instruccions són a la [pàgina de configuració d'Open Humans](../SupportingAaps/OpenHumans.md).