# Setting up the Reporting Server

Ahora mismo hay dos servidores de informes que puedes usar con **AAPS**:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Servidores de informes](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout es una aplicación web que puede registrar y mostrar tus datos del CGM y de **AAPS**, y crea informes. Es una plataforma potente que lleva muchos años integrada en **AAPS**. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). It also carries the remote commands that caregivers send to **AAPS** from **AAPSClient** (see [Master ↔ Client control](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Encontrarás más información en el [sitio web del proyecto Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

[Aquí](https://nightscout.github.io/nightscout/new_user/#free-diy) encontrarás una descripción de cómo configurar Nightscout, con las ventajas y desventajas de las distintas opciones de funcionamiento y una estimación de los costes.

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

[Aquí](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table) tienes una lista de algunos servicios que alojan Nightscout.

### Further configuration of Nightscout

Cuando tu instancia de Nightscout esté funcionando, consulta la [página de configuración de Nightscout](../SettingUpAaps/Nightscout.md) para ver otros aspectos a tener en cuenta.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool está disponible en **AAPS** desde la versión 3.2, publicada a finales de 2023.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Como con **AAPS** hay un retraso de tres horas entre la llegada de los datos y su presentación en los informes, Tidepool no sirve para compartir información en tiempo real con los cuidadores.  
Por otro lado, Tidepool puede ser una buena solución para compartir informes con el endocrinólogo del paciente si Nightscout no es una solución aceptada.  
```

Tidepool es un proyecto de [código abierto](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Más información sobre cómo configurar Tidepool con AAPS [aquí](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
**No** necesitas usar la aplicación de subida de Tidepool: **AAPS** sube por ti la glucosa, los tratamientos y la basal. Solo necesitas una cuenta personal en Tidepool. No subas tus datos con la herramienta de subida independiente de Tidepool, porque eso crea valores duplicados.  
```

## Next step

Cuando hayas configurado tu servidor de informes, puedes configurar **AAPS** en tu teléfono con el [Asistente de configuración](./SetupWizard.md), que también conectará **AAPS** con tu servidor de informes.