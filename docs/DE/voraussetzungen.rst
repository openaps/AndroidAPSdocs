Voraussetzungen
=================
Um AndroidAPS nutzen zu können, solltest du insulinpflichtiger Diabetiker sein ;-) und brauchst außerdem folgende Komponenten: loopfähige Insulinpumpe, Analog-Insulin, ein kontinuierliches Blutzuckermess-System (CGM/FGM), ein Smartphone mit Android >= 5.0, eine Nightscout-Website zum Auswerten der Daten und Erstellen von Profilen, die PC-Software "Android Studio" zum Erstellen der App aus dem Quellcode und (sehr wichtig) ach gut getestete Diabetes-Therapieeinstellungen.

Insulinpumpe
-----------
AndroidAPS kann derzeit mit folgenden Insulinpumpen genutzt werden:

* DanaR
* DanaRS
* Akku-Chek Combo
* Akku-Chek Insight (demnächst)

In Deutschland sind alle genannten "loopbaren" Insulinpumpen auf dem Markt erhältlich. Unter https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0 finden sich Bezugsquellen. Die Liste darf jederzeit ergänzt werden.

Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen: http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html (englisch)

**Dana oder Combo?**

Die **Akku-Chek Combo** ist zwar eine solide Pumpe. Und loopbar. Sie hat auch den Vorteil, dass die Auswahl an Kathetern wegen des Standard Luer-Lock-Anschlusses groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)

Die **DanaR und die DanaRS** haben beim Loopen jedoch einige Vorteile:

* Der Hersteller Sooil hat geäußert, dass die Steuerung der Pumpe mit einem Smartphone (ohne explizit das Loopen zu erwähnen) nicht die gegen die Garantiebedingungen verstößt. 
* IME-DC äußerte, sie würden im Garantiefall eine Ersatzpumpe zur Verfügung stellen und die defekte Pumpe direkt zu Sooil schicken. So würden sie gar nicht wissen, ob du Looper bist oder nicht. Roche schließt dagegen jegliche Nutzung der Pumpen aus, die nicht in der Bedienungsanleitung beschrieben ist.
* Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z.B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern. Mit der Combo ist das nicht so einfach, jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
* Das erste Einrichten der Verbindung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
* Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z.B. beim Kochen).
* Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB. Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
* Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden-. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
* Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/RS garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

Insulinarten
-----------
Du solltest ein Analog-Insulin verwenden. Die Wirkprofile folgender Insulinarten sind hinterlegt:

* Humalog 
* Novorapid
* Novolog
* FIASP

Für andere Insuline oder Mischungen verschiedener Insuline kannst du in AndroidAPS auch manuell das Wirkmaximum angeben (Wirkprofil "free-peak Oref").

BZ-Quelle (CGM/FGM)
-----------
AndroidAPS benötigt alle 5 Minuten einen aktuellen BZ-Wert. Dieser kann vom Mess-System (ggf. über zusätzliche Apps wie xDrip+ oder LibreReader) entweder direkt an AndroidAPS geliefert werden (Offline-Loop) oder zunächst zur Nightscout-Website hochgeladen werden, damit AndroidAPS sich die Werte von dort wieder zieht (Online-Loop). Es empfiehlt sich wegen der Instabilität mobiler Internetverbindungen grundsätzlich, einen Offline-Loop zu bevorzugen.

Dexcom
^^^^^^^^^^

**G5 mit xdrip+:**

* Downloade `xDrip+ für das G5 <https://jamorham.github.io/#xdrip-plus>`_ und installiere es auf dem Smartphone
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > xdrip.

**G5 mit der modifizierten Dexcom G5-App:**

* Deinstalliere die originale Dexcom App, falls du sie noch hast.
* Downloade die modifizierte Dexcom App von `hier <https://github.com/dexcomapp/dexcomapp/>`_ (Es geht nur mit dieser Datei und NICHT mit der Original-App von Dexcom!).
* Installiere die modifizierte Dexcom App auf Deinem Smartphone
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > DexcomG5 app (patched).

**G4 mit OTG cable ('traditional' Nightscout):**

* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout `hier <http://www.nightscout.info/wiki/welcome/basic-requirements/>`_.
* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

