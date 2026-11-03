# Wear AAPS uygulamasını oluşturma

Wear OS akıllı saat için **AAPS** uygulaması (**Wear apk**, `aaps-wear-….apk`), **AAPS** telefon uygulamasından ayrı bir yükleme dosyasıdır. İkisine de ihtiyacınız var: telefon uygulaması döngüyü çalıştırır, saat uygulaması onun verilerini gösterir ve ona komut gönderebilir. Saat uygulaması telefondan yüklenir, bkz. [Wear OS saatinizde AAPS kurulumu](WearOsSmartwatch.md).

İki uygulama yalnızca birbirine uyduğunda birlikte çalışır:

- Telefonda ve saatte **aynı AAPS sürümü**.
- İki uygulamayı imzalamak için **aynı anahtar deposu**.

Bunu sağlamanın en basit yolu, iki uygulamayı **aynı anda**, aynı oluşturmada oluşturmaktır. Tarayıcı ile oluşturma bunu sizin için yapar: her oluşturma telefon apk'sını ve Wear apk'sını birlikte üretir. Android Studio veya komut satırı ile Wear apk'sını, telefon apk'sından hemen sonra ikinci bir adım olarak oluşturursunuz.

```{note}
Telefonunuzda **AAPS**'i zaten kullanıyorsunuz ama aynı oluşturmadan bir Wear apk'nız yok mu? İki uygulamayı aynı anahtar deposuyla yeniden oluşturun ve telefon uygulamasını da yeniden yükleyin. Aylar sonra veya farklı bir Android Studio sürümüyle oluşturulan bir Wear apk'sı büyük olasılıkla telefon uygulamasıyla uyumlu olmaz.
```

## Desteklenen Wear OS sürümleri

**AAPS**, **Wear OS 3.0, 3.2 veya 3.5** (Android 11, API düzeyi 30) **veya daha yeni** (Wear OS 4, 5 ve 6) sürümlü saatlerde çalışır. Wear OS 2 yüklü saatler desteklenmez.

