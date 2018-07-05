Voraussetzungen
=================
Um AndroidAPS nutzen zu können, werden folgende Komponenten benötigt:

Insulinpumpe
-----------
AndroidAPS kann derzeit mit folgenden Insulinpumpen genutzt werden:
* DanaR
* DanaRS
* Akku-Chek Combo
* Akku-Chek Insight (demnächst)

In Deutschland sind alle genannten "loopbaren" Insulinpumpen auf dem Markt erhältlich. Unter https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0 finden sich Bezugsquellen. Die Liste darf jederzeit ergänzt werden.

Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen: http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html (englisch)

**Auswahl**

Die Akku-Chek Combo ist zwar eine solide Pumpe. Die DanaR und die DanaRS haben beim Loopen jedoch einige Vorteile:

* Der Hersteller Sooil hat geäußert, dass die Steuerung der Pumpe mit einem Smartphone (ohne explizit das Loopen zu erwähnen) nicht die gegen die Garantiebedingungen verstößt. 
* IME-DC äußerte, sie würden im Garantiefall eine Ersatzpumpe zur Verfügung stellen und die defekte Pumpe direkt zu Sooil schicken. So würden sie gar nicht wissen, ob du Looper bist oder nicht. Roche schließt dagegen jegliche Nutzung der Pumpen aus, die nicht in der Bedienungsanleitung beschrieben ist.
* Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z.B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern. Mit der Combo ist das nicht so einfach, jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
* Das erste Einrichten der Verbindung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
* Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z.B. beim Kochen).
* Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB. Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
* Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden-. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
* Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/RS garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

Die Combo ist ohne Zweifel eine sehr gute Pumpe. Und loopbar. Sie hat auch den Vorteil, dass die Auswahl an Kathetern wegen des Standard Luer-Lock-Anschlusses groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)

Informationen dazu, welche weiteren Insulinpumpen in Zukunft möglicherweise loopbar sein werden, findest du im englischen Wiki hier: https://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html

Insulinarten
-----------
In AndroidAPS sind die Wirkprofile folgender Insulinarten hinterlegt:

* Humalog 
* Novorapid
* Novolog
* FIASP

Außerdem kann manuell das Wirkmaximum des verwendeten Insulins angegeben werden (siehe free-peak Oref).

BZ-Quelle (CGM/FGM)
-----------
AndroidAPS benötigt alle 5 Minuten einen aktuellen BZ-Wert. Dieser kann direkt ans Handy geliefert werden (Offline-Loop) oder von der Nightscout-Website geladen werden (Online-Loop). Es empfiehlt sich wegen der Instabilität mobiler Internetverbindungen grundsätzlich, eine Offline-Loop zu bevorzugen.

Dexcom
++++++++++++

Mit xdrip+:

* Downloade `xDrip+ <https://github.com/NightscoutFoundation/xDrip/>`_ und folge den Anleitungen auf Nightscout (G4 without share `xDrip+ <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge/>`_ , `G4 share <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/>`_, `G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support/>`_).
* In xdrip gehe zu Settings > Interapp Compatibility > Broadcast Data Locally und wähle ON.
* In xdrip gehe zu Settings > Interapp Compatibility > Accept Treatments und wähle OFF.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Settings > Interapp Compatibility > Accept Calibrations und wähle ON. Du solltest auch die Optionen in Settings > Less Common Settings > Advanced Calibration Settings kontrollieren.
* Wähle in AndroidAPS > CONFIG BUILDER > xdrip.

Mit der Dexcom G5 App:

* Downloade die apk von `hier <https://github.com/dexcomapp/dexcomapp/>`_, es geht nur mit dieser.
* Deinstalliere die originale Dexcom App, falls du sie noch hast.
* Wähle im Config Builder Dexcom G5 App.

Mit OTG cable ('traditional' Nightscout):

