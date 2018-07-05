# Preferencias

## Contraseña y ajustes 

Permite establecer una contraseña para prevenir el uso accidental o no autorizado de las preferencias. Después de introducir la contraseña aquí se te requerirá  introducirla para acceder a preferencias. Para eliminar la opción de contraseña en preferencias elimina el texto en el campo contraseña. 


## Edad paciente

Los algoritmos son diferentes dependiendo de la edad del usuario, por tanto, selecciona niño, adolescente o adulto aquí.


## General

* Selecciona la lengua aquí. Si no está disponible, o no todas las palabras han sido traducidas entonces puedes hacer sugerencias. Los archivos de traducciones están disponibles aquí: App>Src>Main>Res>Values>String o pregunta en la sala de gitter.

* Ajuste rápido de wizard permite añadir un botón rápido para los snack o comidas, introduce los carbohidratos en la pantalla principal y selecciona el botón wizard para calcular el bolo para esos carbohidratos basado en tus ratios (no teniendo en cuenta glucosa o insulina a bordo)


## Careportal

'Introducido por' es el texto que se muestra en el campo '' ingresado por ''. Introduzca un nombre, ya sea el nombre de la aplicación, el nombre de la persona o el nombre del teléfono (por ejemplo, si está usando AndroidAPS como NS Client en un teléfono que no es el de pacientes, es posible que desee distinguir entre propietarios de teléfonos aquí).


## Seguridad en los tratamientos

 
### Max bolo permitido [U]


Esta es la cantidad máxima de insulina en bolo que AAPS puede poner. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del usuario. Se recomienda establecer esto en una cantidad razonable que corresponda aproximadamente a la cantidad máxima de insulina en bolo que probablemente necesitará para una dosis de comida o corrección. Esta restricción también se aplica a los resultados de la Calculadora de bolo.

 
### Máx. Carbohidratos permitidos [g]

Esta es la cantidad máxima de carbohidratos que la calculadora de bolo AAPS puede dosificar. Esta configuración existe como un límite de seguridad para evitar la administración de un bolo masivo debido a una entrada accidental o error del
usuario. Se recomienda establecer esto en una cantidad razonable que
corresponda aproximadamente a la cantidad máxima de carbohidratos que
probablemente necesite para una comida. 


## Loop

Puede alternar entre lazo abierto y cerrado aquí. Abrir lazo significa que las sugerencias de TBR se basan en sus datos y aparecen como una notificación, pero debe elegir aceptarlas manualmente e ingresarlas manualmente en su bomba. El
lazo cerrado significa que las sugerencias de TBR se envían automáticamente a su bomba sin confirmación o aportación de usted. La pantalla de inicio se mostrará en la esquina superior izquierda, ya sea que esté abierto o cerrado, y al mantener presionado este botón de pantalla de inicio también podrá alternar entre los dos.


## OpenaAPS AMA

### OpenAPS Advanced Meal Assist (AMA)
Permite que el sistema funcione más agresivamente de manera temporal después de un bolo de comida SI se ingresa carbohidratos. Enciéndalo en la pestaña de Configuración para ver la configuración de seguridad aquí, deberá completar el Objetivo 7 para usar esta función. Puede leer más sobre la configuración y Autosens en los documentos de OpenAPS.


### Max U/hr de Temp Basal 

Esta configuración existe como un límite de seguridad para evitar que AAPS sea capaz de dar una tasa basal peligrosamente alta. El valor se mide en unidades por hora (u / h). Se aconseja establecer esto en algo sensato. Una buena recomendación es tomar la tasa basal más alta en su perfil y multiplicarla por 4. Por ejemplo, si la tasa basal más alta en su perfil fue de 0.5u / h, podría multiplicarla por 4 para obtener un valor de 2u / hr.

### Max IOB que OpenAPS puede proporcionar [U]


Cantidad de insulina basal adicional (en unidades) que se acumula en el cuerpo, además de su perfil basal normal. Una vez que se alcanza este valor, AAPS dejará de administrar insulina basal adicional hasta que la Insulina a Bordo (IOB) basal vuelva a estar dentro de este rango.

