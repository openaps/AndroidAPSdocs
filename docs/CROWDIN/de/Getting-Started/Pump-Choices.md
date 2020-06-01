# Pumenwahl

AndroidAPS funktioniert derzeit mit

* Accu-Chek Combo
* Accu-Chek Insight
* einige alte Medtronic-Pumpen
* Dana R
* Dana RS 

Pumpen. Informationen über weitere Pumpen, die möglicherweise irgendwann mit AndroidAPS funktionieren, findest du auf der Seite [Zukünftig ggf. loopbare Pumpen](Future-possible-Pump-Drivers.md).

Leute, die sich für eine neue Pumpe entscheiden müssen, fragen oft, für welche sie sich entscheiden sollen. Details zu den verschiedenen Distributoren findest du [in dieser Tabelle](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0). Ergänze bitte deine eigenen Erfahrungen, wenn sie nicht bereits aufgeführt sind.

Die Combo und die Insight sind solide Pumpen und loopbar. Die Vorteile der DanaR/RS sind jedoch:

* Die DanaR/RS kann sich mit fast jedem Smartphone verbinden, auf dem das Betriebssystem Google Android >= 5.1 installiert ist. Ein Austausch der werksseitigen Smartphone-Software (z. B. durch das Lineage Betriebssystem) ist nicht nötig. Wenn dein Smartphone kaputt geht oder gestohlen wird, kannst du auf einem anderen / neuen Smartphone sehr schnell die Pumpe wieder steuern... Mit der Combo ist das nicht so einfach, jedenfalls nicht solange Android 8.1 nur auf wenigen Smartphones installiert ist.

* Das erste Einrichten der Kopplung zwischen der DanaR/RS und dem Smartphone ist einfacher. Allerdings ist dieser Schritt normalerweise nur bei der Ersteinrichtung erforderlich.

* Bislang arbeitet die Combo mit screen parsing. Grundsätzlich funktioniert das gut, aber es ist leider langsam. Beim Loopen ist das nicht so schlimm, denn das läuft alles im Hintergrund ab. Das führt aber dazu, dass eine bestehende Bluetooth-Verbindung leichter abgebrochen wird. Das kann unpraktisch sein, wenn du dich während eines Bolus-Prozesses zu weit vom Smartphone entfernst (z. B. beim Kochen).

* Die Combo virbiert am Ende jeder TBR, die DanaR vibriert (oder piept) bei Abgabe eines SMB. In der Nacht wird der Loop meistens eher TBR setzen statt SMB. Die DanaRS kann so eingestellt werden, dass sie weder bei TBR, noch bei SMB vibriert oder piept.

* Die History kann auf der DanaRS in wenigen Sekunden mit COB ausgelesen werden. Deshalb können die Smartphones offline leicht ausgewechselt werden. Sobald einige CGM-Daten verfügbar sind, kann das Loopen fortgesetzt werden.

* Alle Pumpen, die AndroidAPS unterstützt, sind (jedenfalls bei Auslieferung) wasserdicht. Nur die DanaR/Rs garantiert auch während der Nutzung Wasserdichtigkeit durch das abgedichtete Batteriefach und das Reservoir-System.

Die Combo ist natürlich eine sehr gute Pumpe. Sie hat auch den Vorteil, dass die Auswahl an Kathetern wegen des Standard Luer-Lock-Anschlusses groß ist. Und sie verwendet Standard-Batterien, die rund um die Uhr an jeder Tankstelle erhältlich sind. Im Notfall kannst du sie sogar aus der Fernbedienung in deinem Hotelzimmer "ausleihen" ;-)