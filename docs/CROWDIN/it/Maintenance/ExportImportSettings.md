# Creare e ripristinare i backup

When installing AAPS on your phone it becomes a "medical device" you rely on daily. It is highly recommended to have an emergency backup plan for when your phone gets defective, stolen or lost. Therefore, it is essential to prepare by asking yourself: "What if?"

To restore your AAPS setup to an existing or new phone, it's important to keep following items in a secure location (read: not on your phone). Best practice is to keep at least two separate backups: on a local hard drive, USB stick and (preferred) on Cloud storage like Google Drive or Microsoft 365 OneDrive. By storing your backups in the cloud you'll always have everything needed accessible from your phone to restore your setup anywhere and anytime.

Consider acquiring a secondary backup phone and practicing restoring AAPS to ensure the backup phone works as expected. This step will give you confidence that your emergency plan is effective and that you can seamlessly continue using AAPS if your primary phone becomes unavailable.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

To be able to restore, having the following items at hand is important:

- Your **Android Studio keystore file** and associated **password**: Needed for (re)building the AAPS .APK installer file.
- Una copia recente del **file di installazione .APK di AAPS**
- A recent **settings export** file: For restoring important settings (which includes your objectives!).
- Your **AAPS master password**
- Backups of additional utilities: Such as BYODA and/or xDrip.
- Appunti personali sulla tua configurazione.

Below are the items that are recommended for keeping back-ups.

## Creare i backup

