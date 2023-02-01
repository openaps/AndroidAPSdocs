(troubleshooting-android-studio)=
# Android Studio'da Sorun Giderme

(lost-keystore)=
## Kayıp keystore
If you use the same keystore when updating AndroidAPS you do not have to uninstall the previous version on your smartphone. That's why it is recommended to store the keystore in a save place.

If you try to install the apk, signed with a different keystore than before, you will get an error message that the installation failed!

In case you cannot find your old keystore or its password anymore, proceed as follows:

1. [Export settings](../Usage/ExportImportSettings.md#export-settings) on your phone.
2. Ayarlar dosyasını telefonunuzdan harici bir konuma kopyalayın veya yükleyin (örn. bilgisayarınız, bulut depolama hizmetiniz...).
4. [Güncelleme kılavuzunda](../Installing-AndroidAPS/Update-to-new-version) açıklandığı gibi yeni sürümün imzalı apk'sını oluşturun ve telefonunuza aktarın.
5. Telefonunuzdaki önceki AAPS sürümünü kaldırın.
6. Telefonunuza yeni AAPS sürümünü yükleyin.
7. [Import settings](../Usage/ExportImportSettings.md#import-settings) to restore your objectives and configuration.
8. Pil optimizasyon seçeneklerinizi kontrol edin ve tekrar devre dışı bırakın.

   Bunları telefonunuzda bulamazsanız, harici depolama biriminden telefonunuza kopyalayın.
8. Döngü yapmaya devam edin.

## Gradle Sync başarısız oldu
Gradle Sync can fail to various reasons. Wen you get a message saying that gradle sync failed, open the "Build" tab (1) at the bottom of Android Studio and check what error message (2) is displayed.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

These are the usual gradle sync failures:
* [Uncommitted changes](#uncommitted-changes)
* [No cached version of ... available](#could-not-resolve-no-cached-version)
* [Android Gradle requires Java 11 to run](#android-gradle-plugin-requires-java-11-to-run)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](#gradle-resync) again.

### Uncommitted changes

If you receive a failure message like

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### Adım 1 - Git kurulumunu kontrol edin
  * Android Studio'nun altındaki terminal sekmesini (1) açın ve aşağıdaki metni kopyalayın ve terminale yapıştırın veya yazın.
    ```
    git --version
    ```

    ![Gradle Git Sürümü](../images/studioTroubleshooting/03_GitVersion.png)

    Not: Git ve version arasında bir boşluk ve iki tire vardır!

  * Yukarıdaki ekran görüntüsünde görebileceğiniz gibi, hangi git sürümünün kurulu olduğunu söyleyen bir mesaj almalısınız. Bu durumda, [2. Adım](#step-2-check-for-uncommitted-changes)'a gidin.

  * Diyen bir mesaj alırsanız
    ```
    Git: command not found
    ```
    git kurulumunuz doğru değil.

  * [Git kurulumunu kontrol et](../Installing-AndroidAPS/git-install.md#check-git-settings-in-android-studio)

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

    * Dosyalar tekrar Git sunucusundan alınır. Commit sekmesinde başka bir değişiklik yoksa, [3. Adım](#step-3-resync-gradle-again)'a gidin.

  * "Unversioned Files"ı görüyorsanız, başka bir yerde daha iyi olması gereken dosyaları kaynak kod dizininizde saklamış olabilirsiniz, örn. keystore dosyanız.

    * Bu dosyayı bir kaydetme yerine taşımak veya kesmek ve yapıştırmak için bilgisayarınızdaki normal dosya gezgininizi kullanın.

    * Dosyanın artık AndroidAPS dizininde saklanmadığından emin olmak için Android Studio'ya geri dönün ve Commit sekmesindeki Yenile düğmesine (4) tıklayın.

      Commit sekmesinde başka bir değişiklik yoksa, [3. Adım](#step-3-resync-gradle-again)'a gidin.


#### Adım 3 - Resync Gradle (tekrar)

Follow the instructions at [Gradle Resync](#gradle-resync).

### Android Gradle eklentisinin çalışması için Java 11 gerekir

  You might experience this error message:

  ![Android Gradle eklentisinin çalışması için Java 11 gerekir](../images/studioTroubleshooting/11_GradleJDK.png)

  Click on "Gradle Settings" (1) to go to open the gradle settings.

  If you don't have the link to the "Gradle Settings", open the Gradle settings manually by selecting the Gradle Tab on the right border (1), select the tools icon (2) and there the item 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  When you have opened the Gradle settings dialog, open the options (1) at "Gradle JDK" and selected the "Embedded JDK version" (2).

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Press "OK" to save and close the settings dialog.

  *Important*: If you don't see the setting "Gradle JDK", you might have not updated Android Studio. Make sure you are using Android Studio 2021.1.1 Bumblebee) or newer.

  Şimdi bir [Gradle Resync](#gradle-resync) tetiklemeniz gerekiyor

### Çözülemedi/Önbelleğe alınmış sürüm yok

  You might get this error message:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * Sağ tarafta Gradle sekmesini (1) açın.

    (2)'de gösterilen düğmenin Seçili *OLMADIĞINDAN* emin olun.

    ![Gradle Çevrimdışı Modu](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Şimdi bir [Gradle Resync](#gradle-resync) tetiklemeniz gerekiyor

(unable-to-start-daemon-process)=
### Daemon işlemi başlatılamıyor

  If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about.

  If you are using Windows 10 you must use a 64-bit operating system.

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  If you can still see the message that the gradle sync failed, now select the Link "Try again". ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  If you don't see the a message anymore, you can still trigger this manually:

  * Android Studio'nun sağ kenarındaki Gradle sekmesini (1) açın.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * AndroidAPS'ye sağ tıklayın (2)

  * "Reload Gradle Project" üzerine tıklayın (3)

## 0 yapı varyantı ile başarıyla İmzalı APK oluşturuldu

When you generate the signed apk, you might get the notification that generation was successfully but are told that 0 build variants where generated:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

This is a false warning. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](../Installing-AndroidAPS/Building-APK.md#generate-signed-apk)) and you will find the generated apk there!


## Uygulama, derleyici/kotlin uyarılarıyla oluşturuldu

If your build completed successfully but you get compiler or kotlin warnings (indicated by a yellow or blue exclamation mark) then you can just ignore these warnings.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Your app was build successfully and can be transferred to phone!


## Anahtar hatalarla oluşturuldu

When creating a new keystore for building the signed APK, on Windows the following error message might appear

![Anahtar hatalarla oluşturuldu](../images/AndroidStudio35SigningKeys.png)

This seems to be a bug with Android Studio 3.5.1 and its shipped Java environment in Windows. The key is created correctly but a recommendation is falsely displayed as an error. This can currently be ignored.


## AndroidAPS tarafından hiçbir CGM verisi alınmadı

* Yamalı Dexcom G6 uygulamasını kullanıyorsanız: Bu uygulama eski. Use the [BYODA](../Hardware/DexcomG6.md#if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](../Configuration/xdrip.md#identify-receiver).


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

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](../Installing-AndroidAPS/Update-to-new-version.md#update-your-local-copy)

## Yukarıdakilerin hiçbiri işe yaramadı

If non of the above tips helped you might consider building the app from scratch:

1. [Ayarları dışa aktar](../Usage/ExportImportSettings) (telefonunuzda zaten yüklü olan AAPS sürümünde)

2. Anahtar parolanızı ve anahtar deposu parolanızı hazır bulundurun. Parolalarınızı unuttuysanız, bunları [burada](https://youtu.be/nS3wxnLgZOo) açıklandığı gibi proje dosyalarında bulmaya çalışabilirsiniz.

    Veya yeni bir anahtar deposu kullanabilirsiniz.

3. Build app from scratch as described [here](../Installing-AndroidAPS/Building-APK.md#download-androidaps-code).

4. APK'yı başarıyla oluşturduğunuz zaman, telefonunuzdaki mevcut uygulamayı silin, yeni apk'yı telefonunuza aktarın ve yükleyin.
5. Hedeflerinizi ve ayarlarınızı geri yüklemek için tekrar [ayarları içe aktarın](../Usage/ExportImportSettings).
6. Pil optimizasyon seçeneklerinizi kontrol etmeli ve tekrar devre dışı bırakmalısınız.

## En kötü durum senaryosu

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](../Installing-AndroidAPS/Building-APK.md#install-android-studio).
