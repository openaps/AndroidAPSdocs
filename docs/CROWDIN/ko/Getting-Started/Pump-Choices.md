# 펌프 옵션

AndroidAPS는 현재 아래의 펌프와 호환됩니다.

* [아큐-첵 콤보](../Configuration/Accu-Chek-Combo-Pump.md)
* [Accu-Chek Insight (아큐첵 인사이트)](../Configuration/Accu-Chek-Insight-Pump.md)
* [DanaR (다나알)](../Configuration/DanaR-Insulin-Pump.md)
* [DanaRS(다나알에스)](../Configuration/DanaRS-Insulin-Pump.md)
* [Dana-i](../Configuration/DanaRS-Insulin-Pump.md)
* [Diaconn G8 ](../Configuration/DiaconnG8.rst)
* [Omnipod Eros](../Configuration/OmnipodEros.rst)
* [Omnipod DASH](../Configuration/OmnipodDASH.md)
* some old [Medtronic](../Configuration/MedtronicPump.md)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.

만약 당신이 업그레이드된 펌프를 선택할 생각이거나 많은 사람들이 선택하는 펌프를 선택하고 싶다면. 다양한 판매자의 세부정보는 [이 스프레드시트](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0)에 있고 만약 리스트에 없는 정보를 당신이 알고 있다면 공유해 주시기 바랍니다.

콤보와 인사이트는 펌프단품이며, 루프가 가능합니다. The advantages of the DanaR/RS/-i as the pump of choice however are:

* The Dana*R/RS/-i connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS/-i pumps as quick replacement... combo와 연동되는 폰을 찾기는 쉽지 않습니다. (Android 8.1 이상의 폰이 좀 더 대중화되면 바뀔 수도 있습니다)

* Initial pairing is simpler with the DanaRS/-i. 그러나 일반적으로 이 작업은 한 번만 수행되므로 다른 펌프로 새 기능을 테스트하려는 경우에만 영향을줍니다.

* 지금까지 Combo는 screen parsing으로 동작합니다. 일반적으로 잘 동작하지만 아주 느립니다. Loop를 실행하기 위해서는 백그라운드에서 작업이 수행되는 것이 훨씬 많으므로 이것은 문제가 되지 않습니다. 그렇지만 여전히 블루투스 연결이 끊기거나 했을 때 좀더 많은 시간이 필요하며, 주입시나 요리시에는 당신이 폰으로 부터 떨어져 있는 경우 쉽지 않은 일입니다.

* Combo는 TBRs의 마지막에 진동이 울리고 다나R은 SMB 상태에서 진동 또는 경고음이 울립니다. 야간에는 SMB보다는 TBRs를 더 많이 사용할 것입니다. 다나RS는 경고음이나 진동 모두 울리지 않게 구성할 수 있습니다.

* RS는 오프라인 상태에서도 몇초 이내에 탄수화물을 비롯한 펌프 이력을 읽은 내용이 폰으로 스위치 가능하고 CGM 값이 들어오자 마자 loop는 진행됩니다.

* Insulet Omnipod Eros requires a pod communication device such as RileyLink/Orangelink etc. The newer omnipod DASH does not since it communicates with your phone directly via Bluetooth.

* All pumps AndroidAPS can talk with are waterproof on delivery. Dana 펌프가 배터리와 주사기 주입 시스템이 모두 봉인되어 "방수 보증"이 되는 유일한 펌프입니다.

물론 Combo도 아주 좋은 펌프이고 loop도 가능합니다. 그것은 표준 루어 락 장치를 가지고 있는 다양한 인퓨전 세트를 가지고 있다는 장점이 있습니다. 그리고 배터리는 24시간 편의점 등에서 쉽게 살 수 있고 만약 당신이 필요한 경우 호텔 방에 있는 리모컨에서 그것을 빼서 사용할 수도 있습니다. ;-)