* Este valor no considera IOB de bolos, solo basal.

* Este valor se calcula y monitorea independientemente de su tasa basal normal. Solo se considera la insulina basal adicional además de la tasa normal.

* Este valor se mide en unidades de insulina (u).

Cuando comience el lazo cerrado, se recomienda establecer **Max Basal IOB en 0** durante un período de tiempo, mientras se está acostumbrando al sistema. Esto evita que AAPS administre insulina basal adicional. Durante este tiempo, AAPS aún podrá limitar o cortar su insulina basal para ayudar a prevenir la hipoglucemia.

Este es un paso importante para:

* Disponga de un período de tiempo para acostumbrarse de manera segura al sistema AAPS y monitorear cómo funciona.
* Aproveche la oportunidad de perfeccionar su perfil basal y el Factor de sensibilidad a la insulina (FSI).
* Vea cómo AAPS limita su insulina basal para prevenir la hipoglucemia.

 
Cuando se sienta cómodo, puede permitir que el sistema comience a administrarle insulina basal adicional, aumentando el valor de IOB basal máxima. La pauta recomendada para esto es tomar la **tasa basal más alta en su perfil** y **multiplicarla por 3**. Por ejemplo, si la tasa basal más alta en su perfil fue de 0.5u / h, podría multiplicarla por 3 para obtener un valor de 1.5u. .
 
> Puede comenzar de manera conservadora con este valor y aumentarlo lentamente con el tiempo.

> Estas son solo pautas; el cuerpo de todos somos diferentes Puede encontrar que necesita más o menos de lo que se recomienda aquí, pero siempre comience de manera conservadora y ajuste lentamente.


Nota: Como medida de seguridad, Max Basal IOB está limitada a 7


## Ajustes de absorción

Si ha seleccionado usar AMA Autosens, podrá ingresar su tiempo máximo de absorción de comidas y la frecuencia con la que desea que autosense se actualice. Si come comidas con alto contenido de grasas o proteínas, necesitará aumentar el tiempo de absorción de las comidas.


## Configuración de la bomba

Las opciones aquí variarán según el controlador de la bomba que haya seleccionado en 'Config Builder'. Empareje y configure su bomba de acuerdo con la bomba de insulina DanaR o la bomba de insulina DanaRS o las instrucciones de la bomba Combo Accu Chek cuando corresponda. Si usa AndroidAPS en lazo abierto, asegúrese de haber seleccionado Virtual Pump en config builder. 


## NS Client

