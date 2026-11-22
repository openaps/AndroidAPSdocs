# Bombes compatibles

AAPS funciona amb diverses bombes d'insulina. La llista següent mostra els dispositius compatibles ara mateix. Indica, entre parèntesis, si AAPS es comunica amb la bomba amb la funció Bluetooth del vostre telèfon o si cal un dispositiu compatible amb RileyLink.

<!-- List of hidden pages to avoid overcrowding the menu -->

```{toctree}
:hidden:

../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md
../CompatiblePumps/Accu-Chek-Insight-Pump.md
../CompatiblePumps/AP550-Insulin-Pump.md
../CompatiblePumps/CareLevo.md
../CompatiblePumps/DanaR-Insulin-Pump.md
../CompatiblePumps/DanaRS-Insulin-Pump.md
../CompatiblePumps/DiaconnG8.md
../CompatiblePumps/EOPatch2.md
../CompatiblePumps/Equil5.3.md
../CompatiblePumps/MedtronicPump.md
../CompatiblePumps/MedtrumNano.md
../CompatiblePumps/OmnipodDASH.md
../CompatiblePumps/Omnipod5.md
../CompatiblePumps/OmnipodEros.md
../CompatiblePumps/Future-possible-Pump-Drivers.md
```

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; vegeu també [Consells per a l'ús bàsic](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [AP550](../CompatiblePumps/AP550-Insulin-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Algunes bombes [Medtronic](../CompatiblePumps/MedtronicPump.md) antigues (cal un [dispositiu de comunicació addicional](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod 5](../CompatiblePumps/Omnipod5.md) (Bluetooth; driver in development, test builds only)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (cal un [dispositiu de comunicació addicional](#CompatiblePumps-additional-communication-device))

## La meva bomba no és a la llista

Trobareu detalls sobre l'estat d'altres bombes que podrien funcionar amb AAPS a la pàgina [Controladors de bomba futurs (possibles)](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Dispositiu de comunicació addicional

Si no s'esmenta cap dispositiu de comunicació addicional, la comunicació entre la bomba d'insulina i **AAPS** es basa en el Bluetooth integrat d'Android, sense necessitat d'un dispositiu de comunicació addicional que tradueixi el protocol de comunicació.

Per a les bombes Medtronic antigues i l'Omnipod Eros, cal un dispositiu de comunicació addicional (a més del vostre telèfon) per «traduir» el senyal de ràdio de la bomba a Bluetooth. El dispositiu ha de fer servir la mateixa radiofreqüència que la vostra bomba:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz per a les bombes venudes als EUA i al Canadà, 868 MHz per a les bombes venudes a la resta del món. Vegeu [Com saber quina freqüència fa servir la meva bomba](#MedtronicPump-faq).

Dispositius de comunicació disponibles:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Web d'OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink de 433 MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Web d'EmaLink](https://github.com/sks01/EmaLink) - [Contacte](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contacte](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Web de LoopLink](https://www.getlooplink.org/) - [Contacte](https://jameswedding.substack.com/) - No provat