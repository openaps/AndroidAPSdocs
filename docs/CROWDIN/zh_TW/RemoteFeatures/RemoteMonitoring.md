# 遠端監控

![監控兒童](../images/KidsMonitoring.png)

__AAPS__ offers several features for remote monitoring of type 1 diabetic children, and also facilitates remote commands which send instructions to __AAPS__ remotely. 同樣地，__AAPSClient__ 也可用於遠端監控，追蹤你伴侶或朋友的 __AAPS__。

## 功能

- 孩子的幫浦由孩子的手機透過 __AAPS__ 控制。
- Caregivers can remotely follow viewing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient apk** on their Android phone (an iPhone version of **AAPSClient** is in development, see [AAPSClient](AapsClient.md)). Settings amended in __AAPS__ will synchronize with __AAPSClient__ and vice versa.
- Caregivers can be alarmed by using **xDrip app in follower mode** on their Android phone if xdrip companion mode is set up.
- 使用 [簡訊指令](../RemoteFeatures/SMSCommands.md) 遠端控制 __AAPS__，會以兩步驟驗證來保護安全。
- Remote control through __AAPSClient__ uses the signed command channel introduced in **AAPS** 4: the client must first be **paired** with the master (with a QR code or a PIN), and every command is confirmed and executed by the master. Each caregiver's phone can get its own [role](#client-master-control-roles), from read-only to full control — see [Master ↔ Client control](#client-master-control).

## 遠端監控的工具和應用程式

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display).
- [__AAPSClient__](AapsClient.md) is a stripped down version of __AAPS__ capable of following the master __AAPS__ and, once **paired**, sending remote commands: carbs, __Temp Targets__, __Profile Switches__ and even boluses (see [Master ↔ Client control](#client-master-control)). There are 3 apps: [AAPSClient, AAPSClient2 & AAPSClient3 to download](https://github.com/nightscout/AndroidAPS/releases/), so a caregiver can follow up to three different persons from the same phone (e.g. two children with type 1, each with their own Nightscout account and master __AAPS__).
- Dexcom follow if you are using original Dexcom app (BG values only).
- [xDrip](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**).
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**).
- 一些用戶發現像[TeamViewer](https://www.teamviewer.com/)這樣的完整遠端桌面工具對於進行進階的遠端問題排除非常有幫助。

## 智慧型手錶選項

智慧型手錶在協助以 __AAPS__ 管理第一型糖尿病孩童時，非常有幫助。有幾種不同的選項可供選擇：

- 選項 1 - 若照護者的手機已安裝 __AAPSClient__，即可在與照護者手機連線的相容智慧型手錶上安裝 [AAPSClient WearOS 應用程式](https://github.com/nightscout/AndroidAPS/releases/)。 This will show current __BG__, loop status and bolus history, and allow carb entry, __Temp Targets__ and __Profile__ changes. If the client is **paired** with the master, the watch can also start a **bolus**: the command is relayed through the client to the master, which confirms and delivers it (see [Master ↔ Client control](#client-master-control)).
- Option 2 - The [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can also be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the caregiver. This includes all the functions listed above as well as the ability to bolus insulin directly, without the need to remove the kid's phone from their person.
- Option 3 - Display only: a watch that **AAPS** does not support directly (Xiaomi, Amazfit, or a Wear OS watch showing a complication) can display glucose, IOB, COB and loop status through a companion app such as WatchDrip+ or GlucoDataHandler, fed by the **External Companion Apps** plugin of the **AAPS** or **AAPSClient** phone it is connected to. See [External Companion Apps](#watches-external-companion-apps).

## 需考慮的事項

- Consider time gap between master and follower due to time for up and download as well as the fact that __AAPS__ master phone will only upload after loop run.
- What is your emergency plan for when remote control does not work (_e.g._ network problems or lost Bluetooth connection)? 始終考慮當你突然無法發送新指令時，**AAPS** 會發生什麼情況。 **AAPS** 會使用目前設定覆蓋幫浦的基礎率、ISF 和 ICR。如果切換到更強的胰島素設定，請只使用臨時設定切換（_例如_設置特定的持續時間），以防止遠端連線中斷。當時間到期時，幫浦將恢復到原始設定。
