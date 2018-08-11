# Insulinpumpen

## Closed Loop
AndroidAPS kann derzeit mit folgenden Insulinpumpen im Closed Loop Modus genutzt werden:

* DanaR
* DanaRS
* Akku-Chek Combo
* Akku-Chek Insight (demnächst)
* Omnipod ([in der Entwicklung](http://www.openomni.org))

## Open Loop
In Deutschland sind alle genannten "loopbaren" Insulinpumpen auf dem Markt erhältlich. Unter [https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0) finden sich Bezugsquellen. Die Liste darf jederzeit ergänzt werden. Informationen über weitere in Zukunft ggf. loopbare Insulinpumpen: [http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html (englisch)](http://androidaps.readthedocs.io/en/latest/Getting-Started/Future-possible-Pump-Drivers.html)

Wenn du eine **nicht unterstützte Pumpe** hast oder mit **Intensivierter konventioneller Therape (ICT)** eingestellt bist, dann kannst du AndroidAPS (in Verbindung mit einem CGM/FGM) zumindest im  Open Loop Modus verwenden. In diesem Fall musst du aber alle Therapievorschläge der App von Hand umsetzen.

## Dana oder Combo?

Die **Akku-Chek Combo** ist zwar eine solide Pumpe. Und loopbar. Sie hat auch den Vorteil, dass die Auswahl an Kathetern wegen des Standard Luer-Lock-Anschlusses groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)

Die **DanaR und die DanaRS** haben beim Loopen jedoch einige Vorteile:

* Der Hersteller Sooil hat geäußert, dass die Steuerung der Pumpe mit einem Smartphone (ohne explizit das Loopen zu erwähnen) nicht die gegen die Garantiebedingungen verstößt. 
* IME-DC äußerte, sie würden im Garantiefall eine Ersatzpumpe zur Verfügung stellen und die defekte Pumpe direkt zu Sooil schicken. So würden sie gar nicht wissen, ob du Looper bist oder nicht. Roche schließt dagegen jegliche Nutzung der Pumpen aus, die nicht in der Bedienungsanleitung beschrieben ist.
* Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z.B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern. Mit der Combo ist das nicht so einfach, jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.
* Das erste Einrichten der Verbindung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.
* Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z.B. beim Kochen).
* Die Combo vibriert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB. Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.
* Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden-. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.
* Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/RS garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.
