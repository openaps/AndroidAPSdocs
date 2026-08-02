# Remote monitoring

![Monitoring children](../images/KidsMonitoring.png)

__AAPS__ offers several features for remote monitoring of type 1 diabetic children and also faciltates remote commands which sends instructions to the __AAPS__ remotely. Similarly, __AAPSClient__ can also be used for remote monitoring to follow your partner's or friend's __AAPS__.

## Functions

- Kid's pump is controlled by kid's phone using __AAPS__.
- Caregivers can remotely follow viewing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient apk** on their phone which must be an Android phone. Settings amended in __AAPS__ will synchronize with __AAPSClient__ and vice versa.
- Caregivers can be alarmed by using **xDrip+ app in follower mode** on their Android phone if xdrip companion mode is set up.
- Remote control of __AAPS__ using [SMS Commands](../RemoteFeatures/SMSCommands.md) is secured by two-factor authentication.
- Remote control through __AAPSClient__ is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details. However synchonization is less likely to be an issue if the user if using the latest version of __AAPS__ and __AAPSClient__ with NSClientv3/Nightscout15.

## Tools and apps for remote monitoring

- [Nightscout](https://nightscout.github.io/) in web browser (mainly data display).
- __AAPSClient__ apk is a stripped down version of __AAPS__ capable of following the master __AAPS__ as well as making __Profile Switches__, setting __TTs__ and entering carbs. There are 2 apps:  [AAPSClient & AAPSClient2 to download](https://github.com/nightscout/AndroidAPS/releases/). __AAPSClient__ should be used if the caregiver wishes to install the apk twice on the same phone to follow 2 different persons each with their own master __AAPS__ (e.g two children with type 1 each with their own nightscout acccount).
- Dexcom follow if you are using original Dexcom app (BG values only).
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**).
- [Sugarmate](https://sugarmate.io/) or [Spike](https://spike-app.com/) on iOS (mainly BG values and **alarms**)
- Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting.

## Smartwatch options

A smartwatch can be a very useful tool in helping manage __AAPS__ with T1D kids. A couple of different options are possible:

- Option 1 - If __AAPSClient__ is installed on the caregiver's phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the caregiver's phone. This will show current __BG__, __loop status__, Bolus history, allow carb entry, __Temp Targets__ and __Profile changes__. It will NOT allow bolusing from the __AAPSClient__ app.
- Option 2 - The [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can also be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the caregiver. This includes all the functions listed above as well as the ability to bolus insulin remotely without the need to remove the kid's __AAPS’__ phone from their person.  

## Things to consider

- Consider time gap between master and follower due to time for up and download as well as the fact that __AAPS__ master phone will only upload after loop run.
- What is your emergency plan for when remote control does not work (i.e. network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and __ICR__ with the current __Profile__ values. It is recommended that any temporary __Profile Switches__ are set with for a finite duration period (like 1 hour). This avoids any disruption in the event any remote connection disruption takes place as the default __Profile__ will revert.
