# Control remoto de AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

Hay cuatro herramientas muy eficaces para manejar **AAPS** a distancia:

1) [Comandos SMS](#RemoteControl_SMS-Commands) (el teléfono del seguidor puede ser Android o iOS), 2) [AAPSClient](#RemoteControl_aapsclient) (el teléfono del seguidor es Android; se está desarrollando una versión para iPhone) 3) [Nightscout](#RemoteControl_nightscout) (Android, iOS u otro ordenador/dispositivo), sobre todo para seguir: mira la nota sobre el [control de clientes](#client-master-control) en esa sección.  
4) [Relojes inteligentes](#RemoteControl_smartwatches) (Android)

Las tres primeras son sobre todo adecuadas para cuidadores/padres, pero los relojes inteligentes son muy útiles para cuidadores/padres **y** también para adultos con diabetes.

![imagen](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) Comandos SMS

Mira la página [Comandos SMS](../RemoteFeatures/SMSCommands.md).

(RemoteControl_aapsclient)=
## 2) AAPSClient

**AAPSClient** se parece mucho a **AAPS**. Ofrece al cuidador las mismas pantallas y botones para enviar órdenes a **AAPS** a distancia:

![Pantalla principal de AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

(remotecontrol-aapsclient-versions)=
### Sobre AAPSClient, AAPSClient2 y AAPSClient3

Hay 3 versiones de la app cliente: **AAPSClient**, **AAPSClient2** y **AAPSClient3**. Funcionan de la misma forma. La única diferencia es que se pueden instalar a la vez en el mismo teléfono del seguidor.

Un cuidador que sigue a una persona solo necesita **AAPSClient**. Para seguir y controlar a distancia a una segunda persona (con su propio sitio **Nightscout** y su propio teléfono con **AAPS**), instala también **AAPSClient2**, y **AAPSClient3** para una tercera persona. Cada app se configura y se [empareja](#aapsclient-pairing-with-the-master) por separado, con el sitio **Nightscout** y el teléfono con **AAPS** de la persona a la que sigue.

Para distinguir las apps, algunos elementos tienen otro color: amarillo para **AAPSClient**, azul para **AAPSClient2** y verde para **AAPSClient3**. Estos elementos son el icono de la app, el fondo del widget y la sección de estado de **AAPS** en la pantalla principal de la app. <br/> Nota: la opacidad del fondo del widget se puede ajustar en la configuración del widget. Con una opacidad baja, el color se ve mal.

![Colores del widget y de la sección de estado de AAPSClient, AAPSClient2 y AAPSClient3](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### Descarga e instalación

**AAPSClient** se puede instalar en un solo teléfono o en varios teléfonos de seguidores (p. ej., el teléfono seguidor del padre 1 y el del padre 2), para que ambos cuidadores tengan acceso y puedan controlar a distancia el teléfono con **AAPS** del paciente.

To download **AAPSClient**, navigate to the [GitHub repository](https://github.com/nightscout/AndroidAPS/releases/) and click on the asset **“app-AAPSClient-release_x.x.x.x”** (it may be a newer version to that shown in the screenshot below):

![imagen](../images/remote_control_and_following/AAPSClient_download_02.png)

Después ve a _descargas_ en tu ordenador. En Windows, las _descargas_ se muestran en la barra de la derecha:

![imagen](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Cuando se haya descargado, haz clic en _mostrar en carpeta_ para encontrar el archivo.

Ahora el apk de **AAPSClient** puede:

Pasarse al teléfono del seguidor con un cable USB; o Arrastrarse a una carpeta de Google Drive y después añadirse al teléfono del seguidor tocando el archivo «app-AAPSClient-release».

Should you be needing **AAPS** for yourself, and **AAPSClient** for monitoring someone else, you will need to build **AAPSClient** yourself instead of downloading it from the GitHub repository as described above. El motivo es que no puedes instalar **AAPS** y **AAPSClient** en el mismo teléfono si están firmados con claves distintas. <br/> Para compilar **AAPSClient** tú mismo, sigue el mismo proceso que para [compilar AAPS](../SettingUpAaps/BuildingAaps.md) normalmente. En la página **Generate signed App Bundle or APK**, selecciona **aapsclientRelease** en lugar de **fullRelease**.

La misma regla vale si instalas varias apps cliente (**AAPSClient**, **AAPSClient2**, **AAPSClient3**) en un teléfono del seguidor: todas deben estar firmadas con la **misma clave**. Si no, Android no deja instalar la segunda (error `INSTALL_FAILED_DUPLICATE_PERMISSION`).

### Sincronización: configurar AAPSClient y AAPS

Cuando el apk de __AAPSClient__ esté instalado en el teléfono del seguidor, asegúrate de que **NSClientV3** está configurado de la misma forma en ambos teléfonos para Nightscout 15 (mira las [notas de actualización](../Maintenance/UpdateToNewVersion.md)). El ejemplo de abajo muestra la configuración de la sincronización con NSClientV3 y Nightscout 15; en __AAPS__ hay otras fuentes de datos (p. ej., xDrip).

En **Configuración** > **Comunicación**, el usuario sincroniza sus datos con Nightscout mediante __NSClientV3__ (con la API v3), configurado de la misma forma en __AAPS__ y en el teléfono del seguidor.

![Configuración > Comunicación con NSClientV3 seleccionado](../images/v4/Configuration/configuration_communication.png)

El usuario debe asegurarse de que __ambos__ teléfonos, el de AAPS y el de AAPSClient, están sincronizados, configurando NSClientV3 en cada uno. En el teléfono del seguidor, esto también se puede hacer escaneando un código QR que muestra **AAPS**; mira [Emparejar AAPSClient con AAPS](#remotecontrol-pairing) más abajo:

- Introduce tu **URL de Nightscout** en los **Ajustes** de NSClientV3

- Introduce tu **Token de acceso de Nightscout** en los mismos ajustes. Sigue las notas [aquí](https://nightscout.github.io/nightscout/security/#create-a-token). En el teléfono con **AAPS**, usa un **token de administrador**: con él, **AAPS** crea un token propio para cada teléfono seguidor.

- Activa **Usar WebSockets** en **ambos** teléfonos. En el teléfono con **AAPS**, los WebSockets son **obligatorios** para el control remoto: sin ellos, **AAPS** no puede recibir órdenes de **AAPSClient**. En ambos teléfonos también hacen la sincronización más rápida, a cambio de un uso de batería un poco mayor.

![Ajustes > NSClientV3 con URL de Nightscout, Token de acceso de Nightscout y Usar WebSockets](../images/preferences/settings_nsclient.png)


El usuario debe comprobar que tanto __AAPSClient__ como __AAPS__ muestran «conectado» en la pantalla **NSClientV3** de cada teléfono. En este punto, **AAPSClient** sigue a **AAPS** (glucosa, tratamientos, perfil), pero todavía no puede controlarlo: empareja los dos teléfonos como se explica abajo.

(remotecontrol-pairing)=
### Emparejar AAPSClient con AAPS (control remoto)

Desde la versión 4 de **AAPS**, **AAPSClient** controla **AAPS** mediante una conexión segura y **emparejada**. La sincronización sola no basta: hasta que los teléfonos estén emparejados, **AAPSClient** solo muestra **Administrar** con un **Perfil** de solo lectura y **Emparejar con el máster**.

1. En el teléfono con **AAPS**, abre **Administrar → Clientes autorizados** y activa **Permitir el control del cliente** (está desactivado por defecto, y siempre activado en el Modo sencillo).
2. Toca **+**, introduce un nombre para el teléfono del seguidor, elige cómo se configura y elige su **rol**:
   - **Código QR: Nightscout y emparejamiento** — **AAPS** muestra un código QR que configura Nightscout en el teléfono del seguidor y lo empareja, con un solo escaneo. Para esto hace falta un token de administrador en los ajustes de NSClientV3 del teléfono con **AAPS**.
   - **PIN** — para un teléfono del seguidor sin cámara, ya conectado a Nightscout: apunta el **PIN** de un solo uso (válido unos dos minutos).
3. En el teléfono con **AAPSClient**, escanea el código (en el Asistente de configuración, o en **Administrar → Emparejar con el máster → Escanear código QR**), o abre **Administrar → Emparejar con el máster** e introduce el PIN. Confirmar.

Después, el teléfono del seguidor aparece como **Activo** en la lista de **Clientes autorizados**, y **AAPSClient** muestra **Tratamientos**, **Escenas** y **Administrar**. El teléfono del seguidor recibe un token de Nightscout propio, solo con los permisos que necesita. El procedimiento completo, con capturas de pantalla y solución de problemas, está en [Control máster ↔ cliente](#client_master_master_setup).

Comprueba que la configuración funciona: introduce carbohidratos en **AAPSClient**, confirma la cantidad que se muestra y comprueba que la entrada aparece en **Tratamientos** en ambos teléfonos.

(remotecontrol-nightscout-access-token)=

### Solución de problemas con la configuración del «Token de acceso de Nightscout»

La configuración exacta del «Token de acceso de Nightscout» puede variar según si tu proveedor de Nightscout es un sitio alojado de pago o no.

Si te cuesta que **AAPS** acepte el «Token de acceso de Nightscout» y usas un sitio de Nightscout alojado de pago, quizá quieras consultar primero con tu proveedor de Nightscout cómo resolver los problemas con el «Token de acceso de Nightscout». Si no, pide ayuda en el grupo de **AAPS**, pero antes comprueba bien que has seguido correctamente las notas [aquí](https://nightscout.github.io/nightscout/security/#create-a-token).

### Qué ofrece AAPSClient

Una vez emparejado, **AAPSClient** ofrece al cuidador casi las mismas pantallas que el propio **AAPS**:

- **Tratamientos**: bolo de insulina, carbohidratos y el asistente de bolo.
- **Escenas**: iniciar y detener [escenas](../DailyLifeWithAaps/Scenes.md).
- **Administrar**: perfiles, ajustes de insulina, objetivos temporales, Asistente rápido, automatización, comida, rotación del sitio de infusión, emparejamiento y la basal temporal en curso.
- **Menú principal**: historial de tratamientos, explorador de historial, estadísticas, mantenimiento, configuración.

En **AAPSClient** no hay bomba ni objetivos. Mira [La app AAPSClient](AapsClient.md) para una descripción detallada.

**AAPSClient** permite al cuidador hacer a distancia, por la red móvil o por internet, la mayoría de los ajustes que se pueden hacer directamente en **AAPS**, **incluidos los bolos de insulina**. Cada orden se firma y se envía a través de Nightscout al teléfono con **AAPS**. Este la compara con sus propios datos, la limita, te muestra su propia confirmación y solo entonces la ejecuta. **AAPSClient** _puede_ ser mucho más rápido que los [Comandos SMS](../RemoteFeatures/SMSCommands.md), sobre todo para órdenes que necesitarían autenticación.

Los tratamientos introducidos en Nightscout por otros medios (por ejemplo, la web de Nightscout) no se aplican mientras el control de clientes está activado: **AAPS** está entonces en [Modo reforzado](#client-master-control-hardened-mode) y solo acepta cambios de clientes emparejados. Con el control de clientes desactivado, solo se aplican si las opciones **Recibir** correspondientes están activadas en la [sección Sincronización de las preferencias de NSClient](#Preferences-nsclient-synchronization).

El control remoto con **AAPSClient** solo se recomienda si tu sincronización funciona bien (_es decir,_ no ves cambios de datos no deseados, como objetivos temporales, basales temporales, etc. que se modifican solos).

### AAPSClient con opciones de reloj inteligente

Un reloj inteligente puede ser una herramienta muy útil para ayudar a manejar **AAPS** con niños. Son posibles un par de configuraciones diferentes. Si **AAPSClient** está instalado en el teléfono del cuidador, se puede descargar la [app **AAPSClient WearOS**](https://github.com/nightscout/AndroidAPS/releases/) e instalarla en un reloj inteligente compatible conectado al teléfono del padre o la madre. Esto muestra la glucosa actual y el estado del lazo. Cuando **AAPSClient** está emparejado con **AAPS**, las acciones del reloj (incluidos bolos, carbohidratos, objetivos temporales y cambios de perfil) se pasan a través de **AAPSClient** a **AAPS**, que las confirma y las ejecuta: mira [Wear OS en un cliente](#clientmastercontrol-wear-os-on-a-client). Puedes leer más sobre los relojes inteligentes [aquí](#remotecontrol-smartwatches).

(RemoteControl_nightscout)=
## 3) Nightscout

Además de que Nightscout es un servidor en «la nube», también hay una app **Nightscout** propia, que puedes descargar directamente de la App Store en tu iPhone. If you have an Android follower phone, there is not a dedicated Nightscout app and it is better to use [**AAPSClient**](#RemoteControl_aapsclient), or, if you only want to follow, and not send treatments you can download and install the [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) app from the Playstore.

Cuando hayas instalado la app **Nightscout** en tu iPhone, ábrela y sigue los pasos de configuración. Introduce la dirección de tu Nightscout (ver abajo, a la izquierda). El formato puede variar según dónde esté alojado tu Nightscout. (_p. ej._ http://youraddresshere.herokuapp.com). Después introduce tu API secret de Nightscout (ver abajo, a la derecha). Si no te pide tu contraseña de la API, debes introducirla tocando el candado en la parte superior de la app:

![imagen](../images/remote-control-24.png)

Hay más información sobre la configuración directamente en [Nightscout](https://nightscout.github.io/nightscout/discover/)

La primera vez que inicies sesión, verás una pantalla muy sencilla. Personaliza las opciones de pantalla seleccionando la «hamburguesa» arriba a la derecha y desplazándote hacia abajo:

![imagen](../images/remote-control-25.png)

Desplázate hacia abajo hasta «Settings». Quizá quieras cambiar «scale» a «linear», porque la escala por defecto de la glucosa es logarítmica. En «render basal», selecciona «default» para que se muestre la basal de la bomba.

![imagen](../images/remote-control-25b.png)

Selecciona las opciones que quieras. Desmarca las alarmas si usas otra app para las alarmas.

![imagen](../images/remote-control-26.png)

Sigue desplazándote hacia abajo hasta llegar a «show plugins».

Asegúrate de que «careportal» está marcado. También puedes seleccionar otros datos (los más útiles son: IOB, care portal, pump, cannula age, insulin age, basal profile y OpenAPS).

Importante: ahora debes tocar «save» abajo para que estos cambios se apliquen.

![imagen](../images/remote-control-27.png)

Después de tocar «save», la app vuelve a tu pantalla principal de Nightscout, que se verá más o menos así:

1. Valor de glucosa actual
2. Información sobre el estado del sistema AAPS: toca las distintas pestañas de la pantalla para ver más detalles. Añade o quita estas opciones de pantalla con el menú de hamburguesa.
3. Curva de glucosa reciente con los tratamientos (carbohidratos, bolos)
4. Curva de glucosa a más largo plazo
5. Menú de «hamburguesa» para ajustar las opciones de pantalla, crear informes, editar perfiles y las herramientas de administración de Nightscout
6. Menú «**+**» para introducir tratamientos (mira [abajo](#RemoteControl_nightscout-treatments) cuándo los aplica **AAPS**).
7. Selecciona otro periodo de tiempo para mostrar
8. Perfil de insulina basal
9. Línea verde = glucosa pasada Líneas azules = glucosa prevista

![imagen](../images/remote-control-28.png)

Veamos con más detalle el menú de arriba a la izquierda de la app Nightscout:

1. Edición retrospectiva en Careportal
2. Activar/desactivar alarmas
3. Hamburguesa: para ajustar las preferencias
4. Careportal: registrar tratamiento (mira [abajo](#RemoteControl_nightscout-treatments) cuándo los aplica **AAPS**)

![Nightscout top bar](../images/remote-control-29.png)

En esta pantalla, las pestañas grises muestran muchísima información sobre el estado del sistema **AAPS** (y si tocas una pestaña, verás todavía más información):

1. Tendencia de glucosa en 5 min
2. Vista previa del asistente de bolo
3. Toca Basal para ver tu perfil actual y la información de la basal
4. Tiempo desde la última lectura del MCG en AAPS
5. **Bomba**: insulina, % de batería y cuándo se conectó AAPS a ella por última vez
6. Última actualización de AAPS: si han pasado más de 5 min, puede haber un problema de conexión entre el teléfono con AAPS y la bomba/el MCG
7. Toca IOB para ver la división entre insulina basal y de bolo
8. Edad de la insulina en el reservorio
9. Edad de la cánula
10. Estado de la batería del teléfono con AAPS
11. Tamaño de tu base de datos. Si se llena demasiado (solo en Nightscout propio, los servicios alojados no lo tienen en cuenta), puedes empezar a tener problemas de conexión. Puedes borrar datos para reducir este número en el menú Admin tools (con la hamburguesa).

![imagen](../images/remote-control-30.png)

![imagen](../images/remote-control-31.png)

Toca «refresh» abajo en la página para cerrar la ventana emergente.

(RemoteControl_nightscout-treatments)=
### Enviar tratamientos a AAPS con la app Nightscout

In **AAPS** 4 the supported way to control **AAPS** remotely is a **paired AAPSClient**, see [Master ↔ Client control](#client-master-control): each client has a [role](#client-master-control-roles) that limits what it may do, and every command is signed by the client, then checked and confirmed by the **AAPS** phone. Mientras el control de clientes está activado, el teléfono con **AAPS** está en [Modo reforzado](#client-master-control-hardened-mode): los tratamientos, objetivos temporales y cambios de perfil introducidos en la web de Nightscout o en la app Nightscout **no** se aplican. La app Nightscout es entonces una herramienta solo para seguir.

```{admonition} Only when client control is off
:class: warning
Si **Permitir el control del cliente** está desactivado en **Administrar → Clientes autorizados** (y el Modo sencillo está desactivado), **AAPS** aplica las entradas de careportal de Nightscout solo para los tipos de datos que activaste en **Recibir** en la [sección Sincronización de los ajustes de NSClientV3](#Preferences-nsclient-synchronization): carbohidratos, objetivos temporales, cambios de perfil y las demás entradas de careportal. La insulina nunca se administra de esta forma: un «Correction bolus» introducido en Nightscout solo se *anuncia*, y **AAPS** lo cuenta como insulina activa sin administrarlo. Esta configuración no se recomienda para el control remoto; usa un **AAPSClient** emparejado.
```

Lee más sobre las opciones de **Nightscout** [aquí](https://nightscout.github.io/)

### Consejos para sacar el máximo partido a la app Nightscout

1). Si te quedas «atascado» en una página y quieres volver a ver la pantalla principal, toca «refresh» (abajo en el centro). Así vuelves a la página de inicio de **Nightscout** con la gráfica de glucosa.

Para ver el perfil actual que funciona en el teléfono, toca los distintos iconos de la pantalla encima de la gráfica. Puedes ver más información (ratio de carbohidratos actual, sensibilidad, zona horaria, etc.) tocando «basal». «OpenAPS» da información sobre el perfil, el objetivo actual, etc. También puedes vigilar el % de batería del teléfono y el % de batería de la bomba. BWP da información sobre lo que el algoritmo cree que pasará en el futuro, según la IOB y los COB.

#### Otros iconos del menú: ¿qué significa el lápiz (editar)?

(Técnicamente) puedes usar el lápiz de edición para mover o borrar tratamientos de bolo o de corrección de las últimas 48 h.

Más información sobre esto [aquí](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Esto podría ser útil para borrar carbohidratos anunciados (pero sin bolo). Pero en la práctica ahora no funciona bien con **AAPS**, y te recomendamos hacer estos cambios directamente en la app **AAPS**.

(RemoteControl_smartwatches)= (remotecontrol-smartwatches)=

## 4) Relojes inteligentes

### Opción 1) Controlar AAPS desde un reloj Wear OS

![Wear Remote 1](../images/Wear_Remote1.png)

Cuando hayas [configurado **AAPS** en tu reloj](../WearOS/BuildingAapsWearOS.md), encontrarás muchos detalles sobre las esferas del reloj inteligente y sus funciones en [Reloj inteligente Wear OS](../WearOS/WearOsSmartwatch.md).

En resumen, desde el reloj inteligente se pueden activar estas funciones:

* establecer un objetivo temporal

* usar la calculadora de bolo (las variables del cálculo se pueden definir en los ajustes del teléfono)

* administrar carbohidratos extendidos (eCarbs)

* administrar un bolo (insulina + carbohidratos)

* ajustes del reloj

* estado

* comprobar el estado de la bomba

* comprobar estado del lazo

* comprobar y cambiar el perfil, CPP (Circadian Percentage Profile, perfil circadiano en porcentaje = desplazamiento horario + porcentaje)

* mostrar TDD (dosis diaria total = bolos + basal por día)

* Bolo remoto cuando el cuidador y el niño con DT1 están en lugares distintos (es posible con el reloj con **AAPS** y el teléfono con **AAPS**, siempre que ambos dispositivos estén conectados a la red)

#### Comunicación de los cuidadores con el reloj usando otras apps (como WhatsApp)

Se pueden añadir más apps al reloj, como WhatsApp, por ejemplo para enviar mensajes entre cuidadores y niños. Es importante tener solo UNA cuenta de Google asociada al teléfono; si no, el reloj no recibirá estos datos. Para tener una cuenta de Samsung necesitas tener 13 años o más, y debe estar creada con la misma dirección de correo que se usa en el teléfono Android.

[Aquí](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/) hay un vídeo que explica cómo configurar WhatsApp para mensajes en el reloj Galaxy 4 (no tendrás todas las funciones de WhatsApp)

Con algunos ajustes en la app **Galaxy wearable** del teléfono con **AAPS** y en el reloj, los mensajes de WhatsApp pueden avisar con una vibración suave y mostrarse sobre la esfera del reloj.

### Opción 2) **AAPS** en el reloj, para el control remoto de **AAPS** en un teléfono

Igual que con un teléfono del seguidor con **AAPSClient** o con comandos SMS (mira las secciones de arriba), se puede usar un reloj inteligente para controlar **AAPS** a distancia y ver todos los datos del perfil. Una diferencia clave con un teléfono del seguidor es que el reloj se conecta al teléfono con **AAPS** por Bluetooth y no necesita ni Nightscout ni un código de autenticación. Además, si el reloj y el teléfono con **AAPS** conectados por Bluetooth también están en una red Wi-Fi/de datos móviles, el reloj también se comunicará con el teléfono con **AAPS** por esa red, con más alcance. Esto incluye administrar un bolo a distancia cuando el cuidador con el reloj con **AAPS** y el niño con DT1 (con el teléfono con **AAPS**) están en lugares distintos, lo que puede ser útil cuando el niño con DT1 está en el colegio.

Por eso, un reloj inteligente para control remoto suele ser útil en cualquier situación en la que:

a)  Los comandos de **AAPSClient** o de **SMS** no pueden funcionar; o

b)  El usuario quiere evitar escribir un código de autenticación (necesario para los comandos SMS).

Un reloj inteligente necesita **Wear OS 3 o más reciente** para poder controlar **AAPS**. Revisa las especificaciones técnicas del reloj y mira la página [Relojes inteligentes y AAPS](../Getting-Started/Watches.md). Search, or ask in the **AAPS** Facebook/Discord groups if unsure.

Abajo tienes guías específicas para configurar **AAPS** en el popular Samsung Galaxy Watch 4 (40 mm). El reloj [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) también es una opción popular. Si tienes experiencia configurando otro reloj inteligente que crees que puede ser útil para otros, añádelo a estas páginas ([editar la documentación](../SupportingAaps/HowToEditTheDocs.md)) para compartir lo que sabes con toda la comunidad de **AAPS**.

### Opción 3) AAPSClient en un reloj para el control remoto de **AAPS** en un teléfono

![Wear Remote 2](../images/Wear_Remote2.png)

The software for the watch, **AAPSClient** Wear apk, can be downloaded directly from [GitHub](https://github.com/nightscout/AndroidAPS/releases/).

Para descargar el software, haz clic en la app de reloj que corresponde a la app cliente del teléfono: **wear-aapsclient-release_**_versión_ va con **AAPSClient**, **wear-aapsclient2-release_**_versión_ va con **AAPSClient2** (mira [Sobre AAPSClient, AAPSClient2 y AAPSClient3](#remotecontrol-aapsclient-versions)):

![imagen](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


Después elige «guardar como» y guarda el archivo en un lugar cómodo de tu ordenador:


![imagen](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






El apk de **AAPSClient** Wear se puede pasar a tu teléfono e instalar manualmente en el reloj de la misma forma que la app **AAPS** Wear, como se explica en [Pasar la app Wear a tu teléfono con AAPS](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)  









