# Release notes

## Version 2.0

Erscheinungsdatum: 03.11.2018

### Wichtige neue Funktionen

* Oref1/SMB wird unterstützt ([oref1 documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Bitte lies zuerst die Dokumentation, damit du weißt was du davon erwarten kannst, wie es funktioniert, was der SMB erreichen kann und wie er zu benutzen ist, damit er gut arbeitet.
* Accu-Chek Combo Insulinpumpe wird unterstützt ([Anleitung zur Einrichtung](../Configuration/Accu-Chek-Combo-Pump.md))
* Setup Wizard: Der neue Assistent führt dich durch die Einrichtung von AndroidAPS.

### Einstellungen, die bei Umstellung von AMA zu SMB erforderlich sind

* Objective 8 muss gestartet sein, damit die SMB-Funktion zur Verfügung steht (der SMB-Reiter zeigt dir, welche Beschräkungen bestehen).
* Der Wert maxIOB enthält jetzt *das gesamte* IOB, nicht nur das hinzugefügte Basalinsulin. Das bedeutet: Wenn du einen Bolus von 8 IE gegeben hast und maxIOB ist 7, dann wird kein SMB ausgelöst, solange das Gesamt-IOB nicht wieder auf unter 7 IE abgefallen ist.
* Der Standardwert von min_5m_carbimpact erhöht sich von 3 bei AMA auf 8 beim SMB. Wenn du also von AMA auf SMB umstellst, dann musst du den Wert manuell auf 8 erhöhen.
* Bitte beachte beim Erstellen einer AndroidAPS 2.0 apk: Configuration on demand wird in der aktuellen Version des Android Gradle Plugins nicht unterstützt! Wenn der Build-Prozess mit einem Fehler zu "on demand configuration" fehlschlägt, dann kannst du folgendes tun:
  
  * Das Einstellungen-Fenster öffnen, indem du auf Datei > Einstellungen (auf dem Mac: Android Studio > Preferences) klickst.
  * Klicke im linken Fensterbereich auf Build, Execution, Deployment > Compiler.
  * Deaktiviere die "Configure on demand" Checkbox.
  * Klicke Apply oder OK.

### Startseite

* Im oberen Menüband (Abschnitt A) kannst du durch langen Fingerdruck den Loop pausieren oder deaktivieren, die Pumpe trennen, das aktuelle Profil anzeigen und einen Profilwechsel machen, sowie temporäre Ziele (temp targets - TT) einstellen. Die temporären Ziele verwenden Standardwerte, die du in den Einstellungen festlegen kannst. Das neue Standard-Ziel “HypoTT” löst ein temporäres Ziel im höheren BZ-Bereich aus, damit der Loop nicht überreagiert nachdem du Korrektur-Kohlenhydrate gegessen hast.
* Neue Behandlungs-Schaltfläche: die alte Behandlungs-Schaltfläche ist weiterhin verfügbar, aber standardmäßig deaktiviert. Du kannst jetzt selbst einstellen, welche Schaltflächen du auf dem Home-Screen haben willst. Es gibt neue Schaltflächen für Insulin und Kohlenhydrate (einschließlich [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Farbige Vorhersage-Linien: 
  * Orange: COB (Die Farbe Orange wird generell genutzt, um COB und Kohlenhydrate darzustellen.)
  * Dunkelblau: IOB (Die Farbe Dunkelblau wird generell genutzt, um IOB und Insulin darzustellen.)
  * Light blue: zero-temp
  * Dunkelgelb: UAM
* Option in den Dialogen für Insulin, Kohlenhydrate, Rechner und Füllen/Vorfüllen ein Feld für Bemerkungen, die zu Nightscout hochgeladen werden, anzuzeigen.
* Überarbeiteter Füllen/Vorfüllen-Dialog. Möglichkeit, gleichzeitig Careportal-Einträge für Katheter- und Reservoirwechsel zu erstellen.

### Smartwatch

* Auf die separate Build Variante “wearcontrol” wird verzichtet, die Smartwatch-Steuerung ist jetzt in der full build Variante enthalten. Um die Bolus-Steuerung auf der Smartwatch zu verwenden, musst du dies in AAPS auf dem Smartphone aktivieren.
* Der Rechner wird nur noch nach Kohlenhydraten (und - falls aktiviert - nach einem Prozentsatz) fragen. Du kannst in den Einstellungen auf dem Smartphone festlegen, welche Parameter bei einem Bolus, der von der Smartwatch aus gegeben wird, in die Berechnung einbezogen werden sollen.
* Bestätigungen und Info-Dialoge funktionieren jetzt auch unter Android Wear 2.0 gut.
* eCarbs Menüeintrag hinzugefügt.

### Neue Plugins

* PocTech App als BZ-Quelle
* Dexcom App (patched) als BZ-Quelle
* Oref1 Empfindlichkeitserkennung

### Verschiedenes

* Die App verwendet jetzt “drawer”, um alle Plugins zu zeigen. Alle Plugins, die im Konfigurations-Generator als sichtbar markiert sind, werden als Reiter im oberen Bereich (Abschnitt A) angezeigt (Favoriten).
* Überarbeitung des Konfigurations-Generators und des Objectives-Reiters. Beschreibungen hinzugefügt.
* Neues App-Icon
* Viele weitere Verbesserungen und Fehlerbehebungen.
* Nightscout-unabhängige Alarme, falls die Pumpe für längere Zeit nicht erreichbar ist (z.B. leere Pumpenbatterie) und veraltete BZ-Werte (siehe *Lokale Alarme* in den Einstellungen)
* Option, den Bildschrim immer an zu lassen.
* Option, die Hinweise als Systemmeldungen anzuzeigen.
* Advanced filtering (das erlaubt die Nutzung von “SMB immer an” und “6 Stunden nach dem Essen”) wird unterstützt mit der gepatchten Dexcom App (nicht mit der originalen Dexcom App!) oder xDrip mit dem G5 native mode als BZ-Quelle.