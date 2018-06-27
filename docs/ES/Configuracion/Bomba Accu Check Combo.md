

# Bomba Accu Chek Combo

Este software es parte de una solución hazlo tú mismo y no es un producto,
pero requiere que USTED lea, aprenda y entienda el sistema, incluso cómo
usarlo. No es algo que haga todo el manejo de su diabetes, pero le permite
mejorar su diabetes y su calidad de vida si está dispuesto a dedicar el tiempo
necesario. No te precipites, pero date tiempo para aprender. Solo Usted es
responsable de lo que hace con él.


## Hardware ncecesario
 
* Una bomba de insulina Roche Accu-Chek Combo
(cualquier firmware, todos funcionan)

* Un dispositivo Smartpix o Realtyme junto
con el software de configuración 360 para configurar la bomba. Roche envía los
dispositivos Smartpix y el software de configuración de forma gratuita a sus
clientes previa solicitud.

* Un teléfono compatible: un teléfono Android
con un teléfono con LineageOS 14.1 (anteriormente CyanogenMod) o Android 8.1
(Oreo). El LineageOS 14.1 tiene que ser una versión reciente de al menos junio
de 2017, ya que el cambio necesario para vincular la bomba Combo solo se
introdujo en ese momento. Se puede encontrar una lista de teléfonos en el
documento AAPS Phones. Tenga en cuenta que esta no es una lista completa y
refleja la experiencia personal del usuario. Le recomendamos que
también añada su experiencia y, por lo tanto, ayude a los demás (#cadenadeayuda).

* Tenga en cuenta que, aunque Android 8.1
permite comunicarse con el Combo, todavía hay problemas con AAPS en 8.1. Para
usuarios avanzados, es posible realizar el emparejamiento en un teléfono
rooteado y transferirlo a otro teléfono rooteado para usar con ruffy / AAPS,
que también debe estar rooteado. Esto permite el uso de teléfonos con Android
<8.1 pero no ha sido ampliamente probado: https://github.com/gregorybel/combo-pairing/blob/master/README.md


## Limitaciones

* El bolo extendido y el bolo multionda no son compatibles (consulte en cambio los carbohidratos extendidos)
* Solo se admite un perfil basal.
* Establecer más de un perfil basal en la bomba, o administrar bolos extendidos o bolos multionda desde la bomba interfiere con TBR y fuerza al lazo cerrado a un modo de suspensión baja durante 6 horas ya que al lazo cerrado no puede funcionar de manera segura bajo estas condiciones .
* Actualmente no es posible configurar la hora y la fecha en la bomba, por lo que los cambios de horario de verano deben realizarse manualmente (puede desactivar la actualización automática del reloj por la tarde y volver a cambiarla por la mañana junto con el reloj de la bomba para evitar una alarma durante la noche).
* Actualmente solo se admiten tasas basales en el rango de 0.05 a 10 U / h. Esto también se aplica cuando se modifica un perfil, p.ej cuando aumenta al 200%, la tasa basal más alta no debe superar las 5 U / h, ya que se duplicará. De manera similar, cuando se reduce al 50%, la tasa basal más baja debe ser de al menos 0,10 U / h.
* Si el lazo solicita que se cancele una TBR en ejecución, el Combo configurará una TBR de 90% o 110% durante 15 minutos. Esto es porque cancelar un TBR causa una alerta en la bomba que causa muchas vibraciones.
* Ocasionalmente (cada dos o tres días) AAPS puede no tratar una alerta de TBR CANCELADA, por lo que el usuario debe tratarla (presionar el botón Actualizar en AAPS para transferir la advertencia a AAPS o confirmar la alerta en la bomba).
* La estabilidad de la conexión Bluetooth varía según diferentes teléfonos, lo que causa alertas de "no se puede volver a conectar la bomba", cuando se pierde conexión con la bomba. Si se produce ese error, asegúrese de que Bluetooth esté habilitado, presione el botón Actualizar en la barra Combo para ver si esto fue causado por un problema conexión y, si todavía no se establece ninguna conexión, reinicie el teléfono, que normalmente debería solucionarlo. Puede haber otro problema donde el reinicio no ayuda, pero se requiere  presionar un botón en la bomba (que restablece el Bluetooth de la bomba), antes de que la bomba acepte las conexiones desde el teléfono nuevamente. Es muy poco lo que se puede hacer para remediar estos problemas en este punto. Entonces, si ve esos errores con frecuencia, su única opción en este momento es obtener otro teléfono que se sepa que funciona bien con AndroidAPS y el Combo (consulte más arriba).
* Los bolos de la bomba no siempre se detectan a tiempo (se verifica cuando AAPS se conecte a la bomba) y puede llevar hasta 20 minutos en el peor de los casos. Los bolos en la bomba siempre se verifican antes de un TBR alto o un bolo emitido por AAPS, pero debido a las limitaciones, AAPS rechazará las TBR / Bolus, ya que se calculó bajo premisas falsas. (-> ¡No comnade bolos desde la bomba! Consulte el capítulo de Uso)
* Debe evitarse establecer un TBR en la bomba, ya que el lazo cerrado asume el control de TBR. La detección de un nuevo TBR en la bomba puede demorar hasta 20 minutos y el efecto del TBR solo se tendrá en cuenta desde el momento en que se detecte, por lo que en el peor de los casos podría haber 20 minutos de un TBR  no reflejada en el IOB del algoritmo.









