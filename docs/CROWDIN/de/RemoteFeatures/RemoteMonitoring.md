# Fernüberwachung

![Überwachung von Kindern](../images/KidsMonitoring.png)

__AAPS__ offers several features for remote monitoring of type 1 diabetic children and also faciltates remote commands which sends instructions to the __AAPS__ remotely. Similarly, __AAPSClient__ can also be used for remote monitoring to follow your partner's or friend's __AAPS__.

## Funktionen

- Kid's pump is controlled by kid's phone using __AAPS__.
- Caregivers can remotely follow viewing all relevant data such as glucose levels, carbs on board, insulin on board etc. using **AAPSClient apk** on their phone which must be an Android phone. Settings amended in __AAPS__ will synchromise with __AAPSClient__ and vice versa.
- Caregivers can be alarmed by using **xDrip+ app in follower mode** on their Android phone if xdrip companion mode is set up.
- Remote control of __AAPS__ using [SMS Commands](../RemoteFeatures/SMSCommands.md) is secured by two-factor authentication.
- Remote control through __AAPSClient__ is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details. However synchonization is less likely to an issue if the user if usiing the latest version of __AAPS__ and __AAPSClient with NSClientv3/Nightscout15.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- __AAPSClient__ apk is a stripped down version of __AAPS__ capable of following somebody, making __Profile Switches__, setting __TTs__ and entering carbs. Die beiden Apps AAPSClient & AAPSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. AAPSClient should be used is the caregivers wishes to install the apk twice on the same phone to follow 2 different persons (e.g two children with type 1 each with their own nightscout acccount).
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../CompatibleCgms/xDrip.md) im Follower-Modus (hauptsächlich Glukosewerte und **Alarme**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)
- Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt

## Smartwatch-Optionen

A smartwatch can be a very useful tool in helping manage __AAPS__ with T1D kids. A couple of different options are possible:

- Option 1 - If __AAPSClient__ is installed on the caregiver's phone, the [AAPSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the caregiver's phone. This will show current BG, loop status and allow carb entry, Temp Targets and Profile changes. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich.
- Option 2 - Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Damit sind dann alle Funktionen der oben beschriebenen NSClient-Version (Smatwatch) verfügbar und zusätzlich die Abgabe eines Bolus möglich. This allows the caregiver o administer insulin without needing to remove the kid's phone from however it is kept on them.

## Dinge, die zu beachten sind

- Consider time gap between master and follower due to time for up- and download as well as the fact that __AAPS__ master phone will only upload after loop run.
- Wie sieht der Notfallplan aus, wenn die Fernsteuerung nicht funktionieren sollte (_d.h._ Netzwerkprobleme auftreten oder die Bluetooth-Verbindung verloren geht)?  Denke immer daran, was mit **AAPS** passieren wird, wenn Du plötzlich keine neuen Befehle senden kannst. **AAPS** überschreibt die Basalrate, den ISF und das ICR mit den aktuellen Profilwerten. Falls Deine Remote-Verbindung unterbrochen wird, ist es ist besser temporäre Profilwechsel (_d.h._ mit einer beschränkten Dauer) genutzt zu haben, als auf ein dauerhaftes stärkeres Insulinprofil geschwechselt zu sein. Wenn Die eingegebene Zeitspanne abgelaufen ist, wird die Pumpe auf das Original-Profil zurückfallen.
