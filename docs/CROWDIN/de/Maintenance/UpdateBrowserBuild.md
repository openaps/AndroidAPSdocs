# Update with a browser

## Kein Download möglich - APK muss selbst erstellt werden

**AAPS** is not available to download, due to regulations concerning medical devices. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

```{note}
In case you want to upgrade **AAPS** with a browser for the first time : copy your back-up keystore file to your Google Drive. Then follow the [Browser Build **AAPS** procedure](../SettingUpAaps/BrowserBuild.md) instead of this guide. Instead of creating a new keystore, you must select the one you have copied from your computer.
This operation will be mandatory only the first time, then for successive upgrades you will be able to follow this guide.
```

## Overview for updating to a new version of AAPS with a browser

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

### Export your settings

Exportiere die Einstellungen Deiner aktuellen **AAPS**-Version Deines Smartphones. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.

Wenn Du nicht mehr genau weißt, wie man das macht, schaue auf der Seite [Export & Import der Einstellungen](ExportImportSettings.md) nach.

(Update-to-new-version-update-your-repo)=
### Update your GitHub repository

```{admonition} WARNING
:class: warning
Browser Build is available from AAPS version 3.3.2.1.
```

[Log into GitHub](https://github.com/login).

1. Select Repositories.
2. Scroll down and select your own AndroidAPS repository.

![Select AndroidAPS repo](../images/update/CI/GitHubUpdate1.png)

3. Verify you are using your own copy of AndroidAPS (Forked from nightscout/AndroidAPS)
4. Tap Sync Fork to update it (the number of commits behind might differ from the picture)



![Sync AndroidAPS repo](../images/update/CI/GitHubUpdate2.png)

5. Tap Update Branch

![Update AndroidAPS repo](../images/update/CI/GitHubUpdate3.png)

Note: if you have modified your copy of AndroidAPS by mistake, you will see this screen. Discard all changes (commits) to return to the released version.

![Discard rogue modifications](../images/update/CI/GitHubUpdate4.png)

You have now synchronized (updated) your own copy with the latest release of Android APS. Good job.

![Repo sync'ed](../images/update/CI/GitHubUpdate5.png)

### Run the Workflow to Build the Signed APK

1. In your GitHub copy of AndroidAPS, select Actions.
2. Expand All Workflows.
3. Select AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll down and tap Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Select the branch you want to deploy (master), the [variant](variant) (fullRelease) and tap Run Workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. You will see the message Workflow run was successfully requested. Refresh your browser page and you will be able to monitor the build progress. When the action completes, the AAPS CI action will show a green tick mark. You have successfully built the updated version of Android APS. This means that the Master and Wear apk is now directly saved into your Google Drive (as per below). AAPSClient apk can be downloaded from Github > nightscout > AndroidAPS [here](https://github.com/nightscout/AndroidAPS/releases)


![Monitor Workflow](../images/update/CI/GitHubActions4.png)


### Install the AAPS APK

1. Open your Google Drive
2. Browse into AAPS, select the new version folder and you will find both the phone and Android Wear versions.

![Google Drive Location](../images/update/CI/GitHubActions5.png)


Continue [here](#Update-to-new-version-check-aaps-version-on-phone)

## Problembehandlung

Keine Panik, wenn irgendetwas schiefläuft.

Tief durchatmen!

Then see the [troubleshooting tips](#aaps-ci-preparation) if your problem is already documented!

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).
