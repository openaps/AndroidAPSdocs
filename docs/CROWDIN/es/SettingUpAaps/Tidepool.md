# Tidepool

Tidepool es una herramienta de terceros que recoge datos de glucosa, insulina y carbohidratos (y las notas que añades a tus tratamientos). Se puede usar para analizar estos datos y compartirlos con tu equipo médico. Desde la versión 3.2 de AAPS, se puede usar como alternativa a Nightscout para cumplir parte del Objetivo 1. También se puede usar junto con Nightscout como plataforma alternativa de informes, que se integra bien en el entorno clínico. Puede ser una buena opción para niños que usan AAPS y quieren las funciones de seguimiento remoto y control remoto de Nightscout, pero también una plataforma de informes con la que su equipo médico se sienta más cómodo.

Es importante entender que Tidepool sirve solo para informes. NO es una app de seguimiento en tiempo real. Si necesitas seguidores además del teléfono principal de AAPS, también debes configurar Nightscout.

Nota: la organización Tidepool ha llevado al mercado el producto iOS Loop con la aprobación de la FDA. Esto no tiene nada que ver con su plataforma de informes de datos ni con AAPS.


## Paso 1 - Crear una cuenta de Tidepool

- Ve a [tidepool.org](https://www.tidepool.org/)

- Selecciona «Personal Sign Up» o «Sign Up» (registrarse)

- Crea una dirección de correo electrónico y una contraseña, y anótalas

- Selecciona «Personal Account» (cuenta personal) y haz clic en «Continue» (continuar)

- Completa la sección de datos del paciente y acepta las condiciones de uso

- Verifica tu dirección de correo electrónico siguiendo las instrucciones que recibirás por correo


## Paso 2 - Conectar AAPS a Tidepool

- Abre el **menú** (☰) en la esquina superior izquierda de la pantalla principal y selecciona «**Configuración**»

- Abre la categoría «**Comunicación**» y activa «**Tidepool**»:

![Activar Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Toca «**Abrir complemento**» debajo de Tidepool y luego toca el icono **Inicio de sesión** (una flecha que entra en una puerta) en la esquina superior derecha

- Se abre una ventana del navegador con la página de inicio de sesión de Tidepool. Inicia sesión con la dirección de correo electrónico y la contraseña que creaste en el paso 1:

![Página de inicio de sesión de Tidepool](../images/v4/Tidepool/tidepool_login.png)

- Tras iniciar sesión correctamente, el navegador se cierra y la pantalla de Tidepool muestra el estado «**Conectado**». El registro de abajo muestra las subidas de datos. Si el inicio de sesión falla, comprueba que tus datos de acceso son correctos y que has verificado tu dirección de correo electrónico en Tidepool.

![Tidepool conectado](../images/v4/Tidepool/tidepool_status.png)

- En los «**Ajustes**» del complemento Tidepool, abre «**Ajustes de conexión**». De forma predeterminada, «**Usar la configuración de conexión de Nightscout**» está activado, así que Tidepool sube los datos con las mismas condiciones que has puesto para Nightscout. Desactívalo si quieres condiciones distintas para Tidepool, por ejemplo para subir a Tidepool solo con Wi-Fi y mientras se carga el teléfono, mientras que Nightscout también usa datos móviles.

![Ajustes de conexión con «Usar la configuración de conexión de Nightscout» activado](../images/v4/Tidepool/tidepool_connection_settings.png) ![Ajustes de conexión propios para Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Si necesitas más ayuda para usar tus datos una vez subidos a Tidepool, visita: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Los botones de Tidepool

En la esquina superior derecha de la pantalla de Tidepool:

- El icono **Inicio de sesión** o **Cerrar sesión**: conectar o desconectar tu cuenta de Tidepool. Solo se muestra uno de ellos: **Inicio de sesión** cuando no has iniciado sesión y **Cerrar sesión** cuando has iniciado sesión. **AAPS** te pide confirmación antes de cerrar la sesión.
- El icono del engranaje: los ajustes de Tidepool.

Los botones de la parte inferior de la pantalla de Tidepool:

- «**Subir ahora**»: sube los datos nuevos de inmediato en lugar de esperar a la próxima subida automática.
- «**Sincronización completa**»: vuelve a subir todos los datos guardados en **AAPS**.
- «**Eliminar todos los datos**»: borra **todos** los datos que **AAPS** ha subido a tu cuenta de Tidepool. Esto no se puede deshacer. Úsalo solo para eliminar datos incorrectos o duplicados y luego ejecuta «**Sincronización completa**» para volver a subir tus datos.
- «**Borrar log**»: vacía el registro que se muestra en la pantalla de Tidepool.

![La pantalla de Tidepool y sus botones](../images/v4/Tidepool/tidepool_menu.png)

En Tidepool, los datos subidos por **AAPS** 4 se muestran con el nombre de dispositivo **AAPS**. Consulta [Qué cambió en AAPS v4](#v4changes-tidepool) si usabas Tidepool con una versión anterior. 
