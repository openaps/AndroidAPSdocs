Comandos SMS
**************************************************
La seguridad Primero
==================================================
* AndroidAPS allows you to control a child's phone remotely via text message. If you enable this SMS Communicator, always remember that the phone set up to give remote commands could be stolen. So always protect it at least by a PIN code.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. It is advisable to set this up so that confirmation texts are sent to at least two different phone numbers in case one of the receiving phones is stolen.
* **Si usted envia un bolo por Comandos SMS debe introducir hidratos de carbono a través de Nightscout (NSClient, página Web...)!** Si no lo hace el IOB sería correcto con bajos COB lo potencialmente conduce a no realizar la corrección de bolo dado que AAPS supone que tiene demasiada insulina activa.

Cómo funciona
==================================================
* La mayoría de los ajustes de los objetivos temporales, después de AAPS, etc. se puede realizar en la aplicación ` NSclient <../Children/Children.html>` _ en un teléfono Android con una conexión a Internet.
* Los bolsos no pueden introducirse a través de Nightscout, pero puedes usar comandos SMS.
* If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.
* Si desea utilizar más de un número:

  * Introduzca sólo un número.
  * Verifique que este número funcione por medio del envío y confirmación de un comando de SMS.
  * Ingrese número(s) adicional(es) separados por punto y coma(s) sin espacio.
  
    .. imagen:: ../images/SMSCommandsSetup.png
      :alt: Configuración de comandos SMS


* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Confirm command by sending the code provided in SMS from AndroidAPS phone where neccessary.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

Comandos
==================================================

Las mayúsculas y minúsculas son irrelevantes al enviar comandos.

Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. imagen:: ../images/SMSCommands.png
  :alt: Ejemplo de comandos SMS

Loop
--------------------------------------------------
* LOOP STOP/DISABLE
   * Respuesta: El lazo se ha inhabilitado
* LOOP START/ENABLE
   * Respuesta: El lazo se ha habilitado
* LOOP STATUS
   * La respuesta depende del estado actual
      * Lazo inactivo
      * Lazo activo
      * Suspendido (10 min)
* LOOP SUSPEND 20
   * Respuesta: El lazo esta suspendido durante 20 minutos
* LOOP REINICIADO
   * Respuesta: El lazo se ha reanudado

Datos de CGM
--------------------------------------------------
* BG
   * Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Response: To send calibration 5.6 reply with code Rrt
   * Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code EmF [Note: Code EmF is just an example]
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code Swe
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code Swe
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code Swe
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code Swe

Bolus
--------------------------------------------------
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Profile
--------------------------------------------------
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Otros
--------------------------------------------------
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Troubleshooting
==================================================
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
