(troubleshooting_androidstudio-troubleshooting-android-studio)=
# Android Studio'da Sorun Giderme

(troubleshooting_androidstudio-lost-keystore)=
## Kayıp keystore
AndroidAPS'yi güncellerken aynı keystore kullanırsanız, akıllı telefonunuzdaki önceki sürümü kaldırmanız gerekmez. Bu nedenle keystore'u bir kaydetme yerinde saklamanız önerilir.

Öncekinden farklı bir keystore'la imzalanmış apk'yı yüklemeye çalışırsanız, yüklemenin başarısız olduğuna dair bir hata mesajı alırsınız!

Eski keystore'unuzu veya parolasını artık bulamıyorsanız, aşağıdakileri yapın:

1. Telefonunuzdaki [Ayarları dışa aktarın](ExportImportSettings-export-settings).
2. Ayarlar dosyasını telefonunuzdan harici bir konuma kopyalayın veya yükleyin (örn. bilgisayarınız, bulut depolama hizmetiniz...).
4. [Güncelleme kılavuzunda](../Installing-AndroidAPS/Update-to-new-version.md) açıklandığı gibi yeni sürümün imzalı apk'sını oluşturun ve telefonunuza aktarın.
5. Telefonunuzdaki önceki AAPS sürümünü kaldırın.
6. Telefonunuza yeni AAPS sürümünü yükleyin.
7. Hedeflerinizi ve yapılandırmanızı geri yüklemek için [ayarları içe aktarın](ExportImportSettings-import-settings).
8. Pil optimizasyon seçeneklerinizi kontrol edin ve tekrar devre dışı bırakın.

   Bunları telefonunuzda bulamazsanız, harici depolama biriminden telefonunuza kopyalayın.
8. Döngü yapmaya devam edin.

