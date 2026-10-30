(aaps-ci-troubleshooting)=

# Browser-Build: Fehlerbehebung

```{note}
Diese Seite sammelt Tipps zur Fehlerbehebung beim [Browser-Build](../SettingUpAaps/BrowserBuild.md).

Du nutzt den **AAPS-Builder**? Fang mit dessen eigenem [Abschnitt zur Fehlerbehebung](#aaps-builder-troubleshooting) an. Die untenstehenden Abschnitte zu Google Drive gelten auch für diese.
```

## AAPS-CI Fehlerbehebung

(aaps-ci-preparation-web)=
### aaps-ci-preparation Webseite
  - Wenn Du die Seite „aaps-ci-preparation.html“ mit einem Dateimanager öffnest, wird ein temporärer lokaler Server auf Deinem Smartphone gestartet, um so die Webseite anzuzeigen und das Google Refresh Token zu erhalten.
  - Dieser lokale Server schaltet sich nach etwa 10 Minuten ab. Siehst Du den Bildschirm unten, hat der Dateimanager den lokalen Server bereits beendet.
  - Schließe **sowohl** die Vorbereitungsseite <0>als auch</0> die Dateimanager-App. Öffne dann aaps-ci-preparation.html erneut über den Dateimanager und schließe die restlichen Schritte ab. Das ist vor allem nötig, wenn Du bei der Einrichtung die erste Verbindung zu Google herstellst.

  ![aaps_ci_html_not_found](../images/Building-the-App/CI/aaps_ci_html_not_found.png)

