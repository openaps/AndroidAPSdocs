# Creating and restoring back-ups

Es ist wichtig, Backups der unten aufgeführten Dinge zu behalten. Es hat sich bewährt ein Backup lokal auf der Festplatte als auch in der Cloud (z.B. Google Drive, Dropbox, etc…) zu speichern. Unten sind die Dinge aufgelistet, von denen Du Backups erstellen solltest.

## Creating back-ups

### 1 - Keystore-Datei des Computers, auf dem Du die APK erstellt hast.
Mit dem Keystore bist Du in der Lage ein Update der APK über eine bestehende AAPS-Version zu installieren. Der Keystore reduziert die Komplexität bei einem zukünftigen APK-Update ganz erheblich. Das gilt insbesondere, wenn Du die App auf einem neuen Computer erzeugen musst. Wie Du den Keystore bei der Erstellung einer neuen APK nutzt, erfährst Du im Abschnitt "AAPS aktualisieren" (link).

**Wann soll ich ein Backup machen:** Der Keystore sollte gesichert werden, wenn Du die AAPS-APK das erste Mal erstellt hast.

**So sicherst Du:** Finde den Keystore-Pfad heraus. Wenn Du Dich nicht mehr daran erinnerst, kannst Du auch im Android Studio nachschauen: Wähle Build > APK > Next. Der Pfad wird Dir in “Key store path” angezeigt. Navigiere mit Deinem Datei-Explorer zum entsprechenden Verzeichnis und kopiere die Keystore-Datei (die Dateiendung ist .jks). Speichere sie an einem sicheren Ort in Deinem Cloud-Speicher, für den möglichen Fall, dass Du auf Deinem Computer nicht zugreifen kannst. Wichtig ist auch, dass Du Dein Keystore-Passwort, den Key-Alias und das Key-Passwort kennst (oder notierst).

### 2 - Kopien der neuesten APK-Datei
Wenn Du Dein Haupt-AAPS-Smartphone verlierst oder es beschädigt wird, kannst Du AAPS mit einer Kopie der APK auf dem neuen Smartphone schnell wieder lauffähig bekommen (Hinweis: auch die Einstellungen müssen wie unten beschrieben gesichert werden).

**Wann soll ich ein Backup machen:** Du solltest immer eine aktuelle Sicherung der neuesten APK, die Du auf Deinem AAPS Smartphone nutzt, haben. Falls Du einen "Rollback" machen musst, ist es ratsam auch die entsprechende Vorgänger-Version gesichert zu haben.

**So sicherst Du:** Eine Kopie wird auf dem Computer gespeichert, der zum Erstellen des APK mit Android Studio verwendet wurde. Wenn Du eine Cloud nutzt, speichere zusätzlich eine Kopie der APK in Deinem Cloud-Speicher von dem Du die Datei später auf Dein Smartphone laden kannst. Merke oder notiere Dir die jeweiligen Speicherorte, damit Du die Kopien im Fall der Fälle auch wiederfindest. Zur Speicherung der Backups sind dedizierte Verzeichnisse auf Deinem Computer und auch in Deinem Cloud-Speicher eine Überlegung wert.

### 3 - AAPS Einstellungen
Einstellungen sind das, was die Standard-AAPS-Anwendung an Deine Wünsche anpasst. Einstellungen beinhalten Details Deiner Konfigurationseinstellungen, den Fortschritt in der Bearbeitung der Ziele (Objectives), Deine Nightscout-Einstellungen, Automatisierungen und die lokalen Profile. Mit einer Kopie der APK-Datei (siehe oben) und den zugehörigen Einstellungen bist Du auf einem neuen Smartphone schnell wieder startklar.

**Wann ich ein Backup machen soll:**

1 - Da die Einstellungen auch Deinen Fortschritt bei der Bearbeitung der Ziele speichern, solltest nach jedem abgeschlossenen Ziel eine Sicherung machen, sodass Du diesen Fortschritt nicht verlierst. _Ohne eine Kopie der Einstellungen, musst Du bei einem Tausch Deines Smartphones alle Ziele erneut durchlaufen und auch erneut abschließen_.

2 - Immer dann, wenn Du größere Änderungen an der Konfiguration vornimmst (SMB-Einstellungen änderst, Insulintyp änderst, Pumpe änderst, Änderungen an Automatisierungen vornimmst), solltest Du sowohl vor als auch nach der Änderung die Einstellungen sichern. Auf diese Weise hast Du für den Fall eines "Rollback" sowohl die aktuellen Einstellungen als auch eine Kopie des Zustands vor den Änderungen.

3 - _Nur für Omnipod Dash-Benutzer_ - Die Einstellungsdatei enthält Verbindungsdetails zu Deinem aktiven Pod und kann auch genutzt werden, um die Verbindung zu diesem Pod mit einem neuen Smartphone wiederherzustellen. Solltest Du Deine Einstellungen nicht nach dem Start des aktuellen Pods exportiert und gesichert haben, wirst Du im Fall eines Smartphone-Austauschs einen neuen Pod starten müssen.

**Wie ich ein Backup mache:**

