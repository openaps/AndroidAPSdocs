# Android Studio ile güncelleme

## İndirmek yerine kendiniz oluşturun

Tıbbi cihazlarla ilgili düzenlemeler nedeniyle **AAPS** indirilmeye hazır olarak sunulmaz. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../UsefulLinks/FAQ.md) bakın.

```{note}
**AAPS**'i yeni bir bilgisayarda oluşturmak istiyorsanız: yedek anahtar deposu dosyanızı yeni bilgisayara kopyalayın. Ardından bu kılavuz yerine [İlk **AAPS** oluşturma yöntemini](../SettingUpAaps/BuildingAaps.md) izleyin. Tek fark şudur: yeni bir anahtar deposu oluşturmak yerine yeni bilgisayara kopyaladığınız anahtar deposunu seçebilirsiniz.
```

## Android Studio ile AAPS'in yeni bir sürümüne güncellemeye genel bakış

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Sorun yaşarsanız [Android Studio'da Sorun Giderme](../GettingHelp/TroubleshootingAndroidStudio.md) ayrı sayfasına bakın.

### Export your settings

Telefonunuzdaki mevcut **AAPS** sürümünden ayarlarınızı dışa aktarın. Belki gerekmez ama tedbirli olmak daha iyidir.

Bunu nasıl yapacağınızı hatırlamıyorsanız [Ayarları dışa ve içe aktarma](ExportImportSettings.md) sayfasına bakın.

### Android Studio sürümünüzü kontrol edin

Gereken en düşük sürüm [Oluşturma talimatlarında](#Building-APK-recommended-specification-of-computer-for-building-apk-file) yazılıdır. Sürümünüz daha eskiyse lütfen [önce Android Studio'yu güncelleyin](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### Update your local copy

* Mevcut AAPS projenizi Android Studio ile açın. You might need to select your project. AAPS projesine (çift) tıklayın.

  ![Android Studio - Proje seçme](../images/update/01_ProjectSelection.png)

* Android Studio menü çubuğunda Git -> Fetch seçin

   ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* Sağ alt köşede Fetch işleminin başarılı olduğunu bildiren bir mesaj göreceksiniz.

   ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* Şimdi menü çubuğunda Git -> Pull seçin

   ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Tüm seçenekleri olduğu gibi bırakın (origin/master) ve Pull seçin

   ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* İndirme sürerken bekleyin. Bunu alt çubukta bilgi olarak göreceksiniz. Tamamlandığında, bir başarı mesajı göreceksiniz.

  ```{note}
  Güncellenen dosyalar farklı olabilir! Bu bir sorun olduğunu göstermez.
  ```

   ![Android Studio - Pull başarılı](../images/update/06_GitPullSuccess.png)

* Bazı bağımlılıkları indirmek için Gradle Sync çalışacaktır. Tamamlanana kadar bekleyin.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### JVM sürümünü kontrol edin

Bu kontrol özellikle aynı bilgisayarda daha önce **AAPS**'in eski bir sürümünü oluşturduysanız önerilir.

Şimdi oluşturduğunuz **AAPS** sürümü için gereken JVM sürümünü [Oluşturma talimatlarında](#Building-APK-recommended-specification-of-computer-for-building-apk-file) kontrol edin. Ardından doğru sürümü kullandığınızdan emin olmak için [Incompatible Gradle JVM](#incompatible-gradle-jvm) bölümündeki adımları izleyin.

(Update-to-new-version-build-the-signed-apk)=
### İmzalı APK'yı oluşturun

Kaynak kodunuz artık yayınlanmış güncel sürümdür ve tüm ön koşullar kontrol edilmiştir. Şimdi imzalı apk'yı [imzalı apk oluşturma bölümünde](#Building-APK-generate-signed-apk) anlatıldığı gibi oluşturma zamanı.

(Update-to-new-version-transfer-and-install)=

### Apk'yı aktarın ve yükleyin
Yükleyebilmek için apk'yı telefonunuza aktarmanız gerekir.

```{note}
Oluşturmayı Android Studio'da aynı mevcut anahtar deposuyla yaptıysanız telefonunuzdaki mevcut uygulamayı kaldırmanız gerekmez. Apk'yi kurduğunuzda, güncellemeleri yüklemek için talimatları izleyin.
Diğer durumlarda, örneğin imzalı apk'nız için Android Studio'da yeni bir anahtar deposu oluşturduysanız, apk'yı yüklemeden önce eski uygulamayı silmeniz gerekir. **Ayarlarınızı mutlaka dışa aktarın!**
```

[AAPS'i aktarma ve yükleme](../SettingUpAaps/TransferringAndInstallingAaps.md) talimatlarına bakın. Google'ın [Android geliştirici doğrulaması](#android-developer-verification) uygulanıyorsa (Eylül 2026'dan itibaren, ülkenize bağlı olarak), APK dosyasına dokunmak yerine [ADB](#android-developer-verification-adb) ile yükleyin.

[Buradan](#Update-to-new-version-check-aaps-version-on-phone) devam edin.

(update-computer-build-troubleshooting)=

## Troubleshooting

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Ardından sorununuzun [Android Studio'da Sorun Giderme](../GettingHelp/TroubleshootingAndroidStudio.md) ayrı sayfasında zaten anlatılıp anlatılmadığını kontrol edin.

Daha fazla yardıma ihtiyacınız olursa lütfen [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) veya [Discord](https://discord.gg/4fQUWHZ4Mw) üzerindeki diğer **AAPS** kullanıcılarına ulaşın.