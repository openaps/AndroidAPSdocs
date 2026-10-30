# FAQ für Looper

How to add questions to the FAQ: Follow these [instructions](../SupportingAaps/HowToEditTheDocs.md)

## Allgemein

### Kann ich die AAPS Installationsdatei (apk) einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../SettingUpAaps/BuildingAaps.md) (engl. build). Das hat einen einfachen Grund:

Mit AAPS steuerst Du Deine Pumpe und deren Insulinabgabe. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(FAQ-how-to-begin)=

### Wie soll man beginnen?

Start with [Preparing to start with AAPS](../Getting-Started/PreparingForAaps.md): it walks you through everything below in more detail.

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

* Eine [unterstützte Insulinpumpe](../Getting-Started/CompatiblePumps.md), 
* ein [Android-Smartphone](../Getting-Started/Phones.md) (Apple iOS wird nicht von AAPS unterstützt - dafür kann [iOS Loop](https://loopkit.github.io/loopdocs/) eine Lösung sein) und
* ein [System zur kontinuierlichen Glukosemessung](../Getting-Started/CompatiblesCgms.md) (CGM; Sensor). 

Danach musst Du **Deine Software-Komponenten** einrichten: [AAPS](../SettingUpAaps/BuildingAaps.md), eine [CGM/FGM-Quelle](../Getting-Started/CompatiblesCgms.md) und einen [Server für Berichte](../SettingUpAaps/SettingUpTheReportingServer.md).

Als Drittes musst Du **das OpenAPS Referenz-Design lernen und verstehen, um Deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die [Basalraten und Kohlenhydratfaktoren](../SettingUpAaps/YourAapsProfile.md) stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass Du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn Du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. You can use [Autotune](#autotune-how-autotune-calculates-adjustments) to consider a large pool of data to suggest whether and how basals and/or ISF need to be adjusted, and also whether carb ratio needs to be changed. Oder Du bestimmst und testest Deine Basalrate auf die [altmodische Art](https://integrateddiabetes.com/basal-testing/).

### Was ist beim Loopen zweckmäßig?

#### Passwort-Schutz

If you don't want your settings to be easily changed, you can protect them with a password, a PIN or your phone's biometric authentication (fingerprint, face). Open **Settings** > **Protection** > **Settings protection** and choose the type of protection. You can also protect the whole app or only boluses in the same place. See [Settings protection](#Preferences-settings-protection) for details.

#### Android Wear Smartwatches

If you use the AAPS watch app to bolus or change settings, every request has to be confirmed on the watch: after you send it, the watch shows a summary with a **CONFIRM** button. See [Remote control from a Wear OS watch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Pumpe trennen

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Sport oder anderen Aktivitäten abnimmst, musst Du AAPS wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen.

The pump can be disconnected using the [loop icon](#AapsScreens-loop-status) on the AAPS main screen: press it and select **Disconnect pump** with the duration you need. If the activity takes longer than planned, press the icon again and pick a new duration: you don't need to reconnect first. See [Disconnecting the pump for showering or activity](#pumps-cannulas-disconnecting) for how to avoid a lack of insulin during long disconnections.

#### Empfehlungen basieren nicht auf einzelnem CGM-Wert

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Wenn Dein CGM nicht kontinuierlich Glukosewerte sendet, kann es deswegen etwas dauern bis AAPS Änderungen empfiehlt.

#### Weiterführende Literatur

There are several blogs with good tips to help you understand the practicalities of looping. Some of them are no longer online: the links below marked "archived copy" open a saved copy on the Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

* Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
* Pumpenbatterien
* Access to your backups, both on the phone and in the cloud (e.g. Google Drive, Dropbox), so that you can set up AAPS again on another phone (see [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md)): 
  * the current [apk](../SettingUpAaps/BuildingAaps.md) of AAPS and of any other apps you use (e.g. xDrip, Juggluco, BYODA).
  * your keystore file (from building the apk) and its password,
  * your latest settings export files from AAPS and your other apps,
  * your **AAPS** master password: you cannot import the settings file without it.

(FAQ-organize-backups)=

#### How to organize my backups?

Export settings very regularly: after each pod or reservoir change, after modifying your profile, when you have validated an objective, if you change your pump… Even if nothing changes, export once a month. Behalte mehrere alte Exportdateien.

**AAPS** can do this for you: it can export your settings automatically (for example with an [Automation](#ExportImportSettings-Automating-Settings-Export) after each pod change) and save the export directly to a cloud folder (Google Drive). See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

### Wie kann ich den CGM/FGM sicher und zuverlässig befestigen?

Du kannst es mit Tape fixieren. Es gibt mehrere vorperforierte 'Overpatches' für gängige CGM Systeme (Suche bei Google, eBay oder Amazon). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren. Sie können auch Oberarm - Armbänder kaufen, die das CGM/FGM mit einer Band fixieren (Suche bei Google, eBay oder Amazon).

## Der APS Algorithmus

### Why does OpenAPS AMA show "dia: 3" even though I have a different DIA in my profile?

With **OpenAPS AMA** selected in **Configuration** > **APS**, **Open plugin** shows the data sent to the algorithm. In its **Profile** section, `dia` is always 3.0 or less:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Andere Einstellungen

### Nightscout Einstellungen

(FAQ-nsclient-blocked)=

#### AAPSClient (or AAPS) does not upload data: "Blocked by…". Was kann ich tun?

The NSClient status shows why no data is sent:

* **Blocked by connectivity options**: the connection settings do not allow the current connection. For example, you are on cellular data but only Wi-Fi is allowed, or you are not on one of the allowed Wi-Fi networks (SSIDs).
* **Blocked by charging options**: the connection settings only allow syncing while the phone is charging (or only on battery), and this is not the case right now.
* **No connectivity**: the phone has no internet connection.

Check the [NSClient connection settings](#Preferences-nsclient): **Use cellular data**, **Use roaming**, **Use WiFi**, **WiFi SSID**, **Sync on battery** and **Sync while charging**.

### CGM Einstellungen

(FAQ-advanced-filtering)=

#### Why does AAPS say 'SMB always and after carbs disabled because active BG source doesn't support advanced filtering'?

**Enable SMB always** and **Enable SMB after carbs** can only be used with a [trusted BG data source](#GettingStarted-TrustedBGSource): a sensor and CGM app that can tell **AAPS** which sensor the readings come from. With any other BG source, **AAPS** switches these two options off and shows this message. Check the list of trusted sources and, if your sensor is listed, make sure you use one of the CGM apps shown for it. See also [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pumpe

#### Batterien

Looping can reduce the pump battery faster than normal use because the system interacts through Bluetooth far more than a manual user does. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem Du die Variable PUMP_WARN_BATT_P verwendest. Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Pumpenhistorie, Batteriestand und Reservoir-Füllstand solltest Du über AAPS checken.
* Das Android-Betriebssystem Deines Smartphones kann öfter das Schließen der AAPS-App erzwingen, um Energie zu sparen oder Speicher freizugeben. Mit jedem Neustart von AAPS, wird auch eine neue Bluetooth-Verbindung zur Pumpe aufgebaut und dabei auch die aktuelle Basalrate und das Bolus-Protokoll neu eingelesen. Das verbraucht viel Energie. To see if this is happening, enable **Log app start event** in the NSClient **Advanced settings**: Nightscout will receive an event at every restart of AAPS, which makes it easy to track the issue. To reduce this happening, turn off battery optimization for AAPS so that the phone stops closing it down: see [battery savings](#FAQ-battery-savings) below.
* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.
* for [Dana R/RS pumps](../CompatiblePumps/DanaRS-Insulin-Pump.md) the startup procedure draws a high current across the battery to purposefully break the passivation film (prevents loss of energy while in storage) but it doesn't always work to break it 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* beachte auch die zusätzlichen Tipps für [bestimmte Batterien](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Insulin-Reservoir und Katheter wechseln

The reservoir must be changed directly on the pump, then the change is recorded in **AAPS**. Follow the step-by-step [guide for changing the pump reservoir and cannula](#pumps-cannulas-changing-reservoir-and-cannula).

### Smartphone-Hintergrundbild

Das AAPS Hintergrundbild für Dein Smartphone findest Du auf der [Smartphones-Seite](#Phones-phone-wallpaper).

### Alltagsgebrauch

Many of the situations below can be prepared once as a [scene](#scenes): a preset that switches profile, temp target and other settings with one tap. **AAPS** offers ready-made templates, for example *Exercise*, *Sleep*, *Alcohol* or *Bathing*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für diesen kurzen Zeitraum benötigest Du sie möglicherweise nicht aber Du solltest AAPS sagen, dass Du die Verbindung getrennt hast, damit die IOB-Berechnungen korrekt sind. Siehe die [Beschreibung oben](#FAQ-disconnect-pump). The *Bathing* [scene](#scenes) template does this for you.

#### Arbeit

Je nach Job kannst Du verschiedene Behandlungsfaktoren an Werktagen anwenden. Als Looper solltest Du über einen [Profil-Wechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) für Deinen typischen Arbeitstag nachdenken. Zum Beispiel könntest Du zu einem Profil über 100% wechseln, wenn Du einen weniger anspruchsvollen Job hast (z. B. an einem Schreibtisch) oder weniger als 100%, wenn Du kontinuierlich körperlich während der Arbeit aktiv bist. Du kannst Dir auch überlegen ein höheres oder niedrigeres temporäres Ziel oder eine [Zeit-Verschiebung des Profils](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) zu wählen, wenn Du viel früher oder später als üblich arbeitest oder Schichtdienst hast. You can also create a second profile (e.g. 'home' and 'workday') and do a daily profile switch to the profile you actually need, or save your workday settings as a [scene](#scenes).

### Freizeitaktivitäten

(FAQ-sports)=

#### Sport

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

* Make a [profile switch](#ProfileSwitch-change-percentage) < 100%: tap the profile name on the main screen, tap the round **▶** button, then set **Percentage** and **Duration**.
* Setze ein [temporäres Ziel für Aktivität](#TempTargets-activity-temp-target), das oberhalb Deines Standardziels liegt. With a percentage below 100 % and a duration, the same **Activate** screen offers a **Temporary target / Activity** switch that starts both at once.
* Wenn Du SMBs nutzt, achte darauf, dass ["Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels"](#Open-APS-features-enable-smb-with-high-temp-targets) und ["SMB immer aktivieren"](#Open-APS-features-enable-smb-always) deaktiviert sind.

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

The *Exercise* and *Post-exercise Night* [scene](#scenes) templates bundle these settings, so you can start them with one tap. If you do sports regularly at the same time (i.e. sports class in your gym) you can consider using [automation](../DailyLifeWithAaps/Automations.md) to start the profile switch and TT, or the scene. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

#### Sex

Du kannst die Pumpe ablegen, um "frei" zu sein, aber Du solltest das Trennen in AAPS eingeben, damit die IOB-Berechnungen korrekt erfolgen können. Siehe die [Beschreibung oben](#FAQ-disconnect-pump).

#### Alkohol trinken

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst Deinen eigenen Weg finden damit umzugehen, kannst aber folgende AAPS-Funktionen nutzen:

* Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
* hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
* do a [profile switch](#ProfileSwitch-change-percentage) to noticeably less than 100% 

The *Alcohol* [scene](#scenes) template is a starting point you can adapt to your own method.

Wenn du Alkohol trinkst, musst du immer Dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

#### Schlafen

##### How can I loop during the night without mobile and Wi-Fi radiation?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. If you want the loop to support you when you are sleeping, proceed as follows (this will only work if your CGM app runs on the same phone as AAPS, such as xDrip, Juggluco or BYODA; it will NOT work if you get the BG-readings via Nightscout):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Some people have discovered problems with local broadcast (AAPS not receiving BG values from xDrip) when phone is in airplane mode. In xDrip, go to Settings > Inter-app settings > Identify receiver and enter `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

If you want different settings at night (for example a higher target), the *Sleep* [scene](#scenes) template is a good starting point.

#### Traveling

##### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. For other pumps see [time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) page for more details.

### Medizinische Themen

#### Krankenhausaufenthalt

Wenn Du dem Klinikpersonal einige Informationen über AAPS und DIY Looping geben willst, kannst Du [Für Mediziner und Fachpersonal - Eine allgemeine Einführung in und eine Anleitung für AAPS](../UsefulLinks/ClinicianGuideToAaps.md) ausdrucken.

#### Termin mit deinem betreuenden Arzt (Internisten)

##### Auswertung

Du kannst entweder Deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.

## Häufige Fragen auf Discord und ihre Antworten...

### Mein Problem ist hier nicht aufgeführt.

See [where to get help](../GettingHelp/WhereCanIGetHelp.md). If you found the solution yourself, **remind us to add it to this list!**

### Building and installing

(FAQ-build-errors)=

#### Ich habe Probleme und/oder Fehler beim Erstellen der App.

Please check the troubleshooting page for the way you build **AAPS** (see [Building AAPS](../SettingUpAaps/BuildingAaps.md)):

* building with a browser: [Browser build: troubleshooting](#aaps-ci-troubleshooting),
* building with Android Studio: [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Fehler beim App erstellen: Dateiname zu lang

This error can happen when building with Android Studio: the build stops with an error stating the file name is too long. Possible solutions: Move your sources to a directory closer to the root directory of your drive (e.g. "C:\src\AndroidAPS").

Von Android Studio: Stelle sicher, dass "Gradle" nach dem Öffnen des Projekts und dem Download von GitHub synchronisiert und indiziert ist. Führe Build -> Clean Project und danach Build -> Rebuild Project durch. Führe File -> Invalidate Caches... durch und starte Android Studio neu.

(FAQ-running-dev-version)=

#### Alarm: Entwickler-Version. Closed Loop ist nicht verfügbar.

**AAPS** shows this message when you run a development (dev) version without engineering mode: in a dev version, closed loop only works in engineering mode.

The dev version is meant for testing, not for actual looping: read [Development branch](../AdvancedOptions/DevBranch.md) before going further.

To turn on engineering mode:

1. Place a file named `engineering_mode` in the `extra` subfolder of your AAPS directory (the folder you chose in the setup wizard, usually `AAPS/extra`). Jede Datei funktioniert so lange wie sie korrekt benannt ist.
2. Restart **AAPS** so that it finds the file.

Tipp: Mache eine Kopie einer existierenden Logdatei und benenne sie in "engineering_mode" um (Aufpassen: keine Dateiendung!).

### Objectives (Ziele)

#### Ich stecke bei einem Ziel fest und brauche Hilfe.

First read [Completing the Objectives](../SettingUpAaps/CompletingTheObjectives.md). If you are still stuck, screen capture the question and answers and post them on the Discord AAPS channel. Vergiss nicht zu sagen, welche Optionen du wählst (oder nicht) und warum. Du erhältst Tipps und Hilfe, aber Du musst die Antworten selber finden.

### Settings, passwords and backups

(FAQ-reset-master-password)=

#### How to reset the master password?

If you forgot your master password, you can reset it to your pump's serial number:

1. Create an empty file named `PasswordReset` (no file extension) in the `extra` subfolder of your AAPS directory (usually `AAPS/extra`).
2. Restart **AAPS**. Your pump must be connected: **AAPS** shows "Waiting for pump…" and needs to read the pump serial number within 30 seconds.
3. **AAPS** shows "Password set!": your master password is now your **pump serial number**. The `PasswordReset` file is deleted automatically.
4. Open **Settings** > **Protection** > **Master password** and set a new password.

If the pump is not reached in time, nothing changes: check the pump connection and try again.

This only resets the master password. A settings, application or bolus password or PIN is not reset, but you can always use the master password instead of them.

    {admonition} Old settings files
    :class: warning
    Settings files exported with the old master password can only be imported with that old password.

(FAQ-where-are-settings-files)=

#### Wo finde ich die Einstellungsdateien?

Settings files are stored in the `preferences` subfolder of the AAPS directory you chose in the [setup wizard](#SetupWizard-StoragePermission) (for example `/internal storage/AAPS/preferences`). If you set up a cloud folder (Google Drive), your exports can also be saved there. See [Creating and restoring back-ups](../Maintenance/ExportImportSettings.md).

WARNUNG: Stelle sicher, dass Du Dein Passwort nicht verlierst, da Du ohne Passwort keine verschlüsselte Einstellungsdatei importieren kannst!

(FAQ-import-settings-earlier-versions)=

#### How do I import settings from earlier versions of AAPS into AAPS v3 or v4 ?

You can only import settings (in AAPS v3 or v4) that were exported using AAPS v2.8x or later. If you were using a version of AAPS older than v2.8x or you need to use setting exports older than v2.8x, then you need to install AAPS v2.8 first. Import the older settings of v2.x in v2.8. After checking that all is OK, you can export settings from v2.8. Install the current AAPS version and import v2.8 settings in it.

If you use the same key to build the old and the new version, you won't even have to import settings. You can install the new version over the old one.

Es wurden einige neue Ziele (Objectives) hinzugefügt. Du musst diese durchlaufen.

(FAQ-delete-treatments)=

#### Where can I delete treatments?

Open the **menu** (☰) and select **Treatments history**. Long press an entry to select it, tap more entries if needed, then tap the **trash can** icon and confirm. See [Treatments history](#aaps-screens-treatments).

### Phone and connection problems

(FAQ-aaps-stops)=

#### AAPS stoppt jeden Tag ungefähr zur gleichen Zeit.

* Google Play Protect may shut down **AAPS** every morning on some phones. If this happens, go to the Google Play options and disable **Google Play Protect**.
* Schaue, ob Du "Cleaner" oder "Reinigungs" Apps hast und deinstalliere diese.
* Turn off all battery optimizations for **AAPS** (see [battery savings](#FAQ-battery-savings) below).

(FAQ-battery-savings)=

#### Wie konfiguriere ich die Akkuoptimierung?

Your phone may suspend **AAPS** and related apps (CGM app, Bluetooth) when you are not using it. **AAPS** then cannot do its work, and Bluetooth connections to the sensor and pump (or RileyLink) may be shut down, causing "pump unreachable" alerts and communication errors.

Turn off battery optimization for **AAPS**, your CGM app (e.g. xDrip) and the Bluetooth system app. The way to do this depends on the phone's brand, model and Android version:

* see [Battery optimization](#generaltroubleshooting-android-related-issues) for Pixel, Samsung and Huawei phones,
* in **AAPS**, open the **menu** (☰) > **About** and tap **Don't kill my app?**, or visit [Don't kill my app](https://dontkillmyapp.com/) for other brands.

If you are not sure that battery savings cause your problem, you can temporarily turn off all battery savings on the phone: your battery will drain faster, but you will quickly see if the problem goes away.

(FAQ-pump-unreachable-alerts)=

#### Alarm Pumpe nicht erreichbar mehrmals am Tag oder in der Nacht.

Your phone may be suspending **AAPS** or even Bluetooth, causing it to lose the connection to the pump or RileyLink (see [battery savings](#FAQ-battery-savings) above).

You can also change when the alert is raised: press the **Settings** (gear) icon on the top right of the main screen, then select **Local alerts** > **Pump unreachable threshold** (30 to 300 minutes). Check your pump's page: some recommend a value, e.g. 120 minutes for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mein Link/Pumpe/Pod reagiert nicht (RL/OL/EmaLink…)

Bei manchen Smartphones treten Bluetooth-Verbindungsprobleme mit den Kommunikationsgeräten (RL/OL/EmaLink...) auf.

Einige haben auch nicht reagierende Verbindugnen zu ihren Geräten (AAPS sagt, dass sie verbunden sind, aber die Geräte können die Pumpe nicht erreichen oder Kommandos senden.)

First try the **Reset RileyLink** button on the pump screen (see your pump's page: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). If this does not help, the easiest way to get all these parts working together is:

1. Power off the Link.
2. Quit **AAPS** (**menu** (☰) > **Exit**).
3. Long press the **AAPS** icon, open the Android **App info**, tap **Force stop**, then **Storage** > **Clear cache** (do NOT clear storage/data!).
4. Rarely some phones may need a reboot here. Du kannst es ohne Neustart versuchen.
5. Power on the Link.
6. Start **AAPS**.
7. On the pump screen, tap **Pair RileyLink** and select your Link again.

### Remote-Steuerung

(FAQ-aapsclient)=

#### AAPSClient Remote App konfigurieren und nutzen

**AAPSClient** is a separate app that lets a caregiver follow and control **AAPS** remotely. Since **AAPS** v4, controlling **AAPS** from AAPSClient needs a one-time pairing between the two apps. See:

* [The AAPSClient app](#aapsclient-app): installing, first start and pairing,
* [Master ↔ Client control](#client-master-control): what can be controlled and how pairing works,
* [AAPSClient on a smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Treatments I enter on the Nightscout website are not applied

That is [hardened mode](#client-master-control-hardened-mode). While client control is on — always in Simple Mode — **AAPS** takes changes only from paired clients, not from the Nightscout website or other apps. Enter them on a paired **AAPSClient** instead.

### Alerts and warnings

#### I have a red warning badge (red triangle) / AAPS won't enable closed loop / Loop stays in LGS / I had a yellow triangle

The red warning badge on the BG source shortcut is a security feature in AAPS. See [BG warning sign](#aaps-screens-bg-warning-sign) for the full explanation.

A red warning badge on the BG source shortcut in the bottom bar (the red triangle of older versions) means that you have duplicate BGs and AAPS can't calculate precisely the deltas. A closed loop is switched to **Low Glucose Suspend** mode: it still reduces or suspends your basal to protect you against lows, but it gives no correction insulin. You need to delete one BG of each duplicated value in order to clear the warning. Tap the shortcut to open your [BG source screen](#aaps-screens-bg-source): the duplicate is highlighted in red. Long press one line you want to delete, check one of each lines that are doubled and tap the trash icon. Wenn es zu viele doppelte Glukosewerte geben sollte, muss eventuell die AAPS-Datenbank zurückgesetzt werden. Beim Zurücksetzen verlierst Du auch die bisherigen Statistiken, IOB, COB und das gewählte Profil.

Once the warning is gone, AAPS does not go back to **Closed Loop** by itself. Press the loop icon on the main screen and select **Closed Loop** again.

Mögliche Ursache des Problems: xDrip und/oder NS, die nachträglich Glukosewerte eingetragen haben ('backfilling').

The yellow triangle of older versions meant unstable delay between each BG reading (BGs not received every 5 min regularly, or missing BGs), which often happens with Libre or after a G6 transmitter change. **AAPS** 4 no longer shows it: it recalculates the values in the background and the loop works correctly.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Can I move an active DASH Pod to another phone?

The Pod state is included in the exported settings, so an active Pod can be moved to another phone by exporting the settings right before the move and importing them on the other phone. This is not officially supported and there is a risk of losing the Pod: if possible, try it when your Pod is about to expire.

Read these sections first:

* [Export and import settings](#omnipod-dash-export-import) on the Omnipod DASH page, and [Tubeless pumps](#ExportImportSettings-tubeless-pumps): on the new phone, tick **Also replace pump settings** and use a file exported during the Pod you are wearing now,
* [Discarding a pod](#omnipod-dash-discard-pod), to remove the Pod from the old phone afterwards. Keep the old phone in airplane mode until the Pod is discarded, so that both phones never talk to the Pod.