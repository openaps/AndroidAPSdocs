# Mit einem Browser aktualisieren

## Kein Download möglich - APK muss selbst erstellt werden

Aufgrund der gesetzlichen Regelungen für Medizinprodukte ist **AAPS** nicht als Download verfügbar. Es ist zulässig, die App für den eigenen Gebrauch zu erstellen, aber du darfst keine Kopie an andere weitergeben! Zu den Details schaue bitte auf die [FAQ-Seite](../UsefulLinks/FAQ.md).

```{note}
Falls Du **AAPS** zum ersten Mal mit einem Browser aktualisieren möchtest: Kopiere Deine gesicherte Keystore-Datei auf Dein Google Drive. Folge dann dem [Prozess für den **AAPS**-Browser Build](../SettingUpAaps/BrowserBuild.md) und nicht dieser Anleitung. Anstatt einen neuen Keystore zu erstellen, wählst Du den Keystore aus, den Du von Deinem Computer kopiert hast.
Das musst Du nur beim ersten Mal machen. Für die danach folgenden Updates, kannst Du dann dieser Anleitung folgen.
```

## Übersicht zum Aktualisieren auf eine neue AAPS-Version mit einem Browser

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Falls Du damit Probleme haben solltest, findest Du einige Lösungen auf der eigenen Seite [Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

### Exportiere Deine Einstellungen

Exportiere die Einstellungen Deiner aktuellen **AAPS**-Version Deines Smartphones. Vielleicht brauchst Du sie nicht, aber sicher ist sicher.

Wenn Du nicht mehr genau weißt, wie man das macht, schaue auf der Seite [Export & Import der Einstellungen](ExportImportSettings.md) nach.

(Update-to-new-version-update-your-repo)=
### Aktualisiere Dein GitHub Repository

```{admonition} WARNING
:class: warning
BrowserBuild ist ab AAPS Version 3.3.2.1 verfügbar.
```

[Logge Dich bei GitHub ein](https://github.com/login).

1. Wähle Repositories aus.
2. Scrolle herunter und wähle Dein eigenes AndroidAPS Repository aus.

![Select AndroidAPS repo](../images/update/CI/GitHubUpdate1.png)

3. Stelle sicher, dass Du Deine eigene Kopie von AndroidAPS verwendest (Fork von nightscout/AndroidAPS)
4. Tippe auf „Sync Fork“, um es zu aktualisieren (die Anzahl der Commits kann sich vom Bild unterscheiden)



![Sync AndroidAPS repo](../images/update/CI/GitHubUpdate2.png)

5. Tippe auf „Update Branch“

![Update AndroidAPS repo](../images/update/CI/GitHubUpdate3.png)

Hinweis: Falls Du aus Versehen Deine AndroidAPS-Kopie geändert hast, siehst Du den folgenden Bildschirm. Verwirf alle Änderungen (Commits), um zur offiziell freigegebenen Version zurückzukehren.

![Discard rogue modifications](../images/update/CI/GitHubUpdate4.png)

Deine eigene Kopie ist jetzt synchronisiert (aktualisiert) und enthält die neueste freigegebene AAPS-Version. Gut gemacht.

![Repo sync'ed](../images/update/CI/GitHubUpdate5.png)

### Führ die folgenden Schritte durch, um eine signierte APK zu erstellen

1. Wähle in Deiner AAPS-GitHub-Kopie „Actions“ aus.
2. Klappe alle „Workflows“ auf.
3. Wähle AAPS-CI aus

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll herunter und tippe auf „Run Workflow“.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Wähle den Branch, den Du deployen möchtest (Master), die [Variante](variant) (fullRelease) und tippe auf „Run Workflow“.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Es erscheint die Nachricht „Workflow run was successfully requested“. Mit dem Aktualisieren der Browser-Seite kannst Du den Build-Fortschritt mitverfolgen. Eine grünes Häkchen zeigt an, dass die Aktion „AAPS CI“ abgeschlossen ist. Du hast damit die aktualisierte AAPS-Version erfolgreich erstellt. Das bedeutet, dass Master und Wear apk nun direkt in Deinem Google Drive (wie unten beschrieben) gespeichert wurden. Die AAPSClient Apk kann in Github > nightscout > AndroidAPS [hier](https://github.com/nightscout/AndroidAPS/releases) heruntergeladen werden


![Monitor Workflow](../images/update/CI/GitHubActions4.png)


### Installiere die AAPS APK

1. Öffne Dein Google Drive
2. Gehe in den AAPS-Ordner und öffne den Ordner mit der neuen Version. Dort findest Du sowohl die Smartphone-Version, als auch die Android-Wear-Version.

![Google Drive Location](../images/update/CI/GitHubActions5.png)


[Hier](#Update-to-new-version-check-aaps-version-on-phone) geht's weiter

## Problembehandlung

Keine Panik, wenn irgendetwas schiefläuft.

Tief durchatmen!

Dann schaue im Abschnitt [Tipps zur Fehlerbehebung](#aaps-ci-preparation), ob Dein Problem dort schon beschrieben wurde!

Wenn Du weitere Hilfe brauchst, kontaktiere bitte andere **AAPS**-Nutzende auf [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) oder [Discord](https://discord.gg/4fQUWHZ4Mw).
