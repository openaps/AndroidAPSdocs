# Yeni bir ana sürüme veya yan sürüme güncelleme

## Programı İndirmek yerine kendiniz oluşturun...

**AndroidAPS, tıbbi cihazlarla ilgili düzenlemeler nedeniyle indirilebilen bir uygulama değildir. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Lütfen yeni bir sürüm çıktıktan sonra mümkün olan en kısa sürede güncelleyin. You will receive an [information on the AndroidAPS home screen](Releasenotes-release-notes) about the new version.
* 2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. Git'e aşina değilseniz, güncellemenin en kolay yolu, AndroidAPS dizini kaldırmak ve [yeni bir klon](../Installing-AndroidAPS/Building-APK.md) oluşturmaktır.
* Apk'yi oluşturmak için lütfen **[Android Studio Sürüm 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** veya daha yenisini kullanın.
* [Windows 10 32-bit systems](troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio 2020.3.1.
* Make sure you read the [Release Notes](../Installing-AndroidAPS/Releasenotes.md) for the current version

## AndroidAPS sürümünüzü güncellemeye genel bakış

1. [Export your settings](../Usage/ExportImportSettings-export-settings) from the existing AAPS version on your phone. İhtiyacınız olmayabilir, ancak üzülmektense kurtarmış olmak daha iyidir.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AndroidAPS sourcecode (Git->Fetch and Git -> Pull)
3. [İmzalı APK Derleyin](Update-to-new-version-build-the-signed-apk)
4. [Transfer the built apk](Building-APK-transfer-apk-to-smartphone) to your phone and install it
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AndroidAPS
6. Depending on your [BG source](../Configuration/BG-Source.md) make sure to [identify receiver](xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Sorun yaşamanız durumunda, [Android Studio'da sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) konusu için ayrı sayfaya bakın.

## 1. Ayarlarınızı dışa aktarın

See the [Export & import settings](ExportImportSettings-export-settings) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Yerel kopyanızı güncelleyin

2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. If you are not familiar with git the easiest way for update is remove directory with AndroidAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

If you have already changed the URL or update from version 2.8.x, follow these steps:

* Mevcut AndroidAPS projenizi Android Studio ile açın. Projenizi seçmeniz gerekebilir. AndroidAPS projesine (Çift) tıklayın.
    
    ![Android Studio - Proje Seç](../images/update/01_ProjectSelection.png)

* Android Studio'nun menü çubuğunda Git -> Fetch'i seçin
    
    ![Android Studio Menüsü - Git - Fetch](../images/update/02_GitFetch.png)

* Sağ alt köşede Fetch'in başarılı olduğuna dair bir mesaj göreceksiniz.
    
    ![Android Studio Menüsü - Git - Fetch başarılı](../images/update/03_GitFetchSuccessful.png)

* Menü çubuğunda şimdi Git -> Pull'u seçin
    
    ![Android Studio Menüsü - Git - Pull](../images/update/04_GitPull.png)

* Tüm seçenekleri olduğu gibi bırakın (Origin/master) ve Pull'u seçin
    
    ![Android Studio - Git - Pull iletişim kutusu](../images/update/05_GitPullOptions.png)

* İndirme devam ederken bekleyin, bunu alt çubukta bilgi olarak göreceksiniz. Tamamlandığında, bir başarı mesajı göreceksiniz. Not: Güncellenen dosyalar değişiklik gösterebilir! Bu bir gösterge değildir
    
    ![Android Studio - Git - Pull başarılı](../images/update/06_GitPullSuccess.png)

* Gradle Sync, bazı bağımlılıkları indirmek için birkaç saniye çalışacaktır. Tamamlanana kadar bekleyin.
    
    ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

(Update-to-new-version-build-the-signed-apk)=

## 3. İmzalı APK'yı Derleyin

Your sourcecode is now the current released version. It's time to build the signed apk from it as described in the [build signed apk section](Building-APK-generate-signed-apk).

## 4. Apk dosyasını aktarma

You need to transfer the apk to your phone so you can install it.

See the instructions for [Transfer APK to smartphone](Building-APK-transfer-apk-to-smartphone)

## 5. Apk dosyasını kurun

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). Note: If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. When you install the apk, follow the prompts to install updates. For other scenarios such as establishing a new key store in Android Studio for your signed apk, you will need to delete the old app before installing the apk.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Telefondaki AAPS sürümünü kontrol edin

After you installed the new apk, you can check the AAPS version on your phone by clicking the three dots menu on the top right and then About. You should see the current version.

![AAPS version installed](../images/Update_VersionCheck282.png)

# Sorun giderme

If anything goes wrong, don't panic.

Take a breath!

Then see the separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio) if your problem is already documented!