# CareLevo

Die CareLevo ist eine schlauchlose Patch-Pumpe von CareMedi. Jeder Patch fasst bis zu 300 IE Insulin und wird bis zu 7 Tage (168 Stunden) getragen. Sie kommuniziert mit **AAPS** über das Bluetooth Deines Smartphones, ohne zusätzliches Gerät.

```{admonition} New driver
:class: warning
Der CareLevo-Treiber ist neu in **AAPS**. Lies diese ganze Seite, bevor Du Deinen ersten Patch aktivierst, und halte die Gebrauchsanweisung der Pumpe bereit.
```

Die kleinste Dosis, die der Patch abgeben kann, ist 0,05 IE. Setze Deine Basalraten im **Profil** auf mindestens 0,05 IE/h in Schritten von 0,05 IE/h, sonst weichen das vom **Profil** erwartete und das vom Patch abgegebene Insulin leicht voneinander ab. **AAPS** verwendet die Basalraten, die der Patch angenommen hat.

```{contents} Table of contents
:depth: 1
:local: true
```

## Funktionalitäten bei der Nutzung mit AAPS

* Kommuniziert mit **AAPS** über das Bluetooth Deines Smartphones, ohne zusätzliches Kommunikationsgerät.
* Bolus in Schritten von 0,05 IE.
* Basalraten von 0,05 IE/h bis 15 IE/h in Schritten von 0,05 IE/h, mit Basalabschnitten von 30 Minuten.
* Temporäre Basalraten als absolute Rate, bis zu 12 Stunden.
* Verzögerter Bolus bis zu 8 Stunden.
* Sommerzeit- und Zeitzonenwechsel müssen manuell erledigt werden. Der Patch benachrichtigt Dich, wenn sich die Zeitzone ändert.

## Pumpen-Einrichtung

1. Öffne oben links auf dem **AAPS**-Startbildschirm das **Menü** (☰) und wähle **Konfiguration**.
1. Wähle im Bereich Pumpe **Carelevo**.
1. Drücke die Zurück-Taste, um zum Startbildschirm zurückzukehren.

![The Carelevo plugin selected in Configuration > Pump](../images/v4/Pumps/carelevo_enabled.png)

## Einstellungen

Öffne den Pumpenbildschirm über **Verwalten → Pumpe** (oder **Konfiguration → Pumpe → Plugin öffnen**).

Öffne die CareLevo-Einstellungen über das Symbol **Einstellungen** (Zahnrad) oben rechts. Es gibt drei Einstellungen:

![Carelevo driver settings](../images/v4/Pumps/carelevo_settings.png)

### Benachrichtigungseinstellungen - Wenig Insulin

Der Patch benachrichtigt Dich, wenn die Restmenge Insulin im Reservoir die gewählte Menge erreicht. Einstellbar sind 20 IE bis 50 IE in Schritten von 5 IE. Standard sind 30 IE. Unabhängig von dieser Einstellung gibt der Patch einen kritischen Alarm aus und stoppt die Insulinabgabe, wenn weniger als 10 IE übrig sind.

### Benachrichtigungseinstellungen - Patchnutzung

Der Patch benachrichtigt Dich, wenn er die gewählte Anzahl Stunden getragen wurde, damit Du den Wechsel planen kannst. Einstellbar sind 24 bis 167 Stunden. Standard sind 116 Stunden.

### Patchinfo-Alarm

Ist das eingeschaltet, piept der Patch, wenn ein Bolus, ein verzögerter Bolus oder eine temporäre Basalrate beginnt und endet. Standardmäßig ausgeschaltet.

## Der Pumpenbildschirm

![Carelevo pump screen without an active patch](../images/v4/Pumps/carelevo_pump_screen.png)

Der Pumpenbildschirm zeigt den **Bluetooth-Status** (Kein aktiver Patch, Nicht verbunden oder Verbunden), die **Seriennummer** des Patches, seinen **Aktivierungszeitpunkt** und sein **Ablaufdatum**, die aktuelle **Basalrate** und **Temporäre Basalrate**, **Insulin verbleibend** (verbleibend / gefüllt), **Verbleibende Patch-Zeit** und **Insgesamt abgegebenes Insulin**.

Die Schaltflächen hängen vom Zustand des Patches ab:

