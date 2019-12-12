# Preguntas frecuentes para loopers

¿Como añadir preguntas a las FAQ?: Siga las siguientes [instrucciones](../make-a-PR.md)

# General

## ¿Puedo descargar directamente el archivo de instalación AndroidAPS?

No. No hay ningún archivo de apk descargable para AndroidAPS. Tienes que [montarlo](../Installing-AndroidAPS/Building-APK.md) tu mismo. Te explicamos el porqué:

AndroidAPS se utiliza para controlar tu bomba y para suministrar insulina. Según los reglamentos vigentes, en Europa todos los sistemas de clase IIa o IIb se consideran dispositivos médicos que requieren aprobación regulatoria (una marca CE) para la que se necesitan varios estudios y revisiones. La distribución de dispositivos no regulados es ilegal. Existen reglamentos similares en otras partes del mundo.

Esta reglamentación no se limita a la venta de material (en el sentido de obtener dinero para algo), sino que se aplica a cualquier forma de distribución (incluidas las distribuciones gratuitas). Construir un dispositivo médico para uno mismo es la única manera de no verse afectado por estas regulaciones.

Esta es la razón por lo que las apks no están disponibles.

## ¿Cómo empezar?

En primer lugar, necesitas **obtener componentes de hardware utilizables**:

* Una [bomba de insulina compatible ](Pump-Choices.md), 
* un [smartphone Android ](Phones.md) (Apple iOS no es compatible con AndroidAPS, puedes probar con [iOS Loop ](https://loopkit.github.io/loopdocs/)) y 
* un [sistema de monitorización continua de glucosa](../Configuration/BG-Source.rst) (Mcg). 

En segundo lugar, tienes que **configurar el hardware **. Ver el ejemplo del [tutorial de configuración paso a paso](Sample-Setup.md).

En tercer lugar, tienes que **configurar los componentes de software **: AndroidAPS y la fuente MCG/FGM.

En cuarto lugar, tienes que aprender y **entender el "diseño de referencia" de OpenAPS para comprobar los parámetros de tu tratamiento **. El principio fundamental del lazo cerrado es que tu basal y tus ratios de hidratos sean precisos. Todas las recomendaciones presuponen que tus necesidades basales están ajustadas y que cualquier pico o bajada observados vienen provocados por otros factores y que por lo tanto requieren de ajustes esporádicos (ejercicio, estrés, etc.). Los ajustes que el lazo cerrado puede realizar han sido limitados por seguridad (ver basal temporal máxima permitida en [OpenAPS Reference Design](https://openaps.org/reference-design/)), es preferible no utilizar las dosis disponibles para corregir basales mal ajustadas. Si por ejemplo usted frecuentemente esta bajo al aproximarse a una comida, entonces es probable que su basal tenga que ajustarse. Puedes usar [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) para analizar tus registros de datos y comprobar si es necesario (y con que valores) modificar tus basales, tu factor de sensibilidad (ISF) o los ratios de hidratos. O puedes probar y establecer tu basal [con el método tradicional](http://integrateddiabetes.com/basal-testing/).

## ¿Qué aspectos prácticos de lazo tengo?

### Protección con contraseña

Si quieres proteger tus preferencias, dirígete al "Menú de Preferencias" y selecciona "Contraseña para ajustes", luego escribe la contraseña que elijas. La próxima vez que vayas al menú de preferencias, preguntará por esa contraseña antes de poder continuar. Si más adelante quieres eliminar ésta opción, vuelve a "Contraseña para ajustes" y suprime el texto.

### Relojes inteligentes Android Wear

Si tienes previsto utilizar la aplicación "android wear" para suministrar bolos o cambiar configuraciones desde un smartwatch, debes asegurarte de que las notificaciones de AndroidAPS no están bloqueadas. La confirmación de la acción se realiza a través de la notificación.

### Desconectando la bomba

Si te quitas la bomba para ducharte/bañarte/nadar/hacer deporte/ etc. debes indicarselo a AndroidAPS para que tenga en cuenta que no se ha suministrado insulina durante ese tiempo y mantener la IOB correcta.

* Mantén pulsado el botón "Lazo Cerrado" ( "Lazo Abierto" si aún no lo has cerrado) en la parte superior de la pantalla. 
* Selecciona **'Desconectar bomba XY min'**
* Esto establecerá tu basal a cero durante ese periodo de tiempo.
* La duración mínima de la desconexión vendrá fijada por la duración mínima de basales temporales (TBR) que permita la bomba. Por lo tanto, si deseas desconectarte durante un periodo de tiempo más corto, deberás utilizar el tiempo de desconexión más corto disponible en tu bomba y volver a conectarte manualmente tal como se describe a continuación.
* El botón 'Lazo Cerrado' (o 'Lazo Abierto') aparecerá en rojo con el texto 'Desconectado (xx m)' mostrando el tiempo restante de desconexión.
* AAPS volverá a conectar la bomba, automáticamente, una vez haya transcurrido el tiempo seleccionado y el lazo cerrado empezará a funcionar de nuevo.
    
    ![Desconectando la bomba](../images/PumpDisconnect.png)

* Es posible reconectar manualmente la bomba antes de que haya transcurrido el tiempo seleccionado.

* Manten pulsado el botón rojo 'Desconectado (xx m)'.
* Selecciona "Reconectar bomba"
    
    ![Reconectando la bomba](../images/PumpReconnect.png)

### Las recomendaciones no se basan en lecturas aisladas del sensor

Por razones de seguridad, las recomendaciones no se basan en una sola lectura del sensor (MCG), sino en promedios de variaciones (delta). Por lo tanto, si se pierden algunas mediciones, puede pasar un tiempo entre que se vuelvan a recibir datos y que AndroidAPS vuelva a iniciar el lazo.

### Lecturas adicionales

Hay varios blogs con buenos consejos y sugerencias para ayudarte a entender cómo funciona el lazo:

* ['Fine-tuning Settings'](http://seemycgm.com/2017/10/29/fine-tuning-settings/) en 'See my CGM'
* ['Why DIA matters'](http://seemycgm.com/2017/08/09/why-dia-matters/) en 'See my CGM'
* ['Limiting meal spikes'](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) en #DIYPS
* ['Hormones and autosens'](http://seemycgm.com/2017/06/06/hormones-2/) en 'See my CGM'

## ¿Qué equipo de emergencia se recomienda llevar?

En primer lugar, tienes que llevar el mismo equipo de emergencia que llevarías como T1D con terapia de bomba de insulina. Como usuario de AndroidAPS, se recomienda, encarecidamente, tener cerca el siguiente equipo adicional:

* Cargador extra para tu móvil, smartwatch y (quizá) lector de BlueTooth
* Copia de seguridad en la nube (Dropbox, Google Drive...) de las aplicaciones que usas: la última apk de AndroidAPS y la contraseña de tu "key store", el fichero de preferencias AndroidAPS, el fichero de preferencias de xDrip, la app parcheada de Dexcom,....
* Baterias para la bomba

## ¿Cómo asegurar el sensor CGM/FGM?

Puedes pegarlo con cinta adhesiva: se venden parches adhersivos perforados para los sensores habituales (busca en Google o eBay). Algunos loopers utilizan la cinta de kinesiología estándar (más barata) o cinta Rocktape.

Puedes fijarlo: se venden brazaletes para la parte superior del brazo que sujetan el MCG/FGM con una banda de goma ( busca en Google o eBay).

# Ajustes en AndroidAPS

La lista siguiente trata de ayudarte a optimizar los valores de tus ajustes. Quizás sea mejor empezar por los principales y bajar a detalle progresivamente. Trata de tener un ajuste correcto antes de pasar al siguiente. Procura realizar pequeñas modificaciones en lugar de hacer grande cambios de golpe. Puedes utilizar [Autotune ](https://autotuneweb.azurewebsites.net/) como orientación, aunque no se debe seguir ciegamente: puede que no funcione bien para ti en todas las circunstancias. Ten en cuenta que hay parámetros que interactuan con otros - puedes tener ajustes 'incorrectos' que en conjunto funcionan bien en algunas situaciones (p.e. si una basal demasiado alta coincide en el tiempo con CR demasiado alto) pero no en otras. Esto significa que es necesario tener en cuenta todos los valores y comprobar que trabajan juntos en una variedad de circunstancias.

## Duración de la actividad de la insulina (DIA)

### Descripción & pruebas

El tiempo que tarda la insulina en dejar de hacer efecto.

A menudo se elige un valor demasiado pequeño. Para la mayoría de gente estará en al menos 5 horas, y a veces 6 ó 7.

### Impacto

Un valor demasiado pequeño puede llevar a glucemias bajas. Y viceversa.

Si la DIA es demasiado pequeña, AAPS pensará antes de tiempo que la insulina del bolo anterior ya se ha consumido, y, estando con valores altos de glucemia, suministrará más insulina. (En realidad, no espera tanto tiempo, sino que predice lo que ocurriría, y sigue añadiendo la insulina). Básicamente, esto crea excedentes de insulina que AAPS no considerará en sus cálculos por considerar que ya se ha consumido.

Un ejemplo de DIA demasiado pequeña serían: valores altos de glucemia seguidos de sobre-correciones por parte de AAPS, provocando valores demasiado bajos de glucemia.

## Programación de basales (U/h)

### Descripción & pruebas

Es el caudal de insulina (Unidades / hora) en una determinada franja horaria para mantener la BG a un nivel estable.

Prueba tus basales deteniendo el lazo, ayunando, esperando unas 5 horas después de comer (para asgurar que ya has digerido los hidratos) y viendo como evoluciona tu BG. Repite unas cuantas veces.

Si la BG va disminuyendo, la basal es demasiado alta. Y viceversa.

### Impacto

Basales demasiado elevadas pueden provocar BG demasido bajas. Y viceversa.

AAPS toma como referencia las basales por defecto. Si una basal es demasiado alta, una "temporal a zero" (utilizadas para contrarrestar excesos de insulina) provocará que la IOB calculada disminuya más de lo que debería. Esto provocará que AAPS genere más correcciones de las que debería para llevar la IOB finalmente a cero.

Por lo tanto, una basal demasiado alta generará BG bajas, mientras dure esa basal y algunas horas más hasta que AAPS corrija a objetivo.

Por el contrario, una basal demasiado baja puede llevar a BG altas, y a la imposibilidad de reducir los niveles hasta el objetivo.

## Factor de sensibilidad a la insulina (ISF) (mmol/l/U o mg/dl/U)

### Descripción & pruebas

La disminución de BG esperada ante una dosis de 1U de insulina.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

A continuación, suministrate una cantidad determinada de insulina y observa la variación en tu BG (para acercarte a tu objetivo puedes probar con: [BG-Objetivo] * 1/ISF).

Ve con cuidado, a menudo este parámetro se establece demasido bajo. Demasiado bajo, significa que 1 U bajará la BG más y más rápido de lo esperado!!.

### Impacto

**Lower ISF** (i.e. 40 instead of 50) = more aggressive / stronger leading to a bigger drop in BGs for each unit of insulin. Valores demasiado bajos pueden provocar glucemias demasiado bajas.

**Mayor ISF** (p.e. 45 en lugar de 35) = menos agresivo / más débil - provocando descensos menores de BG por cada unidad de insulina. Valores demasiado altos pueden provocar glucemias demasiado altas.

**Example:**

* BG de 190 mg/dl (10,5 mmol) y el objetivo es de 100 mg/dl (5,6 mmol). 
* Por lo tanto, necesitas una corrección de 90 mg/dl (= 190-100).
* ISF = 30 => 90/30 = 3 unidades de insulina
* ISF = 45 => 90/45 = 2 unidades de insulina

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. Esto puede derivar en "montañas rusas" de BG ( especialmente en ayunas). En estas circunstancias necesitas aumentar tu ISF. In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Ratio Carbohidratos/Insulina (IC) (g/U)

### Descripción & pruebas

Gramos de carbohidratos por unidad de insulina.

Algunas personas también utilizan I:C en lugar de IC o hablan de la proporción de carbohidratos (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. (es recomendable que comas en tu horario habitual y que cuentes los hidratos con precisión).

> **NOTA:**
> 
> En algunos países Europeos unidades pan fueron utilizadas para la determinación de la cantidad de insulina que se necesita para la comida. At the beginning 1 bread unit equaled 12g of carbs, later some changed to 10g of carbs.
> 
> In this model the amount of carbs was fixed and the amount of insulin was variable. ("¿Cuánta insulina se necesita para cubrir una sola unidad de pan?")
> 
> Cuando se utiliza IC, la cantidad de insulina es fija y la cantidad de carbohidratos es variable. ("¿Cuántos gr de carbohidratos pueden estar cubiertos por una sola unidad de insulina?")
> 
> Example:
> 
> Unidad factor de pan (BU = 12g carbs) de: 2,4 -> Se necesitan 2,4 unidades de insulina cuando se come una sola unidad de pan.
> 
> IC correspondiente: 12/2,4 = 5,2 -> 5,2 g de carbohidratos pueden estar cubiertos con una sola unidad de insulina.
> 
> Las tablas de conversión están disponibles en línea, por ejemplo, [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impacto

**Menor IC** = menos comida por unidad, es decir, obtendrás más insulina por cantidad fija de hidratos. Podríamos decir que es "más agresiva".

**Mayor IC** = más comida por unidad, es decir, obtendrás menos insulina por cantidad fija de hidratos. Podríamos decir que es "menos agresiva".

Si, una vez digerida la comida y con la IOB a cero, tu BG continua más alta que antes de comer, es probable que tu IC sea demasiado grande. Por el contrario, si tu BG es menor que antes de comer, tu IC es demasiado pequeña.

# Algoritmo APS

## ¿Por qué se muestra "dia: 3" en la pestaña "OPENAPS AMA", a pesar de que tengo un DIA diferente en mi perfil?

![AMA 3h](../images/Screenshot_AMA3h.png)

En AMA, DIA en realidad no significa la "duración de la actividad de la insulina ". Es un parámetro que tiene cierta relacion con DIA. En este caso significa, "el tiempo en le que la corrección debería haber acabado". No participan en el cáclulo de la IOB. En OpenAPS SMB, este parámetro ya no es necesario.

## Perfil

### ¿Por qué usar una DIA de 5h como mínimo (duración de la actividad de la insulina) en lugar de 2-3h?

Bien explicado en [este artículo ](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). No te olvides de `ACTIVAR EL PERFIL` después de modificar tu DIA.

### ¿Por qué motivo mi lazo baja mis BG hasta valores de hipo-glucemia sin COB?

En primer lugar, comprueba tu basal y realiza una prueba de basal sin hidratos. Si están correctas, este comportamiento tendrá origen en un ISF demasiado bajo. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### What causes high postprandial peaks in closed loop?

En primer lugar, comprueba tu basal y realiza una prueba de basal sin hidratos. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Other settings

## Nightscout settings

### AndroidAPS NSClient says 'not allowed' and does not upload data. What can I do?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM settings

### Why does AndroidAPS say 'BG source doesn't support advanced filtering'?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pump

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

* reduce the length of time the LCD stays on (within pump settings menu)
* reduce the length of time the backlight stays on (within pump settings menu)
* select notification settings to a beep rather than vibrate (within pump settings menu)
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
    
    For example, to whitelist on a Samsung phone running Android Pie:
    
    * Go to Settings -> Device Care -> Battery 
    * Scroll until you find AndroidAPS and select it 
    * De-select "Put app to sleep"
    * ALSO go to Settings -> Apps -> (Three circle symbol in the top-right of the screen) select "special access" -> Optimize battery usage
    * Scroll to AndroidAPS and make sure it is de-selected.

* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.

* for [Dana R/RS pumps](../Configuration/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life)

### Changing reservoirs and cannulas

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Wallpaper

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones#phone-background).

## Daily usage

### Hygiene

#### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Work

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a [profile switch](../Usage/Profiles.md) for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a [time shift of your profile](../Usage/Profiles#time-shift) when standing up much earlier or later than regular. If you are using [Nightscout profiles](../Configuration/Config-Builder#ns-profile), you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Leisure activities

### Sports

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

* Make a [profile switch](../Usage/Profiles.md) < 100%.
* Set an [activity temp target](../Usage/temptarget#activity-temp-target) above your standard target.
* If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and postprocessing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.rst) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right.

See [description above](../Getting-Started/FAQ#disconnect-pump).

### Drinking alcohol

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deactivating closed loop mode and treating the diabetes manually or
* setting high temp targets and deactivating UAM to avoid the loop increasing IOB due to an unattended meal or
* do a profile switch to noticeably less than 100% 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Sleeping

#### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via Nightscout):

1. Turn on airplane mode in your mobile.
2. Wait until the airplane mode is active.
3. Turn on Bluetooth.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Inter-app Ajustes Básicos Identificar receptor](../images/xDrip_InterApp_NS.png)

### Travelling

#### How to deal with time zone changes?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medical topics

### Hospitalization

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Medical appointment with your endocrinologist

#### Reporting

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).