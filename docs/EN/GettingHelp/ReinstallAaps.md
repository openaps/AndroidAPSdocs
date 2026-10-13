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

- Uninstalling **AAPS** deletes all its settings, your objectives and the current pump connection. You get them back by importing your **settings file**, so make sure you have a recent one.
- The settings file does not contain your treatment and glucose history. If you upload to Nightscout, your past data is still available there.
- **Omnipod and Medtrum users:** read [Tubeless pumps](#ExportImportSettings-tubeless-pumps) first. Your settings file must have been exported during the pod or patch you are wearing now.
- If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) before you start.

(reinstall-aaps-steps)=
## Steps

1. [Export settings](#ExportImportSettings-Automating-Settings-Export) on your phone.
2. Copy or upload the settings file from your phone to an external location (i.e. your computer, cloud storage service...).
3. [Build](../SettingUpAaps/BuildingAaps.md) a new signed apk with your new keystore and transfer it to your phone.
4. Uninstall previous **AAPS** version on your phone.
5. Install new **AAPS** version on your phone.
6. [Import settings](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps) to restore your objectives and configuration.

   If you can't find these on your phone, copy them from the external storage to your phone.

7. Check your battery optimization options and disable them again.
8. Keep on looping.

(reinstall-aaps-afterwards)=
## Afterwards

Always keep using your new keystore from now on, and store it with its password somewhere safe, off your phone. See [Creating back-ups](../Maintenance/ExportImportSettings.md).
