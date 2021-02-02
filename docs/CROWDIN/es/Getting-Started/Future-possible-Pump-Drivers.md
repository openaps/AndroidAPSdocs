# Posibles (futuros) drivers para Bombas

Esta es la lista de algunas Bombas que se van mencionando por ahí, y el grado de soporte a las mismas en cualquiera de los sistemas de Lazo cerrado y, a continuación, su situación respecto en AAPS. Al final hay alguna información, de lo que se requiere para que una bomba pueda ser utilizada para "Lazos Cerrados".

## Bombas compatibles

### Omnipod DASH ([Homepage ](https://www.myomnipod.com/DASH))

**Loop status:** Currently not supported by any of loop system. La bomba es candidata, pero el protocolo aún se desconoce. La venta de la bomba se inició oficialmente en enero de 2019.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Comentarios:** Estamos siguiendo el desarrollo de Omnipod DASH, pero el problema en este momento es, que Dash todavía no está disponible en Europa (donde residen la mayoría de desarrolladores de AAPS) y que el protocolo de comunicación no se conoce. Intentaremos aplicar ingeniería inversa a la APK oficial de Dash, para determinar cómo funciona la comunicación, y luego desarrollaremos la implementación basándonos en esos resultados. Puedes seguir el grado de avance aquí: [DashAAPS ](https://github.com/andyrozman/DashAAPS/projects/1), pero no esperes que esté disponible en un futuro inmediato. Hasta el momento es una Prueba de Concepto (hasta que se complete el Objetivo 2).

* * *

### Bomba Ypsomed([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** los modelos 1 - 1.5 (2Q/2018) no son candidatos. Si bien tienen comunicación BT, parece que es muy limitada (uni directional: Bomba->App). Company is planning to extend the pump to support remote bolusing (update planned for end of 2021) and later on they plan to add other functions required to create a Loop. Their official app will support that in the future (planned for 2022 no exact date known). As they plan to have their own Loop system see this [page](https://www.mylife-diabetescare.com/en/loop-program.html), they won't be offering any support to any developers on any DIY loop, at least for now.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Currently not supported by any of loop system. Se considera una candidata para sistemas de bucle cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Es candidata a ser utilizada en sistemas de bucle cerrado. La empresa tiene su propio sistema de medio-bucle limitado (A6). Controlable a través de la apps iPhone. No hay ninguna app de Android disponible en este momento.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Es candidata a ser utilizada en sistemas de bucle cerrado. El control remoto que utilizan es realmente un dispositivo Android modificado. (La bomba, actualmente, sólo está disponible en Corea).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Es candidata a ser utilizada en sistemas de bucle cerrado. La bomba se empezará a vender a finales de 2018 en algunos países de la UE. Se rumorea que tiene Android en un dispositivo de control dedicado.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Bomba de insulina Willcare ([página web](http://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Requisitos hardware para AAPS: ** ninguno. Parece estar habilitado para BT.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Bombas que ya no se venden (las compañías ya no operan)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status:** Currently not supported by any of loop system. Se considera una candidata para sistemas de bucle cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Nota acerca del producto:** parece que la compañía decidió abandonar el negocio de Bombas. Puedes ver más en este [artículo](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Bombas incompatibles

### Tandem:(cualquiera) ([Homepage](https://www.tandemdiabetes.com/))

**Estado bucle:** Incompatible.

Hace tiempo que tenían el firmware llamado T:AP (mencionado en este [artículo ](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), que podría haber sido utilizado para sistemas de bucle cerrado (ya no está disponible, desde que la bomba se actualizó a x2), pero además, no estaba destinado para uso comercial, sólo para uso experimental (proyectos de investigación). Hablé con uno de los directores de la empresa y me ha asegurado que la bomba de Tandem nunca estará abierta, pero han creado su propio sistema de bucle cerrado, que están llamando Control-IQ (creo que ya está disponible en USA, y que debería estar disponible en 2020 en Eu).

* * *

### Animas Vibe

**Estado bucle:** Incompatible. No hay posibilidad de control remoto. **Nota: ** La bomba ya no se comercializa. La compañía dejó de trabajar en el negocio de las bombas (J&J).

* * *

### Animas Ping

**Estado bucle:** Incompatible. Tiene posibilidad de bolos, pero no de TBR. **Note** Stopped being sold when Vibe came out.

## Requisitos para que una bombas sea compatible

**Prerequisitos**

- La bomba debe disponer de algún tipo de control remoto. (BT, Radio frecuencia, etc)
- El protocolo está documentado/hackeado/etc.

**Requisitos mínimos**

- Establecer basales temporales
- Obtener estado
- Cancelar basales temporales

**Para oref1(SMB) o Bolusing:**

- Fijar Bolo

**Recomendable**

- Cancelar Bolo
- Obtener perfil basal (casi un requisito)
- Establecer Perfil Basal (recomendable)
- Leer historial 

**Otros (no necesarios, pero deseables)**

- Suministrar bolos extendidos
- Cancelar bolo extendido
- Leer historial
- Leer TDD

* * *

### Soporte para otras bombas

Si tienes alguna otra bomba de la que te gustaría ver el estado, por favor, ponte en contacto conmigo (@andyrozman en gitter). En próximas versiones, un buen número de configuraciones de bombas se incluirán como compatibles (podrás seleccionar Bomba Virtual en la configuración y se cargarán tus ajustes - [Petición de mejora #157](https://github.com/nightscout/AndroidAPS/issues/157)).