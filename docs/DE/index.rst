Herzlich willkommen zur AndroidAPS-Dokumentation
===================

AndroidAPS steht für "Android Artificial Pancreas System", ist also eine **App für Android Smartphones**, die als **künstliche  Bauchspeicheldrüse** fungiert. Sie kann mit bestimmten bluetoothfähigen Insulinpumpen und Blutzucker-Mess-Systemen kommunizieren. Mit Hilfe der OpenAPS-Algorithmen "Oref0"/"Oref1" ist die App in der Lage, den Blutzuckerspiegel bei insulinpflichtigem Diabetes automatisch zu regeln, sofern alle gegessenen Kohlenhydrate eingegeben werden (sog. Hybrid closed loop).

Das Programm steht nicht als fertige App und auch nicht im Google Play Store zur Verfügung. Es gibt auch keinen kommerziellen Support. Dafür gibt es aber eine sehr rege Community, die Dir helfen kann. Informationen wie Du sie kontaktieren kannst, findest Du [hier](http://androidaps.readthedocs.io/en/latest/DE/community.html). Der Quellcode ist jedoch kostenlos und frei verfügbar. Daraus können Interessierte sich im "Eigenbau" selbst und auf eigene Verantwortung die App erstellen (strictly **do it yourself** - DIY). 

Ein konkretes **Beispiel**, wie du dir ein Closed loop System selbst bauen kannst, findest du unter [http://androidaps.readthedocs.io/en/latest/DE/Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.html](http://androidaps.readthedocs.io/en/latest/DE/Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.html)

**Ziele**

Die Ziele, die zur Entstehung führten:

- App mit „modularer Basis“, es soll leicht sein, neue Module hinzuzufügen
- Eine App, bei der es bei der Erstellung möglich ist zu entscheiden, welche Funktionen die App später hat (Wear Control, NsClient)
- Eine App, die es ermöglicht, einen Open- oder Closed-Loop-Modus zu wählen
- Eine App, die die Funktionen eines APS (Automatic Pancreas System) visualisiert (Parameter, Ergebnis und Umsetzung)
- Die Möglichkeit, andere Algorithmen zu verwenden
- Eine „Virtuelle Pumpe“, mit der man „herumspielen“ kann, bevor man startet
- Eine App mit enger Nightscout-Integration
- Die Möglichkeit zum Hinzufügen/Entfernen von Beschränkungen
- Eine App, die alles enthält, um mit dem Diabetes klar zu kommen (APS+Nightscout)

**Was man benötigt**

Um AndroidAPS nutzen zu können, solltest du insulinpflichtiger Diabetiker sein ;-) und brauchst außerdem folgende Komponenten:

- **Android Smartphone** (5.1 oder neuer). 
- **loopfähige Insulinpumpe** (für Closed Loop), z.B. DanaR, DanaRS, Akku-Chek Combo, Akku-Chek Inside (in der Entwicklung) oder - **andere Insulinpumpe/ICT** (für Open Loop mit virtueller Pumpe)
- **Analog-Insulin**
- **kontinuierliches Blutzuckermess-System** (CGM/FGM), z.B. Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense oder Medtronic Guardian
- **AndroidAPS** zur Auswertung aller Daten und Steuerung deines Diabetesmanagements
- **App zur Weitergabe der BZ-Daten an AndroidAPS**, z.B. xDrip/xDrip+, Dexcom G5 App (patched), Glimp, PoctechApp, 600SeriesAndroidUploader
- **Smartwatch (optional)** zur Überwachung und Steuerung von AndroidAPS
- **Nightscout-Website** zum Auswerten der Daten und Erstellen von Profilen (Nightscout 0.10.2 oder aktueller)
- **PC-Software "Android Studio"** zum Erstellen von AndroidAPS aus dem Quellcode
- **Gute Diabetes-Therapieeinstellungen**

Was ist AndroidAPS?
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Sicherheitshinweise </DE/wasist/sicherheitshinweise.md>
   Screenshots </DE/wasist/screenshots.md>
   Smartphones </DE/wasist/smartphones.md>
   Insulinpumpen </DE/wasist/pumpen.md>
   Zukünftig ggf. loopbare Pumpen  </DE/wasist/pumpenzukunft.md>
   Glossar </DE/wasist/glossar.md>
   Wie kann ich helfen? </DE/wasist/wie-helfen.md>
  
AndroidAPS installieren
------------
.. toctree::
   :maxdepth: 1
   :glob:

   App aus Quellcode erstellen </DE/installieren/apk-erstellen.md>
   Update </DE/installieren/update.md>
   Release Notes </DE/installieren/releasenotes.md>
   Nightscout </DE/installieren/nightscout.md>
   
AndroidAPS einrichten 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Konfigurations-Generator </DE/konfiguration/konfigurations-generator.md>
   BZ-Quelle </DE/konfiguration/bz-quelle.md>
   DanaR </DE/konfiguration/danar.md>
   DanaRS </DE/konfiguration/danars.md>
   Accu Chek Combo </DE/konfiguration/akku-chek-combo.md>
   Smartwatch-Integration </DE/konfiguration/smartwatch.md>
   Drei-Punkte-Menü </DE/konfiguration/dreipunktemenue.md>
   Empfindlichkeitserkennung und COB </DE/konfiguration/empfindlichkeitserkennung-und-cob.md>
   
AndroidAPS nutzen
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   Beschränkungen (objectives) </DE/benutzung/beschraenkungen.md>
   OpenAPS-Funktionen </DE/benutzung/openaps.md>
   Profile </DE/benutzung/profile.md>
   SMS-Befehle </DE/benutzung/sms-befehle.md>
   Verzögerte Kohlenhydrate (eCarbs) </DE/benutzung/ecarbs.md>
   Tipps und Tricks </DE/benutzung/tipps.md>
   Logfiles erhalten </DE/benutzung/logfiles.md>
   
Hilfe durch die Community
------------
.. toctree::
   :maxdepth: 1
   :glob:

   Community </DE/hilfe/community.md>
   Hintergrundinformationen </DE/hilfe/hintergrundinfos.md>

Mithelfen in der Community
------------


.. note::

         **Disclaimer und Warnung**

         * Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

         * Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

         * Sämtliche Produkt- und Herstellernamen, Handelsmarken, Servicemarken, geschützte Handelsmarken und geschützte Servicemarken werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing.

         * Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit: SOOIL (http://www.sooil.com/eng/), Dexcom (http://www.dexcom.com/), Accu-Chek Roche Diabetes Care (http://www.accu-chek.com/).
