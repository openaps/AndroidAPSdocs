# Nightscout

(Nightscout-security-considerations)=

## Consideraciones de seguridad

Además de informar, Nightscout también se puede utilizar para controlar AAPS. Es decir, puedes establecer objetivos temporales o agregar carbohidratos futuros. Esta información será recogida por AAPS y actuará en consecuencia. Por lo tanto, vale la pena pensar en securizar tu sitio web de Nightscout.

### Ajustes de Nightscout

Puedes denegar el acceso público a tu sitio de Nightscout utilizando [roles de autenticación](https://nightscout.github.io/nightscout/security).

### AAPS settings

Hay una función de sólo carga a NS (sin sincronización) en la configuración de AAPS. Al hacerlo, AAPS no registrará los cambios realizados en Nightscout, como objetivos temporales o carbohidratos futuros.

* Toca el menú de tres puntos en la esquina superior derecha de la pantalla de inicio de AAPS
* Selecciona "Preferencias"
* Desplázate hacia abajo y toca "Configuración avanzada"
* Activa "Sólo carga de NS"

![Nightscout solo subida](../images/NSsafety.png)

### Configuraciones de seguridad adicionales

Mantén tu teléfono actualizado como se describe en [seguridad primero](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Configuración manual de Nightscout

Se asume que ya tienes un sitio de Nightscout; si no lo tienes, visita la página de [Nightscout](http://nightscout.github.io/nightscout/new_user/) para obtener instrucciones completas sobre la configuración. Las siguientes instrucciones son los ajustes que también deberás agregar a tu sitio de Nightscout. Tu sitio de Nightscout debe ser al menos de la versión 10 (mostrado como 0.10...), así que verifica que estás utilizando la [última versión](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version); de lo contrario, recibirás un mensaje de error en tu aplicación AAPS. Algunas personas encuentran usuarios "loopeando" que utilizan más de la cuota gratuita de Azure, por lo que Heroku es la opción preferida.

* Ve a https://herokuapp.com/

* Haz clic en el nombre de tu servicio de aplicaciones

* Haz clic en "Configuración de la aplicación" (Azure) o "Settings> "Reveal Config Variables" (Heroku).

* Agrega o edita las variables de la siguiente manera:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Se pueden configurar varias alarmas para [monitorear la bomba](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), se recomienda en particular la alarma de porcentaje de batería: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Haz clic en "Save" en la parte superior del panel.

## Nightscout as a paid SaaS (Software as a Service)

While Nightscout is an free open source software which you can download yourself free of charge you need

1. a cloud service provider to host your own Nightscout instance

2. invest time to setup your Nightscout instance and MongoDB and

3. operate your Nightscout instance which can be as easy as updating from time to time the Nightscout instance or much more complex if errors occur.

An alternative can be to pay for these SaaS services and get rid of these tasks.

Here you find a randomly ordered list of possible service providers. We will not recommend any of them but we want to give new users a place to jump to their web site and inform themself!

[![ns.10be.de](../images/ns.10be.de-logo_halb_klein.jpg)](https://ns.10be.de/en/index.html)

[![T1Pal](../images/t1_pal_bear_bw.png)](https://t1pal.com/)