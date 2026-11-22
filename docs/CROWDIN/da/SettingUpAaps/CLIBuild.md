# Byggevejledning til kommandolinjen

```{admonition} For users familiar with the command-line and git
:class: note

Den nemmeste måde at bygge AAPS på er alternativet [Build i browseren](./BrowserBuild.md).
```

Testet med Fedora og Debian Linux. Andre systemer bør virke med små tilpasninger.

## Krav

Se den mindste krævede Java-version i [denne tabel](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Installer den passende OpenJDK-pakke med systemets pakkehåndtering. I Debian hedder pakkerne f.eks. `openjdk-21-jdk`. Den skal indeholde programmerne `javac` og `keytool`.

Download pakken *Android Command line tools* fra [Android Studio-siden](https://developer.android.com/studio#command-line-tools-only). Selve Android Studio er ikke nødvendig. Du finder mere information om installation af denne pakke i [dokumentationen til sdkmanager](https://developer.android.com/tools/sdkmanager). Når pakken er installeret, skal du selv sætte to [miljøvariabler](https://developer.android.com/tools/variables): `ANDROID_HOME` og `PATH`. Kør til sidst `sdkmanager --licenses` for at afslutte installationen.

## Byg AAPS med Gradle wrapper

### 1. Opret en Java-keystore-fil til signering af AAPS

Hvis du allerede har en keystore-fil til signering af AAPS, så brug den igen.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Du skal bruge keystore-filen og adgangskoden, hver gang du opdaterer AAPS.

### 2. Kompiler AAPS-APK-filen

Klon [git-repository'et](https://github.com/nightscout/AndroidAPS), hvis det ikke allerede er klonet. AAPS bruger master-grenen til den seneste stabile version. Sørg for, at du er på den gren/det tag, du vil bygge.

Kør `./gradlew :app:assembleFullRelease` i repository'et. Den downloader automatisk Gradle og afhængigheder og kompilerer derefter koden. Når buildet lykkes, har du en usigneret APK i `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Den skulle også have installeret programmet `apksigner` i `$ANDROID_HOME`. Opdater din `PATH` igen.

### 3. Opret en signeret APK-fil ud fra den usignerede

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Gå til din hjemmemappe og opret en signeret APK-fil:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Nu har du `app-full-release-signed.apk` klar til installation eller opgradering.
