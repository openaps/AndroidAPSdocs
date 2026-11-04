# 호환 펌프

AAPS는 여러 인슐린 펌프와 함께 작동합니다. 아래 목록은 현재 지원되는 장치입니다. 괄호 안에는 AAPS가 휴대폰의 기본 블루투스 기능으로 펌프와 통신하는지, 아니면 RileyLink 호환 장치가 필요한지가 표시되어 있습니다.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (블루투스; [기본 사용 팁](#combov2-tips-for-basic-usage)도 참조하십시오)
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (블루투스)
- [CareLevo](../CompatiblePumps/CareLevo.md) (블루투스)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (블루투스)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (블루투스)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (블루투스)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (블루투스)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (블루투스)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (블루투스)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (블루투스)
- 일부 구형 [Medtronic](../CompatiblePumps/MedtronicPump.md) ([추가 통신 장치](#CompatiblePumps-additional-communication-device) 필요)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (블루투스)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (블루투스)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (블루투스)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([추가 통신 장치](#CompatiblePumps-additional-communication-device) 필요)

## 내 펌프가 목록에 없습니다

AAPS와 함께 사용할 수 있게 될 가능성이 있는 다른 펌프의 상태는 [향후 지원 가능한 펌프 드라이버](../CompatiblePumps/Future-possible-Pump-Drivers.md) 페이지에 자세히 나와 있습니다.

(CompatiblePumps-additional-communication-device)=
## 추가 통신 장치

추가 통신 장치가 적혀 있지 않으면, 인슐린 펌프와 **AAPS** 사이의 통신은 Android에 내장된 블루투스 스택을 사용합니다. 통신 프로토콜을 변환하는 추가 통신 장치는 필요하지 않습니다.

구형 Medtronic 펌프와 Omnipod Eros에는 펌프의 무선 신호를 블루투스로 "변환"하는 추가 통신 장치(휴대폰 외에)가 필요합니다. 이 장치는 펌프와 같은 무선 주파수를 사용해야 합니다:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 미국과 캐나다에서 판매된 펌프는 916 MHz, 그 밖의 지역에서 판매된 펌프는 868 MHz. [내 펌프가 어떤 주파수를 사용하는지 확인하는 방법](#MedtronicPump-faq)을 참조하십시오.

사용 가능한 통신 장치:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink 웹사이트](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink 웹사이트](https://github.com/sks01/EmaLink) - [연락처](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [연락처](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink 웹사이트](https://www.getlooplink.org/) - [연락처](https://jameswedding.substack.com/) - 테스트되지 않음