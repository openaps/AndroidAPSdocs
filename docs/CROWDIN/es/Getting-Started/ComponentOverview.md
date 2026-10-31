# Resumen de componentes

**AAPS** no es solo una aplicación (compilada por ti); es uno de los varios módulos de tu sistema de lazo cerrado. Antes de elegir los componentes, es buena idea mirar su documentación.

![Resumen de componentes](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

La base de las funciones de seguridad de **AAPS** que se explican en esta documentación son las funciones de seguridad del hardware que usas para montar tu sistema. Para cerrar un lazo de dosificación automática de insulina, es muy importante que uses solo una bomba de insulina y un MCG probados, que funcionen bien y que estén aprobados por las autoridades oficiales de tu país. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. Si encuentras o te ofrecen bombas de insulina o receptores de MCG rotos, modificados o hechos en casa, **no los uses** para crear un sistema **AAPS**.

Además, es igual de importante usar solo suministros originales, como insertadores, cánulas y recipientes de insulina, aprobados por el fabricante para usarlos con tu bomba o MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. La insulina es muy peligrosa si la dosis es incorrecta. Por favor, no juegues con tu vida modificando tus suministros.

Por último, pero no menos importante, no debes tomar inhibidores de SGLT-2 (gliflozinas), porque bajan los niveles de glucosa en sangre de forma imprevisible. La combinación con un sistema que baja las dosis basales para subir la glucosa es especialmente peligrosa, porque, debido a las gliflozinas, esa subida de glucosa puede no ocurrir y se puede llegar a un estado peligroso de falta de insulina. [Más información aquí](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Módulos necesarios

### Un buen algoritmo de dosificación individual para el tratamiento de tu diabetes

Aunque no es algo que se crea o se compra, probablemente es el «módulo» más infravalorado, pero es imprescindible. Cuando dejas que un algoritmo te ayude a controlar tu diabetes, necesita conocer los ajustes correctos para no cometer errores graves. Aunque todavía te falten otros módulos, ya puedes revisar y ajustar tu **Perfil** junto con tu equipo de diabetes.

El **Perfil** incluye:

- BR (dosis basales): da la insulina de fondo;
- ISF (factor de sensibilidad a la insulina): cuánto baja tu nivel de glucosa en sangre con 1 unidad de insulina;
- CR (ratio de carbohidratos): cuántos gramos de carbohidratos cubre una unidad de insulina.

La mayoría de los loopers usan BR, ISF y CR circadianos, que se adaptan a los cambios hormonales de la sensibilidad a la insulina durante el día.

Además de tu **Perfil**, también tienes que configurar tu **insulina** en **Administrar → Configuración de insulina**, incluida su DIA (duración de la acción de la insulina). Mira [Configuración de insulina](#Config-Builder-insulin-dia).

Más información sobre tu **Perfil** [en su página](../SettingUpAaps/YourAapsProfile.md).

### Teléfono

Mira la página [Teléfonos](../Getting-Started/Phones.md).

### Bomba de insulina

Mira la página [Bombas compatibles](../Getting-Started/CompatiblePumps.md).

**Ventajas y desventajas de algunos modelos de bomba**

La Combo, la Insight y las Medtronic antiguas son bombas sólidas y se pueden usar en lazo. La Combo tiene la ventaja de que puedes elegir entre muchos más tipos de equipos de infusión, porque tiene una conexión Luer-Lock estándar. Y la pila es una normal que puedes comprar en cualquier gasolinera o tienda de 24 horas, y si de verdad la necesitas, puedes robarla o tomarla prestada del mando a distancia de la habitación del hotel ;-).

Sin embargo, las ventajas de la DanaR/RS y la Dana-i frente a la Combo como bomba preferida son:

- El primer emparejamiento es más sencillo con la Dana-i/RS. Pero normalmente solo lo haces una vez, así que solo importa si quieres probar una función nueva con bombas diferentes.
- Por ahora, la Combo funciona leyendo la pantalla. En general funciona bien pero es lento. Para el lazo esto no importa mucho, porque todo funciona en segundo plano. Aun así, necesitas estar conectado mucho más tiempo, y por eso hay más tiempo en el que la conexión BT se puede cortar. Esto no es tan fácil si te alejas del teléfono mientras pones un bolo y cocinas.
- La Combo vibra al final de las TBR; la DanaR vibra (o pita) con los SMB. Por la noche, probablemente usarás más las TBR que los SMB.  La Dana-i/RS se puede configurar para que no pite ni vibre.
- Leer el historial de la Dana-i/RS con los carbohidratos en pocos segundos permite cambiar de teléfono fácilmente sin conexión y seguir con el lazo en cuanto llegan algunos valores del MCG.
- Todas las bombas con las que **AAPS** puede comunicarse son resistentes al agua de fábrica. Solo las bombas Dana son además «resistentes al agua con garantía», gracias al compartimento de la batería sellado y al sistema de llenado del reservorio.

### Fuente de glucosa

Mira la página [MCG compatibles](../Getting-Started/CompatiblesCgms.md).

### Archivo .apk de **AAPS**

El componente principal del sistema. Para instalar la app, primero tienes que compilar tú mismo el archivo apk. Las instrucciones están [aquí](../SettingUpAaps/BuildingAaps.md).

### Servidor de informes

Un servidor de informes muestra tus datos de glucosa y tratamientos, y crea informes para un análisis detallado. Ahora mismo hay dos servidores de informes que puedes usar con AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) y [Tidepool](#SettingUpTheReportingServer-tidepool). Los dos permiten ver tus datos de diabetes a lo largo del tiempo y dan estadísticas sobre el **tiempo en rango** (TIR) y otras medidas.

El servidor de informes es independiente de los otros módulos. Si no quieres usar un servidor de informes, debes saber que no es obligatorio para usar **AAPS** a largo plazo. Pero aun así tienes que configurar uno, porque es necesario para cumplir el [**Objetivo 1**](#objectives-objective1).

Puedes encontrar más información sobre cómo configurar tu servidor de informes [aquí](../SettingUpAaps/SettingUpTheReportingServer.md).

## Módulos opcionales

### Reloj inteligente

Puedes elegir cualquier reloj inteligente con **Wear OS 3** o más reciente. Mira [Relojes inteligentes y AAPS](../Getting-Started/Watches.md) para más detalles.

Los usuarios están creando una [lista de teléfonos y relojes probados](#Phones-list-of-tested-phones). Hay diferentes esferas para usar con **AAPS**, que puedes encontrar [aquí](../WearOS/WearOsSmartwatch.md).

### xDrip

Aunque no necesites la app xDrip como **Fuente de glucosa**, puedes usarla igualmente, por ejemplo para alarmas o para ver la glucosa de otra forma. Puedes tener tantas alarmas como quieras, decidir a qué hora debe estar activa cada alarma, elegir si puede saltarse el modo silencio, etc. Puedes encontrar algo de información sobre xDrip [aquí](../CompatibleCgms/xDrip.md). Ten en cuenta que la documentación de esta app no siempre está actualizada, porque la app cambia rápido.

## Qué hacer mientras se espera a los módulos

A veces se tarda un tiempo en tener todos los módulos para cerrar el lazo. Pero no te preocupes, hay muchas cosas que puedes hacer mientras esperas. Es **necesario** revisar y (si hace falta) ajustar las dosis basales (BR), el ratio de insulina-carbohidratos (IC), los factores de sensibilidad a la insulina (ISF), etc. Y quizás el lazo abierto sea una buena forma de probar el sistema y familiarizarte con **AAPS**. En este modo, **AAPS** da recomendaciones de tratamiento que puedes aplicar a mano.

Puedes seguir leyendo esta documentación, hablar con otros loopers en internet o en persona, [leer](../UsefulLinks/BackgroundReading.md) documentación o lo que escriben otros loopers (aunque debes tener cuidado: no todo es correcto ni bueno para que tú lo copies).

**¿Hecho?** Si ya tienes todos los componentes de **AAPS** (¡enhorabuena!) o al menos los suficientes para empezar en modo de lazo abierto, primero debes leer la [descripción de los objetivos](../SettingUpAaps/CompletingTheObjectives.md) antes de cada nuevo objetivo, y configurar tu hardware.
