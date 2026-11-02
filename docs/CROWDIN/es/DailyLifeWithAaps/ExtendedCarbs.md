(Extended-Carbs-extended-carbs-ecarbs)=
# Carbohidratos extendidos (eCarbs)

## ¿Qué son los eCarbs y cuándo son útiles?

Con una terapia de bomba normal, los bolos extendidos son una buena manera de tratar comidas grasas o de absorción lenta que aumentan la glucosa en sangre por más tiempo que el efecto de la insulina. En un contexto de lazo cerrado, sin embargo, los bolos extendidos no tienen tanto sentido (y plantean dificultades técnicas), ya que son básicamente una basal temporal alta fija, que va en contra de cómo funciona el lazo, que está ajustando la tasa basal de forma dinámica. Para más detalles, consulta [bolo extendido](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) más abajo.

La necesidad de lidiar con tales comidas todavía existe. Por eso AAPS admite los llamados carbohidratos extendidos o eCarbs.

Los eCarbs son carbohidratos repartidos a lo largo de varias horas. Para comidas normales con más carbohidratos que grasas o proteínas, suele bastar con introducir los carbohidratos al principio (y reducir el bolo inicial si hace falta) para evitar que la insulina se administre demasiado pronto.  Pero para las comidas de absorción más lenta en las que la entrada completa de carbohidratos por adelantado genera demasiada IOB de SMB, los eCarbs se pueden usar para simular con mayor precisión cómo los carbohidratos (y cualquier equivalente de carbohidratos que ingrese para otros macronutrientes) se absorben e influyen en la glucosa en sangre. Con esta información, el lazo puede administrar SMB de forma más gradual para tratar esos carbohidratos, lo que se puede ver como un bolo extendido dinámico (esto también debería funcionar sin SMB, pero probablemente es menos eficaz).

**Nota:** los eCarbs no son solo para comidas ricas en grasas o proteínas: también se pueden usar en cualquier situación en la que algo suba la glucosa, p. ej. otros medicamentos como los corticosteroides.

## Cómo usar los eCarbs

Para introducir eCarbs, abre el diálogo **Carbohidratos** (**Tratamientos** → **Carbohidratos**), introduce el total de carbohidratos, fija una **Duración** y, si quieres, retrasa el inicio con **Hora de los carbohidratos** (*los números de abajo son solo ejemplos; tendrás que probar tus propios valores hasta conseguir una respuesta de glucosa satisfactoria en tus casos*):

![Introducir carbohidratos](../images/eCarbs_Dialog.png)

Los eCarbs en la pantalla principal: el número entre paréntesis en el campo **COB** muestra los carbohidratos que aún están por llegar, y el gráfico **COB** muestra cada entrada futura de eCarbs como una marca naranja. Si no ves un gráfico **COB**, añade uno con **Añadir gráfico** debajo de los gráficos (consulta [Pantallas de AAPS](../DailyLifeWithAaps/AapsScreens.md)).

![eCarbs en el campo COB y en el gráfico COB](../images/eCarbs_Graph.png)

(AapsScreens-carbs-type)=
## Tipo de carbohidratos en el Asistente de bolo: pan, pastel o pizza

