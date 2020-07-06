Comandos SMS
**************************************************
La seguridad Primero
==================================================
* AndroidAPS te permite controlar el teléfono de un niño de forma remota mediante mensajes de texto. Si activas esta función "SMS Communicator", recuerda siempre que el teléfono configurado para dar comandos remotos podría ser robado. Por lo que protege siempre el móvil con código PIN.
* AndroidAPS también te avisará por mensaje de texto si tus comandos resmotos, tales como bolos o cambios de perfil, se han llevado a cabo. Es aconsejable, por seguridad, configurar esta función para que los textos de confirmación se envíen al menos a dos números de teléfono diferentes, así si falla (o ha sido robado) uno, quedará el otro.
* **Si usted envia un bolo por Comandos SMS debe introducir hidratos de carbono a través de Nightscout (NSClient, página Web...)!** Si no lo hace el IOB sería correcto con bajos COB lo potencialmente conduce a no realizar la corrección de bolo dado que AAPS supone que tiene demasiada insulina activa.

Cómo funciona
==================================================
* La mayoría de los ajustes de los objetivos temporales, después de AAPS, etc. se puede realizar en la aplicación ` NSclient <../Children/Children.html>` _ en un teléfono Android con una conexión a Internet.
* Los bolsos no pueden introducirse a través de Nightscout, pero puedes usar comandos SMS.
* Si utiliza un iPhone como seguidor y, por lo tanto, no puede utilizar NSclient, hay otros mandatos de SMS disponibles.

* En los ajustes de tu móvil Android ve a aplicaciones > AndroidAPS > permisos y habilitar SMS
* En AndroidAPS vaya a Preferencias > Comunicaciones SMS e introduce el número(s) de teléfono que será habilitado para enviar comandos SMS (separados por punto y coma, y un espacio después del punto y coma - por ejemplo,. +4412345678; +4412345679) y también habilita 'Permitir comandos remotos via SMS'.
* Si desea utilizar más de un número:

  * Introduzca sólo un número.
  * Verifique que este número funcione por medio del envío y confirmación de un comando de SMS.
  * Ingrese número(s) adicional(es) separados por punto y coma(s) sin espacio.
  
    .. imagen:: ../images/SMSCommandsSetup.png
      :alt: Configuración de comandos SMS


* Envie SMS al teléfono con AndroidAPS desde el número(s) del teléfono(s) aprobado(s) utilizando cualquiera de los comandos siguientes en ** LETRAS MAYUSCULAS* *, el teléfono responderá para confirmar el éxito del comando o el estado solicitado. Confirme el comando, enviando el código proporcionado por el SMS enviado desde el teléfono AndroidAPS cuando sea necesario.

** Importante**: Puede ser útil tener una tarifa plana de SMS para ambos teléfonos, si se envían muchos SMS.

Comandos
==================================================

Las mayúsculas y minúsculas son irrelevantes al enviar comandos.

Los comandos deben enviarse en inglés, la respuesta estará en el idioma local si la serie de respuesta ya está `traducida <../translations.html#translate-strings-for-androidaps-app>` _.

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
   *Respuesta: Para enviar calibración 5.6 enviar código Rrt
   * Respuesta después de recibir el código correcto: Calibración enviada (**Si xDrip está instalado. Debe estar habilitado aceptar calibración en xDdrip+**)

Dosis Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Respuesta: Para detener la basal temporal responda con el código EmF [ Nota: el Código EmF es sólo un ejemplo]
* BASAL 0.3
   * Respuesta: Para iniciar una basal 0.3 U/h durante 30 min responder con código Swe
* BASAL 0.3 20
   * Respuesta: Para iniciar una basal 0.3 U/h durante 20 min responder con código Swe
* BASAL 30%
   * Respuesta: Para iniciar una basal 30% durante 30 min responder con código Swe
* BASAL 30% 50
   * Respuesta: Para iniciar una basal 30% durante 50 min responder con código Swe

