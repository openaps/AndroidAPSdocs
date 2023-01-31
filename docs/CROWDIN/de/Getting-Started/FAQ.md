# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../make-a-PR.md)

# Allgemein

## Kann ich die AndroidAPS Installationsdatei einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AndroidAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../Installing-AndroidAPS/Building-APK.md). Das hat einen einfachen Grund:

Mit AndroidAPS steuerst Du Deine Pumpe und diese gibt Insulin ab. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(how-to-begin)=

## Wo anfangen?

First of all, you have to **get loopable hardware components**:

- Eine [unterstützte Insulinpumpe](./Pump-Choices.md), 
- ein [Android-Smartphone](Phones.md) (Apple iOS wird von AndroidAPS nicht unterstützt - du kannst dir einmal [iOS Loop](https://loopkit.github.io/loopdocs/) anschauen) und 
- a [continuous glucose monitoring system](../Configuration/BG-Source.md). 

Secondly, you have to **setup your hardware**. See [example setup with step-by-step tutorial](Sample-Setup.md).

Thirdly, you have to **setup your software components**: AndroidAPS and CGM/FGM source.

Fourthly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your basal rate and carb ratio are accurate. All recommendations assume that your basal needs are met and any peaks or troughs you're seeing are a result of other factors which therefore require some one-off adjustments (exercise, stress etc.). The adjustments the closed loop can make for safety have been limited (see maximum allowed temporary basal rate in [OpenAPS Reference Design](https://openaps.org/reference-design/)), which means that you don't want to waste the allowed dosing on correcting a wrong underlying basal. If for example you are frequently low temping on the approach of a meal then it is likely your basal needs adjusting. You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old fashioned way](https://integrateddiabetes.com/basal-testing/).

## Was ist beim Loopen zweckmäßig?

### Passwort-Schutz

If you don't want your preferences to be easily changed then you can password protect the preferences menu by selecting in the preferences menu "password for settings" and type the password you choose. The next time you go into preferences menu it will ask for that password before going any further. If you later want to remove the password option then go into "password for settings" and delete the text.

### Android Wear Smartwatches

If you plan to use the android wear app to bolus or change settings then you need to ensure notifications from AndroidAPS are not blocked. Confirmation of action comes via notification.

(disconnect-pump)=

### Pumpe trennen

If you take your pump off for showering, bathing, swimming, sports or other activities you must let AndroidAPS know that no insulin is delivered to keep IOB correct.

The pump can be disconnected using the Loop Status icon on the [AndroidAPS Home Screen](./Screenshots.md#loop-status).

### Empfehlungen basieren nicht auf einzelnem CGM-Wert

For safety, recommendations made are based on not one CGM reading but the average delta. Therefore, if you miss some readings it may take a while after getting data back before AndroidAPS kicks in looping again.

### Weiterführende Literatur

There are several blogs with good tips to help you understand the practicalities of looping:

- [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Was sollte ich für den Notfall immer dabei haben?

You have to have the same emergency equipment with you like every other T1D with insulin pump therapy. When looping with AndroidAPS it is strongly recommended to have the following additional equipment with or near to you:

- Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
- Pumpenbatterien
- Current [apk](../Installing-AndroidAPS/Building-APK.md) and [preferences files](../Usage/ExportImportSettings.md) for AndroidAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

## Wie kann ich den CGM/FGM sicher und zuverlässig befestigen?

You can tape it. There are several pre-perforated 'overpatches' for common CGM systems available (search Google, eBay or Amazon). Some loopers use the cheaper standard kinesiology tape or rocktape.

You can fix it. You can also purchase upper arm bracelets that fix the CGM/FGM with a band (search Google, eBay or Amazon).

# AndroidAPS Einstellungen

The following list aims to help you optimize settings. It may be best to start at the top and work to the bottom. Aim to get one setting right before changing another. Work in small steps rather than making large changes at once. You can use [Autotune](https://autotuneweb.azurewebsites.net/) to guide your thinking, although it should not be followed blindly: it may not work well for you or in all circumstances. Note that settings interact with one another - you can have 'wrong' settings that work well together in some circumstances (e.g. if a too-high basal happens to be at the same time as a too-high CR) but do not in others. This means that you need to consider all the settings and check they work together in a variety of circumstances.

## Insulinwirkdauer (DIA)

### Beschreibung & Test

The length of time that insulin decays to zero.

This is quite often set too short. Most people will want at least 5 hours, potentially 6 or 7.

(impact)=

### Auswirkung

Too short DIA can lead to low BGs. And vice-versa.

If DIA is too short, AAPS thinks too early that your previous bolus is all consumed, and, at still elevated glucose, will give you more. (Actually, it does not wait that long, but predicts what would happen, and keeps adding insulin). This essentially creates ‘insulin stacking’ that AAPS is unaware of.

Example of a too-short DIA is a high BG followed by AAPS over-correcting and giving a low BG.

## Basalraten (IE pro Stunde)

### Beschreibung & Test

The amount of insulin in a given hour time block to maintain BG at a stable level.

Test your basal rates by suspending loop, fasting, waiting for say 5 hours after food, and seeing how BG changes. Repeat a few times.

If BG is dropping, basal rate is too high. And vice-versa.

### Auswirkung

Too high basal rate can lead to low BGs. And vice-versa.

AAPS ‘baselines’ against the default basal rate. If basal rate is too high, a ‘zero temp’ will count as a bigger negative IOB than it should. This will lead to AAPS giving more subsequent corrections than it should to bring IOB ultimately to zero.

So, a basal rate too high will create low BGs both with the default rate, but also some hours hence as AAPS corrects to target.

Conversely a basal rate too low can lead to high BGs, and a failure to bring levels down to target.

## Korrekturfaktor (ISF - mg/dl / IE oder mmol/l / IE)

### Beschreibung & Test

The drop in BG expected from dosing 1U of insulin.

Assuming correct basal, you can test this by suspending loop, checking IOB is zero, and taking a few glucose tablets to get to a stable ‘high’ level.

Then take an estimated amount of insulin (as per current 1/ISF) to get to your target BG.

Be careful as this is quite often set too low. Too low means 1 U will drop BG faster than expected.

### Auswirkung

**Lower ISF** (i.e. 40 instead of 50) meaning insulin drops your BG less per unit. This leads to a more aggressive / stronger correction from the loop with **more insulin**. If the ISF is too low, this can lead to low BGs.

**Higher ISF** (i.e. 45 instead of 35) meaning insulin drops your BG more per unit. This leads to a less aggressive / weaker correction from the loop with **less insulin**. If the ISF is too high, this can lead to high BGs.

**Example:**

- Der BZ-Wert ist 190 mg/dl (10,5 mmol) und der Zielwert 100 mg/dl (5,6 mmol). 
- Die notwendige Korrektur ist also 90 mg/dl (= 190 - 100).
- ISF = 30 -> 90 / 30 = 3 Insulin Einheiten
- ISF = 45 -> 90 / 45 = 2 Insulin Einheiten

An ISF that is too low (not uncommon) can result in ‘over corrections’, because AAPS thinks it needs more insulin to correct a high BG than it actually does. This can lead to ‘roller coaster’ BGs (esp. when fasting). In this circumstance you need to increase your ISF. This will mean AAPS gives smaller correction doses, and this will avoid over-correcting a high BG resulting in a low BG.

Conversely, an ISF set too high can result in under-corrections, meaning your BG remains above target – particularly noticeable overnight.

## Insulin-Kohlenhydrat-Verhältnis (Insulin to carb ratio - IC) (g/U)

### Beschreibung & Test

The grams of carbohydrate for each unit of insulin.

Some people also use I:C as abbreviation instead of IC or talk about carb ratio (CR).

Assuming correct basal, you can test by checking IOB is zero and that you are in-range, eating exactly known carbs, and take an estimated amount of insulin based on current insulin to carb ratio. Best is to eat food your normally eat at that time of day and count its carbs precisely.

> **HINWEIS:**
> 
> In manchen Europäischen Ländern wurden sog. Broteinheiten (BE) genutzt um festzulegen, wie viel Insulin für Lebensmittel benötigt wird. Zu Beginn entsprach eine BE 12g Kohlenhydraten, später haben manche dies auf 10g Kohlenhydrate geändert.
> 
> Bei diesem Modell war die Menge der Kohlenhydrate fix während die Insulinmenge variierte. ("Wie viel Insulin benötige ich für eine BE?")
> 
> Beim IC hingegen ist die Insulinmenge fix und die Menge der Kohlenhydrate variiert. ("Wie viele Gramm Kohlenhydrate können mit einer Einheit Insulin abgedeckt werden?")
> 
> Example:
> 
> BE-Faktor (BE = 12g KH): 2,4 IE/BE -> Du benötigst 2,4 Einheiten Insulin, wenn Du eine BE isst.
> 
> Dazu passender IC: 12g / 2,4 IE = 5,0 g/IE -> Du kannst 5,0g Kohlenhydrate essen, wenn Du eine Einheit Insulin spritzt.
> 
> BE-Faktor 2,4 IE / 12 g ===> IC = 12g / 2,4 IE = 5,0 g/IE
> 
> Umrechnungstabellen finden sich online z.B. [hier](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Auswirkung

**Lower IC** = less food per unit, i.e. you are getting more insulin for a fixed amount of carbs. Can also be called ‘more aggressive’.

**Higher IC** = more food per unit, i.e. you are getting less insulin for a fixed amount of carbs. Can also be called ‘less aggressive’.

If after meal has digested and IOB has returned to zero, your BG remains higher than before food, chances are IC is too large. Conversely if your BG is lower than before food, IC is too small.

# Der APS Algorithmus

## Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../images/Screenshot_AMA3h.png)

In AMA, DIA actually doesn't mean the 'duration of insulin acting'. It is a parameter, which used to be connected to the DIA. Now, it means, 'in which time should the correction be finished'. It has nothing to do with the calculation of the IOB. In OpenAPS SMB, there is no need for this parameter any longer.

## Profile

### Warum verwendet man eine minimale DIA (Insulinwirkdauer) von 5 Stunden statt 2 oder 3 Stunden?

Well explained in [this article](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/). Don't forget to `ACTIVATE PROFILE` after changing your DIA.

### Was führt dazu, dass der Loop ohne COB wiederholt zu niedrige Werte verursacht?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct, this behavior is typically caused by a too low ISF. A too low ISF looks typically like this:

![ISF too low](../images/isf.jpg)

### Was sind die Ursachen hoher postprandialen Peaks im Closed Loop?

First of all, check your basal rate and make a no-carb basal rate test. If it is correct and your BG is falling to your target after carbs are fully absorbed, try to set an 'eating soon' temp target in AndroidAPS some time before the meal or think about an appropriate prebolus time with your endocrinologist. If your BG is too high after the meal and still too high after carbs are fully absorbed, think about decreasing your IC with your endocrinologist. If your BG is too high while COB and too low after carbs are fully absorbed, think about increasing your IC and an appropriate prebolus time with your endocrinologist.

# Andere Einstellungen

## Nightscout Einstellungen

### AndroidAPS Nightscout Client meldet "not allowed" und lädt keine Daten hoch. Was kann ich tun?

In NSClient check 'Connection settings'. Maybe you actually are not in an allowed WLAN or you have activated 'Only if charging' and your charging cable is not attached.

## CGM Einstellungen

### Warum meldet AndroidAPS "BG source doesn't support advanced filtering / BZ Quelle unterstützt keine erweiterte Filterung"?

If you do use another CGM/FGM than Dexcom G5 or G6 in xDrip native mode, you'll get this alert in AndroidAPS OpenAPS-tab. See [Smoothing blood glucose data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md) for more details.

## Pumpe

### Wo soll ich die Pumpe tragen?

There are innumerable possibilities to place the pump. It does not matter if you are looping or not.

### Batterien

Looping can reduce the pump battery faster than normal use because the system interacts through bluetooth far more than a manual user does. It is best to change battery at 25% as communication becomes challenging then. You can set warning alarms for pump battery by using the PUMP_WARN_BATT_P variable in your Nightscout site. Tricks to increase battery life include:

- verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
- Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
- Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
- benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Prüfen, Batteriestand und Reservoir-Füllstand solltest du über AndroidAPS checken.
- Die App AndroidAPS kann öfter vom Android-Betriebssystem des Smartphones “abgeschossen” werden, um Energie zu sparen oder Speicher freizugeben. Wenn AndroidAPS bei jedem Aufruf neu gestartet wird, dann baut es jedes Mal eine Bluetooth-Verbindung zur Pumpe auf, dabei wird die aktuelle Basalrate und das Bolus-Protokoll erneut eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen Neustarts in der Blutzucker-Kurve auf dem Hauptbildschirm und in Nigthscout. Sollte die App häufig neu gestartet werden, versuche sie auf der Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
    
    Beispiel: Vorgehensweise "Whitelisting" auf einem Samsung Smartphone mit Android Pie (Android 9):
    
    - Gehe zu Einstellungen -> Gerätewartung -> Akku 
    - Scrolle bis Du AndroidAPS findest und wähle es aus 
    - Deaktiviere "App beim Datensparen zulassen"
    - Gehe ZUSÄTZLICH zu Einstellungen -> Apps -> (Symbol mit den drei Kreisen oben rechts) und wähle "special access" -> "Optimize battery usage"
    - Scrolle bis Du AndroidAPS findest und stelle sicher, dass es nicht ausgewählt ist.

- reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.

- bei der [DanaR/RS Pumpe](../Configuration/DanaRS-Insulin-Pump.md) wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
- see also more tips for [particular types of battery](../Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md#battery-type-and-causes-of-short-battery-life)

### Insulin-Reservoir und Katheter wechseln

The change of cartridge cannot be done via AndroidAPS but must be carried out as before directly via the pump.

- Dazu durch langes Drucken auf Closed Loop auf dem Home-Bildschirm von AndroidAPS Pausiere Loop für 1h auswählen
- Now nnect the pump and change the reservoir as per pump instructions.
- Auch das Füllen des Schlauchs und der Kanüle kann direkt an der Pumpe erfolgen. In this case use [PRIME/FILL button](../Usage/CPbefore26.md#pump) in the actions tab just to record the change.
- Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

The change of a cannula however does not use the "prime infusion set" function of the pump, but fills the infusion set and/or cannula using a bolus which does not appear in the bolus history. This means it does not interrupt a currently running temporary basal rate. On the Actions (Act) tab, use the [PRIME/FILL button](../Usage/CPbefore26.md#pump) to set the amount of insulin needed to fill the infusion set and start the priming. If the amount is not enough, repeat filling. You can set default amount buttons in the Preferences > Other > Fill/Prime standard insulin amounts. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.

## Smartphone-Hintergrundbild

You can find the AndroidAPS wallpaper for your phone on the [phones page](../Getting-Started/Phones.md#phone-background).

## Alltagsgebrauch

### Hygiene

#### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

You can remove the pump while taking a shower or bath. For this short period of time you may not need it, but you should tell AAPS that you've disconnected so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ.md#disconnect-pump).

### Arbeit

Depending on your job, you may choose to use different treatment factors on workdays. As a looper you should consider a [profile switch](../Usage/Profiles.md) for your typical working day. For example, you may switch to a profile higher than 100% if you have a less demanding job (e.g. sitting at a desk), or less than 100% if you are active and on your feet all day. You could also consider a high or low temporary target or a [time shift of your profile](../Usage/Profiles.md#time-shift) when working much earlier or later than regular, of if you work different shifts. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need.

## Freizeitaktivitäten

(sports)=

### Sport

You have to rework your old sports habits from pre-loop times. If you simply consume one or more sports carbs as before, the closed loop system will recognize them and correct them accordingly.

So, you would have more carbohydrates on board, but at the same time the loop would counteract and release insulin.

When looping you should try these steps:

- Mache einen [Profilwechsel](../Usage/Profiles.md) kleiner 100%.
- Set an [activity temp target](../Usage/temptarget.md#activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](../Usage/Open-APS-features.md#enable-smb-with-high-temp-targets) and ["Enable SMB always"](../Usage/Open-APS-features#enable-smb-always) are disabled.

Pre- and post-processing of these settings is important. Make the changes in time before sport and consider the effect of muscle filling.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../Usage/Automation.md) for profile switch and TT. Location based automation might also be an idea but makes preprocessing more difficult.

The percentage of the profile switch, the value for your activity temp target and best time for the changes are individual. Start on the safe side if you are looking for the right value for you (start with lower percentage and higher TT).

### Sex

You can remove the pump to be 'free', but you should tell AndroidAPS so that the IOB calculations are correct. See [description above](../Getting-Started/FAQ.md#disconnect-pump).

### Alkoholkonsum

Drinking alcohol is risky in closed loop mode as the algorithm cannot predict the alcohol influenced BG correctly. You have to check out your own method for treating this using the following functions in AndroidAPS:

- Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
- hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
- einen Profilwechsel auf deutlich weniger als 100% machen 

When drinking alcohol, you always have to have an eye on your CGM to manually avoid a hypoglycemia by eating carbs.

### Schlafen

#### Wie kann ich nachts loopen, ohne Handy- und WLAN-Strahlung ausgesetzt zu sein?

Many users turn the phone into airplane mode at night. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

You are not receiving calls now, nor are you connected to the internet. But the loop is still running.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip+) when phone is in airplane mode. Go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

### Reisen

#### Wie gehe ich mit einem Zeitzonenwechsel um?

With Dana R and Dana R Korean you don't have to do anything. For other pumps see [time zone travelling](../Usage/Timezone-traveling.md) page for more details.

## Medizinische Themen

### Krankenhausaufenthalt

If you want to share some information about AndroidAPS and DIY looping with your clinicians, you can print out the [guide to AndroidAPS for clinicians](../Resources/clinician-guide-to-AndroidAPS.md).

### Termin mit deinem betreuenden Arzt (Internisten)

#### Auswertung

You can either show your Nightscout reports (https://YOUR-NS-SITE.com/report) or check [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

# Häufige Fragen auf Discord und ihre Antworten...

## Mein Problem ist hier nicht aufgeführt.

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users.md#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

## Mein Problem ist hier nicht aufgeführt, aber ich habe die Lösung gefunden

[Information to get help.](../Where-To-Go-For-Help/Connect-with-other-users.md#i-m-getting-stuck-what-do-i-do-who-can-i-ask)

**Remind us to add your solution to this list!**

## AAPS stoppt jeden Tag ungefähr zur gleichen Zeit.

Stop Google Play Protect. Check for "cleaning" apps (ie CCleaner etc) and uninstall them. AAPS / 3 dots menu / About / follow the link "Keep app running in the background" to stop all battery optimizations.

## Wie kann ich meine Backups organisieren?

Export settings very regularly: after each pod change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Keep several old export files.

Copy on an internet drive (Dropbox, Google etc) : all the apks you used to install apps on your phone (AAPS, xDrip, BYODA, Patched LibreLink…) as well as the exported setting files from all your apps.

## Ich habe Probleme und/oder Fehler beim Erstellen der App.

Please

- check [Troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.md#troubleshooting-android-studio) for typical errors and
- die Tipps in dieser [Schritt für Schritt Anleitung](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

## Ich stecke bei einem Ziel fest und brauche Hilfe.

Screen capture the question and answers. Post-it on the Discord AAPS channel. Don't forget to tell which options you choose (or not) and why. You'll get hints and help but you'll need to find the answers.

## Wie kann ich das Passwort in AAPS v2.8.x zurücksetzen?

Open the hamburger menu, start the Configuration wizard and enter new password when asked. You can quit the wizard after the password phase.

## Wie kann ich das Passwort in AAPS v3.x zurücksetzen?

If you forgot your password: Close AAPS. Put an empty file named PasswordReset (without any extensions) in phone_main_memory/AAPS/extra directory. Restart AAPS. The new AAPS password is the serial number of your pump. The serial for the Omnipod DASH pod is 4241. You can change the password via 3 dots menu, configuration wizard, unlock parameters.

## Mein Link/Pumpe/Pod reagiert nicht (RL/OL/EmaLink…)

With some phones, there are Bluetooth disconnects from the Links (RL/OL/EmaL...).

Some also have non responsive Links (AAPS says that they are connected but the Links can't reach or command the pump.)

The easiest way to get all these parts working together is : 1/ Delete Link from AAPS 2/ Power off Link 3/ AAPS 3 dot menu, quit AAPS 4/ Long press AAPS icon, Android menu, info on app AAPS, Force stop AAPS and then Delete cache memory (Do not delete main memory !) 4bis/ Rarely some phones may need a reboot here. You can try without reboot. 5/Power on Link 6/Start AAPS 7/Pod tab, 3 dot menu, search and connect Link

## Fehler beim App erstellen: Dateiname zu lang

While trying to build I get an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "c:\src\AndroidAPS-EROS").

From Android Studio: Make sure "Gradle" is done syncing and indexing after opening the project and pulling from GitHub. Execute a Build->Clean Project before doing a Rebuild Project. Execute File->Invalidate Caches and Restart Android Studio.

## Alarm: Entwickler-Version. Closed Loop ist nicht verfügbar.

AndroidAPS is not running in "developer mode". AAPS shows the following message: "running dev version. Closed loop is disabled".

Make sure AndroidAPS is running in "developer mode": Place a file named "engineering_mode" at the location "AAPS/extra". Any file will do as long as it is properly named. Make sure to restart AndroidAPS for it to find the file and go into "developer mode".

Hint: Make a copy of an existing logfile and rename it to "engineering_mode" (note: no file extension!).

## Wo finde ich die Einstellungsdateien?

Settings files will be stored on your phone's internal storage in the directory "/AAPS/preferences". WARNING: Make sure not to lose your password as without it you will not be able to import an encrypted settings file!

## Wie konfiguriere ich die Akkuoptimierung?

Properly configuring Power Management is important to prevent your Phone's OS to suspend AndroidAPS and related app's and services when your phone is not being used. As a result AAPS can not do its work and/or Bluetooth connections for sensor and Rileylink (RL) may be shut down causing "pump disconnected" alerts and communication errors. On the phone, go to settings->Apps and disable battery savings for: AndroidAPS xDrip or BYODA/Dexcom app The Bluetooth system app (you may need to select for viewing system apps first) Alternatively, fully disable all battery savings on the phone. As a result your battery may drain faster but it is a good way to find out if battery savings is causing your problem. The way battery savings is implemented greatly depends on the phone's brand, model and/or OS version. Because of this it is almost impossible to give instructions to properly set battery savings for your setup. Experiment on what settings work best for you. For additional information, see also Don't kill my app

## Alarm Pumpe nicht erreichbar mehrmals am Tag oder in der Nacht.

Your phone may be suspending AAPS services or even Bluetooth causing it to loose connection to RL (see battery savings) Consider configuring unreachable alerts to 120 minutes by going to the top right-hand side three-dot menu, selecting Preferences->Local Alerts->Pump unreachable threshold [min].

## Wo kann ich Behandlungen in AAPS v3 löschen?

3 dots menu, select treatements, then 3 dots menu again and you have different options available.

## Configuring and Using the NSClient remote app

AAPS can be monitored and controlled remotely via the NSClient app and optionally via the associated Wear app running on Android Wear watches. Note that the NSClient (remote) app is distinct from the NSClient configuration in AAPS, and the NSClient (remote) Wear app is distinct from the AAPS Wear app--for clarity the remote apps will be referred to as 'NSClient remote' and 'NSClient remote Wear' apps.

To enable NSClient remote functionality you must: 1) Install the NSClient remote app (the version should match the version of AAPS being used) 2) Run the NSClient remote app and proceed through the configuration wizard to grant required permissions and configure access to your Nightscout site. 3) At this point you may want to disable some of the Alarm options, and/or advanced settings which log the start of the NSClient remote app to your Nightscout site. Once this is done, NSClient remote will download Profile data from your Nightscout site, the 'Overview' tab will display CGM data and some AAPS data, but but may not display graph data, and will indicate that a profile isn't yet set. 4) To activate the profile:

- Enable remote profile synchronization in AAPS > NSClient > Options
- Activate the profile in NSClient remote > Profile After doing so, the profile will be set, and NSClient remote should display all data from AAPS. Hint: If the graph is still missing, try changing the graph settings to trigger an update. 5) To enable remote control by the AAPS NSClient, selectively enable the aspects of AAPS (Profile changes, Temp Targets, Carbs, etc.) that you would like to be able to control remotely via AAPS > NSClient > Options . Once these changes are made, you'll be able to remotely control AAPS via either Nightscout or NSClient remote.

If you'd like to monitor/control AAPS via the NSClient remote Wear App, you'll need both NSClient remote and the associated Wear app to be installed. To compile the NSClient remote Wear app, follow the standard instructions for installing/configuring the AAPS wear app, except when compiling it, choose the NSClient variant.

## I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

The red and yellow triangles are a security feature in AAPS v3.

Red triangle means that you have duplicate BGs and AAPS can't calculate precisely the deltas. You can't close the loop. You need to delete one BG of each duplicated value in order to clear the red triangle. Go to BYODA or xDRIP tab, long press one line you want to delete, check one of each lines that are doubled (or via 3 dots menu and Delete, depending on your AAPS version). You may need to reset the AAPS databases if there are too many double BGs. In this case, you'll also loose stats, IOB, COB, selected profile.

Possible origin of the problem: xDrip and/or NS backfilling BGs.

The yellow triangle means unstable delay between each BG reading. You don't receive BGs every 5 min regularly or missing BGs. It is often a Libre problem. It also happens when you change G6 transmitter. If the yellow triangle is related to the G6 tansmitter change, it will go away by itself after several hours (around 24h). In case of Libre, the yellow triangle will stay. The loop can be closed and works correctly.

## Can I move an active DASH Pod to other hardware?

This is possible. Note that as moving is "unsupported" and "untested" there is some risk involved. Best to try the procedure when your Pod is about to expire so when things go wrong not much is lost.

Critical is that pump "state" (which includes it's MAC address) in AAPS and DASH match on reconnecting

## Procedure I follow in this:

1) Suspend the DASH pump. This makes sure there are no running or queued commands active when DASH loses connection 2) Put the phone into airplane mode to disable BT (as well as WiFi and Mobile data). This way it is guaranteed AAPS and DASH can not communicate. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Import settings on the alternate phones AAPS. 7) Check the DASH tab to verify it is seeing the Pod. 8) Un-suspend the Pod. 9) Check the DASH tab and confirm it is communicating with the Pod (use the refresh button)

Congratulations: you did it!

*Wait!* You still have the main phone thinking it can reconnect to the same DASH:

1) On the main phone choose "deactivate". This is safe because the phone has no way of communicating with DASH to actually deactivated the Pod (it is still in airplane mode) 2) Deactivation will result in a communications error - this is expected. 3) Just hit "retry" a couple of times until AAPS offers the option to "Discard" the Pod.

When Discarded, verify AAPS is reporting "No Active Pod". You can now safely disable airplane mode again.

## How do I import settings from earlier versions of AAPS into AAPS v3 ?

You can only import settings (in AAPS v3) that were exported using AAPS v2.8x or v3.x. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install AAPS v3 and import v2.8 settings in v3.

If you use the same key to build v2.8 and v3, you won't even have to import settings. You can install v3 over v2.8.

There were some new objectives added. You'll need to validate them.