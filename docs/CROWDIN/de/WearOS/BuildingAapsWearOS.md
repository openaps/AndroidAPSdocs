# Erstellen der Wear-AAPS-App

Die **AAPS**-App für eine Wear OS-Smartwatch (die **Wear-APK**, `aaps-wear-….apk`) ist eine eigene Installationsdatei, getrennt von der **AAPS**-App für das Smartphone. Du brauchst beide: Die Smartphone-App führt den Loop aus, die Smartwatch-App zeigt seine Daten an und kann Befehle an ihn senden. Die Smartwatch-App wird vom Smartphone aus installiert, siehe [AAPS auf Deiner Wear OS-Smartwatch einrichten](WearOsSmartwatch.md).

Die beiden Apps funktionieren nur zusammen, wenn sie zueinander passen:

- **Dieselbe AAPS-Version** auf Smartphone und Smartwatch.
- **Derselbe Keystore** zum Signieren beider Apps.

Am einfachsten stellst Du das sicher, indem Du beide Apps **gleichzeitig** im selben Build erstellst. Der Browser-Build erledigt das für Dich: Jeder Build erzeugt die Smartphone-APK und die Wear-APK zusammen. Mit Android Studio oder über die Kommandozeile erstellst Du die Wear-APK als zweiten Schritt direkt nach der Smartphone-APK.

```{note}
Du nutzt **AAPS** schon auf Deinem Smartphone, hast aber keine Wear-APK aus demselben Build? Erstelle beide Apps erneut mit demselben Keystore und installiere auch die Smartphone-App neu. Eine Wear-APK, die Monate später oder mit einer anderen Android Studio-Version erstellt wurde, passt wahrscheinlich nicht zur Smartphone-App.
```

## Unterstützte Wear-OS-Versionen

**AAPS** läuft auf Smartwatches mit **Wear OS 3.0, 3.2 oder 3.5** (Android 11, API-Level 30) **oder neuer** (Wear OS 4, 5 und 6). Smartwatches mit Wear OS 2 werden nicht unterstützt.

```{warning}
AAPS-Watchfaces sind für Wear OS-Smartwatches mit API-Level 30 bis 33 (Wear OS 3.0, 3.2, 3.5 und 4) verfügbar.<br>
Neuere Wear OS-Versionen machen die AAPS-Watchfaces nach und nach unbrauchbar, siehe [Änderungen an Watchfaces in Wear OS](#wearos-watchface-changes) und die [Einschränkungen von Wear OS 5](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Die Wear-APK mit Deiner Erstellungsmethode bekommen

Folge dem Abschnitt für die Methode, mit der Du [AAPS erstellst](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Browser-Build (empfohlen)

**Du musst nichts weiter tun.** Jeder Browser-Build erzeugt aus demselben Quellcode und mit demselben Keystore zwei Dateien:

- `aaps-….apk`: die Smartphone-App.
- `aaps-wear-….apk`: die Smartwatch-App.

Die Wear-APK richtet sich nach der [Variante](#browserbuild-variant), die Du für den Build gewählt hast: `fullRelease` ergibt die App **AAPS Wear**, `aapsclientRelease` die App **AAPSClient Wear**, `pumpcontrolRelease` die App **PumpControl Wear**. Jede Wear-App kommuniziert nur mit der passenden Smartphone-App.

Wo Du die Wear-APK findest:

- **AAPS Builder**: Scrolle auf der Build-Seite nach unten zu **Artifacts** und lade `aaps-wear-….apk` neben der Smartphone-App herunter, wie in [Schritt 5 – Die App auf Deinem Smartphone installieren](#aaps-builder-step5) gezeigt. Lade sie auf das Smartphone mit **AAPS** herunter, wenn Du die Smartwatch-App vom Smartphone aus installierst (Wear Installer 2 oder Easy Fire Tools), oder auf Deinen Computer, wenn Du ADB verwendest.

  ![Artifacts with the phone and watch apps](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork mit Google Drive**: Öffne Dein Google Drive, den Ordner `AAPS` und dann den Ordner der Version, die Du erstellt hast. Er enthält die Smartphone-APK und die Wear-APK, siehe [Schritt 4 – Die APK erstellen](#github-build-apk).

  ![Google Drive Location](../images/update/CI/GitHubActions5.png)

Bewahre die Wear-APK zusammen mit der Smartphone-APK in Deinen Backups auf. Beim **AAPS Builder** bleiben die Dateien nur 14 Tage auf der Build-Seite.

Als Nächstes: Installiere die Wear-APK auf der Smartwatch, siehe [AAPS auf Deiner Wear OS-Smartwatch einrichten](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Die Wear-APK wird wie die Smartphone-APK als zweiter signierter Build erstellt. Mache das direkt nach der Smartphone-APK, mit derselben Android Studio-Version und demselben Keystore.

- Folge der Anleitung für den [Build mit Android Studio](../SettingUpAaps/ComputerBuild.md).
- Wenn Du an die Stele zur [Modulauswahl](#Building-APK-wearapk) im Abschnitt „Signierte AAPS APK erstellen“ kommst, wähle **`AndroidAPS.wear`** aus.

![Wear module](../images/Building-the-App/wear_build1.png)

Wähle „**fullRelease**“ aus, um damit die **AAPS**-Wear-APK-Datei zu erzeugen.

![Wear module](../images/Building-the-App/wear_build2.png)

Wenn Du möchtest, kannst Du aus dem Drop-Down-Menü das **“pumpcontrolRelease”** auswählen und erstellen. Mit dieser Version kannst Du die Pumpe (ohne die Loop-Funktion) remote steuern.

Als Nächstes: Installiere die Wear-APK auf der Smartwatch, siehe [AAPS auf Deiner Wear OS-Smartwatch einrichten](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Fehlerbehebung beim Build mit Android Studio

Beim Erstellen der vollständigen **AAPS**-App (und eigentlich jeder signierten App) erzeugt Android Studio im selben Ordner eine .json-Datei. Das kann zum Fehler [uncommitted changes](#troubleshooting_androidstudio-uncommitted-changes) führen, wenn die nächste signierte App (wie zum Beispiel die **AAPS** wear App) erstellt werden soll. Am schnellsten kann das behoben werden, in dem Du den Ordner, in dem die Vollversion der AAPS App erzeugt wurde, aufrufst. Der Ordner sollte ungefähr so aussehen:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

Lösche die .json Datei oder verschiebe sie in einen anderen Ordner. Versuche nun die **AAPS** wear App erneut zu erzeugen (build). Wenn das nicht helfen sollte, findest Du im Abschnitt[Fehlerbehebung für Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) Hilfestellung, um die Datei zu identifizieren, die das Problem ausgelöst hat. Auch die Keystore-Datei kann das Problem sein.

(building-aaps-wear-os-cli)=

### Kommandozeile

Folge der [Anleitung zum Erstellen über die Kommandozeile](../SettingUpAaps/CLIBuild.md) und wiederhole die Schritte zum Kompilieren und Signieren für das Modul `wear`, mit demselben Keystore:

```sh
./gradlew :wear:assembleFullRelease
```

Die unsignierte Wear-APK wird unter `wear/build/outputs/apk/full/release/` abgelegt. Signiere sie mit `apksigner` genau wie die Smartphone-APK und installiere sie dann auf der Smartwatch, siehe [AAPS auf Deiner Wear OS-Smartwatch einrichten](WearOsSmartwatch.md).
