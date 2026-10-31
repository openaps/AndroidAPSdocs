# DanaR

*Estas instrucciones sirven para configurar la app y tu bomba si tienes una DanaR. Si en cambio tienes la DanaRS, que salió en 2017, visita [Bomba de insulina DanaRS](./DanaRS-Insulin-Pump.md).*

## Funciones de la bomba con AAPS

* Se comunica con **AAPS** por el Bluetooth propio del teléfono, sin un dispositivo de comunicación adicional.
* Los cambios de zona horaria y de horario de verano no necesitan ninguna acción especial, porque la bomba no usa su propio historial.

## Configuración

* En la bomba, ve a Main Menu > Setting > User Option
* Activa "8. Extended Bolus"

![Bomba DanaR](../images/danar1.png)

* Ve a Main Menu > Setting > Discovery
* En los ajustes del teléfono, ve a Bluetooth, busca dispositivos cercanos, selecciona el número de serie de tu DanaR e introduce tu contraseña (la contraseña de emparejamiento es 0000). Si la DanaR no aparece en la búsqueda, reinicia el teléfono, saca la pila de la DanaR, vuelve a ponerla y repite estos dos pasos.

* En **AAPS**, abre el **Menú** (☰) en la esquina superior izquierda, ve a **Configuración** > **Bomba** y selecciona el tipo de DanaR que tienes (**DanaR**, **DanaR Korean** o **DanaRv2**).
  
  ![Configuración > Bomba con los complementos de DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Abre la pantalla de la bomba: toca **Abrir complemento** en la tarjeta de DanaR (o ve a **Administrar** > **Bomba**).

* Toca **Emparejando**. En la pantalla de emparejamiento: 
  * Introduce la contraseña de tu bomba en **Contraseña de la bomba** (la contraseña por defecto es 1234).
  * En **Selecciona el dispositivo enlazado**, toca el número de serie de tu DanaR. Si la lista está vacía, toca **Abrir ajustes de Bluetooth** y primero empareja la bomba con tu teléfono (consulta el paso anterior). Cuando vuelves a **AAPS**, la bomba aparece en la lista. Si no aparece, toca el icono de actualizar.
  * Toca **Emparejando**. **AAPS** se conecta a la bomba y comprueba la contraseña.
* Para cambiar los ajustes del controlador, toca **Ajustes** en la tarjeta de DanaR en **Configuración** > **Bomba**: 
  * **Velocidad del bolo** (DanaR y DanaRv2): cambia la velocidad del bolo por defecto (12 s/U, 30 s/U o 60 s/U).
  * **Usar bolos extendidos para >200%** (DanaR y DanaR Korean): actívalo si quieres que **AAPS** permita una dosis basal superior al 200 %. Ten en cuenta que esto significa que no puedes usar el lazo con TBR altas mientras usas bolos extendidos para la comida.
* Ajusta el paso basal de la bomba a 0,01 U/h
* Ajusta el paso de bolo de la bomba a 0,1 U. **AAPS** lee el paso de bolo de la bomba y lo usa para cada bolo.
* Habilitar bolos extendidos en bomba

## Cambio de zona horaria al viajar con la bomba Dana R

Para más información sobre viajes entre zonas horarias, consulta la sección [Viajes entre zonas horarias con bombas](#timezone-traveling-danarv2-danars).

## Dónde obtener ayuda

El desarrollo del controlador de DanaR lo hace la comunidad de forma **voluntaria**. Antes de pedir ayuda:

1. **Lee** la sección de esta documentación sobre el tema para confirmar cómo debe funcionar la función.
2. **Pregunta** en el canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw) o en uno de los otros [canales de la comunidad](../GettingHelp/WhereCanIGetHelp.md).
3. **Informa de un error**: busca primero en las [issues existentes](https://github.com/nightscout/AndroidAPS/issues); si el tuyo no aparece, abre una [nueva issue](https://github.com/nightscout/AndroidAPS/issues) y adjunta tus [archivos de registro](../GettingHelp/AccessingLogFiles.md).

Cuando pidas ayuda, indica la marca y el modelo de tu teléfono, la versión de Android, la versión de **AAPS** y una descripción sencilla del problema (qué cambió, cuándo funcionó por última vez).