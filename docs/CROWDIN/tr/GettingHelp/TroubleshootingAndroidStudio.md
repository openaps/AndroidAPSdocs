(troubleshooting_androidstudio-troubleshooting-android-studio)=
# Android Studio'da Sorun Giderme

(troubleshooting_androidstudio-lost-keystore)=
## Kayıp keystore
If you use the same keystore when updating AAPS you do not have to uninstall the previous version on your smartphone. Bu nedenle keystore'u bir kaydetme yerinde saklamanız önerilir.

Öncekinden farklı bir keystore'la imzalanmış apk'yı yüklemeye çalışırsanız, yüklemenin başarısız olduğuna dair bir hata mesajı alırsınız!

Eski keystore'unuzu veya parolasını artık bulamıyorsanız, aşağıdakileri yapın:

1. [Export settings](../Maintenance/ExportImportSettings.md) on your phone.
2. Ayarlar dosyasını telefonunuzdan harici bir konuma kopyalayın veya yükleyin (örn. bilgisayarınız, bulut depolama hizmetiniz...).
4. Generate signed apk of new version as described on the [Update guide](../Maintenance/UpdateToNewVersion) and transfer it to your phone.
5. Telefonunuzdaki önceki AAPS sürümünü kaldırın.
6. Telefonunuza yeni AAPS sürümünü yükleyin.
7. [Import settings](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps) to restore your objectives and configuration.

   Bunları telefonunuzda bulamazsanız, harici depolama biriminden telefonunuza kopyalayın.

8. Pil optimizasyon seçeneklerinizi kontrol edin ve tekrar devre dışı bırakın.
9. Keep on looping.

