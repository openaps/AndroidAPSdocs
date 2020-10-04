# Medtronic Pumpen

**>>>> Der Medtronic Pumpentreiber ist seit Version 2.5 Bestandteil der AndroidAPS Master Version. Dennoch sollte er weiter als Software im Beta-Status angesehen werden. Bitte nutze ihn nur, wenn Du ein erfahrener AAPS-Anwender bist. Momentan gibt es immer noch Probleme mit doppelten Boluseinträgen. In den Behandlungen werden Boli teilweise doppelt aufgeführt und dies bringt natürlich IOB durcheinander. (Aktiviere Double Bolus Logging in den Einstellungen der Medtronic Pumpe, falls dieser Fehler bei Dir auftritt und stelle den Entwicklern bitte Deine Logs zur Verfügung.) Dieses Problem sollte mit der kommenden Version behoben werden. <<<<**

* * *

Funktioniert nur mit älteren Medtronic Pumpen (Details siehe weiter unten). Funktioniert nicht mit Medtronic 640G oder 670G.

* * *

So bald Du AAPS mit einer Medtronic Pumpe nutzt, bitten wir um Eintrag in diese [Liste](https://docs.google.com/spreadsheets/d/16XIjviXe8b-12PrB6brGubNFuAEsFZr10pjLt_SpSFQ/edit#gid=0). Damit wollen wir einen Eindruck gewinnen, welche Smartphones gut und welche nicht so gut (oder gar nicht) mit dem Treiber funktionieren. Es gibt dort ein Spalte "BT restart". Damit wollen wir abfragen, ob Du an Deinem Smartphone Bluetooth ein- und ausschalten kannst. Das kann man nutzen, wenn die Pumpe sich nicht mehr verbindet - was hin und wieder vorkommen kann. Falls Dir andere Schwierigkeiten auffallen, trage diese bitte in die Kommentarspalte ein.

* * *

## Hardware- und Softwareanforderungen

- **Smartphone:** Der Medtronic sollte mit jedem Smartphone, das Bluetooth Low Energy (BLE) unterstützt, funktionieren. **WICHTIG: Der Treiber funktioniert zwar mit allen Telefonen, Aktivieren/Deaktivieren von Bluetooth aber leider nicht. (Dies ist aber erforderlich, falls die Verbindung zum RileyLink verloren geht und das System sie nicht wieder selbst herstellen kann. Das kann hin und wieder passieren.) Daher solltest Du ein Gerät mit Android 6.0 bis 8.1 verwenden. Im schlimmsten Fall kannst Du darauf LineageOS 15.1 (15.1 oder niedriger erforderlich) installieren. Wir arbeiten an den Problemen mit Android 9, haben bisher aber noch keine Lösung gefunden. (Es scheint, als ob es auf einigen Geräten funktioniert und auf anderen nicht, bei manchen auch nur hin und wieder.)**
- **RileyLink/Gnarl:** Um mit der Pumpe zu kommunizieren benötigst Du ein Gerät, das die Bluetooth Kommandos des Smartphones in Radiosignale übersetzt, damit diese von der Pumpe verstanden werden können. Dieses Gerät nennt man RileyLink. (Du kannst es unter [getrileylink.org](https://getrileylink.org/) bestellen.) Du benötigst eine stabile Geräteversion. Das bedeutet für ältere Modell Firmware 0.9 (ältere Versionen arbeiten evtl. nicht korrekt) und für neuere Modelle 2.2. Auf der RileyLink Seite findest Du Möglichkeiten zum Upgrade. Wenn Du etwas abenteuerlustiger bis, kannst Du auch [Gnarl](https://github.com/ecc1/gnarl), eine Art RileyLink-Clone, verwenden. 
- **Pumpe:** Der Treiber funktioniert nur mit den folgenden Pumpenmodellen und Firmware-Versionen: 
    - 512/712
    - 515/715
    - 522/722
    - 523/723 (Firmware 2.4A oder niedriger)
    - 554/754 EU Version (Firmware 2.6A oder niedriger)
    - 554/754 Kanada Version (Firmware 2.7A oder niedriger)
- Hinweise, wie die Firmware der Pumpe ermittelt werden kann, findest Du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) und [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Pumpen-Einstellungen

- **Remote-Modus in der Pumpe** aktivieren (Utilities -> Remote Options, Ja wählen und füge auf dem nächsten Bildschirm die ID und eine Dummy-ID (111111 oder ähnlich) hinzu. Du benötigst mindestens eine ID auf dieser Remote ID Liste. Je nach Pumpenmodell können diese Optionen etwas unterschiedlich aussehen bzw. benannt sein. Dieser Schritt ist wichtig, da die Pumpe öfter auf Remote-Verbindungen "hört", wenn er korrekt aktiviert wurde.
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

![Medtronic (MDT) Einstellungen](../images/Medtronic01a.png)

Folgende Einstellungen sind erforderlich (vgl. Bild oben):

- **Seriennummer der Pumpe**: Du findest diese auf der Rückseite der Pumpe (Bezeichnung mit SN). Du benötigst nur die Ziffern. Die Seriennummer umfasst sechs Ziffern.
- **Pumpentyp**: Wähle den von Dir verwendeten Pumpentyp (z.B. 522). 
- **Funkfrequenz der Pumpe**: Je nach Modell hat Medtronic zwei verschiedene Funkfrequenzen verwendet. Details dazu findest Du weiter unten in den [FAQ](../Configuration/MedtronicPump#faq). 
    - für Pumpen aus den USA & Kanada ist die Frequenz 916 MHz.
    - Pumpen aus anderen Ländern ("worldwide") nutzen 868 MHz.
- **Max Bolus der Pumpe (IE)** (pro Stunde): Gleiche Einstellung wie in der Pumpe verwenden. Diese Einstellung beschränkt die Bolusabgabe. Falls Du diesen Wert überschreiten solltest, wird kein Bolus abgegeben und eine Fehlermeldung angezeigt. Maximal können 25 IE pro Stunde eingestellt werden. Wähle die für Dich passende Obergrenze, um Überdosierungen zu verhindern.
- **Max Basal der Pump (IE pro Stunde)**: Auch hier die identische Einstellung wie auf der Pumpe eintragen. Diese Einstellung beschränkt die maximale Basalmenge pro Stunde. Beispiel: Du möchtest, dass AAPS die TBR maximal auf 500% stellen kann und Deine größte stündliche Basalrate (= maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) liegt bei 1,5 IE pro Stunde. Dann musst Du Max Basal auf 7,5 setzen. Falls diese Einstellung falsch sein und z.B. Deine Basalrate einmal über diesem Wert liegen sollte, würde die Pumpe eine Fehlermeldung anzeigen.
- **Verzögerung vor dem Start des Bolus (in Sek.)**: Anzahl Sekunden bevor der Bolus an die Pumpe geschickt wird, so dass Du ihn ggf. vorher noch abbrechen kannst. Der Abbruch des Bolus während dieser abgegeben wird, wird von der Pumpe nicht unterstützt. Wenn Du den Bolus dennoch während der Abgabe stoppen willst, musst Du die Verbindung zur Pumpe unterbrechen und danach wiederherstellen.
- **Medtronic Encoding**: Diese Einstellung legt fest, ob die "4b6b Kodierung" des Medtronic Geräts durch AndroidAPS oder RileyLink erfolgen soll. Wenn Du einen RileyLink mit 2.x Firmware verwendest, ist die Standardeinstellung die Hardware-Kodierung durch den RileyLink. Bei älteren RileyLink mit 0.x firmware wird diese Einstellung ignoriert.
- **Batterietyp (Ladestandsanzeige)**: Wenn Du den Batteriestand Deiner Pumpe sehen möchtest, musst Du den Batterietyp, den Du verwendest, auswählen. Aktuell werden Lithium oder Alkaline unterstützt. Dies ändert die Anzeige auf berechnete Prozent und Volt.
- **RileyLink Configuration**: Zur Verbindungsherstellung mit Deinem RileyLink/GNARL.
- **Neutrale Temps für Medtronic Pumpen** verhindern, dass Medtronic Pumpen zur vollen Stunde piepen. Wenn diese Option aktiviert ist, wird eine temporäres Basalrate vor dem Ende der Stunde abgebrochen, um zu verhindern, dass dies geschieht.

## MEDTRONIC (MDT) Tab

![Medtronic (MDT) Tab](../images/Medtronic02.png)

Anzeige verschiedener Informationen zum aktuellen Pumpenstatus:

- **RileyLink Status**: Status der RileyLink-Verbindung. Das Telefon sollte immer mit dem RileyLink verbunden sein.
- **Pumpenstatus**: Der Status der Pumpenverbindung kann verschiedene Werte haben, die meiste Zeit wird aber - bei inaktiver Pumpenverbindung - "Sleep" angezeigt werden. Bei der Ausführung eines Befehls wird zunächst "Waking up" angezeigt während sich AAPS mit der Pumpe verbindet oder ein Befehl auf der Pumpe läuft (z.B. Get Time, Set TBR, etc.).
- **Batterie**: Anzeige des Ladestands der Pumpenbatterie (abhängig von Deinen Einstellungen). Dies wird entweder als einfaches Symbol (rot, wenn der Ladestand unter 20% sinkt und damit kritisch wird) oder in Zahlen als Prozentwert und Spannungswert angezeigt.
- **Letzte Verbindung**: Zeitpunkt der letzten erfolgreichen Verbindung mit der Pumpe.
- **Letzte Bolus**: Letzter Abgabezeitpunkt eines Bolus.
- **Base Basal Rate**: Basalrate, die aktuell in der Pumpe läuft.
- **Temp basal**: Laufende temporäre Basalrate (kann auch leer sein)
- **Reservoir**: Insulinstand im Reservoir (Update erfolgt mindestens stündlich).
- **Errors**: Fehlercode, falls ein Problem erkannt wurde - meistens, wenn es fehlerhafte Einstellungen in der Konfiguration gibt.

Am unteren Ende gibt es 3 Buttons:

- **Aktualisieren** ist für das Aktualisieren des Status. Dies sollte erst dann verwendet werden, wenn die Verbindung lange nicht vorhanden war, da diese Aktion Daten über die Pumpe zurücksetzt (Verlauf abrufen, get/set time, Profil abrufen, Akkustatus erhalten, etc.).
- **Pump History**: Anzeige der Pumpen Historie (siehe [unten](../Configuration/MedtronicPump#pumpen-historie))
- **RL Stats**: Anzeige RileyLink Statistik (siehe [unten](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pumpen Historie

![Dialog Pumpenhistorie](../images/Medtronic03.png)

Die Pumpen Historie wird alle 5 Minuten abgerufen und lokal gespeichert. Es werden nur die Einträge der letzten 24 Stunden gespeichert, so dass ältere Einträge entfernt werden, wenn neue hinzugefügt werden. Dies ist ein einfacher Weg, um die Pumpenhistorie einzusehen. Einige Einträge aus der Pumpe werden möglicherweise nicht angezeigt, weil sie nicht relevant sind - zum Beispiel die Konfiguration von Funktionen, die nicht von AndroidAPS verwendet werden.

## RL Status (RileyLink Status)

![RileyLink Status - Einstellungen](../images/Medtronic04.png) ![RileyLink Status - Verlauf](../images/Medtronic05.png)

Der Dialog hat zwei Tabs:

- **Settings**: Zeigt Einstellungen des RileyLink: Konfigurierte Adresse, verbundene Geräte, Verbindungsstatus, Verbindungsfehler und RileyLink Firmware Versionen. "Device Type" ist immer Medtronic Pump, Modell wäre Dein Modell, Seriennummer entsprechend Deiner Konfiguration, Pumpenfrequenz zeigt die verwendete Frequenz, Last Frequenz ist die zuletzt verwendete Frequenz.
- **History**: Zeigt den Kommunikationsverlauf, Zeilen mit RileyLink zeigt die Statusänderungen für RileyLink und Zeilen mit Medtronic die an die Pumpe geschickten Befehle .

## Aktionen

Wenn der Medtronic-Treiber ausgewählt ist, können drei Aktionen dem Tab Aktionen hinzugefügt werden:

- **Wake and Tune Up** - Falls AndroidAPS die Pumpe über längere Zeit nicht erreichen kann (Kontakt sollte normalerweise alle fünf Minuten erfolgen), kannst Du die Verbindung mit Tune Up erzwingen. Dabei wird versucht, die Pumpe über alle zur Verfügung stehenden Unterfrequenzen zu erreichen. Die gefundene Frequenz wird als Standardfrequenz gesetzt. 
- **RileyLink Config** - Wenn Du den RileyLink/GNARL zurücksetzt, musst Du diese Aktion verwenden, damit das Gerät neu konfiguriert werden kann (Frequenzsatz, Frequenztyp, codierende Konfiguration).
- **Clear Bolus Block** - Während der Bolusabgabe, wird der Bolus Block gesetzt, um zu verhindern, dass weitere Befehle an die Pumpe gesandt werden. Wenn Du die Pumpe trennst, um einen Bolus abzubrechen, kannst Du nach der erneuten Verbindung der Pumpe mit dieser Aktion den Bolus Block entfernen. Die Aktion ist nur während der Bolusabgabe verfügbar. 

## Wichtige Hinweise

### OpenAPS Nutzer

In AndroidAPS erfolgt die Bedienung über die App und alle Befehle sollten dort ausgelöst werden. Boli sollten über die App und nicht über die Pumpe gegeben werden. Der Treiber erkennt zwar die über die Pumpe vorgenommenen Befehle, aber Du solltest die Bedienung über die Pumpe vermeiden. (Die Probleme mit der Pumpenhistorie und deren Synchronisierung mit AAPS sind wohl alle behoben. Es können aber immer noch kleine Schwierigkeiten auftauchen, gerade dann, wenn das System nicht wie vorgesehen eingesetzt wird.) Am besten ist es, nur den Reservoirwechsel über die Pumpe und alles andere über AndroidAPS zu machen.

### Protokollierung

Der Medtronic-Treiber ist noch sehr neu. Aktiviere daher bitte die Protokollierung ("Logging"), damit wir evtl. auftretende Probleme debuggen und beheben können. Klicke auf das Symbol in der oberen linken Ecke, wähle Wartung (Maintenance) und dann Log Settings. Die Optionen Pumpe, PumpComm, PumpBTComm muss mit einem Häkchen versehen werden.

### RileyLink/GNARL

Wenn Du den RileyLink oder GNARL neu startest, musst Du entweder TuneUp (Aktion "Wake and Tune Up") verwenden oder die Kommunikationsparameter erneut senden (Aktion "Reset RileyLink Config"), sonst kann keine Verbindung hergestellt werden.

### CGM

Das Medtronic CGM ("Enlite") wird derzeit NICHT unterstützt.

### Manuelle Pumpenbedienung

Die händische Bedienung der Pumpe sollte vermieden werden. Die Steuerung aller Befehle (Bolus, TBR) sollte durch AndroidAPS erfolgen. Wenn Du dennoch die Pumpe von Hand bedienen musst, müssen zwischen den manuellen Kommandos mindestens drei Minuten vergehen. Beispiel: Abgabe von zwei Boli; der zweite darf frühestens drei Minuten nach dem ersten manuell an der Pumpe abgegeben werden.

## Wechsel der Zeitzone / Zeitumstellung - oder Reisen mit AndroidAPS und einer Medtronic Pumpe

AndroidAPS sollte auf Reisen nicht deaktiviert werden, außer Dein CGM lässt keinen Offline-Betrieb zu. Sobald die Zeit im Smartphone geändert wird, erkennt AAPS die Zeitumstellung und schickt ein entsprechendes Kommando an die Pumpe, um auch dort die Zeit zu ändern.

Wenn Du nun gen Osten reist und sozusagen einige Stunden "überspringst" (z.B. von GMT+0 nach GMT+2), wird es keine Probleme mit der Pumpenhistorie geben und Du musst Dich um nichts kümmern. Wenn Du aber Richtung Westen reist und damit quasi ein paar Stunden "doppelt durchlebst" (z.B. GMT+2 nach GMT+0), bringt das die Synchronisierung durcheinander. Deutlich gesagt: In den folgenden Stunden musst Du vorsichtig sein und AAPS genau beobachten, da Dein IOB etwas durcheinander sein dürfte.

Wir sind uns dieses Problems bewusst und suchen nach einer möglichen Lösung (siehe https://github.com/andyrozman/RileyLinkAAPS/issues/145). Momentan musst Du Dir bei Reisen über Zeitzonen dieses Problems aber bewusst sein und entsprechend handeln.

## FAQ

### Kann ich die Ladestand des RileyLink/GNARL sehen?

Leider nein. Derzeit unterstützt keines dieser Geräte diese Funktion und wird es wahrscheinlich auch in Zukunft nicht tun.

### Kann GNARL den RileyLink vollständig ersetzt?

Ja. Der Autor von GNARL hat alle Funktionen hinzugefügt, die vom Medtronic-Treiber verwendet werden. Stand Juni 2019 werden alle notwendigen Kommandos unterstützt. GNARL funktioniert aber nicht zusammen mit dem Omnipod. Der Nachteil von GNARL ist, dass Du ihn selbst bauen und über kompatible Hardware verfügen musst.

**Hinweis:** Die GNARL-Software ist noch experimentell und wenig getestet ist. Sie sollte daher nicht als so sicher angesehen werden wie die des RileyLink.

### Wo kann ich den RileyLink oder GNARL bekommen?

Wie bereits erwähnt:

- RileyLink - zu bestellen unter [getrileylink.org](https://getrileylink.org/).
- GNARL - Informationen findest Du unter [github.com/ecc1/gnarl](https://github.com/ecc1/gnarl), die Hardware muss aber an anderer Stelle bestellt werden.

### Vorgehen bei Verlust der Verbindung zum RileyLink und/oder der Pumpe

1. Starte die "Wake Up and Tune" Aktion. So wird versucht, die richtige Frequenz zu finden, um mit der Pumpe zu kommunizieren.
2. Bluetooth deaktivieren, 10s warten und erneut aktivieren. Dies wird eine neue Verbindung mit dem RileyLink erzwingen.
3. RileyLink zurücksetzen. Anschließend nicht vergessen, die Aktion "Reset RileyLink Config" auszuführen.
4. Versuche 3 und 2 zusammen.
5. RileyLink und Telefon zurücksetzen.

### Ermittlung der Pumpen-Frequenz

![Rückseite Medtronic Pumpe](../images/Medtronic06.png)

Auf der Rückseite findest Du in der ersten Zeile rechts einen speziellen Drei-Zeichen-Code. Die ersten beiden Stellen geben Auskunft über den Frequenztyp, die dritte über die Farbe. Hier sind mögliche Werte für die Frequenz:

- NA - Nordamerika (in der Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- CA - Kanada (in Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- WW - Weltweit (in der Frequenzauswahl musst Du "Weltweit (868 MHz)" auswählen)