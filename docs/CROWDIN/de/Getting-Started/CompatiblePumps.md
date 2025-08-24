# Kompatible Pumpen

AAPS funktioniert mit einer Reihe von Insulinpumpen.  Die folgende Liste enthält die derzeit unterstützten Geräte und zeigt in Klammern an, ob AAPS mit der Pumpe kommuniziert, indem Du die native Bluetooth-Funktion Deines Smartphones verwenden kannst oder ob ein Rileylink-kompatibles Gerät benötigt wird.

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; siehe auch [Accu-Chek Combo Tipps zum Einstieg](../CompatiblePumps/Accu-Chek-Combo-Tips-for-Basic-usage.md))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8 ](../CompatiblePumps/DiaconnG8.md)  (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)  ([additional communication device](#CompatiblePumps-additional-communication-device) needed)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)  (Bluetooth)
- [Medtrum Nano](../CompatiblePumps/MedtrumNano.md)  (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md)  (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Certain older [Medtronic](../CompatiblePumps/MedtronicPump.md) ([additional communication device](#CompatiblePumps-additional-communication-device) needed)

## My pump is not listed

Informationen über weitere Pumpen, die möglicherweise in Zukunft mit AAPS funktionieren, findest Du auf der Seite [Zukünftig ggf. loopbare Pumpen](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Zusätzliches Kommunikationsgerät

Wenn kein zusätzliches Kommunikationsgerät erwähnt wird, kommuniziert die Insulinpumpe mit **AAPS** direkt über Bluetooth (ohne dass ein zwischengeschaltetes Gerät noch etwas umwandeln muss).

For old Medtronic pumps and Omnipod Eros, an additional communication device (besides your phone) is needed to "translate" the radio signal from pump to bluetooth. Wähle die richtige Variante des Kommunikationsgeräts aus, je nach dem welche Pumpe Du nutzt.

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Kontakt:](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt:](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Kontakt:](https://jameswedding.substack.com/) - nicht getestet