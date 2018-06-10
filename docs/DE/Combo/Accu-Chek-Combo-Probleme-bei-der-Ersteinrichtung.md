# Warum funktioniert das Pairing mit der Accu Check Combo nicht?
Es gibt mehrere Möglich warum das Pairing schief gehen kann. Probiere folgende Schritte:

1.  Verwende eine frische Batterie. Informiere dich in dem Abschnitt Batterie welche geeignet sind. Stelle sicher das die Pumpe in der nähe des Handys ist.

![Combo should be next to phone](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Combo_next_to_Phone.png)

2.  Lösche das alte BT Device in der Pumpe: **BLUETOOTH SETTINGS / CONNECTION / REMOVE**.
3.  Lösche alte Combo pairings im Handy: Einstellung / Bluetooth, entferne bond "**SpiritCombo**"
4.  Stelle sicher, dass im AAPS der closed loop deaktiviert ist. Sonst stört AAPS Ruffy beim Pairing durch 
    gescheiterte Verbindungsaufbauten.
5.  Nun starte Ruffy. Reset! und Remove Bonding Yes. Danach Connect!
6.  Im Bluetooth Menue der Combo, gehe auf **ADD DEVICE / ADD CONNECTION**. Und drücke **CONNECT!** 
    * **Diese beiden schritte sollten schnell hintereinander erfolgen.**
7.  Also nächstes sollte auf der Pumpe der Bluetoothname vom Handy angezeigt werden. Dieser wird nun selektiert.
    Auch hier ist das timing wichtig. Scheinbar gibt es hier Probleme wenn innerhalb der ersten Sekunden gedrückt wird.
    Empfehlung mindestens 5s warten dann bestätigen.
    * _Sollte schon der Screentimeout via Accu Check Combo Software auf 5s gesetzt worden sein führt das oft dazu, das 
      die Pumpe den 10 stelligen Sicherheitscode nicht anzeigt. Sowie Ruffy keine Eingabe des Codes anbietet._
    *  Empfehlung zum Pairen Screentimeout auf orginalwerte setzen (40s) und später wieder auf 5s runter.
    *  Sollte das Handy nicht von der Pumpe gefunden werden, ist möglicherweise der BT Stack auf dem Handy 
       fehlerhaft. Bitte überprüfe, ob du entweder ein gepatchtes Handy mit LineageOS >= 14.1 oder ein aktuelles Handy 
       mit Android Oreo >= 8.1 benutzt. Empfehlenswert, ist es mit einem der getesteten Telefonen zu arbeiten siehe liste [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435)
       Viele andere Handys tun es auch, haben aber oft Verbindungsprobleme. Nicht nur beim Pairen.
8.  Eingabe des 10 Sicherheitscodes von der Pumpe im Handy. Mit Ok bestätigen.
9.  Bei Erfolg -> Handy Neustart. 
10. AAPS kann nun wieder gestartet werden.