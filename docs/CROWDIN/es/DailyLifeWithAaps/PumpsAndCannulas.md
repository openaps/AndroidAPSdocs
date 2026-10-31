# Bombas y cánulas

## Changing infusion sets: insulin reservoirs and cannulas

The procedure described below is for tubed pumps only and does not apply to patch pumps like Omnipod, Medtrum Nano, Accu-Chek Solo etc. A veces este proceso se llama «cambio de set»: un cambio «completo» incluye el reservorio de insulina y la cánula, y un cambio «parcial» es solo el cambio de cánula.

Las bombas parche se llenan y se ceban solas en su propio asistente de activación, y su cánula ya está en el cuerpo. **AAPS** no ofrece cebado para ellas: **Cebar/Llenar** no aparece en el panel **Administrar** ni en Lanzamiento rápido. Consulta la página de tu bomba en [Bombas compatibles](../Getting-Started/CompatiblePumps.md).

Los cambios físicos de cartucho/reservorio no se pueden hacer con **AAPS**: hay que hacerlos directamente en la bomba. Después, hay que registrarlos a mano en **AAPS**.

(pumps-cannulas-changing-reservoir-and-cannula)=
### Guide for changing both the pump reservoir and cannula

1. En **AAPS**, desconecta la bomba: pulsa el [icono del lazo](#AapsScreens-loop-status) en la pantalla principal y selecciona **Desconectar bomba** durante 1 hora. El icono cambia a un enchufe gris, que indica que la bomba está desconectada.

2. Physically change the insulin reservoir: physically disconnect your pump from the body, and change the reservoir/cartridge and cannula as per manufacturer's instructions.

3. Prime/fill the tubing and cannula: this can be done directly on the pump. Be sure to eliminate any bubbles in the tubing.

4. Attach the new cannula to the body. Once the cannula is inserted and the needle is removed, the attached cannula now has a small air gap which also needs to be primed. Para registrarlo en **AAPS** y cebar la cánula: abre **Cebar/Llenar** (en el panel de estado ampliado de la pantalla principal, en el panel **Administrar** o como botón de [Lanzamiento rápido](QuickLaunch.md)) y marca **Anotar el cambio de sitio de la bomba** y/o **Anotar cambio del cartucho de insulina**, según corresponda, para registrar el cambio. Ahora pulsa la cantidad de cebado de cánula por defecto (suele ser unas 0,3 U, pero comprueba que este valor es correcto para tu cánula) y selecciona **OK**. Lee el mensaje de resumen y confirma el cebado tocando **OK**.

   ![Cebar/Llenar en el panel Administrar con una bomba con tubo](../images/v4/Screens/manage_sheet_tube_pump.png)


5. Reconecta la bomba en **AAPS**: pulsa el icono del enchufe gris y selecciona **Reconectar bomba** para seguir con el lazo.

### Useful information concerning insulin/cannula changes

* Registrar un cambio de zona de la bomba restablece Autosens al 100 %. También restablece los indicadores de estado y las edades de la cánula/insulina en la pantalla principal de **AAPS**.

* Puedes fijar o ajustar las cantidades de cebado por defecto en los ajustes de **Cebar/Llenar**: escribe «prime» en la barra de búsqueda de la pantalla principal para abrirlos (consulta [Preferencias](../SettingUpAaps/Preferences.md)). See your instruction booklet in your cannula box for how many units (depending on needle length and tubing length) should be primed for your cannula.

* **AAPS** no tiene en cuenta la insulina administrada con la función de cebado al calcular la insulina activa (IOB), y en el [Historial de tratamientos](#aaps-screens-treatments) aparece marcada como «Prime».

* **AAPS** tampoco tiene en cuenta la insulina que se pone como bolo desde la bomba mientras la bomba está desconectada. Si pones un bolo directamente desde la bomba mientras **AAPS** está desconectado, al reconectar la bomba puedes registrar esta insulina (sin administrarla) en el diálogo **Insulina** (consulta [Registrar insulina administrada sin poner un bolo](#pumps-cannulas-announce-insulin) más abajo).

### Cannula, infusion site, tubing and/or pump issues

Si estás seguro de que no has recibido insulina durante un tiempo, aunque **AAPS** registre que sí, y sabes exactamente cuándo empezó el problema (_p. ej._ quitas la cánula y ves que se dobló al insertarla), puedes corregirlo en **AAPS**. Pero ten en cuenta que quizás la insulina sí se administró y por algún motivo actúa lentamente.

```{admonition} Caution - Risk of Hypoglycemia
:class: danger
Only delete insulin delivery from **AAPS** with EXTREME caution, in case insulin _has_ actually been delivered, and monitor BG closely for the next 24 h.
```

Para quitar los bolos y SMB que sabes que no se administraron, abre el **menú** (☰), selecciona [Historial de tratamientos](#aaps-screens-treatments) y, en la pestaña **Carbohidratos y bolos**, borra con prudencia los bolos registrados desde el momento en que empezó el problema. Así se corrige el valor de «insulina activa» (IOB), que es clave para los cálculos de **AAPS**; si vuelves ahora a la pantalla principal, verás que la IOB ha bajado. Ten en cuenta que no puedes borrar la insulina basal que **AAPS** calcula como administrada, así que **AAPS** la seguirá teniendo en cuenta.

En casos menos claros de problemas de administración de insulina, _p. ej._ fugas, oclusiones o insulina que sale por el canal de la cánula, en los que no sabes cuándo empezó el problema o crees que parte de la insulina sí se administró, debes tener cuidado. Puedes notar estos problemas al «oler» la insulina, al ver el adhesivo mojado, al tener valores de glucosa altos o al recibir una alarma. Como nunca sabrás cuánta insulina entró en tu piel (que puede empezar a actuar después de un rato), será difícil saber la cantidad correcta de insulina que hay que restar del valor actual de «insulina activa» (IOB). One strategy is to pause looping for 5 hours (or your specific duration of insulin action) after you resolved the insulin delivery problem, and resume looping afterwards. This will ensure that IOB is correct once you restart looping.

(pumps-cannulas-disconnecting)=
## Disconnecting the pump for showering or activity

Si te quitas la bomba para ducharte, bañarte, nadar, hacer deportes de contacto u otras actividades, debes decirle a **AAPS** que no se está administrando insulina, para que la IOB sea correcta. La bomba se puede desconectar con el [icono del lazo](#AapsScreens-loop-status) en la pantalla principal: púlsalo y selecciona **Desconectar bomba** con la duración que necesites. Si la actividad dura más de lo previsto, abre otra vez el mismo diálogo y elige una nueva duración en **Desconectar bomba**: la desconexión se alarga y la nueva duración empieza desde ahora. No hace falta reconectar antes.

As you are not getting any insulin while the pump is disconnected, you should reconnect every two hours to catch up for the missing basal. Puedes hacerlo conectando la bomba y poniendo un bolo con la basal que falta (_p. ej._ la de las últimas dos horas), antes de desconectarla otra vez. This should help to avoid a severe lack of insulin which could result in diabetic ketoacidosis (DKA). Si no es práctico reconectar la bomba durante la actividad (la zona de la cánula está cubierta por un traje de neopreno, _etc._), piensa en usar una inyección con pluma. Esta inyección manual se puede registrar en **AAPS**, y no hace falta hacerlo en el momento de la inyección (solo apunta la hora), porque al reconectar la bomba puedes registrar la insulina y poner la hora real en que se administró.

(pumps-cannulas-announce-insulin)=
## To announce delivered insulin without actually bolusing

Para registrar insulina administrada desde la bomba mientras **AAPS** estaba desconectado, o con inyecciones de pluma: abre el [diálogo Insulina](#aaps-screens-buttons-insulin) (**Tratamientos** en la navegación inferior, o un botón de Lanzamiento rápido), escribe la cantidad en unidades y activa **El bolo sólo se anotará**. Entonces aparece una fila **Tiempo** (con el valor **Ahora**) para registrar la hora real de la inyección: puedes ignorarla si la inyección fue hace poco. Si el bolo se puso hace un rato, usa **-** para mover la hora hacia atrás (_p. ej._ -30 min), o abre la fila con la flecha para elegir la fecha y la hora exactas. Entonces **AAPS** tiene en cuenta la duración de la acción de la insulina y calcula según eso la insulina que queda en el cuerpo.

Si usas **AAPS** como cuidador, puedes desconectar (y reconectar) la bomba a distancia muy fácilmente con un [comando SMS](../RemoteFeatures/SMSCommands.md), con comandos como "pump disconnect 120" y "pump connect 120". The range of duration for remote disconnect is from 1 - 120 min, (in this example it is 120 minutes). Esto es muy útil si no te es fácil acceder al teléfono con **AAPS**: por ejemplo, está metido en un cinturón para la bomba de un niño que corre hacia la piscina, o lo tiene (o lo usa) un adolescente que no lo suelta.

## Reconnecting the pump after activity

Después de una desconexión larga (1–2 horas), es bastante normal que **AAPS** calcule que ahora tienes IOB negativa. When you reconnect the pump, depending on preference/current glucose level/planned food or subsequent activity, you can either:

a) Simplemente reconecta la bomba en **AAPS** (de gris a verde, para lazo cerrado) y deja que **AAPS** empiece a administrar insulina otra vez

_o_

b) Si quieres ser más agresivo (por ejemplo, vas hacia una hiperglucemia), puedes abrir el [Asistente de bolo](#aaps-screens-bolus-wizard) y poner un bolo con cero carbohidratos, para administrar enseguida como bolo la insulina que falta según el cálculo.

Which strategy you prefer is highly personal, and is best determined by trial and error.


(Aapsscreens-site-rotation)=
## Rotación del sitio

**Administrar → Rotación del sitio** abre el diálogo de rotación del sitio en modo Ver:

- Con los dos botones de arriba (icono de cánula e icono de sensor) puedes mostrar solo las zonas de la cánula, solo las zonas del sensor, o ambas
- Están disponibles todos los eventos de cambio de cánula y de cambio de sensor de los últimos 45 días.
- Toca una zona del cuerpo, o una entrada de la lista de abajo, para filtrar la lista y ver solo las entradas de la zona seleccionada. La zona seleccionada se resalta en color verde claro.
- Toca el icono del **lápiz** junto a una entrada para abrir la vista Editar y cambiar su ubicación, flecha o nota

![Modo Ver](../images/SiteRotation/ViewMode.png)

- El icono del **engranaje** (arriba a la derecha) abre los ajustes: **Perfil de usuario para rotación de sitios** abre un diálogo donde eliges **Hombre**, **Mujer** o **Menor**, y los interruptores **Gestionar la rotación del lugar de inserción de la bomba** y **Gestionar la rotación del sitio del MCG** eligen qué zonas gestionas.

![Configuración](../images/SiteRotation/Settings.png)

![Diálogo Perfil de usuario para rotación de sitios](../images/SiteRotation/Type.png)

*Nota: este ajuste decide si el diálogo de rotación del sitio (modo Editar) se abre o no de forma automática cuando se crea una nueva entrada con el botón «Cebar/Llenar» o con el botón «Inserción de sensor»*

- Para un cambio de zona hecho directamente en la bomba, tienes que abrir el modo Ver y editar la nueva entrada para elegir la ubicación y la flecha

El modo Editar te permite elegir la ubicación, la flecha y la nota de la entrada seleccionada:

- La entrada que se edita aparece debajo de las imágenes del cuerpo, con el icono de su tipo (cánula o sensor)
- Las vistas de delante y de detrás se muestran una al lado de la otra: toca la zona donde lo pusiste
- Cuando eliges una zona (resaltada en verde), en la lista de abajo ves todas las entradas hechas en esta zona en los últimos 45 días

![Modo Editar](../images/SiteRotation/EditMode.png)

- Puedes añadir una flecha opcional tocando el icono de flecha a la derecha de la entrada: el diálogo **Seleccionar flecha** te permite indicar una subzona o la orientación del pod

![Posición](../images/SiteRotation/EditModeSub.png)

- También puedes añadir una **Nota** sobre la zona seleccionada
- Toca el icono de **guardar** (arriba a la derecha) para registrar la zona

Puedes filtrar de forma gráfica en la imagen, o tocando un evento de terapia en la lista Para quitar el filtro, toca la imagen fuera de cualquier zona

![Filtrado](../images/SiteRotation/Filtering.png)
