# Kompatibla pumpar

AAPS fungerar med ett antal insulinpumpar. Listan nedan visar de enheter som stöds just nu. Inom parentes står det om AAPS kommunicerar med pumpen via telefonens inbyggda Bluetooth eller om det behövs en RileyLink-kompatibel enhet.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; se även [Tips för grundläggande användning](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Vissa äldre [Medtronic](../CompatiblePumps/MedtronicPump.md) ([extra kommunikationsenhet](#CompatiblePumps-additional-communication-device) behövs)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([extra kommunikationsenhet](#CompatiblePumps-additional-communication-device) behövs)

## Min pump finns inte med i listan

Information om andra pumpar som kanske kan fungera med AAPS finns på sidan [Framtida (möjliga) pumpdrivrutiner](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Extra kommunikationsenhet

Om ingen extra kommunikationsenhet nämns, sker kommunikationen mellan insulinpumpen och **AAPS** via Androids inbyggda Bluetooth-stack. Då behövs ingen extra enhet som översätter kommunikationsprotokollet.

För äldre Medtronic-pumpar och Omnipod Eros behövs en extra kommunikationsenhet (förutom telefonen) som "översätter" radiosignalen från pumpen till Bluetooth. Enheten måste använda samma radiofrekvens som din pump:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz för pumpar som sålts i USA och Kanada, 868 MHz för pumpar som sålts i övriga världen. Se [Så tar du reda på vilken frekvens din pump använder](#MedtronicPump-faq).

Tillgängliga kommunikationsenheter:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLinks webbplats](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalinks webbplats](https://github.com/sks01/EmaLink) - [Kontaktinformation](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontaktinformation](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLinks webbplats](https://www.getlooplink.org/) - [Kontaktinformation](https://jameswedding.substack.com/) - Inte testad