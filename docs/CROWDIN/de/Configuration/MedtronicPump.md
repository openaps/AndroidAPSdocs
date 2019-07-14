# Medtronic Pumpen

**>>>> Der Medtronic Pumpentreiber ist bisher noch nicht Bestandteil der AndroidAPS Master Version. Er wird in der kommenden Version verfügbar sein. <<<<**

* * *

Funktioniert nur mit ätern Medtronic Pumpen (Details siehe weiter unten). Funktioniert nicht mit Medtronic 640G oder 670G.

* * *

Der Medtronic Treiber muss immer noch als Beta-Version angesehen werden, obwohl er bereits mit einer größeren Anwendergruppe getestet wurde. Das bedeutet, dass Du den Engineering Mode einschalten muss, um den Medtronic Treiber für AndroidAPS auswählen zu können, bis die Tests mit einer größeren Gruppe abgeschlossen sind.

* * *

## Hardware- und Softwareanforderungen

- **Smartphone:** Der Medtronic sollte mit jedem Smartphone, das BLE unterstützt, funktionieren.
- **RileyLink/Gnarl:** Um mit der Pumpe zu kommunizieren benötigst Du ein Gerät, das die Bluetooth Kommandos des Smartphones in Radiosignale übersetzt, damit diese von der Pumpe verstanden werden können. Dieses Gerät nennt man RileyLink. (Du kannst es unter [getrileylink.org](https://getrileylink.org/) bestellen.) Du benötigst eine stabile Geräteversion. Das bedeutet für ältere Modell Firmware 0.9 (ältere Versionen arbeiten evtl. nicht korrect) und für neuere Modelle 2.2. Auf der RileyLink Seite findest Du Möglichkeiten zum Upgrade. Wenn Du etwas abenteuerlustiger bis, kannst Du auch [Gnarl](https://github.com/ecc1/gnarl), eine Art RileyLink-Clone, verwenden. 
- **Pumpe:** Der Treiber funktioniert nur mit den folgenden Pumpenmodellen und Firmware-Versionen: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (Firmware 2.4A oder niedriger)
    - 554/754 EU Version (Firmware 2.6A oder niedriger)
    - 554/754 Kanada Version (Firmware 2.7A oder niedriger)

## Pumpen-Einstellungen

- **Remote-Modus in der Pumpe**aktivieren (Utilities -> Remote Options, Ja wählen und füge auf dem nächsten Bildschirm die ID und eine Dummy-ID (111111 oder ähnlich) hinzu. Du benötigst mindestens eine ID auf dieser Remote ID Liste. Je nach Pumpenmodell können diese Optionen etwas unterschiedlich aussehen bzw. benannt sein. Dieser Schritt ist wichtig, da die Pumpe öfter auf Remote-Verbindungen "hört", wenn er korrekt aktiviert wurde.
- **Setze Max Basal** auf Deiner Pumpe auf das Vierfache Deiner größten stündliche Basalrate (= maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages). Dann kann AAPS die Basalrate auf max. 400% setzen. Diese Zahl muss kleiner als 35 sein (Vorgabe aus der Pumpe).
- **Max Bolus setzen** auf deiner Pumpe einstellen (Maximum ist 25).
- **Profil auf STD** setzen. Dies wird das einzige Profil sein, das wir verwenden werden. Du kannst dies auch deaktivieren.
- **TBR-Typ ** auf Absolut (nicht Prozent) setzen.

## Konfiguration von Smartphone/AndroidAPS

- **Verbinde den RileyLink nicht mit Deinem Smartphone.** Wenn Du den RileyLink verbunden hast, kann AndroidAPS ihn im Konfigurationsprozess nicht finden.
- Deaktiviere die automatische Bildschirmausrichtung auf Deinem Smartphone. Manche Geräte starten bei der Änderung der Bildschirmausrichtung die Bluetooth-Verbindung neu und dies soll vermieden werden.
- Du kannst die Pumpe in AndroidAPS auf zwei Arten konfigurieren: 

1. Verwendung des Assistenten (bei Neuinstallation)
2. Direkt im Einstellungs-Tab (Zahnrad-Symbol beim Medtronic-Treiber)

Bei einer Neuinstallation startet der Assistent automatisch. Falls Deine Bluetooth-Verbindung nicht vollständig funktioniert und das Smartphone sich nicht mit der Pumpe verbinden kann, kannst Du die Konfiguration ggf. nicht abschließen. Wähle in diesem Fall die virtuelle Pumpe und am Ende der Konfiguration des Assistenten die Option 2 , damit die Pumpenerkennung umgangen wird.

![Medtronic (MDT) Einstellungen](../images/Medtronic01.png)

Folgende Einstellungen sind erforderlich (vgl. Bild oben):

- **Seriennummer der Pumpe**: Du findest diese auf der Rückseite der Pumpe (Bezeichnung mit SN). Du benötigst nur die Ziffern. Die Seriennummer umfasst sechs Ziffern.
- **Pumpentyp**: Wähle den von Dir verwendeten Pumpentyp (z.B. 522). 
- **Funkfrequenz der Pumpe**: Je nach Modell hat Medtronic zwei verschiedene Funkfrequenzen verwendet. Details dazu findest Du weiter unten in den FAQ. 
    - für Pumpen aus den USA & Kanada ist die Frequenz 916 MHz.
    - Pumpen aus anderen Ländern ("worldwide") nutzen 868 MHz.
- **Max Bolus der Pumpe (IE)** (pro Stunde): Gleiche Einstellung wie in der Pumpe verwenden. Diese Einstellung beschränkt die Bolusabgabe. Falls Du diesen Wert überschreiten solltest, wird kein Bolus abgegeben und eine Fehlermeldung angezeigt. Maxmimal können 25 IE pro Stunde eingestellt werden. Wähle die für Dich passende Obergrenze, um Überdosierungen zu verhindern.
- **Max Basal der Pump (IE pro Stunde)**: Auch hier die identische Einstellung wie auf der Pumpe eintragen. Diese Einstellung beschränkt die maximale Basalmenge pro Stunde. Beispiel: Du möchtest, dass AAPS die TBR maximal auf 500% stellen kann und Deine größte stündliche Basalrate (= maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) liegt bei 1,5 IE pro Stunde. Dann musst Du Max Basal auf 7,5 setzen. Falls diese Einstellung falsch sein und z.B. Deine Basalrate einmal über diesem Wert liegen sollte, würde die Pumpe eine Fehlermeldung anzeigen.
- **Verzögerung vor dem Start des Bolus (in Sek.)**: Anzahl Sekunden bevor der Bolus an die Pumpe geschickt wird, so dass Du ihn ggf. vorher noch abbrechen kannst. Der Abbruch des Bolus während dieser abgegeben wird, wird von der Pumpe nicht unterstützt. Wenn Du den Bolus dennoch während der Abgabe stoppen willst, musst Du die Verbindung zur Pumpe unterbrechen und danach wieder herstellen.
- **Medtronic Encoding**: Diese Einstellung legt fest, ob die "4b6b Kodierung" des Medtronic Geräts durch AndroidAPS oder RileyLink erfolgen soll. Wenn Du einen RileyLink mit 2.x Firmware verwendest, ist die Standardeinstellung die Hardware-Kodierung durch den RileyLink. Bei älteren RileyLink mit 0.x firmware wird diese Einstellung ignoriert.
- **Batterietyp (Ladestandsanzeige)**: Wenn Du den Batteriestand Deiner Pumpe sehen möchtest, musst Du den Batterietyp, den Du verwendest, auswählen. Aktuell werden Lithium oder Alkaline unterstützt. Dies ändert die Anzeige auf berechnete Prozent und Volt.
- **RileyLink Configuration**: Zur Verbindungsherstellung mit Deinem RileyLink/GNARL.

## MEDTRONIC (MDT) Tab

![Medtronic (MDT) Tab](../images/Medtronic02.png)

Anzeige verschiedener Informationen zum aktuellen Pumpenstatus:

- **RileyLink Status**: Status der RileyLink-Verbindung. Das Telefon sollte immer mit dem RileyLink verbunden sein.
- **Pumpenstatus**: Der Status der Pumpenverbindung kann verschiedene Werte haben, die meiste Zeit wird aber - bei inaktiver Pumpenverbindung - "Sleep" angezeigt werden. Bei der Ausführung eines Befehls wird zunächst "Waking up" angezeigt während sich AAPS mit dem Pumpe verbindet oder ein Befehl auf der Pumpe läuft (z.B. Get Time, Set TBR, etc.).
- **Batterie**: Anzeige des Ladestands der Pumpenbatterie (abhängig von Deinen Einstellungen). Dies wird entweder als einfachs Symbol (rot, wenn der Ladestand unter 20% sinkt und damit kritisch wird) oder in Zahlen als Prozentwert und Spannungswert angezeigt.
- **Letzte Verbindung**: Zeitpunkt der letzten erfolgreichen Verbindung mit der Pumpe.
- **Letzte Bolus**: Letzter Abgabezeigtpunkt eines Bolus.
- **Base Basal Rate**: When last bolus was given or empty.
- **Temp basal**: Laufende temporäre Basalrate (kann auch leer sein)
- **Reservoir**: Insulinstand im Reservoir (Update erfolgt mindestens stündlich).
- **Errors**: Fehlercode, falls ein Problem erkannt wurde - meistens, wenn es fehlerhafte Einstellungen in der Konfiguration gibt. Am unteren Ende gibt es 3 Buttons:
- Refresh aktuallisiert den Status. Dies sollte erst dann verwendet werden, wenn die Verbindung lange nicht vorhanden war, da diese Aktion Daten über die Pumpe zurücksetzt (Verlauf abrufen, get/set time, Profil abrufen, Akkustatus erhalten, etc.).
- Pump History: Anzeige der Pumpenhistorie (siehe unten)
- RL-Stats: Zeige Statistiken des RileyLink (siehe unten)

## Pumpen Historie

![Dialog Pumpenhistorie](../images/Medtronic03.png)

Die Pumpen Historie wird alle 5 Minuten abgerufen und lokal gespeichert. Es werden nur die Einträge der letzten 24 Stunden gespeichert, so dass ältere Einträge entfernt werden, wenn neue hinzugefügt werden. Dies ist ein einfacher Weg, um die Pumpenhostorie einzusehen. Einige Einträge aus der Pumpe werden möglicherweise nicht angezeigt, weil sie nicht relevant sind - zum Beispiel die Konfiguration von Funktionen, die nicht von AndroidAPS verwendet werden.

## RL Status (RileyLink Status)

![RileyLink Status - Einstellungen](../images/Medtronic04.png) ![RileyLink Status - Verlauf](../images/Medtronic05.png)

Der Dialog hat zwei Tabs:

- Settings: Zeigt Einstellungen des RileyLink: Konfigurierte Adresse, verbundene Geräte, Verbindungsstatus, Verbindungsfehler und RileyLink Firmware Versionen. "Device Type" ist immer Medtronic Pump, Modell wäre Dein Modell, Seriennummer entsprechend Deiner Konfiguration, Pumpenfrequenz zeigt die verwendete Frequenz, Last Frequenz ist die zuletzt verwendete Frequenz.
- "History": Zeigt den Kommunikationsverlauf, Zeilen mit RileyLink zeigt die Statusänderungen für RileyLink und Zeilen mit Medtronic die an die Pumpe geschickten Befehle .

## Aktionen

Wenn der Medtronic-Treiber ausgewählt ist, können dem Aktionen-Tab drei Aktionen hinzugefügt werden:

- **Wake and Tune Up** - Wenn Du siehst, dass AndroidAPS Deine Pumpe eine Weile lang nicht kontaktiert hat (Kontakt i.d.R. alle fünf Minuten), kannst Du die Verbindung mittels Tune Up erzwingen. AAPS wird dann versuchen, Deine Pumpe zu kontaktieren, indem alle Unterfrequenzen durchsucht werden, über die die Pumpe kontaktiert werden kann. So bald eine Frequenz gefunden wird, wird diese als Standardfrequenz eingestellt. 
- **Reset RileyLink Config** - Wenn Du Deinen RileyLink/GNARL zurücksetzt, musst Du diese Aktion ausführen, damit das Gerät neu konfiguriert werden kann (Frequenzsatz, Frequenztyp, codierende Konfiguration).
- **Clear Bolus Block** - Wenn Du einen Bolus startest, wird automatisch Bolus Block gesetzt. Das verhindert, dass während der Bolusabgabe andere Befehle an die Pumpe gesandt werden. Wenn Du die Verbindung zur Pumpe unterbrichst, um die Bolusabgabe zu stoppen, kannst Du nach dem Neuverbinden mit dieser Aktion den Bolus Block entfernen. Die Akrion ist nur bei der Bolusabgabe verfügbar. 

## Wichtige Hinweise

### Protokollierung

Da der Medtronic-Treiber sehr neu ist, musst Du das Loggen aktivieren, damit wir evtl. entstehende Probleme debuggen und beheben können. Klicke auf das Symbol in der oberen linken Ecke, wähle die Einstellungen für Wartung und dann Log Settings. Options Pump, PumpComm, PumpBTComm müssen angehakt sein.

### RileyLink/GNARL

Wenn Du den RileyLink oder GNARL neu startest, musst Du entweder ein neues "TuneUp" (Aktion "Wake and Tune Up") durchführen oder die Kommunikationsparameter erneut senden (Aktion "Reset RileyLink Config"), denn sonst wird die Kommunikation zwischen Pumpe, RileyLink/GNARL und AAPS scheitern.

### CGM

Das Medtronic CGM ("Enlite") wird derzeit NICHT unterstützt.

### Manuelle Pumpenbedienung

Manuelle Bedienung direkt an der Pumpe sollten vermieden werden. Alle Kommandos (Bolus, TBR...) sollten über AndroidAPS ausgeführt werden. Falls Du doch einmal ein Kommando manuell an der Pumpe ausführen musst, sollten zwischen den einzelnen Kommandos mindestens drei Minuten liegen. Beispiel: Wenn Du 2x hintereinander manuell an der Pumpe einen Bolus abgibst, darf der zweite frühestens drei Minuten nach dem ersten gestartet werden.

## Wechsel der Zeitzone / Zeitumstellung - oder Reisen mit AndroidAPS und einer Medtronic Pumpe

Wichtig ist, dass Du den Loop nie deaktivieren solltest, wenn Du reist (es sei denn, dass Dein CGM nicht im Offline Modus arbeiten kann). AAPS erkennt Zeitzonenwechsel automatisch, wenn die Zeit im Smartphone geändert wird, und schickt ein Kommando an die Pumpe, um die Zeit dort zu ändern.

Wenn Du also gen Osten reist und Du quasi eine oder mehrere Stunden überspringst (z.B. von GMT+0 nach GMT+2) wird es keine Probleme mit der Pumpenhistorie geben und Du musst Dir keine Sorrgen machen. Wenn Du aber gen Westen reist und eine oder mehrere Stunden "zurück springst" (z.B. GMT+2 nach GMT+0), wird die Synchronisation ein wenig knifflig. Deutlich gesagt: Das bedeutet, dass Du in den folgenden Stunden vorsichtig sein solltest, da Dein IOB sonderbar sein kann.

Wir sind uns dieses Problems bewusst und suchen bereits nach einer möglichen Lösung (see https://github.com/andyrozman/RileyLinkAAPS/issues/145). Aktuell musst Du aber diese Problematik noch selbst berücksichten.

## FAQ

### Kann ich die Ladestand des RileyLink/GNARL sehen?

Leider nein. Derzeit unterstützt keines dieser Geräte diese Funktion und wird es wahrscheinlich auch in Zukunft nicht tun.

### Kann GNARL den RileyLink vollständig ersetzt?

Ja. Der Autor von GNARL hat alle Funktionen hinzugefügt, die vom Medtronic Treiber verwendet werden. Sämtliche "Medtronic-Kommunikation" wird unterstützt (Stand Juni 2019). GNARL kann aber nicht zusammen mit dem Omnipod verwendet werden. Nachteil von GNARL ist, dass Du das Gerät selbst zusammenbauen und über kompatible Versionen der entsprechenden Hardware verfügen musst.

**Hinweis vom Autor:** Bitte beachte, dass die GNARL-Software noch experimentell und wenig getestet ist. Sie sollte daher nicht als so sicher angesehen werden, wie dies beim RileyLink der Fall ist.

### Wo kann ich den RileyLink oder GNARL bekommen?

Wie erwähnt, kannst Du die Geräte hier erhalten:

- RileyLink - Den RileyLink bestellst Du unter [getrileylink.org](https://getrileylink.org/).
- GNARL - Informationen findest Du unter [github.com/ecc1/gnarl](https://github.com/ecc1/gnarl), das Gerät muss aber an anderer Stelle bestellt werden.

### Was tun, wenn Du die Verbindung zum RileyLink und/oder zur Pumpe verlierst?

1. Starte die "Wake Up and Tune" Aktion. So wird versucht, die richtige Frequenz zu finden, um mit der Pumpe zu kommunizieren.
2. Bluetooth deaktivieren, 10s warten und erneut aktivieren. Dies wird eine neue Verbindung mit dem RileyLink erzwingen.
3. RileyLink zurücksetzen. Anschließend nicht vergessen, die Aktion "Reset RileyLink Config" auszuführen.
4. Versuche 3 und 2 zusammen.
5. RileyLink und Telefon zurücksetzen.

### Ermittlung der Pumpen-Frequenz

![Pumpenmodell](../images/Medtronic06.png) Auf der Rückseite der Pumpe findest Du in der ersten Zeile rechts einen speziellen Drei-Zeichen-Code. Die ersten beiden Buchstaben definieren die Frequenz, der dritte die Farbe. Die möglichen Werte für die Frequenz sind:

- NA - Nordamerika (in der Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- CA - Kanada (in der Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- WW - Weltweit (in der Frequenzauswahl musst Du "Weltweit (868 Mhz)" auswählen)