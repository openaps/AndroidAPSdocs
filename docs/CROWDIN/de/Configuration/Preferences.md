# Einstellungen

Öffne die Einstellungen durch einen Klick auf das 3-Punkte-Menü rechts oben auf dem Startbildschirm:

![Wie man die Einstellungen öffnet](../images/PreferencesOpen.png)

## Passwort für die Einstellungen

Dies erlaubt dir, ein Passwort zu vergeben, um zu vermeiden, aus Versehen oder ohne Berechtigung Änderungen in den Einstellungen vorzunehmen. Wenn du hier ein Passwort festgelegt hast, dann musst du es eingeben, wenn du auf die Einstellungen zugreifen willst. Um die Passwort Option zu entfernen, lösche den Text in diesem Feld.

## Alter des Patienten

Es gibt Sicherheitsgrenzen aufgrund des Alters, die hier eingestellt werden können. Wenn Du diese Grenzen erreichst (wie maximaler Bolus), wird es Zeit eine Stufe aufzusteigen. Es ist eine schlechte Idee, ein höheres Alter anzugeben als das tatsächliche Alter, weil es zu einer Überdosierung führen kann, wenn ein falscher Wert im Insulin Dialog eingegeben wird (z. B. beim Auslassen des Dezimalpunktes). Wenn Du die Werte für diese fest codierten Sicherheitsgrenzen wissen möchtest, scrolle zu der Algorithmenfunktion, die Du auf [dieser Seite ](../Usage/Open-APS-features.md) verwendest.

## Allgemein

