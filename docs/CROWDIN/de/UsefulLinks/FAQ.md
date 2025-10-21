# FAQ für Looper

Gewusst wie: Um die FAQ zu ergänzen, folge diesen [Anweisungen](../SupportingAaps/HowToEditTheDocs.md)

## Allgemein

### Kann ich die AAPS Installationsdatei (apk) einfach herunterladen?

Leider nein. Es gibt keine apk-Datei für AAPS, die einfach heruntergeladen werden kann. Du musst sie selbst [erstellen](../SettingUpAaps/BuildingAaps.md) (engl. build). Das hat einen einfachen Grund:

Mit AAPS steuerst Du Deine Pumpe und deren Insulinabgabe. Nach den aktuellen EU-Regeln erfordern alle Medizinprodukte der Klassen IIa oder IIb eine Zulassung (CE Kennzeichnung), die wiederrum verschiedene Studien und abschließende Freigaben erfordern. Der Vertrieb eines nicht zertifizierten Geräts ist illegal. Ähnliche Regelungen existieren in anderen Teilen der Welt.

Diese Regeln beschränken sich nicht auf den Verkauf (also den Austausch Geld gegen Ware), sondern schließen alle möglichen Vertriebswege (auch die kostenfreie Weitergabe) ein. Nur wenn Du ein Medizinprodukt nur für Dich selbst erstellst, finden diese Regeln keine Anwendung.

Deshalb sind APKs nicht verfügbar.

(FAQ-how-to-begin)=

### Wie soll man beginnen?

Zunächst einmal musst du dir **loopbare Hardware-Komponenten** besorgen:

