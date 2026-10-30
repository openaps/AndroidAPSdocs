# Build instructions for the command-line

```{admonition} For users familiar with the command-line and git
:class: information

The simplest option to build AAPS is the [Browser build](./BrowserBuild.md) alternative.
```

Tested with Fedora and Debian Linux, other systems should work with minimal adjustments.

## Requirements

Consult the minimum required Java version from [this table](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Install the appropriate OpenJDK package using the system package manager. For example in Debian, the packages are named like `openjdk-21-jdk`. It should include `javac` and `keytool` binaries.

Download the *Android Command line tools* package from the [Android Studio page](https://developer.android.com/studio#command-line-tools-only). Android Studio itself is not required. More information about installing this package is found in [sdkmanager docs](https://developer.android.com/tools/sdkmanager). After the package is installed, you should manually set two [environment variables](https://developer.android.com/tools/variables): `ANDROID_HOME` and `PATH`. Finally, run `sdkmanager --licenses` to finish the installation.

## Building AAPS with Gradle wrapper

### 1. Generate a Java keystore file for signing AAPS

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

### 2. Compile the AAPS APK file

Clone the [git repo](https://github.com/nightscout/AndroidAPS) if not already cloned. AAPS uses master branch for the latest stable version, ensure you are on the branch/tag you want to build.

Run `./gradlew :app:assembleFullRelease` in the repo. It automatically downloads Gradle, dependencies, and then compiles the code. When the build succeeds, you should have an unsigned APK at `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. It should have also installed an `apksigner` binary to `$ANDROID_HOME`. Update your `PATH` again.

### 3. Create a signed APK file from the unsigned one

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Change to your home directory and create a signed APK file:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Now you have `app-full-release-signed.apk` ready for installation or upgrade.
