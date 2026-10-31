# Návod na zostavenie z príkazového riadku

```{admonition} For users familiar with the command-line and git
:class: note

Najjednoduchší spôsob zostavenia AAPS je [Zostavenie v prehliadači](./BrowserBuild.md).
```

Otestované na Linuxe Fedora a Debian, iné systémy by mali fungovať s malými úpravami.

## Požiadavky

Minimálnu potrebnú verziu Javy nájdete v [tejto tabuľke](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Nainštalujte vhodný balík OpenJDK pomocou správcu balíkov vášho systému. Napríklad v Debiane majú balíky názvy ako `openjdk-21-jdk`. Balík by mal obsahovať programy `javac` a `keytool`.

Stiahnite si balík *Android Command line tools* zo [stránky Android Studia](https://developer.android.com/studio#command-line-tools-only). Samotné Android Studio nie je potrebné. Viac informácií o inštalácii tohto balíka nájdete v [dokumentácii sdkmanager](https://developer.android.com/tools/sdkmanager). Po inštalácii balíka musíte ručne nastaviť dve [premenné prostredia](https://developer.android.com/tools/variables): `ANDROID_HOME` a `PATH`. Nakoniec spustite `sdkmanager --licenses`, aby sa inštalácia dokončila.

## Zostavenie AAPS pomocou Gradle wrappera

### 1. Vygenerujte súbor úložiska kľúčov Java na podpísanie AAPS

Ak už máte súbor úložiska kľúčov na podpisovanie AAPS, použite ho znova.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Súbor úložiska kľúčov a heslo budete potrebovať pri každej aktualizácii AAPS.

### 2. Skompilujte súbor AAPS APK

Ak ste ešte neklonovali [git repozitár](https://github.com/nightscout/AndroidAPS), naklonujte ho. AAPS používa vetvu master pre najnovšiu stabilnú verziu; uistite sa, že ste na vetve alebo značke (tag), ktorú chcete zostaviť.

V repozitári spustite `./gradlew :app:assembleFullRelease`. Automaticky stiahne Gradle a závislosti a potom skompiluje kód. Po úspešnom zostavení by ste mali mať nepodpísaný APK v `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Do `$ANDROID_HOME` by sa mal nainštalovať aj program `apksigner`. Znova aktualizujte premennú `PATH`.

### 3. Vytvorte podpísaný súbor APK z nepodpísaného

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Prejdite do svojho domovského priečinka a vytvorte podpísaný súbor APK:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Teraz máte `app-full-release-signed.apk` pripravený na inštaláciu alebo aktualizáciu.
