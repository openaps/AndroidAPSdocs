(browser-build)=

# Im Browser erstellen (Browser Build)

AAPS mit GitHub-Aktionen erstellen.

**Ab AAPS-Version 3.3.2.1. möglich.**

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Computer- und Software-Anforderungen für die AAPS-Erstellung

Wir empfehlen die Verwendung eines Android-Geräts. Du kannst allerdings auch einen Computer oder ein iOS-Gerät nutzen.

Du wirst in Deinem Browser mehrere Tabs verwenden und dabei zwischen diesen Tabs hin und her wechseln. Beispiel Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

Zusätzlich benötigst Du ein Google-Konto, damit die App in Deinem Google-Drive gespeichert werden kann.

```{note}
Dieses Wiki geht davon aus, dass Du alle Operationen mit Deinem Smartphone und dem Chrome-Browser durchführst.  
Du wirst zwischen den Tabs springen: Starte mit geschlossenen Tabs. Das verhindert, dass Du Dich beim Umschalten von einem zum anderen „vertust“.
```

(github-fork)=

## 1. AAPS personal fork

Du musst Deinen persönlichen Android Java Key und Dein Google Drive-Informationen geheim in GitHub speichern (später im Prozess erklären wir, wie das geht).

Da das im öffentlichen AAPS-Repository nicht möglich ist, musst Du Deine persönliche Kopie des Quellcodes erstellen (sog. „Fork“).

### GitHub-Konto

