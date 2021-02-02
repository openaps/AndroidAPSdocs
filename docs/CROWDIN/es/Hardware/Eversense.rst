Para los usuarios de Eversense
**************************************************
La manera más fácil de utilizar Eversense con AndroidAPS es instalar la app modificada `aplicación Eversense <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (primero desinstalar el original).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_ and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the `Configuration Builder <../Configuration/Config-Builder.html>`_ in AndroidAPS. Como los datos de BG de Eversense pueden tener valores con ruido a veces, es bueno activar "Smooth Data" en ESEL, que es mejor que permitir "Siempre use promedio corto delta en vez de simple delta" en AAPS.

Puede encontrar todos los APKs incluyendo el de Estados Unidos y otra instrucción para usar xDrip con un Eversense `aquí <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
