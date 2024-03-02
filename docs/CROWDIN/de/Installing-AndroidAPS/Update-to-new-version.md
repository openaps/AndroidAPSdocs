# Update auf eine neue Version oder branch

## Kein Download möglich - APK muss selbst erstellt werden

**AAPS** is not available to download, due to regulations concerning medical devices. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Weitere Informationen findest Du auf der [FAQ Seite](../Getting-Started/FAQ.md).

## Wichtige Hinweise

* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](../Installing-AndroidAPS/Releasenotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* You need to use version **[Hedgehog (2023.1.1) or Iguana (2023.2.1)](https://developer.android.com/studio/)** of Android Studio. If your version is older, please update first Android Studio first! 

## Overview for updating to a new version of AAPS

1. [Export your settings](../Usage/ExportImportSettings-export-settings) from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Erstelle signierte APK](Update-to-new-version-build-the-signed-apk)
4. [Übertrage die erstellte APK-Datei](Building-APK-transfer-apk-to-smartphone) auf Dein Smartphone und installiere sie.
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. Stelle abhängig von Deiner [BZ-Quelle](../Configuration/BG-Source.md) sicher, dass Du ['identify receiver'](xdrip-identify-receiver) in xDrip+ gesetzt hast oder verwende die ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Für den Fall, dass Probleme auftreten, findest Du Lösungsansätze auf der separaten Seite für [Fehlerbehebung von Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Exportiere Deine Einstellungen

Falls Du Dir nicht mehr sicher bist, wie dies genau funktioniert, findest Du die Anleitung auf der Seite [Einstellungen exportieren & importieren](ExportImportSettings-export-settings).

(Update-to-new-version-update-your-local-copy)=

## 2. Führe ein Update deiner lokalen Version durch

:::{admonition} WARNING :class: warning If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you! :::

* Open your existing AAPS project with Android Studio. Möglicherweise musst Du Dein Projekt wählen. (Double) click on the AAPS project.
    
    ![Android Studio - Projekt auswählen](../images/update/01_ProjectSelection.png)

* Wähle in der Menüleiste von Android Studio Git -> Fetch.
    
    ![Android Studio Menü - Git - Fetch](../images/update/02_GitFetch.png)

* Unten rechts wird Dir eine Meldung angezeigt, sobald der Fetch erfolgreich durchgeführt wurde.
    
    ![Android Studio Menü - Git - Fetch erfolgreich](../images/update/03_GitFetchSuccessful.png)

* Wähle nun in der Menüleiste Git -> Pull.
    
    ![Android Studio Menü - Git - Pull](../images/update/04_GitPull.png)

* Lasse alle Optionen wie sie sind (Original/Master) und wähle Pull.
    
    ![Android Studio - Git - Pull-Dialog](../images/update/05_GitPullOptions.png)

* Warte ab, während der Download läuft. Du siehst dazu einen Hinweis in der Fußzeile. Eine Erfolgsmeldung wird angezeigt, so bald erfolgreich heruntergeladen wurde. Hinweis: Die Zahl der Dateien, die aktualisiert wurden, kann variieren! Dies ist kein Hinweis auf einen Download-Fehler.
    
    ![Android Studio - Pull erfolgreich](../images/update/06_GitPullSuccess.png)

* Gradle Sync wird ein paar Sekunden benötigen, um einige Abhängigkeiten herunterzuladen. Warte, bis es fertig ist.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. Erstelle die signierte APK

Dein Sourcecode ist jetzt die aktuelle veröffentlichte Version. Es ist an der Zeit, die signierte apk wie im [Build signed apk Abschnitt](Building-APK-generate-signed-apk) beschrieben.

## 4. Übertrage die APK-Datei

Du musst die APK-Datei auf Dein Smartphone übertragen, um sie dort installieren zu können.

Siehe die Anleitung für [APK auf Smartphone übertragen](Building-APK-transfer-apk-to-smartphone)

## 5. APK installieren

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). Hinweis: Wenn Du beim Erstellen Deinen bestehenden 'key store' im Android Studio verwendest hast, muss die alte AAPS nicht vom Smartphone deinstalliert werden. Um die APK zu installieren, folge den Anweisungen während des Updatevorgangs. In allen anderen Fällen (z.B. wenn ein neuer 'key store' für das Signieren der APK genutzt wurde), muss die alte App gelöscht werden, bevor die neue Version installiert werden kann.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. AAPS-Version auf dem Smartphone überprüfen

Nachdem Du die neue APK-Datei installiert hast, kannst Du auf dem Smartphone die Version prüfen. Gehe dazu oben rechts auf die drei Punkte und wähle dann "Über". Du solltest die aktuelle Version angezeigt bekommen.

![Installierte AAPS Version](../images/Update_VersionCheck282.png)

# Problembehandlung

Keine Panik, wenn irgendetwas schiefläuft.

Tief durchatmen!

Wirf dann einen Blick auf die Lösungsansätze der separaten Seite zur [Fehlerbehebung für Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio). In den meisten Fällen dürfte Dein Problem und eine Lösung dort zu finden sein.

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).