

(troubleshooting_androidstudio-troubleshooting-android-studio)=

# Android Studio'da Sorun Giderme

(troubleshooting_androidstudio-lost-keystore)=
## Kayıp keystore
If you use the same keystore when updating **AAPS** you do not have to uninstall the previous version on your smartphone. That's why it is recommended to store the keystore in a safe place.

If you try to install the apk, signed with a different keystore than before, you will get an error message explaining that the installation failed!

In the event that you cannot trace your old keystore or password, proceed as follows:

1. [Export settings](../Maintenance/ExportImportSettings.md) on your phone.
2. Ayarlar dosyasını telefonunuzdan harici bir konuma kopyalayın veya yükleyin (örn. bilgisayarınız, bulut depolama hizmetiniz...).
4. Generate a new version of the signed apk as described on the [Update guide](../Maintenance/UpdateToNewVersion) and transfer it to your phone.
5. Uninstall previous **AAPS** version on your phone.
6. Install new **AAPS** version on your phone.
7. [Import settings](#ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps) to restore your objectives and configuration.

   If you can't find these on your phone, copy them from the external storage to your phone.

8. Pil optimizasyon seçeneklerinizi kontrol edin ve tekrar devre dışı bırakın.
9. Keep on looping.

## Gradle Sync başarısız oldu
Gradle Sync can fail for various reasons. When you receive a message saying that 'gradle sync failed', open the "Build" tab (1) at the bottom of Android Studio and check what error message (2) is displayed.

![Gradle Başarısız](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

Likely reasons for gradle sync failures are:
* [Uncommitted changes](#uncommitted-changes)
* [No cached version of ... available](#could-not-resolveno-cached-version)
* [Incompatible Gradle JVM](#incompatible-gradle-jvm)
* [Incompatible version of the Android Gradle plugin](#incompatible-version-of-android-gradle-plugin)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](#gradle-resync) again.


### Uncommitted changes

If you receive a failure message like this one:

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
Build file 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' line: 243

There are uncommitted changes.
Clone sources again as described in wiki and do not allow gradle update
```

#### Adım 1 - Git kurulumunu kontrol edin
  * Android Studio'nun altındaki terminal sekmesini (1) açın ve aşağıdaki metni kopyalayın ve terminale yapıştırın veya yazın.
    ```
    git --version
    ```

    ![Gradle Git Sürümü](../images/studioTroubleshooting/03_GitVersion.png)

    Note: There is a space and two hyphens between Git and version!

  * You must receive a message saying what Git version is installed, as you can see in the screenshot above. In this case, go to [Step 2](#troubleshooting-android-studio-check-for-uncommitted-changes).

  * Diyen bir mesaj alırsanız
    ```
    Git: command not found
    ```
    git kurulumunuz doğru değil.

  * [Git kurulumunu kontrol et](#BuildingAaps-steps-for-installing-git)

  * if on Windows and the Git was just installed, you should restart your computer to make Git globally available after the installation

  * If Git is installed, you have restarted (if on windows), and Git still couldn't found:

  * Bilgisayarınızda "git.exe" dosyasını arayın.

    Note for yourself, which directory it is saved in.

  * Pencerelerde Ortam değişkenlerine gidin, "PATH" değişkenini seçin ve düzenle'ye tıklayın. Add the directory where you have found your Git installation.

  * Kaydedin ve çıkın.

  * Android Studio tekrar başlatın.


#### Adım 2: Taahhüt edilmemiş değişiklikleri kontrol edin.

  * In Android Studio, open the 'Commit' tab (1) on the left-hand side. ![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * Orada bir "Default changeset" (2) veya "Unversioned files" (3) görebilirsiniz:

    * For "Default changeset", you probably updated 'Gradle' or changed some of the file contents by mistake.

    * "Default Changeset" üzerine sağ tıklayın ve "Rollback" ı seçin

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * Dosyalar tekrar Git sunucusundan alınır. If there are no other changes in the commit tab, go to [Step 3](#gradle-resync).

  * If you can see "Unversioned Files", you might have stored files in your source code directory by mistake. Maybe they are important files: like your keystore file, that should be moved elsewhere. If you don't know what those files are and you have not created them yourself, you can delete them.

    * Use your regular file explorer on your computer to move or cut and paste that file to a safe place.

    * Go back to Android Studio and click the Refresh button (4) within the Commit tab to make sure the file is not stored in the **AAPS** directory anymore.

      If there are no other changes in the Commit tab, go to [Step 3](#gradle-resync).


#### Adım 3 - Resync Gradle (tekrar)

Follow the instructions at [Gradle Resync](#gradle-resync).

### Git Pull Failed - Please tell me who you are

If you see this message, Git needs you to identify yourself.

![Git identification](../images/studioTroubleshooting/164_Git_Identify.png)

Open the terminal and type the following two commands, one after the other.

```
git config --global user.name "Your name here"
git config --global user.email your.email@here.com
```

Your name needs to be written between quotation marks.

![Git identification fix](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
Your build is currently configured to use incompatible Java 21.0.3 and Gradle 8.2.
Cannot sync the project.

We recommend upgrading to Gradle version 8.9.

The minimum compatible Gradle version is 8.5.

The maximum compatible Gradle JVM version is 19.
```

Or:

```
Cause: error: invalid source release: 21
```

If you experience the above error message, you need to download a correct JVM version before you can try rebuild again:

1.  Check in the [requirement table](#Building-APK-recommended-specification-of-computer-for-building-apk-file) which JVM version you need for the **AAPS** version you are building, and make a note of it.

2. Open the Gradle view by clicking on the elephant (1) on the right side of Android Studio and open the settings (2) and select **Gradle Settings** (3):

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

3.  In **Gradle JDK** field, check if the appropriate version is selected (1) If not, click on the field, and see if it is already available in the list. The example below shows JVM 21 is labeled as “jbr-21”. If you find it, just select it, and you are done. If not available, then select 'Download JDK'.


![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)

4. In Version (1), select the JDK required for your **AAPS** version (the one you made a note of when you checked the requirement table). In Vendor (2) select 'JetBrains Runtime'. Location (3): do not change.

![Select JDK 17](../images/studioTroubleshooting/163_JDKSelection.png)

5.  Close the **Settings** dialog with **OK**.
6. You now need to restart the Gradle Sync. Follow the instructions at [Gradle Resync](#gradle-resync).

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

  Böyle bir hata mesajı görürseniz, muhtemelen Windows 10 32 bit sistem kullanıyorsunuzdur. This is not supported by Android Studio 3.5.1 and above and unfortunately there is nothing that the **AAPS** developers can do about this!

  There is information on the internet about how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle Resync

  Hala Gradle senkronizasyonunun başarısız olduğu mesajını görüyorsanız, şimdi "Tekrar dene" Bağlantısını seçin.  ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  If you don't see the message anymore, you can still trigger this manually:

  * Android Studio'nun sağ kenarındaki Gradle sekmesini (1) açın.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * Right-click on AAPS (2)

  * "Reload Gradle Project" üzerine tıklayın (3)

## 0 yapı varyantı ile başarıyla İmzalı APK oluşturuldu

When you generate the signed apk, you might get the notification that generation was successfully but are told that this is with '0 build variants' were generated:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

Bu yanlış bir uyarıdır. Check the directory for your selected "Destination folder" for generation (step [Generate Signed APK](#Building-APK-generate-signed-apk)) and you will find the generated apk there!


## Uygulama, derleyici/kotlin uyarılarıyla oluşturuldu

Derlemeniz başarıyla tamamlandıysa ancak derleyici veya kotlin uyarıları alıyorsanız (sarı veya mavi ünlem işaretiyle gösterilir), bu uyarıları görmezden gelebilirsiniz.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Your apk was built successfully and can be transferred to your phone!


## No CGM data is received by AAPS

* If you are using patched Dexcom G6 app: this app is outdated. Use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) app instead.

* If you are using xDrip+: identify receiver as described on [xDrip+ settings page](#xdrip-identify-receiver).


## Apk not installed

![phone app note installed](../images/Update_AppNotInstalled.png)

* “app-full-release.apk” dosyasını telefonunuza aktardığınızdan emin olun.
* Telefonunuzda "Uygulama yüklenmedi" mesajı görüntülenirse şu adımları izleyin:

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)
2. Uninstall **AAPS** on your phone.
3. Uçak modunu etkinleştir & bluetooth'u kapat.
4. Yeni sürümü yükleyin (“app-full-release.apk”)
5. [Ayarları içe aktarın](../Maintenance/ExportImportSettings.md)
6. Bluetooth'u tekrar açın ve uçak modunu devre dışı bırakın

## Apk installed but old version

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](#Update-to-new-version-update-your-local-copy)

## Yukarıdakilerin hiçbiri işe yaramadı

If none of the above tips helped you might consider building the apk from scratch:

1. [Export settings](../Maintenance/ExportImportSettings.md) (in AAPS version already installed on your phone)

2. Anahtar parolanızı ve anahtar deposu parolanızı hazır bulundurun. Parolalarınızı unuttuysanız, bunları [burada](https://youtu.be/nS3wxnLgZOo) açıklandığı gibi proje dosyalarında bulmaya çalışabilirsiniz.

    Veya yeni bir anahtar deposu kullanabilirsiniz.

3. Build the apk from scratch as described [here](#Building-APK-download-AAPS-code).

4. When you have built the apk successfully delete the existing apk on your phone, transfer the new apk to your phone and install.
5. [Import settings](../Maintenance/ExportImportSettings.md) again to restore your objectives and settings.
6. Pil optimizasyon seçeneklerinizi kontrol etmeli ve tekrar devre dışı bırakmalısınız.

## En kötü durum senaryosu

If the above does not solve your build issue you may wish to try to uninstall Android Studio completely and rebuild from scratch.  Some users find that this can resolve their build problem.  When deleting Android Studio, do not delete Android user settings and **Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Tam kaldırma kılavuzları online olarak bulunabilir,

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](#Building-APK-install-android-studio).
