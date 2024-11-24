# FAQ für Looper

How to add questions to the FAQ: Follow the these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## General

### Can I just download the AAPS installation file?

Leider nein. Es gibt keine apk-Datei für AAPS, die einfach heruntergeladen werden kann. You have to [build](../SettingUpAaps/BuildingAaps.md) it yourself. Das hat einen einfachen Grund:

Mit AAPS steuerst Du Deine Pumpe und deren Insulinabgabe. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(FAQ-how-to-begin)=

### How to begin?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

- A [supported insulin pump](../Getting-Started/CompatiblePumps.md), 
- an [Android smartphone](../Getting-Started/Phones.md) (Apple iOS is not supported by AAPS - you can check [iOS Loop](https://loopkit.github.io/loopdocs/)) and
- a [continuous glucose monitoring system](../Getting-Started/CompatiblesCgms.md). 

Secondly, you have to **setup your software components**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM source](../Getting-Started/CompatiblesCgms.md) and a [reporting server](../SettingUpAaps/SettingUpTheReportingServer.md).

Thirdly, you have to learn and **understand the OpenAPS reference design to check your treatment factors**. The founding principle of closed looping is that your [basal rate and carb ratio](../SettingUpAaps/YourAapsProfile.md) are accurate. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass Du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn Du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. You can use [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Or you can test and set your basal the [old-fashioned way](https://integrateddiabetes.com/basal-testing/).

### What practicalities of looping do I have?

#### Password protection

Wenn Du willst, dass Deine Einstellungen nicht einfach verändert werden können, dann kannst Du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben, Wenn Du das nächste Mal zu den Einstellungen gehst, musst Du das Passwort eingeben um Änderungen vorzunehmen. Wenn Du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

#### Android Wear Smartwatches

Planst Du über die Android Wear App einen Bolus abgeben zu wollen oder Einstellungen anzupassen, muss AAPS die Berechtigung bekommen, Benachrichtigungen zu senden. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

(FAQ-disconnect-pump)=

#### Disconnect pump

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Sport oder anderen Aktivitäten abnimmst, musst Du AAPS wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen.

The pump can be disconnected using the Loop Status icon on the [AAPS Home Screen](#AapsScreens-loop-status).

#### Recommendations not only based on one single CGM reading

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Wenn Dein CGM nicht kontinuierlich Glukosewerte sendet, kann es deswegen etwas dauern bis AAPS Änderungen empfiehlt.

#### Further readings

Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):

- [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### What emergency equipment is recommended to take with me?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

- Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
- Pumpenbatterien
- Current [apk](../SettingUpAaps/BuildingAaps.md) and [preferences files](../Maintenance/ExportImportSettings.md) for AAPS and any other apps you use (e.g. xDrip+, BYO Dexcom) both locally and in the cloud (Dropbox, Google Drive).

### How can I safely and securely attach the CGM/FGM?

Du kannst es mit Tape fixieren. Es gibt mehrere vorperforierte 'Overpatches' für gängige CGM Systeme (Suche bei Google, eBay oder Amazon). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren. Sie können auch Oberarm - Armbänder kaufen, die das CGM/FGM mit einer Band fixieren (Suche bei Google, eBay oder Amazon).

## APS algorithm

### Why does it show "dia:3" in the "OPENAPS AMA"-tab even though I have a different DIA in my profile?

![AMA 3h](../images/Screenshot_AMA3h.png)

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Other settings

### Nightscout settings

#### AAPSClient says 'not allowed' and does not upload data. What can I do?

Überprüfe im Nightscout-Client die "Verbindungs-Einstellungen". Vielleicht bist Du gerade nicht in einem erlaubten WLAN oder Du hast "Nur während des Ladens" aktiviert und dein Ladekabel ist nicht angeschlossen.

### CGM settings

#### Why does AAPS say 'BG source doesn't support advanced filtering'?

Wenn Du ein anderes CGM/FGM als den Dexcom G5 oder G6 im 'xDrip native mode' verwendest, wirst Du diesen Hinweis im AAPS OpenAPS-Tab bekommen. See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md) for more details.

### Pump

#### Where to place the pump?

Es gibt unzählige Möglichkeiten, die Pumpe zu platzieren. Es spielt keine Rolle, ob Du loopst oder nicht.

#### Batteries

Beim Loopen kann die Batterien schneller entladen als gewohnt, weil das System viel öfter mit der Pumpe agiert als ein Benutzer es tun würde. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem Du die Variable PUMP_WARN_BATT_P verwendest. Tipps um die Batteriedauer zu erhöhen:

- verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
- Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
- Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
- benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Pumpenhistorie, Batteriestand und Reservoir-Füllstand solltest Du über AAPS checken.
- Das Android-Betriebssystem Deines Smartphones kann öfter das Schließen der AAPS-App erzwingen, um Energie zu sparen oder Speicher freizugeben. Mit jedem Neustart von AAPS, wird auch eine neue Bluetooth-Verbindung zur Pumpe aufgebaut und dabei auch die aktuelle Basalrate und das Bolus-Protokoll neu eingelesen. Das verbraucht viel Energie. Um zu prüfen, ob dies häufiger auftritt, kann man im AndroudAPS Menü “Logge App-Start in NS” aktivieren. Dann erscheinen diese Neustarts als Information im Glukoseverlauf auf dem AAPS Startbildschirm und auch in Deiner Nightscout-Seite. Sollte die App häufig neu gestartet werden, versuche sie auf die Whiteliste der Prozesse zu setzen, die nicht automatisch beendet werden und im Hintergrund weiterlaufen dürfen.
    
    Beispiel: Vorgehensweise "Whitelisting" auf einem Samsung Smartphone mit Android Pie (Android 9):
    
    - Gehe zu Einstellungen -> Gerätewartung -> Akku 
    - Scrolle bis Du AAPS findest und wähle es aus
    - Deaktiviere "App beim Datensparen zulassen"
    - Gehe ZUSÄTZLICH zu Einstellungen -> Apps -> (Symbol mit den drei Kreisen oben rechts) und wähle "special access" -> "Optimize battery usage"
    - Scrolle bis Du AAPS findest und stelle sicher, dass es nicht ausgewählt ist.

- reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.

- for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy whilst in storage) but it doesn't always work to break it 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
- see also more tips for [particular types of battery](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Changing reservoirs and cannulas

Der Wechsel des Insulin-Reservoirs kann nicht über AAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

- Dazu durch langes Drücken auf das Closed-Loop-Symbol auf dem ÜBERSICHT-Tab von AAPS 'Pausiere Loop für 1h' auswählen
- Koppele nun die Pumpe ab und wechsel das Reservoir wie es im Pumpenhandbuch beschrieben ist.
- Auch das Füllen des Schlauchs und der Kanüle kann direkt an der Pumpe erfolgen. In this case use [PRIME/FILL button](#screens-action-tab) in the actions tab just to record the change.
- Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. On the Actions (Act) tab, use the [PRIME/FILL button](#screens-action-tab) to set the amount of insulin needed to fill the infusion set and start the priming. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwendet sollst.

### Wallpaper

You can find the AAPS wallpaper for your phone on the [phones page](#Phones-phone-wallpaper).

### Daily usage

#### Hygiene

##### What to do when taking a shower or bath?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für diesen kurzen Zeitraum benötigest Du sie möglicherweise nicht aber Du solltest AAPS sagen, dass Du die Verbindung getrennt hast, damit die IOB-Berechnungen korrekt sind. See [description above](#FAQ-disconnect-pump).

#### Work

Je nach Job können Sie verschiedene Behandlungsfaktoren an Werktagen anwenden. As a looper you should consider a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) for your typical working day. Zum Beispiel könntest Du zu einem Profil über 100% wechseln, wenn Du einen weniger anspruchsvollen Job hast (z. B. an einem Schreibtisch) oder weniger als 100%, wenn Du kontinuierlich körperlich während der Arbeit aktiv bist. You could also consider a high or low temporary target or a [time shift of your profile](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) when working much earlier or later than regular, of if you work different shifts. Du kannst auch ein zweites Profil erstellen (z.B. 'zu Hause' und 'Werktag') und einen täglichen Profilwechsel machen, auf das Profil, das du gerade brauchst.

### Leisure activities

(FAQ-sports)=

#### Sports

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

- Make a [profile switch](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Set an [activity temp target](#TempTargets-activity-temp-target) above your standard target.
- If you are using SMB make sure ["Enable SMB with high temp targets"](#Open-APS-features-enable-smb-with-high-temp-targets) and ["Enable SMB always"](#Open-APS-features-enable-smb-always) are disabled.

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) for profile switch and TT. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

#### Sex

Du kannst die Pumpe ablegen, um "frei" zu sein, aber Du solltest das Trennen in AAPS eingeben, damit die IOB-Berechnungen korrekt erfolgen können. See [description above](#FAQ-disconnect-pump).

#### Drinking alcohol

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst Deinen eigenen Weg finden damit umzugehen, kannst aber folgende AAPS-Funktionen nutzen:

- Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
- hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
- einen Profilwechsel auf deutlich weniger als 100% machen 

Wenn du Alkohol trinkst, musst du immer Dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

#### Sleeping

##### How can I loop during the night without mobile and WIFI radiation?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. If you want the loop to support you when you are sleeping, proceed as follows (this will only work with a local BG-source such as xDrip+ or ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app), it will NOT work if you get the BG-readings via Nightscout):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte von xDrip+. Gehe zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gebe `info.nightscout.androidaps` ein.

![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

#### Travelling

##### How to deal with time zone changes?

Mit der DanaR und der DanaR Korean musst du nichts tun. For other pumps see [time zone travelling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medical topics

#### Hospitalization

If you want to share some information about AAPS and DIY looping with your clinicians, you can print out the [guide to AAPS for clinicians](../UsefulLinks/ClinicianGuideToAaps.md).

#### Medical appointment with your endocrinologist

##### Reporting

Du kannst entweder Deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.

## Frequent questions on Discord and their answers...

### My problem is not listed here.

[Informationen um Hilfe zu erhalten.](../GettingHelp/WhereCanIGetHelp.md)

### My problem is not listed here but I found the solution

[Informationen um Hilfe zu erhalten.](../GettingHelp/WhereCanIGetHelp.md)

**Erinnere uns daran, Deine Lösung zu dieser Liste hinzuzufügen!**

### AAPS stops everyday around the same time.

Google Play Protect anhalten. Schaue, ob Du "Cleaner" oder "Reinigungs" Apps hast und deinstalliere diese. In AAPS gehe auf das 3-Punkte-Menü / Über / "Don't Kill My App?".

### How to organize my backups ?

Einstellungen regelmäßig exportieren: Nach jedem Podwechsel, nach der Änderung deines Profils, wenn Du ein Ziel validiert hast, wenn Du eine neue Pumpe hast… Auch wenn sich nichts ändert, exportiere einmal im Monat. Behalte mehrere alte Exportdateien.

Kopiere auf ein Cloud-Drive (Dropbox, Google etc.): Alle APK's die Du benutzt hast, um Apps auf deinem Handy zu installieren (AAPS, xDrip, BYODA, gepatchte LibreLink App…) sowie die exportierten Einstellungsdateien aus allen verwendeten Apps.

### I have problems, errors building the app.

Bitte

- check [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) for typical errors and
- die Tipps in dieser [Schritt für Schritt Anleitung](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### I'm stuck on an objective and need help.

Mache ein Bildschirmfoto der Frage und der Antworten. Poste es auf dem AAPS Discord Kanal. Vergiss nicht zu sagen, welche Optionen du wählst (oder nicht) und warum. Du erhältst Tipps und Hilfe, aber Du musst die Antworten selber finden.

### How to reset the password in AAPS v2.8.x ?

Öffne das Hamburger Menü, starte den Konfigurationsassistenten und gebe ein neues Passwort ein, wenn danach gefragt wird. Du kannst den Assistenten nach der Passwortphase verlassen.

### How to reset the password in AAPS v3.x

You find the documentation [here](#Update3_0-reset-master-password).

### My link/pump/pod is unresponsive (RL/OL/EmaLink…)

Bei manchen Smartphones treten Bluetooth-Verbindungsprobleme mit den Kommunikationsgeräten (RL/OL/EmaLink...) auf.

Einige haben auch nicht reagierende Verbindugnen zu Ihren Geräten (AAPS sagt, dass sie verbunden sind, aber die Geräte können die Pumpe nicht erreichen oder Kommandos senden.)

Der einfachste Lösungsweg ist: 1/ Lösche das Gerät aus AAPS 2/ Schalte das Gerät (RileyLink etc.) aus 3/ Schließe AAPS über das 3-Punkte-Menü oben rechts 4/ Drücke lange auf das AAPS Icon, öffne die Info zur App, Wähle 'Stopp erzwingen' , wähle 'Speicher' und dann 'Cache leeren' (nicht: 'Daten löschen' wählen!) 4+/ In selten Fällen muss das Smartphonen nun neugestartet werden. Du kannst es ohne Neustart versuchen. 5/ Schalte den Link ein 6/ Starte AAPS 7/ Gehe auf den Reiter POD, 3-Punkt-Menü, Suche und Verbindung Link

### Build error: file name too long

Während des Erstellens bekomme ich einen Fehler, dass der Dateiname zu lang ist. Mögliche Lösungen: Verschiebe die Quelldateien ein Verzeichnis näher an das Stammverzeichnis des Speichers (z.B. "C:\src\AndroidAPS-EROS").

Von Android Studio: Stelle sicher, dass "Gradle" nach dem Öffnen des Projekts und dem Download von GitHub synchronisiert und indiziert ist. Führe Build -> Clean Project und danach Build -> Rebuild Project durch. Führe File -> Invalidate Caches... durch und starte Android Studio neu.

### Alert: Running dev version. Closed loop is disabled

AAPS läuft nicht im "Entwicklermodus". AAPS zeigt die folgende Meldung: "Entwickler-Version. Closed Loop ist nicht verfügbar".

Stelle sicher, dass der "Entwicklermodus" in AAPS aktiviert ist: Speichere eine leere Datei mitr dem Namen "engineering_mode" im Verzeichnis "AAPS/extra". Jede Datei funktioniert so lange wie sie korrekt benannt ist. Starte AAPS neu, damit die Datei erkannt werden kann und der "Entwicklermodus" damit aktiviert wird.

Tipp: Mache eine Kopie einer existierenden Logdatei und benenne sie in "engineering_mode" um (Aufpassen: keine Dateiendung!).

### Where can I find settings files?

Einstellungsdateien werden auf dem internen Speicher Ihres Telefons im Verzeichnis "/AAPS/preferences" gespeichert. WARNUNG: Stelle sicher, dass Du Dein Passwort nicht verlierst, da Du ohne Passwort keine verschlüsselte Einstellungsdatei importieren kannst!

### How to configure battery savings?

Das richtige Konfigurieren der Energiespareinstellungen ist wichtig, um zu verhindern, dass das Betriebssystem des Smartphones AAPS und die anderen wichtigen Apps und Dienste aussetzt, wenn Du Dein Telefon nicht benutzt. Das Ergebnis ist, dass AAPS nicht arbeiten kann und/oder Bluetooth-Verbindungen für Sensor und Rileylink (RL) getrennt werden, was "Pumpe getrennt" Alarme und Kommunikationsfehler verursacht. Auf dem Smartphone gehe zu Einstellungen > Apps und deaktiviere die Akkuoptimierung ('nicht eingeschränkt') für: AAPS, xDrip+ oder die BYODA/Dexcom-App und die Bluetooth-System-App (Du musst eventuell zuerst die System-Apps einblenden). Alternativ kannst Du die Akkuoptimierung auf dem Smartphone komplett deaktivieren. Das führt dazu, dass der Akku schneller verbraucht wird, aber es ist ein guter Weg, um herauszufinden, ob die Akkuoptimierung das Problem verursacht. Die Akkuoptimierungseinstellungen können, je nach Telefonhersteller und/oder Betriebsystemversion, stark abweichen bzw. anders aussehen. Aus diesem Grund ist es nahezu unmöglich, Anweisungen zur korrekten Einstellung der Akkuoptimierung für Dein Setup zu geben. Experimentiere, welche Einstellungen am besten funktionieren. Für weitere Informationen siehe auch "Dont kill my app"

### Pump unreachable alerts several times a day or at night.

Das Telefon kann AAPS-Dienste oder sogar Bluetooth unterbrechen, wodurch die Verbindung zu RL verloren geht (siehe Akkuoptimierung). Ziehe in Erwägung, den Grenzwert Pumpe nicht erreichbar auf 120min zu setzen, indem Du rechts oben zum Drei-Punkt-Menü gehst, wähle Einstellungen -> Lokale Alarme -> Grenzwert Pumpe ist nicht erreichbar [min].

### Where can I delete treatments in AAPS v3 ?

3-Punkte-Menü, wähle Behandlungen, dann hast Du verschiedene Optionen zur Verfügung.

### Configuring and Using the AAPSClient remote app

AAPS kann mit der AAPSClient Remote App (und optional auch mit der zugehörigen Wear App auf einer Android Wear Smartwatch) remote kontrolliert und gesteuert werden. Zur Klärung und weil es leicht zu Verwechselungen kommen kann: Die AAPSClient Remote App ist nicht die NSClient Konfiguration in AAPS, und die AAPSClient Remote Wear App ist nicht zu verwechseln mit der AAPS Wear App. Wir verwenden im Folgenden für Apps zur Steuerung aus der Ferne die Namen 'AAPSClient Remote' und 'AAPSClient Remote Wear'.

Um die AAPSClient Remote-Funktion nutzen zu können, musst Du: 1) Die AAPSClient Remote App installieren (die Version sollte zur verwendeten AAPS Version passen) 2) Die AAPSClient Remote App starten und den Einrichtungsassistenten durchlaufen, um die notwendigen Berechtigungen richtig zu setzen und den Zugriff auf Deine Nightsout-Webseite einzurichten. 3) An dieser Stelle kannst Du einige der Alarm-Optionen und/oder der erweiterten Einstellungen ausschalten, die den Start der AAPSClient Remote App auf Deiner Nightscout-Webseite protokolliert. Sobald das erledigt ist, wird die AAPSClient Remote App die aktuellen Profilinformationen von Deiner Nightscout-Webseite herunterladen. Der Startbildschirm wird Deine CGM-Werte und einige AAPS-Daten anzeigen. Es werden noch nicht alle Graphen angezeigt werden und es wird ein Hinweis erscheinen, dass das Profil noch nicht gesetzt wurde. 4) Um das Profil nun zu setzen:

- Aktiviere 'Gespeicherte Profile abrufen' in AAPS (Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung)
- Setze/Aktiviere das Profil, in dem Du in der AAPSClient Remote App auf das Profil drückst und mit OK bestätigst. Danach wird das Profil gesetzt und alle Werte aus AAPS sollten in der AAPSClient Remote App vollständig angezeigt werden. Tipp: Sollte der Graph weiterhin nicht gezeigt werden, ändere die Graphen-Einstellung (langes Drücken auf den Graphen), um so eine Aktualisierung zu erzwingen. Um AAPS über die AAPSClient Remote App steuern zu können, aktiviere die Funktionen, die aus der Ferne steuerbar sein sollen (z.B. Profilwechsel durchführen, temporäre Ziele setzen, Kohlenhydrate etc.). Die Einstellungen findest Du in AAPS unter: Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung. Sobald Du die beschriebenen Einstellungen gemacht hast, kannst Du AAPS remote entweder über die Nightscout-Webseite oder die AAPSClient Remote App steuern.

Wenn Du AAPS mit der AAPSClient Remote Wear App folgen/steuern möchtest, müssen sowohl die AAPSClient Remote App und auch die zugehörige Wear App installiert werden. Um die AAPSClient Remote Wear App zu erstellen (kompilieren), nutze die Standardanleitung bis zu dem Punkt an dem kompiliert werden soll. Wähle hier die Variante AAPSClient für das Kompilieren.

### I have a red triangle / AAPS won't enable closed loop / Loops stays in LGS / I have a yellow triangle

Rote und gelbe Dreiecke sind Sicherheitsfunktionen in AAPS v3.

Ein rotes Dreieck zeigt, dass es doppelte Glukosewerte gibt und AAPS die Änderungen der Glukosewerte (Delta) nicht sicher berechnen kann. In dieser Situation kann der Loop nicht geschlossen werden. Um das rote Dreieck verschwinden zu lassen, musst Du jeweils einen der doppelten Glukosewerte löschen. Gehe auf den BYODA oder xDrip+ Reiter, wähle oben rechts das Löschen-Icon aus, markiere jeweils einen der doppelten Einträge und drücke erneut das Löschen-Icon. Bestätige das Löschen mit OK. (Das Löschen funktioniert in alten AAPS Versionen ggf. anders). Wenn es zu viele doppelte Glukosewerte geben sollte, muss eventuell die AAPS-Datenbank zurückgesetzt werden. Beim Zurücksetzen verlierst Du auch die bisherigen Statistiken, IOB, COB und das gewählte Profil.

Mögliche Ursache des Problems: xDrip und/oder NS, die nachträglich Glukosewerte eingetragen haben ('backfilling').

Das gelbe Dreieck zeigt eine verzögerte Übermittlung der Glukosewerte an. Es werden nicht alle 5 Minuten Glukosewerte empfangen (unregelmäßige oder fehlende Werte). Häufig ist das ein Problem von Libre-Sensoren. Das Problem tritt auch beim Wechsel des G6-Transmitters auf. Wenn das gelbe Dreieck durch den G6-Transmitter verursacht wird, verschwindet es nach einigen Stunden (rund 24h) automatisch. Bei Libre-Sensoren wird das gelbe Dreickeck permanent zu sehen sein. Der Loop kann trotzdem geschlossen werden und wird einwandfrei funktionieren.

### Can I move an active DASH Pod to other hardware?

Ja, das ist möglich. Beachte bitte, dass das Umziehen der Hardware als Funktionalität "nicht unterstützt" und "nicht getestet" ist. Es hat also ein Restrisiko. Am besten probierst Du das Vorgehen dann aus, wenn Dein Pod kurz vor dem Ablauf ist, sodass im Fehlerfall nicht viel schiefgehen kann und kein neuer Pod verloren geht.

Entscheidend ist, dass der Pumpen-Status ('state'), der die MAC-Adresse enthält, in AAPS und DASH beim erneuten Verbindungsaufbau übereinstimmen.

### Procedure I follow in this:

1) Trenne (suspend) den DASH. Damit wird sichergestellt, dass der DASH bei einem Verbindungsverlust DASH keine Befehle mehr ausführt. 2) Bringe Dein Smartphone in den Flugmodus, um 'BT', 'WLAN' und 'Mobile Daten' zu deaktivieren. So kann AAPS garantiert nicht mehr mit dem DASH kommunizieren. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Importiere die Einstellungen auf dem neuen Smartphone in AAPS. 7) Überprüfe, ob der Pod auf dem DASH Tab angezeigt wird. 8) Hebe den 'Suspend'-Status des Pod wieder auf. 9) Prüfe auf dem DASH Tab, dass er mit dem Pod kommuniziert (tippe auf 'Aktualisieren')

Gratulation! Du hast es geschafft!

*Moment!* Das Smartphone denkt noch, dass es sich mit dem selben (alten) DASH verbinden kann:

1) Wähle 'deaktivieren' auf dem alten Smartphone. Es kann nicht passieren. Das Smartphone ist noch immer im Flugmodus und kann daher den Pod nicht tatsächlich deaktivieren. 2) Die Deaktivierung wird erwartungsgemäß einen Kommunikationsfehler hervorrufen. 3) Tippe einfach ein paar Mal auf "Wiederholen", bis AAPS die Option "Verwerfen" des Pods anbietet.

Überprüfe, ob AAPS "kein aktiver Pod" meldet. Du kannst den Flugmodus jetzt wieder sicher deaktivieren.

### How do I import settings from earlier versions of AAPS into AAPS v3 ?

Du kannst nur Einstellungen (in AAPS v3) importieren, die zuvor mit AAPS v2.8.x oder v3.x exportiert wurden. Solltest Du eine Version älter als v2.8x nutzen oder Einstellungen aus älteren Version importieren wollen, musst Du, als Zwischenschritt, AAPS v2.8 installieren. Importiere die älteren Einstellungen in v2.8. Nachdem Du geprüft hast, das alles OK ist, kannst die Einstellungen aus v2.8 exportieren. Installiere AAPS v3 und importiere die gerade exportierten Einstellungen aus v2.8 in v3.

Wenn Du zum Erstellen der v2.8 und v3 den gleichen 'key' verwendest hast, wirst Du noch nicht einmal die Einstellungen importieren müssen. Du kannst dann v3 direkt auf v2.8 installieren.

Es wurden einige neue Ziele (Objectives) hinzugefügt. Du musst diese durchlaufen.