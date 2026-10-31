(client-master-control)=
# Control máster ↔ cliente (control remoto firmado)

Desde la versión 4 de **AAPS**, un teléfono de seguimiento con **AAPSClient** puede hacer mucho más que *anunciar* tratamientos a través de Nightscout: una vez **emparejado** con el teléfono principal, puede enviar **comandos firmados** que el teléfono principal (el **máster**) comprueba, confirma y ejecuta, incluido un **bolo de insulina** en la bomba del máster.

Esta página explica cómo funciona, cómo configurarlo y cómo usarlo.

```{contents} Table of contents
:depth: 2
:local: true
```

```{admonition} Wording used on this page
:class: note
- **Máster** = el teléfono principal de **AAPS** que tiene la bomba y ejecuta el lazo (la app `full`).
- **Cliente** = un teléfono con **AAPSClient**, sin bomba, que sigue al máster y ahora también lo *controla*.
- Los dos teléfonos deben estar conectados al **mismo** sitio de Nightscout. Toda la comunicación sigue pasando por Nightscout: no hace falta una conexión directa entre los teléfonos.
```

---

## Cómo funciona

```{admonition} Coming from AAPS v3?
:class: note
En **AAPS** v3, **AAPSClient** solo podía escribir en Nightscout tratamientos del careportal sin firmar, y no podía administrar un bolo. El control remoto ahora necesita un [emparejamiento](#client_master_master_setup) único. Consulta también [Qué cambió en AAPS v4](#v4changes-remote-control).
```

**AAPS** v4 usa un canal propio de **control de clientes** (Client-Control). Sigue pasando por tu sitio de Nightscout (en la colección `settings`), pero cada mensaje está **firmado criptográficamente** con un secreto que solo conocen los dos teléfonos. El secreto se entrega una sola vez, durante el **emparejamiento**, y justo después se sustituye por uno nuevo, así que nunca viaja en texto claro.

El principio básico es **el máster manda**:

1. El cliente envía una *intención* («bolo de 2 U», «iniciar la escena Ejercicio», «poner este objetivo temporal»…).
2. El **máster** vuelve a calcular la acción y la **limita** según sus **propios** datos actuales (perfil, IOB, COB, objetivo temporal actual, bomba), y **escribe la confirmación exacta** que verá el usuario.
3. El cliente (o el reloj) muestra el texto de confirmación del **máster**: nunca crea uno propio.
4. Tras la confirmación, el máster **ejecuta la acción una sola vez** e informa del resultado al cliente.

Qué significa esto para ti:

