Descripción General De Los Componentes 
**************************************************
AndroidAPS no es sólo una aplicación (auto-construida), es sólo uno de los módulos de su sistema de lazo cerrado. Antes de tomar una decisión sobre los componentes, sería una buena idea echar un vistazo a "configuración de componentes <https://androidaps.readthedocs.io/en/dev/EN/index.html#component-setup>", también.
   
.. imagen:: ../images/modules.png
  :alt: Visión general de Compontes

.. note:: 
   **AVISO DE SEGURIDAD IMPORTANTE**

   La base de las características de seguridad de AndroidAPS discutidas en esta documentación se basan en las características de seguridad del hardware utilizado para construir su sistema. Es importante que sólo utilice una bomba de insulina y una bomba de insulina y MCG aprobados por la FDA o CE, para cerrar un lazo de dosificación de insulina automatizado. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. Si encuentra o recibe una oferta rota, modificada o autofabricada de las bombas de insulina o de los receptores de MCG, * no las utilice * para crear un sistema AndroidAPS.

   Además, es igualmente importante utilizar los suministros originales, como los insertadores, las canulas y los recipientes de insulina aprobados por el fabricante para su uso con la bomba o MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. Insulina es muy peligrosa cuando se malinterpreta-por favor, no juegas con tu vida hackeando con tus suministros.
   
   Por último pero no por ello menos importante, no hay que tomar inhibidores SGLT-2 (gliflozins) ya que reducen incalculablemente los niveles de azúcar en sangre.  La combinación con un sistema que reduce las tasas basales para aumentar la BG es especialmente peligrosa, ya que debido al gliflozin este aumento en BG podría no suceder y podría derivar en un peligroso estado de falta de insulina.

Módulos necesarios
==================================================
Algoritmo de dosificación individual bueno para su tratamiento con diabetes
--------------------------------------------------
A pesar de que esto no es algo para crear o comprar, este es el "módulo" que probablemente se subestime mas pero es esencial. Cuando dejas que un algoritmo ayude a manejar tu diabetes, necesita saber los ajustes correctos para no cometer errores severos.
Incluso si aún le faltan otros módulos, ya puede verificar y adaptar su 'perfil' en colaboración con su equipo de diabetes. 
La mayoría de los loopers utilizan el BR circadiano, ISF y CR, que adaptan la sensibilidad de la insulina hormonal durante el día.

El perfil incluye

* BR (Tasas basales)
* ISF (factor de sensibilidad a la insulina) es su unidad de glucosa en sangre por unidad de insulina
* CR (cociente de carbohidratos) en gramos de carbohidrato por cada unidad de insulina
* DIA (duración de la actuación de la insulina).

Sin uso de inhibidores de SGLT-2
--------------------------------------------------
Los inhibidores de la SGLT-2, también llamados gliflozinas, inhiben la reabsorción de la glucosa en el riñón. A medida que incalculablemente reducen los niveles de azúcar en la sangre, NO DEBE tomarlos mientras use un sistema de circuito cerrado como AndroidAPS! ¡ Habrá un riesgo enorme de cetoacidosis o de una hipoglucemia! La combinación de este medicamento con un sistema que reduce las tasas basales con el fin de aumentar el BG es especialmente peligroso ya que debido a la gliflozina este aumento en BG podría no suceder y puede ocurrir un estado peligroso de falta de insulina.

Teléfono
--------------------------------------------------
You need an Android smartphone with Google Android 7.0 or above. So if you are thinking about a new phone, Android 8.1 is recommended at least but optimicaly Android 9 or 10.

Los usuarios están creando una "lista de teléfonos probados y relojes <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_

Para registrar un teléfono o un reloj que no está ya listado en la hoja de cálculo, por favor rellene la `forma <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Cualquier problema con la hoja de cálculo por favor envíe un correo electrónico a `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, cualquier donación de los modelos de teléfono/reloj que aún necesitan pruebas por favor envíe un correo electrónico a `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

Bomba de insulina
--------------------------------------------------
AndroidAPS **actualmente** funciona con 

-`Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ (necesita adicionalmente: Ruffy app, LineageOS o Android 8.1 en su teléfono)
- `Bomba Accu-ChekInsight <../Configuration/Accu-Chek-Insight-Pump.md>`_ 
- `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ 
- `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
- `algunas bombas de Medtronic <../Configuration/MedtronicPump.html>` _ de la versión 2.4 (adicionalmente necesaria: hardware de RileyLink/Gnarl, teléfono Android con bluetooth de baja energía / BLE-chipset)