Bolo
--------------------------------------------------
El bolo remoto no está permitido dentro de 15 minutos -valor editable sólo si 2 números de teléfono lo añaden- después del último comando de bolo o comandos remotos! *Por lo tanto la respuesta depende del tiempo en que se dio el último bolo.

* BOLUS 1.2
   * Respuesta A: Para entregar el bolo 1.2 U responder con el código de Rrt
   * Respuesta B: Los bolos remotos no están disponibles. Vuelve a intentarlo más tarde.
* BOLUS 0,60 MEAL
   * Si especifica el parámetro opcional MEAL, esto establece el objetivo temporal MEAL (valores por defecto son: 90 mg/dL, 5,0 mmol/l para 45 minutos).
   * Respuesta A: Para entregar el bolo Meal 0.60 U responder con el código de Rrt
   * Respuesta B: Los bolos remotos no están disponibles. 
* CARBS 5
   * Respuesta: Para ingresar 5g a las 12:45 responder con el código EmF
* CARBS 5 17:35/5:35PM
   * Respuesta: Para ingresar 5g a las 17:35 responder con el código EmF
* EXTENDED STOP/CANCEL
   * Para detener un bolo extendido, responder con el código EmF
* EXTENDED 2 120
   * Respuesta: Para iniciar un bolo extendido de 2U durante 120 min responder con código EmF

Perfil
--------------------------------------------------
* PROFILE STATUS
   * Respuesta: Perfil1
* LISTADO DE PERFILES
   * Respuesta: 1. ` Profile1 ` 2. ` Profile2 `
* PERFIL 1
   * Respuesta: Para cambiar el perfil a Profile1 100% responder con el código Any
* PROFILE 2 30
   * Respuesta: Para cambiar el perfil a Profile2 30% responder con el código Any

Otros
--------------------------------------------------
*Actualizar tratamientos
   * Respuesta: Actualizar los tratamientos desde NS
*REINICIAR NSCLIENT
   * Respuesta: NSCLIENT REINICIAR de 1 receptor
* BOMBA
   * Respuesta: Última conexión: 1 min antes Temporal: 0.00U/h @11:38 5/30min IOB: 0.5U Reservorio: 34U Batt: 100
* SMS DISHABILITADO/STOP
   * Respuesta: Para inhabilitar la respuesta de servicio remoto de SMS responda con el código Any. Ten en cuenta que puedes reactivarlo directamente desde el smartphone maestro AAPS solamente.
* TARGET MEAL/ACTIVITY/HYPO   
   * Respuesta: Para establecer la respuesta MEAL/ACTIVIDAD/HYPO de objetivo temporal responder con el código Any
* TARGET STOP/CANCEL   
   * Respuesta: Para cancelar el objetivo temporal, responder con el código Any
* AYUDA
   * Respuesta: BG, LOOP, TRATAMIENTOS, .....
* AYUDA BOLUS
   * Respuesta: BOLUS 1.2 BOLUS 1.2 MEAL

Solución de problemas
==================================================
Múltiples SMS
--------------------------------------------------
Si recibe el mismo mensaje una y otra vez (es decir, cambio de perfil) probablemente hayas establecido un circulo con otras apps. Podría ser con xDrip +, por ejemplo. Si es así, por favor, asegúrese de que xDrip + (o cualquier otra aplicación) no sube los tratamientos a NS. 

Si la otra aplicación está instalada en varios teléfonos, asegúrese que desactiva la subida en todos ellos.

Los comandos SMS no funcionan en los teléfonos de Samsung
--------------------------------------------------
Hubo un reporte sobre los comandos de SMS que se detenían después de una actualización en el teléfono Galaxy S10. Se puede resolver mediante el desetiquetado de 'enviar como mensaje de conversación '.

.. imagen:: ../images/SMSdisableChat.png
  :alt: Desactivar SMS como mensaje de chat
