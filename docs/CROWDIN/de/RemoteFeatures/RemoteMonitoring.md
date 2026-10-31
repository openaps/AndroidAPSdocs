# Fernüberwachung

![Überwachung von Kindern](../images/KidsMonitoring.png)

__AAPS__ offers several features for remote monitoring of type 1 diabetic children, and also facilitates remote commands which send instructions to __AAPS__ remotely. Der __AAPSClient__ kann auch zur Remote-Überwachung genutzt werden. Du kannst damit __AAPS__-Follower Deines Freundes oder Partners sein.

## Funktionen

- Die Pumpe des Kindes wird vom Smartphone des Kindes durch __AAPS__ gesteuert.
- Caregivers can remotely follow viewing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient apk** on their Android phone (an iPhone version of **AAPSClient** is in development, see [AAPSClient](AapsClient.md)). Settings amended in __AAPS__ will synchronize with __AAPSClient__ and vice versa.
- Caregivers can be alarmed by using **xDrip app in follower mode** on their Android phone if xdrip companion mode is set up.
- Die __AAPS__-Fernsteuerung durch [SMS-Befehle](../RemoteFeatures/SMSCommands.md) ist durch eine Zwei-Faktor-Authentifizierung abgesichert.
- Remote control through __AAPSClient__ uses the signed command channel introduced in **AAPS** 4: the client must first be **paired** with the master (with a QR code or a PIN), and every command is confirmed and executed by the master. Each caregiver's phone can get its own [role](#client-master-control-roles), from read-only to full control — see [Master ↔ Client control](#client-master-control).

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display).
- [__AAPSClient__](AapsClient.md) is a stripped down version of __AAPS__ capable of following the master __AAPS__ and, once **paired**, sending remote commands: carbs, __Temp Targets__, __Profile Switches__ and even boluses (see [Master ↔ Client control](#client-master-control)). There are 3 apps: [AAPSClient, AAPSClient2 & AAPSClient3 to download](https://github.com/nightscout/AndroidAPS/releases/), so a caregiver can follow up to three different persons from the same phone (e.g. two children with type 1, each with their own Nightscout account and master __AAPS__).
- Dexcom follow if you are using original Dexcom app (BG values only).
- [xDrip](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**).
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**).
- Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt.

## Smartwatch-Optionen

Eine Smartwatch kann speziell das Managen des __AAPS__ eines Kindes mit Typ-1 Diabetes unterstützen. Es gibt einige Möglichkeiten:

- Option 1 - Wenn der __AAPSClient__ auf dem Smartphone der betreuenden Person installiert ist, kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) auf einer kompatiblen Smartwatch installiert werden, die sich dann mit dem Smartphone der betreuenden Person verbindet. This will show current __BG__, loop status and bolus history, and allow carb entry, __Temp Targets__ and __Profile__ changes. If the client is **paired** with the master, the watch can also start a **bolus**: the command is relayed through the client to the master, which confirms and delivers it (see [Master ↔ Client control](#client-master-control)).
- Option 2 - The [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can also be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the caregiver. This includes all the functions listed above as well as the ability to bolus insulin directly, without the need to remove the kid's phone from their person.
- Option 3 - Display only: a watch that **AAPS** does not support directly (Xiaomi, Amazfit, or a Wear OS watch showing a complication) can display glucose, IOB, COB and loop status through a companion app such as WatchDrip+ or GlucoDataHandler, fed by the **External Companion Apps** plugin of the **AAPS** or **AAPSClient** phone it is connected to. See [External Companion Apps](#watches-external-companion-apps).

## Dinge, die zu beachten sind

- Consider time gap between master and follower due to time for up and download as well as the fact that __AAPS__ master phone will only upload after loop run.
- What is your emergency plan for when remote control does not work (_e.g._ network problems or lost Bluetooth connection)? Denke immer daran, was mit **AAPS** passieren wird, wenn Du plötzlich keine neuen Befehle senden kannst. **AAPS** überschreibt die Basalrate, den ISF und das ICR mit den aktuellen Profilwerten. Falls Deine Remote-Verbindung unterbrochen wird, ist es ist besser temporäre Profilwechsel (_d.h._ mit einer beschränkten Dauer) genutzt zu haben, als auf ein dauerhaftes stärkeres Insulinprofil geschwechselt zu sein. Wenn Die eingegebene Zeitspanne abgelaufen ist, wird die Pumpe auf das Original-Profil zurückfallen.
