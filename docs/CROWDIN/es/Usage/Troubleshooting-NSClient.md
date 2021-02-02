# Resolución de problemas de NSClient

NSClient depende de una comunicación estable con Nightscout. La conexión inestable conduce a errores de sincronización y a un alto uso de los datos.

Si nadie te está siguiendo en Nightscout puede pausar NSClient para guardar (mucha) vida de la batería o la conexión de configuración sólo en wifi y durante la carga.

* ¿Cómo detectar la conexión inestable?

Vaya a la pestaña NSClient en AAPS y vea el registro. Common behavior is to receive PING every ~30s and almost none reconnection messages. If you see many reconnections there is a problem. Desde AndroidAPS 2.0 cuando tal comportamiento se detecta NSClient se pausa por 15 minutos y el mensaje "NSClient mal funcionamiento" se muestra en información general.

* Reiniciar

Lo que se debe intentar como un primer paso es reiniciar tanto: Nightscout y luego el teléfono para ver si el problema es permanente

* Problemas de teléfono

Android puede poner su teléfono a dormir. Compruebe que tiene la excepción de AndroidAPS en las opciones de alimentación para permitir que se ejecute en segundo plano todo el tiempo. Vuelva a comprobar si hay una señal de red fuerte. Intenta con otro teléfono.

* Nightscout

Si usted está en Azure para muchas personas las ha ayudado el moverse a Heroku. Recientemente se ha informado de que Azure está trabajando para establecer el protocolo HTTP de valores de aplicación en 2.0 y Websockets en ON

* Si aún tienes un error...

Compruebe el tamaño de la base de datos en el mLab. 496MB significa que está lleno y que debe ser compactado. [Siga estas instrucciones de OpenAPS para comprobar el tamaño de la base de datos](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Si la compactación no funciona, debe considerar la posibilidad de donar sus datos AndroidAPS a los Data Commons (para investigación) antes de suprimir cualquier colección de datos. Hay [instrucciones en la documentación de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) para la forma de llevar a cabo esto.