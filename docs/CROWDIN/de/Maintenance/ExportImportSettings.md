# Erstellen und Wiederherstellen von Backups

Sobald Du AAPS auf Deinem Smartphone installierst, wird es zu einem "medizinischen Gerät" auf das Du Dich jeden Tag verlässt. Es wird dringend empfohlen, für den Fall, dass Dein Smartphone defekt, gestohlen oder verloren geht, einen Notfall-Plan zu haben. Daher ist es wichtig, Dich darauf vorzubereiten, indem Du Dich fragst "Was passiert, wenn?"

Um Deine AAPS-Konfiguration auf einem bestehenden oder neuen Smartphone wiederherzustellen, ist es wichtig, die folgenden Elemente an einem sicheren Ort zu behalten (nicht auf Deinem Smartphone). Es hat sich bewährt, mindestens zwei separate Sicherungen zu haben: auf einer lokalen Festplatte, USB-Stick und (bevorzugt) im Cloud-Speicher wie Google Drive oder Microsoft 365 OneDrive. Indem Du Deine Backups in der Cloud speicherst, hast Du von Deinem Smartphone aus alles, was zum Wiederherstellen Deiner Konfiguration benötigt wird, immer und überall verfügbar.

Überlege, ob Du Dir ein zweites Backup-Smartphone zulegen möchtest und das Wiederherstellen von AAPS übst, bis Dein Backup-Smartphone wie erwartet funktioniert. Dieser Schritt gibt Dir Gewissheit darüber, dass Dein Notfallplan funktioniert und Du beim Ausfall Deines primären Smartphones AAPS problemlos weiter nutzen kannst.

Um wiederherstellen zu können, ist es wichtig, die folgenden Dinge zur Hand zu haben:

- Deine **Android Studio Keystore-Datei** und das zugehörige **Passwort**: Wird zum (Neu-)Erstellen der AAPS.APK Installationsdatei benötigt.
- Eine aktuelle Kopie der **AAPS.APK Installationsdatei**
- Einen aktuellen **Export der Einstellungen**: Zum Wiederherstellen wichtiger Einstellungen (inklusive Deiner Ziele!).
- Dein **AAPS-Master-Passwort**
- Sicherungen zusätzlicher Hilfsmittel: wie BYODA und/oder xDrip+.
- Persönliche Notizen zu Deinem Setup.

Unten sind die Elemente, die für die Sicherungen empfohlen werden, aufgeführt.

## Backups erstellen

### Keystore-Datei des Computers, auf dem Du die APK erstellt hast
Beim Erstellen Deiner .APK-Installationsdatei aus Android Studio heraus, wird die **Keystore-Datei und das Passwort genutzt, um die .APK-Installationsdatei zu signieren**. Um Deine aktuelle AAPS-Installation zu aktualisieren, muss die aktualisierte .APK-Installationsdatei mit dem gleichen Keystore, wie bei der ersten Installation, signiert werden. Beim Aktualisieren werden alle Einstellungen und die AAPS-Datenbank erhalten bleiben. Beachte, dass ohne dies Du zunächst die aktuelle Anwendung deinstallieren und AAPS dann neu installieren und neu konfigurieren musst.

Den Keystore und das zugehörige Passwort zu haben, reduziert die Komplexität bei einem zukünftigen APK-Update ganz erheblich. Das gilt insbesondere, wenn Du die App auf einem neuen Computer erzeugen musst. Wie Du den Keystore bei der Erstellung einer neuen APK nutzt, erfährst Du im Abschnitt „[AAPS aktualisieren](../Maintenance/UpdateToNewVersion.md)“.

**Wann soll gesichert werden:** Der Keystore sollte nach dem ersten Erstellen der **AAPS** .APK Installationsdatei gesichert werden.

