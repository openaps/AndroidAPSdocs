# Інструкції зі збірки з командного рядка

```{admonition} For users familiar with the command-line and git
:class: note

Найпростіший спосіб зібрати AAPS – [Збірка в браузері](./BrowserBuild.md).
```

Перевірено на Fedora і Debian Linux; інші системи мають працювати з невеликими змінами.

## Вимоги

Мінімальну потрібну версію Java дивіться в [цій таблиці](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Встановіть відповідний пакет OpenJDK через системний менеджер пакетів. Наприклад, у Debian пакети мають назви на зразок `openjdk-21-jdk`. Він має містити програми `javac` і `keytool`.

Завантажте пакет *Android Command line tools* зі [сторінки Android Studio](https://developer.android.com/studio#command-line-tools-only). Сама Android Studio не потрібна. Більше про встановлення цього пакета читайте в [документації sdkmanager](https://developer.android.com/tools/sdkmanager). Після встановлення пакета вручну задайте дві [змінні середовища](https://developer.android.com/tools/variables): `ANDROID_HOME` і `PATH`. Наостанок виконайте `sdkmanager --licenses`, щоб завершити встановлення.

## Збірка AAPS за допомогою Gradle wrapper

### 1. Створіть файл Java keystore для підпису AAPS

Якщо у вас уже є файл keystore для підпису AAPS, використайте його.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Файл keystore і його пароль потрібні вам щоразу, коли ви оновлюєте AAPS.

### 2. Скомпілюйте файл APK AAPS

Клонуйте [git-репозиторій](https://github.com/nightscout/AndroidAPS), якщо ви ще цього не зробили. AAPS використовує гілку master для останньої стабільної версії; переконайтеся, що ви на тій гілці чи тезі, яку хочете зібрати.

Виконайте `./gradlew :app:assembleFullRelease` у репозиторії. Команда сама завантажує Gradle і залежності, а потім компілює код. Якщо збірка вдалася, у вас буде непідписаний APK у `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Також у `$ANDROID_HOME` має бути встановлена програма `apksigner`. Знову оновіть свою змінну `PATH`.

### 3. Створіть підписаний файл APK з непідписаного

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Перейдіть у свій домашній каталог і створіть підписаний файл APK:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Тепер у вас є `app-full-release-signed.apk`, готовий до встановлення або оновлення.
