# Posibles (futuros) drivers para Bombas

Esta es la lista de algunas Bombas que se van mencionando por ahí, y el grado de soporte a las mismas en cualquiera de los sistemas de Lazo cerrado y, a continuación, su situación respecto en AAPS. Al final hay alguna información, de lo que se requiere para que una bomba pueda ser utilizada para "Lazos Cerrados".

## Bombas con soporte en desarrollo

### Insulet Omnipod (con los viejos Eros Pods) ([Página de inicio ](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** En este momento no soportado de forma nativa por parte de AAPS. La decodificación del protocolo Omnipod ha finalizado-[OpenOmni ](http://www.openomni.org/) y [OmniAPS Slack ](https://omniaps.slack.com/)

**Otras implementaciones:**

- Omnipy para AndroidAPS (estable en las pruebas, se requiere de Raspberry Pi especialmente modificado para RileyLink y AndroidAPS) Omnipy 
- OmniCore para AndroidAPS (sin versión todavía, código C# que se ejecuta en modo nativo en Android, sólo requiere RileyLink y de AndroidAPS especialmente modificado -la próxima versión del proyecto Omnipy).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (estable, distribuida, requere RileyLink).

**Plataformas en Java:** Ninguna hasta ahora.

**AAPS estado de implementación:** Se está trabajando en un controlador nativo de Java para el Omnipod en AAPS en [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (rama omnipod_eros rama). No requiere Raspberry Pi. Puede seguir el progreso en [el OmniAPS Slack ](https://omniaps.slack.com/) en el canal android-driver. Una primera versión de prueba pública se publicó en enero de 2020, y se ha hecho trabajo en una versión estable. Versión actual 0.3 (marzo)

**Requisitos hardware para AAPS: ** RileyLink con el firmware de Omnipod (2.x) y la antena de 433 MHz.

## Bombas compatibles

### Omnipod DASH ([Homepage ](https://www.myomnipod.com/DASH))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. La bomba es candidata, pero el protocolo aún se desconoce. La venta de la bomba se inició oficialmente en enero de 2019.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Comentarios:** Estamos siguiendo el desarrollo de Omnipod DASH, pero el problema en este momento es, que Dash todavía no está disponible en Europa (donde residen la mayoría de desarrolladores de AAPS) y que el protocolo de comunicación no se conoce. Intentaremos aplicar ingeniería inversa a la APK oficial de Dash, para determinar cómo funciona la comunicación, y luego desarrollaremos la implementación basándonos en esos resultados. Puedes seguir el grado de avance aquí: [DashAAPS ](https://github.com/andyrozman/DashAAPS/projects/1), pero no esperes que esté disponible en un futuro inmediato. Hasta el momento es una Prueba de Concepto (hasta que se complete el Objetivo 2).

* * *

### Bomba Ypsomed([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** los modelos 1 - 1.5 (2Q/2018) no son candidatos. Si bien tienen comunicación BT, parece que es muy limitada (uni directional: Bomba->App). Tal vez esto cambie en las próximas versiones. Parece que vamos a obtener una versión loopable en el inicio de 2021, ver este [ artículo ](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Es candidata a ser utilizada en sistemas de Bucle Cerrado. La empresa tiene su propio sistema de medio-lazo limitado (A6). Controlable a través de la apps iPhone. No hay ninguna app de Android disponible en este momento.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Es candidata a ser utilizada en sistemas de Bucle Cerrado. El control remoto que utilizan es realmente un dispositivo Android modificado. (La bomba, actualmente, sólo está disponible en Corea).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Es candidata a ser utilizada en sistemas de Bucle Cerrado. La bomba se empezará a vender a finales de 2018 en algunos países de la UE. Se rumorea que tiene Android en un dispositivo de control dedicado.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

### Medtronic Bluetooth

**Comentarios: ** Esto es la bomba que se presentará en los próximos años y se ha planificado para que sea compatible con el software Tidepool Loop ([ver este artículo ](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

### Bomba de insulina Willcare ([página web](http://en.shinmyungmedi.com))

** Estado del lazo: ** Por el momento, no es candidato de Loop, pero su personal nos ha contactado y están interesados en que su bomba sea loopeable (por el momento, creo que faltan sólo los mandatos de perfil get/set).

**Requisitos hardware para AAPS: ** ninguno. Parece estar habilitado para BT.

** Comentarios: ** Puesto que la empresa está interesada en la integración con AAPS, es posible que lo hagan ellos mismos.

* * *

## Bombas que ya no se venden (las compañías ya no operan)

### Cellnovo Pump ([see businesswire.com](https://www.businesswire.com/news/home/20190328005829/en/Cellnovo-Stops-Manufacturing-and-Commercial-Operations))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Nota acerca del producto:** parece que la compañía decidió abandonar el negocio de Bombas. Puedes ver más en este [artículo](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Bombas incompatibles

### Tandem:(cualquiera) ([Homepage](https://www.tandemdiabetes.com/))

**Loop status:** Incompatible.

Hace tiempo que tenían el firmware llamado T:AP (mencionado en este [artículo ](https://www.liebertpub.com/doi/full/10.1089/dia.2018.0278?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub%3Dpubmed&), que podría haber sido utilizado para sistemas de lazo cerrado (ya no está disponible, desde que la bomba se actualizó a x2), pero además, no estaba destinado para uso comercial, sólo para uso experimental (proyectos de investigación). Hablé con uno de los directores de la empresa y me ha asegurado que la bomba de Tandem nunca estará abierta, pero han creado su propio sistema de lazo cerrado, que están llamando Control-IQ (creo que ya está disponible en USA, y que debería estar disponible en 2020 en Eu).

* * *

### Animas Vibe

**Loop status:** Incompatible. No hay posibilidad de control remoto. **Nota: ** La bomba ya no se comercializa. La compañía dejó de trabajar en el negocio de las bombas (J&J).

* * *

### Animas Ping

**Loop status:** Incompatible. Tenia posibilidad de bolos, pero no de TBR. **Nota:** Dejo de comercializarse con la salida de Vibe al mercado.

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

- Cancelar Bolus
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

Si tienes alguna otra bomba de la que te gustaría ver el estado, por favor, ponte en contacto conmigo (@andyrozman en gitter). En próximas versiones, un buen número de configuraciones de bombas se incluirán como compatibles (podrás seleccionar Bomba Virtual en la configuración y se cargarán tus ajustes - [Petición de mejora #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).