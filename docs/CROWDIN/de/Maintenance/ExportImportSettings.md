# Erstellen und Wiederherstellen von Backups

When installing AAPS on your phone it becomes a "medical device" you rely on daily. It is highly recommended to have an emergency backup plan for when your phone gets defective, stolen or lost. Therefore, it is essential to prepare by asking yourself, "What if?

To restore your AAPS setup to an existing or new phone, it's important to keep following items in a secure location (read: not on your phone). Best practice is to keep at least two separate backups: on a local hard drive, USB stick and (preferred) on Cloud storage like Google Drive or Microsoft 365 OneDrive. By storing your backups in the cloud you'll always have everything needed accessible from your phone to restore your setup anywhere and anytime.

Consider acquiring a secondary backup phone and practicing restoring AAPS to ensure the backup phone works as expected. This step will give you confidence that your emergency plan is effective and that you can seamlessly continue using AAPS if your primary phone becomes unavailable.

To be able to restore, having the following items at hand is important:

- Your **Android Studio keystore file** and associated **password**: Needed for (re)building the AAPS .APK installer file.
- A recent copy of the **AAPS installer .APK**
- A recent **settings export** file: For restoring important settings (which includes your objectives!).
- Your **AAPS master password**
- Backups of additional utilities: Such as BYODA and/or xDrip+.
- Personal notes on your setup.

Below are the items that are recommended for keeping back-ups.

## Backups erstellen

### Keystore-Datei des Computers, auf dem Du die APK erstellt hast
When building your .APK installer file from Android Studio, it uses the **keystore file and password to sign the .APK installer file**. To update your current AAPS installation, it is required to sign the update .APK installer file with the same keystore used for the initial installation. When updating, all settings and the AAPS database will be kept. Note that without this, you are required to first uninstall the current application and then reinstall and reconfigure AAPS.

Maintaining the keystore and associated password will greatly reduce the complexity of updating the APK in the future, especially if you need to build the app from a new computer. Wie Du den Keystore bei der Erstellung einer neuen APK nutzt, erfährst Du im Abschnitt „[AAPS aktualisieren](../Maintenance/UpdateToNewVersion.md)“.

**When to back-up:** The keystore should be backed up after you first build the **AAPS** .APK installer file.

**How to back-up:** Locate your keystore path. Wenn Du Dich nicht mehr an ihn erinnerst, kannst Du auch im Android Studio nachschauen: Wähle **Build > APK > Next**. Der Pfad wird Dir in “Key store path” angezeigt. Navigiere mit Deinem Datei-Explorer zum entsprechenden Verzeichnis und kopiere die Keystore-Datei (die Dateiendung ist `.jks`). Speichere sie an einem sicheren Ort in Deinem Cloud-Speicher, für den möglichen Fall, dass Du auf Deinem Computer nicht zugreifen kannst. Wichtig ist auch, dass Du Dein Keystore-Passwort, den Key-Alias und das Key-Passwort kennst (oder notierst).

### Kopien der neuesten APK-Datei
In case your main **AAPS** phone is lost or damaged, having a copy of the APK available will allow you to quickly resume using **AAPS** with a new phone. Note: you will also need your preferences backed up as noted below.

**When to back-up:** You should maintain a back-up of the most recent APK that you installed on your main **AAPS** phone. Falls Du einen „Rollback“ machen musst, ist es ratsam auch die entsprechende Vorgänger-Version gesichert zu haben.

**How to back-up:** Maintain a copy on the computer used to build the APK with Android Studio. Additionally, it is recommended to use a cloud platform to store a copy of the installer APK. Make sure you know how to locate both backups when needed. Consider setting up dedicated folders to store these backups.

### AAPS settings file (also referred to as 'Preferences')
With a copy of the APK installer file (see above) and your **Settings** file, you can quickly get up and running on an existing or new phone.

The **Settings** file is used t customize the AAPS application to fit your specific setup. They encompass details such as your config builder settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

Exporting the AAPS settings to file enables you to restore its configuration to a specific point in time. As mentioned, in addition to all configuration settings, the export file also contains the status of your objectives, which you need to restore when **(re)installing** AAPS. Without this you will be required to redo all objectives from start to enable closed loop. Settings files also enable you to restore "last known good" settings for undoing any configuration changes.

**When to back-up AAPS settings:**
* Each time you complete an objective to prevent losing your progress. _Without a copy of your **Settings** you will have to complete all objectives again in the event you need to re-install AAPS or replace your phone._

* Any time you plan to make significant changes to your configuration (change SMB settings, change insulin types, change pump, make changes to automations) you should back up your **Settings** before and after making the changes. Auf diese Weise hast Du für den Fall eines "Rollback" sowohl die aktuellen Einstellungen als auch eine Kopie des Zustands vor den Änderungen.

* Tubeless pumps (Such as Omnipod and Medtrum) users only : the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. Solltest Du Deine Einstellungen nicht nach dem Start des aktuellen Pods exportiert und gesichert haben, wirst Du im Fall eines Smartphone-Austauschs einen neuen Pod starten müssen.

**How to back-up manually:**

1. If this your first time importing or exporting **Settings** you will need to set a master password in [Preferences > General > Protection](#Preferences-master-password). Lege ein Passwort fest und notiere es an einem sicheren Ort. _You will be unable to access your **Settings** back-ups without this password._

2. Vom **AAPS**-Startbildschirm wähle das Drei-Linien-Menü (Hamburger-Menü) oben links > Wartung > Einstellungen exportieren > gib das festgelegte Master-Passwort ein > Ok.

![AAPS Export der Einstellungen 1](../images/Maintenance/AAPS_ExportSettings1.png) ![AAPS Export der Einstellungen 2](../images/Maintenance/AAPS_ExportSettings2.png)

3. Navigiere mit dem Datei-Explorer auf Deinem Smartphone (meist als „Dateien“ oder „Meine Dateien“ bezeichnet) zu Interner Speicher > AAPS > Einstellungen. Hier findest Du Kopien aller exportierten Einstellungs-Dateien. Der Dateiname sollte `JJJJ-MM-TT_Zeit_Appname.json sein`. Lade diese Datei in den Cloud-Speicher Deiner Wahl hoch. Lade dann auch eine Kopie aus der Cloud auf Deinen lokalen Computer herunter.

## Settings Export

It is recommended to do regular settings exports, especially before and after making configuration changes. You can choose to do exports **manually or (preferred) through automation**. Make sure to take a note of your AAPS master password and to backup your settings files by copying them off your phone to for instance a cloud storage location.

**Note**: _The exported settings will be encrypted with your AAPS master password: without the master password used for exporting you will be unable to import the settings file!_

### Exporting or Importing Settings:
To export or import settings, use the **import or export buttons** in the AAPS **maintenance menu**

![Maintenance menu export/import buttons](../images/Maintenance/maintenance_menu_import_export_400px.png)

### Automating Settings Export:
For doing automating settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) enable the option "**Unattended Settings Exports**" in the maintenance menu preferences.

By enabling this feature you allow AAPS to execute settings exports without user intervention. For this the master password is securely stored on your phone (only) at the next manually export. The stored password will be used for up to 4 weeks. After 4 weeks you will be notified the password is about to expire. During a grace period of 1 week, the password can then be refreshed by manually exporting settings from the maintenance menu.

After the grace period of 1 week has passed the stored password expires and any automated settings export will abort while notifying the user, asking to reenter the password.  [(**Automated settings exports**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export)  will be logged to the AAPS 'Careportal' and 'User entry' lists under Treatments.

_**Note:** On importing settings to user always needs to enter the AAPS password!_

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