* **Patch aktivieren**: Startet die Aktivierung eines neuen Patches, siehe unten.
* **Insulin-Anleitung**: Zeigt die zwölf Schritte zum Füllen eines Patches mit Insulin.
* **Abgabe unterbrechen** / **Abgabe fortsetzen**: Unterbricht die Insulinabgabe und startet sie wieder, siehe unten.
* **Patch verwerfen**: Beendet den aktuellen Patch, damit ein neuer aktiviert werden kann.

## Einen Patch aktivieren

Stelle vor dem Start sicher, dass in **AAPS** ein **Profil** aktiv und Bluetooth eingeschaltet ist. Der Patch muss nach dem Einschalten innerhalb einer begrenzten Zeit aktiviert werden; läuft die Zeit ab, gibt der Patch den Alarm **Patch-Anwendungs-Timeout** aus und kann nicht verwendet werden.

Tippe auf dem Pumpenbildschirm auf **Patch aktivieren** und folge den Schritten. Bis die Nadel eingeführt ist, kannst Du jederzeit abbrechen; Deine Eingaben werden dann verworfen.

### Insulin auswählen

Bestätige das Insulin, das Du verwendest. Der Patch braucht schnell wirkendes U-100-Insulin.

### Patch mit Insulin füllen

Fülle den Patch mit 50 bis 300 IE, je nachdem, wie lange Du ihn tragen wirst. Tippe auf **Insulin-Anleitung**, wenn Du die Anleitung zum Füllen brauchst. Tippe dann auf die Füllmenge und wähle die eingefüllte Menge aus; **AAPS** verwendet sie, um das verbleibende Insulin anzuzeigen.

### Patch verbinden

1. Nimm den Patch aus der Blisterverpackung und entferne die Nadelkappe.
1. Drücke den Einschaltknopf des Patches länger als eine Sekunde. Tippe nach dem Piepton auf **Patch suchen**.
1. Ist der gefundene Patch der richtige, tippe auf **Bestätigen**. Andernfalls tippe auf **Erneut scannen**.

### Sicherheitsprüfung

Ist der Patch verbunden, tippe auf **Sicherheitsprüfung**. Der Patch testet sich selbst und entlüftet. Prüfe, ob sich an der Nadelspitze ein Insulintropfen gebildet hat. Ist kein Tropfen zu sehen, tippe auf **Erneut versuchen**. Ist die Prüfung abgeschlossen, tippe auf **Weiter**.

### Setzstelle und Anbringen des Patches

1. Wähle die Stelle aus, an der Du den Patch tragen wirst.
1. Reinige die Stelle gründlich mit einem Alkoholtuch.
1. Entferne die Trägerfolie und klebe den Patch mit dem markierten Punkt nach oben auf die Haut.
1. Tippe auf **Weiter**, sobald der Patch angebracht ist.

### Nadel einführen

1. Drehe die Sicherheitskappe in Pfeilrichtung und nimm sie ab.
1. Drücke den Druckknopf des Applikators ganz nach unten und halte ihn 10 Sekunden lang gedrückt. Ein Piepton ertönt, wenn die Nadel eingeführt ist.
1. Nimm den Applikator ab und tippe auf **Setzen bestätigen**.

Schlägt das Einführen fehl, sagt Dir **AAPS**, wie viele Versuche noch übrig sind. Ist kein Versuch mehr übrig, gibt der Patch den Alarm **Fehler beim Einführen der Nadel** aus und muss ersetzt werden.

Die Insulinabgabe beginnt, sobald das Einführen bestätigt ist.

## Bolus-Meldungen

Lehnt der Patch einen Bolus ab, sagt Dir **AAPS** den Grund. Zum Beispiel bedeutet *Bolus kann nicht abgegeben werden. Verfügbarer Bolus: 2,8 IE*, dass der Patch gerade nur diese Menge abgeben kann.

Stoppst Du einen Bolus und der Patch bestätigt den Stopp nicht, wartet **AAPS**, bis der Bolus endet, und erfasst die vom Patch gemeldete Menge. Wurde ein Bolus nicht erfasst (zum Beispiel weil er während der Abgabe gestoppt wurde), ergänzt **AAPS** ihn aus der Gesamtmenge des Patches und bittet Dich, vor einem neuen Versuch das IOB zu prüfen.

## Insulinabgabe unterbrechen und fortsetzen

