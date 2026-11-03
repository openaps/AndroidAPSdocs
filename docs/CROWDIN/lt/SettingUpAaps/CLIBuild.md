# Kūrimo instrukcijos naudojant komandinę eilutę

```{admonition} For users familiar with the command-line and git
:class: note

Paprasčiausias būdas sukurti AAPS yra [Kūrimas naršyklėje](./BrowserBuild.md).
```

Išbandyta su Fedora ir Debian Linux, kitose sistemose turėtų veikti su nedideliais pakeitimais.

## Reikalavimai

Mažiausią reikalingą Java versiją rasite [šioje lentelėje](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Įdiekite tinkamą OpenJDK paketą sistemos paketų tvarkykle. Pavyzdžiui, Debian sistemoje paketai vadinami panašiai kaip `openjdk-21-jdk`. Jame turi būti `javac` ir `keytool` vykdomieji failai.

Atsisiųskite *Android Command line tools* paketą iš [Android Studio puslapio](https://developer.android.com/studio#command-line-tools-only). Pačios Android Studio nereikia. Daugiau informacijos apie šio paketo įdiegimą rasite [sdkmanager dokumentacijoje](https://developer.android.com/tools/sdkmanager). Įdiegę paketą, rankiniu būdu nustatykite du [aplinkos kintamuosius](https://developer.android.com/tools/variables): `ANDROID_HOME` ir `PATH`. Galiausiai paleiskite `sdkmanager --licenses`, kad užbaigtumėte įdiegimą.

## AAPS kūrimas su Gradle wrapper

### 1. Sugeneruokite Java raktų saugyklos failą AAPS pasirašymui

Jei jau turite raktų saugyklos failą AAPS pasirašymui, naudokite jį.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Raktų saugyklos failo ir slaptafrazės jums reikės kiekvieną kartą atnaujinant AAPS.

### 2. Sukompiliuokite AAPS APK failą

Klonuokite [git saugyklą](https://github.com/nightscout/AndroidAPS), jei dar to nepadarėte. AAPS naudoja master atšaką naujausiai stabiliai versijai; įsitikinkite, kad esate toje atšakoje / žymėje (tag), kurią norite kurti.

Saugykloje paleiskite `./gradlew :app:assembleFullRelease`. Jis automatiškai atsisiunčia Gradle, priklausomybes ir tada sukompiliuoja kodą. Kai kūrimas pavyksta, turėtumėte gauti nepasirašytą APK failą `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Taip pat turėjo būti įdiegtas `apksigner` vykdomasis failas į `$ANDROID_HOME`. Dar kartą atnaujinkite `PATH`.

### 3. Sukurkite pasirašytą APK failą iš nepasirašyto

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Pereikite į savo namų aplanką ir sukurkite pasirašytą APK failą:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Dabar turite `app-full-release-signed.apk`, paruoštą įdiegti arba atnaujinti.
