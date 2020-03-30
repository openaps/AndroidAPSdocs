Para los usuarios de Eversense
**************************************************
The easiest way to use Eversense with AndroidAPS is to install the non-US modified `Eversense app <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (and unistall the original one first).

** Aviso: al desinstalar la aplicación antigua, se perderán los datos históricos locales de más de una semana. **

Para obtener finalmente sus datos en AndroidAPS, debe instalar ` ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>` _ y habilitar "Enviar a AAPS y xDrip" en ESEL y "MM640g" como origen BG en el ` Generador de configuración <../Configuration/Config-Builder.html>` _ en AndroidAPS. Como los datos de BG de Eversense pueden tener valores con ruido a veces, es bueno activar "Smooth Data" en ESEL, que es mejor que permitir "Siempre use promedio corto delta en vez de simple delta" en AAPS.

You can find  all APKs including the one for the US and another instruction for using xDrip with an Eversense `here <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
