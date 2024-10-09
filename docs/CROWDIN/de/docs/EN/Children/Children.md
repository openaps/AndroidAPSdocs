# Kontrolle aus der Ferne

![Überwachung von Kindern](../images/KidsMonitoring.png)

Es gibt einige Möglichkeiten (z. B. mit SMS-Befehlen), AAPS fernsteuern zu können. Natürlich kann mittels Remote Monitoring auch der Partner oder Freund unterstützt werden.

## Funktionen

- Die Pumpe des Kindes wird vom Smartphone des Kindes durch AAPS gesteuert.
- Die Eltern können remote alle relevanten Daten wie Glukosewerte, aktive Kohlenhydrate, aktives Insulin usw. sehen. Dazu können sie die **AAPSClient App** auf ihrem Smartphone verwenden. Verwende in AAPS und der AAPSClient App die gleichen Einstellungen.
- Alarme auf den Smartphones der Eltern sind durch Einsatz **xDrip+ im Follower Modus** möglich.
- Die Fernsteuerung von AAPS mit [SMS-Befehlen](../Children/SMS-Commands.md) ist durch eine Zwei-Faktor-Authentifizierung abgesichert.
- Remote-Steuerung über die AAPSClient-App wird nur empfohlen, wenn Deine Synchronisation gut funktioniert (d.h. Du siehst keine unerwünschten Datenänderungen wie z.B. Selbstmodifikation von TT, TBR usw.) siehe [Versionshinweise für Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) für weitere Details.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- Die AAPSClient-App ist eine reduzierte AAPS-Version mit der Du jemandem folgen, Profilwechsel vornehmen, TT setzen und Kohlenhydrate eingeben kannst. Die beiden Apps AAPSClient & AAPSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Einziger Unterschied ist der App-Name. Dadurch kannst du die App zwei Mal auf dem gleichen Smartphone installieren, wenn du zwei verschiedenen Personen bzw. Nightscout-Instanzen folgen willst.
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../Configuration/xdrip.md) im Follower Modus (vor allem Datenanzeige und **Alarme**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)
- Zur Remote-Fehlerbehebung hat sich für einige Konstellationen ein Fernüberwachungs-Tool wie z. B. [TeamViewer](https://www.teamviewer.com/) bewährt

## Smartwatch-Optionen

Eine Smartwatch kann die AAPS-Steuerung speziell mit Kindern vereinfachen. Es sind einige verschiedene Konfigurationen möglich:

- Auf einer kompatiblen Smartwatch kann die [AAPSClient WearOS App](https://github.com/nightscout/AndroidAPS/releases/) installiert werden, die mit der AAPSClient App auf dem Eltern-Smartphone verbunden wird. Damit können der aktuelle Glukosewert und der Loop-Status angezeigt werden. Zusätzlich können dann KH-Einträge vorgenommen werden und auch temporäre Ziele und Profiländerungen aktiviert werden. Die Abgabe eines Bolus ist NICHT über die WearOS App möglich.
- Alternativ kann die [AAPS WearOS App](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) auf einer kompatiblen Smartwatch installiert werden und mit dem Smartphone des Kindes verbunden werden, wobei ein Elternteil die Smartwatch trägt. Damit sind dann alle Funktionen der oben beschriebenen NSClient-Version (Smatwatch) verfügbar und zusätzlich die Abgabe eines Bolus möglich. Damit kann ein Elternteil einen Bolus abgeben, ohne an das in Reichweite befindliche Smartphone des Kindes zu müssen.

## Dinge, die zu beachten sind

- Die Ermittlung der richtigen [Faktoren](FAQ-how-to-begin) (Basalrate, Korrekturfaktoren, Insulinwirkdauer...) ist bei Kindern schwierig, gerade wenn auch noch Wachstumshormone ins Spiel kommen.
- Verwende in AAPS und der AAPSClient App die gleichen Einstellungen.
- Diese entsteht zum einen durch die Zeit, die für Up- und Download benötigt wird, zum anderen lädt das AAPS-Haupttelefon nur Daten hoch, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
- Nimm Dir also Zeit, um diese richtig einzustellen und teste sie im Alltag mit Deinem Kind neben Dir bevor Du mit der Fernüberwachung und der Fernbehandlung startest. Schulferien könnten dafür eine gute Zeit sein.
- Wie sieht Dein Notfallplan aus, wenn die Fernsteuerung nicht funktioniert (z.B.  wegen Netzwerkproblemen)?
- Fernüberwachung und -behandlung können in Kindergarten und Grundschule wirklich hilfreich sein. Aber stelle sicher, dass die Lehrer und Erzieher über den Behandlungsplan Deines Kindes Bescheid wissen. Beispielhafte Behandlungspläne findest Du in der [Dateien-Rubrik der Facebook-Gruppe AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) .
- Das Kinder-Smartphone muss permanent in der Nähe der Insulinpumpe und des Glukose-Sensors sein. Besonders bei sehr kleinen/jungen Kindern kann das mitunter schwierig sein. Das Tragen eines Bauchgurts (z.B. [SPI Belt](https://spibelt.com/collections/kids-belts)) kann in solchen Fällen eine Lösung sein.