Wenn Du noch kein GitHub-Konto hast, musst Du zuerst ein [GitHub-Konto erstellen](https://github.com/signup).  
Du kannst Dich mit einer eMail-Adresse oder mit Google registrieren. Durchlaufe den Registrierungs- und Verifikationsprozess.

Hast Du bereits ein Konto, [logge Dich in GitHub ein](https://github.com/login).

### Fork AndroidAPS (neuen AAPS-Entwicklungsast bilden)

Öffne das offizielle AndroidAPS-Repository hinter [diesem Link](https://github.com/nightscout/AndroidAPS).

Tippe auf das Fork-Symbol. Das erstellt in Deinem eigenen Konto eine Kopie.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Scrolle auf dem nächsten Bildschirm nach unten und tippe auf **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Notiz: Du kannst die Option „Copy the main branch only“ **deaktivieren**, wenn Du eine Entwicklerversion oder Anpassungen erstellen möchtest.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Forking a repository allows you to freely experiment with changes without affecting the original project. You cannot fork and you see this?</br></br>
**`Create a new fork`**</br>
`A fork is a copy of a repository. View existing forks.`</br>
*`Required fields are marked with an asterisk (*).`*</br>
**`No available destinations to fork this repository.`**</br></br>
Dies bedeutet, dass Du bereits einen existierenden Fork von AndroidAPS hast.</br>
Stelle Sie sicher, dass der Fork aktuell ist und mache mit den Vorbereitungsschritten weiter.
```

```{warning}
**Lösche niemals Deinen Fork, ohne ein Backup Deiner „Secrets“ (Passwörter) gemacht zu haben!**
```

GitHub zeigt jetzt Deine persönliche Kopie von AndroidAPS an. Lasse diesen Tab des Web-Browsers geöffnet.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

(aaps-ci-preparation)=

## 2. Vorbereitende Schritte

- Solltest Du die Erstellung auf einem Android-Gerät durchführen, installiere den [File Manager Plus](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager) aus dem Google Play Store.

```{admonition} File Manager Plus
:class: dropdown

:::{include} BrowserBuildFileManagerPlus.md
```

- Lade die Vorbereitungsdatei von [aaps-ci-preparation.html](https://github.com/nightscout/aaps-ci-preparation/releases/download/release-v1.1.2/aaps-ci-preparation.html) herunter

````{admonition} Note
:class: note

1. Solltest Du diese Seite aus einer App heraus aufgerufen haben (über einen Webview), kann es sein, dass die HTML-Datei nicht heruntergeladen wird. Please copy the URL and open it in your browser instead:
```text
https://github.com/nightscout/aaps-ci-preparation/releases/download/release-v1.1.2/aaps-ci-preparation.html
```
Or visit the latest release page:
```text
https://github.com/nightscout/aaps-ci-preparation/releases/latest
```

2.Backup copy hosted on this site:

 - If the external link is also unavailable, you can use this backup file to download.
<!--crowdin:disable-->

```{eval-rst}
.. raw:: html

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../_static/CI/aaps-ci-preparation.html" download>  aaps-ci-preparation.html</a>
```
<!--crowdin:enable-->
````
AndroidAPS build requires private keys, that are stored in a Java KeyStore (JKS): -
- Solltest Du AAPS das allererste Mal erstellen (oder Du kein Android Studio JKS haben), nutze den in [AAPS-CI Option 1 – JKS erzeugen](aaps-ci-option1) beschriebenen Weg, um das Setup abzuschließen.
</br>

```{warning}
Wenn Du AAPS mit der **Option 1** baust, kannst Du Deine bestehenden AAPS-Version nicht aktualisieren.
Du musst:
1. [Einstellungen auf Deinem Smartphone exportieren](#ExportImportSettings-Automating-Settings-Export).
2. Kopiere die Datei mit den Einstellungen von Deinem Smartphone auf ein externes Gerät (d. h. Deinen Computer, externe Festplatte) oder lade sie in Deinen Cloudspeicher hoch.
3. Erstelle, so wie es in der Anleitung zu Option 1 beschrieben ist, eine neue Version der signierten APK und transferiere diese auf Dein Smartphone.
4. Deinstallieren die Vorgängerversion von AAPS auf Deinem Smartphone.
5. Installiere die neue AAPS-Version auf Deinem Smartphone.
6. [Einstellungen importieren](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps), um Deine Ziele (Objectives) und Einstellungen wiederherzustellen.
7. Stelle die Daten aus Nightscout wieder her.
```

- Falls Du Deinen eigenen JKS, den Du bei einem früheren AAPS-Build mit einem in Android Studio genutzt hast, nutzen möchtest und Du das Passwort und den Alias (key0) kennst, wähle bitte [AAPS-CI Option 2 – Hochladen eines vorhandenen JKS](aaps-ci-option2).

</br>

Sobald die AAPS-App erstellt wurde, wird sie in Deinem Google Cloud-Laufwerk gespeichert.

(aaps-ci-option2)=
### AAPS-CI Option 1 – JKS erzeugen
 - Diese Option ist für Nutzende ohne JKS, oder die das Passwort oder den Alias vergessen haben.
- Unten sind einige Beispiele von verschiedenen Plattformen verlinkt.
- Wähle in der Liste unten die Plattform aus, die Du nutzt. Du kannst zwischen Android (bevorzugte Wahl), iOS oder PC/Computer wählen.

```{tab-set}

:::{tab-item} Android
(aaps-ci-option1-android)=
:::{include} BrowserBuildO1A.md
:::  

:::{tab-item} iOS
(aaps-ci-ios-ipad)=
:::{include} BrowserBuildO1I.md
:::  

:::{tab-item} Computer
(aaps-ci-option1-computer)=
:::{include} BrowserBuildO1C.md
:::  

```

Überspringe den nächsten Abschnitt und fahre [hier](#aaps-ci-google-drive-auth) fort.

---

(aaps-ci-option2)=

### AAPS-CI Option 2 – Hochladen eines bestehenden JKS
 - Diese Option ist für Nutzende, die bereits einen JKS haben und dass zugehörige Passwort und den Alias kennen. Als `KEYSTORE_PASSWORD`, `KEY_ALIAS`, und `KEY_PASSWORD`, gib Dein aktuelles Password und Alias aus GitHub ein. Diejenigenen, die Android Studio nutzen, schauen unten nach, wo diese genutzt wurden.

```{admonition} KEY + PASSWORDS
:class: dropdown

![Passwort vergessen](../images/Building-the-App/044_RememberPwd.png)
```

 - Unten sind einige Beispiele von verschiedenen Plattformen verlinkt.
 - Wähle in der Liste unten die Plattform aus, die Du nutzt. Du kannst zwischen Android (bevorzugte Wahl) oder PC/Computer wählen.


```{tab-set}

:::{tab-item} Android
(aaps-ci-option2-android)=
:::{include} BrowserBuildO2A.md
:::  

:::{tab-item} Computer
(aaps-ci-option2-computer)=
:::{include} BrowserBuildO2C.md
:::  

```

(aaps-ci-google-drive-auth)=

### AAPS-CI Google Drive Auth

Hinweis: Solltest Du die Schritte aus dem Video bereits durchgeführt haben, kannst Du direkt [hierhin](#github-build-apk) springen.

Gehe zurück zum „File Explorer Plus“-Tab.

Scrolle bis zum „Google Drive Auth“-Abschnitt herunter und tippe auf "Start Auth".

![](../images/Building-the-App/CI/BrowserBuildStep44.png)

Wähle Dein Google-Konto aus.

![](../images/Building-the-App/CI/BrowserBuildGAUTH1.png)

Scrolle herunter und erlaube den Zugriff. Die Webseite benötigt ihn, um den Google Drive Authentifizierungsschlüssel zu bekommen.

Tippe auf „Continue“.

![](../images/Building-the-App/CI/BrowserBuildGAUTH2.png)

Das Feld `GDRIVE_OAUTH2` wird ausgefüllt. Tippe auf die oberste „Copy“-Schaltfläche.

![](../images/Building-the-App/CI/BrowserBuildGAUTH3.png)

Switch back to the GitHub tab.

Scrolle zu den „Repository Secrets“ herunter und tippe auf „New Repository Secret“.

Nutzt Du die Option 1, solltest Du Folgendes sehen:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4.png)

Nutzt Du die Option 2, sind weitere Schlüssel notwendig:

![](../images/Building-the-App/CI/BrowserBuildGAUTH4b.png)

In the Name field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

![](../images/Building-the-App/CI/BrowserBuildGAUTH5.png)

Switch to the File Explorer Plus tab.

Tap the second Copy button.

![](../images/Building-the-App/CI/BrowserBuildGAUTH6.png)

Switch back to the GitHub tab.

1. In the Secret field, paste the text you just copied. Use a long touch on the text box to show the paste menu.

2. Tap Add secret.

![](../images/Building-the-App/CI/BrowserBuildGAUTH7.png)

GitHub wird ab jetzt in der Lage sein, die AAPS-APK-Datei in Deinem Google Drive zu speichern, sobald sie erstellt wurde.

(github-build-apk)=
## AAPS-CI GitHub Aktionen, um die AAPS APK zu erstellen
 - Passend für allgemeine Benutzer.

```{tab-set}

:::{tab-item} Wiki
:::{include} BrowserBuildCIS.md
:::  

:::{tab-item} Video
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://www.dailymotion.com/embed/video/x9rdwms?autoplay=0&queue-enable=false&loop=1"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

### Auswahl der zu erstellenden Version („Build Version“)

**Only AAPS versions from 3.3.2.1 and above will build with the Browser method.**

![](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(variant)=

### Build Variants selection

*Note: both Android and Android Wear apps will be built automatically.*

  - Select the variant you need:
    - fullRelease: For regular pump usage with full functionality.
    - [aapsclientRelease, aapsclient2Release](#RemoteControl_aapsclient): For caregivers (requires [Nightscout](../SettingUpAaps/Nightscout.md))。
    - pumpcontrolRelease: To replace your pump app/controller

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

Variants ending with “Debug” indicates that the APK will be built in debug mode, which is useful for developers for troubleshooting.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

(aaps-ci-troubleshooting)=
## AAPS-CI Troubleshooting

(aaps-ci-preparation-web)=
### aaps-ci-preparation web page
  - When you open aaps-ci-preparation.html using a file manager, it will start a temporary local server on your phone to display the webpage and receive the Google refresh token.
  - If you see the screen below, it means you have been inactive for a while, and the file manager has already shut down the local server.
  - Please reopen aaps-ci-preparation.html using the file manager app and complete the remaining steps.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-disable-software)=
### Disable Software That May Interfere With OAUTH Verification
  - Disable any VPN or security app (firewall, antimalware,...) on the phone before trying to get the OAUTH key.

(aaps-ci-actions-permission)=
### Check GitHub Actions Permission Settings
  - Make sure GitHub Actions policies are set to “Allow all actions and reusable workflows” (Settings → Actions → General).

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` and `actions/setup-java@v4` are not allowed to be used in `xxxxx/AndroidAPS`. Actions in this workflow must be: within a repository owned by `xxxxx`

--------

```{warning}
Customizations are usually not necessary. This is for your information ony.
```

(github-cherry-pick)=

## If you want to add a specific commit to your branch, please use cherry-pick.

  ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

  - Use workflow from Branch: Please enter the branch name you want to cherry-pick to.
  - Upstream Repository: Please enter the repository name you want to cherry-pick from.
  - Commit SHA: Please enter the commit SHA you want to cherry-pick.(like git commit hash)
  - Select Build Variant: [variant](variant)

(ci-keystore-export)=
## CI KeyStore Export

If you want to export your stored keystore, use this method.

This script will export your previously configured keystore information (from Option 1 or Option 2) as a password-protected ZIP file to the `/AAPS/KeyStore` directory in your Google Drive.

```{warning}
Before using this export method, make sure your keystore and Google Drive settings have been completed.
```

### Schritte:

1. **Add ZIP Password Secret:**
   - Go to your repository's **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - In the **Name** field, enter: `ZIP_PASSWORD`
   - In the **Secret** field, enter your custom ZIP encryption password
   - Use only English letters and numbers for the password (no special symbols)
   - Click **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Run Export Workflow:**
   - Go to the **Actions** tab in your repository
   - Select **CI KeyStore Export**
   - Click **Run workflow**
   - The exported keystore ZIP file will be saved to your Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)