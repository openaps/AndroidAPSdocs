# CareLevo

La CareLevo es una bomba de parche sin tubo fabricada por CareMedi. Cada parche contiene hasta 300 U de insulina y se lleva hasta 7 días (168 horas). Se comunica con **AAPS** por el Bluetooth del teléfono, sin ningún dispositivo adicional.

```{admonition} New driver
:class: warning
El controlador de CareLevo es nuevo en **AAPS**. Lee toda esta página antes de activar tu primer parche, y ten a mano las instrucciones de uso de la propia bomba.
```

La dosis más pequeña que puede administrar el parche es 0,05 U. En el **Perfil**, pon tus dosis basales a un mínimo de 0,05 U/h en pasos de 0,05 U/h; si no, la insulina que espera el **Perfil** y la insulina que administra el parche son un poco diferentes. **AAPS** usa las dosis basales que el parche ha aceptado.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funciones de la bomba con AAPS

* Se comunica con **AAPS** mediante el Bluetooth propio del teléfono, sin un dispositivo de comunicación adicional.
* Bolo en pasos de 0,05 U.
* Dosis basales de 0,05 U/h a 15 U/h en pasos de 0,05 U/h, con segmentos basales de 30 minutos.
* Dosis basales temporales como valor absoluto, hasta 12 horas.
* Bolo extendido hasta 8 horas.
* Los cambios de horario de verano (DST) y de zona horaria se deben hacer a mano. El parche te avisa cuando cambia la zona horaria.

## Configuración de la bomba

1. Abre el **menú** (☰) en la esquina superior izquierda de la pantalla principal de **AAPS** y selecciona **Configuración**.
1. Selecciona **Carelevo** en la sección Bomba.
1. Pulsa la tecla Atrás para volver a la pantalla principal.

![El complemento Carelevo seleccionado en Configuración > Bomba](../images/v4/Pumps/carelevo_enabled.png)

## Ajustes

Abre la pantalla de la bomba con **Administrar → Bomba** (o **Configuración → Bomba → Abrir complemento**).

Abre los ajustes de CareLevo pulsando el icono **Ajustes** (engranaje) en la esquina superior derecha. Hay tres ajustes:

![Ajustes del controlador Carelevo](../images/v4/Pumps/carelevo_settings.png)

### Ajuste de notificación de insulina baja

El parche te avisa cuando la insulina que queda en el reservorio llega a la cantidad elegida. Se puede ajustar de 20 U a 50 U en pasos de 5 U. El valor por defecto es 30 U. Con independencia de este ajuste, el parche lanza una alarma crítica y deja de administrar insulina cuando quedan menos de 10 U.

### Ajuste de notificación de uso del parche

El parche te avisa cuando lo has llevado durante el número de horas elegido, para que puedas planificar el cambio. Se puede ajustar de 24 a 167 horas. El valor por defecto es 116 horas.

### Alarma de información del parche

Si está activado, el parche pita cuando empieza y cuando termina un bolo, un bolo extendido o una basal temporal. El valor predeterminado es desactivado.

## La pantalla de la bomba

![Pantalla de la bomba Carelevo sin parche activo](../images/v4/Pumps/carelevo_pump_screen.png)

La pantalla de la bomba muestra el **Estado del Bluetooth** (Sin parche activo, Desconectado o Conectado), el **Número de serie** del parche, su **Hora de activación** y su **Expiración**, la **Tasa basal** actual y la **Tasa basal temporal**, la **Insulina restante** (restante / cargada), el **Tiempo restante del parche** y el **Total de insulina administrada**.

Los botones dependen del estado del parche:

* **Activar parche**: empieza la activación de un parche nuevo, ver más abajo.
* **Guía de insulina**: muestra los doce pasos para llenar un parche con insulina.
* **Suspender infusión** / **Reanudar infusión**: pausa y vuelve a iniciar la administración de insulina, ver más abajo.
* **Descartar parche**: detiene el parche actual para poder activar uno nuevo.

## Activar un parche

Antes de empezar, asegúrate de que hay un **Perfil** activo en **AAPS** y de que el Bluetooth está encendido. El parche se debe activar en un tiempo limitado después de encenderlo; si se acaba el tiempo, el parche lanza la alarma **Tiempo de aplicación del parche agotado** y ya no se puede usar.

Pulsa **Activar parche** en la pantalla de la bomba y sigue los pasos. Puedes cancelar en cualquier momento antes de insertar la aguja; lo que hayas introducido se descarta.

### Selecciona la insulina

Confirma la insulina que usas. El parche necesita insulina de acción rápida U-100.

### Llena el parche con insulina

Llena el parche con 50 a 300 U, según el tiempo que lo vayas a llevar. Pulsa **Guía de insulina** si necesitas las instrucciones de llenado. Luego toca la cantidad de llenado y selecciona la cantidad que has cargado; **AAPS** la usa para mostrar la insulina restante.

### Conecta el parche

1. Saca el parche de su blíster y quita el capuchón de la aguja.
1. Pulsa el botón de encendido del parche durante más de un segundo. Después del pitido, toca **Buscar parche**.
1. Si el parche encontrado es el correcto, toca **Confirmar**. Si no lo es, toca **Reescanear**.

### Comprobaciones de seguridad

