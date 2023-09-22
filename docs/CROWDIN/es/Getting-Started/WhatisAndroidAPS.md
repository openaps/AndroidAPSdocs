# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. ¿Qué es un sistema de páncreas artificial? Se trata de un programa de software que tiene como objetivo hacer lo que un páncreas vivo hace: mantener los niveles de azúcar en la sangre dentro de límites saludables automáticamente.

Un APS no puede hacer el trabajo tan bien como lo hace un páncreas biológico, pero puede hacer que la diabetes de tipo 1 sea más fácil de manejar usando dispositivos que están comercialmente disponibles y un software que es simple y seguro. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. La aplicación se comunica con esos dispositivos a través de Bluetooth. Hace sus cálculos de dosificación usando un algoritmo, o un conjunto de reglas, desarrollado para otro sistema de páncreas artificial, llamado OpenAPS, que tiene miles de usuarios y ha acumulado millones de horas de uso.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. La configuración del sistema requiere determinación y conocimientos técnicos. Si no tienes el know-how técnico al principio, al final lo tendrá. Toda la información que necesitas puede ser encontrada en estos documentos, en otros sitios en línea, o de otros que ya lo han hecho, puedes preguntarles en grupos de Facebook u otros foros. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Actualmente Nightscout no dispone de HIPAA privacy compliance. Utilice Nightscout y AAPS bajo su propio riesgo y no utilice la información o el código para tomar decisiones médicas.
- El uso del código de github.com se realiza sin garantía ni soporte formal de ningún tipo. Por favor revise el repositorio de Licencia para más detalles.
- Todos los nombres de productos y empresas, marcas comerciales, marcas de servicio, marcas registradas y marcas de servicio registradas, son propiedad de sus respectivos titulares. Su uso aquí es informativo y no implica afiliación o pago por ello.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Si estás listo para el reto, por favor lee en.

## Primary goals behind AAPS

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
