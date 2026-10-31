# Kompatybilne pompy

AAPS działa z wieloma pompami insulinowymi. Poniższa lista pokazuje obecnie obsługiwane urządzenia. W nawiasie podano, czy AAPS komunikuje się z pompą przez wbudowany Bluetooth telefonu, czy wymaga urządzenia zgodnego z RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; zobacz też [Wskazówki dotyczące podstawowego użytkowania](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Niektóre starsze pompy [Medtronic](../CompatiblePumps/MedtronicPump.md) (wymagane [dodatkowe urządzenie do komunikacji](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (wymagane [dodatkowe urządzenie do komunikacji](#CompatiblePumps-additional-communication-device))

## Mojej pompy nie ma na liście

Informacje o stanie innych pomp, które mogą w przyszłości działać z AAPS, znajdziesz na stronie [Sterowniki do pomp (prawdopodobne) w przyszłości](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Dodatkowe urządzenie komunikacyjne

Jeśli nie podano dodatkowego urządzenia do komunikacji, pompa insulinowa komunikuje się z **AAPS** przez wbudowany w Androida stos Bluetooth. Nie potrzebujesz wtedy dodatkowego urządzenia, które tłumaczy protokół komunikacji.

W przypadku starszych pomp Medtronic i Omnipod Eros potrzebne jest dodatkowe urządzenie do komunikacji (oprócz telefonu), które „tłumaczy” sygnał radiowy z pompy na Bluetooth. Urządzenie musi używać tej samej częstotliwości radiowej co Twoja pompa:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz dla pomp sprzedawanych w USA i Kanadzie, 868 MHz dla pomp sprzedawanych w innych krajach. Zobacz [Jak sprawdzić, jakiej częstotliwości używa moja pompa](#MedtronicPump-faq).

Dostępne urządzenia do komunikacji:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Strona OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433 MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Strona Emalink](https://github.com/sks01/EmaLink) - [Kontakt](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Kontakt](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Strona LoopLink](https://www.getlooplink.org/) - [Kontakt](https://jameswedding.substack.com/) - nieprzetestowany