FreeStyle Libre mit Bluetooth-Aufsatz
^^^^^^^^^^
Um vom Freestyle Libre Messgerät automatsich (ohne "Drüberziehen" des Handys) alle 5 Minuten Werten zu bekommen, musst du dir einen kleinen Aufsatz kaufen, der die Werte über Bluetooth ans Smartphone weitergibt. Es gibt hier mehrere Lösungen:

* `MiaoMiao-Reader <https://www.miaomiao.cool/>`_
* `Blukon Nightrider <https://www.ambrosiasys.com/howit>`_
* `BlueReader <https://bluetoolz.de/blueorder/#home>`_ 
* `Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>`_

Auf dem Smartphone muss eine der folgenden Apps installiert werden, die mit dem Bluetooth-Aufsatz kommuniziert:

**Mit xdrip:**

* Downloade `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_ und installiere es auf dem Smartphone
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xDrip+ gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xDrip+ zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > Konfigurations-Generator > xDrip+.

**Mit Glimp:**

* Downloade über das Google Play Store die App Glimp und folge der Anleitung auf `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre/>`_. 
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > Glimp.

MM640g oder MM630g
^^^^^^^^^^

* Downloade `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_ und folge der Anleitung auf  `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g/>`_.
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (ankreuzen).
* Wähle in AndroidAPS > Konfigurations-Generator > BZ-Quelle > MM640g.

Andere CGM-Systeme
^^^^^^^^^^

Falls du ein anderes CGM System verwendest, das die Werte zu `Nightscout <http://www.nightscout.info/>`_ sendet, dann

* Gib in den AndroidAPS Einstellungen > Nightscout-Client deine Nightscout Website und API key ein.
* Wähle den AndroidAPS > Konfigurations-Generator > BZ-Quelle > Nightscout-Client BZ.

Android Smartphone
-----------

Du benötigst ein Smartphone, auf dem das Google-Betriebssystem Android 5.1 oder neuer installiert ist. Manche Smartphones können schon im Lieferzustand loopen, auf andere muss man erst von Hand eine neue Android-Version (LineageOS) aufspielen, z.B. fast immer, wenn man mit der Akku-Chek Combo loopen will.

Eine Liste mit geeigneten Android-Smartphones befindet sich hier: https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435 

Du kannst Filter verwenden, um in der Datei einzelne Pumpen oder Smartphones anzuzeigen. Bitte setze dies aber am Ende wieder zurück, damit der nächste Leser wieder alle Angaben findet.

Android Smartwatch (optional)
-----------

Nicht zwingend nötig, aber für den Alltag sehr hilfreich ist eine Smartwatch. Mit Uhren, die **Android WearOS** als Betriebssystem haben, ist es nämlich möglich, den Status des Loop zu überwachen und auch Bolus abzugeben. Für die Smartwatch gibt es verschiedene Ziffernblätter, die folgende Informationen anzeigen können:

* aktueller BZ-Wert mit 15' Trend und Delta
* Vorhersage des BZ-Verlaufs
* Bolus-IOB
* Basal-IOB
* COB
* BGl
* Aktive temporäre Basalrate
* Status von Loop und Pumpe

Außedem kannst Du über die Uhr folgende Aktionen auslösen:

* Temp. Target setzen
* Extended Carbs eingeben
* Bolus abgeben
* Bolus-Rechner verwenden
* Infusionset füllen 

Um diese Möglichkeit zu nutzen, musst du beim Kompilieren des Quellcodes in der PC-Software "Android Studio" die Build Variante "full" wählen. In AndroidAPS musst du dann im Konfigurations-Generator > Generell noch "Wear" aktivieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden aktiviert, indem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AndroidAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten oder die deines Kindes/Verwandten auf der Uhr sehen möchtest, kannst du auch einfach nur die Watch APK kompilieren. Wähle dazu in Android Studio die Build Variante "nsclient".

**Pebble** Nutzer können das `Urchin Watchface <https://github.com/mddub/urchin-cgm/>`_ benutzen, um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um z.B. IOB, aktiver temp. Basalrate und Vorhersage anzeigen zu lassen. Falls du open loopst, kannst du `IFTTT  <https://ifttt.com/>`_ benutzen um ein kleines Programm zu erstellen, welches (wenn eine Benachrichtigung von AndroidAPS kommt) eine SMS oder Benachrichtigung anzeigt.

