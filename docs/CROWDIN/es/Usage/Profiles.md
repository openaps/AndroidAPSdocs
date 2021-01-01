# Cambio de perfil

Al iniciar el AndroidAPS y seleccionar su perfil, tendrá que hacer un evento de "Conmutador de perfil" con una duración cero (explicado más tarde). Al hacer esto en AAPS se inicia el seguimiento de la historia de los perfiles y cada cambio de perfil nuevo requiere otro "Conmutador de perfil" incluso cuando cambia el contenido del perfil en NS. El perfil actualizado se envía a AAPS de forma inmediata, pero es necesario volver a cambiar el mismo perfil (en NS o AAPS) para empezar a utilizar estos cambios.

Internamente, AAPS crea una instantánea de perfil con fecha de inicio y duración y se la está utilizando en el periodo seleccionado. Duración de cero significa infinito. Este perfil es válido hasta el nuevo "Cambio de perfil".

To do a profile switch long-press on the name of your profile ("Tuned 03/11" in the picture below).

![Realizar un cambio de perfil](../images/ProfileSwitch_HowTo.png)

Si utiliza "Cambio de perfil" con el perfil de duración, se vuelve a cambiar al "Conmutador de perfil" válido anterior

Si utiliza perfiles de AAPS locales (Simple, Local, CPP), tiene que pulsar el botón para aplicar estos cambios (crea un suceso de "cambio de perfil" adecuado).

Dentro del "cambio de perfil", puede elegir dos cambios adicionales que se utilizaron para formar parte del perfil de porcentaje de circuito:

## Porcentaje

* Esto aplica el mismo porcentaje a todos los parámetros. 
* Si lo establece en un 130% (lo que significa que es un 30% más resistente a la insulina), elevará la tasa basal en un 30%. También bajará el ISF y el IC en consecuencia (dividir por 1.3 en este ejemplo).
  
  ![Ejemplo porcentaje en cambio de perfil](../images/ProfileSwitchPercentage.png)

* Se enviará a la bomba y, a continuación, será la tasa basal predeterminada.

* El algoritmo de lazo (abierto o cerrado) continuará trabajando en la parte superior del perfil de porcentaje seleccionado. Por lo tanto, por ejemplo, se pueden establecer perfiles de porcentaje separados para diferentes etapas del ciclo hormonal.

## Cambio de tiempo

![Ejemplo porcentaje de cambio de perfil y fecha/hora](../images/ProfileSwitchTimeShift2.png)

* Esto mueve las horas del reloj por el número de horas que se han especificado. 
* Así, por ejemplo, con los turnos nocturnos de trabajo cambia el horario en cuánto más tarde/temprano se va a la cama o a despertarse.
* Siempre se trata de una pregunta de qué hora deben sustituir los valores de perfil de la hora actual. Este tiempo debe ser cambiado por x horas. Por lo tanto, tenga en cuenta las instrucciones que se describen en el ejemplo siguiente: 
  * Hora actual: 12:00
  * **Positivo** cambio de tiempo 
    * 2:00 **+10 h** -> 12:00
    * La configuración de las 2:00 se utilizará en lugar de la configuración utilizada normalmente a las 12:00, debido al cambio positivo de tiempo.
  * **Negativo** cambio de tiempo 
    * 22:00 **-10 h** -> 12:00
    * Los valores de 22:00 (22:00) se utilizarán en lugar de los valores que se utilizan normalmente a las 12:00 debido al cambio de hora negativo.

![Cambio de perfil indicaciones para la fecha/hora](../images/ProfileSwitch_PlusMinus2.png)

Este mecanismo de toma de instantáneas del perfil permite realizar cálculos mucho más precisos del pasado y la posibilidad de realizar un seguimiento de los cambios de perfil.

## Resolución de errores de perfil

### 'Perfil no válido' / 'Perfil basal no alineado con horas'

![Basal no alineado a la hora](../images/BasalNotAlignedToHours2.png)

* Estos mensajes de error aparecerá si usted tiene cualquiera de las tasas basales o I:C tasas no en la hora. (Las bombas DanaR y DanaRS no soportan cambios en la media hora, por ejemplo.)
  
  ![Perfil de ejemplo no alineado con horas](../images/ProfileNotAlignedToHours.png)

* Recuerde/anote la fecha y hora indicadas en el mensaje de error (26/07/219 5:45 pm en la captura de pantalla anterior).

* Ir a pestaña de tratamientos
* Seleccionar Cambio de perfil
* Desplácese hasta que encuentre la fecha y la hora del mensaje de error.
* Utilice la función de eliminación.
* A veces no hay un único interruptor de perfil defectuoso. En este caso, elimine también a los demás.
  
  ![Eliminar cambio de perfil](../images/PSRemove.png)

De forma alternativa, puede suprimir el conmutador de perfil directamente en el mLab, tal como se describe a continuación.

### 'Recibió el perfil de cambiar de SN, pero el perfil no existe localmente'

* El perfil solicitado no se ha sincronizado correctamente desde Nightscout.
* Siga las instrucciones de arriba para eliminar el conmutador de perfil

De forma alternativa, puede suprimir el cambio de perfil directamente en el mLab:

* Vaya a la colección de mlab
* Buscar en los tratamientos para el cambio de perfil
* Suprima el conmutador de perfil con fecha y hora que se mencionaron en el mensaje de error. ![mlab](../images/mLabDeletePS.png)

### "DIA 3hr demasiado corto"

* El mensaje de error aparecerá si la duración de la acción de insulina en su perfil aparece en un valor que AndroidAPS no cree que será preciso. 
* Lea sobre [seleccionando la DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) derecha y edítela en su perfil y luego haga un [Conmutador de perfil](../Usage/Profiles) para continuar.