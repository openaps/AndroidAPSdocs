# Upute za izradu iz naredbenog retka

```{admonition} For users familiar with the command-line and git
:class: note

Najjednostavniji način izrade AAPS-a je [Izrada u pregledniku](./BrowserBuild.md).
```

Testirano na Fedori i Debian Linuxu. Drugi sustavi trebali bi raditi uz male prilagodbe.

## Preduvjeti

Najmanju potrebnu verziju Jave potražite u [ovoj tablici](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Instalirajte odgovarajući paket OpenJDK pomoću upravitelja paketa vašeg sustava. Na primjer, u Debianu se paketi zovu `openjdk-21-jdk`. Paket treba sadržavati programe `javac` i `keytool`.

Preuzmite paket *Android Command line tools* sa [stranice Android Studija](https://developer.android.com/studio#command-line-tools-only). Sam Android Studio nije potreban. Više informacija o instalaciji ovog paketa naći ćete u [dokumentaciji za sdkmanager](https://developer.android.com/tools/sdkmanager). Nakon instalacije paketa morate ručno postaviti dvije [varijable okruženja](https://developer.android.com/tools/variables): `ANDROID_HOME` i `PATH`. Na kraju pokrenite `sdkmanager --licenses` da završite instalaciju.

## Izrada AAPS-a pomoću Gradle wrappera

### 1. Izradite datoteku spremišta ključeva (Java keystore) za potpisivanje AAPS-a

Ako već imate datoteku spremišta ključeva za potpisivanje AAPS-a, upotrijebite nju.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Datoteka spremišta ključeva i lozinka trebat će vam pri svakom ažuriranju AAPS-a.

### 2. Prevedite (kompajlirajte) APK datoteku AAPS-a

Klonirajte [git repozitorij](https://github.com/nightscout/AndroidAPS) ako to već niste učinili. AAPS koristi granu master za najnoviju stabilnu verziju. Provjerite da ste na grani ili oznaci (tag) koju želite izraditi.

U repozitoriju pokrenite `./gradlew :app:assembleFullRelease`. Naredba sama preuzme Gradle i potrebne biblioteke, a zatim prevede kod. Kada izrada uspije, imat ćete nepotpisanu APK datoteku u `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Trebao je biti instaliran i program `apksigner` u `$ANDROID_HOME`. Ponovno ažurirajte varijablu `PATH`.

### 3. Izradite potpisanu APK datoteku iz nepotpisane

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Prijeđite u svoju početnu (home) mapu i izradite potpisanu APK datoteku:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Sada je `app-full-release-signed.apk` spreman za instalaciju ili nadogradnju.
