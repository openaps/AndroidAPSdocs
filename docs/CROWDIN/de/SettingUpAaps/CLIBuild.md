# Über die Kommandozeile erstellen

```{admonition} For users familiar with the command-line and git
:class: information

Die einfachste Art AAPS zu erstellen ist, der sog. [Browser Build](./BrowserBuild.md).
```

Mit Fedora und Debian Linux getestet. Andere Systeme sollten mit geringen Anpassungen ebenfalls funktionieren.

## Voraussetzungen

Schaue in [dieser Tabelle](#Building-APK-recommended-specification-of-computer-for-building-apk-file) nach der Mindestanforderungen an die Java-Version. Installiere das passende OpenJDK-Paket über den Systempaket-Manager. Für Debian ist beispielsweise das Paket `openjdk-21-jdk` genannt. Es sollte die `javac` und `keytool` Binärdateien enthalten.

Lade das *Android Kommandozeilenwerkzeug*-Paket (Android Command Line Tools) von der [Android Studio Seite](https://developer.android.com/studio#command-line-tools-only) herunter. Android Studio selbst ist nicht erforderlich. Weitere Informationen zur Installation dieses Pakets findest Du in den [sdkmanager docs](https://developer.android.com/tools/sdkmanager). Nachdem das Paket installiert ist, solltest Du die zwei [Umgebungsvariablen](https://developer.android.com/tools/variables) `ANDROID_HOME` und `PATH` manuell setzen. Führe zum Abschluss der Installation den Befehl `sdkmanager --licenses` aus.

## AAPS mit Gradle-Wrapper erstellen

### 1. Erstelle eine Java-Keystore-Datei zum Signieren von AAPS

Wenn Du bereits eine Keystore-Datei zum Signieren von AAPS hast, nutze diese.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Du benötigst die Keystore-Datei und den Passphrase jedes Mal, wenn Du AAPS aktualisierst.

### 2. Kompiliere die AAPS-APK-Datei

Klone das [git repo](https://github.com/nightscout/AndroidAPS), wenn nicht bereits geschehen. AAPS verwendet den Master-Branch für die neueste stabile Version. Stelle sicher, dass Du auf dem Branch/Tag bist, den Du auch erstellen möchtest.

Führe `./gradlew :app:assembleFullRelease` im Repo aus. Es lädt Gradle und die Abhängigkeiten automatisch herunter und kompiliert dann den Code. Wenn der Build erfolgreich durchgelaufen ist, solltest Du eine unsignierte APK unter `app/build/outputs/apk/full/release/app-full-release-unsigned.apk` haben. Es sollte auch eine `apksigner` Binärdatei im Verzeichnis `$ANDROID_HOME` installiert haben. Aktualisiere Deinen `PATH` erneut.

### 3. Erstelle eine signierte APK-Datei aus der nicht signierten Datei

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Wechsel in Dein Stammverzeichnis (Home) und erstelle eine signierte APK-Datei:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Jetzt hast Du eine `app-full-release-signed.apk` für die Installation oder zum Upgrade.
