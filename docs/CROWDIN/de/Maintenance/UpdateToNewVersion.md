# Update auf eine neue Version oder einen Branch

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Wichtige Hinweise

* Aktualisiere so bald wie möglich auf die neueste **AAPS**-Version, nachdem sie verfügbar ist.
* Sobald eine neue Version verfügbar ist, wird Dir in der **AAPS**-App ein Hinweis darüber angezeigt.
* Wenn eine neue Version verfügbar ist, wird darüber auch auf Facebook informiert.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.

## Übersicht zum Aktualisieren auf eine neue AAPS Version

```{contents} Steps for updating to a new version of AAPS :depth: 1 :local: true

    <br />In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).
    
    ### Export your settings
    
    Export your settings from the existing **AAPS** version on your phone. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.
    
    See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.
    
    ### Check your Android Studio version
    
    The minimal version required is described in the [Building Instructions](#Building-APK-recommended-specification-of-computer-for-building-apk-file). If your version is older, please [update Android Studio first](#Building-APK-install-android-studio)!
    
    (Update-to-new-version-update-your-local-copy)=
    ### Update your local copy
    
    ```{admonition} WARNING
    :class: warning
    If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!
    

* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. Eine Erfolgsmeldung wird angezeigt, so bald erfolgreich heruntergeladen wurde.
    
    ```{note}
    The files that were updated may vary! This is not an indication
    ```
    
    ![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. Warte, bis es fertig ist.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

### Build the Signed APK

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](#Building-APK-generate-signed-apk).

(Update-to-new-version-transfer-and-install)=

### Transfer and install the apk

You need to transfer the apk to your phone so you can install it.

```{note}
If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. Um die APK zu installieren, folge den Anweisungen während des Updatevorgangs.
In allen anderen Fällen (z.B. wenn ein neuer 'key store' für das Signieren der APK genutzt wurde), muss die alte App gelöscht werden, bevor die neue Version installiert werden kann. **Make sure to export your settings!**
```

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

(Update-to-new-version-check-aaps-version-on-phone)=

### AAPS-Version auf dem Smartphone überprüfen

Nachdem Du die neue APK-Datei installiert hast, kannst Du auf dem Smartphone die Version prüfen. Gehe dazu oben rechts auf die drei Punkte und wähle dann "Über". Du solltest die aktuelle Version angezeigt bekommen.

![Installierte AAPS Version](../images/Update_VersionCheck320.png)

Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

## Troubleshooting

Keine Panik, wenn irgendetwas schiefläuft.

Tief durchatmen!

Then see the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) if your problem is already documented!

Wenn Du weitere Hilfe brauchst, kontaktiere bitte andere **AAPS**-Nutzende auf [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) oder [Discord](https://discord.gg/4fQUWHZ4Mw).