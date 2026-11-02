# Posibles (futuros) drivers para Bombas

This is a list of some pumps on the market, the status of their support in other looping systems, and their status in AAPS. At the end there is some information about what a pump needs to be "Loop capable".

    {contents} Índice
    :depth: 1
    :local: true

## Bombas en fase de integración en AAPS

**Próximamente:** los drivers para estas bombas están en desarrollo y ya funcionan en versiones de prueba.

Omnipod 5 ([página web](https://www.omnipod.com/))

![Driver de Omnipod 5 en desarrollo](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([página web](https://www.tandemdiabetes.com/))

![Driver de Tandem t:Mobi en desarrollo](../images/future-pumps/tandem-mobi-driver.png)

## Bombas compatibles

### Kaleido ([página web](https://www.hellokaleido.com/))

**Estado del lazo:** La bomba es candidata para el lazo, pero por ahora no se conoce el protocolo. El fabricante no tiene interés en el código abierto.

**Requisitos de hardware para AAPS:** ninguno. Parece estar habilitado para BT.

### Tandem: t:slim X3 ([página web](https://www.tandemdiabetes.com/about-us/pipeline))

**Estado del lazo:** Posible candidata para el lazo en el futuro. Se espera que la t:slim X3 permita el control total desde un teléfono, lo que haría posible el soporte en AAPS, pero aún no se conocen las fechas ni las funciones.

**Requisitos de hardware para AAPS:** ninguno. Se espera que tenga Bluetooth.

**Comentarios:** Aún no ha salido al mercado. Parece que Tandem retrasa una y otra vez la t:slim X3 en su plan de productos, para dar prioridad a la t:Mobi (incluida una versión sin tubo) y a Sigi (su bomba parche).

### Twiist ([página web](https://www.twiist.com/))

**Estado del lazo:** Candidata para el lazo.

**Requisitos de hardware para AAPS:** ninguno. Tiene Bluetooth.

### Bomba de insulina Willcare ([página web](http://shinmyungmedi.com/en/))

**Loop status:** At the moment it is not a Loop candidate, but their staff contacted us and they are interested in making the pump loopable (it seems to be missing only the get/set profile commands).

**Requisitos de hardware para AAPS:** ninguno. Parece estar habilitado para BT.

**Comentarios:** Como la empresa está interesada en la integración con AAPS, es posible que hagan la implementación ellos mismos.

### Ypsopump ([página web](https://www.ypsomed.com/))

**Estado del lazo:** Candidata para el lazo. La comunidad ha descifrado el protocolo Bluetooth de la bomba mediante ingeniería inversa, así que en principio es posible comunicarse con ella.

**Requisitos de hardware para AAPS:** ninguno. Tiene Bluetooth.

**Comentarios:** La Ypsopump protege su comunicación Bluetooth con un cifrado fuerte de un tercero. Trabajar con ella es técnicamente difícil, por eso es complicado crear y mantener un driver fiable. Todavía no hay un driver de AAPS listo para el uso real.

## Bombas que ya no se venden (las compañías ya no operan)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comentarios:** Fin del soporte en marzo de 2025.

## Bombas incompatibles

### Medtronic Bluetooth

**Comentarios:** Medtronic [se retiró](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([página web](https://www.tandemdiabetes.com/))

**Comentarios:** El protocolo Bluetooth de Tandem se ha descifrado mediante ingeniería inversa, pero en la t:slim X2 solo se pueden administrar bolos (la basal no se puede controlar), así que no se puede usar de forma segura con el lazo. Es poco probable que esto cambie, salvo que Tandem permita el control total de la X2 desde un teléfono, algo que es más probable que llegue con la t:slim X3.

### Accu-Chek Solo

**Comentarios:** La comunidad no ha conseguido comunicarse con la bomba Solo.

## Requisitos para que una bomba sea compatible con el lazo

**Requisitos previos**

- La bomba debe disponer de algún tipo de control remoto. (BT, radiofrecuencia, etc.)
- El protocolo está documentado/hackeado/etc.

**Requisitos mínimos**

- Establecer basales temporales
- Obtener estado
- Cancelar basales temporales

**Para oref1(SMB) o para dar bolos:**

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

### Soporte para otras bombas

Si quieres ver el estado de alguna otra bomba, contacta con nosotros en Discord.