(aaps-ci-google-token-expired)=
### Google Refresh Token Expired
  - Google OAuth2 Refresh Token laufen nach 6 Monaten Inaktivität ab und können auch aus anderen Gründen ungültig werden (z. B. Password des Google-Kontos wurde geändert oder der Zugriff wurde manuell entzogen). Weitere Details dazu findest Du in der [Google OAuth2 Dokumentation](https://developers.google.com/identity/protocols/oauth2).
  - Du wirst in diesem Fall die Fehlermeldung sehen, dass das Access Token ungültig ist:

  ![aaps_ci_token_expired](../images/Building-the-App/CI/aaps_ci_token_expired.jpg)

  - Wenn Dein „Build“ wegen eines abgelaufenen oder widerrufenen Google-Refresh-Tokens fehlgeschlagen ist, musst Du die Schritte zur [Google Drive Autorisierung](#aaps-ci-google-drive-auth) wiederholen, damit ein neues `GDRIVE_OAUTH2`-Token generiert wird. Das „Secret“ musst Du in Deinem GitHub Repository aktualisieren und dann den Build-Workflow erneut starten.
  - Schlägt die Autorisierung erneut fehl oder fragt Google nicht mehr nach Deiner Zustimmung, entferne zuerst den bestehenden AAPS-Zugriff aus Deinem Google-Konto, siehe unten.

(aaps-ci-google-remove-access)=
### AAPS-Zugriff aus Deinem Google-Konto entfernen und Autorisierung neu starten
  - Wenn die Google Drive Autorisierung immer wieder fehlschlägt oder Du sauber von vorn beginnen möchtest, entferne zuerst den Zugriff, den Du AAPS früher erteilt hast. Wiederhole danach die Autorisierung.
  - Öffne auf Deinem Smartphone [https://myaccount.google.com](https://myaccount.google.com), tippe auf **Sicherheit**, scrolle nach unten zu Deine Verbindungen zu Drittanbieter-Apps und & Diensten und öffne die Liste der verknüpften Apps. Du kannst auch direkt [https://myaccount.google.com/connections](https://myaccount.google.com/connections) aufrufen.
  - Tippe in der Liste auf **AAPS**.

  ![aaps_ci_google_access_1](../images/Building-the-App/CI/aaps_ci_google_access_1.png)

  - Die Seite zeigt den Zugriff, den Du AAPS erteilt hast (die Google-Drive-Dateien, die mit der App genutzt werden). Tippe auf **Alle löschen**, um die Verbindung zu entfernen, oder auf **Details ansehen**, um sie Dir vorher anzuschauen.

  ![aaps_ci_google_access_2](../images/Building-the-App/CI/aaps_ci_google_access_2.png)

  - Tippe auf der Detailseite auf **Gesamten Zugriff entfernen** und bestätige. AAPS erscheint danach nicht mehr in der Liste der verknüpften Apps.

  ![aaps_ci_google_access_3](../images/Building-the-App/CI/aaps_ci_google_access_3.png)

  - Starte die Autorisierung jetzt sauber neu: Schließe **sowohl** die Vorbereitungsseite <0>als auch</0> die Dateimanager-App, öffne aaps-ci-preparation.html erneut über den Dateimanager und wiederhole die Schritte zur [Google Drive Autorisierung](#aaps-ci-google-drive-auth). Google fragt Dich erneut nach dem Zugriff, und die Seite erzeugt ein neues `GDRIVE_OAUTH2`-Token.
  - Aktualisiere das Secret `GDRIVE_OAUTH2` in Deinem GitHub-Repository mit dem neuen Token und starte dann den Build-Workflow erneut.

(aaps-ci-disable-software)=
### Software, die bei der OAUTH-Verifizierung stören könnte, deaktivieren
  - Deaktiviere sämtliche VPN- oder Sicherheits-Apps (Firewall, Antimalware, ...) auf dem Smartphone, bevor Du versuchst den OAUTH-Key abzurufen.

(aaps-ci-actions-permission)=
### Prüfe die GitHub-Berechtigungen (Actions Permission Settings)
  - Stelle sicher, dass die GitHub-Actions-Richtlinien auf „Allow all actions and resusable workflows“ gesetzt sind (Settings → Actions → General).

  ![aaps_ci_actions_permission](../images/Building-the-App/CI/aaps-ci-actions-permission.png)

`actions/checkout@v4` und `actions/setup-java@v4` dürfen nicht in `xxxxx/AndroidAPS` genutzt werden. Actions in diesem Workflow müssen aus einem Repository, das `xxxxx` gehört, stammen

(aaps-ci-workflow-permissions)=
### GitHub-Workflow-Berechtigungen prüfen (Workflow Permissions)
  - Schlägt der Build sofort mit dem Fehler „Invalid workflow file“ fehl, ähnlich wie unten gezeigt, sind die Standard-Workflow-Berechtigungen Deines Repositorys zu stark eingeschränkt:

```
Invalid workflow file
The workflow is not valid. .github/workflows/aaps-ci.yml (Line: 361, Col: 3):
Error calling workflow 'xxxxx/AndroidAPS/.github/workflows/cleanup-workflow-runs.yml@...'.
The nested job 'cleanup' is requesting 'actions: write', but is only allowed 'actions: none'.
```

  - Stelle sicher, dass unter Workflow permissions die Option „Read and write permissions“ gesetzt ist (Settings → Actions → General → Workflow permissions). Speichere und starte den Build-Workflow erneut.

  ![aaps_ci_workflow_permissions](../images/Building-the-App/CI/aaps-ci-workflow-permissions.jpg)

(aaps-ci-password-special-characters)=
### Build schlägt beim Signieren fehl, wenn das Passwort Sonderzeichen enthält
  - Schlägt der Build beim Signieren der APK fehl, obwohl Dein Passwort stimmt, prüfe, ob `KEYSTORE_PASSWORD` oder `KEY_PASSWORD` eines dieser Zeichen enthält: `$`, einen Backtick, `"` oder `\`. Der Build-Workflow wertet genau diese vier Zeichen aus und verändert oder kürzt dadurch das Passwort.
  - Bearbeite das Secret in GitHub und setze nur vor jedes dieser vier Zeichen einen Backslash `\`. Für das Passwort `abc$def"ghi` gibst Du zum Beispiel `abc\$def\"ghi` ein.
  - Alle anderen Zeichen, auch `%`, `*`, `#` und `!,` müssen genau so bleiben, wie sie sind. Ein Backslash davor würde Teil des Passworts werden.
  - Starte den Build-Workflow erneut.
  - Der senkrechte Strich `|` ist ein Sonderfall. Die Vorbereitungsseite von [Option 1](#aaps-ci-option1) fasst Keystore, Passwörter und Alias in einem einzigen Secret `KEYSTORE_SET` zusammen, getrennt durch `|`, und der Workflow trennt es an diesem Zeichen wieder auf. Das Passwort, das die Vorbereitungsseite erzeugt, enthält nur Buchstaben und Ziffern. Bei Option 1 kann das Problem also nicht auftreten. Es tritt nur auf, wenn Du ein `KEYSTORE_SET`-Secret selbst aus einem Passwort mit `|` zusammengesetzt hast. Lösche in diesem Fall `KEYSTORE_SET` und lege stattdessen die einzelnen Secrets von [Option 2](#aaps-ci-option2) an.
