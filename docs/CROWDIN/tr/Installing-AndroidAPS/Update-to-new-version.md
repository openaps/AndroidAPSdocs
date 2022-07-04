# Yeni bir ana sürüme veya yan sürüme güncelleme

## Programı İndirmek yerine kendiniz oluşturun...

**AndroidAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Lütfen yeni bir sürüm çıktıktan sonra mümkün olan en kısa sürede güncelleyin. Yeni sürüm hakkında [AndroidAPS ana ekranında bilgi](../Installing-AndroidAPS/Releasenotes#release-notes) alacaksınız.
* 2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS and do a [new clone](../Installing-AndroidAPS/Building-APK.md).
* Please use **[Android Studio Version 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Make sure you read the [Release Notes](../Installing-AndroidAPS/Releasenotes) for the current version

## Overview for updating your AndroidAPS version

1. [Export your settings](../Usage/ExportImportSettings#export-settings) from the existing AAPS version on your phone. You might not need it, but better be save than sorry.
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [Build signed APK](../Installing-AndroidAPS/Update-to-new-version#build-the-signed-apk)
4. [Transfer the built apk](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) to your phone and install it
5. [Check the version](#check-aaps-version-on-phone) in AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the ['Build your own Dexcom App'](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).

## 1. Export your settings

See the [Export & import settings](../Usage/ExportImportSettings#export-settings) page if you don't remember how to do this.

## 2. Update your local copy

2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Open your existing AndroidAPS project with Android Studio. You might need to select your project. (Double) click on the AndroidAPS project.
    
    ![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch
    
    ![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.
    
    ![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull
    
    ![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull
    
    ![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. When it's done, you will see a success message. Not: Güncellenen dosyalar değişiklik gösterebilir! Bu bir gösterge değildir
    
    ![Android Studio - Git - Pull başarılı](../images/update/06_GitPullSuccess.png)

* Gradle Sync, bazı bağımlılıkları indirmek için birkaç saniye çalışacaktır. Tamamlanana kadar bekleyin.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

## 3. İmzalı APK'yı Derleyin

Kaynak kodunuz artık yayınlanan güncel sürümdür. [İmzalı apk derle bölümünde](../Installing-AndroidAPS/Building-APK#generate-signed-apk) açıklandığı gibi bundan imzalı apk derlemenin zamanı geldi.

## 4. Apk dosyasını aktarma

Yükleyebilmeniz için apk'yı telefonunuza aktarmanız gerekir.

[APK'yi akıllı telefona aktarma](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone) talimatlarına bakın

## 5. Apk dosyasını kurun

Telefonunuzda bilinmeyen kaynaklardan kuruluma izin vermelisiniz. Bunun nasıl yapılacağına ilişkin kılavuzlar internette bulunabilir (yani [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)).

## 6. Telefondaki AAPS sürümünü kontrol edin

Yeni apk'yı yükledikten sonra, sağ üstteki üç nokta menüsüne ve ardından Hakkında'ya tıklayarak telefonunuzdaki AAPS sürümünü kontrol edebilirsiniz. Mevcut sürümü görmelisiniz.

![Yüklü AAPS sürümü](../images/Update_VersionCheck282.png)

# Sorun giderme

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Ardından, sorununuz zaten belgelenmişse, [Android Studio sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) sayfasına bakın!