## Gradle Sync başarısız oldu
Gradle Synchronize çeşitli nedenlerle başarısız olabilir. Gradle senkronizasyonunun başarısız olduğunu söyleyen bir mesaj aldığınızda, Android Studio'nun altındaki "Oluştur" sekmesini (1) açın ve hangi hata mesajının (2) görüntülendiğini kontrol edin.

  ![Gradle Başarısız](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Bunlar olağan gradle senkronizasyon hatalarıdır:
* [Uncommitted changes](#uncommitted-changes)
* [No cached version of ... available](#could-not-resolveno-cached-version)
* [Incompatible Gradle JVM](#incompatible-gradle-jvm)
* [Incompatible version of the Android Gradle plugin](#incompatible-version-of-android-gradle-plugin)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](#gradle-resync) again.

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

  * Yukarıdaki ekran görüntüsünde görebileceğiniz gibi, hangi git sürümünün kurulu olduğunu söyleyen bir mesaj almalısınız. In this case, go to [Step 2](#troubleshooting-android-studio-check-for-uncommitted-changes).

  * Diyen bir mesaj alırsanız
    ```
    Git: command not found
    ```
    git kurulumunuz doğru değil.

  * [Git kurulumunu kontrol et](#BuildingAaps-steps-for-installing-git)

  * windows'ta ve git yeni kurulduysa, kurulumdan sonra git'i global olarak kullanılabilir hale getirmek için bilgisayarınızı yeniden başlatmanız gerekir

  * Git kuruluysa, yeniden başlattınız (Windows'taysa) ve git hala bulunamadı mesajı alıyorsanız:

  * Bilgisayarınızda "git.exe" dosyasını arayın.

    Hangi dizinde olduğunu kendiniz not edin.

  * Pencerelerde Ortam değişkenlerine gidin, "PATH" değişkenini seçin ve düzenle'ye tıklayın. Git kurulumunuzu bulduğunuz dizini ekleyin.

  * Kaydedin ve çıkın.

  * Android Studio tekrar başlatın.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### Adım 2: Taahhüt edilmemiş değişiklikleri kontrol edin.

  * Android Studio'da: soldaki "Commit" sekmesini (1) açın. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Orada bir "Default changeset" (2) veya "Unversioned files" (3) görebilirsiniz:

    * "Default changeset" için, muhtemelen gradle'ı güncellediniz veya dosya içeriklerinden bazılarını yanlışlıkla değiştirdiniz.

    * "Default Changeset" üzerine sağ tıklayın ve "Rollback" ı seçin

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Dosyalar tekrar Git sunucusundan alınır. If there are no other changes in the commit tab, go to [Step 3](#gradle-resync).

  * "Unversioned Files"ı görüyorsanız, başka bir yerde daha iyi olması gereken dosyaları kaynak kod dizininizde saklamış olabilirsiniz, örn. keystore dosyanız.

    * Bu dosyayı bir kaydetme yerine taşımak veya kesmek ve yapıştırmak için bilgisayarınızdaki normal dosya gezgininizi kullanın.

    * Go back to Android Studio and click the Refresh button (4) within the Commit tab to make sure the file is not stored in the AAPS directory anymore.

      If there are no other changes in the commit tab, go to [Step 3](#gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### Adım 3 - Resync Gradle (tekrar)

Follow the instructions at [Gradle Resync](#gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png) If you experience the following error message, you need to download a correct JVM version before you can try again:
* Open the gradle view by clicking on the elephant (1) on the right side of Android Studio and open the settings (2) and select **Gradle Settings** (3):

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

* Open the **Gradle JDK** options, then select **Download JDK...**

![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

* At **Version** (1), you need to select **17**. Then select the **JetBrains Runtime** from the **Vendor** (2) options. Do not change the **Location** (3).

![Select JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

* Close the **Settings** dialog with **OK**.
* You now need to restart the Gradle Sync. Follow the instructions at [Gradle Resync](#gradle-resync).

(incompatible-version-of-android-gradle-plugin)=
### Incompatible version of Android Gradle plugin

  If you experience the following error message

  ![Incompatible version of Android Gradle plugin](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  You are using an outdated version of Android Studio. In the menu, go to Help > Check for updates and install any updates of Android Studio and its plugins that are found.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Çözülemedi/Önbelleğe alınmış sürüm yok

  Bu hata mesajını alabilirsiniz:

![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Sağ tarafta Gradle sekmesini (1) açın.

    (2)'de gösterilen düğmenin Seçili *OLMADIĞINDAN* emin olun.

    ![Gradle Çevrimdışı Modu](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Now you need to trigger a [Gradle Resync](#gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Daemon işlemi başlatılamıyor

  Böyle bir hata mesajı görürseniz, muhtemelen Windows 10 32 bit sistem kullanıyorsunuzdur. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about!

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle Resync

  Hala Gradle senkronizasyonunun başarısız olduğu mesajını görüyorsanız, şimdi "Tekrar dene" Bağlantısını seçin.  ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  Artık bir mesaj görmüyorsanız, bunu manuel olarak tetikleyebilirsiniz:

  * Android Studio'nun sağ kenarındaki Gradle sekmesini (1) açın.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Right-click on AAPS (2)

  * "Reload Gradle Project" üzerine tıklayın (3)

## 0 yapı varyantı ile başarıyla İmzalı APK oluşturuldu

İmzalı apk'yi oluşturduğunuzda, oluşturmanın başarılı olduğu bildirimini alabilirsiniz, ancak oluşturulduğunda 0 derleme varyantının olduğu söylenmektedir:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Bu yanlış bir uyarıdır. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](#Building-APK-generate-signed-apk)) and you will find the generated apk there!


## Uygulama, derleyici/kotlin uyarılarıyla oluşturuldu

Derlemeniz başarıyla tamamlandıysa ancak derleyici veya kotlin uyarıları alıyorsanız (sarı veya mavi ünlem işaretiyle gösterilir), bu uyarıları görmezden gelebilirsiniz.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Uygulamanız başarıyla oluşturuldu ve telefona aktarılabilir!


## Anahtar hatalarla oluşturuldu

İmzalı APK'yı oluşturmak için yeni bir anahtar deposu oluştururken, Windows'ta aşağıdaki hata mesajı görünebilir

![Anahtar hatalarla oluşturuldu](../images/AndroidStudio35SigningKeys.png)

Bu, Android Studio 3.5.1 ve Windowsa taşınan Java ortamı ile ilgili bir hata gibi görünüyor. Anahtar doğru bir şekilde oluşturuldu, ancak bir öneri yanlışlıkla bir hata olarak görüntüleniyor. Bu şu anda göz ardı edilebilir.


## No CGM data is received by AAPS

* Yamalı Dexcom G6 uygulamasını kullanıyorsanız: Bu uygulama eski. Use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](#xdrip-identify-receiver).


## Uygulama yüklenmedi

![phone app note installed](../images/Update_AppNotInstalled.png)

* “app-full-release.apk” dosyasını telefonunuza aktardığınızdan emin olun.
* Telefonunuzda "Uygulama yüklenmedi" mesajı görüntülenirse şu adımları izleyin:

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)
2. Telefonunuzdaki AAPS'i kaldırın.
3. Uçak modunu etkinleştir & bluetooth'u kapat.
4. Yeni sürümü yükleyin (“app-full-release.apk”)
5. [Ayarları içe aktarın](../Maintenance/ExportImportSettings.md)
6. Bluetooth'u tekrar açın ve uçak modunu devre dışı bırakın

## Uygulama yüklendi ancak eski sürüm

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](#Update-to-new-version-update-your-local-copy)

## Yukarıdakilerin hiçbiri işe yaramadı

Yukarıdaki ipuçlarından hiçbiri yardımcı olmadıysa, uygulamayı sıfırdan oluşturmayı düşünebilirsiniz:

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)

2. Anahtar parolanızı ve anahtar deposu parolanızı hazır bulundurun. Parolalarınızı unuttuysanız, bunları [burada](https://youtu.be/nS3wxnLgZOo) açıklandığı gibi proje dosyalarında bulmaya çalışabilirsiniz.

    Veya yeni bir anahtar deposu kullanabilirsiniz.

3. Build app from scratch as described [here](#Building-APK-download-AAPS-code).

4. APK'yı başarıyla oluşturduğunuz zaman, telefonunuzdaki mevcut uygulamayı silin, yeni apk'yı telefonunuza aktarın ve yükleyin.
5. [Import settings](../Maintenance/ExportImportSettings.md) again to restore your objectives and settings.
6. Pil optimizasyon seçeneklerinizi kontrol etmeli ve tekrar devre dışı bırakmalısınız.

## En kötü durum senaryosu

Uygulamayı sıfırdan oluşturmanız bile sorununuzu çözmezse, Android Studio'yu tamamen kaldırmayı deneyebilirsiniz. Bazı Kullanıcılar bunun sorunlarını çözdüğünü bildirdi.

**Android Studio ile ilişkili tüm dosyaları kaldırdığınızdan emin olun.** Android Studio'yu tüm gizli dosyalarla birlikte tamamen kaldırmazsanız, kaldırma işlemi mevcut dosyanızı çözmek yerine yeni sorunlara neden olabilir. Tam kaldırma kılavuzları online olarak bulunabilir,

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](#Building-APK-install-android-studio).
