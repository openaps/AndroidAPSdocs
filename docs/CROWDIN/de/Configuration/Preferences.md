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

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored indepentandlty of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Wenn Du anfängst den Loop zu benutzen, **wird empfohlen das Maximale Basal-IOB für eine bestimmte Zeit auf 0 zu setzen**, während du dich mit dem System vertraut machst. Das verhindert, dass AAPS dir generell zusätzliches Basal-Insulin verabreicht. Während dieser Zeit wird AAPS trotzdem in der Lage sein, dein Basalinsulin abzuschalten, um Hypoglykämien zu verhinden.

Das ist ein wichtiger Schritt, um:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Wenn du dich damit gut fühlst, kannst du dem System erlauben, dir zusätzliches Basalinsulin zu geben, indem du den Wert Max-Basal IOB erhöhst. Die empfohlene Richtlinie für diesen Wert ist, die **höchste Basalrate** in deinem Profil zu verwenden und diese **mit 3 zu multiplizieren**. Wenn zum Beispiel die höchste Basalrate in deinem Profil 0.5IE/h war, könntest du das mit 3 multiplizieren, um einen Wert von 1,5IE/h zu erhalten.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Bemerkung: zur Sicherheit ist es nicht möglich, den Wert Max-Basal IOB bei höher als 7 IE festzulegen.*

## Resorptions-Einstellungen

Wenn du AMA Autosense eingestellt hast, dann wird dir hier ermöglicht, die maximale Zeit für die Resorption des Essens einzustellen und wie oft du eine Aktualisierung von Autosense möchtest. Wenn du oft Mahlzeiten mit viel Fett oder Eiweiss zu dir nimmst, wirst du die Resorptionszeit für das Essen erhöhen müssen.

## Pumpen-Einstellungen

Die Optionen hier hängen davon ab, welchen Pumpentreiber du im Config-Generator ausgewählt hast. Pair and set your pump up according to the [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) or [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) or [Accu Chek Combo Pump](../Configuration/Accu-Chek-Combo-Pump.md) instructions where relevant. Stelle sicher, dass du die virtuelle Pumpe im Config-Generator ausgewählt hast, wenn du AndroidAPS als Open Loop betreibst.

## Nightscout-Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem. 
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip. 
* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+)

## SMS-Kommunikator

Diese Einstellung erlaubt eine Fernsteuerung der App, indem Anweisungen an das Smartphone des Patienten gesendet werden, die die App ausführt (z.B. Loop oder Bolus anhalten). Further information is described in [SMS Commands](../Usage/SMS-Commands.md) but it will only display in Preferences if you have selected this option in the Config Builder.

## Andere

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Erweiterte Einstellungen ``muss noch erweitert werden

* OpenAPS MA
* Always use short average delta instead of... Enabling this setting is useful when you are using data from unfiltered sources such as xDrip+, as opposed to filtered sources such as an official Dexcom Receiver. Filtered data appears to be smooth, whereas unfiltered data can appear to be jumpy. This unfiltered data could cause AndroidAPS to apply Temporary Basal Rate changes more frequently than are really needed, as the OpenAPS algorithm reacts to the jumpy data. With this setting enabled, the OpenAPS algorithm will use the Short Average Delta (the average change in blood glucose over the past 15 minutes) instead of the last blood glucose reading received. This effectively has a "smoothing" effect on the data and attempts to compensate for any jumpy readings. Users of Abbot Freestyle Libre sensors collecting their glucose data via devices such as LimiTTers may find this setting provides better results with AAPS.

For further tips regarding data smoothing when using xDrip+ as the data source, see [Smoothing Blood Glucose Data in xDrip+](../Usage/Smoothing-blood-glucose-data-in-xDrip.md).

* OpenAPS preferences.json - before changing any of these settings, please view the descriptions of the safety values used and why in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).
* 'Ignore profile switch events' will not send your current AndroidAPS profile to the pump. It is encouraged not to select this unless you are testing code, as for safety sending profile switch events to the pump's basal profile 1 means than should AndroidAPS stop working or loose connection with the pump then your pump will revert to the same profile as default rather than you having to manually enter it into the pump. For more information on profiles see [Profiles](/docs/Usage/Profiles).
* 'BT Watchdog' select this option if you keep loosing connection with your pump. When the pump looses connection it will toggle bluetooth off and on for you to improve the connection.

## Wear-Einstellungen

For more information on the wear watchface settings see [Watchfaces](../Configuration/Watchfaces.md).