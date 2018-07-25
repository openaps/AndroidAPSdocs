# Release Notes

## Version 2.0

Erscheinungsdatum: xx.xx.2018

### Neue Funktionen

* oref1/SMB wird unterstützt ([Oref1-Dokumentation](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#sensitivitat-oref1), [SMB-Dokumentation](http://androidaps.readthedocs.io/en/latest/DE/konfigurations-generator.html#smb)). Bitte lies zuerst die Dokumentation, damit du weißt was du davon erwarten kannst, wie es funktioniert, was der SMB erreichen kann und wie er zu benutzen ist, damit er gut arbeitet.
* Accu-Chek Combo Insulinpumpe wird unterstützt ([Einrichtungs-Anleitung](http://androidaps.readthedocs.io/en/latest/DE/einstellungen.html#akku-chek-combo))
* Setup Wizard: der neue Assistent führt dich durch die Einrichtung von AndroidAPS 

### Einstellungen, die bei Umstellung von AMA zu SMB erforderlich sind

* **Objective 8** muss gestartet sein, dass die SMB-Funktion zur Verfügung steht (der SMB-Reiter zeigt dir, welche Beschräkungen bestehen)
* Der Wert **maxIOB** enthält jetzt _das gesamte_ IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet: Wenn du einen Bolus von 8 IE gegeben hast und maxIOB ist 7, dann wird kein SMB ausgelöst, solange das Gesamt-IOB nicht wieder auf unter 7 IE abgefallen ist.
* Der Standardwert von **min_5m_carbimpact** erhöht sich von 3 bei AMA auf 8 beim SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.

### Übersicht / Home-Screen

* Im oberen Menüband kannst du durch langen Fingerdruck den Loop pausieren oder deaktivieren, die Pumpe trennen, das aktuelle Profil anzeigen und einen Profilwechsel machen, temporäre Ziele (temp targets - TT) einstellen. Die temporären Ziele verwenden Standardwerte, die du in den Einstellungen festlegen kannst. Das neue Standard-Ziel "HypoTT" löst ein temporäres Ziel im höheren BZ-Bereich aus, damit der Loop nicht überreagiert nachdem du Korrektur-Kohlenhydrate gegessen hast.
* Neue Behandlungs-Schaltfläche: die alte Behandlungs-Schaltfläche ist weiterhin verfügbar, aber standardmäßig deaktiviert. Du kannst jetzt selbst einstellen, welche Schaltflächen du auf dem Home-Screen haben willst. Es gibt neue Schaltflächen für: Insulin, Kohlenhydrate (einschließlich [eCarbs/extended carbs](http://androidaps.readthedocs.io/en/latest/EN/Usage/Extended-Carbs.html))
* Farbige Vorhersage-Linien:
  * Orange: COB
  * Dunkelblau: IOB
  * Hellblau: zero-temp
  * Dunkelgelb: UAM
* Die Dialoge für Insulin, Kohlenhydrate, Rechner und Füllen/Vorfüllen haben jetzt ein Feld für Bemerkungen, das auch zu Nightscout hochgeladen wird
* Überarbeiteter Füllen/Vorfüllen-Dialog. Möglichkeit, gleichzeitig Careportal-Einträge für Katheter- und Reservoirwechsel zu erstellen

### Watch

* Auf die separate Build Variante "wearcontrol" wird verzichtet, die Smartwatch-Steuerung ist jetzt in der full build Variante enthalten. Um die Bolus-Steuerung auf der Smartwatch zu verwenden, musst du dies in AAPS auf dem Smartphone aktivieren
* Der Rechner wird nur noch nach Kohlenhydraten (und, falls aktiviert, nach einem Prozentsatz) fragen. Du kannst in den Einstellungen auf dem Smartphone festlegen, welche Parameter bei einem Uhrenbolus in die Berechnung einbezogen werden sollen.
* Bestätigungen und Info-Dialoge funktionieren jetzt auch auf Android Wear 2.0 gut
* eCarbs Menüeintrag hinzugefügt

### Neue plugins

* PocTech App als BZ-Quelle
* Dexcom App (patched) als BZ-Quelle
* oref1 Empfindlichkeitserkennung

### Sonstiges

* Die App verwendet jetzt "drawer", um alle Plugins zu zeigen; alle Plugins, die im Konfigurations-Generator als sichtbar markiert sind, werden als Reiter im oberen Bereich angezeigt (Favoriten)
* Überarbeitung des Konfigurations-Generators und des Objectives-Reiters, Beschreibungen hinzugefügt
* Neues App-Icon
* Viele weitere Verbesserungen und Fehlerbehebungen
* Nightscout-unabhängige Alarme, falls die Pumpe für längere Zeit nicht erreichbar ist (z.B. leere Pumpenbatterie) und veraltete BZ-Werte (siehe _Lokale Alarme_ in den Einstellungen)
* Option, den Bildschrim immer an zu lassen
* Option, die Hinweise als Systemmeldungen anzuzeigen
* Advanced filtering (das erlaubt die Nutzung von "SMB immer an" und "6 Stunden nach dem Essen") wird unterstützt mit der gepatchten Dexcom App (nicht mit der originalen Dexcom App!) oder xDrip mit dem  G5 native mode als BZ-Quelle.
