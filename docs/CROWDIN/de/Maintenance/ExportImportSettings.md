# Erstellen und Wiederherstellen von Backups

Sobald Du AAPS auf Deinem Smartphone installierst, wird es zu einem "medizinischen Gerät" auf das Du Dich jeden Tag verlässt. Es wird dringend empfohlen, für den Fall, dass Dein Smartphone defekt, gestohlen oder verloren geht, einen Notfall-Plan zu haben. Deshalb ist es wichtig, sich vorher zu fragen: „Was wäre, wenn …?“

Um Deine AAPS-Konfiguration auf einem bestehenden oder neuen Smartphone wiederherzustellen, ist es wichtig, die folgenden Elemente an einem sicheren Ort zu behalten (nicht auf Deinem Smartphone). Es hat sich bewährt, mindestens zwei separate Sicherungen zu haben: auf einer lokalen Festplatte, einem USB-Stick und (bevorzugt) im Cloud-Speicher (z. B.Google Drive oder Microsoft 365 OneDrive). Indem Du Deine Backups in der Cloud speicherst, hast Du von Deinem Smartphone aus alles, was zum Wiederherstellen Deiner Konfiguration benötigt wird, immer und überall verfügbar.

Überlege, ob Du Dir ein zweites Backup-Smartphone zulegen möchtest und das Wiederherstellen von AAPS übst, bis Dein Backup-Smartphone wie erwartet funktioniert. Dieser Schritt gibt Dir Gewissheit darüber, dass Dein Notfallplan funktioniert und Du beim Ausfall Deines primären Smartphones AAPS problemlos weiter nutzen kannst.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Seit **AAPS** 4.0 werden die Einstellungen verschlüsselt auf dem Smartphone gespeichert. Sie sind weder im Google-Backup noch in der Übertragung von Smartphone zu Smartphone bei einem neuen Gerät enthalten. Ein Export der Einstellungen, wie auf dieser Seite beschrieben, ist der einzige Weg, sie mitzunehmen.
```

Um wiederherstellen zu können, ist es wichtig, die folgenden Dinge zur Hand zu haben:

- Deine **Android Studio Keystore-Datei** und das zugehörige **Passwort**: Wird zum (Neu-)Erstellen der AAPS.APK Installationsdatei benötigt.
- Eine aktuelle Kopie der **AAPS.APK Installationsdatei**
- Einen aktuellen **Export der Einstellungen**: Zum Wiederherstellen wichtiger Einstellungen (inklusive Deiner Ziele!).
- Dein **AAPS-Master-Passwort**
- Sicherungen zusätzlicher Hilfsmittel: wie BYODA und/oder xDrip.
- Persönliche Notizen zu Deinem Setup.

Unten sind die Elemente, die für die Sicherungen empfohlen werden, aufgeführt.

## Backups erstellen

### Keystore-Datei des Computers, auf dem Du die APK erstellt hast
Beim Erstellen Deiner .APK-Installationsdatei aus Android Studio heraus, wird die **Keystore-Datei und das Passwort genutzt, um die .APK-Installationsdatei zu signieren**. Um Deine aktuelle AAPS-Installation zu aktualisieren, muss die aktualisierte .APK-Installationsdatei mit dem gleichen Keystore, wie bei der ersten Installation, signiert werden. Beim Aktualisieren werden alle Einstellungen und die AAPS-Datenbank erhalten bleiben. Ohne ihn musst Du die aktuelle App erst deinstallieren und AAPS dann [neu installieren](#reinstall-aaps) und neu einrichten.

Den Keystore und das zugehörige Passwort zu haben, reduziert die Komplexität bei einem zukünftigen APK-Update ganz erheblich. Das gilt insbesondere, wenn Du die App auf einem neuen Computer erzeugen musst. Wie Du den Keystore bei der Erstellung einer neuen APK nutzt, erfährst Du im Abschnitt „[AAPS aktualisieren](../Maintenance/UpdateToNewVersion.md)“.

**Wann soll gesichert werden:** Der Keystore sollte nach dem ersten Erstellen der **AAPS** .APK Installationsdatei gesichert werden.

**So sicherst Du:** Finde den Keystore-Pfad heraus. Wenn Du Dich nicht mehr an ihn erinnerst, kannst Du auch im Android Studio nachschauen: Wähle **Build > APK > Next**. Der Pfad wird Dir in “Key store path” angezeigt. Navigiere mit Deinem Datei-Explorer zum entsprechenden Verzeichnis und kopiere die Keystore-Datei (die Dateiendung ist `.jks`). Speichere sie an einem sicheren Ort in Deinem Cloud-Speicher, für den möglichen Fall, dass Du auf Deinem Computer nicht zugreifen kannst. Wichtig ist auch, dass Du Dein Keystore-Passwort, den Key-Alias und das Key-Passwort kennst (oder notierst).

### Kopien der neuesten APK-Datei
Für den Fall, dass Dein **AAPS** Haupt-Smartphone verloren geht oder beschädigt wird, kannst Du mit einer verfügbaren Kopie der APK mit **AAPS** auf einem neuen Smartphone sehr schnell wieder weitermachen. Hinweis: Du wirst auch Deine - vorher wie unten beschriebenen gesicherten - Einstellungen brauchen.

**Wann soll ich ein Backup machen:** Du solltest immer eine aktuelle Sicherung der neuesten APK, die Du auf Deinem **AAPS**-Smartphone nutzt, haben. Falls Du einen „Rollback“ machen musst, ist es ratsam auch die entsprechende Vorgänger-Version gesichert zu haben.

**So sicherst Du:** Halte eine Kopie auf dem Computer, mit dem Du die APK mit Android Studio erstellt hast, aktuell. Zusätzlich wird empfohlen, eine Kopie der APK-Installationsdatei in einer Cloud zu speichern. Stelle sicher, dass Du beide Backups bei Bedarf findest. Überlege, ob Du für die Speicherung der Backups eigene Ordner anlegen möchtest.

### AAPS-Einstellungsdatei („Einstellungen“)

```{admonition} Where are preferences stored on my phone?
:class: tip
Deine Einstellungen findest Du im **AAPS-Verzeichnis**, das Du bei der [AAPS-Einrichtung](#SetupWizard-StoragePermission) gewählt hast.</br>
Das **AAPS-Verzeichnis** kannst Du auch im Bildschirm **Wartung** ändern (**Menü** (☰) > **Wartung**), siehe [Das lokale AAPS-Verzeichnis festlegen](#preferences-maintenance-logdirectory).
```

Mit einer Kopie der APK-Installationsdatei (siehe oben) und Deiner **Einstellungs**-Datei, bist Du auf einem bestehenden oder neuen Smartphone schnell wieder einsatzbereit.

Die **Einstellungsdatei** wird verwendet, um die AAPS-Anwendung an Deine spezifischen Bedürfnisse anzupassen. Dazu gehören Deine Einstellungen in der **Konfiguration**, der Stand der Ziele, die Einstellungen für die Kommunikation mit anderen Diensten (z. B. Nightscout, Tidepool), Automatisierungen und Profile.

Durch den Export der AAPS-Einstellungen in die Datei kannst Du die Konfiguration zu einem bestimmten Zeitpunkt wiederherstellen. Wie bereits erwähnt, enthält die Exportdatei zusätzlich zu allen Konfigurationseinstellungen auch den Status Deiner Ziele, den Du bei einer AAPS-**(Neu-)Installation** wiederherstellen musst. Ohne diese Wiederherstellung musst Du alle Ziele erneut von Anfang an durchlaufen, um einen Closed Loop aktivieren zu können. Einstellungsdateien ermöglichen es Dir auch, die „letzten funktionierenden“ Einstellungen wiederherzustellen. Damit machst Du alle Konfigurationsänderungen rückgängig.

**Wann die AAPS-Einstellungen gesichert werden sollten:**
* Jedes Mal, wenn Du ein Ziel erfüllst. Damit verhinderst Du den Fortschritt möglicherweise zu verlieren. _Ohne eine Kopie Deiner **Einstellungen** musst Du, wenn Du AAPS neu installierst oder Dein Smartphone tauschst, alle Ziele erneut abschließen._

* Immer dann, wenn Du größere Änderungen an der Konfiguration vornimmst (SMB-Einstellungen änderst, Insulintyp änderst, Pumpe änderst, Änderungen an Automatisierungen vornimmst), solltest Du sowohl vor als auch nach der Änderung die **Einstellungen** sichern. Auf diese Weise hast Du für den Fall eines "Rollback" sowohl die aktuellen Einstellungen als auch eine Kopie des Zustands vor den Änderungen.

* Nur für Nutzende schlauchloser Pumpen (Omnipod und Medtrum): Die Datei mit den **Einstellungen** enthält auch Verbindungsdetails zu Deinem aktuellen Pod und kann genutzt werden, um die Verbindung zu diesem Pod mit einem neuen Smartphone wiederherzustellen. Solltest Du Deine Einstellungen nicht nach dem Start des aktuellen Pods exportiert und gesichert haben, wirst Du im Fall eines Smartphone-Austauschs einen neuen Pod starten müssen.

**Wie Du manuell sicherst:**

1. Wenn Du zum ersten Mal **Einstellungen** importierst oder exportierst, musst Du unter [Einstellungen > Zugriffsschutz](#Preferences-master-password) ein Master-Passwort festlegen. Lege ein Passwort fest und notiere es an einem sicheren Ort. _Ohne dieses Passwort wirst Du nicht auf die Backups Deiner **Einstellungen** zugreifen können._

2. Öffne auf dem **AAPS**-Startbildschirm das **Menü** (☰) > **Wartung**. Wähle mit den Auswahlfeldern **Lokal** und **Cloud** neben **Einstellungen exportieren**, wo die Datei gespeichert wird (siehe **Exportieren oder Importieren der Einstellungen** unten), und tippe dann auf **Einstellungen exportieren**. **AAPS** zeigt an, wohin die Datei geht: den Dateinamen bei **Lokal**, **Google Drive** bei **Cloud**. Tippe auf **OK**.

   ![Export settings to a local file](../images/Maintenance/export_settings_confirm_local.png)

   ![Export settings to Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Gib das oben festgelegte Master-Passwort ein und tippe auf **OK**.

   ![Master password for the export](../images/Maintenance/export_settings_password.png)

   **Einstellungen exportiert** (lokal) oder **Cloud-Export erfolgreich** (Cloud) bestätigt den Export.

   ![Settings exported message](../images/Maintenance/export_settings_done_local.png)

   ![Cloud export successful message](../images/Maintenance/export_settings_done_cloud.png)

3. Navigiere mit dem Datei-Explorer auf Deinem Smartphone (meist als „Dateien“ oder „Meine Dateien“ bezeichnet) zu Interner Speicher > AAPS > Einstellungen. Hier findest Du Kopien aller exportierten Einstellungs-Dateien. Der Dateiname sollte `JJJJ-MM-TT_Zeit_Appname.json sein`. Lade diese Datei in den Cloud-Speicher Deiner Wahl hoch. Lade dann auch eine Kopie aus der Cloud auf Deinen lokalen Computer herunter.

(ExportImportSettings-Settings-Export)=

## Einstellungen exportieren

```{admonition} Where are preferences stored on my phone?
:class: tip
Deine Einstellungen findest Du im **AAPS-Verzeichnis**, das Du bei der [AAPS-Einrichtung](#SetupWizard-StoragePermission) gewählt hast.</br>
Das **AAPS-Verzeichnis** kannst Du auch im Bildschirm **Wartung** ändern (**Menü** (☰) > **Wartung**), siehe [Das lokale AAPS-Verzeichnis festlegen](#preferences-maintenance-logdirectory).
```

Insbesondere vor und nach den Konfigurationsänderungen, wird empfohlen, die Einstellungen regelmäßig zu exportieren. Du kannst wählen, ob Du die Exporte **manuell oder (vorzugsweise) durch eine Automatisierung** durchführen möchtest. Stelle sicher, dass Du Dir Dein AAPS Master-Passwort notierst und die Datei mit Deinen Einstellungen regelmäßig sicherst, indem Du sie von Deinem Smartphone zum Beispiel in einen Cloud-Speicher kopierst.

**Hinweis**: _Die exportierten Einstellungen werden mit Deinem AAPS Master-Passwort verschlüsselt: Ohne das Master-Passwort, das für den Export genutzt wurde, kannst Du die Datei mit Deinen Einstellungen nicht importieren!_

### Exportieren oder Importieren der Einstellungen
Um Einstellungen zu exportieren oder zu importieren, öffne das **Menü** (☰) und wähle **Wartung**. Unter **Dateiverwaltung** legen die Auswahlfelder **Lokal** und **Cloud** neben **Einstellungen exportieren** und **Einstellungen importieren** fest, wohin die Einstellungsdatei gespeichert bzw. woher sie gelesen wird: **Lokal** ist das AAPS-Verzeichnis auf Deinem Smartphone, **Cloud** ist verfügbar, sobald ein [Cloud-Ordner](#preferences-maintenance-cloud) eingerichtet ist. Ein Tippen auf ein Auswahlfeld schaltet es ein oder aus; mindestens eines bleibt immer ausgewählt, und beide Zeilen teilen sich dieselbe Auswahl. Tippe dann auf **Einstellungen exportieren** bzw. **Einstellungen importieren** selbst, um zu starten.

![Maintenance menu with the Export settings and Import settings rows](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatisierter Export der Einstellungen

Um Einstellungen automatisch zu exportieren [(**siehe Automatisierung**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), öffne [**Einstellungen** > **Wartung**](#preferences-maintenance-settings), klappe **Automatischer Einstellungsexport** auf und schalte **Automatischen Einstellungsexport aktivieren** ein.

Du kannst [Automatisierungen](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) so konfigurieren, dass die Einstellungen auitomatisch exportiert werden, entweder regelmäßig (_z. B._ wöchentlich) oder nach einem Pod-Wechsel.

_**Hinweis:** Beim Importieren von Einstellungen musst Du immer das AAPS-Master-Passwort eingeben!_

![Settings > Maintenance > Unattended Settings Export with the Enable automated settings export switch](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Wiederherstellen Deines Backups auf einem neuen Smartphone oder AAPS-Neuinstallation

```{admonition} Where are preferences stored on my phone?
:class: tip
Deine Einstellungen findest Du im **AAPS-Verzeichnis**, das Du bei der [AAPS-Einrichtung](#SetupWizard-StoragePermission) gewählt hast.</br>
Das **AAPS-Verzeichnis** kannst Du auch im Bildschirm **Wartung** ändern (**Menü** (☰) > **Wartung**), siehe [Das lokale AAPS-Verzeichnis festlegen](#preferences-maintenance-logdirectory).</br>
Verliert **AAPS** den Zugriff auf dieses Verzeichnis (das kann nach einer Neuinstallation oder nach dem Löschen des App-Speichers passieren), zeigt es die Benachrichtigung **Zugriff auf das AAPS-Verzeichnis verloren** und speichert keine Einstellungen mehr auf dem Smartphone, bis Du [das Verzeichnis erneut auswählst](#preferences-maintenance-logdirectory).
```

Nutze diese Anleitung, wenn Du ein Backup Deiner APK und Deiner **Einstellungen** hast, das Du auf ein neues Smartphone laden willst, oder wenn Du die APK auf Deinem bisherigen Smartphone aus irgendeinem Grund löschen und neu installieren musstest.

_Wenn Du **AAPS** mit einer APK aktualisieren möchtest, die mit demselben Keystore erstellt wurde, sollte der folgende Prozess nicht notwendig sein. Es wird trotzdem empfohlen, ein Backup vor dem Update zu erstellen._

Solltest Du **AAPS** aktualisieren nachdem Du Deinen ursprünglichen Keystore in der Zwischenzeit verloren oder ersetzt hast (z. B. einen neuen Computer für die Erstellung genutzt hast ohne den Keystore übertragen zu haben), ist es wichtig, dass Du die Einstellungen wie oben beschrieben sicherst und dann die bestehende **AAPS**-Version von Deinem Samartphone deinstallierst. Den vollständigen Ablauf findest Du unter [AAPS mit einem neuen Keystore neu installieren](#reinstall-aaps).

Wenn notwendig [konfiguriere Deinen CGM/BZ-Empfänger](../Getting-Started/CompatiblesCgms.md) bevor Du die nun folgenden Schritte ausführst

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Die Datei mit den **Einstellungen** enthält die Session des Pods bzw. Patches, der beim Export aktiv war.
- **Exportiere direkt nach jeder Aktivierung eines Pods oder Patches** und kopiere die Datei vom Smartphone weg.
- **Gleiches Smartphone, Pod läuft noch:** Lass **Pumpeneinstellungen auch ersetzen** abgewählt. Dein aktueller Pod bleibt erhalten, und nur die übrigen Einstellungen werden importiert.
- **Neues Smartphone übernimmt den Pod:** Hake **Pumpeneinstellungen auch ersetzen** an und verwende nur eine Datei, die während des Pods exportiert wurde, den Du gerade trägst. Eine Datei von einem früheren Pod ersetzt Deine aktuelle Pod-Session, und Du musst einen neuen Pod starten.
- **Versehentlich eine alte Pod-Session importiert:** **AAPS** versucht weiter, diesen Pod zu erreichen, und Du kannst keinen neuen aktivieren. Deaktiviere ihn; klappt das nicht, verwirf ihn (siehe zum Beispiel [Einen Pod verwerfen](#omnipod-dash-discard-pod) für Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Standardmäßig lässt ein Import Deine Pumpeneinstellungen unverändert: Die in der **Konfiguration** gewählte Pumpe, ihre Kopplung und alle ihre anderen Einstellungen bleiben auf diesem Smartphone so, wie sie sind. Hake **Pumpeneinstellungen auch ersetzen** im Import-Bildschirm nur an, wenn Du auf ein neues Smartphone wiederherstellst, das dieselbe Pumpe übernehmen soll. Einstellungen, die nicht in der Datei stehen, werden durch einen Import nie gelöscht.
```

1. Für eine [Neuinstallation](../SettingUpAaps/TransferringAndInstallingAaps.md) nutze die Anleitung und die Sicherungskopie Deiner APK von oben

2. Starte **AAPS** und lasse alle angeforderten Berechtigungen zu

3. Beende den Einrichtungs-Assistenten. Wir importieren alle nötigen Einstellungen aus dem Backup der **Einstellungen**

4. Tippe auf dem **AAPS**-Startbildschirm auf **Berechtigung erteilen** und erlaube alle Berechtigungen, die oben im Bereich **Berechtigungen erforderlich** aufgeführt sind

5. Lege auf dem **AAPS**-Startbildschirm unter [Einstellungen > Zugriffsschutz](#Preferences-master-password) dasselbe Master-Passwort fest, das Du für Deine Backups verwendet hast.

6. Falls noch nicht geschehen, [lege das **AAPS-Verzeichnis** fest](#preferences-maintenance-logdirectory): Öffne auf dem **AAPS**-Startbildschirm das **Menü** (☰) > **Wartung** > **AAPS-Verzeichnis**.

7. Öffne auf dem **AAPS**-Startbildschirm das **Menü** (☰) > **Wartung** > **Einstellungen exportieren** > gib das oben festgelegte Master-Passwort ein > **OK**. Damit wird der Ordner 'preferences' - sofern noch nicht vorhanden - auf Deinem Smartphone erstellt.

8. Lade die Datei mit der Sicherung Deiner **Einstellungen** aus Deiner Cloud-Plattform herunter.

9. Verwende Deinen Dateimanager (häufig „Dateien“ oder „Eigene Dateien“), um die Datei von Deinem Download-Verzeichnis auf `/Interner Speicher/AAPS/preferences` zu verschieben, sofern Dein **AAPS Verzeichnis** `/Interner Speicher/AAPS` ist.

10. Öffne auf dem **AAPS**-Startbildschirm das **Menü** (☰) > **Wartung** und tippe auf **Einstellungen importieren**. Wähle die Einstellungsdatei, aus der Du wiederherstellen willst (die neueste steht oben). Achte darauf, die richtige Einstellungsdatei zu wählen. Es werden alle .json-Dateien aus dem Ordner preferences (bzw. bei **Cloud** aus dem Cloud-Ordner) angezeigt.

    ![List of settings files to import](../images/Maintenance/import_settings_files.png)

    **AAPS** zeigt die Details der Datei an. Gib das oben festgelegte Master-Passwort ein und tippe auf **Entschlüsseln & Überprüfen**.

11. Ist die Datei entschlüsselt, entscheide, was mit den Pumpeneinstellungen passieren soll. Auf einem neuen Smartphone, das dieselbe Pumpe übernimmt, hake **Pumpeneinstellungen auch ersetzen** an, damit Kopplung und Pumpeneinstellungen aus der Datei kommen. Lass das Kästchen leer, um die Pumpe zu behalten, mit der dieses Smartphone schon gekoppelt ist. Tippe dann auf **Importieren**.

    ![Decrypted settings file with the Also replace pump settings box and the Import button](../images/Maintenance/import_settings_review.png)

12. **AAPS** fragt **Importierte Einstellungen übernehmen?** und sagt Dir, wie viele Einstellungen sich ändern und, wenn Du das Kästchen leer gelassen hast, wie viele Pumpeneinstellungen erhalten bleiben. Bis dahin wurde noch nichts geschrieben, **Abbrechen** lässt Dein Smartphone also genau so, wie es war. Tippe zum Übernehmen auf **OK**.

    ![Importierte Einstellungen übernehmen? Dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** übernimmt die importierten Einstellungen sofort, ohne Neustart. Nur die Module, deren Einstellungen sich geändert haben, werden neu gestartet. Währenddessen zeigt **AAPS** **Einstellungen werden angewendet…**; ist die Pumpe beschäftigt, zeigt es **Warte auf Pumpe…** und übernimmt die Einstellungen, sobald die Pumpe frei ist. Ist die Pumpe nach einer Minute immer noch beschäftigt, bietet **AAPS** an, es erneut zu versuchen. Die Meldung **Einstellungen übernommen** bestätigt, dass die importierten Einstellungen verwendet werden. Eine Behandlung, die während des Imports in der Warteschlange stand, wird verworfen, und **AAPS** teilt Dir mit, dass sie abgebrochen wurde, damit nichts doppelt an die Pumpe gesendet wird.

    ![Settings applied message](../images/Maintenance/import_settings_applied.png)

Ist in der Datei eine Pumpe gewählt, die diese Version von **AAPS** nicht hat, weicht **AAPS** auf die **Virtuelle Pumpe** aus und teilt Dir das mit. Wähle Deine Pumpe in der **Konfiguration** erneut und prüfe ihre Einstellungen.

14. Nur für schlauchlose Pumpen (Omnipod und Medtrum): Hast Du **Pumpeneinstellungen auch ersetzen** angehakt und wurden Deine **Einstellungen** nicht während des Pods gesichert, den Du gerade verwendest, musst Du einen neuen Pod starten, damit Insulin abgegeben wird.

**Fehlerbehebung:** Kannst Du auf dem **AAPS**-Startbildschirm kein aktives Profil setzen, öffne oben links das **Menü** (☰) > **Konfiguration** > **Pumpe** > wechsle auf **Virtuelle Pumpe** > und dann zurück zu Deinem Pumpentyp

### Hinweis für Dana RS Nutzer

- Hast Du **Pumpeneinstellungen auch ersetzen** angehakt, werden auch die Verbindungseinstellungen der Pumpe importiert: **AAPS** auf Deinem neuen Smartphone „kennt“ die Pumpe dann schon und startet deshalb keine Bluetooth-Suche.
- Bitte stelle die Bluetooth-Verbindung zwischen Smartphone und Pumpe manuell her.