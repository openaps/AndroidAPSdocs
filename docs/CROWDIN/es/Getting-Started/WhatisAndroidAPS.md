# ¿Qué es un sistema de lazo cerrado con AndroidAPS?

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. ¿Qué es un sistema de páncreas artificial? Se trata de un programa de software que tiene como objetivo hacer lo que un páncreas vivo hace: mantener los niveles de azúcar en la sangre dentro de límites saludables automáticamente.

Un APS no puede hacer el trabajo tan bien como lo hace un páncreas biológico, pero puede hacer que la diabetes de tipo 1 sea más fácil de manejar usando dispositivos que están comercialmente disponibles y un software que es simple y seguro. Dichos dispositivos incluyen un monitor de glucosa continuo (MCG) para indicar a AndroidAPS sobre sus niveles de azúcar en la sangre y una bomba de insulina que controla AndroidAPS para administrar dosis apropiadas de insulina. La aplicación se comunica con esos dispositivos a través de Bluetooth. Hace sus cálculos de dosificación usando un algoritmo, o un conjunto de reglas, desarrollado para otro sistema de páncreas artificial, llamado OpenAPS, que tiene miles de usuarios y ha acumulado millones de horas de uso.

Una nota de cautela: los AndroidAPS no están regulados por ninguna autoridad médica en ningún país. El uso de AndroidAPS es esencialmente llevar a cabo un experimento médico en sí mismo. La configuración del sistema requiere determinación y conocimientos técnicos. Si no tienes el know-how técnico al principio, al final lo tendrá. Toda la información que necesitas puede ser encontrada en estos documentos, en otros sitios en línea, o de otros que ya lo han hecho, puedes preguntarles en grupos de Facebook u otros foros. Muchas personas han construido con éxito AndroidAPS y ahora lo están utilizando por completo de forma segura, pero es esencial que cada usuario:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

:::{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Actualmente Nightscout no dispone de HIPAA privacy compliance. Use Nightscout y AndroidAPS bajo su responsabilidad, no use esta información para o código para tomar decisiones médicas.
- Use of code from github.com is without warranty or formal support of any kind. Por favor revise el repositorio de Licencia para más detalles.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Su uso aquí es informativo y no implica afiliación o pago por ello.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
:::

Si estás listo para el reto, por favor lee en.

## Objetivos principales detrás de AndroidAPS

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Como empezar

Por supuesto, todo este contenido es muy importante, pero puede ser en el principio muy confuso. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
