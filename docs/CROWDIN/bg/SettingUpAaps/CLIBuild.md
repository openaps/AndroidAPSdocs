# Инструкции за компилиране от командния ред

```{admonition} For users familiar with the command-line and git
:class: note

Най-лесният начин за компилиране на AAPS е [Компилиране в браузъра](./BrowserBuild.md).
```

Тествано с Fedora и Debian Linux; други системи би трябвало да работят с малки промени.

## Изисквания

Вижте минималната нужна версия на Java в [тази таблица](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Инсталирайте подходящия пакет OpenJDK с мениджъра на пакети на системата. Например в Debian пакетите се казват `openjdk-21-jdk`. Той трябва да съдържа изпълнимите файлове `javac` и `keytool`.

Изтеглете пакета *Android Command line tools* от [страницата на Android Studio](https://developer.android.com/studio#command-line-tools-only). Самото Android Studio не е нужно. Повече информация за инсталирането на този пакет ще намерите в [документацията на sdkmanager](https://developer.android.com/tools/sdkmanager). След като пакетът е инсталиран, трябва ръчно да зададете две [променливи на средата](https://developer.android.com/tools/variables): `ANDROID_HOME` и `PATH`. Накрая изпълнете `sdkmanager --licenses`, за да завършите инсталирането.

## Компилиране на AAPS с Gradle wrapper

### 1. Създайте файл на хранилище за ключове (Java keystore) за подписване на AAPS

Ако вече имате файл на хранилище за ключове за подписване на AAPS, използвайте него.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Ще ви трябват файлът на хранилището за ключове и паролата му всеки път, когато актуализирате AAPS.

### 2. Компилирайте APK файла на AAPS

Клонирайте [git хранилището (repository)](https://github.com/nightscout/AndroidAPS), ако още не сте го клонирали. AAPS използва клона master за най-новата стабилна версия; уверете се, че сте на клона/тага, който искате да компилирате.

Изпълнете `./gradlew :app:assembleFullRelease` в хранилището. Командата автоматично изтегля Gradle и зависимостите, след което компилира кода. Когато компилирането успее, трябва да имате неподписан APK в `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Трябва също да е инсталиран изпълнимият файл `apksigner` в `$ANDROID_HOME`. Обновете отново своята променлива `PATH`.

### 3. Създайте подписан APK файл от неподписания

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Отидете в домашната си папка и създайте подписан APK файл:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Сега имате `app-full-release-signed.apk`, готов за инсталиране или обновяване.