* Downloade die Nightscout Uploader app vom Play Store und folge den Einstellungen auf Nightscout `hier <http://www.nightscout.info/wiki/welcome/basic-requirements/>`_.
* Gib in den AndroidAPS Einstellungen > NSClient deine Nightscout URL und dein Nightscout API-Key ein.
* Wähle im CONFIG BUILDER > PROFIL > NS Profil (AndroidAPS).

FreeStyle Libre mit Bluetooth-Aufsatz
+++++++++++++

Mit xdrip:

* Downloade xdrip und folge der Anleitung auf `LimiTTer <https://github.com/JoernL/LimiTTer/>`_, `Libre Alarm <https://github.com/pimpimmi/LibreAlarm/wiki/>`_, `BlueReader <https://unendlichkeit.net/wordpress/?p=680&lang=en>`_ (`Hardware <https://bluetoolz.de/wordpress/>`_), `Blukon Nightrider <https://www.ambrosiasys.com/howit>`_, `MiaoMiao-Reader <https://www.miaomiao.cool/>`_
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Lokaler Broadcast und wähle AN.
* In xdrip gehe zu Einstellungen > Inter-App Einstellungen > Behandlungen annehmen und wähle AUS.
* Falls du mit AndroidAPS kalibrieren willst dann gehe in xdrip zu Einstellungen > Inter-App Einstellungen > Accept Calibrations und wähle AN. Du solltest auch die Optionen in Einstellungen > Erweiterte Einstellungen > Erweiterte Kalibrierung kontrollieren.
* Wähle in AndroidAPS > CONFIG BUILDER > xdrip.

Mit Glimp:

* Downloade Glimp und folge der Anleitung auf `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-for-libre/>`_. 
* Wähle in AndroidAPS > CONFIG BUILDER > Glimp.

MM640g oder MM630g
+++++++++++

* Downloade `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_ und folge der Anleitung auf  `Nightscout <http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g/>`_.
* Im 600 Series Uploader gehe zu Settings > Send to xdrip+ und wähle ON (Ankreuzen).
* Wähle MM640g im ConfigBuilder (in AndroidAPS).

Andere CGM-Systeme
+++++++++++

Falls du ein anderes CGM System verwendest, das die Werte zu `Nightscout <http://www.nightscout.info/>`_ sendet, dann

* Gib in AndroidAPS Preferences deine Nightscout Website und API secret ein.
* Wähle den NSClient im ConfigBuilder (in AndroidAPS).


Android Smartphone
-----------

Eine Liste mit geeigneten Android-Smartphones befindet sich hier: 
[https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)

Du kannst Filter verwenden, um in der Datei einzelne Pumpen oder Smartphones anzuzeigen. Bitte setze dies aber am Ende wieder zurück, damit der nächste Leser wieder alle Angaben findet.

Android Smartwatch (optional)
-----------

In AndroidAPS ist es möglich, dass man die Pumpe über Android Wear Uhren kontrolliert. Um diese Möglichkeit zu nutzen, musst du beim Kompilieren der App in Android Studio die Build Variante "fullWearcontrolRelease" wählen. In AndroidAPS musst du dann im Konfigurations-Generator noch "Wear" aktivieren. Es gibt verschiedene Ziffernblätter zum auswählen. Enthalten sind durchschnittliches Delta, IOB, zur Zeit aktive Temp.Basalrate, das Basalprofil, und deine BZ Werte. Du kannst die AndroidAPS Watch App auch verwenden, um ein Temp Target zu setzen, Ext. Carbs oder Bolus ab zu geben, den Bolus Wizard verwenden, Infusionset füllen, und den Status vom Loop und der Pumpe kontrollieren. Stelle sicher, dass AndroidAPS die Erlaubnis hat, um Benachrichtigungen auf der Uhr anzuzeigen (sonst kann man die Eingaben nicht bestätigen). Die Eingaben werden bestätigt in dem man die Benachrichtigung auf der Uhr öffnet, einmal wischt und bestätigt. Um schneller zu AAPS zu kommen, kannst du den angezeigten BZ doppelt anklicken. Wenn man zwei mal auf die BZ-Kurve tippt, ändert sich der angezeigte Zeitraum.

