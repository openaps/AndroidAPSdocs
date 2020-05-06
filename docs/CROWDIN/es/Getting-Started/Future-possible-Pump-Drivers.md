# Posibles (futuros) drivers para Bombas

Esta es la lista de algunas Bombas que se van mencionando por ahí, y el grado de soporte a las mismas en cualquiera de los sistemas de Lazo cerrado y, a continuación, su situación respecto en AAPS. Al final hay alguna información, de lo que se requiere para que una bomba pueda ser utilizada para "Lazos Cerrados".

## Bombas con soporte en desarrollo

### Medtronic

**Loop status:** Medtronic is part of AAPS, since version 2.4

**Hardware requirement for AAPS:** RileyLink (with 916 MHz antenna).

**Loopable versions:** 512-522, 523 (Fw 2.4A or lower), 554 (EU firmware 2.6A or lower, CA firmware 2.7A or lower). Same for 7xx versions. All other devices are not supported, and probably won't be.

* * *

### Insulet Omnipod (con los viejos Eros Pods) ([Página de inicio ](https://www.myomnipod.com/en-gb/about/how-to-use))

**Loop status:** Not supported natively by AAPS at the moment. Decoding of the Omnipod protocol is finished- [OpenOmni](http://www.openomni.org/) and [OmniAPS Slack](https://omniaps.slack.com/)

**Other implementations:**

- Omnipy para AndroidAPS (estable en las pruebas, se requiere de Raspberry Pi especialmente modificado para RileyLink y AndroidAPS) Omnipy 
- OmniCore para AndroidAPS (sin versión todavía, código C# que se ejecuta en modo nativo en Android, sólo requiere RileyLink y de AndroidAPS especialmente modificado -la próxima versión del proyecto Omnipy).
- [iOS Loop](https://loopkit.github.io/loopdocs/) (estable, distribuida, requere RileyLink).

**Java implementations:** None till now.

**AAPS implementation status:** Work on a native Java driver for Omnipod on AAPS is progressing on [AAPS-Omnipod/AndroidAPS](https://github.com/AAPS-Omnipod/AndroidAPS) (omnipod_eros branch). It does not require a Raspberry Pi. You can follow progress on [the OmniAPS Slack](https://omniaps.slack.com/) on channel android-driver. A first public test version was released in January 2020, and work is beeing done towards stabilization. Current version 0.3 (March)

**Hardware requirement for AAPS:** RileyLink with Omnipod firmware (2.x) and 433 MHz antenna.

## Bombas compatibles

### Omnipod DASH ([Homepage ](https://www.myomnipod.com/DASH))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Pump is a Loop candidate, but protocol unknown at the moment. Selling of pump officially started in January 2019.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Comments:** We are looking into development of Omnipod DASH, but problem at the moment is, that Dash is not yet available in Europe (where most of AAPS developers are) and that communciation protocol is unknown. We will try to reverse engineer official Dash APK, to determine how communication works and then implementation based on that findings. You can follow what is happening here: [DashAAPS](https://github.com/andyrozman/DashAAPS/projects/1), but don't expect this to be available anytime soon. This is at the moment only Proof Of Concept (until Milestone 2 is completed).

* * *

### Bomba Ypsomed([Homepage](https://www.ypsomed.com/en/diabetes-care-mylife.html))

**Loop status:** Version 1 - 1.5 (2Q/2018) are not Loop candidates. While they do have BT communication, it seems that communication is very limited (uni directional: Pump->App). Maybe this will change in the next versions. It seems that we will get loopable version in begining of 2021, see this [article](https://www.ypsomed.com/en/media/details/ypsomed-and-dexcom-enter-into-partnership-to-drive-closed-loop-system.html?fbclid=IwAR3gYSMz8dvPARYgbj5djm4Yxa7JdFthfzOrrg94C9Bigj6RGeycxSfGHyg).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

* * *

### Medtrum A6/P6/C6 ([Homepage](http://www.medtrum.com/P6.html))

**Loop status:** Is a Loop candidate. Company has its own limited half-Loop system running (A6). Controlable via iPhone App. No Android app available at the moment.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### EOFLOW ([Homepage](http://www.eoflow.com/eng/main/main.html))

**Loop status:** Is a Loop candidate. The remote control they use is actually modified Android device. (Pump is currently available only in Korea).

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

* * *

### Accu-Chek Solo ([Homepage](https://www.roche.com/media/releases/med-cor-2018-07-23.htm))

**Loop status:** Is a Loop candidate. Pump will start selling at end of 2018 in selected countries in EU. Its rummored to have Android app on special controler device for control.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Parece estar habilitado para BT.

### Medtronic Bluetooth

**Comments:** This is pump that will come out in next few years and is planned to be supported in Tidepool Loop software ([see this article](https://www.tidepool.org/blog/tidepool-loop-medtronic-collaboration).

### Willcare Insulin pump ([Homepage](https://en.shinmyungmedi.com))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. Parece estar habilitado para BT.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

* * *

## Bombas que ya no se venden (las compañías ya no operan)

### Cellnovo Pump ([Homepage](https://www.cellnovo.com/en/homepage))

**Loop status: ** Actualmente no está soportado por ninguno de los sistemas de lazo cerrado. Se considera una candidata para sistemas de lazo cerrado, pero en la medida que aún no se conoce el protocolo, no se prevé que sea soportada en breve.

**Requisitos de hardware para AAPS: ** Probablemente ninguno. Está habilitada para BT.

**Nota acerca del producto:** parece que la compañía decidió abandonar el negocio de Bombas. Puedes ver más en este [artículo](https://diabetogenic.wordpress.com/2019/04/01/and-then-cellnovo-disappeared/?fbclid=IwAR12Ow6gVbEOuD1zw7aNjBwqj5_aPkPipteHY1VHBvT3mchlH2y7Us6ZeAU)

## Bombas incompatibles

### Tandem:(any) ([Homepage](https://www.tandemdiabetes.com/))

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

### Other pumps support

Si tienes alguna otra bomba de la que te gustaría ver el estado, por favor, ponte en contacto conmigo (@andyrozman en gitter). En próximas versiones, un buen número de configuraciones de bombas se incluirán como compatibles (podrás seleccionar Bomba Virtual en la configuración y se cargarán tus ajustes - [Petición de mejora #863](https://github.com/MilosKozak/AndroidAPS/issues/863)).