* Establezca su URL de 'nightscout' aquí (https://yourwebsitename.herokuapp.com o https://yourwebsitename.azurewebsites.net), y la 'API secret' (una contraseña de 12 caracteres registrada en sus variables heroku o azul). Esto permite que los datos se lean y escriban entre el sitio web nightscout y AndroidAPS.Verifique si hay errores tipográficos aquí sí está atrapado en el Objetivo 1.

* Inicio de sesión de la aplicación de registro en Nightscout grabará una nota en sus entradas de careportal cada vez que se inicie la aplicación. La aplicación no debería necesitar comenzar más de una vez al día, mayor frecuencia denota un problema.

* 'Habilitar transmisiones locales' compartirá los datos de su careportal con otras aplicaciones del teléfono, como xdrip.

* 'Opciones de alarma' le permite seleccionar qué alarmas nightscout predeterminadas usar a través de la aplicación. Para que suenen las alarmas, debe establecer los valores de alarma Urgente alto, Alto, Bajo y Urgente bajo en sus variables heroku o azure.
Solo funcionarán mientras tenga una conexión a Nightscout y están destinados a padres / cuidadores, si tiene la fuente CGM en su teléfono y luego usan esas alarmas (por ejemplo, xdrip +)



## Comunicaciones SMS

Esta configuración permite el control remoto de la aplicación enviando instrucciones por mensaje de texto al teléfono del paciente que la aplicación seguidora, como suspender el lazo o el bolo. Más información en Comandos SMS, pero solo se mostrará en Preferencias si seleccionó esta opción en Config Builder.


## Otros

* Puede establecer los valores predeterminados para sus objetivos temporales aquí, para los diferentes tipos de objetivos temporales (eating soon y actividad). Cuando selecciona un objetivo temporal, si elige, por ejemplo, "eating soon" en el cuadro desplegable, automáticamente rellenará la duración y el valor en función de las cifras que proporcionó aquí. Para obtener más información sobre el uso de Objetivos temporales, vea Abrir las características de APS.

* Puede establecer cantidades de purgado predeterminadas: esto hará que la bomba cuente con el valor especificado y esta insulina se cuenta como utilizada desde el depósito, pero no se cuenta en los cálculos IOB. Consulte el folleto de instrucciones en su caja de cánulas para saber cuántas unidades debe llenar las cánulas según la longitud de la aguja y la longitud del tubo.

* Puede cambiar la visualización en la pantalla de inicio y observar los valores que están dentro del rango. Tenga en cuenta que solo afecta a cómo se ven los gráficos y no afecta su objetivo o sus cálculos.

* 'Cortar títulos de pestaña' le permite ver más títulos de pestañas en la pantalla, por ejemplo, la pestaña 'Abrir APS' se convierte en 'OAPS', 'Objetivos' se convierte en 'Obj', etc.

* 'Alertas locales' le permite decidir si recibe una advertencia y a partir de cuánto tiempo no recibe los valores de glucosa en sangre (datos obsoletos) o si la bomba no está disponible. Si con frecuencia recibe alertas de bomba inaccesible, active BT Watchdog en Configuración


## Ajustes avanzados `` requiere más trabajo

* OpenAPS MA 

    * Siempre utiliza el delta promedio corto en lugar de ... Habilitar esta configuración es útil cuando utiliza datos de orígenes no filtrados como xDrip +, a diferencia de fuentes filtradas como un Dexcom Receiver oficial. Los datos filtrados parecen ser uniformes, mientras que los datos no filtrados pueden parecer oscilantes. Estos datos no filtrados podrían hacer que el AndroidAPS aplique cambios de basal temporal con mayor frecuencia de la que realmente se necesita, ya que el algoritmo de OpenAPS reacciona ante los datos de alto nivel. Con esta configuración habilitada, el algoritmo OpenAPS utilizará el promedio corto delta (el cambio promedio en la glucosa en sangre durante los últimos 15 minutos) en lugar de la última lectura de glucosa en sangre recibida. Esto efectivamente tiene un efecto de "suavizado" en los datos e intenta compensar las lecturas con saltos. Los usuarios de los sensores Abbott Freestyle Libre que recopilan sus datos de glucosa a través de dispositivos como LimiTTers pueden encontrar que esta configuración proporciona mejores resultados con AAPS.

Para obtener más consejos sobre el suavizado de datos al utilizar xDrip + como origen de datos, consulte Suavizado de datos de glucosa en sangre en xDrip +.

* Preferencias de OpenAPS.json: antes de cambiar cualquiera de estas configuraciones, vea las descripciones de los valores de seguridad utilizados y por qué en los documentos de OpenAPS.

* 'Ignorar eventos de cambio de perfil' no enviará su perfil actual de AndroidAPS a la bomba. Se recomienda no seleccionar esto a menos que esté probando el código, ya que por seguridad enviar los eventos de cambio de perfil de envío al perfil basal 1 de la bomba significa que AndroidAPS dejará de funcionar o perderá la conexión con la bomba y su bomba volverá al mismo perfil predeterminado. que tienes que ingresarlo manualmente en la bomba. Para obtener más información sobre los perfiles, consulte Perfiles.

* 'BT Watchdog' seleccione esta opción si sigue perdiendo la conexión con su bomba. Cuando la bomba pierda la conexión, activará y desactivará el bluetooth para que pueda mej orar la conexión.


## Ajustes Wear

Para más info ver ajustes en Wear watchfaces 

