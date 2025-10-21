# Creating and restoring back-ups

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

## Creating back-ups

### Keystore file from the computer you used to build the APK
When building your .APK installer file from Android Studio, it uses the **keystore file and password to sign the .APK installer file**. To update your current AAPS installation, it is required to sign the update .APK installer file with the same keystore used for the initial installation. When updating, all settings and the AAPS database will be kept. Note that without this, you are required to first uninstall the current application and then reinstall and reconfigure AAPS.

Maintaining the keystore and associated password will greatly reduce the complexity of updating the APK in the future, especially if you need to build the app from a new computer. See the [Updating AAPS](../Maintenance/UpdateToNewVersion.md) section for details on using the keystore when building a new APK.

**When to back-up:** The keystore should be backed up after you first build the **AAPS** .APK installer file.

**How to back-up:** Locate your keystore path. If you don’t remember it you can find it in Android Studio by selecting **Build > APK > Next**. The path will be listed in “Key store path”. Using your file explorer, navigate to this path and make a copy of your keystore file (ending in file extension `.jks`). Save it to a safe cloud location should your computer become unavailable. Make sure to also record your key store password, key alias and key password.

### Copies of the most recent APK
In case your main **AAPS** phone is lost or damaged, having a copy of the APK available will allow you to quickly resume using **AAPS** with a new phone. Note: you will also need your preferences backed up as noted below.

**When to back-up:** You should maintain a back-up of the most recent APK that you installed on your main **AAPS** phone. You may want to also maintain one earlier version in case you need to roll back to that for any reason.

**How to back-up:** Maintain a copy on the computer used to build the APK with Android Studio. Additionally, it is recommended to use a cloud platform to store a copy of the installer APK. Make sure you know how to locate both backups when needed. Consider setting up dedicated folders to store these backups.

### AAPS settings file (also referred to as 'Preferences')
With a copy of the APK installer file (see above) and your **Settings** file, you can quickly get up and running on an existing or new phone.

The **Settings** file is used t customize the AAPS application to fit your specific setup. They encompass details such as your config builder settings, objective status, third-party communication settings (e.g., Nightscout, Tidepool), automations, and profiles.

Exporting the AAPS settings to file enables you to restore its configuration to a specific point in time. As mentioned, in addition to all configuration settings, the export file also contains the status of your objectives, which you need to restore when **(re)installing** AAPS. Without this you will be required to redo all objectives from start to enable closed loop. Settings files also enable you to restore "last known good" settings for undoing any configuration changes.

**When to back-up AAPS settings:**
* Each time you complete an objective to prevent losing your progress. _Without a copy of your **Settings** you will have to complete all objectives again in the event you need to re-install AAPS or replace your phone._

* Any time you plan to make significant changes to your configuration (change SMB settings, change insulin types, change pump, make changes to automations) you should back up your **Settings** before and after making the changes. This way you have your most recent settings as well as a copy of what they were before the changes in case you need to revert back to them.

* Tubeless pumps (Such as Omnipod and Medtrum) users only : the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. If you do not have a copy of your preferences exported after you started your current pod you will need to start a new pod in the event you need to replace your current phone.

**How to back-up manually:**

1. If this your first time importing or exporting **Settings** you will need to set a master password in [Preferences > General > Protection](#Preferences-master-password). Set a password and record this in a safe place. _You will be unable to access your **Settings** back-ups without this password._

2. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Export settings > type in Master password set above > Ok

![AAPS export settings 1](../images/Maintenance/AAPS_ExportSettings1.png) ![AAPS export settings 2](../images/Maintenance/AAPS_ExportSettings2.png)

3. Using the file explorer on your phone (commonly called “Files” or “My Files”) navigate to Internal Storage > AAPS > preferences. Here you will see a copy of all exported preferences files. The file name should be `YYYY-MM-DD_Time_appname.json`. Upload this file to the cloud platform of your choice. Then from the cloud platform, also download a copy to your local computer.

(ExportImportSettings-Settings-Export)=

## Settings Export

It is recommended to do regular settings exports, especially before and after making configuration changes. You can choose to do exports **manually or (preferred) through automation**. Make sure to take a note of your AAPS master password and to backup your settings files by copying them off your phone to for instance a cloud storage location.

**Note**: _The exported settings will be encrypted with your AAPS master password: without the master password used for exporting you will be unable to import the settings file!_

### Exporting or Importing Settings
To export or import settings, use the **import or export buttons** in the AAPS **maintenance menu**

![Maintenance menu export/import buttons](../images/Maintenance/maintenance_menu_import_export_400px.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automating Settings Export

For doing automating settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) enable the option "**Unattended Settings Exports**" in [Preferences > Maintenance](#preferences-maintenance-settings).

You can now configure [Automation](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) to export settings, either on a regular basis (_i.e._ each week), or after a pod change.

_**Note:** On importing settings to user always needs to enter the AAPS password!_

![Maintenance menu unattended Settings Export](../images/Maintenance/maintenance_menu_preferences_400px.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Restoring from your backups on a new phone or fresh installation of AAPS
Use these instructions if you have a back-up of your APK and **Preferences** that you want to load on to a new phone or if you needed to delete and reinstall the APK on your existing phone for any reason.

_If you are updating **AAPS** using an APK built with the same keystore you should not need to follow this process. However, it is still advised to create a back-up before you apply the update._

If you are updating **AAPS** after you lost or replaced your original keystore (i.e. using a new build computer without transferring the keystore), ensure that you back up all settings per the above and then uninstall the existing version of **AAPS** on your phone.

If needed, [set up your CGM/BG source receiver](../Getting-Started/CompatiblesCgms.md) prior to the steps listed below

```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Importing a **Preferences** file will deactivate your current pod if those **Preferences** were exported during a different active pod session. 
```

1. Using the back-up copy of your APK from above, follow the instructions for a [new installation](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Launch **AAPS** and allow any requested permissions

3. Exit the Setup Wizard. We will be importing all the necessary settings from the back-up copy of **Preferences**

4. From the **AAPS** home screen select Request and allow on all permissions listed in red on the top

5. From the **AAPS** home screen, set the master password in [Preferences > General > Protection](#Preferences-master-password) to the same password as you used with your back-ups.

6. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Export settings > type in Master password set above > Ok. This will create the preferences folder if it does not already exist on your phone.

7. Download the back-up of your **Preferences** file from your cloud platform.

8. Use your file explorer (commonly called “Files” or “My Files”) to move the file from your downloads to `/internal storage/AAPS/preferences`

9. From the **AAPS** home screen, select the three line (hamburger) menu in the top left > Maintenance > Import settings > select the preferences file you want to back-up from > Ok > type in Master password set above > Ok. Make sure you select the correct preferences file, all .json files from the preferences folder will be shown.

![AAPS import settings 1](../images/Maintenance/AAPS_ImportSettings1.png) ![AAPS import settings 2](../images/Maintenance/AAPS_ImportSettings2.png)

10. **AAPS** will automatically restart and should then have all of your preferences imported.

11. Tubeless pumps (Omnipod and Medtrum) users only - if your **Preferences** were not backed up from the same pod you are currently using, you will need to start a new pod to begin insulin delivery.

**Troubleshooting:** if you are unable to get an active profile set from the **AAPS** home screen, select the three line (hamburger) menu in the top left > config builder > Pump > switch to Virtual Pump > then switch back to your pump type

### הערה למשתמשי Dana RS

- As pump connection settings are also imported **AAPS** on your new phone will already "know" the pump and therefore not start a bluetooth scan.
- יש לצמד טלפון חדש עם המשאבה באופן ידני.