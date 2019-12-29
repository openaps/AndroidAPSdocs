# Posibles (futuros) drivers para Bombas

Esta es la lista de algunas Bombas que se van mencionando por ahí, y el grado de soporte a las mismas en cualquiera de los sistemas de Lazo cerrado y, a continuación, su situación respecto en AAPS. Al final hay alguna información, de lo que se requiere para que una bomba pueda ser utilizada para "Lazos Cerrados".

## Bombas con soporte en desarrollo

### Medtronic

**Loop status:** algunas de la versiones antiguas son utilizables, pro no los modelos más recientes (ver más abajo)

**Otras plataformas: ** OpenAPS, Loop

**Plataformas Java:** aplicación parcial, disponible en [Rountrip2](https://github.com/TC2013/Roundtrip2), y [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS)

**Estado de implementación AAPS:** Trabajo en curso. Mira [Andy's AndroidAPS fork](https://github.com/andyrozman/AndroidAPS), rama medtronic_andy. La mayor parte del trabajo se hizo en [RileyLinkAAPS](https://github.com/andyrozman/RileyLinkAAPS) para tener la estructura y los comandos funcionando. Hay proyecto (Medtronic) y tickets abiertos para el desarrollo futuro en ese repositorio, el desarrollo se está realizando en la rama dev_medtronic (que es la rama predeterminada allí). También hay un espacio en git: RileyLinkAAPS/Lobby. AAPS. Ya ha salido la versión 0.10, con aproximadamente el 95% de toda la funcionalidad, por el momento falta la sincronización de eventos TBRs y eventos de "Suministro detenido" de la bomba. El proyecto probablemente se añadirá al repositorio principal a finales de julio de 2019. Para más detalles y calendario vea [Tabla de proyecto](https://github.com/andyrozman/RileyLinkAAPS/projects/1).

**Requisitos hardware para AAPS: ** RileyLink (con antena de 916 MHz).

**Versiones Loopables: ** 512-522, 523 (Fw 2.4A o inferior), 554 (firmware de la UE 2.6A o inferior, firmware de CA 2.7A o inferior). Lo mismo ocurre con las versiones 7xx. Todos los demás dispositivos no son compatibles, y probablemente no lo serán.

* * *

### Insulet Omnipod (con los viejos Eros Pods) ([Página de inicio ](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** En este momento no soportado de forma nativa por parte de AAPS. El decodificación del protocolo Omnipod ha finalizado-[OpenOmni ](http://www.openomni.org/) y [OmniAPS Slack ](https://omniaps.slack.com/)

**Otras plataformas:**

- Omnipy para AndroidAPS (estable en las pruebas, se requiere de Raspberry Pi especialmente modificado para RileyLink y AndroidAPS) Omnipy 
- OmniCore para AndroidAPS (sin versión todavía, código C# que se ejecuta en modo nativo en Android, sólo requiere RileyLink y de AndroidAPS especialmente modificado -la próxima versión del proyecto Omnipy).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (estable, distribuida, requere RileyLink).

**Plataformas en Java:** Ninguna hasta ahora.

**AAPS estado de implementación:** Trabajando en un controlador nativo de Java para el Omnipod en AAPS se está avanzando en [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (rama omnipod_eros rama). No requiere Raspberry Pi. Puede seguir el progreso en [el OmniAPS Slack ](https://omniaps.slack.com/) en el canal android-driver. Se espera que una primera versión de prueba pública sea publicada alrededor de enero de 2020.

**Requisitos hardware para AAPS: ** RileyLink con el firmware de Omnipod (2.x) y la antena de 433 MHz.

## Bombas compatibles

### Omnipod DASH ([Homepage ](https://www.myomnipod.com/DASH))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. La bomba es candidata, pero el protocolo aún se desconoce. La venta de la bomba se inició oficialmente en enero de 2019.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Comentarios:** Estamos siguiendo el desarrollo de Omnipod DASH, pero el problema en este momento es, que Dash todavía no está disponible en Europa (donde residen la mayoría de desarrolladores de AAPS) y que el protocolo de comunicación no se conoce. Intentaremos aplicar ingeniería inversa a la APK oficial de Dash, para determinar cómo funciona la comunicación, y luego desarrollaremos la implementación basándonos en esos resultados. Puedes seguir el grado de avance aquí: [DashAAPS ](https://github.com/andyrozman/DashAAPS/projects/1), pero no esperes que esté disponible en un futuro inmediato. Hasta el momento es una Prueba de Concepto (hasta que se complete el Objetivo 2).

* * *

### Bomba Ypsomed([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** los modelos 1 - 1.5 (2Q/2018) no son candidatos. Si bien tienen comunicación BT, parece que es muy limitada (uni directional: Bomba->App). Tal vez esto cambie en las próximas versiones.

**Requisitos hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Es candidata a ser utilizada en sistemas de Lazo Cerrado. La empresa tiene su propio sistema de medio-lazo limitado (A6). Controlable a través de la apps iPhone. No hay ninguna app de Android disponible en este momento.

**Requisitos hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Es candidata a ser utilizada en sistemas de Bucle Cerrado. El control remoto que utilizan es realmente un dispositivo Android modificado. (La bomba, actualmente, sólo está disponible en Corea).

**Requisitos hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Es candidata a ser utilizada en sistemas de Bucle Cerrado. La bomba se empezará a vender a finales de 2018 en algunos países de la UE. Se rumoreaba que se controlaría desde una app Android.

**Requisitos hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

### Medtronic Bluetooth

**Comentarios: ** Esto es la bomba que se presentará en los próximos años y se ha planificado para que sea compatible con el software Tidepool Loop ([ver este artículo ](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration)).

* * *

## Bombas que ya no se venden (las compañías ya no operan)

### Bomba de Cellnovo ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

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