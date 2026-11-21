# Инструкция по сборке из командной строки

```{admonition} For users familiar with the command-line and git
:class: note

The simplest option to build AAPS is the [Browser build](./BrowserBuild.md) alternative.
```

Проверено на Fedora и Debian Linux, на других системах все должно работать с минимальными изменениями.

## Что потребуется:

Минимальную нужную версию Java смотрите в [этой таблице](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Установите подходящий пакет OpenJDK с помощью системного менеджера пакетов. Например, в Debian пакеты называются так: `openjdk-21-jdk`. В нем должны быть программы `javac` и `keytool`.

Скачайте пакет *Android Command line tools* со [страницы Android Studio](https://developer.android.com/studio#command-line-tools-only). Сама программа Android Studio не нужна. Подробнее об установке этого пакета написано в [документации sdkmanager](https://developer.android.com/tools/sdkmanager). После установки пакета нужно вручную задать две [переменные среды](https://developer.android.com/tools/variables): `ANDROID_HOME` и `PATH`. В конце выполните `sdkmanager --licenses`, чтобы завершить установку.

## Сборка AAPS с помощью Gradle wrapper

### 1. Создайте файл хранилища ключей Java для подписи AAPS

Если у вас уже есть файл хранилища ключей для подписи AAPS, используйте его снова.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Файл хранилища ключей и пароль понадобятся вам при каждом обновлении AAPS.

### 2. Скомпилируйте APK-файл AAPS

Клонируйте [git-репозиторий](https://github.com/nightscout/AndroidAPS), если вы еще этого не сделали. AAPS uses the master branch for the latest stable version; ensure you are on the branch/tag you want to build.

Выполните `./gradlew :app:assembleFullRelease` в папке репозитория. Команда сама скачает Gradle и зависимости, а затем скомпилирует код. Если сборка прошла успешно, у вас появится неподписанный APK-файл `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Также в `$ANDROID_HOME` должна быть установлена программа `apksigner`. Снова обновите переменную `PATH`.

### 3. Создайте подписанный APK-файл из неподписанного

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Перейдите в домашнюю папку и создайте подписанный APK-файл:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Теперь файл `app-full-release-signed.apk` готов к установке или обновлению.
