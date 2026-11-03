# Komut satırı ile oluşturma talimatları

```{admonition} For users familiar with the command-line and git
:class: note

AAPS'i oluşturmanın en basit yolu [Tarayıcı ile oluşturma](./BrowserBuild.md) seçeneğidir.
```

Fedora ve Debian Linux ile test edilmiştir; diğer sistemler de küçük değişikliklerle çalışmalıdır.

## Requirements

Gereken en düşük Java sürümünü [bu tablodan](#Building-APK-recommended-specification-of-computer-for-building-apk-file) öğrenin. Uygun OpenJDK paketini sistemin paket yöneticisiyle yükleyin. Örneğin Debian'da paketlerin adı `openjdk-21-jdk` gibidir. Paket `javac` ve `keytool` programlarını içermelidir.

*Android Command line tools* paketini [Android Studio sayfasından](https://developer.android.com/studio#command-line-tools-only) indirin. Android Studio'nun kendisi gerekmez. Bu paketin yüklenmesiyle ilgili daha fazla bilgi [sdkmanager belgelerinde](https://developer.android.com/tools/sdkmanager) bulunur. Paket yüklendikten sonra iki [ortam değişkenini](https://developer.android.com/tools/variables) elle ayarlamalısınız: `ANDROID_HOME` ve `PATH`. Son olarak yüklemeyi bitirmek için `sdkmanager --licenses` komutunu çalıştırın.

## AAPS'i Gradle wrapper ile oluşturma

### 1. AAPS'i imzalamak için bir Java anahtar deposu dosyası oluşturun

AAPS'i imzalamak için zaten bir anahtar deposu dosyanız varsa onu yeniden kullanın.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

AAPS'i her güncellediğinizde anahtar deposu dosyasına ve parolasına ihtiyacınız olacak.

### 2. AAPS APK dosyasını derleyin

Henüz klonlamadıysanız [git deposunu](https://github.com/nightscout/AndroidAPS) klonlayın. AAPS en son kararlı sürüm için master dalını kullanır; oluşturmak istediğiniz dalda/etikette (branch/tag) olduğunuzdan emin olun.

Depo klasöründe `./gradlew :app:assembleFullRelease` komutunu çalıştırın. Komut Gradle'ı ve bağımlılıkları kendisi indirir, sonra kodu derler. Oluşturma başarılı olduğunda `app/build/outputs/apk/full/release/app-full-release-unsigned.apk` konumunda imzalanmamış bir APK olmalıdır. Ayrıca `$ANDROID_HOME` içine bir `apksigner` programı da yüklemiş olmalıdır. `PATH` değişkeninizi yeniden güncelleyin.

### 3. İmzalanmamış APK'dan imzalı bir APK dosyası oluşturun

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Ana dizininize geçin ve imzalı bir APK dosyası oluşturun:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Artık `app-full-release-signed.apk` dosyanız yükleme veya güncelleme için hazır.
