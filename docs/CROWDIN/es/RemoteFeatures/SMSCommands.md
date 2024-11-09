# Comandos SMS

```{admonition} Documentation
:class: note

This section may contain outdated content. Please also see the page [SMS Commands](#RemoteControl-sms-commands)).

```

## La seguridad primero
.
- AndroidAPS te permite controlar el teléfono de un niño de forma remota mediante mensajes de texto. Si activas esta función "SMS Communicator", recuerda siempre que el teléfono configurado para dar comandos remotos podría ser robado. Por lo que protege siempre el móvil con código PIN. Se recomienda usar una contraseña compleja o usar datos biométricos.
- Additionally it is recommended to allow a [second phone number](#SMSCommands-authorized-phone-numbers) for SMS commands. So you can use second number to [temporary disable](#SMSCommands-other) SMS communicator in case your main remote phone gets lost or stolen.
- AndroidAPS también te avisará por mensaje de texto si tus comandos remotos, tales como bolos o cambios de perfil, se han llevado a cabo. Es aconsejable, por seguridad, configurar esta función para que los textos de confirmación se envíen al menos a dos números de teléfono diferentes, así si falla (o ha sido robado) uno, quedará el otro.
- **Si administras una dosis de insulina a través de comandos SMS, debes ingresar los carbohidratos a través de Nightscout (AAPSClient, sitio web...)** Si no lo haces, la cantidad de insulina activa en el organismo (IOB) podría ser incorrecta, lo que potencialmente llevaría a no realizar una corrección adecuada, ya que AAPS asumiría que tienes demasiada insulina activa.
- Desde la versión 2.7 de AndroidAPS se debe utilizar una aplicación de autenticación por contraseña de un sólo uso, para mejorar la seguridad al usar la opción de comandos SMS.

## Configurar comandos SMS

![SMS Commands Setup](../images/SMSCommandsSetup.png)

- Most of the adjustments of temp targets, following AAPS etc. can be done on [AAPSClient app](../RemoteFeatures/RemoteMonitoring.md) on an Android phone with an internet connection.
- Los bolos no pueden poner mediante Nightscout, pero se pueden usar los comandos SMS.
- Si utilizas un iPhone como seguidor y, por lo tanto, no puedes usar la aplicación AAPSClient, hay comandos SMS adicionales disponibles.
- En los ajustes de tu teléfono Android, ve a aplicaciones > AAPS > Permisos y activa el de SMS

(SMSCommands-authorized-phone-numbers)=
### Números de teléfono permitidos

- En AndroidAPS ir a Tabla de configuraciones > Comunicador SMS \*\* y añadir el número(s) de teléfono que deseas habilitar para enviar comandos SMS (separados por punto y coma - p.ej. +3412345678;+3412345679)

- Ten en cuenta que el signo "+" delante del número puede o no ser necesario según tu ubicación. Para determinarlo, envía un texto de muestra que muestre el formato recibido en la pestaña de Comunicador de SMS.

- Habilitar 'Permitir comandos remotos vía SMS'.

- Si quieres utilizar más de un número:

  - Añade sólo un número.

  - Asegúrate de que ese número funciona enviando y confirmando comandos SMS.

  - Añade número/os adicionales separados por punto y coma, sin espacios.

    ![SMS Commands Setup multiple numbers](../images/SMSCommandsSetupSpace2.png)

### Minutos entre los comandos de bolos

- Puedes definir un retraso mínimo entre dos bolos enviados mediante SMS.
- Por razones de seguridad, hay que añadir al menos dos números de teléfono autorizados para editar este valor.

### Es obligatorio añadir el PIN al final del token

- Por razones de seguridad, el código de respuesta tiene que ir seguido de un PIN.

- Reglas del PIN:

  - De 3 a 6 dígitos
  - No puede ser los mismos dígitos (p.ej. 1111)
  - No pueden ser números consecutivos (p.ej. 1234)

### Configuración de la aplicación de autenticación

- Se utiliza una doble autenticación, para mejorar la seguridad.

- Puedes utilizar cualquier aplicación de autenticación que soporte tokens RFC 6238 TOTP. Las aplicaciones más comunes gratuitas son las siguientes:

  - [Authy](https://authy.com/download/)
  - Google Authenticator - [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) / [iOS](https://apps.apple.com/de/app/google-authenticator/id388497605)
  - [LastPass Authenticator](https://lastpass.com/auth/)
  - [FreeOTP Authenticator](https://freeotp.github.io/)

- Instala en tu teléfono la aplicación de autenticación preferida y escanea el código QR mostrado en AAPS.

- Prueba la contraseña de un solo uso introduciendo el token mostrado en tu aplicación de autenticación y el PIN que has configurado en AAPS. Example:

  - El PIN obligatorio es 2020
  - El token generado por la aplicación de autenticación TOTP es 457051
  - Añade 4570512020

- El texto rojo "PIN INCORRECTO" cambiará **automáticamente** a verde "OK" si lo has añadido correctamente. **¡No hay que pulsar ningún botón!**

- La hora en ambos teléfonos tiene que estar sincronizada. La mejor práctica es configurarla de forma automática desde la red. Las diferencias de tiempo pueden causar problemas de autenticación.

- Usa el botón "REINICIAR AUTENTICADORES" si quieres eliminar los autenticadores aprovisionados.  (Al restablecer el autenticador se invalidan TODOS los autenticadores ya aprovisionados. Tendrás que volver a configurarlos)

## Uso de comandos SMS

- Send a SMS to the phone with AAPS running from your approved phone number(s) using any of the [commands](#commands) below.

- El teléfono que ejecuta AAPS responderá para confirmar el éxito del comando o del estado solicitado.

- Confirma el comando enviando el código donde sea necesario. Example:

  - El PIN obligatorio es 2020
  - El token generado por la aplicación de autenticación TOTP es 457051
  - Añade 4570512020

**Sugerencia**: Puede ser útil tener SMS ilimitados en tu plan de teléfono (para cada teléfono utilizado), si se van a enviar muchos SMS.

(SMSCommands-commands)=
## Comandos

Commands must be sent in English, the response will be in your local language if the response string is already [translated](#translations-translate-strings-for-AAPS-app).

![SMS Commands Example](../images/SMSCommands.png)

### Loop

- LOOP STOP/DISABLE \* Respuesta: El lazo ha sido desactivado

- LOOP START/ENABLE \* Respuesta: El lazo ha sido activado

- LOOP STATUS

  - La respuesta depende del estado actual

    - El lazo está desactivado
    - El lazo está activado
    - Suspendido (10 min)

- LOOP SUSPEND 20 \* Respuesta: El lazo se ha suspendido durante 20 minutos

- LOOP RESUME \* Respuesta: El lazo se ha reanudado

- LOOP CLOSED \* Response: Current loop mode: Closed Loop

- LOOP LGS \* Response: Current loop mode: Low Glucose Suspend

### Datos del MCG

- BG \* Respuesta: Última BG: 5.6 hace 4min, Delta: -0,2 mmol, IOB: 0.20U (Bolo: 0.10U Basal: 0.10U)
- CAL 5.6 \* Respuesta: Para enviar la calibración 5.6, responde con el código de la aplicación Authenticator para el Usuario seguido del PIN. \* Respuesta después de recibir el código correcto: Calibración enviada (** Si xDrip está instalado. Debe habilitarse la aceptación de calibraciones en xDrip+**)

### Basal

- BASAL STOP/CANCEL \* Respuesta: Para detener la basal temporal, responde con el código de la aplicación de autenticación del usuario seguido del PIN
- BASAL 0.3 \* Respuesta: Para iniciar basal de 0,3U/h durante 30 minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- BASAL 0.3 20 \* Respuesta: Para iniciar basal de 0,3U/h durante 20 minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- BASAL 30% \* Respuesta: Para iniciar basal al 30% durante 30 minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- BASAL 30% 50 \* Respuesta: Para iniciar basal al 30% durante 50 minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN

### Bolo

No se permite el bolo remoto en los próximos 15 minutos (este valor sólo es editable si se han agregado 2 números de teléfono) después del último comando de bolo o comandos remotos. Por lo tanto, la respuesta depende del momento en que se administró el último bolo.

- BOLUS 1.2 \* Respuesta A: Para administrar un bolo de 1.2U, responda con el código de la aplicación de autenticación del usuario seguido del PIN. \* Respuesta B: Bolo remoto no disponible. Inténtelo de nuevo más tarde.
- BOLUS 0,60 MEAL \* Si especifica el parámetro opcional MEAL, esto establece el Objetivo Temporal para COMIDA (los valores predeterminados son: 90 mg/dL, 5.0 mmol/l durante 45 minutos). \* Respuesta A: Para administrar un bolo para la comida de 0,60U, responda con el código de la aplicación de autenticación del usuario seguido del PIN \* Respuesta B: Bolos remotos no disponibles.
- CARBS 5 \* Respuesta: Para ingresar 5 gramos a las 12:45, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- CARBS 5 17:35/5:35PM \* Respuesta: Para ingresar 5 gramos a las 17:35, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- EXTENDED STOP/CANCEL \* Respuesta: Para detener el bolo extendido, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- EXTENDED 2 120 \* Respuesta: Para iniciar un bolo extendido de 2U durante 120 minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN

### Profile

- PROFILE STATUS \* Respuesta: Perfil1
- PROFILE LIST \* Respuesta: 1.\`Perfil1\` 2.\`Perfil2\`
- PERFIL 1 \* Respuesta: Para cambiar al perfil Perfil1 al 100%, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- PROFILE 2 30 \* Respuesta: Para cambiar al perfil Perfil2 al 30%, responda con el código de la aplicación de autenticación del usuario seguido del PIN

(SMSCommands-other)=
### Otros

- TREATMENTS REFRESH \* Respuesta: Actualizar tratamientos desde NS
- NSClient RESTART \* Response: NSCLIENT RESTART SENT
- PUMP \* Respuesta: Última conexión: hace 1 minuto. Temp: 0,00U/h @11:38. 5/30 min. IOB: 0,5 U. Reservorio: 34 U. Batería: 100%
- PUMP CONNECT \* Respuesta: Bomba reconectada
- PUMP DISCONNECT *30* \* Respuesta: Para desconectar la bomba durante *30* minutos, responda con el código de la aplicación de autenticación del usuario seguido del PIN
- SMS DISABLE/STOP \* Respuesta: Para desactivar el Servicio Remoto de SMS, responda con el código "Any". Recuerda que solo podrás activarlo de nuevo desde el teléfono principal de AAPS.
- TARGET MEAL/ACTIVITY/HYPO \* Respuesta: Para configurar el Objetivo Temporal COMIDA/ACTIVIDAD/HIPO, responde con el código de la aplicación de autenticación del usuario seguido del PIN
- TARGET STOP/CANCEL \* Respuesta: Para cancelar el Objetivo Temporal, responde con el código de la aplicación de autenticación del usuario seguido del PIN
- HELP \* Respuesta: Glucemia, Lazo, Tratamientos, ...
- HELP BOLUS \* Respuesta: BOLO 1.2, BOLO 1.2 COMIDA

(SMSCommands-troubleshooting)=
## Troubleshooting

### Múltiples SMS

Si recibes el mismo mensaje una y otra vez (por ejemplo, cambio de perfil), es probable que hayas configurado un bucle con otras aplicaciones. Podría ser con xDrip+, por ejemplo. Si es así, asegúrate de que xDrip+ (u cualquier otra aplicación) no esté subiendo tratamientos a NS.

Si la otra aplicación está instalada en varios teléfonos, asegúrate de desactivar la subida de datos en todos ellos.

### Los comandos SMS no funcionan en teléfonos Samsung

Hubo un informe sobre comandos SMS que dejaron de funcionar después de una actualización en el teléfono Galaxy S10. Podría resolverse desactivando 'Enviar como mensaje de chat'.

![Disable SMS as chat message](../images/SMSdisableChat.png)
### Aplicación Mensajes de Android

Si tienes problemas para enviar o recibir comandos SMS con la aplicación Mensajes de Android, desactiva el cifrado de extremo a extremo en los teléfonos tanto del cuidador como del niño.
 - Abre la conversación SMS específica en la aplicación Mensajes
 - Selecciona los tres puntos (opciones de menú) en la esquina superior derecha
 - Selecciona 'Detalles'
 - Activa 'Solo enviar mensajes SMS y MMS'
