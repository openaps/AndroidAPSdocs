# Configuraciones

Dependiendo de sus ajustes, puede abrir el administrador de configuraciones a través de una pestaña en la parte superior de la pantalla o a través del menú de la hamburguesa.

![Abrir configuraciones](../images/ConfBuild_Open.png)

Configuraciones (Conf.) es la pestaña en la donde se activan y desactivan las características modulares. Las opciones en el lado izquierdo (A) le permiten seleccionar cuál utilizar, las opciones del lado derecho (C) le permiten ver estas como pestañas. (E) en AndroidAPS. En caso de que el recuadro correcto no esté activado, puede llegar a la función utilizando el menú de hamburguesa (D) en la parte superior izquierda de la pantalla.

Cuando hay opciones adicionales disponibles en el módulo, puede hacer clic en la rueda dentada (B), que te llevará a la configuración específica dentro de las preferencias.

**Primera configuración:** En AAPS 2.0 un asistente de instalación le guía a través del proceso de configuración de AndroidAPS. Presione los 3 puntos en la parte superior derecha de la pantalla (F) y seleccione 'Asistente de configuración' para usarlo.

![Caja de configuraciones y engranaje](../images/ConfBuild_ConfigBuilder.png)

## Pestañas o menú de hamburguesa

Con la casilla de verificación, bajo el símbolo de ojo, puede decidir cómo abrir la sección correspondiente del programa.

![Pestañas o menú de hamburguesa](../images/ConfBuild_TabOrHH.png)

## Perfil

Seleccione el perfil basal que desea utilizar. Consulte la página [Perfiles](../Usage/Profiles.md) para obtener más información de configuración.

### Perfil local (recomendado)

El "perfil local" utiliza el perfil basal manualmente ingresado en el teléfono. Tan pronto como se selecciona, aparece una nueva pestaña en AAPS, donde puede cambiar los datos de perfil leídos de la bomba si es necesario. Con la tecla siguiente, el perfil se escriben en la bomba en el perfil 1. Este perfil se recomienda ya que no depende de la conectividad a Internet.

Los perfiles locales forman parte de [ valores exportados ](../Usage/ExportImportSettings.rst). Así que asegúrese de tener una copia de seguridad en un lugar seguro.

![Valores de perfil local](../images/LocalProfile_Settings.png)

Botones:

* verde más: añadir
* rojo X: borrar
* flecha azul: duplicado

Si realiza algún cambio en su perfil, asegúrese de que está editando el perfil correcto. En la pestaña de perfil no siempre se muestra el perfil real que se utiliza-por ejemplo, si usted hizo un cambio de perfil utilizando la pestaña de perfil en la pantalla de inicio puede diferir del perfil realmente mostrado en la pestaña de perfil, ya que no hay ninguna conexión entre estos.

#### Clonar cambio de perfil

Puede crear fácilmente un perfil local nuevo a partir del conmutador de perfil. En este caso, el cambio de tiempo y el porcentaje se aplicarán al nuevo perfil local.

1. Vaya a la pestaña de tratamientos.
2. Seleccionar Cambio de perfil.
3. Pulse "Clonar".
4. Puede editar el nuevo perfil local en la pestaña Perfil local (LP) o a través del menú principal.

![Clonar cambio de perfil](../images/LocalProfile_ClonePS.png)

Si desea cambiar de perfil Nightscout a un perfil local, haga un cambio de perfil en su perfil NS y clone el conmutador de perfil tal como se ha descrito anteriormente.

#### Cargar los perfiles locales para Nightscout