1 - Wenn Du erstmalig Deine Einstellungen im- oder exportierst, musst Du ein Masterpasswort festlegen. Wähle in AAPS dazu die drei Punkte oben rechts in der Ecke > Einstellungen > Allgemein > Schutz > Master-Passwort. Lege ein Passwort fest und notiere es an einem sicheren Ort. _Ohne dieses Passwort wirst Du nicht auf die Backups Deiner Einstellungen zugreifen können._

2 - Vom AAPS-Startbildschirm wähle Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen exportieren > gib das festgelegte Master-Passwort ein > Ok

![AAPS Export der Einstellungen 1](../images/AAPS_ExportSettings1.png) ![AAPS Export der Einstellungen 2](../images/AAPS_ExportSettings2.png)

3 - Navigiere mit dem Datei-Explorer auf Deinem Smartphone (meist als „Dateien“ oder „Meine Dateien“ bezeichnet) zu Interner Speicher > AAPS > Einstellungen. Hier findest Du Kopien aller exportierten Einstellungs-Dateien. Der Dateiname sollte JJJJ-MM-TT_Zeit_Appname.json sein. Lade diese Datei in den Cloud-Speicher Deiner Wahl hoch. Lade dann auch eine Kopie aus der Cloud auf Deinen lokalen Computer herunter.

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Wiederherstellen Deines Backups auf einem neuen Smartphone oder AAPS-Neuinstallation
Nutze diese Anleitung, wenn Du ein Backup Deiner APK-Datei oder der Einstellungen hast und das auf Dein Smartphone laden möchtest oder Du die bestehende APK-Datei auf Deinem aktuellen Smartphone - aus welchem Grund auch immer - löschen und neu installieren möchtest.

_Wenn Du AAPS mit einer APK aktualisieren möchtest, die mit demselben Keystore erstellt wurde, sollte der der folgende Prozess nicht notwendig sein. Es wird trotzdem empfohlen, ein Backup vor dem Update zu erstellen._

Solltest Du AAPS aktualisieren nachdem Du Deinen ursprünglichen Keystore in der Zwischenzeit verloren oder ersetzt hast (z.B. einen neuen Computer für die Erstellung genutzt hast ohne den Keystore übertragen zu haben), ist es wichtig, dass Du die Einstellungen wie oben beschrieben sicherst und dann die bestehende AAPS-Version von Deinem Samartphone deinstallierst.

If needed, [setup your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) prior to the steps listed below

_Omnipod-Nutzende:_ Wenn die Einstellungen während einer früheren Pod-Session exportiert wurden, deaktiviert das Importieren einer Einstellungsdatei den jetzt laufenden Pod.

1 - Using the back-up copy of your APK from above, follow the instructions for a [new installation](../SettingUpAaps/TransferringAndInstallingAaps.md)

2 - Starte AAPS und erteile alle angeforderten Berechtigungen

3 - Beende den Einrichtungs-Assistenten. Wir werden alle notwendigen Einstellungen aus der Sicherung der Einstellungen importieren

4 - Wähle vom AAPS-Startbildschirm aus 'Anfordern' und erlaube alle dort oben in rot dargestellten Berechtigungen

5 - Wähle auf dem AAPS-Startbildschirm die drei Punkte oben rechts in der Ecke > Einstellungen > Allgemein > Schutz > Master-Passwort. Setze das Master-Passwort auf das gleiche Passwort wie Du es bei Deinem Backup verwendet hast.

6 - Vom AAPS-Startbildschirm wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen exportieren > gib das festgelegte Master-Passwort ein > Ok. Damit wird der Ordner 'preferences' - sofern noch nicht vorhanden - auf Deinem Smartphone erstellt.

7 - Lade die Sicherungskopie Deiner Einstellung aus der Cloud herunter.

8 - Verschiebe die Datei mit dem Datei-Explorer (meist "Dateien" oder "Meine Dateien" genannt) aus dem Ordner "Downloads" nach /Interner Speicher/AAPS/preferences

9 - Vom AAPS-Startbildschirm wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen importieren > wähle die Einstellungsdatei aus, aus der Du wiederherstellen möchtest > Ok > Gib Dein Master-Passwort ein > Ok. Da alle vorhandenen .json Dateien im "preferences"-Verzeichnis angezeigt werden, ist Vorsicht bei Auswahl der richtigen Datei erforderlich.

![AAPS Import der Einstellungen 1](../images/AAPS_ImportSettings1.png) ![AAPS Import der Einstellungen 2](../images/AAPS_ImportSettings2.png)

10 - AAPS wird nach dem Import automatisch neu starten und sollte dann die importierten Einstellungen bereits berücksichtigen.

11 - Nur für Omnipod-Dash-Nutzende - sind die Einstellungen nicht mit dem aktuell verwendeten Pumpe gesichert worden, musst Du, um mit der Insulinabgabe beginnen zu können, einen neuen Pod starten

**Fehlerbehebung:** Wenn Du auf dem AAPS Startbildschirm kein aktives Profil gesetzt bekommst, tippe auf das Drei-Linien-Menü (Hamburger-Menü) oben links > Konfiguration > Pumpe > Aktiviere die virtuelle Pumpe > wechsele danach zurück zu Deiner tatsächlich verwendeten Pumpe


### Hinweis für Dana RS Nutzer

- Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan.
- Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.
