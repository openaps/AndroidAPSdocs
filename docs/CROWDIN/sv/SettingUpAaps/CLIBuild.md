# Bygginstruktioner för kommandoraden

```{admonition} For users familiar with the command-line and git
:class: note

Det enklaste sättet att bygga AAPS är alternativet [Bygge i webbläsaren](./BrowserBuild.md).
```

Testat med Fedora och Debian Linux. Andra system bör fungera med små ändringar.

## Krav

Se vilken Java-version som minst krävs i [den här tabellen](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Installera rätt OpenJDK-paket med systemets pakethanterare. I Debian heter paketen till exempel `openjdk-21-jdk`. Det ska innehålla programmen `javac` och `keytool`.

Ladda ned paketet *Android Command line tools* från [Android Studio-sidan](https://developer.android.com/studio#command-line-tools-only). Själva Android Studio behövs inte. Mer information om hur du installerar paketet finns i [dokumentationen för sdkmanager](https://developer.android.com/tools/sdkmanager). När paketet är installerat ska du själv ställa in två [miljövariabler](https://developer.android.com/tools/variables): `ANDROID_HOME` och `PATH`. Kör till sist `sdkmanager --licenses` för att slutföra installationen.

## Bygga AAPS med Gradle wrapper

### 1. Skapa en Java-keystore-fil för att signera AAPS

Om du redan har en keystore-fil för att signera AAPS, använd den igen.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Du behöver keystore-filen och lösenfrasen varje gång du uppdaterar AAPS.

### 2. Kompilera APK-filen för AAPS

Klona [git-repot](https://github.com/nightscout/AndroidAPS) om du inte redan har gjort det. AAPS använder master-grenen för den senaste stabila versionen. Se till att du är på den gren/tagg som du vill bygga.

Kör `./gradlew :app:assembleFullRelease` i repot. Gradle och alla beroenden laddas ned automatiskt, och sedan kompileras koden. När bygget lyckas ska du ha en osignerad APK-fil i `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Programmet `apksigner` ska också ha installerats i `$ANDROID_HOME`. Uppdatera din `PATH` igen.

### 3. Skapa en signerad APK-fil från den osignerade

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Gå till din hemkatalog och skapa en signerad APK-fil:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Nu har du `app-full-release-signed.apk` klar att installera eller uppgradera.
