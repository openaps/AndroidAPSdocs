# Instrukcja budowania z wiersza poleceń

```{admonition} For users familiar with the command-line and git
:class: note

Najprostszym sposobem na zbudowanie AAPS jest [Budowanie w przeglądarce](./BrowserBuild.md).
```

Sprawdzone na Linuksie Fedora i Debian. Inne systemy powinny działać po drobnych zmianach.

## Wymagania

Minimalną wymaganą wersję Javy sprawdź w [tej tabeli](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Zainstaluj odpowiedni pakiet OpenJDK za pomocą systemowego menedżera pakietów. Na przykład w Debianie pakiety mają nazwy takie jak `openjdk-21-jdk`. Pakiet powinien zawierać programy `javac` i `keytool`.

Pobierz pakiet *Android Command line tools* ze [strony Android Studio](https://developer.android.com/studio#command-line-tools-only). Samo Android Studio nie jest potrzebne. Więcej informacji o instalacji tego pakietu znajdziesz w [dokumentacji sdkmanager](https://developer.android.com/tools/sdkmanager). Po instalacji pakietu musisz ręcznie ustawić dwie [zmienne środowiskowe](https://developer.android.com/tools/variables): `ANDROID_HOME` i `PATH`. Na koniec uruchom `sdkmanager --licenses`, aby dokończyć instalację.

## Budowanie AAPS za pomocą Gradle wrapper

### 1. Wygeneruj plik magazynu kluczy Java (keystore) do podpisywania AAPS

Jeśli masz już plik magazynu kluczy do podpisywania AAPS, użyj go ponownie.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Plik magazynu kluczy i hasło będą Ci potrzebne przy każdej aktualizacji AAPS.

### 2. Skompiluj plik APK AAPS

Sklonuj [repozytorium git](https://github.com/nightscout/AndroidAPS), jeśli jeszcze tego nie zrobiłeś. AAPS używa gałęzi „master” dla najnowszej stabilnej wersji. Upewnij się, że jesteś na gałęzi/tagu, który chcesz zbudować.

Uruchom `./gradlew :app:assembleFullRelease` w repozytorium. Polecenie samo pobierze Gradle i zależności, a potem skompiluje kod. Gdy budowanie się uda, powinieneś mieć niepodpisany plik APK w `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Powinien też zostać zainstalowany program `apksigner` w `$ANDROID_HOME`. Zaktualizuj ponownie zmienną `PATH`.

### 3. Utwórz podpisany plik APK z niepodpisanego

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Przejdź do swojego katalogu domowego i utwórz podpisany plik APK:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Teraz masz plik `app-full-release-signed.apk` gotowy do instalacji lub aktualizacji.
