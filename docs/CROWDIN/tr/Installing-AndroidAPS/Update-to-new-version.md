# Yeni bir ana sürüme veya yan sürüme güncelleme

## Programı İndirmek yerine kendiniz oluşturun...

**AAPS is not available as download due to regulation for medial devices. Uygulamayı kendi kullanımınız için oluşturmak yasaldır, ancak bir kopyasını başkasına vermemelisiniz! Ayrıntılar için [SSS sayfasına](../Getting-Started/FAQ.md) bakın.**

## Önemli notlar

* Lütfen yeni bir sürüm çıktıktan sonra mümkün olan en kısa sürede güncelleyin. You will receive an [information on the AAPS home screen](Releasenotes-release-notes) about the new version.
* 2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. Git'e aşina değilseniz, güncellemenin en kolay yolu, AAPS dizini kaldırmak ve [yeni bir klon](../Installing-AndroidAPS/Building-APK.md) oluşturmaktır.
* Apk'yi oluşturmak için lütfen **[Android Studio Sürüm 2020.3.1 (Arctic Fox)](https://developer.android.com/studio/)** veya daha yenisini kullanın.
* [Windows 10 32-bit sistemler](troubleshooting_androidstudio-unable-to-start-daemon-process) Android Studio 2020.3.1 tarafından desteklenmez.
* Mevcut sürüm için [Sürüm Notlarını](../Installing-AndroidAPS/Releasenotes.md) okuduğunuzdan emin olun

## Overview for updating your AAPS version

1. Telefonunuzdaki mevcut AAPS sürümünden [ayarlarınızı dışa aktarın](../Usage/ExportImportSettings-export-settings). İhtiyacınız olmayabilir, ancak üzülmektense kurtarmış olmak daha iyidir.
2. [Update local copy](Update-to-new-version-update-your-local-copy) of the AAPS sourcecode (Git->Fetch and Git -> Pull)
3. [İmzalı APK Derleyin](Update-to-new-version-build-the-signed-apk)
4. [Derlenmiş apk'yı](Building-APK-transfer-apk-to-smartphone) telefonunuza aktarın ve yükleyin
5. [Check the version](Update-to-new-version-check-aaps-version-on-phone) in AAPS
6. [KŞ kaynağınıza](../Configuration/BG-Source.md) bağlı olarak, xDrip'te [alıcıyı tanımladığınızdan](xdrip-identify-receiver) emin olun veya ['Kendi Dexcom Uygulamanızı oluşturun (BYODA)'](DexcomG6-if-using-g6-with-build-your-own-dexcom-app).

Sorun yaşamanız durumunda, [Android Studio'da sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) konusu için ayrı sayfaya bakın.

## 1. Ayarlarınızı dışa aktarın

Bunu nasıl yapacağınızı hatırlamıyorsanız, [ayarları dışa & içe aktarma](ExportImportSettings-export-settings) sayfasına bakın.

(Update-to-new-version-update-your-local-copy)=

## 2. Yerel kopyanızı güncelleyin

2.7 sürümünden itibaren depo konumu <https://github.com/nightscout/AndroidAPS> olarak değiştirildi. If you are not familiar with git the easiest way for update is remove directory with AAPS on your disk and follow the instructions to do a [New clone](../Installing-AndroidAPS/Building-APK.md).

URL'yi zaten değiştirdiyseniz veya 2.8.x sürümünden güncelleme yaptıysanız, şu adımları izleyin:

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

Kaynak kodunuz artık yayınlanan güncel sürümdür. [İmzalı apk derle bölümünde](Building-APK-generate-signed-apk) açıklandığı gibi bundan imzalı apk derlemenin zamanı geldi.

## 4. Apk dosyasını aktarma

Yükleyebilmeniz için apk'yı telefonunuza aktarmanız gerekir.

[APK'yi akıllı telefona aktarma](Building-APK-transfer-apk-to-smartphone) talimatlarına bakın

## 5. Apk dosyasını kurun

Telefonunuzda bilinmeyen kaynaklardan kuruluma izin vermelisiniz. Bunun nasıl yapılacağına ilişkin kılavuzlar internette bulunabilir (yani [burada](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) veya [burada](https://www.androidcentral.com/unknown-sources)). Not: Derlemeyi Android Studio'da aynı mevcut anahtar deposuyla tamamladıysanız, telefonunuzdaki mevcut uygulamayı kaldırmanız gerekmez. Apk'yi kurduğunuzda, güncellemeleri yüklemek için talimatları izleyin. Android Studio'da yeni bir anahtar deposu oluşturarak imzaladığınız apk senaryosu için, apk'yi yüklemeden önce eski uygulamayı silmeniz gerekecektir.

(Update-to-new-version-check-aaps-version-on-phone)=

## 6. Telefondaki AAPS sürümünü kontrol edin

Yeni apk'yı yükledikten sonra, sağ üstteki üç nokta menüsüne ve ardından Hakkında'ya tıklayarak telefonunuzdaki AAPS sürümünü kontrol edebilirsiniz. Mevcut sürümü görmelisiniz.

![Yüklü AAPS sürümü](../images/Update_VersionCheck282.png)

# Sorun giderme

Bir şeyler ters giderse, panik yapmayın.

Bir Nefes Alın!

Ardından, sorununuz zaten belgelenmişse, [Android Studio sorun giderme](../Installing-AndroidAPS/troubleshooting_androidstudio) sayfasına bakın!