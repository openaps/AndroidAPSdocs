# FAQ für Looper

Gewusst wie: Um FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.html)

## Allgemein

### Wie beginnen?

Grundvoraussetzung des Loop ist, dass die Basalraten und Kohlenhydratfaktoren stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. Mit [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kannst du anhand der zahlreichen vorhandenen Therapiedaten überprüfen, ob und wie Basalraten, IC und ISF angepasst werden müssen. Oder du machst einen [altmodischen Basalratentest](http://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

* Wenn du willst, dass deine Einstellungen nicht einfach verändert werden können, dann kannst du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben, Wenn du das nächste Mal zu den Einstellungen gehst, musst du das Passwort eingeben um Änderungen vorzunehmen. Wenn du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

* Wenn du vorhast die Android Wear App zu benutzen, um einen Bolus zu verabreichen oder Einstellungen zu verändern, musst du sicherstellen, dass Benachrichtigungen von AnroidAPS nicht blockiert sind. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

* Wenn du deine Pumpe zum Duschen/Baden/Schwimmen/Sporttreiben etc. abnimmst, dann halte den hellblauen Button mit "Open Loop / Closed Loop" gedrückt, der auf dem Startbildschirm oben links zu finden ist. Wähle dann "Trenne Pumpe für..." aus, je nachdem wie lange du die Pumpe ablegen willst. Damit wird die aktuelle Basalrate für diesen Zeitraum auf 0 gesetzt. Die minimale Zeitdauer für das Trennen hängt von der minimalen temporären Basalrate deiner Pumpe ab. Wenn du die Pumpe nach kürzerer Zeit wieder verwenden möchtest, musst du über den selben hellblauen Button den Loop "Fortsetzen". Auf diese Weise wird dein IOB korrekt berechnet.

* Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Aus diesem Grund kann es etwas dauern bis Aaps Änderungen empfiehlt, wenn das Cgm nicht kontinuierlich Werte übermittelt.

* Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Was sollte ich für den Notfall immer dabei haben?

### Wie das CGM/FGM gesetzt werden sollte:

## AndroidAPS Einstellungen

### Der APS Algorithmus

#### Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../../images/Screenshot_AMA3h.png) Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Viel mehr ist "dia" ein Parameter welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

### Profil

#### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Dies wird in [diesem Artikel](/www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) gut erklärt. Vergiss nicht, dein ` PROFIL ZU AKTIVIEREN`, nachdem du deinen DIA verändert hast.

## Andere Einstellungen

### Nightscout Einstellungen

### CGM Einstellungen

## Pumpe

### Wo soll ich die Pumpe tragen?

### Batterien

Looping kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem du die Variable PUMP_WARN_BATT_P verwendest. 

Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* only press the buttons on the pump to reload, use AndroidAPS to view all history, battery level and reservoir volume.
* AndroidAPS app may often be closed to save energy or free RAM on some phones. When AndroidAPS is reinitialized at each startup it establishes a Bluetooth connection to the pump, and re-reads the current basal rate and bolus history. This consumes battery. To see if this is happening, go to Preferences > NSClient and enable 'Log app start to NS'. Nightscout will receive an event at every restart of AndroidAPS, which makes it easy to track the issue. To reduce this happening, whitelist AndroidAPS app in the phone battery settings to stop the app power monitor closing it down.
* clean battery terminals with alcohol wipe to ensure no manufacturing wax/grease remains.
* for DanaR/RS pumps the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Either remove and reinsert battery 2-3 times until it does show 100% on screen, or use battery key to briefly short circuit battery before insertion by applying to both terminals for a split second.
* see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.html#battery-type-and-causes-of-short-battery-life) to use for Combo pump

### Changing reservoirs and canulas

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Long press on "Open Loop"/"Closed Loop" on the Home tab of AndroidAAPS and select 'Suspend Loop for 1h'
* Now disconnect the pump, and change the reservoir as per pump instructions.
* Once reconnected to the pump continue the loop by long pressing on 'Suspended (X m)'.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Hygiene

### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für so kurze Zeiträume brauchst du die Pumpe meistens nicht. Aber du solltest es in AAPS eingeben, damit die IOB-Berechnung korrekt bleibt. Drücke auf das hellblaue "Open Loop / Closed Loop" Feld oben links auf dem Startbildschirm von AAPS. Wähle "Trenne Pumpe für 1h". Wenn du die Pumpe nach der Dusche wieder anschließt musst du in dem selben Feld "Fortsetzen" auswählen.

## Arbeit

## Freizeitaktivitäten

## Sport

## Sex

## Ausgehen

## Alkohol

## Schlafen

## Reisen

## Krankenhausaufenthalt

## Termin mit deinem betreuenden Arzt (Internisten)