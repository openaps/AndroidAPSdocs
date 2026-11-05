# DanaR

*Diese Anleitung beschreibt die Konfiguration der App und deiner Pumpe, wenn du die DanaR nutzt. Falls Du die DanaRS (Markteinführung 2017) verwendest, gehe auf die Informationen zur [DanaRS Insulinpumpe](./DanaRS-Insulin-Pump.md).*

## Funktionalitäten bei der Nutzung mit AAPS

* Kommuniziert mit **AAPS** über das Bluetooth Deines Smartphones, ohne zusätzliches Kommunikationsgerät.
* Zeitzonen- und Sommerzeitwechsel erfordern nichts Besonderes, da die Pumpe ihre eigene Historie nicht verwendet.

## Einrichtung

* Gehe in der Pumpe zum Hauptmenü -> Einstellen -> Anwendermenü
* Gehe zu “8. V Bolus”

![DanaR](../images/danar1.png)

* Gehe in der Pumpe zum Hauptmenü -> Einstellen -> Suchen
* Gehe in den Smartphone-Einstellungen zu Bluetooth, suche nach Geräten in der Nähe, wähle die Seriennummer Deiner DanaR und gib das Passwort ein (das Kopplungspasswort ist 0000). Falls die Dana nicht angezeigt wird, starte das Handy neu und wechsle die Batterie der Dana. Wiederhole anschließend diesen Schritt.

* Öffne in **AAPS** oben links das **Menü** (☰), gehe zu **Konfiguration** > **Pumpe** und wähle Deinen DanaR-Typ aus (**DanaR**, **DanaR Korean** oder **DanaRv2**).
  
  ![Configuration > Pump with the DanaR plugins](../images/v4/Configuration/configuration_pump_list_1.png)

* Öffne den Pumpenbildschirm: Tippe auf der DanaR-Karte auf **Plugin öffnen** (oder gehe zu **Verwalten** > **Pumpe**).

* Tippe auf **Koppeln**. Auf dem Kopplungsbildschirm: 
  * Gib unter **Pumpen-Passwort** das Passwort Deiner Pumpe ein (Standardpasswort ist 1234).
  * Tippe unter **Gekoppeltes Gerät auswählen** auf die Seriennummer Deiner DanaR. Ist die Liste leer, tippe auf **Bluetooth-Einstellungen öffnen** und kopple zuerst die Pumpe mit Deinem Smartphone (siehe Schritt oben). Wenn Du zu **AAPS** zurückkehrst, erscheint die Pumpe in der Liste. Ist das nicht der Fall, tippe auf das Aktualisieren-Symbol.
  * Tippe auf **Koppeln**. **AAPS** verbindet sich mit der Pumpe und prüft das Passwort.
* Um die Treibereinstellungen zu ändern, tippe unter **Konfiguration** > **Pumpe** auf der DanaR-Karte auf **Einstellungen**: 
  * **Bolusgeschwindigkeit** (DanaR und DanaRv2): Ändert die Standard-Bolusgeschwindigkeit (12 s/IE, 30 s/IE oder 60 s/IE).
  * **Nutze den verzögerten Bolus für hohe TBR (>200%)** (DanaR und DanaR Korean): Aktiviere das, wenn **AAPS** eine Basalrate über 200 % erlauben soll. Das bedeutet aber, dass Du nicht mit hohen temporären Basalraten loopen kannst, während Du verzögerte Boli für Mahlzeiten nutzt.
* Stelle auf der Pumpe die Basalschritte auf 0,01 IE/h.
* Stelle auf der Pumpe die Bolusschritte auf 0,1 IE. **AAPS** liest die Bolusschritte aus der Pumpe aus und verwendet sie für jeden Bolus.
* Erlaube die Vewendung von verlängerten Boli auf der Pumpe

## Mit der Dana R Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen zum Reisen über Zeitzonen hinweg siehe [Mit der Pumpe über Zeitzonen hinweg reisen](#timezone-traveling-danarv2-danars).

## Wo ich Hilfe bekomme

Der DanaR-Treiber wird von der Community **ehrenamtlich** entwickelt. Bevor Du um Hilfe bittest, bitte:

1. **Lies** den entsprechenden Abschnitt dieser Dokumentation, um zu prüfen, wie die Funktion gedacht ist.
2. **Frag** im Kanal *#AAPS* auf [Discord](https://discord.gg/4fQUWHZ4Mw) oder in einem der anderen [Community-Kanäle](../GettingHelp/WhereCanIGetHelp.md) nach.
3. **Melde einen Fehler**, indem Du die [bestehenden Issues](https://github.com/nightscout/AndroidAPS/issues) durchsuchst; ist Deiner nicht dabei, eröffne ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und hänge Deine [Logdateien](../GettingHelp/AccessingLogFiles.md) an.

Gib bei der Bitte um Hilfe Hersteller und Modell Deines Smartphones, die Android-Version, die **AAPS**-Version und eine verständliche Beschreibung des Problems an (was sich geändert hat, wann es zuletzt funktioniert hat).