# Bombas compatibles

AAPS funciona con varias bombas de insulina. La siguiente lista muestra los dispositivos compatibles actualmente. Entre paréntesis indica si AAPS se comunica con la bomba a través del Bluetooth propio de tu teléfono o si necesita un dispositivo compatible con RileyLink.

<!-- List of hidden pages to avoid overcrowding the menu -->

```{toctree}
:hidden:

../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md
../CompatiblePumps/Accu-Chek-Insight-Pump.md
../CompatiblePumps/CareLevo.md
../CompatiblePumps/DanaR-Insulin-Pump.md
../CompatiblePumps/DanaRS-Insulin-Pump.md
../CompatiblePumps/DiaconnG8.md
../CompatiblePumps/EOPatch2.md
../CompatiblePumps/Equil5.3.md
../CompatiblePumps/MedtronicPump.md
../CompatiblePumps/MedtrumNano.md
../CompatiblePumps/OmnipodDASH.md
../CompatiblePumps/OmnipodEros.md
../CompatiblePumps/Future-possible-Pump-Drivers.md
```

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; mira también [Consejos para el uso básico](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Algunas bombas [Medtronic](../CompatiblePumps/MedtronicPump.md) antiguas (se necesita un [dispositivo de comunicación adicional](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (se necesita un [dispositivo de comunicación adicional](#CompatiblePumps-additional-communication-device))

## Mi bomba no está en la lista

Los detalles sobre el estado de otras bombas que quizás puedan funcionar con AAPS están en la página [Posibles (futuros) drivers para Bombas](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Dispositivo de comunicación adicional

Si no se menciona ningún dispositivo de comunicación adicional, la comunicación entre la bomba de insulina y **AAPS** usa el Bluetooth integrado de Android. No hace falta ningún dispositivo adicional para traducir el protocolo de comunicación.

Para las bombas Medtronic antiguas y Omnipod Eros se necesita un dispositivo de comunicación adicional (además de tu teléfono) que «traduzca» la señal de radio de la bomba a Bluetooth. El dispositivo debe usar la misma frecuencia de radio que tu bomba:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz para bombas vendidas en EE. UU. y Canadá, 868 MHz para bombas vendidas en otros países. Mira [Cómo saber qué frecuencia usa mi bomba](#MedtronicPump-faq).

Dispositivos de comunicación disponibles:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Web de OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink de 433 MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Web de Emalink](https://github.com/sks01/EmaLink) - [Contacto](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contacto](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Web de LoopLink](https://www.getlooplink.org/) - [Contacto](https://jameswedding.substack.com/) - Sin probar