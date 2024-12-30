# Update auf eine neue Version oder einen Branch

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

## Wichtige Hinweise

* Aktualisiere so bald wie möglich auf die neueste **AAPS**-Version, nachdem sie verfügbar ist.
* Sobald eine neue Version verfügbar ist, wird Dir in der **AAPS**-App ein Hinweis darüber angezeigt.
* Wenn eine neue Version verfügbar ist, wird darüber auch auf Facebook informiert.
* Nach der Veröffentlichung lies bitte die [Versionshinweise](ReleaseNotes.md) (Release Notes) genau durch, und kläre mögliche Fragen in der Community auf Facebook oder Discord, bevor Du mit dem Update weiter machst.

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
    

* Öffne Dein bestehendes AAPS-Projekt mit Android Studio. Möglicherweise musst Du Dein Projekt wählen. Klicke (doppelt) auf das AAPS-Projekt.
    
    ![Android Studio - Projekt auswählen](../images/update/01_ProjectSelection.png)

* Wähle in der Menüleiste von Android Studio Git -> Fetch.
    
    ![Android Studio Menü - Git - Fetch](../images/update/02_GitFetch.png)

* Unten rechts wird Dir eine Meldung angezeigt, sobald der Fetch erfolgreich durchgeführt wurde.
    
    ![Android Studio Menü - Git - Fetch erfolgreich](../images/update/03_GitFetchSuccessful.png)

* Wähle nun in der Menüleiste Git -> Pull.
    
    ![Android Studio Menü - Git - Pull](../images/update/04_GitPull.png)

* Lasse alle Optionen wie sie sind (Original/Master) und wähle Pull.
    
    ![Android Studio - Git - Pull-Dialog](../images/update/05_GitPullOptions.png)

* Warte ab, während der Download läuft. Du siehst dazu einen Hinweis in der Fußzeile. Eine Erfolgsmeldung wird angezeigt, so bald erfolgreich heruntergeladen wurde.
    
    ```{note}
    The files that were updated may vary! Dies ist kein Hinweis auf einen Download-Fehler.
    ```
    
    ![Android Studio - Pull erfolgreich](../images/update/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. Warte, bis es fertig ist.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

### Erstelle die signierte APK

Dein Quellcode entspricht jetzt der neuesten freigegebenen Version. Es ist an der Zeit, die signierte APK wie im Abschnitt[Signierte AAPS APK erstellen](#Building-APK-generate-signed-apk) beschrieben zu erstellen (bauen).

(Update-to-new-version-transfer-and-install)=

### Transfer and install the apk

Du musst die APK-Datei auf Dein Smartphone übertragen, um sie dort installieren zu können.

```{note}
Wenn Du beim Erstellen Deinen bestehenden „Keystore“ im Android Studio genutzt hast, musst Du die bestehende App nicht deinstallieren. Um die APK zu installieren, folge den Anweisungen während des Updatevorgangs.
In allen anderen Fällen (z.B. wenn ein neuer 'key store' für das Signieren der APK genutzt wurde), muss die alte App gelöscht werden, bevor die neue Version installiert werden kann. **Achte darauf, Deine Einstellungen zu exportieren!**
```

Nutze die Anleitung [AAPS auf Dein Smartphone übertragen und installieren](../SettingUpAaps/TransferringAndInstallingAaps.md)

(Update-to-new-version-check-aaps-version-on-phone)=

### AAPS-Version auf dem Smartphone überprüfen

Nachdem Du die neue APK-Datei installiert hast, kannst Du auf dem Smartphone die Version prüfen. Gehe dazu oben rechts auf die drei Punkte und wähle dann "Über". Du solltest die aktuelle Version angezeigt bekommen.

![Installierte AAPS Version](../images/Update_VersionCheck320.png)

Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

## Problembehandlung

Keine Panik, wenn irgendetwas schiefläuft.

Tief durchatmen!

Danach schaue auf der Seite [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio) nach einer Lösung, sofern Dein Problem bereits bekannt sein sollte!

Wenn Du weitere Hilfe brauchst, kontaktiere bitte andere **AAPS**-Nutzende auf [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) oder [Discord](https://discord.gg/4fQUWHZ4Mw).