**So sicherst Du:** Finde den Keystore-Pfad heraus. Wenn Du Dich nicht mehr an ihn erinnerst, kannst Du auch im Android Studio nachschauen: Wähle **Build > APK > Next**. Der Pfad wird Dir in “Key store path” angezeigt. Navigiere mit Deinem Datei-Explorer zum entsprechenden Verzeichnis und kopiere die Keystore-Datei (die Dateiendung ist `.jks`). Speichere sie an einem sicheren Ort in Deinem Cloud-Speicher, für den möglichen Fall, dass Du auf Deinem Computer nicht zugreifen kannst. Wichtig ist auch, dass Du Dein Keystore-Passwort, den Key-Alias und das Key-Passwort kennst (oder notierst).

### Kopien der neuesten APK-Datei
Für den Fall, dass Dein **AAPS** Haupt-Smartphone verloren geht oder beschädigt wird, kannst Du mit einer verfügbaren Kopie der APK mit **AAPS** auf einem neuen Smartphone sehr schnell wieder weitermachen. Hinweis: Du wirst auch Deine - vorher wie unten beschriebenen gesicherten - Einstellungen brauchen.

**Wann soll ich ein Backup machen:** Du solltest immer eine aktuelle Sicherung der neuesten APK, die Du auf Deinem **AAPS**-Smartphone nutzt, haben. Falls Du einen „Rollback“ machen musst, ist es ratsam auch die entsprechende Vorgänger-Version gesichert zu haben.

**So sicherst Du:** Halte eine Kopie auf dem Computer, mit dem Du die APK mit Android Studio erstellt hast, aktuell. Zusätzlich wird empfohlen, eine Kopie der APK-Installationsdatei in einer Cloud zu speichern. Stelle sicher, dass Du beide Backups bei Bedarf findest. Überlege, ob Du für die Speicherung der Backups eigene Ordner anlegen möchtest.

### AAPS-Einstellungsdatei (auch 'Einstellungen' genannt)
Mit einer Kopie der APK-Installationsdatei (siehe oben) und Deiner **Einstellungs**-Datei, bist Du auf einem bestehenden oder neuen Smartphone schnell wieder einsatzbereit.

Die **Einstellungsdatei** wird verwendet, um die AAPS-Anwendung an Deine spezifischen Bedürfnisse anzupassen. Sie beinhalten Details wie z. B. Deine Konfigurationseinstellungen, Status der Ziele, Kommunikationseinstellungen zu Drittanbietern (z. B. Nightscout, Tidepool), Automatisierungen und Profile.

Durch den Export der AAPS-Einstellungen in die Datei kannst Du die Konfiguration zu einem bestimmten Zeitpunkt wiederherstellen. Wie bereits erwähnt, enthält die Exportdatei zusätzlich zu allen Konfigurationseinstellungen auch den Status Deiner Ziele, den Du bei einer AAPS-**(Neu-)Installation** wiederherstellen musst. Ohne diese Wiederherstellung musst Du alle Ziele erneut von Anfang an durchlaufen, um einen Closed Loop aktivieren zu können. Einstellungsdateien ermöglichen es Dir auch, die "letzten funktionierenden" Einstellungen wiederherzustellen. Damit machst Du alle Konfigurationsänderungen rückgängig.

**Wann die AAPS-Einstellungen gesichert werden sollten:**
* Jedes Mal, wenn Du ein Ziel erfüllst. Damit verhinderst Du den Fortschritt möglicherweise zu verlieren. _Ohne eine Kopie Deiner **Einstellungen** musst Du, wenn Du AAPS neu installierst oder Dein Smartphone tauschst, alle Ziele erneut abschließen._

* Immer dann, wenn Du größere Änderungen an der Konfiguration vornimmst (SMB-Einstellungen änderst, Insulintyp änderst, Pumpe änderst, Änderungen an Automatisierungen vornimmst), solltest Du sowohl vor als auch nach der Änderung die **Einstellungen** sichern. Auf diese Weise hast Du für den Fall eines "Rollback" sowohl die aktuellen Einstellungen als auch eine Kopie des Zustands vor den Änderungen.

