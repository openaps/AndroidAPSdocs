# Návod na sestavení z příkazové řádky

```{admonition} For users familiar with the command-line and git
:class: note

Nejjednodušší způsob, jak sestavit AAPS, je alternativa [Sestavení v prohlížeči](./BrowserBuild.md).
```

Vyzkoušeno na Linuxu Fedora a Debian, jiné systémy by měly fungovat s malými úpravami.

## Požadavky

Minimální potřebnou verzi Javy najdete v [této tabulce](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Nainstalujte odpovídající balíček OpenJDK pomocí správce balíčků vašeho systému. Například v Debianu mají balíčky názvy jako `openjdk-21-jdk`. Měl by obsahovat programy `javac` a `keytool`.

Stáhněte balíček *Android Command line tools* ze [stránky Android Studia](https://developer.android.com/studio#command-line-tools-only). Samotné Android Studio není potřeba. Více informací o instalaci tohoto balíčku najdete v [dokumentaci sdkmanager](https://developer.android.com/tools/sdkmanager). Po instalaci balíčku musíte ručně nastavit dvě [proměnné prostředí](https://developer.android.com/tools/variables): `ANDROID_HOME` a `PATH`. Nakonec instalaci dokončete příkazem `sdkmanager --licenses`.

## Sestavení AAPS pomocí Gradle wrapperu

### 1. Vytvořte soubor úložiště klíčů Java pro podepisování AAPS

Pokud už soubor úložiště klíčů pro podepisování AAPS máte, použijte ho znovu.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Soubor úložiště klíčů a heslo budete potřebovat při každé aktualizaci AAPS.

### 2. Zkompilujte soubor APK aplikace AAPS

Pokud jste to ještě neudělali, naklonujte [git repozitář](https://github.com/nightscout/AndroidAPS). AAPS používá větev master pro nejnovější stabilní verzi; ujistěte se, že jste na větvi nebo tagu, které chcete sestavit.

V repozitáři spusťte `./gradlew :app:assembleFullRelease`. Příkaz automaticky stáhne Gradle a závislosti a potom zkompiluje kód. Když sestavení proběhne úspěšně, měli byste mít nepodepsaný APK v `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Měl by se také nainstalovat program `apksigner` do `$ANDROID_HOME`. Znovu aktualizujte proměnnou `PATH`.

### 3. Vytvořte z nepodepsaného souboru APK podepsaný

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Přejděte do svého domovského adresáře a vytvořte podepsaný soubor APK:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Nyní máte `app-full-release-signed.apk` připravený k instalaci nebo aktualizaci.