Los perfiles locales también se pueden subir a Nightscout. Los ajustes se pueden encontrar en [NSClient preferences](../Configuration/Preferences#nsclient).

![Cargar el perfil local de NS](../images/LocalProfile_UploadNS2.png)

Ventajas:

* no es necesaria ninguna conexión a Internet para cambiar los valores de perfil
* los cambios de perfil se pueden hacer directamente en el teléfono
* nuevo perfil se puede crear desde el conmutador de perfil
* los perfiles locales también se pueden subir a Nightscout

Desventajas:

* ninguno

### Asistente de perfil

El ayudante de perfil ofrece dos funciones:

1. Encontrar un perfil para niños
2. Comparar dos perfiles o conmutadores de perfil para clonar un perfil nuevo

Los detalles se explican por separado en la [página de ayuda de perfil](../Configuration/profilehelper.rst).

### Perfil NS

El perfil de NS utiliza los perfiles que guardados en el sitio de Nightscout (https: //[yournightscoutsiteaddress]/profile). Puede usar el [Selector de Perfil](../Usage/Profiles.md) para cambiar cuál de los perfiles está activo, y se escribe ese perfil en la bomba en caso de fallo AndroidAPS. Esto le permite crear fácilmente múltiples perfiles en Nightscout (p.ej.. trabajo, casa, deportes, vacaciones, etc.). Poco después de hacer clic en "Guardar" serán transferidos a AAPS si su smartphone está en línea. Incluso sin conexión a Internet o sin conexión a Nightscout, los perfiles de Nightscout están disponibles en AAPS una vez que se han sincronizado.

Realice un **cambio de perfil** para activar un perfil de Nightscout. Mantén pulsado el perfil actual en la pantalla de inicio AAPS en la parte superior (campo gris entre el campo azul claro "Lazo Abrierto/Cerrado" y el campo azul oscuro Objetivo) > Cambio de perfil > Seleccionar perfil > Aceptar. AAPS también escribe el perfil seleccionado en la bomba después de que el cambio de perfil, de modo que esté disponible sin AAPS en caso de emergencia y continúa su ejecución.

Ventajas:

* perfiles múltiples
* fácil de editar por PC o tablet

Desventajas:

* no hay cambios locales en la configuración del perfil
* el perfil no puede ser cambiado directamente en el teléfono

## Insulina

Seleccione el tipo de curva de insulina que está usando. Las opciones 'Rapid-Acting Oref', Ultra-Rapid Oref' y 'Free-Peak Oref' tienen una forma exponencial. Más información disponible en [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), las curvas varían según el DIA y el tiempo de pico de acción.

La DIA no es la misma para cada persona. Es por eso que tienes que probarlo por ti mismo. Pero siempre debe ser de al menos 5 horas. Puede leer más sobre esto en la sección Perfil de Insulina de [aqui](../Getting-Started/Screenshots#insulin-profile).

Para Rapid-Acting y Ultra-Rapid, el DIA es la única variable que se puede ajustar por ti mismo, el tiempo de pico es fijo. Free-Peak te permite ajustar tanto el DIA como el tiempo hasta el pico, y sólo debe ser utilizado por los usuarios avanzados que conocen los efectos de estos ajustes.

El [gráfico de la curva de insulina](../Getting-Started/Screenshots#insulin-profile) le ayuda a comprender las diferentes curvas. Puede verlo habilitando la casilla de verificación para mostrarla como una pestaña, de lo contrario estará en el menú.

### Rapid-Acting Oref

* recomendado para Humalog, Novolog y Novorapid
* DIA = al menos 5.0h
* Máximo pico = 75 minutos después de la inyección (fijo, no ajustable)

### Ultra-Rapid Oref

* recomendado para FIASP
* DIA = al menos 5.0h
* Máximo pico = 55 minutos después de la inyección (fijo, no ajustable)

Para mucha gente no hay prácticamente ningún efecto visible de FIASP después de 3-4 horas, incluso si las unidades 0.0xx están disponibles como regla en ese momento. Esta cantidad residual puede actuar durante los deportes, por ejemplo. Por lo tanto, AndroidAPS utiliza el mínimo de 5h como DIA.

![Configuración Ultra-Rapid Oref](../images/ConfBuild_UltraRapidOref.png)

### Free-Peak Oref

Con el perfil "Free Peak 0ref" usted puede ingresar individualmente el tiempo del pico. El DIA se establece automáticamente en 5 horas si no se especifica un valor superior en el perfil.

Este perfil de efecto se recomienda si se utiliza una insulina no respaldada o una mezcla de insulinas diferentes.

## Fuentes de BG (datos de glucemia)

Seleccione la fuente de glucosa en sangre que está utilizando: consulte la página [BG Fuentes ](BG-Source.rst) para obtener más información de configuración.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [ Spip ](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de)-sólo se da soporte a la versión 4.15.57 y posterior
* [Dexcom App (parche) ](https://github.com/dexcomapp/dexcomapp/) -Seleccione 'Enviar datos de BG a xDrip +' si desea utilizar las alarmas xDrip +.
    
    ![Configurar origen de BG](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) para dispositivo MiaoMiao
* BG aleatorio: genera datos BG aleatorios (sólo demostración)

## Bomba

Seleccione la bomba que está utilizando.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Coreano (para la bomba DanaR)
* Dana Rv2 (bomba DanaR con actualización de firmware no oficial)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu-Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requiere la instalación de ruffy)
* [Medtronic](MedtronicPump.md)
* MDI (recibir sugerencias de AAPS para su terapia de inyecciones múltiples diarias)
* Bomba virtual (bucle abierto para la bomba que no tiene ningún controlador todavía-sólo sugerencias de AAPS)

Para las bombas dana, utilice ** Valores avanzados ** para activar el control de BT si es necesario. Desactiva bluetooth por un segundo si no es posible ninguna conexión a la bomba. Esto puede ayudar en algunos teléfonos donde la pila (Stack) Bluetooth se congela (freezes).

[La contraseña para la bomba de Dana RS](../Configuration/DanaRS-Insulin-Pump.md) debe especificarse correctamente. La contraseña no se ha comprobado en versiones anteriores.

## Detección de sensibilidad

Seleccione el tipo de detección de sensibilidad. Para más detalles de los diferentes diseños por favor [leer aquí](../Configuration/Sensitivity-detection-and-COB.md). Esto analizará los datos históricos sobre la marcha y realizará ajustes si reconoce que está reaccionando con más sensibilidad (o a la inversa, más resistente) a la insulina de lo habitual. Se pueden leer más detalles sobre el algoritmo de Sensibilidad en el [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

Usted puede ver su sensibilidad en la pantalla de inicio seleccionando SEN y viendo la línea blanca. Tenga en cuenta que debe estar en el [ Objetivo 8 ](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) para permitir que la detección de sensibilidad/[ Autosens ](../Usage/Open-APS-features#autosens) ajuste automáticamente la cantidad de insulina suministrada. Antes de alcanzar ese objetivo, el porcentaje de Autosens/la línea en el gráfico se muestra sólo para información.

### Ajustes absorción

Si utiliza Oref1 con SMB, debe cambiar **min_5m_carbimpact ** a 8. El valor sólo se utiliza durante las diferencias en las lecturas de CGM o cuando la actividad física "utiliza" todo el aumento de la glucosa en la sangre, lo que de otra manera causaría que la AAPS descienda a COB. A veces, cuando [ absorción de carbohidratos ](../Usage/COB-calculation.rst) no se puede elaborar dinámicamente basándose en su cambios de glucosa, se inserta un ajuste por medio de los carbohidratos. Básicamente, es un seguro contra fallos.

## APS

Seleccione el algoritmo APS deseado para realizar los ajustes de la terapia. Puede ver los detalles activos del algoritmo elegido en la pestaña OpenAPS(OAPS).

* OpenAPS AMA (asistencia de comida avanzada, estado del algoritmo en 2017)   
    Más detalles acerca de OpenAPS AMA se pueden encontrar en [OpenAPS docs ](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). En términos simples los beneficios son después de que usted se ponga un bolo de comida el sistema puede programar una basal temporal alta más rápidamente SI introduce los carbohidratos de manera fiable. 
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolo, el más reciente algoritmo para usuarios avanzados)  
    Nota: debe estar en [Objetivo 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) para utilizar OpenAPS SMB y min_5m_carbimpact debe estar ajustado a 8 en el Config builder > Sensibilidad de detección > Valor de sensibilidad Oref1.

## Loop

* Cambie entre Lazo Abierto, Lazo Cerrado y Suspensión con Glucosa Baja (SGB).

![Asistente de configuración - Modo lazo](../images/ConfigBuilder_LoopLGS.png)

### Lazo abierto

* AAPS evalúa continuamente todos los datos disponibles (IOB, COB, BG...) y hace sugerencias de tratamiento sobre cómo ajustar su terapia si es necesario. 
* Las sugerencias no se ejecutarán automáticamente (como en el bucle cerrado) deben introducirse manualmente en la bomba o usando un botón en caso de que esté usando una bomba compatible (Dana R/RS o Accu Chek Combo). 
* Esta opción es para conocer cómo funciona AndroidAPS o si está usando una bomba no soportada.

### Lazo cerrado

* AAPS evalúa continuamente todos los datos disponibles (IOB, COB, BG...) y ajusta automáticamente el tratamiento si es necesario (es decir, sin intervención adicional) para alcanzar el rango o valor de destino establecido (entrega en bolo, velocidad basal temporal, cambio de insulina para evitar la hipoglucemia, etc.). 
* El Loop Cerrado funciona dentro de numerosos límites de seguridad, que se pueden establecer individualmente.
* El Lazo Cerrado sólo es posible si está en [Objetivo 6 ](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) o superior y utiliza una bomba soportada.
* Tenga en cuenta: En el modo de bucle cerrado, se recomienda un solo objetivo en lugar del rango objetivo (es decir, 5,5 mmol o 100 mg/dl en lugar de 5,0 - 7,0 mmol o 90 - 125 mg/dl).

### Suspensión por glucosa baja (SGB)

* maxIOB se establece en cero
* Esto significa que si la glucosa en sangre está disminuyendo, puede reducir la basal.
* Pero si la glucosa en sangre está aumentando, no se hará ninguna corrección automática. Sus tasas basales seguirán siendo las mismas que su perfil seleccionado.
* Sólo si el IOB basal es negativo (después de una suspensión de glucosa baja previa) se administrará insulina adicional a la parte baja de BG.

### Valor mínimo de cambio

* Cuando se utiliza en lazo abierto recibirás notificaciones cada vez que AAPS recomienda ajustar basal. 
* Para reducir el número de notificaciones puede usar un rango de objetivo más amplio o aumentar el porcentaje de la tasa mínima de solicitud.
* Esto define el cambio relativo necesario para desencadenar una notificación.

## Objetivos (programa de aprendizaje)

AndroidAPS tiene un programa de aprendizaje (objetivos) que debes cumplir paso a paso. Esto debe guiarle de forma segura hacia la configuración de un sistema de bucle cerrado. Esto garantiza que usted tiene configurado todo correctamente y que entienda lo que el sistema hace exactamente. Esta es la única forma en la que puede confiar en el sistema.

Debería [exportar sus ajustes](../Usage/ExportImportSettings.rst) (incluyendo el progreso de los objetivos) regularmente. En caso de que tenga que reemplazar su móvil más tarde (compra de uno nuevo, daños de pantalla, etc.), simplemente puede importar estos ajustes.

Consulte la página [Objetivos](../Usage/Objectives.rst) para obtener más información de configuración.

## Tratamientos

Si ve la pestaña Tratamientos (Trat), usted puede ver los tratamientos que se han subido a nightscout. Si desea editar o borrar una entrada (por ejemplo, comió menos carbohidratos de lo que esperaba), seleccione 'Eliminar' y especifique el nuevo valor (cambie la hora si es necesario) a través del botón [ carbohidratos en la pantalla inicial ](../Getting-Started/Screenshots#carb-correction).

## General

### Inicio

Muestra el estado actual de su lazo y los botones para las acciones más comunes (ver [sección de La Pantalla de inicio](../Getting-Started/Screenshots.md) para obtener más detalles). Se puede acceder a los valores haciendo clic en el icono rueda dentada.

#### Mantener pantalla activa

La opción 'Mantener pantalla encendida' obligará a Android a mantener la pantalla encendida en todo momento. Esto es útil para presentaciones, etc. Pero consume una gran cantidad de energía de la batería. Por lo tanto, se recomienda conectar el móvil con un cable a un cargador.

#### Botones

Definir los Botones que se muestran en la pantalla de inicio.

* Tratamientos
* Calculadora
* Insulina
* Carbohidratos [g]
* MCG (abre xDrip +)
* Calibración

Además, puede establecer accesos directos para los incrementos de insulina y carbohidratos y decidir si el campo de notas debe mostrarse en los diálogos de tratamiento.

#### Asistente configuración

Crear un botón para una determinada comida estándar (carbohidratos y método de cálculo para el bolo) que se mostrará en la pantalla de inicio. Usar para comidas que se consumen con frecuencia. Si se especifican diferentes horas para las diferentes comidas, siempre tendrá el botón de comida adecuado en la pantalla de inicio, dependiendo de la hora del día.

Nota: el botón, no será visible si se encuentra fuera del intervalo de tiempo especificado, o si usted tiene suficiente IOB para cubrir los hidratos de carbono definidos en el botón asistente rápido (QuickWizard).

![Configuración del asistente rápido](../images/ConfBuild_QuickWizard.png)

#### Objetivo temporal por defecto

Elegir objetivos temporales por defecto (duración y objetivo). Los valores preestablecidos son:

* comer pronto: objetivo 72 mg/dl / 4,0 mmol/l, duración 45 min
* actividad: objetivo 140 mg/dl / 7,8 mmol/l, duración 90 min
* hipo: objetivo 125 mg/dl / 6,9 mmol/l, duración 45 min

#### Llenar/Rellenar cantidad de insulina estándar

Elija las cantidades predeterminadas de los tres botones en el diálogo de llenado/cebado, según la longitud de su catéter.

#### Rango de visualización

Elija las marcas altas y bajas para el gráfico BG en la descripción general de AndroidAPS y el reloj inteligente. Es solo la visualización, no el rango objetivo para tu BG. Ejemplo: 70-180 mg/dl ó 3,9-10 mmol/l

#### Título corto en pestaña

Elija si los títulos de las pestañas en AndroidAPS son largos (por ejemplo, ACCIONES, PERFIL LOCAL, AUTOMATIZACIÓN) o cortos (por ejemplo, ACT, LP, AUTO)

#### Mostrar el campo notas en diálogos de tratamientos

Elige si deseas tener un campo de notas al entrar en tratamientos o no.

#### Luces de estado

Elige si deseas tener [ luces de estado ](../Configuration/Preferences#status-lights) en la descripción general de la edad de la cánula, la edad de la insulina, la edad del sensor, la edad de la batería, el nivel del depósito o el nivel de la batería. Cuando se alcanza el nivel de advertencia, el color de la luz de estado cambiará a amarillo. La edad crítica se mostrará en rojo.

#### Ajustes avanzados

** Administrar esta parte del resultado del asistente de bolo**: cuando se usa SMB, muchas personas no administran el 100% de la insulina necesaria en bolo alimenticio, sino solo una parte (por ejemplo, 75%) y dejan el SMB con UAM (detección de comida sin supervisión) haga el resto. En esta configuración, puede elegir un valor predeterminado para el porcentaje con el que el asistente de bolo debe calcular. Si este ajuste es del 75% y tuvo que administrar un bolo de 10 u, el asistente de bolo le propondrá un bolo de comida de solo 7,5 unidades.

**Habilite la función de superbolo en el asistente ** (¡Es diferente de * supermicrobolus *!): Use con precaución y no la habilite hasta que sepa lo que realmente hace. Básicamente, el basal para las próximas dos horas se añade al bolo y se activa un tiempo cero de dos horas. **Las funciones de bucle AAPS se inhabilitarán, por lo que se debe utilizar con precaución! Si utiliza las funciones de bucle de SMB, AAPS se inhabilitará de acuerdo con los valores en ["Máx minutos de basal para limitar SMB a" ](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), si no utiliza funciones de bucle de SMB se inhabilitarán durante dos horas. ** Detalles de super bolo pueden encontrarse [aquí ](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Acciones

Algunos botones para acceder rápidamente a funciones comunes:

* Conmutador de perfiles (consulte el apartado [Página de perfiles](../Usage/Profiles.md) para obtener más información de configuración)
* Objetivos temporales
* Establecer / cancelar temporal. dosis basal
* Bolo extendido (sólo la bomba DanaR/RS o Combo)
* Registro para cualquier entrada de cuidados
    
    * Medir glucosa
    * Cambio de cánula y llenado - registro de cambio cánula y llenado (si no se hace en la bomba)
    * Inserción de sensor
    * Cambio batería bomba
    * Nota
    * Ejercicio
* Ver el tiempo del sensor actual, la insulina, la cánula y la batería de la bomba
* Historial
* TDD (dosis diaria total = bolo + basal por día)

Algunos médicos usan -especialmente para los recién iniciados en las bombas- una relación basal-bolo de 50:50. Por lo tanto, la proporción se calcula como TDD / 2 * TBB (Total base basal = suma de la tasa basal en 24 horas). Otros prefieren un rango de 32% a 37% de TDD para TBB. Al igual que la mayoría de estas reglas empíricas, su validez real es limitada. Nota: ¡Tu diabetes puede variar!

![Pestaña de acción](../images/ConfBuild_ConfBuild_Actions_b.png)

### Automatización

Tareas de automatización definidas por el usuario ('si-entonces-si no'). Por favor, [lee aquí](../Usage/Automation.rst).

### Comunicaciones SMS

Permite a los cuidadores remotos controlar algunas características de AndroidAPS a través de SMS, ver [mandos SMS ](../Children/SMS-Commands.rst) para obtener más información de configuración.

### Comida

Muestra los valores de alimentos definidos en la base de datos de alimentos de Nightscout, consulte el apartado [Información de Nightscout](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) para obtener más información de configuración.

Nota: Las entradas no se pueden utilizar en la calculadora AndroidAPS. (Ver solamente)

### Reloj

Vigile y controle AAPS con su reloj Android Wear (vea [pagina de pantallas de reloj](../Configuration/Watchfaces.md)). Utilice la configuración (engranaje) para definir las variables que deben tenerse en cuenta a la hora de calcular el bolo dado a través de su reloj (por ejemplo, la tendencia de 15min, COB...).

Si desea bolo etc. desde el reloj entonces dentro de "Configuración de Reloj" que necesitas para activar "Controles desde el Reloj".

![Ajustes reloj](../images/ConfBuild_Wear.png)

A través de la pestaña Reloj o el menú de hamburguesa (la parte superior izquierda de la pantalla, si no se visualiza el tabulador) puede

* Reenviar todos los datos. Puede ser útil si el reloj no estuvo conectado durante algún tiempo y desea enviar la información al reloj.
* Abre los ajustes en tu reloj directamente desde tu teléfono.

### Linea de estado xDrip (reloj)

Visualizar información de bucle en el reloj de xDrip + (si no está utilizando AAPS/[AAPSv2 watchface ](../Configuration/Watchfaces.md)

### NSClient

* Configuración de la sincronización de datos de su AndroidAPS con Nightscout.
* Los ajustes en [preferencias](../Configuration/Preferences#nsclient) se pueden abrir haciendo clic en la rueda del engranaje.

### Mantenimiento

Correo electrónico y número de registros que se van a enviar. Normalmente no es necesario ningún cambio.

### Configuraciones

Utilice la pestaña para configuraciones en lugar del menú hamburgesa.