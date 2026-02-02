# Fernüberwachung

![Überwachung von Kindern](../images/KidsMonitoring.png)

__AAPS__ bietet verschiedene Funktionen zur Remote-Überwachung von Kindern mit Typ-1 Diabetes. Es erlaubt Remote-Befehle, die Anweisungen direkt an __AAPS__ zur Ausführung aus der Ferne sendet. Der __AAPSClient__ kann auch zur Remote-Überwachung genutzt werden. Du kannst damit __AAPS__-Follower Deines Freundes oder Partners sein.

## Funktionen

- Die Pumpe des Kindes wird vom Smartphone des Kindes durch __AAPS__ gesteuert.
- Betreuende Personen können mit der **AAPSClient APK** auf dem eigenen Android-Smartphone, allen relevanten Daten wie Glukosespiegel, Kohlenhydrate an Bord, Insulin an Bord usw. aus der Ferne sehen. In __AAPS__ geänderte Einstellungen werden mit __AAPSClient__ synchronisiert und umgekehrt.
- Wenn die **xDrip+ App im Follower-Modus** auf dem Android-Smartphone der Pflegekraft genutzt wird, und der Companion Modus eingerichtet ist, können die Betreuenden auch entsprechende Alarme erhalten.
- Die __AAPS__-Fernsteuerung durch [SMS-Befehle](../RemoteFeatures/SMSCommands.md) ist durch eine Zwei-Faktor-Authentifizierung abgesichert.
- Remote-Steuerung über die __AAPSClient__-App wird nur dann empfohlen, wenn Deine Synchronisation gut funktioniert (d. h. Du siehst keine unerwünschten Datenänderungen wie z. B. spontane Änderungen von TT, TBR usw.). Weitere Details hierzu findest Du in [Versionshinweise für Version 2.8.1.1](#important-hints-2-8-1-1). Allerdings sind Synchonisierungs-Probleme unwahrscheinlicher, wenn Du die neueste Version von __AAPS__ und __AAPSClient mit NSClientv3/Nightscout15 nutzt.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- Die beiden Apps AAPSClient & AAPSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Die beiden Apps AAPSClient & AAPSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Möchte die betreuende Person die APK zweimal auf einem Smartphone installieren, um z. B. zwei verschiedene Personen zu monitoren (zwei Kinder mit Typ-1 Diabetes und eigenem Nightscout-Konto), sollte der AAPSClient oder AAPSClient2 genutzt werden.
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../CompatibleCgms/xDrip.md) im Follower-Modus (hauptsächlich Glukosewerte und **Alarme**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)
- Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt

## Smartwatch-Optionen

Eine Smartwatch kann speziell das Managen des __AAPS__ eines Kindes mit Typ-1 Diabetes unterstützen. Es gibt einige Möglichkeiten:

- Option 1 - Wenn der __AAPSClient__ auf dem Smartphone der betreuenden Person installiert ist, kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) auf einer kompatiblen Smartwatch installiert werden, die sich dann mit dem Smartphone der betreuenden Person verbindet. Damit können der aktuelle Glukosewert und der Loop-Status angezeigt werden. Zusätzlich können dann KH-Einträge vorgenommen werden und auch temporäre Ziele und Profilwechsel aktiviert werden. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich.
- Option 2 - Alternativ kann die [AAPS WearOS-App](../WearOS/WearOsSmartwatch.md) erstellt und auf einer kompatiblen Smartwatch installiert werden. Die App ist zwar mit der Smartwatch des Kindes verbunden, aber die Smartwatch selbst wird nicht durch ein Elternteil getragen. Damit sind dann alle Funktionen der oben beschriebenen NSClient-Version (Smatwatch) verfügbar und zusätzlich die Abgabe eines Bolus möglich. Damit kann eine betreuende Person (z. B. ein Elternteil) einen Bolus abgeben, ohne an das in Reichweite befindliche Smartphone des Kindes zu müssen.

## Dinge, die zu beachten sind

- Achte auf mögliche Synchronisierungs-Stände z. B. durch die Zeit, die für Up- und Download benötigt wird oder die Tatsache, dass das __AAPS__-Master-Smartphone nur Daten hochlädt, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
- Wie sieht der Notfallplan aus, wenn die Fernsteuerung nicht funktionieren sollte (_d.h._ Netzwerkprobleme auftreten oder die Bluetooth-Verbindung verloren geht)?  Denke immer daran, was mit **AAPS** passieren wird, wenn Du plötzlich keine neuen Befehle senden kannst. **AAPS** überschreibt die Basalrate, den ISF und das ICR mit den aktuellen Profilwerten. Falls Deine Remote-Verbindung unterbrochen wird, ist es ist besser temporäre Profilwechsel (_d.h._ mit einer beschränkten Dauer) genutzt zu haben, als auf ein dauerhaftes stärkeres Insulinprofil geschwechselt zu sein. Wenn Die eingegebene Zeitspanne abgelaufen ist, wird die Pumpe auf das Original-Profil zurückfallen.
