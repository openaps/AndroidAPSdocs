# Medtronic Pumpen

Der Treiber funktioniert nicht mit neueren Modellen, einschließlich aller Modelle mit Endung in G (530G, 600-Serie [630G, 640G, 670G], 700-Serie [770G, 780G], etc.).

Die folgenden Modell- und Firmware-Kombinationen sind kompatibel:

- 512/712 (beliebige Firmware-Version)
- 515/715 (beliebige Firmware-Version)
- 522/722 (beliebige Firmware-Version)
- 523/723 (Firmware 2.4A oder niedriger)
- 554/754 EU Version (Firmware 2.6A oder niedriger)
- 554/754 Kanada Version (Firmware 2.7A oder niedriger)

Hinweise, wie die Firmware der Pumpe ermittelt werden kann, findest Du in den [OpenAPS Docs](https://openaps.readthedocs.io/en/latest/docs/Gear%20Up/pump.html#how-to-check-pump-firmware-check-for-absence-of-pc-connect) und [LoopDocs](https://loopkit.github.io/loopdocs/build/step3/#medtronic-pump-firmware).

## Hardware- und Softwareanforderungen

- **Telefon:** Der Medtronic-Treiber sollte mit jedem Android-Telefon funktionieren, das Bluetooth-Verbindungen unterstützt. **WICHTIG: Die Bluetooth-Implementierungen der Telefonhersteller können variieren, so dass jedes Telefonmodell variiert. Zum Beispiel werden bei einigen Telefonen Bluetooth anders aktiviert/deaktiviert. This can impact the user experience when AAPS needs to reconnect to your Rileylink type device.**
- **RileyLink Kompatibles Gerät:** Android-Telefone können nicht mit Medtronic-Pumpen kommunizieren ohne ein separates Gerät um die Kommunikation zu steuern. Dieses Gerät verbindet sich mit Ihrem Telefon über Bluetooth und mit Ihrer Pumpe über eine kompatible Funkverbindung. Das erste derartige Gerät wurde als Rileylink bezeichnet, aber eine Reihe weiterer Optionen sind jetzt verfügbar, die zusätzliche Funktionalität bieten können.
    
    - Rileylink verfügbar unter [getrileylink.org](https://getrileylink.org/product/rileylink916)
    - Orangelink verfügbar unter [getrileylink.org](https://getrileylink.org/product/orangelink)
    - Emalink (mehrere Model-Optionen) verfügbar unter [github.com](https://github.com/sks01/EmaLink)
    - Gnarl (einige zusätzliche DIY Tätigkeiten erforderlich) Details verfügbar auf [github.com](https://github.com/ecc1/gnarl)

Ein Vergleichsdiagramm für die verschiedenen Rileylink-kompatiblen Geräte finden Sie unter [getrileylink.org](https://getrileylink.org/rileylink-compatible-hardware-comparison-chart)

(MedtronicPump-configuration-of-the-pump)=

## Pumpen-Einstellungen

The following settings should be configured on the pump in order for AAPS to remotely send commands. Die Schritte, die für jede Änderung an einer Medtronic 715 erforderlich sind, werden für jede Einstellung in Klammern angezeigt. Die genauen Schritte können je nach Pumpentyp und/oder Firmware-Version variieren.

- **Aktiviere Remote-Modus an der Pumpe** (Auf der Pumpe Act drücken und gehe zu Utilities -> Remote-Optionen, wähle "On", und auf dem nächsten Bildschirm trage eine zufällige ID wie 111111 ein). Mindestens eine ID muss auf der Liste der Remote-ID stehen, damit die Pumpe eine Fernkommunikation ermöglicht.
- **Lege Max Basal fest** (An der Pumpe Act drücken und danach Basal und dann Max Basal Rate wählen). Zum Beispiel diesen Wert auf das Vierfache Deiner maximalen Standardbasalrate einstellen, was eine vorläufige Basalquote von 400% erlauben würde. Der Maximalwert der Pumpe beträgt 34,9 Einheiten pro Stunde.
- **Setze Max Bolus** (An der Pumpe Act drücken und dann auf Bolus und dann Max Bolus wählen). Dies ist der größte Bolus, den die Pumpe akzeptiert. Der Maximalwert der Pumpe beträgt 25.
- **Setze Profil auf Standard**. (On the pump press Act and go to Basal and then Select Patterns) The pump will only need one profile as AAPS will manage different profiles on your phone. Es werden keine weiteren Profile benötigt.
- **Auswählen der Art der temporären Basalrate** (Auf der Pumpe: ACT > Basal > Basal Einstellungen > Art tempor. Basal). Wähle Insulinrate (U/H) - nicht: 'Prozentuale Änderung'.

## Medtronic Configuration of Phone/AAPS

- **Do not pair RileyLink compatible device with the Bluetooth menu on your phone.** Pairing via the Bluetooth menu on your phone will stop AAPS from seeing your Rileylink Compatible device when you follow the instructions below.
- Deaktiviere die "Bildschirm drehen"-Funktion Deines Smartphones. Auf einigen Geräten führt das automatische Drehen des Bildschirms zum Neustart von Bluetooth-Sitzungen. Das kann Verbindungsprobleme mit der Medtronic-Pumpe zur Folge haben. 
- There are two ways to configure your Medtronic pump in AAPS:

1. Den Einrichtungsassistenten im Zuge einer Neuinstallation verwenden
2. Indem Du unter KONFIGURATION > Pumpe 'Medtronic' auswählst

Falls Du Deine Medtronic-Pumpe mit Hilfe des Einrichtungsassistenten konfigurierst, kann es sein, dass Du die Einrichtung aufgrund von Bluetooth-Problemen nicht abschliessen kannst (z.B. Verbindung zur Pumpe nicht möglich). Sollte das so sein, wähle unter KONFIGURATION > Pumpe 'Virtuelle Pumpe' aus und wähle zur Fehlerbehebung den zweiten Weg (s.o.).

![Medtronic-Einstellungen](../images/Medtronic01a.png)

While setting up AAPS to work with your medtronic pump you need to set following items: (see picture above)

- **Seriennummer der Pumpe**: Steht auf der Rückseite der Pumpe und beginnt mit 'SN'. Hier sollen nur die sechs Ziffern (keine Buchstaben) eingegeben werden (z.B. 123456).
- **Pumpentyp**: Das genutzte Pumpenmodell (z.B. 522). 
- **Pumpenfrequenz**: In Abhängigkeit davon, wo Deine Pumpe hergestellt wurde, wähle eine der beiden Optionen aus. Bitte schlage in den [FAQ](MedtronicPump-faq) nach, wenn Du nicht sicher bist welche Option Du wählen solltest: 
    - für Pumpen aus den USA & Kanada ist die Frequenz 916 MHz.
    - Pumpen aus anderen Ländern ("worldwide") nutzen 868 MHz.
- **Max Basal in der Pumpe (IE/h)**: Der Wert muss mit den Einstellungen auf Deiner Pumpe übereinstimmen (vgl. 'Pumpen-Einstellungen' oben). Again this setting must be carefully selected as it will determine how much AAPS can deliver via your basal rate. Damit wird die maximale temporäre Basalrate festgelegt. Zum Beispiel würde die Einstellung dieses Wertes auf das Vierfache Deiner maximalen Standard-Basalrate eine temporäre Basalrate von 400% ermöglichen. Der Maximalwert der Pumpe beträgt 34,9 Einheiten pro Stunde.
- **Max Bolus in der Pumpe (IE)**: Der Wert muss mit den Einstellungen auf Deiner Pumpe übereinstimmen (vgl. 'Pumpen-Einstellungen' oben). This setting should be carefully considered as it determines how large a bolus AAPS can ever set.
- **Verzögerung vor dem Start des Bolus (Sek.)**: Zeitspanne (in Sekunden), die vergehen soll, bis der Bolus tatsächlich an die Pumpe gesendet wird. In dieser Zeitspanne kannst Du einen evtl. versehentlich ausgelösten Bolus noch abbrechen. It is not possible to cancel a bolus that has started via AAPS. Die einzige Möglichkeit einen laufenden Bolus zu stoppen, ist die Pumpe zu 'unterbrechen' und sie anschliessend wieder 'fortzusetzen'.
- **Medtronic Verschlüsselung**: Bestimmt, welche Medtronic Verschlüsselung genutzt werden soll. Um die übermittelte Datenmenge kleinzuhalten, wird für Pumpen mit Rileylink Setup, empfohlen 'Hardware Codierung' auszuwählen. Selecting Software encoding (i.e. carried out by AAPS) can help in the event frequent disconnects are seen. Wenn der Rileylink eine Firmwareversion 0.x haben sollte, wird diese Einstellung nicht genutzt.
- **Batterie-Akkutyp (Power View)**: Um den tatsächlichen Batteriestand bestimmen zu können, sollte angegeben werden welche AAA-Batterien (z.B. Alkaline) verwendet werden. When a value other than simple view is selected AAPS will display the remaining calculated battery percentage level and volts. Die folgenden Optionen sind verfügbar:
    
    - Nicht ausgewählt (Einfache Ansicht)
    - Alkaline Batterie (erweiterte Ansicht)
    - Lithium Batterie (erweiterte Ansicht)
    - Nickel-Zink-Akku (erweiterte Ansicht)
    - Nickel-Zink-Akku (erweiterte Ansicht)
- **Fehlersuche Bolus/Behandlungen**: Wähle hier, je nachdem was Du benötigst, entweder 'Ein' oder 'Aus' aus .

- **RileyLink-Konfiguration**: Über diese Option kannst Du Deinen RileyLink finden ('scannen') und dann koppeln. Nach dem Scanvorgang werden alle sich in der Nähe befindlichen RileyLink-kompatiblen Geräte und deren Signalstärke angezeigt.
- **Verwende Scannen** aktiviert das Bluetooth-Scannen, bevor eine Verbindung mit Deinem RileyLink-kompatiblen Gerät aufgebaut werden kann. Das sollte die Stabilität der Verbindung zu Deinem Gerät verbessern.
- **Akkustand von OrangeLink/EmaLink/DiaLink anzeigen** Diese Funktion wird nur auf neueren Nachbauten (EmaLink oder OrangeLink) funktionieren, jedoch nicht auf dem Original-RileyLink. Die Werte werden in AAPS auf dem Tab MEDTRONIC angezeigt. 
- **Neutrale TBR setzen** Medtronic-Pumpen piepen/vibrieren bei einer aktiven TBR standardmäßig zur vollen Stunde. Bei aktivierter Funktion, wird die TBR vor Ende jeder Stunde abgebrochen und so ein piepen/vibrieren umgangen.

## MEDTRONIC (MDT) Tab

![Medtronic (MDT) Tab](../images/Medtronic02.png) When AAPS is configured to use a Medtronic pump a MDT tab will be shown in the list of tabs at the top of the screen. Auf diesem Tab werden aktuelle Informationen zum Pumpenstatus und zusätzlich einige Medtronic-spezifischen Aktionen angezeigt.

- **RileyLink Status**: The current status of the connection between your phone and Rileylink compatible device. Der Status sollte immer 'Verbunden' sein. Jeder andere Status erfordert Deinen Eingriff. 
- **RileyLink Akku**: Zeigt den aktuellen Akkustand Deines EmaLink oder OrangeLink Gerätes an. Nur wenn unter Medtronic-Einstellungen 'Akkustand von OrangeLink/EmaLink/DiaLink anzeigen' aktiviert wurde.
- **Pumpen-Status**: Status der Verbindung zur Pumpe. Da die Pumpe nicht permanent verbunden ist, wird hier in erster Linie das Schlafsymbol angezeigt. There are a number of possible other status including "Waking Up" when AAPS is trying to issue a command or other possible pump commands such as "Get Time", "Set TBR", etc.
- **Batterie**: Zeigt den Batteriestand basierend auf dem gewählten Batterietyp (Power View) im Menü Medtronic-Einstellungen. 
- **Letzte Verbindung**: Wie lange liegt die letzte erfolgreiche Verbindung zur Pumpe zurück.
- **Letzter Bolus**: Wie lange liegt der letzte abgegebene Bolus zurück.
- **Basis Basalrate**: Das ist die Basis-Basalrate, die in dieser Stunde in Deinem aktiven Profil hinterlegt ist.
- **TBR / Temp basal**: Ist die aktuell laufende temporäre Basalrate. Diese kann auch 0 Einheiten pro Stunde sein.
- **Reservoir**: Insulinstand im Reservoir (Update erfolgt mindestens stündlich).
- **Errors**: Fehlercode, falls ein Problem erkannt wurde - meistens, wenn es fehlerhafte Einstellungen in der Konfiguration gibt.

Am unteren Bildschirmrand befinden sich drei Schaltflächen:

- **Aktualisieren** ist zum Aktualisieren des Pumpen-Status. Dies sollte nur verwendet werden, wenn die Verbindung über einen längeren Zeitraum unterbrochen war. Dies löst eine vollständige Datenaktualisierung aus (Chronik abrufen abfragen/setzen der Zeit, Profil abfragen, Batteriestand abfragen, etc).
- **Pumpen-Historie**: Zeigt die Pumpen-Historie an (siehe [unten](MedtronicPump-pump-history))
- **RL Statistik**: Zeigt Statistiken des RileyLink an (siehe [unten](MedtronicPump-rl-status-rileylink-status))

(MedtronicPump-pump-history)=

## Pumpen Historie

![Dialog Pumpenhistorie](../images/Medtronic03.png)

Die Pumpen Historie wird alle 5 Minuten abgerufen und lokal gespeichert. Nur die letzten 24 Stunden der Pumpen-Historie werden gespeichert. Damit können die Log-Dateien übersichtlich gehalten werden und das Pumpenverhalten gut analysiert werden, wenn es erforderlich werden sollte. The only items stored are those relevenant to AAPS and will not inlcude a configuration function that has no relevance.

(MedtronicPump-rl-status-rileylink-status)=

## RL Status (RileyLink Status)

![RileyLink Status - Einstellungen](../images/Medtronic04.png) ![RileyLink Status - Verlauf](../images/Medtronic05.png)

Der RL-Statusdialog hat zwei Tabs:

- **Einstellungen**: Zeigt die Einstellungen des RileyLink: Konfigurierte Adresse, verbundene Geräte, Verbindungsstatus, Verbindungsfehler und RileyLink Firmware-Versionen. "Device Type" ist immer Medtronic Pump, Modell wäre Dein Modell, Seriennummer entsprechend Deiner Konfiguration, Pumpenfrequenz zeigt die verwendete Frequenz, Last Frequenz ist die zuletzt verwendete Frequenz.
- **History**: Zeigt den Kommunikationsverlauf, Zeilen mit RileyLink zeigt die Statusänderungen für RileyLink und Zeilen mit Medtronic die an die Pumpe geschickten Befehle .

## Aktionen

Wenn der Medtronic-Treiber verwendet wird, werden zwei zusätzliche Aktionen im AKTIONEN-Tab hinzugefügt:

- **Wake and Tune Up** - In the event that AAPS hasn't connected to your pump for a sustained period (it should connect every 5 minutes), you can force a Tune Up. Es wird dann auf allen möglichen Funkfrequenzen versucht Deine Pumpe zu erreichen. Falls eine Verbindung so hergestellt werden kann, wird diese dann verwendete Frequenz als Standard gespeichert.
- **RileyLink Konfiguration zurücksetzen** - Wenn Du Dein RileyLink-kompatibles Gerät zurücksetzten möchtest, kannst Du diese Aktion nutzen. Das Gerät kann dann neu konfiguriert werden (Frequenzbereich, Frequenztyp, Verschlüsselung).

## Wichtige Hinweise

### OpenAPS Nutzer

OpenAPS users should note that AAPS with Medtronic uses a completely different approach than OpenAPS. Using AAPS the primary method of interacting with th pump is via your phone. In der Regel muss die Pumpe nur bei einem Reservoirwechsel direkt über das Pumpen-Menü bedient werden. Bei OpenAPS ist es erforderlich zumindest den Teil eines Bolus direkt an der Pumpe auszulösen. Das ist bei AAPS nicht notwendig. In the event the pump is used to manually deliver a bolus there can be issues if AAPS attempts to deliver one at the same time. Auch wenn es Sicherhheitsprüfungen zum Verhindern solcher Probleme gibt, sollten diese besser vermieden werden.

### Protokollierung

Falls Du einen Fehler in der Pumpenfunktion Deiner Medtronic behoben möchtest, wähle aus dem Hamburger-Menü (drei Striche) 'Wartung' aus und dann 'Log-Einstellungen'. Pump, PumpComm, PumpBTComm sollte für die Fehleranalyse von Medtronic-Problemen ausgewählt werden.

### Medtronic CGM

Das Medtronic CGM ("Enlite") wird derzeit NICHT unterstützt.

### Manuelle Pumpenbedienung

Die händische Bedienung der Pumpe (z.B. Bolusgabe oder temporäre Basalraten setzen) sollte vermieden werden. All such commands should be sent via AAPS. Falls manuelle Befehle verwendet werden, müssen diese mindestens 3 Minuten auseinanderliegen, um das Risiko von Problemen zu verringern.

### Timezone changes and DST (Daylight Saving Time) or Traveling with Medtronic Pump and AAPS

AAPS will automatically detect Timezone changes and will update the Pump's time when your phone switches to the new time.

Wenn Du Richtung Osten reist, werden Stunden zur aktuellen Zeit addiert (z. B. von GMT+0 nach GMT+2). Das ist problemlos, da keine Überschneidungen geben kann (z.B. es ist nicht möglich, dass die gleiche Uhrzeit zweimal auftritt). Das Reisen in Richtung Westen ist da problematischer, da Du in der Zeit tatsächlich zurückreist und dies zu falschen IOB-Werten führen kann.

Das Problem der Reisen nach Westen ist den Entwickler*innen bekannt und die Arbeiten an einer Lösung dauern an. Beachte dazu auch https://github.com/andyrozman/RileyLinkAAPS/issues/145 mit mehr Details. Für den Moment, habe bitte im Kopf, dass das Problem auftreten kann und sei beim Reisen durch Zeitzonen entsprechend aufmerksam.

### Ist ein GNARL ein voll kompatibles RileyLink-kompatibles Gerät?

The GNARL code fully supports all of the functions used by the Medtronic driver in AAPS which means it is fully compatible. Es ist allerdings wichtig zu wissen, dass das mit zusätzlicher Arbeit verbunden ist. Es muss kompatible Hardware beschafft werden, auf die dann der GNARL-Code geladen werden muss.

**Hinweis:** Die GNARL-Software ist noch experimentell und wenig getestet ist. Sie sollte daher nicht als so sicher angesehen werden wie die des RileyLink.

(MedtronicPump-faq)=

## FAQ

(MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump)=

### Vorgehen bei Verlust der Verbindung zum RileyLink und/oder der Pumpe

Es gibt einige Möglichkeiten, um Verbindungsprobleme zu lösen.

- Nutze den 'Aufwachen und Anpassen'-Button im AKTIONEN-Tab, so wie es oben beschrieben ist.
- Deaktiviere Bluetooth auf Deinem Smartphone, warte 10 Sekunden und schalte es wieder ein. Dies zwingt das RileyLink-Gerät sich erneut mit dem Smartphone zu verbinden.
- Setze das RileyLink-Gerät zurück. Nutze dazu den 'RileyLink Konfiguration zurücksetzen'-Button auf dem AKTIONEN-Tab.
- Wenn alles bis hierhin nicht geholfen hat, haben die folgenden Schritte die Verbindungsprobleme bei einigen Community-Mitgliedern beheben können: 
    1. Starte dein Smartphone neu
    2. *Während* dein Smartphone startet, starte den Rileylink ebenfalls neu
    3. Open AAPS and allow the connection to restore

### Ermittlung der Pumpen-Frequenz

![Rückseite Medtronic Pumpe](../images/Medtronic06.png)

Auf der Pumpen-Rückseite findest Du eine Zeile mit der Modellnummer und drei weitere Buchstaben. Die ersten beiden Buchstaben (von dreien) bestimmt die Funkfrequenz der Pumpe. Aus dem letzten Buchstaben lässt sich die Pumpenfarbe ableiten. Hier sind mögliche Werte für die Frequenz:

- NA - Nordamerika (in der Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- CA - Kanada (in Frequenzauswahl musst Du "US & Kanada (916 MHz)" auswählen)
- WW - Weltweit (in der Frequenzauswahl musst Du "Weltweit (868 MHz)" auswählen)