In Android Wear 2.0 installiert sich das Watchface nicht von alleine. Du musst in den Playstore der Uhr gehen, und unter der Kategorie "installierte Apps auf dem Handy" AAPS aktivieren. Aktiviere ebenalls Auto Update.

Falls du ein anderes System zum loopen verwendest und deine Daten, oder die deines Kindes/Verwandten, auf der Uhr sehen möchtest, kannst du, auch einfach nur die Watch APK kompilieren. Um nur die Watch APK zu kompilieren wähle in Android Studio die Build Variante "nsclientWearRelease".

Pebble Nutzer können das `Urchin Watchface <https://github.com/mddub/urchin-cgm/>`_ benutzen, um ihre Loop Daten (vorausgesetzt sie sind auf Nightscout) zu sehen, aber mit dieser Methode ist es nicht möglich die Pumpe und AndroidAPS zu steuern. Du kannst Felder wählen um z.B. IOB, aktiver temp. Basalrate und Vorhersage, anzeigen zu lassen. Falls du open loopst kannst du `IFTTT  <https://ifttt.com/>`_ benutzen um ein kleines Programm erstellen, welches bestimmt, wenn eine Benachrichtigungen von AndroidAPS kommt, eine SMS oder Benachrichtigung anzeigt.

Nightscout-Website
-----------
Es wird vorausgesetzt, dass du bereits eine eigene Nightscout-Seite eingerichtet hast. Es gibt folgende Möglichkeiten, solch eine Seite zu erstellen:

* http://ns.10be.de/de/index.html (einfach und komfortabel, deutscher Server)
* `Heroku <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_, (manuelle Einrichtung). Du musst folgende Variablen konfigiurieren:

  * Gehe zu https://portal.azure.com/ oder https://herokuapp.com/

  * Wähle deinen App Namen.

  * Drücke settings (azure), oder Settings > "Reveal Config Variables (heroku)

  * Füge die Variablen hinzu oder ändere sie wie folgt:
    * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
    * `DEVICESTATUS_ADVANCED` = `true` (HEROKU: 'on')
    * `PUMP_FIELDS` = `reservoir battery clock`
    * Various alarms can be set for `monitoring the pump <https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring>`_, battery % in particular is encouraged:
      * `PUMP_WARN_BATT_P` = `51`
      * `PUMP_URGENT_BATT_P` = `26`

.. image: images/nightscout1.png
  :width: 400

  * Drücke Speichern.

PC-Software
-----------
Der Quellcode von AndroidAPS, der in Github verfügbar ist, muss selbst in eine lauffähige Smartphone-App umgewandelt werden. Das ist do-it-yourself! Um die AndroidAPS-App aus dem Quellcode zu erstellen (kompilieren), benötigst du auf dem Computer die Software Android Studio:

https://developer.android.com/studio/install

Diabetes-Therapiedaten
-----------
AndroidAPS kann nur dann gut laufen, wenn deine Diabetes-Therapiedaten optimal eingstellt sind. Du musst drei Variablen ermitteln (ggf. stündlich anders, so dass du 3x24 Faktoren pro Tag hast):

Basalraten
++++++++
Die Basalraten müssen so fein abgestimmt sein, dass sie über den ganzen Tag verteilt den BZ-Wert konstant im unteren Zielbereich halten. Sowohl Hypos, als auf hohe Werte dürfen nicht vorkommen, sonst läuft der Loop nicht richtig. Am besten ist es, mehrere Basalratentests durchzuführen und das Schema mit dem Diabetologen oder der Diafee zu besprechen.

ISF
++++++++
Der Insulinsensitivitätsfaktor (ISF) gibt an, um wie viele mg/dl oder mmol/l der BZ-Wert durch 1 IE Insulin gesenkt wird.  

IC
++++++++
Der IC (Insulin-Carb-Ratio - Insulin-Kohlenhydrat-Faktor) bestimmt, wieviel Gramm Kohlenhydrate durch 1 IE Insulin abgedeckt werden.
