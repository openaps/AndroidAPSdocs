Was ist AndroidAPS?
===========

AndroidAPS steht für "Android Automatic Pancreas System", ist also eine App für Android Smartphones, die als automatische Bauchspeicheldrüse fungiert. Sie kann mit bestimmten bluetoothfähigen Insulinpumpen und Blutzucker-Mess-Systemen kommunizieren. Mit Hilfe der OpenAPS-Algorithmen "Oref0"/"Oref1" ist die App in der Lage, den Blutzuckerspiegel bei insulinpflichtigem Diabetes automatisch zu regeln, sofern alle gegessenen Kohlenhydrate eingegeben werden (sog. Hybrid closed loop).

Das Programm steht nicht als fertige App und auch nicht im Google Play Store zur Verfügung. Es gibt auch keinen Support. Der Quellcode ist jedoch kostenlos und frei verfügbar. Daraus können Interessierte sich im "Eigenbau" selbst und auf eigene Verantworung die App erstellen (strictly do it yourself - DIY). 

Ein konkretes Beispiel, wie du dir ein Closed loop System selbst bauen kannst, findest du unter http://androidaps.readthedocs.io/en/latest/DE/Galaxy-S7-DanaR-Dexcom-G5-und-SWR50.html

Ziele
--------
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

Was man benötigt
---------

- Android Smartphone (5.1 oder neuer). Informationen dazu, welche Smartphones gut laufen gibt es hier: https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing 
- DanaR / DanaRS / Akku Chek Combo Insulinpumpe (in Zukunft auch die Insight)
- Ein CGM (Dexcom G4/G5/G6, Freestyle Libre mit Bluetooth-Aufsatz, Eversense oder Medtronic Guardian)
- xDrip/xDrip+ oder Glimp oder 600SeriesAndroidUploader
- AndroidAPS
- Nightscout 0.10.2 oder aktueller

Glossar
-------------
Für das meiste "Looper Vokabular": https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html (auf englisch)

Screenshot
-----------

.. image:: https://img1.picload.org/image/dgdgcorw/aaps-overview-small.jpg.png

Sicherheitshinweise
-------

* AndroidAPS ist nur ein Programm zur Unterstützung deiner Diabetestherapie, nicht um den Diabetes zu vergessen!
* Vertraue niemals blind auf ein Gerät bei der Anpassung der Dosierung. Kontrolliere die Ergebnisse und verstehe, wie der Algorithmus auf diese kommt.
* Dein Smartphone, welches die Pumpe kontrolliert, sollte ausschließlich für diese Aufgabe verwendet werden, installiere keine Apps, um die Gefahr von Trojanern zu minimieren.
* Installiere regelmäßig alle Sicherheitsupdates, damit du vor Angriffen bestmöglich geschützt bist!

SMS-Steuerung:

* Wenn du diese Option verwendest, behalte im Hinterkopf, was passieren könnte, falls das Handy, welches zur Fernsteuerung verwendet wird, gestohlen wird. Schütze dieses mit einem sicheren Code.
* Seit AndroidAPS 1.1 wirst du über wichtige ferngesteuerte Aktionen (z.B. Bolus, Profiländerung) eine SMS erhalten. Deswegen solltest du mindestens 2 Telefonnummern hinzufügen (für den Fall, dass ein Handy gestohlen wird).

.. note:: 
      **Disclaimer und Warnung**

      * Sämtliche Informationen, Gedanken und der Quellcode sind nur für informatorische und wissenschaftliche Zwecke. Nightscout erfüllt keinerlei Anforderungen des Datenschutzes im Gesundheitswesen. Verwenden Sie Nightscout und AndroidAPS auf eigenes Risiko und setzen Sie es nicht ein, um Behandlungsentscheidungen zu treffen.

      * Bei Nutzung des Quellcodes von github.com bestehen keinerlei Gewährleistungs- und Garantieansprüche. Es gibt keinen Support. Im Übrigen wird auf die Lizenz verwiesen, die im Repository abgerufen werden kann.

      * Sämtliche Produkt- und Herstellernamen, Handelsmarken, Servicemarken, geschützte Handelsmarken und geschützte Servicemarken werden nur zu Informationszwecken genutzt und nicht für Werbung oder Marketing.

      * Bitte beachten: Dieses Projekt steht in keinerlei Verbindung mit: SOOIL (http://www.sooil.com/eng/), Dexcom (http://www.dexcom.com/), Accu-Chek Roche Diabetes Care (http://www.accu-chek.com/).
