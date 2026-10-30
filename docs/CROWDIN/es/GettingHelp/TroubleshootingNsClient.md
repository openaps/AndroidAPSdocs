(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Solución de problemas de NSClient

NSClient depende de una comunicación estable con Nightscout. Una conexión inestable conduce a errores de sincronización y un alto consumo de datos.

Si nadie te está siguiendo en Nightscout, puedes optar por pausar NSClient para ahorrar batería o configurarlo para que solo se conecte cuando estés en Wi-Fi y/o durante la carga.

* ¿Cómo detectar una conexión inestable?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Si ves muchas reconexiones, entonces hay un problema.

* Reiniciar

Lo que debes intentar como primer paso es reiniciar tanto Nightscout como el teléfono para ver si el problema es permanente.

Si tu Nightscout está alojado en Heroku, puedes reiniciarlo de la siguiente manera: Inicia sesión en Heroku, haz clic en el nombre de tu aplicación de Nightscout, haz clic en el menú 'More' y después en 'Restart all dynos'.

Para otros hosts, por favor sigue la documentación de tu proveedor de alojamiento.

* Problemas con el teléfono

Android puede poner tu teléfono en modo de suspensión. Verifica si tienes una excepción para AAPS en las opciones de energía de tu teléfono, para permitir que se ejecute en segundo plano todo el tiempo.

Vuelve a verificar NSClient cuando estés en una ubicación con una señal de red fuerte.

Intenta con otro teléfono.

* Nightscout

Si tu sitio está alojado en Azure, muchas personas han encontrado que los problemas de conexión han mejorado al cambiar a Heroku.

Una solución temporal para los problemas de conexión en Azure es configurar en la configuración de la aplicación el protocolo HTTP en 2.0 y habilitar Websockets.

* No hay lectura de glucosa en sangre de Nightscout

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Si aún recibes un error...

Verifica el tamaño de tu base de datos en MongoDB (o a través del complemento de tamaño de la base de datos en Nightscout). Si estás utilizando el alojamiento gratuito en MongoDB, 496MB significa que está lleno y necesita ser limpiado. [Sigue estas instrucciones de Nightscout para verificar el tamaño de tu base de datos y eliminar datos](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Antes de borrar datos de tu base de datos y si aún no lo has configurado, deberías considerar donar tus datos de AAPS al proyecto Open Humans (para fines de investigación). The instructions are on the [OpenHumans configuration page](../SupportingAaps/OpenHumans.md).