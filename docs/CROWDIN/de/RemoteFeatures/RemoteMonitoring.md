# Kontrolle aus der Ferne

![Überwachung von Kindern](../images/KidsMonitoring.png)

Es gibt einige Möglichkeiten (z. B. mit SMS-Befehlen), AAPS fernsteuern zu können. Natürlich kann mittels Remote Monitoring auch der Partner oder Freund unterstützt werden.

## Funktionen

- Die Pumpe des Kindes wird vom Smartphone des Kindes durch AAPS gesteuert.
- Die Eltern können remote alle relevanten Daten wie Glukosewerte, aktive Kohlenhydrate, aktives Insulin usw. sehen. Dazu können sie die **AAPSClient App** auf ihrem Smartphone verwenden. Verwende in AAPS und der AAPSClient App die gleichen Einstellungen.
- Alarme auf den Smartphones der Eltern sind durch Einsatz **xDrip+ im Follower Modus** möglich.
- Remote control of AAPS using [SMS Commands](../RemoteFeatures/SMSCommands.md) secured by two-factor authentication.
- Remote control through AAPSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- Die AAPSClient-App ist eine reduzierte AAPS-Version mit der Du jemandem folgen, Profilwechsel vornehmen, TT setzen und Kohlenhydrate eingeben kannst. Die beiden Apps AAPSClient & AAPSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Einziger Unterschied ist der App-Name. Dadurch kannst du die App zwei Mal auf dem gleichen Smartphone installieren, wenn du zwei verschiedenen Personen bzw. Nightscout-Instanzen folgen willst.
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../CompatibleCgms/xDrip.md) in follower mode (mainly BG values and **alarms**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)
- Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt

## Smartwatch-Optionen

Eine Smartwatch kann die AAPS-Steuerung speziell mit Kindern vereinfachen. Es sind einige verschiedene Konfigurationen möglich:

- Auf einer kompatiblen Smartwatch kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) installiert werden, die mit der AAPSClient App auf dem Eltern-Smartphone verbunden wird. Damit können der aktuelle Glukosewert und der Loop-Status angezeigt werden. Zusätzlich können dann KH-Einträge vorgenommen werden und auch temporäre Ziele und Profiländerungen aktiviert werden. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich.
- Alternatively, the [AAPS WearOS app](../WearOS/WearOsSmartwatch.md) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. Damit sind dann alle Funktionen der oben beschriebenen NSClient-Version (Smatwatch) verfügbar und zusätzlich die Abgabe eines Bolus möglich. Damit kann ein Elternteil einen Bolus abgeben, ohne an das in Reichweite befindliche Smartphone des Kindes zu müssen.

## Dinge, die zu beachten sind

- Verwende in AAPS und der AAPSClient App die gleichen Einstellungen.
- Diese entsteht zum einen durch die Zeit, die für Up- und Download benötigt wird, zum anderen lädt das AAPS-Haupttelefon nur Daten hoch, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
- What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen with **AAPS** if you suddenly can’t send a new command. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use temporary profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.