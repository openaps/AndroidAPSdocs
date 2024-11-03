# Yeni bir ana sürüme veya yan sürüme güncelleme

## Programı İndirmek yerine kendiniz oluşturun...

**AAPS** is not available to download, due to regulations concerning medical devices. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Önemli notlar

* Please update to the new version of **AAPS** as soon as possible after a new release is available.
* When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
* The new version will also be announced on Facebook at the time of release.
* Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
* You need to use version **[Hedgehog (2023.1.1) or Iguana (2023.2.1)](https://developer.android.com/studio/)** of Android Studio. If your version is older, please update first Android Studio first! 

## Overview for updating to a new version of AAPS

1. [Export your settings](ExportImportSettings.md) from the existing **AAPS** version on your phone. You might not need it, but better be safe than sorry.
2. [Update local copy](#2-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [İmzalı APK Derleyin](#3-build-the-signed-apk)
4. [Transfer the built apk](#4-transfer-the-apk) to your phone and install it
5. [Check the version](#6-check-aaps-version-on-phone) in AAPS
6. Depending on your [BG source](../Getting-Started/CompatiblesCgms.md) make sure to [identify receiver](#xdrip-identify-receiver) in xDrip or use the ['Build your own Dexcom App'](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

In case you experience problems, see separate page for [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio).

## 1. Ayarlarınızı dışa aktarın

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

(Update-to-new-version-update-your-local-copy)=

## 2. Yerel kopyanızı güncelleyin

    {admonition} WARNING
    :class: warning
    If you update from versions prior to 2.8.x, please follow the instructions to do a [New clone](../Installing-AndroidAPS/building-AAPS), as this guide will not work for you!

* Open your existing AAPS project with Android Studio. Projenizi seçmeniz gerekebilir. (Double) click on the AAPS project.
    
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

Kaynak kodunuz artık yayınlanan güncel sürümdür. It's time to build the signed apk from it as described in the [build signed apk section](#Building-APK-generate-signed-apk).

## 4. Apk dosyasını aktarma

Yükleyebilmeniz için apk'yı telefonunuza aktarmanız gerekir.

See the instructions for [Transfer APK to smartphone](../SettingUpAaps/TransferringAndInstallingAaps.md)

## 5. Apk dosyasını kurun

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)). Not: Derlemeyi Android Studio'da aynı mevcut anahtar deposuyla tamamladıysanız, telefonunuzdaki mevcut uygulamayı kaldırmanız gerekmez. Apk'yi kurduğunuzda, güncellemeleri yüklemek için talimatları izleyin. Android Studio'da yeni bir anahtar deposu oluşturarak imzaladığınız apk senaryosu için, apk'yi yüklemeden önce eski uygulamayı silmeniz gerekecektir.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Telefondaki AAPS sürümünü kontrol edin

Yeni apk'yı yükledikten sonra, sağ üstteki üç nokta menüsüne ve ardından Hakkında'ya tıklayarak telefonunuzdaki AAPS sürümünü kontrol edebilirsiniz. Mevcut sürümü görmelisiniz.

![Yüklü AAPS sürümü](../images/Update_VersionCheck282.png)

## Troubleshooting

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Then see the separate page [troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio) if your problem is already documented!

If you need further help, please reach out to other **AAPS** users on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw).