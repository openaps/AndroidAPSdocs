# Uyumlu pompalar

AAPS birçok insülin pompasıyla çalışır. Aşağıdaki liste şu anda desteklenen cihazları gösterir. Parantez içinde, AAPS'in pompayla telefonunuzun kendi Bluetooth işleviyle mi iletişim kurduğu, yoksa RileyLink uyumlu bir cihaz mı gerektiği belirtilir.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; ayrıca bkz. [Temel kullanım için ipuçları](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Bazı eski [Medtronic](../CompatiblePumps/MedtronicPump.md) pompaları ([ek iletişim cihazı](#CompatiblePumps-additional-communication-device) gerekir)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([ek iletişim cihazı](#CompatiblePumps-additional-communication-device) gerekir)

## Pompam listede yok

AAPS ile çalışma olasılığı olan diğer pompaların durumu [Gelecekteki (olası) Pompa Sürücüleri](../CompatiblePumps/Future-possible-Pump-Drivers.md) sayfasında ayrıntılı olarak listelenmiştir.

(CompatiblePumps-additional-communication-device)=
## Additional communication device

Ek bir iletişim cihazından söz edilmiyorsa, insülin pompası ile **AAPS** arasındaki iletişim Android'in yerleşik Bluetooth yığınını kullanır. İletişim protokolünü çevirmek için ek bir iletişim cihazı gerekmez.

Eski Medtronic pompaları ve Omnipod Eros için, pompanın radyo sinyalini Bluetooth'a "çevirmek" amacıyla (telefonunuzun yanında) ek bir iletişim cihazı gerekir. Cihaz, pompanızla aynı radyo frekansını kullanmalıdır:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: ABD ve Kanada'da satılan pompalar için 916 MHz, diğer ülkelerde satılan pompalar için 868 MHz. Bkz. [Pompamın hangi frekansı kullandığını nasıl anlarım?](#MedtronicPump-faq)

Kullanılabilen iletişim cihazları:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Websitesi](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Websitesi](https://github.com/sks01/EmaLink) - [İletişim Bilgileri](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [İletişim bilgileri](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Websitesi](https://www.getlooplink.org/) - [İletişim Bilgileri](https://jameswedding.substack.com/) - Test edilmedi