(reinstall-aaps)=
# Reinstalling AAPS with a new keystore

Every **AAPS** apk is signed with a **keystore**. An update only installs over your current **AAPS** if it is signed with the **same keystore**: all your settings and data are then kept. That's why it is recommended to store the keystore and its password in a safe place.

If you try to install an apk signed with a different keystore than before, you will get an error message explaining that the installation failed!

(reinstall-aaps-when)=
## When do you need to reinstall?

You need to uninstall and reinstall **AAPS** when your new apk is signed with a different keystore, for example:

- You cannot find your old keystore or its password.
- You created a new keystore, for example with [Option 1 of the browser build](../SettingUpAaps/BrowserBuildKeystore.md) or **Create a new key** in [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md).
- You build on a new computer and did not copy your keystore to it.

If you still have your keystore, you don't need this page: reuse it and [update **AAPS**](../Maintenance/UpdateToNewVersion.md) in place.

(reinstall-aaps-before)=
## Before you start

- Uninstalling **AAPS** deletes all its settings, your [objectives](../SettingUpAaps/CompletingTheObjectives.md) and the current pump connection. You get them back by importing your **settings file**, so make sure you have a recent one.
- The settings file does not contain your treatment and glucose history. If you upload to [Nightscout](../SettingUpAaps/SettingUpTheReportingServer.md), you can load it back after the reinstall (step 8).
- You need your [**master password**](#Preferences-master-password): the settings file is encrypted with it.
- **Omnipod and Medtrum users:** read [Tubeless pumps](#ExportImportSettings-tubeless-pumps) first. Your settings file must have been exported during the pod or patch you are wearing now.
- If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) before you start.

(reinstall-aaps-steps)=
## Steps

The pictures show a move from **AAPS** 3.4 (steps 1 to 3) to **AAPS** 4 (steps 6 to 8). Other versions look slightly different.

(reinstall-aaps-export)=
### 1. Export your settings

Export your settings with the **AAPS** currently installed on your phone. See [Settings Export](#ExportImportSettings-Settings-Export) for details.

In **AAPS** 3.4: open **Maintenance** and tap **Export options**. Under **User Settings**, tick **Local Storage** and tap **OK**.

*Note: you can also use [Cloud Storage](#preferences-maintenance-cloud) to have a safety backup copy: that's a good idea, but keep Local Storage for recovering settings quickly.*

![Export options with User Settings set to Local Storage](../images/ReinstallAaps/reinstall_export_options_local.png)

The button now reads **Export settings (local)**. Tap it.

![Maintenance with the Export settings (local) button](../images/ReinstallAaps/reinstall_export_settings_local.png)

**AAPS** shows the name of the file it will create. Tap **OK**, type your master password and tap **OK**.

![Export settings confirmation with the file name](../images/ReinstallAaps/reinstall_export_confirm.png)

In **AAPS** 4: open **Maintenance**, select the **Local** chip next to **Export settings** and tap **Export settings**.

(reinstall-aaps-copy)=
### 2. Copy the settings file off your phone

The file is in the **preferences** folder of your [**AAPS** directory](#SetupWizard-StoragePermission), named like `2026-10-13_222735_full.json`. Copy or upload it to an external location (i.e. your computer, cloud storage service...). The file normally stays on your phone after the uninstall, but keep a copy elsewhere in case.

(reinstall-aaps-nightscout-before)=
### 3. Synchronize with Nightscout

This step is not mandatory but recommended if you use [DynISF](#Open-APS-features-DynamicISF): it will allow you to resume directly with the current settings instead of waiting 5 days to build necessary data for the plugin. NSClient V3 needs to be [enabled and configured](../SettingUpAaps/SettingUpTheReportingServer.md).

Make sure Nightscout has all your data before you uninstall.

Open **NSClient**, tap the **Full synchronization** button at the bottom of the screen, then **OK**.

![NSClient screen with the Full synchronization button](../images/ReinstallAaps/reinstall_ns_fullsync_menu_before.png)

*Note: the time necessary depends on your Nightscout hosting service.*

![Full synchronization confirmation](../images/ReinstallAaps/reinstall_ns_fullsync_confirm.png)

**AAPS** then offers to clean up its database. **OK** removes data older than 3 months from the phone, which makes the synchronization much faster. **Cancel** synchronizes without cleaning up. The phone database is deleted when you uninstall anyway, so both are fine.

![Database cleanup question](../images/ReinstallAaps/reinstall_ns_fullsync_cleanup.png)

Leave **AAPS** running until the synchronization is finished.

(reinstall-aaps-build)=
### 4. Build the new apk

[Build](../SettingUpAaps/BuildingAaps.md) a new signed apk with your new keystore and transfer it to your phone.

(reinstall-aaps-uninstall)=
### 5. Uninstall AAPS

In your phone's **Settings** > **Apps** > **AAPS**, tap **Uninstall** and confirm with **OK**.

![App info of AAPS with the Uninstall button](../images/ReinstallAaps/reinstall_uninstall_appinfo.png)

(reinstall-aaps-install)=
### 6. Install and start the new AAPS

[Install](../SettingUpAaps/TransferringAndInstallingAaps.md) the new apk and start **AAPS**. The [setup wizard](../SettingUpAaps/SetupWizard.md) asks for the permissions **AAPS** needs: tap **Grant** for each of them. This also turns [battery optimization](#setup-wizard-bluetooth-battery-optimisation) off again.

![Permissions Required list of the setup wizard](../images/ReinstallAaps/reinstall_permissions.png)

For **AAPS Directory**, select the same **AAPS** folder as before (the one with the **preferences** folder in it), tap **Use this folder** and **Allow**.

![Selecting the existing AAPS folder](../images/ReinstallAaps/reinstall_aaps_directory.png)

When **AAPS** finds your exported settings, the setup wizard shows a [Stored settings found](#setup-wizard-import-settings) screen where you can import them. You can also close the wizard and import from **Maintenance** as described below.

(reinstall-aaps-import)=
### 7. Import your settings

If the settings file is no longer on your phone, copy it back to the **preferences** folder of your **AAPS** directory.

Open the menu (☰) > **Maintenance**, select the **Local** chip next to **Import settings** and tap **Import settings**.

![Maintenance with Import settings](../images/ReinstallAaps/reinstall_maintenance_import.png)

The list shows each file with its **AAPS** version and how old it is. Choose the file you exported in step 1.

![List of settings files to import](../images/ReinstallAaps/reinstall_import_file_list.png)

You don't need to set a master password in the new **AAPS** first. Type the master password you used for the export in **Decryption password** and tap **Decrypt**. **File was encrypted with a different password** is expected: the new **AAPS** doesn't know your password yet. The import restores it with your other settings.

![Decryption password for the settings file](../images/ReinstallAaps/reinstall_import_password.png)

Tick **Also replace pump settings**: without it, your pump and its settings are not restored. Omnipod and Medtrum users: only tick it if the file was exported during your current pod or patch (see [Tubeless pumps](#ExportImportSettings-tubeless-pumps)).

![Also replace pump settings ticked](../images/ReinstallAaps/reinstall_import_replace_pump.png)

Tap **Import**, then **OK** to apply the settings and **OK** again on **Settings applied**.

![Apply imported settings confirmation](../images/ReinstallAaps/reinstall_import_apply.png)

(reinstall-aaps-nightscout-after)=
### 8. Get your history back from Nightscout

Open the menu (☰) > [**Configuration**](../SettingUpAaps/ChangeAapsConfiguration.md) > **Communication** and tap **Open plugin** under **NSClientV3**. Check that the status shows **Connected**. If it doesn't, see [Troubleshooting NSClient](TroubleshootingNsClient.md).

![Communication with the NSClientV3 Open plugin button](../images/ReinstallAaps/reinstall_ns_open_plugin.png)

Tap the **Full synchronization** button at the bottom of the screen and **OK**. The database is new, so you can answer the cleanup question either way.

![NSClientV3 screen with the Full synchronization button](../images/ReinstallAaps/reinstall_ns_fullsync_menu_after.png)

**AAPS** loads your data from Nightscout. The log shows **Full sync finished** when it is done.

![NSClientV3 log with Full sync finished](../images/ReinstallAaps/reinstall_ns_fullsync_finished.png)

(reinstall-aaps-check)=
### 9. Check and keep looping

Check that your pump is connected and your CGM values arrive, then keep on looping.

(reinstall-aaps-afterwards)=
## Afterwards

Always keep using your new keystore from now on, and store it with its password somewhere safe, off your phone. See [Creating back-ups](../Maintenance/ExportImportSettings.md).
