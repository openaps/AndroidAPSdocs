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

### Status lights

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Sicherheitseinstellungen für die Behandlung

### Max allowed bolus [U]

Das ist die maximale Menge an Bolus Insulin, die AAPS abgeben darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Abgabemenge von Bolus Insulin entspricht, das Du für eine Mahlzeitenkorrektur brauchst. Diese Einschränkung gilt ebenfalls für die Ergebnisse des Bolus-Rechners.

### Max allowed carbs [g]

Dies ist die maximale Menge an Kohlenhydraten, für die der AAPS Bolus-Rechner eine Dosis berechnen darf. Diese Einstellung ist eine Sicherheitsgrenze, um die Abgabe eines massiven Bolus aufgrund einer versehentlichen Eingabe oder eines Benutzerfehlers zu verhindern. Es wird empfohlen, das auf eine vernünftige Menge zu setzen, die ungefähr der maximalen Menge an Kohlenhydraten entspricht, die du vermutlich jemals für eine Mahlzeit brauchen wirst.

## Loop

Du kannst hier zwischen Open Loop und Closed Loop wechseln. Open Loop bedeutet, dass TBR Vorschläge gemacht werden, die auf deinen Daten basieren und die als Benachrichtigung erscheinen. Du musst manuell bestätigen, dass du sie akzeptierst und dass sie an die Pumpe gesendet werden dürfen. Closed Loop bedeutet, dass die TBR Vorschläge automatisch zur Pumpe gesendet werden, ohne dass du benachrichtigt wirst oder sie bestätigen musst. Auf dem Hauptbildschirm wird links oben angezeigt, ob du Open oder Closed Loop laufen hast. Wenn du diesen Button lange drückst, kannst du zwischen den beiden umschalten.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) erlaubt es dem System schneller zu reagieren, nachdem ein Mahlzeitenbolus eingegeben wurde, falls du die Kohlenhydrate korrekt eingibst. Schalte das in den Einstellungen ein, um die Sicherheitseinstellungen hier zu sehen. Du musst [ Ziel (objective) 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) erreicht haben, um dieses Feature zu nutzen. Du kannst mehr über diese Einstellung lesen bei [Autosens in den OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

Diese Einstellung existiert als Sicherheitsgrenze, um zu verhindern, dass AAPS jemals eine gefährlich hohe Basalrate setzt. Der Wert wird in IE pro Stunde angegeben (IE/h). Es wird empfohlen, hier etwas vernünftiges einzugeben. Eine gute Empfehlung ist, die **höchste Basal Rate** in deinem Profil zu verwenden und **diese mit 4 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, kannst du das mit 4 multiplizieren, um einen Wert von 2IE/h zu erhalten.

### Maximum basal IOB OpenAPS can deliver [U]

Menge an zusätzlichem Basalinsulin (in Einheiten), das deinem Körper zusätzlich zu deiner normalen Basalrate zugeführt werden darf. Wenn dieser Wert erreicht wird, wird AAPS aufhören, zusätzliches Basalinsulin abzugeben, bis dein Basalinsulin On Board (IOB) wieder unterhalb dieses Wertes liegt.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Wenn Du anfängst den Loop zu benutzen, **wird empfohlen das Maximale Basal-IOB für eine bestimmte Zeit auf 0 zu setzen**, während du dich mit dem System vertraut machst. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhindern.

Das ist ein wichtiger Schritt, um:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. Die empfohlene Richtlinie für diesen Wert ist, die **höchste Basalrate** in deinem Profil zu verwenden und diese **mit 3 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, könntest du das mit 3 multiplizieren, um einen Wert von 1,5IE/h zu erhalten.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Bemerkung: zur Sicherheit ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.*

## Resorptions-Einstellungen

Wenn du AMA Autosense eingestellt hast, dann wird dir hier ermöglicht, die maximale Zeit für die Resorption des Essens einzustellen und wie oft du eine Aktualisierung von Autosense möchtest. Wenn du oft Mahlzeiten mit viel Fett oder Eiweiß zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

## Pumpen-Einstellungen

Die Optionen hier hängen davon ab, welchen Pumpentreiber du im Config-Generator ausgewählt hast. Verbinde Deine Pumpe und richte sie entsprechend der pumpenspezifischen Beschreibung ein:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Stelle sicher, dass du die virtuelle Pumpe im Config-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

## Nightscout-Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## SMS-Kommunikator

Diese Einstellung erlaubt eine Fernsteuerung der App, indem Anweisungen an das Smartphone des Patienten gesendet werden, die die App ausführt (z.B. Loop oder Bolus anhalten). Weitere Informationen werden in [SMS-Befehle](../Children/SMS-Commands.rst) beschrieben. SMS-Kommandos werden aber nur in den Einstellungen angezeigt, wenn diese Option im Konfigurations-Generator ausgewählt wurde.

## Andere

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Datenübermittlung

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.