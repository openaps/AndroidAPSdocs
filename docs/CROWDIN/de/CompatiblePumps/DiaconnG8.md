# Diaconn G8 Insulinpumpe

## Bluetooth-Pairing

- Klicke auf das Hamburger Menü in der oberen linken Ecke.

![grafik](../images/DiaconnG8/DiaconnG8_01.jpg)

- Klicke auf Konfiguration.

![grafik](../images/DiaconnG8/DiaconnG8_02.jpg)

- Nachdem Auswahl der Diaconn G8 Pumpe auf das Einstellungssymbol (Zahnrad) klicken.

![grafik](../images/DiaconnG8/DiaconnG8_03.jpg)

- Wähle 'ausgewählte Pumpe'.

![grafik](../images/DiaconnG8/DiaconnG8_04.jpg)

- Wähle die Modellnummer Deiner Insulinpumpe aus, sobald sie in der Liste erscheint.

![grafik](../images/DiaconnG8/DiaconnG8_05.jpg)

- Es gibt zwei Möglichkeiten, um Deine Modellnummer zu überprüfen:

1. Die letzten 5 Ziffern der Seriennummer auf der Rückseite der Pumpe.
2. Drücke den = Button > Information > BLE > letzte 5 Ziffern.

![grafik](../images/DiaconnG8/DiaconnG8_06.jpg)

- Nach Auswahl der Pumpe erscheint ein Fenster, in dem der PIN Code abgefragt wird. Gib die PIN-Nummer ein, die auf Deiner Pumpe angezeigt wird, um die Verbindung abzuschließen.

 ![grafik](../images/DiaconnG8/DiaconnG8_07.jpg)

## Überprüfung des Pumpenstatus und Synchronisierung der Protokolle

- Sobald Ihre Pumpe verbunden ist, klicke auf das Bluetooth-Symbol, um den Status zu überprüfen und die Protokolle zu synchronisieren.

![grafik](../images/DiaconnG8/DiaconnG8_08.jpg)

## Bluetooth-Fehlerbehebung

**Was ist bei einer instabilen Bluetooth-Verbindung mit der Pumpe zu tun?**

### Methode 1) Überprüfe die Pumpe erneut, nachdem die AAPS-Anwendung abgeschlossen ist.

- Klicke auf die Schaltfläche mit den 3 Punkten oben rechts.

![grafik](../images/DiaconnG8/DiaconnG8_09.jpg)

- Klicke auf "Beenden".

![grafik](../images/DiaconnG8/DiaconnG8_10.jpg)

### Methode 2) Wenn die erste Methode nicht funktioniert, trenne die Bluetooth-Verbindung und stelle sie dann wieder her.

- Halte die Bluetooth-Taste an der Oberseite etwa 3 Sekunden lang gedrückt.

![grafik](../images/DiaconnG8/DiaconnG8_11.jpg)

- Klicke auf den Button 'Einstellungen' auf der gekoppelten Diaconn G8 Insulinpumpe.

![grafik](../images/DiaconnG8/DiaconnG8_12.jpg)

- Entkoppeln.

![grafik](../images/DiaconnG8/DiaconnG8_13.jpg)

- Wiederhole den Bluetooth-Pairing-Prozess für die Pumpe (siehe oben).

## Weitere Informationen

### Options-Einstellungen für Diaconn G8 Insulinpumpe

- Hamburger Menü > Konfiguration > Pumpe > Diaconn G8 > Einstellungen
- DIACONN G8 oben> 3-Punkte-Knopf oben rechts > Diaconn G8-Einstellungen

![Diaconn G8 Pumpenoptionen](../images/DiaconnG8/DiaconnG8_14.jpg)

- Wenn die Option **Reservoirwechsel protokollieren** aktiviert ist, werden die entsprechenden Details automatisch in das Careportal hochgeladen, wenn das Ereignis "Insulinwechsel" eintritt.
- Ist die Option **Kanülenwechsel protokollieren** aktiviert, werden bei einem Kanülenwechsel die entsprechenden Details automatisch in das Careportal hochgeladen.
- Wenn die Option **Schlauchwechsel protokollieren** aktiviert ist, werden die relevanten Details automatisch in das Careportal hochgeladen.
- Wenn die Option **Batteriewechsel protokollieren** aktiviert ist, werden die relevanten Details neim Batteriewechsel automatisch in das Pflegeportal hochgeladen und die Schaltfläche PUMPENBATTERIEWECHSEL auf der Registerkarte AKTION ist deaktiviert. (Hinweis: Um die Batterie zu wechseln, stoppe bitte alle laufenden Injektionsvorgänge.)

![Diaconn G8 Aktionsmenü](../images/DiaconnG8/DiaconnG8_15.jpg)

### Funktion verzögerter Bolus

- Wenn Du einen verzögerten Bolus verwendest, wird der "Closed Loop"-Modus deaktiviert.
- See [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.