* Wähle hier deine Sprache aus. Wenn deine Sprache nicht verfügbar ist oder nicht alle Worte übersetzt sind, dann mach gerne einige Vorschläge auf [Crowdin](https://crowdin.com/project/androidaps) oder frage im [Gitter Chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Übersicht

* Bildschirm aktiv lassen ist hilfreich, wenn Du AAPS präsentieren willst. Dies wird ziemlich viel Energie verbrauchen, daher ist es ratsam, Dein Telefon an ein Ladekabel anzuschließen.
* Unter Schaltflächen kannst Du festlegen, welche Buttons auf dem Startbildschirm verfügbar sind. Außerdem kannst Du einige Einstellungen für die Dialogfelder, die zu den Buttons gehören, festlegen.
* QuickWizard-Einstellungen erlauben es dir, einen Schnellzugriffsbutton für übliche Snacks oder Mahlzeiten hinzuzufügen. Gib die Details der Kohlenhydrate ein und wenn du diesen QuickWizard-Button auf dem Homescreen drückst, wird der Bolus für diese Kohlenhydrate auf Basis der aktuellen Werte berechnet (wobei der Zuckerwert und das Insulin On Board verwendet werden, wenn Du es bei er Einstellung des Buttons eingibst).

### Erweiterte Einstellungen

![Einstellungen-Übersicht-Erweiterte Einstellungen](../images/PreferencesOverviewAdvanced_V2_5.png)

* Systemweite Einstellung, dass nur ein Teil des im Bolus Kalkulator berechneten Insulins abgegeben wird. Nur der eingestellte prozentuale Anteil (muss zwischen 10 und 100 liegen) wird abgegeben. Der Prozentsatz wird auch im Bolus Kalkulator angezeigt.
    
    ![Bolus-Rechner 80%](../images/BolusWizardPartDelivery.png)

* Option, den [Superbolus](../Getting-Started/Screenshots#section-h) im Bolus Kalkulator auswählen zu können.

### Statusanzeige

* Die Statusanzeige gibt eine visuelle Warnung bei niedrigem Reservoir- und Akkustand sowie überfälligem Katheterwechsel. Die erweiterte Version zeigt die abgelaufene Zeit / Batteriestand in % an.
    
    ![Statusanzeige - Bildschirmdetails](../images/StatusLights_V2_5.png)
    
    Die Einstellungen für die Status Lights müssen in den Nightscout-Einstellungen vorgenommen werden. Setze die folgenden Variablen:
    
    * Kanülenalter: CAGE_WARN und CAGE_URGENT (Standard 48 und 72 Stunden)
    * Insulinalter (Reservoir): IAGE_WARN und IAGE_URGENT (Standard 72 und 96 Stunden)
    * Sensoralter: SAGE_WARN und SAGE_URGENT (Standard 164 und 166 Stunden)
    * Batteriestand: BAGE_WARN und BAGE_URGENT (Standard 240 und 360 Stunden)

* Warnschwelle und kritische Warnschwelle für den Reservoirstand.

* Warnschwelle und kritische Warnschwelle für den Batterieladestand.

## Sicherheitseinstellungen für die Behandlung

### Maximal erlaubter Bolus [IE]

Das ist die maximale Menge an Bolus Insulin, die AAPS abgeben darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst. Diese Einschränkung gilt ebenfalls für die Ergebnisse des Bolus-Rechners.

### Maximal erlaubte Kohlenhydrate [g]

Dies ist die maximale Menge an Kohlenhydraten, für die der AAPS Bolus-Rechner eine Dosis berechnen darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

## Loop

Du kannst hier zwischen Open Loop und Closed Loop wechseln.

**Open Loop** bedeutet, dass TBR Vorschläge gemacht werden, die auf deinen Daten basieren und die als Benachrichtigung erscheinen. Du musst manuell bestätigen, dass du sie akzeptierst und dass sie an die Pumpe gesendet werden dürfen.

**Closed Loop** bedeutet, dass die TBR Vorschläge automatisch zur Pumpe gesendet werden, ohne dass du benachrichtigt wirst oder sie bestätigen musst.

Auf dem Hauptbildschirm wird links oben angezeigt, ob du Open oder Closed Loop laufen hast. Wenn du diesen Button lange drückst, kannst du zwischen den beiden umschalten.

### Minimaler Wert zur Anfrage einer Änderung

Im Open Loop erhälst Du jedes Mal eine Benachrichtigung, wenn AAPS empfiehlt, die Basalrate anzupassen. Um die Anzahl der Benachrichtigungen zu reduzieren, kannst Du entweder einen breiteren BZ-Zielbereich verwenden oder den Prozentsatz des minimalen Werts zur Anfrage einer Änderung erhöhen. Diese definiert, wie hoch die relative Änderung sein muss, damit eine Benachrichtigung erscheint.

![Minimaler Wert zur Anfrage einer Änderung](../images/MinRequestChange.png)

Hinweis: Im Closed Loop wird ein Zielwert statt einem Zielbereich empfohlen (also z.B. 100 mg/dl statt 90 - 130 mg/dl bzw. 5,5 mmol statt 5,0 - 7,0 mmol).

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) erlaubt es dem System schneller zu reagieren, nachdem ein Mahlzeitenbolus eingegeben wurde, falls du die Kohlenhydrate korrekt eingibst. Schalte das in den Einstellungen ein, um die Sicherheitseinstellungen hier zu sehen. Du musst [ Ziel (objective) 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) erreicht haben, um dieses Feature zu nutzen. Du kannst mehr über diese Einstellung lesen bei [Autosens in den OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximale IE/h, die als TBR gesetzt werden können

Diese Einstellung existiert als Sicherheitsgrenze, um zu verhindern, dass AAPS jemals eine gefährlich hohe Basalrate setzt. Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, die **höchste Basal Rate** in deinem Profil zu verwenden und **diese mit 4 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.

### Maximales Basal-IOB, das OpenAPS abgeben darf [U]

Menge an zusätzlichem Basalinsulin (in Einheiten), das deinem Körper zusätzlich zu deiner normalen Basalrate zugeführt werden darf. Wenn dieser Wert erreicht wird, wird AAPS aufhören, zusätzliches Basalinsulin abzugeben, bis dein Basalinsulin On Board (IOB) wieder unterhalb dieses Wertes liegt.

* Dieser Wert berücksichtigt kein Bolus-IOB, nur Basal.
* Dieser Wert wird unabhängig von deiner normalen Basalrate berechnet und überwacht. Es wird lediglich das zusätzliche Basalinsulin zu der normalen Basalrate berücksichtigt.
* Dieser Wert wird in Insulineinheiten gemessen (IE).

Wenn Du anfängst den Loop zu benutzen, **wird empfohlen das Maximale Basal-IOB für eine bestimmte Zeit auf 0 zu setzen**, während du dich mit dem System vertraut machst. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhinden.

Das ist ein wichtiger Schritt, um:

* Zeit zu haben, sich auf sichere Art mit der Verwendung des AAPS Systems vertraut zu machen und zu überwachen, wie es funktioniert.
* Die Gelegenheit zu nutzen, dein Basalratenprofil und die Insulinsensibilitäts-Faktoren (ISF) anzupassen.
* zu sehen, wie AAPS die Basalrate einschränkt, um Hypoglykämien zu verhindern.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. Die empfohlene Richtlinie für diesen Wert ist, die **höchste Basalrate** in deinem Profil zu verwenden und diese **mit 3 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, könntest du das mit 3 multiplizieren, um einen Wert von 1,5IE/h zu erhalten.

* Du kannst konservativ mit diesem Wert starten und ihn im Laufe der Zeit langsam erhöhen. 
* Das sind aber nur Richtlinien; jeder Körper ist anders. Es kann durchaus sein, dass du mehr oder weniger benötigst als hier empfohlen wurde, aber beginne dennoch konservativ und passe es langsam an.

*Hinweis: Aus Sicherheitsgründen ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.*

## Resorptions-Einstellungen

Wenn du AMA Autosense eingestellt hast, dann wird dir hier ermöglicht, die maximale Zeit für die Resorption des Essens einzustellen und wie oft du eine Aktualisierung von Autosense möchtest. Wenn du oft Mahlzeiten mit viel Fett oder Eiweiss zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

## Pumpen-Einstellungen

Die Optionen hier hängen davon ab, welchen Pumpentreiber du im Config-Generator ausgewählt hast. Kopple Deine Pumpe und richte sie entsprechend der pumpenspezifischen Beschreibung ein:

* [DanaR Insulinpumpe](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulinpumpe](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight Insulinpumpe](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pumpe](..//Configuration/MedtronicPump.md)

Stelle sicher, dass du die virtuelle Pumpe im Config-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

## Nightscout-Client

* Gib hier Deine 'nightscout URL' ein (https://deinewebseite.herokuapp.com oder https://deinewebseite.azurewebsites.net), und das 'API secret' (ein Passwort mit 12 Zeichen, das in den Heroku oder Azure Variablen festgelegt wurde). Das versetzt AndroidAPS in die Lage, Daten von Nightscout zu lesen und zu schreiben. Überprüfe die Eingaben auf Tippfehler, wenn du bei Ziel 1 hängen bleibst.
* **Stelle sicher, dass die URL NICHT mit /api/v1/ endet.**
    
    ![NSClient URL](../images/NSClientURL.png)

* ''Logge App-Start in Nightscout" fügt den Einträgen des Careportals jedes Mal einen Eintrag hinzu, wenn die App gestartet wird. Die App sollte maximal einmal am Tag neu gestartet werden. Mehrere Einträge am Tag könnten ein Hinweis auf ein Problem sein.

* "Alarm-Optionen" ermöglicht es dir festzulegen, welche Nightscout Alarme in der App verwendet werden sollen. Damit die Alarme ausgelöst werden, müssen die Variablen für die Alarme "Urgent High", "High", "Low" und "Urgent Low" in deinen [Heroku oder Azure Variablen](http://www.nightscout.info/wiki/welcome/website-features#customalarms) festgelegt werden. Sie werden nur dann funktionieren, wenn du über eine aktive Internetverbindung zu Nightscout verfügst und sind für Eltern/Betreuer gedacht. Wenn du die CGM-Quelle hingegen direkt auf dem Smartphone hast, dann solltest du lieber deren Alarme verwenden (z.B. xDrip+).
* "Aktiviere lokale Broadcasts" teilt deine Daten aus dem Careportal mit anderen Apps auf dem Smartphone (z. B. xDrip+).
* 'Verwende absolute statt prozentuale Basalwerte beim Upload zu NightScout.' muss aktiviert werden, wenn Du Autotune einsetzen willst.
    
    **Nicht aktivieren, wenn Du die [Insight Pumpe](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps) nutzt!** Es würde zu falschen Einstellungen der temporären Basalrate in der Insight-Pumpe führen.

## SMS-Kommunikator

Diese Einstellung erlaubt eine Fernsteuerung der App, indem Anweisungen an das Smartphone des Patienten gesendet werden, die die App ausführt (z.B. Loop oder Bolus anhalten). Weitere Informationen werden in [SMS-Befehle](../Children/SMS-Commands.rst) beschrieben. SMS-Kommandos werden aber nur in den Einstellungen angezeigt, wenn diese Option im Konfigurations-Generator ausgewählt wurde.

## Andere

* Hier kannst du Voreinstellungen für die verschiedenen temporären Ziele angeben ("bald Essen" und "Aktivitäten"). Wenn du bei "Temporäres Ziel" im Careportal zum Beispiel "Bald essen" auswählst, werden die hier eingegebenen Werte automatisch in die entsprechenden Eingabefelder eingetragen. Weitere Informationen zur Benutzung der temporären Ziele findest du in [OpenAPS Features](../Usage/Open-APS-features.md). 
* Du kannst Werte für die Befüllung setzen - diese werden an die Pumpe weitergegeben und das zur Befüllung verwendete Insulin wird vom Füllstand des Reservoir abgezogen, ohne in IOB Berechnungen berücksichtigt zu werden. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwenden sollst.
* Du kannst die Werte zur Anzeige der Zielbereiche auf dem Hauptbildschirm und der Smartwatch eingeben. Beachte bitte, dass dies nur die Anzeige in der Grafik betrifft und nicht die Ziel- oder Berechnungswerte beeinflusst.
* "Kurze Tab-Überschriften" ermöglicht es dir, mehr Tab-Reiter auf dem Bildschirm zu sehen. Zum Beispiel wird aus 'Open APS' der Titel 'OAPS' und 'Careportal' wird zu 'CP'.
* Bei "Lokale Alarme" kannst du entscheiden, ob du eine Warnung erhalten möchtest, wenn einige Zeit keine Glukose-Daten empfangen wurden (Veraltete Daten) oder wenn die Pumpe nicht erreichbar ist. Wenn du häufig Alarme erhältst, dass die Pumpe nicht erreichbar ist, dann aktiviere BT-Watchdog in den erweiterten Einstellungen.

## Datenübermittlung

* 'Fabric Upload' sendet Fehlermeldungen und Funktionen-Nutzungsdaten an die Entwickler.