# Pantallas AndroidAPS

## Pantalla de inicio

![Pantalla de inicio V2.7](../images/Home2020_Homescreen.png)

Esta es la primera pantalla que encontrarás cuando abras AndroidAPS y contiene la mayor parte de la información que necesitarás día a día.

### Sección A - Tablas

* Navegar entre los distintos módulos de AndroidAPS.
* También puede cambiar las pantallas deslizando a la izquierda o a la derecha.
* Las pestañas mostradas pueden seleccionarse en [constructor de configuración](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Sección B - Perfil & objetivo

#### Current Profile

![Duración restante del cambio de perfil](../images/Home2020_ProfileSwitch.png)

* El perfil actual se muestra en la barra izquierda.
* Short press profile bar to view profile details
* Long press profile bar to [switch between different profiles](../Usage/Profiles#profile-switch).
* Si el cambio de perfil se realizó con la duración restante, el tiempo en minutos se muestra entre paréntesis.

#### Objetivo

![Duración restante objetivo temporal](../images/Home2020_TT.png)

* El nivel actual de glucosa en la sangre se muestra en la barra derecha.
* Short press target bar to set a [temporary target](../Usage/temptarget.md).
* Si se establece un objetivo temporal, la barra se vuelve amarilla y el tiempo restante en minutos se muestra entre paréntesis.

#### Visualización de ajuste de objetivo dinámico

![Visualización del ajuste de objetivo dinámico](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS puede ajustar dinámicamente tu objetivo en función de la sensibilidad si está utilizando el algoritmo SMB.
* Habilitar una o ambas de las [siguientes opciones](../Configuration/Preferences#openaps-smb-settings) 
   * "sensibilidad aumenta el objetivo" y/o 
   * "resistencia baja objetivo" 
* Si AAPS detecta resistencia o sensibilidad, el objetivo cambiará de lo establecido en el perfil. 
* Cuando cambie el objetivo de glucosa, el fondo se tornará verde.

### Sección C - BG & estado del bucle

#### Glucosa sanguínea actual

* La última lectura de glucosa en sangre de su CGM se muestra en el lado izquierdo.
* El color del valor de glucosa en sangre refleja el estado del [ rango ](../Configuration/Preferences#range-for-visualization) definido. 
   * verde = en rango
   * rojo = por debajo del rango
   * amarillo = por encima del rango
* El bloque gris en el medio muestra minutos desde la última lectura y cambios desde la última lectura, en los últimos 15 y 40 minutos.

#### Estado del bucle

![Estado del bucle](../images/Home2020_LoopStatus.png)

* Un nuevo icono muestra el estado del bucle:
   
   * círculo verde = bucle funcionando
   * círculo verde con línea punteada = [suspensión por bajada de glucosa (SBG)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * círculo rojo = bucle desactivado (no funciona permanentemente)
   * círculo amarillo = ciclo suspendido (temporalmente pausado pero la insulina basal será administrada) - el tiempo restante se muestra debajo del icono
   * círculo gris = bomba desconectada (temporalmente sin dosis de insulina en absoluto) - el tiempo restante se muestra debajo del icono
   * Círculo naranja = superbolo en ejecución-el tiempo restante se muestra debajo del icono
   * círculo azul con línea punteada = bucle abierto

* Short press or Long press the icon to open the Loop dialog to switch loop mode (Close, Low Glucose Suspend, Open or Disable), suspend / re-enable loop or disconnect / reconnect pump.
   
   * If short press on Loop icon, a validation is required after selection in Loop Dialog
   
   ![Menú de estado de bucle](../images/Home2020_Loop_Dialog.png)

### Sección D - IOB, COB, BR y AS

![Sección D](../images/Home2020_TBR.png)

* Jeringa: insulina a bordo (IOB) - cantidad de insulina activa dentro de su cuerpo
   
   * La insulina a bordo sería cero si su basal estándar estuviera en funcionamiento y no hubiera ninguna insulina restante de los bolos anteriores. 
   * El IOB puede ser negativo si recientemente ha habido períodos de reducción basal.
   * Pulsa el icono para ver la división del bolo y la insulina basal

* Grano: [ carbohidratos a bordo (COB) ](../Usage/COB-calculation.rst), carbohidratos no absorbidos que ha comido anteriormente -> el icono parpadea si se requieren carbohidratos

* Línea morada: índice basal: cambios en el icono que reflejan cambios temporales en el índice basal (plano al 100%) 
   * Pulse el icono para ver la tasa basal base y los detalles de cualquier basal temporal (incluida la duración restante)
* Flechas hacia arriba& y hacia abajo: indican el estado real del [autosens ](../Usage/Open-APS-features#autosens) (habilitado o deshabilitado) y el valor se muestra debajo del icono

#### Carbohidratos requeridos

![Carbohidratos requeridos](../images/Home2020_CarbsRequired.png)

* Las sugerencias de carbohidratos se dan cuando el algoritmo de referencia detecta que requiere carbohidratos.
* Esto es cuando el algoritmo oref cree que no puedr salvarle con 0 (cero) temping y necesitará carbohidratos para arreglarlo.
* The carb notifications are much more sophisticated than the bolus calculator ones. You might see carbs suggestion whilst bolus calculator does not show missing carbs.
* Carb required notifications can be pushed to Nightscout if wished, in which case an announcement will be shown and broadcast.

### Section E - Status lights

![Sección E](../images/Home2020_StatusLights.png)

* Status lights give a visual warning for 
   * Cannula age
   * Insulin age (days reservoir is used)
   * Reservoir level (units)
   * Edad sensor
   * Battery age and level (%)
* If threshold warning is exceeded, values will be shown in yellow.
* If threshold critical is exceeded, values will be shown in red.
* Settings can be made in [preferences](../Configuration/Preferences#status-lights).

### Section F - Main graph

![Sección F](../images/Home2020_MainGraph.png)

* Graph shows your blood glucose (BG) as read from your glucose monitor (CGM). 
* Notes entered in action tab such as fingerstick calibrations and carbs entries as well as profile switches are shown here. 
* Pulsación larga en el gráfico para cambiar la escala de tiempo. You can choose 6, 12, 18 or 24 hours.
* The green area reflects your target range. It can be configured in [preferences](../Configuration/Preferences#range-for-visualization).
* Blue triangles show [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - if enabled in [preferences](../Configuration/Preferences#openaps-smb-settings).
* Optional information:
   
   * Predicciones
   * Basales
   * Activity - insulin activity curve

#### Activate optional information

* Click the triangle on the right side of the main graph to select which information will be displayed in the main graph.
* For the main graph just the three options above the line "\---\---- Graph 1 \---\----" are available.
   
   ![Main graph setting](../images/Home2020_MainGraphSetting.png)

#### Prediction lines

* **Naranja** línea: [COB](../Usage/COB-calculation.rst) (color que se utiliza generalmente para representar a los COB y los hidratos de carbono)
   
   Prediction line shows where your BG (not where COB itself!) will go based on the current pump settings and assuming that the deviations due carb absorption remain constant. Esta línea sólo aparece si se conoce COB.

* **Azul oscuro** línea: IOB (color que se utiliza generalmente para representar IOB e insulina)
   
   La línea de predicción muestra lo que ocurriría bajo la influencia de la insulina solamente. Por ejemplo, si usted se ha administrado alguna insulina y luego no ha comido carbohidratos.

* **Azul claro** línea: cero-temp (predicción de BG si se establecería una tasa basal temporal en 0%)
   
   La línea de predicción muestra cómo la línea de trayectoria del IOB cambiaría si la bomba detuviera toda la entrega de insulina (0% TBR).

* **Amarillo oscuro** line: [UAM ](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (comidas no anunciadas)
   
   Las comidas no anunciadas significan que se detecta un aumento significativo en los niveles de glucosa debido a las comidas, adrenalina u otras influencias. La línea de predicción es similar a la línea ORANGE COB pero supone que las desviaciones se recortarán a un ritmo constante (ampliando la tasa actual de reducción).

Por lo general, su verdadera curva de glucosa termina en el medio de estas líneas, o cerca de la que hace suposiciones que se asemejan más a su situación.

#### Basales

* A **solid blue** line shows the basal delivery of your pump and reflects the actual delivery over time.
* The **dotted blue** line is what the basal rate would be if there were no temporary basal adjustments (TBRs).
* In times standard basal rate is given the area under the curve is shown in dark blue.
* When the basal rate is temporarily adjusted (increased or decreased) the area under the curve is shown in light blue.

#### Actividad

* La línea de **amarillo delgado** muestra la actividad de la Insulina. 
* Se basa en la bajada esperada de BG por la insulina en su sistema sin otros factores (como carbohidratos) presentes.

### Section G - additional graphs

* You can activate up to four additional graphs below the main graph.
* To open settings for additional graphs click the triangle on the right side of the [main graph](../Getting-Started/Screenshots#section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* To add an additional graph check the box on the left side of its name (i.e. \---\---- Graph 1 \---\----).

#### Insulina en total

* Active insulin including boluses **and basal**.

#### Insulin on board

* Shows the insulin you have on board (= active insulin in your body). It includes insulin from bolus and temporary basal (**but excludes basal rates set in your profile**).
* If there were no [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* IOB can be negative if you have no remaining bolus and zero/low temp for a longer time.
* Decaying depends on your [DIA and insulin profile settings](../Configuration/Config-Builder#local-profile-recommended). 

#### Carbohidratos activos COB

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* La reducción depende de las desviaciones que el algoritmo detecta. 
* Si detecta una mayor absorción de carbohidratos a lo esperado, se administrará la insulina y esto incrementará el IOB (más o menos, en función de sus valores de seguridad). 

#### Desviaciones

* **GRIS** barras que muestran una desviación debido a los carbohidratos. 
* **VERDE** barras que muestran un BG mayor al que el algoritmo esperaba. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **RED** bars show that BG is lower than the algorithm expected. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.
* **BLACK** bars show small deviations not taken into account for sensitivity

#### Sensibilidad

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* La Sensibilidad es el cálculo de la respuesta a la insulina como resultado del ejercicio, las hormonas, etc.

#### Actividad

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* El valor es más alto para la insulina más próxima a la hora punta.
* Esto significaría un valor negativo cuando el IOB está disminuyendo. 

#### Pendiente de desviación

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are 'always on'. 
* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### Insulina

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](../Getting-Started/Screenshots#bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](../Configuration/Preferences#default-temp-targets).
* If you do not want to bolus through pump but record insulin amount (i.e. insulin given by syringe) check the corresponding box.

#### Carbohidratos [g]

![Carbs button](../images/Home2020_ButtonCarbs.png)

* To record carbs without bolusing.
* Certain [pre-set temporary targets](../Configuration/Preferences#default-temp-targets) can be set directly by checking the box.
* Time offset: When will you / have you been eaten carbs (in minutes).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.rst)
* You can use the buttons to quickly increase carb amount.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#ns-client).

#### Calculadora

* See Bolus Wizard [section below](../Configuration/Screenhots#bolus-wizard)

#### Calibrations

* Sends a calibration to xDrip+ or opens Dexcom calibration dialogue.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### MCG

* Opens xDrip+.
* Back button returns to AAPS.
* Must be activated in [preferences](../Configuration/Preferences#buttons).

#### Quick Wizard

* Easily enter amount of carbs and set calculation basics.
* Details are setup in [preferences](../Configuration/Preferences#quick-wizard).

## Bolus Wizard

![Asistente Bolus](../images/Home2020_BolusWizard_v2.png)

Cuando usted quiere hacer un bolo para comida, aquí es de donde normalmente lo hará.

### Section I

* BG field is normally already populated with the latest reading from your CGM. Si no tienes una CGM que funcione, entonces estará en blanco. 
* En el campo CARBS se añade su estimación de la cantidad de carbohidratos (o equivalente) a los que desea realizar el bolo. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. Puede poner un número negativo en este campo si está colocando un bolo para los carbohidratos ya ingeridos.

#### Eating reminder

* For carbs in the future the alarm checkbox can be selected (and is by default when a time in the future is entered) so that you can be reminded at a time in the future of when to eat the carbs you have input into AndroidAPS
   
   ![BolusWizard with Eating Reminder](../images/Home2021_BolusWizard_EatingReminder.png)

### Section J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. The option only shows when "Enable [superbolus](../Configuration/Preferences#superbolus) in wizard" is set in the [preferences overview](../Configuration/Preferences#overview).
* La idea es entregar la insulina antes y esperar que reduzca los picos.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Muestra el bolo calculado. 
* Si la cantidad de insulina a bordo sobrepasa ya el bolo calculado, entonces sólo se mostrará la cantidad de carbohidratos faltantes.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#ns-client).

### Section L

* Details of wizard's bolus calculation.
* Puede anular la selección de cualquier valo que no desee incluir, pero normalmente es algo que no querá hacer.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinaciones de COB e IOB y lo que significan

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* Si marca COB e IOB, los carbohidratos no absorbidos que aún no están cubiertos con insulina + toda la insulina que ha sido suministrada como basal temporal o SMB serán tenidos en cuenta.
* Si se marca IOB sin COB, AAPS tiene en cuenta la insulina ya entregada, pero no lo cubrirá frente a los carbohidratos que aún estan por absorber. Esto da lugar a un aviso de 'carbohidratos faltantes'.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. De esta manera se añaden solo los nuevos carbohidratos ya que la comida principal no necesariamente está absorbida, por lo que la IOB no coincide con los COB después del bolo de comida.

#### Detección de COB incorrecta

![Absorción lenta de carbohidratos](../images/Calculator_SlowCarbAbsorbtion.png)

* Si ve el aviso anterior después de utilizar el asistente de bolos, AndroidAPS ha detectado que el valor COB calculado puede ser incorrecto. 
* Así que si quieres dar un bolo de nuevo después de una comida previa con COB, debes ser consciente de una posible sobredosis! 
* Para más informaciónes, consulte las sugerencias sobre [página de cálculo de COB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Action tab

![Pestaña de acción](../images/Home2021_Action.png)

### Actions - section M

* Button [profile switch](../Usage/Profiles#profile-switch) as an alternative to pressing the [current profile](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button [temporary target](../Usage/temptarget#temp-targets) as an alternative to pressing the [current target](../Getting-Started/Screenshots#section-b-profile-target) on homescreen.
* Button to start or cancel a temporary basal rate. Please note that the button changes from “TEMPBASAL” to “CANCEL x%” when a temporary basal rate is set.
* Even though [extended boluses](../Usage/Extended-Carbs#id1) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * This option is only available for Dana RS and Insight pumps. 
   * Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
   * Make sure to read the [details](../Usage/Extended-Carbs#id1) before using this option.

### Careportal - section N

* Displays information on
   
   * sensor age & level (battery percentage)
   * insulin age & level (units)
   * edad cánula
   * pump battery age & level (percentage

* Less information will be shown if [low resolution skin](../Configuration/Preferences#skin) is used.

#### Sensor level (battery)

* Needs xDrip+ nightly build Dec. 10, 2020 or newer.
* Works for CGM with additional transmitter such as MiaoMiao 2. (Technically sensor has to send cat level information to xDrip+.)
* Thresholds can be set in [preferences](../Configuration/Preferences#status-lights).
* If sensor level is the same as phone battery level you xDrip+ version is probably too old and needs an update.
   
   ![Sensor levels equals phone battery level](../images/Home2021_ActionSensorBat.png)

### Careportal - section O

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](#careportal-section-n).
* Prime/Fill allows you to record pump site and insulin cartridge change.
* Section O reflects the Nightscout careportal. So exercise, announcement and question are special forms of notes.

### Tools - section P

#### History Browser

* Allows you to ride back in AAPS hsitory.

#### DDT

* Total daily dose = bolus + basal per day
* Algunos médicos usan -especialmente para los recién iniciados en las bombas- una relación basal-bolo de 50:50. 
* Por lo tanto, la proporción se calcula como TDD / 2 * TBB (Total base basal = suma de la tasa basal en 24 horas). 
* Otros prefieren un rango de 32% a 37% de TDD para TBB. 
* Al igual que la mayoría de estas reglas empíricas, su validez real es limitada. Nota: ¡Tu diabetes puede variar!

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

## Perfil de Insulina

![Perfil de Insulina](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* La línea PURPURA muestra cuánta insulina queda después de que se ha inyectado mientras declina con el tiempo y la línea AZUL muestra su actividad.
* The important thing to note is that the decay has a long tail. 
* Si ha estado inyectando manualmente, probablemente se ha asumido que la insulina decae durante unas 3,5 horas. 
* Sin embargo, cuando se está usando el bucle cerrado el tiempo de cola importa como los cálculos son mucho más precisos y estas pequeñas cantidades se suman cuando son sometidas a los cálculos recursivos en el algoritmo AndroidAPS.

Para una discusión más detallada sobre los diferentes tipos de insulina, sus perfiles de actividad y por qué todos estos asuntos importan puede leer un artículo aquí en [Comprender las nuevas curvas de IOB basadas en las Curvas de Actividad Exponencial](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

Y puede leer un artículo excelente acerca de esto aquí: [Por qué nos equivocamos regularmente en la duración de la acción de insulina (DIA) que usamos, y por qué importa…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Estado de infusora

![Estado de infusora](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Portal de atención (Care Portal)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Corrección de carbohidratos

![Tratamiento en 1 o 2 líneas](../images/Treatment_1or2_lines.png)

La pestaña de tratamiento se puede utilizar para corregir las entradas de Hc defectuosas (es decir, los carbohidratos sobrantes o subestimados).

1. Compruebe y recuerde el COB y el IOB actuales en la pantalla de inicio.
2. Dependiendo de la bomba en la pestaña de tratamiento, los carbohidratos pueden mostrarse junto con la insulina en una sola línea o como una entrada separada (por ejemplo, en la Dana RS).
3. Borra la entrada con la cantidad de carbohidratos errónea.
4. Asegúrese de que los carbohidratos se eliminan correctamente comprobando COB en la pantalla de inicio de nuevo.
5. Haga lo mismo con el IOB si hay una sola línea en el tabulador, incluyendo los carbohidratos y la insulina.
   
   -> If carbs are not removed as intended and you add additional carbs as explained here (6.), COB will be too high and that might lead to too high insulin delivery.

6. Enter correct carb amount through carbs button on homescreen and make sure to set the correct event time.

7. Si sólo hay una línea en la pestaña de tratamiento, incluyendo los carbohidratos y la insulina, debe añadirse también la cantidad de insulina. Asegúrese de establecer el tiempo de ocurrencia correcto y compruebe el IOB en la pantalla de inicio después de confirmar la nueva entrada.

## Loop, AMA / SMB

* These tabs show details about the algorithm's calculations and why AAPS acts the way it does.
* Calculations are each time the system gets a fresh reading from the CGM.
* For more details see [APS section on config builder page](../Configuration/Config-Builder#aps).

## Perfil

![Perfil](../images/Screenshots_Profile.png)

* Profile contains information on your individual diabetes settings:
   
   * DIA (Duration of Insulin Action)
   * IC or I:C: Insulin to Carb ratio
   * ISF: Insulin Sensitivity Factor
   * Tasa basal
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Tratamiento

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Bolo extendido](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Objetivo temporal](../Usage/temptarget.md)
* [Cambio de perfil](../Usage/Profiles.md)
* [Careportal](../Usage/CPbefore26#careportal-discontinued) - notes entered through action tab and notes in dialogues

## BG Source - xDrip, Dexcom App (pateched)...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Depending on your BG source settings this tab is named differntly.
* Shows history of CGM readings and offers option to remove reading in case of failure (i.e. compression low).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Displays status of the connection with your Nightscout site.
* Settings are made in [preferences](../Configuration/Preferences#nsclient). You can open the corresponding section by clicking the cog wheel on the top right side of the screen.
* For troubleshooting see this [page](../Usage/Troubleshooting-NSClient.md).