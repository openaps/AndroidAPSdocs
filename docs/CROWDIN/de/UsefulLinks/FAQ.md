# FAQ für Looper

So fügst Du Fragen zu den FAQ hinzu: Folge dieser [Anleitung](../SupportingAaps/HowToEditTheDocs.md)

## Allgemein

### Kann ich die AAPS Installationsdatei (apk) einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../SettingUpAaps/BuildingAaps.md) (engl. build). Das hat einen einfachen Grund:

Mit AAPS steuerst Du Deine Pumpe und deren Insulinabgabe. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(FAQ-how-to-begin)=

### Wie soll man beginnen?

Beginne mit [Vorbereitung für den Start mit AAPS](../Getting-Started/PreparingForAaps.md): Dort wird alles Folgende ausführlicher erklärt.

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

* Eine [unterstützte Insulinpumpe](../Getting-Started/CompatiblePumps.md), 
* ein [Android-Smartphone](../Getting-Started/Phones.md) (Apple iOS wird nicht von AAPS unterstützt - dafür kann [iOS Loop](https://loopkit.github.io/loopdocs/) eine Lösung sein) und
* ein [System zur kontinuierlichen Glukosemessung](../Getting-Started/CompatiblesCgms.md) (CGM; Sensor). 

Danach musst Du **Deine Software-Komponenten** einrichten: [AAPS](../SettingUpAaps/BuildingAaps.md), eine [CGM/FGM-Quelle](../Getting-Started/CompatiblesCgms.md) und einen [Server für Berichte](../SettingUpAaps/SettingUpTheReportingServer.md).

Als Drittes musst Du **das OpenAPS Referenz-Design lernen und verstehen, um Deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die [Basalraten und Kohlenhydratfaktoren](../SettingUpAaps/YourAapsProfile.md) stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass Du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn Du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. [Autotune](#autotune-how-autotune-calculates-adjustments) kann eine Möglichkeit sein, große Datenmengen zu analysieren und daraus abzuleiten, ob und wie die Basalrate und/oder Korrekturfaktoren (engl. ISF) angepasst werden müssen und auch, ob die Mahlzeitenfaktoren (engl. carb ratio) geändert werden müssen. Oder Du bestimmst und testest Deine Basalrate auf die [altmodische Art](https://integrateddiabetes.com/basal-testing/).

### Was ist beim Loopen zweckmäßig?

#### Passwort-Schutz

Wenn Deine Einstellungen nicht so leicht geändert werden sollen, kannst Du sie mit einem Passwort, einer PIN oder der biometrischen Authentifizierung Deines Smartphones (Fingerabdruck, Gesicht) schützen. Öffne **Einstellungen** > **Zugriffsschutz** > **Schutz der Einstellungen** und wähle die Art des Schutzes. An derselben Stelle kannst Du auch die ganze App oder nur die Boli schützen. Details findest Du unter [Schutz der Einstellungen](#Preferences-settings-protection).

#### Android Wear Smartwatches

Wenn Du mit der AAPS-Smartwatch-App Boli abgibst oder Einstellungen änderst, muss jede Anfrage auf der Smartwatch bestätigt werden: Nach dem Senden zeigt die Smartwatch eine Zusammenfassung mit dem Knopf **BESTÄTIGEN**. Siehe [Steuerung über eine Wear OS-Smartwatch](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Pumpe trennen

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Sport oder anderen Aktivitäten abnimmst, musst Du AAPS wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen.

Die Pumpe kannst Du über das [Loop-Symbol](#AapsScreens-loop-status) auf dem AAPS-Startbildschirm trennen: Tippe darauf und wähle **Pumpe trennen** mit der gewünschten Dauer. Dauert die Aktivität länger als geplant, tippe erneut auf das Symbol und wähle eine neue Dauer: Du musst die Pumpe vorher nicht wieder verbinden. Wie Du bei langen Trennungen einen Insulinmangel vermeidest, findest Du unter [Die Pumpe zum Duschen oder für Aktivitäten trennen](#pumps-cannulas-disconnecting).

#### Empfehlungen basieren nicht auf einzelnem CGM-Wert

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Wenn Dein CGM nicht kontinuierlich Glukosewerte sendet, kann es deswegen etwas dauern bis AAPS Änderungen empfiehlt.

#### Weiterführende Literatur

Es gibt mehrere Blogs mit guten Tipps, die Dir helfen, das Loopen im Alltag zu verstehen. Einige davon sind nicht mehr online: Die unten mit „archived copy“ markierten Links öffnen eine gespeicherte Kopie im Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (archived copy)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (archived copy)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (archived copy)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

* Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
* Pumpenbatterien
* Zugriff auf Deine Backups, sowohl auf dem Smartphone als auch in der Cloud (z. B. Google Drive, Dropbox), damit Du AAPS auf einem anderen Smartphone neu einrichten kannst (siehe [Backups erstellen und wiederherstellen](../Maintenance/ExportImportSettings.md)): 
  * die aktuelle [APK](../SettingUpAaps/BuildingAaps.md) von AAPS und von allen anderen Apps, die Du nutzt (z. B. xDrip, Juggluco, BYODA),
  * Deine Keystore-Datei (vom Erstellen der APK) und ihr Passwort,
  * Deine neuesten Einstellungs-Exportdateien von AAPS und Deinen anderen Apps,
  * Dein **AAPS**-Master-Passwort: Ohne es kannst Du die Einstellungsdatei nicht importieren.

(FAQ-organize-backups)=

#### Wie organisiere ich meine Backups?

Exportiere Deine Einstellungen sehr regelmäßig: nach jedem Pod- oder Reservoirwechsel, nach Änderungen an Deinem Profil, wenn Du ein Ziel abgeschlossen hast, wenn Du die Pumpe wechselst … Auch wenn sich nichts ändert, exportiere einmal im Monat. Behalte mehrere alte Exportdateien.

**AAPS** kann das für Dich übernehmen: Es kann Deine Einstellungen automatisch exportieren (zum Beispiel mit einer [Automatisierung](#ExportImportSettings-Automating-Settings-Export) nach jedem Pod-Wechsel) und den Export direkt in einem Cloud-Ordner (Google Drive) speichern. Siehe [Backups erstellen und wiederherstellen](../Maintenance/ExportImportSettings.md).

### Wie kann ich den CGM/FGM sicher und zuverlässig befestigen?

Du kannst es mit Tape fixieren. Es gibt mehrere vorperforierte 'Overpatches' für gängige CGM Systeme (Suche bei Google, eBay oder Amazon). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren. Sie können auch Oberarm - Armbänder kaufen, die das CGM/FGM mit einer Band fixieren (Suche bei Google, eBay oder Amazon).

## Der APS Algorithmus

### Warum zeigt OpenAPS AMA „dia: 3“, obwohl in meinem Profil eine andere DIA eingestellt ist?

Wenn unter **Konfiguration** > **APS** **OpenAPS AMA** ausgewählt ist, zeigt **Plugin öffnen** die Daten, die an den Algorithmus gesendet werden. Im Abschnitt **Profil** steht `dia` immer auf 3.0 oder weniger:

![OpenAPS AMA plugin screen with dia 3.0 in the profile data](../images/screens/openaps_ama_plugin.png)

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Andere Einstellungen

### Nightscout Einstellungen

(FAQ-nsclient-blocked)=

#### AAPSClient (oder AAPS) lädt keine Daten hoch: „Blockiert durch …“. Was kann ich tun?

Der NSClient-Status zeigt, warum keine Daten gesendet werden:

* **Blockiert durch Verbindungsoptionen**: Die Verbindungseinstellungen erlauben die aktuelle Verbindung nicht. Zum Beispiel nutzt Du mobile Daten, es ist aber nur WLAN erlaubt, oder Du bist in keinem der erlaubten WLAN-Netze (SSIDs).
* **Blockiert durch Ladeoptionen**: Die Verbindungseinstellungen erlauben die Synchronisierung nur beim Laden (oder nur im Akkubetrieb), und das ist gerade nicht der Fall.
* **Keine Verbindung**: Das Smartphone hat keine Internetverbindung.

Prüfe die [Verbindungseinstellungen des NSClient](#Preferences-nsclient): **Mobile Daten verwenden**, **Roaming verwenden**, **WLAN verwenden**, **WLAN SSID**, **Synchronisieren bei Akku** und **Synchronisieren während des Ladens**.

### CGM Einstellungen

(FAQ-advanced-filtering)=

#### Warum meldet AAPS „SMB wird immer und nach Kohlenhydraten deaktiviert, weil die aktive BZ-Quelle keine geeignete Filterung der Werte unterstützt.“?

**SMB immer aktivieren** und **SMB nach Mahlzeiten aktivieren** können nur mit einer [vertrauenswürdigen BZ-Datenquelle](#GettingStarted-TrustedBGSource) genutzt werden: einem Sensor mit CGM-App, die **AAPS** mitteilen kann, von welchem Sensor die Werte stammen. Bei jeder anderen BZ-Quelle schaltet **AAPS** diese beiden Optionen aus und zeigt diese Meldung. Prüfe die Liste der vertrauenswürdigen Quellen und stelle, falls Dein Sensor dort aufgeführt ist, sicher, dass Du eine der dafür genannten CGM-Apps nutzt. Siehe auch [Glättung der Glukosewerte](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pumpe

#### Batterien

Das Loopen kann die Pumpenbatterie schneller entladen als die normale Nutzung, weil das System viel häufiger über Bluetooth kommuniziert als ein Mensch bei manueller Bedienung. Es wird deshalb empfohlen, die Batterie spätestens bei 25% Ladung zu wechseln, weil dabei die Datenübertragung schon schwieriger werden kann. Du kannst einen Batterieladungsalarm in Nightscout erstellen, indem Du die Variable PUMP_WARN_BATT_P verwendest. Tipps um die Batteriedauer zu erhöhen:

* verringere die Zeit, bis der Bildschirm der Pumpe sich abschaltet (im Pumpenmenü)
* Reduziere die Dauer der Displaybeleuchtung bei der Pumpe.
* Stelle die Pumpenbenachrichtigung auf Töne statt Vibrieren.
* benutze die Knöpfe auf der Pumpe nur zum Befüllen, alle weiteren Informationen wie Pumpenhistorie, Batteriestand und Reservoir-Füllstand solltest Du über AAPS checken.
* Das Android-Betriebssystem Deines Smartphones kann öfter das Schließen der AAPS-App erzwingen, um Energie zu sparen oder Speicher freizugeben. Mit jedem Neustart von AAPS, wird auch eine neue Bluetooth-Verbindung zur Pumpe aufgebaut und dabei auch die aktuelle Basalrate und das Bolus-Protokoll neu eingelesen. Das verbraucht viel Energie. Um zu sehen, ob das passiert, aktiviere **App-Start protokollieren** in den **Erweiterten Einstellungen** des NSClient: Nightscout erhält dann bei jedem Neustart von AAPS ein Ereignis, so lässt sich das Problem leicht verfolgen. Damit das seltener passiert, schalte die Akku-Optimierung für AAPS aus, damit das Smartphone AAPS nicht mehr beendet: siehe [Energiesparfunktionen](#FAQ-battery-savings) unten.
* reinige die Batteriepole mit Alkohol um sicherzustellen, dass keine herstellungsbedingten Wachs- oder Fettreste mehr vorhanden sind.
* Bei [Dana R/RS-Pumpen](../CompatiblePumps/DanaRS-Insulin-Pump.md) zieht der Startvorgang einen hohen Strom aus der Batterie, um gezielt den Passivierungsfilm aufzubrechen (er verhindert Energieverlust bei der Lagerung). Das gelingt aber nicht immer zu 100 %. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
* beachte auch die zusätzlichen Tipps für [bestimmte Batterien](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Insulin-Reservoir und Katheter wechseln

Das Reservoir muss direkt an der Pumpe gewechselt werden, danach wird der Wechsel in **AAPS** erfasst. Folge der [Schritt-für-Schritt-Anleitung zum Wechsel von Reservoir und Kanüle](#pumps-cannulas-changing-reservoir-and-cannula).

### Smartphone-Hintergrundbild

Das AAPS Hintergrundbild für Dein Smartphone findest Du auf der [Smartphones-Seite](#Phones-phone-wallpaper).

### Alltagsgebrauch

Viele der folgenden Situationen kannst Du einmalig als [Szene](#scenes) vorbereiten: eine Voreinstellung, die Profil, temporäres Ziel und andere Einstellungen mit einem Tippen umschaltet. **AAPS** bietet fertige Vorlagen, zum Beispiel *Bewegung*, *Schlaf*, *Alkohol* oder *Baden*.

#### Hygiene

(what-to-do-when-taking-a-shower-or-bath)=

##### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für diesen kurzen Zeitraum benötigest Du sie möglicherweise nicht aber Du solltest AAPS sagen, dass Du die Verbindung getrennt hast, damit die IOB-Berechnungen korrekt sind. Siehe die [Beschreibung oben](#FAQ-disconnect-pump). Die [Szenen](#scenes)-Vorlage *Baden* erledigt das für Dich.

#### Arbeit

Je nach Job kannst Du verschiedene Behandlungsfaktoren an Werktagen anwenden. Als Looper solltest Du über einen [Profil-Wechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) für Deinen typischen Arbeitstag nachdenken. Zum Beispiel könntest Du zu einem Profil über 100% wechseln, wenn Du einen weniger anspruchsvollen Job hast (z. B. an einem Schreibtisch) oder weniger als 100%, wenn Du kontinuierlich körperlich während der Arbeit aktiv bist. Du kannst auch ein hohes oder niedriges temporäres Ziel oder eine [Zeitverschiebung Deines Profils](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) in Betracht ziehen, wenn Du viel früher oder später als üblich arbeitest oder im Schichtdienst arbeitest. Du kannst auch ein zweites Profil anlegen (z. B. „Zuhause“ und „Arbeitstag“) und täglich einen Profilwechsel zu dem Profil machen, das Du gerade brauchst, oder Deine Einstellungen für den Arbeitstag als [Szene](#scenes) speichern.

### Freizeitaktivitäten

(FAQ-sports)=

#### Sport

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

* Mache einen [Profilwechsel](#ProfileSwitch-change-percentage) unter 100 %: Tippe auf dem Startbildschirm auf den Profilnamen, tippe auf den runden Knopf **▶** und stelle dann **Prozentsatz** und **Dauer** ein.
* Setze ein [temporäres Ziel für Aktivität](#TempTargets-activity-temp-target), das oberhalb Deines Standardziels liegt. Mit einem Prozentsatz unter 100 % und einer Dauer bietet derselbe Bildschirm **Aktivieren** einen Schalter **Temporäres Ziel / Aktivität**, der beides gleichzeitig startet.
* Wenn Du SMBs nutzt, achte darauf, dass ["Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels"](#Open-APS-features-enable-smb-with-high-temp-targets) und ["SMB immer aktivieren"](#Open-APS-features-enable-smb-always) deaktiviert sind.

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

Die [Szenen](#scenes)-Vorlagen *Bewegung* und *Nach der Bewegung (Nacht)* bündeln diese Einstellungen, sodass Du sie mit einem Tippen starten kannst. Wenn Du regelmäßig zur gleichen Zeit Sport machst (z. B. ein Kurs in Deinem Fitnessstudio), kannst Du überlegen, Profilwechsel und TT oder die Szene über eine [Automatisierung](../DailyLifeWithAaps/Automations.md) zu starten. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

#### Sex

Du kannst die Pumpe ablegen, um "frei" zu sein, aber Du solltest das Trennen in AAPS eingeben, damit die IOB-Berechnungen korrekt erfolgen können. Siehe die [Beschreibung oben](#FAQ-disconnect-pump).

#### Alkohol trinken

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst Deinen eigenen Weg finden damit umzugehen, kannst aber folgende AAPS-Funktionen nutzen:

* Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
* hohe temporäre Ziele setzen und UAM deaktivieren, damit der Loop das IOB nicht wegen einer unangekündigten Mahlzeit erhöht, oder
* mache einen [Profilwechsel](#ProfileSwitch-change-percentage) auf deutlich unter 100 % 

Die [Szenen](#scenes)-Vorlage *Alkohol* ist ein Ausgangspunkt, den Du an Deine eigene Methode anpassen kannst.

Wenn du Alkohol trinkst, musst du immer Dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

#### Schlafen

##### Wie kann ich nachts ohne Mobilfunk- und WLAN-Strahlung loopen?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. Wenn der Loop Dich im Schlaf unterstützen soll, gehe so vor (das funktioniert nur, wenn Deine CGM-App auf demselben Smartphone läuft wie AAPS, z. B. xDrip, Juggluco oder BYODA; es funktioniert NICHT, wenn Du die Glukosewerte über Nightscout bekommst):

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Manche Nutzer haben Probleme mit dem lokalen Broadcast festgestellt (AAPS empfängt keine Glukosewerte von xDrip), wenn das Smartphone im Flugmodus ist. Gehe in xDrip zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gib `info.nightscout.androidaps` ein.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Wenn Du nachts andere Einstellungen möchtest (zum Beispiel einen höheren Zielwert), ist die [Szenen](#scenes)-Vorlage *Schlaf* ein guter Ausgangspunkt.

#### Reisen

##### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. Für andere Pumpen findest Du weitere Details auf der Seite [Reisen mit Zeitzonenwechsel](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

### Medizinische Themen

#### Krankenhausaufenthalt

Wenn Du dem Klinikpersonal einige Informationen über AAPS und DIY Looping geben willst, kannst Du [Für Mediziner und Fachpersonal - Eine allgemeine Einführung in und eine Anleitung für AAPS](../UsefulLinks/ClinicianGuideToAaps.md) ausdrucken.

#### Termin mit deinem betreuenden Arzt (Internisten)

##### Auswertung

Du kannst entweder Deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.

## Häufige Fragen auf Discord und ihre Antworten...

### Mein Problem ist hier nicht aufgeführt.

Siehe [Wo bekomme ich Hilfe?](../GettingHelp/WhereCanIGetHelp.md). Wenn Du die Lösung selbst gefunden hast, **erinnere uns daran, sie in diese Liste aufzunehmen!**

### Erstellen und Installieren

(FAQ-build-errors)=

#### Ich habe Probleme und/oder Fehler beim Erstellen der App.

Sieh Dir bitte die Seite zur Fehlerbehebung für die Art an, wie Du **AAPS** erstellst (siehe [AAPS erstellen](../SettingUpAaps/BuildingAaps.md)):

* Erstellen im Browser: [Browser-Build: Fehlerbehebung](#aaps-ci-troubleshooting),
* Erstellen mit Android Studio: [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Fehler beim App erstellen: Dateiname zu lang

Dieser Fehler kann beim Erstellen mit Android Studio auftreten: Der Build bricht mit der Fehlermeldung ab, dass der Dateiname zu lang ist. Mögliche Lösungen: Verschiebe Deine Quellen in ein Verzeichnis näher am Stammverzeichnis Deines Laufwerks (z. B. "C:\src\AndroidAPS").

Von Android Studio: Stelle sicher, dass "Gradle" nach dem Öffnen des Projekts und dem Download von GitHub synchronisiert und indiziert ist. Führe Build -> Clean Project und danach Build -> Rebuild Project durch. Führe File -> Invalidate Caches... durch und starte Android Studio neu.

(FAQ-running-dev-version)=

#### Alarm: Entwickler-Version. Closed Loop ist nicht verfügbar.

**AAPS** zeigt diese Meldung, wenn Du eine Entwicklungsversion (dev) ohne Entwickler-Modus nutzt: In einer dev-Version funktioniert der Closed Loop nur im Entwickler-Modus.

Die dev-Version ist zum Testen gedacht, nicht zum echten Loopen: Lies [Entwicklungszweig](../AdvancedOptions/DevBranch.md), bevor Du weitermachst.

So schaltest Du den Entwickler-Modus ein:

1. Lege eine Datei namens `engineering_mode` im Unterordner `extra` Deines AAPS-Verzeichnisses ab (der Ordner, den Du im Einrichtungsassistenten gewählt hast, meist `AAPS/extra`). Jede Datei funktioniert so lange wie sie korrekt benannt ist.
2. Starte **AAPS** neu, damit es die Datei findet.

Tipp: Mache eine Kopie einer existierenden Logdatei und benenne sie in "engineering_mode" um (Aufpassen: keine Dateiendung!).

### Objectives (Ziele)

#### Ich stecke bei einem Ziel fest und brauche Hilfe.

Lies zuerst [Die Ziele abschließen](../SettingUpAaps/CompletingTheObjectives.md). Wenn Du dann immer noch nicht weiterkommst, mache einen Screenshot von Frage und Antworten und poste ihn im AAPS-Kanal auf Discord. Vergiss nicht zu sagen, welche Optionen du wählst (oder nicht) und warum. Du erhältst Tipps und Hilfe, aber Du musst die Antworten selber finden.

### Einstellungen, Passwörter und Backups

(FAQ-reset-master-password)=

#### Wie setze ich das Master-Passwort zurück?

Wenn Du Dein Master-Passwort vergessen hast, kannst Du es auf die Seriennummer Deiner Pumpe zurücksetzen:

1. Lege eine leere Datei namens `PasswordReset` (ohne Dateiendung) im Unterordner `extra` Deines AAPS-Verzeichnisses an (meist `AAPS/extra`).
2. Starte **AAPS** neu. Deine Pumpe muss verbunden sein: **AAPS** zeigt „Warte auf Pumpe…“ und muss die Seriennummer der Pumpe innerhalb von 30 Sekunden auslesen.
3. **AAPS** zeigt „Passwort festgelegt!“: Dein Master-Passwort ist jetzt die **Seriennummer Deiner Pumpe**. Die Datei `PasswordReset` wird automatisch gelöscht.
4. Öffne **Einstellungen** > **Zugriffsschutz** > **Master-Passwort** und lege ein neues Passwort fest.

Wird die Pumpe nicht rechtzeitig erreicht, ändert sich nichts: Prüfe die Verbindung zur Pumpe und versuche es erneut.

Damit wird nur das Master-Passwort zurückgesetzt. Ein Passwort oder eine PIN für Einstellungen, App oder Bolus wird nicht zurückgesetzt, Du kannst aber stattdessen jederzeit das Master-Passwort verwenden.

    {admonition} Alte Einstellungsdateien
    :class: warning
    Einstellungsdateien, die mit dem alten Master-Passwort exportiert wurden, lassen sich nur mit diesem alten Passwort importieren.

(FAQ-where-are-settings-files)=

#### Wo finde ich die Einstellungsdateien?

Einstellungsdateien werden im Unterordner `preferences` des AAPS-Verzeichnisses gespeichert, das Du im [Einrichtungsassistenten](#SetupWizard-StoragePermission) gewählt hast (zum Beispiel `/internal storage/AAPS/preferences`). Wenn Du einen Cloud-Ordner (Google Drive) eingerichtet hast, können Deine Exporte auch dort gespeichert werden. Siehe [Backups erstellen und wiederherstellen](../Maintenance/ExportImportSettings.md).

WARNUNG: Stelle sicher, dass Du Dein Passwort nicht verlierst, da Du ohne Passwort keine verschlüsselte Einstellungsdatei importieren kannst!

(FAQ-import-settings-earlier-versions)=

#### Wie importiere ich Einstellungen aus älteren AAPS-Versionen in AAPS v3 oder v4?

Du kannst (in AAPS v3 oder v4) nur Einstellungen importieren, die mit AAPS v2.8x oder neuer exportiert wurden. Wenn Du eine AAPS-Version älter als v2.8x genutzt hast oder Einstellungsexporte von vor v2.8x verwenden musst, musst Du zuerst AAPS v2.8 installieren. Importiere die älteren Einstellungen von v2.x in v2.8. Wenn Du geprüft hast, dass alles in Ordnung ist, exportiere die Einstellungen aus v2.8. Installiere dann die aktuelle AAPS-Version und importiere dort die Einstellungen aus v2.8.

Wenn Du für die alte und die neue Version denselben Schlüssel zum Erstellen verwendest, musst Du die Einstellungen nicht einmal importieren. Du kannst die neue Version über die alte installieren.

Es wurden einige neue Ziele (Objectives) hinzugefügt. Du musst diese durchlaufen.

(FAQ-delete-treatments)=

#### Wo kann ich Behandlungen löschen?

Öffne das **Menü** (☰) und wähle **Behandlungsverlauf**. Tippe lange auf einen Eintrag, um ihn auszuwählen, tippe bei Bedarf weitere Einträge an, tippe dann auf das Symbol **Papierkorb** und bestätige. Siehe [Behandlungsverlauf](#aaps-screens-treatments).

### Probleme mit Smartphone und Verbindung

(FAQ-aaps-stops)=

#### AAPS stoppt jeden Tag ungefähr zur gleichen Zeit.

* Auf manchen Smartphones beendet Google Play Protect **AAPS** jeden Morgen. Passiert das, gehe in die Google Play-Optionen und deaktiviere **Google Play Protect**.
* Schaue, ob Du "Cleaner" oder "Reinigungs" Apps hast und deinstalliere diese.
* Schalte alle Akku-Optimierungen für **AAPS** aus (siehe [Energiesparfunktionen](#FAQ-battery-savings) unten).

(FAQ-battery-savings)=

#### Wie konfiguriere ich die Akkuoptimierung?

Dein Smartphone kann **AAPS** und zugehörige Apps (CGM-App, Bluetooth) anhalten, wenn Du es nicht benutzt. **AAPS** kann dann seine Arbeit nicht machen, und die Bluetooth-Verbindungen zu Sensor und Pumpe (oder RileyLink) können abbrechen. Das führt zu Alarmen „Pumpe nicht erreichbar“ und zu Kommunikationsfehlern.

Schalte die Akku-Optimierung für **AAPS**, Deine CGM-App (z. B. xDrip) und die Bluetooth-System-App aus. Wie das geht, hängt von Marke, Modell und Android-Version Deines Smartphones ab:

* siehe [Akku-Optimierung](#generaltroubleshooting-android-related-issues) für Pixel-, Samsung- und Huawei-Smartphones,
* öffne in **AAPS** das **Menü** (☰) > **Über** und tippe auf **Meine App nicht beenden?** oder besuche für andere Marken [Don't kill my app](https://dontkillmyapp.com/).

Wenn Du nicht sicher bist, ob Energiesparfunktionen Dein Problem verursachen, kannst Du vorübergehend alle Energiesparfunktionen des Smartphones ausschalten: Der Akku wird dann schneller leer, aber Du siehst schnell, ob das Problem verschwindet.

(FAQ-pump-unreachable-alerts)=

#### Alarm Pumpe nicht erreichbar mehrmals am Tag oder in der Nacht.

Dein Smartphone hält vielleicht **AAPS** oder sogar Bluetooth an, sodass die Verbindung zur Pumpe oder zum RileyLink verloren geht (siehe [Energiesparfunktionen](#FAQ-battery-savings) oben).

Du kannst auch ändern, wann der Alarm ausgelöst wird: Tippe oben rechts auf dem Startbildschirm auf das Symbol **Einstellungen** (Zahnrad) und wähle dann **Lokale Alarme** > **Grenzwert für Pumpe ist nicht erreichbar** (30 bis 300 Minuten). Sieh auf der Seite Deiner Pumpe nach: Für manche wird ein Wert empfohlen, z. B. 120 Minuten für [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Mein Link/Pumpe/Pod reagiert nicht (RL/OL/EmaLink…)

Bei manchen Smartphones kommt es zu Bluetooth-Abbrüchen zu den Links (RL/OL/EmaLink).

Einige haben auch nicht reagierende Verbindugnen zu ihren Geräten (AAPS sagt, dass sie verbunden sind, aber die Geräte können die Pumpe nicht erreichen oder Kommandos senden).

Versuche zuerst den Knopf **RileyLink zurücksetzen** im Pumpen-Bildschirm (siehe die Seite Deiner Pumpe: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Hilft das nicht, bringst Du alle Teile am einfachsten so wieder zum Zusammenspiel:

1. Schalte den Link aus.
2. Beende **AAPS** (**Menü** (☰) > **Beenden**).
3. Tippe lange auf das **AAPS**-Symbol, öffne die Android-**App-Info**, tippe auf **Beenden erzwingen** und dann auf **Speicher** > **Cache leeren** (NICHT den Speicher bzw. die Daten löschen!).
4. Selten muss das Smartphone an dieser Stelle neu gestartet werden. Du kannst es ohne Neustart versuchen.
5. Schalte den Link ein.
6. Starte **AAPS**.
7. Tippe im Pumpen-Bildschirm auf **Rileylink verbinden** und wähle Deinen Link erneut aus.

### Remote-Steuerung

(FAQ-aapsclient)=

#### AAPSClient Remote App konfigurieren und nutzen

**AAPSClient** ist eine eigene App, mit der eine Betreuungsperson **AAPS** per Fernüberwachung verfolgen und fernsteuern kann. Seit **AAPS** v4 braucht die Steuerung von **AAPS** über AAPSClient eine einmalige Kopplung der beiden Apps. Siehe:

* [Die AAPSClient-App](#aapsclient-app): Installation, erster Start und Kopplung,
* [Master ↔ Client-Steuerung](#client-master-control): was gesteuert werden kann und wie die Kopplung funktioniert,
* [AAPSClient auf einer Smartwatch](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Behandlungen, die ich auf der Nightscout-Website eingebe, werden nicht übernommen

Das ist der [geschützte Modus](#client-master-control-hardened-mode). Solange die Client-Steuerung eingeschaltet ist (im einfachen Modus immer), übernimmt **AAPS** Änderungen nur von gekoppelten Clients, nicht von der Nightscout-Website oder anderen Apps. Gib sie stattdessen in einem gekoppelten **AAPSClient** ein.

### Alarme und Warnungen

#### Ich habe ein rotes Warnzeichen (rotes Dreieck) / AAPS aktiviert den Closed Loop nicht / Der Loop bleibt in LGS / Ich hatte ein gelbes Dreieck

Das rote Warnzeichen an der Verknüpfung zur BZ-Quelle ist eine Sicherheitsfunktion von AAPS. Die vollständige Erklärung findest Du unter [BZ-Warnzeichen](#aaps-screens-bg-warning-sign).

Ein rotes Warnzeichen an der Verknüpfung zur BZ-Quelle in der unteren Leiste (das rote Dreieck älterer Versionen) bedeutet, dass doppelte Glukosewerte vorliegen und AAPS die Deltas nicht genau berechnen kann. Ein Closed Loop wird in den Modus **Unterbrechung bei niedrigem BZ (LGS)** umgeschaltet: Er senkt oder unterbricht weiterhin Deine Basalrate, um Dich vor Unterzuckerungen zu schützen, gibt aber kein Korrekturinsulin. Um die Warnung zu beseitigen, musst Du von jedem doppelten Wert einen Glukosewert löschen. Tippe auf die Verknüpfung, um den Bildschirm Deiner [BZ-Quelle](#aaps-screens-bg-source) zu öffnen: Der doppelte Wert ist rot hervorgehoben. Tippe lange auf eine Zeile, die Du löschen möchtest, hake von jeder doppelten Zeile eine an und tippe auf das Papierkorb-Symbol. Wenn es zu viele doppelte Glukosewerte geben sollte, muss eventuell die AAPS-Datenbank zurückgesetzt werden. In diesem Fall verlierst Du außerdem Statistiken, IOB, COB und das gewählte Profil.

Wenn die Warnung verschwunden ist, kehrt AAPS nicht von selbst zum **Closed Loop** zurück. Tippe auf dem Startbildschirm auf das Loop-Symbol und wähle wieder **Closed Loop**.

Mögliche Ursache des Problems: xDrip und/oder NS, die nachträglich Glukosewerte eingetragen haben ('backfilling').

Das gelbe Dreieck älterer Versionen bedeutete unregelmäßige Abstände zwischen den Glukosewerten (Werte kommen nicht regelmäßig alle 5 Minuten oder fehlen), was oft bei Libre oder nach einem Transmitterwechsel beim G6 vorkommt. **AAPS** 4 zeigt es nicht mehr an: Es berechnet die Werte im Hintergrund neu, und der Loop funktioniert korrekt.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Kann ich einen aktiven DASH-Pod auf ein anderes Smartphone übertragen?

Der Pod-Status ist in den exportierten Einstellungen enthalten. Ein aktiver Pod kann daher auf ein anderes Smartphone übertragen werden, indem Du die Einstellungen direkt vor dem Wechsel exportierst und auf dem anderen Smartphone importierst. Das wird nicht offiziell unterstützt, und Du riskierst, den Pod zu verlieren: Probiere es möglichst aus, wenn Dein Pod ohnehin bald abläuft.

Lies zuerst diese Abschnitte:

* [Einstellungen exportieren und importieren](#omnipod-dash-export-import) auf der Seite zu Omnipod DASH und [Schlauchlose Pumpen](#ExportImportSettings-tubeless-pumps): Hake auf dem neuen Smartphone **Pumpeneinstellungen auch ersetzen** an und verwende eine Datei, die exportiert wurde, während Du Deinen aktuellen Pod getragen hast,
* [Pod verwerfen](#omnipod-dash-discard-pod), um den Pod danach vom alten Smartphone zu entfernen. Lass das alte Smartphone im Flugmodus, bis der Pod verworfen ist, damit nie beide Smartphones gleichzeitig mit dem Pod kommunizieren.