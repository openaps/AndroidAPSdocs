# Posibles Futuros controladores de bombas de insulina

Esta es una lista de algunas bombas que hay en el mercado, y el estado de soporte para ellas en cualquiera de los sistemas de lazo cerrado así como su estado en AAPS. Al final hay algo de información sobre lo que se requiere para que una bomba tenga "capacidad de lazo cerrado" o loopeable.

## Medtronic

**Estado del lazo:** algunas versiones anteriores de bombas son loopables, pero no los modelos más nuevos (consulte abajo)

**Otras implementaciones:** OpenAPS, Loop

**Implementaciones Java:** implementación parcial disponible [Rountrip2](https://github.com/TC2013/Roundtrip2)

**Estado de implementación de AAPS:** Empezando. Vea el [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), rama riley_link_medtronic (rama predeterminada). 

**Estado:** Integración base realizada (ficha de Medtronic), ahora tenemos la bomba virtual de Medtronic. Por el momento, la mayor parte del trabajo se está haciendo en [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) para que funcione el marco y los comandos. Hay un proyecto (Medtronic) y entradas abiertas para el desarrollo futuro en ese repositorio, el desarrollo se está realizando en la rama dev_medtronic (que es la rama predeterminada allí). También hay sala de gitter: RileyLinkAAPS/Lobby

**Requisito de hardware para AAPS:** RileyLink con firmware de Medtronic (RileyLink 1.0 - 900 Mhz)

Versiones en lazo: 512-522, 523 (Fw 2.4A o inferior), 554 (firmware de la UE 2.6A o inferior, firmware de CA 2.7A o inferior). Lo mismo para las versiones 7xx. El resto de los dispositivos no son compatibles, y probablemente no lo sean.

***
## Insulet Omnipod

**Estado:** no es compatible en este momento con lazo cerrado, pero hay mucho trabajo en proceso de decodificación del protocolo Omnipod - [OpenOmni](http://www.openomni.org/).

**Otras implementaciones:** ninguna disponible todavía. Ver [Openomni en github](https://github.com/openaps/openomni)

**Implementaciones Java:** ninguna.

**Estado de implementación AAPS:** estamos esperando:

 * Controlador Medtronic AAPS para implementar la capa RileyLink
 * El pirateo del protocolo se realiza para comandos de requisitos mínimos (ver abajo en el documento)

**Requisito de hardware para AAPS:** RileyLink con firmware Omnipod (400 Mhz) - No disponible todavía
***

## Bomba Ypsomed

**Estado:** Versión 1 - 1.5 (2Q / 2018) no son candidatos para lazo cerrado. Si bien tienen comunicación BT, parece que la comunicación es muy limitada (unidireccional: Bomba-> Aplicación). Tal vez esto cambie en las próximas versiones.

**Requisito de hardware para AAPS:** Probablemente ninguno. Está BT habilitado.

***
## Bomba Cellnovo

**Estado:** actualmente no es compatible con ninguno de los sistemas de lazos cerrados. Pump es un candidato de Loop, pero como el protocolo se desconoce en ese momento, no veo que esta bomba sea compatible muy pronto.

**Requisito de hardware para AAPS:** Probablemente ninguno. Está BT habilitado.
***

## Animas Vibe

**Estado:** no loopable. Sin posibilidad de control remoto.

***
## Animas Ping

**Estado:** actualmente no es compatible con ninguno de los sistemas de lazo cerrado, pero podría ser un candidato, ya que tiene algún tipo de posibilidad remota. Dado que su bomba es mucho más antigua, es posible que nunca tenga soporte en ninguna parte.


***
## Requisitos para que la bomba sea loopable o candidata a lazo cerrado## 

**Requisito previo**

 * La bomba tiene que soportar algún tipo de control remoto. (BT, frecuencia de radio, etc.)
 * El protocolo debe estar pirateado / documentado / etc.

**Requisitos mínimos**

 * Establecer la frecuencia basal temporal
 * Obtener el estado
 * Cancelar tasa basal temporal

**Para oref1 (SMB) o Bolusing:**

 * Establecer Bolus

**Es bueno que tenga:**

* Cancelar Bolus
* Obtener perfil basal
* Establecer perfil basal
* Leer historial

**Otro**

 * Establecer bolo extendido
 * Cancelar bolo extendido

## Otras bombas de insulina

Si tiene otras bombas en las que le gustaría ver el estado, contácteme (@andyrozman en gitter). En futuras versiones, se agregará una gran cantidad de configuraciones de la bomba para que estén abiertas en lazo (podrá seleccionar el tipo de bomba virtual en la configuración y se cargará su configuración [ Ver Solicitud de función n.º 863](https://github.com/MilosKozak/AndroidAPS/issues/863)).

