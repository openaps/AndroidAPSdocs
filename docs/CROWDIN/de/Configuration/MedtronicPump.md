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
- **Pump Type**: Which pump type you have (i.e. 522). 
- **Pump Frequency**: According to pump frequency there were two versions of Medtronic pump made (if you are not sure what frequency your pump uses, look at [FAQ](../Configuration/MedtronicPump#faq)): 
    - für Pumpen aus den USA & Kanada ist die Frequenz 916 MHz.
    - Pumpen aus anderen Ländern ("worldwide") nutzen 868 MHz.
- **Max Bolus der Pumpe (IE)** (pro Stunde): Gleiche Einstellung wie in der Pumpe verwenden. Diese Einstellung beschränkt die Bolusabgabe. Falls Du diesen Wert überschreiten solltest, wird kein Bolus abgegeben und eine Fehlermeldung angezeigt. Maxmimal können 25 IE pro Stunde eingestellt werden. Wähle die für Dich passende Obergrenze, um Überdosierungen zu verhindern.
- **Max Basal der Pump (IE pro Stunde)**: Auch hier die identische Einstellung wie auf der Pumpe eintragen. Diese Einstellung beschränkt die maximale Basalmenge pro Stunde. Beispiel: Du möchtest, dass AAPS die TBR maximal auf 500% stellen kann und Deine größte stündliche Basalrate (= maximaler Basalwert pro Stunde innerhalb des 24-Stunden-Rasters eines Tages) liegt bei 1,5 IE pro Stunde. Dann musst Du Max Basal auf 7,5 setzen. Falls diese Einstellung falsch sein und z.B. Deine Basalrate einmal über diesem Wert liegen sollte, würde die Pumpe eine Fehlermeldung anzeigen.
- **Verzögerung vor dem Start des Bolus (in Sek.)**: Anzahl Sekunden bevor der Bolus an die Pumpe geschickt wird, so dass Du ihn ggf. vorher noch abbrechen kannst. Der Abbruch des Bolus während dieser abgegeben wird, wird von der Pumpe nicht unterstützt. Wenn Du den Bolus dennoch während der Abgabe stoppen willst, musst Du die Verbindung zur Pumpe unterbrechen und danach wieder herstellen.
- **Medtronic Encoding**: Diese Einstellung legt fest, ob die "4b6b Kodierung" des Medtronic Geräts durch AndroidAPS oder RileyLink erfolgen soll. If you have a RileyLink with 2.x firmware, default value will be to use Hardware encoding (= done by RileyLink), if you have 0.x firmware this setting will be ignored.
- **Batterietyp (Ladestandsanzeige)**: Wenn Du den Batteriestand Deiner Pumpe sehen möchtest, musst Du den Batterietyp, den Du verwendest, auswählen. Aktuell werden Lithium oder Alkaline unterstützt. Dies ändert die Anzeige auf berechnete Prozent und Volt.
- **RileyLink Configuration**: Zur Verbindungsherstellung mit Deinem RileyLink/GNARL.

## MEDTRONIC (MDT) Tab

![Medtronic (MDT) Tab](../images/Medtronic02.png)

Anzeige verschiedener Informationen zum aktuellen Pumpenstatus:

- **RileyLink Status**: Status der RileyLink-Verbindung. Das Telefon sollte immer mit dem RileyLink verbunden sein.
- **Pumpenstatus**: Der Status der Pumpenverbindung kann verschiedene Werte haben, die meiste Zeit wird aber - bei inaktiver Pumpenverbindung - "Sleep" angezeigt werden. Bei der Ausführung eines Befehls wird zunächst "Waking up" angezeigt während sich AAPS mit dem Pumpe verbindet oder ein Befehl auf der Pumpe läuft (z.B. Get Time, Set TBR, etc.).
- **Battery**: Shows battery status depening on your configuration. Dies wird entweder als einfachs Symbol (rot, wenn der Ladestand unter 20% sinkt und damit kritisch wird) oder in Zahlen als Prozentwert und Spannungswert angezeigt.
- **Letzte Verbindung**: Zeitpunkt der letzten erfolgreichen Verbindung mit der Pumpe.
- **Letzte Bolus**: Letzter Abgabezeigtpunkt eines Bolus.
- **Base Basal Rate**: When last bolus was given or empty.
- **Temp basal**: Laufende temporäre Basalrate (kann auch leer sein)
- **Reservoir**: Insulinstand im Reservoir (Update erfolgt mindestens stündlich).
- **Errors**: Error string if there is problem (mostly shows if there is error in configuration).

On lower end we have 3 buttons:

- **Refresh** is for refreshing state. This should be used only after connection was not present for long time, as this action will reset data about pump (retrieve history, get/set time, get profile, get battery status, etc).
- **Pump History**: Shows pump history (see [bellow](../Configuration/MedtronicPump#pump-history))
- **RL Stats**: Show RL Stats (see [bellow](../Configuration/MedtronicPump#rl-status-rileylink-status))

## Pumpen Historie

![Pump History Dialog](../images/Medtronic03.png)

Pump history is retrieved every 5 minutes and stored localy. We keep history only for last 24 hours, so older entries are removed when new are added. This is simple way to see the pump history (some entries from pump might not be displayed, because they are not relevant - for example configuration of functions that are not used by AndroidAPS).

## RL Status (RileyLink Status)

![RileyLink Status - Settings](../images/Medtronic04.png) ![RileyLink Status - History](../images/Medtronic05.png)

Dialog has two tabs:

- **Settings**: Shows settings about RileyLink: Configured Address, Connected Device, Connection Status, Connection Error and RileyLink Firmware versions. Device Type is always Medtronic Pump, Model would be your model, Serial number is configured serial number, Pump Frequency shows which frequency you use, Last Frequency is last frequency used.
- **History**: Shows communication history, items with RileyLink shows state changes for RileyLink and Medtronic shows which commands were sent to pump.

## Aktionen

When Medtronic driver is selected, 3 possible actions can be added to Actions Tab:

- **Wake and Tune Up** - If you see that your AndroidAPS hasn't contacted your pump in a while (it should contact it every 5 minutes), you can force Tune Up. This will try to contact your pump, by searching all sub frequencies on which Pump can be contacted. If it finds one it will set it as your default frequency. 
- **Reset RileyLink Config** - If you reset your RileyLink/GNARL, you need to use this action, so that device can be reconfigured (frequency set, frequency type set, encoding configured).
- **Clear Bolus Block** - When you start bolus, we set Bolus Block, which prevents any commands to be issued to pump. If you suspend your pump and resume (to cancel bolus), you can then remove that block. Option is only there when bolus is running... 

## Wichtige Hinweise

### Protokollierung

Since Medtronic driver is very new, you need to enable logging, so that we can debug and fix problems, if they should arise. Click on icon on upper left corner, select Maintainance and Log Settings. Options Pump, PumpComm, PumpBTComm need to be checked.

### RileyLink/GNARL

When you restart RileyLink or GNARL, you need to either do new TuneUp (action "Wake and Tune Up") or resend communication parameters (action "Reset RileyLink Config"), or else communication will fail.

### CGM

Medtronic CGMS is currently NOT supported.

### Manuelle Pumpenbedienung

You should avoid manually doing treatments things on your pump. All commands (bolus, TBR) should go through AndroidAPS, but if it happens that you will do manual commands, do NOT run commands with frequency less than 3 minutes (so if you do 2 boluses (for whatever reason), second should be started at least 3 minutes after first one).

## Wechsel der Zeitzone / Zeitumstellung - oder Reisen mit AndroidAPS und einer Medtronic Pumpe

Important thing to remember is that you should never disable loop when you are traveling (unless your CGMS can't do offline mode). AAPS will automatically detect Timezone changes and will send command to Pump to change time, when time on Phone is changed.

Now if you travel to East and your TZ changes with adding hours (ex. from GMT+0 to GMT+2), pump history won't have problem and you don't have to worry... but if you travel to West and your TZ changes by removing hours (GMT+2 to GMT-0), then sychronization might be little iffy. In clear text, that means that for next x hours you will have to be careful, because your IOB, might be little weird.

We are aware of this problem, and we are already looking into possible solution (see https://github.com/andyrozman/RileyLinkAAPS/issues/145), but for now, have that info in mind when traveling.

## FAQ

### Kann ich die Ladestand des RileyLink/GNARL sehen?

Leider nein. At the moment none of this devices support this and it probably won't even in the future.

### Kann GNARL den RileyLink vollständig ersetzt?

Yes. Author of GNARL added all functions used by Medtronic driver. All Medtronic communication is supported (at time of the writing (June/2019). GNARL can't be used for Omnipod communication. Downside of GNARL is that you have to build it yourself, and you have to have compatible version of hardware.

**Note from author:** Please note that the GNARL software is still experimental and lightly tested, and should not be considered as safe to use as a RileyLink.

### Wo kann ich den RileyLink oder GNARL bekommen?

Like mentioned before you can get devices here:

- RileyLink - You can get device here - [getrileylink.org](https://getrileylink.org/).
- GNARL - You can get info here, but device needs to be ordered elsewhere ([github.com/ecc1/gnarl](https://github.com/ecc1/gnarl)).

### What to do if I loose connection to RileyLink and/or pump?

1. Starte die "Wake Up and Tune" Aktion. So wird versucht, die richtige Frequenz zu finden, um mit der Pumpe zu kommunizieren.
2. Bluetooth deaktivieren, 10s warten und erneut aktivieren. Dies wird eine neue Verbindung mit dem RileyLink erzwingen.
3. RileyLink zurücksetzen. Anschließend nicht vergessen, die Aktion "Reset RileyLink Config" auszuführen.
4. Versuche 3 und 2 zusammen.
5. RileyLink und Telefon zurücksetzen.

### Ermittlung der Pumpen-Frequenz

![Pump Model](../images/Medtronic06.png)

If you turn your pump around in first line on right side you will see special 3 letter code. First two letters determine frequency type and last one determines color. Here are possible values for Frequency:

- NA - North America (in frequency selection you need to select "US & Canada (916 MHz)")
- CA - Canada (in frequency selection you need to select "US & Canada (916 MHz)")
- WW - Worldwide (in frequency selection you need to select "Worldwide (868 Mhz)")