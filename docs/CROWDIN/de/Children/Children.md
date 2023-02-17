# Kontrolle aus der Ferne

```{image} ../images/KidsMonitoring.png
:alt: Kinder aus der Ferne kontrollieren
```

AndroidAPS bietet verschiedene Optionen für die Fernüberwachung von Kindern und ermöglicht auch, AAPS aus der Ferne zu steuern. Natürlich kann mittels Remote Monitoring auch der Partner oder Freund unterstützt werden.

## Funktionen

- Die Pumpe des Kindes wird vom Smartphone des Kindes durch AndroidAPS gesteuert.
- Die Eltern können aus der Ferne alle relevanten Daten wie Glukosewerte, aktive Kohlenhydrate, aktives Insulin usw. sehen. Dazu können sie die **NSClient App** auf ihrem Smartphone verwenden. Du musst in AndroidAPS und der NSClient App die gleichen Einstellungen verwenden.
- Alarme auf den Smartphones der Eltern sind durch Einsatz **xDrip+ im Follower Modus** möglich.
- Die Fernsteuerung von AndroidAPS mittels [SMS-Befehlen](../Children/SMS-Commands.md) ist durch eine Zwei-Faktor-Authentifizierung abgesichert.
- Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see [release notes for Version 2.8.1.1](Releasenotes-important-hints-2-8-1-1) for further details.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- Die NSClient-App ist eine reduzierte AAPS-Version mit der du jemandem folgen, Profilwechsel vornehmen, TT setzen und Kohlenhydrate eingeben kannst. Die beiden Apps NSClient & NSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Einziger Unterschied ist der App-Name. Dadurch kannst du die App zwei Mal auf dem gleichen Smartphone installieren, wenn du zwei verschiedenen Personen bzw. Nightscout-Instanzen folgen willst.
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../Configuration/xdrip.md) im Follower Modus (vor allem Datenanzeige und **Alarme**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)

## Dinge, die zu beachten sind

- Setting the correct [treatment factors](FAQ-how-to-begin) (basal rate, DIA, ISF...) is difficult for kids, especially when growth hormones are involved.
- Du musst in AndroidAPS und der NSClient App die gleichen Einstellungen verwenden.
- Diese entsteht zum einen durch die Zeit, die für Up- und Download benötigt wird, zum anderen lädt das AAPS-Haupttelefon nur Daten hoch, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
- Nimm Dir also Zeit, um diese richtig einzustellen und teste sie im Alltag mit Deinem Kind neben Dir bevor Du mit der Fernüberwachung und der Fernbehandlung startest. Schulferien könnten dafür eine gute Zeit sein.
- Wie sieht Dein Notfallplan aus, wenn die Fernsteuerung nicht funktioniert (z.B.  wegen Netzwerkproblemen)?
- Fernüberwachung und -behandlung können in Kindergarten und Grundschule wirklich hilfreich sein. Aber stelle sicher, dass die Lehrer und Erzieher über den Behandlungsplan Deines Kindes Bescheid wissen. Im Bereich [Dateien in der Gruppe AndroidAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) auf Facebook findest Du dafür Beispiele.