**Otras bombas** que pueden tener el potencial de trabajar con AndroidAPS se listan en la página `Futuras (posibles) Bombas <../Getting-Started/Future-possible-Pump-Drivers.html>`_.

Si necesitas **comprar privadamente** una bomba entonces puedes encontrar varios distribuidores en `esta hoja de cálculo <https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0>`_, por favor comparta los detalles suyos si no aparecen en la lista.

**Entonces, ¿cuál es la mejor bomba para lazos cerrados con AndroidAPS?**

El Combo, el Insight y los Medtronics más antiguos son bombas sólidas y loopeables. Además el Combo tiene la ventaja de más tipos de equipos de infusión entre los que escoger teniendo el estándar luer lock. Y la batería es una común que puedes comprar en cualquier gasolinera, tienda de conveniencia 24 horas y si realmente necesitas una, Usted puede robar/tomarlo prestado del mando a distancia en la habitación del hotel ;-).

Las ventajas de la DanaR/RS vs. la Combo como la bomba de elección, sin embargo, son:

- La Dana*R/RS se conecta a casi cualquier teléfono con Android >= 5.1 sin necesidad de flash linage. Si su teléfono se rompe por lo general, puede encontrar fácilmente cualquier teléfono que funciona con las bombas Dana*R/RS como un reemplazo rápido... no así con la Combo. (esto puede cambiar en el futuro cuando Android 8.1 sea más popular)
- El emparejamiento inicial es más fácil con DanaRS. Pero esto se realiza normalmente solo una vez, por lo que solo impacta si quieres probar nuevas características con bombas diferentes.
- Hasta ahora Combo funciona con análisis de pantalla. En general funciona bien pero es lento. Para lazo cerrado eso no es crucial puesto que trabaja en segundo plano, sin embargo, usa más tiempo la conexión bluetooth aumentando la probabilidad de fallo de conexión, lo cual no es fácil si te lejas del móvil mientras pones un bolo y cocinas. Aún hay mucho más tiempo que necesitas para estar conectado más tiempo en el que la conexión BT podría romperse, lo cual no es tan fácil si te alejas de tu teléfono mientras se dan bolos y se cocina. 
- Combo vibra cuando termina una basal temporal, la DanaR vibra (o hace sonido) con SMB. Por la noche, preferirás usar TBR sobre SMB.  DanaRS se puede configurar para que ni haga sonido ni vibre.
- Leyendo el histórico de la bomba Dana RS en unos segundo junto con los carbohidratos hace posible cambiar fácilmente entre modo offline y continuar el lazo cerrado en cuanto tenga datos de MCG.
- Todas las bombas AndroidAPS compatibles son waterproof. Aunque solo la Dana es tiene garantizado waterproof debido a su sellado en el compartimento de la batería y el reservorio. 

Fuentes de datos de glucemia (BG)
--------------------------------------------------
Esta es sólo una breve descripción general de todos los MCGs/FGM compatibles con AndroidAPS. Para obtener más detalles, busque `aquí <../Configuration/BG-Source.html>`_. Solo una breve sugerencia: si puedes visualizar tus datos de glucosa en la aplicación xDrip+ o en el sitio web de Nightscout, puedes elegir xDrip+ (o Nightscout con la conexión web) como fuente BG en AAPS.

* `Dexcom G6 <../Hardware/DexcomG6.html>`_: Funciona con la aplicación xDrip+ ó con la aplicación Dexcom parchada
* `Dexcom G5 <../Hardware/DexcomG5.html>`_: Se trabaja con app xDrip+ 'o app parchada Dexcom
* `Dexcom G4 <../Hardware/DexcomG4.html>`_: Estos sensores son bastante antiguos, pero puede encontrar instrucciones sobre cómo usarlos con la aplicación xDrip+
* `Libre 2 <../Hardware/Libre2.html>`_: Funciona con xDrip+ (no se necesita ningún transmisor), pero tienes que construir tu propia aplicación parchada.
* `Libre 1 <../Hardware/Libre1.html>`_: Usted necesita un transmisor como Bluecon o MiaoMiao para (construir o comprar) y app xDrip+
* `Eversense <../Hardware/Eversense.html>`_: funciona sólo en combinación con la app ESEL y la Eversense-App parchada (no funciona con Dana RS y LineageOS, pero DanaRS y Android o Combinado y el Linaje OS funcionan bien)
* `Enlite <../Hardware/MM640g.html>`_: bastante complicado con un montón de cosas extra


