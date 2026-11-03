(aaps-ci-preparation)=

# Browser-Build – Schritt 2: Deinen Signatur-Keystore erstellen

```{note}
Das ist **Schritt 2** des [Browser-Builds](BrowserBuild.md). Schließe zuerst [Schritt 1 – Deinen GitHub-Fork erstellen](BrowserBuildFork.md) ab.
```

AAPS muss mit privaten Schlüsseln signiert werden, die in einem **Java KeyStore (JKS)** gespeichert sind. Das ist die wichtigste Entscheidung des ganzen Ablaufs, denn sie bestimmt, ob Du AAPS später ohne Neuinstallation **aktualisieren** kannst.

```{note}
In den nächsten Schritten speicherst Du private Informationen (Deinen Keystore und später Deinen Google-Drive-Zugriff) in GitHub als **Secrets**. Ein Secret ist einfach ein verschlüsselter Wert, den nur Dein eigener Build lesen kann – niemand sonst kann ihn sehen, auch nicht Personen, die sich Deinen Fork ansehen. So bleibt Dein Build Deiner.
```

## Wähle Deine Keystore-Strategie

Lies beide Optionen und wähle die, die zu Deiner Situation passt.

### Option 1 – Einen neuen Keystore erzeugen (neue Anwender)

Wähle diese Option, wenn **eine** dieser Aussagen zutrifft:

- Du erstellst AAPS zum **ersten Mal**.
- Du hast keinen Keystore aus einem früheren Build mit Android Studio (Computer).
- Du hast Passwort oder Alias Deines Keystores vergessen.

```{warning}
Wenn Du AAPS mit **Option 1** erstellst, wird ein ganz neuer Keystore angelegt, deshalb **kannst Du Dein vorhandenes AAPS damit nicht einfach aktualisieren**. Um zu diesem neuen Build zu wechseln, musst Du Deine Einstellungen exportieren, das alte AAPS deinstallieren, das neue installieren und Deine Einstellungen wieder importieren. Folge den Schritten unter [AAPS mit einem neuen Keystore neu installieren](#reinstall-aaps).
```

**→ [Weiter mit Option 1 – Einen neuen Keystore erzeugen](BrowserBuildO1.md)**

### Option 2 – Deinen vorhandenen Keystore hochladen (bisherige Anwender)

Wähle diese Option, wenn Du den Keystore `.jks`, den Du bei einem früheren Build von AAPS auf einem Computer in Android Studio verwendet hast, **bereits hast** **und** sein Passwort und seinen Alias kennst (meist `key0`).

So bleibt Deine aktuelle AAPS-Installation aktualisierbar: Künftige Updates verwenden denselben Keystore.

**→ [Weiter mit Option 2 – Deinen vorhandenen Keystore hochladen](BrowserBuildO2.md)**

----

```{note}
Auf der nächsten Seite wählst Du Dein Gerät (Computer oder iPhone). Jede Geräteseite führt Dich dann durch das Herunterladen und Öffnen der Vorbereitungsdatei, so wie es für dieses Gerät richtig ist, und durch das Erstellen Deines Keystores. Die erstellte AAPS-App wird in Deinem Google Drive gespeichert.
```

**Weiter: Wähle oben [Option 1](BrowserBuildO1.md) oder [Option 2](BrowserBuildO2.md) und folge dann der Seite für Dein Gerät.**

----

(ci-keystore-export)=

## Deinen Keystore exportieren (optional)

Wenn Du den Keystore exportieren willst, nutze diese Methode.

Dieses Skript exportiert Deine zuvor konfigurierten Keystore-Informationen (von Option 1 oder Option 2) als passwortgeschützte ZIP-Datei in das Verzeichnis `/AAPS/KeyStore` in Dein Google Drive.

```{warning}
Bevor Du diese Exportmethode nutzt, stelle sicher, dass Du Deine Keystore- und Google Drive-Einstellungen abgeschlossen hast.
```

### Schritte:

1. **ZIP-Passwort-Secret hinzufügen:**
   - Gehe in die Einstellungen Deines Repositorys: **Settings** → **Secrets and variables** → **Actions**
   - Klick auf **New repository secret**
   - Ins Feld **Name** gib bitte `ZIP_PASSWORD` ein
   - In das Feld **Secret**, gib Dein selbstgewähltes Passwort zur ZIP-Verschlüsselung ein
   - Verwende ausschließlich englische Buchstaben und Zahlen für das Passwort (keine speziellen Symbole)
   - Klicke auf **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Starte „Export Workflow“:**
   - Gehe zum **Actions**-Tab in Deinem Repository
   - Wähle **CI Keystore Export** aus
   - Klicke auf **Run workflow**
   - Die exportierte Keystore-ZIP-Datei wird in Deinem Google Drive gespeichert

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Option 1 – Einen neuen Keystore erzeugen <BrowserBuildO1.md>
Option 2 – Deinen vorhandenen Keystore hochladen <BrowserBuildO2.md>
```
