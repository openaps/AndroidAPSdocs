Para los usuarios de Eversense
**************************************************
La manera más fácil de utilizar Eversense con AndroidAPS es instalar la app modificada `aplicación Eversense <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (primero desinstalar el original).

** Aviso: al desinstalar la aplicación antigua, se perderán los datos históricos locales de más de una semana. **

Para obtener finalmente sus datos en AndroidAPS, debe instalar ` ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>` _ y habilitar "Enviar a AAPS y xDrip" en ESEL y "MM640g" como origen BG en el ` Generador de configuración <../Configuration/Config-Builder.html>` _ en AndroidAPS. Como los datos de BG de Eversense pueden tener valores con ruido a veces, es bueno activar "Smooth Data" en ESEL, que es mejor que permitir "Siempre use promedio corto delta en vez de simple delta" en AAPS.

Puede encontrar todos los APKs incluyendo el de Estados Unidos y otra instrucción para usar xDrip con un Eversense `aquí <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