## Gradle Sync başarısız oldu
Gradle Synchronize çeşitli nedenlerle başarısız olabilir. Gradle senkronizasyonunun başarısız olduğunu söyleyen bir mesaj aldığınızda, Android Studio'nun altındaki "Oluştur" sekmesini (1) açın ve hangi hata mesajının (2) görüntülendiğini kontrol edin.

  ![Gradle Başarısız](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Bunlar olağan gradle senkronizasyon hatalarıdır:
* [Uncommitted changes](troubleshooting_androidstudio-uncommitted-changes)
* [No cached version of ... available](troubleshooting_androidstudio-could-not-resolve-no-cached-version)
* [Android Gradle requires Java 11 to run](troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)

*Önemli*: Sorununuzla ilgili talimatları izledikten sonra, [gradle sync](troubleshooting_androidstudio-gradle-resync)'i yeniden tetiklemeniz gerekir.

(troubleshooting_androidstudio-uncommitted-changes)=
### Uncommitted changes

Şayet böyle bir hata mesajı alırsanız

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Adım 1 - Git kurulumunu kontrol edin
  * Android Studio'nun altındaki terminal sekmesini (1) açın ve aşağıdaki metni kopyalayın ve terminale yapıştırın veya yazın.
    ```
    git --version
    ```

    ![Gradle Git Sürümü](../images/studioTroubleshooting/03_GitVersion.png)

    Not: Git ve version arasında bir boşluk ve iki tire vardır!

  * Yukarıdaki ekran görüntüsünde görebileceğiniz gibi, hangi git sürümünün kurulu olduğunu söyleyen bir mesaj almalısınız. Bu durumda, [2. Adım](troubleshooting_androidstudio-step-2-check-for-uncommitted-changes)'a gidin.

  * Diyen bir mesaj alırsanız
    ```
    Git: command not found
    ```
    git kurulumunuz doğru değil.

  * [Git kurulumunu kontrol et](git-install-check-git-settings-in-android-studio)

  * windows'ta ve git yeni kurulduysa, kurulumdan sonra git'i global olarak kullanılabilir hale getirmek için bilgisayarınızı yeniden başlatmanız gerekir

  * Git kuruluysa, yeniden başlattınız (Windows'taysa) ve git hala bulunamadı mesajı alıyorsanız:

  * Bilgisayarınızda "git.exe" dosyasını arayın.

    Hangi dizinde olduğunu kendiniz not edin.

  * Pencerelerde Ortam değişkenlerine gidin, "PATH" değişkenini seçin ve düzenle'ye tıklayın. Git kurulumunuzu bulduğunuz dizini ekleyin.

  * Kaydedin ve çıkın.

  * Android Studio tekrar başlatın.

#### Adım 2: Taahhüt edilmemiş değişiklikleri kontrol edin.

  * Android Studio'da: soldaki "Commit" sekmesini (1) açın. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Orada bir "Default changeset" (2) veya "Unversioned files" (3) görebilirsiniz:

    * "Default changeset" için, muhtemelen gradle'ı güncellediniz veya dosya içeriklerinden bazılarını yanlışlıkla değiştirdiniz.

    * "Default Changeset" üzerine sağ tıklayın ve "Rollback" ı seçin

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Dosyalar tekrar Git sunucusundan alınır. Commit sekmesinde başka bir değişiklik yoksa, [3. Adım](troubleshooting_androidstudio-step-3-gradle-resync)'a gidin.

  * "Unversioned Files"ı görüyorsanız, başka bir yerde daha iyi olması gereken dosyaları kaynak kod dizininizde saklamış olabilirsiniz, örn. keystore dosyanız.

    * Bu dosyayı bir kaydetme yerine taşımak veya kesmek ve yapıştırmak için bilgisayarınızdaki normal dosya gezgininizi kullanın.

    * Dosyanın artık AndroidAPS dizininde saklanmadığından emin olmak için Android Studio'ya geri dönün ve Commit sekmesindeki Yenile düğmesine (4) tıklayın.

      Commit sekmesinde başka bir değişiklik yoksa, [3. Adım](troubleshooting_androidstudio-step-3-gradle-resync)'a gidin.


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Adım 3 - Resync Gradle (tekrar)

[Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)'deki talimatları izleyin.

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Android Gradle eklentisinin çalışması için Java 11 gerekir

  Bu hata mesajıyla karşılaşabilirsiniz:

  ![Android Gradle eklentisinin çalışması için Java 11 gerekir](../images/studioTroubleshooting/11_GradleJDK.png)

  Gradle ayarlarını açmak için "Gradle Settings" (1) üzerine tıklayın.

  "Gradle Settings" bağlantınız yoksa, sağ kenardaki Gradle Sekmesini (1) seçerek Gradle ayarlarını manuel olarak açın, araçlar simgesini (2) ve orada 'Gradle Settings' öğesini seçin (3).

  ![Gradle Ayarları](../images/studioTroubleshooting/09_GradleSettings.png)

  Gradle ayarları iletişim kutusunu açtığınızda, "Gradle JDK" da seçenekleri (1) açın ve "Gömülü JDK sürümü"nü (2) seçin.

  ![Gradle Ayarları](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Ayarlar iletişim kutusunu kaydetmek ve kapatmak için "Tamam"a basın.

  *Önemli*: "Gradle JDK" ayarını görmüyorsanız, Android Studio'yu güncellememiş olabilirsiniz. Android Studio 2021.1.1 Bumblebee) veya daha yenisini kullandığınızdan emin olun.

  Şimdi bir [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync) tetiklemeniz gerekiyor

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Çözülemedi/Önbelleğe alınmış sürüm yok

  Bu hata mesajını alabilirsiniz:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Sağ tarafta Gradle sekmesini (1) açın.

    (2)'de gösterilen düğmenin Seçili *OLMADIĞINDAN* emin olun.

    ![Gradle Çevrimdışı Modu](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Şimdi bir [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync) tetiklemeniz gerekiyor

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Daemon işlemi başlatılamıyor

  Böyle bir hata mesajı görürseniz, muhtemelen Windows 10 32 bit sistem kullanıyorsunuzdur. Bu, Android Studio 3.5.1 ve üstü tarafından desteklenmez ve ne yazık ki AAPS geliştiricisinin bu konuda yapabileceği hiçbir şey yoktur.

  Windows 10 kullanıyorsanız 64 bit işletim sistemi kullanmanız gerekir.

  İnternette 32 bit mi yoksa 64 bit mi işletim sisteminiz olduğunu nasıl belirleyeceğinize dair birçok kılavuz var - ör. [bu web sayfası](https://www.howtogeek.com/howto/21726/how-do-i -know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  Hala Gradle senkronizasyonunun başarısız olduğu mesajını görüyorsanız, şimdi "Tekrar dene" Bağlantısını seçin.  ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Artık bir mesaj görmüyorsanız, bunu manuel olarak tetikleyebilirsiniz:

  * Android Studio'nun sağ kenarındaki Gradle sekmesini (1) açın.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * AndroidAPS'ye sağ tıklayın (2)

  * "Reload Gradle Project" üzerine tıklayın (3)

## 0 yapı varyantı ile başarıyla İmzalı APK oluşturuldu

İmzalı apk'yi oluşturduğunuzda, oluşturmanın başarılı olduğu bildirimini alabilirsiniz, ancak oluşturulduğunda 0 derleme varyantının olduğu söylenmektedir:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Bu yanlış bir uyarıdır. Oluşturmak için seçtiğiniz "Hedef klasör" dizinini kontrol edin (adım [İmzalı APK Oluştur](Building-APK-generate-signed-apk)) ve oluşturulan apk'yı orada bulacaksınız!


## Uygulama, derleyici/kotlin uyarılarıyla oluşturuldu

Derlemeniz başarıyla tamamlandıysa ancak derleyici veya kotlin uyarıları alıyorsanız (sarı veya mavi ünlem işaretiyle gösterilir), bu uyarıları görmezden gelebilirsiniz.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Uygulamanız başarıyla oluşturuldu ve telefona aktarılabilir!


## Anahtar hatalarla oluşturuldu

İmzalı APK'yı oluşturmak için yeni bir anahtar deposu oluştururken, Windows'ta aşağıdaki hata mesajı görünebilir

![Anahtar hatalarla oluşturuldu](../images/AndroidStudio35SigningKeys.png)

Bu, Android Studio 3.5.1 ve Windowsa taşınan Java ortamı ile ilgili bir hata gibi görünüyor. Anahtar doğru bir şekilde oluşturuldu, ancak bir öneri yanlışlıkla bir hata olarak görüntüleniyor. Bu şu anda göz ardı edilebilir.


## AndroidAPS tarafından hiçbir CGM verisi alınmadı

* Yamalı Dexcom G6 uygulamasını kullanıyorsanız: Bu uygulama eski. Bunun yerine [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) uygulamasını kullanın.

* xDrip+ kullanıyorsanız: Alıcıyı [xDrip+ ayarlar sayfasında](xdrip-identify-receiver) açıklandığı gibi tanımlayın.


## Uygulama yüklenmedi

![phone app note installed](../images/Update_AppNotInstalled.png)

* “app-full-release.apk” dosyasını telefonunuza aktardığınızdan emin olun.
* Telefonunuzda "Uygulama yüklenmedi" mesajı görüntülenirse şu adımları izleyin:

1. [Ayarları dışa aktar](../Usage/ExportImportSettings) (telefonunuzda zaten yüklü olan AAPS sürümünde)
2. Telefonunuzdaki AAPS'i kaldırın.
3. Uçak modunu etkinleştir & bluetooth'u kapat.
4. Yeni sürümü yükleyin (“app-full-release.apk”)
5. [Ayarları içe aktarın](../Usage/ExportImportSettings)
6. Bluetooth'u tekrar açın ve uçak modunu devre dışı bırakın

## Uygulama yüklendi ancak eski sürüm

Uygulamayı başarıyla oluşturduysanız, telefonunuza aktardıysanız ve başarıyla yüklediyseniz ancak sürüm numarası aynı kaldıysa, güncellemeyi kaçırmış olabilirsiniz [yerel kopyanızı güncelleyin](Update-to-new-version-update-your-local-copy)

## Yukarıdakilerin hiçbiri işe yaramadı

Yukarıdaki ipuçlarından hiçbiri yardımcı olmadıysa, uygulamayı sıfırdan oluşturmayı düşünebilirsiniz:

1. [Ayarları dışa aktar](../Usage/ExportImportSettings) (telefonunuzda zaten yüklü olan AAPS sürümünde)

2. Anahtar parolanızı ve anahtar deposu parolanızı hazır bulundurun. Parolalarınızı unuttuysanız, bunları [burada](https://youtu.be/nS3wxnLgZOo) açıklandığı gibi proje dosyalarında bulmaya çalışabilirsiniz.

    Veya yeni bir anahtar deposu kullanabilirsiniz.

3. [Burada](Building-APK-download-androidaps-code) açıklandığı gibi sıfırdan uygulama oluşturun.

4. APK'yı başarıyla oluşturduğunuz zaman, telefonunuzdaki mevcut uygulamayı silin, yeni apk'yı telefonunuza aktarın ve yükleyin.
5. Hedeflerinizi ve ayarlarınızı geri yüklemek için tekrar [ayarları içe aktarın](../Usage/ExportImportSettings).
6. Pil optimizasyon seçeneklerinizi kontrol etmeli ve tekrar devre dışı bırakmalısınız.

## En kötü durum senaryosu

Uygulamayı sıfırdan oluşturmanız bile sorununuzu çözmezse, Android Studio'yu tamamen kaldırmayı deneyebilirsiniz. Bazı Kullanıcılar bunun sorunlarını çözdüğünü bildirdi.

**Android Studio ile ilişkili tüm dosyaları kaldırdığınızdan emin olun.** Android Studio'yu tüm gizli dosyalarla birlikte tamamen kaldırmazsanız, kaldırma işlemi mevcut dosyanızı çözmek yerine yeni sorunlara neden olabilir. Tam kaldırma kılavuzları online olarak bulunabilir,

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Daha sonra Android Studio'yu [burada](Building-APK-install-android-studio) açıklandığı gibi sıfırdan yükleyin.
