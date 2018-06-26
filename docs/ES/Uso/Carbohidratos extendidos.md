
# Carbohidratos Extendidos/eCarbs

Con una terapia de bomba normal, los bolos extendidos son una buena manera de tratar comidas grasas o de absorción lenta que aumentan la glucosa en sangre por más tiempo que el efecto de la insulina. En un contexto de lazo cerrado, sin embargo, los bolos extendidos no tienen tanto sentido (y plantean dificultades técnicas), ya que son básicamente una basal temporal alta fija, que va en contra de cómo funciona el lazo, que está ajustando la tasa basal de forma dinámica. La necesidad de lidiar con tales comidas todavía existe. Por eso, AndroidAPS a partir de la versión 2.0 es compatible con los llamados carbohidratos extendidos o eCarbs.


Los eCarbs son carbohidratos que se introducen durante varias horas. Esto simula cómo se absorben los carbohidratos e influye en la glucosa en sangre. Con esta información, el lazo puede administrar SMB para tratar esos carbohidratos, lo que se puede ver como
un bolo extendido dinámico (esto también debería funcionar sin SMB, pero probablemente sea menos efectivo). Sin embargo, los eCarbs no se limitan a las comidas grasas, sino que se pueden usar para ayudar en cualquier situación en la que existan influencias que aumenten el nivel de azúcar en la sangre, por ej: medicamentos como cortisona.
 

Para introducir eCarbs, establezca una duración en el cuadro de diálogo Carbohidratos en la pestaña de información general, los carbohidratos totales y opcionalmente un tiempo:

<img src="https://1.bp.blogspot.com/-gnWKSBIBO2g/WuTPV0Rya3I/AAAAAAAAAEg/BvqiZYrsuKcgbny5t1sHWlPS6feWq-xEwCLcBGAs/s1600/Screenshot_20180427-144305.png" width=400>


Los eCarbs en la pestaña de información general, tenga en cuenta los carbohidratos entre paréntesis en el campo COB, que muestra los carbohidratos en el futuro:

<img src="https://4.bp.blogspot.com/-sgc9XdUeaoQ/WuTPXxfaIuI/AAAAAAAAAEk/p7toa_aq_oIWWTnzoQFUPHt4JdPkaXrwwCLcBGAs/s1600/Screenshot_20180427-144324.png" width=400>

Las entradas de carbohidratos en el futuro están coloreadas en naranja oscuro en la pestaña de tratamiento:

<img src="https://user-images.githubusercontent.com/1732305/38613978-e6d1748e-3d8b-11e8-9d62-154fe73443da.png" width=400>

***
Aquí se describe una forma de manejar la grasa y las proteínas con esta característica: https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html
***
 
La configuración recomendada es utilizar el complemento OpenAPS SMB APS, con las SMB habilitadas y la habilitación de SMB con COB habilitada.

Un escenario, por ej una pizza, puede dar un bolo (parcial) por adelantado a través de la calculadora y luego usar el botón de carbohidratos para ingresar los carbohidratos restantes durante un período de 4 a 6 horas, comenzando después de 1 o 2 horas. Tendrá que probar y ver qué valores concretos funcionan para usted, por supuesto. También puede ajustar cuidadosamente la configuración
de minutos máximos de basal para limitar SMB a para que el algoritmo sea más o menos agresivo. Con comidas bajas en carbohidratos, altas en grasas y proteínas, puede ser suficiente usar solo eCarbs sin bolos manuales (consulte el post arriba mencionado)