En el [Asistente de bolo](#aaps-screens-bolus-wizard), tres botones debajo del campo **Carbohidratos** te permiten elegir la rapidez con la que se absorbe tu comida. Elige uno antes de confirmar. Según el tipo, **AAPS** toma una parte de los carbohidratos que has escrito como carbohidratos normales y añade [carbohidratos extendidos («eCarbs»)](#Extended-Carbs-extended-carbs-ecarbs) más tarde para comidas lentas y copiosas. Pulsa el icono **(i)** junto a los botones para ver los alimentos típicos del tipo elegido y qué hace con tus carbohidratos.

| Tipo                     | Typical foods (examples from the app)                                                                                                 | Carbohidratos ahora, usados para el bolo | eCarbs añadidos                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| **Pan** (predeterminado) | Pan, pastas saladas, yogur, fruta, patatas, arroz, avena, verduras                                                                    | 100 %                                    | Ninguno                                                    |
| **Pastel**               | Empanadillas, pasta, platos asiáticos ricos en carbohidratos y grasas, bollería dulce y de masa fermentada, cereales, miel, mermelada | 90 %                                     | 20 %, empiezan 60 minutos más tarde, repartidos en 2 horas |
| **Pizza**                | Lasaña, pizza, hamburguesas, patatas fritas, patatas al horno, patatas de bolsa                                                       | 80 %                                     | 35 %, empiezan 60 minutos más tarde, repartidos en 3 horas |

**Ejemplo**: escribes 100 g y eliges **Pizza**. El bolo se calcula para 80 g, registrados ahora. 35 g de eCarbs empiezan 1 hora más tarde y se reparten en 3 horas.

Conviene saber:
* No es un simple reparto: con **Pastel** y **Pizza**, los carbohidratos registrados suman **más de lo que escribiste** (110 % y 115 %). La parte extra está solo en los eCarbs.
* El bolo solo cubre los carbohidratos que se toman ahora. **AAPS** no da un bolo por adelantado para los eCarbs: el lazo los tiene en cuenta cuando empiezan, como cualquier otro [eCarbs](#Extended-Carbs-extended-carbs-ecarbs).
* Si fijas una **Hora de los carbohidratos**, los eCarbs empiezan 60 minutos después de esa hora.
* El diálogo de confirmación muestra los eCarbs en su propia línea, _p. ej._ "eCarbs 35g / 3h (+60min)".
* Los gramos se redondean hacia abajo a números enteros.
* Los porcentajes, retrasos y duraciones son fijos; no se pueden cambiar en los ajustes.
* La elección no se recuerda: el asistente se abre siempre con **Pan**.

______________________________________________________________________

Aquí se describe una forma de tratar las grasas y las proteínas con esta función: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Configuración recomendada, ejemplo y notas importantes

La configuración recomendada es usar el complemento APS OpenAPS SMB, con los SMB activados y también con la preferencia *Habilitar SMB con COB* activada.

Un ejemplo, p. ej. para una pizza, sería dar un bolo (parcial) al principio con el *Asistente de bolo* y después usar el diálogo *Carbohidratos* para introducir el resto de los carbohidratos con una duración de 4–6 horas, empezando después de 1 o 2 horas.

Para empezar más rápido, el *Asistente de bolo* puede añadir los eCarbs por ti: elige el [tipo de carbohidratos](#AapsScreens-carbs-type) **Pastel** o **Pizza** debajo del campo **Carbohidratos** (ver arriba). Las cantidades y los tiempos son fijos, así que usa el diálogo *Carbohidratos* si quieres otros valores.

**Notas importantes:** Por supuesto, tendrás que probar qué valores concretos te funcionan. También puedes ajustar con cuidado el ajuste *máximo de minutos de basal para limitar el SMB* para que el algoritmo sea más o menos agresivo. Con comidas bajas en carbohidratos, altas en grasas y proteínas, puede ser suficiente usar solo eCarbs sin bolos manuales (consulta la entrada del blog de arriba). Cuando se generan eCarbs, también se crea una nota en el Portal de cuidados que documenta todos los datos introducidos, para que sea más fácil repetirlos y mejorarlos.

(extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Extended boluses and why they don't work in a closed-loop environment

Como se ha mencionado anteriormente, los bolos extendidos o de onda múltiple no funcionan realmente en un entorno de lazo cerrado. [Más abajo](#why-extended-boluses-won-t-work-in-a-closed-loop-environment) encontrarás los detalles

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Bolo extendido y cambio a lazo abierto: solo bombas Dana e Insight

Algunas personas pidieron una opción para usar el bolo extendido en AAPS de todos modos, porque querían tratar algunas comidas especiales como están acostumbradas.

Por eso **AAPS** ofrece un bolo extendido para usuarios de bombas Dana e Insight: abre **Administrar** y selecciona **Bolo extendido**.

**AAPS** primero te avisa de que el lazo cerrado se detendrá mientras dure el bolo extendido. Toca **OK** para continuar:

![Advertencia: el bolo extendido detiene el modo de lazo cerrado](../images/extended_bolus_stops_loop.png)

Introduce la cantidad de **Insulina** y la **Duración**, después toca el botón de confirmar abajo y **OK**:

![Diálogo de bolo extendido con 2 U en 60 minutos](../images/extended_bolus_dialog.png)

En la bomba Insight, el bolo extendido *no está disponible* si se usa la [emulación de TBR](#Accu-Chek-Insight-Pump-settings-in-aaps).

Mientras el bolo extendido está en curso, el lazo funciona en modo **Lazo abierto** (cambia el icono del lazo en la pantalla principal), y el lazo cerrado se activa de nuevo automáticamente cuando termina el bolo extendido:

![Icono de lazo abierto en la pantalla principal mientras hay un bolo extendido en curso](../images/extended_bolus_main_screen.png)

El menú **Administrar** muestra un botón **Cancelar** con la tasa y el tiempo transcurrido / total (por ejemplo **Cancelar 2,00 U/h 1/60'**). Tócalo para detener el bolo extendido antes de tiempo:

![Botón Cancelar de un bolo extendido en curso en el menú Administrar](../images/extended_bolus_running_manage.png)

(why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Por qué los bolos extendidos no funcionan en un entorno de lazo cerrado

1. El lazo determina que ahora se deben administrar 1,55 U/h. Para el algoritmo no importa si esto se administra como bolo extendido o como TBR. De hecho, algunas de las bombas utilizan el bolo extendido. ¿Qué debería pasar entonces? Después, la mayoría de los controladores de bomba detienen el bolo extendido -> ni siquiera hacía falta iniciarlo.

2. Si tuvieras el bolo extendido como entrada, ¿qué debería pasar en el modelo?

   1. ¿Debería considerarse neutral junto con la tasa basal (BR) y hacer el lazo sobre él? Entonces, ¿el lazo también debería poder reducir el bolo si, por ejemplo, la glucosa baja demasiado y se quita toda la insulina «neutral»?
   2. ¿Se debe añadir simplemente el bolo extendido? ¿Entonces simplemente se debe permitir que el lazo continúe? ¿Incluso en la peor hipoglucemia? No creo que esto sea tan bueno: ¿Se ha previsto una hipoglucemia, pero no se debe evitar?

3. La IOB que genera el bolo extendido aparece después de 5 minutos, en la siguiente ejecución. Por consiguiente, el lazo daría menos basal. Así que no cambia mucho... excepto que se pierde la posibilidad de evitar la hipoglucemia.
