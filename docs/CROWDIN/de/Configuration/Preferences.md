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

* Option, den [Superbolus](../Getting-Started/Screenshots#section-a) im Bolus Kalkulator auswählen zu können.

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

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of range

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Es wird empfohlen, hier etwas vernünftiges einzugeben. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Dieser Wert berücksichtigt kein Bolus-IOB, nur Basal.
* Dieser Wert wird unabhängig von deiner normalen Basalrate berechnet und überwacht. Es wird lediglich das zusätzliche Basalinsulin zu der normalen Basalrate berücksichtigt.
* Dieser Wert wird in Insulineinheiten gemessen (IE).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Zeit zu haben, sich auf sichere Art mit der Verwendung des AAPS Systems vertraut zu machen und zu überwachen, wie es funktioniert.
* Die Gelegenheit zu nutzen, dein Basalratenprofil und die Insulinsensibilitäts-Faktoren (ISF) anzupassen.
* zu sehen, wie AAPS die Basalrate einschränkt, um Hypoglykämien zu verhindern.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Du kannst konservativ mit diesem Wert starten und ihn im Laufe der Zeit langsam erhöhen. 
* Das sind aber nur Richtlinien; jeder Körper ist anders. Es kann durchaus sein, dass du mehr oder weniger benötigst als hier empfohlen wurde, aber beginne dennoch konservativ und passe es langsam an.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Resorptions-Einstellungen

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pumpen-Einstellungen

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [DanaR Insulinpumpe](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulinpumpe](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight Insulinpumpe](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pumpe](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

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

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Andere

* Hier kannst du Voreinstellungen für die verschiedenen temporären Ziele angeben ("bald Essen" und "Aktivitäten"). Wenn du bei "Temporäres Ziel" im Careportal zum Beispiel "Bald essen" auswählst, werden die hier eingegebenen Werte automatisch in die entsprechenden Eingabefelder eingetragen. Weitere Informationen zur Benutzung der temporären Ziele findest du in [OpenAPS Features](../Usage/Open-APS-features.md). 
* Du kannst Werte für die Befüllung setzen - diese werden an die Pumpe weitergegeben und das zur Befüllung verwendete Insulin wird vom Füllstand des Reservoir abgezogen, ohne in IOB Berechnungen berücksichtigt zu werden. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwenden sollst.
* Du kannst die Werte zur Anzeige der Zielbereiche auf dem Hauptbildschirm und der Smartwatch eingeben. Beachte bitte, dass dies nur die Anzeige in der Grafik betrifft und nicht die Ziel- oder Berechnungswerte beeinflusst.
* "Kurze Tab-Überschriften" ermöglicht es dir, mehr Tab-Reiter auf dem Bildschirm zu sehen. Zum Beispiel wird aus 'Open APS' der Titel 'OAPS' und 'Careportal' wird zu 'CP'.
* Bei "Lokale Alarme" kannst du entscheiden, ob du eine Warnung erhalten möchtest, wenn einige Zeit keine Glukose-Daten empfangen wurden (Veraltete Daten) oder wenn die Pumpe nicht erreichbar ist. Wenn du häufig Alarme erhältst, dass die Pumpe nicht erreichbar ist, dann aktiviere BT-Watchdog in den erweiterten Einstellungen.

## Datenübermittlung

* 'Fabric Upload' sendet Fehlermeldungen und Funktionen-Nutzungsdaten an die Entwickler.