```{warning}
AAPS saat arayüzleri, API düzeyi 30 ile 33 arasındaki (Wear OS 3.0, 3.2, 3.5 ve 4) Wear OS akıllı saatlerde kullanılabilir.<br>
Daha yeni Wear OS sürümleri AAPS saat arayüzlerini adım adım bozuyor. Bkz. [Wear OS saat arayüzü değişiklikleri](#wearos-watchface-changes) ve [Wear OS 5 sınırlamaları](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Wear apk'sını oluşturma yönteminizle alın

[AAPS'i oluşturmak](../SettingUpAaps/BuildingAaps.md) için kullandığınız yöntemin bölümünü izleyin.

(building-aaps-wear-os-browser)=

### Tarayıcı ile oluşturma (önerilir)

**Ek bir şey yapmanız gerekmez.** Her tarayıcı ile oluşturma, aynı kaynaktan ve aynı anahtar deposuyla iki dosya üretir:

- `aaps-….apk`: telefon uygulaması.
- `aaps-wear-….apk`: saat uygulaması.

Wear apk'sı, oluşturma için seçtiğiniz [varyanta](#browserbuild-variant) göre değişir: `fullRelease` **AAPS Wear** uygulamasını, `aapsclientRelease` **AAPSClient Wear** uygulamasını, `pumpcontrolRelease` **PumpControl Wear** uygulamasını verir. Her Wear uygulaması yalnızca kendine uyan telefon uygulamasıyla iletişim kurar.

Wear apk'sını nerede bulursunuz:

- **AAPS Builder**: oluşturma sayfasında **Artifacts** (oluşturulan dosyalar) bölümüne kaydırın ve telefon uygulamasının yanındaki `aaps-wear-….apk` dosyasını indirin. Bkz. [Adım 5 – Uygulamayı telefonunuza yükleyin](#aaps-builder-step5). Saat uygulamasını telefondan yüklüyorsanız (Wear Installer 2 veya Easy Fire Tools) dosyayı **AAPS** çalışan telefona indirin. ADB kullanıyorsanız bilgisayarınıza indirin.

  ![Telefon ve saat uygulamalarını içeren Artifacts](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Google Drive ile fork**: Google Drive'ınızı açın, `AAPS` klasörüne, ardından oluşturduğunuz sürümün klasörüne gidin. Bu klasörde telefon apk'sı ve Wear apk'sı bulunur, bkz. [Tarayıcı ile oluşturma – Adım 4: APK'yı oluşturun](#github-build-apk).

  ![Google Drive konumu](../images/update/CI/GitHubActions5.png)

Yedeklerinizde Wear apk'sını telefon apk'sıyla birlikte saklayın. **AAPS Builder** ile dosyalar oluşturma sayfasında yalnızca 14 gün kalır.

Sonraki adım: Wear apk'sını saate yükleyin, bkz. [Wear OS saatinizde AAPS kurulumu](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear apk'sı, telefon apk'sı gibi ikinci bir imzalı oluşturma olarak oluşturulur. Bunu telefon apk'sından hemen sonra, aynı Android Studio sürümü ve aynı anahtar deposuyla yapın.

- [Android Studio ile oluşturma](../SettingUpAaps/ComputerBuild.md) talimatlarını izleyin.
- "İmzalı AAPS APK'sını oluşturun" adımında [modül seçimine](#Building-APK-wearapk) geldiğinizde **`AndroidAPS.wear`** seçeneğini seçtiğinizden emin olun.

![Wear modülü](../images/Building-the-App/wear_build1.png)

**AAPS** Wear apk dosyasını oluşturmak için "**fullRelease**" seçeneğini seçin.

![Wear modülü](../images/Building-the-App/wear_build2.png)

İsterseniz açılır menüden bunun yerine **“pumpcontrolRelease”** seçeneğini de oluşturabilirsiniz. Bu sürüm pompayı yalnızca uzaktan kontrol etmenizi sağlar, döngü çalıştırmaz.

Sonraki adım: Wear apk'sını saate yükleyin, bkz. [Wear OS saatinizde AAPS kurulumu](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Android Studio ile oluşturmada sorun giderme

Tam **AAPS** uygulamasını (ve aslında her imzalı uygulamayı) oluştururken Android Studio aynı klasörde bir .json dosyası oluşturur. Bu durum, **AAPS** Wear uygulaması gibi bir sonraki imzalı uygulamayı oluşturmaya çalıştığınızda [kaydedilmemiş değişiklikler (uncommitted changes)](#troubleshooting_androidstudio-uncommitted-changes) hatalarına yol açar. Bunu çözmenin en hızlı yolu, tam AAPS uygulamasının oluşturulduğu klasöre gitmektir. Klasörünüz büyük olasılıkla şuna benzer:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

Gereksiz .json dosyasını silin veya klasörün dışına taşıyın. Ardından **AAPS** Wear uygulamasını yeniden oluşturmayı deneyin. Bu işe yaramazsa, daha ayrıntılı [sorun giderme kılavuzu](../GettingHelp/TroubleshootingAndroidStudio.md) soruna neden olan dosyayı bulmanıza yardımcı olur. Bu dosya anahtar deposu dosyanız da olabilir.

(building-aaps-wear-os-cli)=

### Komut satırı

[Komut satırı ile oluşturma talimatlarını](../SettingUpAaps/CLIBuild.md) izleyin ve derleme ile imzalama adımlarını `wear` modülü için aynı anahtar deposuyla tekrarlayın:

```sh
./gradlew :wear:assembleFullRelease
```

İmzalanmamış Wear apk'sı `wear/build/outputs/apk/full/release/` altına yazılır. Onu telefon apk'sı gibi `apksigner` ile imzalayın, ardından saate yükleyin, bkz. [Wear OS saatinizde AAPS kurulumu](WearOsSmartwatch.md).