Nightscout
--------------------------------------------------
Nightscout es una aplicación web de código abierto que puede registrar y visualizar los datos de MCG y los datos de AndroidAPS y crea informes. Puede encontrar más información en el " sitio web del proyecto Nightscout <http://www.nightscout.info/>`_. You can create your own `Nightscout website <https://nightscout.github.io/nightscout/new_user/>`_, use the semi-automated Nightscout setup on `zehn.be <https://ns.10be.de/en/index.html>`_ or host it on your own server (this is for IT experts).

Nightscout es independiente de los otros módulos. Lo necesitará para cumplir el Objetivo 1.

Se puede encontrar información adicional sobre cómo configurar Nightscout para su uso con AndroidAPS `aquí <../Installing-AndroidAPS/Nightscout.html>`_.

Archivo AAPS-.apk
--------------------------------------------------
El componente básico del sistema. Antes de instalar la aplicación, tienes que construir el archivo apk (que es la extensión de nombre de archivo para una aplicación Android) primero. Las instrucciones están `aquí <../Installing-AndroidAPS/Building-APK.html>`_.  

Módulos opcionales
==================================================
Smartwatches (Relojes inteligentes)
--------------------------------------------------
Puede elegir cualquier smartwatch con Android Wear 1.x y superior. La mayoría de los loopers llevan un Sony Smartwatch 3 (SWR50), ya que es el único reloj que puede obtener lecturas de Dexcom G5/G5 cuando el teléfono está fuera de rango. Algunos otros relojes pueden ser parcheados para funcionar como un receptor autónomo también (consulte `esta documentación <https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5>` _ para más detalles).

Los usuarios están creando una "lista de teléfonos probados y relojes <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_. Hay diferentes caras de observación para su uso con AndroidAPS, que puede encontrar `aquí <../Configuration/Watchfaces.html>`_.

Para registrar un teléfono o un reloj que no está ya listado en la hoja de cálculo, por favor rellene la `forma <https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform>`_.

Cualquier problema con la hoja de cálculo por favor envíe un correo electrónico a `hardware@androidaps.org <mailto:hardware@androidaps.org>`_, cualquier donación de los modelos de teléfono/reloj que aún necesitan pruebas por favor envíe un correo electrónico a `donations@androidaps.org <mailto:hardware@androidaps.org>`_.

xDrip+
--------------------------------------------------
Incluso si no necesitas tener la aplicación xDrip + como fuente de BG, todavía puedes usarla para esto. alarmas o una buena muestra de glucosa en sangre. Puede tener el número de alarmas que desee, especificar la hora en la que la alarma debe estar activa, se puede alterar temporalmente la modalidad silenciosa, etc. Se puede encontrar alguna información de xDrip+ "aqui <../Configuration/xdrip.html>`_. Por favor, tenga en cuenta que las documentaciones de esta aplicación no siempre están al día, ya que su progreso es bastante rápido.

Configuración de ejemplo
==================================================
Si desea obtener un ejemplo paso a paso, es posible que desee ver una configuración de ejemplo. La primera configuración de la muestra es bastante antigua, pero debe estar todavía actualizada.

.. toctree::
   :maxdepth: 1
   :glob:
   
   Configuración de ejemplo <../Getting-Started/Sample-Setup.rst>
 
  
Qué hacer mientras se espera a los módulos
==================================================
A veces se tarda un tiempo en obtener todos los módulos para cerrar el lazo. Pero no te preocupes, hay un montón de cosas que puedes hacer mientras esperas. Es NECESARIO comprobar y (donde correspondiente) adaptar las tasas basales (BR), la insulina/carbohidratos (IC), la sensibilidad de los factores (ISF), etc. Y tal vez un lazo abierto puede ser una buena forma de probar el sistema y familiarizarse con AndroidAPS. Usando este modo, AndroidAPS le da consejos de tratamiento que puede ejecutar manualmente.

Usted puede seguir leyendo a través de los documentos aquí, ponerse en contacto con otros loopers en línea o fuera de línea, `leer <https://androidaps.readthedocs.io/en/dev/EN/Where-To-Go-For-Help/Background-reading.html>`_ documentaciones o lo que escriben otros loopers (incluso si tiene que ser cuidadoso, no todo es correcto o bueno para que se reproduzca).

**Hecho?**
Si tiene todos los componentes de AAPS juntos (congratulaciones) o al menos lo suficiente para iniciarse en el modo de bucle abierto, primero debe leer la descripción de `objetivo <../Usage/Objectives.html>`_ antes de cada nuevo objetivo y configurar el `hardware <../index.html#component-setup>`_.
