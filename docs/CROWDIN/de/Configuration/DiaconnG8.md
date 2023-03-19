# Diaconn G8 Insulinpumpe

## Bluetooth-Pairing

- Klicke auf das Hamburger Menü in der oberen linken Ecke.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Hamburger Menü
  > ```

- Klicke auf Konfiguration.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Konfiguration
  > ```

- Nachdem Auswahl der Diaconn G8 Pumpe auf das Einstellungssymbol (Zahnrad) klicken.

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Einstellungen
  > ```

- Wähle 'ausgewählte Pumpe'.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Pumpe auswählen
  > ```

- Wähle die Modellnummer Deiner Insulinpumpe aus, sobald sie in der Liste erscheint.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Pump pairing
  > ```

- Es gibt zwei Möglichkeiten, um Deine Modellnummer zu überprüfen:

  > 1. Die letzten 5 Ziffern der Seriennummer auf der Rückseite der Pumpe.
  > 2. Drücke den = Button > Information > BLE > letzte 5 Ziffern.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: "Modellnr.`

- Nach Auswahl der Pumpe erscheint ein Fenster, in dem der PIN Code abgefragt wird. Gib die PIN-Nummer ein, die auf Deiner Pumpe angezeigt wird, um die Verbindung abzuschließen.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: PIN-Code
  > ```

## Überprüfung des Pumpenstatus und Synchronisierung der Protokolle

- Sobald Ihre Pumpe verbunden ist, klicke auf das Bluetooth-Symbol, um den Status zu überprüfen und die Protokolle zu synchronisieren.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: Bluetooth-Status
  > ```

## Bluetooth-Fehlerbehebung

**Was ist bei einer instabilen Bluetooth-Verbindung mit der Pumpe zu tun?**

### Methode 1) Überprüfe die Pumpe erneut, nachdem die AAPS-Anwendung abgeschlossen ist.

- Klicke auf die Schaltfläche mit den 3 Punkten oben rechts.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Menü Einstellungen
  > ```

- Klicke auf "Beenden".

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Beenden
  > ```

### Methode 2) Wenn die erste Methode nicht funktioniert, trenne die Bluetooth-Verbindung und stelle sie dann wieder her.

- Halte die Bluetooth-Taste an der Oberseite etwa 3 Sekunden lang gedrückt.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bluetooth-Button
  > ```

- Klicke auf den Button 'Einstellungen' auf der gekoppelten Diaconn G8 Insulinpumpe.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Button Einstellung
  > ```

- Entkoppeln.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Entkoppeln
  > ```

- Wiederhole den Bluetooth-Pairing-Prozess für die Pumpe (siehe oben).

## Weitere Informationen

### Options-Einstellungen für Diaconn G8 Insulinpumpe

- Hamburger Menü > Konfiguration > Pumpe > Diaconn G8 > Einstellungen
- DIACONN G8 oben> 3-Punkte-Knopf oben rechts > Diaconn G8-Einstellungen

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Diaconn G8 Pumpenoptionen
```

- Wenn die Option **Reservoirwechsel protokollieren** aktiviert ist, werden die entsprechenden Details automatisch in das Careportal hochgeladen, wenn das Ereignis "Insulinwechsel" eintritt.
- Ist die Option **Kanülenwechsel protokollieren** aktiviert, werden bei einem Kanülenwechsel die entsprechenden Details automatisch in das Careportal hochgeladen.
- Wenn die Option **Schlauchwechsel protokollieren** aktiviert ist, werden die relevanten Details automatisch in das Careportal hochgeladen.
- Wenn die Option **Batteriewechsel protokollieren** aktiviert ist, werden die relevanten Details neim Batteriewechsel automatisch in das Pflegeportal hochgeladen und die Schaltfläche PUMPENBATTERIEWECHSEL auf der Registerkarte AKTION ist deaktiviert. (Hinweis: Um die Batterie zu wechseln, stoppe bitte alle laufenden Injektionsvorgänge.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Diaconn G8 Aktionsmenü
```

### Funktion verzögerter Bolus

- Wenn Du einen verzögerten Bolus verwendest, wird der "Closed Loop"-Modus deaktiviert.
- Auf [dieser Seite](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) wird erläutert, warum der erweiterte Bolus im "Closed Loop"-Modus nicht funktioniert.
