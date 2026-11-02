# Accu-Chek Combo

**Este software es parte de una solución DIY (hazlo tú mismo) y no es un producto: requiere que TÚ leas, aprendas y entiendas el sistema, incluido cómo usarlo. No es algo que gestione toda tu diabetes por ti, pero te permite mejorar tu diabetes y tu calidad de vida si estás dispuesto a dedicarle el tiempo necesario. No te apresures; date tiempo para aprender. Solo tú eres responsable de lo que haces con él.**

```{admonition} Accu-Chek Combo is being phased out
:class: note

Roche se retira del mercado de bombas de insulina para centrar su oferta para la diabetes en el MCG Accu-Chek SmartGuide. Ha anunciado el fin de la venta de las bombas Accu-Chek Combo y Accu-Chek Insight; su otra bomba, la microbomba Accu-Chek Solo, también se está retirando (últimas entregas en Alemania a finales de 2025). El cambio se hace por regiones: empieza en Alemania y se espera que sigan otros mercados europeos. Si dependes de esta bomba, planifica con tiempo el paso a una bomba compatible.
```

```{contents} Table of contents
:depth: 1
:local: true
```

## Funciones de la bomba con AAPS

* Se comunica con **AAPS** mediante el Bluetooth propio del teléfono, sin un dispositivo de comunicación adicional.
* Gestión automática del horario de verano (DST) y de la zona horaria.

## Requisitos de hardware y software