- Eine [unterstützte Insulinpumpe](../Getting-Started/CompatiblePumps.md), 
- ein [Android-Smartphone](../Getting-Started/Phones.md) (Apple iOS wird nicht von AAPS unterstützt - dafür kann [iOS Loop](https://loopkit.github.io/loopdocs/) eine Lösung sein) und
- ein [System zur kontinuierlichen Glukosemessung](../Getting-Started/CompatiblesCgms.md) (CGM; Sensor). 

Danach musst Du **Deine Software-Komponenten** einrichten: [AAPS](../SettingUpAaps/BuildingAaps.md), eine [CGM/FGM-Quelle](../Getting-Started/CompatiblesCgms.md) und einen [Server für Berichte](../SettingUpAaps/SettingUpTheReportingServer.md).

Als Drittes musst Du **das OpenAPS Referenz-Design lernen und verstehen, um Deine Behandlungs-Faktoren zu überprüfen**. Grundvoraussetzung des Loop ist, dass die [Basalraten und Kohlenhydratfaktoren](../SettingUpAaps/YourAapsProfile.md) stimmen. Alle Empfehlungen gehen davon aus, dass der Basalbedarf durch das Basalschema gedeckt ist und auftauchende Blutzuckerschwankungen andere Gründe haben (Bewegung, Stress etc.), für die einmalige Anpassungen erforderlich sind. Die Anpassungen, die der Closed Loop autmatisch vornehmen darf, sind aus Sicherheitsgründen begrenzt (siehe maximale erlaubte temporäre Basalrate [OpenAPS-Referenz-Design](https://openaps.org/reference-design/)). Das bedeutet, dass Du nicht den Loop dafür verwenden solltest, ein falsches Basalratenprofil zu korrigieren. Wenn Du zum Beispiel häufig vor einer Mahlzeit niedrige Werte hast, dann muss wahrscheinlich die Basalrate angepasst werden. [Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) kann eine Möglichkeit sein, große Datenmengen zu analysieren und daraus abzuleiten, ob und wie die Basalrate und/oder Korrekturfaktoren (engl. ISF) angepasst werden müssen und auch, ob die Mahlzeitenfaktoren (engl. carb ratio) geändert werden müssen. Oder Du bestimmst und testest Deine Basalrate auf die [altmodische Art](https://integrateddiabetes.com/basal-testing/).

### Was ist beim Loopen zweckmäßig?

#### Passwort-Schutz

Wenn Du willst, dass Deine Einstellungen nicht einfach verändert werden können, dann kannst Du das Einstellungsmenü mit einem Passwort schützen. Dazu im Einstellungesmenü die Option "Passwort für Einstellungen" aktivieren und das gewünschte Passwort eingeben, Wenn Du das nächste Mal zu den Einstellungen gehst, musst Du das Passwort eingeben um Änderungen vorzunehmen. Wenn Du später das Passwort wieder deaktivieren möchstest, gehe zu "Passwort für Einstellungen" und lösche den Text aus dem Feld.

#### Android Wear Smartwatches

Planst Du über die Android Wear App einen Bolus abgeben zu wollen oder Einstellungen anzupassen, muss AAPS die Berechtigung bekommen, Benachrichtigungen zu senden. Die Bestätigung von Eingaben, die von der Smartwatch stammen, wird nämlich über Benachrichtigungen ausgeführt.

(FAQ-disconnect-pump)=

#### Pumpe trennen

Wenn Du Deine Pumpe zum Duschen, Baden und Schwimmen, Sport oder anderen Aktivitäten abnimmst, musst Du AAPS wissen lassen, dass kein Insulin geliefert wird. Nur so kann die IOB-Berechnung korrekt erfolgen.

Die Pumpe kann mit dem Loop-Status-Symbol auf dem [AAPS-Startbildschirm](#AapsScreens-loop-status) getrennt werden.

#### Empfehlungen basieren nicht auf einzelnem CGM-Wert

Zur Sicherheit macht AAPS die Vorschläge auf Basis des aktuellen Glukose-Durschnittswertes (Delta) anstatt eines einzelnen Wertes. Wenn Dein CGM nicht kontinuierlich Glukosewerte sendet, kann es deswegen etwas dauern bis AAPS Änderungen empfiehlt.

#### Weiterführende Literatur

Hier sind einige Blogs mit guten Tipps, um den Alltag mit deinem Loop zu meistern (in Englisch):

- [Fine-tuning Settings](https://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
- [Why DIA matters](https://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
- [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
- [Hormones and autosens](https://seemycgm.com/2017/06/06/hormones-2/) See my CGM

### Was sollte ich für den Notfall immer dabei haben?

Zunächst musst du natürlich dieselbe Notfall-Ausrüstung mitnehmen wie jeder andere Typ1-Diabetiker mit Insulinpumpentherapie. Beim Loopen mit AAPS wird dringend empfohlen, das folgende zusätzliche Notfall-Equipment jederzeit dabei oder in der Nähe zu haben:

- Powerbar und Kabel, um bei Bedarf Dein Smartphone, Deine Uhr und ggf. Dein Bluetooth Reader laden zu können.
- Pumpenbatterien
- Die aktuelle [APK](../SettingUpAaps/BuildingAaps.md) und [die Datei mit Deinen AAPS-Einstellungen](../Maintenance/ExportImportSettings.md) und alle anderen von Dir verwendeten Apps (z.B. xDrip+, BYO Dexcom) sowohl lokal als auch in der Cloud (Dropbox, Google Drive).

### Wie kann ich den CGM/FGM sicher und zuverlässig befestigen?

Du kannst es mit Tape fixieren. Es gibt mehrere vorperforierte 'Overpatches' für gängige CGM Systeme (Suche bei Google, eBay oder Amazon). Einige Looper verwenden auch günstigere Standard Kinesiotapes oder Rocktape.

Du kannst es fixieren. Sie können auch Oberarm - Armbänder kaufen, die das CGM/FGM mit einer Band fixieren (Suche bei Google, eBay oder Amazon).

## Der APS Algorithmus

### Warum wird mir "dia:3" im "OPENAPS AMA"- Reiter angezeigt obwohl ich einen anderen DIA in meinem Profil angegeben habe?

![AMA 3h](../images/Screenshot_AMA3h.png)

Im AMA bedeutet "dia" nicht "Insulinwirkungsdauer". Vielmehr ist "dia" ein Parameter, welcher mit DIA in Zusammenhang steht Es bedeutet wann die Korrekturdosis aufhören soll zu wirken. Und hat nichts mit mit der Berrechnung vom IOB zu tun. Im OpenAPS SMB wird dieser Parameter nicht mehr verwendet.

## Andere Einstellungen

### Nightscout Einstellungen

#### AAPSClient meldet 'nicht erlaubt' bzw. 'nicht zugelassen' und lädt keine Daten hoch. Was kann ich tun?

Überprüfe im Nightscout-Client die "Verbindungs-Einstellungen". Vielleicht bist Du gerade nicht in einem erlaubten WLAN oder Du hast "Nur während des Ladens" aktiviert und dein Ladekabel ist nicht angeschlossen.

### CGM Einstellungen

#### Warum meldet AAPS "BG source doesn't support advanced filtering / Datenquelle unterstützt keine erweiterte Filterung"?

Wenn Du ein anderes CGM/FGM als den Dexcom G5 oder G6 im 'xDrip native mode' verwendest, wirst Du diesen Hinweis im AAPS OpenAPS-Tab bekommen. In [Glättung der Blut-Glukose-Daten](../CompatibleCgms/SmoothingBloodGlucoseData.md) findest Du weitergehende Informationen.

### Pumpe

#### Wo soll ich die Pumpe tragen?

Es gibt unzählige Möglichkeiten, die Pumpe zu platzieren. Es spielt keine Rolle, ob Du loopst oder nicht.

#### Batterien

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

- bei der [DanaR/RS Pumpe](../CompatiblePumps/DanaRS-Insulin-Pump.md) wird während der Startprozedur kurzzeitig mit Hilfe einer hohen Stromstärke versucht, die Schutzfilme auf den Batterie-Kontakten zu entfernen (die einen Energieverlust bei Lagerung verhindern sollen), aber das funktioniert nicht immer zu 100%. Dann kannst du entweder versuchen, die Batterie 2-3 Mal herauszunehmen und wieder einzusetzen, bis die Pumpe einen Batteriestand von 100 % anzeigt oder du schließt die Batterie schon vor dem Einsetzen dadurch kurz, dass du beide Batteriepole für den Bruchteil einer Sekunde mit einem metallischen Gegenstand überbrückst.
- beachte auch die zusätzlichen Tipps für [bestimmte Batterien](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Insulin-Reservoir und Katheter wechseln

Der Wechsel des Insulin-Reservoirs kann nicht über AAPS erfolgen, sondern muss ganz normal direkt über die Pumpe durchgeführt werden.

- Dazu durch langes Drücken auf das Closed-Loop-Symbol auf dem ÜBERSICHT-Tab von AAPS 'Pausiere Loop für 1h' auswählen
- Koppele nun die Pumpe ab und wechsel das Reservoir wie es im Pumpenhandbuch beschrieben ist.
- Auch das Füllen des Schlauchs und der Kanüle kann direkt an der Pumpe erfolgen. Verwende in diesem Fall den [Button KATHETERWECHSEL](#screens-action-tab) im Reiter AKTIONEN für die Dokumentation.
- Anschließend durch langes Drücken auf Pausiert wieder Forsetzen wählen.

Im Gegensatz zum “klassischen” Vorgehen nutzt AndroidAAPS nicht die “Katheter füllen” Funktion der Pumpe, sondern befüllt den Katheter mit Hilfe eines normalen Bolus, der nicht in der Historie auftaucht. Das hat den Vorteil, dass dadurch keine aktuell laufende temporäre Basalrate unterbrochen wird. Um die benötigte Insulinmenge für das Füllen festzulegen und den Füllvorgang zu starten, nutze den [Button KATHETERWECHSEL](#screens-action-tab) auf dem Reiter AKTIONEN. Sollte die Menge nicht reichen, den Vorgang ggf. wiederholen. Du kannst im Drei-Punkte-Menü unter "Einstellungen > Andere > Füll-/Vorfüll-Standardmengen" Standardmengen festlegen. Schaue bitte im Beipackzettel deines Katheters nach, wie viele Einheiten du je nach Nadel- und Schlauchlänge zur Befüllung verwendet sollst.

### Smartphone-Hintergrundbild

Das AAPS Hintergrundbild für Dein Smartphone findest Du auf der [Smartphones-Seite](#Phones-phone-wallpaper).

### Alltagsgebrauch

#### Hygiene

##### Was mache ich, wenn ich duschen oder ein Bad nehmen möchte?

Du kannst die Pumpe zum Duschen oder Baden ablegen. Für diesen kurzen Zeitraum benötigest Du sie möglicherweise nicht aber Du solltest AAPS sagen, dass Du die Verbindung getrennt hast, damit die IOB-Berechnungen korrekt sind. Siehe die [Beschreibung oben](#FAQ-disconnect-pump).

#### Arbeit

Je nach Job können Sie verschiedene Behandlungsfaktoren an Werktagen anwenden. Als Looper solltest Du über einen [Profil-Wechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) für Deinen typischen Arbeitstag nachdenken. Zum Beispiel könntest Du zu einem Profil über 100% wechseln, wenn Du einen weniger anspruchsvollen Job hast (z. B. an einem Schreibtisch) oder weniger als 100%, wenn Du kontinuierlich körperlich während der Arbeit aktiv bist. Du kannst Dir auch überlegen ein höheres oder niedrigeres temporäres Ziel oder eine [Zeit-Verschiebung des Profils](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) zu wählen, wenn Du viel früher oder später als üblich arbeitest oder Schichtdienst hast. Du kannst auch ein zweites Profil erstellen (z.B. 'zu Hause' und 'Werktag') und einen täglichen Profilwechsel machen, auf das Profil, das du gerade brauchst.

### Freizeitaktivitäten

(FAQ-sports)=

#### Sport

Du musst Deine alten Gewohnheiten zum Thema Sport aus Vor-Loop-Zeiten über Bord werfen und neue entwickeln. Wenn Du einfach eine oder mehrere Sport-BE zu Dir nimmst, wird Dein Closed Loop System diese erkennen und entsprechend einen Korrekturbolus abgeben.

Dann hast Du zwar mehr Kohlenhydrate gegessen, gleichzeitig steuert der Loop aber gegen und gibt mehr Insulin ab.

Beim Loopen solltest Du diese drei Schritte ausprobieren:

- Mache einen [Profilwechsel](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) < 100%.
- Setze ein [temporäres Ziel für Aktivität](#TempTargets-activity-temp-target), das oberhalb Deines Standardziels liegt.
- Wenn Du SMBs nutzt, achte darauf, dass ["Aktiviere SMB bei temporären Zielen oberhalb des regulären Ziels"](#Open-APS-features-enable-smb-with-high-temp-targets) und ["SMB immer aktivieren"](#Open-APS-features-enable-smb-always) deaktiviert sind.

Für diese Einstellungen ist ein Vor- und Nachlauf wichtig. Nimm die Änderungen rechtzeitig vor Deinen sportlichen Aktivitäten vor und bedenke den Muskelauffülleffekt im Nachgang.

Wenn Du regelmäßig zur gleichen Zeit Sport machst (z.B. ein Kurs in Deinem Fitnessstudio) könntest Du [Automation](../DailyLifeWithAaps/Automations.md) für den Profilwechsel und das TT nutzen. Auch standortbasierte Automation-Regeln kommen in Frage, allerdings musst Du Dir hier überlegen, wie Du den Vorlauf am besten realisieren kannst.

Der Prozentsatz des Profilwechsels, der Wert für das temporäre Ziel und die beste Zeit für die Änderungen, sind individuell. Taste Dich vorsichtig heran und baue ausreichend Sicherheit ein (starte mit einem niedrigeren Prozentsatz und einem höheren TT).

#### Sex

Du kannst die Pumpe ablegen, um "frei" zu sein, aber Du solltest das Trennen in AAPS eingeben, damit die IOB-Berechnungen korrekt erfolgen können. Siehe die [Beschreibung oben](#FAQ-disconnect-pump).

#### Alkohol trinken

Alkoholkonsum ist im Closed Loop riskant, weil der Algorithmus einen von Alkohol beeinflussten BZ nicht richtig vorhersagen kann. Du musst Deinen eigenen Weg finden damit umzugehen, kannst aber folgende AAPS-Funktionen nutzen:

- Deaktivierung des Closed Loop Modus und manuelle Behandlung des Diabetes oder
- hohe temporäre Ziele setzen und UAM deaktivieren, um zu vermeiden, dass der Loop das IOB erhöht, weil er eine nicht eingegebene Mahlzeit vermutet
- einen Profilwechsel auf deutlich weniger als 100% machen 

Wenn du Alkohol trinkst, musst du immer Dein CGM im Blick haben, um eine Hypoglykämie im Zweifel durch das Essen von Kohlenhydraten zu verhindern.

#### Schlafen

##### Wie kann ich nachts loopen, ohne Handy- und WLAN-Strahlung ausgesetzt zu sein?

Viele Nutzer stellen nachts im Handy den Flugzeugmodus ein. Wenn Dich der Loop trotzdem, während des Schlafs unterstützen soll, führe die drei folgenden Schritte nacheinander aus. Wichtig: Dies funktioniert nur, wenn Du eine lokale BZ-Quelle wie xDrip+ oder ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) nutzt. Bekommt AAPS die BZ-Werte über Nighscout wird das NICHT funktionieren:

1. Aktiviere im Handy den Flugzeugmodus.
2. Warte, bis der Flugzeugmodus aktiv ist.
3. Schalte Bluetooth ein.

Du empfängst jetzt weder Anrufe, noch bist du mit dem Internet verbunden. Aber der Loop funktioniert.

Bei einigen Anwendern kam es zu Problemen im Flugmodus. AAPS empfing keine BZ-Werte von xDrip+. Gehe zu Einstellungen > Inter-App Einstellungen > Identifiziere Empfänger und gebe `info.nightscout.androidaps` ein.

![xDrip+ Basic Inter-App Einstellungen Identifiziere Empfänger](../images/xDrip_InterApp_NS.png)

#### Reisen

##### Wie gehe ich mit einem Zeitzonenwechsel um?

Mit der DanaR und der DanaR Korean musst du nichts tun. Für andere Pumpen und Details schaue auf die [Über Zeitzonen hinweg reisen](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md)-Seite.

### Medizinische Themen

#### Krankenhausaufenthalt

Wenn Du dem Klinikpersonal einige Informationen über AAPS und DIY Looping geben willst, kannst Du [Für Mediziner und Fachpersonal - Eine allgemeine Einführung in und eine Anleitung für AAPS](../UsefulLinks/ClinicianGuideToAaps.md) ausdrucken.

#### Termin mit deinem betreuenden Arzt (Internisten)

##### Auswertung

Du kannst entweder Deine Nightscout Berichte zeigen (https://DEINE-NS-SITE.com/report) oder den [Nightscout Reporter](https://nightscout-reporter.zreptil.de/) verwenden.

## Häufige Fragen auf Discord und ihre Antworten...

### Mein Problem ist hier nicht aufgeführt.

[Informationen um Hilfe zu erhalten.](../GettingHelp/WhereCanIGetHelp.md)

### Mein Problem ist hier nicht aufgeführt, aber ich habe die Lösung gefunden

[Informationen um Hilfe zu erhalten.](../GettingHelp/WhereCanIGetHelp.md)

**Erinnere uns daran, Deine Lösung zu dieser Liste hinzuzufügen!**

### AAPS stoppt jeden Tag ungefähr zur gleichen Zeit.

Google Play Protect anhalten. Schaue, ob Du "Cleaner" oder "Reinigungs" Apps hast und deinstalliere diese. In AAPS gehe auf das 3-Punkte-Menü / Über / "Don't Kill My App?".

### Wie kann ich meine Backups organisieren?

Einstellungen regelmäßig exportieren: Nach jedem Podwechsel, nach der Änderung deines Profils, wenn Du ein Ziel validiert hast, wenn Du eine neue Pumpe hast… Auch wenn sich nichts ändert, exportiere einmal im Monat. Behalte mehrere alte Exportdateien.

Kopiere auf ein Cloud-Drive (Dropbox, Google etc.): Alle APK's die Du benutzt hast, um Apps auf deinem Handy zu installieren (AAPS, xDrip, BYODA, gepatchte LibreLink App…) sowie die exportierten Einstellungsdateien aus allen verwendeten Apps.

### Ich habe Probleme und/oder Fehler beim Erstellen der App.

Bitte

- schau im Abschnitt [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio) nach typischen Fehlern und
- die Tipps in dieser [Schritt für Schritt Anleitung](https://docs.google.com/document/d/1oc7aG0qrIMvK57unMqPEOoLt-J8UT1mxTKdTAxm8-po).

### Ich stecke bei einem Ziel fest und brauche Hilfe.

Mache ein Bildschirmfoto der Frage und der Antworten. Poste es auf dem AAPS Discord Kanal. Vergiss nicht zu sagen, welche Optionen du wählst (oder nicht) und warum. Du erhältst Tipps und Hilfe, aber Du musst die Antworten selber finden.

### Wie kann ich das Passwort in AAPS v2.8.x zurücksetzen?

Öffne das Hamburger Menü, starte den Konfigurationsassistenten und gebe ein neues Passwort ein, wenn danach gefragt wird. Du kannst den Assistenten nach der Passwortphase verlassen.

### Wie kann ich das Passwort in AAPS v3.x zurücksetzen?

Die Dokumentation findest Du [hier](#Update3_0-reset-master-password).

### Mein Link/Pumpe/Pod reagiert nicht (RL/OL/EmaLink…)

Bei manchen Smartphones treten Bluetooth-Verbindungsprobleme mit den Kommunikationsgeräten (RL/OL/EmaLink...) auf.

Einige haben auch nicht reagierende Verbindugnen zu Ihren Geräten (AAPS sagt, dass sie verbunden sind, aber die Geräte können die Pumpe nicht erreichen oder Kommandos senden.)

Der einfachste Lösungsweg ist: 1/ Lösche das Gerät aus AAPS 2/ Schalte das Gerät (RileyLink etc.) aus 3/ Schließe AAPS über das 3-Punkte-Menü oben rechts 4/ Drücke lange auf das AAPS Icon, öffne die Info zur App, Wähle 'Stopp erzwingen' , wähle 'Speicher' und dann 'Cache leeren' (nicht: 'Daten löschen' wählen!) 4+/ In selten Fällen muss das Smartphonen nun neugestartet werden. Du kannst es ohne Neustart versuchen. 5/ Schalte den Link ein 6/ Starte AAPS 7/ Gehe auf den Reiter POD, 3-Punkt-Menü, Suche und Verbindung Link

### Fehler beim App erstellen: Dateiname zu lang

Während des Erstellens bekomme ich einen Fehler, dass der Dateiname zu lang ist. Mögliche Lösungen: Verschiebe die Quelldateien ein Verzeichnis näher an das Stammverzeichnis des Speichers (z.B. "C:\src\AndroidAPS-EROS").

Von Android Studio: Stelle sicher, dass "Gradle" nach dem Öffnen des Projekts und dem Download von GitHub synchronisiert und indiziert ist. Führe Build -> Clean Project und danach Build -> Rebuild Project durch. Führe File -> Invalidate Caches... durch und starte Android Studio neu.

### Alarm: Entwickler-Version. Closed Loop ist nicht verfügbar.

AAPS läuft nicht im "Entwicklermodus". AAPS zeigt die folgende Meldung: "Entwickler-Version. Closed Loop ist nicht verfügbar".

Stelle sicher, dass der "Entwicklermodus" in AAPS aktiviert ist: Speichere eine leere Datei mitr dem Namen "engineering_mode" im Verzeichnis "AAPS/extra". Jede Datei funktioniert so lange wie sie korrekt benannt ist. Starte AAPS neu, damit die Datei erkannt werden kann und der "Entwicklermodus" damit aktiviert wird.

Tipp: Mache eine Kopie einer existierenden Logdatei und benenne sie in "engineering_mode" um (Aufpassen: keine Dateiendung!).

### Wo finde ich die Einstellungsdateien?

Einstellungsdateien werden auf dem internen Speicher Ihres Telefons im Verzeichnis "/AAPS/preferences" gespeichert. WARNUNG: Stelle sicher, dass Du Dein Passwort nicht verlierst, da Du ohne Passwort keine verschlüsselte Einstellungsdatei importieren kannst!

### Wie konfiguriere ich die Akkuoptimierung?

Das richtige Konfigurieren der Energiespareinstellungen ist wichtig, um zu verhindern, dass das Betriebssystem des Smartphones AAPS und die anderen wichtigen Apps und Dienste aussetzt, wenn Du Dein Telefon nicht benutzt. Das Ergebnis ist, dass AAPS nicht arbeiten kann und/oder Bluetooth-Verbindungen für Sensor und Rileylink (RL) getrennt werden, was "Pumpe getrennt" Alarme und Kommunikationsfehler verursacht. Auf dem Smartphone gehe zu Einstellungen > Apps und deaktiviere die Akkuoptimierung ('nicht eingeschränkt') für: AAPS, xDrip+ oder die BYODA/Dexcom-App und die Bluetooth-System-App (Du musst eventuell zuerst die System-Apps einblenden). Alternativ kannst Du die Akkuoptimierung auf dem Smartphone komplett deaktivieren. Das führt dazu, dass der Akku schneller verbraucht wird, aber es ist ein guter Weg, um herauszufinden, ob die Akkuoptimierung das Problem verursacht. Die Akkuoptimierungseinstellungen können, je nach Telefonhersteller und/oder Betriebsystemversion, stark abweichen bzw. anders aussehen. Aus diesem Grund ist es nahezu unmöglich, Anweisungen zur korrekten Einstellung der Akkuoptimierung für Dein Setup zu geben. Experimentiere, welche Einstellungen am besten funktionieren. Für weitere Informationen siehe auch "Dont kill my app"

### Alarm Pumpe nicht erreichbar mehrmals am Tag oder in der Nacht.

Das Telefon kann AAPS-Dienste oder sogar Bluetooth unterbrechen, wodurch die Verbindung zu RL verloren geht (siehe Akkuoptimierung). Ziehe in Erwägung, den Grenzwert Pumpe nicht erreichbar auf 120min zu setzen, indem Du rechts oben zum Drei-Punkt-Menü gehst, wähle Einstellungen -> Lokale Alarme -> Grenzwert Pumpe ist nicht erreichbar [min].

### Wo kann ich Behandlungen in AAPS v3 löschen?

3-Punkte-Menü, wähle Behandlungen, dann hast Du verschiedene Optionen zur Verfügung.

### AAPSClient Remote App konfigurieren und nutzen

AAPS kann mit der AAPSClient Remote App (und optional auch mit der zugehörigen Wear App auf einer Android Wear Smartwatch) remote kontrolliert und gesteuert werden. Zur Klärung und weil es leicht zu Verwechselungen kommen kann: Die AAPSClient Remote App ist nicht die NSClient Konfiguration in AAPS, und die AAPSClient Remote Wear App ist nicht zu verwechseln mit der AAPS Wear App. Wir verwenden im Folgenden für Apps zur Steuerung aus der Ferne die Namen 'AAPSClient Remote' und 'AAPSClient Remote Wear'.

Um die AAPSClient Remote-Funktion nutzen zu können, musst Du: 1) Die AAPSClient Remote App installieren (die Version sollte zur verwendeten AAPS Version passen) 2) Die AAPSClient Remote App starten und den Einrichtungsassistenten durchlaufen, um die notwendigen Berechtigungen richtig zu setzen und den Zugriff auf Deine Nightsout-Webseite einzurichten. 3) An dieser Stelle kannst Du einige der Alarm-Optionen und/oder der erweiterten Einstellungen ausschalten, die den Start der AAPSClient Remote App auf Deiner Nightscout-Webseite protokolliert. Sobald das erledigt ist, wird die AAPSClient Remote App die aktuellen Profilinformationen von Deiner Nightscout-Webseite herunterladen. Der Startbildschirm wird Deine CGM-Werte und einige AAPS-Daten anzeigen. Es werden noch nicht alle Graphen angezeigt werden und es wird ein Hinweis erscheinen, dass das Profil noch nicht gesetzt wurde. 4) Um das Profil nun zu setzen:

- Aktiviere 'Gespeicherte Profile abrufen' in AAPS (Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung)
- Setze/Aktiviere das Profil, in dem Du in der AAPSClient Remote App auf das Profil drückst und mit OK bestätigst. Danach wird das Profil gesetzt und alle Werte aus AAPS sollten in der AAPSClient Remote App vollständig angezeigt werden. Tipp: Sollte der Graph weiterhin nicht gezeigt werden, ändere die Graphen-Einstellung (langes Drücken auf den Graphen), um so eine Aktualisierung zu erzwingen. Um AAPS über die AAPSClient Remote App steuern zu können, aktiviere die Funktionen, die aus der Ferne steuerbar sein sollen (z.B. Profilwechsel durchführen, temporäre Ziele setzen, Kohlenhydrate etc.). Die Einstellungen findest Du in AAPS unter: Einstellungen > Nightscout-Client-Einstellungen > Synchronisierung. Sobald Du die beschriebenen Einstellungen gemacht hast, kannst Du AAPS remote entweder über die Nightscout-Webseite oder die AAPSClient Remote App steuern.

Wenn Du AAPS mit der AAPSClient Remote Wear App folgen/steuern möchtest, müssen sowohl die AAPSClient Remote App und auch die zugehörige Wear App installiert werden. Um die AAPSClient Remote Wear App zu erstellen (kompilieren), nutze die Standardanleitung bis zu dem Punkt an dem kompiliert werden soll. Wähle hier die Variante AAPSClient für das Kompilieren.

### Ich sehe ein rotes Dreieck / AAPS schließt den Loop nicht / Loop bleibt in LGS / Ich sehe ein gelbes Dreieck

Rote und gelbe Dreiecke sind Sicherheitsfunktionen in AAPS v3.

Ein rotes Dreieck zeigt, dass es doppelte Glukosewerte gibt und AAPS die Änderungen der Glukosewerte (Delta) nicht sicher berechnen kann. In dieser Situation kann der Loop nicht geschlossen werden. Um das rote Dreieck verschwinden zu lassen, musst Du jeweils einen der doppelten Glukosewerte löschen. Gehe auf den BYODA oder xDrip+ Reiter, wähle oben rechts das Löschen-Icon aus, markiere jeweils einen der doppelten Einträge und drücke erneut das Löschen-Icon. Bestätige das Löschen mit OK. (Das Löschen funktioniert in alten AAPS Versionen ggf. anders). Wenn es zu viele doppelte Glukosewerte geben sollte, muss eventuell die AAPS-Datenbank zurückgesetzt werden. Beim Zurücksetzen verlierst Du auch die bisherigen Statistiken, IOB, COB und das gewählte Profil.

Mögliche Ursache des Problems: xDrip und/oder NS, die nachträglich Glukosewerte eingetragen haben ('backfilling').

Das gelbe Dreieck zeigt eine verzögerte Übermittlung der Glukosewerte an. Es werden nicht alle 5 Minuten Glukosewerte empfangen (unregelmäßige oder fehlende Werte). Häufig ist das ein Problem von Libre-Sensoren. Das Problem tritt auch beim Wechsel des G6-Transmitters auf. Wenn das gelbe Dreieck durch den G6-Transmitter verursacht wird, verschwindet es nach einigen Stunden (rund 24h) automatisch. Bei Libre-Sensoren wird das gelbe Dreickeck permanent zu sehen sein. Der Loop kann trotzdem geschlossen werden und wird einwandfrei funktionieren.

### Kann ich einen laufenden DASH Pod auf eine andere Hardware umziehen?

Ja, das ist möglich. Beachte bitte, dass das Umziehen der Hardware als Funktionalität "nicht unterstützt" und "nicht getestet" ist. Es hat also ein Restrisiko. Am besten probierst Du das Vorgehen dann aus, wenn Dein Pod kurz vor dem Ablauf ist, sodass im Fehlerfall nicht viel schiefgehen kann und kein neuer Pod verloren geht.

Entscheidend ist, dass der Pumpen-Status ('state'), der die MAC-Adresse enthält, in AAPS und DASH beim erneuten Verbindungsaufbau übereinstimmen.

### Schritte, die ich hierbei mache:

1) Trenne (suspend) den DASH. Damit wird sichergestellt, dass der DASH bei einem Verbindungsverlust DASH keine Befehle mehr ausführt. 2) Bringe Dein Smartphone in den Flugmodus, um 'BT', 'WLAN' und 'Mobile Daten' zu deaktivieren. So kann AAPS garantiert nicht mehr mit dem DASH kommunizieren. 3) Export settings (which includes the DASH state) 4) Copy the settings file just exported from the phone (as it is in airplane mode and we do not want to change that, easiest way is using USB cable) 5) Copy the settings file to the alternate phone. 6) Importiere die Einstellungen auf dem neuen Smartphone in AAPS. 7) Überprüfe, ob der Pod auf dem DASH Tab angezeigt wird. 8) Hebe den 'Suspend'-Status des Pod wieder auf. 9) Prüfe auf dem DASH Tab, dass er mit dem Pod kommuniziert (tippe auf 'Aktualisieren')

Gratulation! Du hast es geschafft!

*Moment!* Das Smartphone denkt noch, dass es sich mit dem selben (alten) DASH verbinden kann:

1) Wähle 'deaktivieren' auf dem alten Smartphone. Es kann nicht passieren. Das Smartphone ist noch immer im Flugmodus und kann daher den Pod nicht tatsächlich deaktivieren. 2) Die Deaktivierung wird erwartungsgemäß einen Kommunikationsfehler hervorrufen. 3) Tippe einfach ein paar Mal auf "Wiederholen", bis AAPS die Option "Verwerfen" des Pods anbietet.

Überprüfe, ob AAPS "kein aktiver Pod" meldet. Du kannst den Flugmodus jetzt wieder sicher deaktivieren.

### Wie importiere ich Einstellungen aus früheren AAPS-Versionen in AAPS v3?

Du kannst nur Einstellungen (in AAPS v3) importieren, die zuvor mit AAPS v2.8.x oder v3.x exportiert wurden. Solltest Du eine Version älter als v2.8x nutzen oder Einstellungen aus älteren Version importieren wollen, musst Du, als Zwischenschritt, AAPS v2.8 installieren. Importiere die älteren Einstellungen in v2.8. Nachdem Du geprüft hast, das alles OK ist, kannst die Einstellungen aus v2.8 exportieren. Installiere AAPS v3 und importiere die gerade exportierten Einstellungen aus v2.8 in v3.

Wenn Du zum Erstellen der v2.8 und v3 den gleichen 'key' verwendest hast, wirst Du noch nicht einmal die Einstellungen importieren müssen. Du kannst dann v3 direkt auf v2.8 installieren.

Es wurden einige neue Ziele (Objectives) hinzugefügt. Du musst diese durchlaufen.