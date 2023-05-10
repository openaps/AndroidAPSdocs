# Kontrolle aus der Ferne

```{image} ../images/KidsMonitoring.png
:alt: Kinder aus der Ferne kontrollieren
```

AAPS offer several options for remote monitoring of children and also allows to send remote commands. Of course you can also use remote monitoring to follow your partner or friend.

## Funktionen

- Kid's pump is controlled by kid's phone using AAPS.
- Die Eltern können aus der Ferne alle relevanten Daten wie Glukosewerte, aktive Kohlenhydrate, aktives Insulin usw. sehen. Dazu können sie die **NSClient App** auf ihrem Smartphone verwenden. Settings must be the same in AAPS and NSClient app.
- Alarme auf den Smartphones der Eltern sind durch Einsatz **xDrip+ im Follower Modus** möglich.
- Remote control of AAPS using [SMS Commands](../Children/SMS-Commands.md) secured by two-factor authentication.
- Fernsteuerung über die NSClient-App wird nur empfohlen, wenn Deine Synchronisation gut funktioniert (d.h. Du siehst keine unerwünschten Datenänderungen wie z.B. Selbstmodifikation von TT, TBR usw.) siehe [Versionshinweise für Version 2. .1.1](Releasenotes-important-hints-2-8-1-1) für weitere Details.

## Tools und Apps für die Fernüberwachung

- [Nightscout](https://nightscout.github.io/) im Webbrowser (vor allem Datenanzeige)
- Die NSClient-App ist eine reduzierte AAPS-Version mit der du jemandem folgen, Profilwechsel vornehmen, TT setzen und Kohlenhydrate eingeben kannst. Die beiden Apps NSClient & NSClient2 können [direkt heruntergeladen](https://github.com/nightscout/AndroidAPS/releases/) werden. Einziger Unterschied ist der App-Name. Dadurch kannst du die App zwei Mal auf dem gleichen Smartphone installieren, wenn du zwei verschiedenen Personen bzw. Nightscout-Instanzen folgen willst.
- Dexcom Follow App zusammen mit der originalen Dexcom App (nur BZ-Werte)
- [xDrip+](../Configuration/xdrip.md) im Follower Modus (vor allem Datenanzeige und **Alarme**)
- [Sugarmate](https://sugarmate.io/) oder [Spike](https://spike-app.com/) für iOS (vor allem BZ-Werte und **Alarme**)

## Smartwatch options

A smartwatch can be a very useful tool in helping manage AAPS with kids. A couple of different configurations are possible:

- If NSClient is installed on the parents phone, the [NSClient WearOS app](https://github.com/nightscout/AndroidAPS/releases/) can be installed on a compatible smartwatch connected to the parent's phone. This will show current BG, loop status and allow carb entry, temp targets and profile changes. It will NOT allow bolusing from the WearOS app.
- Alternatively, the [AAPS WearOS app](https://androidaps.readthedocs.io/en/latest/Configuration/Watchfaces.html) can be built and installed on a compatible smartwatch, connected to the kid's phone but worn by the parent. This includes all the functions listed above as well as the ability to bolus insulin. This allows the parent to adminster insulin without needing to remove the kid's phone from however it is kept on them.

## Dinge, die zu beachten sind

- Die Ermittlung der richtigen [Faktoren](FAQ-how-to-begin) (Basalrate, Korrekturfaktoren, Insulinwirkdauer...) ist bei Kindern schwierig, gerade wenn auch noch Wachstumshormone ins Spiel kommen.
- Settings must be the same in AAPS and NSClient app.
- Diese entsteht zum einen durch die Zeit, die für Up- und Download benötigt wird, zum anderen lädt das AAPS-Haupttelefon nur Daten hoch, wenn es eine Aktivität des Closed Loop auf dem Smartphone gab.
- Nimm Dir also Zeit, um diese richtig einzustellen und teste sie im Alltag mit Deinem Kind neben Dir bevor Du mit der Fernüberwachung und der Fernbehandlung startest. Schulferien könnten dafür eine gute Zeit sein.
- Wie sieht Dein Notfallplan aus, wenn die Fernsteuerung nicht funktioniert (z.B.  wegen Netzwerkproblemen)?
- Fernüberwachung und -behandlung können in Kindergarten und Grundschule wirklich hilfreich sein. Aber stelle sicher, dass die Lehrer und Erzieher über den Behandlungsplan Deines Kindes Bescheid wissen. Examples for such care plans can be found in the [files section of AAPS users](https://www.facebook.com/groups/AndroidAPSUsers/files/) on Facebook.
- It is important to keep the kid's phone in range of their pump and CGM at all times. This can be challenging especially with very small children. Many solutions exist, a popular option is an [SPI Belt](https://spibelt.com/collections/kids-belts)