- **Comandos firmados**: solo los clientes que emparejaste pueden enviar comandos (secreto de emparejamiento y firma propios de cada cliente). Los comandos antiguos o repetidos se rechazan.
- **Un rol para cada cliente**: tú decides qué puede hacer cada cliente, desde *Solo lectura* hasta *Administrador*; consulta [Roles de los clientes](#client-master-control-roles).
- **Bolo de insulina desde un cliente**: el máster lo administra en su bomba y el cliente muestra el progreso de la administración.
- **El máster decide**: limita cada acción según sus propias restricciones y escribe la confirmación que se muestra en el cliente.
- **Solo los clientes emparejados cambian la terapia**: mientras el control de clientes está activado, el máster ya no acepta tratamientos ni cambios escritos directamente en Nightscout; consulta [Modo reforzado](#client-master-control-hardened-mode).
- **Cada cliente recibe su propio token de Nightscout**, solo con los permisos que necesita un cliente; consulta [El token de Nightscout propio del cliente](#client-master-control-own-token).
- **Máster sin conexión**: las acciones se bloquean con un mensaje claro.
- **Revocar un cliente** se hace con un toque (por cliente), o usa el interruptor del máster para detener a todos los clientes.

Acciones que se pueden iniciar desde un cliente: **bolo**, **carbohidratos / eCarbs**, **objetivo temporal** (poner y cancelar), **cambio de perfil**, cambio de **lazo / modo de funcionamiento**, **basal temporal** (poner y cancelar), **bolo extendido** (poner y cancelar), **selección de insulina** y **[escenas](../DailyLifeWithAaps/Scenes.md)**. Una parte de las **preferencias** también se mantiene sincronizada en ambos sentidos entre el máster y los clientes.

---

## Roles y requisitos previos

```{admonition} Before you start
:class: important
- El **máster** ejecuta la compilación normal `full` de **AAPS** y está conectado a tu bomba.
- El **máster** usa **NSClientV3** con tu Nightscout y muestra *conectado*. Dale un **token de administrador** de tu Nightscout: con él, el máster puede crear un token propio para cada cliente y mostrárselo al cliente como código QR.
- El **cliente** ejecuta **[AAPSClient](AapsClient.md)** (o **AAPSClient2** / **AAPSClient3** para más pacientes; consulta [Sobre AAPSClient, AAPSClient2 y AAPSClient3](#remotecontrol-aapsclient-versions)). Debe usar el **mismo** Nightscout. Si lo configuras con el código QR del máster, el cliente recibe la dirección y el token de Nightscout del máster; si no, primero configura tú mismo **NSClientV3** en él.
- Los **websockets** son necesarios en los dos teléfonos: los comandos solo llegan al máster a través de la conexión websocket. Mientras el control de clientes está activado, **AAPS** mantiene los websockets activados en el máster y en los clientes emparejados.
```

El emparejamiento y la sincronización son dos cosas distintas:

- La **sincronización** (datos: glucosa, tratamientos, perfil) se configura como antes; consulta [Sincronización](#RemoteControl_aapsclient). El código QR del máster puede hacerlo por ti en el cliente.
- El **emparejamiento** (control: el canal de comandos firmados descrito aquí) es el nuevo paso que se explica abajo.

---

## Configuración

(client_master_master_setup)=
### 1. En el máster: activar el control y añadir un cliente

En el máster, abre la pantalla **Administrar** y elige **Clientes autorizados**.

Activa **Permitir control del cliente** (por defecto está **desactivado**). Este es el interruptor general: si está desactivado, ningún cliente puede enviar comandos, pero tus clientes emparejados se conservan para que puedas volver a activarlo más tarde. Al activarlo también se activa el [Modo reforzado](#client-master-control-hardened-mode), que se muestra como «*Modo reforzado activado*» con un **(i)** que lo explica. En el [Modo sencillo](#preferences-simple-mode) el control de clientes siempre está activado, por eso no se muestra el interruptor.

![Pantalla Clientes autorizados en el máster](../images/v4/ClientMaster/authorized_clients_master.png)

Toca el botón **+** (abajo a la derecha) para añadir un cliente. En el diálogo **Nuevo cliente**:

1. Escribe un **nombre del dispositivo** para poder reconocerlo en la lista.
2. Elige **cómo está configurado el teléfono** (consulta la tabla de abajo).
3. Elige su **[rol](#client-master-control-roles)**. No hay nada seleccionado por defecto: el rol correcto depende de quién usa el teléfono.

![Diálogo Nuevo cliente en el máster: nombre del dispositivo, cómo está configurado el teléfono y su rol](../images/v4/ClientMaster/new_client_master.png)

| Forma                                      | Qué recibe el nuevo teléfono                                                                      | Úsala cuando                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Código QR: Nightscout y emparejamiento** | la dirección de Nightscout, su propio token de Nightscout y el emparejamiento, en un solo escaneo | el nuevo teléfono tiene cámara: la forma más rápida, no hay que escribir nada                         |
| **Código QR: solo Nightscout**             | la dirección de Nightscout y su propio token de Nightscout, sin emparejamiento                    | el teléfono solo debe **mostrar** datos y nunca enviar comandos                                       |
| **PIN**                                    | solo el emparejamiento; conserva los ajustes de Nightscout que ya tiene                           | el teléfono no tiene cámara (o el máster no puede crear tokens); ya debe estar conectado a Nightscout |

Las dos formas con código QR necesitan un **token de administrador** en los ajustes de **NSClientV3** del máster, porque el máster crea el token del cliente en Nightscout. Sin él, las opciones de código QR se muestran pero no se pueden elegir, y el diálogo explica por qué; el **PIN** siempre funciona.

#### Con un código QR

Toca **OK**: el máster crea el token de Nightscout del cliente y muestra un **código QR**. Un código que también empareja funciona unos **dos minutos**; la pantalla muestra una cuenta atrás y se cierra sola cuando el cliente se ha emparejado. Escanéalo en el nuevo teléfono como se describe en [En el cliente](#client_master_client_setup).

```{admonition} The QR code is a secret
:class: warning
Cualquiera que vea el código QR puede leer tu Nightscout, y un código que empareja también lleva el emparejamiento. Muéstralo solo al nuevo teléfono. **AAPS** bloquea las capturas de pantalla mientras el código está en pantalla.
```

![La pantalla del código QR del máster con su cuenta atrás (código difuminado)](../images/v4/ClientMaster/qr_code_master.png)

#### Con un PIN

Toca **OK**: el máster muestra un **PIN de emparejamiento** de 8 dígitos, en dos grupos de cuatro (por ejemplo `1234 5678`). Este PIN es **de un solo uso** y **caduca a los dos minutos aproximadamente**.

![Pantalla de emparejamiento del máster con el PIN de un solo uso (el PIN que se ve aquí ha caducado)](../images/v4/ClientMaster/pairing_pin_master.png)

```{admonition} The pairing PIN is a secret
:class: warning
El PIN protege el secreto de emparejamiento que se intercambia a través de Nightscout. Compártelo solo con el dispositivo que estás emparejando, no lo publiques y deja que caduque si no lo usas. Siempre puedes generar un PIN nuevo tocando **+** otra vez.
```

(client_master_client_setup)=
### 2. En el cliente: emparejar con el máster

#### Escanear el código QR

Puedes escanear el código QR del máster en dos lugares:

- en el **Asistente de configuración** del cliente, en el paso «**Configurar desde el máster**», que va antes del paso de Nightscout. Un solo escaneo configura Nightscout y, con un código que empareja, también el emparejamiento, así que la configuración termina: el asistente se cierra y se abre la pantalla principal;
- en cualquier momento más tarde desde **Administrar → Emparejar con el máster → Escanear código QR**.

La primera vez, **AAPSClient** pide el permiso de **cámara**. Si lo rechazas, la pantalla indica que la cámara es necesaria, y puedes permitirla con **Inténtalo de nuevo** o emparejar con el PIN.

Apunta la cámara al código. El cliente muestra lo que hace el código (la dirección de Nightscout y, si el código empareja, el máster con el que se empareja) y pregunta «**¿Usar este código?**». Toca **Usar**: el cliente activa **NSClientV3**, sustituye su dirección y su token de Nightscout por los del código y activa los websockets. Un código que empareja también empareja el teléfono; este saluda al máster en cuanto se conecta a Nightscout.

![El paso del asistente «Configurar desde el máster» en el cliente](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

```{admonition} Scanning is available on Android
:class: note
El escáner todavía no está disponible en iOS, y un ordenador de escritorio no tiene cámara: usa allí el PIN.
```

#### Introducir el PIN

En el cliente, abre **Administrar → Emparejar con el máster** (o el paso del asistente **Emparejar con el máster**, después del paso de Nightscout), **introduce el PIN de 8 dígitos** que se muestra en el máster y toca **Vincular**. El cliente usa el PIN para obtener de forma segura la oferta de emparejamiento a través de Nightscout; después pregunta «**¿Vincular con este máster?**» y muestra el identificador del máster. Toca **Vincular** para confirmar (consulta [Emparejar con el máster](#aapsclient-pairing-with-the-master) para ver una captura de pantalla).

![Pantalla Emparejar con el máster en el cliente antes de emparejar: introduce aquí el PIN](../images/v4/ClientMaster/pair_with_master_unpaired.png)

#### Después del emparejamiento

Una vez emparejado, el cliente envía un **Hello** (saludo) al máster y aparece en la lista **Clientes autorizados** del máster como **Activo**, con la hora de *«última conexión»*. El cliente conoce su [rol](#client-master-control-roles) por el emparejamiento, así que muestra enseguida los botones correctos. Un emparejamiento hecho en el Asistente de configuración termina el asistente. En el mismo paso, los dos teléfonos sustituyen el secreto de emparejamiento por uno nuevo que nunca ha viajado (consulta [Notas de seguridad](#client-master-control-security)), y un cliente configurado con el PIN recibe su propio token de Nightscout (consulta [El token de Nightscout propio del cliente](#client-master-control-own-token)). Un cliente puede estar emparejado con **un solo** máster a la vez; para emparejarlo con otro máster, primero toca **Desvincular**.

![Pantalla Emparejar con el máster en el cliente (ya emparejado)](../images/v4/ClientMaster/pair_with_master_client.png)

### 3. Administrar los clientes

Desde la pantalla **Clientes autorizados** del máster puedes, en cualquier momento:

- **Cambiar el rol** de un cliente con la fila de cuatro botones debajo de su nombre. El nuevo rol se aplica enseguida, sin volver a emparejar.
- **Ver con qué token de Nightscout** escribe un cliente: «*Token de Nightscout propio*» es lo que quieres. Una línea roja «*Utiliza el token de Nightscout …, el cual tiene más permisos de los que necesita un cliente*» significa que el cliente todavía usa un token con más permisos, normalmente tu token de administrador; consulta [El token de Nightscout propio del cliente](#client-master-control-own-token).
- **Revocar** un solo cliente: toca el icono de la **papelera** junto a él. El cliente ya no puede enviar comandos hasta que se empareje de nuevo. También se elimina su propio token de Nightscout, así que tampoco puede leer ya tu Nightscout.
- **Detener todo el control** sin perder los emparejamientos: desactiva **Permitir control del cliente**.

Los teléfonos configurados con **Código QR: solo Nightscout** aparecen debajo de los clientes, en «**Leer solo Nightscout**». Para cada uno de ellos puedes volver a mostrar el código QR (para configurar de nuevo el mismo teléfono) o eliminar su token, lo que termina su acceso a tu Nightscout.

![Clientes autorizados con un cliente emparejado (botones de rol, token de Nightscout propio) y un teléfono en Leer solo Nightscout](../images/v4/ClientMaster/authorized_clients_roles.png)

---

(client-master-control-roles)=
## Roles de los clientes

Cada cliente emparejado tiene un **rol**. El máster lo comprueba en cada comando, y el cliente muestra solo lo que su rol permite. Un nuevo rol se aplica enseguida, sin volver a emparejar. Los roles se suman: cada uno puede hacer todo lo que puede el anterior.

| Rol               | El cliente puede                                                                                                                                                                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Solo lectura**  | solo mostrar datos. Sigue emparejado, así que está listo cuando le des un rol más alto.                                                                                                                                                                           |
| **Comidas**       | dar un bolo, usar el asistente de bolo y el Asistente rápido, introducir carbohidratos y detener un bolo en curso. Los carbohidratos introducidos aquí pueden hacer que el lazo administre más insulina.                                                          |
| **Cuidador**      | hacer todo lo que hace un usuario en **AAPS**: objetivos temporales, cambios de perfil y de insulina, modo del lazo, basal temporal, bolo extendido, escenas, eventos del careportal, calibraciones y eliminar registros. No puede cambiar ajustes ni preajustes. |
| **Administrador** | hacerlo todo, también ajustes y preajustes (Asistente rápido, preajustes de objetivos temporales, escenas, perfiles, automatización, insulina).                                                                                                                   |

El **(i)** de la parte superior de la pantalla **Clientes autorizados** muestra la misma explicación. En el cliente, **Administrar → Emparejar con el máster** muestra el rol del propio teléfono.

---

(client-master-control-hardened-mode)=
## Modo reforzado

Cuando **Permitir control del cliente** está activado, el máster está en **modo reforzado**: solo acepta cambios de clientes emparejados. **No** acepta tratamientos, objetivos temporales, cambios de perfil, cambios del modo de funcionamiento ni eliminaciones hechos directamente en Nightscout, por ejemplo en la web de Nightscout o en otras apps.

- Los ajustes para aceptar datos de Nightscout (**NSClientV3 → Sincronización**) están ocultos mientras el modo reforzado está activado; **AAPS** los usa como si estuvieran desactivados.
- El máster sigue **subiendo** todos sus datos a Nightscout, también la glucosa, y mantiene los **websockets** activados.
- Si el máster obtiene la **glucosa de Nightscout**, la sigue tomando de allí.
- Para cargar el historial en un máster **nuevo**, usa **Sincronización completa** en **NSClientV3**: toma todo lo que hay en Nightscout, también los perfiles.
- Los [Comandos SMS](SMSCommands.md) no se ven afectados.

Un cliente emparejado sigue el modo reforzado del máster: mantiene los websockets activados y los mismos ajustes de Nightscout están ocultos en él. Un cliente no emparejado conserva sus propios ajustes.

El [Modo sencillo](#preferences-simple-mode) siempre activa el modo reforzado. Para desactivarlo, sal del Modo sencillo y desactiva **Permitir control del cliente** en el máster.

```{admonition} Why hardened mode
:class: note
Todo lo que envía un cliente emparejado está firmado, y el máster lo comprueba y lo confirma. Un tratamiento escrito en la web de Nightscout no lo está: cualquiera con permiso de escritura en tu Nightscout podría añadirlo. En modo reforzado, solo los comandos firmados pueden cambiar lo que hace el máster.
```

---

(client-master-control-own-token)=
## El token de Nightscout propio del cliente

Un cliente no necesita un token de administrador. Solo lee tu Nightscout y envía sus comandos al máster a través de él; no sube nada por sí mismo. Por eso el máster da a cada cliente un token de Nightscout propio, solo con estos permisos:

- leer todo,
- escribir en la colección `settings`, el canal hacia el máster,
- posponer las alarmas de Nightscout.

El token pertenece a un rol de Nightscout llamado **`aaps-client`**, que el máster crea la primera vez que lo necesita. Puedes ver el rol y los tokens (llamados `aaps-` más el nombre del cliente) en las **Admin tools** (herramientas de administración) de tu sitio de Nightscout. Si allí se cambia el rol, el máster lo restablece la próxima vez que crea un token o que abres **Clientes autorizados**.

Cómo recibe un cliente su token:

- **Configurado con un código QR**: el token va en el código.
- **Emparejado con el PIN** (o emparejado antes de que existiera esta función): después del emparejamiento, el máster envía al cliente su propio token por el canal emparejado, cifrado. El cliente comprueba primero que puede iniciar sesión con él y después lo usa en lugar del token que tenía. Esto necesita un token de administrador en el máster; sin él, el cliente conserva su token y su tarjeta en el máster muestra la línea roja.

**Un cliente conserva su propio token.** Una vez que el máster ha visto a un cliente escribir con su propio token, solo acepta los comandos de ese cliente con ese token. Un comando escrito con otro token (por ejemplo, un token de administrador escrito más tarde en el cliente, o el token de otro cliente) se rechaza, aunque el cliente esté emparejado, y el cliente dice «*El máster lo ha rechazado: este teléfono escribe en Nightscout con un token distinto al suyo*». Su tarjeta en el máster lo indica en rojo. El cliente sigue apareciendo en línea, para que puedas ver qué está mal. Para solucionarlo, elimina el cliente en el máster y vuelve a añadirlo.

El máster nunca elimina ni cambia un token de Nightscout que no haya creado él (uno con otros roles distintos de `aaps-client`): esos son tuyos. Elimina el token propio de un cliente cuando eliminas el cliente.

---

## Usar el control remoto

### Iniciar una acción desde el cliente

Usa el cliente exactamente como usarías el propio teléfono: abre **Carbohidratos**, **Insulina**, **Objetivo temporal**, **Perfil**, **Escenas**, el panel **Administrar**, etc., y rellena los valores.

Cuando confirmas, el cliente muestra un momento **«Contactando con el máster…»**, el **máster** calcula y limita la acción, y después el cliente muestra la **confirmación del propio máster**: las mismas líneas, valores y colores que el máster mostraría en su propia pantalla. Revísalas y toca **OK** para continuar.

![Una confirmación de escena escrita por el máster y mostrada en el cliente](../images/v4/ClientMaster/confirmation_master_authored.png)

Lo mismo vale para una simple entrada de carbohidratos: la cantidad que se muestra para confirmar es la que calculó el máster:

![Confirmación de carbohidratos escrita por el máster](../images/v4/ClientMaster/carbs_confirmation_client.png)

Después de confirmar, el máster ejecuta la acción una sola vez y el resultado se refleja en el cliente.

### Bolo de insulina desde un cliente

Esta es la principal novedad de la v4. Un bolo iniciado en un cliente **lo administra el máster en su bomba**; el máster lo limita según sus propias restricciones, y el cliente muestra el **progreso de la administración en directo** mientras dura (y una alarma si la bomba informa de un fallo).

```{admonition} Boluses are always confirmed and capped on the master
:class: note
Un cliente nunca decide por sí solo la cantidad administrada. El máster la vuelve a calcular y la limita, tú confirmas la cantidad escrita por el máster, y solo entonces se administra.
```

(clientmastercontrol-when-the-master-is-offline)=
### Cuando el máster no tiene conexión

Si no se puede contactar con el máster (su teléfono está apagado o en reposo, no está conectado a Nightscout o los websockets no funcionan), las acciones de control en el cliente se **bloquean antes de enviar nada**, y recibes un mensaje claro. Nada se aplica a medias.

![Mensaje del cliente cuando el máster no tiene conexión](../images/v4/ClientMaster/master_offline_error.png)

El cliente vuelve a comprobar automáticamente si puede contactar con el máster y reactiva el control cuando el máster vuelve a estar en línea.

(clientmastercontrol-wear-os-on-a-client)=

### Wear OS (reloj) en un cliente

Un reloj vinculado a un teléfono **cliente** envía sus acciones a través del cliente al máster (reloj → cliente → máster). El reloj muestra las líneas de confirmación del **máster** y el resultado real, igual que el teléfono. La configuración del reloj no cambia; consulta [Reloj inteligente Wear OS](../WearOS/WearOsSmartwatch.md).


<!-- 📷 SCREENSHOT NEEDED (optional): watch confirmation screen relayed from the master,
     and/or the "Contacting master" state on the watch. Requires a paired Wear OS device. -->

---

(client-master-config-prefs)=
## Cambiar la configuración y las preferencias

El emparejamiento hace más que transmitir acciones sueltas: también mantiene la **configuración** y muchas **preferencias** iguales entre el máster y sus clientes.

### Configuración (qué complementos están activos)

Los **complementos** activos (algoritmo APS, sensibilidad, suavizado, …) se eligen en el **máster** y se **copian** a cada cliente emparejado. En un cliente, estas selecciones están marcadas con un pequeño **icono de móvil** en la pantalla [Configuración](#configuration_sync_icon): cámbialas en el máster y los clientes lo siguen automáticamente, y al revés.

En un cliente, el icono de móvil aparece en *Suavizado*, *Calibración*, *Detección de sensibilidad* y *APS* (sincronizados desde el máster), pero no en *Comunicación*:

![Lista de Configuración en un cliente: el icono de móvil marca las categorías sincronizadas con el máster](../images/v4/ClientMaster/configuration_client.png)

Los datos de conexión propios de cada dispositivo, sobre todo la **URL de Nightscout / token de acceso de NSClient**, *no* se sincronizan. Cada teléfono tiene los suyos; en un cliente vienen del código QR del máster, o los configuras tú.

### Perfiles

Tu **lista de perfiles** también se mantiene sincronizada entre el máster y sus clientes emparejados. En un cliente emparejado, **Administrar → Perfil** muestra los mismos perfiles que el máster; puedes **editar** un perfil o **activar** uno y, como cualquier otro comando, el cambio se envía al **máster**, se aplica allí y se sincroniza de vuelta.

La primera vez que activas un perfil en un cliente recién instalado, el cliente puede mostrar «*Todavía no hay ninguna insulina en uso*» y pedirte que **selecciones la insulina**. Elige la insulina que está activa en el máster (la muestra **Administrar → Configuración de insulina** en el máster).

En un cliente **no emparejado**, la pantalla Perfil sigue disponible pero **solo para ver**: el cliente muestra los perfiles que recibe por Nightscout (los necesita para sus propios cálculos), pero no hay botón de editar ni de activar, porque no hay máster al que enviar el cambio.

### Preferencias

Una parte de las **preferencias** es **bidireccional**: puedes cambiarlas **en el máster o en un cliente emparejado**, y el cambio se sincroniza con el otro lado. Cuando cambias una de estas preferencias en un cliente, se envía al máster por el canal firmado, se aplica allí y se devuelve el valor válido; así, lo que ves en el cliente es siempre lo que guardó el máster. Si la misma preferencia se cambia en dos dispositivos casi a la vez, **gana el cambio más reciente**. En un ajuste con control deslizante, el nuevo valor se envía cuando levantas el dedo.

Dentro de los ajustes, el mismo pequeño **icono de móvil** marca cada preferencia que se sincroniza. En el ejemplo de abajo, *Límite de tiempo de absorción* se sincroniza (icono de móvil), mientras que los ajustes sin el icono son locales del dispositivo:

![Ajustes de un complemento: el icono de móvil marca las preferencias sincronizadas](../images/v4/ClientMaster/preferences_synced_icon.png)

```{admonition} The master must be online to change synced settings from a client
:class: note
Como el máster decide el valor guardado, para editar desde un cliente un elemento de configuración controlado por el máster o una preferencia bidireccional, el máster debe estar **accesible**. Cuando el máster no tiene conexión, esos controles están desactivados en el cliente (consulta [Cuando el máster no tiene conexión](#clientmastercontrol-when-the-master-is-offline)).
```

---

(client-master-control-security)=
## Notas de seguridad

```{admonition} How the channel is protected
:class: tip
- **Secreto de emparejamiento**: el máster lo entrega al cliente una sola vez (protegido por el PIN en un documento de Nightscout, o dentro del código QR) y los dos lo guardan cifrado.
- **Un secreto nuevo justo después del emparejamiento**: el primer mensaje del cliente después del emparejamiento inicia un intercambio de claves, y desde entonces los dos teléfonos usan un secreto que nunca ha viajado. Un secreto que alguien haya podido ver (un código QR fotografiado, una oferta de PIN leída de Nightscout) ya no sirve después. Los teléfonos emparejados antes de que existiera esta función hacen lo mismo una vez después de la actualización.
- **Cada comando está firmado** (HMAC). El máster rechaza todo lo que tenga una firma que no corresponde a un cliente emparejado.
- **Se evita la repetición** con un contador creciente por cliente, y cada comando **caduca** tras un tiempo de vida corto.
- **Mínimos permisos en Nightscout**: cada cliente tiene su [propio token de Nightscout](#client-master-control-own-token), que solo puede leer y escribir en el canal de control de clientes. Una vez que lo ha usado, el máster solo acepta sus comandos con ese token. Al eliminar el cliente, se elimina el token.
- **Solo cambios firmados**: en [modo reforzado](#client-master-control-hardened-mode) el máster ignora los cambios de terapia escritos directamente en Nightscout.
- **El máster firma lo que comparte**: los ajustes, la lista de clientes y la señal de «máster activo» que el máster pone en Nightscout para sus clientes llevan la firma del máster. Un cliente solo los acepta cuando la firma es la del máster, así que el token de otro cliente no puede cambiarlos. El cliente conoce la clave del máster al emparejarse, o por el código QR en el caso de un teléfono que solo lee Nightscout. Un documento rechazado aparece en el registro de NSClient como «*✕ SETTINGS … refused*».
- **Tú mantienes el control**: da a cada cliente el [rol](#client-master-control-roles) que necesita, revoca un cliente con un toque o desactívalo todo con **Permitir control del cliente**.
```

```{admonition} After restoring a backup
:class: warning
Si un cliente se restaura desde una copia de seguridad que hace retroceder su contador de comandos, el máster rechazará sus siguientes comandos como repeticiones. Para solucionarlo, simplemente **desvincula y vuelve a emparejar**.
```

---

(client-master-control-troubleshooting)=

## Solucionando problemas

| Síntoma                                                                                                          | Qué comprobar                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| El cliente dice que el **máster no tiene conexión**                                                              | El teléfono máster está activo y ejecuta **AAPS**; los dos teléfonos están conectados en **NSClientV3**; los **websockets** están activados en los dos; mismo sitio de Nightscout.                                                                                                                                                                                      |
| El cliente dice que **no está emparejado**                                                                       | Vuelve a emparejar desde **Administrar → Emparejar con el máster**. Comprueba que el cliente está **Activo** en la lista **Clientes autorizados** del máster.                                                                                                                                                                                                           |
| Comando **rechazado** por el máster                                                                              | El máster vuelve a validar según su estado actual; por ejemplo, el perfil elegido ya no existe o el tipo de bomba no coincide. Vuelve a comprobarlo en el máster.                                                                                                                                                                                                       |
| Los comandos funcionan pero son **lentos**                                                                       | Activa los **websockets** en los dos teléfonos (si no, las apps usan una consulta periódica más lenta).                                                                                                                                                                                                                                                                 |
| El emparejamiento se cancela con *«No se ha podido almacenar el secreto de emparejamiento»*                      | No se ha cambiado nada. Vuelve a empezar el emparejamiento; si sigue fallando, reinicia **AAPSClient** e inténtalo una vez más.                                                                                                                                                                                                                                         |
| No pasa nada después del emparejamiento                                                                          | Asegúrate de que **Permitir control del cliente** está ACTIVADO en el máster y de que el máster está conectado a Nightscout.                                                                                                                                                                                                                                            |
| Las opciones de código QR no se pueden elegir en el diálogo **Nuevo cliente**                                    | El diálogo explica por qué. *No es un token de administrador*: da al máster un token de administrador de tu Nightscout, o añade el cliente con el **PIN**. *No conectado*: espera hasta que el máster muestre *conectado* en **NSClientV3**.                                                                                                                            |
| *«Nightscout tiene un token con este nombre y otros permisos»*                                                   | Uno de tus propios tokens de Nightscout se llama `aaps-` más este nombre. Elige otro nombre para el cliente.                                                                                                                                                                                                                                                            |
| *«Ya hay un cliente con este nombre en la lista»*                                                                | Elige otro nombre, o elimina primero ese cliente.                                                                                                                                                                                                                                                                                                                       |
| El cliente dice *«Este código es de otra versión de AAPS»*                                                       | El máster y el cliente deben ejecutar la **misma** versión de **AAPS**. Actualiza el más antiguo.                                                                                                                                                                                                                                                                       |
| El cliente dice *«Este código ha caducado»*                                                                      | Un código que empareja funciona unos dos minutos. Vuelve a añadir el cliente en el máster para obtener un código nuevo.                                                                                                                                                                                                                                                 |
| El cliente dice *«Este teléfono ya está emparejado»*                                                             | Primero desvincúlalo (**Administrar → Emparejar con el máster → Desvincular**) y después vuelve a escanear. Un código **solo Nightscout** también funciona en un teléfono emparejado.                                                                                                                                                                                   |
| El cliente dice *«El máster lo ha rechazado: este teléfono escribe en Nightscout con un token distinto al suyo»* | El cliente usaba antes su propio token de Nightscout y ahora escribe con otro, por ejemplo después de escribir un token en sus ajustes de Nightscout. Elimina el cliente en el máster y vuelve a añadirlo (consulta [El token de Nightscout propio del cliente](#client-master-control-own-token)).                                                                     |
| El registro de NSClient en el cliente muestra *«✕ SETTINGS … refused»* y sus ajustes ya no siguen al máster      | Otra persona escribió el documento de ajustes del máster, o el máster tiene una clave nueva (por ejemplo, después de borrar sus datos). Un cliente emparejado toma la clave nueva por sí solo la próxima vez que se conecta a Nightscout. Un teléfono que solo lee Nightscout necesita otra vez el código QR del máster (**Leer solo Nightscout → mostrar el código**). |
| La tarjeta del cliente muestra *«Utiliza el token de Nightscout …»* en rojo                                      | El cliente todavía escribe con un token que tiene más permisos de los que necesita. El máster le envía su propio token después del emparejamiento, pero solo si el máster tiene un token de administrador. Comprueba el token del máster, o vuelve a configurar el cliente con un código QR.                                                                            |
| Un cliente ya no puede leer Nightscout                                                                           | Su token se eliminó, por ejemplo porque el cliente se eliminó en el máster. Vuelve a añadirlo.                                                                                                                                                                                                                                                                          |
| No se aplican los tratamientos introducidos en la web de Nightscout                                              | Es lo esperado en [modo reforzado](#client-master-control-hardened-mode): introdúcelos en un cliente emparejado.                                                                                                                                                                                                                                                        |

Para problemas de Nightscout o de sincronización, consulta primero [Solución de problemas de NSClient](../GettingHelp/TroubleshootingNsClient.md).

---


<!-- =====================================================================
     SCREENSHOTS STILL TO ADD:
       1. (optional) Wear OS confirmation relayed from the master
     Already included:
       - authorized_clients_master.png       (master: Allow client control, hardened mode, client card, + button)
       - authorized_clients_roles.png        (master: client card with roles, Read Nightscout only section)
       - new_client_master.png               (master: New client dialog, three ways and role row)
       - qr_code_master.png                  (master: pairing QR code with countdown, code blurred; console screenshot)
       - aapsclient_wizard_from_master.png   (client: Set up from the master wizard step)
       - pair_with_master_unpaired.png       (client: pairing screen, unpaired PIN entry)
       - pairing_pin_master.png              (master: one-time pairing PIN — expired demo PIN)
       - pair_with_master_client.png         (client: pairing screen, paired state)
       - confirmation_master_authored.png    (client: master-authored scene confirmation)
       - carbs_confirmation_client.png       (client: master-authored carbs confirmation)
       - master_offline_error.png            (client: master-offline message)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
