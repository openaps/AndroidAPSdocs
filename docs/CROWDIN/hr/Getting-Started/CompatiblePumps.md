# Kompatibilne pumpe

AAPS radi s nizom inzulinskih pumpi. Sljedeći popis prikazuje trenutačno podržane uređaje. U zagradama je navedeno komunicira li AAPS s pumpom putem ugrađene Bluetooth funkcije vašeg telefona ili je potreban uređaj kompatibilan s RileyLinkom.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; pogledajte i [Savjeti za osnovnu upotrebu](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Određene starije pumpe [Medtronic](../CompatiblePumps/MedtronicPump.md) (potreban je [dodatni komunikacijski uređaj](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (potreban je [dodatni komunikacijski uređaj](#CompatiblePumps-additional-communication-device))

## Moja pumpa nije na popisu

Pojedinosti o stanju drugih pumpi koje bi mogle raditi s AAPS-om nalaze se na stranici [Budući (mogući) upravljački programi pumpi](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Dodatni komunikacijski uređaj

Ako dodatni komunikacijski uređaj nije naveden, komunikacija između inzulinske pumpe i **AAPS-a** temelji se na ugrađenom Bluetooth sustavu Androida, bez potrebe za dodatnim komunikacijskim uređajem koji bi prevodio komunikacijski protokol.

Za stare pumpe Medtronic i Omnipod Eros potreban je dodatni komunikacijski uređaj (uz vaš telefon) koji „prevodi“ radijski signal pumpe u Bluetooth. Uređaj mora koristiti istu radijsku frekvenciju kao vaša pumpa:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz za pumpe koje se prodaju u SAD-u i Kanadi, 868 MHz za pumpe koje se prodaju drugdje. Pogledajte [Kako saznati koju frekvenciju koristi moja pumpa](#MedtronicPump-faq).

Dostupni komunikacijski uređaji:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Web stranica OrangeLinka](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Web stranica EmaLinka](https://github.com/sks01/EmaLink) - [Kontakt](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Web stranica LoopLinka](https://www.getlooplink.org/) - [Kontakt](https://jameswedding.substack.com/) - nije testirano