### Keystore file from the computer you used to build the APK
When building your .APK installer file from Android Studio, it uses the **keystore file and password to sign the .APK installer file**. To update your current AAPS installation, it is required to sign the update .APK installer file with the same keystore used for the initial installation. When updating, all settings and the AAPS database will be kept. Note that without this, you are required to first uninstall the current application and then [reinstall](#reinstall-aaps) and reconfigure AAPS.

Maintaining the keystore and associated password will greatly reduce the complexity of updating the APK in the future, especially if you need to build the app from a new computer. See the [Updating AAPS](../Maintenance/UpdateToNewVersion.md) section for details on using the keystore when building a new APK.

**When to back-up:** The keystore should be backed up after you first build the **AAPS** .APK installer file.

**Come fare il backup:** trova il percorso del tuo keystore. Se non te lo ricordi, puoi trovarlo in Android Studio selezionando **Build > APK > Next**. The path will be listed in “Key store path”. Using your file explorer, navigate to this path and make a copy of your keystore file (ending in file extension `.jks`). Save it to a safe cloud location should your computer become unavailable. Make sure to also record your key store password, key alias and key password.

### Copie dell'APK più recente
In case your main **AAPS** phone is lost or damaged, having a copy of the APK available will allow you to quickly resume using **AAPS** with a new phone. Note: you will also need your preferences backed up as noted below.

**When to back-up:** You should maintain a back-up of the most recent APK that you installed on your main **AAPS** phone. You may want to also maintain one earlier version in case you need to roll back to that for any reason.

**How to back-up:** Maintain a copy on the computer used to build the APK with Android Studio. Additionally, it is recommended to use a cloud platform to store a copy of the installer APK. Assicurati di sapere dove trovare entrambi i backup quando servono. Valuta di creare cartelle dedicate per conservare questi backup.

### File delle impostazioni di AAPS (chiamato anche 'Preferenze')

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

With a copy of the APK installer file (see above) and your **Settings** file, you can quickly get up and running on an existing or new phone.

The **Settings** file is used to customize the AAPS application to fit your specific setup. They encompass details such as your **Configuration** settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

Exporting the AAPS settings to file enables you to restore its configuration to a specific point in time. As mentioned, in addition to all configuration settings, the export file also contains the status of your objectives, which you need to restore when **(re)installing** AAPS. Without this you will be required to redo all objectives from start to enable closed loop. Settings files also enable you to restore "last known good" settings for undoing any configuration changes.

**Quando fare il backup delle impostazioni di AAPS:**
* Each time you complete an objective to prevent losing your progress. _Without a copy of your **Settings** you will have to complete all objectives again in the event you need to re-install AAPS or replace your phone._

* Any time you plan to make significant changes to your configuration (change SMB settings, change insulin types, change pump, make changes to automations) you should back up your **Settings** before and after making the changes. This way you have your most recent settings as well as a copy of what they were before the changes in case you need to revert back to them.

* Solo per chi usa micro senza catetere (come Omnipod e Medtrum): il file delle **Impostazioni** contiene i dati di connessione del pod attuale e si può usare per ripristinare la connessione a quel pod con un nuovo telefono. If you do not have a copy of your preferences exported after you started your current pod you will need to start a new pod in the event you need to replace your current phone.

**Come fare il backup manualmente:**

1. Se è la prima volta che importi o esporti le **Impostazioni**, devi impostare una password master in [Impostazioni > Protezione](#Preferences-master-password). Set a password and record this in a safe place. _Senza questa password non potrai accedere ai backup delle **Impostazioni**._

2. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance**. Scegli dove salvare il file con i chip **Locale** e **Cloud** accanto a **Esporta impostazioni** (vedi **Esportare o importare le impostazioni** più sotto), poi tocca **Esporta impostazioni**. **AAPS** mostra dove andrà il file: il nome del file per **Locale**, **Google Drive** per **Cloud**. Tocca **OK**.

   ![Esportare le impostazioni in un file locale](../images/Maintenance/export_settings_confirm_local.png)

   ![Esportare le impostazioni su Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Type the master password set above and tap **OK**.

   ![Password master per l'esportazione](../images/Maintenance/export_settings_password.png)

   Il messaggio **Impostazioni esportate** (locale) o **Esportazione cloud riuscita** (cloud) conferma l'esportazione.

   ![Messaggio Impostazioni esportate](../images/Maintenance/export_settings_done_local.png)

   ![Messaggio Esportazione cloud riuscita](../images/Maintenance/export_settings_done_cloud.png)

3. Using the file explorer on your phone (commonly called “Files” or “My Files”) navigate to Internal Storage > AAPS > preferences. Here you will see a copy of all exported preferences files. Il nome del file dovrebbe essere `YYYY-MM-DD_Time_appname.json`. Carica questo file sulla piattaforma cloud che preferisci. Then from the cloud platform, also download a copy to your local computer.

(ExportImportSettings-Settings-Export)=

## Settings Export

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).
```

It is recommended to do regular settings exports, especially before and after making configuration changes. You can choose to do exports **manually or (preferred) through automation**. Make sure to take a note of your AAPS master password and to backup your settings files by copying them off your phone to for instance a cloud storage location.

**Note**: _The exported settings will be encrypted with your AAPS master password: without the master password used for exporting you will be unable to import the settings file!_

### Esportare o importare le impostazioni
Per esportare o importare le impostazioni, apri il **menu** (☰) e seleziona **Manutenzione**. Under **File management**, the **Local** and **Cloud** chips next to **Export settings** and **Import settings** choose where the settings file is saved to or read from: **Local** is the AAPS directory on your phone, **Cloud** is available once a [Cloud Directory](#preferences-maintenance-cloud) is set up. Tapping a chip turns it on or off; at least one always stays selected, and both rows share the same choice. Then tap **Export settings** or **Import settings** itself to start.

![Menu Manutenzione con le righe Esporta impostazioni e Importa impostazioni](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatizzare l'esportazione delle impostazioni

Per automatizzare le esportazioni delle impostazioni [(**vedi Automazione**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) apri [**Impostazioni** > **Manutenzione**](#preferences-maintenance-settings), espandi **Esportazione automatica delle impostazioni** e attiva **Abilita l'esportazione automatica delle impostazioni**.

You can now configure [Automation](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) to export settings, either on a regular basis (_i.e._ each week), or after a pod change.

_**Note:** On importing settings, the user always needs to enter the AAPS master password!_

![Impostazioni > Manutenzione > Esportazione automatica delle impostazioni con l'interruttore Abilita l'esportazione automatica delle impostazioni](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Restoring from your backups on a new phone or fresh installation of AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
You will find your settings in the **AAPS Directory** you have selected during [AAPS setup](#SetupWizard-StoragePermission).</br>
You can also change the **AAPS directory** on the **Maintenance** screen (**menu** (☰) > **Maintenance**), see [Setting the local AAPS directory](#preferences-maintenance-logdirectory).</br>
If **AAPS** loses access to that directory (this can happen after a reinstall or after clearing the app's storage), it shows an **Access to the AAPS directory was lost** notification and stops saving settings to the phone until you [select the directory again](#preferences-maintenance-logdirectory).
```

Use these instructions if you have a back-up of your APK and **Settings** that you want to load on to a new phone or if you needed to delete and reinstall the APK on your existing phone for any reason.

_If you are updating **AAPS** using an APK built with the same keystore you should not need to follow this process. However, it is still advised to create a back-up before you apply the update._

If you are updating **AAPS** after you lost or replaced your original keystore (i.e. using a new build computer without transferring the keystore), ensure that you back up all settings per the above and then uninstall the existing version of **AAPS** on your phone. Vedi [Reinstallare AAPS con un nuovo keystore](#reinstall-aaps) per la procedura completa.

If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) prior to the steps listed below

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
The **Preferences** file contains the session of the pod or patch that was active when you exported it.
- **Export right after every pod or patch activation** and copy the file off your phone.
- **Same phone, pod still running:** leave **Also replace pump settings** unticked. Your current pod is kept and only the other settings are imported.
- **New phone taking over the pod:** tick **Also replace pump settings**, and only use a file exported during the pod you are wearing now. A file from an earlier pod replaces your current pod session, and you will need to start a new pod.
- **An old pod session was imported by mistake:** **AAPS** keeps trying to reach that pod and you cannot activate a new one. Deactivate it; if that fails, discard it (see for example [Discarding a pod](#omnipod-dash-discard-pod) for Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
By default, an import leaves your pump settings alone: the pump selected in **Configuration**, its pairing and all its other settings stay as they are on this phone. Tick **Also replace pump settings** on the import screen only when you restore onto a new phone that should take over the same pump. Settings that are not in the file are never deleted by an import.
```

1. Using the back-up copy of your APK from above, follow the instructions for a [new installation](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Launch **AAPS** and allow any requested permissions

3. Exit the Setup Wizard. Importeremo tutte le impostazioni necessarie dalla copia di backup delle **Impostazioni**

4. From the **AAPS** main screen press **Grant** and allow all permissions listed in the **Permissions Required** panel on the top

5. From the **AAPS** main screen, set the master password in [Settings > Protection](#Preferences-master-password) to the same password as you used with your back-ups.

6. If you haven't done it yet, [set the **AAPS directory**](#preferences-maintenance-logdirectory): from the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **AAPS directory**.

7. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance** > **Export settings** > type in the master password set above > **OK**. This will create the preferences folder if it does not already exist on your phone.

8. Scarica dalla tua piattaforma cloud il backup del file delle **Preferenze**.

9. Use your file explorer (commonly called “Files” or “My Files”) to move the file from your downloads to `/internal storage/AAPS/preferences` if your **AAPS Directory** has been set `/internal storage/AAPS`

10. From the **AAPS** main screen, open the **menu** (☰) > **Maintenance** and tap **Import settings**. Seleziona il file delle preferenze da cui vuoi ripristinare (il più recente è in alto). Make sure you select the correct preferences file, all .json files from the preferences folder (or from the cloud directory, with **Cloud**) will be shown.

    ![List of settings files to import](../images/Maintenance/import_settings_files.png)

    **AAPS** mostra i dettagli del file. Type the master password set above and tap **Decrypt & Review**.

11. Once the file is decrypted, decide what to do with the pump settings. On a new phone that takes over the same pump, tick **Also replace pump settings** so the pairing and the pump settings come from the file. Leave the box unticked to keep the pump this phone is already paired with. Poi tocca **Importa**.

    ![File delle impostazioni decifrato con la casella Sostituisci anche le impostazioni del micro e il pulsante Importa](../images/Maintenance/import_settings_review.png)

12. **AAPS** asks **Apply imported settings?** and tells you how many settings will change and, if you left the box unticked, how many pump settings are kept. Non è ancora stato scritto nulla, quindi **Annulla** lascia il telefono esattamente com'era. Tocca **OK** per applicare.

    ![Finestra di dialogo per applicare le impostazioni importate](../images/Maintenance/import_settings_apply.png)

13. **AAPS** applica subito le impostazioni importate, senza riavviarsi. Vengono riavviati solo i plugin le cui impostazioni sono cambiate. While this runs, **AAPS** shows **Applying settings…**; if the pump is busy, it shows **Waiting for pump…** and applies the settings once the pump is idle. If the pump is still busy after one minute, **AAPS** offers to try again. Il messaggio **Impostazioni applicate** conferma che le impostazioni importate sono in uso. Any treatment you had queued while the import ran is dropped and **AAPS** tells you that it was cancelled, so nothing is sent to the pump twice.

    ![Messaggio Impostazioni applicate](../images/Maintenance/import_settings_applied.png)

If the file selected a pump that this version of **AAPS** does not have, **AAPS** falls back to the **Virtual Pump** and tells you so. Seleziona di nuovo il tuo micro in **Configurazione** e controlla le sue impostazioni.

14. Tubeless pumps (Omnipod and Medtrum) users only - if you ticked **Also replace pump settings** and your **Preferences** were not backed up from the same pod you are currently using, you will need to start a new pod to begin insulin delivery.

**Troubleshooting:** if you are unable to get an active profile set from the **AAPS** main screen, open the **menu** (☰) in the top left > **Configuration** > **Pump** > switch to **Virtual Pump** > then switch back to your pump type

### Note for Dana RS users

- If you ticked **Also replace pump settings**, the pump connection settings are imported too: **AAPS** on your new phone will already "know" the pump and therefore not start a Bluetooth scan.
- Please pair new phone and pump manually.