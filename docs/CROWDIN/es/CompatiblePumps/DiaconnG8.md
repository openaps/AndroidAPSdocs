# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Funciones de la bomba con AAPS

* Se comunica con **AAPS** mediante el Bluetooth propio del teléfono, sin un dispositivo de comunicación adicional.
* Los cambios de horario de verano (DST) y de zona horaria se deben hacer a mano.

## Emparejamiento Bluetooth de la bomba de insulina

- Toca el **menú** (☰) en la esquina superior izquierda.

![El menú con la entrada Configuración](../images/v4/Configuration/configuration_menu.png)

- Toca **Configuración** > **Bomba** y selecciona **Diaconn G8**.

![Configuración > Bomba con el complemento Diaconn G8](../images/v4/Configuration/configuration_pump_list_3.png)

Cuando está seleccionado, la tarjeta **Diaconn G8** muestra dos botones, **Ajustes** y **Abrir complemento**:

![El complemento Diaconn G8 seleccionado en Configuración > Bomba](../images/v4/Pumps/diaconn_g8_enabled.png)

**Ajustes** abre los ajustes del driver de Diaconn G8 (consulta [Ajustes de la bomba de insulina Diaconn G8](#diaconn-g8-insulin-pump-option-setting) más abajo).

**Abrir complemento** (o **Administrar** > **Bomba**) abre la pantalla de la bomba Diaconn G8. Antes de emparejar una bomba, se ve así:

![Pantalla de la bomba Diaconn G8 antes del emparejamiento](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![imagen](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
La captura de pantalla de arriba es de una versión anterior de **AAPS**. En **AAPS** 4 el emparejamiento empieza con el botón **Vincular** de la pantalla de la bomba; ya no existe el ajuste **Bomba seleccionada**.
```

- En la pantalla de la bomba, toca **Vincular**. Se abre la pantalla **Emparejamiento de Bomba Diaconn** y **AAPS** busca bombas cercanas.
- Toca el número de modelo de tu bomba de insulina cuando aparezca en la lista (por ejemplo **DIACONN-65010**).

![Pantalla Emparejamiento de Bomba Diaconn buscando bombas](../images/DiaconnG8/DiaconnG8_05.png)

- Hay dos formas de comprobar tu número de modelo:

1. Los últimos 5 dígitos del número de serie (SN) en la parte trasera de la bomba.
2. Pulsa el botón O > Information > BLE > últimos 5 dígitos.

![imagen](../images/DiaconnG8/DiaconnG8_06.jpg)

- Cuando seleccionas tu bomba, aparece una ventana que pide un código PIN. Introduce el número PIN que muestra tu bomba para completar la conexión.

 ![imagen](../images/DiaconnG8/DiaconnG8_07.jpg)

- Cuando aparezca **¡Vinculación exitosa!**, toca **OK** para volver a la pantalla de la bomba.

## Comprobar el estado de la bomba y sincronizar los registros

- Cuando tu bomba esté conectada, abre la pantalla de la bomba (**Administrar** > **Bomba**). Muestra el estado de la bomba (batería, reservorio, última conexión, último bolo, dosis basal y más).
- Toca **Actualizar** para conectar con la bomba, actualizar el estado y sincronizar los registros.
- Toca **Historial de la bomba** para ver el historial leído de la bomba.

![imagen](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
La captura de pantalla de arriba es de una versión anterior de **AAPS**. En **AAPS** 4 el estado de la bomba se muestra en la pantalla de la bomba (**Administrar** > **Bomba**) y se sincroniza con el botón **Actualizar**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Solución de problemas de Bluetooth

**Qué hacer si la conexión Bluetooth con la bomba no es estable.**

### Método 1) Reinicia AAPS y luego vuelve a comprobar la bomba

- Toca el **menú** (☰) en la esquina superior izquierda.
- Toca **Salir** en la parte inferior del menú.

![El menú con la entrada Salir en la parte inferior](../images/v4/Configuration/configuration_menu.png)

- Vuelve a iniciar **AAPS** y comprueba la conexión con la bomba.

### Método 2) Si el primer método no funciona, desconecta el Bluetooth y vuelve a conectarlo.

- Mantén pulsado el botón Bluetooth de la parte superior durante unos 3 segundos.

![imagen](../images/DiaconnG8/DiaconnG8_11.jpg)

- Pulsa el botón Setting en la bomba de insulina Diaconn G8 emparejada.

![imagen](../images/DiaconnG8/DiaconnG8_12.jpg)

- Unpair (desemparejar).

![imagen](../images/DiaconnG8/DiaconnG8_13.jpg)

- En **AAPS**, abre la pantalla de la bomba (**Administrar** > **Bomba**), toca **Desemparejar** y confirma **¿Restablecer información de emparejamiento?**.
- Repite el proceso de emparejamiento Bluetooth de la bomba (ver arriba).

## Más información

(diaconn-g8-insulin-pump-option-setting)=

### Ajustes de la bomba de insulina Diaconn G8

- **Configuración** > **Bomba** > **Diaconn G8** > **Ajustes**
- O, en la pantalla de la bomba (**Administrar** > **Bomba**), toca el icono de ajustes (rueda dentada) en la esquina superior derecha.

![Ajustes del driver de Diaconn G8](../images/v4/Pumps/diaconn_g8_settings.png)

- **Velocidad del bolo** define la velocidad con la que la bomba administra un bolo.
- Si la opción **Registrar cambios de reservorio** está activada, los datos correspondientes se suben automáticamente al careportal cuando ocurre un evento «Insulin Change» (cambio de insulina).
- Si la opción **Registrar cambio de aguja** está activada, los datos correspondientes se suben automáticamente al careportal cuando ocurre un evento «Site Change» (cambio de sitio).
- Si la opción **Registrar cambios de tubo** está activada, los datos correspondientes se añaden automáticamente como nota cuando ocurre un evento «Tube Change» (cambio de tubo).
- Si la opción **Registrar cambio de batería** está activada, los datos correspondientes se suben automáticamente al careportal cuando ocurre un evento «Battery Change» (cambio de batería). También puedes registrar tú mismo un cambio de batería con **Administrar** > **Cambio de batería de la bomba**. (Nota: para cambiar la batería, primero detén todas las funciones de inyección en curso.)
- **Sincronización con la nube de Diaconn** envía los registros de la bomba a la nube de Diaconn (Diaconn Cloud).

![Menú de acciones de Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
La captura de pantalla de arriba es de una versión anterior de **AAPS**. En **AAPS** 4 un cambio de batería se registra con **Administrar** > **Cambio de batería de la bomba**; ya no existe la pestaña **Acciones**.
```

### Función de bolo extendido

- Si usas el bolo extendido, se desactiva el lazo cerrado.
- Consulta [esta página](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) para saber por qué el bolo extendido no funciona en un entorno de lazo cerrado.

## Dónde obtener ayuda

El desarrollo del driver de Diaconn G8 lo hace la comunidad de forma **voluntaria**. Antes de pedir ayuda:

1. **Lee** la sección correspondiente de esta documentación para confirmar cómo debe funcionar la función.
2. **Pregunta** en el canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw) o en uno de los otros [canales de la comunidad](../GettingHelp/WhereCanIGetHelp.md).
3. **Informa de un error** buscando primero en los [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); si el tuyo no aparece, abre un [nuevo problema](https://github.com/nightscout/AndroidAPS/issues) y adjunta tus [archivos de registro](../GettingHelp/AccessingLogFiles.md).

Cuando pidas ayuda, indica la marca y el modelo de tu teléfono, la versión de Android, la versión de **AAPS** y una descripción sencilla del problema (qué cambió y cuándo funcionó por última vez).
