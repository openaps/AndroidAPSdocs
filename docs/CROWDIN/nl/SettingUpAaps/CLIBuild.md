# Bouwinstructies voor de opdrachtregel

```{admonition} For users familiar with the command-line and git
:class: note

De eenvoudigste manier om AAPS te bouwen is [Bouwen in de browser](./BrowserBuild.md).
```

Getest met Fedora en Debian Linux. Andere systemen werken waarschijnlijk met kleine aanpassingen.

## Vereisten

Zoek in [deze tabel](#Building-APK-recommended-specification-of-computer-for-building-apk-file) welke Java-versie je minimaal nodig hebt. Installeer het juiste OpenJDK-pakket met de pakketbeheerder van je systeem. In Debian heten de pakketten bijvoorbeeld `openjdk-21-jdk`. Het pakket moet de programma's `javac` en `keytool` bevatten.

Download het pakket *Android Command line tools* van de [Android Studio-pagina](https://developer.android.com/studio#command-line-tools-only). Android Studio zelf heb je niet nodig. Meer informatie over het installeren van dit pakket vind je in de [documentatie van sdkmanager](https://developer.android.com/tools/sdkmanager). Als het pakket is geïnstalleerd, moet je zelf twee [omgevingsvariabelen](https://developer.android.com/tools/variables) instellen: `ANDROID_HOME` en `PATH`. Voer tot slot `sdkmanager --licenses` uit om de installatie af te ronden.

## AAPS bouwen met de Gradle wrapper

### 1. Een Java keystore-bestand maken om AAPS te ondertekenen

Heb je al een keystore-bestand om AAPS te ondertekenen, gebruik dat dan opnieuw.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Je hebt het keystore-bestand en het wachtwoord elke keer nodig als je AAPS bijwerkt.

### 2. Het AAPS APK-bestand compileren

Clone de [git repo](https://github.com/nightscout/AndroidAPS) als je dat nog niet hebt gedaan. AAPS gebruikt de master branch voor de nieuwste stabiele versie. Zorg dat je op de branch/tag staat die je wilt bouwen.

Voer `./gradlew :app:assembleFullRelease` uit in de repo. Dit downloadt automatisch Gradle en de dependencies, en compileert daarna de code. Als de build lukt, staat er een niet-ondertekend APK-bestand in `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Er zou nu ook een programma `apksigner` in `$ANDROID_HOME` geïnstalleerd moeten zijn. Werk je `PATH` opnieuw bij.

### 3. Een ondertekend APK-bestand maken van het niet-ondertekende bestand

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Ga naar je thuismap en maak een ondertekend APK-bestand:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Nu is `app-full-release-signed.apk` klaar om te installeren of bij te werken.