* Nur für Nutzende schlauchloser Pumpen (Omnipod und Medtrum): Die Datei mit den **Einstellungen** enthält auch Verbindungsdetails zu Deinem aktuellen Pod und kann genutzt werden, um die Verbindung zu diesem Pod mit einem neuen Smartphone wiederherzustellen. Solltest Du Deine Einstellungen nicht nach dem Start des aktuellen Pods exportiert und gesichert haben, wirst Du im Fall eines Smartphone-Austauschs einen neuen Pod starten müssen.

**Wie Du manuell sicherst:**

1. Wenn Du die **Einstellungen** zum ersten Mal im- oder exportierst, musst Du in den [Einstellungen > Allgemein > Schutz](#Preferences-master-password) ein Master-Passwort setzen. Lege ein Passwort fest und notiere es an einem sicheren Ort. _Ohne dieses Passwort wirst Du nicht auf die Backups Deiner **Einstellungen** zugreifen können._

2. Vom **AAPS**-Startbildschirm wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen exportieren > gib das festgelegte Master-Passwort ein > Ok.

![AAPS Export der Einstellungen 1](../images/Maintenance/AAPS_ExportSettings1.png) ![AAPS Export der Einstellungen 2](../images/Maintenance/AAPS_ExportSettings2.png)

3. Navigiere mit dem Datei-Explorer auf Deinem Smartphone (meist als „Dateien“ oder „Meine Dateien“ bezeichnet) zu Interner Speicher > AAPS > Einstellungen. Hier findest Du Kopien aller exportierten Einstellungs-Dateien. Der Dateiname sollte `JJJJ-MM-TT_Zeit_Appname.json sein`. Lade diese Datei in den Cloud-Speicher Deiner Wahl hoch. Lade dann auch eine Kopie aus der Cloud auf Deinen lokalen Computer herunter.

(ExportImportSettings-Settings-Export)=

## Einstellungen exportieren

Insbesondere vor und nach den Konfigurationsänderungen, wird empfohlen, die Einstellungen regelmäßig zu exportieren. Du kannst wählen, ob Du die Exporte **manuell oder (vorzugsweise) durch eine Automatisierung** durchführen möchtest. Stelle sicher, dass Du Dir Dein AAPS Master-Passwort notierst und die Datei mit Deinen Einstellungen regelmäßig sicherst, indem Du sie von Deinem Smartphone zum Beispiel in einen Cloud-Speicher kopierst.

**Hinweis**: _Die exportierten Einstellungen werden mit Deinem AAPS Master-Passwort verschlüsselt: Ohne das Master-Passwort, das für den Export genutzt wurde, kannst Du die Datei mit Deinen Einstellungen nicht importieren!_

### Exportieren oder Importieren der Einstellungen
Um die Einstellungen zu exportieren oder zu importieren, verwende die **Import- oder Export-Schaltflächen** im AAPS **Wartungsmenü**

![Maintenance menu export/import buttons](../images/Maintenance/maintenance_menu_import_export_400px.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatisierter Export der Einstellungen

Um einen automatischen Export der Einstellungen einzurichten [(**siehe Automatisierung**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), aktiviere unter [Einstellungen > Wartung](#preferences-maintenance-settings) die Option „**Automatischer Export der Einstellungen**“.

Du kannst [Automatisierungen](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) so konfigurieren, dass die Einstellungen auitomatisch exportiert werden, entweder regelmäßig (_z. B._ wöchentlich) oder nach einem Pod-Wechsel.

_**Hinweis:** Beim Importieren der Einstellungen musst Du immer das AAPS-Passwort eingegeben!_

![Maintenance menu unattended Settings Export](../images/Maintenance/maintenance_menu_preferences_400px.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Wiederherstellen Deines Backups auf einem neuen Smartphone oder AAPS-Neuinstallation
Nutze diese Anleitung, wenn Du ein Backup Deiner APK-Datei oder der **Einstellungen** hast und das auf Dein Smartphone laden möchtest oder Du die bestehende APK-Datei auf Deinem aktuellen Smartphone - aus welchem Grund auch immer - löschen und neu installieren möchtest.

_Wenn Du **AAPS** mit einer APK aktualisieren möchtest, die mit demselben Keystore erstellt wurde, sollte der folgende Prozess nicht notwendig sein. Es wird trotzdem empfohlen, ein Backup vor dem Update zu erstellen._

Solltest Du **AAPS** aktualisieren nachdem Du Deinen ursprünglichen Keystore in der Zwischenzeit verloren oder ersetzt hast (z. B. einen neuen Computer für die Erstellung genutzt hast ohne den Keystore übertragen zu haben), ist es wichtig, dass Du die Einstellungen wie oben beschrieben sicherst und dann die bestehende **AAPS**-Version von Deinem Samartphone deinstallierst.

Wenn notwendig [konfiguriere Deinen CGM/BZ-Empfänger](../Getting-Started/CompatiblesCgms.md) bevor Du die nun folgenden Schritte ausführst

```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Der Import einer Datei mit den **Einstellungen** wird den aktiven Pod deaktivieren, wenn die **Einstellungen** mit einem anderen aktiven Pod exportiert wurden. 
```

1. Für eine [Neuinstallation](../SettingUpAaps/TransferringAndInstallingAaps.md) nutze die Anleitung und die Sicherungskopie Deiner APK von oben

2. Starte **AAPS** und lasse alle angeforderten Berechtigungen zu

3. Beende den Einrichtungs-Assistenten. Wir werden alle notwendigen Einstellungen aus der Sicherung der **Einstellungen** importieren

4. Wähle vom **AAPS**-Startbildschirm aus „Anfordern“ und lasse alle dort oben in rot dargestellten Berechtigungen zu

5. Vom **AAPS**-Startbildschirm, das Master-Passwort in [Einstellungen > Allgemein > Schutz](#Preferences-master-password) auf das gleiche Passwort setzen, wie Du es bei Deiner Sicherungen verwendet hast.

6. Vom **AAPS**-Startbildschirm aus wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen exportieren > gib das festgelegte Master-Passwort ein > Ok. Damit wird der Ordner 'preferences' - sofern noch nicht vorhanden - auf Deinem Smartphone erstellt.

7. Lade die Datei mit der Sicherung Deiner **Einstellungen** aus Deiner Cloud-Plattform herunter.

8. Verschiebe die Datei mit dem Datei-Explorer (meist „Dateien“ oder „Meine Dateien“ genannt) aus dem Ordner „Downloads“ nach `/Interner Speicher/AAPS/preferences`

9. Vom **AAPS**-Startbildschirm aus wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen importieren > wähle die Einstellungsdatei aus, aus der Du wiederherstellen möchtest > Ok > Gib Dein Master-Passwort ein > Ok. Da alle vorhandenen .json Dateien im "preferences"-Verzeichnis angezeigt werden, ist Vorsicht bei Auswahl der richtigen Datei erforderlich.

![AAPS Import der Einstellungen 1](../images/Maintenance/AAPS_ImportSettings1.png) ![AAPS Import der Einstellungen 2](../images/Maintenance/AAPS_ImportSettings2.png)

10. **AAPS** wird nach dem Import automatisch neu starten und sollte dann die importierten Einstellungen bereits berücksichtigen.

11. Für Nutzende schlauchloser Pumpen (Omnipod und Medtrum) - wenn Deine **Einstellungen** nicht vom gleichen Pod gesichert wurden, den Du gerade verwendest, musst Du einen neuen Pod starten, um die Insulinabgabe zu starten.

**Fehlerbehebung:** Wenn Du auf dem **AAPS**-Startbildschirm kein aktives Profil gesetzt bekommst, tippe auf das Drei-Linien-Menü (Hamburger-Menü) oben links > Konfiguration > Pumpe > Aktiviere die virtuelle Pumpe > wechsle danach zurück zu Deiner tatsächlich verwendeten Pumpe

### Hinweis für Dana RS Nutzer

- Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in **AAPS** importiert werden, „kennt“ AAPS Deine Pumpe bereits und startet daher keinen Bluetooth-Scan.
- Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.