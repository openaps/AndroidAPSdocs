# Compatible Pumps

AAPS works with a number of insulin pumps. У списку нижче наведено пристрої, які зараз підтримуються. У дужках вказано, чи AAPS зв'язується з помпою через вбудований Bluetooth вашого телефону, чи для цього потрібен пристрій, сумісний з RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; див. також [Поради щодо базового використання](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Деякі старіші помпи [Medtronic](../CompatiblePumps/MedtronicPump.md) (потрібен [додатковий пристрій зв'язку](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (потрібен [додатковий пристрій зв'язку](#CompatiblePumps-additional-communication-device))

## My pump is not listed

Стан інших помп, які потенційно можуть працювати з AAPS, описано на сторінці [Майбутні (можливі) драйвери помп](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

Якщо додатковий пристрій зв'язку не вказано, зв'язок між інсуліновою помпою та **AAPS** працює через вбудований стек Bluetooth в Android. Додатковий пристрій для перекладу протоколу зв'язку не потрібен.

Для старих помп Medtronic та Omnipod Eros потрібен додатковий пристрій зв'язку (крім вашого телефону), який «перекладає» радіосигнал помпи в Bluetooth. Пристрій повинен використовувати ту саму радіочастоту, що й ваша помпа:

- **Omnipod Eros**: 433 МГц.
- **Medtronic**: 916 МГц для помп, що продаються в США та Канаді, 868 МГц для помп, що продаються в інших країнах. Див. [Як визначити, яку частоту використовує моя помпа](#MedtronicPump-faq).

Доступні пристрої зв'язку:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Сайт OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433 МГц](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Сайт Emalink](https://github.com/sks01/EmaLink) - [Контакти](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Контакти](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Сайт LoopLink](https://www.getlooplink.org/) - [Контакти](https://jameswedding.substack.com/) - не перевірено