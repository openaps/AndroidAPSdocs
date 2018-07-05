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

Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen: http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html 

*Auswahl*

Die Akku-Chek Combo ist zwar eine solide Pumpe. Die DanaR und die DanaRS haben beim Loopen jedoch einige Vorteile:

* Der Hersteller Sooil hat geäußert, dass die Steuerung der Pumpe mit einem Smartphone (ohne explizit das Loopen zu erwähnen) nicht die gegen die Garantiebedingungen verstößt. 
* IME-DC stated they would just hand out a replacement send the pump to Sooil - so they wouldn’t even know if you were looping or not. This makes the Dana* R/RS pumps the only pumps that are under warranty while looping. (Roche excludes any use that is not in their manual.)
* The DanaR/RS connects to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the DanaR/RS pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
* Initial pairing is simpler with the Dana* RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
* So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn’t so easy if you walk away from your phone whilst bolusing & cooking.
* The Combo vibrates on the end of TBRs, the Dana* R vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB. The Dana* RS is configurable that it does neither beeps or vibrates.
* Reading the history on the RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
* All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also “waterproof by warranty” due to the sealed battery compartment and reservoir filling system.

The Combo of course is a very good pump. And loopable. It also has the advantage of many more infusion set types to chose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-)

Details of the status of other pumps that may have the potential to work with AndroidAPS are listed on the Future (possible) Pumps page.

Insulinarten
-----------


BZ-Quelle (CGM/FGM)
-----------

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

Es wird vorausgesetzt, dass du bereits eine eigene Nightscout Seite eingerichtet hast, falls nicht folge [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku), um eine ausführliche Anleitung zur Einrichtung zu erhalten. Bei der unteren Anleitung findest du die Einstellungen die du zusätzlich noch ändern musst.
* Gehe zu https://portal.azure.com/ oder https://herokuapp.com/

* Wähle deinen App Namen.

* Drücke settings (azure), oder Settings > "Reveal Config Variables (heroku)

* Füge die Variablen hinzu oder ändere sie wie folgt:
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true` (HEROKU: 'on')
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged:
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26`

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/nightscout1.png]]

* Drücke Speichern.

PC-Software
-----------

Um die AndroidAPS-App aus dem Quellcode zu erstellen, benötigst du auf dem Computer zunächst die Software Android Studio:

https://developer.android.com/studio/install

Diabetes-Therapiedaten
-----------
