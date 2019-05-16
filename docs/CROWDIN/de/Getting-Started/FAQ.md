# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

## Allgemein

### Kann ich die AndroidAPS Installationsdatei einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AndroidAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../Installing-AndroidAPS/Building-APK.md). Das hat einen einfachen Grund:

Mit AndroidAPS steuerst Du Deine Pumpe und diese gibt Induslin ab. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränekn sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

### Wie soll man beginnen?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

* Eine [unterstützte Insulinpumpe](Pump-Choices.md), 
* ein [Android-Smartphone](Phones.md) (Apple iOS wird von AndroidAPS nicht unterstützt - du kannst dir einmal [iOS Loop](https://loopkit.github.io/loopdocs/) anschauen) und 
* einem [kontinuierliches Glukose-Mess-System](../Configuration/BG-Source.md). 

Zweitens musst du deine **Hardware einrichten**. Siehe [Beispiel-Setup mit Schritt für Schritt Tutorial](Sample-Setup.md).

Drittens musst du die **Software-Komponenten einrichten**: AndroidAPS und eine CGM/FGM-Quelle.

Viertens musst du **das OpenAPS Referenz-Design lernen und verstehen, um deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die Basalraten und Kohlenhydratfaktoren stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. Mit [Autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kannst du anhand der zahlreichen vorhandenen Therapiedaten überprüfen, ob und wie Basalraten, IC und ISF angepasst werden müssen. Oder du machst einen [altmodischen Basalratentest](http://integrateddiabetes.com/basal-testing/).

### Was ist beim Loopen zweckmäßig?

* Wenn du willst, dass deine Einstellungen nicht einfach verändert werden können, dann kannst du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben. Wenn du das nächste Mal zu den Einstellungen gehst, musst du das Passwort eingeben um Änderungen vorzunehmen. Wenn du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

* Wenn du vorhast die Android Wear App zu benutzen, um einen Bolus zu verabreichen oder Einstellungen zu verändern, musst du sicherstellen, dass Benachrichtigungen von AnroidAPS nicht blockiert sind. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

* Wenn du deine Pumpe zum Duschen/Baden/Schwimmen/Sporttreiben etc. abnimmst, dann halte den hellblauen Button mit "Open Loop / Closed Loop" gedrückt, der auf dem Startbildschirm oben links zu finden ist. Wähle dann "Trenne Pumpe für..." aus, je nachdem wie lange du die Pumpe ablegen willst. Damit wird die aktuelle Basalrate für diesen Zeitraum auf 0 gesetzt. Die minimale Zeitdauer für das Trennen hängt von der minimalen temporären Basalrate deiner Pumpe ab. Wenn du die Pumpe nach kürzerer Zeit wieder verwenden möchtest, musst du über den selben hellblauen Button den Loop "Fortsetzen". Auf diese Weise wird dein IOB korrekt berechnet.

* Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Aus diesem Grund kann es etwas dauern bis Aaps Änderungen empfiehlt, wenn das Cgm nicht kontinuierlich Werte übermittelt.

* Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):
  
  * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
  * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
  * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
  * [Hormones and autosens](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AndroidAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

* Akku-Pack zur Stromversorgung deines Smartphones, deiner Smartwatch und (ggf.) deines BT Readers
* Backup in der Cloud (Dropbox, Google Drive...) von den Apps, die du zum Loopen verwendest: deine letzte AndoidAPS-APK und dein Key Store Passwort, Datensicherung deiner AndroidAPS Einstellungen, Datensicherung deiner xDrip Einstellungen, modifizierte Dexcom App, ...
* Pumpenbatterien

### Wie kann das CGM/FGM sicher befestigt werden?

Du kannst es festkleben: Für die gängigen CGM Systeme werden vorperforierte "Overpatches" verkauft (frag Google oder eBay). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren: Es werden Oberarm-Bänder verkauft, die das CGM/FGM mit einem Gummiband fixieren (frag Google oder eBay).

## AndroidAPS Einstellungen

### Impact of settings

This table aims to help you optimise settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (eg if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

<table class="tg">
  <tr>
    <th class="tg-0pky">Setting</th>
    <th class="tg-0pky">Description &amp; testing</th>
    <th class="tg-0pky">Impact</th>
  </tr>
  <tr>
    <td class="tg-0pky">Duration of insulin activity (DIA)</td>
    <td class="tg-0pky">The length of time that insulin decays to zero.<br><br>This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.</td>
    <td class="tg-0pky">Too short DIA can lead to low BGs. And vice-versa.<br><br>If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.<br><br>Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Basal rate schedule (U/hr)</td>
    <td class="tg-0pky">The amount of insulin in a given hour time block to maintain BG at a stable level.<br><br>Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.<br><br>If BG is dropping, basal rate is too high. And vice-versa.</td>
    <td class="tg-0pky">Too high basal rate can lead to low BGs. And vice-versa.<br><br>AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.<br><br>So a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.<br><br>Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Insulin sensitivity factor (ISF) (mmol/l/U or mg/dl/U)</td>
    <td class="tg-0pky">The drop in BG expected from dosing 1U of insulin.<br><br>Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.<br><br>Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.<br><br>This is quite often set too low.</td>
    <td class="tg-0pky">Lower ISF = a smaller drop in BGs for each unit of insulin (also can be called ‘more severe / aggressive’ or ‘stronger’). If too low, this can lead to low BGs.<br><br>Higher ISF = a bigger drop in BGs for each unit of insulin (also can be called ‘less severe / aggressive’ or ‘weaker’). If too high, this can lead to high BGs.<br><br>An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.<br><br>Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Carbohydrate to insulin ratio (CR) (g/U)</td>
    <td class="tg-0pky">The grams of carbohydrate for each unit of insulin.<br><br>Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current 1/CR.</td>
    <td class="tg-0pky">Lower CR = less food per unit, ie you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.<br><br>Higher CR = more food per unit, ie you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.<br><br>If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are CR is too large. Conversely if your BG is lower than before food, CR is too small.</td>
  </tr>
</table>

### APS algorithm

#### Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../../images/Screenshot_AMA3h.png) In AMA, dia actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to connected to the DIA. Now, it means, 'in whích time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter anymore.

### Profil

#### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Well explained in [this article](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

#### Was führt dazu, dass der Loop ohne COB wiederholt zu niedrige Werte verursacht?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behaviour is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

#### Was sind die Ursachen hoher postprandialen Peaks im Closed Loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

## Andere Einstellungen

### Nightscout settings

#### AndroidAPS Nightscout Client meldet "not allowed" und lädt keine Daten hoch. Was kann ich tun?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

### CGM settings

#### Warum meldet AndroidAPS "BG source doesn't support advanced filtering / BZ Quelle unterstützt keine erweiterte Filterung"?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS openAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pumpe

### Where to place the pump?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not. If you rather would have a tubeless insulin pump and have a Dana for looping, check the 30cm catheter with the original belly belt.

### Batteries

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your nightscout site. Tricks to increase battery life include:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Prüfen, Batteriestand und Reservoir-Füllstand solltest du über AndroidAPS checken.
* Die App AndroidAPS kann öfter vom Android-Betriebssystem des Smartphones “abgeschossen” werden, um Energie zu sparen oder Speicher freizugeben. Wenn AndroidAPS bei jedem Aufruf neu gestartet wird, dann baut es jedes Mal eine Bluetooth-Verbindung zur Pumpe auf, dabei wird die aktuelle Basalrate und das Bolus-Protokoll erneut eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen Neustarts in der Blutzucker-Kurve auf dem Hauptbildschirm und in Nigthscout. Sollte die App häufig neu gestartet werden, versuche sie auf der Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.
* bei der DanaR/RS Pumpe wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* Beachte auch die [weiteren spezifischen Batterie-Tipps](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage#battery-type-and-causes-of-short-battery-life).

### Changing reservoirs and canulas

The change of cartridge can not be done via AndroidAPS, but must be carried out as before directly via the pump.

* Dazu durch langes Drucken auf Closed Loop auf dem Home-Bildschirm von AndroidAAPS Pausiere Loop für 1h auswählen
* Nun Pumpe vom Körper trennen und wie bisher das Insulin-Reservoir gemäß der Pumpen-Bedienungsanleitung wechseln.
* Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

The change of a canula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or canula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the PRIME/FILL button to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your canula box for how many units should be primed depending on needle length and tubing length.

## Hygiene

### What to do when taking a shower or bath?

You can remove the pump while taking a shower or bath. For this short period of time you'll usually won't need it. But you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Arbeit

Depending on the kind of your job, maybe you use different treatment factors on workdays. As a looper you should think of a profile switch for your estimated working day (e.g. more than 100% for 8h when sitting around or less than 100% when you are active), a high or low temporary target or a time shift of your profile when standing up much earlier or later than regular. If you are using Nightscout profiles, you can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Freizeitaktivitäten

## Sport

## Sex

You can remove the pump to be 'free', but you should tell it to AAPS so that the IOB calculations are right. Push on the light blue field 'Open loop / Closed loop' on top of the homescreen. Select **'Disconnect pump for XY min'** depending on the estimated time. Once you have been reconnected your pump you can select 'Continue' in the same field or just wait until the chosen time of disconnection is over. The loop will continue automatically.

## Alkoholkonsum

Drinking alcohol is risky in closed loop mode as the algorythm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

* Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
* hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
* einen Profilwechsel auf deutlich weniger als 100% machen 

When drinking alcohol you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

## Schlafen

### How can I loop during the night without mobile and WIFI radiation?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or patched Dexcom app, it will NOT work if you get the BG-readings via nightscout):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

## Reisen

### How to deal with timezone changes?

With DanaR and DanaR Korean you don't have to do anything. For other pumps see [timezone travelling](../Usage/Timezone-traveling.md) page for more details.

## Krankenhausaufenthalt

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

## Termin mit deinem betreuenden Arzt (Internisten)

### Reporting

You can either show your nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/)