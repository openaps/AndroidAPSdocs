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

![Medtronic (MDT) Einstellungen](../images/Medtronic01.png)

Folgende Einstellungen sind erforderlich (vgl. Bild oben):

- **Seriennummer der Pumpe**: Du findest diese auf der Rückseite der Pumpe (Bezeichnung mit SN). Du benötigst nur die Ziffern. Die Seriennummer umfasst sechs Ziffern.
- **Pumpentyp**: Wähle den von Dir verwendeten Pumpentyp (z.B. 522). 
- **Funkfrequenz der Pumpe**: Je nach Modell hat Medtronic zwei verschiedene Funkfrequenzen verwendet. Details dazu findest Du weiter unten in den [FAQ](../Configuration/MedtronicPump#faq). 
    - für Pumpen aus den USA & Kanada ist die Frequenz 916 MHz.
    - Pumpen aus anderen Ländern ("worldwide") nutzen 868 MHz.
- **Max Bolus der Pumpe (IE)** (pro Stunde): Gleiche Einstellung wie in der Pumpe verwenden. Diese Einstellung beschränkt die Bolusabgabe. Falls Du diesen Wert überschreiten solltest, wird kein Bolus abgegeben und eine Fehlermeldung angezeigt. Maximal können 25 IE pro Stunde eingestellt werden. Wähle die für Dich passende Obergrenze, um Überdosierungen zu verhindern.
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
- **Batterie**: Anzeige des Ladestands der Pumpenbatterie (abhängig von Deinen Einstellungen). Dies wird entweder als einfaches Symbol (rot, wenn der Ladestand unter 20% sinkt und damit kritisch wird) oder in Zahlen als Prozentwert und Spannungswert angezeigt.
- **Letzte Verbindung**: Zeitpunkt der letzten erfolgreichen Verbindung mit der Pumpe.
- **Letzte Bolus**: Letzter Abgabezeitpunkt eines Bolus.
- **Base Basal Rate**: Basalrate, die aktuell in der Pumpe läuft.
- **Temp basal**: Laufende temporäre Basalrate (kann auch leer sein)
- **Reservoir**: Insulinstand im Reservoir (Update erfolgt mindestens stündlich).
- **Errors**: Fehlercode, falls ein Problem erkannt wurde - meistens, wenn es fehlerhafte Einstellungen in der Konfiguration gibt.

Am unteren Ende gibt es 3 Buttons:

- **Aktualisieren** ist für das Aktualisieren des Status. Dies sollte erst dann verwendet werden, wenn die Verbindung lange nicht vorhanden war, da diese Aktion Daten über die Pumpe zurücksetzt (Verlauf abrufen, get/set time, Profil abrufen, Akkustatus erhalten, etc.).
- **Pump History**: Anzeige der Pumpen Historie (siehe [unten](../Configuration/MedtronicPump#pump-history))
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
- **RileyLink Config** - Wenn Du den RileyLink/GNARL zurücksetzt, musst Du mit diese Aktion verwenden, damit das Gerät neu konfiguriert werden kann (Frequenzsatz, Frequenztyp, codierende Konfiguration).
- **Clear Bolus Block** - Während der Bolusabgabe, wird der Bolus Block gesetzt, um zu verhindern, dass weitere Befehle an die Pumpe gesandt werden. Wenn Du die Pumpe trennst, um einen Bolus abzubrechen, kannst Du nach der erneuten Verbindung der Pumpe mit dieser Aktion den Bolus Block entfernen. Die Aktion ist nur während der Bolusabgabe verfügbar. 

## Wichtige Hinweise

### OpenAPS users

When you start using AndroidAPS, primary controller is AndroidAPS and all commands should go through it. Sending boluses should go through AAPS and not be done on pump. We have code in place that will detect any command done on pump, but if you can you should avoid it (I think we fixed all the problems with pump history and AAPS history synchronization, but small issues still may arrise, especially if you use the "setup" as it was not intended to be used). Since I started using AndroidAPS with my pump, I haven't touched the pump, except when I have to change the reservoir, and this is the way that AndroidAPS should be used.

### Logging

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGMS

Medtronic CGMS is currently NOT supported.

### Manual use of pump

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Wechsel der Zeitzone / Zeitumstellung - oder Reisen mit AndroidAPS und einer Medtronic Pumpe

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Can I see the power of RileyLink/GNARL?

Leider nein. At the moment none of this devices support this and it probably won't even in the future.

### Is GNARL full replacement for RileyLink?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Where can I get RileyLink or GNARL?

Like mentioned before you can get devices here:

- RileyLink - zu bestellen unter [getrileylink.org](https://getrileylink.org/).
- GNARL - Informationen findest Du unter [github.com/ecc1/gnarl](https://github.com/ecc1/gnarl), die Hardware muss aber an anderer Stelle bestellt werden.

### What to do if I loose connection to RileyLink and/or pump?

1. Starte die "Wake Up and Tune" Aktion. So wird versucht, die richtige Frequenz zu finden, um mit der Pumpe zu kommunizieren.
2. Bluetooth deaktivieren, 10s warten und erneut aktivieren. Dies wird eine neue Verbindung mit dem RileyLink erzwingen.
3. RileyLink zurücksetzen. Anschließend nicht vergessen, die Aktion "Reset RileyLink Config" auszuführen.
4. Versuche 3 und 2 zusammen.
5. RileyLink und Telefon zurücksetzen.

### How to determine what Frequency my pump uses

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - Nordamerika (in der Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- CA - Kanada (in Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- WW - Weltweit (in der Frequenzauswahl musst Du "Weltweit (868 MHz)" auswählen)