# Cambio de zona horaria y horario de verano

Cuando cambia la zona horaria del teléfono, **AAPS** vuelve a calcular desde cero la **IOB**, la basal y la sensibilidad del pasado, unos 10 segundos después del cambio. Mientras tanto, los gráficos y los valores de la pantalla principal pueden tardar un momento en actualizarse.

(timezone-traveling-with-pumps)=

## Cambio de zona horaria con Omnipod Dash

* Actualiza el estado de la bomba en **Administrar → Bomba**
* Selecciona temporalmente otro **Perfil** y luego vuelve a tu **Perfil** original o al que quieras

## Cambio de zona horaria con DanaR, DanaR coreana

No hay problema con cambiar el huso horario en el teléfono porque la bomba no utiliza el historial

(timezone-traveling-danarv2-danars)=

## Cambio de zona horaria con DanaRv2, DanaRS, Dana-i

Estas bombas necesitan un cuidado especial, porque **AAPS** usa el historial de la bomba, pero los registros de la bomba no tienen zona horaria. **Esto significa que si cambias la zona horaria en el teléfono, los registros se leerán con otra zona horaria y aparecerán duplicados.**

Para evitar esto, hay dos posibilidades:

### Opción 1: Mantener la hora de casa y desplazar el perfil en el tiempo

* Desactiva 'Fecha y hora automáticas' en los ajustes del teléfono (cambio manual de zona horaria).

* El teléfono debe mantener la hora normal de casa durante todo el viaje.

