Comandos SMS
**************************************************
La seguridad Primero
==================================================
* AndroidAPS te permite controlar el teléfono de un niño de forma remota mediante mensajes de texto. Si activas esta función "SMS Communicator", recuerda siempre que el teléfono configurado para dar comandos remotos podría ser robado. Por lo que protege siempre el móvil con código PIN.
* AndroidAPS también te avisará por mensaje de texto si tus comandos resmotos, tales como bolos o cambios de perfil, se han llevado a cabo. Es aconsejable, por seguridad, configurar esta función para que los textos de confirmación se envíen al menos a dos números de teléfono diferentes, así si falla (o ha sido robado) uno, quedará el otro.
* **Si usted envia un bolo por Comandos SMS debe introducir hidratos de carbono a través de Nightscout (NSClient, página Web...)!** Si no lo hace el IOB sería correcto con bajos COB lo potencialmente conduce a no realizar la corrección de bolo dado que AAPS supone que tiene demasiada insulina activa.
* As of AndroidAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.
* Your remote device should be protected with strong password or biometrics.
* Additionally it is recommended to allow a `second phone number <#authorized-phone-numbers>`_ for SMS commands. So you can use second number to `temporary disable <#other>`_ SMS communicator in case your main remote phone gets lost or stolen.

Setup SMS commands
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: Configuración de comandos SMS
      
* La mayoría de los ajustes de los objetivos temporales, después de AAPS, etc. can be done on `NSClient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Los bolsos no pueden introducirse a través de Nightscout, pero puedes usar comandos SMS.
* If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.

* En los ajustes de tu móvil Android ve a aplicaciones > AndroidAPS > permisos y habilitar SMS

Authorized phone numbers
-------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +6412345678;+6412345679) 
* Enable 'Allow remote commands via SMS'.
* Si desea utilizar más de un número:

  * Introduzca sólo un número.
  * Verifique que este número funcione por medio del envío y confirmación de un comando de SMS.
  * Ingrese número(s) adicional(es) separados por punto y coma(s) sin espacio.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS Commands Setup multiple numbers

Minutes between bolus commands
-------------------------------------------------
* You can define the minimum delay between to boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
-------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* PIN rules:

   * 3 to 6 digits
   * not same digits (i.e. 1111)
   * not in a row (i.e. 1234)

Authenticator setup
-------------------------------------------------
* Two-factor authentication is used to improve safety.
* You can use any Authenticator app that supports RFC 6238 TOTP tokens. Popular free apps are:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Install the authenticator app of your choice on your follower phone and scan the QR code shown in AAPS.
* Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. Ejemplo:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020
   
* Red text "WRONG PIN" will change **automatically** to green "OK" if entry is correct. **There is no button you can press!**
* Time on both phones must be synchronized. Bestpractice is automaticaly from network. Time differences might lead to authentication problems.
* Use button "RESET AUTHENTICATORS" if you want to remove provisions.

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands <../Children/SMS-Commands.html#commands>`_ below. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. Ejemplo:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020

** Importante**: Puede ser útil tener una tarifa plana de SMS para ambos teléfonos, si se envían muchos SMS.

Comandos
==================================================
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
   * Respuesta: Último BG: 5,6 4min atrás, Delta: -0,2 mmol, IOB: 0,20U (Bolo: 0,10U Basal: 0,10U)
* CAL 5.6
   * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
   * Respuesta después de recibir el código correcto: Calibración enviada (**Si xDrip está instalado. Debe estar habilitado aceptar calibración en xDdrip+**)

Dosis Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolo
--------------------------------------------------
El bolo remoto no está permitido dentro de 15 minutos -valor editable sólo si 2 números de teléfono lo añaden- después del último comando de bolo o comandos remotos! *Por lo tanto la respuesta depende del tiempo en que se dio el último bolo.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
   * Respuesta B: Los bolos remotos no están disponibles. Vuelve a intentarlo más tarde.
* BOLUS 0,60 MEAL
   * Si especifica el parámetro opcional MEAL, esto establece el objetivo temporal MEAL (valores por defecto son: 90 mg/dL, 5,0 mmol/l para 45 minutos).
   * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
   * Respuesta B: Los bolos remotos no están disponibles. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

Perfil
--------------------------------------------------
* PROFILE STATUS
   * Respuesta: Perfil1
* LISTADO DE PERFILES
   * Respuesta: 1. ` Profile1 ` 2. ` Profile2 `
* PERFIL 1
   * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

Otros
--------------------------------------------------
*Actualizar tratamientos
   * Respuesta: Actualizar los tratamientos desde NS
*REINICIAR NSCLIENT
   * Respuesta: NSCLIENT REINICIAR de 1 receptor
* BOMBA
   * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
   * Response: Pump reconnected
* PUMP DISCONNECT *30*
   * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISHABILITADO/STOP
   * Respuesta: Para inhabilitar la respuesta de servicio remoto de SMS responda con el código Any. Ten en cuenta que puedes reactivarlo directamente desde el smartphone maestro AAPS solamente.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* AYUDA
   * Respuesta: BG, LOOP, TRATAMIENTOS, .....
* AYUDA BOLUS
   * Respuesta: BOLUS 1.2 BOLUS 1.2 MEAL

Solución de problemas
==================================================
Múltiples SMS
--------------------------------------------------
Si recibe el mismo mensaje una y otra vez (es decir, cambio de perfil) probablemente hayas establecido un circulo con otras apps. Podría ser con xDrip +, por ejemplo. Si es así, por favor, asegúrese de que xDrip + (o cualquier otra aplicación) no sube los tratamientos a NS. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

Los comandos SMS no funcionan en los teléfonos de Samsung
--------------------------------------------------
Hubo un reporte sobre los comandos de SMS que se detenían después de una actualización en el teléfono Galaxy S10. Se puede resolver mediante el desetiquetado de 'enviar como mensaje de conversación '.

.. imagen:: ../images/SMSdisableChat.png
  :alt: Desactivar SMS como mensaje de chat
