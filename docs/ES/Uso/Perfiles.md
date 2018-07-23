# Perfiles

Al iniciar su AndroidAPS y seleccionar su perfil, tendrá que hacer un evento de "Cambio de perfil" con duración cero (explicado más adelante). Al hacer esto, AAPS comienza a rastrear el historial de perfiles y cada nuevo cambio de perfil requiere otro "cambio de perfil" incluso cuando se cambia el contenido del perfil en NS. El perfil actualizado se envía a AAPS inmediatamente, pero debe volver a cambiar el mismo perfil (en NS o AAPS) para comenzar a utilizar estos cambios.

Internamente AAPS crea una instantánea del perfil con fecha de inicio y duración que será usado en el período seleccionado. La duración de cero significa infinito. Dicho perfil es válido hasta el nuevo "Cambio de perfil".

Si utiliza el "Cambio de perfil" con el perfil de duración, se vuelve a cambiar a "Cambio de perfil" válido anterior.

Si usa perfiles AAPS locales (Simple, Local, CPP), debe presionar el botón allí para aplicar estos cambios (crea el evento adecuado de "Cambio de Perfil").

Dentro del "cambio de perfil" puede elegir dos cambios que solían ser parte del Perfil de porcentaje circadiano:
* Porcentaje: aplica el mismo porcentaje a todos los parámetros. Si lo configura en 130% (lo que significa que es un 30% más resistente a la insulina), aumentará la tasa basal en un 30%. También reducirá el ISF y el IC en consecuencia (divida por 1.3 en este ejemplo). Se enviará a la bomba y luego será la tasa basal predeterminada. El algoritmo del lazo (abierto o cerrado) continuará funcionando sobre el perfil de porcentaje seleccionado. Por ejemplo, se pueden establecer perfiles porcentuales separados para las diferentes etapas del ciclo hormonal.
* Timeshift: mueve todo según el tiempo de horas ingresadas. Así que, por ejemplo, cuando se trabaja en turnos nocturnos, el número de horas cambia a la cantidad de horas más tarde o antes de acostarse o se despierta.

Este mecanismo permite realizar cálculos más precisos del pasado y rastrear los cambios de perfil.

En el modo de lazo cerrado, se recomienda activar la actualización automática del perfil en la bomba (en la configuración), esto significa que cualquier actualización que haga a su perfil se copiará localmente en la bomba en caso de fallo de la misma.

<b>Solución a los Errores más habituales de perfil</b><br>

* Aparecerá el mensaje de error "Perfil no válido" o "Perfil basal no alineado con las horas" si tiene tasas basales o tasas I: C no en horas. Las bombas DanaR y DanaRS no admiten cambios en la media hora.
*	'Cambio de perfil recibido de NS pero el perfil no existe localmente' o Vaya a la pestaña Tratamientos en AndoridAPS y seleccione Cambio de perfil, 'eliminar' la fecha y la hora que se mencionaron en el mensaje de error. O vaya a su colección de mlab, busque los tratamientos para el cambio de perfil y elimine la fecha y la hora que es mencionada en el mensaje de error. 
![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
*	Aparecerá el mensaje de error "DIA 3 h demasiado corto" si la duración de la acción de la insulina en su perfil es un valor que AndroidAPS no considera exacto. Lea acerca de cómo seleccionar el [DIA correcto](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) y edítelo en su perfil, luego haga un Cambio de perfil para continuar. 