Nightscout-Website
-----------
Du musst eine Nightscout-Webiste haben. Dies ist eine Datenbank im Internet, auf die sämtliche BZ- und Behandlungsdaten hochgeladen werden. Dort kannst du auch verschiedene Profile (Basalschemen, Korrekturfaktoren etc.) anlegen und ändern, die dann automatisch in AndroidAPS erscheinen. Die Website dieser Datenbank erlaubt dir zahlreiche statistische Auswertungen zur Optimierung deiner Diabetestherapie, Freigabe der Daten für Freunde oder Familienmitglieder (Follower) und Vorlage beim Diabetologen.

Es gibt folgende Möglichkeiten, solch eine Seite zu erstellen und zu betreiben:

ns.10be.de
^^^^^^^^^^
Dieser Server steht in Deutschland und wird von Looper Martin Schiftan derzeit kostenlos angeboten. Sämtliche Einstellungen lassen sich auf der Administrations-Website komfortabel vornehmen. Die Basalraten werden dort automatisch mit Autotune ausgewertet.

http://ns.10be.de/de/index.html 

Heroku
^^^^^^^^^^
Über Heroku kannst du von Hand selbst eine Nightscout-Website mit Datenbank hosten. Die kostenlosen Server stehen im Ausland und müssen von Hand konfiguriert werden.

Heroku-Seite einrichten
"""""""""
http://www.heroku.com
http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku
  
Tipp: Alle Zugangsdaten auf einem Zettel oder in einer Textdatei notieren!

Heroku-Variablen einrichten
"""""""""

* Auf https://herokuapp.com/ einloggen
* App-Namen auswählen
* Settings > Schaltfläche "Reveal Config Vars" anklicken
* Variablen hinzufügen oder wie folgt ändern:

   ** ENABLE = `careportal food cage sage iage iob cob basal rawbg pushover bgi pump openaps openapsbasal loop`
   ** DEVICESTATUS_ADVANCED = `true`
   ** PUMP_FIELDS = `reservoir battery clock`

Ein Alarm bei niedrigem Pumpen-Batteriestand in % kann wie folgt aktiviert werden:

* PUMP_WARN_BATT_P = `51`
* PUMP_URGENT_BATT_P = `26`

Nightscout-Website Version checken
"""""""""""""

* https://DEINAPPNAME.herokuapp.com/
* Menü über die drei waagerechten Striche rechts oben am Bildschirm anklicken
* Am Ende des Menüs muss "Nightscout Version 0.10.2-..." stehen

Tipp: Falls eine ältere Version angezeigt wird, z.B. "0.10.1-...", dann muss Nightscout aktualisiert werden. Dazu nach der Anleitung unter http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie vorgehen. Sollte sich trotz erfolgreichem Update die Versionsanzeige nicht aktualisieren, dann ist noch ein "Redeploy" von Hand erforderlich, siehe die Anleitung http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie/update-my-fork-troubleshooting-part-2


PC-Software
-----------
Der Quellcode von AndroidAPS, der in Github verfügbar ist, muss selbst in eine lauffähige Smartphone-App umgewandelt werden (do-it-yourself). Um die AndroidAPS-App aus dem Quellcode zu erstellen (kompilieren), benötigst du auf dem Computer die Software Android Studio:

https://developer.android.com/studio/install

Diabetes-Therapiedaten
-----------
AndroidAPS kann nur dann gut laufen, wenn deine Diabetes-Therapiedaten optimal eingstellt sind. Du musst folgende Variablen ermitteln (ggf. stündlich anders, so dass du ggf. 3x24 Faktoren pro Tag hast):

Basalraten
^^^^^^
Die Basalraten müssen so fein abgestimmt sein, dass sie über den ganzen Tag verteilt den BZ-Wert konstant im unteren Zielbereich halten. Sowohl Hypos, als auf hohe Werte dürfen nicht vorkommen, sonst läuft der Loop nicht richtig. Am besten ist es, mehrere Basalratentests durchzuführen und das Schema mit dem Diabetologen oder der Diafee zu besprechen.

ISF
^^^^^^
Der Insulinsensitivitätsfaktor (ISF) gibt an, um wie viele mg/dl oder mmol/l der BZ-Wert durch 1 IE Insulin gesenkt wird.  

IC
^^^^^^
Der IC (Insulin-Carb-Ratio - Insulin-Kohlenhydrat-Faktor) bestimmt, wieviel Gramm Kohlenhydrate durch 1 IE Insulin abgedeckt werden.
