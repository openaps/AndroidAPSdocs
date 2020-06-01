# Nightscout

## Consideraciones de Seguridad

Además de informar Nightscout también se puede utilizar para controlar AAPS. Por ejemplo, puede establecer objetivos temporales o añadir futuros carbohidratos. Esta información será recogida por la AAPS y actuará de forma correspondiente. Por lo tanto, vale la pena pensar en asegurar el sitio web de Nightscout.

### Ajustes de Nightscout

Puede denegar el acceso público a su sitio de Nightscout utilizando los roles de autenticación [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Ajustes en AndroidAPS

Sólo hay una función de carga NS (sin sincronización) en los valores de AAPS. Al hacerlo, AAPS no recogerá los cambios realizados en Nightscout, tales como objetivos temporales o futuros carbohidratos. Si está utilizando el perfil [NS profile](../Configuration/Config-Builder#ns-profile), los perfiles se sincronizarán entre AAPS y Nightscout a pesar del valor de "upload only" (solo subir).

* Toca el menú de 3 puntos en la esquina superior derecha en la pantalla de inicio de AAPS.
* Seleccione "preferencias".
* Desplácese hacia abajo y toque "Configuración avanzada".
* Activar "sólo carga de NS

![Nightscout solo cargar](../images/NSsafety.png)

### Ajustes de seguridad adicionales

Mantenga su teléfono actualizado, tal como se describe en la seguridad [safety first](../Getting-Started/Safety-first.rst).

## Configuración manual de Nightscout

Se presume que ya usas Nightscout, sino visita la página Nightscout para seguir las instrucciones de montaje. Las siguientes instrucciones son las adiciones que debes hacer a tu sitio. Tu sitio debe ser versión 10 o superior, por lo que comprueba que tengas la última versión de lo contrario recibirás mensajes de error en tu AAPS app.Algunas personas comentan que el lazo cerrado usa más cuota que la gratuita en Azure, por lo que Heroku es la opción preferida.

* Ve a https://herokuapp.com/

* Pincha en App Service name

* Pincha en Application settings (azure) or Settings(ajustes) > "Reveal Config Variables (heroku)

* Añade o edita las variables siguientes:
  
  * ENABLE = careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps
  * DEVICESTATUS_ADVANCED = true
  * PUMP_FIELDS = reservoir battery clock
  * Multitud de alarmas pueden ser configuradas para monitorizar la bomba El % de batería es recomendable: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Opcional: se pueden habilitar los siguientes 'temporizadores' para colorear en el careportal de AAPS: 
    * `BAGE_WARN` = `480` (Aviso pasaron x horas desde el último evento de batería cambiada en Careportal)
  * `BAGE_URGENT` = `504` (advertencia Urgente pasaron x horas desde el último cambio de Batería en Careportal)
  * `CAGE_WARN` = `40` (Aviso pasaron x horas desde el último cambio de cánula en Careportal)
  * `CAGE_URGENT` = `48` (Aviso urgente pasaron x horas desde el último cambio de cánula en el portal Careportal)
  * `IAGE_WARN` = `144` (Aviso pasaron x horas desde el último cambio de cartucho de Insulina en Careportal)
  * `IAGE_URGENT` = `192` (Aviso urgente pasaron x horas desde la última vez que se cambió el cartucho de Insulina en Careportal)
  * `SAGE_WARN` = `160` (Advertencia pasaron x horas desde que se insertó el sensor MCG en Careportal)
  * `SAGE_URGENT` = `168` (Aviso urgente pasaron x horas desde el último suceso de inserción de sensor de MCG en el portal de Careportal)

![Azure](../../images/nightscout1.png)

* Pinchar en guardar arriba en el panel.

## Configuración de Nightscout semi automatizada

Este servicio es ofrecido por el compañero Martin Schiftan de forma gratuita en este momento. Si le gusta el servicio, puede considerar enviarle una pequeña donación (enlace en la navegación en el lado izquierdo).

**Beneficios**

* Puede instalar Nightscout con un par de clics y usarlo directamente. 
* Reducción del trabajo manual mientras Martin trata de automatizar la administración.
* Todos los ajustes se pueden realizar a través de una interfaz web fácil de usar. 
* El servicio incluye una verificación automática de la tasa basal usando Autotune. 
* El servidor se encuentra en Alemania.

<http://ns.10be.de/en/index.html>