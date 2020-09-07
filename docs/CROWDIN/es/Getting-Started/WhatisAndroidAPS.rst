¿Qué es un sistema de lazo cerrado con AndroidAPS?
**************************************************

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. ¿Qué es un sistema de páncreas artificial? Se trata de un programa de software que tiene como objetivo hacer lo que un páncreas vivo hace: mantener los niveles de azúcar en la sangre dentro de límites saludables automáticamente. 

Un APS no puede hacer el trabajo tan bien como lo hace un páncreas biológico, pero puede hacer que la diabetes de tipo 1 sea más fácil de manejar usando dispositivos que están comercialmente disponibles y un software que es simple y seguro. Dichos dispositivos incluyen un monitor de glucosa continuo (MCG) para indicar a AndroidAPS sobre sus niveles de azúcar en la sangre y una bomba de insulina que controla AndroidAPS para administrar dosis apropiadas de insulina. La aplicación se comunica con esos dispositivos a través de Bluetooth. Hace sus cálculos de dosificación usando un algoritmo, o un conjunto de reglas, desarrollado para otro sistema de páncreas artificial, llamado OpenAPS, que tiene miles de usuarios y ha acumulado millones de horas de uso. 

Una nota de cautela: los AndroidAPS no están regulados por ninguna autoridad médica en ningún país. El uso de AndroidAPS es esencialmente llevar a cabo un experimento médico en sí mismo. La configuración del sistema requiere determinación y conocimientos técnicos. Si no tienes el know-how técnico al principio, al final lo tendrá. Toda la información que necesitas puede ser encontrada en estos documentos, en otros sitios en línea, o de otros que ya lo han hecho, puedes preguntarles en grupos de Facebook u otros foros. Muchas personas han construido con éxito AndroidAPS y ahora lo están utilizando por completo de forma segura, pero es esencial que cada usuario:

* Construya el sistema por sí mismo para que entiendan a fondo cómo funciona
* Ajuste su algoritmo de dosificación individual con su equipo de diabetes para trabajar casi perfecto
* Mantenga y supervise el sistema para asegurarse de que está funcionando correctamente

.. note:: 
	**Disclaimer and Warning**

	* Toda la información y el código descrito aquí solo es de carácter informativo y de educación. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.

	* El uso del código de github.com no tiene garantía o soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.

	* Todos los productos y nombres de compañias, marcas, servicios, marcas registradas y servicios registrados son propiedad de sus respectivos tenedores. Su uso aquí es informativo y no implica afiliación o pago por ello.

	Tenga en cuenta que este proyecto no tiene ninguna relación con y no está respaldado por: ` SOOIL <http://www.sooil.com/eng/>` _, ` Dexcom <http://www.dexcom.com/>` _, ` Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>` _ o ` Medtronic <http://www.medtronic.com/>` _.
	
Si estás listo para el reto, por favor lee en. 

Objetivos principales detrás de AndroidAPS
==================================================

* Una aplicación con seguridad incorporada. Para leer acerca de las características de seguridad de los algoritmos, conocidos como oref0 y oref1, haga clic aquí (https: //openaps.org/reference-design/)
* Una aplicación integral para la gestión de la diabetes tipo 1 con un páncreas artificial y Nightscout
* Una aplicación a la que los usuarios pueden añadir o eliminar fácilmente módulos según sea necesario
* Una aplicación con diferentes versiones para ubicaciones y lenguajes específicos.
* Una aplicación que se puede utilizar en el lazo abierto y cerrado
* Una aplicación que es totalmente transparente: los usuarios pueden entrar parámetros, ver resultados y tomar la decisión final
* Una aplicación que es independiente de los drivers particulares de la bomba y contiene una "bomba virtual" para que los usuarios puedan experimentar con seguridad antes de usarlo en sí mismos 
* Una aplicación que se integra estrechamente con Nightscout
* Una aplicación en la que el usuario está en control de las restricciones de seguridad 

Como empezar
==================================================
Por supuesto, todo este contenido es muy importante, pero puede ser en el principio muy confuso.
Se proporciona una buena orientación por medio de la ` Visión general del módulo <../Module/module.html>` _ y los ` Objetivos <../Usage/Objectives.html>` _. También puede echar un vistazo a la "configuración de ejemplo con Dana, Dexcom y Sony Smartwatch <../Getting-Started/Sample-Setup.html>` _.
 
