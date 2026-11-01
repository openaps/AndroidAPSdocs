# Byggeinstruksjoner for kommandolinjen

```{admonition} For users familiar with the command-line and git
:class: note

Det enkleste alternativet for å bygge AAPS er [Nettleserbygg](./BrowserBuild.md).
```

Testet med Fedora og Debian Linux; andre systemer bør virke med små justeringer.

## Krav

Finn minimumsversjonen av Java som kreves i [denne tabellen](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Installer den riktige OpenJDK-pakken med systemets pakkebehandler. I Debian heter pakkene for eksempel `openjdk-21-jdk`. Den skal inneholde programmene `javac` og `keytool`.

Last ned pakken *Android Command line tools* fra [Android Studio-siden](https://developer.android.com/studio#command-line-tools-only). Selve Android Studio er ikke nødvendig. Mer informasjon om hvordan du installerer denne pakken finner du i [dokumentasjonen for sdkmanager](https://developer.android.com/tools/sdkmanager). Når pakken er installert, må du manuelt sette to [miljøvariabler](https://developer.android.com/tools/variables): `ANDROID_HOME` og `PATH`. Til slutt kjører du `sdkmanager --licenses` for å fullføre installasjonen.

## Bygge AAPS med Gradle wrapper

### 1. Lag en Java keystore-fil for signering av AAPS

Hvis du allerede har en keystore-fil for signering av AAPS, bruker du den på nytt.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Du trenger keystore-filen og passordfrasen hver gang du oppdaterer AAPS.

### 2. Kompilere APK-filen til AAPS

Klon [git-repositoryet](https://github.com/nightscout/AndroidAPS) hvis det ikke allerede er klonet. AAPS bruker master-grenen for den nyeste stabile versjonen; sørg for at du er på den grenen/taggen du vil bygge.

Kjør `./gradlew :app:assembleFullRelease` i repositoryet. Den laster automatisk ned Gradle og avhengigheter, og kompilerer så koden. Når byggingen lykkes, skal du ha en usignert APK i `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Den skal også ha installert programmet `apksigner` i `$ANDROID_HOME`. Oppdater `PATH` igjen.

### 3. Lage en signert APK-fil fra den usignerte

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Gå til hjemmemappen din og lag en signert APK-fil:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Nå har du `app-full-release-signed.apk` klar for installasjon eller oppgradering.
