# 펌프 옵션

AndroidAPS는 현재 아래의 펌프와 호환됩니다.

* Accu-Chek Combo (아큐첵 콤보)
* Accu-Chek Insight (아큐첵 인사이트)
* DanaR (다나알)
* DanaRS(다나알에스) 

펌프. AndroidAPS와 잠재적으로 연동 가능한 다른 펌프들의 세부정보 상태는 미래에 연동 가능성이 있는 펌프 ([Link](Future-possible-Pump-Drivers.md)) 에 정리되어 있습니다.

만약 당신이 업그레이드된 펌프를 선택할 생각이거나 많은 사람들이 선택하는 펌프를 선택하고 싶다면. 다양한 판매자의 세부정보는 [이 스프레드시트](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0)에 있고 만약 리스트에 없는 정보를 당신이 알고 있다면 공유해 주시기 바랍니다.

콤보와 인사이트는 펌프단품이며, 루프가 가능합니다. 다나R/RS 펌프를 선택하면 아래와 같은 장점이 있습니다.

* 다나*R/RS는 대부분의 안드로이드 폰과 호환이 됩니다. >= 5.1은 flash lineage없이 가능합니다. 만약 당신의 폰이 고장났다면 다나*R/RS와 연동되는 교체 폰은 쉽게 찾을 수 있습니다. combo와 연동되는 폰을 찾기는 쉽지 않습니다. (Android 8.1 이상의 폰이 좀 더 대중화되면 바뀔 수도 있습니다)

* 초기 페어링은 다나RS가 더 쉽습니다. 그러나 일반적으로 이 작업은 한 번만 수행되므로 다른 펌프로 새 기능을 테스트하려는 경우에만 영향을줍니다.

* 지금까지 Combo는 screen parsing으로 동작합니다. 일반적으로 잘 동작하지만 아주 느립니다. Loop를 실행하기 위해서는 백그라운드에서 작업이 수행되는 것이 훨씬 많으므로 이것은 문제가 되지 않습니다. 그렇지만 여전히 블루투스 연결이 끊기거나 했을 때 좀더 많은 시간이 필요하며, 주입시나 요리시에는 당신이 폰으로 부터 떨어져 있는 경우 쉽지 않은 일입니다.

* Combo는 TBRs의 마지막에 진동이 울리고 다나R은 SMB 상태에서 진동 또는 경고음이 울립니다. 야간에는 SMB보다는 TBRs를 더 많이 사용할 것입니다. The Dana* RS is configurable that it does neither beeps or vibrates.

* Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.

* All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

The Combo of course is a very good pump, and loopable. It also has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-)