Cuando el parche esté conectado, pulsa **Comprobación de seguridad**. El parche se comprueba a sí mismo y se purga. Comprueba que se ha formado una gota de insulina en la punta de la aguja. Si no ves ninguna gota, pulsa **Reintentar**. Cuando termine la comprobación, pulsa **Siguiente**.

### Zona y colocación del parche

1. Selecciona la zona donde vas a llevar el parche.
1. Limpia bien la zona con una toallita con alcohol.
1. Quita la cinta protectora y pega el parche en la piel con el punto marcado hacia arriba.
1. Pulsa **Siguiente** cuando el parche esté pegado.

### Inserta la aguja

1. Gira el capuchón de seguridad en la dirección de la flecha y quítalo.
1. Pulsa el botón del aplicador hasta el fondo y mantenlo pulsado 10 segundos. Suena un pitido cuando la aguja está insertada.
1. Quita el aplicador y pulsa **Confirmar inserción**.

Si la inserción falla, **AAPS** te dice cuántos intentos quedan. Cuando no queda ningún intento, el parche lanza la alarma **Error de inserción de la aguja** y hay que cambiarlo.

La administración de insulina empieza en cuanto se confirma la inserción.

## Mensajes de bolo

Si el parche rechaza un bolo, **AAPS** te dice por qué. Por ejemplo, *No se puede administrar el bolo. Bolo disponible: 2,8 U* significa que el parche ahora solo puede administrar esa cantidad.

Si detienes un bolo y el parche no confirma la detención, **AAPS** espera a que termine el bolo y registra la cantidad que informa el parche. Si un bolo no se registró (por ejemplo, porque se detuvo mientras se estaba administrando), **AAPS** lo añade a partir del total del parche y te pide que compruebes la IOB antes de volver a intentarlo.

## Suspender y reanudar la administración de insulina

Pulsa **Suspender infusión** en la pantalla de la bomba y selecciona cuánto tiempo debe pausarse la administración: de 30 minutos a 4 horas, en pasos de 30 minutos. La administración no se reanuda sola: cuando termina la pausa, el parche lanza el aviso **Iniciar insulina**. Pulsa **Reanudar infusión** en la pantalla de la bomba, o **Iniciar insulina** en el aviso, y confirma.

## Descartar un parche

Pulsa **Descartar parche** en la pantalla de la bomba y confirma. La administración de insulina se detiene y el parche ya no se puede usar. Quítate el parche del cuerpo y activa uno nuevo.

Cuando una alarma crítica ha detenido el parche, la alarma ofrece en su lugar **Desactivar parche**. Al pulsarlo, el parche se descarta de la misma forma.

(carelevo-alarms-and-notifications)=

## Alarmas y notificaciones

El parche informa de tres niveles de eventos. Todos se muestran como notificaciones de **AAPS**.

### Alarmas críticas

La administración de insulina se ha detenido. Actúa ahora:

* **Insulina baja**: quedan menos de 10 U. Desactiva el parche y cámbialo.
* **Parche caducado**: el parche ha llegado al final de su vida útil. Desactiva el parche y cámbialo.
* **Batería baja**: descarta el parche y cámbialo.
* **Temperatura alta/baja**: ve a un lugar con una temperatura adecuada, entre 40 ℉ y 99 ℉ (5 ℃ y 37 ℃).
* **Apagado automático**: el parche se detuvo porque no se atendió el aviso de apagado automático. Pulsa **Iniciar insulina** para volver a iniciar la administración basal.
* **Tiempo de aplicación del parche agotado**, **Error en el autodiagnóstico**, **Error del parche**, **Oclusión** y **Error de inserción de la aguja**: desactiva el parche y cámbialo.

### Alertas

La administración de insulina continúa, pero hay algo que necesita tu atención:

* **Insulina baja**: el reservorio ha llegado a la cantidad ajustada en **Ajuste de notificación de insulina baja**. Prepárate para cambiar el parche.
* **El parche caducará pronto** y **La vida útil del parche ha expirado**: cambia el parche.
* **Batería baja**: prepárate para cambiar el parche.
* **Temperatura alta/baja**: la administración se pausa hasta que el parche vuelve a estar entre 40 ℉ y 99 ℉.
* **Apagado automático**: toca **OK**. Si no lo atiendes, el aviso pasa a ser una alarma crítica y la administración se detiene.
* **Activación del parche incompleta**: toca **OK** para completar la activación.
* **Iniciar insulina**: la pausa que ajustaste ha terminado. Toca **Iniciar insulina** para reanudar la administración.
* **Activar el Bluetooth** y **BLE no conectado**: el teléfono no puede comunicarse con el parche. Activa el Bluetooth o comprueba la conexión del parche.

### Avisos informativos

Solo informativos: **Insulina baja**, **Notificación de tiempo de uso del parche** (ha pasado el tiempo ajustado en **Ajuste de notificación de uso del parche**), **Notificación de comprobación del parche**, **Cambio de zona horaria** y **Comprobar glucemia** (un tiempo ajustado después de un bolo).

El parche también informa cuando su propia función de suspensión por glucosa baja (**LGS**) empieza o termina. **AAPS** no usa esta función; el lazo gestiona él mismo la glucosa baja.

## Dónde obtener ayuda

Informa de problemas con el controlador de CareLevo en la [página de issues de AAPS en GitHub](https://github.com/nightscout/AndroidAPS/issues) o en los canales de la comunidad de AAPS; consulta [¿Dónde puedo obtener ayuda?](../GettingHelp/WhereCanIGetHelp.md).
