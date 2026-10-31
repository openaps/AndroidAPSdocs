(browser-build)=

# Im Browser erstellen (Browser Build)

AAPS mit GitHub Actions erstellen.

**Ab AAPS-Version 3.3.2.1 möglich.**

## Kein Download möglich - APK muss selbst erstellt werden

**Die AAPS-App (eine apk-Datei) ist aufgrund der Vorschriften rund um medizinische Geräte nicht zum Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben!**

Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Erstellungsweg wählen

Wähle die Methode, die zu dem Gerät passt, mit dem Du AAPS erstellst:

### Auf einem Android-Smartphone: AAPS Builder (empfohlen)

Eine Einrichtungsseite führt Dich Schritt für Schritt durch das Anlegen Deines eigenen privaten Build-Repositorys in GitHub. Du musst nichts installieren, brauchst keine Vorbereitungsdatei und startest jeden Build selbst. Die App lädst Du direkt von GitHub herunter. Google Drive ist optional.

Das funktioniert auch im Browser eines Computers.

**→ [Mit dem AAPS Builder erstellen](BrowserBuildAapsBuilder.md)**

### On a computer or an iPhone / iPad: fork and preparation file

Du legst in GitHub eine Kopie (Fork) des AAPS-Quellcodes an, erstellst Deinen Keystore mit einer Vorbereitungsdatei, und die fertige App wird in Deinem Google Drive gespeichert. Folge den vier Schritten unten.

```{note}
**Du erstellst bereits mit einem Fork??** Aktualisiere ihn weiterhin wie unter [Browser-Update (Fork)](../Maintenance/UpdateBrowserBuild.md) beschrieben, oder steige auf den AAPS Builder um. Für den Umstieg brauchst Du zuerst eine Kopie Deines Keystores aus Deinem Fork: siehe [Umstieg vom bisherigen Browser-Build](#aaps-builder-from-fork).
```

Du wirst in Deinem Browser mehrere Tabs verwenden und dabei zwischen diesen Tabs hin und her wechseln. Beispiel Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Du wirst zwischen den Tabs springen: Starte mit geschlossenen Tabs. Das verhindert, dass Du Dich beim Umschalten von einem zum anderen „vertust“.
```

#### Was Du brauchst

- A **Google account**, so the built app can be saved to your Google Drive.
- Ein **GitHub-Konto** (kostenlos). Das legst Du in Schritt 1 an.
- Einen **Webbrowser**, der mehrere Tabs gleichzeitig offen halten kann (unten wird Chrome angenommen).
- Ein kleines **Hilfsprogramm, um die Vorbereitungsdatei auszuführen**. Welches Du brauchst, hängt vom Gerät ab, mit dem Du erstellst. Du musst jetzt noch nichts installieren; Schritt 2 führt Dich für Dein Gerät durch:
  - **Computer (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone/iPad:** keine zusätzliche App. Du nutzt die eingebaute Dateien-App und den Browser.

#### Die Schritte

Der Browser-Build besteht aus einer Reihe von Entscheidungen. Folge diesen Schritten der Reihe nach:

1. **[Erstelle Deinen GitHub-Fork](BrowserBuildFork.md)**: Lege Deine persönliche Kopie des AAPS-Quellcodes an.
2. **[Erstelle Deinen Keystore zum Signieren](BrowserBuildKeystore.md)**: Die wichtigste Entscheidung. Erzeuge einen neuen Keystore (Option 1) oder lade Deinen vorhandenen hoch (Option 2) und folge dann der Seite für Dein Gerät.
3. **[Google Drive autorisieren:](BrowserBuildGoogleDrive.md)** Erlaube GitHub, die fertige App in Deinem Google Drive zu speichern.
4. **[APK erstellen:](BrowserBuildAPK.md)** Starte den GitHub-Actions-Workflow und wähle Version und Variante.

Bei Problemen hilft Dir die **[Browser-Build-Fehlerbehebung](../GettingHelp/BrowserBuildTroubleshooting.md)**. For optional operations with a fork, see [exporting your keystore](#ci-keystore-export) or [cherry-picking a commit](#github-cherry-pick).

----

**Beginne mit [Schritt 1 – Erstelle Deinen GitHub-Fork](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Schritt 1: Fork erstellen <BrowserBuildFork.md>
Schritt 2: Keystore erstellen <BrowserBuildKeystore.md>
Schritt 3: Google Drive autorisieren <BrowserBuildGoogleDrive.md>
Schritt 4: APK erstellen <BrowserBuildAPK.md>
```
