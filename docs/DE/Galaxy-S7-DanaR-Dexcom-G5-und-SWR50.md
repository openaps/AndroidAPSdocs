# Samsung S7, DanaR, Dexcom G5 und Sony Smartwatch


![](https://user-images.githubusercontent.com/32912987/34470732-6a3b4b62-ef38-11e7-8428-03e1aec39ee7.png)
## Beschreibung

In dieser Variante ist das Smartphone **Samsung Galaxy S7** das "Herzstück" und die Schaltzentrale der Loop. Es liest mit der originalen, aber von der Community leicht modifizierten Dexcom-App das kontinuierliche Glukosemesssystem **Dexcom G5** aus und steuert auf Basis dieser Daten über die App "AndroidAPS" (AAPS) die Insulinpumpe **DanaR** von SOOIL (per Handeingabe auf Vorschlag der App oder vollautomatisch nach Eingabe der Mahlzeit-KH). Weitere Geräte werden nicht benötigt.

Die **Alarme** für zu niedrige oder zu hohe Glukosewerte werden nicht über die sehr eingeschränkte Dexcom-App (bietet nur wenige vorgegebene Sounds), sondern über die App "xDrip+" im Smartphone ganz nach individuellem Bedarf eingestellt. So können je nach Tages- oder Nachtzeit unterschiedliche Alarmtöne oder Vibrationen eingerichtet werden. 

Falls gewünscht, können alle aktuellen Glukose- und Behandlungsdaten auf einer **"Sony Smartwatch 3"** (SWR50) am Handgelenk angezeigt werden. Über diese Smartwatch kann dann auch z.B. diskret das Mahlzeiten-Bolus gesetzt werden.

Das System funktioniert **offline**, also ohne dass zum Betrieb eine Datenverbindung des Smartphones zum Internet erforderlich ist. 

Dennoch werden die Daten bei bestehender Datenverbindung automatisch zu **Nightscout** "in die Cloud" hochgeladen werden, um umfangreiche Auswertungen für den Arztbesuch zu erhalten oder jederzeit die aktuellen Werte mit Familienmitgliedern zu teilen.

## Benötigte Komponenten
1. [Samsung Galaxy S7](http://www.samsung.com/de/smartphones/galaxy-s7/overview/)

Bezugsquelle: Elektrofachhandel, Internetshops

Alternativen: siehe Android-Smartphones in der [Dexcom Kompatibilitätsliste](https://www.dexcom.com/ous-compatibility-page) (Punkt "Dexcom G5 Mobile App", NICHT die unter "Dexcom Follower App" Genannten)

2. [DanaR](https://www.ime-dc.de/de/insulintherapie/insulinpumpen/dana-r)

Bezugsquelle: In Deutschland auf Rezept oder privat über die Firma [IME-DC GmbH](http://www.ime-dc.de) 

Alternativen:  [Accu-Chek Combo](https://github.com/MilosKozak/AndroidAPS/wiki/Accu-Chek-Combo-Pumpe), [DanaRS](http://www.sooil.com/eng/product/) (bereits von AAPS unterstützt, aber in Deutschland noch nicht erhältlich), [Accu-Chek Insight (in der Entwicklung)](http://www.accu-chek.de/produkte/de/insulinpumpentherapie/insight/index.jsp)

3. [Dexcom G5](https://www.nintamed.eu/p/products/dexcomg5)

Bezugsquelle: In Deutschland auf Rezept oder privat über die Firma [Nintamed](https://www.nintamed.eu/)

Alternativen: MM640g-CGM (Auslesen direkt über AAPS möglich), Dexcom G4 mit Eigenbau-ShareReceiver (über xDrip+), Eversense (über xDrip+), Freestyle Libre-DIY-CGM mit [Bluecon Nightrider](https://www.ambrosiasys.com/how-it-works), [blueReader](https://unendlichkeit.net/wordpress/), [manipulierte Sony SmartWatch 3 (SWR50) direkt auf dem Sensor](https://drive.google.com/file/d/0B-zDwCDqX5mKQUdvUEF6Qzl3aDQ/view)

4. Optional: [Sony Smartwatch 3 (SWR50)](https://www.sonymobile.com/de/products/smart-products/smartwatch-3-swr50/)

Bezugsquelle: Da die Uhr ein Auslaufmodell ist, muss man im Fachhandel oder im Internet ggf. etwas suchen. Falls sie zu einem akzeptablen Preis nur in grellen Neonfarben erhältlich ist, dann kann man sie trotzdem bestellen und das Band tauschen. Hierfür gibt es bei eBay unter dem Suchbegriff "SWR50 adapter" Adapter, in die die Uhr exakt reinpasst und an die man jedes beliebige Uhrenband (in der passenden Größe) machen kann.

Alternativen: [Android Wear Smartwatches](https://github.com/MilosKozak/AndroidAPS/wiki/Smartwatch-Visualisierung_de)

## Nightscout online einrichten
[Nightscout.info](http://www.nightscout.info/) ist eine Website, über die die meisten Daten der eingerichteten Loop "in der Cloud" gesammelt werden können. Das ermöglicht umfangreiche Statistiken und Auswertungen, aber auch die Synchronisation der Werte mit weiteren Geräten oder das Teilen der Behandlungsdaten mit Familienmitgliedern, Freunden oder Ärzten.

1. Nightscout über Heroku installieren

Hierzu nach folgender Anleitung vorgehen: [http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku)

> Tipp: Alle Zugangsdaten auf einem Zettel oder in einer Textdatei notieren!
***
2. Heroku-Variablen einrichten

* Auf [https://herokuapp.com/](https://herokuapp.com/) einloggen
* App-Namen auswählen
* Settings > Schaltfläche "Reveal Config Vars" anklicken
* Variablen hinzufügen oder wie folgt ändern:<br>
   ENABLE = `careportal food cage sage iage iob cob basal rawbg pushover bgi pump openaps openapsbasal loop`<br>
   DEVICESTATUS_ADVANCED = `true`<br>
   PUMP_FIELDS = `reservoir battery clock`
<br><br>
Ein Alarm bei niedrigem Pumpen-Batteriestand in % kann wie folgt aktiviert werden:<br>
PUMP_WARN_BATT_P = `51`<br>
PUMP_URGENT_BATT_P = `26`

***
3. Nightscout-Website Version checken

* https://DEINAPPNAME.herokuapp.com/
* Menü über die drei waagerechten Striche rechts oben am Bildschirm anklicken
* Am Ende des Menüs muss "Nightscout Version 0.10.2-..." stehen

> Tipp: Falls eine ältere Version angezeigt wird, z.B. "0.10.1-...", dann muss Nightscout aktualisiert werden. Dazu nach der Anleitung unter [http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) vorgehen. Sollte sich trotz erfolgreichem Update die Versionsanzeige nicht aktualisieren, dann ist noch ein "Redeploy" von Hand erforderlich, siehe die Anleitung [unter http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie/update-my-fork-troubleshooting-part-2](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie/update-my-fork-troubleshooting-part-2).

## Computer/Notebook vorbereiten
Um aus dem frei verfügbaren OpenSource-Quellcode von AAPS eine Android-App selbst erstellen zu können, wird 
Android Studio auf dem Computer oder Notebook (Windows, Mac, Linux) benötigt > Installieren wie unter
[https://developer.android.com/studio/install.html](https://developer.android.com/studio/install.html) beschrieben.

## Smartphone einrichten
<img src="https://user-images.githubusercontent.com/32912987/34470734-6ee34ade-ef38-11e7-9214-337a9c607243.png" width="250">

### Firmware des Samsung Galaxy S7 überprüfen
* Menü > Einstellungen > Telefoninfo > Softwareinfo: Hier sollte die getestete Firmware-Version stehen: "Android-Version 7.0 
* Falls nicht: Menü > Einstellungen > Software-Update durchführen

### Installation von unbekannten Quellen erlauben
Menü > Einstellungen > Gerätesicherheit > Unbekannte Quellen > Schieber nach rechts (= aktiv)

Diese Einstellung sollte aus Sicherheitsgründen wieder auf inaktiv gestellt werden, wenn die Installation aller hier beschriebenen Apps abgeschlossen ist.

### Bluetooth aktivieren
Menü > Einstellungen > Verbindungen > Bluetooth > Schieber nach rechts (= aktiv)

### Dexcom App (modifizierte Version) installieren
<img src="https://user-images.githubusercontent.com/32912987/34470739-77d835e6-ef38-11e7-9c47-37a71f74e6cc.png" width="250"> <br>

Die Original-App von Dexcom aus dem Google Play Store wird nicht funktionieren, weil sie die Werte nicht an andere Apps weitergibt. Darum ist eine von der Community leicht modifizierte Version erforderlich. Nur sie kann später mit AAPS kommunizieren. Unter [https://github.com/dexcomapp/dexcomapp?files=1](https://github.com/dexcomapp/dexcomapp?files=1) ist eine mmol/l-Version und eine mg/dl-Version der modifizierten Dexcom-App hinterlegt. Vorteil gegenüber frei entwickelten Auslese-Apps wie xDrip+ ist, dass es sich um die vom Hersteller zertifizierte Auslese-/Glukoseberechnungsmethode handelt und "verpasste Werte" nach dem erneuten Verbinden noch aufgefüllt werden (das kann xDrip+ derzeit noch nicht).


Dazu im Smartphone folgende Schritte ausführen:

1. Falls die Original-Dexcom-App bereits installiert ist: Sensor stoppen, App deinstallieren über Menü > Einstellungen > Apps > Dexcom G5 Mobile > Deinstallieren
2. Modifizierte Dexcom-App mit in der richtigen Einheit (mg/dl oder mmol/l) von [https://github.com/dexcomapp/dexcomapp?files=1](https://github.com/dexcomapp/dexcomapp?files=1) herunterladen.
3. Modifizierte Dexcom-App auf dem Smartphone installieren (= die heruntergeladene *.apk-Datei auswählen)
4. Modifizierte Dexcom-App starten, den Sensor nach Anweisung aktivieren / kalibrieren und die Aufwärmphase abwarten
5. Wenn die ersten beiden Kalibrierungen erfolgreich waren und die modifizierte Dexcom-App den aktuellen Wert anzeigt, dann im Menü (= drei waagerechte Striche links oben in der App) auf "Warnungen" und folgende Konfiguration einstellen<br>
* Akut niedrig `55mg/dl` (kann nicht deaktiviert werden)
* Niedrig `AUS`
* Hoher `AUS`
* Anstiegsrate `AUS`
* Abfallrate `AUS`
* Signalverlust `AUS`
* Kurzer Blick `EIN` (kann auch deaktiviert werden, aber die Anzeige des aktuellen Glukosewerts in der Statuszeile des Smartphones ist praktisch)

## AAPS installieren

1. Auf dem wie oben beschrieben vorbereiteten Computer/Notebook [https://github.com/MilosKozak/AndroidAPS](https://github.com/MilosKozak/AndroidAPS) aufrufen
2. Branch "master" Version 1.58 auswählen (mit älteren Versionen geht es nicht)
3. Schaltfläche "Clone or download" > Download ZIP auswählen
4. Heruntergeladene ZIP-Datei in einem neuen Ordner entpacken
5. Android Studio auf dem Computer/Laptop starten
6. Der Anleitung unter [https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de](https://github.com/MilosKozak/AndroidAPS/wiki/APK-erstellen_de) folgen
> Wichtig: Die Variante "fullRelease" verwenden!
7. Die erstellte *.apk-Datei auf das Smartphone laden / per E-Mail schicken und dort installieren
8. AAPS im Smartphone starten und folgende Einstellungen unter dem Menüpunkt **Konfigurations-Generator** (ehemals "Config Builder") vornehmen:
* Profil: je nach Wunsch
* Insulin: das verwendete Insulin auswählen
* BZ Quelle: `Dexcom G5 App (patched)`, dann auf das Zahnrädchen daneben, Upload BG data to NS `aktivieren`, Send BG data to xDrip+ `aktivieren`
* Pumpe: DanaR
* Empfindlichkeitserkennung: je nach Wunsch
* APS: je nach Wunsch
* Loop: aktivieren
* Beschränkungen: Zielsetzungen aktivieren
* Treatments: Behandlungen aktivieren
* Generell: Aktionen, Careportal, Laufende Benachrichtigungen jeweils aktivieren
* "Integrierter NSClient" aktivieren und im Zahnrädchen daneben: Nightscout URL = `https://DEINAPPNAME.herokuapp.com`, Nightscout API-Key = `DEINAPIKEY`, Aktiviere lokalen Broadcast = `aktivieren`, Alarm-Optionen > `alles deaktivieren` <br>
<img src="https://user-images.githubusercontent.com/32912987/34470736-741c728c-ef38-11e7-9152-f48b501f333b.png" width="250">

## xDrip+ installieren
xDrip+ ist eine weitere ausgereifte App, die unzählige Möglichkeiten bietet. Anders als von den Entwicklern eigentlich gedacht, wird xDrip+ aber bei dieser Methode nicht auch zum Sammeln der Glukosedaten vom Dexcom G5 verwendet, sondern nur, um Alarme auszugeben und auf dem Android-Homescreen im Widget den aktuellen Gluosewert samt Kurve anzuzeigen. Mit xDrip+ können die Alarme nämlich viel individueller eingestellt werden als mit der Dexcom-Software, AAPS oder Nightscout (keine Einschränkung bei der Auswahl der Sounds, verschiedene Alarme je nach Tages-/Nachtzeit etc.).

1. Letzte stabile apk-Version von xDrip+ mit dem Smartphone herunterladen unter [https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk) - nicht die Version aus dem GooglePlay-Store!

2. xDrip+ installieren, indem die heruntergeladene *.apk-Datei ausgewählt wird

3. xDrip+ starten und im Menü (drei waagerechte Striche links oben) folgende Einstellungen vornehmen:

* Einstellungen > Warnungen > Glukose-Alarm-Liste > Warnungen (niedrig) und (hoch) je nach Bedarf erstellen. Die bestehenden Alarme können mit einem langen Fingerdruck geändert werden
* Einstellungen > Kalibrierungs-Erinnerungen: deaktiviert (wird über die Dexcom-App erinnert)
* Einstellungen > Datenquelle > 640G/EverSense
* Einstellungen > Inter-App-Einstellungen > Accept Calibrations > AN
* Menü > Sensor starten (ist nur "pro forma" und hat nichts mit dem laufenden G5-Sensor zu tun. Dies ist nötig, da sonst regelmäßig eine Fehlermeldung kommt)

Beispiel für ein Alarm-Setup:
<br>
<img src="https://user-images.githubusercontent.com/32912987/34470740-7934de30-ef38-11e7-8e33-74bb22015406.png" width="250">

Der "< 55 mg/dl-Alarm" wird über die Dexcom-App ausgegeben, dies kann auch nicht abgeschaltet werden. 
> Tipp für Besprechungen / Kirchenbesuche / Kino etc.: Wenn im Samsung Galaxy S7 der "Nicht stören-Modus" aktiviert ist (Menü > Einstellungen > Töne und Vibration > Nicht stören: nach rechts schieben), dann vibriert das Smartphone bei dem nicht abschaltbaren Dexcom-Niedrigalarm nur und gibt keine akustische Warnung aus. Bei den übrigen, über xDrip+ eingerichteten Alarmen kann jeweils ausgewählt werden, ob der Lautlosmodus ignoriert werden soll oder nicht.

4. Auf dem Android Homescreen an eine freie Stelle lange drücken > Widgets > "xDrip+" auswählen, halten und an die gewünschte Stelle ziehen > loslassen

## Energiesparoptionen deaktivieren
Im Samsung Galaxy S7 auf Menü > Einstellungen > Gerätewartung > Akku > Nicht überwachte Apps > +Apps hinzufügen: Hier nacheinander die Apps AndroidAPS, Dexcom G5 Mobile, xDrip+ und ggf. AndroidWear auswählen (falls die Smartwatch verwendet wird)

## Optional: Sony Smartwatch 3 (SWR50) einrichten
<img src="https://user-images.githubusercontent.com/32912987/34470733-6d9df16a-ef38-11e7-8a4f-bd77697e7655.png" width="150">
<br>
Mit der Smartwatch lässt sich das Leben mit Diabetes noch viel unauffälliger gestalten. Über sie kann am Handgelenk jederzeit der aktuelle Glukosezucker, der Status der Loop etc. angezeigt werden und es können Bolusgaben vorgenommen werden. Dazu mit dem Finger auf dem AAPSv2-Ziffernblatt die linke obere Ecke doppelt antippen. Die SWR50 läuft in der Regel einen ganzen Tag, bis der Akku wieder aufgeladen werden muss (selbes Ladegerät wie das Samsung Galaxy S7: microUSB). 


Die Uhr wird wie folgt eingerichtet:

* Im Smartphone über das GooglePlay-Store die App "Android Wear" installieren und die SWR50 nach dortigen Anweisungen koppeln
* In AAPS im Smartphone: Config Builder > Generell > Wear > aktivieren und im Zahnrädchen daneben: Steuerung von der Uhr = aktiv
* In der Smartwatch: Einstellungen > Ziffernblatt ändern > AAPSv2
* Ggf. beide Geräte einmal neu starten

## Pumpe einrichten

siehe [Einrichtung DanaR für AAPS](https://github.com/MilosKozak/AndroidAPS/wiki/DanaR-Insulinpumpe_de)
