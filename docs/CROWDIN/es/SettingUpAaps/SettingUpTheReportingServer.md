# Configurar el servidor de informes

Ahora mismo hay dos servidores de informes que puedes usar con **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de informes](../images/Building-the-App/ReportingServer.png)

Te recomendamos usar Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout es una aplicación web que puede registrar y mostrar tus datos del MCG y de **AAPS**, y crea informes. Es una plataforma potente que lleva muchos años integrada en **AAPS**. Permite a los usuarios y cuidadores seguir los datos de diabetes del paciente casi en tiempo real (si hay una buena conexión a Internet entre todos los componentes, solo pasan unos segundos entre la recepción de los datos y su publicación). También transmite los comandos remotos que los cuidadores envían a **AAPS** desde **AAPSClient** (consulta [Control máster ↔ cliente](#client-master-control)).

Nightscout es software de código abierto. Cualquier persona puede crear y mantener un servidor Nightscout, con servicios gratuitos o de pago.

Encontrarás más información en el [sitio web del proyecto Nightscout](http://nightscout.github.io/).

### Opción 1: configurar tu propio servidor Nightscout

Crear tu servidor de informes Nightscout puede necesitar una o más aplicaciones web que necesitarán mantenimiento. Para tener un servicio totalmente gratuito, quizá tengas que mover tu sitio Nightscout y tus datos si los proveedores quitan la opción gratuita.

[Aquí](https://nightscout.github.io/nightscout/new_user/#free-diy) encontrarás una descripción de cómo configurar Nightscout, con las ventajas y desventajas de las distintas opciones de funcionamiento y una estimación de los costes.

### Opción 2: pagar un servicio de Nightscout alojado

También hay proveedores de servicios que alojan Nightscout para ti, con una cuota mensual. Los costes son razonables, y la ventaja de una opción alojada es que no necesitas conocimientos de informática ni tener tu propia infraestructura.


Si ya usas Nightscout, de vez en cuando puedes revisar dónde y cómo está alojado tu servidor Nightscout, y cambiar a otra opción si te conviene más.

[Aquí](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table) tienes una lista de algunos servicios que alojan Nightscout.

### Más configuración de Nightscout

Cuando tu instancia de Nightscout esté funcionando, consulta la [página de configuración de Nightscout](../SettingUpAaps/Nightscout.md) para ver otros aspectos a tener en cuenta.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool está disponible en **AAPS** desde la versión 3.2, publicada a finales de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Como con **AAPS** hay un retraso de tres horas entre la llegada de los datos y su presentación en los informes, Tidepool no sirve para compartir información en tiempo real con los cuidadores.  
Por otro lado, Tidepool puede ser una buena solución para compartir informes con el endocrinólogo del paciente si Nightscout no es una solución aceptada.  
```

Tidepool es un proyecto de [código abierto](https://github.com/tidepool-org). Ofrece una cuenta gratuita en los servidores de Tidepool.

Más información sobre cómo configurar Tidepool con AAPS [aquí](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**No** necesitas usar la aplicación de subida de Tidepool: **AAPS** sube por ti la glucosa, los tratamientos y la basal. Solo necesitas una cuenta personal en Tidepool. No subas tus datos con la herramienta de subida independiente de Tidepool, porque eso crea valores duplicados.  
```

## Siguiente paso

Cuando hayas configurado tu servidor de informes, puedes configurar **AAPS** en tu teléfono con el [Asistente de configuración](./SetupWizard.md), que también conectará **AAPS** con tu servidor de informes.