* Una bomba de insulina Roche Accu-Chek Combo (cualquier firmware, todos funcionan).
* Un dispositivo Smartpix o Realtyme junto con el software de configuración 360 para configurar la bomba. (Roche envía gratis los dispositivos Smartpix y el software de configuración a sus clientes si lo piden.)
* Un teléfono compatible con Android 12 o más reciente. Consulta las [Notas de la versión](#maintenance-android-version-aaps-version) para más detalles.
* La app **AAPS** instalada en tu teléfono.

Algunos teléfonos pueden funcionar mejor que otros, según la calidad de su Bluetooth y si tienen o no una lógica de ahorro de energía adicional y muy agresiva. Hay una lista de teléfonos en el documento [Teléfonos](#Phones-list-of-tested-phones). Ten en cuenta que esta lista no está completa y refleja la experiencia personal de los usuarios. Te animamos a añadir también tu experiencia y así ayudar a otros (estos proyectos se basan en devolver la ayuda recibida).

(combov2-before-you-begin)=
## Antes de empezar

**LA SEGURIDAD ES LO PRIMERO**: no hagas este proceso en un entorno donde no puedas recuperarte de un error. Ten a mano tu dispositivo Smartpix / Realtyme y el software de configuración 360. Calcula aproximadamente una hora para configurarlo todo y comprobar que todo funciona correctamente.

Ten en cuenta las siguientes limitaciones:

* El bolo extendido y el bolo multionda no se admiten por ahora (en su lugar puedes usar [Carbohidratos extendidos (eCarbs)](../DailyLifeWithAaps/ExtendedCarbs.md)).
* Solo se admite un perfil basal (el primero).
* La tasa basal más baja de tu **Perfil** es 0,05 U/h. **AAPS** rechaza un **Perfil** con una tasa más baja. El Combo redondea las tasas basales a sus propios pasos (0,01 U/h por debajo de 1 U/h, 0,05 U/h hasta 10 U/h, 0,1 U/h por encima). **AAPS** usa las tasas que la bomba da realmente.
* Las tasas basales temporales están limitadas al 500 % de la tasa basal actual. **AAPS** tiene en cuenta este límite.
* El lazo se desactiva si el perfil activo en la bomba no es el perfil n.º 1. Esto sigue así hasta que el perfil n.º 1 sea el activo; cuando lo sea, la próxima vez que AAPS se conecte (solo, después de un tiempo, o porque tocas **Actualizar** en la pantalla de la bomba Accu-Chek Combo), notará que el perfil n.º 1 es el actual y volverá a activar el lazo.
* Si el lazo pide cancelar una TBR en curso, el Combo pone en su lugar una TBR del 90 % o del 110 % durante 15 minutos. Esto se debe a que cancelar realmente una TBR provoca una alerta en la bomba con muchas vibraciones, y estas vibraciones no se pueden desactivar.
* La estabilidad de la conexión Bluetooth varía según el teléfono y puede causar alertas «bomba no alcanzable», cuando ya no se establece ninguna conexión con la bomba. Si ocurre ese error, asegúrate de que el Bluetooth está activado y toca **Actualizar** en la pantalla de la bomba (**Administrar** > **Bomba**) para ver si fue un problema pasajero; si todavía no se establece conexión, reinicia el teléfono, lo que normalmente lo soluciona.
* Hay otro problema en el que reiniciar no ayuda, sino que hay que pulsar un botón de la bomba (lo que reinicia la pila Bluetooth de la bomba) antes de que la bomba vuelva a aceptar conexiones del teléfono.
* Debes evitar poner una TBR en la bomba, ya que el lazo asume el control de las TBR. Detectar una nueva TBR en la bomba puede tardar hasta 20 minutos, y el efecto de la TBR solo se tiene en cuenta desde el momento en que se detecta; así que, en el peor caso, puede haber 20 minutos de TBR que no se reflejan en la IOB.

Por ahora, el controlador admite los siguientes idiomas en el Combo. (Esto no tiene relación con el idioma de AAPS: es el idioma que se muestra en la propia pantalla LCD del Combo).

* Inglés
* Español
* Francés
* Italiano
* Ruso
* Turco
* Polaco
* Checo
* Húngaro
* Eslovaco
* Rumano
* Croata
* Neerlandés
* Griego
* Finés
* Noruego
* Portugués
* Sueco
* Danés
* Alemán
* Esloveno
* Lituano

**Importante**: Si tu bomba está configurada en un idioma que no está en esta lista, contacta con los desarrolladores y cambia el idioma de la bomba a uno de esta lista. Si no, el controlador no funcionará correctamente.

## Configuración del teléfono

Es muy importante asegurarse de que las optimizaciones de batería están desactivadas. AAPS ya detecta automáticamente cuando está sujeto a estas optimizaciones y pide en su interfaz que se desactiven. Pero en los teléfonos Android modernos, el Bluetooth _en sí_ es una app (una app del sistema). Y, normalmente, esa «app de Bluetooth» se ejecuta _con las optimizaciones de batería activadas por defecto_. Por eso, el Bluetooth puede dejar de responder cuando el teléfono quiere ahorrar energía, porque cierra la app de Bluetooth. Esto significa que también hay que desactivar las optimizaciones de batería en los ajustes de esa app del sistema de Bluetooth. Por desgracia, la forma de encontrar esa app del sistema de Bluetooth es distinta en cada teléfono. En Android estándar, ve a Ajustes -> Aplicaciones -> Ver las N aplicaciones (N = el número de apps de tu teléfono). Después, abre el menú en la esquina superior derecha y toca «Mostrar sistema», «Mostrar aplicaciones del sistema» o «Todas las aplicaciones». Ahora, en la lista ampliada de apps, busca una app llamada «Bluetooth». Selecciónala y, en su pantalla «Información de la aplicación», toca «Batería». Allí, desactiva las optimizaciones de batería (a veces se llaman «uso de batería»).

## Configuración del Combo

* Configura la bomba con el software de configuración Accu-Chek 360. Si no tienes el software, contacta con la línea de atención de Accu-Chek. Normalmente envían a los usuarios registrados un CD con el «Software de configuración de bomba 360°» y un dispositivo de conexión USB-infrarrojos SmartPix (también funciona el dispositivo Realtyme, si lo tienes).

  - **Ajustes necesarios** (marcados en verde en las capturas de pantalla):

     * Pon o deja la configuración de menú en «Estándar». Así la bomba solo muestra los menús/acciones compatibles y oculta los no compatibles (bolo extendido/multionda, varias tasas basales). Si se usan, limitan las funciones del lazo, porque entonces no es posible ejecutar el lazo de forma segura.
     * Comprueba que _Quick Info Text_ está configurado como «QUICK INFO» (sin las comillas; está en _Insulin Pump Options_).
     * Configura _Maximum Adjustment_ de la TBR al 500 %
     * Desactiva _Signal End of Temporary Basal Rate_
     * Configura _Duration increment_ de la TBR a 15 min
     * Activa el Bluetooth

  - **Ajustes recomendados** (marcados en azul en las capturas de pantalla)

     * Configura la alarma de cartucho bajo a tu gusto
     * Configura un bolo máximo adecuado para tu terapia, como protección contra errores del software
     * Del mismo modo, configura una duración máxima de TBR como protección. Permite al menos 3 horas, ya que la opción de desconectar la bomba durante 3 horas pone un 0 % durante 3 horas.
     * Activa el bloqueo de teclas en la bomba para evitar bolos desde la bomba, sobre todo si usabas la bomba antes y estabas acostumbrado a dar bolos rápidos.
     * Configura el tiempo de espera de la pantalla y del menú al mínimo, 5,5 y 5 respectivamente. Así AAPS se recupera más rápido de situaciones de error y se reduce la cantidad de vibraciones durante esos errores

  ![Captura de pantalla de los ajustes del menú de usuario](../images/combo/combo-menu-settings.png)

  ![Captura de pantalla de los ajustes de TBR](../images/combo/combo-tbr-settings.png)

  ![Captura de pantalla de los ajustes de bolo](../images/combo/combo-bolus-settings.png)

  ![Captura de pantalla de los ajustes del cartucho de insulina](../images/combo/combo-insulin-settings.png)

## Activar el controlador y emparejarlo con el Combo

* Abre el **menú** (☰) en la esquina superior izquierda, ve a [**Configuración** > **Bomba**](../SettingUpAaps/ConfigBuilder.md) y selecciona **Accu-Chek Combo**.

  ![Configuración > Bomba con el complemento Accu-Chek Combo](../images/v4/Configuration/configuration_pump_list_1.png)

  Una vez seleccionado, la tarjeta **Accu-Chek Combo** muestra dos botones, **Ajustes** y **Abrir complemento**:

  ![El complemento Accu-Chek Combo seleccionado en Configuración > Bomba](../images/v4/Pumps/accu_chek_combo_enabled.png)

  **Ajustes** abre los ajustes del controlador Accu-Chek Combo (consulta [Ajustes](#combov2-preferences) más abajo):

  ![Ajustes del controlador Accu-Chek Combo](../images/v4/Pumps/accu_chek_combo_settings.png)

  **Abrir complemento** (o **Administrar** > **Bomba**) abre la pantalla de la bomba Accu-Chek Combo. Antes de emparejar una bomba, muestra **No se encuentra emparejado a una bomba**:

  ![Pantalla de la bomba Accu-Chek Combo antes del emparejamiento](../images/v4/Pumps/accu_chek_combo_pump_screen.png)

* En la pantalla de la bomba, toca **Emparejando**. Se abre la pantalla **Emparejar con la bomba**. Sigue los pasos que se muestran en pantalla y después toca **Iniciar el emparejamiento**. Cuando Android pida permiso para hacer el teléfono visible para otros dispositivos Bluetooth, toca **Permitir**. Al final, el Combo muestra un PIN de emparejamiento de 10 dígitos en su pantalla y **AAPS** te lo pide. Escribe ese PIN en el campo **PIN de 10 dígitos**.

  ![La pantalla Emparejar con la bomba con el botón Iniciar el emparejamiento](../images/combo/combov2-pairing-screen-1.png)

  ![Android pide hacer el teléfono visible para otros dispositivos Bluetooth](../images/combo/combov2-pairing-bt-visible-prompt.png)

  ![Emparejamiento del Combo en curso, buscando la bomba](../images/combo/combov2-pairing-screen-2.png)

  Las siguientes imágenes son de una versión anterior de **AAPS**. Los pasos y los textos son los mismos, pero las pantallas se ven un poco diferentes.

  ![Captura de pantalla de la interfaz de emparejamiento del Combo 3](../images/combo/combov2-pairing-screen-3.png)

  ![Captura de pantalla de la interfaz de emparejamiento del Combo 4](../images/combo/combov2-pairing-screen-4.png)

  ![Captura de pantalla de la interfaz de emparejamiento del Combo 4](../images/combo/combov2-pairing-screen-5.png)

* Si el PIN se escribe mal, **AAPS** muestra **El PIN no funcionó. Comprueba si hay un error tipográfico. Si esto sigue sucediendo, cancela y vuelve a intentar el emparejamiento.**

  ![Captura de pantalla de la interfaz de emparejamiento del Combo 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Cuando aparezca **Vinculado correctamente con Combo**, toca **OK**. Vuelves a la pantalla de la bomba, que ahora muestra el estado de la bomba (consulta [Contenido de la pantalla de la bomba Accu-Chek Combo](#combov2-tab-contents) más abajo). El botón **Emparejando** se sustituye por **Desemparejar**.

* Para comprobar tu configuración (¡por seguridad, con la bomba **desconectada** de cualquier cánula!), usa AAPS para poner una TBR del 500 % durante 15 min y dar un bolo. Ahora la bomba debe tener una TBR en curso y el bolo en el historial. AAPS también debe mostrar la TBR activa y el bolo administrado.

* En el Combo se recomienda activar el bloqueo de teclas para evitar bolos desde la bomba, sobre todo si usabas la bomba antes y estabas acostumbrado a usar la función «bolo rápido».

## Notas sobre el emparejamiento

El Accu-Chek Combo se desarrolló antes de que saliera Bluetooth 4.0, y solo un año después de que saliera la primera versión de Android. Por eso su forma de emparejarse con otros dispositivos no es 100 % compatible con la forma en que se hace hoy en Android. Para resolverlo del todo, AAPS necesitaría permisos de nivel de sistema, que solo tienen las apps del sistema. Estas apps las instalan los fabricantes en el teléfono; los usuarios no pueden instalar apps del sistema.

Por eso el emparejamiento nunca funcionará sin problemas al 100 %. En concreto, durante el emparejamiento, el diálogo de PIN Bluetooth de Android puede aparecer un momento y desaparecer solo. Pero a veces se queda en pantalla y pide un PIN de 4 dígitos. (No lo confundas con el PIN de emparejamiento del Combo de 10 dígitos). No escribas nada, solo pulsa cancelar. Si el emparejamiento no continúa, sigue las instrucciones en pantalla para intentar emparejar de nuevo.

(combov2-tab-contents)=
## Contenido de la pantalla de la bomba Accu-Chek Combo

Para abrir la pantalla de la bomba, ve a **Administrar** > **Bomba**. Cuando hay una bomba emparejada, muestra la siguiente información (de arriba abajo):

![Captura de pantalla de la pantalla de la bomba Accu-Chek Combo con emparejamiento (versión anterior de AAPS)](../images/combo/combov2-tab-with-pairing.png)

1. **Estado del controlador**: el controlador puede estar en uno de los siguientes estados:
   - **Desconectado**: no hay conexión Bluetooth; el controlador está en este estado casi siempre y solo se conecta a la bomba cuando es necesario; así se ahorra energía
   - **Conectando**
   - **Comprobando bomba**: la bomba está conectada, pero el controlador está haciendo comprobaciones de seguridad para asegurarse de que todo está bien y actualizado
   - **Listo**: el controlador está listo para aceptar comandos de AAPS
   - **Suspendido**: la bomba está suspendida (en el Combo aparece como «detenida»)
   - Una descripción del comando que se está ejecutando, por ejemplo **Configuración del perfil basal** o **Actualizando estado de la bomba**
   - **Error**: se produjo un error; la conexión se cerró y cualquier comando en curso se canceló
2. **Última conexión**: hace cuántos minutos el controlador se conectó correctamente al Combo; si pasa de 30 minutos, este elemento se muestra en rojo
3. **Batería**: nivel de batería; el Combo solo indica **Lleno**, **Bajo** o **Vacío** y no ofrece nada más exacto (como un porcentaje), así que aquí solo se muestran estos tres niveles
4. **Reservorio**: cuántas UI hay ahora en el reservorio del Combo
5. **Último bolo**: hace cuántos minutos se administró el último bolo; si todavía no se ha administrado ninguno desde que se inició AAPS, no se muestra
6. **Basal temporal**: detalles de la basal temporal activa; si no hay ninguna activa, no se muestra
7. **Dosis basal base**: tasa basal base activa ahora («base» significa la tasa basal sin ninguna TBR activa que influya en el factor de la tasa basal)
8. **Número de serie**: número de serie del Combo según la bomba (corresponde al número de serie que aparece en la parte trasera del Combo)
9. **Dirección Bluetooth**: la dirección Bluetooth de 6 bytes del Combo, en formato `XX:XX:XX:XX:XX:XX`

Mientras el controlador hace algo (por ejemplo, configurar un perfil basal), un cuadro debajo de la lista describe la actividad actual, con una barra de progreso fina que muestra el avance.

El Combo se puede manejar por Bluetooth en modo _terminal remoto_ o en modo _comando_. El modo terminal remoto corresponde al «modo de control remoto» del medidor del Combo, que imita la pantalla LCD y los cuatro botones de la bomba. El controlador tiene que hacer algunos comandos en este modo, porque no existen en el modo comando. El modo comando es mucho más rápido, pero, como se ha dicho, tiene un alcance limitado. Cuando el modo terminal remoto está activo, la pantalla actual del terminal remoto se muestra en el campo que está justo encima del dibujo del Combo. Sin embargo, cuando el controlador cambia al modo comando, ese campo se queda vacío.

(Tú no influyes en esto; el controlador decide por sí solo qué modo usar. Es solo una nota para que sepas por qué a veces ves pantallas del Combo en ese campo).

En la parte inferior están estos botones:

- **Actualizar**: inicia una actualización inmediata del estado de la bomba. También se usa para que AAPS sepa que un error encontrado antes ya está resuelto y que AAPS puede comprobar de nuevo que todo está bien (más información abajo, en [la sección sobre las alertas](#combov2-alerts)). Solo puedes tocarlo cuando el controlador está desconectado, suspendido o en estado de error.
- **Desemparejar**: desempareja el Combo de **AAPS** y de Android, después de que confirmes **¿Seguro que quieres desvincular la bomba?**. Cuando no hay ninguna bomba emparejada, este botón se sustituye por **Emparejando**.

(combov2-preferences)=
## Ajustes

Estos ajustes están disponibles para el controlador del Combo (**Configuración** > **Bomba** > **Accu-Chek Combo** > **Ajustes**, o el icono de ajustes (rueda dentada) en la pantalla de la bomba). Los elementos aparecen de arriba abajo:

1. **Duración del descubrimiento (en segundos)**: al emparejar, el controlador hace que la bomba pueda descubrir el teléfono. Esto controla cuánto dura esa visibilidad. Por defecto se selecciona el máximo (300 segundos = 5 minutos). Android no permite que la visibilidad dure para siempre, así que hay que elegir una duración.
2. **Autodetectar y añadir automáticamente los cambios de reservorio de insulina**: si está activado, el controlador añade el «cambio de reservorio» que normalmente añadirías tú con **Administrar** > **Cebar/Llenar**. Se explica [con más detalle más abajo](#combov2-autodetections).
3. **Autodetectar y añadir automáticamente los cambios de pila**: si está activado, el controlador añade el «cambio de batería» que normalmente añadirías tú con **Administrar** > **Cambio de batería de la bomba**. Se explica [con más detalle más abajo](#combov2-autodetections).
4. **Habilitar el registro detallado de Combo**: aumenta mucho la cantidad de registros que guarda el controlador. **PRECAUCIÓN**: No lo actives a menos que te lo pida un desarrollador. Si no, puede añadir mucho ruido a los registros de **AAPS** y hacerlos menos útiles.

El emparejamiento y el desemparejamiento se hacen en la pantalla de la bomba, no en los ajustes (ver arriba).

(combov2-autodetections)=
## Detectar y añadir automáticamente los cambios de batería y de reservorio

El controlador puede detectar los cambios de batería y de reservorio siguiendo los niveles de batería y de reservorio. Si en la última actualización del estado de la bomba el Combo informó de batería baja, y ahora, en la nueva actualización, el nivel de batería aparece normal, el controlador deduce que el usuario ha cambiado la batería. Se usa la misma lógica para el nivel del reservorio: si ahora es más alto que antes, se interpreta como un cambio de reservorio.

Esto solo funciona si la batería y el reservorio se cambian cuando sus niveles se indican como bajos _y_ la batería y el reservorio nuevos están suficientemente llenos.

Estas detecciones automáticas se pueden desactivar en los [ajustes](#combov2-preferences) del controlador.

(combov2-alerts)=
## Alertas (advertencias y errores) y cómo se gestionan

El Combo muestra las alertas como pantallas de terminal remoto. Las advertencias se muestran con un código «Wx» (x es un número), junto con una descripción corta. Un ejemplo es «W7», «TBR OVER». Los errores son parecidos, pero aparecen con un código «Ex».

El controlador descarta automáticamente algunas advertencias. Son estas:

- W1 «reservoir low» (reservorio bajo): el controlador la convierte en una advertencia de «reservorio bajo» que se muestra en la pantalla principal de AAPS
- W2 «battery low» (batería baja): el controlador la convierte en una advertencia de «batería baja» que se muestra en la pantalla principal de AAPS
- W3, W6, W7, W8: todas son solo informativas para el usuario, así que el controlador las puede descartar automáticamente sin riesgo

Las demás advertencias _no_ se descartan automáticamente. Además, los errores _nunca_ se descartan automáticamente. Ambos se gestionan de la misma forma: hacen que el controlador muestre un diálogo de alerta encima de la interfaz de AAPS y que cancele cualquier comando en curso. Después, el controlador pasa al estado «error» (consulta [el contenido de la pantalla de la bomba Accu-Chek Combo más arriba](#combov2-tab-contents)). En este estado no se puede ejecutar ningún comando. El usuario tiene que resolver el error en la bomba; por ejemplo, un error de oclusión puede requerir cambiar la cánula. Cuando el usuario haya resuelto el error, se puede volver al funcionamiento normal tocando **Actualizar** en la pantalla de la bomba Accu-Chek Combo. Entonces el controlador se conecta al Combo y actualiza su estado, comprobando si todavía se muestra un error en la pantalla, etc. Además, el controlador actualiza el estado de la bomba automáticamente después de un tiempo, así que no es obligatorio pulsar ese botón manualmente.

El bolo es un caso especial. Se hace en el modo comando del Combo, que no informa de una alerta que aparece en mitad de un bolo. Por eso el controlador no puede descartar advertencias automáticamente _durante_ un bolo. Por desgracia, esto significa que la bomba seguirá pitando hasta que termine el bolo. La alerta más común durante un bolo suele ser W1 «reservorio bajo». **No** descartes manualmente las advertencias del Combo en la propia bomba durante un bolo. Te arriesgas a interrumpir el bolo. El controlador se ocupará de la advertencia cuando termine el bolo.

El controlador no notará las alertas que ocurran mientras no está conectado al Combo. El Combo no puede enviar esa alerta automáticamente al teléfono; siempre es el teléfono quien tiene que iniciar la conexión. Por eso la alerta se mantiene hasta que el controlador se conecta a la bomba. Puedes tocar **Actualizar** en la pantalla de la bomba para iniciar una conexión y dejar que el controlador gestione la alerta en ese mismo momento (en lugar de esperar a que AAPS decida iniciar una conexión).

**IMPORTANTE**: Si ocurre un error, o aparece una advertencia que no es de las que se descartan automáticamente, el controlador pasa al estado de error. ¡En ese estado, el lazo **ESTARÁ BLOQUEADO** hasta que se actualice el estado de la bomba! Se desbloquea después de actualizar el estado de la bomba (tocando **Actualizar** o con la actualización automática del controlador) y cuando ya no se muestra ningún error.

## Cosas con las que tener cuidado al usar el Combo

* Recuerda que esto no es un producto; sobre todo al principio, el usuario tiene que vigilar y entender el sistema, sus limitaciones y cómo puede fallar. Se recomienda encarecidamente NO usar este sistema si la persona que lo usa no puede entenderlo por completo.
* Por la forma en que funciona el control remoto del Combo, varias operaciones (sobre todo configurar un perfil basal) son lentas comparadas con otras bombas. Es una limitación del Combo que, por desgracia, no se puede evitar.
* No pongas ni canceles una TBR en la bomba. El lazo asume el control de las TBR y no puede funcionar de forma fiable de otro modo, porque no es posible saber la hora de inicio de una TBR que el usuario puso en la bomba.
* No pulses ningún botón de la bomba mientras AAPS se comunica con ella (la bomba muestra el logotipo de Bluetooth mientras está conectada a AAPS). Hacerlo interrumpe la conexión Bluetooth. Hazlo solo si hay problemas para establecer la conexión (consulta [la sección «Antes de empezar» más arriba](#combov2-before-you-begin)).
* No pulses ningún botón mientras la bomba administra un bolo. En concreto, no intentes descartar alertas pulsando botones. Consulta [la sección sobre las alertas](#combov2-alerts) para una explicación más detallada del motivo.

## Lista de comprobación cuando no se puede establecer conexión con el Combo

El controlador hace todo lo posible para conectarse al Combo y usa algunos trucos para ser lo más fiable posible. Aun así, a veces no se establece la conexión. Estos son algunos pasos para intentar resolver esta situación.

1. Pulsa un botón del Combo. A veces, la pila Bluetooth del Combo deja de responder y ya no acepta conexiones. Al pulsar un botón del Combo y hacer que la pantalla LCD muestre algo, la pila Bluetooth se reinicia. La mayoría de las veces, este es el único paso necesario para resolver los problemas de conexión.
2. Reinicia el teléfono. Puede ser necesario si hay un problema en la propia pila Bluetooth del teléfono.
3. Si la tapa de la batería del Combo es vieja, piensa en cambiarla. Las tapas de batería viejas pueden causar problemas con la alimentación del Combo, que afectan al Bluetooth.
4. Si los intentos de conexión siguen fallando, piensa en desemparejar y volver a emparejar la bomba.

(combov2-tips-for-basic-usage)=
## Consejos de uso básico

### Cómo asegurar un funcionamiento sin problemas

* **Lleva siempre el smartphone contigo** y déjalo junto a tu cama por la noche. Como tu bomba puede quedar detrás o debajo de tu cuerpo mientras duermes, funciona mejor una posición más alta (en una estantería o balda).
* Asegúrate siempre de que la batería de la bomba esté lo más cargada posible. Consulta la sección de la batería para ver consejos sobre la batería.
* Siempre que sea posible, maneja la bomba solo con la app AAPS. Para ello, activa el bloqueo de teclas en la bomba en **PUMP SETTINGS / KEY LOCK / ON**. Solo es necesario usar las teclas de la bomba al cambiar la batería o el cartucho.

![Bloqueo de teclas](../images/combo/combo-tips-keylock.png)

### Bomba no alcanzable. ¿Qué hacer?

#### Activar la alarma de bomba no alcanzable
* En **AAPS**, toca el icono de **Ajustes** (rueda dentada) arriba a la derecha de la pantalla principal, ve a **Alertas locales**, activa **Alerta si la bomba no es alcanzable** y pon **Umbral de bomba no alcanzable** en **31** minutos.
* Así tienes tiempo suficiente para no activar la alarma cuando sales de la habitación y dejas el teléfono en la mesa, pero te avisa si no se puede llegar a la bomba durante más tiempo que la duración de una tasa basal temporal.

#### Recuperar la conexión con la bomba

* Cuando AAPS avise con una alarma de **bomba no alcanzable**, primero quita el bloqueo de teclas y **pulsa cualquier tecla de la bomba** (por ejemplo, el botón «abajo»). En cuanto se apague la pantalla de la bomba, toca **Actualizar** en la pantalla de la bomba Accu-Chek Combo (**Administrar** > **Bomba**). Normalmente, así la comunicación vuelve a funcionar.
* Si eso no ayuda, reinicia tu smartphone. Después del reinicio, AAPS se vuelve a activar y se establece una nueva conexión con la bomba.

* Las pruebas con distintos smartphones han mostrado que algunos smartphones provocan el error «bomba no alcanzable» más a menudo que otros. Consulta [Teléfonos](#Phones-list-of-tested-phones) para ver los smartphones probados con éxito.

#### Causas y consecuencias de los errores de comunicación frecuentes
* En teléfonos con **poca memoria** (o con ajustes de **ahorro de energía agresivos**), el sistema cierra AAPS a menudo. Lo notas porque, al abrir AAPS, los botones de tratamiento (barra de Lanzamiento rápido) de la pantalla principal no se muestran, ya que el sistema se está iniciando. Esto puede provocar «alarmas de bomba no alcanzable» al arrancar. En el campo **Última conexión** de la pantalla de la bomba (**Administrar** > **Bomba**) puedes ver cuándo se comunicó AAPS con la bomba por última vez.

![No hay conexión con la bomba](../images/combo/combov2-tips-no-connection-to-pump.png)

* Este error puede gastar más rápido la batería de la bomba, porque el perfil basal se lee de la bomba cada vez que se reinicia la app.
* También aumenta la probabilidad de provocar el error que hace que la bomba rechace todas las conexiones entrantes hasta que se pulsa un botón de la bomba.

### Falla la cancelación de la tasa basal temporal
* A veces, AAPS no puede descartar automáticamente una alerta **TBR CANCELED**. En ese caso tienes que tocar **Actualizar** en la pantalla de la bomba Accu-Chek Combo o confirmar la alarma en la bomba.

### Consideraciones sobre la batería de la bomba

#### Cambiar la batería
* Después de una alarma de **batería baja**, cambia la batería lo antes posible para tener siempre energía suficiente para una comunicación Bluetooth fiable con el smartphone, incluso si el teléfono está más lejos de la bomba.
* Incluso después de una alarma de **batería baja**, la batería puede durar todavía bastante tiempo. Aun así, se recomienda llevar siempre una batería nueva contigo después de que suene una alarma de «batería baja».
* Antes de cambiar la batería, pulsa el símbolo de **Lazo** en la pantalla principal y selecciona **Suspender el lazo** durante 1 hora.
* Espera a que el teléfono se comunique con la bomba y a que desaparezca el logotipo de Bluetooth de la bomba.

![Bluetooth activado](../images/combo/combo-tips-compo.png)

* Quita el bloqueo de teclas de la bomba, pon la bomba en modo stop, confirma una posible tasa basal temporal cancelada y cambia la batería rápidamente.
* No hace falta volver a poner el reloj de la bomba después de cambiar la batería: AAPS actualiza automáticamente la fecha y la hora de la bomba.
* Después vuelve a poner la bomba en modo de funcionamiento y selecciona **Reanudar** al pulsar el icono **Lazo suspendido** en la pantalla principal.
* AAPS volverá a poner una tasa basal temporal necesaria cuando llegue el siguiente valor de glucosa.

(Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)=
#### Tipo de batería y causas de una duración corta de la batería
* Como la comunicación Bluetooth intensa gasta mucha energía, usa solo **baterías de alta calidad** como Energizer Ultimate Lithium, las «power one» del paquete de servicio «grande» de Accu-Chek o, si quieres una batería recargable, baterías Eneloop.

![Energizer](../images/combo/combo-tips-energizer.jpg) ![OnePower](../images/combo/combo-tips-power-one.png)

La duración típica de los distintos tipos de batería es la siguiente:
* **Energizer Ultimate Lithium**: de 4 a 7 semanas
* **Power One Alkaline** (Varta) del paquete de servicio: de 2 a 4 semanas
* Baterías **recargables Eneloop** (BK-3MCCE): de 1 a 3 semanas

Si tu batería dura mucho menos que los rangos indicados arriba, comprueba estas posibles causas:
* Hay algunas variantes de la tapa de batería roscada de la bomba Combo que provocan un cortocircuito parcial en las baterías y las descargan rápidamente. Las tapas sin este problema se reconocen por los contactos metálicos dorados.
* Si el reloj de la bomba no «sobrevive» a un cambio rápido de batería, es probable que esté roto el condensador que mantiene el reloj en marcha durante un corte breve de energía. En este caso, puede ayudar que Roche cambie la bomba, lo que no es un problema durante el periodo de garantía.
* El hardware y el software del smartphone (sistema operativo Android y pila Bluetooth) también influyen en la duración de la batería de la bomba, aunque todavía no se conocen del todo los factores exactos. Si tienes la oportunidad, prueba otro smartphone y compara la duración de la batería.

### Bolo extendido, bolo multionda
El algoritmo OpenAPS no admite un bolo extendido o un bolo multionda en paralelo. Pero se puede conseguir un tratamiento parecido con estas alternativas:
* Usa **e-Carbs** (carbohidratos extendidos) al introducir carbohidratos o al usar el Asistente de bolo: introduce los carbohidratos de toda la comida y la duración en la que esperas que los carbohidratos lleguen a tu sangre como glucosa. Entonces el sistema calcula pequeñas cantidades de carbohidratos repartidas por igual durante toda la duración, lo que hace que el algoritmo dé una dosis de insulina equivalente mientras sigue comprobando todo el tiempo la subida o bajada total de la glucosa. Para algo parecido a un bolo multionda, también puedes combinar un bolo inmediato más pequeño con e-Carbs.
* Before eating, set a temporary **Eating Soon** target of 80 mg/dL (4.4 mmol/L) for several hours (press the target on the main screen, or **Manage** > **Temp Target**). La duración debe basarse en el intervalo que elegirías para un bolo extendido. Así tu objetivo se mantiene más bajo de lo normal y, por lo tanto, aumenta la cantidad de insulina administrada.
* Después usa el **Asistente de bolo** para introducir todos los carbohidratos de la comida, pero no apliques directamente los valores que sugiere. Si quieres un bolo parecido a un multionda, corrige la dosis de insulina a la baja. Según la comida, el algoritmo tiene que dar SMB adicionales o tasas basales temporales más altas para contrarrestar la subida de la glucosa. Aquí debes probar con mucho cuidado los límites de seguridad de la tasa basal (Max U/h, IOB basal máxima) y, si es necesario, cambiarlos temporalmente.

* No uses el bolo extendido o multionda directamente en la bomba. El controlador no los admite (consulta [Antes de empezar](#combov2-before-you-begin)); si aun así se da un bolo multionda en la bomba, **AAPS** lo registra desde el historial de la bomba como un bolo normal más un bolo extendido, así que se cuenta en la IOB. Un bolo extendido no funciona en un entorno de lazo cerrado (consulta [esta página](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) para más detalles).

### Alarmas al administrar un bolo
* Después de cada bolo, el controlador lee el historial de bolos de la bomba. Es un mecanismo de seguridad para calcular correctamente la insulina activa (IOB), incluso cuando se da un bolo directamente desde la bomba.
* Antes de un bolo, si el historial de la bomba tiene un bolo que **AAPS** no conocía (por ejemplo, un bolo dado directamente en la bomba), el bolo pedido **no se administra**, porque se calculó sin esa insulina. **AAPS** muestra **El historial de la bomba contiene un bolo que AAPS desconocía. El bolo solicitado no se administró...** Comprueba el historial de bolos en la bomba y tu IOB. Si todavía necesitas un bolo, calcúlalo de nuevo. Esto también se aplica cuando el bolo desconocido se encuentra en una nueva conexión.
* Si el bolo se administró pero el historial de la bomba también tenía otros bolos que **AAPS** no conocía, ahora se registran y **AAPS** te pide comprobar la IOB antes del siguiente bolo.
* Si la conexión con la bomba se pierde **durante** un bolo, **AAPS** no registra 0 U: muestra cuánto había administrado la bomba hasta ese momento y avisa de que la bomba todavía puede administrar el resto. **No vuelvas a dar el bolo.** **AAPS** lee la cantidad real del historial de la bomba en la siguiente conexión.
* Si la conexión se pierde mientras **AAPS** envía el bolo, no se sabe si la bomba lo recibió. Comprueba el historial de bolos en la bomba antes del siguiente bolo.
* Si **AAPS** no puede confirmar que se administró un bolo, muestra **Entrega del bolo fallida. No se ha entregado ningún bolo. Para asegurarte, comprueba la bomba para evitar un doble bolo y después vuelve a poner el bolo.** Los bolos nunca se repiten automáticamente.

## Dónde obtener ayuda

El desarrollo del controlador del Combo lo hace la comunidad de forma **voluntaria**. Antes de pedir ayuda:

1. **Lee** la sección correspondiente de esta documentación para confirmar cómo debe funcionar la función.
2. **Pregunta** en el canal *#AAPS* de [Discord](https://discord.gg/4fQUWHZ4Mw) o en uno de los otros [canales de la comunidad](../GettingHelp/WhereCanIGetHelp.md).
3. **Informa de un error** buscando primero en los [problemas existentes](https://github.com/nightscout/AndroidAPS/issues); si el tuyo no aparece, abre un [nuevo problema](https://github.com/nightscout/AndroidAPS/issues) y adjunta tus [archivos de registro](../GettingHelp/AccessingLogFiles.md).

Cuando pidas ayuda, indica la marca y el modelo de tu teléfono, la versión de Android, la versión de **AAPS** y una descripción sencilla del problema (qué cambió y cuándo funcionó por última vez).