Tippe auf dem Pumpenbildschirm auf **Abgabe unterbrechen** und wähle, wie lange die Abgabe pausieren soll: 30 Minuten bis 4 Stunden in Schritten von 30 Minuten. Die Abgabe startet nicht von selbst wieder: Ist die Pause vorbei, gibt der Patch die Warnung **Insulin starten** aus. Tippe auf dem Pumpenbildschirm auf **Abgabe fortsetzen** oder in der Warnung auf **Insulin starten** und bestätige.

## Einen Patch verwerfen

Tippe auf dem Pumpenbildschirm auf **Patch verwerfen** und bestätige. Die Insulinabgabe stoppt, und der Patch kann nicht mehr verwendet werden. Entferne den Patch von Deinem Körper und aktiviere einen neuen.

Hat ein kritischer Alarm den Patch gestoppt, bietet der Alarm stattdessen **Patch deaktivieren** an. Tippst Du darauf, wird der Patch genauso verworfen.

(carelevo-alarms-and-notifications)=

## Alarme und Benachrichtigungen

Der Patch meldet Ereignisse in drei Stufen. Alle werden als **AAPS**-Benachrichtigungen angezeigt.

### Kritische Alarme

Die Insulinabgabe ist gestoppt. Handle sofort:

* **Wenig Insulin**: Weniger als 10 IE sind übrig. Deaktiviere den Patch und wechsle ihn.
* **Patch abgelaufen**: Der Patch hat das Ende seiner Laufzeit erreicht. Deaktiviere den Patch und wechsle ihn.
* **Niedriger Akkustand**: Verwirf den Patch und wechsle ihn.
* **Hohe/Niedrige Temperatur**: Begib Dich an einen Ort mit geeigneter Temperatur, zwischen 4,4 °C und 37,2 °C (40 °F und 99 °F).
* **Auto-Off**: Der Patch hat gestoppt, weil die Warnung Auto-Off ignoriert wurde. Tippe auf **Insulin starten**, um die Basalabgabe wieder zu starten.
* **Patch-Anwendungs-Timeout**, **Selbstdiagnose fehlgeschlagen**, **Patch-Fehler**, **Verschluss** und **Fehler beim Einführen der Nadel**: Deaktiviere den Patch und wechsle ihn.

### Alarme

Die Insulinabgabe läuft weiter, aber etwas braucht Deine Aufmerksamkeit:

* **Wenig Insulin**: Das Reservoir hat die unter **Benachrichtigungseinstellungen - Wenig Insulin** eingestellte Menge erreicht. Bereite den Patchwechsel vor.
* **Patch läuft in Kürze ab** und **Patch-Nutzungsdauer abgelaufen**: Wechsle den Patch.
* **Niedriger Akkustand**: Bereite den Patchwechsel vor.
* **Hohe/Niedrige Temperatur**: Die Abgabe pausiert, bis der Patch wieder zwischen 4,4 °C und 37,2 °C (40 °F und 99 °F) liegt.
* **Auto-Off**: Tippe auf **OK**. Wird sie ignoriert, wird die Warnung zu einem kritischen Alarm, und die Abgabe stoppt.
* **Patch-Aktivierung unvollständig**: Tippe auf **OK**, um die Aktivierung abzuschließen.
* **Insulin starten**: Die von Dir eingestellte Pause ist vorbei. Tippe auf **Insulin starten**, um die Abgabe fortzusetzen.
* **Bluetooth einschalten** und **BLE nicht verbunden**: Das Smartphone erreicht den Patch nicht. Schalte Bluetooth ein oder prüfe die Verbindung zum Patch.

### Hinweise

Nur zur Information: **Wenig Insulin**, **Patch-Nutzungszeitbenachrichtigung** (die unter **Benachrichtigungseinstellungen - Patchnutzung** eingestellte Zeit ist vorbei), **Patchprüfbenachrichtigung**, **Zeitzonenänderung** und **Blutzucker prüfen**

Der Patch meldet außerdem, wenn seine eigene Abschaltung bei niedriger Glukose (**LGS**) beginnt oder endet. **AAPS** nutzt diese Funktion nicht; der Loop kümmert sich selbst um niedrige Glukosewerte.

## Wo ich Hilfe bekomme

Melde Probleme mit dem CareLevo-Treiber auf der [Issues-Seite von AAPS auf GitHub](https://github.com/nightscout/AndroidAPS/issues) oder in den Community-Kanälen von AAPS, siehe [Wo bekomme ich Hilfe](../GettingHelp/WhereCanIGetHelp.md).
