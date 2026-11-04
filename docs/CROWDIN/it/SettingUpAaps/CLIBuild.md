# Build instructions for the command-line

```{admonition} For users familiar with the command-line and git
:class: note

The simplest option to build AAPS is the [Browser build](./BrowserBuild.md) alternative.
```

Tested with Fedora and Debian Linux, other systems should work with minimal adjustments.

## Requisiti

Controlla la versione minima di Java richiesta in [questa tabella](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Installa il pacchetto OpenJDK adatto con il gestore di pacchetti del sistema. Per esempio in Debian i pacchetti hanno nomi come `openjdk-21-jdk`. It should include `javac` and `keytool` binaries.

Scarica il pacchetto *Android Command line tools* dalla [pagina di Android Studio](https://developer.android.com/studio#command-line-tools-only). Android Studio non è necessario. More information about installing this package is found in [sdkmanager docs](https://developer.android.com/tools/sdkmanager). Dopo aver installato il pacchetto, devi impostare a mano due [variabili d'ambiente](https://developer.android.com/tools/variables): `ANDROID_HOME` e `PATH`. Finally, run `sdkmanager --licenses` to finish the installation.

## Building AAPS with Gradle wrapper

### 1. Genera un file keystore Java per firmare AAPS

If you already have a keystore file for signing AAPS, reuse that.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

You will need the keystore file and passphrase every time you update AAPS.

### 2. Compila il file APK di AAPS

Clone the [git repo](https://github.com/nightscout/AndroidAPS) if not already cloned. AAPS uses the master branch for the latest stable version; ensure you are on the branch/tag you want to build.

Esegui `./gradlew :app:assembleFullRelease` nel repository. It automatically downloads Gradle, dependencies, and then compiles the code. When the build succeeds, you should have an unsigned APK at `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Dovrebbe aver installato anche il programma `apksigner` in `$ANDROID_HOME`. Aggiorna di nuovo il tuo `PATH`.

### 3. Create a signed APK file from the unsigned one

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Vai nella tua cartella home e crea un file APK firmato:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Ora hai `app-full-release-signed.apk` pronto per l'installazione o l'aggiornamento.
