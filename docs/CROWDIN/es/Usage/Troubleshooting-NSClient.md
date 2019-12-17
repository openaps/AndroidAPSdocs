# Resolución de problemas de NSClient

NSClient depende de una comunicación estable con Nightscout. Unstable connection leads to synchronization errors and high data usage.

If nobody is following you on Nightscout you can pause NSClient to save (a lot) battery life or setup connection only on wifi and during charging.

* ¿Cómo detectar la conexión inestable?

Vaya a la pestaña NSClient en AAPS y vea el registro. Comportamiento común es recibir PING cada ~ 30s y casi ninguno de los mensajes de reconexiones. Si ve muchas reconexiones, hay un problema. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Reiniciar

What you should try as a first step is restart both: Nightscout and then phone to see if the issue is permanent

* Problemas de teléfono

Android puede poner su teléfono a dormir. Check you have exception for AndroidAPS in power options to allow run it on background all the time. Vuelva a comprobar si hay una señal de red fuerte. Intenta con otro teléfono.

* Nightscout

Si usted está en Azure para muchas personas las ha ayudado el moverse a Heroku. Recently was reported Azure workaround to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* Si aún tienes un error...

Compruebe el tamaño de la base de datos en el mLab. 496MB significa que está lleno y que debe ser compactado. [Follow these OpenAPS instructions for checking the size of your database](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). Si la compactación no funciona, debe considerar la posibilidad de donar sus datos AndroidAPS a los Data Commons (para investigación) antes de suprimir cualquier colección de datos. Hay [instrucciones en la documentación de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) para la forma de llevar a cabo esto.