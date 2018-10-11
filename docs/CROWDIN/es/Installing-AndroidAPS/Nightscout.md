# Nightscout

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

![Azure](../../images/nightscout1.png)

* Pinchar en guardar arriba en el panel.

## ns.10be.de

This service is offered by fellow looper Martin Schiftan free of charge at the moment. You can install Nightscout with a few clicks and use it directly. He tries to automate the administration to such an extent that you don't have to do much manual work anymore. All settings can be made via a user-friendly web interface. The service includes an automated basal rate check using Autotune. The server is located in Germany.

<http://ns.10be.de/en/index.html>