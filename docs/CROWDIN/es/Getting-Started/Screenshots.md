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
* Mantenga presionada la barra de perfil para ver los detalles del perfil o para [ cambiar entre diferentes perfiles ](../Usage/Profiles#profile-switch).
* Si el cambio de perfil se realizó con la duración restante, el tiempo en minutos se muestra entre paréntesis.

#### Objetivo

![Duración restante objetivo temporal](../images/Home2020_TT.png)

* El nivel actual de glucosa en la sangre se muestra en la barra derecha.
* Mantenga presionada la barra de objetivo para establecer un [ objetivo temporal ](../Usage/temptarget.md).
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
* Color of the BG value reflects the status to the defined [range](../Configuration/Preferences#range-for-visualization). 
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

* Mantenga pulsado el icono para abrir el menú para desactivar, suspender, volver a activar el bucle o desconectar / volver a conectar la bomba.
   
   ![Menú de estado de bucle](../images/Home2020_LoopStatusMenu.png)

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
* Las notificaciones de carbohidratos son mucho más sofisticadas que las de la calculadora de bolo. Es posible que vea una sugerencia de carbohidratos mientras que la calculadora de bolo no muestra los carbohidratos faltantes.
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

#### Absolute insulin

* Active insulin including boluses **and basal**.

#### Insulin on board

* Shows the insulin you have on board (= active insulin in your body). It includes insulin from bolus and temporary basal (**but excludes basal rates set in your profile**).
* If there were no [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* IOB can be negative if you have no remaining bolus and zero/low temp for a longer time.
* Decaying depends on your [DIA and insulin profile settings](../Configuration/Config-Builder#local-profile-recommended). 

#### Carbs On Board

* Shows the carbs you have on board (= active, not yet decayed carbs in your body). 
* Decaying depends on the deviations the algorithm detects. 
* If it detects a higher carb absorption than expected, insulin would be given and this will increase IOB (more or less, depending on your safety settings). 

#### Deviations

* **GREY** bars show a deviation due to carbs. 
* **GREEN** bars show that BG is higher than the algorithm expected it to be. Green bars are used to increase resistance in [Autosens](../Usage/Open-APS-features#autosens).
* **RED** bars show that BG is lower than the algorithm expected. Red bars are used to increase sensitivity in [Autosens](../Usage/Open-APS-features#autosens).
* **YELLOW** bars show a deviation due to UAM.

#### Sensitivity

* Shows the sensitivity that [Autosens](../Usage/Open-APS-features#autosens) has detected. 
* Sensitivity is a calculation of sensitivity to insulin as a result of exercise, hormones etc.

#### Actividad

* Shows the activity of insulin, calculated by your insulin profile (it's not derivative of IOB). 
* The value is higher for insulin closer to peak time.
* It would mean to be negative when IOB is decreasing. 

#### Deviation slope

* Internal value used in algorithm.

### Section H - Buttons

![Homescreen buttons](../images/Home2020_Buttons.png)

* Buttons for insulin, carbs and Calculator are 'always on'. 
* Other Buttons have to be setup in [preferences](../Configuration/Preferences#buttons).

#### Insulina

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](../Getting-Started/Screenhots#bolus-wizard).
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

* See [details below](../Configuration/Screenhots#bolus-wizard)

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

![Bolus wizard](../images/Home2020_BolusWizard.png)

When you want to make a meal bolus this is where you will normally make it from.

### Section I

* BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. 
* In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. 
* The CORR field is if you want to modify the end dosage for some reason.
* The CARB TIME field is for pre-bolusing so you can tell the system that there will be a delay before the carbs are to be expected. You can put a negative number in this field if you are bolusing for past carbs.

### Section J

* SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. 
* The idea is to deliver the insulin sooner and hopefully reduce spikes.
* For details visit [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Section K

* Shows the calculated bolus. 
* If the amount of insulin on board already exceeds the calculated bolus then it will just display the amount of carbs still required.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](../Configuration/Preferences#ns-client).

### Section L

* Details of wizard's bolus calculation.
* You can deselect any that you do not want to include but you normally wouldn't want to.
* For safety reasons the **TT box must be ticked manually** if you want the bolus wizard to calculate based on an existing temporary target.

#### Combinations of COB and IOB and what they mean

* For safety reasons IOB boxed cannot be unticked when COB box is ticked as you might run the risk of too much insulin as AAPS is not accounting for what’s already given.
* If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account.
* If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
* If you bolus for **additional food** shortly after a meal bolus (i.e. additional desert) it can be helpful to **untick all boxes**. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

#### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

* If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. 
* So, if you want to bolus again after a previous meal with COB you should be aware of overdosing! 
* For details see the hints on [COB calculation page](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Perfil de Insulina

![Perfil de Insulina](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](../Configuration/Config-Builder#insulin). 
* The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.
* The important thing to note is that the decay has a long tail. 
* If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. 
* However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Estado de Infusora

![Estado de Infusora](../images/Screenshot_PumpStatus.png)

* Different information on pump status. Displayed information depends on your pump model.
* See [pumps page](../Hardware/pumps.rst) for details.

## Portal de Atención (Care Portal)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Review carb calculation

![Review carb calculation on treatment tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](../Getting-Started/Screenshots#bolus-wizard) to calculate insulin dosage you can review this calculation later on treatments tab.
* Just press the green Calc link. (Depending on pump used insulin and carbs can also be shown in one single line in treatments.)

### Carb correction

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

1. Compruebe y recuerde el COB y el IOB actuales en la pantalla de inicio.
2. Depending on pump in treatment tab carbs might be shown together with insulin in one line or as a separate entry (i.e. with Dana RS).
3. Remove the entry with the faulty carb amount.
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
   * Basal rate
   * Target: Blood glucose level that you want AAPS to be aiming for

* You can either use a [local profile](../Configuration/Config-Builder#local-profile-recommended) that can be edited on your smartphone or a [Nightscout profile](../Configuration/Config-Builder#ns-profile) which must be edited on your NS page and transferred to your phone afterwards. For details see the corresponding sections on the [config builder page](../Configuration/Config-Builder.md).

## Treatment

History of the following treatments:

* Bolus & carbs -> option to [remove entries](../Getting-Started/Screenshots#carb-correction) to correct history
* [Bolo extendido](../Usage/Extended-Carbs#id1)
* Temporary basal rate
* [Temporary target](../Usage/temptarget.md)
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