# AndroidAPS와 호환되는 펌프

AndroidAPS는 현재 다나R, 다나RS 그리고 Combo 펌프에서 동작합니다. 다나R과 Combo 펌프는 출시된 국가에서 구할 수 있고 이미 많은 사람들이 이것들을 사용하고 있으며 다나RS 펌프는 다나R이 업그레이드된 펌프로써 APS를 연동을 위해 좀더 일반적으로 선택되어지고 있습니다. 만약 당신이 업그레이드된 펌프를 선택할 생각이거나 많은 사람들이 선택하는 펌프를 선택하고 싶다면 다나RS 펌프를 선택하면 됩니다. 다양한 판매자의 세부정보는 [이 스프레드시트](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0)에 있고 만약 리스트에 없는 정보를 당신이 알고 있다면 공유해 주시기 바랍니다.

Combo 펌프는 연동하기 쉽지는 않지만 loop는 가능합니다.

다나RS 펌프를 선택하면 아래와 같은 장점이 있습니다.

* 수일개발에서 (특정적으로 Loop 사용을 명시하진 않았지만) 스마트폰으로 펌프를 제어해도 보증이 무효화되지는 않는다고 언급했습니다. IME-DC은 보증이 필요할 경우 대체품으로 단지 교환해줄 뿐이고, 문제가 발생한 펌프는 수일개발로 바로 보낸다고 언급했습니다. 따라서 그들은 당신의 Loop 사용여부를 알지도 못합니다. 따라서 현재 다나R과 다나RS는 DIY Loop를 사용하면서도 보증을 받을 수 있는 유일한 펌프입니다. (Roche는 매뉴얼에 언급되지 않은 내용에 대해서는 사용을 제한하고 있습니다.)

* The Dana*R/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana*R/RS pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)

* Initial pairing is simpler with the Dana* RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.

* So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.

* The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB. The Dana* RS is configurable that it does neither beeps or vibrates.

* Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.

* All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

The Combo of course is a very good pump, and loopable. It also has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](Future-possible-Pump-Drivers.md) page.