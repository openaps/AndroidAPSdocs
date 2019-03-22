# Einstellungen

## Passwort für die Einstellungen

Dies erlaubt dir, ein Passwort zu vergeben, um zu vermeiden, aus Versehen oder ohne Berechtigung Änderungen in den Einstellungen vorzunehmen. Wenn du hier ein Passwort festgelegt hast, dann musst du es eingeben, wenn du auf die Einstellungen zugreifen willst. Um die Passwort Option zu entfernen, lösche den Text in diesem Feld.

## Alter des Patienten

Es gibt Sicherheitsgrenzen aufgrund des Alters, die hier eingestellt werden können. Wenn Du diese Grenzen erreichst (wie maximaler Bolus), wird es Zeit eine Stufe aufzusteigen. Es ist eine schlechte Idee, ein höheres Alter anzugeben als das tatsächliche Alter, weil es zu einer Überdosierung führen kann, wenn ein falscher Wert im Insulin Dialog eingegeben wird (z. B. beim Auslassen des Dezimalpunktes).

## Allgemein

* Wähle hier deine Sprache aus. Wenn deine Sprache nicht verfügbar ist oder nicht alle Worte übersetzt sind, dann mach gerne einige Vorschläge auf [Crowdin](https://crowdin.com/project/androidaps) oder frage im [Gitter Chatroom](https://gitter.im/MilosKozak/AndroidAPS).
* QuickWizard-Einstellungen erlauben es dir, einen Schnellzugriffsbutton für übliche Snacks oder Mahlzeiten hinzuzufügen. Gib die Details der Kohlenhydrate ein und wenn du diesen QuickWizard-Button auf dem Homescreen drückst, wird der Bolus für diese Kohlenhydrate auf Basis der aktuellen Werte berechnet (wobei der Zuckerwert und das Insulin On Board verwendet werden, wenn Du es bei er Einstellung des Buttons eingibst).

## Careportal

"Entered by" ist der Text, der in Deinem Nightscout Careportal im Feld "entered by" angezeigt wird. Nimm einen Text, der für dich etwas bedeutet. Das kann der Name der App sein, der Name der Person oder der Name des Smartphones (z. B. wenn du AndroidAPS als NS Client auf einem Smartphone verwendest, das nicht dem Patienten gehört oder wenn du zwischen den Smartphone Eigentümern unterscheiden willst).

## Sicherheitseinstellungen für die Behandlung

### Maximal erlaubert Bolus [U]

Das ist die maximale Menge an Bolus Insulin, die AAPS abgeben darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst. Diese Einschränkung gilt ebenfalls für die Ergebnisse des Bolus-Rechners.

### Maximal erlaubte Kohlenhydrate [g]

Dies ist die maximale Menge an Kohlenhydraten, für die der AAPS Bolus-Rechner eine Dosis berechnen darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhinden. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

## Loop

Du kannst hier zwischen Open Loop und Closed Loop wechseln. Open Loop bedeutet, dass TBR Vorschläge gemacht werden, die auf deinen Daten basieren und die als Benachrichtigung erscheinen. Du musst manuell bestätigen, dass du sie akzeptierst und dass sie an die Pumpe gesendet werden dürfen. Closed Loop bedeutet, dass die TBR Vorschläge automatisch zur Pumpe gesendet werden, ohne dass du benachrichtigt wirst oder sie bestätigen musst. Auf dem Hauptbildschirm wird links oben angezeigt, ob du Open oder Closed Loop laufen hast. Wenn du diesen Button lange drückst, kannst du zwischen den beiden umschalten.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) erlaubt es dem System schneller zu reagieren, nachdem ein Mahlzeitenbolus eingegeben wurde, falls du die Kohlenhydrate korrekt eingibst. Schalte das in den Einstellungen ein, um die Sicherheitseinstellungen hier zu sehen. Du musst Objective 7 erreicht haben, um dieses Feature zu nutzen. Du kannst mehr über diese Einstellung lesen bei [Autosens in den OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximale IE/h, die als TBR gesetzt werden können

Diese Einstellung existiert als Sicherheitsgrenze, um zu verhindern, dass AAPS jemals eine gefährlich hohe Basalrate setzt. Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, die **höchste Basal Rate** in deinem Profil zu verwenden und **diese mit 4 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.

### Maximales Basal-IOB, das OpenAPS abgeben darf [U]

Menge an zusätzlichem Basalinsulin (in Einheiten), das deinem Körper zusätzlich zu deiner normalen Basalrate zugeführt werden darf. Wenn dieser Wert erreicht wird, wird AAPS aufhören, zusätzliches Basalinsulin abzugeben, bis dein Basalinsulin On Board (IOB) wieder unterhalb dieses Wertes liegt.

* Dieser Wert berücksichtigt kein Bolus-IOB, nur Basal.
* Dieser Wert wird unabhängig von deiner normalen Basalrate berechnet und überwacht. Es wird lediglich das zusätzliche Basalinsulin zu der normalen Basalrate berücksichtigt.
* Dieser Wert wird in Insulineinheiten gemessen (IE).

Wenn Du anfängst den Loop zu benutzen, **wird empfohlen das Maximale Basal-IOB für eine bestimmte Zeit auf 0 zu setzen**, während du dich mit dem System vertraut machst. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhinden.

Das ist ein wichtiger Schritt, um:

* Zeit zu haben, sich auf sichere Art mit der Verwendung von AAPS vertraut zu machen und zu überwachen, wie es funktioniert.
* die Gelegenheit zu nutzen, dein Basalratenprofil und die Insulinsensibilitäts-Faktoren (ISF) zu perfektionieren.
* zu sehen, wie AAPS die Basalrate einschränkt, um Hypoglykämien zu verhindern.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. Die empfohlene Richtlinie für diesen Wert ist, die **höchste Basalrate** in deinem Profil zu verwenden und diese **mit 3 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, könntest du das mit 3 multiplizieren, um einen Wert von 1,5IE/h zu erhalten.

* Du kannst konservativ mit diesem Wert starten und ihn im Laufe der Zeit langsam erhöhen. 
* Das sind aber nur Richtlinien; jeder Körper ist anders. Es kann durchaus sein, dass du mehr oder weniger benötigst als hier empfohlen wurde, aber beginne dennoch konservativ und passe es langsam an.

*Bemerkung: zur Sicherheit ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.*

## Resorptions-Einstellungen

Wenn du AMA Autosense eingestellt hast, dann wird dir hier ermöglicht, die maximale Zeit für die Resorption des Essens einzustellen und wie oft du eine Aktualisierung von Autosense möchtest. Wenn du oft Mahlzeiten mit viel Fett oder Eiweiss zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

## Pumpen-Einstellungen

Die Optionen hier hängen davon ab, welchen Pumpentreiber du im Config-Generator ausgewählt hast. Kopple deine Pumpe und richte sie gegebenenfalls entsprechend den Anweisungen für [DanaR Insulin Pumpe](../Configuration/DanaR-Insulin-Pump.md), [DanaRS Insulin Pumpe](../Configuration/DanaRS-Insulin-Pump.md) oder [Accu Chek Combo Pumpe](../Configuration/Accu-Chek-Combo-Pump.md) ein. Stelle sicher, dass du die virtuelle Pumpe im Config-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

## Nightscout-Client

* Gib hier deine 'nightscout URL' ein (https://deinewebseite.herokuapp.com oder https://deinewebseite.azurewebsites.net), und das 'API secret' (ein Passwort mit 12 Zeichen, das in den heroku oder azure Variablen festgelegt wurde). Das versetzt AndroidAPS in die Lage, Daten von Nightscout zu lesen und zu schreiben. Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.
* ''Logge App-Start in Nightscout" fügt den Einträgen des Careportals jedesmal einen Eintrag hinzu, wenn die App gestartet wird. Die App sollte maximal einmal am Tag neu gestartet werden; mehrere Einträge am Tag könnten auf ein Problem hinweisen. 
* "Aktiviere lokale Broadcasts" teilt deine Daten aus dem Careportal mit anderen Apps auf dem Smartphone (z. B. xdrip+). 
* "Alarm-Optionen" ermöglicht es dir festzulegen, welche Nightscout Alarme in der App verwendet werden sollen. Damit die Alarme ausgelöst werden, müssen die Variablen für die Alarme "Urgent High", "High", "Low" und "Urgent Low" in deinen [heroku oder azure Variablen](http://www.nightscout.info/wiki/welcome/website-features#customalarms) festgelegt werden. Sie werden nur dann funktionieren, wenn du über eine aktive Internetverbindung zu Nightscout verfügst und sind für Eltern/Betreuer gedacht. Wenn du die CGM-Quelle hingegen direkt auf dem Smartphone hast, dann solltest du lieber deren Alarme verwenden (z.B. xdrip+)

## SMS-Kommunikator

Diese Einstellung erlaubt eine Fernsteuerung der App, indem Anweisungen an das Smartphone des Patienten gesendet werden, die die App ausführt (z.B. Loop oder Bolus anhalten). Weitere Informationen werden in [SMS-Befehle](../Usage/SMS-Commands.md) beschrieben. SMS-Befehle werden in den Einstellungen aber nur angezeigt, wenn diese Option im Konfigurations-Generator aktiviert wurde.

## Andere

* Hier kannst du Voreinstellungen für die verschiedenen temporären Ziele angeben ("bald Essen" und "Aktivitäten"). Wenn du bei "Temporäres Ziel" im Careportal zum Beispiel "Bald essen" auswählst, werden die hier eingegebenen Werte automatisch in die entsprechenden Eingabefelder eingetragen. Weitere Informationen zur Benutzung der temporären Ziele findest du in [OpenAPS Features](../Usage/Open-APS-features.md). 
* Du kannst Werte für die Befüllung setzen - diese werden an die Pumpe weitergegeben und das zur Befüllung verwendete Insulin wird vom Füllstand des Reservoir abgezogen, ohne in IOB Berechnungen berücksichtigt zu werden. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwenden sollst.
* Du kannst die Werte zur Anzeige der Zielbereiche auf dem Hauptbildschirm und der Smartwatch eingeben. Beachte bitte, dass dies nur die Anzeige in der Grafik betrifft und nicht die Ziel- oder Berechnungswerte beeinflusst.
* "Kurze Tab-Überschriften" ermöglicht es dir, mehr Tab-Reiter auf dem Bildschirm zu sehen. Zum Beispiel wird aus 'Open APS' der Titel 'OAPS' und 'Careportal' wird zu 'CP'.
* Bei "Lokale Alarme" kannst du entscheiden, ob du eine Warnung erhalten möchtest, wenn einige Zeit keine Glukose-Daten empfangen wurden (Veraltete Daten) oder wenn die Pumpe nicht erreichbar ist. Wenn du häufig Alarme erhältst, dass die Pumpe nicht erreichbar ist, dann aktiviere BT-Watchdog in den erweiterten Einstellungen.

## Erweiterte Einstellungen ``muss noch erweitert werden

* OpenAPS MA
* Verwende immer das kurze durchschnittliche Delta statt... Es ist sinnvoll, diese Einstellung zu aktivieren, wenn du ungefilterte Daten aus Quellen wie xDrip+ verwendest, im Gegensatz zu vorverarbeiteten Daten wie vom offiziellen Dexcom Empfänger. Gefilterte Daten scheinen gleichmässiger zu sein, wohingegen ungefilterte Daten sprunghaft sein können. Diese ungefilterten Daten können AndroidAPS dazu bringen, häufiger Änderungen in der Temporären Basalrate vorzuschlagen, als eigentlich erforderlich sind, da der OpenAPS Algorithmus auf die sprunghaften Daten reagiert. Wenn diese Option aktiviert ist, verwendet der OpenAPS Algorithmus das kurze durchschnittliche Delta (also den Mittelwert der letzten 15 Minuten), anstatt des letzten Glukose-Wertes, der empfangen wurde. Das bewirkt einen "Glättungseffekt" auf die Daten und ist ein Versuch, empfangene sprunghafte Werte zu kompensieren. Benutzer der Freestyle Libre Sensoren von Abbot, die ihre Daten mit Geräten wie LimiTTern empfangen, erzielen mit dieser Einstellung möglicherweise bessere Ergebnisse mit AAPS.

Weitere Hinweise zum Thema Datenglättung bei Verwendung von xdrip+ als Datenquelle sind hier zu finden: [Zuckerwerte glätten in xDrip+](../Usage/Smoothing-blood-glucose-data-in-xDrip.md).

* OpenAPS preferences.json - bevor du diese Einstellungen änderst, lies dir bitte die Beschreibung der verwendeten Sicherheitsvariablen und wieso sie verwendet werden unter [OpenAPS Dokumentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html) durch.
* "Ignoriere Profilwechsel" sorgt dafür, dass das aktuelle AndroidAPS Profil nicht an die Pumpe gesendet wird. Es wird empfohlen, diese Option nicht zu aktivieren, außer du testest Code. Aus Sicherheitsgründen werden die Profil-Änderungen auf das Basal Profil 1 der Pumpe übertragen, was bedeutet, dass bei einem Ausfall von AndroidAPS oder dem Verlust einer Verbindung zwischen AndroidAPS und der Pumpe die Pumpe das aktuelle Profil weiter verwendet. Ansonsten müsstest du das Profil manuell in der Pumpe eingeben. Weitere Informationen zu Profilen findest du unter [Pofile](/docs/Usage/Profiles).
* "BT Watchdog" - Diese Option sollte aktiviert werden, wenn du immer wieder die Verbindung zur Pumpe verlierst. Wenn die Verbindung zur Pumpe verloren geht, wird Bluetooth automatisch aus und wieder an geschaltet, um die Verbindung neu aufzubauen.

## Wear-Einstellungen

Weitere Informationen zu den Einstellungen der Wear-Zifferblätter sind unter [Zifferblaetter](../Configuration/Watchfaces.md) zu finden.