* Desplaza tu **Perfil** en el tiempo según la diferencia entre la hora de casa y la hora del destino.
   
   * Toca el nombre del **Perfil** en la pantalla principal para abrir la [pantalla de perfiles](#ProfileSwitch-manage-v4)
   * Selecciona tu **Perfil** y toca **▶ Activar**
   * Ajusta el '**Desplazamiento de hora**' según tu destino y toca **Activar**.
   
   ![Cambio de perfil con desplazamiento de hora](../images/ProfileSwitchTimeShift2.png)
   
   * p. ej., Viena -> Nueva York: **Cambio de perfil** +6 horas
   * p. ej., Viena -> Sídney: **Cambio de perfil** -8 horas

### Opción 2: Borrar el historial de la bomba

* Desactiva 'Fecha y hora automática' en la configuración de tu teléfono (cambio de zona horaria manual)

Al bajar del avión:

* apaga la bomba
* cambia la zona horaria en el teléfono
* apaga el teléfono, enciende la bomba
* borra el historial de la bomba
* cambia la hora en la bomba
* enciende el teléfono
* deja que el teléfono se conecte a la bomba y ajuste la hora con precisión

(timezone-traveling-insight)=

## Cambio de zona horaria con Insight

El controlador ajusta automáticamente la hora de la bomba a la hora del teléfono.

El Insight también registra en el historial el momento en que se cambió la hora, y de qué hora (antigua) a qué hora (nueva) se cambió. Así **AAPS** puede saber la hora correcta a pesar del cambio de hora.

Puede causar errores en las **TDD** (dosis diarias totales). Pero esto no debería ser un problema.

Por eso, quien usa la Insight no tiene que preocuparse por los cambios de zona horaria ni por los cambios de hora. Hay una excepción a esta regla: la bomba Insight tiene una pequeña batería interna que mantiene la hora, etc. mientras estás cambiando la batería "real". Si el cambio de batería tarda demasiado, esta batería interna se agota, el reloj se reinicia y, después de poner una batería nueva, la bomba te pide la fecha y la hora. En este caso, AAPS no tiene en cuenta en el cálculo ninguna entrada anterior al cambio de batería, porque no se puede saber la hora correcta.

## Cambio de zona horaria con Accu-Chek Combo

El [controlador de la Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) ajusta automáticamente la hora de la bomba a la hora del teléfono. La Combo no puede guardar zonas horarias, solo la hora local, y eso es justo lo que el controlador programa en la bomba. Además, guarda la zona horaria en las preferencias locales de AAPS para poder convertir la hora local de la bomba en una marca de tiempo completa con la diferencia horaria. No tienes que hacer nada: si la hora de la Combo se aleja demasiado de la hora actual del teléfono, la hora de la bomba se ajusta automáticamente.

Ten en cuenta que esto tarda un poco, porque solo se puede hacer en el modo de terminal remoto, que suele ser lento. Es un límite de la Combo que no se puede evitar.

## Cambio de zona horaria con Medtrum

El controlador ajusta automáticamente la hora de la bomba a la hora del teléfono.

Los cambios de zona horaria mantienen el historial intacto; solo la TDD (dosis diaria total) puede verse afectada. Cambiar la hora del teléfono a mano puede causar problemas con el historial y con la **IOB**. Si cambias la hora a mano, revisa bien la **IOB**.

Cuando cambia la zona horaria o la hora, se detienen las **TBR** (basales temporales) en curso.

(time-adjustment-daylight-savings-time-dst)=

## HORARIO DE VERANO (DST)

Ajuste de la hora por el horario de verano.

Según tu bomba y tu MCG, los saltos de hora pueden hacer que **AAPS** no funcione bien. Con algunas bombas es mejor ajustar la zona horaria antes del cambio de hora, mientras estás despierto, y no durante la noche.

### Ajuste automático del horario de verano (DST) en la mayoría de las bombas

* Sin embargo, el **Lazo** se desactivará durante 3 horas DESPUÉS del cambio de hora (normalmente desde la 1 de la madrugada) y **AAPS** usará la basal de fondo de tu **Perfil**. Esto se hace por seguridad: la **IOB** puede ser demasiado alta por un bolo duplicado antes del cambio de hora.
* Después del cambio de hora, haz un **Cambio de perfil** al **Perfil** que quieras para activar el **Lazo**: toca el nombre del perfil en la pantalla principal y luego el botón redondo **▶** (consulta [Activar un perfil](#ProfileSwitch-manage-v4)).
* Antes del cambio de hora también verás un aviso en la pantalla principal de **AAPS** de que el **Lazo** se ha desactivado temporalmente. Este mensaje aparece sin pitido, vibración ni otro sonido.

Si usas la calculadora de **AAPS** para el bolo, no uses los datos de **COB** e **IOB** salvo que estés seguro de que son totalmente correctos. Ten cuidado y no uses esta función durante un par de horas después del cambio de hora.

### Horario de verano (DST) con Accu-Chek Insight

* El cambio a DST se realiza automáticamente. No se requiere acción.

### Horario de verano (DST) con Accu-Chek Combo

* El cambio a DST se realiza automáticamente. No se requiere acción.

### Horario de verano (DST) con Medtrum

* El cambio a DST se realiza automáticamente. No se requiere acción.

### Horario de verano (DST) con Omnipod Dash

* Puedes dejar que **AAPS** use temporalmente la basal de fondo después del cambio de hora, como se explica arriba.
* Si no quieres que **AAPS** use temporalmente la basal de fondo durante la noche, puedes cambiar la zona horaria el día antes del cambio de hora para evitar problemas por la noche. ATENCIÓN: ESTA OPCIÓN PUEDE HACER QUE TU POD CADUQUE ANTES DE TIEMPO. LLEVA MATERIAL DE RECAMBIO CONTIGO SI ELIGES LA OPCIÓN DE ABAJO.

#### Qué hacer antes del cambio de hora

1. Desactiva en el teléfono cualquier ajuste que cambie la zona horaria automáticamente, para poder elegir una zona horaria que no use horario de verano. Cómo activarlo depende de tu teléfono y de la versión de Android.
   
   * Algunos teléfonos tienen dos ajustes: uno para ajustar la hora automáticamente (lo ideal es dejarlo activado) y otro para ajustar la zona horaria automáticamente (debes DESACTIVARLO: **Set automatically** («Establecer automáticamente») en **Time zone** («Zona horaria») en la captura de abajo).
   * Por desgracia, algunas versiones de Android tienen un solo interruptor para ajustar automáticamente tanto la hora como la zona horaria. Por ahora tendrás que desactivarlo.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Busca una zona horaria que tenga la misma hora que tu ubicación actual, pero que no use horario de verano.
   
   * Hay una lista de estos países en [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Para la hora de Europa Central (CET) podría ser "Brazzaville" (Congo). Cambia la zona horaria del teléfono a Congo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. En **AAPS**, actualiza la bomba y cambia al **Perfil** que quieras.

4. Revisa la **IOB** y los **COB** de **AAPS**. Si no son correctos, desactiva el **Lazo** durante al menos una DIA o el Max-Carb-Time, lo que sea más largo.

5. Qué hacer después del cambio de hora. Un buen momento para volver a la zona horaria local es cuando la **IOB** es baja. Por ejemplo, una hora antes de una comida como el desayuno. Lo ideal es que los **COB** y la **IOB** estén cerca de cero.