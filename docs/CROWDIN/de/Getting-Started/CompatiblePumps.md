# Kompatible Pumpen

AAPS funktioniert mit einer Reihe von Insulinpumpen. Die folgende Liste zeigt die derzeit unterstützten Geräte. In Klammern ist angegeben, ob AAPS über die eingebaute Bluetooth-Funktion Deines Smartphones mit der Pumpe kommuniziert oder ob ein RileyLink-kompatibles Gerät nötig ist.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; siehe auch [Tipps zur grundlegenden Nutzung](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Bestimmte ältere [Medtronic](../CompatiblePumps/MedtronicPump.md)-Pumpen ([zusätzliches Kommunikationsgerät](#CompatiblePumps-additional-communication-device) benötigt)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([zusätzliches Kommunikationsgerät](#CompatiblePumps-additional-communication-device) erforderlich)

## Meine Pumpe ist nicht aufgeführt

Informationen über weitere Pumpen, die möglicherweise in Zukunft mit AAPS funktionieren, findest Du auf der Seite [Zukünftig ggf. loopbare Pumpen](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Zusätzliches Kommunikationsgerät

Ist kein zusätzliches Kommunikationsgerät angegeben, kommunizieren Insulinpumpe und **AAPS** über den in Android integrierten Bluetooth-Stack. Ein zusätzliches Gerät, das das Kommunikationsprotokoll übersetzt, ist dann nicht nötig.

Für ältere Medtronic-Pumpen und Omnipod Eros ist ein zusätzliches Kommunikationsgerät (neben Deinem Smartphone) nötig, das das Funksignal der Pumpe in Bluetooth „übersetzt“. Das Gerät muss dieselbe Funkfrequenz nutzen wie Deine Pumpe:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz für Pumpen, die in den USA und Kanada verkauft wurden, 868 MHz für Pumpen aus anderen Ländern. Siehe [Wie finde ich heraus, welche Frequenz meine Pumpe nutzt?](#MedtronicPump-faq).

Verfügbare Kommunikationsgeräte:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Kontakt:](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt:](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Kontakt:](https://jameswedding.substack.com/) - nicht getestet