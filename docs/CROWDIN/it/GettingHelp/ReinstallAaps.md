(reinstall-aaps)=
# Reinstallare AAPS con un nuovo keystore

Ogni apk di **AAPS** è firmato con un **keystore**. An update only installs over your current **AAPS** if it is signed with the **same keystore**: all your settings and data are then kept. That's why it is recommended to store the keystore and its password in a safe place.

If you try to install an apk signed with a different keystore than before, you will get an error message explaining that the installation failed!

(reinstall-aaps-when)=
## When do you need to reinstall?

You need to uninstall and reinstall **AAPS** when your new apk is signed with a different keystore, for example:

- You cannot find your old keystore or its password.
- You created a new keystore, for example with [Option 1 of the browser build](../SettingUpAaps/BrowserBuildKeystore.md) or **Create a new key** in [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md).
- You build on a new computer and did not copy your keystore to it.

If you still have your keystore, you don't need this page: reuse it and [update **AAPS**](../Maintenance/UpdateToNewVersion.md) in place.

(reinstall-aaps-before)=
## Prima di iniziare

- Uninstalling **AAPS** deletes all its settings, your [objectives](../SettingUpAaps/CompletingTheObjectives.md) and the current pump connection. Li recuperi importando il tuo **file delle impostazioni**, quindi assicurati di averne uno recente.
- The settings file does not contain your treatment and glucose history. If you upload to [Nightscout](../SettingUpAaps/SettingUpTheReportingServer.md), you can load it back after the reinstall (step 8).
- You need your [**master password**](#Preferences-master-password): the settings file is encrypted with it. Resetting a forgotten master password does not help here: a settings file can only be imported with the password it was exported with (see [How to reset the master password?](#FAQ-reset-master-password)).
- **Omnipod and Medtrum users:** read [Tubeless pumps](#ExportImportSettings-tubeless-pumps) first. Your settings file must have been exported during the pod or patch you are wearing now.
- If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) before you start.

(reinstall-aaps-steps)=
## Passi

Le immagini mostrano il passaggio da **AAPS** 3.4 (passi da 1 a 3) ad **AAPS** 4 (passi da 6 a 8). Other versions look slightly different.

(reinstall-aaps-export)=
### 1. Export your settings

Export your settings with the **AAPS** currently installed on your phone. See [Settings Export](#ExportImportSettings-Settings-Export) for details.

In **AAPS** 3.4: open **Maintenance** and tap **Export options**. Under **User Settings**, tick **Local Storage** and tap **OK**.

*Note: you can also use [Cloud Storage](#preferences-maintenance-cloud) to have a safety backup copy: that's a good idea, but keep Local Storage for recovering settings quickly.*

![Export options with User Settings set to Local Storage](../images/ReinstallAaps/reinstall_export_options_local.png)

The button now reads **Export settings (local)**. Toccalo.

![Maintenance with the Export settings (local) button](../images/ReinstallAaps/reinstall_export_settings_local.png)

**AAPS** mostra il nome del file che creerà. Tap **OK**, type your master password and tap **OK**.

![Conferma dell'esportazione delle impostazioni con il nome del file](../images/ReinstallAaps/reinstall_export_confirm.png)

In **AAPS** 4: apri **Manutenzione**, seleziona il chip **Locale** accanto a **Esporta impostazioni** e tocca **Esporta impostazioni**.

(reinstall-aaps-copy)=
### 2. Copia il file delle impostazioni fuori dal telefono

Il file è nella cartella **preferences** della tua [directory **AAPS**](#SetupWizard-StoragePermission), con un nome come `2026-10-13_222735_full.json`. Copy or upload it to an external location (i.e. your computer, cloud storage service...). The file normally stays on your phone after the uninstall, but keep a copy elsewhere in case.

(reinstall-aaps-nightscout-before)=
### 3. Sincronizza con Nightscout

This step is not mandatory but recommended if you use [DynISF](#Open-APS-features-DynamicISF): it will allow you to resume directly with the current settings instead of waiting 5 days to build necessary data for the plugin. NSClient V3 deve essere [attivato e configurato](../SettingUpAaps/SettingUpTheReportingServer.md).

Make sure Nightscout has all your data before you uninstall.

Apri **NSClient**, tocca il pulsante **Sincronizzazione completa** in fondo alla schermata, poi **OK**.

![NSClient screen with the Full synchronization button](../images/ReinstallAaps/reinstall_ns_fullsync_menu_before.png)

*Note: the time necessary depends on your Nightscout hosting service.*

![Conferma della sincronizzazione completa](../images/ReinstallAaps/reinstall_ns_fullsync_confirm.png)

**AAPS** then offers to clean up its database. **OK** removes data older than 3 months from the phone, which makes the synchronization much faster. **Annulla** sincronizza senza pulire. The phone database is deleted when you uninstall anyway, so both are fine.

![Domanda sulla pulizia del database](../images/ReinstallAaps/reinstall_ns_fullsync_cleanup.png)

Lascia **AAPS** in esecuzione finché la sincronizzazione non è finita.

(reinstall-aaps-build)=
### 4. Build the new apk

[Build](../SettingUpAaps/BuildingAaps.md) a new signed apk with your new keystore and transfer it to your phone.

(reinstall-aaps-uninstall)=
### 5. Disinstalla AAPS

In your phone's **Settings** > **Apps** > **AAPS**, tap **Uninstall** and confirm with **OK**.

![App info of AAPS with the Uninstall button](../images/ReinstallAaps/reinstall_uninstall_appinfo.png)

(reinstall-aaps-install)=
### 6. Install and start the new AAPS

[Installa](../SettingUpAaps/TransferringAndInstallingAaps.md) il nuovo apk e avvia **AAPS**. La [configurazione guidata](../SettingUpAaps/SetupWizard.md) chiede i permessi di cui **AAPS** ha bisogno: tocca **Concedi** per ognuno. Questo disattiva di nuovo anche l'[ottimizzazione della batteria](#setup-wizard-bluetooth-battery-optimisation).

![Permissions Required list of the setup wizard](../images/ReinstallAaps/reinstall_permissions.png)

For **AAPS Directory**, select the same **AAPS** folder as before (the one with the **preferences** folder in it), tap **Use this folder** and **Allow**.

![Selezione della cartella AAPS esistente](../images/ReinstallAaps/reinstall_aaps_directory.png)

When **AAPS** finds your exported settings, the setup wizard shows a [Stored settings found](#setup-wizard-import-settings) screen where you can import them. You can also close the wizard and import from **Maintenance** as described below.

(reinstall-aaps-import)=
### 7. Importa le tue impostazioni

If the settings file is no longer on your phone, copy it back to the **preferences** folder of your **AAPS** directory.

Apri il menu (☰) > **Manutenzione**, seleziona il chip **Locale** accanto a **Importa impostazioni** e tocca **Importa impostazioni**.

![Manutenzione con Importa impostazioni](../images/ReinstallAaps/reinstall_maintenance_import.png)

The list shows each file with its **AAPS** version and how old it is. Scegli il file che hai esportato al passo 1.

![List of settings files to import](../images/ReinstallAaps/reinstall_import_file_list.png)

You don't need to set a master password in the new **AAPS** first. Type the master password you used for the export in **Decryption password** and tap **Decrypt**. **File was encrypted with a different password** is expected: the new **AAPS** doesn't know your password yet. L'importazione la ripristina insieme alle altre impostazioni.

![Password di decifratura per il file delle impostazioni](../images/ReinstallAaps/reinstall_import_password.png)

Tick **Also replace pump settings**: without it, your pump and its settings are not restored. Omnipod and Medtrum users: only tick it if the file was exported during your current pod or patch (see [Tubeless pumps](#ExportImportSettings-tubeless-pumps)).

![Also replace pump settings ticked](../images/ReinstallAaps/reinstall_import_replace_pump.png)

Tocca **Importa**, poi **OK** per applicare le impostazioni e di nuovo **OK** su **Impostazioni applicate**.

![Conferma dell'applicazione delle impostazioni importate](../images/ReinstallAaps/reinstall_import_apply.png)

(reinstall-aaps-nightscout-after)=
### 8. Get your history back from Nightscout

Apri il menu (☰) > [**Configurazione**](../SettingUpAaps/ChangeAapsConfiguration.md) > **Comunicazione** e tocca **Apri plugin** sotto **NSClientV3**. Check that the status shows **Connected**. If it doesn't, see [Troubleshooting NSClient](TroubleshootingNsClient.md).

![Comunicazione con il pulsante Apri plugin di NSClientV3](../images/ReinstallAaps/reinstall_ns_open_plugin.png)

Tocca il pulsante **Sincronizzazione completa** in fondo alla schermata e **OK**. The database is new, so you can answer the cleanup question either way.

![NSClientV3 screen with the Full synchronization button](../images/ReinstallAaps/reinstall_ns_fullsync_menu_after.png)

**AAPS** carica i tuoi dati da Nightscout. The log shows **Full sync finished** when it is done.

![Log di NSClientV3 con Full sync finished](../images/ReinstallAaps/reinstall_ns_fullsync_finished.png)

(reinstall-aaps-check)=
### 9. Controlla e continua con il loop

Check that your pump is connected and your CGM values arrive, then keep on looping.

(reinstall-aaps-afterwards)=
## Dopo

Always keep using your new keystore from now on, and store it with its password somewhere safe, off your phone. Vedi [Creare i backup](../Maintenance/ExportImportSettings.md).
