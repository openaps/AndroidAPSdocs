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

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Tu sitio debe ser versión 10 o superior, por lo que comprueba que tengas la última versión de lo contrario recibirás mensajes de error en tu AAPS app.Algunas personas comentan que el lazo cerrado usa más cuota que la gratuita en Azure, por lo que Heroku es la opción preferida.

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